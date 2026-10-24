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

  const portrait=$("portrait"),canvas=$("halftone"),photo=$("portrait-photo"),portraitToggle=$("portrait-toggle");
  try {
  const ctx=canvas.getContext("2d");
  const reducedMotion=matchMedia("(prefers-reduced-motion: reduce)");
  let dots=[],frame=0,pointer={x:-1000,y:-1000},lastMove=0,canvasWidth=0,canvasHeight=0;
  function buildPortrait(){
    if(!ctx||!photo.naturalWidth)return;
    const w=portrait.clientWidth,h=portrait.clientHeight,dpr=Math.min(devicePixelRatio||1,2);
    canvasWidth=w;canvasHeight=h;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    const sample=document.createElement("canvas");sample.width=w;sample.height=h;
    const sc=sample.getContext("2d",{willReadFrequently:true});
    const sw=photo.naturalWidth*.60,sh=sw*h/w,sx=photo.naturalWidth*.20,sy=photo.naturalHeight*.045;
    const scale=w/sw;
    Object.assign(photo.style,{width:`${photo.naturalWidth*scale}px`,height:`${photo.naturalHeight*scale}px`,left:`${-sx*scale}px`,top:`${-sy*scale}px`,transform:"none",objectFit:"fill"});
    if(!sc)return;
    sc.drawImage(photo,sx,sy,sw,sh,0,0,w,h);
    let pixels;try{pixels=sc.getImageData(0,0,w,h).data}catch{return}
    const step=2.65;
    const background=new Uint8Array(w*h),queue=new Int32Array(w*h);
    let queueStart=0,queueEnd=0;
    function markBackground(x,y){
      const point=y*w+x;if(background[point])return;const i=point*4;
      const r=pixels[i],g=pixels[i+1],b=pixels[i+2];
      const lum=(r*.2126+g*.7152+b*.0722)/255;
      if(lum<.71||Math.max(r,g,b)-Math.min(r,g,b)>42)return;
      background[point]=1;queue[queueEnd++]=point;
    }
    for(let x=0;x<w;x++){markBackground(x,0);markBackground(x,h-1)}
    for(let y=0;y<h;y++){markBackground(0,y);markBackground(w-1,y)}
    while(queueStart<queueEnd){const point=queue[queueStart++],x=point%w,y=Math.floor(point/w);if(x>0)markBackground(x-1,y);if(x<w-1)markBackground(x+1,y);if(y>0)markBackground(x,y-1);if(y<h-1)markBackground(x,y+1)}
    dots=[];
    for(let y=step/2;y<h;y+=step){for(let x=step/2;x<w;x+=step){
      const point=Math.floor(y)*w+Math.floor(x),i=point*4;
      if(background[point])continue;
      const lum=(pixels[i]*.2126+pixels[i+1]*.7152+pixels[i+2]*.0722)/255;
      const darkness=Math.max(0,Math.min(1,(1-lum-.16)/.73));
      const lightness=Math.max(.035,Math.min(1,(lum-.04)/.86));
      dots.push({x,y,rLight:Math.sqrt(darkness)*step*.47,rDark:Math.sqrt(lightness)*step*.47,dx:0,dy:0});
    }}
    portrait.classList.add("ready");portraitToggle.hidden=false;requestPaint();
  }
  function requestPaint(){if(ctx&&dots.length&&!frame)frame=requestAnimationFrame(paint)}
  function paint(){
    frame=0;ctx.clearRect(0,0,canvasWidth,canvasHeight);ctx.fillStyle=getComputedStyle(root).getPropertyValue("--ink").trim();const dark=root.dataset.theme==="dark";
    let moving=false;const active=!reducedMotion.matches&&!portrait.classList.contains("show-photo")&&performance.now()-lastMove<1200;
    for(const dot of dots){let tx=0,ty=0;
      if(active){const px=dot.x-pointer.x,py=dot.y-pointer.y,dist=Math.hypot(px,py);if(dist<44&&dist>.01){const force=(1-dist/44)**2*13;tx=px/dist*force;ty=py/dist*force}}
      if(reducedMotion.matches){dot.dx=0;dot.dy=0}else{dot.dx+=(tx-dot.dx)*.14;dot.dy+=(ty-dot.dy)*.14;}
      if(Math.abs(tx-dot.dx)>.035||Math.abs(ty-dot.dy)>.035)moving=true;
      const radius=dark?dot.rDark:dot.rLight;if(radius>.05){ctx.beginPath();ctx.arc(dot.x+dot.dx,dot.y+dot.dy,radius,0,Math.PI*2);ctx.fill()}
    }
    if(moving&&!document.hidden)requestPaint();
  }
  portrait.addEventListener("pointermove",e=>{if(reducedMotion.matches||portrait.classList.contains("show-photo")||e.pointerType==="touch")return;const rect=portrait.getBoundingClientRect();pointer={x:e.clientX-rect.left,y:e.clientY-rect.top};lastMove=performance.now();requestPaint()});
  portrait.addEventListener("pointerleave",()=>{lastMove=0;requestPaint()});
  portraitToggle.addEventListener("click",()=>{const showing=portrait.classList.toggle("show-photo");portraitToggle.setAttribute("aria-pressed",String(!showing));portraitToggle.setAttribute("aria-label",showing?"Show halftone portrait":"Show original portrait");portraitToggle.textContent=showing?"Try halftone":"Show photo";lastMove=0;requestPaint()});
  const safeBuild=()=>{try{buildPortrait()}catch{portrait.classList.remove("ready");portraitToggle.hidden=true}};
  if(photo.complete)safeBuild();else photo.addEventListener("load",safeBuild,{once:true});
  if(typeof ResizeObserver!=="undefined")new ResizeObserver(safeBuild).observe(portrait);
  if(typeof MutationObserver!=="undefined")new MutationObserver(requestPaint).observe(root,{attributes:true,attributeFilter:["data-theme"]});
  reducedMotion.addEventListener("change",()=>{lastMove=0;requestPaint()});
  } catch { portrait.classList.remove("ready");portraitToggle.hidden=true; }

  // A single study selection changes the explanation, schematic, and evidence.
  const tabs = [...document.querySelectorAll("[data-topic]")];
  const topics = window.researchTopics;
  let currentTopic = "pyrazine";
  const requiredFields = ["question", "context", "summary", "contributionLabel",
    "contribution", "focus", "diagramCaption", "evidenceSummary",
    "comparisonLabel", "evidenceNote", "technical", "methods", "paperHref",
    "paperLabel", "paperId"];
  const validTopics = topics && tabs.every(tab => {
    const topic = topics[tab.dataset.topic];
    return topic && requiredFields.every(field => typeof topic[field] === "string") &&
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
    setText("research-summary", topic.summary);
    setText("contribution-label", topic.contributionLabel);
    setText("research-contribution", topic.contribution);
    setText("diagram-caption", topic.diagramCaption);
    setText("research-evidence-summary", topic.evidenceSummary);
    setText("research-comparison-label", topic.comparisonLabel);
    setText("research-evidence-note", topic.evidenceNote);
    setText("research-technical-copy", topic.technical);
    setText("research-methods", topic.methods);

    const diagram = $("device-diagram");
    if (diagram) diagram.dataset.focus = topic.focus;
    document.querySelectorAll("[data-mechanism]").forEach(strip => {
      strip.hidden = strip.dataset.mechanism !== topic.focus;
    });
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
    if (location.hash.startsWith("#paper-")) openPublication(location.hash.slice(1), false);
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
      const title = paper.querySelector("h3")?.textContent.trim() || "";
      const journal = paper.querySelector(".paper-meta > span")?.textContent.trim() || "";
      const doi = paper.querySelector('a[href^="https://doi.org/"]')?.href || "";
      const status = paper.dataset.status === "accepted" ? " (accepted)" : "";
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
