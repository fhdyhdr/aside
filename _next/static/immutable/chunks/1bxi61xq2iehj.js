(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  64847,
  (e) => {
    "use strict";
    e.s([
      "eq",
      0,
      function (e, t) {
        return e === t || (Number.isNaN(e) && Number.isNaN(t));
      },
    ]);
  },
  48449,
  582,
  31773,
  77836,
  66253,
  36431,
  (e) => {
    "use strict";
    (e.s(["noop", 0, function () {}], 48449),
      e.s(
        [
          "getSymbols",
          0,
          function (e) {
            return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
          },
        ],
        582,
      ),
      e.s(
        [
          "getTag",
          0,
          function (e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : Object.prototype.toString.call(e);
          },
        ],
        31773,
      ),
      e.s(
        [
          "argumentsTag",
          0,
          "[object Arguments]",
          "arrayBufferTag",
          0,
          "[object ArrayBuffer]",
          "arrayTag",
          0,
          "[object Array]",
          "bigInt64ArrayTag",
          0,
          "[object BigInt64Array]",
          "bigUint64ArrayTag",
          0,
          "[object BigUint64Array]",
          "booleanTag",
          0,
          "[object Boolean]",
          "dataViewTag",
          0,
          "[object DataView]",
          "dateTag",
          0,
          "[object Date]",
          "errorTag",
          0,
          "[object Error]",
          "float32ArrayTag",
          0,
          "[object Float32Array]",
          "float64ArrayTag",
          0,
          "[object Float64Array]",
          "functionTag",
          0,
          "[object Function]",
          "int16ArrayTag",
          0,
          "[object Int16Array]",
          "int32ArrayTag",
          0,
          "[object Int32Array]",
          "int8ArrayTag",
          0,
          "[object Int8Array]",
          "mapTag",
          0,
          "[object Map]",
          "numberTag",
          0,
          "[object Number]",
          "objectTag",
          0,
          "[object Object]",
          "regexpTag",
          0,
          "[object RegExp]",
          "setTag",
          0,
          "[object Set]",
          "stringTag",
          0,
          "[object String]",
          "symbolTag",
          0,
          "[object Symbol]",
          "uint16ArrayTag",
          0,
          "[object Uint16Array]",
          "uint32ArrayTag",
          0,
          "[object Uint32Array]",
          "uint8ArrayTag",
          0,
          "[object Uint8Array]",
          "uint8ClampedArrayTag",
          0,
          "[object Uint8ClampedArray]",
        ],
        77836,
      ));
    let t =
      ("object" == typeof globalThis && globalThis) ||
      ("object" == typeof window && window) ||
      ("object" == typeof self && self) ||
      e.g ||
      (function () {
        return this;
      })();
    (e.s(
      [
        "isBuffer",
        0,
        function (e) {
          return void 0 !== t.Buffer && t.Buffer.isBuffer(e);
        },
      ],
      66253,
    ),
      e.s(
        [
          "isPlainObject",
          0,
          function (e) {
            if (!e || "object" != typeof e) return !1;
            let t = Object.getPrototypeOf(e);
            return (
              (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          },
        ],
        36431,
      ));
  },
  99171,
  (e) => {
    "use strict";
    var t = e.i(48449),
      r = e.i(582),
      n = e.i(31773),
      i = e.i(77836),
      a = e.i(66253),
      o = e.i(36431),
      s = e.i(64847);
    e.s(
      [
        "isEqual",
        0,
        function (e, l) {
          return (function e(t, l, u, c, d, f, g) {
            let m = g(t, l, u, c, d, f);
            if (void 0 !== m) return m;
            if (typeof t == typeof l)
              switch (typeof t) {
                case "bigint":
                case "string":
                case "boolean":
                case "symbol":
                case "undefined":
                case "function":
                  return t === l;
                case "number":
                  return t === l || Object.is(t, l);
              }
            return (function t(l, u, c, d) {
              if (Object.is(l, u)) return !0;
              let f = (0, n.getTag)(l),
                g = (0, n.getTag)(u);
              if (
                ("[object Arguments]" === f && (f = i.objectTag),
                "[object Arguments]" === g && (g = i.objectTag),
                f !== g)
              )
                return !1;
              switch (f) {
                case i.stringTag:
                  return l.toString() === u.toString();
                case i.numberTag:
                  return (0, s.eq)(l.valueOf(), u.valueOf());
                case i.booleanTag:
                case i.dateTag:
                case i.symbolTag:
                  return Object.is(l.valueOf(), u.valueOf());
                case i.regexpTag:
                  return l.source === u.source && l.flags === u.flags;
                case i.functionTag:
                  return l === u;
              }
              let m = (c = c ?? new Map()).get(l),
                p = c.get(u);
              if (null != m && null != p) return m === u;
              (c.set(l, u), c.set(u, l));
              try {
                switch (f) {
                  case i.mapTag:
                    if (l.size !== u.size) return !1;
                    for (let [t, r] of l.entries()) if (!u.has(t) || !e(r, u.get(t), t, l, u, c, d)) return !1;
                    return !0;
                  case i.setTag: {
                    if (l.size !== u.size) return !1;
                    let t = Array.from(l.values()),
                      r = Array.from(u.values());
                    for (let n = 0; n < t.length; n++) {
                      let i = t[n],
                        a = r.findIndex((t) => e(i, t, void 0, l, u, c, d));
                      if (-1 === a) return !1;
                      r.splice(a, 1);
                    }
                    return !0;
                  }
                  case i.arrayTag:
                  case i.uint8ArrayTag:
                  case i.uint8ClampedArrayTag:
                  case i.uint16ArrayTag:
                  case i.uint32ArrayTag:
                  case i.bigUint64ArrayTag:
                  case i.int8ArrayTag:
                  case i.int16ArrayTag:
                  case i.int32ArrayTag:
                  case i.bigInt64ArrayTag:
                  case i.float32ArrayTag:
                  case i.float64ArrayTag:
                    if ((0, a.isBuffer)(l) !== (0, a.isBuffer)(u) || l.length !== u.length) return !1;
                    for (let t = 0; t < l.length; t++) if (!e(l[t], u[t], t, l, u, c, d)) return !1;
                    return !0;
                  case i.arrayBufferTag:
                    if (l.byteLength !== u.byteLength) return !1;
                    return t(new Uint8Array(l), new Uint8Array(u), c, d);
                  case i.dataViewTag:
                    if (l.byteLength !== u.byteLength || l.byteOffset !== u.byteOffset) return !1;
                    return t(new Uint8Array(l), new Uint8Array(u), c, d);
                  case i.errorTag:
                    return l.name === u.name && l.message === u.message;
                  case i.objectTag: {
                    if (!(
                      t(l.constructor, u.constructor, c, d) ||
                      ((0, o.isPlainObject)(l) && (0, o.isPlainObject)(u))
                    ))
                      return !1;
                    let n = [...Object.keys(l), ...(0, r.getSymbols)(l)],
                      i = [...Object.keys(u), ...(0, r.getSymbols)(u)];
                    if (n.length !== i.length) return !1;
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t],
                        i = l[r];
                      if (!Object.hasOwn(u, r)) return !1;
                      let a = u[r];
                      if (!e(i, a, r, l, u, c, d)) return !1;
                    }
                    return !0;
                  }
                  default:
                    return !1;
                }
              } finally {
                (c.delete(l), c.delete(u));
              }
            })(t, l, f, g);
          })(e, l, void 0, void 0, void 0, void 0, t.noop);
        },
      ],
      99171,
    );
  },
  16950,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(36186),
      r = e.i(57841),
      n = e.i(47452);
    e.s([
      "useReducedMotion",
      0,
      function () {
        t.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, n.useState)(t.prefersReducedMotion.current);
        return e;
      },
    ]);
  },
  57841,
  36186,
  (e) => {
    "use strict";
    let t = { current: null },
      r = { current: !1 };
    e.s(["hasReducedMotionListener", 0, r, "prefersReducedMotion", 0, t], 36186);
    let n = "u" > typeof window;
    e.s(
      [
        "initPrefersReducedMotion",
        0,
        function () {
          if (((r.current = !0), n))
            if (window.matchMedia) {
              let e = window.matchMedia("(prefers-reduced-motion)"),
                r = () => (t.current = e.matches);
              (e.addEventListener("change", r), r());
            } else t.current = !1;
        },
      ],
      57841,
    );
  },
  21710,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return x;
        },
      }));
    let n = e.r(99667),
      i = e.r(87917),
      a = e.r(21935),
      o = i._(e.r(47452)),
      s = n._(e.r(29066)),
      l = n._(e.r(64673)),
      u = e.r(50064),
      c = e.r(45052),
      d = e.r(56015),
      f = e.r(92690),
      g = n._(e.r(58138)),
      m = e.r(39047),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function b(e, t, r, n, i, a, o) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    ((n = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((i = !0), t.stopPropagation());
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function h(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = "u" < typeof window ? o.useEffect : o.useLayoutEffect,
      w = (0, o.forwardRef)(
        (
          {
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: i,
            decoding: s,
            className: l,
            style: u,
            fetchPriority: c,
            placeholder: d,
            loading: f,
            unoptimized: g,
            fill: p,
            onLoadRef: w,
            onLoadingCompleteRef: v,
            setBlurComplete: x,
            setShowAltText: j,
            sizesInput: C,
            onLoad: A,
            onError: _,
            ...T
          },
          S,
        ) => {
          let O = (0, o.useRef)(!1),
            E = (0, o.useRef)(null);
          y(() => {
            let { current: e } = O,
              { current: t } = E;
            e || null === t || (_ && (t.src = t.src), t.complete && b(t, d, w, v, x, g, C), (O.current = !0));
          }, [e, d, w, v, _, g, C]);
          let R = (0, m.useMergedRef)(S, E);
          return (0, a.jsx)("img", {
            ...T,
            ...h(c),
            loading: f,
            width: i,
            height: n,
            decoding: s,
            "data-nimg": p ? "fill" : "1",
            className: l,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: R,
            onLoad: (e) => {
              b(e.currentTarget, d, w, v, x, g, C);
            },
            onError: (e) => {
              (j(!0), "empty" !== d && x(!0), _ && _(e));
            },
          });
        },
      );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...h(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, a.jsx)(l.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let x = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        n = (0, o.useContext)(d.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = p || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: s, onLoadingComplete: l } = e,
        m = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        m.current = s;
      }, [s]);
      let b = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        b.current = l;
      }, [l]);
      let [h, y] = (0, o.useState)(!1),
        [x, j] = (0, o.useState)(!1),
        { props: C, meta: A } = (0, u.getImgProps)(e, {
          defaultLoader: g.default,
          imgConf: i,
          blurComplete: h,
          showAltText: x,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(w, {
            ...C,
            unoptimized: A.unoptimized,
            placeholder: A.placeholder,
            fill: A.fill,
            onLoadRef: m,
            onLoadingCompleteRef: b,
            setBlurComplete: y,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          A.preload ? (0, a.jsx)(v, { isAppRouter: !r, imgAttributes: C }) : null,
        ],
      });
    });
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  75754,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e), t.qualities[0])
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  50064,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(31058),
      i = e.r(22279),
      a = e.r(45052),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: f,
        className: g,
        quality: m,
        width: p,
        height: b,
        fill: h = !1,
        style: y,
        overrideSrc: w,
        onLoad: v,
        onLoadingComplete: x,
        placeholder: j = "empty",
        blurDataURL: C,
        fetchPriority: A,
        decoding: _ = "async",
        layout: T,
        objectFit: S,
        objectPosition: O,
        lazyBoundary: E,
        lazyRoot: R,
        ...k
      },
      P,
    ) {
      var I;
      let M,
        D,
        z,
        { imgConf: N, showAltText: L, blurComplete: q, defaultLoader: U } = P,
        B = N || a.imageConfigDefault;
      if ("allSizes" in B) M = B;
      else {
        let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
          t = B.deviceSizes.sort((e, t) => e - t),
          r = B.qualities?.sort((e, t) => e - t);
        M = { ...B, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let $ = k.loader || U;
      (delete k.loader, delete k.srcSet);
      let F = "__next_img_default" in $;
      if (F) {
        if ("custom" === M.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = $;
        $ = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (T) {
        "fill" === T && (h = !0);
        let e = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[T];
        e && (y = { ...y, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[T];
        r && !t && (t = r);
      }
      let W = "",
        V = l(p),
        G = l(b);
      if ((I = e) && "object" == typeof I && (s(I) || void 0 !== I.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (((D = t.blurWidth), (z = t.blurHeight), (C = C || t.blurDataURL), (W = t.src), !h))
          if (V || G) {
            if (V && !G) {
              let e = V / t.width;
              G = Math.round(t.height * e);
            } else if (!V && G) {
              let e = G / t.height;
              V = Math.round(t.width * e);
            }
          } else ((V = t.width), (G = t.height));
      }
      let H = !c && !d && ("lazy" === f || void 0 === f);
      ((!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && ((r = !0), (H = !1)),
        M.unoptimized && (r = !0),
        F && !M.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0));
      let Q = l(m),
        X = Object.assign(
          h
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: O,
              }
            : {},
          L ? {} : { color: "transparent" },
          y,
        ),
        K =
          q || "empty" === j
            ? null
            : "blur" === j
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: V, heightInt: G, blurWidth: D, blurHeight: z, blurDataURL: C || "", objectFit: X.objectFit })}")`
              : `url("${j}")`,
        Y = o.includes(X.objectFit) ? ("fill" === X.objectFit ? "100% 100%" : "cover") : X.objectFit,
        Z = K
          ? {
              backgroundSize: Y,
              backgroundPosition: X.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: K,
            }
          : {},
        J = (function ({ config: e, src: t, unoptimized: r, width: i, quality: a, sizes: o, loader: s }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) e = void 0;
              else if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let n = new URLSearchParams(t.slice(r + 1));
                  n.get("dpl") || (n.append("dpl", e), (t = t.slice(0, r) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: u } = (function ({ deviceSizes: e, allSizes: t }, r, n) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n));) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : { widths: [...new Set([r, 2 * r].map((e) => t.find((t) => t >= e) || t[t.length - 1]))], kind: "x" };
            })(e, i, o),
            c = l.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: l
              .map((r, n) => `${s({ config: e, src: t, quality: a, width: r })} ${"w" === u ? r : n + 1}${u}`)
              .join(", "),
            src: s({ config: e, src: t, quality: a, width: l[c] }),
          };
        })({ config: M, src: e, unoptimized: r, width: V, quality: Q, sizes: t, loader: $ }),
        ee = H ? "lazy" : f;
      return {
        props: {
          ...k,
          loading: ee,
          fetchPriority: A,
          width: V,
          height: G,
          decoding: _,
          className: g,
          style: { ...X, ...Z },
          sizes: J.sizes,
          srcSet: J.srcSet,
          src: w || J.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: j, fill: h },
      };
    }
  },
  64673,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return p;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(99667),
      o = e.r(87917),
      s = e.r(21935),
      l = o._(e.r(47452)),
      u = a._(e.r(80021)),
      c = e.r(1500);
    function d() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                [],
              ),
            )
          : e.concat(t);
    }
    let g = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let a = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (a = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (a = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = g.length; t < r; t++) {
                  let r = g[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (a = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !o) && n.has(t) ? (a = !1) : (n.add(t), (i[r] = n));
                    }
                }
            }
            return a;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let p = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, s.jsx)(u.default, { reduceComponentsToState: m, headManager: t, children: e });
    };
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  22279,
  (e, t, r) => {
    "use strict";
    function n({ widthInt: e, heightInt: t, blurWidth: r, blurHeight: i, blurDataURL: a, objectFit: o }) {
      let s = r ? 40 * r : e,
        l = i ? 40 * i : t,
        u = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  56015,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(99667)._(e.r(47452)),
      i = e.r(45052),
      a = n.default.createContext(i.imageConfigDefault);
  },
  92690,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(99667)._(e.r(47452)).default.createContext(null);
  },
  45052,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return a;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  95140,
  (e, t, r) => {
    "use strict";
    (e.i(63731), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(99667),
      o = e.r(50064),
      s = e.r(21710),
      l = a._(e.r(58138));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = s.Image;
  },
  18173,
  (e, t, r) => {
    t.exports = e.r(95140);
  },
  58138,
  (e, t, r) => {
    "use strict";
    (e.i(63731),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(75754),
      i = e.r(31058);
    function a({ config: e, src: t, width: r, quality: o }) {
      let s = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//"))
        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) s = void 0;
        else {
          let e = t.indexOf("?");
          if (-1 !== e) {
            let r = new URLSearchParams(t.slice(e + 1)),
              n = r.get("dpl");
            if (n) {
              ((s = n), r.delete("dpl"));
              let i = r.toString();
              t = t.slice(0, e) + (i ? "?" + i : "");
            }
          }
        }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let l = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/") && s ? `&dpl=${s}` : ""}`;
    }
    a.__next_img_default = !0;
    let o = a;
  },
  80021,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(47452),
      i = "u" < typeof window,
      a = i ? () => {} : n.useLayoutEffect,
      o = i ? () => {} : n.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        a(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        a(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          ),
        ),
        o(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  52743,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s([
      "IconChevronDownMedium",
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
            d: "M17.293 8.79289C17.6835 8.40237 18.3165 8.40237 18.707 8.79289C19.0976 9.18342 19.0976 9.81643 18.707 10.207L12.707 16.207C12.3165 16.5975 11.6835 16.5975 11.293 16.207L5.29297 10.207C4.90245 9.81643 4.90245 9.18342 5.29297 8.79289C5.68349 8.40237 6.31651 8.40237 6.70703 8.79289L12 14.0859L17.293 8.79289Z",
            fill: "currentColor",
          }),
        }),
    ]);
  },
  63072,
  (e) => {
    "use strict";
    var t = e.i(52743);
    e.s(["ChevronDownMediumIcon", () => t.IconChevronDownMedium]);
  },
  34242,
  (e) => {
    "use strict";
    var t = e.i(21935);
    e.s(
      [
        "CopyIcon",
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
              d: "M14 11.25C14 10.5597 13.4403 10 12.75 10H5.25C4.55966 10 4 10.5597 4 11.25V18.75C4 19.4403 4.55966 20 5.25 20H12.75C13.4403 20 14 19.4403 14 18.75V11.25ZM16 14H18.75C19.4403 14 20 13.4403 20 12.75V5.25C20 4.55966 19.4403 4 18.75 4H11.25C10.5597 4 10 4.55966 10 5.25V8H12.75C14.5449 8 16 9.45512 16 11.25V14ZM22 12.75C22 14.5449 20.5449 16 18.75 16H16V18.75C16 20.5449 14.5449 22 12.75 22H5.25C3.45506 22 2 20.5449 2 18.75V11.25C2 9.45513 3.45506 8 5.25 8H8V5.25C8 3.45506 9.45513 2 11.25 2H18.75C20.5449 2 22 3.45506 22 5.25V12.75Z",
              fill: "currentColor",
            }),
          }),
      ],
      34242,
    );
  },
  14156,
  (e) => {
    "use strict";
    var t = e.i(30930);
    e.s(["TransitionStatusDataAttributes", 0, t]);
  },
  45329,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(55399),
      n = e.i(56232),
      i = e.i(75235),
      a = e.i(97824),
      o = e.i(21935);
    function s() {
      return new Map();
    }
    function l() {
      return new Set();
    }
    function u(e, t) {
      return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    }
    e.s([
      "CompositeList",
      0,
      function (e) {
        let { children: c, elementsRef: d, labelsRef: f, onMapChange: g } = e,
          m = (0, n.useStableCallback)(g),
          [, p] = t.useState(!1),
          b = (0, r.useRefWithInit)(l).current,
          h = (0, r.useRefWithInit)(s).current,
          y = t.useRef(0),
          w = t.useRef(!0),
          v = t.useRef(null),
          x = t.useRef(null),
          j = (0, n.useStableCallback)(() => {
            w.current || ((w.current = !0), p((e) => !e));
          }),
          C = (0, n.useStableCallback)((e, t) => {
            (h.set(e, t), j());
          }),
          A = (0, n.useStableCallback)((e) => {
            (h.delete(e), j());
          }),
          _ = (0, n.useStableCallback)((e) => {
            let t = new Map();
            return (
              (d.current.length = 0),
              f && (f.current.length = 0),
              e.forEach((e) => {
                (t.set(e.element, { ...(e.registration.metadata ?? {}), index: e.index }),
                  (d.current[e.index] = e.element),
                  f &&
                    (f.current[e.index] =
                      void 0 !== e.registration.label
                        ? e.registration.label
                        : (e.registration.textRef?.current?.textContent ?? e.element.textContent)));
              }),
              (y.current = d.current.length),
              t
            );
          }),
          T = (0, n.useStableCallback)(() => {
            var e;
            let t,
              r,
              n,
              i,
              [a, o] =
                ((e = h),
                (t = new Set()),
                (r = []),
                (n = []),
                e.forEach((e, i) => {
                  if (!i.isConnected) return;
                  let a = e.index,
                    o = { index: a ?? -1, element: i, registration: e };
                  null === a ? n.push(o) : a >= 0 && (t.add(a), r.push(o));
                }),
                (i = 0),
                n.sort((e, t) => u(e.element, t.element)),
                n.forEach((e) => {
                  for (; t.has(i);) i += 1;
                  ((e.index = i), r.push(e), (i += 1));
                }),
                t.size > 0 && r.sort((e, t) => e.index - t.index),
                [r, n.map((e) => e.element)]),
              s = _(a),
              l = v.current,
              c =
                !l ||
                l.length !== a.length ||
                a.some((e, t) => {
                  let r = l[t];
                  return (
                    e.index !== r.index ||
                    e.element !== r.element ||
                    e.registration.index !== r.registration.index ||
                    e.registration.metadata !== r.registration.metadata
                  );
                });
            (!(function (e) {
              if ((x.current?.disconnect(), (x.current = null), "function" != typeof MutationObserver || e.length < 2))
                return;
              let t = new MutationObserver((r) => {
                if (
                  !(function (e) {
                    for (let t of e)
                      for (let e = 0; e < t.removedNodes.length; e += 1) if (t.removedNodes[e].isConnected) return !0;
                    return !1;
                  })(r)
                )
                  return;
                let n = null;
                for (let r of e)
                  if (r.isConnected) {
                    if (n && u(n, r) > 0) {
                      (t.disconnect(), j());
                      return;
                    }
                    n = r;
                  }
              });
              x.current = t;
              let r = new Set();
              for (let t = 1; t < e.length; t += 1) {
                let n = (function (e, t) {
                  let r = e.parentElement;
                  for (; r && !r.contains(t);) r = r.parentElement;
                  return r;
                })(e[t - 1], e[t]);
                n && r.add(n);
              }
              r.forEach((e) => t.observe(e, { childList: !0 }));
            })(o),
              (v.current = a),
              (w.current = !1),
              c && (b.forEach((e) => e(s)), m(s)));
          });
        ((0, i.useIsoLayoutEffect)(
          () => (
            !w.current && v.current && _(v.current),
            () => {
              ((d.current = []), f && (f.current = []));
            }
          ),
          [d, f, _],
        ),
          (0, i.useIsoLayoutEffect)(() => {
            w.current && T();
          }),
          (0, i.useIsoLayoutEffect)(
            () => () => {
              (x.current?.disconnect(), (w.current = !0));
            },
            [],
          ));
        let S = (0, n.useStableCallback)(
            (e) => (
              b.add(e),
              () => {
                b.delete(e);
              }
            ),
          ),
          O = t.useMemo(() => ({ register: C, unregister: A, subscribeMapChange: S, nextIndexRef: y }), [C, A, S, y]);
        return (0, o.jsx)(a.CompositeListContext.Provider, { value: O, children: c });
      },
    ]);
  },
  97824,
  (e) => {
    "use strict";
    e.i(63731);
    var t = e.i(47452);
    let r = t.createContext({
      register: () => {},
      unregister: () => {},
      subscribeMapChange: () => () => {},
      nextIndexRef: { current: 0 },
    });
    e.s([
      "CompositeListContext",
      0,
      r,
      "useCompositeListContext",
      0,
      function () {
        return t.useContext(r);
      },
    ]);
  },
  68716,
  (e) => {
    "use strict";
    var t = e.i(47452),
      r = e.i(75235),
      n = e.i(97824);
    e.s([
      "useCompositeListItem",
      0,
      function (e = {}) {
        let { guess: i, label: a, metadata: o, textRef: s, index: l } = e,
          { register: u, unregister: c, subscribeMapChange: d, nextIndexRef: f } = (0, n.useCompositeListContext)(),
          g = t.useRef(-1),
          [m, p] = t.useState(
            null == l && i
              ? () => {
                  if (-1 === g.current) {
                    let e = f.current;
                    ((f.current += 1), (g.current = e));
                  }
                  return g.current;
                }
              : -1,
          ),
          b = l ?? m,
          h = t.useRef(null),
          y = t.useCallback(
            (e) => {
              let t = h.current;
              (t && c(t), (h.current = e), e && u(e, { metadata: o ?? null, index: l ?? null, label: a, textRef: s }));
            },
            [l, u, c, o, a, s],
          );
        return (
          (0, r.useIsoLayoutEffect)(() => {
            if (null == l)
              return d((e) => {
                let t = h.current ? e.get(h.current)?.index : null;
                null != t && p(t);
              });
          }, [l, d]),
          { ref: y, index: b }
        );
      },
    ]);
  },
  8108,
  (e) => {
    "use strict";
    var t = e.i(79331);
    e.s([
      "useRender",
      0,
      function (e) {
        return (0, t.useRenderElement)(e.defaultTagName ?? "div", e, e);
      },
    ]);
  },
  61305,
  (e) => {
    "use strict";
    var t = e.i(60309);
    e.s([
      "getElementTransform",
      0,
      function (e, r) {
        let n = (r ?? (0, t.ownerWindow)(e).getComputedStyle(e)).transform,
          i = 0,
          a = 0,
          o = 1;
        if (n && "none" !== n) {
          let e = n.match(/matrix(?:3d)?\(([^)]+)\)/);
          if (e) {
            let t = e[1].split(", ").map(parseFloat);
            6 === t.length
              ? ((i = t[4]), (a = t[5]), (o = Math.sqrt(t[0] * t[0] + t[1] * t[1])))
              : 16 === t.length && ((i = t[12]), (a = t[13]), (o = t[0]));
          }
        }
        return { x: i, y: a, scale: o };
      },
    ]);
  },
  69177,
  (e) => {
    e.q("../../../../assets/images/e3952877-icon-google.0me3_e-g89-ei.png");
  },
  81293,
  (e) => {
    e.q("../../../../assets/images/a32888be-icon-slack.2tnril4x7v74t.png");
  },
  37369,
  (e) => {
    e.q("../../../../assets/images/17b4fa94-icon-ycombinator.3g_mp0zdg4us-.png");
  },
  82447,
  (e) => {
    e.q("../../../../assets/images/0f935beb-page-curl-top.1t35kmrgmqhj0.png");
  },
  16699,
  (e) => {
    e.q("../../../../assets/images/f69843de-sample-profile.3kbfbkbz9b977.png");
  },
  28126,
  (e) => {
    e.q("../../../../assets/images/45abbc6d-task-briefing.00ed4ci_knaoh.png");
  },
  42955,
  (e) => {
    e.q("../../../../assets/images/86c950f1-task-park.0eqyq6gfd0zm4.png");
  },
  12519,
  (e) => {
    e.q("../../../../assets/images/25e78862-task-view-amazon.2x755srssjvo7.png");
  },
  5581,
  (e) => {
    e.q("../../../../assets/images/d154bcda-task-view-chase-screenshot-2.1w_va_ioz2l0g.png");
  },
  57619,
  (e) => {
    e.q("../../../../assets/images/2b8f545a-task-view-chase-screenshot.049dbx6i4oitp.png");
  },
  2083,
  (e) => {
    e.q("../../../../assets/images/bea95a6e-task-view-chase.3lqkry5dwyv4c.png");
  },
  27092,
  (e) => {
    e.q("../../../../assets/images/b8e80ef3-task-view-netflix.420h3-1n00_th.png");
  },
  90386,
  (e) => {
    e.q("../../../../assets/images/2b8f545a-task-view-chase-screenshot.049dbx6i4oitp.png");
  },
  88641,
  (e) => {
    e.q("../../../../assets/images/099276e0-task-website-design.3xvdo7pmp6g4z.png");
  },
  90761,
  (e) => {
    e.q("../../../../assets/images/38810c31-1.128t-vhmdbwp7.png");
  },
  58080,
  (e) => {
    e.q("../../../../assets/images/ae4e1158-2.0sjx52o1m2j5u.png");
  },
  17905,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(18173),
      i = e.i(79203),
      a = e.i(63985),
      o = e.i(16950),
      s = e.i(53094),
      l = e.i(94814);
    let u = {
        src: e.i(90761).default,
        width: 1200,
        height: 1141,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhElEQVR42mWO2wrEIBBD/f/f3IU+WKVa7zqTdVxa9hIICIk5o2qt8N4jxojeO36lQgg4DofUCcT4L7TWkHJGaIQxG8zfVudZsG0GKSUQ0f1T3mJl9obnw8FaizyXPktrwex1FYwx69hSCgR7I0ppMwgLIcHlMcYbMQPWWrNzjkWyfFn0Al3a+o3iov7zAAAAAElFTkSuQmCC",
      },
      c = {
        src: e.i(58080).default,
        width: 1200,
        height: 1141,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgUlEQVR42n2OWQoDQQgFvf9FZ+sl9J7eXloDYfIzQiFqoZJzDkopXNclmeFerRUcdBwG27Zh33ec5ymwbK1Faw3kXEEIESklacw5cQ9K+b2EIMQYkXNG7x1jjK/wchFK6999Rq/aey8i2SUYY/7gTTzkcxRikrWlFIG/v/9Bi/nEB/o09/LIqDahAAAAAElFTkSuQmCC",
      },
      d = { once: !0, amount: 0.35 },
      f = { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
      g = (e) => ({ ...f, delay: 2 === e ? 1 : 0.06 + 0.12 * e }),
      m = { ...f, delay: 0.5 },
      p = ({
        children: e,
        className: n,
        dimsWithThirdReveal: a = !1,
        revealIndex: o = 0,
        reduceMotion: s,
        reveal: u,
        ...c
      }) => {
        let [d, p] = (0, r.useState)(!1),
          b = { opacity: 0, y: 20 };
        (0, r.useEffect)(() => {
          if (!u || s || !a) return void p(!1);
          let e = setTimeout(() => p(!0), 1e3);
          return () => {
            (clearTimeout(e), p(!1));
          };
        }, [u, s, a]);
        let h = u ? { opacity: a && (s || d) ? 0.6 : 1, y: 0 } : b,
          y = u ? (a ? (d ? { opacity: f } : m) : g(o)) : f;
        return (0, t.jsx)(i.motion.div, {
          className: (0, l.cn)(
            "pointer-events-none relative h-72 w-80 overflow-hidden rounded-t-xl border border-b-0 border-black/8 shadow-xl select-none md:h-80 md:w-96 lg:h-96 lg:w-108 [&_img]:object-cover [&_img]:object-top",
            n,
          ),
          initial: !s && b,
          animate: h,
          transition: y,
          ...c,
          children: e,
        });
      };
    e.s(
      [
        "MemoryIllustration",
        0,
        () => {
          let e = (0, r.useRef)(null),
            m = (0, o.useReducedMotion)() ?? !1,
            b = (0, a.useInView)(e, d),
            h = m || b;
          return (0, t.jsx)(s.SectionContent, {
            className: "overflow-hidden px-0! py-0! md:px-8! xl:px-16!",
            children: (0, t.jsxs)("div", {
              ref: e,
              className:
                "mx-auto grid h-96 max-w-4xl grid-cols-1 gap-4 overflow-hidden md:h-96 md:gap-6 lg:grid-cols-2",
              children: [
                (0, t.jsx)("div", {
                  className: "relative min-h-24 md:size-full",
                  children: (0, t.jsx)(i.motion.div, {
                    className: (0, l.cn)(
                      "absolute top-4 left-4 md:left-0",
                      "text-primary bg-muted max-w-80 rounded-xl px-4 py-2.5 text-sm font-medium md:text-base",
                    ),
                    initial: !m && { opacity: 0, y: 20 },
                    animate: h ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: h ? g(0) : f,
                    children: "Find the candidate I opened yesterday and prep interview notes",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "relative min-h-72 md:size-full",
                  children: [
                    (0, t.jsx)(p, {
                      className: "absolute -bottom-10 max-md:left-20 md:right-28",
                      dimsWithThirdReveal: !0,
                      reduceMotion: m,
                      reveal: h,
                      children: (0, t.jsx)(n.default, { src: u, alt: "Illustration 1", unoptimized: !0, fill: !0 }),
                    }),
                    (0, t.jsx)(p, {
                      className: "absolute -right-16 bottom-0 md:right-0",
                      revealIndex: 2,
                      reduceMotion: m,
                      reveal: h,
                      children: (0, t.jsx)(n.default, { src: c, alt: "Illustration 1", unoptimized: !0, fill: !0 }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
      ],
      17905,
    );
  },
  6288,
  (e) => {
    e.q("../../../../assets/images/57676195-icons.07sng_y96t659.webp");
  },
  65165,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(79203),
      i = e.i(63985),
      a = e.i(16950),
      o = e.i(94814);
    let s = { once: !1, amount: 0.6 },
      l = (function ([e, t, r, n, i], a) {
        return `linear-gradient(90deg in srgb, ${a} 0%, ${a} 42%, ${i} 50%, ${n} 62%, ${r} 70%, ${t} 78%, ${e} 84%, ${e} 100%)`;
      })(["#D0D6D8", "#38BDF8", "#1662FD", "#38BDF8", "#D0D6D8"], "var(--color-mist-950)");
    function u({
      backgroundSize: e,
      baseColor: l = "var(--color-primary)",
      children: c,
      className: d,
      delay: f = 0,
      finishedClassName: g,
      finishedColor: m,
      sweepDuration: p,
      sweepGradient:
        b = "linear-gradient(90deg in oklch, #0000 0%, #0000 calc(50% - 15%), oklch(0.7 0.25 25) calc(50% - 12%), oklch(0.75 0.22 70) calc(50% - 8%), oklch(0.78 0.2 140) calc(50% - 4%), oklch(0.75 0.22 200) 50%, oklch(0.72 0.24 260) calc(50% + 4%), oklch(0.7 0.26 320) calc(50% + 8%), oklch(0.72 0.24 350) calc(50% + 12%), #0000 calc(50% + 15%), #0000 100%)",
      sweepRepeat: h = 1,
    }) {
      let y = m ?? l,
        w = y !== l,
        v = e ?? (w ? "400% 100%" : "250% 100%"),
        x = (0, r.useRef)(null),
        j = (0, a.useReducedMotion)() ?? !1,
        C = (0, i.useInView)(x, s),
        A = (0, r.useRef)(!1),
        [_, T] = (0, r.useState)(0),
        [S, O] = (0, r.useState)("waiting");
      ((0, r.useEffect)(() => {
        if (!j) {
          if (!C) {
            ((A.current = !1), O("waiting"));
            return;
          }
          (A.current || (O("waiting"), T((e) => e + 1)), (A.current = !0));
        }
      }, [C, j]),
        (0, r.useEffect)(() => {
          if (j || "waiting" !== S || !C) return;
          if (f <= 0) return void O("animating");
          let e = setTimeout(() => O("animating"), 1e3 * f);
          return () => clearTimeout(e);
        }, [_, f, C, S, j]));
      let E = w
        ? { backgroundImage: b, backgroundSize: v }
        : { backgroundImage: `${b}, linear-gradient(${l}, ${l})`, backgroundSize: `${v}, auto` };
      return j
        ? (0, t.jsx)("span", { ref: x, className: (0, o.cn)("inline", d, g), style: { color: y }, children: c })
        : (0, t.jsx)("span", {
            ref: x,
            className: "inline",
            children:
              "animating" === S
                ? (0, t.jsx)(
                    n.motion.span,
                    {
                      animate: { backgroundPosition: "0% center" },
                      className: (0, o.cn)(
                        "relative inline-block bg-clip-text text-transparent [background-repeat:no-repeat,padding-box]",
                        d,
                      ),
                      initial: { backgroundPosition: "100% center" },
                      onAnimationComplete: () => O("finished"),
                      style: E,
                      transition: { duration: p ?? (w ? 0.65 : 0.22), ease: [0.33, 0, 0.2, 1], repeat: w ? 0 : h },
                      children: c,
                    },
                    _,
                  )
                : "finished" === S
                  ? (0, t.jsx)("span", { className: (0, o.cn)(d, g), style: { color: y }, children: c })
                  : (0, t.jsx)("span", { className: d, style: { color: l }, children: c }),
          });
    }
    e.s([
      "GradientSweepText",
      0,
      u,
      "HighlightAnimatedText",
      0,
      function (e) {
        return (0, t.jsx)(u, {
          baseColor: "#D0D6D8",
          finishedClassName: "text-mist-950",
          finishedColor: "var(--color-mist-950)",
          sweepGradient: l,
          ...e,
        });
      },
    ]);
  },
  13838,
  (e) => {
    "use strict";
    var t = e.i(21935),
      r = e.i(47452),
      n = e.i(77537),
      i = e.i(62038),
      a = e.i(8108),
      o = e.i(19205),
      s = e.i(94814),
      l = e.i(30896),
      u = e.i(9006),
      c = e.i(46873),
      d = e.i(97089);
    let f = (0, r.createContext)(null),
      g = new Map([
        ["macos", "macOS"],
        ["windows", "Windows"],
      ]);
    e.s([
      "DownloadButton",
      0,
      ({ render: e, ...g }) => {
        let m = (0, n.useRouter)(),
          [p, b] = (0, r.useState)({ device: "desktop", os: "etc" }),
          [h, y] = (0, r.useState)(!1),
          w = (0, d.getPrimaryAction)(p);
        (0, r.useEffect)(() => {
          (0, d.getPlatform)().then(b);
        }, []);
        let v = "disabled" === w,
          x =
            "desktop" === p.device && "macos" === p.os
              ? "Requires macOS 15 or later"
              : "desktop" === p.device && "windows" === p.os
                ? "Requires Windows 10 version 22H2 or later, or Windows 11"
                : "Not available on this platform",
          j = (0, a.useRender)({
            defaultTagName: "button",
            props: (0, i.mergeProps)(g, {
              "aria-disabled": v || void 0,
              className: (0, s.cn)(v && "cursor-not-allowed opacity-50"),
              onClick: (e) => {
                v
                  ? e.preventDefault()
                  : ((0, o.captureLandingEvent)("landing.download.cta_click", {
                      action: w,
                      device: p.device,
                      os: p.os,
                    }),
                    (() => {
                      if ("disabled" !== w) {
                        if ("download" === w) return m.push(`/download?os=${"windows" === p.os ? "win" : "mac"}`);
                        "send-link" === w && y(!0);
                      }
                    })());
              },
            }),
            render: e,
          });
        return (0, t.jsxs)(f, {
          value: { platform: p, action: w },
          children: [
            v
              ? (0, t.jsxs)(u.Tooltip, {
                  children: [
                    (0, t.jsx)(u.TooltipTrigger, { delay: 0, render: j }),
                    (0, t.jsx)(u.TooltipContent, { children: x }),
                  ],
                })
              : j,
            (0, t.jsx)(l.Dialog, {
              open: h,
              onOpenChange: y,
              children: (0, t.jsx)(l.DialogContent, {
                children: "send-link" === w && (0, t.jsx)(c.MobileDownloadDialog, { onDone: y }),
              }),
            }),
          ],
        });
      },
      "DownloadButtonText",
      0,
      ({ size: e = "default", children: t }) => {
        let { platform: n, action: i } = (() => {
          let e = (0, r.use)(f);
          if (!e) throw Error("useDownloadButtonContext must be used within DownloadButtonContext");
          return e;
        })();
        if ("send-link" === i) return "Send download link";
        if ("disabled" === i || "short" === e) return t ?? "Download";
        let a = g.get(n.os) ?? "macOS";
        return t ?? `Download for ${a}`;
      },
    ]);
  },
]);
