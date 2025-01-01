(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8879],
  {
    72846: function (e, t, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/staking",
        function () {
          return _(44093);
        },
      ]);
    },
    44093: function (e, t, _) {
      "use strict";
      _.r(t),
        _.d(t, {
          default: function () {
            return M;
          },
        });
      var s = _(97997),
        l = _(6400),
        a = _(97096),
        i = _(18413),
        r = _(94219),
        n = _(80132),
        c = _.n(n),
        o = function () {
          return (0, s.BX)("section", {
            className: c().screen,
            children: [
              (0, s.tZ)("div", {
                className: c().screen__container,
                children: (0, s.BX)("div", {
                  className: c().screen__text,
                  children: [
                    (0, s.tZ)("h1", {
                      className: c().screen__title,
                      id: "mainScreen",
                      children: (0, s.tZ)("span", {
                        className: "nowrap",
                        children: (0, s.tZ)(i.xv, {
                          id: "staking.mainScreen.title",
                          children: "QUBIC STAKING",
                        }),
                      }),
                    }),
                    (0, s.tZ)("span", {
                      className: c().screen__subtitle,
                      children: (0, s.tZ)(i.xv, {
                        id: "staking.mainScreen.subtitle",
                        children: "EARN up to 30-100% APR in ETH",
                      }),
                    }),
                    (0, s.tZ)("div", { className: c()["screen__gradient-1"] }),
                    (0, s.tZ)("div", { className: c()["screen__gradient-2"] }),
                    (0, s.tZ)("div", { className: c()["screen__gradient-3"] }),
                    (0, s.BX)("div", {
                      className: c().screen__buttons,
                      children: [
                        (0, s.tZ)("a", {
                          href: r.E.earn,
                          target: "_blank",
                          rel: "noreferrer",
                          className: c().screen__button,
                          children: (0, s.tZ)("span", { children: "Stake!" }),
                        }),
                        (0, s.tZ)("a", {
                          href: r.E.stakingFullRules,
                          target: "_blank",
                          rel: "noreferrer",
                          className: c().screen__button,
                          children: (0, s.tZ)(i.xv, {
                            id: "staking.features.button",
                            children: "Read the Full Rules",
                          }),
                        }),
                      ],
                    }),
                    (0, s.tZ)("img", {
                      className: c()["screen__background-cube"],
                      src: "/images/staking/main-cubes.png",
                      alt: "Background cube",
                    }),
                  ],
                }),
              }),
              (0, s.tZ)("img", {
                className: c()["screen__background-hex"],
                src: "/images/main-background-img-hex.png",
                alt: "Background hex",
              }),
            ],
          });
        },
        d = _(94184),
        p = _.n(d),
        g = _(6452),
        m = _.n(g),
        u = [
          {
            id: 0,
            title: "UP TO 15% APR IN ETH",
            title_mobile1: "UP TO 15%",
            title_mobile2: " APR IN ETH",
            text: "Funded by the allocation of 50% of Qubic AI's earned fees. Paid in ETH on Arbitrum. ",
          },
          {
            id: 1,
            title: "Any Amount",
            text: "Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times.",
          },
          {
            id: 2,
            title: "Rewards EVERY SECOND",
            title_mobile1: "Rewards ",
            title_mobile2: "EVERY SECOND",
            text: "Rewards are distributed every second, and can be withdrawn any time.",
          },
        ],
        y = function (e) {
          return (0, s.tZ)("section", {
            className: m().card,
            children: (0, s.BX)("div", {
              className: m().card__container,
              children: [
                (0, s.tZ)("img", {
                  className: m().card__logo,
                  src: "/images/staking/feature-".concat(e.id + 1, ".png"),
                  alt: "Card image",
                }),
                (0, s.BX)("div", {
                  className: m().card__content,
                  children: [
                    1 === e.id
                      ? (0, s.tZ)("h3", {
                          className: p()([m().card__title, m().card__title_2]),
                          children: u[e.id].title,
                        })
                      : (0, s.tZ)("h3", {
                          className: m().card__title,
                          children: u[e.id].title,
                        }),
                    u[e.id].title_mobile1
                      ? (0, s.BX)("div", {
                          children: [
                            (0, s.tZ)("h3", {
                              className: p()([
                                m().card__title_mobile,
                                m().card__title,
                              ]),
                              children: u[e.id].title_mobile1,
                            }),
                            (0, s.tZ)("h3", {
                              className: p()([
                                m().card__title_mobile,
                                m().card__title,
                                m().card__title_mobile_2,
                              ]),
                              children: u[e.id].title_mobile2,
                            }),
                          ],
                        })
                      : null,
                    (0, s.tZ)("span", {
                      className: m().card__text,
                      children: u[e.id].text,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        b = _(98661),
        h = _(79834),
        f = _.n(h);
      var v = function (e) {
          var t = +new Date(Date.UTC(2023, 5, 14, 9, 0, 0, 0)) - +new Date();
          return (
            t < 1e3 && e(!0),
            {
              days: Math.floor(t / 864e5),
              hours: Math.floor((t / 36e5) % 24),
              minutes: Math.floor((t / 1e3 / 60) % 60),
              seconds: Math.floor((t / 1e3) % 60),
            }
          );
        },
        N = function (e) {
          return e < 10 ? "0".concat(e) : e;
        },
        k = function (e) {
          var t,
            _,
            l,
            a = e.appearance,
            r = e.updateExpired,
            n = (0, b.useState)(!1),
            c = n[0],
            o = n[1],
            d = (0, b.useState)(v(o)),
            g = d[0],
            m = d[1],
            u = function () {
              var e = !1;
              return (
                0 === g.days &&
                  0 === g.hours &&
                  0 === g.minutes &&
                  0 !== g.seconds &&
                  (e = !0),
                e
              );
            };
          return (
            u() && (a = ""),
            (0, b.useEffect)(function () {
              if (!c) {
                var e = setTimeout(function () {
                  m(v(o));
                }, 1e3);
                return function () {
                  return clearTimeout(e);
                };
              }
              return (
                r(!0),
                function () {
                  return null;
                }
              );
            }),
            (0, s.BX)("div", {
              className: p()(
                f().timer,
                ((t = {}),
                (_ = f().timer_main),
                (l = "main" === a),
                _ in t
                  ? Object.defineProperty(t, _, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[_] = l),
                t)
              ),
              style: u() ? "justify-content: center;" : "",
              children: [
                (0, s.BX)("div", {
                  className: f().timer__time,
                  style: u() ? "display: none;" : "",
                  children: [
                    (0, s.tZ)("div", {
                      className: f().timer__number,
                      children: N(g.days),
                    }),
                    (0, s.tZ)("div", {
                      className: f().timer__label,
                      children: (0, s.tZ)(i.xv, {
                        id: "launch.days",
                        children: "Days",
                      }),
                    }),
                  ],
                }),
                (0, s.BX)("div", {
                  className: f().timer__time,
                  style: u() ? "display: none;" : "",
                  children: [
                    (0, s.tZ)("div", {
                      className: f().timer__number,
                      children: N(g.hours),
                    }),
                    (0, s.tZ)("div", {
                      className: f().timer__label,
                      children: (0, s.tZ)(i.xv, {
                        id: "launch.hours",
                        children: "Hours",
                      }),
                    }),
                  ],
                }),
                (0, s.BX)("div", {
                  className: f().timer__time,
                  style: u() ? "display: none;" : "",
                  children: [
                    (0, s.tZ)("div", {
                      className: f().timer__number,
                      children: N(g.minutes),
                    }),
                    (0, s.tZ)("div", {
                      className: f().timer__label,
                      children: (0, s.tZ)(i.xv, {
                        id: "launch.minutes",
                        children: "Minutes",
                      }),
                    }),
                  ],
                }),
                (0, s.BX)("div", {
                  className: f().timer__time,
                  style: "main" !== a || u() ? "" : "display: none;",
                  children: [
                    (0, s.tZ)("div", {
                      className: f().timer__number,
                      children: N(g.seconds),
                    }),
                    (0, s.tZ)("div", {
                      className: f().timer__label,
                      children: (0, s.tZ)(i.xv, {
                        id: "launch.seconds",
                        children: "Seconds",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        w = _(6106),
        Z = _.n(w),
        x = function () {
          var e = (0, b.useState)(!1),
            t = e[0],
            _ = e[1];
          return (0, s.BX)("section", {
            className: Z().features,
            children: [
              (0, s.tZ)("div", {
                style: "display: none;",
                children: t
                  ? null
                  : (0, s.tZ)(k, {
                      appearance: "main",
                      updateExpired: function (e) {
                        _(e);
                      },
                    }),
              }),
              (0, s.BX)("div", {
                className: Z().features__container,
                children: [
                  t
                    ? null
                    : (0, s.tZ)("a", {
                        href: r.E.stakingFullRules,
                        target: "_blank",
                        rel: "noreferrer",
                        className: Z().features__button,
                        children: (0, s.tZ)(i.xv, {
                          id: "staking.features.button",
                          children: "Read the Full Rules",
                        }),
                      }),
                  (0, s.BX)("h2", {
                    className: Z().features__title,
                    children: [
                      "NEW",
                      (0, s.tZ)("br", { className: Z().features__title_br }),
                      " STAKING FEATURES:",
                    ],
                  }),
                  (0, s.BX)("div", {
                    className: Z().features__cards,
                    children: [
                      (0, s.tZ)(y, { id: 0 }),
                      (0, s.tZ)(y, { id: 1 }),
                      (0, s.tZ)(y, { id: 2 }),
                    ],
                  }),
                  (0, s.tZ)("a", {
                    href: r.E.stakingFullRules,
                    target: "_blank",
                    rel: "noreferrer",
                    className: Z().features__button,
                    style: "margin-top: 60px;",
                    children: (0, s.tZ)(i.xv, {
                      id: "staking.features.button",
                      children: "Read the Full Rules",
                    }),
                  }),
                ],
              }),
              (0, s.tZ)("img", {
                className: Z()["features__hex-r-b"],
                src: "/images/staking/hexs/f-l-b.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: Z()["features__hex-r-t"],
                src: "/images/staking/hexs/f-l-t.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: Z()["features__hex-l"],
                src: "/images/staking/hexs/f-r.png",
                alt: "Background hex",
              }),
            ],
          });
        },
        C = _(34393),
        B = _.n(C),
        X = function () {
          return (0, s.tZ)("section", {
            className: B().projected,
            id: "graphs",
            children: (0, s.BX)("div", {
              className: B().projected__container,
              children: [
                (0, s.BX)("h2", {
                  className: B().projected__title,
                  children: [
                    "Qubic AI's Projected ",
                    (0, s.tZ)("br", {}),
                    " Staking APR and Fees",
                  ],
                }),
                (0, s.BX)("div", {
                  className: B().projected__wrapper,
                  children: [
                    (0, s.tZ)("img", {
                      className: B().projected__img_desk,
                      src: "/images/staking/scales_desktop.png",
                      alt: "Card icon",
                    }),
                    (0, s.tZ)("img", {
                      className: B().projected__img_mob,
                      src: "/images/staking/scales_mobile2.png",
                      alt: "Card icon",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        R = _(1620),
        E = _.n(R),
        A = function () {
          return (0, s.BX)("section", {
            className: E().circle,
            children: [
              (0, s.tZ)("div", {
                className: E().circle__container,
                children: (0, s.BX)("div", {
                  className: E().circle__wrapper,
                  children: [
                    (0, s.tZ)("div", {
                      className: p()([E().circle__item, E().circle__item_1]),
                      children: "You use Qubic AI",
                    }),
                    (0, s.BX)("div", {
                      className: p()([E().circle__item, E().circle__item_2]),
                      children: [
                        "Get QBC in",
                        " ",
                        (0, s.BX)("a", {
                          className: E().circle__link,
                          href: "https://app-qubic-andy217-devs-projects.vercel.app/swap-and-earn",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [" ", "#SwapToEarn"],
                        }),
                      ],
                    }),
                    (0, s.tZ)("div", {
                      className: p()([E().circle__item, E().circle__item_3]),
                      children: "Stake QBC",
                    }),
                    (0, s.tZ)("div", {
                      className: p()([E().circle__item, E().circle__item_4]),
                      children: "Get income from QBC",
                    }),
                    (0, s.tZ)("img", {
                      className: E()["circle__circle-img"],
                      src: "/images/staking/circle.png",
                      alt: "Circle",
                    }),
                    (0, s.tZ)("img", {
                      className: p()([
                        E()["circle__circle-img"],
                        E()["circle__circle-img_mobile"],
                      ]),
                      src: "/images/staking/circle_mobile.png",
                      alt: "Circle mobile",
                    }),
                    (0, s.tZ)("img", {
                      className: E().circle__cubes,
                      src: "/images/staking/circle-cubes.svg",
                      alt: "Background cube",
                    }),
                  ],
                }),
              }),
              (0, s.tZ)("img", {
                className: E()["circle__hex-r-b"],
                src: "/images/staking/hexs/c-l-b.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: E()["circle__hex-r-t"],
                src: "/images/staking/hexs/c-l-t.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: E()["circle__hex-l-b"],
                src: "/images/staking/hexs/c-r-b.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: E()["circle__hex-l-t"],
                src: "/images/staking/hexs/c-r-t.png",
                alt: "Background hex",
              }),
            ],
          });
        },
        T = _(68665),
        q = _.n(T),
        j = function () {
          var e = (0, b.useState)(!1),
            t = e[0],
            _ = e[1];
          return (0, s.BX)("div", {
            className: q().prepare,
            children: [
              (0, s.tZ)("div", {
                className: q().prepare__timer,
                children: t
                  ? null
                  : (0, s.tZ)(k, {
                      appearance: "main",
                      updateExpired: function (e) {
                        _(e);
                      },
                    }),
              }),
              (0, s.BX)("div", {
                className: q().prepare__container,
                children: [
                  t
                    ? (0, s.tZ)("h2", {
                        className: q().prepare__title,
                        children: "HOW TO STAKE",
                      })
                    : (0, s.tZ)("h2", {
                        className: q().prepare__title,
                        children: "HOW TO PREPARE",
                      }),
                  t
                    ? (0, s.BX)("div", {
                        className: q().prepare__stepper,
                        children: [
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children:
                                        "BRIDGE QBC Tokens from ethereum to arbitrum",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_0"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children:
                                        "BRIDGE QBC Tokens from ethereum to arbitrum",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "If you don\u2019t have QBC, you can easily obtain some via the Qubic AI app at the link below!",
                                        (0, s.tZ)("br", {}),
                                        " QBC tokens earned in the SwapToEarn program can also be staked.",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__desktop-br"],
                                        }),
                                        " To do so, you need to claim them first - it\u2019s now possible on Arbitrum!",
                                      ],
                                    }),
                                    (0, s.BX)("div", {
                                      className: q()["prepare__step-buttons"],
                                      children: [
                                        (0, s.tZ)("a", {
                                          href: r.E.buyRbc,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className:
                                            q()["prepare__step-button"],
                                          children: (0, s.tZ)(i.xv, {
                                            id: "staking.page.prepare.step1.button",
                                            children: "BUY QBC",
                                          }),
                                        }),
                                        (0, s.tZ)("a", {
                                          href: r.E.bridgeRbc,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className:
                                            q()["prepare__step-button"],
                                          children: "Bridge QBC to Arbitrum",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children: "Stake your tokens",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_3"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children: "Stake your tokens",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "The Staking contract",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " will be deployed on the ARBITRUM Chain.",
                                        (0, s.tZ)("br", {}),
                                        " Users can deposit any amount of QBC at any time -",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " minimum 1 QBC.",
                                        (0, s.tZ)("br", {}),
                                        " Users can\u2019t withdraw deposited QBC until the chosen period ends.",
                                      ],
                                    }),
                                    (0, s.tZ)("a", {
                                      href: r.E.earn,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: q()["prepare__step-button"],
                                      style:
                                        "max-width: 180px; margin-top: 40px;",
                                      children: (0, s.tZ)("span", {
                                        children: "Stake!",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children: "Get your personal NFT",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_3"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children: "Get your personal NFT",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "After depositing QBC, users will receive an NFT which contains information about the period and the amount of tokens deposited.",
                                        (0, s.tZ)("br", {}),
                                        " An NFT can be transferred to any user/contract.",
                                      ],
                                    }),
                                    (0, s.tZ)("a", {
                                      href: r.E.stakingFullRules,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: q()["prepare__step-button"],
                                      style:
                                        "max-width: 281px; margin-top: 40px;",
                                      children: (0, s.tZ)("span", {
                                        children: "Read the Full Rules",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children: "Follow the News",
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children: "Follow the News",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "Our staking pools",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " will be uncapped!",
                                        (0, s.tZ)("br", {}),
                                        "For the latest updates,",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " subscribe to Twitter, Telegram, and Medium,",
                                        (0, s.tZ)("br", {}),
                                        "in order to become the first",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " to receive the latest news",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " about staking!",
                                      ],
                                    }),
                                    (0, s.BX)("div", {
                                      className: q()["prepare__step-links"],
                                      children: [
                                        (0, s.BX)("a", {
                                          className: q()["prepare__step-link"],
                                          href: "https://t.me",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: [
                                            (0, s.tZ)("img", {
                                              src: "/icons/staking/telegram.svg",
                                              alt: "Telegram",
                                            }),
                                            (0, s.tZ)("span", {
                                              children: "Telegram",
                                            }),
                                            (0, s.tZ)("img", {
                                              className:
                                                q()["prepare__arrow-link"],
                                              src: "/icons/arrow-right-green.svg",
                                              alt: "Arrow",
                                            }),
                                          ],
                                        }),
                                        // (0, s.BX)("a", {
                                        //   className: q()["prepare__step-link"],
                                        //   href: "https://cryptorubic.medium.com/",
                                        //   target: "_blank",
                                        //   rel: "noreferrer",
                                        //   children: [
                                        //     (0, s.tZ)("img", {
                                        //       src: "/icons/staking/medium.svg",
                                        //       alt: "Medium",
                                        //     }),
                                        //     (0, s.tZ)("span", {
                                        //       children: "Medium",
                                        //     }),
                                        //     (0, s.tZ)("img", {
                                        //       className:
                                        //         q()["prepare__arrow-link"],
                                        //       src: "/icons/arrow-right-green.svg",
                                        //       alt: "Arrow",
                                        //     }),
                                        //   ],
                                        // }),
                                        (0, s.BX)("a", {
                                          className: q()["prepare__step-link"],
                                          href: "https://x.com",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: [
                                            (0, s.tZ)("img", {
                                              src: "/icons/staking/twitter.svg",
                                              alt: "Twitter",
                                            }),
                                            (0, s.tZ)("span", {
                                              children: "Twitter",
                                            }),
                                            (0, s.tZ)("img", {
                                              className:
                                                q()["prepare__arrow-link"],
                                              src: "/icons/arrow-right-green.svg",
                                              alt: "Arrow",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : (0, s.BX)("div", {
                        className: q().prepare__stepper,
                        children: [
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children:
                                        "BRIDGE QBC Tokens from ethereum to arbitrum",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_0"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children:
                                        "BRIDGE QBC Tokens from ethereum to arbitrum",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "If you don\u2019t have QBC, you can easily obtain some via the Qubic AI app at the link below!",
                                        (0, s.tZ)("br", {}),
                                        " QBC tokens earned in the SwapToEarn program can also be staked.",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__desktop-br"],
                                        }),
                                        " To do so, you need to claim them first - it\u2019s now possible on Arbitrum!",
                                      ],
                                    }),
                                    (0, s.BX)("div", {
                                      className: q()["prepare__step-buttons"],
                                      children: [
                                        (0, s.tZ)("a", {
                                          href: r.E.buyRbc,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className:
                                            q()["prepare__step-button"],
                                          children: (0, s.tZ)(i.xv, {
                                            id: "staking.page.prepare.step1.button",
                                            children: "BUY QBC",
                                          }),
                                        }),
                                        (0, s.tZ)("a", {
                                          href: r.E.bridgeRbc,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className:
                                            q()["prepare__step-button"],
                                          children: "Bridge QBC to Arbitrum",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children: "Follow the News",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_1"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children: "Follow the News",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "Our staking pools",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " will be uncapped!",
                                        (0, s.tZ)("br", {}),
                                        "For the latest updates,",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " subscribe to Twitter, Telegram, and Medium,",
                                        (0, s.tZ)("br", {}),
                                        "in order to become the first",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " to receive the latest news",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " about staking!",
                                      ],
                                    }),
                                    (0, s.BX)("div", {
                                      className: q()["prepare__step-links"],
                                      children: [
                                        (0, s.BX)("a", {
                                          className: q()["prepare__step-link"],
                                          href: "https://t.me",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: [
                                            (0, s.tZ)("img", {
                                              src: "/icons/staking/telegram.svg",
                                              alt: "Telegram",
                                            }),
                                            (0, s.tZ)("span", {
                                              children: "Telegram",
                                            }),
                                            (0, s.tZ)("img", {
                                              className:
                                                q()["prepare__arrow-link"],
                                              src: "/icons/arrow-right-green.svg",
                                              alt: "Arrow",
                                            }),
                                          ],
                                        }),
                                        // (0, s.BX)("a", {
                                        //   className: q()["prepare__step-link"],
                                        //   href: "https://cryptorubic.medium.com/",
                                        //   target: "_blank",
                                        //   rel: "noreferrer",
                                        //   children: [
                                        //     (0, s.tZ)("img", {
                                        //       src: "/icons/staking/medium.svg",
                                        //       alt: "Medium",
                                        //     }),
                                        //     (0, s.tZ)("span", {
                                        //       children: "Medium",
                                        //     }),
                                        //     (0, s.tZ)("img", {
                                        //       className:
                                        //         q()["prepare__arrow-link"],
                                        //       src: "/icons/arrow-right-green.svg",
                                        //       alt: "Arrow",
                                        //     }),
                                        //   ],
                                        // }),
                                        (0, s.BX)("a", {
                                          className: q()["prepare__step-link"],
                                          href: "https://x.com",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: [
                                            (0, s.tZ)("img", {
                                              src: "/icons/staking/twitter.svg",
                                              alt: "Twitter",
                                            }),
                                            (0, s.tZ)("span", {
                                              children: "Twitter",
                                            }),
                                            (0, s.tZ)("img", {
                                              className:
                                                q()["prepare__arrow-link"],
                                              src: "/icons/arrow-right-green.svg",
                                              alt: "Arrow",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children:
                                        "Stake your tokens on JUNE 14TH",
                                    }),
                                    (0, s.tZ)("div", {
                                      className: p()(
                                        q()["prepare__step-line"],
                                        q()["prepare__step-line_3"]
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children:
                                        "Stake your tokens on JUNE 14TH",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "The Staking contract",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " will be deployed on the ARBITRUM Chain.",
                                        (0, s.tZ)("br", {}),
                                        " Users can deposit any amount of QBC at any time -",
                                        (0, s.tZ)("br", {
                                          className: q()["prepare__mobile-br"],
                                        }),
                                        " minimum 1 QBC.",
                                        (0, s.tZ)("br", {}),
                                        " Users can\u2019t withdraw deposited QBC until the chosen period ends.",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.tZ)("div", {
                            className: q().prepare__step,
                            children: (0, s.BX)("div", {
                              className: q()["prepare__step-content"],
                              children: [
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-side"],
                                  children: [
                                    (0, s.tZ)("div", {
                                      className: q()["prepare__step-num"],
                                    }),
                                    (0, s.tZ)("h3", {
                                      className: p()([
                                        q()["prepare__step-title"],
                                        q()["prepare__step-title_mobile"],
                                      ]),
                                      children: "Get your personal NFT",
                                    }),
                                  ],
                                }),
                                (0, s.BX)("div", {
                                  className: q()["prepare__step-text-content"],
                                  children: [
                                    (0, s.tZ)("h3", {
                                      className: q()["prepare__step-title"],
                                      children: "Get your personal NFT",
                                    }),
                                    (0, s.BX)("p", {
                                      className: q()["prepare__step-text"],
                                      children: [
                                        "After depositing QBC, users will receive an NFT which contains information about the period and the amount of tokens deposited.",
                                        (0, s.tZ)("br", {}),
                                        " An NFT can be transferred to any user/contract.",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  t
                    ? (0, s.tZ)("a", {
                        href: r.E.earn,
                        target: "_blank",
                        rel: "noreferrer",
                        className: q().prepare__button,
                        children: "Start Staking",
                      })
                    : (0, s.tZ)("a", {
                        href: "staking#mainScreen",
                        className: q().prepare__button,
                        children: "Start Staking",
                      }),
                ],
              }),
              (0, s.tZ)("img", {
                className: q()["prepare__hex-r-t"],
                src: "/images/staking/hexs/p-r-t.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: q()["prepare__hex-r-b"],
                src: "/images/staking/hexs/p-r-b.png",
                alt: "Background hex",
              }),
              (0, s.tZ)("img", {
                className: q()["prepare__hex-l"],
                src: "/images/staking/hexs/p-l.png",
                alt: "Background hex",
              }),
            ],
          });
        },
        L = {
          title: "Staking \u2013 Qubic AI",
          description:
            "We aggregate 90+ bridges and DEXs to move 15,000+ tokens across 60+ chains in one click, with cross-chain signals & oracles to come.",
          canonicalUrl: "https://rubic.exchange/staking",
        },
        M = function () {
          var e = L.title,
            t = L.keywords,
            _ = L.description,
            i = L.canonicalUrl;
          return (0, s.BX)(l.HY, {
            children: [
              (0, s.tZ)(a.Z, {
                title: e,
                keywords: t,
                description: _,
                canonicalUrl: i,
              }),
              (0, s.tZ)(o, {}),
              (0, s.tZ)(x, {}),
              (0, s.tZ)(X, {}),
              (0, s.tZ)(A, {}),
              (0, s.tZ)(j, {}),
            ],
          });
        };
    },
    1620: function (e) {
      e.exports = {
        feedback: "style_feedback__aGs_Z",
        select__control: "style_select__control__79Z1H",
        select__menu: "style_select__menu__S67uF",
        select__option: "style_select__option__xEsX_",
        select__placeholder: "style_select__placeholder__h9ADI",
        "select__single-value": "style_select__single-value__3pPHM",
        "widget-configuration-form": "style_widget-configuration-form__g3zxm",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__9_9As",
        "select__value-container": "style_select__value-container__VrjC2",
        "select__menu-list": "style_select__menu-list__uxyBs",
        "select__option--is-selected":
          "style_select__option--is-selected__6zrn3",
        "select__indicator-separator":
          "style_select__indicator-separator__Ge0wZ",
        "select-not-to-open": "style_select-not-to-open__pwrSk",
        select__indicator: "style_select__indicator__Kponx",
        modal__wrapper: "style_modal__wrapper__JpTfg",
        modal__body: "style_modal__body__GJdJU",
        modal__title: "style_modal__title__xLvUP",
        modal__close: "style_modal__close__L0C0r",
        modal__button: "style_modal__button__sGd7U",
        button: "style_button__b4GUp",
        button_glassy: "style_button_glassy__32AwY",
        button_header: "style_button_header__1cIY1",
        button_gradient: "style_button_gradient__fdFRN",
        "button-link": "style_button-link__sLowr",
        select: "style_select__ctEVl",
        "language-select__control": "style_language-select__control___iLcF",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__EGv5Q",
        "language-select__menu": "style_language-select__menu__QEOMY",
        "language-select__menu-list": "style_language-select__menu-list__eTu5z",
        "language-select__value-container":
          "style_language-select__value-container__Pihbb",
        "language-select__single-value":
          "style_language-select__single-value__wezCX",
        "language-select__indicator": "style_language-select__indicator__LWtob",
        "language-select__option": "style_language-select__option__1lMs2",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__OhBsk",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__f3zTe",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__5DDIi",
        "statistic-select__control": "style_statistic-select__control__kzehH",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__aWGh0",
        "statistic-select__indicator":
          "style_statistic-select__indicator__3aZf7",
        "statistic-select__single-value":
          "style_statistic-select__single-value__gfQVo",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__BiJef",
        "statistic-select__menu": "style_statistic-select__menu__d7lvr",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__7ouV1",
        "statistic-select__value-container":
          "style_statistic-select__value-container__SZBYr",
        "statistic-select__option": "style_statistic-select__option__aGxvC",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__zSAES",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__gHbGj",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__OX9gV",
        "select-periods": "style_select-periods__hwDBt",
        select_persia: "style_select_persia__55aph",
        "select-periods_persia": "style_select-periods_persia__62jCN",
        paginationContainer: "style_paginationContainer__4gCFA",
        pageLinkClassName: "style_pageLinkClassName__rCmZX",
        mobileActiveClassName: "style_mobileActiveClassName__LOFYn",
        activeClassName: "style_activeClassName__1QhDn",
        previousClassName: "style_previousClassName__rtTuj",
        nextClassName: "style_nextClassName___GglJ",
        app: "style_app__ltXTM",
        marquee: "style_marquee__t3bAK",
        "react-tooltip": "style_react-tooltip__qZIy0",
        carousel: "style_carousel__XTLbO",
        carousel__slide: "style_carousel__slide__qhqvg",
        container: "style_container__J8iEh",
        "flex-centered-container": "style_flex-centered-container__ciE8Z",
        circle__container: "style_circle__container__fyKQ0",
        title: "style_title__dE_nc",
        "title-h2": "style_title-h2__zhNGA",
        "title-h2__small": "style_title-h2__small__e0PQI",
        "title-h1": "style_title-h1__qGdEt",
        highlight: "style_highlight__F9kcq",
        bold: "style_bold__ERnZy",
        nowrap: "style_nowrap__qyWH0",
        "section-margin": "style_section-margin__j6hAV",
        "gradient-main": "style_gradient-main__BM6oi",
        "gradient-main_dark": "style_gradient-main_dark__EpR2z",
        "gradient-ecosystem": "style_gradient-ecosystem__7ybwD",
        "gradient-footer": "style_gradient-footer__a50r1",
        "gradient-footer_blue": "style_gradient-footer_blue__R_C55",
        gradient: "style_gradient___zjQM",
        "gradient-sdk": "style_gradient-sdk__aFNBg",
        "gradient-swap-form": "style_gradient-swap-form__PaVtD",
        "gradient-benefits-top": "style_gradient-benefits-top__6LQCa",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__ZZA3h",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__taqu_",
        "gradient-referral-widget": "style_gradient-referral-widget__7sgu9",
        "gradient-staking-prepare": "style_gradient-staking-prepare__b9t_4",
        circle: "style_circle__4B0Md",
        "circle__hex-r-b": "style_circle__hex-r-b__M14Vh",
        "circle__hex-r-t": "style_circle__hex-r-t__21_5O",
        "circle__hex-l-b": "style_circle__hex-l-b__tBZrg",
        "circle__hex-l-t": "style_circle__hex-l-t__qBkSK",
        circle__wrapper: "style_circle__wrapper__fqUSX",
        circle__item: "style_circle__item__B0QCD",
        circle__item_1: "style_circle__item_1__E3Dnr",
        circle__item_2: "style_circle__item_2__Qs8A1",
        circle__item_3: "style_circle__item_3__3FWB9",
        circle__item_4: "style_circle__item_4__5IhMk",
        circle__link: "style_circle__link__BXu0o",
        "circle__circle-img": "style_circle__circle-img__05ePj",
        circle__cubes: "style_circle__cubes__me4QC",
        "circle__circle-img_mobile": "style_circle__circle-img_mobile__7mWsh",
      };
    },
    6452: function (e) {
      e.exports = {
        feedback: "style_feedback__515qs",
        select__control: "style_select__control__WbXYk",
        select__menu: "style_select__menu__pJ3qF",
        select__option: "style_select__option__mNHuq",
        select__placeholder: "style_select__placeholder__n0ofc",
        "select__single-value": "style_select__single-value__LP64k",
        "widget-configuration-form": "style_widget-configuration-form__2EHaD",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__M7T0w",
        "select__value-container": "style_select__value-container__ajp2C",
        "select__menu-list": "style_select__menu-list__qGQK_",
        "select__option--is-selected":
          "style_select__option--is-selected__bbpcU",
        "select__indicator-separator":
          "style_select__indicator-separator__9Ecox",
        "select-not-to-open": "style_select-not-to-open__zBA9H",
        select__indicator: "style_select__indicator__7WkIU",
        modal__wrapper: "style_modal__wrapper__YwME9",
        modal__body: "style_modal__body__ltcjE",
        modal__title: "style_modal__title__M2Q4h",
        modal__close: "style_modal__close__HOPq_",
        modal__button: "style_modal__button__txje4",
        button: "style_button__CUdTQ",
        button_glassy: "style_button_glassy__3hDuJ",
        button_header: "style_button_header__ad3Zo",
        button_gradient: "style_button_gradient__83rku",
        "button-link": "style_button-link__DsWrg",
        select: "style_select__JWxnB",
        "language-select__control": "style_language-select__control__p1_co",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__Ro4Sx",
        "language-select__menu": "style_language-select__menu__FAQev",
        "language-select__menu-list": "style_language-select__menu-list__p9V2H",
        "language-select__value-container":
          "style_language-select__value-container__V68P5",
        "language-select__single-value":
          "style_language-select__single-value__HqhTT",
        "language-select__indicator": "style_language-select__indicator__TmUc8",
        "language-select__option": "style_language-select__option__VTYhb",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__dfnA9",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__Wcwbv",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__kMpgl",
        "statistic-select__control": "style_statistic-select__control__7fyUJ",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__p7MMj",
        "statistic-select__indicator":
          "style_statistic-select__indicator__0sjUT",
        "statistic-select__single-value":
          "style_statistic-select__single-value__zIHkx",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__Y0mGc",
        "statistic-select__menu": "style_statistic-select__menu__aMaYz",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__cQUsC",
        "statistic-select__value-container":
          "style_statistic-select__value-container__9LzUw",
        "statistic-select__option": "style_statistic-select__option__AoOdo",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__E3uGO",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__SVpBN",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__wVKND",
        "select-periods": "style_select-periods___AiCE",
        select_persia: "style_select_persia__WeyoX",
        "select-periods_persia": "style_select-periods_persia__t2Dln",
        paginationContainer: "style_paginationContainer__sAzv8",
        pageLinkClassName: "style_pageLinkClassName__hTork",
        mobileActiveClassName: "style_mobileActiveClassName__AmBf1",
        activeClassName: "style_activeClassName__GPTUG",
        previousClassName: "style_previousClassName__PXdRy",
        nextClassName: "style_nextClassName__uBv_W",
        app: "style_app__B1sQ8",
        marquee: "style_marquee__gcYO1",
        "react-tooltip": "style_react-tooltip__h_CBr",
        carousel: "style_carousel__3xAdN",
        carousel__slide: "style_carousel__slide__CMgyW",
        container: "style_container__mR1cU",
        "flex-centered-container": "style_flex-centered-container__kedgs",
        title: "style_title__RvBnc",
        "title-h2": "style_title-h2__hZP3Y",
        "title-h2__small": "style_title-h2__small__Pg_jV",
        "title-h1": "style_title-h1__d4ifO",
        highlight: "style_highlight__l8d7z",
        bold: "style_bold__nV_bk",
        nowrap: "style_nowrap__GA8Cm",
        "section-margin": "style_section-margin___VQ6x",
        "gradient-main": "style_gradient-main__RstmK",
        "gradient-main_dark": "style_gradient-main_dark__Xwke_",
        "gradient-ecosystem": "style_gradient-ecosystem__Ez3c2",
        "gradient-footer": "style_gradient-footer__fFoUt",
        "gradient-footer_blue": "style_gradient-footer_blue__HPPxV",
        gradient: "style_gradient__xrvhn",
        "gradient-sdk": "style_gradient-sdk__zyhNE",
        "gradient-swap-form": "style_gradient-swap-form__Z5MyH",
        "gradient-benefits-top": "style_gradient-benefits-top__01le7",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__fD3l_",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__bQcP_",
        "gradient-referral-widget": "style_gradient-referral-widget__eEYOM",
        "gradient-staking-prepare": "style_gradient-staking-prepare__vyJRH",
        card__container: "style_card__container__MwFNR",
        card__title: "style_card__title__wbMzp",
        card__title_mobile: "style_card__title_mobile__lFej7",
        card__text: "style_card__text__1wsl3",
        "card__text-link": "style_card__text-link__Q6p7D",
        card__background: "style_card__background__HMH7x",
        card__logo: "style_card__logo__qgg5j",
        "card__mobile-br": "style_card__mobile-br__0D9ES",
        card__title_2: "style_card__title_2___7F2n",
        card__title_mobile_2: "style_card__title_mobile_2__lZdbg",
      };
    },
    6106: function (e) {
      e.exports = {
        feedback: "style_feedback__FomDT",
        select__control: "style_select__control__tNZT8",
        select__menu: "style_select__menu__09zUV",
        select__option: "style_select__option___Jy2I",
        select__placeholder: "style_select__placeholder__lmiEX",
        "select__single-value": "style_select__single-value__83dr0",
        "widget-configuration-form": "style_widget-configuration-form__be0Ah",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__7bneu",
        "select__value-container": "style_select__value-container__OLWbT",
        "select__menu-list": "style_select__menu-list__iuEpk",
        "select__option--is-selected":
          "style_select__option--is-selected__XPZF3",
        "select__indicator-separator":
          "style_select__indicator-separator__wMn7v",
        "select-not-to-open": "style_select-not-to-open__N_D2Q",
        select__indicator: "style_select__indicator__YhDwI",
        modal__wrapper: "style_modal__wrapper__vd4jb",
        modal__body: "style_modal__body__0OeH3",
        modal__title: "style_modal__title__Diu4o",
        modal__close: "style_modal__close__wLgj1",
        modal__button: "style_modal__button__qMnKM",
        button: "style_button__gBx1m",
        features__button: "style_features__button__JbRwh",
        button_glassy: "style_button_glassy__mKW_f",
        button_header: "style_button_header__yJIy3",
        button_gradient: "style_button_gradient__x6Zv_",
        "button-link": "style_button-link__MNBUF",
        select: "style_select__2Thpm",
        "language-select__control": "style_language-select__control__w2To4",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__qPa41",
        "language-select__menu": "style_language-select__menu__s5IDj",
        "language-select__menu-list": "style_language-select__menu-list__w_zod",
        "language-select__value-container":
          "style_language-select__value-container__LAddD",
        "language-select__single-value":
          "style_language-select__single-value__NQmwK",
        "language-select__indicator": "style_language-select__indicator__RVife",
        "language-select__option": "style_language-select__option__JIU9C",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__8u_QR",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__nW87s",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__unYl4",
        "statistic-select__control": "style_statistic-select__control__NYbn8",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__KE5HF",
        "statistic-select__indicator":
          "style_statistic-select__indicator__SD4vM",
        "statistic-select__single-value":
          "style_statistic-select__single-value__8U34c",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__Bp_gA",
        "statistic-select__menu": "style_statistic-select__menu__F8acb",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__fnUrW",
        "statistic-select__value-container":
          "style_statistic-select__value-container__18Uug",
        "statistic-select__option": "style_statistic-select__option__HPDVb",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__Qv9Jm",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__9ew_M",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__P2NxF",
        "select-periods": "style_select-periods__7GMyt",
        select_persia: "style_select_persia__62_As",
        "select-periods_persia": "style_select-periods_persia__DXaJl",
        paginationContainer: "style_paginationContainer__lJz_g",
        pageLinkClassName: "style_pageLinkClassName__Cdj17",
        mobileActiveClassName: "style_mobileActiveClassName__K7q__",
        activeClassName: "style_activeClassName__F2T8C",
        previousClassName: "style_previousClassName__1y1AF",
        nextClassName: "style_nextClassName__Iwhix",
        app: "style_app__8_meP",
        marquee: "style_marquee__ppqM4",
        "react-tooltip": "style_react-tooltip__je3Xf",
        carousel: "style_carousel__plEAS",
        carousel__slide: "style_carousel__slide__3v7Vk",
        container: "style_container__b38wP",
        "flex-centered-container": "style_flex-centered-container__ZCgDl",
        features__container: "style_features__container__MG_Mg",
        title: "style_title__RwOjl",
        "title-h2": "style_title-h2__vWKak",
        features__title: "style_features__title__sXh54",
        "title-h2__small": "style_title-h2__small__n_xiC",
        "title-h1": "style_title-h1__HAbxR",
        highlight: "style_highlight__hl1NS",
        bold: "style_bold__l_W1s",
        nowrap: "style_nowrap__6G8xc",
        "section-margin": "style_section-margin__70cv_",
        "gradient-main": "style_gradient-main__4P2T8",
        "gradient-main_dark": "style_gradient-main_dark__j5mzr",
        "gradient-ecosystem": "style_gradient-ecosystem__3PBet",
        "gradient-footer": "style_gradient-footer__cqPV4",
        "gradient-footer_blue": "style_gradient-footer_blue__CCAqc",
        gradient: "style_gradient__42hL_",
        "gradient-sdk": "style_gradient-sdk__233c0",
        "gradient-swap-form": "style_gradient-swap-form__9QEvx",
        "gradient-benefits-top": "style_gradient-benefits-top__Rs0Wk",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__qP4An",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__BBNnb",
        "gradient-referral-widget": "style_gradient-referral-widget__xDzoT",
        "gradient-staking-prepare": "style_gradient-staking-prepare__gJhUT",
        features: "style_features__7SAjA",
        "features__hex-r-b": "style_features__hex-r-b__eKEJa",
        "features__hex-r-t": "style_features__hex-r-t__WGbrG",
        "features__hex-l": "style_features__hex-l__pBnRo",
        features__title_br: "style_features__title_br__qVaBa",
        features__cards: "style_features__cards__qOqub",
      };
    },
    80132: function (e) {
      e.exports = {
        feedback: "style_feedback__xcPgy",
        select__control: "style_select__control___3Ldz",
        select__menu: "style_select__menu__FSooY",
        select__option: "style_select__option__H_24O",
        select__placeholder: "style_select__placeholder__DwPvl",
        "select__single-value": "style_select__single-value__su9Ig",
        "widget-configuration-form": "style_widget-configuration-form__L5aaf",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__K4T4L",
        "select__value-container": "style_select__value-container__m0NX_",
        "select__menu-list": "style_select__menu-list__Jq_hW",
        "select__option--is-selected":
          "style_select__option--is-selected__Aqus_",
        "select__indicator-separator":
          "style_select__indicator-separator__Xp3dU",
        "select-not-to-open": "style_select-not-to-open__zRqqg",
        select__indicator: "style_select__indicator__uAJ62",
        modal__wrapper: "style_modal__wrapper__EE1Ik",
        modal__body: "style_modal__body__F5ElZ",
        modal__title: "style_modal__title__aYKyN",
        modal__close: "style_modal__close__iCw0Y",
        modal__button: "style_modal__button__f9OJH",
        button: "style_button__GZmI9",
        screen__button: "style_screen__button__3MQVo",
        button_glassy: "style_button_glassy__knaiP",
        button_header: "style_button_header__WoCH9",
        button_gradient: "style_button_gradient__djf2l",
        "button-link": "style_button-link__kZ1Rz",
        select: "style_select__ncxNn",
        "language-select__control": "style_language-select__control__rKcJV",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__RNRxO",
        "language-select__menu": "style_language-select__menu__8nDA5",
        "language-select__menu-list": "style_language-select__menu-list__GdhbI",
        "language-select__value-container":
          "style_language-select__value-container__DMY5K",
        "language-select__single-value":
          "style_language-select__single-value__JGBNC",
        "language-select__indicator": "style_language-select__indicator__rBYMt",
        "language-select__option": "style_language-select__option__fQHLq",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__X55s9",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__Xke9J",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__XzOLi",
        "statistic-select__control": "style_statistic-select__control__vvHTP",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__an6ZZ",
        "statistic-select__indicator":
          "style_statistic-select__indicator__bsRO9",
        "statistic-select__single-value":
          "style_statistic-select__single-value___fRti",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__JelIF",
        "statistic-select__menu": "style_statistic-select__menu__UYgaG",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__qZh90",
        "statistic-select__value-container":
          "style_statistic-select__value-container__jKaGZ",
        "statistic-select__option": "style_statistic-select__option__U_qG_",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__CzPZA",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__4I7T1",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__x59d6",
        "select-periods": "style_select-periods__ZOwKw",
        select_persia: "style_select_persia__BhV5I",
        "select-periods_persia": "style_select-periods_persia__aHEkg",
        paginationContainer: "style_paginationContainer__8YWTJ",
        pageLinkClassName: "style_pageLinkClassName__j93mh",
        mobileActiveClassName: "style_mobileActiveClassName__5VpHs",
        activeClassName: "style_activeClassName__c2pwX",
        previousClassName: "style_previousClassName__06RPf",
        nextClassName: "style_nextClassName__IDx8S",
        app: "style_app__5NLKi",
        marquee: "style_marquee__bACaE",
        "react-tooltip": "style_react-tooltip__THye7",
        carousel: "style_carousel__JPNLm",
        carousel__slide: "style_carousel__slide__C084Q",
        container: "style_container__FQJ9a",
        "flex-centered-container": "style_flex-centered-container__ntW0P",
        screen__container: "style_screen__container__z8b_S",
        title: "style_title__Pcm8k",
        screen__title: "style_screen__title__PkYw6",
        "title-h2": "style_title-h2__wphDm",
        "title-h2__small": "style_title-h2__small__UaD2b",
        "title-h1": "style_title-h1__ucow2",
        highlight: "style_highlight__b_nZp",
        bold: "style_bold__QDSF3",
        nowrap: "style_nowrap__XmTA7",
        "section-margin": "style_section-margin__4XeRG",
        "gradient-main": "style_gradient-main__ZNKI0",
        "gradient-main_dark": "style_gradient-main_dark__ywW8F",
        "gradient-ecosystem": "style_gradient-ecosystem__eKL4P",
        "gradient-footer": "style_gradient-footer__rImBe",
        "gradient-footer_blue": "style_gradient-footer_blue__GTRVX",
        gradient: "style_gradient__TCze4",
        "gradient-sdk": "style_gradient-sdk__LEHa0",
        "gradient-swap-form": "style_gradient-swap-form__DYef2",
        "gradient-benefits-top": "style_gradient-benefits-top__S1q7M",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__TNf__",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__pg3OC",
        "gradient-referral-widget": "style_gradient-referral-widget__2v4YA",
        "gradient-staking-prepare": "style_gradient-staking-prepare__LZio6",
        screen: "style_screen__UEf91",
        screen__text: "style_screen__text__n5F2X",
        screen__subtitle: "style_screen__subtitle__p_Ptv",
        screen__buttons: "style_screen__buttons__Ovqoj",
        "screen__gradient-1": "style_screen__gradient-1__e5qVr",
        "screen__gradient-2": "style_screen__gradient-2__7MN4B",
        "screen__gradient-3": "style_screen__gradient-3__TKrxL",
        "screen__background-cube": "style_screen__background-cube__trHtZ",
        "screen__background-hex": "style_screen__background-hex__6ff2Y",
      };
    },
    68665: function (e) {
      e.exports = {
        feedback: "style_feedback__t_X_2",
        select__control: "style_select__control__BTvfi",
        select__menu: "style_select__menu__UjLoY",
        select__option: "style_select__option__CWQTd",
        select__placeholder: "style_select__placeholder__JwMnd",
        "select__single-value": "style_select__single-value__nd6eZ",
        "widget-configuration-form": "style_widget-configuration-form__LE2S9",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__krM0G",
        "select__value-container": "style_select__value-container__i8Xky",
        "select__menu-list": "style_select__menu-list__BZkHO",
        "select__option--is-selected":
          "style_select__option--is-selected__4vvg_",
        "select__indicator-separator":
          "style_select__indicator-separator__xHI66",
        "select-not-to-open": "style_select-not-to-open__pkmjD",
        select__indicator: "style_select__indicator__MymOk",
        modal__wrapper: "style_modal__wrapper__LGexB",
        modal__body: "style_modal__body__gR31R",
        modal__title: "style_modal__title__60bAo",
        modal__close: "style_modal__close__0tQo4",
        modal__button: "style_modal__button__7duzs",
        button: "style_button__QZTwq",
        prepare__button: "style_prepare__button__2yrjb",
        prepare__button_mobile: "style_prepare__button_mobile__0HbpD",
        "prepare__step-button": "style_prepare__step-button__XcKy7",
        button_glassy: "style_button_glassy__qkrW3",
        button_header: "style_button_header__V7xze",
        button_gradient: "style_button_gradient____uNP",
        "button-link": "style_button-link__cIIQf",
        select: "style_select__KwAkg",
        "language-select__control": "style_language-select__control__ny_5o",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__Wt6PF",
        "language-select__menu": "style_language-select__menu___kp1S",
        "language-select__menu-list": "style_language-select__menu-list__dncsj",
        "language-select__value-container":
          "style_language-select__value-container__jKD9f",
        "language-select__single-value":
          "style_language-select__single-value__nlFVC",
        "language-select__indicator": "style_language-select__indicator__TRvK_",
        "language-select__option": "style_language-select__option__5KhH_",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__8LaIA",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__G7R8H",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__ez_hZ",
        "statistic-select__control": "style_statistic-select__control__jQzMw",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__m_QEB",
        "statistic-select__indicator":
          "style_statistic-select__indicator__ArdvF",
        "statistic-select__single-value":
          "style_statistic-select__single-value__86DLU",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused___v7oG",
        "statistic-select__menu": "style_statistic-select__menu__On3Nf",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__E4s1O",
        "statistic-select__value-container":
          "style_statistic-select__value-container__TguXb",
        "statistic-select__option": "style_statistic-select__option__Tlqk6",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__5pJlV",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__eJEUI",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__KrK4s",
        "select-periods": "style_select-periods__6Oh2f",
        select_persia: "style_select_persia__UnKDe",
        "select-periods_persia": "style_select-periods_persia__nKWF0",
        paginationContainer: "style_paginationContainer__KS0Y4",
        pageLinkClassName: "style_pageLinkClassName__OJ8FT",
        mobileActiveClassName: "style_mobileActiveClassName__ojYBt",
        activeClassName: "style_activeClassName__iLQsM",
        previousClassName: "style_previousClassName__kyGUN",
        nextClassName: "style_nextClassName___21vZ",
        app: "style_app__wRxAr",
        marquee: "style_marquee__QdunS",
        "react-tooltip": "style_react-tooltip__zPHjw",
        carousel: "style_carousel__9Hjxf",
        carousel__slide: "style_carousel__slide___Epbr",
        container: "style_container__weks4",
        prepare__container: "style_prepare__container__PUjN_",
        "flex-centered-container": "style_flex-centered-container__ey3dF",
        title: "style_title__a6oSP",
        "title-h2": "style_title-h2__RVhgo",
        prepare__title: "style_prepare__title__XzuOj",
        "title-h2__small": "style_title-h2__small__g6NWC",
        "title-h1": "style_title-h1__GZYMG",
        highlight: "style_highlight__1DX4c",
        bold: "style_bold__AkCex",
        nowrap: "style_nowrap__s6m6U",
        "section-margin": "style_section-margin__e65E2",
        "gradient-main": "style_gradient-main__L70L8",
        "gradient-main_dark": "style_gradient-main_dark__DKWLl",
        "gradient-ecosystem": "style_gradient-ecosystem__fvfVM",
        "gradient-footer": "style_gradient-footer__90qwj",
        "gradient-footer_blue": "style_gradient-footer_blue__QuzRH",
        gradient: "style_gradient__w1ZrW",
        "gradient-sdk": "style_gradient-sdk__hOamh",
        "gradient-swap-form": "style_gradient-swap-form__Htyhz",
        "gradient-benefits-top": "style_gradient-benefits-top__GK0hu",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__6oLlC",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__zmvZS",
        "gradient-referral-widget": "style_gradient-referral-widget__wh7Hh",
        "gradient-staking-prepare": "style_gradient-staking-prepare__YiNBM",
        prepare: "style_prepare__6Ef4K",
        prepare__timer: "style_prepare__timer__R2ygt",
        "prepare__hex-r-t": "style_prepare__hex-r-t__ZY9yj",
        "prepare__hex-r-b": "style_prepare__hex-r-b__UdW77",
        "prepare__hex-l": "style_prepare__hex-l__NYQT5",
        prepare__stepper: "style_prepare__stepper__AUczI",
        prepare__step: "style_prepare__step__AfsPh",
        "prepare__step-num": "style_prepare__step-num___Xj_t",
        "prepare__step-content": "style_prepare__step-content__o2qup",
        "prepare__step-side": "style_prepare__step-side__zkvhU",
        "prepare__step-line": "style_prepare__step-line__rNQqA",
        "prepare__step-title": "style_prepare__step-title__AyobG",
        "prepare__step-title_mobile": "style_prepare__step-title_mobile__BZhCr",
        "prepare__step-text": "style_prepare__step-text__eMHvO",
        "prepare__step-text-content": "style_prepare__step-text-content__N_6NC",
        "prepare__step-links": "style_prepare__step-links__Wylai",
        "prepare__step-link": "style_prepare__step-link__7yyZM",
        "prepare__step-buttons": "style_prepare__step-buttons__Zi3zS",
        "prepare__arrow-link": "style_prepare__arrow-link__ALXMC",
        "prepare__mobile-br": "style_prepare__mobile-br__k_Q19",
        "prepare__desktop-br": "style_prepare__desktop-br__P0TUt",
      };
    },
    34393: function (e) {
      e.exports = {
        feedback: "style_feedback__vaQvO",
        select__control: "style_select__control__ao5tc",
        select__menu: "style_select__menu__CZTp6",
        select__option: "style_select__option__BwcZL",
        select__placeholder: "style_select__placeholder__eRIBI",
        "select__single-value": "style_select__single-value__lSqFE",
        "widget-configuration-form": "style_widget-configuration-form__lgwjl",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open___gpZA",
        "select__value-container": "style_select__value-container__JzggZ",
        "select__menu-list": "style_select__menu-list__GhGz4",
        "select__option--is-selected":
          "style_select__option--is-selected__Y1WDp",
        "select__indicator-separator":
          "style_select__indicator-separator__bONmO",
        "select-not-to-open": "style_select-not-to-open__GQ9MD",
        select__indicator: "style_select__indicator__3WqcQ",
        modal__wrapper: "style_modal__wrapper__t3Zh6",
        modal__body: "style_modal__body__yOEhl",
        modal__title: "style_modal__title__hZHdA",
        modal__close: "style_modal__close__qkXV1",
        modal__button: "style_modal__button__2fl76",
        button: "style_button__AcMlr",
        button_glassy: "style_button_glassy___xGGe",
        button_header: "style_button_header__KqpJp",
        button_gradient: "style_button_gradient__CGrj7",
        "button-link": "style_button-link__nEYzs",
        select: "style_select___CmKy",
        "language-select__control": "style_language-select__control__js1a7",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__Za84v",
        "language-select__menu": "style_language-select__menu__88OK1",
        "language-select__menu-list": "style_language-select__menu-list__z8Is_",
        "language-select__value-container":
          "style_language-select__value-container__H43r8",
        "language-select__single-value":
          "style_language-select__single-value__iodKq",
        "language-select__indicator": "style_language-select__indicator__cDyII",
        "language-select__option": "style_language-select__option__tfZXO",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__xWj_S",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__V0DCH",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__up76n",
        "statistic-select__control": "style_statistic-select__control__t8Xbs",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__i1_Nh",
        "statistic-select__indicator":
          "style_statistic-select__indicator__jK6st",
        "statistic-select__single-value":
          "style_statistic-select__single-value__GJueB",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__caOkZ",
        "statistic-select__menu": "style_statistic-select__menu__lRmU_",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__xEORs",
        "statistic-select__value-container":
          "style_statistic-select__value-container__vGqtw",
        "statistic-select__option": "style_statistic-select__option__1_IGZ",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__t3Ijt",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__0sBpk",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__wCYK3",
        "select-periods": "style_select-periods__4oebl",
        select_persia: "style_select_persia__yvCDJ",
        "select-periods_persia": "style_select-periods_persia__3fCPc",
        paginationContainer: "style_paginationContainer___rWjP",
        pageLinkClassName: "style_pageLinkClassName__ZM73G",
        mobileActiveClassName: "style_mobileActiveClassName__tWEPv",
        activeClassName: "style_activeClassName__AgUnK",
        previousClassName: "style_previousClassName__9r5Fu",
        nextClassName: "style_nextClassName__vdGsI",
        app: "style_app__LMVxH",
        marquee: "style_marquee__aBLJD",
        "react-tooltip": "style_react-tooltip__C0aCS",
        carousel: "style_carousel__7UdG9",
        carousel__slide: "style_carousel__slide__8Nkvx",
        container: "style_container__HCFSJ",
        projected__container: "style_projected__container__LM3Zn",
        "flex-centered-container": "style_flex-centered-container___t49Q",
        title: "style_title__yKjBM",
        "title-h2": "style_title-h2__V_I3a",
        projected__title: "style_projected__title___MiYh",
        "title-h2__small": "style_title-h2__small__325Up",
        "title-h1": "style_title-h1__4VJ1O",
        highlight: "style_highlight__s_1zJ",
        bold: "style_bold__UwER0",
        nowrap: "style_nowrap__jrEDZ",
        "section-margin": "style_section-margin__VRCyv",
        "gradient-main": "style_gradient-main__mtgif",
        "gradient-main_dark": "style_gradient-main_dark___EFO2",
        "gradient-ecosystem": "style_gradient-ecosystem__mmWvZ",
        "gradient-footer": "style_gradient-footer__O3mkc",
        "gradient-footer_blue": "style_gradient-footer_blue__zTuJz",
        gradient: "style_gradient__qPAuy",
        "gradient-sdk": "style_gradient-sdk__m_IO7",
        "gradient-swap-form": "style_gradient-swap-form__mUBOb",
        "gradient-benefits-top": "style_gradient-benefits-top__V8j0o",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__bEL7z",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__07Bqx",
        "gradient-referral-widget": "style_gradient-referral-widget__hul4O",
        "gradient-staking-prepare": "style_gradient-staking-prepare__qAH_o",
        projected: "style_projected__cO31A",
        projected__gradient_top: "style_projected__gradient_top__KKCgA",
        projected__gradient_bottom: "style_projected__gradient_bottom__aRGZT",
        projected__img_mob: "style_projected__img_mob__XoDjB",
        projected__img_desk: "style_projected__img_desk__pawZn",
        projected__wrapper: "style_projected__wrapper__C2cpe",
      };
    },
    79834: function (e) {
      e.exports = {
        feedback: "style_feedback__YuaV0",
        select__control: "style_select__control__uwzpl",
        select__menu: "style_select__menu__hXS2T",
        select__option: "style_select__option__aAef1",
        select__placeholder: "style_select__placeholder__X3Las",
        "select__single-value": "style_select__single-value__3wPpo",
        "widget-configuration-form": "style_widget-configuration-form__bTO_q",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__BAgO1",
        "select__value-container": "style_select__value-container__XWEZy",
        "select__menu-list": "style_select__menu-list__t_Jap",
        "select__option--is-selected":
          "style_select__option--is-selected__QKWOr",
        "select__indicator-separator":
          "style_select__indicator-separator__miWMP",
        "select-not-to-open": "style_select-not-to-open__a4ms8",
        select__indicator: "style_select__indicator__jgbcl",
        modal__wrapper: "style_modal__wrapper__L3RDY",
        modal__body: "style_modal__body__zL5RK",
        modal__title: "style_modal__title__AO0uT",
        modal__close: "style_modal__close__DdvHI",
        modal__button: "style_modal__button__JygPS",
        button: "style_button__OKqH6",
        button_glassy: "style_button_glassy__VMeSX",
        button_header: "style_button_header__Q14Mo",
        button_gradient: "style_button_gradient__1Qpcp",
        "button-link": "style_button-link__VVcXK",
        select: "style_select__YMa0i",
        "language-select__control": "style_language-select__control__rvVCf",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__ynwhX",
        "language-select__menu": "style_language-select__menu__6H43c",
        "language-select__menu-list": "style_language-select__menu-list__bnLD5",
        "language-select__value-container":
          "style_language-select__value-container__eRKIM",
        "language-select__single-value":
          "style_language-select__single-value___tSR3",
        "language-select__indicator": "style_language-select__indicator__QWerk",
        "language-select__option": "style_language-select__option__aBQxX",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__jAXEb",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator___Avd2",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__EqIbB",
        "statistic-select__control": "style_statistic-select__control__o7xVK",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__kQu5k",
        "statistic-select__indicator":
          "style_statistic-select__indicator__6iizU",
        "statistic-select__single-value":
          "style_statistic-select__single-value__upUEX",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__9L24W",
        "statistic-select__menu": "style_statistic-select__menu__HIhDm",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__vdEjr",
        "statistic-select__value-container":
          "style_statistic-select__value-container__rSOzY",
        "statistic-select__option": "style_statistic-select__option__8Y7aQ",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__k89g8",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__C_PdS",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__DHSpF",
        "select-periods": "style_select-periods__pHa3o",
        select_persia: "style_select_persia__pgXNf",
        "select-periods_persia": "style_select-periods_persia__MnUGE",
        paginationContainer: "style_paginationContainer__JzIaZ",
        pageLinkClassName: "style_pageLinkClassName__sEY20",
        mobileActiveClassName: "style_mobileActiveClassName__Yb43F",
        activeClassName: "style_activeClassName__j1ghi",
        previousClassName: "style_previousClassName__UqxHg",
        nextClassName: "style_nextClassName__eGNCT",
        app: "style_app__lmV1V",
        marquee: "style_marquee__Snj7m",
        "react-tooltip": "style_react-tooltip__psm_i",
        carousel: "style_carousel__El59T",
        carousel__slide: "style_carousel__slide__qp98N",
        container: "style_container__gGrf0",
        "flex-centered-container": "style_flex-centered-container__s8msR",
        title: "style_title__EE6o9",
        "title-h2": "style_title-h2__bY2LD",
        "title-h2__small": "style_title-h2__small__eH3aH",
        "title-h1": "style_title-h1__aICtq",
        highlight: "style_highlight__M4x7h",
        bold: "style_bold__vTmGr",
        nowrap: "style_nowrap__37cSB",
        "section-margin": "style_section-margin__pGa2g",
        "gradient-main": "style_gradient-main__HNlZY",
        "gradient-main_dark": "style_gradient-main_dark__V9WTC",
        "gradient-ecosystem": "style_gradient-ecosystem__suib4",
        "gradient-footer": "style_gradient-footer__0ntHc",
        "gradient-footer_blue": "style_gradient-footer_blue__hAYEc",
        gradient: "style_gradient__FwB_1",
        "gradient-sdk": "style_gradient-sdk__hfRu7",
        "gradient-swap-form": "style_gradient-swap-form__l_h48",
        "gradient-benefits-top": "style_gradient-benefits-top__Zvyuq",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__noGCJ",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__SLgd5",
        "gradient-referral-widget": "style_gradient-referral-widget__ZDo6_",
        "gradient-staking-prepare": "style_gradient-staking-prepare__ic_ay",
        timer: "style_timer__oROaq",
        timer__time: "style_timer__time__qaPq5",
        timer__time_ends: "style_timer__time_ends__CCmtd",
        timer__number: "style_timer__number__CBqHH",
        timer__label: "style_timer__label__DQGYv",
        timer_main: "style_timer_main__S20no",
      };
    },
    9008: function (e, t, _) {
      e.exports = _(83121);
    },
  },
  function (e) {
    e.O(0, [7096, 9774, 2888, 179], function () {
      return (t = 72846), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
