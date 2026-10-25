"use strict";

(() => {
  const opener = document.getElementById("chemistry-open");
  const topicKeys = ["star", "pyrazine", "pyridine"];
  const scenes = window.chemistryScenes;
  const allowedLegendColors = new Set(["violet", "teal", "amber"]);

  if (!opener || document.getElementById("chemistry-dialog") ||
      typeof HTMLDialogElement === "undefined" ||
      typeof HTMLDialogElement.prototype.showModal !== "function") return;

  opener.hidden = true;
  let dialog;
  let overflowBeforeOpen = null;

  function restorePageScroll() {
    if (!overflowBeforeOpen) return;
    const { value, priority } = overflowBeforeOpen;
    if (value) document.documentElement.style.setProperty("overflow", value, priority);
    else document.documentElement.style.removeProperty("overflow");
    overflowBeforeOpen = null;
  }

  function lockPageScroll() {
    if (overflowBeforeOpen) return;
    const style = document.documentElement.style;
    overflowBeforeOpen = {
      value: style.getPropertyValue("overflow"),
      priority: style.getPropertyPriority("overflow")
    };
    style.setProperty("overflow", "hidden");
  }

  try {
    const nonempty = value => typeof value === "string" && value.trim().length > 0;
    const validSource = scene => {
      if (!/^paper-[a-z0-9-]+$/i.test(scene.paperId)) return false;
      if (scene.paperHref === `#${scene.paperId}`) return true;
      try { return new URL(scene.paperHref).protocol === "https:"; }
      catch { return false; }
    };
    if (!scenes || Object.keys(scenes).length !== topicKeys.length ||
        !topicKeys.every(key => {
          const scene = scenes[key];
          return scene && nonempty(scene.title) && nonempty(scene.context) && nonempty(scene.collaboration) &&
            nonempty(scene.paperHref) && validSource(scene) &&
            Array.isArray(scene.steps) && scene.steps.length === 3 &&
            scene.steps.every(step =>
              step && typeof step.scopeNote === "string" && ["title", "body", "svg", "description"]
                .every(field => nonempty(step[field])) &&
              Array.isArray(step.legend) && step.legend.every(item =>
                item && allowedLegendColors.has(item.color) && nonempty(item.label)));
        })) return;

    // All scene markup is authored alongside this controller, never visitor input.
    // Parse it once before exposing the opener, so malformed data fails closed.
    const svgNamespace = "http://www.w3.org/2000/svg";
    const parser = new DOMParser();
    const preparedSvg = new Map();
    for (const key of topicKeys) {
      const roots = scenes[key].steps.map((step, index) => {
        const parsed = parser.parseFromString(step.svg, "image/svg+xml");
        const svg = parsed.documentElement;
        if (parsed.querySelector("parsererror") || svg.localName !== "svg" ||
            svg.namespaceURI !== svgNamespace ||
            svg.querySelector("script, foreignObject, iframe, object, embed")) {
          throw new Error("Invalid authored chemistry SVG");
        }
        for (const element of [svg, ...svg.querySelectorAll("*")]) {
          for (const attribute of element.attributes) {
            if (/^on/i.test(attribute.name) ||
                ((attribute.localName === "href" || attribute.localName === "src") &&
                 !attribute.value.startsWith("#"))) {
              throw new Error("Active or external chemistry SVG markup");
            }
          }
        }
        for (const child of [...svg.children]) {
          if (child.localName === "title" || child.localName === "desc") child.remove();
        }
        const title = parsed.createElementNS(svgNamespace, "title");
        const description = parsed.createElementNS(svgNamespace, "desc");
        title.id = `chemistry-svg-title-${key}-${index}`;
        description.id = `chemistry-svg-description-${key}-${index}`;
        title.textContent = step.title;
        description.textContent = step.description;
        svg.prepend(title, description);
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-labelledby", title.id);
        svg.setAttribute("aria-describedby", description.id);
        svg.setAttribute("focusable", "false");
        return document.importNode(svg, true);
      });
      preparedSvg.set(key, roots);
    }

    dialog = document.createElement("dialog");
    dialog.id = "chemistry-dialog";
    dialog.className = "chemistry-dialog";
    dialog.setAttribute("aria-labelledby", "chemistry-title");
    dialog.setAttribute("aria-describedby", "chemistry-context");
    dialog.innerHTML = `
      <div class="chemistry-shell">
        <header class="chemistry-header">
          <div>
            <h2 id="chemistry-title">Chemistry, explored</h2>
            <p id="chemistry-context"></p>
            <p id="chemistry-collaboration"></p>
          </div>
          <button id="chemistry-close" class="chemistry-icon-button" type="button" aria-label="Close chemistry exploration" autofocus>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
          </button>
        </header>
        <div class="chemistry-tabs chemistry-topics" role="tablist" aria-label="Chemistry studies"></div>
        <div id="chemistry-workspace" class="chemistry-workspace chemistry-body" role="tabpanel" tabindex="0">
          <div class="chemistry-visual">
            <div id="chemistry-stage" class="chemistry-stage" data-animate="false"></div>
            <p id="chemistry-description" class="chemistry-description"></p>
            <p id="chemistry-scope" class="chemistry-scope"></p>
            <ul id="chemistry-legend" class="chemistry-legend" aria-label="Diagram legend"></ul>
          </div>
          <div class="chemistry-copy">
            <div class="chemistry-steps chemistry-stepbar" role="group" aria-label="Walkthrough steps"></div>
            <h3 id="chemistry-step-title"></h3>
            <p id="chemistry-step-copy"></p>
          </div>
        </div>
        <footer class="chemistry-footer">
          <div class="chemistry-controls">
            <button id="chemistry-prev" class="chemistry-button" type="button">Previous</button>
            <button id="chemistry-next" class="chemistry-button chemistry-button--primary" type="button">Next</button>
          </div>
          <div class="chemistry-controls">
            <button id="chemistry-play" class="chemistry-button" type="button" aria-pressed="false">Play walkthrough</button>
            <a id="chemistry-source" class="chemistry-button chemistry-source">Read the paper</a>
          </div>
        </footer>
        <p id="chemistry-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
      </div>`;
    document.body.append(dialog);

    const get = id => dialog.querySelector(`#${id}`);
    const stage = get("chemistry-stage");
    const status = get("chemistry-status");
    const sourceLink = get("chemistry-source");
    const playButton = get("chemistry-play");
    const previousButton = get("chemistry-prev");
    const nextButton = get("chemistry-next");
    const topicList = dialog.querySelector(".chemistry-topics");
    const stepList = dialog.querySelector(".chemistry-stepbar");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let currentTopic = topicKeys[0];
    let currentStep = 0;
    let playing = false;
    let completed = false;
    let timer = 0;
    let closingForSource = false;

    const topicButtons = topicKeys.map(key => {
      const button = document.createElement("button");
      button.type = "button";
      button.id = `chemistry-topic-${key}`;
      button.className = "chemistry-button";
      button.dataset.chemTopic = key;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "chemistry-workspace");
      button.textContent = scenes[key].title;
      topicList.append(button);
      return button;
    });
    const stepButtons = Array.from({ length: 3 }, (_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chemistry-button";
      button.dataset.chemStep = String(index);
      stepList.append(button);
      return button;
    });

    function updatePlaybackControl() {
      playButton.hidden = reducedMotion.matches;
      playButton.textContent = playing ? "Pause walkthrough" :
        completed ? "Replay walkthrough" : "Play walkthrough";
      playButton.setAttribute("aria-pressed", String(playing));
    }

    function stopPlayback({ complete = false } = {}) {
      clearTimeout(timer);
      timer = 0;
      playing = false;
      completed = complete;
      updatePlaybackControl();
    }

    function announceStep() {
      const scene = scenes[currentTopic];
      status.textContent = `${scene.title}. Step ${currentStep + 1} of 3: ${scene.steps[currentStep].title}.`;
    }

    function render({ animate = false, announce = false } = {}) {
      const scene = scenes[currentTopic];
      const step = scene.steps[currentStep];
      get("chemistry-context").textContent = scene.context;
      get("chemistry-collaboration").textContent = scene.collaboration;
      get("chemistry-step-title").textContent = step.title;
      get("chemistry-step-copy").textContent = step.body;
      get("chemistry-description").textContent = step.description;
      get("chemistry-scope").textContent = step.scopeNote;
      get("chemistry-scope").hidden = !step.scopeNote;

      stage.dataset.animate = "false";
      stage.replaceChildren(preparedSvg.get(currentTopic)[currentStep].cloneNode(true));
      if (animate && !reducedMotion.matches) {
        // Restart a single authored reveal; default scene geometry stays visible.
        void stage.offsetWidth;
        stage.dataset.animate = "true";
      }

      const legend = get("chemistry-legend");
      legend.replaceChildren();
      for (const item of step.legend) {
        const entry = document.createElement("li");
        const swatch = document.createElement("span");
        swatch.className = "chemistry-swatch";
        swatch.dataset.color = item.color;
        swatch.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.textContent = item.label;
        entry.append(swatch, label);
        legend.append(entry);
      }

      topicButtons.forEach(button => {
        const selected = button.dataset.chemTopic === currentTopic;
        button.setAttribute("aria-selected", String(selected));
        button.tabIndex = selected ? 0 : -1;
        if (selected) get("chemistry-workspace").setAttribute("aria-labelledby", button.id);
      });
      stepButtons.forEach((button, index) => {
        button.textContent = `${index + 1}. ${scene.steps[index].title}`;
        button.setAttribute("aria-label", `Step ${index + 1}: ${scene.steps[index].title}`);
        if (index === currentStep) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
      previousButton.disabled = currentStep === 0;
      nextButton.disabled = currentStep === 2;

      sourceLink.href = scene.paperHref;
      if (scene.paperHref.startsWith("#")) {
        sourceLink.textContent = "Paper & citation";
        sourceLink.removeAttribute("target");
        sourceLink.removeAttribute("rel");
      } else {
        sourceLink.textContent = "Read the paper";
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
      }
      updatePlaybackControl();
      if (announce) announceStep();
      get("chemistry-workspace").scrollTop = 0;
    }

    function chooseStep(index) {
      stopPlayback();
      if (index < 0 || index > 2) return;
      currentStep = index;
      render({ animate: true, announce: true });
    }

    function chooseTopic(key) {
      stopPlayback();
      currentTopic = key;
      currentStep = 0;
      render({ announce: true });
    }

    function scheduleAdvance() {
      timer = setTimeout(() => {
        timer = 0;
        if (!playing || !dialog.open || document.hidden || reducedMotion.matches) {
          stopPlayback();
          return;
        }
        if (currentStep < 2) {
          currentStep += 1;
          render({ animate: true });
          scheduleAdvance();
        } else {
          stopPlayback({ complete: true });
          status.textContent = "Walkthrough complete. Replay to start again.";
        }
      }, 4000);
    }

    topicButtons.forEach((button, index) => {
      button.addEventListener("click", () => chooseTopic(button.dataset.chemTopic));
      button.addEventListener("keydown", event => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % topicButtons.length;
        else if (event.key === "ArrowLeft") next = (index + topicButtons.length - 1) % topicButtons.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = topicButtons.length - 1;
        else return;
        event.preventDefault();
        chooseTopic(topicKeys[next]);
        topicButtons[next].focus({ preventScroll: true });
      });
    });
    stepButtons.forEach((button, index) => {
      button.addEventListener("click", () => chooseStep(index));
    });
    previousButton.addEventListener("click", () => chooseStep(currentStep - 1));
    nextButton.addEventListener("click", () => chooseStep(currentStep + 1));
    playButton.addEventListener("click", () => {
      if (playing) {
        stopPlayback();
        stage.dataset.animate = "false";
        status.textContent = "Walkthrough paused.";
        return;
      }
      if (reducedMotion.matches || !dialog.open || document.hidden) return;
      currentStep = 0;
      completed = false;
      playing = true;
      render({ animate: true });
      status.textContent = "Walkthrough playing. You can pause or choose any step.";
      scheduleAdvance();
    });

    get("chemistry-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("cancel", () => {
      stopPlayback();
      stage.dataset.animate = "false";
    });
    dialog.addEventListener("close", () => {
      stopPlayback();
      stage.dataset.animate = "false";
      opener.setAttribute("aria-expanded", "false");
      restorePageScroll();
      status.textContent = "";
      // An internal paper click bubbles to app.js, which focuses its citation.
      // Do not override that focus with a later dialog close event.
      if (!closingForSource && opener.isConnected) opener.focus({ preventScroll: true });
      closingForSource = false;
    });
    sourceLink.addEventListener("click", event => {
      stopPlayback();
      stage.dataset.animate = "false";
      if (!sourceLink.getAttribute("href").startsWith("#") ||
          event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      closingForSource = true;
      dialog.close();
      // Keep default/bubbling behavior: the existing publication-link handler
      // opens and focuses the paper details after this synchronous close.
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) return;
      const wasPlaying = playing;
      stopPlayback();
      stage.dataset.animate = "false";
      if (wasPlaying && dialog.open) status.textContent = "Walkthrough paused.";
    });
    reducedMotion.addEventListener("change", () => {
      const playHadFocus = document.activeElement === playButton;
      stopPlayback();
      stage.dataset.animate = "false";
      if (dialog.open) {
        if (reducedMotion.matches && playHadFocus) {
          stepButtons[currentStep].focus({ preventScroll: true });
        }
        status.textContent = reducedMotion.matches ?
          "Motion is off. All steps remain available." : "Walkthrough paused.";
      }
    });

    opener.addEventListener("click", () => {
      if (dialog.open) return;
      const selected = document.querySelector('main [data-topic][aria-selected="true"]');
      currentTopic = topicKeys.includes(selected?.dataset.topic) ? selected.dataset.topic : topicKeys[0];
      currentStep = 0;
      closingForSource = false;
      dialog.returnValue = "";
      stopPlayback();
      render();
      try {
        lockPageScroll();
        dialog.showModal();
        get("chemistry-workspace").scrollTop = 0;
        opener.setAttribute("aria-expanded", "true");
        announceStep();
      } catch {
        restorePageScroll();
        opener.hidden = true;
      }
    });

    render();
    opener.setAttribute("aria-haspopup", "dialog");
    opener.setAttribute("aria-controls", dialog.id);
    opener.setAttribute("aria-expanded", "false");
    opener.hidden = false;
  } catch {
    restorePageScroll();
    if (dialog?.open) dialog.close();
    dialog?.remove();
    opener.hidden = true;
  }
})();

