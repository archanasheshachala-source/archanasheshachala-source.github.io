"use strict";

window.researchTopics = {
  pyrazine: {
    question: "Can a transport molecule also interact with surface defects?",
    context: "Pyrazine-derived materials · First author · ChemPlusChem, 2025",
    summary: "Imperfections at the perovskite surface can cause useful charge to be lost. I studied pyrazine-based molecules whose nitrogen atoms can interact with surface lead sites while the material acts as a hole-transport layer.",
    contributionLabel: "My contribution:",
    contribution: "Design and synthesis of pyrazine-derived materials, with experimental and theoretical analysis of their interfacial behaviour.",
    focus: "interface",
    diagramCaption: "The highlighted boundary is the perovskite/organic-layer interface studied in this work. Schematic, not to scale.",
    evidenceSummary: "Interaction experiments, spectroscopy, and modelling supported nitrogen–lead interaction and a role in charge transfer. The devices showed moderate efficiency.",
    comparisonLabel: "",
    comparisonRows: [],
    evidenceNote: "",
    technical: "Dopant-free pyrazine-derived hole-transport materials were examined as charge-extracting layers and potential interfacial passivating components. Interaction studies with PbI₂, photophysical/device analysis, and theoretical modelling probed coordination at undercoordinated Pb²⁺ sites and its relationship to charge transfer and recombination.",
    methods: "Organic synthesis · PbI₂ interaction studies · Photophysics · Theoretical modelling",
    paperHref: "https://doi.org/10.1002/cplu.202500124",
    paperLabel: "Read the paper",
    paperId: "paper-pyrazine"
  },
  star: {
    question: "Can a solar cell transport holes without added dopants?",
    context: "Carbazole–triphenylamine hybrids · First author · Carbon Energy, accepted",
    summary: "Dopants can help organic materials carry charge, but can also complicate stability. I designed star-shaped molecules that work as hole-transport layers without added dopants, linking their molecular structure with film formation and charge extraction.",
    contributionLabel: "My contribution:",
    contribution: "Molecular design and synthesis, with experimental and theoretical analysis connecting structure, charge transport, and device performance.",
    focus: "transport",
    diagramCaption: "The highlighted organic layer extracts holes without added dopants in this study. Schematic, not to scale.",
    evidenceSummary: "The optimised material was compared with undoped Spiro-OMeTAD in MAPbI₃ perovskite devices under identical conditions.",
    comparisonLabel: "Within-study comparison · MAPbI₃ devices · power conversion efficiency",
    comparisonRows: [
      { label: "Optimised dopant-free material", value: "17.73%" },
      { label: "Undoped Spiro-OMeTAD", value: "15.76%" }
    ],
    evidenceNote: "A separate mixed-cation/mixed-halide device system reached 19.24% efficiency.",
    technical: "Star-shaped carbazole–triphenylamine hybrids SS1 and SS2 were designed, synthesised, and characterised to connect peripheral donor substitution with optoelectronic properties, film morphology, interfacial recombination, and dopant-free hole extraction. DFT/TD-DFT, energy-level measurements, photophysical analysis, and photovoltaic characterisation supported the structure–property–performance study.",
    methods: "Organic synthesis · Spectroscopy · Device fabrication · DFT/TD-DFT",
    paperHref: "#paper-star",
    paperLabel: "Publication details",
    paperId: "paper-star"
  },
  pyridine: {
    question: "Can a spiro-free molecule approach the benchmark’s performance?",
    context: "Spiro-free PyCNEdTp · Co-author · Chemical Communications, 2026",
    summary: "Widely used hole-transport materials can have complex spiro-linked structures. In this co-authored study, we explored a donor–acceptor–donor molecule built around a dicyanopyridine core, offering a different molecular route to charge transport.",
    contributionLabel: "Collaborative work:",
    contribution: "A joint experimental and theoretical investigation of a spiro-free hole-transport material. The results describe the collaboration’s work.",
    focus: "architecture",
    diagramCaption: "The organic layer uses a spiro-free molecule. Device schematic, not to scale.",
    evidenceSummary: "The study compared PyCNEdTp with Spiro-OMeTAD in n-i-p perovskite solar cells.",
    comparisonLabel: "Within-study comparison · power conversion efficiency",
    comparisonRows: [
      { label: "PyCNEdTp", value: "22.8%" },
      { label: "Spiro-OMeTAD", value: "22.6%" }
    ],
    evidenceNote: "",
    technical: "PyCNEdTp is a spiro-free donor–acceptor–donor material based on a π-conjugated 3,5-dicyanopyridine core. Molecular calculations, energy-level measurements, film characterisation, and n-i-p device studies connected intramolecular charge transfer and molecular electronic structure with charge extraction. The reported 0.2 percentage-point difference alone does not establish statistical superiority.",
    methods: "DFT · Spectroscopy · GIWAXS · Device characterisation",
    paperHref: "https://doi.org/10.1039/D6CC01269H",
    paperLabel: "Read the paper",
    paperId: "paper-pyridine"
  }
};