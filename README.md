# Archana Sheshachala — research profile

A static personal academic website with a clear original portrait and optional halftone effect, linked research explanations, a coloured click-open chemistry walkthrough, expandable citations, an on-page CV preview/download, and professional contact links.

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
- Portrait source: `assets/archana.png`. The halftone is computed locally in the visitor's browser; the photo is not sent to a service.
- Appearance and responsive layout: `style.css`.
- Click-open chemistry scenes and their scientific copy: `chemistry-scenes.js`.
- Chemistry dialog, finite playback, and keyboard behaviour: `chemistry.js`; its scoped appearance: `chemistry.css`.

The Carbon Energy article has no verified DOI in the supplied material and is labelled **Accepted** with “link to follow.” The Materials Advances article retains the **Accepted** status from the supplied record and links to its DOI. Chemical Communications publication was verified against the locally supplied published article. Keep these statuses current as publisher records change.

The displayed efficiency results describe the relevant individual studies and should retain their device/test context. The site does not include unpublished manuscript details, patent details, a private address, or a telephone number. The attached CV is the user’s existing LinkedIn-oriented version.

## Local preview and packaging

From the source project, run `node prepare.mjs` to copy only the public website files into `dist/`. Serve `dist/` using a static web server. No dependency installation is required. Content hashes on script/style URLs prevent older browser caches from mixing incompatible revisions. Direct file opening keeps the original portrait available if browser canvas restrictions prevent halftone rendering.

The publishing archive contains the contents of `dist/`. Source context, research documents, and review screenshots are kept outside it.

## Interaction and accessibility

- The original colour portrait is the default. “Try halftone” enables the optional dot treatment; “Show photo” restores the original. Pointer interaction affects dots only when halftone is selected.
- “View CV” opens a focused, scrollable preview of the two original CV pages. Download PDF and Open PDF remain available. Escape or Close returns focus to the link; without JavaScript, the same link opens the PDF directly.
- Use the research study tabs or Left/Right/Home/End keys. The schematic emphasis, contribution, and evidence change together. Native disclosures reveal methods and technical depth.
- The diagram is a simplified, labelled n-i-p architecture. Its interaction motifs are conceptual explanations, not chemical structures or measured simulations.
- “Explore the chemistry” opens nine coloured scenes across three studies. Pyrazine is shown as a real 1,4-diazine core motif, not a complete studied molecule; the star-shaped and donor–acceptor–donor views are explicitly conceptual topologies. Playback is user-started, finite, and stops on navigation, close, or visibility loss. Reduced motion retains static steps and hides playback.
- All five publication titles remain visible; native disclosures contain full authors, significance, and citation copying. Citation links open, scroll to, and focus the appropriate disclosure. Clipboard actions work on supported secure browser origins.
- System appearance is respected initially, with a manual light/dark toggle. Reduced-motion preferences disable portrait displacement.
- No third-party analytics, visitor accounts, cookies, or contact-form service is used. A local appearance preference is saved in the browser when available.

## Credits and rights

Visual direction requested by the user: the simplicity of https://cali.so. This implementation uses original code and the user's supplied content and portrait; no reference-site assets are copied.

DM Sans is self-hosted under its bundled SIL Open Font License in `assets/fonts/OFL-DM-Sans.txt`. The portrait and CV belong to their respective owner. Paper links point to publishers rather than redistributing publisher PDFs.

The pyrazine core motif was cross-checked against the primary compound record at https://pubchem.ncbi.nlm.nih.gov/compound/pyrazine. All SVG scenes are original code-based schematics; there are no measured orbital plots, numerical kinetics, or invented energy-level diagrams.
