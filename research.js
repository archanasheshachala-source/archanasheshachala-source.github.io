"use strict";

window.researchTopics = {
  "star": {
    "question": "19.24% efficiency with a dopant-free hole-transport material",
    "context": "Carbazole–triphenylamine hybrids · First author · Carbon Energy, accepted",
    "summary": "I designed star-shaped carbazole–triphenylamine materials for hole extraction without added dopants.",
    "contributionLabel": "My contribution:",
    "contribution": "Molecular design and synthesis, initial device fabrication, and experimental and theoretical analysis linking molecular structure with charge transport and device performance.",
    "focus": "transport",
    "diagramCaption": "MAPbI₃ and mixed-cation absorbers tested. Device structure; layer thicknesses are illustrative.",
    "evidenceSummary": "Unencapsulated SS1 cells retained >91% of their initial efficiency after 1,500 h of storage (~28 °C, ~65% relative humidity).",
    "comparisonLabel": "SS1 power conversion efficiency",
    "comparisonColumn": "Device configuration",
    "comparisonRows": [
      {
        "label": "Mixed-cation/mixed-halide cell",
        "value": "19.24%"
      },
      {
        "label": "MAPbI₃ cell · 1 cm² active area",
        "value": "17.25%"
      }
    ],
    "evidenceNote": "In matched MAPbI₃ cells (~0.096 cm²), dopant-free SS1 (17.73%) and SS2 (16.68%) exceeded undoped Spiro-OMeTAD (15.76%).",
    "methods": "Organic synthesis · Spectroscopy · Device fabrication · DFT/TD-DFT",
    "paperHref": "#paper-star",
    "paperLabel": "Publication details",
    "paperId": "paper-star",
    "collaboration": "Collaborative work with Penn State, USA.",
    "diagramLayers": [
      {
        "kind": "electrode",
        "label": "Au · top electrode"
      },
      {
        "kind": "htm",
        "label": "SS1 / SS2 · dopant-free HTL"
      },
      {
        "kind": "absorber",
        "label": "Perovskite absorber"
      },
      {
        "kind": "etl",
        "label": "SnO₂ · electron transport"
      },
      {
        "kind": "ito",
        "label": "ITO · transparent electrode"
      },
      {
        "kind": "glass",
        "label": "Glass substrate"
      }
    ],
    "practicalContext": "SS1 combines dopant-free processing with a lower lab-scale cost: its estimated reagent cost at 1 g scale was about one-sixth of Spiro-OMeTAD’s."
  },
  "pyrazine": {
    "question": "Pyrazine: an underexplored core for hole transport",
    "context": "Pyrazine-derived materials · First author · ChemPlusChem, 2025",
    "summary": "I designed pyrazine-based materials to study hole extraction and nitrogen–lead interaction at the perovskite surface.",
    "contributionLabel": "My contribution:",
    "contribution": "Design and synthesis of pyrazine-derived materials, with experimental and theoretical analysis of their interfacial behaviour.",
    "focus": "interface",
    "diagramCaption": "PS1 / PS2 directly contact MAPbI₃. Device structure; layer thicknesses are illustrative.",
    "evidenceSummary": "Interaction experiments, spectroscopy, and modelling supported nitrogen–lead interaction and a role in charge transfer. The devices showed moderate efficiency.",
    "comparisonLabel": "",
    "comparisonRows": [],
    "evidenceNote": "",
    "methods": "Organic synthesis · PbI₂ interaction studies · Photophysics · Theoretical modelling",
    "paperHref": "https://doi.org/10.1002/cplu.202500124",
    "paperLabel": "Read the paper",
    "paperId": "paper-pyrazine",
    "collaboration": "Collaborative work with Penn State, USA.",
    "diagramLayers": [
      {
        "kind": "electrode",
        "label": "Au · top electrode"
      },
      {
        "kind": "htm",
        "label": "PS1 / PS2 · dopant-free HTL"
      },
      {
        "kind": "absorber",
        "label": "MAPbI₃ · absorber"
      },
      {
        "kind": "etl",
        "label": "SnO₂ · electron transport"
      },
      {
        "kind": "ito",
        "label": "ITO · transparent electrode"
      },
      {
        "kind": "glass",
        "label": "Glass substrate"
      }
    ],
    "practicalContext": "Pyrazine-based materials offer design insights for combining hole extraction with surface interaction in future perovskite devices."
  },
  "pyridine": {
    "question": "Can a spiro-free molecule approach the benchmark’s performance?",
    "context": "PyCNEdTp · Co-author · Chemical Communications, 2026",
    "summary": "In this co-authored study, we explored PyCNEdTp, a spiro-free donor–acceptor–donor material built around a dicyanopyridine core.",
    "contributionLabel": "My contribution:",
    "contribution": "Material synthesis, manuscript review and editing, as part of the collaboration.",
    "focus": "architecture",
    "diagramCaption": "PEAI-treated surface beneath PyCNEdTp. Device structure; layer thicknesses are illustrative.",
    "evidenceSummary": "",
    "comparisonLabel": "Power conversion efficiency · n-i-p solar cells",
    "comparisonRows": [
      {
        "label": "PyCNEdTp",
        "value": "22.8%"
      },
      {
        "label": "Spiro-OMeTAD",
        "value": "22.6%"
      }
    ],
    "evidenceNote": "",
    "methods": "Study methods: DFT · Spectroscopy · GIWAXS · Device characterisation",
    "paperHref": "https://doi.org/10.1039/D6CC01269H",
    "paperLabel": "Read the paper",
    "paperId": "paper-pyridine",
    "collaboration": "Collaborative work with Toin University of Yokohama, Japan.",
    "diagramLayers": [
      {
        "kind": "electrode",
        "label": "Au · top electrode"
      },
      {
        "kind": "htm",
        "label": "PyCNEdTp · hole transport"
      },
      {
        "kind": "passivation",
        "label": "PEAI · surface treatment"
      },
      {
        "kind": "absorber",
        "label": "CsFAMAPb(I,Br)₃ · absorber"
      },
      {
        "kind": "etl",
        "label": "SnO₂ · electron transport"
      },
      {
        "kind": "ito",
        "label": "ITO · transparent electrode"
      },
      {
        "kind": "glass",
        "label": "Glass substrate"
      }
    ],
    "practicalContext": "PyCNEdTp matches the Spiro-OMeTAD benchmark with a spiro-free design, offering another route for future hole-transport materials."
  }
};
