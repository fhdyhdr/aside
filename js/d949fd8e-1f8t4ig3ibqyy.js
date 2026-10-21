(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  70829,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(47452);
    function i(e, t, r) {
      let [i, s] = (0, n.useState)(() => ({ tree: e, cacheNode: t, stateKey: r, next: null }));
      if (i.tree === e) return i;
      let a = { tree: e, cacheNode: t, stateKey: r, next: null },
        o = 1,
        u = i,
        l = a;
      for (; null !== u && o < 1;) {
        if (u.stateKey === r) {
          l.next = u.next;
          break;
        }
        {
          o++;
          let e = { tree: u.tree, cacheNode: u.cacheNode, stateKey: u.stateKey, next: null };
          ((l.next = e), (l = e));
        }
        u = u.next;
      }
      return (s(a), a);
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  84943,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(21935),
      i = e.r(58040),
      s = e.r(47452),
      a = e.r(37231),
      o = e.r(17053),
      u = e.r(77263);
    function l({ Component: e, serverProvidedParams: t }) {
      let r, c;
      if (null !== t) ((r = t.searchParams), (c = t.params));
      else {
        let e = (0, s.use)(i.LayoutRouterContext);
        ((c = null !== e ? e.parentParams : {}),
          (r = (0, a.urlSearchParamsToParsedUrlQuery)((0, s.use)(o.SearchParamsContext))));
      }
      let d = (0, u.createClientSearchParams)(r),
        f = (0, u.createClientParams)(c);
      return (0, n.jsx)(e, { params: f, searchParams: d });
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  16735,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(21935),
      i = e.r(58040),
      s = e.r(47452),
      a = e.r(77263);
    function o({ Component: e, slots: t, serverProvidedParams: r }) {
      let u;
      if (null !== r) u = r.params;
      else {
        let e = (0, s.use)(i.LayoutRouterContext);
        u = null !== e ? e.parentParams : {};
      }
      let l = (0, a.createClientParams)(u);
      return (0, n.jsx)(e, { ...t, params: l });
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  48450,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    let n = e.r(87917),
      i = e.r(21935),
      s = n._(e.r(47452)),
      a = e.r(8015),
      o = e.r(35929),
      u = e.r(58040);
    class l extends s.default.Component {
      constructor(e) {
        (super(e), (this.state = { triggeredStatus: void 0, previousPathname: e.pathname }));
      }
      componentDidCatch() {}
      static getDerivedStateFromError(e) {
        if ((0, o.isHTTPAccessFallbackError)(e)) return { triggeredStatus: (0, o.getAccessFallbackHTTPStatus)(e) };
        throw e;
      }
      static getDerivedStateFromProps(e, t) {
        return e.pathname !== t.previousPathname && t.triggeredStatus
          ? { triggeredStatus: void 0, previousPathname: e.pathname }
          : { triggeredStatus: t.triggeredStatus, previousPathname: e.pathname };
      }
      render() {
        let { notFound: e, forbidden: t, unauthorized: r, children: n } = this.props,
          { triggeredStatus: s } = this.state,
          a = {
            [o.HTTPAccessErrorStatus.NOT_FOUND]: e,
            [o.HTTPAccessErrorStatus.FORBIDDEN]: t,
            [o.HTTPAccessErrorStatus.UNAUTHORIZED]: r,
          };
        if (s) {
          let u = s === o.HTTPAccessErrorStatus.NOT_FOUND && e,
            l = s === o.HTTPAccessErrorStatus.FORBIDDEN && t,
            c = s === o.HTTPAccessErrorStatus.UNAUTHORIZED && r;
          return u || l || c
            ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("meta", { name: "robots", content: "noindex" }), !1, a[s]],
              })
            : n;
        }
        return n;
      }
    }
    function c({ notFound: e, forbidden: t, unauthorized: r, children: n }) {
      let o = (0, a.useUntrackedPathname)(),
        d = (0, s.useContext)(u.MissingSlotContext);
      return e || t || r
        ? (0, i.jsx)(l, { pathname: o, notFound: e, forbidden: t, unauthorized: r, missingSlots: d, children: n })
        : (0, i.jsx)(i.Fragment, { children: n });
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  17381,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return s;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return a;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return o;
      },
      SlotMarker: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = null,
      a = null,
      o = null,
      u = null;
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  62609,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return s.InstantValidationBoundaryContext;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return s.PlaceValidationBoundaryBelowThisLevel;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return s.RenderValidationBoundaryAtThisLevel;
      },
      SlotMarker: function () {
        return s.SlotMarker;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = e.r(17381);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  28604,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      LoadingBoundaryProvider: function () {
        return j;
      },
      default: function () {
        return x;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = e.r(99667),
      a = e.r(87917),
      o = e.r(21935),
      u = a._(e.r(47452)),
      l = s._(e.r(29066)),
      c = e.r(58040),
      d = e.r(33202),
      f = e.r(62186),
      h = e.r(98878),
      p = e.r(70506),
      y = e.r(48450);
    e.r(62609);
    let v = e.r(9537),
      m = e.r(70829);
    e.r(93434);
    let b = e.r(17053),
      g = e.r(37231),
      P = e.r(44230);
    l.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function _(e, t, r) {
      let n = e.getClientRects();
      if (0 === n.length) return 0;
      let i = 1 / 0;
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.top < i && (i = t.top);
      }
      return i >= r() && i <= t ? 1 : 2;
    }
    u.default.Component;
    let O = function (e) {
      let t = u.default.useRef(null);
      return (
        (0, u.useLayoutEffect)(
          () => {
            let { focusAndScrollRef: r, cacheNode: n } = e,
              i = r.forceScroll ? r.scrollRef : n.scrollRef;
            if (null === i || !i.current) return;
            let s = null,
              a = r.hashFragment;
            if (a) {
              var o;
              if (
                null ===
                (s =
                  "top" === (o = a)
                    ? document.body
                    : (document.getElementById(o) ?? document.getElementsByName(o)[0] ?? null))
              ) {
                ((i.current = !1), (r.onlyHashChange = !1), (r.hashFragment = null));
                return;
              }
            } else s = t.current;
            if (null === s) return;
            let u = !1;
            ((0, h.disableSmoothScrollDuringRouteTransition)(
              () => {
                let e = document.documentElement,
                  t = null,
                  r = null,
                  n = null,
                  o = () => {
                    var r, i;
                    let s, a;
                    return (
                      null === n &&
                        ((r = e),
                        (i = t),
                        (n =
                          !Number.isFinite((a = Number.parseFloat((s = getComputedStyle(r).scrollPaddingTop)))) || a < 0
                            ? 0
                            : s.endsWith("px")
                              ? a
                              : s.endsWith("%")
                                ? (a / 100) * i
                                : 0)),
                      n
                    );
                  };
                (a || ((t = e.clientHeight), 0 !== (r = _(s, t, o)))) &&
                  (((u = !0), (i.current = !1), a)
                    ? s.scrollIntoView()
                    : 1 !== r && ((e.scrollTop = 0), 2 === _(s, t, o) && s.scrollIntoView()));
              },
              { dontForceLayout: !0, onlyHashChange: r.onlyHashChange },
            ),
              u && ((r.onlyHashChange = !1), (r.hashFragment = null)));
          },
          void 0,
        ),
        (0, o.jsx)(u.Fragment, { ref: t, children: e.children })
      );
    };
    function C({ children: e, cacheNode: t }) {
      let r = (0, u.useContext)(c.GlobalLayoutRouterContext);
      if (!r)
        throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
          value: "E473",
          enumerable: !1,
          configurable: !0,
        });
      return (0, o.jsx)(O, { focusAndScrollRef: r.focusAndScrollRef, cacheNode: t, children: e });
    }
    function S({ tree: e, segmentPath: t, debugNameContext: r, cacheNode: n, params: i, url: s, isActive: a }) {
      let l,
        f = (0, u.useContext)(c.GlobalLayoutRouterContext);
      if (((0, u.useContext)(b.NavigationPromisesContext), !f))
        throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
          value: "E473",
          enumerable: !1,
          configurable: !0,
        });
      let h = null !== n ? n : (0, u.use)(d.unresolvedThenable),
        p = null !== h.prefetchRsc ? h.prefetchRsc : h.rsc,
        y = (0, u.useDeferredValue)(h.rsc, p);
      if ((0, P.isDeferredRsc)(y)) {
        let e = (0, u.use)(y);
        (null === e && (0, u.use)(d.unresolvedThenable), (l = e));
      } else (null === y && (0, u.use)(d.unresolvedThenable), (l = y));
      let v = l;
      return (0, o.jsx)(c.LayoutRouterContext.Provider, {
        value: {
          parentTree: e,
          parentCacheNode: h,
          parentSegmentPath: t,
          parentParams: i,
          parentLoadingData: null,
          debugNameContext: r,
          url: s,
          isActive: a,
        },
        children: v,
      });
    }
    function j({ loading: e, children: t }) {
      let r = (0, u.use)(c.LayoutRouterContext);
      return null === r
        ? t
        : (0, o.jsx)(c.LayoutRouterContext.Provider, {
            value: {
              parentTree: r.parentTree,
              parentCacheNode: r.parentCacheNode,
              parentSegmentPath: r.parentSegmentPath,
              parentParams: r.parentParams,
              parentLoadingData: e,
              debugNameContext: r.debugNameContext,
              url: r.url,
              isActive: r.isActive,
            },
            children: t,
          });
    }
    function T({ name: e, loading: t, children: r }) {
      if (null !== t) {
        let n = t[0],
          i = t[1],
          s = t[2];
        return (0, o.jsx)(u.Suspense, {
          name: e,
          fallback: (0, o.jsxs)(o.Fragment, { children: [i, s, n] }),
          children: r,
        });
      }
      return (0, o.jsx)(o.Fragment, { children: r });
    }
    function x({
      parallelRouterKey: e,
      error: t,
      errorStyles: r,
      errorScripts: n,
      templateStyles: i,
      templateScripts: s,
      template: a,
      notFound: l,
      forbidden: h,
      unauthorized: b,
      segmentViewBoundaries: P,
    }) {
      let _ = (0, u.useContext)(c.LayoutRouterContext);
      if (!_)
        throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E56",
          enumerable: !1,
          configurable: !0,
        });
      let {
          parentTree: O,
          parentCacheNode: j,
          parentSegmentPath: w,
          parentParams: F,
          parentLoadingData: R,
          url: M,
          isActive: E,
          debugNameContext: A,
        } = _,
        L = O[0],
        N = null === w ? [e] : w.concat([L, e]),
        D = O[1][e],
        U = j.slots;
      (void 0 === D || null === U) && (0, u.use)(d.unresolvedThenable);
      let q = D[0],
        B = U[e] ?? null,
        k = (0, v.createRouterCacheKey)(q, !0),
        I = (0, m.useRouterBFCache)(D, B, k),
        H = [];
      do {
        let e = I.tree,
          u = I.cacheNode,
          d = I.stateKey,
          v = e[0],
          m = F;
        if (Array.isArray(v)) {
          let e = v[0],
            t = v[1],
            r = v[2],
            n = (0, g.getParamValueFromCacheKey)(t, r);
          null !== n && (m = { ...F, [e]: n });
        }
        let P = (function (e) {
            if ("/" === e) return "/";
            if ("string" == typeof e)
              if ("(__SLOT__)" === e) return;
              else return e + "/";
            return e[1] + "/";
          })(v),
          _ = P ?? A,
          O = void 0 === P ? void 0 : A,
          j = (0, o.jsxs)(C, {
            cacheNode: u,
            children: [
              (0, o.jsx)(f.ErrorBoundary, {
                errorComponent: t,
                errorStyles: r,
                errorScripts: n,
                children: (0, o.jsx)(T, {
                  name: O,
                  loading: R,
                  children: (0, o.jsx)(y.HTTPAccessFallbackBoundary, {
                    notFound: l,
                    forbidden: h,
                    unauthorized: b,
                    children: (0, o.jsxs)(p.RedirectBoundary, {
                      children: [
                        (0, o.jsx)(S, {
                          url: M,
                          tree: e,
                          params: m,
                          cacheNode: u,
                          segmentPath: N,
                          debugNameContext: _,
                          isActive: E && d === k,
                        }),
                        null,
                      ],
                    }),
                  }),
                }),
              }),
              null,
            ],
          }),
          x = (0, o.jsxs)(c.TemplateContext.Provider, { value: j, children: [i, s, a] }, d);
        (H.push(x), (I = I.next));
      } while (null !== I);
      return H;
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  80739,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(87917),
      i = e.r(21935),
      s = n._(e.r(47452)),
      a = e.r(58040);
    function o() {
      let e = (0, s.useContext)(a.TemplateContext);
      return (0, i.jsx)(i.Fragment, { children: e });
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  25070,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = new WeakMap();
    function i(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return (n.set(e, r), r);
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  10619,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(25070).createRenderParamsFromClient;
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  75041,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = new WeakMap();
    function i(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return (n.set(e, r), r);
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  67611,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(75041).createRenderSearchParamsFromClient;
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  77263,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      createClientParams: function () {
        return s.createRenderParamsFromClient;
      },
      createClientSearchParams: function () {
        return a.createRenderSearchParamsFromClient;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = e.r(10619),
      a = e.r(67611);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  93151,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(21935),
      i = () => ("u" > typeof window ? null : (0, n.jsx)("meta", { name: "«nxt-icon»" }));
  },
  98878,
  (e, t, r) => {
    "use strict";
    function n(e, t = {}) {
      if (t.onlyHashChange) return void e();
      let r = document.documentElement;
      if ("smooth" !== r.dataset.scrollBehavior) return void e();
      let i = r.style.scrollBehavior;
      ((r.style.scrollBehavior = "auto"), t.dontForceLayout || r.getClientRects(), e(), (r.style.scrollBehavior = i));
    }
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  32318,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(47452),
      r = "u" < typeof window ? t.default.useEffect : t.default.useLayoutEffect,
      n = 0,
      i = () => ++n,
      s = !1;
    function a() {
      let [e, n] = t.default.useState(s ? i : void 0);
      return (
        r(() => {
          (void 0 === e && n(i()), (s = !0));
        }, []),
        void 0 === e ? e : `rwb-${e.toString(32)}`
      );
    }
    var o = "__wrap_b",
      u = "__wrap_n",
      l = "__wrap_o",
      c = (e, t, r) => {
        let n = null == (r = r || document.querySelector(`[data-br="${e}"]`)) ? void 0 : r.parentElement;
        if (!n) return;
        let i = (e) => (r.style.maxWidth = e + "px");
        r.style.maxWidth = "";
        let s = n.clientWidth,
          a = n.clientHeight,
          o = s / 2 - 0.25,
          u = s + 0.5,
          l;
        if (s) {
          for (i(o), o = Math.max(r.scrollWidth, o); o + 1 < u;)
            (i((l = Math.round((o + u) / 2))), n.clientHeight === a ? (u = l) : (o = l));
          i(u * t + s * (1 - t));
        }
        r.__wrap_o ||
          ("u" > typeof ResizeObserver &&
            (r.__wrap_o = new ResizeObserver(() => {
              self.__wrap_b(0, +r.dataset.brr, r);
            })).observe(n));
      },
      d = c.toString(),
      f = (e, r, n = "") => (
        n && (n = `self.${u}!=1&&${n}`),
        t.default.createElement("script", {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: {
            __html:
              (e ? "" : `self.${u}=self.${u}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${o}=${d};`) + n,
          },
          nonce: r,
        })
      ),
      h = t.default.createContext({ preferNative: !0, hasProvider: !1 }),
      p = t.default.forwardRef(({ ratio: e = 1, preferNative: n, nonce: i, children: s, as: d, ...p }, y) => {
        let v = t.default.useMemo(() => ("useId" in t.default ? t.default.useId : a), [])(),
          m = t.default.useRef(),
          b = t.default.useContext(h),
          g = null != n ? n : b.preferNative;
        return (
          t.default.useImperativeHandle(y, () => m.current, []),
          r(() => {
            (g && 1 === self[u]) || (m.current && (self[o] = c)(0, e, m.current));
          }, [s, g, e]),
          r(() => {
            if (!(g && 1 === self[u]))
              return () => {
                if (!m.current) return;
                let e = m.current[l];
                e && (e.disconnect(), delete m.current[l]);
              };
          }, [g]),
          t.default.createElement(
            t.default.Fragment,
            null,
            t.default.createElement(
              d || "span",
              {
                ...p,
                "data-br": v,
                "data-brr": e,
                ref: m,
                style: {
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  textWrap: g ? "balance" : "initial",
                },
                suppressHydrationWarning: !0,
              },
              s,
            ),
            f(b.hasProvider, i, `self.${o}("${v}",${e})`),
          )
        );
      });
    e.s([
      "Balancer",
      0,
      p,
      "Provider",
      0,
      ({ preferNative: e = !0, nonce: r, children: n }) => {
        let i = t.default.useMemo(() => ({ preferNative: e, hasProvider: !0 }), [e]);
        return t.default.createElement(h.Provider, { value: i }, f(!1, r), n);
      },
      "default",
      0,
      p,
    ]);
  },
  21240,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "CheckIcon",
        0,
        ({ size: e = 24, ariaHidden: r = !0, ...n }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            "aria-hidden": r,
            focusable: "false",
            ...n,
            children: (0, t.jsx)("path", {
              d: "M18.0663 6.16872C18.5254 5.65338 19.3154 5.60731 19.8309 6.06618C20.3463 6.52529 20.3923 7.31536 19.9335 7.83083L10.1337 18.8308C9.90611 19.0862 9.58295 19.2374 9.24108 19.2488C8.89935 19.2601 8.56803 19.131 8.32408 18.8914L4.12389 14.7664C3.6315 14.2826 3.62457 13.4913 4.10826 12.9988C4.59201 12.5064 5.38336 12.4995 5.87584 12.9832L9.13951 16.1882L18.0663 6.16872Z",
              fill: "currentColor",
            }),
          }),
      ],
      21240,
    );
  },
  26577,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "XIcon",
        0,
        ({ size: e = 24, ariaHidden: r = !0, ...n }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            "aria-hidden": r,
            focusable: "false",
            ...n,
            children: (0, t.jsx)("path", {
              d: "M16.793 5.79289C17.1835 5.40237 17.8165 5.40237 18.207 5.79289C18.5975 6.18342 18.5975 6.81643 18.207 7.20696L13.414 11.9999L18.207 16.7929C18.5975 17.1834 18.5975 17.8164 18.207 18.207C17.8165 18.5975 17.1835 18.5975 16.793 18.207L12 13.414L7.20702 18.207C6.81649 18.5975 6.18348 18.5975 5.79295 18.207C5.40243 17.8164 5.40243 17.1834 5.79295 16.7929L10.5859 11.9999L5.79295 7.20696C5.40243 6.81643 5.40243 6.18342 5.79295 5.79289C6.18348 5.40237 6.81649 5.40237 7.20702 5.79289L12 10.5859L16.793 5.79289Z",
              fill: "currentColor",
            }),
          }),
      ],
      26577,
    );
  },
  79825,
  (e) => {
    "use strict";
    var t = e.i(62240);
    e.s(["isServer", 0, () => t.isServer]);
  },
  2222,
  99307,
  (e) => {
    "use strict";
    var t = class {
      constructor() {
        ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            (this.listeners.delete(e), this.onUnsubscribe());
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    };
    e.s(["Subscribable", 0, t], 99307);
    let r = new (class extends t {
      #e;
      #t;
      #r;
      constructor() {
        (super(),
          (this.#r = (e) => {
            if ("u" > typeof window && window.addEventListener) {
              let t = () => e();
              return (
                window.addEventListener("visibilitychange", t, !1),
                () => {
                  window.removeEventListener("visibilitychange", t);
                }
              );
            }
          }));
      }
      onSubscribe() {
        this.#t || this.setEventListener(this.#r);
      }
      onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), (this.#t = void 0));
      }
      setEventListener(e) {
        ((this.#r = e),
          this.#t?.(),
          (this.#t = e((e) => {
            "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
          })));
      }
      setFocused(e) {
        this.#e !== e && ((this.#e = e), this.onFocus());
      }
      onFocus() {
        let e = this.isFocused();
        this.listeners.forEach((t) => {
          t(e);
        });
      }
      isFocused() {
        return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden";
      }
    })();
    e.s(["focusManager", 0, r], 2222);
  },
  16446,
  (e) => {
    "use strict";
    let t,
      r,
      n,
      i,
      s,
      a,
      o = e.i(19784).systemSetTimeoutZero,
      u =
        ((t = []),
        (r = 0),
        (n = (e) => {
          e();
        }),
        (i = (e) => {
          e();
        }),
        (s = o),
        {
          batch: (e) => {
            let a;
            r++;
            try {
              a = e();
            } finally {
              let e;
              --r ||
                ((e = t),
                (t = []),
                e.length &&
                  s(() => {
                    i(() => {
                      e.forEach((e) => {
                        n(e);
                      });
                    });
                  }));
            }
            return a;
          },
          batchCalls:
            (e) =>
            (...t) => {
              a(() => {
                e(...t);
              });
            },
          schedule: (a = (e) => {
            r
              ? t.push(e)
              : s(() => {
                  n(e);
                });
          }),
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            i = e;
          },
          setScheduler: (e) => {
            s = e;
          },
        });
    e.s(["notifyManager", 0, u]);
  },
  73578,
  (e) => {
    "use strict";
    var t = e.i(99307);
    let r = new (class extends t.Subscribable {
      #n = !0;
      #t;
      #r;
      constructor() {
        (super(),
          (this.#r = (e) => {
            if ("u" > typeof window && window.addEventListener) {
              let t = () => e(!0),
                r = () => e(!1);
              return (
                window.addEventListener("online", t, !1),
                window.addEventListener("offline", r, !1),
                () => {
                  (window.removeEventListener("online", t), window.removeEventListener("offline", r));
                }
              );
            }
          }));
      }
      onSubscribe() {
        this.#t || this.setEventListener(this.#r);
      }
      onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), (this.#t = void 0));
      }
      setEventListener(e) {
        ((this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
      }
      setOnline(e) {
        this.#n !== e &&
          ((this.#n = e),
          this.listeners.forEach((t) => {
            t(e);
          }));
      }
      isOnline() {
        return this.#n;
      }
    })();
    e.s(["onlineManager", 0, r]);
  },
  33878,
  30665,
  30864,
  (e) => {
    "use strict";
    var t = e.i(62240),
      r = e.i(16446),
      n = e.i(79825),
      i = e.i(2222),
      s = e.i(73578);
    function a(e) {
      return Math.min(1e3 * 2 ** e, 3e4);
    }
    function o(e) {
      return (e ?? "online") !== "online" || s.onlineManager.isOnline();
    }
    var u = class extends Error {
      constructor(e) {
        (super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent));
      }
    };
    function l(e) {
      let r,
        l,
        c,
        d = !1,
        f = 0,
        h = "pending",
        p = new Promise((e, t) => {
          ((l = e), (c = t));
        });
      p.catch(t.noop);
      let y = () =>
          i.focusManager.isFocused() && ("always" === e.networkMode || s.onlineManager.isOnline()) && e.canRun(),
        v = () => o(e.networkMode) && e.canRun(),
        m = (e) => {
          "pending" === h && (r?.(), (h = "resolved"), l(e));
        },
        b = (e) => {
          "pending" === h && (r?.(), (h = "rejected"), c(e));
        },
        g = () =>
          new Promise((t) => {
            ((r = (e) => {
              ("pending" !== h || y()) && t(e);
            }),
              e.onPause?.());
          }).then(() => {
            ((r = void 0), "pending" === h && e.onContinue?.());
          }),
        P = () => {
          let r;
          if ("pending" !== h) return;
          let i = 0 === f ? e.initialPromise : void 0;
          try {
            r = i ?? e.fn();
          } catch (e) {
            r = Promise.reject(e);
          }
          Promise.resolve(r)
            .then(m)
            .catch((r) => {
              if ("pending" !== h) return;
              let i = e.retry ?? 3 * !(0, n.isServer)(),
                s = e.retryDelay ?? a,
                o = "function" == typeof s ? s(f, r) : s,
                u = !0 === i || ("number" == typeof i && f < i) || ("function" == typeof i && i(f, r));
              d || !u
                ? b(r)
                : (f++,
                  e.onFail?.(f, r),
                  (0, t.sleep)(o)
                    .then(() => (y() ? void 0 : g()))
                    .then(() => {
                      d ? b(r) : P();
                    }));
            });
        };
      return {
        promise: p,
        status: () => h,
        cancel: (t) => {
          if ("pending" === h) {
            let r = new u(t);
            (b(r), e.onCancel?.(r));
          }
        },
        continue: () => (r?.(), p),
        cancelRetry: () => {
          d = !0;
        },
        continueRetry: () => {
          d = !1;
        },
        canStart: v,
        start: () => (v() ? P() : g().then(P), p),
      };
    }
    e.s(["CancelledError", 0, u, "canFetch", 0, o, "createRetryer", 0, l], 30665);
    var c = e.i(19784),
      d = class {
        #i;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          (this.clearGcTimeout(),
            (0, t.isValidTimeout)(this.gcTime) &&
              (this.#i = c.timeoutManager.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)));
        }
        updateGcTime(e) {
          this.gcTime = Math.max(this.gcTime || 0, e ?? ((0, n.isServer)() ? 1 / 0 : 3e5));
        }
        clearGcTimeout() {
          void 0 !== this.#i && (c.timeoutManager.clearTimeout(this.#i), (this.#i = void 0));
        }
      };
    function f(e, { pages: t, pageParams: r }) {
      let n = t.length - 1;
      return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
    }
    function h(e, { pages: t, pageParams: r }) {
      return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
    }
    e.s(["Removable", 0, d], 30864);
    var p = class extends d {
      #s;
      #a;
      #o;
      #u;
      #l;
      #c;
      #d;
      #f;
      constructor(e) {
        (super(),
          (this.#f = !1),
          (this.#d = e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          (this.#l = e.client),
          (this.#u = this.#l.getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          (this.#a = m(this.options)),
          (this.state = e.state ?? this.#a),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get queryType() {
        return this.#s;
      }
      get promise() {
        return this.#c?.promise;
      }
      setOptions(e) {
        if (
          ((this.options = { ...this.#d, ...e }),
          e?._type && (this.#s = e._type),
          this.updateGcTime(this.options.gcTime),
          this.state && void 0 === this.state.data)
        ) {
          let e = m(this.options);
          void 0 !== e.data && (this.setState(v(e.data, e.dataUpdatedAt)), (this.#a = e));
        }
      }
      optionalRemove() {
        this.observers.length || "idle" !== this.state.fetchStatus || this.#u.remove(this);
      }
      setData(e, r) {
        let n = (0, t.replaceData)(this.state.data, e, this.options);
        return (this.#h({ data: n, type: "success", dataUpdatedAt: r?.updatedAt, manual: r?.manual }), n);
      }
      setState(e) {
        this.#h({ type: "setState", state: e });
      }
      cancel(e) {
        let r = this.#c?.promise;
        return (this.#c?.cancel(e), r ? r.then(t.noop).catch(t.noop) : Promise.resolve());
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      get resetState() {
        return this.#a;
      }
      reset() {
        (this.destroy(), this.setState(this.resetState));
      }
      isActive() {
        return this.observers.some((e) => !1 !== (0, t.resolveQueryValue)(e.options.enabled, this));
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === t.skipToken || !this.isFetched();
      }
      isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
      }
      isStatic() {
        return (
          this.getObserversCount() > 0 &&
          this.observers.some((e) => "static" === (0, t.resolveQueryValue)(e.options.staleTime, this))
        );
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : void 0 === this.state.data || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return (
          void 0 === this.state.data ||
          ("static" !== e && (!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e)))
        );
      }
      onFocus() {
        (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#c?.continue());
      }
      onOnline() {
        (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#c?.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          this.#u.notify({ type: "observerAdded", query: this, observer: e }));
      }
      removeObserver(e) {
        let t = this.observers.indexOf(e);
        -1 !== t &&
          (this.observers.splice(t, 1),
          this.observers.length ||
            (this.#c &&
              (this.#f || ("paused" === this.state.fetchStatus && "pending" === this.state.status)
                ? this.#c.cancel({ revert: !0 })
                : this.#c.cancelRetry()),
            this.scheduleGc()),
          this.#u.notify({ type: "observerRemoved", query: this, observer: e }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || this.#h({ type: "invalidate" });
      }
      async fetch(e, r) {
        var n;
        let i;
        if ("idle" !== this.state.fetchStatus && this.#c?.status() !== "rejected") {
          if (void 0 !== this.state.data && r?.cancelRefetch) this.cancel({ silent: !0 });
          else if (this.#c) return (this.#c.continueRetry(), this.#c.promise);
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          let e = this.observers.find((e) => e.options.queryFn);
          e && this.setOptions(e.options);
        }
        let s = new AbortController(),
          a = (e) => {
            Object.defineProperty(e, "signal", { enumerable: !0, get: () => ((this.#f = !0), s.signal) });
          },
          o = () => {
            let e,
              n = (0, t.ensureQueryFn)(this.options, r),
              i = (a((e = { client: this.#l, queryKey: this.queryKey, meta: this.meta })), e);
            return ((this.#f = !1), this.options.persister) ? this.options.persister(n, i, this) : n(i);
          },
          c =
            (a(
              (i = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#l,
                state: this.state,
                fetchFn: o,
              }),
            ),
            i);
        (("infinite" === this.#s
          ? ((n = this.options.pages),
            {
              onFetch: (e, r) => {
                let i = e.options,
                  s = e.fetchOptions?.meta?.fetchMore?.direction,
                  a = e.state.data?.pages || [],
                  o = e.state.data?.pageParams || [],
                  u = { pages: [], pageParams: [] },
                  l = 0,
                  c = async () => {
                    let r = !1,
                      c = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                      d = async (n, i, s) => {
                        let a;
                        if (r) return Promise.reject(e.signal.reason);
                        if (null == i && n.pages.length) return Promise.resolve(n);
                        let o =
                            ((a = {
                              client: e.client,
                              queryKey: e.queryKey,
                              pageParam: i,
                              direction: s ? "backward" : "forward",
                              meta: e.options.meta,
                            }),
                            (0, t.addConsumeAwareSignal)(
                              a,
                              () => e.signal,
                              () => (r = !0),
                            ),
                            a),
                          u = await c(o),
                          { maxPages: l } = e.options,
                          d = s ? t.addToStart : t.addToEnd;
                        return { pages: d(n.pages, u, l), pageParams: d(n.pageParams, i, l) };
                      };
                    if (s && a.length) {
                      let e = "backward" === s,
                        t = e ? h : f,
                        r = { pages: a, pageParams: o };
                      u = await d(r, t(i, r), e);
                    } else {
                      let e = n ?? a.length;
                      do {
                        let e = 0 === l ? (o[0] ?? i.initialPageParam) : f(i, u);
                        if (l > 0 && null == e) break;
                        ((u = await d(u, e)), l++);
                      } while (l < e);
                    }
                    return u;
                  };
                e.options.persister
                  ? (e.fetchFn = () =>
                      e.options.persister?.(
                        c,
                        { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal },
                        r,
                      ))
                  : (e.fetchFn = c);
              },
            })
          : this.options.behavior
        )?.onFetch(c, this),
          (this.#o = this.state),
          ("idle" === this.state.fetchStatus || this.state.fetchMeta !== c.fetchOptions?.meta) &&
            this.#h({ type: "fetch", meta: c.fetchOptions?.meta }));
        let d = (this.#c = l({
          initialPromise: r?.initialPromise,
          fn: c.fetchFn,
          onCancel: (e) => {
            (e instanceof u && e.revert && this.setState({ ...this.#o, fetchStatus: "idle" }), s.abort());
          },
          onFail: (e, t) => {
            this.#h({ type: "failed", failureCount: e, error: t });
          },
          onPause: () => {
            this.#h({ type: "pause" });
          },
          onContinue: () => {
            this.#h({ type: "continue" });
          },
          retry: c.options.retry,
          retryDelay: c.options.retryDelay,
          networkMode: c.options.networkMode,
          canRun: () => !0,
        }));
        try {
          let e = await d.start();
          if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(e),
            this.#u.config.onSuccess?.(e, this),
            this.#u.config.onSettled?.(e, this.state.error, this),
            e
          );
        } catch (e) {
          if (e instanceof u) {
            if (e.silent) return this.#c.promise;
            else if (e.revert) {
              if (void 0 === this.state.data) throw e;
              return this.state.data;
            }
          }
          throw (
            this.#h({ type: "error", error: e }),
            this.#u.config.onError?.(e, this),
            this.#u.config.onSettled?.(this.state.data, e, this),
            e
          );
        } finally {
          (this.#c === d && (this.#c = void 0), this.scheduleGc());
        }
      }
      #h(e) {
        let t = (t) => {
          switch (e.type) {
            case "failed":
              return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
            case "pause":
              return { ...t, fetchStatus: "paused" };
            case "continue":
              return { ...t, fetchStatus: "fetching" };
            case "fetch":
              return { ...t, ...y(t.data, this.options), fetchMeta: e.meta ?? null };
            case "success":
              let r = {
                ...t,
                ...v(e.data, e.dataUpdatedAt),
                dataUpdateCount: t.dataUpdateCount + 1,
                ...(!e.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
              };
              return ((this.#o = e.manual ? r : void 0), r);
            case "error":
              let n = e.error;
              return {
                ...t,
                error: n,
                errorUpdateCount: t.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: t.fetchFailureCount + 1,
                fetchFailureReason: n,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0,
              };
            case "invalidate":
              return { ...t, isInvalidated: !0 };
            case "setState":
              return { ...t, ...e.state };
          }
        };
        ((this.state = t(this.state)),
          r.notifyManager.batch(() => {
            (this.observers.slice().forEach((e) => {
              e.onQueryUpdate();
            }),
              this.#u.notify({ query: this, type: "updated", action: e }));
          }));
      }
    };
    function y(e, t) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: o(t.networkMode) ? "fetching" : "paused",
        ...(void 0 === e && { error: null, status: "pending" }),
      };
    }
    function v(e, t) {
      return { data: e, dataUpdatedAt: t ?? Date.now(), error: null, isInvalidated: !1, status: "success" };
    }
    function m(e) {
      let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
        r = void 0 !== t,
        n = r ? ("function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
      return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? (n ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    e.s(["Query", 0, p, "fetchState", 0, y], 33878);
  },
  62240,
  19784,
  (e) => {
    "use strict";
    let t = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: (e) => clearInterval(e),
      },
      r = new (class {
        #p = t;
        #y = !1;
        setTimeoutProvider(e) {
          this.#p = e;
        }
        setTimeout(e, t) {
          return this.#p.setTimeout(e, t);
        }
        clearTimeout(e) {
          this.#p.clearTimeout(e);
        }
        setInterval(e, t) {
          return this.#p.setInterval(e, t);
        }
        clearInterval(e) {
          this.#p.clearInterval(e);
        }
      })();
    e.s(
      [
        "systemSetTimeoutZero",
        0,
        function (e) {
          setTimeout(e, 0);
        },
        "timeoutManager",
        0,
        r,
      ],
      19784,
    );
    let n = "u" < typeof window || "Deno" in globalThis;
    function i(e, t) {
      return (t?.queryKeyHashFn || s)(e);
    }
    function s(e) {
      return JSON.stringify(e, (e, t) =>
        l(t)
          ? Object.keys(t)
              .sort()
              .reduce((e, r) => ((e[r] = t[r]), e), {})
          : t,
      );
    }
    function a(e, t) {
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if (e && t && "object" == typeof e && "object" == typeof t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (t.length > e.length) return !1;
          for (let r = 0; r < t.length; r++) if (!a(e[r], t[r])) return !1;
          return !0;
        }
        for (let r of Object.keys(t)) if (!a(e[r], t[r])) return !1;
        return !0;
      }
      return !1;
    }
    let o = Object.prototype.hasOwnProperty;
    function u(e) {
      return Array.isArray(e) && e.length === Object.keys(e).length;
    }
    function l(e) {
      if (!c(e)) return !1;
      let t = Object.getPrototypeOf(e),
        r = t?.constructor;
      if (void 0 === r) return !0;
      if ("function" != typeof r) return !1;
      let n = r.prototype;
      return !!c(n) && !!n.hasOwnProperty("isPrototypeOf") && t === Object.prototype;
    }
    function c(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    let d = Symbol();
    e.s(
      [
        "addConsumeAwareSignal",
        0,
        function (e, t, r) {
          let n,
            i = !1;
          return (
            Object.defineProperty(e, "signal", {
              enumerable: !0,
              get: () => (
                (n ??= t()),
                i || ((i = !0), n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })),
                n
              ),
            }),
            e
          );
        },
        "addToEnd",
        0,
        function (e, t, r = 0) {
          let n = [...e, t];
          return r && n.length > r ? n.slice(1) : n;
        },
        "addToStart",
        0,
        function (e, t, r = 0) {
          let n = [t, ...e];
          return r && n.length > r ? n.slice(0, -1) : n;
        },
        "ensureQueryFn",
        0,
        function (e, t) {
          return !e.queryFn && t?.initialPromise
            ? () => t.initialPromise
            : e.queryFn && e.queryFn !== d
              ? e.queryFn
              : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
        },
        "functionalUpdate",
        0,
        function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        "hashKey",
        0,
        s,
        "hashQueryKeyByOptions",
        0,
        i,
        "isServer",
        0,
        n,
        "isValidTimeout",
        0,
        function (e) {
          return "number" == typeof e && e >= 0 && e !== 1 / 0;
        },
        "matchMutation",
        0,
        function (e, t) {
          let { exact: r, status: n, predicate: i, mutationKey: o } = e;
          if (o) {
            if (!t.options.mutationKey) return !1;
            if (r) {
              if (s(t.options.mutationKey) !== s(o)) return !1;
            } else if (!a(t.options.mutationKey, o)) return !1;
          }
          return (!n || t.state.status === n) && (!i || !!i(t));
        },
        "matchQuery",
        0,
        function (e, t) {
          let { type: r = "all", exact: n, fetchStatus: s, predicate: o, queryKey: u, stale: l } = e;
          if (u) {
            if (n) {
              if (t.queryHash !== i(u, t.options)) return !1;
            } else if (!a(t.queryKey, u)) return !1;
          }
          if ("all" !== r) {
            let e = t.isActive();
            if (("active" === r && !e) || ("inactive" === r && e)) return !1;
          }
          return ("boolean" != typeof l || t.isStale() === l) && (!s || s === t.state.fetchStatus) && (!o || !!o(t));
        },
        "noop",
        0,
        function () {},
        "partialMatchKey",
        0,
        a,
        "replaceData",
        0,
        function (e, t, r) {
          return "function" == typeof r.structuralSharing
            ? r.structuralSharing(e, t)
            : !1 !== r.structuralSharing
              ? (function e(t, r, n = 0) {
                  if (t === r) return t;
                  if (n > 500) return r;
                  let i = u(t) && u(r);
                  if (!i && !(l(t) && l(r))) return r;
                  let s = (i ? t : Object.keys(t)).length,
                    a = i ? r : Object.keys(r),
                    c = a.length,
                    d = i ? Array(c) : {},
                    f = 0;
                  for (let u = 0; u < c; u++) {
                    let l = i ? u : a[u],
                      c = t[l],
                      h = r[l];
                    if (c === h) {
                      ((d[l] = c), (i ? u < s : o.call(t, l)) && f++);
                      continue;
                    }
                    if (null === c || null === h || "object" != typeof c || "object" != typeof h) {
                      d[l] = h;
                      continue;
                    }
                    let p = e(c, h, n + 1);
                    ((d[l] = p), p === c && f++);
                  }
                  return s === c && f === s ? t : d;
                })(e, t)
              : t;
        },
        "resolveQueryValue",
        0,
        function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        "shallowEqualObjects",
        0,
        function (e, t) {
          if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let r in e) if (e[r] !== t[r]) return !1;
          return !0;
        },
        "shouldThrowError",
        0,
        function (e, t) {
          return "function" == typeof e ? e(...t) : !!e;
        },
        "skipToken",
        0,
        d,
        "sleep",
        0,
        function (e) {
          return new Promise((t) => {
            r.setTimeout(t, e);
          });
        },
        "timeUntilStale",
        0,
        function (e, t) {
          return Math.max(e + (t || 0) - Date.now(), 0);
        },
      ],
      62240,
    );
  },
  7506,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(21935);
    let n = t.createContext(void 0);
    e.s([
      "QueryClientProvider",
      0,
      ({ client: e, children: i }) => (
        t.useEffect(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e],
        ),
        (0, r.jsx)(n.Provider, { value: e, children: i })
      ),
      "useQueryClient",
      0,
      (e) => {
        let r = t.useContext(n);
        if (e) return e;
        if (!r) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return r;
      },
    ]);
  },
]);
