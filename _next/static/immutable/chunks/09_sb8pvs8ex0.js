(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  82063,
  38110,
  (e) => {
    "use strict";
    var t = e.i(47452),
      n = e.i(72765),
      r = e.i(47035),
      i = e.i(13191),
      o = e.i(46746),
      l = e.i(64032),
      s = e.i(65079),
      a = e.i(97879),
      u = e.i(80841),
      c = e.i(11978),
      f = e.i(38745),
      d = e.i(91697);
    let g = r.platform.os.mac && r.platform.engine.webkit;
    e.s(
      [
        "useFocus",
        0,
        function (e, r = {}) {
          let { enabled: p = !0, delay: m } = r,
            h = "rootStore" in e ? e.rootStore : e,
            { events: v, dataRef: y } = h.context,
            E = t.useRef(!1),
            x = t.useRef(null),
            S = t.useRef(!0),
            b = (0, l.useTimeout)();
          (t.useEffect(() => {
            let e = h.select("domReferenceElement");
            if (!p) return;
            let t = (0, s.getWindow)(e);
            return (0, i.mergeCleanups)(
              (0, n.addEventListener)(t, "blur", function () {
                let e = h.select("domReferenceElement");
                !h.select("open") &&
                  (0, s.isHTMLElement)(e) &&
                  e === (0, u.activeElement)((0, o.ownerDocument)(e)) &&
                  ((E.current = !0), (x.current = e));
              }),
              g &&
                (0, n.addEventListener)(
                  t,
                  "keydown",
                  function () {
                    S.current = !0;
                  },
                  !0,
                ),
              g &&
                (0, n.addEventListener)(
                  t,
                  "pointerdown",
                  function () {
                    S.current = !1;
                  },
                  !0,
                ),
            );
          }, [h, p]),
            t.useEffect(() => {
              if (p)
                return (
                  v.on("openchange", e),
                  () => {
                    v.off("openchange", e);
                  }
                );
              function e(e) {
                if (e.reason === d.REASONS.triggerPress || e.reason === d.REASONS.escapeKey) {
                  let e = h.select("domReferenceElement");
                  (0, s.isElement)(e) && ((x.current = e), (E.current = !0));
                }
              }
            }, [v, p, h]));
          let w = t.useMemo(() => {
            function e() {
              ((E.current = !1), (x.current = null));
            }
            return {
              onMouseLeave() {
                e();
              },
              onFocus(t) {
                let n = t.currentTarget;
                if (E.current) {
                  if (x.current === n) return;
                  e();
                }
                let r = (0, u.getTarget)(t.nativeEvent);
                if ((0, s.isElement)(r)) {
                  if (g && !t.relatedTarget) {
                    if (!S.current && !(0, c.isTypeableElement)(r)) return;
                  } else if (!(0, c.matchesFocusVisible)(r)) return;
                }
                let i = (0, c.isTargetInsideEnabledTrigger)(t.relatedTarget, h.context.triggerElements),
                  { nativeEvent: o, currentTarget: l } = t,
                  a = "function" == typeof m ? m() : m;
                (h.select("open") && i) || 0 === a || void 0 === a
                  ? h.setOpen(!0, (0, f.createChangeEventDetails)(d.REASONS.triggerFocus, o, l))
                  : b.start(a, () => {
                      E.current || h.setOpen(!0, (0, f.createChangeEventDetails)(d.REASONS.triggerFocus, o, l));
                    });
              },
              onBlur(t) {
                e();
                let n = t.relatedTarget,
                  r = t.nativeEvent,
                  i =
                    (0, s.isElement)(n) &&
                    n.hasAttribute((0, a.createAttribute)("focus-guard")) &&
                    "outside" === n.getAttribute("data-type");
                b.start(0, () => {
                  let e = h.select("domReferenceElement"),
                    t = (0, u.activeElement)((0, o.ownerDocument)(e));
                  if (
                    (!n && t === e) ||
                    (0, u.contains)(y.current.floatingContext?.refs.floating.current, t) ||
                    (0, u.contains)(e, t) ||
                    i
                  )
                    return;
                  let l = n ?? t;
                  (0, c.isTargetInsideEnabledTrigger)(l, h.context.triggerElements) ||
                    h.setOpen(!1, (0, f.createChangeEventDetails)(d.REASONS.triggerFocus, r));
                });
              },
            };
          }, [y, m, h, b]);
          return t.useMemo(() => (p ? { reference: w, trigger: w } : {}), [p, w]);
        },
      ],
      82063,
    );
    var p = e.i(52543),
      m = e.i(55399);
    class h {
      constructor() {
        ((this.pointerType = void 0),
          (this.interactedInside = !1),
          (this.handler = void 0),
          (this.blockMouseMove = !0),
          (this.performedPointerEventsMutation = !1),
          (this.pointerEventsScopeElement = null),
          (this.pointerEventsReferenceElement = null),
          (this.pointerEventsFloatingElement = null),
          (this.restTimeoutPending = !1),
          (this.openChangeTimeout = new l.Timeout()),
          (this.restTimeout = new l.Timeout()),
          (this.handleCloseOptions = void 0));
      }
      static create() {
        return new h();
      }
      dispose = () => {
        (this.openChangeTimeout.clear(), this.restTimeout.clear());
      };
      disposeEffect = () => this.dispose;
    }
    let v = new WeakMap();
    function y(e) {
      if (!e.performedPointerEventsMutation) return;
      let t = e.pointerEventsScopeElement;
      (t &&
        v.get(t) === e &&
        (e.pointerEventsScopeElement?.style.removeProperty("pointer-events"),
        e.pointerEventsReferenceElement?.style.removeProperty("pointer-events"),
        e.pointerEventsFloatingElement?.style.removeProperty("pointer-events"),
        v.delete(t)),
        (e.performedPointerEventsMutation = !1),
        (e.pointerEventsScopeElement = null),
        (e.pointerEventsReferenceElement = null),
        (e.pointerEventsFloatingElement = null));
    }
    e.s(
      [
        "applySafePolygonPointerEventsMutation",
        0,
        function (e, t) {
          let { scopeElement: n, referenceElement: r, floatingElement: i } = t,
            o = v.get(n);
          (o && o !== e && y(o),
            y(e),
            (e.performedPointerEventsMutation = !0),
            (e.pointerEventsScopeElement = n),
            (e.pointerEventsReferenceElement = r),
            (e.pointerEventsFloatingElement = i),
            v.set(n, e),
            (n.style.pointerEvents = "none"),
            (r.style.pointerEvents = "auto"),
            (i.style.pointerEvents = "auto"));
        },
        "clearSafePolygonPointerEventsMutation",
        0,
        y,
        "useHoverInteractionSharedState",
        0,
        function (e) {
          let t = e.context.dataRef.current,
            n = (0, m.useRefWithInit)(() => t.hoverInteractionState ?? h.create()).current;
          return (
            t.hoverInteractionState || (t.hoverInteractionState = n),
            (0, p.useOnMount)(t.hoverInteractionState.disposeEffect),
            t.hoverInteractionState
          );
        },
      ],
      38110,
    );
  },
  50616,
  17816,
  (e) => {
    "use strict";
    var t = e.i(47452),
      n = e.i(72765),
      r = e.i(13191),
      i = e.i(75235),
      o = e.i(46746),
      l = e.i(56232),
      s = e.i(64032),
      a = e.i(65079),
      u = e.i(38745),
      c = e.i(91697),
      f = e.i(42701),
      d = e.i(80841),
      g = e.i(54248),
      p = e.i(38110),
      m = e.i(11978),
      h = e.i(36488),
      v = e.i(39664);
    e.s(
      [
        "useHoverFloatingInteraction",
        0,
        function (e, y = {}) {
          let { enabled: E = !0, closeDelay: x = 0, nodeId: S } = y,
            b = "rootStore" in e ? e.rootStore : e,
            w = b.useState("open"),
            R = b.useState("floatingElement"),
            C = b.useState("domReferenceElement"),
            { dataRef: P } = b.context,
            T = (0, f.useFloatingTree)(),
            O = (0, f.useFloatingParentNodeId)(),
            A = (0, p.useHoverInteractionSharedState)(b),
            L = (0, s.useTimeout)(),
            M = (0, l.useStableCallback)(() =>
              (0, h.isClickLikeOpenEvent)(P.current.openEvent?.type, A.interactedInside),
            ),
            D = (0, l.useStableCallback)(() => (0, h.isHoverOpenEvent)(P.current.openEvent?.type)),
            I = (0, l.useStableCallback)(() => {
              (0, p.clearSafePolygonPointerEventsMutation)(A);
            });
          ((0, i.useIsoLayoutEffect)(() => {
            w || ((A.pointerType = void 0), (A.restTimeoutPending = !1), (A.interactedInside = !1), I());
          }, [w, A, I]),
            t.useEffect(() => I, [I]),
            (0, i.useIsoLayoutEffect)(() => {
              if (E && w && A.handleCloseOptions?.blockPointerEvents && D() && (0, a.isElement)(C) && R) {
                let e = (0, o.ownerDocument)(R),
                  t = T?.nodesRef.current.find((e) => e.id === O)?.context?.elements.floating;
                t && (t.style.pointerEvents = "");
                let n = A.pointerEventsScopeElement !== R ? A.pointerEventsScopeElement : null,
                  r = t !== R ? t : null,
                  i = A.handleCloseOptions?.getScope?.() ?? n ?? r ?? C.closest("[data-rootownerid]") ?? e.body;
                return (
                  (0, p.applySafePolygonPointerEventsMutation)(A, {
                    scopeElement: i,
                    referenceElement: C,
                    floatingElement: R,
                  }),
                  () => {
                    I();
                  }
                );
              }
            }, [E, w, C, R, A, D, T, O, I]),
            t.useEffect(() => {
              if (E)
                return (0, r.mergeCleanups)(
                  R &&
                    (0, n.addEventListener)(R, "mouseenter", function () {
                      (A.openChangeTimeout.clear(), L.clear(), T?.events.off("floating.closed", t), I());
                    }),
                  R &&
                    (0, n.addEventListener)(R, "mouseleave", function (n) {
                      if (e() && T) return void T.events.on("floating.closed", t);
                      if ((0, v.isInsideEnabledTrigger)(n.relatedTarget, b.context.triggerElements)) return;
                      let r = P.current.floatingContext?.nodeId ?? S,
                        i = n.relatedTarget;
                      if (!(
                        T &&
                        r &&
                        (0, a.isElement)(i) &&
                        (0, g.getNodeChildren)(T.nodesRef.current, r, !1).some((e) =>
                          (0, d.contains)(e.context?.elements.floating, i),
                        )
                      )) {
                        let e, t;
                        if (A.handler) return void A.handler(n);
                        (I(),
                          D() &&
                            !M() &&
                            ((e = (0, h.getDelay)(x, "close", A.pointerType)),
                            (t = () => {
                              (b.setOpen(!1, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, n)),
                                T?.events.emit("floating.closed", n));
                            }),
                            e ? A.openChangeTimeout.start(e, t) : (A.openChangeTimeout.clear(), t())));
                      }
                    }),
                  R &&
                    (0, n.addEventListener)(
                      R,
                      "pointerdown",
                      function (e) {
                        let t = (0, d.getTarget)(e);
                        if (!(0, m.isInteractiveElement)(t)) {
                          A.interactedInside = !1;
                          return;
                        }
                        A.interactedInside = t?.closest("[aria-haspopup]") != null;
                      },
                      !0,
                    ),
                  () => {
                    T?.events.off("floating.closed", t);
                  },
                );
              function e() {
                return !!(T && O && (0, g.getNodeChildren)(T.nodesRef.current, O).length > 0);
              }
              function t(n) {
                !T ||
                  !O ||
                  e() ||
                  L.start(0, () => {
                    (T.events.off("floating.closed", t),
                      b.setOpen(!1, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, n)),
                      T.events.emit("floating.closed", n));
                  });
              }
            }, [E, R, b, P, x, S, D, M, I, A, T, O, L]));
        },
      ],
      50616,
    );
    var y = e.i(29066),
      E = e.i(77081),
      x = e.i(86429),
      S = e.i(87594),
      b = e.i(94430),
      w = e.i(86228),
      R = e.i(1408);
    let C = "--popup-width",
      P = "--popup-height";
    var T = e.i(61299);
    function O(e, t, n) {
      let r = e.style.getPropertyValue(t);
      return (
        e.style.setProperty(t, n),
        () => {
          e.style.setProperty(t, r);
        }
      );
    }
    function A(e, t) {
      let n = [];
      for (let [r, i] of Object.entries(t)) n.push(O(e, r, i));
      return n.length
        ? () => {
            n.forEach((e) => e());
          }
        : w.NOOP;
    }
    function L(e, t) {
      let n = "auto" === t ? "auto" : `${t.width}px`,
        r = "auto" === t ? "auto" : `${t.height}px`;
      (e.style.setProperty(C, n), e.style.setProperty(P, r));
    }
    function M(e, t) {
      let n = "max-content" === t ? "max-content" : `${t.width}px`,
        r = "max-content" === t ? "max-content" : `${t.height}px`;
      (e.style.setProperty(T.positionerWidth, n), e.style.setProperty(T.positionerHeight, r));
    }
    var D = e.i(98624),
      I = e.i(60309),
      k = e.i(58579),
      H = e.i(78764);
    let N = {
      name: "adaptiveOrigin",
      async fn(e) {
        let {
            x: t,
            y: n,
            rects: { floating: r },
            elements: { floating: i },
            platform: l,
            strategy: s,
            placement: a,
          } = e,
          u = (0, I.ownerWindow)(i),
          c = u.getComputedStyle(i);
        if ("0s" === c.transitionDuration || "" === c.transitionDuration) return { x: t, y: n, data: H.DEFAULT_SIDES };
        let f = await l.getOffsetParent?.(i),
          d = { width: 0, height: 0 };
        if ("fixed" === s && u?.visualViewport) d = { width: u.visualViewport.width, height: u.visualViewport.height };
        else if (f === u) {
          let e = (0, o.ownerDocument)(i);
          d = { width: e.documentElement.clientWidth, height: e.documentElement.clientHeight };
        } else (await l.isElement?.(f)) && (d = await l.getDimensions(f));
        let g = (0, k.getSide)(a),
          p = t,
          m = n;
        return (
          "left" === g && (p = d.width - (t + r.width)),
          "top" === g && (m = d.height - (n + r.height)),
          {
            x: p,
            y: m,
            data: {
              sideX: "left" === g ? "right" : H.DEFAULT_SIDES.sideX,
              sideY: "top" === g ? "bottom" : H.DEFAULT_SIDES.sideY,
            },
          }
        );
      },
    };
    var F = e.i(21935);
    e.s(
      [
        "popupViewportStateMapping",
        0,
        { activationDirection: (e) => (e ? { "data-activation-direction": e } : null) },
        "usePopupViewport",
        0,
        function (e) {
          let n,
            { store: r, side: s, children: a } = e,
            u = (0, D.useDirection)(),
            c = r.useState("activeTriggerElement"),
            f = r.useState("activeTriggerId"),
            d = r.useState("open"),
            g = r.useState("payload"),
            p = r.useState("mounted"),
            m = r.useState("popupElement"),
            h = r.useState("positionerElement"),
            v = (0, S.usePreviousValue)(d ? c : null),
            I = (function (e, n) {
              let [r, o] = t.useState(0),
                l = t.useRef(e),
                s = t.useRef(n),
                a = t.useRef(!1);
              return (
                (0, i.useIsoLayoutEffect)(() => {
                  let t = l.current,
                    r = n !== s.current;
                  (e !== t
                    ? (o((e) => e + 1), (a.current = !r))
                    : a.current && r && (o((e) => e + 1), (a.current = !1)),
                    (l.current = e),
                    (s.current = n));
                }, [e, n]),
                `${e ?? "current"}-${r}`
              );
            })(f, g),
            k = t.useRef(null),
            [H, V] = t.useState(null),
            [W, j] = t.useState(null),
            B = t.useRef(null),
            $ = t.useRef(null),
            z = (0, b.useAnimationsFinished)(B, !0),
            _ = (0, x.useAnimationFrame)(),
            U = t.useRef(null),
            [Y, X] = t.useState(null),
            [K, q] = t.useState(!1);
          (0, i.useIsoLayoutEffect)(
            () => (
              r.set("adaptiveOrigin", N),
              () => {
                r.set("adaptiveOrigin", void 0);
              }
            ),
            [r],
          );
          let J = (0, l.useStableCallback)(() => {
              (B.current?.style.setProperty("animation", "none"),
                B.current?.style.setProperty("transition", "none"),
                $.current?.style.setProperty("display", "none"));
            }),
            G = (0, l.useStableCallback)((e) => {
              (B.current?.style.removeProperty("animation"),
                B.current?.style.removeProperty("transition"),
                $.current?.style.removeProperty("display"),
                e && X(e));
            }),
            Q = (0, l.useStableCallback)(() => {
              U.current?.abort();
              let e = new AbortController();
              ((U.current = e),
                z(() => {
                  (V(null), X(null), (k.current = null));
                }, e.signal));
            }),
            Z = t.useRef(null);
          ((0, i.useIsoLayoutEffect)(() => {
            (d && p) || (Z.current = null);
          }, [d, p]),
            (0, i.useIsoLayoutEffect)(() => {
              var e, t;
              let n, r, i, o;
              c &&
                v &&
                c !== v &&
                Z.current !== c &&
                k.current &&
                (V(k.current),
                q(!0),
                j(
                  ((e = v),
                  (t = c),
                  (n = e.getBoundingClientRect()),
                  (r = t.getBoundingClientRect()),
                  (i = { x: n.left + n.width / 2, y: n.top + n.height / 2 }),
                  {
                    horizontal: (o = { x: r.left + r.width / 2, y: r.top + r.height / 2 }).x - i.x,
                    vertical: o.y - i.y,
                  }),
                ),
                (Z.current = c));
            }, [c, v]),
            (0, i.useIsoLayoutEffect)(() => {
              null != H &&
                (U.current?.abort(),
                q(!0),
                _.request(() => {
                  (y.flushSync(() => {
                    q(!1);
                  }),
                    Q());
                }));
            }, [I, H, Q, _]),
            (0, i.useIsoLayoutEffect)(() => {
              let e = B.current;
              if (!e) return;
              let t = (0, o.ownerDocument)(e).createElement("div");
              for (let n of Array.from(e.childNodes)) t.appendChild(n.cloneNode(!0));
              k.current = t;
            }));
          let ee = null != H;
          return (
            (n = ee
              ? (0, F.jsxs)(t.Fragment, {
                  children: [
                    (0, F.jsx)(
                      "div",
                      {
                        "data-previous": !0,
                        inert: (0, E.inertValue)(!0),
                        ref: $,
                        style: { ...(Y ? { [C]: `${Y.width}px`, [P]: `${Y.height}px` } : null), position: "absolute" },
                        "data-ending-style": K ? void 0 : "",
                      },
                      "previous",
                    ),
                    (0, F.jsx)(
                      "div",
                      { "data-current": !0, ref: B, "data-starting-style": K ? "" : void 0, children: a },
                      I,
                    ),
                  ],
                })
              : (0, F.jsx)("div", { "data-current": !0, ref: B, children: a }, I)),
            (0, i.useIsoLayoutEffect)(() => {
              let e = $.current;
              e && H && e.replaceChildren(...Array.from(H.childNodes));
            }, [H]),
            !(function (e) {
              let {
                  popupElement: n,
                  positionerElement: r,
                  content: o,
                  mounted: s,
                  onMeasureLayout: a,
                  onMeasureLayoutComplete: u,
                  side: c,
                  direction: f,
                } = e,
                d = (0, b.useAnimationsFinished)(n, !0),
                g = (0, x.useAnimationFrame)(),
                p = t.useRef(null),
                m = t.useRef(!0),
                h = t.useRef(w.NOOP),
                v = (0, l.useStableCallback)(a),
                y = (0, l.useStableCallback)(u),
                E = t.useMemo(() => {
                  var e, t;
                  let n, r;
                  return (
                    (e = c),
                    (t = f),
                    (n = "top" === e),
                    (r = "left" === e || e === ("rtl" === t ? "inline-end" : "inline-start")),
                    n || r
                      ? { position: "absolute", [n ? "bottom" : "top"]: "0", [r ? "right" : "left"]: "0" }
                      : w.EMPTY_OBJECT
                  );
                }, [c, f]);
              (0, i.useIsoLayoutEffect)(() => {
                if (!s) {
                  ((h.current = w.NOOP), (m.current = !0), (p.current = null));
                  return;
                }
                if (!n || !r) return;
                ((h.current = A(n, E)), L(n, "auto"));
                let e = O(n, "position", "static"),
                  t = O(n, "transform", "none"),
                  i = O(n, "scale", "1"),
                  o = A(r, { [T.availableWidth]: "max-content", [T.availableHeight]: "max-content" });
                function l() {
                  (e(), t(), o(), i());
                }
                if ((v?.(), m.current || null === p.current)) {
                  M(r, "max-content");
                  let e = (0, R.getCssDimensions)(n);
                  return (
                    (p.current = e),
                    M(r, e),
                    l(),
                    y?.(null, e),
                    (m.current = !1),
                    () => {
                      (h.current(), (h.current = w.NOOP));
                    }
                  );
                }
                M(r, "max-content");
                let a = p.current,
                  u = (0, R.getCssDimensions)(n);
                ((p.current = u), L(n, a), l(), y?.(a, u), M(r, u));
                let c = new AbortController();
                return (
                  g.request(() => {
                    (L(n, u),
                      d(() => {
                        (n.style.setProperty(C, "auto"), n.style.setProperty(P, "auto"));
                      }, c.signal));
                  }),
                  () => {
                    (c.abort(), g.cancel(), h.current(), (h.current = w.NOOP));
                  }
                );
              }, [o, n, r, d, g, s, v, y, E]);
            })({
              popupElement: m,
              positionerElement: h,
              mounted: p,
              content: g,
              onMeasureLayout: J,
              onMeasureLayoutComplete: G,
              side: s,
              direction: u,
            }),
            {
              children: n,
              state: {
                activationDirection: (function (e) {
                  if (e) {
                    var t, n;
                    return `${(t = e.horizontal) > 5 ? "right" : t < -5 ? "left" : ""} ${(n = e.vertical) > 5 ? "down" : n < -5 ? "up" : ""}`;
                  }
                })(W),
                transitioning: ee,
              },
            }
          );
        },
      ],
      17816,
    );
  },
  77490,
  39664,
  (e) => {
    "use strict";
    var t = e.i(47452),
      n = e.i(29066),
      r = e.i(72765),
      i = e.i(13191),
      o = e.i(46746),
      l = e.i(56232),
      s = e.i(86942),
      a = e.i(65079),
      u = e.i(38745),
      c = e.i(91697),
      f = e.i(42701),
      d = e.i(80841),
      g = e.i(27309),
      p = e.i(38110),
      m = e.i(36488),
      h = e.i(11978);
    e.s(["isInsideEnabledTrigger", () => h.isTargetInsideEnabledTrigger], 39664);
    var h = h;
    let v = { current: null };
    e.s(
      [
        "useHoverReferenceInteraction",
        0,
        function (e, y = {}) {
          let {
              enabled: E = !0,
              delay: x = 0,
              handleClose: S = null,
              mouseOnly: b = !1,
              restMs: w = 0,
              move: R = !0,
              triggerElementRef: C = v,
              externalTree: P,
              isActiveTrigger: T = !0,
              getHandleCloseContext: O,
              isClosing: A,
              shouldOpen: L,
              guardStaleOpen: M = !1,
            } = y,
            D = "rootStore" in e ? e.rootStore : e,
            { dataRef: I, events: k } = D.context,
            H = (0, f.useFloatingTree)(P),
            N = (0, p.useHoverInteractionSharedState)(D),
            F = t.useRef(!1),
            V = (0, s.useValueAsRef)(S),
            W = (0, s.useValueAsRef)(x),
            j = (0, s.useValueAsRef)(w),
            B = (0, s.useValueAsRef)(E),
            $ = (0, s.useValueAsRef)(L),
            z = (0, s.useValueAsRef)(A),
            _ = (0, l.useStableCallback)(() =>
              (0, m.isClickLikeOpenEvent)(I.current.openEvent?.type, N.interactedInside),
            ),
            U = (0, l.useStableCallback)(() => $.current?.() !== !1),
            Y = (0, l.useStableCallback)((e, t, n) => {
              let r = D.context.triggerElements;
              return r.hasElement(t)
                ? !e || !(0, d.contains)(e, t)
                : !!(0, a.isElement)(n) &&
                    r.hasMatchingElement((e) => (0, d.contains)(e, n)) &&
                    (!e || !(0, d.contains)(e, n));
            }),
            X = (0, l.useStableCallback)(() => {
              N.handler &&
                ((0, o.ownerDocument)(D.select("domReferenceElement")).removeEventListener("mousemove", N.handler),
                (N.handler = void 0));
            }),
            K = (0, l.useStableCallback)(() => {
              (0, p.clearSafePolygonPointerEventsMutation)(N);
            });
          return (
            T && (N.handleCloseOptions = S?.__options),
            t.useEffect(() => X, [X]),
            t.useEffect(() => {
              if (E)
                return (
                  k.on("openchange", e),
                  () => {
                    k.off("openchange", e);
                  }
                );
              function e(e) {
                e.open
                  ? (F.current = !1)
                  : ((F.current = e.reason === c.REASONS.triggerHover),
                    X(),
                    N.openChangeTimeout.clear(),
                    N.restTimeout.clear(),
                    (N.blockMouseMove = !0),
                    (N.restTimeoutPending = !1));
              }
            }, [E, k, N, X]),
            t.useEffect(() => {
              if (!E) return;
              function e(t, n = !0) {
                let r = (0, m.getDelay)(W.current, "close", N.pointerType);
                r
                  ? N.openChangeTimeout.start(r, () => {
                      (D.setOpen(!1, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t)),
                        H?.events.emit("floating.closed", t));
                    })
                  : n &&
                    (N.openChangeTimeout.clear(),
                    D.setOpen(!1, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t)),
                    H?.events.emit("floating.closed", t));
              }
              let t = C.current ?? (T ? D.select("domReferenceElement") : null);
              if (!(0, a.isElement)(t)) return;
              function n(e) {
                if (
                  (N.openChangeTimeout.clear(),
                  (N.blockMouseMove = !1),
                  b && !(0, g.isMouseLikePointerType)(N.pointerType))
                )
                  return;
                let t = (0, m.getRestMs)(j.current),
                  n = (0, m.getDelay)(W.current, "open", N.pointerType),
                  r = (0, d.getTarget)(e),
                  i = e.currentTarget ?? null,
                  o = D.select("domReferenceElement"),
                  l = i;
                if ((0, a.isElement)(r) && !D.context.triggerElements.hasElement(r)) {
                  for (let e of D.context.triggerElements.elements())
                    if ((0, d.contains)(e, r)) {
                      l = e;
                      break;
                    }
                }
                (0, a.isElement)(i) &&
                  (0, a.isElement)(o) &&
                  !D.context.triggerElements.hasElement(i) &&
                  (0, d.contains)(i, o) &&
                  (l = o);
                let s = null != l && Y(o, l, r),
                  f = D.select("open"),
                  p = z.current?.() ?? "ending" === D.select("transitionStatus"),
                  h = !f && p && F.current,
                  v = !s && (0, a.isElement)(l) && (0, a.isElement)(o) && (0, d.contains)(o, l) && h,
                  y = t > 0 && !n,
                  E = !f || s;
                if ((s && (f || h)) || v) {
                  U() && D.setOpen(!0, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e, l));
                  return;
                }
                !y &&
                  (n
                    ? N.openChangeTimeout.start(n, () => {
                        E && U() && D.setOpen(!0, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e, l));
                      })
                    : E && U() && D.setOpen(!0, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e, l)));
              }
              function l(t) {
                if (_()) return void K();
                X();
                let n = D.select("domReferenceElement"),
                  r = (0, o.ownerDocument)(n);
                (N.restTimeout.clear(), (N.restTimeoutPending = !1));
                let i = I.current.floatingContext ?? O?.();
                if (!(0, h.isTargetInsideEnabledTrigger)(t.relatedTarget, D.context.triggerElements)) {
                  if (V.current && i) {
                    D.select("open") || N.openChangeTimeout.clear();
                    let n = C.current;
                    ((N.handler = V.current({
                      ...i,
                      tree: H,
                      x: t.clientX,
                      y: t.clientY,
                      onClose() {
                        (K(), X(), B.current && !_() && n === D.select("domReferenceElement") && e(t, !0));
                      },
                    })),
                      r.addEventListener("mousemove", N.handler),
                      N.handler(t));
                    return;
                  }
                  ("touch" === N.pointerType && (0, d.contains)(D.select("floatingElement"), t.relatedTarget)) || e(t);
                }
              }
              let s = M
                ? (0, r.addEventListener)(t, "mouseout", function (e) {
                    (0, d.contains)(t, e.relatedTarget) ||
                      (N.openChangeTimeout.clear(), N.restTimeout.clear(), (N.restTimeoutPending = !1));
                  })
                : void 0;
              return R
                ? (0, i.mergeCleanups)(
                    (0, r.addEventListener)(t, "mousemove", n, { once: !0 }),
                    (0, r.addEventListener)(t, "mouseenter", n),
                    (0, r.addEventListener)(t, "mouseleave", l),
                    s,
                  )
                : (0, i.mergeCleanups)(
                    (0, r.addEventListener)(t, "mouseenter", n),
                    (0, r.addEventListener)(t, "mouseleave", l),
                    s,
                  );
            }, [X, K, I, W, D, E, V, N, T, Y, _, b, R, j, C, H, B, O, z, U, M]),
            t.useMemo(() => {
              if (E)
                return {
                  onPointerDown: e,
                  onPointerEnter: e,
                  onMouseMove(e) {
                    let { nativeEvent: t } = e,
                      r = e.currentTarget,
                      i = D.select("domReferenceElement"),
                      o = D.select("open"),
                      l = Y(i, r, e.target);
                    if (b && !(0, g.isMouseLikePointerType)(N.pointerType)) return;
                    if (o && l && N.handleCloseOptions?.blockPointerEvents) {
                      let e = D.select("floatingElement");
                      if (e) {
                        let t = N.handleCloseOptions?.getScope?.() ?? r.ownerDocument.body;
                        (0, p.applySafePolygonPointerEventsMutation)(N, {
                          scopeElement: t,
                          referenceElement: r,
                          floatingElement: e,
                        });
                      }
                    }
                    let s = (0, m.getRestMs)(j.current);
                    function a() {
                      if (((N.restTimeoutPending = !1), _())) return;
                      let e = D.select("open");
                      !N.blockMouseMove &&
                        (!e || l) &&
                        U() &&
                        D.setOpen(!0, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t, r));
                    }
                    (!o || l) &&
                      0 !== s &&
                      ((!l && N.restTimeoutPending && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                        (N.restTimeout.clear(),
                        "touch" === N.pointerType
                          ? n.flushSync(() => {
                              a();
                            })
                          : l && o
                            ? a()
                            : ((N.restTimeoutPending = !0), N.restTimeout.start(s, a))));
                  },
                };
              function e(e) {
                N.pointerType = e.pointerType;
              }
            }, [E, N, _, Y, b, D, j, U])
          );
        },
      ],
      77490,
    );
  },
  36488,
  (e) => {
    "use strict";
    var t = e.i(27309);
    e.s([
      "getDelay",
      0,
      function (e, n, r) {
        let i = null == r || (0, t.isMouseLikePointerType)(r) ? ("function" == typeof e ? e() : e) : 0;
        return "number" == typeof i ? i : i?.[n];
      },
      "getRestMs",
      0,
      function (e) {
        return "function" == typeof e ? e() : e;
      },
      "isClickLikeOpenEvent",
      0,
      function (e, t) {
        return t || "click" === e || "mousedown" === e;
      },
      "isHoverOpenEvent",
      0,
      function (e) {
        return e?.includes("mouse") && "mousedown" !== e;
      },
    ]);
  },
  32683,
  (e) => {
    "use strict";
    var t = e.i(65079),
      n = e.i(64032),
      r = e.i(80841),
      i = e.i(54248);
    let o = 0.1 * 0.1;
    function l(e, t, n, r, i, o) {
      return r >= t != o >= t && e <= ((i - n) * (t - r)) / (o - r) + n;
    }
    function s(e, t, n, r, i, o, s, a, u, c) {
      let f = !1;
      return (
        l(e, t, n, r, i, o) && (f = !f),
        l(e, t, i, o, s, a) && (f = !f),
        l(e, t, s, a, u, c) && (f = !f),
        l(e, t, u, c, n, r) && (f = !f),
        f
      );
    }
    function a(e, t, n, r, i, o) {
      let l = Math.min(n, i),
        s = Math.max(n, i),
        a = Math.min(r, o),
        u = Math.max(r, o);
      return e >= l && e <= s && t >= a && t <= u;
    }
    e.s([
      "safePolygon",
      0,
      function (e = {}) {
        let { blockPointerEvents: l = !1 } = e,
          u = new n.Timeout(),
          c = ({ x: e, y: n, placement: l, elements: c, onClose: f, nodeId: d, tree: g }) => {
            let p = l?.split("-")[0],
              m = !1,
              h = null,
              v = null,
              y = "u" > typeof performance ? performance.now() : 0;
            return function (l) {
              u.clear();
              let E = c.domReference,
                x = c.floating;
              if (!E || !x || null == p || null == e || null == n) return;
              let { clientX: S, clientY: b } = l,
                w = (0, r.getTarget)(l),
                R = "mouseleave" === l.type,
                C = (0, r.contains)(x, w),
                P = (0, r.contains)(E, w);
              if (C && ((m = !0), !R)) return;
              if (P && ((m = !1), !R)) {
                m = !0;
                return;
              }
              if (R && (0, t.isElement)(l.relatedTarget) && (0, r.contains)(x, l.relatedTarget)) return;
              function T() {
                return !!(g && (0, i.getNodeChildren)(g.nodesRef.current, d).length > 0);
              }
              function O() {
                T() || (u.clear(), f());
              }
              if (T()) return;
              let A = E.getBoundingClientRect(),
                L = x.getBoundingClientRect(),
                M = e > L.right - L.width / 2,
                D = n > L.bottom - L.height / 2,
                I = L.width > A.width,
                k = L.height > A.height,
                H = (I ? A : L).left,
                N = (I ? A : L).right,
                F = (k ? A : L).top,
                V = (k ? A : L).bottom;
              if (
                ("top" === p && n >= A.bottom - 1) ||
                ("bottom" === p && n <= A.top + 1) ||
                ("left" === p && e >= A.right - 1) ||
                ("right" === p && e <= A.left + 1)
              )
                return void O();
              let W = !1;
              switch (p) {
                case "top":
                  W = a(S, b, H, A.top + 1, N, L.bottom - 1);
                  break;
                case "bottom":
                  W = a(S, b, H, L.top + 1, N, A.bottom - 1);
                  break;
                case "left":
                  W = a(S, b, L.right - 1, V, A.left + 1, F);
                  break;
                case "right":
                  W = a(S, b, A.right - 1, V, L.left + 1, F);
              }
              if (W) return;
              if (
                (m && (!(S >= A.x) || !(S <= A.x + A.width) || !(b >= A.y) || !(b <= A.y + A.height))) ||
                (!R &&
                  (function (e, t) {
                    let n = performance.now(),
                      r = n - y;
                    if (null === h || null === v || 0 === r) return ((h = e), (v = t), (y = n), !1);
                    let i = e - h,
                      l = t - v;
                    return ((h = e), (v = t), (y = n), i * i + l * l < r * r * o);
                  })(S, b))
              )
                return void O();
              let j = !1;
              switch (p) {
                case "top": {
                  let t = I ? 0.25 : 2,
                    r = n + 0.5 + 1,
                    i = M || I ? L.bottom - 0.5 : L.top,
                    o = M ? (I ? L.bottom - 0.5 : L.top) : L.bottom - 0.5;
                  j = s(S, b, I || M ? e + t : e - t, r, I ? e - t : M ? e + t : e - t, r, L.left, i, L.right, o);
                  break;
                }
                case "bottom": {
                  let t = I ? 0.25 : 2,
                    r = n - 0.5,
                    i = M || I ? L.top + 0.5 : L.bottom,
                    o = M ? (I ? L.top + 0.5 : L.bottom) : L.top + 0.5;
                  j = s(S, b, I || M ? e + t : e - t, r, I ? e - t : M ? e + t : e - t, r, L.left, i, L.right, o);
                  break;
                }
                case "left": {
                  let t = k ? 0.25 : 2,
                    r = e + 0.5 + 1,
                    i = D || k ? L.right - 0.5 : L.left,
                    o = D ? (k ? L.right - 0.5 : L.left) : L.right - 0.5;
                  j = s(S, b, i, L.top, o, L.bottom, r, k || D ? n + t : n - t, r, k ? n - t : D ? n + t : n - t);
                  break;
                }
                case "right": {
                  let t = k ? 0.25 : 2,
                    r = e - 0.5,
                    i = D || k ? L.left + 0.5 : L.right,
                    o = D ? (k ? L.left + 0.5 : L.right) : L.left + 0.5;
                  j = s(S, b, r, k || D ? n + t : n - t, r, k ? n - t : D ? n + t : n - t, i, L.top, o, L.bottom);
                }
              }
              j ? m || u.start(40, O) : O();
            };
          };
        return ((c.__options = { ...e, blockPointerEvents: l }), c);
      },
    ]);
  },
  76807,
  25290,
  78764,
  61299,
  2544,
  12168,
  87594,
  (e) => {
    "use strict";
    var t = e.i(47452),
      n = e.i(58579),
      r = e.i(46746),
      i = e.i(60309),
      o = e.i(75235),
      l = e.i(86942),
      s = e.i(56232);
    function a(e, t, r) {
      let i,
        { reference: o, floating: l } = e,
        s = (0, n.getSideAxis)(t),
        a = (0, n.getAlignmentAxis)(t),
        u = (0, n.getAxisLength)(a),
        c = (0, n.getSide)(t),
        f = o.x + o.width / 2 - l.width / 2,
        d = o.y + o.height / 2 - l.height / 2,
        g = o[u] / 2 - l[u] / 2;
      switch (c) {
        case "top":
          i = { x: f, y: o.y - l.height };
          break;
        case "bottom":
          i = { x: f, y: o.y + o.height };
          break;
        case "right":
          i = { x: o.x + o.width, y: d };
          break;
        case "left":
          i = { x: o.x - l.width, y: d };
          break;
        default:
          i = { x: o.x, y: o.y };
      }
      let p = (0, n.getAlignment)(t);
      return (p && (i[a] += g * ("end" === p ? 1 : -1) * (r && "y" === s ? -1 : 1)), i);
    }
    async function u(e, t) {
      var r;
      void 0 === t && (t = {});
      let { x: i, y: o, platform: l, rects: s, elements: a, strategy: u } = e,
        {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: g = !1,
          padding: p = 0,
        } = (0, n.evaluate)(t, e),
        m = (0, n.getPaddingObject)(p),
        h = a[g ? ("floating" === d ? "reference" : "floating") : d],
        v = (0, n.rectToClientRect)(
          await l.getClippingRect({
            element:
              null == (r = await (null == l.isElement ? void 0 : l.isElement(h))) || r
                ? h
                : h.contextElement ||
                  (await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating))),
            boundary: c,
            rootBoundary: f,
            strategy: u,
          }),
        ),
        y = "floating" === d ? { x: i, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
        E = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)),
        x = ((await (null == l.isElement ? void 0 : l.isElement(E))) &&
          (await (null == l.getScale ? void 0 : l.getScale(E)))) || { x: 1, y: 1 },
        S = (0, n.rectToClientRect)(
          l.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: y,
                offsetParent: E,
                strategy: u,
              })
            : y,
        );
      return {
        top: (v.top - S.top + m.top) / x.y,
        bottom: (S.bottom - v.bottom + m.bottom) / x.y,
        left: (v.left - S.left + m.left) / x.x,
        right: (S.right - v.right + m.right) / x.x,
      };
    }
    let c = async (e, t, n) => {
      let { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: l } = n,
        s = l.detectOverflow ? l : { ...l, detectOverflow: u },
        c = await (null == l.isRTL ? void 0 : l.isRTL(t)),
        f = await l.getElementRects({ reference: e, floating: t, strategy: i }),
        { x: d, y: g } = a(f, r, c),
        p = r,
        m = 0,
        h = {};
      for (let n = 0; n < o.length; n++) {
        let u = o[n];
        if (!u) continue;
        let { name: v, fn: y } = u,
          {
            x: E,
            y: x,
            data: S,
            reset: b,
          } = await y({
            x: d,
            y: g,
            initialPlacement: r,
            placement: p,
            strategy: i,
            middlewareData: h,
            rects: f,
            platform: s,
            elements: { reference: e, floating: t },
          });
        ((d = null != E ? E : d),
          (g = null != x ? x : g),
          (h[v] = { ...h[v], ...S }),
          b &&
            m < 50 &&
            (m++,
            "object" == typeof b &&
              (b.placement && (p = b.placement),
              b.rects &&
                (f = !0 === b.rects ? await l.getElementRects({ reference: e, floating: t, strategy: i }) : b.rects),
              ({ x: d, y: g } = a(f, p, c))),
            (n = -1)));
      }
      return { x: d, y: g, placement: p, strategy: i, middlewareData: h };
    };
    function f(e, t) {
      return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
    }
    function d(e) {
      return n.sides.some((t) => e[t] >= 0);
    }
    function g(e) {
      let t = (0, n.min)(...e.map((e) => e.left)),
        r = (0, n.min)(...e.map((e) => e.top));
      return {
        x: t,
        y: r,
        width: (0, n.max)(...e.map((e) => e.right)) - t,
        height: (0, n.max)(...e.map((e) => e.bottom)) - r,
      };
    }
    let p = new Set(["left", "top"]);
    async function m(e, t) {
      let { placement: r, platform: i, elements: o } = e,
        l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
        s = (0, n.getSide)(r),
        a = (0, n.getAlignment)(r),
        u = "y" === (0, n.getSideAxis)(r),
        c = p.has(s) ? -1 : 1,
        f = l && u ? -1 : 1,
        d = (0, n.evaluate)(t, e),
        {
          mainAxis: g,
          crossAxis: m,
          alignmentAxis: h,
        } = "number" == typeof d
          ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
          : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
      return (
        a && "number" == typeof h && (m = "end" === a ? -1 * h : h),
        u ? { x: m * f, y: g * c } : { x: g * c, y: m * f }
      );
    }
    var h = e.i(65079);
    function v(e) {
      let t = (0, h.getComputedStyle)(e),
        r = parseFloat(t.width) || 0,
        i = parseFloat(t.height) || 0,
        o = (0, h.isHTMLElement)(e),
        l = o ? e.offsetWidth : r,
        s = o ? e.offsetHeight : i,
        a = (0, n.round)(r) !== l || (0, n.round)(i) !== s;
      return (a && ((r = l), (i = s)), { width: r, height: i, $: a });
    }
    function y(e) {
      return (0, h.isElement)(e) ? e : e.contextElement;
    }
    function E(e) {
      let t = y(e);
      if (!(0, h.isHTMLElement)(t)) return (0, n.createCoords)(1);
      let r = t.getBoundingClientRect(),
        { width: i, height: o, $: l } = v(t),
        s = (l ? (0, n.round)(r.width) : r.width) / i,
        a = (l ? (0, n.round)(r.height) : r.height) / o;
      return ((s && Number.isFinite(s)) || (s = 1), (a && Number.isFinite(a)) || (a = 1), { x: s, y: a });
    }
    let x = (0, n.createCoords)(0);
    function S(e) {
      let t = (0, h.getWindow)(e);
      return (0, h.isWebKit)() && t.visualViewport
        ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
        : x;
    }
    function b(e, t, r, i) {
      var o;
      (void 0 === t && (t = !1), void 0 === r && (r = !1));
      let l = e.getBoundingClientRect(),
        s = y(e),
        a = (0, n.createCoords)(1);
      t && (i ? (0, h.isElement)(i) && (a = E(i)) : (a = E(e)));
      let u = (void 0 === (o = r) && (o = !1), i && o && i === (0, h.getWindow)(s)) ? S(s) : (0, n.createCoords)(0),
        c = (l.left + u.x) / a.x,
        f = (l.top + u.y) / a.y,
        d = l.width / a.x,
        g = l.height / a.y;
      if (s && i) {
        let e = (0, h.getWindow)(s),
          t = (0, h.isElement)(i) ? (0, h.getWindow)(i) : i,
          n = e,
          r = (0, h.getFrameElement)(n);
        for (; r && t !== n;) {
          let e = E(r),
            t = r.getBoundingClientRect(),
            i = (0, h.getComputedStyle)(r),
            o = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
            l = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
          ((c *= e.x),
            (f *= e.y),
            (d *= e.x),
            (g *= e.y),
            (c += o),
            (f += l),
            (n = (0, h.getWindow)(r)),
            (r = (0, h.getFrameElement)(n)));
        }
      }
      return (0, n.rectToClientRect)({ width: d, height: g, x: c, y: f });
    }
    function w(e, t) {
      let n = (0, h.getNodeScroll)(e).scrollLeft;
      return t ? t.left + n : b((0, h.getDocumentElement)(e)).left + n;
    }
    function R(e, t) {
      let n = e.getBoundingClientRect();
      return { x: n.left + t.scrollLeft - w(e, n), y: n.top + t.scrollTop };
    }
    function C(e, t, r) {
      var i;
      let o;
      if ("viewport" === t || "layoutViewport" === t)
        o = (function (e, t, n) {
          void 0 === n && (n = "viewport");
          let r = "layoutViewport" === n,
            i = (0, h.getWindow)(e),
            o = (0, h.getDocumentElement)(e),
            l = i.visualViewport,
            s = o.clientWidth,
            a = o.clientHeight,
            u = 0,
            c = 0;
          if (l) {
            let e = !(0, h.isWebKit)() || "fixed" === t;
            r
              ? e || ((u = -l.offsetLeft), (c = -l.offsetTop))
              : ((s = l.width), (a = l.height), e && ((u = l.offsetLeft), (c = l.offsetTop)));
          }
          if (0 >= w(o)) {
            let e = o.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              r = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
              i = Math.abs(o.clientWidth - t.clientWidth - r),
              l = "stable both-edges" === getComputedStyle(o).scrollbarGutter ? i / 2 : i;
            l <= 25 && (s -= l);
          }
          return { width: s, height: a, x: u, y: c };
        })(e, r, t);
      else if ("document" === t) {
        let t, r, l, s, a, u;
        ((i = (0, h.getDocumentElement)(e)),
          (t = (0, h.getNodeScroll)(i)),
          (r = i.ownerDocument.body),
          (l = (0, n.max)(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth)),
          (s = (0, n.max)(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight)),
          (a = -t.scrollLeft + w(i)),
          (u = -t.scrollTop),
          "rtl" === (0, h.getComputedStyle)(r).direction && (a += (0, n.max)(i.clientWidth, r.clientWidth) - l),
          (o = { width: l, height: s, x: a, y: u }));
      } else if ((0, h.isElement)(t)) {
        let e, n, i, l, s, a;
        ((n = (e = b(t, !0, "fixed" === r)).top + t.clientTop),
          (i = e.left + t.clientLeft),
          (l = E(t)),
          (s = t.clientWidth * l.x),
          (a = t.clientHeight * l.y),
          (o = { width: s, height: a, x: i * l.x, y: n * l.y }));
      } else {
        let n = S(e);
        o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
      }
      return (0, n.rectToClientRect)(o);
    }
    function P(e) {
      return "static" === (0, h.getComputedStyle)(e).position;
    }
    function T(e, t) {
      if (!(0, h.isHTMLElement)(e) || "fixed" === (0, h.getComputedStyle)(e).position) return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return ((0, h.getDocumentElement)(e) === n && (n = n.ownerDocument.body), n);
    }
    function O(e, t) {
      let n = (0, h.getWindow)(e);
      if ((0, h.isTopLayer)(e)) return n;
      if (!(0, h.isHTMLElement)(e)) {
        let t = (0, h.getParentNode)(e);
        for (; t && !(0, h.isLastTraversableNode)(t);) {
          if ((0, h.isElement)(t) && !P(t)) return t;
          t = (0, h.getParentNode)(t);
        }
        return n;
      }
      let r = T(e, t);
      for (; r && (0, h.isTableElement)(r) && P(r);) r = T(r, t);
      return r && (0, h.isLastTraversableNode)(r) && P(r) && !(0, h.isContainingBlock)(r)
        ? n
        : r || (0, h.getContainingBlock)(e) || n;
    }
    let A = async function (e) {
        let t = this.getOffsetParent || O,
          r = this.getDimensions,
          i = await r(e.floating);
        return {
          reference: (function (e, t, r) {
            let i = (0, h.isHTMLElement)(t),
              o = (0, h.getDocumentElement)(t),
              l = "fixed" === r,
              s = b(e, !0, l, t),
              a = { scrollLeft: 0, scrollTop: 0 },
              u = (0, n.createCoords)(0);
            if (
              (i || !l) &&
              (("body" !== (0, h.getNodeName)(t) || (0, h.isOverflowElement)(o)) && (a = (0, h.getNodeScroll)(t)), i)
            ) {
              let e = b(t, !0, l, t);
              ((u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop));
            }
            !i && o && (u.x = w(o));
            let c = !o || i || l ? (0, n.createCoords)(0) : R(o, a);
            return {
              x: s.left + a.scrollLeft - u.x - c.x,
              y: s.top + a.scrollTop - u.y - c.y,
              width: s.width,
              height: s.height,
            };
          })(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: i.width, height: i.height },
        };
      },
      L = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: r, offsetParent: i, strategy: o } = e,
            l = "fixed" === o,
            s = (0, h.getDocumentElement)(i),
            a = !!t && (0, h.isTopLayer)(t.floating);
          if (i === s || (a && l)) return r;
          let u = { scrollLeft: 0, scrollTop: 0 },
            c = (0, n.createCoords)(1),
            f = (0, n.createCoords)(0),
            d = (0, h.isHTMLElement)(i);
          if (
            (d || !l) &&
            (("body" !== (0, h.getNodeName)(i) || (0, h.isOverflowElement)(s)) && (u = (0, h.getNodeScroll)(i)), d)
          ) {
            let e = b(i);
            ((c = E(i)), (f.x = e.x + i.clientLeft), (f.y = e.y + i.clientTop));
          }
          let g = !s || d || l ? (0, n.createCoords)(0) : R(s, u);
          return {
            width: r.width * c.x,
            height: r.height * c.y,
            x: r.x * c.x - u.scrollLeft * c.x + f.x + g.x,
            y: r.y * c.y - u.scrollTop * c.y + f.y + g.y,
          };
        },
        getDocumentElement: h.getDocumentElement,
        getClippingRect: function (e) {
          let { element: t, boundary: r, rootBoundary: i, strategy: o } = e,
            l = [
              ...("clippingAncestors" === r
                ? (0, h.isTopLayer)(t)
                  ? []
                  : (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = (0, h.getOverflowAncestors)(e, [], !1).filter(
                          (e) => (0, h.isElement)(e) && "body" !== (0, h.getNodeName)(e),
                        ),
                        i = null,
                        o = "fixed" === (0, h.getComputedStyle)(e).position,
                        l = o ? (0, h.getParentNode)(e) : e;
                      for (; (0, h.isElement)(l) && !(0, h.isLastTraversableNode)(l);) {
                        let e = (0, h.getComputedStyle)(l),
                          t = (0, h.isContainingBlock)(l),
                          n = i ? i.position : o ? "fixed" : "";
                        (t || ("fixed" !== n && ("absolute" !== n || "static" !== e.position))
                          ? (i = e)
                          : (r = r.filter((e) => e !== l)),
                          (l = (0, h.getParentNode)(l)));
                      }
                      return (t.set(e, r), r);
                    })(t, this._c)
                : [].concat(r)),
              i,
            ],
            s = C(t, l[0], o),
            a = s.top,
            u = s.right,
            c = s.bottom,
            f = s.left;
          for (let e = 1; e < l.length; e++) {
            let r = C(t, l[e], o);
            ((a = (0, n.max)(r.top, a)),
              (u = (0, n.min)(r.right, u)),
              (c = (0, n.min)(r.bottom, c)),
              (f = (0, n.max)(r.left, f)));
          }
          return { width: u - f, height: c - a, x: f, y: a };
        },
        getOffsetParent: O,
        getElementRects: A,
        getClientRects: function (e) {
          return e.getClientRects ? Array.from(e.getClientRects()) : [];
        },
        getDimensions: function (e) {
          let { width: t, height: n } = v(e);
          return { width: t, height: n };
        },
        getScale: E,
        isElement: h.isElement,
        isRTL: function (e) {
          return "rtl" === (0, h.getComputedStyle)(e).direction;
        },
      };
    function M(e, t) {
      return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
    }
    function D(e, t, r, i) {
      let o;
      void 0 === i && (i = {});
      let {
          ancestorScroll: l = !0,
          ancestorResize: s = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: u = "function" == typeof IntersectionObserver,
          animationFrame: c = !1,
        } = i,
        f = y(e),
        d = l || s ? [...(f ? (0, h.getOverflowAncestors)(f) : []), ...(t ? (0, h.getOverflowAncestors)(t) : [])] : [];
      d.forEach((e) => {
        (l && e.addEventListener("scroll", r), s && e.addEventListener("resize", r));
      });
      let g =
          f && u
            ? (function (e, t, r) {
                let i,
                  o = null,
                  l = (0, h.getDocumentElement)(e);
                function s() {
                  var e;
                  (clearTimeout(i), null == (e = o) || e.disconnect(), (o = null));
                }
                function a(r, u) {
                  (void 0 === r && (r = !1), void 0 === u && (u = 1), s());
                  let c = e.getBoundingClientRect(),
                    { left: f, top: d, width: g, height: p } = c;
                  if ((r || t(), !g || !p)) return;
                  let m = {
                      rootMargin:
                        -(0, n.floor)(d) +
                        "px " +
                        -(0, n.floor)(l.clientWidth - (f + g)) +
                        "px " +
                        -(0, n.floor)(l.clientHeight - (d + p)) +
                        "px " +
                        -(0, n.floor)(f) +
                        "px",
                      threshold: (0, n.max)(0, (0, n.min)(1, u)) || 1,
                    },
                    h = !0;
                  function v(t) {
                    let n = t[0].intersectionRatio;
                    if (!M(c, e.getBoundingClientRect())) return a();
                    if (n !== u) {
                      if (!h) return a();
                      n
                        ? a(!1, n)
                        : (i = setTimeout(() => {
                            a(!1, 1e-7);
                          }, 1e3));
                    }
                    h = !1;
                  }
                  try {
                    o = new IntersectionObserver(v, { ...m, root: l.ownerDocument });
                  } catch (e) {
                    o = new IntersectionObserver(v, m);
                  }
                  o.observe(e);
                }
                let u = (0, h.getWindow)(e),
                  c = () => a(r);
                return (
                  u.addEventListener("resize", c),
                  a(!0),
                  () => {
                    (u.removeEventListener("resize", c), s());
                  }
                );
              })(f, r, s)
            : null,
        p = -1,
        m = null;
      a &&
        ((m = new ResizeObserver((e) => {
          let [n] = e;
          (n &&
            n.target === f &&
            m &&
            t &&
            (m.unobserve(t),
            cancelAnimationFrame(p),
            (p = requestAnimationFrame(() => {
              var e;
              null == (e = m) || e.observe(t);
            }))),
            r());
        })),
        f && !c && m.observe(f),
        t && m.observe(t));
      let v = c ? b(e) : null;
      return (
        c &&
          (function t() {
            let n = b(e);
            (v && !M(v, n) && r(), (v = n), (o = requestAnimationFrame(t)));
          })(),
        r(),
        () => {
          var e;
          (d.forEach((e) => {
            (l && e.removeEventListener("scroll", r), s && e.removeEventListener("resize", r));
          }),
            null == g || g(),
            null == (e = m) || e.disconnect(),
            (m = null),
            c && cancelAnimationFrame(o));
        }
      );
    }
    let I = function (e) {
        return (
          void 0 === e && (e = 0),
          {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              let { x: i, y: o, placement: l, middlewareData: s } = t,
                a = await m(t, e);
              return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset
                ? {}
                : { x: i + a.x, y: o + a.y, data: { ...a, placement: l } };
            },
          }
        );
      },
      k = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "shift",
            options: e,
            async fn(t) {
              let { x: r, y: i, placement: o, platform: l } = t,
                {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: u = {
                    fn: (e) => {
                      let { x: t, y: n } = e;
                      return { x: t, y: n };
                    },
                  },
                  ...c
                } = (0, n.evaluate)(e, t),
                f = { x: r, y: i },
                d = await l.detectOverflow(t, c),
                g = (0, n.getSideAxis)(o),
                p = (0, n.getOppositeAxis)(g),
                m = f[p],
                h = f[g],
                v = (e, t) => (0, n.clamp)(t + d["y" === e ? "top" : "left"], t, t - d["y" === e ? "bottom" : "right"]);
              (s && (m = v(p, m)), a && (h = v(g, h)));
              let y = u.fn({ ...t, [p]: m, [g]: h });
              return { ...y, data: { x: y.x - r, y: y.y - i, enabled: { [p]: s, [g]: a } } };
            },
          }
        );
      },
      H = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var r, i, o, l, s;
              let { placement: a, middlewareData: u, rects: c, initialPlacement: f, platform: d, elements: g } = t,
                {
                  mainAxis: p = !0,
                  crossAxis: m = !0,
                  fallbackPlacements: h,
                  fallbackStrategy: v = "bestFit",
                  fallbackAxisSideDirection: y = "none",
                  flipAlignment: E = !0,
                  ...x
                } = (0, n.evaluate)(e, t);
              if (null != (r = u.arrow) && r.alignmentOffset) return {};
              let S = (0, n.getSide)(a),
                b = (0, n.getSideAxis)(f),
                w = (0, n.getSide)(f) === f,
                R = await (null == d.isRTL ? void 0 : d.isRTL(g.floating)),
                C = h || (w || !E ? [(0, n.getOppositePlacement)(f)] : (0, n.getExpandedPlacements)(f)),
                P = "none" !== y;
              !h && P && C.push(...(0, n.getOppositeAxisPlacements)(f, E, y, R));
              let T = [f, ...C],
                O = await d.detectOverflow(t, x),
                A = [],
                L = (null == (i = u.flip) ? void 0 : i.overflows) || [];
              if ((p && A.push(O[S]), m)) {
                let e = (0, n.getAlignmentSides)(a, c, R);
                A.push(O[e[0]], O[e[1]]);
              }
              if (((L = [...L, { placement: a, overflows: A }]), !A.every((e) => e <= 0))) {
                let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                  t = T[e];
                if (
                  t &&
                  ("alignment" !== m ||
                    b === (0, n.getSideAxis)(t) ||
                    L.every((e) => (0, n.getSideAxis)(e.placement) !== b || e.overflows[0] > 0))
                )
                  return { data: { index: e, overflows: L }, reset: { placement: t } };
                let r =
                  null == (l = L.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                    ? void 0
                    : l.placement;
                if (!r)
                  switch (v) {
                    case "bestFit": {
                      let e =
                        null ==
                        (s = L.filter((e) => {
                          if (P) {
                            let t = (0, n.getSideAxis)(e.placement);
                            return t === b || "y" === t;
                          }
                          return !0;
                        })
                          .map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)])
                          .sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : s[0];
                      e && (r = e);
                      break;
                    }
                    case "initialPlacement":
                      r = f;
                  }
                if (a !== r) return { reset: { placement: r } };
              }
              return {};
            },
          }
        );
      },
      N = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "size",
            options: e,
            async fn(t) {
              let r,
                i,
                { placement: o, rects: l, platform: s, elements: a } = t,
                { apply: u = () => {}, ...c } = (0, n.evaluate)(e, t),
                f = await s.detectOverflow(t, c),
                d = (0, n.getSide)(o),
                g = (0, n.getAlignment)(o),
                p = "y" === (0, n.getSideAxis)(o),
                { width: m, height: h } = l.floating;
              "top" === d || "bottom" === d
                ? ((r = d),
                  (i =
                    g === ((await (null == s.isRTL ? void 0 : s.isRTL(a.floating))) ? "start" : "end")
                      ? "left"
                      : "right"))
                : ((i = d), (r = "end" === g ? "top" : "bottom"));
              let v = h - f.top - f.bottom,
                y = m - f.left - f.right,
                E = (0, n.min)(h - f[r], v),
                x = (0, n.min)(m - f[i], y),
                S = t.middlewareData.shift,
                b = !S,
                w = E,
                R = x;
              (null != S && S.enabled.x && (R = y),
                null != S && S.enabled.y && (w = v),
                b && !g && (p ? (R = m - 2 * (0, n.max)(f.left, f.right)) : (w = h - 2 * (0, n.max)(f.top, f.bottom))),
                await u({ ...t, availableWidth: R, availableHeight: w }));
              let C = await s.getDimensions(a.floating);
              return m !== C.width || h !== C.height ? { reset: { rects: !0 } } : {};
            },
          }
        );
      },
      F = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            options: e,
            fn(t) {
              var r, i, o, l;
              let { x: s, y: a, placement: u, rects: c, middlewareData: f } = t,
                { offset: d = 0, mainAxis: g = !0, crossAxis: m = !0 } = (0, n.evaluate)(e, t),
                h = { x: s, y: a },
                v = (0, n.getSideAxis)(u),
                y = (0, n.getOppositeAxis)(v),
                E = h[y],
                x = h[v],
                S = (0, n.evaluate)(d, t),
                b =
                  "number" == typeof S
                    ? { mainAxis: S, crossAxis: 0 }
                    : { mainAxis: null != (r = S.mainAxis) ? r : 0, crossAxis: null != (i = S.crossAxis) ? i : 0 };
              if (g) {
                let e = "y" === y ? "height" : "width",
                  t = c.reference[y] - c.floating[e] + b.mainAxis,
                  n = c.reference[y] + c.reference[e] - b.mainAxis;
                E < t ? (E = t) : E > n && (E = n);
              }
              if (m) {
                let e = "y" === y ? "width" : "height",
                  t = p.has((0, n.getSide)(u)),
                  r =
                    c.reference[v] -
                    c.floating[e] +
                    ((t && (null == (o = f.offset) ? void 0 : o[v])) || 0) +
                    (t ? 0 : b.crossAxis),
                  i =
                    c.reference[v] +
                    c.reference[e] +
                    (t ? 0 : (null == (l = f.offset) ? void 0 : l[v]) || 0) -
                    (t ? b.crossAxis : 0);
                x < r ? (x = r) : x > i && (x = i);
              }
              return { [y]: E, [v]: x };
            },
          }
        );
      },
      V = (e, t, n) => {
        let r = new Map(),
          i = null != n ? n : {},
          o = { ...L, ...i.platform, _c: r };
        return c(e, t, { ...i, platform: o });
      };
    e.s(
      [
        "arrow",
        0,
        (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let { x: r, y: i, placement: o, rects: l, platform: s, elements: a, middlewareData: u } = t,
              { element: c, padding: f = 0 } = (0, n.evaluate)(e, t) || {};
            if (null == c) return {};
            let d = (0, n.getPaddingObject)(f),
              g = { x: r, y: i },
              p = (0, n.getAlignmentAxis)(o),
              m = (0, n.getAxisLength)(p),
              h = await s.getDimensions(c),
              v = "y" === p,
              y = v ? "clientHeight" : "clientWidth",
              E = l.reference[m] + l.reference[p] - g[p] - l.floating[m],
              x = g[p] - l.reference[p],
              S = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(c)),
              b = S ? S[y] : 0;
            (b && (await (null == s.isElement ? void 0 : s.isElement(S)))) || (b = a.floating[y] || l.floating[m]);
            let w = b / 2 - h[m] / 2 - 1,
              R = (0, n.min)(d[v ? "top" : "left"], w),
              C = (0, n.min)(d[v ? "bottom" : "right"], w),
              P = b - h[m] - C,
              T = b / 2 - h[m] / 2 + (E / 2 - x / 2),
              O = (0, n.clamp)(R, T, P),
              A =
                !u.arrow &&
                null != (0, n.getAlignment)(o) &&
                T !== O &&
                l.reference[m] / 2 - (T < R ? R : C) - h[m] / 2 < 0,
              L = A ? (T < R ? T - R : T - P) : 0;
            return {
              [p]: g[p] + L,
              data: { [p]: O, centerOffset: T - O - L, ...(A && { alignmentOffset: L }) },
              reset: A,
            };
          },
        }),
        "autoPlacement",
        0,
        function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "autoPlacement",
              options: e,
              async fn(t) {
                var r, i, o, l;
                let { rects: s, middlewareData: a, placement: u, platform: c, elements: f } = t,
                  {
                    crossAxis: d = !1,
                    alignment: g,
                    allowedPlacements: p = n.placements,
                    autoAlignment: m = !0,
                    ...h
                  } = (0, n.evaluate)(e, t),
                  v =
                    void 0 !== g || p === n.placements
                      ? ((l = g || null)
                          ? [
                              ...p.filter((e) => (0, n.getAlignment)(e) === l),
                              ...p.filter((e) => (0, n.getAlignment)(e) !== l),
                            ]
                          : p.filter((e) => (0, n.getSide)(e) === e)
                        ).filter(
                          (e) =>
                            !l ||
                            (0, n.getAlignment)(e) === l ||
                            (!!m && (0, n.getOppositeAlignmentPlacement)(e) !== e),
                        )
                      : p,
                  y = (null == (r = a.autoPlacement) ? void 0 : r.index) || 0,
                  E = v[y];
                if (null == E) return {};
                if (u !== E) return { reset: { placement: v[0] } };
                let x = await c.detectOverflow(t, h),
                  S = (0, n.getAlignmentSides)(E, s, await (null == c.isRTL ? void 0 : c.isRTL(f.floating))),
                  b = [x[(0, n.getSide)(E)], x[S[0]], x[S[1]]],
                  w = [
                    ...((null == (i = a.autoPlacement) ? void 0 : i.overflows) || []),
                    { placement: E, overflows: b },
                  ],
                  R = v[y + 1];
                if (R) return { data: { index: y + 1, overflows: w }, reset: { placement: R } };
                let C = w
                    .map((e) => {
                      let t = (0, n.getAlignment)(e.placement);
                      return [
                        e.placement,
                        t && d ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                        e.overflows,
                      ];
                    })
                    .sort((e, t) => e[1] - t[1]),
                  P =
                    (null ==
                    (o = C.filter((e) => e[2].slice(0, (0, n.getAlignment)(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
                      ? void 0
                      : o[0]) || C[0][0];
                return P !== u ? { data: { index: y + 1, overflows: w }, reset: { placement: P } } : {};
              },
            }
          );
        },
        "autoUpdate",
        0,
        D,
        "computePosition",
        0,
        V,
        "flip",
        0,
        H,
        "hide",
        0,
        function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "hide",
              options: e,
              async fn(t) {
                let { rects: r, platform: i } = t,
                  { strategy: o = "referenceHidden", ...l } = (0, n.evaluate)(e, t);
                switch (o) {
                  case "referenceHidden": {
                    let e = f(await i.detectOverflow(t, { ...l, elementContext: "reference" }), r.reference);
                    return { data: { referenceHiddenOffsets: e, referenceHidden: d(e) } };
                  }
                  case "escaped": {
                    let e = f(await i.detectOverflow(t, { ...l, altBoundary: !0 }), r.floating);
                    return { data: { escapedOffsets: e, escaped: d(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        "inline",
        0,
        function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "inline",
              options: e,
              async fn(t) {
                let { placement: r, elements: i, rects: o, platform: l, strategy: s } = t,
                  { padding: a = 2, x: u, y: c } = (0, n.evaluate)(e, t),
                  f = Array.from((await (null == l.getClientRects ? void 0 : l.getClientRects(i.reference))) || []);
                if (!f.length) return {};
                let d = (function (e) {
                    let t = e.slice().sort((e, t) => e.y - t.y),
                      r = [],
                      i = null;
                    for (let e = 0; e < t.length; e++) {
                      let n = t[e];
                      (!i || n.y - i.y > i.height / 2 ? r.push([n]) : r[r.length - 1].push(n), (i = n));
                    }
                    return r.map((e) => (0, n.rectToClientRect)(g(e)));
                  })(f),
                  p = (0, n.rectToClientRect)(g(f)),
                  m = (0, n.getPaddingObject)(a),
                  h = await l.getElementRects({
                    reference: {
                      getBoundingClientRect: function () {
                        if (
                          2 === d.length &&
                          (d[0].left > d[1].right || d[1].left > d[0].right) &&
                          null != u &&
                          null != c
                        )
                          return (
                            d.find(
                              (e) =>
                                u > e.left - m.left &&
                                u < e.right + m.right &&
                                c > e.top - m.top &&
                                c < e.bottom + m.bottom,
                            ) || p
                          );
                        if (d.length >= 2) {
                          if ("y" === (0, n.getSideAxis)(r)) {
                            let e = d[0],
                              t = d[d.length - 1],
                              i = "top" === (0, n.getSide)(r),
                              o = e.top,
                              l = t.bottom,
                              s = i ? e.left : t.left,
                              a = i ? e.right : t.right;
                            return (0, n.rectToClientRect)({ x: s, y: o, width: a - s, height: l - o });
                          }
                          let e = "left" === (0, n.getSide)(r),
                            t = (0, n.max)(...d.map((e) => e.right)),
                            i = (0, n.min)(...d.map((e) => e.left)),
                            o = d.filter((n) => (e ? n.left === i : n.right === t)),
                            l = o[0].top,
                            s = o[o.length - 1].bottom;
                          return (0, n.rectToClientRect)({ x: i, y: l, width: t - i, height: s - l });
                        }
                        return p;
                      },
                    },
                    floating: i.floating,
                    strategy: s,
                  });
                return o.reference.x !== h.reference.x ||
                  o.reference.y !== h.reference.y ||
                  o.reference.width !== h.reference.width ||
                  o.reference.height !== h.reference.height
                  ? { reset: { rects: h } }
                  : {};
              },
            }
          );
        },
        "limitShift",
        0,
        F,
        "offset",
        0,
        I,
        "platform",
        0,
        L,
        "shift",
        0,
        k,
        "size",
        0,
        N,
      ],
      25290,
    );
    var W = e.i(29066),
      j = "u" > typeof document ? t.useLayoutEffect : function () {};
    function B(e, t) {
      let n, r, i;
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if ("function" == typeof e && e.toString() === t.toString()) return !0;
      if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
          if ((n = e.length) !== t.length) return !1;
          for (r = n; 0 != r--;) if (!B(e[r], t[r])) return !1;
          return !0;
        }
        if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; 0 != r--;) {
          let n = i[r];
          if (("_owner" !== n || !e.$$typeof) && !B(e[n], t[n])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    function $(e) {
      return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function z(e, t) {
      let n = $(e);
      return Math.round(t * n) / n;
    }
    function _(e) {
      let n = t.useRef(e);
      return (
        j(() => {
          n.current = e;
        }),
        n
      );
    }
    var U = e.i(42701);
    function Y(e) {
      return (function (e, n) {
        let { nodeId: r, externalTree: i } = e,
          l = n.useState("referenceElement"),
          s = n.useState("floatingElement"),
          a = n.useState("domReferenceElement"),
          u = n.useState("open"),
          c = n.useState("floatingId"),
          [f, d] = t.useState(null),
          [g, p] = t.useState(void 0),
          [m, v] = t.useState(void 0),
          y = t.useRef(null),
          E = (0, U.useFloatingTree)(i),
          x = t.useMemo(() => ({ reference: l, floating: s, domReference: a }), [l, s, a]),
          S = (function (e) {
            void 0 === e && (e = {});
            let {
                placement: n = "bottom",
                strategy: r = "absolute",
                middleware: i = [],
                platform: o,
                elements: { reference: l, floating: s } = {},
                transform: a = !0,
                whileElementsMounted: u,
                open: c,
              } = e,
              [f, d] = t.useState({ x: 0, y: 0, strategy: r, placement: n, middlewareData: {}, isPositioned: !1 }),
              [g, p] = t.useState(i);
            B(g, i) || p(i);
            let [m, h] = t.useState(null),
              [v, y] = t.useState(null),
              E = t.useCallback((e) => {
                e !== w.current && ((w.current = e), h(e));
              }, []),
              x = t.useCallback((e) => {
                e !== R.current && ((R.current = e), y(e));
              }, []),
              S = l || m,
              b = s || v,
              w = t.useRef(null),
              R = t.useRef(null),
              C = t.useRef(f),
              P = null != u,
              T = _(u),
              O = _(o),
              A = _(c),
              L = t.useCallback(() => {
                if (!w.current || !R.current) return;
                let e = { placement: n, strategy: r, middleware: g };
                (O.current && (e.platform = O.current),
                  V(w.current, R.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== A.current };
                    M.current &&
                      !B(C.current, t) &&
                      ((C.current = t),
                      W.flushSync(() => {
                        d(t);
                      }));
                  }));
              }, [g, n, r, O, A]);
            j(() => {
              !1 === c &&
                C.current.isPositioned &&
                ((C.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
            }, [c]);
            let M = t.useRef(!1);
            (j(
              () => (
                (M.current = !0),
                () => {
                  M.current = !1;
                }
              ),
              [],
            ),
              j(() => {
                if ((S && (w.current = S), b && (R.current = b), S && b)) {
                  if (T.current) return T.current(S, b, L);
                  L();
                }
              }, [S, b, L, T, P]));
            let D = t.useMemo(() => ({ reference: w, floating: R, setReference: E, setFloating: x }), [E, x]),
              I = t.useMemo(() => ({ reference: S, floating: b }), [S, b]),
              k = t.useMemo(() => {
                let e = { position: r, left: 0, top: 0 };
                if (!I.floating) return e;
                let t = z(I.floating, f.x),
                  n = z(I.floating, f.y);
                return a
                  ? {
                      ...e,
                      transform: "translate(" + t + "px, " + n + "px)",
                      ...($(I.floating) >= 1.5 && { willChange: "transform" }),
                    }
                  : { position: r, left: t, top: n };
              }, [r, a, I.floating, f.x, f.y]);
            return t.useMemo(() => ({ ...f, update: L, refs: D, elements: I, floatingStyles: k }), [f, L, D, I, k]);
          })({ ...e, elements: { ...x, ...(f && { reference: f }) } }),
          b = (0, h.isElement)(g) ? g : null,
          w = void 0 === m ? n.state.floatingElement : m;
        (n.useSyncedValue("referenceElement", g ?? null),
          n.useSyncedValue("domReferenceElement", void 0 === g ? a : b),
          n.useSyncedValue("floatingElement", w));
        let R = t.useCallback(
            (e) => {
              let t = (0, h.isElement)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    getClientRects: () => e.getClientRects(),
                    contextElement: e,
                  }
                : e;
              (d(t), S.refs.setReference(t));
            },
            [S.refs],
          ),
          C = t.useCallback(
            (e) => {
              (((0, h.isElement)(e) || null === e) && ((y.current = e), p(e)),
                ((0, h.isElement)(S.refs.reference.current) ||
                  null === S.refs.reference.current ||
                  (null !== e && !(0, h.isElement)(e))) &&
                  S.refs.setReference(e));
            },
            [S.refs, p],
          ),
          P = t.useCallback(
            (e) => {
              (v(e), S.refs.setFloating(e));
            },
            [S.refs],
          ),
          T = t.useMemo(
            () => ({ ...S.refs, setReference: C, setFloating: P, setPositionReference: R, domReference: y }),
            [S.refs, C, P, R],
          ),
          O = t.useMemo(() => ({ ...S.elements, domReference: a }), [S.elements, a]),
          A = t.useMemo(
            () => ({
              ...S,
              dataRef: n.context.dataRef,
              open: u,
              onOpenChange: n.setOpen,
              events: n.context.events,
              floatingId: c,
              refs: T,
              elements: O,
              nodeId: r,
              rootStore: n,
            }),
            [S, T, O, r, n, u, c],
          );
        return (
          (0, o.useIsoLayoutEffect)(() => {
            a && (y.current = a);
          }, [a]),
          (0, o.useIsoLayoutEffect)(() => {
            n.context.dataRef.current.floatingContext = A;
            let e = E?.nodesRef.current.find((e) => e.id === r);
            e && (e.context = A);
          }),
          t.useMemo(() => ({ ...S, context: A, refs: T, elements: O, rootStore: n }), [S, T, O, A, n])
        );
      })(e, e.rootContext);
    }
    var X = e.i(98624);
    let K = {
        name: "hide",
        async fn(e) {
          let { width: t, height: n, x: r, y: i } = e.rects.reference,
            o = await e.platform.detectOverflow(e, { elementContext: "reference" });
          return {
            data: {
              referenceHidden:
                o.top - n >= 0 ||
                o.right - t >= 0 ||
                o.bottom - n >= 0 ||
                o.left - t >= 0 ||
                (0 === t && 0 === n && 0 === r && 0 === i),
            },
          };
        },
      },
      q = { sideX: "left", sideY: "top" };
    e.s(["DEFAULT_SIDES", 0, q], 78764);
    let J = "--available-width",
      G = "--available-height",
      Q = "--anchor-width",
      Z = "--anchor-height",
      ee = "--transform-origin";
    function et(e, t, n) {
      let r = "inline-start" === e || "inline-end" === e;
      return {
        top: "top",
        right: r ? (n ? "inline-start" : "inline-end") : "right",
        bottom: "bottom",
        left: r ? (n ? "inline-end" : "inline-start") : "left",
      }[t];
    }
    function en(e, t, r) {
      let { rects: i, placement: o } = e;
      return {
        side: et(t, (0, n.getSide)(o), r),
        align: (0, n.getAlignment)(o) || "center",
        anchor: { width: i.reference.width, height: i.reference.height },
        positioner: { width: i.floating.width, height: i.floating.height },
      };
    }
    function er(e) {
      return null != e && "current" in e;
    }
    (e.s(
      [
        "anchorHeight",
        0,
        Z,
        "anchorWidth",
        0,
        Q,
        "availableHeight",
        0,
        G,
        "availableWidth",
        0,
        J,
        "positionerHeight",
        0,
        "--positioner-height",
        "positionerWidth",
        0,
        "--positioner-width",
        "transformOrigin",
        0,
        ee,
      ],
      61299,
    ),
      e.s(
        [
          "useAnchorPositioning",
          0,
          function (e) {
            return (function (e, a) {
              var u, c, f, d, g, p, m;
              let h,
                v,
                y,
                E,
                {
                  anchor: x,
                  positionMethod: S = "absolute",
                  side: b = "bottom",
                  sideOffset: w = 0,
                  align: R = "center",
                  alignOffset: C = 0,
                  collisionBoundary: P,
                  collisionPadding: T = 5,
                  sticky: O = !1,
                  arrowPadding: A = 5,
                  disableAnchorTracking: L = !1,
                  inline: M,
                  keepMounted: V = !1,
                  floatingRootContext: W,
                  mounted: j,
                  collisionAvoidance: B,
                  shift: $,
                  nodeId: z,
                  adaptiveOrigin: _,
                  lazyFlip: U = !1,
                  externalTree: Y,
                } = e,
                [ei, eo] = t.useState(null);
              j || null === ei || eo(null);
              let el = B.side || "flip",
                es = B.align || "flip",
                ea = B.fallbackAxisSide || "end",
                eu = $?.crossAxis ?? !1,
                ec = $?.rootBoundary,
                ef = "function" == typeof x ? x : void 0,
                ed = (0, s.useStableCallback)(ef),
                eg = ef ? ed : x,
                ep = (0, l.useValueAsRef)(x),
                em = (0, l.useValueAsRef)(j),
                eh = "rtl" === (0, X.useDirection)(),
                ev =
                  ei ||
                  {
                    top: "top",
                    right: "right",
                    bottom: "bottom",
                    left: "left",
                    "inline-end": eh ? "left" : "right",
                    "inline-start": eh ? "right" : "left",
                  }[b],
                ey = "center" === R ? ev : `${ev}-${R}`,
                eE = T;
              "number" == typeof eE
                ? (eE = { top: eE, right: eE, bottom: eE, left: eE })
                : eE && (eE = { top: eE.top || 0, right: eE.right || 0, bottom: eE.bottom || 0, left: eE.left || 0 });
              let ex = +("bottom" === b),
                eS = +("top" === b),
                eb = +("right" === b),
                ew = +("left" === b),
                eR = { boundary: "clipping-ancestors" === P ? "clippingAncestors" : P, padding: eE },
                eC = t.useRef(null),
                eP = (0, l.useValueAsRef)(w),
                eT = (0, l.useValueAsRef)(C),
                eO = [];
              (M && eO.push(M),
                eO.push(
                  ((u = (e) => {
                    let t = en(e, b, eh),
                      n = "function" == typeof eP.current ? eP.current(t) : eP.current,
                      r = "function" == typeof eT.current ? eT.current(t) : eT.current;
                    return { mainAxis: n, crossAxis: r, alignmentAxis: r };
                  }),
                  (c = ["function" != typeof w ? w : 0, "function" != typeof C ? C : 0, eh, b]),
                  { name: (h = I(u)).name, fn: h.fn, options: [u, c] }),
                ));
              let eA = "none" === es && "shift" !== el,
                eL = !eA && (O || eu || "shift" === el),
                eM =
                  "none" === el
                    ? null
                    : {
                        name: (v = H(
                          (f = {
                            ...eR,
                            padding: {
                              top: eE.top + 1 + ex,
                              right: eE.right + 1 + ew,
                              bottom: eE.bottom + 1 + eS,
                              left: eE.left + 1 + eb,
                            },
                            mainAxis: !eu && "flip" === el,
                            crossAxis: "flip" === es && "alignment",
                            fallbackAxisSideDirection: ea,
                          }),
                        )).name,
                        fn: v.fn,
                        options: [f, void 0],
                      },
                eD = eA
                  ? null
                  : ((g = {
                      ...eR,
                      rootBoundary: ec,
                      mainAxis: "none" !== es,
                      crossAxis: eL,
                      limiter:
                        O || eu
                          ? void 0
                          : {
                              fn: F(
                                (d = (e) => {
                                  if (!eC.current) return {};
                                  let { width: t, height: r } = eC.current.getBoundingClientRect(),
                                    i = (0, n.getSideAxis)((0, n.getSide)(e.placement)),
                                    o = "y" === i ? eE.left + eE.right : eE.top + eE.bottom;
                                  return { offset: ("y" === i ? t : r) / 2 + o / 2 };
                                }),
                              ).fn,
                              options: [d, void 0],
                            },
                    }),
                    (p = [eR, O, eu, ec, eE, es]),
                    { name: (y = k(g)).name, fn: y.fn, options: [g, p] });
              ("shift" === el || "shift" === es || "center" === R ? eO.push(eD, eM) : eO.push(eM, eD),
                eO.push(
                  {
                    name: (E = N(
                      (m = {
                        ...eR,
                        apply({ elements: { floating: e }, availableWidth: t, availableHeight: n, rects: r }) {
                          if (!em.current) return;
                          let o = e.style;
                          (o.setProperty(J, `${t}px`), o.setProperty(G, `${n}px`));
                          let l = (0, i.ownerWindow)(e).devicePixelRatio || 1,
                            { x: s, y: a, width: u, height: c } = r.reference,
                            f = (Math.round((s + u) * l) - Math.round(s * l)) / l,
                            d = (Math.round((a + c) * l) - Math.round(a * l)) / l;
                          (o.setProperty(Q, `${f}px`), o.setProperty(Z, `${d}px`));
                        },
                      }),
                    )).name,
                    fn: E.fn,
                    options: [m, void 0],
                  },
                  ((e, t) => {
                    let { name: r, fn: i } = {
                      name: "arrow",
                      options: e,
                      async fn(t) {
                        let { x: r, y: i, placement: o, rects: l, platform: s, elements: a, middlewareData: u } = t,
                          { element: c, padding: f = 0, offsetParent: d = "real" } = (0, n.evaluate)(e, t) || {};
                        if (null == c) return {};
                        let g = (0, n.getPaddingObject)(f),
                          p = { x: r, y: i },
                          m = (0, n.getAlignmentAxis)(o),
                          h = (0, n.getAxisLength)(m),
                          v = await s.getDimensions(c),
                          y = "y" === m,
                          E = y ? "clientHeight" : "clientWidth",
                          x = l.reference[h] + l.reference[m] - p[m] - l.floating[h],
                          S = p[m] - l.reference[m],
                          b = "real" === d ? await s.getOffsetParent?.(c) : a.floating,
                          w = a.floating[E] || l.floating[h];
                        (w && (await s.isElement?.(b))) || (w = a.floating[E] || l.floating[h]);
                        let R = w / 2 - v[h] / 2 - 1,
                          C = Math.min(g[y ? "top" : "left"], R),
                          P = Math.min(g[y ? "bottom" : "right"], R),
                          T = w - v[h] - P,
                          O = w / 2 - v[h] / 2 + (x / 2 - S / 2),
                          A = (0, n.clamp)(C, O, T),
                          L =
                            !u.arrow &&
                            null != (0, n.getAlignment)(o) &&
                            O !== A &&
                            l.reference[h] / 2 - (O < C ? C : P) - v[h] / 2 < 0,
                          M = L ? (O < C ? O - C : O - T) : 0;
                        return {
                          [m]: p[m] + M,
                          data: { [m]: A, centerOffset: O - A - M, ...(L && { alignmentOffset: M }) },
                          reset: L,
                        };
                      },
                    };
                    return { name: r, fn: i, options: [e, t] };
                  })(
                    (e) => ({
                      element: eC.current || (0, r.ownerDocument)(e.elements.floating).createElement("div"),
                      padding: eC.current ? A : 0,
                      offsetParent: "floating",
                    }),
                    [A],
                  ),
                  {
                    name: "transformOrigin",
                    fn(e) {
                      let t,
                        {
                          elements: { floating: r },
                          middlewareData: i,
                          placement: o,
                          platform: l,
                          rects: s,
                          y: a,
                        } = e,
                        u = (0, n.getSide)(o),
                        c = (0, n.getAlignment)(o),
                        f = "y" === (0, n.getSideAxis)(u),
                        d = eC.current,
                        g = "function" == typeof w ? w(en(e, b, eh)) : w;
                      if (!d && c && 1 >= Math.abs(f ? i.shift?.x || 0 : i.shift?.y || 0))
                        t = ("start" === c) === (f && l.isRTL?.(r) === !0) ? "100%" : "0%";
                      else {
                        let e = f ? i.arrow?.x || 0 : i.arrow?.y || 0,
                          n = f ? d?.clientWidth || 0 : d?.clientHeight || 0;
                        t = `${e + n / 2}px`;
                      }
                      let p = "top" === u || "left" === u ? `calc(100% + ${g}px)` : `${-g}px`;
                      return (
                        eL &&
                          f &&
                          Math.abs(i.shift?.y || 0) > g &&
                          (p = `${s.reference.y + s.reference.height / 2 - a}px`),
                        r.style.setProperty(ee, f ? `${t} ${p}` : `${p} ${t}`),
                        {}
                      );
                    },
                  },
                  K,
                  _,
                ),
                (0, o.useIsoLayoutEffect)(() => {
                  !j &&
                    W &&
                    W.update({
                      referenceElement: null,
                      floatingElement: null,
                      domReferenceElement: null,
                      positionReference: null,
                    });
                }, [j, W]));
              let eI = t.useMemo(
                  () => ({
                    ancestorScroll: !L,
                    elementResize: !L && "u" > typeof ResizeObserver,
                    layoutShift: !L && "u" > typeof IntersectionObserver,
                  }),
                  [L],
                ),
                {
                  refs: ek,
                  elements: eH,
                  x: eN,
                  y: eF,
                  middlewareData: eV,
                  update: eW,
                  placement: ej,
                  context: eB,
                  isPositioned: e$,
                  floatingStyles: ez,
                } = a({
                  rootContext: W,
                  open: V ? j : void 0,
                  placement: ey,
                  middleware: eO,
                  strategy: S,
                  whileElementsMounted: V ? void 0 : (...e) => D(...e, eI),
                  nodeId: z,
                  externalTree: Y,
                }),
                { sideX: e_, sideY: eU } = eV.adaptiveOrigin || q,
                eY = e$ ? S : "fixed",
                eX = t.useMemo(() => {
                  let e;
                  return (
                    ((e = e$
                      ? _
                        ? { position: eY, [e_]: eN, [eU]: eF }
                        : { ...ez, position: eY }
                      : { position: eY, top: 0, left: 0 })[J] = "100vw"),
                    (e[G] = "100vh"),
                    e$ || (e.opacity = 0),
                    e
                  );
                }, [_, eY, e_, eN, eU, eF, ez, e$]),
                eK = t.useRef(null);
              ((0, o.useIsoLayoutEffect)(() => {
                if (!j) return;
                let e = ep.current,
                  t = "function" == typeof e ? e() : e,
                  n = (er(t) ? t.current : t) || null;
                n !== eK.current && (ek.setPositionReference(n), (eK.current = n));
              }, [j, ek, eg, ep]),
                t.useEffect(() => {
                  if (!j) return;
                  let e = ep.current;
                  "function" != typeof e &&
                    er(e) &&
                    e.current !== eK.current &&
                    (ek.setPositionReference(e.current), (eK.current = e.current));
                }, [j, ek, eg, ep]),
                t.useEffect(() => {
                  if (V && j && eH.reference && eH.floating) return D(eH.reference, eH.floating, eW, eI);
                }, [V, j, eH, eW, eI]));
              let eq = (0, n.getSide)(ej),
                eJ = et(b, eq, eh),
                eG = (0, n.getAlignment)(ej) || "center",
                eQ = !!eV.hide?.referenceHidden;
              (0, o.useIsoLayoutEffect)(() => {
                U && j && e$ && eq !== ev && eo(eq);
              }, [U, j, e$, eq, ev]);
              let eZ = t.useMemo(() => ({ position: "absolute", top: eV.arrow?.y, left: eV.arrow?.x }), [eV.arrow]),
                e0 = eV.arrow?.centerOffset !== 0;
              return t.useMemo(
                () => ({
                  positionerStyles: eX,
                  arrowStyles: eZ,
                  arrowRef: eC,
                  arrowUncentered: e0,
                  side: eJ,
                  align: eG,
                  physicalSide: eq,
                  anchorHidden: eQ,
                  refs: ek,
                  context: eB,
                  isPositioned: e$,
                  update: eW,
                }),
                [eX, eZ, eC, e0, eJ, eG, eq, eQ, ek, eB, e$, eW],
              );
            })(e, Y);
          },
        ],
        76807,
      ));
    var ei = e.i(32948),
      eo = e.i(79331),
      el = e.i(86228),
      es = e.i(86586);
    function ea(e) {
      return "starting" === e ? es.DISABLED_TRANSITIONS_STYLE : el.EMPTY_OBJECT;
    }
    (e.s(["getDisabledMountTransitionStyles", 0, ea], 2544),
      e.s(
        [
          "usePositioner",
          0,
          function (e, t, { styles: n, transitionStatus: r, props: i, refs: o, hidden: l, inert: s = !1 }) {
            let a = { ...n };
            return (
              s && (a.pointerEvents = "none"),
              (0, eo.useRenderElement)("div", e, {
                state: t,
                ref: o,
                props: [{ role: "presentation", hidden: l, style: a }, ea(r), i],
                stateAttributesMapping: ei.popupStateMapping,
              })
            );
          },
        ],
        12168,
      ),
      e.s(
        [
          "usePreviousValue",
          0,
          function (e) {
            let [n, r] = t.useState({ current: e, previous: null });
            return (Object.is(e, n.current) || r({ current: e, previous: n.current }), n.previous);
          },
        ],
        87594,
      ));
  },
  99831,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(47452),
      n = e.i(29066),
      r = e.i(53619),
      i = e.i(21935);
    let o = t.forwardRef(function (e, o) {
      let { children: l, container: s, className: a, render: u, style: c, ...f } = e,
        { node: d, subtree: g } = (0, r.useFloatingPortalNode)({
          container: s,
          ref: o,
          componentProps: e,
          elementProps: f,
        });
      return g || d ? (0, i.jsxs)(t.Fragment, { children: [g, d && n.createPortal(l, d)] }) : null;
    });
    e.s(["FloatingPortalLite", 0, o]);
  },
  1408,
  (e) => {
    "use strict";
    var t = e.i(58579),
      n = e.i(65079);
    e.s([
      "getCssDimensions",
      0,
      function (e) {
        let r = (0, n.getComputedStyle)(e),
          i = parseFloat(r.width) || 0,
          o = parseFloat(r.height) || 0,
          l = (0, n.isHTMLElement)(e),
          s = l ? e.offsetWidth : i,
          a = l ? e.offsetHeight : o;
        return (((0, t.round)(i) !== s || (0, t.round)(o) !== a) && ((i = s), (o = a)), { width: i, height: o });
      },
    ]);
  },
  58579,
  98624,
  (e) => {
    "use strict";
    let t = ["top", "right", "bottom", "left"],
      n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
      r = Math.min,
      i = Math.max,
      o = Math.round,
      l = Math.floor,
      s = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function a(e) {
      return e.split("-")[0];
    }
    function u(e) {
      return e.split("-")[1];
    }
    function c(e) {
      return "x" === e ? "y" : "x";
    }
    function f(e) {
      return "y" === e ? "height" : "width";
    }
    function d(e) {
      let t = e[0];
      return "t" === t || "b" === t ? "y" : "x";
    }
    function g(e) {
      return c(d(e));
    }
    function p(e) {
      return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
    }
    let m = ["left", "right"],
      h = ["right", "left"],
      v = ["top", "bottom"],
      y = ["bottom", "top"];
    function E(e) {
      let t = a(e);
      return s[t] + e.slice(t.length);
    }
    e.s(
      [
        "clamp",
        0,
        function (e, t, n) {
          return i(e, r(t, n));
        },
        "createCoords",
        0,
        (e) => ({ x: e, y: e }),
        "evaluate",
        0,
        function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        "floor",
        0,
        l,
        "getAlignment",
        0,
        u,
        "getAlignmentAxis",
        0,
        g,
        "getAlignmentSides",
        0,
        function (e, t, n) {
          void 0 === n && (n = !1);
          let r = u(e),
            i = g(e),
            o = f(i),
            l = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
          return (t.reference[o] > t.floating[o] && (l = E(l)), [l, E(l)]);
        },
        "getAxisLength",
        0,
        f,
        "getExpandedPlacements",
        0,
        function (e) {
          let t = E(e);
          return [p(e), t, p(t)];
        },
        "getOppositeAlignmentPlacement",
        0,
        p,
        "getOppositeAxis",
        0,
        c,
        "getOppositeAxisPlacements",
        0,
        function (e, t, n, r) {
          let i = u(e),
            o = (function (e, t, n) {
              switch (e) {
                case "top":
                case "bottom":
                  if (n) return t ? h : m;
                  return t ? m : h;
                case "left":
                case "right":
                  return t ? v : y;
                default:
                  return [];
              }
            })(a(e), "start" === n, r);
          return (i && ((o = o.map((e) => e + "-" + i)), t && (o = o.concat(o.map(p)))), o);
        },
        "getOppositePlacement",
        0,
        E,
        "getPaddingObject",
        0,
        function (e) {
          var t, n, r, i;
          return "number" != typeof e
            ? {
                top: null != (t = e.top) ? t : 0,
                right: null != (n = e.right) ? n : 0,
                bottom: null != (r = e.bottom) ? r : 0,
                left: null != (i = e.left) ? i : 0,
              }
            : { top: e, right: e, bottom: e, left: e };
        },
        "getSide",
        0,
        a,
        "getSideAxis",
        0,
        d,
        "max",
        0,
        i,
        "min",
        0,
        r,
        "placements",
        0,
        n,
        "rectToClientRect",
        0,
        function (e) {
          let { x: t, y: n, width: r, height: i } = e;
          return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
        },
        "round",
        0,
        o,
        "sides",
        0,
        t,
      ],
      58579,
    );
    var x = e.i(47452);
    let S = x.createContext(void 0);
    e.s(
      [
        "useDirection",
        0,
        function () {
          let e = x.useContext(S);
          return e?.direction ?? "ltr";
        },
      ],
      98624,
    );
  },
  9006,
  (e) => {
    "use strict";
    var t = e.i(21935);
    (e.s([], 4522), e.i(4522));
    var n = e.i(47452),
      r = e.i(43419),
      i = e.i(86228),
      o = e.i(75235),
      l = e.i(74725);
    let s = n.createContext(void 0);
    function a(e) {
      let t = n.useContext(s);
      if (void 0 === t && !e) throw Error((0, l.default)(72));
      return t;
    }
    var u = e.i(72765),
      c = e.i(56232),
      f = e.i(65079),
      d = e.i(80841),
      g = e.i(27309);
    function p(e) {
      return null != e && null != e.clientX;
    }
    var m = e.i(29809),
      h = e.i(38745),
      v = e.i(65527),
      y = e.i(62038),
      E = e.i(22908),
      x = e.i(91697),
      S = e.i(50163),
      b = e.i(36713),
      w = e.i(10854);
    let R = {
      ...b.popupStoreSelectors,
      disabled: (e) => e.disabled,
      instantType: (e) => e.instantType,
      isInstantPhase: (e) => e.isInstantPhase,
      trackCursorAxis: (e) => e.trackCursorAxis,
      disableHoverablePopup: (e) => e.disableHoverablePopup,
      lastOpenChangeReason: (e) => e.openChangeReason,
      closeOnClick: (e) => e.closeOnClick,
      closeDelay: (e) => e.closeDelay,
      adaptiveOrigin: (e) => e.adaptiveOrigin,
    };
    class C extends E.ReactStore {
      constructor(e, t, n) {
        const r = new w.PopupTriggerMap();
        super(P(e, r, t, n), T(r), R);
      }
      setOpen = (e, t) => {
        (0, v.applyPopupOpenChange)(this, e, t, { extraState: { openChangeReason: t.reason } });
      };
      cancelPendingOpen(e) {
        this.state.floatingRootContext.dispatchOpenChange(
          !1,
          (0, h.createChangeEventDetails)(x.REASONS.triggerPress, e),
        );
      }
    }
    function P(e, t, n, r = !1) {
      return {
        ...(0, b.createInitialPopupStoreState)(t, n, r),
        disabled: !1,
        instantType: void 0,
        isInstantPhase: !1,
        trackCursorAxis: "none",
        disableHoverablePopup: !1,
        openChangeReason: null,
        closeOnClick: !0,
        closeDelay: 0,
        adaptiveOrigin: void 0,
        ...e,
      };
    }
    function T(e) {
      return { popupRef: n.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: e };
    }
    let O = (0, r.fastComponent)(function (e) {
      let {
          disabled: r = !1,
          defaultOpen: i = !1,
          open: l,
          disableHoverablePopup: a = !1,
          trackCursorAxis: u = "none",
          actionsRef: c,
          onOpenChange: f,
          onOpenChangeComplete: d,
          handle: g,
          triggerId: p,
          defaultTriggerId: m = null,
          children: y,
        } = e,
        E = (0, v.usePopupRootStore)(
          (e, t) => new C({ open: i, openProp: l, activeTriggerId: m, triggerIdProp: p }, e, t),
        );
      (E.useControlledProp("openProp", l),
        E.useControlledProp("triggerIdProp", p),
        E.useContextCallback("onOpenChange", f),
        E.useContextCallback("onOpenChangeComplete", d));
      let S = E.useState("open"),
        b = !r && S,
        w = E.useState("activeTriggerId"),
        R = E.useState("mounted"),
        P = E.useState("payload");
      (E.useSyncedValues({ trackCursorAxis: u, disableHoverablePopup: a, disabled: r }),
        (0, v.useImplicitActiveTrigger)(E, { closeOnActiveTriggerUnmount: !0 }));
      let { forceUnmount: T, transitionStatus: O } = (0, v.useOpenStateTransitions)(b, E),
        L = E.useState("isInstantPhase"),
        M = E.useState("instantType"),
        D = E.useState("lastOpenChangeReason"),
        I = n.useRef(null);
      ((0, o.useIsoLayoutEffect)(() => {
        S && r && E.setOpen(!1, (0, h.createChangeEventDetails)(x.REASONS.disabled));
      }, [S, r, E]),
        (0, o.useIsoLayoutEffect)(() => {
          ("ending" === O && D === x.REASONS.none) || ("ending" !== O && L)
            ? ("delay" !== M && (I.current = M), E.set("instantType", "delay"))
            : null !== I.current && (E.set("instantType", I.current), (I.current = null));
        }, [O, L, D, M, E]),
        (0, o.useIsoLayoutEffect)(() => {
          b && null == w && E.set("payload", void 0);
        }, [E, w, b]),
        n.useImperativeHandle(
          c,
          () => ({
            unmount: T,
            close: () => E.setOpen(!1, (0, h.createChangeEventDetails)(x.REASONS.imperativeAction)),
          }),
          [T, E],
        ));
      let k = b || R || (!r && "none" !== u);
      return (0, t.jsxs)(s.Provider, {
        value: E,
        children: [
          g && (0, t.jsx)(v.PopupHandleAttachment, { handle: g, store: E }),
          k && (0, t.jsx)(A, { store: E, disabled: r, trackCursorAxis: u }),
          "function" == typeof y ? y({ payload: P }) : y,
        ],
      });
    });
    function A({ store: e, disabled: t, trackCursorAxis: r }) {
      let o = e.useState("floatingRootContext"),
        l = (0, m.useDismiss)(o, { enabled: !t, referencePress: () => e.select("closeOnClick") }),
        s = (function (e, t = {}) {
          let { enabled: r = !0, axis: i = "both" } = t,
            o = "rootStore" in e ? e.rootStore : e,
            l = o.useState("open"),
            s = o.useState("floatingElement"),
            a = o.useState("domReferenceElement"),
            m = o.context.dataRef,
            h = n.useRef(!1),
            v = n.useRef(null),
            [y, E] = n.useState(),
            [x, S] = n.useState([]),
            b = (0, c.useStableCallback)((e) => {
              o.set("positionReference", e);
            }),
            w = (0, c.useStableCallback)((e, t, n) => {
              if (!h.current && (!m.current.openEvent || p(m.current.openEvent))) {
                var r, l;
                let s, u, c;
                o.set(
                  "positionReference",
                  ((r = n ?? a),
                  (l = { x: e, y: t, axis: i, dataRef: m, pointerType: y }),
                  (s = null),
                  (u = null),
                  (c = !1),
                  {
                    contextElement: r || void 0,
                    getBoundingClientRect() {
                      let e = r?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 },
                        t = "x" === l.axis || "both" === l.axis,
                        n = "y" === l.axis || "both" === l.axis,
                        i =
                          ["mouseenter", "mousemove"].includes(l.dataRef.current.openEvent?.type || "") &&
                          "touch" !== l.pointerType,
                        o = e.width,
                        a = e.height,
                        f = e.x,
                        d = e.y;
                      return (
                        null == s && l.x && t && (s = e.x - l.x),
                        null == u && l.y && n && (u = e.y - l.y),
                        (f -= s || 0),
                        (d -= u || 0),
                        (o = 0),
                        (a = 0),
                        !c || i
                          ? ((o = "y" === l.axis ? e.width : 0),
                            (a = "x" === l.axis ? e.height : 0),
                            (f = t && null != l.x ? l.x : f),
                            (d = n && null != l.y ? l.y : d))
                          : c && !i && ((a = "x" === l.axis ? e.height : a), (o = "y" === l.axis ? e.width : o)),
                        (c = !0),
                        { width: o, height: a, x: f, y: d, top: d, right: f + o, bottom: d + a, left: f }
                      );
                    },
                  }),
                );
              }
            }),
            R = (0, c.useStableCallback)((e) => {
              l
                ? v.current || (w(e.clientX, e.clientY, e.currentTarget), S([]))
                : w(e.clientX, e.clientY, e.currentTarget);
            }),
            C = (0, g.isMouseLikePointerType)(y) ? s : l;
          (n.useEffect(() => {
            if (!r) return void b(a);
            if (!C) return;
            function e() {
              (v.current?.(), (v.current = null));
            }
            let t = (0, f.getWindow)(s);
            return (
              !m.current.openEvent || p(m.current.openEvent)
                ? (v.current = (0, u.addEventListener)(t, "mousemove", function (t) {
                    let n = (0, d.getTarget)(t);
                    (0, d.contains)(s, n) ? e() : w(t.clientX, t.clientY);
                  }))
                : b(a),
              e
            );
          }, [C, r, s, m, a, o, w, b, x]),
            n.useEffect(
              () => () => {
                o.set("positionReference", null);
              },
              [o],
            ),
            n.useEffect(() => {
              r && !s && (h.current = !1);
            }, [r, s]),
            n.useEffect(() => {
              !r && l && (h.current = !0);
            }, [r, l]));
          let P = n.useMemo(() => {
            function e(e) {
              E(e.pointerType);
            }
            return { onPointerDown: e, onPointerEnter: e, onMouseMove: R, onMouseEnter: R };
          }, [R]);
          return n.useMemo(() => (r ? { reference: P, trigger: P } : {}), [r, P]);
        })(o, { enabled: !t && "none" !== r, axis: "none" === r ? void 0 : r }),
        a = n.useMemo(() => (0, y.mergeProps)(s.reference, l.reference), [s.reference, l.reference]);
      return (
        (0, v.usePopupInteractionProps)(e, {
          activeTriggerProps: a,
          inactiveTriggerProps: a,
          popupProps: l.floating ?? i.EMPTY_OBJECT,
        }),
        null
      );
    }
    var L = e.i(64032),
      M = e.i(86942),
      D = e.i(32948),
      I = e.i(79331),
      k = e.i(61739),
      H = e.i(84092);
    let N = n.createContext(void 0);
    var F = e.i(32683),
      V = e.i(36488);
    let W = n.createContext({
      hasProvider: !1,
      timeoutMs: 0,
      delayRef: { current: 0 },
      initialDelayRef: { current: 0 },
      timeout: new L.Timeout(),
      currentIdRef: { current: null },
      currentContextRef: { current: null },
    });
    function j(e) {
      let { children: r, delay: i, timeoutMs: l = 0 } = e,
        s = n.useRef(i),
        a = n.useRef(i),
        u = n.useRef(null),
        c = n.useRef(null),
        f = (0, L.useTimeout)();
      return (
        (0, o.useIsoLayoutEffect)(() => {
          if (((a.current = i), !u.current)) {
            s.current = i;
            return;
          }
          s.current = { open: (0, V.getDelay)(s.current, "open"), close: (0, V.getDelay)(i, "close") };
        }, [i, u, s, a]),
        (0, t.jsx)(W.Provider, {
          value: n.useMemo(
            () => ({
              hasProvider: !0,
              delayRef: s,
              initialDelayRef: a,
              currentIdRef: u,
              timeoutMs: l,
              currentContextRef: c,
              timeout: f,
            }),
            [l, f],
          ),
          children: r,
        })
      );
    }
    var B = e.i(82063),
      $ = e.i(77490),
      z = e.i(38110),
      _ = e.i(62776);
    let U = "data-base-ui-tooltip-trigger";
    function Y(e) {
      if ("composedPath" in e) {
        let t = e.composedPath();
        for (let e = 0; e < t.length; e += 1) {
          let n = t[e];
          if ((0, f.isElement)(n)) return n;
        }
      }
      let t = e.target;
      return (0, f.isElement)(t) ? t : null;
    }
    let X = (0, r.fastComponentRef)(function (e, t) {
        let {
            render: r,
            className: i,
            style: s,
            handle: u,
            payload: c,
            disabled: p,
            delay: m,
            closeOnClick: y = !0,
            closeDelay: E,
            id: S,
            ...b
          } = e,
          w = a(!0),
          R = (0, k.usePopupHandleStore)(u) ?? w;
        if (!R) throw Error((0, l.default)(82));
        let C = (0, H.useBaseUiId)(S),
          P = R.useState("isTriggerActive", C),
          T = R.useState("isOpenedByTrigger", C),
          O = R.useState("floatingRootContext"),
          A = n.useRef(null),
          j = E ?? 0,
          { registerTrigger: X, isMountedByThisTrigger: K } = (0, v.useTriggerDataForwarding)(C, A, R, {
            payload: c,
            closeOnClick: y,
            closeDelay: j,
          }),
          q = n.useContext(N),
          {
            activeIdRef: J,
            delayRef: G,
            isInstantPhase: Q,
            hasProvider: Z,
          } = (function (e, t = { open: !1 }) {
            let { open: r } = t,
              i = "rootStore" in e ? e.rootStore : e,
              l = i.useState("floatingId"),
              {
                currentIdRef: s,
                delayRef: a,
                timeoutMs: u,
                initialDelayRef: c,
                currentContextRef: f,
                hasProvider: d,
                timeout: g,
              } = n.useContext(W),
              [p, m] = n.useState(!1),
              v = n.useRef(r);
            return (
              (0, o.useIsoLayoutEffect)(() => {
                v.current = r;
              }, [r]),
              (0, o.useIsoLayoutEffect)(() => {
                function e() {
                  (f.current?.setIsInstantPhase(!1),
                    (s.current = null),
                    (f.current = null),
                    (a.current = c.current),
                    g.clear());
                }
                if (s.current && !r && s.current === l) {
                  if ((m(!1), u))
                    return (
                      g.start(u, () => {
                        i.select("open") || (s.current && s.current !== l) || e();
                      }),
                      () => {
                        (v.current || s.current !== l) && g.clear();
                      }
                    );
                  e();
                }
              }, [r, l, s, a, u, c, f, g, i]),
              (0, o.useIsoLayoutEffect)(() => {
                if (!r) return;
                let e = f.current,
                  t = s.current;
                (g.clear(),
                  (f.current = { onOpenChange: i.setOpen, setIsInstantPhase: m }),
                  (s.current = l),
                  (a.current = { open: 0, close: (0, V.getDelay)(c.current, "close") }),
                  null !== t && t !== l
                    ? (m(!0),
                      e?.setIsInstantPhase(!0),
                      e?.onOpenChange(!1, (0, h.createChangeEventDetails)(x.REASONS.none)))
                    : (m(!1), e?.setIsInstantPhase(!1)));
              }, [r, l, i, s, a, c, f, g]),
              (0, o.useIsoLayoutEffect)(
                () => () => {
                  s.current === l &&
                    ((f.current = null), v.current) &&
                    ((s.current = null), (a.current = c.current), g.clear());
                },
                [f, s, a, l, c, g],
              ),
              n.useMemo(() => ({ activeIdRef: s, hasProvider: d, delayRef: a, isInstantPhase: p }), [s, d, a, p])
            );
          })(O, { open: T }),
          ee = (0, z.useHoverInteractionSharedState)(O);
        R.useSyncedValue("isInstantPhase", Q);
        let et = R.useState("disabled"),
          en = p ?? et,
          er = (0, M.useValueAsRef)(en),
          ei = R.useState("trackCursorAxis"),
          eo = R.useState("disableHoverablePopup"),
          el = n.useRef(!1),
          es = (0, L.useTimeout)(),
          ea = n.useRef(void 0);
        function eu() {
          return Z && null != J.current ? 0 : (m ?? q ?? 600);
        }
        function ec(e) {
          let t = A.current;
          if (!t || !e) return !1;
          let n = (function (e) {
            let t = e;
            for (; t;) {
              let e = t.closest(`[${U}]`);
              if (e) return e;
              let n = t.getRootNode();
              t = "host" in n && (0, f.isElement)(n.host) ? n.host : null;
            }
            return null;
          })(e);
          return null !== n && n !== t && (0, d.contains)(t, n);
        }
        let ef = (0, $.useHoverReferenceInteraction)(O, {
            enabled: !en,
            mouseOnly: !0,
            move: !1,
            handleClose: eo || "both" === ei ? null : (0, F.safePolygon)(),
            restMs: eu,
            delay: () => (null == E && Z ? { close: (0, V.getDelay)(G.current, "close") } : { close: j }),
            triggerElementRef: A,
            isActiveTrigger: P,
            isClosing: () => "ending" === R.select("transitionStatus"),
            shouldOpen: () => !el.current,
          }),
          ed = (0, B.useFocus)(O, { enabled: !en }).reference,
          eg = R.useState("triggerProps", K),
          ep = K || "none" !== ei;
        return (0, I.useRenderElement)("button", e, {
          state: { open: T },
          ref: [t, X, A],
          props: [
            ef,
            ed,
            ep ? eg : void 0,
            {
              onMouseOver(e) {
                ((e) => {
                  let t,
                    n = el.current,
                    r = Y(e),
                    i =
                      ((el.current = t = ec(r)),
                      t &&
                        (ee.openChangeTimeout.clear(),
                        ee.restTimeout.clear(),
                        (ee.restTimeoutPending = !1),
                        es.clear()),
                      t),
                    o = A.current,
                    l = o && r && (0, d.contains)(o, r);
                  if (i && R.select("open") && R.select("lastOpenChangeReason") === x.REASONS.triggerHover)
                    return R.setOpen(!1, (0, h.createChangeEventDetails)(x.REASONS.triggerHover, e));
                  if (
                    n &&
                    !i &&
                    l &&
                    !er.current &&
                    !R.select("open") &&
                    o &&
                    (0, g.isMouseLikePointerType)(ea.current)
                  ) {
                    let t = () => {
                        el.current ||
                          er.current ||
                          R.select("open") ||
                          R.setOpen(!0, (0, h.createChangeEventDetails)(x.REASONS.triggerHover, e, o));
                      },
                      n = eu();
                    0 === n ? (es.clear(), t()) : es.start(n, t);
                  }
                })(e.nativeEvent);
              },
              onFocus(e) {
                ec(Y(e.nativeEvent)) && e.preventBaseUIHandler();
              },
              onMouseLeave() {
                ((el.current = !1), es.clear(), (ea.current = void 0));
              },
              onPointerEnter(e) {
                ea.current = e.pointerType;
              },
              onPointerDown(e) {
                ((ea.current = e.pointerType),
                  R.set("closeOnClick", y),
                  y && !R.select("open") && R.cancelPendingOpen(e.nativeEvent));
              },
              onClick(e) {
                y && !R.select("open") && R.cancelPendingOpen(e.nativeEvent);
              },
              id: C,
              [_.triggerDisabled]: en ? "" : void 0,
              [U]: en ? void 0 : "",
            },
            b,
          ],
          stateAttributesMapping: D.triggerOpenStateMapping,
        });
      }),
      K = n.createContext(void 0);
    var q = e.i(99831);
    let J = n.forwardRef(function (e, n) {
        let { keepMounted: r = !1, ...i } = e;
        return a().useState("mounted") || r
          ? (0, t.jsx)(K.Provider, { value: r, children: (0, t.jsx)(q.FloatingPortalLite, { ref: n, ...i }) })
          : null;
      }),
      G = n.createContext(void 0);
    function Q() {
      let e = n.useContext(G);
      if (void 0 === e) throw Error((0, l.default)(71));
      return e;
    }
    var Z = e.i(76807),
      ee = e.i(86586),
      et = e.i(12168);
    let en = n.forwardRef(function (e, r) {
      let {
          render: i,
          className: o,
          anchor: s,
          positionMethod: u = "absolute",
          side: c = "top",
          align: f = "center",
          sideOffset: d = 0,
          alignOffset: g = 0,
          collisionBoundary: p = "clipping-ancestors",
          collisionPadding: m = 5,
          arrowPadding: h = 5,
          sticky: v = !1,
          disableAnchorTracking: y = !1,
          collisionAvoidance: E = ee.POPUP_COLLISION_AVOIDANCE,
          style: x,
          ...S
        } = e,
        b = a(),
        w = (function () {
          let e = n.useContext(K);
          if (void 0 === e) throw Error((0, l.default)(70));
          return e;
        })(),
        R = b.useState("open"),
        C = b.useState("mounted"),
        P = b.useState("trackCursorAxis"),
        T = b.useState("disableHoverablePopup"),
        O = b.useState("floatingRootContext"),
        A = b.useState("instantType"),
        L = b.useState("transitionStatus"),
        M = b.useState("adaptiveOrigin"),
        D = (0, Z.useAnchorPositioning)({
          anchor: s,
          positionMethod: u,
          floatingRootContext: O,
          mounted: C,
          side: c,
          sideOffset: d,
          align: f,
          alignOffset: g,
          collisionBoundary: p,
          collisionPadding: m,
          sticky: v,
          arrowPadding: h,
          disableAnchorTracking: y,
          keepMounted: w,
          collisionAvoidance: E,
          adaptiveOrigin: M,
        }),
        I = n.useMemo(
          () => ({
            open: R,
            side: D.side,
            align: D.align,
            anchorHidden: D.anchorHidden,
            instant: "none" !== P ? "tracking-cursor" : A,
          }),
          [R, D.side, D.align, D.anchorHidden, P, A],
        ),
        k = (0, et.usePositioner)(e, I, {
          styles: D.positionerStyles,
          transitionStatus: L,
          props: S,
          refs: [r, b.useStateSetter("positionerElement")],
          hidden: !C,
          inert: !R || "both" === P || T,
        });
      return (0, t.jsx)(G.Provider, { value: D, children: k });
    });
    var er = e.i(20999),
      ei = e.i(2544),
      eo = e.i(50616);
    let el = n.forwardRef(function (e, t) {
        let { render: n, className: r, style: i, ...o } = e,
          l = a(),
          { side: s, align: u } = Q(),
          c = l.useState("open"),
          f = l.useState("instantType"),
          d = l.useState("transitionStatus"),
          g = l.useState("popupProps"),
          p = l.useState("floatingRootContext"),
          m = l.useState("disabled"),
          h = l.useState("closeDelay");
        ((0, er.useOpenChangeComplete)({
          open: c,
          ref: l.context.popupRef,
          onComplete() {
            c && l.context.onOpenChangeComplete?.(!0);
          },
        }),
          (0, eo.useHoverFloatingInteraction)(p, { enabled: !m, closeDelay: h }));
        let y = l.useStateSetter("popupElement");
        return (0, I.useRenderElement)("div", e, {
          state: { open: c, side: s, align: u, instant: f, transitionStatus: d },
          ref: [t, l.context.popupRef, y],
          props: [v.FOCUSABLE_POPUP_PROPS, g, (0, ei.getDisabledMountTransitionStyles)(d), o],
          stateAttributesMapping: D.popupTransitionStateMapping,
        });
      }),
      es = n.forwardRef(function (e, t) {
        let { render: n, className: r, style: i, ...o } = e,
          l = a(),
          { arrowRef: s, side: u, align: c, arrowUncentered: f, arrowStyles: d } = Q(),
          g = l.useState("open"),
          p = l.useState("instantType");
        return (0, I.useRenderElement)("div", e, {
          state: { open: g, side: u, align: c, uncentered: f, instant: p },
          ref: [t, s],
          props: [{ style: d, "aria-hidden": !0 }, o],
          stateAttributesMapping: D.popupStateMapping,
        });
      });
    var ea = e.i(17816);
    let eu = n.forwardRef(function (e, t) {
      let { render: n, className: r, style: i, children: o, ...l } = e,
        s = a(),
        u = Q(),
        c = s.useState("instantType"),
        { children: f, state: d } = (0, ea.usePopupViewport)({ store: s, side: u.side, children: o }),
        g = { activationDirection: d.activationDirection, transitioning: d.transitioning, instant: c };
      return (0, I.useRenderElement)("div", e, {
        state: g,
        ref: t,
        props: [l, { children: f }],
        stateAttributesMapping: ea.popupViewportStateMapping,
      });
    });
    var ec = e.i(59473);
    class ef extends ec.BasePopupHandle {
      constructor() {
        super(
          (function () {
            let e = new w.PopupTriggerMap();
            return Object.assign(new S.NullStore(Object.freeze(P(void 0, e)), Object.freeze(T(e)), R), {
              setOpen: i.NOOP,
              cancelPendingOpen: i.NOOP,
            });
          })(),
          "Tooltip",
        );
      }
      open(e) {
        this.openByTrigger(e);
      }
      close() {
        this.closePopup();
      }
      get isOpen() {
        return this.attachedStore?.select("open") ?? !1;
      }
    }
    e.s(
      [
        "Arrow",
        0,
        es,
        "Handle",
        0,
        ef,
        "Popup",
        0,
        el,
        "Portal",
        0,
        J,
        "Positioner",
        0,
        en,
        "Provider",
        0,
        function (e) {
          let { delay: r, closeDelay: i, timeout: o = 400 } = e,
            l = n.useMemo(() => ({ open: r, close: i }), [r, i]);
          return (0, t.jsx)(N.Provider, {
            value: r,
            children: (0, t.jsx)(j, { delay: l, timeoutMs: o, children: e.children }),
          });
        },
        "Root",
        0,
        O,
        "Trigger",
        0,
        X,
        "Viewport",
        0,
        eu,
        "createHandle",
        0,
        function () {
          return new ef();
        },
      ],
      11923,
    );
    var ed = e.i(11923),
      ed = ed,
      eg = e.i(94814);
    e.s(
      [
        "Tooltip",
        0,
        function ({ ...e }) {
          return (0, t.jsx)(ed.Root, { "data-slot": "tooltip", ...e });
        },
        "TooltipContent",
        0,
        function ({
          className: e,
          side: n = "top",
          sideOffset: r = 4,
          align: i = "center",
          alignOffset: o = 0,
          children: l,
          ...s
        }) {
          return (0, t.jsx)(ed.Portal, {
            children: (0, t.jsx)(ed.Positioner, {
              align: i,
              alignOffset: o,
              side: n,
              sideOffset: r,
              className: "isolate z-50",
              children: (0, t.jsxs)(ed.Popup, {
                "data-slot": "tooltip-content",
                className: (0, eg.cn)(
                  "bg-foreground text-background data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm",
                  e,
                ),
                ...s,
                children: [
                  l,
                  (0, t.jsx)(ed.Arrow, {
                    className:
                      "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5",
                  }),
                ],
              }),
            }),
          });
        },
        "TooltipProvider",
        0,
        function ({ delay: e = 0, ...n }) {
          return (0, t.jsx)(ed.Provider, { "data-slot": "tooltip-provider", delay: e, ...n });
        },
        "TooltipTrigger",
        0,
        function ({ ...e }) {
          return (0, t.jsx)(ed.Trigger, { "data-slot": "tooltip-trigger", ...e });
        },
      ],
      9006,
    );
  },
]);
