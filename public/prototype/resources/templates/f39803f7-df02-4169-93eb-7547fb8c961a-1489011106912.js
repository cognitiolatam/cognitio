jQuery("#simulation")
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Menu_Materias")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/21eef35a-9d9d-4820-bb90-70ec46ae3953"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Nosotros")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6c9a43a3-2465-4ed5-8cfc-bc802f7ecad2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Vision")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d0143e1e-5d32-48cd-9231-81e984d8be82"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Titulo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abde5738-15fd-4060-82e3-82e04eb2d69e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abde5738-15fd-4060-82e3-82e04eb2d69e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abde5738-15fd-4060-82e3-82e04eb2d69e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keydown.jim", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .keydown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Search_Bar")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/23a5bd3a-bc8e-4250-862a-5375e6ef7d4c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Foto_Perfil")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-DrowDownMenu",
                    "effect": {
                      "type": "slide",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Triangulo_Fantasma")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Triangulo_Fantasma_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Foto_Perfil") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Foto_Perfil").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Foto_Perfil") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_6") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_6").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_6") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-DrowDownMenu"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_5") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_5").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_5") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_7") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_7").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_7") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_11") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_11").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_11") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#t-Text_cell_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Menu_Materias_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_1 span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Materias_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_2": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_2 span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Materias") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Materias_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_4": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Materias_4 span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Nosotros") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Nosotros": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Nosotros .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Nosotros span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_Vision") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Vision": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Vision .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_Vision span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_FAQ_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_1 span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_FAQ_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_2": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ_2 span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Mensajes") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Mensajes > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Notification_Board") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Notification_Board > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Notifications"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_2": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Foto_Perfil": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "32px 32px 32px 32px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_6": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_6 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_10": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_10 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_10": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Menu_FAQ") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Raleway-Bold,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Menu_FAQ span": {
                      "attributes": {
                        "color": "#F76A6A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Bold,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_5": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_13": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_13 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_13": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_7": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_7 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_14": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_14 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_14": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_11": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_11 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_11": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_15": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_15 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_15": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_cell_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_8": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "14px",
                        "font-size": "10.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_8 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_16": {
                      "attributes": {
                        "background-color": "#F76A6A",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Raleway-Regular,Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_16 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Raleway-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Text_cell_16": {
                      "attributes-ie": {
                        "-pie-background": "#F76A6A",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Menu_Materias_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_Materias_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_Materias")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_Materias_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_Nosotros")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_Vision")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_FAQ_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_FAQ_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Mensajes")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Notification_Board")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Menu_FAQ")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Text_cell_8")) {
      jEvent.undoCases(jFirer);
    }
  });