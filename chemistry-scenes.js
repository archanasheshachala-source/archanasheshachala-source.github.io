"use strict";

window.chemistryScenes = {
  "star": {
    "title": "Dopant-free performance",
    "context": "Carbazole–triphenylamine hybrids · First author · Carbon Energy, accepted",
    "paperHref": "#paper-star",
    "paperId": "paper-star",
    "steps": [
      {
        "characterisation": [
          {
            "label": "Structure",
            "methods": [
              "¹H & ¹³C NMR",
              "MALDI–TOF MS"
            ]
          },
          {
            "label": "Optical",
            "methods": [
              "UV–vis absorption",
              "solution & film PL",
              "solvatochromism",
              "Tauc analysis"
            ]
          },
          {
            "label": "Energy levels",
            "methods": [
              "UPS",
              "REELS"
            ]
          },
          {
            "label": "Thermal & surface",
            "methods": [
              "TGA / DTG",
              "water contact angle",
              "AFM of HTM films"
            ]
          },
          {
            "label": "Modelling",
            "methods": [
              "DFT geometry optimisation",
              "frontier orbitals",
              "electrostatic potential maps"
            ]
          }
        ],
        "title": "Three donor arms around carbazole",
        "body": "Two thiophene-linked triphenylamine (TPA) arms extend from carbazole, while a third methoxy-substituted TPA attaches at nitrogen. Terminal methoxy substitution distinguishes SS1 from SS2; the N-linked arm is not a fully conjugated extension of the backbone.",
        "svg": "<svg data-core=\"star\" class=\"chemistry-svg chemistry-molecule\" version='1.1' baseProfile='full'\n              xmlns='http://www.w3.org/2000/svg'\n                      xmlns:rdkit='http://www.rdkit.org/xml'\n                      xmlns:xlink='http://www.w3.org/1999/xlink'\n                  xml:space='preserve' viewBox=\"81.9 41.4 495.8 336.4\">\n\n<path class='bond-0 atom-0 atom-1' d='M 125.9,74.8 L 168.0,121.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-1 atom-1 atom-2' d='M 168.0,121.5 L 144.6,193.4' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-2 atom-2 atom-3' d='M 144.6,193.4 L 195.2,249.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-2 atom-2 atom-3' d='M 157.4,190.7 L 199.2,237.1' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 195.2,249.5 L 269.1,233.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-4 atom-4 atom-5' d='M 269.1,233.8 L 320.2,271.0' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-5 atom-5 atom-6' d='M 330.2,290.6 L 330.2,341.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-6 atom-5 atom-7' d='M 340.2,271.0 L 391.3,233.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-7 atom-7 atom-8' d='M 391.3,233.8 L 465.3,249.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-7 atom-7 atom-8' d='M 400.1,224.1 L 461.2,237.1' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-8 atom-8 atom-9' d='M 465.3,249.5 L 515.8,193.4' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-9 atom-9 atom-10' d='M 515.8,193.4 L 492.5,121.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-9 atom-9 atom-10' d='M 503.0,190.7 L 483.7,131.2' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-10 atom-10 atom-11' d='M 492.5,121.5 L 533.7,75.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-11 atom-10 atom-12' d='M 492.5,121.5 L 418.6,105.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-12 atom-12 atom-13' d='M 418.6,105.8 L 368.0,162.0' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-12 atom-12 atom-13' d='M 422.6,118.2 L 380.8,164.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-13 atom-13 atom-14' d='M 368.0,162.0 L 292.4,162.0' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-14 atom-14 atom-15' d='M 292.4,162.0 L 241.9,105.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-15 atom-15 atom-1' d='M 241.9,105.8 L 168.0,121.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-15 atom-15 atom-1' d='M 237.8,118.2 L 176.7,131.2' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-16 atom-14 atom-4' d='M 292.4,162.0 L 269.1,233.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-16 atom-14 atom-4' d='M 300.7,173.3 L 282.4,229.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-17 atom-13 atom-7' d='M 368.0,162.0 L 391.3,233.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path d='M 145.8,189.8 L 144.6,193.4 L 147.2,196.2' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 192.7,246.7 L 195.2,249.5 L 198.9,248.7' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 461.6,248.7 L 465.3,249.5 L 467.8,246.7' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 513.3,196.2 L 515.8,193.4 L 514.6,189.8' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 422.3,106.6 L 418.6,105.8 L 416.0,108.6' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 244.4,108.6 L 241.9,105.8 L 238.2,106.6' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path class='atom-0' d='M 106.5 75.3\nL 101.8 67.2\nL 101.7 67.2\nL 98.5 67.2\nL 98.5 75.3\nL 95.9 75.3\nL 95.9 55.5\nL 101.7 55.5\nQ 105.1 55.5, 106.8 57.0\nQ 108.5 58.6, 108.5 61.3\nQ 108.5 63.4, 107.5 64.9\nQ 106.5 66.3, 104.5 66.8\nL 109.5 75.3\nL 106.5 75.3\nM 98.5 64.9\nL 101.7 64.9\nQ 103.6 64.9, 104.7 64.0\nQ 105.7 63.1, 105.7 61.3\nQ 105.7 59.6, 104.7 58.7\nQ 103.7 57.7, 101.7 57.7\nL 98.5 57.7\nL 98.5 64.9\n' fill='var(--ink)'/>\n<path class='atom-0' d='M 112.5 73.1\nL 116.9 73.1\nL 116.9 58.3\nL 112.1 59.8\nL 111.4 58.1\nL 117.5 55.4\nL 119.5 55.7\nL 119.5 73.1\nL 123.4 73.1\nL 123.4 75.3\nL 112.5 75.3\nL 112.5 73.1\n' fill='var(--ink)'/>\n<path class='atom-5' d='M 325.8 268.3\nL 332.3 278.8\nQ 333.0 279.8, 334.0 281.7\nQ 335.1 283.6, 335.1 283.7\nL 335.1 268.3\nL 337.7 268.3\nL 337.7 288.1\nL 335.0 288.1\nL 328.1 276.7\nQ 327.2 275.3, 326.4 273.8\nQ 325.5 272.2, 325.3 271.8\nL 325.3 288.1\nL 322.7 288.1\nL 322.7 268.3\nL 325.8 268.3\n' fill='var(--ink)'/>\n<path class='atom-6' d='M 334.1 363.8\nL 329.3 355.7\nL 329.3 355.7\nL 326.1 355.7\nL 326.1 363.8\nL 323.4 363.8\nL 323.4 344.0\nL 329.3 344.0\nQ 332.6 344.0, 334.4 345.5\nQ 336.1 347.0, 336.1 349.8\nQ 336.1 351.9, 335.0 353.3\nQ 334.0 354.7, 332.0 355.3\nL 337.0 363.8\nL 334.1 363.8\nM 326.1 353.4\nL 329.3 353.4\nQ 331.2 353.4, 332.2 352.5\nQ 333.3 351.6, 333.3 349.8\nQ 333.3 348.0, 332.2 347.1\nQ 331.2 346.2, 329.3 346.2\nL 326.1 346.2\nL 326.1 353.4\n' fill='var(--ink)'/>\n<path class='atom-6' d='M 339.1 347.7\nQ 339.8 345.9, 341.6 344.8\nQ 343.3 343.8, 345.7 343.8\nQ 348.7 343.8, 350.4 345.4\nQ 352.1 347.0, 352.1 349.9\nQ 352.1 352.8, 349.9 355.6\nQ 347.7 358.3, 343.3 361.6\nL 352.4 361.6\nL 352.4 363.8\nL 339.1 363.8\nL 339.1 361.9\nQ 342.8 359.3, 344.9 357.3\nQ 347.2 355.4, 348.2 353.6\nQ 349.3 351.9, 349.3 350.0\nQ 349.3 348.1, 348.3 347.1\nQ 347.4 346.0, 345.7 346.0\nQ 344.1 346.0, 343.1 346.6\nQ 342.0 347.3, 341.2 348.7\nL 339.1 347.7\n' fill='var(--ink)'/>\n<path class='atom-11' d='M 546.9 75.3\nL 542.1 67.2\nL 542.1 67.2\nL 538.9 67.2\nL 538.9 75.3\nL 536.2 75.3\nL 536.2 55.5\nL 542.1 55.5\nQ 545.4 55.5, 547.2 57.0\nQ 548.9 58.6, 548.9 61.3\nQ 548.9 63.4, 547.8 64.9\nQ 546.8 66.3, 544.8 66.8\nL 549.8 75.3\nL 546.9 75.3\nM 538.9 64.9\nL 542.1 64.9\nQ 544.0 64.9, 545.0 64.0\nQ 546.1 63.1, 546.1 61.3\nQ 546.1 59.6, 545.0 58.7\nQ 544.0 57.7, 542.1 57.7\nL 538.9 57.7\nL 538.9 64.9\n' fill='var(--ink)'/>\n<path class='atom-11' d='M 552.9 73.1\nL 557.2 73.1\nL 557.2 58.3\nL 552.4 59.8\nL 551.8 58.1\nL 557.9 55.4\nL 559.9 55.7\nL 559.9 73.1\nL 563.7 73.1\nL 563.7 75.3\nL 552.9 75.3\nL 552.9 73.1\n' fill='var(--ink)'/>\n</svg>\n",
        "description": "Carbazole scaffold: R1 = thiophene-linked TPA arms; R2 = N-linked methoxy-TPA arm.",
        "scopeNote": ""
      },
      {
        "characterisation": [
          {
            "label": "Device films",
            "methods": [
              "XRD",
              "top-view & cross-sectional FE-SEM"
            ]
          },
          {
            "label": "Interface",
            "methods": [
              "Perovskite / HTM absorption",
              "steady-state PL",
              "TRPL"
            ]
          },
          {
            "label": "Transport",
            "methods": [
              "Dark J–V conductivity",
              "TPC",
              "TPV",
              "EIS"
            ]
          },
          {
            "label": "Photovoltaics",
            "methods": [
              "Forward / reverse J–V",
              "IPCE",
              "device statistics",
              "1 cm² device tests"
            ]
          },
          {
            "label": "Stability",
            "methods": [
              "MPPT",
              "unencapsulated storage",
              "thermal ageing at 85 °C"
            ]
          }
        ],
        "title": "Dopant-free hole extraction",
        "body": "SS1 or SS2 forms the dopant-free hole-transport layer between the perovskite absorber and gold electrode.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"100 45 460 400\" role=\"img\" aria-labelledby=\"chem-star-2-title chem-star-2-desc\"><title id=\"chem-star-2-title\">Study-specific n-i-p device stack</title><desc id=\"chem-star-2-desc\">Top to bottom: Au · top electrode, SS1 / SS2 · dopant-free HTL, Perovskite absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-star-2-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">SS1 / SS2</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Hole transport · no added dopants</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"167\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"202\" text-anchor=\"middle\">Perovskite absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"232\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"251\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V283\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"273\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V336\" marker-end=\"url(#chem-star-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "The studied molecules sit between the perovskite absorber and gold electrode, extracting holes without added dopants.",
        "scopeNote": "Device structure; layer thicknesses are illustrative."
      }
    ]
  },
  "pyrazine": {
    "title": "Interface chemistry",
    "context": "Pyrazine-derived materials · First author · ChemPlusChem, 2025",
    "paperHref": "https://doi.org/10.1002/cplu.202500124",
    "paperId": "paper-pyrazine",
    "steps": [
      {
        "characterisation": [
          {
            "label": "Structure",
            "methods": [
              "¹H & ¹³C NMR",
              "HRMS",
              "MALDI–TOF MS"
            ]
          },
          {
            "label": "Optical",
            "methods": [
              "UV–vis absorption",
              "solution & film PL",
              "solvatochromism",
              "Tauc analysis"
            ]
          },
          {
            "label": "Energy levels",
            "methods": [
              "UPS",
              "REELS"
            ]
          },
          {
            "label": "Thermal & surface",
            "methods": [
              "TGA / DTG",
              "water contact angle"
            ]
          },
          {
            "label": "Molecular interaction",
            "methods": [
              "¹H NMR titration with PbI₂"
            ]
          },
          {
            "label": "Modelling",
            "methods": [
              "DFT geometry optimisation",
              "frontier orbitals",
              "electrostatic potential maps"
            ]
          }
        ],
        "title": "Nitrogen sites in a pyrazine core",
        "body": "The pyrazine core contains two opposing nitrogen atoms, offering potential coordination sites for lead.",
        "svg": "<svg data-core=\"pyrazine\" class=\"chemistry-svg chemistry-molecule\" version='1.1' baseProfile='full'\n              xmlns='http://www.w3.org/2000/svg'\n                      xmlns:rdkit='http://www.rdkit.org/xml'\n                      xmlns:xlink='http://www.w3.org/1999/xlink'\n                  xml:space='preserve' viewBox=\"227.3 125.5 205.0 168.2\">\n\n<path class='bond-0 atom-0 atom-1' d='M 403.5,197.0 L 370.3,139.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-1 atom-1 atom-2' d='M 370.3,139.5 L 289.3,139.5' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-1 atom-1 atom-2' d='M 363.3,151.6 L 296.3,151.6' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-2 atom-2 atom-3' d='M 289.3,139.5 L 256.1,197.0' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 256.1,222.2 L 289.3,279.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 266.6,216.1 L 296.3,267.6' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-4 atom-4 atom-5' d='M 289.3,279.7 L 370.3,279.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-5 atom-5 atom-0' d='M 370.3,279.7 L 403.5,222.2' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-5 atom-5 atom-0' d='M 363.3,267.6 L 393.0,216.1' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path d='M 372.0,142.3 L 370.3,139.5 L 366.2,139.5' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 293.4,139.5 L 289.3,139.5 L 287.6,142.3' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 287.6,276.9 L 289.3,279.7 L 293.3,279.7' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 366.2,279.7 L 370.3,279.7 L 372.0,276.9' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path class='atom-0' d='M 406.4 199.7\nL 412.9 210.2\nQ 413.6 211.2, 414.6 213.1\nQ 415.6 215.0, 415.7 215.1\nL 415.7 199.7\nL 418.3 199.7\nL 418.3 219.5\nL 415.6 219.5\nL 408.6 208.0\nQ 407.8 206.7, 407.0 205.1\nQ 406.1 203.6, 405.9 203.1\nL 405.9 219.5\nL 403.3 219.5\nL 403.3 199.7\nL 406.4 199.7\n' fill='var(--ink)'/>\n<path class='atom-3' d='M 244.4 199.7\nL 250.9 210.2\nQ 251.6 211.2, 252.6 213.1\nQ 253.6 215.0, 253.7 215.1\nL 253.7 199.7\nL 256.3 199.7\nL 256.3 219.5\nL 253.6 219.5\nL 246.6 208.0\nQ 245.8 206.7, 244.9 205.1\nQ 244.1 203.6, 243.9 203.1\nL 243.9 219.5\nL 241.3 219.5\nL 241.3 199.7\nL 244.4 199.7\n' fill='var(--ink)'/>\n</svg>\n",
        "description": "Pyrazine core; PS1 / PS2 substituents omitted.",
        "scopeNote": ""
      },
      {
        "characterisation": [
          {
            "label": "Device films",
            "methods": [
              "XRD",
              "top-view & cross-sectional FE-SEM"
            ]
          },
          {
            "label": "Interface",
            "methods": [
              "Perovskite / HTM absorption",
              "steady-state PL",
              "TRPL"
            ]
          },
          {
            "label": "Transport",
            "methods": [
              "SCLC in hole-only devices",
              "TPC",
              "TPV",
              "EIS"
            ]
          },
          {
            "label": "Photovoltaics",
            "methods": [
              "Forward / reverse J–V",
              "IPCE",
              "device statistics"
            ]
          },
          {
            "label": "Stability",
            "methods": [
              "MPPT",
              "unencapsulated storage"
            ]
          }
        ],
        "title": "Direct contact with MAPbI₃",
        "body": "PS1 or PS2 forms a dopant-free layer directly on MAPbI₃. Interface measurements examined charge transfer and recombination at this contact.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"100 45 460 400\" role=\"img\" aria-labelledby=\"chem-pyrazine-3-title chem-pyrazine-3-desc\"><title id=\"chem-pyrazine-3-title\">Study-specific n-i-p device stack</title><desc id=\"chem-pyrazine-3-desc\">Top to bottom: Au · top electrode, PS1 / PS2 · dopant-free HTL, MAPbI₃ · absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-pyrazine-3-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">PS1 / PS2</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Hole transport · no added dopants</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"167\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"202\" text-anchor=\"middle\">MAPbI₃ · absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"232\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"251\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V283\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"273\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V336\" marker-end=\"url(#chem-pyrazine-3-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "ITO / SnO₂ / MAPbI₃ / PS1 or PS2 / Au, on glass.",
        "scopeNote": "Device structure; layer thicknesses are illustrative."
      }
    ]
  },
  "pyridine": {
    "title": "Spiro-free design",
    "context": "PyCNEdTp · Co-author · Chemical Communications, 2026",
    "paperHref": "https://doi.org/10.1039/D6CC01269H",
    "paperId": "paper-pyridine",
    "steps": [
      {
        "characterisation": [
          {
            "label": "Structure",
            "methods": [
              "¹H & ¹³C NMR",
              "MALDI–TOF MS"
            ]
          },
          {
            "label": "Optical",
            "methods": [
              "UV–vis absorption",
              "solution & film PL",
              "Tauc analysis"
            ]
          },
          {
            "label": "Energy levels",
            "methods": [
              "UPS"
            ]
          },
          {
            "label": "Film packing",
            "methods": [
              "GIWAXS"
            ]
          },
          {
            "label": "Modelling",
            "methods": [
              "DFT geometry optimisation",
              "frontier orbitals"
            ]
          }
        ],
        "title": "A dicyanopyridine acceptor core",
        "body": "Two donor arms flank the electron-deficient core in a donor–acceptor–donor framework.",
        "svg": "<svg data-core=\"pyridine\" class=\"chemistry-svg chemistry-molecule\" version='1.1' baseProfile='full'\n              xmlns='http://www.w3.org/2000/svg'\n                      xmlns:rdkit='http://www.rdkit.org/xml'\n                      xmlns:xlink='http://www.w3.org/1999/xlink'\n                  xml:space='preserve' viewBox=\"97.8 84.4 464.0 250.4\">\n\n<path class='bond-0 atom-0 atom-1' d='M 340.0,305.0 L 399.9,270.4' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-0 atom-0 atom-1' d='M 333.9,294.4 L 387.8,263.3' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-1 atom-1 atom-2' d='M 399.9,270.4 L 399.9,189.4' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-2 atom-2 atom-3' d='M 399.9,189.4 L 470.1,148.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 470.1,148.8 L 530.1,114.2' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 464.0,138.3 L 524.0,103.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-3 atom-3 atom-4' d='M 476.2,159.4 L 536.1,124.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-4 atom-2 atom-5' d='M 399.9,189.4 L 329.8,148.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-4 atom-2 atom-5' d='M 387.8,196.4 L 329.8,162.9' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-5 atom-5 atom-6' d='M 329.8,148.8 L 259.7,189.3' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-6 atom-6 atom-7' d='M 259.7,189.3 L 189.5,148.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-7 atom-7 atom-8' d='M 189.5,148.8 L 129.5,114.2' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-7 atom-7 atom-8' d='M 183.4,159.4 L 123.5,124.8' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-7 atom-7 atom-8' d='M 195.6,138.3 L 135.6,103.7' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-8 atom-6 atom-9' d='M 259.7,189.3 L 259.7,270.4' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-8 atom-6 atom-9' d='M 271.8,196.4 L 271.8,263.3' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path class='bond-9 atom-9 atom-0' d='M 259.7,270.4 L 319.6,305.0' style='fill:none;fill-rule:evenodd;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />\n<path d='M 397.0,272.1 L 399.9,270.4 L 399.9,266.3' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 466.6,150.9 L 470.1,148.8 L 473.1,147.1' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 333.3,150.9 L 329.8,148.8 L 326.3,150.9' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 193.0,150.9 L 189.5,148.8 L 186.5,147.1' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path d='M 259.7,266.3 L 259.7,270.4 L 262.6,272.1' style='fill:none;stroke:var(--ink);stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' />\n<path class='atom-0' d='M 325.4 300.9\nL 331.9 311.4\nQ 332.6 312.5, 333.6 314.4\nQ 334.6 316.2, 334.7 316.3\nL 334.7 300.9\nL 337.3 300.9\nL 337.3 320.8\nL 334.6 320.8\nL 327.6 309.3\nQ 326.8 307.9, 326.0 306.4\nQ 325.1 304.9, 324.9 304.4\nL 324.9 320.8\nL 322.3 320.8\nL 322.3 300.9\nL 325.4 300.9\n' fill='var(--ink)'/>\n<path class='atom-4' d='M 535.9 98.4\nL 542.4 108.9\nQ 543.0 110.0, 544.0 111.8\nQ 545.1 113.7, 545.1 113.8\nL 545.1 98.4\nL 547.8 98.4\nL 547.8 118.3\nL 545.0 118.3\nL 538.1 106.8\nQ 537.3 105.4, 536.4 103.9\nQ 535.6 102.4, 535.3 101.9\nL 535.3 118.3\nL 532.7 118.3\nL 532.7 98.4\nL 535.9 98.4\n' fill='var(--ink)'/>\n<path class='atom-8' d='M 115.0 98.4\nL 121.5 108.9\nQ 122.1 110.0, 123.1 111.9\nQ 124.2 113.7, 124.2 113.8\nL 124.2 98.4\nL 126.9 98.4\nL 126.9 118.3\nL 124.2 118.3\nL 117.2 106.8\nQ 116.4 105.4, 115.5 103.9\nQ 114.7 102.4, 114.4 101.9\nL 114.4 118.3\nL 111.8 118.3\nL 111.8 98.4\nL 115.0 98.4\n' fill='var(--ink)'/>\n</svg>\n",
        "description": "3,5-dicyanopyridine core; peripheral substituents omitted.",
        "scopeNote": ""
      },
      {
        "characterisation": [
          {
            "label": "Device films",
            "methods": [
              "Cross-sectional SEM"
            ]
          },
          {
            "label": "Interface",
            "methods": [
              "Perovskite / PEAI / HTM TRPL"
            ]
          },
          {
            "label": "Recombination",
            "methods": [
              "Open-circuit voltage vs light intensity",
              "ideality-factor analysis"
            ]
          },
          {
            "label": "Photovoltaics",
            "methods": [
              "Forward / reverse J–V",
              "IPCE",
              "stabilised current & PCE at fixed bias"
            ]
          }
        ],
        "title": "PyCNEdTp above a treated surface",
        "body": "PyCNEdTp forms the hole-transport layer above a PEAI-treated perovskite surface.",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"chemistry-svg\" viewBox=\"100 45 460 400\" role=\"img\" aria-labelledby=\"chem-pyridine-2-title chem-pyridine-2-desc\"><title id=\"chem-pyridine-2-title\">Study-specific n-i-p device stack</title><desc id=\"chem-pyridine-2-desc\">Top to bottom: Au · top electrode, PyCNEdTp · hole transport, PEAI · surface treatment, CsFAMAPb(I,Br)₃ · absorber, SnO₂ · electron transport, ITO · transparent electrode, Glass substrate. Light enters through glass, holes are collected at gold and electrons at ITO.</desc><defs><marker id=\"chem-pyridine-2-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9Z\" class=\"chemistry-arrow-tip\"/></marker></defs><g class=\"chemistry-reveal\"><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"65\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"84\" text-anchor=\"middle\">Au · top electrode</text><rect class=\"chemistry-layer-organic\" x=\"168\" y=\"98\" width=\"324\" height=\"62\" rx=\"3\"/><text class=\"chemistry-label\" x=\"330\" y=\"125\" text-anchor=\"middle\">PyCNEdTp</text><text class=\"chemistry-small-label\" x=\"330\" y=\"147\" text-anchor=\"middle\">Spiro-free hole transport</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"167\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"186\" text-anchor=\"middle\">PEAI · surface treatment</text><rect class=\"chemistry-layer-perovskite\" x=\"168\" y=\"200\" width=\"324\" height=\"58\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"235\" text-anchor=\"middle\">CsFAMAPb(I,Br)₃ · absorber</text><rect class=\"chemistry-layer-teal\" x=\"168\" y=\"265\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"284\" text-anchor=\"middle\">SnO₂ · electron transport</text><rect class=\"chemistry-layer-neutral\" x=\"168\" y=\"298\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"317\" text-anchor=\"middle\">ITO · transparent electrode</text><rect class=\"chemistry-layer-glass\" x=\"168\" y=\"331\" width=\"324\" height=\"26\" rx=\"3\"/><text class=\"chemistry-small-label\" x=\"330\" y=\"350\" text-anchor=\"middle\">Glass substrate</text></g><g class=\"chemistry-reveal chemistry-reveal--late\"><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M470 205V78\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"515\" y=\"125\">h⁺</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M190 190V316\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"126\" y=\"306\">e⁻</text><path class=\"chemistry-charge-path chemistry-trace\" pathLength=\"1\" d=\"M330 425V369\" marker-end=\"url(#chem-pyridine-2-arrow)\"/><text class=\"chemistry-path-label\" x=\"354\" y=\"420\">Light</text></g></svg>",
        "description": "The paper includes a PEAI surface treatment between the perovskite absorber and PyCNEdTp.",
        "scopeNote": "Device structure; layer thicknesses are illustrative."
      }
    ]
  }
};
