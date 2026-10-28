"use strict";

(() => {
  const triggers = [...document.querySelectorAll("a[data-cv-preview]")];
  if (!triggers.length || document.getElementById("cv-preview-dialog") ||
      typeof HTMLDialogElement === "undefined" ||
      typeof HTMLDialogElement.prototype.showModal !== "function") return;

  const pdfUrl = new URL("assets/Archana-Sheshachala-CV.pdf?v=f893f7c314", document.baseURI);
  const pageUrls = [1, 2].map(page =>
    new URL(`assets/cv-page-${page}.png?v=bf2c2119f0`, document.baseURI));
  if ([pdfUrl, ...pageUrls].some(url => url.origin !== location.origin)) return;
  let dialog;
  let lastOpener = null;
  let overflowBeforeOpen = null;

  function restoreScroll() {
    if (!overflowBeforeOpen) return;
    const { value, priority } = overflowBeforeOpen;
    if (value) document.documentElement.style.setProperty("overflow", value, priority);
    else document.documentElement.style.removeProperty("overflow");
    overflowBeforeOpen = null;
  }

  try {
    dialog = document.createElement("dialog");
    dialog.id = "cv-preview-dialog";
    dialog.className = "cv-preview-dialog";
    dialog.setAttribute("aria-labelledby", "cv-preview-title");
    dialog.innerHTML = `
      <div class="cv-preview-shell">
        <header class="cv-preview-header">
          <h2 id="cv-preview-title" class="sr-only">Archana Sheshachala — CV</h2>
          <a id="cv-preview-download" class="cv-preview-icon" download="Archana-Sheshachala-CV.pdf" aria-label="Download CV PDF" title="Download CV PDF">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg>
          </a>
          <button id="cv-preview-close" class="cv-preview-icon" type="button" aria-label="Close CV preview" title="Close CV preview" autofocus>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
          </button>
        </header>
        <div id="cv-preview-body" class="cv-preview-body" tabindex="0" aria-label="Two-page CV preview; select a page to enlarge it">
          <p id="cv-preview-status" class="cv-preview-status" role="status" aria-live="polite"></p>
          <div id="cv-preview-pages" class="cv-preview-pages"></div>
        </div>
      </div>`;
    const get = id => dialog.querySelector(`#${id}`);
    const body = get("cv-preview-body");
    get("cv-preview-download").href = pdfUrl.href;
    const pageStates = ["pending", "pending"];

    function updateStatus() {
      const failed = pageStates.flatMap((state, index) => state === "error" ? [index + 1] : []);
      const status = get("cv-preview-status");
      status.textContent = failed.length ?
        `${failed.length === 2 ? "The preview" : `Page ${failed[0]}`} could not load. Use the download icon for the complete CV.` :
        pageStates.some(state => state !== "loaded") ? "Loading CV preview…" : "";
      status.hidden = !status.textContent;
    }

    const images = pageUrls.map((url, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cv-preview-page";
      button.setAttribute("aria-label", `Enlarge CV page ${index + 1}`);
      button.setAttribute("title", "Click or tap to enlarge");
      button.setAttribute("aria-pressed", "false");
      const image = document.createElement("img");
      image.width = 2482;
      image.height = 3510;
      image.decoding = "async";
      image.alt = `Archana Sheshachala's curriculum vitae, page ${index + 1} of 2`;
      image.addEventListener("load", () => {
        pageStates[index] = "loaded";
        button.hidden = false;
        updateStatus();
      });
      image.addEventListener("error", () => {
        pageStates[index] = "error";
        button.hidden = true;
        updateStatus();
      });
      button.addEventListener("click", event => setZoom(dialog.dataset.zoom !== "true", image, event));
      button.append(image);
      get("cv-preview-pages").append(button);
      return image;
    });

    function loadPages() {
      images.forEach((image, index) => {
        if (pageStates[index] === "loaded" || pageStates[index] === "loading") return;
        pageStates[index] = "loading";
        image.parentElement.hidden = false;
        image.removeAttribute("src");
        image.src = pageUrls[index].href;
      });
      updateStatus();
    }

    function setZoom(zoomed, selectedPage, event) {
      const top = body.getBoundingClientRect().top + body.clientTop;
      const page = selectedPage || images.find(image =>
        !image.parentElement.hidden && image.getBoundingClientRect().bottom > top);
      const before = page?.getBoundingClientRect();
      const offset = before ? top - before.top : 0;
      const verticalFraction = before?.height > 0 && offset >= 0 ? offset / before.height : null;
      const horizontalFraction = event?.detail && before?.width ?
        Math.max(0, Math.min(1, (event.clientX - before.left) / before.width)) : .65;

      dialog.dataset.zoom = String(zoomed);
      images.forEach((image, index) => {
        image.parentElement.setAttribute("aria-pressed", String(zoomed));
        image.parentElement.setAttribute("aria-label", `${zoomed ? "Fit" : "Enlarge"} CV page ${index + 1}${zoomed ? " to window" : ""}`);
        image.parentElement.title = zoomed ? "Click or tap to fit width" : "Click or tap to enlarge";
      });
      body.scrollLeft = zoomed ? Math.max(0, horizontalFraction * get("cv-preview-pages").offsetWidth - body.clientWidth / 2) : 0;
      if (page && before) {
        const after = page.getBoundingClientRect();
        const readingOffset = verticalFraction === null ? offset : verticalFraction * after.height;
        body.scrollTop += after.top - top + readingOffset;
      }
    }

    document.body.append(dialog);
    get("cv-preview-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      restoreScroll();
      lastOpener?.setAttribute("aria-expanded", "false");
      if (lastOpener?.isConnected) lastOpener.focus({ preventScroll: true });
      lastOpener = null;
    });
    document.addEventListener("click", event => {
      const trigger = event.target.closest?.("a[data-cv-preview]");
      if (!trigger || event.defaultPrevented || event.button > 0 ||
          event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
          document.querySelector("dialog[open]")) return;
      try {
        const style = document.documentElement.style;
        overflowBeforeOpen = { value: style.getPropertyValue("overflow"), priority: style.getPropertyPriority("overflow") };
        style.setProperty("overflow", "hidden");
        lastOpener = trigger;
        dialog.showModal();
        loadPages();
        setZoom(false);
        body.scrollTop = 0;
        body.scrollLeft = 0;
        trigger.setAttribute("aria-expanded", "true");
        event.preventDefault();
      } catch {
        restoreScroll();
        if (dialog.open) dialog.close();
        lastOpener = null;
        // The original anchor opens the current CV PDF if previewing fails.
      }
    });
    triggers.forEach(trigger => {
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.setAttribute("aria-controls", dialog.id);
      trigger.setAttribute("aria-expanded", "false");
    });
  } catch {
    restoreScroll();
    if (dialog?.open) dialog.close();
    dialog?.remove();
  }
})();
