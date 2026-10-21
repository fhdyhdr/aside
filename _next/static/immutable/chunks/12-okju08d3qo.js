(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  34882,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(31254),
      u = e.i(60203),
      i = e.i(28091),
      o = e.i(7599),
      s = e.i(75183),
      l = r,
      c = e.i(12690);
    function a(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class f extends l.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if ((0, s.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
          let e = t.offsetParent,
            r = ((0, s.isHTMLElement)(e) && e.offsetWidth) || 0,
            n = ((0, s.isHTMLElement)(e) && e.offsetHeight) || 0,
            u = getComputedStyle(t),
            i = this.props.sizeRef.current;
          ((i.height = parseFloat(u.height)),
            (i.width = parseFloat(u.width)),
            (i.top = t.offsetTop),
            (i.left = t.offsetLeft),
            (i.right = r - i.width - i.left),
            (i.bottom = n - i.height - i.top),
            (i.direction = u.direction));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function d({ children: e, isPresent: n, anchorX: u, anchorY: i, root: o, pop: s }) {
      let m = (0, l.useId)(),
        p = (0, l.useRef)(null),
        h = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
        { nonce: g } = (0, l.useContext)(c.MotionConfigContext),
        x = (function (...e) {
          return r.useCallback(
            (function (...e) {
              return (t) => {
                let r = !1,
                  n = e.map((e) => {
                    let n = a(e, t);
                    return (r || "function" != typeof n || (r = !0), n);
                  });
                if (r)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t];
                      "function" == typeof r ? r() : a(e[t], null);
                    }
                  };
              };
            })(...e),
            e,
          );
        })(p, !1 !== s ? (e.props?.ref ?? e?.ref) : void 0);
      return (
        (0, l.useInsertionEffect)(() => {
          let { width: e, height: t, top: r, left: l, right: c, bottom: a, direction: f } = h.current;
          if (n || !1 === s || !p.current || !e || !t) return;
          let d = "rtl" === f,
            x = "left" === u ? (d ? `right: ${c}` : `left: ${l}`) : d ? `left: ${l}` : `right: ${c}`,
            C = "bottom" === i ? `bottom: ${a}` : `top: ${r}`;
          p.current.dataset.motionPopId = m;
          let v = document.createElement("style");
          g && (v.nonce = g);
          let R = o ?? document.head;
          return (
            R.appendChild(v),
            v.sheet &&
              v.sheet.insertRule(`
          [data-motion-pop-id="${m}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${x}px !important;
            ${C}px !important;
          }
        `),
            () => {
              (p.current?.removeAttribute("data-motion-pop-id"), R.contains(v) && R.removeChild(v));
            }
          );
        }, [n]),
        (0, t.jsx)(f, {
          isPresent: n,
          childRef: p,
          sizeRef: h,
          pop: s,
          children: !1 === s ? e : l.cloneElement(e, { ref: x }),
        })
      );
    }
    let m = ({
      children: e,
      initial: n,
      isPresent: s,
      onExitComplete: l,
      custom: c,
      presenceAffectsLayout: a,
      mode: f,
      anchorX: m,
      anchorY: h,
      root: g,
    }) => {
      let x = (0, u.useConstant)(p),
        C = (0, r.useId)(),
        v = (0, r.useRef)(s),
        R = (0, r.useRef)(l);
      (0, i.useIsomorphicLayoutEffect)(() => {
        ((v.current = s), (R.current = l));
      });
      let y = !0,
        E = (0, r.useMemo)(
          () => (
            (y = !1),
            {
              id: C,
              initial: n,
              isPresent: s,
              custom: c,
              onExitComplete: (e) => {
                for (let t of (x.set(e, !0), x.values())) if (!t) return;
                l && l();
              },
              register: (e) => (
                x.set(e, !1),
                () => {
                  (x.delete(e), v.current || x.size || R.current?.());
                }
              ),
            }
          ),
          [s, x, l],
        );
      return (
        a && y && (E = { ...E }),
        (0, r.useMemo)(() => {
          x.forEach((e, t) => x.set(t, !1));
        }, [s]),
        r.useEffect(() => {
          s || x.size || !l || l();
        }, [s]),
        (e = (0, t.jsx)(d, { pop: "popLayout" === f, isPresent: s, anchorX: m, anchorY: h, root: g, children: e })),
        (0, t.jsx)(o.PresenceContext.Provider, { value: E, children: e })
      );
    };
    function p() {
      return new Map();
    }
    var h = e.i(88579);
    let g = (e) => e.key || "";
    function x(e) {
      let t = [];
      return (
        r.Children.forEach(e, (e) => {
          (0, r.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    e.s(
      [
        "AnimatePresence",
        0,
        ({
          children: e,
          custom: o,
          initial: s = !0,
          onExitComplete: l,
          presenceAffectsLayout: c = !0,
          mode: a = "sync",
          propagate: f = !1,
          anchorX: d = "left",
          anchorY: p = "top",
          root: C,
        }) => {
          let [v, R] = (0, h.usePresence)(f),
            y = (0, r.useMemo)(() => x(e), [e]),
            E = f && !v ? [] : y.map(g),
            b = (0, r.useRef)(!0),
            L = (0, r.useRef)(y),
            w = (0, u.useConstant)(() => new Map()),
            I = (0, r.useRef)(new Set()),
            [M, k] = (0, r.useState)(y),
            [S, T] = (0, r.useState)(y);
          ((0, i.useIsomorphicLayoutEffect)(() => {
            !f || v || S.length || R?.();
          }, [v, f, S.length, R]),
            (0, i.useIsomorphicLayoutEffect)(() => {
              ((b.current = !1), (L.current = y));
              for (let e = 0; e < S.length; e++) {
                let t = g(S[e]);
                E.includes(t) ? (w.delete(t), I.current.delete(t)) : !0 !== w.get(t) && w.set(t, !1);
              }
            }, [S, E.length, E.join("-")]));
          let A = [];
          if (y !== M) {
            let e = [...y],
              t = 0;
            for (let r of S) {
              let n = E.indexOf(g(r));
              -1 === n ? (e.splice(t++, 0, r), A.push(r)) : (t = n + A.length + 1);
            }
            return ("wait" === a && A.length && (e = A), T(x(e)), k(y), null);
          }
          let { forceRender: O } = (0, r.useContext)(n.LayoutGroupContext);
          return (0, t.jsx)(t.Fragment, {
            children: S.map((e) => {
              let r = g(e),
                n = (!f || !!v) && (y === S || E.includes(r));
              return (0, t.jsx)(
                m,
                {
                  isPresent: n,
                  initial: (!b.current || !!s) && void 0,
                  custom: o,
                  presenceAffectsLayout: c,
                  mode: a,
                  root: C,
                  onExitComplete: n
                    ? void 0
                    : () => {
                        if (I.current.has(r) || !w.has(r)) return;
                        (I.current.add(r), w.set(r, !0));
                        let e = !0;
                        (w.forEach((t) => {
                          t || (e = !1);
                        }),
                          e && (O?.(), T(L.current), f && R?.(), l && l()));
                      },
                  anchorX: d,
                  anchorY: p,
                  children: e,
                },
                r,
              );
            }),
          });
        },
      ],
      34882,
    );
  },
  63985,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(71132);
    let n = { some: 0, all: 1 };
    e.s(
      [
        "useInView",
        0,
        function (e, { root: u, margin: i, amount: o, once: s = !1, initial: l = !1 } = {}) {
          let [c, a] = (0, t.useState)(l);
          return (
            (0, t.useEffect)(() => {
              if (!e.current || (s && c)) return;
              let t = { root: (u && u.current) || void 0, margin: i, amount: o };
              return (function (e, t, { root: u, margin: i, amount: o = "some" } = {}) {
                let s = (0, r.resolveElements)(e),
                  l = new WeakMap(),
                  c = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        let r = l.get(e.target);
                        if (!!r !== e.isIntersecting)
                          if (e.isIntersecting) {
                            let r = t(e.target, e);
                            "function" == typeof r ? l.set(e.target, r) : c.unobserve(e.target);
                          } else "function" == typeof r && (r(e), l.delete(e.target));
                      });
                    },
                    { root: u, rootMargin: i, threshold: "number" == typeof o ? o : n[o] },
                  );
                return (s.forEach((e) => c.observe(e)), () => c.disconnect());
              })(e.current, () => (a(!0), s ? void 0 : () => a(!1)), t);
            }, [u, e, i, s, o]),
            c
          );
        },
      ],
      63985,
    );
  },
  82268,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "OfficialBrandSymbolSolidIcon",
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
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 0.798752C18.0061 0.798752 22.875 5.81372 22.875 12C22.875 18.1863 18.0061 23.2013 12 23.2013C5.9939 23.2013 1.125 18.1863 1.125 12C1.125 5.81372 5.9939 0.798752 12 0.798752ZM20.3127 7.71001C20.2134 7.51798 19.9272 7.5884 19.9046 7.80341C19.6814 9.92448 18.7129 12.4429 17.0723 14.8569C17.0412 14.9026 17.0489 14.9645 17.0907 15.0007C17.5461 15.395 18.0588 15.8255 18.63 16.3046C18.6957 16.3596 18.7076 16.4561 18.6572 16.5255L18.3376 16.9654C18.2872 17.0348 18.1918 17.0533 18.1191 17.0078C17.4862 16.6121 16.9177 16.2572 16.4015 15.9456C16.3543 15.9172 16.2932 15.9288 16.2592 15.9723C14.4686 18.2662 12.3752 19.9533 10.4316 20.81C10.2334 20.8974 10.2541 21.1922 10.4679 21.2275C10.9664 21.3097 11.4782 21.3525 12 21.3525C17.1411 21.3525 21.3132 17.2043 21.3521 12.0724C21.3522 12.0483 21.3525 12.0242 21.3525 12C21.3525 11.9591 21.3522 11.9183 21.3517 11.8776C21.3324 10.3766 20.9596 8.96097 20.3127 7.71001ZM8.23065 10.5182C8.18199 10.4702 8.10065 10.4783 8.06372 10.5359C7.84985 10.8692 7.65019 11.2024 7.46479 11.5337C6.56632 13.1558 6.01807 14.7423 5.81941 16.1049C5.62976 17.4058 5.79324 18.3334 6.08927 18.9349C6.25785 19.2774 6.55678 19.5534 6.92958 19.6355C7.53264 19.7683 8.47216 19.6592 9.78534 18.9782C11.2671 18.2098 12.9143 16.8474 14.4078 15.0019C14.4521 14.9472 14.4321 14.865 14.3679 14.8362C12.2905 13.9024 11.1953 14.3506 9.17749 16.6044C9.12146 16.667 9.02613 16.6785 8.95817 16.6291L8.51126 16.3045C8.4433 16.2551 8.42488 16.1607 8.46708 16.0881C10.0522 13.3596 10.015 12.2801 8.23065 10.5182ZM12 2.6475C6.87564 2.6475 2.7138 6.76874 2.64824 11.8776C2.64776 11.9183 2.6475 11.9591 2.6475 12C2.6475 12.0242 2.64776 12.0483 2.64793 12.0724C2.66002 13.6675 3.07137 15.1676 3.78704 16.4776C3.88945 16.665 4.17064 16.5929 4.19363 16.3805C4.37531 14.7022 5.03951 12.7469 6.14242 10.779C6.38451 10.343 6.6487 9.9069 6.93444 9.47361C6.96472 9.4277 6.95634 9.36643 6.91452 9.33072C6.41215 8.9017 5.83847 8.42601 5.19246 7.8849C5.12677 7.82987 5.11486 7.73334 5.16523 7.66401L5.74059 6.87214C5.79096 6.80281 5.88645 6.78431 5.95908 6.82979C6.6723 7.2763 7.30118 7.67439 7.86381 8.01925C7.91081 8.04806 7.97183 8.03697 8.00607 7.99377C8.05701 7.92949 8.10818 7.86568 8.15961 7.8024C9.89126 5.65383 11.8619 4.05446 13.6829 3.20585C13.8757 3.11595 13.8533 2.82861 13.6438 2.79146C13.1101 2.69685 12.5608 2.6475 12 2.6475ZM17.0129 4.24822C16.3483 4.07663 15.3493 4.17127 14.0082 4.83392C12.5296 5.56454 10.8366 6.9511 9.36261 8.73817C9.31902 8.79102 9.33622 8.87119 9.39706 8.9027C11.6278 10.0584 12.6659 9.76177 14.7727 7.40921C14.8287 7.34664 14.9242 7.33498 14.9921 7.38435L15.439 7.70904C15.507 7.75841 15.5255 7.85263 15.4833 7.92526C13.9619 10.5433 13.8753 11.7232 15.4099 13.413C15.457 13.4648 15.541 13.4587 15.5795 13.4002C16.9163 11.3727 17.7272 9.34172 18.0052 7.66455C18.1716 6.42657 18.1101 5.59546 17.8898 5.03899C17.7375 4.65427 17.4135 4.35166 17.0129 4.24822Z",
              fill: "currentColor",
            }),
          }),
      ],
      82268,
    );
  },
  92032,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s([
      "IconChevronRightMedium",
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
            d: "M8.79295 5.29289C9.18348 4.90237 9.81649 4.90237 10.207 5.29289L16.207 11.2929C16.5975 11.6834 16.5975 12.3164 16.207 12.707L10.207 18.707C9.81649 19.0975 9.18348 19.0975 8.79295 18.707C8.40243 18.3164 8.40243 17.6834 8.79295 17.2929L14.0859 11.9999L8.79295 6.70696C8.40243 6.31643 8.40243 5.68342 8.79295 5.29289Z",
            fill: "currentColor",
          }),
        }),
    ]);
  },
  15894,
  95924,
  10591,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(86429),
      n = e.i(75235),
      u = e.i(46746),
      i = e.i(56232),
      o = e.i(86942),
      s = e.i(47035),
      l = e.i(65079),
      c = e.i(38745),
      a = e.i(91697),
      f = e.i(42701),
      d = e.i(53441),
      m = e.i(29925),
      p = e.i(80841),
      h = e.i(11978),
      g = e.i(19709),
      x = e.i(27309);
    function C(e) {
      return s.platform.engine.webkit && 0 === e.movementX && 0 === e.movementY;
    }
    function v(e, t, r) {
      switch (e) {
        case "vertical":
          return t;
        case "horizontal":
          return r;
        default:
          return t || r;
      }
    }
    function R(e, t) {
      return v(t, e === m.ARROW_UP || e === m.ARROW_DOWN, e === m.ARROW_LEFT || e === m.ARROW_RIGHT);
    }
    function y(e, t, r) {
      return (
        v(t, e === m.ARROW_DOWN, r ? e === m.ARROW_LEFT : e === m.ARROW_RIGHT) || "Enter" === e || " " === e || "" === e
      );
    }
    e.s(
      [
        "useListNavigation",
        0,
        function (e, s) {
          let {
              listRef: E,
              activeIndex: b,
              onNavigate: L = () => {},
              enabled: w = !0,
              selectedIndex: I = null,
              allowEscape: M = !1,
              loopFocus: k = !1,
              nested: S = !1,
              rtl: T = !1,
              virtual: A = !1,
              focusItemOnOpen: O = "auto",
              focusItemOnHover: P = !0,
              openOnArrowKeyDown: W = !0,
              disabledIndices: N,
              orientation: D = "vertical",
              parentOrientation: F,
              id: j,
              resetOnPointerLeave: V = !0,
              externalTree: $,
              grid: _,
            } = s,
            H = null != _,
            z = "rootStore" in e ? e.rootStore : e,
            B = z.useState("open"),
            K = z.useState("floatingElement"),
            Y = z.useState("domReferenceElement"),
            U = z.context.dataRef,
            Z = (0, h.getFloatingFocusElement)(K),
            G = (0, h.isTypeableCombobox)(Y),
            X = (0, o.useValueAsRef)(Z),
            q = (0, f.useFloatingParentNodeId)(),
            J = (0, f.useFloatingTree)($),
            Q = t.useRef(O),
            ee = t.useRef(I ?? -1),
            et = t.useRef(null),
            er = t.useRef(!0),
            en = (0, i.useStableCallback)((e) => {
              L(-1 === ee.current ? null : ee.current, e);
            }),
            eu = t.useRef(!!K),
            ei = t.useRef(B),
            eo = t.useRef(!1),
            es = t.useRef(!1),
            el = t.useRef(null),
            ec = (0, o.useValueAsRef)(N),
            ea = (0, o.useValueAsRef)(B),
            ef = (0, o.useValueAsRef)(I),
            ed = (0, o.useValueAsRef)(V),
            em = (0, r.useAnimationFrame)(),
            ep = (0, r.useAnimationFrame)(),
            eh = (0, i.useStableCallback)(() => {
              function e(e) {
                A
                  ? J?.events.emit("virtualfocus", e)
                  : (el.current = (0, g.enqueueFocus)(e, { sync: eo.current, preventScroll: !0 }));
              }
              let t = E.current[ee.current],
                r = es.current;
              (t && e(t),
                (eo.current ? (e) => e() : (e) => em.request(e))(() => {
                  let n = E.current[ee.current] || t;
                  !n ||
                    (t || e(n),
                    ey && (r || !er.current) && n.scrollIntoView?.({ block: "nearest", inline: "nearest" }));
                }));
            });
          ((0, n.useIsoLayoutEffect)(() => {
            U.current.orientation = D;
          }, [U, D]),
            (0, n.useIsoLayoutEffect)(() => {
              w &&
                (B && K
                  ? ((ee.current = I ?? -1), Q.current && null != I && ((es.current = !0), en()))
                  : eu.current && ((ee.current = -1), en()));
            }, [w, B, K, I, en]),
            (0, n.useIsoLayoutEffect)(() => {
              if (w) {
                if (!B) {
                  eo.current = !1;
                  return;
                }
                if (K)
                  if (null == b) {
                    if (((eo.current = !1), null != ef.current)) return;
                    if (
                      (eu.current && ((ee.current = -1), eh()),
                      (!ei.current || !eu.current) &&
                        Q.current &&
                        (null != et.current || (!0 === Q.current && null == et.current)))
                    ) {
                      let e = 0,
                        t = () => {
                          null == E.current[0]
                            ? (e < 2 && (e ? (e) => ep.request(e) : queueMicrotask)(t), (e += 1))
                            : ((ee.current =
                                null == et.current || y(et.current, D, T) || S
                                  ? (0, d.getMinListIndex)(E)
                                  : (0, d.getMaxListIndex)(E)),
                              (et.current = null),
                              en());
                        };
                      t();
                    }
                  } else (0, d.isIndexOutOfListBounds)(E.current, b) || ((ee.current = b), eh(), (es.current = !1));
              }
            }, [w, B, K, b, ef, S, E, D, T, en, eh, ep]),
            (0, n.useIsoLayoutEffect)(() => {
              if (!w || K || !J || A || !eu.current) return;
              let e = J.nodesRef.current,
                t = e.find((e) => e.id === q)?.context?.elements.floating,
                r = (0, p.activeElement)((0, u.ownerDocument)(Y ?? t ?? null)),
                n = e.some((e) => e.context && (0, p.contains)(e.context.elements.floating, r));
              t && !n && er.current && t.focus({ preventScroll: !0 });
            }, [w, K, Y, J, q, A]),
            (0, n.useIsoLayoutEffect)(() => {
              ((ei.current = B), (eu.current = !!K));
            }),
            (0, n.useIsoLayoutEffect)(() => {
              B || ((et.current = null), (Q.current = O));
            }, [B, O]));
          let eg = null != b,
            ex = (0, i.useStableCallback)((e) => {
              if (!ea.current) return;
              let t = E.current.indexOf(e.currentTarget);
              -1 !== t && (ee.current !== t || b !== t) && ((ee.current = t), en(e));
            }),
            eC = (0, i.useStableCallback)(
              () => F ?? J?.nodesRef.current.find((e) => e.id === q)?.context?.dataRef?.current.orientation,
            ),
            ev = (0, i.useStableCallback)(() => (0, d.getMinListIndex)(E, ec.current)),
            eR = (0, i.useStableCallback)((e) => {
              var t;
              let r, n;
              if (
                ((er.current = !1),
                (eo.current = !0),
                229 === e.which || (!ea.current && e.currentTarget === X.current))
              )
                return;
              if (
                S &&
                ((t = e.key),
                (r = T ? t === m.ARROW_RIGHT : t === m.ARROW_LEFT),
                (n = t === m.ARROW_UP),
                "both" === D || ("horizontal" === D && H) ? "Escape" === t : v(D, r, n))
              ) {
                (R(e.key, eC()) || (0, x.stopEvent)(e),
                  z.setOpen(!1, (0, c.createChangeEventDetails)(a.REASONS.listNavigation, e.nativeEvent)),
                  (0, l.isHTMLElement)(Y) && (A ? J?.events.emit("virtualfocus", Y) : Y.focus()));
                return;
              }
              let u = ee.current,
                i = (0, d.getMinListIndex)(E, N),
                o = (0, d.getMaxListIndex)(E, N);
              if (
                (G ||
                  ("Home" === e.key && ((0, x.stopEvent)(e), (ee.current = i), en(e)),
                  "End" === e.key && ((0, x.stopEvent)(e), (ee.current = o), en(e))),
                null != _)
              ) {
                let t = _(e, ee.current, E, D, k, T, N, i, o);
                if ((null != t && ((ee.current = t), en(e)), "both" === D)) return;
              }
              if (R(e.key, D)) {
                if (
                  ((0, x.stopEvent)(e),
                  B && !A && (0, p.activeElement)(e.currentTarget.ownerDocument) === e.currentTarget)
                ) {
                  ((ee.current = y(e.key, D, T) ? i : o), en(e));
                  return;
                }
                (y(e.key, D, T)
                  ? k
                    ? u >= o
                      ? M && u !== E.current.length
                        ? (ee.current = -1)
                        : ((eo.current = !1), (ee.current = i))
                      : (ee.current = (0, d.findNonDisabledListIndex)(E.current, {
                          startingIndex: u,
                          disabledIndices: N,
                        }))
                    : (ee.current = Math.min(
                        o,
                        (0, d.findNonDisabledListIndex)(E.current, { startingIndex: u, disabledIndices: N }),
                      ))
                  : k
                    ? u <= i
                      ? M && -1 !== u
                        ? (ee.current = E.current.length)
                        : ((eo.current = !1), (ee.current = o))
                      : (ee.current = (0, d.findNonDisabledListIndex)(E.current, {
                          startingIndex: u,
                          decrement: !0,
                          disabledIndices: N,
                        }))
                    : (ee.current = Math.max(
                        i,
                        (0, d.findNonDisabledListIndex)(E.current, {
                          startingIndex: u,
                          decrement: !0,
                          disabledIndices: N,
                        }),
                      )),
                  (0, d.isIndexOutOfListBounds)(E.current, ee.current) && (ee.current = -1),
                  en(e));
              }
            }),
            ey = t.useMemo(
              () => ({
                onFocus(e) {
                  ((eo.current = !0), ex(e));
                },
                onClick: ({ currentTarget: e }) => e.focus({ preventScroll: !0 }),
                onMouseMove(e) {
                  !C(e) && ((eo.current = !0), (es.current = !1), P && ex(e));
                },
                onPointerLeave(e) {
                  if (!ea.current || !er.current || "touch" === e.pointerType) return;
                  eo.current = !0;
                  let t = e.relatedTarget;
                  if (
                    !(!P || E.current.includes(t)) &&
                    ed.current &&
                    (el.current?.(), (el.current = null), (ee.current = -1), en(e), !A)
                  ) {
                    let e = X.current,
                      t = (0, p.activeElement)((0, u.ownerDocument)(e));
                    e && (0, p.contains)(e, t) && e.focus({ preventScroll: !0 });
                  }
                },
              }),
              [ex, ea, X, P, E, en, ed, A],
            ),
            eE = t.useMemo(() => A && B && eg && { "aria-activedescendant": `${j}-${b}` }, [A, B, eg, j, b]),
            eb = t.useMemo(
              () => ({
                ...(!G ? eE : {}),
                onKeyDown(e) {
                  if ("Tab" === e.key && e.shiftKey && B && !A) {
                    let t = (0, p.getTarget)(e.nativeEvent);
                    if (t && !(0, p.contains)(X.current, t)) return;
                    ((0, x.stopEvent)(e),
                      z.setOpen(!1, (0, c.createChangeEventDetails)(a.REASONS.focusOut, e.nativeEvent)),
                      (0, l.isHTMLElement)(Y) && Y.focus());
                    return;
                  }
                  eR(e);
                },
                onPointerMove(e) {
                  C(e) || (er.current = !0);
                },
              }),
              [eE, eR, X, G, z, B, A, Y],
            ),
            eL = t.useMemo(() => {
              function e(e) {
                z.setOpen(
                  !0,
                  (0, c.createChangeEventDetails)(a.REASONS.listNavigation, e.nativeEvent, e.currentTarget),
                );
              }
              function t(e) {
                "auto" === O && (0, x.isVirtualClick)(e.nativeEvent) && (Q.current = !A);
              }
              function r(e) {
                ((Q.current = O), "auto" === O && (0, x.isVirtualPointerEvent)(e.nativeEvent) && (Q.current = !0));
              }
              return {
                onKeyDown(t) {
                  var r, n;
                  let u = z.select("open");
                  er.current = !1;
                  let i = t.key.startsWith("Arrow"),
                    o =
                      ((r = t.key), (n = eC()), v(n, T ? r === m.ARROW_LEFT : r === m.ARROW_RIGHT, r === m.ARROW_DOWN)),
                    s = R(t.key, D),
                    l = (S ? o : s) || "Enter" === t.key || "" === t.key.trim();
                  if (A && u) return eR(t);
                  if (u || W || !i) {
                    if (l) {
                      let e = R(t.key, eC());
                      et.current = S && e ? null : t.key;
                    }
                    if (S) {
                      o && ((0, x.stopEvent)(t), u ? ((ee.current = ev()), en(t)) : e(t));
                      return;
                    }
                    s &&
                      (null != ef.current && (ee.current = ef.current),
                      (0, x.stopEvent)(t),
                      !u && W ? e(t) : eR(t),
                      u && en(t));
                  }
                },
                onFocus(e) {
                  z.select("open") && !A && ((ee.current = -1), en(e));
                },
                onPointerDown: r,
                onPointerEnter: r,
                onMouseDown: t,
                onClick: t,
              };
            }, [eR, O, ev, S, en, z, W, D, eC, T, ef, A]),
            ew = t.useMemo(() => ({ ...eE, ...eL }), [eE, eL]);
          return t.useMemo(
            () => (w ? { reference: ew, floating: eb, item: ey, trigger: eL } : {}),
            [w, ew, eb, eL, ey],
          );
        },
      ],
      15894,
    );
    var E = e.i(64032),
      b = e.i(86228);
    e.s(
      [
        "useTypeahead",
        0,
        function (e, r) {
          let {
              listRef: u,
              elementsRef: o,
              activeIndex: s,
              onMatch: l,
              disabledIndices: c,
              onTyping: a,
              enabled: f = !0,
              resetMs: m = 750,
              selectedIndex: h = null,
            } = r,
            g = "rootStore" in e ? e.rootStore : e,
            C = g.useState("open"),
            v = (0, E.useTimeout)(),
            R = t.useRef(""),
            y = t.useRef(h ?? s ?? -1),
            L = t.useRef(null),
            w = (0, i.useStableCallback)((e) => {
              function t(e) {
                let t = o?.current[e];
                return (
                  !((t && !(0, d.isElementVisible)(t)) || t?.matches(":disabled")) &&
                  (null == c || !(0, d.isListIndexDisabled)(b.EMPTY_ARRAY, e, c))
                );
              }
              function r(e, n, u = 0) {
                if (0 === e.length) return -1;
                let i = ((u % e.length) + e.length) % e.length,
                  o = n.toLowerCase();
                for (let r = 0; r < e.length; r += 1) {
                  let n = (i + r) % e.length,
                    u = e[n];
                  if (u?.toLowerCase().startsWith(o) && t(n)) return n;
                }
                return -1;
              }
              let n = u.current;
              if (
                (R.current.length > 0 && " " === e.key && ((0, x.stopEvent)(e), a?.(!0)),
                R.current.length > 0 && " " !== R.current[0] && -1 === r(n, R.current) && " " !== e.key && a?.(!1),
                null == n || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey)
              )
                return;
              C && " " !== e.key && ((0, x.stopEvent)(e), a?.(!0));
              let i = "" === R.current;
              (i && (y.current = h ?? s ?? -1),
                n.every((e, r) => !(e && t(r)) || e[0]?.toLowerCase() !== e[1]?.toLowerCase()) &&
                  R.current === e.key &&
                  ((R.current = ""), (y.current = L.current)),
                (R.current += e.key),
                v.start(m, () => {
                  ((R.current = ""), (y.current = L.current), a?.(!1));
                }));
              let f = i ? (h ?? s ?? -1) : y.current,
                p = r(n, R.current, (f ?? 0) + 1);
              -1 !== p ? (l?.(p), (L.current = p)) : " " !== e.key && ((R.current = ""), a?.(!1));
            }),
            I = (0, i.useStableCallback)((e) => {
              let t = e.relatedTarget,
                r = g.select("domReferenceElement"),
                n = g.select("floatingElement");
              (0, p.contains)(r, t) ||
                (0, p.contains)(n, t) ||
                (v.clear(), (R.current = ""), (y.current = L.current), a?.(!1));
            });
          (0, n.useIsoLayoutEffect)(() => {
            (C || null === h) && (v.clear(), (L.current = null), "" !== R.current && (R.current = ""));
          }, [C, h, v]);
          let M = t.useMemo(() => ({ onKeyDown: w, onBlur: I }), [w, I]);
          return t.useMemo(() => (f ? { reference: M, floating: M } : {}), [f, M]);
        },
      ],
      95924,
    );
    var L = e.i(60309);
    e.s(
      [
        "isMouseWithinBounds",
        0,
        function (e, t) {
          let r = (function (e) {
            let t = e.getBoundingClientRect(),
              r = (0, L.ownerWindow)(e);
            if (s.platform.env.jsdom) return t;
            let n = r.getComputedStyle(e, "::before"),
              u = r.getComputedStyle(e, "::after");
            if ("none" === n.content && "none" === u.content) return t;
            let i = parseFloat(n.width) || 0,
              o = parseFloat(n.height) || 0,
              l = parseFloat(u.width) || 0,
              c = parseFloat(u.height) || 0,
              a = Math.max(t.width, i, l),
              f = Math.max(t.height, o, c),
              d = a - t.width,
              m = f - t.height;
            return { left: t.left - d / 2, right: t.right + d / 2, top: t.top - m / 2, bottom: t.bottom + m / 2 };
          })(t);
          return (
            e.clientX >= r.left - 5 && e.clientX <= r.right + 5 && e.clientY >= r.top - 5 && e.clientY <= r.bottom + 5
          );
        },
      ],
      10591,
    );
  },
  56222,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(12084),
      n = e.i(40377),
      u = e.i(68716);
    e.s([
      "useCompositeItem",
      0,
      function (e = {}) {
        let {
            highlightItemOnHover: i,
            highlightedIndex: o,
            onHighlightedIndexChange: s,
          } = (0, n.useCompositeRootContext)(),
          { ref: l, index: c } = (0, u.useCompositeListItem)(e),
          a = o === c,
          f = t.useRef(null),
          d = (0, r.useMergedRefs)(l, f);
        return {
          compositeProps: {
            tabIndex: a ? 0 : -1,
            onFocus() {
              s(c);
            },
            onMouseMove() {
              let e = f.current;
              if (!i || !e) return;
              let t = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
              a || t || e.focus();
            },
          },
          compositeRef: d,
          index: c,
        };
      },
    ]);
  },
  25551,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(74725),
      r = e.i(47452);
    let n = r.createContext(void 0);
    e.s([
      "useToolbarRootContext",
      0,
      function (e) {
        let u = r.useContext(n);
        if (void 0 === u && !e) throw Error((0, t.default)(69));
        return u;
      },
    ]);
  },
  4159,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(46746),
      n = e.i(37199),
      u = e.i(75235);
    e.s([
      "useAnchoredPopupScrollLock",
      0,
      function (e, i, o, s) {
        let [l, c] = t.useState(!1);
        ((0, u.useIsoLayoutEffect)(() => {
          if (!e || !i || null == o) return void c(!1);
          let t = (0, r.ownerDocument)(o).documentElement.clientWidth,
            n = o.offsetWidth;
          c(t > 0 && n > 0 && n >= t - 20);
        }, [e, i, o]),
          (0, n.useScrollLock)(e && (!i || l), s));
      },
    ]);
  },
  53094,
  97529,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.i(3308);
    var r = e.i(62038),
      n = e.i(8108),
      u = e.i(64179),
      i = e.i(92032);
    e.s(["ChevronRightIcon", () => i.IconChevronRightMedium], 97529);
    var i = i,
      o = e.i(94814);
    let s = (0, u.cva)("border-x border-black/6", {
        variants: {
          size: {
            md: "px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36",
            sm: "px-6 py-12 sm:px-8 md:px-14 md:py-16 xl:px-66",
          },
        },
        defaultVariants: { size: "md" },
      }),
      l = (0, u.cva)("font-display!", {
        variants: {
          level: {
            1: "text-primary font-semimedium tracking-display md:text-display-md text-4xl leading-10 md:leading-12 xl:text-5xl xl:leading-13",
            2: "text-primary font-semimedium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12",
            3: "text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10",
            4: "text-muted-foreground text-base font-medium sm:text-lg xl:text-xl",
          },
        },
        defaultVariants: { level: 1 },
      }),
      c = (0, u.cva)("text-muted-foreground", {
        variants: {
          size: {
            lg: "text-primary text-base sm:text-lg lg:text-xl",
            md: "text-base xl:text-lg",
            sm: "text-sm xl:text-base",
            xs: "text-xs",
          },
        },
        defaultVariants: { size: "md" },
      });
    e.s(
      [
        "Heading",
        0,
        ({ render: e, level: u = 1, ...i }) => {
          let o = `h${u ?? 1}`,
            s = e ?? (0, t.jsx)(o, {});
          return (0, n.useRender)({
            defaultTagName: "h1",
            props: (0, r.mergeProps)(i, { className: l({ level: u }) }),
            render: s,
            state: { slot: "heading" },
          });
        },
        "Paragraph",
        0,
        ({ children: e, className: r, size: n = "md", ...u }) =>
          (0, t.jsx)("p", { className: (0, o.cn)(c({ size: n }), r), ...u, children: e }),
        "Section",
        0,
        ({ render: e, border: t = !1, ...u }) =>
          (0, n.useRender)({
            defaultTagName: "div",
            props: (0, r.mergeProps)(u, { className: (0, o.cn)("mx-auto w-full", t && "border-b border-black/6") }),
            render: e,
          }),
        "SectionContent",
        0,
        ({ children: e, className: r, size: n = "md", ...u }) =>
          (0, t.jsx)("div", { className: (0, o.cn)(s({ size: n }), r), ...u, children: e }),
        "SectionSpacer",
        0,
        ({ render: e, className: t, ...u }) =>
          (0, n.useRender)({
            defaultTagName: "div",
            props: (0, r.mergeProps)(u, {
              className: (0, o.cn)("mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24", t),
            }),
            render: e,
          }),
      ],
      53094,
    );
  },
]);
