(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  11845,
  (t) => {
    "use strict";
    let r, i;
    function n(t) {
      return t;
    }
    function a(t) {
      return t;
    }
    function o() {
      return (t) => t;
    }
    function u(t) {}
    function s(t) {
      throw Error("Unexpected value in exhaustive check");
    }
    function l(t) {}
    function d(t) {
      let r = Object.values(t).filter((t) => "number" == typeof t);
      return Object.entries(t)
        .filter(([t, i]) => -1 === r.indexOf(+t))
        .map(([t, r]) => r);
    }
    function c(t, r = "|") {
      return t.map((t) => K(t)).join(r);
    }
    function f(t, r) {
      return "bigint" == typeof r ? r.toString() : r;
    }
    (t.s(
      [
        "$ZodAsyncError",
        () => eV,
        "$ZodEncodeError",
        () => eM,
        "$brand",
        () => eR,
        "$constructor",
        () => eL,
        "NEVER",
        () => eE,
        "config",
        () => eB,
        "globalConfig",
        () => eF,
      ],
      71739,
    ),
      t.s(
        [
          "BIGINT_FORMAT_RANGES",
          () => q,
          "CONSTANT_CATCH",
          () => eZ,
          "Class",
          () => ew,
          "NUMBER_FORMAT_RANGES",
          () => X,
          "aborted",
          () => eo,
          "allowsEval",
          () => E,
          "assert",
          () => l,
          "assertEqual",
          () => n,
          "assertIs",
          () => u,
          "assertNever",
          () => s,
          "assertNotEqual",
          () => a,
          "assignProp",
          () => _,
          "attachSchema",
          () => ed,
          "base64ToUint8Array",
          () => ey,
          "base64urlToUint8Array",
          () => e_,
          "cached",
          () => p,
          "captureStackTrace",
          () => Z,
          "cleanEnum",
          () => e$,
          "cleanRegex",
          () => g,
          "clone",
          () => B,
          "cloneDef",
          () => z,
          "codePointLength",
          () => ep,
          "constantCatch",
          () => ej,
          "createTransparentProxy",
          () => W,
          "defineLazy",
          () => y,
          "defineLazyInternal",
          () => eA,
          "derived",
          () => eD,
          "esc",
          () => A,
          "escapeRegex",
          () => F,
          "explicitlyAborted",
          () => eu,
          "extend",
          () => ee,
          "finalizeIssue",
          () => ec,
          "floatSafeRemainder",
          () => h,
          "getElementAtPath",
          () => D,
          "getEnumValues",
          () => d,
          "getLengthableOrigin",
          () => ev,
          "getParsedType",
          () => R,
          "getSizableOrigin",
          () => ef,
          "hexToUint8Array",
          () => ek,
          "hide",
          () => ez,
          "installLazyProp",
          () => eP,
          "isObject",
          () => j,
          "isPlainObject",
          () => C,
          "issue",
          () => eh,
          "joinValues",
          () => c,
          "jsonStringifyReplacer",
          () => f,
          "members",
          () => eS,
          "merge",
          () => ei,
          "mergeDefs",
          () => O,
          "normalizeParams",
          () => J,
          "nullish",
          () => v,
          "numKeys",
          () => L,
          "objectClone",
          () => b,
          "omit",
          () => Q,
          "optionalKeys",
          () => G,
          "own",
          () => eO,
          "parsedType",
          () => eg,
          "partial",
          () => en,
          "pick",
          () => H,
          "prefixIssues",
          () => es,
          "primitiveTypes",
          () => M,
          "promiseAllObject",
          () => N,
          "propertyKeyTypes",
          () => V,
          "randomString",
          () => U,
          "rawShape",
          () => x,
          "required",
          () => ea,
          "safeExtend",
          () => er,
          "shallowClone",
          () => T,
          "slugify",
          () => P,
          "stringifyPrimitive",
          () => K,
          "toZod",
          () => o,
          "uint8ArrayToBase64",
          () => eb,
          "uint8ArrayToBase64url",
          () => ex,
          "uint8ArrayToHex",
          () => eI,
          "unwrapMessage",
          () => el,
        ],
        60082,
      ),
      t.s([], 51639),
      t.i(51639),
      t.s([], 88895),
      t.i(88895));
    class m {
      constructor(t) {
        ((this._getter = t), (this._value = void 0));
      }
      get value() {
        let t = this._getter;
        return (void 0 !== t && ((this._value = t()), (this._getter = void 0)), this._value);
      }
    }
    function p(t) {
      return new m(t);
    }
    function v(t) {
      return null == t;
    }
    function g(t) {
      let r = +!!t.startsWith("^"),
        i = t.endsWith("$") ? t.length - 1 : t.length;
      return t.slice(r, i);
    }
    function h(t, r) {
      let i = t / r,
        n = Math.round(i),
        a = 4 * Number.EPSILON * Math.max(Math.abs(i), 1);
      return Math.abs(i - n) < a ? 0 : i - n;
    }
    let $ = Symbol("evaluating");
    function y(t, r, i) {
      let n;
      Object.defineProperty(t, r, {
        get() {
          if (n !== $) return (void 0 === n && ((n = $), (n = i())), n);
        },
        set(i) {
          Object.defineProperty(t, r, { value: i });
        },
        configurable: !0,
      });
    }
    function b(t) {
      return Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t));
    }
    function _(t, r, i) {
      Object.defineProperty(t, r, { value: i, writable: !0, enumerable: !0, configurable: !0 });
    }
    function x(t) {
      let r = Object.getOwnPropertyDescriptor(t, "shape");
      return r?.get ? r.get.raw : r?.value;
    }
    function k(t) {
      return x(t._zod.def) ?? t._zod.def.shape;
    }
    function I(t, r, i) {
      Object.defineProperty(t, r, {
        get() {
          let t = i();
          return (_(this, r, t), t);
        },
        enumerable: !0,
        configurable: !0,
      });
    }
    function w(t, r, i) {
      r in t ? _(t, r, i) : (t[r] = i);
    }
    function S(t, r, i, n) {
      let a = k(r);
      for (let o of i) {
        let i = Object.getOwnPropertyDescriptor(a, o);
        i.enumerable &&
          (i.get
            ? I(t, o, () => {
                let t = r._zod.def.shape[o];
                return n ? n(t, o) : t;
              })
            : w(t, o, n ? n(i.value, o) : i.value));
      }
    }
    function O(...t) {
      let r = {};
      for (let i of t) Object.assign(r, Object.getOwnPropertyDescriptors(i));
      return Object.defineProperties({}, r);
    }
    function z(t) {
      return O(t._zod.def);
    }
    function D(t, r) {
      return r ? r.reduce((t, r) => t?.[r], t) : t;
    }
    function N(t) {
      let r = Object.keys(t);
      return Promise.all(r.map((r) => t[r])).then((t) => {
        let i = {};
        for (let n = 0; n < r.length; n++) i[r[n]] = t[n];
        return i;
      });
    }
    function U(t = 10) {
      let r = "abcdefghijklmnopqrstuvwxyz",
        i = "";
      for (let n = 0; n < t; n++) i += r[Math.floor(Math.random() * r.length)];
      return i;
    }
    function A(t) {
      return JSON.stringify(t);
    }
    function P(t) {
      return t
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    let Z = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {};
    function j(t) {
      return "object" == typeof t && null !== t && !Array.isArray(t);
    }
    let E = p(() => {
      if (eF.jitless || ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))) return !1;
      try {
        return (Function(""), !0);
      } catch (t) {
        return !1;
      }
    });
    function C(t) {
      if (!1 === j(t)) return !1;
      let r = t.constructor;
      if (void 0 === r || "function" != typeof r) return !0;
      let i = r.prototype;
      return !1 !== j(i) && !1 !== Object.prototype.hasOwnProperty.call(i, "isPrototypeOf");
    }
    function T(t) {
      return C(t)
        ? { ...t }
        : Array.isArray(t)
          ? [...t]
          : t instanceof Map
            ? new Map(t)
            : t instanceof Set
              ? new Set(t)
              : t;
    }
    function L(t) {
      let r = 0;
      for (let i in t) Object.prototype.hasOwnProperty.call(t, i) && r++;
      return r;
    }
    let R = (t) => {
        let r = typeof t;
        switch (r) {
          case "undefined":
            return "undefined";
          case "string":
            return "string";
          case "number":
            return Number.isNaN(t) ? "nan" : "number";
          case "boolean":
            return "boolean";
          case "function":
            return "function";
          case "bigint":
            return "bigint";
          case "symbol":
            return "symbol";
          case "object":
            if (Array.isArray(t)) return "array";
            if (null === t) return "null";
            if (t.then && "function" == typeof t.then && t.catch && "function" == typeof t.catch) return "promise";
            if ("u" > typeof Map && t instanceof Map) return "map";
            if ("u" > typeof Set && t instanceof Set) return "set";
            if ("u" > typeof Date && t instanceof Date) return "date";
            if ("u" > typeof File && t instanceof File) return "file";
            return "object";
          default:
            throw Error(`Unknown data type: ${r}`);
        }
      },
      V = new Set(["string", "number", "symbol"]),
      M = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function F(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function B(t, r, i) {
      let n = new t._zod.constr(r ?? t._zod.def);
      return ((!r || i?.parent) && (n._zod.parent = t), n);
    }
    function J(t) {
      if (!t) return {};
      if ("string" == typeof t) return { error: () => t };
      if (t?.message !== void 0) {
        if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        t.error = t.message;
      }
      return (delete t.message, "string" == typeof t.error) ? { ...t, error: () => t.error } : t;
    }
    function W(t) {
      let r;
      return new Proxy(
        {},
        {
          get: (i, n, a) => (r ?? (r = t()), Reflect.get(r, n, a)),
          set: (i, n, a, o) => (r ?? (r = t()), Reflect.set(r, n, a, o)),
          has: (i, n) => (r ?? (r = t()), Reflect.has(r, n)),
          deleteProperty: (i, n) => (r ?? (r = t()), Reflect.deleteProperty(r, n)),
          ownKeys: (i) => (r ?? (r = t()), Reflect.ownKeys(r)),
          getOwnPropertyDescriptor: (i, n) => (r ?? (r = t()), Reflect.getOwnPropertyDescriptor(r, n)),
          defineProperty: (i, n, a) => (r ?? (r = t()), Reflect.defineProperty(r, n, a)),
        },
      );
    }
    function K(t) {
      return "bigint" == typeof t ? t.toString() + "n" : "string" == typeof t ? `"${t}"` : `${t}`;
    }
    function G(t) {
      return Object.keys(t).filter((r) => void 0 !== t[r]._zod.optin && "optional" === t[r]._zod.optout);
    }
    let X = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      q = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
      };
    function H(t, r) {
      let i = t._zod.def,
        n = i.checks;
      if (n && n.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
      let a = {};
      return (S(a, t, Y(t, r)), B(t, O(i, { shape: a, checks: [] })));
    }
    function Y(t, r) {
      let i = k(t),
        n = [];
      for (let t of Reflect.ownKeys(r)) {
        if (!Object.getOwnPropertyDescriptor(i, t)?.enumerable) throw Error(`Unrecognized key: "${String(t)}"`);
        r[t] && n.push(t);
      }
      return n;
    }
    function Q(t, r) {
      let i = t._zod.def,
        n = i.checks;
      if (n && n.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
      let a = new Set(Y(t, r)),
        o = {};
      return (
        S(
          o,
          t,
          Reflect.ownKeys(k(t)).filter((t) => !a.has(t)),
        ),
        B(t, O(i, { shape: o, checks: [] }))
      );
    }
    function ee(t, r) {
      if (!C(r)) throw Error("Invalid input to extend: expected a plain object");
      let i = t._zod.def.checks;
      if (i && i.length > 0) {
        let i = k(t);
        for (let t of Reflect.ownKeys(r))
          if (void 0 !== Object.getOwnPropertyDescriptor(i, t))
            throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
      return B(t, O(t._zod.def, { shape: et(t, r) }));
    }
    function et(t, r) {
      let i = {};
      S(i, t, Reflect.ownKeys(k(t)));
      for (let t of Reflect.ownKeys(r)) {
        let n = Object.getOwnPropertyDescriptor(r, t);
        n.enumerable && (n.get ? I(i, t, () => r[t]) : w(i, t, n.value));
      }
      return i;
    }
    function er(t, r) {
      if (!C(r)) throw Error("Invalid input to safeExtend: expected a plain object");
      return B(t, O(t._zod.def, { shape: et(t, r) }));
    }
    function ei(t, r) {
      if (!r?._zod?.def)
        throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
      if (t._zod.def.checks?.length)
        throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
      let i = {};
      (S(i, t, Reflect.ownKeys(k(t))), S(i, r, Reflect.ownKeys(k(r))));
      let n = O(t._zod.def, {
        shape: i,
        get catchall() {
          return r._zod.def.catchall;
        },
        checks: r._zod.def.checks ?? [],
      });
      return B(t, n);
    }
    function en(t, r, i, n = "partial") {
      let a = r._zod.def.checks;
      if (a && a.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`);
      let o = i ? new Set(Y(r, i)) : void 0,
        u = {};
      return (
        S(
          u,
          r,
          Reflect.ownKeys(k(r)),
          t && ((r, i) => (o && !o.has(i) ? r : new t({ type: "optional", innerType: r }))),
        ),
        B(r, O(r._zod.def, { shape: u, checks: [] }))
      );
    }
    function ea(t, r, i) {
      let n = i ? new Set(Y(r, i)) : void 0,
        a = {};
      return (
        S(a, r, Reflect.ownKeys(k(r)), (r, i) => (n && !n.has(i) ? r : new t({ type: "nonoptional", innerType: r }))),
        B(r, O(r._zod.def, { shape: a }))
      );
    }
    function eo(t, r = 0) {
      if (!0 === t.aborted) return !0;
      for (let i = r; i < t.issues.length; i++) if (t.issues[i]?.continue !== !0) return !0;
      return !1;
    }
    function eu(t, r = 0) {
      if (!0 === t.aborted) return !0;
      for (let i = r; i < t.issues.length; i++) if (t.issues[i]?.continue === !1) return !0;
      return !1;
    }
    function es(t, r) {
      return r.map((r) => (r.path ?? (r.path = []), r.path.unshift(t), r));
    }
    function el(t) {
      return "string" == typeof t ? t : t?.message;
    }
    function ed(t, r, i) {
      var n;
      for (let a = r; a < t.length; a++) (n = t[a]).schema ?? (n.schema = i);
    }
    function ec(t, r, i) {
      let n = t.inst?._zod?.traits;
      n?.has("$ZodType") && (n.has("$ZodCheck") ? (t.schema ?? (t.schema = t.inst)) : (t.schema = t.inst));
      let a = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0,
        o = t.message
          ? t.message
          : (el(t.inst?._zod.def?.error?.(t)) ??
            el(a?.(t)) ??
            el(r?.error?.(t)) ??
            el(i.customError?.(t)) ??
            el(i.localeError?.(t)) ??
            "Invalid input"),
        u = {};
      for (let r of Object.keys(t))
        "inst" !== r && "schema" !== r && "continue" !== r && "input" !== r && "__proto__" !== r && (u[r] = t[r]);
      return (u.path ?? (u.path = []), (u.message = o), r?.reportInput && (u.input = t.input), u);
    }
    function ef(t) {
      return t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof File ? "file" : "unknown";
    }
    let em = /[\uD800-\uDBFF]/;
    function ep(t) {
      let r = t.length;
      if (!em.test(t)) return r;
      let i = r;
      for (let n = 0; n < r - 1; n++)
        (64512 & t.charCodeAt(n)) == 55296 && (64512 & t.charCodeAt(n + 1)) == 56320 && (i--, n++);
      return i;
    }
    function ev(t) {
      return Array.isArray(t) ? "array" : "string" == typeof t ? "string" : "unknown";
    }
    function eg(t) {
      let r = typeof t;
      switch (r) {
        case "number":
          return Number.isNaN(t) ? "nan" : "number";
        case "object":
          if (null === t) return "null";
          if (Array.isArray(t)) return "array";
          if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor)
            return t.constructor.name;
      }
      return r;
    }
    function eh(...t) {
      let [r, i, n] = t;
      return "string" == typeof r ? { message: r, code: "custom", input: i, inst: n } : { ...r };
    }
    function e$(t) {
      return Object.entries(t)
        .filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10)))
        .map((t) => t[1]);
    }
    function ey(t) {
      let r = atob(t),
        i = new Uint8Array(r.length);
      for (let t = 0; t < r.length; t++) i[t] = r.charCodeAt(t);
      return i;
    }
    function eb(t) {
      let r = "";
      for (let i = 0; i < t.length; i++) r += String.fromCharCode(t[i]);
      return btoa(r);
    }
    function e_(t) {
      let r = t.replace(/-/g, "+").replace(/_/g, "/"),
        i = "=".repeat((4 - (r.length % 4)) % 4);
      return ey(r + i);
    }
    function ex(t) {
      return eb(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function ek(t) {
      let r = t.replace(/^0x/, "");
      if (r.length % 2 != 0) throw Error("Invalid hex string length");
      let i = new Uint8Array(r.length / 2);
      for (let t = 0; t < r.length; t += 2) i[t / 2] = Number.parseInt(r.slice(t, t + 2), 16);
      return i;
    }
    function eI(t) {
      return Array.from(t)
        .map((t) => t.toString(16).padStart(2, "0"))
        .join("");
    }
    class ew {
      constructor(...t) {}
    }
    function eS(t, r) {
      for (let i in r) {
        let n = Object.getOwnPropertyDescriptor(r, i);
        n.get
          ? Object.defineProperty(t, i, { ...n, enumerable: !1 })
          : (function (t, r, i) {
              Object.defineProperty(t, r, {
                configurable: !0,
                get() {
                  return this == null ? i : eO(this, r, i.bind(this));
                },
                set(t) {
                  eO(this, r, t);
                },
              });
            })(t, i, n.value);
      }
    }
    function eO(t, r, i, n = !0) {
      return (Object.defineProperty(t, r, { configurable: !0, writable: !0, enumerable: n, value: i }), i);
    }
    function ez(t, r, i) {
      return eO(t, r, i, !1);
    }
    function eD(t, r) {
      for (let i in t) {
        let n = t[i];
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get() {
            return eO(this, i, n(this));
          },
          set(t) {
            eO(this, i, t);
          },
        });
      }
      return r;
    }
    let eN = !1,
      eU = {
        configurable: !0,
        get() {
          eN = !0;
        },
      };
    function eA(t, i, n) {
      let a = Object.getPrototypeOf(t._zod);
      if (i in a && r !== t._zod) {
        r = void 0;
        return;
      }
      ((r = t._zod),
        Object.defineProperty(a, i, {
          configurable: !0,
          get() {
            Object.defineProperty(this, i, eU);
            let t = eN;
            eN = !1;
            try {
              let r = n(this);
              return (
                eN ? delete this[i] : Object.defineProperty(this, i, { configurable: !0, writable: !0, value: r }),
                (eN = eN || t),
                r
              );
            } catch (r) {
              throw (delete this[i], (eN = eN || t), r);
            }
          },
          set(t) {
            Object.defineProperty(this, i, { configurable: !0, writable: !0, value: t });
          },
        }));
    }
    function eP(t, r, i, n) {
      let a,
        o = r in (a = Object.getPrototypeOf(t)) ? void 0 : a;
      o &&
        Object.defineProperty(o, r, {
          configurable: !0,
          get() {
            let t = { configurable: !0, writable: !0, enumerable: n, value: void 0 };
            return (Object.defineProperty(this, r, t), (t.value = i(this)), Object.defineProperty(this, r, t), t.value);
          },
          set(t) {
            Object.defineProperty(this, r, { configurable: !0, writable: !0, enumerable: n, value: t });
          },
        });
    }
    let eZ = "~constantCatch";
    function ej(t) {
      let r = () => t;
      return ((r[eZ] = !0), r);
    }
    let eE = Object.freeze({ status: "aborted" }),
      eC = { value: void 0, enumerable: !1 },
      eT = "captureStackTrace" in Error ? Error : null;
    function eL(t, r, i, n) {
      function a(t) {
        ((this.def = t), (this.constr = d), (this.traits = new Set()));
      }
      a.prototype = {};
      let o = i && new WeakSet();
      function u(n, u) {
        if (n._zod) {
          if (n._zod.traits.has(t)) return;
        } else {
          eC.value = new a(u);
          try {
            Object.defineProperty(n, "_zod", eC);
          } finally {
            eC.value = void 0;
          }
        }
        if ((n._zod.traits.add(t), r(n, u), o)) {
          let t = Object.getPrototypeOf(n),
            r = n._zod.constr.prototype,
            a = t;
          for (; a && a !== r;) a = Object.getPrototypeOf(a);
          let u = a ?? t;
          o.has(u) || (o.add(u), eS(u, i));
        }
        let s = d.prototype;
        for (let t in s) Object.prototype.hasOwnProperty.call(s, t) && (t in n || (n[t] = s[t].bind(n)));
      }
      let s = n?.Parent ?? Object;
      class l extends s {}
      function d(t) {
        let r = n?.Parent
          ? (function (t) {
              let r = eT;
              if (r) {
                let i = r.stackTraceLimit;
                if ("number" == typeof i) {
                  try {
                    r.stackTraceLimit = 0;
                  } catch {
                    return ((eT = null), new t());
                  }
                  try {
                    return new t();
                  } finally {
                    r.stackTraceLimit = i;
                  }
                }
              }
              return new t();
            })(l)
          : this;
        u(r, t);
        let i = r._zod.deferred;
        if (i) {
          for (let t of i) t();
          r._zod.deferred = void 0;
        }
        let a = globalThis.__zod_globalConfig?.postProcessor;
        return (a && a(r), r);
      }
      return (
        Object.defineProperty(l, "name", { value: t }),
        Object.defineProperty(d, "init", { value: u }),
        Object.defineProperty(d, Symbol.hasInstance, {
          value: (r) => (!!n?.Parent && r instanceof n.Parent) || r?._zod?.traits?.has(t),
        }),
        Object.defineProperty(d, "name", { value: t }),
        d
      );
    }
    let eR = Symbol("zod_brand");
    class eV extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    class eM extends Error {
      constructor(t) {
        (super(`Encountered unidirectional transform during encode: ${t}`), (this.name = "ZodEncodeError"));
      }
    }
    (nQ = globalThis).__zod_globalConfig ?? (nQ.__zod_globalConfig = {});
    let eF = globalThis.__zod_globalConfig;
    function eB(t) {
      return (t && Object.assign(eF, t), eF);
    }
    t.i(71739);
    let eJ = {
        get: function () {
          let t = this._zod;
          return (t.message ?? (t.message = JSON.stringify(t.def, f, 2)), t.message);
        },
        set: function (t) {
          this._zod.message = t;
        },
        enumerable: !0,
        configurable: !0,
      },
      eW = { value: void 0, enumerable: !1 },
      eK = new WeakSet([Object.prototype, Error.prototype]),
      eG = (t, r) => {
        ((t.name = "$ZodError"),
          (eW.value = r),
          Object.defineProperty(t, "issues", eW),
          (eW.value = void 0),
          Object.defineProperty(t, "message", eJ));
        let i = Object.getPrototypeOf(t);
        eK.has(i) ||
          (eK.add(i),
          Object.defineProperty(i, "toString", {
            configurable: !0,
            enumerable: !1,
            get() {
              let t = () => this.message;
              return (Object.defineProperty(this, "toString", { value: t, configurable: !0, writable: !0 }), t);
            },
            set(t) {
              Object.defineProperty(this, "toString", { value: t, configurable: !0, writable: !0 });
            },
          }));
      },
      eX = eL("$ZodError", eG),
      eq = eL("$ZodError", eG, void 0, { Parent: Error });
    function eH(t, r = (t) => t.message) {
      let i = {},
        n = [];
      for (let u of t.issues)
        if (u.path.length > 0) {
          var a, o;
          ((a = u.path[0]),
          (o = () => []),
          !Object.prototype.hasOwnProperty.call(i, a) &&
            ("__proto__" === a
              ? Object.defineProperty(i, a, { value: o(), writable: !0, enumerable: !0, configurable: !0 })
              : (i[a] = o())),
          i[a]).push(r(u));
        } else n.push(r(u));
      return { formErrors: n, fieldErrors: i };
    }
    function eY(t, r = (t) => t.message) {
      let i = { _errors: [] },
        n = (t, a = []) => {
          for (let o of t.issues)
            if ("invalid_union" === o.code && o.errors.length) o.errors.map((t) => n({ issues: t }, [...a, ...o.path]));
            else if ("invalid_key" === o.code) n({ issues: o.issues }, [...a, ...o.path]);
            else if ("invalid_element" === o.code) n({ issues: o.issues }, [...a, ...o.path]);
            else {
              let t = [...a, ...o.path];
              if (0 === t.length) i._errors.push(r(o));
              else {
                let n = i,
                  a = 0;
                for (; a < t.length;) {
                  let i = t[a],
                    u = a === t.length - 1;
                  if ("_errors" === i) {
                    (u && n._errors.push(r(o)), a++);
                    continue;
                  }
                  Object.prototype.hasOwnProperty.call(n, i) ||
                    Object.defineProperty(n, i, {
                      value: { _errors: [] },
                      enumerable: !0,
                      writable: !0,
                      configurable: !0,
                    });
                  let s = n[i];
                  (u && s._errors.push(r(o)), (n = s), a++);
                }
              }
            }
        };
      return (n(t), i);
    }
    function eQ(t, r = (t) => t.message) {
      let i = { errors: [] },
        n = (t, a = []) => {
          var o;
          for (let u of t.issues)
            if ("invalid_union" === u.code && u.errors.length) u.errors.map((t) => n({ issues: t }, [...a, ...u.path]));
            else if ("invalid_key" === u.code) n({ issues: u.issues }, [...a, ...u.path]);
            else if ("invalid_element" === u.code) n({ issues: u.issues }, [...a, ...u.path]);
            else {
              let t = [...a, ...u.path];
              if (0 === t.length) {
                i.errors.push(r(u));
                continue;
              }
              let n = i,
                s = 0;
              for (; s < t.length;) {
                let i = t[s],
                  a = s === t.length - 1;
                ("string" == typeof i
                  ? (n.properties ?? (n.properties = {}),
                    Object.prototype.hasOwnProperty.call(n.properties, i) ||
                      Object.defineProperty(n.properties, i, {
                        value: { errors: [] },
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      }),
                    (n = n.properties[i]))
                  : (n.items ?? (n.items = []), (o = n.items)[i] ?? (o[i] = { errors: [] }), (n = n.items[i])),
                  a && n.errors.push(r(u)),
                  s++);
              }
            }
        };
      return (n(t), i);
    }
    function e0(t) {
      let r = [];
      for (let i of t.map((t) => ("object" == typeof t ? t.key : t)))
        "number" == typeof i
          ? r.push(`[${i}]`)
          : "symbol" == typeof i
            ? r.push(`[${JSON.stringify(String(i))}]`)
            : /[^\w$]/.test(i)
              ? r.push(`[${JSON.stringify(i)}]`)
              : (r.length && r.push("."), r.push(i));
      return r.join("");
    }
    function e1(t) {
      let r = [];
      for (let i of [...t.issues].sort((t, r) => (t.path ?? []).length - (r.path ?? []).length))
        (r.push(`✖ ${i.message}`), i.path?.length && r.push(`  → at ${e0(i.path)}`));
      return r.join("\n");
    }
    function e4(t, r) {
      return { callee: r?.callee ?? t, Err: r?.Err };
    }
    t.s(
      [
        "$ZodError",
        0,
        eX,
        "$ZodRealError",
        0,
        eq,
        "flattenError",
        0,
        eH,
        "formatError",
        0,
        eY,
        "prettifyError",
        0,
        e1,
        "toDotPath",
        0,
        e0,
        "treeifyError",
        0,
        eQ,
      ],
      19786,
    );
    let e6 = (t) => {
        let r = (i, n, a, o) => {
          let u = a ? { ...a, async: !1 } : { async: !1 },
            s = i._zod.run({ value: n, issues: [] }, u);
          if (s instanceof Promise) throw new eV();
          if (s.issues.length) {
            let i = new (o?.Err ?? t)(s.issues.map((t) => ec(t, u, eB())));
            throw (Z(i, o?.callee ?? r), i);
          }
          return s.value;
        };
        return r;
      },
      e2 = e6(eq),
      e9 = (t) => {
        let r = async (i, n, a, o) => {
          let u = a ? { ...a, async: !0 } : { async: !0 },
            s = i._zod.run({ value: n, issues: [] }, u);
          if ((s instanceof Promise && (s = await s), s.issues.length)) {
            let i = new (o?.Err ?? t)(s.issues.map((t) => ec(t, u, eB())));
            throw (Z(i, o?.callee ?? r), i);
          }
          return s.value;
        };
        return r;
      },
      e7 = e9(eq),
      e3 = (t) => (r, i, n) => {
        let a = n ? { ...n, async: !1 } : { async: !1 },
          o = r._zod.run({ value: i, issues: [] }, a);
        if (o instanceof Promise) throw new eV();
        return o.issues.length ? e8(t, o.issues, a) : { success: !0, data: o.value };
      },
      e5 = e3(eq);
    function e8(t, r, i) {
      let n;
      return {
        success: !1,
        get error() {
          return (n || ((n = new t(r.map((t) => ec(t, i, eB())))), (r = void 0), (i = void 0)), n);
        },
        set error(e) {
          ((n = e), (r = void 0), (i = void 0));
        },
      };
    }
    let te = (t) => async (r, i, n) => {
        let a = n ? { ...n, async: !0 } : { async: !0 },
          o = r._zod.run({ value: i, issues: [] }, a);
        return (
          o instanceof Promise && (o = await o),
          o.issues.length ? e8(t, o.issues, a) : { success: !0, data: o.value }
        );
      },
      tt = te(eq),
      tr = Symbol.for("zod.compile.invalid"),
      ti = Symbol.for("zod.compile.fallback"),
      tn = (t, r, i) => {
        let n = t._zod.bag.validator;
        if (void 0 !== n) {
          if (n(r) !== tr) return !0;
          if (!0 === n.definite && void 0 === i) return !1;
        }
        var a = t,
          o = r,
          u = i;
        let s,
          l = u ? { ...u, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
          d = a._zod.bag.fallbackRun;
        if (
          (d ? ((l[ti] = !0), (s = d({ value: o, issues: [] }, l))) : (s = a._zod.run({ value: o, issues: [] }, l)),
          s instanceof Promise)
        )
          throw new eV();
        return 0 === s.issues.length;
      },
      ta = async (t, r, i) => {
        let n = i ? { ...i, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 },
          a = t._zod.run({ value: r, issues: [] }, n);
        return (a instanceof Promise && (a = await a), 0 === a.issues.length);
      },
      to = (t) => {
        let r = e6(t),
          i = (t, n, a, o) => r(t, n, a ? { ...a, direction: "backward" } : { direction: "backward" }, e4(i, o));
        return i;
      },
      tu = to(eq),
      ts = (t) => {
        let r = e6(t),
          i = (t, n, a, o) => r(t, n, a, e4(i, o));
        return i;
      },
      tl = ts(eq),
      td = (t) => {
        let r = e9(t),
          i = async (t, n, a, o) => {
            let u = a ? { ...a, direction: "backward" } : { direction: "backward" };
            return await r(t, n, u, e4(i, o));
          };
        return i;
      },
      tc = td(eq),
      tf = (t) => {
        let r = e9(t),
          i = async (t, n, a, o) => await r(t, n, a, e4(i, o));
        return i;
      },
      tm = tf(eq),
      tp = (t) => (r, i, n) => {
        let a = n ? { ...n, direction: "backward" } : { direction: "backward" };
        return e3(t)(r, i, a);
      },
      tv = tp(eq),
      tg = (t) => (r, i, n) => e3(t)(r, i, n),
      th = tg(eq),
      t$ = (t) => async (r, i, n) => {
        let a = n ? { ...n, direction: "backward" } : { direction: "backward" };
        return te(t)(r, i, a);
      },
      ty = t$(eq),
      tb = (t) => async (r, i, n) => te(t)(r, i, n),
      t_ = tb(eq);
    (t.s(
      [
        "_decode",
        0,
        ts,
        "_decodeAsync",
        0,
        tf,
        "_encode",
        0,
        to,
        "_encodeAsync",
        0,
        td,
        "_parse",
        0,
        e6,
        "_parseAsync",
        0,
        e9,
        "_safeDecode",
        0,
        tg,
        "_safeDecodeAsync",
        0,
        tb,
        "_safeEncode",
        0,
        tp,
        "_safeEncodeAsync",
        0,
        t$,
        "_safeParse",
        0,
        e3,
        "_safeParseAsync",
        0,
        te,
        "decode",
        0,
        tl,
        "decodeAsync",
        0,
        tm,
        "encode",
        0,
        tu,
        "encodeAsync",
        0,
        tc,
        "parse",
        0,
        e2,
        "parseAsync",
        0,
        e7,
        "safeDecode",
        0,
        th,
        "safeDecodeAsync",
        0,
        t_,
        "safeEncode",
        0,
        tv,
        "safeEncodeAsync",
        0,
        ty,
        "safeParse",
        0,
        e5,
        "safeParseAsync",
        0,
        tt,
        "validate",
        0,
        tn,
        "validateAsync",
        0,
        ta,
      ],
      11679,
    ),
      t.i(11679),
      t.i(19786));
    let tx = /^[cC][0-9a-z]{6,}$/,
      tk = /^[0-9a-z]+$/,
      tI = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
      tw = /^[0-9a-vA-V]{20}$/,
      tS = /^[A-Za-z0-9]{27}$/,
      tO = /^[a-zA-Z0-9_-]{21}$/;
    function tz(t) {
      return RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
    }
    let tD = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      tN = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      tU = (t) =>
        t
          ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      tA = tU(4),
      tP = tU(6),
      tZ = tU(7),
      tj = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      tE = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
    function tC() {
      return RegExp(
        "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
        "u",
      );
    }
    let tT =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      tL =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
      tR = (t) => {
        let r = F(t ?? ":");
        return RegExp(`^(?:[0-9A-F]{2}${r}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${r}){5}[0-9a-f]{2}$`);
      },
      tV =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      tM =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      tF = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      tB = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
      tJ =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
      tW = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/,
      tK = /^https?$/,
      tG = /^\+[1-9]\d{6,14}$/,
      tX = /^\d(?:[ -]?\d){11,18}$/,
      tq =
        /^(?:AED|AFN|ALL|AMD|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLE|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VED|VES|VND|VUV|WST|XAD|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XCG|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWG)$/,
      tH = /^[A-Z]{2}(?!00|01|99)\d{2}[A-Z0-9]{11,30}$/,
      tY =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
      tQ = RegExp(`^${tY}$`);
    function t0(t) {
      let r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof t.precision
        ? -1 === t.precision
          ? `${r}`
          : 0 === t.precision
            ? `${r}:[0-5]\\d`
            : `${r}:[0-5]\\d\\.\\d{${t.precision}}`
        : t.seconds
          ? `${r}:[0-5]\\d(?:\\.\\d+)?`
          : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function t1(t) {
      return RegExp(`^${t0(t)}$`);
    }
    function t4(t) {
      let r = ["Z"];
      t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      let i = `${t0({ precision: t.precision, seconds: !0 })}(?:${r.join("|")})`,
        n = t.local ? `${i}|${t0({ precision: t.precision })}` : i;
      return RegExp(`^${tY}T(?:${n})$`);
    }
    let t6 = /^[\s\S]{0,}$/,
      t2 = (t) => {
        let r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
        return RegExp(`^${r}$`);
      },
      t9 = /^-?\d+n?$/,
      t7 = /^-?\d+$/,
      t3 = /^-?\d+(?:\.\d+)?$/,
      t5 = /^(?:true|false)$/i,
      t8 = /^null$/i,
      re = /^undefined$/i,
      rt = /^[^A-Z]*$/,
      rr = /^[^a-z]*$/,
      ri = /^[0-9a-fA-F]*$/;
    function rn(t, r) {
      return RegExp(`^[A-Za-z0-9+/]{${t}}${r}$`);
    }
    function ra(t) {
      return RegExp(`^[A-Za-z0-9_-]{${t}}$`);
    }
    let ro = rn(22, "=="),
      ru = ra(22),
      rs = rn(27, "="),
      rl = ra(27),
      rd = rn(43, "="),
      rc = ra(43),
      rf = rn(64, ""),
      rm = ra(64),
      rp = rn(86, "=="),
      rv = ra(86);
    t.s(
      [
        "anyString",
        0,
        t6,
        "base64",
        0,
        tF,
        "base64url",
        0,
        tB,
        "bigint",
        0,
        t9,
        "boolean",
        0,
        t5,
        "browserEmail",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "cidrv4",
        0,
        tV,
        "cidrv6",
        0,
        tM,
        "creditCard",
        0,
        tX,
        "cuid",
        0,
        tx,
        "cuid2",
        0,
        tk,
        "currencyCode",
        0,
        tq,
        "date",
        0,
        tQ,
        "datetime",
        0,
        t4,
        "domain",
        0,
        tW,
        "duration",
        0,
        tD,
        "e164",
        0,
        tG,
        "email",
        0,
        tj,
        "emoji",
        0,
        tC,
        "extendedDuration",
        0,
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        "guid",
        0,
        tN,
        "hex",
        0,
        ri,
        "hostname",
        0,
        tJ,
        "html5Email",
        0,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "httpProtocol",
        0,
        tK,
        "iban",
        0,
        tH,
        "idnEmail",
        0,
        tE,
        "integer",
        0,
        t7,
        "ipv4",
        0,
        tT,
        "ipv6",
        0,
        tL,
        "ksuid",
        0,
        tS,
        "lowercase",
        0,
        rt,
        "mac",
        0,
        tR,
        "md5_base64",
        0,
        ro,
        "md5_base64url",
        0,
        ru,
        "md5_hex",
        0,
        /^[0-9a-fA-F]{32}$/,
        "nanoid",
        0,
        tO,
        "nanoidOfLength",
        0,
        tz,
        "null",
        0,
        t8,
        "number",
        0,
        t3,
        "rfc5322Email",
        0,
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "sha1_base64",
        0,
        rs,
        "sha1_base64url",
        0,
        rl,
        "sha1_hex",
        0,
        /^[0-9a-fA-F]{40}$/,
        "sha256_base64",
        0,
        rd,
        "sha256_base64url",
        0,
        rc,
        "sha256_hex",
        0,
        /^[0-9a-fA-F]{64}$/,
        "sha384_base64",
        0,
        rf,
        "sha384_base64url",
        0,
        rm,
        "sha384_hex",
        0,
        /^[0-9a-fA-F]{96}$/,
        "sha512_base64",
        0,
        rp,
        "sha512_base64url",
        0,
        rv,
        "sha512_hex",
        0,
        /^[0-9a-fA-F]{128}$/,
        "string",
        0,
        t2,
        "time",
        0,
        t1,
        "ulid",
        0,
        tI,
        "undefined",
        0,
        re,
        "unicodeEmail",
        0,
        tE,
        "uppercase",
        0,
        rr,
        "uuid",
        0,
        tU,
        "uuid4",
        0,
        tA,
        "uuid6",
        0,
        tP,
        "uuid7",
        0,
        tZ,
        "xid",
        0,
        tw,
      ],
      48482,
    );
    let rg = eL("$ZodCheck", (t, r) => {
        var i;
        (t._zod ?? (t._zod = {}), (t._zod.def = r), (i = t._zod).onattach ?? (i.onattach = []));
      }),
      rh = (t) => {
        let r = t.value;
        return !v(r) && void 0 !== r.size;
      },
      r$ = (t) => {
        let r = t.value;
        return !v(r) && void 0 !== r.length;
      },
      ry = { number: "number", bigint: "bigint", object: "date" },
      rb = eL("$ZodCheckLessThan", (t, r) => {
        rg.init(t, r);
        let i = ry[typeof r.value];
        t._zod.check = (n) => {
          (r.inclusive ? n.value <= r.value : n.value < r.value) ||
            n.issues.push({
              origin: ry[typeof n.value] ?? i,
              code: "too_big",
              maximum: "object" == typeof r.value ? r.value.getTime() : r.value,
              input: n.value,
              inclusive: r.inclusive,
              inst: t,
              continue: !r.abort,
            });
        };
      }),
      r_ = eL("$ZodCheckGreaterThan", (t, r) => {
        rg.init(t, r);
        let i = ry[typeof r.value];
        t._zod.check = (n) => {
          (r.inclusive ? n.value >= r.value : n.value > r.value) ||
            n.issues.push({
              origin: ry[typeof n.value] ?? i,
              code: "too_small",
              minimum: "object" == typeof r.value ? r.value.getTime() : r.value,
              input: n.value,
              inclusive: r.inclusive,
              inst: t,
              continue: !r.abort,
            });
        };
      }),
      rx = eL("$ZodCheckMultipleOf", (t, r) => {
        (rg.init(t, r),
          (t._zod.check = (i) => {
            if (typeof i.value != typeof r.value) throw Error("Cannot mix number and bigint in multiple_of check.");
            ("bigint" == typeof i.value
              ? r.value !== BigInt(0) && i.value % r.value === BigInt(0)
              : 0 === h(i.value, r.value)) ||
              i.issues.push({
                origin: typeof i.value,
                code: "not_multiple_of",
                divisor: r.value,
                input: i.value,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      rk = eL("$ZodCheckNumberFormat", (t, r) => {
        (rg.init(t, r), (r.format = r.format || "float64"));
        let i = r.format?.includes("int"),
          n = i ? "int" : "number",
          [a, o] = X[r.format];
        t._zod.check = (u) => {
          let s = u.value;
          if (i) {
            if (!Number.isInteger(s))
              return void u.issues.push({
                expected: n,
                format: r.format,
                code: "invalid_type",
                continue: !1,
                input: s,
                inst: t,
              });
            if (!Number.isSafeInteger(s))
              return void (s > 0
                ? u.issues.push({
                    input: s,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: n,
                    inclusive: !0,
                    continue: !r.abort,
                  })
                : u.issues.push({
                    input: s,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: n,
                    inclusive: !0,
                    continue: !r.abort,
                  }));
          }
          (s < a &&
            u.issues.push({
              origin: "number",
              input: s,
              code: "too_small",
              minimum: a,
              inclusive: !0,
              inst: t,
              continue: !r.abort,
            }),
            s > o &&
              u.issues.push({
                origin: "number",
                input: s,
                code: "too_big",
                maximum: o,
                inclusive: !0,
                inst: t,
                continue: !r.abort,
              }));
        };
      }),
      rI = eL("$ZodCheckBigIntFormat", (t, r) => {
        rg.init(t, r);
        let [i, n] = q[r.format];
        t._zod.check = (a) => {
          let o = a.value;
          (o < i &&
            a.issues.push({
              origin: "bigint",
              input: o,
              code: "too_small",
              minimum: i,
              inclusive: !0,
              inst: t,
              continue: !r.abort,
            }),
            o > n &&
              a.issues.push({
                origin: "bigint",
                input: o,
                code: "too_big",
                maximum: n,
                inclusive: !0,
                inst: t,
                continue: !r.abort,
              }));
        };
      }),
      rw = eL("$ZodCheckMaxSize", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = rh),
          (t._zod.check = (i) => {
            let n = i.value;
            n.size <= r.maximum ||
              i.issues.push({
                origin: ef(n),
                code: "too_big",
                maximum: r.maximum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      rS = eL("$ZodCheckMinSize", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = rh),
          (t._zod.check = (i) => {
            let n = i.value;
            n.size >= r.minimum ||
              i.issues.push({
                origin: ef(n),
                code: "too_small",
                minimum: r.minimum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      rO = eL("$ZodCheckSizeEquals", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = rh),
          (t._zod.check = (i) => {
            let n = i.value,
              a = n.size;
            if (a === r.size) return;
            let o = a > r.size;
            i.issues.push({
              origin: ef(n),
              ...(o ? { code: "too_big", maximum: r.size } : { code: "too_small", minimum: r.size }),
              inclusive: !0,
              exact: !0,
              input: i.value,
              inst: t,
              continue: !r.abort,
            });
          }));
      }),
      rz = eL("$ZodCheckMaxLength", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = r$),
          (t._zod.check = (i) => {
            let n = i.value,
              a = n.length;
            if (("string" == typeof n && a > r.maximum ? ep(n) : a) <= r.maximum) return;
            let o = ev(n);
            i.issues.push({
              origin: o,
              code: "too_big",
              maximum: r.maximum,
              inclusive: !0,
              input: n,
              inst: t,
              continue: !r.abort,
            });
          }));
      }),
      rD = eL("$ZodCheckMinLength", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = r$),
          (t._zod.check = (i) => {
            let n = i.value,
              a = n.length;
            if (("string" == typeof n && a >= r.minimum && a < 2 * r.minimum ? ep(n) : a) >= r.minimum) return;
            let o = ev(n);
            i.issues.push({
              origin: o,
              code: "too_small",
              minimum: r.minimum,
              inclusive: !0,
              input: n,
              inst: t,
              continue: !r.abort,
            });
          }));
      }),
      rN = eL("$ZodCheckLengthEquals", (t, r) => {
        var i;
        (rg.init(t, r),
          (i = t._zod.def).when ?? (i.when = r$),
          (t._zod.check = (i) => {
            let n = i.value,
              a = n.length,
              o = "string" == typeof n && a >= r.length && a <= 2 * r.length ? ep(n) : a;
            if (o === r.length) return;
            let u = ev(n),
              s = o > r.length;
            i.issues.push({
              origin: u,
              ...(s ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length }),
              inclusive: !0,
              exact: !0,
              input: i.value,
              inst: t,
              continue: !r.abort,
            });
          }));
      }),
      rU = eL("$ZodCheckStringFormat", (t, r) => {
        var i, n;
        (rg.init(t, r),
          r.pattern
            ? ((i = t._zod).check ??
              (i.check = (i) => {
                ((r.pattern.lastIndex = 0),
                  r.pattern.test(i.value) ||
                    i.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: r.format,
                      input: i.value,
                      ...(r.pattern ? { pattern: r.pattern.toString() } : {}),
                      inst: t,
                      continue: !r.abort,
                    }));
              }))
            : ((n = t._zod).check ?? (n.check = () => {})));
      }),
      rA = eL("$ZodCheckRegex", (t, r) => {
        (rU.init(t, r),
          (t._zod.check = (i) => {
            ((r.pattern.lastIndex = 0),
              r.pattern.test(i.value) ||
                i.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "regex",
                  input: i.value,
                  pattern: r.pattern.toString(),
                  inst: t,
                  continue: !r.abort,
                }));
          }));
      }),
      rP = eL("$ZodCheckLowerCase", (t, r) => {
        (r.pattern ?? (r.pattern = rt), rU.init(t, r));
      }),
      rZ = eL("$ZodCheckUpperCase", (t, r) => {
        (r.pattern ?? (r.pattern = rr), rU.init(t, r));
      }),
      rj = eL("$ZodCheckIncludes", (t, r) => {
        rg.init(t, r);
        let i = F(r.includes),
          n = new RegExp("number" == typeof r.position ? `^.{${r.position},}${i}` : i);
        ((r.pattern = n),
          (t._zod.check = (i) => {
            i.value.includes(r.includes, r.position) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: r.includes,
                input: i.value,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      rE = eL("$ZodCheckStartsWith", (t, r) => {
        rg.init(t, r);
        let i = RegExp(`^${F(r.prefix)}.*`);
        (r.pattern ?? (r.pattern = i),
          (t._zod.check = (i) => {
            i.value.startsWith(r.prefix) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: r.prefix,
                input: i.value,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      rC = eL("$ZodCheckEndsWith", (t, r) => {
        rg.init(t, r);
        let i = RegExp(`.*${F(r.suffix)}$`);
        (r.pattern ?? (r.pattern = i),
          (t._zod.check = (i) => {
            i.value.endsWith(r.suffix) ||
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: r.suffix,
                input: i.value,
                inst: t,
                continue: !r.abort,
              });
          }));
      });
    function rT(t, r, i) {
      t.issues.length && r.issues.push(...es(i, t.issues));
    }
    let rL = eL("$ZodCheckProperty", (t, r) => {
        (rg.init(t, r),
          (t._zod.check = (t) => {
            let i = r.schema._zod.run({ value: t.value[r.property], issues: [] }, {});
            if (i instanceof Promise) return i.then((i) => rT(i, t, r.property));
            rT(i, t, r.property);
          }));
      }),
      rR = eL("$ZodCheckProperties", (t, r) => {
        let i;
        (rg.init(t, r),
          ez(t, Symbol.iterator, function* () {
            yield t;
          }),
          (t._zod.check = (n) => {
            let a;
            if (null == n.value)
              return void n.issues.push({ expected: "object", code: "invalid_type", input: n.value, inst: t });
            i ?? (i = Reflect.ownKeys(r.shape).map((t) => [t, r.shape[t]]));
            let o = n.value;
            for (let [t, r] of i) {
              let i = r._zod.run({ value: o[t], issues: [] }, {});
              i instanceof Promise ? (a ?? (a = []), a.push(i.then((r) => rT(r, n, t)))) : rT(i, n, t);
            }
            if (a) return Promise.all(a).then(() => void 0);
          }));
      }),
      rV = eL("$ZodCheckMimeType", (t, r) => {
        rg.init(t, r);
        let i = new Set(r.mime);
        t._zod.check = (n) => {
          i.has(n.value.type) ||
            n.issues.push({ code: "invalid_value", values: r.mime, input: n.value.type, inst: t, continue: !r.abort });
        };
      }),
      rM = eL("$ZodCheckOverwrite", (t, r) => {
        (rg.init(t, r),
          (t._zod.check = (t) => {
            t.value = r.tx(t.value);
          }));
      });
    t.s(
      [
        "$ZodCheck",
        0,
        rg,
        "$ZodCheckBigIntFormat",
        0,
        rI,
        "$ZodCheckEndsWith",
        0,
        rC,
        "$ZodCheckGreaterThan",
        0,
        r_,
        "$ZodCheckIncludes",
        0,
        rj,
        "$ZodCheckLengthEquals",
        0,
        rN,
        "$ZodCheckLessThan",
        0,
        rb,
        "$ZodCheckLowerCase",
        0,
        rP,
        "$ZodCheckMaxLength",
        0,
        rz,
        "$ZodCheckMaxSize",
        0,
        rw,
        "$ZodCheckMimeType",
        0,
        rV,
        "$ZodCheckMinLength",
        0,
        rD,
        "$ZodCheckMinSize",
        0,
        rS,
        "$ZodCheckMultipleOf",
        0,
        rx,
        "$ZodCheckNumberFormat",
        0,
        rk,
        "$ZodCheckOverwrite",
        0,
        rM,
        "$ZodCheckProperties",
        0,
        rR,
        "$ZodCheckProperty",
        0,
        rL,
        "$ZodCheckRegex",
        0,
        rA,
        "$ZodCheckSizeEquals",
        0,
        rO,
        "$ZodCheckStartsWith",
        0,
        rE,
        "$ZodCheckStringFormat",
        0,
        rU,
        "$ZodCheckUpperCase",
        0,
        rZ,
      ],
      19086,
    );
    class rF {
      constructor(t = [], r = {}) {
        ((this.content = []), (this.indent = 0), (this.args = t), (this.closed = r));
      }
      indented(t) {
        this.indent += 1;
        try {
          t(this);
        } finally {
          this.indent -= 1;
        }
      }
      write(t) {
        if ("function" == typeof t) {
          (t(this, { execution: "sync" }), t(this, { execution: "async" }));
          return;
        }
        let r = t.split("\n").filter((t) => t),
          i = Math.min(...r.map((t) => t.length - t.trimStart().length));
        for (let t of r.map((t) => t.slice(i)).map((t) => " ".repeat(2 * this.indent) + t)) this.content.push(t);
      }
      compile() {
        let t = Function,
          r = this?.content ?? [""];
        return new t(
          ...Object.keys(this.closed),
          `return function (${this.args.join(", ")}) {
${r.join("\n")}
};`,
        )(...Object.values(this.closed));
      }
    }
    t.s(["Doc", 0, rF], 9141);
    let rB = { major: 4, minor: 6, patch: 5 };
    t.s(["version", 0, rB], 26650);
    let rJ = eL(
        "$ZodType",
        (t, r) => {
          var i;
          (t ?? (t = {}), (t._zod.def = r), (t._zod.bag = t._zod.bag || {}), (t._zod.version = rB));
          let n = t._zod.def.checks,
            a = t._zod.traits.has("$ZodCheck") ? [t, ...(n ?? [])] : n?.length ? [...n] : [];
          for (let r of a) for (let i of r._zod.onattach) i(t);
          if (0 === a.length)
            ((i = t._zod).deferred ?? (i.deferred = []),
              t._zod.deferred?.push(() => {
                t._zod.run = t._zod.parse;
              }));
          else {
            let r = (r, i, n) => {
                let a;
                if (r.memo) return r;
                let o = eo(r);
                for (let u of i) {
                  if (u._zod.def.when) {
                    if (eu(r) || !u._zod.def.when(r)) continue;
                  } else if (o) continue;
                  let i = r.issues.length,
                    s = u._zod.check(r);
                  if (s instanceof Promise && n?.async === !1) throw new eV();
                  if (a || s instanceof Promise)
                    a = (a ?? Promise.resolve()).then(async () => {
                      (await s, r.issues.length !== i && (ed(r.issues, i, t), o || (o = eo(r, i))));
                    });
                  else {
                    if (r.issues.length === i) continue;
                    (ed(r.issues, i, t), o || (o = eo(r, i)));
                  }
                }
                return a ? a.then(() => r) : r;
              },
              i = (i, n, o) => {
                if (eo(i)) return ((i.aborted = !0), i);
                let u = r(n, a, o);
                if (u instanceof Promise) {
                  if (!1 === o.async) throw new eV();
                  return u.then((r) => t._zod.parse(r, o));
                }
                return t._zod.parse(u, o);
              };
            t._zod.run = (n, o) => {
              if (o.skipChecks) return t._zod.parse(n, o);
              if ("backward" === o.direction) {
                let r = t._zod.parse({ value: n.value, issues: [] }, { ...o, skipChecks: !0 });
                return r instanceof Promise ? r.then((t) => i(t, n, o)) : i(r, n, o);
              }
              let u = t._zod.parse(n, o);
              if (u instanceof Promise) {
                if (!1 === o.async) throw new eV();
                return u.then((t) => r(t, a, o));
              }
              return r(u, a, o);
            };
          }
        },
        {
          get "~standard"() {
            return ez(this, "~standard", rG(this));
          },
          set "~standard"(value) {
            eO(this, "~standard", value);
          },
        },
      ),
      rW = (t, r) => (t.issues.length ? { issues: t.issues.map((t) => ec(t, r, eB())) } : { value: t.value });
    async function rK(t, r) {
      let i = { async: !0 };
      return rW(await t._zod.run({ value: r, issues: [] }, i), i);
    }
    function rG(t) {
      return {
        validate: (r) => {
          let i = { async: !1 };
          try {
            let n = t._zod.run({ value: r, issues: [] }, i);
            if (!(n instanceof Promise)) return rW(n, i);
          } catch (t) {}
          return rK(t, r);
        },
        vendor: "zod",
        version: 1,
      };
    }
    let rX = eL("$ZodString", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = r.pattern ?? t6),
          (t._zod.parse = (i, n) => {
            if (r.coerce)
              try {
                i.value = String(i.value);
              } catch (t) {}
            return (
              "string" == typeof i.value ||
                i.issues.push({ expected: "string", code: "invalid_type", input: i.value, inst: t }),
              i
            );
          }));
      }),
      rq = eL("$ZodStringFormat", (t, r) => {
        (rU.init(t, r), rX.init(t, r));
      }),
      rH = eL("$ZodGUID", (t, r) => {
        (r.pattern ?? (r.pattern = tN), rq.init(t, r));
      }),
      rY = eL("$ZodUUID", (t, r) => {
        if (r.version) {
          let t = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[r.version];
          if (void 0 === t) throw Error(`Invalid UUID version: "${r.version}"`);
          r.pattern ?? (r.pattern = tU(t));
        } else r.pattern ?? (r.pattern = tU());
        rq.init(t, r);
      }),
      rQ = eL("$ZodEmail", (t, r) => {
        (r.pattern ?? (r.pattern = tj), rq.init(t, r));
      });
    function r0(t) {
      try {
        if ("u" > typeof URL && "function" == typeof URL.canParse) return URL.canParse(t);
        return (new URL(t), !0);
      } catch {
        return !1;
      }
    }
    function r1(t, r) {
      return "normalize" in r || "hostname" in r || "protocol" in r ? r4(t, r) : r0(t) || 2;
    }
    function r4(t, r) {
      if (!r.normalize && r.protocol?.source === tK.source && !/^https?:\/\//i.test(t)) return 1;
      try {
        if ("u" > typeof URL) {
          let r = URL;
          if ("function" == typeof r.parse) return r.parse(t) ?? 2;
        }
        return new URL(t);
      } catch {
        return 2;
      }
    }
    let r6 = /[\t\n\r]/g;
    function r2(t) {
      return t.replace(r6, "");
    }
    function r9(t, r) {
      return ((r.lastIndex = 0), r.test(t.hostname));
    }
    function r7(t, r) {
      return ((r.lastIndex = 0), r.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol));
    }
    let r3 = eL("$ZodURL", (t, r) => {
        (rq.init(t, r),
          (t._zod.check = (i) => {
            try {
              let n = i.value.trim(),
                a = r1(n, r);
              if (1 === a)
                return void i.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid URL format",
                  input: i.value,
                  inst: t,
                  continue: !r.abort,
                });
              if (2 === a)
                return void i.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: i.value,
                  inst: t,
                  continue: !r.abort,
                });
              if (!0 === a) {
                i.value = r2(n);
                return;
              }
              (r.hostname &&
                !r9(a, r.hostname) &&
                i.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid hostname",
                  pattern: r.hostname.source,
                  input: i.value,
                  inst: t,
                  continue: !r.abort,
                }),
                r.protocol &&
                  !r7(a, r.protocol) &&
                  i.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: r.protocol.source,
                    input: i.value,
                    inst: t,
                    continue: !r.abort,
                  }),
                (i.value = r.normalize ? a.href : r2(n)));
              return;
            } catch (n) {
              i.issues.push({ code: "invalid_format", format: "url", input: i.value, inst: t, continue: !r.abort });
            }
          }));
      }),
      r5 = eL("$ZodEmoji", (t, r) => {
        (r.pattern ?? (r.pattern = tC()), rq.init(t, r));
      }),
      r8 = eL("$ZodNanoID", (t, r) => {
        if (void 0 !== r.length && (!Number.isInteger(r.length) || r.length < 1))
          throw Error(`Invalid nanoid length: ${r.length}`);
        (r.pattern ?? (r.pattern = void 0 === r.length ? tO : tz(r.length)), rq.init(t, r));
      }),
      ie = eL("$ZodCUID", (t, r) => {
        (r.pattern ?? (r.pattern = tx), rq.init(t, r));
      }),
      it = eL("$ZodCUID2", (t, r) => {
        (r.pattern ?? (r.pattern = tk), rq.init(t, r));
      }),
      ir = eL("$ZodULID", (t, r) => {
        (r.pattern ?? (r.pattern = tI), rq.init(t, r));
      }),
      ii = eL("$ZodXID", (t, r) => {
        (r.pattern ?? (r.pattern = tw), rq.init(t, r));
      }),
      ia = eL("$ZodKSUID", (t, r) => {
        (r.pattern ?? (r.pattern = tS), rq.init(t, r));
      }),
      io = eL("$ZodISODateTime", (t, r) => {
        (r.pattern ?? (r.pattern = t4(r)), rq.init(t, r));
      }),
      iu = eL("$ZodISODate", (t, r) => {
        (r.pattern ?? (r.pattern = tQ), rq.init(t, r));
      }),
      is = eL("$ZodISOTime", (t, r) => {
        (r.pattern ?? (r.pattern = t1(r)), rq.init(t, r));
      }),
      il = eL("$ZodISODuration", (t, r) => {
        (r.pattern ?? (r.pattern = tD), rq.init(t, r));
      }),
      id = eL("$ZodIPv4", (t, r) => {
        (r.pattern ?? (r.pattern = tT), rq.init(t, r));
      }),
      ic = /^[0-9a-fA-F:.]+$/;
    function im(t) {
      return !!ic.test(t) && r0(`http://[${t}]`);
    }
    let ip = eL("$ZodIPv6", (t, r) => {
        (r.pattern ?? (r.pattern = tL),
          rq.init(t, r),
          (t._zod.check = (i) => {
            im(i.value) ||
              i.issues.push({ code: "invalid_format", format: "ipv6", input: i.value, inst: t, continue: !r.abort });
          }));
      }),
      iv = eL("$ZodMAC", (t, r) => {
        (r.pattern ?? (r.pattern = tR(r.delimiter)), rq.init(t, r));
      }),
      ig = eL("$ZodCIDRv4", (t, r) => {
        (r.pattern ?? (r.pattern = tV), rq.init(t, r));
      });
    function ih(t) {
      let r = t.split("/");
      if (2 !== r.length) return !1;
      let [i, n] = r;
      if (!n) return !1;
      let a = Number(n);
      return `${a}` === n && !(a < 0) && !(a > 128) && im(i);
    }
    let i$ = eL("$ZodCIDRv6", (t, r) => {
      (r.pattern ?? (r.pattern = tM),
        rq.init(t, r),
        (t._zod.check = (i) => {
          ih(i.value) ||
            i.issues.push({ code: "invalid_format", format: "cidrv6", input: i.value, inst: t, continue: !r.abort });
        }));
    });
    function iy(t) {
      if ("" === t) return !0;
      if (/\s/.test(t) || t.length % 4 != 0) return !1;
      try {
        return (atob(t), !0);
      } catch {
        return !1;
      }
    }
    let ib = /^[0-9a-zA-Z+/]*={0,2}$/,
      i_ = eL("$ZodBase64", (t, r) => {
        (r.pattern ?? (r.pattern = ib),
          rq.init(t, r),
          (t._zod.check = (i) => {
            iy(i.value) ||
              i.issues.push({ code: "invalid_format", format: "base64", input: i.value, inst: t, continue: !r.abort });
          }));
      }),
      ix = /^[A-Za-z0-9_-]*$/;
    function ik(t) {
      if (!ix.test(t)) return !1;
      let r = t.replace(/[-_]/g, (t) => ("-" === t ? "+" : "/"));
      return iy(r.padEnd(4 * Math.ceil(r.length / 4), "="));
    }
    let iI = eL("$ZodBase64URL", (t, r) => {
        (r.pattern ?? (r.pattern = ix),
          rq.init(t, r),
          (t._zod.check = (i) => {
            ik(i.value) ||
              i.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: i.value,
                inst: t,
                continue: !r.abort,
              });
          }));
      }),
      iw = eL("$ZodE164", (t, r) => {
        (r.pattern ?? (r.pattern = tG), rq.init(t, r));
      }),
      iS = /[- ]/g;
    function iO(t) {
      return (
        !!tX.test(t) &&
        (function (t) {
          let r = t.length,
            i = 1,
            n = 0;
          for (; r;) {
            let a = t.charCodeAt(--r) - 48;
            ((i ^= 1), (n += i ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][a] : a));
          }
          return n % 10 == 0;
        })(t.replace(iS, ""))
      );
    }
    let iz = eL("$ZodCreditCard", (t, r) => {
      (r.pattern ?? (r.pattern = tX),
        rq.init(t, r),
        (t._zod.check = (i) => {
          iO(i.value) ||
            i.issues.push({
              code: "invalid_format",
              format: "credit_card",
              input: i.value,
              inst: t,
              continue: !r.abort,
            });
        }));
    });
    function iD(t) {
      return (
        !!tH.test(t) &&
        (function (t) {
          let r = 0,
            i = t.length;
          for (let n = 4; n < i; n++) {
            let i = t.charCodeAt(n);
            r = (i >= 65 ? 100 * r + (i - 55) : 10 * r + (i - 48)) % 97;
          }
          for (let i = 0; i < 4; i++) {
            let n = t.charCodeAt(i);
            r = (n >= 65 ? 100 * r + (n - 55) : 10 * r + (n - 48)) % 97;
          }
          return 1 === r;
        })(t)
      );
    }
    let iN = eL("$ZodIBAN", (t, r) => {
      (r.pattern ?? (r.pattern = tH),
        rq.init(t, r),
        (t._zod.check = (i) => {
          iD(i.value) ||
            i.issues.push({ code: "invalid_format", format: "iban", input: i.value, inst: t, continue: !r.abort });
        }));
    });
    function iU(t, r = null) {
      try {
        let i = t.split(".");
        if (3 !== i.length) return !1;
        let [n] = i;
        if (!n) return !1;
        let a = JSON.parse(atob(n));
        if (("typ" in a && a?.typ !== "JWT") || !a.alg || (r && (!("alg" in a) || a.alg !== r))) return !1;
        return !0;
      } catch {
        return !1;
      }
    }
    let iA = eL("$ZodJWT", (t, r) => {
        (rq.init(t, r),
          (t._zod.check = (i) => {
            iU(i.value, r.alg) ||
              i.issues.push({ code: "invalid_format", format: "jwt", input: i.value, inst: t, continue: !r.abort });
          }));
      }),
      iP = eL("$ZodCustomStringFormat", (t, r) => {
        (rq.init(t, r),
          (t._zod.check = (i) => {
            r.fn(i.value) ||
              i.issues.push({ code: "invalid_format", format: r.format, input: i.value, inst: t, continue: !r.abort });
          }));
      }),
      iZ = eL("$ZodNumber", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = t3),
          (t._zod.parse = (i, n) => {
            if (r.coerce)
              try {
                i.value = Number(i.value);
              } catch (t) {}
            let a = i.value;
            if ("number" == typeof a && !Number.isNaN(a) && Number.isFinite(a)) return i;
            let o = "number" == typeof a ? (Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : String(a)) : void 0;
            return (
              i.issues.push({
                expected: "number",
                code: "invalid_type",
                input: a,
                inst: t,
                ...(o ? { received: o } : {}),
              }),
              i
            );
          }));
      }),
      ij = eL("$ZodNumberFormat", (t, r) => {
        (rk.init(t, r), iZ.init(t, r));
      }),
      iE = eL("$ZodBoolean", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = t5),
          (t._zod.parse = (i, n) => {
            if (r.coerce)
              try {
                i.value = !!i.value;
              } catch (t) {}
            let a = i.value;
            return (
              "boolean" == typeof a || i.issues.push({ expected: "boolean", code: "invalid_type", input: a, inst: t }),
              i
            );
          }));
      }),
      iC = eL("$ZodBigInt", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = t9),
          (t._zod.parse = (i, n) => {
            if (r.coerce)
              try {
                i.value = BigInt(i.value);
              } catch (t) {}
            return (
              "bigint" == typeof i.value ||
                i.issues.push({ expected: "bigint", code: "invalid_type", input: i.value, inst: t }),
              i
            );
          }));
      }),
      iT = eL("$ZodBigIntFormat", (t, r) => {
        (rI.init(t, r), iC.init(t, r));
      }),
      iL = eL("$ZodSymbol", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (r, i) => {
            let n = r.value;
            return (
              "symbol" == typeof n || r.issues.push({ expected: "symbol", code: "invalid_type", input: n, inst: t }),
              r
            );
          }));
      }),
      iR = eL("$ZodUndefined", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = re),
          (t._zod.values = new Set([void 0])),
          (t._zod.parse = (r, i) => {
            let n = r.value;
            return (
              void 0 === n || r.issues.push({ expected: "undefined", code: "invalid_type", input: n, inst: t }),
              r
            );
          }));
      }),
      iV = eL("$ZodNull", (t, r) => {
        (rJ.init(t, r),
          (t._zod.pattern = t8),
          (t._zod.values = new Set([null])),
          (t._zod.parse = (r, i) => {
            let n = r.value;
            return (null === n || r.issues.push({ expected: "null", code: "invalid_type", input: n, inst: t }), r);
          }));
      }),
      iM = eL("$ZodAny", (t, r) => {
        (rJ.init(t, r), (t._zod.parse = (t) => t));
      }),
      iF = eL("$ZodUnknown", (t, r) => {
        (rJ.init(t, r), (t._zod.parse = (t) => t));
      }),
      iB = eL("$ZodNever", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (r, i) => (
            r.issues.push({ expected: "never", code: "invalid_type", input: r.value, inst: t }),
            r
          )));
      }),
      iJ = eL("$ZodVoid", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (r, i) => {
            let n = r.value;
            return (void 0 === n || r.issues.push({ expected: "void", code: "invalid_type", input: n, inst: t }), r);
          }));
      }),
      iW = eL("$ZodDate", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (i, n) => {
            if (r.coerce)
              try {
                i.value = new Date(i.value);
              } catch (t) {}
            let a = i.value,
              o = a instanceof Date;
            return (
              (o && !Number.isNaN(a.getTime())) ||
                i.issues.push({
                  expected: "date",
                  code: "invalid_type",
                  input: a,
                  ...(o ? { received: "Invalid Date" } : {}),
                  inst: t,
                }),
              i
            );
          }));
      });
    function iK(t, r, i) {
      (t.issues.length && r.issues.push(...es(i, t.issues)), (r.value[i] = t.value));
    }
    let iG = eL("$ZodArray", (t, r) => {
      rJ.init(t, r);
      let i = eF.memoizer;
      (i?.attach(t),
        (t._zod.parse = (n, a) => {
          let o = n.value;
          if (!Array.isArray(o))
            return (n.issues.push({ expected: "array", code: "invalid_type", input: o, inst: t }), n);
          n.value = i ? i.alloc(t, n, Array(o.length), a) : Array(o.length);
          let u = [],
            s = a?.abortEarly;
          for (let t = 0; t < o.length; t++) {
            let i = o[t],
              l = r.element._zod.run({ value: i, issues: [] }, a);
            if (l instanceof Promise) u.push(l.then((r) => iK(r, n, t)));
            else if ((iK(l, n, t), s && 0 !== l.issues.length && eo(l))) break;
          }
          return u.length ? Promise.all(u).then(() => n) : n;
        }));
    });
    function iX(t, r, i, n, a, o) {
      let u = i in n,
        s = "optional" === o;
      if (u || !s || "optional" !== a) {
        if (t.issues.length) {
          if (void 0 !== a && s && !u) return;
          r.issues.push(...es(i, t.issues));
        }
        if (!u && void 0 === a) {
          t.issues.length || r.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [i] });
          return;
        }
        void 0 === t.value ? (u || ("defaulted" === a && !s)) && (r.value[i] = void 0) : (r.value[i] = t.value);
      }
    }
    let iq = [];
    function iH(t) {
      let r = Object.keys(t.shape),
        i = Object.getOwnPropertySymbols(t.shape),
        n = i.length ? i : iq,
        a = n.length ? [...r, ...n] : r;
      for (let r of a)
        if (!t.shape?.[r]?._zod?.traits?.has("$ZodType"))
          throw Error(`Invalid element at key "${String(r)}": expected a Zod schema`);
      let o = G(t.shape);
      return { ...t, allKeys: a, symbolKeys: n, keySet: new Set(r), numKeys: r.length, optionalKeys: new Set(o) };
    }
    function iY(t, r, i, n, a, o, u) {
      let s = [],
        l = a.keySet,
        d = a.catchall._zod,
        c = d.def.type,
        f = d.optin,
        m = d.optout,
        p = 0;
      for (let a in r) {
        if (u && i.issues.length !== p) {
          if (eo(i, p)) break;
          p = i.issues.length;
        }
        if (l.has(a)) continue;
        if ("__proto__" === a) {
          "never" === c && s.push(a);
          continue;
        }
        if ("never" === c) {
          s.push(a);
          continue;
        }
        let o = d.run({ value: r[a], issues: [] }, n);
        o instanceof Promise ? t.push(o.then((t) => iX(t, i, a, r, f, m))) : iX(o, i, a, r, f, m);
      }
      return (s.length && i.issues.push({ code: "unrecognized_keys", keys: s, input: r, inst: o, continue: !0 }),
      t.length)
        ? Promise.all(t).then(() => i)
        : i;
    }
    let iQ = eL("$ZodObject", (t, r) => {
        let i;
        rJ.init(t, r);
        let n = Object.getOwnPropertyDescriptor(r, "shape"),
          a = n?.get ? n.get.raw : (r.shape ?? {});
        if (a) {
          let t = () => {
            let i = { ...a };
            return (Object.defineProperty(r, "shape", { value: i }), (t.raw = i), i);
          };
          ((t.raw = a), Object.defineProperty(r, "shape", { get: t }));
        }
        let o = p(() => iH(r));
        eA(t, "propValues", (t) => {
          let r = t.def.shape,
            i = {};
          for (let t in r) {
            let n = r[t]._zod;
            if (n.values) {
              for (let r of (Object.prototype.hasOwnProperty.call(i, t) || _(i, t, new Set()), n.values)) i[t].add(r);
              void 0 !== n.optin && i[t].add(void 0);
            }
          }
          return i;
        });
        let u = r.catchall,
          s = eF.memoizer;
        (s?.attach(t),
          (t._zod.parse = (r, n) => {
            i ?? (i = o.value);
            let a = r.value;
            if (!j(a)) return (r.issues.push({ expected: "object", code: "invalid_type", input: a, inst: t }), r);
            r.value = s ? s.alloc(t, r, {}, n) : {};
            let l = [],
              d = i.shape,
              c = n?.abortEarly,
              f = r.issues.length;
            for (let t of i.allKeys) {
              if (c && r.issues.length !== f) {
                if (eo(r, f)) break;
                f = r.issues.length;
              }
              if ("__proto__" === t) continue;
              let i = d[t],
                o = i._zod.optin,
                u = i._zod.optout,
                s = i._zod.run({ value: a[t], issues: [] }, n);
              s instanceof Promise ? l.push(s.then((i) => iX(i, r, t, a, o, u))) : iX(s, r, t, a, o, u);
            }
            return u ? iY(l, a, r, n, o.value, t, !0 === c) : l.length ? Promise.all(l).then(() => r) : r;
          }));
      }),
      i0 = eL("$ZodObjectJIT", (t, r) => {
        let i, n;
        iQ.init(t, r);
        let a = t._zod.parse,
          o = p(() => iH(r)),
          u = eF.memoizer,
          s = !eF.jitless,
          l = s && E.value,
          d = r.catchall;
        t._zod.parse = (c, f) => {
          n ?? (n = o.value);
          let m = c.value;
          return j(m)
            ? s && l && f?.async === !1 && !0 !== f.jitless
              ? (i ||
                  (i = ((r) => {
                    let i = o.value,
                      n = i.symbolKeys,
                      a = new rF(["payload", "ctx"], { shape: r, inst: t, memo: u, syms: n }),
                      s = (t) => `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`,
                      l = (t, r) => `
          let ${t}_ab = false;
          for (let i = 0; i < ${t}.issues.length; i++) {
            const iss = ${t}.issues[i];
            iss.path = iss.path ? [${r}, ...iss.path] : [${r}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${t}_ab = true;
          }
          if (${t}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                    a.write("const input = payload.value;");
                    let d = Object.create(null),
                      c = 0;
                    for (let t of i.allKeys) d[t] = `key_${c++}`;
                    for (let t of (a.write(
                      u ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};",
                    ),
                    i.allKeys)) {
                      if ("__proto__" === t) continue;
                      let i = d[t],
                        o = "symbol" == typeof t ? `syms[${n.indexOf(t)}]` : A(t),
                        u = `${o} in input`,
                        c = r[t],
                        f = c?._zod?.optin,
                        m = void 0 !== f,
                        p = c?._zod?.optout === "optional";
                      if ((a.write(`const ${i} = ${s(o)};`), m && p)) {
                        let t = "optional" === f ? `${i}_present` : `${i}.value !== undefined || ${i}_present`;
                        a.write(`
        const ${i}_present = ${u};
        if (!${i}.issues.length || ${i}_present) {
          if (${i}.issues.length) {${l(i, o)}
          }

          if (${t}) {
            newResult[${o}] = ${i}.value;
          }
        }

      `);
                      } else
                        m
                          ? (a.write(`
        if (${i}.issues.length) {${l(i, o)}
        }
      `),
                            "defaulted" === f
                              ? a.write(`newResult[${o}] = ${i}.value;`)
                              : a.write(`
        if (${i}.value !== undefined || ${u}) {
          newResult[${o}] = ${i}.value;
        }
      `))
                          : a.write(`
        const ${i}_present = ${u};
        if (${i}.issues.length) {${l(i, o)}
        }
        if (!${i}_present && !${i}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${i}_present) {
          newResult[${o}] = ${i}.value;
        }

      `);
                    }
                    return (a.write("payload.value = newResult;"), a.write("return payload;"), a.compile());
                  })(r.shape)),
                (c = i(c, f)),
                d)
                ? iY([], m, c, f, n, t, f?.abortEarly === !0)
                : c
              : a(c, f)
            : (c.issues.push({ expected: "object", code: "invalid_type", input: m, inst: t }), c);
        };
      });
    function i1(t, r, i, n) {
      for (let i of t) if (0 === i.issues.length) return ((r.value = i.value), r);
      let a = t.filter((t) => !eo(t));
      return 1 === a.length
        ? ((r.value = a[0].value), a[0])
        : (r.issues.push({
            code: "invalid_union",
            input: r.value,
            inst: i,
            errors: t.map((t) => t.issues.map((t) => ec(t, n, eB()))),
          }),
          r);
    }
    let i4 = eL("$ZodUnion", (t, r) => {
      (rJ.init(t, r),
        eA(t, "optin", (t) =>
          t.def.options.some((t) => "defaulted" === t._zod.optin)
            ? "defaulted"
            : t.def.options.some((t) => void 0 !== t._zod.optin)
              ? "optional"
              : void 0,
        ),
        eA(t, "optout", (t) => (t.def.options.some((t) => "optional" === t._zod.optout) ? "optional" : void 0)),
        eA(t, "values", (t) => {
          if (t.def.options.every((t) => t._zod.values))
            return new Set(t.def.options.flatMap((t) => Array.from(t._zod.values)));
        }),
        eA(t, "pattern", (t) => {
          if (t.def.options.every((t) => t._zod.pattern)) {
            let r = t.def.options.map((t) => t._zod.pattern);
            return RegExp(`^(${r.map((t) => g(t.source)).join("|")})$`);
          }
        }));
      let i = 1 === r.options.length ? r.options[0]._zod.run : null;
      t._zod.parse = (n, a) => {
        if (i) return i(n, a);
        let o = !1,
          u = [];
        for (let t of r.options) {
          let r = t._zod.run({ value: n.value, issues: [] }, a);
          if (r instanceof Promise) (u.push(r), (o = !0));
          else {
            if (0 === r.issues.length) return r;
            u.push(r);
          }
        }
        return o ? Promise.all(u).then((r) => i1(r, n, t, a)) : i1(u, n, t, a);
      };
    });
    function i6(t, r, i, n) {
      let a = [];
      for (let r = 0; r < t.length; r++) 0 === t[r].issues.length && a.push(r);
      return (
        1 === a.length
          ? (r.value = t[a[0]].value)
          : 0 === a.length
            ? r.issues.push({
                code: "invalid_union",
                input: r.value,
                inst: i,
                errors: t.map((t) => t.issues.map((t) => ec(t, n, eB()))),
              })
            : r.issues.push({ code: "invalid_union", input: r.value, inst: i, errors: [], inclusive: !1, matches: a }),
        r
      );
    }
    let i2 = eL("$ZodXor", (t, r) => {
      (i4.init(t, r), (r.inclusive = !1));
      let i = 1 === r.options.length ? r.options[0]._zod.run : null;
      t._zod.parse = (n, a) => {
        if (i) return i(n, a);
        let o = !1,
          u = [];
        for (let t of r.options) {
          let r = t._zod.run({ value: n.value, issues: [] }, a);
          r instanceof Promise ? (u.push(r), (o = !0)) : u.push(r);
        }
        return o ? Promise.all(u).then((r) => i6(r, n, t, a)) : i6(u, n, t, a);
      };
    });
    function i9(t, r) {
      let i = t._zod,
        n = i.bag.optionsMap;
      n || ((n = i7(i.def)), (i.bag.optionsMap = n));
      let a = n.get(r);
      if (null === a) throw Error(`Ambiguous discriminator value "${String(r)}"`);
      return a;
    }
    function i7(t) {
      let r = new Map();
      for (let i of t.options) {
        let n = i._zod.propValues?.[t.discriminator];
        if (!n || 0 === n.size) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
        for (let t of n)
          if (r.has(t)) {
            if (void 0 !== t) throw Error(`Duplicate discriminator value "${String(t)}"`);
            r.set(t, null);
          } else r.set(t, i);
      }
      return r;
    }
    let i3 = eL("$ZodDiscriminatedUnion", (t, r) => {
        ((r.inclusive = !1), i4.init(t, r));
        let i = t._zod.parse;
        (eA(t, "propValues", (t) => {
          let r = {},
            i = 0;
          for (let n of t.def.options) {
            let a = n._zod.propValues;
            if (!a || 0 === Object.keys(a).length)
              throw Error(`Invalid discriminated union option at index "${t.def.options.indexOf(n)}"`);
            for (let [n, o] of (a[t.def.discriminator]?.has(void 0) && i++, Object.entries(a)))
              for (let t of (Object.prototype.hasOwnProperty.call(r, n) || _(r, n, new Set()), o)) r[n].add(t);
          }
          return (!t.def.unionFallback && i > 1 && r[t.def.discriminator]?.delete(void 0), r);
        }),
          r.options.forEach((t, i) => {
            let n = x(t._zod.def);
            if (n && !Object.prototype.hasOwnProperty.call(n, r.discriminator))
              throw Error(`Invalid discriminated union option at index "${i}"`);
          }));
        let n = p(() => i7(r));
        t._zod.parse = (a, o) => {
          let u = a.value;
          if (!j(u)) return (a.issues.push({ code: "invalid_type", expected: "object", input: u, inst: t }), a);
          let s = u?.[r.discriminator],
            l = n.value.get(s);
          return l && (void 0 !== s || "backward" !== o.direction)
            ? l._zod.run(a, o)
            : r.unionFallback || "backward" === o.direction
              ? i(a, o)
              : (a.issues.push({
                  code: "invalid_union",
                  errors: [],
                  note: "No matching discriminator",
                  discriminator: r.discriminator,
                  options: Array.from(n.value.keys()).filter((t) => null !== n.value.get(t)),
                  input: u,
                  path: [r.discriminator],
                  inst: t,
                }),
                a);
        };
      }),
      i5 = eL("$ZodIntersection", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (t, i) => {
            let n = t.value,
              a = r.left._zod.run({ value: n, issues: [] }, i),
              o = r.right._zod.run({ value: n, issues: [] }, i);
            return a instanceof Promise || o instanceof Promise
              ? Promise.all([a, o]).then(([r, i]) => ne(t, r, i))
              : ne(t, a, o);
          }));
      });
    function i8(t, r) {
      if (t === r || (t instanceof Date && r instanceof Date && +t == +r)) return { valid: !0, data: t };
      if (C(t) && C(r)) {
        let i = Object.keys(r),
          n = Object.keys(t).filter((t) => -1 !== i.indexOf(t)),
          a = { ...t, ...r };
        for (let i of (Object.prototype.hasOwnProperty.call(a, "__proto__") && delete a.__proto__, n)) {
          if ("__proto__" === i) continue;
          let n = i8(t[i], r[i]);
          if (!n.valid) return { valid: !1, mergeErrorPath: [i, ...n.mergeErrorPath] };
          a[i] = n.data;
        }
        return { valid: !0, data: a };
      }
      if (Array.isArray(t) && Array.isArray(r)) {
        if (t.length !== r.length) return { valid: !1, mergeErrorPath: [] };
        let i = [];
        for (let n = 0; n < t.length; n++) {
          let a = i8(t[n], r[n]);
          if (!a.valid) return { valid: !1, mergeErrorPath: [n, ...a.mergeErrorPath] };
          i.push(a.data);
        }
        return { valid: !0, data: i };
      }
      return { valid: !1, mergeErrorPath: [] };
    }
    function ne(t, r, i) {
      let n,
        a = new Map(),
        o = new Map(),
        u = (t, r) => {
          let i;
          if ("unrecognized_keys" !== t.code || t.path?.length)
            if ("invalid_key" !== t.code || "record" !== t.origin || t.path?.length !== 1) return !1;
            else {
              let r = String(t.path[0]);
              (o.has(r) || o.set(r, t), (i = [r]));
            }
          else (n ?? (n = t), (i = t.keys));
          for (let t of i) (a.has(t) || a.set(t, {}), (a.get(t)[r] = !0));
          return !0;
        };
      for (let i of r.issues) u(i, "l") || t.issues.push(i);
      for (let r of i.issues) u(r, "r") || t.issues.push(r);
      let s = [...a].filter(([, t]) => t.l && t.r).map(([t]) => t);
      if (s.length) {
        let r = n ? s.filter((t) => n.keys.includes(t)) : [];
        for (let i of (r.length && t.issues.push({ ...n, keys: r }), s))
          !r.includes(i) && o.has(i) && t.issues.push(o.get(i));
      }
      let l = i8(r.value, i.value);
      if (!l.valid) {
        if (eo(t)) return t;
        throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
      }
      return ((t.value = l.data), t);
    }
    let nt = eL("$ZodTuple", (t, r) => {
      rJ.init(t, r);
      let i = r.items,
        n = eF.memoizer;
      (n?.attach(t),
        (t._zod.parse = (a, o) => {
          let u = a.value;
          if (!Array.isArray(u))
            return (a.issues.push({ input: u, inst: t, expected: "tuple", code: "invalid_type" }), a);
          a.value = n ? n.alloc(t, a, [], o) : [];
          let s = [],
            l = nr(i, "optin"),
            d = nr(i, "optout");
          if (!r.rest) {
            if (u.length < l)
              return (
                a.issues.push({ code: "too_small", minimum: l, inclusive: !0, input: u, inst: t, origin: "array" }),
                a
              );
            u.length > i.length &&
              a.issues.push({ code: "too_big", maximum: i.length, inclusive: !0, input: u, inst: t, origin: "array" });
          }
          let c = Array(i.length),
            f = r.rest ? o?.abortEarly : void 0,
            m = !1;
          for (let t = 0; t < i.length; t++) {
            let r = i[t]._zod.run({ value: u[t], issues: [] }, o);
            r instanceof Promise
              ? s.push(
                  r.then((r) => {
                    c[t] = r;
                  }),
                )
              : ((c[t] = r), f && !m && r.issues.length && (m = eo(r)));
          }
          if (r.rest && !m) {
            let t = i.length - 1,
              n = u.slice(i.length),
              l = a.issues.length;
            for (let i of n) {
              if (f && a.issues.length !== l) {
                if (eo(a, l)) break;
                l = a.issues.length;
              }
              t++;
              let n = r.rest._zod.run({ value: i, issues: [] }, o);
              n instanceof Promise ? s.push(n.then((r) => ni(r, a, t))) : ni(n, a, t);
            }
          }
          return s.length ? Promise.all(s).then(() => nn(c, a, i, u, d)) : nn(c, a, i, u, d);
        }));
    });
    function nr(t, r) {
      for (let i = t.length - 1; i >= 0; i--)
        if (!("optin" === r ? void 0 !== t[i]._zod.optin : "optional" === t[i]._zod.optout)) return i + 1;
      return 0;
    }
    function ni(t, r, i) {
      (t.issues.length && r.issues.push(...es(i, t.issues)), (r.value[i] = t.value));
    }
    function nn(t, r, i, n, a) {
      for (let o = 0; o < i.length; o++) {
        let u = t[o],
          s = o < n.length;
        if (!s && o >= a && "optional" === i[o]._zod.optin) {
          r.value.length = o;
          break;
        }
        if (u.issues.length) {
          if (!s && o >= a) {
            r.value.length = o;
            break;
          }
          r.issues.push(...es(o, u.issues));
        }
        r.value[o] = u.value;
      }
      for (let t = r.value.length - 1; t >= n.length; t--)
        if ("optional" === i[t]._zod.optout && void 0 === r.value[t]) r.value.length = t;
        else break;
      return r;
    }
    let na = eL("$ZodRecord", (t, r) => {
        rJ.init(t, r);
        let i = eF.memoizer;
        (i?.attach(t),
          (t._zod.parse = (n, a) => {
            let o = n.value;
            if (!C(o)) return (n.issues.push({ expected: "record", code: "invalid_type", input: o, inst: t }), n);
            let u = [],
              s = r.keyType._zod.values;
            if (s && !r.partial) {
              let l;
              n.value = i ? i.alloc(t, n, {}, a) : {};
              let d = new Set();
              for (let i of s)
                if ("string" == typeof i || "number" == typeof i || "symbol" == typeof i) {
                  if ((d.add("number" == typeof i ? i.toString() : i), "__proto__" === i)) continue;
                  let s = r.keyType._zod.run({ value: i, issues: [] }, a);
                  if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                  if (s.issues.length) {
                    n.issues.push({
                      code: "invalid_key",
                      origin: "record",
                      issues: s.issues.map((t) => ec(t, a, eB())),
                      input: i,
                      path: [i],
                      inst: t,
                    });
                    continue;
                  }
                  let l = s.value;
                  if ("__proto__" === l) continue;
                  let c = r.valueType._zod.run({ value: o[i], issues: [] }, a);
                  c instanceof Promise
                    ? u.push(
                        c.then((t) => {
                          (t.issues.length && n.issues.push(...es(i, t.issues)), (n.value[l] = t.value));
                        }),
                      )
                    : (c.issues.length && n.issues.push(...es(i, c.issues)), (n.value[l] = c.value));
                }
              for (let t in o)
                if (!d.has(t))
                  if ("loose" === r.mode) {
                    if ("__proto__" === t) continue;
                    n.value[t] = o[t];
                  } else (l = l ?? []).push(t);
              l &&
                l.length > 0 &&
                n.issues.push({ code: "unrecognized_keys", input: o, inst: t, keys: l, continue: !0 });
            } else {
              let l;
              for (let d of ((n.value = i ? i.alloc(t, n, {}, a) : {}), Reflect.ownKeys(o))) {
                if ("__proto__" === d || !Object.prototype.propertyIsEnumerable.call(o, d)) continue;
                let i = r.keyType._zod.run({ value: d, issues: [] }, a);
                if (i instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                if ("string" == typeof d && t3.test(d) && i.issues.length) {
                  let t = r.keyType._zod.run({ value: Number(d), issues: [] }, a);
                  if (t instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                  0 === t.issues.length && (i = t);
                }
                if (i.issues.length) {
                  "loose" === r.mode
                    ? (n.value[d] = o[d])
                    : s
                      ? (l = l ?? []).push(d)
                      : n.issues.push({
                          code: "invalid_key",
                          origin: "record",
                          issues: i.issues.map((t) => ec(t, a, eB())),
                          input: d,
                          path: [d],
                          inst: t,
                        });
                  continue;
                }
                let c = i.value;
                if ("__proto__" === c) continue;
                let f = r.valueType._zod.run({ value: o[d], issues: [] }, a);
                f instanceof Promise
                  ? u.push(
                      f.then((t) => {
                        (t.issues.length && n.issues.push(...es(d, t.issues)), (n.value[c] = t.value));
                      }),
                    )
                  : (f.issues.length && n.issues.push(...es(d, f.issues)), (n.value[c] = f.value));
              }
              l &&
                l.length > 0 &&
                n.issues.push({ code: "unrecognized_keys", input: o, inst: t, keys: l, continue: !0 });
            }
            return u.length ? Promise.all(u).then(() => n) : n;
          }));
      }),
      no = eL("$ZodMap", (t, r) => {
        rJ.init(t, r);
        let i = eF.memoizer;
        (i?.attach(t),
          (t._zod.parse = (n, a) => {
            let o = n.value;
            if (!(o instanceof Map))
              return (n.issues.push({ expected: "map", code: "invalid_type", input: o, inst: t }), n);
            let u = [];
            n.value = i ? i.alloc(t, n, new Map(), a) : new Map();
            let s = a?.abortEarly,
              l = n.issues.length;
            for (let [i, d] of o) {
              if (s && n.issues.length !== l) {
                if (eo(n, l)) break;
                l = n.issues.length;
              }
              let c = r.keyType._zod.run({ value: i, issues: [] }, a),
                f = r.valueType._zod.run({ value: d, issues: [] }, a);
              c instanceof Promise || f instanceof Promise
                ? u.push(
                    Promise.all([c, f]).then(([r, u]) => {
                      nu(r, u, n, i, o, t, a);
                    }),
                  )
                : nu(c, f, n, i, o, t, a);
            }
            return u.length ? Promise.all(u).then(() => n) : n;
          }));
      });
    function nu(t, r, i, n, a, o, u) {
      (t.issues.length &&
        (V.has(typeof n)
          ? i.issues.push(...es(n, t.issues))
          : i.issues.push({
              code: "invalid_key",
              origin: "map",
              input: a,
              inst: o,
              issues: t.issues.map((t) => ec(t, u, eB())),
            })),
        r.issues.length &&
          (V.has(typeof n)
            ? i.issues.push(...es(n, r.issues))
            : i.issues.push({
                origin: "map",
                code: "invalid_element",
                input: a,
                inst: o,
                key: n,
                issues: r.issues.map((t) => ec(t, u, eB())),
              })),
        i.value.set(t.value, r.value));
    }
    let ns = eL("$ZodSet", (t, r) => {
      rJ.init(t, r);
      let i = eF.memoizer;
      (i?.attach(t),
        (t._zod.parse = (n, a) => {
          let o = n.value;
          if (!(o instanceof Set))
            return (n.issues.push({ input: o, inst: t, expected: "set", code: "invalid_type" }), n);
          let u = [];
          n.value = i ? i.alloc(t, n, new Set(), a) : new Set();
          let s = a?.abortEarly,
            l = n.issues.length;
          for (let t of o) {
            if (s && n.issues.length !== l) {
              if (eo(n, l)) break;
              l = n.issues.length;
            }
            let i = r.valueType._zod.run({ value: t, issues: [] }, a);
            i instanceof Promise ? u.push(i.then((t) => nl(t, n))) : nl(i, n);
          }
          return u.length ? Promise.all(u).then(() => n) : n;
        }));
    });
    function nl(t, r) {
      (t.issues.length && r.issues.push(...t.issues), r.value.add(t.value));
    }
    let nd = eL("$ZodEnum", (t, r) => {
        rJ.init(t, r);
        let i = d(r.entries),
          n = new Set(i);
        ((t._zod.values = n),
          eA(t, "pattern", (t) => {
            let r = d(t.def.entries).filter((t) => V.has(typeof t));
            return new RegExp(r.length ? `^(${r.map((t) => F(t.toString())).join("|")})$` : "^[^\\s\\S]$");
          }),
          (t._zod.parse = (r, a) => {
            let o = r.value;
            return (n.has(o) || r.issues.push({ code: "invalid_value", values: i, input: o, inst: t }), r);
          }));
      }),
      nc = eL("$ZodLiteral", (t, r) => {
        rJ.init(t, r);
        let i = new Set(r.values);
        ((t._zod.values = i),
          eA(t, "pattern", (t) => {
            let r = t.def.values;
            return new RegExp(
              r.length
                ? `^(${r.map((t) => ("string" == typeof t ? F(t) : t ? F(t.toString()) : String(t))).join("|")})$`
                : "^[^\\s\\S]$",
            );
          }),
          (t._zod.parse = (n, a) => {
            let o = n.value;
            return (i.has(o) || n.issues.push({ code: "invalid_value", values: r.values, input: o, inst: t }), n);
          }));
      }),
      nf = eL("$ZodFile", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (r, i) => {
            let n = r.value;
            return (
              n instanceof File || r.issues.push({ expected: "file", code: "invalid_type", input: n, inst: t }),
              r
            );
          }));
      }),
      nm = eL("$ZodTransform", (t, r) => {
        (rJ.init(t, r),
          (t._zod.optin = "optional"),
          eF.memoizer?.guard(t),
          (t._zod.parse = (i, n) => {
            if ("backward" === n.direction) throw new eM(t.constructor.name);
            let a = r.transform(i.value, i);
            if (n.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((t) => ((i.value = t), i));
            if (a instanceof Promise) throw new eV();
            return ((i.value = a), i);
          }));
      });
    function np(t, r) {
      return ((t.value = r.issues.length ? void 0 : r.value), t);
    }
    let nv = eL("$ZodOptional", (t, r) => {
        (rJ.init(t, r),
          eA(t, "optin", (t) => ("defaulted" === t.def.innerType._zod.optin ? "defaulted" : "optional")),
          (t._zod.optout = "optional"),
          eA(t, "values", (t) => {
            let r = t.def.innerType._zod.values;
            return r ? new Set([...r, void 0]) : void 0;
          }),
          eA(t, "pattern", (t) => {
            let r = t.def.innerType._zod.pattern;
            return r ? RegExp(`^(${g(r.source)})?$`) : void 0;
          }),
          (t._zod.parse = (t, i) => {
            if (void 0 === t.value) {
              if ("defaulted" !== r.innerType._zod.optin) return t;
              let n = r.innerType._zod.run({ value: t.value, issues: [] }, i);
              return n instanceof Promise ? n.then((r) => np(t, r)) : np(t, n);
            }
            return r.innerType._zod.run(t, i);
          }));
      }),
      ng = eL("$ZodExactOptional", (t, r) => {
        (nv.init(t, r),
          eA(t, "values", (t) => t.def.innerType._zod.values),
          eA(t, "pattern", (t) => t.def.innerType._zod.pattern),
          (t._zod.parse = (t, i) => r.innerType._zod.run(t, i)));
      }),
      nh = eL("$ZodNullable", (t, r) => {
        (rJ.init(t, r),
          eA(t, "optin", (t) => t.def.innerType._zod.optin),
          eA(t, "optout", (t) => t.def.innerType._zod.optout),
          eA(t, "pattern", (t) => {
            let r = t.def.innerType._zod.pattern;
            return r ? RegExp(`^(${g(r.source)}|null)$`) : void 0;
          }),
          eA(t, "values", (t) =>
            t.def.innerType._zod.values ? new Set([...t.def.innerType._zod.values, null]) : void 0,
          ),
          (t._zod.parse = (t, i) => (null === t.value ? t : r.innerType._zod.run(t, i))));
      }),
      n$ = eL("$ZodDefault", (t, r) => {
        (rJ.init(t, r),
          (t._zod.optin = "defaulted"),
          eA(t, "values", (t) => t.def.innerType._zod.values),
          (t._zod.parse = (t, i) => {
            if ("backward" === i.direction) return r.innerType._zod.run(t, i);
            if (void 0 === t.value) return ((t.value = r.defaultValue), t);
            let n = r.innerType._zod.run(t, i);
            return n instanceof Promise ? n.then((t) => ny(t, r)) : ny(n, r);
          }));
      });
    function ny(t, r) {
      return (void 0 === t.value && (t.value = r.defaultValue), t);
    }
    let nb = eL("$ZodPrefault", (t, r) => {
        (rJ.init(t, r),
          (t._zod.optin = "defaulted"),
          eA(t, "values", (t) => t.def.innerType._zod.values),
          (t._zod.parse = (t, i) => (
            "backward" === i.direction || (void 0 === t.value && (t.value = r.defaultValue)),
            r.innerType._zod.run(t, i)
          )));
      }),
      n_ = eL("$ZodNonOptional", (t, r) => {
        (rJ.init(t, r),
          eA(t, "values", (t) => {
            let r = t.def.innerType._zod.values;
            return r ? new Set([...r].filter((t) => void 0 !== t)) : void 0;
          }),
          (t._zod.parse = (i, n) => {
            let a = r.innerType._zod.run(i, n);
            return a instanceof Promise ? a.then((r) => nx(r, t)) : nx(a, t);
          }));
      });
    function nx(t, r) {
      return (
        t.issues.length ||
          void 0 !== t.value ||
          t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: r }),
        t
      );
    }
    let nk = eL("$ZodSuccess", (t, r) => {
      (rJ.init(t, r),
        (t._zod.parse = (t, i) => {
          if ("backward" === i.direction) throw new eM("ZodSuccess");
          let n = r.innerType._zod.run(t, i);
          return n instanceof Promise
            ? n.then((r) => ((t.value = 0 === r.issues.length), t))
            : ((t.value = 0 === n.issues.length), t);
        }));
    });
    function nI(t, r, i, n) {
      return (
        r.issues.length
          ? (t.value = i.catchValue({
              ...r,
              value: t.value,
              error: { issues: r.issues.map((t) => ec(t, n, eB())) },
              input: t.value,
            }))
          : ((t.value = r.value), r.memo && (t.memo = !0)),
        t
      );
    }
    let nw = eL("$ZodCatch", (t, r) => {
        (rJ.init(t, r),
          eA(t, "optin", (t) => ("defaulted" === t.def.innerType._zod.optin ? "defaulted" : "optional")),
          eA(t, "optout", (t) => t.def.innerType._zod.optout),
          eA(t, "values", (t) => t.def.innerType._zod.values),
          (t._zod.parse = (t, i) => {
            if ("backward" === i.direction) return r.innerType._zod.run(t, i);
            let n = r.innerType._zod.run({ value: t.value, issues: [] }, i);
            return n instanceof Promise ? n.then((n) => nI(t, n, r, i)) : nI(t, n, r, i);
          }));
      }),
      nS = eL("$ZodNaN", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (r, i) => (
            ("number" == typeof r.value && Number.isNaN(r.value)) ||
              r.issues.push({ input: r.value, inst: t, expected: "nan", code: "invalid_type" }),
            r
          )));
      }),
      nO = eL("$ZodPipe", (t, r) => {
        (rJ.init(t, r),
          eA(t, "values", (t) => t.def.in._zod.values),
          eA(t, "optin", (t) => t.def.in._zod.optin),
          eA(t, "optout", (t) => t.def.out._zod.optout),
          eA(t, "propValues", (t) => t.def.in._zod.propValues),
          (t._zod.parse = (t, i) => {
            if ("backward" === i.direction) {
              let n = r.out._zod.run(t, i);
              return n instanceof Promise ? n.then((t) => nz(t, r.in, i)) : nz(n, r.in, i);
            }
            let n = r.in._zod.run(t, i);
            return n instanceof Promise ? n.then((t) => nz(t, r.out, i)) : nz(n, r.out, i);
          }));
      });
    function nz(t, r, i) {
      return t.issues.some((t) => "unrecognized_keys" !== t.code)
        ? ((t.aborted = !0), t)
        : r._zod.run({ value: t.value, issues: t.issues }, i);
    }
    let nD = eL("$ZodCodec", (t, r) => {
      (rJ.init(t, r),
        eA(t, "values", (t) => t.def.in._zod.values),
        eA(t, "optin", (t) => t.def.in._zod.optin),
        eA(t, "optout", (t) => t.def.out._zod.optout),
        eA(t, "propValues", (t) => t.def.in._zod.propValues),
        (t._zod.parse = (t, i) => {
          if ("forward" === (i.direction || "forward")) {
            let n = r.in._zod.run(t, i);
            return n instanceof Promise ? n.then((t) => nN(t, r, i)) : nN(n, r, i);
          }
          {
            let n = r.out._zod.run(t, i);
            return n instanceof Promise ? n.then((t) => nN(t, r, i)) : nN(n, r, i);
          }
        }));
    });
    function nN(t, r, i) {
      if (t.issues.length) return ((t.aborted = !0), t);
      if ("forward" === (i.direction || "forward")) {
        let n = r.transform(t.value, t);
        return n instanceof Promise ? n.then((n) => nU(t, n, r.out, i)) : nU(t, n, r.out, i);
      }
      {
        let n = r.reverseTransform(t.value, t);
        return n instanceof Promise ? n.then((n) => nU(t, n, r.in, i)) : nU(t, n, r.in, i);
      }
    }
    function nU(t, r, i, n) {
      return t.issues.length ? ((t.aborted = !0), t) : i._zod.run({ value: r, issues: t.issues }, n);
    }
    let nA = eL("$ZodPreprocess", (t, r) => {
        nO.init(t, r);
      }),
      nP = eL("$ZodReadonly", (t, r) => {
        (rJ.init(t, r),
          eA(t, "propValues", (t) => t.def.innerType._zod.propValues),
          eA(t, "values", (t) => t.def.innerType._zod.values),
          eA(t, "optin", (t) => t.def.innerType?._zod?.optin),
          eA(t, "optout", (t) => t.def.innerType?._zod?.optout),
          (t._zod.parse = (t, i) => {
            if ("backward" === i.direction) return r.innerType._zod.run(t, i);
            let n = r.innerType._zod.run(t, i);
            return n instanceof Promise ? n.then(nZ) : nZ(n);
          }));
      });
    function nZ(t) {
      return (t.memo || (t.value = Object.freeze(t.value)), t);
    }
    let nj = eL("$ZodTemplateLiteral", (t, r) => {
        rJ.init(t, r);
        let i = [];
        for (let t of r.parts)
          if ("object" == typeof t && null !== t) {
            let r = (function t(r) {
              let i = r._zod.def,
                n = r._zod.pattern?.source,
                a = i.innerType ?? r._zod.innerType;
              if (a) {
                let r = a._zod.pattern?.source,
                  i = t(a);
                return n && r && i && i !== r ? n.replace(g(r), () => g(i)) : n;
              }
              if (i.options) {
                let r = i.options.map(t);
                if (r.every(Boolean)) return `^(${r.map((t) => g(t)).join("|")})$`;
              }
              return (function (t) {
                let r,
                  i,
                  n = t._zod.def,
                  a = n.pattern,
                  o = !!n.format?.includes("int");
                for (let t of n.checks ?? []) {
                  let n = t._zod.def;
                  (n.pattern && (a = n.pattern), o || (o = !!n.format?.includes("int")));
                  let u = n.minimum ?? n.length,
                    s = n.maximum ?? n.length;
                  (void 0 !== u && (void 0 === r || u > r) && (r = u),
                    void 0 !== s && (void 0 === i || s < i) && (i = s));
                }
                if (a) return a.source;
                if (void 0 !== r && void 0 !== i && r > i) return "(?!)";
                if (void 0 !== r || void 0 !== i) return t2({ minimum: r, maximum: i }).source;
                let u = t._zod.pattern;
                return (o && u === t3 ? t7 : u)?.source;
              })(r);
            })(t);
            if (!r) throw Error(`Invalid template literal part, no pattern found: ${[...t._zod.traits].shift()}`);
            i.push(g(r));
          } else if (null === t || M.has(typeof t)) i.push(F(`${t}`));
          else throw Error(`Invalid template literal part: ${t}`);
        ((t._zod.pattern = RegExp(`^${i.join("")}$`)),
          (t._zod.parse = (i, n) => (
            "string" != typeof i.value
              ? i.issues.push({ input: i.value, inst: t, expected: "string", code: "invalid_type" })
              : ((t._zod.pattern.lastIndex = 0),
                t._zod.pattern.test(i.value) ||
                  i.issues.push({
                    input: i.value,
                    inst: t,
                    code: "invalid_format",
                    format: r.format ?? "template_literal",
                    pattern: t._zod.pattern.source,
                  })),
            i
          )));
      }),
      nE = eL(
        "$ZodFunction",
        (t, r) => (
          rJ.init(t, r),
          Object.defineProperty(t, "_def", { value: r }),
          (t._zod.def = r),
          (t.implement = (r) => {
            if ("function" != typeof r) throw Error("implement() must be called with a function");
            return Object.defineProperty(
              function (...i) {
                let n = Reflect.apply(r, this, t._def.input ? e2(t._def.input, i) : i);
                return t._def.output ? e2(t._def.output, n) : n;
              },
              "_zod",
              { value: t._zod, enumerable: !1 },
            );
          }),
          (t.implementAsync = (r) => {
            if ("function" != typeof r) throw Error("implementAsync() must be called with a function");
            return Object.defineProperty(
              async function (...i) {
                let n = t._def.input ? await e7(t._def.input, i) : i,
                  a = await Reflect.apply(r, this, n);
                return t._def.output ? await e7(t._def.output, a) : a;
              },
              "_zod",
              { value: t._zod, enumerable: !1 },
            );
          }),
          (t._zod.parse = (r, i) => (
            "function" != typeof r.value
              ? r.issues.push({ code: "invalid_type", expected: "function", input: r.value, inst: t })
              : t._def.output && "promise" === t._def.output._zod.def.type
                ? (r.value = t.implementAsync(r.value))
                : (r.value = t.implement(r.value)),
            r
          )),
          (t.input = (...r) => {
            let i = t.constructor;
            return new i(
              Array.isArray(r[0])
                ? { type: "function", input: new nt({ type: "tuple", items: r[0], rest: r[1] }), output: t._def.output }
                : { type: "function", input: r[0], output: t._def.output },
            );
          }),
          (t.output = (r) => new t.constructor({ type: "function", input: t._def.input, output: r })),
          t
        ),
      ),
      nC = eL("$ZodPromise", (t, r) => {
        (rJ.init(t, r),
          (t._zod.parse = (t, i) =>
            Promise.resolve(t.value).then((t) => r.innerType._zod.run({ value: t, issues: [] }, i))));
      }),
      nT = eL("$ZodLazy", (t, r) => {
        (rJ.init(t, r),
          y(t._zod, "innerType", () => (r._cachedInner || (r._cachedInner = r.getter()), r._cachedInner)),
          eA(t, "pattern", (t) => t.innerType?._zod?.pattern),
          eA(t, "propValues", (t) => t.innerType?._zod?.propValues),
          eA(t, "optin", (t) => t.innerType?._zod?.optin ?? void 0),
          eA(t, "optout", (t) => t.innerType?._zod?.optout ?? void 0),
          (t._zod.parse = (r, i) => t._zod.innerType._zod.run(r, i)));
      }),
      nL = eL("$ZodCustom", (t, r) => {
        (rg.init(t, r),
          rJ.init(t, r),
          (t._zod.parse = (t, r) => t),
          (t._zod.check = (i) => {
            let n = i.value,
              a = r.fn(n);
            if (a instanceof Promise) return a.then((r) => nR(r, i, n, t));
            nR(a, i, n, t);
          }));
      });
    function nR(t, r, i, n) {
      if (!t) {
        let t = { code: "custom", input: i, inst: n, path: [...(n._zod.def.path ?? [])], continue: !n._zod.def.abort };
        (n._zod.def.params && (t.params = n._zod.def.params), r.issues.push(eh(t)));
      }
    }
    (t.s(
      [
        "$ZodAny",
        0,
        iM,
        "$ZodArray",
        0,
        iG,
        "$ZodBase64",
        0,
        i_,
        "$ZodBase64URL",
        0,
        iI,
        "$ZodBigInt",
        0,
        iC,
        "$ZodBigIntFormat",
        0,
        iT,
        "$ZodBoolean",
        0,
        iE,
        "$ZodCIDRv4",
        0,
        ig,
        "$ZodCIDRv6",
        0,
        i$,
        "$ZodCUID",
        0,
        ie,
        "$ZodCUID2",
        0,
        it,
        "$ZodCatch",
        0,
        nw,
        "$ZodCodec",
        0,
        nD,
        "$ZodCreditCard",
        0,
        iz,
        "$ZodCustom",
        0,
        nL,
        "$ZodCustomStringFormat",
        0,
        iP,
        "$ZodDate",
        0,
        iW,
        "$ZodDefault",
        0,
        n$,
        "$ZodDiscriminatedUnion",
        0,
        i3,
        "$ZodE164",
        0,
        iw,
        "$ZodEmail",
        0,
        rQ,
        "$ZodEmoji",
        0,
        r5,
        "$ZodEnum",
        0,
        nd,
        "$ZodExactOptional",
        0,
        ng,
        "$ZodFile",
        0,
        nf,
        "$ZodFunction",
        0,
        nE,
        "$ZodGUID",
        0,
        rH,
        "$ZodIBAN",
        0,
        iN,
        "$ZodIPv4",
        0,
        id,
        "$ZodIPv6",
        0,
        ip,
        "$ZodISODate",
        0,
        iu,
        "$ZodISODateTime",
        0,
        io,
        "$ZodISODuration",
        0,
        il,
        "$ZodISOTime",
        0,
        is,
        "$ZodIntersection",
        0,
        i5,
        "$ZodJWT",
        0,
        iA,
        "$ZodKSUID",
        0,
        ia,
        "$ZodLazy",
        0,
        nT,
        "$ZodLiteral",
        0,
        nc,
        "$ZodMAC",
        0,
        iv,
        "$ZodMap",
        0,
        no,
        "$ZodNaN",
        0,
        nS,
        "$ZodNanoID",
        0,
        r8,
        "$ZodNever",
        0,
        iB,
        "$ZodNonOptional",
        0,
        n_,
        "$ZodNull",
        0,
        iV,
        "$ZodNullable",
        0,
        nh,
        "$ZodNumber",
        0,
        iZ,
        "$ZodNumberFormat",
        0,
        ij,
        "$ZodObject",
        0,
        iQ,
        "$ZodObjectJIT",
        0,
        i0,
        "$ZodOptional",
        0,
        nv,
        "$ZodPipe",
        0,
        nO,
        "$ZodPrefault",
        0,
        nb,
        "$ZodPreprocess",
        0,
        nA,
        "$ZodPromise",
        0,
        nC,
        "$ZodReadonly",
        0,
        nP,
        "$ZodRecord",
        0,
        na,
        "$ZodSet",
        0,
        ns,
        "$ZodString",
        0,
        rX,
        "$ZodStringFormat",
        0,
        rq,
        "$ZodSuccess",
        0,
        nk,
        "$ZodSymbol",
        0,
        iL,
        "$ZodTemplateLiteral",
        0,
        nj,
        "$ZodTransform",
        0,
        nm,
        "$ZodTuple",
        0,
        nt,
        "$ZodType",
        0,
        rJ,
        "$ZodULID",
        0,
        ir,
        "$ZodURL",
        0,
        r3,
        "$ZodUUID",
        0,
        rY,
        "$ZodUndefined",
        0,
        iR,
        "$ZodUnion",
        0,
        i4,
        "$ZodUnknown",
        0,
        iF,
        "$ZodVoid",
        0,
        iJ,
        "$ZodXID",
        0,
        ii,
        "$ZodXor",
        0,
        i2,
        "URL_BAD_FORMAT",
        0,
        1,
        "URL_UNPARSEABLE",
        0,
        2,
        "base64Charset",
        0,
        ib,
        "base64urlCharset",
        0,
        ix,
        "canParseURL",
        0,
        r0,
        "getDiscriminatedOption",
        0,
        i9,
        "isValidBase64",
        0,
        iy,
        "isValidBase64URL",
        0,
        ik,
        "isValidCIDRv6",
        0,
        ih,
        "isValidCreditCard",
        0,
        iO,
        "isValidIBAN",
        0,
        iD,
        "isValidIPv6",
        0,
        im,
        "isValidJWT",
        0,
        iU,
        "mergeValues",
        0,
        i8,
        "parseURLObject",
        0,
        r4,
        "standardProps",
        0,
        rG,
        "stripTabAndNewline",
        0,
        r2,
        "urlHostnameOk",
        0,
        r9,
        "urlProtocolOk",
        0,
        r7,
        "validateURL",
        0,
        r1,
      ],
      97100,
    ),
      t.i(97100),
      t.s(
        [
          "$ZodAny",
          0,
          iM,
          "$ZodArray",
          0,
          iG,
          "$ZodBase64",
          0,
          i_,
          "$ZodBase64URL",
          0,
          iI,
          "$ZodBigInt",
          0,
          iC,
          "$ZodBigIntFormat",
          0,
          iT,
          "$ZodBoolean",
          0,
          iE,
          "$ZodCIDRv4",
          0,
          ig,
          "$ZodCIDRv6",
          0,
          i$,
          "$ZodCUID",
          0,
          ie,
          "$ZodCUID2",
          0,
          it,
          "$ZodCatch",
          0,
          nw,
          "$ZodCodec",
          0,
          nD,
          "$ZodCreditCard",
          0,
          iz,
          "$ZodCustom",
          0,
          nL,
          "$ZodCustomStringFormat",
          0,
          iP,
          "$ZodDate",
          0,
          iW,
          "$ZodDefault",
          0,
          n$,
          "$ZodDiscriminatedUnion",
          0,
          i3,
          "$ZodE164",
          0,
          iw,
          "$ZodEmail",
          0,
          rQ,
          "$ZodEmoji",
          0,
          r5,
          "$ZodEnum",
          0,
          nd,
          "$ZodExactOptional",
          0,
          ng,
          "$ZodFile",
          0,
          nf,
          "$ZodFunction",
          0,
          nE,
          "$ZodGUID",
          0,
          rH,
          "$ZodIBAN",
          0,
          iN,
          "$ZodIPv4",
          0,
          id,
          "$ZodIPv6",
          0,
          ip,
          "$ZodISODate",
          0,
          iu,
          "$ZodISODateTime",
          0,
          io,
          "$ZodISODuration",
          0,
          il,
          "$ZodISOTime",
          0,
          is,
          "$ZodIntersection",
          0,
          i5,
          "$ZodJWT",
          0,
          iA,
          "$ZodKSUID",
          0,
          ia,
          "$ZodLazy",
          0,
          nT,
          "$ZodLiteral",
          0,
          nc,
          "$ZodMAC",
          0,
          iv,
          "$ZodMap",
          0,
          no,
          "$ZodNaN",
          0,
          nS,
          "$ZodNanoID",
          0,
          r8,
          "$ZodNever",
          0,
          iB,
          "$ZodNonOptional",
          0,
          n_,
          "$ZodNull",
          0,
          iV,
          "$ZodNullable",
          0,
          nh,
          "$ZodNumber",
          0,
          iZ,
          "$ZodNumberFormat",
          0,
          ij,
          "$ZodObject",
          0,
          iQ,
          "$ZodObjectJIT",
          0,
          i0,
          "$ZodOptional",
          0,
          nv,
          "$ZodPipe",
          0,
          nO,
          "$ZodPrefault",
          0,
          nb,
          "$ZodPreprocess",
          0,
          nA,
          "$ZodPromise",
          0,
          nC,
          "$ZodReadonly",
          0,
          nP,
          "$ZodRecord",
          0,
          na,
          "$ZodSet",
          0,
          ns,
          "$ZodString",
          0,
          rX,
          "$ZodStringFormat",
          0,
          rq,
          "$ZodSuccess",
          0,
          nk,
          "$ZodSymbol",
          0,
          iL,
          "$ZodTemplateLiteral",
          0,
          nj,
          "$ZodTransform",
          0,
          nm,
          "$ZodTuple",
          0,
          nt,
          "$ZodType",
          0,
          rJ,
          "$ZodULID",
          0,
          ir,
          "$ZodURL",
          0,
          r3,
          "$ZodUUID",
          0,
          rY,
          "$ZodUndefined",
          0,
          iR,
          "$ZodUnion",
          0,
          i4,
          "$ZodUnknown",
          0,
          iF,
          "$ZodVoid",
          0,
          iJ,
          "$ZodXID",
          0,
          ii,
          "$ZodXor",
          0,
          i2,
          "URL_BAD_FORMAT",
          0,
          1,
          "URL_UNPARSEABLE",
          0,
          2,
          "base64Charset",
          0,
          ib,
          "base64urlCharset",
          0,
          ix,
          "canParseURL",
          0,
          r0,
          "clone",
          0,
          B,
          "getDiscriminatedOption",
          0,
          i9,
          "isValidBase64",
          0,
          iy,
          "isValidBase64URL",
          0,
          ik,
          "isValidCIDRv6",
          0,
          ih,
          "isValidCreditCard",
          0,
          iO,
          "isValidIBAN",
          0,
          iD,
          "isValidIPv6",
          0,
          im,
          "isValidJWT",
          0,
          iU,
          "mergeValues",
          0,
          i8,
          "parseURLObject",
          0,
          r4,
          "standardProps",
          0,
          rG,
          "stripTabAndNewline",
          0,
          r2,
          "urlHostnameOk",
          0,
          r9,
          "urlProtocolOk",
          0,
          r7,
          "validateURL",
          0,
          r1,
        ],
        59942,
      ),
      t.i(59942));
    class nV extends Error {
      constructor() {
        (super("Cannot parse a reference cycle that closes through a transform"), (this.name = "ZodCyclicError"));
      }
    }
    let nM = "~memo",
      nF = [];
    function nB(t) {
      return null !== t && "object" == typeof t;
    }
    function nJ(t) {
      return t.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
    }
    let nW = new WeakMap();
    function nK(t, r, i) {
      var n, a;
      let o = nW.get(t);
      if (void 0 !== o) return 2 * !!o;
      if (r.has(t)) return 2;
      r.add(t);
      let u = 0,
        s = (t) => {
          if (2 !== u && t?._zod) {
            let n = nK(t, r, i);
            n > u && (u = n);
          }
        },
        l = (t) => {
          t > u && (u = t);
        },
        d = t._zod.def;
      switch (d.type) {
        case "object": {
          let t = x(d);
          (l(
            t
              ? ((t, n) => {
                  let a = 0;
                  for (let o of Reflect.ownKeys(t)) {
                    let u = Object.getOwnPropertyDescriptor(t, o);
                    if (n && !u.enumerable) continue;
                    let s = u.get ? 1 : u.value?._zod ? nK(u.value, r, i) : 0;
                    s > a && (a = s);
                  }
                  return a;
                })(t, !0)
              : 1,
          ),
            s(d.catchall));
          break;
        }
        case "array":
          s(d.element);
          break;
        case "tuple":
          for (let t of d.items) s(t);
          s(d.rest);
          break;
        case "record":
        case "map":
          (s(d.keyType), s(d.valueType));
          break;
        case "set":
          s(d.valueType);
          break;
        case "union":
          for (let t of d.options) s(t);
          break;
        case "intersection":
          (s(d.left), s(d.right));
          break;
        case "optional":
        case "nullable":
        case "default":
        case "prefault":
        case "catch":
        case "readonly":
        case "nonoptional":
        case "promise":
        case "success":
          s(d.innerType);
          break;
        case "pipe":
          (s(d.in), s(d.out));
          break;
        case "function":
          (s(d.input), s(d.output));
          break;
        case "lazy": {
          let n = d._cachedInner ?? (i ? t._zod.innerType : void 0);
          l(n ? nK(n, r, !1) : 1);
          break;
        }
        case "template_literal":
        case "string":
        case "number":
        case "int":
        case "boolean":
        case "bigint":
        case "symbol":
        case "undefined":
        case "null":
        case "void":
        case "never":
        case "any":
        case "unknown":
        case "date":
        case "nan":
        case "enum":
        case "literal":
        case "file":
        case "transform":
        case "custom":
          break;
        default:
          for (let t in d) {
            let r = Object.getOwnPropertyDescriptor(d, t);
            if (!r || r.get) continue;
            let i = r.value;
            if (i && "object" == typeof i) {
              if (i._zod) s(i);
              else if (Array.isArray(i)) for (let t of i) s(t);
            }
          }
      }
      return (r.delete(t), (n = t), 1 !== (a = u) && nW.set(n, 2 === a), a);
    }
    function nG(t) {
      return 0 !== nK(t, new Set(), !0);
    }
    let nX = [],
      nq = {
        alloc(t, r, n) {
          let a = i;
          if (!a) return n;
          i = void 0;
          let o = { value: n, issues: null };
          return (a.set(r.value, o), nX.push(o), n);
        },
        guard(t) {
          var r;
          ((r = t._zod).deferred ?? (r.deferred = []),
            t._zod.deferred.push(() => {
              let r = t._zod.parse,
                i = (t, i) => {
                  if ("backward" !== i.direction && nY(i, t.value)) throw new nV();
                  return r(t, i);
                };
              ((t._zod.parse = i), t._zod.run === r && (t._zod.run = i));
            }));
        },
        attach(t) {
          var r;
          let n,
            a,
            o,
            u = !1;
          ((r = t._zod).deferred ?? (r.deferred = []),
            t._zod.deferred.push(() => {
              let r = t._zod.parse,
                s = (l, d) => {
                  let c;
                  if (void 0 === n) {
                    let i = nK(t, new Set(), !1);
                    if (0 === i) return ((t._zod.parse = r), t._zod.run === s && (t._zod.run = r), r(l, d));
                    2 === i || u ? (n = !0) : (u = !0);
                  }
                  let f = l.value;
                  if (!nB(f)) return r(l, d);
                  let m = d[nM];
                  if ((m || ((m = { buckets: new WeakMap(), backEdges: void 0 }), (d[nM] = m)), a === d)) c = o;
                  else {
                    var p;
                    let r;
                    ((r = (p = m).buckets.get(t)) || ((r = new WeakMap()), p.buckets.set(t, r)),
                      (c = r),
                      (a = d),
                      (o = c));
                  }
                  let v = c.get(f);
                  if (v)
                    return (
                      (l.value = v.value),
                      v.issues
                        ? v.issues.length && l.issues.push(...nJ(v.issues))
                        : ((l.memo = !0), m.backEdges ?? (m.backEdges = new WeakSet()), m.backEdges.add(v.value)),
                      l
                    );
                  i = c;
                  let g = nX.length,
                    h = r(l, d);
                  i = void 0;
                  let $ = nX.length > g ? nX.pop() : void 0;
                  return h instanceof Promise
                    ? h.then((t) => ($ && ($.issues = t.issues.length ? nJ(t.issues) : nF), t))
                    : ($ && ($.issues = h.issues.length ? nJ(h.issues) : nF), h);
                };
              ((t._zod.parse = s), t._zod.run === r && (t._zod.run = s));
            }));
        },
      };
    function nH() {
      return nq;
    }
    function nY(t, r) {
      let i = t[nM]?.backEdges;
      return void 0 !== i && nB(r) && i.has(r);
    }
    (t.s(["$ZodCyclicError", 0, nV, "isBackEdge", 0, nY, "isRecursiveSchema", 0, nG, "memoizer", 0, nH], 29998),
      t.i(29998),
      t.i(19086),
      t.i(26650));
    var nQ,
      n0,
      n1,
      n4 = t.i(60082),
      n6 = t.i(48482);
    function n2(t, r, i, n) {
      let a = Math.abs(t),
        o = a % 10,
        u = a % 100;
      return u >= 11 && u <= 19 ? n : 1 === o ? r : o >= 2 && o <= 4 ? i : n;
    }
    function n9() {
      return {
        localeError: (() => {
          let t = {
              string: { unit: "characters", verb: "to have" },
              file: { unit: "bytes", verb: "to have" },
              array: { unit: "items", verb: "to have" },
              set: { unit: "items", verb: "to have" },
              map: { unit: "entries", verb: "to have" },
            },
            r = {
              regex: "input",
              email: "email address",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datetime",
              date: "ISO date",
              time: "ISO time",
              duration: "ISO duration",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              mac: "MAC address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded string",
              base64url: "base64url-encoded string",
              json_string: "JSON string",
              e164: "E.164 number",
              currency_code: "currency code",
              credit_card: "credit card number",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            },
            i = { nan: "NaN" };
          function n(t, r) {
            return "number" !== t || "number" != typeof r || Number.isFinite(r) ? (i[t] ?? t) : String(r);
          }
          return (i) => {
            switch (i.code) {
              case "invalid_type": {
                let t = n(i.expected),
                  r = n(eg(i.input), i.input);
                return `Invalid input: expected ${t}, received ${r}`;
              }
              case "invalid_value":
                if (1 === i.values.length) return `Invalid input: expected ${K(i.values[0])}`;
                return `Invalid option: expected one of ${c(i.values, "|")}`;
              case "too_big": {
                let r = i.exact ? "exactly " : i.inclusive ? "<=" : "<",
                  n = t[i.origin] ?? null;
                if (n)
                  return `Too big: expected ${i.origin ?? "value"} to have ${r}${i.maximum.toString()} ${n.unit ?? "elements"}`;
                return `Too big: expected ${i.origin ?? "value"} to be ${r}${i.maximum.toString()}`;
              }
              case "too_small": {
                let r = i.exact ? "exactly " : i.inclusive ? ">=" : ">",
                  n = t[i.origin] ?? null;
                if (n) return `Too small: expected ${i.origin} to have ${r}${i.minimum.toString()} ${n.unit}`;
                return `Too small: expected ${i.origin} to be ${r}${i.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === i.format) return `Invalid string: must start with "${i.prefix}"`;
                if ("ends_with" === i.format) return `Invalid string: must end with "${i.suffix}"`;
                if ("includes" === i.format) return `Invalid string: must include "${i.includes}"`;
                if ("regex" === i.format) return `Invalid string: must match pattern ${i.pattern}`;
                return `Invalid ${r[i.format] ?? i.format}`;
              case "not_multiple_of":
                return `Invalid number: must be a multiple of ${i.divisor}`;
              case "unrecognized_keys":
                return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${c(i.keys, ", ")}`;
              case "invalid_key":
                return `Invalid key in ${i.origin}`;
              case "invalid_union":
                if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                  let t = i.options.map((t) => `'${t}'`).join(" | ");
                  return `Invalid discriminator value. Expected ${t}`;
                }
                if (!1 === i.inclusive) return "Invalid input: more than one option matched";
                return "Invalid input";
              case "invalid_element":
                return `Invalid value in ${i.origin}`;
              default:
                return "Invalid input";
            }
          };
        })(),
      };
    }
    function n7(t, r, i) {
      return 1 === Math.abs(t) ? r : i;
    }
    function n3(t) {
      if (!t) return "";
      let r = t[t.length - 1];
      return t + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(r) ? "ն" : "ը");
    }
    function n5() {
      let t, r, i;
      return {
        localeError:
          ((t = {
            string: { unit: "តួអក្សរ", verb: "គួរមាន" },
            file: { unit: "បៃ", verb: "គួរមាន" },
            array: { unit: "ធាតុ", verb: "គួរមាន" },
            set: { unit: "ធាតុ", verb: "គួរមាន" },
            map: { unit: "ធាតុ", verb: "គួរមាន" },
          }),
          (r = {
            regex: "ទិន្នន័យបញ្ចូល",
            email: "អាសយដ្ឋានអ៊ីមែល",
            url: "URL",
            emoji: "សញ្ញាអារម្មណ៍",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
            date: "កាលបរិច្ឆេទ ISO",
            time: "ម៉ោង ISO",
            duration: "រយៈពេល ISO",
            ipv4: "អាសយដ្ឋាន IPv4",
            ipv6: "អាសយដ្ឋាន IPv6",
            mac: "អាសយដ្ឋាន MAC",
            cidrv4: "ដែនអាសយដ្ឋាន IPv4",
            cidrv6: "ដែនអាសយដ្ឋាន IPv6",
            base64: "ខ្សែអក្សរអ៊ិកូដ base64",
            base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
            json_string: "ខ្សែអក្សរ JSON",
            e164: "លេខ E.164",
            credit_card: "លេខប័ណ្ណឥណទាន",
            currency_code: "កូដរូបិយប័ណ្ណ",
            iban: "IBAN",
            jwt: "JWT",
            template_literal: "ទិន្នន័យបញ្ចូល",
          }),
          (i = { nan: "NaN", number: "លេខ", array: "អារេ (Array)", null: "គ្មានតម្លៃ (null)" }),
          (n) => {
            switch (n.code) {
              case "invalid_type": {
                let t = i[n.expected] ?? n.expected,
                  r = eg(n.input),
                  a = i[r] ?? r;
                if (/^[A-Z]/.test(n.expected))
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${n.expected} ប៉ុន្តែទទួលបាន ${a}`;
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t} ប៉ុន្តែទទួលបាន ${a}`;
              }
              case "invalid_value":
                if (1 === n.values.length) return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${K(n.values[0])}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${c(n.values, "|")}`;
              case "too_big": {
                let r = n.inclusive ? "<=" : "<",
                  i = t[n.origin] ?? null;
                if (i) return `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${r} ${n.maximum.toString()} ${i.unit ?? "ធាតុ"}`;
                return `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${r} ${n.maximum.toString()}`;
              }
              case "too_small": {
                let r = n.inclusive ? ">=" : ">",
                  i = t[n.origin] ?? null;
                if (i) return `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()} ${i.unit}`;
                return `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === n.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${n.prefix}"`;
                if ("ends_with" === n.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${n.suffix}"`;
                if ("includes" === n.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${n.includes}"`;
                if ("regex" === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${n.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${r[n.format] ?? n.format}`;
              case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
              case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${c(n.keys, ", ")}`;
              case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
              case "invalid_union":
              default:
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
              case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
            }
          }),
      };
    }
    (t.s([], 61595), t.i(61595));
    let n8 = (t) => t.charAt(0).toUpperCase() + t.slice(1);
    function ae(t) {
      let r = Math.abs(t),
        i = r % 10,
        n = r % 100;
      return (n >= 11 && n <= 19) || 0 === i ? "many" : 1 === i ? "one" : "few";
    }
    function at(t, r, i, n) {
      let a = Math.abs(t),
        o = a % 10,
        u = a % 100;
      return u >= 11 && u <= 19 ? n : 1 === o ? r : o >= 2 && o <= 4 ? i : n;
    }
    function ar() {
      let t, r, i;
      return {
        localeError:
          ((t = {
            string: { unit: "символів", verb: "матиме" },
            file: { unit: "байтів", verb: "матиме" },
            array: { unit: "елементів", verb: "матиме" },
            set: { unit: "елементів", verb: "матиме" },
            map: { unit: "елементів", verb: "матиме" },
          }),
          (r = {
            regex: "вхідні дані",
            email: "адреса електронної пошти",
            url: "URL",
            emoji: "емодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "дата та час ISO",
            date: "дата ISO",
            time: "час ISO",
            duration: "тривалість ISO",
            ipv4: "адреса IPv4",
            ipv6: "адреса IPv6",
            mac: "адреса MAC",
            cidrv4: "діапазон IPv4",
            cidrv6: "діапазон IPv6",
            base64: "рядок у кодуванні base64",
            base64url: "рядок у кодуванні base64url",
            json_string: "рядок JSON",
            e164: "номер E.164",
            credit_card: "номер кредитної картки",
            currency_code: "код валюти",
            iban: "IBAN",
            jwt: "JWT",
            template_literal: "вхідні дані",
          }),
          (i = { nan: "NaN", number: "число", array: "масив" }),
          (n) => {
            switch (n.code) {
              case "invalid_type": {
                let t = i[n.expected] ?? n.expected,
                  r = eg(n.input),
                  a = i[r] ?? r;
                if (/^[A-Z]/.test(n.expected))
                  return `Неправильні вхідні дані: очікується instanceof ${n.expected}, отримано ${a}`;
                return `Неправильні вхідні дані: очікується ${t}, отримано ${a}`;
              }
              case "invalid_value":
                if (1 === n.values.length) return `Неправильні вхідні дані: очікується ${K(n.values[0])}`;
                return `Неправильна опція: очікується одне з ${c(n.values, "|")}`;
              case "too_big": {
                let r = n.inclusive ? "<=" : "<",
                  i = t[n.origin] ?? null;
                if (i)
                  return `Занадто велике: очікується, що ${n.origin ?? "значення"} ${i.verb} ${r}${n.maximum.toString()} ${i.unit ?? "елементів"}`;
                return `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${r}${n.maximum.toString()}`;
              }
              case "too_small": {
                let r = n.inclusive ? ">=" : ">",
                  i = t[n.origin] ?? null;
                if (i)
                  return `Занадто мале: очікується, що ${n.origin} ${i.verb} ${r}${n.minimum.toString()} ${i.unit}`;
                return `Занадто мале: очікується, що ${n.origin} буде ${r}${n.minimum.toString()}`;
              }
              case "invalid_format":
                if ("starts_with" === n.format) return `Неправильний рядок: повинен починатися з "${n.prefix}"`;
                if ("ends_with" === n.format) return `Неправильний рядок: повинен закінчуватися на "${n.suffix}"`;
                if ("includes" === n.format) return `Неправильний рядок: повинен містити "${n.includes}"`;
                if ("regex" === n.format) return `Неправильний рядок: повинен відповідати шаблону ${n.pattern}`;
                return `Неправильний ${r[n.format] ?? n.format}`;
              case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${n.divisor}`;
              case "unrecognized_keys":
                return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${c(n.keys, ", ")}`;
              case "invalid_key":
                return `Неправильний ключ у ${n.origin}`;
              case "invalid_union":
              default:
                return "Неправильні вхідні дані";
              case "invalid_element":
                return `Неправильне значення у ${n.origin}`;
            }
          }),
      };
    }
    t.s(
      [
        "ar",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "حرف", verb: "أن يحوي" },
                file: { unit: "بايت", verb: "أن يحوي" },
                array: { unit: "عنصر", verb: "أن يحوي" },
                set: { unit: "عنصر", verb: "أن يحوي" },
                map: { unit: "عنصر", verb: "أن يحوي" },
              }),
              (r = {
                regex: "مدخل",
                email: "بريد إلكتروني",
                url: "رابط",
                emoji: "إيموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاريخ ووقت بمعيار ISO",
                date: "تاريخ بمعيار ISO",
                time: "وقت بمعيار ISO",
                duration: "مدة بمعيار ISO",
                ipv4: "عنوان IPv4",
                ipv6: "عنوان IPv6",
                mac: "عنوان MAC",
                cidrv4: "مدى عناوين بصيغة IPv4",
                cidrv6: "مدى عناوين بصيغة IPv6",
                base64: "نَص بترميز base64-encoded",
                base64url: "نَص بترميز base64url-encoded",
                json_string: "نَص على هيئة JSON",
                e164: "رقم هاتف بمعيار E.164",
                credit_card: "رقم بطاقة الائتمان",
                currency_code: "رمز العملة",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "مدخل",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `مدخلات غير مقبولة: يفترض إدخال instanceof ${n.expected}، ولكن تم إدخال ${a}`;
                    return `مدخلات غير مقبولة: يفترض إدخال ${t}، ولكن تم إدخال ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `مدخلات غير مقبولة: يفترض إدخال ${K(n.values[0])}`;
                    return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${r} ${n.maximum.toString()} ${i.unit ?? "عنصر"}`;
                    return `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${r} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()} ${i.unit}`;
                    return `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"`;
                    if ("ends_with" === n.format) return `نَص غير مقبول: يجب أن ينتهي بـ "${n.suffix}"`;
                    if ("includes" === n.format) return `نَص غير مقبول: يجب أن يتضمَّن "${n.includes}"`;
                    if ("regex" === n.format) return `نَص غير مقبول: يجب أن يطابق النمط ${n.pattern}`;
                    return `${r[n.format] ?? n.format} غير مقبول`;
                  case "not_multiple_of":
                    return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
                  case "unrecognized_keys":
                    return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${c(n.keys, "، ")}`;
                  case "invalid_key":
                    return `معرف غير مقبول في ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "مدخل غير مقبول";
                  case "invalid_element":
                    return `مدخل غير مقبول في ${n.origin}`;
                }
              }),
          };
        },
        "az",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "simvol", verb: "olmalıdır" },
                file: { unit: "bayt", verb: "olmalıdır" },
                array: { unit: "element", verb: "olmalıdır" },
                set: { unit: "element", verb: "olmalıdır" },
                map: { unit: "element", verb: "olmalıdır" },
              }),
              (r = {
                regex: "input",
                email: "email address",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datetime",
                date: "ISO date",
                time: "ISO time",
                duration: "ISO duration",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded string",
                base64url: "base64url-encoded string",
                json_string: "JSON string",
                e164: "E.164 number",
                credit_card: "kredit kartı nömrəsi",
                currency_code: "valyuta kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Yanlış dəyər: g\xf6zlənilən instanceof ${n.expected}, daxil olan ${a}`;
                    return `Yanlış dəyər: g\xf6zlənilən ${t}, daxil olan ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Yanlış dəyər: g\xf6zlənilən ${K(n.values[0])}`;
                    return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${n.origin ?? "dəyər"} ${r}${n.maximum.toString()} ${i.unit ?? "element"}`;
                    return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${n.origin ?? "dəyər"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `\xc7ox ki\xe7ik: g\xf6zlənilən ${n.origin} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `\xc7ox ki\xe7ik: g\xf6zlənilən ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Yanlış mətn: "${n.prefix}" ilə başlamalıdır`;
                    if ("ends_with" === n.format) return `Yanlış mətn: "${n.suffix}" ilə bitməlidir`;
                    if ("includes" === n.format) return `Yanlış mətn: "${n.includes}" daxil olmalıdır`;
                    if ("regex" === n.format) return `Yanlış mətn: ${n.pattern} şablonuna uyğun olmalıdır`;
                    return `Yanlış ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Yanlış ədəd: ${n.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
                  case "unrecognized_keys":
                    return `Tanınmayan a\xe7ar${n.keys.length > 1 ? "lar" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} daxilində yanlış a\xe7ar`;
                  case "invalid_union":
                  default:
                    return "Yanlış dəyər";
                  case "invalid_element":
                    return `${n.origin} daxilində yanlış dəyər`;
                }
              }),
          };
        },
        "be",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" },
                array: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
                set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
                map: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
                file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
              }),
              (r = {
                regex: "увод",
                email: "email адрас",
                url: "URL",
                emoji: "эмодзі",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата і час",
                date: "ISO дата",
                time: "ISO час",
                duration: "ISO працягласць",
                ipv4: "IPv4 адрас",
                ipv6: "IPv6 адрас",
                mac: "MAC адрас",
                cidrv4: "IPv4 дыяпазон",
                cidrv6: "IPv6 дыяпазон",
                base64: "радок у фармаце base64",
                base64url: "радок у фармаце base64url",
                json_string: "JSON радок",
                e164: "нумар E.164",
                credit_card: "нумар крэдытнай карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "увод",
              }),
              (i = { nan: "NaN", number: "лік", array: "масіў" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Няправільны ўвод: чакаўся instanceof ${n.expected}, атрымана ${a}`;
                    return `Няправільны ўвод: чакаўся ${t}, атрымана ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Няправільны ўвод: чакалася ${K(n.values[0])}`;
                    return `Няправільны варыянт: чакаўся адзін з ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = n2(Number(n.maximum), i.unit.one, i.unit.few, i.unit.many);
                      return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${i.verb} ${r}${n.maximum.toString()} ${t}`;
                    }
                    return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = n2(Number(n.minimum), i.unit.one, i.unit.few, i.unit.many);
                      return `Занадта малы: чакалася, што ${n.origin} павінна ${i.verb} ${r}${n.minimum.toString()} ${t}`;
                    }
                    return `Занадта малы: чакалася, што ${n.origin} павінна быць ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Няправільны радок: павінен пачынацца з "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Няправільны радок: павінен заканчвацца на "${n.suffix}"`;
                    if ("includes" === n.format) return `Няправільны радок: павінен змяшчаць "${n.includes}"`;
                    if ("regex" === n.format) return `Няправільны радок: павінен адпавядаць шаблону ${n.pattern}`;
                    return `Няправільны ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Няправільны лік: павінен быць кратным ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Няправільны ключ у ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Няправільны ўвод";
                  case "invalid_element":
                    return `Няправільнае значэнне ў ${n.origin}`;
                }
              }),
          };
        },
        "bg",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "символа", verb: "да съдържа" },
                file: { unit: "байта", verb: "да съдържа" },
                array: { unit: "елемента", verb: "да съдържа" },
                set: { unit: "елемента", verb: "да съдържа" },
                map: { unit: "елемента", verb: "да съдържа" },
              }),
              (r = {
                regex: "вход",
                email: "имейл адрес",
                url: "URL",
                emoji: "емоджи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO време",
                date: "ISO дата",
                time: "ISO време",
                duration: "ISO продължителност",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "base64-кодиран низ",
                base64url: "base64url-кодиран низ",
                json_string: "JSON низ",
                e164: "E.164 номер",
                credit_card: "номер на кредитна карта",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вход",
              }),
              (i = { nan: "NaN", number: "число", array: "масив" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Невалиден вход: очакван instanceof ${n.expected}, получен ${a}`;
                    return `Невалиден вход: очакван ${t}, получен ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Невалиден вход: очакван ${K(n.values[0])}`;
                    return `Невалидна опция: очаквано едно от ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Твърде голямо: очаква се ${n.origin ?? "стойност"} да съдържа ${r}${n.maximum.toString()} ${i.unit ?? "елемента"}`;
                    return `Твърде голямо: очаква се ${n.origin ?? "стойност"} да бъде ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Твърде малко: очаква се ${n.origin} да съдържа ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Твърде малко: очаква се ${n.origin} да бъде ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format": {
                    if ("starts_with" === n.format) return `Невалиден низ: трябва да започва с "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Невалиден низ: трябва да завършва с "${n.suffix}"`;
                    if ("includes" === n.format) return `Невалиден низ: трябва да включва "${n.includes}"`;
                    if ("regex" === n.format) return `Невалиден низ: трябва да съвпада с ${n.pattern}`;
                    let t = "Невалиден";
                    return (
                      "emoji" === n.format && (t = "Невалидно"),
                      "datetime" === n.format && (t = "Невалидно"),
                      "date" === n.format && (t = "Невалидна"),
                      "time" === n.format && (t = "Невалидно"),
                      "duration" === n.format && (t = "Невалидна"),
                      `${t} ${r[n.format] ?? n.format}`
                    );
                  }
                  case "not_multiple_of":
                    return `Невалидно число: трябва да бъде кратно на ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Неразпознат${n.keys.length > 1 ? "и" : ""} ключ${n.keys.length > 1 ? "ове" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Невалиден ключ в ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Невалиден вход";
                  case "invalid_element":
                    return `Невалидна стойност в ${n.origin}`;
                }
              }),
          };
        },
        "bn",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "অক্ষর", verb: "থাকতে হবে" },
                file: { unit: "বাইট", verb: "থাকতে হবে" },
                array: { unit: "আইটেম", verb: "থাকতে হবে" },
                set: { unit: "আইটেম", verb: "থাকতে হবে" },
                map: { unit: "এন্ট্রি", verb: "থাকতে হবে" },
              }),
              (r = {
                regex: "ইনপুট",
                email: "ইমেইল ঠিকানা",
                url: "URL",
                emoji: "ইমোজি",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO তারিখ ও সময়",
                date: "ISO তারিখ",
                time: "ISO সময়",
                duration: "ISO সময়কাল",
                ipv4: "IPv4 ঠিকানা",
                ipv6: "IPv6 ঠিকানা",
                mac: "MAC ঠিকানা",
                cidrv4: "IPv4 রেঞ্জ",
                cidrv6: "IPv6 রেঞ্জ",
                base64: "base64-এনকোডেড স্ট্রিং",
                base64url: "base64url-এনকোডেড স্ট্রিং",
                json_string: "JSON স্ট্রিং",
                e164: "E.164 নম্বর",
                credit_card: "ক্রেডিট কার্ড নম্বর",
                currency_code: "মুদ্রা কোড",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ইনপুট",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `অবৈধ ইনপুট: প্রত্যাশিত ${t}, প্রাপ্ত ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `অবৈধ ইনপুট: প্রত্যাশিত ${K(n.values[0])}`;
                    return `অবৈধ অপশন: ${c(n.values, " | ")} এর মধ্যে একটি প্রত্যাশিত`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `অনেক বড়: ${n.origin ?? "মান"} ${r}${n.maximum.toString()} ${i.unit ?? "এলিমেন্ট"} হতে হবে`;
                    return `অনেক বড়: ${n.origin ?? "মান"} ${r}${n.maximum.toString()} হতে হবে`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `অনেক ছোট: ${n.origin} ${r}${n.minimum.toString()} ${i.unit} হতে হবে`;
                    return `অনেক ছোট: ${n.origin} ${r}${n.minimum.toString()} হতে হবে`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `অবৈধ স্ট্রিং: "${n.prefix}" দিয়ে শুরু হতে হবে`;
                    if ("ends_with" === n.format) return `অবৈধ স্ট্রিং: "${n.suffix}" দিয়ে শেষ হতে হবে`;
                    if ("includes" === n.format) return `অবৈধ স্ট্রিং: "${n.includes}" অন্তর্ভুক্ত থাকতে হবে`;
                    if ("regex" === n.format) return `অবৈধ স্ট্রিং: ${n.pattern} প্যাটার্ন মিলতে হবে`;
                    return `অবৈধ ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `অবৈধ নম্বর: ${n.divisor} এর গুণিতক হতে হবে`;
                  case "unrecognized_keys":
                    return `অচেনা কী${n.keys.length > 1 ? "গুলো" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} এ অবৈধ কী`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${t}`;
                    }
                    return "অবৈধ ইনপুট";
                  case "invalid_element":
                    return `${n.origin} এ অবৈধ মান`;
                  default:
                    return "অবৈধ ইনপুট";
                }
              }),
          };
        },
        "ca",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caràcters", verb: "contenir" },
                file: { unit: "bytes", verb: "contenir" },
                array: { unit: "elements", verb: "contenir" },
                set: { unit: "elements", verb: "contenir" },
                map: { unit: "elements", verb: "contenir" },
              }),
              (r = {
                regex: "entrada",
                email: "adreça electrònica",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i hora ISO",
                date: "data ISO",
                time: "hora ISO",
                duration: "durada ISO",
                ipv4: "adreça IPv4",
                ipv6: "adreça IPv6",
                mac: "adreça MAC",
                cidrv4: "rang IPv4",
                cidrv6: "rang IPv6",
                base64: "cadena codificada en base64",
                base64url: "cadena codificada en base64url",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de targeta de crèdit",
                currency_code: "codi de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Tipus inv\xe0lid: s'esperava instanceof ${n.expected}, s'ha rebut ${a}`;
                    return `Tipus inv\xe0lid: s'esperava ${t}, s'ha rebut ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Valor inv\xe0lid: s'esperava ${K(n.values[0])}`;
                    return `Opci\xf3 inv\xe0lida: s'esperava una de ${c(n.values, " o ")}`;
                  case "too_big": {
                    let r = n.inclusive ? "com a màxim" : "menys de",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingu\xe9s ${r} ${n.maximum.toString()} ${i.unit ?? "elements"}`;
                    return `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${r} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? "com a mínim" : "més de",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Massa petit: s'esperava que ${n.origin} contingu\xe9s ${r} ${n.minimum.toString()} ${i.unit}`;
                    return `Massa petit: s'esperava que ${n.origin} fos ${r} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Format inv\xe0lid: ha de comen\xe7ar amb "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Format inv\xe0lid: ha d'acabar amb "${n.suffix}"`;
                    if ("includes" === n.format) return `Format inv\xe0lid: ha d'incloure "${n.includes}"`;
                    if ("regex" === n.format) return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${n.pattern}`;
                    return `Format inv\xe0lid per a ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Clau inv\xe0lida a ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrada invàlida";
                  case "invalid_element":
                    return `Element inv\xe0lid a ${n.origin}`;
                }
              }),
          };
        },
        "ckb",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "پیت", verb: "بێت" },
                file: { unit: "بایت", verb: "بێت" },
                array: { unit: "دانە", verb: "بێت" },
                set: { unit: "دانە", verb: "بێت" },
                map: { unit: "دانە", verb: "بێت" },
              }),
              (r = {
                regex: "regex",
                email: "ئیمەیڵ",
                url: "بەستەر (URL)",
                emoji: "ئیمۆجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ڕێکەوت و کات",
                date: "ڕێکەوت",
                time: "کات",
                duration: "ماوە",
                ipv4: "ناونیشانی IPv4",
                ipv6: "ناونیشانی IPv6",
                mac: "ناونیشانی MAC",
                cidrv4: "مەودای IPv4",
                cidrv6: "مەودای IPv6",
                base64: "دەقی base64",
                base64url: "دەقی base64url",
                json_string: "دەقی JSON",
                e164: "ژمارەی E.164",
                credit_card: "ژمارەی کارتی کرێدیت",
                currency_code: "کۆدی دراو",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "تێکردە",
              }),
              (i = {
                nan: "NaN",
                string: "نووسین",
                number: "ژمارە",
                boolean: "boolean",
                array: "array",
                object: "object",
                date: "ڕێکەوت",
                integer: "ژمارە",
                float: "ژمارە",
                null: "null",
                undefined: "undefined",
                function: "function",
                symbol: "symbol",
                unknown: "unknown",
                promise: "promise",
                void: "void",
                never: "never",
                map: "map",
                set: "set",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r,
                      o = ["ا", "و", "ۆ", "وو", "ە", "ی", "ێ"].some((t) => a.endsWith(t)) ? "یە" : "ە",
                      u = /^[a-zA-Z]+$/.test(a);
                    if ("null" === r || "undefined" === r) return "داواکراوە";
                    return `چاوەڕوانکراوە ${t} بێت، بەڵام ${a}${u ? "" : o}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `بەهاکە نادرووستە: چاوەڕوانکراوە ${K(n.values[0])} بێت`;
                    return `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = t[n.origin] ?? null;
                    if (r) return `پێویستە بە لایەنی زۆرەوە ${n.maximum.toString()} ${r.unit} ${r.verb}`;
                    return `پێویستە بە لایەنی زۆرەوە ${n.maximum.toString()} بێت`;
                  }
                  case "too_small": {
                    let r = t[n.origin] ?? null;
                    if (r) return `پێویستە بە لایەنی کەمەوە ${n.minimum.toString()} ${r.unit} ${r.verb}`;
                    return `پێویستە بە لایەنی کەمەوە ${n.minimum.toString()} بێت`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `دەقی نادروست: پێویستە دەستپێبکات بە "${n.prefix}"`;
                    if ("ends_with" === n.format) return `دەقی نادروست: پێویستە کۆتاییبێت بە "${n.suffix}"`;
                    if ("includes" === n.format) return `دەقی نادروست: پێویستە "${n.includes}" لەخۆبگرێت`;
                    if ("regex" === n.format) return `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${n.pattern} بگونجێت`;
                    return `بەهای ${r[n.format] ?? n.format} نادروستە`;
                  case "not_multiple_of":
                    return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${n.divisor}`;
                  case "unrecognized_keys":
                    return `کلیلی نەناسراو: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `کلیلی نادروست لە ${n.origin}`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${t}`;
                    }
                    return "یەکگرتنی نادروست";
                  case "invalid_element":
                    return `${n.origin} بەهاکە نادروستە`;
                  default:
                    return "تێکردەی نادروست";
                }
              }),
          };
        },
        "cs",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "znaků", verb: "mít" },
                file: { unit: "bajtů", verb: "mít" },
                array: { unit: "prvků", verb: "mít" },
                set: { unit: "prvků", verb: "mít" },
                map: { unit: "prvků", verb: "mít" },
              }),
              (r = {
                regex: "regulární výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "datum a čas ve formátu ISO",
                date: "datum ve formátu ISO",
                time: "čas ve formátu ISO",
                duration: "doba trvání ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "řetězec zakódovaný ve formátu base64",
                base64url: "řetězec zakódovaný ve formátu base64url",
                json_string: "řetězec ve formátu JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditní karty",
                currency_code: "kód měny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup",
              }),
              (i = { nan: "NaN", number: "číslo", string: "řetězec", function: "funkce", array: "pole" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Neplatn\xfd vstup: oček\xe1v\xe1no instanceof ${n.expected}, obdrženo ${a}`;
                    return `Neplatn\xfd vstup: oček\xe1v\xe1no ${t}, obdrženo ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Neplatn\xfd vstup: oček\xe1v\xe1no ${K(n.values[0])}`;
                    return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Hodnota je př\xedliš velk\xe1: ${n.origin ?? "hodnota"} mus\xed m\xedt ${r}${n.maximum.toString()} ${i.unit ?? "prvků"}`;
                    return `Hodnota je př\xedliš velk\xe1: ${n.origin ?? "hodnota"} mus\xed b\xfdt ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Hodnota je př\xedliš mal\xe1: ${n.origin ?? "hodnota"} mus\xed m\xedt ${r}${n.minimum.toString()} ${i.unit ?? "prvků"}`;
                    return `Hodnota je př\xedliš mal\xe1: ${n.origin ?? "hodnota"} mus\xed b\xfdt ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Neplatn\xfd řetězec: mus\xed končit na "${n.suffix}"`;
                    if ("includes" === n.format) return `Neplatn\xfd řetězec: mus\xed obsahovat "${n.includes}"`;
                    if ("regex" === n.format) return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${n.pattern}`;
                    return `Neplatn\xfd form\xe1t ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Nezn\xe1m\xe9 kl\xedče: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Neplatn\xfd kl\xedč v ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Neplatný vstup";
                  case "invalid_element":
                    return `Neplatn\xe1 hodnota v ${n.origin}`;
                }
              }),
          };
        },
        "da",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "tegn", verb: "havde" },
                file: { unit: "bytes", verb: "havde" },
                array: { unit: "elementer", verb: "indeholdt" },
                set: { unit: "elementer", verb: "indeholdt" },
                map: { unit: "elementer", verb: "indeholdt" },
              }),
              (r = {
                regex: "input",
                email: "e-mailadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslæt",
                date: "ISO-dato",
                time: "ISO-klokkeslæt",
                duration: "ISO-varighed",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodet streng",
                base64url: "base64url-kodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kreditkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = {
                nan: "NaN",
                string: "streng",
                number: "tal",
                boolean: "boolean",
                array: "liste",
                object: "objekt",
                set: "sæt",
                file: "fil",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ugyldigt input: forventede instanceof ${n.expected}, fik ${a}`;
                    return `Ugyldigt input: forventede ${t}, fik ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ugyldig v\xe6rdi: forventede ${K(n.values[0])}`;
                    return `Ugyldigt valg: forventede en af f\xf8lgende ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a)
                      return `For stor: forventede ${o ?? "value"} ${a.verb} ${r} ${n.maximum.toString()} ${a.unit ?? "elementer"}`;
                    return `For stor: forventede ${o ?? "value"} havde ${r} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a) return `For lille: forventede ${o} ${a.verb} ${r} ${n.minimum.toString()} ${a.unit}`;
                    return `For lille: forventede ${o} havde ${r} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ugyldig streng: skal starte med "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Ugyldig streng: skal ende med "${n.suffix}"`;
                    if ("includes" === n.format) return `Ugyldig streng: skal indeholde "${n.includes}"`;
                    if ("regex" === n.format) return `Ugyldig streng: skal matche m\xf8nsteret ${n.pattern}`;
                    return `Ugyldig ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ugyldigt tal: skal v\xe6re deleligt med ${n.divisor}`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8gle i ${n.origin}`;
                  case "invalid_union":
                    return "Ugyldigt input: matcher ingen af de tilladte typer";
                  case "invalid_element":
                    return `Ugyldig v\xe6rdi i ${n.origin}`;
                  default:
                    return "Ugyldigt input";
                }
              }),
          };
        },
        "de",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "Zeichen", verb: "zu haben" },
                file: { unit: "Bytes", verb: "zu haben" },
                array: { unit: "Elemente", verb: "zu haben" },
                set: { unit: "Elemente", verb: "zu haben" },
                map: { unit: "Elemente", verb: "zu haben" },
              }),
              (r = {
                regex: "Eingabe",
                email: "E-Mail-Adresse",
                url: "URL",
                emoji: "Emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-Datum und -Uhrzeit",
                date: "ISO-Datum",
                time: "ISO-Uhrzeit",
                duration: "ISO-Dauer",
                ipv4: "IPv4-Adresse",
                ipv6: "IPv6-Adresse",
                mac: "MAC-Adresse",
                cidrv4: "IPv4-Bereich",
                cidrv6: "IPv6-Bereich",
                base64: "Base64-codierter String",
                base64url: "Base64-URL-codierter String",
                json_string: "JSON-String",
                e164: "E.164-Nummer",
                credit_card: "Kreditkartennummer",
                currency_code: "Währungscode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Eingabe",
              }),
              (i = { nan: "NaN", number: "Zahl", array: "Array" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ung\xfcltige Eingabe: erwartet instanceof ${n.expected}, erhalten ${a}`;
                    return `Ung\xfcltige Eingabe: erwartet ${t}, erhalten ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ung\xfcltige Eingabe: erwartet ${K(n.values[0])}`;
                    return `Ung\xfcltige Option: erwartet eine von ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Zu gro\xdf: erwartet, dass ${n.origin ?? "Wert"} ${r}${n.maximum.toString()} ${i.unit ?? "Elemente"} hat`;
                    return `Zu gro\xdf: erwartet, dass ${n.origin ?? "Wert"} ${r}${n.maximum.toString()} ist`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ${i.unit} hat`;
                    return `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ist`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ung\xfcltiger String: muss mit "${n.prefix}" beginnen`;
                    if ("ends_with" === n.format) return `Ung\xfcltiger String: muss mit "${n.suffix}" enden`;
                    if ("includes" === n.format) return `Ung\xfcltiger String: muss "${n.includes}" enthalten`;
                    if ("regex" === n.format) return `Ung\xfcltiger String: muss dem Muster ${n.pattern} entsprechen`;
                    return `Ung\xfcltig: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ung\xfcltige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ung\xfcltiger Schl\xfcssel in ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Ungültige Eingabe";
                  case "invalid_element":
                    return `Ung\xfcltiger Wert in ${n.origin}`;
                }
              }),
          };
        },
        "el",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "χαρακτήρες", verb: "να έχει" },
                file: { unit: "bytes", verb: "να έχει" },
                array: { unit: "στοιχεία", verb: "να έχει" },
                set: { unit: "στοιχεία", verb: "να έχει" },
                map: { unit: "καταχωρήσεις", verb: "να έχει" },
              }),
              (r = {
                regex: "είσοδος",
                email: "διεύθυνση email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ημερομηνία και ώρα",
                date: "ISO ημερομηνία",
                time: "ISO ώρα",
                duration: "ISO διάρκεια",
                ipv4: "διεύθυνση IPv4",
                ipv6: "διεύθυνση IPv6",
                mac: "διεύθυνση MAC",
                cidrv4: "εύρος IPv4",
                cidrv6: "εύρος IPv6",
                base64: "συμβολοσειρά κωδικοποιημένη σε base64",
                base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
                json_string: "συμβολοσειρά JSON",
                e164: "αριθμός E.164",
                credit_card: "αριθμός πιστωτικής κάρτας",
                currency_code: "κωδικός νομίσματος",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "είσοδος",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if ("string" == typeof n.expected && /^[A-Z]/.test(n.expected))
                      return `Μη έγκυρη είσοδος: αναμενόταν instanceof ${n.expected}, λήφθηκε ${a}`;
                    return `Μη έγκυρη είσοδος: αναμενόταν ${t}, λήφθηκε ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Μη έγκυρη είσοδος: αναμενόταν ${K(n.values[0])}`;
                    return `Μη έγκυρη επιλογή: αναμενόταν ένα από ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Πολύ μεγάλο: αναμενόταν ${n.origin ?? "τιμή"} να έχει ${r}${n.maximum.toString()} ${i.unit ?? "στοιχεία"}`;
                    return `Πολύ μεγάλο: αναμενόταν ${n.origin ?? "τιμή"} να είναι ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Πολύ μικρό: αναμενόταν ${n.origin} να έχει ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Πολύ μικρό: αναμενόταν ${n.origin} να είναι ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${n.suffix}"`;
                    if ("includes" === n.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${n.pattern}`;
                    return `Μη έγκυρο: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Άγνωστ${n.keys.length > 1 ? "α" : "ο"} κλειδ${n.keys.length > 1 ? "ιά" : "ί"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Μη έγκυρο κλειδί στο ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Μη έγκυρη είσοδος";
                  case "invalid_element":
                    return `Μη έγκυρη τιμή στο ${n.origin}`;
                }
              }),
          };
        },
        "en",
        0,
        n9,
        "eo",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "karaktrojn", verb: "havi" },
                file: { unit: "bajtojn", verb: "havi" },
                array: { unit: "elementojn", verb: "havi" },
                set: { unit: "elementojn", verb: "havi" },
                map: { unit: "elementojn", verb: "havi" },
              }),
              (r = {
                regex: "enigo",
                email: "retadreso",
                url: "URL",
                emoji: "emoĝio",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datotempo",
                date: "ISO-dato",
                time: "ISO-tempo",
                duration: "ISO-daŭro",
                ipv4: "IPv4-adreso",
                ipv6: "IPv6-adreso",
                mac: "MAC-adreso",
                cidrv4: "IPv4-rango",
                cidrv6: "IPv6-rango",
                base64: "64-ume kodita karaktraro",
                base64url: "URL-64-ume kodita karaktraro",
                json_string: "JSON-karaktraro",
                e164: "E.164-nombro",
                credit_card: "kreditkarta numero",
                currency_code: "valuta kodo",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "enigo",
              }),
              (i = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Nevalida enigo: atendiĝis instanceof ${n.expected}, riceviĝis ${a}`;
                    return `Nevalida enigo: atendiĝis ${t}, riceviĝis ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Nevalida enigo: atendiĝis ${K(n.values[0])}`;
                    return `Nevalida opcio: atendiĝis unu el ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${r}${n.maximum.toString()} ${i.unit ?? "elementojn"}`;
                    return `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Tro malgranda: atendiĝis ke ${n.origin} havu ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Tro malgranda: atendiĝis ke ${n.origin} estu ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Nevalida karaktraro: devas finiĝi per "${n.suffix}"`;
                    if ("includes" === n.format) return `Nevalida karaktraro: devas inkluzivi "${n.includes}"`;
                    if ("regex" === n.format) return `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}`;
                    return `Nevalida ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Nekonata${n.keys.length > 1 ? "j" : ""} ŝlosilo${n.keys.length > 1 ? "j" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Nevalida ŝlosilo en ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Nevalida enigo";
                  case "invalid_element":
                    return `Nevalida valoro en ${n.origin}`;
                }
              }),
          };
        },
        "es",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caracteres", verb: "tener" },
                file: { unit: "bytes", verb: "tener" },
                array: { unit: "elementos", verb: "tener" },
                set: { unit: "elementos", verb: "tener" },
              }),
              (r = {
                regex: "entrada",
                email: "dirección de correo electrónico",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "fecha y hora ISO",
                date: "fecha ISO",
                time: "hora ISO",
                duration: "duración ISO",
                ipv4: "dirección IPv4",
                ipv6: "dirección IPv6",
                mac: "dirección MAC",
                cidrv4: "rango IPv4",
                cidrv6: "rango IPv6",
                base64: "cadena codificada en base64",
                base64url: "URL codificada en base64",
                json_string: "cadena JSON",
                e164: "número E.164",
                credit_card: "número de tarjeta de crédito",
                currency_code: "código de moneda",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrada",
              }),
              (i = {
                nan: "NaN",
                string: "texto",
                number: "número",
                boolean: "booleano",
                array: "arreglo",
                object: "objeto",
                set: "conjunto",
                file: "archivo",
                date: "fecha",
                bigint: "número grande",
                symbol: "símbolo",
                undefined: "indefinido",
                null: "nulo",
                function: "función",
                map: "mapa",
                record: "registro",
                tuple: "tupla",
                enum: "enumeración",
                union: "unión",
                literal: "literal",
                promise: "promesa",
                void: "vacío",
                never: "nunca",
                unknown: "desconocido",
                any: "cualquiera",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Entrada inv\xe1lida: se esperaba instanceof ${n.expected}, recibido ${a}`;
                    return `Entrada inv\xe1lida: se esperaba ${t}, recibido ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Entrada inv\xe1lida: se esperaba ${K(n.values[0])}`;
                    return `Opci\xf3n inv\xe1lida: se esperaba una de ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a)
                      return `Demasiado grande: se esperaba que ${o ?? "valor"} tuviera ${r}${n.maximum.toString()} ${a.unit ?? "elementos"}`;
                    return `Demasiado grande: se esperaba que ${o ?? "valor"} fuera ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a)
                      return `Demasiado peque\xf1o: se esperaba que ${o} tuviera ${r}${n.minimum.toString()} ${a.unit}`;
                    return `Demasiado peque\xf1o: se esperaba que ${o} fuera ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Cadena inv\xe1lida: debe comenzar con "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Cadena inv\xe1lida: debe terminar en "${n.suffix}"`;
                    if ("includes" === n.format) return `Cadena inv\xe1lida: debe incluir "${n.includes}"`;
                    if ("regex" === n.format) return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${n.pattern}`;
                    return `Inv\xe1lido ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Llave inv\xe1lida en ${i[n.origin] ?? n.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrada inválida";
                  case "invalid_element":
                    return `Valor inv\xe1lido en ${i[n.origin] ?? n.origin}`;
                }
              }),
          };
        },
        "fa",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "کاراکتر", verb: "داشته باشد" },
                file: { unit: "بایت", verb: "داشته باشد" },
                array: { unit: "آیتم", verb: "داشته باشد" },
                set: { unit: "آیتم", verb: "داشته باشد" },
                map: { unit: "آیتم", verb: "داشته باشد" },
              }),
              (r = {
                regex: "ورودی",
                email: "آدرس ایمیل",
                url: "URL",
                emoji: "ایموجی",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "تاریخ و زمان ایزو",
                date: "تاریخ ایزو",
                time: "زمان ایزو",
                duration: "مدت زمان ایزو",
                ipv4: "IPv4 آدرس",
                ipv6: "IPv6 آدرس",
                mac: "MAC آدرس",
                cidrv4: "IPv4 دامنه",
                cidrv6: "IPv6 دامنه",
                base64: "base64-encoded رشته",
                base64url: "base64url-encoded رشته",
                json_string: "JSON رشته",
                e164: "E.164 عدد",
                credit_card: "شماره کارت اعتباری",
                currency_code: "کد ارز",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودی",
              }),
              (i = { nan: "NaN", number: "عدد", array: "آرایه" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `ورودی نامعتبر: می‌بایست instanceof ${n.expected} می‌بود، ${a} دریافت شد`;
                    return `ورودی نامعتبر: می‌بایست ${t} می‌بود، ${a} دریافت شد`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `ورودی نامعتبر: می‌بایست ${K(n.values[0])} می‌بود`;
                    return `گزینه نامعتبر: می‌بایست یکی از ${c(n.values, "|")} می‌بود`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${r}${n.maximum.toString()} ${i.unit ?? "عنصر"} باشد`;
                    return `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${r}${n.maximum.toString()} باشد`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} ${i.unit} باشد`;
                    return `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} باشد`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `رشته نامعتبر: باید با "${n.prefix}" شروع شود`;
                    if ("ends_with" === n.format) return `رشته نامعتبر: باید با "${n.suffix}" تمام شود`;
                    if ("includes" === n.format) return `رشته نامعتبر: باید شامل "${n.includes}" باشد`;
                    if ("regex" === n.format) return `رشته نامعتبر: باید با الگوی ${n.pattern} مطابقت داشته باشد`;
                    return `${r[n.format] ?? n.format} نامعتبر`;
                  case "not_multiple_of":
                    return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
                  case "unrecognized_keys":
                    return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `کلید ناشناس در ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "ورودی نامعتبر";
                  case "invalid_element":
                    return `مقدار نامعتبر در ${n.origin}`;
                }
              }),
          };
        },
        "fi",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "merkkiä", subject: "merkkijonon" },
                file: { unit: "tavua", subject: "tiedoston" },
                array: { unit: "alkiota", subject: "listan" },
                set: { unit: "alkiota", subject: "joukon" },
                map: { unit: "alkiota", subject: "kuvauksen" },
                number: { unit: "", subject: "luvun" },
                bigint: { unit: "", subject: "suuren kokonaisluvun" },
                int: { unit: "", subject: "kokonaisluvun" },
                date: { unit: "", subject: "päivämäärän" },
              }),
              (r = {
                regex: "säännöllinen lauseke",
                email: "sähköpostiosoite",
                url: "URL-osoite",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-aikaleima",
                date: "ISO-päivämäärä",
                time: "ISO-aika",
                duration: "ISO-kesto",
                ipv4: "IPv4-osoite",
                ipv6: "IPv6-osoite",
                mac: "MAC-osoite",
                cidrv4: "IPv4-alue",
                cidrv6: "IPv6-alue",
                base64: "base64-koodattu merkkijono",
                base64url: "base64url-koodattu merkkijono",
                json_string: "JSON-merkkijono",
                e164: "E.164-luku",
                credit_card: "luottokortin numero",
                currency_code: "valuuttakoodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "templaattimerkkijono",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${a}`;
                    return `Virheellinen tyyppi: odotettiin ${t}, oli ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Virheellinen sy\xf6te: t\xe4ytyy olla ${K(n.values[0])}`;
                    return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Liian suuri: ${i.subject} t\xe4ytyy olla ${r}${n.maximum.toString()} ${i.unit}`.trim();
                    return `Liian suuri: arvon t\xe4ytyy olla ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Liian pieni: ${i.subject} t\xe4ytyy olla ${r}${n.minimum.toString()} ${i.unit}`.trim();
                    return `Liian pieni: arvon t\xe4ytyy olla ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${n.suffix}"`;
                    if ("includes" === n.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${n.pattern}`;
                    return `Virheellinen ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Virheellinen luku: t\xe4ytyy olla luvun ${n.divisor} monikerta`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return "Virheellinen avain tietueessa";
                  case "invalid_union":
                    return "Virheellinen unioni";
                  case "invalid_element":
                    return "Virheellinen arvo joukossa";
                  default:
                    return "Virheellinen syöte";
                }
              }),
          };
        },
        "fr",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caractères", verb: "avoir" },
                file: { unit: "octets", verb: "avoir" },
                array: { unit: "éléments", verb: "avoir" },
                set: { unit: "éléments", verb: "avoir" },
              }),
              (r = {
                regex: "expression régulière",
                email: "adresse e-mail",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date et heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne de caractères encodée en base64",
                base64url: "chaîne de caractères encodée en base64url",
                json_string: "chaîne de caractères JSON",
                e164: "numéro au format E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée",
              }),
              (i = {
                string: "chaîne de caractères",
                number: "nombre",
                int: "entier",
                boolean: "booléen",
                bigint: "grand entier",
                symbol: "symbole",
                undefined: "indéfini",
                null: "null",
                never: "jamais",
                void: "vide",
                date: "date",
                array: "tableau",
                object: "objet",
                tuple: "tuple",
                record: "record",
                map: "map",
                set: "ensemble",
                file: "fichier",
                nonoptional: "non optionnel",
                nan: "NaN",
                function: "fonction",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Entr\xe9e invalide : instance de ${n.expected} attendu, ${a} re\xe7u`;
                    return `Entr\xe9e invalide : ${t} attendu, ${a} re\xe7u`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Entr\xe9e invalide : ${K(n.values[0])} attendu`;
                    return `Option invalide : une valeur parmi ${c(n.values, "|")} attendue`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      a = t[n.origin] ?? null;
                    if (a)
                      return `Trop grand : ${i[n.origin] ?? "valeur"} doit ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? "élément(s)"}`;
                    return `Trop grand : ${i[n.origin] ?? "valeur"} doit \xeatre ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      a = t[n.origin] ?? null;
                    if (a)
                      return `Trop petit : ${i[n.origin] ?? "valeur"} doit ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`;
                    return `Trop petit : ${i[n.origin] ?? "valeur"} doit \xeatre ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `Cha\xeene de caract\xe8res invalide : doit commencer par "${n.prefix}"`;
                    if ("ends_with" === n.format)
                      return `Cha\xeene de caract\xe8res invalide : doit se terminer par "${n.suffix}"`;
                    if ("includes" === n.format)
                      return `Cha\xeene de caract\xe8res invalide : doit inclure "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Cha\xeene de caract\xe8res invalide : doit correspondre au motif ${n.pattern}`;
                    return `${r[n.format] ?? n.format} invalide`;
                  case "not_multiple_of":
                    return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Cl\xe9${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Cl\xe9 invalide dans ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrée invalide";
                  case "invalid_element":
                    return `Valeur invalide dans ${n.origin}`;
                }
              }),
          };
        },
        "frCA",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caractères", verb: "avoir" },
                file: { unit: "octets", verb: "avoir" },
                array: { unit: "éléments", verb: "avoir" },
                set: { unit: "éléments", verb: "avoir" },
                map: { unit: "éléments", verb: "avoir" },
              }),
              (r = {
                regex: "entrée",
                email: "adresse courriel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "date-heure ISO",
                date: "date ISO",
                time: "heure ISO",
                duration: "durée ISO",
                ipv4: "adresse IPv4",
                ipv6: "adresse IPv6",
                mac: "adresse MAC",
                cidrv4: "plage IPv4",
                cidrv6: "plage IPv6",
                base64: "chaîne encodée en base64",
                base64url: "chaîne encodée en base64url",
                json_string: "chaîne JSON",
                e164: "numéro E.164",
                credit_card: "numéro de carte de crédit",
                currency_code: "code de devise",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "entrée",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Entr\xe9e invalide : attendu instanceof ${n.expected}, re\xe7u ${a}`;
                    return `Entr\xe9e invalide : attendu ${t}, re\xe7u ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Entr\xe9e invalide : attendu ${K(n.values[0])}`;
                    return `Option invalide : attendu l'une des valeurs suivantes ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "≤" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${r}${n.maximum.toString()} ${i.unit}`;
                    return `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? "≥" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Trop petit : attendu que ${n.origin} ait ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Trop petit : attendu que ${n.origin} soit ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Cha\xeene invalide : doit commencer par "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Cha\xeene invalide : doit se terminer par "${n.suffix}"`;
                    if ("includes" === n.format) return `Cha\xeene invalide : doit inclure "${n.includes}"`;
                    if ("regex" === n.format) return `Cha\xeene invalide : doit correspondre au motif ${n.pattern}`;
                    return `${r[n.format] ?? n.format} invalide`;
                  case "not_multiple_of":
                    return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Cl\xe9${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Cl\xe9 invalide dans ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Entrée invalide";
                  case "invalid_element":
                    return `Valeur invalide dans ${n.origin}`;
                }
              }),
          };
        },
        "gu",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "અક્ષર", verb: "હોવા જોઈએ" },
                file: { unit: "બાયટ", verb: "હોવા જોઈએ" },
                array: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
                set: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
                map: { unit: "એન્ટ્રી", verb: "હોવા જોઈએ" },
              }),
              (r = {
                regex: "ઇનપુટ",
                email: "ઈમેઇલ એડ્રેસ",
                url: "URL",
                emoji: "ઇમોજી",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO તારીખ અને સમય",
                date: "ISO તારીખ",
                time: "ISO સમય",
                duration: "ISO અવધિ",
                ipv4: "IPv4 એડ્રેસ",
                ipv6: "IPv6 એડ્રેસ",
                mac: "MAC એડ્રેસ",
                cidrv4: "IPv4 શ્રેણી",
                cidrv6: "IPv6 શ્રેણી",
                base64: "base64-એન્કોડેડ સ્ટ્રિંગ",
                base64url: "base64url-એન્કોડેડ સ્ટ્રિંગ",
                json_string: "JSON સ્ટ્રિંગ",
                e164: "E.164 નંબર",
                credit_card: "ક્રેડિટ કાર્ડ નંબર",
                currency_code: "ચલણ કોડ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ઇનપુટ",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `અમાન્ય ઇનપુટ: અપેક્ષિત ${t}, પ્રાપ્ત ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `અમાન્ય ઇનપુટ: અપેક્ષિત ${K(n.values[0])}`;
                    return `અમાન્ય વિકલ્પ: ${c(n.values, " | ")} માધ્યમથી એક અપેક્ષિત`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ખૂબ મોટું: ${n.origin ?? "મૂલ્ય"} ${r}${n.maximum.toString()} ${i.unit ?? "એલિમેન્ટ"} હોવા જોઈએ`;
                    return `ખૂબ મોટું: ${n.origin ?? "મૂલ્ય"} ${r}${n.maximum.toString()} હોવું જોઈએ`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `ખૂબ નાનું: ${n.origin} ${r}${n.minimum.toString()} ${i.unit} હોવા જોઈએ`;
                    return `ખૂબ નાનું: ${n.origin} ${r}${n.minimum.toString()} હોવું જોઈએ`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `અમાન્ય સ્ટ્રિંગ: "${n.prefix}" થી શરૂ થવું જોઈએ`;
                    if ("ends_with" === n.format) return `અમાન્ય સ્ટ્રિંગ: "${n.suffix}" પર સમાપ્ત થવું જોઈએ`;
                    if ("includes" === n.format) return `અમાન્ય સ્ટ્રિંગ: "${n.includes}" શામેલ હોવું જોઈએ`;
                    if ("regex" === n.format) return `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${n.pattern} સાથે મેળ ખાવું જોઈએ`;
                    return `અમાન્ય ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `અમાન્ય નંબર: ${n.divisor} નો ગુણાંક હોવો જોઈએ`;
                  case "unrecognized_keys":
                    return `ઓળખી શકાતા નહીં તે કી${n.keys.length > 1 ? "ઓ" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} માં અમાન્ય કી`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${t}`;
                    }
                    return "અમાન્ય ઇનપુટ";
                  case "invalid_element":
                    return `${n.origin} માં અમાન્ય મૂલ્ય`;
                  default:
                    return "અમાન્ય ઇનપુટ";
                }
              }),
          };
        },
        "he",
        0,
        function () {
          let t, r, i, n, a, o, u, s, l;
          return {
            localeError:
              ((t = {
                string: { label: "מחרוזת", gender: "f" },
                number: { label: "מספר", gender: "m" },
                boolean: { label: "ערך בוליאני", gender: "m" },
                bigint: { label: "BigInt", gender: "m" },
                date: { label: "תאריך", gender: "m" },
                array: { label: "מערך", gender: "m" },
                object: { label: "אובייקט", gender: "m" },
                null: { label: "ערך ריק (null)", gender: "m" },
                undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
                symbol: { label: "סימבול (Symbol)", gender: "m" },
                function: { label: "פונקציה", gender: "f" },
                map: { label: "מפה (Map)", gender: "f" },
                set: { label: "קבוצה (Set)", gender: "f" },
                file: { label: "קובץ", gender: "m" },
                promise: { label: "Promise", gender: "m" },
                NaN: { label: "NaN", gender: "m" },
                unknown: { label: "ערך לא ידוע", gender: "m" },
                value: { label: "ערך", gender: "m" },
              }),
              (r = {
                string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
                file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
                array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
                set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
                number: { unit: "", shortLabel: "קטן", longLabel: "גדול" },
              }),
              (i = (r) => (r ? t[r] : void 0)),
              (n = (r) => {
                let n = i(r);
                return n ? n.label : (r ?? t.unknown.label);
              }),
              (a = (t) => `ה${n(t)}`),
              (o = (t) => {
                let r = i(t);
                return "f" === (r?.gender ?? "m") ? "צריכה להיות" : "צריך להיות";
              }),
              (u = (t) => (t ? (r[t] ?? null) : null)),
              (s = {
                regex: { label: "קלט", gender: "m" },
                email: { label: "כתובת אימייל", gender: "f" },
                url: { label: "כתובת רשת", gender: "f" },
                emoji: { label: "אימוג'י", gender: "m" },
                uuid: { label: "UUID", gender: "m" },
                uuidv4: { label: "UUIDv4", gender: "m" },
                uuidv6: { label: "UUIDv6", gender: "m" },
                nanoid: { label: "nanoid", gender: "m" },
                guid: { label: "GUID", gender: "m" },
                cuid: { label: "cuid", gender: "m" },
                cuid2: { label: "cuid2", gender: "m" },
                ulid: { label: "ULID", gender: "m" },
                xid: { label: "XID", gender: "m" },
                ksuid: { label: "KSUID", gender: "m" },
                datetime: { label: "תאריך וזמן ISO", gender: "m" },
                date: { label: "תאריך ISO", gender: "m" },
                time: { label: "זמן ISO", gender: "m" },
                duration: { label: "משך זמן ISO", gender: "m" },
                ipv4: { label: "כתובת IPv4", gender: "f" },
                ipv6: { label: "כתובת IPv6", gender: "f" },
                mac: { label: "כתובת MAC", gender: "f" },
                cidrv4: { label: "טווח IPv4", gender: "m" },
                cidrv6: { label: "טווח IPv6", gender: "m" },
                base64: { label: "מחרוזת בבסיס 64", gender: "f" },
                base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
                json_string: { label: "מחרוזת JSON", gender: "f" },
                e164: { label: "מספר E.164", gender: "m" },
                credit_card: { label: "מספר כרטיס אשראי", gender: "m" },
                currency_code: { label: "קוד מטבע", gender: "m" },
                iban: { label: "IBAN", gender: "m" },
                jwt: { label: "JWT", gender: "m" },
                template_literal: { label: "קלט", gender: "m" },
                ends_with: { label: "קלט", gender: "m" },
                includes: { label: "קלט", gender: "m" },
                lowercase: { label: "קלט", gender: "m" },
                starts_with: { label: "קלט", gender: "m" },
                uppercase: { label: "קלט", gender: "m" },
              }),
              (l = { nan: "NaN" }),
              (r) => {
                switch (r.code) {
                  case "invalid_type": {
                    let i = r.expected,
                      a = l[i ?? ""] ?? n(i),
                      o = eg(r.input),
                      u = l[o] ?? t[o]?.label ?? o;
                    if (/^[A-Z]/.test(r.expected))
                      return `קלט לא תקין: צריך להיות instanceof ${r.expected}, התקבל ${u}`;
                    return `קלט לא תקין: צריך להיות ${a}, התקבל ${u}`;
                  }
                  case "invalid_value": {
                    if (1 === r.values.length) return `ערך לא תקין: הערך חייב להיות ${K(r.values[0])}`;
                    let t = r.values.map((t) => K(t));
                    if (2 === r.values.length) return `ערך לא תקין: האפשרויות המתאימות הן ${t[0]} או ${t[1]}`;
                    let i = t[t.length - 1],
                      n = t.slice(0, -1).join(", ");
                    return `ערך לא תקין: האפשרויות המתאימות הן ${n} או ${i}`;
                  }
                  case "too_big": {
                    let t = u(r.origin),
                      i = a(r.origin ?? "value");
                    if ("string" === r.origin)
                      return `${t?.longLabel ?? "ארוך"} מדי: ${i} צריכה להכיל ${r.maximum.toString()} ${t?.unit ?? ""} ${r.inclusive ? "או פחות" : "לכל היותר"}`.trim();
                    if ("number" === r.origin) {
                      let t = r.inclusive ? `קטן או שווה ל-${r.maximum}` : `קטן מ-${r.maximum}`;
                      return `גדול מדי: ${i} צריך להיות ${t}`;
                    }
                    if ("array" === r.origin || "set" === r.origin) {
                      let n = "set" === r.origin ? "צריכה" : "צריך",
                        a = r.inclusive
                          ? `${r.maximum} ${t?.unit ?? ""} או פחות`
                          : `פחות מ-${r.maximum} ${t?.unit ?? ""}`;
                      return `גדול מדי: ${i} ${n} להכיל ${a}`.trim();
                    }
                    let n = r.inclusive ? "<=" : "<",
                      s = o(r.origin ?? "value");
                    if (t?.unit) return `${t.longLabel} מדי: ${i} ${s} ${n}${r.maximum.toString()} ${t.unit}`;
                    return `${t?.longLabel ?? "גדול"} מדי: ${i} ${s} ${n}${r.maximum.toString()}`;
                  }
                  case "too_small": {
                    let t = u(r.origin),
                      i = a(r.origin ?? "value");
                    if ("string" === r.origin)
                      return `${t?.shortLabel ?? "קצר"} מדי: ${i} צריכה להכיל ${r.minimum.toString()} ${t?.unit ?? ""} ${r.inclusive ? "או יותר" : "לפחות"}`.trim();
                    if ("number" === r.origin) {
                      let t = r.inclusive ? `גדול או שווה ל-${r.minimum}` : `גדול מ-${r.minimum}`;
                      return `קטן מדי: ${i} צריך להיות ${t}`;
                    }
                    if ("array" === r.origin || "set" === r.origin) {
                      let n = "set" === r.origin ? "צריכה" : "צריך";
                      if (1 === r.minimum && r.inclusive) {
                        let t = (r.origin, "לפחות פריט אחד");
                        return `קטן מדי: ${i} ${n} להכיל ${t}`;
                      }
                      let a = r.inclusive
                        ? `${r.minimum} ${t?.unit ?? ""} או יותר`
                        : `יותר מ-${r.minimum} ${t?.unit ?? ""}`;
                      return `קטן מדי: ${i} ${n} להכיל ${a}`.trim();
                    }
                    let n = r.inclusive ? ">=" : ">",
                      s = o(r.origin ?? "value");
                    if (t?.unit) return `${t.shortLabel} מדי: ${i} ${s} ${n}${r.minimum.toString()} ${t.unit}`;
                    return `${t?.shortLabel ?? "קטן"} מדי: ${i} ${s} ${n}${r.minimum.toString()}`;
                  }
                  case "invalid_format": {
                    if ("starts_with" === r.format) return `המחרוזת חייבת להתחיל ב "${r.prefix}"`;
                    if ("ends_with" === r.format) return `המחרוזת חייבת להסתיים ב "${r.suffix}"`;
                    if ("includes" === r.format) return `המחרוזת חייבת לכלול "${r.includes}"`;
                    if ("regex" === r.format) return `המחרוזת חייבת להתאים לתבנית ${r.pattern}`;
                    let t = s[r.format],
                      i = t?.label ?? r.format,
                      n = t?.gender ?? "m";
                    return `${i} לא ${"f" === n ? "תקינה" : "תקין"}`;
                  }
                  case "not_multiple_of":
                    return `מספר לא תקין: חייב להיות מכפלה של ${r.divisor}`;
                  case "unrecognized_keys":
                    return `מפתח${r.keys.length > 1 ? "ות" : ""} לא מזוה${r.keys.length > 1 ? "ים" : "ה"}: ${c(r.keys, ", ")}`;
                  case "invalid_key":
                    return "שדה לא תקין באובייקט";
                  case "invalid_union":
                  default:
                    return "קלט לא תקין";
                  case "invalid_element": {
                    let t = a(r.origin ?? "array");
                    return `ערך לא תקין ב${t}`;
                  }
                }
              }),
          };
        },
        "hi",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "अक्षर", verb: "रखने के लिए" },
                file: { unit: "बाइट्स", verb: "रखने के लिए" },
                array: { unit: "तत्व", verb: "रखने के लिए" },
                set: { unit: "तत्व", verb: "रखने के लिए" },
                map: { unit: "प्रविष्टियाँ", verb: "रखने के लिए" },
              }),
              (r = {
                regex: "इनपुट",
                email: "ईमेल पता",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO तिथि और समय",
                date: "ISO तिथि",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 पता",
                ipv6: "IPv6 पता",
                mac: "MAC पता",
                cidrv4: "IPv4 श्रेणी",
                cidrv6: "IPv6 श्रेणी",
                base64: "Base64-एन्कोडेड स्ट्रिंग",
                base64url: "Base64URL-एन्कोडेड स्ट्रिंग",
                json_string: "JSON स्ट्रिंग",
                e164: "E.164 संख्या",
                credit_card: "क्रेडिट कार्ड संख्या",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `अमान्य इनपुट: अपेक्षित ${t}, प्राप्त ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `अमान्य इनपुट: अपेक्षित ${K(n.values[0])}`;
                    return `अमान्य विकल्प: अपेक्षित मानों में से एक ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i) return `बहुत बड़ा: अपेक्षित था कि ${n.origin ?? "मान"} में ${r}${n.maximum} ${i.unit} हों`;
                    return `बहुत बड़ा: अपेक्षित था कि ${n.origin ?? "मान"} ${r}${n.maximum} हो`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `बहुत छोटा: अपेक्षित था कि ${n.origin} में ${r}${n.minimum} ${i.unit} हों`;
                    return `बहुत छोटा: अपेक्षित था कि ${n.origin} ${r}${n.minimum} हो`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `अमान्य स्ट्रिंग: "${n.prefix}" से शुरू होना चाहिए`;
                    if ("ends_with" === n.format) return `अमान्य स्ट्रिंग: "${n.suffix}" पर समाप्त होना चाहिए`;
                    if ("includes" === n.format) return `अमान्य स्ट्रिंग: इसमें "${n.includes}" शामिल होना चाहिए`;
                    if ("regex" === n.format) return `अमान्य स्ट्रिंग: पैटर्न ${n.pattern} से मेल खाना चाहिए`;
                    return `अमान्य ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `अमान्य संख्या: यह ${n.divisor} का गुणज होना चाहिए`;
                  case "unrecognized_keys":
                    return `अपरिचित कुंजी${n.keys.length > 1 ? "याँ" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `अमान्य कुंजी: ${n.origin} में`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${t}`;
                    }
                    return "अमान्य इनपुट";
                  case "invalid_element":
                    return `अमान्य मान: ${n.origin} में`;
                  default:
                    return "अमान्य इनपुट";
                }
              }),
          };
        },
        "hr",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "znakova", verb: "imati" },
                file: { unit: "bajtova", verb: "imati" },
                array: { unit: "stavki", verb: "imati" },
                set: { unit: "stavki", verb: "imati" },
              }),
              (r = {
                regex: "unos",
                email: "email adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum i vrijeme",
                date: "ISO datum",
                time: "ISO vrijeme",
                duration: "ISO trajanje",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "IPv4 raspon",
                cidrv6: "IPv6 raspon",
                base64: "base64 kodirani tekst",
                base64url: "base64url kodirani tekst",
                json_string: "JSON tekst",
                e164: "E.164 broj",
                credit_card: "broj kreditne kartice",
                currency_code: "kod valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "unos",
              }),
              (i = {
                nan: "NaN",
                string: "tekst",
                number: "broj",
                boolean: "boolean",
                array: "niz",
                object: "objekt",
                set: "skup",
                file: "datoteka",
                date: "datum",
                bigint: "bigint",
                symbol: "simbol",
                undefined: "undefined",
                null: "null",
                function: "funkcija",
                map: "mapa",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Neispravan unos: očekuje se instanceof ${n.expected}, a primljeno je ${a}`;
                    return `Neispravan unos: očekuje se ${t}, a primljeno je ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Neispravna vrijednost: očekivano ${K(n.values[0])}`;
                    return `Neispravna opcija: očekivano jedno od ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a)
                      return `Preveliko: očekivano da ${o ?? "vrijednost"} ima ${r}${n.maximum.toString()} ${a.unit ?? "elemenata"}`;
                    return `Preveliko: očekivano da ${o ?? "vrijednost"} bude ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      a = t[n.origin] ?? null,
                      o = i[n.origin] ?? n.origin;
                    if (a) return `Premalo: očekivano da ${o} ima ${r}${n.minimum.toString()} ${a.unit}`;
                    return `Premalo: očekivano da ${o} bude ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Neispravan tekst: mora započinjati s "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Neispravan tekst: mora završavati s "${n.suffix}"`;
                    if ("includes" === n.format) return `Neispravan tekst: mora sadržavati "${n.includes}"`;
                    if ("regex" === n.format) return `Neispravan tekst: mora odgovarati uzorku ${n.pattern}`;
                    return `Neispravna ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Neispravan broj: mora biti višekratnik od ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Neprepoznat${n.keys.length > 1 ? "i ključevi" : " ključ"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Neispravan ključ u ${i[n.origin] ?? n.origin}`;
                  case "invalid_union":
                  default:
                    return "Neispravan unos";
                  case "invalid_element":
                    return `Neispravna vrijednost u ${i[n.origin] ?? n.origin}`;
                }
              }),
          };
        },
        "hu",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "karakter", verb: "legyen" },
                file: { unit: "byte", verb: "legyen" },
                array: { unit: "elem", verb: "legyen" },
                set: { unit: "elem", verb: "legyen" },
                map: { unit: "elem", verb: "legyen" },
              }),
              (r = {
                regex: "bemenet",
                email: "email cím",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO időbélyeg",
                date: "ISO dátum",
                time: "ISO idő",
                duration: "ISO időintervallum",
                ipv4: "IPv4 cím",
                ipv6: "IPv6 cím",
                mac: "MAC cím",
                cidrv4: "IPv4 tartomány",
                cidrv6: "IPv6 tartomány",
                base64: "base64-kódolt string",
                base64url: "base64url-kódolt string",
                json_string: "JSON string",
                e164: "E.164 szám",
                credit_card: "hitelkártyaszám",
                currency_code: "pénznemkód",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "bemenet",
              }),
              (i = { nan: "NaN", number: "szám", array: "tömb" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k instanceof ${n.expected}, a kapott \xe9rt\xe9k ${a}`;
                    return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${t}, a kapott \xe9rt\xe9k ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length)
                      return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${K(n.values[0])}`;
                    return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `T\xfal nagy: ${n.origin ?? "érték"} m\xe9rete t\xfal nagy ${r}${n.maximum.toString()} ${i.unit ?? "elem"}`;
                    return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${n.origin ?? "érték"} t\xfal nagy: ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${n.origin} m\xe9rete t\xfal kicsi ${r}${n.minimum.toString()} ${i.unit}`;
                    return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${n.origin} t\xfal kicsi ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `\xc9rv\xe9nytelen string: "${n.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                    if ("ends_with" === n.format)
                      return `\xc9rv\xe9nytelen string: "${n.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                    if ("includes" === n.format)
                      return `\xc9rv\xe9nytelen string: "${n.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                    if ("regex" === n.format)
                      return `\xc9rv\xe9nytelen string: ${n.pattern} mint\xe1nak kell megfelelnie`;
                    return `\xc9rv\xe9nytelen ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `\xc9rv\xe9nytelen sz\xe1m: ${n.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
                  case "unrecognized_keys":
                    return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `\xc9rv\xe9nytelen kulcs ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Érvénytelen bemenet";
                  case "invalid_element":
                    return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${n.origin}`;
                }
              }),
          };
        },
        "hy",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: { one: "նշան", many: "նշաններ" }, verb: "ունենալ" },
                file: { unit: { one: "բայթ", many: "բայթեր" }, verb: "ունենալ" },
                array: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
                set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
                map: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
              }),
              (r = {
                regex: "մուտք",
                email: "էլ. հասցե",
                url: "URL",
                emoji: "էմոջի",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ամսաթիվ և ժամ",
                date: "ISO ամսաթիվ",
                time: "ISO ժամ",
                duration: "ISO տևողություն",
                ipv4: "IPv4 հասցե",
                ipv6: "IPv6 հասցե",
                mac: "MAC հասցե",
                cidrv4: "IPv4 միջակայք",
                cidrv6: "IPv6 միջակայք",
                base64: "base64 ձևաչափով տող",
                base64url: "base64url ձևաչափով տող",
                json_string: "JSON տող",
                e164: "E.164 համար",
                credit_card: "կրեդիտ քարտի համար",
                currency_code: "արժույթի կոդ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "մուտք",
              }),
              (i = { nan: "NaN", number: "թիվ", array: "զանգված" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Սխալ մուտքագրում․ սպասվում էր instanceof ${n.expected}, ստացվել է ${a}`;
                    return `Սխալ մուտքագրում․ սպասվում էր ${t}, ստացվել է ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Սխալ մուտքագրում․ սպասվում էր ${K(n.values[1])}`;
                    return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = n7(Number(n.maximum), i.unit.one, i.unit.many);
                      return `Չափազանց մեծ արժեք․ սպասվում է, որ ${n3(n.origin ?? "արժեք")} կունենա ${r}${n.maximum.toString()} ${t}`;
                    }
                    return `Չափազանց մեծ արժեք․ սպասվում է, որ ${n3(n.origin ?? "արժեք")} լինի ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = n7(Number(n.minimum), i.unit.one, i.unit.many);
                      return `Չափազանց փոքր արժեք․ սպասվում է, որ ${n3(n.origin)} կունենա ${r}${n.minimum.toString()} ${t}`;
                    }
                    return `Չափազանց փոքր արժեք․ սպասվում է, որ ${n3(n.origin)} լինի ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Սխալ տող․ պետք է սկսվի "${n.prefix}"-ով`;
                    if ("ends_with" === n.format) return `Սխալ տող․ պետք է ավարտվի "${n.suffix}"-ով`;
                    if ("includes" === n.format) return `Սխալ տող․ պետք է պարունակի "${n.includes}"`;
                    if ("regex" === n.format) return `Սխալ տող․ պետք է համապատասխանի ${n.pattern} ձևաչափին`;
                    return `Սխալ ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${n.divisor}-ի`;
                  case "unrecognized_keys":
                    return `Չճանաչված բանալի${n.keys.length > 1 ? "ներ" : ""}. ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Սխալ բանալի ${n3(n.origin)}-ում`;
                  case "invalid_union":
                  default:
                    return "Սխալ մուտքագրում";
                  case "invalid_element":
                    return `Սխալ արժեք ${n3(n.origin)}-ում`;
                }
              }),
          };
        },
        "id",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "karakter", verb: "memiliki" },
                file: { unit: "byte", verb: "memiliki" },
                array: { unit: "item", verb: "memiliki" },
                set: { unit: "item", verb: "memiliki" },
                map: { unit: "item", verb: "memiliki" },
              }),
              (r = {
                regex: "input",
                email: "alamat email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tanggal dan waktu format ISO",
                date: "tanggal format ISO",
                time: "jam format ISO",
                duration: "durasi format ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "rentang alamat IPv4",
                cidrv6: "rentang alamat IPv6",
                base64: "string dengan enkode base64",
                base64url: "string dengan enkode base64url",
                json_string: "string JSON",
                e164: "angka E.164",
                credit_card: "nomor kartu kredit",
                currency_code: "kode mata uang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${a}`;
                    return `Input tidak valid: diharapkan ${t}, diterima ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Input tidak valid: diharapkan ${K(n.values[0])}`;
                    return `Pilihan tidak valid: diharapkan salah satu dari ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${r}${n.maximum.toString()} ${i.unit ?? "elemen"}`;
                    return `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Terlalu kecil: diharapkan ${n.origin} memiliki ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Terlalu kecil: diharapkan ${n.origin} menjadi ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `String tidak valid: harus dimulai dengan "${n.prefix}"`;
                    if ("ends_with" === n.format) return `String tidak valid: harus berakhir dengan "${n.suffix}"`;
                    if ("includes" === n.format) return `String tidak valid: harus menyertakan "${n.includes}"`;
                    if ("regex" === n.format) return `String tidak valid: harus sesuai pola ${n.pattern}`;
                    return `${r[n.format] ?? n.format} tidak valid`;
                  case "not_multiple_of":
                    return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Kunci tidak valid di ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Input tidak valid";
                  case "invalid_element":
                    return `Nilai tidak valid di ${n.origin}`;
                }
              }),
          };
        },
        "is",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "stafi", verb: "að hafa" },
                file: { unit: "bæti", verb: "að hafa" },
                array: { unit: "hluti", verb: "að hafa" },
                set: { unit: "hluti", verb: "að hafa" },
                map: { unit: "hluti", verb: "að hafa" },
              }),
              (r = {
                regex: "gildi",
                email: "netfang",
                url: "vefslóð",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dagsetning og tími",
                date: "ISO dagsetning",
                time: "ISO tími",
                duration: "ISO tímalengd",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded strengur",
                base64url: "base64url-encoded strengur",
                json_string: "JSON strengur",
                e164: "E.164 tölugildi",
                credit_card: "kreditkortanúmer",
                currency_code: "gjaldmiðilskóði",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "gildi",
              }),
              (i = { nan: "NaN", number: "númer", array: "fylki" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Rangt gildi: \xde\xfa sl\xf3st inn ${a} \xfear sem \xe1 a\xf0 vera instanceof ${n.expected}`;
                    return `Rangt gildi: \xde\xfa sl\xf3st inn ${a} \xfear sem \xe1 a\xf0 vera ${t}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Rangt gildi: gert r\xe1\xf0 fyrir ${K(n.values[0])}`;
                    return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin ?? "gildi"} hafi ${r}${n.maximum.toString()} ${i.unit ?? "hluti"}`;
                    return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin ?? "gildi"} s\xe9 ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin} hafi ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin} s\xe9 ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${n.prefix}"`;
                    if ("ends_with" === n.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${n.suffix}"`;
                    if ("includes" === n.format)
                      return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${n.includes}"`;
                    if ("regex" === n.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${n.pattern}`;
                    return `Rangt ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${n.divisor}`;
                  case "unrecognized_keys":
                    return `\xd3\xfeekkt ${n.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Rangur lykill \xed ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Rangt gildi";
                  case "invalid_element":
                    return `Rangt gildi \xed ${n.origin}`;
                }
              }),
          };
        },
        "it",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caratteri", verb: "avere" },
                file: { unit: "byte", verb: "avere" },
                array: { unit: "elementi", verb: "avere" },
                set: { unit: "elementi", verb: "avere" },
                map: { unit: "elementi", verb: "avere" },
              }),
              (r = {
                regex: "input",
                email: "indirizzo email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data e ora ISO",
                date: "data ISO",
                time: "ora ISO",
                duration: "durata ISO",
                ipv4: "indirizzo IPv4",
                ipv6: "indirizzo IPv6",
                mac: "indirizzo MAC",
                cidrv4: "intervallo IPv4",
                cidrv6: "intervallo IPv6",
                base64: "stringa codificata in base64",
                base64url: "URL codificata in base64",
                json_string: "stringa JSON",
                e164: "numero E.164",
                credit_card: "numero di carta di credito",
                currency_code: "codice valuta",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN", number: "numero", array: "vettore" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Input non valido: atteso instanceof ${n.expected}, ricevuto ${a}`;
                    return `Input non valido: atteso ${t}, ricevuto ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Input non valido: atteso ${K(n.values[0])}`;
                    return `Opzione non valida: atteso uno tra ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Troppo grande: ${n.origin ?? "valore"} deve avere ${r}${n.maximum.toString()} ${i.unit ?? "elementi"}`;
                    return `Troppo grande: ${n.origin ?? "valore"} deve essere ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Troppo piccolo: ${n.origin} deve avere ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Troppo piccolo: ${n.origin} deve essere ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Stringa non valida: deve iniziare con "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Stringa non valida: deve terminare con "${n.suffix}"`;
                    if ("includes" === n.format) return `Stringa non valida: deve includere "${n.includes}"`;
                    if ("regex" === n.format) return `Stringa non valida: deve corrispondere al pattern ${n.pattern}`;
                    return `Input non valido: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Chiave non valida in ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Input non valido";
                  case "invalid_element":
                    return `Valore non valido in ${n.origin}`;
                }
              }),
          };
        },
        "ja",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "文字", verb: "である" },
                file: { unit: "バイト", verb: "である" },
                array: { unit: "要素", verb: "である" },
                set: { unit: "要素", verb: "である" },
                map: { unit: "要素", verb: "である" },
              }),
              (r = {
                regex: "入力値",
                email: "メールアドレス",
                url: "URL",
                emoji: "絵文字",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日時",
                date: "ISO日付",
                time: "ISO時刻",
                duration: "ISO期間",
                ipv4: "IPv4アドレス",
                ipv6: "IPv6アドレス",
                mac: "MACアドレス",
                cidrv4: "IPv4範囲",
                cidrv6: "IPv6範囲",
                base64: "base64エンコード文字列",
                base64url: "base64urlエンコード文字列",
                json_string: "JSON文字列",
                e164: "E.164番号",
                credit_card: "クレジットカード番号",
                currency_code: "通貨コード",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "入力値",
              }),
              (i = { nan: "NaN", number: "数値", array: "配列" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `無効な入力: instanceof ${n.expected}が期待されましたが、${a}が入力されました`;
                    return `無効な入力: ${t}が期待されましたが、${a}が入力されました`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `無効な入力: ${K(n.values[0])}が期待されました`;
                    return `無効な選択: ${c(n.values, "、")}のいずれかである必要があります`;
                  case "too_big": {
                    let r = n.inclusive ? "以下である" : "より小さい",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${i.unit ?? "要素"}${r}必要があります`;
                    return `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${r}必要があります`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? "以上である" : "より大きい",
                      i = t[n.origin] ?? null;
                    if (i) return `小さすぎる値: ${n.origin}は${n.minimum.toString()}${i.unit}${r}必要があります`;
                    return `小さすぎる値: ${n.origin}は${n.minimum.toString()}${r}必要があります`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `無効な文字列: "${n.prefix}"で始まる必要があります`;
                    if ("ends_with" === n.format) return `無効な文字列: "${n.suffix}"で終わる必要があります`;
                    if ("includes" === n.format) return `無効な文字列: "${n.includes}"を含む必要があります`;
                    if ("regex" === n.format) return `無効な文字列: パターン${n.pattern}に一致する必要があります`;
                    return `無効な${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `無効な数値: ${n.divisor}の倍数である必要があります`;
                  case "unrecognized_keys":
                    return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${c(n.keys, "、")}`;
                  case "invalid_key":
                    return `${n.origin}内の無効なキー`;
                  case "invalid_union":
                  default:
                    return "無効な入力";
                  case "invalid_element":
                    return `${n.origin}内の無効な値`;
                }
              }),
          };
        },
        "ka",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
                file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
                array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
                map: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
              }),
              (r = {
                regex: "შეყვანა",
                email: "ელ-ფოსტის მისამართი",
                url: "URL",
                emoji: "ემოჯი",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "თარიღი-დრო",
                date: "თარიღი",
                time: "დრო",
                duration: "ხანგრძლივობა",
                ipv4: "IPv4 მისამართი",
                ipv6: "IPv6 მისამართი",
                mac: "MAC მისამართი",
                cidrv4: "IPv4 დიაპაზონი",
                cidrv6: "IPv6 დიაპაზონი",
                base64: "base64-კოდირებული ველი",
                base64url: "base64url-კოდირებული ველი",
                json_string: "JSON ველი",
                e164: "E.164 ნომერი",
                credit_card: "საკრედიტო ბარათის ნომერი",
                currency_code: "ვალუტის კოდი",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "შეყვანა",
              }),
              (i = {
                nan: "NaN",
                number: "რიცხვი",
                string: "ველი",
                boolean: "ბულეანი",
                function: "ფუნქცია",
                array: "მასივი",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `არასწორი შეყვანა: მოსალოდნელი instanceof ${n.expected}, მიღებული ${a}`;
                    return `არასწორი შეყვანა: მოსალოდნელი ${t}, მიღებული ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `არასწორი შეყვანა: მოსალოდნელი ${K(n.values[0])}`;
                    return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${c(n.values, "|")}-დან`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} ${i.verb} ${r}${n.maximum.toString()} ${i.unit}`;
                    return `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} იყოს ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ზედმეტად პატარა: მოსალოდნელი ${n.origin} ${i.verb} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `ზედმეტად პატარა: მოსალოდნელი ${n.origin} იყოს ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `არასწორი ველი: უნდა იწყებოდეს "${n.prefix}"-ით`;
                    if ("ends_with" === n.format) return `არასწორი ველი: უნდა მთავრდებოდეს "${n.suffix}"-ით`;
                    if ("includes" === n.format) return `არასწორი ველი: უნდა შეიცავდეს "${n.includes}"-ს`;
                    if ("regex" === n.format) return `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}`;
                    return `არასწორი ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `არასწორი რიცხვი: უნდა იყოს ${n.divisor}-ის ჯერადი`;
                  case "unrecognized_keys":
                    return `უცნობი გასაღებ${n.keys.length > 1 ? "ები" : "ი"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `არასწორი გასაღები ${n.origin}-ში`;
                  case "invalid_union":
                  default:
                    return "არასწორი შეყვანა";
                  case "invalid_element":
                    return `არასწორი მნიშვნელობა ${n.origin}-ში`;
                }
              }),
          };
        },
        "kh",
        0,
        function () {
          return n5();
        },
        "km",
        0,
        n5,
        "kn",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "ಅಕ್ಷರಗಳು", verb: "ಹೊಂದಲು" },
                file: { unit: "ಬೈಟ್‌ಗಳು", verb: "ಹೊಂದಲು" },
                array: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
                set: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
                map: { unit: "entries", verb: "ಹೊಂದಲು" },
              }),
              (r = {
                regex: "ಇನ್ಪುಟ್",
                email: "email ವಿಳಾಸ",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO ದಿನಾಂಕದ ಸಮಯ",
                date: "ISO ದಿನಾಂಕ",
                time: "ISO ಸಮಯ",
                duration: "ISO ಅವಧಿ",
                ipv4: "IPv4 ವಿಳಾಸ",
                ipv6: "IPv6 ವಿಳಾಸ",
                mac: "MAC ವಿಳಾಸ",
                cidrv4: "IPv4 ವ್ಯಾಪ್ತಿಯ",
                cidrv6: "IPv6 ವ್ಯಾಪ್ತಿಯ",
                base64: "base64-encodedಸ್ಟ್ರಿಂಗ್",
                base64url: "base64url-encodedಸ್ಟ್ರಿಂಗ್",
                json_string: "JSONಸ್ಟ್ರಿಂಗ್",
                e164: "E.164 ಸಂಖ್ಯೆ",
                credit_card: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
                currency_code: "ಕರೆನ್ಸಿ ಕೋಡ್",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ಇನ್ಪುಟ್",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${t}, ಸ್ವೀಕರಿಸಿದನು ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${K(n.values[0])}`;
                    return `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${n.origin ?? "value"} ಹೊಂದಲು ${r}${n.maximum.toString()} ${i.unit ?? "ಅಂಶಗಳು"}`;
                    return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${n.origin ?? "value"} ಎಂದು ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${n.origin} ಹೊಂದಲು ${r}${n.minimum.toString()} ${i.unit}`;
                    return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${n.origin} ಎಂದು ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${n.prefix}"`;
                    if ("ends_with" === n.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${n.suffix}"`;
                    if ("includes" === n.format) return `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${n.includes}"`;
                    if ("regex" === n.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${n.pattern}`;
                    return `ಅಮಾನ್ಯ ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${n.divisor}`;
                  case "unrecognized_keys":
                    return `ಗುರುತಿಸಲಾಗದ ಕೀ ${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${n.origin}`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${t}`;
                    }
                    return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್";
                  case "invalid_element":
                    return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${n.origin}`;
                  default:
                    return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್";
                }
              }),
          };
        },
        "ko",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "문자", verb: "to have" },
                file: { unit: "바이트", verb: "to have" },
                array: { unit: "개", verb: "to have" },
                set: { unit: "개", verb: "to have" },
                map: { unit: "개", verb: "to have" },
              }),
              (r = {
                regex: "입력",
                email: "이메일 주소",
                url: "URL",
                emoji: "이모지",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 날짜시간",
                date: "ISO 날짜",
                time: "ISO 시간",
                duration: "ISO 기간",
                ipv4: "IPv4 주소",
                ipv6: "IPv6 주소",
                mac: "MAC 주소",
                cidrv4: "IPv4 범위",
                cidrv6: "IPv6 범위",
                base64: "base64 인코딩 문자열",
                base64url: "base64url 인코딩 문자열",
                json_string: "JSON 문자열",
                e164: "E.164 번호",
                credit_card: "신용카드 번호",
                currency_code: "통화 코드",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "입력",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `잘못된 입력: 예상 타입은 instanceof ${n.expected}, 받은 타입은 ${a}입니다`;
                    return `잘못된 입력: 예상 타입은 ${t}, 받은 타입은 ${a}입니다`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `잘못된 입력: 값은 ${K(n.values[0])} 이어야 합니다`;
                    return `잘못된 옵션: ${c(n.values, "또는 ")} 중 하나여야 합니다`;
                  case "too_big": {
                    let r = n.inclusive ? "이하" : "미만",
                      i = "미만" === r ? "이어야 합니다" : "여야 합니다",
                      a = t[n.origin] ?? null,
                      o = a?.unit ?? "요소";
                    if (a) return `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${o} ${r}${i}`;
                    return `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${r}${i}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? "이상" : "초과",
                      i = "이상" === r ? "이어야 합니다" : "여야 합니다",
                      a = t[n.origin] ?? null,
                      o = a?.unit ?? "요소";
                    if (a) return `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${o} ${r}${i}`;
                    return `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${r}${i}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `잘못된 문자열: "${n.prefix}"(으)로 시작해야 합니다`;
                    if ("ends_with" === n.format) return `잘못된 문자열: "${n.suffix}"(으)로 끝나야 합니다`;
                    if ("includes" === n.format) return `잘못된 문자열: "${n.includes}"을(를) 포함해야 합니다`;
                    if ("regex" === n.format) return `잘못된 문자열: 정규식 ${n.pattern} 패턴과 일치해야 합니다`;
                    return `잘못된 ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
                  case "unrecognized_keys":
                    return `인식할 수 없는 키: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `잘못된 키: ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "잘못된 입력";
                  case "invalid_element":
                    return `잘못된 값: ${n.origin}`;
                }
              }),
          };
        },
        "lt",
        0,
        function () {
          return {
            localeError: (() => {
              let t = {
                string: {
                  unit: { one: "simbolis", few: "simboliai", many: "simbolių" },
                  verb: {
                    smaller: { inclusive: "turi būti ne ilgesnė kaip", notInclusive: "turi būti trumpesnė kaip" },
                    bigger: { inclusive: "turi būti ne trumpesnė kaip", notInclusive: "turi būti ilgesnė kaip" },
                  },
                },
                file: {
                  unit: { one: "baitas", few: "baitai", many: "baitų" },
                  verb: {
                    smaller: { inclusive: "turi būti ne didesnis kaip", notInclusive: "turi būti mažesnis kaip" },
                    bigger: { inclusive: "turi būti ne mažesnis kaip", notInclusive: "turi būti didesnis kaip" },
                  },
                },
                array: {
                  unit: { one: "elementą", few: "elementus", many: "elementų" },
                  verb: {
                    smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" },
                    bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" },
                  },
                },
                set: {
                  unit: { one: "elementą", few: "elementus", many: "elementų" },
                  verb: {
                    smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" },
                    bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" },
                  },
                },
              };
              function r(r, i, n, a) {
                let o = t[r] ?? null;
                return null === o ? o : { unit: o.unit[i], verb: o.verb[a][n ? "inclusive" : "notInclusive"] };
              }
              let i = {
                  regex: "įvestis",
                  email: "el. pašto adresas",
                  url: "URL",
                  emoji: "jaustukas",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO data ir laikas",
                  date: "ISO data",
                  time: "ISO laikas",
                  duration: "ISO trukmė",
                  ipv4: "IPv4 adresas",
                  ipv6: "IPv6 adresas",
                  mac: "MAC adresas",
                  cidrv4: "IPv4 tinklo prefiksas (CIDR)",
                  cidrv6: "IPv6 tinklo prefiksas (CIDR)",
                  base64: "base64 užkoduota eilutė",
                  base64url: "base64url užkoduota eilutė",
                  json_string: "JSON eilutė",
                  e164: "E.164 numeris",
                  credit_card: "kredito kortelės numeris",
                  currency_code: "valiutos kodas",
                  iban: "IBAN",
                  jwt: "JWT",
                  template_literal: "įvestis",
                },
                n = {
                  nan: "NaN",
                  number: "skaičius",
                  bigint: "sveikasis skaičius",
                  string: "eilutė",
                  boolean: "loginė reikšmė",
                  undefined: "neapibrėžta reikšmė",
                  function: "funkcija",
                  symbol: "simbolis",
                  array: "masyvas",
                  object: "objektas",
                  null: "nulinė reikšmė",
                };
              return (t) => {
                switch (t.code) {
                  case "invalid_type": {
                    let r = n[t.expected] ?? t.expected,
                      i = eg(t.input),
                      a = n[i] ?? i;
                    if (/^[A-Z]/.test(t.expected)) return `Gautas tipas ${a}, o tikėtasi - instanceof ${t.expected}`;
                    return `Gautas tipas ${a}, o tikėtasi - ${r}`;
                  }
                  case "invalid_value":
                    if (1 === t.values.length) return `Privalo būti ${K(t.values[0])}`;
                    return `Privalo būti vienas iš ${c(t.values, "|")} pasirinkimų`;
                  case "too_big": {
                    let i = n[t.origin] ?? t.origin,
                      a = r(t.origin, ae(Number(t.maximum)), t.inclusive ?? !1, "smaller");
                    if (a?.verb)
                      return `${n8(i ?? t.origin ?? "reikšmė")} ${a.verb} ${t.maximum.toString()} ${a.unit ?? "elementų"}`;
                    let o = t.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                    return `${n8(i ?? t.origin ?? "reikšmė")} turi būti ${o} ${t.maximum.toString()} ${a?.unit}`;
                  }
                  case "too_small": {
                    let i = n[t.origin] ?? t.origin,
                      a = r(t.origin, ae(Number(t.minimum)), t.inclusive ?? !1, "bigger");
                    if (a?.verb)
                      return `${n8(i ?? t.origin ?? "reikšmė")} ${a.verb} ${t.minimum.toString()} ${a.unit ?? "elementų"}`;
                    let o = t.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                    return `${n8(i ?? t.origin ?? "reikšmė")} turi būti ${o} ${t.minimum.toString()} ${a?.unit}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === t.format) return `Eilutė privalo prasidėti "${t.prefix}"`;
                    if ("ends_with" === t.format) return `Eilutė privalo pasibaigti "${t.suffix}"`;
                    if ("includes" === t.format) return `Eilutė privalo įtraukti "${t.includes}"`;
                    if ("regex" === t.format) return `Eilutė privalo atitikti ${t.pattern}`;
                    return `Neteisingas ${i[t.format] ?? t.format}`;
                  case "not_multiple_of":
                    return `Skaičius privalo būti ${t.divisor} kartotinis.`;
                  case "unrecognized_keys":
                    return `Neatpažint${t.keys.length > 1 ? "i" : "as"} rakt${t.keys.length > 1 ? "ai" : "as"}: ${c(t.keys, ", ")}`;
                  case "invalid_key":
                    return "Rastas klaidingas raktas";
                  case "invalid_union":
                  default:
                    return "Klaidinga įvestis";
                  case "invalid_element": {
                    let r = n[t.origin] ?? t.origin;
                    return `${n8(r ?? t.origin ?? "reikšmė")} turi klaidingą įvestį`;
                  }
                }
              };
            })(),
          };
        },
        "mk",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "знаци", verb: "да имаат" },
                file: { unit: "бајти", verb: "да имаат" },
                array: { unit: "ставки", verb: "да имаат" },
                set: { unit: "ставки", verb: "да имаат" },
                map: { unit: "ставки", verb: "да имаат" },
              }),
              (r = {
                regex: "внес",
                email: "адреса на е-пошта",
                url: "URL",
                emoji: "емоџи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO датум и време",
                date: "ISO датум",
                time: "ISO време",
                duration: "ISO времетраење",
                ipv4: "IPv4 адреса",
                ipv6: "IPv6 адреса",
                mac: "MAC адреса",
                cidrv4: "IPv4 опсег",
                cidrv6: "IPv6 опсег",
                base64: "base64-енкодирана низа",
                base64url: "base64url-енкодирана низа",
                json_string: "JSON низа",
                e164: "E.164 број",
                credit_card: "број на кредитна картичка",
                currency_code: "код на валута",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "внес",
              }),
              (i = { nan: "NaN", number: "број", array: "низа" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Грешен внес: се очекува instanceof ${n.expected}, примено ${a}`;
                    return `Грешен внес: се очекува ${t}, примено ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Invalid input: expected ${K(n.values[0])}`;
                    return `Грешана опција: се очекува една ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${r}${n.maximum.toString()} ${i.unit ?? "елементи"}`;
                    return `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Премногу мал: се очекува ${n.origin} да има ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Премногу мал: се очекува ${n.origin} да биде ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Неважечка низа: мора да започнува со "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Неважечка низа: мора да завршува со "${n.suffix}"`;
                    if ("includes" === n.format) return `Неважечка низа: мора да вклучува "${n.includes}"`;
                    if ("regex" === n.format) return `Неважечка низа: мора да одгоара на патернот ${n.pattern}`;
                    return `Invalid ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Грешен број: мора да биде делив со ${n.divisor}`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Грешен клуч во ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Грешен внес";
                  case "invalid_element":
                    return `Грешна вредност во ${n.origin}`;
                }
              }),
          };
        },
        "ms",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "aksara", verb: "mempunyai" },
                file: { unit: "bait", verb: "mempunyai" },
                array: { unit: "elemen", verb: "mempunyai" },
                set: { unit: "elemen", verb: "mempunyai" },
                map: { unit: "elemen", verb: "mempunyai" },
              }),
              (r = {
                regex: "input",
                email: "alamat e-mel",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "tarikh masa ISO",
                date: "tarikh ISO",
                time: "masa ISO",
                duration: "tempoh ISO",
                ipv4: "alamat IPv4",
                ipv6: "alamat IPv6",
                mac: "alamat MAC",
                cidrv4: "julat IPv4",
                cidrv6: "julat IPv6",
                base64: "string dikodkan base64",
                base64url: "string dikodkan base64url",
                json_string: "string JSON",
                e164: "nombor E.164",
                credit_card: "nombor kad kredit",
                currency_code: "kod mata wang",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN", number: "nombor" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${a}`;
                    return `Input tidak sah: dijangka ${t}, diterima ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Input tidak sah: dijangka ${K(n.values[0])}`;
                    return `Pilihan tidak sah: dijangka salah satu daripada ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${i.verb} ${r}${n.maximum.toString()} ${i.unit ?? "elemen"}`;
                    return `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Terlalu kecil: dijangka ${n.origin} ${i.verb} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Terlalu kecil: dijangka ${n.origin} adalah ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `String tidak sah: mesti bermula dengan "${n.prefix}"`;
                    if ("ends_with" === n.format) return `String tidak sah: mesti berakhir dengan "${n.suffix}"`;
                    if ("includes" === n.format) return `String tidak sah: mesti mengandungi "${n.includes}"`;
                    if ("regex" === n.format) return `String tidak sah: mesti sepadan dengan corak ${n.pattern}`;
                    return `${r[n.format] ?? n.format} tidak sah`;
                  case "not_multiple_of":
                    return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Kunci tidak dikenali: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Kunci tidak sah dalam ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Input tidak sah";
                  case "invalid_element":
                    return `Nilai tidak sah dalam ${n.origin}`;
                }
              }),
          };
        },
        "ne",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "अक्षर", verb: "हुनुपर्छ" },
                file: { unit: "बाइट", verb: "हुनुपर्छ" },
                array: { unit: "तत्व", verb: "हुनुपर्छ" },
                set: { unit: "तत्व", verb: "हुनुपर्छ" },
                map: { unit: "प्रविष्टि", verb: "हुनुपर्छ" },
              }),
              (r = {
                regex: "इनपुट",
                email: "इमेल ठेगाना",
                url: "URL",
                emoji: "इमोजी",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO मिति र समय",
                date: "ISO मिति",
                time: "ISO समय",
                duration: "ISO अवधि",
                ipv4: "IPv4 ठेगाना",
                ipv6: "IPv6 ठेगाना",
                mac: "MAC ठेगाना",
                cidrv4: "IPv4 दायरा",
                cidrv6: "IPv6 दायरा",
                base64: "base64-इन्कोड गरिएको स्ट्रिङ",
                base64url: "base64url-इन्कोड गरिएको स्ट्रिङ",
                json_string: "JSON स्ट्रिङ",
                e164: "E.164 नम्बर",
                credit_card: "क्रेडिट कार्ड नम्बर",
                currency_code: "मुद्रा कोड",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "इनपुट",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `अमान्य इनपुट: अपेक्षित ${t}, प्राप्त ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `अमान्य इनपुट: अपेक्षित ${K(n.values[0])}`;
                    return `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i) return `धेरै ठूलो: ${n.origin ?? "मान"} मा ${r}${n.maximum.toString()} ${i.unit} ${i.verb}`;
                    return `धेरै ठूलो: ${n.origin ?? "मान"} ${r}${n.maximum.toString()} हुनुपर्छ`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `धेरै सानो: ${n.origin} मा ${r}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                    return `धेरै सानो: ${n.origin} ${r}${n.minimum.toString()} हुनुपर्छ`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `अमान्य स्ट्रिङ: "${n.prefix}" बाट सुरु हुनुपर्छ`;
                    if ("ends_with" === n.format) return `अमान्य स्ट्रिङ: "${n.suffix}" मा समाप्त हुनुपर्छ`;
                    if ("includes" === n.format) return `अमान्य स्ट्रिङ: "${n.includes}" समावेश हुनुपर्छ`;
                    if ("regex" === n.format) return `अमान्य स्ट्रिङ: ढाँचा ${n.pattern} सँग मेल खानुपर्छ`;
                    return `अमान्य ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `अमान्य संख्या: ${n.divisor} को गुणज हुनुपर्छ`;
                  case "unrecognized_keys":
                    return `अपरिचित कुञ्जी${n.keys.length > 1 ? "हरू" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `अमान्य कुञ्जी: ${n.origin} मा`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${t}`;
                    }
                    return "अमान्य इनपुट";
                  case "invalid_element":
                    return `अमान्य मान: ${n.origin} मा`;
                  default:
                    return "अमान्य इनपुट";
                }
              }),
          };
        },
        "nl",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "tekens", verb: "heeft" },
                file: { unit: "bytes", verb: "heeft" },
                array: { unit: "elementen", verb: "heeft" },
                set: { unit: "elementen", verb: "heeft" },
                map: { unit: "elementen", verb: "heeft" },
              }),
              (r = {
                regex: "invoer",
                email: "emailadres",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum en tijd",
                date: "ISO datum",
                time: "ISO tijd",
                duration: "ISO duur",
                ipv4: "IPv4-adres",
                ipv6: "IPv6-adres",
                mac: "MAC-adres",
                cidrv4: "IPv4-bereik",
                cidrv6: "IPv6-bereik",
                base64: "base64-gecodeerde tekst",
                base64url: "base64 URL-gecodeerde tekst",
                json_string: "JSON string",
                e164: "E.164-nummer",
                credit_card: "creditcardnummer",
                currency_code: "valutacode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "invoer",
              }),
              (i = { nan: "NaN", number: "getal" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${a}`;
                    return `Ongeldige invoer: verwacht ${t}, ontving ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ongeldige invoer: verwacht ${K(n.values[0])}`;
                    return `Ongeldige optie: verwacht \xe9\xe9n van ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null,
                      a = "date" === n.origin ? "laat" : "string" === n.origin ? "lang" : "groot";
                    if (i)
                      return `Te ${a}: verwacht dat ${n.origin ?? "waarde"} ${r}${n.maximum.toString()} ${i.unit ?? "elementen"} ${i.verb}`;
                    return `Te ${a}: verwacht dat ${n.origin ?? "waarde"} ${r}${n.maximum.toString()} is`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null,
                      a = "date" === n.origin ? "vroeg" : "string" === n.origin ? "kort" : "klein";
                    if (i) return `Te ${a}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                    return `Te ${a}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} is`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ongeldige tekst: moet met "${n.prefix}" beginnen`;
                    if ("ends_with" === n.format) return `Ongeldige tekst: moet op "${n.suffix}" eindigen`;
                    if ("includes" === n.format) return `Ongeldige tekst: moet "${n.includes}" bevatten`;
                    if ("regex" === n.format) return `Ongeldige tekst: moet overeenkomen met patroon ${n.pattern}`;
                    return `Ongeldig: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
                  case "unrecognized_keys":
                    return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ongeldige key in ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Ongeldige invoer";
                  case "invalid_element":
                    return `Ongeldige waarde in ${n.origin}`;
                }
              }),
          };
        },
        "nn",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "teikn", verb: "å ha" },
                file: { unit: "bytes", verb: "å ha" },
                array: { unit: "element", verb: "å innehalde" },
                set: { unit: "element", verb: "å innehalde" },
                map: { unit: "element", verb: "å innehalde" },
              }),
              (r = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varigheit",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkoda streng",
                base64url: "base64url-enkoda streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN", number: "tal", array: "liste" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected)) return `Ugyldig input: forventa instanceof ${n.expected}, fekk ${a}`;
                    return `Ugyldig input: forventa ${t}, fekk ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ugyldig verdi: forventa ${K(n.values[0])}`;
                    return `Ugyldig val: forventa eitt av ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `For stor(t): forventa ${n.origin ?? "value"} til \xe5 ha ${r}${n.maximum.toString()} ${i.unit ?? "element"}`;
                    return `For stor(t): forventa ${n.origin ?? "value"} til \xe5 ha ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `For lite(n): forventa ${n.origin} til \xe5 ha ${r}${n.minimum.toString()} ${i.unit}`;
                    return `For lite(n): forventa ${n.origin} til \xe5 ha ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ugyldig streng: m\xe5 starte med "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Ugyldig streng: m\xe5 slutte med "${n.suffix}"`;
                    if ("includes" === n.format) return `Ugyldig streng: m\xe5 innehalde "${n.includes}"`;
                    if ("regex" === n.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${n.pattern}`;
                    return `Ugyldig ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ugyldig tal: m\xe5 vere eit multiplum av ${n.divisor}`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Ukjende nøklar" : "Ukjend nøkkel"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8kkel i ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Ugyldig input";
                  case "invalid_element":
                    return `Ugyldig verdi i ${n.origin}`;
                }
              }),
          };
        },
        "no",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "tegn", verb: "å ha" },
                file: { unit: "bytes", verb: "å ha" },
                array: { unit: "elementer", verb: "å inneholde" },
                set: { unit: "elementer", verb: "å inneholde" },
                map: { unit: "elementer", verb: "å inneholde" },
              }),
              (r = {
                regex: "input",
                email: "e-postadresse",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO dato- og klokkeslett",
                date: "ISO-dato",
                time: "ISO-klokkeslett",
                duration: "ISO-varighet",
                ipv4: "IPv4-adresse",
                ipv6: "IPv6-adresse",
                mac: "MAC-adresse",
                cidrv4: "IPv4-spekter",
                cidrv6: "IPv6-spekter",
                base64: "base64-enkodet streng",
                base64url: "base64url-enkodet streng",
                json_string: "JSON-streng",
                e164: "E.164-nummer",
                credit_card: "kredittkortnummer",
                currency_code: "valutakode",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN", number: "tall", array: "liste" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ugyldig input: forventet instanceof ${n.expected}, fikk ${a}`;
                    return `Ugyldig input: forventet ${t}, fikk ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ugyldig verdi: forventet ${K(n.values[0])}`;
                    return `Ugyldig valg: forventet en av ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `For stor(t): forventet ${n.origin ?? "value"} til \xe5 ha ${r}${n.maximum.toString()} ${i.unit ?? "elementer"}`;
                    return `For stor(t): forventet ${n.origin ?? "value"} til \xe5 ha ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `For lite(n): forventet ${n.origin} til \xe5 ha ${r}${n.minimum.toString()} ${i.unit}`;
                    return `For lite(n): forventet ${n.origin} til \xe5 ha ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ugyldig streng: m\xe5 starte med "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Ugyldig streng: m\xe5 ende med "${n.suffix}"`;
                    if ("includes" === n.format) return `Ugyldig streng: m\xe5 inneholde "${n.includes}"`;
                    if ("regex" === n.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${n.pattern}`;
                    return `Ugyldig ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${n.divisor}`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ugyldig n\xf8kkel i ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Ugyldig input";
                  case "invalid_element":
                    return `Ugyldig verdi i ${n.origin}`;
                }
              }),
          };
        },
        "ota",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "harf", verb: "olmalıdır" },
                file: { unit: "bayt", verb: "olmalıdır" },
                array: { unit: "unsur", verb: "olmalıdır" },
                set: { unit: "unsur", verb: "olmalıdır" },
                map: { unit: "unsur", verb: "olmalıdır" },
              }),
              (r = {
                regex: "giren",
                email: "epostagâh",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO hengâmı",
                date: "ISO tarihi",
                time: "ISO zamanı",
                duration: "ISO müddeti",
                ipv4: "IPv4 nişânı",
                ipv6: "IPv6 nişânı",
                mac: "MAC nişânı",
                cidrv4: "IPv4 menzili",
                cidrv6: "IPv6 menzili",
                base64: "base64-şifreli metin",
                base64url: "base64url-şifreli metin",
                json_string: "JSON metin",
                e164: "E.164 sayısı",
                credit_card: "i'tibâr kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "giren",
              }),
              (i = { nan: "NaN", number: "numara", array: "saf", null: "gayb" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `F\xe2sit giren: umulan instanceof ${n.expected}, alınan ${a}`;
                    return `F\xe2sit giren: umulan ${t}, alınan ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `F\xe2sit giren: umulan ${K(n.values[0])}`;
                    return `F\xe2sit tercih: m\xfbteberler ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Fazla b\xfcy\xfck: ${n.origin ?? "value"}, ${r}${n.maximum.toString()} ${i.unit ?? "elements"} sahip olmalıydı.`;
                    return `Fazla b\xfcy\xfck: ${n.origin ?? "value"}, ${r}${n.maximum.toString()} olmalıydı.`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Fazla k\xfc\xe7\xfck: ${n.origin}, ${r}${n.minimum.toString()} ${i.unit} sahip olmalıydı.`;
                    return `Fazla k\xfc\xe7\xfck: ${n.origin}, ${r}${n.minimum.toString()} olmalıydı.`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `F\xe2sit metin: "${n.prefix}" ile başlamalı.`;
                    if ("ends_with" === n.format) return `F\xe2sit metin: "${n.suffix}" ile bitmeli.`;
                    if ("includes" === n.format) return `F\xe2sit metin: "${n.includes}" ihtiv\xe2 etmeli.`;
                    if ("regex" === n.format) return `F\xe2sit metin: ${n.pattern} nakşına uymalı.`;
                    return `F\xe2sit ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `F\xe2sit sayı: ${n.divisor} katı olmalıydı.`;
                  case "unrecognized_keys":
                    return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} i\xe7in tanınmayan anahtar var.`;
                  case "invalid_union":
                    return "Giren tanınamadı.";
                  case "invalid_element":
                    return `${n.origin} i\xe7in tanınmayan kıymet var.`;
                  default:
                    return "Kıymet tanınamadı.";
                }
              }),
          };
        },
        "pl",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "znaków", verb: "mieć" },
                file: { unit: "bajtów", verb: "mieć" },
                array: { unit: "elementów", verb: "mieć" },
                set: { unit: "elementów", verb: "mieć" },
                map: { unit: "elementów", verb: "mieć" },
              }),
              (r = {
                regex: "wyrażenie",
                email: "adres email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "data i godzina w formacie ISO",
                date: "data w formacie ISO",
                time: "godzina w formacie ISO",
                duration: "czas trwania ISO",
                ipv4: "adres IPv4",
                ipv6: "adres IPv6",
                mac: "adres MAC",
                cidrv4: "zakres IPv4",
                cidrv6: "zakres IPv6",
                base64: "ciąg znaków zakodowany w formacie base64",
                base64url: "ciąg znaków zakodowany w formacie base64url",
                json_string: "ciąg znaków w formacie JSON",
                e164: "liczba E.164",
                credit_card: "numer karty kredytowej",
                currency_code: "kod waluty",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "wejście",
              }),
              (i = { nan: "NaN", number: "liczba", array: "tablica" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${n.expected}, otrzymano ${a}`;
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${t}, otrzymano ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Nieprawidłowe dane wejściowe: oczekiwano ${K(n.values[0])}`;
                    return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${r}${n.maximum.toString()} ${i.unit ?? "elementów"}`;
                    return `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${r}${n.minimum.toString()} ${i.unit ?? "elementów"}`;
                    return `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${n.prefix}"`;
                    if ("ends_with" === n.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${n.suffix}"`;
                    if ("includes" === n.format) return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${n.includes}"`;
                    if ("regex" === n.format)
                      return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${n.pattern}`;
                    return `Nieprawidłow(y/a/e) ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Nieprawidłowy klucz w ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Nieprawidłowe dane wejściowe";
                  case "invalid_element":
                    return `Nieprawidłowa wartość w ${n.origin}`;
                }
              }),
          };
        },
        "ps",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "توکي", verb: "ولري" },
                file: { unit: "بایټس", verb: "ولري" },
                array: { unit: "توکي", verb: "ولري" },
                set: { unit: "توکي", verb: "ولري" },
                map: { unit: "توکي", verb: "ولري" },
              }),
              (r = {
                regex: "ورودي",
                email: "بریښنالیک",
                url: "یو آر ال",
                emoji: "ایموجي",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "نیټه او وخت",
                date: "نېټه",
                time: "وخت",
                duration: "موده",
                ipv4: "د IPv4 پته",
                ipv6: "د IPv6 پته",
                mac: "د MAC پته",
                cidrv4: "د IPv4 ساحه",
                cidrv6: "د IPv6 ساحه",
                base64: "base64-encoded متن",
                base64url: "base64url-encoded متن",
                json_string: "JSON متن",
                e164: "د E.164 شمېره",
                credit_card: "د کریډیټ کارت شمیره",
                currency_code: "د اسعارو کوډ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ورودي",
              }),
              (i = { nan: "NaN", number: "عدد", array: "ارې" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `ناسم ورودي: باید instanceof ${n.expected} وای, مګر ${a} ترلاسه شو`;
                    return `ناسم ورودي: باید ${t} وای, مګر ${a} ترلاسه شو`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `ناسم ورودي: باید ${K(n.values[0])} وای`;
                    return `ناسم انتخاب: باید یو له ${c(n.values, "|")} څخه وای`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${r}${n.maximum.toString()} ${i.unit ?? "عنصرونه"} ولري`;
                    return `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${r}${n.maximum.toString()} وي`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} ${i.unit} ولري`;
                    return `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} وي`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `ناسم متن: باید د "${n.prefix}" سره پیل شي`;
                    if ("ends_with" === n.format) return `ناسم متن: باید د "${n.suffix}" سره پای ته ورسيږي`;
                    if ("includes" === n.format) return `ناسم متن: باید "${n.includes}" ولري`;
                    if ("regex" === n.format) return `ناسم متن: باید د ${n.pattern} سره مطابقت ولري`;
                    return `${r[n.format] ?? n.format} ناسم دی`;
                  case "not_multiple_of":
                    return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
                  case "unrecognized_keys":
                    return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `ناسم کلیډ په ${n.origin} کې`;
                  case "invalid_union":
                  default:
                    return "ناسمه ورودي";
                  case "invalid_element":
                    return `ناسم عنصر په ${n.origin} کې`;
                }
              }),
          };
        },
        "pt",
        0,
        function () {
          return {
            localeError: (() => {
              let t = {
                  string: { unit: "caracteres" },
                  file: { unit: "bytes" },
                  array: { unit: "elementos" },
                  set: { unit: "elementos" },
                  map: { unit: "entradas" },
                },
                r = {
                  regex: "a entrada",
                  email: "o endereço de e-mail",
                  url: "o URL",
                  emoji: "o emoji",
                  uuid: "o UUID",
                  uuidv4: "o UUIDv4",
                  uuidv6: "o UUIDv6",
                  nanoid: "o nanoid",
                  guid: "o GUID",
                  cuid: "o cuid",
                  cuid2: "o cuid2",
                  ulid: "o ULID",
                  xid: "o XID",
                  ksuid: "o KSUID",
                  datetime: "a data e hora ISO",
                  date: "a data ISO",
                  time: "a hora ISO",
                  duration: "a duração ISO",
                  ipv4: "o endereço IPv4",
                  ipv6: "o endereço IPv6",
                  mac: "o endereço MAC",
                  cidrv4: "o intervalo de endereços IPv4",
                  cidrv6: "o intervalo de endereços IPv6",
                  base64: "o texto codificado em base64",
                  base64url: "o texto codificado em base64url",
                  json_string: "o texto JSON",
                  e164: "o número E.164",
                  credit_card: "o número de cartão de crédito",
                  currency_code: "o código de moeda",
                  iban: "o IBAN",
                  jwt: "o JWT",
                  template_literal: "a entrada",
                },
                i = { definite: "o", indefinite: "um" },
                n = { definite: "a", indefinite: "uma" },
                a = {
                  string: { name: "texto", articles: i },
                  number: { name: "número", articles: i },
                  int: { name: "número inteiro", articles: i },
                  boolean: { name: "valor booleano", articles: i },
                  bigint: { name: "número bigint", articles: i },
                  symbol: { name: "símbolo", articles: i },
                  undefined: { name: 'valor "undefined"', articles: i },
                  null: { name: 'valor "nulo"', articles: i },
                  never: { name: 'valor "never"', articles: i },
                  void: { name: 'valor "void"', articles: i },
                  date: { name: "data", articles: n },
                  array: { name: "vetor", articles: i },
                  object: { name: "objeto", articles: i },
                  tuple: { name: "tuplo", articles: i },
                  record: { name: "registo", articles: i },
                  map: { name: "mapa", articles: i },
                  set: { name: "conjunto", articles: i },
                  file: { name: "ficheiro", articles: i },
                  nonoptional: { name: "valor não opcional", articles: i },
                  nan: { name: 'valor "NaN"', articles: i },
                  function: { name: "função", articles: n },
                };
              function o(t, r) {
                let n = a[t] ?? { name: `valor "${t}"`, articles: i };
                return `${n.articles[r]} ${n.name}`;
              }
              return (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let t = o(i.expected, "indefinite"),
                      r = o(eg(i.input), "indefinite");
                    return `Entrada inv\xe1lida: esperava ${t}, recebeu ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length) return `Entrada inv\xe1lida: esperava ${K(i.values[0])}`;
                    return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${c(i.values, "|")}`;
                  case "too_big": {
                    let r = i.inclusive ? "<=" : "<",
                      n = t[i.origin] ?? null;
                    if (n)
                      return `Demasiado grande: esperava que ${o(i.origin, "definite")} tivesse ${r} ${i.maximum.toString()} ${n.unit ?? "elementos"}`;
                    return `Demasiado grande: esperava que ${o(i.origin, "definite")} fosse ${r} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = i.inclusive ? ">=" : ">",
                      n = t[i.origin] ?? null;
                    if (n)
                      return `Demasiado pequeno: esperava que ${o(i.origin, "definite")} tivesse ${r} ${i.minimum.toString()} ${n.unit ?? "elementos"}`;
                    return `Demasiado pequeno: esperava que ${o(i.origin, "definite")} fosse ${r} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format) return `Texto inv\xe1lido: deve come\xe7ar por "${i.prefix}"`;
                    if ("ends_with" === i.format) return `Texto inv\xe1lido: deve terminar em "${i.suffix}"`;
                    if ("includes" === i.format) return `Texto inv\xe1lido: deve incluir "${i.includes}"`;
                    if ("regex" === i.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${i.pattern}`;
                    return `Formato d${r[i.format] ?? i.format} inv\xe1lido`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${i.divisor}`;
                  case "unrecognized_keys": {
                    let t = i.keys.length > 1 ? "s" : "";
                    return `Chave${t} inv\xe1lida${t}: ${c(i.keys, ", ")}`;
                  }
                  case "invalid_key":
                  case "invalid_element":
                    return `Entrada inv\xe1lida n${o(i.origin, "definite")}`;
                  case "invalid_union":
                    if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                      let t = i.options.map((t) => `'${t}'`).join(" | ");
                      return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${t}`;
                    }
                    return "Entrada inválida";
                  default:
                    return "Entrada inválida";
                }
              };
            })(),
          };
        },
        "ptBR",
        0,
        function () {
          return {
            localeError: (() => {
              let t = {
                  string: { unit: "caracteres" },
                  file: { unit: "bytes" },
                  array: { unit: "elementos" },
                  set: { unit: "elementos" },
                  map: { unit: "entradas" },
                },
                r = {
                  regex: "a entrada",
                  email: "o endereço de e-mail",
                  url: "o URL",
                  emoji: "o emoji",
                  uuid: "o UUID",
                  uuidv4: "o UUIDv4",
                  uuidv6: "o UUIDv6",
                  nanoid: "o nanoid",
                  guid: "o GUID",
                  cuid: "o cuid",
                  cuid2: "o cuid2",
                  ulid: "o ULID",
                  xid: "o XID",
                  ksuid: "o KSUID",
                  datetime: "a data e hora ISO",
                  date: "a data ISO",
                  time: "a hora ISO",
                  duration: "a duração ISO",
                  ipv4: "o endereço IPv4",
                  ipv6: "o endereço IPv6",
                  mac: "o endereço MAC",
                  cidrv4: "a faixa de endereços IPv4",
                  cidrv6: "a faixa de endereços IPv6",
                  base64: "o texto codificado em base64",
                  base64url: "o texto codificado em base64url",
                  json_string: "o texto JSON",
                  e164: "o número E.164",
                  credit_card: "o número de cartão de crédito",
                  currency_code: "o código de moeda",
                  iban: "o IBAN",
                  jwt: "o JWT",
                  template_literal: "a entrada",
                },
                i = { definite: "o", indefinite: "um" },
                n = { definite: "a", indefinite: "uma" },
                a = {
                  string: { name: "texto", articles: i },
                  number: { name: "número", articles: i },
                  int: { name: "número inteiro", articles: i },
                  boolean: { name: "valor booleano", articles: i },
                  bigint: { name: "número bigint", articles: i },
                  symbol: { name: "símbolo", articles: i },
                  undefined: { name: 'valor "undefined"', articles: i },
                  null: { name: 'valor "nulo"', articles: i },
                  never: { name: 'valor "never"', articles: i },
                  void: { name: 'valor "void"', articles: i },
                  date: { name: "data", articles: n },
                  array: { name: "vetor", articles: i },
                  object: { name: "objeto", articles: i },
                  tuple: { name: "tupla", articles: n },
                  record: { name: "registro", articles: i },
                  map: { name: "mapa", articles: i },
                  set: { name: "conjunto", articles: i },
                  file: { name: "arquivo", articles: i },
                  nonoptional: { name: "valor não opcional", articles: i },
                  nan: { name: 'valor "NaN"', articles: i },
                  function: { name: "função", articles: n },
                };
              function o(t, r) {
                let n = a[t] ?? { name: `valor "${t}"`, articles: i };
                return `${n.articles[r]} ${n.name}`;
              }
              return (i) => {
                switch (i.code) {
                  case "invalid_type": {
                    let t = o(i.expected, "indefinite"),
                      r = o(eg(i.input), "indefinite");
                    return `Entrada inv\xe1lida: esperava ${t}, recebeu ${r}`;
                  }
                  case "invalid_value":
                    if (1 === i.values.length) return `Entrada inv\xe1lida: esperava ${K(i.values[0])}`;
                    return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${c(i.values, "|")}`;
                  case "too_big": {
                    let r = i.inclusive ? "<=" : "<",
                      n = t[i.origin] ?? null;
                    if (n)
                      return `Grande demais: esperava que ${o(i.origin, "definite")} tivesse ${r} ${i.maximum.toString()} ${n.unit ?? "elementos"}`;
                    return `Grande demais: esperava que ${o(i.origin, "definite")} fosse ${r} ${i.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = i.inclusive ? ">=" : ">",
                      n = t[i.origin] ?? null;
                    if (n)
                      return `Pequeno demais: esperava que ${o(i.origin, "definite")} tivesse ${r} ${i.minimum.toString()} ${n.unit ?? "elementos"}`;
                    return `Pequeno demais: esperava que ${o(i.origin, "definite")} fosse ${r} ${i.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === i.format) return `Texto inv\xe1lido: deve come\xe7ar com "${i.prefix}"`;
                    if ("ends_with" === i.format) return `Texto inv\xe1lido: deve terminar com "${i.suffix}"`;
                    if ("includes" === i.format) return `Texto inv\xe1lido: deve incluir "${i.includes}"`;
                    if ("regex" === i.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${i.pattern}`;
                    return `Formato d${r[i.format] ?? i.format} inv\xe1lido`;
                  case "not_multiple_of":
                    return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${i.divisor}`;
                  case "unrecognized_keys": {
                    let t = i.keys.length > 1 ? "s" : "";
                    return `Chave${t} inv\xe1lida${t}: ${c(i.keys, ", ")}`;
                  }
                  case "invalid_key":
                  case "invalid_element":
                    return `Entrada inv\xe1lida n${o(i.origin, "definite")}`;
                  case "invalid_union":
                    if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                      let t = i.options.map((t) => `'${t}'`).join(" | ");
                      return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${t}`;
                    }
                    return "Entrada inválida";
                  default:
                    return "Entrada inválida";
                }
              };
            })(),
          };
        },
        "ro",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "caractere", verb: "să aibă" },
                file: { unit: "octeți", verb: "să aibă" },
                array: { unit: "elemente", verb: "să aibă" },
                set: { unit: "elemente", verb: "să aibă" },
                map: { unit: "intrări", verb: "să aibă" },
              }),
              (r = {
                regex: "intrare",
                email: "adresă de email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dată și oră ISO",
                date: "dată ISO",
                time: "oră ISO",
                duration: "durată ISO",
                ipv4: "adresă IPv4",
                ipv6: "adresă IPv6",
                mac: "adresă MAC",
                cidrv4: "interval IPv4",
                cidrv6: "interval IPv6",
                base64: "șir codat base64",
                base64url: "șir codat base64url",
                json_string: "șir JSON",
                e164: "număr E.164",
                credit_card: "număr de card de credit",
                currency_code: "cod valutar",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "intrare",
              }),
              (i = {
                nan: "NaN",
                string: "șir",
                number: "număr",
                boolean: "boolean",
                function: "funcție",
                array: "matrice",
                object: "obiect",
                undefined: "nedefinit",
                symbol: "simbol",
                bigint: "număr mare",
                void: "void",
                never: "never",
                map: "hartă",
                set: "set",
              }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `Intrare invalidă: așteptat ${t}, primit ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Intrare invalidă: așteptat ${K(n.values[0])}`;
                    return `Opțiune invalidă: așteptat una dintre ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Prea mare: așteptat ca ${n.origin ?? "valoarea"} ${i.verb} ${r}${n.maximum.toString()} ${i.unit ?? "elemente"}`;
                    return `Prea mare: așteptat ca ${n.origin ?? "valoarea"} să fie ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Prea mic: așteptat ca ${n.origin} ${i.verb} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Prea mic: așteptat ca ${n.origin} să fie ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Șir invalid: trebuie să \xeenceapă cu "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Șir invalid: trebuie să se termine cu "${n.suffix}"`;
                    if ("includes" === n.format) return `Șir invalid: trebuie să includă "${n.includes}"`;
                    if ("regex" === n.format) return `Șir invalid: trebuie să se potrivească cu modelul ${n.pattern}`;
                    return `Format invalid: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Număr invalid: trebuie să fie multiplu de ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Chei nerecunoscute: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Cheie invalidă \xeen ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Intrare invalidă";
                  case "invalid_element":
                    return `Valoare invalidă \xeen ${n.origin}`;
                }
              }),
          };
        },
        "ru",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: { one: "символ", few: "символа", many: "символов" }, verb: "иметь" },
                file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" },
                array: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
                set: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
                map: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
              }),
              (r = {
                regex: "ввод",
                email: "email адрес",
                url: "URL",
                emoji: "эмодзи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO дата и время",
                date: "ISO дата",
                time: "ISO время",
                duration: "ISO длительность",
                ipv4: "IPv4 адрес",
                ipv6: "IPv6 адрес",
                mac: "MAC адрес",
                cidrv4: "IPv4 диапазон",
                cidrv6: "IPv6 диапазон",
                base64: "строка в формате base64",
                base64url: "строка в формате base64url",
                json_string: "JSON строка",
                e164: "номер E.164",
                credit_card: "номер кредитной карты",
                currency_code: "код валюты",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ввод",
              }),
              (i = { nan: "NaN", number: "число", array: "массив" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Неверный ввод: ожидалось instanceof ${n.expected}, получено ${a}`;
                    return `Неверный ввод: ожидалось ${t}, получено ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Неверный ввод: ожидалось ${K(n.values[0])}`;
                    return `Неверный вариант: ожидалось одно из ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = at(Number(n.maximum), i.unit.one, i.unit.few, i.unit.many);
                      return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${r}${n.maximum.toString()} ${t}`;
                    }
                    return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) {
                      let t = at(Number(n.minimum), i.unit.one, i.unit.few, i.unit.many);
                      return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${r}${n.minimum.toString()} ${t}`;
                    }
                    return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Неверная строка: должна начинаться с "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Неверная строка: должна заканчиваться на "${n.suffix}"`;
                    if ("includes" === n.format) return `Неверная строка: должна содержать "${n.includes}"`;
                    if ("regex" === n.format) return `Неверная строка: должна соответствовать шаблону ${n.pattern}`;
                    return `Неверный ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Неверное число: должно быть кратным ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Неверный ключ в ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Неверные входные данные";
                  case "invalid_element":
                    return `Неверное значение в ${n.origin}`;
                }
              }),
          };
        },
        "sk",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "znakov", verb: "mať" },
                file: { unit: "bajtov", verb: "mať" },
                array: { unit: "prvkov", verb: "mať" },
                set: { unit: "prvkov", verb: "mať" },
                map: { unit: "položiek", verb: "mať" },
              }),
              (r = {
                regex: "regulárny výraz",
                email: "e-mailová adresa",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "dátum a čas vo formáte ISO",
                date: "dátum vo formáte ISO",
                time: "čas vo formáte ISO",
                duration: "doba trvania ISO",
                ipv4: "IPv4 adresa",
                ipv6: "IPv6 adresa",
                mac: "MAC adresa",
                cidrv4: "rozsah IPv4",
                cidrv6: "rozsah IPv6",
                base64: "reťazec zakódovaný vo formáte base64",
                base64url: "reťazec zakódovaný vo formáte base64url",
                json_string: "reťazec vo formáte JSON",
                e164: "číslo E.164",
                credit_card: "číslo kreditnej karty",
                currency_code: "kód meny",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vstup",
              }),
              (i = { nan: "NaN", number: "číslo", string: "reťazec", function: "funkcia", array: "pole" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Neplatn\xfd vstup: očak\xe1van\xe9 instanceof ${n.expected}, obdržan\xe9 ${a}`;
                    return `Neplatn\xfd vstup: očak\xe1van\xe9 ${t}, obdržan\xe9 ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Neplatn\xfd vstup: očak\xe1van\xe9 ${K(n.values[0])}`;
                    return `Neplatn\xfd vstup: očak\xe1van\xe1 jedna z hodn\xf4t ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Hodnota je pr\xedliš veľk\xe1: ${n.origin ?? "hodnota"} mus\xed mať ${r}${n.maximum.toString()} ${i.unit ?? "prvkov"}`;
                    return `Hodnota je pr\xedliš veľk\xe1: ${n.origin ?? "hodnota"} mus\xed byť ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Hodnota je pr\xedliš mal\xe1: ${n.origin ?? "hodnota"} mus\xed mať ${r}${n.minimum.toString()} ${i.unit ?? "prvkov"}`;
                    return `Hodnota je pr\xedliš mal\xe1: ${n.origin ?? "hodnota"} mus\xed byť ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Neplatn\xfd reťazec: mus\xed zač\xednať na "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Neplatn\xfd reťazec: mus\xed končiť na "${n.suffix}"`;
                    if ("includes" === n.format) return `Neplatn\xfd reťazec: mus\xed obsahovať "${n.includes}"`;
                    if ("regex" === n.format) return `Neplatn\xfd reťazec: mus\xed zodpovedať vzoru ${n.pattern}`;
                    return `Neplatn\xfd form\xe1t ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Neplatn\xe9 č\xedslo: mus\xed byť n\xe1sobkom ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Nezn\xe1me kl\xfače: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Neplatn\xfd kl\xfač v ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Neplatný vstup";
                  case "invalid_element":
                    return `Neplatn\xe1 hodnota v ${n.origin}`;
                }
              }),
          };
        },
        "sl",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "znakov", verb: "imeti" },
                file: { unit: "bajtov", verb: "imeti" },
                array: { unit: "elementov", verb: "imeti" },
                set: { unit: "elementov", verb: "imeti" },
                map: { unit: "elementov", verb: "imeti" },
              }),
              (r = {
                regex: "vnos",
                email: "e-poštni naslov",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datum in čas",
                date: "ISO datum",
                time: "ISO čas",
                duration: "ISO trajanje",
                ipv4: "IPv4 naslov",
                ipv6: "IPv6 naslov",
                mac: "MAC naslov",
                cidrv4: "obseg IPv4",
                cidrv6: "obseg IPv6",
                base64: "base64 kodiran niz",
                base64url: "base64url kodiran niz",
                json_string: "JSON niz",
                e164: "E.164 številka",
                credit_card: "številka kreditne kartice",
                currency_code: "koda valute",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "vnos",
              }),
              (i = { nan: "NaN", number: "število", array: "tabela" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Neveljaven vnos: pričakovano instanceof ${n.expected}, prejeto ${a}`;
                    return `Neveljaven vnos: pričakovano ${t}, prejeto ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Neveljaven vnos: pričakovano ${K(n.values[0])}`;
                    return `Neveljavna možnost: pričakovano eno izmed ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${r}${n.maximum.toString()} ${i.unit ?? "elementov"}`;
                    return `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Premajhno: pričakovano, da bo ${n.origin} imelo ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Premajhno: pričakovano, da bo ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Neveljaven niz: mora se začeti z "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Neveljaven niz: mora se končati z "${n.suffix}"`;
                    if ("includes" === n.format) return `Neveljaven niz: mora vsebovati "${n.includes}"`;
                    if ("regex" === n.format) return `Neveljaven niz: mora ustrezati vzorcu ${n.pattern}`;
                    return `Neveljaven ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Neveljaven ključ v ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Neveljaven vnos";
                  case "invalid_element":
                    return `Neveljavna vrednost v ${n.origin}`;
                }
              }),
          };
        },
        "sv",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "tecken", verb: "att ha" },
                file: { unit: "bytes", verb: "att ha" },
                array: { unit: "objekt", verb: "att innehålla" },
                set: { unit: "objekt", verb: "att innehålla" },
                map: { unit: "objekt", verb: "att innehålla" },
              }),
              (r = {
                regex: "reguljärt uttryck",
                email: "e-postadress",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO-datum och tid",
                date: "ISO-datum",
                time: "ISO-tid",
                duration: "ISO-varaktighet",
                ipv4: "IPv4-adress",
                ipv6: "IPv6-adress",
                mac: "MAC-adress",
                cidrv4: "IPv4-spektrum",
                cidrv6: "IPv6-spektrum",
                base64: "base64-kodad sträng",
                base64url: "base64url-kodad sträng",
                json_string: "JSON-sträng",
                e164: "E.164-nummer",
                credit_card: "kreditkortsnummer",
                currency_code: "valutakod",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "mall-literal",
              }),
              (i = { nan: "NaN", number: "antal", array: "lista" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ogiltig inmatning: f\xf6rv\xe4ntat instanceof ${n.expected}, fick ${a}`;
                    return `Ogiltig inmatning: f\xf6rv\xe4ntat ${t}, fick ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ogiltig inmatning: f\xf6rv\xe4ntat ${K(n.values[0])}`;
                    return `Ogiltigt val: f\xf6rv\xe4ntade en av ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `F\xf6r stor(t): f\xf6rv\xe4ntade ${n.origin ?? "värdet"} att ha ${r}${n.maximum.toString()} ${i.unit ?? "element"}`;
                    return `F\xf6r stor(t): f\xf6rv\xe4ntat ${n.origin ?? "värdet"} att ha ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `F\xf6r lite(t): f\xf6rv\xe4ntade ${n.origin ?? "värdet"} att ha ${r}${n.minimum.toString()} ${i.unit}`;
                    return `F\xf6r lite(t): f\xf6rv\xe4ntade ${n.origin ?? "värdet"} att ha ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Ogiltig str\xe4ng: m\xe5ste sluta med "${n.suffix}"`;
                    if ("includes" === n.format) return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${n.includes}"`;
                    if ("regex" === n.format) return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${n.pattern}"`;
                    return `Ogiltig(t) ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ogiltigt tal: m\xe5ste vara en multipel av ${n.divisor}`;
                  case "unrecognized_keys":
                    return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
                  case "invalid_union":
                  default:
                    return "Ogiltig input";
                  case "invalid_element":
                    return `Ogiltigt v\xe4rde i ${n.origin ?? "värdet"}`;
                }
              }),
          };
        },
        "ta",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
                file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
                array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
                map: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
              }),
              (r = {
                regex: "உள்ளீடு",
                email: "மின்னஞ்சல் முகவரி",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO தேதி நேரம்",
                date: "ISO தேதி",
                time: "ISO நேரம்",
                duration: "ISO கால அளவு",
                ipv4: "IPv4 முகவரி",
                ipv6: "IPv6 முகவரி",
                mac: "MAC முகவரி",
                cidrv4: "IPv4 வரம்பு",
                cidrv6: "IPv6 வரம்பு",
                base64: "base64-encoded சரம்",
                base64url: "base64url-encoded சரம்",
                json_string: "JSON சரம்",
                e164: "E.164 எண்",
                credit_card: "கடன் அட்டை எண்",
                currency_code: "நாணயக் குறியீடு",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "input",
              }),
              (i = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${n.expected}, பெறப்பட்டது ${a}`;
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t}, பெறப்பட்டது ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${K(n.values[0])}`;
                    return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${c(n.values, "|")} இல் ஒன்று`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${r}${n.maximum.toString()} ${i.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${r}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ${i.unit} ஆக இருக்க வேண்டும்`;
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `தவறான சரம்: "${n.prefix}" இல் தொடங்க வேண்டும்`;
                    if ("ends_with" === n.format) return `தவறான சரம்: "${n.suffix}" இல் முடிவடைய வேண்டும்`;
                    if ("includes" === n.format) return `தவறான சரம்: "${n.includes}" ஐ உள்ளடக்க வேண்டும்`;
                    if ("regex" === n.format) return `தவறான சரம்: ${n.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                    return `தவறான ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
                  case "unrecognized_keys":
                    return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} இல் தவறான விசை`;
                  case "invalid_union":
                  default:
                    return "தவறான உள்ளீடு";
                  case "invalid_element":
                    return `${n.origin} இல் தவறான மதிப்பு`;
                }
              }),
          };
        },
        "tg",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "аломат", verb: "дошта бошад" },
                file: { unit: "байт", verb: "дошта бошад" },
                array: { unit: "унсур", verb: "дошта бошад" },
                set: { unit: "унсур", verb: "дошта бошад" },
                map: { unit: "сабт", verb: "дошта бошад" },
              }),
              (r = {
                regex: "вуруд",
                email: "суроғаи email",
                url: "URL",
                emoji: "эмоҷи",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "санаву вақти ISO",
                date: "санаи ISO",
                time: "вақти ISO",
                duration: "давомнокии ISO",
                ipv4: "суроғаи IPv4",
                ipv6: "суроғаи IPv6",
                mac: "суроғаи MAC",
                cidrv4: "маҳдудаи IPv4",
                cidrv6: "маҳдудаи IPv6",
                base64: "сатри дар формати base64",
                base64url: "сатри дар формати base64url",
                json_string: "сатри JSON",
                e164: "рақами E.164",
                credit_card: "рақами корти кредитӣ",
                currency_code: "рамзи асъор",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "вуруд",
              }),
              (i = { nan: "NaN", number: "рақам", string: "сатр", array: "массив", object: "объект", date: "сана" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `Вуруди нодуруст: ${t} интизор мерафт, ${a} гирифта шуд`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Вуруди нодуруст: ${K(n.values[0])} интизор мерафт`;
                    return `Интихоби нодуруст: яке аз ${c(n.values, "|")} интизор мерафт`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Хеле калон: ${n.origin ?? "қимат"} бояд ${r}${n.maximum.toString()} ${i.unit} ${i.verb}`;
                    return `Хеле калон: ${n.origin ?? "қимат"} бояд ${r}${n.maximum.toString()} бошад`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Хеле хурд: ${n.origin} бояд ${r}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                    return `Хеле хурд: ${n.origin} бояд ${r}${n.minimum.toString()} бошад`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Сатри нодуруст: бояд бо "${n.prefix}" оғоз шавад`;
                    if ("ends_with" === n.format) return `Сатри нодуруст: бояд бо "${n.suffix}" анҷом ёбад`;
                    if ("includes" === n.format) return `Сатри нодуруст: бояд "${n.includes}"-ро дар бар гирад`;
                    if ("regex" === n.format) return `Сатри нодуруст: бояд ба намунаи ${n.pattern} мувофиқат кунад`;
                    return `${r[n.format] ?? n.format}-и нодуруст`;
                  case "not_multiple_of":
                    return `Рақами нодуруст: бояд ба ${n.divisor} бе бақия тақсим шавад`;
                  case "unrecognized_keys":
                    return `Калид${n.keys.length > 1 ? "ҳои" : "и"} номаълум: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Калиди нодуруст дар ${n.origin}`;
                  case "invalid_union":
                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                      let t = n.options.map((t) => `'${t}'`).join(" | ");
                      return `Қимати нодурусти дискриминатор: ${t} интизор мерафт`;
                    }
                    return "Вуруди нодуруст";
                  case "invalid_element":
                    return `Қимати нодуруст дар ${n.origin}`;
                  default:
                    return "Вуруди нодуруст";
                }
              }),
          };
        },
        "th",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "ตัวอักษร", verb: "ควรมี" },
                file: { unit: "ไบต์", verb: "ควรมี" },
                array: { unit: "รายการ", verb: "ควรมี" },
                set: { unit: "รายการ", verb: "ควรมี" },
                map: { unit: "รายการ", verb: "ควรมี" },
              }),
              (r = {
                regex: "ข้อมูลที่ป้อน",
                email: "ที่อยู่อีเมล",
                url: "URL",
                emoji: "อิโมจิ",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "วันที่เวลาแบบ ISO",
                date: "วันที่แบบ ISO",
                time: "เวลาแบบ ISO",
                duration: "ช่วงเวลาแบบ ISO",
                ipv4: "ที่อยู่ IPv4",
                ipv6: "ที่อยู่ IPv6",
                mac: "ที่อยู่ MAC",
                cidrv4: "ช่วง IP แบบ IPv4",
                cidrv6: "ช่วง IP แบบ IPv6",
                base64: "ข้อความแบบ Base64",
                base64url: "ข้อความแบบ Base64 สำหรับ URL",
                json_string: "ข้อความแบบ JSON",
                e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
                credit_card: "หมายเลขบัตรเครดิต",
                currency_code: "รหัสสกุลเงิน",
                iban: "IBAN",
                jwt: "โทเคน JWT",
                template_literal: "ข้อมูลที่ป้อน",
              }),
              (i = { nan: "NaN", number: "ตัวเลข", array: "อาร์เรย์ (Array)", null: "ไม่มีค่า (null)" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${n.expected} แต่ได้รับ ${a}`;
                    return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t} แต่ได้รับ ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${K(n.values[0])}`;
                    return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${r} ${n.maximum.toString()} ${i.unit ?? "รายการ"}`;
                    return `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${r} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? "อย่างน้อย" : "มากกว่า",
                      i = t[n.origin] ?? null;
                    if (i) return `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()} ${i.unit}`;
                    return `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${n.prefix}"`;
                    if ("ends_with" === n.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${n.suffix}"`;
                    if ("includes" === n.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${n.includes}" อยู่ในข้อความ`;
                    if ("regex" === n.format) return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${n.pattern}`;
                    return `รูปแบบไม่ถูกต้อง: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
                  case "unrecognized_keys":
                    return `พบคีย์ที่ไม่รู้จัก: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `คีย์ไม่ถูกต้องใน ${n.origin}`;
                  case "invalid_union":
                    return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
                  case "invalid_element":
                    return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
                  default:
                    return "ข้อมูลไม่ถูกต้อง";
                }
              }),
          };
        },
        "tk",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "simwol", verb: "bolmaly" },
                file: { unit: "baýt", verb: "bolmaly" },
                array: { unit: "elementler", verb: "bolmaly" },
                set: { unit: "elementler", verb: "bolmaly" },
                map: { unit: "elementler", verb: "bolmaly" },
              }),
              (r = {
                regex: "giriş",
                email: "e-poçta salgysy",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sene we wagt",
                date: "ISO sene",
                time: "ISO wagt",
                duration: "ISO wagt aralygy",
                ipv4: "IPv4 salgysy",
                ipv6: "IPv6 salgysy",
                mac: "MAC salgysy",
                cidrv4: "IPv4 aralygy",
                cidrv6: "IPv6 aralygy",
                base64: "base64 bilen şifrlenen setir",
                base64url: "base64url bilen şifrlenen setir",
                json_string: "JSON setiri",
                e164: "E.164 nomeri",
                credit_card: "kredit kartynyň nomeri",
                currency_code: "walýuta kody",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "şablon",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    return `N\xe4dogry baha: garaşylan ${t} \xfderine ${a} alyndy`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `N\xe4dogry baha: ${K(n.values[0])} bolmaly`;
                    return `N\xe4dogry sa\xfdlaw: aşakdakylardan biri bolmaly: ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Has uly: garaşyl\xfdan ${n.origin ?? "baha"} ${r} ${n.maximum.toString()} ${i.unit ?? "element"}`;
                    return `Has uly: garaşyl\xfdan ${n.origin ?? "baha"} ${r} ${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Has ki\xe7i: garaşyl\xfdan ${n.origin} ${r} ${n.minimum.toString()} ${i.unit}`;
                    return `Has ki\xe7i: garaşyl\xfdan ${n.origin} ${r} ${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `N\xe4dogry setir: "${n.prefix}" bilen başlamaly`;
                    if ("ends_with" === n.format) return `N\xe4dogry setir: "${n.suffix}" bilen gutarmaly`;
                    if ("includes" === n.format) return `N\xe4dogry setir: "${n.includes}" saklamaly`;
                    if ("regex" === n.format) return `N\xe4dogry setir: ${n.pattern} nusga la\xfdyk bolmaly`;
                    return `N\xe4dogry ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `N\xe4dogry san: ${n.divisor} bilen galyndysyz b\xf6l\xfcnmeli`;
                  case "unrecognized_keys":
                    return `Tanalma\xfdan a\xe7ar${n.keys.length > 1 ? "lar" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} i\xe7inde n\xe4dogry a\xe7ar`;
                  case "invalid_union":
                  default:
                    return "Nädogry baha";
                  case "invalid_element":
                    return `${n.origin} i\xe7inde n\xe4dogry baha`;
                }
              }),
          };
        },
        "tr",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "karakter", verb: "olmalı" },
                file: { unit: "bayt", verb: "olmalı" },
                array: { unit: "öğe", verb: "olmalı" },
                set: { unit: "öğe", verb: "olmalı" },
                map: { unit: "öğe", verb: "olmalı" },
              }),
              (r = {
                regex: "girdi",
                email: "e-posta adresi",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO tarih ve saat",
                date: "ISO tarih",
                time: "ISO saat",
                duration: "ISO süre",
                ipv4: "IPv4 adresi",
                ipv6: "IPv6 adresi",
                mac: "MAC adresi",
                cidrv4: "IPv4 aralığı",
                cidrv6: "IPv6 aralığı",
                base64: "base64 ile şifrelenmiş metin",
                base64url: "base64url ile şifrelenmiş metin",
                json_string: "JSON dizesi",
                e164: "E.164 sayısı",
                credit_card: "kredi kartı numarası",
                currency_code: "para birimi kodu",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "Şablon dizesi",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Ge\xe7ersiz değer: beklenen instanceof ${n.expected}, alınan ${a}`;
                    return `Ge\xe7ersiz değer: beklenen ${t}, alınan ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Ge\xe7ersiz değer: beklenen ${K(n.values[0])}`;
                    return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `\xc7ok b\xfcy\xfck: beklenen ${n.origin ?? "değer"} ${r}${n.maximum.toString()} ${i.unit ?? "öğe"}`;
                    return `\xc7ok b\xfcy\xfck: beklenen ${n.origin ?? "değer"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `\xc7ok k\xfc\xe7\xfck: beklenen ${n.origin} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `\xc7ok k\xfc\xe7\xfck: beklenen ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ge\xe7ersiz metin: "${n.prefix}" ile başlamalı`;
                    if ("ends_with" === n.format) return `Ge\xe7ersiz metin: "${n.suffix}" ile bitmeli`;
                    if ("includes" === n.format) return `Ge\xe7ersiz metin: "${n.includes}" i\xe7ermeli`;
                    if ("regex" === n.format) return `Ge\xe7ersiz metin: ${n.pattern} desenine uymalı`;
                    return `Ge\xe7ersiz ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Ge\xe7ersiz sayı: ${n.divisor} ile tam b\xf6l\xfcnebilmeli`;
                  case "unrecognized_keys":
                    return `Tanınmayan anahtar${n.keys.length > 1 ? "lar" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} i\xe7inde ge\xe7ersiz anahtar`;
                  case "invalid_union":
                  default:
                    return "Geçersiz değer";
                  case "invalid_element":
                    return `${n.origin} i\xe7inde ge\xe7ersiz değer`;
                }
              }),
          };
        },
        "ua",
        0,
        function () {
          return ar();
        },
        "uk",
        0,
        ar,
        "ur",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "حروف", verb: "ہونا" },
                file: { unit: "بائٹس", verb: "ہونا" },
                array: { unit: "آئٹمز", verb: "ہونا" },
                set: { unit: "آئٹمز", verb: "ہونا" },
                map: { unit: "آئٹمز", verb: "ہونا" },
              }),
              (r = {
                regex: "ان پٹ",
                email: "ای میل ایڈریس",
                url: "یو آر ایل",
                emoji: "ایموجی",
                uuid: "یو یو آئی ڈی",
                uuidv4: "یو یو آئی ڈی وی 4",
                uuidv6: "یو یو آئی ڈی وی 6",
                nanoid: "نینو آئی ڈی",
                guid: "جی یو آئی ڈی",
                cuid: "سی یو آئی ڈی",
                cuid2: "سی یو آئی ڈی 2",
                ulid: "یو ایل آئی ڈی",
                xid: "ایکس آئی ڈی",
                ksuid: "کے ایس یو آئی ڈی",
                datetime: "آئی ایس او ڈیٹ ٹائم",
                date: "آئی ایس او تاریخ",
                time: "آئی ایس او وقت",
                duration: "آئی ایس او مدت",
                ipv4: "آئی پی وی 4 ایڈریس",
                ipv6: "آئی پی وی 6 ایڈریس",
                mac: "ایم اے سی ایڈریس",
                cidrv4: "آئی پی وی 4 رینج",
                cidrv6: "آئی پی وی 6 رینج",
                base64: "بیس 64 ان کوڈڈ سٹرنگ",
                base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
                json_string: "جے ایس او این سٹرنگ",
                e164: "ای 164 نمبر",
                credit_card: "کریڈٹ کارڈ نمبر",
                currency_code: "کرنسی کوڈ",
                iban: "IBAN",
                jwt: "جے ڈبلیو ٹی",
                template_literal: "ان پٹ",
              }),
              (i = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `غلط ان پٹ: instanceof ${n.expected} متوقع تھا، ${a} موصول ہوا`;
                    return `غلط ان پٹ: ${t} متوقع تھا، ${a} موصول ہوا`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `غلط ان پٹ: ${K(n.values[0])} متوقع تھا`;
                    return `غلط آپشن: ${c(n.values, "|")} میں سے ایک متوقع تھا`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${r}${n.maximum.toString()} ${i.unit ?? "عناصر"} ہونے متوقع تھے`;
                    return `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${r}${n.maximum.toString()} ہونا متوقع تھا`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `بہت چھوٹا: ${n.origin} کے ${r}${n.minimum.toString()} ${i.unit} ہونے متوقع تھے`;
                    return `بہت چھوٹا: ${n.origin} کا ${r}${n.minimum.toString()} ہونا متوقع تھا`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `غلط سٹرنگ: "${n.prefix}" سے شروع ہونا چاہیے`;
                    if ("ends_with" === n.format) return `غلط سٹرنگ: "${n.suffix}" پر ختم ہونا چاہیے`;
                    if ("includes" === n.format) return `غلط سٹرنگ: "${n.includes}" شامل ہونا چاہیے`;
                    if ("regex" === n.format) return `غلط سٹرنگ: پیٹرن ${n.pattern} سے میچ ہونا چاہیے`;
                    return `غلط ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
                  case "unrecognized_keys":
                    return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${c(n.keys, "، ")}`;
                  case "invalid_key":
                    return `${n.origin} میں غلط کی`;
                  case "invalid_union":
                  default:
                    return "غلط ان پٹ";
                  case "invalid_element":
                    return `${n.origin} میں غلط ویلیو`;
                }
              }),
          };
        },
        "uz",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "belgi", verb: "bo‘lishi kerak" },
                file: { unit: "bayt", verb: "bo‘lishi kerak" },
                array: { unit: "element", verb: "bo‘lishi kerak" },
                set: { unit: "element", verb: "bo‘lishi kerak" },
                map: { unit: "yozuv", verb: "bo‘lishi kerak" },
              }),
              (r = {
                regex: "kirish",
                email: "elektron pochta manzili",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO sana va vaqti",
                date: "ISO sana",
                time: "ISO vaqt",
                duration: "ISO davomiylik",
                ipv4: "IPv4 manzil",
                ipv6: "IPv6 manzil",
                mac: "MAC manzil",
                cidrv4: "IPv4 diapazon",
                cidrv6: "IPv6 diapazon",
                base64: "base64 kodlangan satr",
                base64url: "base64url kodlangan satr",
                json_string: "JSON satr",
                e164: "E.164 raqam",
                credit_card: "kredit karta raqami",
                currency_code: "valyuta kodi",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "kirish",
              }),
              (i = { nan: "NaN", number: "raqam", array: "massiv" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Noto‘g‘ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${a}`;
                    return `Noto‘g‘ri kirish: kutilgan ${t}, qabul qilingan ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Noto‘g‘ri kirish: kutilgan ${K(n.values[0])}`;
                    return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${r}${n.maximum.toString()} ${i.unit} ${i.verb}`;
                    return `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()} ${i.unit} ${i.verb}`;
                    return `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Noto‘g‘ri satr: "${n.prefix}" bilan boshlanishi kerak`;
                    if ("ends_with" === n.format) return `Noto‘g‘ri satr: "${n.suffix}" bilan tugashi kerak`;
                    if ("includes" === n.format) return `Noto‘g‘ri satr: "${n.includes}" ni o‘z ichiga olishi kerak`;
                    if ("regex" === n.format) return `Noto‘g‘ri satr: ${n.pattern} shabloniga mos kelishi kerak`;
                    return `Noto‘g‘ri ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Noto‘g‘ri raqam: ${n.divisor} ning karralisi bo‘lishi kerak`;
                  case "unrecognized_keys":
                    return `Noma’lum kalit${n.keys.length > 1 ? "lar" : ""}: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} dagi kalit noto‘g‘ri`;
                  case "invalid_union":
                  default:
                    return "Noto‘g‘ri kirish";
                  case "invalid_element":
                    return `${n.origin} da noto‘g‘ri qiymat`;
                }
              }),
          };
        },
        "vi",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "ký tự", verb: "có" },
                file: { unit: "byte", verb: "có" },
                array: { unit: "phần tử", verb: "có" },
                set: { unit: "phần tử", verb: "có" },
                map: { unit: "phần tử", verb: "có" },
              }),
              (r = {
                regex: "đầu vào",
                email: "địa chỉ email",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ngày giờ ISO",
                date: "ngày ISO",
                time: "giờ ISO",
                duration: "khoảng thời gian ISO",
                ipv4: "địa chỉ IPv4",
                ipv6: "địa chỉ IPv6",
                mac: "địa chỉ MAC",
                cidrv4: "dải IPv4",
                cidrv6: "dải IPv6",
                base64: "chuỗi mã hóa base64",
                base64url: "chuỗi mã hóa base64url",
                json_string: "chuỗi JSON",
                e164: "số E.164",
                credit_card: "số thẻ tín dụng",
                currency_code: "mã tiền tệ",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "đầu vào",
              }),
              (i = { nan: "NaN", number: "số", array: "mảng" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi instanceof ${n.expected}, nhận được ${a}`;
                    return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${t}, nhận được ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${K(n.values[0])}`;
                    return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `Qu\xe1 lớn: mong đợi ${n.origin ?? "giá trị"} ${i.verb} ${r}${n.maximum.toString()} ${i.unit ?? "phần tử"}`;
                    return `Qu\xe1 lớn: mong đợi ${n.origin ?? "giá trị"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `Qu\xe1 nhỏ: mong đợi ${n.origin} ${i.verb} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `Qu\xe1 nhỏ: mong đợi ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${n.suffix}"`;
                    if ("includes" === n.format) return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${n.includes}"`;
                    if ("regex" === n.format) return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${n.pattern}`;
                    return `${r[n.format] ?? n.format} kh\xf4ng hợp lệ`;
                  case "not_multiple_of":
                    return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Kh\xf3a kh\xf4ng được nhận dạng: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Kh\xf3a kh\xf4ng hợp lệ trong ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Đầu vào không hợp lệ";
                  case "invalid_element":
                    return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${n.origin}`;
                }
              }),
          };
        },
        "yo",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "àmi", verb: "ní" },
                file: { unit: "bytes", verb: "ní" },
                array: { unit: "nkan", verb: "ní" },
                set: { unit: "nkan", verb: "ní" },
                map: { unit: "nkan", verb: "ní" },
              }),
              (r = {
                regex: "ẹ̀rọ ìbáwọlé",
                email: "àdírẹ́sì ìmẹ́lì",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "àkókò ISO",
                date: "ọjọ́ ISO",
                time: "àkókò ISO",
                duration: "àkókò tó pé ISO",
                ipv4: "àdírẹ́sì IPv4",
                ipv6: "àdírẹ́sì IPv6",
                mac: "àdírẹ́sì MAC",
                cidrv4: "àgbègbè IPv4",
                cidrv6: "àgbègbè IPv6",
                base64: "ọ̀rọ̀ tí a kọ́ ní base64",
                base64url: "ọ̀rọ̀ base64url",
                json_string: "ọ̀rọ̀ JSON",
                e164: "nọ́mbà E.164",
                credit_card: "nọmba kaadi gbese",
                currency_code: "koodu owó",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "ẹ̀rọ ìbáwọlé",
              }),
              (i = { nan: "NaN", number: "nọ́mbà", array: "akopọ" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected))
                      return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi instanceof ${n.expected}, \xe0mọ̀ a r\xed ${a}`;
                    return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${t}, \xe0mọ̀ a r\xed ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${K(n.values[0])}`;
                    return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${n.origin ?? "iye"} ${i.verb} ${r}${n.maximum} ${i.unit}`;
                    return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${r}${n.maximum}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${n.origin} ${i.verb} ${r}${n.minimum} ${i.unit}`;
                    return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${r}${n.minimum}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${n.prefix}"`;
                    if ("ends_with" === n.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${n.suffix}"`;
                    if ("includes" === n.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${n.includes}"`;
                    if ("regex" === n.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${n.pattern}`;
                    return `Aṣ\xecṣe: ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${n.divisor}`;
                  case "unrecognized_keys":
                    return `Bọt\xecn\xec \xe0\xecmọ̀: ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${n.origin}`;
                  case "invalid_union":
                  default:
                    return "Ìbáwọlé aṣìṣe";
                  case "invalid_element":
                    return `Iye aṣ\xecṣe n\xedn\xfa ${n.origin}`;
                }
              }),
          };
        },
        "zhCN",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "字符", verb: "包含" },
                file: { unit: "字节", verb: "包含" },
                array: { unit: "项", verb: "包含" },
                set: { unit: "项", verb: "包含" },
                map: { unit: "项", verb: "包含" },
              }),
              (r = {
                regex: "输入",
                email: "电子邮件",
                url: "URL",
                emoji: "表情符号",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO日期时间",
                date: "ISO日期",
                time: "ISO时间",
                duration: "ISO时长",
                ipv4: "IPv4地址",
                ipv6: "IPv6地址",
                mac: "MAC地址",
                cidrv4: "IPv4网段",
                cidrv6: "IPv6网段",
                base64: "base64编码字符串",
                base64url: "base64url编码字符串",
                json_string: "JSON字符串",
                e164: "E.164号码",
                credit_card: "信用卡号",
                currency_code: "货币代码",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "输入",
              }),
              (i = { nan: "NaN", number: "数字", array: "数组", null: "空值(null)" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected)) return `无效输入：期望 instanceof ${n.expected}，实际接收 ${a}`;
                    return `无效输入：期望 ${t}，实际接收 ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `无效输入：期望 ${K(n.values[0])}`;
                    return `无效选项：期望以下之一 ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `数值过大：期望 ${n.origin ?? "值"} ${r}${n.maximum.toString()} ${i.unit ?? "个元素"}`;
                    return `数值过大：期望 ${n.origin ?? "值"} ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()} ${i.unit}`;
                    return `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `无效字符串：必须以 "${n.prefix}" 开头`;
                    if ("ends_with" === n.format) return `无效字符串：必须以 "${n.suffix}" 结尾`;
                    if ("includes" === n.format) return `无效字符串：必须包含 "${n.includes}"`;
                    if ("regex" === n.format) return `无效字符串：必须满足正则表达式 ${n.pattern}`;
                    return `无效${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `无效数字：必须是 ${n.divisor} 的倍数`;
                  case "unrecognized_keys":
                    return `出现未知的键(key): ${c(n.keys, ", ")}`;
                  case "invalid_key":
                    return `${n.origin} 中的键(key)无效`;
                  case "invalid_union":
                  default:
                    return "无效输入";
                  case "invalid_element":
                    return `${n.origin} 中包含无效值(value)`;
                }
              }),
          };
        },
        "zhTW",
        0,
        function () {
          let t, r, i;
          return {
            localeError:
              ((t = {
                string: { unit: "字元", verb: "擁有" },
                file: { unit: "位元組", verb: "擁有" },
                array: { unit: "項目", verb: "擁有" },
                set: { unit: "項目", verb: "擁有" },
                map: { unit: "項目", verb: "擁有" },
              }),
              (r = {
                regex: "輸入",
                email: "郵件地址",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO 日期時間",
                date: "ISO 日期",
                time: "ISO 時間",
                duration: "ISO 期間",
                ipv4: "IPv4 位址",
                ipv6: "IPv6 位址",
                mac: "MAC 位址",
                cidrv4: "IPv4 範圍",
                cidrv6: "IPv6 範圍",
                base64: "base64 編碼字串",
                base64url: "base64url 編碼字串",
                json_string: "JSON 字串",
                e164: "E.164 數值",
                credit_card: "信用卡號",
                currency_code: "貨幣代碼",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "輸入",
              }),
              (i = { nan: "NaN" }),
              (n) => {
                switch (n.code) {
                  case "invalid_type": {
                    let t = i[n.expected] ?? n.expected,
                      r = eg(n.input),
                      a = i[r] ?? r;
                    if (/^[A-Z]/.test(n.expected)) return `無效的輸入值：預期為 instanceof ${n.expected}，但收到 ${a}`;
                    return `無效的輸入值：預期為 ${t}，但收到 ${a}`;
                  }
                  case "invalid_value":
                    if (1 === n.values.length) return `無效的輸入值：預期為 ${K(n.values[0])}`;
                    return `無效的選項：預期為以下其中之一 ${c(n.values, "|")}`;
                  case "too_big": {
                    let r = n.inclusive ? "<=" : "<",
                      i = t[n.origin] ?? null;
                    if (i)
                      return `數值過大：預期 ${n.origin ?? "值"} 應為 ${r}${n.maximum.toString()} ${i.unit ?? "個元素"}`;
                    return `數值過大：預期 ${n.origin ?? "值"} 應為 ${r}${n.maximum.toString()}`;
                  }
                  case "too_small": {
                    let r = n.inclusive ? ">=" : ">",
                      i = t[n.origin] ?? null;
                    if (i) return `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()} ${i.unit}`;
                    return `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()}`;
                  }
                  case "invalid_format":
                    if ("starts_with" === n.format) return `無效的字串：必須以 "${n.prefix}" 開頭`;
                    if ("ends_with" === n.format) return `無效的字串：必須以 "${n.suffix}" 結尾`;
                    if ("includes" === n.format) return `無效的字串：必須包含 "${n.includes}"`;
                    if ("regex" === n.format) return `無效的字串：必須符合格式 ${n.pattern}`;
                    return `無效的 ${r[n.format] ?? n.format}`;
                  case "not_multiple_of":
                    return `無效的數字：必須為 ${n.divisor} 的倍數`;
                  case "unrecognized_keys":
                    return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${c(n.keys, "、")}`;
                  case "invalid_key":
                    return `${n.origin} 中有無效的鍵值`;
                  case "invalid_union":
                  default:
                    return "無效的輸入值";
                  case "invalid_element":
                    return `${n.origin} 中有無效的值`;
                }
              }),
          };
        },
      ],
      42863,
    );
    var ai = t.i(42863);
    let an = Symbol("ZodOutput"),
      aa = Symbol("ZodInput");
    class ao {
      constructor() {
        ((this._map = new WeakMap()), (this._idmap = new Map()));
      }
      add(t, ...r) {
        let i = r[0];
        return (this._map.set(t, i), i && "object" == typeof i && "id" in i && this._idmap.set(i.id, t), this);
      }
      clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
      }
      remove(t) {
        let r = this._map.get(t);
        return (r && "object" == typeof r && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this);
      }
      get(t) {
        let r = t._zod.parent;
        if (r) {
          let i = { ...(this.get(r) ?? {}) };
          delete i.id;
          let n = { ...i, ...this._map.get(t) };
          return Object.keys(n).length ? n : void 0;
        }
        return this._map.get(t);
      }
      has(t) {
        return this._map.has(t);
      }
    }
    function au() {
      return new ao();
    }
    (n0 = globalThis).__zod_globalRegistry ?? (n0.__zod_globalRegistry = au());
    let as = globalThis.__zod_globalRegistry;
    (t.s(["$ZodRegistry", 0, ao, "$input", 0, aa, "$output", 0, an, "globalRegistry", 0, as, "registry", 0, au], 93551),
      t.i(93551),
      t.i(9141));
    let al = Symbol.for("zod.compile.invalid"),
      ad = Symbol.for("zod.compile.fallback");
    class ac extends Error {
      constructor(t = "z.compile does not support async refinements, transforms, or checks") {
        (super(t), (this.name = "ZodCompileAsyncError"));
      }
    }
    class af extends Error {
      constructor(t, r = !0) {
        (super(`z.compile does not support ${t}; this schema must use the runtime parser`),
          (this.name = "ZodCompileUnsupportedError"),
          (this.islandable = r));
      }
    }
    function am(t, r) {
      try {
        let r = av(t),
          i = ap(t, r);
        return (
          (i._zod.bag.validator = (function (t, r) {
            try {
              return av(t, { assertOnly: !0 });
            } catch {
              return r;
            }
          })(t, r)),
          i
        );
      } catch (i) {
        if (r?.strict) throw i;
        return t;
      }
    }
    function ap(t, r) {
      if (nG(t)) throw new af("a schema whose subtree contains a reference cycle");
      let i = B(t),
        n = t._zod.run,
        a = n.__originalRun ?? n,
        o = (t, i) => {
          if (i?.async || i?.direction === "backward" || i?.skipChecks || i?.[ad] || (i && nY(i, t.value)))
            return a(t, i);
          let n = r(t.value);
          return n !== al ? ((t.value = n), t) : (i && (i[ad] = !0), a(t, i));
        };
      return (
        (o.__originalRun = a),
        (i._zod.bag.fallbackRun = a),
        (i._zod.bag.validator = r),
        (i._zod.run = o),
        n.__originalRun ||
          (function (t, r, i) {
            if ("function" == typeof r.safeParse) {
              let n = r.safeParse;
              t.safeParse = (t, r) => {
                let a = i(t);
                return a !== al ? { success: !0, data: a } : n(t, r);
              };
            }
            if ("function" == typeof r.parse) {
              let n = r.parse;
              t.parse = (t, r) => {
                let a = i(t);
                return a !== al ? a : n(t, r);
              };
            }
          })(i, t, r),
        i
      );
    }
    function av(t, r) {
      let i,
        n = !0;
      try {
        n = nG(t);
      } catch {}
      if (n) throw new af("a schema whose subtree contains a reference cycle");
      let a = { constants: new Map(), constantCounter: 0, varCounter: 0, definite: !0 },
        o = new rF(["input"]),
        u = aN(o, a, t, "input", !r?.assertOnly);
      o.write(null === u ? "return true;" : `return ${u};`);
      let s = ["INVALID", ...a.constants.keys()],
        l = [al, ...a.constants.values()],
        d = o.content.join("\n"),
        c = r?.debug
          ? s.length > 0
            ? `// Constants: ${s.join(", ")}
${d}`
            : d
          : "",
        f = Function,
        m = `return (input) => {
${d}
}`;
      try {
        i = new f(...s, m)(...l);
      } catch (t) {
        throw new af(`this schema (generated code failed to evaluate: ${t.message})`);
      }
      return (r?.debug && (i.code = c), (i.definite = a.definite), i);
    }
    function ag(t, r) {
      for (let [i, n] of t.constants) if (n === r) return i;
      let i = `c${t.constantCounter++}`;
      return (t.constants.set(i, r), i);
    }
    function ah(t, r) {
      return ((t.definite = !1), ag(t, r));
    }
    function a$(t) {
      return `v${t.varCounter++}`;
    }
    function ay(t, r) {
      let i = t._zod.run({ value: r, issues: [] }, {});
      return i && "function" == typeof i.then ? al : 0 === i.issues.length ? i.value : al;
    }
    function ab(t, r, i, n, a = !0) {
      let o = t.content.length,
        u = r.constants.size,
        s = r.constantCounter,
        l = r.varCounter;
      try {
        return aN(t, r, i, n, a);
      } catch (g) {
        var d, c, f, m;
        let a, p, v;
        if (!(g instanceof af) || !g.islandable) throw g;
        if (((t.content.length = o), r.constants.size > u))
          for (let t of Array.from(r.constants.keys()).slice(u)) r.constants.delete(t);
        return (
          (r.constantCounter = s),
          (r.varCounter = l),
          (d = t),
          (c = r),
          (f = i),
          (m = n),
          (c.definite = !1),
          (a = ag(c, f)),
          (p = ag(c, ay)),
          (v = a$(c)),
          d.write(`const ${v} = ${p}(${a}, ${m});`),
          d.write(`if (${v} === INVALID) return INVALID;`),
          v
        );
      }
    }
    let a_ = new Set(["max_size", "min_size", "size_equals", "max_length", "min_length", "length_equals"]);
    function ax(t, r, i, n) {
      let a = ag(r, ep),
        o = a$(r);
      return (t.write(`const ${o} = typeof ${i} === "string" && ${n} ? ${a}(${i}) : ${i}.length;`), o);
    }
    function ak(t, r) {
      if ("number" != typeof t || !Number.isFinite(t)) throw new af(`${r} bound of type ${typeof t}`);
      return `${t}`;
    }
    function aI(t, r) {
      if ("bigint" == typeof r) return `${r}n`;
      if ("number" == typeof r) {
        if (Number.isNaN(r)) throw new af("comparison check with NaN bound");
        return `${r}`;
      }
      if (r instanceof Date) {
        if (Number.isNaN(r.getTime())) throw new af("comparison check with Invalid Date bound");
        return ag(t, r);
      }
      throw new af(`comparison check bound of type ${typeof r}`);
    }
    function aw(t, r, i) {
      let n = r.format;
      switch (n) {
        case "safeint":
          t.write(`if (!Number.isSafeInteger(${i})) return INVALID;`);
          break;
        case "int32":
          t.write(`if (!Number.isInteger(${i}) || ${i} < -2147483648 || ${i} > 2147483647) return INVALID;`);
          break;
        case "uint32":
          t.write(`if (!Number.isInteger(${i}) || ${i} < 0 || ${i} > 4294967295) return INVALID;`);
          break;
        case "float32":
          t.write(
            `if (!Number.isFinite(${i}) || ${i} < -3.4028234663852886e38 || ${i} > 3.4028234663852886e38) return INVALID;`,
          );
          break;
        case "float64":
          t.write(`if (!Number.isFinite(${i})) return INVALID;`);
          break;
        default:
          throw new af(`number format ${n}`);
      }
    }
    function aS() {
      throw new eV();
    }
    function aO(t) {
      this.issues.push(t);
    }
    let az = new Set([
      "cidrv4",
      "cuid",
      "cuid2",
      "date",
      "datetime",
      "duration",
      "e164",
      "email",
      "emoji",
      "ends_with",
      "guid",
      "includes",
      "ipv4",
      "ksuid",
      "lowercase",
      "mac",
      "nanoid",
      "regex",
      "starts_with",
      "time",
      "ulid",
      "uppercase",
      "uuid",
      "xid",
    ]);
    function aD(t, r, i, n, a = !0) {
      let o = i.format;
      if ("base64" === o) {
        let i = ag(r, iy);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("base64url" === o) {
        let i = ag(r, ik);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("jwt" === o) {
        let a = ag(r, iU),
          o = ag(r, i.alg ?? null);
        return (t.write(`if (!${a}(${n}, ${o})) return INVALID;`), n);
      }
      if ("ipv6" === o) {
        let i = ag(r, im);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("cidrv6" === o) {
        let i = ag(r, ih);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("credit_card" === o) {
        let i = ag(r, iO);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("iban" === o) {
        let i = ag(r, iD);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if ("url" === o || "httpurl" === o || i.normalize || void 0 !== i.hostname || void 0 !== i.protocol) {
        let o = ag(r, r1),
          u = ag(r, i),
          s = a$(r),
          l = a$(r);
        if (
          (t.write(`const ${s} = ${n}.trim();`),
          t.write(`const ${l} = ${o}(${s}, ${u});`),
          t.write(`if (typeof ${l} === "number") return INVALID;`),
          void 0 !== i.hostname)
        ) {
          let i = ag(r, r9);
          t.write(`if (!${i}(${l}, ${u}.hostname)) return INVALID;`);
        }
        if (void 0 !== i.protocol) {
          let i = ag(r, r7);
          t.write(`if (!${i}(${l}, ${u}.protocol)) return INVALID;`);
        }
        if (!a) return null;
        let d = a$(r),
          c = i.normalize ? `${l}.href` : `${ag(r, r2)}(${s})`;
        return (t.write(`const ${d} = ${c};`), d);
      }
      let u = i.fn;
      if (u) {
        if (aE(u)) throw new af(`async string format ${o}`);
        let i = ag(r, u);
        return (t.write(`if (!${i}(${n})) return INVALID;`), n);
      }
      if (az.has(o) && i.pattern) {
        let a = ag(r, i.pattern);
        return (t.write(`${a}.lastIndex = 0;`), t.write(`if (!${a}.test(${n})) return INVALID;`), n);
      }
      let s = i.format;
      switch (s) {
        case "regex":
          throw new af("regex format without a pattern");
        case "lowercase":
          t.write(`if (${n} !== ${n}.toLowerCase()) return INVALID;`);
          break;
        case "uppercase":
          t.write(`if (${n} !== ${n}.toUpperCase()) return INVALID;`);
          break;
        case "includes":
          t.write(`if (!${n}.includes(${A(i.includes)})) return INVALID;`);
          break;
        case "starts_with": {
          let r = i.prefix;
          t.write(`if (${n}.slice(0, ${r.length}) !== ${A(r)}) return INVALID;`);
          break;
        }
        case "ends_with": {
          let r = i.suffix;
          t.write(`if (${n}.slice(-${r.length}) !== ${A(r)}) return INVALID;`);
          break;
        }
        default:
          throw new af(`string format ${s}`);
      }
      return n;
    }
    function aN(t, r, i, n, a = !0) {
      var o,
        u,
        s,
        l,
        d,
        c,
        f,
        m,
        p,
        v,
        g,
        $,
        y,
        b,
        _,
        x,
        k,
        I,
        w,
        S,
        O,
        z,
        D,
        N,
        U,
        P,
        Z,
        j,
        E,
        L,
        R,
        V,
        M,
        F,
        B,
        J,
        W,
        K,
        G;
      let X,
        q = i._zod.def,
        H = q.type;
      if (q.coerce) throw new af(`coercion (z.coerce.${H}())`);
      let Y = a || !!q.checks?.length;
      switch (H) {
        case "string":
          X = (function (t, r, i, n, a = !0) {
            t.write(`if (typeof ${n} !== "string") return INVALID;`);
            let o = i._zod.def;
            return void 0 === o.format ? n : aD(t, r, o, n, a);
          })(t, r, i, n, Y);
          break;
        case "number":
          let Q;
          ((o = t),
            (u = i),
            (s = n),
            o.write(`if (typeof ${s} !== "number" || !Number.isFinite(${s})) return INVALID;`),
            "number_format" === (Q = u._zod.def).check && Q.format && aw(o, { format: Q.format }, s),
            (X = s));
          break;
        case "boolean":
          ((l = t), (d = n), l.write(`if (typeof ${d} !== "boolean") return INVALID;`), (X = d));
          break;
        case "bigint":
          X = (function (t, r, i) {
            t.write(`if (typeof ${i} !== "bigint") return INVALID;`);
            let n = r._zod.def;
            if (n.format)
              switch (n.format) {
                case "int64":
                  t.write(`if (${i} < -9223372036854775808n || ${i} > 9223372036854775807n) return INVALID;`);
                  break;
                case "uint64":
                  t.write(`if (${i} < 0n || ${i} > 18446744073709551615n) return INVALID;`);
              }
            return i;
          })(t, i, n);
          break;
        case "symbol":
          ((c = t), (f = n), c.write(`if (typeof ${f} !== "symbol") return INVALID;`), (X = f));
          break;
        case "undefined":
          ((m = t), (p = n), m.write(`if (${p} !== undefined) return INVALID;`), (X = p));
          break;
        case "null":
          ((v = t), (g = n), v.write(`if (${g} !== null) return INVALID;`), (X = g));
          break;
        case "any":
        case "unknown":
          X = n;
          break;
        case "never":
          (t.write("return INVALID;"), (X = n));
          break;
        case "void":
          (($ = t), (y = n), $.write(`if (${y} !== undefined) return INVALID;`), (X = y));
          break;
        case "nan":
          ((b = t), (_ = n), b.write(`if (typeof ${_} !== "number" || !Number.isNaN(${_})) return INVALID;`), (X = _));
          break;
        case "date":
          ((x = t),
            (k = n),
            x.write(`if (!(${k} instanceof Date) || Number.isNaN(${k}.getTime())) return INVALID;`),
            (X = k));
          break;
        case "object":
          X = (function (t, r, i, n, a = !0) {
            let o = i._zod.def;
            t.write(`if (typeof ${n} !== "object" || ${n} === null || Array.isArray(${n})) return INVALID;`);
            let u = o.shape,
              s = Object.keys(u),
              l = Object.getOwnPropertySymbols(u),
              d = l.length ? [...s, ...l] : s,
              c = (t) => ("symbol" == typeof t ? ag(r, t) : A(t));
            if (s.includes("__proto__")) throw new af('object shape key "__proto__"');
            let f = new Map();
            for (let i of d) {
              let o = u[i],
                s = c(i),
                l = a$(r);
              if ((t.write(`const ${l} = ${n}[${s}];`), void 0 !== o._zod.optin)) {
                let a = a$(r);
                (t.write(`let ${a} = (() => {`),
                  t.indented((t) => {
                    let i = ab(t, r, o, l);
                    t.write(`return ${i};`);
                  }),
                  t.write("})();"),
                  "optional" === o._zod.optout
                    ? (t.write(`if (${a} === INVALID) {`),
                      t.indented((t) => {
                        (t.write(`if (${s} in ${n}) return INVALID;`), t.write(`${a} = undefined;`));
                      }),
                      t.write("}"))
                    : t.write(`if (${a} === INVALID) return INVALID;`),
                  f.set(i, a));
              } else {
                var m;
                void 0 === (m = o)._zod.optin &&
                  (function t(r) {
                    if (r._zod.def.coerce) return !0;
                    let i = r._zod.def;
                    switch (i.type) {
                      case "any":
                      case "unknown":
                      case "undefined":
                      case "void":
                      case "default":
                      case "prefault":
                      case "transform":
                      case "custom":
                      case "lazy":
                      case "catch":
                      default:
                        return !0;
                      case "string":
                      case "number":
                      case "boolean":
                      case "bigint":
                      case "symbol":
                      case "null":
                      case "never":
                      case "nan":
                      case "date":
                      case "object":
                      case "array":
                      case "tuple":
                      case "record":
                      case "map":
                      case "set":
                      case "file":
                      case "template_literal":
                        return !1;
                      case "nonoptional":
                        return !!i.innerType && t(i.innerType);
                      case "literal":
                        return !!i.values?.includes(void 0);
                      case "enum":
                        return !!r._zod.values?.has(void 0);
                      case "optional":
                      case "nullable":
                      case "readonly":
                      case "success":
                        return !i.innerType || t(i.innerType);
                      case "union":
                        return !i.options || i.options.some(t);
                      case "intersection":
                        if (!i.left || !i.right) return !0;
                        return t(i.left) && t(i.right);
                      case "pipe":
                        return !i.in || t(i.in);
                    }
                  })(m) &&
                  t.write(`if (!(${s} in ${n})) return INVALID;`);
                let u = ab(t, r, o, l, a);
                null !== u && f.set(i, u);
              }
            }
            let p = o.catchall,
              v = "none";
            if (p) {
              let r = p._zod.def.type;
              if ("never" === r) {
                let r = s.map((t) => `k !== ${A(t)}`).join(" && ") || "true";
                (t.write(`for (const k in ${n}) {`),
                  t.indented((t) => {
                    t.write(`if (${r}) return INVALID;`);
                  }),
                  t.write("}"));
              } else v = ("unknown" !== r && "any" !== r) || p._zod.def.checks?.length ? "schema" : "passthrough";
            }
            let g = a$(r),
              h = d.some((t) => aA(u[t]) || aU(u[t]));
            if (!a) {
              if ("schema" === v) {
                let i = s.length > 0 ? ag(r, new Set(s)) : null;
                (t.write(`for (const k in ${n}) {`),
                  t.indented((t) => {
                    (t.write('if (k === "__proto__") continue;'), i && t.write(`if (${i}.has(k)) continue;`));
                    let a = a$(r);
                    (t.write(`const ${a} = ${n}[k];`), ab(t, r, p, a, !1));
                  }),
                  t.write("}"));
              }
              return null;
            }
            if (h)
              for (let r of (t.write(`const ${g} = {};`), d)) {
                let i = c(r),
                  a = f.get(r);
                aU(u[r])
                  ? t.write(`if (${i} in ${n}) ${g}[${i}] = ${a};`)
                  : aA(u[r])
                    ? t.write(`if (${a} !== undefined || ${i} in ${n}) ${g}[${i}] = ${a};`)
                    : t.write(`${g}[${i}] = ${a};`);
              }
            else {
              let r = d.map((t) => `${"symbol" == typeof t ? `[${c(t)}]` : A(t)}: ${f.get(t)}`).join(", ");
              t.write(`const ${g} = { ${r} };`);
            }
            if ("none" !== v) {
              let i = s.length > 0 ? ag(r, new Set(s)) : null;
              (t.write(`for (const k in ${n}) {`),
                t.indented((t) => {
                  if (
                    (t.write('if (k === "__proto__") continue;'),
                    i && t.write(`if (${i}.has(k)) continue;`),
                    "passthrough" === v)
                  )
                    t.write(`${g}[k] = ${n}[k];`);
                  else {
                    let i = a$(r);
                    t.write(`const ${i} = ${n}[k];`);
                    let a = ab(t, r, p, i);
                    t.write(`${g}[k] = ${a};`);
                  }
                }),
                t.write("}"));
            }
            return g;
          })(t, r, i, n, Y);
          break;
        case "optional":
          X = (function (t, r, i, n, a = !0) {
            var o;
            let u = i._zod.def;
            if (((o = i), o._zod.traits?.has("$ZodExactOptional") === !0)) return aN(t, r, u.innerType, n, a);
            if ("defaulted" === u.innerType._zod.optin) {
              let i = a$(r),
                a = a$(r);
              return (
                t.write(`let ${i};`),
                t.write(`if (${n} === undefined) {`),
                t.indented((t) => {
                  (t.write(`const ${a} = (() => {`),
                    t.indented((t) => {
                      let i = aN(t, r, u.innerType, n);
                      t.write(`return ${i};`);
                    }),
                    t.write("})();"),
                    t.write(`if (${a} !== INVALID) ${i} = ${a};`));
                }),
                t.write("} else {"),
                t.indented((t) => {
                  let a = aN(t, r, u.innerType, n);
                  t.write(`${i} = ${a};`);
                }),
                t.write("}"),
                i
              );
            }
            let s = a ? a$(r) : null;
            return (
              s && t.write(`let ${s};`),
              t.write(`if (${n} !== undefined) {`),
              t.indented((t) => {
                let i = aN(t, r, u.innerType, n, a);
                s && null !== i && t.write(`${s} = ${i};`);
              }),
              t.write("}"),
              s
            );
          })(t, r, i, n, Y);
          break;
        case "nullable":
          X = (function (t, r, i, n, a = !0) {
            let o = i._zod.def,
              u = a ? a$(r) : null;
            return (
              u && t.write(`let ${u} = null;`),
              t.write(`if (${n} !== null) {`),
              t.indented((t) => {
                let i = aN(t, r, o.innerType, n, a);
                u && null !== i && t.write(`${u} = ${i};`);
              }),
              t.write("}"),
              u
            );
          })(t, r, i, n, Y);
          break;
        case "array":
          X = (function (t, r, i, n, a = !0) {
            let o = i._zod.def;
            t.write(`if (!Array.isArray(${n})) return INVALID;`);
            let u = a ? a$(r) : null,
              s = a$(r),
              l = a$(r);
            return (
              u && t.write(`const ${u} = new Array(${n}.length);`),
              t.write(`for (let ${s} = 0; ${s} < ${n}.length; ${s}++) {`),
              t.indented((t) => {
                t.write(`const ${l} = ${n}[${s}];`);
                let i = ab(t, r, o.element, l, a);
                u && null !== i && t.write(`${u}[${s}] = ${i};`);
              }),
              t.write("}"),
              u
            );
          })(t, r, i, n, Y);
          break;
        case "literal":
          X = (function (t, r, i, n) {
            let a = i._zod.def.values;
            if (1 !== a.length) {
              let i = ag(r, new Set(a));
              return (t.write(`if (!${i}.has(${n})) return INVALID;`), n);
            }
            let o = a[0];
            if ("number" == typeof o && Number.isNaN(o)) {
              let i = ag(r, new Set(a));
              return (t.write(`if (!${i}.has(${n})) return INVALID;`), n);
            }
            if ("string" == typeof o) t.write(`if (${n} !== ${A(o)}) return INVALID;`);
            else if ("number" == typeof o || "boolean" == typeof o) t.write(`if (${n} !== ${o}) return INVALID;`);
            else if (null === o) t.write(`if (${n} !== null) return INVALID;`);
            else if (void 0 === o) t.write(`if (${n} !== undefined) return INVALID;`);
            else if ("bigint" == typeof o) t.write(`if (${n} !== ${o}n) return INVALID;`);
            else throw new af(`literal type ${typeof o}`);
            return n;
          })(t, r, i, n);
          break;
        case "enum":
          X = (function (t, r, i, n) {
            let a = i._zod.values;
            if (!a) throw new af("enum schema without enumerated values");
            let o = ag(r, a);
            return (t.write(`if (!${o}.has(${n})) return INVALID;`), n);
          })(t, r, i, n);
          break;
        case "readonly": {
          let a = aP(t, r, i, n),
            o = a$(r);
          (t.write(`const ${o} = Object.freeze(${a});`), (X = o));
          break;
        }
        case "success":
          (aP(t, r, i, n), (X = "true"));
          break;
        case "default":
        case "prefault":
          X = (function (t, r, i, n) {
            let a = i._zod.def,
              o = Object.getOwnPropertyDescriptor(i._zod.def, "defaultValue") ? () => i._zod.def.defaultValue : void 0;
            if ("prefault" === i._zod.def.type) {
              if (!o) return aN(t, r, a.innerType, n);
              let i = ag(r, o),
                u = a$(r);
              return (
                t.write(`let ${u} = ${n};`),
                t.write(`if (${n} === undefined) ${u} = ${i}();`),
                aN(t, r, a.innerType, u)
              );
            }
            let u = a$(r);
            if (o) {
              let i = ag(r, o),
                s = ag(r, T);
              (t.write(`let ${u};`),
                t.write(`if (${n} === undefined) {`),
                t.indented((t) => {
                  t.write(`${u} = ${s}(${i}());`);
                }),
                t.write("} else {"),
                t.indented((t) => {
                  let o = aN(t, r, a.innerType, n);
                  t.write(`${u} = ${o} === undefined ? ${s}(${i}()) : ${o};`);
                }),
                t.write("}"));
            } else
              (t.write(`let ${u};`),
                t.write(`if (${n} !== undefined) {`),
                t.indented((t) => {
                  let i = aN(t, r, a.innerType, n);
                  t.write(`${u} = ${i};`);
                }),
                t.write("}"));
            return u;
          })(t, r, i, n);
          break;
        case "nonoptional":
          let ee, et;
          ((I = t),
            (w = r),
            (S = i),
            (O = n),
            (ee = aN(I, w, S._zod.def.innerType, O)),
            (et = a$(w)),
            I.write(`const ${et} = ${ee};`),
            I.write(`if (${et} === undefined) return INVALID;`),
            (X = et));
          break;
        case "tuple":
          X = (function (t, r, i, n) {
            let a = i._zod.def,
              o = a.items,
              u = a.rest;
            t.write(`if (!Array.isArray(${n})) return INVALID;`);
            let s = aZ(o, "optin"),
              l = aZ(o, "optout");
            u
              ? t.write(`if (${n}.length < ${s}) return INVALID;`)
              : t.write(`if (${n}.length < ${s} || ${n}.length > ${o.length}) return INVALID;`);
            let d = a$(r);
            t.write(`const ${d} = [];`);
            for (let i = 0; i < o.length; i++) {
              let a = o[i];
              if (i >= l)
                (t.write(`if (${d}.length === ${i}) {`),
                  t.indented((t) => {
                    (t.write(`if (${i} < ${n}.length) {`),
                      t.indented((t) => {
                        let o = a$(r);
                        t.write(`const ${o} = ${n}[${i}];`);
                        let u = ab(t, r, a, o);
                        t.write(`${d}[${i}] = ${u};`);
                      }),
                      t.write("} else {"),
                      t.indented((t) => {
                        if (aU(a)) return void t.write(`${d}.length = ${i};`);
                        let n = a$(r),
                          o = a$(r);
                        (t.write(`const ${n} = undefined;`),
                          t.write(`const ${o} = (() => {`),
                          t.indented((t) => {
                            let i = ab(t, r, a, n);
                            t.write(`return ${i};`);
                          }),
                          t.write("})();"),
                          t.write(`if (${o} === INVALID || ${o} === undefined) ${d}.length = ${i};`),
                          t.write(`else ${d}[${i}] = ${o};`));
                      }),
                      t.write("}"));
                  }),
                  t.write("}"));
              else {
                let o = a$(r);
                t.write(`const ${o} = ${n}[${i}];`);
                let u = ab(t, r, a, o);
                t.write(`${d}[${i}] = ${u};`);
              }
            }
            if (u) {
              let i = a$(r),
                a = a$(r);
              (t.write(`for (let ${i} = ${o.length}; ${i} < ${n}.length; ${i}++) {`),
                t.indented((t) => {
                  t.write(`const ${a} = ${n}[${i}];`);
                  let o = ab(t, r, u, a);
                  t.write(`${d}[${i}] = ${o};`);
                }),
                t.write("}"));
            }
            return d;
          })(t, r, i, n);
          break;
        case "union":
          X = (function (t, r, i, n) {
            let a = i._zod.def,
              o = a.options;
            if (a.discriminator)
              return (function (t, r, i, n) {
                if (i.unionFallback) throw new af("discriminated union with unionFallback");
                if (0 === i.options.length) return (t.write("return INVALID;"), n);
                let a = a$(r),
                  o = a$(r);
                (t.write(`const ${a} = ${n}?.[${A(i.discriminator)}];`), t.write(`let ${o};`));
                let u = !0,
                  s = new Set();
                for (let l of i.options) {
                  let d = l._zod.propValues?.[i.discriminator];
                  if (!d || 0 === d.size)
                    throw new af("discriminated union option without static discriminator values");
                  for (let t of d) {
                    if (s.has(t)) throw new af(`duplicate discriminator value ${String(t)}`);
                    s.add(t);
                  }
                  let c = Array.from(d, (t) =>
                      (function (t, r, i) {
                        if ("string" == typeof i) return `${r} === ${A(i)}`;
                        if ("number" == typeof i) return Number.isNaN(i) ? `Number.isNaN(${r})` : `${r} === ${i}`;
                        if ("boolean" == typeof i) return `${r} === ${i}`;
                        if (null === i) return `${r} === null`;
                        if (void 0 === i) return `${r} === undefined`;
                        if ("bigint" == typeof i) return `${r} === ${i}n`;
                        if ("symbol" == typeof i) {
                          let n = ag(t, i);
                          return `${r} === ${n}`;
                        }
                        throw new af(`literal discriminator value ${String(i)}`);
                      })(r, a, t),
                    ),
                    f = u ? "if" : "else if";
                  (t.write(`${f} (${c.join(" || ")}) {`),
                    t.indented((t) => {
                      let i = aN(t, r, l, n);
                      t.write(`${o} = ${i};`);
                    }),
                    t.write("}"),
                    (u = !1));
                }
                return (t.write("else { return INVALID; }"), o);
              })(t, r, a, n);
            if (!1 === a.inclusive) throw new af("exclusive unions (z.xor)");
            if (0 === o.length) return (t.write("return INVALID;"), n);
            if (1 === o.length) return aN(t, r, o[0], n);
            if (o.every((t) => "literal" === t._zod.def.type && !t._zod.def.checks?.length)) {
              let i = ag(r, new Set(o.flatMap((t) => t._zod.def.values)));
              return (t.write(`if (!${i}.has(${n})) return INVALID;`), n);
            }
            let u = a$(r);
            t.write(`let ${u};`);
            for (let i = 0; i < o.length; i++) {
              let a = o[i];
              (0 === i ? t.write(`${u} = (() => {`) : t.write(`if (${u} === INVALID) ${u} = (() => {`),
                t.indented((t) => {
                  let i = aN(t, r, a, n);
                  t.write(`return ${i};`);
                }),
                t.write("})();"));
            }
            return (t.write(`if (${u} === INVALID) return INVALID;`), u);
          })(t, r, i, n);
          break;
        case "intersection":
          let er, ei, en, ea, eo;
          ((z = t),
            (D = r),
            (N = i),
            (U = n),
            (er = N._zod.def),
            (D.definite = !1),
            (ei = ab(z, D, er.left, U)),
            (en = ab(z, D, er.right, U)),
            (ea = ag(D, i8)),
            (eo = a$(D)),
            z.write(`const ${eo} = ${ea}(${ei}, ${en});`),
            z.write(`if (!${eo}.valid) return INVALID;`),
            (X = `${eo}.data`));
          break;
        case "record":
          X = (function (t, r, i, n) {
            let a = i._zod.def,
              o = ag(r, C);
            t.write(`if (!${o}(${n})) return INVALID;`);
            let u = a$(r),
              s = a$(r),
              l = a$(r);
            t.write(`const ${u} = {};`);
            let d = a.partial ? void 0 : a.keyType._zod.values;
            if (d) {
              let i = [];
              for (let o of d) {
                var c, f;
                if ("string" != typeof o && "number" != typeof o && "symbol" != typeof o)
                  throw new af(`record key value ${String(o)}`);
                let s = "number" == typeof o ? o.toString() : o;
                if ("__proto__" === s) throw new af('record key "__proto__"');
                i.push(s);
                let l = ag(r, o),
                  d = aN(t, r, a.keyType, l),
                  m = a$(r);
                t.write(`const ${m} = ${n}[${((c = r), "string" == typeof (f = s) ? A(f) : ag(c, f))}];`);
                let p = ab(t, r, a.valueType, m);
                t.write(`${u}[${d}] = ${p};`);
              }
              let o = ag(r, new Set(i));
              return (
                t.write(`for (const ${s} in ${n}) {`),
                t.indented((t) => {
                  (t.write(`if (${o}.has(${s})) continue;`),
                    "loose" === a.mode
                      ? t.write(`if (${s} !== "__proto__") ${u}[${s}] = ${n}[${s}];`)
                      : t.write("return INVALID;"));
                }),
                t.write("}"),
                u
              );
            }
            let m = a.keyType._zod.def;
            if (!("string" === m.type && void 0 === m.format && !m.coerce && (m.checks?.length ?? 0) === 0)) {
              let i = "loose" === a.mode,
                o = av(a.keyType);
              !1 === o.definite && (r.definite = !1);
              let l = ag(r, o),
                d = ag(r, t3),
                c = a$(r);
              return (
                aj(t, r, n, s, (t) => {
                  (t.write(`let ${c} = ${l}(${s});`),
                    t.write(
                      `if (${c} === INVALID && typeof ${s} === "string" && ${d}.test(${s})) ${c} = ${l}(Number(${s}));`,
                    ),
                    i
                      ? t.write(`if (${c} === INVALID) { ${u}[${s}] = ${n}[${s}]; continue; }`)
                      : t.write(`if (${c} === INVALID) return INVALID;`),
                    t.write(`if (${c} === "__proto__") continue;`));
                  let o = a$(r);
                  t.write(`const ${o} = ${n}[${s}];`);
                  let f = ab(t, r, a.valueType, o);
                  t.write(`${u}[${c}] = ${f};`);
                }),
                u
              );
            }
            return (
              aj(
                t,
                r,
                n,
                s,
                (t) => {
                  t.write(`const ${l} = ${n}[${s}];`);
                  let i = ab(t, r, a.valueType, l);
                  t.write(`${u}[${s}] = ${i};`);
                },
                "return INVALID;",
              ),
              u
            );
          })(t, r, i, n);
          break;
        case "map":
          let eu, es, el, ed;
          ((P = t),
            (Z = r),
            (j = i),
            (E = n),
            (eu = j._zod.def),
            P.write(`if (!(${E} instanceof Map)) return INVALID;`),
            (es = a$(Z)),
            (el = a$(Z)),
            (ed = a$(Z)),
            P.write(`const ${es} = new Map();`),
            P.write(`for (const [${el}, ${ed}] of ${E}) {`),
            P.indented((t) => {
              let r = aN(t, Z, eu.keyType, el),
                i = aN(t, Z, eu.valueType, ed);
              t.write(`${es}.set(${r}, ${i});`);
            }),
            P.write("}"),
            (X = es));
          break;
        case "set":
          let ec, ef, em;
          ((L = t),
            (R = r),
            (V = i),
            (M = n),
            (ec = V._zod.def),
            L.write(`if (!(${M} instanceof Set)) return INVALID;`),
            (ef = a$(R)),
            (em = a$(R)),
            L.write(`const ${ef} = new Set();`),
            L.write(`for (const ${em} of ${M}) {`),
            L.indented((t) => {
              let r = aN(t, R, ec.valueType, em);
              t.write(`${ef}.add(${r});`);
            }),
            L.write("}"),
            (X = ef));
          break;
        case "file":
          ((F = t), (B = n), F.write(`if (!(${B} instanceof File)) return INVALID;`), (X = B));
          break;
        case "template_literal":
          X = (function (t, r, i, n) {
            t.write(`if (typeof ${n} !== "string") return INVALID;`);
            let a = i._zod.pattern;
            if (a) {
              let i = ag(r, a);
              (t.write(`${i}.lastIndex = 0;`), t.write(`if (!${i}.test(${n})) return INVALID;`));
            }
            return n;
          })(t, r, i, n);
          break;
        case "lazy":
          let ep, ev, eg;
          ((J = t),
            (W = r),
            (K = i),
            (G = n),
            (ep = ah(W, K._zod.def.getter)),
            (ev = ag(W, { parser: null })),
            J.write(`if (!${ev}.parser) {`),
            J.indented((t) => {
              (t.write(`const inner = ${ep}();`),
                t.write(`${ev}.parser = function(input) {`),
                t.indented((t) => {
                  (t.write("const result = inner._zod.run({ value: input, issues: [] }, {});"),
                    t.write("return result.issues.length === 0 ? result.value : INVALID;"));
                }),
                t.write("};"));
            }),
            J.write("}"),
            (eg = a$(W)),
            J.write(`const ${eg} = ${ev}.parser(${G});`),
            J.write(`if (${eg} === INVALID) return INVALID;`),
            (X = eg));
          break;
        case "pipe":
          X = (function (t, r, i, n) {
            let a = i._zod.def,
              o = aN(t, r, a.in, n);
            if (!a.transform) return aN(t, r, a.out, o);
            {
              if (aE(a.transform)) throw new ac("z.compile: async transforms in pipes are not supported");
              let i = a.transform,
                n = ah(r, (t) => {
                  let r = { value: t, issues: [], addIssue: aO },
                    n = i(t, r);
                  return n instanceof Promise ? al : 0 === r.issues.length ? n : al;
                }),
                u = a$(r);
              return (
                t.write(`const ${u} = ${n}(${o});`),
                t.write(`if (${u} === INVALID) return INVALID;`),
                aN(t, r, a.out, u)
              );
            }
          })(t, r, i, n);
          break;
        case "custom":
          X = (function (t, r, i, n) {
            let a = i._zod.def;
            if (a.fn) {
              if (aE(a.fn)) throw new ac("z.compile: async custom predicates are not supported");
              let i = ah(r, a.fn),
                o = ag(r, aS),
                u = a$(r);
              (t.write(`const ${u} = ${i}(${n});`),
                t.write(`if (${u} instanceof Promise) ${o}();`),
                t.write(`if (!${u}) return INVALID;`));
            } else throw new af("custom schema without a predicate function");
            return n;
          })(t, r, i, n);
          break;
        case "transform":
          X = (function (t, r, i, n) {
            let a = i._zod.def;
            if (a.transform) {
              if (aE(a.transform)) throw new ac("z.compile: async transforms are not supported");
              let i = a.transform,
                o = ah(r, (t) => {
                  let r = { value: t, issues: [], addIssue: aO },
                    n = i(t, r);
                  return n instanceof Promise ? al : 0 === r.issues.length ? n : al;
                }),
                u = a$(r);
              return (t.write(`const ${u} = ${o}(${n});`), t.write(`if (${u} === INVALID) return INVALID;`), u);
            }
            return n;
          })(t, r, i, n);
          break;
        case "catch":
          X = (function (t, r, i, n) {
            let a = i._zod.def;
            if (!a.catchValue[eZ]) throw new af("catch with a callback (only a constant catch value compiles)", !1);
            let o = a$(r);
            (t.write(`let ${o} = (() => {`),
              t.indented((t) => {
                let i = ab(t, r, a.innerType, n);
                t.write(`return ${i};`);
              }),
              t.write("})();"));
            let u = ag(r, a.innerType),
              s = ah(r, a.catchValue),
              l = ag(r, aC);
            return (
              t.write(`if (${o} === INVALID) {`),
              t.indented((t) => {
                (t.write(`${o} = ${l}(${u}, ${s}, ${n});`), t.write(`if (${o} === INVALID) return INVALID;`));
              }),
              t.write("}"),
              o
            );
          })(t, r, i, n);
          break;
        default:
          throw new af(`schema type ${H}`);
      }
      return null === X
        ? null
        : (function (t, r, i, n) {
            let a = i._zod.def.checks;
            if (!a || 0 === a.length) return n;
            let o = n;
            for (let i of a) {
              let n = i._zod.def;
              if (n.when && !a_.has(n.check)) throw new af('check with a custom "when" condition');
              switch (n.check) {
                case "greater_than":
                  !(function (t, r, i, n) {
                    let a = i.inclusive ? "<" : "<=";
                    t.write(`if (${n} ${a} ${aI(r, i.value)}) return INVALID;`);
                  })(t, r, n, o);
                  break;
                case "less_than":
                  !(function (t, r, i, n) {
                    let a = i.inclusive ? ">" : ">=";
                    t.write(`if (${n} ${a} ${aI(r, i.value)}) return INVALID;`);
                  })(t, r, n, o);
                  break;
                case "multiple_of":
                  !(function (t, r, i, n) {
                    if ("bigint" == typeof i.value) {
                      if (i.value === BigInt(0)) throw new af("multiple_of check with a zero divisor");
                      t.write(`if (${n} % ${i.value}n !== 0n) return INVALID;`);
                    } else {
                      let a = ag(r, h);
                      t.write(`if (${a}(${n}, ${ak(i.value, "multiple_of")}) !== 0) return INVALID;`);
                    }
                  })(t, r, n, o);
                  break;
                case "number_format":
                  aw(t, n, o);
                  break;
                case "min_length": {
                  let i = ak(n.minimum, "min_length"),
                    a = ax(t, r, o, `${o}.length >= ${i} && ${o}.length < ${2 * n.minimum}`);
                  t.write(`if (${a} < ${i}) return INVALID;`);
                  break;
                }
                case "max_length": {
                  let i = ak(n.maximum, "max_length"),
                    a = ax(t, r, o, `${o}.length > ${i}`);
                  t.write(`if (${a} > ${i}) return INVALID;`);
                  break;
                }
                case "length_equals": {
                  let i = ak(n.length, "length_equals"),
                    a = ax(t, r, o, `${o}.length >= ${i} && ${o}.length <= ${2 * n.length}`);
                  t.write(`if (${a} !== ${i}) return INVALID;`);
                  break;
                }
                case "min_size":
                  t.write(`if (${o}.size < ${ak(n.minimum, "min_size")}) return INVALID;`);
                  break;
                case "max_size":
                  t.write(`if (${o}.size > ${ak(n.maximum, "max_size")}) return INVALID;`);
                  break;
                case "size_equals":
                  t.write(`if (${o}.size !== ${ak(n.size, "size_equals")}) return INVALID;`);
                  break;
                case "string_format":
                  o = aD(t, r, n, o);
                  break;
                case "custom":
                  o = (function (t, r, i, n) {
                    let a = i._zod.def;
                    if (a.fn) {
                      if (aE(a.fn)) throw new ac("z.compile: async .refine() predicates are not supported");
                      let i = ah(r, a.fn),
                        o = ag(r, aS),
                        u = a$(r);
                      return (
                        t.write(`const ${u} = ${i}(${n});`),
                        t.write(`if (${u} instanceof Promise) ${o}();`),
                        t.write(`if (!${u}) return INVALID;`),
                        n
                      );
                    }
                    if (i._zod.check) {
                      if (aE(i._zod.check))
                        throw new ac("z.compile: async .superRefine() / check functions are not supported");
                      let a = i._zod.check,
                        o = ah(r, (t) => {
                          let r = { value: t, issues: [], addIssue: aO };
                          return (a(r) instanceof Promise && aS(), 0 === r.issues.length ? r.value : al);
                        }),
                        u = a$(r);
                      return (t.write(`const ${u} = ${o}(${n});`), t.write(`if (${u} === INVALID) return INVALID;`), u);
                    }
                    throw new af("custom check without a predicate or check function");
                  })(t, r, i, o);
                  break;
                case "bigint_format":
                  !(function (t, r, i) {
                    let n = r.format;
                    if (n)
                      switch (n) {
                        case "int64":
                          t.write(`if (${i} < -9223372036854775808n || ${i} > 9223372036854775807n) return INVALID;`);
                          break;
                        case "uint64":
                          t.write(`if (${i} < 0n || ${i} > 18446744073709551615n) return INVALID;`);
                          break;
                        default:
                          throw new af(`bigint format ${n}`);
                      }
                  })(t, n, o);
                  break;
                case "mime_type":
                  !(function (t, r, i, n) {
                    let a = i.mime;
                    if (a && a.length > 0) {
                      let i = ag(r, new Set(a));
                      t.write(`if (!${i}.has(${n}.type)) return INVALID;`);
                    }
                  })(t, r, n, o);
                  break;
                case "property":
                  !(function (t, r, i, n) {
                    let a = `${n}[${JSON.stringify(i.property)}]`;
                    aN(t, r, i.schema, a);
                  })(t, r, n, o);
                  break;
                case "properties":
                  !(function (t, r, i, n) {
                    if (i.when) throw new af('check with a custom "when" condition');
                    t.write(`if (${n} == null) return INVALID;`);
                    let a = i.shape;
                    for (let i of Reflect.ownKeys(a)) {
                      let o = "symbol" == typeof i ? ag(r, i) : A(i),
                        u = a$(r);
                      (t.write(`const ${u} = ${n}[${o}];`), ab(t, r, a[i], u, !1));
                    }
                  })(t, r, n, o);
                  break;
                case "overwrite": {
                  let n = a$(r);
                  ((function (t, r, i, n, a) {
                    let o = i._zod.def.tx;
                    if (!o) throw new af("overwrite check without a transform function");
                    if (aE(o)) throw new ac("z.compile: async overwrite transforms are not supported");
                    let u = ag(r, o);
                    t.write(`const ${a} = ${u}(${n});`);
                  })(t, r, i, o, n),
                    (o = n));
                  break;
                }
                default:
                  throw new af(`check type ${n.check}`);
              }
            }
            return o;
          })(t, r, i, X);
    }
    function aU(t) {
      return "optional" === t._zod.optin && "optional" === t._zod.optout;
    }
    function aA(t) {
      return (
        ("defaulted" !== t._zod.optin || "optional" === t._zod.optout) &&
        (function t(r) {
          let i = r._zod.def;
          switch (i.type) {
            case "string":
            case "number":
            case "boolean":
            case "bigint":
            case "symbol":
            case "null":
            case "nan":
            case "date":
            case "object":
            case "array":
            case "tuple":
            case "record":
            case "map":
            case "set":
            case "file":
            case "template_literal":
            case "never":
            case "success":
              return !1;
            case "literal":
              return !!i.values?.includes(void 0);
            case "enum":
              return !!r._zod.values?.has(void 0);
            case "optional":
            default:
              return !0;
            case "nullable":
            case "readonly":
            case "nonoptional":
              return !i.innerType || t(i.innerType);
            case "union":
              return !i.options || i.options.some(t);
            case "intersection":
              return !i.left || !i.right || t(i.left) || t(i.right);
            case "pipe":
              return !i.out || t(i.out);
          }
        })(t)
      );
    }
    function aP(t, r, i, n) {
      return aN(t, r, i._zod.def.innerType, n);
    }
    function aZ(t, r) {
      for (let i = t.length - 1; i >= 0; i--)
        if (!("optin" === r ? void 0 !== t[i]._zod.optin : "optional" === t[i]._zod.optout)) return i + 1;
      return 0;
    }
    function aj(t, r, i, n, a, o) {
      let u = ag(r, Object.prototype.propertyIsEnumerable),
        s = a$(r),
        l = a$(r),
        d = a$(r);
      (t.write(`const ${s} = Object.getOwnPropertySymbols(${i});`),
        t.write(`const ${l} = Object.getOwnPropertyNames(${i});`),
        t.write(`for (let ${d} = 0; ${d} < ${l}.length; ${d}++) {`),
        t.indented((t) => {
          (t.write(`const ${n} = ${l}[${d}];`),
            t.write(`if (${n} === "__proto__" || !${u}.call(${i}, ${n})) continue;`),
            a(t));
        }),
        t.write("}"),
        t.write(`for (let ${d} = 0; ${d} < ${s}.length; ${d}++) {`),
        t.indented((t) => {
          (t.write(`const ${n} = ${s}[${d}];`),
            t.write(`if (!${u}.call(${i}, ${n})) continue;`),
            o ? t.write(o) : a(t));
        }),
        t.write("}"));
    }
    function aE(t) {
      return (
        "function" == typeof t && ("AsyncFunction" === t.constructor.name || "AsyncFunction" === t[Symbol.toStringTag])
      );
    }
    function aC(t, r, i) {
      let n = t._zod.run({ value: i, issues: [] }, {});
      return n && "function" == typeof n.then ? al : 0 === n.issues.length ? n.value : r();
    }
    function aT(t) {
      return (t.checks && (t.checks = [...t.checks]), t);
    }
    function aL(t, r) {
      return new t(aT({ type: "string", ...J(r) }));
    }
    function aR(t, r) {
      return new t(aT({ type: "string", coerce: !0, ...J(r) }));
    }
    function aV(t, r) {
      return new t({ type: "string", format: "email", check: "string_format", abort: !1, ...J(r) });
    }
    function aM(t, r) {
      return new t({ type: "string", format: "guid", check: "string_format", abort: !1, ...J(r) });
    }
    function aF(t, r) {
      return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, ...J(r) });
    }
    function aB(t, r) {
      return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...J(r) });
    }
    function aJ(t, r) {
      return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...J(r) });
    }
    function aW(t, r) {
      return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...J(r) });
    }
    function aK(t, r) {
      return new t({ type: "string", format: "url", check: "string_format", abort: !1, ...J(r) });
    }
    function aG(t, r) {
      return new t({ type: "string", format: "emoji", check: "string_format", abort: !1, ...J(r) });
    }
    function aX(t, r) {
      return new t({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...J(r) });
    }
    function aq(t, r) {
      return new t({ type: "string", format: "cuid", check: "string_format", abort: !1, ...J(r) });
    }
    function aH(t, r) {
      return new t({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...J(r) });
    }
    function aY(t, r) {
      return new t({ type: "string", format: "ulid", check: "string_format", abort: !1, ...J(r) });
    }
    function aQ(t, r) {
      return new t({ type: "string", format: "xid", check: "string_format", abort: !1, ...J(r) });
    }
    function a0(t, r) {
      return new t({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...J(r) });
    }
    function a1(t, r) {
      return new t({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...J(r) });
    }
    function a4(t, r) {
      return new t({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...J(r) });
    }
    function a6(t, r) {
      return new t({ type: "string", format: "mac", check: "string_format", abort: !1, ...J(r) });
    }
    function a2(t, r) {
      return new t({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...J(r) });
    }
    function a9(t, r) {
      return new t({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...J(r) });
    }
    function a7(t, r) {
      return new t({ type: "string", format: "base64", check: "string_format", abort: !1, ...J(r) });
    }
    function a3(t, r) {
      return new t({ type: "string", format: "base64url", check: "string_format", abort: !1, ...J(r) });
    }
    function a5(t, r) {
      return new t({ type: "string", format: "e164", check: "string_format", abort: !1, ...J(r) });
    }
    function a8(t, r) {
      return new t({ type: "string", format: "credit_card", check: "string_format", abort: !1, ...J(r) });
    }
    function oe(t, r) {
      return new t({ type: "string", format: "iban", check: "string_format", abort: !1, ...J(r) });
    }
    function ot(t, r) {
      return new t({ type: "string", format: "jwt", check: "string_format", abort: !1, ...J(r) });
    }
    (t.s(
      [
        "INVALID",
        0,
        al,
        "ZodCompileAsyncError",
        0,
        ac,
        "ZodCompileUnsupportedError",
        0,
        af,
        "compile",
        0,
        am,
        "compileFn",
        0,
        av,
        "withParser",
        0,
        ap,
      ],
      75661,
    ),
      t.i(75661));
    let or = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
    function oi(t, r) {
      return new t({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...J(r),
      });
    }
    function on(t, r) {
      return new t({ type: "string", format: "date", check: "string_format", ...J(r) });
    }
    function oa(t, r) {
      return new t({ type: "string", format: "time", check: "string_format", precision: null, ...J(r) });
    }
    function oo(t, r) {
      return new t({ type: "string", format: "duration", check: "string_format", ...J(r) });
    }
    function ou(t, r) {
      return new t(aT({ type: "number", checks: [], ...J(r) }));
    }
    function os(t, r) {
      return new t(aT({ type: "number", coerce: !0, checks: [], ...J(r) }));
    }
    function ol(t, r) {
      return new t({ type: "number", check: "number_format", abort: !1, format: "safeint", ...J(r) });
    }
    function od(t, r) {
      return new t({ type: "number", check: "number_format", abort: !1, format: "float32", ...J(r) });
    }
    function oc(t, r) {
      return new t({ type: "number", check: "number_format", abort: !1, format: "float64", ...J(r) });
    }
    function of(t, r) {
      return new t({ type: "number", check: "number_format", abort: !1, format: "int32", ...J(r) });
    }
    function om(t, r) {
      return new t({ type: "number", check: "number_format", abort: !1, format: "uint32", ...J(r) });
    }
    function op(t, r) {
      return new t({ type: "boolean", ...J(r) });
    }
    function ov(t, r) {
      return new t({ type: "boolean", coerce: !0, ...J(r) });
    }
    function og(t, r) {
      return new t({ type: "bigint", ...J(r) });
    }
    function oh(t, r) {
      return new t({ type: "bigint", coerce: !0, ...J(r) });
    }
    function o$(t, r) {
      return new t({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...J(r) });
    }
    function oy(t, r) {
      return new t({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...J(r) });
    }
    function ob(t, r) {
      return new t({ type: "symbol", ...J(r) });
    }
    function o_(t, r) {
      return new t({ type: "undefined", ...J(r) });
    }
    function ox(t, r) {
      return new t({ type: "null", ...J(r) });
    }
    function ok(t) {
      return new t({ type: "any" });
    }
    function oI(t) {
      return new t({ type: "unknown" });
    }
    function ow(t, r) {
      return new t({ type: "never", ...J(r) });
    }
    function oS(t, r) {
      return new t({ type: "void", ...J(r) });
    }
    function oO(t, r) {
      return new t({ type: "date", ...J(r) });
    }
    function oz(t, r) {
      return new t({ type: "date", coerce: !0, ...J(r) });
    }
    function oD(t, r) {
      return new t({ type: "nan", ...J(r) });
    }
    function oN(t, r) {
      return new rb({ check: "less_than", ...J(r), value: t, inclusive: !1 });
    }
    function oU(t, r) {
      return new rb({ check: "less_than", ...J(r), value: t, inclusive: !0 });
    }
    function oA(t, r) {
      return new r_({ check: "greater_than", ...J(r), value: t, inclusive: !1 });
    }
    function oP(t, r) {
      return new r_({ check: "greater_than", ...J(r), value: t, inclusive: !0 });
    }
    function oZ(t) {
      return oA(0, t);
    }
    function oj(t) {
      return oN(0, t);
    }
    function oE(t) {
      return oU(0, t);
    }
    function oC(t) {
      return oP(0, t);
    }
    function oT(t, r) {
      return new rx({ check: "multiple_of", ...J(r), value: t });
    }
    function oL(t, r) {
      return new rw({ check: "max_size", ...J(r), maximum: t });
    }
    function oR(t, r) {
      return new rS({ check: "min_size", ...J(r), minimum: t });
    }
    function oV(t, r) {
      return new rO({ check: "size_equals", ...J(r), size: t });
    }
    function oM(t, r) {
      return new rz({ check: "max_length", ...J(r), maximum: t });
    }
    function oF(t, r) {
      return new rD({ check: "min_length", ...J(r), minimum: t });
    }
    function oB(t, r) {
      return new rN({ check: "length_equals", ...J(r), length: t });
    }
    function oJ(t, r) {
      return new rA({ check: "string_format", format: "regex", ...J(r), pattern: t });
    }
    function oW(t) {
      return new rP({ check: "string_format", format: "lowercase", ...J(t) });
    }
    function oK(t) {
      return new rZ({ check: "string_format", format: "uppercase", ...J(t) });
    }
    function oG(t, r) {
      return new rj({ check: "string_format", format: "includes", ...J(r), includes: t });
    }
    function oX(t, r) {
      return new rE({ check: "string_format", format: "starts_with", ...J(r), prefix: t });
    }
    function oq(t, r) {
      return new rC({ check: "string_format", format: "ends_with", ...J(r), suffix: t });
    }
    function oH(t, r, i) {
      return new rL({ check: "property", property: t, schema: r, ...J(i) });
    }
    function oY(t, r) {
      return new rR({ check: "properties", shape: t, ...J(r) });
    }
    function oQ(t, r) {
      return new rV({ check: "mime_type", mime: t, ...J(r) });
    }
    function o0(t) {
      return new rM({ check: "overwrite", tx: t });
    }
    function o1(t) {
      return o0((r) => r.normalize(t));
    }
    function o4() {
      return o0((t) => t.trim());
    }
    function o6() {
      return o0((t) => t.toLowerCase());
    }
    function o2() {
      return o0((t) => t.toUpperCase());
    }
    function o9() {
      return o0((t) => P(t));
    }
    function o7(t, r, i) {
      return new t({ type: "array", element: r, ...J(i) });
    }
    function o3(t, r, i) {
      return new t({ type: "union", options: r, ...J(i) });
    }
    function o5(t, r, i) {
      return new t({ type: "union", options: r, inclusive: !1, ...J(i) });
    }
    function o8(t, r, i, n) {
      return new t({ type: "union", options: i, discriminator: r, ...J(n) });
    }
    function ue(t, r, i) {
      return new t({ type: "intersection", left: r, right: i });
    }
    function ut(t, r, i, n) {
      let a = i instanceof rJ,
        o = a ? n : i;
      return new t({ type: "tuple", items: r, rest: a ? i : null, ...J(o) });
    }
    function ur(t, r, i, n) {
      return new t({ type: "record", keyType: r, valueType: i, ...J(n) });
    }
    function ui(t, r, i, n) {
      return new t({ type: "map", keyType: r, valueType: i, ...J(n) });
    }
    function un(t, r, i) {
      return new t({ type: "set", valueType: r, ...J(i) });
    }
    function ua(t, r, i) {
      return new t({ type: "enum", entries: Array.isArray(r) ? Object.fromEntries(r.map((t) => [t, t])) : r, ...J(i) });
    }
    function uo(t, r, i) {
      return new t({ type: "enum", entries: r, ...J(i) });
    }
    function uu(t, r, i) {
      return new t({ type: "literal", values: Array.isArray(r) ? r : [r], ...J(i) });
    }
    function us(t, r) {
      return new t({ type: "file", ...J(r) });
    }
    function ul(t, r) {
      return new t({ type: "transform", transform: r });
    }
    function ud(t, r) {
      return new t({ type: "optional", innerType: r });
    }
    function uc(t, r) {
      return new t({ type: "nullable", innerType: r });
    }
    function uf(t, r, i) {
      return new t({
        type: "default",
        innerType: r,
        get defaultValue() {
          return "function" == typeof i ? i() : T(i);
        },
      });
    }
    function um(t, r, i) {
      return new t({ type: "nonoptional", innerType: r, ...J(i) });
    }
    function up(t, r) {
      return new t({ type: "success", innerType: r });
    }
    function uv(t, r, i) {
      return new t({ type: "catch", innerType: r, catchValue: "function" == typeof i ? i : ej(i) });
    }
    function ug(t, r, i) {
      return new t({ type: "pipe", in: r, out: i });
    }
    function uh(t, r) {
      return new t({ type: "readonly", innerType: r });
    }
    function u$(t, r, i) {
      return new t({ type: "template_literal", parts: r, ...J(i) });
    }
    function uy(t, r) {
      return new t({ type: "lazy", getter: r });
    }
    function ub(t, r) {
      return new t({ type: "promise", innerType: r });
    }
    function u_(t, r, i) {
      let n = J(i);
      return (n.abort ?? (n.abort = !0), new t({ type: "custom", check: "custom", fn: r, ...n }));
    }
    function ux(t, r, i) {
      return new t({ type: "custom", check: "custom", fn: r, ...J(i) });
    }
    function uk(t, r) {
      let i = uI(
        (r) => (
          (r.addIssue = (t) => {
            "string" == typeof t
              ? r.issues.push(eh(t, r.value, i._zod.def))
              : (t.fatal && (t.continue = !1),
                t.code ?? (t.code = "custom"),
                "input" in t || (t.input = r.value),
                t.inst ?? (t.inst = i),
                t.continue ?? (t.continue = !i._zod.def.abort),
                r.issues.push(eh(t)));
          }),
          t(r.value, r)
        ),
        r,
      );
      return i;
    }
    function uI(t, r) {
      let i = new rg({ check: "custom", ...J(r) });
      return ((i._zod.check = t), i);
    }
    function uw(t) {
      let r = new rg({ check: "describe" });
      return (
        (r._zod.onattach = [
          (r) => {
            let i = as.get(r) ?? {};
            as.add(r, { ...i, description: t });
          },
        ]),
        (r._zod.check = () => {}),
        r
      );
    }
    function uS(t) {
      let r = new rg({ check: "meta" });
      return (
        (r._zod.onattach = [
          (r) => {
            let i = as.get(r) ?? {};
            as.add(r, { ...i, ...t });
          },
        ]),
        (r._zod.check = () => {}),
        r
      );
    }
    function uO(t, r) {
      let i = J(r),
        n = i.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
        a = i.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== i.case &&
        ((n = n.map((t) => ("string" == typeof t ? t.toLowerCase() : t))),
        (a = a.map((t) => ("string" == typeof t ? t.toLowerCase() : t))));
      let o = new Set(n),
        u = new Set(a),
        s = t.Codec ?? nD,
        l = t.Boolean ?? iE,
        d = new s({
          type: "pipe",
          in: new (t.String ?? rX)({ type: "string", error: i.error }),
          out: new l({ type: "boolean", error: i.error }),
          transform: (t, r) => {
            let n = t;
            return (
              "sensitive" !== i.case && (n = n.toLowerCase()),
              !!o.has(n) ||
                (!u.has(n) &&
                  (r.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...o, ...u],
                    input: r.value,
                    inst: d,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (t, r) => (!0 === t ? n[0] || "true" : a[0] || "false"),
          error: i.error,
        });
      return ((d._zod.bag.truthy = n), (d._zod.bag.falsy = a), (d._zod.bag.case = i.case ?? "insensitive"), d);
    }
    function uz(t, r, i, n = {}) {
      let a = {
        check: "string_format",
        type: "string",
        format: r,
        fn: "function" == typeof i ? i : (t) => i.test(t),
        ...J(n),
      };
      return (i instanceof RegExp && (a.pattern = i), new t(a));
    }
    function uD(t, ...r) {
      for (let i of r)
        for (let r of Reflect.ownKeys(i)) Object.prototype.propertyIsEnumerable.call(i, r) && _(t, r, i[r]);
      return t;
    }
    function uN(t) {
      let r = t?.target ?? "draft-2020-12";
      return (
        "draft-4" === r && (r = "draft-04"),
        "draft-7" === r && (r = "draft-07"),
        {
          processors: t.processors ?? {},
          metadataRegistry: t?.metadata ?? as,
          target: r,
          unrepresentable: t?.unrepresentable ?? "throw",
          override: t?.override ?? (() => {}),
          io: t?.io ?? "output",
          counter: 0,
          seen: new Map(),
          sharedDefsExtractedFor: void 0,
          sharedEmitDoneFor: void 0,
          cycles: t?.cycles ?? "ref",
          reused: t?.reused ?? "inline",
          intersections: [],
          deferred: [],
          external: t?.external ?? void 0,
        }
      );
    }
    function uU(t, r, i, n, a) {
      let o =
        "function" == typeof r.unrepresentable
          ? r.unrepresentable({ zodSchema: t, path: n.path, message: a })
          : r.unrepresentable;
      if ("any" === o) return !1;
      if (void 0 === o || "throw" === o) throw Error(a);
      return (Object.assign(i, o), !0);
    }
    function uA(t, r, i = { path: [], schemaPath: [] }) {
      var n;
      let a = t._zod.def,
        o = r.seen.get(t);
      if (o) return (o.count++, i.schemaPath.includes(t) && (o.cycle = i.path), o.schema);
      let u = { schema: {}, count: 1, cycle: void 0, path: i.path };
      (r.seen.set(t, u), (r.sharedDefsExtractedFor = void 0), (r.sharedEmitDoneFor = void 0));
      let s = t._zod.toJSONSchema?.();
      if (s) u.schema = s;
      else {
        let n = { ...i, schemaPath: [...i.schemaPath, t], path: i.path };
        if (t._zod.processJSONSchema) t._zod.processJSONSchema(r, u.schema, n);
        else {
          let i = u.schema,
            o = r.processors[a.type];
          if (!o) throw Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
          o(t, r, i, n);
        }
        let o = t._zod.parent;
        o && (u.ref || (u.ref = o), uA(o, r, n), (r.seen.get(o).isParent = !0));
      }
      let l = r.metadataRegistry.get(t);
      return (
        l && uD(u.schema, l),
        "input" === r.io &&
          (function t(r, i) {
            let n = i ?? { seen: new Set() };
            if (n.seen.has(r)) return !1;
            n.seen.add(r);
            let a = r._zod.def;
            if ("transform" === a.type) return !0;
            if ("array" === a.type) return t(a.element, n);
            if ("set" === a.type) return t(a.valueType, n);
            if ("lazy" === a.type) return t(a.getter(), n);
            if (
              "promise" === a.type ||
              "optional" === a.type ||
              "nonoptional" === a.type ||
              "nullable" === a.type ||
              "readonly" === a.type ||
              "default" === a.type ||
              "prefault" === a.type ||
              "catch" === a.type
            )
              return t(a.innerType, n);
            if ("intersection" === a.type) return t(a.left, n) || t(a.right, n);
            if ("record" === a.type || "map" === a.type) return t(a.keyType, n) || t(a.valueType, n);
            if ("pipe" === a.type) return !!r._zod.traits.has("$ZodCodec") || t(a.in, n) || t(a.out, n);
            if ("object" === a.type) {
              for (let r in a.shape) if (t(a.shape[r], n)) return !0;
              return !1;
            }
            if ("union" === a.type) {
              for (let r of a.options) if (t(r, n)) return !0;
              return !1;
            }
            if ("tuple" === a.type) {
              for (let r of a.items) if (t(r, n)) return !0;
              if (a.rest && t(a.rest, n)) return !0;
            }
            return !1;
          })(t) &&
          (delete u.schema.examples, delete u.schema.default),
        "input" === r.io && "_prefault" in u.schema && ((n = u.schema).default ?? (n.default = u.schema._prefault)),
        delete u.schema._prefault,
        r.seen.get(t).schema
      );
    }
    function uP(t) {
      return t.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function uZ(t, r) {
      let i = t.seen.get(r);
      if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
      if (t.external && t.sharedDefsExtractedFor === t.external) return;
      let n = new Map();
      for (let r of t.seen.entries()) {
        let i = t.metadataRegistry.get(r[0])?.id;
        if (i) {
          let t = n.get(i);
          if (t && t !== r[0])
            throw Error(
              `Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
            );
          n.set(i, r[0]);
        }
      }
      let a = (r) => {
        if (r[1].schema.$ref) return;
        let n = r[1],
          { ref: a, defId: o } = ((r) => {
            let n = "draft-2020-12" === t.target ? "$defs" : "definitions";
            if (t.external) {
              let i = t.external.registry.get(r[0])?.id,
                a = t.external.uri ?? ((t) => t);
              if (i) return { ref: a(i) };
              let o = r[1].defId ?? r[1].schema.id ?? `schema${t.counter++}`;
              return ((r[1].defId = o), { defId: o, ref: `${a("__shared")}#/${n}/${uP(o)}` });
            }
            let a = `#/${n}/`;
            if (r[1] === i && !r[1].schema.id) return { ref: "#" };
            let o = r[1].schema.id ?? `__schema${t.counter++}`;
            return { defId: o, ref: a + uP(o) };
          })(r);
        ((n.def = { ...n.schema }), o && (n.defId = o));
        let u = n.schema;
        for (let t in u) delete u[t];
        u.$ref = a;
      };
      if ("throw" === t.cycles)
        for (let r of t.seen.entries()) {
          let t = r[1];
          if (t.cycle)
            throw Error(`Cycle detected: #/${t.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      for (let i of t.seen.entries()) {
        let n = i[1];
        if (r === i[0]) {
          a(i);
          continue;
        }
        if (t.external) {
          let n = t.external.registry.get(i[0])?.id;
          if (r !== i[0] && n) {
            a(i);
            continue;
          }
        }
        if (t.metadataRegistry.get(i[0])?.id || n.cycle) {
          a(i);
          continue;
        }
        n.count > 1 && "ref" === t.reused && a(i);
      }
      t.external && (t.sharedDefsExtractedFor = t.external);
    }
    (t.s(
      [
        "TimePrecision",
        0,
        or,
        "_any",
        0,
        ok,
        "_array",
        0,
        o7,
        "_base64",
        0,
        a7,
        "_base64url",
        0,
        a3,
        "_bigint",
        0,
        og,
        "_boolean",
        0,
        op,
        "_catch",
        0,
        uv,
        "_check",
        0,
        uI,
        "_cidrv4",
        0,
        a2,
        "_cidrv6",
        0,
        a9,
        "_coercedBigint",
        0,
        oh,
        "_coercedBoolean",
        0,
        ov,
        "_coercedDate",
        0,
        oz,
        "_coercedNumber",
        0,
        os,
        "_coercedString",
        0,
        aR,
        "_creditCard",
        0,
        a8,
        "_cuid",
        0,
        aq,
        "_cuid2",
        0,
        aH,
        "_custom",
        0,
        u_,
        "_date",
        0,
        oO,
        "_default",
        0,
        uf,
        "_discriminatedUnion",
        0,
        o8,
        "_e164",
        0,
        a5,
        "_email",
        0,
        aV,
        "_emoji",
        0,
        aG,
        "_endsWith",
        0,
        oq,
        "_enum",
        0,
        ua,
        "_file",
        0,
        us,
        "_float32",
        0,
        od,
        "_float64",
        0,
        oc,
        "_gt",
        0,
        oA,
        "_gte",
        0,
        oP,
        "_guid",
        0,
        aM,
        "_iban",
        0,
        oe,
        "_includes",
        0,
        oG,
        "_int",
        0,
        ol,
        "_int32",
        0,
        of,
        "_int64",
        0,
        o$,
        "_intersection",
        0,
        ue,
        "_ipv4",
        0,
        a1,
        "_ipv6",
        0,
        a4,
        "_isoDate",
        0,
        on,
        "_isoDateTime",
        0,
        oi,
        "_isoDuration",
        0,
        oo,
        "_isoTime",
        0,
        oa,
        "_jwt",
        0,
        ot,
        "_ksuid",
        0,
        a0,
        "_lazy",
        0,
        uy,
        "_length",
        0,
        oB,
        "_literal",
        0,
        uu,
        "_lowercase",
        0,
        oW,
        "_lt",
        0,
        oN,
        "_lte",
        0,
        oU,
        "_mac",
        0,
        a6,
        "_map",
        0,
        ui,
        "_max",
        0,
        oU,
        "_maxLength",
        0,
        oM,
        "_maxSize",
        0,
        oL,
        "_mime",
        0,
        oQ,
        "_min",
        0,
        oP,
        "_minLength",
        0,
        oF,
        "_minSize",
        0,
        oR,
        "_multipleOf",
        0,
        oT,
        "_nan",
        0,
        oD,
        "_nanoid",
        0,
        aX,
        "_nativeEnum",
        0,
        uo,
        "_negative",
        0,
        oj,
        "_never",
        0,
        ow,
        "_nonnegative",
        0,
        oC,
        "_nonoptional",
        0,
        um,
        "_nonpositive",
        0,
        oE,
        "_normalize",
        0,
        o1,
        "_null",
        0,
        ox,
        "_nullable",
        0,
        uc,
        "_number",
        0,
        ou,
        "_optional",
        0,
        ud,
        "_overwrite",
        0,
        o0,
        "_pipe",
        0,
        ug,
        "_positive",
        0,
        oZ,
        "_promise",
        0,
        ub,
        "_properties",
        0,
        oY,
        "_property",
        0,
        oH,
        "_readonly",
        0,
        uh,
        "_record",
        0,
        ur,
        "_refine",
        0,
        ux,
        "_regex",
        0,
        oJ,
        "_set",
        0,
        un,
        "_size",
        0,
        oV,
        "_slugify",
        0,
        o9,
        "_startsWith",
        0,
        oX,
        "_string",
        0,
        aL,
        "_stringFormat",
        0,
        uz,
        "_stringbool",
        0,
        uO,
        "_success",
        0,
        up,
        "_superRefine",
        0,
        uk,
        "_symbol",
        0,
        ob,
        "_templateLiteral",
        0,
        u$,
        "_toLowerCase",
        0,
        o6,
        "_toUpperCase",
        0,
        o2,
        "_transform",
        0,
        ul,
        "_trim",
        0,
        o4,
        "_tuple",
        0,
        ut,
        "_uint32",
        0,
        om,
        "_uint64",
        0,
        oy,
        "_ulid",
        0,
        aY,
        "_undefined",
        0,
        o_,
        "_union",
        0,
        o3,
        "_unknown",
        0,
        oI,
        "_uppercase",
        0,
        oK,
        "_url",
        0,
        aK,
        "_uuid",
        0,
        aF,
        "_uuidv4",
        0,
        aB,
        "_uuidv6",
        0,
        aJ,
        "_uuidv7",
        0,
        aW,
        "_void",
        0,
        oS,
        "_xid",
        0,
        aQ,
        "_xor",
        0,
        o5,
        "describe",
        0,
        uw,
        "meta",
        0,
        uS,
      ],
      66964,
    ),
      t.i(66964));
    let uj = new Set(["type", "properties", "required", "additionalProperties"]),
      uE = ["oneOf", "anyOf"];
    function uC(t) {
      let r = t.additionalProperties;
      return void 0 === r || !1 === r || "object" != typeof r || null === r ? null : Object.keys(r).length ? r : null;
    }
    function uT(t) {
      let r = [];
      for (let i of t) {
        if ("object" != typeof i || "object" !== i.type) return null;
        for (let t in i) if (!uj.has(t)) return null;
        r.push(i);
      }
      let i = {},
        n = new Set();
      for (let t of r) {
        for (let n in t.properties) {
          if (Object.prototype.hasOwnProperty.call(i, n)) continue;
          let t = [];
          for (let i of r) {
            let r = i.properties?.[n] ?? uC(i);
            null != r && (t.some((t) => JSON.stringify(t) === JSON.stringify(r)) || t.push(r));
          }
          _(i, n, 1 === t.length ? t[0] : (uT(t) ?? { allOf: t }));
        }
        for (let r of t.required ?? []) n.add(r);
      }
      let a = { type: "object", properties: i };
      if ((n.size && (a.required = [...n]), r.every((t) => !1 === t.additionalProperties))) a.additionalProperties = !1;
      else {
        let t = [];
        for (let i of r) {
          let r = uC(i);
          r && !t.some((t) => JSON.stringify(t) === JSON.stringify(r)) && t.push(r);
        }
        1 === t.length ? (a.additionalProperties = t[0]) : t.length > 1 && (a.additionalProperties = { allOf: t });
      }
      return a;
    }
    function uL(t, r) {
      let i = t.seen.get(r);
      if (!i) throw Error("Unprocessed schema. This is a bug in Zod.");
      let n = (r) => {
        let i = t.seen.get(r);
        if (null === i.ref) return;
        let a = i.def ?? i.schema,
          o = { ...a },
          u = i.ref;
        if (((i.ref = null), u)) {
          n(u);
          let i = t.seen.get(u),
            s = i.schema;
          if (
            (s.$ref && ("draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target)
              ? ((a.allOf = a.allOf ?? []), a.allOf.push(s))
              : uD(a, s),
            uD(a, o),
            r._zod.parent === u)
          )
            for (let t in a) "$ref" !== t && "allOf" !== t && (t in o || delete a[t]);
          if (s.$ref && i.def)
            for (let t in a)
              "$ref" !== t &&
                "allOf" !== t &&
                t in i.def &&
                JSON.stringify(a[t]) === JSON.stringify(i.def[t]) &&
                delete a[t];
        }
        let s = r._zod.parent;
        if (s && s !== u) {
          n(s);
          let r = t.seen.get(s);
          if (r?.schema.$ref && ((a.$ref = r.schema.$ref), r.def))
            for (let t in a)
              "$ref" !== t &&
                "allOf" !== t &&
                t in r.def &&
                JSON.stringify(a[t]) === JSON.stringify(r.def[t]) &&
                delete a[t];
        }
        t.override({ zodSchema: r, jsonSchema: a, path: i.path ?? [] });
      };
      if (!t.external || t.sharedEmitDoneFor !== t.external) {
        for (let r of [...t.seen.entries()].reverse()) n(r[0]);
        if ("openapi-3.0" !== t.target)
          for (let r of t.seen.entries())
            !(function t(r) {
              let i = r.anyOf;
              if (!Array.isArray(i) || 0 === i.length || void 0 !== r.type) return;
              let n = [];
              for (let r of i) {
                if (!r || "object" != typeof r) return;
                t(r);
                let i = Object.keys(r);
                if (1 !== i.length || "type" !== i[0]) return;
                let a = r.type;
                for (let t of Array.isArray(a) ? a : [a]) {
                  if ("string" != typeof t) return;
                  n.includes(t) || n.push(t);
                }
              }
              (delete r.anyOf, (r.type = 1 === n.length ? n[0] : n));
            })(r[1].def ?? r[1].schema);
        for (let r of t.deferred) r();
        if (t.intersections.length) {
          let r = new Map();
          for (let i of t.seen.values())
            for (let t of [i.schema, i.def]) {
              let i = t?.allOf;
              if (!Array.isArray(i)) continue;
              let n = r.get(i);
              n ? n.push(t) : r.set(i, [t]);
            }
          for (let i of t.intersections)
            for (let t of r.get(i) ?? [])
              !(function (t) {
                let r = t.allOf;
                if (!Array.isArray(r) || r.length < 2) return;
                for (let r of uj) if (r in t) return;
                let i = r.filter((t) => uE.some((r) => Array.isArray(t[r]))),
                  n = null;
                if (i.length) {
                  let t = i[0],
                    a = uE.find((r) => Array.isArray(t[r]));
                  if (1 !== Object.keys(t).length) return;
                  let o = r.filter((r) => r !== t),
                    u = t[a].map((t) => uT([...o, t]));
                  if (u.some((t) => !t)) return;
                  n = { [a]: u };
                } else n = uT(r);
                n && (delete t.allOf, uD(t, n));
              })(t);
        }
      }
      let a = {};
      if (
        ("draft-2020-12" === t.target
          ? (a.$schema = "https://json-schema.org/draft/2020-12/schema")
          : "draft-07" === t.target
            ? (a.$schema = "http://json-schema.org/draft-07/schema#")
            : "draft-04" === t.target
              ? (a.$schema = "http://json-schema.org/draft-04/schema#")
              : t.target,
        t.external?.uri)
      ) {
        let i = t.external.registry.get(r)?.id;
        if (!i) throw Error("Schema is missing an `id` property");
        a.$id = t.external.uri(i);
      }
      uD(a, i.defId ? i.schema : (i.def ?? i.schema));
      let o = t.metadataRegistry.get(r)?.id;
      void 0 !== o && a.id === o && delete a.id;
      let u = t.external?.defs ?? {};
      if (!t.external || t.sharedEmitDoneFor !== t.external)
        for (let r of t.seen.entries()) {
          let t = r[1];
          t.def && t.defId && (t.def.id === t.defId && delete t.def.id, _(u, t.defId, t.def));
        }
      (t.external && (t.sharedEmitDoneFor = t.external),
        t.external ||
          (Object.keys(u).length > 0 && ("draft-2020-12" === t.target ? (a.$defs = u) : (a.definitions = u))));
      try {
        let i = JSON.parse(JSON.stringify(a));
        return (
          Object.defineProperty(i, "~standard", {
            value: {
              ...r["~standard"],
              jsonSchema: { input: uV(r, "input", t.processors), output: uV(r, "output", t.processors) },
            },
            enumerable: !1,
            writable: !1,
          }),
          i
        );
      } catch (t) {
        throw Error("Error converting schema to JSON.");
      }
    }
    let uR =
        (t, r = {}) =>
        (i) => {
          let n = uN({ ...i, processors: r });
          return (uA(t, n), uZ(n, t), uL(n, t));
        },
      uV =
        (t, r, i = {}) =>
        (n) => {
          let { libraryOptions: a, target: o } = n ?? {},
            u = uN({ ...(a ?? {}), target: o, io: r, processors: i });
          return (uA(t, u), uZ(u, t), uL(u, t));
        };
    (t.s(
      [
        "createStandardJSONSchemaMethod",
        0,
        uV,
        "createToJSONSchemaMethod",
        0,
        uR,
        "extractDefs",
        0,
        uZ,
        "finalize",
        0,
        uL,
        "handleUnrepresentable",
        0,
        uU,
        "initializeContext",
        0,
        uN,
        "process",
        0,
        uA,
        "processSchema",
        0,
        uA,
      ],
      80919,
    ),
      t.i(80919));
    let uM = (t, r, i) => {
        (void 0 === t[r] || i > t[r]) && (t[r] = i);
      },
      uF = (t, r, i) => {
        (void 0 === t[r] || i < t[r]) && (t[r] = i);
      },
      uB = (t, r) => {
        (uM(t, "minimum", r), uF(t, "maximum", r));
      },
      uJ = (t, r) => {
        (t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(r) || t.multipleOf.push(r));
      },
      uW = (t, r) => {
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
      },
      uK = (t, r) => {
        t.mime = t.mime ? t.mime.filter((t) => r.includes(t)) : [...r];
      },
      uG = (t, r) => {
        ((t.format = r), r.includes("int") && (t.isInt = !0));
      },
      uX = (t, r) => uM(t, "minimum", r.minimum),
      uq = (t, r) => uF(t, "maximum", r.maximum),
      uH = (t) => (r, i) => {
        uG(r, i.format);
        let [n, a] = t[i.format];
        (uM(r, "minimum", n), uF(r, "maximum", a));
      },
      uY = {
        greater_than: (t, r) => uM(t, r.inclusive ? "minimum" : "exclusiveMinimum", r.value),
        less_than: (t, r) => uF(t, r.inclusive ? "maximum" : "exclusiveMaximum", r.value),
        multiple_of: (t, r) => uJ(t, r.value),
        number_format: uH(X),
        bigint_format: uH(q),
        min_length: uX,
        max_length: uq,
        length_equals: (t, r) => uB(t, r.length),
        min_size: uX,
        max_size: uq,
        size_equals: (t, r) => uB(t, r.size),
        string_format: (t, r) => {
          (uG(t, r.format),
            r.pattern && uW(t, r.pattern),
            ("base64" === r.format || "base64url" === r.format) && (t.contentEncoding = r.format),
            (r.local || -1 === r.precision) && (t.laxFormat = !0));
        },
        mime_type: (t, r) => uK(t, r.mime),
      };
    function uQ(t) {
      let r = {},
        i = t._zod.def;
      for (let n of t._zod.traits.has("$ZodCheck") ? [t, ...(i.checks ?? [])] : (i.checks ?? []))
        uY[n._zod.def.check]?.(r, n._zod.def);
      let n = t._zod.bag;
      for (let t of (void 0 !== n.minimum && uM(r, "minimum", n.minimum),
      void 0 !== n.exclusiveMinimum && uM(r, "exclusiveMinimum", n.exclusiveMinimum),
      void 0 !== n.maximum && uF(r, "maximum", n.maximum),
      void 0 !== n.exclusiveMaximum && uF(r, "exclusiveMaximum", n.exclusiveMaximum),
      void 0 !== n.multipleOf && uJ(r, n.multipleOf),
      void 0 !== n.format && (r.format ?? (r.format = n.format), n.format.includes("int") && (r.isInt = !0)),
      n.mime && uK(r, n.mime),
      n.patterns ?? []))
        uW(r, t);
      return r;
    }
    let u0 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
      u1 = new Map([
        [ib, tF],
        [ix, tB],
      ]),
      u4 = (t) => u1.get(t) ?? t,
      u6 = (t, r, i, n) => {
        i.type = "string";
        let { minimum: a, maximum: o, format: u, patterns: s, contentEncoding: l, laxFormat: d } = uQ(t);
        if (
          ("number" == typeof a && (i.minLength = a),
          "number" == typeof o && (i.maxLength = o),
          u && ((i.format = u0[u] ?? u), "" === i.format && delete i.format, ("time" === u || d) && delete i.format),
          l && (i.contentEncoding = l),
          s && s.size > 0)
        ) {
          let t = [...s].map(u4);
          1 === t.length
            ? (i.pattern = t[0].source)
            : t.length > 1 &&
              (i.allOf = [
                ...t.map((t) => ({
                  ...("draft-07" === r.target || "draft-04" === r.target || "openapi-3.0" === r.target
                    ? { type: "string" }
                    : {}),
                  pattern: t.source,
                })),
              ]);
        }
      },
      u2 = (t, r, i, n) => {
        let { minimum: a, maximum: o, multipleOf: u, exclusiveMaximum: s, exclusiveMinimum: l, isInt: d } = uQ(t);
        i.type = d ? "integer" : "number";
        let c = "number" == typeof l && l >= (a ?? -1 / 0),
          f = "number" == typeof s && s <= (o ?? 1 / 0),
          m = "draft-04" === r.target || "openapi-3.0" === r.target;
        if (
          (c
            ? m
              ? ((i.minimum = l), (i.exclusiveMinimum = !0))
              : (i.exclusiveMinimum = l)
            : "number" == typeof a && (i.minimum = a),
          f
            ? m
              ? ((i.maximum = s), (i.exclusiveMaximum = !0))
              : (i.exclusiveMaximum = s)
            : "number" == typeof o && (i.maximum = o),
          u)
        ) {
          let a = new Set();
          for (let o of u)
            Number.isFinite(o) && 0 !== o
              ? a.add(Math.abs(o))
              : uU(t, r, i, n, `A multipleOf divisor of ${o} cannot be represented in JSON Schema`);
          let [o, ...s] = a;
          (void 0 !== o && (i.multipleOf = o),
            s.length && (i.allOf = [...(i.allOf ?? []), ...s.map((t) => ({ multipleOf: t }))]));
        }
      },
      u9 = (t, r, i, n) => {
        i.type = "boolean";
      },
      u7 = (t, r, i, n) => {
        uU(t, r, i, n, "BigInt cannot be represented in JSON Schema");
      },
      u3 = (t, r, i, n) => {
        uU(t, r, i, n, "Symbols cannot be represented in JSON Schema");
      },
      u5 = (t, r, i, n) => {
        "openapi-3.0" === r.target ? ((i.type = "string"), (i.nullable = !0), (i.enum = [null])) : (i.type = "null");
      },
      u8 = (t, r, i, n) => {
        uU(t, r, i, n, "Undefined cannot be represented in JSON Schema");
      },
      se = (t, r, i, n) => {
        uU(t, r, i, n, "Void cannot be represented in JSON Schema");
      },
      st = (t, r, i, n) => {
        i.not = {};
      },
      sr = (t, r, i, n) => {},
      si = (t, r, i, n) => {},
      sn = (t, r, i, n) => {
        uU(t, r, i, n, "Date cannot be represented in JSON Schema");
      },
      sa = (t, r, i, n) => {
        let a = d(t._zod.def.entries);
        if (0 === a.length) {
          i.not = {};
          return;
        }
        (a.every((t) => "number" == typeof t) && (i.type = "number"),
          a.every((t) => "string" == typeof t) && (i.type = "string"),
          (i.enum = a));
      },
      so = (t, r, i, n) => {
        let a = t._zod.def;
        if (0 === a.values.length) {
          i.not = {};
          return;
        }
        let o = [];
        for (let u of a.values)
          if (void 0 === u) {
            if (uU(t, r, i, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
          } else if ("bigint" == typeof u) {
            if (uU(t, r, i, n, "BigInt literals cannot be represented in JSON Schema")) return;
            o.push(Number(u));
          } else o.push(u);
        if (0 === o.length);
        else if (1 === o.length) {
          let t = o[0];
          ((i.type = null === t ? "null" : typeof t),
            "draft-04" === r.target || "openapi-3.0" === r.target ? (i.enum = [t]) : (i.const = t));
        } else
          (o.every((t) => "number" == typeof t) && (i.type = "number"),
            o.every((t) => "string" == typeof t) && (i.type = "string"),
            o.every((t) => "boolean" == typeof t) && (i.type = "boolean"),
            o.every((t) => null === t) && (i.type = "null"),
            (i.enum = o));
      },
      su = (t, r, i, n) => {
        uU(t, r, i, n, "NaN cannot be represented in JSON Schema");
      },
      ss = (t, r, i, n) => {
        let a = t._zod.pattern;
        if (!a) throw Error("Pattern not found in template literal");
        ((i.type = "string"), (i.pattern = a.source));
      },
      sl = (t, r, i, n) => {
        ((i.type = "string"), (i.format = "binary"), (i.contentEncoding = "binary"));
        let { minimum: a, maximum: o, mime: u } = uQ(t);
        (void 0 !== a && (i.minLength = a),
          void 0 !== o && (i.maxLength = o),
          u &&
            (0 === u.length
              ? (i.not = {})
              : 1 === u.length
                ? (i.contentMediaType = u[0])
                : (i.anyOf = u.map((t) => ({ contentMediaType: t })))));
      },
      sd = (t, r, i, n) => {
        i.type = "boolean";
      },
      sc = (t, r, i, n) => {
        uU(t, r, i, n, "Custom types cannot be represented in JSON Schema");
      },
      sf = (t, r, i, n) => {
        uU(t, r, i, n, "Function types cannot be represented in JSON Schema");
      },
      sm = (t, r, i, n) => {
        uU(t, r, i, n, "Transforms cannot be represented in JSON Schema");
      },
      sp = (t, r, i, n) => {
        uU(t, r, i, n, "Map cannot be represented in JSON Schema");
      },
      sv = (t, r, i, n) => {
        uU(t, r, i, n, "Set cannot be represented in JSON Schema");
      },
      sg = (t, r, i, n) => {
        let a = t._zod.def,
          { minimum: o, maximum: u } = uQ(t);
        ("number" == typeof o && (i.minItems = o),
          "number" == typeof u && (i.maxItems = u),
          (i.type = "array"),
          (i.items = uA(a.element, r, { ...n, path: [...n.path, "items"] })));
      };
    function sh(t) {
      let r = t._zod.def;
      return "pipe" === r.type && r.in._zod.traits.has("$ZodTransform")
        ? sh(r.out)
        : "catch" === r.type
          ? sh(r.innerType)
          : t._zod.optin;
    }
    let s$ = (t, r, i, n) => {
        let a = t._zod.def,
          o = a.shape;
        if (
          Object.getOwnPropertySymbols(o).length &&
          uU(t, r, i, n, "Symbol keys cannot be represented in JSON Schema")
        )
          return;
        for (let t in ((i.type = "object"), (i.properties = {}), o))
          _(i.properties, t, uA(o[t], r, { ...n, path: [...n.path, "properties", t] }));
        let u = [];
        for (let t of Object.keys(o)) {
          let i = a.shape[t];
          ("input" === r.io ? void 0 === sh(i) : void 0 === i._zod.optout) && u.push(t);
        }
        (u.length > 0 && (i.required = u),
          a.catchall?._zod.def.type === "never"
            ? (i.additionalProperties = !1)
            : a.catchall
              ? a.catchall &&
                (i.additionalProperties = uA(a.catchall, r, { ...n, path: [...n.path, "additionalProperties"] }))
              : "output" === r.io && (i.additionalProperties = !1));
      },
      sy = (t, r, i, n) => {
        let a = t._zod.def,
          o = !1 === a.inclusive,
          u = a.options.map((t, i) => uA(t, r, { ...n, path: [...n.path, o ? "oneOf" : "anyOf", i] }));
        o ? (i.oneOf = u) : (i.anyOf = u);
      },
      sb = (t, r, i, n) => {
        let a = t._zod.def,
          o = uA(a.left, r, { ...n, path: [...n.path, "allOf", 0] }),
          u = uA(a.right, r, { ...n, path: [...n.path, "allOf", 1] }),
          s = (t) => "allOf" in t && 1 === Object.keys(t).length,
          l = [...(s(o) ? o.allOf : [o]), ...(s(u) ? u.allOf : [u])];
        ((i.allOf = l), r.intersections.push(l));
      },
      s_ = (t, r, i, n) => {
        let a = t._zod.def;
        i.type = "array";
        let o = "draft-2020-12" === r.target ? "prefixItems" : "items",
          u = "draft-2020-12" === r.target || "openapi-3.0" === r.target ? "items" : "additionalItems",
          s = a.items.map((t, i) => uA(t, r, { ...n, path: [...n.path, o, i] })),
          l = a.rest
            ? uA(a.rest, r, { ...n, path: [...n.path, u, ...("openapi-3.0" === r.target ? [a.items.length] : [])] })
            : null,
          d = a.items.length;
        for (; d > 0;) {
          let t = a.items[d - 1];
          if (!("input" === r.io ? void 0 !== sh(t) : "optional" === t._zod.optout)) break;
          d--;
        }
        let c = a.items.length,
          f = !a.rest;
        ("draft-2020-12" === r.target
          ? ((i.prefixItems = s), f ? (i.items = !1) : l && (i.items = l))
          : "openapi-3.0" === r.target
            ? ((i.items = { anyOf: s }), l && i.items.anyOf.push(l))
            : ((i.items = s), f ? (i.additionalItems = !1) : l && (i.additionalItems = l)),
          d > 0 && (i.minItems = d),
          f && (i.maxItems = c));
        let { minimum: m, maximum: p } = uQ(t);
        ("number" == typeof m && (i.minItems = m), "number" == typeof p && (i.maxItems = p));
      },
      sx = new WeakMap(),
      sk = (t, r, i, n) => {
        let a = t._zod.def;
        i.type = "object";
        let o = a.keyType,
          u = uQ(o).patterns;
        if ("loose" === a.mode && u && u.size > 0) {
          let t = uA(a.valueType, r, { ...n, path: [...n.path, "patternProperties", "*"] });
          for (let r of ((i.patternProperties = {}), u)) _(i.patternProperties, u4(r).source, t);
        } else {
          if ("draft-07" === r.target || "draft-2020-12" === r.target) {
            i.propertyNames = uA(a.keyType, r, { ...n, path: [...n.path, "propertyNames"] });
            let o = sx.get(r);
            (o ||
              ((o = []),
              sx.set(r, o),
              r.deferred.push(() =>
                (function (t) {
                  let r = new Map();
                  for (let i of t.seen.values()) i.def && !r.has(i.schema) && r.set(i.schema, i);
                  let i = new Map();
                  for (let n of sx.get(t) ?? []) {
                    let a = t.seen.get(n),
                      o = (a?.def ?? a?.schema)?.propertyNames;
                    if (!o || !0 === o || i.has(o)) continue;
                    let u = (function t(r, i, n) {
                      if (i.$ref) {
                        if (n.has(i)) return i;
                        n.add(i);
                        let a = r.get(i)?.def;
                        if (!a) return i;
                        let o = t(r, a, n);
                        return o === a ? i : o;
                      }
                      for (let a of ["anyOf", "oneOf"]) {
                        let o = i[a];
                        if (!Array.isArray(o)) continue;
                        let u = o.map((i) => t(r, i, n));
                        u.some((t, r) => t !== o[r]) && (i = { ...i, [a]: u });
                      }
                      let a = Array.isArray(i.type) ? i.type : [i.type],
                        o = !a.includes("string") && a.some((t) => "number" === t || "integer" === t),
                        u = i.enum ?? (void 0 !== i.const ? [i.const] : void 0);
                      if (!o && !u?.some((t) => "number" == typeof t)) return i;
                      let {
                        minimum: s,
                        maximum: l,
                        exclusiveMinimum: d,
                        exclusiveMaximum: c,
                        multipleOf: f,
                        format: m,
                        id: p,
                        ...v
                      } = i;
                      return (
                        v.enum
                          ? (v.enum = v.enum.map((t) => ("number" == typeof t ? String(t) : t)))
                          : "number" == typeof v.const && (v.const = String(v.const)),
                        o && ((v.type = "string"), u || (v.pattern = (a.includes("number") ? t3 : t7).source)),
                        v
                      );
                    })(r, o, new Set());
                    u !== o && i.set(o, u);
                  }
                  if (i.size)
                    for (let r of t.seen.values())
                      for (let t of [r.schema, r.def]) {
                        let r = t && i.get(t.propertyNames);
                        r && (t.propertyNames = r);
                      }
                })(r),
              )),
              o.push(t));
          }
          i.additionalProperties = uA(a.valueType, r, { ...n, path: [...n.path, "additionalProperties"] });
        }
        let s = o._zod.values,
          l = "input" === r.io && void 0 !== sh(a.valueType);
        if (s && !a.partial && !l) {
          let t = [...s].filter((t) => "string" == typeof t || "number" == typeof t);
          t.length > 0 && (i.required = t.map(String));
        }
      },
      sI = (t, r, i, n) => {
        let a = t._zod.def,
          o = uA(a.innerType, r, n),
          u = r.seen.get(t);
        "openapi-3.0" === r.target ? ((u.ref = a.innerType), (i.nullable = !0)) : (i.anyOf = [o, { type: "null" }]);
      },
      sw = (t, r, i, n) => {
        let a = t._zod.def;
        (uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType));
      },
      sS = Symbol();
    function sO(t, r, i, n, a) {
      let o = !1,
        u = JSON.stringify(t, (t, r) => ("bigint" != typeof r ? r : ((o = !0), null)));
      return o ? (uU(r, i, n, a, "BigInt defaults cannot be represented in JSON Schema"), sS) : JSON.parse(u);
    }
    let sz = (t, r, i, n) => {
        let a = t._zod.def;
        (uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType));
        let o = sO(a.defaultValue, t, r, i, n);
        o !== sS && (i.default = o);
      },
      sD = (t, r, i, n) => {
        let a = t._zod.def;
        if ((uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType), "input" !== r.io)) return;
        let o = sO(a.defaultValue, t, r, i, n);
        o !== sS && (i._prefault = o);
      },
      sN = (t, r, i, n) => {
        let a,
          o = t._zod.def;
        (uA(o.innerType, r, n), (r.seen.get(t).ref = o.innerType));
        try {
          a = o.catchValue(void 0);
        } catch {
          uU(t, r, i, n, "Dynamic catch values are not supported in JSON Schema");
          return;
        }
        i.default = a;
      },
      sU = (t, r, i, n) => {
        let a = t._zod.def,
          o = a.in._zod.traits.has("$ZodTransform"),
          u = "input" === r.io ? (o ? a.out : a.in) : a.out;
        (uA(u, r, n), (r.seen.get(t).ref = u));
      },
      sA = (t, r, i, n) => {
        let a = t._zod.def;
        (uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType), (i.readOnly = !0));
      },
      sP = (t, r, i, n) => {
        let a = t._zod.def;
        (uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType));
      },
      sZ = (t, r, i, n) => {
        let a = t._zod.def;
        (uA(a.innerType, r, n), (r.seen.get(t).ref = a.innerType));
      },
      sj = (t, r, i, n) => {
        let a = t._zod.innerType;
        (uA(a, r, n), (r.seen.get(t).ref = a));
      },
      sE = {
        string: u6,
        number: u2,
        boolean: u9,
        bigint: u7,
        symbol: u3,
        null: u5,
        undefined: u8,
        void: se,
        never: st,
        any: sr,
        unknown: si,
        date: sn,
        enum: sa,
        literal: so,
        nan: su,
        template_literal: ss,
        file: sl,
        success: sd,
        custom: sc,
        function: sf,
        transform: sm,
        map: sp,
        set: sv,
        array: sg,
        object: s$,
        union: sy,
        intersection: sb,
        tuple: s_,
        record: sk,
        nullable: sI,
        nonoptional: sw,
        default: sz,
        prefault: sD,
        catch: sN,
        pipe: sU,
        readonly: sA,
        promise: sP,
        optional: sZ,
        lazy: sj,
      };
    function sC(t, r) {
      if ("_idmap" in t) {
        let i = uN({ ...r, processors: sE }),
          n = {};
        for (let r of t._idmap.entries()) {
          let [t, n] = r;
          uA(n, i);
        }
        let a = {};
        for (let o of ((i.external = { registry: t, uri: r?.uri, defs: n }), t._idmap.entries())) {
          let [t, r] = o;
          (uZ(i, r), _(a, t, uL(i, r)));
        }
        return (
          Object.keys(n).length > 0 && (a.__shared = { ["draft-2020-12" === i.target ? "$defs" : "definitions"]: n }),
          { schemas: a }
        );
      }
      let i = uN({ ...r, processors: sE });
      return (uA(t, i), uZ(i, t), uL(i, t));
    }
    t.s([], 27975);
    var sT = t.i(27975);
    t.s(
      [
        "$ZodAny",
        0,
        iM,
        "$ZodArray",
        0,
        iG,
        "$ZodAsyncError",
        0,
        eV,
        "$ZodBase64",
        0,
        i_,
        "$ZodBase64URL",
        0,
        iI,
        "$ZodBigInt",
        0,
        iC,
        "$ZodBigIntFormat",
        0,
        iT,
        "$ZodBoolean",
        0,
        iE,
        "$ZodCIDRv4",
        0,
        ig,
        "$ZodCIDRv6",
        0,
        i$,
        "$ZodCUID",
        0,
        ie,
        "$ZodCUID2",
        0,
        it,
        "$ZodCatch",
        0,
        nw,
        "$ZodCheck",
        0,
        rg,
        "$ZodCheckBigIntFormat",
        0,
        rI,
        "$ZodCheckEndsWith",
        0,
        rC,
        "$ZodCheckGreaterThan",
        0,
        r_,
        "$ZodCheckIncludes",
        0,
        rj,
        "$ZodCheckLengthEquals",
        0,
        rN,
        "$ZodCheckLessThan",
        0,
        rb,
        "$ZodCheckLowerCase",
        0,
        rP,
        "$ZodCheckMaxLength",
        0,
        rz,
        "$ZodCheckMaxSize",
        0,
        rw,
        "$ZodCheckMimeType",
        0,
        rV,
        "$ZodCheckMinLength",
        0,
        rD,
        "$ZodCheckMinSize",
        0,
        rS,
        "$ZodCheckMultipleOf",
        0,
        rx,
        "$ZodCheckNumberFormat",
        0,
        rk,
        "$ZodCheckOverwrite",
        0,
        rM,
        "$ZodCheckProperties",
        0,
        rR,
        "$ZodCheckProperty",
        0,
        rL,
        "$ZodCheckRegex",
        0,
        rA,
        "$ZodCheckSizeEquals",
        0,
        rO,
        "$ZodCheckStartsWith",
        0,
        rE,
        "$ZodCheckStringFormat",
        0,
        rU,
        "$ZodCheckUpperCase",
        0,
        rZ,
        "$ZodCodec",
        0,
        nD,
        "$ZodCreditCard",
        0,
        iz,
        "$ZodCustom",
        0,
        nL,
        "$ZodCustomStringFormat",
        0,
        iP,
        "$ZodCyclicError",
        0,
        nV,
        "$ZodDate",
        0,
        iW,
        "$ZodDefault",
        0,
        n$,
        "$ZodDiscriminatedUnion",
        0,
        i3,
        "$ZodE164",
        0,
        iw,
        "$ZodEmail",
        0,
        rQ,
        "$ZodEmoji",
        0,
        r5,
        "$ZodEncodeError",
        0,
        eM,
        "$ZodEnum",
        0,
        nd,
        "$ZodError",
        0,
        eX,
        "$ZodExactOptional",
        0,
        ng,
        "$ZodFile",
        0,
        nf,
        "$ZodFunction",
        0,
        nE,
        "$ZodGUID",
        0,
        rH,
        "$ZodIBAN",
        0,
        iN,
        "$ZodIPv4",
        0,
        id,
        "$ZodIPv6",
        0,
        ip,
        "$ZodISODate",
        0,
        iu,
        "$ZodISODateTime",
        0,
        io,
        "$ZodISODuration",
        0,
        il,
        "$ZodISOTime",
        0,
        is,
        "$ZodIntersection",
        0,
        i5,
        "$ZodJWT",
        0,
        iA,
        "$ZodKSUID",
        0,
        ia,
        "$ZodLazy",
        0,
        nT,
        "$ZodLiteral",
        0,
        nc,
        "$ZodMAC",
        0,
        iv,
        "$ZodMap",
        0,
        no,
        "$ZodNaN",
        0,
        nS,
        "$ZodNanoID",
        0,
        r8,
        "$ZodNever",
        0,
        iB,
        "$ZodNonOptional",
        0,
        n_,
        "$ZodNull",
        0,
        iV,
        "$ZodNullable",
        0,
        nh,
        "$ZodNumber",
        0,
        iZ,
        "$ZodNumberFormat",
        0,
        ij,
        "$ZodObject",
        0,
        iQ,
        "$ZodObjectJIT",
        0,
        i0,
        "$ZodOptional",
        0,
        nv,
        "$ZodPipe",
        0,
        nO,
        "$ZodPrefault",
        0,
        nb,
        "$ZodPreprocess",
        0,
        nA,
        "$ZodPromise",
        0,
        nC,
        "$ZodReadonly",
        0,
        nP,
        "$ZodRealError",
        0,
        eq,
        "$ZodRecord",
        0,
        na,
        "$ZodRegistry",
        0,
        ao,
        "$ZodSet",
        0,
        ns,
        "$ZodString",
        0,
        rX,
        "$ZodStringFormat",
        0,
        rq,
        "$ZodSuccess",
        0,
        nk,
        "$ZodSymbol",
        0,
        iL,
        "$ZodTemplateLiteral",
        0,
        nj,
        "$ZodTransform",
        0,
        nm,
        "$ZodTuple",
        0,
        nt,
        "$ZodType",
        0,
        rJ,
        "$ZodULID",
        0,
        ir,
        "$ZodURL",
        0,
        r3,
        "$ZodUUID",
        0,
        rY,
        "$ZodUndefined",
        0,
        iR,
        "$ZodUnion",
        0,
        i4,
        "$ZodUnknown",
        0,
        iF,
        "$ZodVoid",
        0,
        iJ,
        "$ZodXID",
        0,
        ii,
        "$ZodXor",
        0,
        i2,
        "$brand",
        0,
        eR,
        "$constructor",
        0,
        eL,
        "$input",
        0,
        aa,
        "$output",
        0,
        an,
        "Doc",
        0,
        rF,
        "INVALID",
        0,
        al,
        "JSONSchema",
        0,
        sT,
        "JSONSchemaGenerator",
        0,
        class {
          get metadataRegistry() {
            return this.ctx.metadataRegistry;
          }
          get target() {
            return this.ctx.target;
          }
          get unrepresentable() {
            return this.ctx.unrepresentable;
          }
          get override() {
            return this.ctx.override;
          }
          get io() {
            return this.ctx.io;
          }
          get counter() {
            return this.ctx.counter;
          }
          set counter(t) {
            this.ctx.counter = t;
          }
          get seen() {
            return this.ctx.seen;
          }
          constructor(t) {
            let r = t?.target ?? "draft-2020-12";
            ("draft-4" === r && (r = "draft-04"),
              "draft-7" === r && (r = "draft-07"),
              (this.ctx = uN({
                processors: sE,
                target: r,
                ...(t?.metadata && { metadata: t.metadata }),
                ...(t?.unrepresentable && { unrepresentable: t.unrepresentable }),
                ...(t?.override && { override: t.override }),
                ...(t?.io && { io: t.io }),
              })));
          }
          process(t, r = { path: [], schemaPath: [] }) {
            return uA(t, this.ctx, r);
          }
          emit(t, r) {
            (r &&
              (r.cycles && (this.ctx.cycles = r.cycles),
              r.reused && (this.ctx.reused = r.reused),
              r.external && (this.ctx.external = r.external)),
              (this.ctx.sharedDefsExtractedFor = void 0),
              (this.ctx.sharedEmitDoneFor = void 0),
              uZ(this.ctx, t));
            let { "~standard": i, ...n } = uL(this.ctx, t);
            return n;
          }
        },
        "NEVER",
        0,
        eE,
        "TimePrecision",
        0,
        or,
        "URL_BAD_FORMAT",
        0,
        1,
        "URL_UNPARSEABLE",
        0,
        2,
        "ZodCompileAsyncError",
        0,
        ac,
        "ZodCompileUnsupportedError",
        0,
        af,
        "_any",
        0,
        ok,
        "_array",
        0,
        o7,
        "_base64",
        0,
        a7,
        "_base64url",
        0,
        a3,
        "_bigint",
        0,
        og,
        "_boolean",
        0,
        op,
        "_catch",
        0,
        uv,
        "_check",
        0,
        uI,
        "_cidrv4",
        0,
        a2,
        "_cidrv6",
        0,
        a9,
        "_coercedBigint",
        0,
        oh,
        "_coercedBoolean",
        0,
        ov,
        "_coercedDate",
        0,
        oz,
        "_coercedNumber",
        0,
        os,
        "_coercedString",
        0,
        aR,
        "_creditCard",
        0,
        a8,
        "_cuid",
        0,
        aq,
        "_cuid2",
        0,
        aH,
        "_custom",
        0,
        u_,
        "_date",
        0,
        oO,
        "_decode",
        0,
        ts,
        "_decodeAsync",
        0,
        tf,
        "_default",
        0,
        uf,
        "_discriminatedUnion",
        0,
        o8,
        "_e164",
        0,
        a5,
        "_email",
        0,
        aV,
        "_emoji",
        0,
        aG,
        "_encode",
        0,
        to,
        "_encodeAsync",
        0,
        td,
        "_endsWith",
        0,
        oq,
        "_enum",
        0,
        ua,
        "_file",
        0,
        us,
        "_float32",
        0,
        od,
        "_float64",
        0,
        oc,
        "_gt",
        0,
        oA,
        "_gte",
        0,
        oP,
        "_guid",
        0,
        aM,
        "_iban",
        0,
        oe,
        "_includes",
        0,
        oG,
        "_int",
        0,
        ol,
        "_int32",
        0,
        of,
        "_int64",
        0,
        o$,
        "_intersection",
        0,
        ue,
        "_ipv4",
        0,
        a1,
        "_ipv6",
        0,
        a4,
        "_isoDate",
        0,
        on,
        "_isoDateTime",
        0,
        oi,
        "_isoDuration",
        0,
        oo,
        "_isoTime",
        0,
        oa,
        "_jwt",
        0,
        ot,
        "_ksuid",
        0,
        a0,
        "_lazy",
        0,
        uy,
        "_length",
        0,
        oB,
        "_literal",
        0,
        uu,
        "_lowercase",
        0,
        oW,
        "_lt",
        0,
        oN,
        "_lte",
        0,
        oU,
        "_mac",
        0,
        a6,
        "_map",
        0,
        ui,
        "_max",
        0,
        oU,
        "_maxLength",
        0,
        oM,
        "_maxSize",
        0,
        oL,
        "_mime",
        0,
        oQ,
        "_min",
        0,
        oP,
        "_minLength",
        0,
        oF,
        "_minSize",
        0,
        oR,
        "_multipleOf",
        0,
        oT,
        "_nan",
        0,
        oD,
        "_nanoid",
        0,
        aX,
        "_nativeEnum",
        0,
        uo,
        "_negative",
        0,
        oj,
        "_never",
        0,
        ow,
        "_nonnegative",
        0,
        oC,
        "_nonoptional",
        0,
        um,
        "_nonpositive",
        0,
        oE,
        "_normalize",
        0,
        o1,
        "_null",
        0,
        ox,
        "_nullable",
        0,
        uc,
        "_number",
        0,
        ou,
        "_optional",
        0,
        ud,
        "_overwrite",
        0,
        o0,
        "_parse",
        0,
        e6,
        "_parseAsync",
        0,
        e9,
        "_pipe",
        0,
        ug,
        "_positive",
        0,
        oZ,
        "_promise",
        0,
        ub,
        "_properties",
        0,
        oY,
        "_property",
        0,
        oH,
        "_readonly",
        0,
        uh,
        "_record",
        0,
        ur,
        "_refine",
        0,
        ux,
        "_regex",
        0,
        oJ,
        "_safeDecode",
        0,
        tg,
        "_safeDecodeAsync",
        0,
        tb,
        "_safeEncode",
        0,
        tp,
        "_safeEncodeAsync",
        0,
        t$,
        "_safeParse",
        0,
        e3,
        "_safeParseAsync",
        0,
        te,
        "_set",
        0,
        un,
        "_size",
        0,
        oV,
        "_slugify",
        0,
        o9,
        "_startsWith",
        0,
        oX,
        "_string",
        0,
        aL,
        "_stringFormat",
        0,
        uz,
        "_stringbool",
        0,
        uO,
        "_success",
        0,
        up,
        "_superRefine",
        0,
        uk,
        "_symbol",
        0,
        ob,
        "_templateLiteral",
        0,
        u$,
        "_toLowerCase",
        0,
        o6,
        "_toUpperCase",
        0,
        o2,
        "_transform",
        0,
        ul,
        "_trim",
        0,
        o4,
        "_tuple",
        0,
        ut,
        "_uint32",
        0,
        om,
        "_uint64",
        0,
        oy,
        "_ulid",
        0,
        aY,
        "_undefined",
        0,
        o_,
        "_union",
        0,
        o3,
        "_unknown",
        0,
        oI,
        "_uppercase",
        0,
        oK,
        "_url",
        0,
        aK,
        "_uuid",
        0,
        aF,
        "_uuidv4",
        0,
        aB,
        "_uuidv6",
        0,
        aJ,
        "_uuidv7",
        0,
        aW,
        "_void",
        0,
        oS,
        "_xid",
        0,
        aQ,
        "_xor",
        0,
        o5,
        "base64Charset",
        0,
        ib,
        "base64urlCharset",
        0,
        ix,
        "canParseURL",
        0,
        r0,
        "clone",
        0,
        B,
        "compile",
        0,
        am,
        "compileFn",
        0,
        av,
        "config",
        0,
        eB,
        "createStandardJSONSchemaMethod",
        0,
        uV,
        "createToJSONSchemaMethod",
        0,
        uR,
        "decode",
        0,
        tl,
        "decodeAsync",
        0,
        tm,
        "describe",
        0,
        uw,
        "encode",
        0,
        tu,
        "encodeAsync",
        0,
        tc,
        "extractDefs",
        0,
        uZ,
        "finalize",
        0,
        uL,
        "flattenError",
        0,
        eH,
        "formatError",
        0,
        eY,
        "getDiscriminatedOption",
        0,
        i9,
        "globalConfig",
        0,
        eF,
        "globalRegistry",
        0,
        as,
        "handleUnrepresentable",
        0,
        uU,
        "initializeContext",
        0,
        uN,
        "isBackEdge",
        0,
        nY,
        "isRecursiveSchema",
        0,
        nG,
        "isValidBase64",
        0,
        iy,
        "isValidBase64URL",
        0,
        ik,
        "isValidCIDRv6",
        0,
        ih,
        "isValidCreditCard",
        0,
        iO,
        "isValidIBAN",
        0,
        iD,
        "isValidIPv6",
        0,
        im,
        "isValidJWT",
        0,
        iU,
        "locales",
        0,
        ai,
        "memoizer",
        0,
        nH,
        "mergeValues",
        0,
        i8,
        "meta",
        0,
        uS,
        "parse",
        0,
        e2,
        "parseAsync",
        0,
        e7,
        "parseURLObject",
        0,
        r4,
        "prettifyError",
        0,
        e1,
        "process",
        0,
        uA,
        "processSchema",
        0,
        uA,
        "regexes",
        0,
        n6,
        "registry",
        0,
        au,
        "safeDecode",
        0,
        th,
        "safeDecodeAsync",
        0,
        t_,
        "safeEncode",
        0,
        tv,
        "safeEncodeAsync",
        0,
        ty,
        "safeParse",
        0,
        e5,
        "safeParseAsync",
        0,
        tt,
        "standardProps",
        0,
        rG,
        "stripTabAndNewline",
        0,
        r2,
        "toDotPath",
        0,
        e0,
        "toJSONSchema",
        0,
        sC,
        "toZod",
        0,
        o,
        "treeifyError",
        0,
        eQ,
        "urlHostnameOk",
        0,
        r9,
        "urlProtocolOk",
        0,
        r7,
        "util",
        0,
        n4,
        "validate",
        0,
        tn,
        "validateAsync",
        0,
        ta,
        "validateURL",
        0,
        r1,
        "version",
        0,
        rB,
        "withParser",
        0,
        ap,
      ],
      60559,
    );
    var sL = t.i(60559),
      sR = n6,
      sV = n4;
    let sM = new WeakSet([Object.prototype, Error.prototype]);
    function sF(t, r, i) {
      Object.defineProperty(t, r, {
        configurable: !0,
        enumerable: !1,
        get() {
          let t = i(this);
          return (Object.defineProperty(this, r, { value: t, configurable: !0, writable: !0 }), t);
        },
        set(t) {
          Object.defineProperty(this, r, { value: t, configurable: !0, writable: !0 });
        },
      });
    }
    let sB = (t, r) => {
        (eX.init(t, r), (t.name = "ZodError"));
        let i = Object.getPrototypeOf(t);
        sM.has(i) ||
          (sM.add(i),
          sF(i, "format", (t) => (r) => eY(t, r)),
          sF(i, "flatten", (t) => (r) => eH(t, r)),
          sF(i, "addIssue", (t) => (r) => {
            (t.issues.push(r), (t.message = JSON.stringify(t.issues, f, 2)));
          }),
          sF(i, "addIssues", (t) => (r) => {
            (t.issues.push(...r), (t.message = JSON.stringify(t.issues, f, 2)));
          }),
          Object.defineProperty(i, "isEmpty", {
            configurable: !0,
            enumerable: !1,
            get() {
              return 0 === this.issues.length;
            },
          }));
      },
      sJ = eL("ZodError", sB),
      sW = eL("ZodError", sB, void 0, { Parent: Error });
    t.s(["ZodError", 0, sJ, "ZodRealError", 0, sW], 78456);
    let sK = e6(sW),
      sG = e9(sW),
      sX = e3(sW),
      sq = te(sW),
      sH = to(sW),
      sY = ts(sW),
      sQ = td(sW),
      s0 = tf(sW),
      s1 = tp(sW),
      s4 = tg(sW),
      s6 = t$(sW),
      s2 = tb(sW);
    function s9() {
      eF.memoizer || eB({ memoizer: nH() });
    }
    t.s(
      [
        "decode",
        0,
        sY,
        "decodeAsync",
        0,
        s0,
        "encode",
        0,
        sH,
        "encodeAsync",
        0,
        sQ,
        "parse",
        0,
        sK,
        "parseAsync",
        0,
        sG,
        "safeDecode",
        0,
        s4,
        "safeDecodeAsync",
        0,
        s2,
        "safeEncode",
        0,
        s1,
        "safeEncodeAsync",
        0,
        s6,
        "safeParse",
        0,
        sX,
        "safeParseAsync",
        0,
        sq,
      ],
      17767,
    );
    let s7 = eL("ZodType", (t, r) => (eF.localeError || eB(n9()), rJ.init(t, r), (t.def = r), (t.type = r.type), t), {
        check(...t) {
          let r = this.def;
          return this.clone(
            sV.mergeDefs(r, {
              checks: [
                ...(r.checks ?? []),
                ...t.map((t) =>
                  "function" == typeof t ? { _zod: { check: t, def: { check: "custom" }, onattach: [] } } : t,
                ),
              ],
            }),
            { parent: !0 },
          );
        },
        with(...t) {
          return this.check(...t);
        },
        clone(t, r) {
          return B(this, t, r);
        },
        brand() {
          return this;
        },
        register(t, r) {
          return (t.add(this, r), this);
        },
        refine(t, r) {
          return this.check(cj(t, r));
        },
        superRefine(t, r) {
          return this.check(cE(t, r));
        },
        overwrite(t) {
          return this.check(o0(t));
        },
        optional() {
          return d5(this);
        },
        exactOptional() {
          return ce(this);
        },
        nullable() {
          return cr(this);
        },
        nullish() {
          return d5(cr(this));
        },
        nonoptional(t) {
          return cl(this, t);
        },
        array() {
          return dz(this);
        },
        or(t) {
          return dj([this, t]);
        },
        and(t) {
          return dV(this, t);
        },
        transform(t) {
          return ch(this, d7(t));
        },
        default(t) {
          return ca(this, t);
        },
        prefault(t) {
          return cu(this, t);
        },
        catch(t) {
          return cm(this, t);
        },
        pipe(t) {
          return ch(this, t);
        },
        readonly() {
          return ck(this);
        },
        describe(t) {
          let r = this.clone();
          return (as.add(r, { description: t }), r);
        },
        meta(...t) {
          if (0 === t.length) return as.get(this);
          let r = this.clone();
          return (as.add(r, t[0]), r);
        },
        isOptional() {
          return this.safeParse(void 0).success;
        },
        isNullable() {
          return this.safeParse(null).success;
        },
        apply(t, ...r) {
          return 0 === r.length ? t(this) : t(this, ...r);
        },
        get "~standard"() {
          return sV.hide(this, "~standard", {
            ...rG(this),
            jsonSchema: { input: uV(this, "input"), output: uV(this, "output") },
          });
        },
        set "~standard"(value) {
          sV.own(this, "~standard", value);
        },
        parse: function t(r, i) {
          return sK(this, r, i, { callee: t });
        },
        parseAsync: async function t(r, i) {
          return await sG(this, r, i, { callee: t });
        },
        safeParse(t, r) {
          return sX(this, t, r);
        },
        async safeParseAsync(t, r) {
          return sq(this, t, r);
        },
        get spa() {
          return this?.safeParseAsync;
        },
        set spa(value) {
          sV.own(this, "spa", value);
        },
        validate(t, r) {
          return tn(this, t, r);
        },
        validateAsync(t, r) {
          return ta(this, t, r);
        },
        encode: function t(r, i) {
          return sH(this, r, i, { callee: t });
        },
        decode: function t(r, i) {
          return sY(this, r, i, { callee: t });
        },
        encodeAsync: async function t(r, i) {
          return await sQ(this, r, i, { callee: t });
        },
        decodeAsync: async function t(r, i) {
          return await s0(this, r, i, { callee: t });
        },
        safeEncode(t, r) {
          return s1(this, t, r);
        },
        safeDecode(t, r) {
          return s4(this, t, r);
        },
        async safeEncodeAsync(t, r) {
          return s6(this, t, r);
        },
        async safeDecodeAsync(t, r) {
          return s2(this, t, r);
        },
        toJSONSchema(t) {
          return uR(this, {})(t);
        },
        get description() {
          return as.get(this)?.description;
        },
        get _def() {
          return this._zod.def;
        },
      }),
      s3 = eL(
        "_ZodString",
        (t, r) => {
          (rX.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u6(t, r, i, n)));
        },
        sV.derived(
          {
            format: (t) => uQ(t).format ?? null,
            minLength: (t) => uQ(t).minimum ?? null,
            maxLength: (t) => uQ(t).maximum ?? null,
          },
          {
            regex(...t) {
              return this.check(oJ(...t));
            },
            includes(...t) {
              return this.check(oG(...t));
            },
            startsWith(...t) {
              return this.check(oX(...t));
            },
            endsWith(...t) {
              return this.check(oq(...t));
            },
            min(...t) {
              return this.check(oF(...t));
            },
            max(...t) {
              return this.check(oM(...t));
            },
            length(...t) {
              return this.check(oB(...t));
            },
            nonempty(...t) {
              return this.check(oF(1, ...t));
            },
            lowercase(t) {
              return this.check(oW(t));
            },
            uppercase(t) {
              return this.check(oK(t));
            },
            trim() {
              return this.check(o4());
            },
            normalize(...t) {
              return this.check(o1(...t));
            },
            toLowerCase() {
              return this.check(o6());
            },
            toUpperCase() {
              return this.check(o2());
            },
            slugify() {
              return this.check(o9());
            },
          },
        ),
      ),
      s5 = eL(
        "ZodString",
        (t, r) => {
          (rX.init(t, r), s3.init(t, r));
        },
        {
          email(t) {
            return this.check(aV(la, t));
          },
          url(t) {
            return this.check(aK(lp, t));
          },
          jwt(t) {
            return this.check(ot(lH, t));
          },
          emoji(t) {
            return this.check(aG(lh, t));
          },
          guid(t) {
            return this.check(aM(lu, t));
          },
          uuid(t) {
            return this.check(aF(ll, t));
          },
          uuidv4(t) {
            return this.check(aB(ll, t));
          },
          uuidv6(t) {
            return this.check(aJ(ll, t));
          },
          uuidv7(t) {
            return this.check(aW(ll, t));
          },
          nanoid(t) {
            return this.check(aX(ly, t));
          },
          cuid(t) {
            return this.check(aq(l_, t));
          },
          cuid2(t) {
            return this.check(aH(lk, t));
          },
          ulid(t) {
            return this.check(aY(lw, t));
          },
          base64(t) {
            return this.check(a7(lV, t));
          },
          base64url(t) {
            return this.check(a3(lF, t));
          },
          xid(t) {
            return this.check(aQ(lO, t));
          },
          ksuid(t) {
            return this.check(a0(lD, t));
          },
          ipv4(t) {
            return this.check(a1(lU, t));
          },
          ipv6(t) {
            return this.check(a4(lj, t));
          },
          cidrv4(t) {
            return this.check(a2(lC, t));
          },
          cidrv6(t) {
            return this.check(a9(lL, t));
          },
          e164(t) {
            return this.check(a5(lJ, t));
          },
          datetime(t) {
            return this.check(oi(lt, t));
          },
          date(t) {
            return this.check(on(lr, t));
          },
          time(t) {
            return this.check(oa(li, t));
          },
          duration(t) {
            return this.check(oo(ln, t));
          },
        },
      );
    function s8(t) {
      return aL(s5, t);
    }
    let le = eL("ZodStringFormat", (t, r) => {
        (rq.init(t, r), s3.init(t, r));
      }),
      lt = eL("ZodISODateTime", (t, r) => {
        (io.init(t, r), le.init(t, r));
      }),
      lr = eL("ZodISODate", (t, r) => {
        (iu.init(t, r), le.init(t, r));
      }),
      li = eL("ZodISOTime", (t, r) => {
        (is.init(t, r), le.init(t, r));
      }),
      ln = eL("ZodISODuration", (t, r) => {
        (il.init(t, r), le.init(t, r));
      }),
      la = eL("ZodEmail", (t, r) => {
        (rQ.init(t, r), le.init(t, r));
      });
    function lo(t) {
      return aV(la, t);
    }
    let lu = eL("ZodGUID", (t, r) => {
      (rH.init(t, r), le.init(t, r));
    });
    function ls(t) {
      return aM(lu, t);
    }
    let ll = eL("ZodUUID", (t, r) => {
      (rY.init(t, r), le.init(t, r));
    });
    function ld(t) {
      return aF(ll, t);
    }
    function lc(t) {
      return aB(ll, t);
    }
    function lf(t) {
      return aJ(ll, t);
    }
    function lm(t) {
      return aW(ll, t);
    }
    let lp = eL("ZodURL", (t, r) => {
      (r3.init(t, r), le.init(t, r));
    });
    function lv(t) {
      return aK(lp, t);
    }
    function lg(t) {
      return aK(lp, { protocol: tK, hostname: tW, ...sV.normalizeParams(t) });
    }
    let lh = eL("ZodEmoji", (t, r) => {
      (r5.init(t, r), le.init(t, r));
    });
    function l$(t) {
      return aG(lh, t);
    }
    let ly = eL("ZodNanoID", (t, r) => {
      (r8.init(t, r), le.init(t, r));
    });
    function lb(t) {
      return aX(ly, t);
    }
    let l_ = eL("ZodCUID", (t, r) => {
      (ie.init(t, r), le.init(t, r));
    });
    function lx(t) {
      return aq(l_, t);
    }
    let lk = eL("ZodCUID2", (t, r) => {
      (it.init(t, r), le.init(t, r));
    });
    function lI(t) {
      return aH(lk, t);
    }
    let lw = eL("ZodULID", (t, r) => {
      (ir.init(t, r), le.init(t, r));
    });
    function lS(t) {
      return aY(lw, t);
    }
    let lO = eL("ZodXID", (t, r) => {
      (ii.init(t, r), le.init(t, r));
    });
    function lz(t) {
      return aQ(lO, t);
    }
    let lD = eL("ZodKSUID", (t, r) => {
      (ia.init(t, r), le.init(t, r));
    });
    function lN(t) {
      return a0(lD, t);
    }
    let lU = eL("ZodIPv4", (t, r) => {
      (id.init(t, r), le.init(t, r));
    });
    function lA(t) {
      return a1(lU, t);
    }
    let lP = eL("ZodMAC", (t, r) => {
      (iv.init(t, r), le.init(t, r));
    });
    function lZ(t) {
      return a6(lP, t);
    }
    let lj = eL("ZodIPv6", (t, r) => {
      (ip.init(t, r), le.init(t, r));
    });
    function lE(t) {
      return a4(lj, t);
    }
    let lC = eL("ZodCIDRv4", (t, r) => {
      (ig.init(t, r), le.init(t, r));
    });
    function lT(t) {
      return a2(lC, t);
    }
    let lL = eL("ZodCIDRv6", (t, r) => {
      (i$.init(t, r), le.init(t, r));
    });
    function lR(t) {
      return a9(lL, t);
    }
    let lV = eL("ZodBase64", (t, r) => {
      (i_.init(t, r), le.init(t, r));
    });
    function lM(t) {
      return a7(lV, t);
    }
    let lF = eL("ZodBase64URL", (t, r) => {
      (iI.init(t, r), le.init(t, r));
    });
    function lB(t) {
      return a3(lF, t);
    }
    let lJ = eL("ZodE164", (t, r) => {
      (iw.init(t, r), le.init(t, r));
    });
    function lW(t) {
      return a5(lJ, t);
    }
    let lK = eL("ZodCreditCard", (t, r) => {
      (iz.init(t, r), le.init(t, r));
    });
    function lG(t) {
      return a8(lK, t);
    }
    let lX = eL("ZodIBAN", (t, r) => {
      (iN.init(t, r), le.init(t, r));
    });
    function lq(t) {
      return oe(lX, t);
    }
    let lH = eL("ZodJWT", (t, r) => {
      (iA.init(t, r), le.init(t, r));
    });
    function lY(t) {
      return ot(lH, t);
    }
    let lQ = eL("ZodCustomStringFormat", (t, r) => {
      (iP.init(t, r), le.init(t, r));
    });
    function l0(t, r, i = {}) {
      return uz(lQ, t, r, i);
    }
    function l1(t) {
      return uz(lQ, "hostname", tJ, t);
    }
    function l4(t) {
      return uz(lQ, "hex", ri, t);
    }
    function l6(t) {
      return uz(lQ, "currency_code", tq, t);
    }
    function l2(t, r) {
      let i = r?.enc ?? "hex",
        n = `${t}_${i}`,
        a = sR[n];
      if (!a) throw Error(`Unrecognized hash format: ${n}`);
      return uz(lQ, n, a, r);
    }
    let l9 = eL(
      "ZodNumber",
      (t, r) => {
        (iZ.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u2(t, r, i, n)), (t.isFinite = !0));
      },
      sV.derived(
        {
          minValue: (t) => {
            let { minimum: r, exclusiveMinimum: i } = uQ(t);
            return Math.max(r ?? -1 / 0, i ?? -1 / 0);
          },
          maxValue: (t) => {
            let { maximum: r, exclusiveMaximum: i } = uQ(t);
            return Math.min(r ?? 1 / 0, i ?? 1 / 0);
          },
          isInt: (t) => {
            let { isInt: r, multipleOf: i } = uQ(t);
            return !!r || !!i?.some(Number.isSafeInteger);
          },
          format: (t) => uQ(t).format ?? null,
        },
        {
          gt(t, r) {
            return this.check(oA(t, r));
          },
          gte(t, r) {
            return this.check(oP(t, r));
          },
          min(t, r) {
            return this.check(oP(t, r));
          },
          lt(t, r) {
            return this.check(oN(t, r));
          },
          lte(t, r) {
            return this.check(oU(t, r));
          },
          max(t, r) {
            return this.check(oU(t, r));
          },
          int(t) {
            return this.check(l5(t));
          },
          safe(t) {
            return this.check(l5(t));
          },
          positive(t) {
            return this.check(oA(0, t));
          },
          nonnegative(t) {
            return this.check(oP(0, t));
          },
          negative(t) {
            return this.check(oN(0, t));
          },
          nonpositive(t) {
            return this.check(oU(0, t));
          },
          multipleOf(t, r) {
            return this.check(oT(t, r));
          },
          step(t, r) {
            return this.check(oT(t, r));
          },
          finite() {
            return this;
          },
        },
      ),
    );
    function l7(t) {
      return ou(l9, t);
    }
    let l3 = eL("ZodNumberFormat", (t, r) => {
      (ij.init(t, r), l9.init(t, r));
    });
    function l5(t) {
      return ol(l3, t);
    }
    function l8(t) {
      return od(l3, t);
    }
    function de(t) {
      return oc(l3, t);
    }
    function dt(t) {
      return of(l3, t);
    }
    function dr(t) {
      return om(l3, t);
    }
    let di = eL("ZodBoolean", (t, r) => {
      (iE.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u9(t, r, i, n)));
    });
    function dn(t) {
      return op(di, t);
    }
    let da = eL(
      "ZodBigInt",
      (t, r) => {
        (iC.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u7(t, r, i, n)));
      },
      sV.derived(
        {
          minValue: (t) => uQ(t).minimum ?? null,
          maxValue: (t) => uQ(t).maximum ?? null,
          format: (t) => uQ(t).format ?? null,
        },
        {
          gte(t, r) {
            return this.check(oP(t, r));
          },
          min(t, r) {
            return this.check(oP(t, r));
          },
          gt(t, r) {
            return this.check(oA(t, r));
          },
          lt(t, r) {
            return this.check(oN(t, r));
          },
          lte(t, r) {
            return this.check(oU(t, r));
          },
          max(t, r) {
            return this.check(oU(t, r));
          },
          positive(t) {
            return this.check(oA(BigInt(0), t));
          },
          negative(t) {
            return this.check(oN(BigInt(0), t));
          },
          nonpositive(t) {
            return this.check(oU(BigInt(0), t));
          },
          nonnegative(t) {
            return this.check(oP(BigInt(0), t));
          },
          multipleOf(t, r) {
            return this.check(oT(t, r));
          },
        },
      ),
    );
    function du(t) {
      return og(da, t);
    }
    let ds = eL("ZodBigIntFormat", (t, r) => {
      (iT.init(t, r), da.init(t, r));
    });
    function dl(t) {
      return o$(ds, t);
    }
    function dd(t) {
      return oy(ds, t);
    }
    let dc = eL("ZodSymbol", (t, r) => {
      (iL.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u3(t, r, i, n)));
    });
    function df(t) {
      return ob(dc, t);
    }
    let dm = eL("ZodUndefined", (t, r) => {
      (iR.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u8(t, r, i, n)));
    });
    function dp(t) {
      return o_(dm, t);
    }
    let dv = eL("ZodNull", (t, r) => {
      (iV.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => u5(t, r, i, n)));
    });
    function dg(t) {
      return ox(dv, t);
    }
    let dh = eL("ZodAny", (t, r) => {
      (iM.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sr(t, r, i, n)));
    });
    function d$() {
      return ok(dh);
    }
    let dy = eL("ZodUnknown", (t, r) => {
      (iF.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => si(t, r, i, n)));
    });
    function db() {
      return oI(dy);
    }
    let d_ = eL("ZodNever", (t, r) => {
      (iB.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => st(t, r, i, n)));
    });
    function dx(t) {
      return ow(d_, t);
    }
    let dk = eL("ZodVoid", (t, r) => {
      (iJ.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => se(t, r, i, n)));
    });
    function dI(t) {
      return oS(dk, t);
    }
    let dw = eL(
      "ZodDate",
      (t, r) => {
        (iW.init(t, r),
          s7.init(t, r),
          (t._zod.processJSONSchema = (r, i, n) => sn(t, r, i, n)),
          (t.min = (r, i) => t.check(oP(r, i))),
          (t.max = (r, i) => t.check(oU(r, i))));
      },
      sV.derived(
        {
          minDate: (t) => {
            let { minimum: r } = uQ(t);
            return r ? new Date(r) : null;
          },
          maxDate: (t) => {
            let { maximum: r } = uQ(t);
            return r ? new Date(r) : null;
          },
        },
        {},
      ),
    );
    function dS(t) {
      return oO(dw, t);
    }
    let dO = eL(
      "ZodArray",
      (t, r) => {
        (s9(),
          iG.init(t, r),
          s7.init(t, r),
          (t._zod.processJSONSchema = (r, i, n) => sg(t, r, i, n)),
          (t.element = r.element));
      },
      {
        min(t, r) {
          return this.check(oF(t, r));
        },
        nonempty(t) {
          return this.check(oF(1, t));
        },
        max(t, r) {
          return this.check(oM(t, r));
        },
        length(t, r) {
          return this.check(oB(t, r));
        },
        unwrap() {
          return this.element;
        },
      },
    );
    function dz(t, r) {
      return o7(dO, t, r);
    }
    function dD(t) {
      return dQ(Object.keys(t._zod.def.shape));
    }
    let dN = eL(
      "ZodObject",
      (t, r) => {
        (s9(),
          i0.init(t, r),
          s7.init(t, r),
          (t._zod.processJSONSchema = (r, i, n) => s$(t, r, i, n)),
          sV.installLazyProp(t, "shape", (t) => t._zod.def.shape, !1));
      },
      {
        keyof() {
          return dQ(Object.keys(this._zod.def.shape));
        },
        catchall(t) {
          return this.clone(sV.mergeDefs(this._zod.def, { catchall: t }));
        },
        passthrough() {
          return this.clone(sV.mergeDefs(this._zod.def, { catchall: db() }));
        },
        loose() {
          return this.clone(sV.mergeDefs(this._zod.def, { catchall: db() }));
        },
        strict() {
          return this.clone(sV.mergeDefs(this._zod.def, { catchall: dx() }));
        },
        strip() {
          return this.clone(sV.mergeDefs(this._zod.def, { catchall: void 0 }));
        },
        extend(t) {
          return sV.extend(this, t);
        },
        safeExtend(t) {
          return sV.safeExtend(this, t);
        },
        merge(t) {
          return sV.merge(this, t);
        },
        pick(t) {
          return sV.pick(this, t);
        },
        omit(t) {
          return sV.omit(this, t);
        },
        partial(...t) {
          return sV.partial(d3, this, t[0]);
        },
        exactPartial(...t) {
          return sV.partial(d8, this, t[0], "exactPartial");
        },
        required(...t) {
          return sV.required(cs, this, t[0]);
        },
      },
    );
    function dU(t, r) {
      return new dN({ type: "object", shape: t ?? {}, ...sV.normalizeParams(r) });
    }
    function dA(t, r) {
      return new dN({ type: "object", shape: t, catchall: dx(), ...sV.normalizeParams(r) });
    }
    function dP(t, r) {
      return new dN({ type: "object", shape: t, catchall: db(), ...sV.normalizeParams(r) });
    }
    let dZ = eL("ZodUnion", (t, r) => {
      (i4.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sy(t, r, i, n)), (t.options = r.options));
    });
    function dj(t, r) {
      return new dZ({ type: "union", options: t, ...sV.normalizeParams(r) });
    }
    let dE = eL("ZodXor", (t, r) => {
      (dZ.init(t, r), i2.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sy(t, r, i, n)), (t.options = r.options));
    });
    function dC(t, r) {
      return new dE({ type: "union", options: t, inclusive: !1, ...sV.normalizeParams(r) });
    }
    let dT = eL("ZodDiscriminatedUnion", (t, r) => {
      (dZ.init(t, r), i3.init(t, r));
    });
    function dL(t, r, i) {
      return new dT({ type: "union", options: r, discriminator: t, ...sV.normalizeParams(i) });
    }
    let dR = eL("ZodIntersection", (t, r) => {
      (i5.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sb(t, r, i, n)));
    });
    function dV(t, r) {
      return new dR({ type: "intersection", left: t, right: r });
    }
    let dM = eL(
      "ZodTuple",
      (t, r) => {
        (s9(), nt.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => s_(t, r, i, n)));
      },
      {
        rest(t) {
          return this.clone({ ...this._zod.def, rest: t });
        },
        partial() {
          let t = this._zod.def;
          if (t.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
          return this.clone({ ...t, items: t.items.map((t) => new d3({ type: "optional", innerType: t })) });
        },
      },
    );
    function dF(t, r, i) {
      let n = r instanceof rJ,
        a = n ? i : r;
      return new dM({ type: "tuple", items: t, rest: n ? r : null, ...sV.normalizeParams(a) });
    }
    let dB = eL("ZodRecord", (t, r) => {
      (s9(),
        na.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sk(t, r, i, n)),
        (t.keyType = r.keyType),
        (t.valueType = r.valueType));
    });
    function dJ(t, r, i) {
      return new dB(
        r && r._zod
          ? { type: "record", keyType: t, valueType: r, ...sV.normalizeParams(i) }
          : { type: "record", keyType: s8(), valueType: t, ...sV.normalizeParams(r) },
      );
    }
    function dW(t, r, i) {
      return new dB({ type: "record", keyType: t, valueType: r, ...sV.normalizeParams(i), partial: !0 });
    }
    function dK(t, r, i) {
      return new dB({ type: "record", keyType: t, valueType: r, mode: "loose", ...sV.normalizeParams(i) });
    }
    let dG = eL("ZodMap", (t, r) => {
      (s9(),
        no.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sp(t, r, i, n)),
        (t.keyType = r.keyType),
        (t.valueType = r.valueType),
        (t.min = (...r) => t.check(oR(...r))),
        (t.nonempty = (r) => t.check(oR(1, r))),
        (t.max = (...r) => t.check(oL(...r))),
        (t.size = (...r) => t.check(oV(...r))));
    });
    function dX(t, r, i) {
      return new dG({ type: "map", keyType: t, valueType: r, ...sV.normalizeParams(i) });
    }
    let dq = eL("ZodSet", (t, r) => {
      (s9(),
        ns.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sv(t, r, i, n)),
        (t.min = (...r) => t.check(oR(...r))),
        (t.nonempty = (r) => t.check(oR(1, r))),
        (t.max = (...r) => t.check(oL(...r))),
        (t.size = (...r) => t.check(oV(...r))));
    });
    function dH(t, r) {
      return new dq({ type: "set", valueType: t, ...sV.normalizeParams(r) });
    }
    let dY = eL("ZodEnum", (t, r) => {
      (nd.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sa(t, r, i, n)),
        (t.enum = r.entries),
        (t.options = [...t._zod.values]));
      let i = new Set(Object.keys(r.entries));
      ((t.extract = (t, n) => {
        let a = {};
        for (let n of t)
          if (i.has(n)) a[n] = r.entries[n];
          else throw Error(`Key ${n} not found in enum`);
        return new dY({ ...r, checks: [], ...sV.normalizeParams(n), entries: a });
      }),
        (t.exclude = (t, n) => {
          let a = { ...r.entries };
          for (let r of t)
            if (i.has(r)) delete a[r];
            else throw Error(`Key ${r} not found in enum`);
          return new dY({ ...r, checks: [], ...sV.normalizeParams(n), entries: a });
        }));
    });
    function dQ(t, r) {
      return new dY({
        type: "enum",
        entries: Array.isArray(t) ? Object.fromEntries(t.map((t) => [t, t])) : t,
        ...sV.normalizeParams(r),
      });
    }
    function d0(t, r) {
      return new dY({ type: "enum", entries: t, ...sV.normalizeParams(r) });
    }
    let d1 = eL("ZodLiteral", (t, r) => {
      (nc.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => so(t, r, i, n)),
        (t.values = new Set(r.values)),
        Object.defineProperty(t, "value", {
          get() {
            if (r.values.length > 1)
              throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return r.values[0];
          },
        }));
    });
    function d4(t, r) {
      return new d1({ type: "literal", values: Array.isArray(t) ? t : [t], ...sV.normalizeParams(r) });
    }
    let d6 = eL("ZodFile", (t, r) => {
      (nf.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sl(t, r, i, n)),
        (t.min = (r, i) => t.check(oR(r, i))),
        (t.max = (r, i) => t.check(oL(r, i))),
        (t.mime = (r, i) => t.check(oQ(Array.isArray(r) ? r : [r], i))));
    });
    function d2(t) {
      return us(d6, t);
    }
    let d9 = eL("ZodTransform", (t, r) => {
      (s9(),
        nm.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sm(t, r, i, n)),
        (t._zod.parse = (i, n) => {
          if ("backward" === n.direction) throw new eM(t.constructor.name);
          i.addIssue = (n) => {
            "string" == typeof n
              ? i.issues.push(sV.issue(n, i.value, r))
              : (n.fatal && (n.continue = !1),
                n.code ?? (n.code = "custom"),
                "input" in n || (n.input = i.value),
                n.inst ?? (n.inst = t),
                i.issues.push(sV.issue(n)));
          };
          let a = r.transform(i.value, i);
          return a instanceof Promise ? a.then((t) => ((i.value = t), i)) : ((i.value = a), i);
        }));
    });
    function d7(t) {
      return new d9({ type: "transform", transform: t });
    }
    let d3 = eL("ZodOptional", (t, r) => {
      (nv.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sZ(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function d5(t) {
      return new d3({ type: "optional", innerType: t });
    }
    let d8 = eL("ZodExactOptional", (t, r) => {
      (ng.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sZ(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function ce(t) {
      return new d8({ type: "optional", innerType: t });
    }
    let ct = eL("ZodNullable", (t, r) => {
      (nh.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sI(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function cr(t) {
      return new ct({ type: "nullable", innerType: t });
    }
    function ci(t) {
      return d5(cr(t));
    }
    let cn = eL("ZodDefault", (t, r) => {
      (n$.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sz(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType),
        (t.removeDefault = t.unwrap));
    });
    function ca(t, r) {
      return new cn({
        type: "default",
        innerType: t,
        get defaultValue() {
          return "function" == typeof r ? r() : sV.shallowClone(r);
        },
      });
    }
    let co = eL("ZodPrefault", (t, r) => {
      (nb.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sD(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function cu(t, r) {
      return new co({
        type: "prefault",
        innerType: t,
        get defaultValue() {
          return "function" == typeof r ? r() : sV.shallowClone(r);
        },
      });
    }
    let cs = eL("ZodNonOptional", (t, r) => {
      (n_.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sw(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function cl(t, r) {
      return new cs({ type: "nonoptional", innerType: t, ...sV.normalizeParams(r) });
    }
    let cd = eL("ZodSuccess", (t, r) => {
      (nk.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sd(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function cc(t) {
      return new cd({ type: "success", innerType: t });
    }
    let cf = eL("ZodCatch", (t, r) => {
      (nw.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sN(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType),
        (t.removeCatch = t.unwrap));
    });
    function cm(t, r) {
      return new cf({ type: "catch", innerType: t, catchValue: "function" == typeof r ? r : sV.constantCatch(r) });
    }
    let cp = eL("ZodNaN", (t, r) => {
      (nS.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => su(t, r, i, n)));
    });
    function cv(t) {
      return oD(cp, t);
    }
    let cg = eL("ZodPipe", (t, r) => {
      (nO.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sU(t, r, i, n)),
        (t.in = r.in),
        (t.out = r.out));
    });
    function ch(t, r) {
      return new cg({ type: "pipe", in: t, out: r });
    }
    let c$ = eL("ZodCodec", (t, r) => {
      (cg.init(t, r), nD.init(t, r));
    });
    function cy(t, r, i) {
      return new c$({ type: "pipe", in: t, out: r, transform: i.decode, reverseTransform: i.encode });
    }
    function cb(t) {
      let r = t._zod.def;
      return new c$({
        type: "pipe",
        in: r.out,
        out: r.in,
        transform: r.reverseTransform,
        reverseTransform: r.transform,
      });
    }
    let c_ = eL("ZodPreprocess", (t, r) => {
        (cg.init(t, r), nA.init(t, r));
      }),
      cx = eL("ZodReadonly", (t, r) => {
        (nP.init(t, r),
          s7.init(t, r),
          (t._zod.processJSONSchema = (r, i, n) => sA(t, r, i, n)),
          (t.unwrap = () => t._zod.def.innerType));
      });
    function ck(t) {
      return new cx({ type: "readonly", innerType: t });
    }
    let cI = eL("ZodTemplateLiteral", (t, r) => {
      (nj.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => ss(t, r, i, n)));
    });
    function cw(t, r) {
      return new cI({ type: "template_literal", parts: t, ...sV.normalizeParams(r) });
    }
    let cS = eL("ZodLazy", (t, r) => {
      (nT.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sj(t, r, i, n)),
        (t.unwrap = () => t._zod.def.getter()));
    });
    function cO(t) {
      return new cS({ type: "lazy", getter: t });
    }
    let cz = eL("ZodPromise", (t, r) => {
      (nC.init(t, r),
        s7.init(t, r),
        (t._zod.processJSONSchema = (r, i, n) => sP(t, r, i, n)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    function cD(t) {
      return new cz({ type: "promise", innerType: t });
    }
    let cN = eL("ZodFunction", (t, r) => {
      (nE.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sf(t, r, i, n)));
    });
    function cU(t) {
      return new cN({
        type: "function",
        input: Array.isArray(t?.input) ? dF(t?.input) : (t?.input ?? dz(db())),
        output: t?.output ?? db(),
      });
    }
    let cA = eL("ZodCustom", (t, r) => {
      (nL.init(t, r), s7.init(t, r), (t._zod.processJSONSchema = (r, i, n) => sc(t, r, i, n)));
    });
    function cP(t) {
      let r = new rg({ check: "custom" });
      return ((r._zod.check = t), r);
    }
    function cZ(t, r) {
      return u_(cA, t ?? (() => !0), r);
    }
    function cj(t, r = {}) {
      return ux(cA, t, r);
    }
    function cE(t, r) {
      return uk(t, r);
    }
    let cC = eL(
      "ZodInstanceOf",
      (t, r) => {
        cA.init(t, r);
      },
      {
        properties(t, r) {
          return this.check(oY(t, r));
        },
      },
    );
    function cT(t, r = {}) {
      let i = new cC({
        type: "custom",
        check: "custom",
        fn: (r) => r instanceof t,
        abort: !0,
        ...sV.normalizeParams(r),
      });
      return (
        (i._zod.bag.Class = t),
        (i._zod.check = (r) => {
          r.value instanceof t ||
            r.issues.push({
              code: "invalid_type",
              expected: t.name,
              input: r.value,
              inst: i,
              path: [...(i._zod.def.path ?? [])],
            });
        }),
        i
      );
    }
    let cL = (...t) => uO({ Codec: c$, Boolean: di, String: s5 }, ...t);
    function cR(t) {
      let r = cO(() => dj([s8(t), l7(), dn(), dg(), dz(r), dJ(s8(), r)]));
      return r;
    }
    function cV(t, r) {
      return new c_({ type: "pipe", in: d7(t), out: r });
    }
    t.s(
      [
        "ZodAny",
        0,
        dh,
        "ZodArray",
        0,
        dO,
        "ZodBase64",
        0,
        lV,
        "ZodBase64URL",
        0,
        lF,
        "ZodBigInt",
        0,
        da,
        "ZodBigIntFormat",
        0,
        ds,
        "ZodBoolean",
        0,
        di,
        "ZodCIDRv4",
        0,
        lC,
        "ZodCIDRv6",
        0,
        lL,
        "ZodCUID",
        0,
        l_,
        "ZodCUID2",
        0,
        lk,
        "ZodCatch",
        0,
        cf,
        "ZodCodec",
        0,
        c$,
        "ZodCreditCard",
        0,
        lK,
        "ZodCustom",
        0,
        cA,
        "ZodCustomStringFormat",
        0,
        lQ,
        "ZodDate",
        0,
        dw,
        "ZodDefault",
        0,
        cn,
        "ZodDiscriminatedUnion",
        0,
        dT,
        "ZodE164",
        0,
        lJ,
        "ZodEmail",
        0,
        la,
        "ZodEmoji",
        0,
        lh,
        "ZodEnum",
        0,
        dY,
        "ZodExactOptional",
        0,
        d8,
        "ZodFile",
        0,
        d6,
        "ZodFunction",
        0,
        cN,
        "ZodGUID",
        0,
        lu,
        "ZodIBAN",
        0,
        lX,
        "ZodIPv4",
        0,
        lU,
        "ZodIPv6",
        0,
        lj,
        "ZodISODate",
        0,
        lr,
        "ZodISODateTime",
        0,
        lt,
        "ZodISODuration",
        0,
        ln,
        "ZodISOTime",
        0,
        li,
        "ZodInstanceOf",
        0,
        cC,
        "ZodIntersection",
        0,
        dR,
        "ZodJWT",
        0,
        lH,
        "ZodKSUID",
        0,
        lD,
        "ZodLazy",
        0,
        cS,
        "ZodLiteral",
        0,
        d1,
        "ZodMAC",
        0,
        lP,
        "ZodMap",
        0,
        dG,
        "ZodNaN",
        0,
        cp,
        "ZodNanoID",
        0,
        ly,
        "ZodNever",
        0,
        d_,
        "ZodNonOptional",
        0,
        cs,
        "ZodNull",
        0,
        dv,
        "ZodNullable",
        0,
        ct,
        "ZodNumber",
        0,
        l9,
        "ZodNumberFormat",
        0,
        l3,
        "ZodObject",
        0,
        dN,
        "ZodOptional",
        0,
        d3,
        "ZodPipe",
        0,
        cg,
        "ZodPrefault",
        0,
        co,
        "ZodPreprocess",
        0,
        c_,
        "ZodPromise",
        0,
        cz,
        "ZodReadonly",
        0,
        cx,
        "ZodRecord",
        0,
        dB,
        "ZodSet",
        0,
        dq,
        "ZodString",
        0,
        s5,
        "ZodStringFormat",
        0,
        le,
        "ZodSuccess",
        0,
        cd,
        "ZodSymbol",
        0,
        dc,
        "ZodTemplateLiteral",
        0,
        cI,
        "ZodTransform",
        0,
        d9,
        "ZodTuple",
        0,
        dM,
        "ZodType",
        0,
        s7,
        "ZodULID",
        0,
        lw,
        "ZodURL",
        0,
        lp,
        "ZodUUID",
        0,
        ll,
        "ZodUndefined",
        0,
        dm,
        "ZodUnion",
        0,
        dZ,
        "ZodUnknown",
        0,
        dy,
        "ZodVoid",
        0,
        dk,
        "ZodXID",
        0,
        lO,
        "ZodXor",
        0,
        dE,
        "_ZodString",
        0,
        s3,
        "_default",
        0,
        ca,
        "_function",
        0,
        cU,
        "any",
        0,
        d$,
        "array",
        0,
        dz,
        "base64",
        0,
        lM,
        "base64url",
        0,
        lB,
        "bigint",
        0,
        du,
        "boolean",
        0,
        dn,
        "catch",
        0,
        cm,
        "check",
        0,
        cP,
        "cidrv4",
        0,
        lT,
        "cidrv6",
        0,
        lR,
        "codec",
        0,
        cy,
        "creditCard",
        0,
        lG,
        "cuid",
        0,
        lx,
        "cuid2",
        0,
        lI,
        "currencyCode",
        0,
        l6,
        "custom",
        0,
        cZ,
        "date",
        0,
        dS,
        "describe",
        0,
        uw,
        "discriminatedUnion",
        0,
        dL,
        "e164",
        0,
        lW,
        "email",
        0,
        lo,
        "emoji",
        0,
        l$,
        "enum",
        0,
        dQ,
        "exactOptional",
        0,
        ce,
        "file",
        0,
        d2,
        "float32",
        0,
        l8,
        "float64",
        0,
        de,
        "function",
        0,
        cU,
        "guid",
        0,
        ls,
        "hash",
        0,
        l2,
        "hex",
        0,
        l4,
        "hostname",
        0,
        l1,
        "httpUrl",
        0,
        lg,
        "iban",
        0,
        lq,
        "instanceof",
        0,
        cT,
        "int",
        0,
        l5,
        "int32",
        0,
        dt,
        "int64",
        0,
        dl,
        "intersection",
        0,
        dV,
        "invertCodec",
        0,
        cb,
        "ipv4",
        0,
        lA,
        "ipv6",
        0,
        lE,
        "json",
        0,
        cR,
        "jwt",
        0,
        lY,
        "keyof",
        0,
        dD,
        "ksuid",
        0,
        lN,
        "lazy",
        0,
        cO,
        "literal",
        0,
        d4,
        "looseObject",
        0,
        dP,
        "looseRecord",
        0,
        dK,
        "mac",
        0,
        lZ,
        "map",
        0,
        dX,
        "meta",
        0,
        uS,
        "nan",
        0,
        cv,
        "nanoid",
        0,
        lb,
        "nativeEnum",
        0,
        d0,
        "never",
        0,
        dx,
        "nonoptional",
        0,
        cl,
        "null",
        0,
        dg,
        "nullable",
        0,
        cr,
        "nullish",
        0,
        ci,
        "number",
        0,
        l7,
        "object",
        0,
        dU,
        "optional",
        0,
        d5,
        "partialRecord",
        0,
        dW,
        "pipe",
        0,
        ch,
        "prefault",
        0,
        cu,
        "preprocess",
        0,
        cV,
        "promise",
        0,
        cD,
        "readonly",
        0,
        ck,
        "record",
        0,
        dJ,
        "refine",
        0,
        cj,
        "set",
        0,
        dH,
        "strictObject",
        0,
        dA,
        "string",
        0,
        s8,
        "stringFormat",
        0,
        l0,
        "stringbool",
        0,
        cL,
        "success",
        0,
        cc,
        "superRefine",
        0,
        cE,
        "symbol",
        0,
        df,
        "templateLiteral",
        0,
        cw,
        "transform",
        0,
        d7,
        "tuple",
        0,
        dF,
        "uint32",
        0,
        dr,
        "uint64",
        0,
        dd,
        "ulid",
        0,
        lS,
        "undefined",
        0,
        dp,
        "union",
        0,
        dj,
        "unknown",
        0,
        db,
        "url",
        0,
        lv,
        "uuid",
        0,
        ld,
        "uuidv4",
        0,
        lc,
        "uuidv6",
        0,
        lf,
        "uuidv7",
        0,
        lm,
        "void",
        0,
        dI,
        "xid",
        0,
        lz,
        "xor",
        0,
        dC,
      ],
      15093,
    );
    var cM = t.i(15093);
    (t.s([], 59160),
      t.i(59160),
      t.s(
        [
          "endsWith",
          0,
          oq,
          "gt",
          0,
          oA,
          "gte",
          0,
          oP,
          "includes",
          0,
          oG,
          "length",
          0,
          oB,
          "lowercase",
          0,
          oW,
          "lt",
          0,
          oN,
          "lte",
          0,
          oU,
          "maxLength",
          0,
          oM,
          "maxSize",
          0,
          oL,
          "mime",
          0,
          oQ,
          "minLength",
          0,
          oF,
          "minSize",
          0,
          oR,
          "multipleOf",
          0,
          oT,
          "negative",
          0,
          oj,
          "nonnegative",
          0,
          oC,
          "nonpositive",
          0,
          oE,
          "normalize",
          0,
          o1,
          "overwrite",
          0,
          o0,
          "positive",
          0,
          oZ,
          "properties",
          0,
          oY,
          "property",
          0,
          oH,
          "regex",
          0,
          oJ,
          "size",
          0,
          oV,
          "slugify",
          0,
          o9,
          "startsWith",
          0,
          oX,
          "toLowerCase",
          0,
          o6,
          "toUpperCase",
          0,
          o2,
          "trim",
          0,
          o4,
          "uppercase",
          0,
          oK,
        ],
        87177,
      ));
    var cF = t.i(87177);
    (t.i(78456),
      t.i(17767),
      t.s(
        [
          "decode",
          0,
          sY,
          "decodeAsync",
          0,
          s0,
          "encode",
          0,
          sH,
          "encodeAsync",
          0,
          sQ,
          "parse",
          0,
          sK,
          "parseAsync",
          0,
          sG,
          "safeDecode",
          0,
          s4,
          "safeDecodeAsync",
          0,
          s2,
          "safeEncode",
          0,
          s1,
          "safeEncodeAsync",
          0,
          s6,
          "safeParse",
          0,
          sX,
          "safeParseAsync",
          0,
          sq,
          "validate",
          0,
          tn,
          "validateAsync",
          0,
          ta,
        ],
        93254,
      ),
      t.i(93254));
    let cB = {
      invalid_type: "invalid_type",
      too_big: "too_big",
      too_small: "too_small",
      invalid_format: "invalid_format",
      not_multiple_of: "not_multiple_of",
      unrecognized_keys: "unrecognized_keys",
      invalid_union: "invalid_union",
      invalid_key: "invalid_key",
      invalid_element: "invalid_element",
      invalid_value: "invalid_value",
      custom: "custom",
    };
    function cJ(t) {
      eB({ customError: t });
    }
    function cW() {
      return eB().customError;
    }
    (n1 || (n1 = {}),
      t.s(["ZodFirstPartyTypeKind", 0, n1, "ZodIssueCode", 0, cB, "getErrorMap", 0, cW, "setErrorMap", 0, cJ], 45357),
      t.i(45357),
      t.s(
        [
          "$brand",
          0,
          eR,
          "ZodFirstPartyTypeKind",
          0,
          n1,
          "ZodIssueCode",
          0,
          cB,
          "config",
          0,
          eB,
          "getErrorMap",
          0,
          cW,
          "setErrorMap",
          0,
          cJ,
        ],
        9709,
      ),
      t.i(9709));
    var sR = n6,
      sV = n4;
    function cK(t) {
      return oi(lt, t);
    }
    function cG(t) {
      return on(lr, t);
    }
    function cX(t) {
      return oa(li, t);
    }
    function cq(t) {
      return oo(ln, t);
    }
    (t.s(["date", 0, cG, "datetime", 0, cK, "duration", 0, cq, "time", 0, cX], 43851),
      t.i(43851),
      t.s(
        [
          "ZodISODate",
          0,
          lr,
          "ZodISODateTime",
          0,
          lt,
          "ZodISODuration",
          0,
          ln,
          "ZodISOTime",
          0,
          li,
          "date",
          0,
          cG,
          "datetime",
          0,
          cK,
          "duration",
          0,
          cq,
          "time",
          0,
          cX,
        ],
        16270,
      ));
    var cH = t.i(16270);
    let cY = { ...cM, ...cF, iso: cH },
      cQ = new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly",
      ]);
    function c0(t, r) {
      return t.map((t, i) => (i < r ? t : t.optional()));
    }
    let c1 = new Set([
        "items",
        "prefixItems",
        "additionalItems",
        "additionalProperties",
        "contains",
        "propertyNames",
        "not",
        "if",
        "then",
        "else",
        "allOf",
        "anyOf",
        "oneOf",
        "unevaluatedItems",
        "unevaluatedProperties",
        "contentSchema",
      ]),
      c4 = new Set(["properties", "patternProperties", "dependentSchemas", "dependencies", "$defs", "definitions"]);
    function c6(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        (Array.isArray(t)
          ? t.some(c6)
          : "string" == typeof t.$ref ||
            Object.entries(t).some(([t, r]) =>
              c1.has(t) ? c6(r) : !!c4.has(t) && "object" == typeof r && null !== r && Object.values(r).some(c6),
            ))
      );
    }
    function c2(t) {
      return 1 === t ? "element" : "elements";
    }
    function c9(t, r) {
      if (!1 !== t) return void 0 === t || !0 === t ? cY.any() : c3(t, r);
    }
    let c7 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/;
    function c3(t, r) {
      if ("boolean" == typeof t) return t ? cY.any() : cY.never();
      let i = (function t(r, i) {
          var n, a, o, u;
          let s;
          if (void 0 !== r.not) {
            if ("object" == typeof r.not && 0 === Object.keys(r.not).length) return cY.never();
            throw Error("not is not supported in Zod (except { not: {} } for never)");
          }
          if (void 0 !== r.unevaluatedItems) throw Error("unevaluatedItems is not supported");
          if (void 0 !== r.unevaluatedProperties) throw Error("unevaluatedProperties is not supported");
          if (void 0 !== r.if || void 0 !== r.then || void 0 !== r.else)
            throw Error("Conditional schemas (if/then/else) are not supported");
          if (void 0 !== r.dependentSchemas || void 0 !== r.dependentRequired)
            throw Error("dependentSchemas and dependentRequired are not supported");
          if (r.$ref) {
            let t = r.$ref;
            if (i.refs.has(t)) return i.refs.get(t);
            if (i.processing.has(t))
              return cY.lazy(() => {
                if (!i.refs.has(t)) throw Error(`Circular reference not resolved: ${t}`);
                return i.refs.get(t);
              });
            i.processing.add(t);
            let n = c3(
              (function (t, r) {
                if (!t.startsWith("#"))
                  throw Error("External $ref is not supported, only local refs (#/...) are allowed");
                let i = t.slice(1).split("/").filter(Boolean);
                if (0 === i.length) return r.rootSchema;
                let n = "draft-2020-12" === r.version ? "$defs" : "definitions";
                if (i[0] === n) {
                  let n = void 0 === i[1] ? void 0 : i[1].replace(/~1/g, "/").replace(/~0/g, "~");
                  if (!n || !r.defs[n]) throw Error(`Reference not found: ${t}`);
                  return r.defs[n];
                }
                throw Error(`Reference not found: ${t}`);
              })(t, i),
              i,
            );
            return (i.refs.set(t, n), i.processing.delete(t), n);
          }
          if (void 0 !== r.enum) {
            let t = r.enum;
            if ("openapi-3.0" === i.version && !0 === r.nullable && 1 === t.length && null === t[0]) return cY.null();
            if (0 === t.length) return cY.never();
            if (1 === t.length) return cY.literal(t[0]);
            if (t.every((t) => "string" == typeof t)) return cY.enum(t);
            let n = t.map((t) => cY.literal(t));
            return n.length < 2 ? n[0] : cY.union([n[0], n[1], ...n.slice(2)]);
          }
          if (void 0 !== r.const) return cY.literal(r.const);
          let l = r.type;
          if (Array.isArray(l)) {
            let n = l.map((n) => t({ ...r, type: n }, i));
            return 0 === n.length ? cY.never() : 1 === n.length ? n[0] : cY.union(n);
          }
          if (!l) return cY.any();
          switch (l) {
            case "string": {
              let t = cY.string();
              if (r.format) {
                let i = r.format;
                "email" === i
                  ? (t = t.check(cY.email()))
                  : "uri" === i || "uri-reference" === i
                    ? (t = t.check(cY.url()))
                    : "uuid" === i || "guid" === i
                      ? (t = t.check(cY.uuid()))
                      : "date-time" === i
                        ? (t = t.check(cY.iso.datetime({ offset: !0 })))
                        : "date" === i
                          ? (t = t.check(cY.iso.date()))
                          : "time" === i
                            ? (t = t.check(cY.regex(c7)))
                            : "duration" === i
                              ? (t = t.check(cY.iso.duration()))
                              : "hostname" === i
                                ? (t = t.check(cY.hostname()))
                                : "ipv4" === i
                                  ? (t = t.check(cY.ipv4()))
                                  : "ipv6" === i
                                    ? (t = t.check(cY.ipv6()))
                                    : "mac" === i
                                      ? (t = t.check(cY.mac()))
                                      : "cidr" === i
                                        ? (t = t.check(cY.cidrv4()))
                                        : "cidr-v6" === i
                                          ? (t = t.check(cY.cidrv6()))
                                          : "base64" === i
                                            ? (t = t.check(cY.base64()))
                                            : "base64url" === i
                                              ? (t = t.check(cY.base64url()))
                                              : "e164" === i
                                                ? (t = t.check(cY.e164()))
                                                : "credit_card" === i
                                                  ? (t = t.check(cY.creditCard()))
                                                  : "iban" === i
                                                    ? (t = t.check(cY.iban()))
                                                    : "jwt" === i
                                                      ? (t = t.check(cY.jwt()))
                                                      : "emoji" === i
                                                        ? (t = t.check(cY.emoji()))
                                                        : "nanoid" === i
                                                          ? (t = t.check(cY.nanoid()))
                                                          : "cuid" === i
                                                            ? (t = t.check(cY.cuid()))
                                                            : "cuid2" === i
                                                              ? (t = t.check(cY.cuid2()))
                                                              : "ulid" === i
                                                                ? (t = t.check(cY.ulid()))
                                                                : "xid" === i
                                                                  ? (t = t.check(cY.xid()))
                                                                  : "ksuid" === i && (t = t.check(cY.ksuid()));
              }
              ("number" == typeof r.minLength && (t = t.min(r.minLength)),
                "number" == typeof r.maxLength && (t = t.max(r.maxLength)),
                r.pattern && (t = t.regex(new RegExp(r.pattern))),
                (s = t));
              break;
            }
            case "number":
            case "integer": {
              let t = "integer" === l ? cY.number().int() : cY.number();
              ("number" == typeof r.minimum && !0 !== r.exclusiveMinimum && (t = t.min(r.minimum)),
                "number" == typeof r.maximum && !0 !== r.exclusiveMaximum && (t = t.max(r.maximum)),
                "number" == typeof r.exclusiveMinimum
                  ? (t = t.gt(r.exclusiveMinimum))
                  : !0 === r.exclusiveMinimum && "number" == typeof r.minimum && (t = t.gt(r.minimum)),
                "number" == typeof r.exclusiveMaximum
                  ? (t = t.lt(r.exclusiveMaximum))
                  : !0 === r.exclusiveMaximum && "number" == typeof r.maximum && (t = t.lt(r.maximum)),
                "number" == typeof r.multipleOf && (t = t.multipleOf(r.multipleOf)),
                (s = t));
              break;
            }
            case "boolean":
              s = cY.boolean();
              break;
            case "null":
              s = cY.null();
              break;
            case "object": {
              let t = {},
                o = r.properties || {},
                u = new Set(r.required || []),
                l = "object" == typeof r.additionalProperties ? c3(r.additionalProperties, i) : void 0;
              for (let [r, n] of Object.entries(o)) {
                let a = c3(n, i);
                _(t, r, u.has(r) ? a : a.optional());
              }
              if (r.patternProperties) {
                let n = r.patternProperties,
                  a = Object.keys(n),
                  o = [];
                for (let t of a) {
                  let r = c3(n[t], i),
                    a = cY.string().regex(new RegExp(t));
                  o.push(cY.looseRecord(a, r));
                }
                let u = [];
                if ((Object.keys(t).length > 0 && u.push(cY.object(t).passthrough()), u.push(...o), 0 === u.length))
                  s = cY.object({}).passthrough();
                else if (1 === u.length) s = u[0];
                else {
                  let t = cY.intersection(u[0], u[1]);
                  for (let r = 2; r < u.length; r++) t = cY.intersection(t, u[r]);
                  s = t;
                }
                if (!1 === r.additionalProperties) {
                  let r = Object.keys(t),
                    i = a.map((t) => new RegExp(t)),
                    n = s;
                  s = s.check((t) => {
                    if (!C(t.value)) return;
                    let a = [];
                    for (let n of Object.keys(t.value)) !r.includes(n) && (i.some((t) => t.test(n)) || a.push(n));
                    a.length && t.issues.push({ code: "unrecognized_keys", keys: a, input: t.value, inst: n });
                  });
                }
              } else {
                let i = cY.object(t);
                s = !1 === r.additionalProperties ? i.strict() : l ? i.catchall(l) : i.passthrough();
              }
              let d = void 0 !== r.propertyNames && !0 !== r.propertyNames,
                c = "number" == typeof r.minProperties ? r.minProperties : void 0,
                f = "number" == typeof r.maxProperties ? r.maxProperties : void 0;
              if (d || void 0 !== c || void 0 !== f) {
                let t;
                (d &&
                  (t = c3(
                    "object" == typeof r.propertyNames && void 0 === r.propertyNames.type
                      ? { type: "string", ...r.propertyNames }
                      : r.propertyNames,
                    i,
                  )),
                  (n = s),
                  (a = { keySchema: t, minProperties: c, maxProperties: f }),
                  (s = cY
                    .transform((t) => t)
                    .check((t) => {
                      let r = t.value;
                      if ("object" != typeof r || null === r || Array.isArray(r)) return;
                      let i = Object.getOwnPropertyNames(r);
                      if (
                        (void 0 !== a.minProperties &&
                          i.length < a.minProperties &&
                          t.issues.push({
                            origin: "object",
                            code: "too_small",
                            minimum: a.minProperties,
                            inclusive: !0,
                            message: `Too small: expected object to have >=${a.minProperties} properties`,
                            input: r,
                            inst: n,
                            continue: !0,
                          }),
                        void 0 !== a.maxProperties &&
                          i.length > a.maxProperties &&
                          t.issues.push({
                            origin: "object",
                            code: "too_big",
                            maximum: a.maxProperties,
                            inclusive: !0,
                            message: `Too big: expected object to have <=${a.maxProperties} properties`,
                            input: r,
                            inst: n,
                            continue: !0,
                          }),
                        a.keySchema)
                      )
                        for (let r of i) {
                          let i = a.keySchema.safeParse(r);
                          i.success ||
                            t.issues.push({
                              code: "invalid_key",
                              origin: "record",
                              issues: i.error.issues,
                              input: r,
                              path: [r],
                              continue: !0,
                            });
                        }
                    })
                    .pipe(n)));
              }
              break;
            }
            case "array": {
              let t = r.prefixItems,
                n = r.items;
              if (t && Array.isArray(t)) {
                let a = "number" == typeof r.minItems ? r.minItems : 0,
                  o = c0(
                    t.map((t) => c3(t, i)),
                    a,
                  ),
                  u = Array.isArray(n) ? void 0 : c9(n, i),
                  l = cY.tuple(o);
                ((s = u ? l.rest(u) : l),
                  "number" == typeof r.minItems && (s = s.check(cY.minLength(r.minItems))),
                  "number" == typeof r.maxItems && (s = s.check(cY.maxLength(r.maxItems))));
              } else if (Array.isArray(n)) {
                let t = "number" == typeof r.minItems ? r.minItems : 0,
                  a = c0(
                    n.map((t) => c3(t, i)),
                    t,
                  ),
                  o = c9(r.additionalItems, i),
                  u = cY.tuple(a);
                ((s = o ? u.rest(o) : u),
                  "number" == typeof r.minItems && (s = s.check(cY.minLength(r.minItems))),
                  "number" == typeof r.maxItems && (s = s.check(cY.maxLength(r.maxItems))));
              } else if (void 0 !== n) {
                let t = c3(n, i),
                  a = cY.array(t);
                ("number" == typeof r.minItems && (a = a.min(r.minItems)),
                  "number" == typeof r.maxItems && (a = a.max(r.maxItems)),
                  (s = a));
              } else s = cY.array(cY.any());
              (!0 === r.uniqueItems || void 0 !== r.contains) &&
                ((o = s),
                (u = {
                  uniqueItems: !0 === r.uniqueItems,
                  containsSchema: void 0 !== r.contains ? c3(r.contains, i) : void 0,
                  minContains: "number" == typeof r.minContains ? r.minContains : void 0,
                  maxContains: "number" == typeof r.maxContains ? r.maxContains : void 0,
                }),
                (s = cY
                  .transform((t) => t)
                  .check((t) => {
                    let r = t.value;
                    if (Array.isArray(r)) {
                      if (!0 === u.uniqueItems) {
                        let i = new Map();
                        for (let n = 0; n < r.length; n++) {
                          let a = (function t(r, i) {
                            if (null === r) return "z";
                            let n = typeof r;
                            if ("object" !== n) {
                              if ("number" === n && Number.isNaN(r)) return null;
                              let t = String(r);
                              return `${n[0]}${t.length}:${t}`;
                            }
                            if (i.has(r)) return null;
                            i.add(r);
                            try {
                              if (Array.isArray(r)) {
                                let n = [];
                                for (let a of r) {
                                  let r = t(a, i);
                                  if (null === r) return null;
                                  n.push(r);
                                }
                                return `a${n.length}:[${n.join(",")}]`;
                              }
                              let n = Object.keys(r).sort(),
                                a = [];
                              for (let o of n) {
                                let n = t(r[o], i);
                                if (null === n) return null;
                                a.push(`${o.length}:${o}=${n}`);
                              }
                              return `o${a.length}:{${a.join(",")}}`;
                            } finally {
                              i.delete(r);
                            }
                          })(r[n], new Set());
                          if (null === a) continue;
                          let o = i.get(a);
                          if (void 0 === o) {
                            i.set(a, n);
                            continue;
                          }
                          t.issues.push({
                            code: "custom",
                            message: `Array items must be unique: element at index ${n} duplicates the one at index ${o}`,
                            input: r,
                            path: [n],
                            continue: !0,
                          });
                        }
                      }
                      if (u.containsSchema) {
                        let i = u.minContains ?? 1,
                          n = void 0 !== u.maxContains ? u.maxContains + 1 : 1 / 0,
                          a = 0;
                        for (let t of r) if (u.containsSchema.safeParse(t).success && ++a >= n) break;
                        (a < i &&
                          t.issues.push({
                            code: "custom",
                            message: `Array must contain at least ${i} matching ${c2(i)}; found ${a}`,
                            input: r,
                            continue: !0,
                          }),
                          void 0 !== u.maxContains &&
                            a > u.maxContains &&
                            t.issues.push({
                              code: "custom",
                              message: `Array must contain at most ${u.maxContains} matching ${c2(u.maxContains)}`,
                              input: r,
                              continue: !0,
                            }));
                      }
                    }
                  })
                  .pipe(o)));
              break;
            }
            default:
              throw Error(`Unsupported type: ${l}`);
          }
          return s;
        })(t, r),
        n = t.type || void 0 !== t.enum || void 0 !== t.const;
      if (t.anyOf && Array.isArray(t.anyOf)) {
        let a = t.anyOf.map((t) => c3(t, r)),
          o = cY.union(a);
        i = n ? cY.intersection(i, o) : o;
      }
      if (t.oneOf && Array.isArray(t.oneOf)) {
        let a = t.oneOf.map((t) => c3(t, r)),
          o = cY.xor(a);
        i = n ? cY.intersection(i, o) : o;
      }
      if (t.allOf && Array.isArray(t.allOf))
        if (0 === t.allOf.length) i = n ? i : cY.any();
        else {
          let a = n ? i : c3(t.allOf[0], r),
            o = +!n;
          for (let i = o; i < t.allOf.length; i++) a = cY.intersection(a, c3(t.allOf[i], r));
          i = a;
        }
      (!0 === t.nullable && "openapi-3.0" === r.version && (i = cY.nullable(i)),
        !0 === t.readOnly && (i = cY.readonly(i)),
        void 0 !== t.default && (i = i.default(t.default)));
      let a = {};
      for (let r of ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"])
        r in t && (a[r] = t[r]);
      for (let r of ["contentEncoding", "contentMediaType", "contentSchema"]) r in t && (a[r] = t[r]);
      if ("object" === t.type && void 0 === t.$ref)
        for (let r of (void 0 === t.propertyNames || c6(t.propertyNames) || (a.propertyNames = t.propertyNames),
        ["minProperties", "maxProperties"]))
          void 0 !== t[r] && (a[r] = t[r]);
      if ("array" === t.type && void 0 === t.$ref)
        for (let r of (void 0 === t.contains || c6(t.contains) || (a.contains = t.contains),
        ["uniqueItems", "minContains", "maxContains"]))
          void 0 !== t[r] && (a[r] = t[r]);
      for (let r of Object.keys(t)) cQ.has(r) || _(a, r, t[r]);
      return (Object.keys(a).length > 0 && r.registry.add(i, a), t.description && (i = i.describe(t.description)), i);
    }
    let c5 = Symbol("z.visit/resolving");
    function c8(t, r) {
      let i =
          "function" == typeof r
            ? r
            : (t, i) => {
                let n = r[t._zod.def.type];
                return n ? n(t, i) : t;
              },
        n = new Map();
      return (function t(r) {
        let a = n.get(r);
        if (a === c5) return new nT({ type: "lazy", getter: () => n.get(r) });
        if (void 0 !== a) return a;
        n.set(r, c5);
        let o = (function (r) {
            let i = r._zod.def;
            switch (i.type) {
              case "object": {
                let n = i.shape,
                  a = Object.keys(n),
                  o = !1,
                  u = {};
                for (let r of a) {
                  let i = t(n[r]);
                  (i !== n[r] && (o = !0), (u[r] = i));
                }
                let s = i.catchall;
                return (
                  i.catchall && (s = t(i.catchall)) !== i.catchall && (o = !0),
                  o ? B(r, { ...i, shape: u, catchall: s }) : r
                );
              }
              case "array": {
                let n = t(i.element);
                return n === i.element ? r : B(r, { ...i, element: n });
              }
              case "tuple": {
                let n = i.items,
                  a = !1,
                  o = [];
                for (let r of n) {
                  let i = t(r);
                  (i !== r && (a = !0), o.push(i));
                }
                let u = i.rest;
                return (i.rest && (u = t(i.rest)) !== i.rest && (a = !0), a ? B(r, { ...i, items: o, rest: u }) : r);
              }
              case "record":
              case "map": {
                let n = t(i.keyType),
                  a = t(i.valueType);
                return n === i.keyType && a === i.valueType ? r : B(r, { ...i, keyType: n, valueType: a });
              }
              case "set": {
                let n = t(i.valueType);
                return n === i.valueType ? r : B(r, { ...i, valueType: n });
              }
              case "union": {
                let n = i.options,
                  a = !1,
                  o = [];
                for (let r of n) {
                  let i = t(r);
                  (i !== r && (a = !0), o.push(i));
                }
                return a ? B(r, { ...i, options: o }) : r;
              }
              case "intersection": {
                let n = t(i.left),
                  a = t(i.right);
                return n === i.left && a === i.right ? r : B(r, { ...i, left: n, right: a });
              }
              case "optional":
              case "nullable":
              case "default":
              case "prefault":
              case "catch":
              case "readonly":
              case "nonoptional":
              case "promise":
              case "success": {
                let n = t(i.innerType);
                return n === i.innerType ? r : B(r, { ...i, innerType: n });
              }
              case "pipe": {
                let n = t(i.in),
                  a = t(i.out);
                return n === i.in && a === i.out ? r : B(r, { ...i, in: n, out: a });
              }
              case "function": {
                let n = t(i.input),
                  a = t(i.output);
                return n === i.input && a === i.output ? r : B(r, { ...i, input: n, output: a });
              }
              case "lazy": {
                let n = i.getter,
                  { _cachedInner: a, ...o } = i;
                return B(r, { ...o, getter: () => t(n()) });
              }
              default:
                return r;
            }
          })(r),
          u = i(o, o !== r);
        return (n.set(r, u), u);
      })(t);
    }
    function fe(t) {
      return (function (t, r) {
        if (!r?.length) return t;
        let i = t._zod.def;
        return B(t, O(i, { checks: [...(i.checks ?? []), ...r] }), { parent: !0 });
      })(t.out, t.checks);
    }
    t.s(
      [
        "bigint",
        0,
        function (t) {
          return oh(da, t);
        },
        "boolean",
        0,
        function (t) {
          return ov(di, t);
        },
        "date",
        0,
        function (t) {
          return oz(dw, t);
        },
        "number",
        0,
        function (t) {
          return os(l9, t);
        },
        "string",
        0,
        function (t) {
          return aR(s5, t);
        },
      ],
      57716,
    );
    var ft = t.i(57716);
    t.s(
      [
        "$brand",
        0,
        eR,
        "$input",
        0,
        aa,
        "$output",
        0,
        an,
        "INVALID",
        0,
        al,
        "NEVER",
        0,
        eE,
        "TimePrecision",
        0,
        or,
        "ZodAny",
        0,
        dh,
        "ZodArray",
        0,
        dO,
        "ZodBase64",
        0,
        lV,
        "ZodBase64URL",
        0,
        lF,
        "ZodBigInt",
        0,
        da,
        "ZodBigIntFormat",
        0,
        ds,
        "ZodBoolean",
        0,
        di,
        "ZodCIDRv4",
        0,
        lC,
        "ZodCIDRv6",
        0,
        lL,
        "ZodCUID",
        0,
        l_,
        "ZodCUID2",
        0,
        lk,
        "ZodCatch",
        0,
        cf,
        "ZodCodec",
        0,
        c$,
        "ZodCompileAsyncError",
        0,
        ac,
        "ZodCompileUnsupportedError",
        0,
        af,
        "ZodCreditCard",
        0,
        lK,
        "ZodCustom",
        0,
        cA,
        "ZodCustomStringFormat",
        0,
        lQ,
        "ZodDate",
        0,
        dw,
        "ZodDefault",
        0,
        cn,
        "ZodDiscriminatedUnion",
        0,
        dT,
        "ZodE164",
        0,
        lJ,
        "ZodEmail",
        0,
        la,
        "ZodEmoji",
        0,
        lh,
        "ZodEnum",
        0,
        dY,
        "ZodError",
        0,
        sJ,
        "ZodExactOptional",
        0,
        d8,
        "ZodFile",
        0,
        d6,
        "ZodFirstPartyTypeKind",
        0,
        n1,
        "ZodFunction",
        0,
        cN,
        "ZodGUID",
        0,
        lu,
        "ZodIBAN",
        0,
        lX,
        "ZodIPv4",
        0,
        lU,
        "ZodIPv6",
        0,
        lj,
        "ZodISODate",
        0,
        lr,
        "ZodISODateTime",
        0,
        lt,
        "ZodISODuration",
        0,
        ln,
        "ZodISOTime",
        0,
        li,
        "ZodInstanceOf",
        0,
        cC,
        "ZodIntersection",
        0,
        dR,
        "ZodIssueCode",
        0,
        cB,
        "ZodJWT",
        0,
        lH,
        "ZodKSUID",
        0,
        lD,
        "ZodLazy",
        0,
        cS,
        "ZodLiteral",
        0,
        d1,
        "ZodMAC",
        0,
        lP,
        "ZodMap",
        0,
        dG,
        "ZodNaN",
        0,
        cp,
        "ZodNanoID",
        0,
        ly,
        "ZodNever",
        0,
        d_,
        "ZodNonOptional",
        0,
        cs,
        "ZodNull",
        0,
        dv,
        "ZodNullable",
        0,
        ct,
        "ZodNumber",
        0,
        l9,
        "ZodNumberFormat",
        0,
        l3,
        "ZodObject",
        0,
        dN,
        "ZodOptional",
        0,
        d3,
        "ZodPipe",
        0,
        cg,
        "ZodPrefault",
        0,
        co,
        "ZodPreprocess",
        0,
        c_,
        "ZodPromise",
        0,
        cz,
        "ZodReadonly",
        0,
        cx,
        "ZodRealError",
        0,
        sW,
        "ZodRecord",
        0,
        dB,
        "ZodSet",
        0,
        dq,
        "ZodString",
        0,
        s5,
        "ZodStringFormat",
        0,
        le,
        "ZodSuccess",
        0,
        cd,
        "ZodSymbol",
        0,
        dc,
        "ZodTemplateLiteral",
        0,
        cI,
        "ZodTransform",
        0,
        d9,
        "ZodTuple",
        0,
        dM,
        "ZodType",
        0,
        s7,
        "ZodULID",
        0,
        lw,
        "ZodURL",
        0,
        lp,
        "ZodUUID",
        0,
        ll,
        "ZodUndefined",
        0,
        dm,
        "ZodUnion",
        0,
        dZ,
        "ZodUnknown",
        0,
        dy,
        "ZodVoid",
        0,
        dk,
        "ZodXID",
        0,
        lO,
        "ZodXor",
        0,
        dE,
        "_ZodString",
        0,
        s3,
        "_default",
        0,
        ca,
        "_function",
        0,
        cU,
        "any",
        0,
        d$,
        "array",
        0,
        dz,
        "base64",
        0,
        lM,
        "base64url",
        0,
        lB,
        "bigint",
        0,
        du,
        "boolean",
        0,
        dn,
        "catch",
        0,
        cm,
        "check",
        0,
        cP,
        "cidrv4",
        0,
        lT,
        "cidrv6",
        0,
        lR,
        "clone",
        0,
        B,
        "codec",
        0,
        cy,
        "coerce",
        0,
        ft,
        "compile",
        0,
        am,
        "config",
        0,
        eB,
        "core",
        0,
        sL,
        "creditCard",
        0,
        lG,
        "cuid",
        0,
        lx,
        "cuid2",
        0,
        lI,
        "currencyCode",
        0,
        l6,
        "custom",
        0,
        cZ,
        "date",
        0,
        dS,
        "decode",
        0,
        sY,
        "decodeAsync",
        0,
        s0,
        "deepPartial",
        0,
        function (t) {
          return c8(t, {
            object: (t) => t.partial(),
            union: (t) => {
              let r = t._zod.def;
              return void 0 === r.discriminator ? t : dj(r.options);
            },
          });
        },
        "describe",
        0,
        uw,
        "discriminatedUnion",
        0,
        dL,
        "e164",
        0,
        lW,
        "email",
        0,
        lo,
        "emoji",
        0,
        l$,
        "encode",
        0,
        sH,
        "encodeAsync",
        0,
        sQ,
        "endsWith",
        0,
        oq,
        "enum",
        0,
        dQ,
        "exactOptional",
        0,
        ce,
        "file",
        0,
        d2,
        "flattenError",
        0,
        eH,
        "float32",
        0,
        l8,
        "float64",
        0,
        de,
        "formatError",
        0,
        eY,
        "fromJSONSchema",
        0,
        function (t, r) {
          var i, n;
          let a, o;
          if ("boolean" == typeof t) return t ? cY.any() : cY.never();
          try {
            a = JSON.parse(JSON.stringify(t));
          } catch {
            throw Error(
              "fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas",
            );
          }
          let u = {
            version:
              ((i = a),
              (n = r?.defaultTarget),
              "https://json-schema.org/draft/2020-12/schema" === (o = i.$schema)
                ? "draft-2020-12"
                : "http://json-schema.org/draft-07/schema#" === o
                  ? "draft-7"
                  : "http://json-schema.org/draft-04/schema#" === o
                    ? "draft-4"
                    : (n ?? "draft-2020-12")),
            defs: a.$defs || a.definitions || {},
            refs: new Map(),
            processing: new Set(),
            rootSchema: a,
            registry: r?.registry ?? as,
          };
          return c3(a, u);
        },
        "function",
        0,
        cU,
        "getDiscriminatedOption",
        0,
        i9,
        "getErrorMap",
        0,
        cW,
        "globalRegistry",
        0,
        as,
        "gt",
        0,
        oA,
        "gte",
        0,
        oP,
        "guid",
        0,
        ls,
        "hash",
        0,
        l2,
        "hex",
        0,
        l4,
        "hostname",
        0,
        l1,
        "httpUrl",
        0,
        lg,
        "iban",
        0,
        lq,
        "includes",
        0,
        oG,
        "input",
        0,
        function (t) {
          return c8(t, {
            pipe: (t) => {
              var r;
              return (r = t._zod.def).in._zod.traits.has("$ZodTransform") ? fe(r) : r.in;
            },
            default: (t, r) => (r ? d5(t._zod.def.innerType) : t),
            catch: (t, r) => (r ? t._zod.def.innerType : t),
          });
        },
        "instanceof",
        0,
        cT,
        "int",
        0,
        l5,
        "int32",
        0,
        dt,
        "int64",
        0,
        dl,
        "intersection",
        0,
        dV,
        "invertCodec",
        0,
        cb,
        "ipv4",
        0,
        lA,
        "ipv6",
        0,
        lE,
        "iso",
        0,
        cH,
        "json",
        0,
        cR,
        "jwt",
        0,
        lY,
        "keyof",
        0,
        dD,
        "ksuid",
        0,
        lN,
        "lazy",
        0,
        cO,
        "length",
        0,
        oB,
        "literal",
        0,
        d4,
        "locales",
        0,
        ai,
        "looseObject",
        0,
        dP,
        "looseRecord",
        0,
        dK,
        "lowercase",
        0,
        oW,
        "lt",
        0,
        oN,
        "lte",
        0,
        oU,
        "mac",
        0,
        lZ,
        "map",
        0,
        dX,
        "maxLength",
        0,
        oM,
        "maxSize",
        0,
        oL,
        "memoizer",
        0,
        nH,
        "meta",
        0,
        uS,
        "mime",
        0,
        oQ,
        "minLength",
        0,
        oF,
        "minSize",
        0,
        oR,
        "multipleOf",
        0,
        oT,
        "nan",
        0,
        cv,
        "nanoid",
        0,
        lb,
        "nativeEnum",
        0,
        d0,
        "negative",
        0,
        oj,
        "never",
        0,
        dx,
        "nonnegative",
        0,
        oC,
        "nonoptional",
        0,
        cl,
        "nonpositive",
        0,
        oE,
        "normalize",
        0,
        o1,
        "null",
        0,
        dg,
        "nullable",
        0,
        cr,
        "nullish",
        0,
        ci,
        "number",
        0,
        l7,
        "object",
        0,
        dU,
        "optional",
        0,
        d5,
        "output",
        0,
        function (t) {
          return c8(t, { pipe: (t) => fe(t._zod.def), prefault: (t, r) => (r ? t._zod.def.innerType : t) });
        },
        "overwrite",
        0,
        o0,
        "parse",
        0,
        sK,
        "parseAsync",
        0,
        sG,
        "partialRecord",
        0,
        dW,
        "pipe",
        0,
        ch,
        "positive",
        0,
        oZ,
        "prefault",
        0,
        cu,
        "preprocess",
        0,
        cV,
        "prettifyError",
        0,
        e1,
        "promise",
        0,
        cD,
        "properties",
        0,
        oY,
        "property",
        0,
        oH,
        "readonly",
        0,
        ck,
        "record",
        0,
        dJ,
        "refine",
        0,
        cj,
        "regex",
        0,
        oJ,
        "regexes",
        () => sR,
        "registry",
        0,
        au,
        "safeDecode",
        0,
        s4,
        "safeDecodeAsync",
        0,
        s2,
        "safeEncode",
        0,
        s1,
        "safeEncodeAsync",
        0,
        s6,
        "safeParse",
        0,
        sX,
        "safeParseAsync",
        0,
        sq,
        "set",
        0,
        dH,
        "setErrorMap",
        0,
        cJ,
        "size",
        0,
        oV,
        "slugify",
        0,
        o9,
        "startsWith",
        0,
        oX,
        "strictObject",
        0,
        dA,
        "string",
        0,
        s8,
        "stringFormat",
        0,
        l0,
        "stringbool",
        0,
        cL,
        "success",
        0,
        cc,
        "superRefine",
        0,
        cE,
        "symbol",
        0,
        df,
        "templateLiteral",
        0,
        cw,
        "toJSONSchema",
        0,
        sC,
        "toLowerCase",
        0,
        o6,
        "toUpperCase",
        0,
        o2,
        "toZod",
        0,
        o,
        "transform",
        0,
        d7,
        "treeifyError",
        0,
        eQ,
        "trim",
        0,
        o4,
        "tuple",
        0,
        dF,
        "uint32",
        0,
        dr,
        "uint64",
        0,
        dd,
        "ulid",
        0,
        lS,
        "undefined",
        0,
        dp,
        "union",
        0,
        dj,
        "unknown",
        0,
        db,
        "uppercase",
        0,
        oK,
        "url",
        0,
        lv,
        "util",
        () => sV,
        "uuid",
        0,
        ld,
        "uuidv4",
        0,
        lc,
        "uuidv6",
        0,
        lf,
        "uuidv7",
        0,
        lm,
        "validate",
        0,
        tn,
        "validateAsync",
        0,
        ta,
        "void",
        0,
        dI,
        "withParser",
        0,
        ap,
        "xid",
        0,
        lz,
        "xor",
        0,
        dC,
      ],
      88807,
    );
    var fr = t.i(88807);
    t.s(["z", 0, fr], 11845);
  },
  40735,
  56771,
  94136,
  52517,
  19709,
  47223,
  55763,
  62266,
  78467,
  65260,
  37199,
  94024,
  53851,
  96496,
  91730,
  1857,
  41598,
  74361,
  13908,
  60711,
  (t) => {
    "use strict";
    (t.s([], 40120), t.i(40120));
    var r = t.i(47452),
      i = t.i(74725);
    let n = r.createContext(void 0);
    function a(t) {
      let a = r.useContext(n);
      if (!t && void 0 === a) throw Error((0, i.default)(27));
      return a;
    }
    t.s(["DialogRootContext", 0, n, "useDialogRootContext", 0, a], 56771);
    var o = t.i(79331),
      u = t.i(32948);
    let s = r.forwardRef(function (t, r) {
      let { render: i, className: n, style: s, forceRender: l = !1, ...d } = t,
        c = a(),
        f = c.useState("open"),
        m = c.useState("nested"),
        p = c.useState("mounted"),
        v = c.useState("transitionStatus");
      return (0, o.useRenderElement)("div", t, {
        state: { open: f, transitionStatus: v },
        ref: [c.context.backdropRef, r],
        stateAttributesMapping: u.popupTransitionStateMapping,
        props: [{ role: "presentation", hidden: !p, style: { userSelect: "none", WebkitUserSelect: "none" } }, d],
        enabled: l || !m,
      });
    });
    var l = t.i(7406),
      d = t.i(38745),
      c = t.i(91697);
    let f = r.forwardRef(function (t, r) {
      let { render: i, className: n, style: u, disabled: s = !1, nativeButton: f = !0, ...m } = t,
        p = a(),
        v = p.useState("open"),
        { getButtonProps: g, buttonRef: h } = (0, l.useButton)({ disabled: s, native: f });
      return (0, o.useRenderElement)("button", t, {
        state: { disabled: s },
        ref: [r, h],
        props: [
          {
            onClick: function (t) {
              v && p.setOpen(!1, (0, d.createChangeEventDetails)(c.REASONS.closePress, t.nativeEvent));
            },
          },
          m,
          g,
        ],
      });
    });
    t.s(["DialogClose", 0, f], 94136);
    var m = t.i(84092);
    let p = r.forwardRef(function (t, r) {
      let { render: i, className: n, style: u, id: s, ...l } = t,
        d = a(),
        c = (0, m.useBaseUiId)(s);
      return (
        d.useSyncedValueWithCleanup("descriptionElementId", c),
        (0, o.useRenderElement)("p", t, { ref: r, props: [{ id: c }, l] })
      );
    });
    t.s(["DialogDescription", 0, p], 52517);
    var v = t.i(65079),
      g = t.i(72765),
      h = t.i(13191),
      $ = t.i(12084),
      y = t.i(86942),
      b = t.i(56232),
      _ = t.i(75235),
      x = t.i(64032),
      k = t.i(47035),
      I = t.i(86429),
      w = t.i(46746),
      S = t.i(60309),
      O = t.i(70487),
      z = t.i(80841),
      D = t.i(11978),
      N = t.i(27309),
      U = t.i(4845),
      A = t.i(54248),
      P = t.i(53441),
      Z = t.i(97879),
      j = t.i(86228);
    let E = 0;
    function C(t, r = {}) {
      let { preventScroll: i = !1, sync: n = !1, shouldFocus: a } = r;
      function o() {
        (!a || a()) && t?.focus({ preventScroll: i });
      }
      if ((cancelAnimationFrame(E), n)) return (o(), j.NOOP);
      let u = requestAnimationFrame(o);
      return (
        (E = u),
        () => {
          E === u && (cancelAnimationFrame(u), (E = 0));
        }
      );
    }
    t.s(["enqueueFocus", 0, C], 19709);
    let T = { inert: new WeakMap(), "aria-hidden": new WeakMap() },
      L = "data-base-ui-inert",
      R = { inert: new WeakSet(), "aria-hidden": new WeakSet() },
      V = new WeakMap(),
      M = 0,
      F = (t, r) =>
        r
          .map((r) => {
            if (t.contains(r)) return r;
            let i = (function t(r) {
              return r ? ((0, v.isShadowRoot)(r) ? r.host : t(r.parentNode)) : null;
            })(r);
            return t.contains(i) ? i : null;
          })
          .filter((t) => null != t),
      B = (t) => {
        let r = new Set();
        return (
          t.forEach((t) => {
            let i = t;
            for (; i && !r.has(i);) (r.add(i), (i = i.parentNode));
          }),
          r
        );
      },
      J = (t, r, i) => {
        let n = [],
          a = (t) => {
            !t ||
              i.has(t) ||
              Array.from(t.children).forEach((t) => {
                "script" !== (0, v.getNodeName)(t) && (r.has(t) ? a(t) : n.push(t));
              });
          };
        return (a(t), n);
      };
    function W(t, r = {}) {
      let { ariaHidden: i = !1, inert: n = !1, mark: a = !0 } = r,
        o = (0, w.ownerDocument)(t[0]).body;
      return (function (t, r, i, n, { mark: a = !0 }) {
        let o = null;
        n ? (o = "inert") : i && (o = "aria-hidden");
        let u = null,
          s = null,
          l = F(r, t),
          d = a ? J(r, B(l), new Set(l)) : [],
          c = [],
          f = [];
        if (o) {
          let t = T[o],
            i = R[o];
          ((s = i), (u = t));
          let n = F(r, Array.from(r.querySelectorAll("[aria-live]"))),
            a = l.concat(n);
          J(r, B(a), new Set(a)).forEach((r) => {
            let n = r.getAttribute(o),
              a = null !== n && "false" !== n,
              u = (t.get(r) || 0) + 1;
            (t.set(r, u), c.push(r), 1 === u && a && i.add(r), a || r.setAttribute(o, "inert" === o ? "" : "true"));
          });
        }
        return (
          a &&
            d.forEach((t) => {
              let r = (V.get(t) || 0) + 1;
              (V.set(t, r), f.push(t), 1 === r && t.setAttribute(L, ""));
            }),
          (M += 1),
          () => {
            (u &&
              c.forEach((t) => {
                let r = (u.get(t) || 0) - 1;
                (u.set(t, r), r || (!s?.has(t) && o && t.removeAttribute(o), s?.delete(t)));
              }),
              a &&
                f.forEach((t) => {
                  let r = (V.get(t) || 0) - 1;
                  (V.set(t, r), r || t.removeAttribute(L));
                }),
              (M -= 1) ||
                ((T.inert = new WeakMap()),
                (T["aria-hidden"] = new WeakMap()),
                (R.inert = new WeakSet()),
                (R["aria-hidden"] = new WeakSet()),
                (V = new WeakMap())));
          }
        );
      })(t, o, i, n, { mark: a });
    }
    var K = t.i(53619),
      G = t.i(42701),
      X = t.i(86586),
      q = t.i(8942),
      H = t.i(21935);
    let Y = [];
    function Q() {
      Y = Y.filter((t) => t.deref()?.isConnected);
    }
    function ee(t) {
      (Q(), t && "body" !== (0, v.getNodeName)(t) && (Y.push(new WeakRef(t)), Y.length > 20 && (Y = Y.slice(-20))));
    }
    function et() {
      return (Q(), Y[Y.length - 1]?.deref());
    }
    function er(t) {
      if (
        (t.hasAttribute("tabindex") && !t.hasAttribute("data-tabindex")) ||
        !t.getAttribute("role")?.includes("dialog")
      )
        return;
      let r = (0, U.focusable)(t).filter((t) => {
          let r = t.getAttribute("data-tabindex") || "";
          return (0, U.isTabbable)(t) || (t.hasAttribute("data-tabindex") && !r.startsWith("-"));
        }),
        i = t.getAttribute("tabindex");
      0 === r.length
        ? "0" !== i && (t.setAttribute("tabindex", "0"), t.setAttribute("data-tabindex", "0"))
        : ("-1" !== i || (t.hasAttribute("data-tabindex") && "-1" !== t.getAttribute("data-tabindex"))) &&
          (t.setAttribute("tabindex", "-1"), t.setAttribute("data-tabindex", "-1"));
    }
    function ei(t) {
      let {
          context: i,
          children: n,
          disabled: a = !1,
          initialFocus: o = !0,
          returnFocus: u = !0,
          restoreFocus: s = !1,
          modal: l = !0,
          closeOnFocusOut: f = !0,
          openInteractionType: m = "",
          nextFocusableElement: p,
          previousFocusableElement: j,
          beforeContentFocusGuardRef: E,
          externalTree: T,
          getInsideElements: L,
        } = t,
        R = "rootStore" in i ? i.rootStore : i,
        V = R.useState("open"),
        M = R.useState("domReferenceElement"),
        F = R.useState("floatingElement"),
        { events: B, dataRef: J } = R.context,
        Y = (0, b.useStableCallback)(() => J.current.floatingContext?.nodeId),
        ei = (0, D.isTypeableCombobox)(M) && !1 === o,
        en = (0, y.useValueAsRef)(o),
        ea = (0, y.useValueAsRef)(u),
        eo = (0, y.useValueAsRef)(m),
        eu = (0, y.useValueAsRef)(V),
        es = (0, G.useFloatingTree)(T),
        el = (0, K.usePortalContext)(),
        ed = r.useRef(!1),
        ec = r.useRef(!1),
        ef = r.useRef(!1),
        em = r.useRef(null),
        ep = r.useRef(""),
        ev = r.useRef(""),
        eg = r.useRef(null),
        eh = r.useRef(null),
        e$ = (0, $.useMergedRefs)(eg, E, el?.beforeInsideRef),
        ey = (0, $.useMergedRefs)(eh, el?.afterInsideRef),
        eb = (0, x.useTimeout)(),
        e_ = (0, x.useTimeout)(),
        ex = (0, I.useAnimationFrame)(),
        ek = null != el,
        eI = (0, D.getFloatingFocusElement)(F),
        ew = (0, b.useStableCallback)((t = eI) => (t ? (0, U.tabbable)(t) : [])),
        eS = (0, b.useStableCallback)(() => L?.().filter((t) => null != t) ?? []);
      (r.useEffect(() => {
        if (a || !l) return;
        let t = (0, w.ownerDocument)(eI);
        return (0, g.addEventListener)(t, "keydown", function (t) {
          "Tab" === t.key &&
            (0, z.contains)(eI, (0, z.activeElement)((0, w.ownerDocument)(eI))) &&
            0 === ew().length &&
            !ei &&
            (0, N.stopEvent)(t);
        });
      }, [a, eI, l, ei, ew]),
        r.useEffect(() => {
          if (a || !V) return;
          let t = (0, w.ownerDocument)(eI);
          function r() {
            ef.current = !1;
          }
          return (0, h.mergeCleanups)(
            (0, g.addEventListener)(
              t,
              "pointerdown",
              function (t) {
                let r = (0, z.getTarget)(t),
                  i = eS();
                ((ef.current = !(
                  (0, z.contains)(F, r) ||
                  (0, z.contains)(M, r) ||
                  (0, z.contains)(el?.portalNode, r) ||
                  i.some((t) => t === r || (0, z.contains)(t, r))
                )),
                  (ev.current = t.pointerType || "keyboard"),
                  r?.closest(`[${X.CLICK_TRIGGER_IDENTIFIER}]`) &&
                    ((ec.current = !0),
                    e_.start(0, () => {
                      ec.current = !1;
                    })));
              },
              !0,
            ),
            (0, g.addEventListener)(t, "pointerup", r, !0),
            (0, g.addEventListener)(t, "pointercancel", r, !0),
            (0, g.addEventListener)(
              t,
              "keydown",
              function () {
                ev.current = "keyboard";
              },
              !0,
            ),
            r,
          );
        }, [a, F, M, eI, V, el, e_, eS]),
        r.useEffect(() => {
          if (a || !f) return;
          let t = (0, w.ownerDocument)(eI);
          function r(r) {
            let i = r.relatedTarget,
              n = r.currentTarget,
              a = (0, z.getTarget)(r);
            (l && null == i && null != a && (0, z.contains)(F, a) && ee(a),
              queueMicrotask(() => {
                let o = Y(),
                  u = R.context.triggerElements,
                  f = eS(),
                  m =
                    i?.hasAttribute((0, Z.createAttribute)("focus-guard")) &&
                    [
                      eg.current,
                      eh.current,
                      el?.beforeInsideRef.current,
                      el?.afterInsideRef.current,
                      el?.beforeOutsideRef.current,
                      el?.afterOutsideRef.current,
                      (0, q.resolveRef)(j),
                      (0, q.resolveRef)(p),
                    ].includes(i),
                  g = !(
                    (0, z.contains)(M, i) ||
                    (0, z.contains)(F, i) ||
                    (0, z.contains)(i, F) ||
                    (0, z.contains)(el?.portalNode, i) ||
                    f.some((t) => t === i || (0, z.contains)(t, i)) ||
                    u.hasMatchingElement((t) => (0, z.contains)(t, i)) ||
                    m ||
                    (es &&
                      ((0, A.getNodeChildren)(es.nodesRef.current, o).find(
                        (t) =>
                          (0, z.contains)(t.context?.elements.floating, i) ||
                          (0, z.contains)(t.context?.elements.domReference, i),
                      ) ||
                        (0, A.getNodeAncestors)(es.nodesRef.current, o).find(
                          (t) =>
                            [
                              t.context?.elements.floating,
                              (0, D.getFloatingFocusElement)(t.context?.elements.floating),
                            ].includes(i) || t.context?.elements.domReference === i,
                        )))
                  );
                if (
                  (n === M && eI && er(eI),
                  s && n !== M && !(0, P.isElementVisible)(a) && (0, z.activeElement)(t) === t.body)
                ) {
                  if ((0, v.isHTMLElement)(eI) && (eI.focus(), "popup" === s))
                    return void ex.request(() => {
                      eI.focus();
                    });
                  let t = ew(),
                    r = em.current,
                    i = (r && t.includes(r) ? r : null) || t[t.length - 1] || eI;
                  (0, v.isHTMLElement)(i) && i.focus();
                }
                if (J.current.insideReactTree) {
                  J.current.insideReactTree = !1;
                  return;
                }
                (ei || !l) &&
                  i &&
                  g &&
                  !ec.current &&
                  (ei || i !== et()) &&
                  ((ed.current = !0), R.setOpen(!1, (0, d.createChangeEventDetails)(c.REASONS.focusOut, r)));
              }));
          }
          let i = (0, v.isHTMLElement)(M) ? M : null;
          if (F || i)
            return (0, h.mergeCleanups)(
              i && (0, g.addEventListener)(i, "focusout", r),
              i &&
                (0, g.addEventListener)(i, "pointerdown", function () {
                  ((ec.current = !0),
                    e_.start(0, () => {
                      ec.current = !1;
                    }));
                }),
              F &&
                (0, g.addEventListener)(F, "focusin", function (t) {
                  let r = (0, z.getTarget)(t);
                  (0, U.isTabbable)(r) && (em.current = r);
                }),
              F && (0, g.addEventListener)(F, "focusout", r),
              F &&
                el &&
                (0, g.addEventListener)(
                  F,
                  "focusout",
                  function () {
                    ef.current ||
                      ((J.current.insideReactTree = !0),
                      eb.start(0, () => {
                        J.current.insideReactTree = !1;
                      }));
                  },
                  !0,
                ),
            );
        }, [a, M, F, eI, l, es, el, R, f, s, ew, ei, Y, J, eb, e_, ex, p, j, eS]),
        r.useEffect(() => {
          if (a || !F || !V) return;
          let t = Array.from(el?.portalNode?.querySelectorAll(`[${(0, Z.createAttribute)("portal")}]`) || []),
            r = es ? (0, A.getNodeAncestors)(es.nodesRef.current, Y()) : [],
            i = r.find((t) => (0, D.isTypeableCombobox)(t.context?.elements.domReference || null))?.context?.elements
              .domReference,
            n = W(
              [
                F,
                ...t,
                eg.current,
                eh.current,
                el?.beforeOutsideRef.current,
                el?.afterOutsideRef.current,
                ...eS(),
                i,
                (0, q.resolveRef)(j),
                (0, q.resolveRef)(p),
                ei ? M : null,
              ].filter((t) => null != t),
              { ariaHidden: l || ei, mark: !1 },
            ),
            o = W([F, ...t].filter((t) => null != t));
          return () => {
            (o(), n());
          };
        }, [V, a, M, F, l, el, ei, es, Y, p, j, eS]),
        (0, _.useIsoLayoutEffect)(() => {
          if (!V || a || !(0, v.isHTMLElement)(eI)) return;
          ((ep.current = ""), (ev.current = ""));
          let t = (0, w.ownerDocument)(eI),
            r = (0, z.activeElement)(t);
          queueMicrotask(() => {
            let i,
              n = en.current,
              a = "function" == typeof n ? n(eo.current || "") : n;
            if (void 0 === a || !1 === a || (0, z.contains)(eI, r)) return;
            let o = null,
              u = () => (null == o && (o = ew(eI)), o[0] || eI);
            i = (i = !0 === a || null === a ? u() : (0, q.resolveRef)(a)) || u();
            let s = (0, z.contains)(eI, (0, z.activeElement)(t));
            C(i, {
              preventScroll: i === eI,
              shouldFocus() {
                if (!eu.current) return !1;
                if (s) return !0;
                let r = (0, z.activeElement)(t);
                return !(r !== i && (0, z.contains)(eI, r));
              },
            });
          });
        }, [a, V, eI, ew, en, eo, eu]),
        (0, _.useIsoLayoutEffect)(() => {
          if (a || !eI) return;
          let t = (0, w.ownerDocument)(eI),
            r = (0, z.activeElement)(t),
            i = null == eo.current;
          function n(t) {
            var r, i;
            let n;
            if (
              (t.open ||
                ((r = t.nativeEvent),
                (i = ev.current),
                (n = (0, S.ownerWindow)((0, z.getTarget)(r))),
                (ep.current =
                  r instanceof n.KeyboardEvent
                    ? "keyboard"
                    : r instanceof n.FocusEvent
                      ? i || "keyboard"
                      : "pointerType" in r
                        ? r.pointerType || "keyboard"
                        : "touches" in r
                          ? "touch"
                          : r instanceof n.MouseEvent
                            ? i || (0 === r.detail ? "keyboard" : "mouse")
                            : "")),
              t.reason === c.REASONS.triggerHover && "mouseleave" === t.nativeEvent.type && (ed.current = !0),
              t.reason === c.REASONS.outsidePress)
            )
              if (t.nested) ed.current = !1;
              else if ((0, N.isVirtualClick)(t.nativeEvent) || (0, N.isVirtualPointerEvent)(t.nativeEvent))
                ed.current = !1;
              else {
                let t = !1;
                ((0, w.ownerDocument)(eI)
                  .createElement("div")
                  .focus({
                    get preventScroll() {
                      return ((t = !0), !1);
                    },
                  }),
                  t ? (ed.current = !1) : (ed.current = !0));
              }
          }
          return (
            ee(r),
            B.on("openchange", n),
            () => {
              B.off("openchange", n);
              let a = (0, z.activeElement)(t),
                o = eS(),
                u =
                  (0, z.contains)(F, a) ||
                  o.some((t) => t === a || (0, z.contains)(t, a)) ||
                  (es &&
                    (0, A.getNodeChildren)(es.nodesRef.current, Y(), !1).some((t) =>
                      (0, z.contains)(t.context?.elements.floating, a),
                    )),
                s = ea.current,
                l = ep.current,
                d = (function (t) {
                  let n = ea.current,
                    a = "function" == typeof n ? n(t) : n;
                  if (void 0 === a || !1 === a) return null;
                  null === a && (a = !0);
                  let o = M?.isConnected ? M : null,
                    u = r?.isConnected && "body" !== (0, v.getNodeName)(r) ? r : null,
                    s = i ? u || o : o || u;
                  return (s || (s = et() || null), "boolean" == typeof a) ? s : (0, q.resolveRef)(a) || s || null;
                })(l);
              queueMicrotask(() => {
                let r = d ? ((0, U.isTabbable)(d) ? d : (0, U.tabbable)(d)[0] || d) : null;
                if (
                  s &&
                  !ed.current &&
                  (0, v.isHTMLElement)(r) &&
                  ("boolean" != typeof s || r === a || a === t.body || u)
                ) {
                  let t = { preventScroll: !0 };
                  ("keyboard" === l && (t.focusVisible = !0), r.focus(t));
                }
                ed.current = !1;
              });
            }
          );
        }, [a, F, eI, ea, eo, B, es, M, Y, eS]),
        (0, _.useIsoLayoutEffect)(() => {
          if (!k.platform.engine.webkit || V || !F) return;
          let t = (0, z.activeElement)((0, w.ownerDocument)(F));
          (0, v.isHTMLElement)(t) && (0, D.isTypeableElement)(t) && (0, z.contains)(F, t) && t.blur();
        }, [V, F]),
        (0, _.useIsoLayoutEffect)(() => {
          if (!a && el)
            return (
              el.setFocusManagerState({
                modal: l,
                closeOnFocusOut: f,
                open: V,
                onOpenChange: R.setOpen,
                domReference: M,
              }),
              () => {
                el.setFocusManagerState(null);
              }
            );
        }, [a, el, l, V, R, f, M]),
        (0, _.useIsoLayoutEffect)(() => {
          if (!a && eI)
            return (
              er(eI),
              () => {
                queueMicrotask(Q);
              }
            );
        }, [a, eI]));
      let eO = !a && (!l || !ei) && (ek || l);
      return (0, H.jsxs)(r.Fragment, {
        children: [
          eO &&
            (0, H.jsx)(O.FocusGuard, {
              "data-type": "inside",
              ref: e$,
              onFocus: (t) => {
                if (l) {
                  let t = ew();
                  C(t[t.length - 1]);
                } else if (el?.portalNode)
                  if (((ed.current = !1), (0, U.isOutsideEvent)(t, el.portalNode))) {
                    let t = (0, U.getNextTabbable)(M);
                    t?.focus();
                  } else (0, q.resolveRef)(j ?? el.beforeOutsideRef)?.focus();
              },
            }),
          n,
          eO &&
            (0, H.jsx)(O.FocusGuard, {
              "data-type": "inside",
              ref: ey,
              onFocus: (t) => {
                if (l) C(ew()[0]);
                else if (el?.portalNode)
                  if ((f && (ed.current = !0), (0, U.isOutsideEvent)(t, el.portalNode))) {
                    let t = (0, U.getPreviousTabbable)(M);
                    t?.focus();
                  } else (0, q.resolveRef)(p ?? el.afterOutsideRef)?.focus();
              },
            }),
        ],
      });
    }
    t.s(["FloatingFocusManager", 0, ei], 47223);
    let en = r.createContext(void 0);
    function ea() {
      let t = r.useContext(en);
      if (void 0 === t) throw Error((0, i.default)(26));
      return t;
    }
    t.s(["DialogPortalContext", 0, en, "useDialogPortalContext", 0, ea], 55763);
    var eo = t.i(20999),
      eu = t.i(40648),
      es = t.i(65527),
      el = t.i(73117),
      ed = t.i(61097);
    t.s(["CommonPopupDataAttributes", 0, ed], 62266);
    var ed = ed;
    (ed.open, ed.closed, ed.startingStyle, ed.endingStyle);
    let ec = {
        ...u.popupStateMapping,
        ...el.transitionStatusMapping,
        nestedDialogOpen: (t) => (t ? { "data-nested-dialog-open": "" } : null),
      },
      ef = r.forwardRef(function (t, r) {
        let { render: i, className: n, style: u, finalFocus: s, initialFocus: l, ...d } = t,
          c = a(),
          f = c.useState("descriptionElementId"),
          m = c.useState("disablePointerDismissal"),
          p = c.useState("floatingRootContext"),
          v = c.useState("popupProps"),
          g = c.useState("modal"),
          h = c.useState("mounted"),
          $ = c.useState("nested"),
          y = c.useState("nestedOpenDialogCount"),
          b = c.useState("open"),
          _ = c.useState("openMethod"),
          x = c.useState("titleElementId"),
          k = c.useState("transitionStatus"),
          I = c.useState("role"),
          w = p.useState("floatingId");
        (ea(),
          (0, eo.useOpenChangeComplete)({
            open: b,
            ref: c.context.popupRef,
            onComplete() {
              b && c.context.onOpenChangeComplete?.(!0);
            },
          }));
        let S = void 0 === l ? (0, es.createDefaultInitialFocus)(c.context.popupRef) : l,
          O = c.useStateSetter("popupElement"),
          z = (0, o.useRenderElement)("div", t, {
            state: { open: b, nested: $, transitionStatus: k, nestedDialogOpen: y > 0 },
            props: [
              v,
              {
                id: w,
                "aria-labelledby": x,
                "aria-describedby": f,
                role: I,
                ...es.FOCUSABLE_POPUP_PROPS,
                hidden: !h,
                onKeyDown(t) {
                  eu.COMPOSITE_KEYS.has(t.key) && t.stopPropagation();
                },
                style: { "--nested-dialogs": y },
              },
              d,
            ],
            ref: [r, c.context.popupRef, O],
            stateAttributesMapping: ec,
          });
        return (0, H.jsx)(ei, {
          context: p,
          openInteractionType: _,
          disabled: !h,
          closeOnFocusOut: !m,
          initialFocus: S,
          returnFocus: s,
          modal: !1 !== g,
          restoreFocus: "popup",
          children: z,
        });
      });
    var em = t.i(77081);
    let ep = r.forwardRef(function (t, r) {
      let i,
        { cutout: n, ...a } = t;
      if (n) {
        let t = n.getBoundingClientRect();
        i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${t.left}px ${t.top}px,${t.left}px ${t.bottom}px,${t.right}px ${t.bottom}px,${t.right}px ${t.top}px,${t.left}px ${t.top}px)`;
      }
      return (0, H.jsx)("div", {
        ref: r,
        role: "presentation",
        "data-base-ui-inert": "",
        ...a,
        style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: i },
      });
    });
    t.s(["InternalBackdrop", 0, ep], 78467);
    let ev = r.forwardRef(function (t, r) {
      let { keepMounted: i = !1, ...n } = t,
        o = a(),
        u = o.useState("mounted"),
        s = o.useState("modal"),
        l = o.useState("open");
      return u || i
        ? (0, H.jsx)(en.Provider, {
            value: i,
            children: (0, H.jsxs)(K.FloatingPortal, {
              ref: r,
              ...n,
              children: [
                u && !0 === s && (0, H.jsx)(ep, { ref: o.context.internalBackdropRef, inert: (0, em.inertValue)(!l) }),
                t.children,
              ],
            }),
          })
        : null;
    });
    t.s(["DialogPortal", 0, ev], 65260);
    var eg = t.i(43419);
    let eh = {},
      e$ = {},
      ey = "";
    function eb(t, r) {
      return (0, v.isOverflowElement)(t) ? t : r;
    }
    function e_(t, r, i) {
      return /hidden|clip/.test(t.getComputedStyle(eb(r, i)).overflowY);
    }
    class ex {
      lockCount = 0;
      restore = null;
      timeoutLock = x.Timeout.create();
      timeoutUnlock = x.Timeout.create();
      acquire(t) {
        return (
          (this.lockCount += 1),
          1 === this.lockCount && null === this.restore && this.timeoutLock.start(0, () => this.lock(t)),
          this.release
        );
      }
      release = () => {
        ((this.lockCount -= 1), 0 === this.lockCount && this.restore && this.timeoutUnlock.start(0, this.unlock));
      };
      unlock = () => {
        0 === this.lockCount && this.restore && (this.restore?.(), (this.restore = null));
      };
      lock(t) {
        let r, i, n;
        if (0 === this.lockCount || null !== this.restore) return;
        let a = (0, w.ownerDocument)(t),
          o = a.documentElement,
          u = a.body,
          s = (0, S.ownerWindow)(o);
        if (e_(s, o, u)) {
          let r = new s.MutationObserver(() => {
              e_(s, o, u) || (r.disconnect(), (this.restore = null), this.lock(t));
            }),
            i = { attributes: !0 };
          (r.observe(o, i), r.observe(u, i), (this.restore = () => r.disconnect()));
          return;
        }
        let l =
          k.platform.os.ios ||
          !(function (t) {
            if ("u" < typeof document) return !1;
            let r = (0, w.ownerDocument)(t);
            return (0, S.ownerWindow)(r).innerWidth - r.documentElement.clientWidth > 0;
          })(t);
        this.restore = l
          ? ((n = {
              overflowY: (i = eb((r = (0, w.ownerDocument)(t)).documentElement, r.body)).style.overflowY,
              overflowX: i.style.overflowX,
            }),
            Object.assign(i.style, { overflowY: "hidden", overflowX: "hidden" }),
            () => {
              Object.assign(i.style, n);
            })
          : (function (t) {
              let r = (0, w.ownerDocument)(t),
                i = r.documentElement,
                n = r.body,
                a = (0, S.ownerWindow)(i),
                o = 0,
                u = 0,
                s = !1,
                l = I.AnimationFrame.create();
              if (k.platform.engine.webkit && (a.visualViewport?.scale ?? 1) !== 1) return () => {};
              function d() {
                let r = a.getComputedStyle(i),
                  l = a.getComputedStyle(n),
                  d = (r.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
                ((o = i.scrollTop),
                  (u = i.scrollLeft),
                  (eh = {
                    scrollbarGutter: i.style.scrollbarGutter,
                    overflowY: i.style.overflowY,
                    overflowX: i.style.overflowX,
                  }),
                  (ey = i.style.scrollBehavior),
                  (e$ = {
                    position: n.style.position,
                    height: n.style.height,
                    width: n.style.width,
                    boxSizing: n.style.boxSizing,
                    overflowY: n.style.overflowY,
                    overflowX: n.style.overflowX,
                    scrollBehavior: n.style.scrollBehavior,
                  }));
                let c = i.scrollHeight > i.clientHeight,
                  f = i.scrollWidth > i.clientWidth,
                  m = "scroll" === r.overflowY || "scroll" === l.overflowY,
                  p = "scroll" === r.overflowX || "scroll" === l.overflowX,
                  v = Math.max(0, a.innerWidth - n.clientWidth),
                  g = Math.max(0, a.innerHeight - n.clientHeight),
                  h = parseFloat(l.marginTop) + parseFloat(l.marginBottom),
                  $ = parseFloat(l.marginLeft) + parseFloat(l.marginRight),
                  y = eb(i, n);
                if (
                  (s = (function (t) {
                    if (
                      !("u" > typeof CSS && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) ||
                      "u" < typeof document
                    )
                      return !1;
                    let r = (0, w.ownerDocument)(t),
                      i = r.documentElement,
                      n = eb(i, r.body),
                      a = n.style.overflowY,
                      o = i.style.scrollbarGutter;
                    ((i.style.scrollbarGutter = "stable"), (n.style.overflowY = "scroll"));
                    let u = n.offsetWidth;
                    n.style.overflowY = "hidden";
                    let s = n.offsetWidth;
                    return ((n.style.overflowY = a), (i.style.scrollbarGutter = o), u === s);
                  })(t))
                ) {
                  ((i.style.scrollbarGutter = d), (y.style.overflowY = "hidden"), (y.style.overflowX = "hidden"));
                  return;
                }
                (Object.assign(i.style, { scrollbarGutter: d, overflowY: "hidden", overflowX: "hidden" }),
                  (c || m) && (i.style.overflowY = "scroll"),
                  (f || p) && (i.style.overflowX = "scroll"),
                  Object.assign(n.style, {
                    position: "relative",
                    height: h || g ? `calc(100dvh - ${h + g}px)` : "100dvh",
                    width: $ || v ? `calc(100vw - ${$ + v}px)` : "100vw",
                    boxSizing: "border-box",
                    overflowY: "hidden",
                    overflowX: "hidden",
                    scrollBehavior: "unset",
                  }),
                  (n.scrollTop = o),
                  (n.scrollLeft = u),
                  i.setAttribute("data-base-ui-scroll-locked", ""),
                  (i.style.scrollBehavior = "unset"));
              }
              function c() {
                (Object.assign(i.style, eh),
                  Object.assign(n.style, e$),
                  s ||
                    ((i.scrollTop = o),
                    (i.scrollLeft = u),
                    i.removeAttribute("data-base-ui-scroll-locked"),
                    (i.style.scrollBehavior = ey)));
              }
              d();
              let f = (0, g.addEventListener)(a, "resize", function () {
                (c(), l.request(d));
              });
              return () => {
                (l.cancel(), c(), "function" == typeof a.removeEventListener && f());
              };
            })(t);
      }
    }
    let ek = new ex();
    function eI(t = !0, r = null) {
      (0, _.useIsoLayoutEffect)(() => {
        if (t) return ek.acquire(r);
      }, [t, r]);
    }
    t.s(["useScrollLock", 0, eI], 37199);
    var ew = t.i(29809);
    function eS({ store: t, parentContext: i, isDrawer: n }) {
      let a = t.useState("open"),
        o = t.useState("disablePointerDismissal"),
        u = t.useState("modal"),
        s = t.useState("popupElement"),
        l = t.useState("floatingRootContext"),
        [d, c] = r.useState(0),
        [f, m] = r.useState(0),
        p = 0 === d,
        v = (0, ew.useDismiss)(l, {
          outsidePressEvent: () =>
            t.context.internalBackdropRef.current || t.context.backdropRef.current
              ? "intentional"
              : { mouse: "trap-focus" === u ? "sloppy" : "intentional", touch: "sloppy" },
          outsidePress(r) {
            if (!t.context.outsidePressEnabledRef.current || ("button" in r && 0 !== r.button)) return !1;
            if ("touches" in r) {
              if ("touchend" === r.type) {
                if (1 !== r.changedTouches.length || 0 !== r.touches.length) return !1;
              } else if (1 !== r.touches.length) return !1;
            }
            let i = (0, z.getTarget)(r);
            if (p && !o) {
              if (u) {
                let r = t.context.internalBackdropRef.current,
                  n = t.context.backdropRef.current;
                return (
                  (!r && !n) || r === i || n === i || ((0, z.contains)(i, s) && !i?.hasAttribute("data-base-ui-portal"))
                );
              }
              return !0;
            }
            return !1;
          },
          escapeKey: p,
        });
      return (
        eI(a && !0 === u, s),
        t.useContextCallback("onNestedDialogOpen", (t, r) => {
          (c(t), m(r));
        }),
        (0, _.useIsoLayoutEffect)(
          () => (
            i?.onNestedDialogOpen && (a ? i.onNestedDialogOpen(d + 1, f + +!!n) : i.onNestedDialogOpen(0, 0)),
            () => {
              i?.onNestedDialogOpen && a && i.onNestedDialogOpen(0, 0);
            }
          ),
          [n, a, d, f, i],
        ),
        (0, es.usePopupInteractionProps)(t, {
          activeTriggerProps: v.reference,
          inactiveTriggerProps: v.trigger,
          popupProps: v.floating,
          nestedOpenDialogCount: d,
          nestedOpenDrawerCount: f,
        }),
        null
      );
    }
    var eO = t.i(22908),
      ez = t.i(50163),
      eD = t.i(36713),
      eN = t.i(10854);
    let eU = {
      ...eD.popupStoreSelectors,
      modal: (t) => t.modal,
      nested: (t) => t.nested,
      nestedOpenDialogCount: (t) => t.nestedOpenDialogCount,
      nestedOpenDrawerCount: (t) => t.nestedOpenDrawerCount,
      disablePointerDismissal: (t) => t.disablePointerDismissal,
      openMethod: (t) => t.openMethod,
      descriptionElementId: (t) => t.descriptionElementId,
      titleElementId: (t) => t.titleElementId,
      viewportElement: (t) => t.viewportElement,
      role: (t) => t.role,
    };
    class eA extends eO.ReactStore {
      constructor(t, r, i) {
        const n = new eN.PopupTriggerMap();
        super(eP(t, n, r, i), eZ(n), eU);
      }
      setOpen = (t, r) => {
        ((r.preventUnmountOnClose = () => {
          this.set("preventUnmountingOnClose", !0);
        }),
          t ||
            null != r.trigger ||
            null == this.state.activeTriggerId ||
            (r.trigger = this.state.activeTriggerElement ?? void 0),
          this.context.onOpenChange?.(t, r),
          r.isCanceled ||
            (this.state.floatingRootContext.dispatchOpenChange(t, r),
            this.update((0, es.createPopupOpenState)(this.state, t, r.trigger))));
      };
    }
    function eP(t, r, i, n = !1) {
      return {
        ...(0, eD.createInitialPopupStoreState)(r, i, n),
        modal: !0,
        disablePointerDismissal: !1,
        viewportElement: null,
        descriptionElementId: void 0,
        titleElementId: void 0,
        openMethod: null,
        nested: !1,
        nestedOpenDialogCount: 0,
        nestedOpenDrawerCount: 0,
        role: "dialog",
        ...t,
      };
    }
    function eZ(t) {
      return {
        popupRef: r.createRef(),
        backdropRef: r.createRef(),
        internalBackdropRef: r.createRef(),
        outsidePressEnabledRef: { current: !0 },
        triggerElements: t,
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
      };
    }
    function ej(t, i) {
      let {
          children: o,
          open: u,
          defaultOpen: s = !1,
          onOpenChange: l,
          onOpenChangeComplete: f,
          disablePointerDismissal: m = !1,
          modal: p = !0,
          actionsRef: v,
          handle: g,
          triggerId: h,
          defaultTriggerId: $ = null,
        } = i,
        y = "alert-dialog" === t,
        b = a(!0),
        _ = { modal: !!y || p, disablePointerDismissal: y || m, nested: null != b, role: y ? "alertdialog" : "dialog" },
        x = (0, es.usePopupRootStore)(
          (t, r) => new eA({ open: s, openProp: u, activeTriggerId: $, triggerIdProp: h, ..._ }, t, r),
          !0,
        );
      (x.useControlledProp("openProp", u),
        x.useControlledProp("triggerIdProp", h),
        x.useSyncedValues(_),
        x.useContextCallback("onOpenChange", l),
        x.useContextCallback("onOpenChangeComplete", f));
      let k = x.useState("open"),
        I = x.useState("mounted"),
        w = x.useState("payload");
      ((0, es.usePopupRootSync)(x, k), (0, es.useImplicitActiveTrigger)(x));
      let { forceUnmount: S } = (0, es.useOpenStateTransitions)(k, x);
      r.useImperativeHandle(
        v,
        () => ({ unmount: S, close: () => x.setOpen(!1, (0, d.createChangeEventDetails)(c.REASONS.imperativeAction)) }),
        [S, x],
      );
      let O = k || I;
      return (0, H.jsxs)(n.Provider, {
        value: x,
        children: [
          g && (0, H.jsx)(es.PopupHandleAttachment, { handle: g, store: x }),
          O && (0, H.jsx)(eS, { store: x, parentContext: b?.context, isDrawer: "drawer" === t }),
          "function" == typeof o ? o({ payload: w }) : o,
        ],
      });
    }
    t.s(["useRenderDialogRoot", 0, ej], 94024);
    let eE = (0, eg.fastComponent)(function (t) {
        return ej("dialog", t);
      }),
      eC = r.forwardRef(function (t, r) {
        let { render: i, className: n, style: u, children: s, ...l } = t,
          d = ea(),
          c = a(),
          f = c.useState("open"),
          m = c.useState("nested"),
          p = c.useState("transitionStatus"),
          v = c.useState("nestedOpenDialogCount"),
          g = c.useState("mounted"),
          h = c.useStateSetter("viewportElement");
        return (0, o.useRenderElement)("div", t, {
          enabled: d || g,
          state: { open: f, nested: m, transitionStatus: p, nestedDialogOpen: v > 0 },
          ref: [r, h],
          stateAttributesMapping: ec,
          props: [{ role: "presentation", hidden: !g, style: { pointerEvents: f ? void 0 : "none" }, children: s }, l],
        });
      });
    t.s(["DialogViewport", 0, eC], 53851);
    let eT = r.forwardRef(function (t, r) {
      let { render: i, className: n, style: u, id: s, ...l } = t,
        d = a(),
        c = (0, m.useBaseUiId)(s);
      return (
        d.useSyncedValueWithCleanup("titleElementId", c),
        (0, o.useRenderElement)("h2", t, { ref: r, props: [{ id: c }, l] })
      );
    });
    t.s(["DialogTitle", 0, eT], 96496);
    var eL = t.i(61739);
    function eR(t, i = {}) {
      let {
          enabled: n = !0,
          event: a = "click",
          toggle: o = !0,
          ignoreMouse: u = !1,
          stickIfOpen: s = !0,
          touchOpenDelay: l = 0,
          reason: f = c.REASONS.triggerPress,
        } = i,
        m = "rootStore" in t ? t.rootStore : t,
        p = m.context.dataRef,
        v = r.useRef(void 0),
        g = (0, I.useAnimationFrame)(),
        h = (0, x.useTimeout)(),
        $ = r.useMemo(() => {
          function t(t, r, i, n) {
            let a = (0, d.createChangeEventDetails)(f, r, i);
            t && "touch" === n && l > 0
              ? h.start(l, () => {
                  m.setOpen(!0, a);
                })
              : m.setOpen(t, a);
          }
          function r(t, r, i) {
            let n = p.current.openEvent,
              a = m.select("domReferenceElement") !== r;
            return (!!t && !!a) || !t || !o || (!!n && !!s && !i(n.type));
          }
          return {
            onPointerDown(t) {
              v.current =
                (0, N.isMouseLikePointerType)(t.pointerType, !0) && (0, N.isVirtualPointerEvent)(t.nativeEvent)
                  ? "virtual"
                  : t.pointerType;
            },
            onMouseDown(i) {
              let n = v.current,
                o = i.nativeEvent,
                s = m.select("open");
              if (0 !== i.button || "click" === a || ((0, N.isMouseLikePointerType)(n, !0) && u)) return;
              let l = r(s, i.currentTarget, (t) => "click" === t || "mousedown" === t),
                d = (0, z.getTarget)(o);
              if ((0, D.isTypeableElement)(d)) return void t(l, o, d, n);
              let c = i.currentTarget;
              g.request(() => {
                t(l, o, c, n);
              });
            },
            onClick(i) {
              if ("mousedown-only" === a) return;
              let n = v.current;
              if ("mousedown" === a && n) {
                v.current = void 0;
                return;
              }
              ((0, N.isMouseLikePointerType)(n, !0) && u) ||
                t(
                  r(
                    m.select("open"),
                    i.currentTarget,
                    (t) => "click" === t || "mousedown" === t || "keydown" === t || "keyup" === t,
                  ),
                  i.nativeEvent,
                  i.currentTarget,
                  n,
                );
            },
            onKeyDown() {
              v.current = void 0;
            },
          };
        }, [p, a, u, f, m, s, o, g, h, l]);
      return r.useMemo(() => (n ? { reference: $ } : j.EMPTY_OBJECT), [n, $]);
    }
    function eV(t, i) {
      let n = r.useRef(t),
        a = (0, b.useStableCallback)(i);
      (0, _.useIsoLayoutEffect)(() => {
        (n.current !== t && a(n.current), (n.current = t));
      }, [t, a]);
    }
    function eM(t, i) {
      var n;
      let a,
        o,
        { onClick: u, onPointerDown: s } =
          ((n = (0, b.useStableCallback)((r, n) => {
            ("function" == typeof t ? t() : t) || i(n || (k.platform.os.ios ? "touch" : ""));
          })),
          (a = r.useRef("")),
          (o = r.useCallback(
            (t) => {
              t.defaultPrevented || ((a.current = t.pointerType), n(t, t.pointerType));
            },
            [n],
          )),
          {
            onClick: r.useCallback(
              (t) => {
                0 === t.detail
                  ? n(t, "keyboard")
                  : ("pointerType" in t ? n(t, t.pointerType) : n(t, a.current), (a.current = ""));
              },
              [n],
            ),
            onPointerDown: o,
          });
      return r.useMemo(() => ({ onClick: u, onPointerDown: s }), [u, s]);
    }
    (t.s(["useClick", 0, eR], 91730),
      t.s(["useValueChanged", 0, eV], 1857),
      t.s(
        [
          "useOpenInteractionType",
          0,
          function (t) {
            let [i, n] = r.useState(null),
              a = eM(t, n);
            return (
              eV(t, (r) => {
                r && !t && n(null);
              }),
              r.useMemo(() => ({ openMethod: i, triggerProps: a }), [i, a])
            );
          },
          "useOpenMethodTriggerProps",
          0,
          eM,
        ],
        41598,
      ));
    let eF = (0, eg.fastComponentRef)(function (t, n) {
      let {
          render: s,
          className: d,
          style: c,
          disabled: f = !1,
          nativeButton: p = !0,
          id: v,
          payload: g,
          handle: h,
          ...$
        } = t,
        y = a(!0),
        b = (0, eL.usePopupHandleStore)(h) ?? y;
      if (!b) throw Error((0, i.default)(79));
      let _ = (0, m.useBaseUiId)(v),
        x = b.useState("floatingRootContext"),
        k = b.useState("isOpenedByTrigger", _),
        I = b.useState("triggerPopupId", _),
        w = r.useRef(null),
        { registerTrigger: S, isMountedByThisTrigger: O } = (0, es.useTriggerDataForwarding)(_, w, b, { payload: g }),
        { getButtonProps: z, buttonRef: D } = (0, l.useButton)({ disabled: f, native: p }),
        N = eR(x),
        U = eM(
          () => b.select("open"),
          (t) => {
            b.set("openMethod", t);
          },
        ),
        A = b.useState("triggerProps", O);
      return (0, o.useRenderElement)("button", t, {
        state: { disabled: f, open: k },
        ref: [D, n, S, w],
        props: [
          N.reference,
          A,
          U,
          {
            [X.CLICK_TRIGGER_IDENTIFIER]: "",
            id: _,
            "aria-haspopup": "dialog",
            "aria-expanded": k,
            "aria-controls": I,
          },
          $,
          z,
        ],
        stateAttributesMapping: u.triggerOpenStateMapping,
      });
    });
    t.s(["DialogTrigger", 0, eF], 74361);
    var eB = t.i(59473);
    class eJ extends eB.BasePopupHandle {
      constructor() {
        super(
          (function () {
            let t = new eN.PopupTriggerMap();
            return new ez.NullStore(Object.freeze(eP(void 0, t)), Object.freeze(eZ(t)), eU);
          })(),
          "Dialog",
          !1,
        );
      }
      open(t) {
        this.openByTrigger(t);
      }
      openWithPayload(t) {
        let r = this.attachedStore;
        null === r || (r.set("payload", t), r.setOpen(!0, (0, d.createChangeEventDetails)(c.REASONS.imperativeAction)));
      }
      close() {
        this.closePopup();
      }
      get isOpen() {
        return this.attachedStore?.select("open") ?? !1;
      }
    }
    function eW() {
      return new eJ();
    }
    (t.s(["DialogHandle", 0, eJ, "createDialogHandle", 0, eW], 13908),
      t.s(
        [
          "Backdrop",
          0,
          s,
          "Close",
          0,
          f,
          "Description",
          0,
          p,
          "Handle",
          0,
          eJ,
          "Popup",
          0,
          ef,
          "Portal",
          0,
          ev,
          "Root",
          0,
          eE,
          "Title",
          0,
          eT,
          "Trigger",
          0,
          eF,
          "Viewport",
          0,
          eC,
          "createHandle",
          0,
          eW,
        ],
        84275,
      ));
    var eK = t.i(84275);
    (t.s(["Dialog", 0, eK], 40735),
      t.s(
        [
          "CircleXSolidIcon",
          0,
          ({ size: t = 24, ariaHidden: r = !0, ...i }) =>
            (0, H.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: t,
              height: t,
              "aria-hidden": r,
              focusable: "false",
              ...i,
              children: (0, H.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z",
                fill: "currentColor",
              }),
            }),
        ],
        60711,
      ));
  },
  40648,
  (t) => {
    "use strict";
    var r = t.i(65079);
    let i = "ArrowUp",
      n = "ArrowDown",
      a = "ArrowLeft",
      o = "ArrowRight",
      u = "Home",
      s = new Set([i, n, a, o, u, "End"]);
    function l(t, r, i) {
      let n = "left" === i ? "offsetLeft" : "offsetTop",
        a = 0;
      for (; r.offsetParent && ((a += r[n]), r.offsetParent !== t);) r = r.offsetParent;
      return a;
    }
    function d(t) {
      let r = getComputedStyle(t);
      return {
        scrollMarginTop: parseFloat(r.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(r.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(r.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(r.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(r.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(r.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(r.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(r.scrollPaddingLeft) || 0,
      };
    }
    t.s([
      "ARROW_DOWN",
      0,
      n,
      "ARROW_LEFT",
      0,
      a,
      "ARROW_RIGHT",
      0,
      o,
      "ARROW_UP",
      0,
      i,
      "COMPOSITE_KEYS",
      0,
      s,
      "END",
      0,
      "End",
      "HOME",
      0,
      u,
      "MODIFIER_KEYS",
      0,
      ["Shift", "Control", "Alt", "Meta"],
      "isNativeInput",
      0,
      function (t) {
        return !!(
          ((0, r.isHTMLElement)(t) && "INPUT" === t.tagName && null != t.selectionStart) ||
          ((0, r.isHTMLElement)(t) && "TEXTAREA" === t.tagName)
        );
      },
      "scrollIntoViewIfNeeded",
      0,
      function (t, r, i, n) {
        if (!t || !r || !r.scrollTo) return;
        let a = t.scrollLeft,
          o = t.scrollTop,
          u = t.clientWidth < t.scrollWidth,
          s = t.clientHeight < t.scrollHeight;
        if (u && "vertical" !== n) {
          let n = l(t, r, "left"),
            o = d(t),
            u = d(r);
          ("ltr" === i &&
            (n + r.offsetWidth + u.scrollMarginRight > t.scrollLeft + t.clientWidth - o.scrollPaddingRight
              ? (a = n + r.offsetWidth + u.scrollMarginRight - t.clientWidth + o.scrollPaddingRight)
              : n - u.scrollMarginLeft < t.scrollLeft + o.scrollPaddingLeft &&
                (a = n - u.scrollMarginLeft - o.scrollPaddingLeft)),
            "rtl" === i &&
              (n - u.scrollMarginLeft < t.scrollLeft + o.scrollPaddingLeft
                ? (a = n - u.scrollMarginLeft - o.scrollPaddingLeft)
                : n + r.offsetWidth + u.scrollMarginRight > t.scrollLeft + t.clientWidth - o.scrollPaddingRight &&
                  (a = n + r.offsetWidth + u.scrollMarginRight - t.clientWidth + o.scrollPaddingRight)));
        }
        if (s && "horizontal" !== n) {
          let i = l(t, r, "top"),
            n = d(t),
            a = d(r);
          i - a.scrollMarginTop < t.scrollTop + n.scrollPaddingTop
            ? (o = i - a.scrollMarginTop - n.scrollPaddingTop)
            : i + r.offsetHeight + a.scrollMarginBottom > t.scrollTop + t.clientHeight - n.scrollPaddingBottom &&
              (o = i + r.offsetHeight + a.scrollMarginBottom - t.clientHeight + n.scrollPaddingBottom);
        }
        t.scrollTo({ left: a, top: o, behavior: "auto" });
      },
    ]);
  },
  576,
  (t) => {
    "use strict";
    t.i(63731);
    var r = t.i(47452);
    t.s([
      "useControlled",
      0,
      function ({ controlled: t, default: i, name: n, state: a = "value" }) {
        let { current: o } = r.useRef(void 0 !== t),
          [u, s] = r.useState(i),
          l = r.useCallback((t) => {
            o || s(t);
          }, []);
        return [o && void 0 !== t ? t : u, l];
      },
    ]);
  },
  93470,
  20789,
  26192,
  20056,
  91593,
  92066,
  66013,
  86932,
  44826,
  26816,
  (t) => {
    "use strict";
    var r = t.i(47452),
      i = (t) => t instanceof Date,
      n = (t) => null == t,
      a = (t) => !n(t) && !Array.isArray(t) && "object" == typeof t && !i(t),
      o = (t) =>
        a(t) && t.target
          ? "checkbox" === t.target.type
            ? t.target.checked
            : "file" === t.target.type
              ? t.target.files
              : t.target.value
          : t;
    let u = /[.[\]'"]/;
    var s = (t) => t.split(u).filter(Boolean),
      l = (t, r) => r.split(".").some((r, i, n) => !isNaN(Number(r)) && t.has(n.slice(0, i).join("."))),
      d = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;
    function c(t) {
      if (null === t || "object" != typeof t) return t;
      if (t instanceof Date) return new Date(t);
      let r = "u" > typeof Blob && t instanceof Blob,
        i = "u" > typeof FileList && t instanceof FileList;
      if (d && (r || i)) return t;
      let n = Array.isArray(t);
      if (!n && t.constructor !== Object) return t;
      let a = n ? [] : Object.create(Object.getPrototypeOf(t));
      for (let r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = c(t[r]));
      return a;
    }
    let f = "blur",
      m = "trigger",
      p = "onChange",
      v = "onSubmit",
      g = "maxLength",
      h = "minLength",
      $ = "pattern",
      y = "required",
      b = "validate",
      _ = "root",
      x = ["__proto__", "constructor", "prototype"],
      k = /^\w*$/;
    var I = (t) => void 0 === t,
      w = (t, r, i) => {
        if (!r || !a(t)) return i;
        let o = k.test(r) ? [r] : s(r);
        if (o.some((t) => x.includes(t))) return i;
        let u = o.reduce((t, r) => (n(t) ? void 0 : t[r]), t);
        return I(u) || u === t ? (I(t[r]) ? i : t[r]) : u;
      },
      S = (t) => "function" == typeof t,
      O = (t, r, i) => {
        let n = -1,
          o = k.test(r) ? [r] : s(r),
          u = o.length,
          l = u - 1;
        for (; ++n < u;) {
          let r = o[n],
            u = i;
          if (n !== l) {
            let i = t[r];
            u = a(i) || Array.isArray(i) ? i : isNaN(+o[n + 1]) ? {} : [];
          }
          if (x.includes(r)) return;
          ((t[r] = u), (t = t[r]));
        }
      };
    let z = r.default.createContext(null);
    z.displayName = "HookFormControlContext";
    var D = (t, r, i, n = !0) => {
      let a = {};
      for (let o in t)
        Object.defineProperty(a, o, {
          get: () => ("all" !== r._proxyFormState[o] && (r._proxyFormState[o] = !n || "all"), i && (i[o] = !0), t[o]),
        });
      return a;
    };
    let N = d ? r.default.useLayoutEffect : r.default.useEffect;
    var U = (t) => n(t) || "object" != typeof t;
    let A = (t, r) => {
      let i;
      return (
        0 === r.length &&
        !Array.isArray(t) &&
        !(a((i = t.constructor && t.constructor.prototype)) && i.hasOwnProperty("isPrototypeOf"))
      );
    };
    function P(t, r, n = new WeakMap()) {
      if (t === r) return !0;
      if (U(t) || U(r)) return Object.is(t, r);
      if (i(t) && i(r)) return Object.is(t.getTime(), r.getTime());
      let o = Object.keys(t),
        u = Object.keys(r);
      if (o.length !== u.length) return !1;
      if (A(t, o) || A(r, u)) return Object.is(t, r);
      if (!o.length && Array.isArray(t) !== Array.isArray(r)) return !1;
      let s = n.get(t);
      if (s && s.has(r)) return !0;
      if (s) s.add(r);
      else {
        let i = new WeakSet();
        (i.add(r), n.set(t, i));
      }
      for (let u of o) {
        let o = t[u];
        if (!(u in r)) return !1;
        if ("ref" !== u) {
          let t = r[u];
          if (
            (i(o) && i(t)) || ((a(o) || Array.isArray(o)) && (a(t) || Array.isArray(t)))
              ? !P(o, t, n)
              : !Object.is(o, t)
          )
            return !1;
        }
      }
      return !0;
    }
    function Z(t) {
      let i = r.default.useRef(!1),
        n = r.default.useRef(!1),
        a = r.default.useRef(void 0),
        o = r.default.useRef(0);
      return (
        o.current++,
        !n.current && t && ((n.current = !0), (a.current = c(t()))),
        {
          resyncIfNeeded: r.default.useCallback((t, r, u) => {
            if (t && (i.current || (n.current && o.current > 1))) {
              let t = r();
              P(a.current, t) || u(t);
            }
            i.current = !0;
          }, []),
          snapshot: r.default.useCallback((t, r) => {
            t && (a.current = c(r()));
          }, []),
        }
      );
    }
    var j = (t) => "string" == typeof t,
      E = (t, r, i, n, a) =>
        j(t)
          ? (n && r.watch.add(t), w(i, t, a))
          : Array.isArray(t)
            ? t.map((t) => (n && r.watch.add(t), w(i, t, w(a, t))))
            : (n && (r.watchAll = !0), i),
      C = (t) => ({
        isOnSubmit: !t || t === v,
        isOnBlur: "onBlur" === t,
        isOnChange: t === p,
        isOnAll: "all" === t,
        isOnTouch: "onTouched" === t,
      }),
      T = (t, r, i) => {
        if (i) return !1;
        if (r.watchAll || r.watch.has(t)) return !0;
        for (let i of r.watch) if (t.startsWith(i) && "." === t.charAt(i.length)) return !0;
        return !1;
      };
    let L = (t, r, i) => {
      for (let n of i || Object.keys(t)) {
        if ("_f" === n) continue;
        let o = i ? w(t, n) : t[n];
        if (o) {
          let { _f: t } = o;
          if (t) {
            if (t.refs && t.refs[0] && r(t.refs[0], t.name)) return !0;
            else if (t.ref && r(t.ref, t.name)) return !0;
            else if (L(o, r)) return !0;
          } else if ((a(o) || Array.isArray(o)) && L(o, r)) return !0;
        }
      }
    };
    var R = (t, r, i) => {
        let n = w(t, i),
          a = Array.isArray(n) ? n : [];
        return (O(a, _, r[i]), O(t, i, a), t);
      },
      V = (t) => a(t) && !Object.keys(t).length,
      M = (t) => {
        if (!d) return !1;
        let r = t ? t.ownerDocument : 0;
        return t instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
      },
      F = (t, r, i, n, a) => (r ? { ...i[t], types: { ...(i[t] && i[t].types ? i[t].types : {}), [n]: a || !0 } } : {});
    let B = { value: !1, isValid: !1 },
      J = { value: !0, isValid: !0 };
    var W = (t) => {
      if (!Array.isArray(t)) return B;
      if (t.length > 1) {
        let r = t.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
        return { value: r, isValid: !!r.length };
      }
      let r = t[0];
      return r && r.checked && !r.disabled
        ? r.attributes && "value" in r.attributes
          ? I(r.value) || "" === r.value
            ? J
            : { value: r.value, isValid: !0 }
          : J
        : B;
    };
    let K = { isValid: !1, value: null };
    var G = (t) =>
      Array.isArray(t)
        ? t.reduce((t, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t), K)
        : K;
    function X(t, r, i = "validate") {
      if (j(t) || (Array.isArray(t) && t.every(j)) || ("boolean" == typeof t && !t))
        return { type: i, message: j(t) ? t : "", ref: r };
    }
    var q = (t) => (!a(t) || t instanceof RegExp ? { value: t, message: "" } : t),
      H = async (t, r, o, u, s, l) => {
        let {
            ref: d,
            refs: c,
            required: f,
            maxLength: m,
            minLength: p,
            min: v,
            max: _,
            pattern: x,
            validate: k,
            name: O,
            valueAsNumber: z,
            mount: D,
          } = t._f,
          N = w(o, O);
        if (!D || r.has(O)) return {};
        let U = c ? c[0] : d,
          A = (t) => {
            if (s && U.reportValidity) {
              let r = "boolean" == typeof t ? "" : t || "";
              (c ? c.forEach((t) => t.setCustomValidity(r)) : U.setCustomValidity(r), U.reportValidity());
            }
          },
          P = {},
          Z = "radio" === d.type,
          E = "checkbox" === d.type,
          C =
            ((z || "file" === d.type) && I(d.value) && I(N)) ||
            (M(d) && "" === d.value) ||
            "" === N ||
            (Array.isArray(N) && !N.length),
          T = F.bind(null, O, u, P),
          L = (t, r, i, n = g, a = h) => {
            let o = t ? r : i;
            P[O] = { type: t ? n : a, message: o, ref: d, ...T(t ? n : a, o) };
          };
        if (
          l
            ? !Array.isArray(N) || !N.length
            : f &&
              ((!(Z || E) && (C || n(N))) ||
                ("boolean" == typeof N && !N) ||
                (E && !W(c).isValid) ||
                (Z && !G(c).isValid))
        ) {
          let { value: t, message: r } = j(f) ? { value: !!f, message: f } : q(f);
          if (t && ((P[O] = { type: y, message: r, ref: U, ...T(y, r) }), !u)) return (A(r), P);
        }
        if (!C && (!n(v) || !n(_))) {
          let t,
            r,
            a = q(_),
            o = q(v);
          if (n(N) || i(N) || isNaN(N)) {
            let i = d.valueAsDate || new Date(N),
              n = (t) => new Date(new Date().toDateString() + " " + t),
              u = "time" == d.type,
              s = "week" == d.type;
            (j(a.value) && N && (t = u ? n(N) > n(a.value) : s ? N > a.value : i > new Date(a.value)),
              j(o.value) && N && (r = u ? n(N) < n(o.value) : s ? N < o.value : i < new Date(o.value)));
          } else {
            let i = d.valueAsNumber || (N ? +N : N);
            (n(a.value) || (t = i > a.value), n(o.value) || (r = i < o.value));
          }
          if ((t || r) && (L(!!t, a.message, o.message, "max", "min"), !u)) return (A(P[O].message), P);
        }
        if ((m || p) && !C && (j(N) || (l && Array.isArray(N)))) {
          let t = q(m),
            r = q(p),
            i = !n(t.value) && N.length > +t.value,
            a = !n(r.value) && N.length < +r.value;
          if ((i || a) && (L(i, t.message, r.message), !u)) return (A(P[O].message), P);
        }
        if (x && !C && j(N)) {
          let { value: t, message: r } = q(x);
          if (t instanceof RegExp && !N.match(t) && ((P[O] = { type: $, message: r, ref: d, ...T($, r) }), !u))
            return (A(r), P);
        }
        if (k) {
          if (S(k)) {
            let t = X(await k(N, o), U);
            if (t && ((P[O] = { ...t, ...T(b, t.message) }), !u)) return (A(t.message), P);
          } else if (a(k)) {
            let t = {};
            for (let r in k) {
              if (!V(t) && !u) break;
              let i = X(await k[r](N, o), U, r);
              i && ((t = { ...i, ...T(r, i.message) }), u || A(i.message), u && (P[O] = t));
            }
            if (!V(t) && ((P[O] = { ref: U, ...t }), !u)) return P;
          }
        }
        let R = P[O];
        return (A(!R || R.message), P);
      },
      Y = (t) => (Array.isArray(t) ? t : [t]),
      Q = (t) => (Array.isArray(t) ? t.filter(Boolean) : []);
    function ee(t, r) {
      if (j(r) && Object.prototype.hasOwnProperty.call(t, r)) return (delete t[r], t);
      let i = Array.isArray(r) ? r : k.test(r) ? [r] : s(r);
      if (i.some((t) => x.includes(String(t)))) return t;
      let o =
          1 === i.length
            ? t
            : (function (t, r) {
                let i = r.length - 1,
                  a = 0;
                for (; a < i;) {
                  if (n(t)) {
                    t = void 0;
                    break;
                  }
                  ((t = t[r[a]]), a++);
                }
                return t;
              })(t, i),
        u = i.length - 1,
        l = i[u];
      return (
        o && delete o[l],
        0 !== u &&
          ((a(o) && V(o)) ||
            (Array.isArray(o) &&
              (function (t) {
                for (let r in t) if (t.hasOwnProperty(r) && !I(t[r])) return !1;
                return !0;
              })(o))) &&
          ee(t, i.slice(0, -1)),
        t
      );
    }
    let et = r.default.createContext(null);
    et.displayName = "HookFormContext";
    var er = () => {
      let t = [];
      return {
        get observers() {
          return t;
        },
        next: (r) => {
          for (let i of t) i.next && i.next(r);
        },
        subscribe: (r) => (
          t.push(r),
          {
            unsubscribe: () => {
              t = t.filter((t) => t !== r);
            },
          }
        ),
        unsubscribe: () => {
          t = [];
        },
      };
    };
    let ei = (t, r) => null !== t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, r);
    var en = (t, r) => {
        if (!r) return !1;
        let i = t;
        for (let n of k.test(r) ? [r] : s(r)) {
          if (!ei(i, n)) return ei(t, r);
          i = i[n];
        }
        return !0;
      },
      ea = (t) => M(t) && t.isConnected;
    function eo(t) {
      return Array.isArray(t) || a(t);
    }
    function eu(t) {
      return (
        Array.isArray(t) ||
        (a(t) &&
          !((t) => {
            for (let r in t) if (S(t[r])) return !0;
            return !1;
          })(t))
      );
    }
    function es(t) {
      return !!(t && "_f" in t);
    }
    function el(t) {
      return Array.isArray(t) ? !t.some((t) => !I(t)) : !Object.keys(t).length;
    }
    function ed(t, r) {
      Array.isArray(t) ? (t[r] = void 0) : delete t[r];
    }
    function ec(t, r = {}, i) {
      for (let n in t) {
        let a = t[n],
          o = i && i[n];
        !eu(a) || (Array.isArray(a) && es(o))
          ? I(a) || (r[n] = !0)
          : ((r[n] = Array.isArray(a) ? [] : {}), ec(a, r[n], o), el(r[n]) && ed(r, n));
      }
      return r;
    }
    function ef(t, r, i, a) {
      for (let o in (i || (i = ec(r, {}, a)), t)) {
        let u = t[o],
          s = a && a[o];
        !eu(u) || (Array.isArray(u) && es(s))
          ? P(u, r[o])
            ? ed(i, o)
            : (i[o] = !0)
          : (I(r) || U(i[o]) ? (i[o] = ec(u, Array.isArray(u) ? [] : {}, s)) : ef(u, n(r) ? {} : r[o], i[o], s),
            el(i[o]) && ed(i, o));
      }
      return i;
    }
    var em = (t, { valueAsNumber: r, valueAsDate: i, setValueAs: n }) =>
      I(t) ? t : r ? ("" === t ? NaN : t ? +t : t) : i && j(t) ? new Date(t) : n ? n(t) : t;
    function ep(t) {
      let r = t.ref;
      return "file" === r.type
        ? r.files
        : "radio" === r.type
          ? G(t.refs).value
          : "select-multiple" === r.type
            ? [...r.selectedOptions].map(({ value: t }) => t)
            : "checkbox" === r.type
              ? W(t.refs).value
              : em(r.value, t);
    }
    var ev = (t) =>
      I(t) ? t : t instanceof RegExp ? t.source : a(t) ? (t.value instanceof RegExp ? t.value.source : t.value) : t;
    let eg = "AsyncFunction";
    var eh = (t) => {
      if (!t || !t.validate) return !1;
      if (S(t.validate)) return t.validate.constructor.name === eg;
      if (a(t.validate)) {
        for (let r in t.validate) if (t.validate[r].constructor.name === eg) return !0;
      }
      return !1;
    };
    function e$(t, r, i) {
      let n = w(t, i);
      if ((null == n ? void 0 : n.type) || (null == n ? void 0 : n.message) || Array.isArray(n))
        return { error: n, name: i };
      let a = i.split(".");
      for (; a.length;) {
        let n = a.join("."),
          o = w(r, n),
          u = w(t, n);
        if (o && !Array.isArray(o) && i !== n) break;
        if (u && u.type) return { name: n, error: u };
        if (u && u.root && u.root.type) return { name: `${n}.root`, error: u.root };
        a.pop();
      }
      return { name: i };
    }
    let ey = { mode: v, reValidateMode: p, shouldFocusError: !0 },
      eb = "form",
      e_ = {
        submitCount: 0,
        isDirty: !1,
        isReady: !1,
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
      };
    t.s(
      [
        "Controller",
        0,
        (t) =>
          t.render(
            (function (t) {
              let i = r.default.useContext(z),
                { name: n, disabled: a, control: u = i, shouldUnregister: d, defaultValue: m, exact: p = !0 } = t,
                v = l(u._names.array, n),
                g = r.default.useMemo(() => {
                  let t = w(u._formValues, n, w(u._defaultValues, n, m));
                  return I(t)
                    ? (function (t, r) {
                        let i = s(r),
                          n = t._formValues,
                          a = t._defaultValues;
                        for (let t = 0; t < i.length - 1; t++) {
                          let r = i[t];
                          if (((n = null == n ? n : n[r]), (a = null == a ? a : a[r]), null === n || null === a))
                            return null;
                        }
                      })(u, n)
                    : t;
                }, [u, n, m]),
                h = (function (t) {
                  let i = r.default.useContext(z),
                    { control: n = i, name: a, defaultValue: o, disabled: u, exact: s, compute: l } = t || {},
                    d = r.default.useRef(o),
                    c = r.default.useRef(l),
                    f = r.default.useRef(n),
                    m = r.default.useRef(a);
                  c.current = l;
                  let p = () => {
                      let t = n._getWatch(a, d.current);
                      return c.current ? c.current(t) : t;
                    },
                    [v, g] = r.default.useState(p),
                    h = r.default.useRef(v),
                    $ = r.default.useCallback(
                      (t) => {
                        let r = E(a, n._names, t || n._formValues, !1, d.current);
                        return c.current ? c.current(r) : r;
                      },
                      [n._formValues, n._names, a],
                    ),
                    y = r.default.useCallback(
                      (t) => {
                        if (!u) {
                          let r = E(a, n._names, t || n._formValues, !1, d.current);
                          if (c.current) {
                            let t = c.current(r);
                            P(t, h.current) || (g(t), (h.current = t));
                          } else g(r);
                        }
                      },
                      [n._formValues, n._names, u, a],
                    ),
                    { resyncIfNeeded: b, snapshot: _ } = Z(p),
                    x = r.default.useRef(y);
                  x.current = y;
                  let k = r.default.useRef($);
                  ((k.current = $),
                    N(() => {
                      f.current === n && P(m.current, a)
                        ? b(
                            !u,
                            () => k.current(),
                            (t) => {
                              (g(t), (h.current = t));
                            },
                          )
                        : ((f.current = n), (m.current = a), x.current());
                      let t = n._subscribe({
                        name: a,
                        formState: { values: !0 },
                        exact: s,
                        callback: (t) => {
                          x.current(t.values);
                        },
                      });
                      return () => {
                        (t(), _(!u, () => k.current()));
                      };
                    }, [n, s, a, u, b, _]),
                    r.default.useEffect(() => n._removeUnmounted()));
                  let I = f.current !== n,
                    w = m.current;
                  return r.default.useMemo(() => {
                    if (u) return !1;
                    let t = !I && !P(w, a);
                    return I || t;
                  }, [u, I, a, w])
                    ? $()
                    : v;
                })({ control: u, name: n, defaultValue: g, exact: p }),
                $ = (function (t) {
                  let i = r.default.useContext(z),
                    { control: n = i, disabled: a, name: o, exact: u } = t || {},
                    s = () => ({ ...n._formState, defaultValues: n._defaultValues }),
                    [l, d] = r.default.useState(s),
                    c = r.default.useRef({
                      isDirty: !1,
                      isLoading: !1,
                      dirtyFields: !1,
                      touchedFields: !1,
                      validatingFields: !1,
                      isValidating: !1,
                      isValid: !1,
                      errors: !1,
                    }),
                    { resyncIfNeeded: f, snapshot: m } = Z(s);
                  return (
                    N(() => {
                      f(!a, s, d);
                      let t = n._subscribe({
                        name: o,
                        formState: c.current,
                        exact: u,
                        callback: (t) => {
                          a || d({ ...n._formState, ...t, defaultValues: n._defaultValues });
                        },
                      });
                      return () => {
                        (t(), m(!a, s));
                      };
                    }, [n, o, a, u, f, m]),
                    r.default.useEffect(() => {
                      c.current.isValid && n._setValid(!0);
                    }, [n]),
                    r.default.useMemo(() => D(l, n, c.current, !1), [l, n])
                  );
                })({ control: u, name: n, exact: p }),
                y = r.default.useRef(t),
                b = r.default.useRef(null),
                _ = r.default.useRef(
                  u.register(n, {
                    ...t.rules,
                    value: h,
                    ...("boolean" == typeof t.disabled ? { disabled: t.disabled } : {}),
                  }),
                );
              y.current = t;
              let x = r.default.useMemo(
                  () =>
                    Object.defineProperties(
                      {},
                      {
                        invalid: { enumerable: !0, get: () => !!w($.errors, n) },
                        isDirty: { enumerable: !0, get: () => !!w($.dirtyFields, n) },
                        isTouched: { enumerable: !0, get: () => !!w($.touchedFields, n) },
                        isValidating: { enumerable: !0, get: () => !!w($.validatingFields, n) },
                        error: { enumerable: !0, get: () => w($.errors, n) },
                      },
                    ),
                  [$, n],
                ),
                k = r.default.useCallback(
                  (t) => {
                    let r = o(t);
                    return (
                      w(u._fields, n) || (_.current = u.register(n, { ...y.current.rules, value: r })),
                      _.current.onChange({ target: { value: o(t), name: n }, type: "change" })
                    );
                  },
                  [n, u],
                ),
                U = r.default.useCallback(
                  () => _.current.onBlur({ target: { value: w(u._formValues, n), name: n }, type: f }),
                  [n, u._formValues],
                ),
                A = r.default.useCallback(
                  (t) => {
                    t &&
                      (b.current = {
                        focus: () => S(t.focus) && t.focus(),
                        select: () => S(t.select) && t.select(),
                        setCustomValidity: (r) => S(t.setCustomValidity) && t.setCustomValidity(r),
                        reportValidity: () => S(t.reportValidity) && t.reportValidity(),
                      });
                    let r = w(u._fields, n);
                    r && r._f && t && (r._f.ref = b.current);
                  },
                  [u._fields, n],
                ),
                j = r.default.useMemo(
                  () => ({
                    name: n,
                    value: h,
                    ...("boolean" == typeof a || $.disabled ? { disabled: $.disabled || a } : {}),
                    onChange: k,
                    onBlur: U,
                    ref: A,
                  }),
                  [n, a, $.disabled, k, U, A, h],
                );
              return (
                r.default.useEffect(() => {
                  let t = u._options.shouldUnregister || d;
                  _.current = u.register(n, {
                    ...y.current.rules,
                    ...("boolean" == typeof y.current.disabled ? { disabled: y.current.disabled } : {}),
                  });
                  let r = (t, r) => {
                    let i = w(u._fields, t);
                    i && i._f && (i._f.mount = r);
                  };
                  if ((r(n, !0), t)) {
                    let t = c(
                      w(
                        d ? u._defaultValues : u._options.values || u._defaultValues,
                        n,
                        w(u._options.defaultValues, n, y.current.defaultValue),
                      ),
                    );
                    (O(u._defaultValues, n, t), I(w(u._formValues, n)) && O(u._formValues, n, t));
                  }
                  if ((v || u.register(n), b.current)) {
                    let t = w(u._fields, n);
                    t && t._f && (t._f.ref = b.current);
                  }
                  return () => {
                    (v ? t && !u._state.action : t) ? u.unregister(n) : r(n, !1);
                  };
                }, [n, u, v, d]),
                r.default.useEffect(() => {
                  u._setDisabledField({ disabled: a, name: n });
                }, [a, n, u]),
                r.default.useMemo(() => ({ field: j, formState: $, fieldState: x }), [j, $, x])
              );
            })(t),
          ),
        "FormProvider",
        0,
        ({
          children: t,
          watch: i,
          getValues: n,
          getErrors: a,
          getFieldState: o,
          setError: u,
          clearErrors: s,
          setValue: l,
          setValues: d,
          trigger: c,
          formState: f,
          resetField: m,
          reset: p,
          resetDefaultValues: v,
          handleSubmit: g,
          unregister: h,
          control: $,
          register: y,
          setFocus: b,
          subscribe: _,
        }) => {
          let x = r.default.useMemo(
            () => ({
              watch: i,
              getValues: n,
              getErrors: a,
              getFieldState: o,
              setError: u,
              clearErrors: s,
              setValue: l,
              setValues: d,
              trigger: c,
              formState: f,
              resetField: m,
              reset: p,
              resetDefaultValues: v,
              handleSubmit: g,
              unregister: h,
              control: $,
              register: y,
              setFocus: b,
              subscribe: _,
            }),
            [s, $, f, a, o, n, g, y, p, v, m, u, b, l, d, _, c, h, i],
          );
          return r.default.createElement(
            et.Provider,
            { value: x },
            r.default.createElement(z.Provider, { value: x.control }, t),
          );
        },
        "appendErrors",
        0,
        F,
        "get",
        0,
        w,
        "set",
        0,
        O,
        "useForm",
        0,
        function (t = {}) {
          let u = r.default.useRef(void 0),
            p = r.default.useRef(void 0),
            v = r.default.useRef(t.formControl),
            [g, h] = r.default.useState(() => ({
              ...c(e_),
              isLoading: S(t.defaultValues),
              errors: t.errors || {},
              disabled: t.disabled || !1,
              defaultValues: S(t.defaultValues) ? void 0 : t.defaultValues,
            }));
          if (!u.current || (t.formControl && v.current !== t.formControl))
            if (((v.current = t.formControl), t.formControl))
              ((u.current = { ...t.formControl, formState: g }),
                t.defaultValues && !S(t.defaultValues) && t.formControl.reset(t.defaultValues, t.resetOptions));
            else {
              let { formControl: r, ...p } = (function (t = {}) {
                let r = { ...ey, ...t },
                  u = { ...c(e_), isLoading: S(r.defaultValues), errors: r.errors || {}, disabled: r.disabled || !1 },
                  p = {},
                  v = ((a(r.defaultValues) || a(r.values)) && c(r.defaultValues || r.values)) || {},
                  g = r.shouldUnregister ? {} : c(v),
                  h = { action: !1, actionArrayLengths: new Map(), mount: !1, watch: !1, keepIsValid: !1 },
                  $ = {
                    mount: new Set(),
                    disabled: new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    registerName: new Set(),
                  },
                  y = {},
                  x = {},
                  z = 0,
                  D = C(r.mode),
                  N = C(r.reValidateMode),
                  U = {
                    isDirty: !1,
                    dirtyFields: !1,
                    validatingFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  },
                  A = { ...U },
                  Z = { ...A },
                  F = (...t) => t.some((t) => A[t] || Z[t]),
                  B = { array: er(), state: er() },
                  J = 0,
                  W = 0,
                  K = "all" === r.criteriaMode,
                  G = (t, r) => (i) => {
                    (clearTimeout(x[t]), (x[t] = setTimeout(r, i)));
                  },
                  X = (t) => {
                    (clearTimeout(x[t]), delete x[t], delete y[t]);
                  },
                  q = (t) => {
                    X(t);
                    let r = `${t}.`;
                    for (let t of Object.keys(y)) t.startsWith(r) && X(t);
                  },
                  et = async (t) => {
                    if (!h.keepIsValid && !r.disabled && (F("isValid") || t)) {
                      let t,
                        i = ++J;
                      (r.resolver
                        ? ((t = V((await ec()).errors)), i === J && ei())
                        : (t = await ek({ fields: p, onlyCheckValid: !0, eventType: "valid" })),
                        i === J && t !== u.isValid && B.state.next({ isValid: t }));
                    }
                  },
                  ei = (t, i) => {
                    !r.disabled &&
                      F("isValidating", "validatingFields") &&
                      ((t || $.mount).forEach((t) => {
                        t && (i ? O(u.validatingFields, t, i) : ee(u.validatingFields, t));
                      }),
                      B.state.next({ validatingFields: u.validatingFields, isValidating: !V(u.validatingFields) }));
                  },
                  eu = () => {
                    u.dirtyFields = ef(v, g, void 0, p);
                  },
                  es = (t, r) => {
                    (O(u.errors, t, r), (u.errors = { ...u.errors }), B.state.next({ errors: u.errors }));
                  },
                  el = (r, i, a, o) => {
                    let l = w(p, r);
                    if (l) {
                      if (
                        ((t) => {
                          let r = k.test(t) ? [t] : s(t),
                            i = g,
                            a = v;
                          for (let t = 0; t < r.length - 1; t++) {
                            let o = r[t];
                            if (((i = n(i) ? i : i[o]), (a = n(a) ? a : a[o]), null === i && null !== a)) return !0;
                          }
                          return !1;
                        })(r) ||
                        ((t) => {
                          if (!h.actionArrayLengths.size) return !1;
                          let r = k.test(t) ? [t] : s(t),
                            i = g,
                            a = "",
                            o = -1,
                            u = 0;
                          for (let t = 0; t < r.length && !n(i); t++) {
                            let n = r[t];
                            if (((a = a ? `${a}.${n}` : n), Array.isArray(i) && +n >= i.length))
                              return -1 !== o && (t !== o || +n < u);
                            if (
                              (h.actionArrayLengths.has(a) && ((o = t + 1), (u = h.actionArrayLengths.get(a))),
                              I((i = i[n])) && -1 !== o && t > o && +r[o] < u)
                            )
                              return !0;
                          }
                          return !1;
                        })(r)
                      )
                        return;
                      let d = I(w(g, r)),
                        c = w(g, r, I(a) ? w(v, r) : a);
                      (I(c) || (o && o.defaultChecked) || i ? O(g, r, i ? c : ep(l._f)) : eS(r, c),
                        h.mount &&
                          !h.action &&
                          (et(),
                          d && u.isDirty && F("isDirty") && (eI() || ((u.isDirty = !1), B.state.next({ ...u }))),
                          t.shouldUnregister && d && !I(w(g, r)) && T(r, $) && (h.watch = !0)));
                    }
                  },
                  ed = (t, i, n, a, o) => {
                    let s = !1,
                      l = !1,
                      d = { name: t };
                    if (!r.disabled || !0 === a) {
                      if (!n || a) {
                        let r = P(w(v, t), i);
                        if (
                          (F("isDirty") &&
                            ((l = u.isDirty), (u.isDirty = d.isDirty = !r || eI()), (s = l !== d.isDirty)),
                          (l = !!w(u.dirtyFields, t)),
                          r !== u.isDirty)
                        ) {
                          var c = u.dirtyFields,
                            f = ef(v, g, void 0, p);
                          for (let t in c) t in f || delete c[t];
                          Object.assign(c, f);
                        } else r ? ee(u.dirtyFields, t) : O(u.dirtyFields, t, !0);
                        ((d.dirtyFields = u.dirtyFields), (s = s || (F("dirtyFields") && !r !== l)));
                      }
                      if (n) {
                        let r = w(u.touchedFields, t);
                        r ||
                          (O(u.touchedFields, t, n),
                          (d.touchedFields = u.touchedFields),
                          (s = s || (F("touchedFields") && r !== n)));
                      }
                      s && o && B.state.next(d);
                    }
                    return s ? d : {};
                  },
                  ec = async (t) => (
                    ei(t, !0),
                    await r.resolver(
                      g,
                      r.context,
                      ((t, r, i, n) => {
                        let a = {};
                        for (let i of t) {
                          let t = w(r, i);
                          t && O(a, i, t._f);
                        }
                        return { criteriaMode: i, names: [...t], fields: a, shouldUseNativeValidation: n };
                      })(t || $.mount, p, r.criteriaMode, r.shouldUseNativeValidation),
                    )
                  ),
                  eg = async (t) => {
                    let r = W,
                      { errors: i } = await ec(t);
                    if (r !== W) return i;
                    if ((ei(t), t)) {
                      for (let r of t) {
                        let t = w(i, r);
                        X(r);
                        let n = $.array.has(r) && a(t) && !Object.keys(t).some((t) => !Number.isNaN(Number(t))),
                          o = w(p, r),
                          s = a(o) && Object.keys(o).some((t) => "_f" !== t);
                        n
                          ? R(u.errors, { [r]: t }, r)
                          : (null == t ? void 0 : t.type) ||
                              (null == t ? void 0 : t.message) ||
                              Array.isArray(t) ||
                              (a(t) && s)
                            ? O(u.errors, r, t)
                            : ee(u.errors, r);
                      }
                      u.errors = { ...u.errors };
                    } else (Object.keys(y).forEach(X), (u.errors = i));
                    return i;
                  },
                  ex = async ({ name: r, eventType: i }) => {
                    if (t.validate) {
                      let n = await t.validate({ formValues: g, formState: u, name: r, eventType: i });
                      if (a(n))
                        for (let t in n) {
                          let r = n[t];
                          r && ej(`${eb}.${t}`, { message: j(r.message) ? r.message : "", type: r.type || b });
                        }
                      else j(n) || !n ? ej(eb, { message: n || "", type: b }) : eZ(eb);
                      return n;
                    }
                    return !0;
                  },
                  ek = async ({
                    fields: i,
                    onlyCheckValid: n,
                    name: a,
                    eventType: o,
                    context: s = { valid: !0, runRootValidation: !1 },
                  }) => {
                    if (
                      t.validate &&
                      ((s.runRootValidation = !0), !(await ex({ name: a, eventType: o }))) &&
                      ((s.valid = !1), n)
                    )
                      return s.valid;
                    for (let a in i) {
                      let l = i[a];
                      if (l) {
                        let { _f: i, ...d } = l;
                        if (i) {
                          let a = $.array.has(i.name),
                            o = l._f && eh(l._f),
                            d = F("isValidating", "validatingFields");
                          o && d && ei([i.name], !0);
                          let c = await H(l, $.disabled, g, K, r.shouldUseNativeValidation && !n, a);
                          if (
                            (o && d && ei([i.name]),
                            (c[i.name] && ((s.valid = !1), n)) ||
                              (n ||
                                (X(i.name),
                                w(c, i.name)
                                  ? a
                                    ? R(u.errors, c, i.name)
                                    : O(u.errors, i.name, c[i.name])
                                  : ee(u.errors, i.name)),
                              t.shouldUseNativeValidation && c[i.name]))
                          )
                            break;
                        }
                        V(d) || (await ek({ context: s, onlyCheckValid: n, fields: d, name: a, eventType: o }));
                      }
                    }
                    return s.valid;
                  },
                  eI = (t, r) => (t && r && O(g, t, r), !P(h.mount ? g : v, v)),
                  ew = (t, r, i) => E(t, $, { ...(h.mount ? g : I(r) || j(t) ? v : r) }, i, r),
                  eS = (t, r, i = {}, a = !1, o = !1, u = !1) => {
                    let s = w(p, t),
                      l = r;
                    if (s) {
                      let i = s._f;
                      i &&
                        (i.disabled || O(g, t, em(r, i)),
                        (l = M(i.ref) && n(r) ? "" : r),
                        "select-multiple" === i.ref.type
                          ? [...i.ref.options].forEach((t) => (t.selected = l.includes(t.value)))
                          : i.refs
                            ? "checkbox" === i.ref.type
                              ? i.refs.forEach((t) => {
                                  (t.defaultChecked && t.disabled) ||
                                    (Array.isArray(l)
                                      ? (t.checked = !!l.find((r) => r === t.value))
                                      : (t.checked = l === t.value || !!l));
                                })
                              : i.refs.forEach((t) => (t.checked = t.value === l))
                            : "file" === i.ref.type
                              ? (i.ref.value = "")
                              : ((i.ref.value = l),
                                i.ref.type || o || u || B.state.next({ name: t, values: a ? g : c(g) })));
                    }
                    ((i.shouldDirty || i.shouldTouch) &&
                      ed(
                        t,
                        s && s._f && !s._f.disabled && (s._f.valueAsNumber || s._f.valueAsDate || s._f.setValueAs)
                          ? em(r, s._f)
                          : l,
                        i.shouldTouch,
                        i.shouldDirty,
                        !o,
                      ),
                      i.shouldValidate && eA(t, { delayError: i.delayError }));
                  },
                  eO = (t, r, n, o = !1, u = !1, s = !1) => {
                    for (let l in ($.array.has(t) && B.array.next({ name: t, values: o ? g : c(g) }), r)) {
                      if (!r.hasOwnProperty(l)) continue;
                      let d = r[l],
                        c = t + "." + l,
                        f = w(p, c);
                      ($.array.has(t) || a(d) || (f && !f._f)) && !i(d) ? eO(c, d, n, o, u, s) : eS(c, d, n, o, u, s);
                    }
                  },
                  ez = (t, r, i, a, o = !1) => {
                    let s = w(p, t),
                      l = $.array.has(t),
                      d = a ? r : c(r),
                      f = P(w(g, t), d);
                    if ((f || O(g, t, d), l))
                      (B.array.next({ name: t, values: a ? g : c(g) }),
                        F("isDirty", "dirtyFields") &&
                          i.shouldDirty &&
                          (eu(), o || B.state.next({ name: t, dirtyFields: u.dirtyFields, isDirty: eI(t, d) })));
                    else {
                      let r = (Array.isArray(d) && !d.length) || V(d),
                        u = !f && !o;
                      !s || s._f || n(d) || r ? eS(t, d, i, a, o, u) : eO(t, d, i, a, o, u);
                    }
                    if (!f && !o) {
                      let r = T(t, $),
                        i = a ? g : c(g);
                      if ((B.state.next({ ...(r && u), name: h.mount || r ? t : void 0, values: i }), !l))
                        for (let r of ((t, r) => {
                          let i = r.split("."),
                            n = [],
                            a = i[0];
                          for (let r = 1; r < i.length; a += "." + i[r++])
                            !isNaN(+i[r]) && t.has(a) && n.push(`${a}.${i[r]}`);
                          return n;
                        })($.array, t))
                          B.state.next({ name: r, values: i });
                    }
                  },
                  eD = (t, r, i = {}) => ez(t, r, i, !1),
                  eN = async (n) => {
                    h.mount = !0;
                    let a = n.target,
                      s = a.name,
                      l = !0,
                      d = w(p, s),
                      m = (t) => {
                        l = Number.isNaN(t) || (i(t) && isNaN(t.getTime())) || P(t, w(g, s, t));
                      };
                    if (d) {
                      var v, b, _, x, k;
                      let i,
                        h,
                        Z,
                        j = a.type ? ep(d._f) : o(n),
                        E = n.type === f || "focusout" === n.type,
                        C =
                          !(
                            (Z = d._f).mount &&
                            (Z.required ||
                              (!I(Z.required) && !1 !== Z.required) ||
                              !I(Z.min) ||
                              !I(Z.max) ||
                              !I(Z.maxLength) ||
                              !I(Z.minLength) ||
                              Z.pattern ||
                              Z.validate)
                          ) &&
                          !t.validate &&
                          !r.resolver &&
                          !w(u.errors, s) &&
                          !d._f.deps,
                        L =
                          C ||
                          ((v = E),
                          (b = w(u.touchedFields, s)),
                          (_ = u.isSubmitted),
                          (x = N),
                          !(k = D).isOnAll &&
                            (!_ && k.isOnTouch
                              ? !(b || v)
                              : (_ ? x.isOnBlur : k.isOnBlur)
                                ? !v
                                : (_ ? !x.isOnChange : !k.isOnChange) || v)),
                        R = T(s, $, E);
                      if ((O(g, s, c(j)), E)) {
                        if (!a || !a.readOnly) {
                          d._f.onBlur && d._f.onBlur(n);
                          let t = y[s];
                          t && t(0);
                        }
                      } else d._f.onChange && d._f.onChange(n);
                      let M = ed(s, j, E),
                        J = !V(M) || R;
                      if ((E || B.state.next({ name: s, type: n.type, ...(z ? { values: c(g) } : {}) }), L))
                        return (
                          (!C || !u.isValid) && F("isValid") && ("onBlur" === r.mode ? E && et() : E || et()),
                          J && B.state.next({ name: s, ...(R ? {} : M) })
                        );
                      if (
                        (!r.resolver && t.validate && (await ex({ name: s, eventType: n.type })),
                        !E && R && B.state.next({ ...u }),
                        r.resolver)
                      ) {
                        let { errors: t } = await ec([s]);
                        if ((ei([s]), m(j), !l)) {
                          V(M) || B.state.next(M);
                          return;
                        }
                        let r = e$(u.errors, p, s),
                          n = e$(t, p, r.name || s);
                        ((i = n.error), (s = n.name), (h = V(t)));
                      } else
                        (ei([s], !0),
                          (i = (await H(d, $.disabled, g, K, r.shouldUseNativeValidation))[s]),
                          ei([s]),
                          m(j),
                          l &&
                            (i
                              ? (h = !1)
                              : F("isValid") &&
                                (h = await ek({ fields: p, onlyCheckValid: !0, name: s, eventType: n.type }))));
                      if (l) {
                        d._f.deps && (!Array.isArray(d._f.deps) || d._f.deps.length > 0) && eA(d._f.deps);
                        var S = s,
                          U = h,
                          A = i;
                        let t = w(u.errors, S),
                          n = F("isValid") && "boolean" == typeof U && u.isValid !== U;
                        if (
                          (r.delayError && A
                            ? ((y[S] = G(S, () => es(S, A))), y[S](r.delayError))
                            : (X(S), A ? O(u.errors, S, A) : ee(u.errors, S), (u.errors = { ...u.errors })),
                          (A ? !P(t, A) : t) || !V(M) || n)
                        ) {
                          let t = {
                            ...M,
                            ...(n && "boolean" == typeof U ? { isValid: U } : {}),
                            errors: u.errors,
                            name: S,
                          };
                          B.state.next(t);
                        }
                      }
                    }
                  },
                  eU = (t, r) => {
                    if (w(u.errors, r) && t.focus) return (t.focus(), 1);
                  },
                  eA = async (t, i = {}) => {
                    let n,
                      a,
                      o = Y(t);
                    if (r.resolver) {
                      let r = W,
                        i = await eg(I(t) ? t : o);
                      if (((n = V(i)), (a = t ? !o.some((t) => w(i, t)) : n), r !== W)) return a;
                    } else
                      t
                        ? ((a = (
                            await Promise.all(
                              o.map(async (t) => {
                                let r = w(p, t);
                                return await ek({ fields: r && r._f ? { [t]: r } : r, eventType: m });
                              }),
                            )
                          ).every(Boolean)) ||
                            u.isValid) &&
                          et()
                        : (a = n = await ek({ fields: p, name: t, eventType: m }));
                    if (i.delayError && r.delayError && j(t)) {
                      let i = w(u.errors, t);
                      i ? (ee(u.errors, t), (y[t] = G(t, () => es(t, i))), y[t](r.delayError)) : X(t);
                    }
                    if (i.shouldTouch) for (let r of t ? o : $.mount) $.array.has(r) || O(u.touchedFields, r, !0);
                    return (
                      B.state.next({
                        ...(!j(t) || (F("isValid") && n !== u.isValid) ? {} : { name: t }),
                        ...(r.resolver || !t ? { isValid: n } : {}),
                        ...(i.shouldTouch && F("touchedFields") ? { touchedFields: u.touchedFields } : {}),
                        errors: u.errors,
                      }),
                      i.shouldFocus && !a && L(p, eU, t ? o : $.mount),
                      a
                    );
                  },
                  eP = (t, r) => {
                    let i = r || u,
                      n = w(i.errors, t);
                    return {
                      invalid: !!n,
                      isDirty: !!w(i.dirtyFields, t),
                      error: n,
                      isValidating: !!w(i.validatingFields, t),
                      isTouched: !!w(i.touchedFields, t),
                    };
                  },
                  eZ = (t) => {
                    let r = t ? Y(t) : void 0;
                    r
                      ? r.forEach((t) => {
                          (q(t), ee(u.errors, t), B.state.next({ name: t, errors: u.errors }));
                        })
                      : (Object.keys(y).forEach(X), (u.errors = {}), B.state.next({ errors: u.errors }));
                  },
                  ej = (t, r, i) => {
                    X(t);
                    let n = (w(p, t, { _f: {} })._f || {}).ref,
                      { ref: a, message: o, type: s, types: l, ...d } = w(u.errors, t) || {};
                    (O(u.errors, t, { ...d, ...r, ref: n }),
                      B.state.next({ name: t, errors: u.errors, isValid: !1 }),
                      i && i.shouldFocus && n && n.focus && n.focus());
                  },
                  eE = (t) => {
                    var r;
                    let i = !!(null == (r = t.formState) ? void 0 : r.values);
                    i && z++;
                    let { unsubscribe: n } = B.state.subscribe({
                      next: (r) => {
                        var i, n;
                        let a, o, s, l;
                        if (
                          ((a = t.name),
                          (o = r.name),
                          (s = t.exact),
                          (!a ||
                            !o ||
                            a === o ||
                            Y(a).some(
                              (t) => t && (s ? t === o || t.startsWith(o + ".") : t.startsWith(o) || o.startsWith(t)),
                            )) &&
                            ((i = t.formState || A),
                            (n = t.reRenderRoot),
                            eB(r),
                            !(l = Object.keys(r).filter((t) => "name" !== t)).length ||
                              (n && l.length >= Object.keys(i).length) ||
                              l.find((t) => i[t] === (!n || "all"))))
                        ) {
                          let i = { ...g };
                          t.callback({ values: i, ...u, ...r, defaultValues: v });
                        }
                      },
                    });
                    if (!i) return n;
                    let a = !1;
                    return () => {
                      a || ((a = !0), z--, n());
                    };
                  },
                  eC = (t, i = {}) => {
                    for (let n of t ? Y(t) : $.mount)
                      ($.mount.delete(n),
                        $.array.delete(n),
                        $.disabled.delete(n),
                        i.keepValue || (ee(p, n), ee(g, n)),
                        i.keepError || (q(n), ee(u.errors, n)),
                        i.keepDirty || ee(u.dirtyFields, n),
                        i.keepTouched || ee(u.touchedFields, n),
                        i.keepIsValidating || ee(u.validatingFields, n),
                        r.shouldUnregister || i.keepDefaultValue || ee(v, n));
                    (z && B.state.next({ values: c(g) }),
                      B.state.next({
                        ...u,
                        ...(i.keepDirty ? {} : { isDirty: eI() }),
                        ...(i.keepIsValidating ? {} : { isValidating: !V(u.validatingFields) }),
                      }),
                      i.keepIsValid || et());
                  },
                  eT = ({ disabled: t, name: r }) => {
                    if (("boolean" == typeof t && h.mount) || t || $.disabled.has(r)) {
                      let i = $.disabled.has(r);
                      (t ? $.disabled.add(r) : $.disabled.delete(r), !!t !== i && h.mount && !h.action && et());
                    }
                  },
                  eL = (t, i = {}) => {
                    let n = w(p, t),
                      a = "boolean" == typeof i.disabled || "boolean" == typeof r.disabled,
                      o = !$.registerName.has(t) && n && n._f && !n._f.mount;
                    return (
                      (O(p, t, {
                        ...(n || {}),
                        _f: { ...(n && n._f ? n._f : { ref: { name: t } }), name: t, mount: !0, ...i },
                      }),
                      $.mount.add(t),
                      n && !o)
                        ? eT({ disabled: "boolean" == typeof i.disabled ? i.disabled : r.disabled, name: t })
                        : el(t, !0, i.value),
                      {
                        ...(a ? { disabled: i.disabled || r.disabled } : {}),
                        ...(r.progressive
                          ? {
                              required: !!i.required,
                              min: ev(i.min),
                              max: ev(i.max),
                              minLength: ev(i.minLength),
                              maxLength: ev(i.maxLength),
                              pattern: ev(i.pattern),
                            }
                          : {}),
                        name: t,
                        onChange: eN,
                        onBlur: eN,
                        ref: (a) => {
                          if (a) {
                            let r;
                            ($.registerName.add(t), eL(t, i), $.registerName.delete(t), (n = w(p, t)));
                            let o =
                                (I(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0]) ||
                                a,
                              u = "radio" === (r = o).type || "checkbox" === r.type,
                              s = n._f.refs || [];
                            if (u ? s.find((t) => t === o) : o === n._f.ref) return;
                            let l = { ...n._f };
                            (u
                              ? ((l.refs = [...s.filter(ea), o, ...(Array.isArray(w(v, t)) ? [{}] : [])]),
                                (l.ref = { type: o.type, name: t }))
                              : ((l.ref = o), delete l.refs),
                              O(p, t, { _f: l }),
                              el(t, !1, void 0, o));
                          } else
                            ((n = w(p, t, {}))._f && (n._f.mount = !1),
                              (r.shouldUnregister || i.shouldUnregister) &&
                                !(l($.array, t) && h.action) &&
                                $.unMount.add(t));
                        },
                      }
                    );
                  },
                  eR = () => r.shouldFocusError && !r.shouldUseNativeValidation && L(p, eU, $.mount),
                  eV = (t, i) => async (n) => {
                    let a, o;
                    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
                    let s = c(g);
                    if ((B.state.next({ isSubmitting: !0 }), r.resolver)) {
                      let t = W,
                        { errors: r, values: i } = await ec();
                      if (t !== W) return;
                      (ei(), Object.keys(y).forEach(X), (u.errors = r), (s = c(i)));
                    } else (await ek({ fields: p, eventType: "submit" }), ee(u.errors, _));
                    if ($.disabled.size) for (let t of $.disabled) ee(s, t);
                    if (V(u.errors)) {
                      B.state.next({ errors: {} });
                      try {
                        a = await t(s, n);
                      } catch (t) {
                        o = t;
                      }
                    } else (i && (await i({ ...u.errors }, n)), eR(), setTimeout(eR));
                    if (
                      (B.state.next({
                        isSubmitted: !0,
                        isSubmitting: !1,
                        isSubmitSuccessful: V(u.errors) && !o,
                        submitCount: u.submitCount + 1,
                        errors: u.errors,
                      }),
                      o)
                    )
                      throw o;
                    return a;
                  },
                  eM = (t, i = {}) => {
                    W++;
                    let n = t ? c(t) : v,
                      a = c(n),
                      o = V(t),
                      s = p;
                    if ((Object.keys(y).forEach(X), i.keepDefaultValues || (v = n), !i.keepValues)) {
                      if (i.keepDirtyValues)
                        for (let t of new Set([
                          ...$.mount,
                          ...(function t(r, i, n = "", a = []) {
                            for (let o in r) {
                              let u = n ? `${n}.${o}` : o,
                                s = r[o];
                              eo(s) && eo(w(i, u)) ? t(s, i, u, a) : a.push(u);
                            }
                            return a;
                          })(ef(v, g, void 0, s), u.dirtyFields),
                        ])) {
                          let r = w(u.dirtyFields, t),
                            i = w(g, t),
                            n = w(a, t);
                          r && !I(i) ? O(a, t, i) : r || I(n) || eD(t, n);
                        }
                      else {
                        if (d && I(t))
                          for (let t of $.mount) {
                            let r = w(p, t);
                            if (r && r._f) {
                              let t = Array.isArray(r._f.refs) ? r._f.refs[0] : r._f.ref;
                              if (M(t)) {
                                let r = t.closest("form");
                                if (r) {
                                  r.reset();
                                  break;
                                }
                              }
                            }
                          }
                        if (i.keepFieldsRef) for (let t of $.mount) eD(t, w(a, t));
                        else p = {};
                      }
                      if (r.shouldUnregister) {
                        if (((g = i.keepDefaultValues ? c(v) : {}), i.keepFieldsRef))
                          for (let t of $.mount) O(g, t, w(a, t));
                      } else g = c(a);
                      (B.array.next({ values: { ...a } }),
                        B.state.next({ name: void 0, type: void 0, values: { ...a } }));
                    }
                    (($ = {
                      mount: i.keepDirtyValues ? $.mount : new Set(),
                      unMount: new Set(),
                      array: new Set(),
                      registerName: new Set(),
                      disabled: new Set(),
                      watch: new Set(),
                      watchAll: !1,
                      focus: "",
                    }),
                      (h.mount =
                        !A.isValid || !!i.keepIsValid || !!i.keepDirtyValues || (!r.shouldUnregister && !V(a))),
                      (h.watch = !!r.shouldUnregister),
                      (h.keepIsValid = !!i.keepIsValid),
                      (h.action = !1),
                      h.actionArrayLengths.clear(),
                      i.keepErrors || (u.errors = {}),
                      B.state.next({
                        submitCount: i.keepSubmitCount ? u.submitCount : 0,
                        isDirty:
                          !o && (i.keepDirty ? u.isDirty : i.keepValues ? eI() : !!(i.keepDefaultValues && !P(t, v))),
                        isSubmitted: !!i.keepIsSubmitted && u.isSubmitted,
                        dirtyFields: o
                          ? {}
                          : i.keepDirtyValues
                            ? i.keepDefaultValues && g
                              ? ef(v, g, void 0, s)
                              : u.dirtyFields
                            : i.keepDefaultValues && t
                              ? ef(v, t, void 0, s)
                              : i.keepDirty
                                ? u.dirtyFields
                                : i.keepValues
                                  ? ef(v, g, void 0, s)
                                  : {},
                        touchedFields: i.keepTouched ? u.touchedFields : {},
                        ...(!i.keepIsValidating && (u.isValidating || !V(u.validatingFields))
                          ? { validatingFields: {}, isValidating: !1 }
                          : null),
                        errors: i.keepErrors ? u.errors : {},
                        isSubmitSuccessful: !!i.keepIsSubmitSuccessful && u.isSubmitSuccessful,
                        isSubmitting: !1,
                        defaultValues: v,
                      }));
                  },
                  eF = (t, i) => eM(S(t) ? t(g) : t, { ...r.resetOptions, ...i }),
                  eB = (t) => {
                    let { name: r, type: i, values: n, ...a } = t;
                    u = { ...u, ...a };
                  };
                B.state.subscribe({ next: eB });
                let eJ = {
                  control: {
                    register: eL,
                    unregister: eC,
                    getFieldState: eP,
                    handleSubmit: eV,
                    setError: ej,
                    _subscribe: eE,
                    _runSchema: ec,
                    _updateIsValidating: ei,
                    _focusError: eR,
                    _getWatch: ew,
                    _getDirty: eI,
                    _setValid: et,
                    _setFieldArray: (t, i = [], n, a, o = !0, s = !0) => {
                      if (a && n && !r.disabled) {
                        h.action = !0;
                        let r = w(p, t);
                        if (
                          (h.actionArrayLengths.has(t) || h.actionArrayLengths.set(t, Array.isArray(r) ? r.length : 0),
                          s && Array.isArray(r))
                        ) {
                          let i = n(r, a.argA, a.argB);
                          o && O(p, t, i);
                        }
                        let d = w(u.errors, t);
                        if (s && Array.isArray(d)) {
                          var l;
                          let r,
                            i = d.root,
                            s = n(d, a.argA, a.argB) || d;
                          (i && (s.root = i),
                            o && O(u.errors, t, s),
                            Q((r = w((l = u.errors), t))).length || (null == r ? void 0 : r.root) || ee(l, t));
                        }
                        let c = w(u.touchedFields, t);
                        if (F("touchedFields") && s && Array.isArray(c)) {
                          let r = n(c, a.argA, a.argB);
                          o && O(u.touchedFields, t, r);
                        }
                        (F("dirtyFields") && eu(),
                          B.state.next({
                            name: t,
                            isDirty: eI(t, i),
                            dirtyFields: u.dirtyFields,
                            errors: u.errors,
                            isValid: u.isValid,
                          }));
                      } else O(g, t, i);
                    },
                    _setDisabledField: eT,
                    _setErrors: (t) => {
                      (Object.keys(y).forEach(X), (u.errors = t), B.state.next({ errors: u.errors, isValid: !1 }));
                    },
                    _getFieldArray: (t) => Q(w(h.mount ? g : v, t, r.shouldUnregister ? w(v, t, []) : [])),
                    _reset: eM,
                    _resetDefaultValues: () =>
                      S(r.defaultValues) &&
                      r.defaultValues().then((t) => {
                        (eF(t, r.resetOptions), B.state.next({ isLoading: !1 }));
                      }),
                    _removeUnmounted: () => {
                      for (let t of $.unMount) {
                        let r = w(p, t);
                        r && (r._f.refs ? r._f.refs.every((t) => !ea(t)) : !ea(r._f.ref)) && eC(t);
                      }
                      $.unMount = new Set();
                    },
                    _disableForm: (t) => {
                      "boolean" == typeof t &&
                        (B.state.next({ disabled: t }),
                        L(
                          p,
                          (r, i) => {
                            let n = w(p, i);
                            n &&
                              ((r.disabled = n._f.disabled || t),
                              Array.isArray(n._f.refs) &&
                                n._f.refs.forEach((r) => {
                                  r.disabled = n._f.disabled || t;
                                }));
                          },
                          0,
                        ));
                    },
                    _subjects: B,
                    _proxyFormState: A,
                    get _fields() {
                      return p;
                    },
                    get _formValues() {
                      return g;
                    },
                    get _state() {
                      return h;
                    },
                    set _state(value) {
                      h = value;
                    },
                    get _defaultValues() {
                      return v;
                    },
                    get _names() {
                      return $;
                    },
                    set _names(value) {
                      $ = value;
                    },
                    get _formState() {
                      return u;
                    },
                    get _options() {
                      return r;
                    },
                    set _options(value) {
                      ((D = C((r = { ...r, ...value }).mode)),
                        (N = C(r.reValidateMode)),
                        (K = "all" === r.criteriaMode));
                    },
                  },
                  subscribe: (t) => (
                    (h.mount = !0),
                    (Z = { ...Z, ...t.formState }),
                    eE({ ...t, formState: { ...U, ...t.formState } })
                  ),
                  trigger: eA,
                  register: eL,
                  handleSubmit: eV,
                  watch: (t, r) => {
                    if (S(t)) {
                      z++;
                      let { unsubscribe: i } = B.state.subscribe({
                          next: (i) => "values" in i && t(i.values || ew(void 0, r), i),
                        }),
                        n = !1;
                      return {
                        unsubscribe: () => {
                          n || ((n = !0), z--, i());
                        },
                      };
                    }
                    return ew(t, r, !0);
                  },
                  setValue: eD,
                  setValues: (t, r = {}) => {
                    let i = S(t) ? t(g) : t;
                    if (!P(g, i)) {
                      for (let t of ((g = { ...g, ...i }), $.mount)) en(i, t) && ez(t, w(i, t), r, !0, !0);
                      (B.state.next({ ...u, name: void 0, type: void 0, ...(z ? { values: g } : {}) }),
                        r.shouldValidate && et());
                    }
                  },
                  getValues: (t, r) => {
                    let i = { ...(h.mount ? g : v) };
                    return (
                      r &&
                        (i = (function t(r, i) {
                          let n = {};
                          for (let o in r)
                            if (r.hasOwnProperty(o)) {
                              let u = r[o],
                                s = i[o];
                              if (u && a(u) && s) {
                                let r = t(u, s);
                                a(r) && (n[o] = r);
                              } else r[o] && (n[o] = s);
                            }
                          return n;
                        })(r.dirtyFields ? u.dirtyFields : u.touchedFields, i)),
                      I(t) ? i : j(t) ? w(i, t) : t.map((t) => w(i, t))
                    );
                  },
                  getErrors: (t) => (I(t) ? { ...u.errors } : j(t) ? w(u.errors, t) : t.map((t) => w(u.errors, t))),
                  reset: eF,
                  resetField: (t, r = {}) => {
                    w(p, t) &&
                      (ee(u.validatingFields, t),
                      I(r.defaultValue) ? eD(t, c(w(v, t))) : (eD(t, r.defaultValue), O(v, t, c(r.defaultValue))),
                      r.keepTouched || ee(u.touchedFields, t),
                      r.keepDirty || (ee(u.dirtyFields, t), (u.isDirty = r.defaultValue ? eI(t, c(w(v, t))) : eI())),
                      r.keepError || (X(t), ee(u.errors, t), et()),
                      B.state.next({ ...u, isValidating: !V(u.validatingFields) }));
                  },
                  resetDefaultValues: (t, r = {}) => {
                    if (((v = c(t)), !r.keepDirty)) {
                      let t = ef(v, g, void 0, p);
                      ((u.dirtyFields = t), (u.isDirty = !V(t)));
                    }
                    (r.keepIsValid || et(), B.state.next({ ...u, defaultValues: v }));
                  },
                  clearErrors: eZ,
                  unregister: eC,
                  setError: ej,
                  setFocus: (t, r = {}) => {
                    let i = w(p, t),
                      n = i && i._f;
                    if (n) {
                      let t = n.refs ? n.refs[0] : n.ref;
                      t.focus &&
                        setTimeout(() => {
                          (t.focus(), r.shouldSelect && S(t.select) && t.select());
                        });
                    }
                  },
                  getFieldState: eP,
                };
                return { ...eJ, formControl: eJ };
              })(t);
              u.current = { ...p, formState: g };
            }
          let $ = u.current.control;
          $._options = t;
          let y = () => ({ ...$._formState, defaultValues: $._defaultValues }),
            { resyncIfNeeded: x, snapshot: z } = Z(y);
          return (
            N(() => {
              x(!0, y, h);
              let t = $._subscribe({
                formState: $._proxyFormState,
                callback: () => h({ ...$._formState, defaultValues: $._defaultValues }),
                reRenderRoot: !0,
              });
              return (
                h((t) => ({ ...t, isReady: !0 })),
                ($._formState.isReady = !0),
                () => {
                  (t(), z(!0, y));
                }
              );
            }, [$, x, z]),
            r.default.useEffect(() => $._disableForm(t.disabled), [$, t.disabled]),
            r.default.useEffect(() => {
              (t.mode && ($._options.mode = t.mode),
                t.reValidateMode && ($._options.reValidateMode = t.reValidateMode));
            }, [$, t.mode, t.reValidateMode]),
            r.default.useEffect(() => {
              t.errors && ($._setErrors(t.errors), $._focusError());
            }, [$, t.errors]),
            r.default.useEffect(() => {
              t.shouldUnregister && $._subjects.state.next({ values: $._getWatch() });
            }, [$, t.shouldUnregister]),
            r.default.useEffect(() => {
              if ($._proxyFormState.isDirty) {
                let t = $._getDirty();
                t !== g.isDirty && $._subjects.state.next({ isDirty: t });
              }
            }, [$, g.isDirty]),
            r.default.useEffect(() => {
              var r;
              t.values && !P(t.values, p.current)
                ? ($._reset(t.values, { keepFieldsRef: !0, ...$._options.resetOptions }),
                  (null == (r = $._options.resetOptions) ? void 0 : r.keepIsValid) || $._setValid(),
                  (p.current = t.values),
                  h((t) => ({ ...t })))
                : $._resetDefaultValues();
            }, [$, t.values]),
            r.default.useEffect(() => {
              ($._state.mount || ($._setValid(), ($._state.mount = !0)),
                $._state.watch && (($._state.watch = !1), $._subjects.state.next({ ...$._formState })),
                $._removeUnmounted());
            }),
            (u.current.formState = r.default.useMemo(() => D(g, $), [$, g])),
            u.current
          );
        },
        "useFormContext",
        0,
        () => r.default.useContext(et),
      ],
      20789,
    );
    let ex = (t, r, i) => {
        if (t && "reportValidity" in t) {
          let n = w(i, r);
          (t.setCustomValidity((n && n.message) || ""), t.reportValidity());
        }
      },
      ek = (t, r) => {
        for (let i in r.fields) {
          let n = r.fields[i];
          n && n.ref && "reportValidity" in n.ref ? ex(n.ref, i, t) : n && n.refs && n.refs.forEach((r) => ex(r, i, t));
        }
      },
      eI = (t, r) => {
        r.shouldUseNativeValidation && ek(t, r);
        let i = {};
        for (let n in t) {
          let a = w(r.fields, n),
            o = Object.assign(t[n] || {}, { ref: a && a.refs ? a.refs[0] : a && a.ref });
          if (ew(r.names || Object.keys(t), n)) {
            let t = Object.assign({}, w(i, n));
            (O(t, "root", o), O(i, n, t));
          } else O(i, n, o);
        }
        return i;
      },
      ew = (t, r) => {
        let i = eS(r).replace(/[.*+?^${}()|\\]/g, "\\$&");
        return t.some((t) => eS(t).match(`^${i}\\.\\d+`));
      };
    function eS(t) {
      return t.replace(/\[(\d+)]/g, ".$1").replace(/[[\]]/g, "");
    }
    function eO() {
      return (eO = Object.assign.bind()).apply(null, arguments);
    }
    function ez(t, r) {
      try {
        var i = t();
      } catch (t) {
        return r(t);
      }
      return i && i.then ? i.then(void 0, r) : i;
    }
    (t.s(
      [
        "zodResolver",
        0,
        function (t, r, i) {
          if ((void 0 === i && (i = {}), "_zod" in t && "object" == typeof t._zod))
            return function (n, a, o) {
              try {
                return Promise.resolve(
                  ez(
                    function () {
                      function a(t) {
                        return (
                          o.shouldUseNativeValidation && ek({}, o),
                          { errors: {}, values: i.raw ? Object.assign({}, n) : t }
                        );
                      }
                      return "sync" === i.mode ? a(t.parse(n, r)) : Promise.resolve(t.parseAsync(n, r)).then(a);
                    },
                    function (t) {
                      var r;
                      if (!(null == t || null == (r = t._zod) || null == (r = r.traits) || !r.has("$ZodError")))
                        return {
                          values: {},
                          errors: eI(
                            (function (t, r) {
                              for (var i = Object.create(null); t.length;)
                                !(function () {
                                  var n = t[0],
                                    a = n.code,
                                    o = n.message,
                                    u = n.path.join(".");
                                  if (!i[u])
                                    if ("invalid_union" === n.code && n.errors.length > 0) {
                                      var s,
                                        l,
                                        d = n.errors.reduce(function (t, r) {
                                          return r.length < t.length ? r : t;
                                        })[0];
                                      i[u] = {
                                        message: null != (s = null == d ? void 0 : d.message) ? s : o,
                                        type: null != (l = null == d ? void 0 : d.code) ? l : a,
                                      };
                                    } else i[u] = { message: o, type: a };
                                  if (
                                    ("invalid_union" === n.code &&
                                      n.errors.forEach(function (r) {
                                        return r.forEach(function (r) {
                                          return t.push(eO({}, r, { path: [].concat(n.path, r.path) }));
                                        });
                                      }),
                                    r)
                                  ) {
                                    var c = i[u].types,
                                      f = c && c[n.code];
                                    i[u] = F(u, r, i, a, f ? [].concat(f, n.message) : n.message);
                                  }
                                  t.shift();
                                })();
                              return i;
                            })(t.issues, !o.shouldUseNativeValidation && "all" === o.criteriaMode),
                            o,
                          ),
                        };
                      throw t;
                    },
                  ),
                );
              } catch (t) {
                return Promise.reject(t);
              }
            };
          if ("_def" in t && "object" == typeof t._def)
            return function (n, a, o) {
              try {
                return Promise.resolve(
                  ez(
                    function () {
                      return Promise.resolve(t["sync" === i.mode ? "parse" : "parseAsync"](n, r)).then(function (t) {
                        return (
                          o.shouldUseNativeValidation && ek({}, o),
                          { errors: {}, values: i.raw ? Object.assign({}, n) : t }
                        );
                      });
                    },
                    function (t) {
                      if (Array.isArray(null == t ? void 0 : t.issues))
                        return {
                          values: {},
                          errors: eI(
                            (function (t, r) {
                              for (var i = Object.create(null); t.length;) {
                                var n = t[0],
                                  a = n.code,
                                  o = n.message,
                                  u = n.path.join(".");
                                if (!i[u])
                                  if ("unionErrors" in n) {
                                    var s,
                                      l,
                                      d = n.unionErrors.reduce(function (t, r) {
                                        return r.errors.length < t.errors.length ? r : t;
                                      }).errors[0];
                                    i[u] = {
                                      message: null != (s = null == d ? void 0 : d.message) ? s : o,
                                      type: null != (l = null == d ? void 0 : d.code) ? l : a,
                                    };
                                  } else i[u] = { message: o, type: a };
                                if (
                                  ("unionErrors" in n &&
                                    n.unionErrors.forEach(function (r) {
                                      return r.errors.forEach(function (r) {
                                        return t.push(r);
                                      });
                                    }),
                                  r)
                                ) {
                                  var c = i[u].types,
                                    f = c && c[n.code];
                                  i[u] = F(u, r, i, a, f ? [].concat(f, n.message) : n.message);
                                }
                                t.shift();
                              }
                              return i;
                            })(t.errors, !o.shouldUseNativeValidation && "all" === o.criteriaMode),
                            o,
                          ),
                        };
                      throw t;
                    },
                  ),
                );
              } catch (t) {
                return Promise.reject(t);
              }
            };
          throw Error("Invalid input: not a Zod schema");
        },
      ],
      93470,
    ),
      t.s([], 99389),
      t.i(99389));
    var eD = t.i(75235),
      eN = t.i(56232),
      eU = t.i(74725),
      eA = t.i(86228);
    let eP = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: null,
        valueMissing: !1,
      },
      eZ = { disabled: !1, valid: null, touched: !1, dirty: !1, filled: !1, focused: !1 },
      ej = { valid: (t) => (null === t ? null : t ? { "data-valid": "" } : { "data-invalid": "" }) };
    t.s(["DEFAULT_FIELD_ROOT_STATE", 0, eZ, "DEFAULT_VALIDITY_STATE", 0, eP, "fieldValidityMapping", 0, ej], 26192);
    let eE = {
        invalid: void 0,
        name: void 0,
        validityData: { state: eP, errors: [], error: "", value: "", initialValue: null },
        setValidityData: eA.NOOP,
        disabled: void 0,
        setTouched: eA.NOOP,
        setDirty: eA.NOOP,
        setFilled: eA.NOOP,
        setFocused: eA.NOOP,
        validationMode: "onSubmit",
        shouldValidateOnChange: () => !1,
        state: eZ,
        registerFieldControl: eA.NOOP,
        validation: {
          getValidationProps: (t, r = eA.EMPTY_OBJECT) => r,
          inputRef: { current: null },
          registeredInputs: new Map(),
          registerInput: eA.NOOP,
          getInputControl: () => null,
          commit: async () => {},
          change: eA.NOOP,
        },
      },
      eC = r.createContext(eE);
    function eT(t = !0) {
      let i = r.useContext(eC);
      if (i.setValidityData === eA.NOOP && !t) throw Error((0, eU.default)(28));
      return i;
    }
    t.s(["FieldRootContext", 0, eC, "useFieldRootContext", 0, eT], 20056);
    let eL = r.createContext(void 0),
      eR = r.createContext({
        elementRef: { current: null },
        formRef: { current: { fields: new Map() } },
        errors: {},
        clearErrors: eA.NOOP,
        validationMode: "onSubmit",
        submitCountRef: { current: 0 },
      });
    function eV() {
      return r.useContext(eR);
    }
    t.s(["useFormContext", 0, eV], 91593);
    var eM = t.i(55399),
      eF = t.i(84092);
    let eB = r.createContext({
      controlId: void 0,
      registerControlId: eA.NOOP,
      resetControlId: eA.NOOP,
      labelId: void 0,
      setLabelId: eA.NOOP,
      messageIds: [],
      setMessageIds: eA.NOOP,
      getDescriptionProps: (t) => t,
    });
    function eJ() {
      return r.useContext(eB);
    }
    t.s(["LabelableContext", 0, eB, "useLabelableContext", 0, eJ], 92066);
    var eW = t.i(21935);
    let eK = function (t) {
      let i = (0, eF.useBaseUiId)(),
        [n, a] = r.useState(i),
        [o, u] = r.useState(),
        [s, l] = r.useState([]),
        d = void 0 === n ? i : n,
        c = (0, eM.useRefWithInit)(() => new Map()),
        { messageIds: f } = eJ(),
        m = (0, eN.useStableCallback)((t, r) => {
          let i = c.current;
          (void 0 === r ? i.delete(t) : i.set(t, r),
            a((t) => {
              let r;
              if (0 === i.size) return t;
              for (let n of i.values()) {
                if (n === t) return t;
                void 0 === r && (r = n);
              }
              return r;
            }));
        }),
        p = (0, eN.useStableCallback)(() => {
          0 === c.current.size && a(i);
        }),
        v = r.useCallback(
          (t) => {
            let r = t["aria-describedby"] ? t["aria-describedby"].split(" ") : [];
            return (r.push(...f, ...s), { ...t, "aria-describedby": Array.from(new Set(r)).join(" ") || void 0 });
          },
          [f, s],
        ),
        g = r.useMemo(
          () => ({
            controlId: d,
            registerControlId: m,
            resetControlId: p,
            labelId: o,
            setLabelId: u,
            messageIds: s,
            setMessageIds: l,
            getDescriptionProps: v,
          }),
          [d, m, p, o, u, s, l, v],
        );
      return (0, eW.jsx)(eB.Provider, { value: g, children: t.children });
    };
    var eG = t.i(79331),
      eX = t.i(64032),
      eq = t.i(62038);
    function eH(t, r) {
      return { ...t, state: { ...t.state, valid: !r && t.state.valid } };
    }
    let eY = Object.keys(eP);
    function eQ(t, r) {
      let i = null;
      for (let n of t.keys())
        if (!n.matches(":disabled") && (!r || n.form === r || (null === n.form && !n.hasAttribute("form")))) {
          if (!n.validity.valid) return n;
          i ??= n;
        }
      return i;
    }
    function e0(t) {
      return { ...eP, valid: !t, customError: t };
    }
    function e1(t) {
      return t && t.validationMessage ? [t.validationMessage] : [];
    }
    let e4 = r.forwardRef(function (t, i) {
        let { errors: n, validationMode: a, submitCountRef: o } = eV(),
          {
            render: u,
            className: s,
            validate: l,
            validationDebounceTime: d = 0,
            validationMode: c = a,
            name: f,
            disabled: m = !1,
            invalid: p,
            dirty: v,
            touched: g,
            actionsRef: h,
            style: $,
            ...y
          } = t,
          b = (function (t = !1) {
            let i = r.useContext(eL);
            if (!i && !t) throw Error((0, eU.default)(86));
            return i;
          })(!0)?.disabled,
          _ = (0, eN.useStableCallback)(l || (() => null)),
          x = b || m,
          [k, I] = r.useState(!1),
          [w, S] = r.useState(!1),
          [O, z] = r.useState(!1),
          [D, N] = r.useState(!1),
          U = v ?? w,
          A = g ?? k,
          P = r.useRef(U),
          Z = r.useRef(void 0),
          [j, E] = r.useState(),
          C = f ?? j;
        (0, eD.useIsoLayoutEffect)(() => {
          void 0 !== v && (P.current = v);
        }, [v]);
        let T = (0, eN.useStableCallback)((t) => {
            void 0 === v && (t && (P.current = !0), S(t));
          }),
          L = (0, eN.useStableCallback)((t) => {
            void 0 === g && I(t);
          }),
          R = (0, eN.useStableCallback)(() => "onChange" === c || ("onSubmit" === c && o.current > 0)),
          V = C && Object.hasOwn(n, C) ? n[C] : null,
          M = !!(Array.isArray(V) ? V.length : V),
          F = !0 === p || M,
          [B, J] = r.useState({ state: eP, error: "", errors: [], value: null, initialValue: null }),
          W = !F && (x ? null : B.state.valid),
          K = r.useMemo(
            () => ({ disabled: x, touched: A, dirty: U, valid: W, filled: O, focused: D }),
            [x, A, U, W, O, D],
          ),
          G = (function (t) {
            let { elementRef: i, formRef: n } = eV(),
              {
                setValidityData: a,
                validate: o,
                validityData: u,
                validationDebounceTime: s,
                invalid: l,
                markedDirtyRef: d,
                state: c,
                shouldValidateOnChange: f,
                validationMode: m,
                registeredFieldIdRef: p,
              } = t,
              { controlId: v, getDescriptionProps: g } = eJ(),
              h = (0, eX.useTimeout)(),
              $ = r.useRef(null),
              y = (0, eM.useRefWithInit)(() => new Map()).current,
              b = r.useRef(0),
              _ = r.useRef(null),
              x = r.useCallback(
                (t, r) => (
                  y.set(t, r),
                  () => {
                    y.delete(t);
                  }
                ),
                [y],
              ),
              k = (0, eN.useStableCallback)(() => {
                let t = eQ(y, i.current);
                return (t && y.get(t)?.controlRef.current) || null;
              }),
              I = (0, eN.useStableCallback)(async (t, r = !1) => {
                b.current += 1;
                let s = b.current;
                function g() {
                  let t = _.current;
                  ((_.current = null),
                    t && (!t[0].willValidate || t[0].validationMessage === t[1]) && t[0].setCustomValidity(t[2]));
                }
                function x(r, i, o) {
                  let s,
                    d =
                      ((s = !1 === r.valid ? i : []),
                      { value: t, state: r, error: s[0] ?? "", errors: s, initialValue: u.initialValue });
                  (!(function (t, r = l) {
                    let i = p.current ?? v;
                    if (null == i) return;
                    let a = n.current.fields.get(i);
                    if (!a) return;
                    let o = eH(t, r);
                    n.current.fields.set(i, { ...a, validityData: o });
                  })(d, o),
                    a(d));
                }
                function k() {
                  return y.size > 0 ? eQ(y, i.current) : $.current;
                }
                let I = k();
                function w() {
                  return (
                    (I = k()),
                    I?.willValidate
                      ? (function (t) {
                          let r = eY.reduce((r, i) => ((r[i] = t.validity[i]), r), {}),
                            i = !1;
                          for (let t of eY)
                            if ("valid" !== t) {
                              if ("valueMissing" === t && r[t]) i = !0;
                              else if (r[t]) return r;
                            }
                          return (i && !d.current && ((r.valid = !0), (r.valueMissing = !1)), r);
                        })(I)
                      : e0(!1)
                  );
                }
                if (r) {
                  if (!1 !== c.valid || !I) return;
                  if (!I.validity.valueMissing) {
                    g();
                    let t = k(),
                      r = t?.validity.customError ? e1(t) : [];
                    x(e0(r.length > 0), r, !1);
                    return;
                  }
                  for (let t of eY)
                    if ("valid" !== t && "valueMissing" !== t && "customError" !== t && I.validity[t]) return;
                }
                (h.clear(), g());
                let S = w(),
                  O = e1(I),
                  z = f();
                if (0 === O.length || z) {
                  let r,
                    i = o(
                      t,
                      Array.from(n.current.fields.values()).reduce(
                        (t, r) => (r.name && (t[r.name] = r.getValue()), t),
                        {},
                      ),
                    );
                  if ("object" == typeof i && null !== i && "then" in i) {
                    if (
                      (!1 === S.valid
                        ? x(S, O)
                        : ("onSubmit" !== m && u.state.customError) || ((S.valid = null), x(S, O)),
                      (r = await i),
                      s !== b.current)
                    )
                      return;
                    S = w();
                  } else r = i;
                  if ((O = r ? [].concat(r).filter(Boolean) : []).length > 0) {
                    var D, N;
                    let t, r;
                    ((S.valid = !1),
                      (S.customError = !0),
                      I?.willValidate &&
                        ((D = I),
                        (N = O.join("\n")),
                        (t = D.validity.customError ? D.validationMessage : ""),
                        (r = N.replace(/\r\n?/g, "\n")),
                        D.setCustomValidity(r),
                        (_.current = [D, r, t])));
                  } else O = e1(I);
                }
                x(S, O);
              }),
              w = (0, eN.useStableCallback)((t, r = !1) => {
                if ((h.clear(), (b.current += 1), r)) return;
                let i = f();
                i && "" !== t && s
                  ? h.start(s, () => {
                      I(t);
                    })
                  : I(t, !i);
              }),
              S = r.useCallback(
                (t, r = {}) =>
                  (0, eq.mergeProps)(
                    g(r),
                    !1 !== c.valid || c.disabled || t ? eA.EMPTY_OBJECT : { "aria-invalid": !0 },
                  ),
                [g, c.disabled, c.valid],
              );
            return r.useMemo(
              () => ({
                getValidationProps: S,
                inputRef: $,
                registeredInputs: y,
                registerInput: x,
                getInputControl: k,
                commit: I,
                change: w,
              }),
              [S, y, x, k, I, w],
            );
          })({
            setValidityData: J,
            validate: _,
            validityData: B,
            validationDebounceTime: d,
            invalid: F,
            markedDirtyRef: P,
            state: K,
            shouldValidateOnChange: R,
            validationMode: c,
            registeredFieldIdRef: Z,
          }),
          [X, q] = (function (t) {
            let {
                change: i,
                commit: n,
                invalid: a,
                markedDirtyRef: o,
                name: u,
                setRegisteredFieldName: s,
                registeredFieldIdRef: l,
                setValidityData: d,
                validityData: c,
              } = t,
              { formRef: f } = eV(),
              m = r.useRef(null),
              p = r.useRef(null),
              v = r.useRef(!1),
              g = (0, eN.useStableCallback)(() => {
                let t = p.current;
                if (t) return t.getValue ? t.getValue() : t.value;
              });
            function h(t) {
              return void 0 === t.value ? g() : t.value;
            }
            let $ = (0, eN.useStableCallback)(() => {
              let t = p.current;
              ((o.current = !0), t) ? n(h(t)) : n(c.value);
            });
            function y(t = p.current?.id) {
              t && f.current.fields.delete(t);
            }
            ((0, eD.useIsoLayoutEffect)(() => {
              let t = p.current;
              t &&
                t.id &&
                (s(u ? void 0 : t.name),
                f.current.fields.set(t.id, {
                  getValue: g,
                  name: u ?? t.name,
                  controlRef: t.controlRef,
                  validityData: eH(c, a),
                  validate: $,
                }));
            }, [f, g, a, u, s, $, c]),
              (0, eD.useIsoLayoutEffect)(() => {
                let t = f.current.fields;
                return () => {
                  let r = p.current?.id;
                  r && t.delete(r);
                };
              }, [f]));
            let b = (0, eN.useStableCallback)((t, r) => {
              let n;
              if (!r) {
                m.current === t &&
                  ((m.current = null), i(void 0, !0), y(), (p.current = null), s(void 0), (l.current = void 0));
                return;
              }
              let o = p.current?.id,
                b = m.current;
              (b && b !== t && i(void 0, !0),
                (m.current = t),
                (p.current = r),
                u || s(r.name),
                (l.current = r.id),
                o && o !== r.id && y(o),
                (function (t) {
                  if (v.current) return;
                  v.current = !0;
                  let r = h(t);
                  d((t) => (t.initialValue === r ? t : { ...t, initialValue: r }));
                })(r),
                (n = p.current) &&
                  n.id &&
                  f.current.fields.set(n.id, {
                    getValue: g,
                    name: u ?? n.name,
                    controlRef: n.controlRef,
                    validityData: eH(c, a),
                    validate: $,
                  }));
            });
            return [$, b];
          })({
            change: G.change,
            commit: G.commit,
            invalid: F,
            markedDirtyRef: P,
            name: f,
            setRegisteredFieldName: E,
            registeredFieldIdRef: Z,
            setValidityData: J,
            validityData: B,
          });
        r.useImperativeHandle(h, () => ({ validate: X }), [X]);
        let H = r.useMemo(
            () => ({
              invalid: F,
              name: C,
              validityData: B,
              setValidityData: J,
              disabled: x,
              setTouched: L,
              setDirty: T,
              setFilled: z,
              setFocused: N,
              validationMode: c,
              shouldValidateOnChange: R,
              state: K,
              registerFieldControl: q,
              validation: G,
            }),
            [F, C, B, x, L, T, z, N, c, R, K, q, G],
          ),
          Y = (0, eG.useRenderElement)("div", t, { ref: i, state: K, props: y, stateAttributesMapping: ej });
        return (0, eW.jsx)(eC.Provider, { value: H, children: Y });
      }),
      e6 = r.forwardRef(function (t, r) {
        return (0, eW.jsx)(eK, { children: (0, eW.jsx)(e4, { ...t, ref: r }) });
      });
    var e2 = t.i(65079),
      e9 = t.i(46746),
      e7 = t.i(80841);
    function e3(t = {}) {
      let r,
        { id: i, fallbackControlId: n, native: a = !1, setLabelId: o, focusControl: u } = t,
        { controlId: s, setLabelId: l } = eJ(),
        d = (0, eN.useStableCallback)((t) => {
          (l(t), o?.(t));
        }),
        c =
          ((r = (0, eF.useBaseUiId)(i)),
          (0, eD.useIsoLayoutEffect)(
            () => (
              d(r),
              () => {
                d((t) => (t === r ? void 0 : t));
              }
            ),
            [r, d],
          ),
          r),
        f = s ?? n;
      function m(t) {
        let r = (0, e7.getTarget)(t.nativeEvent);
        r?.closest("button,input,select,textarea") ||
          (!t.defaultPrevented && t.detail > 1 && t.preventDefault(),
          a ||
            (function (t) {
              if (u) return u(t, f);
              if (!f) return;
              let r = (0, e9.ownerDocument)(t.currentTarget).getElementById(f);
              (0, e2.isHTMLElement)(r) && r.focus({ focusVisible: !0 });
            })(t));
      }
      return a
        ? { id: c, htmlFor: f, onMouseDown: m }
        : {
            id: c,
            onClick: m,
            onPointerDown(t) {
              t.preventDefault();
            },
          };
    }
    t.s(["useLabel", 0, e3], 66013);
    let e5 = r.createContext({ disabled: !1 });
    function e8() {
      return r.useContext(e5);
    }
    let te = r.forwardRef(function (t, i) {
      let { render: n, className: a, style: o, id: u, nativeLabel: s = !0, ...l } = t,
        d = eT(!1),
        c = e8(),
        { labelId: f } = eJ(),
        m = { ...d.state, disabled: d.disabled || c.disabled },
        p = r.useRef(null),
        v = e3({ id: f ?? u, native: s });
      return (0, eG.useRenderElement)("label", t, { ref: [i, p], state: m, props: [v, l], stateAttributesMapping: ej });
    });
    var tt = t.i(20999),
      tr = t.i(73117),
      ti = t.i(44228);
    let tn = { ...ej, ...tr.transitionStatusMapping },
      ta = r.forwardRef(function (t, i) {
        let { render: n, id: a, className: o, match: u, style: s, ...l } = t,
          d = (0, eF.useBaseUiId)(a),
          { validityData: c, state: f, name: m } = eT(!1),
          { setMessageIds: p } = eJ(),
          { errors: v } = eV(),
          g = m && Object.hasOwn(v, m) ? v[m] : null,
          h = !!(Array.isArray(g) ? g.length : g),
          $ = "string" == typeof u,
          y = !1;
        y = !0 === u || (!f.disabled && ($ ? !!c.state[u] : h || !1 === c.state.valid));
        let { mounted: b, transitionStatus: _, setMounted: x } = (0, ti.useTransitionStatus)(y);
        (0, eD.useIsoLayoutEffect)(() => {
          if (y && d)
            return (
              p((t) => t.concat(d)),
              () => {
                p((t) => t.filter((t) => t !== d));
              }
            );
        }, [y, d, p]);
        let k = r.useRef(null),
          [I, w] = r.useState(null),
          [S, O] = r.useState(null),
          z = c.error;
        !$ && h ? (z = g) : c.errors.length > 1 && (z = c.errors);
        let D = z;
        Array.isArray(z) &&
          (D =
            z.length > 1 ? (0, eW.jsx)("ul", { children: z.map((t) => (0, eW.jsx)("li", { children: t }, t)) }) : z[0]);
        let N = Array.isArray(z) ? JSON.stringify(z) : z;
        (y && N !== S && (O(N), w(D)),
          (0, tt.useOpenChangeComplete)({
            open: y,
            ref: k,
            onComplete() {
              y || x(!1);
            },
          }));
        let U = { ...f, transitionStatus: _ },
          A = (0, eG.useRenderElement)("div", t, {
            ref: [i, k],
            state: U,
            props: [{ id: d, children: y ? D : I }, l],
            stateAttributesMapping: tn,
            enabled: b,
          });
        return b ? A : null;
      }),
      to = r.forwardRef(function (t, r) {
        let { render: i, id: n, className: a, style: o, ...u } = t,
          s = (0, eF.useBaseUiId)(n),
          l = eT(!1),
          d = e8(),
          { setMessageIds: c } = eJ(),
          f = { ...l.state, disabled: l.disabled || d.disabled };
        return (
          (0, eD.useIsoLayoutEffect)(() => {
            if (s)
              return (
                c((t) => t.concat(s)),
                () => {
                  c((t) => t.filter((t) => t !== s));
                }
              );
          }, [s, c]),
          (0, eG.useRenderElement)("p", t, { ref: r, state: f, props: [{ id: s }, u], stateAttributesMapping: ej })
        );
      });
    var tu = t.i(576);
    function ts(t, r, i, n, a = !0, o) {
      let { registerFieldControl: u } = eT(),
        s = (0, eM.useRefWithInit)(() => Symbol());
      ((0, eD.useIsoLayoutEffect)(() => {
        let l = s.current;
        a ? u(l, { controlRef: t, getValue: n, id: r, name: o, value: i }) : u(l, void 0);
      }, [t, a, n, r, o, u, s, i]),
        (0, eD.useIsoLayoutEffect)(() => {
          let t = s.current;
          return () => {
            u(t, void 0);
          };
        }, [u, s]));
    }
    function tl(t = {}) {
      let { id: i, enabled: n = !0 } = t,
        { controlId: a, registerControlId: o, resetControlId: u } = eJ(),
        s = (0, eF.useBaseUiId)(),
        l = (0, eM.useRefWithInit)(() => Symbol()),
        d = r.useRef(!1),
        c = r.useRef(!1),
        f = (0, eN.useStableCallback)(() => {
          d.current && o !== eA.NOOP && ((d.current = !1), o(l.current, void 0));
        });
      return (
        (0, eD.useIsoLayoutEffect)(() => {
          let t;
          if (!n || o === eA.NOOP) return void f();
          if (void 0 !== i) ((c.current = !0), (t = i));
          else {
            if (!c.current) return void u();
            t = s;
          }
          void 0 === t ? f() : ((d.current = !0), o(l.current, t));
        }, [i, n, o, u, s, l, f]),
        (0, eD.useIsoLayoutEffect)(() => f, [f]),
        (n ? a : void 0) ?? i ?? s
      );
    }
    (t.s(["useRegisterFieldControl", 0, ts], 86932), t.s(["useLabelableId", 0, tl], 44826));
    var td = t.i(1857),
      tc = t.i(38745),
      tf = t.i(91697);
    let tm = r.forwardRef(function (t, i) {
        let {
            render: n,
            className: a,
            id: o,
            name: u,
            value: s,
            disabled: l = !1,
            onValueChange: d,
            defaultValue: c,
            autoFocus: f = !1,
            style: m,
            ...p
          } = t,
          {
            state: v,
            name: g,
            disabled: h,
            setTouched: $,
            setDirty: y,
            validityData: b,
            setFocused: _,
            setFilled: x,
            validationMode: k,
            validation: I,
          } = eT(),
          { clearErrors: w, elementRef: S, submitCountRef: O } = eV(),
          z = h || l,
          D = g ?? u,
          N = { ...v, disabled: z },
          { labelId: U } = eJ(),
          A = tl({ id: o }),
          [P] = (0, tu.useControlled)({ controlled: s, default: c, name: "FieldControl", state: "value" }),
          Z = void 0 !== s,
          j = Z ? P : void 0,
          E = null == j ? void 0 : String(j),
          C = (0, eN.useStableCallback)(() => I.inputRef.current?.value);
        (ts(I.inputRef, A, E, C, !z, u),
          (0, eD.useIsoLayoutEffect)(() => {
            let t = E ?? I.inputRef.current?.value;
            void 0 !== t && x("" !== t);
          }, [E, I.inputRef, x]),
          (0, td.useValueChanged)(E, () => {
            void 0 !== E && (w(D), y(E !== (b.initialValue ?? "")), I.change(E));
          }));
        let T = r.useRef(null),
          L = (0, eX.useTimeout)();
        return (
          (0, eD.useIsoLayoutEffect)(() => {
            f && T.current === (0, e7.activeElement)((0, e9.ownerDocument)(T.current)) && _(!0);
          }, [f, _]),
          (0, eG.useRenderElement)("input", t, {
            ref: [i, T],
            state: N,
            props: [
              {
                id: A,
                disabled: z,
                name: D,
                ref: I.inputRef,
                "aria-labelledby": U,
                autoFocus: f,
                ...(Z ? { value: j } : { defaultValue: c }),
                onChange(t) {
                  let r = t.currentTarget.value,
                    i = (0, tc.createChangeEventDetails)(tf.REASONS.none, t.nativeEvent);
                  (d?.(r, i),
                    !Z &&
                      (y(r !== (b.initialValue ?? "")),
                      x("" !== r),
                      t.nativeEvent.defaultPrevented || i.isCanceled || (w(D), I.change(r))));
                },
                onFocus() {
                  _(!0);
                },
                onBlur(t) {
                  if (($(!0), _(!1), "onBlur" === k)) {
                    let r = t.currentTarget.value;
                    (I.commit(r),
                      Z &&
                        queueMicrotask(() => {
                          let t = I.inputRef.current?.value;
                          void 0 !== t && t !== r && t !== (b.initialValue ?? "") && I.commit(t);
                        }));
                  }
                },
                onKeyDown(t) {
                  if ("INPUT" === t.currentTarget.tagName && "Enter" === t.key) {
                    $(!0);
                    let r = t.currentTarget.value,
                      i = t.currentTarget.form;
                    if (i && i === S.current && !t.defaultPrevented) {
                      let r = t.currentTarget,
                        i = O.current;
                      L.start(0, () => {
                        O.current === i && I.commit(r.value);
                      });
                    } else I.commit(r);
                  }
                },
              },
              p,
              (t) => I.getValidationProps(z, t),
            ],
            stateAttributesMapping: ej,
          })
        );
      }),
      tp = r.forwardRef(function (t, i) {
        let { render: n, className: a, style: o, disabled: u = !1, ...s } = t,
          { state: l, disabled: d } = eT(!1),
          c = d || u,
          f = { ...l, disabled: c },
          m = r.useMemo(() => ({ disabled: c }), [c]),
          p = (0, eG.useRenderElement)("div", t, { ref: i, state: f, props: s, stateAttributesMapping: ej });
        return (0, eW.jsx)(eK, { children: (0, eW.jsx)(e5.Provider, { value: m, children: p }) });
      });
    t.s(
      [
        "Control",
        0,
        tm,
        "Description",
        0,
        to,
        "Error",
        0,
        ta,
        "Item",
        0,
        tp,
        "Label",
        0,
        te,
        "Root",
        0,
        e6,
        "Validity",
        0,
        function (t) {
          let { children: i } = t,
            { validityData: n, invalid: a } = eT(!1),
            o = r.useMemo(() => eH(n, a), [n, a]),
            u = !1 === o.state.valid,
            { transitionStatus: s } = (0, ti.useTransitionStatus)(u),
            l = r.useMemo(() => ({ ...o, validity: o.state, transitionStatus: s }), [o, s]);
          return (0, eW.jsx)(r.Fragment, { children: i(l) });
        },
      ],
      92714,
    );
    var tv = t.i(92714),
      tv = tv;
    let tg = r.forwardRef(function (t, r) {
      return (0, eW.jsx)(tv.Control, { ref: r, ...t });
    });
    t.s(["Input", 0, tg], 26816);
  },
]);
