(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  37583,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "PlusLargeIcon",
        0,
        ({ size: e = 24, ariaHidden: n = !0, ...r }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            "aria-hidden": n,
            focusable: "false",
            ...r,
            children: (0, t.jsx)("path", {
              d: "M11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20Z",
              fill: "currentColor",
            }),
          }),
      ],
      37583,
    );
  },
  53831,
  3353,
  (e) => {
    "use strict";
    var t = e.i(47452);
    let n = t.createContext(void 0),
      r = { disableStyleElements: !1 };
    (e.s(
      [
        "useCSPContext",
        0,
        function () {
          return t.useContext(n) ?? r;
        },
      ],
      53831,
    ),
      e.s(
        [
          "isElementDisabled",
          0,
          function (e) {
            return null == e || e.hasAttribute("disabled") || "true" === e.getAttribute("aria-disabled");
          },
        ],
        3353,
      ));
  },
  18996,
  (e) => {
    "use strict";
    var t,
      n = e.i(21935);
    (e.s([], 57186), e.i(57186));
    var r = e.i(47452),
      i = e.i(576),
      a = e.i(75235),
      l = e.i(56232),
      o = e.i(79331),
      s = e.i(45329),
      u = e.i(74725);
    let d = r.createContext(void 0);
    function c() {
      let e = r.useContext(d);
      if (void 0 === e) throw Error((0, u.default)(64));
      return e;
    }
    let f = { tabActivationDirection: (e) => ({ "data-activation-direction": e }) };
    var p = e.i(38745),
      g = e.i(91697);
    let v = r.forwardRef(function (e, t) {
      let {
          className: u,
          defaultValue: c = 0,
          onValueChange: v,
          orientation: x = "horizontal",
          render: m,
          value: R,
          style: C,
          ...E
        } = e,
        y = void 0 !== e.defaultValue,
        S = r.useRef([]),
        [I, w] = r.useState(() => new Map()),
        [L, T] = (0, i.useControlled)({ controlled: R, default: c, name: "Tabs", state: "value" }),
        A = void 0 !== R,
        [M, k] = r.useState(() => new Map()),
        O = r.useRef(void 0),
        D = r.useCallback((e) => b(M, e), [M]),
        [N, P] = r.useState(() => ({ previousValue: L, tabActivationDirection: "none" })),
        { previousValue: j, tabActivationDirection: z } = N,
        _ = z,
        H = !1;
      j !== L && ((_ = h(j, L, x, M)), (H = null != j && null != L && null == D(L)));
      let W = H ? j : L,
        B = j !== W || z !== _;
      (0, a.useIsoLayoutEffect)(() => {
        B && P({ previousValue: W, tabActivationDirection: _ });
      }, [W, B, _]);
      let V = (0, l.useStableCallback)((e, t) => {
          ((t.activationDirection = h(L, e, x, M)), v?.(e, t), t.isCanceled || T(e));
        }),
        Y = (0, l.useStableCallback)((e, t) => {
          v?.(e, (0, p.createChangeEventDetails)(t, void 0, void 0, { activationDirection: "none" }));
        }),
        F = (0, l.useStableCallback)(
          (e, t) => (
            w((n) => {
              let r = new Map(n);
              return (r.set(e, t), r);
            }),
            () => {
              w((n) => {
                if (n.get(e) !== t) return n;
                let r = new Map(n);
                return (r.delete(e), r);
              });
            }
          ),
        ),
        K = r.useCallback((e) => I.get(e), [I]),
        U = r.useCallback(
          (e) => {
            for (let t of M.values()) if (e === t.value) return t.id;
          },
          [M],
        ),
        $ = r.useMemo(
          () => ({
            getTabElementBySelectedValue: D,
            getTabIdByPanelValue: U,
            getTabPanelIdByValue: K,
            onValueChange: V,
            orientation: x,
            registerMountedTabPanel: F,
            setTabMap: k,
            tabActivationDirection: _,
            value: L,
          }),
          [D, U, K, V, x, F, k, _, L],
        ),
        G = r.useMemo(() => {
          for (let e of M.values()) if (e.value === L) return e;
        }, [M, L]),
        q = r.useMemo(() => {
          for (let e of M.values()) if (!e.disabled) return e.value;
        }, [M]),
        J = r.useRef(!y),
        Z = r.useRef(c),
        Q = r.useRef(y),
        X = r.useRef(!1);
      (0, a.useIsoLayoutEffect)(() => {
        if (A) return;
        function e(e, t) {
          (T(e), P({ previousValue: e, tabActivationDirection: "none" }), Y(e, t), (J.current = !1));
        }
        if (0 === M.size) {
          X.current && null !== L && !O.current?.isConnected && e(null, g.REASONS.missing);
          return;
        }
        ((X.current = !0), (O.current = M.keys().next().value));
        let t = G?.disabled,
          n = null == G && null !== L;
        if ((t || L !== Z.current || (Q.current = !1), Q.current && t && L === Z.current)) return;
        let r = J.current;
        if (t || n) {
          let n = q ?? null;
          if (L === n) {
            J.current = !1;
            return;
          }
          let i = g.REASONS.missing;
          (r ? (i = g.REASONS.initial) : t && (i = g.REASONS.disabled), e(n, i));
          return;
        }
        r && null != G && (Y(L, g.REASONS.initial), (J.current = !1));
      }, [q, A, Y, G, T, M, L]);
      let ee = { orientation: x, tabActivationDirection: _ },
        et = (0, o.useRenderElement)("div", e, { state: ee, ref: t, props: E, stateAttributesMapping: f });
      return (0, n.jsx)(d.Provider, {
        value: $,
        children: (0, n.jsx)(s.CompositeList, { elementsRef: S, children: et }),
      });
    });
    function b(e, t) {
      for (let [n, r] of e.entries()) if (t === r.value) return n;
      return null;
    }
    function h(e, t, n, r) {
      if (null == e || null == t) return "none";
      let [i, a, l] = "horizontal" === n ? ["left", "left", "right"] : ["top", "up", "down"],
        o = b(r, e),
        s = b(r, t);
      if (null == o || null == s)
        return o !== s && ("number" == typeof e || "string" == typeof e) && typeof e == typeof t
          ? t > e
            ? l
            : a
          : "none";
      let u = o.getBoundingClientRect()[i],
        d = s.getBoundingClientRect()[i];
      return d < u ? a : d > u ? l : "none";
    }
    var x = e.i(46746),
      m = e.i(84092),
      R = e.i(7406);
    let C = "data-composite-item-active";
    var E = e.i(56222),
      y = e.i(40377);
    let S = r.createContext(void 0);
    function I() {
      let e = r.useContext(S);
      if (void 0 === e) throw Error((0, u.default)(65));
      return e;
    }
    var w = e.i(80841);
    let L = r.forwardRef(function (e, t) {
      let { className: n, disabled: i = !1, render: s, value: u, id: d, nativeButton: v = !0, style: b, ...h } = e,
        { value: S, getTabPanelIdByValue: L, onValueChange: T, orientation: A, tabActivationDirection: M } = c(),
        { activateOnFocus: k, registerTabResizeObserverElement: O, tabsListElement: D } = I(),
        { highlightedIndex: N, onHighlightedIndexChange: P } = (0, y.useCompositeRootContext)(),
        j = (0, m.useBaseUiId)(d),
        z = r.useMemo(() => ({ disabled: i, id: j, value: u }), [i, j, u]),
        { compositeProps: _, compositeRef: H, index: W } = (0, E.useCompositeItem)({ metadata: z }),
        B = u === S,
        V = r.useRef(!1),
        Y = r.useRef(null),
        F = (0, l.useStableCallback)((e) => {
          (Y.current?.(), (Y.current = e ? O(e) : null));
        });
      (0, a.useIsoLayoutEffect)(() => {
        if (V.current) {
          V.current = !1;
          return;
        }
        if (B && W > -1 && N !== W) {
          if (null != D) {
            let e = (0, w.activeElement)((0, x.ownerDocument)(D));
            if (e && (0, w.contains)(D, e)) return;
          }
          i || P(W);
        }
      }, [B, W, N, P, i, D]);
      let { getButtonProps: K, buttonRef: U } = (0, R.useButton)({ disabled: i, native: v, focusableWhenDisabled: !0 }),
        $ = L(u),
        G = r.useRef(!1),
        q = r.useRef(!1);
      function J(e) {
        T(u, (0, p.createChangeEventDetails)(g.REASONS.none, e.nativeEvent, void 0, { activationDirection: "none" }));
      }
      return (0, o.useRenderElement)("button", e, {
        state: { disabled: i, active: B, orientation: A, tabActivationDirection: M },
        ref: [t, U, H, F],
        props: [
          _,
          {
            role: "tab",
            "aria-controls": $,
            "aria-selected": B,
            id: j,
            onClick: function (e) {
              B || i || J(e);
            },
            onFocus: function (e) {
              B || i || (k && (!G.current || q.current) && J(e));
            },
            onPointerDown: function (e) {
              if (B || i) return;
              ((G.current = !0), (q.current = 0 === e.button));
              let t = (0, x.ownerDocument)(e.currentTarget);
              function n() {
                ((G.current = !1),
                  (q.current = !1),
                  t.removeEventListener("pointerup", n),
                  t.removeEventListener("pointercancel", n));
              }
              (t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n));
            },
            [C]: B ? "" : void 0,
            onKeyDownCapture() {
              V.current = !0;
            },
          },
          h,
          K,
        ],
        stateAttributesMapping: f,
      });
    });
    var T = e.i(65079),
      A = e.i(60309),
      M = e.i(88386),
      k = e.i(86228);
    function O() {
      return k.NOOP;
    }
    function D() {
      return !1;
    }
    function N() {
      return !0;
    }
    var P = e.i(53831);
    function j(e) {
      let { script: t } = e,
        { nonce: r } = (0, P.useCSPContext)();
      return (0, M.useSyncExternalStore)(O, D, N)
        ? (0, n.jsx)("script", { nonce: r, dangerouslySetInnerHTML: { __html: t }, suppressHydrationWarning: !0 })
        : null;
    }
    var z = e.i(1408),
      _ = e.i(61305);
    let H = { ...f, activeTabPosition: () => null, activeTabSize: () => null },
      W = r.forwardRef(function (e, i) {
        let { className: a, render: l, renderBeforeHydration: s = !1, style: u, ...d } = e,
          { getTabElementBySelectedValue: f, orientation: p, tabActivationDirection: g, value: v } = c(),
          { tabsListElement: b, registerIndicatorUpdateListener: h } = I(),
          x = (function () {
            let [, e] = r.useState({});
            return r.useCallback(() => {
              e({});
            }, []);
          })();
        r.useEffect(() => h(x), [h, x]);
        let m = 0,
          R = 0,
          C = 0,
          E = 0,
          y = 0,
          S = 0,
          w = !1;
        if (null != v && null != b) {
          let e = f(v);
          if (null != e) {
            w = !0;
            let { width: t, height: n } = (0, z.getCssDimensions)(e),
              { width: r, height: i } = (0, z.getCssDimensions)(b),
              a = e.getBoundingClientRect(),
              l = b.getBoundingClientRect(),
              o = r > 0 ? l.width / r : 1,
              s = i > 0 ? l.height / i : 1,
              u = (function (e, t) {
                let n = B(e),
                  r = B(t),
                  i = n.left - r.left - t.clientLeft,
                  a = n.top - r.top - t.clientTop,
                  l = (0, T.getParentNode)(e);
                for (; (0, T.isHTMLElement)(l) && l !== t && !(0, T.isLastTraversableNode)(l);)
                  ((i -= l.scrollLeft), (a -= l.scrollTop), (l = (0, T.getParentNode)(l)));
                return { left: i, top: a };
              })(e, b);
            ((m = u.left), (C = u.top));
            let d = (a.left - l.left) / o + b.scrollLeft - b.clientLeft,
              c = (a.top - l.top) / s + b.scrollTop - b.clientTop,
              f = (function (e) {
                let t = (0, A.ownerWindow)(e).getComputedStyle(e),
                  { x: n, y: r } = (0, _.getElementTransform)(e, t),
                  i = n,
                  a = r,
                  { translate: l } = t;
                if (l && "none" !== l) {
                  let t = l.split(" ");
                  ((i += V(t[0], e.offsetWidth)), (a += V(t[1], e.offsetHeight)));
                }
                return { x: i, y: a };
              })(e);
            (2 >= Math.abs(d - f.x - m) && 2 >= Math.abs(c - f.y - C) && ((m = d), (C = c)),
              (y = t),
              (S = n),
              (R = b.scrollWidth - m - y),
              (E = b.scrollHeight - C - S));
          }
        }
        let L = w ? { left: m, right: R, top: C, bottom: E } : null,
          M = w ? { width: y, height: S } : null,
          k = w
            ? {
                "--active-tab-left": `${m}px`,
                "--active-tab-right": `${R}px`,
                "--active-tab-top": `${C}px`,
                "--active-tab-bottom": `${E}px`,
                "--active-tab-width": `${y}px`,
                "--active-tab-height": `${S}px`,
              }
            : void 0,
          O = w && y > 0 && S > 0,
          D = (0, o.useRenderElement)("span", e, {
            state: { orientation: p, activeTabPosition: L, activeTabSize: M, tabActivationDirection: g },
            ref: i,
            props: [{ role: "presentation", style: k, hidden: !O }, d, { suppressHydrationWarning: !0 }],
            stateAttributesMapping: H,
          });
        return null == v
          ? null
          : (0, n.jsxs)(r.Fragment, { children: [D, s && (t || (t = (0, n.jsx)(j, { script: "" })))] });
      });
    function B(e) {
      let t = 0,
        n = 0,
        r = e;
      for (; null != r;) {
        ((t += r.offsetLeft), (n += r.offsetTop));
        let e = r.offsetParent;
        (null != e && ((t += e.clientLeft), (n += e.clientTop)), (r = e));
      }
      return { left: t, top: n };
    }
    function V(e, t) {
      if (!e) return 0;
      let n = parseFloat(e);
      return Number.isFinite(n) ? (e.endsWith("%") ? (n / 100) * t : n) : 0;
    }
    var Y = e.i(77081),
      F = e.i(73117),
      K = e.i(20999),
      U = e.i(44228),
      $ = e.i(68716),
      G = e.i(14156);
    (G.TransitionStatusDataAttributes.startingStyle, G.TransitionStatusDataAttributes.endingStyle);
    let q = { ...f, ...F.transitionStatusMapping },
      J = r.forwardRef(function (e, t) {
        let { className: n, value: i, render: l, keepMounted: s = !1, style: u, ...d } = e,
          {
            value: f,
            getTabIdByPanelValue: p,
            orientation: g,
            tabActivationDirection: v,
            registerMountedTabPanel: b,
          } = c(),
          h = (0, m.useBaseUiId)(),
          { ref: x, index: R } = (0, $.useCompositeListItem)(),
          C = i === f,
          { mounted: E, transitionStatus: y, setMounted: S } = (0, U.useTransitionStatus)(C),
          I = !E,
          w = p(i),
          L = r.useRef(null),
          T = (0, o.useRenderElement)("div", e, {
            state: { hidden: I, orientation: g, tabActivationDirection: v, transitionStatus: y },
            ref: [t, x, L],
            props: [
              {
                "aria-labelledby": w,
                hidden: I,
                id: h,
                role: "tabpanel",
                tabIndex: C ? 0 : -1,
                inert: (0, Y.inertValue)(!C),
                "data-index": R,
              },
              d,
            ],
            stateAttributesMapping: q,
          });
        return ((0, K.useOpenChangeComplete)({
          open: C,
          ref: L,
          onComplete() {
            C || S(!1);
          },
        }),
        (0, a.useIsoLayoutEffect)(() => {
          if (null != h && (!I || s)) return b(i, h);
        }, [I, s, i, h, b]),
        s || E)
          ? T
          : null;
      });
    var Z = e.i(3353),
      Q = e.i(12084),
      X = e.i(40648),
      ee = e.i(53441),
      et = e.i(98624);
    function en(e) {
      let {
          render: t,
          className: i,
          style: u,
          refs: d = k.EMPTY_ARRAY,
          props: c = k.EMPTY_ARRAY,
          state: f = k.EMPTY_OBJECT,
          stateAttributesMapping: p,
          highlightedIndex: g,
          onHighlightedIndexChange: v,
          orientation: b,
          grid: h,
          loopFocus: x,
          onLoop: m,
          enableHomeAndEndKeys: R,
          onMapChange: E,
          stopEventPropagation: S = !0,
          rootRef: I,
          disabledIndices: L,
          modifierKeys: T,
          highlightItemOnHover: A = !1,
          tag: M = "div",
          ...O
        } = e,
        {
          props: D,
          highlightedIndex: N,
          onHighlightedIndexChange: P,
          elementsRef: j,
          onMapChange: z,
          relayKeyboardEvent: _,
        } = (function (e) {
          let {
              loopFocus: t = !0,
              orientation: n = "both",
              grid: i,
              onLoop: o,
              direction: s,
              highlightedIndex: u,
              onHighlightedIndexChange: d,
              rootRef: c,
              enableHomeAndEndKeys: f = !1,
              stopEventPropagation: p,
              disabledIndices: g,
              modifierKeys: v = k.EMPTY_ARRAY,
            } = e,
            [b, h] = r.useState(0),
            x = null != i,
            m = r.useRef(null),
            R = (0, Q.useMergedRefs)(m, c),
            E = r.useRef([]),
            y = r.useRef(!1),
            S = r.useRef(null),
            I = u ?? b,
            L = (0, l.useStableCallback)((e, t = !1) => {
              if (((S.current = E.current[e] ?? null), (d ?? h)(e), t)) {
                let t = E.current[e];
                (0, X.scrollIntoViewIfNeeded)(m.current, t, s, n);
              }
            }),
            T = (0, l.useStableCallback)((e) => {
              if (0 === e.size) return;
              if (y.current) {
                let e = E.current,
                  t = e.indexOf(S.current);
                if (-1 === t) {
                  let t = e[I];
                  !t || (0, ee.isListIndexDisabled)(e, I, g)
                    ? L(
                        (function (e, t) {
                          let n = -1;
                          for (let r = 0; r < e.length; r += 1) {
                            let i = e[r];
                            if (!(!i || (0, ee.isListIndexDisabled)(e, r, t))) {
                              if (i.hasAttribute(C)) return r;
                              -1 === n && (n = r);
                            }
                          }
                          return Math.max(n, 0);
                        })(e, g),
                      )
                    : (S.current = t);
                } else t !== I && L(t);
                return;
              }
              y.current = !0;
              let t = Array.from(e.keys()),
                r = t.find((e) => e?.hasAttribute(C)) ?? null,
                i = r ? (e.get(r)?.index ?? -1) : -1;
              if (-1 !== i) L(i);
              else if ((0, ee.isListIndexDisabled)(t, I, g)) {
                let e = (0, ee.findNonDisabledListIndex)(t, { disabledIndices: g });
                (0, ee.isIndexOutOfListBounds)(t, e) || L(e);
              }
              (0, X.scrollIntoViewIfNeeded)(m.current, r, s, n);
            });
          (0, a.useIsoLayoutEffect)(() => {
            if (null == g || null != u || !y.current) return;
            let e = E.current;
            if ((0, ee.isListIndexDisabled)(e, I, g)) {
              let t = (0, ee.findNonDisabledListIndex)(e, { disabledIndices: g });
              (0, ee.isIndexOutOfListBounds)(e, t) || L(t);
            }
          }, [g, u, I, E, L]);
          let A = (0, l.useStableCallback)((e, t, n) => (o ? o(e, t, n, E) : n)),
            M = (0, l.useStableCallback)((e) => {
              let r = e.key === X.HOME || e.key === X.END;
              if (
                !X.COMPOSITE_KEYS.has(e.key) ||
                (!f && r) ||
                (function (e, t) {
                  for (let n of X.MODIFIER_KEYS) if (!t.includes(n) && e.getModifierState(n)) return !0;
                  return !1;
                })(e, v) ||
                !m.current
              )
                return;
              let a = "rtl" === s,
                l = a ? X.ARROW_LEFT : X.ARROW_RIGHT,
                u = a ? X.ARROW_RIGHT : X.ARROW_LEFT,
                d = "vertical" === n ? X.ARROW_DOWN : l,
                c = "vertical" === n ? X.ARROW_UP : u,
                b = (0, w.getTarget)(e.nativeEvent);
              if (null != b && (0, X.isNativeInput)(b) && !(0, Z.isElementDisabled)(b)) {
                let t = b.selectionStart,
                  n = b.selectionEnd,
                  r = b.value;
                if (null == t || e.shiftKey || t !== n || (e.key !== c && t < r.length) || (e.key !== d && t > 0))
                  return;
              }
              let h = I,
                R = (0, ee.getMinListIndex)(E, g),
                C = (0, ee.getMaxListIndex)(E, g);
              null != i &&
                (h = i({
                  disabledIndices: g,
                  elementsRef: E,
                  event: e,
                  highlightedIndex: I,
                  loopFocus: t,
                  maxIndex: C,
                  minIndex: R,
                  onLoop: A,
                  orientation: n,
                  rtl: a,
                }));
              let y = ("vertical" !== n && e.key === l) || ("horizontal" !== n && e.key === X.ARROW_DOWN),
                S = ("vertical" !== n && e.key === u) || ("horizontal" !== n && e.key === X.ARROW_UP);
              (f && (e.key === X.HOME ? (h = R) : e.key === X.END && (h = C)),
                h === I &&
                  (y || S) &&
                  (t && h === C && y
                    ? ((h = R), o && (h = o(e, I, h, E)))
                    : t && h === R && S
                      ? ((h = C), o && (h = o(e, I, h, E)))
                      : (h = (0, ee.findNonDisabledListIndex)(E.current, {
                          startingIndex: h,
                          decrement: S,
                          disabledIndices: g,
                        }))),
                h === I ||
                  (0, ee.isIndexOutOfListBounds)(E.current, h) ||
                  (p && e.stopPropagation(),
                  (x || r || y || S) && e.preventDefault(),
                  L(h, !0),
                  queueMicrotask(() => {
                    E.current[h]?.focus();
                  })));
            });
          return {
            props: {
              ref: R,
              onFocus(e) {
                let t = m.current,
                  n = (0, w.getTarget)(e.nativeEvent);
                t && null != n && (0, X.isNativeInput)(n) && n.setSelectionRange(0, n.value.length);
              },
              onKeyDown: M,
            },
            highlightedIndex: I,
            onHighlightedIndexChange: L,
            elementsRef: E,
            onMapChange: T,
            relayKeyboardEvent: M,
          };
        })({
          grid: h,
          loopFocus: x,
          onLoop: m,
          orientation: b,
          highlightedIndex: g,
          onHighlightedIndexChange: v,
          rootRef: I,
          stopEventPropagation: S,
          enableHomeAndEndKeys: R,
          direction: (0, et.useDirection)(),
          disabledIndices: L,
          modifierKeys: T,
        }),
        H = (0, o.useRenderElement)(M, e, { state: f, ref: d, props: [D, ...c, O], stateAttributesMapping: p }),
        W = r.useMemo(
          () => ({ highlightedIndex: N, onHighlightedIndexChange: P, highlightItemOnHover: A, relayKeyboardEvent: _ }),
          [N, P, A, _],
        );
      return (0, n.jsx)(y.CompositeRootContext.Provider, {
        value: W,
        children: (0, n.jsx)(s.CompositeList, {
          elementsRef: j,
          onMapChange: (e) => {
            (E?.(e), z(e));
          },
          children: H,
        }),
      });
    }
    let er = r.forwardRef(function (e, t) {
      let { activateOnFocus: i = !1, className: o, loopFocus: s = !0, render: u, style: d, ...p } = e,
        { orientation: g, setTabMap: v, tabActivationDirection: b } = c(),
        [h, x] = r.useState(0),
        [m, R] = r.useState(null),
        C = r.useRef(new Set()),
        E = r.useRef(new Set()),
        y = r.useRef(null);
      (0, a.useIsoLayoutEffect)(() => {
        if ("u" < typeof ResizeObserver) return;
        let e = new ResizeObserver(() => {
          C.current.forEach((e) => {
            e();
          });
        });
        return (
          (y.current = e),
          m && e.observe(m),
          E.current.forEach((t) => {
            e.observe(t);
          }),
          () => {
            (e.disconnect(), (y.current = null));
          }
        );
      }, [m]);
      let I = (0, l.useStableCallback)(
          (e) => (
            C.current.add(e),
            () => {
              C.current.delete(e);
            }
          ),
        ),
        w = (0, l.useStableCallback)(
          (e) => (
            E.current.add(e),
            y.current?.observe(e),
            () => {
              (E.current.delete(e), y.current?.unobserve(e));
            }
          ),
        ),
        L = r.useMemo(
          () => ({
            activateOnFocus: i,
            registerIndicatorUpdateListener: I,
            registerTabResizeObserverElement: w,
            tabsListElement: m,
          }),
          [i, I, w, m],
        );
      return (0, n.jsx)(S.Provider, {
        value: L,
        children: (0, n.jsx)(en, {
          render: u,
          className: o,
          style: d,
          state: { orientation: g, tabActivationDirection: b },
          refs: [t, R],
          props: [{ "aria-orientation": "vertical" === g ? "vertical" : void 0, role: "tablist" }, p],
          stateAttributesMapping: f,
          highlightedIndex: h,
          enableHomeAndEndKeys: !0,
          loopFocus: s,
          orientation: g,
          onHighlightedIndexChange: x,
          onMapChange: v,
          disabledIndices: k.EMPTY_ARRAY,
        }),
      });
    });
    e.s(["Indicator", 0, W, "List", 0, er, "Panel", 0, J, "Root", 0, v, "Tab", 0, L], 40670);
    var ei = e.i(40670),
      ei = ei,
      ea = e.i(64179),
      el = e.i(79203),
      eo = e.i(94814);
    let es = (0, ea.cva)(
        "group/tabs-list text-muted-foreground relative inline-flex w-fit items-center justify-center rounded-lg p-0.5 group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none md:rounded-xl md:p-1 md:group-data-horizontal/tabs:h-10",
        {
          variants: { variant: { default: "bg-muted", line: "gap-1 bg-transparent" } },
          defaultVariants: { variant: "default" },
        },
      ),
      eu = (0, ea.cva)("pointer-events-none absolute z-0", {
        variants: {
          variant: {
            default: "bg-background dark:border-input dark:bg-input/30 rounded-md shadow-sm md:rounded-lg dark:border",
            line: "after:bg-foreground after:absolute group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5",
          },
        },
      });
    e.s(
      [
        "Tabs",
        0,
        function ({ className: e, orientation: t = "horizontal", ...r }) {
          return (0, n.jsx)(ei.Root, {
            "data-slot": "tabs",
            "data-orientation": t,
            className: (0, eo.cn)("group/tabs flex gap-2 data-horizontal:flex-col", e),
            ...r,
          });
        },
        "TabsContent",
        0,
        function ({ className: e, ...t }) {
          return (0, n.jsx)(ei.Panel, {
            "data-slot": "tabs-content",
            className: (0, eo.cn)("flex-1 text-sm outline-none", e),
            ...t,
          });
        },
        "TabsList",
        0,
        function ({ children: e, className: t, variant: r = "default", ...i }) {
          return (0, n.jsxs)(ei.List, {
            "data-slot": "tabs-list",
            "data-variant": r,
            className: (0, eo.cn)(es({ variant: r }), t),
            ...i,
            children: [
              (0, n.jsx)(ei.Indicator, {
                "data-slot": "tabs-indicator",
                className: eu({ variant: r }),
                render: (e, t) => {
                  let { activeTabPosition: r, activeTabSize: i } = t;
                  return r && i?.width && i?.height
                    ? (0, n.jsx)(el.motion.span, {
                        ...e,
                        animate: { x: r.left, y: r.top, width: i.width, height: i.height },
                        initial: !1,
                        style: { ...e.style, top: 0, left: 0 },
                        transition: { type: "spring", stiffness: 520, damping: 40, mass: 0.8 },
                      })
                    : (0, n.jsx)("span", { ...e });
                },
              }),
              e,
            ],
          });
        },
        "TabsTrigger",
        0,
        function ({ className: e, ...t }) {
          return (0, n.jsx)(ei.Tab, {
            "data-slot": "tabs-trigger",
            className: (0, eo.cn)(
              "text-foreground/60 hover:text-foreground data-active:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:text-muted-foreground dark:hover:text-foreground dark:data-active:text-foreground relative z-10 inline-flex h-7 flex-1 items-center justify-center gap-1 rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-3 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 md:h-8 md:gap-1.5 md:rounded-lg md:px-3 md:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 md:[&_svg:not([class*='size-'])]:size-4",
              e,
            ),
            ...t,
          });
        },
      ],
      18996,
    );
  },
]);
