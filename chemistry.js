"use strict";

(() => {
  const opener = document.getElementById("chemistry-open");
  const keys = ["star", "pyrazine", "pyridine"];
  const scenes = window.chemistryScenes;
  const viewNames = ["Molecular design", "Device structure"];
  if (!opener || document.getElementById("chemistry-dialog") ||
      typeof HTMLDialogElement === "undefined" || !HTMLDialogElement.prototype.showModal) return;
  opener.hidden = true;
  let dialog;
  let scrollBefore = null;
  let closingForSource = false;
  const restoreScroll = () => {
    if (!scrollBefore) return;
    const { value, priority } = scrollBefore;
    if (value) document.documentElement.style.setProperty("overflow", value, priority);
    else document.documentElement.style.removeProperty("overflow");
    scrollBefore = null;
  };
  try {
    const text = value => typeof value === "string" && value.trim().length;
    const validSource = scene => {
      if (!/^paper-[a-z0-9-]+$/i.test(scene.paperId)) return false;
      if (scene.paperHref === `#${scene.paperId}`) return true;
      try { return new URL(scene.paperHref).protocol === "https:"; } catch { return false; }
    };
    if (!scenes || !keys.every(key => {
      const s = scenes[key];
      return s && [s.title, s.context].every(text) && validSource(s) &&
        s.steps?.length === viewNames.length && s.steps.every(step =>
          [step.title, step.body, step.description].every(text) &&
          typeof step.scopeNote === "string" &&
          Array.isArray(step.characterisation) && step.characterisation.length > 0 &&
          step.characterisation.every(group => text(group.label) &&
            Array.isArray(group.methods) && group.methods.length > 0 && group.methods.every(text)) &&
          text(step.svg));
    })) return;

    const parser = new DOMParser();
    const prepared = new Map();
    keys.forEach(key => {
      prepared.set(key, scenes[key].steps.map((step, index) => {
        const doc = parser.parseFromString(step.svg, "image/svg+xml");
        const svg = doc.documentElement;
        if (doc.querySelector("parsererror") || svg.localName !== "svg" ||
            svg.namespaceURI !== "http://www.w3.org/2000/svg" ||
            svg.querySelector("script,foreignObject,iframe,object,embed")) throw new Error("Invalid study SVG");
        [svg, ...svg.querySelectorAll("*")].forEach(element => {
          [...element.attributes].forEach(a => {
            if (/^on/i.test(a.name) || ((a.localName === "href" || a.localName === "src") && !a.value.startsWith("#"))) {
              throw new Error("Active study SVG");
            }
          });
        });
        [...svg.children].filter(n => ["title", "desc"].includes(n.localName)).forEach(n => n.remove());
        const title = doc.createElementNS(svg.namespaceURI, "title");
        title.id = `chemistry-svg-title-${key}-${index}`;
        title.textContent = step.description;
        svg.prepend(title);
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-labelledby", title.id);
        svg.setAttribute("focusable", "false");
        return document.importNode(svg, true);
      }));
    });

    dialog = document.createElement("dialog");
    dialog.id = "chemistry-dialog";
    dialog.className = "chemistry-dialog";
    dialog.setAttribute("aria-labelledby", "chemistry-title");
    dialog.setAttribute("aria-describedby", "chemistry-context");
    dialog.innerHTML = `
      <div class="chemistry-shell">
        <header class="chemistry-header">
          <div><h2 id="chemistry-title"></h2><p id="chemistry-context"></p></div>
          <button id="chemistry-close" class="chemistry-icon-button" type="button" aria-label="Close study" autofocus>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
          </button>
        </header>
        <div class="chemistry-views" role="tablist" aria-label="Study figures"></div>
        <div id="chemistry-workspace" class="chemistry-workspace" role="tabpanel" tabindex="0">
          <figure class="chemistry-figure">
            <div id="chemistry-stage" class="chemistry-stage"></div>
            <figcaption><p id="chemistry-description"></p><p id="chemistry-scope"></p></figcaption>
          </figure>
          <div class="chemistry-copy">
            <h3 id="chemistry-step-title"></h3><p id="chemistry-step-copy"></p>
            <section class="chemistry-methods" aria-labelledby="chemistry-methods-title">
              <h4 id="chemistry-methods-title">Characterisation</h4>
              <dl id="chemistry-methods-list"></dl>
            </section>
          </div>
        </div>
        <footer class="chemistry-footer">
          <label class="chemistry-study-label" for="chemistry-study">Study <select id="chemistry-study"></select></label>
          <a id="chemistry-source"></a>
        </footer>
        <p id="chemistry-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
      </div>`;
    document.body.append(dialog);
    const get = id => dialog.querySelector(`#${id}`);
    const stage = get("chemistry-stage");
    const workspace = get("chemistry-workspace");
    const sourceLink = get("chemistry-source");
    const select = get("chemistry-study");
    let topic = keys[0];
    let view = 0;
    const tabs = viewNames.map((label, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.id = `chemistry-view-${index}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "chemistry-workspace");
      button.textContent = label;
      dialog.querySelector(".chemistry-views").append(button);
      return button;
    });
    keys.forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = scenes[key].title;
      select.append(option);
    });
    const setText = (id, value) => { get(id).textContent = value; };
    function render(announce = false) {
      const scene = scenes[topic];
      const step = scene.steps[view];
      setText("chemistry-title", scene.title);
      setText("chemistry-context", scene.context);
      setText("chemistry-step-title", step.title);
      setText("chemistry-step-copy", step.body);
      const methods = get("chemistry-methods-list");
      methods.replaceChildren();
      step.characterisation.forEach(group => {
        const row = document.createElement("div");
        const label = document.createElement("dt");
        const list = document.createElement("dd");
        label.textContent = group.label;
        list.textContent = group.methods.join(" · ");
        row.append(label, list);
        methods.append(row);
      });
      setText("chemistry-description", step.description);
      get("chemistry-description").hidden = view === 1;
      setText("chemistry-scope", step.scopeNote);
      get("chemistry-scope").hidden = !step.scopeNote;
      stage.replaceChildren();
      stage.append(prepared.get(topic)[view].cloneNode(true));
      select.value = topic;
      tabs.forEach((button, index) => {
        const selected = index === view;
        button.setAttribute("aria-selected", String(selected));
        button.tabIndex = selected ? 0 : -1;
      });
      workspace.setAttribute("aria-labelledby", tabs[view].id);
      sourceLink.href = scene.paperHref;
      sourceLink.textContent = scene.paperHref.startsWith("#") ? "Publication details" : "Read the paper";
      if (scene.paperHref.startsWith("#")) {
        sourceLink.removeAttribute("target"); sourceLink.removeAttribute("rel");
      } else { sourceLink.target = "_blank"; sourceLink.rel = "noopener noreferrer"; }
      workspace.scrollTop = 0;
      if (announce) setText("chemistry-status", `${scene.title}: ${viewNames[view]}.`);
    }
    tabs.forEach((button, index) => {
      button.addEventListener("click", () => { view = index; render(true); });
      button.addEventListener("keydown", event => {
        let next;
        if (event.key === "ArrowRight") next = (view + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (view + tabs.length - 1) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault(); view = next; render(true); tabs[next].focus({ preventScroll: true });
      });
    });
    select.addEventListener("change", () => { if (keys.includes(select.value)) { topic = select.value; view = 0; render(true); } });
    get("chemistry-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      restoreScroll(); opener.setAttribute("aria-expanded", "false"); setText("chemistry-status", "");
      if (!closingForSource && opener.isConnected) opener.focus({ preventScroll: true });
      closingForSource = false;
    });
    sourceLink.addEventListener("click", event => {
      if (!sourceLink.getAttribute("href").startsWith("#") || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      closingForSource = true; dialog.close();
    });
    opener.addEventListener("click", () => {
      if (dialog.open) return;
      const selected = document.querySelector('main [data-topic][aria-selected="true"]')?.dataset.topic;
      topic = keys.includes(selected) ? selected : keys[0]; view = 0; closingForSource = false; render();
      const style = document.documentElement.style;
      scrollBefore = { value: style.getPropertyValue("overflow"), priority: style.getPropertyPriority("overflow") };
      style.setProperty("overflow", "hidden");
      try { dialog.showModal(); workspace.scrollTop = 0; opener.setAttribute("aria-expanded", "true"); }
      catch { restoreScroll(); opener.hidden = true; }
    });
    render(); opener.setAttribute("aria-haspopup", "dialog"); opener.setAttribute("aria-controls", dialog.id);
    opener.setAttribute("aria-expanded", "false"); opener.hidden = false;
  } catch {
    restoreScroll(); if (dialog?.open) dialog.close(); dialog?.remove(); opener.hidden = true;
  }
})();
