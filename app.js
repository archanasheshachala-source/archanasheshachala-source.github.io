"use strict";
(() => {
  const $=id=>document.getElementById(id);
  const root=document.documentElement;
  const makeExternalIcon=()=>{const ns="http://www.w3.org/2000/svg",svg=document.createElementNS(ns,"svg"),path=document.createElementNS(ns,"path");svg.setAttribute("viewBox","0 0 14 14");svg.setAttribute("class","inline-icon");svg.setAttribute("aria-hidden","true");path.setAttribute("d","M3 11 11 3M4 3h7v7");svg.append(path);return svg};
  const themeButton=$("theme-toggle");
  let savedTheme; try{savedTheme=localStorage.getItem("research-profile-theme")}catch{}
  const mediaTheme=matchMedia("(prefers-color-scheme: dark)");
  const updateTheme=theme=>{root.dataset.theme=theme;themeButton.setAttribute("aria-label",`Use ${theme==="dark"?"light":"dark"} appearance`);document.querySelector('meta[name="theme-color"]').content=theme==="dark"?"#1b1e1c":"#fafaf8";};
  updateTheme(savedTheme || (mediaTheme.matches?"dark":"light"));
  themeButton.addEventListener("click",()=>{savedTheme=root.dataset.theme==="dark"?"light":"dark";updateTheme(savedTheme);try{localStorage.setItem("research-profile-theme",savedTheme)}catch{} });
  mediaTheme.addEventListener("change",e=>{if(!savedTheme)updateTheme(e.matches?"dark":"light")});

  let toastTimeout;
  const notify=message=>{$("feedback").textContent=message;$("feedback").hidden=false;clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$("feedback").hidden=true,3000)};
  async function copy(text,success){try{await navigator.clipboard.writeText(text);notify(success)}catch{notify("Copy is unavailable here. You can select the text or copy the address from your browser.")}}

  // A single study selection changes the explanation, schematic, and evidence.
  const tabs = [...document.querySelectorAll("[data-topic]")];
  const topics = window.researchTopics;
  let currentTopic = "star";
  const requiredFields = ["question", "context", "collaboration", "summary", "contributionLabel",
    "contribution", "focus", "diagramCaption", "evidenceSummary",
    "comparisonLabel", "evidenceNote", "technical", "methods", "paperHref",
    "paperLabel", "paperId"];
  const validTopics = topics && tabs.every(tab => {
    const topic = topics[tab.dataset.topic];
    return topic && requiredFields.every(field => typeof topic[field] === "string") &&
      Array.isArray(topic.diagramLayers) && topic.diagramLayers.length >= 6 &&
      topic.diagramLayers.every(layer => typeof layer.label === "string" && /^[a-z]+$/.test(layer.kind)) &&
      Array.isArray(topic.comparisonRows) &&
      topic.comparisonRows.every(row => typeof row.label === "string" && typeof row.value === "string");
  });

  function setText(id, value) {
    const element = $(id);
    if (element) element.textContent = value;
  }

  function renderResearch(closeDetail = true) {
    const topic = topics?.[currentTopic];
    if (!topic) return;
    setText("research-question", topic.question);
    setText("research-context", topic.context);
    setText("research-collaboration", topic.collaboration);
    setText("research-summary", topic.summary);
    setText("contribution-label", topic.contributionLabel);
    setText("research-contribution", topic.contribution);
    setText("diagram-caption", topic.diagramCaption);
    setText("research-evidence-summary", topic.evidenceSummary);
    setText("research-comparison-label", topic.comparisonLabel);
    setText("research-comparison-column", topic.comparisonColumn || "Material");
    setText("research-evidence-note", topic.evidenceNote);
    setText("research-technical-copy", topic.technical);
    setText("research-methods", topic.methods);

    const diagram = $("device-diagram");
    if (diagram) {
      diagram.dataset.focus = topic.focus;
      const stack = diagram.querySelector(".device-stack");
      if (stack) {
        stack.replaceChildren(...topic.diagramLayers.map(layer => {
          const row = document.createElement("div");
          row.className = `device-layer device-layer--${layer.kind}`;
          const label = document.createElement("span");
          label.className = "device-layer-label";
          label.textContent = layer.label;
          row.append(label);
          return row;
        }));
      }
    }
    const evidenceSummary = $("research-evidence-summary");
    if (evidenceSummary) evidenceSummary.hidden = !topic.evidenceSummary;
    const note = $("research-evidence-note");
    if (note) note.hidden = !topic.evidenceNote;
    const table = $("research-evidence-table");
    const tableBody = $("research-evidence-body");
    if (table && tableBody) {
      tableBody.replaceChildren();
      topic.comparisonRows.forEach(row => {
        const tr = document.createElement("tr");
        const label = document.createElement("th");
        label.scope = "row";
        label.textContent = row.label;
        const value = document.createElement("td");
        value.textContent = row.value;
        tr.append(label, value);
        tableBody.append(tr);
      });
      table.hidden = topic.comparisonRows.length === 0;
    }

    const sourceLink = $("research-paper");
    if (sourceLink) {
      sourceLink.href = topic.paperHref;
      sourceLink.textContent = topic.paperLabel;
      sourceLink.append(makeExternalIcon());
      if (topic.paperHref.startsWith("https:")) {
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
      } else {
        sourceLink.removeAttribute("target");
        sourceLink.removeAttribute("rel");
      }
    }
    const citationLink = document.querySelector(".research-citation-link");
    if (citationLink) {
      citationLink.href = `#${topic.paperId}`;
      citationLink.hidden = topic.paperHref === `#${topic.paperId}`;
    }
    if (closeDetail && $("research-technical")) $("research-technical").open = false;
    tabs.forEach(tab => {
      const selected = tab.dataset.topic === currentTopic;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && $("research-panel")) {
        $("research-panel").setAttribute("aria-labelledby", tab.id);
      }
    });
  }

  if (validTopics) {
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (currentTopic === tab.dataset.topic) return;
        currentTopic = tab.dataset.topic;
        renderResearch();
      });
      tab.addEventListener("keydown", event => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        currentTopic = tabs[next].dataset.topic;
        renderResearch();
        tabs[next].focus({ preventScroll: true });
      });
    });
    renderResearch(false);
  } else {
    // The complete first study stays readable even if the data file fails.
    tabs.forEach(tab => { tab.disabled = true; });
  }

  function openPublication(id, shouldScroll = true) {
    const paper = $(id);
    if (!paper?.classList.contains("paper")) return false;
    for (let ancestor = paper.parentElement; ancestor; ancestor = ancestor.parentElement) {
      if (ancestor.tagName === "DETAILS") ancestor.open = true;
    }
    const details = paper.querySelector(".paper-details");
    const summary = details?.querySelector("summary");
    if (details) details.open = true;
    if (shouldScroll) {
      paper.scrollIntoView({
        block: "start",
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
      summary?.focus({ preventScroll: true });
    }
    return true;
  }

  document.addEventListener("click", event => {
    const link = event.target.closest?.('a[href^="#paper-"]');
    if (!link || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const id = link.getAttribute("href").slice(1);
    if (!openPublication(id)) return;
    event.preventDefault();
    if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  });
  if (location.hash.startsWith("#paper-")) openPublication(location.hash.slice(1), false);
  addEventListener("hashchange", () => {
    if (location.hash.startsWith("#paper-")) openPublication(location.hash.slice(1));
  });

  document.querySelectorAll('a[href="#methods"]').forEach(link => {
    link.addEventListener("click", () => {
      const details = $("methods");
      if (details) details.open = true;
    });
  });

  document.querySelectorAll(".paper").forEach(paper => {
    const button = paper.querySelector(".copy-citation");
    if (!button) return;
    button.addEventListener("click", () => {
      const authors = paper.querySelector(".authors")?.textContent.trim() || "";
      const title = paper.querySelector("h3, h4")?.textContent.trim() || "";
      const journal = paper.querySelector(".paper-meta > span")?.textContent.trim() || "";
      const doi = paper.querySelector('a[href^="https://doi.org/"]')?.href || "";
      const status = ({ accepted: " (accepted)", submitted: " (submitted)", "in-preparation": " (in preparation)" })[paper.dataset.status] || "";
      copy(`${authors} ${title}. ${journal}${status}.${doi ? " " + doi : ""}`, "Citation copied");
    });
    button.hidden = false;
  });
  const shareButton = $("share-profile");
  if (shareButton) {
    shareButton.hidden = location.protocol !== "https:";
    shareButton.addEventListener("click", () => {
      const url = new URL(location.href);
      url.hash = "";
      url.search = "";
      copy(url.href, "Profile link copied");
    });
  }
})();
