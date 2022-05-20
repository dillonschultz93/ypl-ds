---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Typography # title case
UID: F0002 # ["P","E","F"] + Hexa code/index
variants: ["001","002","003","004","005","006","007","008","101","102","103","104","301","302","401","402"] # all variants index
permalink: farfalle/primitives/typography # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 50
---

<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS ⚠️ -->
<script>
  const superChoices =  {
    "dimensions": {
      "breakpoints": {
        "options": {
          "s": {
            "value": 480
          },
          "m": {
            "value": 768
          },
          "l": {
            "value": 1024
          },
          "xl": {
            "value": 1920
          }
        },
        "description": "",
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_C",
        "category": "breakpoints",
        "apparatusTags": ["breakpoints"],
        "UIDs": {}
      },
      "factors": {
        "options": {
          "F1": {
            "value": 1
          },
          "F2": {
            "value": 1
          },
          "F3": {
            "value": 1
          },
          "F4": {
            "value": 1
          },
          "F5": {
            "value": 2
          }
        },
        "description": "",
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_C",
        "category": "factors",
        "apparatusTags": ["factors"],
        "UIDs": {}
      },
      "scale": {
        "value": {
          "base": 2,
          "ratio": 2,
          "baseIndex": 400,
          "scaleStems": ["geoA" , "arithA", "arithB"]
        },
        "description": "",
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_M",
        "category": "scales",
        "apparatusTags": ["scales"],
        "UIDs": {}
      },
      "spaces": {
        "options": {
          "none": {
            "value": 0
          },
          "xs": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.200.value}"
          },
          "s": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.400.value}"
          },
          "sm": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.600.value}"
          },
          "m": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.800.value}"
          },
          "ml": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1000.value}"
          },
          "l": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1200.value}"
          },
          "xl": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1600.value}"
          },
          "xxl": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1800.value}"
          }
        },
        "description": "",
        "figma": {
          "type": "spacing"
        },
        "kingdom": "TKUI_C",
        "category": "spaces",
        "apparatusTags": ["spaces"],
        "UIDs": {}
      },
      "staticSizes": {
        "options": {
          "nano": {
            "000": {
              "value": 0
            },
            "100": {
              "value": 1
            },
            "200": {
              "value": 2
            },
            "300": {
              "value": 3
            },
            "400": {
              "value": 4
            }
          },
          "micro": {
            "100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.100.value}"
            },
            "200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.200.value}"
            },
            "300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.300.value}"
            },
            "400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.400.value}"
            },
            "500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.500.value}"
            },
            "600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.600.value}"
            },
            "700": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.700.value}"
            },
            "800": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.800.value}"
            },
            "900": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.900.value}"
            },
            "1000": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1000.value}"
            },
            "1100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1100.value}"
            },
            "1200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1200.value}"
            },
            "1300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1300.value}"
            },
            "1400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1400.value}"
            },
            "1500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1500.value}"
            },
            "1600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1600.value}"
            }
          },
          "macro": {
            "100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.100.value}"
            },
            "200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.200.value}"
            },
            "300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.300.value}"
            },
            "400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.700.value}"
            },
            "500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.1200.value}"
            },
            "600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.1500.value}"
            },
            "700": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.2600.value}"
            },
            "800": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.2800.value}"
            },
            "900": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.3100.value}"
            },
            "1000": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.4700.value}"
            },
            "1100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.6300.value}"
            }
          }
        },
        "description": "",
        "figma": {
          "type": "sizing"
        },
        "kingdom": "TKUI_C",
        "category": "sizes",
        "apparatusTags": ["staticSizes"],
        "UIDs": {}
      }
    },
    "typography": {},
    "color": {}
  };

  const nomenclatureOptions = {
    namespace: 'YPL',
    project: '{{ page.project_id }}'
  };

  const overrideOptions = {
    "YPL.FFL.TKUI_M.scales.arithA.2000": {
      "value": 40,
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["scales"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.sizes.micro.1700": {
      "value": "{YPL.FFL.TKUI_M.scales.arithA.2000.value}",
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["sizes"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.s": {
      "value": 0.33,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.m": {
      "value": 0.50,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.ml": {
      "value": 0.66,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.l": {
      "value": 0.75,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.xl": {
      "value": 0.85,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.full": {
      "value": 1,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.TEST.textSizeFactor": {
      "value": 1,
      "description": "Inject this factor into Typography Sizes Choices. It's used to blow font sizes up to test compliancy with WCAG 1.4.4 · Remove it once in β release",
      "type":{
        "figma":  "test"
      }
    },
    "YPL.FFL.TKUI_C.colors.white": {
      "value": "#ffffff",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.black": {
      "value": "#000000",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.100": {
      "value": "#f5f5f5",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.200": {
      "value": "#E3E3E3",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.300": {
      "value": "#BABABA",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.500": {
      "value": "#707070",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.700": {
      "value": "#4A4A4A",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.900": {
      "value": "#242424",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.300": {
      "value": "#4BB9B3",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.400": {
      "value": "#3A9691",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.500": {
      "value": "#2C726E",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.300": {
      "value": "#E77F4B",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.400": {
      "value": "#E05F1F",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.500": {
      "value": "#B44B18",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR": {
      "value": "linear-gradient(64deg, {YPL.FFL.TKUI_C.colors.black.value} 0%, {YPL.FFL.TKUI_C.colors.black.value} 100%)",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["gradients"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR": {
      "value": "linear-gradient(116deg, {YPL.FFL.TKUI_C.colors.black.value} 0%, {YPL.FFL.TKUI_C.colors.black.value} 100%)",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["gradients"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.light": {
      "value": "Europa-Light",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.regular": {
      "value": "Europa-Regular",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.bold": {
      "value": "Europa-Bold",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.s": {
      "value": 1.2,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.m": {
      "value": 1.4,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.l": {
      "value": 1.5,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.500.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.900.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1000.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1200.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1400.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.200.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading": {
      "value": 14,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.900.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1000.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1200.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1400.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1600.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.leading": {
      "value": 41.6,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.leading": {
      "value": 50.4,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.paragraphSpacing": {
      "value": 9.72,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.paragraphSpacing": {
      "value": 10.8,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.paragraphSpacing": {
      "value": 12.96,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.paragraphSpacing": {
      "value": 15.12,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.paragraphSpacing": {
      "value": 17.28,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.paragraphSpacing": {
      "value": 23.12,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.paragraphSpacing": {
      "value": 22.68,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking": {
      "value": "10%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking": {
      "value": "10%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.tracking": {
      "value": "3.5%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.tracking": {
      "value": "0%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.tracking": {
      "value": "0%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.caption.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.caption.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.ps.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.ps.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.p.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.p.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h1.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h2.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h3.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h4.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h5.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h6.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h7.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h8.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": {
      "value": "{YPL.FFL.TKUI_C.percents.full.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.700.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.200.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": {
      "value": "{YPL.FFL.TKUI_C.percents.full.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.500.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockHeader.height": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.height": {
      "value": "{YPL.FFL.TKUI_C.spaces.e.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": {
      "value": "{YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": {
      "value": "FILL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.color": {
      "value": "{YPL.FFL.TKUI_C.colors.white.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": {
      "value": "{YPL.FFL.TKUI_C.colors.grey.300.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.fringeBottom": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": {
      "value": "{YPL.FFL.TKUI_C.spaces.s.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": {
      "value": "{YPL.FFL.TKUI_C.spaces.s.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paddingLeft": {
      "value": "{YPL.FFL.TKUI_C.spaces.xxl.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": {
      "value": "{YPL.FFL.TKUI_C.spaces.sm.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.paragraph.color": {
      "value": "{YPL.FFL.TKUI_C.colors.white.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.400.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.spaces.none.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.700.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.size.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.tracking.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.leading.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.percents.ml.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.size.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.tracking.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.leading.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    }
  }
</script>
<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Typography
{: .no_toc}

<table class="headTopBorder">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>{{ page.project_id }} Version</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/25">&#35;25</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='TBD'><code>TBD</code></span></td>
      <td><a href="https://github.com/yummly/pasta/releases">TBD</a></td>
      <td><a href="#accessibility-status"><span id="statusWidget"></span><span>0%</span></a></td>
    </tr>
    {% if page.variants.size > 0 %}
    <tr>
      <td colspan="6" class="pageHeaderVariantsRow">
        {% for item in page.variants %}<a href="#{{ page.UID }}-{{item}}"><code>-{{item | default: ""}}</code></a> {% endfor %}
      </td>
    </tr>
    {% endif %}
  </tbody>
</table>

- TOC
{:toc}

## Headings

<!-- H1 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-001">
  <thead>
    <tr>
      <th>
        <p>Heading 1 <span class="typoStyleUID">F0002-001</span></p>
        <span class="Europa-ed-b" style="font-size: 48px; line-height: 50.4px; letter-spacing: -0.02em; color: #000000;">Heading 1<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h1.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": "YPL.FFL.TKUI_M.typo.europa.h1.size"'>
          <code class="language-plaintext highlighter-rouge">-h1.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": "YPL.FFL.TKUI_M.typo.europa.h1.leading"'>
          <code class="language-plaintext highlighter-rouge">-h1.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h1.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h1.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.tracking": "YPL.FFL.TKUI_M.typo.europa.h1.tracking'>
          <code class="language-plaintext highlighter-rouge">-h1.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h1.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h1.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h1.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h1.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H2 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-002">
  <thead>
    <tr>
      <th>
        <p>Heading 2 <span class="typoStyleUID">F0002-002</span></p>
        <span class="Europa-ed-b" style="font-size: 40px; line-height: 41.6px; letter-spacing: -0.02em; color: #000000;">Heading 2<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h2.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.size": "YPL.FFL.TKUI_M.typo.europa.h2.size"'>
          <code class="language-plaintext highlighter-rouge">-h2.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.leading": "YPL.FFL.TKUI_M.typo.europa.h2.leading"'>
          <code class="language-plaintext highlighter-rouge">-h2.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h2.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h2.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.tracking": "YPL.FFL.TKUI_M.typo.europa.h2.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h2.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h2.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h2.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h2.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h2.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H3 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-003">
  <thead>
    <tr>
      <th>
        <p>Heading 3 <span class="typoStyleUID">F0002-003</span></p>
        <span class="Europa-ed-b" style="font-size: 32px; line-height: 38.4px; letter-spacing: -0.02em; color: #000000;">Heading 3<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h3.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.size": "YPL.FFL.TKUI_M.typo.europa.h3.size"'>
          <code class="language-plaintext highlighter-rouge">-h3.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.leading": "YPL.FFL.TKUI_M.typo.europa.h3.leading"'>
          <code class="language-plaintext highlighter-rouge">-h3.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h3.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h3.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.tracking": "YPL.FFL.TKUI_M.typo.europa.h3.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h3.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h3.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h3.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h3.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h3.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H4 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-004">
  <thead>
    <tr>
      <th>
        <p>Heading 4 <span class="typoStyleUID">F0002-004</span></p>
        <span class="Europa-ed-b" style="font-size: 28px; line-height: 33.6px; letter-spacing: -0.01em; color: #000000;">Heading 4<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h4.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.size": "YPL.FFL.TKUI_M.typo.europa.h4.size"'>
          <code class="language-plaintext highlighter-rouge">-h4.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.leading": "YPL.FFL.TKUI_M.typo.europa.h4.leading"'>
          <code class="language-plaintext highlighter-rouge">-h4.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h4.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h4.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.tracking": "YPL.FFL.TKUI_M.typo.europa.h4.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h4.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h4.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h4.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h4.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h4.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H5 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-005">
  <thead>
    <tr>
      <th>
        <p>Heading 5 <span class="typoStyleUID">F0002-005</span></p>
        <span class="Europa-ed-b" style="font-size: 24px; line-height: 28.2px; letter-spacing: -0.01em; color: #000000;">Heading 5<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h5.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.size": "YPL.FFL.TKUI_M.typo.europa.h5.size"'>
          <code class="language-plaintext highlighter-rouge">-h5.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.leading": "YPL.FFL.TKUI_M.typo.europa.h5.leading"'>
          <code class="language-plaintext highlighter-rouge">-h5.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h5.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h5.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.tracking": "YPL.FFL.TKUI_M.typo.europa.h5.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h5.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h5.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h5.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h5.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h5.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H6 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-006">
  <thead>
    <tr>
      <th>
        <p>Heading 6 <span class="typoStyleUID">F0002-006</span></p>
        <span class="Europa-ed-b" style="font-size: 20px; line-height: 24px; letter-spacing: 0em; color: #000000;">Heading 6<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h6.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.size": "YPL.FFL.TKUI_M.typo.europa.h6.size"'>
          <code class="language-plaintext highlighter-rouge">-h6.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.leading": "YPL.FFL.TKUI_M.typo.europa.h6.leading"'>
          <code class="language-plaintext highlighter-rouge">-h6.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h6.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h6.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.tracking": "YPL.FFL.TKUI_M.typo.europa.h6.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h6.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h6.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h6.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h6.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h6.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H7 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-007">
  <thead>
    <tr>
      <th>
        <p>Heading 7 <span class="typoStyleUID">F0002-007</span></p>
        <span class="Europa-ed-b" style="font-size: 18px; line-height: 21.6px; letter-spacing: 0em; color: #000000;">Heading 7<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h7.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.size": "YPL.FFL.TKUI_M.typo.europa.h7.size"'>
          <code class="language-plaintext highlighter-rouge">-h7.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.leading": "YPL.FFL.TKUI_M.typo.europa.h7.leading"'>
          <code class="language-plaintext highlighter-rouge">-h7.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h7.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h7.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.tracking": "YPL.FFL.TKUI_M.typo.europa.h7.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h7.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h7.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h7.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h7.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h7.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H8 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-008">
  <thead>
    <tr>
      <th>
        <p>Heading 8 <span class="typoStyleUID">F0002-008</span></p>
        <span class="Europa-ed-b" style="font-size: 14px; line-height: 16.8px; letter-spacing: 0.035em; color: #000000;">Heading 8<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h8.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.size": "YPL.FFL.TKUI_M.typo.europa.h8.size"'>
          <code class="language-plaintext highlighter-rouge">-h8.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.leading": "YPL.FFL.TKUI_M.typo.europa.h8.leading"'>
          <code class="language-plaintext highlighter-rouge">-h8.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.h8.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h8.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.tracking": "YPL.FFL.TKUI_M.typo.europa.h8.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h8.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h8.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h8.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h8.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h8.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Paragraphs

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-101">
  <thead>
    <tr>
      <th>
        <p>Regular Paragraph <span class="typoStyleUID">F0002-101</span></p>
        <span class="Europa-ed-r" style="font-size: 16px; line-height: 19.2px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.size": "YPL.FFL.TKUI_M.typo.europa.p.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.leading": "YPL.FFL.TKUI_M.typo.europa.p.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.p.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.tracking": "YPL.FFL.TKUI_M.typo.europa.p.regular.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-102">
  <thead>
    <tr>
      <th>
        <p>Strong Paragraph <span class="typoStyleUID">F0002-102</span></p>
        <span class="Europa-ed-b" style="font-size: 16px; line-height: 19.2px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.size": "YPL.FFL.TKUI_M.typo.europa.p.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.leading": "YPL.FFL.TKUI_M.typo.europa.p.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.p.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.tracking": "YPL.FFL.TKUI_M.typo.europa.p.strong.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-103">
  <thead>
    <tr>
      <th>
        <p>Regular Small Paragraph <span class="typoStyleUID">F0002-103</span></p>
        <span class="Europa-ed-r" style="font-size: 14px; line-height: 16.8px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.size": "YPL.FFL.TKUI_M.typo.europa.sp.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.leading": "YPL.FFL.TKUI_M.typo.europa.sp.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.sp.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.tracking": "YPL.FFL.TKUI_M.typo.europa.sp.regular.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-104">
  <thead>
    <tr>
      <th>
        <p>Strong Small Paragraph <span class="typoStyleUID">F0002-104</span></p>
        <span class="Europa-ed-b" style="font-size: 14px; line-height: 16.8px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.size": "YPL.FFL.TKUI_M.typo.europa.sp.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.leading": "YPL.FFL.TKUI_M.typo.europa.sp.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.sp.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.tracking": "YPL.FFL.TKUI_M.typo.europa.sp.strong.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Captions

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-301">
  <thead>
    <tr>
      <th>
        <p>Regular Caption <span class="typoStyleUID">F0002-301</span></p>
        <span class="Europa-ed-r" style="font-size: 12px; line-height: 18px; letter-spacing: -0.02em; color: #000000;">Lorem ipsum</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.regular"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.size": "YPL.FFL.TKUI_M.typo.europa.caption.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.leading": "YPL.FFL.TKUI_M.typo.europa.caption.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.caption.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.tracking": "YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-302">
  <thead>
    <tr>
      <th>
        <p>Strong Caption <span class="typoStyleUID">F0002-302</span></p>
        <span class="Europa-ed-b" style="font-size: 12px; line-height: 18px; letter-spacing: -0.02em; color: #000000;">Lorem ipsum</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.size": "YPL.FFL.TKUI_M.typo.europa.caption.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.leading": "YPL.FFL.TKUI_M.typo.europa.caption.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.caption.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.tracking": "YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Eyebrows

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-401">
  <thead>
    <tr>
      <th>
        <p>Eyebrow <span class="typoStyleUID">F0002-401</span></p>
        <span class="Europa-ed-b" style="font-size: 12px; line-height: 18px; letter-spacing: 0.1em; color: #000000; text-transform: uppercase;">Dolar sit amet</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.regular"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.size": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.leading": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.tracking": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Small -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-402">
  <thead>
    <tr>
      <th>
        <p>Small Eyebrow <span class="typoStyleUID">F0002-402</span></p>
        <span class="Europa-ed-b" style="font-size: 10px; line-height: 14px; letter-spacing: 0.1em; color: #000000; text-transform: uppercase;">Dolar sit amet</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.size": "YPL.FFL.TKUI_M.typo.europa.eyebrow_small.size"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.leading": "YPL.FFL.TKUI_M.typo.europa.eyebrow_small.leading"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.paragraphSpacing": "YPL.FFL.TKUI_M.typo.europa.eyebrow_small.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.tracking": "YPL.FFL.TKUI_M.typo.europa.eyebrow_small.tracking"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.color": "YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>



## Accessibility Status

<table class="Last3ThCentered">
    <thead>
      <tr>
          <th>Criterion</th>
          <th>Description</th>
          <th>Pending</th>
          <th>Done</th>
          <th>N/A</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#text-alternatives">1.1.1</a></td>
          <td>Text Alternatives</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1</a></td>
          <td>Color not the only way to convey information</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3</a></td>
          <td>Text Color Contrast</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">1.4.6</a></td>
          <td>Text Color Contrast AAA</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11</a></td>
          <td>Fill Color Contrast</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4</a></td>
          <td>200% Text Size</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A" checked></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12</a></td>
          <td>Text Spacing</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="pending" checked></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A"></td>
      </tr>
      <tr>
          <td><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">2.1.3</a></td>
          <td>Keyboard Operable</td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="pending"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="done"></td>
          <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A" checked></td>
      </tr>
    </tbody>
</table>


## Checklist

 Please comply to and update the checklist below:

 |Ops|
 |---|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Link(s)</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong>|
 |<input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |

 |Design|
 |---|
 |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
 |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.|
 |<input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
 |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|

 |Design Constraints|
 |---|
 |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
 |<input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|

 |Content|
 |---|
 |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
 |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
 |<input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|

 |Accessiblity|
 |---|
 |<input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|

 |Tokens|
 |---|
 |<input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
 |<input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|

 |Implementation|
 |---|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Release Version</strong><br>Pasta `V0.1.0`|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android<strong><br>Component(s) have been implemented inside iOS component library|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library|
 |<input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented|