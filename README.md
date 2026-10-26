# Archana Sheshachala — research profile

A static personal academic website with an integrated monochrome portrait, linked research explanations, a coloured click-open chemistry walkthrough, expandable citations, an on-page CV preview/download, and professional contact links.

Website address: https://archanasheshachala-source.github.io/

Repository: https://github.com/archanasheshachala-source/archanasheshachala-source.github.io

## Publish on GitHub Pages

The personal account is `archanasheshachala-source`. `site.config.json.publicUrl` is set to the repository's Pages address; the build generates canonical and absolute sharing-image metadata for it.

1. Run `node prepare.mjs` from the editable source project. If moving to another domain, first update `publicUrl` or pass the confirmed address using `--site-url URL`.
2. Upload the contents of `dist/` to this repository's `main` branch, keeping `index.html` at the root and preserving the `assets/` directories. Do not upload the outer `dist/` directory as a nested folder.
3. GitHub Pages uses `main` and `/(root)`. Wait for its deployment to finish, then verify the page, sharing image, paper links, and CV at the public address.

GitHub's current instructions: https://docs.github.com/en/pages/quickstart

## Update the content

- Introduction, contact details, background, and publication list: `index.html`.
- Interactive research explanations, mechanism emphasis, and evidence tables: `research.js`.
- Replace the CV at `assets/Archana-Sheshachala-CV.pdf` to keep the download URL stable.
- Regenerate `assets/cv-page-1.png` and `assets/cv-page-2.png` from that same PDF when replacing it; the preview uses those pages. Preview behaviour and layout live in `cv-preview.js` and `cv-preview.css`.
- Portrait: `assets/archana-monochrome.png`, a static transparent monochrome edit of the supplied original. The source photo is retained locally at `assets/archana.png`; edit provenance is recorded in `docs/portrait-asset.md`.
- Appearance and responsive layout: `style.css`.
- Click-open chemistry scenes and their scientific copy: `chemistry-scenes.js`.
- Chemistry dialog, finite playback, and keyboard behaviour: `chemistry.js`; its scoped appearance: `chemistry.css`.

The Carbon Energy article has no verified DOI in the supplied material and is labelled **Accepted** with “link to follow.” The Materials Advances article retains the **Accepted** status from the supplied record and links to its DOI. Chemical Communications publication was verified against the locally supplied published article. Keep these statuses current as publisher records change.

The displayed efficiency results describe the relevant individual studies and should retain their device/test context. Research summaries exclude unpublished manuscript and patent details. The full publication list includes manuscript titles/authors/status explicitly requested by the user; no unpublished full texts are distributed. The attached CV is the user's selected CV with the phone entry removed, alignment improved and computational expertise updated at their request on 26 October 2026. It retains the original two-page style, fonts, portrait and remaining text. Its 300-dpi preview pages are rendered directly from the current public PDF.

## Local preview and packaging

From the source project, run `node prepare.mjs` to copy only the public website files into `dist/`. Serve `dist/` using a static web server. No dependency installation is required. Content hashes on script/style URLs prevent older browser caches from mixing incompatible revisions. The build also versions PDF links and CV preview images together from the selected PDF's content hash, so a replacement does not show an older cached CV.

The publishing archive contains the contents of `dist/`. Source context, research documents, and review screenshots are kept outside it.

## Interaction and accessibility

- The portrait is a plain, noninteractive image without a frame, background panel, caption, or effect control. The compact utility row contains only location and theme.
- “View CV” opens the same two-page preview on desktop and phones, with a compact download/close toolbar. Select a page to enlarge it. Images load only when previewed. Escape or Close returns focus; without JavaScript, the link opens the current PDF directly.
- Research order is Dopant-free transport, Interface chemistry, then Spiro-free design; dopant-free transport is the HTML and JavaScript default. Use the study tabs or Left/Right/Home/End keys. The schematic emphasis, contribution, and evidence change together. Desktop pairs a compact schematic with one aligned reading column. Mobile keeps the short summary and results together before the schematic. Contribution & methods reveals the detailed role and technical depth; chemistry exploration sits with the paper actions.
- Study-specific collaboration credits identify Penn State for dopant-free transport/interface chemistry and Toin University of Yokohama for spiro-free design, without changing individual contribution statements.
- The diagram is a simplified, labelled n-i-p architecture. Its emphasis identifies the studied organic layer or interface. Detailed molecular illustrations are available in the optional chemistry exploration.
- “Explore the chemistry” opens nine coloured scenes across three studies, in the same topic order. Pyrazine is shown as a real 1,4-diazine core motif, not a complete studied molecule. The SS1/SS2 architecture names the carbazole core, two thiophene-linked terminal TPA arms, and the distinct N-linked methoxy-TPA arm, following the supplied thesis Figure 3.1. The architecture views are explicitly schematics. Playback is user-started, finite, and stops on navigation, close, or visibility loss. Reduced motion retains static steps and hides playback.
- Three featured study papers remain visible. “View full list” expands the other six works, including the clearly labelled manuscripts; all nine works are retained. Native disclosures contain full authors and citation copying; existing published studies retain their summaries. Citation links open any enclosing full-list disclosure, then open, scroll to, and focus the appropriate paper. Clipboard actions work on supported secure browser origins.
- System appearance is respected initially, with a manual light/dark toggle. Reduced-motion preferences disable optional chemistry animations and smooth scrolling.
- No third-party analytics, visitor accounts, cookies, or contact-form service is used. A local appearance preference is saved in the browser when available.

## Credits and rights

Visual direction requested by the user: the simplicity of https://cali.so. This implementation uses original code and the user's supplied content and portrait; no reference-site assets are copied.

DM Sans is self-hosted under its bundled SIL Open Font License in `assets/fonts/OFL-DM-Sans.txt`. The portrait and CV belong to their respective owner. Paper links point to publishers rather than redistributing publisher PDFs.

The pyrazine core motif was cross-checked against the primary compound record at https://pubchem.ncbi.nlm.nih.gov/compound/pyrazine. All SVG scenes are original code-based schematics; there are no measured orbital plots, numerical kinetics, or invented energy-level diagrams.
