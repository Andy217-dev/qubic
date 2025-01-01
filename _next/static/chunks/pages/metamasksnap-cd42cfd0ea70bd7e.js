(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1397],
  {
    39773: function (e, t, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/metamasksnap",
        function () {
          return _(20813);
        },
      ]);
    },
    20813: function (e, t, _) {
      "use strict";
      _.r(t),
        _.d(t, {
          default: function () {
            return P;
          },
        });
      var s = _(97997),
        l = _(6400),
        a = _(28035),
        i = _.n(a),
        n = "Find Best Crypto Swap Rates | Qubic AI MetaMask Snap",
        o =
          "Pick and choose the best swap rates across 200+ DEXs and 15,000+ tokens all within your MetaMask.",
        c =
          "Qubic AI, Qubic AI Exchange, Qubic AI, Token, Coin, Qubic AI Token, Qubic AI Coin, Qubic AI Swap, Qubic AI Finance, Qubic AI DeFi, QBC, BRBC. ",
        r = "https://rubic.exchange/metamasksnap",
        d = _(97096),
        u = _(11920),
        g = _.n(u),
        p = _(94219),
        y = _(41778),
        m = _(33304),
        h = function () {
          var e;
          if (
            ((0, m.ZX)(),
            null === window ||
            void 0 === window ||
            null === (e = window.ethereum) ||
            void 0 === e
              ? void 0
              : e.isMetaMask)
          )
            try {
              window.ethereum.request({
                method: "wallet_requestSnaps",
                params: { "npm:rubic-snap": { version: "0.4.0" } },
              });
            } catch (t) {
              console.log("Snaps was not installed."), console.error(t);
            }
          else console.log("Problems when working with MM.");
        },
        b = function () {
          var e = (0, y.d)().width,
            t = (void 0 === e ? p.g.desktopWidth : e) <= 480;
          return (0, s.BX)("section", {
            className: g().mainScreen,
            children: [
              (0, s.BX)("div", {
                className: g().mainScreen__container,
                children: [
                  (0, s.BX)("h1", {
                    className: g().mainScreen__title,
                    children: [
                      "Qubic AI\u2019s ",
                      (0, s.tZ)("br", {}),
                      " Best Rate ",
                      (0, s.tZ)("br", {}),
                      " Finder",
                    ],
                  }),
                  (0, s.tZ)("img", {
                    className: g().mainScreen__svg,
                    src: "/images/metamaskSnap/mainScreen/mm-snap-text.svg",
                    alt: "",
                  }),
                  (0, s.tZ)("p", {
                    className: g().mainScreen__text,
                    children:
                      "Pick and choose the most cost-efficient swap rates across 200+ DEXs directly within your MetaMask Wallet.",
                  }),
                  (0, s.BX)("div", {
                    className: g()["mainScreen__how-to-install"],
                    children: [
                      (0, s.tZ)("span", {
                        className: g()["mainScreen__how-to-install-text"],
                        children: "How to install:",
                      }),
                      (0, s.tZ)("div", {
                        className:
                          g()["mainScreen__how-to-install-link-wrapper"],
                        children: t
                          ? null
                          : (0, s.tZ)("button", {
                              className: g()["mainScreen__how-to-install-link"],
                              onClick: h,
                              children: (0, s.tZ)("span", {
                                children:
                                  "Install \u201cBest Rate Finder\u201d",
                              }),
                            }),
                      }),
                    ],
                  }),
                  (0, s.tZ)("iframe", {
                    src: "https://www.youtube.com/embed/mqwcymo20Sw?si=zIXRWrEbR01gk7qQ",
                    title: "YouTube video player",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                    id: "installation-video",
                  }),
                ],
              }),
              (0, s.tZ)("img", {
                className: g().mainScreen__background,
                src: "/images/metamaskSnap/mainScreen/main-screen-background.png",
                alt: "",
              }),
            ],
          });
        },
        w = _(94184),
        f = _.n(w),
        v = _(96409),
        k = _.n(v),
        N = function () {
          return (0, s.BX)("section", {
            className: k().whoChooseRubicSnap,
            children: [
              (0, s.BX)("div", {
                className: k().whoChooseRubicSnap__container,
                children: [
                  (0, s.BX)("h2", {
                    className: k().whoChooseRubicSnap__title,
                    children: [
                      "Why Choose Qubic AI\u2019s ",
                      (0, s.tZ)("br", {}),
                      " MetaMask Snap",
                    ],
                  }),
                  (0, s.BX)("div", {
                    className: k().whoChooseRubicSnap__cards,
                    children: [
                      (0, s.tZ)("div", {
                        className: k()["whoChooseRubicSnap__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: k().whoChooseRubicSnap__card,
                          children: [
                            (0, s.tZ)("img", {
                              className: k()["whoChooseRubicSnap__card-img"],
                              src: "/images/metamaskSnap/whoChooseRubicSnap/1.png",
                              alt: "",
                            }),
                            (0, s.BX)("span", {
                              className: k()["whoChooseRubicSnap__card-title"],
                              children: [
                                "Best Rates Across ",
                                (0, s.tZ)("br", {}),
                                " 200+ DEXs In ",
                                (0, s.tZ)("br", {}),
                                " Your Wallet",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("div", {
                        className: k()["whoChooseRubicSnap__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: k().whoChooseRubicSnap__card,
                          children: [
                            (0, s.tZ)("img", {
                              className: f()([
                                k()["whoChooseRubicSnap__card-img"],
                                k()["whoChooseRubicSnap__card-img-2"],
                              ]),
                              src: "/images/metamaskSnap/whoChooseRubicSnap/2.png",
                              alt: "",
                            }),
                            (0, s.BX)("span", {
                              className: k()["whoChooseRubicSnap__card-title"],
                              children: [
                                "Conveniently ",
                                (0, s.tZ)("br", {}),
                                " Integrated Directly ",
                                (0, s.tZ)("br", {}),
                                " Into Your MetaMask",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("div", {
                        className: k()["whoChooseRubicSnap__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: k().whoChooseRubicSnap__card,
                          children: [
                            (0, s.tZ)("img", {
                              className: f()([
                                k()["whoChooseRubicSnap__card-img"],
                                k()["whoChooseRubicSnap__card-img-3"],
                              ]),
                              src: "/images/metamaskSnap/whoChooseRubicSnap/3.png",
                              alt: "",
                            }),
                            (0, s.BX)("span", {
                              className: k()["whoChooseRubicSnap__card-title"],
                              children: [
                                "Easy Access To ",
                                (0, s.tZ)("br", {}),
                                " Qubic AI's Aggregated ",
                                (0, s.tZ)("br", {}),
                                " Liquidity",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.BX)("div", {
                        className: k()["whoChooseRubicSnap__button-container"],
                        children: [
                          (0, s.tZ)("span", {
                            children: "Try Qubic AI\u2019s App!",
                          }),
                          (0, s.tZ)("div", {
                            className:
                              k()["whoChooseRubicSnap__launch-wrapper"],
                            children: (0, s.tZ)("a", {
                              className: k().whoChooseRubicSnap__launch,
                              href: p.E.app,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Launch App",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.tZ)("svg", {
                className: "border__svg",
                width: "0",
                height: "0",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                children: (0, s.tZ)("defs", {
                  children: (0, s.BX)("filter", {
                    id: "goo",
                    children: [
                      (0, s.tZ)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "4",
                        result: "blur",
                      }),
                      (0, s.tZ)("feColorMatrix", {
                        in: "blur",
                        mode: "matrix",
                        values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9",
                        result: "goo",
                      }),
                      (0, s.tZ)("feComposite", {
                        in: "SourceGraphic",
                        in2: "goo",
                        operator: "atop",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        C = _(97005),
        S = _(73824),
        Z = _.n(S),
        q = function () {
          return (0, s.BX)("section", {
            className: Z().dexs,
            children: [
              (0, s.tZ)("div", {
                className: Z()["marquee-text-wrapper"],
                children: (0, s.BX)(C.Z, {
                  speed: 40,
                  gradient: !1,
                  className: Z()["marquee-text"],
                  children: [
                    (0, s.tZ)("span", { children: "200+ DEXs " }),
                    (0, s.tZ)("span", { children: "200+ DEXs " }),
                    (0, s.tZ)("span", { children: "200+ DEXs " }),
                    (0, s.tZ)("span", { children: "200+ DEXs " }),
                  ],
                }),
              }),
              (0, s.tZ)(C.Z, {
                speed: 60,
                gradient: !1,
                className: Z().dexs__marquee,
                children: (0, s.tZ)("div", {
                  className: Z()["dexs__marquee-content"],
                  children: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                  ].map(function (e, t) {
                    return (0,
                    s.tZ)("div", { className: Z()["dexs__marquee-item"], children: (0, s.tZ)("img", { src: "/images/metamaskSnap/dexs/".concat(e, ".png"), alt: "" }) }, t);
                  }),
                }),
              }),
            ],
          });
        },
        x = _(37778),
        R = _.n(x),
        B = function () {
          return (0, s.BX)("section", {
            className: R().howToTrade,
            children: [
              (0, s.BX)("div", {
                className: R().howToTrade__container,
                children: [
                  (0, s.tZ)("h2", {
                    className: R().howToTrade__title,
                    children: "How To Trade Smart",
                  }),
                  (0, s.BX)("div", {
                    className: R().howToTrade__cards,
                    children: [
                      (0, s.tZ)("div", {
                        className: R()["howToTrade__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: R().howToTrade__card,
                          children: [
                            (0, s.tZ)("span", {
                              className: R()["howToTrade__card-num"],
                              children: "1",
                            }),
                            (0, s.BX)("span", {
                              className: R()["howToTrade__card-text"],
                              children: [
                                "Add Qubic AI\u2019s MetaMask Snap to your wallet (",
                                (0, s.tZ)("a", {
                                  href: "/metamasksnap#installation-video",
                                  children: "tutorial",
                                }),
                                ").",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("div", {
                        className: R()["howToTrade__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: R().howToTrade__card,
                          children: [
                            (0, s.tZ)("span", {
                              className: R()["howToTrade__card-num"],
                              children: "2",
                            }),
                            (0, s.tZ)("span", {
                              className: R()["howToTrade__card-text"],
                              children:
                                "When trading on a DEX, explore better rates using Qubic AI's Snap tab in your MetaMask Wallet.",
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("div", {
                        className: R()["howToTrade__card-wrapper"],
                        children: (0, s.BX)("div", {
                          className: R().howToTrade__card,
                          children: [
                            (0, s.tZ)("span", {
                              className: R()["howToTrade__card-num"],
                              children: "3",
                            }),
                            (0, s.BX)("span", {
                              className: R()["howToTrade__card-text"],
                              children: [
                                "If Qubic AI offers a better rate, proceed to finalize your transaction at",
                                " ",
                                (0, s.tZ)("a", {
                                  href: p.E.app,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: "Qubic AI",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.tZ)("div", {
                    className: R()["howToTrade__launch-wrapper"],
                    children: (0, s.tZ)("a", {
                      className: R().howToTrade__launch,
                      href: "https://snaps.metamask.io/snap/npm/rubic-snap/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Open MM Snaps Store",
                    }),
                  }),
                ],
              }),
              (0, s.tZ)("svg", {
                className: "border__svg",
                width: "0",
                height: "0",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                children: (0, s.tZ)("defs", {
                  children: (0, s.BX)("filter", {
                    id: "goo",
                    children: [
                      (0, s.tZ)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "4",
                        result: "blur",
                      }),
                      (0, s.tZ)("feColorMatrix", {
                        in: "blur",
                        mode: "matrix",
                        values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9",
                        result: "goo",
                      }),
                      (0, s.tZ)("feComposite", {
                        in: "SourceGraphic",
                        in2: "goo",
                        operator: "atop",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        T = _(74362),
        X = _.n(T),
        L = function () {
          var e = (0, y.d)().width,
            t = (void 0 === e ? p.g.desktopWidth : e) <= 480;
          return (0, s.tZ)("section", {
            className: X().installation,
            children: (0, s.BX)("div", {
              className: X().installation__container,
              children: [
                (0, s.tZ)("img", {
                  src: "/images/metamaskSnap/installation/screenshot.png",
                  alt: "",
                }),
                (0, s.BX)("div", {
                  style: "display: flex; flex-direction: column",
                  children: [
                    (0, s.tZ)("h2", {
                      className: X().installation__title,
                      children: "\u201cBest Rate Finder\u201d Installation",
                    }),
                    (0, s.BX)("ul", {
                      className: X().installation__steps,
                      children: [
                        (0, s.BX)("li", {
                          children: [
                            (0, s.tZ)("div", { children: "1" }),
                            (0, s.BX)("span", {
                              children: [
                                "Watch the ",
                                (0, s.tZ)("a", {
                                  href: "/metamasksnap#installation-video",
                                  children: "tutorial",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        (0, s.BX)("li", {
                          children: [
                            (0, s.tZ)("div", { children: "2" }),
                            t
                              ? (0, s.BX)("span", {
                                  children: [
                                    "Visit",
                                    " ",
                                    (0, s.tZ)("a", {
                                      href: "https://snaps.metamask.io/snap/npm/rubic-snap/",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children:
                                        "https://snaps.metamask.io/ snap/npm/rubic-snap/",
                                    }),
                                  ],
                                })
                              : (0, s.BX)("span", {
                                  children: [
                                    "Visit",
                                    " ",
                                    (0, s.tZ)("a", {
                                      href: "https://snaps.metamask.io/snap/npm/rubic-snap/",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      style:
                                        "text-decoration: none; color: #5E4E72;",
                                      children:
                                        "https://snaps.metamask.io/snap/npm/rubic-snap/",
                                    }),
                                    " ",
                                    "or download ",
                                    (0, s.tZ)("button", {
                                      onClick: h,
                                      children: "here",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        (0, s.BX)("li", {
                          children: [
                            (0, s.tZ)("div", { children: "3" }),
                            (0, s.tZ)("span", {
                              children: "Click \u201cAdd To MetaMask\u201d.",
                            }),
                          ],
                        }),
                        (0, s.BX)("li", {
                          children: [
                            (0, s.tZ)("div", { children: "4" }),
                            (0, s.tZ)("span", {
                              children: "Accept Third-party software notice.",
                            }),
                          ],
                        }),
                        (0, s.BX)("li", {
                          children: [
                            (0, s.tZ)("div", { children: "5" }),
                            (0, s.tZ)("span", {
                              children:
                                "Confirm the connection and installation requests.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        H = _(90692),
        M = _.n(H),
        I = function () {
          var e = (0, y.d)().width,
            t = (void 0 === e ? p.g.desktopWidth : e) <= 480;
          return (0, s.tZ)("section", {
            className: M().whatIs,
            children: (0, s.BX)("div", {
              className: M().whatIs__container,
              children: [
                (0, s.tZ)("h2", {
                  className: M().whatIs__title,
                  children: "What Is a MetaMask Snap?",
                }),
                (0, s.tZ)("p", {
                  children:
                    "MetaMask Snap is a third-party application designed for the MetaMask wallet, which enables the integration of additional features.",
                }),
                (0, s.tZ)("br", {}),
                (0, s.tZ)("br", {}),
                (0, s.BX)("p", {
                  children: [
                    "You can install a Snap to expand the functionality of your MetaMask wallet on",
                    " ",
                    t
                      ? (0, s.tZ)(s.HY, {
                          children: (0, s.tZ)("span", {
                            "data-tooltip-id": "snap-link",
                            "data-tooltip-content":
                              "Snaps are currently available only for the desktop version of MetaMask. Use your computer to install the Snap. ",
                            children: "the official Snap\u2019s page.",
                          }),
                        })
                      : (0, s.BX)("a", {
                          href: "https://snaps.metamask.io/snap/npm/rubic-snap/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: ["the official Snap\u2019s page", " "],
                        }),
                    t
                      ? null
                      : (0, s.BX)(s.HY, {
                          children: [
                            (0, s.tZ)("span", { children: "or directly " }),
                            (0, s.tZ)("button", {
                              onClick: h,
                              children: "here",
                            }),
                            (0, s.tZ)("span", {
                              children: " at Qubic AI\u2019s page.",
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          });
        },
        E = _(42848),
        O = _.n(E),
        D = function () {
          return (0, s.tZ)("section", {
            className: O().knowledgeHub,
            children: (0, s.BX)("div", {
              className: O().knowledgeHub__container,
              children: [
                (0, s.tZ)("h2", {
                  className: O().knowledgeHub__title,
                  children: "Best Rate Finder Knowledge Hub",
                }),
                (0, s.BX)("div", {
                  className: O().knowledgeHub__cards,
                  children: [
                    (0, s.BX)("div", {
                      className: f()([
                        O().knowledgeHub__card,
                        O()["knowledgeHub__card_outside-radius-top-left"],
                      ]),
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children: "What is Qubic AI?",
                        }),
                        (0, s.BX)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children: [
                            "Qubic AI aggregates 90+ blockchains and testnets, while it enables swaps of 15,500+ assets with the best rates, highest liquidity, and transaction speeds \u2014 in one click, thanks to the integration of 220+ DEXs and bridges.",
                            (0, s.tZ)("br", {}),
                            " ",
                            (0, s.tZ)("br", {}),
                            "We also provide tools for dApps to enable cross-chain swaps.",
                          ],
                        }),
                      ],
                    }),
                    (0, s.BX)("div", {
                      className: O().knowledgeHub__card,
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children:
                            "What does Qubic AI\u2019s Best Rate Finder Snap do?",
                        }),
                        (0, s.tZ)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children:
                            "Qubic AI's MetaMask Snap can analyze routes across 200+ DEXs, enabling users to find the most cost-efficient one. Integrated into the MetaMask interface, Qubic AI Snap effortlessly offers users a superior route option.",
                        }),
                      ],
                    }),
                    (0, s.BX)("div", {
                      className: f()([
                        O().knowledgeHub__card,
                        O()["knowledgeHub__card_outside-radius-top-right"],
                      ]),
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children:
                            "How does Qubic AI aggregator ensure security?",
                        }),
                        (0, s.tZ)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children: (0, s.tZ)("a", {
                            href: "https://rubic.exchange/blog/rubics-new-security-architecture/",
                            target: "_blank",
                            rel: "noreferrer",
                            children:
                              "https://rubic.exchange/blog/rubics-new-security-architecture/",
                          }),
                        }),
                      ],
                    }),
                    (0, s.BX)("div", {
                      className: f()([
                        O().knowledgeHub__card,
                        O()["knowledgeHub__card_outside-radius-bottom-left"],
                      ]),
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children:
                            "My Qubic AI MetaMask Snap isn't working. What can I do?",
                        }),
                        (0, s.BX)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children: [
                            "If you encounter issues with the Snap, it's likely due to an outdated version of the MetaMask wallet. Please upgrade to the latest version: ",
                            (0, s.tZ)("br", {}),
                            (0, s.tZ)("br", {}),
                            " 1. Go to chrome://extensions/ ",
                            (0, s.tZ)("br", {}),
                            "2. Enable Developer Mode. ",
                            (0, s.tZ)("br", {}),
                            '3. Click on the "Details" button. ',
                            (0, s.tZ)("br", {}),
                            "4. Click on the update button (the upper-left corner). ",
                            (0, s.tZ)("br", {}),
                            (0, s.tZ)("br", {}),
                            "If updating doesn't resolve the issue, reach out to our support team.",
                          ],
                        }),
                      ],
                    }),
                    (0, s.BX)("div", {
                      className: O().knowledgeHub__card,
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children:
                            "What networks does Qubic AI\u2019s Snap support?",
                        }),
                        (0, s.tZ)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children:
                            "Qubic AI's Snap facilitates on-chain swaps across 90+ networks supported by Qubic AI.",
                        }),
                      ],
                    }),
                    (0, s.BX)("div", {
                      className: f()([
                        O().knowledgeHub__card,
                        O()["knowledgeHub__card_outside-radius-bottom-right"],
                      ]),
                      children: [
                        (0, s.tZ)("h3", {
                          className: O()["knowledgeHub__card-text"],
                          children: "How do I reach out for snap support?",
                        }),
                        (0, s.BX)("span", {
                          className: O()["knowledgeHub__card-answer"],
                          children: [
                            "Please contact Qubic AI's Telegram Support Bot:",
                            " ",
                            (0, s.tZ)("a", {
                              href: "https://t.me/RubicSupportBot",
                              children: "https://t.me/RubicSupportBot",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        A = _(97847),
        G = _(40040),
        W = _.n(G),
        F = function (e) {
          var t = e.notShowCentralBackgroundImage;
          return (0, s.BX)("section", {
            className: W().questions,
            children: [
              (0, s.BX)("div", {
                className: W().questions__container,
                children: [
                  (0, s.BX)("h2", {
                    className: W().questions__title,
                    children: [
                      "Have ",
                      (0, s.tZ)("br", {}),
                      "questions?",
                      (0, s.tZ)("span", { children: "Get in touch with us:" }),
                    ],
                  }),
                  (0, s.BX)("div", {
                    className: W().questions__buttons,
                    children: [
                      (0, s.tZ)("a", {
                        href: "mailto:support@rubic.finance",
                        className: W()["questions__buttons-button-wrapper"],
                        children: (0, s.BX)("div", {
                          className: f()([
                            W()["questions__buttons-button-content"],
                            W()["questions__buttons-button-content-1"],
                          ]),
                          children: [
                            (0, s.tZ)("span", {
                              className: W()["questions__buttons-button-text"],
                              children: "Tech Support",
                            }),
                            (0, s.tZ)(A.Z, {
                              src: "/icons/arrow-b2b-rubicIsFor.svg",
                              width: 17,
                              height: 28,
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("a", {
                        href: "https://docs.crystalballsai.xyz/contacts/business-development",
                        target: "_blank",
                        rel: "noreferrer",
                        className: W()["questions__buttons-button"],
                        children: (0, s.BX)("div", {
                          className: W()["questions__buttons-button-content"],
                          children: [
                            (0, s.tZ)("span", {
                              className: W()["questions__buttons-button-text"],
                              children: "Business Development",
                            }),
                            (0, s.tZ)(A.Z, {
                              src: "/icons/arrow-b2b-rubicIsFor.svg",
                              width: 17,
                              height: 28,
                            }),
                          ],
                        }),
                      }),
                      (0, s.tZ)("a", {
                        href: "https://docs.crystalballsai.xyz/contacts/pr-marketing",
                        target: "_blank",
                        rel: "noreferrer",
                        className: W()["questions__buttons-button-wrapper"],
                        children: (0, s.BX)("div", {
                          className: f()([
                            W()["questions__buttons-button-content"],
                            W()["questions__buttons-button-content-2"],
                          ]),
                          children: [
                            (0, s.tZ)("span", {
                              className: W()["questions__buttons-button-text"],
                              children: "Marketing Team",
                            }),
                            (0, s.tZ)(A.Z, {
                              src: "/icons/arrow-b2b-rubicIsFor.svg",
                              width: 17,
                              height: 28,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.tZ)("svg", {
                className: "border__svg",
                width: "0",
                height: "0",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                children: (0, s.tZ)("defs", {
                  children: (0, s.BX)("filter", {
                    id: "goo",
                    children: [
                      (0, s.tZ)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "4",
                        result: "blur",
                      }),
                      (0, s.tZ)("feColorMatrix", {
                        in: "blur",
                        mode: "matrix",
                        values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9",
                        result: "goo",
                      }),
                      (0, s.tZ)("feComposite", {
                        in: "SourceGraphic",
                        in2: "goo",
                        operator: "atop",
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.tZ)("img", {
                className: W()["questions__cube-1"],
                src: "/images/sdk/questions-left.svg",
                alt: "",
              }),
              t
                ? null
                : (0, s.tZ)("img", {
                    className: W()["questions__cube-2"],
                    src: "/images/sdk/questions-center.svg",
                    alt: "",
                  }),
              (0, s.tZ)("img", {
                className: W()["questions__cube-3"],
                src: "/images/sdk/questions-right.svg",
                alt: "",
              }),
            ],
          });
        },
        P = function () {
          var e = n,
            t = o,
            _ = c,
            a = r;
          return (0, s.BX)(l.HY, {
            children: [
              (0, s.tZ)(d.Z, {
                title: e,
                description: t,
                keywords: _,
                canonicalUrl: a,
              }),
              (0, s.BX)("div", {
                className: i()["metamask-snap"],
                children: [
                  (0, s.tZ)(b, {}),
                  (0, s.tZ)(N, {}),
                  (0, s.tZ)(q, {}),
                  (0, s.tZ)(B, {}),
                  (0, s.tZ)(L, {}),
                  (0, s.tZ)(I, {}),
                  (0, s.tZ)(D, {}),
                  (0, s.tZ)(F, { notShowCentralBackgroundImage: !0 }),
                ],
              }),
            ],
          });
        };
    },
    73824: function (e) {
      e.exports = {
        feedback: "style_feedback__LRfmz",
        select__control: "style_select__control__EBXPO",
        select__menu: "style_select__menu__4SV6M",
        select__option: "style_select__option__WCmUh",
        select__placeholder: "style_select__placeholder__cF_69",
        "select__single-value": "style_select__single-value__JFW_o",
        "widget-configuration-form": "style_widget-configuration-form__rfdFT",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__5oQS9",
        "select__value-container": "style_select__value-container__gRk7i",
        "select__menu-list": "style_select__menu-list__HSVNB",
        "select__option--is-selected":
          "style_select__option--is-selected__C8mOF",
        "select__indicator-separator":
          "style_select__indicator-separator__yYA5s",
        "select-not-to-open": "style_select-not-to-open__QcXIt",
        select__indicator: "style_select__indicator__E9rsy",
        modal__wrapper: "style_modal__wrapper__huRij",
        modal__body: "style_modal__body__nUPuL",
        modal__title: "style_modal__title__f1hTr",
        modal__close: "style_modal__close__EBSy0",
        modal__button: "style_modal__button__FmnrM",
        button: "style_button___CKgj",
        button_glassy: "style_button_glassy__04Q0d",
        button_header: "style_button_header__aUI0f",
        button_gradient: "style_button_gradient__vjp3Z",
        "button-link": "style_button-link__MMY6t",
        select: "style_select__wxsMo",
        "language-select__control": "style_language-select__control__wqDdw",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__LyQGa",
        "language-select__menu": "style_language-select__menu__Q_FaO",
        "language-select__menu-list": "style_language-select__menu-list__pOqGU",
        "language-select__value-container":
          "style_language-select__value-container__VAeYy",
        "language-select__single-value":
          "style_language-select__single-value__Sbbz1",
        "language-select__indicator": "style_language-select__indicator__TkaFa",
        "language-select__option": "style_language-select__option__Zp4y7",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__5SfdC",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__ymLl_",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__odAju",
        "statistic-select__control": "style_statistic-select__control__hnzZu",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__e7Xc2",
        "statistic-select__indicator":
          "style_statistic-select__indicator__KmfD5",
        "statistic-select__single-value":
          "style_statistic-select__single-value__Y9YLX",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__Zicp4",
        "statistic-select__menu": "style_statistic-select__menu__pI10G",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__Xojml",
        "statistic-select__value-container":
          "style_statistic-select__value-container__g6YIA",
        "statistic-select__option": "style_statistic-select__option__6u69Z",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__ZL1tf",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__cHEiM",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__SNpcs",
        "select-periods": "style_select-periods__Dwf2k",
        select_persia: "style_select_persia__kTYy0",
        "select-periods_persia": "style_select-periods_persia__nTiuA",
        paginationContainer: "style_paginationContainer___zcPu",
        pageLinkClassName: "style_pageLinkClassName__KzTAU",
        mobileActiveClassName: "style_mobileActiveClassName__QJvBm",
        activeClassName: "style_activeClassName__KeBwB",
        previousClassName: "style_previousClassName__u0dBX",
        nextClassName: "style_nextClassName__I1wJN",
        app: "style_app__hxGmf",
        marquee: "style_marquee__JFqd3",
        "react-tooltip": "style_react-tooltip__pzGJ7",
        carousel: "style_carousel__RfZ4H",
        carousel__slide: "style_carousel__slide__j6Pvj",
        container: "style_container__yxs39",
        "flex-centered-container": "style_flex-centered-container__rG92t",
        title: "style_title___6GEV",
        "title-h2": "style_title-h2__ffguJ",
        "title-h2__small": "style_title-h2__small__CI20r",
        "title-h1": "style_title-h1__WVMcS",
        highlight: "style_highlight__6KdgH",
        bold: "style_bold__LIO5F",
        nowrap: "style_nowrap__qCv8y",
        "section-margin": "style_section-margin__vlkXI",
        "gradient-main": "style_gradient-main__pUN9h",
        "gradient-main_dark": "style_gradient-main_dark__c9B8T",
        "gradient-ecosystem": "style_gradient-ecosystem__qktni",
        "gradient-footer": "style_gradient-footer__lEOx_",
        "gradient-footer_blue": "style_gradient-footer_blue__JGRBW",
        gradient: "style_gradient__91gg_",
        "gradient-sdk": "style_gradient-sdk__jIpzO",
        "gradient-swap-form": "style_gradient-swap-form__wy_t8",
        "gradient-benefits-top": "style_gradient-benefits-top__uva4c",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__2y7UW",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__ZtYtk",
        "gradient-referral-widget": "style_gradient-referral-widget__a5aQw",
        "gradient-staking-prepare": "style_gradient-staking-prepare__Gt_VE",
        "marquee-text": "style_marquee-text__mzO94",
        "marquee-text-wrapper": "style_marquee-text-wrapper__ZJHFX",
        dexs: "style_dexs__htHl9",
        dexs__marquee: "style_dexs__marquee__TOCYM",
        "dexs__marquee-content": "style_dexs__marquee-content__dbSbr",
        "dexs__marquee-item": "style_dexs__marquee-item__G1FPz",
      };
    },
    37778: function (e) {
      e.exports = {
        feedback: "style_feedback__pT2KA",
        select__control: "style_select__control__GbetV",
        select__menu: "style_select__menu__wJe1V",
        select__option: "style_select__option__TyOp9",
        select__placeholder: "style_select__placeholder__6w4AJ",
        "select__single-value": "style_select__single-value__s__im",
        "widget-configuration-form": "style_widget-configuration-form__0FJIl",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__aB_7V",
        "select__value-container": "style_select__value-container__iedjy",
        "select__menu-list": "style_select__menu-list__C_S6h",
        "select__option--is-selected":
          "style_select__option--is-selected__Y6M_O",
        "select__indicator-separator":
          "style_select__indicator-separator___7VvE",
        "select-not-to-open": "style_select-not-to-open__BZNuR",
        select__indicator: "style_select__indicator__mAASX",
        modal__wrapper: "style_modal__wrapper__khTyj",
        modal__body: "style_modal__body__WW0_y",
        modal__title: "style_modal__title__06JcW",
        modal__close: "style_modal__close__gtnDe",
        modal__button: "style_modal__button__GOo19",
        button: "style_button__H_TOI",
        button_glassy: "style_button_glassy__6w63l",
        button_header: "style_button_header__2yPv1",
        button_gradient: "style_button_gradient__EktAu",
        "button-link": "style_button-link__7gL6s",
        select: "style_select__czspz",
        "language-select__control": "style_language-select__control__cmPzp",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__JLWRu",
        "language-select__menu": "style_language-select__menu__rgvce",
        "language-select__menu-list": "style_language-select__menu-list__E8D9F",
        "language-select__value-container":
          "style_language-select__value-container__wMFKs",
        "language-select__single-value":
          "style_language-select__single-value__bKdhm",
        "language-select__indicator": "style_language-select__indicator__vi0y4",
        "language-select__option": "style_language-select__option__5zeZ0",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__yiEta",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__KJlFk",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__a5nzN",
        "statistic-select__control": "style_statistic-select__control__nlVq7",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__FVBDm",
        "statistic-select__indicator":
          "style_statistic-select__indicator__Y6VGy",
        "statistic-select__single-value":
          "style_statistic-select__single-value__nDxZF",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__hpY_1",
        "statistic-select__menu": "style_statistic-select__menu__tQPYX",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__KFSPb",
        "statistic-select__value-container":
          "style_statistic-select__value-container__uoIbt",
        "statistic-select__option": "style_statistic-select__option__jX5PV",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__5hOop",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__ro7HP",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__1X3Br",
        "select-periods": "style_select-periods__0rZKr",
        select_persia: "style_select_persia__6NATN",
        "select-periods_persia": "style_select-periods_persia__NAAmN",
        paginationContainer: "style_paginationContainer__eW7yQ",
        pageLinkClassName: "style_pageLinkClassName__MCq9F",
        mobileActiveClassName: "style_mobileActiveClassName__7g4pY",
        activeClassName: "style_activeClassName__U_UPJ",
        previousClassName: "style_previousClassName__NNJrT",
        nextClassName: "style_nextClassName__oFxtL",
        app: "style_app__mCt3X",
        marquee: "style_marquee__2dSlL",
        "react-tooltip": "style_react-tooltip__cSPoS",
        carousel: "style_carousel__3r6Ta",
        carousel__slide: "style_carousel__slide__ikCLj",
        container: "style_container__eyBki",
        howToTrade__container: "style_howToTrade__container__I4YK3",
        "flex-centered-container": "style_flex-centered-container__DBeDK",
        title: "style_title__yRj9Y",
        "title-h2": "style_title-h2__CuQqV",
        "title-h2__small": "style_title-h2__small__Gxldr",
        "title-h1": "style_title-h1__63Gw4",
        highlight: "style_highlight__WnHb1",
        bold: "style_bold__8rpkD",
        nowrap: "style_nowrap__YvLKl",
        "section-margin": "style_section-margin__U9PDT",
        "gradient-main": "style_gradient-main__q7wor",
        "gradient-main_dark": "style_gradient-main_dark__ttltW",
        "gradient-ecosystem": "style_gradient-ecosystem__J6sew",
        "gradient-footer": "style_gradient-footer__yEntk",
        "gradient-footer_blue": "style_gradient-footer_blue__g_Qki",
        gradient: "style_gradient__VRnws",
        "gradient-sdk": "style_gradient-sdk__pRhbK",
        "gradient-swap-form": "style_gradient-swap-form__TXEBr",
        "gradient-benefits-top": "style_gradient-benefits-top__72djZ",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__T8XhE",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__50k84",
        "gradient-referral-widget": "style_gradient-referral-widget__U4HIM",
        "gradient-staking-prepare": "style_gradient-staking-prepare__9JKp1",
        howToTrade: "style_howToTrade__0MBRQ",
        howToTrade__title: "style_howToTrade__title__5sofB",
        howToTrade__cards: "style_howToTrade__cards__27Wrt",
        howToTrade__card: "style_howToTrade__card__jfDYV",
        "howToTrade__card-wrapper": "style_howToTrade__card-wrapper__EWaVv",
        "howToTrade__card-text": "style_howToTrade__card-text__BsfEM",
        "howToTrade__card-num": "style_howToTrade__card-num___iT8L",
        "howToTrade__launch-wrapper": "style_howToTrade__launch-wrapper__EyBRB",
        howToTrade__launch: "style_howToTrade__launch__NIxw4",
      };
    },
    74362: function (e) {
      e.exports = {
        feedback: "style_feedback__jmch1",
        select__control: "style_select__control__ZPsFx",
        select__menu: "style_select__menu__zmwPC",
        select__option: "style_select__option__fK_db",
        select__placeholder: "style_select__placeholder__Vfu6j",
        "select__single-value": "style_select__single-value__kQphX",
        "widget-configuration-form": "style_widget-configuration-form__4JPW2",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__wtMbL",
        "select__value-container": "style_select__value-container__HG1Yy",
        "select__menu-list": "style_select__menu-list__ZNai9",
        "select__option--is-selected":
          "style_select__option--is-selected__Yq94_",
        "select__indicator-separator":
          "style_select__indicator-separator__4dRx_",
        "select-not-to-open": "style_select-not-to-open__cY8Rn",
        select__indicator: "style_select__indicator__5i8S3",
        modal__wrapper: "style_modal__wrapper__CHafg",
        modal__body: "style_modal__body__upj5b",
        modal__title: "style_modal__title__uPyfB",
        modal__close: "style_modal__close__hBAIp",
        modal__button: "style_modal__button__h3QbF",
        button: "style_button__yDROb",
        button_glassy: "style_button_glassy__N8NE6",
        button_header: "style_button_header__cWH_V",
        button_gradient: "style_button_gradient__kj6Co",
        "button-link": "style_button-link__NOkoj",
        select: "style_select__cyHYe",
        "language-select__control": "style_language-select__control__IaiRD",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__VzLDx",
        "language-select__menu": "style_language-select__menu__bp_Ss",
        "language-select__menu-list": "style_language-select__menu-list__BVAAb",
        "language-select__value-container":
          "style_language-select__value-container__A51OX",
        "language-select__single-value":
          "style_language-select__single-value__o6G98",
        "language-select__indicator": "style_language-select__indicator__88ub9",
        "language-select__option": "style_language-select__option__bc8y0",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__ddTyA",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__IiuBo",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__Zb5xM",
        "statistic-select__control": "style_statistic-select__control__tvlDL",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__vL6Y_",
        "statistic-select__indicator":
          "style_statistic-select__indicator__pRgNe",
        "statistic-select__single-value":
          "style_statistic-select__single-value__Bfj74",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused___KLGm",
        "statistic-select__menu": "style_statistic-select__menu__EY5yr",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__iUfa1",
        "statistic-select__value-container":
          "style_statistic-select__value-container__lWni_",
        "statistic-select__option": "style_statistic-select__option__LgCM6",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__YTIdO",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__vFRmN",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__vLsod",
        "select-periods": "style_select-periods__TWaz_",
        select_persia: "style_select_persia__b93m0",
        "select-periods_persia": "style_select-periods_persia__36pDk",
        paginationContainer: "style_paginationContainer__XLgpf",
        pageLinkClassName: "style_pageLinkClassName___gLea",
        mobileActiveClassName: "style_mobileActiveClassName__vWgIb",
        activeClassName: "style_activeClassName___b6SH",
        previousClassName: "style_previousClassName__bKwtN",
        nextClassName: "style_nextClassName__bBNNi",
        app: "style_app__xCAbE",
        marquee: "style_marquee__N0Lho",
        "react-tooltip": "style_react-tooltip__l37fp",
        carousel: "style_carousel__Z1_Ky",
        carousel__slide: "style_carousel__slide__yLIBL",
        container: "style_container__80wbr",
        installation__container: "style_installation__container__pM27o",
        "flex-centered-container": "style_flex-centered-container__zWpjh",
        title: "style_title__pUzYP",
        "title-h2": "style_title-h2__BVt0V",
        "title-h2__small": "style_title-h2__small__Vxblp",
        "title-h1": "style_title-h1__LJJx7",
        highlight: "style_highlight__QSMo5",
        bold: "style_bold__CSzYq",
        nowrap: "style_nowrap__Tn_bI",
        "section-margin": "style_section-margin__9jRoT",
        "gradient-main": "style_gradient-main__BkuF1",
        "gradient-main_dark": "style_gradient-main_dark__tG9io",
        "gradient-ecosystem": "style_gradient-ecosystem__vhcxn",
        "gradient-footer": "style_gradient-footer__jPsBv",
        "gradient-footer_blue": "style_gradient-footer_blue___6L4d",
        gradient: "style_gradient__X2FJa",
        "gradient-sdk": "style_gradient-sdk__Wt5lv",
        "gradient-swap-form": "style_gradient-swap-form__5qLmL",
        "gradient-benefits-top": "style_gradient-benefits-top__78u6m",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__DDqNm",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__INepr",
        "gradient-referral-widget": "style_gradient-referral-widget__V1sr8",
        "gradient-staking-prepare": "style_gradient-staking-prepare__bAsOb",
        installation: "style_installation__qPOLR",
        installation__title: "style_installation__title__cmHU5",
        installation__steps: "style_installation__steps__RQ3PD",
      };
    },
    42848: function (e) {
      e.exports = {
        feedback: "style_feedback__l0WdZ",
        select__control: "style_select__control__gJVCp",
        select__menu: "style_select__menu__X0G_S",
        select__option: "style_select__option__qbpc_",
        select__placeholder: "style_select__placeholder__uq_Wj",
        "select__single-value": "style_select__single-value__9Klfo",
        "widget-configuration-form": "style_widget-configuration-form__P_3rj",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__Qc4B7",
        "select__value-container": "style_select__value-container__MrqXG",
        "select__menu-list": "style_select__menu-list__gsR0Y",
        "select__option--is-selected":
          "style_select__option--is-selected__WsoJi",
        "select__indicator-separator":
          "style_select__indicator-separator__VHvUp",
        "select-not-to-open": "style_select-not-to-open__Wksw1",
        select__indicator: "style_select__indicator__WqRob",
        modal__wrapper: "style_modal__wrapper__G4Izi",
        modal__body: "style_modal__body__oGt4W",
        modal__title: "style_modal__title__Cc6h8",
        modal__close: "style_modal__close__aEvZd",
        modal__button: "style_modal__button__tfY0e",
        button: "style_button___YqkZ",
        button_glassy: "style_button_glassy__zPl8r",
        button_header: "style_button_header__F_bOn",
        button_gradient: "style_button_gradient__k2vCz",
        "button-link": "style_button-link__ieEJl",
        select: "style_select__Ennb5",
        "language-select__control": "style_language-select__control__Wv6eW",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__eLVv0",
        "language-select__menu": "style_language-select__menu__tRHfc",
        "language-select__menu-list": "style_language-select__menu-list__iiP_e",
        "language-select__value-container":
          "style_language-select__value-container__B_Rn9",
        "language-select__single-value":
          "style_language-select__single-value__SjFWm",
        "language-select__indicator": "style_language-select__indicator__nfdWO",
        "language-select__option": "style_language-select__option__Gpeta",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected___j6m3",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__14uhi",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__tUaY4",
        "statistic-select__control": "style_statistic-select__control__U1p8J",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__4ldGj",
        "statistic-select__indicator":
          "style_statistic-select__indicator__75_iV",
        "statistic-select__single-value":
          "style_statistic-select__single-value__QRF31",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__c5QoD",
        "statistic-select__menu": "style_statistic-select__menu__w_wdu",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__MqTIr",
        "statistic-select__value-container":
          "style_statistic-select__value-container__xv6FZ",
        "statistic-select__option": "style_statistic-select__option__DbXlz",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__O1Y0S",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__lCHnE",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__hY0r9",
        "select-periods": "style_select-periods__JVku2",
        select_persia: "style_select_persia__7_Ita",
        "select-periods_persia": "style_select-periods_persia__6en_G",
        paginationContainer: "style_paginationContainer__ZcDAF",
        pageLinkClassName: "style_pageLinkClassName__Y70lP",
        mobileActiveClassName: "style_mobileActiveClassName__xj4EL",
        activeClassName: "style_activeClassName__zwKaw",
        previousClassName: "style_previousClassName__JB_0k",
        nextClassName: "style_nextClassName__lodxF",
        app: "style_app__7NUJ5",
        marquee: "style_marquee__GKzCO",
        "react-tooltip": "style_react-tooltip__YA83V",
        carousel: "style_carousel__snUxe",
        carousel__slide: "style_carousel__slide__lLN_X",
        container: "style_container__Qf5ma",
        knowledgeHub__container: "style_knowledgeHub__container__mA86B",
        "flex-centered-container": "style_flex-centered-container___gnJ6",
        title: "style_title__qLPLQ",
        "title-h2": "style_title-h2__tBwTs",
        "title-h2__small": "style_title-h2__small__Iik7T",
        "title-h1": "style_title-h1__dTAIh",
        highlight: "style_highlight__BebGv",
        bold: "style_bold__9qy7a",
        nowrap: "style_nowrap__SO1a6",
        "section-margin": "style_section-margin__ah9tx",
        "gradient-main": "style_gradient-main__YhpY9",
        "gradient-main_dark": "style_gradient-main_dark__FDoIf",
        "gradient-ecosystem": "style_gradient-ecosystem__x275T",
        "gradient-footer": "style_gradient-footer__W2R7M",
        "gradient-footer_blue": "style_gradient-footer_blue__xVhOG",
        gradient: "style_gradient___S8oF",
        "gradient-sdk": "style_gradient-sdk__QGVlX",
        "gradient-swap-form": "style_gradient-swap-form__M4ceD",
        "gradient-benefits-top": "style_gradient-benefits-top__b5Nya",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__RLRsT",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__Qf_eb",
        "gradient-referral-widget": "style_gradient-referral-widget__fYGi8",
        "gradient-staking-prepare": "style_gradient-staking-prepare__ihPEc",
        knowledgeHub: "style_knowledgeHub__AzrH2",
        knowledgeHub__title: "style_knowledgeHub__title___0gw5",
        knowledgeHub__cards: "style_knowledgeHub__cards__TPAsW",
        knowledgeHub__card: "style_knowledgeHub__card__L3fbj",
        "knowledgeHub__card_outside-radius-top-left":
          "style_knowledgeHub__card_outside-radius-top-left__zknZ1",
        "knowledgeHub__card_outside-radius-top-right":
          "style_knowledgeHub__card_outside-radius-top-right__aY5pY",
        "knowledgeHub__card_outside-radius-bottom-left":
          "style_knowledgeHub__card_outside-radius-bottom-left__RfQ2K",
        "knowledgeHub__card_outside-radius-bottom-right":
          "style_knowledgeHub__card_outside-radius-bottom-right___xnmD",
        "knowledgeHub__card-text": "style_knowledgeHub__card-text__ubL2y",
        "knowledgeHub__card-answer": "style_knowledgeHub__card-answer__7K1UN",
      };
    },
    11920: function (e) {
      e.exports = {
        feedback: "style_feedback__xwMda",
        select__control: "style_select__control__ylMJW",
        select__menu: "style_select__menu__jNa3D",
        select__option: "style_select__option__XkRNH",
        select__placeholder: "style_select__placeholder__v1o7E",
        "select__single-value": "style_select__single-value__3b2OK",
        "widget-configuration-form": "style_widget-configuration-form__Pcm1v",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__5vJNx",
        "select__value-container": "style_select__value-container__TcciB",
        "select__menu-list": "style_select__menu-list__55YmY",
        "select__option--is-selected":
          "style_select__option--is-selected__qP9iu",
        "select__indicator-separator":
          "style_select__indicator-separator__f8JHX",
        "select-not-to-open": "style_select-not-to-open__OdvLy",
        select__indicator: "style_select__indicator__5LArN",
        modal__wrapper: "style_modal__wrapper__XGcBv",
        modal__body: "style_modal__body__cg7Rt",
        modal__title: "style_modal__title__kqTBT",
        modal__close: "style_modal__close__pmCIi",
        modal__button: "style_modal__button___JQVL",
        button: "style_button__N9L4D",
        button_glassy: "style_button_glassy__GSvve",
        button_header: "style_button_header__GZCSg",
        button_gradient: "style_button_gradient__2y9Lh",
        "button-link": "style_button-link__JOcit",
        select: "style_select__BJ4zZ",
        "language-select__control": "style_language-select__control__E4xWh",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__MU3pA",
        "language-select__menu": "style_language-select__menu__X60RL",
        "language-select__menu-list": "style_language-select__menu-list__Umcni",
        "language-select__value-container":
          "style_language-select__value-container__DW7OX",
        "language-select__single-value":
          "style_language-select__single-value__08d8I",
        "language-select__indicator": "style_language-select__indicator__UdPcM",
        "language-select__option": "style_language-select__option__1y57M",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__A3ALB",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__3_Or8",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator___zscd",
        "statistic-select__control": "style_statistic-select__control__gUCDw",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__cVIZw",
        "statistic-select__indicator":
          "style_statistic-select__indicator__hlCRB",
        "statistic-select__single-value":
          "style_statistic-select__single-value__FbRo4",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__0_kzL",
        "statistic-select__menu": "style_statistic-select__menu__iMX73",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__GPsYU",
        "statistic-select__value-container":
          "style_statistic-select__value-container__Dpq5v",
        "statistic-select__option": "style_statistic-select__option__bHvaT",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__2ZR7v",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__RokRJ",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__66BDH",
        "select-periods": "style_select-periods__g_SGg",
        select_persia: "style_select_persia__D7btt",
        "select-periods_persia": "style_select-periods_persia__Xs7qQ",
        paginationContainer: "style_paginationContainer__oGdve",
        pageLinkClassName: "style_pageLinkClassName__AV_6M",
        mobileActiveClassName: "style_mobileActiveClassName__taWHu",
        activeClassName: "style_activeClassName__ZSpqy",
        previousClassName: "style_previousClassName__gxnlN",
        nextClassName: "style_nextClassName__amKHj",
        app: "style_app__RPuaV",
        marquee: "style_marquee__BpJAk",
        "react-tooltip": "style_react-tooltip__n1jif",
        carousel: "style_carousel__thaLp",
        carousel__slide: "style_carousel__slide__oSknH",
        container: "style_container__nUBpP",
        mainScreen__container: "style_mainScreen__container__LqKxr",
        "flex-centered-container": "style_flex-centered-container__FTQjs",
        title: "style_title__fHdKP",
        "title-h2": "style_title-h2__ScLE1",
        "title-h2__small": "style_title-h2__small__rfRLH",
        "title-h1": "style_title-h1__Yp83k",
        highlight: "style_highlight__5Hv5n",
        bold: "style_bold__PYMvy",
        nowrap: "style_nowrap___ScHz",
        "section-margin": "style_section-margin__rFnvt",
        "gradient-main": "style_gradient-main__wU7Lw",
        "gradient-main_dark": "style_gradient-main_dark__QmGoP",
        "gradient-ecosystem": "style_gradient-ecosystem__8ZLVT",
        "gradient-footer": "style_gradient-footer__nIkfD",
        "gradient-footer_blue": "style_gradient-footer_blue__Kwdmw",
        gradient: "style_gradient__NSCoS",
        "gradient-sdk": "style_gradient-sdk__isJB3",
        "gradient-swap-form": "style_gradient-swap-form__QnP63",
        "gradient-benefits-top": "style_gradient-benefits-top__LHGrv",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__CK79q",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__yaUC_",
        "gradient-referral-widget": "style_gradient-referral-widget__3rB2Z",
        "gradient-staking-prepare": "style_gradient-staking-prepare__edTrC",
        mainScreen: "style_mainScreen__yNj1E",
        mainScreen__title: "style_mainScreen__title__nhp_K",
        mainScreen__svg: "style_mainScreen__svg__M4p8P",
        mainScreen__text: "style_mainScreen__text__SSWei",
        "mainScreen__how-to-install-text":
          "style_mainScreen__how-to-install-text__wy2Od",
        "mainScreen__how-to-install": "style_mainScreen__how-to-install__rrjRI",
        "mainScreen__how-to-install-link-wrapper":
          "style_mainScreen__how-to-install-link-wrapper__xruFK",
        "mainScreen__how-to-install-link":
          "style_mainScreen__how-to-install-link__tmn4A",
        mainScreen__background: "style_mainScreen__background__8hE7O",
      };
    },
    90692: function (e) {
      e.exports = {
        feedback: "style_feedback__7LcrY",
        select__control: "style_select__control__dtNWE",
        select__menu: "style_select__menu__k7i1U",
        select__option: "style_select__option__4W7Tt",
        select__placeholder: "style_select__placeholder__Lhcln",
        "select__single-value": "style_select__single-value__FowUO",
        "widget-configuration-form": "style_widget-configuration-form__w9up7",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__8oWl9",
        "select__value-container": "style_select__value-container__VfRUJ",
        "select__menu-list": "style_select__menu-list__zwXWj",
        "select__option--is-selected":
          "style_select__option--is-selected__MCJHk",
        "select__indicator-separator":
          "style_select__indicator-separator__cwu9a",
        "select-not-to-open": "style_select-not-to-open__E7Pb5",
        select__indicator: "style_select__indicator__fsZ8F",
        modal__wrapper: "style_modal__wrapper__jjqMM",
        modal__body: "style_modal__body__LoCEi",
        modal__title: "style_modal__title__qqea4",
        modal__close: "style_modal__close__Xw10q",
        modal__button: "style_modal__button__AwaqF",
        button: "style_button__mcpoc",
        button_glassy: "style_button_glassy__ZO9J0",
        button_header: "style_button_header__Pa32n",
        button_gradient: "style_button_gradient__T2N80",
        "button-link": "style_button-link__7iYPo",
        select: "style_select___cZUu",
        "language-select__control": "style_language-select__control__NcMLt",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__L02nM",
        "language-select__menu": "style_language-select__menu__XrEcK",
        "language-select__menu-list": "style_language-select__menu-list__F13Oh",
        "language-select__value-container":
          "style_language-select__value-container__qI87p",
        "language-select__single-value":
          "style_language-select__single-value__jQ15L",
        "language-select__indicator": "style_language-select__indicator__6y5lU",
        "language-select__option": "style_language-select__option__pHn8L",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__ymMWZ",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__ZtGXj",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__jsS1h",
        "statistic-select__control": "style_statistic-select__control__rWGPq",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__uwhgR",
        "statistic-select__indicator":
          "style_statistic-select__indicator__Or3TO",
        "statistic-select__single-value":
          "style_statistic-select__single-value__XDICz",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__plyeR",
        "statistic-select__menu": "style_statistic-select__menu__RAe_U",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__1qtnq",
        "statistic-select__value-container":
          "style_statistic-select__value-container__Q5P8f",
        "statistic-select__option": "style_statistic-select__option__Iz4Wv",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__nEfld",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__O57Ia",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__HvpNs",
        "select-periods": "style_select-periods__TuoCQ",
        select_persia: "style_select_persia__BM_Ti",
        "select-periods_persia": "style_select-periods_persia__HmIx7",
        paginationContainer: "style_paginationContainer__0JzMY",
        pageLinkClassName: "style_pageLinkClassName__SzAOO",
        mobileActiveClassName: "style_mobileActiveClassName__ZUz8k",
        activeClassName: "style_activeClassName__4gQJE",
        previousClassName: "style_previousClassName__bzF_L",
        nextClassName: "style_nextClassName__rYSKo",
        app: "style_app__8ajg_",
        marquee: "style_marquee__kro8K",
        "react-tooltip": "style_react-tooltip__p7rCu",
        carousel: "style_carousel__pOqjy",
        carousel__slide: "style_carousel__slide__IaI8p",
        container: "style_container__t2D0G",
        whatIs__container: "style_whatIs__container__qiQTy",
        "flex-centered-container": "style_flex-centered-container__8flCC",
        title: "style_title__yCqSZ",
        "title-h2": "style_title-h2__qHphu",
        "title-h2__small": "style_title-h2__small__CPyPW",
        "title-h1": "style_title-h1__UhmSG",
        highlight: "style_highlight__I_p3v",
        bold: "style_bold__B_bFT",
        nowrap: "style_nowrap__fIcOl",
        "section-margin": "style_section-margin__8MqPV",
        "gradient-main": "style_gradient-main__GM_sg",
        "gradient-main_dark": "style_gradient-main_dark__vnvSe",
        "gradient-ecosystem": "style_gradient-ecosystem__SZ__D",
        "gradient-footer": "style_gradient-footer__w60wy",
        "gradient-footer_blue": "style_gradient-footer_blue__O8HvJ",
        gradient: "style_gradient__xzqSp",
        "gradient-sdk": "style_gradient-sdk__dD9eG",
        "gradient-swap-form": "style_gradient-swap-form__cbg6g",
        "gradient-benefits-top": "style_gradient-benefits-top__U0mOE",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__wQ49f",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__rBAuK",
        "gradient-referral-widget": "style_gradient-referral-widget__Bb316",
        "gradient-staking-prepare": "style_gradient-staking-prepare__e9JJO",
        whatIs: "style_whatIs__MpugO",
        whatIs__title: "style_whatIs__title__h9NHM",
      };
    },
    96409: function (e) {
      e.exports = {
        feedback: "style_feedback__Ouvs9",
        select__control: "style_select__control__9oR7r",
        select__menu: "style_select__menu__swgNn",
        select__option: "style_select__option__P1so_",
        select__placeholder: "style_select__placeholder__RX42H",
        "select__single-value": "style_select__single-value__QjGdv",
        "widget-configuration-form": "style_widget-configuration-form__GUG8a",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__snGci",
        "select__value-container": "style_select__value-container__qDjX2",
        "select__menu-list": "style_select__menu-list__xmnwi",
        "select__option--is-selected":
          "style_select__option--is-selected__kUPAE",
        "select__indicator-separator":
          "style_select__indicator-separator__0AJbW",
        "select-not-to-open": "style_select-not-to-open__n9g7i",
        select__indicator: "style_select__indicator___dmbq",
        modal__wrapper: "style_modal__wrapper__wFs5N",
        modal__body: "style_modal__body__Tm20H",
        modal__title: "style_modal__title__pFI3O",
        modal__close: "style_modal__close__lIyqR",
        modal__button: "style_modal__button__hWmSt",
        button: "style_button__VCPsh",
        button_glassy: "style_button_glassy__eQ_qZ",
        button_header: "style_button_header__sgf0W",
        button_gradient: "style_button_gradient__830_b",
        "button-link": "style_button-link___JM5V",
        select: "style_select__85XIl",
        "language-select__control": "style_language-select__control__x9ac0",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__I_rI3",
        "language-select__menu": "style_language-select__menu__dMQoq",
        "language-select__menu-list": "style_language-select__menu-list__cHJW3",
        "language-select__value-container":
          "style_language-select__value-container__03FGL",
        "language-select__single-value":
          "style_language-select__single-value__Fnl6U",
        "language-select__indicator": "style_language-select__indicator__D8pjW",
        "language-select__option": "style_language-select__option__dlpyt",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__JJb9k",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__orL3_",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__2Ywmq",
        "statistic-select__control": "style_statistic-select__control__HPB_s",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__Bp76e",
        "statistic-select__indicator":
          "style_statistic-select__indicator__gvVRv",
        "statistic-select__single-value":
          "style_statistic-select__single-value__nVmB9",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__3QlbX",
        "statistic-select__menu": "style_statistic-select__menu__r8MNE",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__eQ_bI",
        "statistic-select__value-container":
          "style_statistic-select__value-container__DmQhk",
        "statistic-select__option": "style_statistic-select__option__C5_r0",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__6Zv4E",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__iInih",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__bEG8O",
        "select-periods": "style_select-periods__xdY_s",
        select_persia: "style_select_persia__4_1m1",
        "select-periods_persia": "style_select-periods_persia__xVUd1",
        paginationContainer: "style_paginationContainer__becJK",
        pageLinkClassName: "style_pageLinkClassName__eU7ii",
        mobileActiveClassName: "style_mobileActiveClassName__Elqfn",
        activeClassName: "style_activeClassName__TWEbt",
        previousClassName: "style_previousClassName__uPQQn",
        nextClassName: "style_nextClassName__beemo",
        app: "style_app__WaSp6",
        marquee: "style_marquee__E4moO",
        "react-tooltip": "style_react-tooltip__vn5XV",
        carousel: "style_carousel___IPsS",
        carousel__slide: "style_carousel__slide__yD_E2",
        container: "style_container__GCXcq",
        whoChooseRubicSnap__container:
          "style_whoChooseRubicSnap__container__FgxJR",
        "flex-centered-container": "style_flex-centered-container__PeAMP",
        title: "style_title__L1lk4",
        "title-h2": "style_title-h2__54VYz",
        "title-h2__small": "style_title-h2__small__dN3Bb",
        "title-h1": "style_title-h1__md_OX",
        highlight: "style_highlight__maVtf",
        bold: "style_bold__Axs68",
        nowrap: "style_nowrap__dJm9Z",
        "section-margin": "style_section-margin__OO73v",
        "gradient-main": "style_gradient-main__Eo3cl",
        "gradient-main_dark": "style_gradient-main_dark__b8R1u",
        "gradient-ecosystem": "style_gradient-ecosystem__8dTAG",
        "gradient-footer": "style_gradient-footer__vACun",
        "gradient-footer_blue": "style_gradient-footer_blue__zsaO6",
        gradient: "style_gradient__8d_Bf",
        "gradient-sdk": "style_gradient-sdk__Ds8PS",
        "gradient-swap-form": "style_gradient-swap-form__LkkSN",
        "gradient-benefits-top": "style_gradient-benefits-top__6qbOO",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__v0ekF",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__WtOIF",
        "gradient-referral-widget": "style_gradient-referral-widget__v1RK6",
        "gradient-staking-prepare": "style_gradient-staking-prepare__q73ka",
        whoChooseRubicSnap: "style_whoChooseRubicSnap__r3l_X",
        whoChooseRubicSnap__title: "style_whoChooseRubicSnap__title__aODqn",
        whoChooseRubicSnap__cards: "style_whoChooseRubicSnap__cards__velBx",
        "whoChooseRubicSnap__card-wrapper":
          "style_whoChooseRubicSnap__card-wrapper__gqTfw",
        whoChooseRubicSnap__card: "style_whoChooseRubicSnap__card__kstnB",
        "whoChooseRubicSnap__card-title":
          "style_whoChooseRubicSnap__card-title__4aXDT",
        "whoChooseRubicSnap__card-img":
          "style_whoChooseRubicSnap__card-img__B8ph9",
        "whoChooseRubicSnap__card-img-2":
          "style_whoChooseRubicSnap__card-img-2__2S_pi",
        "whoChooseRubicSnap__card-img-3":
          "style_whoChooseRubicSnap__card-img-3__li41T",
        "whoChooseRubicSnap__button-container":
          "style_whoChooseRubicSnap__button-container__7DkjD",
        "whoChooseRubicSnap__launch-wrapper":
          "style_whoChooseRubicSnap__launch-wrapper__aDRGQ",
        whoChooseRubicSnap__launch: "style_whoChooseRubicSnap__launch__kcOIp",
      };
    },
    28035: function (e) {
      e.exports = {
        feedback: "style_feedback__nXxd7",
        select__control: "style_select__control__8xiSY",
        select__menu: "style_select__menu__w_TsJ",
        select__option: "style_select__option__g17uM",
        select__placeholder: "style_select__placeholder__SQyDy",
        "select__single-value": "style_select__single-value__Sv6sD",
        "widget-configuration-form": "style_widget-configuration-form__7nAYu",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__XkCHa",
        "select__value-container": "style_select__value-container__FrSVO",
        "select__menu-list": "style_select__menu-list___al12",
        "select__option--is-selected":
          "style_select__option--is-selected__epuVp",
        "select__indicator-separator":
          "style_select__indicator-separator__ZKW04",
        "select-not-to-open": "style_select-not-to-open__wVmtv",
        select__indicator: "style_select__indicator__4hpcL",
        modal__wrapper: "style_modal__wrapper__bZdG9",
        modal__body: "style_modal__body___RCtq",
        modal__title: "style_modal__title__FPVVn",
        modal__close: "style_modal__close__p3MQ_",
        modal__button: "style_modal__button__8mjmy",
        button: "style_button__nMfV1",
        button_glassy: "style_button_glassy__n1OOM",
        button_header: "style_button_header__WWVSH",
        button_gradient: "style_button_gradient__S6eZB",
        "button-link": "style_button-link__gFTy7",
        select: "style_select___pdNu",
        "language-select__control": "style_language-select__control__NIPIV",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__mKYpl",
        "language-select__menu": "style_language-select__menu__cv9uG",
        "language-select__menu-list": "style_language-select__menu-list__prV8l",
        "language-select__value-container":
          "style_language-select__value-container__dHL64",
        "language-select__single-value":
          "style_language-select__single-value__4mOlS",
        "language-select__indicator": "style_language-select__indicator__q_Dx0",
        "language-select__option": "style_language-select__option__DxLEY",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__FGheF",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__yQe86",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__cNAIg",
        "statistic-select__control": "style_statistic-select__control__Z4G3Q",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__dv63V",
        "statistic-select__indicator":
          "style_statistic-select__indicator__KTR4R",
        "statistic-select__single-value":
          "style_statistic-select__single-value___1LZ0",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused___bLJk",
        "statistic-select__menu": "style_statistic-select__menu___9Cdg",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__4S9IU",
        "statistic-select__value-container":
          "style_statistic-select__value-container__CTHnj",
        "statistic-select__option": "style_statistic-select__option__QJuy8",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__oa4r0",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__HCgvB",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__VguqS",
        "select-periods": "style_select-periods__cxXID",
        select_persia: "style_select_persia__hu5H0",
        "select-periods_persia": "style_select-periods_persia__NGnwm",
        paginationContainer: "style_paginationContainer__EH7uh",
        pageLinkClassName: "style_pageLinkClassName__bmxy3",
        mobileActiveClassName: "style_mobileActiveClassName__FoCLm",
        activeClassName: "style_activeClassName__opvIJ",
        previousClassName: "style_previousClassName__uYoSL",
        nextClassName: "style_nextClassName__0D3HL",
        app: "style_app__lkcFT",
        marquee: "style_marquee__H8204",
        "react-tooltip": "style_react-tooltip__3Xjal",
        carousel: "style_carousel__ElNtL",
        carousel__slide: "style_carousel__slide__0G8aj",
        container: "style_container__XzyMO",
        "flex-centered-container": "style_flex-centered-container__LENt4",
        title: "style_title__SKDfJ",
        "title-h2": "style_title-h2__eYm_J",
        "title-h2__small": "style_title-h2__small__WF6OQ",
        "title-h1": "style_title-h1__f4VJv",
        highlight: "style_highlight__kztv_",
        bold: "style_bold__qQwmR",
        nowrap: "style_nowrap__1sl_0",
        "section-margin": "style_section-margin__PUHH2",
        "gradient-main": "style_gradient-main__yz_GI",
        "gradient-main_dark": "style_gradient-main_dark__1Fsmx",
        "gradient-ecosystem": "style_gradient-ecosystem__kco4w",
        "gradient-footer": "style_gradient-footer__KM74P",
        "gradient-footer_blue": "style_gradient-footer_blue__poDcO",
        gradient: "style_gradient__CNh_x",
        "gradient-sdk": "style_gradient-sdk__c7NQ_",
        "gradient-swap-form": "style_gradient-swap-form__oisVT",
        "gradient-benefits-top": "style_gradient-benefits-top__SwyBO",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__m_gtZ",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__mFcvv",
        "gradient-referral-widget": "style_gradient-referral-widget__pRXTz",
        "gradient-staking-prepare": "style_gradient-staking-prepare__fsdo0",
      };
    },
    40040: function (e) {
      e.exports = {
        feedback: "style_feedback__BoU9J",
        select__control: "style_select__control__JmAaD",
        select__menu: "style_select__menu__bizKe",
        select__option: "style_select__option__HajAV",
        select__placeholder: "style_select__placeholder__NOG8_",
        "select__single-value": "style_select__single-value__ZBQgS",
        "widget-configuration-form": "style_widget-configuration-form__UKnkJ",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__ctT0D",
        "select__value-container": "style_select__value-container__HSGFD",
        "select__menu-list": "style_select__menu-list__rQrnl",
        "select__option--is-selected":
          "style_select__option--is-selected__ByKz_",
        "select__indicator-separator":
          "style_select__indicator-separator__gu7zD",
        "select-not-to-open": "style_select-not-to-open__C03E6",
        select__indicator: "style_select__indicator__eXORB",
        modal__wrapper: "style_modal__wrapper__3h_5x",
        modal__body: "style_modal__body__N6cP1",
        modal__title: "style_modal__title__S42MN",
        modal__close: "style_modal__close__mOvB7",
        modal__button: "style_modal__button__XrHOI",
        button: "style_button__NXozj",
        button_glassy: "style_button_glassy__fTX40",
        button_header: "style_button_header__NEp3u",
        button_gradient: "style_button_gradient__ocxxL",
        "button-link": "style_button-link__qAepe",
        select: "style_select___kIeM",
        "language-select__control": "style_language-select__control__hDVRo",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__9uNLz",
        "language-select__menu": "style_language-select__menu__J3psP",
        "language-select__menu-list": "style_language-select__menu-list__MZQBo",
        "language-select__value-container":
          "style_language-select__value-container__v3f_c",
        "language-select__single-value":
          "style_language-select__single-value__jMU6r",
        "language-select__indicator": "style_language-select__indicator__N0YDe",
        "language-select__option": "style_language-select__option__pPs5f",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__B4HgC",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__FH2tW",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__3Eec_",
        "statistic-select__control": "style_statistic-select__control__dGxDJ",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__6ZIET",
        "statistic-select__indicator":
          "style_statistic-select__indicator__4wEEf",
        "statistic-select__single-value":
          "style_statistic-select__single-value__Y0sSL",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__yf84v",
        "statistic-select__menu": "style_statistic-select__menu__YX3AJ",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__I_RK9",
        "statistic-select__value-container":
          "style_statistic-select__value-container__lMvGt",
        "statistic-select__option": "style_statistic-select__option__Earvs",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__fbEmz",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__pDWLw",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__TSG3m",
        "select-periods": "style_select-periods__MMK__",
        select_persia: "style_select_persia__csp1t",
        "select-periods_persia": "style_select-periods_persia__6NZVw",
        paginationContainer: "style_paginationContainer__za0Vl",
        pageLinkClassName: "style_pageLinkClassName__j_sTM",
        mobileActiveClassName: "style_mobileActiveClassName__s4Y2J",
        activeClassName: "style_activeClassName__ejTn8",
        previousClassName: "style_previousClassName__Vcrvy",
        nextClassName: "style_nextClassName__4VPIr",
        app: "style_app__QGm5y",
        marquee: "style_marquee__Nq8_x",
        "react-tooltip": "style_react-tooltip__FrZKI",
        carousel: "style_carousel__Kh0bD",
        carousel__slide: "style_carousel__slide__xtF2S",
        container: "style_container__uBu8U",
        questions__container: "style_questions__container__r2BsL",
        "flex-centered-container": "style_flex-centered-container__5Jthd",
        title: "style_title__DJXkC",
        "title-h2": "style_title-h2__H45oO",
        "title-h2__small": "style_title-h2__small__kWSGn",
        "title-h1": "style_title-h1__EUYza",
        highlight: "style_highlight__hUaYi",
        bold: "style_bold__UW7K1",
        nowrap: "style_nowrap__o2IpI",
        "section-margin": "style_section-margin__HOQOU",
        "gradient-main": "style_gradient-main__4RAXp",
        "gradient-main_dark": "style_gradient-main_dark__NqFCU",
        "gradient-ecosystem": "style_gradient-ecosystem__xYMUx",
        "gradient-footer": "style_gradient-footer__IGY7c",
        "gradient-footer_blue": "style_gradient-footer_blue__uGP3R",
        gradient: "style_gradient__I1AvD",
        "gradient-sdk": "style_gradient-sdk__tg2Jh",
        "gradient-swap-form": "style_gradient-swap-form__RxPme",
        "gradient-benefits-top": "style_gradient-benefits-top__6sh4g",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__HKDFZ",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__yix6O",
        "gradient-referral-widget": "style_gradient-referral-widget__GElbO",
        "gradient-staking-prepare": "style_gradient-staking-prepare__oTkmO",
        questions: "style_questions__oVpx4",
        "questions__cube-1": "style_questions__cube-1__RlcMU",
        "questions__cube-2": "style_questions__cube-2__fibdd",
        "questions__cube-3": "style_questions__cube-3__WQ2_r",
        questions__title: "style_questions__title___8fiG",
        questions__buttons: "style_questions__buttons__woL2Q",
        "questions__buttons-button": "style_questions__buttons-button__0PPkA",
        "questions__buttons-button-wrapper":
          "style_questions__buttons-button-wrapper__U8Le5",
        "questions__buttons-button-text":
          "style_questions__buttons-button-text__jzbR9",
        "questions__buttons-button-content":
          "style_questions__buttons-button-content__5yugW",
        "questions__buttons-button-content-1":
          "style_questions__buttons-button-content-1__BMAbJ",
        "questions__buttons-button-content-2":
          "style_questions__buttons-button-content-2__TJZWO",
        "questions__cube-left-top": "style_questions__cube-left-top__wsGwO",
        "questions__cube-right": "style_questions__cube-right__mCV4l",
        "questions__cube-left-bottom":
          "style_questions__cube-left-bottom__V7Vif",
      };
    },
    9008: function (e, t, _) {
      e.exports = _(83121);
    },
    97005: function (e, t, _) {
      var s = _(98661);
      function l(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var a = l(s),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, _ = 1, s = arguments.length; _ < s; _++)
                  for (var l in (t = arguments[_]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }),
            i.apply(this, arguments)
          );
        };
      !(function (e) {
        if (!e || "undefined" === typeof window) return;
        const t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      );
      t.Z = function (e) {
        var t,
          _,
          l,
          n,
          o = e.style,
          c = void 0 === o ? {} : o,
          r = e.className,
          d = void 0 === r ? "" : r,
          u = e.play,
          g = void 0 === u || u,
          p = e.pauseOnHover,
          y = void 0 !== p && p,
          m = e.pauseOnClick,
          h = void 0 !== m && m,
          b = e.direction,
          w = void 0 === b ? "left" : b,
          f = e.speed,
          v = void 0 === f ? 20 : f,
          k = e.delay,
          N = void 0 === k ? 0 : k,
          C = e.loop,
          S = void 0 === C ? 0 : C,
          Z = e.gradient,
          q = void 0 === Z || Z,
          x = e.gradientColor,
          R = void 0 === x ? [255, 255, 255] : x,
          B = e.gradientWidth,
          T = void 0 === B ? 200 : B,
          X = e.onFinish,
          L = e.onCycleComplete,
          H = e.children,
          M = s.useState(0),
          I = M[0],
          E = M[1],
          O = s.useState(0),
          D = O[0],
          A = O[1],
          G = s.useState(!1),
          W = G[0],
          F = G[1],
          P = s.useRef(null),
          J = s.useRef(null);
        s.useEffect(
          function () {
            if (W) {
              var e = function () {
                J.current &&
                  P.current &&
                  (E(P.current.getBoundingClientRect().width),
                  A(J.current.getBoundingClientRect().width));
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }
          },
          [W]
        ),
          s.useEffect(function () {
            F(!0);
          }, []);
        var V = "rgba(" + R[0] + ", " + R[1] + ", " + R[2],
          Y = D < I ? I / v : D / v;
        return a.default.createElement(
          s.Fragment,
          null,
          W
            ? a.default.createElement(
                "div",
                {
                  ref: P,
                  style: i(
                    i({}, c),
                    ((t = {}),
                    (t["--pause-on-hover"] = !g || y ? "paused" : "running"),
                    (t["--pause-on-click"] =
                      !g || (y && !h) || h ? "paused" : "running"),
                    t)
                  ),
                  className: d + " marquee-container",
                },
                q &&
                  a.default.createElement("div", {
                    style:
                      ((_ = {}),
                      (_["--gradient-color"] = V + ", 1), " + V + ", 0)"),
                      (_["--gradient-width"] =
                        "number" === typeof T ? T + "px" : T),
                      _),
                    className: "overlay",
                  }),
                a.default.createElement(
                  "div",
                  {
                    ref: J,
                    style:
                      ((l = {}),
                      (l["--play"] = g ? "running" : "paused"),
                      (l["--direction"] = "left" === w ? "normal" : "reverse"),
                      (l["--duration"] = Y + "s"),
                      (l["--delay"] = N + "s"),
                      (l["--iteration-count"] = S ? "" + S : "infinite"),
                      l),
                    className: "marquee",
                    onAnimationIteration: L,
                    onAnimationEnd: X,
                  },
                  H
                ),
                a.default.createElement(
                  "div",
                  {
                    style:
                      ((n = {}),
                      (n["--play"] = g ? "running" : "paused"),
                      (n["--direction"] = "left" === w ? "normal" : "reverse"),
                      (n["--duration"] = Y + "s"),
                      (n["--delay"] = N + "s"),
                      (n["--iteration-count"] = S ? "" + S : "infinite"),
                      n),
                    className: "marquee",
                    "aria-hidden": "true",
                  },
                  H
                )
              )
            : null
        );
      };
    },
  },
  function (e) {
    e.O(0, [7096, 9774, 2888, 179], function () {
      return (t = 39773), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
