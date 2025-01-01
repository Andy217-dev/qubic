(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    94184: function (e, t) {
      var i;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var i = arguments[t];
            if (i) {
              var a = typeof i;
              if ("string" === a || "number" === a) e.push(i);
              else if (Array.isArray(i)) {
                if (i.length) {
                  var o = r.apply(null, i);
                  o && e.push(o);
                }
              } else if ("object" === a)
                if (i.toString === Object.prototype.toString)
                  for (var s in i) n.call(i, s) && i[s] && e.push(s);
                else e.push(i.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (i = function () {
                return r;
              }.apply(t, [])) || (e.exports = i);
      })();
    },
    26905: function (e) {
      e.exports = function (e, t, i, n, r) {
        for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
          e = e ? e[t[n]] : r;
        return e === r ? i : e;
      };
    },
    58875: function (e, t, i) {
      var n;
      !(function () {
        "use strict";
        var r = !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          a = {
            canUseDOM: r,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners:
              r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
          };
        void 0 ===
          (n = function () {
            return a;
          }.call(t, i, t, e)) || (e.exports = n);
      })();
    },
    8679: function (e, t, i) {
      "use strict";
      var n = i(59864),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(e) {
        return n.isMemo(e) ? o : s[e.$$typeof] || r;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = o);
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, i, n) {
        if ("string" !== typeof i) {
          if (h) {
            var r = m(i);
            r && r !== h && e(t, r, n);
          }
          var o = u(i);
          d && (o = o.concat(d(i)));
          for (var s = l(t), g = l(i), f = 0; f < o.length; ++f) {
            var b = o[f];
            if (!a[b] && (!n || !n[b]) && (!g || !g[b]) && (!s || !s[b])) {
              var _ = p(i, b);
              try {
                c(t, b, _);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    52136: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return i(81564);
        },
      ]);
    },
    19749: function (e, t, i) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                r,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (r = l);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          s(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return n(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(i)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? n(e, t)
              : void 0
          );
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.src,
            i = e.sizes,
            n = e.unoptimized,
            s = void 0 !== n && n,
            l = e.priority,
            c = void 0 !== l && l,
            g = e.loading,
            f = e.lazyRoot,
            w = void 0 === f ? null : f,
            P = e.lazyBoundary,
            T = void 0 === P ? "200px" : P,
            x = e.className,
            I = e.quality,
            E = e.width,
            M = e.height,
            D = e.style,
            N = e.objectFit,
            B = e.objectPosition,
            L = e.onLoadingComplete,
            z = (e.onError, e.placeholder),
            j = void 0 === z ? "empty" : z,
            U = e.blurDataURL,
            F = _(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "onError",
              "placeholder",
              "blurDataURL",
            ]),
            W = u.useContext(h.ImageConfigContext),
            q = u.useMemo(
              function () {
                var e = y || W || p.imageConfigDefault,
                  t = o(e.deviceSizes)
                    .concat(o(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  i = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return b({}, e, { allSizes: t, deviceSizes: i });
              },
              [W]
            ),
            V = F,
            H = i ? "responsive" : "intrinsic";
          "layout" in V && (V.layout && (H = V.layout), delete V.layout);
          var G = A;
          if ("loader" in V) {
            if (V.loader) {
              var K = V.loader;
              G = function (e) {
                e.config;
                var t = _(e, ["config"]);
                return K(t);
              };
            }
            delete V.loader;
          }
          var Z = "";
          if (
            (function (e) {
              return (
                "object" === typeof e &&
                (S(e) ||
                  (function (e) {
                    return void 0 !== e.src;
                  })(e))
              );
            })(t)
          ) {
            var Y = S(t) ? t.default : t;
            if (!Y.src)
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(Y)
                )
              );
            if (
              ((U = U || Y.blurDataURL),
              (Z = Y.src),
              (!H || "fill" !== H) &&
                ((M = M || Y.height),
                (E = E || Y.width),
                !Y.height || !Y.width))
            )
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(Y)
                )
              );
          }
          t = "string" === typeof t ? t : Z;
          var X = R(E),
            Q = R(M),
            $ = R(I),
            J = !c && ("lazy" === g || "undefined" === typeof g);
          (t.startsWith("data:") || t.startsWith("blob:")) &&
            ((s = !0), (J = !1));
          v.has(t) && (J = !1);
          var ee,
            te = a(u.useState(!1), 2),
            ie = te[0],
            ne = te[1],
            re = a(
              m.useIntersection({ rootRef: w, rootMargin: T, disabled: !J }),
              3
            ),
            ae = re[0],
            oe = re[1],
            se = re[2],
            le = !J || oe,
            ce = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ue = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            de = !1,
            pe = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: N,
              objectPosition: B,
            };
          0;
          0;
          var me = Object.assign(
              {},
              D,
              "raw" === H ? { aspectRatio: "".concat(X, " / ").concat(Q) } : pe
            ),
            he =
              "blur" !== j || ie
                ? {}
                : {
                    filter: "blur(20px)",
                    backgroundSize: N || "cover",
                    backgroundImage: 'url("'.concat(U, '")'),
                    backgroundPosition: B || "0% 0%",
                  };
          if ("fill" === H)
            (ce.display = "block"),
              (ce.position = "absolute"),
              (ce.top = 0),
              (ce.left = 0),
              (ce.bottom = 0),
              (ce.right = 0);
          else if ("undefined" !== typeof X && "undefined" !== typeof Q) {
            var ge = Q / X,
              fe = isNaN(ge) ? "100%" : "".concat(100 * ge, "%");
            "responsive" === H
              ? ((ce.display = "block"),
                (ce.position = "relative"),
                (de = !0),
                (ue.paddingTop = fe))
              : "intrinsic" === H
              ? ((ce.display = "inline-block"),
                (ce.position = "relative"),
                (ce.maxWidth = "100%"),
                (de = !0),
                (ue.maxWidth = "100%"),
                (ee =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(X, "%27%20height=%27")
                    .concat(Q, "%27/%3e")))
              : "fixed" === H &&
                ((ce.display = "inline-block"),
                (ce.position = "relative"),
                (ce.width = X),
                (ce.height = Q));
          } else 0;
          var be = { src: k, srcSet: void 0, sizes: void 0 };
          le &&
            (be = C({
              config: q,
              src: t,
              unoptimized: s,
              layout: H,
              width: X,
              quality: $,
              sizes: i,
              loader: G,
            }));
          var _e = t;
          0;
          var ye;
          0;
          var ve =
              (r((ye = {}), "imagesrcset", be.srcSet),
              r(ye, "imagesizes", be.sizes),
              ye),
            ke = u.default.useLayoutEffect,
            we = u.useRef(L),
            Se = u.useRef(t);
          u.useEffect(
            function () {
              we.current = L;
            },
            [L]
          ),
            ke(
              function () {
                Se.current !== t && (se(), (Se.current = t));
              },
              [se, t]
            );
          var Ce = b(
            {
              isLazy: J,
              imgAttributes: be,
              heightInt: Q,
              widthInt: X,
              qualityInt: $,
              layout: H,
              className: x,
              imgStyle: me,
              blurStyle: he,
              loading: g,
              config: q,
              unoptimized: s,
              placeholder: j,
              loader: G,
              srcString: _e,
              onLoadingCompleteRef: we,
              setBlurComplete: ne,
              setIntersection: ae,
              isVisible: le,
            },
            V
          );
          return u.default.createElement(
            u.default.Fragment,
            null,
            "raw" === H
              ? u.default.createElement(O, Object.assign({}, Ce))
              : u.default.createElement(
                  "span",
                  { style: ce },
                  de
                    ? u.default.createElement(
                        "span",
                        { style: ue },
                        ee
                          ? u.default.createElement("img", {
                              style: {
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              },
                              alt: "",
                              "aria-hidden": !0,
                              src: ee,
                            })
                          : null
                      )
                    : null,
                  u.default.createElement(O, Object.assign({}, Ce))
                ),
            c
              ? u.default.createElement(
                  d.default,
                  null,
                  u.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + be.src + be.srcSet + be.sizes,
                        rel: "preload",
                        as: "image",
                        href: be.srcSet ? void 0 : be.src,
                      },
                      ve
                    )
                  )
                )
              : null
          );
        });
      var l,
        c,
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, i)
                    : {};
                n.get || n.set ? Object.defineProperty(t, i, n) : (t[i] = e[i]);
              }
          return (t.default = e), t;
        })(i(98661)),
        d = (l = i(83121)) && l.__esModule ? l : { default: l },
        p = i(10139),
        m = i(69246),
        h = i(28730),
        g = (i(670), i(52700));
      function f(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function b(e) {
        for (
          var t = arguments,
            i = function (i) {
              var n = null != t[i] ? t[i] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  f(e, t, n[t]);
                });
            },
            n = 1;
          n < arguments.length;
          n++
        )
          i(n);
        return e;
      }
      function _(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      c = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        experimentalLayoutRaw: !1,
      };
      var y = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          experimentalLayoutRaw: !1,
        },
        v = new Set(),
        k =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var w = new Map([
        [
          "default",
          function (e) {
            var t = e.config,
              i = e.src,
              n = e.width,
              r = e.quality;
            0;
            if (i.endsWith(".svg") && !t.dangerouslyAllowSVG) return i;
            return ""
              .concat(g.normalizePathTrailingSlash(t.path), "?url=")
              .concat(encodeURIComponent(i), "&w=")
              .concat(n, "&q=")
              .concat(r || 75);
          },
        ],
        [
          "imgix",
          function (e) {
            var t = e.config,
              i = e.src,
              n = e.width,
              r = e.quality,
              a = new URL("".concat(t.path).concat(T(i))),
              o = a.searchParams;
            o.set("auto", o.get("auto") || "format"),
              o.set("fit", o.get("fit") || "max"),
              o.set("w", o.get("w") || n.toString()),
              r && o.set("q", r.toString());
            return a.href;
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.config,
              i = e.src,
              n = e.width,
              r = e.quality,
              a =
                ["f_auto", "c_limit", "w_" + n, "q_" + (r || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t.path).concat(a).concat(T(i));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.config,
              i = e.src,
              n = e.width;
            return "".concat(t.path).concat(T(i), "?imwidth=").concat(n);
          },
        ],
        [
          "custom",
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function S(e) {
        return void 0 !== e.default;
      }
      function C(e) {
        var t = e.config,
          i = e.src,
          n = e.unoptimized,
          r = e.layout,
          a = e.width,
          s = e.quality,
          l = e.sizes,
          c = e.loader;
        if (n) return { src: i, srcSet: void 0, sizes: void 0 };
        var u = (function (e, t, i, n) {
            var r = e.deviceSizes,
              a = e.allSizes;
            if (n && ("fill" === i || "responsive" === i || "raw" === i)) {
              for (var s, l = /(^|\s)(1?\d?\d)vw/g, c = []; (s = l.exec(n)); s)
                c.push(parseInt(s[2]));
              if (c.length) {
                var u,
                  d = 0.01 * (u = Math).min.apply(u, o(c));
                return {
                  widths: a.filter(function (e) {
                    return e >= r[0] * d;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" !== typeof t || "fill" === i || "responsive" === i
              ? { widths: r, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [t, 2 * t].map(function (e) {
                        return (
                          a.find(function (t) {
                            return t >= e;
                          }) || a[a.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(t, a, r, l),
          d = u.widths,
          p = u.kind,
          m = d.length - 1;
        return {
          sizes: l || "w" !== p ? l : "100vw",
          srcSet: d
            .map(function (e, n) {
              return ""
                .concat(c({ config: t, src: i, quality: s, width: e }), " ")
                .concat("w" === p ? e : n + 1)
                .concat(p);
            })
            .join(", "),
          src: c({ config: t, src: i, quality: s, width: d[m] }),
        };
      }
      function R(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function A(e) {
        var t,
          i =
            (null === (t = e.config) || void 0 === t ? void 0 : t.loader) ||
            "default",
          n = w.get(i);
        if (n) return n(e);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(p.VALID_LOADERS.join(", "), ". Received: ")
            .concat(i)
        );
      }
      function P(e, t, i, n, r, a) {
        e &&
          e.src !== k &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                e.parentNode &&
                (v.add(t),
                "blur" === n && a(!0),
                null === r || void 0 === r ? void 0 : r.current)
              ) {
                var i = e.naturalWidth,
                  o = e.naturalHeight;
                r.current({ naturalWidth: i, naturalHeight: o });
              }
            }));
      }
      var O = function (e) {
        var t = e.imgAttributes,
          i = e.heightInt,
          n = e.widthInt,
          r = e.qualityInt,
          a = e.layout,
          o = e.className,
          s = e.imgStyle,
          l = e.blurStyle,
          c = e.isLazy,
          d = e.placeholder,
          p = e.loading,
          m = e.srcString,
          h = e.config,
          g = e.unoptimized,
          f = e.loader,
          y = e.onLoadingCompleteRef,
          v = e.setBlurComplete,
          k = e.setIntersection,
          w = e.onError,
          S =
            (e.isVisible,
            _(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "layout",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setIntersection",
              "onError",
              "isVisible",
            ]));
        return u.default.createElement(
          u.default.Fragment,
          null,
          u.default.createElement(
            "img",
            Object.assign(
              {},
              S,
              t,
              "raw" !== a || t.sizes ? {} : { height: i, width: n },
              {
                decoding: "async",
                "data-nimg": a,
                className: o,
                style: b({}, s, l),
                ref: u.useCallback(
                  function (e) {
                    k(e),
                      (null === e || void 0 === e ? void 0 : e.complete) &&
                        P(e, m, 0, d, y, v);
                  },
                  [k, m, a, d, y, v]
                ),
                onLoad: function (e) {
                  P(e.currentTarget, m, 0, d, y, v);
                },
                onError: function (e) {
                  "blur" === d && v(!0), w && w(e);
                },
              }
            )
          ),
          (c || "blur" === d) &&
            u.default.createElement(
              "noscript",
              null,
              u.default.createElement(
                "img",
                Object.assign(
                  {},
                  S,
                  C({
                    config: h,
                    src: m,
                    unoptimized: g,
                    layout: a,
                    width: n,
                    quality: r,
                    sizes: t.sizes,
                    loader: f,
                  }),
                  "raw" !== a || t.sizes ? {} : { height: i, width: n },
                  {
                    decoding: "async",
                    "data-nimg": a,
                    style: s,
                    className: o,
                    loading: p || "lazy",
                  }
                )
              )
            )
        );
      };
      function T(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    69246: function (e, t, i) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                r,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (r = l);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return n(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(i);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            i = e.rootMargin,
            n = e.disabled || !s,
            u = a.useRef(),
            d = r(a.useState(!1), 2),
            p = d[0],
            m = d[1],
            h = r(a.useState(t ? t.current : null), 2),
            g = h[0],
            f = h[1],
            b = a.useCallback(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  n ||
                    p ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, i) {
                        var n = (function (e) {
                            var t,
                              i = {
                                root: e.root || null,
                                margin: e.rootMargin || "",
                              },
                              n = c.find(function (e) {
                                return (
                                  e.root === i.root && e.margin === i.margin
                                );
                              });
                            n ? (t = l.get(n)) : ((t = l.get(i)), c.push(i));
                            if (t) return t;
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    i =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && i && t(i);
                                });
                              }, e);
                            return (
                              l.set(
                                i,
                                (t = { id: i, observer: a, elements: r })
                              ),
                              t
                            );
                          })(i),
                          r = n.id,
                          a = n.observer,
                          o = n.elements;
                        return (
                          o.set(e, t),
                          a.observe(e),
                          function () {
                            if ((o.delete(e), a.unobserve(e), 0 === o.size)) {
                              a.disconnect(), l.delete(r);
                              var t = c.findIndex(function (e) {
                                return (
                                  e.root === r.root && e.margin === r.margin
                                );
                              });
                              t > -1 && c.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && m(e);
                        },
                        { root: g, rootMargin: i }
                      )));
              },
              [n, g, i, p]
            ),
            _ = a.useCallback(function () {
              m(!1);
            }, []);
          return (
            a.useEffect(
              function () {
                if (!s && !p) {
                  var e = o.requestIdleCallback(function () {
                    return m(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(e);
                  };
                }
              },
              [p]
            ),
            a.useEffect(
              function () {
                t && f(t.current);
              },
              [t]
            ),
            [b, p, _]
          );
        });
      var a = i(98661),
        o = i(44686),
        s = "undefined" !== typeof IntersectionObserver;
      var l = new Map(),
        c = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    41778: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return r;
        },
      });
      var n = i(98661),
        r = function () {
          var e = (0, n.useState)({ width: void 0 }),
            t = e[0],
            i = e[1];
          return (
            (0, n.useEffect)(function () {
              var e = function () {
                i({ width: window.innerWidth });
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            t
          );
        };
    },
    33304: function (e, t, i) {
      "use strict";
      i.d(t, {
        ZX: function () {
          return r;
        },
        yH: function () {
          return a;
        },
      });
      var n = i(49089),
        r = function () {
          n.ZP.event({
            category: "event",
            action: "click_install_snap_inbound",
          });
        },
        a = function () {
          n.ZP.event({ category: "event", action: "launch_app" });
        };
    },
    81564: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return bi;
          },
        });
      var n = i(97997),
        r = i(98661),
        a = i(6400),
        o = i(18413),
        s = i(94219),
        l = i(94184),
        c = i.n(l),
        u = i(97847),
        d = i(62398),
        p = i.n(d),
        m = [
          {
            name: "twitter",
            visibleName: "Twitter",
            link: "https://x.com",
          },
          {
            name: "telegram",
            visibleName: "Telegram",
            link: "https://t.me",
          },
          {
            name: "gitbook",
            visibleName: "Docs",
            link: "https://docs.crystalballsai.xyz/",
          },
        ],
        h = function () {
          var e = (0, r.useState)(""),
            t = e[0],
            i = e[1];
          return (
            (0, r.useLayoutEffect)(function () {
              i(
                "/metamasksnap" === window.location.pathname.toLowerCase()
                  ? "metamasksnap"
                  : ""
              );
            }, []),
            (0, n.BX)("footer", {
              className:
                "metamasksnap" === t
                  ? c()([p().footer, p().footer_colored])
                  : p().footer,
              children: [
                (0, n.tZ)("div", {
                  className: p().footer__buttons,
                  children: (0, n.tZ)("a", {
                    href: s.E.doc,
                    target: "_blank",
                    rel: "noreferrer",
                    className: p()["footer__buttons-documentation"],
                    children: (0, n.tZ)(o.xv, {
                      id: "footer.documentation",
                      children: "Documentation",
                    }),
                  }),
                }),
                (0, n.BX)("div", {
                  className: p().footer__wrapper,
                  children: [
                    (0, n.tZ)("div", {
                      className: p().footer__gradient_blue,
                      children: (0, n.BX)("svg", {
                        width: "1440",
                        height: "500",
                        viewBox: "0 0 1440 895",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, n.tZ)("g", {
                            opacity: "0.7",
                            filter: "url(#filter0_f_3349_1566)",
                            children: (0, n.tZ)("ellipse", {
                              cx: "894",
                              cy: "261.476",
                              rx: "894",
                              ry: "261.476",
                              transform: "matrix(1 0 0 -1 -165 708.953)",
                              fill: "#301768",
                              "fill-opacity": "0.5",
                            }),
                          }),
                          (0, n.tZ)("defs", {
                            children: (0, n.BX)("filter", {
                              id: "filter0_f_3349_1566",
                              x: "-350.4",
                              y: "0.600006",
                              width: "2158.8",
                              height: "893.753",
                              filterUnits: "userSpaceOnUse",
                              "color-interpolation-filters": "sRGB",
                              children: [
                                (0, n.tZ)("feFlood", {
                                  "flood-opacity": "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, n.tZ)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, n.tZ)("feGaussianBlur", {
                                  stdDeviation: "92.7",
                                  result: "effect1_foregroundBlur_3349_1566",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.tZ)("div", {
                      className: p().footer__gradient_green,
                      children: (0, n.BX)("svg", {
                        width: "1440",
                        height: "500",
                        viewBox: "0 0 1440 690",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, n.tZ)("g", {
                            opacity: "0.7",
                            filter: "url(#filter0_f_3349_1567)",
                            children: (0, n.tZ)("ellipse", {
                              cx: "716",
                              cy: "120.825",
                              rx: "716",
                              ry: "120.825",
                              transform: "matrix(1 0 0 -1 2 465.65)",
                              fill: "#00E28D",
                            }),
                          }),
                          (0, n.tZ)("defs", {
                            children: (0, n.BX)("filter", {
                              id: "filter0_f_3349_1567",
                              x: "-221.75",
                              y: "0.25",
                              width: "1879.5",
                              height: "689.15",
                              filterUnits: "userSpaceOnUse",
                              "color-interpolation-filters": "sRGB",
                              children: [
                                (0, n.tZ)("feFlood", {
                                  "flood-opacity": "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, n.tZ)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, n.tZ)("feGaussianBlur", {
                                  stdDeviation: "111.875",
                                  result: "effect1_foregroundBlur_3349_1567",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.BX)("div", {
                      className: p().footer__container,
                      children: [
                        (0, n.tZ)("img", {
                          className: p()["footer__front-cubes"],
                          src: "/images/footer-front-img.png",
                          alt: "Footer front cube",
                        }),
                        (0, n.tZ)("img", {
                          className: p()["footer__front-cubes_shadow"],
                          src: "/images/footer-front-img_shadow.png",
                          alt: "Footer front cube shadow",
                        }),
                        (0, n.BX)("div", {
                          className: p().footer__menus,
                          children: [
                            (0, n.BX)("div", {
                              className: p().footer__community,
                              children: [
                                (0, n.tZ)("span", {
                                  className: p().footer__title,
                                  children: (0, n.tZ)(o.xv, {
                                    id: "footer.community",
                                    children: "community",
                                  }),
                                }),
                                (0, n.tZ)("nav", {
                                  className: p()["social-links"],
                                  children: m.map(function (e, t) {
                                    var i = e.name,
                                      r = e.visibleName,
                                      a = e.link;
                                    return (0,
                                    n.BX)("a", { className: c()(p()["social-links__item"], p()["social-links__item_".concat(i)]), href: a, target: "_blank", rel: "noreferrer", children: [(0, n.tZ)("div", { className: p()["social-links__item-icon"], children: (0, n.tZ)(u.Z, { src: "/icons/socials/".concat(i, ".svg"), width: 18, height: 18 }) }), (0, n.tZ)("span", { className: p()["social-links__name"], children: r })] }, t);
                                  }),
                                }),
                              ],
                            }),
                            // (0, n.BX)("div", {
                            //   className: p().footer__about,
                            //   children: [
                            //     (0, n.tZ)("span", {
                            //       className: p().footer__title,
                            //       children: (0, n.tZ)(o.xv, {
                            //         id: "footer.quickLinks",
                            //         children: "Quick links",
                            //       }),
                            //     }),
                            //     (0, n.BX)("nav", {
                            //       className: p().footer__nav,
                            //       children: [
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           href: "/team",
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.team",
                            //             children: "Team",
                            //           }),
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           href: s.E.security,
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.security",
                            //             children: "Security",
                            //           }),
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           href: "https://dune.com/rubic_exchange/rubic-general-dashboard",
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.statistics",
                            //             children: "Statistics",
                            //           }),
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           href: s.E.brandAssets,
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.brandAssets",
                            //             children: "Brand Assets",
                            //           }),
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           href: "mailto:support@rubic.finance",
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.contactUs",
                            //             children: "Contact Us",
                            //           }),
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           href: "/ecosystem",
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           children: "Ecosystem",
                            //         }),
                            //         (0, n.tZ)("a", {
                            //           className: p()["footer__nav-link"],
                            //           href: s.E.roadmap,
                            //           target: "_blank",
                            //           rel: "noreferrer",
                            //           children: (0, n.tZ)(o.xv, {
                            //             id: "nav.roadmap",
                            //             children: "Roadmap",
                            //           }),
                            //         }),
                            //       ],
                            //     }),
                            //   ],
                            // }),
                            // (0, n.BX)("div", {
                            //   className: p().footer__products,
                            //   children: [
                            //     (0, n.tZ)("span", {
                            //       className: p().footer__title,
                            //       children: (0, n.tZ)(o.xv, {
                            //         id: "footer.products",
                            //         children: "Products",
                            //       }),
                            //     }),
                            //     // (0, n.BX)("nav", {
                            //     //   className: p().footer__nav,
                            //     //   children: [
                            //     //     (0, n.tZ)("a", {
                            //     //       className: p()["footer__nav-link"],
                            //     //       href: "https://tools.rubic.exchange/sdk",
                            //     //       target: "_blank",
                            //     //       rel: "noreferrer",
                            //     //       children: (0, n.tZ)(o.xv, {
                            //     //         id: "nav.sdk",
                            //     //         children: "SDK",
                            //     //       }),
                            //     //     }),
                            //     //     (0, n.tZ)("a", {
                            //     //       className: p()["footer__nav-link"],
                            //     //       href: "https://tools.rubic.exchange/widget",
                            //     //       target: "_blank",
                            //     //       rel: "noreferrer",
                            //     //       children: (0, n.tZ)(o.xv, {
                            //     //         id: "nav.widget",
                            //     //         children: "Widget",
                            //     //       }),
                            //     //     }),
                            //     //     (0, n.tZ)("a", {
                            //     //       className: p()["footer__nav-link"],
                            //     //       href: "https://tools.rubic.exchange/rubic-api",
                            //     //       target: "_blank",
                            //     //       rel: "noreferrer",
                            //     //       children: (0, n.tZ)(o.xv, {
                            //     //         id: "nav.api",
                            //     //         children: "API",
                            //     //       }),
                            //     //     }),
                            //     //     // (0, n.tZ)("a", {
                            //     //     //   className: p()["footer__nav-link"],
                            //     //     //   href: "/metamasksnap",
                            //     //     //   target: "_blank",
                            //     //     //   rel: "noreferrer",
                            //     //     //   children: "Metamask Snap",
                            //     //     // }),
                            //     //     // (0, n.tZ)("a", {
                            //     //     //   className: p()["footer__nav-link"],
                            //     //     //   target: "_blank",
                            //     //     //   rel: "noreferrer",
                            //     //     //   href: "/currencies",
                            //     //     //   children: (0, n.tZ)(o.xv, {
                            //     //     //     id: "nav.currencies",
                            //     //     //     children: "All Cryptocurrencies",
                            //     //     //   }),
                            //     //     // }),
                            //     //     // (0, n.tZ)("a", {
                            //     //     //   className: p()["footer__nav-link"],
                            //     //     //   target: "_blank",
                            //     //     //   rel: "noreferrer",
                            //     //     //   href: "/bridge",
                            //     //     //   children: "Bridge",
                            //     //     // }),
                            //     //   ],
                            //     // }),
                            //   ],
                            // }),
                          ],
                        }),
                        (0, n.BX)("p", {
                          className: p().footer__copyright,
                          children: [
                            "\xa9 Copyright Qubic AI 2025,",
                            " ",
                            (0, n.tZ)("a", {
                              className: p()["footer__copyright-privacy"],
                              // href: s.E.policy,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Privacy Policy",
                            }),
                            (0, n.tZ)("span", { children: " | " }),
                            (0, n.tZ)("a", {
                              className: p()["footer__copyright-privacy"],
                              // href: s.E.termsOfUse,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Terms of Use",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)("div", { className: "gradient-footer" }),
                    (0, n.tZ)("div", { className: "gradient-footer_blue" }),
                  ],
                }),
              ],
            })
          );
        },
        g = i(11163);
      function f(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(i), !0).forEach(function (t) {
                k(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : f(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function _(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function v(e, t, i) {
        return (
          t && y(e.prototype, t),
          i && y(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function k(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function S(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && R(e, t);
      }
      function C(e) {
        return (C = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t) {
        return (R = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function A(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function O(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return P(e);
      }
      function T(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            n = C(e);
          if (t) {
            var r = C(this).constructor;
            i = Reflect.construct(n, arguments, r);
          } else i = n.apply(this, arguments);
          return O(this, i);
        };
      }
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return I(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return I(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(e)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? I(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function E(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      function M() {}
      function D() {}
      function N(e) {
        return e
          .map(function (e) {
            return !1 === e ? null : e;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function B(e, t) {
        return ((100 / e) * t) / t;
      }
      function L(e, t) {
        return (100 * e) / t;
      }
      function z(e) {
        return "".concat(e, "%");
      }
      function j(e, t, i) {
        if (e === t) return !0;
        var n = ne[ie(e)],
          r = ne[ie(t)];
        return !(!n || n !== r) && n(e, t, i);
      }
      function U(e) {
        return function (t, i, n) {
          if (!n) return e(t, i, []);
          for (var r, a = n.length; (r = n[--a]); )
            if (r[0] === t && r[1] === i) return !0;
          return e(t, i, n);
        };
      }
      function F(e) {
        var t = [];
        for (var i in e) "constructor" !== i && t.push(i);
        return t;
      }
      function W(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object RegExp]" === t ||
          "[object Date]" === t ||
          (function (e) {
            return e.$$typeof === oe;
          })(e)
        );
      }
      function q(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? H(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t
            )
          : e;
      }
      function V(e, t, i) {
        return e.concat(t).map(function (e) {
          return q(e, i);
        });
      }
      function H(e, t, i) {
        ((i = i || {}).arrayMerge = i.arrayMerge || V),
          (i.isMergeableObject = i.isMergeableObject || ae);
        var n = Array.isArray(t);
        return n === Array.isArray(e)
          ? n
            ? i.arrayMerge(e, t, i)
            : (function (e, t, i) {
                var n = {};
                return (
                  i.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      n[t] = q(e[t], i);
                    }),
                  Object.keys(t).forEach(function (r) {
                    i.isMergeableObject(t[r]) && e[r]
                      ? (n[r] = H(e[r], t[r], i))
                      : (n[r] = q(t[r], i));
                  }),
                  n
                );
              })(e, t, i)
          : q(t, i);
      }
      function G(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return {};
                },
          i = (function (i) {
            function n(e, i) {
              var r;
              return (
                _(this, n),
                ((r = a.call(this, e, i)).state = t(b({}, i.state))),
                (r.updateStateProps = r.updateStateProps.bind(P(r))),
                r
              );
            }
            S(n, i);
            var a = T(n);
            return (
              v(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.context.subscribe(this.updateStateProps);
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return !re(t, this.state) || !re(e, this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.context.unsubscribe(this.updateStateProps);
                  },
                },
                {
                  key: "updateStateProps",
                  value: function () {
                    this.setState(t(b({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      i = le(this.state, this.props);
                    return r.default.createElement(
                      e,
                      w(
                        {
                          ref: function (e) {
                            t.instance = e;
                          },
                        },
                        i,
                        {
                          carouselStore: {
                            getStoreState: this.context.getStoreState,
                            masterSpinnerError: this.context.masterSpinnerError,
                            masterSpinnerSuccess:
                              this.context.masterSpinnerSuccess,
                            setStoreState: this.context.setStoreState,
                            subscribeMasterSpinner:
                              this.context.subscribeMasterSpinner,
                            unsubscribeAllMasterSpinner:
                              this.context.unsubscribeAllMasterSpinner,
                            unsubscribeMasterSpinner:
                              this.context.unsubscribeMasterSpinner,
                          },
                        }
                      ),
                      this.props.children
                    );
                  },
                },
              ]),
              n
            );
          })(r.default.Component);
        return (
          k(i, "contextType", ce),
          k(i, "propTypes", { children: Q.children }),
          k(i, "defaultProps", { children: null }),
          i
        );
      }
      D.resetWarningCache = M;
      var K = E(function (e) {
          e.exports = (function () {
            function e(e, t, i, n, r, a) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                var o = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((o.name = "Invariant Violation"), o);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var i = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: D,
              resetWarningCache: M,
            };
            return (i.PropTypes = i), i;
          })();
        }),
        Z = "loading",
        Y = "success",
        X = "error",
        Q = {
          children: K.oneOfType([K.arrayOf(K.node), K.node]),
          direction: K.oneOf(["forward", "backward"]),
          height: function (e, t) {
            var i = e[t];
            return "vertical" !== e.orientation ||
              (null !== i && "number" == typeof i)
              ? null
              : new Error(
                  "Missing required property '".concat(
                    t,
                    "' when orientation is vertical.  You must supply a number representing the height in pixels"
                  )
                );
          },
          orientation: K.oneOf(["horizontal", "vertical"]),
          isBgImage: function (e, t) {
            return !0 === e[t] && "img" === e.tag
              ? new Error(
                  "HTML img elements should not have a backgroundImage.  Please use ".concat(
                    t,
                    " for other block-level HTML tags, like div, a, section, etc..."
                  )
                )
              : null;
          },
        },
        $ = function (e) {
          var t = e.min,
            i = e.max,
            n = e.x;
          return Math.min(i, Math.max(t, n));
        },
        J = "buttonBack___1mlaL",
        ee = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        te = (function (e) {
          function t(e) {
            var n;
            return (
              _(this, t),
              ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                P(n)
              )),
              n
            );
          }
          S(t, e);
          var i = T(t);
          return (
            v(
              t,
              [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.currentSlide,
                      r = t.onClick,
                      a = t.step,
                      o = t.infinite,
                      s = t.visibleSlides,
                      l = t.totalSlides - s,
                      c = Math.max(n - a, 0);
                    o && (c = 0 === n ? l : c),
                      i.setStoreState(
                        { currentSlide: c, isPlaying: !1 },
                        null !== r && r.call(this, e)
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      i = (e.carouselStore, e.className),
                      n =
                        (e.currentSlide,
                        e.disabled,
                        e.onClick,
                        e.step,
                        e.totalSlides,
                        e.visibleSlides,
                        e.infinite),
                      a = A(e, ee),
                      o = N([J, "carousel__back-button", i]),
                      s = t.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        n
                      );
                    return r.default.createElement(
                      "button",
                      w(
                        {
                          type: "button",
                          "aria-label": "previous",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: s,
                        },
                        a
                      ),
                      this.props.children
                    );
                  },
                },
              ],
              [
                {
                  key: "setDisabled",
                  value: function (e, t, i) {
                    return null !== e ? e : 0 === t && !i;
                  },
                },
              ]
            ),
            t
          );
        })(r.default.Component);
      k(te, "propTypes", {
        carouselStore: K.object.isRequired,
        children: Q.children.isRequired,
        className: K.string,
        currentSlide: K.number.isRequired,
        disabled: K.bool,
        onClick: K.func,
        step: K.number.isRequired,
        totalSlides: K.number.isRequired,
        visibleSlides: K.number.isRequired,
        infinite: K.bool,
      }),
        k(te, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var ie = E(function (e, t) {
          var i = {}.toString,
            n = "undefined" != typeof window ? window.Node : Function;
          e.exports = t = function (e) {
            var t = typeof e;
            if ("object" != t) return t;
            if ("object" == (t = r[i.call(e)]))
              return e instanceof Map
                ? "map"
                : e instanceof Set
                ? "set"
                : "object";
            if (t) return t;
            if (e instanceof n)
              switch (e.nodeType) {
                case 1:
                  return "element";
                case 3:
                  return "text-node";
                case 9:
                  return "document";
                case 11:
                  return "document-fragment";
                default:
                  return "dom-node";
              }
          };
          var r = (t.types = {
            "[object Function]": "function",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Arguments]": "arguments",
            "[object Array]": "array",
            "[object Set]": "set",
            "[object String]": "string",
            "[object Null]": "null",
            "[object Undefined]": "undefined",
            "[object Number]": "number",
            "[object Boolean]": "boolean",
            "[object Object]": "object",
            "[object Map]": "map",
            "[object Text]": "text-node",
            "[object Uint8Array]": "bit-array",
            "[object Uint16Array]": "bit-array",
            "[object Uint32Array]": "bit-array",
            "[object Uint8ClampedArray]": "bit-array",
            "[object Error]": "error",
            "[object FormData]": "form-data",
            "[object File]": "file",
            "[object Blob]": "blob",
          });
        }),
        ne =
          (ie.types,
          {
            number: function (e, t) {
              return e !== e && t !== t;
            },
            function: function (e, t, i) {
              return (
                e.toString() === t.toString() &&
                ne.object(e, t, i) &&
                j(e.prototype, t.prototype)
              );
            },
            date: function (e, t) {
              return +e == +t;
            },
            regexp: function (e, t) {
              return e.toString() === t.toString();
            },
            element: function (e, t) {
              return e.outerHTML === t.outerHTML;
            },
            textnode: function (e, t) {
              return e.textContent === t.textContent;
            },
          });
      (ne.arguments =
        ne["bit-array"] =
        ne.array =
          U(function (e, t, i) {
            var n = e.length;
            if (n !== t.length) return !1;
            for (i.push([e, t]); n--; ) if (!j(e[n], t[n], i)) return !1;
            return !0;
          })),
        (ne.object = U(function (e, t, i) {
          if ("function" == typeof e.equal)
            return i.push([e, t]), e.equal(t, i);
          var n = F(e),
            r = F(t),
            a = n.length;
          if (a !== r.length) return !1;
          for (n.sort(), r.sort(); a--; ) if (n[a] !== r[a]) return !1;
          for (i.push([e, t]), a = n.length; a--; ) {
            var o = n[a];
            if (!j(e[o], t[o], i)) return !1;
          }
          return !0;
        }));
      var re = j,
        ae = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !W(e)
          );
        },
        oe =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      H.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, i) {
          return H(e, i, t);
        }, {});
      };
      var se,
        le = H,
        ce = r.default.createContext(),
        ue = function e(t) {
          return (
            Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function (i) {
              !t.hasOwnProperty(i) ||
                null === t[i] ||
                ("object" != typeof t[i] && "function" != typeof t[i]) ||
                Object.isFrozen(t[i]) ||
                e(t[i]);
            }),
            t
          );
        },
        de = { masterSpinnerFinished: !1 },
        pe = (function () {
          function e(t) {
            _(this, e),
              (this.state = ue(le(de, t))),
              (this.subscriptions = []),
              (this.masterSpinnerSubscriptions = {}),
              (this.setStoreState = this.setStoreState.bind(this)),
              (this.getStoreState = this.getStoreState.bind(this)),
              (this.subscribe = this.subscribe.bind(this)),
              (this.unsubscribe = this.unsubscribe.bind(this)),
              (this.updateSubscribers = this.updateSubscribers.bind(this)),
              (this.subscribeMasterSpinner =
                this.subscribeMasterSpinner.bind(this)),
              (this.unsubscribeMasterSpinner =
                this.unsubscribeMasterSpinner.bind(this)),
              (this.unsubscribeAllMasterSpinner =
                this.unsubscribeAllMasterSpinner.bind(this)),
              (this.masterSpinnerSuccess =
                this.masterSpinnerSuccess.bind(this)),
              (this.masterSpinnerError = this.masterSpinnerError.bind(this));
          }
          return (
            v(e, [
              {
                key: "setStoreState",
                value: function (e, t) {
                  (this.state = ue(le(this.state, e))),
                    this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return le({}, this.state);
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this.subscriptions.push(e);
                },
              },
              {
                key: "unsubscribe",
                value: function (e) {
                  var t = this.subscriptions.indexOf(e);
                  -1 !== t && this.subscriptions.splice(t, 1);
                },
              },
              {
                key: "updateSubscribers",
                value: function (e) {
                  this.subscriptions.forEach(function (e) {
                    return e();
                  }),
                    "function" == typeof e && e(this.getStoreState());
                },
              },
              {
                key: "subscribeMasterSpinner",
                value: function (e) {
                  -1 ===
                    Object.keys(this.masterSpinnerSubscriptions).indexOf(e) &&
                    (this.masterSpinnerSubscriptions[e] = {
                      success: !1,
                      error: !1,
                      complete: !1,
                    });
                },
              },
              {
                key: "unsubscribeMasterSpinner",
                value: function (e) {
                  return (
                    -1 !==
                      Object.keys(this.masterSpinnerSubscriptions).indexOf(e) &&
                    (this.setMasterSpinnerFinished(),
                    delete this.masterSpinnerSubscriptions[e])
                  );
                },
              },
              {
                key: "unsubscribeAllMasterSpinner",
                value: function () {
                  (this.masterSpinnerSubscriptions = {}),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerSuccess",
                value: function (e) {
                  (this.masterSpinnerSubscriptions[e].success = !0),
                    (this.masterSpinnerSubscriptions[e].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerError",
                value: function (e) {
                  (this.masterSpinnerSubscriptions[e].error = !0),
                    (this.masterSpinnerSubscriptions[e].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "setMasterSpinnerFinished",
                value: function () {
                  this.setStoreState({
                    masterSpinnerFinished: this.isMasterSpinnerFinished(),
                  });
                },
              },
              {
                key: "isMasterSpinnerFinished",
                value: function () {
                  var e = this;
                  return (
                    0 ===
                    Object.keys(this.masterSpinnerSubscriptions).filter(
                      function (t) {
                        return !0 !== e.masterSpinnerSubscriptions[t].complete;
                      }
                    ).length
                  );
                },
              },
            ]),
            e
          );
        })(),
        me = [
          "children",
          "className",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "orientation",
          "playDirection",
          "step",
          "dragStep",
          "tag",
          "totalSlides",
          "touchEnabled",
          "dragEnabled",
          "visibleSlides",
          "infinite",
          "isIntrinsicHeight",
        ],
        he =
          (k(
            (se = (function (e) {
              function t(e) {
                var n;
                if (
                  (_(this, t),
                  (n = i.call(this, e)),
                  e.isIntrinsicHeight && "horizontal" !== e.orientation)
                )
                  throw Error(
                    'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.'
                  );
                var r = {
                  currentSlide: e.currentSlide,
                  disableAnimation: e.disableAnimation,
                  disableKeyboard: e.disableKeyboard,
                  hasMasterSpinner: e.hasMasterSpinner,
                  imageErrorCount: 0,
                  imageSuccessCount: 0,
                  interval: e.interval,
                  isPageScrollLocked: e.isPageScrollLocked,
                  isPlaying: e.isPlaying,
                  lockOnWindowScroll: e.lockOnWindowScroll,
                  masterSpinnerThreshold: 0,
                  naturalSlideHeight: e.naturalSlideHeight,
                  naturalSlideWidth: e.naturalSlideWidth,
                  orientation: e.orientation,
                  playDirection: e.playDirection,
                  privateUnDisableAnimation: !1,
                  slideSize: B(e.totalSlides, e.visibleSlides),
                  slideTraySize: L(e.totalSlides, e.visibleSlides),
                  step: e.step,
                  dragStep: e.dragStep,
                  totalSlides: e.totalSlides,
                  touchEnabled: e.touchEnabled,
                  dragEnabled: e.dragEnabled,
                  visibleSlides: e.visibleSlides,
                  infinite: e.infinite,
                  isIntrinsicHeight: e.isIntrinsicHeight,
                };
                return (n.carouselStore = new pe(r)), n;
              }
              S(t, e);
              var i = T(t);
              return (
                v(t, [
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this,
                        i = {};
                      [
                        "currentSlide",
                        "disableAnimation",
                        "disableKeyboard",
                        "hasMasterSpinner",
                        "interval",
                        "isPlaying",
                        "naturalSlideHeight",
                        "naturalSlideWidth",
                        "lockOnWindowScroll",
                        "orientation",
                        "playDirection",
                        "step",
                        "dragStep",
                        "totalSlides",
                        "touchEnabled",
                        "dragEnabled",
                        "visibleSlides",
                      ].forEach(function (n) {
                        e[n] !== t.props[n] && (i[n] = t.props[n]);
                      }),
                        this.props.currentSlide !== e.currentSlide &&
                          !this.props.disableAnimation &&
                          ((i.disableAnimation = !0),
                          (i.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === e.totalSlides &&
                          this.props.visibleSlides === e.visibleSlides) ||
                          ((i.slideSize = B(
                            this.props.totalSlides,
                            this.props.visibleSlides
                          )),
                          (i.slideTraySize = L(
                            this.props.totalSlides,
                            this.props.visibleSlides
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (i.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0
                          )),
                        Object.keys(i).length > 0 &&
                          this.carouselStore.setStoreState(i);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.carouselStore.unsubscribeAllMasterSpinner();
                    },
                  },
                  {
                    key: "getStore",
                    value: function () {
                      return this.carouselStore;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t =
                          (e.children,
                          e.className,
                          e.currentSlide,
                          e.disableAnimation,
                          e.disableKeyboard,
                          e.hasMasterSpinner,
                          e.interval,
                          e.isPageScrollLocked,
                          e.isPlaying,
                          e.lockOnWindowScroll,
                          e.naturalSlideHeight,
                          e.naturalSlideWidth,
                          e.orientation,
                          e.playDirection,
                          e.step,
                          e.dragStep,
                          e.tag),
                        i =
                          (e.totalSlides,
                          e.touchEnabled,
                          e.dragEnabled,
                          e.visibleSlides,
                          e.infinite,
                          e.isIntrinsicHeight,
                          A(e, me)),
                        n = N(["carousel", this.props.className]);
                      return r.default.createElement(
                        t,
                        w({ className: n }, i),
                        r.default.createElement(
                          ce.Provider,
                          { value: this.carouselStore },
                          this.props.children
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(r.default.Component)),
            "propTypes",
            {
              children: Q.children.isRequired,
              className: K.string,
              currentSlide: K.number,
              disableAnimation: K.bool,
              disableKeyboard: K.bool,
              hasMasterSpinner: K.bool,
              interval: K.number,
              isPageScrollLocked: K.bool,
              isPlaying: K.bool,
              lockOnWindowScroll: K.bool,
              naturalSlideHeight: K.number.isRequired,
              naturalSlideWidth: K.number.isRequired,
              orientation: Q.orientation,
              playDirection: Q.direction,
              step: K.number,
              dragStep: K.number,
              tag: K.string,
              totalSlides: K.number.isRequired,
              touchEnabled: K.bool,
              dragEnabled: K.bool,
              visibleSlides: K.number,
              infinite: K.bool,
              isIntrinsicHeight: K.bool,
            }
          ),
          k(se, "defaultProps", {
            className: null,
            currentSlide: 0,
            disableAnimation: !1,
            disableKeyboard: !1,
            hasMasterSpinner: !1,
            interval: 5e3,
            isPageScrollLocked: !1,
            isPlaying: !1,
            lockOnWindowScroll: !1,
            orientation: "horizontal",
            playDirection: "forward",
            step: 1,
            dragStep: 1,
            tag: "div",
            touchEnabled: !0,
            dragEnabled: !0,
            visibleSlides: 1,
            infinite: !1,
            isIntrinsicHeight: !1,
          }),
          se);
      ce.Consumer;
      G(te, function (e) {
        return {
          currentSlide: e.currentSlide,
          step: e.step,
          totalSlides: e.totalSlides,
          visibleSlides: e.visibleSlides,
          infinite: e.infinite,
        };
      });
      var ge,
        fe,
        be,
        _e,
        ye,
        ve,
        ke = "buttonFirst___2rhFr",
        we = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
        ],
        Se =
          ((ge = (function (e) {
            function t() {
              var e;
              return (
                _(this, t),
                ((e = i.call(this)).handleOnClick = e.handleOnClick.bind(P(e))),
                e
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick;
                    i.setStoreState(
                      { currentSlide: 0, isPlaying: !1 },
                      null !== n && n.call(this, e)
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      i = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.totalSlides, A(e, we)),
                      o = N([ke, "carousel__first-button", t]),
                      s = null !== n ? n : 0 === i;
                    return r.default.createElement(
                      "button",
                      w(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: s,
                        },
                        a
                      ),
                      this.props.children
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.Component)),
          k(ge, "propTypes", {
            carouselStore: K.object.isRequired,
            children: Q.children.isRequired,
            className: K.string,
            currentSlide: K.number.isRequired,
            disabled: K.bool,
            onClick: K.func,
            totalSlides: K.number.isRequired,
          }),
          k(ge, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ge),
        Ce =
          (G(Se, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonNext___2mOCa"),
        Re = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        Ae =
          ((fe = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  P(n)
                )),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(
                t,
                [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        i = t.currentSlide,
                        n = t.onClick,
                        r = t.step,
                        a = t.carouselStore,
                        o = t.infinite,
                        s = t.totalSlides - t.visibleSlides,
                        l = r + i,
                        c = Math.min(l, s);
                      o && (c = s === i ? 0 : c),
                        a.setStoreState(
                          { currentSlide: c, isPlaying: !1 },
                          null !== n && n.call(this, e)
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        i = (e.carouselStore, e.className),
                        n = e.currentSlide,
                        a = e.disabled,
                        o = (e.onClick, e.step, e.totalSlides),
                        s = e.visibleSlides,
                        l = e.infinite,
                        c = A(e, Re),
                        u = N([Ce, "carousel__next-button", i]),
                        d = t.setDisabled(a, n, s, o, l);
                      return r.default.createElement(
                        "button",
                        w(
                          {
                            type: "button",
                            "aria-label": "next",
                            className: u,
                            onClick: this.handleOnClick,
                            disabled: d,
                          },
                          c
                        ),
                        this.props.children
                      );
                    },
                  },
                ],
                [
                  {
                    key: "setDisabled",
                    value: function (e, t, i, n, r) {
                      return null !== e ? e : t >= n - i && !r;
                    },
                  },
                ]
              ),
              t
            );
          })(r.default.PureComponent)),
          k(fe, "propTypes", {
            carouselStore: K.object.isRequired,
            children: Q.children.isRequired,
            className: K.string,
            currentSlide: K.number.isRequired,
            disabled: K.bool,
            onClick: K.func,
            step: K.number.isRequired,
            totalSlides: K.number.isRequired,
            visibleSlides: K.number.isRequired,
            infinite: K.bool,
          }),
          k(fe, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          fe),
        Pe =
          (G(Ae, function (e) {
            return {
              currentSlide: e.currentSlide,
              step: e.step,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
              infinite: e.infinite,
            };
          }),
          "buttonLast___2yuh0"),
        Oe = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        Te =
          ((be = (function (e) {
            function t() {
              var e;
              return (
                _(this, t),
                ((e = i.call(this)).handleOnClick = e.handleOnClick.bind(P(e))),
                e
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick,
                      r = t.totalSlides,
                      a = t.visibleSlides;
                    i.setStoreState(
                      { currentSlide: r - a, isPlaying: !1 },
                      null !== n && n.call(this, e)
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      i = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.totalSlides),
                      o = e.visibleSlides,
                      s = A(e, Oe),
                      l = N([Pe, "carousel__last-button", t]),
                      c = null !== n ? n : i >= a - o;
                    return r.default.createElement(
                      "button",
                      w(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: l,
                          onClick: this.handleOnClick,
                          disabled: c,
                        },
                        s
                      ),
                      this.props.children
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.Component)),
          k(be, "propTypes", {
            carouselStore: K.object.isRequired,
            children: Q.children.isRequired,
            className: K.string,
            currentSlide: K.number.isRequired,
            disabled: K.bool,
            onClick: K.func,
            totalSlides: K.number.isRequired,
            visibleSlides: K.number.isRequired,
          }),
          k(be, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          be),
        xe =
          (G(Te, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___3Lm3s"),
        Ie = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        Ee =
          ((_e = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  P(n)
                )),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props.onClick;
                    this.props.carouselStore.setStoreState(
                      { isPlaying: !this.props.isPlaying },
                      null !== t && t.call(this, e)
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.childrenPaused),
                      i = e.childrenPlaying,
                      n = e.className,
                      a = e.isPlaying,
                      o = (e.onClick, A(e, Ie)),
                      s = N([xe, "carousel__play-button", n]);
                    return r.default.createElement(
                      "button",
                      w(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: s,
                          onClick: this.handleOnClick,
                        },
                        o
                      ),
                      a && i,
                      !a && t,
                      this.props.children
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.PureComponent)),
          k(_e, "propTypes", {
            carouselStore: K.object.isRequired,
            children: K.node,
            childrenPaused: K.node,
            childrenPlaying: K.node,
            className: K.string,
            isPlaying: K.bool.isRequired,
            onClick: K.func,
          }),
          k(_e, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          _e),
        Me =
          (G(Ee, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        De = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "selected",
          "slide",
          "totalSlides",
          "visibleSlides",
        ],
        Ne =
          ((ye = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  P(n)
                )),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick,
                      r = t.slide,
                      a = t.totalSlides,
                      o = t.visibleSlides,
                      s = r >= a - o ? a - o : r;
                    i.setStoreState(
                      { currentSlide: s, isPlaying: !1 },
                      null !== n && n.call(this, e)
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.className),
                      i = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.selected),
                      o = e.slide,
                      s = (e.totalSlides, e.visibleSlides),
                      l = A(e, De),
                      c = o >= i && o < i + s,
                      u = "boolean" == typeof a ? a : c,
                      d = "boolean" == typeof n ? n : !0 === c,
                      p = N([
                        Me.dot,
                        u && Me.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(o),
                        u && "carousel__dot--selected",
                        t,
                      ]);
                    return r.default.createElement(
                      "button",
                      w(
                        {
                          "aria-label": "slide dot",
                          type: "button",
                          onClick: this.handleOnClick,
                          className: p,
                          disabled: d,
                        },
                        l
                      ),
                      this.props.children
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.Component)),
          k(ye, "propTypes", {
            carouselStore: K.object.isRequired,
            children: Q.children,
            className: K.string,
            currentSlide: K.number.isRequired,
            disabled: K.bool,
            onClick: K.func,
            selected: K.bool,
            slide: K.number.isRequired,
            totalSlides: K.number.isRequired,
            visibleSlides: K.number.isRequired,
          }),
          k(ye, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          ye),
        Be = G(Ne, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Le = {},
        ze = ["renderDots"],
        je = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "dotNumbers",
          "totalSlides",
          "visibleSlides",
          "disableActiveDots",
          "showAsSelectedForCurrentSlideOnly",
          "renderDots",
        ],
        Ue =
          ((ve = (function (e) {
            function t() {
              return _(this, t), i.apply(this, arguments);
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "renderDots",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      i = e.totalSlides,
                      n = e.visibleSlides,
                      a = e.disableActiveDots,
                      o = e.showAsSelectedForCurrentSlideOnly,
                      s = e.renderDots;
                    if (s) {
                      var l = this.props;
                      return l.renderDots, s(A(l, ze));
                    }
                    for (var c = [], u = 0; u < i; u += 1) {
                      var d = o ? u === t : u >= t && u < t + n,
                        p = u >= i - n ? i - n : u;
                      c.push(
                        r.default.createElement(
                          Be,
                          { key: u, slide: p, selected: d, disabled: !!a && d },
                          r.default.createElement(
                            "span",
                            { className: N["carousel__dot-group-dot"] },
                            this.props.dotNumbers && u + 1
                          )
                        )
                      );
                    }
                    return c;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children),
                      i = e.className,
                      n =
                        (e.currentSlide,
                        e.dotNumbers,
                        e.totalSlides,
                        e.visibleSlides,
                        e.disableActiveDots,
                        e.showAsSelectedForCurrentSlideOnly,
                        e.renderDots,
                        A(e, je)),
                      a = N([Le.DotGroup, "carousel__dot-group", i]);
                    return r.default.createElement(
                      "div",
                      w({ className: a }, n),
                      this.renderDots(),
                      t
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.Component)),
          k(ve, "propTypes", {
            children: Q.children,
            className: K.string,
            currentSlide: K.number.isRequired,
            carouselStore: K.object.isRequired,
            totalSlides: K.number.isRequired,
            visibleSlides: K.number.isRequired,
            dotNumbers: K.bool,
            disableActiveDots: K.bool,
            showAsSelectedForCurrentSlideOnly: K.bool,
            renderDots: K.func,
          }),
          k(ve, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          ve),
        Fe =
          (G(Ue, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        We = ["src", "alt"],
        qe = [
          "carouselStore",
          "children",
          "className",
          "hasMasterSpinner",
          "isBgImage",
          "onError",
          "onLoad",
          "renderError",
          "renderLoading",
          "style",
          "tag",
        ],
        Ve = (function (e) {
          function t(e) {
            var n;
            return (
              _(this, t),
              ((n = i.call(this, e)).state = { imageStatus: Z }),
              (n.handleImageLoad = n.handleImageLoad.bind(P(n))),
              (n.handleImageError = n.handleImageError.bind(P(n))),
              (n.image = null),
              n
            );
          }
          S(t, e);
          var i = T(t);
          return (
            v(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    t.subscribeMasterSpinner(this.props), this.initImage();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    e.src !== this.props.src &&
                      (t.unsubscribeMasterSpinner(e),
                      t.subscribeMasterSpinner(this.props),
                      this.initImage());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    t.unsubscribeMasterSpinner(this.props),
                      this.image.removeEventListener(
                        "load",
                        this.handleImageLoad
                      ),
                      this.image.removeEventListener(
                        "error",
                        this.handleImageError
                      ),
                      (this.image = null);
                  },
                },
                {
                  key: "initImage",
                  value: function () {
                    if (
                      (this.setState({ imageStatus: Z }),
                      (this.image = document.createElement("img")),
                      this.image.addEventListener(
                        "load",
                        this.handleImageLoad,
                        !1
                      ),
                      this.image.addEventListener(
                        "error",
                        this.handleImageError,
                        !1
                      ),
                      (this.image.src = this.props.src),
                      this.image.readyState || this.image.complete)
                    ) {
                      var e = this.image.src;
                      (this.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                        (this.image.src = e);
                    }
                  },
                },
                {
                  key: "handleImageLoad",
                  value: function (e) {
                    this.setState({ imageStatus: Y }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerSuccess(
                          this.props.src
                        ),
                      this.props.onLoad && this.props.onLoad(e);
                  },
                },
                {
                  key: "handleImageError",
                  value: function (e) {
                    this.setState({ imageStatus: X }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerError(
                          this.props.src
                        ),
                      this.props.onError && this.props.onError(e);
                  },
                },
                {
                  key: "tempTag",
                  value: function () {
                    return "img" === this.props.tag ? "div" : this.props.tag;
                  },
                },
                {
                  key: "customRender",
                  value: function (e) {
                    return "function" == typeof this.props[e]
                      ? this.props[e]()
                      : this.props.children;
                  },
                },
                {
                  key: "renderLoading",
                  value: function (e) {
                    var t = this.tempTag(),
                      i = N([
                        Fe.image,
                        Fe.imageLoading,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--loading",
                        this.props.className,
                      ]);
                    return r.default.createElement(
                      t,
                      w({ className: i }, e),
                      this.customRender("renderLoading")
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (e) {
                    var t = this.tempTag(),
                      i = N([
                        Fe.image,
                        Fe.imageError,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--error",
                        this.props.className,
                      ]);
                    return r.default.createElement(
                      t,
                      w({ className: i }, e),
                      this.customRender("renderError")
                    );
                  },
                },
                {
                  key: "renderSuccess",
                  value: function (e) {
                    var t = this.props,
                      i = t.style,
                      n = t.tag,
                      a = N([
                        Fe.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      o = w({}, i),
                      s = e;
                    if ("img" !== n) {
                      var l = e.src;
                      e.alt,
                        (s = A(e, We)),
                        (o = w({}, i, {
                          backgroundImage: 'url("'.concat(l, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return r.default.createElement(
                      n,
                      w({ className: a, style: o }, s),
                      this.props.children
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t =
                        (e.carouselStore,
                        e.children,
                        e.className,
                        e.hasMasterSpinner,
                        e.isBgImage,
                        e.onError,
                        e.onLoad,
                        e.renderError,
                        e.renderLoading,
                        e.style,
                        e.tag,
                        A(e, qe));
                    switch (this.state.imageStatus) {
                      case Z:
                        return this.renderLoading(t);
                      case Y:
                        return this.renderSuccess(t);
                      case X:
                        return this.renderError(t);
                      default:
                        throw new Error(
                          "unknown value for this.state.imageStatus"
                        );
                    }
                  },
                },
              ],
              [
                {
                  key: "subscribeMasterSpinner",
                  value: function (e) {
                    e.hasMasterSpinner &&
                      e.carouselStore.subscribeMasterSpinner(e.src);
                  },
                },
                {
                  key: "unsubscribeMasterSpinner",
                  value: function (e) {
                    e.hasMasterSpinner &&
                      e.carouselStore.unsubscribeMasterSpinner(e.src);
                  },
                },
              ]
            ),
            t
          );
        })(r.default.Component);
      k(Ve, "propTypes", {
        alt: K.string,
        carouselStore: K.object.isRequired,
        children: Q.children,
        className: K.string,
        hasMasterSpinner: K.bool.isRequired,
        isBgImage: Q.isBgImage,
        onError: K.func,
        onLoad: K.func,
        renderError: K.func,
        renderLoading: K.func,
        src: K.string.isRequired,
        style: K.object,
        tag: K.string,
      }),
        k(Ve, "defaultProps", {
          alt: "",
          children: null,
          className: null,
          isBgImage: !1,
          onError: null,
          onLoad: null,
          renderError: null,
          renderLoading: null,
          style: null,
          tag: "img",
        });
      var He,
        Ge,
        Ke,
        Ze,
        Ye = G(Ve, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        Xe = "spinner___27VUp",
        Qe = ["className"],
        $e =
          ((He = (function (e) {
            function t() {
              return _(this, t), i.apply(this, arguments);
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.className,
                      i = A(e, Qe),
                      n = N([Xe, "carousel__spinner", t]);
                    return r.default.createElement(
                      "div",
                      w({ className: n }, i)
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.PureComponent)),
          k(He, "propTypes", { className: K.string }),
          k(He, "defaultProps", { className: null }),
          He),
        Je = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        et = [
          "alt",
          "bgImageProps",
          "bgImageTag",
          "carouselStore",
          "className",
          "imageClassName",
          "overlayClassName",
          "isPinchZoomEnabled",
          "spinner",
          "src",
          "srcZoomed",
          "tag",
        ],
        tt =
          ((Ge = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).state = {
                  isImageLoading: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (n.tpCache = {}),
                (n.handleImageComplete = n.handleImageComplete.bind(P(n))),
                (n.handleOnMouseMove = n.handleOnMouseMove.bind(P(n))),
                (n.handleOnMouseOut = n.handleOnMouseOut.bind(P(n))),
                (n.handleOnMouseOver = n.handleOnMouseOver.bind(P(n))),
                (n.handleOnTouchEnd = n.handleOnTouchEnd.bind(P(n))),
                (n.handleOnTouchMove = n.handleOnTouchMove.bind(P(n))),
                (n.handleOnTouchStart = n.handleOnTouchStart.bind(P(n))),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(
                t,
                [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      !1 === t.isZooming &&
                        !0 === this.state.isZooming &&
                        this.props.carouselStore.setStoreState({
                          isPageScrollLocked: !0,
                        }),
                        !0 === t.isZooming &&
                          !1 === this.state.isZooming &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          });
                    },
                  },
                  {
                    key: "handleImageComplete",
                    value: function () {
                      this.setState({ isImageLoading: !1 });
                    },
                  },
                  {
                    key: "handleOnMouseOver",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({ isHovering: !0, scale: 2 });
                    },
                  },
                  {
                    key: "handleOnMouseOut",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({ isHovering: !1, scale: 1 });
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (e) {
                      if (!this.state.isZooming) {
                        var t = z(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) * 100
                          ),
                          i = z(
                            (e.nativeEvent.offsetY / e.target.offsetHeight) *
                              100
                          );
                        this.setState({ x: t, y: i });
                      }
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (e) {
                      var t = this;
                      this.props.isPinchZoomEnabled &&
                        (x(e.targetTouches).forEach(function (e) {
                          t.tpCache[e.identifier] = {
                            clientX: e.clientX,
                            clientY: e.clientY,
                          };
                        }),
                        this.setState(function (e) {
                          return {
                            isZooming:
                              e.isZooming || Object.keys(t.tpCache).length > 1,
                          };
                        }));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (e) {
                      var i = this;
                      if (this.state.isZooming) {
                        e.persist();
                        var n = x(e.targetTouches)
                          .filter(function (e) {
                            return i.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === n.length) {
                          e.stopPropagation();
                          var r = e.target.getBoundingClientRect(),
                            a = n[0].identifier,
                            o = n[1].identifier,
                            s = {
                              x1: this.tpCache[a].clientX,
                              y1: this.tpCache[a].clientY,
                              x2: this.tpCache[o].clientX,
                              y2: this.tpCache[o].clientY,
                            };
                          s.distance = t.distanceBetweenTwoTouches(b({}, s));
                          var l = t.midpointBetweenTwoTouches(b({}, s));
                          (s.cx = l.x), (s.cy = l.y);
                          var c = {
                            x1: n[0].clientX,
                            y1: n[0].clientY,
                            x2: n[1].clientX,
                            y2: n[1].clientY,
                          };
                          c.distance = t.distanceBetweenTwoTouches(b({}, c));
                          var u = t.midpointBetweenTwoTouches(b({}, c));
                          (c.cx = u.x), (c.cy = u.y);
                          var d = z(
                              $({
                                min: 0,
                                max: 100,
                                x: ((c.cx - r.left) / r.width) * 100,
                              })
                            ),
                            p = z(
                              $({
                                min: 0,
                                max: 100,
                                x: ((c.cy - r.top) / r.height) * 100,
                              })
                            ),
                            m = function (e) {
                              return $({
                                min: 1,
                                max: 3,
                                x: e.scale + (c.distance - s.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== m(e),
                              scale: m(e),
                              x: d,
                              y: p,
                            };
                          });
                        }
                      }
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (e) {
                      var t = this;
                      this.props.isPinchZoomEnabled &&
                        (x(e.changedTouches).forEach(function (e) {
                          delete t.tpCache[e.identifier];
                        }),
                        0 === Object.keys(this.tpCache).length &&
                          this.setState({ isZooming: !1 }));
                    },
                  },
                  {
                    key: "renderLoading",
                    value: function () {
                      if (this.state.isImageLoading) {
                        var e = this.props.spinner;
                        return r.default.createElement(
                          "div",
                          {
                            className: N([
                              Je.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && r.default.createElement($e, null)
                        );
                      }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.alt,
                        i = e.bgImageProps,
                        n = e.bgImageTag,
                        a = (e.carouselStore, e.className),
                        o = e.imageClassName,
                        s = e.overlayClassName,
                        l = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        u = e.tag,
                        d = A(e, et),
                        p = N([Je.container, a]),
                        m = N([Je.image, "carousel__zoom-image", o]),
                        h = N([
                          Je.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Je.hover,
                          this.state.isZooming && Je.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          s,
                        ]),
                        g = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((g.transformOrigin = ""
                            .concat(this.state.x, " ")
                            .concat(this.state.y)),
                          (g.transform = "scale(".concat(
                            this.state.scale,
                            ")"
                          ))),
                        r.default.createElement(
                          u,
                          w({ className: p }, d),
                          r.default.createElement(
                            Ye,
                            w(
                              {
                                alt: t,
                                className: m,
                                tag: n,
                                src: l,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageComplete,
                              },
                              i
                            )
                          ),
                          r.default.createElement(Ye, {
                            className: h,
                            tag: "div",
                            src: c || l,
                            style: g,
                            isBgImage: !0,
                            onFocus: this.handleOnMouseOver,
                            onMouseOver: this.handleOnMouseOver,
                            onBlur: this.handleOnMouseOut,
                            onMouseOut: this.handleOnMouseOut,
                            onMouseMove: this.handleOnMouseMove,
                            onTouchStart: this.handleOnTouchStart,
                            onTouchEnd: this.handleOnTouchEnd,
                            onTouchMove: this.handleOnTouchMove,
                          }),
                          this.renderLoading()
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "midpointBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        i = e.y1;
                      return { x: (t + e.x2) / 2, y: (i + e.y2) / 2 };
                    },
                  },
                  {
                    key: "distanceBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        i = e.y1,
                        n = e.x2,
                        r = e.y2;
                      return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2));
                    },
                  },
                ]
              ),
              t
            );
          })(r.default.Component)),
          k(Ge, "propTypes", {
            alt: K.string,
            bgImageProps: K.object,
            bgImageTag: K.string,
            carouselStore: K.object.isRequired,
            className: K.string,
            imageClassName: K.string,
            overlayClassName: K.string,
            spinner: K.func,
            src: K.string.isRequired,
            srcZoomed: K.string,
            tag: K.string,
            isPinchZoomEnabled: K.bool,
          }),
          k(Ge, "defaultProps", {
            alt: void 0,
            bgImageProps: {},
            bgImageTag: "div",
            className: null,
            imageClassName: null,
            overlayClassName: null,
            isPinchZoomEnabled: !0,
            spinner: null,
            srcZoomed: null,
            tag: "div",
          }),
          Ge),
        it =
          (G(tt, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        nt = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameHidden",
          "classNameVisible",
          "currentSlide",
          "index",
          "innerClassName",
          "innerTag",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onBlur",
          "onFocus",
          "orientation",
          "slideSize",
          "style",
          "tabIndex",
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        rt =
          ((Ke = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).handleOnFocus = n.handleOnFocus.bind(
                  P(n)
                )),
                (n.handleOnBlur = n.handleOnBlur.bind(P(n))),
                (n.state = { focused: !1 }),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(t, [
                {
                  key: "isVisible",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      i = e.index,
                      n = e.visibleSlides;
                    return i >= t && i < t + n;
                  },
                },
                {
                  key: "handleOnFocus",
                  value: function (e) {
                    var t = this,
                      i = this.props.onFocus;
                    this.setState({ focused: !0 }, function () {
                      null !== i && i.call(t, e);
                    });
                  },
                },
                {
                  key: "handleOnBlur",
                  value: function (e) {
                    var t = this,
                      i = this.props.onBlur;
                    this.setState({ focused: !1 }, function () {
                      null !== i && i.call(t, e);
                    });
                  },
                },
                {
                  key: "renderFocusRing",
                  value: function () {
                    return this.state.focused
                      ? r.default.createElement("div", {
                          className: [
                            it.focusRing,
                            "carousel__slide-focus-ring",
                          ].join(" "),
                        })
                      : null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      i = t.ariaLabel,
                      n = (t.carouselStore, t.children, t.className),
                      a = t.classNameHidden,
                      o = t.classNameVisible,
                      s = (t.currentSlide, t.index, t.innerClassName),
                      l = t.innerTag,
                      c = t.naturalSlideHeight,
                      u = t.naturalSlideWidth,
                      d = (t.onBlur, t.onFocus, t.orientation),
                      p = t.slideSize,
                      m = t.style,
                      h = t.tabIndex,
                      g = t.tag,
                      f = t.totalSlides,
                      b = (t.visibleSlides, t.isIntrinsicHeight),
                      _ = A(t, nt),
                      y = {};
                    "horizontal" === d
                      ? ((y.width = z(p)),
                        (y.paddingBottom = z((100 * c) / (u * f))))
                      : ((y.width = z(100)),
                        (y.paddingBottom = z((100 * c) / u)));
                    var v = {};
                    b &&
                      ("horizontal" === d
                        ? (y.height = "unset")
                        : (y.width = "unset"),
                      (y.paddingBottom = "unset"),
                      (v.position = "unset"));
                    var k = w({}, y, m),
                      S = this.isVisible(),
                      C = N([
                        it.slide,
                        "horizontal" === d && it.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        S && o,
                        S && "carousel__slide--visible",
                        !S && a,
                        !S && "carousel__slide--hidden",
                        n,
                      ]),
                      R = N([it.slideInner, "carousel__inner-slide", s]),
                      P = this.isVisible() ? 0 : -1,
                      O = "number" == typeof h ? h : P;
                    return r.default.createElement(
                      g,
                      w(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          tabIndex: O,
                          "aria-selected": this.isVisible(),
                          "aria-label": i,
                          role: "option",
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: C,
                          style: k,
                        },
                        _
                      ),
                      r.default.createElement(
                        l,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: R,
                          style: v,
                        },
                        this.props.children,
                        this.renderFocusRing()
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.default.PureComponent)),
          k(Ke, "propTypes", {
            ariaLabel: K.string,
            carouselStore: K.object,
            children: Q.children,
            className: K.string,
            classNameHidden: K.string,
            classNameVisible: K.string,
            currentSlide: K.number.isRequired,
            index: K.number.isRequired,
            innerClassName: K.string,
            innerTag: K.string,
            naturalSlideHeight: K.number.isRequired,
            naturalSlideWidth: K.number.isRequired,
            onBlur: K.func,
            onFocus: K.func,
            orientation: Q.orientation.isRequired,
            slideSize: K.number.isRequired,
            style: K.object,
            tabIndex: K.number,
            tag: K.string,
            totalSlides: K.number.isRequired,
            visibleSlides: K.number.isRequired,
            isIntrinsicHeight: K.bool,
          }),
          k(Ke, "defaultProps", {
            ariaLabel: "slide",
            carouselStore: null,
            children: null,
            className: null,
            classNameHidden: null,
            classNameVisible: null,
            innerClassName: null,
            innerTag: "div",
            onBlur: null,
            onFocus: null,
            style: {},
            tabIndex: null,
            tag: "div",
            isIntrinsicHeight: !1,
          }),
          Ke),
        at = G(rt, function (e) {
          return {
            currentSlide: e.currentSlide,
            naturalSlideHeight: e.naturalSlideHeight,
            naturalSlideWidth: e.naturalSlideWidth,
            orientation: e.orientation,
            slideSize: e.slideSize,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            isIntrinsicHeight: e.isIntrinsicHeight,
          };
        }),
        ot = (function () {
          function e() {
            _(this, e);
          }
          return (
            v(
              e,
              [
                {
                  key: "parents",
                  value: function (e, t) {
                    return null === e.parentNode
                      ? t
                      : this.parents(e.parentNode, t.concat([e]));
                  },
                },
                {
                  key: "scrollParent",
                  value: function (t) {
                    for (
                      var i = this.parents(t.parentNode, []), n = 0;
                      n < i.length;
                      n += 1
                    )
                      if (e.scroll(i[n])) return i[n];
                    return (
                      document.scrollingElement || document.documentElement
                    );
                  },
                },
                {
                  key: "getScrollParent",
                  value: function (t) {
                    return e.isNodeValid(t) ? this.scrollParent(t) : null;
                  },
                },
              ],
              [
                {
                  key: "style",
                  value: function (e, t) {
                    return getComputedStyle(e, null).getPropertyValue(t);
                  },
                },
                {
                  key: "overflow",
                  value: function (t) {
                    return (
                      e.style(t, "overflow") +
                      e.style(t, "overflow-y") +
                      e.style(t, "overflow-x")
                    );
                  },
                },
                {
                  key: "scroll",
                  value: function (t) {
                    return /(auto|scroll)/.test(e.overflow(t));
                  },
                },
                {
                  key: "isNodeValid",
                  value: function (e) {
                    return e instanceof HTMLElement || e instanceof SVGElement;
                  },
                },
              ]
            ),
            e
          );
        })(),
        st = {
          horizontalSlider: "horizontalSlider___281Ls",
          horizontalSliderTray: "horizontalSliderTray___1L-0W",
          verticalSlider: "verticalSlider___34ZFD",
          verticalSliderTray: "verticalSliderTray___267D8",
          verticalTray: "verticalTray___12Key",
          verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
          sliderTray: "sliderTray___-vHFQ",
          sliderAnimation: "sliderAnimation___300FY",
          masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
        },
        lt = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameAnimation",
          "classNameTray",
          "classNameTrayWrap",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "dragEnabled",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "masterSpinnerFinished",
          "moveThreshold",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onMasterSpinner",
          "orientation",
          "playDirection",
          "privateUnDisableAnimation",
          "slideSize",
          "slideTraySize",
          "spinner",
          "style",
          "tabIndex",
          "totalSlides",
          "touchEnabled",
          "trayProps",
          "trayTag",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        ct = [
          "dragStep",
          "step",
          "infinite",
          "preventVerticalScrollOnTouch",
          "preventingVerticalScroll",
          "horizontalPixelThreshold",
          "verticalPixelThreshold",
        ],
        ut = [
          "className",
          "onClickCapture",
          "onMouseDown",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "ref",
          "style",
        ],
        dt =
          ((Ze = (function (e) {
            function t(e) {
              var n;
              return (
                _(this, t),
                ((n = i.call(this, e)).getSliderRef = n.getSliderRef.bind(
                  P(n)
                )),
                (n.handleDocumentScroll = n.handleDocumentScroll.bind(P(n))),
                (n.handleOnClickCapture = n.handleOnClickCapture.bind(P(n))),
                (n.handleOnKeyDown = n.handleOnKeyDown.bind(P(n))),
                (n.handleOnMouseDown = n.handleOnMouseDown.bind(P(n))),
                (n.handleOnMouseMove = n.handleOnMouseMove.bind(P(n))),
                (n.handleOnMouseUp = n.handleOnMouseUp.bind(P(n))),
                (n.handleOnTouchCancel = n.handleOnTouchCancel.bind(P(n))),
                (n.handleOnTouchEnd = n.handleOnTouchEnd.bind(P(n))),
                (n.handleOnTouchMove = n.handleOnTouchMove.bind(P(n))),
                (n.handleOnTouchStart = n.handleOnTouchStart.bind(P(n))),
                (n.playBackward = n.playBackward.bind(P(n))),
                (n.playForward = n.playForward.bind(P(n))),
                (n.callCallback = n.callCallback.bind(P(n))),
                (n.blockWindowScroll = n.blockWindowScroll.bind(P(n))),
                (n.state = {
                  cancelNextClick: !1,
                  deltaX: 0,
                  deltaY: 0,
                  isBeingMouseDragged: !1,
                  isBeingTouchDragged: !1,
                  preventingVerticalScroll: !1,
                  startX: 0,
                  startY: 0,
                }),
                (n.interval = null),
                (n.isDocumentScrolling = null),
                (n.moveTimer = null),
                (n.originalOverflow = null),
                (n.scrollParent = null),
                (n.scrollStopTimer = null),
                n
              );
            }
            S(t, e);
            var i = T(t);
            return (
              v(
                t,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.lockOnWindowScroll &&
                        window.addEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1
                        ),
                        (this.props.touchEnabled ||
                          this.props.preventVerticalScrollOnTouch) &&
                          window.addEventListener(
                            "touchmove",
                            this.blockWindowScroll,
                            !1
                          ),
                        document.documentElement.addEventListener(
                          "mouseleave",
                          this.handleOnMouseUp,
                          !1
                        ),
                        document.documentElement.addEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1
                        ),
                        document.documentElement.addEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1
                        ),
                        this.props.isPlaying && this.play();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      !e.isPlaying && this.props.isPlaying && this.play(),
                        e.isPlaying && !this.props.isPlaying && this.stop(),
                        !e.isPageScrollLocked &&
                          this.props.isPageScrollLocked &&
                          this.lockScroll(),
                        e.isPageScrollLocked &&
                          !this.props.isPageScrollLocked &&
                          this.unlockScroll(),
                        !1 === e.privateUnDisableAnimation &&
                          !0 === this.props.privateUnDisableAnimation &&
                          this.props.carouselStore.setStoreState({
                            privateUnDisableAnimation: !1,
                            disableAnimation: !1,
                          });
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      document.documentElement.removeEventListener(
                        "mouseleave",
                        this.handleOnMouseUp,
                        !1
                      ),
                        document.documentElement.removeEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1
                        ),
                        document.documentElement.removeEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1
                        ),
                        window.removeEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1
                        ),
                        window.removeEventListener(
                          "touchmove",
                          this.blockWindowScroll,
                          !1
                        ),
                        this.stop(),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer
                        ),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.isDocumentScrolling = null),
                        (this.moveTimer = null),
                        (this.scrollStopTimer = null);
                    },
                  },
                  {
                    key: "getSliderRef",
                    value: function (e) {
                      this.sliderTrayElement = e;
                    },
                  },
                  {
                    key: "fakeOnDragStart",
                    value: function (e) {
                      var t = e.screenX,
                        i = e.screenY,
                        n = e.touchDrag,
                        r = void 0 !== n && n,
                        a = e.mouseDrag,
                        o = void 0 !== a && a;
                      this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer
                        ),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !0,
                          }),
                        this.setState({
                          isBeingTouchDragged: r,
                          isBeingMouseDragged: o,
                          startX: t,
                          startY: i,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (e, t) {
                      var i = this;
                      this.moveTimer = window.requestAnimationFrame.call(
                        window,
                        function () {
                          i.setState(function (n) {
                            return {
                              deltaX: e - n.startX,
                              deltaY: t - n.startY,
                              preventingVerticalScroll:
                                Math.abs(t - n.startY) <=
                                  i.props.verticalPixelThreshold &&
                                Math.abs(e - n.startX) >=
                                  i.props.horizontalPixelThreshold,
                            };
                          });
                        }
                      );
                    },
                  },
                  {
                    key: "fakeOnDragEnd",
                    value: function () {
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        this.computeCurrentSlide(),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          }),
                        this.setState({
                          deltaX: 0,
                          deltaY: 0,
                          isBeingTouchDragged: !1,
                          isBeingMouseDragged: !1,
                        }),
                        (this.isDocumentScrolling =
                          !this.props.lockOnWindowScroll && null);
                    },
                  },
                  {
                    key: "callCallback",
                    value: function (e, t) {
                      var i = this.props.trayProps;
                      i && "function" == typeof i[e] && (t.persist(), i[e](t));
                    },
                  },
                  {
                    key: "handleOnMouseDown",
                    value: function (e) {
                      this.props.dragEnabled
                        ? (e.preventDefault(),
                          this.fakeOnDragStart({
                            screenX: e.screenX,
                            screenY: e.screenY,
                            mouseDrag: !0,
                          }),
                          this.callCallback("onMouseDown", e))
                        : this.callCallback("onMouseDown", e);
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (e) {
                      this.state.isBeingMouseDragged &&
                        (this.setState({ cancelNextClick: !0 }),
                        e.preventDefault(),
                        this.fakeOnDragMove(e.screenX, e.screenY));
                    },
                  },
                  {
                    key: "handleOnMouseUp",
                    value: function (e) {
                      this.state.isBeingMouseDragged &&
                        (e.preventDefault(), this.fakeOnDragEnd());
                    },
                  },
                  {
                    key: "handleOnClickCapture",
                    value: function (e) {
                      this.state.cancelNextClick
                        ? (e.preventDefault(),
                          this.setState({ cancelNextClick: !1 }),
                          this.callCallback("onClickCapture", e))
                        : this.callCallback("onClickCapture", e);
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (e) {
                      if (this.props.touchEnabled) {
                        "vertical" === this.props.orientation &&
                          e.preventDefault();
                        var t = e.targetTouches[0];
                        this.fakeOnDragStart({
                          screenX: t.screenX,
                          screenY: t.screenY,
                          touchDrag: !0,
                        }),
                          this.callCallback("onTouchStart", e);
                      } else this.callCallback("onTouchStart", e);
                    },
                  },
                  {
                    key: "handleDocumentScroll",
                    value: function () {
                      var e = this;
                      this.props.touchEnabled &&
                        ((this.isDocumentScrolling = !0),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.scrollStopTimer = window.setTimeout(function () {
                          e.isDocumentScrolling = !1;
                        }, 66)));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (e) {
                      if (
                        !this.props.touchEnabled ||
                        (this.props.lockOnWindowScroll &&
                          this.isDocumentScrolling)
                      )
                        this.callCallback("onTouchMove", e);
                      else {
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer
                        );
                        var t = e.targetTouches[0];
                        t &&
                          (this.fakeOnDragMove(t.screenX, t.screenY),
                          this.callCallback("onTouchMove", e));
                      }
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        i = e.step,
                        n = e.totalSlides,
                        r = e.visibleSlides;
                      return Math.min(t + i, n - r);
                    },
                  },
                  {
                    key: "backward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        i = e.step;
                      return Math.max(t - i, 0);
                    },
                  },
                  {
                    key: "handleOnKeyDown",
                    value: function (e) {
                      var t = e.keyCode,
                        i = this.props,
                        n = i.carouselStore,
                        r = i.currentSlide,
                        a = i.disableKeyboard,
                        o = i.totalSlides,
                        s = i.visibleSlides,
                        l = {};
                      !0 === a ||
                        o <= s ||
                        (37 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.max(0, r - 1)),
                          (l.isPlaying = !1)),
                        39 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.min(o - s, r + 1)),
                          (l.isPlaying = !1)),
                        n.setStoreState(l));
                    },
                  },
                  {
                    key: "playForward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        i = e.currentSlide;
                      t.setStoreState({
                        currentSlide: this.forward() === i ? 0 : this.forward(),
                      });
                    },
                  },
                  {
                    key: "playBackward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        i = e.currentSlide,
                        n = e.totalSlides,
                        r = e.visibleSlides;
                      t.setStoreState({
                        currentSlide:
                          this.backward() === i ? n - r : this.backward(),
                      });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var e = this.props.playDirection;
                      this.interval = setInterval(
                        "forward" === e ? this.playForward : this.playBackward,
                        this.props.interval
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      window.clearInterval(this.interval),
                        (this.interval = null);
                    },
                  },
                  {
                    key: "lockScroll",
                    value: function () {
                      var e = new ot();
                      (this.scrollParent = e.getScrollParent(
                        this.sliderTrayElement
                      )),
                        this.scrollParent &&
                          ((this.originalOverflow =
                            this.originalOverflow ||
                            this.scrollParent.style.overflow),
                          (this.scrollParent.style.overflow = "hidden"));
                    },
                  },
                  {
                    key: "unlockScroll",
                    value: function () {
                      this.scrollParent &&
                        ((this.scrollParent.style.overflow =
                          this.originalOverflow),
                        (this.originalOverflow = null),
                        (this.scrollParent = null));
                    },
                  },
                  {
                    key: "blockWindowScroll",
                    value: function (e) {
                      this.state.preventingVerticalScroll &&
                        (e.preventDefault(), e.stopImmediatePropagation());
                    },
                  },
                  {
                    key: "computeCurrentSlide",
                    value: function () {
                      var e = t.slideSizeInPx(
                          this.props.orientation,
                          this.sliderTrayElement.clientWidth,
                          this.sliderTrayElement.clientHeight,
                          this.props.totalSlides
                        ),
                        i = t.slidesMoved(
                          this.props.moveThreshold,
                          this.props.orientation,
                          this.state.deltaX,
                          this.state.deltaY,
                          e,
                          this.props.dragStep
                        ),
                        n =
                          this.props.totalSlides -
                          Math.min(
                            this.props.totalSlides,
                            this.props.visibleSlides
                          ),
                        r = $({
                          min: 0,
                          max: n,
                          x: this.props.currentSlide + i,
                        });
                      this.props.infinite &&
                        (this.props.currentSlide >= n && i > 0 && (r = 0),
                        0 === this.props.currentSlide && i < 0 && (r = n)),
                        this.props.carouselStore.setStoreState({
                          currentSlide: r,
                        });
                    },
                  },
                  {
                    key: "focus",
                    value: function () {
                      this.sliderElement.focus();
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (e) {
                      this.endTouchMove(), this.callCallback("onTouchEnd", e);
                    },
                  },
                  {
                    key: "handleOnTouchCancel",
                    value: function (e) {
                      this.endTouchMove(),
                        this.callCallback("onTouchCancel", e);
                    },
                  },
                  {
                    key: "endTouchMove",
                    value: function () {
                      this.props.touchEnabled && this.fakeOnDragEnd();
                    },
                  },
                  {
                    key: "renderMasterSpinner",
                    value: function () {
                      var e = this.props,
                        t = e.hasMasterSpinner,
                        i = e.masterSpinnerFinished,
                        n = e.spinner;
                      return t && !i
                        ? ("function" == typeof this.props.onMasterSpinner &&
                            this.props.onMasterSpinner(),
                          r.default.createElement(
                            "div",
                            {
                              className: N([
                                st.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            n && n(),
                            !n && r.default.createElement($e, null)
                          ))
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.ariaLabel,
                        n = (t.carouselStore, t.children),
                        a = t.className,
                        o = t.classNameAnimation,
                        s = t.classNameTray,
                        l = t.classNameTrayWrap,
                        c = t.currentSlide,
                        u = t.disableAnimation,
                        d =
                          (t.disableKeyboard,
                          t.dragEnabled,
                          t.hasMasterSpinner,
                          t.interval,
                          t.isPageScrollLocked,
                          t.isPlaying,
                          t.lockOnWindowScroll,
                          t.masterSpinnerFinished,
                          t.moveThreshold,
                          t.naturalSlideHeight),
                        p = t.naturalSlideWidth,
                        m = (t.onMasterSpinner, t.orientation),
                        h =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        g = t.slideTraySize,
                        f = (t.spinner, t.style),
                        b = t.tabIndex,
                        _ = (t.totalSlides, t.touchEnabled, t.trayProps),
                        y = t.trayTag,
                        v = t.visibleSlides,
                        k = t.isIntrinsicHeight,
                        S = A(t, lt),
                        C = w({}, f),
                        R = {};
                      "vertical" === m &&
                        ((R.height = 0),
                        (R.paddingBottom = z((100 * d * v) / p)),
                        (R.width = z(100)));
                      var P = {},
                        O = z(h * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        u) &&
                        (P.transition = "none"),
                        k && ((P.display = "flex"), (P.alignItems = "stretch")),
                        "vertical" === m
                          ? ((P.transform = "translateY("
                              .concat(O, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (P.width = z(100)),
                            (P.flexDirection = "column"))
                          : ((P.width = z(g)),
                            (P.transform = "translateX("
                              .concat(O, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (P.flexDirection = "row"));
                      var T = N([
                          "vertical" === m
                            ? st.verticalSlider
                            : st.horizontalSlider,
                          "carousel__slider",
                          "vertical" === m
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          a,
                        ]),
                        x = N([
                          st.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === m
                            ? st.verticalSlideTrayWrap
                            : st.horizontalTrayWrap,
                          "vertical" === m
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        I = N([
                          st.sliderTray,
                          o || st.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === m
                            ? st.verticalTray
                            : st.horizontalTray,
                          "vertical" === m
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          s,
                        ]),
                        E = null !== b ? b : 0,
                        M =
                          (S.dragStep,
                          S.step,
                          S.infinite,
                          S.preventVerticalScrollOnTouch,
                          S.preventingVerticalScroll,
                          S.horizontalPixelThreshold,
                          S.verticalPixelThreshold,
                          A(S, ct)),
                        D =
                          (_.className,
                          _.onClickCapture,
                          _.onMouseDown,
                          _.onTouchCancel,
                          _.onTouchEnd,
                          _.onTouchMove,
                          _.onTouchStart,
                          _.ref,
                          _.style,
                          A(_, ut));
                      return r.default.createElement(
                        "div",
                        w(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: T,
                            "aria-live": "polite",
                            "aria-label": i,
                            style: C,
                            tabIndex: E,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          M
                        ),
                        r.default.createElement(
                          "div",
                          { className: x, style: R },
                          r.default.createElement(
                            y,
                            w(
                              {
                                ref: this.getSliderRef,
                                className: I,
                                style: P,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              D
                            ),
                            n
                          ),
                          this.renderMasterSpinner()
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "slideSizeInPx",
                    value: function (e, t, i, n) {
                      return ("horizontal" === e ? t : i) / n;
                    },
                  },
                  {
                    key: "slidesMoved",
                    value: function (e, t, i, n, r, a) {
                      var o = "horizontal" === t ? i : n,
                        s = Math.abs(Math.round(o / r)),
                        l = Math.abs(o) >= r * e ? a : 0,
                        c = Math.max(l, s);
                      if (o < 0) return c;
                      var u = -c;
                      return 0 === u ? 0 : u;
                    },
                  },
                ]
              ),
              t
            );
          })(r.default.Component)),
          k(Ze, "propTypes", {
            ariaLabel: K.string,
            carouselStore: K.object.isRequired,
            children: K.node.isRequired,
            className: K.string,
            classNameAnimation: K.string,
            classNameTray: K.string,
            classNameTrayWrap: K.string,
            currentSlide: K.number.isRequired,
            disableAnimation: K.bool,
            disableKeyboard: K.bool,
            dragEnabled: K.bool.isRequired,
            dragStep: K.number,
            hasMasterSpinner: K.bool.isRequired,
            infinite: K.bool,
            interval: K.number.isRequired,
            isPageScrollLocked: K.bool.isRequired,
            isPlaying: K.bool.isRequired,
            lockOnWindowScroll: K.bool.isRequired,
            preventVerticalScrollOnTouch: K.bool,
            horizontalPixelThreshold: K.number,
            verticalPixelThreshold: K.number,
            masterSpinnerFinished: K.bool.isRequired,
            moveThreshold: K.number,
            naturalSlideHeight: K.number.isRequired,
            naturalSlideWidth: K.number.isRequired,
            onMasterSpinner: K.func,
            orientation: Q.orientation.isRequired,
            playDirection: Q.direction.isRequired,
            privateUnDisableAnimation: K.bool,
            slideSize: K.number.isRequired,
            slideTraySize: K.number.isRequired,
            spinner: K.func,
            step: K.number.isRequired,
            style: K.object,
            tabIndex: K.number,
            totalSlides: K.number.isRequired,
            touchEnabled: K.bool.isRequired,
            trayProps: K.shape({
              className: K.string,
              onClickCapture: K.func,
              onMouseDown: K.func,
              onTouchCancel: K.func,
              onTouchEnd: K.func,
              onTouchMove: K.func,
              onTouchStart: K.func,
              ref: K.shape({}),
              style: K.string,
            }),
            trayTag: K.string,
            visibleSlides: K.number,
            isIntrinsicHeight: K.bool,
          }),
          k(Ze, "defaultProps", {
            ariaLabel: "slider",
            className: null,
            classNameAnimation: null,
            classNameTray: null,
            classNameTrayWrap: null,
            disableAnimation: !1,
            disableKeyboard: !1,
            dragStep: 1,
            infinite: !1,
            preventVerticalScrollOnTouch: !0,
            horizontalPixelThreshold: 15,
            verticalPixelThreshold: 10,
            moveThreshold: 0.1,
            onMasterSpinner: null,
            privateUnDisableAnimation: !1,
            spinner: null,
            style: {},
            tabIndex: null,
            trayProps: {},
            trayTag: "div",
            visibleSlides: 1,
            isIntrinsicHeight: !1,
          }),
          Ze),
        pt = G(dt, function (e) {
          return {
            currentSlide: e.currentSlide,
            disableAnimation: e.disableAnimation,
            privateUnDisableAnimation: e.privateUnDisableAnimation,
            disableKeyboard: e.disableKeyboard,
            dragEnabled: e.dragEnabled,
            hasMasterSpinner: e.hasMasterSpinner,
            infinite: e.infinite,
            interval: e.interval,
            isPageScrollLocked: e.isPageScrollLocked,
            isPlaying: e.isPlaying,
            lockOnWindowScroll: e.lockOnWindowScroll,
            preventingVerticalScroll: e.preventingVerticalScroll,
            masterSpinnerFinished: e.masterSpinnerFinished,
            naturalSlideHeight: e.naturalSlideHeight,
            naturalSlideWidth: e.naturalSlideWidth,
            orientation: e.orientation,
            playDirection: e.playDirection,
            slideSize: e.slideSize,
            slideTraySize: e.slideTraySize,
            step: e.step,
            dragStep: e.dragStep,
            totalSlides: e.totalSlides,
            touchEnabled: e.touchEnabled,
            visibleSlides: e.visibleSlides,
            isIntrinsicHeight: e.isIntrinsicHeight,
          };
        });
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i) e[n] = i[n];
        }
        return e;
      }
      var ht,
        gt = (function e(t, i) {
          function n(e, n, r) {
            if ("undefined" !== typeof document) {
              "number" === typeof (r = mt({}, i, r)).expires &&
                (r.expires = new Date(Date.now() + 864e5 * r.expires)),
                r.expires && (r.expires = r.expires.toUTCString()),
                (e = encodeURIComponent(e)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape));
              var a = "";
              for (var o in r)
                r[o] &&
                  ((a += "; " + o),
                  !0 !== r[o] && (a += "=" + r[o].split(";")[0]));
              return (document.cookie = e + "=" + t.write(n, e) + a);
            }
          }
          return Object.create(
            {
              set: n,
              get: function (e) {
                if (
                  "undefined" !== typeof document &&
                  (!arguments.length || e)
                ) {
                  for (
                    var i = document.cookie ? document.cookie.split("; ") : [],
                      n = {},
                      r = 0;
                    r < i.length;
                    r++
                  ) {
                    var a = i[r].split("="),
                      o = a.slice(1).join("=");
                    try {
                      var s = decodeURIComponent(a[0]);
                      if (((n[s] = t.read(o, s)), e === s)) break;
                    } catch (l) {}
                  }
                  return e ? n[e] : n;
                }
              },
              remove: function (e, t) {
                n(e, "", mt({}, t, { expires: -1 }));
              },
              withAttributes: function (t) {
                return e(this.converter, mt({}, this.attributes, t));
              },
              withConverter: function (t) {
                return e(mt({}, this.converter, t), this.attributes);
              },
            },
            {
              attributes: { value: Object.freeze(i) },
              converter: { value: Object.freeze(t) },
            }
          );
        })(
          {
            read: function (e) {
              return (
                '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
              );
            },
            write: function (e) {
              return encodeURIComponent(e).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent
              );
            },
          },
          { path: "/" }
        ),
        ft = gt,
        bt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"Launch App","rubic":"Qubic AI"},"footer":{"community":"community","quickLinks":"Quick links","products":"Products","businessInquiries":"for business inquiries","documentation":"Documentation","submit":"Submit"},"nav":{"claim":"Claim","revokeApproval":"Revoke Approval","pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Team","security":"Security","statistics":"Statistics","contactUs":"Contact Us","sdk":"SDK","widget":"Widget","referralProgram":"Referral Program","setupWidget":"Configure Widget","fiatOnRamp":"Buy Crypto with Fiat","roadmap":"Roadmap","fillOutTheForm":"Fill out the Form","currencies":"All Cryptocurrencies","rbcToken":"QBC Token","docs":"Docs","faq":"FAQ","buyRBC":"Buy QBC","buyBRBC":"Buy BRBC","staking":"Staking","tools":"Tools","stats":"Stats","blog":"Blog","brandAssets":"Brand Assets"},"settings":{"chooseLanguage":"Choose language","languages":"Languages"},"main":{"crossChain":"Best Rate Finder","subtitle":"DEX & Bridge Aggregator + Tools to Enable it for dApps","launchApp":"Launch App","startBuilding":"Learn more"},"advantages":{"multiChainSwaps":"Cross-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Swap assets between multiple blockchains in a single trade","blockchains":"80+ Blockchains","tradeAssets":"Trade 15,500+ Assets","tradeMoreAssetsWithTheLowestGasFees":"Trade more assets, with the lowest gas fees","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"RUBIC AS","rubic":"AN AGGREGATOR","info":"Qubic AI takes the best of crypto and aggregates 70+ DEXs and bridges, providing the best rates, timing, and security - all for you."},"grants":{"rubic":"Qubic AI","grants":"Grants","info":"Qubic AI has won grants from numerous major blockchain platforms."},"audits":{"rubic":"Qubic AI","audits":"Audits","text1":"Qubic AI\'s Multi-Chain contracts have been audited by CertiK.","text2":"Qubic AI\'s Staking contracts have been audited by Fairyproof.","link1":"CertiK\u2019s results","link2":"Fairyproof\u2019s results"},"partnership":{"rubic":"Qubic AI","supports":"supports","dexs":"DEXs","blockchains":"BLOCKCHAINS","bridges":"BRIDGES AND PROVIDERS"},"tools":{"rubic":"Qubic AI\'s","toolsForWeb3":"TOOLS FOR WEB3 AND BEYOND","text1":"One-click tools to get you Cross-Chain - trade your token directly on your platform!","text2":"Founded in 2020, Qubic AI already services over 90 crypto projects with its SDK and widget."},"trade":{"trade":"Trade","yourToken":"your token","directlyOn":"directly on","yourPlatform":"your platform!","getWidget":"Get the Widget","info":"The Qubic AI Relay Widget enables users to buy and sell tokens on any website. Users can easily buy your token, without ever having to leave your website! It\u2019s free and easy to setup; 70+ projects have already integrated it."},"documentation":{"documentation":"Documentation","findOutMore":"Find out more about our Cross-Chain solution and platform.","learnMore":"Learn more"},"subscription":{"subscribeToOurNewsletter":"Subscribe to our Newsletter","receiveTheNewest":"Receive the latest updates","submit":"Submit"},"contact":{"get":"Get","involved":"Involved","contactUsToLearn":"Contact us to learn more about how you can become a validator, develop an application on the network, or integrate your chain.","byClicking":"By clicking the \\"Submit Message\\" button, you automatically agree to the","privacyPolicy":"privacy policy","submitMessage":"Submit Message"},"feedback":{"yourName":"Your name*","emailAddress":"Email address*","telegram":"Telegram account*","companyOrProject":"Company or Project*","companyWebsiteURL":"Company website URL*","selectReason":"Select reason, why are you interested in Qubic AI?*","yourMessage":"Your message to our team","integrateOurBlockchain":"Integrate our blockchain to Qubic AI","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Commerce Deal","ProblemsMultiChainRouting":"Problems with Qubic AI Multi-Chain Routing"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"HAS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK:","title-1":"YOUR RULES","title-highlight-0":"INTEGRATE 20 BLOCKCHAINS IN 30 MINUTES","info":"Integration of Qubic AI\'s SDK gives your users the ability to swap 15,500+ tokens across 20 blockchains directly in your app or on your website.","link":"START INTEGRATION","cards":{"title1":"Who Can Integrate the Qubic AI SDK?","title2":"Why Qubic AI\'s SDK Is Amazing:","Wallets":"Wallets","dApps":"dApps","AnyPlatforms":"Any platform","EarnUpTo":"Profit Sharing: Earn Up To 50% of Fees","GainAWhiteLabel":"100% White Label Solution","FullCustomization":"Full Customization","additionalTrading":"Additional Trading Volume and Revenue"}},"modal":{"WeSentConfirmation":"Thank you!\\n We\'ve sent a confirmation letter to your mail.","theWidgetBecomePromoter":"Become a Promoter","theApplicationHasBeenSubmitted":"Thank you!\\n The application has been submitted","theWidgetOnlySupports":"The widget only supports tokens that are listed at Qubic AI.exchange. In order to be listed, please fill the form. Check docs for selfintegration.","checkDocs":"Check docs","forSelfIntegration":"for selfintegration.","submit":"Submit","ok":"OK"},"referralMain":{"referral":"Referral","program":"Program","becomeAPromoter":"Become a Promoter","info":"Earn on fees from swaps through widgets, and get fixed rewards for successful widget integrations on the websites of referred projects."},"referralAdvantages":{"withoutInvestments":"No Investments","joinOurReferralProgramFreely":"Join our referral program freely","earnOfFees":"Earn 50% of Fees","getProfitsFromAllSwaps":"Get profits from all swaps through the installed widget without limits","getRBC":"Get 500 - 5,000 QBC","receiveFixedRewards":"Receive fixed rewards for each widget integration"},"benefits":{"benefits":"BENEFITS","forProjects":"FOR PROJECTS","text1":"Projects which have integrated the widget through the referral link will receive 30% of the fees from each on-chain transaction.","text2":"Using all the benefits of Qubic AI App directly on projects website.","text3":"By installing the widget, projects will increase their trading volume, boost their token price, attract new users, and new liquidity from other projects and blockchains."},"howToStart":{"howTo":"HOW TO","start":"START","joinTheReferralProgram":"Join the referral program!","becomeARubicPromoter":"Become a Qubic AI promoter","signInThroughYourWallet":"Sign in through your wallet on the Qubic AI dApp and generate a unique referral link.","becomeAPromoter":"Become a Promoter","promoteTheRubicWidget":"Promote the Qubic AI Widget to projects","pitchToRepresentatives":"Pitch to representatives of crypto projects about the unique benefits of the Qubic AI Widget.","getPromoMaterials":"Get promo-materials","getPassiveIncome":"Get passive income!","attractNewProjects":"Attract new projects and get income from each integrated widget on the site of the referred project."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"The Qubic AI Widget enables you to buy and sell any of 15,000+ assets, on and between 12 blockchains in one click, and use all of the features offered by Qubic AI - without ever having to leave the project\u2019s website."},"rules":{"program":"PROGRAM","rules":"RULES","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"To receive a fixed reward, the interested project must be listed on one or more platforms:","text2":"The user who referred the project gets 500 QBC for the successful integration of our widget on the project\u2019s website, and 5,000 QBC if the attracted project is in the Top 1,000 tokens in the overall ranking list on CoinGecko, CoinMarketCap or CoinPaprika","text3":"Integration is completed when the widget is placed on the project website and after at least 10 swaps are made","text4":"Promoters will receive 50% of the fees from widget swaps involving the token of the project which installed the widget","detailedRules":"Detailed rules"},"startDate":{"referralProgram":"REFERRAL PROGRAM","isLive":"IS LIVE!","february":"February 10, 2022","becomeAPromoter":"Become a Promoter"},"widgetConfigurator":{"theme":"Theme","language":"Language","fromAmount":"Initial amount","initialTradeAmount":"Can be used to specify \\n the initial trade amount","fromBlockchain":"From Chain","fromToken":"From Token","toBlockchain":"To Chain","toToken":"To Token","hideSelectionFrom":"Hide selection from","hideSelectionTo":"Hide selection to","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Allows you to lock the token \\n selection in the widget","fee":"Fee","feeReceiverAddress":"Fee receiver address","walletAddress":"Wallet address to \\n receive the fees","display":"Display","instantTrades":"Instant trades slippage, %","slippageForInstantTrades":"Allows you to set default slippage \\n for Instant Trades","multiChain":"Multi chain slippage, %","slippageForMultiChain":"Allows you to set default slippage \\n for Multi-Chain","apply":"Apply","seeFullInstruction":"See full instruction on","configuration":"Configuration","installation":"Installation","background":"Background","advancedSettings":"Advanced Settings","tokenSearch":"Enable token search","tokenSearchClue":"Display the token search window","rubicLink":"Enable Qubic AI App link","rubicLinkClue":"Display a link to the main application","feeTargetText1":"To receive commissions for cross-chain transactions,","feeTargetText2":"contact us","feeTargetText3":"to add the address to the white list"},"statistics":{"rubic":"RUBIC\'S","statistics":"STATISTICS","info":"Check out the Statistics of Qubic AI\u2019s Multi-Chain Protocol","totalMultiChainVolume":"Total Multi-Chain Volume","supportedAssets":"Supported Assets","totalUsers":"Total Users","totalValueLocked":"Total Value Locked","totalLiquidityVolume":"Total Liquidity Volume","apr":"APR","upTo":"UP to"},"staking":{"mainScreen":{"title":"QUBIC STAKING","subtitle":"EARN UP TO 30-100% APR IN ETH"},"features":{"title":"NEW STAKING FEATURES:","button":"Read the Full Rules"}},"currencies":{"title":"CRYPTOCURRENCIES","exchangeFrom":"Exchange From","exchangeTo":"Exchange To","availableForExchange":"Available For Exchange","tooltip":"Select a Token to Exchange for proceeding","swapNow":"Swap Now","showMore":"Show more"},"widget":{"title-highlight":"Widget:","title":"Start Fast","subtitle":"Integrate 20 blockchains and 15,500+ tokens in 10 minutes","text1":"Your users can buy tokens directly on your website, they don\'t have to go to an external provider (no need for a CEX, DEX or bridge).","text2":"Any newly launched token is either automatically listed because of 70+ DEX aggregations or can be listed manually in a couple of minutes.","text3":"70+ projects have already integrated Qubic AI\'s widget on their websites.","button":"START INTEGRATION"}}'
        ),
        _t = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"Launch app"},"footer":{"community":"community","about":"about","products":"Produkte","businessInquiries":"f\xfcr gesch\xe4ftliche Anfragen"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Team","securityAudit":"Sicherheit & Audit","statistics":"Statistiken","contactUs":"Uns Kontaktieren","sdk":"SDK","referralProgram":"Referral Programm","setupWidget":"Widget Einrichtung","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"F\xfcllen Sie das Formular aus"},"settings":{"chooseLanguage":"Sprache w\xe4hlen","languages":"Sprachen"},"main":{"multiChain":"Multi-chain","swap":"swap","protocol":"protokoll ","info":"Qubic AI ist ein Multi-Chain Swap Protokoll, dass es erm\xf6glicht jeden von 15.500+ assets auf und zwischen 18 verschiedenen Blockchains zu tauschen."},"advantages":{"multiChainSwaps":"Multi-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Tauschen Sie assets zwischen verschiedenen Blockchains in einem einzigen trade","blockchains":"18 Blockchains","tradeAssets":"Trading von 15,500+ Assets","tradeMoreAssetsWithTheLowestGasFees":"Handeln Sie mit mehr W\xe4hrungen, mit den geringsten Geb\xfchren","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"Was ist","rubic":"Qubic AI","info":"Qubic AI ist das Multi-Chain-Swap-Protokoll, das es Benutzern erm\xf6glicht, mit \xfcber 15.000+ Assets auf Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR und Telos zu handeln \u2013 alles mit einem Klick. Unser Protokoll bietet zudem Zugang zu \xfcber 60 DEXs, Fiat-on-Ramps und Bridges."},"grants":{"rubic":"Qubic AI","grants":"Grants","info":"Qubic AI wurde mit mehreren grants von namenhaften Blockchain Plattformen ausgezeichnet, wie beispielsweise"},"audits":{"rubic":"Qubic AI","audits":"Audits","text1":"Rubics Multi-Chain contracts wurden vom CertiK team gepr\xfcft.","text2":"Rubics Staking contracts wurden vom Fairyproof team gepr\xfcft.","link1":"CertiK Ergebnisse","link2":"Fairyproof Ergebnisse"},"partnership":{"rubic":"Qubic AI","supports":"unterst\xfctzt","dexs":"DEXs","blockchains":"BLOCKCHAINS"},"trade":{"trade":"Handeln","yourToken":"Sie tokens","directlyOn":"direkt auf","yourPlatform":"Ihrer Plattform!","getWidget":"Holen Sie sich das widget","info":"Das Qubic AI Relay Widget erm\xf6glicht es Benutzern, Token auf jeder Website zu kaufen und zu verkaufen. Benutzer k\xf6nnen Ihr Token ganz einfach kaufen, ohne jemals Ihre Website verlassen zu m\xfcssen! Es ist kostenlos und einfach einzurichten; \xdcber 40 Projekte haben es bereits integriert."},"documentation":{"documentation":"Dokumentation","findOutMore":"Finden Sie mehr \xfcber unsere Multi-Chain solution und Plattform heraus.","learnMore":"Mehr erfahren"},"subscription":{"subscribeToOurNewsletter":"Unseren Newsletter abonnieren","receiveTheNewest":"Aktuelle updates \xfcber unser Staking-Programm erhalten","submit":"Abonnieren"},"contact":{"get":"Selber","involved":"mitmachen","contactUsToLearn":"Kontaktieren Sie uns, um mehr dar\xfcber zu erfahren, wie Sie Validator werden, eine Anwendung auf einem Blockchain-Netzwerk entwickeln oder Ihre Chain integrieren k\xf6nnen.","byClicking":"Durch klicken auf den \\"Submit Message\\" button stimmen Sie automatisch der","privacyPolicy":"privacy policy zu","submitMessage":"Nachricht einsenden"},"feedback":{"yourName":"Ihr Name*","emailAddress":"Email adresse*","telegram":"Telegram account*","companyOrProject":"Unternehmen oder Projekt*","companyWebsiteURL":"Unternehmens website URL*","selectReason":"Was ist der Grund Ihrer Kontaktaufnahme?*","yourMessage":"Ihre Nachricht an unser Team","integrateOurBlockchain":"Unsere Blockchain in Qubic AI integrieren","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Commerce Deal","ProblemsMultiChainRouting":"Probleme mit dem Qubic AI Multi-Chain Routing"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"9 BLOCKCHAINS IN 30 MIN INTEGRIEREN","info":"Das Qubic AI SDK bietet On-Chain- und Multi-Chain-Swaps zu den bestm\xf6glichen Preisen. 50\xa0% der Provision von Qubic AI gehen an Partner. Die Integration ist kostenlos!","link":"INTEGRATION STARTEN","cards":{"title1":"Wer kann das Qubic AI SDK integrieren?","title2":"Vorteile des Qubic AI SDKs","Wallets":"Wallets","dApps":"dApps","AnyPlatforms":"Alle platforms","EarnUpTo":"Bis zu 50% der Geb\xfchren einnehmen","GainAWhiteLabel":"Als White Label Solution bekommen","FullCustomization":"Vollumf\xe4ngliche Customization"}},"widget":{"title":"Ein minimum\\n von","title-highlight":"ist n\xf6tig, um am Staking teilzunehmen"},"modal":{"WeSentConfirmation":"Vielen Dank!\\n Wir haben eine Best\xe4tigung an Ihre Email gesendet.","theWidgetBecomePromoter":"Ein Promoter werden","theApplicationHasBeenSubmitted":"Vielen Dank!\\n Die Anfrage wurde eingereicht.","theWidgetOnlySupports":"Das Widget unterst\xfctzt nur Token, die bei Qubic AI.exchange gelistet sind. Um gelistet zu werden, f\xfcllen Sie bitte das Formular aus. \xdcberpr\xfcfen Sie die Dokumente zur eigenst\xe4ndigen Integration.","checkDocs":"Docs zur","forSelfIntegration":"eigenst\xe4ndigen Integration anschauen","submit":"Absenden","ok":"OK"},"referralMain":{"referral":"Referral","program":"Programm","becomeAPromoter":"Ein Promoter werden","info":"Verdienen Sie Geb\xfchren durch Swaps durch Widgets und erhalten Sie feste Belohnungen f\xfcr erfolgreiche Widget-Integrationen auf den Websites der durch Sie empfohlene Projekte."},"referralAdvantages":{"withoutInvestments":"Ohne Investments","joinOurReferralProgramFreely":"Treten Sie unserem Referral Programm kostenfrei bei","earnOfFees":"Verdienen Sie 50% der Geb\xfchren","getProfitsFromAllSwaps":"Nehmen Sie Profite von allen, durch die installierten Widgets durchgef\xfchrten, Swaps ein - ohne limit","getRBC":"Erhalten Sie 500 - 5.000 QBC","receiveFixedRewards":"Erhalten Sie feste Belohnungen f\xfcr jede erfolgreiche Widget Integration"},"benefits":{"benefits":"VORTEILE","forProjects":"F\xdcR PROJEKTE","text1":"Projekte, die das Widget \xfcber den Empfehlungslink integriert haben, erhalten 30% der Geb\xfchren f\xfcr jede On-Chain-Transaktion.","text2":"Nutzen Sie alle Vorteile der Qubic AI App direkt auf der Projektwebsite.","text3":"Durch die Installation des Widgets erh\xf6hen Projekte ihr Handelsvolumen, erh\xf6hen die Token-Preise, ziehen neue Benutzer und Liquidit\xe4t aus anderen Projekten und Blockchains an."},"howToStart":{"howTo":"WIE","start":"STARTEN?","joinTheReferralProgram":"Dem Referral-Programm beitreten!","becomeARubicPromoter":"Ein Qubic AI Promoter werden","signInThroughYourWallet":"Melden Sie sich \xfcber Ihre Wallet in der Qubic AI App an und generieren Sie einen einzigartigen Empfehlungslink.","becomeAPromoter":"Ein Promoter werden","promoteTheRubicWidget":"Das Qubic AI Widgets bei Projekten bewerben","pitchToRepresentatives":"Sprechen Sie mit Vertretern von Krypto-Projekten \xfcber die einzigartigen Vorteile von Qubic AI Widget.","getPromoMaterials":"Promo-material erhalten","getPassiveIncome":"Passives Einkommen generieren!","attractNewProjects":"Ziehen Sie neue Projekte an und erhalten Sie Einnahmen aus jedem integrierten Widget auf der Website des geworbenen Projekts."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Mit dem Qubic AI Widget k\xf6nnen Sie \xfcber 15.000+ Assets auf und zwischen 12 Blockchains mit einem Klick kaufen und verkaufen und alle Funktionen von Qubic AI Exchange nutzen, ohne die Website verlassen zu m\xfcssen."},"rules":{"program":"PROGRAMM","rules":"REGELN","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Um eine feste Pr\xe4mie zu erhalten, m\xfcssen geworbene Projekte auf einer oder mehreren Plattformen gelistet sein:","text2":"Der Benutzer, der das Projekt geworben hat, erh\xe4lt 500 QBC f\xfcr die erfolgreiche Integration des Widgets auf der Projektwebsite oder 5.000 QBC, wenn das geworbene Projekt unter den Top 1.000 Token im Gesamtranking auf CoinGecko, CoinMarketCap oder CoinPaprika ist.","text3":"Die Integration ist abgeschlossen, wenn das Widget auf der Projektwebsite platziert und durch es mindestens 10 Mal getradet wurde","text4":"Der Promoter erh\xe4lt 50\xa0% der Geb\xfchren in Form des Token des Projekts, das das Widget installiert hat","detailedRules":"Detaillierte Regeln"},"startDate":{"referralProgram":"DAS REFERRAL PROGRAMM","isLive":"IST LIVE!","february":"10. FEBRUAR 2022","becomeAPromoter":"Ein Promoter werden"},"widgetConfigurator":{"theme":"Theme","language":"Sprache","fromAmount":"Input Menge","initialTradeAmount":"Kann verwendet werden, um \\n einen voreingestellten Handelsbetrag anzugeben","fromBlockchain":"Von der blockchain","fromToken":"Vom token","toBlockchain":"Zur blockchain","toToken":"Zum token","hideSelectionFrom":"Ausblenden der Auswahl von","hideSelectionTo":"Ausblenden der Auswahl nach","allowsYouToLock":"Erm\xf6glicht Ihnen, die Token-\\n-Auswahl im Widget zu sperren","fee":"Geb\xfchr","feeReceiverAddress":"Adresse zum Erhalt der Geb\xfchren","walletAddress":"Wallet Adresse, auf der die Geb\xfchren ausgezahlt werden","display":"Anzeigen","instantTrades":"Instant trades slippage, %","slippageForInstantTrades":"Erlaubt Ihnen einen slippage f\xfcr instant trades voreinzustellen","multiChain":"Multi chain slippage, %","slippageForMultiChain":"Erlaubt Ihnen einen slippage f\xfcr multi-chain trades voreinzustellen","apply":"Anwenden"},"statistics":{"rubic":"RUBIC\'S","statistics":"STATISTIKEN","info":"Schauen Sie sich die Statistiken des Multi-Chain Protokoll von Qubic AI an","totalMultiChainVolume":"Multi-Chain Volumen Insgesamt","supportedAssets":"Unterst\xfctzte Assets","totalUsers":"User Insgesamt","totalValueLocked":"Total Value Locked","apr":"APR","upTo":"BIS zu"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"ERSTE RUNDE","text-0":"Stelle BRBC und USDC bereit","text-1":"und erhalte USDC Pr\xe4mien mit bis zu 27% APR","button":"BRBC KAUFEN"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"DIE ERSTE RUNDE HAT BEGONNEN","button":"\xdanete ahora"},"statistics":{"title-0":"ERHALTE BIS ZU","title-highlight-0":"27% APR","title-1":"MIT USDC","text":"Qubic AI erhebt eine Geb\xfchr von 0,3 % f\xfcr Multi-Chain-Transaktionen, die unter den Liquidity-Providing-Teilnehmern verteilt wird"},"widget":{"title-0":"NUR","title-highlight-0":"BRBC HOLDER","title-1":"SIND","title-highlight-1":"ZUR TEILNAHME BERECHTIGT","text":"Erwerbe zwischen 2,000 bis 20,000 BRBC, um an unserem Liquidity-Providing-Programm teilzunehmen"},"prepare":{"title-highlight-0":"WIE KANN ICH","title-0":"AN RUBIC\'S LP TEILNEHMEN?","step1":{"title-0":"Erwerbe","title-highlight-0":"BRBC","title-1":"Tokens und","title-highlight-1":"USDC","text":"Die erste Runde des Liquidity Providing wird 2 Monate lang und nach dem Prinzip Wer zuerst kommt, mahlt zuerst durchgef\xfchrt","button":"BRBC KAUFEN"},"step2":{"title-highlight-0":"Liquidit\xe4t Bereitstellen","title-0":"indem du Deine BRBC und USDC sperrst","text":"Das Verh\xe4ltnis f\xfcr Einzahlungen betr\xe4gt 1 USDC : 4 BRBC","button":"Jetzt Teilnehmen"},"step3":{"title-0":"Die erste Runde des Liquidity Providing ist Begrenzt auf","title-highlight-0":"800.000 USDC","text":"Fr\xfchere Teilnehmer der ersten Staking-Runde werden f\xfcr die Bereitstellung von Liquidit\xe4t auf die Whitelist gesetzt. Das Abrufen dieser Whitelist-Pl\xe4tze von 500 bis 800 USDC wird 24 Stunden lang m\xf6glich sein","link":"Mehr erfahren"}},"subscription":{"title":"Bleiben Sie auf dem Laufenden \xfcber Rubics Programm zum Liquidity Providing","text":"Abonniere den Newsletter, um die neuesten Updates \xfcber das Liquidity Providing zu erhalten"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING","title-0":"ERSTE RUNDE","title-0_lp_started":"DIE ERSTE RUNDE HAT BEGONNEN","text":"Stelle BRBC und USDC bereit und erhalte USDC Pr\xe4mien mit bis zu 27% APR","features":{"0":"Einzahlungsbetrag","1":"APR","2":"LP-Koeffizient"},"duration":{"title":"STARTET AM"},"button":"MEHR ERFAHREN"}}}'
        ),
        yt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"Lancer l\'app"},"footer":{"community":"communaut\xe9","about":"\xc0 propos","products":"Produits","businessInquiries":"proposition commerciale"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"\xc9quipe","securityAudit":"S\xe9curit\xe9 & Audit","statistics":"Statistiques","contactUs":"Contactez Nous","sdk":"SDK","referralProgram":"Programme d\'affiliation","setupWidget":"Configuration du Widget","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Feuille de Route","fillOutTheForm":"Remplir le Formulaire"},"settings":{"chooseLanguage":"Choisissez la langue","languages":"Langues"},"main":{"multiChain":"Protocole","swap":"d\'\xe9change","protocol":"Multi-Cha\xeenes","info":"Qubic AI est LE protocole d\'\xe9changes Multi-Cha\xeenes qui vous permet d\'\xe9changer plus de 15\'500 jetons sur 18 blockchains, et tout cela en un clic."},"advantages":{"multiChainSwaps":"Swaps Multi-Cha\xeenes","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"\xc9changez vos jetons sur de multiples blockchains en un clic","blockchains":"18 Blockchains","tradeAssets":"\xc9changez plus de 15\'500 jetons","tradeMoreAssetsWithTheLowestGasFees":"\xc9changez un maximum de jetons avec un minimum de gaz","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"Qu\'est-ce que","rubic":"Qubic AI","info":"Qubic AI est LE protocole d\'\xe9changes Multi-Cha\xeenes qui vous permet d\'\xe9changer plus de 15\'000+ jetons sur les chaines Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, MoonRiver, Fantom, Solana, Arbitrum, Aurora, NEAR et Telos - et tout cela en un clic. Qubic AI s\'appuie sur plus de 60 DEXs, vous offre la possibilit\xe9 d\'acheter des cryptomonnaies directement en euros (Fiat-on-Ramp), et divers bridges."},"grants":{"rubic":"Qubic AI","grants":" - Nos r\xe9compenses","info":"Qubic AI a remport\xe9 des prix de blockchains de premier plan tels que"},"audits":{"rubic":"Qubic AI","audits":"Audits","text1":"Les contrats Multi-Cha\xeenes de Qubic AI ont \xe9t\xe9 audit\xe9s par CertiK.","text2":"Les contrats Stacking de Qubic AI ont \xe9t\xe9 audit\xe9s par Fairyproof.","link1":"Consulter l\'audit de CertiK","link2":"Consulter l\'audit de Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"est compatible avec","dexs":"DEXs","blockchains":"BLOCKCHAINS"},"trade":{"trade":"\xc9changez","yourToken":"votre jeton","directlyOn":"directement sur","yourPlatform":"votre plateforme!","getWidget":"Installer le Widget","info":"Le Qubic AI Relay Widget permet \xe0 tous d\'acheter ou de vendre des jetons sur n\'importe quel site web. Vos visiteurs peuvent acheter, vendre sans m\xeame avoir \xe0 quitter votre site! C\'est gratuit et facile \xe0 installer; plus de 40 projets ont d\xe9j\xe0 install\xe9 notre widget."},"documentation":{"documentation":"Documentation","findOutMore":"En savoir plus sur notre plateforme et notre solution Multi-Cha\xeenes.","learnMore":"En savoir plus"},"subscription":{"subscribeToOurNewsletter":"Souscrire \xe0 notre newsletter","receiveTheNewest":"Recevoir les derni\xe8res infos concernant le staking","submit":"S\'inscrire"},"contact":{"get":"Je souhaite","involved":"un partenariat","contactUsToLearn":"Contactez nous pour en savoir plus sur comment devenir un validateur, exploiter toute la puissance de Qubic AI dans votre webapp, ou encore int\xe9grer votre cha\xeene.","byClicking":"En cliquant sur le bouton \\"Envoyer\\", vous d\xe9clarez accepter la","privacyPolicy":"Politique de confidentialit\xe9","submitMessage":"Envoyer"},"feedback":{"yourName":"Votre nom*","emailAdress":"Adresse email*","telegram":"Compte Telegram*","companyOrProject":"Entreprise ou Projet*","companyWebsiteURL":"URL de l\'entreprise ou du projet","selectReason":"En quoi Qubic AI vous int\xe9resse ? S\xe9lectionner la raison*","yourMessage":"Votre message \xe0 notre \xe9quipe","integrateOurBlockchain":"Int\xe9grer notre blockchain \xe0 Qubic AI","MultiChainSwapProtocol":"Int\xe9grer le protocole multi-cha\xeenes de Qubic AI \xe0 mon projet","CommerceDeal":"Partenariat commercial","ProblemsMultiChainRouting":"Probl\xe8me avec le routage multi-cha\xeenes de Qubic AI"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"INT\xc9GREZ 9 BLOCKCHAINS EN 30 MIN","info":"Le SDK de Qubic AI offre \xe0 vos utilisateurs des \xe9changes sur cha\xeene et Multi-Cha\xeenes, aux meilleurs taux. 50% des frais pr\xe9lev\xe9s par Qubic AI reviennent au projet partenaire. L\'int\xe9gration du SDK est gratuite!","link":"COMMENCER L\'INT\xc9GRATION","cards":{"title1":"Qui peut int\xe9grer le SDK de Qubic AI?","title2":"B\xe9n\xe9fices du SDK de Qubic AI","Wallets":"Portefeuilles","dApps":"dApps","AnyPlatforms":"Projets divers","EarnUpTo":"Recevez jusqu\'\xe0 50% des frais","GainAWhiteLabel":"Solution en marque blanche pour votre projet","FullCustomization":"Enti\xe8rement personnalisable"}},"widget":{"title":"Acheter un minimum\\n de","title-highlight":"pour participer au staking"},"modal":{"WeSentConfirmation":"Merci !\\n Une confirmation vous a \xe9t\xe9 envoy\xe9e par email.","theWidgetBecomePromoter":"Devenir ambassadeur","theApplicationHasBeenSubmitted":"Merci !\\n Votre demande a \xe9t\xe9 envoy\xe9e","theWidgetOnlySupports":"Le widget n\'est compatible qu\'avec les jetons list\xe9s sur Qubic AI.exchange. Pour \xeatre list\xe9, veuillez remplir le formulaire ci-dessous.\\n Voir la documentation pour int\xe9grer Qubic AI \xe0 votre projet.","checkDocs":"Voir la documentation","forSelfIntegration":"pour int\xe9grer Qubic AI \xe0 votre projet.","submit":"Envoyer","ok":"OK"},"referralMain":{"referral":"Programme","program":"d\'affiliation","becomeAPromoter":"Devenir un ambassadeur","info":"Touchez un pourcentage des frais des \xe9changes r\xe9alis\xe9s via les widgets install\xe9s, et une commission fixe pour chaque widget install\xe9 sur un projet partenaire."},"referralAdvantages":{"withoutInvestments":"Sans investissement","joinOurReferralProgramFreely":"Rejoignez notre programme d\'affiliation","earnOfFees":"Gagnez 50% des frais","getProfitsFromAllSwaps":"Gagnez de l\'argent gr\xe2ce aux \xe9changes r\xe9alis\xe9s via les widgets install\xe9s, sans limite","getRBC":"Gagnez 500 - 5\'000 QBC","receiveFixedRewards":"Recevez des r\xe9compenses fixes pour chaque widget int\xe9gr\xe9"},"benefits":{"benefits":"PROJETS AFFILI\xc9S,","forProjects":"LES AVANTAGES","text1":"Les projets int\xe9grant le widget via votre lien d\'affiliation recevront 30% des frais sur chaque transaction on-chain.","text2":"Mettez toute la puissance du protocole de Qubic AI directement au service de votre projet.","text3":"Augmentez votre volume d\'\xe9change, boostez le prix de votre jeton, attirez de nouveaux utilisateurs et des liquidit\xe9s provenant d\'autres projets et blockchains."},"howToStart":{"howTo":"COMMENT","start":"COMMENCER?","joinTheReferralProgram":"Rejoignez le programme d\'affiliation!","becomeARubicPromoter":"Devenir ambassadeur de Qubic AI","signInThroughYourWallet":"Connectez votre portefeuille sur l\'App Qubic AI et g\xe9n\xe9rez votre lien unique d\'affiliation.","becomeAPromoter":"Devenir un ambassadeur","promoteTheRubicWidget":"Promouvez le Qubic AI Widget aupr\xe8s de projets cryptos","pitchToRepresentatives":"Faites d\xe9couvrir les avantages uniques de Qubic AI aux projets cryptos.","getPromoMaterials":"Mat\xe9riel promotionnel","getPassiveIncome":"Gagnez des revenus passifs!","attractNewProjects":"Attirez de nouveaux projets et gagnez des revenus tir\xe9s des widgets int\xe9gr\xe9s aux projets que vous avez affili\xe9s."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Le Qubic AI Widget permet \xe0 n\'importe qui d\'acheter ou vendre plus de 15\'000 jetons \xe0 travers 12 blockchains en un clic. Permettez \xe0 vos visiteurs de profiter pleinement de l\'exp\xe9rience Qubic AI sans m\xeame avoir \xe0 quitter votre site web."},"rules":{"program":"R\xe8gles du ","rules":"programme","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Pour recevoir une commission fixe, le projet affili\xe9 doit \xeatre list\xe9 sur une des plateformes suivantes:","text2":"L\'ambassadeur qui affilie le projet re\xe7oit 500 QBC pour l\'int\xe9gration du widget sur le site web du projet, ou 5\'000 QBC si le projet affili\xe9 est dans le top 1\'000 des jetons r\xe9f\xe9renc\xe9s sur CoinGecko, CoinMarketCap ou CoinPaprika","text3":"L\'int\xe9gration du widget est compl\xe8te quand le widget est en place sur le site web du projet, et qu\'il a permis au moins 10 \xe9changes","text4":"L\'ambassadeur re\xe7oit 50% des frais provenant des \xe9changes du widget concernant ce jeton","detailedRules":"R\xe8gles d\xe9taill\xe9es"},"startDate":{"referralProgram":"LE PROGRAMME \\n D\'AFFILIATION","isLive":"EST OUVERT","february":"le 10 f\xe9vrier 2022","becomeAPromoter":"Devenir un ambassadeur"},"widgetConfigurator":{"theme":"Th\xe8me","language":"Langue","fromAmount":"Montant par d\xe9faut","initialTradeAmount":"Peut-\xeatre utilis\xe9 pour sp\xe9cifier \\n le montant par d\xe9faut","fromBlockchain":"de la blockchain","fromToken":"du jeton","toBlockchain":"vers la blockchain","toToken":"vers le jeton","hideSelectionFrom":"Cacher la s\xe9lection de la provenance","hideSelectionTo":"Cacher la s\xe9lection de la destination","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Vous permet de forcer le jeton \\n s\xe9lectionn\xe9 dans le widget","fee":"frais","feeReceiverAddress":"Adresse du b\xe9n\xe9ficiaire des frais","walletAddress":"Adresse du portefeuille \\n o\xf9 seront vers\xe9s les frais","display":"Affichage","instantTrades":"Slippage pour les \xe9changes instantan\xe9s, en %","slippageForInstantTrades":"Vous permet de fixer la tol\xe9rance au glissement du prix \\n pour les \xe9changes instantan\xe9s","multiChain":"Slippage pour les \xe9changes multi-cha\xeenes, en %","slippageForMultiChain":"Vous permet de fixer la tol\xe9rance au glissement du prix \\n pour les \xe9changes multi-cha\xeenes","apply":"Appliquer"},"statistics":{"rubic":"RUBIC","statistics":"LES STATISTIQUES","info":"Consultez ci-dessous les statistiques du Protocole Multi-Cha\xeenes de Qubic AI","totalMultiChainVolume":"Volume Total Multi-Cha\xeenes","supportedAssets":"Jetons Compatibles","totalUsers":"Utilisateurs","totalValueLocked":"Valeur Totale Bloqu\xe9e","apr":"APR","upTo":"JUSQU\'\xc0"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"LE 1ER ROUND","text-0":"Fournissez BRBC et USDC pour","text-1":"\xeatre r\xe9compens\xe9s en USDC jusqu\'\xe0 27% d\'APR","button":"ACHETEZ DU BRBC"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"LE 1ER ROUND A D\xc9BUT\xc9","button":"PARTICIPER"},"statistics":{"title-0":"GAGNEZ JUSQU\'\xc0","title-highlight-0":"27% D\'APR","title-1":"AVEC DE L\'USDC","text":"Qubic AI facture 0.3% de frais sur les \xe9changes Multi-Cha\xeenes, qui sont distribu\xe9s aux fournisseurs de Liquidit\xe9s"},"widget":{"title-0":"SEULS LES","title-highlight-0":"D\xc9TENTEURS DE BRBC","title-1":"SONT","title-highlight-1":"\xc9LIGIBLES AU PROGRAMME","text":"Achetez de 2,000 \xe0 20,000 BRBC pour participer au Programme de Liquidity Providing"},"prepare":{"title-highlight-0":"COMMENT PARTICIPER","title-0":"AU PROGRAMME LP DE RUBIC","step1":{"title-0":"Achetez","title-highlight-0":"des jetons","title-1":"BRBC et","title-highlight-1":"USDC","text":"Le premier round de Liquidity Providing dure 2 mois et sera sur la base du Premier Arriv\xe9 Premier Servi","button":"ACHETER DES BRBC"},"step2":{"title-highlight-0":"Fournissez des Liquidit\xe9s","title-0":"en bloquant vos BRBC et USDC","text":"Le ratio de d\xe9p\xf4t est de 1 USDC : 4 BRBC","button":"Participer"},"step3":{"title-0":"Le Premier Round de Liquidity Providing est Limit\xe9 \xe0","title-highlight-0":"800,000 USDC","text":"Les participants du round de Staking pr\xe9c\xe9dent seront whitelist\xe9s pour le programme de Liquidity Providing. Une allocation de 500 \xe0 800 USDC leur est r\xe9serv\xe9e pour 24h","link":"En savoir plus"}},"subscription":{"title":"Suivez le Programme de Liquidity Providing de Qubic AI","text":"Souscrivez pour obtenir les derni\xe8res news \xe0 propos du Programme de Liquidity Providing"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1ER ROUND","title-0_lp_started":"LE 1ER ROUND A D\xc9BUT\xc9","text":"Fournissez BRBC et USDC pour \xeatre r\xe9compens\xe9s en USDC jusqu\'\xe0 27% d\'APR","features":{"0":"Montant D\xe9pos\xe9","1":"APR","2":"Coefficient LP"},"duration":{"title":"COMMENCE LE"},"button":"EN SAVOIR PLUS"}}}'
        ),
        vt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"TRY NOW"},"header":{"launchApp":"Uygulamay\u0131 ba\u015flat"},"footer":{"community":"topluluk","about":"hakk\u0131nda","products":"\xfcr\xfcn","businessInquiries":"i\u015f sorular\u0131 i\xe7in"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Tak\u0131m","securityAudit":"G\xfcvenlik ve Denetim","security":"Security","statistics":"\u0130statistik","contactUs":"Bizimle Ileti\u015fime Ge\xe7in","sdk":"SDK","referralProgram":"Y\xf6nlendirme Program\u0131","setupWidget":"Kurulum Widget\'\u0131","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"Formu Doldur","currencies":"All Cryptocurrencies","rbcToken":"QBC Token","docs":"Docs","faq":"FAQ","buyRBC":"Buy QBC","buyBRBC":"Buy BRBC","staking":"Staking"},"settings":{"chooseLanguage":"Dil se\xe7iniz","languages":"Diller"},"main":{"oneClick":"One-click","crossChain":"Cross-chain","info":"Qubic AI, tek bir t\u0131klamayla 18 blok zinciri aras\u0131nda 15.500\'den fazla token al\u0131\u015fveri\u015fi yapman\u0131z\u0131 sa\u011flar","startTrading":"DE\u011eI\u015eIM","cards":{"card-1":{"title":"Kullan\u0131c\u0131 i\xe7in iyi","text-1":"Tek bir i\u015flemle blok zincirleri aras\u0131nda token de\u011fi\u015fimi","text-2":"\u0130\u015flem limiti yok","text-3":"Kullan\u0131c\u0131 dostu aray\xfcz","text-4":"7/24 destek","text-5":"Otomatik geri \xf6demeler"},"card-2":{"title":"K\xe2rl\u0131 ve H\u0131zl\u0131","text-1":"90 saniyelik ortalama \xe7al\u0131\u015fma s\xfcresi","text-2":"70+ DEX ve k\xf6pr\xfcler en iyi oran\u0131 sa\u011flar","text-3":"5.000\'den fazla QBC sahibi olanlar i\xe7in \xfccret yok (yak\u0131nda)"},"card-3":{"title":"En iyi Ortaklar Aras\u0131 \xe7\xf6z\xfcm","text-1":"\xd6zelle\u015ftirme ile widget\'lar\u0131n ve SDK\'lar\u0131n e\u011flenceli kurulumu","text-2":"Platformda sizin i\xe7in zincirler aras\u0131 \xe7\xf6z\xfcmlerin kolay entegrasyonu","text-3":"Teklif b\xfcy\xfckl\xfc\u011f\xfc ve geliri","text-4":"\xc7apraz Zincir De\u011fi\u015fimleri i\xe7in y\xfczde elliye kadar faiz al\u0131n."},"card-4":{"title":"G\xfcvenilir","text-1":"Bir toplay\u0131c\u0131 olarak Qubic AI, otomatik izleme yoluyla g\xfcvenli\u011fi garanti eder. Ve bir tehdit durumunda operasyon engellenir.","text-2":"Qubic AI, Certik ve Fairyproof taraf\u0131ndan denetlenen a\xe7\u0131k kaynakl\u0131 bir sitedir"}}},"advantages":{"multiChainSwaps":"Cross-Chain Takas","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Tek bir ticarette birden fazla blok zinciri aras\u0131nda varl\u0131klar\u0131 de\u011fi\u015ftirin","blockchains":"18 Blok Zinciri","tradeAssets":"15.500+ Varl\u0131kla \u0130\u015flem Yap\u0131n","tradeMoreAssetsWithTheLowestGasFees":"En d\xfc\u015f\xfck gaz \xfccretleri ile daha fazla varl\u0131k ticareti yap\u0131n","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"RUBIC","rubic":"toplay\u0131c\u0131 platform","info":"RUBIC: en pop\xfcler tokenleri, 70\'den fazla DEX ve k\xf6pr\xfcy\xfc birle\u015ftirerek karl\u0131 \xfccretler, h\u0131zl\u0131 i\u015flemler ve g\xfcvenilir bir \xe7\xf6z\xfcm garanti eder - t\xfcm bunlar S\u0130Z\u0130N i\xe7in!"},"grants":{"rubic":"Qubic AI","grants":"s\xfcbvansiyonlar","info":"Qubic AI, en b\xfcy\xfck blok zincirlerinden baz\u0131lar\u0131ndan \xe7ok say\u0131da s\xfcbvansiyona sahiptir."},"audits":{"rubic":"Qubic AI","audits":"Denetimleri","text1":"Qubic AI\'in s\xf6zle\u015fmeleri Chertik ekibi taraf\u0131ndan denetlendi.","text2":"Steaking s\xf6zle\u015fmeleri Fairyproof ekibi taraf\u0131ndan denetlendi","link1":"Visit CertiK\u2019s results","link2":"Visit Fairyproof\u2019s results"},"partnership":{"rubic":"Qubic AI","supports":"destekler","dexs":"DEXs","blockchains":"BLOCKCHAINS","bridges":"Bridges"},"tools":{"rubic":"Qubic AI \xe7\xf6z\xfcmleri","toolsForWeb3":"WEB3 ve daha fazlas\u0131 i\xe7in","text1":"Tek bir t\u0131klamayla sitenize bir \xc7apraz Zincir \xe7\xf6z\xfcm\xfc y\xfckleyin!","text2":"2020\'de \xfcretilen Qubic AI, Qubic AI SDK ve Widget ile 70\'in \xfczerinde kripto projesinin i\u015flevselli\u011fini \u015fimdiden geni\u015fletti"},"trade":{"trade":"Ticaret","yourToken":"senin jetonun","directlyOn":"do\u011frudan","yourPlatform":"sizin platformunuz!","getWidget":"Ara\xe7lar\u0131 al\u0131n","info":"Qubic AI Relay Widget, kullan\u0131c\u0131lar\u0131n herhangi bir web sitesinde jeton al\u0131p satmas\u0131na olanak tan\u0131r. Kullan\u0131c\u0131lar, web sitenizden ayr\u0131lmak zorunda kalmadan jetonunuzu kolayca sat\u0131n alabilir! \xdccretsizdir ve kurulumu kolayd\u0131r; 40+ proje zaten entegre edildi."},"documentation":{"documentation":"belgeler","findOutMore":"Multi-Chain \xe7\xf6z\xfcm\xfcm\xfcz ve platformumuz hakk\u0131nda daha fazla bilgi edinin.","learnMore":"Daha fazla bilgi edin"},"subscription":{"subscribeToOurNewsletter":"Haber b\xfcltenimize abone ol","receiveTheNewest":"Staking hakk\u0131nda en son g\xfcncellemeleri al\u0131n","submit":"G\xf6ndermek"},"contact":{"get":"Elde etmek","involved":"\u0130lgili","contactUsToLearn":"Nas\u0131l do\u011frulay\u0131c\u0131 olabilece\u011finiz, a\u011f \xfczerinde bir uygulama geli\u015ftirebilece\u011finiz veya zincirinizi nas\u0131l entegre edebilece\u011finiz hakk\u0131nda daha fazla bilgi edinmek i\xe7in bizimle ileti\u015fime ge\xe7in.","byClicking":"\\"Mesaj G\xf6nder\\" d\xfc\u011fmesini t\u0131klayarak, a\u015fa\u011f\u0131dakileri otomatik olarak kabul edersiniz.","privacyPolicy":"Gizlilik Politikas\u0131","submitMessage":"Mesaj\u0131 g\xf6nder"},"feedback":{"yourName":"\u0130smin*","emailAddress":"Mail Adres*","telegram":"Telegram hesab\u0131*","companyOrProject":"\u015eirket veya Proje*","companyWebsiteURL":"\u015eirket website URL*","selectReason":"Nedenini se\xe7in, neden Qubic AI ile ilgileniyorsunuz?*","yourMessage":"Ekibimize mesaj\u0131n\u0131z","integrateOurBlockchain":"Blok zincirinizi Qubic AI\'e entegre edin","MultiChainSwapProtocol":"Multi-chain takas protokol\xfc","CommerceDeal":"Ticaret Anla\u015fmas\u0131","ProblemsMultiChainRouting":"Qubic AI Multi-Chain y\xf6nlendirme ile ilgili sorunlar"},"launch":{"end":{"title":"Genel kurallar (Ayr\u0131nt\u0131lar a\u015fa\u011f\u0131da)","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK:","title-1":"KURALLARINIZ","title-highlight-0":"Yar\u0131m saat i\xe7inde 13 blok zinciri entegre edin","info":"Qubic AI SDK entegrasyonu, kullan\u0131c\u0131lar\u0131n\u0131z\u0131n sitenizden ayr\u0131lmadan 13 blok zinciri aras\u0131nda 15.000\'den fazla token al\u0131\u015fveri\u015fi yapmas\u0131n\u0131 sa\u011flayacakt\u0131r!","link":"B\xdcT\xdcNLE\u015eT\u0130R","cards":{"title1":"Qubic AI\'s SDK\'y\u0131 kimler entegre edebilir","title2":"Qubic AI SDK neden gereklidir?","Wallets":"C\xfczdanlar","dApps":"dApps","AnyPlatforms":"Di\u011fer projeler","EarnUpTo":"Gelirlerinizi art\u0131r\u0131n: komisyonlar\u0131n y\xfczde ellisine kadar\u0131n\u0131 al\u0131n","GainAWhiteLabel":"y\xfczde y\xfcz \\"beyaz eti\u0307ket\\" \xe7\xf6z\xfcm\xfc","FullCustomization":"Tam \xf6zelle\u015ftirme","additionalTrading":"Teklif b\xfcy\xfckl\xfc\u011f\xfc ve gelir"}},"modal":{"WeSentConfirmation":"Te\u015fekk\xfcrler!\\n Postan\u0131za bir onay mektubu g\xf6nderdik.","theWidgetBecomePromoter":"Organizat\xf6r Olun","theApplicationHasBeenSubmitted":"Te\u015fekk\xfcrler!\\n Ba\u015fvuru g\xf6nderildi","theWidgetOnlySupports":"Widget yaln\u0131zca Qubic AI.exchange\'te listelenen belirte\xe7leri destekler. Listede yer alabilmek i\xe7in l\xfctfen formu doldurunuz. Kendi kendine entegrasyon i\xe7in dok\xfcmanlar\u0131 kontrol edin.","checkDocs":"Dok\xfcmanlar\u0131 kontrol et","forSelfIntegration":"kendi kendine entegrasyon i\xe7in..","submit":"G\xf6ndermek","ok":"OK"},"referralMain":{"referral":"Referans","program":"Program","becomeAPromoter":"Become a Promoter","info":"Widget\'lar arac\u0131l\u0131\u011f\u0131yla takaslardan \xfccret kazan\u0131n ve y\xf6nlendirilen projelerin web sitelerinde ba\u015far\u0131l\u0131 widget entegrasyonlar\u0131 i\xe7in sabit \xf6d\xfcller kazan\u0131n."},"referralAdvantages":{"withoutInvestments":"Yat\u0131r\u0131ms\u0131z","joinOurReferralProgramFreely":"Referans program\u0131m\u0131za \xf6zg\xfcrce kat\u0131l\u0131n","earnOfFees":"Komisyon \xf6demelerinin %50\'sini Kazan\u0131n","getProfitsFromAllSwaps":"Y\xfckl\xfc widget arac\u0131l\u0131\u011f\u0131yla t\xfcm takaslardan s\u0131n\u0131rs\u0131z kar elde edin","getRBC":"500 - 5.000 QBC al\u0131n","receiveFixedRewards":"Her widget entegrasyonu i\xe7in sabit \xf6d\xfcller al\u0131n"},"benefits":{"benefits":"FAYDALAR","forProjects":"PROJELER \u0130\xc7\u0130N","text1":"Widget\'\u0131 y\xf6nlendirme ba\u011flant\u0131s\u0131 arac\u0131l\u0131\u011f\u0131yla entegre eden projeler, her bir onchain i\u015fleminde \xfccretlerin %30\'unu alacakt\u0131r.","text2":"Qubic AI App\'in t\xfcm avantajlar\u0131n\u0131 do\u011frudan projelerin web sitesinde kullanmak.","text3":"Widget\'\u0131 kurarak projeler ticaret hacimlerini art\u0131racak, jeton fiyatlar\u0131n\u0131 art\u0131racak, yeni kullan\u0131c\u0131lar ve di\u011fer projelerden ve blok zincirlerinden likidite \xe7ekecek."},"howToStart":{"howTo":"NASIL","start":"Ba\u015flat?","joinTheReferralProgram":"Tavsiye program\u0131na kat\u0131l\u0131n!","becomeARubicPromoter":"Qubic AI destek\xe7isi olun","signInThroughYourWallet":"Qubic AI Uygulamas\u0131nda c\xfczdan\u0131n\u0131z \xfczerinden oturum a\xe7\u0131n ve benzersiz bir y\xf6nlendirme ba\u011flant\u0131s\u0131 olu\u015fturun.","becomeAPromoter":"Organizat\xf6r Olun","promoteTheRubicWidget":"Qubic AI Widget\'\u0131 projelere tan\u0131t\u0131n","pitchToRepresentatives":"Qubic AI Widget\'\u0131n benzersiz faydalar\u0131 hakk\u0131nda kripto projelerinin temsilcilerine sat\u0131\u015f konu\u015fmas\u0131 yap\u0131n.","getPromoMaterials":"Promosyon malzemeleri al\u0131n","getPassiveIncome":"Pasif gelir elde edin!","attractNewProjects":"Yeni projeler \xe7ekin ve at\u0131fta bulunulan projenin sitesindeki her bir entegre widget\'tan gelir elde edin."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI Widget, tek bir t\u0131klamayla 13 blok zinciri \xfczerinde ve aras\u0131nda 15.000\'den fazla varl\u0131ktan herhangi birini al\u0131p satman\u0131za ve web sitesinden ayr\u0131lmak zorunda kalmadan Qubic AI Exchange\'in t\xfcm \xf6zelliklerini kullanman\u0131za olanak tan\u0131r."},"rules":{"program":"PROGRAM","rules":"T\xdcZ\xdcK","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Sabit bir \xf6d\xfcl almak i\xe7in \xe7ekilen proje bir veya daha fazla platformda listelenmelidir:","text2":"Projeyi y\xf6nlendiren kullan\u0131c\u0131, widget\'\u0131n proje web sitesine ba\u015far\u0131l\u0131 bir \u015fekilde entegrasyonu i\xe7in 500 QBC veya \xe7ekilen proje CoinGecko, CoinMarketCap veya CoinPaprika\'daki genel s\u0131ralamada \u0130lk 1.000 token i\xe7indeyse 5.000 QBC al\u0131r","text3":"Widget proje web sitesine yerle\u015ftirildi\u011finde ve en az 10 swap yap\u0131ld\u0131ktan sonra entegrasyon tamamlan\u0131r","text4":"Organizat\xf6r, widget\'\u0131 kuran projenin jetonundaki takaslardan %50 oran\u0131nda \xfccret alacakt\u0131r","detailedRules":"Ayr\u0131nt\u0131l\u0131 kurallar"},"startDate":{"referralProgram":"REFERANS PROGRAMI","isLive":"CANLI!","february":"10 \u015eubat 2022","becomeAPromoter":"Organizat\xf6r Olun"},"widgetConfigurator":{"theme":"Tema","language":"Dil","fromAmount":"Miktardan","initialTradeAmount":"\u0130lk i\u015flem miktar\u0131n\u0131 \\n belirtmek i\xe7in kullan\u0131labilir","fromBlockchain":"Blok zincirinden","fromToken":"Tokenden","toBlockchain":"Blok zincirine","toToken":"Tokene","hideSelectionFrom":"Se\xe7imi \u015furadan gizle:","hideSelectionTo":"Se\xe7imi \u015furaya gizle:","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Widget\'ta belirte\xe7 se\xe7imini \\n kilitlemenizi sa\u011flar","fee":"\xdccret","feeReceiverAddress":"\xdccret al\u0131c\u0131 adresi","walletAddress":"\xdccretleri almak i\xe7in \\n c\xfczdan adresi","display":"G\xf6r\xfcnt\xfclemek","instantTrades":"Anl\u0131k i\u015flem kaymas\u0131, %","slippageForInstantTrades":"An\u0131nda \u0130\u015flemler i\xe7in varsay\u0131lan kayma \\n ayarlaman\u0131za olanak tan\u0131r","multiChain":"Multi chain kayma, %","slippageForMultiChain":"\xc7oklu Zincir i\xe7in varsay\u0131lan kayma \\n ayarlaman\u0131za izin verir","apply":"Uygulamak","seeFullInstruction":"See full instruction on"},"statistics":{"rubic":"RUBIC\'in","statistics":"\u0130STAT\u0130ST\u0130K","info":"Qubic AI\'in Multi-Chain Protokol\xfcn\xfcn \u0130statistiklerine g\xf6z at\u0131n","totalMultiChainVolume":"Toplam Multi-Chain Hacmi","supportedAssets":"Desteklenen Varl\u0131klar","totalUsers":"Toplam Kullan\u0131c\u0131lar","totalValueLocked":"Toplam Kilitli De\u011fer","totalLiquidityVolume":"Total Liquidity Volume","apr":"APR","upTo":"Kadar"},"staking":{"features":{"0":{"title":"En y\xfcksek APR: y\xfczde elli sekiz","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"En az bir say\u0131","text":"Farkl\u0131 d\xf6nemler i\xe7in istiflemeye kat\u0131l\u0131n: 3, 6, 9 ve 12 ay. Programa birka\xe7 farkl\u0131 d\xf6nemde birka\xe7 kez kat\u0131labileceksiniz.","text2":"Farkl\u0131 d\xf6nemler i\xe7in istiflemeye kat\u0131l\u0131n: 3, 6, 9 ve 12 ay. Programa birka\xe7 farkl\u0131 d\xf6nemde birka\xe7 kez kat\u0131labileceksiniz."},"2":{"title":"Her hafta \xf6d\xfcller","text":"Ba\u015far\u0131lar saniyede bir kez verilir, ancak haftal\u0131k olarak geri \xe7ekilebilir // (Ba\u015far\u0131lar haftal\u0131k olarak verilir ve en az\u0131ndan belirli bir zamanda geri \xe7ekilebilir)"}},"page":{"coming":{"staking":"STAKING 3.0","is":"IS","title-highlight":"COMING SOON","button":"Read Full Rules","learnMore":"Learn more"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"1ST ROUND HAS STARTED","button":"JOIN NOW"},"about":{"title":"WHAT IS RUBIC","title-highlight":"STAKING 3.0?"},"widget":{"title":"easily on rubic.exchange","title-highlight":"GET BRBC"},"prepare":{"title-highlight":"TO PREPARE","title":"HOW","button":"START STAKING","step1":{"title-highlight-0":"Get","title":"BRBC","title-highlight-1":"Tokens","text":"You can easily obtain them via the Qubic AI app at the link below!","button":"BUY BRBC"},"step2":{"title-highlight":"Follow the News","text":"Good news, our staking pools will remain uncapped! For the latest updates, subscribe to Telegram, Medium, and our newsletter, in order to become the first to receive the latest news about staking!","button":"Join Now"},"step3":{"title-highlight":"Stake your tokens on August, the 5th","text":"The Staking contract will be deployed on the BNB Chain. Users can deposit any amount of BRBC at any time - minimum 1 BRBC. Users can\u2019t withdraw deposited BRBC until the chosen period ends."},"step4":{"title-highlight":"Get your personal NFT","text":"After depositing BRBC, users will receive an NFT which contains information about the period and the amount of tokens deposited. An NFT can be transferred to any user/contract."}},"subscription":{"title":"Stay Tuned to Qubic AI\u2019s Liquidity Providing Updates","text":"Subscribe to get the latest news about Liquidity Providing"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1ST ROUND","title-0_lp_started":"1ST ROUND HAS STARTED","text":"Provide BRBC and USDC to get USDC rewards up to 27% APR","features":{"0":"Deposit Amount","1":"APR","2":"LP Coefficient"},"duration":{"title":"STARTS ON"},"button":"LEARN MORE"}}},"currencies":{"title":"\u0421ryptocurrencies supported by Qubic AI Exchange","exchangeFrom":"Exchange From","exchangeTo":"Exchange To","availableForExchange":"Available For Exchange","tooltip":"Select a Token to Exchange for proceeding","swapNow":"SWAP NOW","showMore":"Show More"},"widget":{"title-highlight":"WIDGET:","title":"DAHA DA HIZLI","subtitle":"10 dakika i\xe7inde 13 blok zinciri ve 15.000\'den fazla token entegre edin","text1":"Kullan\u0131c\u0131lar\u0131n gereksiz CEX, DEX veya k\xf6pr\xfcleri aramak zorunda kalmadan web sitenizden token almalar\u0131na izin verin.","text2":"Yeni jetonlar 60\'tan fazla yerle\u015fik DEX kullan\u0131larak otomatik olarak veya sadece birka\xe7 dakika i\xe7inde manuel olarak eklenebilir.","text3":"50\'den fazla proje Qubic AI Widget\'\u0131 entegre etmi\u015f durumda.","button":"B\xdcT\xdcNLE\u015eT\u0130R"}}'
        ),
        kt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"TRY NOW"},"header":{"launchApp":"Aplicaci\xf3n"},"footer":{"community":"Comunidad","about":"Acerca de","products":"Productos","businessInquiries":"Para propuestas comerciales"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Equipo","securityAudit":"Seguridad y Auditor\xeda","security":"Seguridad","statistics":"Statistics","contactUs":"Cont\xe1ctenos","sdk":"SDK","referralProgram":"Programa de Referencias","setupWidget":"Configurar Widget","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"Completa el Formulario","currencies":"All Cryptocurrencies","rbcToken":"QBC Token","docs":"Docs","faq":"FAQ","buyRBC":"Buy QBC","buyBRBC":"Buy BRBC","staking":"Staking"},"settings":{"chooseLanguage":"Seleccionar idioma","languages":"Idioma"},"main":{"oneClick":"One-click","crossChain":"Cross-chain","info":"Qubic AI le permite intercambiar m\xe1s de 15,500 tokens en 18 blockchains con un solo clic","startTrading":"INTERCAMBIAR","cards":{"card-1":{"title":"Bueno para el usuario","text-1":"Intercambio de tokens entre cadenas de bloques en una sola transacci\xf3n Dec","text-2":"Sin l\xedmite de transacciones","text-3":"Interfaz f\xe1cil de usar","text-4":"Soporte 24/7","text-5":"Reembolsos autom\xe1ticos"},"card-2":{"title":"Rentable y R\xe1pido","text-1":"Duraci\xf3n media de 90 segundos","text-2":"M\xe1s de 70 DEX e hiperv\xednculos proporcionan la mejor relaci\xf3n","text-3":"sin cargos para aquellos que poseen m\xe1s de 5,000 QBC."},"card-3":{"title":"La mejor Soluci\xf3n cruzada para socios","text-1":"Juguet\xf3n en la instalaci\xf3n de widgets y SDK con personalizaci\xf3n","text-2":"F\xe1cil integraci\xf3n de soluciones de cadena Cruzada para usted en la plataforma","text-3":"Tama\xf1o de la oferta y los ingresos","text-4":"Obtenga hasta el cincuenta por ciento de inter\xe9s para Intercambios entre cadenas"},"card-4":{"title":"Confiable","text-1":"Como agregador, Qubic AI garantiza la seguridad a trav\xe9s de la supervisi\xf3n autom\xe1tica. Y en caso de una amenaza, la operaci\xf3n se bloquea.","text-2":"Qubic AI es un sitio de c\xf3digo abierto supervisado por Certik y Fairyproof"}}},"advantages":{"multiChainSwaps":"Cross-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Swap assets between multiple blockchains in a single trade","blockchains":"18 Blockchains","tradeAssets":"Comercia m\xe1s de 15,500 activos","tradeMoreAssetsWithTheLowestGasFees":"Comercia m\xe1s activos, con menores gas fees","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"RUBIC AS","rubic":"plataforma agregador","info":"RUBIC: combina los tokens m\xe1s populares, 70 + DEX y puentes, garantizando tasas rentables, transacciones r\xe1pidas y una soluci\xf3n confiable. \xa1Todo esto es para TI!"},"grants":{"rubic":"Qubic AI","grants":"De Cubo","info":"Qubic AI tiene una gran cantidad de subsidios de algunas de las cadenas de bloques m\xe1s grandes."},"audits":{"rubic":"Qubic AI","audits":"De Auditor\xedas ","text1":"Los contratos de Qubic AI fueron auditados por el equipo de Certik","text2":"Los contratos de steaking fueron auditados por el equipo Fairyproof.","link1":"Ver los resultados de Certik","link2":"Ver los resultados de Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"admite","dexs":"DEXs","blockchains":"BLOCKCHAINS","bridges":"Bridges"},"tools":{"rubic":"Qubic AI\'s","toolsForWeb3":"Soluciones de Qubic AI para WEB3 y m\xe1s","text1":"\xa1Instale una soluci\xf3n de cadena cruzada en su sitio con un solo clic!","text2":"Producido en 2020, Qubic AI ya ha ampliado la funcionalidad de m\xe1s de 70 proyectos de cifrado con el SDK y el Widget de Qubic AI"},"trade":{"trade":"Comercie","yourToken":"Su token","directlyOn":"directamente en","yourPlatform":"Su plataforma!","getWidget":"Obt\xe9n el Widget","info":"El Qubic AI Relay Widget permite a los usuarios comprar y vender tokens en cualquier sitio web. Los usuarios pueden facilmente comprar tu token sin necesidad de salir de tu sitio web! Es gratis y f\xe1cil de configurar; m\xe1s de 40 proyectos ya lo han integrado."},"documentation":{"documentation":"Documentaci\xf3n","findOutMore":"Obtenga m\xe1s informaci\xf3n sobre nuestra plataforma y soluci\xf3n Multi-Chain.","learnMore":"Aprende m\xe1s"},"subscription":{"subscribeToOurNewsletter":"Subscr\xedbete a nuestro Newsletter","receiveTheNewest":"Recibe las \xfaltimas actualizaciones sobre el staking","submit":"Enviar"},"contact":{"get":"Obtener","involved":"Informaci\xf3n","contactUsToLearn":"Cont\xe1ctenos para obtener m\xe1s informaci\xf3n sobre c\xf3mo puede convertirse en un validador, desarrollar una aplicac\xf3n en la red o integrar su cadena.","byClicking":"Al hacer click en el bot\xf3n de \\"Enviar mensaje\\", automaticamente est\xe1s de acuerdo con","privacyPolicy":"pol\xedtica de privacidad","submitMessage":"Enviar mensaje"},"feedback":{"yourName":"Su nombre*","emailAdress":"Direcci\xf3n de email","telegram":"Cuenta de telegram*","companyOrProject":"Proyecto o compa\xf1ia*","companyWebsiteURL":"URL del sitio web de la compa\xf1ia*","selectReason":"Seleccione el motivo, \xbfPor qu\xe9 est\xe1 interesado en Qubic AI?*","yourMessage":"Su mensaje para nuestro equipo","integrateOurBlockchain":"Integrar nuestra blockchain a Qubic AI","MultiChainSwapProtocol":"Multi-chain Swap Protocol","CommerceDeal":"Acuerdo comercial","ProblemsMultiChainRouting":"Problemas con el enrutamiento multi-chain de Qubic AI"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK:","title-1":"SUS REGLAS","title-highlight-0":"Integra 13 blockchains en media hora","info":"La integraci\xf3n de Qubic AI SDK permitir\xe1 a sus usuarios intercambiar m\xe1s de 15,000 tokens en 13 blockchains sin salir de su sitio.","link":"INTEGRAR","cards":{"title1":"Qui\xe9n puede integrar el SDK de Qubic AI","title2":"Por qu\xe9 Qubic AI SDK es necesario:","Wallets":"Monederos","dApps":"dApps","AnyPlatforms":"Otros proyectos","EarnUpTo":"Aumente sus ingresos: obtenga hasta el cincuenta por ciento de las comisiones","GainAWhiteLabel":"cien por ciento\\" etiqueta blanca \\" soluci\xf3n","FullCustomization":"Personalizaci\xf3n completa","additionalTrading":"Tama\xf1o de la licitaci\xf3n y los ingresos"}},"modal":{"WeSentConfirmation":"\xa1Gracias!\\n Hemos enviado una carta de confirmaci\xf3n a su correo.","theWidgetBecomePromoter":"Convertirse en un promotor","theApplicationHasBeenSubmitted":"\xa1Gracias!\\n Su aplicaci\xf3n ha sido enviada","theWidgetOnlySupports":"El widget solo admite tokens listados en Qubic AI.exchange. para ser listados, por favor llene el formulario. Lea los documentos para integrarse as\xed mismo.","checkDocs":"Revisar documentos","forSelfIntegration":"para integrarse as\xed mismo.","submit":"Enviar","ok":"OK"},"referralMain":{"referral":"Referencias","program":"Programa de","becomeAPromoter":"Convi\xe9rtase en un promotor","info":"Gane comisiones de intercambios a trav\xe9s de los widgets y obtenga recompensas por integraciones exitosas en los sitios webs de los proyectos referidos."},"referralAdvantages":{"withoutInvestments":"Sin inversiones","joinOurReferralProgramFreely":"\xdanete a nuestro programa de referidos gratuitamente","earnOfFees":"Gana 50% de las comisiones","getProfitsFromAllSwaps":"Obt\xe9n ganancias de todos los intercambios a trav\xe9s del widget instalado sin l\xedmites","getRBC":"Obt\xe9n 500 - 5,000 QBC","receiveFixedRewards":"Recibe recompensas por cada integraci\xf3n del widget"},"benefits":{"benefits":"BENEFICIOS","forProjects":"POR PROYECTOS","text1":"Los proyectos que han integrado el widget a trav\xe9s del link de referidos recibir\xe1n 30% de las comisiones por cada trasacci\xf3n de on-chain.","text2":"Utilizando todos los beneficios de la aplicaci\xf3n de Qubic AI directamente en el sitio web de los proyectos.","text3":"Al instalar el widget, los proyectos incrementar\xe1n sus volumenes de comercio, aumentar\xe1n los precios de los tokens, atraer\xe1 nuevos usuarios y liquidez de otros proyectos y blockchains."},"howToStart":{"howTo":"\xbfC\xd3MO","start":"COMENZAR?","joinTheReferralProgram":"\xa1\xdanete a nuestro programa de referidos!","becomeARubicPromoter":"Convi\xe9rtase en un promotor de Qubic AI","signInThroughYourWallet":"Inicia sesi\xf3n a trav\xe9s de tu billetera en la aplicaci\xf3n de Qubic AI y genera un link de referidos \xfanico.","becomeAPromoter":"Convi\xe9rtase en un promotor","promoteTheRubicWidget":"Promociona el widget de Qubic AI a los proyectos","pitchToRepresentatives":"Explica a los representantes de los proyectos crypto sobre los beneficios \xfanicos del widget de Qubic AI.","getPromoMaterials":"Obt\xe9n materiales de promoci\xf3n","getPassiveIncome":"\xa1Obt\xe9n ganancias pasivas!","attractNewProjects":"Atrae nuevos proyectos y obt\xe9n ganancias de cada widget en el sitio web de los proyectos referidos."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"El Qubic AI Relay Widget le permite comprar o vender cualquiera de los +15,000 activos, entre 13 blockchains en un solo click y usar las funciones de Qubic AI Exchange sin necesidad de abandonar el sitio web."},"rules":{"program":"DEL PROGRAMA","rules":"REGLAS","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Para reecibir una recompensa inmediata, el proyecto referido debe estar listado en una o m\xe1s plataformas:","text2":"El usuario que refiri\xf3 el proyecto, obtiene 500 QBC por la integraci\xf3n exitosa del widget en el sitio web del proyecto o 5,000 QBC si el proyecto referido est\xe1 en el Top 1,000 de tokens en el ranking general de CoinGecko, CoinMarketCap o CoinPaprika","text3":"La integraci\xf3n es completa cuando el widget est\xe1 en el sitio web y despues de realizar al menos 10 intercambios","text4":"El promotor obtendr\xe1 50% de las comisiones de los intercambios en el token del proyecto que instal\xf3 el widget","detailedRules":"Reglas detalladas"},"startDate":{"referralProgram":"\xa1EL PROGRAMA DE REFERIDOS","isLive":"EST\xc1 DISPONIBLE!","february":"Febrero 10 de 2022","becomeAPromoter":"Convertirse en promotor"},"widgetConfigurator":{"theme":"Tema","language":"Idioma","fromAmount":"Monto inicial","initialTradeAmount":"Puede ser usado para especificar \\n el monto inicial del comercio","fromBlockchain":"Blockchain inicial","fromToken":"Token inicial","toBlockchain":"Blockchain de destino","toToken":"Token de destino","hideSelectionFrom":"Ocultar la selecci\xf3n de inicio","hideSelectionTo":"Ocultar la selecci\xf3n de destino","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Le permite bloquear la selecci\xf3n \\n del token en el widget","fee":"Comisiones","feeReceiverAddress":"Direcci\xf3n del destinatario de la comisi\xf3n","walletAddress":"Direcci\xf3n de billetera para \\n recibir las comisiones","display":"Mostrar","instantTrades":"Deslizamiento de operaciones instant\xe1neas, %","slippageForInstantTrades":"Le permite establecer el deslizamineto predeterminado \\n para operaciones instant\xe1neas","multiChain":"Deslizamiento de multi-chain, %","slippageForMultiChain":"Le permite establecer el deslizamiento predeterminado \\n para multi-chain","apply":"Aplicar","seeFullInstruction":"See full instruction on"},"statistics":{"rubic":"DE RUBIC","statistics":"ESTAD\xcdSTICAS","info":"Observa las estad\xedsticas de Qubic AI\'s Multi-Chain Protocol","totalMultiChainVolume":"Volumen Multi-Chain Total","supportedAssets":"Activos Admitidos","totalUsers":"Usuarios Totales","totalValueLocked":"Valor Total Bloqueado","totalLiquidityVolume":"Total Liquidity Volume","apr":"APR","upTo":"HASTA"},"staking":{"features":{"0":{"title":"APR m\xe1s alto: cincuenta y ocho por ciento","text":"APR predecible de hasta el cincuenta y ocho por ciento (cuando se apilan durante 12 meses con un Tama\xf1o de grupo de hasta 10 M BRBC)"},"1":{"title":"Al menos un n\xfamero","text":"Participe en el apilamiento durante diferentes per\xedodos: 3, 6, 9 y 12 meses. Usted ser\xe1 capaz de participar en el programa un par de veces durante varios per\xedodos diferentes.","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"M\xe9ritos cada semana","text":"Los m\xe9ritos se otorgan una vez por segundo, pero con la capacidad de retirarlos semanalmente // (M\xe9ritos semanalmente con la capacidad de retirarlos al menos en alg\xfan momento)"}},"page":{"coming":{"staking":"STAKING 3.0","is":"IS","title-highlight":"COMING SOON","button":"Read Full Rules","learnMore":"Learn more"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"1ST ROUND HAS STARTED","button":"JOIN NOW"},"about":{"title":"WHAT IS RUBIC","title-highlight":"STAKING 3.0?"},"widget":{"title":"easily on rubic.exchange","title-highlight":"GET BRBC"},"prepare":{"title-highlight":"TO PREPARE","title":"HOW","button":"START STAKING","step1":{"title-highlight-0":"Get","title":"BRBC","title-highlight-1":"Tokens","text":"You can easily obtain them via the Qubic AI app at the link below!","button":"BUY BRBC"},"step2":{"title-highlight":"Follow the News","text":"Good news, our staking pools will remain uncapped! For the latest updates, subscribe to Telegram, Medium, and our newsletter, in order to become the first to receive the latest news about staking!","button":"Join Now"},"step3":{"title-highlight":"Stake your tokens on August, the 5th","text":"The Staking contract will be deployed on the BNB Chain. Users can deposit any amount of BRBC at any time - minimum 1 BRBC. Users can\u2019t withdraw deposited BRBC until the chosen period ends."},"step4":{"title-highlight":"Get your personal NFT","text":"After depositing BRBC, users will receive an NFT which contains information about the period and the amount of tokens deposited. An NFT can be transferred to any user/contract."}},"subscription":{"title":"Stay Tuned to Qubic AI\u2019s Liquidity Providing Updates","text":"Subscribe to get the latest news about Liquidity Providing"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1ST ROUND","title-0_lp_started":"1ST ROUND HAS STARTED","text":"Provide BRBC and USDC to get USDC rewards up to 27% APR","features":{"0":"Deposit Amount","1":"APR","2":"LP Coefficient"},"duration":{"title":"STARTS ON"},"button":"LEARN MORE"}}},"currencies":{"title":"\u0421ryptocurrencies supported by Qubic AI Exchange","exchangeFrom":"Exchange From","exchangeTo":"Exchange To","availableForExchange":"Available For Exchange","tooltip":"Select a Token to Exchange for proceeding","swapNow":"SWAP NOW","showMore":"Show More"},"widget":{"title-highlight":"Widget:","title":"A\xdaN M\xc1S R\xc1PIDO","subtitle":"integre 13 blockchains y m\xe1s de 15,000 tokens en 10 minutos","text1":"Permita que los usuarios reciban tokens de su sitio web sin tener que buscar CEX, DEX o hiperv\xednculos innecesarios.","text2":"Los nuevos tokens se pueden agregar autom\xe1ticamente utilizando m\xe1s de 60 DEX incorporados o manualmente en solo unos minutos.","text3":"m\xe1s de 50 proyectos han integrado el Widget Qubic AI.","button":"INTEGRAR"}}'
        ),
        wt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"App i\u015f\u0259 sal\u0131n"},"footer":{"community":"ictimaiyy\u0259t","about":"HAQQIMIZDA","products":"M\u0259hsullar","businessInquiries":"i\u015fg\xfczar sor\u011fular \xfc\xe7\xfcn"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Komanda","securityAudit":"T\u0259hl\xfck\u0259sizlik v\u0259 Audit","statistics":"Statistikalar","contactUs":"Biziml\u0259 \u018flaq\u0259 Saxlay\u0131n","sdk":"SDK","referralProgram":"Istinad Proqram\u0131","setupWidget":"Widget Qura\u015fd\u0131r\u0131n","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"Forman\u0131 Doldurun"},"settings":{"chooseLanguage":"Dil se\xe7in","languages":"Dill\u0259r"},"main":{"multiChain":"Multi-chain","swap":"swap","protocol":"protocol","info":"Qubic AI, bir klikl\u0259 18 blockchain v\u0259 ya aras\u0131nda 15,500+ aktivd\u0259n h\u0259r hans\u0131 birini d\u0259yi\u015fdirm\u0259y\u0259 imkan ver\u0259n Multi-Chain Swap Protocol."},"advantages":{"multiChainSwaps":"Multi-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Bir ticar\u0259td\u0259 bird\u0259n \xe7ox blockchain aras\u0131nda aktivl\u0259ri d\u0259yi\u015fdirin","blockchains":"18 Blockchain","tradeAssets":"15.500+ Aktivl\u0259 Ticar\u0259t Edin","tradeMoreAssetsWithTheLowestGasFees":"\u018fn a\u015fa\u011f\u0131 gas fee il\u0259 daha \xe7ox aktiv ticar\u0259ti apar\u0131n","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"N\u0259dir","rubic":"Qubic AI","info":"Qubic AI istifad\u0259\xe7il\u0259r\u0259 Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR v\u0259 Telos-da swaps-\u013115.000-d\u0259n \xe7ox aktivl\u0259 birg\u0259 bir klikl\u0259 tamamlama\u011fa imkan ver\u0259n Multi-Chain Swap Protocol. Protokolumuza h\u0259tta 60+ DEX-l\u0259r, Fiat-on-Ramp-lar v\u0259 k\xf6rp\xfcl\u0259r d\u0259 daxildir."},"grants":{"rubic":"Qubic AI","grants":"Qrantlar","info":"Qubic AI a\u015fa\u011f\u0131dak\u0131 \u0259sas blockchain platformalar\u0131ndan qrantlar qazan\u0131b"},"audits":{"rubic":"Qubic AI","audits":"Auditl\u0259r","text1":"Qubic AI Multi-Chain m\xfcqavil\u0259l\u0259ri CertiK komandas\u0131 t\u0259r\u0259find\u0259n yoxlan\u0131l\u0131b.","text2":"Qubic AI Staking m\xfcqavil\u0259l\u0259ri Fairyproof komandas\u0131 t\u0259r\u0259find\u0259n yoxlan\u0131l\u0131b.","link1":"CertiK n\u0259tic\u0259l\u0259rini tap\u0131n","link2":"Fairyproof n\u0259tic\u0259l\u0259rini tap\u0131n"},"partnership":{"rubic":"Qubic AI","supports":"d\u0259st\u0259kl\u0259r","dexs":"DEX-l\u0259r","blockchains":"BLOCKCHAIN"},"trade":{"trade":"Ticar\u0259t","yourToken":"tokenl\u0259riniz","directlyOn":"birba\u015fa","yourPlatform":"platforman\u0131z!","getWidget":"Widget-i \u0259ld\u0259 edin","info":"Qubic AI Relay Widget istifad\u0259\xe7il\u0259r\u0259 ist\u0259nil\u0259n vebsaytda token almaq v\u0259 satmaq imkan\u0131 verir. \u0130stifad\u0259\xe7il\u0259r veb sayt\u0131n\u0131z\u0131 t\u0259rk etm\u0259d\u0259n tokeninizi asanl\u0131qla ala bil\u0259r! \xd6d\u0259ni\u015fsizdir v\u0259 qura\u015fd\u0131rmaq asand\u0131r; 40-dan \xe7ox layih\u0259 art\u0131q ona inteqrasiya olub."},"documentation":{"documentation":"S\u0259n\u0259dl\u0259\u015fdirm\u0259","findOutMore":"Multi-Chain h\u0259llimiz v\u0259 platformam\u0131z haqq\u0131nda \u0259trafl\u0131 m\u0259lumat \u0259ld\u0259 edin.","learnMore":"\u018fTRAFLI M\u018fLUMAT"},"subscription":{"subscribeToOurNewsletter":"B\xfclletenimiz\u0259 abun\u0259 olun","receiveTheNewest":"Stakeinql\u0259 ba\u011fl\u0131 \u0259n son yenilikl\u0259ri al\u0131n","submit":"G\xf6nd\u0259r"},"contact":{"get":"Al","involved":"C\u0259lb olunur","contactUsToLearn":"Validator olmaq, \u015f\u0259b\u0259k\u0259d\u0259 proqram haz\u0131rlamaq v\u0259 ya chain inteqrasiya etm\u0259k haqq\u0131nda \u0259trafl\u0131 \xf6yr\u0259nm\u0259k \xfc\xe7\xfcn biziml\u0259 \u0259laq\u0259 saxlay\u0131n.","byClicking":"\\"Mesaj G\xf6nd\u0259r\\" d\xfcym\u0259sini klikl\u0259m\u0259kl\u0259, siz avtomatik olaraq raz\u0131la\u015f\u0131rs\u0131n\u0131z","privacyPolicy":"m\u0259xfilik siyas\u0259ti","submitMessage":"Mesaj G\xf6nd\u0259r"},"feedback":{"yourName":"Ad\u0131n\u0131z*","emailAdress":"Elektron po\xe7t \xfcnvan\u0131*","telegram":"Telegram hesab\u0131*","companyOrProject":"\u015eirk\u0259t v\u0259 ya Layih\u0259*","companyWebsiteURL":"\u015eirk\u0259t vebsayt\u0131n\u0131n URL-si*","selectReason":"S\u0259b\u0259bini se\xe7in, niy\u0259 Rubicl\u0259 maraqlan\u0131rs\u0131n\u0131z?*","yourMessage":"Komandam\u0131za mesaj\u0131n\u0131z","integrateOurBlockchain":"Blockchain Qubic AI\u0259 inteqrasiya edin","MultiChainSwapProtocol":"Multi-chain swap protokolu","CommerceDeal":"Ticar\u0259t m\xfcqavil\u0259si","ProblemsMultiChainRouting":"Qubic AI Multi-Chain Routing Probleml\u0259ri"},"launch":{"end":{"title":"2-C\u0130 ROUND","title-highlight":"BA\u015eLADI","text":"Stakeinqin \u0130lk G\u0259l\u0259n, \u0130lk Xidm\u0259t prinsipi var v\u0259 hovuzun \xfcmumi h\u0259cmi 7.000.000 BRBC il\u0259 m\u0259hdudla\u015f\u0131r","link":"STAKE BRBC"}},"sdk":{"title-0":"SDK.","title-highlight-0":"30 D\u018fQ\u0130Q\u018fD\u018f 9 BLOCKCHAIN \u0130NTEQRAS\u0130YA ED\u0130N","info":"Qubic AI SDK m\xfcmk\xfcn olan \u0259n yax\u015f\u0131 qiym\u0259tl\u0259rl\u0259 On-Chain v\u0259 Multi-Chain swap t\u0259klif edir. Qubic AI komissiyas\u0131n\u0131n 50%-i t\u0259r\u0259fda\u015flara gedir. \u0130nteqrasiya \xf6d\u0259ni\u015fsizdir!","link":"\u0130NTEQRAS\u0130YAYA BA\u015eLAYIN","cards":{"title1":"Kiml\u0259r Qubic AI SDK-n\u0131 inteqrasiya ed\u0259 bil\u0259r?","title2":"Qubic AI SDK-n\u0131n \xfcst\xfcnl\xfckl\u0259ri","Wallets":"C\xfczdanlar","dApps":"dApps","AnyPlatforms":"\u0130st\u0259nil\u0259n platformalar","EarnUpTo":"R\xfcsumlardan 50%-\u0259 q\u0259d\u0259r qazan\u0131n","GainAWhiteLabel":"A\u011f Etiket H\u0259llini Qazan\u0131n","FullCustomization":"Tam F\u0259rdil\u0259\u015fdirm\u0259"}},"widget":{"title":"Minimum \\n sat\u0131n al\u0131n","title-highlight":"stakeinqd\u0259 i\u015ftirak etm\u0259k"},"modal":{"WeSentConfirmation":"T\u0259\u015f\u0259kk\xfcr edirik! \\n Po\xe7tunuza t\u0259sdiq m\u0259ktubu g\xf6nd\u0259rmi\u015fik.","theWidgetBecomePromoter":"Promoter ol","theApplicationHasBeenSubmitted":"T\u0259\u015f\u0259kk\xfcr edirik! \\n M\xfcraci\u0259t g\xf6nd\u0259rildi","theWidgetOnlySupports":"Widget yaln\u0131z Qubic AI.exchange-d\u0259 qeyd olunan tokenl\u0259ri d\u0259st\u0259kl\u0259yir. Siyah\u0131ya daxil olmaq \xfc\xe7\xfcn forman\u0131 doldurma\u011f\u0131n\u0131z xahi\u015f olunur. \xd6z\xfcn\u0259 inteqrasiya \xfc\xe7\xfcn s\u0259n\u0259dl\u0259ri yoxlay\u0131n.","checkDocs":"S\u0259n\u0259dl\u0259ri yoxlay\u0131n","forSelfIntegration":"\xf6z\xfcn\u0259 inteqrasiya \xfc\xe7\xfcn.","submit":"G\xf6nd\u0259r","ok":"TAMAM"},"referralMain":{"referral":"Istinad","program":"Proqram","becomeAPromoter":"Promoter ol","info":"Widget vasit\u0259sil\u0259 swap r\xfcsum qazan\u0131n v\u0259 istinad edil\u0259n layih\u0259l\u0259rin vebsaytlar\u0131nda u\u011furlu widget inteqrasiyas\u0131na g\xf6r\u0259 sabit m\xfckafatlar \u0259ld\u0259 edin."},"referralAdvantages":{"withoutInvestments":"Investisiyas\u0131z","joinOurReferralProgramFreely":"Istinad proqram\u0131m\u0131za s\u0259rb\u0259st qo\u015fulun","earnOfFees":"R\xfcsumun 50%-ni qazan\u0131n","getProfitsFromAllSwaps":"Qura\u015fd\u0131r\u0131lm\u0131\u015f widget vasit\u0259sil\u0259 m\u0259hdudiyy\u0259t olmadan b\xfct\xfcn m\xfcbadil\u0259l\u0259rd\u0259n m\u0259nf\u0259\u0259t \u0259ld\u0259 edin","getRBC":"500 - 5,000 QBC \u0259ld\u0259 edin","receiveFixedRewards":"H\u0259r bir widget inteqrasiyas\u0131 \xfc\xe7\xfcn sabit m\xfckafatlar al\u0131n"},"benefits":{"benefits":"FAYDALAR","forProjects":"LAY\u0130H\u018fL\u018fR \xdc\xc7\xdcN","text1":"Widget-i istinad linki vasit\u0259sil\u0259 inteqrasiya ed\u0259n layih\u0259l\u0259r z\u0259ncir s\xf6vd\u0259l\u0259\u015fm\u0259si \xfczr\u0259 h\u0259r birind\u0259 r\xfcsumlar\u0131n 30%-ni alacaqd\u0131r.","text2":"Qubic AI App b\xfct\xfcn \xfcst\xfcnl\xfckl\u0259rind\u0259n layih\u0259l\u0259rin veb sayt\u0131nda birba\u015fa istifad\u0259 edilm\u0259si.","text3":"Widget-i qura\u015fd\u0131rmaqla layih\u0259l\u0259r ticar\u0259t h\u0259cmini art\u0131racaq, token qiym\u0259tl\u0259rini y\xfcks\u0259ld\u0259c\u0259k, yeni istifad\u0259\xe7il\u0259ri v\u0259 dig\u0259r layih\u0259l\u0259rd\u0259n v\u0259 blockchain likvidliyi c\u0259lb ed\u0259c\u0259k."},"howToStart":{"hotTo":"NEC\u018f","start":"BA\u015eLAMAQ OLAR?","joinTheReferralProgram":"Istinad proqram\u0131na qo\u015fulun!","becomeARubicPromoter":"rubic promoter-i olun","signInThroughYourWallet":"Qubic AI App c\xfczdan\u0131n\u0131zla daxil olun v\u0259 unikal istinad linki yarad\u0131n.","becomeAPromoter":"Promoter ol","promoteTheRubicWidget":"Qubic AI Widget-i layih\u0259l\u0259r\u0259 t\u0259bli\u011f edin","pitchToRepresentatives":"Qubic AI Widget-in unikal \xfcst\xfcnl\xfckl\u0259ri haqq\u0131nda kripto-layih\u0259l\u0259rin n\xfcmay\u0259nd\u0259l\u0259rin\u0259 m\xfcraci\u0259t edin.","getPromoMaterials":"Promo-materiallar\u0131 \u0259ld\u0259 edin","getPassiveIncome":"Passiv g\u0259lir \u0259ld\u0259 edin!","attractNewProjects":"Yeni layih\u0259l\u0259ri c\u0259lb edin v\u0259 istinad edil\u0259n layih\u0259nin sayt\u0131nda h\u0259r bir inteqrasiya olunmu\u015f widget-d\u0259n g\u0259lir \u0259ld\u0259 edin."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI Widget siz\u0259 veb sayt\u0131 t\u0259rk etm\u0259d\u0259n bir klikl\u0259 12 blockchain v\u0259 aras\u0131nda 15.000-d\u0259n \xe7ox aktivd\u0259n h\u0259r hans\u0131 birini al\u0131b satma\u011fa v\u0259 Qubic AI Exchange-in b\xfct\xfcn x\xfcsusiyy\u0259tl\u0259rind\u0259n istifad\u0259 etm\u0259y\u0259 imkan verir."},"rules":{"program":"PROQRAM","rules":"QAYDALAR","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Sabit m\xfckafat almaq \xfc\xe7\xfcn c\u0259lb edilmi\u015f layih\u0259 bir v\u0259 ya daha \xe7ox platformada qeyd edilm\u0259lidir:","text2":"Layih\u0259y\u0259 istinad ed\u0259n istifad\u0259\xe7i widget layih\u0259 veb sayt\u0131na u\u011furlu inteqrasiyas\u0131 n\u0259tic\u0259sind\u0259 500 QBC v\u0259 ya c\u0259lb edilmi\u015f layih\u0259 CoinGecko, CoinMarketCap v\u0259 ya CoinPaprika-da \xfcmumi reytinqd\u0259 Top 1000 tokend\u0259dirs\u0259, 5000 QBC al\u0131r","text3":"Widget layih\u0259 sayt\u0131nda yerl\u0259\u015fdirildikd\u0259n v\u0259 \u0259n az\u0131 10 m\xfcbadil\u0259 edildikd\u0259n sonra inteqrasiya tamamlan\u0131r","text4":"Promoter widget-i qura\u015fd\u0131ran layih\u0259nin tokenind\u0259ki m\xfcbadil\u0259d\u0259n r\xfcsumlar\u0131n 50%-ni alacaq","detailedRules":"\u018ftrafl\u0131 qaydalar"},"startDate":{"referralProgram":"IST\u0130NAD PROQRAMI","isLive":"CANLIDIR!","february":"10 fevral 2022-ci il","becomeAPromoter":"Promoter olun"},"widgetConfigurator":{"theme":"M\xf6vzu","language":"Dil","fromAmount":"M\u0259bl\u0259\u011fd\u0259n","initialTradeAmount":"\u0130lkin ticar\u0259t m\u0259bl\u0259\u011fini m\xfc\u0259yy\u0259n etm\u0259k \xfc\xe7\xfcn \\n istifad\u0259 oluna bil\u0259r","fromBlockchain":"Blockchain-d\u0259n","fromToken":"Tokend\u0259n","toBlockchain":"Blockchain-\u0259","toToken":"Token\u0259","hideSelectionFrom":"Se\xe7imi gizl\u0259din","hideSelectionTo":"Se\xe7imi gizl\u0259din","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Widget token \\n se\xe7imini kilidl\u0259m\u0259y\u0259 imkan verir","fee":"R\xfcsum","feeReceiverAddress":"R\xfcsum alan\u0131n \xfcnvan\u0131","walletAddress":"r\xfcsum almaq \xfc\xe7\xfcn \\n c\xfczdan \xfcnvan\u0131","display":"Ekran","instantTrades":"Ani ticar\u0259t s\xfcr\xfc\u015fm\u0259si, %","slippageForInstantTrades":"Ani Ticar\u0259tl\u0259r \xfc\xe7\xfcn defolt s\xfcr\xfc\u015fm\u0259 \\n t\u0259yin etm\u0259y\u0259 imkan verir","multiChain":"Multi chain s\xfcr\xfc\u015fm\u0259, %","slippageForMultiChain":"Multi-Chain \xfc\xe7\xfcn defolt s\xfcr\xfc\u015fm\u0259ni \\n t\u0259yin etm\u0259y\u0259 imkan verir","apply":"M\xfcraci\u0259t edin"},"statistics":{"rubic":"RUBIC\'S","statistics":"STAT\u0130ST\u0130KA","info":"Qubic AI-in Multi-Chain Protocol Statistikas\u0131 il\u0259 tan\u0131\u015f olun","totalMultiChainVolume":"\xdcmumi Multi-Chain H\u0259cmi","supportedAssets":"D\u0259st\u0259kl\u0259n\u0259n Aktivl\u0259r","totalUsers":"\xdcmumi \u0130stifad\u0259\xe7il\u0259r","totalValueLocked":"\xdcmumi D\u0259y\u0259r Ba\u011flan\u0131b","apr":"APR","upTo":"\u018fn az"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"1-C\u0130 ROUND","text-0":"BRBC v\u0259 USDC-ni t\u0259min edin","text-1":"\u0259n az 27% APR-d\u0259k USDC m\xfckafatlar\u0131 \u0259ld\u0259 edin","button":"BRBC ALIN"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"C\u0130 RAUND BA\u015eLADI","button":"D\u0259rhal Qo\u015fulun"},"statistics":{"title-0":"QAZANIN","title-highlight-0":"27% APR","title-1":"USDC \u0130L\u018f","text":"Qubic AI Multi-Chain \u0259m\u0259liyyatlar \xfc\xe7\xfcn 0,3% komissiya haqq\u0131 Liquidity Providing i\u015ftirak\xe7\u0131lar\u0131 aras\u0131nda b\u0259rab\u0259r paylan\u0131lacaq"},"widget":{"title-0":"YALNIZ","title-highlight-0":"BRBC SAH\u0130BL\u018fR\u0130N\u0130N","title-1":"\u0130\u015eT\u0130RAKI","title-highlight-1":"M\xdcMK\xdcND\xdcR","text":"Liquidity Providing Program-da i\u015ftirak etm\u0259k \xfc\xe7\xfcn 2,000-d\u0259n 20,000-\u0259 q\u0259d\u0259r BRBC t\u0259min edin"},"prepare":{"title-highlight-0":"NEC\u018f \u0130\u015eT\u0130RAK ETM\u018fL\u0130","title-0":"RUBIC\'S LP-d\u0259?","step1":{"title-0":"\u018fld\u0259 etmek","title-highlight-0":"BRBC","title-1":"Tokenl\u0259r v\u0259","title-highlight-1":"USDC","text":"Liquidity Providing birinci raundu ilk 2 ay m\xfcdd\u0259tind\u0259 f\u0259aliyy\u0259t g\xf6st\u0259r\u0259r\u0259k, ilk g\u0259l\u0259n\u0259 ilk xidm\u0259t d\u0259st\u0259yi olunacaq","button":"BRBC ALIN"},"step2":{"title-highlight-0":"Provide Liquidity","title-0":"BRBC v\u0259 USDC-nizi Ba\u011flamaqla","text":"Depozitl\u0259r 1 USDC : 4 BRBC nisb\u0259tind\u0259dir","button":"D\u0259rhal Qo\u015fulun"},"step3":{"title-0":"Liquidity Providing \u0130lkin Raundu m\u0259hduddur","title-highlight-0":"800,000 USDC","text":"Stakingin ilkin raundunda i\u015ftirak ed\u0259nl\u0259r Liquidity Providing \xfc\xe7\xfcn a\u011f siyah\u0131ya d\xfc\u015f\u0259c\u0259kdir. 24 saat \u0259rzind\u0259 500-d\u0259n 800 USDC- d\u0259k pul v\u0259saiti m\xf6vcud olacaq","link":"\u018ftrafl\u0131"}},"subscription":{"title":"Qubic AI-in Liquidity Providing Updates-d\u0259n x\u0259b\u0259rdar olun","text":"Liquidity Providing il\u0259 ba\u011fl\u0131 \u0259n son x\u0259b\u0259rl\u0259ri almaq \xfc\xe7\xfcn abun\u0259 olun"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1-C\u0130 ROUND","title-0_lp_started":"C\u0130 RAUND BA\u015eLADI","text":"\u018fn az 27% APR-d\u0259k USDC m\xfckafatlar\u0131 \u0259ld\u0259 etm\u0259k \xfc\xe7\xfcn BRBC v\u0259 USDC t\u0259min edin","features":{"0":"Depozit m\u0259bl\u0259\u011fi","1":"APR","2":"LP \u0259msal\u0131"},"duration":{"title":"BA\u015eLAN\u011eIC"},"button":"\u018fTRAFLI"}}}'
        ),
        St = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"app \u0916\u094b\u0932\u0947\u0902"},"footer":{"community":"\u0938\u092e\u0941\u0926\u093e\u092f","about":"\u092c\u093e\u0930\u0947 \u092e\u0947\u0902","products":"\u092a\u094d\u0930\u094b\u0921\u0915\u094d\u091f","businessInquiries":"\u092c\u093f\u091c\u093c\u0928\u0938 \u0938\u0902\u092c\u0902\u0927\u0940 \u092a\u0942\u091b\u0924\u093e\u091b \u0915\u0947 \u0932\u093f\u090f"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"\u091f\u0940\u092e","securityAudit":"\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0914\u0930 \u0911\u0921\u093f\u091f","statistics":"\u0906\u0902\u0915\u0921\u093c\u0947","contactUs":"\u0939\u092e\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902","sdk":"SDK","referralProgram":"Referral \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e","setupWidget":"\u0938\u0947\u091f\u0905\u092a Widget","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"\u092b\u0949\u0930\u094d\u092e \u0915\u094b \u092d\u0930\u0947\u0902"},"settings":{"chooseLanguage":"\u092d\u093e\u0937\u093e \u091a\u0941\u0928\u0947\u0902","languages":"\u092d\u093e\u0937\u093e\u090f\u0902"},"main":{"multiChain":"Multi-chain","swap":"swap","protocol":"protocol","info":"Qubic AI \u090f\u0915 Multi-Chain Swap Protocol \u0939\u0948, \u092c\u0938 \u090f\u0915 \u0915\u094d\u0932\u093f\u0915 \u092e\u0947\u0902 18 blockchains \u0915\u0947 \u090a\u092a\u0930 \u0915\u093c\u0930\u0940\u092c 15,500+ assets \u0915\u0947 \u0938\u093e\u0925 \u0907\u0938\u0947 swap \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948\u0964"},"advantages":{"multiChainSwaps":"Multi-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"\u0906\u092a \u090f\u0915 \u0939\u0940 \u091f\u094d\u0930\u0947\u0921 \u092e\u0947\u0902 \u0915\u0908 blockchains \u0915\u0947 \u092c\u0940\u091a assets swap \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902","blockchains":"18 Blockchains","tradeAssets":"15,500+ assets \u092e\u0947\u0902 \u091f\u094d\u0930\u0947\u0921 \u0915\u0930\u0947\u0902","tradeMoreAssetsWithTheLowestGasFees":"\u091c\u093c\u094d\u092f\u093e\u0926\u093e \u0938\u0947 \u091c\u093c\u094d\u092f\u093e\u0926\u093e assets \u092e\u0947\u0902 \u091f\u094d\u0930\u0947\u0921 \u0915\u0930\u0947\u0902, \u0935\u094b \u092d\u0940 \u0915\u092e Gas \u092b\u093c\u0940\u0938 \u0915\u0947 \u0938\u093e\u0925","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"\u0915\u094d\u092f\u093e \u0939\u0948","rubic":"Qubic AI","info":"Qubic AI \u090f\u0915 Multi-Chain Swap Protocol \u0939\u0948, \u092c\u0938 \u090f\u0915 \u0915\u094d\u0932\u093f\u0915 \u092e\u0947\u0902 Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR and Telos \u0915\u0947 \u090a\u092a\u0930 \u0915\u093c\u0930\u0940\u092c 15,000+ assets \u0915\u0947 \u0938\u093e\u0925 \u0907\u0938\u0947 swap \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948\u0964 \u0939\u092e\u093e\u0930\u0947 \u092a\u094d\u0930\u094b\u091f\u094b\u0915\u0949\u0932 \u092e\u0947\u0902 60+ DEX, Fiat-on-Ramps \u0914\u0930 bridges \u092d\u0940 \u0936\u093e\u092e\u093f\u0932 \u0939\u0948\u0902\u0964"},"grants":{"rubic":"Qubic AI","grants":"\u0917\u094d\u0930\u093e\u0902\u091f","info":"Qubic AI \u0915\u094b \u092a\u094d\u0930\u092e\u0941\u0916 blockchain \u092a\u094d\u0932\u0947\u091f\u092b\u0949\u0930\u094d\u092e \u0938\u0947 \u0917\u094d\u0930\u093e\u0902\u091f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0939\u0941\u090f \u0939\u0948\u0902 \u091c\u0948\u0938\u0947 \u0915\u093f"},"audits":{"rubic":"Qubic AI","audits":"\u0911\u0921\u093f\u091f","text1":"Qubic AI \u0915\u0947 Multi-Chain \u0915\u0949\u0928\u094d\u091f\u094d\u0930\u0948\u0915\u094d\u091f\u094d\u0938 CertiK \u091f\u0940\u092e \u0926\u094d\u0935\u093e\u0930\u093e \u0911\u0921\u093f\u091f \u0939\u0941\u090f \u0939\u0948\u0902\u0964","text2":"Qubic AI \u0915\u0947 Staking \u0915\u0949\u0928\u094d\u091f\u094d\u0930\u0948\u0915\u094d\u091f\u094d\u0938 Fairyproof \u091f\u0940\u092e \u0926\u094d\u0935\u093e\u0930\u093e \u0911\u0921\u093f\u091f \u0939\u0941\u090f \u0939\u0948\u0902\u0964","link1":"CertiK \u0915\u0947 \u092a\u0930\u093f\u0923\u093e\u092e \u0926\u0947\u0916\u0947\u0902","link2":"Fairyproof \u0915\u0947 \u092a\u0930\u093f\u0923\u093e\u092e \u0926\u0947\u0916\u0947\u0902"},"partnership":{"rubic":"Qubic AI","supports":"\u0938\u092a\u094b\u0930\u094d\u091f \u0915\u0930\u0924\u093e \u0939\u0948","dexs":"DEXs","blockchains":"BLOCKCHAINS"},"trade":{"trade":"\u091f\u094d\u0930\u0947\u0921 \u0915\u0930\u0947\u0902","yourToken":"\u0905\u092a\u0928\u093e token","directlyOn":"\u0938\u0940\u0927\u093e","yourPlatform":"\u0905\u092a\u0928\u0947 platform \u092a\u0930!","getWidget":"Widget \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","info":"Qubic AI Relay Widget \u0915\u0947 \u0938\u093e\u0925, \u0932\u094b\u0917 \u0915\u093f\u0938\u0940 \u092d\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u092a\u0930 tokens \u0916\u093c\u0930\u0940\u0926 \u092f\u093e \u092c\u0947\u091a \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 \u0932\u094b\u0917 \u0906\u0938\u093e\u0928\u0940 \u0938\u0947 \u0906\u092a\u0915\u093e token \u0916\u093c\u0930\u0940\u0926 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0935\u094b \u092d\u0940 \u092c\u093f\u0928\u093e \u0906\u092a\u0915\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u091b\u094b\u0921\u093c\u0947! \u092f\u0939 \u092c\u093f\u0932\u094d\u0915\u0941\u0932 \u092e\u0941\u092b\u093c\u094d\u0924 \u0939\u0948 \u0914\u0930 \u0907\u0938\u0915\u093e \u0938\u0947\u091f\u0905\u092a \u0915\u0930\u0928\u093e \u092d\u0940 \u092c\u0921\u093c\u093e \u0906\u0938\u093e\u0928 \u0939\u0948; 40+ projects \u0910\u0938\u0947 \u0939\u0948\u0902 \u091c\u093f\u0928\u094d\u0939\u094b\u0902\u0928\u0947 \u092a\u0939\u0932\u0947 \u0939\u0940 \u0907\u0938\u0947 \u0936\u093e\u092e\u093f\u0932 \u0915\u0930 \u0932\u093f\u092f\u093e \u0939\u0948\u0964"},"documentation":{"documentation":"\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c\u0940\u0915\u0930\u0923","findOutMore":"\u0939\u092e\u093e\u0930\u0947 Multi-Chain solution \u0914\u0930 platform \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0914\u0930 \u091c\u093e\u0928\u093f\u090f\u0964","learnMore":"\u0914\u0930 \u091c\u093e\u0928\u0947\u0902"},"subscription":{"subscribeToOurNewsletter":"\u0939\u092e\u093e\u0930\u0947 \u0938\u092e\u093e\u091a\u093e\u0930 \u092a\u0924\u094d\u0930 \u0915\u0947 \u0938\u0926\u0938\u094d\u092f \u092c\u0928\u0947\u0902","receiveTheNewest":"Staking \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0928\u090f-\u0928\u090f \u0905\u092a\u0921\u0947\u091f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","submit":"\u092d\u0947\u091c\u0947\u0902"},"contact":{"get":"\u0936\u093e\u092e\u093f\u0932","involved":"\u0939\u094b \u091c\u093e\u0908\u090f","contactUsToLearn":"\u092f\u0926\u093f \u0906\u092a \u090f\u0915 validator \u092c\u0928\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902, Network \u0915\u0947 \u0932\u093f\u090f \u090f\u092a\u094d\u0932\u093f\u0915\u0947\u0936\u0928 \u092c\u0928\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u092f\u093e \u092b\u093f\u0930 \u0905\u092a\u0928\u0940 chain \u0915\u094b \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902, \u0924\u094b \u0939\u092e\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964","byClicking":"\\"\u092e\u0948\u0938\u0947\u091c \u092d\u0947\u091c\u0947\u0902\\" \u0915\u0947 \u092c\u091f\u0928 \u092a\u0930 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0915\u0947, \u0906\u092a \u0905\u092a\u0928\u0947 \u0906\u092a \u0939\u0940 \u0938\u0939\u092e\u0924 \u0939\u094b \u091c\u093e\u090f\u0901\u0917\u0947","privacyPolicy":"\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0928\u0940\u0924\u093f \u0938\u0947","submitMessage":"\u092e\u0948\u0938\u0947\u091c \u092d\u0947\u091c\u0947\u0902"},"feedback":{"yourName":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e*","emailAdress":"\u0908\u092e\u0947\u0932 \u092a\u0924\u093e*","telegram":"Telegram \u0905\u0915\u093e\u0909\u0902\u091f*","companyOrProject":"Projects \u0935\u0947\u092c\u0938\u093e\u0907\u091f\u094b\u0902 \u092a\u0930, \u0906\u092a Qubic AI App \u0915\u0947 \u0938\u092d\u0940 \u092b\u093c\u093e\u092f\u0926\u0947 \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964","companyWebsiteURL":"\u0915\u0902\u092a\u0928\u0940 \u0915\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0915\u093e URL*","selectReason":"\u0915\u093e\u0930\u0923 \u092c\u0924\u093e\u090f\u0901 \u0915\u093f \u0906\u092a\u0915\u094b Qubic AI \u092e\u0947\u0902 \u0915\u094d\u092f\u094b\u0902 \u0930\u0941\u091a\u093f \u0939\u0948?*","yourMessage":"\u0939\u092e\u093e\u0930\u0940 \u091f\u0940\u092e \u0915\u094b \u0906\u092a\u0915\u093e \u092e\u0948\u0938\u0947\u091c","integrateOurBlockchain":"\u0939\u092e\u093e\u0930\u0940 blockchain \u0915\u094b Qubic AI \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0947\u0902","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Commerce Deal","ProblemsMultiChainRouting":"Qubic AI Multi-Chain Routing \u092e\u0947\u0902 \u0938\u092e\u0938\u094d\u092f\u093e\u090f\u0901"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"30 \u092e\u093f\u0928\u091f \u0915\u0947 \u0905\u0902\u0926\u0930-\u0905\u0902\u0926\u0930 9 BLOCKCHAINS \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0947\u0902","info":"Qubic AI SDK \u0915\u0947 \u0938\u093e\u0925, \u0906\u092a \u092c\u0922\u093c\u093f\u092f\u093e \u0930\u0947\u091f \u092a\u0930 On-Chain \u0914\u0930 Multi-Chain swap \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 Qubic AI partners \u0915\u094b 50% \u0915\u092e\u0940\u0936\u0928 \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964 \u0936\u093e\u092e\u093f\u0932 \u092e\u0941\u092b\u093c\u094d\u0924 \u092e\u0947\u0902 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902!","link":"\u091a\u0932\u094b \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0947\u0902","cards":{"title1":"Qubic AI SDK \u0915\u094b \u0915\u094c\u0928 \u0936\u093e\u092e\u093f\u0932 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948?","title2":"Qubic AI SDK \u0915\u0947 \u092b\u093c\u093e\u092f\u0926\u0947","Wallets":"Wallets","dApps":"dApps","AnyPlatforms":"\u0915\u094b\u0908 \u092d\u0940 platforms \u0939\u094b","EarnUpTo":"50% \u0924\u094b \u092b\u093c\u0940\u0938 \u092e\u0947\u0902 \u0939\u0940 \u092e\u0941\u0928\u093e\u092b\u093c\u093e","GainAWhiteLabel":"\u090f\u0915 White Label Solution \u092a\u093e\u090f\u0901","FullCustomization":"\u091c\u093f\u0924\u0928\u093e \u092e\u0930\u094d\u091c\u093c\u0940 \u092c\u0926\u0932\u093e\u0935 \u0915\u0930\u0947\u0902"}},"widget":{"title":"\u0915\u092e \u0938\u0947 \u0915\u092e\\n \u0916\u0930\u0940\u0926\u094b","title-highlight":"staking \u092e\u0947\u0902 \u0939\u093f\u0938\u094d\u0938\u093e \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f"},"modal":{"WeSentConfirmation":"\u0927\u0928\u094d\u092f\u0935\u093e\u0926!\\n \u0939\u092e\u0928\u0947 \u0906\u092a\u0915\u0947 \u092e\u0947\u0932 \u092a\u0930 \u090f\u0915 confirmation letter \u092d\u0947\u091c\u093e \u0939\u0948\u0964","theWidgetBecomePromoter":"Promoter \u092c\u0928 \u091c\u093e\u0908\u090f","theApplicationHasBeenSubmitted":"\u0927\u0928\u094d\u092f\u0935\u093e\u0926!\\n \u0910\u092a\u094d\u0932\u093f\u0915\u0947\u0936\u0928 \u092d\u0947\u091c \u0926\u0940 \u0917\u0908 \u0939\u0948","theWidgetOnlySupports":"Widget \u0915\u0947\u0935\u0932 \u0909\u0928 token \u0915\u094b \u0939\u0940 \u0938\u092a\u094b\u0930\u094d\u091f \u0915\u0930\u0924\u093e \u0939\u0948 \u091c\u094b Qubic AI.exchange \u0915\u0940 \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u0926\u093f\u090f \u0917\u090f \u0939\u0948\u0902\u0964 \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u0906\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u092b\u093c\u0949\u0930\u094d\u092e \u092d\u0930\u0947\u0902\u0964 \u0905\u092a\u0928\u0947 \u0906\u092a \u0938\u0947 \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0926\u0947\u0916\u0947\u0902\u0964","checkDocs":"\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u091a\u0947\u0915 \u0915\u0930\u0947\u0902","forSelfIntegration":"\u0905\u0917\u0930 \u0906\u092a selfintegration \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902\u0964","submit":"\u092d\u0947\u091c\u0947\u0902","ok":"\u0920\u0940\u0915 \u0939\u0948"},"referralMain":{"referral":"Referral","program":"\u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e","becomeAPromoter":"Promoter \u092c\u0928 \u091c\u093e\u0908\u090f","info":"Widgets \u0915\u0940 \u092e\u0926\u0926 \u0938\u0947 \u0906\u092a swap \u0915\u0930\u0915\u0947 \u092b\u093c\u0940\u0938 \u092c\u091a\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u0907\u0928 widgets \u0915\u094b referred projects \u0915\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f\u094d\u0938 \u092a\u0930 \u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0936\u093e\u092e\u093f\u0932 \u0915\u0930 \u0932\u0947\u0928\u0947 \u092a\u0930 \u0906\u092a\u0915\u094b \u0907\u0928\u093e\u092e \u092d\u0940 \u092e\u093f\u0932\u0947\u0902\u0917\u0947\u0964"},"referralAdvantages":{"withoutInvestments":"\u092c\u093f\u0928\u093e \u0928\u093f\u0935\u0947\u0936 \u0915\u0947","joinOurReferralProgramFreely":"\u0939\u092e\u093e\u0930\u0947 Referral \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e \u092e\u0947\u0902 \u092e\u0941\u092b\u094d\u0924 \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b \u091c\u093e\u0908\u090f","earnOfFees":"50% \u092b\u093c\u0940\u0938 \u0915\u092e\u093e\u090f\u0901","getProfitsFromAllSwaps":"Widget \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0915\u0947, \u0906\u092a \u0938\u092d\u0940 swap \u0938\u0947 \u0932\u093e\u092d \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u0935\u094b \u092d\u0940 \u092c\u093f\u0928\u093e \u0915\u093f\u0938\u0940 \u0938\u0940\u092e\u093e \u0915\u0947","getRBC":"500 - 5,000 QBC \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","receiveFixedRewards":"\u0939\u0930\u0947\u0915 widget \u0915\u094b \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0928\u0947 \u092a\u0930 \u0907\u0928\u093e\u092e \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902\u0964"},"benefits":{"benefits":"\u092b\u093c\u093e\u092f\u0926\u0947","forProjects":"PROJECTS \u0915\u0947","text1":"\u091c\u093f\u0928 Projects \u0928\u0947 Referral \u0932\u093f\u0902\u0915 \u0915\u0947 \u091c\u093c\u0930\u093f\u090f widget \u0936\u093e\u092e\u093f\u0932 \u0915\u093f\u092f\u093e \u0939\u0948, \u0909\u0928\u094d\u0939\u0947\u0902 \u0939\u0930 onchain transaction \u092a\u0930 30% \u092b\u093c\u0940\u0938 \u0915\u093e \u092e\u0941\u0928\u093e\u092b\u093c\u093e \u0939\u094b\u0917\u093e\u0964","text2":"Projects \u0935\u0947\u092c\u0938\u093e\u0907\u091f\u094b\u0902 \u092a\u0930, \u0906\u092a Qubic AI App \u0915\u0947 \u0938\u092d\u0940 \u092b\u093c\u093e\u092f\u0926\u0947 \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964","text3":"Widget \u0915\u0947 \u0938\u093e\u0925, Projects \u0905\u092a\u0928\u0940 \u091f\u094d\u0930\u0947\u0921\u093f\u0902\u0917 \u0935\u0949\u0932\u094d\u092f\u0942\u092e \u092c\u0922\u093c\u093e \u092a\u093e\u090f\u0901\u0917\u0947, Token \u0915\u0940 \u0915\u0940\u092e\u0924\u0947\u0902 \u092c\u0922\u093c\u093e \u092a\u093e\u090f\u0901\u0917\u0947 \u0914\u0930 \u0926\u0942\u0938\u0930\u0947 projects \u092f\u093e blockchains \u0938\u0947 liquidity \u0914\u0930 \u0928\u090f \u0932\u094b\u0917\u094b\u0902 \u0915\u093e \u0927\u094d\u092f\u093e\u0928 \u0905\u092a\u0928\u0940 \u0913\u0930 \u0916\u0940\u0902\u091a \u092a\u093e\u090f\u0901\u0917\u0947\u0964"},"howToStart":{"hotTo":"\u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902","start":"\u0936\u0941\u0930\u0942?","joinTheReferralProgram":"Referral \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902!","becomeARubicPromoter":"Qubic AI promoter \u092c\u0928 \u091c\u093e\u0908\u090f","signInThroughYourWallet":"Qubic AI App \u0915\u0947 \u0905\u0902\u0926\u0930 \u091c\u093e\u0908\u090f \u0914\u0930 \u0905\u092a\u0928\u0947 wallet \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u093f\u090f \u0914\u0930 \u092b\u093f\u0930 \u0905\u092a\u0928\u093e \u0916\u093c\u093e\u0938 Referral \u0932\u093f\u0902\u0915 \u092c\u0928\u093e \u0932\u0947 \u0932\u0940\u091c\u093f\u090f\u0964","becomeAPromoter":"Promoter \u092c\u0928 \u091c\u093e\u0908\u090f","promoteTheRubicWidget":"Qubic AI Widget \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 projects \u0915\u094b \u092c\u0924\u093e\u090f\u0901","pitchToRepresentatives":"Crypto-projects \u0915\u0947 \u092a\u094d\u0930\u0924\u093f\u0928\u093f\u0927\u093f\u092f\u094b\u0902 \u0915\u094b Qubic AI Widget \u0915\u0947 \u0905\u0928\u0942\u0920\u0947 \u092b\u093c\u093e\u092f\u0926\u094b\u0902 \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u092c\u0924\u093e\u090f\u0901\u0964","getPromoMaterials":"Promo-materials \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","getPassiveIncome":"\u092a\u0948\u0938\u093f\u0935 \u0907\u0928\u0915\u092e \u0915\u092e\u093e\u090f\u0901!","attractNewProjects":"\u0928\u090f-\u0928\u090f projects \u0915\u094b \u0905\u092a\u0928\u0940 \u0913\u0930 \u0916\u0940\u0902\u091a\u0947\u0902 \u0914\u0930 \u0939\u0930 referred project \u092a\u0930 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 widget \u0915\u0940 \u0906\u092e\u0926\u0928\u0940 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902\u0964"},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI widget \u0915\u0940 \u092e\u0926\u0926 \u0938\u0947 \u0906\u092a \u0915\u093c\u0930\u0940\u092c 15,000+ assets \u0916\u093c\u0930\u0940\u0926 \u092f\u093e \u092c\u0947\u091a \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u092c\u0938 \u090f\u0915 \u0915\u094d\u0932\u093f\u0915 \u092e\u0947\u0902 12 blockchain \u0915\u0947 \u090a\u092a\u0930 \u0910\u0938\u093e \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948 \u0914\u0930 \u0906\u092a Qubic AI Exchange \u0915\u0947 \u0938\u092d\u0940 \u092b\u093c\u093e\u092f\u0926\u0947 \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0935\u094b \u092d\u0940 \u092c\u093f\u0928\u093e \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0915\u094b \u091b\u094b\u0921\u093c\u0947\u0964"},"rules":{"program":"\u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e","rules":"\u0928\u093f\u092f\u092e","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"\u092a\u0915\u094d\u0915\u093e \u0907\u0928\u093e\u092e \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0906\u092a\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0932\u093e\u092f\u093e \u0917\u092f\u093e projects \u0907\u0928\u092e\u0947\u0902 \u0938\u0947 \u090f\u0915 \u092f\u093e \u091c\u093c\u094d\u092f\u093e\u0926\u093e platform \u092a\u0930 \u0939\u094b\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948:","text2":"\u091c\u093f\u0938 \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0928\u0947 projects \u0915\u094b refer \u0915\u093f\u092f\u093e \u0939\u094b\u0924\u093e \u0939\u0948 \u0909\u0938\u0947 500 QBC \u092e\u093f\u0932 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902 \u0905\u0917\u0930 projects \u0915\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u092a\u0930 widget \u0905\u091a\u094d\u091b\u0947 \u0938\u0947 \u091c\u0941\u0921\u093c \u091c\u093e\u0924\u093e \u0939\u0948\u0964 \u092c\u0938 \u0907\u0924\u0928\u093e \u0939\u0940 \u0928\u0939\u0940\u0902, \u0905\u0917\u0930 \u0906\u092a\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0932\u093e\u092f\u093e \u0917\u092f\u093e projects CoinGecko, CoinMarketCap \u092f\u093e CoinPaprika \u0915\u0940 \u0915\u0941\u0932 \u0930\u0948\u0902\u0915\u093f\u0902\u0917 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u091f\u0949\u092a 1000 token \u092e\u0947\u0902 \u0906 \u091c\u093e\u0924\u093e \u0939\u0948 \u0924\u094b \u0906\u092a\u0915\u094b 5,000 QBC \u092e\u093f\u0932\u0924\u0947 \u0939\u0948\u0902\u0964","text3":"\u092f\u0939 \u092a\u0942\u0930\u093e \u091c\u0941\u0921\u093c\u093e \u0924\u092c \u092e\u093e\u0928\u093e \u091c\u093e\u090f\u0917\u093e \u091c\u092c widget projects \u0915\u0940 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u092a\u0930 \u0932\u0917 \u091c\u093e\u090f \u0914\u0930 \u0915\u092e \u0938\u0947 \u0915\u092e 10 swaps \u0939\u094b \u091c\u093e\u090f\u0901","text4":"Widget \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u0947 projects token \u092e\u0947\u0902 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0947 swaps \u0938\u0947 \u092a\u094d\u0930\u094b\u092e\u094b\u091f\u0930 \u0915\u094b 50% \u0924\u0915 \u0915\u0940 \u092b\u093c\u0940\u0938 \u0915\u093e \u092e\u0941\u0928\u093e\u092b\u093c\u093e \u0939\u094b\u0917\u093e","detailedRules":"\u0935\u093f\u0938\u094d\u0924\u0943\u0924 \u0928\u093f\u092f\u092e"},"startDate":{"referralProgram":"Referral \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e","isLive":"\u0905\u092c \u091a\u093e\u0932\u0942 \u0939\u094b \u0917\u092f\u093e \u0939\u0948!","february":"\u092b\u0930\u0935\u0930\u0940 10, 2022","becomeAPromoter":"Promoter \u092c\u0928 \u091c\u093e\u0908\u090f"},"widgetConfigurator":{"theme":"\u0925\u0940\u092e","language":"\u092d\u093e\u0937\u093e","fromAmount":"Amount \u0938\u0947","initialTradeAmount":"\u0906\u092a \u0907\u0938\u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0915\u0947 \\n initial trade amount \u092c\u0924\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964","fromBlockchain":"Blockchain \u0938\u0947","fromToken":"Token \u0938\u0947","toBlockchain":"Blockchain \u092e\u0947\u0902","toToken":"Token \u092e\u0947\u0902","hideSelectionFrom":"\u0938\u0947 \u0935\u093e\u0932\u093e selection \u091b\u0941\u092a\u093e\u090f\u0901","hideSelectionTo":"\u092e\u0947\u0902 \u0935\u093e\u0932\u093e selection \u091b\u0941\u092a\u093e\u090f\u0901","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"\u0907\u0938\u0915\u0940 \u092e\u0926\u0926 \u0938\u0947 \u0906\u092a widget \u092e\u0947\u0902 token /n selection \u0915\u094b \u0932\u0949\u0915 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902","fee":"\u092b\u0940\u0938","feeReceiverAddress":"\u092b\u093c\u0940\u0938 \u092a\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0915\u093e address","walletAddress":"\\n \u092b\u093c\u0940\u0938 \u092a\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0915\u093e Wallet address","display":"\u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947","instantTrades":"\u0924\u0941\u0930\u0902\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 \u091f\u094d\u0930\u0947\u0921 \u092e\u0947\u0902 slippage, %","slippageForInstantTrades":"\u0907\u0938\u0938\u0947 \u0906\u092a \u092c\u0924\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f \u0906\u092a \u0924\u0941\u0930\u0902\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 \u091f\u094d\u0930\u0947\u0921 \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u093e default slippage \\n \u0938\u0947\u091f \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902","multiChain":"Multi chain \u092e\u0947\u0902 slippage, %","slippageForMultiChain":"\u0906\u092a\u0915\u094b Multi-Chain \u0915\u0947 \u0932\u093f\u090f default slippage \\n \u0938\u0947\u091f \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948","apply":"\u0932\u093e\u0917\u0942 \u0915\u0930\u0947\u0902"},"statistics":{"rubic":"RUBIC \u0915\u0947","statistics":"\u0906\u0902\u0915\u0921\u093c\u0947","info":"Qubic AI \u0915\u0947 Multi-Chain Protocol \u0915\u0947 \u0906\u0901\u0915\u0921\u093c\u0947 \u091a\u0947\u0915 \u0915\u0930\u0947\u0902","totalMultiChainVolume":"\u0915\u0941\u0932 Multi-Chain \u0935\u0949\u0932\u094d\u092f\u0942\u092e","supportedAssets":"\u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u090f\u0938\u0947\u091f","totalUsers":"\u0915\u0941\u0932 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e","totalValueLocked":"\u0915\u0941\u0932 \u0932\u0949\u0915 \u0915\u0940 \u0917\u0908 \u0930\u093e\u0936\u093f","apr":"APR","upTo":"\u0924\u0915"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"\u092a\u0939\u0932\u093e \u0930\u093e\u0909\u0902\u0921","text-0":"BRBC \u0914\u0930 USDC \u0926\u0940\u091c\u093f\u090f","text-1":"\u091c\u093f\u0938\u0938\u0947 \u0906\u092a\u0915\u094b 27% APR \u0924\u0915 USDC \u0907\u0928\u093e\u092e \u092e\u093f\u0932\u0947\u0902\u0917\u0947","button":"BRBC \u0916\u093c\u0930\u0940\u0926\u0947\u0902"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"\u092a\u0939\u0932\u093e \u0930\u093e\u0909\u0902\u0921 \u0936\u0941\u0930\u0942 \u0939\u094b \u0917\u092f\u093e \u0939\u0948","button":"\u0905\u092d\u0940 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902"},"statistics":{"title-0":"USDC \u0915\u0947 \u0938\u093e\u0925","title-highlight-0":"27% APR \u0924\u0915","title-1":"\u0915\u092e\u093e\u090f\u0902","text":"Multi-Chain \u0932\u0947\u0928-\u0926\u0947\u0928 \u092e\u0947\u0902 Qubic AI 0.3% \u092b\u093c\u0940\u0938 \u0915\u093e\u091f\u0924\u093e \u0939\u0948 \u091c\u093f\u0938\u0947 Liquidity Providing \u092a\u094d\u0930\u0924\u093f\u092d\u093e\u0917\u093f\u092f\u094b\u0902 \u0915\u0947 \u092c\u0940\u091a \u092c\u093e\u0901\u091f\u093e \u091c\u093e\u0924\u093e \u0939\u0948"},"widget":{"title-0":"\u0915\u0947\u0935\u0932","title-highlight-0":"BRBC HOLDERS","title-1":"\u0939\u0940","title-highlight-1":"\u092d\u093e\u0917 \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902","text":"\u0939\u092e\u093e\u0930\u0947 Liquidity Providing Program \u092e\u0947\u0902 \u092d\u093e\u0917 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u0906\u092a\u0915\u094b 2,000 \u0938\u0947 20,000 BRBC \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u0939\u094b\u0902\u0917\u0947"},"prepare":{"title-highlight-0":"RUBIC \u0915\u0947 LP \u092e\u0947\u0902","title-0":"\u092e\u0948\u0902 \u0915\u0948\u0938\u0947 \u092d\u093e\u0917 \u0932\u0942\u0901?","step1":{"title-0":"BRBC","title-highlight-0":"Tokens","title-1":"\u0914\u0930 USDC","title-highlight-1":"\u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","text":"Liquidity Providing \u0915\u093e \u092a\u0939\u0932\u093e \u0930\u093e\u0909\u0902\u0921 2 \u092e\u0939\u0940\u0928\u0947 \u0924\u0915 \u091a\u0932\u0947\u0917\u093e \u0914\u0930 \u0907\u0938\u092e\u0947\u0902 \u092f\u0947 \u0928\u093f\u092f\u092e \u092e\u093e\u0928\u093e \u091c\u093e\u090f\u0917\u093e, \u092a\u0939\u0932\u0947 \u0906\u0913 \u0914\u0930 \u092a\u0939\u0932\u0947 \u092a\u093e\u0913","button":"BRBC \u0916\u093c\u0930\u0940\u0926\u0947\u0902"},"step2":{"title-highlight-0":"BRBC and USDC","title-0":"\u0915\u094b \u0932\u0949\u0915 \u0915\u0930\u0915\u0947 Liquidity \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0947\u0902","text":"\u091c\u092e\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092f\u0939 ratio \u0939\u0948 1 USDC : 4 BRBC","button":"\u0905\u092d\u0940 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902"},"step3":{"title-0":"Liquidity Providing \u0915\u0947 \u092a\u0939\u0932\u0947 \u0930\u093e\u0909\u0902\u0921 \u092e\u0947\u0902","title-highlight-0":"800,000 USDC \u0915\u0940 limit \u0939\u0948","text":"Staking \u0915\u0947 \u092a\u0939\u0932\u0947 \u0930\u093e\u0909\u0902\u0921 \u092e\u0947\u0902 \u092a\u093f\u091b\u0932\u0947 \u092a\u094d\u0930\u0924\u093f\u092d\u093e\u0917\u093f\u092f\u094b\u0902 \u0915\u094b Liquidity Providing \u0915\u0947 \u0932\u093f\u090f whitelist \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0964 24 \u0918\u0902\u091f\u0947 \u0915\u0947 \u0932\u093f\u090f, 500 \u0938\u0947 800 USDC \u092c\u093e\u0901\u091f\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u094b\u0902\u0917\u0947\u0964","link":"\u0914\u0930 \u091c\u093e\u0928\u0947\u0902"}},"subscription":{"title":"Qubic AI \u0915\u0947 Liquidity Providing Updates \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091c\u0941\u0921\u093c\u0947 \u0930\u0939\u0947\u0902","text":"Liquidity Providing \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0924\u093e\u091c\u093c\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u092c\u094d\u0938\u094d\u0915\u094d\u0930\u093e\u0907\u092c \u0915\u0930\u0947\u0902"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"\u092a\u0939\u0932\u093e \u0930\u093e\u0909\u0902\u0921","title-0_lp_started":"\u092a\u0939\u0932\u093e \u0930\u093e\u0909\u0902\u0921 \u0936\u0941\u0930\u0942 \u0939\u094b \u0917\u092f\u093e \u0939\u0948","text":"BRBC \u0914\u0930 USDC \u0926\u0940\u091c\u093f\u090f \u091c\u093f\u0938\u0938\u0947 \u0906\u092a\u0915\u094b 27% APR \u0924\u0915 USDC \u0907\u0928\u093e\u092e \u092e\u093f\u0932\u0947\u0902\u0917\u0947","features":{"0":"\u091c\u092e\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0930\u093e\u0936\u093f","1":"APR","2":"LP Coefficient"},"duration":{"title":"\u0936\u0941\u0930\u0942 \u0939\u094b\u0917\u093e"},"button":"\u0914\u0930 \u091c\u093e\u0928\u0947\u0902"}}}'
        ),
        Ct = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"Luncurkan app"},"footer":{"community":"komunitas","about":"tentang","products":"Produk","businessInquiries":"pertanyaan bisnis"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Tim","securityAudit":"Keamanan & Audit","statistics":"Statistik","contactUs":"Hubungi Kami","sdk":"SDK","referralProgram":"Program Rujukan","setupWidget":"Pengaturan  Widget","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"Isi Formulir"},"settings":{"chooseLanguage":"Pilih bahasa","languages":"Bahasa"},"main":{"multiChain":"Multi-Chain","swap":"Swap","protocol":"Protocol","info":"Qubic AI adalah Multi-Chain Swap Protocol yang memungkinkan Anda untuk menukar salah satu dari 15.500+ aset, di antara 18 blockchain hanya dalam satu klik."},"advantages":{"multiChainSwaps":"Multi-Chain Swap","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Swap aset ke beberapa blockchain dalam satu perdagangan","blockchains":"18 Blockchain","tradeAssets":"Perdagangkan 15.500+ Aset","tradeMoreAssetsWithTheLowestGasFees":"Perdagangkan lebih banyak aset, dengan gas fee terendah","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"Apa itu","rubic":"Qubic AI","info":"Qubic AI merupakan Multi-Chain Swap Protocol yang memungkinkan para pengguna untuk menyelesaikan swap dengan lebih dari 15.000+ aset di Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR and Telos - dalam satu klik. Protokol kami bahkan menampilkan 60+ DEXs, Fiat-on-Ramps dan bridge."},"grants":{"rubic":"Qubic AI","grants":"Hibah","info":"Qubic AI telah memenangkan hibah dari platform blockchain utama seperti"},"audits":{"rubic":"Qubic AI","audits":"Audit","text1":"Kontrak Qubic AI Multi-Chain telah diaudit oleh tim CertiK.","text2":"Kontrak Qubic AI Staking telah diaudit oleh tim Fairyproof.","link1":"Temukan hasil CertiK","link2":"Temukan hasil Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"Mendukung","dexs":"DEXs","blockchains":"BLOCKCHAIN"},"trade":{"trade":"Perdagangan","yourToken":"token Anda","directlyOn":"langsung di","yourPlatform":"platform Anda!","getWidget":"Dapatkan Widget","info":"Qubic AI Relay Widget memungkinkan pengguna untuk membeli dan menjual token di situs web mana pun. Pengguna dapat dengan mudah membeli token Anda, tanpa harus meninggalkan situs web Anda! Gratis dan mudah diatur; 40+ proyek telah mengintegrasi."},"documentation":{"documentation":"Dokumentasi","findOutMore":"Temukan lebih banyak tentang solusi Multi-Chain dan platform kami.","learnMore":"Pelajari lebih lanjut"},"subscription":{"subscribeToOurNewsletter":"Berlangganan Newsletter kami","receiveTheNewest":"Dapatkan update terbaru tentang staking","submit":"Kirim"},"contact":{"get":"Dapatkan","involved":"Terlibat","contactUsToLearn":"Hubungi kami untuk mempelajari lebih lanjut tentang cara menjadi validator, mengembangkan aplikasi di jaringan, atau mengintegrasikan chain Anda.","byClicking":"Dengan klik tombol \\"Kirimkan Pesan\\", Anda telah menyetujui secara otomatis","privacyPolicy":"kebijakan privasi","submitMessage":"Kirimkan Pesan"},"feedback":{"yourName":"Nama Anda*","emailAdress":"Alamat email*","telegram":"Akun Telegram*","companyOrProject":"Perusahaan atau Proyek*","companyWebsiteURL":"URL situs web perusahaan*","selectReason":"Pilih alasan, mengapa Anda tertarik dengan Qubic AI?*","yourMessage":"Pesan Anda untuk tim kami","integrateOurBlockchain":"Integrasikan blockchain kami ke Qubic AI","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Kesepakatan Perdagangan","ProblemsMultiChainRouting":"Masalah dengan Qubic AI Multi-Chain Routing"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"INTEGRASI 9 BLOCKCHAIN DALAM 30 MENIT","info":"Qubic AI SDK menawarkan swap On-Chain dan Multi-Chain dengan harga terbaik. 50% dari komisi Qubic AI akan diberikan kepada mitra. Gratis Integrasi!","link":"MULAI INTEGRASI","cards":{"title1":"Siapa yang dapat mengintegrasikan Qubic AI SDK?","title2":"Manfaat Qubic AI SDK","Wallets":"Dompet","dApps":"dApps","AnyPlatforms":"Platform apa saja","EarnUpTo":"Dapatkan komisi hingga 50%","GainAWhiteLabel":"Dapatkan White Label Solution","FullCustomization":"Penyesuaian Penuh"}},"widget":{"title":"Beli minimal\\n dari","title-highlight":"untuk mengambil bagian dalam staking"},"modal":{"WeSentConfirmation":"Terima kasih!\\n Kami telah mengirimkan konfirmasi ke email Anda.","theWidgetBecomePromoter":"Menjadi Promotor","theApplicationHasBeenSubmitted":"Terima kasih!\\n Aplikasi telah dikirim","theWidgetOnlySupports":"Widget ini hanya mendukung token yang terdaftar di Qubic AI.exchange. Untuk mendaftar, silakan isi formulir. Periksa dokumen untuk integrasi diri.","checkDocs":"Periksa dokumen","forSelfIntegration":"untuk integrasi diri.","submit":"Kirim","ok":"OKE"},"referralMain":{"referral":"Referral","program":"Program","becomeAPromoter":"Menjadi Promotor","info":"Dapatkan komisi dari pertukaran melalui widget dan dapatkan hadiah dari integrasi widget yang berhasil di situs web proyek yang dirujuk."},"referralAdvantages":{"withoutInvestments":"Tanpa Investasi","joinOurReferralProgramFreely":"Bergabunglah dengan referral program kami gratis","earnOfFees":"Dapatkan Komisi 50%","getProfitsFromAllSwaps":"Dapatkan keuntungan dari semua pertukaran melalui widget yang terpasang tanpa batas","getRBC":"Dapatkan 500 - 5.000 QBC","receiveFixedRewards":"Terima hadiah tetap untuk setiap integrasi widget"},"benefits":{"benefits":"MANFAAT","forProjects":"UNTUK PROYEK","text1":"Proyek yang telah mengintegrasikan widget melalui tautan referral akan menerima komisi sebesar 30% untuk setiap transaksi dalam jaringan.","text2":"Menggunakan seluruh manfaat Qubic AI App langsung di situs web proyek.","text3":"Dengan memasang widget, proyek akan meningkatkan volume perdagangan, meningkatkan harga token, menarik pengguna baru dan likuiditas dari proyek dan blockchain lain."},"howToStart":{"hotTo":"BAGAIMANA CARA","start":"MEMULAI?","joinTheReferralProgram":"Bergabung dengan referral program!","becomeARubicPromoter":"Menjadi promotor Qubic AI","signInThroughYourWallet":"Masuk melalui dompet Anda di Qubic AI App dan buat tautan referral unik.","becomeAPromoter":"Menjadi Promotor","promoteTheRubicWidget":"Promosikan Qubic AI Widget ke proyek","pitchToRepresentatives":"Sampaikan pada perwakilan proyek-kripto tentang manfaat unik dari Qubic AI Widget.","getPromoMaterials":"Dapatkan materi-promo","getPassiveIncome":"Hasilkan pendapatan pasif!","attractNewProjects":"Tarik proyek baru dan dapatkan penghasilan dari setiap widget yang terintegrasi di situ project yang dirujuk."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI Widget memungkinkan Anda untuk membeli dan menjual salah satu dari 15.000+ aset, di antara 12 blockchain dalam satu klik dan menggunakan semua fitur Qubic AI Exchange tanpa harus meninggalkan situs web."},"rules":{"program":"PROGRAM","rules":"ATURAN","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Untuk menerima hadiah tetap, proyek yang ditarik harus terdaftar di satu atau lebih platform:","text2":"Pengguna yang mereferensikan proyek mendapatkan 500 QBC untuk integrasi widget yang berhasil di situs web proyek atau mendapatkan 5.000 QBC jika proyek yang ditarik berada pada posisi 1.000 token teratas dalam peringkat keseluruhan di CoinGecko, CoinMarketCap atau CoinPaprika","text3":"Integrasi selesai ketika widget ditempatkan di situ web dan setelah setidaknya 10 pertukaran dilakukan","text4":"Promotor akan mendapatkan komisi sebesar 50% dari swap dalam token proyek yang memasang widget","detailedRules":"Aturan rinci"},"startDate":{"referralProgram":"REFERRAL PROGRAM","isLive":"LANGSUNG!","february":"10 Februari, 2022","becomeAPromoter":"Menjadi Promotor"},"widgetConfigurator":{"theme":"Tema","language":"Bahasa","fromAmount":"Dari jumlah","initialTradeAmount":"Dapat digunakan untuk menentukan \\n jumlah perdagangan awal","fromBlockchain":"Dari blockchain","fromToken":"Dari token","toBlockchain":"Ke blockchain","toToken":"Ke token","hideSelectionFrom":"Sembunyikan pilihan dari","hideSelectionTo":"Sembunyikan pilihan ke","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Memungkinkan Anda untuk mengunci token \\n pilihan di widget","fee":"Komisi","feeReceiverAddress":"Alamat penerima komisi","walletAddress":"Alamat dompet untuk \\n menerima komisi","display":"Tampilan","instantTrades":"Slippage perdagangan instan, %","slippageForInstantTrades":"Memungkinkan Anda untuk menyetel slippage default \\n untuk Perdagangan Instan","multiChain":"Slippage multi chain, %","slippageForMultiChain":"Memungkinkan Anda untuk menyetel slippage default \\n Multi-Chain","apply":"Terapkan"},"statistics":{"rubic":"RUBIC","statistics":"STATISTIK","info":"Lihat Statistik Multi-Chain Protocol Qubic AI","totalMultiChainVolume":"Jumlah Volume Multi-Chain","supportedAssets":"Aset Yang Didukung","totalUsers":"Jumlah Pengguna","totalValueLocked":"Jumlah Nilai Terkunci","apr":"APR","upTo":"HINGGA"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"PUTARAN KE-1","text-0":"Sediakan BRBC dan USDC untuk","text-1":"mendapatkan hadiah USDC hingga 27% APR","button":"BELI BRBC"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"PUTARAN KE-1 SUDAH DIMULAI","button":"Bergabung Sekarang"},"statistics":{"title-0":"DAPATKAN HINGGA","title-highlight-0":"27% APR","title-1":"DENGAN USDC","text":"Qubic AI membebankan biaya 0,3% untuk transaksi Multi-Chain yang akan didistribusikan di antara peserta Liquidity Providing"},"widget":{"title-0":"HANYA","title-highlight-0":"PEMEGANG BRBC","title-1":"YANG","title-highlight-1":"BERHAK UNTUK BERPARTISIPASI","text":"Dapatkan dari 2,000 hingga 20,000 BRBC untuk berpartisipasi dalam Liquidity Providing Program Kami"},"prepare":{"title-highlight-0":"BAGAIMANA SAYA BERPARTISIPASI","title-0":"DI LP RUBIC?","step1":{"title-0":"Dapatkan","title-highlight-0":"BRBC","title-1":"Token dan","title-highlight-1":"USDC","text":"Liquidity Providing putaran pertama akan beroperasi selama 2 bulan, dan berdasarkan First Come, First Served","button":"BELI BRBC"},"step2":{"title-highlight-0":"Provide Liquidity","title-0":"dengan mengunci BRBC dan USDC Anda","text":"Rasio untuk deposit adalah 1 USDC : 4 BRBC","button":"Bergabung Sekarang"},"step3":{"title-0":"Liquidity Providing Putaran Pertama terbatas pada","title-highlight-0":"800.000 USDC","text":"Peserta sebelumnya di putaran pertama Staking akan masuk whitelist untuk Liquidity Providing. Alokasi dari 500 hingga 800 USDC akan tersedia selama 24 jam","link":"Pelajari Lebih Lanjut"}},"subscription":{"title":"Nantikan Qubic AI\u2019s Liquidity Providing Updates","text":"Berlangganan untuk mendapatkan berita terbaru tentang Liquidity Providing"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"PUTARAN KE-1","title-0_lp_started":"PUTARAN KE-1 SUDAH DIMULAI","text":"Berikan BRBC dan USDC untuk mendapatkan hadiah USDC hingga 27% APR","features":{"0":"Jumlah Deposit","1":"APR","2":"Koefisien LP"},"duration":{"title":"MULAI"},"button":"PELAJARI LEBIH LANJUT"}}}'
        ),
        Rt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"Avvia app"},"footer":{"community":"comunit\xe0","about":"sui","products":"Prodotti","businessInquiries":"per richieste d\'affari"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"Team","securityAudit":"Sicurezza e Audit","statistics":"Statistiche","contactUs":"Contattateci","sdk":"SDK","referralProgram":"Programma di Riferimento","setupWidget":"Widget di Installazione","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"Compilare il Modulo"},"settings":{"chooseLanguage":"Scegli la lingua","languages":"Lingue"},"main":{"multiChain":"Multi-Chain","swap":"swap","protocol":"protocol","info":"Qubic AI \xe8 il Multi-Chain Swap Protocol che ti permette di scambiare uno qualsiasi degli oltre 15.500+ asset, su e tra 18 blockchain con un solo clic."},"advantages":{"multiChainSwaps":"Multi-Chain Swap","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"Swap asset tra pi\xf9 blockchain in un unico commercio","blockchains":"18 Blockchain","tradeAssets":"Commercio di pi\xf9 di 15.500+ attivit\xe0","tradeMoreAssetsWithTheLowestGasFees":"Scambia pi\xf9 asset, con le tariffe del gas pi\xf9 basse","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"Cos\'\xe8","rubic":"Qubic AI","info":"Qubic AI \xe8 il Multi-Chain Swap Protocol che permette agli utenti di completare scambi con oltre 15.000+ asset su Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR e Telos - in un clic. Il nostro Protocollo offre anche 60+ DEX, Fiat-on-Ramps e ponti."},"grants":{"rubic":"Qubic AI","grants":"Sovvenzioni","info":"Qubic AI ha ottenuto sovvenzioni dalle principali piattaforme blockchain come"},"audits":{"rubic":"Qubic AI","audits":"Audits","text1":"I contratti Qubic AI Multi-Chain sono stati controllati dal team CertiK","text2":"I contratti Qubic AI Staking sono stati controllati dal team Fairyproof","link1":"Trova risultati CertiK","link2":"Trova risultati Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"supporta","dexs":"DEXs","blockchains":"BLOCKCHAIN"},"trade":{"trade":"Commercio","yourToken":"il tuo token","directlyOn":"direttamente su","yourPlatform":"la tua piattaforma!","getWidget":"Prendi il Widget","info":"Il Qubic AI Relay Widget consente agli utenti di acquistare e vendere token su qualsiasi sito Web. Gli utenti possono facilmente acquistare il tuo token, senza mai dover lasciare il tuo sito web! \xc8 gratuito e facile da configurare; pi\xf9 di 40 progetti l\'hanno gi\xe0 integrata."},"documentation":{"documentation":"Documentazione","findOutMore":"Scopri di pi\xf9 sulla nostra soluzione e piattaforma Multi-Chain","learnMore":"Per saperne di pi\xf9"},"subscription":{"subscribeToOurNewsletter":"Iscriviti alla nostra newsletter","receiveTheNewest":"Ricevi gli ultimi aggiornamenti su staking","submit":"Invia"},"contact":{"get":"Prendi","involved":"Coinvolto","contactUsToLearn":"Contattaci per saperne di pi\xf9 su come puoi diventare un validatore, sviluppare un\'applicazione sulla rete, o integrare la tua chain.","byClicking":"Facendo clic sul pulsante \'Invia messaggio\', si accetta automaticamente il","privacyPolicy":"privacy policy","submitMessage":"Invia messaggio"},"feedback":{"yourName":"Il tuo nome*","emailAdress":"Indirizzo e-mail*","telegram":"Conto telegramma*","companyOrProject":"Societ\xe0 o progetto*","companyWebsiteURL":"URL del sito web della societ\xe0*","selectReason":"Seleziona il motivo, perch\xe9 sei interessato a Qubic AI?*","yourMessage":"Il tuo messaggio al nostro team","integrateOurBlockchain":"Integrare la nostra blockchain a Qubic AI","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Affare commerciale","ProblemsMultiChainRouting":"Problemi con Qubic AI Multi-Chain Routing"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"INTEGRARE 9 BLOCKCHAIN IN 30 MIN","info":"Qubic AI SDK offre swap On-Chain e Multi-Chain alle migliori tariffe possibili. Il 50% della commissione Qubic AI va ai partner. L\'integrazione \xe8 gratuita!","link":"AVVIA L\'INTEGRAZIONE","cards":{"title1":"Chi pu\xf2 integrare il Qubic AI SDK?","title2":"Vantaggi di Qubic AI\'s SDK","Wallets":"Portafogli","dApps":"dApps","AnyPlatforms":"Qualsiasi piattaforma","EarnUpTo":"Guadagnare fino al 50% dalle tariffe","GainAWhiteLabel":"Ottieni una soluzione White Label","FullCustomization":"Personalizzazione completa"}},"widget":{"title":"Acquista un numero minimo\\n di","title-highlight":"per partecipare alla staking"},"modal":{"WeSentConfirmation":"Grazie!\\n Abbiamo inviato una lettera di conferma alla tua posta.","theWidgetBecomePromoter":"Diventa un promotore","theApplicationHasBeenSubmitted":"Grazie.\\n La candidatura \xe8 stata inoltrata","theWidgetOnlySupports":"Il widget supporta solo i token elencati in Qubic AI.exchange. Per essere elencati, compilare il modulo. Controllare i documenti per la selfintegrazione.","checkDocs":"Controlla documenti","forSelfIntegration":"per selfintegrazione.","submit":"Invia","ok":"OK"},"referralMain":{"referral":"Referral di","program":"Riferimento","becomeAPromoter":"Diventa un promotore","info":"Guadagna sulle commissioni da swaps attraverso widget e ottenere premi fissi per le integrazioni di widget di successo sui siti web dei progetti indicati."},"referralAdvantages":{"withoutInvestments":"Senza Investimenti","joinOurReferralProgramFreely":"Partecipa liberamente al nostro programma di referral","earnOfFees":"Guadagna il 50% della tariffe","getProfitsFromAllSwaps":"Ottenere profitti da tutti gli swap attraverso il widget installato senza limiti","getRBC":"Ottenere 500 - 5.000 QBC","receiveFixedRewards":"Ricevi premi fissi per ogni integrazione widget"},"benefits":{"benefits":"BENEFICI","forProjects":"PER PROGETTI","text1":"I progetti che hanno integrato il widget attraverso il collegamento di rinvio riceveranno il 30% delle tariffe per ogni transazione on-chain.","text2":"Utilizzando tutti i vantaggi di Qubic AI App direttamente sul sito web dei progetti.","text3":"Installando il widget, i progetti aumenteranno i loro volumi di scambi, aumenteranno i prezzi dei token, attireranno nuovi utenti e la liquidit\xe0 da altri progetti e blockchain."},"howToStart":{"hotTo":"COME SI FA","start":"INIZIO?","joinTheReferralProgram":"Partecipa al programma di referral!","becomeARubicPromoter":"Diventa un promotore Qubic AI","signInThroughYourWallet":"Accedi attraverso il tuo portafoglio sull\'app Qubic AI e genera un collegamento di riferimento univoco.","becomeAPromoter":"Diventa un promotore","promoteTheRubicWidget":"Promuovere il Qubic AI Widget ai progetti","pitchToRepresentatives":"Pitch ai rappresentanti di cripto-progetti sui vantaggi unici di Qubic AI Widget.","getPromoMaterials":"Ottieni materiale promozionale","getPassiveIncome":"Ottieni reddito passivo!","attractNewProjects":"Attrarre nuovi progetti e ottenere il reddito da ogni widget integrato sul sito del progetto indicato."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Il Widget Qubic AI consente di acquistare e vendere qualsiasi delle oltre 15.000+ risorse, su e tra 12 blockchain in un clic e utilizzare tutte le funzionalit\xe0 di Qubic AI Exchange senza dover lasciare il sito web."},"rules":{"program":"PROGRAMMA","rules":"REGOLE","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"Per ricevere una ricompensa fissa il progetto attratto deve essere elencato su una o pi\xf9 piattaforme:","text2":"L\'utente che ha fatto riferimento al progetto ottiene 500 QBC per l\'integrazione riuscita del widget sul sito del progetto o 5.000 QBC se il progetto attratto \xe8 nella Top 1.000 gettoni nella classifica generale su CoinGecko, CoinMarketCap o CoinPaprika","text3":"L\'integrazione \xe8 completata quando il widget \xe8 inserito sul sito web del progetto e dopo almeno 10 swap","text4":"Il promotore ricever\xe0 il 50% delle commissioni dagli swap nel token del progetto che ha installato il widget","detailedRules":"Regole dettagliate"},"startDate":{"referralProgram":"PROGRAMMA DI REFERRAL","isLive":"\xc8 VIVO!","february":"10 febbraio 2022","becomeAPromoter":"Diventa un promotore"},"widgetConfigurator":{"theme":"Tema","language":"lingua","fromAmount":"Da importo","initialTradeAmount":"Pu\xf2 essere utilizzato per specificare \\n l\'importo iniziale dell\'operazione","fromBlockchain":"Da blockchain","fromToken":"Da token","toBlockchain":"A blockchain","toToken":"A token","hideSelectionFrom":"Nascondi selezione da","hideSelectionTo":"Nascondi selezione a","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"Consente di bloccare la selezione di token \\n nel widget","fee":"Tassa","feeReceiverAddress":"Indirizzo del ricevitore della tariffa","walletAddress":"Indirizzo del portafoglio per ricevere le tariffe","display":"Display","instantTrades":"Scivolamento immediato delle transazioni, %","slippageForInstantTrades":"Permette di impostare la ricevuta predefinita per le transazioni istantanee","multiChain":"slittamento multi chain, %","slippageForMultiChain":"Permette di impostare lo slippage di default \\n per il Multi chain","apply":"Applica"},"statistics":{"rubic":"RUBIC\'S","statistics":"STATISTICHE","info":"Scopri le Statistiche del Qubic AI\u2019s Multi-Chain Protocol","totalMultiChainVolume":"Volume Totale Multi-Chain","supportedAssets":"Attivit\xe0 Sovvenzionate","totalUsers":"Totale Utenti","totalValueLocked":"Valore Totale Bloccato","apr":"APR","upTo":"FINO a"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"1O CICLO","text-0":"Fornire BRBC e USDC a","text-1":"ottenere premi USDC fino al 27% APR","button":"ACQUISTA BRBC"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"IL PRIMO CICLO \xc8 INIZIATO","button":"Partecipa Ora"},"statistics":{"title-0":"GUADAGNA FINO A","title-highlight-0":"27% APR","title-1":"CON USDC","text":"Qubic AI addebita una commissione dello 0,3% per le transazioni Multi-Chain che saranno distribuite tra i partecipanti che Liquidity Providing"},"widget":{"title-0":"ONLY","title-highlight-0":"TITOLARI BRBC","title-1":"SONO","title-highlight-1":"IDONEI A PARTECIPARE","text":"Acquisire da 2,000 a 20,000 BRBC per partecipare al nostro Liquidity Providing Program"},"prepare":{"title-highlight-0":"COME PARTECIPO","title-0":"IN RUBIC\'S LP?","step1":{"title-0":"Acquisire","title-highlight-0":"BRBC","title-1":"Tokens e","title-highlight-1":"USDC","text":"La prima fase di immissione di Liquidity Providing per 2 mesi, sulla base del principio Primo Arrivato, Primo Servito","button":"ACQUISTA BRBC"},"step2":{"title-highlight-0":"Provide Liquidity","title-0":"bloccando il tuo BRBC e USDC","text":"Il coefficiente per i depositi \xe8 1 USDC: 4 BRBC","button":"Partecipa Ora"},"step3":{"title-0":"La Prima Fase di Liquidity Providing \xe8 Limitata a","title-highlight-0":"800,000 USDC","text":"I precedenti partecipanti alla prima Staking tornata saranno inseriti nella lista bianca per Liquidity Providing. L\'assegnazione da 500 a 800 USDC sar\xe0 disponibile per 24 ore","link":"Ulteriori Informazioni"}},"subscription":{"title":"Continuare a seguire gli Qubic AI\u2019s Liquidity Providing Updates","text":"Iscriviti per ricevere le ultime notizie sull Liquidity Providing"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1O CICLO","title-0_lp_started":"IL PRIMO CICLO \xc8 INIZIATO","text":"Fornire BRBC e USDC per ottenere premi USDC fino al 27% APR","features":{"0":"Importo del Deposito","1":"APR","2":"Coefficiente LP"},"duration":{"title":"INIZIA SU"},"button":"ULTERIORI INFORMAZIONI"}}}'
        ),
        At = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"\u0627\u062c\u0631\u0627\u06cc App"},"footer":{"community":"\u062c\u0627\u0645\u0639\u0647","about":"\u062f\u0631\u0628\u0627\u0631\u0647","products":"\u0645\u062d\u0635\u0648\u0644\u0627\u062a","businessInquiries":"\u0628\u0631\u0627\u06cc \u067e\u0631\u0633\u200c\u0648\u062c\u0648\u06cc\u200c\u0647\u0627\u06cc \u062a\u062c\u0627\u0631\u06cc"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"\u06af\u0631\u0648\u0647","securityAudit":"\u0627\u0645\u0646\u06cc\u062a \u0648 \u0645\u0645\u06cc\u0632\u06cc","statistics":"\u0622\u0645\u0627\u0631","contactUs":"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627","sdk":"SDK","referralProgram":"\u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0631\u062c\u0627\u0639","setupWidget":"\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc Widget","fiatOnRamp":"Fiat-on-Ramp","roadmap":"Roadmap","fillOutTheForm":"\u0641\u0631\u0645 \u0631\u0627 \u067e\u0631 \u06a9\u0646"},"settings":{"chooseLanguage":"\u0627\u0646\u062a\u062e\u0627\u0628 \u0632\u0628\u0627\u0646","languages":"\u0632\u0628\u0627\u0646\u200c\u0647\u0627"},"main":{"multiChain":"Multi-chain","swap":"swap","protocol":"protocol","info":"Qubic AI Multi-Chain Swap Protocol \u0628\u0647 \u0634\u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646 \u0628\u06cc\u0634 \u0627\u0632 \u06f1\u06f5\u06f0\u06f0\u06f0 \u062f\u0627\u0631\u0627\u06cc\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u06cc\u0627\u0632\u062f\u0647 Blockchain \u0648 \u0645\u0627\u0628\u06cc\u0646 \u0622\u0646\u0647\u0627 \u0641\u0642\u0637 \u0628\u0627 \u06cc\u06a9 \u06a9\u0644\u06cc\u06a9 \u0645\u0628\u0627\u062f\u0644\u0647 \u06a9\u0646\u06cc\u062f."},"advantages":{"multiChainSwaps":"Multi-Chain Swaps","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"\u062f\u0627\u0631\u0627\u06cc\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u0645\u0639\u0627\u0645\u0644\u0647 \u0645\u06cc\u0627\u0646 \u0686\u0646\u062f\u06cc\u0646 \u0628\u0644\u0627\u06a9\u200c\u0686\u06cc\u0646 swap \u06a9\u0646\u06cc\u062f","blockchains":"Blockchain 18","tradeAssets":"\u0628\u06cc\u0634 \u0627\u0632 \u06f1\u06f5.\u06f0\u06f0\u06f0 \u062f\u0627\u0631\u0627\u06cc\u06cc \u0631\u0627 \u0645\u0639\u0627\u0645\u0644\u0647 \u06a9\u0646\u06cc\u062f","tradeMoreAssetsWithTheLowestGasFees":"\u062f\u0627\u0631\u0627\u06cc\u06cc\u200c\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0627 \u06a9\u0645\u062a\u0631\u06cc\u0646 Gas price \u0645\u0639\u0627\u0645\u0644\u0647 \u06a9\u0646\u06cc\u062f","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"\u0686\u06cc\u0633\u062a","rubic":"RUBIC","info":"Qubic AI Multi-Chain Swap Protocol \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 swap \u0647\u0627 \u0631\u0627 \u0628\u0627 \u0628\u06cc\u0634 \u0627\u0632 \u06f1\u06f5/\u06f0\u06f0\u06f0 \u062f\u0627\u0631\u0627\u06cc\u06cc \u0628\u0631 \u0631\u0648\u06cc Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos - \u062f\u0631 \u06cc\u06a9 \u06a9\u0644\u06cc\u06a9 \u062a\u06a9\u0645\u06cc\u0644 \u06a9\u0646\u0646\u062f. Protocol \u0645\u0627 \u062d\u062a\u06cc \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u06cc \u0647\u0645\u0686\u0648\u0646 \u0628\u06cc\u0634 \u0627\u0632 \u06f6\u06f0 DEX\u060c Fiat-on-Ramp \u0648 \u067e\u0644 \u0628\u0644\u0627\u06a9\u200c\u0686\u06cc\u0646 \u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f."},"grants":{"rubic":"Qubic AI","grants":"\u06a9\u0645\u06a9 \u0645\u0627\u0644\u06cc","info":"Qubic AI \u06a9\u0645\u06a9\u200c\u0647\u0627\u06cc \u0645\u0627\u0644\u06cc \u0628\u0633\u06cc\u0627\u0631\u06cc \u0631\u0627 \u0627\u0632 \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u0645\u0647\u0645 \u0628\u0644\u0627\u06a9\u200c\u0686\u06cc\u0646 \u0628\u0631\u0646\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0645\u0627\u0646\u0646\u062f"},"audits":{"rubic":"Qubic AI","audits":"\u0627\u0631\u0632\u06cc\u0627\u0628\u06cc\u200c\u0647\u0627","text1":"\u0642\u0631\u0627\u0631\u062f\u0627\u062f\u0647\u0627\u06cc Qubic AI Multi-Chain \u062a\u0648\u0633\u0637 CertiK team \u0645\u0645\u06cc\u0632\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f.","text2":"\u0642\u0631\u0627\u0631\u062f\u0627\u062f\u0647\u0627\u06cc Qubic AI Staking \u062a\u0648\u0633\u0637 Fairyproof team \u0645\u0645\u06cc\u0632\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f","link1":"\u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u062a\u0627\u06cc\u062c CertiK","link2":"\u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u062a\u0627\u06cc\u062c Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f","dexs":"DEXs","blockchains":"BLOCKCHAIN"},"trade":{"trade":"\u0645\u0639\u0627\u0645\u0644\u0647","yourToken":"Token \u0634\u0645\u0627","directlyOn":"\u0645\u0633\u062a\u0642\u06cc\u0645\u0627\u064b \u0628\u0631 \u0631\u0648\u06cc","yourPlatform":"\u067e\u0644\u062a\u0641\u0631\u0645 \u0634\u0645\u0627!","getWidget":"\u062f\u0631\u06cc\u0627\u0641\u062a Widget","info":"Qubic AI Relay Widget \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0628\u0631 \u0631\u0648\u06cc \u0647\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u06cc \u0628\u0647 \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634 Token \u0628\u067e\u0631\u062f\u0627\u0632\u0646\u062f. \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0628\u0647 \u0622\u0633\u0627\u0646\u06cc Token \u0634\u0645\u0627 \u0631\u0627 \u062e\u0631\u06cc\u062f\u0627\u0631\u06cc \u06a9\u0646\u0646\u062f\u060c \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u06a9\u0647 \u0646\u06cc\u0627\u0632\u06cc \u0628\u0647 \u062a\u0631\u06a9 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f! \u0646\u0635\u0628 \u0631\u0627\u06cc\u06af\u0627\u0646 \u0648 \u0622\u0633\u0627\u0646\u061b \u0647\u0645 \u0627\u06a9\u0646\u0648\u0646 \u0628\u06cc\u0634 \u0627\u0632 \u06f4\u06f0 \u067e\u0631\u0648\u0698\u0647 \u0627\u062f\u063a\u0627\u0645 \u0634\u062f\u0647\u200c\u0627\u0646\u062f."},"documentation":{"documentation":"\u0645\u0633\u062a\u0646\u062f\u0627\u062a","findOutMore":"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631\u06cc \u0631\u0627 \u062f\u0631\u0628\u0627\u0631\u0647 Multi-Chain \u0648 \u067e\u0644\u062a\u0641\u0631\u0645 \u0645\u0627 \u06a9\u0633\u0628 \u06a9\u0646\u06cc\u062f","learnMore":"\u0628\u06cc\u0634\u062a\u0631 \u0628\u06cc\u0627\u0645\u0648\u0632\u06cc\u062f"},"subscription":{"subscribeToOurNewsletter":"\u062f\u0631 Newsletter \u0645\u0627 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f","receiveTheNewest":"\u0622\u062e\u0631\u06cc\u0646 \u0627\u062e\u0628\u0627\u0631 \u0631\u0627 \u062f\u0631\u0628\u0627\u0631\u0647 Staking \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f","submit":"\u0627\u0631\u0633\u0627\u0644"},"contact":{"get":"\u062f\u0631\u06cc\u0627\u0641\u062a","involved":"\u0645\u0634\u0627\u0631\u06a9\u062a","contactUsToLearn":"\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631\u0628\u0627\u0631\u0647 \u0686\u06af\u0648\u0646\u06af\u06cc \u062a\u0628\u062f\u06cc\u0644 \u0634\u062f\u0646 \u0628\u0647 \u06cc\u06a9 \u0627\u0639\u062a\u0628\u0627\u0631\u062f\u0647\u0646\u062f\u0647\u060c \u062a\u0648\u0633\u0639\u0647 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0631 \u0631\u0648\u06cc \u0634\u0628\u06a9\u0647 \u0648 \u06cc\u0627 \u0627\u062f\u063a\u0627\u0645 \u0632\u0646\u062c\u06cc\u0631\u0647 \u0628\u0644\u0627\u06a9 \u062e\u0648\u062f \u0628\u0627 \u0645\u0627 \u062a\u0645\u0627\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f. ","byClicking":"\u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \\"\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645\\" \u0634\u0645\u0627 \u0628\u0647 \u0637\u0648\u0631 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0634\u0645\u0627 \u0645\u0648\u0627\u0641\u0642\u062a \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0627 \u0645\u0648\u0627\u0631\u062f \u0630\u06cc\u0644 \u0627\u0639\u0644\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f","privacyPolicy":"\u0633\u06cc\u0627\u0633\u062a \u0645\u062d\u0631\u0645\u0627\u0646\u06af\u06cc","submitMessage":"\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645"},"feedback":{"yourName":"\u0646\u0627\u0645 \u0634\u0645\u0627*","emailAddress":"\u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644*","telegram":"\u062d\u0633\u0627\u0628 \u062a\u0644\u06af\u0631\u0627\u0645*","companyOrProject":"\u0634\u0631\u06a9\u062a \u06cc\u0627 \u067e\u0631\u0648\u0698\u0647*","companyWebsiteURL":"\u0644\u06cc\u0646\u06a9 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0634\u0631\u06a9\u062a*","selectReason":"\u0644\u0637\u0641\u0627\u064b \u062f\u0644\u06cc\u0644 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f\u060c \u0686\u0631\u0627 \u0628\u0647 \u0631\u0648\u0628\u06cc\u06a9 \u0639\u0644\u0627\u0642\u0647\u200c\u0645\u0646\u062f \u0647\u0633\u062a\u06cc\u062f\u061f*","yourMessage":"\u067e\u06cc\u0627\u0645 \u0634\u0645\u0627 \u0628\u0647 \u062a\u06cc\u0645 \u0645\u0627","integrateOurBlockchain":"blockchain \u0645\u0627 \u0631\u0627 \u062f\u0631 Qubic AI \u0627\u062f\u063a\u0627\u0645 \u06a9\u0646\u06cc\u062f","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"\u067e\u06cc\u0645\u0627\u0646 \u062a\u062c\u0627\u0631\u06cc","ProblemsMultiChainRouting":"\u0645\u0634\u06a9\u0644\u0627\u062a Qubic AI Multi-Chain Routing"},"launch":{"end":{"title":"THE 3RD ROUND OF STAKING","title-highlight":"IS STARTED","text":"Complete Rules","link":"Stake"}},"sdk":{"title-0":"SDK.","title-highlight-0":"\u06f9 BLOCKCHAIN \u0631\u0627 \u062f\u0631 \u06f3\u06f0 \u062f\u0642\u06cc\u0642\u0647 \u0627\u062f\u063a\u0627\u0645 \u06a9\u0646\u06cc\u062f","info":"Qubic AI SDK \u0645\u0628\u0627\u062f\u0644\u0647 On-Chain \u0648 Multi-Chain \u0631\u0627 \u0628\u0627 \u0628\u0647\u062a\u0631\u06cc\u0646 \u0642\u06cc\u0645\u062a \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc \u062f\u0647\u062f. . \u06f5\u06f0\u066a \u06a9\u0645\u06cc\u0633\u06cc\u0648\u0646 Qubic AI \u0628\u0647 \u0634\u0631\u06a9\u0627 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.","link":"\u0641\u0631\u0627\u06cc\u0646\u062f \u0627\u062f\u063a\u0627\u0645 \u0631\u0627 \u0622\u063a\u0627\u0632 \u06a9\u0646\u06cc\u062f","cards":{"title1":"\u0686\u0647 \u06a9\u0633\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f Qubic AI SDK \u0631\u0627 \u0627\u062f\u063a\u0627\u0645 \u06a9\u0646\u06cc\u062f\u061f","title2":"\u0645\u0632\u0627\u06cc\u0627\u06cc Qubic AI SDK","Wallets":"\u06a9\u06cc\u0641\u200c\u0647\u0627\u06cc \u067e\u0648\u0644","dApps":"dApps","AnyPlatforms":"\u0647\u0631 \u067e\u0644\u062a\u0641\u0631\u0645\u06cc","EarnUpTo":"\u062a\u0627 \u0645\u06cc\u0632\u0627\u0646 \u06f5\u06f0\u066a \u0627\u0632 \u06a9\u0627\u0631\u0645\u0632\u062f\u200c\u0647\u0627 \u06a9\u0633\u0628 \u062f\u0631\u0622\u0645\u062f \u06a9\u0646\u06cc\u062f","GainAWhiteLabel":"\u06cc\u06a9 \u0631\u0627\u0647\u06a9\u0627\u0631 \u0628\u0631\u0686\u0633\u0628 \u0633\u0641\u06cc\u062f \u0628\u0647 \u062f\u0633\u062a \u0622\u0648\u0631\u06cc\u062f","FullCustomization":"\u0633\u0641\u0627\u0631\u0634\u06cc\u200c\u0633\u0627\u0632\u06cc \u06a9\u0627\u0645\u0644"}},"widget":{"title":"\u0633\u0641\u0627\u0631\u0634 \u0645\u0642\u062f\u0627\u0631 \u062d\u062f\u0627\u0642\u0644\\n \u0627\u0632","title-highlight":"\u0645\u0634\u0627\u0631\u06a9\u062a \u062f\u0631 Staking"},"modal":{"WeSentConfirmation":"\u062e\u06cc\u0644\u06cc \u0645\u0645\u0646\u0648\u0646!\\n \u06cc\u06a9 \u0646\u0627\u0645\u0647 \u062a\u0623\u06cc\u06cc\u062f \u0628\u0647 \u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0631\u062f\u06cc\u0645.","theWidgetBecomePromoter":"\u06cc\u06a9 \u0645\u0631\u0648\u062c \u0634\u0648\u06cc\u062f","theApplicationHasBeenSubmitted":"\u062e\u06cc\u0644\u06cc \u0645\u0645\u0646\u0648\u0646!\\n \u0641\u0631\u0645 \u062a\u0642\u0627\u0636\u0627 \u0627\u0631\u0633\u0627\u0644 \u0634\u062f","theWidgetOnlySupports":"widget \u062a\u0646\u0647\u0627 \u0627\u0632 Token\u200c\u0647\u0627\u06cc\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u062f\u0631 Qubic AI.exchange \u0644\u06cc\u0633\u062a \u0634\u062f\u0647 \u0628\u0627\u0634\u0646\u062f. \u0644\u0637\u0641\u0627\u064b \u0628\u0631\u0627\u06cc \u0642\u0631\u0627\u0631\u06af\u0631\u0641\u062a\u0646 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0641\u0631\u0645 \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f. \u0628\u0631\u0627\u06cc \u062e\u0648\u062f \u0627\u062f\u063a\u0627\u0645\u06cc \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f.","checkDocs":"\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f","forSelfIntegration":"\u0628\u0631\u0627\u06cc \u062e\u0648\u062f \u0627\u062f\u063a\u0627\u0645\u06cc.","submit":"\u0627\u0631\u0633\u0627\u0644","ok":"\u0628\u0627\u0634\u0647"},"referralMain":{"referral":"\u0627\u0631\u062c\u0627\u0639","program":"\u0628\u0631\u0646\u0627\u0645\u0647","becomeAPromoter":"\u06cc\u06a9 \u0645\u0631\u0648\u062c \u0634\u0648\u06cc\u062f","info":"\u0627\u0632 \u06a9\u0627\u0631\u0645\u0632\u062f Swap\u0647\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 Widget \u06a9\u0633\u0628 \u062f\u0631\u0622\u0645\u062f \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0627\u0628\u062a \u0627\u062f\u063a\u0627\u0645 Widget \u062f\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0627\u0631\u062c\u0627\u0639 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u067e\u0627\u062f\u0627\u0634\u200c\u0647\u0627\u06cc \u062b\u0627\u0628\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f."},"referralAdvantages":{"withoutInvestments":"\u0628\u062f\u0648\u0646 \u0633\u0631\u0645\u0627\u06cc\u0647\u200c\u06af\u0630\u0627\u0631\u06cc","joinOurReferralProgramFreely":"\u0628\u0647 \u0635\u0648\u0631\u062a \u0631\u0627\u06cc\u06af\u0627\u0646 \u0639\u0636\u0648 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0631\u062c\u0627\u0639 \u0645\u0627 \u0634\u0648\u06cc\u062f","earnOfFees":"\u0645\u06cc\u0632\u0627\u0646 \u06f5\u06f0\u066a \u0627\u0632 \u06a9\u0627\u0631\u0645\u0632\u062f\u0647\u0627 \u0631\u0627 \u0627\u0632 \u0622\u0646 \u062e\u0648\u062f \u06a9\u0646\u06cc\u062f","getProfitsFromAllSwaps":"\u0627\u0632 \u0637\u0631\u06cc\u0642 Widget \u0646\u0635\u0628\u200c\u0634\u062f\u0647 \u0627\u0632 \u0647\u0645\u0647 swap\u0647\u0627 \u0633\u0648\u062f \u06a9\u0633\u0628 \u06a9\u0646\u06cc\u062f","getRBC":"\u062a\u0639\u062f\u0627\u062f \u06f5\u06f0\u06f0 \u0627\u0644\u06cc \u06f5\u06f0\u06f0\u06f0 QBC \u0628\u0647 \u062f\u0633\u062a \u0622\u0648\u0631\u06cc\u062f","receiveFixedRewards":"\u0628\u0631\u0627\u06cc \u0647\u0631 \u0627\u062f\u063a\u0627\u0645 Widget \u067e\u0627\u062f\u0627\u0634\u200c \u062b\u0627\u0628\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f"},"benefits":{"benefits":"\u0645\u0632\u0627\u06cc\u0627","forProjects":"\u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627","text1":"\u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 Widget \u0631\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0644\u06cc\u0646\u06a9 \u0627\u0631\u062c\u0627\u0639 \u0627\u062f\u063a\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u0646\u062f \u06f3\u06f0\u066a \u0627\u0632 \u06a9\u0627\u0631\u0645\u0632\u062f\u0647\u0627\u06cc \u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627\u06cc On-chain \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0648\u0627\u0647\u0646\u062f \u06a9\u0631\u062f.","text2":"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u0633\u062a\u0642\u06cc\u0645 \u0627\u0632 \u0645\u0632\u0627\u06cc\u0627\u06cc Qubic AI App \u062f\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627.","text3":"\u0628\u0627 \u0646\u0635\u0628 widget \u060c \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627 \u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647\u060c \u0642\u06cc\u0645\u062a Token\u200c\u0647\u0627 \u0631\u0627 \u0628\u0627\u0644\u0627 \u0628\u0631\u062f\u0647 \u0648 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062c\u062f\u06cc\u062f \u0648 \u062c\u0631\u06cc\u0627\u0646 \u0645\u0627\u0644\u06cc \u0627\u0632 \u0627\u0632 \u062f\u06cc\u06af\u0631 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627 \u0648 blockchain \u062c\u0630\u0628 \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f"},"howToStart":{"hotTo":"\u0686\u06af\u0648\u0646\u0647","start":"\u0634\u0631\u0648\u0639 \u06a9\u0646\u0645\u061f","joinTheReferralProgram":"\u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0631\u062c\u0627\u0639 \u0628\u067e\u06cc\u0648\u0646\u062f\u0645!","becomeARubicPromoter":"\u06cc\u06a9 \u0645\u0631\u0648\u062c Qubic AI \u0634\u0648\u0645","signInThroughYourWallet":"\u0627\u0632 \u0637\u0631\u06cc\u0642 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u062f\u0631 Qubic AI App \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f \u0648 \u0644\u06cc\u0646\u06a9 \u0627\u0631\u062c\u0627\u0639 \u06cc\u06a9\u062a\u0627 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f.","becomeAPromoter":"\u06cc\u06a9 \u0645\u0631\u0648\u062c \u0634\u0648\u06cc\u062f","promoteTheRubicWidget":"Qubic AI Widget \u0631\u0627 \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627 \u062a\u0631\u0648\u06cc\u062c \u06a9\u0646\u06cc\u062f","pitchToRepresentatives":"\u0645\u0632\u0627\u06cc\u0627\u06cc \u0645\u0646\u062d\u0635\u0631\u0628\u0647\u200c\u0641\u0631\u062f Qubic AI Widget \u0631\u0627 \u0628\u0647 \u0646\u0645\u0627\u06cc\u0646\u062f\u06af\u0627\u0646 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0631\u0645\u0632\u0627\u0631\u0632 \u0631\u0627 \u062f\u0631\u0628\u0627\u0631\u0647 \u062a\u0628\u0644\u06cc\u063a \u06a9\u0646\u06cc\u062f.","getPromoMaterials":"\u0645\u062d\u062a\u0648\u0627\u06cc \u062a\u0631\u0648\u06cc\u062c\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f","getPassiveIncome":"\u062f\u0631\u0622\u0645\u062f \u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f!","attractNewProjects":"\u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f\u06cc \u062c\u0630\u0628 \u06a9\u0646\u06cc\u062f \u0648 \u0627\u0632 \u0647\u0631 \u0627\u062f\u063a\u0627\u0645 widget \u062f\u0631 \u0633\u0627\u06cc\u062a \u067e\u0631\u0648\u0698\u0647 \u0627\u0631\u062c\u0627\u0639 \u0634\u062f\u0647 \u06a9\u0633\u0628 \u062f\u0631\u0622\u0645\u062f \u06a9\u0646\u06cc\u062f."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI Widget \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0647\u0631\u06a9\u062f\u0627\u0645 \u0627\u0632 \u0628\u06cc\u0634 \u0627\u0632 \u06f1\u06f5\u06f0\u06f0\u06f0 \u062f\u0627\u0631\u0627\u06cc\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u06f1\u06f1 \u0628\u0644\u0627\u06a9\u200c\u0686\u06cc\u0646 \u0648 \u0645\u06cc\u0627\u0646 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u0644\u06cc\u06a9 \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634 \u06a9\u0631\u062f\u0647 \u0648 \u0627\u0632 \u062a\u0645\u0627\u0645\u06cc \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0635\u0631\u0627\u0641\u06cc \u0631\u0648\u0628\u06cc\u06a9 \u0628\u062f\u0648\u0646 \u062e\u0627\u0631\u062c \u0634\u062f\u0646 \u0627\u0632 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."},"rules":{"program":"\u0628\u0631\u0646\u0627\u0645\u0647","rules":"\u0642\u0648\u0627\u0646\u06cc\u0646","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0627\u062f\u0627\u0634 \u062b\u0627\u0628\u062a \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627 \u0645\u06cc\u200c\u0628\u0627\u06cc\u0633\u062a \u062f\u0631 \u06cc\u06a9 \u067e\u0644\u062a\u0641\u0631\u0645 \u0648 \u06cc\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0644\u06cc\u0633\u062a \u0634\u062f\u0647 \u0628\u0627\u0634\u0646\u062f:","text2":"\u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0627\u0631\u062c\u0627\u0639 \u062f\u0627\u062f\u0647 \u0627\u0633\u062a \u0628\u0627\u0628\u062a \u0627\u062f\u063a\u0627\u0645 \u0645\u0648\u0641\u0642\u06cc\u062a\u200c\u0622\u0645\u06cc\u0632 Widget \u062f\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u067e\u0631\u0648\u0698\u0647 \u06f5\u06f0\u06f0 QBC \u0648 \u0627\u06af\u0631 \u067e\u0631\u0648\u0698\u0647 \u062c\u0630\u0628 \u0634\u062f\u0647 \u062c\u0632\u0648 \u06f1\u06f0\u06f0\u06f0 Token \u0628\u0631\u062a\u0631 \u0631\u062a\u0628\u0647\u200c\u0628\u0646\u062f\u06cc CoinGecko\u060c CoinMarketCap \u06cc\u0627 CoinPaprika \u0628\u0627\u0634\u062f \u06f5\u06f0\u06f0\u06f0 QBC \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f","text3":"\u0627\u062f\u063a\u0627\u0645 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0627\u0645\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 widget \u0628\u0631 \u0631\u0648\u06cc \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u067e\u0631\u0648\u0698\u0647 \u0642\u0631\u0627\u0631\u06af\u0631\u0641\u062a\u0647 \u0648 \u062d\u062f\u0627\u0642\u0644 \u06f1\u06f0 swap \u0627\u0646\u062c\u0627\u0645 \u06af\u06cc\u0631\u062f","text4":"\u062a\u0631\u0648\u06cc\u062c\u200c\u06a9\u0646\u0646\u062f\u0647 \u06f5\u06f0\u066a \u0627\u0632 \u06a9\u0627\u0631\u0645\u0632\u062f\u0647\u0627\u06cc swap \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a Token \u067e\u0631\u0648\u0698\u0647\u200c\u0627\u06cc \u06a9\u0647 widget \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f","detailedRules":"\u0642\u0648\u0627\u0646\u06cc\u0646 \u0645\u0641\u0635\u0644"},"startDate":{"referralProgram":"\u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0631\u062c\u0627\u0639","isLive":"\u0641\u0639\u0627\u0644!","february":"\u06f1\u06f0 \u0641\u0648\u0631\u06cc\u0647 \u06f2\u06f0\u06f2\u06f2","becomeAPromoter":"\u06cc\u06a9 \u0645\u0631\u0648\u062c \u0634\u0648\u06cc\u062f"},"widgetConfigurator":{"theme":"\u0632\u0645\u06cc\u0646\u0647","language":"\u0632\u0628\u0627\u0646","fromAmount":"\u0627\u0632 \u0645\u0642\u062f\u0627\u0631","initialTradeAmount":"\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f \u062a\u0627 \\n\u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0645\u0639\u0627\u0645\u0644\u0647 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f","fromBlockchain":"\u0627\u0632 Blockchain","fromToken":"\u0627\u0632 Token","toBlockchain":"\u0628\u0647 Blockchain","toToken":"\u0628\u0647 Token","hideSelectionFrom":"\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646 \u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0632","hideSelectionTo":"\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646 \u0627\u0646\u062a\u062e\u0627\u0628 \u0628\u0647","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"\u0628\u0647 \u0634\u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u0627\u0646\u062a\u062e\u0627\u0628 Token \\n\u0631\u0627 \u062f\u0631 widget \u0642\u0641\u0644 \u06a9\u0646\u06cc\u062f","fee":"\u06a9\u0627\u0631\u0645\u0632\u062f","feeReceiverAddress":"\u0622\u062f\u0631\u0633 \u062f\u0631\u06cc\u0627\u0641\u062a\u200c\u06a9\u0646\u0646\u062f\u0647 \u06a9\u0627\u0631\u0645\u0632\u062f","walletAddress":"\u0622\u062f\u0631\u0633 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0628\u0631\u0627\u06cc \\n\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0627\u0631\u0645\u0632\u062f\u0647\u0627","display":"\u0646\u0645\u0627\u06cc\u0634","instantTrades":"\u0645\u06cc\u0632\u0627\u0646 \u0644\u063a\u0632\u0634 \u0642\u06cc\u0645\u062a \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0622\u0646\u06cc\u060c %","slippageForInstantTrades":"\u0628\u0647 \u0634\u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0645\u06cc\u0632\u0627\u0646 \u0644\u063a\u0632\u0634 \u0642\u06cc\u0645\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0622\u0646\u06cc \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f","multiChain":"\u0645\u06cc\u0632\u0627\u0646 \u0644\u063a\u0632\u0634 \u0642\u06cc\u0645\u062a Multi-chain\u060c %","slippageForMultiChain":"\u0628\u0647 \u0634\u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0645\u06cc\u0632\u0627\u0646 \u0644\u063a\u0632\u0634 \u0642\u06cc\u0645\u062a Multi-chain \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f","apply":"\u0627\u0639\u0645\u0627\u0644 \u06a9\u0631\u062f\u0646"},"statistics":{"rubic":"RUBIC\'S","statistics":"\u0622\u0645\u0627\u0631","info":"\u0644\u0637\u0641\u0627\u064b \u0622\u0645\u0627\u0631 Multi-Chain Protocol \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 Qubic AI \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f","totalMultiChainVolume":"\u0645\u062c\u0645\u0648\u0639 \u062d\u062c\u0645 Multi-Chain","supportedAssets":"\u062f\u0627\u0631\u0627\u06cc\u06cc\u200c\u0647\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647","totalUsers":"\u0645\u062c\u0645\u0648\u0639 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646","totalValueLocked":"\u0645\u062c\u0645\u0648\u0639 \u0627\u0631\u0632\u0634 \u0642\u0641\u0644\u200c\u0634\u062f\u0647","apr":"APR","upTo":"\u062a\u0627"},"staking":{"features":{"0":{"title":"High APR: 58%","text":"Forecasted APR up to 58% (12 month-based, valid for the pool up to 10M BRBC)"},"1":{"title":"Any Amount","text":"Stake for multiple time periods: 3, 6, 9 and 12 month periods; can join multiple time periods, multiple times","text2":"Stake for multiple time periods: 3, 6, 9 and 12 months; can join multiple time periods, multiple times"},"2":{"title":"Rewards Every Block","text":"Rewards are distributed with every block, and can be withdrawn at any time"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"\u062f\u0648\u0631 \u0627\u0648\u0644","text-0":"BRBC \u0648 USDC \u0627\u0631\u0627\u0626\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627","text-1":"\u067e\u0627\u062f\u0627\u0634\u200c\u0647\u0627\u06cc USDC \u0628\u0647 \u0645\u0642\u062f\u0627\u0631 \u062d\u062f\u0627\u06a9\u062b\u0631 \u06f2\u06f7\u066a APR \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f","button":"\u062e\u0631\u06cc\u062f BRBC"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"\u062f\u0648\u0631 \u0627\u0648\u0644 \u0634\u0631\u0648\u0639 \u0634\u062f","button":"\u0647\u0645\u06cc\u0646 \u0627\u06a9\u0646\u0648\u0646 \u0628\u067e\u06cc\u0648\u0646\u062f\u06cc\u062f"},"statistics":{"title-0":"\u06a9\u0633\u0628 \u062f\u0631\u0622\u0645\u062f \u062a\u0627","title-highlight-0":"\u06f2\u06f7\u066a APR","title-1":"\u0628\u0627 USDC","text":" Qubic AI \u0633\u0647 \u062f\u0631\u0635\u062f \u06a9\u0627\u0631\u0645\u0632\u062f \u0628\u0627\u0628\u062a \u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627\u06cc Multi-Chain \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u0645\u06cc\u0627\u0646 \u0645\u0634\u0627\u0631\u06a9\u062a\u200c\u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u062f\u0631 Liquidity Providing \u062a\u0648\u0632\u06cc\u0639 \u062e\u0648\u0627\u0647\u062f \u0634\u062f"},"widget":{"title-0":"\u062a\u0646\u0647\u0627","title-highlight-0":"\u062f\u0627\u0631\u0646\u062f\u06af\u0627\u0646 BRBC","title-1":"\u0648\u0627\u062c\u062f \u0634\u0631\u0627\u06cc\u0637","title-highlight-1":"\u0645\u0634\u0627\u0631\u06a9\u062a \u0647\u0633\u062a\u0646\u062f","text":"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0631\u06a9\u062a \u062f\u0631 Liquidity Providing Program \u0645\u0627 \u0645\u06cc\u200c\u0628\u0627\u06cc\u0633\u062a \u0628\u0647 \u0645\u06cc\u0632\u0627\u0646 2,000 \u0627\u0644\u06cc 20,000 BRBC \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f"},"prepare":{"title-highlight-0":"\u0686\u06af\u0648\u0646\u0647 \u062f\u0631 LP","title-0":"\u0645\u0631\u0628\u0648\u0637 \u0628\u0647 RUBIC \u0634\u0631\u06a9\u062a \u06a9\u0646\u0645\u061f","step1":{"title-0":"Token \u0647\u0627\u06cc ","title-highlight-0":"BRBC","title-1":" \u0648 USDC ","title-highlight-1":"\u06a9\u0633\u0628 \u06a9\u0646\u06cc\u062f","text":"\u062f\u0648\u0631 \u0627\u0648\u0644 \u0627\u0632 Liquidity Providing \u0628\u0647 \u0645\u062f\u062a \u06f2 \u0645\u0627\u0647 \u0627\u062f\u0627\u0645\u0647 \u062f\u0627\u0634\u062a\u0647 \u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062d\u0642 \u062a\u0642\u062f\u0645 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f","button":"\u062e\u0631\u06cc\u062f BRBC"},"step2":{"title-highlight-0":"\u0628\u0627 \u0642\u0641\u0644 \u06a9\u0631\u062f\u0646 BRBC \u0648 USDC ","title-0":"\u0646\u0642\u062f\u06cc\u0646\u06af\u06cc \u0627\u0631\u0627\u0626\u0647 \u06a9\u0646\u06cc\u062f","text1":"\u0627\u0633\u062a","text2":"1 USDC : 4 BRBC","text3":"\u0646\u0631\u062e \u0633\u067e\u0631\u062f\u0647\u200c\u0647\u0627","button":"\u0647\u0645\u06cc\u0646 \u0627\u06a9\u0646\u0648\u0646 \u0628\u067e\u06cc\u0648\u0646\u062f\u06cc\u062f"},"step3":{"title-0":"\u062f\u0648\u0631 \u0627\u0648\u0644 Liquidity Providing \u0645\u062d\u062f\u0648\u062f \u0628\u0647","title-highlight-0":"\u06f8\u06f0\u06f0.\u06f0\u06f0\u06f0 USDC \u0627\u0633\u062a","text":"\u0645\u0634\u0627\u0631\u06a9\u062a\u200c\u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u067e\u06cc\u0634\u06cc\u0646 \u062f\u0631 \u062f\u0648\u0631 \u0627\u0648\u0644 Staking \u062f\u0631 \u0644\u06cc\u0633\u062a \u0633\u0641\u06cc\u062f \u0628\u0631\u0627\u06cc Liquidity Providing \u0642\u0631\u0627\u0631 \u062e\u0648\u0627\u0647\u0646\u062f \u06af\u0631\u0641\u062a. \u062a\u062e\u0635\u06cc\u0635 \u0627\u0632 500 \u062a\u0627 800 USDC \u0628\u0647 \u0645\u062f\u062a \u06f2\u06f4 \u0633\u0627\u0639\u062a \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f","link":"\u0628\u06cc\u0634\u062a\u0631 \u0628\u06cc\u0627\u0645\u0648\u0632\u06cc\u062f"}},"subscription":{"title":"\'\u062f\u0631 \u0645\u0648\u0631\u062f Qubic AI\u2019s Liquidity Providing Updates \u0628\u0627 \u0645\u0627 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627\u0634\u06cc\u062f","text":"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0622\u062e\u0631\u06cc\u0646 \u0627\u062e\u0628\u0627\u0631 \u062f\u0631\u0628\u0627\u0631\u0647 Liquidity Providing \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"\u062f\u0648\u0631 \u0627\u0648\u0644","title-0_lp_started":"\u062f\u0648\u0631 \u0627\u0648\u0644 \u0634\u0631\u0648\u0639 \u0634\u062f","text":"BRBC \u0648USDC \u0628\u062f\u0647\u06cc\u062f \u062a\u0627 \u062d\u062f\u0627\u06a9\u062b\u0631 \u0628\u0647 \u0645\u06cc\u0632\u0627\u0646 \u06f2\u06f7\u066a APR \u0628\u0647 \u0635\u0648\u0631\u062a USDC\u200c \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f","features":{"0":"\u0648\u0627\u0631\u06cc\u0632 \u0645\u0628\u0644\u063a","1":"APR","2":"\u0636\u0631\u06cc\u0628 LP"},"duration":{"title":"\u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f \u062f\u0631"},"button":"\u0628\u06cc\u0634\u062a\u0631 \u0628\u06cc\u0627\u0645\u0648\u0632\u06cc\u062f"}}}'
        ),
        Pt = JSON.parse(
          '{"banner":{"text":"Claim new QBC Token!","link":"Learn more"},"header":{"launchApp":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},"footer":{"community":"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430","about":"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435","products":"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","businessInquiries":"\u0414\u043b\u044f \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},"nav":{"pitchDeck":"Pitch Deck","onePager":"One-Pager","team":"\u041a\u043e\u043c\u0430\u043d\u0434\u0430","securityAudit":"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0443\u0434\u0438\u0442\u044b","security":"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","statistics":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","contactUs":"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438","sdk":"SDK","referralProgram":"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430","setupWidget":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430","fiatOnRamp":"Fiat On-ramp","roadmap":"Roadmap","fillOutTheForm":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443","buyRBC":"\u041a\u0443\u043f\u0438\u0442\u044c QBC","rbcToken":"QBC \u0422\u043e\u043a\u0435\u043d","docs":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"},"settings":{"chooseLanguage":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a","languages":"\u042f\u0437\u044b\u043a\u0438"},"main":{"oneClick":"\u0412 \u041e\u0414\u0418\u041d \u041a\u041b\u0418\u041a","crossChain":"\u041a\u0420\u041e\u0421\u0421-\u0427\u0415\u0419\u041d","info":"Qubic AI \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c 15 500+ \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 20 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u043c\u0438 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a","startTrading":"CHECK IT OUT","cards":{"card-1":{"title":"\u0421\u0443\u043f\u0435\u0440-\u0443\u0434\u043e\u0431\u043d\u043e","text-1":"\u041e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0439 \u0442\u043e\u043a\u0435\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u043c\u0438 \u0432 \u043e\u0434\u043d\u0443 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e","text-2":"\u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u043c\u0438\u0442\u043e\u0432 \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438","text-3":"\u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441","text-4":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 24/7","text-5":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"},"card-2":{"title":"\u0412\u044b\u0433\u043e\u0434\u043d\u043e \u0438 \u0431\u044b\u0441\u0442\u0440\u043e","text-1":"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 - 90 \u0441\u0435\u043a\u0443\u043d\u0434","text-2":"70+ DEX\u2019\u043e\u0432 \u0438 \u043c\u043e\u0441\u0442\u043e\u0432 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u043b\u0443\u0447\u0448\u0438\u0439 \u043a\u0443\u0440\u0441","text-3":"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439 \u0434\u043b\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u0439 5 000+ QBC"},"card-3":{"title":"\u041b\u0443\u0447\u0448\u0438\u0435 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432","text-1":"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0432\u0438\u0434\u0436\u0435\u0442 \u0438 SDK \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438","text-2":"\u041b\u0435\u0433\u043a\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443","text-3":"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043c\u044b \u0438 \u0434\u043e\u0445\u043e\u0434","text-4":"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043e 50% \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439 \u0437\u0430 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0441\u0432\u043e\u043f\u044b"},"card-4":{"title":"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e","text-1":"Qubic AI \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0433\u0440\u043e\u0437\u044b \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442\u0441\u044f.","text-2":"Qubic AI - \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u0430\u0443\u0434\u0438\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0438 Certik \u0438 Fairyproof"}}},"advantages":{"multiChainSwaps":"\u041a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u041e\u0431\u043c\u0435\u043d\u044b","swapAssetsBetweenMultipleBlockchainsInASingleTrade":"\u041e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u043a\u0435\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u043c\u0438 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a","blockchains":"18 \u0411\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432","tradeAssets":"15,500+ \u0422\u043e\u043a\u0435\u043d\u043e\u0432","tradeMoreAssetsWithTheLowestGasFees":"\u041e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u043a\u0435\u043d\u044b \u043f\u043e \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u043c \u043a\u0443\u0440\u0441\u0430\u043c","blockChains":"Ethereum, BNB Smart Chain, Polygon, Harmony, Avalanche, Moonriver, Fantom, Solana, Arbitrum, Aurora, NEAR, Telos, Fuse, Celo, OKXChain, Cronos, Gnosis, Boba"},"about":{"whatIs":"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435","rubic":"Qubic AI?","info":"RUBIC \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b, 70+ DEX\u2019\u043e\u0432 \u0438 \u043c\u043e\u0441\u0442\u043e\u0432, \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u044f \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b, \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c."},"grants":{"rubic":"\u0413\u0440\u0430\u043d\u0442\u044b","grants":"Qubic AI","info":"Qubic AI \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u0435\u043c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0433\u0440\u0430\u043d\u0442\u043e\u0432 \u043e\u0442 \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0438\u0445 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432."},"audits":{"rubic":"Qubic AI","audits":"\u0410\u0443\u0434\u0438\u0442\u044b","text1":"\u041a\u0440\u043e\u0441\u0441-\u0427\u0435\u0439\u043d \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b Qubic AI \u0431\u044b\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 Certik","text2":"\u0421\u0442\u0435\u0439\u043a\u0438\u043d\u0433 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b \u0431\u044b\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 Fairyproof.","link1":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b Certik","link2":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b Fairyproof"},"partnership":{"rubic":"Qubic AI","supports":"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442","dexs":"DEX\u044b","blockchains":"\u0411\u041b\u041e\u041a\u0427\u0415\u0419\u041d\u042b","bridges":"\u041c\u041e\u0421\u0422\u042b"},"tools":{"rubic":"\u0420\u0415\u0428\u0415\u041d\u0418\u042f RUBIC","toolsForWeb3":"\u0414\u041b\u042f WEB3","text1":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0430\u0448\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a!","text2":"Qubic AI \u0443\u0436\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043b \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u043e\u043b\u0435\u0435 90 \u043a\u0440\u0438\u043f\u0442\u043e-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Qubic AI SDK \u0438 Widget."},"trade":{"trade":"\u041f\u043e\u043a\u0443\u043f\u043a\u0430","yourToken":"\u0432\u0430\u0448\u0435\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430","directlyOn":"\u043f\u0440\u044f\u043c\u043e","on":"\u043d\u0430","yourPlatform":"\u043d\u0430 \u0432\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435!","getWidget":"\u0423\u0421\u0422\u0410\u041d\u041e\u0412\u0418\u0422\u042c \u0412\u0418\u0414\u0416\u0415\u0422","info":"Qubic AI Widget \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0441\u0430\u0439\u0442\u0435. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0432\u0430\u0448 \u0442\u043e\u043a\u0435\u043d, \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044f \u0441\u0430\u0439\u0442! \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0430; \u0431\u043e\u043b\u0435\u0435 60 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0443\u0436\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0435\u0433\u043e.","info2":"Qubic AI Widget \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0441\u0430\u0439\u0442\u0435. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0430 \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 30 \u043c\u0438\u043d\u0443\u0442; 60+ \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0443\u0436\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0435\u0433\u043e."},"documentation":{"documentation":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f","findOutMore":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0440\u043e \u043d\u0430\u0448\u0435 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435 \u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b.","learnMore":"\u0423\u0417\u041d\u0410\u0422\u042c \u0411\u041e\u041b\u042c\u0428\u0415"},"subscription":{"subscribeToOurNewsletter":"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043d\u0430\u0448\u0443 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443","receiveTheNewest":"\u0438 \u0443\u0437\u043d\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0432\u044b\u043c\u0438","submit":"Submit"},"contact":{"get":"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f","involved":"\u0441 \u043d\u0430\u043c\u0438","contactUsToLearn":"\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u043e\u043c \u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d.","byClicking":"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \\"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\\", \u0432\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441","privacyPolicy":"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438","submitMessage":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},"feedback":{"yourName":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f*","emailAddress":"Email*","telegram":"Telegram \u0430\u043a\u043a\u0430\u0443\u043d\u0442*","companyOrProject":"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u041f\u0440\u043e\u0435\u043a\u0442*","companyWebsiteURL":"\u0421\u0430\u0439\u0442 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438*","selectReason":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f*","yourMessage":"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435","integrateOurBlockchain":"\u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u0432 Qubic AI","MultiChainSwapProtocol":"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u0440\u043e \u0432\u0438\u0434\u0436\u0435\u0442, SDK","CommerceDeal":"\u041a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","ProblemsMultiChainRouting":"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u043e\u043c"},"launch":{"end":{"title":"\u0422\u0420\u0415\u0422\u0418\u0419 \u0420\u0410\u0423\u041d\u0414 \u0421\u0422\u0415\u0419\u041a\u0418\u041d\u0413\u0410","title-highlight":"\u041d\u0410\u0427\u0410\u041b\u0421\u042f","text":"\u041f\u043e\u043b\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430","link":"Stake"}},"sdk":{"title-0":"SDK:","title-1":"\u0422\u0412\u041e\u0418 \u041f\u0420\u0410\u0412\u0418\u041b\u0410","title-highlight-0":"\u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0439\u0442\u0435 20 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432 \u0437\u0430 30 \u043c\u0438\u043d\u0443\u0442","info":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f Qubic AI SDK \u043f\u043e\u0434\u0430\u0440\u0438\u0442 \u0432\u0430\u0448\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 15 500 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 20 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u043c\u0438, \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044f \u0432\u0430\u0448\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443! ","link":"\u0418\u041d\u0422\u0415\u0413\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c","cards":{"title1":"\u041a\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c Qubic AI SDK?","title2":"\u041f\u043e\u0447\u0435\u043c\u0443 Qubic AI SDK?","Wallets":"\u041a\u043e\u0448\u0435\u043b\u044c\u043a\u0438","dApps":"dApps","AnyPlatforms":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b","EarnUpTo":"\u0423\u0432\u0435\u043b\u0438\u0447\u044c\u0442\u0435 \u0434\u043e\u0445\u043e\u0434: \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043e 50% \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439","GainAWhiteLabel":"100% \u201cWhite Label\u201d \u0440\u0435\u0448\u0435\u043d\u0438\u0435","FullCustomization":"\u041f\u043e\u043b\u043d\u0430\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f","additionalTrading":"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043c\u044b \u0438 \u0434\u043e\u0445\u043e\u0434"}},"modal":{"WeSentConfirmation":"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!\\n \u041c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0430\u0448 e-mail.","theWidgetBecomePromoter":"\u0421\u0442\u0430\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u0443\u0442\u0435\u0440\u043e\u043c","theApplicationHasBeenSubmitted":"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!\\n \u0417\u0430\u043f\u0440\u043e\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d","theWidgetOnlySupports":"\u0412\u0438\u0434\u0436\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0442\u043e\u043a\u0435\u043d\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 Qubic AI.exchange. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e\u0434\u0430\u0447\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u043b\u0438\u0441\u0442\u0438\u043d\u0433 \u0438\u043b\u0438 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438.","checkDocs":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e","forSelfIntegration":"\u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438","submit":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","ok":"OK"},"referralMain":{"referral":"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f","program":"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430","becomeAPromoter":"\u0421\u0422\u0410\u0422\u042c \u041f\u0420\u041e\u041c\u041e\u0423\u0422\u0415\u0420\u041e\u041c","info":"\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u0430 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f\u0445 \u0441 \u043e\u0431\u043c\u0435\u043d\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0432\u0438\u0434\u0436\u0435\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0443\u044e \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0432\u0438\u0434\u0436\u0435\u0442\u043e\u0432 \u043d\u0430 \u0441\u0430\u0439\u0442\u044b \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."},"referralAdvantages":{"withoutInvestments":"\u0411\u0435\u0437 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439","joinOurReferralProgramFreely":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a \u043d\u0430\u0448\u0435\u0439 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 ","earnOfFees":"\u0414\u043e 50% \u043e\u0442 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438","getProfitsFromAllSwaps":"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u0441\u043e \u0432\u0441\u0435\u0445 \u043e\u0431\u043c\u0435\u043d\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434\u0436\u0435\u0442 \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","getRBC":"\u041e\u0442 500 \u0434\u043e 5,000 QBC","receiveFixedRewards":"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u0437\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0432\u0438\u0434\u0436\u0435\u0442\u0430"},"benefits":{"benefits":"\u041f\u0420\u0415\u0418\u041c\u0423\u0429\u0415\u0421\u0422\u0412\u0410","forProjects":"\u0414\u041b\u042f \u041f\u0420\u041e\u0415\u041a\u0422\u041e\u0412","text1":"\u041f\u0440\u043e\u0435\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0432\u0438\u0434\u0436\u0435\u0442 \u043f\u043e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435, \u043f\u043e\u043b\u0443\u0447\u0430\u0442 30% \u043e\u0442 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0441 \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u043d\u0447\u0435\u0439\u043d \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438.","text2":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u0441\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Qubic AI \u043f\u0440\u044f\u043c\u043e \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430.","text3":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043c \u0442\u043e\u0440\u0433\u043e\u0432, \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443 \u0441\u0432\u043e\u0435\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0444, \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u044c \u043d\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432."},"howToStart":{"howTo":"\u041a\u0410\u041a","start":"\u041d\u0410\u0427\u0410\u0422\u042c","joinTheReferralProgram":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435!","becomeARubicPromoter":"\u0421\u0442\u0430\u043d\u044c\u0442\u0435 \u043f\u0440\u043e\u043c\u043e\u0443\u0442\u0435\u0440\u043e\u043c Qubic AI","signInThroughYourWallet":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Qubic AI \u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443.","becomeAPromoter":"\u0421\u0422\u0410\u0422\u042c \u041f\u0420\u041e\u041c\u041e\u0423\u0422\u0415\u0420\u041e\u041c","promoteTheRubicWidget":"\u041f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0439\u0442\u0435 Qubic AI Widget \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c","pitchToRepresentatives":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c \u043a\u0440\u0438\u043f\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043e \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u0445 Qubic AI Widget.","getPromoMaterials":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u043c\u043e-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b","getPassiveIncome":"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043e\u0445\u043e\u0434","attractNewProjects":"\u041f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043e\u0445\u043e\u0434 \u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."},"referralWidget":{"rubic":"RUBIC","widget":"WIDGET","info":"Qubic AI Widget \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 15,000+ \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0432 12 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430\u0445 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 Qubic AI, \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044f \u0432\u0430\u0448 \u0441\u0430\u0439\u0442."},"rules":{"program":"\u0423\u0421\u041b\u041e\u0412\u0418\u042f","rules":"\u041f\u0420\u041e\u0413\u0420\u0410\u041c\u041c\u042b","coinGecko":"CoinGecko","coinMarketCap":"CoinMarketCap","coinPaprika":"CoinPaprika","text1":"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435, \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0432 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0440\u0430\u0445:","text2":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043f\u043e\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u0432\u0448\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 500 QBC \u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0443\u044e \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u043d\u0430\u0448\u0435\u0433\u043e \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 5,000 QBC, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u0422\u043e\u043f-1000 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0432 \u043e\u0431\u0449\u0435\u043c \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435 \u043d\u0430 CoinGecko, CoinMarketCap \u0438\u043b\u0438 CoinPaprika","text3":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u0438 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0438 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u043e\u0431\u043c\u0435\u043d\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0432\u0438\u0434\u0436\u0435\u0442","text4":"\u041f\u0440\u043e\u043c\u043e\u0443\u0442\u0435\u0440\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442 50% \u043e\u0442 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 \u043e\u0431\u043c\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 \u0432\u0438\u0434\u0436\u0435\u0442 \u0442\u043e\u043a\u0435\u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b \u0432\u0438\u0434\u0436\u0435\u0442","detailedRules":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},"startDate":{"referralProgram":"\u0420\u0415\u0424\u0415\u0420\u0410\u041b\u042c\u041d\u0410\u042f \u041f\u0420\u041e\u0413\u0420\u0410\u041c\u041c\u0410","isLive":"\u0421\u0422\u0410\u0420\u0422\u041e\u0412\u0410\u041b\u0410!","february":"10 \u0424\u0435\u0432\u0440\u0430\u043b\u044f, 2022","becomeAPromoter":"\u0421\u0442\u0430\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u0443\u0442\u0435\u0440\u043e\u043c"},"widgetConfigurator":{"configuration":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f","theme":"\u0422\u0435\u043c\u0430","background":"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430","language":"\u042f\u0437\u044b\u043a","fromAmount":"\u041e\u0442 \u0441\u0443\u043c\u043c\u044b","initialTradeAmount":"\u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \\n \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0443\u043c\u043c\u044b \u0441\u0434\u0435\u043b\u043a\u0438","fromBlockchain":"\u0418\u0437 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0430","fromToken":"\u0418\u0437 \u0442\u043e\u043a\u0435\u043d\u0430","toBlockchain":"\u0412 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d","toToken":"\u0412 \u0442\u043e\u043a\u0435\u043d","hideSelectionFrom":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438\u0437","hideSelectionTo":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432","hideTokenSwitcher":"Hide token switcher","allowsYouToLock":"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \\n \u0432\u044b\u0431\u043e\u0440 \u0442\u043e\u043a\u0435\u043d\u0430 \u0432 \u0432\u0438\u0434\u0436\u0435\u0442\u0435","fee":"\u041f\u0435\u0440\u0435\u0432\u043e\u0434","advancedSettings":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","feeReceiverAddress":"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430","walletAddress":"\u0410\u0434\u0440\u0435\u0441 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \\n \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430","display":"\u0414\u0438\u0441\u043f\u043b\u0435\u0439","instantTrades":"\u041f\u0440\u043e\u0441\u043a\u0430\u043b\u044c\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f Instant trades, %","slippageForInstantTrades":"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043a\u0430\u043b\u044c\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\\n \u0434\u043b\u044f Instant Trades","multiChain":"Cross-Chain \u043f\u0440\u043e\u0441\u043a\u0430\u043b\u044c\u0437\u044b\u0432\u0430\u043d\u0438\u0435, %","slippageForMultiChain":"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043a\u0430\u043b\u044c\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \\n \u0434\u043b\u044f Cross-Chain","apply":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c","installation":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430","seeFullInstruction":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u043d\u0430","tokenSearch":"Enable token search","tokenSearchClue":"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u0432","rubicLink":"Enable Qubic AI App link","rubicLinkClue":"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","feeTargetText1":"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 cross-chain \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438,","feeTargetText2":"\u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438","feeTargetText3":"\u0434\u043b\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0430\u0434\u0440\u0435\u0441\u0430 \u0432 white list"},"statistics":{"rubic":"\u0421\u0422\u0410\u0422\u0418\u0421\u0422\u0418\u041a\u0410","statistics":"RUBIC","info":"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441\u043e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0440\u0430 Qubic AI","totalMultiChainVolume":"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439","supportedAssets":"\u0422\u043e\u043a\u0435\u043d\u043e\u0432","totalUsers":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439","totalValueLocked":"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 (TVL)","totalLiquidityVolume":"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c","apr":"APR","upTo":"\u0434\u043e"},"staking":{"features":{"0":{"title":"\u0412\u044b\u0441\u043e\u043a\u0438\u0439 APR: 58%","text":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u044b\u0439 APR \u0434\u043e 58% (\u043f\u0440\u0438 \u0441\u0442\u0435\u0439\u043a\u0438\u043d\u0433\u0435 \u043d\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043f\u0443\u043b\u0430 \u0434\u043e 10\u041c BRBC)"},"1":{"title":"\u041b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","text":"\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u0441\u0442\u0435\u0439\u043a\u0438\u043d\u0433\u0435 \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u0435\u0440\u0438\u043e\u0434\u044b: 3, 6, 9 \u0438 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0435\u0440\u0438\u043e\u0434\u043e\u0432"},"2":{"title":"\u041d\u0430\u0433\u0440\u0430\u0434\u044b \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443","text":"\u041d\u0430\u0433\u0440\u0430\u0434\u044b \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"}},"page":{"coming":{"staking":"\u0421\u0422\u0415\u0419\u041a\u0418\u041d\u0413 3.0","title-highlight":"\u0421\u041a\u041e\u0420\u041e","button":"Read Full Rules","learnMore":"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"1ST ROUND HAS STARTED","button":"JOIN NOW"}}},"lp":{"coming":{"title-0":"RUBIC","title-highlight-0":"LIQUIDITY PROVIDING","title-1":"1-\u0439 \u0420\u0410\u0423\u041d\u0414","text-0":"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 BRBC \u0438 USDC, \u0447\u0442\u043e\u0431\u044b","text-1":"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u0434\u043e 27% APR \u0432 USDC","button":"\u041a\u0423\u041f\u0418\u0422\u042c BRBC"},"started":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-1":"1-\u0419 \u0420\u0410\u0423\u041d\u0414 \u0421\u0422\u0410\u0420\u0422\u041e\u0412\u0410\u041b","button":"\u041f\u0420\u0418\u041d\u042f\u0422\u042c \u0423\u0427\u0410\u0421\u0422\u0418\u0415"},"statistics":{"title-0":"\u041f\u041e\u041b\u0423\u0427\u0418\u0422\u0415 \u0414\u041e","title-highlight-0":"27% APR","title-1":"\u0412 USDC","text":"Qubic AI \u0432\u0437\u0438\u043c\u0430\u0435\u0442 0.3% \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 \u043a\u0440\u043e\u0441\u0441-\u0447\u0435\u0439\u043d \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u0441\u0440\u0435\u0434\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 LP \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b"},"widget":{"title-0":"\u0422\u041e\u041b\u042c\u041a\u041e","title-highlight-0":"\u0425\u041e\u041b\u0414\u0415\u0420\u042b BRBC","title-1":"\u041c\u041e\u0413\u0423\u0422","title-highlight-1":"\u041f\u0420\u0418\u041d\u042f\u0422\u042c \u0423\u0427\u0410\u0421\u0422\u0418\u0415","text":"\u0414\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043d\u0435\u0441\u0442\u0438  \u043e\u0442 2,000 \u0434\u043e 20,000 BRBC"},"prepare":{"title-highlight-0":"\u041a\u0410\u041a \u041f\u0420\u0418\u041d\u042f\u0422\u042c \u0423\u0427\u0410\u0421\u0422\u0418\u0415","title-0":"\u0412 LP \u041f\u0420\u041e\u0413\u0420\u0410\u041c\u041c\u0415?","step1":{"title-0":"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0438\u0442\u0435","title-highlight-0":"BRBC","title-1":"\u0442\u043e\u043a\u0435\u043d\u044b \u0438","title-highlight-1":"USDC","text":"\u041f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0443\u043d\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b Liquidity Providing \u043f\u0440\u043e\u0434\u043b\u0438\u0442\u0441\u044f 2 \u043c\u0435\u0441\u044f\u0446\u0430","button":"\u041a\u0423\u041f\u0418\u0422\u042c BRBC"},"step2":{"title-highlight-0":"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c","title-0":"\u0432 BRBC \u0438 USDC","text":"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 1 USDC : 4 BRBC","button":"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435"},"step3":{"title-0":"\u041f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0443\u043d\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b Liquidity Providing \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d","title-highlight-0":"800,000 USDC","text":"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0440\u0430\u0443\u043d\u0434\u0430 \u0441\u0442\u0435\u0439\u043a\u0438\u043d\u0433\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 whitelist \u0441 \u043f\u0440\u0430\u0432\u043e\u043c \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 500-800 USDC \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432","link":"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"}},"subscription":{"title":"\u0411\u0443\u0434\u044c\u0442\u0435 \u0432 \u043a\u0443\u0440\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b Liquidity Providing","text":"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u043c \u043e \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u0445"},"main":{"title-highlight-0":"LIQUIDITY PROVIDING:","title-0":"1-\u0419 \u0420\u0410\u0423\u041d\u0414","title-0_lp_started":"1-\u0419 \u0420\u0410\u0423\u041d\u0414 \u0421\u0422\u0410\u0420\u0422\u041e\u0412\u0410\u041b","text":"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 BRBC \u0438 USDC \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e 27% APR \u0432 USDC ","features":{"0":"\u0420\u0430\u0437\u043c\u0435\u0440 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430","1":"APR","2":"LP \u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442"},"duration":{"title":"\u0421\u0422\u0410\u0420\u0422\u0423\u0415\u0422"},"button":"\u0423\u0417\u041d\u0410\u0422\u042c \u0411\u041e\u041b\u042c\u0428\u0415"}},"widget":{"title-highlight":"\u0412\u0418\u0414\u0416\u0415\u0422:","title":"\u041d\u0410\u0427\u041d\u0418\u0422\u0415 \u0411\u042b\u0421\u0422\u0420\u041e","subtitle":"\u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0439\u0442\u0435 20 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432 \u0438 \u0431\u043e\u043b\u0435\u0435 15 500 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0437\u0430 10 \u043c\u0438\u043d\u0443\u0442","text1":"\u041f\u043e\u0437\u0432\u043e\u043b\u044c\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b \u0443 \u0432\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0441\u043a\u0430\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 CEX, DEX \u0438\u043b\u0438 \u043c\u043e\u0441\u0442\u044b.","text2":"\u041d\u043e\u0432\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0431\u043e\u043b\u0435\u0435 70 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 DEX \u0438\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0437\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442.","text3":"\u0411\u043e\u043b\u0435\u0435 70 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0443\u0436\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 Qubic AI Widget.","button":"\u0418\u041d\u0422\u0415\u0413\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c"}}'
        );
      !(function (e) {
        (e.ENGLISH = "en"),
          (e.SPANISH = "es"),
          (e.FRENCH = "fr"),
          (e.GERMAN = "de"),
          (e.TURKISH = "tr"),
          (e.AZERBAIJANI = "az"),
          (e.HINDI = "hi"),
          (e.INDONESIA = "ind"),
          (e.ITALY = "it"),
          (e.RUSSIAN = "ru"),
          (e.PERSIA = "per");
      })(ht || (ht = {}));
      var Ot,
        Tt = ht,
        xt = (0, r.createContext)({});
      function It(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var Et =
          (It((Ot = {}), Tt.ENGLISH, bt),
          It(Ot, Tt.SPANISH, kt),
          It(Ot, Tt.GERMAN, _t),
          It(Ot, Tt.FRENCH, yt),
          It(Ot, Tt.TURKISH, vt),
          It(Ot, Tt.AZERBAIJANI, wt),
          It(Ot, Tt.HINDI, St),
          It(Ot, Tt.INDONESIA, Ct),
          It(Ot, Tt.ITALY, Rt),
          It(Ot, Tt.PERSIA, At),
          It(Ot, Tt.RUSSIAN, Pt),
          Ot),
        Mt = function (e) {
          var t = e.children,
            i = Tt.ENGLISH;
          (i = ft.get("lng")) || ((i = Tt.ENGLISH), ft.set("lng", i));
          var a = (0, r.useState)(i),
            s = a[0],
            l = a[1],
            c = (0, r.useCallback)(function (e) {
              ft.set("lng", e), l(e);
            }, []);
          return (0, n.tZ)(xt.Provider, {
            value: { language: s, setLanguage: c },
            children: (0, n.tZ)(o.Pj, { definition: Et[s], children: t }),
          });
        },
        Dt = i(81350),
        Nt = i(25675),
        Bt = i.n(Nt),
        Lt = i(42007),
        zt = i.n(Lt),
        jt = [
          {
            value: Tt.ENGLISH,
            label: (0, n.BX)("div", {
              className: zt()["language__body-item"],
              children: [
                (0, n.tZ)(Bt(), {
                  width: 22,
                  height: 22,
                  className: zt()["language__body-item_icon"],
                  src: "/icons/language/en.svg",
                  alt: "en",
                }),
                (0, n.tZ)("span", {
                  className: zt()["language__body-item_text"],
                  children: " English ",
                }),
              ],
            }),
          },
        ],
        Ut = function () {
          var e = (0, r.useContext)(xt),
            t = e.language,
            i = e.setLanguage,
            a = (0, r.useState)(t),
            o = a[0],
            s = a[1],
            l = (0, r.useState)(!1),
            c = l[0],
            u = l[1],
            d = function () {
              return jt.find(function (e) {
                return e.value === o;
              });
            };
          return (
            (0, r.useEffect)(function () {
              var e = document.querySelector(
                ".css-mohuvp-dummyInput-DummyInput"
              );
              null === e || void 0 === e || e.setAttribute("name", "test");
            }, []),
            (0, n.BX)("div", {
              className: zt().language,
              children: [
                (0, n.tZ)("label", { htmlFor: "language select" }),
                (0, n.tZ)("label", {
                  htmlFor: "test",
                  children: (0, n.tZ)(Dt.ZP, {
                    isSearchable: !1,
                    name: "language select",
                    className: "select",
                    classNamePrefix: "language-select",
                    defaultValue: d(),
                    onChange: function (e) {
                      e &&
                        (s(e.value),
                        i(e.value),
                        (e.value !== Tt.PERSIA && t !== Tt.PERSIA) ||
                          ("scrollRestoration" in history &&
                            (history.scrollRestoration = "manual"),
                          window.location.reload()));
                    },
                    options: jt,
                    controlShouldRenderValue: !1,
                    placeholder: (function () {
                      var e, t;
                      return (0, n.BX)("div", {
                        className: zt().language__placeholder,
                        children: [
                          (0, n.tZ)("img", {
                            src: c
                              ? "/icons/language_g.svg"
                              : "/icons/language.svg",
                            alt:
                              null === (e = d()) || void 0 === e
                                ? void 0
                                : e.value,
                          }),
                          (0, n.tZ)("span", {
                            className: zt().language__placeholder_text,
                            children:
                              null === (t = d()) || void 0 === t
                                ? void 0
                                : t.value.toUpperCase(),
                          }),
                        ],
                      });
                    })(),
                    onMenuOpen: function () {
                      return u(!0);
                    },
                    onMenuClose: function () {
                      return u(!1);
                    },
                  }),
                }),
              ],
            })
          );
        },
        Ft = i(14290),
        Wt = i.n(Ft),
        qt = i(30396);
      var Vt = i(41604),
        Ht = i.n(Vt),
        Gt = function (e) {
          return c()(e.props.class, Ht().animated);
        },
        Kt = function (e) {
          var t = e.render,
            i = e.children,
            o = (function (e, t) {
              var i = (0, qt.eJ)(!1),
                n = i[0],
                r = i[1];
              return (
                (0, qt.d4)(
                  function () {
                    var i;
                    return (
                      e && !n
                        ? r(!0)
                        : !e &&
                          n &&
                          (i = setTimeout(function () {
                            return r(!1);
                          }, t)),
                      function () {
                        return clearTimeout(i);
                      }
                    );
                  },
                  [e, t, n]
                ),
                n
              );
            })(t, 300),
            s = (0, r.useState)({ opacity: 0 }),
            l = s[0],
            c = s[1],
            u = { opacity: 0 };
          if (
            ((0, r.useEffect)(
              function () {
                var e;
                return (
                  t && o
                    ? (e = setTimeout(function () {
                        c({ opacity: 1 });
                      }, 10))
                    : c({ opacity: 0 }),
                  function () {
                    clearTimeout(e);
                  }
                );
              },
              [t, o]
            ),
            "object" === typeof i)
          ) {
            var d = Array.isArray(i) ? i[0] : i,
              p = (0, a.Tm)(d, { style: t ? l : u, class: Gt(d) });
            return (0, n.tZ)(a.HY, { children: o && p });
          }
          return (0, n.tZ)("div", {
            className: Ht().animated,
            style: t ? l : u,
            children: o && i,
          });
        },
        Zt = i(93865),
        Yt = i.n(Zt),
        Xt = function (e) {
          var t = e.targetRef,
            i = e.position,
            a = e.children,
            o = (function (e) {
              var t = (0, r.useState)({}),
                i = t[0],
                n = t[1],
                a = (0, r.useRef)(window.innerWidth),
                o = (0, r.useCallback)(
                  function () {
                    var t;
                    return n(
                      e && e.current
                        ? null === (t = e.current) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect()
                        : {}
                    );
                  },
                  [n, e]
                ),
                s = (0, r.useCallback)(
                  function () {
                    var e = window.innerWidth;
                    e !== a.current && ((a.current = e), o());
                  },
                  [o]
                );
              return (
                (0, r.useEffect)(
                  function () {
                    return (
                      o(),
                      window.addEventListener("resize", s),
                      function () {
                        return window.removeEventListener("resize", s);
                      }
                    );
                  },
                  [o]
                ),
                i
              );
            })(t),
            s =
              void 0 !== (null === o || void 0 === o ? void 0 : o.top) &&
              void 0 !== (null === o || void 0 === o ? void 0 : o.height)
                ? o.top + o.height
                : (null === o || void 0 === o ? void 0 : o.top) || 0,
            l = (null === o || void 0 === o ? void 0 : o.left) || 0,
            c = {
              top: "".concat(
                (null === i || void 0 === i ? void 0 : i.top) ? i.top + s : s,
                "px"
              ),
            };
          return (
            "fullwidth" === (null === i || void 0 === i ? void 0 : i.left)
              ? ((c.left = 0), (c.right = 0))
              : (c.left = "".concat(
                  (null === i || void 0 === i ? void 0 : i.left)
                    ? i.left + l
                    : l,
                  "px"
                )),
            (0, r.createPortal)(
              (0, n.tZ)("div", {
                className: Yt()["drop-portal"],
                style: c,
                children: a,
              }),
              document.getElementById("modals")
            )
          );
        },
        Qt = i(41778),
        $t = i(85518),
        Jt = i(18480),
        ei = i.n(Jt),
        ti = [
          {
            name: "widget",
            title: "Widget",
            icon: "widget.svg",
            link: "https://tools.rubic.exchange/widget",
            device: "whatever",
          },
          {
            name: "sdk",
            title: "SDK",
            icon: "sdk.svg",
            link: "https://tools.rubic.exchange/sdk",
            device: "whatever",
          },
          {
            name: "snap",
            title: "Metamask Snap",
            icon: "snap.svg",
            link: "/metamasksnap",
            device: "whatever",
          },
          {
            name: "ecosystem",
            title: "Ecosystem",
            icon: "ecosystem.svg",
            link: "/ecosystem",
            device: "whatever",
          },
          {
            name: "security",
            title: "Security",
            icon: "security.svg",
            link: s.E.security,
            device: "whatever",
          },
          {
            name: "token",
            title: "QBC Token",
            icon: "token.svg",
            link: s.E.rbcToken,
            device: "whatever",
          },
          {
            name: "claim",
            title: "Claim",
            icon: "logo.svg",
            link: s.E.claim,
            device: "whatever",
          },
          {
            name: "team",
            title: "Team",
            icon: "team.svg",
            link: "/team",
            device: "whatever",
          },
          {
            name: "staking",
            title: "Staking",
            icon: "staking.svg",
            link: "/staking",
            device: "mobile",
            target: "_self",
            size: { width: 30, height: 30 },
          },
          // {
          //   name: "tools",
          //   title: "Tools",
          //   icon: "tools.svg",
          //   link: s.E.b2b,
          //   device: "mobile",
          //   size: { width: 30, height: 30 },
          // },
          {
            name: "docs",
            title: "Docs",
            icon: "docs.svg",
            link: s.E.doc,
            device: "mobile",
          },
          // {
          //   name: "stats",
          //   title: "Stats",
          //   icon: "stats.svg",
          //   link: s.E.stats,
          //   device: "mobile",
          // },
          // {
          //   name: "blog",
          //   title: "Blog",
          //   icon: "blog.svg",
          //   link: s.E.blog,
          //   device: "mobile",
          // },
        ],
        ii = (0, r.forwardRef)(function (e, t) {
          var i = e.open,
            a = e.setOpen,
            l = e.targetRef,
            d = (0, Qt.d)().width,
            p = void 0 === d ? s.g.desktopWidth : d,
            m = p <= 870,
            h = (0, r.useState)(!1),
            g = h[0],
            f = h[1],
            b = (0, r.useState)(0),
            _ = b[0],
            y = b[1],
            v = function () {
              a(!1);
            },
            k = function (e, t) {
              var i, r;
              return (0, n.BX)(
                "a",
                {
                  className: c()(
                    ei()["dropdown__links-link"],
                    ei()["dropdown__links-link_".concat(e.name)]
                  ),
                  href: e.link,
                  onClick: v,
                  target: e.target || "_blank",
                  rel: "noreferrer",
                  children: [
                    (0, n.tZ)("div", {
                      className: ei()["dropdown__links-icon"],
                      children:
                        "claim" === e.name
                          ? (0, n.tZ)(u.Z, {
                              src: "/".concat(e.icon),
                              width: 22,
                              height: 22,
                            })
                          : (0, n.tZ)(u.Z, {
                              src: "/icons/navigation/".concat(e.icon),
                              width:
                                (null === (i = e.size) || void 0 === i
                                  ? void 0
                                  : i.width) || 22,
                              height:
                                (null === (r = e.size) || void 0 === r
                                  ? void 0
                                  : r.height) || 22,
                            }),
                    }),
                    (0, n.tZ)(o.xv, {
                      id: "nav.".concat(e.name),
                      children: e.title,
                    }),
                  ],
                },
                t
              );
            };
          return (
            (0, r.useEffect)(
              function () {
                f($t.tq);
              },
              [f]
            ),
            (0, r.useEffect)(function () {
              y(window.pageYOffset),
                window.addEventListener("scroll", function () {
                  y(window.pageYOffset), v();
                });
            }, []),
            (0, n.tZ)(Xt, {
              targetRef: l,
              position: { left: p < 480 ? -210 : 0, top: _ + 40 },
              children: (0, n.tZ)(Kt, {
                render: i,
                children: (0, n.tZ)("div", {
                  className: ei().dropdown,
                  ref: t,
                  children: (0, n.tZ)("div", {
                    className: ei().dropdown__links,
                    children:
                      m && g
                        ? ti.map(function (e, t) {
                            return k(e, t);
                          })
                        : ti
                            .filter(function (e) {
                              return "mobile" !== e.device;
                            })
                            .map(function (e, t) {
                              return k(e, t);
                            }),
                  }),
                }),
              }),
            })
          );
        });
      var ni = i(19161),
        ri = i.n(ni);
      function ai(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var oi = function () {
          var e = (0, r.useState)(!1),
            t = e[0],
            i = e[1],
            a = (0, r.useRef)(),
            o = (0, r.useRef)();
          return (
            (function (e, t, i) {
              (0, r.useEffect)(
                function () {
                  var n = function (n) {
                    var r = (i || []).concat(e);
                    e.current &&
                      r.every(function (e) {
                        return !e.current.contains(n.target);
                      }) &&
                      t();
                  };
                  return (
                    document.addEventListener("mousedown", n),
                    function () {
                      document.removeEventListener("mousedown", n);
                    }
                  );
                },
                [e, t, i]
              );
            })(
              o,
              (0, r.useCallback)(
                function () {
                  return i(!1);
                },
                [i]
              ),
              [a]
            ),
            (0, n.BX)("div", {
              className: ri().burger,
              children: [
                (0, n.BX)("button", {
                  className: ri().hamb,
                  onClick: function () {
                    return i(!t);
                  },
                  ref: a,
                  title: "Open menu",
                  "aria-label": "Open menu",
                  children: [
                    (0, n.tZ)("span", {
                      className: c()(
                        ri().hamb__item,
                        ai({}, ri().hamb__item_active, t)
                      ),
                    }),
                    (0, n.tZ)("span", {
                      className: c()(
                        ri().hamb__item,
                        ai({}, ri().hamb__item_active, t)
                      ),
                    }),
                    (0, n.tZ)("span", {
                      className: c()(
                        ri().hamb__item,
                        ai({}, ri().hamb__item_active, t)
                      ),
                    }),
                  ],
                }),
                (0, n.tZ)(ii, { open: t, setOpen: i, targetRef: a, ref: o }),
              ],
            })
          );
        },
        si = i(33304),
        li = [
          {
            href: "/staking",
            id: "nav.staking",
            text: "Staking",
            target: "_self",
          },
          // { href: s.E.tools, id: "nav.tools", text: "Tools", target: "_blank" },
          { href: s.E.doc, id: "nav.docs", text: "Staking", target: "_blank" },
          // { href: s.E.stats, id: "nav.stats", text: "Stats", target: "_blank" },
          // { href: s.E.blog, id: "nav.blog", text: "Blog", target: "_blank" },
          {
            href: s.E.contactUs,
            id: "nav.contactUs",
            text: "Contact Us",
            target: "_blank",
          },
          // {
          //   href: "/metamasksnap",
          //   id: "nav.snap",
          //   text: "Metamask Snap",
          //   target: "_self",
          // },
        ],
        ci = function () {
          var e = (0, r.useState)(0),
            t = e[0],
            i = e[1],
            a = (0, r.useState)(""),
            l = a[0],
            u = a[1],
            d = (0, r.useState)(""),
            p = d[0],
            m = d[1],
            h = (0, g.useRouter)().pathname;
          return (
            (0, r.useLayoutEffect)(function () {
              m(function () {
                return "metamasksnap" === l
                  ? {
                      background: "hsla(0, 0%, 100%, .36)",
                      "box-shadow": "inset 0 -2px 17px #fff",
                      "-webkit-backdrop-filter":
                        "blur(11px); backdrop-filter: blur(11px);",
                    }
                  : "/birthday4" === h
                  ? {
                      background:
                        "linear-gradient( to bottom, rgba(36, 31, 42, 1), rgba(36, 31, 42, 0.57), rgba(36, 31, 42, 0));",
                    }
                  : "";
              }),
                u(
                  "/metamasksnap" === window.location.pathname.toLowerCase()
                    ? "metamasksnap"
                    : ""
                ),
                i(window.pageYOffset),
                window.addEventListener("scroll", function () {
                  i(window.pageYOffset);
                });
            }, []),
            (0, n.tZ)("header", {
              id: "main-header",
              className:
                t > 0 ? c()([Wt().header, Wt().header_scroll]) : Wt().header,
              style: p,
              children: (0, n.BX)("div", {
                className: Wt().header__container,
                children: [
                  (0, n.tZ)("a", {
                    className: Wt().header__logo,
                    href: "/",
                    children: (0, n.tZ)("img", {
                      className: Wt().header__logo_icon,
                      src:
                        "metamasksnap" === l
                          ? "/icons/tools-logo.webp"
                          : "/icons/main-logo.png",
                      alt: "Qubic AI logo",
                    }),
                  }),
                  (0, n.tZ)("div", {
                    className: Wt()["header__nav-container"],
                    children: (0, n.BX)("nav", {
                      className: Wt().header__nav,
                      children: [
                        (0, n.tZ)("div", {
                          className:
                            "metamasksnap" === l
                              ? c()([
                                  Wt()["header__nav-links"],
                                  Wt()["header__nav-links_colored"],
                                ])
                              : Wt()["header__nav-links"],
                          children: li.map(function (e) {
                            return (0,
                            n.tZ)("a", { className: c()([Wt()["header__nav-link"], "metamasksnap" === l ? Wt().link_colored : ""]), href: e.href, rel: "noreferrer", target: e.target, children: (0, n.tZ)(o.xv, { id: e.id, children: e.text }) }, e.id);
                          }),
                        }),
                        // (0, n.tZ)(oi, {}),
                        (0, n.tZ)("button", {
                          className: Wt().header__launch,
                          onClick: function () {
                            (0, si.yH)(),
                              window.open(s.E.app, "_blank"),
                              window.dataLayer.push({
                                event: "GAevent",
                                ecategory: "click",
                                eaction: "launch app",
                                elabel: void 0,
                              });
                          },
                          children: (0, n.tZ)(o.xv, {
                            id: "header.launchApp",
                            children: "Launch App",
                          }),
                        }),
                        (0, n.tZ)(Ut, {}),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        ui = (i(4313), i(61120), i(86005)),
        di = i.n(ui),
        pi = {
          zero_fees: "/images/banner/zklink-desk.png",
          arb_to_eth: "/images/banner/arb-to-eth.png",
          eth_to_arb: "/images/banner/eth-to-arb.png",
          eth_and_base: "/images/banner/eth-and-base.png",
          eth_to_tron_pink: "/images/banner/eth-to-tron-pink.png",
          arb_to_optimism: "/images/banner/arb-to-optimism.png",
          scroll_to_eth: "/images/banner/scroll-to-eth.png",
          polygon_and_linea: "/images/banner/polygon-and-linea.png",
          eth_and_zksync: "/images/banner/eth-and-zksync.png",
          avalanche_to_base: "/images/banner/avalanche-to-base.png",
          eth_to_xmr: "/images/banner/eth-to-xmr.png",
          swap_eth_and_base: "/images/banner/swap-eth-and-base.png",
          stablecoins: "/images/banner/stablecoins.png",
          native_and_stablecoins: "/images/banner/native-and-stablecoins.png",
          scroll_to_base: "/images/banner/scroll-to-base.png",
          eth_to_tron_purple: "/images/banner/eth-to-tron-purple.png",
          arb_and_bnb: "/images/banner/arb-and-bnb.png",
          linea_and_optimism: "/images/banner/linea-and-optimism.png",
        },
        mi = function (e) {
          var t = e.name,
            i = e.text,
            a = e.accentedWords,
            o = void 0 === a ? [] : a,
            s = "https://docs.crystalballsai.xyz",
            l = (0, r.useMemo)(
              function () {
                var e,
                  t,
                  r = /[.?!]*$/g,
                  a =
                    null !==
                      (t =
                        null === (e = r.exec(i)) || void 0 === e
                          ? void 0
                          : e[0]) && void 0 !== t
                      ? t
                      : "",
                  s = i.replace(r, "").split(" "),
                  l = s.map(function (e, t) {
                    var i = t === s.length - 1 ? e : "".concat(e, " ");
                    return o.includes(e)
                      ? (0, n.tZ)("b", { children: i })
                      : (0, n.tZ)(n.HY, { children: i });
                  });
                return a && l.push((0, n.tZ)(n.HY, { children: a })), l;
              },
              [i, t]
            );
          return (0, n.BX)("a", {
            // href: s,
            target: "_blank",
            rel: "noreferrer",
            className: di().banner,
            style: { backgroundImage: "url(".concat(pi[t], ")") },
            children: [
              (0, n.tZ)("span", { className: di().banner__text, children: l }),
              (0, n.tZ)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: s,
                className: di().banner__link,
                children: "Learn more",
              }),
            ],
          });
        },
        hi = [
          {
            accentedWords: ["0", "Fees", "Below"],
            name: "zero_fees",
            text: "0 Fees On Qubic AI Swaps Below 100$",
          },
          {
            accentedWords: ["500+", "ZERO", "fees"],
            name: "arb_to_eth",
            text: "Bridge 500+ ETH from Arbitrum to Ethereum with ZERO protocol fees",
          },
          {
            accentedWords: ["50+", "without"],
            name: "eth_to_arb",
            text: "Bridge 50+ ETH from Arbitrum to Base without Qubic AI Fee",
          },
          {
            accentedWords: ["100,000+", "WITHOUT", "PROTOCOL", "FEES"],
            name: "eth_and_base",
            text: "Bridge 100,000+ USDT between Ethereum & Base WITHOUT PROTOCOL FEES",
          },
          {
            accentedWords: ["100,000+", "ZERO", "PROTOCOL", "FEES"],
            name: "eth_to_tron_pink",
            text: "Swap 100,000+ USDT from Ethereum to TRON with ZERO PROTOCOL FEES",
          },
          {
            accentedWords: ["zero", "fees"],
            name: "arb_to_optimism",
            text: "Bridging large amounts of ETH from Arbitrum to Optimism? Enjoy zero Qubic AI fees!",
          },
          {
            accentedWords: ["$50,000+", "WITHOUT", "PROTOCOL", "FEES"],
            name: "scroll_to_eth",
            text: "Bridge $50,000+ in ETH from Scroll to Ethereum WITHOUT PROTOCOL FEES",
          },
          {
            accentedWords: ["50,000+", "zero", "fees"],
            name: "polygon_and_linea",
            text: "Bridge 50,000+ USDT between Polygon & Linea & enjoy zero Qubic AI fees",
          },
          {
            accentedWords: ["$20,000+", "WITHOUT", "PROTOCOL", "FEES"],
            name: "eth_and_zksync",
            text: "Swap $20,000+ in ETH between Ethereum and zkSync Era WITHOUT PROTOCOL FEES",
          },
          {
            accentedWords: ["$20,000", "0%", "fee"],
            name: "avalanche_to_base",
            text: "Bridge $20,000 USDT from Avalanche to Base with 0% Protocol fee",
          },
          {
            accentedWords: ["$5,000+", "without", "Fee"],
            name: "eth_to_xmr",
            text: "Bridge $5,000+ in ETH to XMR without Qubic AI Fee",
          },
          {
            accentedWords: ["$100,000", "without", "fees"],
            name: "swap_eth_and_base",
            text: "Swap over $100,000 in ETH between Base & Ethereum without protocol fees",
          },
          {
            accentedWords: ["without", "paying", "fee"],
            name: "stablecoins",
            text: "Swap stablecoins on-chain, without paying a protocol fee!",
          },
          {
            accentedWords: ["without", "fee"],
            name: "native_and_stablecoins",
            text: "Enjoy on-chain swaps between native & stable coins without Qubic AI fee",
          },
          {
            accentedWords: ["zero", "fees"],
            name: "scroll_to_base",
            text: "Bridge USDC from Scroll to Base with zero Qubic AI fees!",
          },
          {
            accentedWords: ["no", "fee"],
            name: "eth_to_tron_purple",
            text: "Swap USDT from Ethereum to TRON with no protocol fee!",
          },
          {
            accentedWords: ["zero", "fees"],
            name: "arb_and_bnb",
            text: "Move USDT between Arbitrum and BNB chains & enjoy zero protocol fees!",
          },
          {
            accentedWords: ["fee-free"],
            name: "linea_and_optimism",
            text: "Bridge ETH between Linea and Optimism, fee-free on Qubic AI!",
          },
        ];
      function gi(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function fi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              gi(e, t, i[t]);
            });
        }
        return e;
      }
      function bi(e) {
        var t = e.Component,
          i = e.pageProps,
          o = (0, r.useState)(!0),
          s = o[0],
          l = o[1],
          c = (0, g.useRouter)().pathname;
        return (
          (0, r.useLayoutEffect)(function () {
            window.location.pathname.includes("metamasksnap") ? l(!1) : l(!0);
          }, []),
          (0, n.BX)(a.HY, {
            children: [
              (0, n.tZ)("div", {
                id: "preact_root",
                children: (0, n.tZ)(Mt, {
                  children: (0, n.BX)(a.HY, {
                    children: [
                      s && "/birthday4" !== c
                        ? (0, n.tZ)(he, {
                            naturalSlideWidth: 100,
                            naturalSlideHeight: 59,
                            totalSlides: hi.length,
                            interval: 5e3,
                            isPlaying: !0,
                            children: (0, n.tZ)(pt, {
                              children: hi.map(function (e, t) {
                                return (0,
                                n.tZ)(at, { index: t, children: (0, n.tZ)(mi, { accentedWords: e.accentedWords, name: e.name, text: e.text }) }, e.name);
                              }),
                            }),
                          })
                        : null,
                      (0, n.tZ)(ci, {}),
                      (0, n.tZ)(t, fi({}, i)),
                      (0, n.tZ)(h, {}),
                    ],
                  }),
                }),
              }),
              (0, n.tZ)("div", { id: "modals", style: { zIndex: 1e3 } }),
            ],
          })
        );
      }
    },
    94219: function (e, t, i) {
      "use strict";
      i.d(t, {
        E: function () {
          return r;
        },
        g: function () {
          return n;
        },
      });
      var n = { desktopWidth: 1200, tabletWidth: 767, mobileWidth: 480 },
        r = {
          app: "https://app-qubic-andy217-devs-projects.vercel.app/",
          appFiat:
            "https://app-qubic-andy217-devs-projects.vercel.app/?fromChain=fiat&toChain=ETH&from=USD&to=ETH&amount=100",
          revokeApproval: "https://app-qubic-andy217-devs-projects.vercel.app/revoke-approval",
          claim: "https://claim.rubic.exchange/",
          b2b: "https://docs.crystalballsai.xyz/",
          lp: "https://app-qubic-andy217-devs-projects.vercel.app/staking-lp",
          earn: "https://app-qubic-andy217-devs-projects.vercel.app/staking",
          faq: "https://app-qubic-andy217-devs-projects.vercel.app/faq",
          promotionPage: "https://app-qubic-andy217-devs-projects.vercel.app/promotion",
          buyRbc:
            "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xComingSoon",
          bridgeRbc:
            "https://app-qubic-andy217-devs-projects.vercel.app/?from=QBC&to=QBC&fromChain=ETH&toChain=ARBITRUM&amount=50000",
          onePager: "/pdf/one-pager.pdf",
          whitePaper: "/pdf/white-paper.pdf",
          policy: "/pdf/privacy-policy.pdf",
          termsOfUse: "/pdf/terms-of-use.pdf",
          pitchDeck: "/pdf/pitch-deck.pdf",
          stakingFullRules: "https://docs.crystalballsai.xyz",
          brandAssets:
            "https://drive.google.com/drive/folders/1pBthXfxfV4pcvAvWZT7Yv8w5M9K8-wta",
          kraken:
            "https://blog.kraken.com/post/13415/trading-for-cvx-fxs-multi-powr-pla-qnt-rbc-rare-toke-starts-march-29-deposit-now/",
          doc: "https://docs.crystalballsai.xyz",
          docSDK: "https://docs.crystalballsai.xyz/integrate-sdk/sdk-overview",
          docWidget:
            "https://docs.crystalballsai.xyz/integrate-widget/rubic-relay-widget",
          blog: "https://rubic.exchange/blog",
          tools: "https://tools.rubic.exchange",
          contactUs: "https://t.me",
          security: "https://docs.crystalballsai.xyz/rubic/security",
          stats: "https://dune.com/rubic_exchange/rubic-general-dashboard",
          roadmap: "https://docs.crystalballsai.xyz/rubic/roadmap",
          rbcToken: "https://docs.crystalballsai.xyz/rubic/tokenomics",
          sdk: "https://docs.crystalballsai.xyz/rubic-sdk/sdk-integrations",
          navDocs: "https://docs.crystalballsai.xyz",
          tutorials: "https://www.youtube.com/c/RubicExchange",
          promoMaterials:
            "https://drive.google.com/drive/folders/1r5opx9rE9ERiYh8YCtBL_Mma5xT3vX1O?usp=sharing",
        };
    },
    62398: function (e) {
      e.exports = {
        feedback: "style_feedback__gttIQ",
        select__control: "style_select__control__mMxpA",
        select__menu: "style_select__menu___i1q1",
        select__option: "style_select__option__9qJ_4",
        select__placeholder: "style_select__placeholder__o6lCI",
        "select__single-value": "style_select__single-value__7AMRa",
        "widget-configuration-form": "style_widget-configuration-form___dAuv",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__u1EKn",
        "select__value-container": "style_select__value-container__LsbLy",
        "select__menu-list": "style_select__menu-list__hF5Vj",
        "select__option--is-selected":
          "style_select__option--is-selected__5Yf52",
        "select__indicator-separator":
          "style_select__indicator-separator__rfRIb",
        "select-not-to-open": "style_select-not-to-open__sUAdL",
        select__indicator: "style_select__indicator__4PJxA",
        modal__wrapper: "style_modal__wrapper__kmn06",
        modal__body: "style_modal__body__rE3Ly",
        modal__title: "style_modal__title__68q5_",
        modal__close: "style_modal__close__GkCww",
        modal__button: "style_modal__button__snuPJ",
        button: "style_button__rAx_I",
        "footer__buttons-documentation":
          "style_footer__buttons-documentation__u15_v",
        button_glassy: "style_button_glassy__pI6AV",
        button_header: "style_button_header___6SQc",
        button_gradient: "style_button_gradient__g8Xbp",
        "button-link": "style_button-link__3jg1Q",
        select: "style_select___8__g",
        "language-select__control": "style_language-select__control__JFM_d",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__bU4BT",
        "language-select__menu": "style_language-select__menu__wl8HX",
        "language-select__menu-list": "style_language-select__menu-list__iUC_o",
        "language-select__value-container":
          "style_language-select__value-container__1Y3dw",
        "language-select__single-value":
          "style_language-select__single-value__x17Ip",
        "language-select__indicator": "style_language-select__indicator__FqOKx",
        "language-select__option": "style_language-select__option__TK_Hl",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__DY1yl",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__geCNG",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__vA9nC",
        "statistic-select__control": "style_statistic-select__control__Mt7_i",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__ZJscL",
        "statistic-select__indicator":
          "style_statistic-select__indicator__GV5jZ",
        "statistic-select__single-value":
          "style_statistic-select__single-value__lZtKF",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__8S2eg",
        "statistic-select__menu": "style_statistic-select__menu__PuxSn",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__LyFFu",
        "statistic-select__value-container":
          "style_statistic-select__value-container__XgBHL",
        "statistic-select__option": "style_statistic-select__option__EoMOC",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__T1Pne",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__jNvY9",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__3_sTt",
        "select-periods": "style_select-periods__EGnbx",
        select_persia: "style_select_persia__Qzh4W",
        "select-periods_persia": "style_select-periods_persia__hjp9x",
        paginationContainer: "style_paginationContainer__lK726",
        pageLinkClassName: "style_pageLinkClassName__ABDSx",
        mobileActiveClassName: "style_mobileActiveClassName__vb9d0",
        activeClassName: "style_activeClassName__g_OwG",
        previousClassName: "style_previousClassName__UVG76",
        nextClassName: "style_nextClassName___0Wun",
        app: "style_app__uwacP",
        marquee: "style_marquee__mb3_o",
        "react-tooltip": "style_react-tooltip__UGGZl",
        carousel: "style_carousel__dO_NW",
        carousel__slide: "style_carousel__slide__jCKs1",
        container: "style_container__Hc2IS",
        footer__buttons: "style_footer__buttons__XAyWl",
        "flex-centered-container": "style_flex-centered-container__Esp_2",
        footer__container: "style_footer__container__e_4qn",
        title: "style_title__skZgV",
        "title-h2": "style_title-h2__FnC2C",
        "title-h2__small": "style_title-h2__small__aa6un",
        "title-h1": "style_title-h1__RHzKm",
        highlight: "style_highlight__BCLZt",
        bold: "style_bold__82RWU",
        nowrap: "style_nowrap__UKJ4J",
        "section-margin": "style_section-margin__TSBFU",
        "gradient-main": "style_gradient-main__hBMGY",
        "gradient-main_dark": "style_gradient-main_dark__twNNl",
        "gradient-ecosystem": "style_gradient-ecosystem__oFqgF",
        "gradient-footer": "style_gradient-footer__zXbUo",
        "gradient-footer_blue": "style_gradient-footer_blue__8Bn9_",
        gradient: "style_gradient___DKXG",
        "gradient-sdk": "style_gradient-sdk__URn2F",
        "gradient-swap-form": "style_gradient-swap-form__bxgZv",
        "gradient-benefits-top": "style_gradient-benefits-top__XX2C8",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__rLwPB",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__2dnYw",
        "gradient-referral-widget": "style_gradient-referral-widget__OU0Dm",
        "gradient-staking-prepare": "style_gradient-staking-prepare__azUVl",
        footer: "style_footer__zvwtM",
        footer_colored: "style_footer_colored__kdJRz",
        footer__wrapper: "style_footer__wrapper__L4rS8",
        "footer__nav-link": "style_footer__nav-link__ADVQO",
        "social-links__item": "style_social-links__item__jiX8v",
        footer__title: "style_footer__title__g9zhm",
        footer__copyright: "style_footer__copyright__TevWE",
        footer__gradient_blue: "style_footer__gradient_blue__IRAjW",
        footer__gradient_green: "style_footer__gradient_green__k_sTk",
        footer__menus: "style_footer__menus__Yiszf",
        footer__nav: "style_footer__nav__drfud",
        footer__bottom: "style_footer__bottom__37tRa",
        "footer__bottom-top": "style_footer__bottom-top__QsMne",
        "footer__bottom-right": "style_footer__bottom-right__4YcN1",
        "footer__bottom-sum": "style_footer__bottom-sum__mxe86",
        "footer__bottom-rbc": "style_footer__bottom-rbc__OzxV8",
        "footer__bottom-rbc-link": "style_footer__bottom-rbc-link__0oQQv",
        "footer__bottom-rbc-icon": "style_footer__bottom-rbc-icon__4cY3K",
        "footer__copyright-headQuarters":
          "style_footer__copyright-headQuarters__KGmRk",
        "footer__copyright-privacy": "style_footer__copyright-privacy__v8K2Z",
        "footer__front-cubes": "style_footer__front-cubes__Pb9iX",
        "footer__front-cubes_shadow": "style_footer__front-cubes_shadow__h5y4u",
        "footer__buttons-email-wrapper":
          "style_footer__buttons-email-wrapper__6c1_w",
        "footer__buttons-email-stayInTheLoop":
          "style_footer__buttons-email-stayInTheLoop__qKATo",
        "social-links": "style_social-links__EF9m_",
        "social-links__item-icon": "style_social-links__item-icon__OZwMA",
      };
    },
    19161: function (e) {
      e.exports = {
        feedback: "style_feedback__B8XqK",
        select__control: "style_select__control__LIzgV",
        select__menu: "style_select__menu__4kP7E",
        select__option: "style_select__option__P0jvc",
        select__placeholder: "style_select__placeholder__KsSd9",
        "select__single-value": "style_select__single-value___lJh8",
        "widget-configuration-form": "style_widget-configuration-form__pUIa3",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__BmX_7",
        "select__value-container": "style_select__value-container__uyEU1",
        "select__menu-list": "style_select__menu-list__vUFcA",
        "select__option--is-selected":
          "style_select__option--is-selected__a7_RP",
        "select__indicator-separator":
          "style_select__indicator-separator__qyXnT",
        "select-not-to-open": "style_select-not-to-open__PaZnu",
        select__indicator: "style_select__indicator__lklI7",
        modal__wrapper: "style_modal__wrapper__91tMb",
        modal__body: "style_modal__body___wvAu",
        modal__title: "style_modal__title__HHuoJ",
        modal__close: "style_modal__close__oxSwu",
        modal__button: "style_modal__button__qsbTJ",
        button: "style_button__X5pJt",
        button_glassy: "style_button_glassy__M4uXs",
        button_header: "style_button_header__Pj_Sg",
        button_gradient: "style_button_gradient___8CQ_",
        "button-link": "style_button-link__cdm6t",
        select: "style_select__esB9H",
        "language-select__control": "style_language-select__control__AJ6vm",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__Iiv4B",
        "language-select__menu": "style_language-select__menu__QEFpL",
        "language-select__menu-list": "style_language-select__menu-list__fJ65i",
        "language-select__value-container":
          "style_language-select__value-container__epIpY",
        "language-select__single-value":
          "style_language-select__single-value__e9Tez",
        "language-select__indicator": "style_language-select__indicator__moR1E",
        "language-select__option": "style_language-select__option__KsnrZ",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__GVtdp",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__SOL4K",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__z_uj7",
        "statistic-select__control": "style_statistic-select__control__jOM3d",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__ubFKZ",
        "statistic-select__indicator":
          "style_statistic-select__indicator__wPHZT",
        "statistic-select__single-value":
          "style_statistic-select__single-value__1GJuV",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused___MBD5",
        "statistic-select__menu": "style_statistic-select__menu__ueiqx",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__wLxhi",
        "statistic-select__value-container":
          "style_statistic-select__value-container__x3Vxy",
        "statistic-select__option": "style_statistic-select__option__Cjt1z",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__OU_HZ",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__X_4fs",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__wzKuo",
        "select-periods": "style_select-periods__EFDuy",
        select_persia: "style_select_persia__5Nwb_",
        "select-periods_persia": "style_select-periods_persia__TPHIp",
        paginationContainer: "style_paginationContainer__UznuE",
        pageLinkClassName: "style_pageLinkClassName___GmYS",
        mobileActiveClassName: "style_mobileActiveClassName__J_6RN",
        activeClassName: "style_activeClassName__xQHjM",
        previousClassName: "style_previousClassName__gZpBM",
        nextClassName: "style_nextClassName__ypPC8",
        app: "style_app__CTY_c",
        marquee: "style_marquee__KHaJs",
        "react-tooltip": "style_react-tooltip__2550C",
        carousel: "style_carousel__Fc_ir",
        carousel__slide: "style_carousel__slide__eZthi",
        container: "style_container__FEH9n",
        "flex-centered-container": "style_flex-centered-container__5_Z4Z",
        title: "style_title__pS0SQ",
        "title-h2": "style_title-h2__8CkpH",
        "title-h2__small": "style_title-h2__small__8TOzg",
        "title-h1": "style_title-h1__dyrzp",
        highlight: "style_highlight__t_yub",
        bold: "style_bold__PaIaQ",
        nowrap: "style_nowrap__v1MvN",
        "section-margin": "style_section-margin__JRgu3",
        "gradient-main": "style_gradient-main__cWDrb",
        "gradient-main_dark": "style_gradient-main_dark__BLr2k",
        "gradient-ecosystem": "style_gradient-ecosystem___lzVR",
        "gradient-footer": "style_gradient-footer__lIBSY",
        "gradient-footer_blue": "style_gradient-footer_blue__GT6Qh",
        gradient: "style_gradient__eOUCs",
        "gradient-sdk": "style_gradient-sdk__4eYAM",
        "gradient-swap-form": "style_gradient-swap-form__7zmxP",
        "gradient-benefits-top": "style_gradient-benefits-top__V2_hC",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity___XC8u",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__0jT8s",
        "gradient-referral-widget": "style_gradient-referral-widget__qCJ_2",
        "gradient-staking-prepare": "style_gradient-staking-prepare__oYXWB",
        hamb: "style_hamb__D7bPQ",
        hamb__item: "style_hamb__item__yTOqK",
        hamb__item_active: "style_hamb__item_active__YYum6",
        burger: "style_burger__RFweG",
        "settings-container": "style_settings-container__AKtcW",
      };
    },
    18480: function (e) {
      e.exports = {
        feedback: "styles_feedback__dZnlc",
        select__control: "styles_select__control__H_OdV",
        select__menu: "styles_select__menu__YrVDm",
        select__option: "styles_select__option__u6A78",
        select__placeholder: "styles_select__placeholder__bK3AE",
        "select__single-value": "styles_select__single-value__mP7oS",
        "widget-configuration-form": "styles_widget-configuration-form__E_v3d",
        "select__control--menu-is-open":
          "styles_select__control--menu-is-open__NIgOI",
        "select__value-container": "styles_select__value-container__kCHAo",
        "select__menu-list": "styles_select__menu-list__prJpH",
        "select__option--is-selected":
          "styles_select__option--is-selected__AHfgH",
        "select__indicator-separator":
          "styles_select__indicator-separator__A_DwH",
        "select-not-to-open": "styles_select-not-to-open__fmgWY",
        select__indicator: "styles_select__indicator__Gmk2y",
        modal__wrapper: "styles_modal__wrapper__3kJix",
        modal__body: "styles_modal__body__B_Wze",
        modal__title: "styles_modal__title__5plhh",
        modal__close: "styles_modal__close__3QrWc",
        modal__button: "styles_modal__button__pfdpe",
        button: "styles_button__eIfbo",
        button_glassy: "styles_button_glassy__I2Llp",
        button_header: "styles_button_header___kRmY",
        button_gradient: "styles_button_gradient__yqPkE",
        "button-link": "styles_button-link__oI9px",
        select: "styles_select__bawR6",
        "language-select__control": "styles_language-select__control__kA57f",
        "language-select__control--is-focused":
          "styles_language-select__control--is-focused__IuNVA",
        "language-select__menu": "styles_language-select__menu__45FWO",
        "language-select__menu-list":
          "styles_language-select__menu-list__c_kjW",
        "language-select__value-container":
          "styles_language-select__value-container__XpaHz",
        "language-select__single-value":
          "styles_language-select__single-value__dzLwO",
        "language-select__indicator":
          "styles_language-select__indicator__sdL1M",
        "language-select__option": "styles_language-select__option__M7_5s",
        "language-select__option--is-selected":
          "styles_language-select__option--is-selected__KDK1f",
        "language-select__dropdown-indicator":
          "styles_language-select__dropdown-indicator__3hjDv",
        "language-select__indicator-separator":
          "styles_language-select__indicator-separator__ycydY",
        "statistic-select__control": "styles_statistic-select__control__2ikWj",
        "statistic-select__control--menu-is-open":
          "styles_statistic-select__control--menu-is-open__B2MxQ",
        "statistic-select__indicator":
          "styles_statistic-select__indicator__3l8oP",
        "statistic-select__single-value":
          "styles_statistic-select__single-value__VSbPh",
        "statistic-select__control--is-focused":
          "styles_statistic-select__control--is-focused__NYdDn",
        "statistic-select__menu": "styles_statistic-select__menu__cc1Y1",
        "statistic-select__menu-list":
          "styles_statistic-select__menu-list__P01f_",
        "statistic-select__value-container":
          "styles_statistic-select__value-container__ncHPu",
        "statistic-select__option": "styles_statistic-select__option__rdofg",
        "statistic-select__option--is-selected":
          "styles_statistic-select__option--is-selected__g9bh_",
        "statistic-select__dropdown-indicator":
          "styles_statistic-select__dropdown-indicator__YrTZm",
        "statistic-select__indicator-separator":
          "styles_statistic-select__indicator-separator__ibwgz",
        "select-periods": "styles_select-periods__FRKeJ",
        select_persia: "styles_select_persia__HJxwE",
        "select-periods_persia": "styles_select-periods_persia__uiHL6",
        paginationContainer: "styles_paginationContainer__YwFyf",
        pageLinkClassName: "styles_pageLinkClassName___eOKj",
        mobileActiveClassName: "styles_mobileActiveClassName__u3xFr",
        activeClassName: "styles_activeClassName__FgzDz",
        previousClassName: "styles_previousClassName__Zm_EZ",
        nextClassName: "styles_nextClassName__IlePV",
        app: "styles_app__vZDgH",
        marquee: "styles_marquee__iuf__",
        "react-tooltip": "styles_react-tooltip__ZD3Pi",
        carousel: "styles_carousel__3etbD",
        carousel__slide: "styles_carousel__slide__FWCsU",
        container: "styles_container__XQ3Iy",
        "flex-centered-container": "styles_flex-centered-container__YA78D",
        title: "styles_title__kcd7a",
        "title-h2": "styles_title-h2__CD7QC",
        "title-h2__small": "styles_title-h2__small__rgRVk",
        "title-h1": "styles_title-h1__icm07",
        highlight: "styles_highlight__fZ5rU",
        bold: "styles_bold__QmXYz",
        nowrap: "styles_nowrap__fbeeK",
        "section-margin": "styles_section-margin__lb9g4",
        "gradient-main": "styles_gradient-main__D4njv",
        "gradient-main_dark": "styles_gradient-main_dark__2b0uv",
        "gradient-ecosystem": "styles_gradient-ecosystem___M00M",
        "gradient-footer": "styles_gradient-footer__10FcY",
        "gradient-footer_blue": "styles_gradient-footer_blue__WxYrm",
        gradient: "styles_gradient__ECOCl",
        "gradient-sdk": "styles_gradient-sdk__bJPpN",
        "gradient-swap-form": "styles_gradient-swap-form__pe3ma",
        "gradient-benefits-top": "styles_gradient-benefits-top__jpvW2",
        "gradient-provideLiquidity": "styles_gradient-provideLiquidity__OCUQ4",
        "gradient-benefits-bottom": "styles_gradient-benefits-bottom__iGv_7",
        "gradient-referral-widget": "styles_gradient-referral-widget__1x9vP",
        "gradient-staking-prepare": "styles_gradient-staking-prepare__eI4Lp",
        dropdown: "styles_dropdown__fgPAf",
        dropdown__links: "styles_dropdown__links__4QnJa",
        "dropdown__links-icon": "styles_dropdown__links-icon__8dct7",
        "dropdown__links-link": "styles_dropdown__links-link__TW_pJ",
        "dropdown__links-link_widget":
          "styles_dropdown__links-link_widget__coW0E",
        "dropdown__links-link_allcrypto":
          "styles_dropdown__links-link_allcrypto__N2Don",
        "dropdown__links-link_ecosystem":
          "styles_dropdown__links-link_ecosystem__sgId0",
        "dropdown__links-link_snap": "styles_dropdown__links-link_snap__J2ptF",
        "dropdown__links-link_sdk": "styles_dropdown__links-link_sdk___h8UN",
        "dropdown__links-link_security":
          "styles_dropdown__links-link_security__lqWyN",
        "dropdown__links-link_token":
          "styles_dropdown__links-link_token__4d5cO",
        "dropdown__links-link_fiatOnRamp":
          "styles_dropdown__links-link_fiatOnRamp__oZ1pR",
        "dropdown__links-link_stats":
          "styles_dropdown__links-link_stats__ic_vJ",
        "dropdown__links-link_docs": "styles_dropdown__links-link_docs__uzWxF",
        "dropdown__links-link_blog": "styles_dropdown__links-link_blog__NKrQ8",
        "dropdown__links-link_tools":
          "styles_dropdown__links-link_tools__IEP65",
        "dropdown__links-link_revoke":
          "styles_dropdown__links-link_revoke__tBHXf",
        "dropdown__links-link_fiat": "styles_dropdown__links-link_fiat__VK6sa",
        "dropdown__links-link_team": "styles_dropdown__links-link_team__nLEQl",
        "dropdown__links-link_faq": "styles_dropdown__links-link_faq__oIjNs",
        "dropdown__buy-rbc": "styles_dropdown__buy-rbc__cZVDZ",
        "dropdown__buy-rbc-link": "styles_dropdown__buy-rbc-link__AdG8V",
        "dropdown__buy-rbc-icon": "styles_dropdown__buy-rbc-icon__CGe6w",
      };
    },
    14290: function (e) {
      e.exports = {
        feedback: "style_feedback___Ig8_",
        select__control: "style_select__control__Yel48",
        select__menu: "style_select__menu__JkouA",
        select__option: "style_select__option__UzjsH",
        select__placeholder: "style_select__placeholder__cadYb",
        "select__single-value": "style_select__single-value__uIJmS",
        "widget-configuration-form": "style_widget-configuration-form__nYOe0",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__EqKoU",
        "select__value-container": "style_select__value-container__ClPdp",
        "select__menu-list": "style_select__menu-list__zy_Ux",
        "select__option--is-selected":
          "style_select__option--is-selected__g5acj",
        "select__indicator-separator":
          "style_select__indicator-separator__cdgkc",
        "select-not-to-open": "style_select-not-to-open__TaK0p",
        select__indicator: "style_select__indicator__ikRhN",
        modal__wrapper: "style_modal__wrapper__X4v31",
        modal__body: "style_modal__body__ELUmO",
        modal__title: "style_modal__title__x4Yhq",
        modal__close: "style_modal__close__rureg",
        modal__button: "style_modal__button__hr3da",
        button: "style_button__DMUjE",
        header__launch: "style_header__launch__3cwda",
        button_glassy: "style_button_glassy__GEuKQ",
        button_header: "style_button_header__20O_X",
        button_gradient: "style_button_gradient__yPVEW",
        "button-link": "style_button-link__S1XIO",
        select: "style_select__OPhOp",
        "language-select__control": "style_language-select__control__HezpF",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__B__QW",
        "language-select__menu": "style_language-select__menu__WoxRf",
        "language-select__menu-list": "style_language-select__menu-list__AwrLY",
        "language-select__value-container":
          "style_language-select__value-container__KJsOS",
        "language-select__single-value":
          "style_language-select__single-value__Fszln",
        "language-select__indicator": "style_language-select__indicator__I_tOQ",
        "language-select__option": "style_language-select__option__rWrLP",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected___D9O2",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__tehub",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__2_Qzx",
        "statistic-select__control": "style_statistic-select__control__3hlJ3",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__7J3Bn",
        "statistic-select__indicator":
          "style_statistic-select__indicator__sQYMN",
        "statistic-select__single-value":
          "style_statistic-select__single-value__VcyvI",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__mGu8x",
        "statistic-select__menu": "style_statistic-select__menu___HGBu",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__npbef",
        "statistic-select__value-container":
          "style_statistic-select__value-container__GZ7k3",
        "statistic-select__option": "style_statistic-select__option__FWCHv",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__Vq9GP",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__s5lma",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__IEfRc",
        "select-periods": "style_select-periods__iNHeo",
        select_persia: "style_select_persia__MF_EL",
        "select-periods_persia": "style_select-periods_persia__M4VWy",
        paginationContainer: "style_paginationContainer__hklSR",
        pageLinkClassName: "style_pageLinkClassName__I_VcI",
        mobileActiveClassName: "style_mobileActiveClassName__UcQGk",
        activeClassName: "style_activeClassName__ZmY4J",
        previousClassName: "style_previousClassName__wf1w7",
        nextClassName: "style_nextClassName__cy_zT",
        app: "style_app__qODjV",
        marquee: "style_marquee__qghiY",
        "react-tooltip": "style_react-tooltip__84cK3",
        carousel: "style_carousel__mtIla",
        carousel__slide: "style_carousel__slide__Gvm7O",
        container: "style_container__aW6_F",
        "flex-centered-container": "style_flex-centered-container__L_Fx9",
        header__container: "style_header__container__G_UQ2",
        title: "style_title__o5ffA",
        "title-h2": "style_title-h2__Qwjce",
        "title-h2__small": "style_title-h2__small___xREM",
        "title-h1": "style_title-h1__kzTPL",
        highlight: "style_highlight__XTU9A",
        bold: "style_bold__5PecJ",
        nowrap: "style_nowrap__lZePf",
        "section-margin": "style_section-margin__IUSMf",
        "gradient-main": "style_gradient-main__mzyCr",
        "gradient-main_dark": "style_gradient-main_dark__413Dx",
        "gradient-ecosystem": "style_gradient-ecosystem__Qn1IX",
        "gradient-footer": "style_gradient-footer__5UZE0",
        "gradient-footer_blue": "style_gradient-footer_blue__WyBTc",
        gradient: "style_gradient__1Vnoj",
        "gradient-sdk": "style_gradient-sdk__0qTvy",
        "gradient-swap-form": "style_gradient-swap-form__ekcKj",
        "gradient-benefits-top": "style_gradient-benefits-top__Wfoyh",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__qpI5h",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__KVy8I",
        "gradient-referral-widget": "style_gradient-referral-widget__SC0u4",
        "gradient-staking-prepare": "style_gradient-staking-prepare__WCOyc",
        link_colored: "style_link_colored__4uylM",
        header: "style_header__CsNnP",
        header_scroll: "style_header_scroll__QXPU6",
        header__logo: "style_header__logo__Rrr7S",
        header__logo_icon: "style_header__logo_icon__tRCGA",
        header__logo_text: "style_header__logo_text__feE9b",
        header__nav: "style_header__nav__sprpC",
        "header__nav-container": "style_header__nav-container__mRAW7",
        "header__nav-links": "style_header__nav-links__v5V1y",
        "header__nav-link": "style_header__nav-link__Coo9p",
        "header__burger-container": "style_header__burger-container__2jkcD",
      };
    },
    42007: function (e) {
      e.exports = {
        feedback: "style_feedback__urwEM",
        select__control: "style_select__control__peYTm",
        select__menu: "style_select__menu__TD__i",
        select__option: "style_select__option__4_esD",
        select__placeholder: "style_select__placeholder__NAOY_",
        "select__single-value": "style_select__single-value__d0NTI",
        "widget-configuration-form": "style_widget-configuration-form__6HDzE",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__5KLVj",
        "select__value-container": "style_select__value-container__277J7",
        "select__menu-list": "style_select__menu-list__DVX_U",
        "select__option--is-selected":
          "style_select__option--is-selected__8OkYS",
        "select__indicator-separator":
          "style_select__indicator-separator__krFkm",
        "select-not-to-open": "style_select-not-to-open__480JR",
        select__indicator: "style_select__indicator__X9Et_",
        modal__wrapper: "style_modal__wrapper__cPPad",
        modal__body: "style_modal__body__klDql",
        modal__title: "style_modal__title__PE9rn",
        modal__close: "style_modal__close__mI9Me",
        modal__button: "style_modal__button__h5_nA",
        button: "style_button__Reisp",
        button_glassy: "style_button_glassy__GjZok",
        button_header: "style_button_header__BS_VL",
        button_gradient: "style_button_gradient__gRKby",
        "button-link": "style_button-link___8JE1",
        select: "style_select__JoC9U",
        "language-select__control": "style_language-select__control__lUyc3",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__oAvRn",
        "language-select__menu": "style_language-select__menu__jVcxx",
        "language-select__menu-list": "style_language-select__menu-list__A7mIB",
        "language-select__value-container":
          "style_language-select__value-container__QkpgJ",
        "language-select__single-value":
          "style_language-select__single-value__onHLq",
        "language-select__indicator": "style_language-select__indicator__UIA_a",
        "language-select__option": "style_language-select__option__1y5Pt",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__J_tXI",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__1nXaZ",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__ge4Mx",
        "statistic-select__control": "style_statistic-select__control___LIco",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__WKwtz",
        "statistic-select__indicator":
          "style_statistic-select__indicator__STdWu",
        "statistic-select__single-value":
          "style_statistic-select__single-value__BAqcs",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__BszJ5",
        "statistic-select__menu": "style_statistic-select__menu__6G_Bo",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__arg0b",
        "statistic-select__value-container":
          "style_statistic-select__value-container__LuUwU",
        "statistic-select__option": "style_statistic-select__option__aolOV",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__iTDmv",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__2ps2I",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__Iq5xz",
        "select-periods": "style_select-periods___MVQz",
        select_persia: "style_select_persia__wr4_a",
        "select-periods_persia": "style_select-periods_persia__6Vjut",
        paginationContainer: "style_paginationContainer__UrzsT",
        pageLinkClassName: "style_pageLinkClassName__xfPD8",
        mobileActiveClassName: "style_mobileActiveClassName__r2rsM",
        activeClassName: "style_activeClassName___NAPY",
        previousClassName: "style_previousClassName__In_Zg",
        nextClassName: "style_nextClassName__DmRyg",
        app: "style_app__MP5h5",
        marquee: "style_marquee__y7VoQ",
        "react-tooltip": "style_react-tooltip__mcJ_S",
        carousel: "style_carousel__z4GCZ",
        carousel__slide: "style_carousel__slide__OsQhk",
        container: "style_container__uf2gs",
        "flex-centered-container": "style_flex-centered-container__SnM3w",
        title: "style_title___Br6S",
        "title-h2": "style_title-h2__m1kon",
        "title-h2__small": "style_title-h2__small__s8wuw",
        "title-h1": "style_title-h1__bLjih",
        highlight: "style_highlight__U1vHL",
        bold: "style_bold__UAycm",
        nowrap: "style_nowrap__QQB0i",
        "section-margin": "style_section-margin__cuiDI",
        "gradient-main": "style_gradient-main__Jf_qW",
        "gradient-main_dark": "style_gradient-main_dark__i_PKV",
        "gradient-ecosystem": "style_gradient-ecosystem__F_ImB",
        "gradient-footer": "style_gradient-footer___fpX1",
        "gradient-footer_blue": "style_gradient-footer_blue__irBx1",
        gradient: "style_gradient__WA2go",
        "gradient-sdk": "style_gradient-sdk__6gJCN",
        "gradient-swap-form": "style_gradient-swap-form__MwOV6",
        "gradient-benefits-top": "style_gradient-benefits-top__sD2c4",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__dXmHQ",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__Cn1Dt",
        "gradient-referral-widget": "style_gradient-referral-widget__MyZcU",
        "gradient-staking-prepare": "style_gradient-staking-prepare__Wlzj_",
        "language__body-item": "style_language__body-item__TAOMB",
        "language__body-item_icon": "style_language__body-item_icon__PAFly",
        "language__body-item_text": "style_language__body-item_text__BeAyl",
        language__placeholder: "style_language__placeholder__rDJqs",
        language__placeholder_text: "style_language__placeholder_text__SviqM",
      };
    },
    86005: function (e) {
      e.exports = {
        feedback: "style_feedback__n16p_",
        select__control: "style_select__control__Kibgu",
        select__menu: "style_select__menu__syh70",
        select__option: "style_select__option__3upP_",
        select__placeholder: "style_select__placeholder__AQWow",
        "select__single-value": "style_select__single-value__SNxdy",
        "widget-configuration-form": "style_widget-configuration-form__M2zFs",
        "select__control--menu-is-open":
          "style_select__control--menu-is-open__I2EtD",
        "select__value-container": "style_select__value-container__det8a",
        "select__menu-list": "style_select__menu-list__CEEqq",
        "select__option--is-selected":
          "style_select__option--is-selected__pXhFA",
        "select__indicator-separator":
          "style_select__indicator-separator__fkI2c",
        "select-not-to-open": "style_select-not-to-open__9h_Du",
        select__indicator: "style_select__indicator__CPhl_",
        modal__wrapper: "style_modal__wrapper__kEx2_",
        modal__body: "style_modal__body__6fuWw",
        modal__title: "style_modal__title__xU9FJ",
        modal__close: "style_modal__close___zIm5",
        modal__button: "style_modal__button__7efpH",
        button: "style_button__lRbbc",
        banner__link: "style_banner__link__oF6oi",
        button_glassy: "style_button_glassy__Ko244",
        button_header: "style_button_header__Fjnp1",
        button_gradient: "style_button_gradient__q5q1k",
        "button-link": "style_button-link__pYmeI",
        select: "style_select__uokCk",
        "language-select__control": "style_language-select__control__09hCO",
        "language-select__control--is-focused":
          "style_language-select__control--is-focused__tw7wD",
        "language-select__menu": "style_language-select__menu__WyaEU",
        "language-select__menu-list": "style_language-select__menu-list__jW092",
        "language-select__value-container":
          "style_language-select__value-container__lHzNO",
        "language-select__single-value":
          "style_language-select__single-value__WvLkR",
        "language-select__indicator": "style_language-select__indicator__ZjbJL",
        "language-select__option": "style_language-select__option__c4oA_",
        "language-select__option--is-selected":
          "style_language-select__option--is-selected__64HrJ",
        "language-select__dropdown-indicator":
          "style_language-select__dropdown-indicator__LDvwZ",
        "language-select__indicator-separator":
          "style_language-select__indicator-separator__M8fxl",
        "statistic-select__control": "style_statistic-select__control__rRjMR",
        "statistic-select__control--menu-is-open":
          "style_statistic-select__control--menu-is-open__K6Avj",
        "statistic-select__indicator":
          "style_statistic-select__indicator__eq6Tq",
        "statistic-select__single-value":
          "style_statistic-select__single-value__ikj7e",
        "statistic-select__control--is-focused":
          "style_statistic-select__control--is-focused__W6m2P",
        "statistic-select__menu": "style_statistic-select__menu__lnT6Y",
        "statistic-select__menu-list":
          "style_statistic-select__menu-list__iAfEb",
        "statistic-select__value-container":
          "style_statistic-select__value-container__GWXtG",
        "statistic-select__option": "style_statistic-select__option__jf4xO",
        "statistic-select__option--is-selected":
          "style_statistic-select__option--is-selected__Lv7kt",
        "statistic-select__dropdown-indicator":
          "style_statistic-select__dropdown-indicator__QHCwF",
        "statistic-select__indicator-separator":
          "style_statistic-select__indicator-separator__OydEx",
        "select-periods": "style_select-periods__zinPj",
        select_persia: "style_select_persia__gS_zv",
        "select-periods_persia": "style_select-periods_persia__h4kYG",
        paginationContainer: "style_paginationContainer__OotEC",
        pageLinkClassName: "style_pageLinkClassName___IbJU",
        mobileActiveClassName: "style_mobileActiveClassName__AXL0P",
        activeClassName: "style_activeClassName__wazSx",
        previousClassName: "style_previousClassName__bPFmr",
        nextClassName: "style_nextClassName__Pa1H3",
        app: "style_app__F_ROt",
        marquee: "style_marquee___1T1H",
        "react-tooltip": "style_react-tooltip__8R0qI",
        carousel: "style_carousel__JIIPp",
        carousel__slide: "style_carousel__slide__n9ZSj",
        container: "style_container__CrS6_",
        "flex-centered-container": "style_flex-centered-container__C5Ksq",
        title: "style_title__jXOWz",
        "title-h2": "style_title-h2__ukjrT",
        "title-h2__small": "style_title-h2__small__kobUJ",
        "title-h1": "style_title-h1__BIIpT",
        highlight: "style_highlight__i9zay",
        bold: "style_bold__QgrP1",
        nowrap: "style_nowrap__F2ywS",
        "section-margin": "style_section-margin__fJywt",
        "gradient-main": "style_gradient-main__70h20",
        "gradient-main_dark": "style_gradient-main_dark__wz8gr",
        "gradient-ecosystem": "style_gradient-ecosystem__yeCoi",
        "gradient-footer": "style_gradient-footer__6DQ1h",
        "gradient-footer_blue": "style_gradient-footer_blue__jwe9k",
        gradient: "style_gradient__C6kqb",
        "gradient-sdk": "style_gradient-sdk__V5Vug",
        "gradient-swap-form": "style_gradient-swap-form__r7dbt",
        "gradient-benefits-top": "style_gradient-benefits-top__d6Mwa",
        "gradient-provideLiquidity": "style_gradient-provideLiquidity__AtfWA",
        "gradient-benefits-bottom": "style_gradient-benefits-bottom__NQ4gM",
        "gradient-referral-widget": "style_gradient-referral-widget__SCQgU",
        "gradient-staking-prepare": "style_gradient-staking-prepare__eUbkS",
        banner: "style_banner___i1sX",
        banner__text: "style_banner__text__mHCJf",
        "banner__mobile-br": "style_banner__mobile-br__5fetp",
      };
    },
    41604: function (e) {
      e.exports = { animated: "styles_animated___V5_7" };
    },
    93865: function (e) {
      e.exports = { "drop-portal": "styles_drop-portal__K_q4U" };
    },
    61120: function () {},
    4313: function () {},
    25675: function (e, t, i) {
      e.exports = i(19749);
    },
    11163: function (e, t, i) {
      e.exports = i(80880);
    },
    18413: function (e, t, i) {
      "use strict";
      i.d(t, {
        Pj: function () {
          return v;
        },
        xv: function () {
          return P;
        },
      });
      var n,
        r = i(6400),
        a = i(30396),
        o = i(26905),
        s = i.n(o),
        l = {};
      function c(e, t, i) {
        if (3 === e.nodeType) {
          var n = "textContent" in e ? e.textContent : e.nodeValue || "";
          if (!1 !== c.options.trim) {
            var r = 0 === t || t === i.length - 1;
            if (
              (!(n =
                n.match(/^[\s\n]+$/g) && "all" !== c.options.trim
                  ? " "
                  : n.replace(
                      /(^[\s\n]+|[\s\n]+$)/g,
                      "all" === c.options.trim || r ? "" : " "
                    )) ||
                " " === n) &&
              i.length > 1 &&
              r
            )
              return null;
          }
          return n;
        }
        if (1 !== e.nodeType) return null;
        var a = String(e.nodeName).toLowerCase();
        if ("script" === a && !c.options.allowScripts) return null;
        var o,
          s,
          l = c.h(
            a,
            (function (e) {
              var t = e && e.length;
              if (!t) return null;
              for (var i = {}, n = 0; n < t; n++) {
                var r = e[n],
                  a = r.name,
                  o = r.value;
                "on" === a.substring(0, 2) &&
                  c.options.allowEvents &&
                  (o = new Function(o)),
                  (i[a] = o);
              }
              return i;
            })(e.attributes),
            (s =
              (o = e.childNodes) && Array.prototype.map.call(o, c).filter(d)) &&
              s.length
              ? s
              : null
          );
        return c.visitor && c.visitor(l), l;
      }
      var u,
        d = function (e) {
          return e;
        },
        p = {};
      function m(e) {
        var t = (e.type || "").toLowerCase(),
          i = m.map;
        i && i.hasOwnProperty(t)
          ? ((e.type = i[t]),
            (e.props = Object.keys(e.props || {}).reduce(function (t, i) {
              var n;
              return (
                (t[
                  ((n = i),
                  n.replace(/-(.)/g, function (e, t) {
                    return t.toUpperCase();
                  }))
                ] = e.props[i]),
                t
              );
            }, {})))
          : (e.type = t.replace(/[^a-z0-9-]/i, ""));
      }
      var h = (function (e) {
          function t() {
            e.apply(this, arguments);
          }
          return (
            e && (t.__proto__ = e),
            ((t.prototype = Object.create(e && e.prototype)).constructor = t),
            (t.setReviver = function (e) {
              u = e;
            }),
            (t.prototype.shouldComponentUpdate = function (e) {
              var t = this.props;
              return (
                e.wrap !== t.wrap || e.type !== t.type || e.markup !== t.markup
              );
            }),
            (t.prototype.setComponents = function (e) {
              if (((this.map = {}), e))
                for (var t in e)
                  if (e.hasOwnProperty(t)) {
                    var i = t
                      .replace(
                        /([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,
                        "$1$3-$2$4"
                      )
                      .toLowerCase();
                    this.map[i] = e[t];
                  }
            }),
            (t.prototype.render = function (e) {
              var t = e.wrap;
              void 0 === t && (t = !0);
              var i,
                a = e.type,
                o = e.markup,
                s = e.components,
                d = e.reviver,
                h = e.onError,
                g = e["allow-scripts"],
                f = e["allow-events"],
                b = e.trim,
                _ = (function (e, t) {
                  var i = {};
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                      -1 === t.indexOf(n) &&
                      (i[n] = e[n]);
                  return i;
                })(e, [
                  "wrap",
                  "type",
                  "markup",
                  "components",
                  "reviver",
                  "onError",
                  "allow-scripts",
                  "allow-events",
                  "trim",
                ]),
                y =
                  d ||
                  this.reviver ||
                  this.constructor.prototype.reviver ||
                  u ||
                  r.h;
              this.setComponents(s);
              var v = { allowScripts: g, allowEvents: f, trim: b };
              try {
                i = (function (e, t, i, r, a) {
                  var o = (function (e, t) {
                    var i,
                      r,
                      a,
                      o,
                      s = "html" === t ? "text/html" : "application/xml";
                    "html" === t
                      ? ((o = "body"),
                        (a =
                          "<!DOCTYPE html>\n<html><body>" +
                          e +
                          "</body></html>"))
                      : ((o = "xml"),
                        (a =
                          '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' +
                          e +
                          "</xml>"));
                    try {
                      i = new DOMParser().parseFromString(a, s);
                    } catch (e) {
                      r = e;
                    }
                    if (
                      (i ||
                        "html" !== t ||
                        ((i =
                          n ||
                          (n = (function () {
                            if (
                              document.implementation &&
                              document.implementation.createHTMLDocument
                            )
                              return document.implementation.createHTMLDocument(
                                ""
                              );
                            var e = document.createElement("iframe");
                            return (
                              (e.style.cssText =
                                "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;"),
                              e.setAttribute("sandbox", "allow-forms"),
                              document.body.appendChild(e),
                              e.contentWindow.document
                            );
                          })())).open(),
                        i.write(a),
                        i.close()),
                      i)
                    ) {
                      var l = i.getElementsByTagName(o)[0],
                        c = l.firstChild;
                      return (
                        e && !c && (l.error = "Document parse failed."),
                        c &&
                          "parsererror" === String(c.nodeName).toLowerCase() &&
                          (c.removeChild(c.firstChild),
                          c.removeChild(c.lastChild),
                          (l.error =
                            c.textContent ||
                            c.nodeValue ||
                            r ||
                            "Unknown error"),
                          l.removeChild(c)),
                        l
                      );
                    }
                  })(e, t);
                  if (o && o.error) throw new Error(o.error);
                  var s = (o && o.body) || o;
                  m.map = r || p;
                  var u =
                    s &&
                    (function (e, t, i, n) {
                      return (
                        (c.visitor = t), (c.h = i), (c.options = n || l), c(e)
                      );
                    })(s, m, i, a);
                  return (
                    (m.map = null), (u && u.props && u.props.children) || null
                  );
                })(o, a, y, this.map, v);
              } catch (S) {
                h
                  ? h({ error: S })
                  : "undefined" != typeof console &&
                    console.error &&
                    console.error("preact-markup: " + S);
              }
              if (!1 === t) return i || null;
              var k = _.hasOwnProperty("className") ? "className" : "class",
                w = _[k];
              return (
                w
                  ? w.splice
                    ? w.splice(0, 0, "markup")
                    : "string" == typeof w
                    ? (_[k] += " markup")
                    : "object" == typeof w && (w.markup = !0)
                  : (_[k] = "markup"),
                y("div", _, i || null)
              );
            }),
            t
          );
        })(r.wA),
        g = (0, r.kr)({ intl: {} });
      function f(e) {
        return null !== e && void 0 !== e;
      }
      function b(e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      }
      function _(e, t) {
        var i = b({}, e);
        for (var n in t)
          t.hasOwnProperty(n) &&
            (e[n] &&
            t[n] &&
            "object" === typeof e[n] &&
            "object" === typeof t[n]
              ? (i[n] = _(e[n], t[n]))
              : (i[n] = e[n] || t[n]));
        return i;
      }
      var y = /[?&#]intl=show/;
      function v(e) {
        var t = e.scope,
          i = e.mark,
          n = e.definition,
          o = (function (e, t) {
            var i = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                -1 === t.indexOf(n) &&
                (i[n] = e[n]);
            return i;
          })(e, ["scope", "mark", "definition"]),
          s = b({}, (0, a.qp)(g).intl || {});
        return (
          t && (s.scope = t),
          n && (s.dictionary = _(s.dictionary || {}, n)),
          (i ||
            ("undefined" !== typeof location && String(location).match(y))) &&
            (s.mark = !0),
          (0, r.h)(g.Provider, { value: { intl: s } }, o.children)
        );
      }
      function k(e, t) {
        if (arguments.length < 2)
          return (
            (t = e),
            function (e) {
              return k(e, t);
            }
          );
        function i(i) {
          return (0, r.h)(v, t || {}, (0, r.h)(e, i));
        }
        return (
          (i.getWrappedComponent =
            (e && e.getWrappedComponent) ||
            function () {
              return e;
            }),
          i
        );
      }
      var w = {};
      function S(e, t, i, n) {
        return e && e.replace(/\{\{([\w.-]+)\}\}/g, C.bind(null, t || w, i, n));
      }
      function C(e, t, i, n, r) {
        for (var a = r.split("."), o = e, s = 0; s < a.length; s++) {
          if (null == (o = o[a[s]])) return "";
          if (o && o.type === P)
            return R(
              o.props.id,
              t,
              i,
              o.props.fields,
              o.props.plural,
              o.props.fallback
            );
        }
        return "string" === typeof o && o.match(/\{\{/) && (o = S(o, e)), o;
      }
      function R(e, t, i, n, r, a) {
        t && (e = t + "." + e);
        var o = i && s()(i, e);
        return (
          (r || 0 === r) &&
            o &&
            "object" === typeof o &&
            (o = o.splice
              ? o[r] || o[0]
              : 0 === r && f(o.none || o.zero)
              ? o.none || o.zero
              : 1 === r && f(o.one || o.singular)
              ? o.one || o.singular
              : o.some || o.many || o.plural || o.other || o),
          (o && S(o, n, t, i)) || a || null
        );
      }
      function A(e) {
        var t = e.value,
          i = e.id,
          n = (0, a.qp)(g).intl;
        if (n && n.mark) {
          var o = "dictionary" + (n && n.scope ? "." + n.scope : "") + "." + i;
          return (0, r.h)(
            "mark",
            {
              style: {
                background: t
                  ? s()(n, o)
                    ? "rgba(119,231,117,.5)"
                    : "rgba(229,226,41,.5)"
                  : "rgba(228,147,51,.5)",
              },
              title: i,
            },
            t
          );
        }
        return t;
      }
      function P(e) {
        var t = e.id,
          i = e.children,
          n = e.plural,
          o = e.fields,
          s = (0, a.qp)(g).intl,
          l = R(t, s && s.scope, s && s.dictionary, o, n, i);
        return (0, r.h)(A, { id: t, value: l });
      }
      function O(e, t, i) {
        var n = {};
        for (var r in ((t = t || {}),
        (e = (function (e) {
          if (
            ("string" === typeof (e = e || {}) && (e = e.split(",")),
            "join" in e)
          ) {
            for (var t = {}, i = 0; i < e.length; i++) {
              var n = e[i].trim();
              n && (t[n.split(".").pop()] = n);
            }
            return t;
          }
          return e;
        })(e)),
        e))
          if (e.hasOwnProperty(r) && e[r]) {
            var a = e[r];
            i || "string" !== typeof a
              ? a.type === P &&
                ((a = b({ fallback: a.props.children }, a.props)),
                (n[r] = R(
                  a.id,
                  t.scope,
                  t.dictionary,
                  a.fields,
                  a.plural,
                  a.fallback
                )))
              : (n[r] = R(a, t.scope, t.dictionary));
          }
        return n;
      }
      function T(e) {
        var t = e.children,
          i = (0, a.qp)(g).intl;
        return t && t.length
          ? t.map(function (e) {
              return (0, r.Tm)(e, O(e.props, i, !0));
            })
          : t && (0, r.Tm)(t, O(t.props, i, !0));
      }
      function x(e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            -1 === t.indexOf(n) &&
            (i[n] = e[n]);
        return i;
      }
      function I(e) {
        var t = e.html,
          i = e.id,
          n = x(e, ["html", "id"]);
        return (0, r.h)(A, {
          id: i,
          value: t
            ? "string" === typeof t
              ? (0, r.h)(
                  h,
                  Object.assign({}, { type: "html", trim: !1 }, n, {
                    markup: t,
                  })
                )
              : (0, r.h)("span", null, t)
            : t,
        });
      }
      (k.intl = k),
        (k.IntlContext = g),
        (k.IntlProvider = v),
        (k.Text = P),
        (k.MarkupText = function (e) {
          var t = e.id,
            i = e.fields,
            n = e.plural,
            a = e.children,
            o = x(e, ["id", "fields", "plural", "children"]);
          return (0, r.h)(
            T,
            null,
            (0, r.h)(
              I,
              Object.assign(
                {},
                {
                  html: (0, r.h)(P, {
                    id: t,
                    fields: i,
                    plural: n,
                    children: a,
                  }),
                  id: t,
                },
                o
              )
            )
          );
        }),
        (k.Localizer = T),
        (k.withText = function (e) {
          return function (t) {
            function i(i, n) {
              var o = (0, a.qp)(g).intl,
                s = O("function" === typeof e ? e(i, { intl: o }) : e, o);
              return (0, r.h)(t, b(b({}, i), s));
            }
            return (
              (i.getWrappedComponent =
                (t && t.getWrappedComponent) ||
                function () {
                  return t;
                }),
              i
            );
          };
        }),
        (k.useText = function (e) {
          var t = (0, a.qp)(g).intl;
          return O("function" === typeof e ? e({ intl: t }) : e, t);
        }),
        (k.translate = R);
    },
    85518: function (e, t, i) {
      "use strict";
      var n,
        r = i(98661),
        a = (n = r) && "object" === typeof n && "default" in n ? n.default : n,
        o = i(23451),
        s = new o(),
        l = s.getBrowser(),
        c = s.getCPU(),
        u = s.getDevice(),
        d = s.getEngine(),
        p = s.getOS(),
        m = s.getUA(),
        h = function (e) {
          return s.setUA(e);
        },
        g = function (e) {
          if (e) {
            var t = new o(e);
            return {
              UA: t,
              browser: t.getBrowser(),
              cpu: t.getCPU(),
              device: t.getDevice(),
              engine: t.getEngine(),
              os: t.getOS(),
              ua: t.getUA(),
              setUserAgent: function (e) {
                return t.setUA(e);
              },
            };
          }
          console.error("No userAgent string was provided");
        },
        f = Object.freeze({
          ClientUAInstance: s,
          browser: l,
          cpu: c,
          device: u,
          engine: d,
          os: p,
          ua: m,
          setUa: h,
          parseUserAgent: g,
        });
      function b(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function _(e) {
        return (
          (_ =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _(e)
        );
      }
      function y(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function v(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function k() {
        return (
          (k =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }),
          k.apply(this, arguments)
        );
      }
      function w(e) {
        return (
          (w = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          w(e)
        );
      }
      function S(e, t) {
        return (
          (S =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          S(e, t)
        );
      }
      function C(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      function R(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function A(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == i) return;
            var n,
              r,
              a = [],
              o = !0,
              s = !1;
            try {
              for (
                i = i.call(e);
                !(o = (n = i.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                o = !0
              );
            } catch (l) {
              (s = !0), (r = l);
            } finally {
              try {
                o || null == i.return || i.return();
              } finally {
                if (s) throw r;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return P(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return P(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var O = "mobile",
        T = "tablet",
        x = "smarttv",
        I = "console",
        E = "wearable",
        M = "embedded",
        D = void 0,
        N = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          EdgeChromium: "Edge Chromium",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        B = {
          IOS: "iOS",
          Android: "Android",
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MAC_OS: "Mac OS",
        },
        L = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1,
        },
        z = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || t;
        },
        j = function () {
          return (
            !(
              "undefined" === typeof window ||
              (!window.navigator && !navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        U = function (e) {
          var t = j();
          return (
            t &&
            t.platform &&
            (-1 !== t.platform.indexOf(e) ||
              ("MacIntel" === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        F = function (e, t, i, n) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? b(Object(i), !0).forEach(function (t) {
                    v(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : b(Object(i)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(i, t)
                    );
                  });
            }
            return e;
          })({}, e, {
            vendor: z(t.vendor),
            model: z(t.model),
            os: z(i.name),
            osVersion: z(i.version),
            ua: z(n),
          });
        };
      var W = function (e) {
          return e.type === O;
        },
        q = function (e) {
          return e.type === T;
        },
        V = function (e) {
          var t = e.type;
          return t === O || t === T;
        },
        H = function (e) {
          return e.type === x;
        },
        G = function (e) {
          return e.type === D;
        },
        K = function (e) {
          return e.type === E;
        },
        Z = function (e) {
          return e.type === I;
        },
        Y = function (e) {
          return e.type === M;
        },
        X = function (e) {
          var t = e.vendor;
          return z(t);
        },
        Q = function (e) {
          var t = e.model;
          return z(t);
        },
        $ = function (e) {
          var t = e.type;
          return z(t, "browser");
        },
        J = function (e) {
          return e.name === B.Android;
        },
        ee = function (e) {
          return e.name === B.Windows;
        },
        te = function (e) {
          return e.name === B.MAC_OS;
        },
        ie = function (e) {
          return e.name === B.WindowsPhone;
        },
        ne = function (e) {
          return e.name === B.IOS;
        },
        re = function (e) {
          var t = e.version;
          return z(t);
        },
        ae = function (e) {
          var t = e.name;
          return z(t);
        },
        oe = function (e) {
          return e.name === N.Chrome;
        },
        se = function (e) {
          return e.name === N.Firefox;
        },
        le = function (e) {
          return e.name === N.Chromium;
        },
        ce = function (e) {
          return e.name === N.Edge;
        },
        ue = function (e) {
          return e.name === N.Yandex;
        },
        de = function (e) {
          var t = e.name;
          return t === N.Safari || t === N.MobileSafari;
        },
        pe = function (e) {
          return e.name === N.MobileSafari;
        },
        me = function (e) {
          return e.name === N.Opera;
        },
        he = function (e) {
          var t = e.name;
          return t === N.InternetExplorer || t === N.Ie;
        },
        ge = function (e) {
          return e.name === N.MIUI;
        },
        fe = function (e) {
          return e.name === N.SamsungBrowser;
        },
        be = function (e) {
          var t = e.version;
          return z(t);
        },
        _e = function (e) {
          var t = e.major;
          return z(t);
        },
        ye = function (e) {
          var t = e.name;
          return z(t);
        },
        ve = function (e) {
          var t = e.name;
          return z(t);
        },
        ke = function (e) {
          var t = e.version;
          return z(t);
        },
        we = function () {
          var e = j(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" === typeof t && /electron/.test(t);
        },
        Se = function (e) {
          return "string" === typeof e && -1 !== e.indexOf("Edg/");
        },
        Ce = function () {
          var e = j();
          return (
            e &&
            (/iPad|iPhone|iPod/.test(e.platform) ||
              ("MacIntel" === e.platform && e.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        },
        Re = function () {
          return U("iPad");
        },
        Ae = function () {
          return U("iPhone");
        },
        Pe = function () {
          return U("iPod");
        },
        Oe = function (e) {
          return z(e);
        };
      function Te(e) {
        var t = e || f,
          i = t.device,
          n = t.browser,
          r = t.os,
          a = t.engine,
          o = t.ua;
        return {
          isSmartTV: H(i),
          isConsole: Z(i),
          isWearable: K(i),
          isEmbedded: Y(i),
          isMobileSafari: pe(n) || Re(),
          isChromium: le(n),
          isMobile: V(i) || Re(),
          isMobileOnly: W(i),
          isTablet: q(i) || Re(),
          isBrowser: G(i),
          isDesktop: G(i),
          isAndroid: J(r),
          isWinPhone: ie(r),
          isIOS: ne(r) || Re(),
          isChrome: oe(n),
          isFirefox: se(n),
          isSafari: de(n),
          isOpera: me(n),
          isIE: he(n),
          osVersion: re(r),
          osName: ae(r),
          fullBrowserVersion: be(n),
          browserVersion: _e(n),
          browserName: ye(n),
          mobileVendor: X(i),
          mobileModel: Q(i),
          engineName: ve(a),
          engineVersion: ke(a),
          getUA: Oe(o),
          isEdge: ce(n) || Se(o),
          isYandex: ue(n),
          deviceType: $(i),
          isIOS13: Ce(),
          isIPad13: Re(),
          isIPhone13: Ae(),
          isIPod13: Pe(),
          isElectron: we(),
          isEdgeChromium: Se(o),
          isLegacyEdge: ce(n) && !Se(o),
          isWindows: ee(r),
          isMacOs: te(r),
          isMIUI: ge(n),
          isSamsungBrowser: fe(n),
        };
      }
      var xe = H(u),
        Ie = Z(u),
        Ee = K(u),
        Me = Y(u),
        De = pe(l) || Re(),
        Ne = le(l),
        Be = V(u) || Re(),
        Le = W(u),
        ze = q(u) || Re(),
        je = G(u),
        Ue = G(u),
        Fe = J(p),
        We = ie(p),
        qe = ne(p) || Re(),
        Ve = oe(l),
        He = se(l),
        Ge = de(l),
        Ke = me(l),
        Ze = he(l),
        Ye = re(p),
        Xe = ae(p),
        Qe = be(l),
        $e = _e(l),
        Je = ye(l),
        et = X(u),
        tt = Q(u),
        it = ve(d),
        nt = ke(d),
        rt = Oe(m),
        at = ce(l) || Se(m),
        ot = ue(l),
        st = $(u),
        lt = Ce(),
        ct = Re(),
        ut = Ae(),
        dt = Pe(),
        pt = we(),
        mt = Se(m),
        ht = ce(l) && !Se(m),
        gt = ee(p),
        ft = te(p),
        bt = ge(l),
        _t = fe(l);
      function yt(e) {
        var t = e || window.navigator.userAgent;
        return g(t);
      }
      t.tq = Be;
    },
    49559: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = e || "";
          t && (a = n(e));
          i && (a = r(a));
          return a;
        });
      var i =
        /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
      function n(e) {
        return e
          .toString()
          .trim()
          .replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (e, t, n) {
            return t > 0 &&
              t + e.length !== n.length &&
              e.search(i) > -1 &&
              ":" !== n.charAt(t - 2) &&
              ("-" !== n.charAt(t + e.length) || "-" === n.charAt(t - 1)) &&
              n.charAt(t - 1).search(/[^\s-]/) < 0
              ? e.toLowerCase()
              : e.substr(1).search(/[A-Z]|\../) > -1
              ? e
              : e.charAt(0).toUpperCase() + e.substr(1);
          });
      }
      function r(e) {
        return "string" === typeof (t = e) && -1 !== t.indexOf("@")
          ? (console.warn("This arg looks like an email address, redacting."),
            "REDACTED (Potential Email Address)")
          : e;
        var t;
      }
    },
    41638: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.GA4 = void 0);
      var n = l(i(76161)),
        r = l(i(49559)),
        a = [
          "eventCategory",
          "eventAction",
          "eventLabel",
          "eventValue",
          "hitType",
        ],
        o = ["title", "location"],
        s = ["page", "hitType"];
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      function u(e) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          u(e)
        );
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          g(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(i), !0).forEach(function (t) {
                _(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : p(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function h(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                r,
                a,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((a = (i = i.call(e)).next), 0 === t)) {
                  if (Object(i) !== i) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(i)).done) &&
                    (s.push(n.value), s.length !== t);
                    l = !0
                  );
              } catch (u) {
                (c = !0), (r = u);
              } finally {
                try {
                  if (
                    !l &&
                    null != i.return &&
                    ((o = i.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return s;
            }
          })(e, t) ||
          g(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, t) {
        if (e) {
          if ("string" === typeof e) return f(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(e)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function b(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, y(n.key), n);
        }
      }
      function _(e, t, i) {
        return (
          (t = y(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function y(e) {
        var t = (function (e, t) {
          if ("object" !== u(e) || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" !== u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === u(t) ? t : String(t);
      }
      var v = (function () {
        function e() {
          var t = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            _(this, "reset", function () {
              (t.isInitialized = !1),
                (t._testMode = !1),
                t._currentMeasurementId,
                (t._hasLoadedGA = !1),
                (t._isQueuing = !1),
                (t._queueGtag = []);
            }),
            _(this, "_gtag", function () {
              for (
                var e = arguments.length, i = new Array(e), r = 0;
                r < e;
                r++
              )
                i[r] = arguments[r];
              t._testMode || t._isQueuing
                ? t._queueGtag.push(i)
                : n.default.apply(void 0, i);
            }),
            _(this, "_loadGA", function (e, i) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "https://www.googletagmanager.com/gtag/js";
              if (
                "undefined" !== typeof window &&
                "undefined" !== typeof document &&
                !t._hasLoadedGA
              ) {
                var r = document.createElement("script");
                (r.async = !0),
                  (r.src = "".concat(n, "?id=").concat(e)),
                  i && r.setAttribute("nonce", i),
                  document.body.appendChild(r),
                  (window.dataLayer = window.dataLayer || []),
                  (window.gtag = function () {
                    window.dataLayer.push(arguments);
                  }),
                  (t._hasLoadedGA = !0);
              }
            }),
            _(this, "_toGtagOptions", function (e) {
              if (e) {
                var t = {
                  cookieUpdate: "cookie_update",
                  cookieExpires: "cookie_expires",
                  cookieDomain: "cookie_domain",
                  cookieFlags: "cookie_flags",
                  userId: "user_id",
                  clientId: "client_id",
                  anonymizeIp: "anonymize_ip",
                  contentGroup1: "content_group1",
                  contentGroup2: "content_group2",
                  contentGroup3: "content_group3",
                  contentGroup4: "content_group4",
                  contentGroup5: "content_group5",
                  allowAdFeatures: "allow_google_signals",
                  allowAdPersonalizationSignals:
                    "allow_ad_personalization_signals",
                  nonInteraction: "non_interaction",
                  page: "page_path",
                  hitCallback: "event_callback",
                };
                return Object.entries(e).reduce(function (e, i) {
                  var n = h(i, 2),
                    r = n[0],
                    a = n[1];
                  return t[r] ? (e[t[r]] = a) : (e[r] = a), e;
                }, {});
              }
            }),
            _(this, "initialize", function (e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!e) throw new Error("Require GA_MEASUREMENT_ID");
              var n = "string" === typeof e ? [{ trackingId: e }] : e;
              t._currentMeasurementId = n[0].trackingId;
              var r = i.gaOptions,
                a = i.gtagOptions,
                o = i.nonce,
                s = i.testMode,
                l = void 0 !== s && s,
                c = i.gtagUrl;
              if (
                ((t._testMode = l),
                l || t._loadGA(t._currentMeasurementId, o, c),
                t.isInitialized ||
                  (t._gtag("js", new Date()),
                  n.forEach(function (e) {
                    var i = m(
                      m(m({}, t._toGtagOptions(m(m({}, r), e.gaOptions))), a),
                      e.gtagOptions
                    );
                    Object.keys(i).length
                      ? t._gtag("config", e.trackingId, i)
                      : t._gtag("config", e.trackingId);
                  })),
                (t.isInitialized = !0),
                !l)
              ) {
                var u = d(t._queueGtag);
                for (t._queueGtag = [], t._isQueuing = !1; u.length; ) {
                  var p = u.shift();
                  t._gtag.apply(t, d(p)), "get" === p[0] && (t._isQueuing = !0);
                }
              }
            }),
            _(this, "set", function (e) {
              e
                ? "object" === u(e)
                  ? (0 === Object.keys(e).length &&
                      console.warn("empty `fieldsObject` given to .set()"),
                    t._gaCommand("set", e))
                  : console.warn("Expected `fieldsObject` arg to be an Object")
                : console.warn("`fieldsObject` is required in .set()");
            }),
            _(this, "_gaCommandSendEvent", function (e, i, n, r, a) {
              t._gtag(
                "event",
                i,
                m(
                  m(
                    { event_category: e, event_label: n, value: r },
                    a && { non_interaction: a.nonInteraction }
                  ),
                  t._toGtagOptions(a)
                )
              );
            }),
            _(this, "_gaCommandSendEventParameters", function () {
              for (
                var e = arguments.length, i = new Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              if ("string" === typeof i[0])
                t._gaCommandSendEvent.apply(t, d(i.slice(1)));
              else {
                var r = i[0],
                  o = r.eventCategory,
                  s = r.eventAction,
                  l = r.eventLabel,
                  u = r.eventValue,
                  p = (r.hitType, c(r, a));
                t._gaCommandSendEvent(o, s, l, u, p);
              }
            }),
            _(this, "_gaCommandSendTiming", function (e, i, n, r) {
              t._gtag("event", "timing_complete", {
                name: i,
                value: n,
                event_category: e,
                event_label: r,
              });
            }),
            _(this, "_gaCommandSendPageview", function (e, i) {
              if (i && Object.keys(i).length) {
                var n = t._toGtagOptions(i),
                  r = n.title,
                  a = n.location,
                  s = c(n, o);
                t._gtag(
                  "event",
                  "page_view",
                  m(
                    m(
                      m(m({}, e && { page_path: e }), r && { page_title: r }),
                      a && { page_location: a }
                    ),
                    s
                  )
                );
              } else e ? t._gtag("event", "page_view", { page_path: e }) : t._gtag("event", "page_view");
            }),
            _(this, "_gaCommandSendPageviewParameters", function () {
              for (
                var e = arguments.length, i = new Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              if ("string" === typeof i[0])
                t._gaCommandSendPageview.apply(t, d(i.slice(1)));
              else {
                var r = i[0],
                  a = r.page,
                  o = (r.hitType, c(r, s));
                t._gaCommandSendPageview(a, o);
              }
            }),
            _(this, "_gaCommandSend", function () {
              for (
                var e = arguments.length, i = new Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              var r = "string" === typeof i[0] ? i[0] : i[0].hitType;
              switch (r) {
                case "event":
                  t._gaCommandSendEventParameters.apply(t, i);
                  break;
                case "pageview":
                  t._gaCommandSendPageviewParameters.apply(t, i);
                  break;
                case "timing":
                  t._gaCommandSendTiming.apply(t, d(i.slice(1)));
                  break;
                case "screenview":
                case "transaction":
                case "item":
                case "social":
                case "exception":
                  console.warn("Unsupported send command: ".concat(r));
                  break;
                default:
                  console.warn("Send command doesn't exist: ".concat(r));
              }
            }),
            _(this, "_gaCommandSet", function () {
              for (
                var e = arguments.length, i = new Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              "string" === typeof i[0] && (i[0] = _({}, i[0], i[1])),
                t._gtag("set", t._toGtagOptions(i[0]));
            }),
            _(this, "_gaCommand", function (e) {
              for (
                var i = arguments.length,
                  n = new Array(i > 1 ? i - 1 : 0),
                  r = 1;
                r < i;
                r++
              )
                n[r - 1] = arguments[r];
              switch (e) {
                case "send":
                  t._gaCommandSend.apply(t, n);
                  break;
                case "set":
                  t._gaCommandSet.apply(t, n);
                  break;
                default:
                  console.warn("Command doesn't exist: ".concat(e));
              }
            }),
            _(this, "ga", function () {
              for (
                var e = arguments.length, i = new Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              if ("string" === typeof i[0]) t._gaCommand.apply(t, i);
              else {
                var r = i[0];
                t._gtag(
                  "get",
                  t._currentMeasurementId,
                  "client_id",
                  function (e) {
                    t._isQueuing = !1;
                    var i = t._queueGtag;
                    for (
                      r({
                        get: function (i) {
                          return "clientId" === i
                            ? e
                            : "trackingId" === i
                            ? t._currentMeasurementId
                            : "apiVersion" === i
                            ? "1"
                            : void 0;
                        },
                      });
                      i.length;

                    ) {
                      var n = i.shift();
                      t._gtag.apply(t, d(n));
                    }
                  }
                ),
                  (t._isQueuing = !0);
              }
              return t.ga;
            }),
            _(this, "event", function (e, i) {
              if ("string" === typeof e)
                t._gtag("event", e, t._toGtagOptions(i));
              else {
                var n = e.action,
                  a = e.category,
                  o = e.label,
                  s = e.value,
                  l = e.nonInteraction,
                  c = e.transport;
                if (!a || !n)
                  return void console.warn(
                    "args.category AND args.action are required in event()"
                  );
                var u = {
                  hitType: "event",
                  eventCategory: (0, r.default)(a),
                  eventAction: (0, r.default)(n),
                };
                o && (u.eventLabel = (0, r.default)(o)),
                  "undefined" !== typeof s &&
                    ("number" !== typeof s
                      ? console.warn(
                          "Expected `args.value` arg to be a Number."
                        )
                      : (u.eventValue = s)),
                  "undefined" !== typeof l &&
                    ("boolean" !== typeof l
                      ? console.warn("`args.nonInteraction` must be a boolean.")
                      : (u.nonInteraction = l)),
                  "undefined" !== typeof c &&
                    ("string" !== typeof c
                      ? console.warn("`args.transport` must be a string.")
                      : (-1 === ["beacon", "xhr", "image"].indexOf(c) &&
                          console.warn(
                            "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"
                          ),
                        (u.transport = c))),
                  t._gaCommand("send", u);
              }
            }),
            _(this, "send", function (e) {
              t._gaCommand("send", e);
            }),
            this.reset();
        }
        var t, i, l;
        return (
          (t = e),
          (i = [
            {
              key: "gtag",
              value: function () {
                this._gtag.apply(this, arguments);
              },
            },
          ]),
          i && b(t.prototype, i),
          l && b(t, l),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      t.GA4 = v;
      var k = new v();
      t.default = k;
    },
    76161: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var n;
        "undefined" !== typeof window &&
          ("undefined" === typeof window.gtag &&
            ((window.dataLayer = window.dataLayer || []),
            (window.gtag = function () {
              window.dataLayer.push(arguments);
            })),
          (n = window).gtag.apply(n, t));
      };
      t.default = i;
    },
    49089: function (e, t, i) {
      "use strict";
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      t.ZP = void 0;
      var r = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" !== typeof e))
          return { default: e };
        var i = a(t);
        if (i && i.has(e)) return i.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, s) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(r, s, l)
              : (r[s] = e[s]);
          }
        (r.default = e), i && i.set(e, r);
        return r;
      })(i(41638));
      function a(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          i = new WeakMap();
        return (a = function (e) {
          return e ? i : t;
        })(e);
      }
      r.GA4;
      var o = r.default;
      t.ZP = o;
    },
    97847: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return S;
        },
      });
      var n = i(98661),
        r = function (e, t) {
          var i = "function" === typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var n,
            r,
            a = i.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (s) {
            r = { error: s };
          } finally {
            try {
              n && !n.done && (i = a.return) && i.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          return o;
        };
      var a = [
          "br",
          "col",
          "colgroup",
          "dl",
          "hr",
          "iframe",
          "img",
          "input",
          "link",
          "menuitem",
          "meta",
          "ol",
          "param",
          "select",
          "table",
          "tbody",
          "tfoot",
          "thead",
          "tr",
          "ul",
          "wbr",
        ],
        o = {
          "accept-charset": "acceptCharset",
          acceptcharset: "acceptCharset",
          accesskey: "accessKey",
          allowfullscreen: "allowFullScreen",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          charset: "charSet",
          class: "className",
          classid: "classID",
          classname: "className",
          colspan: "colSpan",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controlslist: "controlsList",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          datetime: "dateTime",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          enctype: "encType",
          for: "htmlFor",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          maxlength: "maxLength",
          mediagroup: "mediaGroup",
          minlength: "minLength",
          nomodule: "noModule",
          novalidate: "noValidate",
          playsinline: "playsInline",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rowspan: "rowSpan",
          spellcheck: "spellCheck",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          tabindex: "tabIndex",
          typemustmatch: "typeMustMatch",
          usemap: "useMap",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          diffuseconstant: "diffuseConstant",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          edgemode: "edgeMode",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          externalresourcesrequired: "externalResourcesRequired",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          numoctaves: "numOctaves",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          ychannelselector: "yChannelSelector",
          zoomandpan: "zoomAndPan",
          onblur: "onBlur",
          onchange: "onChange",
          onclick: "onClick",
          oncontextmenu: "onContextMenu",
          ondoubleclick: "onDoubleClick",
          ondrag: "onDrag",
          ondragend: "onDragEnd",
          ondragenter: "onDragEnter",
          ondragexit: "onDragExit",
          ondragleave: "onDragLeave",
          ondragover: "onDragOver",
          ondragstart: "onDragStart",
          ondrop: "onDrop",
          onerror: "onError",
          onfocus: "onFocus",
          oninput: "onInput",
          oninvalid: "onInvalid",
          onkeydown: "onKeyDown",
          onkeypress: "onKeyPress",
          onkeyup: "onKeyUp",
          onload: "onLoad",
          onmousedown: "onMouseDown",
          onmouseenter: "onMouseEnter",
          onmouseleave: "onMouseLeave",
          onmousemove: "onMouseMove",
          onmouseout: "onMouseOut",
          onmouseover: "onMouseOver",
          onmouseup: "onMouseUp",
          onscroll: "onScroll",
          onsubmit: "onSubmit",
          ontouchcancel: "onTouchCancel",
          ontouchend: "onTouchEnd",
          ontouchmove: "onTouchMove",
          ontouchstart: "onTouchStart",
          onwheel: "onWheel",
        },
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, i = 1, n = arguments.length; i < n; i++)
                  for (var r in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            s.apply(this, arguments)
          );
        },
        l = function (e, t) {
          var i = "function" === typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var n,
            r,
            a = i.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (s) {
            r = { error: s };
          } finally {
            try {
              n && !n.done && (i = a.return) && i.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          return o;
        },
        c = function (e, t, i) {
          if (i || 2 === arguments.length)
            for (var n, r = 0, a = t.length; r < a; r++)
              (!n && r in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, r)), (n[r] = t[r]));
          return e.concat(n || Array.prototype.slice.call(t));
        };
      function u(e, t) {
        var i = { key: t };
        if (e instanceof Element) {
          var n = e.getAttribute("class");
          n && (i.className = n),
            c([], l(e.attributes), !1).forEach(function (e) {
              switch (e.name) {
                case "class":
                  break;
                case "style":
                  i[e.name] = e.value.split(/ ?; ?/).reduce(function (e, t) {
                    var i = r(t.split(/ ?: ?/), 2),
                      n = i[0],
                      a = i[1];
                    return (
                      n &&
                        a &&
                        (e[
                          n.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase();
                          })
                        ] = Number.isNaN(Number(a)) ? a : Number(a)),
                      e
                    );
                  }, {});
                  break;
                case "allowfullscreen":
                case "allowpaymentrequest":
                case "async":
                case "autofocus":
                case "autoplay":
                case "checked":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "formnovalidate":
                case "hidden":
                case "ismap":
                case "itemscope":
                case "loop":
                case "multiple":
                case "muted":
                case "nomodule":
                case "novalidate":
                case "open":
                case "readonly":
                case "required":
                case "reversed":
                case "selected":
                case "typemustmatch":
                  i[o[e.name] || e.name] = !0;
                  break;
                default:
                  i[o[e.name] || e.name] = e.value;
              }
            });
        }
        return i;
      }
      function d(e, t) {
        var i;
        if ((void 0 === t && (t = {}), !e || !(e instanceof Node))) return null;
        var r,
          o = t.actions,
          p = void 0 === o ? [] : o,
          m = t.index,
          h = void 0 === m ? 0 : m,
          g = t.level,
          f = void 0 === g ? 0 : g,
          b = t.randomKey,
          _ = e,
          y = "".concat(f, "-").concat(h),
          v = [];
        if (
          (b &&
            0 === f &&
            (y = ""
              .concat(
                (function (e) {
                  void 0 === e && (e = 6);
                  for (
                    var t =
                        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      i = "",
                      n = e;
                    n > 0;
                    --n
                  )
                    i += t[Math.round(Math.random() * (t.length - 1))];
                  return i;
                })(),
                "-"
              )
              .concat(y)),
          Array.isArray(p) &&
            p.forEach(function (t) {
              t.condition(_, y, f) &&
                ("function" === typeof t.pre &&
                  ((_ = t.pre(_, y, f)) instanceof Node || (_ = e)),
                "function" === typeof t.post && v.push(t.post(_, y, f)));
            }),
          v.length)
        )
          return v;
        switch (_.nodeType) {
          case 1:
            return n.createElement(
              ((r = _.nodeName),
              /[a-z]+[A-Z]+[a-z]+/.test(r) ? r : r.toLowerCase()),
              u(_, y),
              (function (e, t, i) {
                var n = c([], l(e), !1)
                  .map(function (e, n) {
                    return d(e, s(s({}, i), { index: n, level: t + 1 }));
                  })
                  .filter(Boolean);
                return n.length ? n : null;
              })(_.childNodes, f, t)
            );
          case 3:
            var k =
              (null === (i = _.nodeValue) || void 0 === i
                ? void 0
                : i.toString()) || "";
            if (/^\s+$/.test(k) && !/[\u00A0\u202F]/.test(k)) return null;
            if (!_.parentNode) return k;
            var w = _.parentNode.nodeName.toLowerCase();
            return a.includes(w)
              ? (/\S/.test(k) &&
                  console.warn(
                    "A textNode is not allowed inside '"
                      .concat(w, "'. Your text \"")
                      .concat(k, '" will be ignored')
                  ),
                null)
              : k;
          default:
            return null;
        }
      }
      function p(e, t) {
        return (
          void 0 === t && (t = {}),
          "string" === typeof e
            ? (function (e, t) {
                if ((void 0 === t && (t = {}), !e || "string" !== typeof e))
                  return null;
                var i = t.nodeOnly,
                  n = void 0 !== i && i,
                  r = t.selector,
                  a = void 0 === r ? "body > *" : r,
                  o = t.type,
                  s = void 0 === o ? "text/html" : o;
                try {
                  var l = new DOMParser()
                    .parseFromString(e, s)
                    .querySelector(a);
                  if (!(l instanceof Node))
                    throw new TypeError("Error parsing input");
                  return n ? l : d(l, t);
                } catch (c) {}
                return null;
              })(e, t)
            : e instanceof Node
            ? d(e, t)
            : null
        );
      }
      var m = i(58875),
        h = {
          FAILED: "failed",
          LOADED: "loaded",
          LOADING: "loading",
          PENDING: "pending",
          READY: "ready",
          UNSUPPORTED: "unsupported",
        };
      function g() {
        return m.canUseDOM;
      }
      function f() {
        return (
          (function () {
            if (!document) return !1;
            var e = document.createElement("div");
            e.innerHTML = "<svg />";
            var t = e.firstChild;
            return !!t && "http://www.w3.org/2000/svg" === t.namespaceURI;
          })() &&
          "undefined" !== typeof window &&
          null !== window
        );
      }
      var b = (function () {
          var e = function (t, i) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }),
              e(t, i)
            );
          };
          return function (t, i) {
            if ("function" !== typeof i && null !== i)
              throw new TypeError(
                "Class extends value " +
                  String(i) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, i),
              (t.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
        _ = function () {
          return (
            (_ =
              Object.assign ||
              function (e) {
                for (var t, i = 1, n = arguments.length; i < n; i++)
                  for (var r in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            _.apply(this, arguments)
          );
        },
        y = function (e, t) {
          var i = "function" === typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var n,
            r,
            a = i.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (s) {
            r = { error: s };
          } finally {
            try {
              n && !n.done && (i = a.return) && i.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          return o;
        },
        v = function (e, t, i) {
          if (i || 2 === arguments.length)
            for (var n, r = 0, a = t.length; r < a; r++)
              (!n && r in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, r)), (n[r] = t[r]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        k = Object.create(null),
        w = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (
              Object.defineProperty(i, "isInitialized", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(i, "isActive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(i, "hash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "handleLoad", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  i.isActive &&
                    i.setState({ content: e, status: h.LOADED }, i.getElement);
                },
              }),
              Object.defineProperty(i, "handleError", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = i.props.onError,
                    n =
                      "Browser does not support SVG" === e.message
                        ? h.UNSUPPORTED
                        : h.FAILED;
                  i.isActive &&
                    i.setState({ status: n }, function () {
                      "function" === typeof t && t(e);
                    });
                },
              }),
              Object.defineProperty(i, "request", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = i.props,
                    t = e.cacheRequests,
                    n = e.fetchOptions,
                    r = e.src;
                  try {
                    return (
                      t && (k[r] = { content: "", status: h.LOADING }),
                      fetch(r, n)
                        .then(function (e) {
                          var t = e.headers.get("content-type"),
                            i = y((t || "").split(/ ?; ?/), 1)[0];
                          if (e.status > 299) throw new Error("Not found");
                          if (
                            !["image/svg+xml", "text/plain"].some(function (e) {
                              return i.includes(e);
                            })
                          )
                            throw new Error(
                              "Content type isn't valid: ".concat(i)
                            );
                          return e.text();
                        })
                        .then(function (e) {
                          var n = i.props.src;
                          if (r === n) {
                            if ((i.handleLoad(e), t)) {
                              var a = k[r];
                              a && ((a.content = e), (a.status = h.LOADED));
                            }
                          } else k[r].status === h.LOADING && delete k[r];
                        })
                        .catch(function (e) {
                          (i.handleError(e), t) && k[r] && delete k[r];
                        })
                    );
                  } catch (a) {
                    return i.handleError(new Error(a.message));
                  }
                },
              }),
              (i.state = {
                content: "",
                element: null,
                hasCache: !!t.cacheRequests && !!k[t.src],
                status: h.PENDING,
              }),
              (i.hash =
                t.uniqueHash ||
                (function (e) {
                  for (
                    var t,
                      i = "abcdefghijklmnopqrstuvwxyz",
                      n = ""
                        .concat(i)
                        .concat(i.toUpperCase())
                        .concat("1234567890"),
                      r = "",
                      a = 0;
                    a < e;
                    a++
                  )
                    r += (t = n)[Math.floor(Math.random() * t.length)];
                  return r;
                })(8)),
              i
            );
          }
          return (
            b(t, e),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (((this.isActive = !0), g() && !this.isInitialized)) {
                  var e = this.state.status,
                    t = this.props.src;
                  try {
                    if (e === h.PENDING) {
                      if (!f()) throw new Error("Browser does not support SVG");
                      if (!t) throw new Error("Missing src");
                      this.load();
                    }
                  } catch (i) {
                    this.handleError(i);
                  }
                  this.isInitialized = !0;
                }
              },
            }),
            Object.defineProperty(t.prototype, "componentDidUpdate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (g()) {
                  var i = this.state,
                    n = i.hasCache,
                    r = i.status,
                    a = this.props,
                    o = a.onLoad,
                    s = a.src;
                  if (
                    (t.status !== h.READY && r === h.READY && o && o(s, n),
                    e.src !== s)
                  ) {
                    if (!s)
                      return void this.handleError(new Error("Missing src"));
                    this.load();
                  }
                }
              },
            }),
            Object.defineProperty(t.prototype, "componentWillUnmount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.isActive = !1;
              },
            }),
            Object.defineProperty(t.prototype, "getNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.description,
                  i = e.title;
                try {
                  var n = p(this.processSVG(), { nodeOnly: !0 });
                  if (!n || !(n instanceof SVGSVGElement))
                    throw new Error("Could not convert the src to a DOM Node");
                  var r = this.updateSVGAttributes(n);
                  if (t) {
                    var a = r.querySelector("desc");
                    a && a.parentNode && a.parentNode.removeChild(a);
                    var o = document.createElement("desc");
                    (o.innerHTML = t), r.prepend(o);
                  }
                  if (i) {
                    var s = r.querySelector("title");
                    s && s.parentNode && s.parentNode.removeChild(s);
                    var l = document.createElement("title");
                    (l.innerHTML = i), r.prepend(l);
                  }
                  return r;
                } catch (c) {
                  return this.handleError(c);
                }
              },
            }),
            Object.defineProperty(t.prototype, "getElement", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                try {
                  var e = p(this.getNode());
                  if (!e || !n.isValidElement(e))
                    throw new Error(
                      "Could not convert the src to a React element"
                    );
                  this.setState({ element: e, status: h.READY });
                } catch (t) {
                  this.handleError(new Error(t.message));
                }
              },
            }),
            Object.defineProperty(t.prototype, "load", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                this.isActive &&
                  this.setState(
                    { content: "", element: null, status: h.LOADING },
                    function () {
                      var t = e.props,
                        i = t.cacheRequests,
                        n = t.src,
                        r = i && k[n];
                      if (r && r.status === h.LOADED) e.handleLoad(r.content);
                      else {
                        var a,
                          o = n.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
                        o
                          ? (a = o[1]
                              ? window.atob(o[2])
                              : decodeURIComponent(o[2]))
                          : n.includes("<svg") && (a = n),
                          a ? e.handleLoad(a) : e.request();
                      }
                    }
                  );
              },
            }),
            Object.defineProperty(t.prototype, "updateSVGAttributes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  i = this.props,
                  n = i.baseURL,
                  r = void 0 === n ? "" : n,
                  a = i.uniquifyIDs,
                  o = [
                    "id",
                    "href",
                    "xlink:href",
                    "xlink:role",
                    "xlink:arcrole",
                  ],
                  s = ["href", "xlink:href"];
                return a
                  ? (v([], y(e.children), !1).map(function (e) {
                      if (e.attributes && e.attributes.length) {
                        var i = Object.values(e.attributes).map(function (e) {
                          var i = e,
                            n = e.value.match(/url\((.*?)\)/);
                          return (
                            n &&
                              n[1] &&
                              (i.value = e.value.replace(
                                n[0],
                                "url("
                                  .concat(r)
                                  .concat(n[1], "__")
                                  .concat(t.hash, ")")
                              )),
                            i
                          );
                        });
                        o.forEach(function (e) {
                          var n,
                            r,
                            a = i.find(function (t) {
                              return t.name === e;
                            });
                          a &&
                            ((n = e),
                            (r = a.value),
                            !s.includes(n) || !r || r.includes("#")) &&
                            (a.value = "".concat(a.value, "__").concat(t.hash));
                        });
                      }
                      return e.children.length ? t.updateSVGAttributes(e) : e;
                    }),
                    e)
                  : e;
              },
            }),
            Object.defineProperty(t.prototype, "processSVG", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state.content,
                  t = this.props.preProcessor;
                return t ? t(e) : e;
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state,
                  t = e.element,
                  i = e.status,
                  r = this.props,
                  a = r.children,
                  o = void 0 === a ? null : a,
                  s = r.innerRef,
                  l = r.loader,
                  c = void 0 === l ? null : l,
                  u = (function (e) {
                    for (var t = [], i = 1; i < arguments.length; i++)
                      t[i - 1] = arguments[i];
                    var n = {};
                    for (var r in e)
                      ({}).hasOwnProperty.call(e, r) &&
                        (t.includes(r) || (n[r] = e[r]));
                    return n;
                  })(
                    this.props,
                    "baseURL",
                    "cacheRequests",
                    "children",
                    "description",
                    "fetchOptions",
                    "innerRef",
                    "loader",
                    "onError",
                    "onLoad",
                    "preProcessor",
                    "src",
                    "title",
                    "uniqueHash",
                    "uniquifyIDs"
                  );
                return g()
                  ? t
                    ? n.cloneElement(t, _({ ref: s }, u))
                    : [h.UNSUPPORTED, h.FAILED].includes(i)
                    ? o
                    : c
                  : c;
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { cacheRequests: !0, uniquifyIDs: !1 },
            }),
            t
          );
        })(n.PureComponent),
        S = w;
    },
    69921: function (e, t) {
      "use strict";
      var i = "function" === typeof Symbol && Symbol.for,
        n = i ? Symbol.for("react.element") : 60103,
        r = i ? Symbol.for("react.portal") : 60106,
        a = i ? Symbol.for("react.fragment") : 60107,
        o = i ? Symbol.for("react.strict_mode") : 60108,
        s = i ? Symbol.for("react.profiler") : 60114,
        l = i ? Symbol.for("react.provider") : 60109,
        c = i ? Symbol.for("react.context") : 60110,
        u = i ? Symbol.for("react.async_mode") : 60111,
        d = i ? Symbol.for("react.concurrent_mode") : 60111,
        p = i ? Symbol.for("react.forward_ref") : 60112,
        m = i ? Symbol.for("react.suspense") : 60113,
        h = i ? Symbol.for("react.suspense_list") : 60120,
        g = i ? Symbol.for("react.memo") : 60115,
        f = i ? Symbol.for("react.lazy") : 60116,
        b = i ? Symbol.for("react.block") : 60121,
        _ = i ? Symbol.for("react.fundamental") : 60117,
        y = i ? Symbol.for("react.responder") : 60118,
        v = i ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case d:
                case a:
                case s:
                case o:
                case m:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case p:
                    case f:
                    case g:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      function w(e) {
        return k(e) === d;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = l),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = a),
        (t.Lazy = f),
        (t.Memo = g),
        (t.Portal = r),
        (t.Profiler = s),
        (t.StrictMode = o),
        (t.Suspense = m),
        (t.isAsyncMode = function (e) {
          return w(e) || k(e) === u;
        }),
        (t.isConcurrentMode = w),
        (t.isContextConsumer = function (e) {
          return k(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === p;
        }),
        (t.isFragment = function (e) {
          return k(e) === a;
        }),
        (t.isLazy = function (e) {
          return k(e) === f;
        }),
        (t.isMemo = function (e) {
          return k(e) === g;
        }),
        (t.isPortal = function (e) {
          return k(e) === r;
        }),
        (t.isProfiler = function (e) {
          return k(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === o;
        }),
        (t.isSuspense = function (e) {
          return k(e) === m;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === a ||
            e === d ||
            e === s ||
            e === o ||
            e === m ||
            e === h ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === f ||
                e.$$typeof === g ||
                e.$$typeof === l ||
                e.$$typeof === c ||
                e.$$typeof === p ||
                e.$$typeof === _ ||
                e.$$typeof === y ||
                e.$$typeof === v ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = k);
    },
    59864: function (e, t, i) {
      "use strict";
      e.exports = i(69921);
    },
    81350: function (e, t, i) {
      "use strict";
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      i.d(t, {
        ZP: function () {
          return Ki;
        },
      });
      var r = i(98661);
      var a = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var i;
              (i =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, i),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var i = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  i.insertRule(e, i.cssRules.length);
                } catch (n) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        o = Math.abs,
        s = String.fromCharCode,
        l = Object.assign;
      function c(e) {
        return e.trim();
      }
      function u(e, t, i) {
        return e.replace(t, i);
      }
      function d(e, t) {
        return e.indexOf(t);
      }
      function p(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function m(e, t, i) {
        return e.slice(t, i);
      }
      function h(e) {
        return e.length;
      }
      function g(e) {
        return e.length;
      }
      function f(e, t) {
        return t.push(e), e;
      }
      var b = 1,
        _ = 1,
        y = 0,
        v = 0,
        k = 0,
        w = "";
      function S(e, t, i, n, r, a, o) {
        return {
          value: e,
          root: t,
          parent: i,
          type: n,
          props: r,
          children: a,
          line: b,
          column: _,
          length: o,
          return: "",
        };
      }
      function C(e, t) {
        return l(
          S("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function R() {
        return (k = v > 0 ? p(w, --v) : 0), _--, 10 === k && ((_ = 1), b--), k;
      }
      function A() {
        return (k = v < y ? p(w, v++) : 0), _++, 10 === k && ((_ = 1), b++), k;
      }
      function P() {
        return p(w, v);
      }
      function O() {
        return v;
      }
      function T(e, t) {
        return m(w, e, t);
      }
      function x(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function I(e) {
        return (b = _ = 1), (y = h((w = e))), (v = 0), [];
      }
      function E(e) {
        return (w = ""), e;
      }
      function M(e) {
        return c(T(v - 1, B(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function D(e) {
        for (; (k = P()) && k < 33; ) A();
        return x(e) > 2 || x(k) > 3 ? "" : " ";
      }
      function N(e, t) {
        for (
          ;
          --t &&
          A() &&
          !(k < 48 || k > 102 || (k > 57 && k < 65) || (k > 70 && k < 97));

        );
        return T(e, O() + (t < 6 && 32 == P() && 32 == A()));
      }
      function B(e) {
        for (; A(); )
          switch (k) {
            case e:
              return v;
            case 34:
            case 39:
              34 !== e && 39 !== e && B(k);
              break;
            case 40:
              41 === e && B(e);
              break;
            case 92:
              A();
          }
        return v;
      }
      function L(e, t) {
        for (; A() && e + k !== 57 && (e + k !== 84 || 47 !== P()); );
        return "/*" + T(t, v - 1) + "*" + s(47 === e ? e : A());
      }
      function z(e) {
        for (; !x(P()); ) A();
        return T(e, v);
      }
      var j = "-ms-",
        U = "-moz-",
        F = "-webkit-",
        W = "comm",
        q = "rule",
        V = "decl",
        H = "@keyframes";
      function G(e, t) {
        for (var i = "", n = g(e), r = 0; r < n; r++)
          i += t(e[r], r, e, t) || "";
        return i;
      }
      function K(e, t, i, n) {
        switch (e.type) {
          case "@import":
          case V:
            return (e.return = e.return || e.value);
          case W:
            return "";
          case H:
            return (e.return = e.value + "{" + G(e.children, n) + "}");
          case q:
            e.value = e.props.join(",");
        }
        return h((i = G(e.children, n)))
          ? (e.return = e.value + "{" + i + "}")
          : "";
      }
      function Z(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ p(e, 0)) << 2) ^ p(e, 1)) << 2) ^ p(e, 2)) <<
                2) ^
              p(e, 3)
            );
          })(e, t)
        ) {
          case 5103:
            return F + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return F + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return F + e + U + e + j + e + e;
          case 6828:
          case 4268:
            return F + e + j + e + e;
          case 6165:
            return F + e + j + "flex-" + e + e;
          case 5187:
            return (
              F +
              e +
              u(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              e
            );
          case 5443:
            return F + e + j + "flex-item-" + u(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              F +
              e +
              j +
              "flex-line-pack" +
              u(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return F + e + j + u(e, "shrink", "negative") + e;
          case 5292:
            return F + e + j + u(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              F +
              "box-" +
              u(e, "-grow", "") +
              F +
              e +
              j +
              u(e, "grow", "positive") +
              e
            );
          case 4554:
            return F + u(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return (
              u(
                u(u(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return u(e, /(image-set\([^]*)/, F + "$1$`$1");
          case 4968:
            return (
              u(
                u(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              F +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return u(e, /(.+)-inline(.+)/, F + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (h(e) - 1 - t > 6)
              switch (p(e, t + 1)) {
                case 109:
                  if (45 !== p(e, t + 4)) break;
                case 102:
                  return (
                    u(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1" +
                        U +
                        (108 == p(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~d(e, "stretch")
                    ? Z(u(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== p(e, t + 1)) break;
          case 6444:
            switch (p(e, h(e) - 3 - (~d(e, "!important") && 10))) {
              case 107:
                return u(e, ":", ":" + F) + e;
              case 101:
                return (
                  u(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      F +
                      (45 === p(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      F +
                      "$2$3$1" +
                      j +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (p(e, t + 11)) {
              case 114:
                return F + e + j + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return F + e + j + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return F + e + j + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return F + e + j + e + e;
        }
        return e;
      }
      function Y(e) {
        return E(X("", null, null, null, [""], (e = I(e)), 0, [0], e));
      }
      function X(e, t, i, n, r, a, o, l, c) {
        for (
          var p = 0,
            m = 0,
            g = o,
            b = 0,
            _ = 0,
            y = 0,
            v = 1,
            k = 1,
            w = 1,
            S = 0,
            C = "",
            T = r,
            x = a,
            I = n,
            E = C;
          k;

        )
          switch (((y = S), (S = A()))) {
            case 40:
              if (108 != y && 58 == E.charCodeAt(g - 1)) {
                -1 != d((E += u(M(S), "&", "&\f")), "&\f") && (w = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              E += M(S);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              E += D(y);
              break;
            case 92:
              E += N(O() - 1, 7);
              continue;
            case 47:
              switch (P()) {
                case 42:
                case 47:
                  f($(L(A(), O()), t, i), c);
                  break;
                default:
                  E += "/";
              }
              break;
            case 123 * v:
              l[p++] = h(E) * w;
            case 125 * v:
            case 59:
            case 0:
              switch (S) {
                case 0:
                case 125:
                  k = 0;
                case 59 + m:
                  _ > 0 &&
                    h(E) - g &&
                    f(
                      _ > 32
                        ? J(E + ";", n, i, g - 1)
                        : J(u(E, " ", "") + ";", n, i, g - 2),
                      c
                    );
                  break;
                case 59:
                  E += ";";
                default:
                  if (
                    (f(
                      (I = Q(E, t, i, p, m, r, l, C, (T = []), (x = []), g)),
                      a
                    ),
                    123 === S)
                  )
                    if (0 === m) X(E, t, I, I, T, a, g, l, x);
                    else
                      switch (b) {
                        case 100:
                        case 109:
                        case 115:
                          X(
                            e,
                            I,
                            I,
                            n &&
                              f(Q(e, I, I, 0, 0, r, l, C, r, (T = []), g), x),
                            r,
                            x,
                            g,
                            l,
                            n ? T : x
                          );
                          break;
                        default:
                          X(E, I, I, I, [""], x, 0, l, x);
                      }
              }
              (p = m = _ = 0), (v = w = 1), (C = E = ""), (g = o);
              break;
            case 58:
              (g = 1 + h(E)), (_ = y);
            default:
              if (v < 1)
                if (123 == S) --v;
                else if (125 == S && 0 == v++ && 125 == R()) continue;
              switch (((E += s(S)), S * v)) {
                case 38:
                  w = m > 0 ? 1 : ((E += "\f"), -1);
                  break;
                case 44:
                  (l[p++] = (h(E) - 1) * w), (w = 1);
                  break;
                case 64:
                  45 === P() && (E += M(A())),
                    (b = P()),
                    (m = g = h((C = E += z(O())))),
                    S++;
                  break;
                case 45:
                  45 === y && 2 == h(E) && (v = 0);
              }
          }
        return a;
      }
      function Q(e, t, i, n, r, a, s, l, d, p, h) {
        for (
          var f = r - 1, b = 0 === r ? a : [""], _ = g(b), y = 0, v = 0, k = 0;
          y < n;
          ++y
        )
          for (
            var w = 0, C = m(e, f + 1, (f = o((v = s[y])))), R = e;
            w < _;
            ++w
          )
            (R = c(v > 0 ? b[w] + " " + C : u(C, /&\f/g, b[w]))) &&
              (d[k++] = R);
        return S(e, t, i, 0 === r ? q : l, d, p, h);
      }
      function $(e, t, i) {
        return S(e, t, i, W, s(k), m(e, 2, -2), 0);
      }
      function J(e, t, i, n) {
        return S(e, t, i, V, m(e, 0, n), m(e, n + 1, -1), n);
      }
      var ee = function (e, t, i) {
          for (
            var n = 0, r = 0;
            (n = r), (r = P()), 38 === n && 12 === r && (t[i] = 1), !x(r);

          )
            A();
          return T(e, v);
        },
        te = function (e, t) {
          return E(
            (function (e, t) {
              var i = -1,
                n = 44;
              do {
                switch (x(n)) {
                  case 0:
                    38 === n && 12 === P() && (t[i] = 1),
                      (e[i] += ee(v - 1, t, i));
                    break;
                  case 2:
                    e[i] += M(n);
                    break;
                  case 4:
                    if (44 === n) {
                      (e[++i] = 58 === P() ? "&\f" : ""), (t[i] = e[i].length);
                      break;
                    }
                  default:
                    e[i] += s(n);
                }
              } while ((n = A()));
              return e;
            })(I(e), t)
          );
        },
        ie = new WeakMap(),
        ne = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                i = e.parent,
                n = e.column === i.column && e.line === i.line;
              "rule" !== i.type;

            )
              if (!(i = i.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || ie.get(i)) &&
              !n
            ) {
              ie.set(e, !0);
              for (
                var r = [], a = te(t, r), o = i.props, s = 0, l = 0;
                s < a.length;
                s++
              )
                for (var c = 0; c < o.length; c++, l++)
                  e.props[l] = r[s]
                    ? a[s].replace(/&\f/g, o[c])
                    : o[c] + " " + a[s];
            }
          }
        },
        re = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        ae = [
          function (e, t, i, n) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case V:
                  e.return = Z(e.value, e.length);
                  break;
                case H:
                  return G([C(e, { value: u(e.value, "@", "@" + F) })], n);
                case q:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return G(
                            [
                              C(e, {
                                props: [u(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            n
                          );
                        case "::placeholder":
                          return G(
                            [
                              C(e, {
                                props: [
                                  u(t, /:(plac\w+)/, ":-webkit-input-$1"),
                                ],
                              }),
                              C(e, { props: [u(t, /:(plac\w+)/, ":-moz-$1")] }),
                              C(e, {
                                props: [u(t, /:(plac\w+)/, j + "input-$1")],
                              }),
                            ],
                            n
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        oe = function (e) {
          var t = e.key;
          if ("css" === t) {
            var i = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(i, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var n = e.stylisPlugins || ae;
          var r,
            o,
            s = {},
            l = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), i = 1;
                  i < t.length;
                  i++
                )
                  s[t[i]] = !0;
                l.push(e);
              }
            );
          var c,
            u,
            d = [
              K,
              ((u = function (e) {
                c.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && u(e));
              }),
            ],
            p = (function (e) {
              var t = g(e);
              return function (i, n, r, a) {
                for (var o = "", s = 0; s < t; s++) o += e[s](i, n, r, a) || "";
                return o;
              };
            })([ne, re].concat(n, d));
          o = function (e, t, i, n) {
            (c = i),
              G(Y(e ? e + "{" + t.styles + "}" : t.styles), p),
              n && (m.inserted[t.name] = !0);
          };
          var m = {
            key: t,
            sheet: new a({
              key: t,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: o,
          };
          return m.sheet.hydrate(l), m;
        };
      function se(e, t, i) {
        var n = "";
        return (
          i.split(" ").forEach(function (i) {
            void 0 !== e[i] ? t.push(e[i] + ";") : (n += i + " ");
          }),
          n
        );
      }
      var le = function (e, t, i) {
          var n = e.key + "-" + t.name;
          !1 === i &&
            void 0 === e.registered[n] &&
            (e.registered[n] = t.styles);
        },
        ce = function (e, t, i) {
          le(e, t, i);
          var n = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var r = t;
            do {
              e.insert(t === r ? "." + n : "", r, e.sheet, !0);
              r = r.next;
            } while (void 0 !== r);
          }
        };
      var ue = function (e) {
          for (var t, i = 0, n = 0, r = e.length; r >= 4; ++n, r -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (i =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & i) + ((59797 * (i >>> 16)) << 16)));
          switch (r) {
            case 3:
              i ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              i ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              i =
                1540483477 * (65535 & (i ^= 255 & e.charCodeAt(n))) +
                ((59797 * (i >>> 16)) << 16);
          }
          return (
            ((i =
              1540483477 * (65535 & (i ^= i >>> 13)) +
              ((59797 * (i >>> 16)) << 16)) ^
              (i >>> 15)) >>>
            0
          ).toString(36);
        },
        de = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var pe = /[A-Z]|^ms/g,
        me = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        he = function (e) {
          return 45 === e.charCodeAt(1);
        },
        ge = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        fe = (function (e) {
          var t = Object.create(null);
          return function (i) {
            return void 0 === t[i] && (t[i] = e(i)), t[i];
          };
        })(function (e) {
          return he(e) ? e : e.replace(pe, "-$&").toLowerCase();
        }),
        be = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(me, function (e, t, i) {
                  return (ye = { name: t, styles: i, next: ye }), t;
                });
          }
          return 1 === de[e] || he(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function _e(e, t, i) {
        if (null == i) return "";
        if (void 0 !== i.__emotion_styles) return i;
        switch (typeof i) {
          case "boolean":
            return "";
          case "object":
            if (1 === i.anim)
              return (
                (ye = { name: i.name, styles: i.styles, next: ye }), i.name
              );
            if (void 0 !== i.styles) {
              var n = i.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (ye = { name: n.name, styles: n.styles, next: ye }),
                    (n = n.next);
              return i.styles + ";";
            }
            return (function (e, t, i) {
              var n = "";
              if (Array.isArray(i))
                for (var r = 0; r < i.length; r++) n += _e(e, t, i[r]) + ";";
              else
                for (var a in i) {
                  var o = i[a];
                  if ("object" !== typeof o)
                    null != t && void 0 !== t[o]
                      ? (n += a + "{" + t[o] + "}")
                      : ge(o) && (n += fe(a) + ":" + be(a, o) + ";");
                  else if (
                    !Array.isArray(o) ||
                    "string" !== typeof o[0] ||
                    (null != t && void 0 !== t[o[0]])
                  ) {
                    var s = _e(e, t, o);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        n += fe(a) + ":" + s + ";";
                        break;
                      default:
                        n += a + "{" + s + "}";
                    }
                  } else
                    for (var l = 0; l < o.length; l++)
                      ge(o[l]) && (n += fe(a) + ":" + be(a, o[l]) + ";");
                }
              return n;
            })(e, t, i);
          case "function":
            if (void 0 !== e) {
              var r = ye,
                a = i(e);
              return (ye = r), _e(e, t, a);
            }
        }
        if (null == t) return i;
        var o = t[i];
        return void 0 !== o ? o : i;
      }
      var ye,
        ve = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var ke = function (e, t, i) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var n = !0,
            r = "";
          ye = void 0;
          var a = e[0];
          null == a || void 0 === a.raw
            ? ((n = !1), (r += _e(i, t, a)))
            : (r += a[0]);
          for (var o = 1; o < e.length; o++)
            (r += _e(i, t, e[o])), n && (r += a[o]);
          ve.lastIndex = 0;
          for (var s, l = ""; null !== (s = ve.exec(r)); ) l += "-" + s[1];
          return { name: ue(r) + l, styles: r, next: ye };
        },
        we = {}.hasOwnProperty,
        Se = (0, r.createContext)(
          "undefined" !== typeof HTMLElement ? oe({ key: "css" }) : null
        );
      var Ce = Se.Provider,
        Re = function (e) {
          return (0, r.forwardRef)(function (t, i) {
            var n = (0, r.useContext)(Se);
            return e(t, n, i);
          });
        },
        Ae = (0, r.createContext)({});
      var Pe = r.useInsertionEffect
        ? r.useInsertionEffect
        : function (e) {
            e();
          };
      function Oe(e) {
        Pe(e);
      }
      var Te = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        xe = function (e, t) {
          var i = {};
          for (var n in t) we.call(t, n) && (i[n] = t[n]);
          return (i[Te] = e), i;
        },
        Ie = function (e) {
          var t = e.cache,
            i = e.serialized,
            n = e.isStringTag;
          le(t, i, n);
          Oe(function () {
            return ce(t, i, n);
          });
          return null;
        },
        Ee = Re(function (e, t, i) {
          var n = e.css;
          "string" === typeof n &&
            void 0 !== t.registered[n] &&
            (n = t.registered[n]);
          var a = e[Te],
            o = [n],
            s = "";
          "string" === typeof e.className
            ? (s = se(t.registered, o, e.className))
            : null != e.className && (s = e.className + " ");
          var l = ke(o, void 0, (0, r.useContext)(Ae));
          s += t.key + "-" + l.name;
          var c = {};
          for (var u in e)
            we.call(e, u) && "css" !== u && u !== Te && (c[u] = e[u]);
          return (
            (c.ref = i),
            (c.className = s),
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(Ie, {
                cache: t,
                serialized: l,
                isStringTag: "string" === typeof a,
              }),
              (0, r.createElement)(a, c)
            )
          );
        });
      i(8679);
      var Me = function (e, t) {
        var i = arguments;
        if (null == t || !we.call(t, "css"))
          return r.createElement.apply(void 0, i);
        var n = i.length,
          a = new Array(n);
        (a[0] = Ee), (a[1] = xe(e, t));
        for (var o = 2; o < n; o++) a[o] = i[o];
        return r.createElement.apply(null, a);
      };
      r.useInsertionEffect ? r.useInsertionEffect : r.useLayoutEffect;
      function De() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return ke(t);
      }
      var Ne = function e(t) {
        for (var i = t.length, n = 0, r = ""; n < i; n++) {
          var a = t[n];
          if (null != a) {
            var o = void 0;
            switch (typeof a) {
              case "boolean":
                break;
              case "object":
                if (Array.isArray(a)) o = e(a);
                else
                  for (var s in ((o = ""), a))
                    a[s] && s && (o && (o += " "), (o += s));
                break;
              default:
                o = a;
            }
            o && (r && (r += " "), (r += o));
          }
        }
        return r;
      };
      function Be(e, t, i) {
        var n = [],
          r = se(e, n, i);
        return n.length < 2 ? i : r + t(n);
      }
      var Le = function (e) {
          var t = e.cache,
            i = e.serializedArr;
          Oe(function () {
            for (var e = 0; e < i.length; e++) ce(t, i[e], !1);
          });
          return null;
        },
        ze = Re(function (e, t) {
          var i = [],
            n = function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              var a = ke(n, t.registered);
              return i.push(a), le(t, a, !1), t.key + "-" + a.name;
            },
            a = {
              css: n,
              cx: function () {
                for (
                  var e = arguments.length, i = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  i[r] = arguments[r];
                return Be(t.registered, n, Ne(i));
              },
              theme: (0, r.useContext)(Ae),
            },
            o = e.children(a);
          return (
            !0,
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(Le, { cache: t, serializedArr: i }),
              o
            )
          );
        });
      function je(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      function Ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function Fe(e, t) {
        if (e) {
          if ("string" === typeof e) return Ue(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(e)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? Ue(e, t)
              : void 0
          );
        }
      }
      function We(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                r,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (r = l);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          Fe(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function qe(e) {
        return (
          (qe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          qe(e)
        );
      }
      function Ve(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function He(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Ge(e, t, i) {
        return (
          t && He(e.prototype, t),
          i && He(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Ke(e, t) {
        return (
          (Ke =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          Ke(e, t)
        );
      }
      function Ze(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && Ke(e, t);
      }
      function Ye(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function Xe(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function Qe(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qe(Object(i), !0).forEach(function (t) {
                Xe(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Qe(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function Je(e) {
        return (
          (Je = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Je(e)
        );
      }
      function et(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function tt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            n = Je(e);
          if (t) {
            var r = Je(this).constructor;
            i = Reflect.construct(n, arguments, r);
          } else i = n.apply(this, arguments);
          return et(this, i);
        };
      }
      var it = [
          "className",
          "clearValue",
          "cx",
          "getStyles",
          "getValue",
          "hasValue",
          "isMulti",
          "isRtl",
          "options",
          "selectOption",
          "selectProps",
          "setValue",
          "theme",
        ],
        nt = function () {};
      function rt(e, t) {
        return t ? ("-" === t[0] ? e + t : e + "__" + t) : e;
      }
      function at(e, t, i) {
        var n = [i];
        if (t && e)
          for (var r in t)
            t.hasOwnProperty(r) && t[r] && n.push("".concat(rt(e, r)));
        return n
          .filter(function (e) {
            return e;
          })
          .map(function (e) {
            return String(e).trim();
          })
          .join(" ");
      }
      var ot = function (e) {
          return (
            (t = e),
            Array.isArray(t)
              ? e.filter(Boolean)
              : "object" === qe(e) && null !== e
              ? [e]
              : []
          );
          var t;
        },
        st = function (e) {
          return (
            e.className,
            e.clearValue,
            e.cx,
            e.getStyles,
            e.getValue,
            e.hasValue,
            e.isMulti,
            e.isRtl,
            e.options,
            e.selectOption,
            e.selectProps,
            e.setValue,
            e.theme,
            $e({}, je(e, it))
          );
        };
      function lt(e) {
        return (
          [document.documentElement, document.body, window].indexOf(e) > -1
        );
      }
      function ct(e) {
        return lt(e) ? window.pageYOffset : e.scrollTop;
      }
      function ut(e, t) {
        lt(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
      }
      function dt(e, t, i, n) {
        return i * ((e = e / n - 1) * e * e + 1) + t;
      }
      function pt(e, t) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 200,
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nt,
          r = ct(e),
          a = t - r,
          o = 10,
          s = 0;
        function l() {
          var t = dt((s += o), r, a, i);
          ut(e, t), s < i ? window.requestAnimationFrame(l) : n(e);
        }
        l();
      }
      function mt() {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      }
      var ht = !1,
        gt = {
          get passive() {
            return (ht = !0);
          },
        },
        ft = "undefined" !== typeof window ? window : {};
      ft.addEventListener &&
        ft.removeEventListener &&
        (ft.addEventListener("p", nt, gt), ft.removeEventListener("p", nt, !1));
      var bt = ht;
      function _t(e) {
        return null != e;
      }
      function yt(e, t, i) {
        return e ? t : i;
      }
      function vt(e) {
        var t = e.maxHeight,
          i = e.menuEl,
          n = e.minHeight,
          r = e.placement,
          a = e.shouldScroll,
          o = e.isFixedPosition,
          s = e.theme.spacing,
          l = (function (e) {
            var t = getComputedStyle(e),
              i = "absolute" === t.position,
              n = /(auto|scroll)/;
            if ("fixed" === t.position) return document.documentElement;
            for (var r = e; (r = r.parentElement); )
              if (
                ((t = getComputedStyle(r)),
                (!i || "static" !== t.position) &&
                  n.test(t.overflow + t.overflowY + t.overflowX))
              )
                return r;
            return document.documentElement;
          })(i),
          c = { placement: "bottom", maxHeight: t };
        if (!i || !i.offsetParent) return c;
        var u = l.getBoundingClientRect().height,
          d = i.getBoundingClientRect(),
          p = d.bottom,
          m = d.height,
          h = d.top,
          g = i.offsetParent.getBoundingClientRect().top,
          f = window.innerHeight,
          b = ct(l),
          _ = parseInt(getComputedStyle(i).marginBottom, 10),
          y = parseInt(getComputedStyle(i).marginTop, 10),
          v = g - y,
          k = f - h,
          w = v + b,
          S = u - b - h,
          C = p - f + b + _,
          R = b + h - y,
          A = 160;
        switch (r) {
          case "auto":
          case "bottom":
            if (k >= m) return { placement: "bottom", maxHeight: t };
            if (S >= m && !o)
              return a && pt(l, C, A), { placement: "bottom", maxHeight: t };
            if ((!o && S >= n) || (o && k >= n))
              return (
                a && pt(l, C, A),
                { placement: "bottom", maxHeight: o ? k - _ : S - _ }
              );
            if ("auto" === r || o) {
              var P = t,
                O = o ? v : w;
              return (
                O >= n && (P = Math.min(O - _ - s.controlHeight, t)),
                { placement: "top", maxHeight: P }
              );
            }
            if ("bottom" === r)
              return a && ut(l, C), { placement: "bottom", maxHeight: t };
            break;
          case "top":
            if (v >= m) return { placement: "top", maxHeight: t };
            if (w >= m && !o)
              return a && pt(l, R, A), { placement: "top", maxHeight: t };
            if ((!o && w >= n) || (o && v >= n)) {
              var T = t;
              return (
                ((!o && w >= n) || (o && v >= n)) && (T = o ? v - y : w - y),
                a && pt(l, R, A),
                { placement: "top", maxHeight: T }
              );
            }
            return { placement: "bottom", maxHeight: t };
          default:
            throw new Error('Invalid placement provided "'.concat(r, '".'));
        }
        return c;
      }
      var kt = function (e) {
          return "auto" === e ? "bottom" : e;
        },
        wt = (0, r.createContext)({ getPortalPlacement: null }),
        St = (function (e) {
          Ze(i, e);
          var t = tt(i);
          function i() {
            var e;
            Ve(this, i);
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                maxHeight: e.props.maxMenuHeight,
                placement: null,
              }),
              (e.context = void 0),
              (e.getPlacement = function (t) {
                var i = e.props,
                  n = i.minMenuHeight,
                  r = i.maxMenuHeight,
                  a = i.menuPlacement,
                  o = i.menuPosition,
                  s = i.menuShouldScrollIntoView,
                  l = i.theme;
                if (t) {
                  var c = "fixed" === o,
                    u = vt({
                      maxHeight: r,
                      menuEl: t,
                      minHeight: n,
                      placement: a,
                      shouldScroll: s && !c,
                      isFixedPosition: c,
                      theme: l,
                    }),
                    d = e.context.getPortalPlacement;
                  d && d(u), e.setState(u);
                }
              }),
              (e.getUpdatedProps = function () {
                var t = e.props.menuPlacement,
                  i = e.state.placement || kt(t);
                return $e(
                  $e({}, e.props),
                  {},
                  { placement: i, maxHeight: e.state.maxHeight }
                );
              }),
              e
            );
          }
          return (
            Ge(i, [
              {
                key: "render",
                value: function () {
                  return (0, this.props.children)({
                    ref: this.getPlacement,
                    placerProps: this.getUpdatedProps(),
                  });
                },
              },
            ]),
            i
          );
        })(r.Component);
      St.contextType = wt;
      var Ct = function (e) {
          var t = e.theme,
            i = t.spacing.baseUnit;
          return {
            color: t.colors.neutral40,
            padding: "".concat(2 * i, "px ").concat(3 * i, "px"),
            textAlign: "center",
          };
        },
        Rt = Ct,
        At = Ct,
        Pt = function (e) {
          var t = e.children,
            i = e.className,
            r = e.cx,
            a = e.getStyles,
            o = e.innerProps;
          return Me(
            "div",
            n(
              {
                css: a("noOptionsMessage", e),
                className: r(
                  { "menu-notice": !0, "menu-notice--no-options": !0 },
                  i
                ),
              },
              o
            ),
            t
          );
        };
      Pt.defaultProps = { children: "No options" };
      var Ot = function (e) {
        var t = e.children,
          i = e.className,
          r = e.cx,
          a = e.getStyles,
          o = e.innerProps;
        return Me(
          "div",
          n(
            {
              css: a("loadingMessage", e),
              className: r(
                { "menu-notice": !0, "menu-notice--loading": !0 },
                i
              ),
            },
            o
          ),
          t
        );
      };
      Ot.defaultProps = { children: "Loading..." };
      var Tt,
        xt = (function (e) {
          Ze(i, e);
          var t = tt(i);
          function i() {
            var e;
            Ve(this, i);
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                placement: null,
              }),
              (e.getPortalPlacement = function (t) {
                var i = t.placement;
                i !== kt(e.props.menuPlacement) && e.setState({ placement: i });
              }),
              e
            );
          }
          return (
            Ge(i, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.appendTo,
                    i = e.children,
                    a = e.className,
                    o = e.controlElement,
                    s = e.cx,
                    l = e.innerProps,
                    c = e.menuPlacement,
                    u = e.menuPosition,
                    d = e.getStyles,
                    p = "fixed" === u;
                  if ((!t && !p) || !o) return null;
                  var m = this.state.placement || kt(c),
                    h = (function (e) {
                      var t = e.getBoundingClientRect();
                      return {
                        bottom: t.bottom,
                        height: t.height,
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        width: t.width,
                      };
                    })(o),
                    g = p ? 0 : window.pageYOffset,
                    f = h[m] + g,
                    b = Me(
                      "div",
                      n(
                        {
                          css: d("menuPortal", {
                            offset: f,
                            position: u,
                            rect: h,
                          }),
                          className: s({ "menu-portal": !0 }, a),
                        },
                        l
                      ),
                      i
                    );
                  return Me(
                    wt.Provider,
                    { value: { getPortalPlacement: this.getPortalPlacement } },
                    t ? (0, r.createPortal)(b, t) : b
                  );
                },
              },
            ]),
            i
          );
        })(r.Component),
        It = ["size"];
      var Et,
        Mt,
        Dt = {
          name: "8mmkcg",
          styles:
            "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
        },
        Nt = function (e) {
          var t = e.size,
            i = je(e, It);
          return Me(
            "svg",
            n(
              {
                height: t,
                width: t,
                viewBox: "0 0 20 20",
                "aria-hidden": "true",
                focusable: "false",
                css: Dt,
              },
              i
            )
          );
        },
        Bt = function (e) {
          return Me(
            Nt,
            n({ size: 20 }, e),
            Me("path", {
              d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
            })
          );
        },
        Lt = function (e) {
          return Me(
            Nt,
            n({ size: 20 }, e),
            Me("path", {
              d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
            })
          );
        },
        zt = function (e) {
          var t = e.isFocused,
            i = e.theme,
            n = i.spacing.baseUnit,
            r = i.colors;
          return {
            label: "indicatorContainer",
            color: t ? r.neutral60 : r.neutral20,
            display: "flex",
            padding: 2 * n,
            transition: "color 150ms",
            ":hover": { color: t ? r.neutral80 : r.neutral40 },
          };
        },
        jt = zt,
        Ut = zt,
        Ft = (function () {
          var e = De.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
          };
        })(
          Tt ||
            ((Et = [
              "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n",
            ]),
            Mt || (Mt = Et.slice(0)),
            (Tt = Object.freeze(
              Object.defineProperties(Et, { raw: { value: Object.freeze(Mt) } })
            )))
        ),
        Wt = function (e) {
          var t = e.delay,
            i = e.offset;
          return Me("span", {
            css: De(
              {
                animation: ""
                  .concat(Ft, " 1s ease-in-out ")
                  .concat(t, "ms infinite;"),
                backgroundColor: "currentColor",
                borderRadius: "1em",
                display: "inline-block",
                marginLeft: i ? "1em" : void 0,
                height: "1em",
                verticalAlign: "top",
                width: "1em",
              },
              "",
              ""
            ),
          });
        },
        qt = function (e) {
          var t = e.className,
            i = e.cx,
            r = e.getStyles,
            a = e.innerProps,
            o = e.isRtl;
          return Me(
            "div",
            n(
              {
                css: r("loadingIndicator", e),
                className: i({ indicator: !0, "loading-indicator": !0 }, t),
              },
              a
            ),
            Me(Wt, { delay: 0, offset: o }),
            Me(Wt, { delay: 160, offset: !0 }),
            Me(Wt, { delay: 320, offset: !o })
          );
        };
      qt.defaultProps = { size: 4 };
      var Vt = ["data"],
        Ht = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        Gt = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0,
        },
        Kt = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": $e(
            {
              content: 'attr(data-value) " "',
              visibility: "hidden",
              whiteSpace: "pre",
            },
            Gt
          ),
        },
        Zt = function (e) {
          return $e(
            {
              label: "input",
              color: "inherit",
              background: 0,
              opacity: e ? 0 : 1,
              width: "100%",
            },
            Gt
          );
        },
        Yt = function (e) {
          var t = e.children,
            i = e.innerProps;
          return Me("div", i, t);
        };
      var Xt = {
          ClearIndicator: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerProps;
            return Me(
              "div",
              n(
                {
                  css: a("clearIndicator", e),
                  className: r({ indicator: !0, "clear-indicator": !0 }, i),
                },
                o
              ),
              t || Me(Bt, null)
            );
          },
          Control: function (e) {
            var t = e.children,
              i = e.cx,
              r = e.getStyles,
              a = e.className,
              o = e.isDisabled,
              s = e.isFocused,
              l = e.innerRef,
              c = e.innerProps,
              u = e.menuIsOpen;
            return Me(
              "div",
              n(
                {
                  ref: l,
                  css: r("control", e),
                  className: i(
                    {
                      control: !0,
                      "control--is-disabled": o,
                      "control--is-focused": s,
                      "control--menu-is-open": u,
                    },
                    a
                  ),
                },
                c
              ),
              t
            );
          },
          DropdownIndicator: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerProps;
            return Me(
              "div",
              n(
                {
                  css: a("dropdownIndicator", e),
                  className: r({ indicator: !0, "dropdown-indicator": !0 }, i),
                },
                o
              ),
              t || Me(Lt, null)
            );
          },
          DownChevron: Lt,
          CrossIcon: Bt,
          Group: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.Heading,
              s = e.headingProps,
              l = e.innerProps,
              c = e.label,
              u = e.theme,
              d = e.selectProps;
            return Me(
              "div",
              n({ css: a("group", e), className: r({ group: !0 }, i) }, l),
              Me(
                o,
                n({}, s, { selectProps: d, theme: u, getStyles: a, cx: r }),
                c
              ),
              Me("div", null, t)
            );
          },
          GroupHeading: function (e) {
            var t = e.getStyles,
              i = e.cx,
              r = e.className,
              a = st(e);
            a.data;
            var o = je(a, Vt);
            return Me(
              "div",
              n(
                {
                  css: t("groupHeading", e),
                  className: i({ "group-heading": !0 }, r),
                },
                o
              )
            );
          },
          IndicatorsContainer: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.innerProps,
              o = e.getStyles;
            return Me(
              "div",
              n(
                {
                  css: o("indicatorsContainer", e),
                  className: r({ indicators: !0 }, i),
                },
                a
              ),
              t
            );
          },
          IndicatorSeparator: function (e) {
            var t = e.className,
              i = e.cx,
              r = e.getStyles,
              a = e.innerProps;
            return Me(
              "span",
              n({}, a, {
                css: r("indicatorSeparator", e),
                className: i({ "indicator-separator": !0 }, t),
              })
            );
          },
          Input: function (e) {
            var t = e.className,
              i = e.cx,
              r = e.getStyles,
              a = e.value,
              o = st(e),
              s = o.innerRef,
              l = o.isDisabled,
              c = o.isHidden,
              u = o.inputClassName,
              d = je(o, Ht);
            return Me(
              "div",
              {
                className: i({ "input-container": !0 }, t),
                css: r("input", e),
                "data-value": a || "",
              },
              Me(
                "input",
                n(
                  {
                    className: i({ input: !0 }, u),
                    ref: s,
                    style: Zt(c),
                    disabled: l,
                  },
                  d
                )
              )
            );
          },
          LoadingIndicator: qt,
          Menu: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerRef,
              s = e.innerProps;
            return Me(
              "div",
              n(
                { css: a("menu", e), className: r({ menu: !0 }, i), ref: o },
                s
              ),
              t
            );
          },
          MenuList: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerProps,
              s = e.innerRef,
              l = e.isMulti;
            return Me(
              "div",
              n(
                {
                  css: a("menuList", e),
                  className: r(
                    { "menu-list": !0, "menu-list--is-multi": l },
                    i
                  ),
                  ref: s,
                },
                o
              ),
              t
            );
          },
          MenuPortal: xt,
          LoadingMessage: Ot,
          NoOptionsMessage: Pt,
          MultiValue: function (e) {
            var t = e.children,
              i = e.className,
              n = e.components,
              r = e.cx,
              a = e.data,
              o = e.getStyles,
              s = e.innerProps,
              l = e.isDisabled,
              c = e.removeProps,
              u = e.selectProps,
              d = n.Container,
              p = n.Label,
              m = n.Remove;
            return Me(ze, null, function (n) {
              var h = n.css,
                g = n.cx;
              return Me(
                d,
                {
                  data: a,
                  innerProps: $e(
                    {
                      className: g(
                        h(o("multiValue", e)),
                        r(
                          { "multi-value": !0, "multi-value--is-disabled": l },
                          i
                        )
                      ),
                    },
                    s
                  ),
                  selectProps: u,
                },
                Me(
                  p,
                  {
                    data: a,
                    innerProps: {
                      className: g(
                        h(o("multiValueLabel", e)),
                        r({ "multi-value__label": !0 }, i)
                      ),
                    },
                    selectProps: u,
                  },
                  t
                ),
                Me(m, {
                  data: a,
                  innerProps: $e(
                    {
                      className: g(
                        h(o("multiValueRemove", e)),
                        r({ "multi-value__remove": !0 }, i)
                      ),
                      "aria-label": "Remove ".concat(t || "option"),
                    },
                    c
                  ),
                  selectProps: u,
                })
              );
            });
          },
          MultiValueContainer: Yt,
          MultiValueLabel: Yt,
          MultiValueRemove: function (e) {
            var t = e.children,
              i = e.innerProps;
            return Me(
              "div",
              n({ role: "button" }, i),
              t || Me(Bt, { size: 14 })
            );
          },
          Option: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.isDisabled,
              s = e.isFocused,
              l = e.isSelected,
              c = e.innerRef,
              u = e.innerProps;
            return Me(
              "div",
              n(
                {
                  css: a("option", e),
                  className: r(
                    {
                      option: !0,
                      "option--is-disabled": o,
                      "option--is-focused": s,
                      "option--is-selected": l,
                    },
                    i
                  ),
                  ref: c,
                  "aria-disabled": o,
                },
                u
              ),
              t
            );
          },
          Placeholder: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerProps;
            return Me(
              "div",
              n(
                {
                  css: a("placeholder", e),
                  className: r({ placeholder: !0 }, i),
                },
                o
              ),
              t
            );
          },
          SelectContainer: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.innerProps,
              s = e.isDisabled,
              l = e.isRtl;
            return Me(
              "div",
              n(
                {
                  css: a("container", e),
                  className: r({ "--is-disabled": s, "--is-rtl": l }, i),
                },
                o
              ),
              t
            );
          },
          SingleValue: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.getStyles,
              o = e.isDisabled,
              s = e.innerProps;
            return Me(
              "div",
              n(
                {
                  css: a("singleValue", e),
                  className: r(
                    { "single-value": !0, "single-value--is-disabled": o },
                    i
                  ),
                },
                s
              ),
              t
            );
          },
          ValueContainer: function (e) {
            var t = e.children,
              i = e.className,
              r = e.cx,
              a = e.innerProps,
              o = e.isMulti,
              s = e.getStyles,
              l = e.hasValue;
            return Me(
              "div",
              n(
                {
                  css: s("valueContainer", e),
                  className: r(
                    {
                      "value-container": !0,
                      "value-container--is-multi": o,
                      "value-container--has-value": l,
                    },
                    i
                  ),
                },
                a
              ),
              t
            );
          },
        },
        Qt = [
          "defaultInputValue",
          "defaultMenuIsOpen",
          "defaultValue",
          "inputValue",
          "menuIsOpen",
          "onChange",
          "onInputChange",
          "onMenuClose",
          "onMenuOpen",
          "value",
        ];
      function $t(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ue(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Fe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Jt =
        Number.isNaN ||
        function (e) {
          return "number" === typeof e && e !== e;
        };
      function ei(e, t) {
        if (e.length !== t.length) return !1;
        for (var i = 0; i < e.length; i++)
          if (((n = e[i]), (r = t[i]), !(n === r || (Jt(n) && Jt(r)))))
            return !1;
        var n, r;
        return !0;
      }
      var ti = function (e, t) {
        var i;
        void 0 === t && (t = ei);
        var n,
          r = [],
          a = !1;
        return function () {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          return (
            (a && i === this && t(o, r)) ||
              ((n = e.apply(this, o)), (a = !0), (i = this), (r = o)),
            n
          );
        };
      };
      for (
        var ii = {
            name: "7pg0cj-a11yText",
            styles:
              "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
          },
          ni = function (e) {
            return Me("span", n({ css: ii }, e));
          },
          ri = {
            guidance: function (e) {
              var t = e.isSearchable,
                i = e.isMulti,
                n = e.isDisabled,
                r = e.tabSelectsValue;
              switch (e.context) {
                case "menu":
                  return "Use Up and Down to choose options"
                    .concat(
                      n
                        ? ""
                        : ", press Enter to select the currently focused option",
                      ", press Escape to exit the menu"
                    )
                    .concat(
                      r
                        ? ", press Tab to select the option and exit the menu"
                        : "",
                      "."
                    );
                case "input":
                  return ""
                    .concat(e["aria-label"] || "Select", " is focused ")
                    .concat(
                      t ? ",type to refine list" : "",
                      ", press Down to open the menu, "
                    )
                    .concat(i ? " press left to focus selected values" : "");
                case "value":
                  return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
                default:
                  return "";
              }
            },
            onChange: function (e) {
              var t = e.action,
                i = e.label,
                n = void 0 === i ? "" : i,
                r = e.labels,
                a = e.isDisabled;
              switch (t) {
                case "deselect-option":
                case "pop-value":
                case "remove-value":
                  return "option ".concat(n, ", deselected.");
                case "clear":
                  return "All selected options have been cleared.";
                case "initial-input-focus":
                  return "option"
                    .concat(r.length > 1 ? "s" : "", " ")
                    .concat(r.join(","), ", selected.");
                case "select-option":
                  return "option ".concat(
                    n,
                    a ? " is disabled. Select another option." : ", selected."
                  );
                default:
                  return "";
              }
            },
            onFocus: function (e) {
              var t = e.context,
                i = e.focused,
                n = e.options,
                r = e.label,
                a = void 0 === r ? "" : r,
                o = e.selectValue,
                s = e.isDisabled,
                l = e.isSelected,
                c = function (e, t) {
                  return e && e.length
                    ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length)
                    : "";
                };
              if ("value" === t && o)
                return "value ".concat(a, " focused, ").concat(c(o, i), ".");
              if ("menu" === t) {
                var u = s ? " disabled" : "",
                  d = "".concat(l ? "selected" : "focused").concat(u);
                return "option "
                  .concat(a, " ")
                  .concat(d, ", ")
                  .concat(c(n, i), ".");
              }
              return "";
            },
            onFilter: function (e) {
              var t = e.inputValue,
                i = e.resultsMessage;
              return "".concat(i).concat(t ? " for search term " + t : "", ".");
            },
          },
          ai = function (e) {
            var t = e.ariaSelection,
              i = e.focusedOption,
              n = e.focusedValue,
              a = e.focusableOptions,
              o = e.isFocused,
              s = e.selectValue,
              l = e.selectProps,
              c = e.id,
              u = l.ariaLiveMessages,
              d = l.getOptionLabel,
              p = l.inputValue,
              m = l.isMulti,
              h = l.isOptionDisabled,
              g = l.isSearchable,
              f = l.menuIsOpen,
              b = l.options,
              _ = l.screenReaderStatus,
              y = l.tabSelectsValue,
              v = l["aria-label"],
              k = l["aria-live"],
              w = (0, r.useMemo)(
                function () {
                  return $e($e({}, ri), u || {});
                },
                [u]
              ),
              S = (0, r.useMemo)(
                function () {
                  var e,
                    i = "";
                  if (t && w.onChange) {
                    var n = t.option,
                      r = t.options,
                      a = t.removedValue,
                      o = t.removedValues,
                      l = t.value,
                      c = a || n || ((e = l), Array.isArray(e) ? null : e),
                      u = c ? d(c) : "",
                      p = r || o || void 0,
                      m = p ? p.map(d) : [],
                      g = $e(
                        { isDisabled: c && h(c, s), label: u, labels: m },
                        t
                      );
                    i = w.onChange(g);
                  }
                  return i;
                },
                [t, w, h, s, d]
              ),
              C = (0, r.useMemo)(
                function () {
                  var e = "",
                    t = i || n,
                    r = !!(i && s && s.includes(i));
                  if (t && w.onFocus) {
                    var a = {
                      focused: t,
                      label: d(t),
                      isDisabled: h(t, s),
                      isSelected: r,
                      options: b,
                      context: t === i ? "menu" : "value",
                      selectValue: s,
                    };
                    e = w.onFocus(a);
                  }
                  return e;
                },
                [i, n, d, h, w, b, s]
              ),
              R = (0, r.useMemo)(
                function () {
                  var e = "";
                  if (f && b.length && w.onFilter) {
                    var t = _({ count: a.length });
                    e = w.onFilter({ inputValue: p, resultsMessage: t });
                  }
                  return e;
                },
                [a, p, f, w, b, _]
              ),
              A = (0, r.useMemo)(
                function () {
                  var e = "";
                  if (w.guidance) {
                    var t = n ? "value" : f ? "menu" : "input";
                    e = w.guidance({
                      "aria-label": v,
                      context: t,
                      isDisabled: i && h(i, s),
                      isMulti: m,
                      isSearchable: g,
                      tabSelectsValue: y,
                    });
                  }
                  return e;
                },
                [v, i, n, m, h, g, f, w, s, y]
              ),
              P = "".concat(C, " ").concat(R, " ").concat(A),
              O = Me(
                r.Fragment,
                null,
                Me("span", { id: "aria-selection" }, S),
                Me("span", { id: "aria-context" }, P)
              ),
              T =
                "initial-input-focus" ===
                (null === t || void 0 === t ? void 0 : t.action);
            return Me(
              r.Fragment,
              null,
              Me(ni, { id: c }, T && O),
              Me(
                ni,
                {
                  "aria-live": k,
                  "aria-atomic": "false",
                  "aria-relevant": "additions text",
                },
                o && !T && O
              )
            );
          },
          oi = [
            {
              base: "A",
              letters:
                "A\u24b6\uff21\xc0\xc1\xc2\u1ea6\u1ea4\u1eaa\u1ea8\xc3\u0100\u0102\u1eb0\u1eae\u1eb4\u1eb2\u0226\u01e0\xc4\u01de\u1ea2\xc5\u01fa\u01cd\u0200\u0202\u1ea0\u1eac\u1eb6\u1e00\u0104\u023a\u2c6f",
            },
            { base: "AA", letters: "\ua732" },
            { base: "AE", letters: "\xc6\u01fc\u01e2" },
            { base: "AO", letters: "\ua734" },
            { base: "AU", letters: "\ua736" },
            { base: "AV", letters: "\ua738\ua73a" },
            { base: "AY", letters: "\ua73c" },
            {
              base: "B",
              letters: "B\u24b7\uff22\u1e02\u1e04\u1e06\u0243\u0182\u0181",
            },
            {
              base: "C",
              letters:
                "C\u24b8\uff23\u0106\u0108\u010a\u010c\xc7\u1e08\u0187\u023b\ua73e",
            },
            {
              base: "D",
              letters:
                "D\u24b9\uff24\u1e0a\u010e\u1e0c\u1e10\u1e12\u1e0e\u0110\u018b\u018a\u0189\ua779",
            },
            { base: "DZ", letters: "\u01f1\u01c4" },
            { base: "Dz", letters: "\u01f2\u01c5" },
            {
              base: "E",
              letters:
                "E\u24ba\uff25\xc8\xc9\xca\u1ec0\u1ebe\u1ec4\u1ec2\u1ebc\u0112\u1e14\u1e16\u0114\u0116\xcb\u1eba\u011a\u0204\u0206\u1eb8\u1ec6\u0228\u1e1c\u0118\u1e18\u1e1a\u0190\u018e",
            },
            { base: "F", letters: "F\u24bb\uff26\u1e1e\u0191\ua77b" },
            {
              base: "G",
              letters:
                "G\u24bc\uff27\u01f4\u011c\u1e20\u011e\u0120\u01e6\u0122\u01e4\u0193\ua7a0\ua77d\ua77e",
            },
            {
              base: "H",
              letters:
                "H\u24bd\uff28\u0124\u1e22\u1e26\u021e\u1e24\u1e28\u1e2a\u0126\u2c67\u2c75\ua78d",
            },
            {
              base: "I",
              letters:
                "I\u24be\uff29\xcc\xcd\xce\u0128\u012a\u012c\u0130\xcf\u1e2e\u1ec8\u01cf\u0208\u020a\u1eca\u012e\u1e2c\u0197",
            },
            { base: "J", letters: "J\u24bf\uff2a\u0134\u0248" },
            {
              base: "K",
              letters:
                "K\u24c0\uff2b\u1e30\u01e8\u1e32\u0136\u1e34\u0198\u2c69\ua740\ua742\ua744\ua7a2",
            },
            {
              base: "L",
              letters:
                "L\u24c1\uff2c\u013f\u0139\u013d\u1e36\u1e38\u013b\u1e3c\u1e3a\u0141\u023d\u2c62\u2c60\ua748\ua746\ua780",
            },
            { base: "LJ", letters: "\u01c7" },
            { base: "Lj", letters: "\u01c8" },
            {
              base: "M",
              letters: "M\u24c2\uff2d\u1e3e\u1e40\u1e42\u2c6e\u019c",
            },
            {
              base: "N",
              letters:
                "N\u24c3\uff2e\u01f8\u0143\xd1\u1e44\u0147\u1e46\u0145\u1e4a\u1e48\u0220\u019d\ua790\ua7a4",
            },
            { base: "NJ", letters: "\u01ca" },
            { base: "Nj", letters: "\u01cb" },
            {
              base: "O",
              letters:
                "O\u24c4\uff2f\xd2\xd3\xd4\u1ed2\u1ed0\u1ed6\u1ed4\xd5\u1e4c\u022c\u1e4e\u014c\u1e50\u1e52\u014e\u022e\u0230\xd6\u022a\u1ece\u0150\u01d1\u020c\u020e\u01a0\u1edc\u1eda\u1ee0\u1ede\u1ee2\u1ecc\u1ed8\u01ea\u01ec\xd8\u01fe\u0186\u019f\ua74a\ua74c",
            },
            { base: "OI", letters: "\u01a2" },
            { base: "OO", letters: "\ua74e" },
            { base: "OU", letters: "\u0222" },
            {
              base: "P",
              letters:
                "P\u24c5\uff30\u1e54\u1e56\u01a4\u2c63\ua750\ua752\ua754",
            },
            { base: "Q", letters: "Q\u24c6\uff31\ua756\ua758\u024a" },
            {
              base: "R",
              letters:
                "R\u24c7\uff32\u0154\u1e58\u0158\u0210\u0212\u1e5a\u1e5c\u0156\u1e5e\u024c\u2c64\ua75a\ua7a6\ua782",
            },
            {
              base: "S",
              letters:
                "S\u24c8\uff33\u1e9e\u015a\u1e64\u015c\u1e60\u0160\u1e66\u1e62\u1e68\u0218\u015e\u2c7e\ua7a8\ua784",
            },
            {
              base: "T",
              letters:
                "T\u24c9\uff34\u1e6a\u0164\u1e6c\u021a\u0162\u1e70\u1e6e\u0166\u01ac\u01ae\u023e\ua786",
            },
            { base: "TZ", letters: "\ua728" },
            {
              base: "U",
              letters:
                "U\u24ca\uff35\xd9\xda\xdb\u0168\u1e78\u016a\u1e7a\u016c\xdc\u01db\u01d7\u01d5\u01d9\u1ee6\u016e\u0170\u01d3\u0214\u0216\u01af\u1eea\u1ee8\u1eee\u1eec\u1ef0\u1ee4\u1e72\u0172\u1e76\u1e74\u0244",
            },
            {
              base: "V",
              letters: "V\u24cb\uff36\u1e7c\u1e7e\u01b2\ua75e\u0245",
            },
            { base: "VY", letters: "\ua760" },
            {
              base: "W",
              letters:
                "W\u24cc\uff37\u1e80\u1e82\u0174\u1e86\u1e84\u1e88\u2c72",
            },
            { base: "X", letters: "X\u24cd\uff38\u1e8a\u1e8c" },
            {
              base: "Y",
              letters:
                "Y\u24ce\uff39\u1ef2\xdd\u0176\u1ef8\u0232\u1e8e\u0178\u1ef6\u1ef4\u01b3\u024e\u1efe",
            },
            {
              base: "Z",
              letters:
                "Z\u24cf\uff3a\u0179\u1e90\u017b\u017d\u1e92\u1e94\u01b5\u0224\u2c7f\u2c6b\ua762",
            },
            {
              base: "a",
              letters:
                "a\u24d0\uff41\u1e9a\xe0\xe1\xe2\u1ea7\u1ea5\u1eab\u1ea9\xe3\u0101\u0103\u1eb1\u1eaf\u1eb5\u1eb3\u0227\u01e1\xe4\u01df\u1ea3\xe5\u01fb\u01ce\u0201\u0203\u1ea1\u1ead\u1eb7\u1e01\u0105\u2c65\u0250",
            },
            { base: "aa", letters: "\ua733" },
            { base: "ae", letters: "\xe6\u01fd\u01e3" },
            { base: "ao", letters: "\ua735" },
            { base: "au", letters: "\ua737" },
            { base: "av", letters: "\ua739\ua73b" },
            { base: "ay", letters: "\ua73d" },
            {
              base: "b",
              letters: "b\u24d1\uff42\u1e03\u1e05\u1e07\u0180\u0183\u0253",
            },
            {
              base: "c",
              letters:
                "c\u24d2\uff43\u0107\u0109\u010b\u010d\xe7\u1e09\u0188\u023c\ua73f\u2184",
            },
            {
              base: "d",
              letters:
                "d\u24d3\uff44\u1e0b\u010f\u1e0d\u1e11\u1e13\u1e0f\u0111\u018c\u0256\u0257\ua77a",
            },
            { base: "dz", letters: "\u01f3\u01c6" },
            {
              base: "e",
              letters:
                "e\u24d4\uff45\xe8\xe9\xea\u1ec1\u1ebf\u1ec5\u1ec3\u1ebd\u0113\u1e15\u1e17\u0115\u0117\xeb\u1ebb\u011b\u0205\u0207\u1eb9\u1ec7\u0229\u1e1d\u0119\u1e19\u1e1b\u0247\u025b\u01dd",
            },
            { base: "f", letters: "f\u24d5\uff46\u1e1f\u0192\ua77c" },
            {
              base: "g",
              letters:
                "g\u24d6\uff47\u01f5\u011d\u1e21\u011f\u0121\u01e7\u0123\u01e5\u0260\ua7a1\u1d79\ua77f",
            },
            {
              base: "h",
              letters:
                "h\u24d7\uff48\u0125\u1e23\u1e27\u021f\u1e25\u1e29\u1e2b\u1e96\u0127\u2c68\u2c76\u0265",
            },
            { base: "hv", letters: "\u0195" },
            {
              base: "i",
              letters:
                "i\u24d8\uff49\xec\xed\xee\u0129\u012b\u012d\xef\u1e2f\u1ec9\u01d0\u0209\u020b\u1ecb\u012f\u1e2d\u0268\u0131",
            },
            { base: "j", letters: "j\u24d9\uff4a\u0135\u01f0\u0249" },
            {
              base: "k",
              letters:
                "k\u24da\uff4b\u1e31\u01e9\u1e33\u0137\u1e35\u0199\u2c6a\ua741\ua743\ua745\ua7a3",
            },
            {
              base: "l",
              letters:
                "l\u24db\uff4c\u0140\u013a\u013e\u1e37\u1e39\u013c\u1e3d\u1e3b\u017f\u0142\u019a\u026b\u2c61\ua749\ua781\ua747",
            },
            { base: "lj", letters: "\u01c9" },
            {
              base: "m",
              letters: "m\u24dc\uff4d\u1e3f\u1e41\u1e43\u0271\u026f",
            },
            {
              base: "n",
              letters:
                "n\u24dd\uff4e\u01f9\u0144\xf1\u1e45\u0148\u1e47\u0146\u1e4b\u1e49\u019e\u0272\u0149\ua791\ua7a5",
            },
            { base: "nj", letters: "\u01cc" },
            {
              base: "o",
              letters:
                "o\u24de\uff4f\xf2\xf3\xf4\u1ed3\u1ed1\u1ed7\u1ed5\xf5\u1e4d\u022d\u1e4f\u014d\u1e51\u1e53\u014f\u022f\u0231\xf6\u022b\u1ecf\u0151\u01d2\u020d\u020f\u01a1\u1edd\u1edb\u1ee1\u1edf\u1ee3\u1ecd\u1ed9\u01eb\u01ed\xf8\u01ff\u0254\ua74b\ua74d\u0275",
            },
            { base: "oi", letters: "\u01a3" },
            { base: "ou", letters: "\u0223" },
            { base: "oo", letters: "\ua74f" },
            {
              base: "p",
              letters:
                "p\u24df\uff50\u1e55\u1e57\u01a5\u1d7d\ua751\ua753\ua755",
            },
            { base: "q", letters: "q\u24e0\uff51\u024b\ua757\ua759" },
            {
              base: "r",
              letters:
                "r\u24e1\uff52\u0155\u1e59\u0159\u0211\u0213\u1e5b\u1e5d\u0157\u1e5f\u024d\u027d\ua75b\ua7a7\ua783",
            },
            {
              base: "s",
              letters:
                "s\u24e2\uff53\xdf\u015b\u1e65\u015d\u1e61\u0161\u1e67\u1e63\u1e69\u0219\u015f\u023f\ua7a9\ua785\u1e9b",
            },
            {
              base: "t",
              letters:
                "t\u24e3\uff54\u1e6b\u1e97\u0165\u1e6d\u021b\u0163\u1e71\u1e6f\u0167\u01ad\u0288\u2c66\ua787",
            },
            { base: "tz", letters: "\ua729" },
            {
              base: "u",
              letters:
                "u\u24e4\uff55\xf9\xfa\xfb\u0169\u1e79\u016b\u1e7b\u016d\xfc\u01dc\u01d8\u01d6\u01da\u1ee7\u016f\u0171\u01d4\u0215\u0217\u01b0\u1eeb\u1ee9\u1eef\u1eed\u1ef1\u1ee5\u1e73\u0173\u1e77\u1e75\u0289",
            },
            {
              base: "v",
              letters: "v\u24e5\uff56\u1e7d\u1e7f\u028b\ua75f\u028c",
            },
            { base: "vy", letters: "\ua761" },
            {
              base: "w",
              letters:
                "w\u24e6\uff57\u1e81\u1e83\u0175\u1e87\u1e85\u1e98\u1e89\u2c73",
            },
            { base: "x", letters: "x\u24e7\uff58\u1e8b\u1e8d" },
            {
              base: "y",
              letters:
                "y\u24e8\uff59\u1ef3\xfd\u0177\u1ef9\u0233\u1e8f\xff\u1ef7\u1e99\u1ef5\u01b4\u024f\u1eff",
            },
            {
              base: "z",
              letters:
                "z\u24e9\uff5a\u017a\u1e91\u017c\u017e\u1e93\u1e95\u01b6\u0225\u0240\u2c6c\ua763",
            },
          ],
          si = new RegExp(
            "[" +
              oi
                .map(function (e) {
                  return e.letters;
                })
                .join("") +
              "]",
            "g"
          ),
          li = {},
          ci = 0;
        ci < oi.length;
        ci++
      )
        for (var ui = oi[ci], di = 0; di < ui.letters.length; di++)
          li[ui.letters[di]] = ui.base;
      var pi = function (e) {
          return e.replace(si, function (e) {
            return li[e];
          });
        },
        mi = ti(pi),
        hi = function (e) {
          return e.replace(/^\s+|\s+$/g, "");
        },
        gi = function (e) {
          return "".concat(e.label, " ").concat(e.value);
        },
        fi = ["innerRef"];
      function bi(e) {
        var t = e.innerRef,
          i = (function (e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            var r = Object.entries(e).filter(function (e) {
              var t = We(e, 1)[0];
              return !i.includes(t);
            });
            return r.reduce(function (e, t) {
              var i = We(t, 2),
                n = i[0],
                r = i[1];
              return (e[n] = r), e;
            }, {});
          })(je(e, fi), "onExited", "in", "enter", "exit", "appear");
        return Me(
          "input",
          n({ ref: t }, i, {
            css: De(
              {
                label: "dummyInput",
                background: 0,
                border: 0,
                caretColor: "transparent",
                fontSize: "inherit",
                gridArea: "1 / 1 / 2 / 3",
                outline: 0,
                padding: 0,
                width: 1,
                color: "transparent",
                left: -100,
                opacity: 0,
                position: "relative",
                transform: "scale(.01)",
              },
              "",
              ""
            ),
          })
        );
      }
      var _i = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        yi = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%",
        };
      function vi(e) {
        e.preventDefault();
      }
      function ki(e) {
        e.stopPropagation();
      }
      function wi() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          i = e + this.offsetHeight;
        0 === e ? (this.scrollTop = 1) : i === t && (this.scrollTop = e - 1);
      }
      function Si() {
        return "ontouchstart" in window || navigator.maxTouchPoints;
      }
      var Ci = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        Ri = 0,
        Ai = { capture: !1, passive: !1 };
      var Pi = function () {
          return document.activeElement && document.activeElement.blur();
        },
        Oi = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0",
        };
      function Ti(e) {
        var t = e.children,
          i = e.lockEnabled,
          n = e.captureEnabled,
          a = (function (e) {
            var t = e.isEnabled,
              i = e.onBottomArrive,
              n = e.onBottomLeave,
              a = e.onTopArrive,
              o = e.onTopLeave,
              s = (0, r.useRef)(!1),
              l = (0, r.useRef)(!1),
              c = (0, r.useRef)(0),
              u = (0, r.useRef)(null),
              d = (0, r.useCallback)(
                function (e, t) {
                  if (null !== u.current) {
                    var r = u.current,
                      c = r.scrollTop,
                      d = r.scrollHeight,
                      p = r.clientHeight,
                      m = u.current,
                      h = t > 0,
                      g = d - p - c,
                      f = !1;
                    g > t && s.current && (n && n(e), (s.current = !1)),
                      h && l.current && (o && o(e), (l.current = !1)),
                      h && t > g
                        ? (i && !s.current && i(e),
                          (m.scrollTop = d),
                          (f = !0),
                          (s.current = !0))
                        : !h &&
                          -t > c &&
                          (a && !l.current && a(e),
                          (m.scrollTop = 0),
                          (f = !0),
                          (l.current = !0)),
                      f &&
                        (function (e) {
                          e.preventDefault(), e.stopPropagation();
                        })(e);
                  }
                },
                [i, n, a, o]
              ),
              p = (0, r.useCallback)(
                function (e) {
                  d(e, e.deltaY);
                },
                [d]
              ),
              m = (0, r.useCallback)(function (e) {
                c.current = e.changedTouches[0].clientY;
              }, []),
              h = (0, r.useCallback)(
                function (e) {
                  var t = c.current - e.changedTouches[0].clientY;
                  d(e, t);
                },
                [d]
              ),
              g = (0, r.useCallback)(
                function (e) {
                  if (e) {
                    var t = !!bt && { passive: !1 };
                    e.addEventListener("wheel", p, t),
                      e.addEventListener("touchstart", m, t),
                      e.addEventListener("touchmove", h, t);
                  }
                },
                [h, m, p]
              ),
              f = (0, r.useCallback)(
                function (e) {
                  e &&
                    (e.removeEventListener("wheel", p, !1),
                    e.removeEventListener("touchstart", m, !1),
                    e.removeEventListener("touchmove", h, !1));
                },
                [h, m, p]
              );
            return (
              (0, r.useEffect)(
                function () {
                  if (t) {
                    var e = u.current;
                    return (
                      g(e),
                      function () {
                        f(e);
                      }
                    );
                  }
                },
                [t, g, f]
              ),
              function (e) {
                u.current = e;
              }
            );
          })({
            isEnabled: void 0 === n || n,
            onBottomArrive: e.onBottomArrive,
            onBottomLeave: e.onBottomLeave,
            onTopArrive: e.onTopArrive,
            onTopLeave: e.onTopLeave,
          }),
          o = (function (e) {
            var t = e.isEnabled,
              i = e.accountForScrollbars,
              n = void 0 === i || i,
              a = (0, r.useRef)({}),
              o = (0, r.useRef)(null),
              s = (0, r.useCallback)(
                function (e) {
                  if (Ci) {
                    var t = document.body,
                      i = t && t.style;
                    if (
                      (n &&
                        _i.forEach(function (e) {
                          var t = i && i[e];
                          a.current[e] = t;
                        }),
                      n && Ri < 1)
                    ) {
                      var r = parseInt(a.current.paddingRight, 10) || 0,
                        o = document.body ? document.body.clientWidth : 0,
                        s = window.innerWidth - o + r || 0;
                      Object.keys(yi).forEach(function (e) {
                        var t = yi[e];
                        i && (i[e] = t);
                      }),
                        i && (i.paddingRight = "".concat(s, "px"));
                    }
                    t &&
                      Si() &&
                      (t.addEventListener("touchmove", vi, Ai),
                      e &&
                        (e.addEventListener("touchstart", wi, Ai),
                        e.addEventListener("touchmove", ki, Ai))),
                      (Ri += 1);
                  }
                },
                [n]
              ),
              l = (0, r.useCallback)(
                function (e) {
                  if (Ci) {
                    var t = document.body,
                      i = t && t.style;
                    (Ri = Math.max(Ri - 1, 0)),
                      n &&
                        Ri < 1 &&
                        _i.forEach(function (e) {
                          var t = a.current[e];
                          i && (i[e] = t);
                        }),
                      t &&
                        Si() &&
                        (t.removeEventListener("touchmove", vi, Ai),
                        e &&
                          (e.removeEventListener("touchstart", wi, Ai),
                          e.removeEventListener("touchmove", ki, Ai)));
                  }
                },
                [n]
              );
            return (
              (0, r.useEffect)(
                function () {
                  if (t) {
                    var e = o.current;
                    return (
                      s(e),
                      function () {
                        l(e);
                      }
                    );
                  }
                },
                [t, s, l]
              ),
              function (e) {
                o.current = e;
              }
            );
          })({ isEnabled: i });
        return Me(
          r.Fragment,
          null,
          i && Me("div", { onClick: Pi, css: Oi }),
          t(function (e) {
            a(e), o(e);
          })
        );
      }
      var xi = {
        clearIndicator: Ut,
        container: function (e) {
          var t = e.isDisabled;
          return {
            label: "container",
            direction: e.isRtl ? "rtl" : void 0,
            pointerEvents: t ? "none" : void 0,
            position: "relative",
          };
        },
        control: function (e) {
          var t = e.isDisabled,
            i = e.isFocused,
            n = e.theme,
            r = n.colors,
            a = n.borderRadius,
            o = n.spacing;
          return {
            label: "control",
            alignItems: "center",
            backgroundColor: t ? r.neutral5 : r.neutral0,
            borderColor: t ? r.neutral10 : i ? r.primary : r.neutral20,
            borderRadius: a,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: i ? "0 0 0 1px ".concat(r.primary) : void 0,
            cursor: "default",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minHeight: o.controlHeight,
            outline: "0 !important",
            position: "relative",
            transition: "all 100ms",
            "&:hover": { borderColor: i ? r.primary : r.neutral30 },
          };
        },
        dropdownIndicator: jt,
        group: function (e) {
          var t = e.theme.spacing;
          return { paddingBottom: 2 * t.baseUnit, paddingTop: 2 * t.baseUnit };
        },
        groupHeading: function (e) {
          var t = e.theme.spacing;
          return {
            label: "group",
            color: "#999",
            cursor: "default",
            display: "block",
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: 3 * t.baseUnit,
            paddingRight: 3 * t.baseUnit,
            textTransform: "uppercase",
          };
        },
        indicatorsContainer: function () {
          return {
            alignItems: "center",
            alignSelf: "stretch",
            display: "flex",
            flexShrink: 0,
          };
        },
        indicatorSeparator: function (e) {
          var t = e.isDisabled,
            i = e.theme,
            n = i.spacing.baseUnit,
            r = i.colors;
          return {
            label: "indicatorSeparator",
            alignSelf: "stretch",
            backgroundColor: t ? r.neutral10 : r.neutral20,
            marginBottom: 2 * n,
            marginTop: 2 * n,
            width: 1,
          };
        },
        input: function (e) {
          var t = e.isDisabled,
            i = e.value,
            n = e.theme,
            r = n.spacing,
            a = n.colors;
          return $e(
            {
              margin: r.baseUnit / 2,
              paddingBottom: r.baseUnit / 2,
              paddingTop: r.baseUnit / 2,
              visibility: t ? "hidden" : "visible",
              color: a.neutral80,
              transform: i ? "translateZ(0)" : "",
            },
            Kt
          );
        },
        loadingIndicator: function (e) {
          var t = e.isFocused,
            i = e.size,
            n = e.theme,
            r = n.colors,
            a = n.spacing.baseUnit;
          return {
            label: "loadingIndicator",
            color: t ? r.neutral60 : r.neutral20,
            display: "flex",
            padding: 2 * a,
            transition: "color 150ms",
            alignSelf: "center",
            fontSize: i,
            lineHeight: 1,
            marginRight: i,
            textAlign: "center",
            verticalAlign: "middle",
          };
        },
        loadingMessage: At,
        menu: function (e) {
          var t,
            i = e.placement,
            n = e.theme,
            r = n.borderRadius,
            a = n.spacing,
            o = n.colors;
          return (
            Ye(
              (t = { label: "menu" }),
              (function (e) {
                return e ? { bottom: "top", top: "bottom" }[e] : "bottom";
              })(i),
              "100%"
            ),
            Ye(t, "backgroundColor", o.neutral0),
            Ye(t, "borderRadius", r),
            Ye(
              t,
              "boxShadow",
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
            ),
            Ye(t, "marginBottom", a.menuGutter),
            Ye(t, "marginTop", a.menuGutter),
            Ye(t, "position", "absolute"),
            Ye(t, "width", "100%"),
            Ye(t, "zIndex", 1),
            t
          );
        },
        menuList: function (e) {
          var t = e.maxHeight,
            i = e.theme.spacing.baseUnit;
          return {
            maxHeight: t,
            overflowY: "auto",
            paddingBottom: i,
            paddingTop: i,
            position: "relative",
            WebkitOverflowScrolling: "touch",
          };
        },
        menuPortal: function (e) {
          var t = e.rect,
            i = e.offset,
            n = e.position;
          return {
            left: t.left,
            position: n,
            top: i,
            width: t.width,
            zIndex: 1,
          };
        },
        multiValue: function (e) {
          var t = e.theme,
            i = t.spacing,
            n = t.borderRadius;
          return {
            label: "multiValue",
            backgroundColor: t.colors.neutral10,
            borderRadius: n / 2,
            display: "flex",
            margin: i.baseUnit / 2,
            minWidth: 0,
          };
        },
        multiValueLabel: function (e) {
          var t = e.theme,
            i = t.borderRadius,
            n = t.colors,
            r = e.cropWithEllipsis;
          return {
            borderRadius: i / 2,
            color: n.neutral80,
            fontSize: "85%",
            overflow: "hidden",
            padding: 3,
            paddingLeft: 6,
            textOverflow: r || void 0 === r ? "ellipsis" : void 0,
            whiteSpace: "nowrap",
          };
        },
        multiValueRemove: function (e) {
          var t = e.theme,
            i = t.spacing,
            n = t.borderRadius,
            r = t.colors;
          return {
            alignItems: "center",
            borderRadius: n / 2,
            backgroundColor: e.isFocused ? r.dangerLight : void 0,
            display: "flex",
            paddingLeft: i.baseUnit,
            paddingRight: i.baseUnit,
            ":hover": { backgroundColor: r.dangerLight, color: r.danger },
          };
        },
        noOptionsMessage: Rt,
        option: function (e) {
          var t = e.isDisabled,
            i = e.isFocused,
            n = e.isSelected,
            r = e.theme,
            a = r.spacing,
            o = r.colors;
          return {
            label: "option",
            backgroundColor: n ? o.primary : i ? o.primary25 : "transparent",
            color: t ? o.neutral20 : n ? o.neutral0 : "inherit",
            cursor: "default",
            display: "block",
            fontSize: "inherit",
            padding: ""
              .concat(2 * a.baseUnit, "px ")
              .concat(3 * a.baseUnit, "px"),
            width: "100%",
            userSelect: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            ":active": {
              backgroundColor: t ? void 0 : n ? o.primary : o.primary50,
            },
          };
        },
        placeholder: function (e) {
          var t = e.theme,
            i = t.spacing;
          return {
            label: "placeholder",
            color: t.colors.neutral50,
            gridArea: "1 / 1 / 2 / 3",
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          };
        },
        singleValue: function (e) {
          var t = e.isDisabled,
            i = e.theme,
            n = i.spacing,
            r = i.colors;
          return {
            label: "singleValue",
            color: t ? r.neutral40 : r.neutral80,
            gridArea: "1 / 1 / 2 / 3",
            marginLeft: n.baseUnit / 2,
            marginRight: n.baseUnit / 2,
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
        },
        valueContainer: function (e) {
          var t = e.theme.spacing,
            i = e.isMulti,
            n = e.hasValue,
            r = e.selectProps.controlShouldRenderValue;
          return {
            alignItems: "center",
            display: i && n && r ? "flex" : "grid",
            flex: 1,
            flexWrap: "wrap",
            padding: ""
              .concat(t.baseUnit / 2, "px ")
              .concat(2 * t.baseUnit, "px"),
            WebkitOverflowScrolling: "touch",
            position: "relative",
            overflow: "hidden",
          };
        },
      };
      var Ii,
        Ei = {
          borderRadius: 4,
          colors: {
            primary: "#2684FF",
            primary75: "#4C9AFF",
            primary50: "#B2D4FF",
            primary25: "#DEEBFF",
            danger: "#DE350B",
            dangerLight: "#FFBDAD",
            neutral0: "hsl(0, 0%, 100%)",
            neutral5: "hsl(0, 0%, 95%)",
            neutral10: "hsl(0, 0%, 90%)",
            neutral20: "hsl(0, 0%, 80%)",
            neutral30: "hsl(0, 0%, 70%)",
            neutral40: "hsl(0, 0%, 60%)",
            neutral50: "hsl(0, 0%, 50%)",
            neutral60: "hsl(0, 0%, 40%)",
            neutral70: "hsl(0, 0%, 30%)",
            neutral80: "hsl(0, 0%, 20%)",
            neutral90: "hsl(0, 0%, 10%)",
          },
          spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 },
        },
        Mi = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: mt(),
          captureMenuScroll: !mt(),
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function (e, t) {
            if (e.data.__isNew__) return !0;
            var i = $e(
                {
                  ignoreCase: !0,
                  ignoreAccents: !0,
                  stringify: gi,
                  trim: !0,
                  matchFrom: "any",
                },
                Ii
              ),
              n = i.ignoreCase,
              r = i.ignoreAccents,
              a = i.stringify,
              o = i.trim,
              s = i.matchFrom,
              l = o ? hi(t) : t,
              c = o ? hi(a(e)) : a(e);
            return (
              n && ((l = l.toLowerCase()), (c = c.toLowerCase())),
              r && ((l = mi(l)), (c = pi(c))),
              "start" === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
            );
          },
          formatGroupLabel: function (e) {
            return e.label;
          },
          getOptionLabel: function (e) {
            return e.label;
          },
          getOptionValue: function (e) {
            return e.value;
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function (e) {
            return !!e.isDisabled;
          },
          loadingMessage: function () {
            return "Loading...";
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: "bottom",
          menuPosition: "absolute",
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: !(function () {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );
            } catch (e) {
              return !1;
            }
          })(),
          noOptionsMessage: function () {
            return "No options";
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: "Select...",
          screenReaderStatus: function (e) {
            var t = e.count;
            return ""
              .concat(t, " result")
              .concat(1 !== t ? "s" : "", " available");
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
        };
      function Di(e, t, i, n) {
        return {
          type: "option",
          data: t,
          isDisabled: Ui(e, t, i),
          isSelected: Fi(e, t, i),
          label: zi(e, t),
          value: ji(e, t),
          index: n,
        };
      }
      function Ni(e, t) {
        return e.options
          .map(function (i, n) {
            if ("options" in i) {
              var r = i.options
                .map(function (i, n) {
                  return Di(e, i, t, n);
                })
                .filter(function (t) {
                  return Li(e, t);
                });
              return r.length > 0
                ? { type: "group", data: i, options: r, index: n }
                : void 0;
            }
            var a = Di(e, i, t, n);
            return Li(e, a) ? a : void 0;
          })
          .filter(_t);
      }
      function Bi(e) {
        return e.reduce(function (e, t) {
          return (
            "group" === t.type
              ? e.push.apply(
                  e,
                  $t(
                    t.options.map(function (e) {
                      return e.data;
                    })
                  )
                )
              : e.push(t.data),
            e
          );
        }, []);
      }
      function Li(e, t) {
        var i = e.inputValue,
          n = void 0 === i ? "" : i,
          r = t.data,
          a = t.isSelected,
          o = t.label,
          s = t.value;
        return (!qi(e) || !a) && Wi(e, { label: o, value: s, data: r }, n);
      }
      var zi = function (e, t) {
          return e.getOptionLabel(t);
        },
        ji = function (e, t) {
          return e.getOptionValue(t);
        };
      function Ui(e, t, i) {
        return (
          "function" === typeof e.isOptionDisabled && e.isOptionDisabled(t, i)
        );
      }
      function Fi(e, t, i) {
        if (i.indexOf(t) > -1) return !0;
        if ("function" === typeof e.isOptionSelected)
          return e.isOptionSelected(t, i);
        var n = ji(e, t);
        return i.some(function (t) {
          return ji(e, t) === n;
        });
      }
      function Wi(e, t, i) {
        return !e.filterOption || e.filterOption(t, i);
      }
      var qi = function (e) {
          var t = e.hideSelectedOptions,
            i = e.isMulti;
          return void 0 === t ? i : t;
        },
        Vi = 1,
        Hi = (function (e) {
          Ze(i, e);
          var t = tt(i);
          function i(e) {
            var n;
            return (
              Ve(this, i),
              ((n = t.call(this, e)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0,
              }),
              (n.blockOptionHover = !1),
              (n.isComposing = !1),
              (n.commonProps = void 0),
              (n.initialTouchX = 0),
              (n.initialTouchY = 0),
              (n.instancePrefix = ""),
              (n.openAfterFocus = !1),
              (n.scrollToFocusedOptionOnUpdate = !1),
              (n.userIsDragging = void 0),
              (n.controlRef = null),
              (n.getControlRef = function (e) {
                n.controlRef = e;
              }),
              (n.focusedOptionRef = null),
              (n.getFocusedOptionRef = function (e) {
                n.focusedOptionRef = e;
              }),
              (n.menuListRef = null),
              (n.getMenuListRef = function (e) {
                n.menuListRef = e;
              }),
              (n.inputRef = null),
              (n.getInputRef = function (e) {
                n.inputRef = e;
              }),
              (n.focus = n.focusInput),
              (n.blur = n.blurInput),
              (n.onChange = function (e, t) {
                var i = n.props,
                  r = i.onChange,
                  a = i.name;
                (t.name = a), n.ariaOnChange(e, t), r(e, t);
              }),
              (n.setValue = function (e, t, i) {
                var r = n.props,
                  a = r.closeMenuOnSelect,
                  o = r.isMulti,
                  s = r.inputValue;
                n.onInputChange("", { action: "set-value", prevInputValue: s }),
                  a &&
                    (n.setState({ inputIsHiddenAfterUpdate: !o }),
                    n.onMenuClose()),
                  n.setState({ clearFocusValueOnUpdate: !0 }),
                  n.onChange(e, { action: t, option: i });
              }),
              (n.selectOption = function (e) {
                var t = n.props,
                  i = t.blurInputOnSelect,
                  r = t.isMulti,
                  a = t.name,
                  o = n.state.selectValue,
                  s = r && n.isOptionSelected(e, o),
                  l = n.isOptionDisabled(e, o);
                if (s) {
                  var c = n.getOptionValue(e);
                  n.setValue(
                    o.filter(function (e) {
                      return n.getOptionValue(e) !== c;
                    }),
                    "deselect-option",
                    e
                  );
                } else {
                  if (l)
                    return void n.ariaOnChange(e, {
                      action: "select-option",
                      option: e,
                      name: a,
                    });
                  r
                    ? n.setValue([].concat($t(o), [e]), "select-option", e)
                    : n.setValue(e, "select-option");
                }
                i && n.blurInput();
              }),
              (n.removeValue = function (e) {
                var t = n.props.isMulti,
                  i = n.state.selectValue,
                  r = n.getOptionValue(e),
                  a = i.filter(function (e) {
                    return n.getOptionValue(e) !== r;
                  }),
                  o = yt(t, a, a[0] || null);
                n.onChange(o, { action: "remove-value", removedValue: e }),
                  n.focusInput();
              }),
              (n.clearValue = function () {
                var e = n.state.selectValue;
                n.onChange(yt(n.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: e,
                });
              }),
              (n.popValue = function () {
                var e = n.props.isMulti,
                  t = n.state.selectValue,
                  i = t[t.length - 1],
                  r = t.slice(0, t.length - 1),
                  a = yt(e, r, r[0] || null);
                n.onChange(a, { action: "pop-value", removedValue: i });
              }),
              (n.getValue = function () {
                return n.state.selectValue;
              }),
              (n.cx = function () {
                for (
                  var e = arguments.length, t = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  t[i] = arguments[i];
                return at.apply(void 0, [n.props.classNamePrefix].concat(t));
              }),
              (n.getOptionLabel = function (e) {
                return zi(n.props, e);
              }),
              (n.getOptionValue = function (e) {
                return ji(n.props, e);
              }),
              (n.getStyles = function (e, t) {
                var i = xi[e](t);
                i.boxSizing = "border-box";
                var r = n.props.styles[e];
                return r ? r(i, t) : i;
              }),
              (n.getElementId = function (e) {
                return "".concat(n.instancePrefix, "-").concat(e);
              }),
              (n.getComponents = function () {
                return (e = n.props), $e($e({}, Xt), e.components);
                var e;
              }),
              (n.buildCategorizedOptions = function () {
                return Ni(n.props, n.state.selectValue);
              }),
              (n.getCategorizedOptions = function () {
                return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
              }),
              (n.buildFocusableOptions = function () {
                return Bi(n.buildCategorizedOptions());
              }),
              (n.getFocusableOptions = function () {
                return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
              }),
              (n.ariaOnChange = function (e, t) {
                n.setState({ ariaSelection: $e({ value: e }, t) });
              }),
              (n.onMenuMouseDown = function (e) {
                0 === e.button &&
                  (e.stopPropagation(), e.preventDefault(), n.focusInput());
              }),
              (n.onMenuMouseMove = function (e) {
                n.blockOptionHover = !1;
              }),
              (n.onControlMouseDown = function (e) {
                if (!e.defaultPrevented) {
                  var t = n.props.openMenuOnClick;
                  n.state.isFocused
                    ? n.props.menuIsOpen
                      ? "INPUT" !== e.target.tagName &&
                        "TEXTAREA" !== e.target.tagName &&
                        n.onMenuClose()
                      : t && n.openMenu("first")
                    : (t && (n.openAfterFocus = !0), n.focusInput()),
                    "INPUT" !== e.target.tagName &&
                      "TEXTAREA" !== e.target.tagName &&
                      e.preventDefault();
                }
              }),
              (n.onDropdownIndicatorMouseDown = function (e) {
                if (
                  (!e || "mousedown" !== e.type || 0 === e.button) &&
                  !n.props.isDisabled
                ) {
                  var t = n.props,
                    i = t.isMulti,
                    r = t.menuIsOpen;
                  n.focusInput(),
                    r
                      ? (n.setState({ inputIsHiddenAfterUpdate: !i }),
                        n.onMenuClose())
                      : n.openMenu("first"),
                    e.preventDefault();
                }
              }),
              (n.onClearIndicatorMouseDown = function (e) {
                (e && "mousedown" === e.type && 0 !== e.button) ||
                  (n.clearValue(),
                  e.preventDefault(),
                  (n.openAfterFocus = !1),
                  "touchend" === e.type
                    ? n.focusInput()
                    : setTimeout(function () {
                        return n.focusInput();
                      }));
              }),
              (n.onScroll = function (e) {
                "boolean" === typeof n.props.closeMenuOnScroll
                  ? e.target instanceof HTMLElement &&
                    lt(e.target) &&
                    n.props.onMenuClose()
                  : "function" === typeof n.props.closeMenuOnScroll &&
                    n.props.closeMenuOnScroll(e) &&
                    n.props.onMenuClose();
              }),
              (n.onCompositionStart = function () {
                n.isComposing = !0;
              }),
              (n.onCompositionEnd = function () {
                n.isComposing = !1;
              }),
              (n.onTouchStart = function (e) {
                var t = e.touches,
                  i = t && t.item(0);
                i &&
                  ((n.initialTouchX = i.clientX),
                  (n.initialTouchY = i.clientY),
                  (n.userIsDragging = !1));
              }),
              (n.onTouchMove = function (e) {
                var t = e.touches,
                  i = t && t.item(0);
                if (i) {
                  var r = Math.abs(i.clientX - n.initialTouchX),
                    a = Math.abs(i.clientY - n.initialTouchY);
                  n.userIsDragging = r > 5 || a > 5;
                }
              }),
              (n.onTouchEnd = function (e) {
                n.userIsDragging ||
                  (n.controlRef &&
                    !n.controlRef.contains(e.target) &&
                    n.menuListRef &&
                    !n.menuListRef.contains(e.target) &&
                    n.blurInput(),
                  (n.initialTouchX = 0),
                  (n.initialTouchY = 0));
              }),
              (n.onControlTouchEnd = function (e) {
                n.userIsDragging || n.onControlMouseDown(e);
              }),
              (n.onClearIndicatorTouchEnd = function (e) {
                n.userIsDragging || n.onClearIndicatorMouseDown(e);
              }),
              (n.onDropdownIndicatorTouchEnd = function (e) {
                n.userIsDragging || n.onDropdownIndicatorMouseDown(e);
              }),
              (n.handleInputChange = function (e) {
                var t = n.props.inputValue,
                  i = e.currentTarget.value;
                n.setState({ inputIsHiddenAfterUpdate: !1 }),
                  n.onInputChange(i, {
                    action: "input-change",
                    prevInputValue: t,
                  }),
                  n.props.menuIsOpen || n.onMenuOpen();
              }),
              (n.onInputFocus = function (e) {
                n.props.onFocus && n.props.onFocus(e),
                  n.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                  (n.openAfterFocus || n.props.openMenuOnFocus) &&
                    n.openMenu("first"),
                  (n.openAfterFocus = !1);
              }),
              (n.onInputBlur = function (e) {
                var t = n.props.inputValue;
                n.menuListRef && n.menuListRef.contains(document.activeElement)
                  ? n.inputRef.focus()
                  : (n.props.onBlur && n.props.onBlur(e),
                    n.onInputChange("", {
                      action: "input-blur",
                      prevInputValue: t,
                    }),
                    n.onMenuClose(),
                    n.setState({ focusedValue: null, isFocused: !1 }));
              }),
              (n.onOptionHover = function (e) {
                n.blockOptionHover ||
                  n.state.focusedOption === e ||
                  n.setState({ focusedOption: e });
              }),
              (n.shouldHideSelectedOptions = function () {
                return qi(n.props);
              }),
              (n.onKeyDown = function (e) {
                var t = n.props,
                  i = t.isMulti,
                  r = t.backspaceRemovesValue,
                  a = t.escapeClearsValue,
                  o = t.inputValue,
                  s = t.isClearable,
                  l = t.isDisabled,
                  c = t.menuIsOpen,
                  u = t.onKeyDown,
                  d = t.tabSelectsValue,
                  p = t.openMenuOnFocus,
                  m = n.state,
                  h = m.focusedOption,
                  g = m.focusedValue,
                  f = m.selectValue;
                if (
                  !l &&
                  ("function" !== typeof u || (u(e), !e.defaultPrevented))
                ) {
                  switch (((n.blockOptionHover = !0), e.key)) {
                    case "ArrowLeft":
                      if (!i || o) return;
                      n.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!i || o) return;
                      n.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (o) return;
                      if (g) n.removeValue(g);
                      else {
                        if (!r) return;
                        i ? n.popValue() : s && n.clearValue();
                      }
                      break;
                    case "Tab":
                      if (n.isComposing) return;
                      if (
                        e.shiftKey ||
                        !c ||
                        !d ||
                        !h ||
                        (p && n.isOptionSelected(h, f))
                      )
                        return;
                      n.selectOption(h);
                      break;
                    case "Enter":
                      if (229 === e.keyCode) break;
                      if (c) {
                        if (!h) return;
                        if (n.isComposing) return;
                        n.selectOption(h);
                        break;
                      }
                      return;
                    case "Escape":
                      c
                        ? (n.setState({ inputIsHiddenAfterUpdate: !1 }),
                          n.onInputChange("", {
                            action: "menu-close",
                            prevInputValue: o,
                          }),
                          n.onMenuClose())
                        : s && a && n.clearValue();
                      break;
                    case " ":
                      if (o) return;
                      if (!c) {
                        n.openMenu("first");
                        break;
                      }
                      if (!h) return;
                      n.selectOption(h);
                      break;
                    case "ArrowUp":
                      c ? n.focusOption("up") : n.openMenu("last");
                      break;
                    case "ArrowDown":
                      c ? n.focusOption("down") : n.openMenu("first");
                      break;
                    case "PageUp":
                      if (!c) return;
                      n.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!c) return;
                      n.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!c) return;
                      n.focusOption("first");
                      break;
                    case "End":
                      if (!c) return;
                      n.focusOption("last");
                      break;
                    default:
                      return;
                  }
                  e.preventDefault();
                }
              }),
              (n.instancePrefix =
                "react-select-" + (n.props.instanceId || ++Vi)),
              (n.state.selectValue = ot(e.value)),
              n
            );
          }
          return (
            Ge(
              i,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.startListeningComposition(),
                      this.startListeningToTouch(),
                      this.props.closeMenuOnScroll &&
                        document &&
                        document.addEventListener &&
                        document.addEventListener("scroll", this.onScroll, !0),
                      this.props.autoFocus && this.focusInput();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    var t = this.props,
                      i = t.isDisabled,
                      n = t.menuIsOpen,
                      r = this.state.isFocused;
                    ((r && !i && e.isDisabled) || (r && n && !e.menuIsOpen)) &&
                      this.focusInput(),
                      r &&
                        i &&
                        !e.isDisabled &&
                        this.setState({ isFocused: !1 }, this.onMenuClose),
                      this.menuListRef &&
                        this.focusedOptionRef &&
                        this.scrollToFocusedOptionOnUpdate &&
                        (!(function (e, t) {
                          var i = e.getBoundingClientRect(),
                            n = t.getBoundingClientRect(),
                            r = t.offsetHeight / 3;
                          n.bottom + r > i.bottom
                            ? ut(
                                e,
                                Math.min(
                                  t.offsetTop +
                                    t.clientHeight -
                                    e.offsetHeight +
                                    r,
                                  e.scrollHeight
                                )
                              )
                            : n.top - r < i.top &&
                              ut(e, Math.max(t.offsetTop - r, 0));
                        })(this.menuListRef, this.focusedOptionRef),
                        (this.scrollToFocusedOptionOnUpdate = !1));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.stopListeningComposition(),
                      this.stopListeningToTouch(),
                      document.removeEventListener("scroll", this.onScroll, !0);
                  },
                },
                {
                  key: "onMenuOpen",
                  value: function () {
                    this.props.onMenuOpen();
                  },
                },
                {
                  key: "onMenuClose",
                  value: function () {
                    this.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: this.props.inputValue,
                    }),
                      this.props.onMenuClose();
                  },
                },
                {
                  key: "onInputChange",
                  value: function (e, t) {
                    this.props.onInputChange(e, t);
                  },
                },
                {
                  key: "focusInput",
                  value: function () {
                    this.inputRef && this.inputRef.focus();
                  },
                },
                {
                  key: "blurInput",
                  value: function () {
                    this.inputRef && this.inputRef.blur();
                  },
                },
                {
                  key: "openMenu",
                  value: function (e) {
                    var t = this,
                      i = this.state,
                      n = i.selectValue,
                      r = i.isFocused,
                      a = this.buildFocusableOptions(),
                      o = "first" === e ? 0 : a.length - 1;
                    if (!this.props.isMulti) {
                      var s = a.indexOf(n[0]);
                      s > -1 && (o = s);
                    }
                    (this.scrollToFocusedOptionOnUpdate = !(
                      r && this.menuListRef
                    )),
                      this.setState(
                        {
                          inputIsHiddenAfterUpdate: !1,
                          focusedValue: null,
                          focusedOption: a[o],
                        },
                        function () {
                          return t.onMenuOpen();
                        }
                      );
                  },
                },
                {
                  key: "focusValue",
                  value: function (e) {
                    var t = this.state,
                      i = t.selectValue,
                      n = t.focusedValue;
                    if (this.props.isMulti) {
                      this.setState({ focusedOption: null });
                      var r = i.indexOf(n);
                      n || (r = -1);
                      var a = i.length - 1,
                        o = -1;
                      if (i.length) {
                        switch (e) {
                          case "previous":
                            o = 0 === r ? 0 : -1 === r ? a : r - 1;
                            break;
                          case "next":
                            r > -1 && r < a && (o = r + 1);
                        }
                        this.setState({
                          inputIsHidden: -1 !== o,
                          focusedValue: i[o],
                        });
                      }
                    }
                  },
                },
                {
                  key: "focusOption",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "first",
                      t = this.props.pageSize,
                      i = this.state.focusedOption,
                      n = this.getFocusableOptions();
                    if (n.length) {
                      var r = 0,
                        a = n.indexOf(i);
                      i || (a = -1),
                        "up" === e
                          ? (r = a > 0 ? a - 1 : n.length - 1)
                          : "down" === e
                          ? (r = (a + 1) % n.length)
                          : "pageup" === e
                          ? (r = a - t) < 0 && (r = 0)
                          : "pagedown" === e
                          ? (r = a + t) > n.length - 1 && (r = n.length - 1)
                          : "last" === e && (r = n.length - 1),
                        (this.scrollToFocusedOptionOnUpdate = !0),
                        this.setState({
                          focusedOption: n[r],
                          focusedValue: null,
                        });
                    }
                  },
                },
                {
                  key: "getTheme",
                  value: function () {
                    return this.props.theme
                      ? "function" === typeof this.props.theme
                        ? this.props.theme(Ei)
                        : $e($e({}, Ei), this.props.theme)
                      : Ei;
                  },
                },
                {
                  key: "getCommonProps",
                  value: function () {
                    var e = this.clearValue,
                      t = this.cx,
                      i = this.getStyles,
                      n = this.getValue,
                      r = this.selectOption,
                      a = this.setValue,
                      o = this.props,
                      s = o.isMulti,
                      l = o.isRtl,
                      c = o.options;
                    return {
                      clearValue: e,
                      cx: t,
                      getStyles: i,
                      getValue: n,
                      hasValue: this.hasValue(),
                      isMulti: s,
                      isRtl: l,
                      options: c,
                      selectOption: r,
                      selectProps: o,
                      setValue: a,
                      theme: this.getTheme(),
                    };
                  },
                },
                {
                  key: "hasValue",
                  value: function () {
                    return this.state.selectValue.length > 0;
                  },
                },
                {
                  key: "hasOptions",
                  value: function () {
                    return !!this.getFocusableOptions().length;
                  },
                },
                {
                  key: "isClearable",
                  value: function () {
                    var e = this.props,
                      t = e.isClearable,
                      i = e.isMulti;
                    return void 0 === t ? i : t;
                  },
                },
                {
                  key: "isOptionDisabled",
                  value: function (e, t) {
                    return Ui(this.props, e, t);
                  },
                },
                {
                  key: "isOptionSelected",
                  value: function (e, t) {
                    return Fi(this.props, e, t);
                  },
                },
                {
                  key: "filterOption",
                  value: function (e, t) {
                    return Wi(this.props, e, t);
                  },
                },
                {
                  key: "formatOptionLabel",
                  value: function (e, t) {
                    if ("function" === typeof this.props.formatOptionLabel) {
                      var i = this.props.inputValue,
                        n = this.state.selectValue;
                      return this.props.formatOptionLabel(e, {
                        context: t,
                        inputValue: i,
                        selectValue: n,
                      });
                    }
                    return this.getOptionLabel(e);
                  },
                },
                {
                  key: "formatGroupLabel",
                  value: function (e) {
                    return this.props.formatGroupLabel(e);
                  },
                },
                {
                  key: "startListeningComposition",
                  value: function () {
                    document &&
                      document.addEventListener &&
                      (document.addEventListener(
                        "compositionstart",
                        this.onCompositionStart,
                        !1
                      ),
                      document.addEventListener(
                        "compositionend",
                        this.onCompositionEnd,
                        !1
                      ));
                  },
                },
                {
                  key: "stopListeningComposition",
                  value: function () {
                    document &&
                      document.removeEventListener &&
                      (document.removeEventListener(
                        "compositionstart",
                        this.onCompositionStart
                      ),
                      document.removeEventListener(
                        "compositionend",
                        this.onCompositionEnd
                      ));
                  },
                },
                {
                  key: "startListeningToTouch",
                  value: function () {
                    document &&
                      document.addEventListener &&
                      (document.addEventListener(
                        "touchstart",
                        this.onTouchStart,
                        !1
                      ),
                      document.addEventListener(
                        "touchmove",
                        this.onTouchMove,
                        !1
                      ),
                      document.addEventListener(
                        "touchend",
                        this.onTouchEnd,
                        !1
                      ));
                  },
                },
                {
                  key: "stopListeningToTouch",
                  value: function () {
                    document &&
                      document.removeEventListener &&
                      (document.removeEventListener(
                        "touchstart",
                        this.onTouchStart
                      ),
                      document.removeEventListener(
                        "touchmove",
                        this.onTouchMove
                      ),
                      document.removeEventListener(
                        "touchend",
                        this.onTouchEnd
                      ));
                  },
                },
                {
                  key: "renderInput",
                  value: function () {
                    var e = this.props,
                      t = e.isDisabled,
                      i = e.isSearchable,
                      a = e.inputId,
                      o = e.inputValue,
                      s = e.tabIndex,
                      l = e.form,
                      c = e.menuIsOpen,
                      u = this.getComponents().Input,
                      d = this.state,
                      p = d.inputIsHidden,
                      m = d.ariaSelection,
                      h = this.commonProps,
                      g = a || this.getElementId("input"),
                      f = $e(
                        $e(
                          $e(
                            {
                              "aria-autocomplete": "list",
                              "aria-expanded": c,
                              "aria-haspopup": !0,
                              "aria-errormessage":
                                this.props["aria-errormessage"],
                              "aria-invalid": this.props["aria-invalid"],
                              "aria-label": this.props["aria-label"],
                              "aria-labelledby": this.props["aria-labelledby"],
                              role: "combobox",
                            },
                            c && {
                              "aria-controls": this.getElementId("listbox"),
                              "aria-owns": this.getElementId("listbox"),
                            }
                          ),
                          !i && { "aria-readonly": !0 }
                        ),
                        this.hasValue()
                          ? "initial-input-focus" ===
                              (null === m || void 0 === m
                                ? void 0
                                : m.action) && {
                              "aria-describedby":
                                this.getElementId("live-region"),
                            }
                          : {
                              "aria-describedby":
                                this.getElementId("placeholder"),
                            }
                      );
                    return i
                      ? r.createElement(
                          u,
                          n(
                            {},
                            h,
                            {
                              autoCapitalize: "none",
                              autoComplete: "off",
                              autoCorrect: "off",
                              id: g,
                              innerRef: this.getInputRef,
                              isDisabled: t,
                              isHidden: p,
                              onBlur: this.onInputBlur,
                              onChange: this.handleInputChange,
                              onFocus: this.onInputFocus,
                              spellCheck: "false",
                              tabIndex: s,
                              form: l,
                              type: "text",
                              value: o,
                            },
                            f
                          )
                        )
                      : r.createElement(
                          bi,
                          n(
                            {
                              id: g,
                              innerRef: this.getInputRef,
                              onBlur: this.onInputBlur,
                              onChange: nt,
                              onFocus: this.onInputFocus,
                              disabled: t,
                              tabIndex: s,
                              inputMode: "none",
                              form: l,
                              value: "",
                            },
                            f
                          )
                        );
                  },
                },
                {
                  key: "renderPlaceholderOrValue",
                  value: function () {
                    var e = this,
                      t = this.getComponents(),
                      i = t.MultiValue,
                      a = t.MultiValueContainer,
                      o = t.MultiValueLabel,
                      s = t.MultiValueRemove,
                      l = t.SingleValue,
                      c = t.Placeholder,
                      u = this.commonProps,
                      d = this.props,
                      p = d.controlShouldRenderValue,
                      m = d.isDisabled,
                      h = d.isMulti,
                      g = d.inputValue,
                      f = d.placeholder,
                      b = this.state,
                      _ = b.selectValue,
                      y = b.focusedValue,
                      v = b.isFocused;
                    if (!this.hasValue() || !p)
                      return g
                        ? null
                        : r.createElement(
                            c,
                            n({}, u, {
                              key: "placeholder",
                              isDisabled: m,
                              isFocused: v,
                              innerProps: {
                                id: this.getElementId("placeholder"),
                              },
                            }),
                            f
                          );
                    if (h)
                      return _.map(function (t, l) {
                        var c = t === y,
                          d = ""
                            .concat(e.getOptionLabel(t), "-")
                            .concat(e.getOptionValue(t));
                        return r.createElement(
                          i,
                          n({}, u, {
                            components: { Container: a, Label: o, Remove: s },
                            isFocused: c,
                            isDisabled: m,
                            key: d,
                            index: l,
                            removeProps: {
                              onClick: function () {
                                return e.removeValue(t);
                              },
                              onTouchEnd: function () {
                                return e.removeValue(t);
                              },
                              onMouseDown: function (e) {
                                e.preventDefault();
                              },
                            },
                            data: t,
                          }),
                          e.formatOptionLabel(t, "value")
                        );
                      });
                    if (g) return null;
                    var k = _[0];
                    return r.createElement(
                      l,
                      n({}, u, { data: k, isDisabled: m }),
                      this.formatOptionLabel(k, "value")
                    );
                  },
                },
                {
                  key: "renderClearIndicator",
                  value: function () {
                    var e = this.getComponents().ClearIndicator,
                      t = this.commonProps,
                      i = this.props,
                      a = i.isDisabled,
                      o = i.isLoading,
                      s = this.state.isFocused;
                    if (!this.isClearable() || !e || a || !this.hasValue() || o)
                      return null;
                    var l = {
                      onMouseDown: this.onClearIndicatorMouseDown,
                      onTouchEnd: this.onClearIndicatorTouchEnd,
                      "aria-hidden": "true",
                    };
                    return r.createElement(
                      e,
                      n({}, t, { innerProps: l, isFocused: s })
                    );
                  },
                },
                {
                  key: "renderLoadingIndicator",
                  value: function () {
                    var e = this.getComponents().LoadingIndicator,
                      t = this.commonProps,
                      i = this.props,
                      a = i.isDisabled,
                      o = i.isLoading,
                      s = this.state.isFocused;
                    if (!e || !o) return null;
                    return r.createElement(
                      e,
                      n({}, t, {
                        innerProps: { "aria-hidden": "true" },
                        isDisabled: a,
                        isFocused: s,
                      })
                    );
                  },
                },
                {
                  key: "renderIndicatorSeparator",
                  value: function () {
                    var e = this.getComponents(),
                      t = e.DropdownIndicator,
                      i = e.IndicatorSeparator;
                    if (!t || !i) return null;
                    var a = this.commonProps,
                      o = this.props.isDisabled,
                      s = this.state.isFocused;
                    return r.createElement(
                      i,
                      n({}, a, { isDisabled: o, isFocused: s })
                    );
                  },
                },
                {
                  key: "renderDropdownIndicator",
                  value: function () {
                    var e = this.getComponents().DropdownIndicator;
                    if (!e) return null;
                    var t = this.commonProps,
                      i = this.props.isDisabled,
                      a = this.state.isFocused,
                      o = {
                        onMouseDown: this.onDropdownIndicatorMouseDown,
                        onTouchEnd: this.onDropdownIndicatorTouchEnd,
                        "aria-hidden": "true",
                      };
                    return r.createElement(
                      e,
                      n({}, t, { innerProps: o, isDisabled: i, isFocused: a })
                    );
                  },
                },
                {
                  key: "renderMenu",
                  value: function () {
                    var e = this,
                      t = this.getComponents(),
                      i = t.Group,
                      a = t.GroupHeading,
                      o = t.Menu,
                      s = t.MenuList,
                      l = t.MenuPortal,
                      c = t.LoadingMessage,
                      u = t.NoOptionsMessage,
                      d = t.Option,
                      p = this.commonProps,
                      m = this.state.focusedOption,
                      h = this.props,
                      g = h.captureMenuScroll,
                      f = h.inputValue,
                      b = h.isLoading,
                      _ = h.loadingMessage,
                      y = h.minMenuHeight,
                      v = h.maxMenuHeight,
                      k = h.menuIsOpen,
                      w = h.menuPlacement,
                      S = h.menuPosition,
                      C = h.menuPortalTarget,
                      R = h.menuShouldBlockScroll,
                      A = h.menuShouldScrollIntoView,
                      P = h.noOptionsMessage,
                      O = h.onMenuScrollToTop,
                      T = h.onMenuScrollToBottom;
                    if (!k) return null;
                    var x,
                      I = function (t, i) {
                        var a = t.type,
                          o = t.data,
                          s = t.isDisabled,
                          l = t.isSelected,
                          c = t.label,
                          u = t.value,
                          h = m === o,
                          g = s
                            ? void 0
                            : function () {
                                return e.onOptionHover(o);
                              },
                          f = s
                            ? void 0
                            : function () {
                                return e.selectOption(o);
                              },
                          b = ""
                            .concat(e.getElementId("option"), "-")
                            .concat(i),
                          _ = {
                            id: b,
                            onClick: f,
                            onMouseMove: g,
                            onMouseOver: g,
                            tabIndex: -1,
                          };
                        return r.createElement(
                          d,
                          n({}, p, {
                            innerProps: _,
                            data: o,
                            isDisabled: s,
                            isSelected: l,
                            key: b,
                            label: c,
                            type: a,
                            value: u,
                            isFocused: h,
                            innerRef: h ? e.getFocusedOptionRef : void 0,
                          }),
                          e.formatOptionLabel(t.data, "menu")
                        );
                      };
                    if (this.hasOptions())
                      x = this.getCategorizedOptions().map(function (t) {
                        if ("group" === t.type) {
                          var o = t.data,
                            s = t.options,
                            l = t.index,
                            c = ""
                              .concat(e.getElementId("group"), "-")
                              .concat(l),
                            u = "".concat(c, "-heading");
                          return r.createElement(
                            i,
                            n({}, p, {
                              key: c,
                              data: o,
                              options: s,
                              Heading: a,
                              headingProps: { id: u, data: t.data },
                              label: e.formatGroupLabel(t.data),
                            }),
                            t.options.map(function (e) {
                              return I(e, "".concat(l, "-").concat(e.index));
                            })
                          );
                        }
                        if ("option" === t.type)
                          return I(t, "".concat(t.index));
                      });
                    else if (b) {
                      var E = _({ inputValue: f });
                      if (null === E) return null;
                      x = r.createElement(c, p, E);
                    } else {
                      var M = P({ inputValue: f });
                      if (null === M) return null;
                      x = r.createElement(u, p, M);
                    }
                    var D = {
                        minMenuHeight: y,
                        maxMenuHeight: v,
                        menuPlacement: w,
                        menuPosition: S,
                        menuShouldScrollIntoView: A,
                      },
                      N = r.createElement(St, n({}, p, D), function (t) {
                        var i = t.ref,
                          a = t.placerProps,
                          l = a.placement,
                          c = a.maxHeight;
                        return r.createElement(
                          o,
                          n({}, p, D, {
                            innerRef: i,
                            innerProps: {
                              onMouseDown: e.onMenuMouseDown,
                              onMouseMove: e.onMenuMouseMove,
                              id: e.getElementId("listbox"),
                            },
                            isLoading: b,
                            placement: l,
                          }),
                          r.createElement(
                            Ti,
                            {
                              captureEnabled: g,
                              onTopArrive: O,
                              onBottomArrive: T,
                              lockEnabled: R,
                            },
                            function (t) {
                              return r.createElement(
                                s,
                                n({}, p, {
                                  innerRef: function (i) {
                                    e.getMenuListRef(i), t(i);
                                  },
                                  isLoading: b,
                                  maxHeight: c,
                                  focusedOption: m,
                                }),
                                x
                              );
                            }
                          )
                        );
                      });
                    return C || "fixed" === S
                      ? r.createElement(
                          l,
                          n({}, p, {
                            appendTo: C,
                            controlElement: this.controlRef,
                            menuPlacement: w,
                            menuPosition: S,
                          }),
                          N
                        )
                      : N;
                  },
                },
                {
                  key: "renderFormField",
                  value: function () {
                    var e = this,
                      t = this.props,
                      i = t.delimiter,
                      n = t.isDisabled,
                      a = t.isMulti,
                      o = t.name,
                      s = this.state.selectValue;
                    if (o && !n) {
                      if (a) {
                        if (i) {
                          var l = s
                            .map(function (t) {
                              return e.getOptionValue(t);
                            })
                            .join(i);
                          return r.createElement("input", {
                            name: o,
                            type: "hidden",
                            value: l,
                          });
                        }
                        var c =
                          s.length > 0
                            ? s.map(function (t, i) {
                                return r.createElement("input", {
                                  key: "i-".concat(i),
                                  name: o,
                                  type: "hidden",
                                  value: e.getOptionValue(t),
                                });
                              })
                            : r.createElement("input", {
                                name: o,
                                type: "hidden",
                              });
                        return r.createElement("div", null, c);
                      }
                      var u = s[0] ? this.getOptionValue(s[0]) : "";
                      return r.createElement("input", {
                        name: o,
                        type: "hidden",
                        value: u,
                      });
                    }
                  },
                },
                {
                  key: "renderLiveRegion",
                  value: function () {
                    var e = this.commonProps,
                      t = this.state,
                      i = t.ariaSelection,
                      a = t.focusedOption,
                      o = t.focusedValue,
                      s = t.isFocused,
                      l = t.selectValue,
                      c = this.getFocusableOptions();
                    return r.createElement(
                      ai,
                      n({}, e, {
                        id: this.getElementId("live-region"),
                        ariaSelection: i,
                        focusedOption: a,
                        focusedValue: o,
                        isFocused: s,
                        selectValue: l,
                        focusableOptions: c,
                      })
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.getComponents(),
                      t = e.Control,
                      i = e.IndicatorsContainer,
                      a = e.SelectContainer,
                      o = e.ValueContainer,
                      s = this.props,
                      l = s.className,
                      c = s.id,
                      u = s.isDisabled,
                      d = s.menuIsOpen,
                      p = this.state.isFocused,
                      m = (this.commonProps = this.getCommonProps());
                    return r.createElement(
                      a,
                      n({}, m, {
                        className: l,
                        innerProps: { id: c, onKeyDown: this.onKeyDown },
                        isDisabled: u,
                        isFocused: p,
                      }),
                      this.renderLiveRegion(),
                      r.createElement(
                        t,
                        n({}, m, {
                          innerRef: this.getControlRef,
                          innerProps: {
                            onMouseDown: this.onControlMouseDown,
                            onTouchEnd: this.onControlTouchEnd,
                          },
                          isDisabled: u,
                          isFocused: p,
                          menuIsOpen: d,
                        }),
                        r.createElement(
                          o,
                          n({}, m, { isDisabled: u }),
                          this.renderPlaceholderOrValue(),
                          this.renderInput()
                        ),
                        r.createElement(
                          i,
                          n({}, m, { isDisabled: u }),
                          this.renderClearIndicator(),
                          this.renderLoadingIndicator(),
                          this.renderIndicatorSeparator(),
                          this.renderDropdownIndicator()
                        )
                      ),
                      this.renderMenu(),
                      this.renderFormField()
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var i = t.prevProps,
                      n = t.clearFocusValueOnUpdate,
                      r = t.inputIsHiddenAfterUpdate,
                      a = t.ariaSelection,
                      o = t.isFocused,
                      s = t.prevWasFocused,
                      l = e.options,
                      c = e.value,
                      u = e.menuIsOpen,
                      d = e.inputValue,
                      p = e.isMulti,
                      m = ot(c),
                      h = {};
                    if (
                      i &&
                      (c !== i.value ||
                        l !== i.options ||
                        u !== i.menuIsOpen ||
                        d !== i.inputValue)
                    ) {
                      var g = u
                          ? (function (e, t) {
                              return Bi(Ni(e, t));
                            })(e, m)
                          : [],
                        f = n
                          ? (function (e, t) {
                              var i = e.focusedValue,
                                n = e.selectValue.indexOf(i);
                              if (n > -1) {
                                if (t.indexOf(i) > -1) return i;
                                if (n < t.length) return t[n];
                              }
                              return null;
                            })(t, m)
                          : null,
                        b = (function (e, t) {
                          var i = e.focusedOption;
                          return i && t.indexOf(i) > -1 ? i : t[0];
                        })(t, g);
                      h = {
                        selectValue: m,
                        focusedOption: b,
                        focusedValue: f,
                        clearFocusValueOnUpdate: !1,
                      };
                    }
                    var _ =
                        null != r && e !== i
                          ? {
                              inputIsHidden: r,
                              inputIsHiddenAfterUpdate: void 0,
                            }
                          : {},
                      y = a,
                      v = o && s;
                    return (
                      o &&
                        !v &&
                        ((y = {
                          value: yt(p, m, m[0] || null),
                          options: m,
                          action: "initial-input-focus",
                        }),
                        (v = !s)),
                      "initial-input-focus" ===
                        (null === a || void 0 === a ? void 0 : a.action) &&
                        (y = null),
                      $e(
                        $e($e({}, h), _),
                        {},
                        { prevProps: e, ariaSelection: y, prevWasFocused: v }
                      )
                    );
                  },
                },
              ]
            ),
            i
          );
        })(r.Component);
      Hi.defaultProps = Mi;
      var Gi = (0, r.forwardRef)(function (e, t) {
          var i = (function (e) {
            var t = e.defaultInputValue,
              i = void 0 === t ? "" : t,
              n = e.defaultMenuIsOpen,
              a = void 0 !== n && n,
              o = e.defaultValue,
              s = void 0 === o ? null : o,
              l = e.inputValue,
              c = e.menuIsOpen,
              u = e.onChange,
              d = e.onInputChange,
              p = e.onMenuClose,
              m = e.onMenuOpen,
              h = e.value,
              g = je(e, Qt),
              f = We((0, r.useState)(void 0 !== l ? l : i), 2),
              b = f[0],
              _ = f[1],
              y = We((0, r.useState)(void 0 !== c ? c : a), 2),
              v = y[0],
              k = y[1],
              w = We((0, r.useState)(void 0 !== h ? h : s), 2),
              S = w[0],
              C = w[1],
              R = (0, r.useCallback)(
                function (e, t) {
                  "function" === typeof u && u(e, t), C(e);
                },
                [u]
              ),
              A = (0, r.useCallback)(
                function (e, t) {
                  var i;
                  "function" === typeof d && (i = d(e, t)),
                    _(void 0 !== i ? i : e);
                },
                [d]
              ),
              P = (0, r.useCallback)(
                function () {
                  "function" === typeof m && m(), k(!0);
                },
                [m]
              ),
              O = (0, r.useCallback)(
                function () {
                  "function" === typeof p && p(), k(!1);
                },
                [p]
              ),
              T = void 0 !== l ? l : b,
              x = void 0 !== c ? c : v,
              I = void 0 !== h ? h : S;
            return $e(
              $e({}, g),
              {},
              {
                inputValue: T,
                menuIsOpen: x,
                onChange: R,
                onInputChange: A,
                onMenuClose: O,
                onMenuOpen: P,
                value: I,
              }
            );
          })(e);
          return r.createElement(Hi, n({ ref: t }, i));
        }),
        Ki = (r.Component, Gi);
    },
    23451: function (e, t, i) {
      var n;
      !(function (r, a) {
        "use strict";
        var o = "function",
          s = "undefined",
          l = "object",
          c = "string",
          u = "model",
          d = "name",
          p = "type",
          m = "vendor",
          h = "version",
          g = "architecture",
          f = "console",
          b = "mobile",
          _ = "tablet",
          y = "smarttv",
          v = "wearable",
          k = "embedded",
          w = "Amazon",
          S = "Apple",
          C = "ASUS",
          R = "BlackBerry",
          A = "Firefox",
          P = "Google",
          O = "Huawei",
          T = "LG",
          x = "Microsoft",
          I = "Motorola",
          E = "Opera",
          M = "Samsung",
          D = "Sony",
          N = "Xiaomi",
          B = "Zebra",
          L = "Facebook",
          z = function (e) {
            for (var t = {}, i = 0; i < e.length; i++)
              t[e[i].toUpperCase()] = e[i];
            return t;
          },
          j = function (e, t) {
            return typeof e === c && -1 !== U(t).indexOf(U(e));
          },
          U = function (e) {
            return e.toLowerCase();
          },
          F = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                typeof t === s ? e : e.substring(0, 255)
              );
          },
          W = function (e, t) {
            for (var i, n, r, s, c, u, d = 0; d < t.length && !c; ) {
              var p = t[d],
                m = t[d + 1];
              for (i = n = 0; i < p.length && !c; )
                if ((c = p[i++].exec(e)))
                  for (r = 0; r < m.length; r++)
                    (u = c[++n]),
                      typeof (s = m[r]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == o
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== o || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : a)
                            : (this[s[0]] = u ? s[1].call(this, u, s[2]) : a)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : a)
                        : (this[s] = u || a);
              d += 2;
            }
          },
          q = function (e, t) {
            for (var i in t)
              if (typeof t[i] === l && t[i].length > 0) {
                for (var n = 0; n < t[i].length; n++)
                  if (j(t[i][n], e)) return "?" === i ? a : i;
              } else if (j(t[i], e)) return "?" === i ? a : i;
            return e;
          },
          V = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          H = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [h, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [h, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, h],
              [/opios[\/ ]+([\w\.]+)/i],
              [h, [d, "Opera Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [h, [d, E]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, h],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [h, [d, "UCBrowser"]],
              [/\bqbcore\/([\w\.]+)/i],
              [h, [d, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [h, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [h, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [h, [d, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [h, [d, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure Browser"], h],
              [/\bfocus\/([\w\.]+)/i],
              [h, [d, "Firefox Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [h, [d, "Opera Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [h, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [h, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [h, [d, "Opera Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [h, [d, "MIUI Browser"]],
              [/fxios\/([-\w\.]+)/i],
              [h, [d, A]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360 Browser"]],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Browser"], h],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], h],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, h],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, L], h],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [d, h],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [h, [d, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [h, [d, "Chrome Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, "Chrome WebView"], h],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [h, [d, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, h],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              [h, [d, "Mobile Safari"]],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              [h, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  h,
                  q,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, h],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], h],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [h, [d, "Firefox Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [d, h],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[g, "amd64"]],
              [/(ia32(?=;))/i],
              [[g, U]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[g, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[g, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[g, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[g, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[g, /ower/, "", U]],
              [/(sun4\w)[;\)]/i],
              [[g, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[g, U]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [u, [m, M], [p, _]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [u, [m, M], [p, b]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [u, [m, S], [p, b]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [u, [m, S], [p, _]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [u, [m, O], [p, _]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              [u, [m, O], [p, b]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [u, /_/g, " "],
                [m, N],
                [p, b],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [u, /_/g, " "],
                [m, N],
                [p, _],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [u, [m, "OPPO"], [p, b]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [u, [m, "Vivo"], [p, b]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [u, [m, "Realme"], [p, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [u, [m, I], [p, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [u, [m, I], [p, _]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [u, [m, T], [p, _]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [u, [m, T], [p, b]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [u, [m, "Lenovo"], [p, _]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [u, /_/g, " "],
                [m, "Nokia"],
                [p, b],
              ],
              [/(pixel c)\b/i],
              [u, [m, P], [p, _]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [u, [m, P], [p, b]],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [u, [m, D], [p, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [u, "Xperia Tablet"],
                [m, D],
                [p, _],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [u, [m, "OnePlus"], [p, b]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [u, [m, w], [p, _]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [u, /(.+)/g, "Fire Phone $1"],
                [m, w],
                [p, b],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [u, m, [p, _]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [u, [m, R], [p, b]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [u, [m, C], [p, _]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [u, [m, C], [p, b]],
              [/(nexus 9)/i],
              [u, [m, "HTC"], [p, _]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              [m, [u, /_/g, " "], [p, b]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [u, [m, "Acer"], [p, _]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [u, [m, "Meizu"], [p, b]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [u, [m, "Sharp"], [p, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [m, u, [p, b]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [m, u, [p, _]],
              [/(surface duo)/i],
              [u, [m, x], [p, _]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [u, [m, "Fairphone"], [p, b]],
              [/(u304aa)/i],
              [u, [m, "AT&T"], [p, b]],
              [/\bsie-(\w*)/i],
              [u, [m, "Siemens"], [p, b]],
              [/\b(rct\w+) b/i],
              [u, [m, "RCA"], [p, _]],
              [/\b(venue[\d ]{2,7}) b/i],
              [u, [m, "Dell"], [p, _]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [u, [m, "Verizon"], [p, _]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [u, [m, "Barnes & Noble"], [p, _]],
              [/\b(tm\d{3}\w+) b/i],
              [u, [m, "NuVision"], [p, _]],
              [/\b(k88) b/i],
              [u, [m, "ZTE"], [p, _]],
              [/\b(nx\d{3}j) b/i],
              [u, [m, "ZTE"], [p, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [u, [m, "Swiss"], [p, b]],
              [/\b(zur\d{3}) b/i],
              [u, [m, "Swiss"], [p, _]],
              [/\b((zeki)?tb.*\b) b/i],
              [u, [m, "Zeki"], [p, _]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[m, "Dragon Touch"], u, [p, _]],
              [/\b(ns-?\w{0,9}) b/i],
              [u, [m, "Insignia"], [p, _]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [u, [m, "NextBook"], [p, _]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[m, "Voice"], u, [p, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[m, "LvTel"], u, [p, b]],
              [/\b(ph-1) /i],
              [u, [m, "Essential"], [p, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [u, [m, "Envizen"], [p, _]],
              [/\b(trio[-\w\. ]+) b/i],
              [u, [m, "MachSpeed"], [p, _]],
              [/\btu_(1491) b/i],
              [u, [m, "Rotor"], [p, _]],
              [/(shield[\w ]+) b/i],
              [u, [m, "Nvidia"], [p, _]],
              [/(sprint) (\w+)/i],
              [m, u, [p, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [u, /\./g, " "],
                [m, x],
                [p, b],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [u, [m, B], [p, _]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [u, [m, B], [p, b]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, u, [p, f]],
              [/droid.+; (shield) bui/i],
              [u, [m, "Nvidia"], [p, f]],
              [/(playstation [345portablevi]+)/i],
              [u, [m, D], [p, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [u, [m, x], [p, f]],
              [/smart-tv.+(samsung)/i],
              [m, [p, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [u, /^/, "SmartTV"],
                [m, M],
                [p, y],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, T],
                [p, y],
              ],
              [/(apple) ?tv/i],
              [m, [u, "Apple TV"], [p, y]],
              [/crkey/i],
              [
                [u, "Chromecast"],
                [m, P],
                [p, y],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [u, [m, w], [p, y]],
              [/\(dtv[\);].+(aquos)/i],
              [u, [m, "Sharp"], [p, y]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [m, F],
                [u, F],
                [p, y],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, y]],
              [/((pebble))app/i],
              [m, u, [p, v]],
              [/droid.+; (glass) \d/i],
              [u, [m, P], [p, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [u, [m, B], [p, v]],
              [/(quest( 2)?)/i],
              [u, [m, L], [p, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [p, k]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [u, [p, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [u, [p, _]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, _]],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [[p, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [u, [m, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [h, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [d, h],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [h, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, h],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [d, [h, q, V]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [d, "Windows"],
                [h, q, V],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [h, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, "Mac OS"],
                [h, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              [h, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, h],
              [/\(bb(10);/i],
              [h, [d, R]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [h, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [h, [d, "Firefox OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [h, [d, "webOS"]],
              [/crkey\/([\d\.]+)/i],
              [h, [d, "Chromecast"]],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[d, "Chromium OS"], h],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, h],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], h],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, h],
            ],
          },
          G = function (e, t) {
            if ((typeof e === l && ((t = e), (e = a)), !(this instanceof G)))
              return new G(e, t).getResult();
            var i =
                e ||
                (typeof r !== s && r.navigator && r.navigator.userAgent
                  ? r.navigator.userAgent
                  : ""),
              n = t
                ? (function (e, t) {
                    var i = {};
                    for (var n in e)
                      t[n] && t[n].length % 2 === 0
                        ? (i[n] = t[n].concat(e[n]))
                        : (i[n] = e[n]);
                    return i;
                  })(H, t)
                : H;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t.name = a),
                  (t.version = a),
                  W.call(t, i, n.browser),
                  (t.major =
                    typeof (e = t.version) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : a),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e.architecture = a), W.call(e, i, n.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e.vendor = a),
                  (e.model = a),
                  (e.type = a),
                  W.call(e, i, n.device),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e.name = a), (e.version = a), W.call(e, i, n.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (e.name = a), (e.version = a), W.call(e, i, n.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return i;
              }),
              (this.setUA = function (e) {
                return (
                  (i = typeof e === c && e.length > 255 ? F(e, 255) : e), this
                );
              }),
              this.setUA(i),
              this
            );
          };
        (G.VERSION = "1.0.2"),
          (G.BROWSER = z([d, h, "major"])),
          (G.CPU = z([g])),
          (G.DEVICE = z([u, m, p, f, b, y, _, v, k])),
          (G.ENGINE = G.OS = z([d, h])),
          typeof t !== s
            ? (e.exports && (t = e.exports = G), (t.UAParser = G))
            : i.amdO
            ? (n = function () {
                return G;
              }.call(t, i, t, e)) === a || (e.exports = n)
            : typeof r !== s && (r.UAParser = G);
        var K = typeof r !== s && (r.jQuery || r.Zepto);
        if (K && !K.ua) {
          var Z = new G();
          (K.ua = Z.getResult()),
            (K.ua.get = function () {
              return Z.getUA();
            }),
            (K.ua.set = function (e) {
              Z.setUA(e);
              var t = Z.getResult();
              for (var i in t) K.ua[i] = t[i];
            });
        }
      })("object" === typeof window ? window : this);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(52136), t(80880);
    });
    var i = e.O();
    _N_E = i;
  },
]);
