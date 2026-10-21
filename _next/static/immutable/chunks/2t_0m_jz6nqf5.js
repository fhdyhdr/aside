(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  64179,
  71843,
  (e) => {
    "use strict";
    function t() {
      for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
        (e = arguments[r]) &&
          (t = (function e(t) {
            var r,
              n,
              a = "";
            if ("string" == typeof t || "number" == typeof t) a += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var o = t.length;
                for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
              } else for (n in t) t[n] && (a && (a += " "), (a += n));
            return a;
          })(e)) &&
          (n && (n += " "), (n += t));
      return n;
    }
    e.s(["clsx", 0, t], 71843);
    let r = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e);
    e.s(
      [
        "cva",
        0,
        (e, n) => (a) => {
          var o;
          if ((null == n ? void 0 : n.variants) == null)
            return t(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
          let { variants: i, defaultVariants: l } = n,
            s = Object.keys(i).map((e) => {
              let t = null == a ? void 0 : a[e],
                n = null == l ? void 0 : l[e];
              if (null === t) return null;
              let o = r(t) || r(n);
              return i[e][o];
            }),
            d =
              a &&
              Object.entries(a).reduce((e, t) => {
                let [r, n] = t;
                return (void 0 === n || (e[r] = n), e);
              }, {});
          return t(
            e,
            s,
            null == n || null == (o = n.compoundVariants)
              ? void 0
              : o.reduce((e, t) => {
                  let { class: r, className: n, ...a } = t;
                  return Object.entries(a).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...l, ...d }[t]) : { ...l, ...d }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        },
      ],
      64179,
    );
  },
  90365,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      callServer: function () {
        return o.callServer;
      },
      createServerReference: function () {
        return l.createServerReference;
      },
      findSourceMapURL: function () {
        return i.findSourceMapURL;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(43694),
      i = e.r(94287),
      l = e.r(79237);
  },
  3308,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return b;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(87917),
      i = e.r(21935),
      l = o._(e.r(47452)),
      s = e.r(51484),
      d = e.r(58040),
      u = e.r(39047),
      c = e.r(39637),
      f = e.r(83867),
      p = e.r(516),
      g = e.r(80472),
      m = e.r(32624),
      v = e.r(5225);
    function b(t) {
      var r;
      let n,
        a,
        o,
        [b, x] = (0, l.useOptimistic)(g.IDLE_LINK_STATUS),
        y = (0, l.useRef)(null),
        {
          href: w,
          as: j,
          children: k,
          prefetch: C = null,
          passHref: P,
          replace: S,
          shallow: E,
          scroll: N,
          onClick: _,
          onMouseEnter: D,
          onTouchStart: T,
          legacyBehavior: z = !1,
          onNavigate: O,
          transitionTypes: R,
          ref: L,
          unstable_dynamicOnHover: M,
          ...I
        } = t;
      ((n = k), z && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", { children: n })));
      let F = l.default.useContext(d.AppRouterContext),
        A = !1 !== C,
        U = !1 === C ? "none" : !0 === C ? "full" : "auto",
        B = "none" !== U ? ("auto" === U ? v.FetchStrategy.PPR : v.FetchStrategy.Full) : v.FetchStrategy.PPR,
        K = "string" == typeof (r = j || w) ? r : (0, s.formatUrl)(r);
      if (z) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = l.default.Children.only(n);
      }
      let $ = z ? a && "object" == typeof a && a.ref : L,
        V,
        H = l.default.useCallback(
          (e) => (
            null !== F && (y.current = (0, g.mountLinkInstance)(e, K, F, B, A, x, V)),
            () => {
              (y.current && ((0, g.unmountLinkForCurrentNavigation)(y.current), (y.current = null)),
                (0, g.unmountPrefetchableInstance)(e));
            }
          ),
          [A, K, F, B, x, V],
        ),
        W = {
          ref: (0, u.useMergedRef)(H, $),
          onClick(t) {
            (z || "function" != typeof _ || _(t),
              z && a.props && "function" == typeof a.props.onClick && a.props.onClick(t),
              !F ||
                t.defaultPrevented ||
                (function (t, r, n, a, o, i, s, d = "none") {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) && "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
                      a && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(45762);
                    l.default.startTransition(() => {
                      f(
                        r,
                        a ? "replace" : "push",
                        !1 === o ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default,
                        n.current,
                        s,
                        d,
                      );
                    });
                  }
                })(t, K, y, S, N, O, R, U));
          },
          onMouseEnter(e) {
            (z || "function" != typeof D || D(e),
              z && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
              F && A && (0, g.onNavigationIntent)(e.currentTarget, !0 === M));
          },
          onTouchStart: function (e) {
            (z || "function" != typeof T || T(e),
              z && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
              F && A && (0, g.onNavigationIntent)(e.currentTarget, !0 === M));
          },
        };
      return (
        (0, c.isAbsoluteUrl)(K)
          ? (W.href = K)
          : (z && !P && ("a" !== a.type || "href" in a.props)) || (W.href = (0, f.addBasePath)(K)),
        (o = z ? l.default.cloneElement(a, W) : (0, i.jsx)("a", { ...I, ...W, children: n })),
        (0, i.jsx)(h.Provider, { value: b, children: o })
      );
    }
    let h = (0, l.createContext)(g.IDLE_LINK_STATUS),
      x = () => (0, l.useContext)(h);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  39047,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(47452);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (r.current = o(e, n)), t && (a.current = o(t, n)));
        },
        [e, t],
      );
    }
    function o(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  32624,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(39637),
      a = e.r(93252);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  12257,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return s;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function o(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
      return t;
    }
    function s(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  51484,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return d;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(87917)._(e.r(12257)),
      i = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        a = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        d = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host ? (d = t + e.host) : r && ((d = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (d += ":" + e.port)),
        s && "object" == typeof s && (s = String(o.urlQueryToSearchParams(s))));
      let u = e.search || (s && `?${s}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== d)
          ? ((d = "//" + (d || "")), a && "/" !== a[0] && (a = "/" + a))
          : d || (d = ""),
        l && "#" !== l[0] && (l = "#" + l),
        u && "?" !== u[0] && (u = "?" + u),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace("#", "%23")),
        `${n}${d}${a}${u}${l}`
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function d(e) {
      return l(e);
    }
  },
  39637,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      DecodeError: function () {
        return b;
      },
      MiddlewareNotFoundError: function () {
        return w;
      },
      MissingStaticPage: function () {
        return y;
      },
      NormalizeError: function () {
        return h;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return v;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return c;
      },
      getLocationOrigin: function () {
        return d;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return s;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return g;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && l.test(e);
      };
    function d() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function u() {
      let { href: e } = window.location,
        t = d();
      return e.substring(t.length);
    }
    function c(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
    }
    async function g(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await g(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let m = "u" > typeof performance,
      v = m && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class b extends Error {}
    class h extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class y extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class w extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  90483,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "LoadingCircleSolidIcon",
        0,
        ({ size: e = 24, ariaHidden: r = !0, ...n }) =>
          (0, t.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            "aria-hidden": r,
            focusable: "false",
            ...n,
            children: [
              (0, t.jsx)("path", {
                opacity: 0.3,
                d: "M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
                fill: "currentColor",
              }),
              (0, t.jsx)("path", {
                d: "M18.8916 13.2373C19.0368 12.4218 19.8153 11.8783 20.6308 12.0235C21.4464 12.1687 21.9898 12.9472 21.8447 13.7627C21.1127 17.8738 17.8738 21.1127 13.7627 21.8447C12.9472 21.9898 12.1686 21.4464 12.0234 20.6309C11.8783 19.8153 12.4217 19.0368 13.2373 18.8916C16.1102 18.38 18.38 16.1102 18.8916 13.2373Z",
                fill: "currentColor",
              }),
            ],
          }),
      ],
      90483,
    );
  },
  60803,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(47452),
      r = e.i(7406),
      n = e.i(79331);
    let a = t.forwardRef(function (e, t) {
      let {
          render: a,
          className: o,
          disabled: i = !1,
          focusableWhenDisabled: l = !1,
          nativeButton: s = !0,
          style: d,
          ...u
        } = e,
        { getButtonProps: c, buttonRef: f } = (0, r.useButton)({ disabled: i, focusableWhenDisabled: l, native: s });
      return (0, n.useRenderElement)("button", e, { state: { disabled: i }, ref: [t, f], props: [u, c] });
    });
    e.s(["Button", 0, a]);
  },
  7406,
  40377,
  17315,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(65079),
      n = e.i(56232),
      a = e.i(75235),
      o = e.i(62038),
      i = e.i(74725);
    let l = t.createContext(void 0);
    function s(e = !1) {
      let r = t.useContext(l);
      if (void 0 === r && !e) throw Error((0, i.default)(16));
      return r;
    }
    e.s(["CompositeRootContext", 0, l, "useCompositeRootContext", 0, s], 40377);
    var d = e.i(60309);
    function u(e, t, { detail: r = 0 } = {}) {
      e.dispatchEvent(
        new ((0, d.ownerWindow)(e).PointerEvent)("click", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          detail: r,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          altKey: t.altKey,
          metaKey: t.metaKey,
        }),
      );
    }
    function c(e) {
      return (0, r.isHTMLElement)(e) && "BUTTON" === e.tagName;
    }
    (e.s(["dispatchClickWithModifiers", 0, u], 17315),
      e.s(
        [
          "useButton",
          0,
          function (e = {}) {
            let { disabled: i = !1, focusableWhenDisabled: l, tabIndex: d = 0, native: f = !0, composite: p } = e,
              g = t.useRef(null),
              m = s(!0),
              v = p ?? void 0 !== m,
              { props: b } = (function (e) {
                let {
                    focusableWhenDisabled: r,
                    disabled: n,
                    composite: a = !1,
                    tabIndex: o = 0,
                    isNativeButton: i,
                  } = e,
                  l = a && !1 !== r,
                  s = a && !1 === r;
                return {
                  props: t.useMemo(() => {
                    let e = {
                      onKeyDown(e) {
                        n && r && "Tab" !== e.key && e.preventDefault();
                      },
                    };
                    return (
                      a || ((e.tabIndex = o), !i && n && (e.tabIndex = r ? o : -1)),
                      ((i && (r || l)) || (!i && n)) && (e["aria-disabled"] = n),
                      i && (!r || s) && (e.disabled = n),
                      e
                    );
                  }, [a, n, r, l, s, i, o]),
                };
              })({ focusableWhenDisabled: l, disabled: i, composite: v, tabIndex: d, isNativeButton: f }),
              h = t.useCallback(() => {
                let e = g.current;
                c(e) && v && i && void 0 === b.disabled && e.disabled && (e.disabled = !1);
              }, [i, b.disabled, v]);
            return (
              (0, a.useIsoLayoutEffect)(h, [h]),
              {
                getButtonProps: t.useCallback(
                  (e = {}) => {
                    let { onClick: t, onMouseDown: n, onKeyUp: a, onKeyDown: l, onPointerDown: s, ...d } = e;
                    return (0, o.mergeProps)(
                      {
                        onClick(e) {
                          i ? e.preventDefault() : t?.(e);
                        },
                        onMouseDown(e) {
                          i || n?.(e);
                        },
                        onKeyDown(e) {
                          var t;
                          if (i || ((0, o.makeEventPreventable)(e), l?.(e), e.baseUIHandlerPrevented)) return;
                          let n = e.target === e.currentTarget,
                            a = e.currentTarget,
                            s = c(a),
                            d = !f && ((t = a), (0, r.isHTMLElement)(t) && "A" === t.tagName && !!t.href),
                            p = n && (f ? s : !d),
                            g = "Enter" === e.key,
                            m = " " === e.key,
                            b = a.getAttribute("role"),
                            h = b?.startsWith("menuitem") || "option" === b || "gridcell" === b;
                          if (n && v && m) {
                            if (e.defaultPrevented && h) return;
                            (e.preventDefault(), (!f || s) && (e.preventBaseUIHandler(), u(a, e)));
                            return;
                          }
                          if (!p || f || (!m && !g)) {
                            n && d && m && e.preventDefault();
                            return;
                          }
                          !e.defaultPrevented && (e.preventDefault(), g && (e.preventBaseUIHandler(), u(a, e)));
                        },
                        onKeyUp(e) {
                          i ||
                            (((0, o.makeEventPreventable)(e),
                            a?.(e),
                            e.target === e.currentTarget && f && v && c(e.currentTarget) && " " === e.key)
                              ? e.preventDefault()
                              : !e.baseUIHandlerPrevented &&
                                (e.target !== e.currentTarget ||
                                  f ||
                                  v ||
                                  e.defaultPrevented ||
                                  " " !== e.key ||
                                  (e.preventBaseUIHandler(), u(e.currentTarget, e))));
                        },
                        onPointerDown(e) {
                          i ? e.preventDefault() : s?.(e);
                        },
                      },
                      f ? { type: "button" } : { role: "button" },
                      b,
                      d,
                    );
                  },
                  [i, b, v, f],
                ),
                buttonRef: (0, n.useStableCallback)((e) => {
                  ((g.current = e), h());
                }),
              }
            );
          },
        ],
        7406,
      ));
  },
  46873,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(93470),
      a = e.i(20789),
      o = e.i(28169),
      i = e.i(13696),
      l = e.i(30896),
      s = e.i(37821),
      d = e.i(18046),
      u = e.i(20228),
      c = e.i(19205),
      f = e.i(94814),
      p = e.i(90365);
    let g = (0, p.createServerReference)(
      "40b9a892dd20ad3bd9c78910e55305e7ca58bbe954",
      p.callServer,
      void 0,
      p.findSourceMapURL,
      "sendDownloadLinkAction",
    );
    var m = e.i(97089);
    let v = [
        { value: "macos", label: "macOS" },
        { value: "windows", label: "Windows" },
      ],
      b = (0, f.cn)(
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:ring-3 md:text-sm",
      ),
      h = ({ onDone: e, targetPlatform: r }) => {
        let s = (0, a.useForm)({
            resolver: (0, n.zodResolver)(m.sendDownloadLinkFormSchema),
            defaultValues: { email: "", os: r },
          }),
          d = Object.keys(s.formState.errors).length > 0,
          f = s.formState.isSubmitting,
          p = async (t) => {
            (0, c.captureLandingEvent)("landing.download_link.submit", { os: t.os });
            let r = new FormData();
            if ((r.set("email", t.email), r.set("os", t.os), "success" === (await g(r)).status)) {
              ((0, c.captureLandingEvent)("landing.download_link.success", { os: t.os }),
                o.toast.success("Check your inbox for the download link."),
                e(!1));
              return;
            }
            ((0, c.captureLandingEvent)("landing.download_link.error", { os: t.os }),
              o.toast.error("Could not send the link. Please try again later."));
          };
        return (0, t.jsx)(a.FormProvider, {
          ...s,
          children: (0, t.jsxs)("form", {
            className: "contents",
            onSubmit: s.handleSubmit(p),
            children: [
              (0, t.jsx)(x, {}),
              (0, t.jsxs)(l.DialogFooter, {
                children: [
                  (0, t.jsx)(l.DialogClose, { render: (0, t.jsx)(i.Button, { variant: "ghost" }), children: "Cancel" }),
                  (0, t.jsxs)(i.Button, {
                    type: "submit",
                    disabled: f || d,
                    children: [f && (0, t.jsx)(u.Spinner, {}), (0, t.jsx)("span", { children: "Send" })],
                  }),
                ],
              }),
            ],
          }),
        });
      },
      x = () => {
        let {
            formState: { errors: e },
            register: r,
          } = (0, a.useFormContext)(),
          n = e.email?.message;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.Field, {
              "data-invalid": !!n || void 0,
              children: (0, t.jsx)(d.Input, {
                className: "h-10",
                type: "email",
                placeholder: "you@example.com",
                autoComplete: "email",
                "aria-invalid": !!n || void 0,
                ...r("email"),
              }),
            }),
            n && (0, t.jsx)(s.FieldError, { children: n }),
          ],
        });
      };
    e.s(
      [
        "MobileDownloadDialog",
        0,
        ({ onDone: e }) => {
          let [n, a] = (0, r.useState)("macos"),
            o = "macos" === n ? "macOS" : "Windows";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(l.DialogHeader, {
                children: [
                  (0, t.jsx)(l.DialogTitle, { children: "Send download link" }),
                  (0, t.jsxs)(l.DialogDescription, {
                    children: ["Enter your email and we will send you a download link for ", o, "."],
                  }),
                ],
              }),
              (0, t.jsxs)(s.FieldGroup, {
                className: "gap-3",
                children: [
                  (0, t.jsxs)(s.Field, {
                    children: [
                      (0, t.jsx)(s.FieldTitle, { children: "Platform" }),
                      (0, t.jsx)("select", {
                        "aria-label": "Platform",
                        className: b,
                        value: n,
                        onChange: (e) => a(e.target.value),
                        children: v.map((e) => (0, t.jsx)("option", { value: e.value, children: e.label }, e.value)),
                      }),
                    ],
                  }),
                  (0, t.jsx)(h, { onDone: e, targetPlatform: n }, n),
                ],
              }),
            ],
          });
        },
      ],
      46873,
    );
  },
  97089,
  (e) => {
    "use strict";
    var t = e.i(11845);
    let r = async () => {
        var e, t;
        if ("u" < typeof navigator) return { device: "desktop", os: "etc" };
        let { userAgent: r } = navigator,
          n = navigator.userAgentData;
        if (/iPhone|iPad|iPod/i.test(r) || (navigator.maxTouchPoints > 1 && /Macintosh/i.test(r)))
          return { device: "mobile", os: "ios" };
        if (/Android/i.test(r)) return { device: "mobile", os: "android" };
        if (n?.mobile || /Mobi/i.test(r)) return { device: "mobile", os: "etc" };
        let a = n?.platform;
        if ("Windows" === a || /Windows/i.test(r)) {
          let t,
            a,
            o = await n?.getHighEntropyValues?.(["platformVersion"]).catch(() => null);
          return {
            device: "desktop",
            os: "windows",
            isSupported:
              !/Windows NT [1-9]\./i.test(r) &&
              ((e = o?.platformVersion),
              "number" !=
                typeof (a = Number.isSafeInteger(
                  (t = Number.parseInt(e?.replace(/^"|"$/g, "").split(/[._]/)[0] ?? "", 10)),
                )
                  ? t
                  : null) || !(a < 10)),
          };
        }
        if ("macOS" === a || /Macintosh/i.test(r)) {
          let e,
            r = await n?.getHighEntropyValues?.(["platformVersion"]).catch(() => null);
          return {
            device: "desktop",
            os: "macos",
            macosMajorVersion:
              ((t = r?.platformVersion),
              Number.isSafeInteger((e = Number.parseInt(t?.replace(/^"|"$/g, "").split(/[._]/)[0] ?? "", 10)))
                ? e
                : null),
          };
        }
        return { device: "desktop", os: "etc" };
      },
      n = t.z.object({
        email: t.z
          .string()
          .trim()
          .toLowerCase()
          .pipe(t.z.email({ error: "Enter a valid email address." })),
        os: t.z.enum(["macos", "windows"]),
      });
    e.s(
      [
        "getPlatform",
        0,
        r,
        "getPrimaryAction",
        0,
        (e) => {
          let t;
          return "mobile" === e.device
            ? "send-link"
            : ("windows" !== e.os || e.isSupported) && "etc" !== e.os
              ? "macos" === e.os && "number" == typeof (t = e.macosMajorVersion) && t < 15
                ? "disabled"
                : "download"
              : "disabled";
        },
        "sendDownloadLinkFormSchema",
        0,
        n,
      ],
      97089,
    );
  },
  13696,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(60803),
      n = e.i(64179),
      a = e.i(94814);
    let o = (0, n.cva)(
      "group/button focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 md:[&_svg:not([class*='size-'])]:size-4",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline:
              "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground aria-expanded:bg-secondary aria-expanded:text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
            ghost:
              "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive:
              "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default:
              "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-10 md:px-3 md:text-base",
            xs: "h-6 gap-1 rounded-lg px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 md:h-7 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 gap-1.5 rounded-lg px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 md:h-9 md:px-2.5 md:text-sm md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-11 md:gap-2 md:px-3 md:text-base md:has-data-[icon=inline-end]:pr-2.5 md:has-data-[icon=inline-start]:pl-2.5 md:[&_svg:not([class*='size-'])]:size-4.5",
            icon: "size-9 md:size-11",
            "icon-xs":
              "size-7 rounded-lg in-data-[slot=button-group]:rounded-lg md:size-8 [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8 rounded-lg in-data-[slot=button-group]:rounded-lg md:size-9",
            "icon-lg":
              "size-10 md:size-11 [&_svg:not([class*='size-'])]:size-4 md:[&_svg:not([class*='size-'])]:size-4.5",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    );
    e.s([
      "Button",
      0,
      function ({ className: e, variant: n = "default", size: i = "default", ...l }) {
        return (0, t.jsx)(r.Button, {
          "data-slot": "button",
          className: (0, a.cn)(o({ variant: n, size: i, className: e })),
          ...l,
        });
      },
    ]);
  },
  30896,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(40735),
      n = e.i(60711),
      a = e.i(94814),
      o = e.i(13696);
    function i({ ...e }) {
      return (0, t.jsx)(r.Dialog.Portal, { "data-slot": "dialog-portal", ...e });
    }
    function l({ className: e, ...n }) {
      return (0, t.jsx)(r.Dialog.Backdrop, {
        "data-slot": "dialog-overlay",
        className: (0, a.cn)(
          "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/15 duration-100 supports-backdrop-filter:backdrop-blur-xs",
          e,
        ),
        ...n,
      });
    }
    e.s([
      "Dialog",
      0,
      function ({ ...e }) {
        return (0, t.jsx)(r.Dialog.Root, { "data-slot": "dialog", ...e });
      },
      "DialogClose",
      0,
      function ({ ...e }) {
        return (0, t.jsx)(r.Dialog.Close, { "data-slot": "dialog-close", ...e });
      },
      "DialogContent",
      0,
      function ({ className: e, children: s, showCloseButton: d = !0, ...u }) {
        return (0, t.jsxs)(i, {
          children: [
            (0, t.jsx)(l, {}),
            (0, t.jsxs)(r.Dialog.Popup, {
              "data-slot": "dialog-content",
              className: (0, a.cn)(
                "no-drag data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 bg-popover text-popover-foreground fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-3xl border px-6 py-5 text-sm shadow-2xl duration-100 outline-none sm:max-w-sm",
                e,
              ),
              ...u,
              children: [
                s,
                d &&
                  (0, t.jsxs)(r.Dialog.Close, {
                    "data-slot": "dialog-close",
                    render: (0, t.jsx)(o.Button, {
                      variant: "ghost",
                      className: "text-secondary-foreground/50 absolute top-2 right-2 rounded-full",
                      size: "icon-xs",
                    }),
                    children: [
                      (0, t.jsx)(n.CircleXSolidIcon, { className: "size-4!" }),
                      (0, t.jsx)("span", { className: "sr-only", children: "Close" }),
                    ],
                  }),
              ],
            }),
          ],
        });
      },
      "DialogDescription",
      0,
      function ({ className: e, ...n }) {
        return (0, t.jsx)(r.Dialog.Description, {
          "data-slot": "dialog-description",
          className: (0, a.cn)("text-muted-foreground text-sm", e),
          ...n,
        });
      },
      "DialogFooter",
      0,
      function ({ className: e, children: r, ...n }) {
        return (0, t.jsx)("div", {
          "data-slot": "dialog-footer",
          className: (0, a.cn)(
            "-mx-5 -mb-5 flex shrink-0 flex-col-reverse gap-1 rounded-b-3xl p-4 sm:flex-row sm:justify-end",
            e,
          ),
          ...n,
          children: r,
        });
      },
      "DialogHeader",
      0,
      function ({ className: e, ...r }) {
        return (0, t.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, a.cn)("flex flex-col gap-0.5 pr-4", e),
          ...r,
        });
      },
      "DialogTitle",
      0,
      function ({ className: e, ...n }) {
        return (0, t.jsx)(r.Dialog.Title, {
          "data-slot": "dialog-title",
          className: (0, a.cn)("font-display text-lg leading-snug font-medium", e),
          ...n,
        });
      },
    ]);
  },
  37821,
  9103,
  18046,
  20228,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(64179),
      a = e.i(94814);
    function o({ className: e, ...r }) {
      return (0, t.jsx)("label", {
        "data-slot": "label",
        className: (0, a.cn)(
          "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          e,
        ),
        ...r,
      });
    }
    var i = e.i(79331);
    let l = r.forwardRef(function (e, t) {
      let { className: r, render: n, orientation: a = "horizontal", style: o, ...l } = e;
      return (0, i.useRenderElement)("div", e, {
        state: { orientation: a },
        ref: t,
        props: [{ role: "separator", "aria-orientation": a }, l],
      });
    });
    e.s(["Separator", 0, l], 9103);
    let s = (0, n.cva)("group/field data-[invalid=true]:text-destructive flex w-full gap-2", {
      variants: {
        orientation: {
          vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
          horizontal:
            "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
          responsive:
            "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        },
      },
      defaultVariants: { orientation: "vertical" },
    });
    e.s(
      [
        "Field",
        0,
        function ({ className: e, orientation: r = "vertical", ...n }) {
          return (0, t.jsx)("div", {
            role: "group",
            "data-slot": "field",
            "data-orientation": r,
            className: (0, a.cn)(s({ orientation: r }), e),
            ...n,
          });
        },
        "FieldError",
        0,
        function ({ className: e, children: n, errors: o, ...i }) {
          let l = (0, r.useMemo)(() => {
            if (n) return n;
            if (!o?.length) return null;
            let e = [...new Map(o.map((e) => [e?.message, e])).values()];
            return e?.length == 1
              ? e[0]?.message
              : (0, t.jsx)("ul", {
                  className: "ml-4 flex list-disc flex-col gap-1",
                  children: e.map((e, r) => e?.message && (0, t.jsx)("li", { children: e.message }, r)),
                });
          }, [n, o]);
          return l
            ? (0, t.jsx)("div", {
                role: "alert",
                "data-slot": "field-error",
                className: (0, a.cn)("text-destructive text-sm font-normal", e),
                ...i,
                children: l,
              })
            : null;
        },
        "FieldGroup",
        0,
        function ({ className: e, ...r }) {
          return (0, t.jsx)("div", {
            "data-slot": "field-group",
            className: (0, a.cn)(
              "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
              e,
            ),
            ...r,
          });
        },
        "FieldLabel",
        0,
        function ({ className: e, ...r }) {
          return (0, t.jsx)(o, {
            "data-slot": "field-label",
            className: (0, a.cn)(
              "group/field-label peer/field-label has-data-checked:border-primary/30 has-data-checked:bg-primary/5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5",
              "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
              e,
            ),
            ...r,
          });
        },
        "FieldLegend",
        0,
        function ({ className: e, variant: r = "legend", ...n }) {
          return (0, t.jsx)("legend", {
            "data-slot": "field-legend",
            "data-variant": r,
            className: (0, a.cn)("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", e),
            ...n,
          });
        },
        "FieldSet",
        0,
        function ({ className: e, ...r }) {
          return (0, t.jsx)("fieldset", {
            "data-slot": "field-set",
            className: (0, a.cn)(
              "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
              e,
            ),
            ...r,
          });
        },
        "FieldTitle",
        0,
        function ({ className: e, ...r }) {
          return (0, t.jsx)("div", {
            "data-slot": "field-label",
            className: (0, a.cn)(
              "flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50",
              e,
            ),
            ...r,
          });
        },
      ],
      37821,
    );
    var d = e.i(26816);
    e.s(
      [
        "Input",
        0,
        function ({ className: e, type: r, ...n }) {
          return (0, t.jsx)(d.Input, {
            type: r,
            "data-slot": "input",
            className: (0, a.cn)(
              "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
              e,
            ),
            ...n,
          });
        },
      ],
      18046,
    );
    var u = e.i(90483);
    e.s(
      [
        "Spinner",
        0,
        ({ className: e, ...r }) =>
          (0, t.jsx)(u.LoadingCircleSolidIcon, { className: (0, a.cn)("animate-spin text-inherit", e), ...r }),
      ],
      20228,
    );
  },
  19205,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(32612);
    let r = { "landing.download.cta_click": "tw-q6xpp-z9rd1" },
      n = {
        "landing.download.cta_click": "Download",
        "landing.referral.claim.success": "Referral",
        "landing.enterprise_contact.success": "EnterpriseContact",
      };
    e.s([
      "captureLandingEvent",
      0,
      function (e, a) {
        let o = window;
        (o.dataLayer ??= []).push({ event: e, ...a });
        let i = r[e];
        i && o.twq?.("event", i);
        let l = n[e];
        (l && o.fbq?.("trackCustom", l, a), t.default.capture(e, a));
      },
    ]);
  },
]);
