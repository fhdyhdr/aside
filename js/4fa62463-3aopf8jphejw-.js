(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  81912,
  57684,
  73450,
  28835,
  8585,
  31114,
  (e) => {
    "use strict";
    var t,
      n,
      o,
      r,
      i,
      a,
      s,
      l,
      u,
      c,
      d,
      p,
      f,
      C = e.i(21935);
    e.s(
      [
        "BarsThreeIcon",
        0,
        ({ size: e = 24, ariaHidden: t = !0, ...n }) =>
          (0, C.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            "aria-hidden": t,
            focusable: "false",
            ...n,
            children: (0, C.jsx)("path", {
              d: "M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z",
              fill: "currentColor",
            }),
          }),
      ],
      81912,
    );
    var g = e.i(3308),
      m = e.i(28169),
      v = e.i(34242),
      h = e.i(82268);
    (e.s([], 92064), e.i(92064));
    var x = e.i(47452),
      b = e.i(36100),
      y = e.i(74725);
    let S = x.createContext(void 0);
    function R(e = !0) {
      let t = x.useContext(S);
      if (void 0 === t && !e) throw Error((0, y.default)(25));
      return t;
    }
    (e.s([], 34973), e.i(34973));
    let E = x.createContext(void 0);
    function M(e) {
      let t = x.useContext(E);
      if (void 0 === t && !e) throw Error((0, y.default)(33));
      return t;
    }
    let I = x.createContext(void 0);
    function O(e) {
      let t = x.useContext(I);
      if (void 0 === t && !e) throw Error((0, y.default)(36));
      return t;
    }
    var w = e.i(79331),
      T = e.i(32948);
    let N = x.forwardRef(function (e, t) {
      let { render: n, className: o, style: r, ...i } = e,
        { store: a } = O(),
        { arrowRef: s, side: l, align: u, arrowUncentered: c, arrowStyles: d } = M(),
        p = a.useState("open");
      return (0, w.useRenderElement)("div", e, {
        ref: [s, t],
        stateAttributesMapping: T.popupStateMapping,
        state: { open: p, side: l, align: u, uncentered: c },
        props: { style: d, "aria-hidden": !0, ...i },
      });
    });
    var P = e.i(91697);
    let j = x.forwardRef(function (e, t) {
      let { render: n, className: o, style: r, ...i } = e,
        { store: a } = O(),
        s = a.useState("open"),
        l = a.useState("mounted"),
        u = a.useState("transitionStatus"),
        c = a.useState("lastOpenChangeReason"),
        d = R();
      return (0, w.useRenderElement)("div", e, {
        ref: d?.backdropRef ? [t, d.backdropRef] : t,
        state: { open: s, transitionStatus: u },
        stateAttributesMapping: T.popupTransitionStateMapping,
        props: [
          {
            role: "presentation",
            hidden: !l,
            style: {
              pointerEvents: c === P.REASONS.triggerHover ? "none" : void 0,
              userSelect: "none",
              WebkitUserSelect: "none",
            },
          },
          i,
        ],
      });
    });
    var k = e.i(576),
      L = e.i(86228);
    let A = x.createContext(void 0);
    var H = e.i(12084),
      B = e.i(7406),
      D = e.i(62038),
      F = e.i(47035),
      V = e.i(17315);
    function Z(e) {
      let {
          closeOnClick: t,
          highlighted: n,
          id: o,
          nodeId: r,
          store: i,
          typingRef: a,
          itemRef: s,
          itemMetadata: l,
        } = e,
        { events: u } = i.useState("floatingTreeRoot"),
        c = i.useState("open"),
        d = R(!0),
        p = void 0 !== d;
      return x.useMemo(
        () => ({
          id: o,
          role: "menuitem",
          tabIndex: c && n ? 0 : -1,
          onKeyDown(e) {
            " " === e.key && a?.current && e.preventDefault();
          },
          onMouseMove(e) {
            r && u.emit("itemhover", { nodeId: r, target: e.currentTarget });
          },
          onClick(e) {
            t && u.emit("close", { domEvent: e, reason: P.REASONS.itemPress });
          },
          onMouseUp(e) {
            if (d) {
              let t = d.initialCursorPointRef.current;
              if (
                ((d.initialCursorPointRef.current = null),
                (p && t && 1 >= Math.abs(e.clientX - t.x) && 1 >= Math.abs(e.clientY - t.y)) ||
                  (p && !F.platform.os.mac && 2 === e.button))
              )
                return;
            }
            s.current &&
              i.context.allowMouseUpTriggerRef.current &&
              (!p || 2 === e.button) &&
              "regular-item" === l.type &&
              (0, V.dispatchClickWithModifiers)(s.current, e, { detail: 1 });
          },
        }),
        [t, n, o, u, r, c, i, a, s, d, p, l],
      );
    }
    let U = { type: "regular-item" };
    function _(e) {
      let {
          closeOnClick: t,
          disabled: n,
          highlighted: o,
          id: r,
          store: i,
          typingRef: a = i.context.typingRef,
          nativeButton: s,
          itemMetadata: l,
          nodeId: u,
        } = e,
        c = x.useRef(null),
        { getButtonProps: d, buttonRef: p } = (0, B.useButton)({
          disabled: n,
          focusableWhenDisabled: !0,
          native: s,
          composite: !0,
        }),
        f = Z({
          closeOnClick: t,
          highlighted: o,
          id: r,
          nodeId: u,
          store: i,
          typingRef: a,
          itemRef: c,
          itemMetadata: l,
        }),
        C = x.useCallback(
          (e) =>
            (0, D.mergeProps)(
              f,
              {
                onMouseEnter() {
                  "submenu-trigger" === l.type && l.setActive();
                },
              },
              e,
              d,
            ),
          [f, d, l],
        ),
        g = (0, H.useMergedRefs)(c, p);
      return x.useMemo(() => ({ getItemProps: C, itemRef: g }), [C, g]);
    }
    var z = e.i(68716),
      G = e.i(84092);
    let Y = {
      checked: (e) => (e ? { "data-checked": "" } : { "data-unchecked": "" }),
      ...e.i(73117).transitionStatusMapping,
    };
    var K = e.i(38745);
    let W = x.forwardRef(function (e, t) {
      let {
          render: n,
          className: o,
          id: r,
          label: i,
          nativeButton: a = !1,
          disabled: s = !1,
          closeOnClick: l = !1,
          checked: u,
          defaultChecked: c,
          onCheckedChange: d,
          style: p,
          ...f
        } = e,
        g = (0, z.useCompositeListItem)({ guess: !0, label: i }),
        m = M(!0),
        v = (0, G.useBaseUiId)(r),
        { store: h } = O(),
        b = h.useState("disabled"),
        y = s || b,
        S = h.useState("isActive", g.index),
        R = h.useState("itemProps"),
        [E, I] = (0, k.useControlled)({ controlled: u, default: c ?? !1, name: "MenuCheckboxItem", state: "checked" }),
        { getItemProps: T, itemRef: N } = _({
          closeOnClick: l,
          disabled: y,
          highlighted: S,
          id: v,
          store: h,
          nativeButton: a,
          nodeId: m?.context.nodeId,
          itemMetadata: U,
        }),
        j = x.useMemo(() => ({ disabled: y, highlighted: S, checked: E }), [y, S, E]),
        H = (0, w.useRenderElement)("div", e, {
          state: j,
          stateAttributesMapping: Y,
          props: [
            R,
            {
              role: "menuitemcheckbox",
              "aria-checked": E,
              onClick: function (e) {
                let t = (0, K.createChangeEventDetails)(P.REASONS.itemPress, e.nativeEvent, void 0, {
                  preventUnmountOnClose: L.NOOP,
                });
                (d?.(!E, t), t.isCanceled || I((e) => !e));
              },
            },
            f,
            T,
          ],
          ref: [N, t, g.ref],
        });
      return (0, C.jsx)(A.Provider, { value: j, children: H });
    });
    var J = e.i(44228),
      X = e.i(20999);
    let $ = x.forwardRef(function (e, t) {
        let { render: n, className: o, style: r, keepMounted: i = !1, ...a } = e,
          s = (function () {
            let e = x.useContext(A);
            if (void 0 === e) throw Error((0, y.default)(30));
            return e;
          })(),
          l = x.useRef(null),
          { transitionStatus: u, mounted: c, setMounted: d } = (0, J.useTransitionStatus)(s.checked);
        (0, X.useOpenChangeComplete)({
          batch: !0,
          enabled: !s.checked,
          open: s.checked,
          ref: l,
          onComplete() {
            s.checked || d(!1);
          },
        });
        let p = { checked: s.checked, disabled: s.disabled, highlighted: s.highlighted, transitionStatus: u };
        return (0, w.useRenderElement)("span", e, {
          state: p,
          ref: [t, l],
          stateAttributesMapping: Y,
          props: { "aria-hidden": !0, ...a },
          enabled: i || c,
        });
      }),
      q = x.createContext(void 0),
      Q = x.forwardRef(function (e, t) {
        let { render: n, className: o, style: r, ...i } = e,
          [a, s] = x.useState(void 0),
          l = (0, w.useRenderElement)("div", e, { ref: t, props: { role: "group", "aria-labelledby": a, ...i } });
        return (0, C.jsx)(q.Provider, { value: s, children: l });
      });
    var ee = e.i(75235);
    let et = x.forwardRef(function (e, t) {
        let { render: n, className: o, style: r, id: i, ...a } = e,
          s = (0, G.useBaseUiId)(i),
          l = (function () {
            let e = x.useContext(q);
            if (void 0 === e) throw Error((0, y.default)(31));
            return e;
          })();
        return (
          (0, ee.useIsoLayoutEffect)(
            () => (
              l(s),
              () => {
                l((e) => (e === s ? void 0 : e));
              }
            ),
            [l, s],
          ),
          (0, w.useRenderElement)("div", e, { ref: t, props: { id: s, "aria-hidden": !0, ...a } })
        );
      }),
      en = x.forwardRef(function (e, t) {
        let {
            render: n,
            className: o,
            id: r,
            label: i,
            nativeButton: a = !1,
            disabled: s = !1,
            closeOnClick: l = !0,
            style: u,
            ...c
          } = e,
          d = (0, z.useCompositeListItem)({ guess: !0, label: i }),
          p = M(!0),
          f = (0, G.useBaseUiId)(r),
          { store: C } = O(),
          g = C.useState("disabled"),
          m = s || g,
          v = C.useState("isActive", d.index),
          h = C.useState("itemProps"),
          { getItemProps: x, itemRef: b } = _({
            closeOnClick: l,
            disabled: m,
            highlighted: v,
            id: f,
            store: C,
            nativeButton: a,
            nodeId: p?.context.nodeId,
            itemMetadata: U,
          });
        return (0, w.useRenderElement)("div", e, {
          state: { disabled: m, highlighted: v },
          props: [h, c, x],
          ref: [b, t, d.ref],
        });
      }),
      eo = x.forwardRef(function (e, t) {
        let { render: n, className: o, id: r, label: i, closeOnClick: a = !1, style: s, ...l } = e,
          u = x.useRef(null),
          c = (0, z.useCompositeListItem)({ guess: !0, label: i }),
          d = M(!0),
          p = d?.context.nodeId,
          f = (0, G.useBaseUiId)(r),
          { store: C } = O(),
          g = C.useState("isActive", c.index),
          m = C.useState("itemProps"),
          v = C.context.typingRef,
          { getButtonProps: h, buttonRef: b } = (0, B.useButton)({ native: !1, composite: !0 }),
          y = Z({
            closeOnClick: a,
            highlighted: g,
            id: f,
            nodeId: p,
            store: C,
            typingRef: v,
            itemRef: u,
            itemMetadata: U,
          });
        return (0, w.useRenderElement)("a", e, {
          state: { highlighted: g },
          props: [
            m,
            l,
            function (e) {
              return (0, D.mergeProps)(y, e, h);
            },
          ],
          ref: [u, b, t, c.ref],
        });
      });
    var er = e.i(47223),
      ei = e.i(50616),
      ea = e.i(25551),
      es = e.i(40648),
      el = e.i(2544);
    let eu = x.forwardRef(function (e, t) {
      let { render: n, className: o, style: r, finalFocus: i, ...a } = e,
        { store: s } = O(),
        { side: l, align: u } = M(),
        c = null != (0, ea.useToolbarRootContext)(!0),
        d = s.useState("open"),
        p = s.useState("transitionStatus"),
        f = s.useState("popupProps"),
        g = s.useState("mounted"),
        m = s.useState("instantType"),
        v = s.useState("activeTriggerElement"),
        h = s.useState("parent"),
        b = s.useState("lastOpenChangeReason"),
        y = s.useState("rootId"),
        S = s.useState("floatingRootContext"),
        R = s.useState("floatingTreeRoot"),
        E = s.useState("closeDelay"),
        I = s.useState("hoverEnabled"),
        N = s.useState("disabled"),
        j = s.useState("openMethod"),
        k = "context-menu" === h.type;
      ((0, X.useOpenChangeComplete)({
        open: d,
        ref: s.context.popupRef,
        onComplete() {
          d && s.context.onOpenChangeComplete?.(!0);
        },
      }),
        x.useEffect(() => {
          function e(e) {
            s.setOpen(!1, (0, K.createChangeEventDetails)(e.reason, e.domEvent));
          }
          return (
            R.events.on("close", e),
            () => {
              R.events.off("close", e);
            }
          );
        }, [R.events, s]),
        (0, ei.useHoverFloatingInteraction)(S, { enabled: I && !N && !k && "menubar" !== h.type, closeDelay: E }));
      let L = s.useStateSetter("popupElement"),
        A = { transitionStatus: p, side: l, align: u, open: d, nested: "menu" === h.type, instant: m },
        H = (0, w.useRenderElement)("div", e, {
          state: A,
          ref: [t, s.context.popupRef, L],
          stateAttributesMapping: T.popupTransitionStateMapping,
          props: [
            f,
            {
              onKeyDown(e) {
                c && es.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
              },
            },
            (0, el.getDisabledMountTransitionStyles)(p),
            a,
            { "data-rootownerid": y },
          ],
        }),
        B = void 0 === h.type || k;
      return (
        (v || ("menubar" === h.type && b !== P.REASONS.outsidePress)) && (B = !0),
        (0, C.jsx)(er.FloatingFocusManager, {
          context: S,
          openInteractionType: j,
          modal: k,
          disabled: !g,
          returnFocus: void 0 === i ? B : i,
          initialFocus: "menu" !== h.type,
          restoreFocus: !0,
          externalTree: "menubar" !== h.type ? R : void 0,
          previousFocusableElement: v,
          nextFocusableElement: void 0 === h.type ? s.context.triggerFocusTargetRef : void 0,
          beforeContentFocusGuardRef: void 0 === h.type ? s.context.beforeContentFocusGuardRef : void 0,
          children: H,
        })
      );
    });
    var ec = e.i(53619);
    let ed = x.createContext(void 0),
      ep = x.forwardRef(function (e, t) {
        let { keepMounted: n = !1, ...o } = e,
          { store: r, parent: i } = O();
        if (!(r.useState("mounted") || n)) return null;
        let a = "menu" === i.type || "menubar" === i.type ? "group" : void 0;
        return (0, C.jsx)(ed.Provider, {
          value: n,
          children: (0, C.jsx)(ec.FloatingPortal, { ref: t, ...o, portalOwnerRole: a }),
        });
      });
    var ef = e.i(77081),
      eC = e.i(64032),
      eg = e.i(42701),
      em = e.i(76807),
      ev = e.i(45329),
      eh = e.i(78467),
      ex = e.i(86586),
      eb = e.i(94430),
      ey = e.i(12168),
      eS = e.i(4159);
    let eR = x.forwardRef(function (e, t) {
      let {
          anchor: n,
          positionMethod: o = "absolute",
          className: r,
          render: i,
          side: a,
          align: s,
          sideOffset: l = 0,
          alignOffset: u = 0,
          collisionBoundary: c = "clipping-ancestors",
          collisionPadding: d = 5,
          arrowPadding: p = 5,
          sticky: f = !1,
          disableAnchorTracking: g = !1,
          collisionAvoidance: m = ex.DROPDOWN_COLLISION_AVOIDANCE,
          style: v,
          ...h
        } = e,
        { store: b } = O(),
        S = (function () {
          let e = x.useContext(ed);
          if (void 0 === e) throw Error((0, y.default)(32));
          return e;
        })(),
        M = R(!0),
        I = b.useState("parent"),
        w = b.useState("floatingRootContext"),
        T = b.useState("floatingTreeRoot"),
        N = b.useState("mounted"),
        j = b.useState("open"),
        k = b.useState("modal"),
        L = b.useState("openMethod"),
        A = b.useState("activeTriggerElement"),
        H = b.useState("transitionStatus"),
        B = b.useState("positionerElement"),
        D = b.useState("instantType"),
        F = b.useState("adaptiveOrigin"),
        V = b.useState("lastOpenChangeReason"),
        Z = b.useState("floatingNodeId"),
        U = b.useState("floatingParentNodeId"),
        _ = w.useState("domReferenceElement"),
        z = x.useRef(null),
        G = (0, eb.useAnimationsFinished)(B),
        Y = n,
        W = l,
        J = u,
        X = s,
        $ = m;
      "context-menu" === I.type &&
        ((Y = n ?? I.context?.anchor),
        (X = X ?? "start"),
        a || "center" === X || ((J = e.alignOffset ?? 2), (W = e.sideOffset ?? -5)));
      let q = a,
        Q = X;
      "menu" === I.type
        ? ((q = q ?? "inline-end"), (Q = Q ?? "start"), ($ = e.collisionAvoidance ?? ex.POPUP_COLLISION_AVOIDANCE))
        : "menubar" === I.type &&
          ((q = q ?? ("vertical" === I.context.orientation ? "inline-end" : "bottom")), (Q = Q ?? "start"));
      let et = "context-menu" === I.type,
        en = (0, em.useAnchorPositioning)({
          anchor: Y,
          floatingRootContext: w,
          positionMethod: M ? "fixed" : o,
          mounted: N,
          side: q,
          sideOffset: W,
          align: Q,
          alignOffset: J,
          arrowPadding: et ? 0 : p,
          collisionBoundary: c,
          collisionPadding: d,
          sticky: f,
          nodeId: Z,
          keepMounted: S,
          disableAnchorTracking: g,
          collisionAvoidance: $,
          shift: et ? { crossAxis: !("side" in $ && "flip" === $.side), rootBoundary: "layoutViewport" } : void 0,
          externalTree: T,
          adaptiveOrigin: F,
        });
      (x.useEffect(() => {
        function e(e) {
          e.open &&
            (e.parentNodeId === Z && b.set("hoverEnabled", !1),
            e.nodeId !== Z &&
              e.parentNodeId === b.select("floatingParentNodeId") &&
              b.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.siblingOpen)));
        }
        return (
          T.events.on("menuopenchange", e),
          () => {
            T.events.off("menuopenchange", e);
          }
        );
      }, [b, T.events, Z]),
        x.useEffect(() => {
          if (null != b.select("floatingParentNodeId"))
            return (
              T.events.on("menuopenchange", e),
              () => {
                T.events.off("menuopenchange", e);
              }
            );
          function e(e) {
            if (e.open || e.nodeId !== b.select("floatingParentNodeId")) return;
            let t = e.reason ?? P.REASONS.siblingOpen;
            b.setOpen(!1, (0, K.createChangeEventDetails)(t));
          }
        }, [T.events, b]));
      let eo = (0, eC.useTimeout)();
      (x.useEffect(() => {
        j || eo.clear();
      }, [j, eo]),
        x.useEffect(() => {
          function e(e) {
            if (j && e.nodeId === b.select("floatingParentNodeId"))
              if (e.target && A && A !== e.target) {
                let e = b.select("closeDelay");
                e > 0
                  ? eo.isStarted() ||
                    eo.start(e, () => {
                      b.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.siblingOpen));
                    })
                  : b.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.siblingOpen));
              } else eo.clear();
          }
          return (
            T.events.on("itemhover", e),
            () => {
              T.events.off("itemhover", e);
            }
          );
        }, [T.events, j, A, b, eo]),
        x.useEffect(() => {
          let e = { open: j, nodeId: Z, parentNodeId: U, reason: b.select("lastOpenChangeReason") };
          T.events.emit("menuopenchange", e);
        }, [T.events, j, b, Z, U]),
        (0, ee.useIsoLayoutEffect)(() => {
          let e = z.current;
          if ((_ && (z.current = _), e && _ && _ !== e)) {
            b.set("instantType", void 0);
            let e = new AbortController();
            return (
              G(() => {
                b.set("instantType", "trigger-change");
              }, e.signal),
              () => {
                e.abort();
              }
            );
          }
        }, [_, G, b]));
      let er = {
          open: j,
          side: en.side,
          align: en.align,
          anchorHidden: en.anchorHidden,
          nested: "menu" === I.type,
          instant: D,
        },
        ei = "menubar" === I.type && I.context.modal,
        ea = k && V !== P.REASONS.triggerHover;
      (0, eS.useAnchoredPopupScrollLock)(j && (ei || ea), "touch" === L, B, A);
      let es = (0, ey.usePositioner)(e, er, {
          styles: en.positionerStyles,
          transitionStatus: H,
          props: h,
          refs: [t, b.useStateSetter("positionerElement")],
          hidden: !N,
          inert: !j,
        }),
        el =
          N &&
          "menu" !== I.type &&
          (("menubar" !== I.type && k && V !== P.REASONS.triggerHover) || ("menubar" === I.type && I.context.modal)),
        eu = null;
      return (
        "menubar" === I.type ? (eu = I.context.contentElement) : void 0 === I.type && (eu = A),
        (0, C.jsxs)(E.Provider, {
          value: en,
          children: [
            el &&
              (0, C.jsx)(eh.InternalBackdrop, {
                ref:
                  "context-menu" === I.type || "nested-context-menu" === I.type ? I.context.internalBackdropRef : null,
                inert: (0, ef.inertValue)(!j),
                cutout: eu,
              }),
            (0, C.jsx)(eg.FloatingNode, {
              id: Z,
              children: (0, C.jsx)(ev.CompositeList, {
                elementsRef: b.context.itemDomElements,
                labelsRef: b.context.itemLabels,
                children: es,
              }),
            }),
          ],
        })
      );
    });
    var eE = e.i(56232);
    let eM = x.createContext(void 0),
      eI = x.memo(
        x.forwardRef(function (e, t) {
          let {
              render: n,
              className: o,
              value: r,
              defaultValue: i,
              onValueChange: a,
              disabled: s = !1,
              style: l,
              "aria-labelledby": u,
              ...c
            } = e,
            [d, p] = x.useState(void 0),
            [f, g] = (0, k.useControlled)({ controlled: r, default: i, name: "MenuRadioGroup" }),
            m = (0, eE.useStableCallback)((e, t) => {
              (a?.(e, t), t.isCanceled || g(e));
            }),
            v = (0, w.useRenderElement)("div", e, {
              state: { disabled: s },
              ref: t,
              props: { role: "group", "aria-labelledby": u ?? d, "aria-disabled": s || void 0, ...c },
            }),
            h = x.useMemo(() => ({ value: f, setValue: m, disabled: s }), [f, m, s]);
          return (0, C.jsx)(q.Provider, { value: p, children: (0, C.jsx)(eM.Provider, { value: h, children: v }) });
        }),
      ),
      eO = x.createContext(void 0),
      ew = x.forwardRef(function (e, t) {
        let {
            render: n,
            className: o,
            id: r,
            label: i,
            nativeButton: a = !1,
            disabled: s = !1,
            closeOnClick: l = !1,
            value: u,
            style: c,
            ...d
          } = e,
          p = (0, z.useCompositeListItem)({ guess: !0, label: i }),
          f = M(!0),
          g = (0, G.useBaseUiId)(r),
          { store: m } = O(),
          v = m.useState("isActive", p.index),
          h = m.useState("itemProps"),
          {
            value: b,
            setValue: S,
            disabled: R,
          } = (function () {
            let e = x.useContext(eM);
            if (void 0 === e) throw Error((0, y.default)(34));
            return e;
          })(),
          E = m.useState("disabled"),
          I = s || R || E,
          T = b === u,
          { getItemProps: N, itemRef: j } = _({
            closeOnClick: l,
            disabled: I,
            highlighted: v,
            id: g,
            store: m,
            nativeButton: a,
            nodeId: f?.context.nodeId,
            itemMetadata: U,
          }),
          k = x.useMemo(() => ({ disabled: I, highlighted: v, checked: T }), [I, v, T]),
          A = (0, w.useRenderElement)("div", e, {
            state: k,
            stateAttributesMapping: Y,
            props: [
              h,
              {
                role: "menuitemradio",
                "aria-checked": T,
                onClick: function (e) {
                  S(
                    u,
                    (0, K.createChangeEventDetails)(P.REASONS.itemPress, e.nativeEvent, void 0, {
                      preventUnmountOnClose: L.NOOP,
                    }),
                  );
                },
              },
              d,
              N,
            ],
            ref: [j, t, p.ref],
          });
        return (0, C.jsx)(eO.Provider, { value: k, children: A });
      }),
      eT = x.forwardRef(function (e, t) {
        let { render: n, className: o, style: r, keepMounted: i = !1, ...a } = e,
          s = (function () {
            let e = x.useContext(eO);
            if (void 0 === e) throw Error((0, y.default)(35));
            return e;
          })(),
          l = x.useRef(null),
          { transitionStatus: u, mounted: c, setMounted: d } = (0, J.useTransitionStatus)(s.checked);
        (0, X.useOpenChangeComplete)({
          batch: !0,
          enabled: !s.checked,
          open: s.checked,
          ref: l,
          onComplete() {
            s.checked || d(!1);
          },
        });
        let p = { checked: s.checked, disabled: s.disabled, highlighted: s.highlighted, transitionStatus: u };
        return (0, w.useRenderElement)("span", e, {
          state: p,
          stateAttributesMapping: Y,
          ref: [t, l],
          props: { "aria-hidden": !0, ...a },
          enabled: i || c,
        });
      });
    var eN = e.i(55399),
      eP = e.i(43419),
      ej = e.i(29809),
      ek = e.i(15894),
      eL = e.i(95924),
      eA = e.i(15882);
    let eH = x.createContext(null);
    function eB(e) {
      let t = x.useContext(eH);
      if (null === t && !e) throw Error((0, y.default)(5));
      return t;
    }
    var eD = e.i(98624),
      eF = e.i(41598),
      eV = e.i(22908),
      eZ = e.i(44981),
      eU = e.i(50163),
      e_ = e.i(36713),
      ez = e.i(10854);
    let eG = {
      ...e_.popupStoreSelectors,
      disabled: (e) => ("menubar" === e.parent.type && e.parent.context.disabled) || e.disabled,
      modal: (e) => (void 0 === e.parent.type || "context-menu" === e.parent.type) && (e.modal ?? !0),
      openMethod: (e) => e.openMethod,
      allowMouseEnter: (e) => e.allowMouseEnter,
      highlightItemOnHover: (e) => e.highlightItemOnHover,
      parent: (e) => e.parent,
      rootId: (e) =>
        "menu" === e.parent.type
          ? e.parent.store.select("rootId")
          : void 0 !== e.parent.type
            ? e.parent.context.rootId
            : e.rootId,
      activeIndex: (e) => e.activeIndex,
      isActive: (e, t) => e.activeIndex === t,
      hoverEnabled: (e) => e.hoverEnabled,
      instantType: (e) => e.instantType,
      lastOpenChangeReason: (e) => e.openChangeReason,
      floatingTreeRoot: (e) =>
        "menu" === e.parent.type ? e.parent.store.select("floatingTreeRoot") : e.floatingTreeRoot,
      floatingNodeId: (e) => e.floatingNodeId,
      floatingParentNodeId: (e) => e.floatingParentNodeId,
      itemProps: (e) => e.itemProps,
      closeDelay: (e) => e.closeDelay,
      adaptiveOrigin: (e) => e.adaptiveOrigin,
      keyboardEventRelay: (e) =>
        e.keyboardEventRelay
          ? e.keyboardEventRelay
          : "menu" === e.parent.type
            ? e.parent.store.select("keyboardEventRelay")
            : void 0,
    };
    class eY extends eV.ReactStore {
      constructor(e, t, n = !1) {
        const o = new ez.PopupTriggerMap();
        (super(eW(o, t, n, e), eK(o), eG),
          (this.unsubscribeParentListener = this.observe("parent", (e) => {
            if ((this.unsubscribeParentListener?.(), "menu" === e.type)) {
              let t = e.store.select("rootId"),
                n = e.store.select("floatingTreeRoot"),
                o = e.store.select("keyboardEventRelay");
              ((this.unsubscribeParentListener = e.store.subscribe(() => {
                let r = e.store.select("rootId"),
                  i = e.store.select("floatingTreeRoot"),
                  a = e.store.select("keyboardEventRelay");
                (t !== r || n !== i || o !== a) && ((t = r), (n = i), (o = a), this.notifyAll());
              })),
                (this.context.allowMouseUpTriggerRef = e.store.context.allowMouseUpTriggerRef));
              return;
            }
            (void 0 !== e.type && (this.context.allowMouseUpTriggerRef = e.context.allowMouseUpTriggerRef),
              (this.unsubscribeParentListener = null));
          })));
      }
      setOpen(e, t) {
        this.state.floatingRootContext.context.events.emit("setOpen", { open: e, eventDetails: t });
      }
      unsubscribeParentListener = null;
    }
    function eK(e) {
      return {
        positionerRef: x.createRef(),
        popupRef: x.createRef(),
        typingRef: { current: !1 },
        itemDomElements: { current: [] },
        itemLabels: { current: [] },
        allowMouseUpTriggerRef: { current: !1 },
        triggerFocusTargetRef: x.createRef(),
        beforeContentFocusGuardRef: x.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: e,
      };
    }
    function eW(e, t, n = !1, o) {
      return {
        ...(0, e_.createInitialPopupStoreState)(e, t, n),
        disabled: !1,
        modal: !0,
        openMethod: null,
        allowMouseEnter: !1,
        highlightItemOnHover: !0,
        parent: { type: void 0 },
        rootId: void 0,
        activeIndex: null,
        hoverEnabled: !0,
        instantType: void 0,
        openChangeReason: null,
        floatingTreeRoot: new eZ.FloatingTreeStore(),
        floatingNodeId: void 0,
        floatingParentNodeId: null,
        itemProps: L.EMPTY_OBJECT,
        keyboardEventRelay: void 0,
        closeDelay: 0,
        adaptiveOrigin: void 0,
        ...o,
      };
    }
    var eJ = e.i(65527);
    let eX = x.createContext(void 0);
    function e$() {
      return x.useContext(eX);
    }
    let eq = (0, eP.fastComponent)(function (e) {
      var t, n, o;
      let r,
        {
          children: i,
          open: a,
          onOpenChange: s,
          onOpenChangeComplete: l,
          defaultOpen: u = !1,
          disabled: c = !1,
          modal: d,
          loopFocus: p = !0,
          orientation: f = "vertical",
          actionsRef: g,
          closeParentOnEsc: m = !1,
          handle: v,
          triggerId: h,
          defaultTriggerId: y = null,
          highlightItemOnHover: S = !0,
        } = e,
        E = R(!0),
        M = O(!0),
        w = eB(!0),
        T = e$(),
        N = x.useMemo(
          () =>
            T && M
              ? { type: "menu", store: M.store }
              : w
                ? { type: "menubar", context: w }
                : E && !M
                  ? { type: "context-menu", context: E }
                  : { type: void 0 },
          [E, M, w, T],
        ),
        j = (0, b.useId)(),
        k = (0, b.useId)(),
        A = (0, eg.useFloatingParentNodeId)(),
        H = "menu" === N.type ? N.store : void 0,
        B = (a ?? u) && H?.state.transitionStatus === "starting",
        F = (0, eN.useRefWithInit)(() => (B ? H?.state.instantType : void 0)).current,
        V =
          ((t = {
            open: u,
            openProp: a,
            activeTriggerId: y,
            triggerIdProp: h,
            parent: N,
            disabled: c,
            highlightItemOnHover: S,
            modal: void 0 === N.type ? d : void 0,
            rootId: j,
            instantType: F,
          }),
          (n = k),
          (o = null != A),
          (0, eN.useRefWithInit)(() => new eY(t, n, o)).current);
      (V.useControlledProp("openProp", a),
        V.useControlledProp("triggerIdProp", h),
        V.useContextCallback("onOpenChangeComplete", l));
      let Z = V.useState("floatingTreeRoot"),
        U = (0, eg.useFloatingNodeId)(Z),
        _ = V.useState("open"),
        z = V.useState("activeTriggerElement"),
        G = V.useState("positionerElement"),
        Y = V.useState("hoverEnabled"),
        W = V.useState("disabled"),
        J = V.useState("lastOpenChangeReason"),
        X = V.useState("parent"),
        $ = V.useState("activeIndex"),
        q = V.useState("payload"),
        Q = V.useState("floatingParentNodeId"),
        et = x.useRef(null),
        en = x.useRef("context-menu" !== X.type),
        eo = (0, eC.useTimeout)(),
        er = x.useRef(!0),
        ei = (0, eC.useTimeout)(),
        ea = null != Q,
        { openMethod: es, triggerProps: el } = (0, eF.useOpenInteractionType)(_);
      (V.useSyncedValues({
        disabled: c,
        highlightItemOnHover: S,
        modal: void 0 === X.type ? d : void 0,
        openMethod: es,
        rootId: j,
      }),
        (0, eJ.useImplicitActiveTrigger)(V));
      let { forceUnmount: eu, transitionStatus: ec } = (0, eJ.useOpenStateTransitions)(
          _,
          V,
          () => {
            V.set("allowMouseEnter", !1);
          },
          B,
        ),
        ed = (0, eb.useAnimationsFinished)(V.context.popupRef);
      (x.useEffect(() => {
        if (void 0 === F) return;
        let e = () => {
          V.state.instantType === F && V.set("instantType", void 0);
        };
        if (!_) return void e();
        if (void 0 !== ec) return;
        if (null == V.context.popupRef.current) return void e();
        let t = new AbortController();
        return (
          ed(e, t.signal),
          () => {
            t.abort();
          }
        );
      }, [F, _, ec, ed, V]),
        (0, ee.useIsoLayoutEffect)(() => {
          E && !M
            ? V.update({ parent: { type: "context-menu", context: E }, floatingNodeId: U, floatingParentNodeId: A })
            : M && V.update({ floatingNodeId: U, floatingParentNodeId: A });
        }, [E, M, U, A, V]),
        x.useEffect(() => {
          if ((_ || (et.current = null), "context-menu" === X.type)) {
            if (!_) {
              (eo.clear(), (en.current = !1));
              return;
            }
            eo.start(500, () => {
              en.current = !0;
            });
          }
        }, [eo, _, X.type]),
        (0, ee.useIsoLayoutEffect)(() => {
          _ || Y || V.set("hoverEnabled", !0);
        }, [_, Y, V]));
      let ep = (0, eE.useStableCallback)((e, t) => {
          let n = t.reason;
          if ((!e && !V.select("open")) || (_ === e && t.trigger === z && J === n)) return;
          let o = (0, eJ.attachPreventUnmountOnClose)(t);
          if ((e || null != t.trigger || (t.trigger = z ?? void 0), s?.(e, t), t.isCanceled)) return;
          V.state.floatingRootContext.dispatchOpenChange(e, t);
          let r = t.event;
          if (!1 === e && r?.type === "click" && "touch" === r.pointerType && !er.current) return;
          e && n === P.REASONS.triggerFocus
            ? ((er.current = !1),
              ei.start(300, () => {
                er.current = !0;
              }))
            : ((er.current = !0), ei.clear());
          let i = (n === P.REASONS.triggerPress || n === P.REASONS.itemPress) && 0 === r.detail,
            a = !e && (n === P.REASONS.escapeKey || null == n);
          et.current = t.event;
          let l = (0, eJ.createPopupOpenState)(V.state, e, t.trigger, o());
          ((l.openChangeReason = n),
            "menubar" === X.type &&
            (n === P.REASONS.triggerFocus ||
              n === P.REASONS.focusOut ||
              n === P.REASONS.triggerHover ||
              n === P.REASONS.listNavigation ||
              n === P.REASONS.siblingOpen)
              ? (l.instantType = "group")
              : i || a
                ? (l.instantType = i ? "click" : "dismiss")
                : (l.instantType = void 0),
            V.update(l));
        }),
        ef = (0, eA.useSyncedFloatingRootContext)({
          popupStore: V,
          floatingRootContext: V.state.floatingRootContext,
          floatingId: k,
          nested: null != A,
          onOpenChange: ep,
        }),
        em = ef.context.events;
      (0, ee.useIsoLayoutEffect)(() => {
        let e = ({ open: e, eventDetails: t }) => ep(e, t);
        return (
          em.on("setOpen", e),
          () => {
            em?.off("setOpen", e);
          }
        );
      }, [em, ep]);
      let ev = x.useCallback(() => {
        V.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.imperativeAction));
      }, [V]);
      (x.useImperativeHandle(g, () => ({ unmount: eu, close: ev }), [eu, ev]),
        "context-menu" === X.type && (r = X.context),
        x.useImperativeHandle(r?.positionerRef, () => G, [G]),
        x.useImperativeHandle(r?.actionsRef, () => ({ setOpen: ep }), [ep]));
      let eh = (0, ej.useDismiss)(ef, {
          enabled: !W,
          bubbles: { escapeKey: m && "menu" === X.type },
          outsidePress: () => "context-menu" !== X.type || et.current?.type === "contextmenu" || en.current,
          externalTree: ea ? Z : void 0,
        }),
        ey = (0, eD.useDirection)(),
        eS = x.useCallback(
          (e) => {
            V.select("activeIndex") !== e && V.set("activeIndex", e);
          },
          [V],
        ),
        eR = (0, ek.useListNavigation)(ef, {
          enabled: !W,
          listRef: V.context.itemDomElements,
          activeIndex: $,
          nested: void 0 !== X.type,
          loopFocus: p,
          orientation: f,
          parentOrientation: "menubar" === X.type ? X.context.orientation : void 0,
          rtl: "rtl" === ey,
          disabledIndices: L.EMPTY_ARRAY,
          onNavigate: eS,
          openOnArrowKeyDown: "context-menu" !== X.type,
          externalTree: ea ? Z : void 0,
          focusItemOnHover: S,
        }),
        eM = x.useCallback(
          (e) => {
            V.context.typingRef.current = e;
          },
          [V],
        ),
        eI = (0, eL.useTypeahead)(ef, {
          enabled: !W,
          listRef: V.context.itemLabels,
          elementsRef: V.context.itemDomElements,
          activeIndex: $,
          resetMs: ex.TYPEAHEAD_RESET_MS,
          onMatch: (e) => {
            _ && e !== $ && V.set("activeIndex", e);
          },
          onTyping: eM,
        }),
        eO = x.useMemo(() => {
          let e = (0, D.mergeProps)(
            eI.reference,
            eR.reference,
            eh.reference,
            {
              onMouseMove() {
                V.set("allowMouseEnter", !0);
              },
            },
            el,
          );
          return ((e["aria-haspopup"] = "menu"), (e["aria-expanded"] = _), e);
        }, [V, eI.reference, eR.reference, eh.reference, el, _]),
        ew = x.useMemo(() => {
          let e = (0, D.mergeProps)(eR.trigger, eh.trigger, el);
          return ((e["aria-haspopup"] = "menu"), (e["aria-expanded"] = !1), e);
        }, [eR.trigger, eh.trigger, el]);
      (0, eN.useRefWithInit)(() => (V.update({ inactiveTriggerProps: ew }), null));
      let eT = x.useMemo(
          () =>
            (0, D.mergeProps)(
              eJ.FOCUSABLE_POPUP_PROPS,
              {
                id: k,
                role: "menu",
                "aria-orientation": "horizontal" === f ? "horizontal" : void 0,
                "aria-labelledby": z?.id,
                onMouseMove() {
                  (V.set("allowMouseEnter", !0), "menu" === X.type && V.set("hoverEnabled", !1));
                },
                onClick() {
                  V.select("hoverEnabled") && V.set("hoverEnabled", !1);
                },
                onKeyDown(e) {
                  let t = V.select("keyboardEventRelay");
                  t && !e.isPropagationStopped() && t(e);
                },
              },
              eI.floating,
              eR.floating,
              eh.floating,
            ),
          [z, k, f, X.type, V, eI.floating, eR.floating, eh.floating],
        ),
        eP = eR.item ?? L.EMPTY_OBJECT;
      (0, eJ.usePopupInteractionProps)(V, {
        floatingRootContext: ef,
        activeTriggerProps: eO,
        inactiveTriggerProps: ew,
        popupProps: eT,
        itemProps: eP,
      });
      let eH = x.useMemo(() => ({ store: V, parent: N }), [V, N]),
        eV = (0, C.jsxs)(I.Provider, {
          value: eH,
          children: [
            v && (0, C.jsx)(eJ.PopupHandleAttachment, { handle: v, store: V }),
            "function" == typeof i ? i({ payload: q }) : i,
          ],
        });
      return void 0 === X.type || "context-menu" === X.type
        ? (0, C.jsx)(eg.FloatingTree, { externalTree: Z, children: eV })
        : eV;
    });
    function eQ(e) {
      let t = O().store,
        n = x.useMemo(() => ({ parentMenu: t }), [t]);
      return (0, C.jsx)(eX.Provider, { value: n, children: (0, C.jsx)(eq, { ...e }) });
    }
    var e2 = e.i(46746),
      e1 = e.i(32683),
      e0 = e.i(91730),
      e5 = e.i(82063),
      e6 = e.i(77490),
      e3 = e.i(80841),
      e4 = e.i(10591),
      e8 = e.i(56222);
    function e7(e) {
      let {
          render: t,
          className: n,
          style: o,
          state: r = L.EMPTY_OBJECT,
          props: i = L.EMPTY_ARRAY,
          refs: a = L.EMPTY_ARRAY,
          metadata: s,
          stateAttributesMapping: l,
          tag: u = "div",
          ...c
        } = e,
        { compositeProps: d, compositeRef: p } = (0, e8.useCompositeItem)({ metadata: s });
      return (0, w.useRenderElement)(u, e, {
        state: r,
        ref: [p, ...a],
        props: [d, ...i, c],
        stateAttributesMapping: l,
      });
    }
    var e9 = e.i(40377),
      te = e.i(65079);
    function tt(e) {
      return (0, te.isHTMLElement)(e) && e.hasAttribute("data-rootownerid")
        ? e.getAttribute("data-rootownerid")
        : (0, te.isLastTraversableNode)(e)
          ? void 0
          : tt((0, te.getParentNode)(e));
    }
    var tn = e.i(61739),
      to = e.i(29066),
      tr = e.i(4845),
      ti = e.i(70487);
    let ta = (0, eP.fastComponentRef)(function (e, t) {
      let n,
        o,
        {
          render: r,
          className: i,
          style: a,
          disabled: s = !1,
          nativeButton: l = !0,
          id: u,
          openOnHover: c,
          delay: d = 100,
          closeDelay: p = 0,
          handle: f,
          payload: g,
          ...m
        } = e,
        v = O(!0),
        h = (0, tn.usePopupHandleStore)(f) ?? v?.store;
      if (!h) throw Error((0, y.default)(85));
      let b = (0, G.useBaseUiId)(u),
        S = h.useState("isTriggerActive", b),
        R = h.useState("floatingRootContext"),
        E = h.useState("isOpenedByTrigger", b),
        M = h.useState("triggerPopupId", b),
        I = x.useRef(null),
        N = ((n = eB(!0)), x.useMemo(() => (n ? { type: "menubar", context: n } : { type: void 0 }), [n])),
        j = (0, e9.useCompositeRootContext)(!0),
        k = (0, eg.useFloatingTree)(),
        A = x.useMemo(() => k ?? new eZ.FloatingTreeStore(), [k]),
        H = (0, eg.useFloatingNodeId)(A),
        F = (0, eg.useFloatingParentNodeId)(),
        { registerTrigger: V, isMountedByThisTrigger: Z } = (0, eJ.useTriggerDataForwarding)(b, I, h, {
          payload: g,
          closeDelay: p,
          parent: N,
          floatingTreeRoot: A,
          floatingNodeId: H,
          floatingParentNodeId: F,
          keyboardEventRelay: j?.relayKeyboardEvent,
        }),
        U = "menubar" === N.type,
        _ = h.useState("disabled"),
        z = s || _ || (U && N.context.disabled),
        { getButtonProps: Y, buttonRef: W } = (0, B.useButton)({ disabled: z, native: l });
      x.useEffect(() => {
        E || void 0 !== N.type || (h.context.allowMouseUpTriggerRef.current = !1);
      }, [h, E, N.type]);
      let J = x.useRef(null),
        X = (0, eC.useTimeout)(),
        $ = (0, eE.useStableCallback)((e) => {
          if (!J.current) return;
          (X.clear(), (h.context.allowMouseUpTriggerRef.current = !1));
          let t = e.target;
          (0, e3.contains)(J.current, t) ||
            (0, e3.contains)(h.select("positionerElement"), t) ||
            t === J.current ||
            (null != t && tt(t) === h.select("rootId")) ||
            (0, e4.isMouseWithinBounds)(e, J.current) ||
            A.events.emit("close", { domEvent: e, reason: P.REASONS.cancelOpen });
        });
      x.useEffect(() => {
        E &&
          h.select("lastOpenChangeReason") === P.REASONS.triggerHover &&
          (0, e2.ownerDocument)(J.current).addEventListener("mouseup", $, { once: !0 });
      }, [E, $, h]);
      let q = U && N.context.hasSubmenuOpen,
        Q = c ?? q,
        et = (0, e6.useHoverReferenceInteraction)(R, {
          enabled: Q && !z && (!U || (q && !Z)),
          handleClose: (0, e1.safePolygon)({ blockPointerEvents: !U }),
          mouseOnly: !0,
          move: !1,
          restMs: void 0 === N.type ? d : void 0,
          delay: { close: p },
          triggerElementRef: I,
          externalTree: A,
          isActiveTrigger: S,
          isClosing: () => "ending" === h.select("transitionStatus"),
        }),
        en = (function (e, t) {
          let n = (0, eC.useTimeout)(),
            [o, r] = x.useState(!1);
          return (
            (0, ee.useIsoLayoutEffect)(() => {
              e && t === P.REASONS.triggerHover
                ? (r(!0),
                  n.start(ex.PATIENT_CLICK_THRESHOLD, () => {
                    r(!1);
                  }))
                : e || (n.clear(), r(!1));
            }, [e, t, n]),
            o
          );
        })(E, h.select("lastOpenChangeReason")),
        eo = (0, e0.useClick)(R, {
          enabled: !z,
          event: E && U ? "click" : "mousedown",
          toggle: !0,
          ignoreMouse: !1,
          stickIfOpen: void 0 === N.type && en,
        }),
        er = (0, e5.useFocus)(R, { enabled: !z && q }),
        ei = (function (e) {
          let { enabled: t = !0, mouseDownAction: n, open: o } = e,
            r = x.useRef(!1);
          return x.useMemo(
            () =>
              t
                ? {
                    onMouseDown: (e) => {
                      (("open" === n && !o) || ("close" === n && o)) &&
                        ((r.current = !0),
                        (0, e2.ownerDocument)(e.currentTarget).addEventListener(
                          "click",
                          () => {
                            r.current = !1;
                          },
                          { once: !0 },
                        ));
                    },
                    onClick: (e) => {
                      r.current && ((r.current = !1), e.preventBaseUIHandler());
                    },
                  }
                : L.EMPTY_OBJECT,
            [t, n, o],
          );
        })({ open: E, enabled: U, mouseDownAction: "open" }),
        ea = x.useMemo(() => (0, D.mergeProps)(er.reference, eo.reference), [er.reference, eo.reference]),
        es = h.useState("triggerProps", Z),
        {
          preFocusGuardRef: el,
          handlePreFocusGuardFocus: eu,
          handleFocusTargetFocus: ec,
        } = {
          preFocusGuardRef: (o = x.useRef(null)),
          handlePreFocusGuardFocus: function (e) {
            to.flushSync(() => {
              h.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.focusOut, e.nativeEvent, e.currentTarget));
            });
            let t = (0, tr.getTabbableBeforeElement)(o.current);
            t?.focus();
          },
          handleFocusTargetFocus: function (e) {
            let t = h.select("positionerElement");
            if (t && (0, tr.isOutsideEvent)(e, t)) h.context.beforeContentFocusGuardRef.current?.focus();
            else {
              to.flushSync(() => {
                h.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.focusOut, e.nativeEvent, e.currentTarget));
              });
              let n = (0, tr.getTabbableAfterElement)(h.context.triggerFocusTargetRef.current || I.current);
              for (; null !== n && (0, e3.contains)(t, n);) {
                let e = n;
                if ((n = (0, tr.getNextTabbable)(n)) === e) break;
              }
              n?.focus();
            }
          },
        },
        ed = { disabled: z, open: E },
        ep = [J, t, W, V, I],
        ef = [
          ea,
          et ?? L.EMPTY_OBJECT,
          es,
          {
            "aria-haspopup": "menu",
            "aria-controls": M,
            id: b,
            onMouseDown: (e) => {
              h.select("open") ||
                (X.start(200, () => {
                  h.context.allowMouseUpTriggerRef.current = !0;
                }),
                (0, e2.ownerDocument)(e.currentTarget).addEventListener("mouseup", $, { once: !0 }));
            },
          },
          U ? { role: "menuitem" } : {},
          ei,
          m,
          Y,
        ],
        em = (0, w.useRenderElement)("button", e, {
          enabled: !U,
          stateAttributesMapping: T.pressableTriggerOpenStateMapping,
          state: ed,
          ref: ep,
          props: ef,
        });
      return U
        ? (0, C.jsx)(e7, {
            tag: "button",
            render: r,
            className: i,
            style: a,
            state: ed,
            refs: ep,
            props: ef,
            stateAttributesMapping: T.pressableTriggerOpenStateMapping,
          })
        : E
          ? (0, C.jsxs)(x.Fragment, {
              children: [
                (0, C.jsx)(ti.FocusGuard, { ref: el, onFocus: eu }, `${b}-pre-focus-guard`),
                (0, C.jsx)(x.Fragment, { children: em }, b),
                (0, C.jsx)(
                  ti.FocusGuard,
                  { ref: h.context.triggerFocusTargetRef, onFocus: ec },
                  `${b}-post-focus-guard`,
                ),
              ],
            })
          : (0, C.jsx)(x.Fragment, { children: em }, b);
    });
    var ts = e.i(17816);
    let tl = x.forwardRef(function (e, t) {
      let { render: n, className: o, style: r, children: i, ...a } = e,
        { store: s } = O(),
        { side: l } = M(),
        u = s.useState("instantType"),
        { children: c, state: d } = (0, ts.usePopupViewport)({ store: s, side: l, children: i }),
        p = { activationDirection: d.activationDirection, transitioning: d.transitioning, instant: u };
      return (0, w.useRenderElement)("div", e, {
        state: p,
        ref: t,
        props: [a, { children: c }],
        stateAttributesMapping: ts.popupViewportStateMapping,
      });
    });
    var tu = e.i(9103);
    let tc = { "aria-expanded": void 0 },
      td = x.forwardRef(function (e, t) {
        let {
            render: n,
            className: o,
            style: r,
            label: i,
            id: a,
            nativeButton: s = !1,
            openOnHover: l = !0,
            delay: u = 100,
            closeDelay: c = 0,
            disabled: d = !1,
            ...p
          } = e,
          f = e$();
        if (!f?.parentMenu) throw Error((0, y.default)(37));
        let C = (0, z.useCompositeListItem)({ guess: !0, label: i }),
          g = M(),
          { store: m } = O(),
          v = (0, G.useBaseUiId)(a),
          h = m.useState("open"),
          b = m.useState("floatingRootContext"),
          S = m.useState("floatingTreeRoot"),
          R = m.useState("triggerPopupId", v),
          E = (0, eJ.useTriggerRegistration)(v, m),
          I = (0, eE.useStableCallback)((e) => {
            (E(e),
              null !== e &&
                m.select("open") &&
                null == m.select("activeTriggerId") &&
                m.update({ activeTriggerId: v ?? null, activeTriggerElement: e, closeDelay: c }));
          }),
          N = x.useRef(null),
          j = x.useCallback(
            (e) => {
              ((N.current = e), m.set("activeTriggerElement", e));
            },
            [m],
          );
        ((0, ee.useIsoLayoutEffect)(() => (I(N.current), () => I(null)), [I, v, m]), m.useSyncedValue("closeDelay", c));
        let k = f.parentMenu,
          A = m.useState("disabled"),
          H = k.useState("disabled"),
          B = d || A || H,
          D = k.useState("itemProps"),
          V = k.useState("isActive", C.index),
          Z = x.useMemo(
            () => ({
              type: "submenu-trigger",
              setActive() {
                k.select("highlightItemOnHover") && k.set("activeIndex", C.index);
              },
            }),
            [k, C.index],
          ),
          { getItemProps: U, itemRef: Y } = _({
            closeOnClick: !1,
            disabled: B,
            highlighted: V,
            id: v,
            store: m,
            typingRef: k.context.typingRef,
            nativeButton: s,
            itemMetadata: Z,
            nodeId: g?.context.nodeId,
          }),
          K = m.useState("hoverEnabled"),
          W = (0, e6.useHoverReferenceInteraction)(b, {
            enabled: K && l && !B,
            handleClose: (0, e1.safePolygon)({ blockPointerEvents: !0 }),
            mouseOnly: !0,
            move: !0,
            restMs: u,
            delay: { open: u, close: c },
            shouldOpen: u > 0 ? () => k.select("allowMouseEnter") : void 0,
            triggerElementRef: N,
            externalTree: S,
            isClosing: () => "ending" === m.select("transitionStatus"),
            guardStaleOpen: !0,
          }),
          J =
            (0, e0.useClick)(b, { enabled: !B, event: "mousedown", toggle: !l, ignoreMouse: l, stickIfOpen: !1 })
              .reference ?? L.EMPTY_OBJECT,
          X = m.useState("triggerProps", !0);
        delete X.id;
        let $ = m.useState("openMethod"),
          q = m.useState("lastOpenChangeReason") === P.REASONS.listNavigation || "keyboard" === $,
          Q = h && q && F.platform.screenReader.voiceOver;
        return (0, w.useRenderElement)("div", e, {
          state: { disabled: B, highlighted: V, open: h },
          stateAttributesMapping: T.triggerOpenStateMapping,
          props: [
            J,
            W,
            X,
            D,
            Q ? tc : void 0,
            {
              "aria-controls": R,
              tabIndex: h || V ? 0 : -1,
              onBlur() {
                V && k.set("activeIndex", null);
              },
            },
            p,
            U,
          ],
          ref: [t, C.ref, Y, I, j],
        });
      });
    var tp = e.i(59473);
    class tf extends tp.BasePopupHandle {
      constructor() {
        super(
          (function () {
            let e = new ez.PopupTriggerMap();
            return Object.assign(new eU.NullStore(Object.freeze(eW(e)), Object.freeze(eK(e)), eG), { setOpen: L.NOOP });
          })(),
          "Menu",
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
        N,
        "Backdrop",
        0,
        j,
        "CheckboxItem",
        0,
        W,
        "CheckboxItemIndicator",
        0,
        $,
        "Group",
        0,
        Q,
        "GroupLabel",
        0,
        et,
        "Handle",
        0,
        tf,
        "Item",
        0,
        en,
        "LinkItem",
        0,
        eo,
        "Popup",
        0,
        eu,
        "Portal",
        0,
        ep,
        "Positioner",
        0,
        eR,
        "RadioGroup",
        0,
        eI,
        "RadioItem",
        0,
        ew,
        "RadioItemIndicator",
        0,
        eT,
        "Root",
        0,
        eq,
        "Separator",
        () => tu.Separator,
        "SubmenuRoot",
        0,
        eQ,
        "SubmenuTrigger",
        0,
        td,
        "Trigger",
        0,
        ta,
        "Viewport",
        0,
        tl,
        "createHandle",
        0,
        function () {
          return new tf();
        },
      ],
      47633,
    );
    var tC = e.i(47633);
    e.s(["Menu", 0, tC], 57684);
    var tC = tC,
      tg = e.i(72765),
      tm = e.i(27309);
    let tv = x.forwardRef(function (e, t) {
      let { render: n, className: o, style: r, ...i } = e,
        {
          setAnchor: a,
          actionsRef: s,
          internalBackdropRef: l,
          backdropRef: u,
          positionerRef: c,
          allowMouseUpTriggerRef: d,
          initialCursorPointRef: p,
          rootId: f,
        } = R(!1),
        { store: C } = O(!1),
        g = C.useState("open"),
        m = C.useState("disabled"),
        v = x.useRef(null),
        h = x.useRef(null),
        b = (0, eC.useTimeout)(),
        y = (0, eC.useTimeout)(),
        S = x.useRef(!1),
        E = x.useRef(null);
      function M(e, t, n) {
        let o = n.type.startsWith("touch");
        ((p.current = { x: e, y: t }),
          a({ getBoundingClientRect: () => DOMRect.fromRect({ width: 10 * !!o, height: 10 * !!o, x: e, y: t }) }),
          (S.current = !1),
          s.current?.setOpen(!0, (0, K.createChangeEventDetails)(P.REASONS.triggerPress, n)),
          y.start(500, () => {
            S.current = !0;
          }));
      }
      function I() {
        (b.clear(), (h.current = null));
      }
      return (
        x.useEffect(
          () => () => {
            E.current?.abort();
          },
          [],
        ),
        x.useEffect(() => {
          let e = (0, e2.ownerDocument)(v.current);
          return (0, tg.addEventListener)(e, "contextmenu", function (e) {
            if (m) return;
            let t = (0, e3.getTarget)(e);
            ((0, e3.contains)(v.current, t) || (0, e3.contains)(l.current, t) || (0, e3.contains)(u.current, t)) &&
              e.preventDefault();
          });
        }, [u, m, l]),
        (0, w.useRenderElement)("div", e, {
          state: { open: g },
          ref: [v, t],
          props: [
            {
              onContextMenu: function (e) {
                if (m) return;
                ((d.current = !0), (0, tm.stopEvent)(e), M(e.clientX, e.clientY, e.nativeEvent));
                let t = (0, e2.ownerDocument)(v.current);
                E.current?.abort();
                let n = new AbortController();
                ((E.current = n),
                  t.addEventListener(
                    "mouseup",
                    (e) => {
                      if (((d.current = !1), !S.current)) return;
                      (y.clear(), (S.current = !1));
                      let t = (0, e3.getTarget)(e);
                      (0, e3.contains)(c.current, t) ||
                        (f && t && tt(t) === f) ||
                        s.current?.setOpen(!1, (0, K.createChangeEventDetails)(P.REASONS.cancelOpen, e));
                    },
                    { once: !0, signal: n.signal },
                  ));
              },
              onTouchStart: function (e) {
                if (m || ((d.current = !1), 1 !== e.touches.length)) return void I();
                e.stopPropagation();
                let t = e.touches[0],
                  n = { x: t.clientX, y: t.clientY };
                ((h.current = n),
                  b.start(500, () => {
                    M(n.x, n.y, e.nativeEvent);
                  }));
              },
              onTouchMove: function (e) {
                if (1 !== e.touches.length) return void I();
                if (b.isStarted() && h.current) {
                  let t = e.touches[0],
                    n = Math.abs(t.clientX - h.current.x),
                    o = Math.abs(t.clientY - h.current.y);
                  (n > 10 || o > 10) && I();
                }
              },
              onTouchEnd: I,
              onTouchCancel: I,
              style: { WebkitTouchCallout: "none" },
            },
            i,
          ],
          stateAttributesMapping: T.pressableTriggerOpenStateMapping,
        })
      );
    });
    e.s(
      [
        "Arrow",
        0,
        N,
        "Backdrop",
        0,
        j,
        "CheckboxItem",
        0,
        W,
        "CheckboxItemIndicator",
        0,
        $,
        "Group",
        0,
        Q,
        "GroupLabel",
        0,
        et,
        "Item",
        0,
        en,
        "LinkItem",
        0,
        eo,
        "Popup",
        0,
        eu,
        "Portal",
        0,
        ep,
        "Positioner",
        0,
        eR,
        "RadioGroup",
        0,
        eI,
        "RadioItem",
        0,
        ew,
        "RadioItemIndicator",
        0,
        eT,
        "Root",
        0,
        function (e) {
          let [t, n] = x.useState({
              getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, x: 0, y: 0 }),
            }),
            o = x.useRef(null),
            r = x.useRef(null),
            i = x.useRef(null),
            a = x.useRef(null),
            s = x.useRef(!0),
            l = x.useRef(null),
            u = (0, b.useId)(),
            c = x.useMemo(
              () => ({
                anchor: t,
                setAnchor: n,
                actionsRef: i,
                backdropRef: o,
                internalBackdropRef: r,
                positionerRef: a,
                allowMouseUpTriggerRef: s,
                initialCursorPointRef: l,
                rootId: u,
              }),
              [t, u],
            );
          return (0, C.jsx)(S.Provider, {
            value: c,
            children: (0, C.jsx)(I.Provider, { value: void 0, children: (0, C.jsx)(tC.Root, { ...e }) }),
          });
        },
        "Separator",
        () => tu.Separator,
        "SubmenuRoot",
        0,
        eQ,
        "SubmenuTrigger",
        0,
        td,
        "Trigger",
        0,
        tv,
      ],
      89447,
    );
    var th = e.i(89447),
      th = th,
      tx = e.i(97529),
      tb = e.i(94814);
    function ty({ ...e }) {
      return (0, C.jsx)(th.Root, { "data-slot": "context-menu", ...e });
    }
    function tS({ className: e, ...t }) {
      return (0, C.jsx)(th.Trigger, {
        "data-slot": "context-menu-trigger",
        className: (0, tb.cn)("select-none", e),
        ...t,
      });
    }
    function tR({ className: e, align: t = "start", alignOffset: n = 4, side: o = "right", sideOffset: r = 0, ...i }) {
      return (0, C.jsx)(th.Portal, {
        children: (0, C.jsx)(th.Positioner, {
          className: "isolate z-50 outline-none",
          align: t,
          alignOffset: n,
          side: o,
          sideOffset: r,
          children: (0, C.jsx)(th.Popup, {
            "data-slot": "context-menu-content",
            className: (0, tb.cn)(
              "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto duration-100 outline-none",
              "bg-glass border-glass rounded-xl p-1 shadow-xl",
              e,
            ),
            ...i,
          }),
        }),
      });
    }
    function tE({ ...e }) {
      return (0, C.jsx)(th.Group, { "data-slot": "context-menu-group", ...e });
    }
    function tM({ className: e, inset: t, variant: n = "default", ...o }) {
      return (0, C.jsx)(th.Item, {
        "data-slot": "context-menu-item",
        "data-inset": t,
        "data-variant": n,
        className: (0, tb.cn)(
          "group/context-menu-item focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10! data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20! data-[variant=destructive]:*:[svg]:text-destructive relative flex min-h-8 cursor-default items-center gap-2 rounded-lg px-2 py-0.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          e,
        ),
        ...o,
      });
    }
    function tI() {
      return (tI = Object.assign.bind()).apply(null, arguments);
    }
    let tO = function (e) {
      return x.createElement(
        "svg",
        tI({ width: 108, height: 40, viewBox: "0 0 108 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
        t ||
          (t = x.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.556 4.74023C27.738 4.74023 34.3708 11.572 34.3708 19.9995C34.3708 28.4269 27.738 35.2587 19.556 35.2587C11.374 35.2587 4.74121 28.4269 4.74121 19.9995C4.74121 11.572 11.374 4.74023 19.556 4.74023ZM30.8802 14.1553C30.7449 13.8937 30.3552 13.9896 30.3243 14.2825C30.0203 17.172 28.7008 20.6029 26.4659 23.8914C26.4236 23.9536 26.4341 24.038 26.491 24.0873C27.1113 24.6244 27.8098 25.2109 28.588 25.8635C28.6774 25.9385 28.6936 26.07 28.625 26.1644L28.1896 26.7638C28.121 26.8582 27.9909 26.8835 27.892 26.8216C27.0297 26.2825 26.2553 25.7989 25.5521 25.3746C25.4877 25.3357 25.4045 25.3517 25.3583 25.4109C22.9189 28.5357 20.0672 30.8341 17.4194 32.0012C17.1494 32.1203 17.1776 32.5219 17.4689 32.5699C18.148 32.6819 18.8452 32.7402 19.556 32.7402C26.5596 32.7402 32.2431 27.0893 32.2962 20.0982C32.2964 20.0653 32.2968 20.0324 32.2968 19.9995C32.2968 19.9438 32.2963 19.8882 32.2957 19.8327C32.2694 17.788 31.7615 15.8595 30.8802 14.1553ZM14.4211 17.9809C14.3548 17.9154 14.244 17.9265 14.1937 18.0049C13.9023 18.4591 13.6304 18.9129 13.3778 19.3642C12.1538 21.574 11.4069 23.7352 11.1363 25.5915C10.878 27.3637 11.1007 28.6274 11.5039 29.4468C11.7336 29.9133 12.1408 30.2893 12.6487 30.4012C13.4702 30.5822 14.7501 30.4335 16.539 29.5058C18.5575 28.459 20.8016 26.603 22.8362 24.089C22.8965 24.0144 22.8693 23.9024 22.7818 23.8631C19.9518 22.5911 18.4598 23.2017 15.711 26.272C15.6346 26.3573 15.5048 26.3729 15.4122 26.3057L14.8034 25.8634C14.7108 25.7961 14.6857 25.6675 14.7432 25.5686C16.9026 21.8517 16.8518 20.3811 14.4211 17.9809ZM19.556 7.25875C12.5752 7.25875 6.9056 12.873 6.8163 19.8327C6.81564 19.8882 6.81528 19.9438 6.81528 19.9995C6.81528 20.0324 6.81563 20.0653 6.81586 20.0982C6.83235 22.2711 7.39272 24.3147 8.36766 26.0992C8.50717 26.3546 8.89023 26.2563 8.92155 25.967C9.16905 23.6806 10.0739 21.017 11.5764 18.3362C11.9061 17.7422 12.266 17.1481 12.6553 16.5578C12.6966 16.4953 12.6851 16.4118 12.6282 16.3632C11.9438 15.7787 11.1623 15.1307 10.2822 14.3936C10.1927 14.3186 10.1765 14.1871 10.2451 14.0926L11.0289 13.0139C11.0976 12.9195 11.2276 12.8943 11.3266 12.9562C12.2982 13.5645 13.1549 14.1068 13.9214 14.5766C13.9854 14.6158 14.0685 14.6007 14.1152 14.5419C14.1846 14.4543 14.2543 14.3674 14.3243 14.2812C16.6833 11.3542 19.3679 9.17543 21.8486 8.01939C22.1113 7.89691 22.0808 7.50547 21.7953 7.45486C21.0683 7.32597 20.32 7.25875 19.556 7.25875ZM26.385 9.43938C25.4796 9.20563 24.1187 9.33455 22.2918 10.2373C20.2775 11.2326 17.9712 13.1215 15.9632 15.556C15.9038 15.628 15.9272 15.7372 16.0101 15.7801C19.0489 17.3545 20.4632 16.9504 23.3332 13.7455C23.4095 13.6603 23.5396 13.6444 23.6321 13.7117L24.241 14.154C24.3335 14.2212 24.3588 14.3496 24.3013 14.4485C22.2287 18.0151 22.1108 19.6224 24.2013 21.9244C24.2655 21.995 24.3798 21.9867 24.4324 21.907C26.2533 19.1449 27.3581 16.3782 27.7368 14.0934C28.0124 12.4305 27.8797 11.2747 27.5796 10.5166C27.3721 9.99253 26.9308 9.58029 26.385 9.43938Z",
            fill: "currentColor",
          })),
        n ||
          (n = x.createElement("path", {
            d: "M69.012 28.3431V14.8684H71.6765V28.3431H69.012ZM70.3443 13.4723C69.8746 13.4723 69.4732 13.3101 69.1401 12.9856C68.8156 12.6525 68.6533 12.2469 68.6533 11.7687C68.6533 11.2991 68.8199 10.902 69.1529 10.5775C69.486 10.2531 69.8831 10.0908 70.3443 10.0908C70.8396 10.0908 71.2495 10.2531 71.574 10.5775C71.8986 10.902 72.0608 11.2991 72.0608 11.7687C72.0608 12.2469 71.8986 12.6525 71.574 12.9856C71.2495 13.3101 70.8396 13.4723 70.3443 13.4723Z",
            fill: "#090B0C",
          })),
        o ||
          (o = x.createElement("path", {
            d: "M95.9681 28.436C94.0629 28.436 92.4511 27.7982 91.1327 26.5225C89.8229 25.2469 89.168 23.6268 89.168 21.6622V21.2923C89.168 19.3363 89.8229 17.7204 91.1327 16.4448C92.4426 15.1691 94.0331 14.5312 95.9043 14.5312C97.8181 14.5312 99.3618 15.1266 100.536 16.3172C101.709 17.5078 102.296 19.0173 102.296 20.8458V22.147H90.5076V20.3228H99.7701V20.1697C99.7276 19.2087 99.3533 18.4135 98.6474 17.7842C97.9499 17.1464 97.0398 16.8275 95.9171 16.8275C94.7518 16.8275 93.7482 17.2527 92.9061 18.1031C92.0726 18.9536 91.6558 20.0294 91.6558 21.3306V21.726C91.6558 23.0442 92.0939 24.1158 92.9699 24.9407C93.8545 25.7656 94.8624 26.1781 95.9936 26.1781C96.606 26.1781 97.1419 26.0931 97.6012 25.923C98.0605 25.7529 98.473 25.4977 98.8387 25.1576C99.2045 24.8089 99.5745 24.3114 99.9487 23.665L102.028 24.5963C101.56 25.5403 101.05 26.2802 100.497 26.8159C99.9444 27.3432 99.3023 27.7472 98.5708 28.0278C97.8393 28.3 96.9718 28.436 95.9681 28.436Z",
            fill: "#090B0C",
          })),
        r ||
          (r = x.createElement("path", {
            d: "M80.0873 28.4357C78.3522 28.4357 76.8807 27.8021 75.6729 26.535C74.4737 25.2593 73.874 23.652 73.874 21.713V21.292C73.874 19.3189 74.4822 17.6988 75.6985 16.4317C76.9232 15.1645 78.4245 14.5309 80.2021 14.5309C81.2058 14.5309 82.1414 14.7393 83.0089 15.156C83.885 15.5727 84.5357 16.1468 84.961 16.8782L84.7823 16.7506V9.92578H87.4361V28.1933H84.9099V25.8844L85.0375 25.693L85.063 25.9482C84.6462 26.7221 83.9871 27.3301 83.0855 27.7724C82.1924 28.2146 81.193 28.4357 80.0873 28.4357ZM80.7252 26.063C81.9585 26.063 82.9622 25.6463 83.7362 24.8128C84.5102 23.9709 84.8972 22.9376 84.8972 21.713V21.3047C84.8972 20.0206 84.4974 18.9745 83.6979 18.1666C82.9069 17.3587 81.916 16.9547 80.7252 16.9547C79.4834 16.9547 78.4627 17.3502 77.6632 18.1411C76.8722 18.932 76.4767 19.9865 76.4767 21.3047V21.713C76.4767 23.0396 76.8765 24.0984 77.676 24.8894C78.484 25.6718 79.5004 26.063 80.7252 26.063Z",
            fill: "#090B0C",
          })),
        i ||
          (i = x.createElement("path", {
            d: "M48.8061 10.2471L55.2606 28.2346H52.3315L46.525 11.7503H47.8211L42.0146 28.2346H39.1113L45.5918 10.2471H48.8061ZM42.4812 22.1955H51.7353L52.4611 24.4505H41.7554L42.4812 22.1955Z",
            fill: "#090B0C",
          })),
        a ||
          (a = x.createElement("path", {
            d: "M61.6785 28.4445C60.7073 28.4445 59.8431 28.2799 59.0859 27.9506C58.3287 27.605 57.7032 27.1441 57.2093 26.5679C56.732 25.9918 56.4027 25.3663 56.2217 24.6914L58.7649 24.1482C58.9295 24.7737 59.2669 25.2758 59.7772 25.6544C60.304 26.0165 60.9213 26.1976 61.6291 26.1976C62.4686 26.1976 63.1023 26.0412 63.5303 25.7284C63.9748 25.3992 64.197 24.9877 64.197 24.4939C64.197 24.033 64.0077 23.679 63.6291 23.4321C63.2505 23.1688 62.7567 22.9548 62.1476 22.7902C61.555 22.6255 60.913 22.4527 60.2217 22.2716C59.5468 22.0906 58.9048 21.8519 58.2958 21.5556C57.7032 21.2593 57.2176 20.8642 56.839 20.3704C56.4604 19.8601 56.2711 19.1935 56.2711 18.3704C56.2711 17.6626 56.4768 17.0124 56.8883 16.4198C57.3163 15.8272 57.9172 15.3663 58.6908 15.0371C59.4645 14.6914 60.3781 14.5186 61.4316 14.5186C62.3534 14.5186 63.1599 14.6667 63.8513 14.963C64.5591 15.2593 65.1353 15.679 65.5797 16.2223C66.0406 16.749 66.3451 17.3745 66.4933 18.0988L63.9995 18.7408C63.8348 18.1153 63.5385 17.6297 63.1106 17.284C62.6826 16.9218 62.09 16.7408 61.3328 16.7408C60.5591 16.7408 59.9665 16.8889 59.555 17.1852C59.1435 17.4815 58.9377 17.8683 58.9377 18.3457C58.9377 18.8231 59.127 19.1935 59.5056 19.4568C59.8842 19.7202 60.3698 19.9424 60.9624 20.1235C61.5715 20.3046 62.2052 20.4856 62.8637 20.6667C63.5385 20.8478 64.1723 21.0782 64.7649 21.3581C65.3739 21.6379 65.8678 22.033 66.2464 22.5432C66.625 23.0371 66.8143 23.6873 66.8143 24.4939C66.8143 25.2017 66.6003 25.8601 66.1723 26.4692C65.7608 27.0618 65.1682 27.5391 64.3945 27.9013C63.6373 28.2634 62.732 28.4445 61.6785 28.4445Z",
            fill: "#090B0C",
          })),
      );
    };
    function tw() {
      return (tw = Object.assign.bind()).apply(null, arguments);
    }
    function tT() {
      return (tT = Object.assign.bind()).apply(null, arguments);
    }
    let tN = {
      logo: function (e) {
        return x.createElement(
          "svg",
          tw({ width: 108, height: 40, viewBox: "0 0 108 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
          s ||
            (s = x.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.556 4.74023C27.738 4.74023 34.3708 11.572 34.3708 19.9995C34.3708 28.4269 27.738 35.2587 19.556 35.2587C11.374 35.2587 4.74121 28.4269 4.74121 19.9995C4.74121 11.572 11.374 4.74023 19.556 4.74023ZM30.8802 14.1553C30.7449 13.8937 30.3552 13.9896 30.3243 14.2825C30.0203 17.172 28.7008 20.6029 26.4659 23.8914C26.4236 23.9536 26.4341 24.038 26.491 24.0873C27.1113 24.6244 27.8098 25.2109 28.588 25.8635C28.6774 25.9385 28.6936 26.07 28.625 26.1644L28.1896 26.7638C28.121 26.8582 27.9909 26.8835 27.892 26.8216C27.0297 26.2825 26.2553 25.7989 25.5521 25.3746C25.4877 25.3357 25.4045 25.3517 25.3583 25.4109C22.9189 28.5357 20.0672 30.8341 17.4194 32.0012C17.1494 32.1203 17.1776 32.5219 17.4689 32.5699C18.148 32.6819 18.8452 32.7402 19.556 32.7402C26.5596 32.7402 32.2431 27.0893 32.2962 20.0982C32.2964 20.0653 32.2968 20.0324 32.2968 19.9995C32.2968 19.9438 32.2963 19.8882 32.2957 19.8327C32.2694 17.788 31.7615 15.8595 30.8802 14.1553ZM14.4211 17.9809C14.3548 17.9154 14.244 17.9265 14.1937 18.0049C13.9023 18.4591 13.6304 18.9129 13.3778 19.3642C12.1538 21.574 11.4069 23.7352 11.1363 25.5915C10.878 27.3637 11.1007 28.6274 11.5039 29.4468C11.7336 29.9133 12.1408 30.2893 12.6487 30.4012C13.4702 30.5822 14.7501 30.4335 16.539 29.5058C18.5575 28.459 20.8016 26.603 22.8362 24.089C22.8965 24.0144 22.8693 23.9024 22.7818 23.8631C19.9518 22.5911 18.4598 23.2017 15.711 26.272C15.6346 26.3573 15.5048 26.3729 15.4122 26.3057L14.8034 25.8634C14.7108 25.7961 14.6857 25.6675 14.7432 25.5686C16.9026 21.8517 16.8518 20.3811 14.4211 17.9809ZM19.556 7.25875C12.5752 7.25875 6.9056 12.873 6.8163 19.8327C6.81564 19.8882 6.81528 19.9438 6.81528 19.9995C6.81528 20.0324 6.81563 20.0653 6.81586 20.0982C6.83235 22.2711 7.39272 24.3147 8.36766 26.0992C8.50717 26.3546 8.89023 26.2563 8.92155 25.967C9.16905 23.6806 10.0739 21.017 11.5764 18.3362C11.9061 17.7422 12.266 17.1481 12.6553 16.5578C12.6966 16.4953 12.6851 16.4118 12.6282 16.3632C11.9438 15.7787 11.1623 15.1307 10.2822 14.3936C10.1927 14.3186 10.1765 14.1871 10.2451 14.0926L11.0289 13.0139C11.0976 12.9195 11.2276 12.8943 11.3266 12.9562C12.2982 13.5645 13.1549 14.1068 13.9214 14.5766C13.9854 14.6158 14.0685 14.6007 14.1152 14.5419C14.1846 14.4543 14.2543 14.3674 14.3243 14.2812C16.6833 11.3542 19.3679 9.17543 21.8486 8.01939C22.1113 7.89691 22.0808 7.50547 21.7953 7.45486C21.0683 7.32597 20.32 7.25875 19.556 7.25875ZM26.385 9.43938C25.4796 9.20563 24.1187 9.33455 22.2918 10.2373C20.2775 11.2326 17.9712 13.1215 15.9632 15.556C15.9038 15.628 15.9272 15.7372 16.0101 15.7801C19.0489 17.3545 20.4632 16.9504 23.3332 13.7455C23.4095 13.6603 23.5396 13.6444 23.6321 13.7117L24.241 14.154C24.3335 14.2212 24.3588 14.3496 24.3013 14.4485C22.2287 18.0151 22.1108 19.6224 24.2013 21.9244C24.2655 21.995 24.3798 21.9867 24.4324 21.907C26.2533 19.1449 27.3581 16.3782 27.7368 14.0934C28.0124 12.4305 27.8797 11.2747 27.5796 10.5166C27.3721 9.99253 26.9308 9.58029 26.385 9.43938Z",
              fill: "currentColor",
            })),
          l ||
            (l = x.createElement("path", {
              d: "M69.012 28.3431V14.8684H71.6765V28.3431H69.012ZM70.3443 13.4723C69.8746 13.4723 69.4732 13.3101 69.1401 12.9856C68.8156 12.6525 68.6533 12.2469 68.6533 11.7687C68.6533 11.2991 68.8199 10.902 69.1529 10.5775C69.486 10.2531 69.8831 10.0908 70.3443 10.0908C70.8396 10.0908 71.2495 10.2531 71.574 10.5775C71.8986 10.902 72.0608 11.2991 72.0608 11.7687C72.0608 12.2469 71.8986 12.6525 71.574 12.9856C71.2495 13.3101 70.8396 13.4723 70.3443 13.4723Z",
              fill: "#090B0C",
            })),
          u ||
            (u = x.createElement("path", {
              d: "M95.9681 28.436C94.0629 28.436 92.4511 27.7982 91.1327 26.5225C89.8229 25.2469 89.168 23.6268 89.168 21.6622V21.2923C89.168 19.3363 89.8229 17.7204 91.1327 16.4448C92.4426 15.1691 94.0331 14.5312 95.9043 14.5312C97.8181 14.5312 99.3618 15.1266 100.536 16.3172C101.709 17.5078 102.296 19.0173 102.296 20.8458V22.147H90.5076V20.3228H99.7701V20.1697C99.7276 19.2087 99.3533 18.4135 98.6474 17.7842C97.9499 17.1464 97.0398 16.8275 95.9171 16.8275C94.7518 16.8275 93.7482 17.2527 92.9061 18.1031C92.0726 18.9536 91.6558 20.0294 91.6558 21.3306V21.726C91.6558 23.0442 92.0939 24.1158 92.9699 24.9407C93.8545 25.7656 94.8624 26.1781 95.9936 26.1781C96.606 26.1781 97.1419 26.0931 97.6012 25.923C98.0605 25.7529 98.473 25.4977 98.8387 25.1576C99.2045 24.8089 99.5745 24.3114 99.9487 23.665L102.028 24.5963C101.56 25.5403 101.05 26.2802 100.497 26.8159C99.9444 27.3432 99.3023 27.7472 98.5708 28.0278C97.8393 28.3 96.9718 28.436 95.9681 28.436Z",
              fill: "#090B0C",
            })),
          c ||
            (c = x.createElement("path", {
              d: "M80.0873 28.4357C78.3522 28.4357 76.8807 27.8021 75.6729 26.535C74.4737 25.2593 73.874 23.652 73.874 21.713V21.292C73.874 19.3189 74.4822 17.6988 75.6985 16.4317C76.9232 15.1645 78.4245 14.5309 80.2021 14.5309C81.2058 14.5309 82.1414 14.7393 83.0089 15.156C83.885 15.5727 84.5357 16.1468 84.961 16.8782L84.7823 16.7506V9.92578H87.4361V28.1933H84.9099V25.8844L85.0375 25.693L85.063 25.9482C84.6462 26.7221 83.9871 27.3301 83.0855 27.7724C82.1924 28.2146 81.193 28.4357 80.0873 28.4357ZM80.7252 26.063C81.9585 26.063 82.9622 25.6463 83.7362 24.8128C84.5102 23.9709 84.8972 22.9376 84.8972 21.713V21.3047C84.8972 20.0206 84.4974 18.9745 83.6979 18.1666C82.9069 17.3587 81.916 16.9547 80.7252 16.9547C79.4834 16.9547 78.4627 17.3502 77.6632 18.1411C76.8722 18.932 76.4767 19.9865 76.4767 21.3047V21.713C76.4767 23.0396 76.8765 24.0984 77.676 24.8894C78.484 25.6718 79.5004 26.063 80.7252 26.063Z",
              fill: "#090B0C",
            })),
          d ||
            (d = x.createElement("path", {
              d: "M48.8061 10.2471L55.2606 28.2346H52.3315L46.525 11.7503H47.8211L42.0146 28.2346H39.1113L45.5918 10.2471H48.8061ZM42.4812 22.1955H51.7353L52.4611 24.4505H41.7554L42.4812 22.1955Z",
              fill: "#090B0C",
            })),
          p ||
            (p = x.createElement("path", {
              d: "M61.6785 28.4445C60.7073 28.4445 59.8431 28.2799 59.0859 27.9506C58.3287 27.605 57.7032 27.1441 57.2093 26.5679C56.732 25.9918 56.4027 25.3663 56.2217 24.6914L58.7649 24.1482C58.9295 24.7737 59.2669 25.2758 59.7772 25.6544C60.304 26.0165 60.9213 26.1976 61.6291 26.1976C62.4686 26.1976 63.1023 26.0412 63.5303 25.7284C63.9748 25.3992 64.197 24.9877 64.197 24.4939C64.197 24.033 64.0077 23.679 63.6291 23.4321C63.2505 23.1688 62.7567 22.9548 62.1476 22.7902C61.555 22.6255 60.913 22.4527 60.2217 22.2716C59.5468 22.0906 58.9048 21.8519 58.2958 21.5556C57.7032 21.2593 57.2176 20.8642 56.839 20.3704C56.4604 19.8601 56.2711 19.1935 56.2711 18.3704C56.2711 17.6626 56.4768 17.0124 56.8883 16.4198C57.3163 15.8272 57.9172 15.3663 58.6908 15.0371C59.4645 14.6914 60.3781 14.5186 61.4316 14.5186C62.3534 14.5186 63.1599 14.6667 63.8513 14.963C64.5591 15.2593 65.1353 15.679 65.5797 16.2223C66.0406 16.749 66.3451 17.3745 66.4933 18.0988L63.9995 18.7408C63.8348 18.1153 63.5385 17.6297 63.1106 17.284C62.6826 16.9218 62.09 16.7408 61.3328 16.7408C60.5591 16.7408 59.9665 16.8889 59.555 17.1852C59.1435 17.4815 58.9377 17.8683 58.9377 18.3457C58.9377 18.8231 59.127 19.1935 59.5056 19.4568C59.8842 19.7202 60.3698 19.9424 60.9624 20.1235C61.5715 20.3046 62.2052 20.4856 62.8637 20.6667C63.5385 20.8478 64.1723 21.0782 64.7649 21.3581C65.3739 21.6379 65.8678 22.033 66.2464 22.5432C66.625 23.0371 66.8143 23.6873 66.8143 24.4939C66.8143 25.2017 66.6003 25.8601 66.1723 26.4692C65.7608 27.0618 65.1682 27.5391 64.3945 27.9013C63.6373 28.2634 62.732 28.4445 61.6785 28.4445Z",
              fill: "#090B0C",
            })),
        );
      },
      symbol: function (e) {
        return x.createElement(
          "svg",
          tT({ width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
          f ||
            (f = x.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.556 4.74023C27.738 4.74023 34.3708 11.572 34.3708 19.9995C34.3708 28.4269 27.738 35.2587 19.556 35.2587C11.374 35.2587 4.74121 28.4269 4.74121 19.9995C4.74121 11.572 11.374 4.74023 19.556 4.74023ZM30.8802 14.1553C30.7449 13.8937 30.3552 13.9896 30.3243 14.2825C30.0203 17.172 28.7008 20.6029 26.4659 23.8914C26.4236 23.9536 26.4341 24.038 26.491 24.0873C27.1113 24.6244 27.8098 25.2109 28.588 25.8635C28.6774 25.9385 28.6936 26.07 28.625 26.1644L28.1896 26.7638C28.121 26.8582 27.9909 26.8835 27.892 26.8216C27.0297 26.2825 26.2553 25.7989 25.5521 25.3746C25.4877 25.3357 25.4045 25.3517 25.3583 25.4109C22.9189 28.5357 20.0672 30.8341 17.4194 32.0012C17.1494 32.1203 17.1776 32.5219 17.4689 32.5699C18.148 32.6819 18.8452 32.7402 19.556 32.7402C26.5596 32.7402 32.2431 27.0893 32.2962 20.0982C32.2964 20.0653 32.2968 20.0324 32.2968 19.9995C32.2968 19.9438 32.2963 19.8882 32.2957 19.8327C32.2694 17.788 31.7615 15.8595 30.8802 14.1553ZM14.4211 17.9809C14.3548 17.9154 14.244 17.9265 14.1937 18.0049C13.9023 18.4591 13.6304 18.9129 13.3778 19.3642C12.1538 21.574 11.4069 23.7352 11.1363 25.5915C10.878 27.3637 11.1007 28.6274 11.5039 29.4468C11.7336 29.9133 12.1408 30.2893 12.6487 30.4012C13.4702 30.5822 14.7501 30.4335 16.539 29.5058C18.5575 28.459 20.8016 26.603 22.8362 24.089C22.8965 24.0144 22.8693 23.9024 22.7818 23.8631C19.9518 22.5911 18.4598 23.2017 15.711 26.272C15.6346 26.3573 15.5048 26.3729 15.4122 26.3057L14.8034 25.8634C14.7108 25.7961 14.6857 25.6675 14.7432 25.5686C16.9026 21.8517 16.8518 20.3811 14.4211 17.9809ZM19.556 7.25875C12.5752 7.25875 6.9056 12.873 6.8163 19.8327C6.81564 19.8882 6.81528 19.9438 6.81528 19.9995C6.81528 20.0324 6.81563 20.0653 6.81586 20.0982C6.83235 22.2711 7.39272 24.3147 8.36766 26.0992C8.50717 26.3546 8.89023 26.2563 8.92155 25.967C9.16905 23.6806 10.0739 21.017 11.5764 18.3362C11.9061 17.7422 12.266 17.1481 12.6553 16.5578C12.6966 16.4953 12.6851 16.4118 12.6282 16.3632C11.9438 15.7787 11.1623 15.1307 10.2822 14.3936C10.1927 14.3186 10.1765 14.1871 10.2451 14.0926L11.0289 13.0139C11.0976 12.9195 11.2276 12.8943 11.3266 12.9562C12.2982 13.5645 13.1549 14.1068 13.9214 14.5766C13.9854 14.6158 14.0685 14.6007 14.1152 14.5419C14.1846 14.4543 14.2543 14.3674 14.3243 14.2812C16.6833 11.3542 19.3679 9.17543 21.8486 8.01939C22.1113 7.89691 22.0808 7.50547 21.7953 7.45486C21.0683 7.32597 20.32 7.25875 19.556 7.25875ZM26.385 9.43938C25.4796 9.20563 24.1187 9.33455 22.2918 10.2373C20.2775 11.2326 17.9712 13.1215 15.9632 15.556C15.9038 15.628 15.9272 15.7372 16.0101 15.7801C19.0489 17.3545 20.4632 16.9504 23.3332 13.7455C23.4095 13.6603 23.5396 13.6444 23.6321 13.7117L24.241 14.154C24.3335 14.2212 24.3588 14.3496 24.3013 14.4485C22.2287 18.0151 22.1108 19.6224 24.2013 21.9244C24.2655 21.995 24.3798 21.9867 24.4324 21.907C26.2533 19.1449 27.3581 16.3782 27.7368 14.0934C28.0124 12.4305 27.8797 11.2747 27.5796 10.5166C27.3721 9.99253 26.9308 9.58029 26.385 9.43938Z",
              fill: "currentColor",
            })),
        );
      },
    };
    async function tP(e) {
      if (!navigator.clipboard) return !1;
      try {
        return (await navigator.clipboard.writeText(tN[e]), !0);
      } catch {
        return !1;
      }
    }
    e.s(
      [
        "LogoContextMenuLink",
        0,
        ({ logoClassName: e, onMouseEnter: t }) => {
          let n = async (e) => {
            let t = "logo" === e ? "Logo" : "Symbol";
            (await tP(e)) ? m.toast.success(`${t} copied`) : m.toast.error(`Could not copy ${t.toLowerCase()}`);
          };
          return (0, C.jsxs)(ty, {
            children: [
              (0, C.jsx)(tS, {
                render: (0, C.jsx)(g.default, { href: "/", onMouseEnter: t }),
                children: (0, C.jsx)(tO, { className: (0, tb.cn)(e) }),
              }),
              (0, C.jsx)(tR, {
                className: "w-40",
                children: (0, C.jsxs)(tE, {
                  children: [
                    (0, C.jsxs)(tM, {
                      className: "focus:bg-black/5",
                      onClick: () => n("symbol"),
                      children: [
                        (0, C.jsx)(h.OfficialBrandSymbolSolidIcon, {}),
                        (0, C.jsx)("span", { children: "Copy symbol" }),
                      ],
                    }),
                    (0, C.jsxs)(tM, {
                      className: "focus:bg-black/5",
                      onClick: () => n("logo"),
                      children: [(0, C.jsx)(v.CopyIcon, {}), (0, C.jsx)("span", { children: "Copy logo" })],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      73450,
    );
    let tj = ({ href: e, isOutlink: t }) => t || e.startsWith("http"),
      tk = [
        { label: "Features", hasMenu: !0 },
        { label: "Use cases", hasMenu: !0 },
        { label: "Resources", hasMenu: !0 },
        { label: "Pricing", href: "/pricing", hasMenu: !1 },
      ];
    e.s(
      [
        "LANDING_MENU_LIST",
        0,
        [
          {
            group: "Features",
            items: [
              { href: "/features/browser-agent", label: "Browser agent" },
              { href: "/features/password-manager", label: "Password Manager" },
              { href: "/features/memory", label: "Memory" },
            ],
          },
          {
            group: "Use cases",
            items: [
              { href: "/blog/operations", label: "Operations" },
              { href: "/blog/hr", label: "Hiring Teams" },
              { href: "/blog/sales", label: "Sales" },
              { href: "/blog/developers", label: "Developers" },
              { href: "/blog/researchers", label: "Researchers" },
            ],
          },
          {
            group: "Resources",
            items: [
              { href: "/download", label: "Download" },
              { href: "/blog", label: "Blog" },
              { href: "https://docs.aside.com/changelog/components", label: "Changelog", isOutlink: !0 },
              { href: "/docs", label: "Docs", isOutlink: !0 },
              { href: "/community", label: "Community", isOutlink: !0 },
            ],
          },
          {
            group: "Company",
            items: [
              { href: "/manifesto", label: "About" },
              { href: "https://www.ycombinator.com/companies/aside/jobs", label: "Careers", isOutlink: !0 },
            ],
          },
          {
            group: void 0,
            items: [
              { href: "/pricing", label: "Pricing" },
              { href: "/policy/terms", label: "Terms of Service" },
              { href: "/policy/privacy", label: "Privacy Policy" },
              { href: "https://trust.aside.com", label: "Trust Center", isOutlink: !0 },
            ],
          },
        ],
        "NAV_ITEMS",
        0,
        tk,
        "isLandingMenuItemOutlink",
        0,
        tj,
      ],
      28835,
    );
    var tL = e.i(34882),
      tA = e.i(79203);
    let tH = ({ size: e = 24, ariaHidden: t = !0, ...n }) =>
      (0, C.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        "aria-hidden": t,
        focusable: "false",
        ...n,
        children: (0, C.jsx)("path", {
          d: "M19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V8.41406L6.95703 18.457C6.56651 18.8476 5.93349 18.8476 5.54297 18.457C5.15245 18.0665 5.15245 17.4335 5.54297 17.043L15.5859 7H9C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5H18C18.5523 5 19 5.44772 19 6V15Z",
          fill: "currentColor",
        }),
      });
    e.s(["ArrowUpRightIcon", 0, tH], 8585);
    var tB = e.i(46609),
      tB = tB,
      tD = e.i(26577),
      tF = e.i(53094);
    let tV = ({ items: e, onClick: t }) =>
      (0, C.jsx)("ul", {
        className: "space-y-2 text-3xl font-medium",
        children: e.map((e) => {
          let { href: n, label: o } = e,
            r = tj(e);
          return (0, C.jsx)(
            "li",
            {
              children: (0, C.jsxs)(g.default, {
                href: n,
                className: "block py-1",
                target: r ? "_blank" : void 0,
                rel: r ? "noopener noreferrer" : void 0,
                onClick: t,
                children: [o, r && (0, C.jsx)(tH, { className: "mb-px ml-0.5 inline-block size-3.5 align-middle" })],
              }),
            },
            o,
          );
        }),
      });
    e.s(
      [
        "MobileNavigationMenu",
        0,
        ({ activeMenu: e, onSelectMenu: t, onBack: n, onClose: o }) =>
          (0, C.jsxs)(tA.motion.div, {
            className: "bg-background font-display fixed inset-0 z-50 flex flex-col md:hidden",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.13 },
            children: [
              (0, C.jsx)(tF.Section, {
                className: "shrink-0",
                children: (0, C.jsxs)(tF.SectionSpacer, {
                  className: "flex h-14 items-center justify-between gap-4",
                  children: [
                    e
                      ? (0, C.jsxs)("button", {
                          type: "button",
                          className: "text-primary -ml-2 flex h-9 items-center gap-1 text-sm font-medium",
                          onClick: n,
                          children: [(0, C.jsx)(tB.IconChevronLeftMedium, { className: "size-5" }), "Back"],
                        })
                      : (0, C.jsx)(tO, { className: "-mx-1.5 h-8 sm:h-9" }),
                    (0, C.jsx)("button", {
                      type: "button",
                      className: "text-primary -mr-2 flex size-9 items-center justify-center",
                      "aria-label": "Close menu",
                      onClick: o,
                      children: (0, C.jsx)(tD.XIcon, { className: "size-5" }),
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(tF.Section, {
                className: "min-h-0 flex-1 overflow-y-auto",
                children: (0, C.jsx)(tF.SectionSpacer, {
                  className: "py-8",
                  children: (0, C.jsx)(tL.AnimatePresence, {
                    mode: "wait",
                    children: e
                      ? (0, C.jsxs)(
                          tA.motion.div,
                          {
                            initial: { opacity: 0, x: 16 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 16 },
                            transition: { duration: 0.13, ease: "easeOut" },
                            children: [
                              (0, C.jsxs)("p", {
                                className: "text-muted-foreground/80 mb-6 text-sm font-medium",
                                children: ["Explore ", e.group],
                              }),
                              (0, C.jsx)(tV, { items: e.items, onClick: o }),
                            ],
                          },
                          e.group,
                        )
                      : (0, C.jsx)(
                          tA.motion.ul,
                          {
                            className: "space-y-2 text-3xl font-medium",
                            initial: { opacity: 0, x: -16 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: -16 },
                            transition: { duration: 0.13, ease: "easeOut" },
                            children: tk.map((e) =>
                              (0, C.jsx)(
                                "li",
                                {
                                  children: e.hasMenu
                                    ? (0, C.jsxs)("button", {
                                        type: "button",
                                        className: "flex w-full items-center justify-between gap-4 py-1 text-left",
                                        onClick: () => t(e.label),
                                        children: [
                                          e.label,
                                          (0, C.jsx)(tx.ChevronRightIcon, {
                                            className: "text-muted-foreground size-5 shrink-0",
                                          }),
                                        ],
                                      })
                                    : (0, C.jsx)(g.default, {
                                        href: e.href,
                                        className: "block py-1",
                                        onClick: o,
                                        children: e.label,
                                      }),
                                },
                                e.label,
                              ),
                            ),
                          },
                          "root",
                        ),
                  }),
                }),
              }),
            ],
          }),
        "NavigationMenuColumn",
        0,
        ({ title: e, items: t, onItemClick: n }) =>
          (0, C.jsxs)("div", {
            className: "w-64 space-y-6",
            children: [
              (0, C.jsx)("p", { className: "text-muted-foreground/80 text-sm font-medium", children: e }),
              (0, C.jsx)("ul", {
                className: "space-y-2 text-2xl font-medium",
                children: t.map((e) => {
                  let { href: t, label: o } = e,
                    r = tj(e);
                  return (0, C.jsx)(
                    "li",
                    {
                      children: (0, C.jsxs)(g.default, {
                        href: t,
                        className:
                          "hover:text-muted-foreground focus-visible:text-muted-foreground transition-colors outline-none",
                        target: r ? "_blank" : void 0,
                        rel: r ? "noopener noreferrer" : void 0,
                        onClick: n,
                        children: [
                          o,
                          r && (0, C.jsx)(tH, { className: "mb-px ml-1 inline-block size-5 align-middle" }),
                        ],
                      }),
                    },
                    o,
                  );
                }),
              }),
            ],
          }),
      ],
      31114,
    );
  },
  46609,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s([
      "IconChevronLeftMedium",
      0,
      ({ size: e = 24, ariaHidden: n = !0, ...o }) =>
        (0, t.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: e,
          "aria-hidden": n,
          focusable: "false",
          ...o,
          children: (0, t.jsx)("path", {
            d: "M13.793 5.29289C14.1835 4.90237 14.8165 4.90237 15.207 5.29289C15.5976 5.68342 15.5976 6.31643 15.207 6.70696L9.91406 11.9999L15.207 17.2929C15.5976 17.6834 15.5976 18.3164 15.207 18.707C14.8165 19.0975 14.1835 19.0975 13.793 18.707L7.79297 12.707C7.40245 12.3164 7.40245 11.6834 7.79297 11.2929L13.793 5.29289Z",
            fill: "currentColor",
          }),
        }),
    ]);
  },
  54437,
  (e) => {
    "use strict";
    var t = e.i(21935),
      n = e.i(47452),
      o = e.i(3308),
      r = e.i(77537),
      i = e.i(34882),
      a = e.i(79203),
      s = e.i(63985),
      l = e.i(81912),
      u = e.i(13838),
      c = e.i(13696),
      d = e.i(94814),
      p = e.i(53094),
      f = e.i(73450),
      C = e.i(28835),
      g = e.i(31114);
    e.s([
      "Navigation",
      0,
      ({ transparentOnHero: e = !0, revealOnScroll: m = !1 }) => {
        let v = (0, r.usePathname)(),
          h = (0, n.useRef)(null),
          x = (0, n.useRef)(null),
          b = (0, s.useInView)(x, { initial: !0 }),
          y = (0, n.useRef)(!1),
          [S, R] = (0, n.useState)(!m),
          [E, M] = (0, n.useState)(null),
          [I, O] = (0, n.useState)(!1),
          [w, T] = (0, n.useState)(null),
          N = C.LANDING_MENU_LIST.find((e) => e.group === E),
          P = C.LANDING_MENU_LIST.find((e) => e.group === w),
          j = !y.current,
          k = e && "/" === v && b && !N,
          L = S || !!N || I;
        ((0, n.useEffect)(() => {
          y.current = !!N;
        }, [N]),
          (0, n.useEffect)(() => {
            if (!m) return void R(!0);
            let e = () => {
              R((h.current?.getBoundingClientRect().top ?? 1) <= 0);
            };
            return (
              e(),
              window.addEventListener("scroll", e, { passive: !0 }),
              window.addEventListener("resize", e),
              () => {
                (window.removeEventListener("scroll", e), window.removeEventListener("resize", e));
              }
            );
          }, [m]));
        let A = (e) => {
          (e.target instanceof Element &&
            e.target.closest("[data-navigation-menu-list], [data-navigation-menu-panel]")) ||
            M(null);
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            m && (0, t.jsx)("div", { ref: h, className: "h-px", "aria-hidden": !0 }),
            (0, t.jsxs)("nav", {
              className: (0, d.cn)(
                "font-display sticky top-0 left-0 isolate z-50 w-full transition-[opacity,transform] duration-150",
                k ? "bg-transparent" : "bg-background",
                !b && !N && "border-b border-black/6",
                m && !L && "pointer-events-none -translate-y-full opacity-0",
              ),
              onMouseLeave: () => M(null),
              children: [
                (0, t.jsx)(p.Section, {
                  className: (0, d.cn)("relative z-20", k ? "bg-transparent" : "bg-background"),
                  onFocusCapture: A,
                  onPointerDown: A,
                  children: (0, t.jsxs)(p.SectionSpacer, {
                    className: "relative flex h-14 items-center justify-between gap-4",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex items-center",
                        children: (0, t.jsx)(f.LogoContextMenuLink, {
                          logoClassName: "-mx-1.5 h-8 sm:h-9",
                          onMouseEnter: () => M(null),
                        }),
                      }),
                      (0, t.jsx)("ul", {
                        "data-navigation-menu-list": !0,
                        className:
                          "absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-sans text-sm font-medium md:flex",
                        children: C.NAV_ITEMS.map((e) =>
                          (0, t.jsx)(
                            "li",
                            {
                              children: e.hasMenu
                                ? (0, t.jsx)("button", {
                                    type: "button",
                                    className:
                                      "focus-visible:text-muted-foreground cursor-default transition-colors outline-none",
                                    "aria-expanded": E === e.label,
                                    onMouseEnter: () => M(e.label),
                                    onFocus: () => M(e.label),
                                    children: e.label,
                                  })
                                : (0, t.jsx)(o.default, {
                                    href: e.href,
                                    className: "focus-visible:text-muted-foreground transition-colors outline-none",
                                    onMouseEnter: () => M(null),
                                    onFocus: () => M(null),
                                    children: e.label,
                                  }),
                            },
                            e.label,
                          ),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: "hidden md:block",
                        onMouseEnter: () => M(null),
                        children: (0, t.jsx)(u.DownloadButton, {
                          render: (0, t.jsx)(c.Button, { size: "sm" }),
                          children: (0, t.jsx)(u.DownloadButtonText, { size: "short" }),
                        }),
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className: "text-primary flex size-9 items-center justify-center md:hidden",
                        "aria-label": "Open menu",
                        "aria-expanded": I,
                        onClick: () => {
                          (T(null), O(!0));
                        },
                        children: (0, t.jsx)(l.BarsThreeIcon, { className: "size-5" }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)(i.AnimatePresence, {
                  children:
                    N &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(a.motion.div, {
                          className: "bg-background/1 fixed inset-0 z-0 hidden backdrop-blur-sm md:block",
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.13 },
                          onMouseEnter: () => M(null),
                        }),
                        (0, t.jsx)(a.motion.div, {
                          "data-navigation-menu-panel": !0,
                          className:
                            "bg-background absolute inset-x-0 top-14 z-10 hidden overflow-hidden border-b border-neutral-200 md:block",
                          initial: { height: 0 },
                          animate: { height: "auto" },
                          exit: { height: 0 },
                          transition: { duration: 0.16, ease: "easeOut" },
                          children: (0, t.jsx)(
                            a.motion.div,
                            {
                              className: "min-h-80",
                              initial: { opacity: 0, y: 16 * !!j },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 0 },
                              transition: { delay: 0.03 * !!j, duration: 0.13, ease: "easeOut" },
                              children: (0, t.jsx)(p.Section, {
                                children: (0, t.jsx)(p.SectionSpacer, {
                                  className: "flex gap-12 py-9",
                                  children: (0, t.jsx)(g.NavigationMenuColumn, {
                                    title: `Explore ${N.group}`,
                                    items: N.items,
                                    onItemClick: () => M(null),
                                  }),
                                }),
                              }),
                            },
                            N.group,
                          ),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, t.jsx)(i.AnimatePresence, {
              children:
                I &&
                (0, t.jsx)(g.MobileNavigationMenu, {
                  activeMenu: P,
                  onSelectMenu: T,
                  onBack: () => T(null),
                  onClose: () => {
                    (O(!1), T(null));
                  },
                }),
            }),
            (0, t.jsx)("div", { ref: x, className: "-mt-px h-px", "aria-hidden": !0 }),
          ],
        });
      },
    ]);
  },
]);
