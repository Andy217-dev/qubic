(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6553],
  {
    79387: function (t, e, _) {
      "use strict";
      _.d(e, {
        c: function () {
          return a;
        },
      });
      var s = _(97997),
        n = _(23919),
        i = _.n(n),
        a = function (t) {
          var e = t.imgSrc,
            _ = t.href,
            n = t.alt,
            a = t.chainName;
          return (0, s.BX)("div", {
            className: i().network__wrapper,
            children: [
              (0, s.tZ)("a", {
                href: _,
                target: "_blank",
                rel: "noreferrer",
                children: (0, s.tZ)("img", {
                  className: i().network__icon,
                  src: e,
                  alt: null !== n && void 0 !== n ? n : "Bridged chain",
                }),
              }),
              (0, s.tZ)("span", { className: i().network__title, children: a }),
            ],
          });
        };
    },
    59751: function (t, e, _) {
      "use strict";
      var s = _(97997),
        n = _(18413),
        i = _(94184),
        a = _.n(i),
        l = _(47978),
        c = _.n(l);
      e.Z = function (t) {
        var e = t.title;
        return (0, s.tZ)("section", {
          className: c().grantsAndAudits,
          children: (0, s.BX)("div", {
            className: c().grantsAndAudits__container,
            children: [
              e &&
                (0, s.tZ)("h2", {
                  className: c()["grantsAndAudits__block-title"],
                  children: e,
                }),
              (0, s.BX)("div", {
                className: c().grantsAndAudits__content,
                children: [
                  (0, s.tZ)("div", {
                    className: c().grantsAndAudits__grants,
                    children: (0, s.tZ)("ul", {
                      className: a()([
                        c().grantsAndAudits__list,
                        c()["grantsAndAudits__list-grants"],
                      ]),
                      children: [
                        { name: "Polygon", iconName: "polygon" },
                        { name: "Harmony", iconName: "harmony" },
                        { name: "NEAR", iconName: "near" },
                        { name: "Celer", iconName: "celer" },
                        { name: "Symbiosis", iconName: "symbiosis" },
                        { name: "Telos", iconName: "telos" },
                        { name: "Kava", iconName: "kava" },
                        { name: "ICP", iconName: "icp", width: "100%" },
                        { name: "Bitgert", iconName: "bitgert" },
                        { name: "Arbitrum", iconName: "arbitrum" },
                        { name: "Manta", iconName: "manta" },
                        { name: "PulseChain", iconName: "pulse-chain" },
                      ].map(function (t, e) {
                        return (0,
                        s.BX)("li", { className: a()([c()["grantsAndAudits__list-item"], c()["grantsAndAudits__list-grants-item"]]), children: [(0, s.tZ)("img", { className: a()([c().grantsAndAudits__icon, c()["grantsAndAudits__icon-grants"]]), style: "width: ".concat(t.width), src: "Bitgert" === t.name ? "/icons/grants/".concat(t.iconName, ".png") : "/icons/grants/".concat(t.iconName, ".svg"), alt: "".concat(t.name, " Grant") }), (0, s.tZ)("span", { className: c().grantsAndAudits__name, children: t.name })] }, e);
                      }),
                    }),
                  }),
                  (0, s.BX)("div", {
                    className: c().grantsAndAudits__right,
                    children: [
                      (0, s.BX)("div", {
                        className: c()["grantsAndAudits__consensus-incubation"],
                        children: [
                          (0, s.BX)("a", {                            
                            target: "_blank",
                            rel: "noreferrer",
                            className: a()([
                              c()["grantsAndAudits__list-item"],
                              c()["grantsAndAudits__list-item-consensys"],
                            ]),
                            children: [
                              (0, s.BX)("span", {
                                className: c().grantsAndAudits__name,
                                children: [
                                  "Consensys ",
                                  (0, s.tZ)("br", {}),
                                  " Scale ",
                                  (0, s.tZ)("br", {}),
                                  " Program",
                                ],
                              }),
                              (0, s.tZ)("img", {
                                className: c().grantsAndAudits__icon,
                                src: "icons/audits/consensys.svg",
                                alt: "Consensys",
                              }),
                            ],
                          }),
                          (0, s.BX)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            className: a()([
                              c()["grantsAndAudits__list-item"],
                              c()["grantsAndAudits__list-item-incubation"],
                            ]),
                            children: [
                              (0, s.BX)("span", {
                                className: a()([
                                  c().grantsAndAudits__name,
                                  c()["grantsAndAudits__incubation-name"],
                                ]),
                                children: [
                                  "Web3 ",
                                  (0, s.tZ)("br", {}),
                                  " Incubation ",
                                  (0, s.tZ)("br", {}),
                                  " Program",
                                ],
                              }),
                              (0, s.tZ)("img", {
                                className: a()([
                                  c().grantsAndAudits__icon,
                                  c()["grantsAndAudits__incubation-icon"],
                                ]),
                                src: "icons/audits/sonynetwork.png",
                                alt: "SonyNetwork",
                              }),
                            ],
                          }),
                        ],
                      }),
                      // (0, s.BX)("a", {
                      //   href: "https://mighty-2.gitbook.io/qubic/legal-documentation/mixbytes-audit",
                      //   target: "_blank",
                      //   rel: "noreferrer",
                      //   className: a()([
                      //     c()["grantsAndAudits__list-item"],
                      //     c()["grantsAndAudits__list-audits-item"],
                      //     c()["grantsAndAudits__list-mixbytes"],
                      //   ]),
                      //   children: [
                      //     (0, s.tZ)("h2", {
                      //       className: c().grantsAndAudits__title,
                      //       children: (0, s.tZ)(n.xv, {
                      //         id: "audits.audits",
                      //         children: "Audits",
                      //       }),
                      //     }),
                      //     (0, s.BX)("div", {
                      //       style:
                      //         "display: flex; flex-direction: column; gap: 30px",
                      //       children: [
                      //         (0, s.tZ)("img", {
                      //           className: a()([
                      //             c().grantsAndAudits__icon,
                      //             c()["grantsAndAudits__icon-audits"],
                      //           ]),
                      //           src: "icons/audits/MixBytes-logo.svg",
                      //           alt: "MixBytes",
                      //         }),
                      //         (0, s.tZ)("span", {
                      //           className: a()([
                      //             c().grantsAndAudits__name,
                      //             c()["grantsAndAudits__name-audits"],
                      //           ]),
                      //           children: "Read MixBytes Report",
                      //         }),
                      //       ],
                      //     }),
                      //   ],
                      // }),
                    ],
                  }),
                ],
              }),
              (0, s.tZ)("img", {
                className: c()["grantsAndAudits__cube-big"],
                src: "/images/cubes/grantsAndAudits-cube-big.svg",
                alt: "Big background cube",
              }),
              (0, s.tZ)("img", {
                className: c()["grantsAndAudits__cube-medium"],
                src: "/images/cubes/grantsAndAudits-cube-medium.svg",
                alt: "Medium background cube",
              }),
              (0, s.tZ)("img", {
                className: c()["grantsAndAudits__cube-small"],
                src: "/images/cubes/grantsAndAudits-cube-small.svg",
                alt: "Small background cube",
              }),
            ],
          }),
        });
      };
    },
    23919: function (t) {
      t.exports = {
        feedback: "style_feedback__R7KPG",
        select__control: "style_select__control__lyI1C",
        select__menu: "style_select__menu__Q4Ssr",
        select__option: "style_select__option__KtZLN",
        select__placeholder: "style_select__placeholder__984R9",
        "select__single-value": "style_select__single-value__Ez8MM",
        "widget-configuration-form": "style_widget-configuration-form__kLj1l",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__LiuJQ",
        "select__value-container": "style_select__value-container__QaEj_",
        "select__menu-list": "style_select__menu-list__JNf5o",
        "select__option--is-selected":
          "style_select__option--is-selected__saPJZ",
        "select__indicator-separator":
          "style_select__indicator-separator__x_OHf",
        "select-not-to-open": "style_select-not-to-open__CBjpv",
        select__indicator: "style_select__indicator__LHUn6",
        modal__wrapper: "style_modal__wrapper__XaR_v",
        modal__body: "style_modal__body___1NGt",
        modal__title: "style_modal__title__EY_gJ",
        modal__close: "style_modal__close__ShXmE",
        modal__button: "style_modal__button__JEduk",
        button: "style_button__JDxby",
        button_glassy: "style_button_glassy__GUXxC",
        button_header: "style_button_header__6kKGl",
        button_gradient: "style_button_gradient__jhGiu",
        "button-link": "style_button-link__tCCbM",
        select: "style_select__z2ZMe",
        "language-select__control": "style_language-select__control__kSmrY",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__KjhMc",
        "language-select__menu": "style_language-select__menu__3Z8st",
        "language-select__menu-list": "style_language-select__menu-list__7aPQo",
        "language-select__value-container":
          "style_language-select__value-container__4ulfT",
        "language-select__single-value":
          "style_language-select__single-value__5E8Nl",
        "language-select__indicator": "style_language-select__indicator__htidT",
        "language-select__option": "style_language-select__option__oqAuq",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__7FCWN",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__uW9zp",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__8Pbk2",
        "statistic-select__control": "style_statistic-select__control__J9GSe",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__47t_z",
        "statistic-select__indicator":
          "style_statistic-select__indicator__yoW2G",
        "statistic-select__single-value":
          "style_statistic-select__single-value__irFOm",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__EuBDv",
        "statistic-select__menu": "style_statistic-select__menu__pJBpG",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__FO1X1",
        "statistic-select__value-container":
          "style_statistic-select__value-container__qP958",
        "statistic-select__option": "style_statistic-select__option__YI5zx",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__ng27I",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__ntTup",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__5WYKC",
        "select-periods": "style_select-periods__OFE_f",
        select_persia: "style_select_persia__tEdJr",
        "select-periods_persia": "style_select-periods_persia__MWP_X",
        paginationContainer: "style_paginationContainer__NsJ3M",
        pageLinkClassName: "style_pageLinkClassName__QLV1V",
        mobileActiveClassName: "style_mobileActiveClassName__yEkx_",
        activeClassName: "style_activeClassName__O2_1g",
        previousClassName: "style_previousClassName__Q4zD_",
        nextClassName: "style_nextClassName__D5Ds_",
        app: "style_app__sU1md",
        marquee: "style_marquee__9Z6BI",
        "react-tooltip": "style_react-tooltip__9zMYi",
        carousel: "style_carousel___6Jsu",
        carousel__slide: "style_carousel__slide__lY24B",
        container: "style_container__8sLWR",
        "flex-centered-container": "style_flex-centered-container__nMpIW",
        title: "style_title__6__YA",
        "title-h2": "style_title-h2__3bhH1",
        "title-h2__small": "style_title-h2__small__irrBA",
        "title-h1": "style_title-h1__hCmbP",
        highlight: "style_highlight__q9HO8",
        bold: "style_bold__aT3cf",
        nowrap: "style_nowrap__t3_sC",
        "section-margin": "style_section-margin__ylQ4Q",
        "gradient-main": "style_gradient-main__zH8Mt",
        "gradient-main_dark": "style_gradient-main_dark__U1zuv",
        "gradient-ecosystem": "style_gradient-ecosystem__v8oGd",
        "gradient-footer": "style_gradient-footer__udELq",
        "gradient-footer_blue": "style_gradient-footer_blue__HJ8Q7",
        gradient: "style_gradient__j_4qj",
        "gradient-sdk": "style_gradient-sdk__dx4C8",
        "gradient-swap-form": "style_gradient-swap-form__ZqiDc",
        "gradient-benefits-top": "style_gradient-benefits-top__KL_bX",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__0NHB9",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__5uzPM",
        "gradient-referral-widget": "style_gradient-referral-widget__lC246",
        "gradient-staking-prepare": "style_gradient-staking-prepare__2GDJI",
        network__wrapper: "style_network__wrapper__oK3eV",
        network__icon: "style_network__icon__pM_lV",
        network__title: "style_network__title__RXu6y",
      };
    },
    47978: function (t) {
      t.exports = {
        feedback: "style_feedback__jnyA4",
        select__control: "style_select__control___1fn0",
        select__menu: "style_select__menu__LQoGX",
        select__option: "style_select__option__92rHI",
        select__placeholder: "style_select__placeholder__sSHAy",
        "select__single-value": "style_select__single-value__3H1uq",
        "widget-configuration-form": "style_widget-configuration-form__gXxfF",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__iq_e_",
        "select__value-container": "style_select__value-container___blrr",
        "select__menu-list": "style_select__menu-list__8Tsgy",
        "select__option--is-selected":
          "style_select__option--is-selected__49yof",
        "select__indicator-separator":
          "style_select__indicator-separator__eBSS7",
        "select-not-to-open": "style_select-not-to-open__bJaLR",
        select__indicator: "style_select__indicator__fP1Rz",
        modal__wrapper: "style_modal__wrapper__rc9wt",
        modal__body: "style_modal__body__2YbCJ",
        modal__title: "style_modal__title__ksmEQ",
        modal__close: "style_modal__close__U6skl",
        modal__button: "style_modal__button__sBexw",
        button: "style_button__JDleJ",
        button_glassy: "style_button_glassy__U0kzl",
        button_header: "style_button_header__uSRPB",
        button_gradient: "style_button_gradient__5S5dL",
        "button-link": "style_button-link__h6BXR",
        select: "style_select__c0NhX",
        "language-select__control": "style_language-select__control__jPkoS",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__G_hj_",
        "language-select__menu": "style_language-select__menu__DzDmS",
        "language-select__menu-list": "style_language-select__menu-list__S0NFi",
        "language-select__value-container":
          "style_language-select__value-container__HCjZd",
        "language-select__single-value":
          "style_language-select__single-value__Megbk",
        "language-select__indicator": "style_language-select__indicator__LBmHp",
        "language-select__option": "style_language-select__option__E6qVz",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__WlwR_",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__k6TAl",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__6I7FW",
        "statistic-select__control": "style_statistic-select__control__CJIZS",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__jH_sr",
        "statistic-select__indicator":
          "style_statistic-select__indicator__J0miJ",
        "statistic-select__single-value":
          "style_statistic-select__single-value__N_GL5",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__mojL0",
        "statistic-select__menu": "style_statistic-select__menu__CJVhU",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__aj28x",
        "statistic-select__value-container":
          "style_statistic-select__value-container__0K5dH",
        "statistic-select__option": "style_statistic-select__option__YG_TU",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__tIP6D",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__Ud1vr",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__c4f7a",
        "select-periods": "style_select-periods__1dBSw",
        select_persia: "style_select_persia__bbDD4",
        "select-periods_persia": "style_select-periods_persia__hgq5l",
        paginationContainer: "style_paginationContainer__ed5Wj",
        pageLinkClassName: "style_pageLinkClassName__WW5Ea",
        mobileActiveClassName: "style_mobileActiveClassName__zzDla",
        activeClassName: "style_activeClassName__LSnd_",
        previousClassName: "style_previousClassName__AsE35",
        nextClassName: "style_nextClassName__hKaBP",
        app: "style_app__wK7uz",
        marquee: "style_marquee__wvkfv",
        "react-tooltip": "style_react-tooltip__5Fh_i",
        carousel: "style_carousel__QWjva",
        carousel__slide: "style_carousel__slide__RxJcx",
        container: "style_container__VBqTg",
        "flex-centered-container": "style_flex-centered-container__hqxTj",
        title: "style_title__vJddJ",
        "title-h2": "style_title-h2__fDZbt",
        grantsAndAudits__title: "style_grantsAndAudits__title__zkgv_",
        "title-h2__small": "style_title-h2__small__BqXP5",
        "grantsAndAudits__block-title":
          "style_grantsAndAudits__block-title__2uh2e",
        "title-h1": "style_title-h1__unZ7y",
        highlight: "style_highlight__0Yp7R",
        bold: "style_bold__FR_M0",
        nowrap: "style_nowrap__dul9z",
        "section-margin": "style_section-margin__Semhn",
        "gradient-main": "style_gradient-main___WOYJ",
        "gradient-main_dark": "style_gradient-main_dark__4NJxb",
        "gradient-ecosystem": "style_gradient-ecosystem__TO69J",
        "gradient-footer": "style_gradient-footer__uXyd_",
        "gradient-footer_blue": "style_gradient-footer_blue__IsZXP",
        gradient: "style_gradient__XaN5H",
        "gradient-sdk": "style_gradient-sdk__HmYqZ",
        "gradient-swap-form": "style_gradient-swap-form__khkZg",
        "gradient-benefits-top": "style_gradient-benefits-top__PmwnM",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__zmNbB",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__taKZ3",
        "gradient-referral-widget": "style_gradient-referral-widget__IItPy",
        "gradient-staking-prepare": "style_gradient-staking-prepare___II7f",
        grantsAndAudits: "style_grantsAndAudits__POXoG",
        grantsAndAudits__container: "style_grantsAndAudits__container__8AHU7",
        grantsAndAudits__content: "style_grantsAndAudits__content__ikTFs",
        grantsAndAudits__audit: "style_grantsAndAudits__audit__g6KOk",
        grantsAndAudits__grants: "style_grantsAndAudits__grants__bkrKh",
        "grantsAndAudits__consensus-incubation":
          "style_grantsAndAudits__consensus-incubation__FhKad",
        grantsAndAudits__list: "style_grantsAndAudits__list__erfPD",
        "grantsAndAudits__list-grants":
          "style_grantsAndAudits__list-grants__P6dY8",
        "grantsAndAudits__list-grants-item":
          "style_grantsAndAudits__list-grants-item__Exfn7",
        "grantsAndAudits__list-audits-item":
          "style_grantsAndAudits__list-audits-item__PANem",
        "grantsAndAudits__name-audits":
          "style_grantsAndAudits__name-audits__k_aON",
        "grantsAndAudits__list-item": "style_grantsAndAudits__list-item__GLXGU",
        "grantsAndAudits__list-item-incubation":
          "style_grantsAndAudits__list-item-incubation__8QsRZ",
        "grantsAndAudits__list-item-consensys":
          "style_grantsAndAudits__list-item-consensys__pEpjM",
        "grantsAndAudits__list-mixbytes":
          "style_grantsAndAudits__list-mixbytes__V64jD",
        grantsAndAudits__right: "style_grantsAndAudits__right__RCIcx",
        grantsAndAudits__icon: "style_grantsAndAudits__icon__Z7nOA",
        "grantsAndAudits__icon-grants":
          "style_grantsAndAudits__icon-grants__zYBUA",
        "grantsAndAudits__icon-audits":
          "style_grantsAndAudits__icon-audits___a1dI",
        "grantsAndAudits__incubation-icon":
          "style_grantsAndAudits__incubation-icon__G3uSB",
        grantsAndAudits__name: "style_grantsAndAudits__name__SaAMv",
        "grantsAndAudits__incubation-name":
          "style_grantsAndAudits__incubation-name__nxha5",
        "grantsAndAudits__cube-big": "style_grantsAndAudits__cube-big__U0aaW",
        "grantsAndAudits__cube-medium":
          "style_grantsAndAudits__cube-medium__clCKf",
        "grantsAndAudits__cube-small":
          "style_grantsAndAudits__cube-small__gNrhF",
        "grantsAndAudits__list-item-incubation__big-margin":
          "style_grantsAndAudits__list-item-incubation__big-margin___eX6K",
      };
    },
  },
]);
