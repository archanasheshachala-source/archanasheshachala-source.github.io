"use strict";

(() => {
  const triggers = [...document.querySelectorAll("a[data-cv-preview]")];
  if (!triggers.length || document.getElementById("cv-preview-dialog") ||
      typeof HTMLDialogElement === "undefined" ||
      typeof HTMLDialogElement.prototype.showModal !== "function") return;

  const pdfUrl = new URL("assets/Archana-Sheshachala-CV.pdf", document.baseURI);
  const pageUrls = [1, 2].map(page =>
    new URL(`assets/cv-page-${page}.png`, document.baseURI));
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
    dialog.setAttribute("aria-describedby", "cv-preview-note");
    dialog.innerHTML = `
      <div class="cv-preview-shell">
        <header class="cv-preview-header">
          <div class="cv-preview-heading">
            <h2 id="cv-preview-title">Curriculum vitae</h2>
            <p>Archana Sheshachala · 2 pages</p>
          </div>
          <div class="cv-preview-actions">
            <a id="cv-preview-download" class="cv-preview-action" download>Download PDF</a>
            <a id="cv-preview-original" class="cv-preview-action" target="_blank" rel="noopener noreferrer">Open PDF in a new tab</a>
            <button id="cv-preview-zoom" class="cv-preview-action cv-preview-zoom" type="button" aria-pressed="false">Zoom in</button>
          </div>
          <button id="cv-preview-close" class="cv-preview-close" type="button" autofocus>Close</button>
        </header>
        <div id="cv-preview-body" class="cv-preview-body" tabindex="0" aria-label="Two-page CV preview">
          <p id="cv-preview-note" class="cv-preview-note">Preview images. Open the original PDF for selectable text.</p>
          <p id="cv-preview-status" class="cv-preview-status" role="status" aria-live="polite"></p>
          <div class="cv-preview-pages"></div>
        </div>
      </div>`;
    const get = id => dialog.querySelector(`#${id}`);
    get("cv-preview-download").href = pdfUrl.href;
    get("cv-preview-original").href = pdfUrl.href;
    const pageContainer = dialog.querySelector(".cv-preview-pages");
    const pageStates = ["pending", "pending"];

    function updateStatus() {
      const failed = pageStates.flatMap((state, index) => state === "error" ? [index + 1] : []);
      const loading = pageStates.some(state => state === "pending" || state === "loading");
      const status = get("cv-preview-status");
      if (failed.length) {
        status.textContent = failed.length === 2 ?
          "The preview images could not load. Open or download the PDF above." :
          `Page ${failed[0]} could not load. Open the PDF above for the complete CV.`;
      } else {
        status.textContent = loading ? "Loading CV preview…" : "";
      }
      status.hidden = !status.textContent;
    }

    const images = pageUrls.map((url, index) => {
      const figure = document.createElement("figure");
      figure.className = "cv-preview-page";
      const image = document.createElement("img");
      image.width = 1034;
      image.height = 1463;
      image.decoding = "async";
      image.alt = `Archana Sheshachala's curriculum vitae, page ${index + 1} of 2`;
      const caption = document.createElement("figcaption");
      caption.textContent = `Page ${index + 1} of 2`;
      image.addEventListener("load", () => {
        pageStates[index] = "loaded";
        figure.hidden = false;
        updateStatus();
      });
      image.addEventListener("error", () => {
        pageStates[index] = "error";
        figure.hidden = true;
        updateStatus();
      });
      figure.append(image, caption);
      pageContainer.append(figure);
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

    document.body.append(dialog);
    const zoomButton = get("cv-preview-zoom");
    function setZoom(zoomed) {
      dialog.dataset.zoom = String(zoomed);
      zoomButton.textContent = zoomed ? "Fit width" : "Zoom in";
      zoomButton.setAttribute("aria-pressed", String(zoomed));
      get("cv-preview-body").scrollLeft = 0;
    }
    zoomButton.addEventListener("click", () => {
      setZoom(dialog.dataset.zoom !== "true");
    });
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
          event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (document.querySelector("dialog[open]")) return;
      try {
        const style = document.documentElement.style;
        overflowBeforeOpen = {
          value: style.getPropertyValue("overflow"),
          priority: style.getPropertyPriority("overflow")
        };
        style.setProperty("overflow", "hidden");
        lastOpener = trigger;
        dialog.showModal();
        setZoom(false);
        get("cv-preview-body").scrollTop = 0;
        trigger.setAttribute("aria-expanded", "true");
        loadPages();
        event.preventDefault();
      } catch {
        restoreScroll();
        lastOpener = null;
        // The original anchor still opens the real PDF if previewing fails.
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

