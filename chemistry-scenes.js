"use strict";

window.chemistryScenes = {
  "star": {
    "title": "Dopant-free transport",
    "context": "Carbazole–triphenylamine hybrids · First author · Carbon Energy, accepted",
    "paperHref": "#paper-star",
    "paperId": "paper-star",
    "steps": [
      {
        "title": "Molecular idea",
        "body": "SS1 and SS2 share a carbazole core with two thiophene-linked triphenylamine (TPA) arms and a third methoxy-substituted TPA attached at carbazole nitrogen. Methoxy substitution on the two terminal arms distinguishes SS1 from SS2.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-star-1-title chem-star-1-desc\"><title id=\"chem-star-1-title\">The SS1 and SS2 molecular architecture</title><desc id=\"chem-star-1-desc\">Two thiophene spacers connect carbazole positions 3 and 6 to terminal triphenylamine donors. A third methoxy-substituted triphenylamine arm is attached at carbazole nitrogen without a thiophene spacer. Terminal donors are methoxy-substituted in SS1 and unsubstituted in SS2.</desc>\n    <text class=\"chemistry-stage-title\" x=\"330\" y=\"46\" text-anchor=\"middle\">The SS1 / SS2 molecular design</text>\n    <text class=\"chemistry-muted-label\" x=\"330\" y=\"76\" text-anchor=\"middle\">Two thiophene-linked arms + one N-linked arm</text>\n    <g class=\"chemistry-reveal\">\n      <path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M102 182H128M238 182H250M410 182H422M532 182H558M330 220V244M330 276V316\"/>\n      <rect class=\"chemistry-organic-node\" x=\"16\" y=\"147\" width=\"86\" height=\"70\" rx=\"8\"/>\n      <rect class=\"chemistry-layer-teal\" x=\"128\" y=\"158\" width=\"110\" height=\"48\" rx=\"8\"/>\n      <rect class=\"chemistry-organic-node\" x=\"250\" y=\"147\" width=\"160\" height=\"73\" rx=\"8\"/>\n      <rect class=\"chemistry-layer-teal\" x=\"422\" y=\"158\" width=\"110\" height=\"48\" rx=\"8\"/>\n      <rect class=\"chemistry-organic-node\" x=\"558\" y=\"147\" width=\"86\" height=\"70\" rx=\"8\"/>\n      <text class=\"chemistry-label\" x=\"59\" y=\"177\" text-anchor=\"middle\">TPA</text><text class=\"chemistry-small-label\" x=\"59\" y=\"201\" text-anchor=\"middle\">donor</text>\n      <text class=\"chemistry-small-label\" x=\"183\" y=\"188\" text-anchor=\"middle\">Thiophene</text>\n      <text class=\"chemistry-label\" x=\"330\" y=\"178\" text-anchor=\"middle\">Carbazole</text><text class=\"chemistry-small-label\" x=\"330\" y=\"203\" text-anchor=\"middle\">3,6-linked arms</text>\n      <text class=\"chemistry-small-label\" x=\"477\" y=\"188\" text-anchor=\"middle\">Thiophene</text>\n      <text class=\"chemistry-label\" x=\"601\" y=\"177\" text-anchor=\"middle\">TPA</text><text class=\"chemistry-small-label\" x=\"601\" y=\"201\" text-anchor=\"middle\">donor</text>\n      <circle class=\"chemistry-surface-site\" cx=\"330\" cy=\"260\" r=\"16\"/><text class=\"chemistry-atom\" x=\"330\" y=\"268\" text-anchor=\"middle\">N</text>\n      <text class=\"chemistry-muted-label\" x=\"359\" y=\"296\">N-aryl linkage</text>\n      <rect class=\"chemistry-organic-node\" x=\"216\" y=\"316\" width=\"228\" height=\"66\" rx=\"8\"/>\n      <text class=\"chemistry-label\" x=\"330\" y=\"345\" text-anchor=\"middle\">Methoxy-TPA</text><text class=\"chemistry-small-label\" x=\"330\" y=\"369\" text-anchor=\"middle\">Same N-linked arm in both</text>\n    </g>\n    <text class=\"chemistry-muted-label\" x=\"330\" y=\"419\" text-anchor=\"middle\">SS1: methoxy-TPA terminal donors</text>\n    <text class=\"chemistry-muted-label\" x=\"330\" y=\"444\" text-anchor=\"middle\">SS2: unsubstituted TPA terminal donors</text></svg>",
        "description": "The carbazole–thiophene backbone carries two terminal donor arms; the third arm attaches at carbazole nitrogen.",
        "scopeNote": "Simplified molecular architecture. The N-linked arm has limited conjugation with the backbone.",
        "legend": [
          {
            "color": "violet",
            "label": "Carbazole and TPA donor units"
          },
          {
            "color": "teal",
            "label": "Thiophene spacers / N attachment"
          }
        ]
      },
      {
        "title": "In the device",
        "body": "The devices use an ITO/SnO₂/perovskite/HTM/Au n-i-p stack. SS1 or SS2 forms the dopant-free hole-transport layer. Molecular substitution was studied alongside film formation, charge extraction, and recombination at this contact.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-star-2-title chem-star-2-desc\"><title id=\"chem-star-2-title\">Study-specific n-i-p device stack</title><desc id=\"chem-star-2-desc\">Top to bottom: Au · top electrode, SS1 / SS2 · dopant-free HTL, Perovskite absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-star-2-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">SS1 / SS2</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Hole transport · no added dopants</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"167\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"202\" text-anchor=\"middle\">Perovskite absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"232\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"251\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V283\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"273\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V336\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "The studied molecules sit between the perovskite absorber and gold electrode, extracting holes without added dopants.",
        "scopeNote": "Device structure; layer thicknesses are illustrative.",
        "legend": [
          {
            "color": "violet",
            "label": "Dopant-free SS1 / SS2 layer"
          },
          {
            "color": "teal",
            "label": "Perovskite and contact"
          },
          {
            "color": "amber",
            "label": "Light and charge directions"
          }
        ]
      },
      {
        "title": "Evidence",
        "body": "SS1 reached 19.24% PCE in a mixed-cation/mixed-halide cell. Separately, a 1 cm² MAPbI₃ device reached 17.25%. Unencapsulated SS1 cells retained >91% of initial efficiency after 1,500 h of storage at ~28 °C and ~65% relative humidity.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-star-3-title chem-star-3-desc\"><title id=\"chem-star-3-title\">Three distinct SS1 device results</title><desc id=\"chem-star-3-desc\">SS1: 19.24 percent power conversion efficiency in a mixed-cation/mixed-halide small-area cell; 17.25 percent in a separate one square centimetre MAPbI3 cell; over 91 percent initial efficiency retained after 1,500 hours unencapsulated storage. These are separate test conditions.</desc>\n    <g class=\"chemistry-reveal\">\n      <text class=\"chemistry-stage-title\" x=\"48\" y=\"55\">Dopant-free SS1: device evidence</text>\n      <text class=\"chemistry-muted-label\" x=\"48\" y=\"84\">Separate device configurations and storage test</text>\n      <path class=\"chemistry-rule\" d=\"M48 107H612M48 205H612M48 303H612M48 401H612\"/>\n      <text class=\"chemistry-label\" x=\"48\" y=\"144\">Mixed-cation / mixed-halide</text><text class=\"chemistry-small-label\" x=\"48\" y=\"175\">Small-area cell · power conversion efficiency</text><text class=\"chemistry-evidence-value\" x=\"612\" y=\"160\" text-anchor=\"end\">19.24%</text>\n      <text class=\"chemistry-label\" x=\"48\" y=\"242\">MAPbI₃ · 1 cm² active area</text><text class=\"chemistry-small-label\" x=\"48\" y=\"273\">Larger-area cell · power conversion efficiency</text><text class=\"chemistry-evidence-value\" x=\"612\" y=\"258\" text-anchor=\"end\">17.25%</text>\n      <text class=\"chemistry-label\" x=\"48\" y=\"340\">1,500 h · unencapsulated storage</text><text class=\"chemistry-small-label\" x=\"48\" y=\"371\">Initial efficiency retained · ~28 °C / ~65% RH</text><text class=\"chemistry-evidence-value\" x=\"612\" y=\"356\" text-anchor=\"end\">&gt;91%</text>\n      \n    </g></svg>",
        "description": "Efficiency, larger active area, and unencapsulated storage were evaluated under their respective test conditions.",
        "scopeNote": "",
        "legend": [
          {
            "color": "violet",
            "label": "SS1 device results"
          }
        ]
      }
    ],
    "collaboration": "Collaborative work with Penn State, USA."
  },
  "pyrazine": {
    "title": "Interface chemistry",
    "context": "Pyrazine-derived materials · First author · ChemPlusChem, 2025",
    "paperHref": "https://doi.org/10.1002/cplu.202500124",
    "paperId": "paper-pyrazine",
    "steps": [
      {
        "title": "Molecular idea",
        "body": "Pyrazine is a comparatively underexplored core for hole-transport materials. Its six-membered aromatic ring contains two opposing nitrogen atoms, motivating the study of both hole extraction and interactions with surface lead sites.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyrazine-1-title chem-pyrazine-1-desc\"><title id=\"chem-pyrazine-1-title\">Pyrazine core motif</title><desc id=\"chem-pyrazine-1-desc\">A six-membered aromatic pyrazine ring with opposing nitrogen atoms. Only the core motif is shown, not a full studied material.</desc><defs><marker id=\"chem-pyrazine-1-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><text class=\"chemistry-stage-title\" x=\"330\" y=\"66\" text-anchor=\"middle\">A nitrogen-bearing aromatic core</text><g class=\"chemistry-reveal\"><g transform=\"translate(330 222) scale(1.05)\"><path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M0-104 90-52V52L0 104-90 52V-52Z\"/><path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M19-80 67-52M67 51 19 79M-73 39V-39\"/><circle class=\"chemistry-atom-mask\" cx=\"0\" cy=\"-104\" r=\"17\"/><circle class=\"chemistry-atom-mask\" cx=\"0\" cy=\"104\" r=\"17\"/><text class=\"chemistry-atom\" x=\"0\" y=\"-103\" text-anchor=\"middle\" dominant-baseline=\"middle\">N</text><text class=\"chemistry-atom\" x=\"0\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\">N</text></g></g><text class=\"chemistry-muted-label\" x=\"330\" y=\"396\" text-anchor=\"middle\">Pyrazine · 1,4-diazine core motif</text></svg>",
        "description": "Opposing nitrogen atoms are highlighted in the pyrazine ring.",
        "scopeNote": "Pyrazine core; substituent groups omitted.",
        "legend": [
          {
            "color": "violet",
            "label": "Organic aromatic framework"
          },
          {
            "color": "teal",
            "label": "Nitrogen sites"
          }
        ]
      },
      {
        "title": "In the device",
        "body": "At the contact between the organic layer and perovskite, nitrogen atoms can interact with surface lead sites. The study examined that interaction alongside the material’s role in extracting holes.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyrazine-2-title chem-pyrazine-2-desc\"><title id=\"chem-pyrazine-2-title\">Nitrogen–lead interaction</title><desc id=\"chem-pyrazine-2-desc\">A pyrazine core motif sits above a schematic perovskite surface. A dotted line connects its lower nitrogen to a lead two-plus surface site; this is a conceptual interaction, not a measured geometry.</desc><defs><marker id=\"chem-pyrazine-2-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><g transform=\"translate(330 154) scale(0.65)\"><path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M0-104 90-52V52L0 104-90 52V-52Z\"/><path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M19-80 67-52M67 51 19 79M-73 39V-39\"/><circle class=\"chemistry-atom-mask\" cx=\"0\" cy=\"-104\" r=\"17\"/><circle class=\"chemistry-atom-mask\" cx=\"0\" cy=\"104\" r=\"17\"/><text class=\"chemistry-atom\" x=\"0\" y=\"-103\" text-anchor=\"middle\" dominant-baseline=\"middle\">N</text><text class=\"chemistry-atom\" x=\"0\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\">N</text></g></g><g class=\"chemistry-reveal chemistry-reveal--late\"><rect class=\"chemistry-surface\" x=\"110\" y=\"308\" width=\"440\" height=\"80\" rx=\"6\"/><path class=\"chemistry-surface-edge\" d=\"M110 308H550\"/><path class=\"chemistry-interaction\" d=\"M330 237V283\"/><circle class=\"chemistry-surface-site\" cx=\"330\" cy=\"308\" r=\"24\"/><text class=\"chemistry-atom\" x=\"330\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\">Pb²⁺</text><text class=\"chemistry-label\" x=\"330\" y=\"358\" text-anchor=\"middle\">Perovskite surface</text><text class=\"chemistry-muted-label\" x=\"102\" y=\"257\">Nitrogen–lead interaction</text></g></svg>",
        "description": "A nitrogen site meets an exposed lead site at the organic/perovskite contact.",
        "scopeNote": "Illustration of the proposed nitrogen–lead interaction.",
        "legend": [
          {
            "color": "violet",
            "label": "Organic core motif"
          },
          {
            "color": "teal",
            "label": "Surface and interaction"
          }
        ]
      },
      {
        "title": "Evidence",
        "body": "Interaction experiments, spectroscopy, and modelling supported nitrogen–lead interaction and a role in charge transfer. The devices showed moderate efficiency.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyrazine-3-title chem-pyrazine-3-desc\"><title id=\"chem-pyrazine-3-title\">Study-specific n-i-p device stack</title><desc id=\"chem-pyrazine-3-desc\">Top to bottom: Au · top electrode, PS1 / PS2 · dopant-free HTL, MAPbI₃ · absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-pyrazine-3-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">PS1 / PS2</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Hole transport · no added dopants</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"167\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"202\" text-anchor=\"middle\">MAPbI₃ · absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"232\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"251\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V283\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"273\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V336\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "PS1 or PS2 directly contacts the MAPbI₃ absorber; there is no separate interface layer.",
        "scopeNote": "Device structure; layer thicknesses are illustrative.",
        "legend": [
          {
            "color": "violet",
            "label": "Organic hole-transport layer"
          },
          {
            "color": "teal",
            "label": "Perovskite and interface"
          },
          {
            "color": "amber",
            "label": "Light and charge directions"
          }
        ]
      }
    ],
    "collaboration": "Collaborative work with Penn State, USA."
  },
  "pyridine": {
    "title": "Spiro-free design",
    "context": "Spiro-free PyCNEdTp · Co-author · Chemical Communications, 2026",
    "paperHref": "https://doi.org/10.1039/D6CC01269H",
    "paperId": "paper-pyridine",
    "steps": [
      {
        "title": "Molecular idea",
        "body": "In this co-authored study, a donor–acceptor–donor design used a dicyanopyridine core instead of a central spiro junction.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyridine-1-title chem-pyridine-1-desc\"><title id=\"chem-pyridine-1-title\">Conceptual spiro-free architecture</title><desc id=\"chem-pyridine-1-desc\">A conceptual donor–dicyanopyridine core–donor architecture. The labelled building blocks do not depict the full structure or substituents of PyCNEdTp.</desc><defs><marker id=\"chem-pyridine-1-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><text class=\"chemistry-stage-title\" x=\"330\" y=\"88\" text-anchor=\"middle\">Donor–acceptor–donor</text><g class=\"chemistry-reveal\"><g transform=\"translate(330 235) scale(1.38)\"><path class=\"chemistry-framework chemistry-trace\" pathLength=\"1\" d=\"M-84 0H-52M52 0H84\"/><circle class=\"chemistry-organic-node\" cx=\"-115\" cy=\"0\" r=\"31\"/><rect class=\"chemistry-organic-node\" x=\"-52\" y=\"-34\" width=\"104\" height=\"68\" rx=\"12\"/><circle class=\"chemistry-organic-node\" cx=\"115\" cy=\"0\" r=\"31\"/><text class=\"chemistry-small-label\" x=\"-115\" y=\"5\" text-anchor=\"middle\">Donor</text><text class=\"chemistry-core-label\" x=\"0\" y=\"-4\" text-anchor=\"middle\">Dicyanopyridine</text><text class=\"chemistry-small-label\" x=\"0\" y=\"16\" text-anchor=\"middle\">core</text><text class=\"chemistry-small-label\" x=\"115\" y=\"5\" text-anchor=\"middle\">Donor</text></g></g><text class=\"chemistry-muted-label\" x=\"330\" y=\"384\" text-anchor=\"middle\">A spiro-free molecular design</text></svg>",
        "description": "Donor groups flank the dicyanopyridine core in a conceptual architecture.",
        "scopeNote": "Simplified donor–acceptor–donor architecture.",
        "legend": [
          {
            "color": "violet",
            "label": "Conceptual organic architecture"
          }
        ]
      },
      {
        "title": "In the device",
        "body": "The reported n-i-p devices use ITO/SnO₂/CsFAMAPb(I,Br)₃/PEAI/HTM/Au. PyCNEdTp forms the hole-transport layer above the PEAI-treated perovskite surface.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyridine-2-title chem-pyridine-2-desc\"><title id=\"chem-pyridine-2-title\">Study-specific n-i-p device stack</title><desc id=\"chem-pyridine-2-desc\">Top to bottom: Au · top electrode, PyCNEdTp · hole transport, PEAI · surface treatment, CsFAMAPb(I,Br)₃ · absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-pyridine-2-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">PyCNEdTp</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Spiro-free hole transport</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"167\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"186\" text-anchor=\"middle\">PEAI · surface treatment</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"200\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"235\" text-anchor=\"middle\">CsFAMAPb(I,Br)₃ · absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"331\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"350\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V316\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"306\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V369\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "The paper includes a PEAI surface treatment between the perovskite absorber and PyCNEdTp.",
        "scopeNote": "Device structure; layer thicknesses are illustrative.",
        "legend": [
          {
            "color": "violet",
            "label": "Organic hole-transport layer"
          },
          {
            "color": "teal",
            "label": "Perovskite and interface"
          },
          {
            "color": "amber",
            "label": "Light and charge directions"
          }
        ]
      },
      {
        "title": "Evidence",
        "body": "The co-authored study reported similar efficiencies: 22.8% for PyCNEdTp and 22.6% for Spiro-OMeTAD in the same study.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"0 0 660 460\" role=\"img\" aria-labelledby=\"chem-pyridine-3-title chem-pyridine-3-desc\"><title id=\"chem-pyridine-3-title\">Similar reported efficiencies</title><desc id=\"chem-pyridine-3-desc\">Within-study power conversion efficiencies: PyCNEdTp, 22.8 percent; Spiro-OMeTAD, 22.6 percent. These are co-authored study results.</desc><defs><marker id=\"chem-pyridine-3-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><text class=\"chemistry-stage-title\" x=\"72\" y=\"84\">Similar reported efficiencies</text><text class=\"chemistry-muted-label\" x=\"72\" y=\"115\">Within-study power conversion efficiency</text><g role=\"table\" aria-label=\"Similar reported efficiencies\"><text class=\"chemistry-table-header\" x=\"72\" y=\"164\">HOLE-TRANSPORT MATERIAL</text><text class=\"chemistry-table-header\" x=\"588\" y=\"164\" text-anchor=\"end\">PCE</text><path class=\"chemistry-rule\" d=\"M72 184H588M72 274H588M72 354H588\"/><g role=\"row\"><text class=\"chemistry-label\" x=\"72\" y=\"237\" role=\"rowheader\">PyCNEdTp</text><text class=\"chemistry-evidence-value\" x=\"588\" y=\"240\" text-anchor=\"end\" role=\"cell\">22.8%</text></g><g role=\"row\"><text class=\"chemistry-label\" x=\"72\" y=\"320\" role=\"rowheader\">Spiro-OMeTAD</text><text class=\"chemistry-evidence-value\" x=\"588\" y=\"323\" text-anchor=\"end\" role=\"cell\">22.6%</text></g></g><text class=\"chemistry-muted-label\" x=\"72\" y=\"392\">Same-study comparison · Co-authored research</text></g></svg>",
        "description": "Both materials are compared under the study’s own device conditions.",
        "scopeNote": "",
        "legend": [
          {
            "color": "violet",
            "label": "Organic hole-transport materials"
          }
        ]
      }
    ],
    "collaboration": "Collaborative work with Toin University of Yokohama, Japan."
  }
};
