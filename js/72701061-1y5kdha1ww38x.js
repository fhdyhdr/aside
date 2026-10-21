(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  32612,
  (e) => {
    "use strict";
    let t,
      i,
      s,
      r,
      n,
      o,
      a,
      l,
      u = "u" > typeof window ? window : void 0,
      h = "u" > typeof globalThis ? globalThis : u,
      c = null == h ? void 0 : h.navigator,
      d = null == h ? void 0 : h.document,
      p = null == h ? void 0 : h.location,
      f = null == h ? void 0 : h.fetch,
      g =
        (null == h ? void 0 : h.XMLHttpRequest) && "withCredentials" in new h.XMLHttpRequest()
          ? h.XMLHttpRequest
          : void 0,
      v = null == h ? void 0 : h.AbortController,
      _ = null == h ? void 0 : h.CompressionStream,
      m = null == c ? void 0 : c.userAgent;
    function y() {
      return !(!u || !1 === u.navigator.onLine);
    }
    let b = "u" > typeof globalThis ? globalThis : u;
    (b && "u" < typeof self && (b.self = b), b && "u" < typeof File && (b.File = function () {}));
    let w = null != u ? u : {},
      x = "0.9.0",
      k = { DEBUG: !1, LIB_VERSION: x, LIB_NAME: "browser-common", JS_SDK_VERSION: x };
    var E,
      $,
      S,
      I,
      P =
        ((($ = {}).AnonymousId = "anonymous_id"),
        ($.DistinctId = "distinct_id"),
        ($.Props = "props"),
        ($.EnablePersonProcessing = "enable_person_processing"),
        ($.PersonMode = "person_mode"),
        ($.FeatureFlagDetails = "feature_flag_details"),
        ($.FeatureFlags = "feature_flags"),
        ($.FeatureFlagPayloads = "feature_flag_payloads"),
        ($.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details"),
        ($.BootstrapFeatureFlags = "bootstrap_feature_flags"),
        ($.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads"),
        ($.OverrideFeatureFlags = "override_feature_flags"),
        ($.Queue = "queue"),
        ($.AiQueue = "ai_queue"),
        ($.AiCaptureQueue = "ai_capture_queue"),
        ($.LogsQueue = "logs_queue"),
        ($.OptedOut = "opted_out"),
        ($.SessionId = "session_id"),
        ($.SessionStartTimestamp = "session_start_timestamp"),
        ($.SessionLastTimestamp = "session_timestamp"),
        ($.PersonProperties = "person_properties"),
        ($.GroupProperties = "group_properties"),
        ($.InstalledAppBuild = "installed_app_build"),
        ($.InstalledAppVersion = "installed_app_version"),
        ($.SessionReplay = "session_replay"),
        ($.PushRegistered = "push_registered"),
        ($.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session"),
        ($.SurveyLastSeenDate = "survey_last_seen_date"),
        ($.SurveysSeen = "surveys_seen"),
        ($.Surveys = "surveys"),
        ($.RemoteConfig = "remote_config"),
        ($.FlagsEndpointWasHit = "flags_endpoint_was_hit"),
        ($.DeviceId = "device_id"),
        $),
      C = (((S = {}).GZipJS = "gzip-js"), (S.Base64 = "base64"), S);
    let O = [
        "$snapshot",
        "$pageview",
        "$pageleave",
        "$set",
        "survey dismissed",
        "survey sent",
        "survey shown",
        "$identify",
        "$groupidentify",
        "$create_alias",
        "$$client_ingestion_warning",
        "$web_experiment_applied",
        "$feature_enrollment_update",
        "$feature_flag_called",
      ],
      F = ["token"];
    function T(e, t) {
      return -1 !== e.indexOf(t);
    }
    let M = function (e) {
        return e.trim();
      },
      R = function (e) {
        return e.replace(/^\$/, "");
      };
    function A(e) {
      var t;
      let i = [];
      return null !=
        (t = JSON.stringify(e, function (e, t) {
          if ("bigint" == typeof t) return t.toString();
          if ("function" != typeof t && "symbol" != typeof t) {
            if (t instanceof Error) return { name: t.name, message: t.message, stack: t.stack };
            if (t && "object" == typeof t) {
              for (; i.length > 0 && i[i.length - 1] !== this;) i.pop();
              if (i.includes(t)) return "[Circular]";
              i.push(t);
            }
            return t;
          }
        }))
        ? t
        : "null";
    }
    let L = Object.prototype,
      D = L.hasOwnProperty,
      N = L.toString,
      j =
        Array.isArray ||
        function (e) {
          return "[object Array]" === N.call(e);
        },
      q = (e) => "function" == typeof e,
      B = (e) => e === Object(e) && !j(e),
      H = (e) => {
        if (B(e)) {
          for (let t in e) if (D.call(e, t)) return !1;
          return !0;
        }
        return !1;
      },
      z = (e) => void 0 === e,
      V = (e) => "[object String]" == N.call(e),
      U = (e) => V(e) && 0 === e.trim().length,
      W = (e) => null === e,
      G = (e) => z(e) || W(e),
      K = (e) => "[object Number]" == N.call(e) && e == e,
      X = (e) => K(e) && e > 0,
      J = (e) => "[object Boolean]" === N.call(e),
      Q = (e) => T(O, e),
      Y = (e) => T(F, e);
    function Z(e) {
      return null === e || "object" != typeof e;
    }
    function ee(e, t) {
      return {}.toString.call(e) === `[object ${t}]`;
    }
    function et(e) {
      switch ({}.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return es(e, Error);
      }
    }
    function ei(e) {
      return "u" > typeof Event && es(e, Event);
    }
    function es(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return !1;
      }
    }
    let er = [!0, "true", 1, "1", "yes"],
      en = [!1, "false", 0, "0", "no"];
    function eo(e, t, i, s, r, n, o) {
      try {
        var a = e[n](o),
          l = a.value;
      } catch (e) {
        return void i(e);
      }
      a.done ? t(l) : Promise.resolve(l).then(s, r);
    }
    function ea(e) {
      return function () {
        var t = this,
          i = arguments;
        return new Promise(function (s, r) {
          var n = e.apply(t, i);
          function o(e) {
            eo(n, s, r, o, a, "next", e);
          }
          function a(e) {
            eo(n, s, r, o, a, "throw", e);
          }
          o(void 0);
        });
      };
    }
    let el = [
        "amazonbot",
        "amazonproductbot",
        "app.hypefactors.com",
        "applebot",
        "archive.org_bot",
        "awariobot",
        "backlinksextendedbot",
        "baiduspider",
        "bingbot",
        "bingpreview",
        "chrome-lighthouse",
        "dataforseobot",
        "deepscan",
        "duckduckbot",
        "facebookexternal",
        "facebookcatalog",
        "http://yandex.com/bots",
        "hubspot",
        "ia_archiver",
        "leikibot",
        "linkedinbot",
        "meta-externalagent",
        "mj12bot",
        "msnbot",
        "nessus",
        "petalbot",
        "pinterestbot",
        "prerender",
        "rogerbot",
        "screaming frog",
        "sebot-wa",
        "sitebulb",
        "slackbot",
        "slurp",
        "trendictionbot",
        "turnitin",
        "twitterbot",
        "vercel-screenshot",
        "vercelbot",
        "yahoo! slurp",
        "yandexbot",
        "zoombot",
        "bot.htm",
        "bot.php",
        "(bot;",
        "bot/",
        "crawler",
        "ahrefsbot",
        "ahrefssiteaudit",
        "semrushbot",
        "siteauditbot",
        "splitsignalbot",
        "gptbot",
        "oai-searchbot",
        "chatgpt-user",
        "perplexitybot",
        "better uptime bot",
        "sentryuptimebot",
        "uptimerobot",
        "headlesschrome",
        "cypress",
        "google-hoteladsverifier",
        "adsbot-google",
        "apis-google",
        "duplexweb-google",
        "feedfetcher-google",
        "google favicon",
        "google web preview",
        "google-read-aloud",
        "googlebot",
        "googleother",
        "google-cloudvertexbot",
        "googleweblight",
        "mediapartners-google",
        "storebot-google",
        "google-inspectiontool",
        "bytespider",
      ],
      eu = function (e, t = []) {
        if (!e) return !1;
        let i = e.toLowerCase();
        return el.concat(t).some((e) => {
          let t = e.toLowerCase();
          return -1 !== i.indexOf(t);
        });
      };
    function eh(e, t, i, s, r) {
      return (
        t > i && (s.warn("min cannot be greater than max."), (t = i)),
        K(e)
          ? e > i
            ? (s.warn(" cannot be  greater than max: " + i + ". Using max value instead."), i)
            : t > e
              ? (s.warn(" cannot be less than min: " + t + ". Using min value instead."), t)
              : e
          : (s.warn(" must be a number. using max or fallback. max: " + i + ", fallback: " + r),
            eh(null != r ? r : i, t, i, s))
      );
    }
    var ec = class {
      constructor(e) {
        ((this.C = {}),
          (this.I = e.I),
          (this.R = eh(e.bucketSize, 0, 100, e.$)),
          (this.A = eh(e.refillRate, 0, this.R, e.$)),
          (this.O = eh(e.refillInterval, 0, 864e5, e.$)));
      }
      F(e, t) {
        let i = Math.floor((t - e.lastAccess) / this.O);
        i > 0 && ((e.tokens = Math.min(e.tokens + i * this.A, this.R)), (e.lastAccess = e.lastAccess + i * this.O));
      }
      consumeRateLimit(e) {
        var t;
        let i = Date.now(),
          s = String(e),
          r = this.C[s];
        return (
          r ? this.F(r, i) : ((r = { tokens: this.R, lastAccess: i }), (this.C[s] = r)),
          0 === r.tokens || (r.tokens--, 0 === r.tokens && (null == (t = this.I) || t.call(this, e)), 0 === r.tokens)
        );
      }
      stop() {
        this.C = {};
      }
    };
    let ed = "Mobile",
      ep = "Android",
      ef = "Tablet",
      eg = "Android Tablet",
      ev = "iPad",
      e_ = "Apple Watch",
      em = "Safari",
      ey = "BlackBerry",
      eb = "Samsung Internet",
      ew = "Chrome",
      ex = "Chrome iOS",
      ek = "Internet Explorer",
      eE = "Internet Explorer Mobile",
      e$ = "Opera",
      eS = "Microsoft Edge",
      eI = "Firefox",
      eP = "Firefox iOS",
      eC = "Nintendo",
      eO = "PlayStation",
      eF = "Xbox",
      eT = "Android Mobile",
      eM = "Mobile Safari",
      eR = "Windows",
      eA = "Windows Phone",
      eL = "Nokia",
      eD = "Ouya",
      eN = "Generic " + ed.toLowerCase(),
      ej = "Generic " + ef.toLowerCase(),
      eq = "Konqueror",
      eB = "Oculus Browser",
      eH = "Vivaldi",
      ez = "Yandex",
      eV = "Whale",
      eU = "DuckDuckGo",
      eW = "Pale Moon",
      eG = "Waterfox",
      eK = "Brave",
      eX = "Claude",
      eJ = "Codex",
      eQ = "ChatGPT",
      eY = "Google Search App",
      eZ = RegExp("Version/(\\d+(\\.\\d+)?)"),
      e0 = RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      e1 = RegExp(eF, "i"),
      e2 = RegExp("PlayStation \\w+", "i"),
      e3 = RegExp("Nintendo \\w+", "i"),
      e5 = RegExp("BlackBerry|PlayBook|BB10", "i"),
      e4 = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10",
      },
      e6 = function (e, t, i, s) {
        var r;
        return (
          (t = t || ""),
          ((null == i ? void 0 : i.brave) ? eK : null) ||
            ((null == s ? void 0 : s.detectGoogleSearchApp) && T(e, "GSA/")
              ? eY
              : T(e, " OPR/") && T(e, "Mini")
                ? "Opera Mini"
                : T(e, " OPR/")
                  ? e$
                  : e5.test(e)
                    ? ey
                    : T(e, "IEMobile") || T(e, "WPDesktop")
                      ? eE
                      : T(e, "OculusBrowser")
                        ? eB
                        : T(e, "SamsungBrowser")
                          ? eb
                          : T(e, "Edge") || T(e, "Edg/")
                            ? eS
                            : T(e, "Vivaldi/")
                              ? eH
                              : T(e, "YaBrowser/")
                                ? ez
                                : T(e, "Whale/")
                                  ? eV
                                  : T(e, "DuckDuckGo/") || T(e, "Ddg/")
                                    ? eU
                                    : T(e, "Claude/")
                                      ? eX
                                      : T(e, "Codex/")
                                        ? eJ
                                        : T(e, "ChatGPT/")
                                          ? eQ
                                          : T(e, "FBIOS")
                                            ? "Facebook Mobile"
                                            : T(e, "UCWEB") || T(e, "UCBrowser")
                                              ? "UC Browser"
                                              : T(e, "CriOS")
                                                ? ex
                                                : T(e, "CrMo") || T(e, ew)
                                                  ? ew
                                                  : T(e, ep) && T(e, em)
                                                    ? eT
                                                    : T(e, "FxiOS")
                                                      ? eP
                                                      : T(e.toLowerCase(), eq.toLowerCase())
                                                        ? eq
                                                        : T(e, "Brave/")
                                                          ? eK
                                                          : ((r = t) && T(r, "Apple")) ||
                                                              (T(e, em) && !T(e, ew) && !T(e, ep))
                                                            ? T(e, ed)
                                                              ? eM
                                                              : em
                                                            : T(e, "PaleMoon/")
                                                              ? eW
                                                              : T(e, "Waterfox/")
                                                                ? eG
                                                                : T(e, eI)
                                                                  ? eI
                                                                  : T(e, "MSIE") || T(e, "Trident/")
                                                                    ? ek
                                                                    : T(e, "Gecko")
                                                                      ? eI
                                                                      : "")
        );
      },
      e8 = {
        [eE]: [RegExp("rv:(\\d+(\\.\\d+)?)")],
        [eS]: [RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [ew]: [RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [ex]: [RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [em]: [eZ],
        [eM]: [eZ],
        [e$]: [RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [eI]: [RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [eP]: [RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [eq]: [RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [ey]: [RegExp("BlackBerry (\\d+(\\.\\d+)?)"), eZ],
        [eT]: [RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [eb]: [RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [eB]: [RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [eH]: [RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [ez]: [RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [eV]: [RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [eK]: [RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [eX]: [e0],
        [eJ]: [e0],
        [eQ]: [e0],
        [eU]: [RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [eW]: [RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [eG]: [RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [eY]: [RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [ek]: [RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [RegExp("rv:(\\d+(\\.\\d+)?)")],
      },
      e9 = function (e, t, i, s) {
        let r = e8[e6(e, t, i, s)];
        if (z(r)) return null;
        for (let t = 0; r.length > t; t++) {
          let i = e.match(r[t]);
          if (i) return parseFloat(i[i.length - 2]);
        }
        return null;
      },
      e7 = [
        [RegExp("Xbox; Xbox (.*?)[);]", "i"), (e) => [eF, (e && e[1]) || ""]],
        [RegExp(eC, "i"), [eC, ""]],
        [RegExp(eO, "i"), [eO, ""]],
        [e5, [ey, ""]],
        [
          RegExp(eR, "i"),
          (e, t) => {
            if (/Phone/.test(t) || /WPDesktop/.test(t)) return [eA, ""];
            if (new RegExp(ed).test(t) && !/IEMobile\b/.test(t)) return ["Windows Mobile", ""];
            let i = /Windows NT ([0-9.]+)/i.exec(t);
            if (i && i[1]) {
              let e = e4[i[1]] || "";
              return (/arm/i.test(t) && (e = "RT"), [eR, e]);
            }
            return [eR, ""];
          },
        ],
        [
          /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
          (e) => (e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]),
        ],
        [
          /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
          (e) => {
            let t = "";
            return (e && e.length >= 3 && (t = z(e[2]) ? e[3] : e[2]), ["watchOS", t]);
          },
        ],
        [
          RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"),
          (e) => (e && e[2] ? [ep, [e[2], e[3], e[4] || "0"].join(".")] : [ep, ""]),
        ],
        [
          /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
          (e) => {
            let t = ["Mac OS X", ""];
            return (e && e[1] && (t[1] = [e[1], e[2], e[3] || "0"].join(".")), t);
          },
        ],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]],
      ],
      te = function (e) {
        for (let t = 0; e7.length > t; t++) {
          let [i, s] = e7[t],
            r = i.exec(e),
            n = r && (q(s) ? s(r, e) : s);
          if (n) return n;
        }
        return ["", ""];
      },
      tt = function (e) {
        return e3.test(e)
          ? eC
          : e2.test(e)
            ? eO
            : e1.test(e)
              ? eF
              : RegExp(eD, "i").test(e)
                ? eD
                : RegExp("(Windows Phone|WPDesktop)", "i").test(e)
                  ? eA
                  : /iPad/.test(e)
                    ? ev
                    : /iPod/.test(e)
                      ? "iPod Touch"
                      : /iPhone/.test(e)
                        ? "iPhone"
                        : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)
                          ? e_
                          : e5.test(e)
                            ? ey
                            : /(kobo)\s(ereader|touch)/i.test(e)
                              ? "Kobo"
                              : RegExp(eL, "i").test(e)
                                ? eL
                                : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) ||
                                    /(kf[a-z]+)( bui|\)).+silk\//i.test(e)
                                  ? "Kindle Fire"
                                  : /(Android|ZTE)/i.test(e)
                                    ? (new RegExp(ed).test(e) &&
                                        !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
                                          e,
                                        )) ||
                                      (/pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e)) ||
                                      /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) ||
                                      (/lmy47v/i.test(e) && !/QTAQZ3/i.test(e))
                                      ? ep
                                      : eg
                                    : RegExp("(pda|Mobile)", "i").test(e)
                                      ? eN
                                      : RegExp(ef, "i").test(e) && !RegExp("Tablet pc", "i").test(e)
                                        ? ej
                                        : "";
      },
      ti = function (e, t) {
        var i, s, r, n;
        let o = tt(e);
        return o === ev || o === eg || "Kobo" === o || "Kindle Fire" === o || o === ej
          ? ef
          : o === eC || o === eF || o === eO || o === eD
            ? "Console"
            : o === e_
              ? "Wearable"
              : o
                ? ed
                : "Android" === (null == t ? void 0 : t.userAgentDataPlatform) &&
                    (null != (n = null == t ? void 0 : t.maxTouchPoints) ? n : 0) > 0
                  ? 600 >
                    Math.min(
                      null != (i = null == t ? void 0 : t.screenWidth) ? i : 0,
                      null != (s = null == t ? void 0 : t.screenHeight) ? s : 0,
                    ) /
                      (null != (r = null == t ? void 0 : t.devicePixelRatio) ? r : 1)
                    ? ed
                    : ef
                  : "Desktop";
      },
      ts = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      tr = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", ts],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", ts],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", ts],
        [/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
        [/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
        [/\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i, "TikTok", /\bapp_version\/(\d+(?:\.\d+)*)/i],
        [/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
        [/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
        [/\bGSA\/(\d+(?:\.\d+)*)?/i, "Google"],
        [
          /\[Pinterest\/(?:iOS|Android)\b|\bPinterest(?: for (?:Android(?: Tablet)?|iOS))?\/(\d+(?:\.\d+)*)/i,
          "Pinterest",
        ],
        [/\b(?:WA4A|WAiOS)\/(\d+(?:\.\d+)*)?/i, "WhatsApp"],
        [/\bSnapchat[ /](\d+(?:\.\d+)*)?/i, "Snapchat"],
        [/\bBing(?:Web|Sapphire)\/(\d+(?:\.\d+)*)?/i, "Bing"],
        [/\bNAVER\(inapp; search;/i, "Naver", /\bNAVER\(inapp; search;[^;)]*; (\d+(?:\.\d+)*)/i],
        [/\bKAKAOTALK[ /](\d+\.\d+(?:\.\d+)*)?/i, "KakaoTalk"],
      ],
      tn = "[Truncated]",
      to = "[Unserializable]";
    function ta(e) {
      let t = "";
      for (let i = 0; e.length > i; i++) {
        let s = e.charCodeAt(i);
        if (55296 > s || s > 56319) t += 56320 > s || s > 57343 ? e[i] : "�";
        else {
          let s = e.charCodeAt(i + 1);
          56320 > s || s > 57343 ? (t += "�") : ((t += e[i] + e[i + 1]), i++);
        }
      }
      return t;
    }
    function tl(e, t) {
      if (!t) return e;
      let i = [];
      try {
        i = Object.keys(t);
      } catch (e) {
        i = [];
      }
      for (let s of i) {
        let i;
        try {
          i = t[s];
        } catch (e) {
          i = to;
        }
        Object.defineProperty(e, s, { value: i, enumerable: !0, writable: !0, configurable: !0 });
      }
      return e;
    }
    var tu = class {
      record(e) {
        if ("too-large" === e.kind) return;
        if ("retry-later" !== e.kind) return void this.reset();
        if (!e.retryAfterMs) return;
        let t = this.isOpen(),
          i = Date.now(),
          s = Math.min(e.retryAfterMs, 3e5);
        t ? (this.es = Math.max(this.es, Math.min(i + s, this.ts + 3e5))) : ((this.ts = i), (this.es = i + s));
      }
      remainingMs() {
        let e = Date.now();
        if (this.ts - 5e3 > e) return (this.reset(), 0);
        let t = Math.min(3e5, Math.max(0, this.es - e));
        return (0 === t && this.reset(), t);
      }
      isOpen() {
        return this.remainingMs() > 0;
      }
      reset() {
        ((this.es = 0), (this.ts = 0));
      }
      constructor() {
        ((this.es = 0), (this.ts = 0));
      }
    };
    let th = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function tc(e, t) {
      return "string" == typeof e && th.test(e) ? e : t();
    }
    function td(e, t) {
      let i = Error(t);
      try {
        Object.defineProperty(i, "name", { value: e, writable: !0, enumerable: !0, configurable: !0 });
      } catch (e) {}
      return i;
    }
    function tp(e) {
      return e ? e.split("#")[0] : e;
    }
    function tf(e) {
      try {
        return e();
      } catch (e) {
        return;
      }
    }
    function tg(e, t) {
      let i = setTimeout(e, t);
      return (null != i && i.unref && (null == i || i.unref()), i);
    }
    function tv(e, t, i) {
      return t_.apply(this, arguments);
    }
    function t_() {
      return (t_ = ea(function* (e, t, i) {
        let s;
        try {
          return yield Promise.race([
            e,
            new Promise((e, r) => {
              s = tg(() => {
                try {
                  (null == i || i(), e());
                } catch (e) {
                  r(e);
                }
              }, t);
            }),
          ]);
        } finally {
          clearTimeout(s);
        }
      })).apply(this, arguments);
    }
    function tm(e) {
      return (tm =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ty(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function tb(e) {
      for (var t = 1; arguments.length > t; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ty(Object(i), !0).forEach(function (t) {
              !(function (e, t, i) {
                var s;
                ((s = (function (e) {
                  if ("object" != tm(e) || !e) return e;
                  var t = e[Symbol.toPrimitive];
                  if (void 0 !== t) {
                    var i = t.call(e, "string");
                    if ("object" != tm(i)) return i;
                    throw TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e);
                })(t)),
                (t = "symbol" == tm(s) ? s : s + "") in e)
                  ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                  : (e[t] = i);
              })(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ty(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
      }
      return e;
    }
    var tw = class {
      constructor(e, t, i = []) {
        ((this.coercers = e), (this.stackParser = t), (this.modifiers = i));
      }
      buildFromUnknown(e, t = {}) {
        let i = (t && t.mechanism) || { handled: !0, type: "generic" },
          s = this.buildCoercingContext(i, t, 0).apply(e),
          r = this.buildParsingContext(t),
          n = this.parseStacktrace(s, r);
        return { $exception_list: this.convertToExceptionList(n, i), $exception_level: "error" };
      }
      modifyFrames(e) {
        var t = this;
        return ea(function* () {
          for (let i of e)
            i.stacktrace &&
              i.stacktrace.frames &&
              j(i.stacktrace.frames) &&
              (i.stacktrace.frames = yield t.applyModifiers(i.stacktrace.frames));
          return e;
        })();
      }
      coerceFallback(e) {
        var t;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null == (t = e.syntheticException) ? void 0 : t.stack,
          synthetic: !0,
        };
      }
      parseStacktrace(e, t) {
        var i;
        let s, r;
        if ((null != e.cause && (s = this.parseStacktrace(e.cause, t)), "" != e.stack && null != e.stack))
          try {
            r = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap);
          } catch (e) {}
        return tb(
          tb({}, e),
          {},
          { cause: s, stack: r, errors: null == (i = e.errors) ? void 0 : i.map((e) => this.parseStacktrace(e, t)) },
        );
      }
      applyChunkIds(e, t) {
        return e.map((e) => (e.filename && t && (e.chunk_id = t[e.filename]), e));
      }
      applyCoercers(e, t) {
        for (let i of this.coercers) if (i.match(e)) return i.coerce(e, t);
        return this.coerceFallback(t);
      }
      applyModifiers(e) {
        var t = this;
        return ea(function* () {
          let i = e;
          for (let e of t.modifiers) i = yield e(i);
          return i;
        })();
      }
      convertToExceptionList(e, t) {
        let i = [],
          s = (e, r, n) => {
            var o;
            let a = i.length,
              l =
                void 0 === r
                  ? tb(
                      tb(
                        { type: "string" == typeof t.type && t.type.length > 0 ? t.type : "generic" },
                        "boolean" == typeof t.handled
                          ? { handled: t.handled }
                          : void 0 === t.handled
                            ? { handled: !0 }
                            : {},
                      ),
                      {},
                      { synthetic: "boolean" == typeof t.synthetic ? t.synthetic : e.synthetic, exception_id: a },
                    )
                  : { type: "chained", source: n, synthetic: e.synthetic, exception_id: a, parent_id: r },
              u = { type: e.type, value: e.value, mechanism: l };
            for (let t of (e.stack && (u.stacktrace = { type: "raw", frames: e.stack }),
            i.push(u),
            e.cause && s(e.cause, a, "cause"),
            null != (o = e.errors) ? o : []))
              s(t, a, "member");
          };
        return (s(e), i);
      }
      buildParsingContext(e) {
        var r;
        return {
          chunkIdMap: (function (e) {
            let r = globalThis._posthogChunkIds;
            if (!r) return;
            let n = Object.keys(r);
            return (
              (s && n.length === i) ||
                ((i = n.length),
                (s = n.reduce((i, s) => {
                  t || (t = {});
                  let n = t[s];
                  if (n) i[n[0]] = n[1];
                  else {
                    let n = e(s);
                    for (let e = n.length - 1; e >= 0; e--) {
                      let o = n[e],
                        a = null == o ? void 0 : o.filename,
                        l = r[s];
                      if (a && l) {
                        ((i[a] = l), (t[s] = [a, l]));
                        break;
                      }
                    }
                  }
                  return i;
                }, {}))),
              s
            );
          })(this.stackParser),
          skipFirstLines: null != (r = e.skipFirstLines) ? r : 1,
        };
      }
      getAggregateErrors(e) {
        try {
          if (et(e)) {
            let i = Object.getPrototypeOf(e);
            for (let s = 0; i && 100 > s; s++) {
              var t;
              let s = null == (t = Object.getOwnPropertyDescriptor(i, "constructor")) ? void 0 : t.value;
              if ("function" == typeof s && "AggregateError" === s.name) {
                let t = e.errors;
                return j(t) ? t : void 0;
              }
              i = Object.getPrototypeOf(i);
            }
          }
        } catch (e) {}
      }
      buildCoercingContext(e, t, i = 0) {
        let s = 0,
          r = 0,
          n = !1,
          o = new Set(),
          a = [],
          l = {},
          u = (e, t, i = 0) => {
            let u,
              c,
              d = h(t, i),
              p = d.apply;
            if (
              ((d.apply = (t) => {
                a.push(e);
                try {
                  return p(t);
                } finally {
                  a.pop();
                }
              }),
              i > 4 || (i > 0 && -1 !== a.indexOf(e)))
            )
              return this.coerceFallback(d);
            let f = ("object" == typeof e && null !== e) || "function" == typeof e;
            if ((0 === i && s >= 50) || (f && o.has(e))) return;
            (f && o.add(e), 0 === i && s++);
            let g = this.getAggregateErrors(e);
            n || (n = !!g);
            try {
              if (!(u = this.applyCoercers(e, d))) throw l;
            } catch (e) {
              if (e === l) return void (0 === i && s--);
              if (!n) throw e;
              u = this.coerceFallback(d);
            }
            if (!g || s >= 50) return u;
            try {
              c = g.length;
            } catch (e) {
              return u;
            }
            if (!Number.isInteger(c) || 0 > c || c > 0xffffffff) return u;
            let v = [];
            for (let e = 0; 50 > s && 1e3 > r && c > e; e++) {
              let i;
              r++;
              try {
                i = d.next(g[e]);
              } catch (e) {
                (s++, (i = this.coerceFallback(h(t + 1))));
              }
              i && v.push(i);
            }
            return tb(tb({}, u), {}, { errors: v });
          },
          h = (i, s = 0) =>
            tb(
              tb({}, t),
              {},
              {
                syntheticException: 0 == i ? t.syntheticException : void 0,
                mechanism: 0 == i ? e : {},
                apply(e) {
                  let t = u(e, i, s + 1);
                  if (!t) throw l;
                  return t;
                },
                next: (e) => u(e, i + 1),
              },
            ),
          c = h(i);
        return tb(
          tb({}, c),
          {},
          {
            apply: (e) => {
              var t;
              return null != (t = u(e, i)) ? t : this.coerceFallback(c);
            },
          },
        );
      }
    };
    let tx = /^([a-z][a-z0-9.+-]+):/i,
      tk = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
    function tE(e, t, i, s, r) {
      let n = {
        platform: e,
        filename: t,
        function: "<anonymous>" === i ? "?" : i,
        in_app: (function (e) {
          if (!e || "<anonymous>" === e) return !1;
          let t = tx.exec(e);
          return !t || tk.includes(t[1].toLowerCase());
        })(t),
      };
      return (z(s) || (n.lineno = s), z(r) || (n.colno = r), n);
    }
    let t$ = (e, t) => {
        let i = -1 !== e.indexOf("safari-extension"),
          s = -1 !== e.indexOf("safari-web-extension");
        return i || s
          ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", i ? `safari-extension:${t}` : `safari-web-extension:${t}`]
          : [e, t];
      },
      tS = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      tI =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      tP = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      tC = (e, t) => {
        let i = tS.exec(e);
        if (i) {
          let [, e, s, r] = i;
          return tE(t, e, "?", +s, +r);
        }
        let s = tI.exec(e);
        if (s) {
          if (s[2] && 0 === s[2].indexOf("eval")) {
            let e = tP.exec(s[2]);
            e && ((s[2] = e[1]), (s[3] = e[2]), (s[4] = e[3]));
          }
          let [e, i] = t$(s[1] || "?", s[2]);
          return tE(t, i, e, s[3] ? +s[3] : void 0, s[4] ? +s[4] : void 0);
        }
      },
      tO =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      tF = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      tT = (e, t) => {
        let i = tO.exec(e);
        if (i) {
          if (i[3] && i[3].indexOf(" > eval") > -1) {
            let e = tF.exec(i[3]);
            e && ((i[1] = i[1] || "eval"), (i[3] = e[1]), (i[4] = e[2]), (i[5] = ""));
          }
          let e = i[3],
            s = i[1] || "?";
          return (([s, e] = t$(s, e)), tE(t, e, s, i[4] ? +i[4] : void 0, i[5] ? +i[5] : void 0));
        }
      },
      tM = /\(error: (.*)\)/;
    function tR(e, t) {
      return (
        e.filename === t.filename &&
        e.function === t.function &&
        e.module === t.module &&
        e.lineno === t.lineno &&
        e.colno === t.colno
      );
    }
    function tA(e, t) {
      let i = t.start;
      for (; i > 0 && tR(e[i - 1], e[i - 1 + t.length]);) i--;
      return t.start - i;
    }
    function tL(e, t) {
      let i = t.start + t.length,
        s = i;
      for (; e.length > s && tR(e[s], e[s - t.length]);) s++;
      return s - i;
    }
    var tD = class {
        match(e) {
          return this.isDOMException(e) || this.isDOMError(e);
        }
        coerce(e, t) {
          let i = V(e.stack);
          return {
            type: this.getType(e),
            value: this.getValue(e),
            stack: i ? e.stack : void 0,
            cause: e.cause ? t.next(e.cause) : void 0,
            synthetic: !1,
          };
        }
        getType(e) {
          return this.isDOMError(e) ? "DOMError" : "DOMException";
        }
        getValue(e) {
          let t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
          return e.message ? `${t}: ${e.message}` : t;
        }
        isDOMException(e) {
          return ee(e, "DOMException");
        }
        isDOMError(e) {
          return ee(e, "DOMError");
        }
      },
      tN = class {
        match(e) {
          return et(e);
        }
        coerce(e, t) {
          var i;
          let s = this.getStack(e),
            r = void 0 === s ? (null == (i = t.syntheticException) ? void 0 : i.stack) : void 0;
          return {
            type: this.getType(e),
            value: this.getMessage(e, t),
            stack: null != s ? s : r,
            cause: e.cause ? t.next(e.cause) : void 0,
            synthetic: !!r,
          };
        }
        getType(e) {
          return e.name || e.constructor.name;
        }
        getMessage(e, t) {
          let i = e.message;
          return String(i.error && "string" == typeof i.error.message ? i.error.message : i);
        }
        getStack(e) {
          try {
            let t = e.stacktrace;
            if ("string" == typeof t && t.length > 0) return t;
            let i = e.stack;
            return "string" == typeof i && i.length > 0 ? i : void 0;
          } catch (e) {
            return;
          }
        }
      },
      tj = class {
        match(e) {
          return !!ee(e, "ErrorEvent") && (null != e.error || this.ur(e));
        }
        coerce(e, t) {
          var i;
          if (null != e.error) return t.apply(e.error);
          let s = t.apply(e.message);
          return tb(tb({}, s), {}, { stack: null != (i = this.cr(e)) ? i : s.stack, synthetic: !0 });
        }
        ur(e) {
          return V(e.message) && e.message.length > 0;
        }
        cr(e) {
          var t, i;
          let s = null != (t = e.lineno) ? t : 0,
            r = null != (i = e.colno) ? i : 0;
          if (V(e.filename) && 0 !== e.filename.length && 0 !== s)
            return `Error
    at ${e.filename}:${s}:${r}`;
        }
      };
    let tq = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var tB = class {
      match(e) {
        return "string" == typeof e;
      }
      coerce(e, t) {
        var i;
        let [s, r] = this.getInfos(e);
        return {
          type: null != s ? s : "Error",
          value: null != r ? r : e,
          stack: null == (i = t.syntheticException) ? void 0 : i.stack,
          synthetic: !0,
        };
      }
      getInfos(e) {
        let t = "Error",
          i = e,
          s = e.match(tq);
        return (s && ((t = s[1]), (i = s[2])), [t, i]);
      }
    };
    let tH = ["fatal", "error", "warning", "log", "info", "debug"];
    function tz(e, t = 40) {
      let i = Object.keys(e);
      if ((i.sort(), !i.length)) return "[object has no keys]";
      for (let e = i.length; e > 0; e--) {
        let s = i.slice(0, e).join(", ");
        if (t >= s.length) return e === i.length ? s : s.length > t ? `${s.slice(0, t)}...` : s;
      }
      return "";
    }
    var tV = class {
        match(e) {
          return "object" == typeof e && null !== e;
        }
        coerce(e, t) {
          var i, s;
          let r = this.getErrorPropertyFromObject(e);
          return r
            ? t.apply(r)
            : {
                type: this.getType(e),
                value: this.getValue(e),
                stack: null != (i = this.getStack(e)) ? i : null == (s = t.syntheticException) ? void 0 : s.stack,
                level: this.isSeverityLevel(e.level) ? e.level : "error",
                synthetic: !0,
              };
        }
        getType(e) {
          if (ei(e)) return e.constructor.name;
          let t = "name" in e ? e.name : void 0;
          return V(t) && !U(t) ? t : "Error";
        }
        getValue(e) {
          if ("name" in e && "string" == typeof e.name) {
            let t = `'${e.name}' captured as exception`;
            return ("message" in e && "string" == typeof e.message && (t += ` with message: '${e.message}'`), t);
          }
          if ("message" in e && "string" == typeof e.message) return e.message;
          let t = this.getObjectClassName(e);
          return `${t && "Object" !== t ? `'${t}'` : "Object"} captured as exception with keys: ${tz(e)}`;
        }
        isSeverityLevel(e) {
          return V(e) && !U(e) && tH.indexOf(e) >= 0;
        }
        getStack(e) {
          try {
            return V(e.stacktrace) && e.stacktrace.length > 0
              ? e.stacktrace
              : V(e.stack) && e.stack.length > 0
                ? e.stack
                : void 0;
          } catch (e) {
            return;
          }
        }
        getErrorPropertyFromObject(e) {
          for (let t in e)
            if ({}.hasOwnProperty.call(e, t)) {
              let i = e[t];
              if (et(i)) return i;
            }
        }
        getObjectClassName(e) {
          try {
            let t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0;
          } catch (e) {
            return;
          }
        }
      },
      tU = class {
        match(e) {
          return ei(e);
        }
        coerce(e, t) {
          var i;
          let s = e.constructor.name;
          return {
            type: s,
            value: `${s} captured as exception with keys: ${tz(e)}`,
            stack: null == (i = t.syntheticException) ? void 0 : i.stack,
            synthetic: !0,
          };
        }
      },
      tW = class {
        match(e) {
          return Z(e);
        }
        coerce(e, t) {
          var i;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(e)}`,
            stack: null == (i = t.syntheticException) ? void 0 : i.stack,
            synthetic: !0,
          };
        }
      },
      tG = class {
        match(e) {
          return ee(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
        }
        isCustomEventWrappingRejection(e) {
          if (!ei(e)) return !1;
          try {
            let t = e.detail;
            return null != t && "object" == typeof t && "reason" in t;
          } catch (e) {
            return !1;
          }
        }
        coerce(e, t) {
          var i;
          let s = this.getUnhandledRejectionReason(e);
          return Z(s)
            ? {
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(s)}`,
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0,
              }
            : t.apply(s);
        }
        getUnhandledRejectionReason(e) {
          try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && null != e.detail && "object" == typeof e.detail && "reason" in e.detail)
              return e.detail.reason;
          } catch (e) {}
          return e;
        }
      };
    let tK = "$message",
      tX = "$timestamp",
      tJ = new Set([tK, tX]),
      tQ = { enabled: !0, max_bytes: 32768 };
    function tY(e) {
      var t;
      return e
        ? {
            enabled: null != (t = e.enabled) ? t : tQ.enabled,
            max_bytes: (function (e, t) {
              if (!K(e) || 1 / 0 === e || -1 / 0 === e) return t;
              let i = Math.floor(e);
              return 0 > i ? t : i;
            })(e.max_bytes, tQ.max_bytes),
          }
        : tb({}, tQ);
    }
    var tZ = class {
      constructor(e) {
        ((this.ns = []), (this.ss = 0), (this.Ir = tY(e)));
      }
      setConfig(e) {
        ((this.Ir = tY(e)), this.rs());
      }
      add(e) {
        let t = (function (e) {
          let t;
          try {
            t = A(e);
          } catch (e) {
            return;
          }
          try {
            let e = JSON.parse(t);
            if (!B(e)) return;
            let i = e[tK],
              s = e[tX];
            if (!V(i) || 0 === i.trim().length || (!V(s) && !K(s))) return;
            return { step: e, json: t };
          } catch (e) {
            return;
          }
        })(e);
        if (!t) return;
        let i = (function (e) {
          if ("u" > typeof TextEncoder) return new TextEncoder().encode(e).length;
          let t = encodeURIComponent(e),
            i = 0;
          for (let e = 0; t.length > e; e++) "%" === t[e] ? ((i += 1), (e += 2)) : (i += 1);
          return i;
        })(t.json);
        i > this.Ir.max_bytes || (this.ns.push({ step: t.step, bytes: i }), (this.ss += i), this.rs());
      }
      getAttachable() {
        return this.ns.map((e) => e.step);
      }
      clear() {
        ((this.ns = []), (this.ss = 0));
      }
      size() {
        return this.ns.length;
      }
      rs() {
        for (; this.ss > this.Ir.max_bytes && this.ns.length > 0;) {
          let e = this.ns.shift();
          e && (this.ss -= e.bytes);
        }
      }
    };
    let t0 = (e) => {
      if ("string" != typeof e) return e;
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    };
    function t1(e) {
      return "string" == typeof e || e;
    }
    function t2(e) {
      return "string" == typeof e ? e : void 0;
    }
    let t3 = [
        "$feature_flag",
        "$feature_flag_response",
        "$feature_flag_has_experiment",
        "$feature_flag_id",
        "$feature_flag_version",
        "$feature_flag_reason",
        "$feature_flag_request_id",
        "$feature_flag_evaluated_at",
        "$feature_flag_error",
        "locally_evaluated",
        "$groups",
        "$process_person_profile",
        "$geoip_disable",
        "$current_url",
        "$pathname",
        "$referring_domain",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gad_source",
        "mc_cid",
        "gclid",
        "gclsrc",
        "dclid",
        "gbraid",
        "wbraid",
        "fbclid",
        "msclkid",
        "twclid",
        "li_fat_id",
        "igshid",
        "ttclid",
        "rdt_cid",
        "epik",
        "qclid",
        "sccid",
        "irclid",
        "_kx",
        "$session_id",
        "$window_id",
        "$lib",
        "$lib_version",
        "$device_id",
        "$is_server",
      ],
      t5 = "NativeGzipValidationError",
      t4 = (e) => e.length >= 2 && 31 === e[0] && 139 === e[1],
      t6 = (e, t) => e === C.GZipJS || t === C.GZipJS || "gzip" === t,
      t8 = (e) => !(!e || "object" != typeof e) && "NotReadableError" === ("name" in e ? String(e.name) : ""),
      t9 = (e) => {
        throw td(t5, `Native gzip produced invalid output: ${e}`);
      },
      t7 =
        ((I = ea(function* (e, t) {
          18 > e.size && t9("too-short");
          let i = new Uint8Array(yield e.slice(0, 10).arrayBuffer());
          (t4(i) && 8 === i[2]) || t9("invalid-header");
          let s = new DataView(yield e.slice(e.size - 8).arrayBuffer());
          s.getUint32(0, !0) !==
            ((e) => {
              let t = (() => {
                  if (r) return r;
                  r = [];
                  for (let e = 0; 256 > e; e++) {
                    let t = e;
                    for (let e = 0; 8 > e; e++) t = 1 & t ? 0xedb88320 ^ (t >>> 1) : t >>> 1;
                    r[e] = t >>> 0;
                  }
                  return r;
                })(),
                i = 0xffffffff;
              for (let s = 0; e.length > s; s++) i = t[255 & (i ^ e[s])] ^ (i >>> 8);
              return (0xffffffff ^ i) >>> 0;
            })(t) && t9("invalid-crc");
          let n = t.length >>> 0;
          s.getUint32(4, !0) !== n && t9("invalid-size");
        })),
        function (e, t) {
          return I.apply(this, arguments);
        });
    function ie() {
      return (ie = ea(function* (e, t = !0, i) {
        var s;
        try {
          let t = new TextEncoder().encode(e),
            i = new globalThis.CompressionStream("gzip"),
            r = i.writable.getWriter(),
            n = r
              .write(t)
              .then(() => r.close())
              .catch(
                ((s = ea(function* (e) {
                  try {
                    yield r.abort(e);
                  } catch (e) {}
                  throw e;
                })),
                function (e) {
                  return s.apply(this, arguments);
                }),
              ),
            o = new Response(i.readable).blob(),
            [a] = yield Promise.all([o, n]);
          return (yield t7(a, t), a);
        } catch (e) {
          if (null == i ? void 0 : i.rethrow) throw e;
          return (t && console.error("Failed to gzip compress data", e), null);
        }
      })).apply(this, arguments);
    }
    function it(e, t) {
      if (null == e) return {};
      var i,
        s,
        r = (function (e, t) {
          if (null == e) return {};
          var i = {};
          for (var s in e)
            if ({}.hasOwnProperty.call(e, s)) {
              if (t.includes(s)) continue;
              i[s] = e[s];
            }
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (s = 0; n.length > s; s++) t.includes((i = n[s])) || ({}.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
      }
      return r;
    }
    let ii = {}.propertyIsEnumerable;
    function is(e, t) {
      try {
        return ir(e, t, { ancestors: new WeakSet(), remainingNodes: 1e4 }, 0);
      } catch (e) {
        return [];
      }
    }
    function ir(e, t, i, s) {
      let r = [];
      for (let n in e)
        if (ii.call(e, n)) {
          if (!n) {
            null == t || t.debug("Dropping an attribute with an empty key");
            continue;
          }
          if (r.length >= 1e3 || 0 >= i.remainingNodes) {
            null == t || t.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break;
          }
          try {
            let o = e[n];
            if (W(o) || z(o)) continue;
            r.push({
              key: ta(n),
              value: (function e(t, i, s, r) {
                if (0 >= s.remainingNodes) return { stringValue: tn };
                if ((s.remainingNodes--, J(t))) return { boolValue: t };
                if ("bigint" == typeof t) {
                  let e, s;
                  return (
                    (e = t.toString()),
                    t >= (s = BigInt("9223372036854775808")) || -s > t
                      ? (null == i || i.debug(`Attribute ${e} is outside the int64 range; encoding it as a string`),
                        { stringValue: e })
                      : { intValue: e }
                  );
                }
                if ("number" == typeof t) {
                  if (!Number.isFinite(t)) return { stringValue: String(t) };
                  if (Number.isInteger(t)) {
                    if (Number.isSafeInteger(t)) return { intValue: String(t) };
                    if (typeof BigInt > "u") return { stringValue: String(t) };
                    let e = BigInt(t).toString();
                    return t >= 0x8000000000000000 || -0x8000000000000000 > t
                      ? (null == i || i.debug(`Attribute ${e} is outside the int64 range; encoding it as a string`),
                        { stringValue: e })
                      : { intValue: e };
                  }
                  return { doubleValue: t };
                }
                if ("string" == typeof t) return { stringValue: ta(t) };
                if ("function" == typeof t) return { stringValue: "[Function]" };
                if ("symbol" == typeof t) return { stringValue: String(t) };
                if ("object" == typeof t && null !== t) {
                  if (s.ancestors.has(t)) return { stringValue: "[Circular]" };
                  if (r >= 20) return { stringValue: tn };
                  if (t instanceof Date) {
                    let e = Number.isFinite(t.getTime()) ? t.toISOString() : String(t);
                    return { stringValue: "string" == typeof e ? ta(e) : String(e) };
                  }
                  s.ancestors.add(t);
                  try {
                    try {
                      let n = t.toJSON;
                      if ("function" == typeof n) return e(n.call(t), i, s, r + 1);
                    } catch (e) {}
                    return j(t)
                      ? {
                          arrayValue: {
                            values: (function (t, i, s, r) {
                              let n = [],
                                o = Math.min(t.length, 1e3),
                                a = 0;
                              for (; o > a && s.remainingNodes > 0; a++)
                                try {
                                  let o = a in t ? t[a] : void 0;
                                  if (G(o)) continue;
                                  n.push(e(o, i, s, r));
                                } catch (e) {
                                  n.push({ stringValue: to });
                                }
                              return (t.length > a && n.push({ stringValue: tn }), n);
                            })(t, i, s, r + 1),
                          },
                        }
                      : { kvlistValue: { values: ir(t, i, s, r + 1) } };
                  } finally {
                    s.ancestors.delete(t);
                  }
                }
                return { stringValue: ta(String(t)) };
              })(o, t, i, s),
            });
          } catch (e) {
            r.push({ key: ta(n), value: { stringValue: to } });
          }
        }
      return r;
    }
    function io(e, t, i) {
      return tb(
        tb(
          tb(
            tb({}, tl({}, e.resourceAttributes)),
            {},
            { "service.name": e.serviceName || "unknown_service" },
            e.environment && { "deployment.environment": e.environment },
          ),
          e.serviceVersion && { "service.version": e.serviceVersion },
        ),
        {},
        { "telemetry.sdk.name": t, "telemetry.sdk.version": i },
      );
    }
    let ia = [
      "service.name",
      "deployment.environment",
      "service.version",
      "telemetry.sdk.name",
      "telemetry.sdk.version",
    ];
    function il(e, t) {
      let i = tl({}, e),
        s = {};
      for (let e of ia) ({}).hasOwnProperty.call(i, e) && ((s[e] = i[e]), delete i[e]);
      return [...is(i, t), ...is(s, t)];
    }
    let iu = {
        darwin: "macOS",
        win32: "Windows",
        cygwin: "Windows",
        linux: "Linux",
        android: "Android",
        freebsd: "FreeBSD",
        openbsd: "OpenBSD",
        netbsd: "NetBSD",
        sunos: "SunOS",
        aix: "AIX",
        haiku: "Haiku",
        "Mac OS X": "macOS",
      },
      ih = {
        trace: { text: "TRACE", number: 1 },
        debug: { text: "DEBUG", number: 5 },
        info: { text: "INFO", number: 9 },
        warn: { text: "WARN", number: 13 },
        error: { text: "ERROR", number: 17 },
        fatal: { text: "FATAL", number: 21 },
      },
      ic = ih.info;
    function id(e, t, i, s) {
      return {
        resourceLogs: [
          { resource: { attributes: il(t) }, scopeLogs: [{ scope: { name: i, version: s }, logRecords: e }] },
        ],
      };
    }
    var ip = class {
      constructor(e) {
        ((this.ls = e), (this.us = 0));
      }
      get pending() {
        return !!this.hs;
      }
      arm(e) {
        (this.clear(),
          (this.us = Date.now() + e),
          (this.hs = tg(() => {
            ((this.hs = void 0), this.ls());
          }, e)));
      }
      armNoEarlierThan(e) {
        (this.hs && Date.now() + e <= this.us) || this.arm(e);
      }
      clear() {
        this.hs && (clearTimeout(this.hs), (this.hs = void 0));
      }
    };
    function ig() {
      return 0.75 + 0.5 * Math.random();
    }
    function iv(e, t, i, s) {
      let r = e * Math.pow(2, Math.min(Math.max(0, t - 1), 6));
      return Math.round((void 0 === s ? r : Math.min(r, Math.max(s, e))) * i);
    }
    var i_ = class {
      constructor(e, t, i, s, r, n = () => Promise.resolve(), o) {
        var a;
        ((this._instance = e),
          (this.Ir = t),
          (this.$ = i),
          (this.cs = s),
          (this.ds = r),
          (this.vs = n),
          (this.fs = o),
          (this.ps = new ip(() => this.gs())),
          (this.ys = null),
          (this.bs = 0),
          (this._s = 0),
          (this.ws = new tu()),
          (this.ks = 0),
          (this.Ss = 1),
          (this.xs = 0),
          (this.Cs = 0),
          (this.$s = !1),
          (this.Ts = t.maxBufferSize),
          (this.Is = Math.max(null != (a = t.maxQueueSize) ? a : t.maxBufferSize, t.maxBufferSize)),
          (this.Ms = t.flushIntervalMs),
          (this.Es = t.maxBatchRecordsPerPost),
          (this.Ps = t.rateCapWindowMs),
          (this.Rs = t.maxLogsPerInterval));
      }
      clearQueue() {
        (this._s++, this._instance.setPersistedProperty(P.LogsQueue, []));
      }
      reset() {
        (this.ps.clear(),
          (this.xs = 0),
          (this.Cs = 0),
          (this.$s = !1),
          (this.ks = 0),
          (this.Ss = 1),
          this.ws.reset(),
          (this.Es = this.Ir.maxBatchRecordsPerPost));
      }
      onReconnect() {
        ((this.ks = 0), (this.Ss = 1), this.ws.isOpen() ? this.As() && this.Fs() : this.gs());
      }
      captureLog(e, t) {
        var i;
        if (this._instance.isDisabled || this._instance.optedOut || !(null == e ? void 0 : e.body)) return;
        let s = this.Os(e);
        if (null === s) return;
        if (!s.body) return void this.$.info("Log was rejected in beforeSend function");
        if (!this.Ds()) return;
        let r = {
          record: (function (e, t, i, s) {
            let { text: r, number: n } = ih[e.level || "info"] || ic,
              o = (function (e = Date.now()) {
                return String(e) + "000000";
              })(K(s) ? s : void 0),
              a = {};
            (t.distinctId && (a.posthogDistinctId = t.distinctId),
              t.sessionId && (a.sessionId = t.sessionId),
              t.windowId && (a["window.id"] = t.windowId),
              G(t.sessionStartTimestamp) || (a.sessionStartTimestamp = String(t.sessionStartTimestamp)),
              G(t.lastActivityTimestamp) || (a.lastActivityTimestamp = String(t.lastActivityTimestamp)),
              t.currentUrl && (a["url.full"] = t.currentUrl),
              t.screenName && (a["screen.name"] = t.screenName),
              t.appState && (a["app.state"] = t.appState),
              t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (a.feature_flags = t.activeFeatureFlags));
            let l = tb({}, a),
              u = e.attributes;
            if (u) {
              let e = [];
              try {
                e = Object.keys(u);
              } catch (t) {
                e = [];
              }
              for (let t of e) {
                let e;
                try {
                  e = u[t];
                } catch (t) {
                  e = to;
                }
                Object.defineProperty(l, t, { value: e, enumerable: !0, writable: !0, configurable: !0 });
              }
            }
            let h = {
              timeUnixNano: o,
              observedTimeUnixNano: o,
              severityNumber: n,
              severityText: r,
              body: {
                stringValue: (function (e) {
                  try {
                    return ta(String(e));
                  } catch (e) {
                    return to;
                  }
                })(e.body),
              },
              attributes: is(l, i),
            };
            return (
              e.trace_id && (h.traceId = e.trace_id),
              e.span_id && (h.spanId = e.span_id),
              z(e.trace_flags) || (h.flags = e.trace_flags),
              h
            );
          })(
            s,
            null != (i = null == t ? void 0 : t.context) ? i : this.cs(),
            this.$,
            null == t ? void 0 : t.occurredAtMs,
          ),
        };
        this.ds(() => this.Ls(r));
      }
      Os(e) {
        let t = this.Ir.beforeSend;
        if (!t) return e;
        let i = j(t) ? t : [t],
          s = e;
        for (let e of i)
          try {
            let t = e(s);
            if (!t) return (this.$.info("Log was rejected in beforeSend function"), null);
            s = t;
          } catch (e) {
            return (this.$.error("Error in beforeSend function for log:", e), null);
          }
        return s;
      }
      Ds() {
        if (void 0 === this.Rs) return !0;
        let e = Date.now(),
          t = e - this.xs;
        return (
          (this.Ps > t && t >= 0) || ((this.xs = e), (this.Cs = 0), (this.$s = !1)),
          this.Rs > this.Cs
            ? (this.Cs++, !0)
            : (this.$s ||
                (this.$.warn(`captureLog dropping logs: exceeded ${this.Rs} logs per ${this.Ps}ms`), (this.$s = !0)),
              !1)
        );
      }
      flush() {
        var e = this;
        return ea(function* () {
          if (!e._instance.isDisabled)
            return (
              e.ys ||
                (e.ys = e.Ns().finally(() => {
                  e.ys = null;
                })),
              e.ys
            );
        })();
      }
      Ns() {
        var e = this;
        return ea(function* () {
          var t, i, s;
          e.ps.clear();
          let r = null != (t = e._instance.getPersistedProperty(P.LogsQueue)) ? t : [];
          if (0 === r.length) return;
          let n = r.length,
            o = 0;
          for (; r.length > 0 && n > o;) {
            let t = e._s;
            e.bs = 0;
            let n = Math.min(r.length, e.Es),
              a = r.slice(0, n),
              l = id(
                a.map((e) => e.record),
                e.qs(),
                null != (i = e.fs) ? i : e._instance.getLibraryId(),
                e._instance.getLibraryVersion(),
              ),
              u = yield e._instance.js(l);
            if (e._s !== t) return;
            if ("too-large" === u.kind && a.length > 1)
              ((e.Es = Math.max(1, Math.floor(a.length / 2))),
                e.$.warn(
                  `Logs batch of size ${a.length} was too large for the ingestion endpoint, reducing batch size to ${e.Es}`,
                ));
            else if (
              (e.ws.record(u),
              e.ps.pending && e.ps.arm(Math.max(e.Ms, e.ws.remainingMs())),
              "retry-later" === u.kind ||
                ("too-large" === u.kind
                  ? e.$.warn(
                      "Dropping a single log record with batch size 1 — the record is larger than the server cap and cannot be split further.",
                    )
                  : "ok" === u.kind &&
                    e.Ir.maxBatchRecordsPerPost > e.Es &&
                    (e.Es = Math.min(e.Ir.maxBatchRecordsPerPost, e.Es + 1)),
                yield e.Bs(a.length),
                (r = null != (s = e._instance.getPersistedProperty(P.LogsQueue)) ? s : []),
                (o += a.length),
                "fatal" === u.kind))
            )
              throw u.error;
          }
        })();
      }
      Bs(e) {
        var t = this;
        return ea(function* () {
          var i;
          let s = Math.max(0, e - t.bs),
            r = null != (i = t._instance.getPersistedProperty(P.LogsQueue)) ? i : [];
          (t._instance.setPersistedProperty(P.LogsQueue, r.slice(s)), yield t.vs());
        })();
      }
      qs() {
        var e;
        return ((e = this.Ir), io(e, this._instance.getLibraryId(), this._instance.getLibraryVersion()));
      }
      Ls(e) {
        var t;
        if (this._instance.optedOut) return;
        let i = null != (t = this._instance.getPersistedProperty(P.LogsQueue)) ? t : [];
        (this.Is > i.length || (i.shift(), this.bs++, this.$.info("Logs queue is full, dropping oldest record.")),
          i.push(e),
          this._instance.setPersistedProperty(P.LogsQueue, i),
          this.Ts > i.length || this.ws.isOpen() ? this.Fs() : this.gs());
      }
      Fs() {
        this.ps.pending || this.ps.arm(Math.max(this.Ms, this.ws.remainingMs()));
      }
      Hs() {
        return Math.max(iv(this.Ms, this.ks, this.Ss, 3e4), this.ws.remainingMs());
      }
      As() {
        let e = this._instance.getPersistedProperty(P.LogsQueue);
        return !!e && e.length > 0;
      }
      shutdown(e) {
        var t = this;
        return ea(function* () {
          t.ps.clear();
          let i = t.flush().catch(() => {});
          void 0 !== e ? yield tv(i, e) : yield i;
        })();
      }
      flushWithTimeout(e) {
        var t = this;
        return ea(function* () {
          let i = t.flush();
          yield tv(i, e, () => {
            i.catch(() => {});
          });
        })();
      }
      gs() {
        this.flush()
          .then(
            () => {
              ((this.ks = 0), (this.Ss = 1));
            },
            (e) => {
              (this.ks++, (this.Ss = ig()), this.$.error("PostHog logs flush failed:", e));
            },
          )
          .finally(() => {
            !this._instance.isDisabled && this.As() && this.ps.armNoEarlierThan(this.Hs());
          });
      }
    };
    let im = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];
    function iy(e) {
      return String(e) + "000000";
    }
    function ib(e, t, i, s) {
      let r = "";
      return (
        s &&
          (r = Object.keys(s)
            .sort()
            .map((e) => `${JSON.stringify(e)}:${JSON.stringify(s[e])}`)
            .join(",")),
        `${e}\0${t}\0${null != i ? i : ""}\0${r}`
      );
    }
    var iw = class {
      constructor(e, t, i) {
        ((this._instance = e),
          (this.Ir = t),
          (this.$ = i),
          (this.zs = new Map()),
          (this.ps = new ip(() =>
            this.flush().catch((e) => {
              this.$.error("Metrics flush failed:", e);
            }),
          )),
          (this.ys = null),
          (this.Us = !1),
          (this.Ws = new Map()),
          (this.Vs = new Set()),
          (this.ws = new tu()),
          (this.ks = 0),
          (this.Ss = 1),
          (this.Gs = 0));
      }
      count(e, t = 1, i) {
        this.Zs({
          name: e,
          type: "count",
          value: t,
          unit: null == i ? void 0 : i.unit,
          attributes: null == i ? void 0 : i.attributes,
        });
      }
      gauge(e, t, i) {
        this.Zs({
          name: e,
          type: "gauge",
          value: t,
          unit: null == i ? void 0 : i.unit,
          attributes: null == i ? void 0 : i.attributes,
        });
      }
      histogram(e, t, i) {
        this.Zs({
          name: e,
          type: "histogram",
          value: t,
          unit: null == i ? void 0 : i.unit,
          attributes: null == i ? void 0 : i.attributes,
        });
      }
      flush() {
        var e,
          t = this;
        let i = this.ys,
          s = ((e = ea(function* () {
            (i && (yield i.catch(() => {})), yield t.Qs());
          })),
          function () {
            return e.apply(this, arguments);
          })().finally(() => {
            this.ys === s && (this.ys = null);
          });
        return ((this.ys = s), s);
      }
      drainWindow() {
        if (0 === this.zs.size) return null;
        let e = this.zs;
        return ((this.zs = new Map()), (this.Us = !1), (this.Ws = new Map()), (this.Vs = new Set()), this.Js(e));
      }
      reset() {
        (this.Gs++,
          this.ws.reset(),
          (this.ks = 0),
          (this.Ss = 1),
          this.ps.clear(),
          (this.zs = new Map()),
          (this.ys = null),
          (this.Us = !1),
          (this.Ws = new Map()),
          (this.Vs = new Set()));
      }
      Zs(e) {
        let t, i;
        if (this._instance.isDisabled || this._instance.optedOut) return;
        let s = this.Os(e);
        if (null === s) return;
        if (!s.name || "string" != typeof s.name) return void this.$.warn("Dropping metric with empty name");
        if ("number" != typeof s.value || !Number.isFinite(s.value))
          return void this.$.warn(`Dropping metric '${s.name}': value must be a finite number`);
        if ("count" === s.type && 0 > s.value)
          return void this.$.warn(`Dropping count '${s.name}': counters are monotonic, value must be >= 0`);
        try {
          ((t = s.attributes ? tb({}, s.attributes) : void 0), (i = ib(s.type, s.name, s.unit, t)));
        } catch (e) {
          return void this.$.warn(`Dropping metric '${s.name}': attributes could not be serialized`, e);
        }
        let r = this.zs.get(i);
        if (!r) {
          if (!this.Ks()) return;
          ((r = { name: s.name, type: s.type, unit: s.unit, attributes: t, windowStartMs: Date.now() }),
            this.zs.set(i, r));
        }
        let n = this.Ws.get(s.name);
        (void 0 === n
          ? this.Ws.set(s.name, s.type)
          : n === s.type ||
            this.Vs.has(s.name) ||
            (this.Vs.add(s.name),
            this.$.warn(
              `Metric name '${s.name}' is already used as a ${n}; recording it as a ${s.type} too will blend both series in charts. Use a distinct name.`,
            )),
          this.Xs(r, s.value),
          this.Fs());
      }
      Ks() {
        return (
          this.Ir.maxSeriesPerFlush > this.zs.size ||
          (this.Us ||
            ((this.Us = !0),
            this.$.warn(
              `Metric series cap reached (${this.Ir.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`,
            )),
          !1)
        );
      }
      Xs(e, t) {
        switch (e.type) {
          case "count":
            var i;
            e.total = (null != (i = e.total) ? i : 0) + t;
            break;
          case "gauge":
            e.last = t;
            break;
          case "histogram": {
            e.hist || (e.hist = { count: 0, sum: 0, min: t, max: t, bucketCounts: Array(im.length + 1).fill(0) });
            let i = e.hist;
            ((i.count += 1),
              (i.sum += t),
              (i.min = Math.min(i.min, t)),
              (i.max = Math.max(i.max, t)),
              (i.bucketCounts[
                (function (e, t) {
                  for (let i = 0; t.length > i; i++) if (t[i] >= e) return i;
                  return t.length;
                })(t, im)
              ] += 1));
          }
        }
      }
      Os(e) {
        let t = this.Ir.beforeSend;
        if (!t) return e;
        let i = j(t) ? t : [t],
          s = e;
        for (let e of i)
          try {
            let t = e(s);
            if (!t) return (this.$.info("Metric was rejected in beforeSend function"), null);
            s = t;
          } catch (e) {
            return (this.$.error("Error in beforeSend function for metric:", e), null);
          }
        return s;
      }
      Fs() {
        this.ps.pending || this.ps.arm(this.Hs());
      }
      Hs() {
        return Math.max(iv(this.Ir.flushIntervalMs, this.ks, this.Ss, 3e4), this.ws.remainingMs());
      }
      Qs() {
        var e = this;
        return ea(function* () {
          if ((e.ps.clear(), 0 === e.zs.size)) return;
          let t = e.zs;
          ((e.zs = new Map()), (e.Us = !1), (e.Ws = new Map()), (e.Vs = new Set()));
          let i = e.Gs,
            s = yield e._instance.Ys(e.Js(t));
          if (i === e.Gs)
            switch (
              (e.ws.record(s),
              "retry-later" === s.kind ? (e.ks++, (e.Ss = ig())) : ((e.ks = 0), (e.Ss = 1)),
              e.ps.pending && e.ps.arm(e.Hs()),
              s.kind)
            ) {
              case "ok":
                return;
              case "retry-later":
                return (e.lo(t), void e.ps.armNoEarlierThan(e.Hs()));
              case "too-large":
                return void e.$.warn("Metrics batch exceeded the server size limit and was dropped");
              case "fatal":
                return void e.$.error("Failed to send metrics batch:", s.error);
            }
        })();
      }
      Js(e) {
        var t, i, s, r;
        return (
          (t = this.uo(e)),
          (i = io(this.Ir, this._instance.getLibraryId(), this._instance.getLibraryVersion())),
          (s = this._instance.getLibraryId()),
          (r = this._instance.getLibraryVersion()),
          {
            resourceMetrics: [
              { resource: { attributes: il(i) }, scopeMetrics: [{ scope: { name: s, version: r }, metrics: t }] },
            ],
          }
        );
      }
      uo(e) {
        let t = iy(Date.now()),
          i = new Map();
        for (let o of e.values()) {
          var s, r, n;
          let e = ib(o.type, o.name, o.unit, void 0),
            a = i.get(e);
          a ||
            ((a = tb({ name: o.name }, o.unit && { unit: o.unit })),
            "count" === o.type
              ? (a.sum = { aggregationTemporality: 1, isMonotonic: !0, dataPoints: [] })
              : "gauge" === o.type
                ? (a.gauge = { dataPoints: [] })
                : (a.histogram = { aggregationTemporality: 1, dataPoints: [] }),
            i.set(e, a));
          let l = is(null != (s = o.attributes) ? s : {}, this.$),
            u = iy(o.windowStartMs);
          if ("count" === o.type) {
            let e = { attributes: l, startTimeUnixNano: u, timeUnixNano: t, asDouble: null != (r = o.total) ? r : 0 };
            a.sum.dataPoints.push(e);
          } else if ("gauge" === o.type) {
            let e = { attributes: l, timeUnixNano: t, asDouble: null != (n = o.last) ? n : 0 };
            a.gauge.dataPoints.push(e);
          } else
            o.hist &&
              a.histogram.dataPoints.push({
                attributes: l,
                startTimeUnixNano: u,
                timeUnixNano: t,
                count: o.hist.count,
                sum: o.hist.sum,
                min: o.hist.min,
                max: o.hist.max,
                bucketCounts: o.hist.bucketCounts,
                explicitBounds: im,
              });
        }
        return Array.from(i.values());
      }
      lo(e) {
        for (let [s, r] of e) {
          let e = this.zs.get(s);
          if (e)
            switch (((e.windowStartMs = Math.min(e.windowStartMs, r.windowStartMs)), e.type)) {
              case "count":
                var t, i;
                e.total = (null != (t = e.total) ? t : 0) + (null != (i = r.total) ? i : 0);
                break;
              case "gauge":
                break;
              case "histogram":
                if (r.hist)
                  if (e.hist) {
                    ((e.hist.count += r.hist.count),
                      (e.hist.sum += r.hist.sum),
                      (e.hist.min = Math.min(e.hist.min, r.hist.min)),
                      (e.hist.max = Math.max(e.hist.max, r.hist.max)));
                    for (let t = 0; e.hist.bucketCounts.length > t; t++)
                      e.hist.bucketCounts[t] += r.hist.bucketCounts[t];
                  } else e.hist = r.hist;
            }
          else this.Ks() && this.zs.set(s, r);
        }
      }
    };
    let ix = (e, { debugEnabled: t } = {}) => {
        let i = {
          N(i, ...s) {
            u &&
              (k.DEBUG || u.POSTHOG_DEBUG || t) &&
              !z(u.console) &&
              u.console &&
              ("__rrweb_original__" in u.console[i] ? u.console[i].__rrweb_original__ : u.console[i])(e, ...s);
          },
          debug(...e) {
            i.N("debug", ...e);
          },
          info(...e) {
            i.N("log", ...e);
          },
          warn(...e) {
            i.N("warn", ...e);
          },
          error(...e) {
            i.N("error", ...e);
          },
          critical(...t) {
            console.error(e, ...t);
          },
          uninitializedWarning(e) {
            i.error(`You must initialize PostHog before calling ${e}`);
          },
          createLogger: (t, i) => ix(`${e} ${t}`, i),
        };
        return i;
      },
      ik = ix("[PostHog.js]"),
      iE = ik.createLogger,
      i$ = iE("[ExternalScriptsLoader]"),
      iS = (e) => {
        let t = null == d ? void 0 : d.querySelectorAll("script");
        if (t) {
          for (let i = 0; t.length > i; i++) if (t[i].src === e || t[i].getAttribute("src") === e) return t[i];
        }
      },
      iI = (e, t, i) => {
        if (e.config.disable_external_dependency_loading)
          return (
            i$.warn(`${t} was requested but loading of external scripts is disabled.`),
            i("Loading of external scripts is disabled")
          );
        let s = iS(t);
        if (s) {
          if (s.__posthog_loading_callback_fired) return i();
          let e = s.__posthog_loading_error;
          return e
            ? i(e)
            : (s.addEventListener("load", (e) => {
                ((s.__posthog_loading_callback_fired = !0), i(void 0, e));
              }),
              void s.addEventListener("error", (e) => {
                ((s.__posthog_loading_error = e), i(e));
              }));
        }
        let r = () => {
          if (!d) return i("document not found");
          if (iS(t)) return iI(e, t, i);
          let s = d.createElement("script");
          if (
            ((s.type = "text/javascript"),
            (s.crossOrigin = "anonymous"),
            (s.src = t),
            (s.onload = (e) => {
              ((s.__posthog_loading_callback_fired = !0), i(void 0, e));
            }),
            (s.onerror = (e) => {
              ((s.__posthog_loading_error = e), i(e));
            }),
            e.config.prepare_external_dependency_script && (s = e.config.prepare_external_dependency_script(s)),
            !s)
          )
            return i("prepare_external_dependency_script returned null");
          if ("head" === e.config.external_scripts_inject_target) d.head.appendChild(s);
          else {
            var r;
            let e = d.querySelectorAll("body > script");
            e.length > 0 ? null == (r = e[0].parentNode) || r.insertBefore(s, e[0]) : d.body.appendChild(s);
          }
        };
        (null == d ? void 0 : d.body) ? r() : null == d || d.addEventListener("DOMContentLoaded", r);
      },
      iP = {},
      iC = (e, t) => {
        let i = `/static/${t}.js?v=${e.version}`;
        return (
          "toolbar" === t && (i = `${i}&t=${3e5 * Math.floor(Date.now() / 3e5)}`),
          e.requestRouter.endpointFor("assets", i)
        );
      };
    ((w.__PosthogExtensions__ = w.__PosthogExtensions__ || {}),
      (w.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
        if ("remote-config" === t) {
          let t = e.requestRouter.endpointFor("assets", `/array/${e.config.token}/config.js`);
          return void iI(e, t, i);
        }
        let s = e.config.strict_script_versioning;
        if (s) {
          let r = e.requestRouter.endpointFor("assets", `/static/${e.version}/${t}.js`),
            n = iP[r];
          if ("fallback" === s && n) {
            if (iS(n)) return void iI(e, n, i);
            delete iP[r];
          }
          return void iI(
            e,
            r,
            "fallback" === s
              ? (s, n) => {
                  if (s)
                    if ("string" == typeof s) i(s);
                    else {
                      var o;
                      let s = iC(e, t);
                      iP[r] = s;
                      let n = iS(r);
                      (null == n || null == (o = n.parentNode) || o.removeChild(n), iI(e, s, i));
                    }
                  else i(void 0, n);
                }
              : i,
          );
        }
        iI(e, iC(e, t), i);
      }),
      (w.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
        let s = e.requestRouter.endpointFor("api", t);
        iI(e, s, i);
      }),
      (k.DEBUG = !1),
      (k.LIB_VERSION = "1.434.0"),
      (k.LIB_NAME = "web"));
    let iO = "distinct_id",
      iF = "$device_id",
      iT = "$device_model",
      iM = "__alias",
      iR = "$fbc",
      iA = "$fbc_persistence",
      iL = "$fbp",
      iD = "$fbp_persistence",
      iN = "__timers",
      ij = "$autocapture_disabled_server_side",
      iq = "$heatmaps_enabled_server_side",
      iB = "$exception_capture_enabled_server_side",
      iH = "$error_tracking_suppression_rules",
      iz = "$error_tracking_capture_extension_exceptions",
      iV = "$web_vitals_enabled_server_side",
      iU = "$dead_clicks_enabled_server_side",
      iW = "$product_tours_enabled_server_side",
      iG = "$logs_capture_enabled_server_side",
      iK = "$web_vitals_allowed_metrics",
      iX = "$session_recording_remote_config",
      iJ = "$sesid",
      iQ = "$session_is_sampled",
      iY = "$enabled_feature_flags",
      iZ = "$active_feature_flags",
      i0 = "$early_access_features",
      i1 = "$feature_flag_details",
      i2 = "$feature_flag_payloads",
      i3 = "$feature_flag_request_id",
      i5 = "$minimal_flag_called_events",
      i4 = "$override_feature_flags",
      i6 = "$override_feature_flag_payloads",
      i8 = "$stored_person_properties",
      i9 = "$stored_group_properties",
      i7 = "$groups",
      se = "$surveys",
      st = "$surveys_loaded_at",
      si = "$surveys_activated",
      ss = "$surveys_activated_session",
      sr = "$surveys_activated_timestamps",
      sn = "ph_product_tours",
      so = "$flag_call_reported",
      sa = "$flag_call_reported_session_id",
      sl = "$feature_flag_errors",
      su = "$feature_flag_evaluated_at",
      sh = "$user_state",
      sc = "$client_session_props",
      sd = "$initial_campaign_params",
      sp = "$initial_referrer_info",
      sf = "$initial_person_info",
      sg = "$epp",
      sv = "$posthog_cookieless",
      s_ = "$cookieless_mode",
      sm = "$sdk_debug_extensions_init_method",
      sy = "$sdk_debug_extensions_init_time_ms",
      sb = "$sdk_debug_recording_script_not_loaded",
      sw = "$sdk_debug_replay_stale_config",
      sx = "PostHog loadExternalDependency extension not found.",
      sk = "anonymous",
      sE = "identified",
      s$ = "identified_only",
      sS = "visibilitychange",
      sI = "beforeunload",
      sP = "$pageview",
      sC = "$pageleave",
      sO = "$identify",
      sF = "$groupidentify";
    function sT(e, t) {
      j(e) && e.forEach(t);
    }
    function sM(e, t) {
      if (!G(e))
        if (j(e)) e.forEach(t);
        else if (e instanceof FormData) e.forEach((e, i) => t(e, i));
        else for (let i in e) D.call(e, i) && t(e[i], i);
    }
    let sR = function (e, ...t) {
      for (let i of t) for (let t in i) void 0 !== i[t] && (e[t] = i[t]);
      return e;
    };
    function sA(e) {
      let t = Object.keys(e),
        i = t.length,
        s = Array(i);
      for (; i--;) s[i] = [t[i], e[t[i]]];
      return s;
    }
    let sL = function (e) {
        return function (...t) {
          try {
            return e.apply(this, t);
          } catch (e) {
            (ik.critical(
              "Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.",
            ),
              ik.critical(e));
          }
        };
      },
      sD = function (e) {
        let t = {};
        return (
          sM(e, function (e, i) {
            ((V(e) && e.length > 0) || K(e)) && (t[i] = e);
          }),
          t
        );
      };
    function sN(e) {
      let t = tb({}, e);
      for (let i of ["name", "message", "stack", "cause", "errors"])
        try {
          i in e && (t[i] = e[i]);
        } catch (e) {}
      return t;
    }
    let sj = ["herokuapp.com", "vercel.app", "netlify.app"];
    function sq(e, t, i, s) {
      let { capture: r = !1, passive: n = !0 } = null != s ? s : {};
      null == e || e.addEventListener(t, i, { capture: r, passive: n });
    }
    function sB(e) {
      return "ph_toolbar_internal" === e.name;
    }
    let sH = (e) => {
      if (d) {
        try {
          let t = e + "=",
            i = d.cookie.split(";").filter((e) => e.length);
          for (let e = 0; i.length > e; e++) {
            let s = i[e];
            for (; " " == s.charAt(0);) s = s.substring(1, s.length);
            if (0 === s.indexOf(t)) return decodeURIComponent(s.substring(t.length, s.length));
          }
        } catch (e) {}
        return null;
      }
    };
    (Math.trunc ||
      (Math.trunc = function (e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e);
      }),
      Number.isInteger ||
        (Number.isInteger = function (e) {
          return K(e) && isFinite(e) && Math.floor(e) === e;
        }));
    var sz = class e {
        constructor(e) {
          if (((this.bytes = e), 16 !== e.length)) throw TypeError("not 128-bit length");
        }
        static fromFieldsV7(t, i, s, r) {
          if (
            !Number.isInteger(t) ||
            !Number.isInteger(i) ||
            !Number.isInteger(s) ||
            !Number.isInteger(r) ||
            0 > t ||
            0 > i ||
            0 > s ||
            0 > r ||
            t > 0xffffffffffff ||
            i > 4095 ||
            s > 0x3fffffff ||
            r > 0xffffffff
          )
            throw RangeError("invalid field value");
          let n = new Uint8Array(16);
          return (
            (n[0] = t / 0x10000000000),
            (n[1] = t / 0x100000000),
            (n[2] = t / 0x1000000),
            (n[3] = t / 65536),
            (n[4] = t / 256),
            (n[5] = t),
            (n[6] = 112 | (i >>> 8)),
            (n[7] = i),
            (n[8] = 128 | (s >>> 24)),
            (n[9] = s >>> 16),
            (n[10] = s >>> 8),
            (n[11] = s),
            (n[12] = r >>> 24),
            (n[13] = r >>> 16),
            (n[14] = r >>> 8),
            (n[15] = r),
            new e(n)
          );
        }
        toString() {
          let e = "";
          for (let t = 0; this.bytes.length > t; t++)
            ((e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16)),
              (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += "-"));
          if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
          return e;
        }
        clone() {
          return new e(this.bytes.slice(0));
        }
        equals(e) {
          return 0 === this.compareTo(e);
        }
        compareTo(e) {
          for (let t = 0; 16 > t; t++) {
            let i = this.bytes[t] - e.bytes[t];
            if (0 !== i) return Math.sign(i);
          }
          return 0;
        }
      },
      sV = class {
        generate() {
          let e = this.generateOrAbort();
          if (!z(e)) return e;
          {
            this.Ct = 0;
            let e = this.generateOrAbort();
            if (z(e)) throw Error("Could not generate UUID after timestamp reset");
            return e;
          }
        }
        generateOrAbort() {
          let e,
            t = K((e = Date.now())) && isFinite(e) ? Math.min(Math.max(Math.floor(e), 0), 0xffffffffffff) : 0;
          if (t > this.Ct) ((this.Ct = t), this.Mt());
          else {
            if (this.Ct >= t + 1e4) return;
            (this.It++, this.It > 0x3ffffffffff && (this.Ct++, this.Mt()));
          }
          return sz.fromFieldsV7(this.Ct, Math.trunc(this.It / 0x40000000), 0x3fffffff & this.It, this.Tt.nextUint32());
        }
        Mt() {
          this.It = 1024 * this.Tt.nextUint32() + (1023 & this.Tt.nextUint32());
        }
        constructor() {
          ((this.Ct = 0), (this.It = 0), (this.Tt = new sW()));
        }
      };
    let sU = (e) => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
        throw Error("no cryptographically strong RNG available");
      for (let t = 0; e.length > t; t++)
        e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return e;
    };
    u && !z(u.crypto) && crypto.getRandomValues && (sU = (e) => crypto.getRandomValues(e));
    var sW = class {
      nextUint32() {
        return (this.Rt.length > this.$t || (sU(this.Rt), (this.$t = 0)), this.Rt[this.$t++]);
      }
      constructor() {
        ((this.Rt = new Uint32Array(8)), (this.$t = 1 / 0));
      }
    };
    let sG = () => sK().toString(),
      sK = () => (n || (n = new sV())).generate(),
      sX = "",
      sJ = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
      sQ = null,
      sY = {
        Et() {
          if (!W(sQ)) return sQ;
          if (((sQ = !1), d))
            try {
              let e = `__ph_cookie_support_${sG()}`;
              (sY.At(e, "xyz"), (sQ = '"xyz"' === sH(e)), sY.Lt(e));
            } catch (e) {
              sQ = !1;
            }
          return sQ;
        },
        Pt(e) {
          ik.error("cookieStore error: " + e);
        },
        Ot: sH,
        Dt(e) {
          let t;
          try {
            t = JSON.parse(sY.Ot(e)) || {};
          } catch (e) {}
          return t;
        },
        At(e, t, i, s, r) {
          if (!d) return !1;
          try {
            let n = "",
              o = "",
              a = (function (e, t) {
                if (t) {
                  let t = (function (e, t = d) {
                    if (sX) return sX;
                    if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                    let i = e.split("."),
                      s = Math.min(i.length, 8),
                      r = "dmn_chk_" + sG();
                    for (; !sX && s--;) {
                      let e = i.slice(s).join("."),
                        n = r + "=1;domain=." + e + ";path=/";
                      ((t.cookie = n + ";max-age=3"),
                        t.cookie.includes(r) && ((t.cookie = n + ";max-age=0"), (sX = e)));
                    }
                    return sX;
                  })(e);
                  if (!t) {
                    let i,
                      s = (i = e.match(sJ)) ? i[0] : "";
                    (s !== t && ik.info("Warning: cookie subdomain discovery mismatch", s, t), (t = s));
                  }
                  return t ? "; domain=." + t : "";
                }
                return "";
              })(d.location.hostname, s);
            if (i) {
              let e = new Date();
              (e.setTime(e.getTime() + 864e5 * i), (n = "; expires=" + e.toUTCString()));
            }
            r && (o = "; secure");
            let l = e + "=" + encodeURIComponent(JSON.stringify(t)) + n + "; SameSite=Lax; path=/" + a + o;
            return (
              l.length > 3686.4 && ik.warn("cookieStore warning: large cookie, len=" + l.length),
              (d.cookie = l),
              !0
            );
          } catch (e) {
            return !1;
          }
        },
        Lt(e, t) {
          if (null == d ? void 0 : d.cookie)
            try {
              sY.At(e, "", -1, t);
            } catch (e) {
              return;
            }
        },
      },
      sZ = null,
      s0 = {
        Et() {
          if (!W(sZ)) return sZ;
          let e = !0;
          if (z(u)) e = !1;
          else
            try {
              let t = "__mplssupport__";
              (s0.At(t, "xyz"), '"xyz"' !== s0.Ot(t) && (e = !1), s0.Lt(t));
            } catch (t) {
              e = !1;
            }
          return (e || ik.error("localStorage unsupported; falling back to cookie store"), (sZ = e), e);
        },
        Pt(e) {
          ik.error("localStorage error: " + e);
        },
        Ot(e) {
          try {
            return null == u ? void 0 : u.localStorage.getItem(e);
          } catch (e) {
            s0.Pt(e);
          }
          return null;
        },
        Dt(e) {
          try {
            return JSON.parse(s0.Ot(e)) || {};
          } catch (e) {}
          return null;
        },
        At(e, t) {
          try {
            return (null == u || u.localStorage.setItem(e, JSON.stringify(t)), !0);
          } catch (e) {
            s0.Pt(e);
          }
          return !1;
        },
        Lt(e) {
          try {
            null == u || u.localStorage.removeItem(e);
          } catch (e) {
            s0.Pt(e);
          }
        },
      },
      s1 = [i8, iZ, iY, i1, i2, i3, su, sl, so],
      s2 = [iF, iO, iJ, iQ, sg, sf, iA, sh],
      s3 = ["__proto__", "constructor", "prototype"],
      s5 = (e) => {
        if (!B(e)) return {};
        let t = {};
        return (
          Object.keys(e).forEach((i) => {
            -1 === s3.indexOf(i) && (t[i] = e[i]);
          }),
          t
        );
      },
      s4 = (e, t = []) => {
        let i = {};
        return (
          [...s2, ...t].forEach((t) => {
            let s = e[t];
            z(s) || W(s) || "" === s || (i[t] = s);
          }),
          i
        );
      },
      s6 = (e) => {
        let t = 5381,
          i = 0x811c9dc5;
        for (let s = 0; e.length > s; s++) {
          let r = e.charCodeAt(s);
          ((t = (33 * t) ^ r), (i = Math.imul(i ^ r, 0x1000193)));
        }
        return e.length.toString(36) + "." + (t >>> 0).toString(36) + "." + (i >>> 0).toString(36);
      },
      s8 = (e, t) => ({ p: t, f: s6(JSON.stringify(e)) }),
      s9 = (e, t) => {
        if (!t) return { properties: [], isValid: !1 };
        try {
          let i = sY.Dt(e + "_cpm"),
            s = (null == i ? void 0 : i.f) === s6(t) && j(i.p);
          return { properties: s ? i.p : [], isValid: s };
        } catch (e) {
          return { properties: [], isValid: !1 };
        }
      },
      s7 = (e, t) => t + "|" + (sY.Ot(e + "_cpm") || ""),
      re = {},
      rt = {
        Et: () => !0,
        Pt(e) {
          ik.error("memoryStorage error: " + e);
        },
        Ot: (e) => (e in re ? re[e] : null),
        Dt: (e) => (e in re ? re[e] : null),
        At: (e, t) => ((re[e] = t), !0),
        Lt(e) {
          delete re[e];
        },
      },
      ri = null,
      rs = {
        Et() {
          if (!W(ri)) return ri;
          if (((ri = !0), z(u))) ri = !1;
          else
            try {
              let e = "__support__";
              (rs.At(e, "xyz"), '"xyz"' !== rs.Ot(e) && (ri = !1), rs.Lt(e));
            } catch (e) {
              ri = !1;
            }
          return ri;
        },
        Pt(e) {
          ik.error("sessionStorage error: ", e);
        },
        Ot(e) {
          try {
            return null == u ? void 0 : u.sessionStorage.getItem(e);
          } catch (e) {
            rs.Pt(e);
          }
          return null;
        },
        Dt(e) {
          try {
            return JSON.parse(rs.Ot(e)) || null;
          } catch (e) {}
          return null;
        },
        At(e, t) {
          try {
            return (null == u || u.sessionStorage.setItem(e, JSON.stringify(t)), !0);
          } catch (e) {
            rs.Pt(e);
          }
          return !1;
        },
        Lt(e) {
          try {
            null == u || u.sessionStorage.removeItem(e);
          } catch (e) {
            rs.Pt(e);
          }
        },
      };
    var rr = class {
      constructor(e) {
        this._instance = e;
      }
      get Ir() {
        return this._instance.config;
      }
      get consent() {
        return this.Ao() ? 0 : this.Fo;
      }
      isOptedOut() {
        return (
          "always" === this.Ir.cookieless_mode ||
          this.isRejected() ||
          (-1 === this.consent && "on_reject" === this.Ir.cookieless_mode)
        );
      }
      isOptedIn() {
        return !this.isOptedOut();
      }
      isExplicitlyOptedOut() {
        return 0 === this.consent;
      }
      isRejected() {
        return 0 === this.consent || (-1 === this.consent && this.Ir.opt_out_capturing_by_default);
      }
      optInOut(e) {
        this.Oo.At(this.Do, +!!e, this.Ir.cookie_expiration, this.Ir.cross_subdomain_cookie, this.Ir.secure_cookie);
      }
      reset() {
        this.Oo.Lt(this.Do, this.Ir.cross_subdomain_cookie);
      }
      get Do() {
        let { token: e, opt_out_capturing_cookie_prefix: t, consent_persistence_name: i } = this._instance.config;
        return i || (t ? t + e : "__ph_opt_in_out_" + e);
      }
      get Fo() {
        let e = this.Oo.Ot(this.Do);
        return T(er, e) ? 1 : T(en, e) ? 0 : -1;
      }
      get Oo() {
        let e = this.Ir.opt_out_capturing_persistence_type,
          t = "localStorage" === e ? s0 : sY,
          i = t.Et() ? t : rt;
        if (!this.Lo || this.Lo !== i) {
          this.Lo = i;
          let t = "localStorage" === e ? sY : s0;
          t.Ot(this.Do) &&
            (this.Lo.Ot(this.Do) || this.optInOut(T(er, t.Ot(this.Do))), t.Lt(this.Do, this.Ir.cross_subdomain_cookie));
        }
        return this.Lo;
      }
      Ao() {
        return (
          !!this.Ir.respect_dnt &&
          [
            null == c ? void 0 : c.doNotTrack,
            null == c ? void 0 : c.msDoNotTrack,
            w.doNotTrack,
            null == c ? void 0 : c.globalPrivacyControl,
          ].some((e) => T(er, e))
        );
      }
    };
    function rn(e, t) {
      var i;
      let s = null == e || null == (i = e.config) ? void 0 : i.get_current_url;
      if (!q(s)) return t;
      try {
        let e = s(t);
        return V(e) && e ? e : t;
      } catch (e) {
        return (ik.error("Error in get_current_url, falling back to window.location.href", e), t);
      }
    }
    function ro(e) {
      var t;
      return (
        e instanceof Element &&
        ("__POSTHOG_TOOLBAR__" === e.id ||
          !!(null == (t = e.closest) ? void 0 : t.call(e, ".toolbar-global-fade-container")))
      );
    }
    function ra(e) {
      return !!e && 1 === e.nodeType;
    }
    function rl(e, t) {
      return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
    }
    function ru(e) {
      return !!e && 3 === e.nodeType;
    }
    function rh(e) {
      return !!e && 11 === e.nodeType && ra(e.host);
    }
    function rc(e) {
      return e ? M(e).split(/\s+/) : [];
    }
    function rd(e, t) {
      var i;
      let s,
        r = z((s = null == u || null == (i = u.location) ? void 0 : i.href)) ? void 0 : rn(t, s);
      return !!(r && e && e.some((e) => r.match(e)));
    }
    function rp(e) {
      let t = "";
      switch (typeof e.className) {
        case "string":
          t = e.className;
          break;
        case "object":
          t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
          break;
        default:
          t = "";
      }
      return rc(t);
    }
    function rf(e) {
      return G(e)
        ? null
        : M(e)
            .split(/(\s+)/)
            .filter((e) => rN(e))
            .join("")
            .replace(/[\r\n]/g, " ")
            .replace(/[ ]+/g, " ")
            .substring(0, 255);
    }
    function rg(e) {
      let t = "";
      return (
        rO(e) &&
          !rF(e) &&
          e.childNodes &&
          e.childNodes.length &&
          sM(e.childNodes, function (e) {
            var i;
            ru(e) && e.textContent && (t += null != (i = rf(e.textContent)) ? i : "");
          }),
        M(t)
      );
    }
    function rv(e) {
      var t;
      return z(e.target)
        ? e.srcElement || null
        : (null == (t = e.target) ? void 0 : t.shadowRoot)
          ? e.composedPath()[0] || null
          : e.target || null;
    }
    let r_ = ["a", "button", "form", "input", "select", "textarea", "label"];
    function rm(e, t) {
      let i =
        e.matches ||
        e.matchesSelector ||
        e.msMatchesSelector ||
        e.mozMatchesSelector ||
        e.webkitMatchesSelector ||
        e.oMatchesSelector;
      try {
        return !!i && i.call(e, t);
      } catch (e) {
        return !1;
      }
    }
    function ry(e, t) {
      if (z(t)) return !0;
      for (let i of e) if (t.some((e) => rm(i, e))) return !0;
      return !1;
    }
    function rb(e) {
      let t = e.parentNode;
      return !(!t || !ra(t)) && t;
    }
    let rw = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      rx = ["next", "previous", "prev", ">", "<"],
      rk = [...rx, "+", "-", "−", "–"],
      rE = (e, t) => (/[a-z0-9]/i.test(t) ? e.includes(t) : e === t),
      r$ = [".ph-no-rageclick", ".ph-no-capture"],
      rS = ["", "text", "search", "email", "password", "url", "tel", "number"];
    function rI(e, t) {
      var i, s, r;
      let n, o, a;
      if (
        !u ||
        rP(e) ||
        (J(t)
          ? ((n = !!t && r$), (o = void 0), (a = !1))
          : ((n = null != (i = null == t ? void 0 : t.css_selector_ignorelist) ? i : r$),
            (o = null == t ? void 0 : t.content_ignorelist),
            (a = null != (s = null == t ? void 0 : t.ignore_text_selection) && s)),
        !1 === n) ||
        (a &&
          !(!(r = e) || !ra(r)) &&
          (rl(r, "textarea") ||
            (rl(r, "input")
              ? T(rS, (r.getAttribute("type") || "").toLowerCase())
              : (function (e) {
                  var t;
                  if (e.isContentEditable) return !0;
                  let i = null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
                  return "true" === i || "" === i;
                })(r))))
      )
        return !1;
      let { targetElementList: l } = rC(e, !1);
      return (
        !(function (e, t) {
          let i;
          if (!1 === e || z(e)) return !1;
          if (!0 === e) i = rx;
          else {
            if (!j(e)) return !1;
            if (e.length > 10)
              return (
                ik.error(
                  "[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching.",
                ),
                !1
              );
            i = e.map((e) => e.toLowerCase());
          }
          return t.some(({ safeText: e, ariaLabel: t }) => i.some((i) => rE(e, i) || rE(t, i)));
        })(
          o,
          l.map((e) => {
            var t;
            return {
              safeText: rg(e).toLowerCase(),
              ariaLabel: (null == (t = e.getAttribute("aria-label")) ? void 0 : t.toLowerCase().trim()) || "",
            };
          }),
        ) && !ry(l, n)
      );
    }
    let rP = (e) => !e || rl(e, "html") || !ra(e),
      rC = (e, t) => {
        if (!u || rP(e)) return { parentIsUsefulElement: !1, targetElementList: [] };
        let i = !1,
          s = [e],
          r = e;
        for (; r.parentNode && !rl(r, "body");) {
          if (rh(r.parentNode)) {
            (s.push(r.parentNode.host), (r = r.parentNode.host));
            continue;
          }
          let e = rb(r);
          if (!e) break;
          if (t || r_.indexOf(e.tagName.toLowerCase()) > -1) i = !0;
          else
            try {
              let t = u.getComputedStyle(e);
              t && "pointer" === t.getPropertyValue("cursor") && (i = !0);
            } catch (e) {}
          (s.push(e), (r = e));
        }
        return { parentIsUsefulElement: i, targetElementList: s };
      };
    function rO(e) {
      let t = new Set(),
        i = 0;
      for (let s = e; s.parentNode && !rl(s, "body"); s = s.parentNode) {
        if (i++ >= 1e3 || t.has(s)) return !1;
        t.add(s);
        let e = rp(s);
        if (T(e, "ph-sensitive") || T(e, "ph-no-capture")) return !1;
      }
      if (T(rp(e), "ph-include")) return !0;
      let s = e.type || "";
      if (V(s))
        switch (s.toLowerCase()) {
          case "hidden":
          case "password":
            return !1;
        }
      let r = e.name || e.id || "";
      return (
        !V(r) ||
        !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
          r.replace(/[^a-zA-Z0-9]/g, ""),
        )
      );
    }
    function rF(e) {
      return !!(
        (rl(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) ||
        rl(e, "select") ||
        rl(e, "textarea") ||
        "true" === e.getAttribute("contenteditable")
      );
    }
    let rT = RegExp(
        "^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$",
      ),
      rM = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      rR = [16, 15, 14, 13],
      rA = RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      rL = RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      rD = /[0-9A-Za-z_]/;
    function rN(e, t = !0) {
      return (
        !(
          G(e) ||
          (V(e) &&
            ((e = M(e)),
            (t
              ? rT.test((e || "").replace(/[- ]/g, ""))
              : (function (e) {
                  let t;
                  for (rM.lastIndex = 0; (t = rM.exec(e));) {
                    let e = t[2];
                    if (!e) continue;
                    let i = e.replace(/[- ]/g, "");
                    for (let e = 0; i.length > e; e++)
                      for (let t of rR) {
                        let s = e + t;
                        if (i.length >= s) {
                          let t = i.slice(e, s);
                          if (
                            rT.test(t) &&
                            (function (e) {
                              let t = 0,
                                i = !1;
                              for (let s = e.length - 1; s >= 0; s--) {
                                let r = e.charCodeAt(s) - 48;
                                (i && (r *= 2) > 9 && (r -= 9), (t += r), (i = !i));
                              }
                              return t % 10 == 0;
                            })(t)
                          )
                            return !0;
                        }
                      }
                  }
                  return !1;
                })(e)) ||
              (t
                ? rA.test(e)
                : (function (e) {
                    let t;
                    for (rL.lastIndex = 0; (t = rL.exec(e));) {
                      let e = t[1],
                        i = t[3];
                      if (!(e && i && rD.test(e) && rD.test(i))) return !0;
                    }
                    return !1;
                  })(e))))
        ) && !0
      );
    }
    function rj(e) {
      let t = rg(e);
      return rN(
        (t = `${t} ${(function e(t) {
          let i = "";
          return (
            t &&
              t.childNodes &&
              t.childNodes.length &&
              sM(t.childNodes, function (t) {
                var s;
                if (t && "span" === (null == (s = t.tagName) ? void 0 : s.toLowerCase()))
                  try {
                    let s = rg(t);
                    ((i = `${i} ${s}`.trim()), t.childNodes && t.childNodes.length && (i = `${i} ${e(t)}`.trim()));
                  } catch (e) {
                    ik.error("[AutoCapture]", e);
                  }
              }),
            i
          );
        })(e)}`.trim()),
      )
        ? t
        : "";
    }
    function rq(e) {
      return e.replace(/"|\\"/g, '\\"');
    }
    let rB = iE("[Dead Clicks]"),
      rH = () => !0,
      rz = (e) => {
        var t;
        let i = !!(null == (t = e.instance.persistence) ? void 0 : t.get_property(iU)),
          s = e.instance.config.capture_dead_clicks;
        return J(s) ? s : !!B(s) || i;
      };
    var rV = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this.No;
      }
      constructor(e, t, i) {
        ((this.instance = e), (this.isEnabled = t), (this.onCapture = i), this.startIfEnabledOrStop());
      }
      onRemoteConfig(e) {
        if (!e.ok) return;
        let t = e.config;
        "captureDeadClicks" in t &&
          (this.instance.persistence && this.instance.persistence.register({ [iU]: t.captureDeadClicks }),
          this.startIfEnabledOrStop());
      }
      startIfEnabledOrStop() {
        this.isEnabled(this)
          ? this.qo(() => {
              this.jo();
            })
          : this.stop();
      }
      qo(e) {
        var t, i, s;
        (null == (t = w.__PosthogExtensions__) ? void 0 : t.initDeadClicksAutocapture)
          ? e()
          : null == (i = w.__PosthogExtensions__) ||
            null == (s = i.loadExternalDependency) ||
            s.call(i, this.instance, "dead-clicks-autocapture", (t) => {
              t ? rB.error("failed to load script", t) : e();
            });
      }
      jo() {
        var e;
        if (d) {
          if (!this.No && (null == (e = w.__PosthogExtensions__) ? void 0 : e.initDeadClicksAutocapture)) {
            let e = B(this.instance.config.capture_dead_clicks) ? tb({}, this.instance.config.capture_dead_clicks) : {};
            ((e.__onCapture = this.onCapture),
              this.onCapture && (e.capture_dead_swipes = !1),
              (this.No = w.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, e)),
              this.No.start(d),
              rB.info("starting..."));
          }
        } else rB.error("`document` not found. Cannot start.");
      }
      stop() {
        this.No && (this.No.stop(), (this.No = void 0), rB.info("stopping..."));
      }
    };
    let rU = iE("[SegmentIntegration]");
    function rW(e, t, i = !0) {
      let s,
        r,
        n = e.config.segment;
      if (!n) return t();
      let { analytics: o, filterProperties: a } = q(n.register) ? { analytics: n } : n;
      ((s = (s) => {
        let r = () => s.anonymousId() || sG();
        ((e.config.get_device_id = r),
          i && s.id() && (e.register({ distinct_id: s.id(), $device_id: r() }), e.persistence.set_property(sh, sE)),
          ((i) => {
            o.register(
              ((e, t, { filterProperties: i } = {}) => {
                ("u" > typeof Promise && Promise.resolve) ||
                  rU.warn("This browser does not have Promise support, and can not use the segment integration");
                let s = (s, r) => {
                  if (!r) return s;
                  let n = !!t && s.event.anonymousId === t && !s.event.userId;
                  (n ||
                    s.event.userId ||
                    s.event.anonymousId === e.get_distinct_id() ||
                    (rU.info("No userId set, resetting PostHog"), e.reset()),
                    n || (t = void 0),
                    s.event.userId &&
                      s.event.userId !== e.get_distinct_id() &&
                      (rU.info("UserId set, identifying with PostHog"), e.identify(s.event.userId)));
                  let o = e.calculateEventProperties(r, s.event.properties);
                  if (!G(i)) {
                    let e = s.event.properties || {},
                      t = {};
                    for (let i of Object.keys(o)) D.call(e, i) || (t[i] = o[i]);
                    let r = ((e, t) => {
                      let i = j(e) ? e : [e],
                        s = tb({}, t);
                      for (let e of i)
                        try {
                          if (((s = e(s)), G(s))) return null;
                        } catch (e) {
                          return (rU.error("Error in Segment filterProperties:", e), null);
                        }
                      return s;
                    })(i, t);
                    if (G(r)) return s;
                    o = r;
                  }
                  return ((s.event.properties = Object.assign({}, o, s.event.properties)), s);
                };
                return {
                  name: "PostHog JS",
                  type: "enrichment",
                  version: "1.0.0",
                  isLoaded: () => !0,
                  load: () => Promise.resolve(),
                  track: (e) => s(e, e.event.event),
                  page: (e) => s(e, sP),
                  identify: (e) => s(e, sO),
                  screen: (e) => s(e, "$screen"),
                };
              })(e, i, { filterProperties: a }),
            ).then(
              () => {
                t();
              },
              (e) => {
                (rU.error("Failed to register the Segment integration", e), t());
              },
            );
          })(i ? void 0 : s.anonymousId() || void 0));
      }),
        "then" in (r = o.user()) && q(r.then) ? r.then(s) : s(r));
    }
    let rG = "posthog-js";
    function rK(
      e,
      {
        organization: t,
        projectId: i,
        prefix: s,
        severityAllowList: r = ["error"],
        sendExceptionsToPostHog: n = !0,
      } = {},
    ) {
      return (o) => {
        var a, l, u, h, c, d;
        if (("*" !== r && !r.includes(o.level)) || !e.__loaded) return o;
        o.tags || (o.tags = {});
        let p = e.requestRouter.endpointFor("ui", `/project/${e.config.token}/person/${e.get_distinct_id()}`);
        ((o.tags["PostHog Person URL"] = p),
          e.sessionRecordingStarted() &&
            (o.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 })));
        let f = (null == (a = o.exception) ? void 0 : a.values) || [],
          g = f.map((e) =>
            tb(
              tb({}, e),
              {},
              {
                stacktrace: e.stacktrace
                  ? tb(
                      tb({}, e.stacktrace),
                      {},
                      {
                        type: "raw",
                        frames: (e.stacktrace.frames || []).map((e) =>
                          tb(tb({}, e), {}, { platform: "web:javascript" }),
                        ),
                      },
                    )
                  : void 0,
              },
            ),
          ),
          v = {
            $exception_message: (null == (l = f[0]) ? void 0 : l.value) || o.message,
            $exception_type: null == (u = f[0]) ? void 0 : u.type,
            $exception_level: o.level,
            $exception_list: g,
            $sentry_event_id: o.event_id,
            $sentry_exception: o.exception,
            $sentry_exception_message: (null == (h = f[0]) ? void 0 : h.value) || o.message,
            $sentry_exception_type: null == (c = f[0]) ? void 0 : c.type,
            $sentry_tags: o.tags,
          };
        return (
          t &&
            i &&
            (v.$sentry_url =
              (s || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + o.event_id),
          n && (null == (d = e.exceptions) || d.sendExceptionEvent(v)),
          o
        );
      };
    }
    var rX = class {
        constructor(e, t, i, s, r, n) {
          ((this.name = rG),
            (this.setupOnce = function (o) {
              o(
                rK(e, {
                  organization: t,
                  projectId: i,
                  prefix: s,
                  severityAllowList: r,
                  sendExceptionsToPostHog: null == n || n,
                }),
              );
            }));
        }
      },
      rJ = class {
        constructor(e) {
          ((this.Bo = (e, t, i) => {
            i &&
              (i.noSessionId || i.activityTimeout || i.sessionPastMaximumLength || i.crossTabAdoption) &&
              (ik.info("[PageViewManager] Session rotated, clearing pageview state", { sessionId: e, changeReason: i }),
              (this.Ho = void 0),
              this._instance.scrollManager.resetContext());
          }),
            (this._instance = e),
            this.zo());
        }
        zo() {
          var e;
          this.Uo = null == (e = this._instance.sessionManager) ? void 0 : e.onSessionId(this.Bo);
        }
        destroy() {
          var e;
          (null == (e = this.Uo) || e.call(this), (this.Uo = void 0));
        }
        doPageView(e, t) {
          var i;
          let s = this.Wo(e, t);
          return (
            (this.Ho = {
              pathname: null != (i = null == u ? void 0 : u.location.pathname) ? i : "",
              pageViewId: t,
              timestamp: e,
            }),
            this._instance.scrollManager.resetContext(),
            s
          );
        }
        doPageLeave(e) {
          var t;
          return this.Wo(e, null == (t = this.Ho) ? void 0 : t.pageViewId);
        }
        doEvent() {
          var e;
          return { $pageview_id: null == (e = this.Ho) ? void 0 : e.pageViewId };
        }
        Wo(e, t) {
          let i = this.Ho;
          if (!i) return { $pageview_id: t };
          let s = { $pageview_id: t, $prev_pageview_id: i.pageViewId },
            r = this._instance.scrollManager.getContext();
          if (r && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: e,
              lastScrollY: t,
              maxScrollY: i,
              maxContentHeight: n,
              lastContentY: o,
              maxContentY: a,
            } = r;
            if (!(z(e) || z(t) || z(i) || z(n) || z(o) || z(a))) {
              ((e = Math.ceil(e)),
                (t = Math.ceil(t)),
                (i = Math.ceil(i)),
                (n = Math.ceil(n)),
                (o = Math.ceil(o)),
                (a = Math.ceil(a)));
              let r = e > 1 ? eh(t / e, 0, 1, ik) : 1,
                l = e > 1 ? eh(i / e, 0, 1, ik) : 1,
                u = n > 1 ? eh(o / n, 0, 1, ik) : 1,
                h = n > 1 ? eh(a / n, 0, 1, ik) : 1;
              s = sR(s, {
                $prev_pageview_last_scroll: t,
                $prev_pageview_last_scroll_percentage: r,
                $prev_pageview_max_scroll: i,
                $prev_pageview_max_scroll_percentage: l,
                $prev_pageview_last_content: o,
                $prev_pageview_last_content_percentage: u,
                $prev_pageview_max_content: a,
                $prev_pageview_max_content_percentage: h,
              });
            }
          }
          return (
            i.pathname && (s.$prev_pageview_pathname = i.pathname),
            i.timestamp && (s.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3),
            s
          );
        }
      };
    let rQ = ["flags", "surveys"],
      rY = {
        $people_distinct_id: { exposure: "hidden" },
        [iM]: { exposure: "hidden" },
        __cmpns: { exposure: "hidden" },
        [iN]: { exposure: "hidden" },
        [iA]: { exposure: "hidden" },
        [iD]: { exposure: "hidden" },
        [ij]: { exposure: "event" },
        [iq]: { exposure: "hidden" },
        [iG]: { exposure: "hidden" },
        [iB]: { exposure: "event" },
        [iH]: { exposure: "hidden" },
        [iz]: { exposure: "event" },
        [iV]: { exposure: "event" },
        [iU]: { exposure: "event" },
        [iW]: { exposure: "hidden" },
        [iK]: { exposure: "event" },
        [iX]: { exposure: "hidden" },
        $session_recording_enabled_server_side: { exposure: "hidden" },
        [iJ]: { exposure: "hidden" },
        [iQ]: { exposure: "event" },
        $replay_sample_rate: { exposure: "event", shouldSkipFromEventProperties: (e) => W(e) },
        $session_past_minimum_duration: { exposure: "event" },
        $session_recording_url_trigger_activated_session: { exposure: "event" },
        $session_recording_event_trigger_activated_session: { exposure: "event" },
        $debug_first_full_snapshot_timestamp: { exposure: "event" },
        $sess_rec_flush_size: { exposure: "hidden" },
        [iY]: { exposure: "hidden", storageGroup: "flags" },
        [iZ]: { exposure: "hidden", storageGroup: "flags" },
        [i0]: { exposure: "hidden" },
        [i1]: { exposure: "hidden", storageGroup: "flags" },
        [i2]: { exposure: "hidden", storageGroup: "flags" },
        [i3]: { exposure: "hidden", storageGroup: "flags", volatile: !0 },
        [i5]: { exposure: "hidden", storageGroup: "flags" },
        [i4]: { exposure: "hidden" },
        [i6]: { exposure: "hidden" },
        [i8]: { exposure: "hidden" },
        [i9]: { exposure: "hidden" },
        [se]: { exposure: "hidden", storageGroup: "surveys" },
        [st]: { exposure: "hidden", storageGroup: "surveys", volatile: !0 },
        [si]: { exposure: "event" },
        [ss]: { exposure: "hidden" },
        [sr]: { exposure: "hidden" },
        [sn]: { exposure: "hidden" },
        $product_tours_activated: { exposure: "hidden" },
        $product_tours_activated_session: { exposure: "hidden" },
        $conversations_widget_session_id: { exposure: "event" },
        $conversations_ticket_id: { exposure: "event" },
        $conversations_widget_state: { exposure: "event" },
        $conversations_user_traits: { exposure: "event" },
        [so]: { exposure: "hidden" },
        [sa]: { exposure: "hidden" },
        [i7]: { exposure: "event" },
        [sl]: { exposure: "hidden" },
        [su]: { exposure: "hidden", storageGroup: "flags", volatile: !0 },
        [sh]: { exposure: "hidden" },
        [sc]: { exposure: "hidden" },
        $capture_rate_limit: { exposure: "hidden" },
        [sd]: { exposure: "hidden" },
        [sp]: { exposure: "hidden" },
        [sf]: { exposure: "hidden" },
        [sg]: { exposure: "hidden" },
        $replay_override_sampling: { exposure: "event" },
        $replay_override_linked_flag: { exposure: "event" },
        $replay_override_url_trigger: { exposure: "event" },
        $replay_override_event_trigger: { exposure: "event" },
        [sm]: { exposure: "event" },
        [sy]: { exposure: "event" },
        [sb]: { exposure: "event" },
        [sw]: { exposure: "event" },
        $sdk_debug_replay_event_trigger_status: { exposure: "event" },
        $sdk_debug_replay_linked_flag_trigger_status: { exposure: "event" },
        $sdk_debug_replay_matched_recording_trigger_groups: { exposure: "event" },
        $sdk_debug_replay_pending_trigger_conditions: { exposure: "event" },
        $sdk_debug_replay_remote_trigger_matching_config: { exposure: "event" },
        $sdk_debug_replay_trigger_groups_count: { exposure: "event" },
        $sdk_debug_replay_url_trigger_status: { exposure: "event" },
        $session_recording_start_reason: { exposure: "event" },
      },
      rZ = [
        ["$posthog_sr_group_event_trigger_", { exposure: "hidden" }],
        ["$posthog_sr_group_url_trigger_", { exposure: "hidden" }],
        ["$posthog_sr_group_sampling_", { exposure: "hidden" }],
      ],
      r0 = (e) => {
        let t = rY[e];
        if (t) return t;
        for (let [t, i] of rZ) if (0 === e.indexOf(t)) return i;
      },
      r1 = (e, t) => {
        try {
          let i;
          return JSON.stringify(
            e,
            (e, t) =>
              et(t)
                ? (null != i || (i = new WeakMap()), i.has(t) || i.set(t, sN(t)), i.get(t))
                : "bigint" == typeof t
                  ? t.toString()
                  : t,
            t,
          );
        } catch (t) {
          return A(e);
        }
      },
      r2 = (e) => {
        let t = null == d ? void 0 : d.createElement("a");
        return z(t) ? null : ((t.href = e), t);
      },
      r3 = function (e, t) {
        let i,
          s = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        for (let e = 0; s.length > e; e++) {
          let r = s[e].split("=");
          if (r[0] === t) {
            i = r;
            break;
          }
        }
        if (!j(i) || 2 > i.length) return "";
        {
          let e = i[1];
          try {
            e = decodeURIComponent(e);
          } catch (t) {
            ik.error("Skipping decoding for malformed query param: " + e);
          }
          return e.replace(/\+/g, " ");
        }
      },
      r5 = function (e, t, i) {
        if (!e || !t || !t.length) return e;
        let s = e.split("#"),
          r = s[1],
          n = (s[0] || "").split("?"),
          o = n[1],
          a = n[0],
          l = (o || "").split("&"),
          u = [];
        for (let e = 0; l.length > e; e++) {
          let s = l[e].split("=");
          j(s) && (t.includes(s[0]) ? u.push(s[0] + "=" + i) : u.push(l[e]));
        }
        let h = a;
        return (null != o && (h += "?" + u.join("&")), null != r && (h += "#" + r), h);
      },
      r4 = function (e, t) {
        let i = e.match(RegExp(t + "=([^&]*)"));
        return i ? i[1] : null;
      },
      r6 = (e, t) => e >= t && y(),
      r8 = (e, t, i, s) => {
        if (0 === e) {
          if (y()) {
            let e = t + 1;
            return (e === i && s(), e);
          }
          return t;
        }
        return 0;
      },
      r9 = [
        "gclid",
        "gclsrc",
        "dclid",
        "gbraid",
        "wbraid",
        "fbclid",
        "msclkid",
        "twclid",
        "li_fat_id",
        "igshid",
        "ttclid",
        "rdt_cid",
        "epik",
        "qclid",
        "sccid",
        "irclid",
        "_kx",
      ],
      r7 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...r9],
      ne = "<masked>",
      nt = ["li_fat_id"];
    function ni(e, t, i) {
      let s;
      if (!d) return {};
      let r = t ? [...r9, ...(i || [])] : [],
        n = ns(r5(d.URL, r, ne), e);
      return sR(
        ((s = {}),
        sM(nt, function (e) {
          let t = sH(e);
          s[e] = t || null;
        }),
        s),
        n,
      );
    }
    function ns(e, t) {
      let i = r7.concat(t || []),
        s = {};
      return (
        sM(i, function (t) {
          let i = r3(e, t);
          s[t] = i || null;
        }),
        s
      );
    }
    function nr(e) {
      let t = e
          ? 0 === e.search("https?://(.*)google.([^/?]*)")
            ? "google"
            : 0 === e.search("https?://(.*)bing.com")
              ? "bing"
              : 0 === e.search("https?://(.*)yahoo.com")
                ? "yahoo"
                : 0 === e.search("https?://(.*)duckduckgo.com")
                  ? "duckduckgo"
                  : null
          : null,
        i = {};
      if (!W(t)) {
        i.$search_engine = t;
        let e = d ? r3(d.referrer, "yahoo" != t ? "q" : "p") : "";
        e.length && (i.ph_keyword = e);
      }
      return i;
    }
    function nn() {
      return navigator.language || navigator.userLanguage;
    }
    let no = "$direct";
    function na() {
      return (null == d ? void 0 : d.referrer) || no;
    }
    function nl(e, t, i = !1) {
      let s = e ? [...r9, ...(t || [])] : [],
        r = i ? tp(null == p ? void 0 : p.href) : null == p ? void 0 : p.href,
        n = null == r ? void 0 : r.substring(0, 1e3);
      return { r: na().substring(0, 1e3), u: n ? r5(n, s, ne) : void 0 };
    }
    function nu(e, t = !1) {
      var i;
      let { r: s, u: r } = e,
        n = t ? tp(r) : r,
        o = {
          $referrer: s,
          $referring_domain: null == s ? void 0 : s == no ? no : null == (i = r2(s)) ? void 0 : i.host,
        };
      if (n) {
        o.$current_url = n;
        let e = r2(n);
        ((o.$host = null == e ? void 0 : e.host), (o.$pathname = null == e ? void 0 : e.pathname), sR(o, ns(n)));
      }
      return (s && sR(o, nr(s)), o);
    }
    function nh() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (e) {
        return;
      }
    }
    let nc = { flags: su, surveys: st },
      nd = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      np = (e) => `${e}_cookie_identity_change_pending`,
      nf = (e) => {
        let t = "",
          i = 0;
        for (let s of e) {
          let e = encodeURIComponent(JSON.stringify(s).slice(1, -1)).length;
          if (i + e > 1e3) break;
          ((t += s), (i += e));
        }
        return t;
      },
      ng = "main",
      nv = [iY, iZ, i1, i2, i3, su, i5, i8],
      n_ = (e) => -1 !== nv.indexOf(e),
      nm = [iA, iD],
      ny = (e) => -1 !== nm.indexOf(e),
      nb = (e, t) => {
        try {
          return JSON.stringify(e) === JSON.stringify(t);
        } catch (i) {
          return e === t;
        }
      },
      nw = (e) => {
        if (!e) return {};
        let t = JSON.parse(e);
        return B(t) ? t : {};
      },
      nx = (e, t) => {
        sM(e, (i, s) => {
          let r = r0(s);
          (r && "event" !== r.exposure) || {}.hasOwnProperty.call(t, s) || delete e[s];
        });
      };
    var nk = class {
      constructor(e, t, i = !0) {
        if (
          ((this.Vo = {}),
          (this.Go = !1),
          (this.Zo = !1),
          (this.Qo = !1),
          (this.Jo = !1),
          (this.Ko = !1),
          (this.Xo = new Map()),
          (this.Yo = !1),
          (this.tl = !1),
          (this.el = !1),
          (this.il = new Set()),
          (this.nl = new Set()),
          (this.Ir = e),
          (this.sl = i),
          (this.props = {}),
          (this.rl = void 0),
          (this.ol = ((e) => {
            let t = "";
            return (
              e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
              e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
            );
          })(e)),
          (this.Oo = this.ll(e)),
          (this.Qo = this.al(e)),
          this.load(),
          this.ul(),
          e.debug && ik.info("Persistence loaded", e.persistence, tb({}, this.props)),
          this.update_config(e, e, t),
          this.save(),
          u)
        ) {
          const e = () => this.flush();
          (sq(u, "beforeunload", e, { capture: !1 }),
            sq(u, "pagehide", e, { capture: !1 }),
            (this.hl = (e) => {
              if (this.Go && (!e.storageArea || e.storageArea === (null == u ? void 0 : u.localStorage)) && e.key)
                if (e.key !== this.ol) {
                  if (this.Qo) {
                    let t = rQ.find((t) => e.key === this.cl(t));
                    t && this.dl(e.key, t);
                  }
                } else this.dl(e.key, ng);
            }),
            sq(u, "storage", this.hl));
        }
      }
      markCrossTabFeatureFlagChanges(e) {
        Object.entries(e).forEach(([e, t]) => {
          let i = this.Xo.get(e);
          if (!n_(e) || !0 === i) return;
          if (!0 === t) return void this.vl(e, !0);
          let s = new Set(i || []);
          (t.forEach((e) => s.add(e)), s.size && this.vl(e, s));
        });
      }
      onCrossTabFeatureFlagChange(e) {
        return (this.nl.add(e), () => this.nl.delete(e));
      }
      destroy() {
        (this.hl && u && (u.removeEventListener("storage", this.hl), (this.hl = void 0)), this.nl.clear());
      }
      dl(e, t, i = !0) {
        let s, r;
        if (this.mi) return !1;
        try {
          if (((r = s0.Ot(e)), W(r))) {
            let e = this.fl(t);
            return ((e.storageValue = null), t !== ng && (e.persisted = !1), !1);
          }
          s = nw(r);
        } catch (e) {
          return !1;
        }
        let n = t === ng ? s : s0.Dt(this.ol);
        if (n && this.pl(n)) return !1;
        let o = this.gl(s, t, i);
        return ((t === ng && this.Qo && !nb(this.ml().main, s)) || this.yl(s, t, !0, r), o);
      }
      pl(e) {
        let t = this.props[iO],
          i = e[iO];
        return !z(t) && !z(i) && t !== i;
      }
      yl(e, t, i, s) {
        let r = this.fl(t);
        ((r.storageValue = s), t !== ng && (r.persisted = i));
        try {
          r.fingerprint = this.bl(e, t);
        } catch (e) {
          r.fingerprint = void 0;
        }
      }
      gl(e, t, i) {
        let s = !1;
        return (
          nv.forEach((i) => {
            var r;
            let n = null == (r = r0(i)) ? void 0 : r.storageGroup;
            if ((t === ng && this.Qo && n) || (t !== ng && n !== t)) return;
            let o = i in e,
              a = this._l(i, o ? e[i] : void 0),
              l = this.Xo.has(i) ? i in this.props : o;
            (l === i in this.props && nb(a, this.props[i])) || (l ? this.wl(i, a, !1) : this.kl(i, !1), (s = !0));
          }),
          s && i && this.nl.forEach((e) => e()),
          s
        );
      }
      Sl() {
        if (!this.Go) return !1;
        try {
          this.el = !1;
          let e = s0.Ot(this.ol),
            t = this.fl(ng),
            i,
            s = !1,
            r = !1;
          if (e !== t.storageValue)
            if (W(e)) t.storageValue = null;
            else {
              if (((i = nw(e)), (this.el = !this.tl && this.pl(i)), this.el)) return !1;
              ((r = this.gl(i, ng, !1)),
                !this.Qo || nb(this.ml().main, i) ? this.yl(i, ng, !0, e) : (t.storageValue = e),
                (s = !0));
            }
          return (
            this.Qo &&
              rQ.forEach((e) => {
                let t = s0.Ot(this.cl(e)),
                  n = this.fl(e),
                  o = i || {},
                  a =
                    s &&
                    nv.some((t) => {
                      var i;
                      return (null == (i = r0(t)) ? void 0 : i.storageGroup) === e && t in o;
                    });
                if (t === n.storageValue && !a) return;
                if (W(t))
                  return ((n.storageValue = null), (n.persisted = !1), void (a && (r = this.gl(o, e, !1) || r)));
                let l = nw(t);
                ((r = this.gl(l, e, !1) || r), this.yl(l, e, !0, t));
              }),
            r
          );
        } catch (e) {
          return !1;
        }
      }
      vl(e, t) {
        this.Xo.set(e, t);
        let i = r0(e);
        (null == i ? void 0 : i.volatile) ||
          ((this.fl((this.Qo ? (null == i ? void 0 : i.storageGroup) : void 0) || ng).fingerprint = void 0),
          this.xl(e));
      }
      Cl() {
        nv.forEach((e) => this.Xo.set(e, !0));
      }
      ul() {
        if (this.Go)
          try {
            let e = s0.Ot(this.ol),
              t = nw(e);
            ((this.fl(ng).storageValue = e),
              nv.forEach((e) => {
                var i;
                let s = this.Qo ? (null == (i = r0(e)) ? void 0 : i.storageGroup) : void 0,
                  r = s ? s0.Ot(this.cl(s)) : null;
                if (s) {
                  let e = this.fl(s);
                  ((e.storageValue = r), (e.persisted = !W(r)));
                }
                let n = s && !W(r) ? nw(r) : t;
                e in this.props ? this.$l(e, n[e], this.props[e]) : e in n && this.vl(e, !0);
              }));
          } catch (e) {}
      }
      _l(e, t) {
        let i = this.Xo.get(e);
        if (!i) return t;
        if (!0 === i) return this.props[e];
        if ("$active_feature_flags" === e) {
          let s = new Set(j(t) ? t : []),
            r = new Set(j(this.props[e]) ? this.props[e] : []);
          return (i.forEach((e) => (r.has(e) ? s.add(e) : s.delete(e))), Array.from(s));
        }
        let s = B(t) ? tb({}, t) : {},
          r = B(this.props[e]) ? this.props[e] : {};
        return (
          i.forEach((e) => {
            e in r ? (s[e] = r[e]) : delete s[e];
          }),
          s
        );
      }
      $l(e, t, i) {
        if (!n_(e)) return;
        let s = this.Xo.get(e);
        if (!0 === s) return;
        let r = t;
        if (this.Go)
          try {
            var n;
            let t = this.Qo ? (null == (n = r0(e)) ? void 0 : n.storageGroup) : void 0,
              i = t ? this.cl(t) : this.ol;
            r = nw(s0.Ot(i))[e];
          } catch (e) {}
        let o = new Set(s || []);
        if ("$active_feature_flags" === e) {
          if ((!z(t) && !j(t)) || (!z(r) && !j(r)) || !j(i)) return void this.vl(e, !0);
          let s = new Set(t || []),
            n = new Set(r || []),
            a = new Set(i);
          (new Set([...s, ...a]).forEach((e) => {
            s.has(e) !== a.has(e) && o.add(e);
          }),
            o.forEach((e) => {
              n.has(e) === a.has(e) && o.delete(e);
            }));
        } else {
          if (!B(i)) return void (nb(r, i) ? this.Xo.delete(e) : this.vl(e, !0));
          {
            if ((!z(t) && !B(t)) || (z(t) && H(i) && z(r))) return void this.vl(e, !0);
            let s = B(t) ? t : {},
              n = B(r) ? r : {};
            (new Set([...Object.keys(s), ...Object.keys(i)]).forEach((e) => {
              (e in s == e in i && nb(s[e], i[e])) || o.add(e);
            }),
              o.forEach((e) => {
                e in n == e in i && nb(n[e], i[e]) && o.delete(e);
              }));
          }
        }
        o.size ? this.vl(e, o) : this.Xo.delete(e);
      }
      Tl() {
        var e;
        let t = null == (e = this.Ir) ? void 0 : e.persistence_save_debounce_ms;
        return K(t) && t > 0 ? t : 0;
      }
      Il(e) {
        if (this.Ir.cookieWinsOnConflict && "localstorage+cookie" === this.Ir.persistence.toLowerCase())
          if (e)
            try {
              let t = s4(e, this.Ir.cookie_persisted_properties || []),
                i = s8(t, this.Ir.cookie_persisted_properties || []),
                s = JSON.stringify(t) + "|" + JSON.stringify(i),
                r = sY.Ot(this.ol) || void 0;
              r && s7(this.ol, r) === s && ((this.Ml = s), (this.El = r));
            } catch (e) {}
          else
            try {
              let e = sY.Ot(this.ol) || void 0;
              ((this.Ml = e ? s7(this.ol, e) : void 0), (this.El = e));
            } catch (e) {}
      }
      syncCookieProperties() {
        return this.Pl(this.Ir);
      }
      Pl(e, t = !1) {
        let i, s;
        if (
          (this.mi && !t) ||
          this.Ko ||
          !e.cookieWinsOnConflict ||
          "localstorage+cookie" !== e.persistence.toLowerCase()
        )
          return !1;
        try {
          i = sY.Ot(this.ol) || void 0;
        } catch (e) {}
        if (!i || i === this.El) return !1;
        let r = s7(this.ol, i);
        try {
          s = s5(JSON.parse(i));
        } catch (e) {
          return !1;
        }
        if ((sY.Ot(this.ol) || void 0) !== i) return !1;
        ((this.Ml = r), (this.El = i));
        let n = s9(this.ol, i),
          o = [...s2, ...n.properties],
          a = {};
        if (
          (Object.keys(s).forEach((e) => {
            let t = s[e];
            (z(t) || W(t) || "" === t || ("$user_state" === e && "anonymous" !== t && "identified" !== t)) &&
              ((a[e] = !0), delete s[e]);
          }),
          H(s))
        )
          return !1;
        let l = "distinct_id" in s || "anonymous" === s.$user_state || "identified" === s.$user_state,
          u = this.props,
          h = u[iO],
          c = u[sh],
          d = sR({}, u);
        ([...s2, ...(e.cookie_persisted_properties || [])].forEach((e) => {
          if (-1 !== o.indexOf(e) && !(e in s) && !a[e] && (l || ("distinct_id" !== e && "$user_state" !== e))) {
            let t = d[e];
            (n.isValid || -1 === s2.indexOf(e) || (!1 !== t && 0 !== t)) && delete d[e];
          }
        }),
          (this.props = sR(d, s)),
          nv.forEach((e) => {
            let t = e in this.props;
            (e in u === t && nb(u[e], this.props[e])) || (t ? this.$l(e, u[e], this.props[e]) : this.vl(e, !0));
          }),
          !l || "$user_state" in s || "$user_state" in this.props || this.wl(sh, sk));
        let p = this.props[iO],
          f = this.props[sh];
        return (
          l &&
            (p !== h || f !== c) &&
            ((this.tl = !0),
            (this.Jo = !0),
            rs.At(np(this.ol), !0),
            this.kl(i8),
            this.kl(iZ),
            this.kl(iY),
            this.kl(i1),
            this.kl(i2),
            this.kl(i3),
            this.kl(su),
            this.kl(sl),
            this.kl(so),
            "anonymous" !== f ||
              ("identified" !== c && "anonymous" !== s.$user_state && (z(h) || p === h)) ||
              (nx(this.props, s), this.kl(i9)),
            "identified" === f ? (this.props.$user_id = p) : delete this.props.$user_id,
            this.kl(iM)),
          !0
        );
      }
      consumeCookieIdentityChange() {
        let e = np(this.ol),
          t = this.Jo || !!rs.Ot(e);
        return ((this.Jo = !1), t && rs.Lt(e), t);
      }
      Rl(e = !1) {
        return !(
          this.Ko ||
          (this.mi && !e) ||
          !this.Ir.cookieWinsOnConflict ||
          "localstorage+cookie" !== this.Ir.persistence.toLowerCase() ||
          ((this.Ko = !0), 0)
        );
      }
      Al() {
        this.Ko && (z(this.Fl) || (clearTimeout(this.Fl), (this.Fl = void 0)), delete this.Vo[ng], this.Ol(!0));
      }
      Dl(e = !0) {
        if (this.Ko)
          try {
            e ? this.Al() : z(this.Fl) || (clearTimeout(this.Fl), (this.Fl = void 0));
          } finally {
            this.Ko = !1;
          }
      }
      isDisabled() {
        return !!this.mi;
      }
      ll(e) {
        -1 === nd.indexOf(e.persistence.toLowerCase()) &&
          (ik.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"),
          (e.persistence = "localStorage+cookie"));
        let t = ((e = [], t = !1) => {
            let i = [...s2, ...e];
            return tb(
              tb({}, s0),
              {},
              {
                Dt(e) {
                  try {
                    let r,
                      n,
                      o = {};
                    try {
                      o = (n = sY.Ot(e) || void 0) ? s5(JSON.parse(n)) : {};
                    } catch (e) {}
                    let a = JSON.parse(s0.Ot(e) || "{}");
                    if (t) {
                      let t = s9(e, n),
                        l = [...s2, ...t.properties],
                        u = {};
                      Object.keys(o).forEach((e) => {
                        let t = o[e];
                        W(t) ||
                          "" === t ||
                          ("$user_state" === e && "anonymous" !== t && "identified" !== t) ||
                          (u[e] = t);
                      });
                      let h = "distinct_id" in u || "anonymous" === u.$user_state || "identified" === u.$user_state;
                      if (Object.keys(u).length > 0) {
                        var s;
                        let e = a[iO],
                          r = null != (s = a.$user_state) ? s : sk;
                        (i.forEach((e) => {
                          if (-1 !== l.indexOf(e) && !(e in o) && (h || ("distinct_id" !== e && "$user_state" !== e))) {
                            let i = a[e];
                            (t.isValid || -1 === s2.indexOf(e) || (!1 !== i && 0 !== i)) && delete a[e];
                          }
                        }),
                          !h || "$user_state" in o || "$user_state" in a || (a[sh] = sk),
                          h &&
                            (("distinct_id" in u ? u[iO] : a[iO]) !== e ||
                              ("$user_state" in u ? u[sh] : a[sh]) !== r) &&
                            (s1.forEach((e) => delete a[e]),
                            "identified" === u.$user_state && "distinct_id" in u
                              ? (a.$user_id = u[iO])
                              : delete a.$user_id,
                            "identified" !== u.$user_state && (delete a[i7], delete a[i9]),
                            delete a.__alias));
                      }
                      r = sR(a, u);
                    } else r = sR(o, a);
                    return (s0.At(e, r), r);
                  } catch (e) {}
                  return null;
                },
                At(i, s, r, n, o, a) {
                  let l = s0.At(i, s, void 0, void 0, a);
                  try {
                    let u = s4(s, e);
                    if (Object.keys(u).length) {
                      if (t) {
                        let t = i + "_cpm",
                          h = s8(u, e);
                        if ((sY.At(t, h, r, n, o, a), sY.Ot(t) !== JSON.stringify(h))) {
                          sY.Lt(t, n);
                          let e = s4(s);
                          return (sY.At(i, e, r, n, o, a), l);
                        }
                      }
                      sY.At(i, u, r, n, o, a);
                    }
                  } catch (e) {
                    s0.Pt(e);
                  }
                  return l;
                },
                Lt(e, t) {
                  try {
                    (null == u || u.localStorage.removeItem(e), sY.Lt(e, t), sY.Lt(e + "_cpm", t));
                  } catch (e) {
                    s0.Pt(e);
                  }
                },
              },
            );
          })(e.cookie_persisted_properties || [], e.cookieWinsOnConflict),
          i,
          s = !1,
          r = !1,
          n = e.persistence.toLowerCase();
        return (
          "localstorage" === n && s0.Et()
            ? ((i = s0), (r = !0))
            : "localstorage+cookie" === n && t.Et()
              ? ((i = t), (r = !0), (s = !0))
              : "sessionstorage" === n && rs.Et()
                ? (i = rs)
                : "memory" === n
                  ? (i = rt)
                  : "cookie" === n && sY.Et()
                    ? ((i = sY), (s = !0))
                    : t.Et()
                      ? ((i = t), (r = !0), (s = !0))
                      : sY.Et()
                        ? ((i = sY), (s = !0))
                        : (i = rt),
          (this.Go = r),
          (this.Zo = s),
          i
        );
      }
      cl(e) {
        return `${this.ol}__${e}`;
      }
      al(e) {
        return this.Go && !!e.split_storage;
      }
      properties() {
        let e = {};
        return (
          sM(this.props, (t, i) => {
            let s = r0(i);
            if (!s || "event" === s.exposure) {
              var r;
              if (null == s || null == (r = s.shouldSkipFromEventProperties) ? void 0 : r.call(s, t)) return;
              e[i] = t;
            }
          }),
          e
        );
      }
      load(e = !1) {
        if (this.mi && !e) return;
        let t = this.Ir.cookieWinsOnConflict && "localstorage+cookie" === this.Ir.persistence.toLowerCase(),
          i = t ? s0.Dt(this.ol) : null,
          s = {};
        if (t)
          try {
            ((s = s5(sY.Dt(this.ol))),
              sM(s, (e, t) => {
                (z(e) || W(e) || "" === e) && delete s[t];
              }));
          } catch (e) {}
        let r = this.Oo.Dt(this.ol);
        if ((r && (this.props = sR({}, r)), this.Qo && this.Ll(), t && r)) {
          var n, o;
          let e = null == i ? void 0 : i[iO],
            t = null != (n = null == i ? void 0 : i.$user_state) ? n : sk,
            a = r[iO],
            l = null != (o = r.$user_state) ? o : sk;
          if (a !== e || l !== t) {
            ((this.Jo = !0), rs.At(np(this.ol), !0));
            let i = sR({}, this.props);
            (s1.forEach((e) => delete i[e]),
              "anonymous" !== l ||
                ("identified" !== t && "anonymous" !== s.$user_state && (z(e) || a === e)) ||
                (nx(i, s), delete i[i9]),
              (this.props = i));
            let r = new Set();
            (s1.forEach((e) => {
              var t;
              let i = null == (t = r0(e)) ? void 0 : t.storageGroup;
              i && r.add(i);
            }),
              r.forEach((e) => {
                let t = {};
                (sM(this.props, (i, s) => {
                  var r;
                  (null == (r = r0(s)) ? void 0 : r.storageGroup) === e && (t[s] = i);
                }),
                  H(t)
                    ? (s0.Lt(this.cl(e)), (this.Vo[e] = {}))
                    : s0.At(this.cl(e), t) && (this.Vo[e] = { persisted: !0, fingerprint: this.bl(t, e) }));
              }));
          }
        }
        rs.Ot(np(this.ol)) && (this.Jo = !0);
      }
      Ll() {
        for (let e of rQ) {
          let t = s0.Dt(this.cl(e));
          if (t && !H(t)) {
            let i = this.fl(e);
            ((i.persisted = !0), this.Nl(e) || (i.fingerprint = this.bl(t, e)), this.ql(e, t) || sR(this.props, t));
          }
        }
      }
      Nl(e) {
        return Object.keys(this.props).some((t) => {
          var i;
          return (null == (i = r0(t)) ? void 0 : i.storageGroup) === e;
        });
      }
      ql(e, t) {
        let i = nc[e];
        if (!i) return !1;
        let s = t[i],
          r = this.props[i];
        return K(s) && K(r) && r > s;
      }
      refreshKey(e) {
        var t;
        if (this.mi || this.il.has(e)) return;
        let i = this.Qo ? (null == (t = r0(e)) ? void 0 : t.storageGroup) : void 0,
          s = i ? s0.Dt(this.cl(i)) : this.Oo.Dt(this.ol);
        if (s && e in s) this.wl(e, s[e], !1);
        else {
          if (i) {
            let t = this.Oo.Dt(this.ol);
            if (t && e in t) return void this.wl(e, t[e], !1);
          }
          this.kl(e, !1);
        }
      }
      save() {
        if (this.mi) return;
        let e = this.Tl();
        e > 0
          ? z(this.Fl) &&
            (this.Fl = setTimeout(() => {
              ((this.Fl = void 0), this.Ol());
            }, e))
          : this.Ol();
      }
      flush() {
        z(this.Fl) || (clearTimeout(this.Fl), (this.Fl = void 0), this.Ol());
      }
      Ol(e = !1) {
        if (this.mi || (this.Ko && !e)) return;
        e ||
          (this.syncCookieProperties(),
          (this.Ir.cookieWinsOnConflict && "localstorage+cookie" === this.Ir.persistence.toLowerCase()) ||
            nm.forEach((e) => this.refreshKey(e)));
        let t = !e && !this.Yo;
        t || (this.el = !1);
        let i = !!t && this.Sl();
        if (this.el)
          return void (
            this.Ir.debug && ik.warn("skipping persistence write because storage belongs to a different distinct ID")
          );
        if (this.Qo) return (this.jl(), void (i && this.nl.forEach((e) => e())));
        let s = this.Bl(this.Oo, this.ol, this.props, ng);
        ("written" === s && this.Il(this.props),
          "failed" !== s && (this.Xo.clear(), (this.tl = !1), this.il.clear()),
          i && this.nl.forEach((e) => e()));
      }
      jl() {
        let { main: e, groups: t } = this.ml(),
          i = this.Bl(this.Oo, this.ol, e, ng);
        for (let r of ("written" === i && this.Il(e),
        "failed" !== i &&
          ((this.tl = !1),
          this.il.clear(),
          nv.forEach((e) => {
            var t;
            (null == (t = r0(e)) ? void 0 : t.storageGroup) || this.Xo.delete(e);
          })),
        rQ)) {
          var s;
          let e = t[r];
          if (H(e) && !(null == (s = this.Vo[r]) ? void 0 : s.persisted)) {
            nv.forEach((e) => {
              var t;
              (null == (t = r0(e)) ? void 0 : t.storageGroup) === r && this.Xo.delete(e);
            });
            continue;
          }
          let i = this.Bl(s0, this.cl(r), e, r);
          "failed" !== i &&
            nv.forEach((e) => {
              let t = r0(e);
              (null == t ? void 0 : t.storageGroup) !== r || ("written" !== i && t.volatile) || this.Xo.delete(e);
            });
        }
      }
      ml() {
        let e = {},
          t = { flags: {}, surveys: {} };
        return (
          sM(this.props, (i, s) => {
            var r;
            let n = null == (r = r0(s)) ? void 0 : r.storageGroup;
            n ? (t[n][s] = i) : (e[s] = i);
          }),
          { main: e, groups: t }
        );
      }
      bl(e, t) {
        if (t === ng) return JSON.stringify(e) + "|" + this.Hl + "|" + this.zl + "|" + this.Ul;
        let i = {};
        return (
          sM(e, (e, t) => {
            var s;
            i[t] = (null == (s = r0(t)) ? void 0 : s.volatile) ? "__volatile__" : e;
          }),
          JSON.stringify(i)
        );
      }
      Bl(e, t, i, s) {
        let r,
          n = this.fl(s);
        if (s !== ng && !n.dirty && !z(n.fingerprint)) return "skipped";
        try {
          if ((r = this.bl(i, s)) === n.fingerprint) return ((n.dirty = !1), "skipped");
        } catch (e) {
          r = void 0;
        }
        return e.At(t, i, this.Hl, this.zl, this.Ul, this.Ir.debug)
          ? ((n.dirty = !1),
            s !== ng && (n.persisted = !0),
            z(r) || (n.fingerprint = r),
            this.Go && (n.storageValue = s0.Ot(t)),
            "written")
          : (this.Ir.debug && ik.warn(`failed to persist storage entry "${t}"; will retry on next save`), "failed");
      }
      remove({ keepGroupEntries: e = !1 } = {}) {
        if (
          (this.Cl(),
          z(this.Fl) || (clearTimeout(this.Fl), (this.Fl = void 0)),
          this.Oo.Lt(this.ol, !1),
          this.Oo.Lt(this.ol, !0),
          !e && this.sl)
        )
          for (let e of rQ) s0.Lt(this.cl(e));
        (e ? delete this.Vo[ng] : (this.Vo = {}), (this.Ml = void 0), (this.El = void 0));
      }
      clear() {
        (this.remove(), (this.props = {}));
      }
      register_once(e, t, i) {
        if (B(e)) {
          (this.syncCookieProperties(), z(t) && (t = "None"), (this.Hl = z(i) ? this.Wl : i));
          let s = !1;
          if (
            (sM(e, (e, i) => {
              (this.props.hasOwnProperty(i) && this.props[i] !== t) || (this.wl(i, e), (s = !0));
            }),
            s)
          )
            return (this.save(), !0);
        }
        return !1;
      }
      register(e, t) {
        if (B(e)) {
          (this.syncCookieProperties(), (this.Hl = z(t) ? this.Wl : t));
          let i = !1;
          if (
            (sM(e, (t, s) => {
              e.hasOwnProperty(s) && (this.props[s] !== t || B(t) || j(t)) && (this.wl(s, t), (i = !0));
            }),
            i)
          )
            return (this.save(), !0);
        }
        return !1;
      }
      unregister(e) {
        this.syncCookieProperties();
        let t = !1;
        for (let i of "string" == typeof e ? [e] : e) i in this.props && (this.kl(i), (t = !0));
        t && this.save();
      }
      update_campaign_params() {
        let e = null == d ? void 0 : d.URL;
        if (e === this.rl) return;
        let t = ni(
            this.Ir.custom_campaign_params,
            this.Ir.mask_personal_data_properties,
            this.Ir.custom_personal_data_properties,
          ),
          i = !H(sD(t));
        return (i && this.register(t), (this.rl = e), i ? t : void 0);
      }
      update_search_keyword() {
        let e;
        this.register((e = null == d ? void 0 : d.referrer) ? nr(e) : {});
      }
      update_referrer_info() {
        var e;
        this.register_once(
          {
            $referrer: na(),
            $referring_domain:
              ((null == d ? void 0 : d.referrer) && (null == (e = r2(d.referrer)) ? void 0 : e.host)) || no,
          },
          void 0,
        );
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        let e = nl(
          this.Ir.mask_personal_data_properties,
          this.Ir.custom_personal_data_properties,
          this.Ir.disable_capture_url_hashes,
        );
        this.register_once({ [sf]: this.Zo ? { r: nf(e.r), u: e.u ? nf(e.u) : void 0 } : e }, void 0);
      }
      get_initial_props() {
        let e = {};
        sM([sp, sd], (t) => {
          let i = this.props[t];
          i &&
            sM(i, function (t, i) {
              e["$initial_" + R(i)] = t;
            });
        });
        let t = this.props[sf];
        return (
          t &&
            sR(
              e,
              (function (e, t = !1) {
                let i = nu(e, t),
                  s = {};
                return (
                  sM(i, function (e, t) {
                    s[`$initial_${R(t)}`] = e;
                  }),
                  s
                );
              })(t, this.Ir.disable_capture_url_hashes),
            ),
          e
        );
      }
      safe_merge(e) {
        return (
          sM(this.props, function (t, i) {
            i in e || (e[i] = t);
          }),
          e
        );
      }
      update_config(e, t, i) {
        let s = e.persistence !== t.persistence,
          r = !((e, t) => {
            if (e.length !== t.length) return !1;
            let i = [...e].sort(),
              s = [...t].sort();
            return i.every((e, t) => e === s[t]);
          })(e.cookie_persisted_properties || [], t.cookie_persisted_properties || []),
          n = s || r,
          o = e.cookieWinsOnConflict !== t.cookieWinsOnConflict,
          a = e.disable_persistence || !!i,
          l = !!this.mi && !a;
        (a || this.Pl(t, l),
          (this.Ir = e),
          !a &&
            (s || r || o) &&
            ((this.Ml = void 0),
            (this.El = void 0),
            this.Pl(tb(tb({}, e), {}, { cookie_persisted_properties: t.cookie_persisted_properties }), l)));
        let u = n || o ? this.ll(e) : this.Oo;
        this.Vl();
        let h = this.al(e),
          c = n || h !== this.Qo,
          d = !a && (c || e.cross_subdomain_cookie !== this.zl || e.secure_cookie !== this.Ul) && this.Rl(l);
        this.Yo = c;
        try {
          if (
            ((this.Wl = this.Hl = e.cookie_expiration),
            this.set_disabled(a),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie),
            c)
          ) {
            let e = this.props;
            (this.clear(), (this.Oo = u), (this.Qo = h), (this.props = e), this.save());
          } else o && ((this.Oo = u), a || (delete this.Vo[ng], this.Ol()));
        } finally {
          ((this.Yo = !1), d && this.Dl());
        }
      }
      Vl() {
        let e = this.props[sf];
        if (!this.Zo || !B(e) || "string" != typeof e.r) return;
        let t = nf(e.r),
          i = "string" == typeof e.u ? nf(e.u) : e.u;
        (t === e.r && i === e.u) || this.wl(sf, tb(tb({}, e), {}, { r: t, u: i }));
      }
      set_disabled(e) {
        ((this.mi = e), this.mi ? this.remove() : this.save());
      }
      set_cross_subdomain(e) {
        e !== this.zl && ((this.zl = e), this.remove({ keepGroupEntries: !0 }), this.save());
      }
      set_secure(e) {
        e !== this.Ul && ((this.Ul = e), this.remove({ keepGroupEntries: !0 }), this.save());
      }
      set_event_timer(e, t) {
        let i = this.props.__timers || {};
        ((i[e] = t), this.wl(iN, i), this.save());
      }
      remove_event_timer(e) {
        let t = this.props.__timers || {},
          i = t[e];
        return (z(i) || (delete t[e], this.wl(iN, t), this.save()), i);
      }
      get_property(e) {
        return this.props[e];
      }
      set_property(e, t) {
        (this.wl(e, t), this.save());
      }
      wl(e, t, i = !0) {
        var s;
        let r = this.props[e];
        ((this.props[e] = t),
          i &&
            (("distinct_id" !== e && "$user_state" !== e) || r === t || (this.tl = !0),
            ny(e) && !nb(r, t) && this.il.add(e),
            this.$l(e, r, t),
            (null == (s = r0(e)) ? void 0 : s.volatile) || this.xl(e)));
      }
      kl(e, t = !0) {
        (delete this.props[e], t && (n_(e) && this.vl(e, !0), ny(e) && this.il.add(e), this.xl(e)));
      }
      xl(e) {
        var t;
        let i = null == (t = r0(e)) ? void 0 : t.storageGroup;
        i && (this.fl(i).dirty = !0);
      }
      fl(e) {
        return this.Vo[e] || (this.Vo[e] = {});
      }
    };
    let nE = "gzip-js",
      n$ = "base64",
      nS = "events",
      nI = "cancelEvents",
      nP = "survey shown",
      nC = "survey dismissed",
      nO = "survey sent",
      nF = "popover";
    function nT(e) {
      let t = !0;
      return {
        dispose() {
          if (t) {
            t = !1;
            let i = e();
            i && q(i.then) && i.then(void 0, () => {});
          }
        },
      };
    }
    let nM = iE("[RateLimiter]");
    var nR = class {
      constructor(e) {
        ((this.serverLimits = {}),
          (this.lastEventRateLimited = !1),
          (this.checkForLimiting = (e) => {
            let t = e.text;
            if (t && t.length)
              try {
                (JSON.parse(t).quota_limited || []).forEach((e) => {
                  (nM.info(`${e || "events"} is quota limited.`), (this.serverLimits[e] = new Date().getTime() + 6e4));
                });
              } catch (e) {
                return void nM.warn(`could not rate limit - continuing. Error: "${null == e ? void 0 : e.message}"`, {
                  text: t,
                });
              }
          }),
          (this.instance = e),
          (this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited));
      }
      get captureEventsPerSecond() {
        var e;
        return (null == (e = this.instance.config.rate_limiting) ? void 0 : e.events_per_second) || 10;
      }
      get captureEventsBurstLimit() {
        var e;
        return Math.max(
          (null == (e = this.instance.config.rate_limiting) ? void 0 : e.events_burst_limit) ||
            10 * this.captureEventsPerSecond,
          this.captureEventsPerSecond,
        );
      }
      clientRateLimitContext(e = !1) {
        var t, i, s;
        let { captureEventsBurstLimit: r, captureEventsPerSecond: n } = this,
          o = new Date().getTime(),
          a =
            null != (t = null == (i = this.instance.persistence) ? void 0 : i.get_property("$capture_rate_limit"))
              ? t
              : { tokens: r, last: o };
        ((a.tokens += ((o - a.last) / 1e3) * n), (a.last = o), a.tokens > r && (a.tokens = r));
        let l = 1 > a.tokens;
        if ((l || e || (a.tokens = Math.max(0, a.tokens - 1)), l && !e)) {
          let e = (K(a.dropped) ? a.dropped : 0) + 1;
          ((a.dropped = e), !this.lastEventRateLimited && this.Gl(e) && (a.dropped = 0));
        }
        return (
          (this.lastEventRateLimited = l),
          null == (s = this.instance.persistence) || s.set_property("$capture_rate_limit", a),
          { isRateLimited: l, remainingTokens: a.tokens }
        );
      }
      Zl(e) {
        let t = this.instance.config.property_denylist;
        return !j(t) || !t.includes(e);
      }
      Ql() {
        var e;
        if (this.Zl("$current_url") && this.Zl("$pathname") && (null == p ? void 0 : p.pathname))
          return `${null != (e = p.origin) ? e : ""}${p.pathname}`;
      }
      Gl(e) {
        var t, i;
        let { captureEventsBurstLimit: s, captureEventsPerSecond: r } = this,
          n = this.Ql(),
          o = this.Zl("$session_id") ? (null == (t = (i = this.instance).get_session_id) ? void 0 : t.call(i)) : void 0,
          a = [
            `${e} event(s) dropped since the last warning`,
            n ? `triggered on ${n}` : void 0,
            o ? `session ${o}` : void 0,
          ]
            .filter(Boolean)
            .join(", ");
        return !!this.instance.capture(
          "$$client_ingestion_warning",
          {
            $$client_ingestion_warning_message: `posthog-js client rate limited: ${a}. Config is set to ${r} events per second and ${s} events burst limit.`,
          },
          { skip_client_rate_limiting: !0 },
        );
      }
      isServerRateLimited(e) {
        let t = this.serverLimits[e || "events"] || !1;
        return !1 !== t && new Date().getTime() < t;
      }
    };
    let nA = iE("[RemoteConfig]");
    var nL = class {
        constructor(e) {
          this._instance = e;
        }
        get remoteConfig() {
          var e;
          return null == (e = w._POSTHOG_REMOTE_CONFIG) || null == (e = e[this._instance.config.token])
            ? void 0
            : e.config;
        }
        Jl(e) {
          var t, i, s;
          (null == (t = w.__PosthogExtensions__) ? void 0 : t.loadExternalDependency)
            ? null == (i = w.__PosthogExtensions__) ||
              null == (s = i.loadExternalDependency) ||
              s.call(i, this._instance, "remote-config", () => e(this.remoteConfig))
            : e();
        }
        Kl(e) {
          this._instance._send_request({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
            callback: e,
          });
        }
        load() {
          try {
            if (this.remoteConfig)
              return (nA.info("Using preloaded remote config", this.remoteConfig), void this.Xl(this.remoteConfig));
            if (this._instance.Yl()) return void nA.warn("Remote config is disabled. Falling back to local config.");
            this.Jl((e) => {
              e
                ? this.Xl(e)
                : (nA.info("No config found after loading remote JS config. Falling back to JSON."),
                  this.Kl((e) => {
                    this.Xl(e.json, e);
                  }));
            });
          } catch (e) {
            (nA.error("Error loading remote config", e), this.Xl());
          }
        }
        Xl(e, t) {
          !e &&
            t &&
            (0 === t.statusCode
              ? t.error || nA.warn("Failed to fetch remote config from PostHog.")
              : nA.error("Failed to fetch remote config from PostHog."));
          try {
            this._instance.Xl(e ? { ok: !0, config: e } : { ok: !1 });
          } catch (e) {
            nA.error("Error applying remote config", e);
          }
          if (
            !1 !== (null == e ? void 0 : e.hasFeatureFlags) &&
            !this._instance.config.advanced_disable_feature_flags_on_first_load
          )
            try {
              var i;
              null == (i = this._instance.featureFlags) || i.ensureFlagsLoaded();
            } catch (e) {
              nA.error("Error loading feature flags", e);
            }
        }
      },
      nD = Uint8Array,
      nN = Uint16Array,
      nj = Uint32Array,
      nq = new nD([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      nB = new nD([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
      ]),
      nH = new nD([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      nz = function (e, t) {
        for (var i = new nN(31), s = 0; 31 > s; ++s) i[s] = t += 1 << e[s - 1];
        var r = new nj(i[30]);
        for (s = 1; 30 > s; ++s) for (var n = i[s]; i[s + 1] > n; ++n) r[n] = ((n - i[s]) << 5) | s;
        return [i, r];
      },
      nV = nz(nq, 2),
      nU = nV[1];
    ((nV[0][28] = 258), (nU[258] = 28));
    for (var nW = nz(nB, 0)[1], nG = new nN(32768), nK = 0; 32768 > nK; ++nK) {
      var nX = ((43690 & nK) >>> 1) | ((21845 & nK) << 1);
      nG[nK] =
        (((65280 & (nX = ((61680 & (nX = ((52428 & nX) >>> 2) | ((13107 & nX) << 2))) >>> 4) | ((3855 & nX) << 4))) >>>
          8) |
          ((255 & nX) << 8)) >>>
        1;
    }
    var nJ = function (e, t, i) {
        for (var s = e.length, r = 0, n = new nN(t); s > r; ++r) ++n[e[r] - 1];
        var o,
          a = new nN(t);
        for (r = 0; t > r; ++r) a[r] = (a[r - 1] + n[r - 1]) << 1;
        if (i) {
          o = new nN(1 << t);
          var l = 15 - t;
          for (r = 0; s > r; ++r)
            if (e[r])
              for (var u = (r << 4) | e[r], h = t - e[r], c = a[e[r] - 1]++ << h, d = c | ((1 << h) - 1); d >= c; ++c)
                o[nG[c] >>> l] = u;
        } else for (o = new nN(s), r = 0; s > r; ++r) o[r] = nG[a[e[r] - 1]++] >>> (15 - e[r]);
        return o;
      },
      nQ = new nD(288);
    for (nK = 0; 144 > nK; ++nK) nQ[nK] = 8;
    for (nK = 144; 256 > nK; ++nK) nQ[nK] = 9;
    for (nK = 256; 280 > nK; ++nK) nQ[nK] = 7;
    for (nK = 280; 288 > nK; ++nK) nQ[nK] = 8;
    var nY = new nD(32);
    for (nK = 0; 32 > nK; ++nK) nY[nK] = 5;
    var nZ = nJ(nQ, 9, 0),
      n0 = nJ(nY, 5, 0),
      n1 = function (e) {
        return ((e / 8) | 0) + (7 & e && 1);
      },
      n2 = function (e, t, i) {
        ((null == t || 0 > t) && (t = 0), (null == i || i > e.length) && (i = e.length));
        var s = new (e instanceof nN ? nN : e instanceof nj ? nj : nD)(i - t);
        return (s.set(e.subarray(t, i)), s);
      },
      n3 = function (e, t, i) {
        var s = (t / 8) | 0;
        ((e[s] |= i <<= 7 & t), (e[s + 1] |= i >>> 8));
      },
      n5 = function (e, t, i) {
        var s = (t / 8) | 0;
        ((e[s] |= i <<= 7 & t), (e[s + 1] |= i >>> 8), (e[s + 2] |= i >>> 16));
      },
      n4 = function (e, t) {
        for (var i = [], s = 0; e.length > s; ++s) e[s] && i.push({ s: s, f: e[s] });
        var r = i.length,
          n = i.slice();
        if (!r) return [new nD(0), 0];
        if (1 == r) {
          var o = new nD(i[0].s + 1);
          return ((o[i[0].s] = 1), [o, 1]);
        }
        (i.sort(function (e, t) {
          return e.f - t.f;
        }),
          i.push({ s: -1, f: 25001 }));
        var a = i[0],
          l = i[1],
          u = 0,
          h = 1,
          c = 2;
        for (i[0] = { s: -1, f: a.f + l.f, l: a, r: l }; h != r - 1;)
          ((a = i[i[c].f > i[u].f ? u++ : c++]),
            (l = i[u != h && i[c].f > i[u].f ? u++ : c++]),
            (i[h++] = { s: -1, f: a.f + l.f, l: a, r: l }));
        var d = n[0].s;
        for (s = 1; r > s; ++s) n[s].s > d && (d = n[s].s);
        var p = new nN(d + 1),
          f = n6(i[h - 1], p, 0);
        if (f > t) {
          s = 0;
          var g = 0,
            v = f - t,
            _ = 1 << v;
          for (
            n.sort(function (e, t) {
              return p[t.s] - p[e.s] || e.f - t.f;
            });
            r > s;
            ++s
          ) {
            var m = n[s].s;
            if (t >= p[m]) break;
            ((g += _ - (1 << (f - p[m]))), (p[m] = t));
          }
          for (g >>>= v; g > 0;) {
            var y = n[s].s;
            t > p[y] ? (g -= 1 << (t - p[y]++ - 1)) : ++s;
          }
          for (; s >= 0 && g; --s) {
            var b = n[s].s;
            p[b] == t && (--p[b], ++g);
          }
          f = t;
        }
        return [new nD(p), f];
      },
      n6 = function (e, t, i) {
        return -1 == e.s ? Math.max(n6(e.l, t, i + 1), n6(e.r, t, i + 1)) : (t[e.s] = i);
      },
      n8 = function (e) {
        for (var t = e.length; t && !e[--t];);
        for (
          var i = new nN(++t),
            s = 0,
            r = e[0],
            n = 1,
            o = function (e) {
              i[s++] = e;
            },
            a = 1;
          t >= a;
          ++a
        )
          if (e[a] == r && a != t) ++n;
          else {
            if (!r && n > 2) {
              for (; n > 138; n -= 138) o(32754);
              n > 2 && (o(n > 10 ? ((n - 11) << 5) | 28690 : ((n - 3) << 5) | 12305), (n = 0));
            } else if (n > 3) {
              for (o(r), --n; n > 6; n -= 6) o(8304);
              n > 2 && (o(((n - 3) << 5) | 8208), (n = 0));
            }
            for (; n--;) o(r);
            ((n = 1), (r = e[a]));
          }
        return [i.subarray(0, s), t];
      },
      n9 = function (e, t) {
        for (var i = 0, s = 0; t.length > s; ++s) i += e[s] * t[s];
        return i;
      },
      n7 = function (e, t, i) {
        var s = i.length,
          r = n1(t + 2);
        ((e[r] = 255 & s), (e[r + 1] = s >>> 8), (e[r + 2] = 255 ^ e[r]), (e[r + 3] = 255 ^ e[r + 1]));
        for (var n = 0; s > n; ++n) e[r + n + 4] = i[n];
        return 8 * (r + 4 + s);
      },
      oe = function (e, t, i, s, r, n, o, a, l, u, h) {
        (n3(t, h++, i), ++r[256]);
        for (
          var c = n4(r, 15),
            d = c[0],
            p = c[1],
            f = n4(n, 15),
            g = f[0],
            v = f[1],
            _ = n8(d),
            m = _[0],
            y = _[1],
            b = n8(g),
            w = b[0],
            x = b[1],
            k = new nN(19),
            E = 0;
          m.length > E;
          ++E
        )
          k[31 & m[E]]++;
        for (E = 0; w.length > E; ++E) k[31 & w[E]]++;
        for (var $ = n4(k, 7), S = $[0], I = $[1], P = 19; P > 4 && !S[nH[P - 1]]; --P);
        var C,
          O,
          F,
          T,
          M = (u + 5) << 3,
          R = n9(r, nQ) + n9(n, nY) + o,
          A = n9(r, d) + n9(n, g) + o + 14 + 3 * P + n9(k, S) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
        if (R >= M && A >= M) return n7(t, h, e.subarray(l, l + u));
        if ((n3(t, h, 1 + (R > A)), (h += 2), R > A)) {
          ((C = nJ(d, p, 0)), (O = d), (F = nJ(g, v, 0)), (T = g));
          var L = nJ(S, I, 0);
          for (n3(t, h, y - 257), n3(t, h + 5, x - 1), n3(t, h + 10, P - 4), h += 14, E = 0; P > E; ++E)
            n3(t, h + 3 * E, S[nH[E]]);
          h += 3 * P;
          for (var D = [m, w], N = 0; 2 > N; ++N) {
            var j = D[N];
            for (E = 0; j.length > E; ++E)
              (n3(t, h, L[(q = 31 & j[E])]), (h += S[q]), q > 15 && (n3(t, h, (j[E] >>> 5) & 127), (h += j[E] >>> 12)));
          }
        } else ((C = nZ), (O = nQ), (F = n0), (T = nY));
        for (E = 0; a > E; ++E)
          if (s[E] > 255) {
            (n5(t, h, C[257 + (q = (s[E] >>> 18) & 31)]),
              (h += O[q + 257]),
              q > 7 && (n3(t, h, (s[E] >>> 23) & 31), (h += nq[q])));
            var q,
              B = 31 & s[E];
            (n5(t, h, F[B]), (h += T[B]), B > 3 && (n5(t, h, (s[E] >>> 5) & 8191), (h += nB[B])));
          } else (n5(t, h, C[s[E]]), (h += O[s[E]]));
        return (n5(t, h, C[256]), h + O[256]);
      },
      ot = new nj([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      oi = new nD(0),
      os = (function () {
        for (var e = new nj(256), t = 0; 256 > t; ++t) {
          for (var i = t, s = 9; --s;) i = (1 & i && 0xedb88320) ^ (i >>> 1);
          e[t] = i;
        }
        return e;
      })(),
      or = function (e, t, i) {
        for (; i; ++t) ((e[t] = i), (i >>>= 8));
      };
    let on = !!g || !!f,
      oo = new WeakMap(),
      oa = "text/plain",
      ol = 0,
      ou = !1,
      oh = (e, t) => {
        let [i, s] = e.split("#"),
          [r, n] = i.split("?");
        if (!n) return e;
        let o = n
          .split("&")
          .filter((e) => e.split("=")[0] !== t)
          .join("&");
        return `${r}${o ? `?${o}` : ""}${s ? `#${s}` : ""}`;
      },
      oc = (e, t, i = !0) => {
        var s;
        let [r, n] = e.split("?"),
          o = tb({}, t),
          a =
            null !=
            (s =
              null == n
                ? void 0
                : n.split("&").map((e) => {
                    var t;
                    let [s, r] = e.split("="),
                      n = i && null != (t = o[s]) ? t : r;
                    return (delete o[s], `${s}=${n}`);
                  }))
              ? s
              : [],
          l = (function (e, t = "&") {
            let i,
              s,
              r = [];
            return (
              sM(e, function (e, t) {
                z(e) ||
                  z(t) ||
                  "undefined" === t ||
                  ((i = encodeURIComponent(e instanceof File ? e.name : e.toString())),
                  (s = encodeURIComponent(t)),
                  (r[r.length] = s + "=" + i));
              }),
              r.join(t)
            );
          })(o);
        return (l && a.push(l), a.length > 0 ? `${r}?${a.join("&")}` : r);
      },
      od = (e) => {
        var t, i, s, r, n, o, a, l, u, h;
        if (e.ta) return e.ta;
        let { data: c, compression: d } = e;
        if (!c) return;
        if (d === nE) {
          let e =
            ((t = (function (e) {
              var t = e.length;
              if ("u" > typeof TextEncoder) return new TextEncoder().encode(e);
              for (
                var i = new nD(e.length + (e.length >>> 1)),
                  s = 0,
                  r = function (e) {
                    i[s++] = e;
                  },
                  n = 0;
                t > n;
                ++n
              ) {
                if (s + 5 > i.length) {
                  var o = new nD(s + 8 + ((t - n) << 1));
                  (o.set(i), (i = o));
                }
                var a = e.charCodeAt(n);
                128 > a
                  ? r(a)
                  : (2048 > a
                      ? r(192 | (a >>> 6))
                      : (a > 55295 && 57344 > a
                          ? (r(240 | ((a = (65536 + (1047552 & a)) | (1023 & e.charCodeAt(++n))) >>> 18)),
                            r(128 | ((a >>> 12) & 63)))
                          : r(224 | (a >>> 12)),
                        r(128 | ((a >>> 6) & 63))),
                    r(128 | (63 & a)));
              }
              return n2(i, 0, s);
            })(r1(c))),
            (i = { mtime: 0 }),
            (s = 0xffffffff),
            (r = {
              p(e) {
                for (var t = s, i = 0; e.length > i; ++i) t = os[(255 & t) ^ e[i]] ^ (t >>> 8);
                s = t;
              },
              d: () => 0xffffffff ^ s,
            }),
            (n = t.length),
            r.p(t),
            (u = ((o = 10 + ((i.filename && i.filename.length + 1) || 0)),
            (l = (function (e, t, i, s, r) {
              var n = e.length,
                o = new nD(s + n + 5 * (1 + Math.floor(n / 7e3)) + 8),
                a = o.subarray(s, o.length - 8),
                l = 0;
              if (!t || 8 > n)
                for (var u = 0; n >= u; u += 65535) {
                  var h = u + 65535;
                  n > h ? (l = n7(a, l, e.subarray(u, h))) : ((a[u] = r), (l = n7(a, l, e.subarray(u, n))));
                }
              else {
                for (
                  var c = ot[t - 1],
                    d = c >>> 13,
                    p = 8191 & c,
                    f = (1 << i) - 1,
                    g = new nN(32768),
                    v = new nN(f + 1),
                    _ = Math.ceil(i / 3),
                    m = 2 * _,
                    y = function (t) {
                      return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << m)) & f;
                    },
                    b = new nj(25e3),
                    w = new nN(288),
                    x = new nN(32),
                    k = 0,
                    E = 0,
                    $ = ((u = 0), 0),
                    S = 0,
                    I = 0;
                  n > u;
                  ++u
                ) {
                  var P = y(u),
                    C = 32767 & u,
                    O = v[P];
                  if (((g[C] = O), (v[P] = C), u >= S)) {
                    var F = n - u;
                    if ((k > 7e3 || $ > 24576) && F > 423) {
                      ((l = oe(e, a, 0, b, w, x, E, $, I, u - I, l)), ($ = k = E = 0), (I = u));
                      for (var T = 0; 286 > T; ++T) w[T] = 0;
                      for (T = 0; 30 > T; ++T) x[T] = 0;
                    }
                    var M = 2,
                      R = 0,
                      A = p,
                      L = (C - O) & 32767;
                    if (F > 2 && P == y(u - L))
                      for (
                        var D = Math.min(d, F) - 1, N = Math.min(32767, u), j = Math.min(258, F);
                        N >= L && --A && C != O;
                      ) {
                        if (e[u + M] == e[u + M - L]) {
                          for (var q = 0; j > q && e[u + q] == e[u + q - L]; ++q);
                          if (q > M) {
                            if (((M = q), (R = L), q > D)) break;
                            var B = Math.min(L, q - 2),
                              H = 0;
                            for (T = 0; B > T; ++T) {
                              var z = (u - L + T + 32768) & 32767,
                                V = (z - g[z] + 32768) & 32767;
                              V > H && ((H = V), (O = z));
                            }
                          }
                        }
                        L += ((C = O) - (O = g[C]) + 32768) & 32767;
                      }
                    if (R) {
                      b[$++] = 0x10000000 | (nU[M] << 18) | nW[R];
                      var U = 31 & nU[M],
                        W = 31 & nW[R];
                      ((E += nq[U] + nB[W]), ++w[257 + U], ++x[W], (S = u + M), ++k);
                    } else ((b[$++] = e[u]), ++w[e[u]]);
                  }
                }
                ((l = oe(e, a, r, b, w, x, E, $, I, u - I, l)), r || (l = n7(a, l, oi)));
              }
              return n2(o, 0, s + n1(l) + 8);
            })(
              t,
              null == i.level ? 6 : i.level,
              null == i.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + i.mem,
              o,
              !a,
            ))).length),
            (function (e, t) {
              var i = t.filename;
              if (
                ((e[0] = 31),
                (e[1] = 139),
                (e[2] = 8),
                (e[8] = 2 > t.level ? 4 : 2 * (9 == t.level)),
                (e[9] = 3),
                0 != t.mtime && or(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                i)
              ) {
                e[3] = 8;
                for (var s = 0; i.length >= s; ++s) e[s + 10] = i.charCodeAt(s);
              }
            })(l, i),
            or(l, u - 8, r.d()),
            or(l, u - 4, n),
            l);
          return {
            contentType: oa,
            body: e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
            estimatedSize: e.byteLength,
          };
        }
        if (d === n$) {
          let e,
            t =
              "data=" +
              encodeURIComponent(
                "string" ==
                  typeof (e = (h = r1(c))
                    ? btoa(
                        encodeURIComponent(h).replace(/%([0-9A-F]{2})/g, (e, t) =>
                          String.fromCharCode(parseInt(t, 16)),
                        ),
                      )
                    : h)
                  ? e
                  : r1(e),
              );
          return { contentType: "application/x-www-form-urlencoded", body: t, estimatedSize: new Blob([t]).size };
        }
        let p = r1(c);
        return { contentType: "application/json", body: p, estimatedSize: new Blob([p]).size };
      },
      op = (e) => {
        var t;
        let i,
          s = () =>
            "sendBeacon" === e.transport
              ? {
                  url: oc(e.url, { compression: n$ }),
                  encodedBody: od(tb(tb({}, e), {}, { compression: n$, ta: void 0 })),
                }
              : {
                  url: oh(e.url, "compression"),
                  encodedBody: od(tb(tb({}, e), {}, { compression: void 0, ta: void 0 })),
                };
        try {
          i = od(e);
        } catch (t) {
          if (t6(e.compression, r3(e.url, "compression")))
            return (ik.error("Failed to gzip request body, sending uncompressed payload", t), s());
          throw t;
        }
        return !(i && t6(e.compression, r3(e.url, "compression"))) ||
          ((t = i.body) instanceof ArrayBuffer
            ? t4(new Uint8Array(t))
            : ArrayBuffer.isView(t) && t4(new Uint8Array(t.buffer, t.byteOffset, t.byteLength)))
          ? { url: e.url, encodedBody: i }
          : ((ou = !0), s());
      },
      of = (e) => {
        try {
          return op(e);
        } catch (i) {
          var t;
          return (ik.error(i), void (null == (t = e.callback) || t.call(e, { statusCode: 0, error: i })));
        }
      },
      og =
        ((E = ea(function* (e) {
          let t = yield (function (e) {
            return ie.apply(this, arguments);
          })(r1(e.data), k.DEBUG, { rethrow: !0 });
          if (!t) return e;
          let i = yield t.arrayBuffer();
          return tb(tb({}, e), {}, { ta: { contentType: oa, body: i, estimatedSize: i.byteLength } });
        })),
        function (e) {
          return E.apply(this, arguments);
        }),
      ov = /Failed to fetch|NetworkError|Load failed/i,
      o_ = (e) => "TypeError" === (null == e ? void 0 : e.name) && ov.test((null == e ? void 0 : e.message) || ""),
      om = (e) => {
        try {
          let t = (function (e, t = Date.now()) {
            if ("string" != typeof e || !e) return;
            let i = e.trim(),
              s = /^\d+\s*,/.test(i) ? i.slice(0, i.indexOf(",")).trim() : i;
            if (/^\d+$/.test(s)) {
              let e = 1e3 * Math.min(Number(s), 300);
              return e > 0 ? e : void 0;
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(s)) return;
            let r = /^\w{3} \w{3} /.test(s) ? s + " GMT" : s,
              n = Date.parse(r) - t;
            return Number.isFinite(n) && n > 0 ? Math.min(n, 3e5) : void 0;
          })(e());
          return z(t) ? void 0 : Math.min(t, 3e4);
        } catch (e) {
          return;
        }
      },
      oy = (e) => {
        let t = of(e);
        if (!t) return;
        let i = new g();
        oo.set(i, !0);
        let { url: s, encodedBody: r } = t;
        i.open(e.method || "GET", s, !0);
        let { contentType: n, body: o } = null != r ? r : {};
        (sM(e.headers, function (e, t) {
          i.setRequestHeader(t, e);
        }),
          n && i.setRequestHeader("Content-Type", n),
          e.timeout && (i.timeout = e.timeout),
          (i.onreadystatechange = () => {
            if (4 === i.readyState) {
              var t;
              let s = { statusCode: i.status, text: i.responseText };
              if (200 === i.status)
                try {
                  s.json = JSON.parse(i.responseText);
                } catch (e) {}
              null == (t = e.callback) ||
                t.call(
                  e,
                  s,
                  om(() => i.getResponseHeader("Retry-After")),
                );
            }
          }),
          i.send(o));
      },
      ob = (e) => {
        let t = of(e);
        if (!t) return;
        let { url: i, encodedBody: s } = t,
          { contentType: r, body: n, estimatedSize: o } = null != s ? s : {},
          a = new Headers();
        (sM(e.headers, function (e, t) {
          a.append(t, e);
        }),
          r && a.append("Content-Type", r));
        let l = null,
          u = !1;
        if (v) {
          let t = new v();
          l = {
            signal: t.signal,
            timeout: setTimeout(() => {
              var i;
              u = !0;
              try {
                t.abort(td("AbortError", "PostHog request timed out" + ((i = e.timeout) ? ` after ${i}ms` : "")));
              } catch (e) {
                c(e);
              }
            }, e.timeout),
          };
        }
        let h = !1,
          c = (t) => {
            var i;
            h ||
              ((h = !0),
              (u && "AbortError" === (null == t ? void 0 : t.name)) || o_(t) ? ik.warn(t) : ik.error(t),
              null == (i = e.callback) || i.call(e, { statusCode: 0, error: t }));
          },
          d = 0,
          p = () => {
            ((ol -= d), (d = 0), l && clearTimeout(l.timeout));
          };
        try {
          let t = tb(
              {
                method: (null == e ? void 0 : e.method) || "GET",
                headers: a,
                referrerPolicy: "strict-origin",
                body: n,
                signal: null == l ? void 0 : l.signal,
              },
              e.fetchOptions,
            ),
            s = null != o ? o : z(n) ? 0 : void 0;
          ((t.keepalive =
            "POST" === t.method && !e.ea && !1 !== t.keepalive && t.body === n && !z(s) && s >= 0 && 52428.8 > ol + s),
            t.keepalive && ((d = s), (ol += d)),
            f(i, t)
              .then((t) =>
                t.text().then((i) => {
                  var s;
                  if (h) return;
                  let r = { statusCode: t.status, text: i };
                  if (200 === t.status)
                    try {
                      r.json = JSON.parse(i);
                    } catch (e) {
                      ik.error(e);
                    }
                  ((h = !0),
                    p(),
                    null == (s = e.callback) ||
                      s.call(
                        e,
                        r,
                        om(() => t.headers.get("Retry-After")),
                      ));
                }),
              )
              .catch((e) => {
                (p(), c(e));
              })
              .finally(p));
        } catch (e) {
          (p(), c(e));
        }
      },
      ow = (e) => {
        try {
          var t;
          let { url: i, encodedBody: s } = op(e),
            { contentType: r, body: n, estimatedSize: o } = null != s ? s : {};
          if (!n) return;
          let a = n instanceof Blob ? n : new Blob([n], { type: r });
          if (c.sendBeacon(i, a)) return;
          let l = j(e.data) ? e.data : null == (t = e.data) ? void 0 : t.batch;
          if (j(l) && l.length > 1 && (null != o ? o : 0) > 16384) {
            let t = Math.ceil(l.length / 2),
              i = (t) => (j(e.data) ? t : tb(tb({}, e.data), {}, { batch: t }));
            return (
              ow(tb(tb({}, e), {}, { data: i(l.slice(0, t)) })),
              void ow(tb(tb({}, e), {}, { data: i(l.slice(t)) }))
            );
          }
          (ik.warn(
            `Beacon of ~${null != o ? o : 0} bytes was rejected by the browser, falling back to ${f ? "fetch" : "XHR"}`,
          ),
            f ? ob(tb(tb({}, e), {}, { ea: !0 })) : oy(e));
        } catch (e) {
          ik.warn("Beacon send failed", e);
        }
      },
      ox = (e, t, i, s) => {
        let r = "query" === s ? ("POST" === t ? "sent_at" : "_") : void 0;
        return oc(
          i === nE ? oh(e, "compression") : e,
          tb(tb({}, r ? { [r]: Date.now().toString() } : {}), i === nE ? {} : { compression: i }),
        );
      },
      ok =
        ((o = []),
        f && o.push({ transport: "fetch", method: ob }),
        g && o.push({ transport: "XHR", method: oy }),
        (null == c ? void 0 : c.sendBeacon) && o.push({ transport: "sendBeacon", method: ow }),
        o),
      oE = !on && -1 === (null == m ? void 0 : m.indexOf("MSIE")) && -1 === (null == m ? void 0 : m.indexOf("Mozilla"));
    function o$(e, t, i) {
      var s, r, n;
      (i && (t = tb(tb({}, t), {}, { callback: (e) => i(e) })),
        e.__loaded
          ? oE
            ? e.__request_queue.push(t)
            : e.rateLimiter.isServerRateLimited(t.batchKey)
              ? t.fireCallbackOnDrop && (null == (r = t.callback) || r.call(t, { statusCode: 429 }))
              : ((t.transport = t.transport || e.config.api_transport),
                (t.headers = tb(tb({}, e.config.request_headers), t.headers)),
                (t.compression =
                  "best-available" === t.compression
                    ? null != (s = e.compression)
                      ? s
                      : t.compressionFallback
                    : t.compression),
                (z(e.config.disable_beacon) ? e.config.__preview_disable_beacon : e.config.disable_beacon) &&
                  (t.disableTransport = ["sendBeacon"]),
                (t.fetchOptions = t.fetchOptions || e.config.fetch_options),
                ((e, t) => {
                  var i, s, r, n, o, a;
                  let l,
                    u,
                    h = tb(
                      tb({}, e),
                      {},
                      {
                        callback:
                          null != t
                            ? t
                            : (t) => {
                                var i;
                                return null == (i = e.callback) ? void 0 : i.call(e, t);
                              },
                      },
                    );
                  h.timeout = h.timeout || 6e4;
                  let c = null != (i = h.transport) ? i : "fetch";
                  ("sendBeacon" === c && z(h.compression) && h.data && (h.compression = n$),
                    "POST" === h.method &&
                      h.data &&
                      ("capture-body" === h.timestampMode
                        ? ((u = (l = (j((n = h.data)) ? n : [n]).map((e) =>
                            tb(
                              tb({}, e),
                              e.timestamp instanceof Date && !isNaN(e.timestamp.getTime())
                                ? { timestamp: e.timestamp.toISOString() }
                                : {},
                            ),
                          ))[0]),
                          (h.data = {
                            api_key:
                              null != (o = null == u || null == (a = u.properties) ? void 0 : a.token)
                                ? o
                                : null == u
                                  ? void 0
                                  : u.token,
                            batch: l,
                            sent_at: new Date().toISOString(),
                          }))
                        : "body" === h.timestampMode &&
                          (h.data = ((e, t = new Date().toISOString()) =>
                            j(e) ? e.map((e) => tb(tb({}, e), {}, { sent_at: t })) : tb(tb({}, e), {}, { sent_at: t }))(
                            h.data,
                          ))),
                    (h.url = ox(h.url, h.method, h.compression, h.timestampMode)));
                  let d = ok.filter(
                      (e) => !h.disableTransport || !e.transport || !h.disableTransport.includes(e.transport),
                    ),
                    p =
                      null !=
                      (s =
                        null ==
                        (r = (function (e, t) {
                          for (let i = 0; e.length > i; i++) if (t(e[i])) return e[i];
                        })(d, (e) => e.transport === c))
                          ? void 0
                          : r.method)
                        ? s
                        : d[0].method;
                  if (!p) throw Error("No available transport method");
                  let f = (e) => {
                    try {
                      p(e);
                    } catch (e) {
                      var t;
                      (o_(e) ? ik.warn(e) : ik.error(e),
                        null == (t = h.callback) || t.call(h, { statusCode: 0, error: e }));
                    }
                  };
                  "sendBeacon" !== c &&
                  !h.preferSyncCompression &&
                  h.data &&
                  h.compression === nE &&
                  _ &&
                  "u" > typeof Promise &&
                  !ou
                    ? og(h)
                        .then((e) => {
                          f(e);
                        })
                        .catch((t) => {
                          t8(t)
                            ? ((ou = !0),
                              f(
                                tb(
                                  tb({}, h),
                                  {},
                                  { compression: void 0, url: ox(e.url, e.method, void 0, e.timestampMode) },
                                ),
                              ))
                            : (((e) => {
                                if (!e || "object" != typeof e) return !1;
                                let t = "name" in e ? String(e.name) : "";
                                return t8(e) || t === t5;
                              })(t) && (ou = !0),
                              f(h));
                        })
                    : f(h);
                })(t, (s, r) => {
                  var n, o, a;
                  (e.rateLimiter.checkForLimiting(s),
                    400 > s.statusCode || null == (n = (o = e.config).on_request_error) || n.call(o, s),
                    i ? i(s, r) : null == (a = t.callback) || a.call(t, s));
                }))
          : t.fireCallbackOnDrop && (null == (n = t.callback) || n.call(t, { statusCode: 0 })));
    }
    var oS = class {
      constructor(e, t) {
        ((this.ia = !0),
          (this.na = []),
          (this.sa = eh(
            (null == t ? void 0 : t.flush_interval_ms) || 3e3,
            250,
            5e3,
            ik.createLogger("flush interval"),
            3e3,
          )),
          (this.ra = e));
      }
      enqueue(e) {
        (this.na.push(e), this.oa || this.la());
      }
      unload() {
        this.aa();
        let e = Object.values(this.na.length > 0 ? this.ua() : {});
        [...e.filter((e) => 0 === e.url.indexOf("/e")), ...e.filter((e) => 0 !== e.url.indexOf("/e"))].map((e) => {
          this.ha(e, "sendBeacon");
        });
      }
      enable() {
        ((this.ia = !1), this.la());
      }
      la() {
        this.ia ||
          (this.oa = setTimeout(() => {
            if ((this.aa(), this.na.length > 0)) {
              let e = this.ua();
              for (let t in e) this.ha(e[t]);
            }
          }, this.sa));
      }
      ha(e, t) {
        try {
          this.ra(e, t);
        } catch (e) {
          ik.error(e);
        }
      }
      aa() {
        (clearTimeout(this.oa), (this.oa = void 0));
      }
      ua() {
        let e = {};
        return (
          sM(this.na, (t) => {
            var i;
            let s = ((t ? t.batchKey : null) || t.url) + (t.batchGroup ? `:${t.batchGroup}` : "");
            (z(e[s]) && (e[s] = tb(tb({}, t), {}, { data: [] })), null == (i = e[s].data) || i.push(t.data));
          }),
          (this.na = []),
          e
        );
      }
    };
    let oI = ["retriesPerformedSoFar"];
    var oP = class {
        constructor(e) {
          ((this._instance = e),
            (this.ca = !1),
            (this.da = 3e3),
            (this.na = []),
            (this.na = []),
            (this.va = !0),
            this.resume());
        }
        resume() {
          !z(u) &&
            "onLine" in u.navigator &&
            ((this.va = u.navigator.onLine),
            this.fa ||
              ((this.fa = () => {
                ((this.va = !0), this.pa());
              }),
              (this.ga = () => {
                this.va = !1;
              }),
              sq(u, "online", this.fa),
              sq(u, "offline", this.ga)));
        }
        get length() {
          return this.na.length;
        }
        retriableRequest(e, t) {
          let { retriesPerformedSoFar: i } = e,
            s = it(e, oI);
          (X(i) && (s.url = oc(s.url, { retry_count: i })),
            o$(this._instance, t ? tb(tb({}, s), {}, { transport: t }) : s, (e, t) => {
              var r;
              if (200 !== e.statusCode && (400 > e.statusCode || e.statusCode >= 500)) {
                if ((0 === e.statusCode ? 3 : 10) > (null != i ? i : 0))
                  return void this.Ls(tb({ retriesPerformedSoFar: i }, s), t);
                0 === e.statusCode &&
                  ik.warn(
                    `Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null != i ? i : 0} retries.`,
                  );
              }
              null == (r = s.callback) || r.call(s, e);
            }));
        }
        Ls(e, t) {
          let i,
            s,
            r,
            n = e.retriesPerformedSoFar || 0;
          e.retriesPerformedSoFar = n + 1;
          let o = Math.max(
              ((r = (Math.random() - 0.5) * ((s = Math.min(18e5, (i = 3e3 * Math.pow(2, n)))) - i / 2)),
              Math.ceil(s + r)),
              null != t ? t : 0,
            ),
            a = Date.now() + o;
          this.na.push({ retryAt: a, requestOptions: e });
          let l = `Enqueued failed request for retry in ${o}`;
          (navigator.onLine || (l += " (Browser is offline)"), ik.warn(l), this.ca || ((this.ca = !0), this.ma()));
        }
        ma() {
          (this.ya && clearTimeout(this.ya), 0 === this.na.length)
            ? ((this.ca = !1), (this.ya = void 0))
            : (this.ya = setTimeout(() => {
                (this.va && this.na.length > 0 && this.pa(), this.ma());
              }, this.da));
        }
        pa() {
          let e = Date.now(),
            t = [],
            i = this.na.filter((i) => e > i.retryAt || (t.push(i), !1));
          if (((this.na = t), i.length > 0)) for (let { requestOptions: e } of i) this.retriableRequest(e);
        }
        unload() {
          for (let { requestOptions: e } of (this.ya && (clearTimeout(this.ya), (this.ya = void 0)),
          (this.ca = !1),
          z(u) ||
            (this.fa && (u.removeEventListener("online", this.fa), (this.fa = void 0)),
            this.ga && (u.removeEventListener("offline", this.ga), (this.ga = void 0))),
          this.na))
            try {
              this._instance._send_request(tb(tb({}, e), {}, { transport: "sendBeacon" }));
            } catch (e) {
              ik.error(e);
            }
          this.na = [];
        }
      },
      oC = class {
        constructor(e) {
          ((this._instance = e),
            (this.ba = () => {
              var e, t, i, s;
              this._a || (this._a = {});
              let r = this.scrollElement(),
                n = this.scrollY(),
                o = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0,
                a = n + ((null == r ? void 0 : r.clientHeight) || 0),
                l = (null == r ? void 0 : r.scrollHeight) || 0;
              ((this._a.lastScrollY = Math.ceil(n)),
                (this._a.maxScrollY = Math.max(n, null != (e = this._a.maxScrollY) ? e : 0)),
                (this._a.maxScrollHeight = Math.max(o, null != (t = this._a.maxScrollHeight) ? t : 0)),
                (this._a.lastContentY = a),
                (this._a.maxContentY = Math.max(a, null != (i = this._a.maxContentY) ? i : 0)),
                (this._a.maxContentHeight = Math.max(l, null != (s = this._a.maxContentHeight) ? s : 0)));
            }));
        }
        get wa() {
          return this._instance.config.scroll_root_selector;
        }
        getContext() {
          return this._a;
        }
        resetContext() {
          let e = this._a;
          return ((this._a = void 0), setTimeout(this.ba, 0), e);
        }
        startMeasuringScrollPosition() {
          (sq(u, "scroll", this.ba, { capture: !0 }),
            sq(u, "scrollend", this.ba, { capture: !0 }),
            sq(u, "resize", this.ba));
        }
        scrollElement() {
          var e, t;
          if (this.wa) {
            for (let t of j(this.wa) ? this.wa : [this.wa]) {
              let i = null == u || null == (e = u.document) ? void 0 : e.querySelector(t);
              if (i) return i;
            }
            return;
          }
          return null == u || null == (t = u.document) ? void 0 : t.documentElement;
        }
        ka(e) {
          var t, i;
          if (this.wa) {
            let t = this.scrollElement();
            return (t && t["y" === e ? "scrollTop" : "scrollLeft"]) || 0;
          }
          return u
            ? "y" === e
              ? u.scrollY ||
                u.pageYOffset ||
                (null == (t = u.document) || null == (t = t.documentElement) ? void 0 : t.scrollTop) ||
                0
              : u.scrollX ||
                u.pageXOffset ||
                (null == (i = u.document) || null == (i = i.documentElement) ? void 0 : i.scrollLeft) ||
                0
            : 0;
        }
        scrollY() {
          return this.ka("y");
        }
        scrollX() {
          return this.ka("x");
        }
      };
    let oO = (e) =>
      nl(
        null == e ? void 0 : e.config.mask_personal_data_properties,
        null == e ? void 0 : e.config.custom_personal_data_properties,
        null == e ? void 0 : e.config.disable_capture_url_hashes,
      );
    var oF = class {
        constructor(e, t, i, s) {
          ((this.Be = (e) => {
            let t = this.Sa();
            if (t && t.sessionId === e) return;
            let i = { sessionId: e, props: this.xa(this._instance) };
            this.Ca.register({ [sc]: i });
          }),
            (this._instance = e),
            (this.$a = t),
            (this.Ca = i),
            (this.xa = s || oO),
            this.$a.onSessionId(this.Be));
        }
        Sa() {
          return this.Ca.props[sc];
        }
        getSetOnceProps() {
          var e;
          let t = null == (e = this.Sa()) ? void 0 : e.props;
          return t
            ? "r" in t
              ? nu(t, this._instance.config.disable_capture_url_hashes)
              : {
                  $referring_domain: t.referringDomain,
                  $pathname: t.initialPathName,
                  utm_source: t.utm_source,
                  utm_campaign: t.utm_campaign,
                  utm_medium: t.utm_medium,
                  utm_content: t.utm_content,
                  utm_term: t.utm_term,
                }
            : {};
        }
        getSessionProps() {
          let e = {};
          return (
            sM(sD(this.getSetOnceProps()), (t, i) => {
              ("$current_url" === i && (i = "url"), (e[`$session_entry_${R(i)}`] = t));
            }),
            e
          );
        }
      },
      oT = class {
        on(e, t) {
          return (
            this.Ta[e] || (this.Ta[e] = []),
            this.Ta[e].push(t),
            () => {
              this.Ta[e] = this.Ta[e].filter((e) => e !== t);
            }
          );
        }
        emit(e, t) {
          for (let i of this.Ta[e] || []) i(t);
          for (let i of this.Ta["*"] || []) i(e, t);
        }
        constructor() {
          this.Ta = {};
        }
      };
    let oM = iE("[SessionId]");
    var oR = class {
      on(e, t) {
        return this.Ia.on(e, t);
      }
      constructor(e, t, i) {
        var s;
        if (
          ((this.Ma = null),
          (this.Ea = null),
          (this.Pa = []),
          (this.Ra = void 0),
          (this.Aa = !1),
          (this.Ia = new oT()),
          (this.Fa = (e, t) => !(!X(e) || !X(t)) && Math.abs(e - t) > this.sessionTimeoutMs),
          !e.persistence)
        )
          throw Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === e.config.cookieless_mode)
          throw Error('SessionIdManager cannot be used with cookieless_mode="always"');
        ((this.Ir = e.config),
          (this.Ca = e.persistence),
          (this.He = void 0),
          (this.Xt = void 0),
          (this._sessionStartTimestamp = null),
          (this.Oa = void 0),
          (this._sessionActivityTimestamp = null),
          (this.Da = t || sG),
          (this.La = i || sG));
        const r = this.Ir.persistence_name || this.Ir.token;
        if (
          ((this._sessionTimeoutMs =
            1e3 *
            eh(
              this.Ir.session_idle_timeout_seconds || 1800,
              60,
              36e3,
              oM.createLogger("session_idle_timeout_seconds"),
              1800,
            )),
          e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }),
          this.Na(),
          (this.qa = "ph_" + r + "_window_id"),
          (this.ja = "ph_" + r + "_primary_window_exists"),
          this.Ba())
        ) {
          const e = rs.Dt(this.qa),
            t = rs.Dt(this.ja);
          (e && !t ? (this.He = e) : rs.Lt(this.qa), rs.At(this.ja, !0));
        }
        ((null == (s = this.Ir.bootstrap) ? void 0 : s.sessionID) &&
          this.setBootstrapSessionId(this.Ir.bootstrap.sessionID),
          this.Ha());
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs;
      }
      onSessionId(e) {
        return (
          z(this.Pa) && (this.Pa = []),
          this.Pa.push(e),
          this.Xt && e(this.Xt, this.He),
          () => {
            this.Pa = this.Pa.filter((t) => t !== e);
          }
        );
      }
      Ba() {
        return "memory" !== this.Ir.persistence && !this.Ca.mi && rs.Et();
      }
      za(e) {
        e !== this.He && ((this.He = e), this.Ba() && rs.At(this.qa, e));
      }
      Ua() {
        return this.He ? this.He : this.Ba() ? rs.Dt(this.qa) : null;
      }
      Wa(e) {
        let t = this.Ma;
        return !W(t) && !W(e) && 5e3 > Math.abs(e - t);
      }
      Va(e, t, i) {
        let s = t !== this._sessionActivityTimestamp,
          r = e === this.Xt && i === this._sessionStartTimestamp;
        ((this._sessionStartTimestamp = i),
          (this._sessionActivityTimestamp = t),
          (this.Xt = e),
          (r && !s) || (r && this.Wa(t)) || ((this.Ma = t), this.Ca.register({ [iJ]: [t, e, i] })));
      }
      Ga() {
        var e;
        let t = null == (e = this.Ir) ? void 0 : e.persistence_save_debounce_ms;
        return X(t) && t > 0;
      }
      Za() {
        this.Ga() ? this.Ca.refreshKey(iJ) : (this.Ca.flush(), this.Ca.load());
      }
      Qa() {
        var e;
        if (W(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this.Ma) return;
        this.Za();
        let [, t, i] = this.Ja();
        t === this.Xt &&
          i === this._sessionStartTimestamp &&
          ((this.Ma = this._sessionActivityTimestamp),
          this.Ca.register({
            [iJ]: [this._sessionActivityTimestamp, null != (e = this.Xt) ? e : null, this._sessionStartTimestamp],
          }),
          this.Ca.flush());
      }
      Ka() {
        let [e] = this.Ja();
        return Math.max(X(e) ? e : 0, X(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0);
      }
      Xa(e) {
        return (this.Za(), this.Fa(e, this.Ka()));
      }
      Ja() {
        let e = this.Ca.props[iJ];
        return (j(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]);
      }
      resetSessionId() {
        ((this.Ma = null), (this.Oa = void 0), clearTimeout(this.Ya), (this.Ya = void 0), this.Va(null, null, null));
      }
      setBootstrapSessionId(e, t = !1) {
        let i = ((e, t = new Date().getTime()) => {
          try {
            let i = ((e) => {
              let t = e.replace(/-/g, "");
              if (32 !== t.length) throw Error("Not a valid UUID");
              if ("7" !== t[12]) throw Error("Not a UUIDv7");
              return parseInt(t.substring(0, 12), 16);
            })(e);
            return i > t + 6e4 ? void oM.error("Bootstrap sessionID cannot be in the future") : i;
          } catch (e) {
            return void oM.error("Invalid sessionID in bootstrap", e);
          }
        })(e);
        return (
          !z(i) &&
          (t ? (this.Oa = { sessionId: e, sessionStartTimestamp: i }) : this.Va(e, new Date().getTime(), i), !0)
        );
      }
      destroy() {
        ((this.Aa = !0),
          this.Qa(),
          clearTimeout(this.Ya),
          (this.Ya = void 0),
          this.Ra && u && (u.removeEventListener(sI, this.Ra, { capture: !1 }), (this.Ra = void 0)),
          (this.Pa = []));
      }
      Ha() {
        ((this.Ra = () => {
          (this.Qa(), this.Ba() && rs.Lt(this.ja));
        }),
          sq(u, sI, this.Ra, { capture: !1 }));
      }
      checkAndGetSessionAndWindowId(e = !1, t = null, i = !1) {
        if ("always" === this.Ir.cookieless_mode)
          throw Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        let s = t || new Date().getTime(),
          r = this.Xt;
        if (i) this.Ea = s;
        else if (W(this.Ea) || this.Ea > s || s - this.Ea >= 1e3) {
          var n, o;
          (null == (n = (o = this.Ca).syncCookieProperties) || n.call(o), (this.Ea = s));
        }
        let [, a, l] = this.Ja(),
          u = !z(r) && a !== r,
          h = this.Ka(),
          c = this.Ua(),
          d = this.Oa,
          p = !!d && (d.sessionStartTimestamp > s + 6e4 || s - d.sessionStartTimestamp > 864e5),
          f = d ? p : X(l) && Math.abs(s - l) > 864e5,
          g = !1,
          v = u,
          _ = !a || !!d,
          m = a,
          y = !_ && !e && this.Fa(s, h);
        if (
          (y &&
            ((y = this.Xa(s)) || oM.info("cross-tab refresh kept the session alive", { sessionId: a }),
            ([, a, l] = this.Ja())),
          _ || y || f)
        ) {
          v = !1;
          let e = d && !p;
          ((a = e ? d.sessionId : this.Da()),
            (c = this.La()),
            oM.info("new session ID assigned", {
              sessionId: a,
              windowId: c,
              bootstrapped: !!e,
              changeReason: { noSessionId: _, activityTimeout: y, sessionPastMaximumLength: f },
            }),
            (l = e ? d.sessionStartTimestamp : s),
            (this.Oa = void 0),
            (g = !0));
        } else
          (c || ((c = this.La()), (g = !0)),
            (v = v || a !== m) && (oM.info("adopted cross-tab session id", { sessionId: a, windowId: c }), (g = !0)));
        let b = X(h) && e && !f ? h : s,
          w = X(l) ? l : new Date().getTime();
        (this.za(c), this.Va(a, b, w), e || this.Na());
        let x = { noSessionId: _, activityTimeout: y, sessionPastMaximumLength: f, crossTabAdoption: v };
        return (
          g && this.Pa.forEach((e) => e(a, c, x)),
          {
            sessionId: a,
            windowId: c,
            sessionStartTimestamp: w,
            changeReason: g ? x : void 0,
            lastActivityTimestamp: h,
          }
        );
      }
      Na() {
        this.Aa ||
          (clearTimeout(this.Ya),
          (this.Ya = setTimeout(() => {
            if (!this.Aa)
              if (this.Xa(new Date().getTime())) {
                let e = this.Xt;
                (this.resetSessionId(), this.Ia.emit("forcedIdleReset", { idleSessionId: e }));
              } else this.Na();
          }, 1.1 * this.sessionTimeoutMs)));
      }
    };
    let oA = function (e, t) {
      if (!e) return !1;
      let i = e.userAgent;
      if (i && eu(i, t)) return !0;
      try {
        let i = null == e ? void 0 : e.userAgentData;
        if ((null == i ? void 0 : i.brands) && i.brands.some((e) => eu(null == e ? void 0 : e.brand, t))) return !0;
      } catch (e) {}
      return !!e.webdriver;
    };
    function oL() {
      return (oL = ea(function* () {
        let e = null == c ? void 0 : c.userAgentData;
        if (null == e ? void 0 : e.getHighEntropyValues)
          try {
            let t = yield e.getHighEntropyValues(["model"]),
              i = null == t ? void 0 : t.model;
            return V(i) && i.length > 0 ? i : void 0;
          } catch (e) {
            return void ik.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", e);
          }
      })).apply(this, arguments);
    }
    function oD(e) {
      var t;
      return !!(null == (t = e.conditions) || null == (t = t.events) || null == (t = t.values) ? void 0 : t.length);
    }
    let oN = (e, t) => {
        if (
          !((e) => {
            try {
              new RegExp(e);
            } catch (e) {
              return !1;
            }
            return !0;
          })(t)
        )
          return !1;
        try {
          return new RegExp(t).test(e);
        } catch (e) {
          return !1;
        }
      },
      oj = (e) => e.toLowerCase(),
      oq = {
        exact: (e, t) => t.some((t) => e.some((e) => t === e)),
        is_not: (e, t) => t.every((t) => e.every((e) => t !== e)),
        regex: (e, t) => t.some((t) => e.some((e) => oN(t, e))),
        not_regex: (e, t) => t.every((t) => e.every((e) => !oN(t, e))),
        icontains: (e, t) => t.map(oj).some((t) => e.map(oj).some((e) => t.includes(e))),
        not_icontains: (e, t) => t.map(oj).every((t) => e.map(oj).every((e) => !t.includes(e))),
        gt: (e, t) =>
          t.some((t) => {
            let i = parseFloat(t);
            return !isNaN(i) && e.some((e) => i > parseFloat(e));
          }),
        lt: (e, t) =>
          t.some((t) => {
            let i = parseFloat(t);
            return !isNaN(i) && e.some((e) => i < parseFloat(e));
          }),
      };
    function oB(e, t) {
      return (
        !e ||
        Object.entries(e).every(([e, i]) => {
          let s = null == t ? void 0 : t[e];
          if (null == s) return !1;
          let r = oq[i.operator];
          return !!r && r(i.values, [String(s)]);
        })
      );
    }
    function oH(e, t, i) {
      return r1({ distinct_id: e, userPropertiesToSet: t, userPropertiesToSetOnce: i });
    }
    let oz = "custom",
      oV = "i.posthog.com",
      oU = /^\/static\//,
      oW = ["/s/", "/e/", "/i/"];
    var oG = class {
      constructor(e) {
        ((this.tu = {}), (this.instance = e));
      }
      get apiHost() {
        let e = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e;
      }
      get flagsApiHost() {
        let e = this.instance.config.flags_api_host;
        return e ? e.trim().replace(/\/$/, "") : this.apiHost;
      }
      get uiHost() {
        var e;
        let t = null == (e = this.instance.config.ui_host) ? void 0 : e.replace(/\/$/, "");
        return (
          t || (t = this.apiHost.replace(`.${oV}`, ".posthog.com")),
          "https://app.posthog.com" === t ? "https://us.posthog.com" : t
        );
      }
      get region() {
        return (
          this.tu[this.apiHost] ||
            (this.tu[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
              ? "us"
              : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
                ? "eu"
                : oz),
          this.tu[this.apiHost]
        );
      }
      eu(e) {
        if (!oU.test(e)) return;
        let t = this.instance.config.asset_host;
        return ("string" == typeof t && t.trim().replace(/\/$/, "")) || void 0;
      }
      iu(e) {
        let t = r2(e);
        return t ? t.protocol + "//" + t.host + t.pathname : void 0;
      }
      nu(e, t, i) {
        if ("ui" === e) return i;
        let s = i,
          r = this.instance.config.rewriteRequestPath;
        if (r) {
          var n;
          s = r(new URL((null == (n = r2(i)) ? void 0 : n.href) || i)).toString();
        }
        if (r && "api" === e && oW.some((e) => 0 === t.indexOf(e))) {
          let e = this.iu(s);
          if (e) {
            let t = this.apiHost,
              i = this.su;
            (((null == i ? void 0 : i.apiHost) === t && i.rewriteRequestPath === r) ||
              ((i = { apiHost: t, rewriteRequestPath: r, urls: new Set() }), (this.su = i)),
              i.urls.add(e));
          }
        }
        return s;
      }
      isIngestionEndpoint(e) {
        let t = this.su,
          i = this.iu(e);
        return (
          (null == t ? void 0 : t.apiHost) === this.apiHost &&
          t.rewriteRequestPath === this.instance.config.rewriteRequestPath &&
          !!i &&
          t.urls.has(i)
        );
      }
      endpointFor(e, t = "") {
        if ((t && (t = "/" === t[0] ? t : `/${t}`), "ui" === e)) return this.nu(e, t, this.uiHost + t);
        if ("flags" === e) return this.nu(e, t, this.flagsApiHost + t);
        if ("assets" === e) {
          let i = this.eu(t);
          if (i) return this.nu(e, t, `${i}${t}`);
        }
        if (this.region === oz) return this.nu(e, t, this.apiHost + t);
        let i = oV + t;
        switch (e) {
          case "assets":
            return this.nu(e, t, `https://${this.region}-assets.${i}`);
          case "api":
            return this.nu(e, t, `https://${this.region}.${i}`);
        }
      }
    };
    let oK = iE("[Surveys]"),
      oX = (e) => {
        try {
          let t = `seenSurvey_${e.current_iteration && e.current_iteration > 0 ? `${e.id}_${e.current_iteration}` : e.id}`;
          if (localStorage.getItem(t)) return;
          localStorage.setItem(t, "true");
        } catch (e) {
          oK.error("Failed to persist survey seen state", e);
        }
      },
      oJ = ["popover", "widget", "api"],
      oQ = { ignoreConditions: !1, ignoreDelay: !1, displayType: nF },
      oY = iE("[PostHog ExternalIntegrations]"),
      oZ = { intercom: "intercom-integration", crispChat: "crisp-chat-integration" };
    var o0 = class {
        constructor(e) {
          this._instance = e;
        }
        qo(e, t) {
          var i, s;
          null == (i = w.__PosthogExtensions__) ||
            null == (s = i.loadExternalDependency) ||
            s.call(i, this._instance, e, (e) => {
              if (e) return oY.error("failed to load script", e);
              t();
            });
        }
        startIfEnabledOrStop() {
          var e, t, i, s;
          for (let [r, n] of Object.entries(null != (e = this._instance.config.integrations) ? e : {}))
            (!n ||
              (null == (t = w.__PosthogExtensions__) || null == (t = t.integrations) ? void 0 : t[r]) ||
              this.qo(oZ[r], () => {
                var e;
                null == (e = w.__PosthogExtensions__) ||
                  null == (e = e.integrations) ||
                  null == (e = e[r]) ||
                  e.start(this._instance);
              }),
              !n &&
                (null == (i = w.__PosthogExtensions__) || null == (i = i.integrations) ? void 0 : i[r]) &&
                (null == (s = w.__PosthogExtensions__) ||
                  null == (s = s.integrations) ||
                  null == (s = s[r]) ||
                  s.stop()));
        }
      },
      o1 = class {
        constructor(e, t) {
          ((this.$ = e), (this.mo = t), (this.ru = new Map()), (this.xo = !1));
        }
        add(e) {
          var t = this;
          return ea(function* () {
            if (t.xo) throw Error("Cannot add an extension to a disposed ExtensionRuntime");
            if (t.ru.has(e.name)) throw Error(`Browser extension "${e.name}" is already registered`);
            t.ru.set(e.name, e);
            try {
              let i = e.setup(t.mo);
              i && (yield i);
            } catch (s) {
              let i = t.ru.get(e.name) === e;
              (i && t.ru.delete(e.name), t.$.error(`Failed to set up browser extension "${e.name}"`, s), i && t.ou(e));
            }
          })();
        }
        getExtension(e) {
          return this.ru.get(e);
        }
        dispose() {
          if (this.xo) return;
          this.xo = !0;
          let e = Array.from(this.ru.values()).reverse();
          for (let t of (this.ru.clear(), e)) this.ou(t);
        }
        ou(e) {
          try {
            var t;
            let i = null == (t = e.dispose) ? void 0 : t.call(e);
            i &&
              q(i.then) &&
              i.then(void 0, (t) => {
                this.$.error(`Failed to dispose browser extension "${e.name}"`, t);
              });
          } catch (t) {
            this.$.error(`Failed to dispose browser extension "${e.name}"`, t);
          }
        }
      },
      o2 = class {
        constructor(e) {
          this._instance = e;
        }
        initialize() {}
        get(e) {
          let t = this._instance.persistence;
          if ("string" == typeof e) return null == t ? void 0 : t.get_property(e);
          let i = {};
          for (let s of e) {
            let e = null == t ? void 0 : t.get_property(s);
            z(e) || (i[s] = e);
          }
          return i;
        }
        set(e, t) {
          var i;
          null == (i = this._instance.persistence) || i.register("string" == typeof e ? { [e]: t } : e);
        }
        remove(e) {
          var t;
          null == (t = this._instance.persistence) || t.unregister(e);
        }
      };
    let o3 = "extensionsRemoteConfig";
    var o5 = class {
      constructor(e) {
        ((this.instance = e),
          (this.xo = !1),
          (this.$ = ik),
          (this.lu = e.au),
          (this.kv = new o2(e)),
          (this.onEvent = (e) =>
            nT(
              this.instance.on("eventCaptured", (t) => {
                try {
                  e({ event: t.event, properties: t.properties });
                } catch (e) {
                  this.$.error("Browser extension event listener failed", e);
                }
              }),
            )),
          (this.onRemoteConfig = (e) => {
            if (this.xo) return nT(() => {});
            let t = (t) => {
                try {
                  e(t);
                } catch (e) {
                  this.$.error("Browser extension remote config listener failed", e);
                }
              },
              i = this.instance.uu.on(o3, t);
            return (this.lu && t(this.lu), nT(i));
          }),
          (this.hu = new o1(ik.createLogger("[BrowserExtensions]"), this)));
      }
      get logger() {
        return this.$;
      }
      get distinctId() {
        return this.instance.get_distinct_id();
      }
      get anonymousId() {
        var e;
        return null != (e = this.instance.get_property("$device_id")) ? e : this.distinctId;
      }
      get deviceId() {
        let e = this.instance.get_property(iF);
        return "string" == typeof e ? e : void 0;
      }
      get library() {
        return { name: k.LIB_NAME, version: k.LIB_VERSION };
      }
      get initialPersonProperties() {
        var e, t;
        return null != (e = null == (t = this.instance.persistence) ? void 0 : t.get_initial_props()) ? e : {};
      }
      get groups() {
        return this.instance.getGroups();
      }
      get session() {
        try {
          var e, t, i, s;
          let r = null == (e = this.instance.sessionManager) ? void 0 : e.checkAndGetSessionAndWindowId(!0);
          return {
            sessionId: null != (t = null == r ? void 0 : r.sessionId) ? t : "",
            windowId: null != (i = null == r ? void 0 : r.windowId) ? i : "",
            sessionStartTimestamp: null != (s = null == r ? void 0 : r.sessionStartTimestamp) ? s : 0,
          };
        } catch (e) {
          return { sessionId: "", windowId: "", sessionStartTimestamp: 0 };
        }
      }
      get canCapture() {
        return this.instance.is_capturing();
      }
      get projectToken() {
        return this.instance.config.token;
      }
      add(e) {
        return this.hu.add(e);
      }
      getExtension(e) {
        return this.hu.getExtension(e);
      }
      capture(e, t, i) {
        i
          ? this.instance.capture(e, t, { timestamp: i.timestamp, uuid: i.uuid, $set: i.set, $set_once: i.setOnce })
          : this.instance.capture(e, t);
      }
      registerDynamicEventProperties(e) {
        return nT(this.instance.cu(e));
      }
      handleRemoteConfig(e) {
        this.xo || ((this.lu = e), this.instance.uu.emit(o3, e));
      }
      sendRequest(e) {
        var t = this;
        return ea(function* (e, i = {}) {
          var s;
          let r = t.instance.requestRouter.endpointFor(null != (s = i.target) ? s : "api", e),
            n = {
              method: i.method,
              url: i.query ? oc(r, i.query) : r,
              data: i.body,
              headers: i.headers,
              timeout: i.timeoutMs,
              fireCallbackOnDrop: !0,
              transport: i.transport,
              compression: i.compression,
              compressionFallback: "flags" === i.target && "best-available" === i.compression ? C.Base64 : void 0,
              timestampMode: i.sentAt,
            };
          return "sendBeacon" === i.transport
            ? (t.instance._send_request(n), { statusCode: 202 })
            : new Promise((e) => {
                ((n.callback = e), t.instance._send_request(n));
              });
        }).apply(this, arguments);
      }
      dispose() {
        this.xo || ((this.xo = !0), this.hu.dispose());
      }
    };
    let o4 = {},
      o6 = 0,
      o8 = () => {},
      o9 = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      o7 = "Surveys module not available",
      ae = "sanitize_properties is deprecated. Use before_send instead",
      at = "Invalid value for property_denylist config: ",
      ai = /^[A-Za-z0-9_-]{1,400}$/,
      as = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      ar = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      an = ["token", "distinct_id", s_],
      ao = "posthog",
      aa = (e) => {
        var t;
        let i;
        return tb(
          {
            api_host: "https://us.i.posthog.com",
            flags_api_host: null,
            ui_host: null,
            asset_host: null,
            token: "",
            autocapture: !0,
            cross_subdomain_cookie: (function (e) {
              let t = null == e ? void 0 : e.hostname;
              if (!V(t)) return !1;
              let i = t.split(".").slice(-2).join(".");
              for (let e of sj) if (i === e) return !1;
              return !0;
            })(null == d ? void 0 : d.location),
            persistence: "localStorage+cookie",
            persistence_name: "",
            cookie_persisted_properties: [],
            loaded: o8,
            save_campaign_params: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageleave: "if_capture_pageview",
            defaults: null != e ? e : "unset",
            __preview_deferred_init_extensions: !1,
            __preview_external_dependency_versioned_paths: !1,
            __preview_cookie_wins_on_conflict: !1,
            debug: (p && V(null == p ? void 0 : p.search) && -1 !== p.search.indexOf("__posthog_debug=true")) || !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            disable_surveys_automatic_display: !1,
            disable_conversations: !1,
            disable_product_tours: !1,
            disableDeviceModel: !1,
            reuseAnonymousId: !1,
            disable_external_dependency_loading: !1,
            strict_script_versioning: "fallback",
            enable_recording_console_log: void 0,
            secure_cookie: "https:" === (null == u || null == (t = u.location) ? void 0 : t.protocol),
            ip: !1,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            consent_persistence_name: null,
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            request_batching: !0,
            properties_string_max_length: 65535,
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            mask_personal_data_properties: !1,
            custom_personal_data_properties: [],
            advanced_disable_flags: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_only_evaluate_survey_feature_flags: !1,
            advanced_feature_flags_dedup_per_session: !1,
            advanced_enable_surveys: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            surveys_request_timeout_ms: 1e4,
            on_request_error(e) {
              ik.error("Bad HTTP status: " + e.statusCode + " " + e.text);
            },
            get_device_id: (e) => e,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: s$,
            before_send: void 0,
            get_current_url: void 0,
            request_queue_config: { flush_interval_ms: 3e3 },
            error_tracking: {},
            _onCapture: o8,
          },
          {
            rageclick:
              e && e >= "2026-05-30"
                ? { content_ignorelist: rk, ignore_text_selection: !0 }
                : !e || "2025-11-30" > e || { content_ignorelist: !0 },
            capture_pageview: !e || "2025-05-24" > e || "history_change",
            session_recording:
              ((i = {}),
              e &&
                "unset" !== e &&
                ("2025-11-30" > e || (i.strictMinimumDuration = !0),
                "2026-05-30" > e || (i.canvasCapture = { resolutionScale: 0.6 }),
                "2026-06-25" > e || (i.streamNetworkBody = !0),
                "2026-08-30" > e || (i.captureJsonLd = !0)),
              i),
            external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
            internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
            persistence_save_debounce_ms: e && e >= "2026-05-30" ? 250 : 0,
            split_storage: !(!e || "2026-05-30" > e),
            detect_google_search_app: !(!e || "2026-05-30" > e),
            disable_capture_url_hashes: !(!e || "2026-06-25" > e),
            cookieWinsOnConflict: !(!e || "unset" === e || "2026-08-29" > e),
          },
        );
      },
      al = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"],
      ],
      au = (e) => {
        let t = {};
        for (let [i, s] of al) z(e[i]) || (t[s] = e[i]);
        let i = sR({}, t, e),
          s = e.__preview_external_dependency_versioned_paths;
        return (
          z(s) ||
            (z(e.strict_script_versioning) && (i.strict_script_versioning = !!s),
            V(s) && z(e.asset_host) && (i.asset_host = s)),
          j(e.property_blacklist) &&
            (z(e.property_denylist)
              ? (i.property_denylist = e.property_blacklist)
              : j(e.property_denylist)
                ? (i.property_denylist = [...e.property_blacklist, ...e.property_denylist])
                : ik.error(at + e.property_denylist)),
          i
        );
      };
    var ah = class {
        constructor() {
          this.__forceAllowLocalhost = !1;
        }
        get du() {
          return this.__forceAllowLocalhost;
        }
        set du(e) {
          (ik.error(
            "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`",
          ),
            (this.__forceAllowLocalhost = e));
        }
      },
      ac = class e {
        vu(e) {
          if (!e) return;
          let t = this.ru.indexOf(e);
          -1 !== t && this.ru.splice(t, 1);
        }
        fu(e, t) {
          var i;
          return (this.vu(e), this.ru.push(t), null == (i = t.initialize) || i.call(t), t);
        }
        pu() {
          return (
            "always" === this.config.cookieless_mode ||
            ("on_reject" === this.config.cookieless_mode && this.consent.isRejected())
          );
        }
        gu() {
          let e, t, i;
          if (this.mu || this.config.reuseAnonymousId || this.config.segment || this.pu()) return;
          let s = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          (s || this.config.disable_persistence) &&
            (this.yu ||
              (s
                ? ((e = `persistence is set to '${this.config.persistence}'`),
                  (t =
                    "memory" === this.config.persistence
                      ? "on every page load"
                      : "for every new browser tab or window"),
                  (i =
                    "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."))
                : ((e = "persistence is disabled (disable_persistence is true)"),
                  (t = "on every page load"),
                  (i =
                    "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.")),
              (this.mu = !0),
              console.warn(
                "[PostHog.js]",
                `${e} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${t}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${i}`,
              )));
        }
        bu() {
          if (this.pu() || "$posthog_cookieless" !== this.get_distinct_id()) return;
          let e = this.persistence;
          if (!e) return;
          this._u() || e.load(!0);
          let t = this.get_distinct_id();
          if (!t || "$posthog_cookieless" === t) {
            let t = this.config.get_device_id(sG());
            (this.register({ distinct_id: t, $device_id: t }), e.set_property(sh, sk));
          }
          this.wu();
        }
        get decideEndpointWasHit() {
          var e, t;
          return null != (e = null == (t = this.featureFlags) ? void 0 : t.hasLoadedFlags) && e;
        }
        get flagsEndpointWasHit() {
          var e, t;
          return null != (e = null == (t = this.featureFlags) ? void 0 : t.hasLoadedFlags) && e;
        }
        constructor() {
          var t;
          ((this.ku = !1),
            (this.Su = !1),
            (this.webPerformance = new ah()),
            (this.xu = !1),
            (this.version = k.LIB_VERSION),
            (this.Cu = new Set()),
            (this.$u = ""),
            (this.uu = new oT()),
            (this.ru = []),
            (this.Tu = []),
            (this.yu = !1),
            (this.mu = !1),
            (this._calculate_event_properties = this.calculateEventProperties.bind(this)),
            (this.config = aa()),
            (this.SentryIntegration = rX),
            (this.sentryIntegration = (e) => {
              let t;
              return ((t = rK(this, e)), { name: rG, processEvent: (e) => t(e) });
            }),
            (this.__request_queue = []),
            (this.__loaded = !1),
            (this.analyticsDefaultEndpoint = "/e/"),
            (this.Iu = !1),
            (this.Mu = null),
            (this.Eu = null),
            (this.Pu = null),
            (this.scrollManager = new oC(this)),
            (this.pageViewManager = new rJ(this)),
            (this.rateLimiter = new nR(this)),
            (this.requestRouter = new oG(this)),
            (this.consent = new rr(this)),
            (this.externalIntegrations = new o0(this)));
          const i = null != (t = e.__defaultExtensionClasses) ? t : {};
          ((this.featureFlags = i.featureFlags && new i.featureFlags(this)),
            (this.toolbar = i.toolbar && new i.toolbar(this)),
            (this.surveys = i.surveys && new i.surveys(this)),
            (this.conversations = i.conversations && new i.conversations(this)),
            (this.logs = i.logs && new i.logs(this)),
            (this.metrics = i.metrics && new i.metrics(this)),
            (this.experiments = i.experiments && new i.experiments(this)),
            (this.exceptions = i.exceptions && new i.exceptions(this)),
            (this.people = {
              set: (e, t, i) => {
                let s = V(e) ? { [e]: t } : e;
                (this.setPersonProperties(s), null == i || i({}));
              },
              set_once: (e, t, i) => {
                let s = V(e) ? { [e]: t } : e;
                (this.setPersonProperties(void 0, s), null == i || i({}));
              },
            }),
            this.on("eventCaptured", (e) => ik.info(`send "${null == e ? void 0 : e.event}"`, e)));
        }
        init(t, i, s) {
          if (s && s !== ao) {
            var r;
            let n = null != (r = o4[s]) ? r : new e();
            return (n._init(t, i, s), (o4[s] = n), (o4[ao][s] = n), n);
          }
          return this._init(t, i, s);
        }
        _init(e, t = {}, i) {
          var s, r, n, o;
          let a = V(e) ? e.trim() : "";
          if (!a)
            return (
              ik.critical(
                "PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()",
              ),
              this
            );
          if (this.__loaded)
            return (
              a !== (null == (o = this.config) ? void 0 : o.token)
                ? console.warn(
                    "[PostHog.js]",
                    `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${a}', { ... }, 'project2')`,
                  )
                : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"),
              this
            );
          ((this.__loaded = !0),
            (this.config = aa(t.defaults)),
            (t.debug = this.Ru(t.debug)),
            (this.Au = t),
            (this.Fu = []),
            t.person_profiles ? (this.Eu = t.person_profiles) : t.process_person && (this.Eu = t.process_person));
          let l = aa(t.defaults),
            h = au(t),
            c = sR({}, l, h, { name: i, token: a });
          (B(l.rageclick) && B(h.rageclick) && (c.rageclick = sR({}, l.rageclick, h.rageclick)),
            B(l.session_recording) &&
              B(h.session_recording) &&
              (c.session_recording = sR({}, l.session_recording, h.session_recording)),
            this.set_config(c),
            this.config.on_xhr_error && ik.error("on_xhr_error is deprecated. Use on_request_error instead"),
            (this.compression = t.disable_compression ? void 0 : nE));
          let d = this._u();
          if (
            ((this.persistence = new nk(this.config, d)),
            (this.sessionPersistence =
              "sessionStorage" === this.config.persistence || "memory" === this.config.persistence
                ? this.persistence
                : new nk(tb(tb({}, this.config), {}, { persistence: "sessionStorage" }), d, !1)),
            (this.$u = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties"),
            "memory" !== this.config.persistence && !d && rs.Et())
          ) {
            let e = rs.Dt(this.$u);
            j(e) &&
              e.forEach((e) => {
                V(e) && this.Cu.add(e);
              });
          } else rs.Lt(this.$u);
          let p = tb({}, this.persistence.props),
            f = tb({}, this.sessionPersistence.props);
          (this.register({ $initialization_time: new Date().toISOString() }),
            (this.Ou = new oS((e, t) => this.Du(e, t), this.config.request_queue_config)),
            (this.Lu = new oP(this)),
            (this.__request_queue = []));
          let g = this.pu();
          (g ||
            ((this.sessionManager = new oR(this)),
            (this.sessionPropsManager = new oF(this, this.sessionManager, this.persistence)),
            this.sessionManager.onSessionId((e, t, i) => {
              ((null == i ? void 0 : i.activityTimeout) ||
                (null == i ? void 0 : i.sessionPastMaximumLength) ||
                (null == i ? void 0 : i.crossTabAdoption)) &&
                this.Nu();
            })),
            this.qu(),
            this.config.__preview_deferred_init_extensions
              ? (ik.info("Deferring extension initialization to improve startup performance"),
                setTimeout(() => {
                  this.ju(g);
                }, 0))
              : (ik.info("Initializing extensions synchronously"), this.ju(g)),
            (k.DEBUG = k.DEBUG || this.config.debug),
            k.DEBUG &&
              ik.info("Starting in debug mode", { this: this, config: t, thisC: tb({}, this.config), p: p, s: f }),
            !this.config.identity_distinct_id ||
              (null == (s = t.bootstrap) ? void 0 : s.distinctID) ||
              (t.bootstrap = tb(
                tb({}, t.bootstrap),
                {},
                { distinctID: this.config.identity_distinct_id, isIdentifiedID: !0 },
              )));
          let v = null == (r = t.bootstrap) ? void 0 : r.distinctID;
          if (((this.yu = !!v && !U(v)), null == (n = t.bootstrap) ? void 0 : n.distinctID)) {
            let e = t.bootstrap.distinctID,
              i = this.get_distinct_id(),
              s = this.persistence.get_property(sh);
            if (t.bootstrap.isIdentifiedID && null != i && i !== e && "anonymous" === s) this.identify(e);
            else if (t.bootstrap.isIdentifiedID && null != i && i !== e && "identified" === s)
              ik.warn(
                "Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.",
              );
            else {
              let i = this.config.get_device_id(sG()),
                s = t.bootstrap.isIdentifiedID ? i : e;
              (this.persistence.set_property(sh, t.bootstrap.isIdentifiedID ? sE : sk),
                this.register({ distinct_id: e, $device_id: s }));
            }
          }
          if (g) this.register_once({ distinct_id: sv, $device_id: null }, "");
          else if (!this.get_distinct_id()) {
            let e = this.config.get_device_id(sG());
            (this.register_once({ distinct_id: e, $device_id: e }, ""), this.persistence.set_property(sh, sk));
          }
          return (
            sq(u, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }),
            sq(u, "pageshow", () => {
              var e;
              ((this.ku = !1), this.Su || null == (e = this.Lu) || e.resume());
            }),
            t.segment ? rW(this, () => this.Bu()) : this.Bu(),
            q(this.config._onCapture) &&
              this.config._onCapture !== o8 &&
              (ik.warn("onCapture is deprecated. Please use `before_send` instead"),
              this.on("eventCaptured", (e) => this.config._onCapture(e.event, e))),
            this.config.ip &&
              ik.warn(
                'The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.',
              ),
            this.config.disableDeviceModel ||
              (function () {
                return oL.apply(this, arguments);
              })()
                .then((e) => {
                  e && this.register({ [iT]: e });
                })
                .catch(o8),
            this
          );
        }
        Hu(e) {
          return V(e.name) && q(e.setup);
        }
        zu(e, t) {
          this.Hu(e)
            ? t.push(() => {
                this.Uu()
                  .add(e)
                  .catch(() => {
                    var t;
                    return null == (t = e.dispose) ? void 0 : t.call(e);
                  })
                  .catch((t) => {
                    ik.error(`Failed to dispose browser extension "${e.name}"`, t);
                  });
              })
            : this.ru.push(e);
        }
        qu() {
          var t, i, s, r, n, o;
          let a =
            null != (t = null == (i = this.config.__extensionClasses) ? void 0 : i.featureFlags)
              ? t
              : null == (s = e.__defaultExtensionClasses)
                ? void 0
                : s.featureFlags;
          a &&
            ((this.featureFlags && this.featureFlags instanceof a) ||
              (null == (r = this.Wu) || r.call(this), (this.Wu = void 0), (this.featureFlags = new a(this))),
            q(this.featureFlags.onReloading) && q(this.featureFlags.setup)
              ? this.Wu ||
                ((this.Wu = this.featureFlags.onReloading(() => {
                  this.uu.emit("featureFlagsReloading", !0);
                })),
                this.Uu().add(this.featureFlags))
              : null == (n = (o = this.featureFlags).initialize) || n.call(o));
        }
        ju(t) {
          var i, s, r, n, o, a, l;
          let u = performance.now(),
            h = tb(tb({}, e.__defaultExtensionClasses), this.config.__extensionClasses),
            c = [];
          (h.exceptions && this.ru.push((this.exceptions = null != (i = this.exceptions) ? i : new h.exceptions(this))),
            h.historyAutocapture && this.ru.push((this.historyAutocapture = new h.historyAutocapture(this))),
            h.tracingHeaders && this.ru.push((this.tracingHeaders = new h.tracingHeaders(this))),
            h.siteApps && this.ru.push((this.siteApps = new h.siteApps(this))),
            h.sessionRecording && !t && this.ru.push((this.sessionRecording = new h.sessionRecording(this))),
            this.config.disable_scroll_properties ||
              c.push(() => {
                this.scrollManager.startMeasuringScrollPosition();
              }),
            h.autocapture && this.zu((this.autocapture = new h.autocapture(this)), c),
            h.surveys && this.zu((this.surveys = null != (s = this.surveys) ? s : new h.surveys(this)), c),
            h.logs && this.zu((this.logs = null != (r = this.logs) ? r : new h.logs(this)), c),
            h.metrics && this.ru.push((this.metrics = null != (n = this.metrics) ? n : new h.metrics(this))),
            h.conversations &&
              this.ru.push((this.conversations = null != (o = this.conversations) ? o : new h.conversations(this))),
            h.productTours && this.ru.push((this.productTours = new h.productTours(this))),
            h.heatmaps && this.ru.push((this.heatmaps = new h.heatmaps(this))),
            h.webVitalsAutocapture && this.ru.push((this.webVitalsAutocapture = new h.webVitalsAutocapture(this))),
            h.exceptionObserver && this.ru.push((this.exceptionObserver = new h.exceptionObserver(this))),
            h.deadClicksAutocapture &&
              this.ru.push((this.deadClicksAutocapture = new h.deadClicksAutocapture(this, rz))),
            h.toolbar && this.ru.push((this.toolbar = null != (a = this.toolbar) ? a : new h.toolbar(this))),
            h.experiments &&
              this.ru.push((this.experiments = null != (l = this.experiments) ? l : new h.experiments(this))),
            this.ru.forEach((e) => {
              e.initialize &&
                c.push(() => {
                  var t;
                  null == (t = e.initialize) || t.call(e);
                });
            }),
            c.push(() => {
              if (this.Vu) {
                let e = this.Vu;
                ((this.Vu = void 0),
                  this.ru.forEach((t) => {
                    var i;
                    return null == (i = t.onRemoteConfig) ? void 0 : i.call(t, e);
                  }));
              }
            }),
            this.Gu(c, u));
        }
        Gu(e, t) {
          for (; e.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0)
              return void setTimeout(() => {
                this.Gu(e, t);
              }, 0);
            let i = e.shift();
            if (i)
              try {
                i();
              } catch (e) {
                ik.error("Error initializing extension:", e);
              }
          }
          let i = Math.round(performance.now() - t);
          (this.register_for_session({
            [sm]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [sy]: i,
          }),
            this.config.__preview_deferred_init_extensions && ik.info(`PostHog extensions initialized (${i}ms)`));
        }
        Xl(e) {
          var t, i;
          if (!d || !d.body)
            return (
              ik.info("document not ready yet, trying again in 500 milliseconds..."),
              void setTimeout(() => {
                this.Xl(e);
              }, 500)
            );
          if (
            (this.config.__preview_deferred_init_extensions && (this.Vu = e),
            (this.au = e),
            (this.compression = void 0),
            e.ok)
          ) {
            let t = e.config;
            (t.supportedCompression &&
              !this.config.disable_compression &&
              (this.compression = T(t.supportedCompression, nE) ? nE : T(t.supportedCompression, n$) ? n$ : void 0),
              (null == (i = t.analytics) ? void 0 : i.endpoint) &&
                (this.analyticsDefaultEndpoint = t.analytics.endpoint));
          }
          (this.set_config({ person_profiles: this.Eu ? this.Eu : s$ }),
            null == (t = this.Zu) || t.handleRemoteConfig(e),
            this.ru.forEach((t) => {
              var i;
              return null == (i = t.onRemoteConfig) ? void 0 : i.call(t, e);
            }));
        }
        Bu() {
          try {
            this.config.loaded(this);
          } catch (e) {
            ik.critical("`loaded` function failed", e);
          }
          if ((this.Qu(), this.config.internal_or_test_user_hostname && (null == p ? void 0 : p.hostname))) {
            let e = p.hostname,
              t = this.config.internal_or_test_user_hostname;
            ("string" == typeof t ? e === t : t.test(e)) && this.setInternalOrTestUser();
          }
          (this.config.capture_pageview &&
            setTimeout(() => {
              (this.consent.isOptedIn() || this.pu()) && this.Ju();
            }, 1),
            (this.Ku = new nL(this)),
            this.Ku.load());
        }
        Qu() {
          var e;
          this.is_capturing() && this.config.request_batching && (null == (e = this.Ou) || e.enable());
        }
        _dom_loaded() {
          (this.is_capturing() && sT(this.__request_queue, (e) => this.Du(e)), (this.__request_queue = []), this.Qu());
        }
        _handle_unload() {
          var e, t, i, s, r, n;
          ((this.ku = !0),
            null == (e = this.surveys) || null == (t = e.handlePageUnload) || t.call(e),
            null == (i = this.metrics) || i.flush("sendBeacon"),
            this.config.request_batching
              ? (this.Xu() && this.capture(sC),
                null == (s = this.logs) || s.flushLogs("sendBeacon"),
                null == (r = this.Ou) || r.unload(),
                null == (n = this.Lu) || n.unload())
              : this.Xu() && this.capture(sC, null, { transport: "sendBeacon" }));
        }
        _send_request(e) {
          o$(this, e);
        }
        Du(e, t) {
          this.Lu ? this.Lu.retriableRequest(e, t) : this._send_request(t ? tb(tb({}, e), {}, { transport: t }) : e);
        }
        _execute_array(e) {
          o6++;
          try {
            let t,
              i = [],
              s = [],
              r = [];
            sT(e, (e) => {
              if (e)
                if (((t = e[0]), j(t))) r.push(e);
                else if (q(e))
                  try {
                    e.call(this);
                  } catch (t) {
                    ik.error("Error executing queued PostHog call", e, t);
                  }
                else
                  j(e) && "alias" === t
                    ? i.push(e)
                    : j(e) && -1 !== t.indexOf("capture") && q(this[t])
                      ? r.push(e)
                      : s.push(e);
            });
            let n = function (e, t) {
              sT(e, function (e) {
                try {
                  if (j(e[0])) {
                    let i = t;
                    sM(e, function (e) {
                      i = i[e[0]].apply(i, e.slice(1));
                    });
                  } else t[e[0]].apply(t, e.slice(1));
                } catch (t) {
                  ik.error("Error executing queued PostHog call", e, t);
                }
              });
            };
            (n(i, this), n(s, this), n(r, this));
          } finally {
            o6--;
          }
        }
        push(t) {
          if (o6 > 0 && j(t) && V(t[0])) {
            let i = e.prototype[t[0]];
            return void (q(i) && i.apply(this, t.slice(1)));
          }
          this._execute_array([t]);
        }
        get Yu() {
          return {
            property: iR,
            persistenceKey: iA,
            cookieName: "_fbc",
            pattern: as,
            register: (e, t) => {
              var i;
              return null == (i = this.persistence) ? void 0 : i.register({ [iA]: { value: e, delivered: t } });
            },
            unregister: () => {
              var e;
              return null == (e = this.persistence) ? void 0 : e.unregister(iA);
            },
          };
        }
        get th() {
          return {
            property: iL,
            persistenceKey: iD,
            cookieName: "_fbp",
            pattern: ar,
            register: (e, t) => {
              var i;
              return null == (i = this.persistence) ? void 0 : i.register({ [iD]: { value: e, delivered: t } });
            },
            unregister: () => {
              var e;
              return null == (e = this.persistence) ? void 0 : e.unregister(iD);
            },
          };
        }
        eh(e) {
          var t;
          let i = null == (t = this.persistence) ? void 0 : t.get_property(e.persistenceKey);
          return V(i) && e.pattern.test(i)
            ? { value: i, delivered: !1 }
            : B(i) && V(i.value) && e.pattern.test(i.value)
              ? { value: i.value, delivered: !0 === i.delivered }
              : void 0;
        }
        ih(e, t, i) {
          return t === (null == i ? void 0 : i.value)
            ? { value: t, pending: !i.delivered }
            : (e.register(t, !1), { value: t, pending: !0 });
        }
        nh(e) {
          if (!this.config.save_campaign_params || this.pu()) return;
          let t = sH(e.cookieName);
          return V(t) && e.pattern.test(t) ? t : void 0;
        }
        sh(e, t, i, s) {
          if (!this.persistence) return;
          let r = this.Yu;
          this.persistence.refreshKey(r.persistenceKey);
          let n = this.eh(r);
          if (s) return void r.unregister();
          if (i) return V(t) && as.test(t) ? this.ih(r, t, n) : void r.unregister();
          let o = V(e) && ai.test(e) ? e : void 0,
            a = this.nh(r);
          return a &&
            ((e, t, i) => {
              let s = e.split(".");
              if (t) return s[3] === t;
              if (!i) return !0;
              let r = i.value.split(".");
              return s[3] === r[3] || Number(s[2]) > Number(r[2]);
            })(a, o, n)
            ? this.ih(r, a, n)
            : o
              ? (null == n ? void 0 : n.value.split(".")[3]) === o
                ? { value: n.value, pending: !n.delivered }
                : this.ih(r, `fb.1.${Date.now()}.${o}`, n)
              : n
                ? { value: n.value, pending: !n.delivered }
                : void 0;
        }
        rh(e, t, i) {
          if (!this.persistence) return;
          let s = this.th;
          this.persistence.refreshKey(s.persistenceKey);
          let r = this.eh(s);
          if (i) return void s.unregister();
          if (t) return V(e) && ar.test(e) ? this.ih(s, e, r) : void s.unregister();
          let n = this.nh(s);
          return n ? this.ih(s, n, r) : r ? { value: r.value, pending: !r.delivered } : void 0;
        }
        oh(e, t) {
          if (!this.persistence) return;
          this.persistence.refreshKey(e.persistenceKey);
          let i = this.eh(e);
          (null == i ? void 0 : i.value) !== t || i.delivered || e.register(t, !0);
        }
        capture(e, t, i) {
          var s, r, n, o, a, l, u, h;
          let c, d;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this.Ou))
            return void ik.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (z(e) || !V(e)) return void ik.error("No event name provided to posthog.capture");
          this.bu();
          let p = !this.config.opt_out_useragent_filter && this._is_bot();
          if (p && !this.config.__preview_capture_bot_pageviews) return;
          let f = (null == i ? void 0 : i.skip_client_rate_limiting)
            ? void 0
            : this.rateLimiter.clientRateLimitContext();
          if (null == f ? void 0 : f.isRateLimited)
            return void ik.critical("This capture call is ignored due to client rate limiting.");
          ((null == t ? void 0 : t.$current_url) &&
            !V(null == t ? void 0 : t.$current_url) &&
            (ik.error(
              "Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value.",
            ),
            null == t || delete t.$current_url),
            "$exception" !== e ||
              (null == i ? void 0 : i.ah) ||
              ik.warn(
                "Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically.",
              ),
            this.sessionPersistence.update_search_keyword(),
            this.config.save_campaign_params && (c = this.sessionPersistence.update_campaign_params()),
            this.config.save_referrer && this.sessionPersistence.update_referrer_info(),
            (this.config.save_campaign_params || this.config.save_referrer) &&
              this.persistence.set_initial_person_info());
          let g = new Date(),
            v = (null == i ? void 0 : i.timestamp) || g,
            _ = tc(null == i ? void 0 : i.uuid, sG),
            m = { uuid: _, event: e, properties: this.calculateEventProperties(e, t || {}, v, _) };
          ("$pageview" === e &&
            this.config.__preview_capture_bot_pageviews &&
            p &&
            ((m.event = "$bot_pageview"), (m.properties.$browser_type = "bot")),
            f && (m.properties.$lib_rate_limit_remaining_tokens = f.remainingTokens));
          let y =
            "$feature_flag_called" === e &&
            !1 === m.properties.$feature_flag_has_experiment &&
            !0 === this.get_property("$minimal_flag_called_events");
          (null == i ? void 0 : i.$set) && !y && (m.$set = null == i ? void 0 : i.$set);
          let b = B(null == t ? void 0 : t.$set) ? t.$set : void 0,
            w = j(null == t ? void 0 : t.$unset) ? t.$unset : [],
            x = (null == i ? void 0 : i.$unset) || [],
            k = (e) => {
              var t;
              let s = !!(null == i ? void 0 : i.$set) && e in i.$set;
              return {
                hasProvided: s || (!!b && e in b),
                provided: s ? (null == i || null == (t = i.$set) ? void 0 : t[e]) : null == b ? void 0 : b[e],
                unset: -1 !== w.indexOf(e) || -1 !== x.indexOf(e),
              };
            },
            E = k(iR),
            $ = k(iL),
            S = [
              {
                channel: this.Yu,
                hasProvided: E.hasProvided,
                update: this.sh(null == c ? void 0 : c.fbclid, E.provided, E.hasProvided, E.unset),
              },
              { channel: this.th, hasProvided: $.hasProvided, update: this.rh($.provided, $.hasProvided, $.unset) },
            ];
          for (let { channel: e, hasProvided: t, update: i } of S)
            i &&
              !0 === m.properties.$process_person_profile &&
              i.pending &&
              !t &&
              !y &&
              (m.$set = tb({ [e.property]: i.value }, m.$set));
          let I = null == i ? void 0 : i.$unset;
          I && (m.$unset = I);
          let P = y ? void 0 : this.uh(null == i ? void 0 : i.$set_once, e !== sF, e === sO);
          if (
            (P && (m.$set_once = P),
            (null == i ? void 0 : i._noTruncate) ||
              ((n = this.config.properties_string_max_length),
              (a = m),
              (l = (e) => (V(e) ? e.slice(0, n) : e)),
              (d = new Set()),
              (m = (function e(t, i) {
                let s;
                if (t !== Object(t)) return l(t);
                if (!d.has(t)) {
                  if ((d.add(t), j(t)))
                    ((s = []),
                      sT(t, (t) => {
                        s.push(e(t));
                      }));
                  else {
                    let i = {};
                    (sM(et(t) ? sN(t) : t, (t, s) => {
                      d.has(t) || (i[s] = e(t, s));
                    }),
                      (s = i));
                  }
                  return s;
                }
              })(a))),
            (m.timestamp = v),
            z(null == i ? void 0 : i.timestamp) ||
              ((m.properties.$event_time_override_provided = !0), (m.properties.$event_time_override_system_time = g)),
            y &&
              (m.properties = ((e, t = []) => {
                let i = {},
                  s = (t) => {
                    void 0 !== e[t] && (i[t] = e[t]);
                  };
                return (t3.forEach(s), t.forEach(s), i);
              })(m.properties, an)),
            e === nC || e === nO)
          ) {
            let i,
              s = null == t ? void 0 : t.$survey_id,
              r = null == t ? void 0 : t.$survey_iteration;
            (oX({ id: s, current_iteration: r }),
              (m.$set = tb(
                tb({}, m.$set),
                {},
                {
                  [((u = { id: s, current_iteration: r }),
                  (h = e === nO ? "responded" : "dismissed"),
                  (i = `$survey_${h}/${u.id}`),
                  u.current_iteration && u.current_iteration > 0 && (i = `$survey_${h}/${u.id}/${u.current_iteration}`),
                  i)]: !0,
                },
              )));
          } else e === nP && (m.$set = tb(tb({}, m.$set), {}, { $survey_last_seen_date: new Date().toISOString() }));
          if ("product tour shown" === e) {
            let e = null == t ? void 0 : t.$product_tour_type;
            e && (m.$set = tb(tb({}, m.$set), {}, { [`$product_tour_last_seen_date/${e}`]: new Date().toISOString() }));
          }
          let C = tb(tb({}, m.properties.$set), m.$set);
          if ((H(C) || this.setPersonPropertiesForFlags(C), !G(this.config.before_send))) {
            let e = this.Os(m);
            if (!e) return;
            (m = e).uuid = tc(m.uuid, sG);
          }
          let O = S.filter(({ channel: e, update: t }) => {
            var i, s, r;
            let n =
              null != (i = null == (s = m.$set) ? void 0 : s[e.property])
                ? i
                : B(null == (r = m.properties) ? void 0 : r.$set)
                  ? m.properties.$set[e.property]
                  : void 0;
            return (null == t ? void 0 : t.pending) && n === t.value;
          });
          this.uu.emit("eventCaptured", m);
          let F =
              null != (s = null == i ? void 0 : i._url)
                ? s
                : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            T = "recordings" === (null == i ? void 0 : i._batchKey) || /\/s\/(?:\?|$)/.test(F),
            M = tb(
              tb(
                tb(
                  {
                    method: "POST",
                    url: F,
                    data: m,
                    compression: "best-available",
                    preferSyncCompression: null == i ? void 0 : i.send_instantly,
                    timestampMode: T ? "body" : "capture-body",
                    batchKey: null == i ? void 0 : i._batchKey,
                  },
                  T && (null == (r = m.properties) ? void 0 : r.$session_id)
                    ? {
                        batchGroup:
                          m.properties.$session_id + (m.properties.$window_id ? `-${m.properties.$window_id}` : ""),
                      }
                    : {},
                ),
                (null == i ? void 0 : i.transport) ? { transport: i.transport } : {},
              ),
              O.length
                ? {
                    fireCallbackOnDrop: !0,
                    callback: (e) => {
                      if (e.statusCode >= 200 && 300 > e.statusCode)
                        for (let { channel: e, update: t } of O) this.oh(e, t.value);
                    },
                  }
                : {},
            );
          if (
            !this.config.request_batching ||
            (i && !(null == i ? void 0 : i._batchKey)) ||
            (null == i ? void 0 : i.send_instantly) ||
            O.length
          ) {
            let e;
            (!M.transport &&
              !M.callback &&
              H(null != (o = this.config.request_headers) ? o : {}) &&
              this.ku &&
              (e = "sendBeacon"),
              this.Du(M, e));
          } else this.Ou.enqueue(M);
          return m;
        }
        _addCaptureHook(e) {
          return this.on("eventCaptured", (t) => e(t.event, t));
        }
        getExtension(e) {
          var t;
          return null == (t = this.Zu) ? void 0 : t.getExtension(e);
        }
        Uu() {
          var e;
          return null != (e = this.Zu) ? e : (this.Zu = new o5(this));
        }
        cu(e) {
          this.Tu.push(e);
          let t = !0;
          return () => {
            if (!t) return;
            t = !1;
            let i = this.Tu.indexOf(e);
            -1 !== i && this.Tu.splice(i, 1);
          };
        }
        hh(e = !0) {
          var t, i, s;
          return (
            !!(null == (t = this.persistence) ? void 0 : t.consumeCookieIdentityChange()) &&
            ((this.Pu = null),
            "anonymous" === this.persistence.get_property("$user_state") &&
              (null == (s = this.sessionPersistence) || s.clear(), this.Cu.clear(), this.dh()),
            null == (i = this.featureFlags) || i.reset(),
            e && this.reloadFeatureFlags(),
            !0)
          );
        }
        calculateEventProperties(e, t, i, s, r) {
          let n;
          if (((i = i || new Date()), !this.persistence || !this.sessionPersistence)) return t;
          (this.persistence.syncCookieProperties(), this.hh());
          let o = r ? void 0 : this.persistence.remove_event_timer(e),
            a = tb({}, t);
          if (
            ((a.token = this.config.token),
            (a.$config_defaults = this.config.defaults),
            this.pu() && (a[s_] = !0),
            "$snapshot" === e)
          ) {
            let e = tb(tb({}, this.persistence.properties()), this.sessionPersistence.properties());
            return (
              (a.distinct_id = e.distinct_id),
              ((!V(a.distinct_id) && !K(a.distinct_id)) || U(a.distinct_id)) &&
                ik.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),
              a
            );
          }
          let l = (function (e, t, i, s = !1) {
            var r, n, o, a;
            let l, h;
            if (!m) return {};
            let c = e ? [...r9, ...(t || [])] : [],
              [d, f] = te(m),
              [g, v] = (function (e) {
                for (let t = 0; tr.length > t; t++) {
                  let [i, s, r] = tr[t],
                    n = e.match(i);
                  if (n) {
                    let t = (r && e.match(r)) || n;
                    return [s, (null == t ? void 0 : t[1]) || ""];
                  }
                }
                return ["", ""];
              })(m),
              _ = (null == (l = "u" > typeof navigator ? navigator : void 0) ? void 0 : l.brave) ? { brave: !0 } : {},
              y = {};
            z(i) || (y.detectGoogleSearchApp = i);
            let b = {},
              w = null == (r = navigator) || null == (r = r.userAgentData) ? void 0 : r.platform,
              x = null == (n = navigator) ? void 0 : n.maxTouchPoints,
              E = null == u || null == (o = u.screen) ? void 0 : o.width,
              $ = null == u || null == (a = u.screen) ? void 0 : a.height,
              S = null == u ? void 0 : u.devicePixelRatio;
            (z(w) || (b.userAgentDataPlatform = w),
              z(x) || (b.maxTouchPoints = x),
              z(E) || (b.screenWidth = E),
              z($) || (b.screenHeight = $),
              z(S) || (b.devicePixelRatio = S));
            let I = sR(
              sD({
                $os: d,
                $os_version: f,
                $browser: e6(m, navigator.vendor, _, y),
                $webview_app: g,
                $webview_app_version: v,
                $device: tt(m),
                $device_type: ti(m, b),
                $timezone: nh(),
                $timezone_offset: (function () {
                  try {
                    return new Date().getTimezoneOffset();
                  } catch (e) {
                    return;
                  }
                })(),
              }),
              {
                $current_url: r5(s ? tp(null == p ? void 0 : p.href) : null == p ? void 0 : p.href, c, ne),
                $host: null == p ? void 0 : p.host,
                $pathname: null == p ? void 0 : p.pathname,
                $raw_user_agent: m.length > 1e3 ? m.substring(0, 997) + "..." : m,
                $browser_version: e9(m, navigator.vendor, _, y),
                $browser_language: nn(),
                $browser_language_prefix: "string" == typeof (h = nn()) ? h.split("-")[0] : void 0,
                $screen_height: null == u ? void 0 : u.screen.height,
                $screen_width: null == u ? void 0 : u.screen.width,
                $viewport_height: null == u ? void 0 : u.innerHeight,
                $viewport_width: null == u ? void 0 : u.innerWidth,
                $lib: k.LIB_NAME,
                $lib_version: k.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3,
              },
            );
            return (k.SDK_DIST_CHANNEL && (I.$sdk_dist_channel = k.SDK_DIST_CHANNEL), I);
          })(
            this.config.mask_personal_data_properties,
            this.config.custom_personal_data_properties,
            this.config.detect_google_search_app,
            this.config.disable_capture_url_hashes,
          );
          if (this.sessionManager) {
            let { sessionId: e, windowId: t } = this.sessionManager.checkAndGetSessionAndWindowId(r, i.getTime(), !0);
            ((a.$session_id = e), (a.$window_id = t));
          }
          this.sessionPropsManager && sR(a, this.sessionPropsManager.getSessionProps());
          try {
            var h;
            (this.sessionRecording && sR(a, this.sessionRecording.sdkDebugProperties),
              (a.$sdk_debug_retry_queue_size = null == (h = this.Lu) ? void 0 : h.length));
          } catch (e) {
            a.$sdk_debug_error_capturing_properties = String(e);
          }
          if (
            (this.requestRouter.region === oz && (a.$lib_custom_api_host = this.config.api_host),
            (n =
              "$pageview" !== e || r
                ? "$pageleave" !== e || r
                  ? this.pageViewManager.doEvent()
                  : this.pageViewManager.doPageLeave(i)
                : this.pageViewManager.doPageView(i, s)),
            (a = sR(a, n)),
            "$pageview" === e && d && (a.title = d.title),
            !z(o))
          ) {
            let e = i.getTime() - o;
            a.$duration = parseFloat((e / 1e3).toFixed(3));
          }
          m && this.config.opt_out_useragent_filter && (a.$browser_type = this._is_bot() ? "bot" : "browser");
          let c = this.persistence.properties(),
            f = this.sessionPersistence.properties(),
            g = a.$groups,
            v = c.$groups;
          (B(g) && !H(g) && (a.$groups = tb(tb({}, B(v) ? v : {}), g)),
            sM(["$referrer", "$referring_domain"], (e) => {
              e in c && delete f[e];
            }));
          let _ = {};
          if (this.Tu.length > 0)
            for (let e of this.Tu.slice())
              try {
                sR(_, e());
              } catch (e) {
                ik.error("Failed to produce browser extension event properties", e);
              }
          (((a = sR({}, l, c, f, tb(tb({}, _), a))).$is_identified = this._isIdentified()),
            j(this.config.property_denylist)
              ? sM(this.config.property_denylist, function (e) {
                  delete a[e];
                })
              : ik.error(
                  at +
                    this.config.property_denylist +
                    " or property_blacklist config: " +
                    this.config.property_blacklist,
                ));
          let y = this.config.sanitize_properties;
          y && (ik.error(ae), (a = y(a, e)));
          let b = this.fh();
          return ((a.$process_person_profile = b), b && !r && this.ph("_calculate_event_properties"), a);
        }
        uh(e, t = !0, i = !1) {
          var s;
          if (!this.persistence || !this.fh() || (this.xu && !i)) return e;
          let r = sR(
              {},
              this.persistence.get_initial_props(),
              (null == (s = this.sessionPropsManager) ? void 0 : s.getSetOnceProps()) || {},
              e || {},
            ),
            n = this.config.sanitize_properties;
          return (n && (ik.error(ae), (r = n(r, "$set_once"))), t && (this.xu = !0), H(r) ? void 0 : r);
        }
        register(e, t) {
          var i;
          null == (i = this.persistence) || i.register(e, t);
        }
        register_once(e, t, i) {
          var s;
          null == (s = this.persistence) || s.register_once(e, t, i);
        }
        register_for_session(e) {
          var t, i;
          (null == (t = this.persistence) || t.syncCookieProperties(),
            this.hh(),
            null == (i = this.sessionPersistence) || i.register(e),
            Object.keys(e).forEach((e) => this.Cu.add(e)),
            this.dh());
        }
        unregister(e) {
          var t;
          null == (t = this.persistence) || t.unregister(e);
        }
        unregister_for_session(e) {
          var t;
          (null == (t = this.sessionPersistence) || t.unregister(e), this.Cu.delete(e), this.dh());
        }
        gh(e, t) {
          this.register({ [e]: t });
        }
        Nu() {
          (this.Cu.forEach((e) => {
            var t;
            null == (t = this.sessionPersistence) || t.unregister(e);
          }),
            this.Cu.clear(),
            this.dh());
        }
        dh() {
          var e;
          if (!this.$u) return;
          if (
            "memory" === this.config.persistence ||
            (null == (e = this.sessionPersistence) ? void 0 : e.mi) ||
            !rs.Et()
          )
            return void rs.Lt(this.$u);
          let t = [];
          (this.Cu.forEach((e) => t.push(e)), t.length > 0 ? rs.At(this.$u, t) : rs.Lt(this.$u));
        }
        getFeatureFlag(e, t) {
          var i;
          return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlag(e, t);
        }
        getFeatureFlagPayload(e) {
          var t;
          return null == (t = this.featureFlags) ? void 0 : t.getFeatureFlagPayload(e);
        }
        getFeatureFlagResult(e, t) {
          var i;
          return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlagResult(e, t);
        }
        getAllFeatureFlags() {
          var e, t;
          return null != (e = null == (t = this.featureFlags) ? void 0 : t.getAllFeatureFlags()) ? e : [];
        }
        isFeatureEnabled(e, t) {
          var i, s;
          return null != (i = null == (s = this.featureFlags) ? void 0 : s.isFeatureEnabled(e, t))
            ? i
            : null == t
              ? void 0
              : t.defaultValue;
        }
        reloadFeatureFlags() {
          var e;
          null == (e = this.featureFlags) || e.reloadFeatureFlags();
        }
        updateFlags(e, t, i) {
          var s;
          null == (s = this.featureFlags) || s.updateFlags(e, t, i);
        }
        updateEarlyAccessFeatureEnrollment(e, t, i) {
          var s;
          null == (s = this.featureFlags) || s.updateEarlyAccessFeatureEnrollment(e, t, i);
        }
        getEarlyAccessFeatures(e, t = !1, i) {
          var s;
          return null == (s = this.featureFlags) ? void 0 : s.getEarlyAccessFeatures(e, t, i);
        }
        on(e, t) {
          return this.uu.on(e, t);
        }
        onFeatureFlags(e) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, { errorsLoading: !0 }), () => {});
        }
        onSurveysLoaded(e) {
          return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], { isLoaded: !1, error: o7 }), () => {});
        }
        onSessionId(e) {
          var t, i;
          return null != (t = null == (i = this.sessionManager) ? void 0 : i.onSessionId(e)) ? t : () => {};
        }
        getSurveys(e, t = !1) {
          this.surveys ? this.surveys.getSurveys(e, t) : e([], { isLoaded: !1, error: o7 });
        }
        getActiveMatchingSurveys(e, t = !1) {
          this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], { isLoaded: !1, error: o7 });
        }
        renderSurvey(e, t) {
          var i;
          null == (i = this.surveys) || i.renderSurvey(e, t);
        }
        displaySurvey(e, t = oQ) {
          var i;
          null == (i = this.surveys) || i.displaySurvey(e, t);
        }
        cancelPendingSurvey(e) {
          var t;
          null == (t = this.surveys) || t.cancelPendingSurvey(e);
        }
        canRenderSurvey(e) {
          var t, i;
          return null != (t = null == (i = this.surveys) ? void 0 : i.canRenderSurvey(e))
            ? t
            : { visible: !1, disabledReason: o7 };
        }
        canRenderSurveyAsync(e, t = !1) {
          var i, s;
          return null != (i = null == (s = this.surveys) ? void 0 : s.canRenderSurveyAsync(e, t))
            ? i
            : Promise.resolve({ visible: !1, disabledReason: o7 });
        }
        mh(e) {
          return !e || U(e)
            ? (ik.critical("Unique user id has not been set in posthog.identify"), !1)
            : "$posthog_cookieless" === e
              ? (ik.critical(
                  `The string "${e}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`,
                ),
                !1)
              : (!["distinct_id", "distinctid"].includes(e.toLowerCase()) &&
                  !["undefined", "null"].includes(e.toLowerCase())) ||
                (ik.critical(
                  `The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`,
                ),
                !1);
        }
        identify(e, t, i) {
          if (!this.__loaded || !this.persistence) return ik.uninitializedWarning("posthog.identify");
          if (
            (K(e) &&
              ((e = e.toString()),
              ik.warn(
                "The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.",
              )),
            !this.mh(e) || !this.ph("posthog.identify"))
          )
            return;
          this.bu();
          let s = this.get_distinct_id(),
            r = this.persistence.syncCookieProperties() && this.get_distinct_id() !== s,
            n = this.hh(!1),
            o = this.persistence.Rl(),
            a = !1;
          try {
            let s = this.get_distinct_id();
            (this.register({ $user_id: e }),
              this.get_property("$device_id") ||
                this.register_once({ $had_persisted_distinct_id: !0, $device_id: s }, ""),
              e !== s &&
                e !== this.get_property("__alias") &&
                (this.unregister(iM), this.register({ distinct_id: e })));
            let o = (this.persistence.get_property("$user_state") || "anonymous") === sk,
              u = e !== s,
              h = !u && o;
            if (u && o) {
              var l;
              let r = this.config.reuseAnonymousId ? { distinct_id: e } : { distinct_id: e, $anon_distinct_id: s };
              (this.persistence.set_property(sh, sE),
                this.setPersonPropertiesForFlags({ $set: t || {}, $set_once: i || {} }, !1),
                this.config.cookieWinsOnConflict && this.persistence.Al(),
                this.capture("$identify", r, { $set: t || {}, $set_once: i || {} }) && (this.Pu = oH(e, t, i)),
                null == (l = this.featureFlags) || l.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : s));
            } else if (h) {
              this.persistence.set_property(sh, sE);
              let s = t || {},
                r = i || {};
              (this.setPersonPropertiesForFlags({ $set: s, $set_once: r }, !1),
                this.config.cookieWinsOnConflict && this.persistence.Al(),
                this.capture("$set", { $set: s, $set_once: r }) && (this.Pu = oH(e, t, i)));
            } else (t || i) && this.setPersonProperties(t, i);
            (u || r || n
              ? (this.reloadFeatureFlags(),
                this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(so))
              : h && (t || i) && this.reloadFeatureFlags(),
              (a = !0));
          } finally {
            o && this.persistence.Dl(a);
          }
        }
        setPersonProperties(e, t) {
          if ((!e && !t) || !this.ph("posthog.setPersonProperties")) return;
          let i = oH(this.get_distinct_id(), e, t);
          this.Pu !== i
            ? (this.setPersonPropertiesForFlags({ $set: e || {}, $set_once: t || {} }, !0),
              this.capture("$set", { $set: e || {}, $set_once: t || {} }) && (this.Pu = i))
            : ik.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
        }
        unsetPersonProperties(e) {
          var t;
          let i = (j(e) ? e : [e]).filter((e) => V(e) && e.length > 0);
          0 !== i.length &&
            this.ph("posthog.unsetPersonProperties") &&
            (null == (t = this.featureFlags) || t.unsetPersonPropertiesForFlags(i, !0),
            this.capture("$set", { $unset: i }),
            (this.Pu = null));
        }
        group(e, t, i) {
          var s;
          if (!e || !t) return void ik.error("posthog.group requires a group type and group key");
          (null == (s = this.persistence) || s.syncCookieProperties(), this.hh());
          let r = this.getGroups(),
            n = r[e] !== t;
          if (
            (n && this.resetGroupPropertiesForFlags(e),
            this.register({ $groups: tb(tb({}, r), {}, { [e]: t }) }),
            (n || i) && this.fh())
          ) {
            let s = { $group_type: e, $group_key: t };
            (i && (s.$group_set = i), this.capture(sF, s));
          }
          (i && this.setGroupPropertiesForFlags({ [e]: i }), n && !i && this.reloadFeatureFlags());
        }
        resetGroups() {
          (this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags());
        }
        setPersonPropertiesForFlags(e, t = !0) {
          var i;
          null == (i = this.featureFlags) || i.setPersonPropertiesForFlags(e, t);
        }
        resetPersonPropertiesForFlags(e = !0) {
          var t;
          null == (t = this.featureFlags) || t.resetPersonPropertiesForFlags(e);
        }
        setGroupPropertiesForFlags(e, t = !0) {
          var i;
          this.ph("posthog.setGroupPropertiesForFlags") &&
            (null == (i = this.featureFlags) || i.setGroupPropertiesForFlags(e, t));
        }
        resetGroupPropertiesForFlags(e) {
          var t;
          null == (t = this.featureFlags) || t.resetGroupPropertiesForFlags(e);
        }
        reset(e) {
          let t = J(e) ? e : null == e ? void 0 : e.resetDeviceID,
            i = J(e) || null == e ? void 0 : e.bootstrap;
          this.yh(t, !1, i);
        }
        yh(e, t = !1, i) {
          var s, r, n, o, a, l, u, h, c, d, p, f, g, v, _, m, y, b, w, x, k;
          if ((ik.info("reset"), !this.__loaded)) return ik.uninitializedWarning("posthog.reset");
          let E = null == i ? void 0 : i.sessionID;
          ((this.config.bootstrap = i || (null == (s = this.Au) ? void 0 : s.bootstrap) || {}),
            null == (r = this.featureFlags) || null == (n = r.updateConfig) || n.call(r, this.config, this.Yl()));
          let $ = this.get_property(iF),
            S = this.get_property(iT),
            I = this.get_property(iX);
          null == (o = this.sessionRecording) || o.flushBeforeIdentityReset();
          let P = this.is_capturing();
          (this.consent.reset(),
            t ||
              !P ||
              this.is_capturing() ||
              console.warn(
                "[PostHog.js]",
                "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.",
              ));
          let C = null == (a = this.persistence) || null == (l = a.Rl) ? void 0 : l.call(a),
            O = !1;
          try {
            if (
              (null == (u = this.persistence) || u.clear(),
              null == (h = this.sessionPersistence) || h.clear(),
              this.Cu.clear(),
              this.dh(),
              z(I) || null == (m = this.persistence) || m.register({ $session_recording_remote_config: I }),
              null == (c = this.surveys) || c.reset(),
              null == (d = this.featureFlags) || d.reset(),
              null == (p = this.conversations) || p.reset(),
              null == (f = this.logs) || f.reset(),
              null == (g = this.metrics) || g.reset(),
              null == (v = this.persistence) || v.set_property("$user_state", "anonymous"),
              null == (_ = this.sessionManager) || _.resetSessionId(),
              (this.Pu = null),
              "always" === this.config.cookieless_mode)
            )
              this.register_once({ distinct_id: sv, $device_id: null }, "");
            else {
              let t = this.config.get_device_id(sG());
              (this.register_once({ distinct_id: t, $device_id: e ? t : $ }, ""),
                e || z(S) || this.register({ [iT]: S }));
            }
            if (
              (this.register({ $last_posthog_reset: new Date().toISOString() }, 1),
              i &&
                (i.distinctID &&
                  !this.pu() &&
                  (null == (w = this.persistence) ||
                    w.set_property("$user_state", i.isIdentifiedID ? "identified" : "anonymous"),
                  this.register({ distinct_id: i.distinctID })),
                null == (y = this.featureFlags) || y.initialize(),
                !G(E) && !(null == (b = this.sessionManager) ? void 0 : b.setBootstrapSessionId(E, !0))))
            ) {
              let e = tb({}, i);
              (delete e.sessionID, (this.config.bootstrap = e));
            }
            (delete this.config.identity_distinct_id,
              delete this.config.identity_hash,
              delete this.config.identity_claims,
              (O = !0));
          } finally {
            C && (null == (x = this.persistence) || null == (k = x.Dl) || k.call(x, O));
          }
          this.reloadFeatureFlags();
        }
        shutdown(e) {
          var t = this;
          return ea(function* () {
            var e, i, s, r, n, o, a, l, u;
            if (t.__loaded) {
              ((t.Su = !0),
                t.Uu().dispose(),
                null == (e = t.sessionRecording) || e.dispose(),
                null == (i = t.logs) || i.flushLogs("sendBeacon"),
                null == (s = t.metrics) || s.flush("sendBeacon"),
                null == (r = t.metrics) || r.dispose(),
                null == (n = t.Ou) || n.unload(),
                null == (o = t.Lu) || o.unload());
              try {
                null == (u = t.featureFlags) || u.destroy();
              } catch (e) {
                ik.error("Error while destroying feature flags", e);
              }
              (null == (a = t.persistence) || a.destroy(), null == (l = t.sessionPersistence) || l.destroy());
            } else ik.uninitializedWarning("posthog.shutdown");
          })();
        }
        setIdentity(e, t) {
          var i;
          (delete this.config.identity_claims,
            (this.config.identity_distinct_id = e),
            (this.config.identity_hash = t),
            this.alias(e),
            null == (i = this.conversations) || i.bh());
        }
        clearIdentity() {
          var e;
          (delete this.config.identity_distinct_id,
            delete this.config.identity_hash,
            delete this.config.identity_claims,
            null == (e = this.conversations) || e._h());
        }
        get_distinct_id() {
          return this.get_property("distinct_id");
        }
        getGroups() {
          return this.get_property("$groups") || {};
        }
        get_session_id() {
          var e, t;
          return null !=
            (e = null == (t = this.sessionManager) ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId)
            ? e
            : "";
        }
        get_session_replay_url(e) {
          if (!this.sessionManager) return "";
          let { sessionId: t, sessionStartTimestamp: i } = this.sessionManager.checkAndGetSessionAndWindowId(!0),
            s = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${t}`);
          if ((null == e ? void 0 : e.withTimestamp) && i) {
            var r;
            let t = null != (r = e.timestampLookBack) ? r : 10;
            if (!i) return s;
            s += `?t=${Math.max(Math.floor((new Date().getTime() - i) / 1e3) - t, 0)}`;
          }
          return s;
        }
        alias(e, t) {
          return e === this.get_property("$people_distinct_id")
            ? (ik.critical("Attempting to create alias for existing People user - aborting."), -2)
            : this.ph("posthog.alias")
              ? (z(t) && (t = this.get_distinct_id()),
                e !== t
                  ? (this.gh(iM, e), this.capture("$create_alias", { alias: e, distinct_id: t }))
                  : (ik.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1))
              : void 0;
        }
        set_config(e) {
          let t = tb({}, this.config);
          if (B(e)) {
            var i, s, r, n, o, a, l, u, h, c, d, p, f, g, v;
            sR(this.config, au(e));
            let _ = this._u();
            (null == (i = this.persistence) || i.update_config(this.config, t, _),
              (this.sessionPersistence =
                "sessionStorage" === this.config.persistence || "memory" === this.config.persistence
                  ? this.persistence
                  : new nk(tb(tb({}, this.config), {}, { persistence: "sessionStorage" }), _, !1)));
            let m = this.Ru(this.config.debug);
            (J(m) && (this.config.debug = m),
              J(this.config.debug) &&
                (this.config.debug
                  ? ((k.DEBUG = !0),
                    s0.Et() && s0.At("ph_debug", !0),
                    ik.info("set_config", { config: e, oldConfig: t, newConfig: tb({}, this.config) }))
                  : ((k.DEBUG = !1), s0.Et() && s0.Lt("ph_debug"))),
              null == (s = this.featureFlags) || null == (r = s.updateConfig) || r.call(s, this.config, this.Yl()),
              null == (n = this.exceptionObserver) || n.onConfigChange(),
              null == (o = this.exceptions) || o.onConfigChange(),
              null == (a = this.metrics) || a.onConfigChange(),
              null == (l = this.sessionRecording) || l.startIfEnabledOrStop(),
              null == (u = this.tracingHeaders) || u.startIfEnabledOrStop(),
              null == (h = this.autocapture) || h.startIfEnabled(),
              null == (c = this.heatmaps) || c.startIfEnabled(),
              ("capture_pageview" in e || "disable_capture_url_hashes" in e) &&
                (null == (v = this.historyAutocapture) || v.startIfEnabledOrStop()),
              null == (d = this.exceptionObserver) || d.startIfEnabledOrStop(),
              null == (p = this.deadClicksAutocapture) || p.startIfEnabledOrStop(),
              null == (f = this.surveys) || f.loadIfEnabled(),
              this.wu(),
              null == (g = this.externalIntegrations) || g.startIfEnabledOrStop(),
              !t.segment && this.config.segment && this.persistence && rW(this, o8, !1));
          }
        }
        _overrideSDKInfo(e, t) {
          ((k.LIB_NAME = e), (k.LIB_VERSION = t));
        }
        startSessionRecording(e) {
          var t, i, s, r, n;
          let o = !0 === e,
            a = {
              sampling: o || !!(null == e ? void 0 : e.sampling),
              linked_flag: o || !!(null == e ? void 0 : e.linked_flag),
              url_trigger: o || !!(null == e ? void 0 : e.url_trigger),
              event_trigger: o || !!(null == e ? void 0 : e.event_trigger),
            };
          (Object.values(a).some(Boolean) &&
            (null == (t = this.sessionManager) || t.checkAndGetSessionAndWindowId(),
            a.sampling && (null == (i = this.sessionRecording) || i.overrideSampling()),
            a.linked_flag && (null == (s = this.sessionRecording) || s.overrideLinkedFlag()),
            a.url_trigger && (null == (r = this.sessionRecording) || r.overrideTrigger("url")),
            a.event_trigger && (null == (n = this.sessionRecording) || n.overrideTrigger("event"))),
            this.set_config({ disable_session_recording: !1 }));
        }
        stopSessionRecording() {
          this.set_config({ disable_session_recording: !0 });
        }
        sessionRecordingStarted() {
          var e;
          return !!(null == (e = this.sessionRecording) ? void 0 : e.started);
        }
        captureException(e, t) {
          try {
            if (!this.exceptions) return;
            let i = this.exceptions.buildProperties(e, {
              handled: !0,
              syntheticException: Error("PostHog syntheticException"),
            });
            return this.exceptions.sendExceptionEvent(tb(tb({}, i), t));
          } catch (e) {
            return;
          }
        }
        addExceptionStep(e, t) {
          var i;
          null == (i = this.exceptions) || i.addExceptionStep(e, t);
        }
        captureLog(e) {
          var t;
          null == (t = this.logs) || t.captureLog(e);
        }
        get logger() {
          var t, i;
          return null != (t = null == (i = this.logs) ? void 0 : i.logger) ? t : e.wh;
        }
        startExceptionAutocapture(e) {
          this.set_config({ capture_exceptions: null == e || e });
        }
        stopExceptionAutocapture() {
          this.set_config({ capture_exceptions: !1 });
        }
        loadToolbar(e) {
          var t, i;
          return null != (t = null == (i = this.toolbar) ? void 0 : i.loadToolbar(e)) && t;
        }
        get_property(e) {
          var t;
          return null == (t = this.persistence) ? void 0 : t.props[e];
        }
        getSessionProperty(e) {
          var t;
          return null == (t = this.sessionPersistence) ? void 0 : t.props[e];
        }
        toString() {
          var e;
          let t = null != (e = this.config.name) ? e : ao;
          return (t !== ao && (t = "posthog." + t), t);
        }
        _isIdentified() {
          var e, t;
          return (
            "identified" === (null == (e = this.persistence) ? void 0 : e.get_property("$user_state")) ||
            "identified" === (null == (t = this.sessionPersistence) ? void 0 : t.get_property("$user_state"))
          );
        }
        fh() {
          var e, t;
          return !(
            "never" === this.config.person_profiles ||
            ("identified_only" === this.config.person_profiles &&
              !this._isIdentified() &&
              H(this.getGroups()) &&
              !(null == (e = this.persistence) || null == (e = e.props) ? void 0 : e.__alias) &&
              !(null == (t = this.persistence) || null == (t = t.props) ? void 0 : t.$epp))
          );
        }
        Xu() {
          return (
            !0 === this.config.capture_pageleave ||
            ("if_capture_pageview" === this.config.capture_pageleave && !!this.config.capture_pageview)
          );
        }
        createPersonProfile() {
          this.fh() || (this.ph("posthog.createPersonProfile") && this.setPersonProperties({}, {}));
        }
        setInternalOrTestUser() {
          this.ph("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
        }
        ph(e) {
          return "never" === this.config.person_profiles
            ? (ik.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1)
            : (this.gu(), this.gh(sg, !0), !0);
        }
        _u() {
          if ("always" === this.config.cookieless_mode) return !0;
          let e = this.consent.isOptedOut();
          return (
            this.config.disable_persistence ||
            (e && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode))
          );
        }
        wu() {
          var e, t, i, s, r;
          let n = this._u();
          return (
            this.is_capturing() || null == (i = this.logs) || i.kh(),
            (null == (e = this.persistence) ? void 0 : e.mi) !== n &&
              (null == (s = this.persistence) || s.set_disabled(n)),
            (null == (t = this.sessionPersistence) ? void 0 : t.mi) !== n &&
              (null == (r = this.sessionPersistence) || r.set_disabled(n)),
            n && (this.Cu.clear(), this.dh()),
            n
          );
        }
        opt_in_capturing(t) {
          var i, s, r, n, o, a, l, u, h, c, d;
          if ("always" !== this.config.cookieless_mode) {
            if (this.pu()) {
              (null == (s = this.sessionRecording) || s.dispose({ discardBufferedEvents: !0 }),
                this.yh(!0, !0),
                null == (r = this.sessionManager) || r.destroy(),
                null == (n = this.pageViewManager) || n.destroy(),
                (this.sessionManager = new oR(this)),
                (this.pageViewManager = new rJ(this)),
                this.persistence && (this.sessionPropsManager = new oF(this, this.sessionManager, this.persistence)));
              let t =
                null != (o = null == (a = this.config.__extensionClasses) ? void 0 : a.sessionRecording)
                  ? o
                  : null == (l = e.__defaultExtensionClasses)
                    ? void 0
                    : l.sessionRecording;
              t &&
                ((this.sessionRecording = this.fu(this.sessionRecording, new t(this))),
                this.au &&
                  (null == (u = this.sessionRecording) || null == (h = u.onRemoteConfig) || h.call(u, this.au)));
            }
            (this.consent.optInOut(!0),
              this.wu(),
              this.Qu(),
              null == (i = this.sessionRecording) || i.startIfEnabledOrStop(),
              "on_reject" == this.config.cookieless_mode && (null == (c = this.surveys) || c.loadIfEnabled()),
              (z(null == t ? void 0 : t.captureEventName) || (null == t ? void 0 : t.captureEventName)) &&
                this.capture(
                  null != (d = null == t ? void 0 : t.captureEventName) ? d : "$opt_in",
                  null == t ? void 0 : t.captureProperties,
                  { send_instantly: !0 },
                ),
              this.config.capture_pageview && this.Ju());
          } else ik.warn(o9);
        }
        opt_out_capturing() {
          var e, t;
          if ("always" === this.config.cookieless_mode) return void ik.warn(o9);
          let i = "on_reject" === this.config.cookieless_mode ? this.sessionRecording : void 0;
          (null == i || i.dispose({ discardBufferedEvents: !0 }),
            "on_reject" === this.config.cookieless_mode && this.consent.isOptedIn() && this.yh(!0, !0),
            this.consent.optInOut(!1),
            this.wu(),
            "on_reject" === this.config.cookieless_mode &&
              (this.register({ distinct_id: sv, $device_id: null }),
              this.vu(i),
              (this.sessionRecording = void 0),
              null == (e = this.sessionManager) || e.destroy(),
              null == (t = this.pageViewManager) || t.destroy(),
              (this.sessionManager = void 0),
              (this.sessionPropsManager = void 0),
              this.config.capture_pageview && this.Ju(),
              this.Qu()));
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn();
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut();
        }
        get_explicit_consent_status() {
          let e = this.consent.consent;
          return 1 === e ? "granted" : 0 === e ? "denied" : "pending";
        }
        is_capturing() {
          return (
            "always" === this.config.cookieless_mode ||
            ("on_reject" === this.config.cookieless_mode
              ? this.consent.isRejected() || this.consent.isOptedIn()
              : !this.has_opted_out_capturing())
          );
        }
        clear_opt_in_out_capturing() {
          (this.consent.reset(), this.wu());
        }
        _is_bot() {
          return c ? oA(c, this.config.custom_blocked_useragents) : void 0;
        }
        Ju() {
          d &&
            ("visible" === d.visibilityState
              ? this.Iu ||
                ((this.Iu = !0),
                this.capture(sP, { title: d.title }, { send_instantly: !0 }),
                this.Mu && (d.removeEventListener(sS, this.Mu), (this.Mu = null)))
              : this.Mu || ((this.Mu = this.Ju.bind(this)), sq(d, sS, this.Mu)));
        }
        debug(e) {
          !1 === e
            ? (null == u || u.console.log("You've disabled debug mode."), this.set_config({ debug: !1 }))
            : (null == u ||
                u.console.log(
                  "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`.",
                ),
              this.set_config({ debug: !0 }));
        }
        Yl() {
          var e, t;
          let i,
            s,
            r = this.Au || {};
          return "advanced_disable_flags" in r
            ? !!r.advanced_disable_flags
            : !1 !== this.config.advanced_disable_flags
              ? !!this.config.advanced_disable_flags
              : !0 === this.config.advanced_disable_decide
                ? (ik.warn(
                    "Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version.",
                  ),
                  !0)
                : ((t = "advanced_disable_decide"),
                  (i = (e = "advanced_disable_flags") in r && !G(r[e])),
                  (s = t in r && !G(r[t])),
                  i
                    ? r[e]
                    : !!s &&
                      (ik &&
                        ik.warn(
                          `Config field '${t}' is deprecated. Please use '${e}' instead. The old field will be removed in a future major version.`,
                        ),
                      r[t]));
        }
        Os(e) {
          var t;
          if (G(this.config.before_send)) return e;
          let i = Object.keys(null != (t = e.properties) ? t : {}).filter(Y),
            s = j(this.config.before_send) ? this.config.before_send : [this.config.before_send],
            r = e;
          for (let t of s)
            try {
              if (((r = t(r)), G(r))) {
                let t = `Event '${e.event}' was rejected in beforeSend function`;
                return (Q(e.event) ? ik.warn(`${t}. This can cause unexpected behavior.`) : ik.info(t), null);
              }
              (r.properties && !H(r.properties)) ||
                ik.warn(`Event '${e.event}' has no properties after beforeSend function, this is likely an error.`);
            } catch (t) {
              return (ik.error(`Error in beforeSend function for event '${e.event}':`, t), null);
            }
          for (let t of i)
            if (r.properties && G(r.properties[t]))
              return (
                ik.warn(
                  `Event '${e.event}' had its '${t}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`,
                ),
                null
              );
          return r;
        }
        getPageViewId() {
          var e;
          return null == (e = this.pageViewManager.Ho) ? void 0 : e.pageViewId;
        }
        captureTraceFeedback(e, t) {
          this.capture("$ai_feedback", { $ai_trace_id: String(e), $ai_feedback_text: t });
        }
        captureTraceMetric(e, t, i) {
          this.capture("$ai_metric", { $ai_trace_id: String(e), $ai_metric_name: t, $ai_metric_value: String(i) });
        }
        Ru(e) {
          let t = J(e) && !e,
            i = s0.Et() && "true" === s0.Ot("ph_debug");
          return !t && (!!i || e);
        }
      };
    ((ac.__defaultExtensionClasses = {}),
      (ac.wh = { trace: (a = () => {}), debug: a, info: a, warn: a, error: a, fatal: a }),
      (function (e, t) {
        for (let i = 0; t.length > i; i++) e.prototype[t[i]] = sL(e.prototype[t[i]]);
      })(ac, ["identify"]));
    var ad = class {
      constructor(e) {
        this.disabled = !1 === e;
        const t = B(e) ? e : {};
        ((this.thresholdPx = t.threshold_px || 30),
          (this.timeoutMs = t.timeout_ms || 1e3),
          (this.clickCount = t.click_count || 3),
          (this.clicks = []));
      }
      isRageClick(e, t, i) {
        if (this.disabled) return !1;
        let s = this.clicks[this.clicks.length - 1];
        if (s && Math.abs(e - s.x) + Math.abs(t - s.y) < this.thresholdPx && this.timeoutMs > i - s.timestamp) {
          if ((this.clicks.push({ x: e, y: t, timestamp: i }), this.clicks.length === this.clickCount)) return !0;
        } else this.clicks = [{ x: e, y: t, timestamp: i }];
        return !1;
      }
    };
    let ap = "$copy_autocapture",
      af = iE("[AutoCapture]");
    function ag(e, t) {
      return t.length > e ? t.slice(0, e) + "..." : t;
    }
    var av = class {
        ho() {
          ((this.co = void 0), clearTimeout(this.do), (this.do = void 0));
        }
        vo(e) {
          var t;
          if (!rO(e)) return !0;
          let i = null != (t = this.fo().css_selector_ignorelist) ? t : rw,
            s = new Set(),
            r = e;
          for (; r;) {
            if (s.size >= 1e3 || s.has(r)) return !0;
            s.add(r);
            let e = r,
              t = rp(e);
            if (T(t, "ph-no-capture") || T(t, "ph-sensitive") || rF(e) || i.some((t) => rm(e, t))) return !0;
            let n = r.parentNode;
            r = rh(n) ? n.host : n && ra(n) ? n : null;
          }
          return !1;
        }
        po(e) {
          if (!this.isEnabled || "pointercancel" === e.type) return void this.ho();
          if ("pointerdown" === e.type) {
            var t;
            this.ho();
            let i = rv(e);
            return void (
              e.isPrimary &&
              0 === e.button &&
              !e.ctrlKey &&
              i &&
              ra(i) &&
              (this.co = {
                target: i,
                excluded: this.vo(i),
                id: e.pointerId,
                x: e.clientX,
                y: e.clientY,
                released: !1,
                distinctId: null == (t = this.mo) ? void 0 : t.distinctId,
              })
            );
          }
          let i = this.co;
          i &&
            (e.pointerId !== i.id || Math.abs(e.clientX - i.x) > 5 || Math.abs(e.clientY - i.y) > 5
              ? this.ho()
              : "pointerup" === e.type && ((i.released = !0), (this.do = setTimeout(() => this.ho(), 0))));
        }
        yo(e) {
          var t, i;
          let s = this.co;
          this.ho();
          let r = rv(e);
          if (
            (null == s ? void 0 : s.released) &&
            s.target.isConnected &&
            s.distinctId === (null == (t = this.mo) ? void 0 : t.distinctId) &&
            e.pointerId === s.id &&
            (e.detail > 0 || "touch" === e.pointerType || "pen" === e.pointerType) &&
            0 === e.button &&
            5 >= Math.abs(e.clientX - s.x) &&
            5 >= Math.abs(e.clientY - s.y) &&
            r &&
            (rl(r, "html") || rl(r, "body"))
          ) {
            if (s.excluded) return null;
            let e = null != (i = this.fo().css_selector_ignorelist) ? i : rw;
            return [r, null == d ? void 0 : d.documentElement, null == d ? void 0 : d.body].some((t) => {
              if (!t) return !1;
              let i = rp(t);
              return T(i, "ph-no-capture") || T(i, "ph-sensitive") || !rO(t) || rF(t) || e.some((e) => rm(t, e));
            })
              ? null
              : s.target;
          }
        }
        constructor(e) {
          ((this.bo = e),
            (this.name = "autocapture"),
            (this._o = !1),
            (this.wo = null),
            (this.ko = !1),
            (this.So = !1),
            (this.Ir = {
              enabled: !1,
              rageclick: !1,
              maskAllElementAttributes: !1,
              maskAllText: !1,
              disableCaptureUrlHashes: !1,
              remoteRequestsDisabled: !1,
            }),
            (this.xo = !1),
            this.bo.refresh(this.Ir),
            (this.rageclicks = new ad(this.Ir.rageclick)),
            (this.Co = null));
        }
        setup(e) {
          (this.$o(), (this.mo = e));
          let t = e.onRemoteConfig(this.onRemoteConfig.bind(this));
          this.xo ? t.dispose() : ((this.To = t), this.startIfEnabled());
        }
        dispose() {
          var e;
          this.xo ||
            ((this.xo = !0), (this.mo = void 0), null == (e = this.To) || e.dispose(), (this.To = void 0), this.Io());
        }
        fo() {
          return (this.bo.refresh(this.Ir), this.Ir);
        }
        $o() {
          var e, t;
          return (
            this.fo(),
            (this.Ir.url_allowlist = null == (e = this.Ir.url_allowlist) ? void 0 : e.map((e) => new RegExp(e))),
            (this.Ir.url_ignorelist = null == (t = this.Ir.url_ignorelist) ? void 0 : t.map((e) => new RegExp(e))),
            this.Ir
          );
        }
        Mo() {
          if (!this.isBrowserSupported())
            return void af.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!u || !d) return;
          let e = (this.Eo = (e) => {
            e = e || (null == u ? void 0 : u.event);
            try {
              if ("blur" === e.type) return void this.ho();
              if (0 === e.type.indexOf("pointer")) return void this.po(e);
              let t = "click" === e.type ? this.yo(e) : void 0;
              if (W(t)) return;
              this.Po(e, "$autocapture", t);
            } catch (e) {
              af.error("Failed to capture event", e);
            }
          });
          if (
            (sq(u, "blur", e),
            sq(d, "submit", e, { capture: !0 }),
            sq(d, "change", e, { capture: !0 }),
            sq(d, "click", e, { capture: !0 }),
            sM(["pointerdown", "pointermove", "pointerup", "pointercancel"], (t) => {
              sq(d, t, e, { capture: !0 });
            }),
            this.fo().capture_copied_text)
          ) {
            let e = (this.Ro = (e) => {
              e = e || (null == u ? void 0 : u.event);
              try {
                this.Po(e, ap);
              } catch (e) {
                af.error("Failed to capture clipboard event", e);
              }
            });
            (sq(d, "copy", e, { capture: !0 }), sq(d, "cut", e, { capture: !0 }), sq(d, "paste", e, { capture: !0 }));
          }
        }
        Io() {
          (this.ho(),
            this.Eo &&
              (null == u || u.removeEventListener("blur", this.Eo),
              sM(["pointerdown", "pointermove", "pointerup", "pointercancel"], (e) => {
                null == d || d.removeEventListener(e, this.Eo, !0);
              }),
              null == d || d.removeEventListener("submit", this.Eo, !0),
              null == d || d.removeEventListener("change", this.Eo, !0),
              null == d || d.removeEventListener("click", this.Eo, !0),
              (this.Eo = void 0)),
            this.Ro &&
              (null == d || d.removeEventListener("copy", this.Ro, !0),
              null == d || d.removeEventListener("cut", this.Ro, !0),
              null == d || d.removeEventListener("paste", this.Ro, !0),
              (this.Ro = void 0)),
            (this._o = !1));
        }
        startIfEnabled() {
          (this.isEnabled || this.ho(),
            !this.xo && this.mo && this.isEnabled && !this._o && (this.Mo(), (this._o = !0)));
        }
        onRemoteConfig(e) {
          var t;
          if (this.xo) return;
          if (((this.ko = !0), !e.ok)) return void this.startIfEnabled();
          let i = e.config;
          i.elementsChainAsString && (this.So = i.elementsChainAsString);
          let s = i.autocapture_opt_out;
          (J(s) && (null == (t = this.mo) || t.kv.set("$autocapture_disabled_server_side", s), (this.wo = s)),
            this.startIfEnabled());
        }
        setElementSelectors(e) {
          this.Co = e;
        }
        getElementSelectors(e, t) {
          var i;
          let s = [];
          return (
            null == (i = this.Co) ||
              i.forEach((i) => {
                let r = null == d ? void 0 : d.querySelectorAll(i);
                null == r ||
                  r.forEach((r) => {
                    (e !== r && t !== r) || T(s, i) || s.push(i);
                  });
              }),
            s
          );
        }
        get isEnabled() {
          var e, t;
          if (this.xo) return !1;
          let i = null == (e = this.mo) ? void 0 : e.kv.get(ij),
            s = this.wo,
            r = this.fo();
          if (!r.remoteRequestsDisabled && !this.ko) return !1;
          let n = r.remoteRequestsDisabled && !this.ko;
          if (W(s) && !J(i) && !n) return !1;
          let o = null != (t = this.wo) ? t : !!i;
          return !!r.enabled && !o;
        }
        Po(e, t = "$autocapture", i) {
          var s, r, n, o;
          if (!this.isEnabled) return void this.ho();
          let a = i || rv(e);
          ru(a) && (a = a.parentNode || null);
          let l = this.$o();
          "$autocapture" === t &&
            "click" === e.type &&
            e instanceof MouseEvent &&
            l.rageclick &&
            (null == (s = this.rageclicks)
              ? void 0
              : s.isRageClick(e.clientX, e.clientY, e.timeStamp || new Date().getTime())) &&
            rI(a, l.rageclick) &&
            this.Po(e, "$rageclick", i);
          let h = t === ap,
            c = h ? tb(tb({}, l), {}, { dom_event_allowlist: void 0 }) : l;
          if (
            a &&
            (function (e, t, i, s, r, n) {
              var o;
              if (
                !u ||
                rP(e) ||
                ((null == i ? void 0 : i.url_allowlist) && !rd(i.url_allowlist, n)) ||
                ((null == i ? void 0 : i.url_ignorelist) && rd(i.url_ignorelist, n))
              )
                return !1;
              if (null == i ? void 0 : i.dom_event_allowlist) {
                let e = i.dom_event_allowlist;
                if (e && !e.some((e) => t.type === e)) return !1;
              }
              let { parentIsUsefulElement: a, targetElementList: l } = rC(e, s);
              if (
                !(function (e, t) {
                  let i = null == t ? void 0 : t.element_allowlist;
                  if (z(i)) return !0;
                  for (let t of e) if (i.some((e) => t.tagName.toLowerCase() === e)) return !0;
                  return !1;
                })(l, i) ||
                !ry(l, null == i ? void 0 : i.css_selector_allowlist) ||
                ry(l, null != (o = null == i ? void 0 : i.css_selector_ignorelist) ? o : rw)
              )
                return !1;
              try {
                let i = u.getComputedStyle(e);
                if (i && "pointer" === i.getPropertyValue("cursor") && "click" === t.type) return !0;
              } catch (e) {}
              let h = e.tagName.toLowerCase();
              switch (h) {
                case "html":
                  return !1;
                case "form":
                  return (r || ["submit"]).indexOf(t.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (r || ["change", "click"]).indexOf(t.type) >= 0;
                default:
                  return a
                    ? (r || ["click"]).indexOf(t.type) >= 0
                    : (r || ["click"]).indexOf(t.type) >= 0 &&
                        (r_.indexOf(h) > -1 || "true" === e.getAttribute("contenteditable"));
              }
            })(a, e, c, h, h ? ["copy", "cut", "paste"] : void 0, { config: { get_current_url: l.getCurrentUrl } })
          ) {
            let {
              props: i,
              explicitNoCapture: s,
              target: h,
            } = (function (
              e,
              {
                e: t,
                maskAllElementAttributes: i,
                maskAllText: s,
                elementAttributeIgnoreList: r,
                elementsChainAsString: n,
                disableCaptureUrlHashes: o,
              },
            ) {
              var a, l, h, c;
              if (!ra(e)) return { props: {} };
              let d = [e],
                p = new Set([e]),
                f = e;
              for (; f.parentNode && !rl(f, "body") && 1e3 > d.length;) {
                if (rh(f.parentNode)) {
                  let e = f.parentNode.host;
                  if (p.has(e)) break;
                  (p.add(e), d.push(e), (f = e));
                  continue;
                }
                if (!ra(f.parentNode) || p.has(f.parentNode)) break;
                (p.add(f.parentNode), d.push(f.parentNode), (f = f.parentNode));
              }
              let g =
                "click" === t.type && "http://www.w3.org/2000/svg" === e.namespaceURI
                  ? d.findIndex((e) => rl(e, "button") || rl(e, "a"))
                  : -1;
              g > 0 && (s = s || d.slice(0, g + 1).some((e) => !rO(e) || rF(e)));
              let v = [],
                _ = {},
                m,
                y = !1,
                b = !1;
              if (
                (sM(d, (e) => {
                  let t = rO(e);
                  if (rl(e, "a") && !i && !(null == r ? void 0 : r.includes("href"))) {
                    let i = e.getAttribute("href");
                    y = !!(t && i && rN(i)) && (o ? tp(i) : i);
                  }
                  (T(rp(e), "ph-no-capture") && (b = !0),
                    v.push(
                      (function (e, t, i, s, r = !1) {
                        let n = e.tagName.toLowerCase(),
                          o = { tag_name: n };
                        r_.indexOf(n) > -1 &&
                          !i &&
                          (o.$el_text =
                            "a" === n.toLowerCase() || "button" === n.toLowerCase()
                              ? ag(1024, rj(e))
                              : ag(1024, rg(e)));
                        let a = rp(e);
                        (t ||
                          (null == s ? void 0 : s.includes("class")) ||
                          0 >= a.length ||
                          (o.classes = a.filter(function (e) {
                            return "" !== e;
                          })),
                          sM(e.attributes, function (i) {
                            var n;
                            if (
                              (!rF(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i.name)) &&
                              !(null == s ? void 0 : s.includes(i.name)) &&
                              !t &&
                              rN(i.value) &&
                              (!V((n = i.name)) ||
                                ("_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7)))
                            ) {
                              let e = i.value;
                              ("class" === i.name && (e = rc(e).join(" ")),
                                (o["attr__" + i.name] = ag(1024, "href" === i.name && r ? tp(e) : e)));
                            }
                          }));
                        let l = 1,
                          u = 1,
                          h = e;
                        for (
                          ;
                          (h = (function (e) {
                            if (e.previousElementSibling) return e.previousElementSibling;
                            let t = e;
                            do t = t.previousSibling;
                            while (t && !ra(t));
                            return t;
                          })(h));
                        )
                          (l++, h.tagName === e.tagName && u++);
                        return ((o.nth_child = l), (o.nth_of_type = u), o);
                      })(e, i, s, r, o),
                    ),
                    sM(
                      (function (e) {
                        if (!rO(e)) return {};
                        let t = {};
                        return (
                          sM(e.attributes, function (e) {
                            if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                              let i = e.name.replace("data-ph-capture-attribute-", ""),
                                s = e.value;
                              i && s && rN(s) && (t[i] = s);
                            }
                          }),
                          t
                        );
                      })(e),
                      (e, t) => {
                        ({}).hasOwnProperty.call(_, t) || (_[t] = e);
                      },
                    ));
                }),
                b)
              )
                return { props: {}, explicitNoCapture: b };
              if (
                (g > 0 && ((e = d[g]), v.splice(0, g)),
                s || (v[0].$el_text = rl(e, "a") || rl(e, "button") ? rj(e) : rg(e)),
                y)
              ) {
                v[0].attr__href = y;
                let e = null == (h = r2(y)) ? void 0 : h.host,
                  t = null == u || null == (c = u.location) ? void 0 : c.host;
                e && t && e !== t && (m = y);
              }
              return {
                props: sR(
                  { $event_type: t.type, $ce_version: 1 },
                  n ? {} : { $elements: v },
                  {
                    $elements_chain: j(v)
                      ? v
                          .map((e) => {
                            var t, i;
                            let s = {
                              text: null == (t = e.$el_text) ? void 0 : t.slice(0, 400),
                              tag_name: e.tag_name,
                              href: null == (i = e.attr__href) ? void 0 : i.slice(0, 2048),
                              attr_class: (function (e) {
                                let t = e.attr__class;
                                if (t) return j(t) ? t : rc(t);
                              })(e),
                              attr_id: e.attr__id,
                              nth_child: e.nth_child,
                              nth_of_type: e.nth_of_type,
                              attributes: {},
                            };
                            return (
                              sA(e)
                                .filter(([e]) => 0 === e.indexOf("attr__"))
                                .forEach(([e, t]) => (s.attributes[e] = t)),
                              s
                            );
                          })
                          .map((e) => {
                            var t, i;
                            let s = "";
                            if ((e.tag_name && (s += e.tag_name), e.attr_class))
                              for (let t of (e.attr_class.sort(), e.attr_class)) s += `.${t.replace(/"/g, "")}`;
                            let r = tb(
                                tb(
                                  tb(
                                    tb({}, e.text ? { text: e.text } : {}),
                                    {},
                                    {
                                      "nth-child": null != (t = e.nth_child) ? t : 0,
                                      "nth-of-type": null != (i = e.nth_of_type) ? i : 0,
                                    },
                                    e.href ? { href: e.href } : {},
                                  ),
                                  e.attr_id ? { attr_id: e.attr_id } : {},
                                ),
                                e.attributes,
                              ),
                              n = {};
                            return (
                              sA(r)
                                .sort(([e], [t]) => (t > e ? -1 : +(e > t)))
                                .forEach(([e, t]) => (n[rq(e.toString())] = rq(t.toString()))),
                              (s += ":"),
                              (s += sA(n)
                                .map(([e, t]) => `${e}="${t}"`)
                                .join(""))
                            );
                          })
                          .join(";")
                      : "",
                  },
                  (null == (a = v[0]) ? void 0 : a.$el_text)
                    ? { $el_text: null == (l = v[0]) ? void 0 : l.$el_text }
                    : {},
                  m && "click" === t.type ? { $external_click_url: m } : {},
                  _,
                ),
                target: e,
              };
            })(a, {
              e: e,
              maskAllElementAttributes: l.maskAllElementAttributes,
              maskAllText: l.maskAllText,
              elementAttributeIgnoreList: l.element_attribute_ignorelist,
              elementsChainAsString: this.So,
              disableCaptureUrlHashes: l.disableCaptureUrlHashes,
            });
            if (s) return !1;
            let c = this.getElementSelectors(a, h);
            if ((c && c.length > 0 && (i.$element_selectors = c), t === ap)) {
              let t = e.type || "clipboard";
              if ("paste" !== t) {
                let e = null == u || null == (n = u.getSelection()) ? void 0 : n.toString(),
                  t = rf(e);
                if (!t) return !1;
                ((i.$selected_content = t),
                  (i.$clipboard_text_length = null != (o = null == e ? void 0 : e.length) ? o : 0));
              }
              i.$copy_type = t;
            }
            return (null == (r = this.mo) || r.capture(t, i), !0);
          }
        }
        isBrowserSupported() {
          return q(null == d ? void 0 : d.querySelectorAll);
        }
      },
      a_ = class {
        constructor(e) {
          this._instance = e;
        }
        refresh(e) {
          let t = this._instance.config,
            i = B(t.autocapture) ? t.autocapture : void 0;
          ((e.enabled = !!t.autocapture),
            (e.rageclick = t.rageclick),
            (e.maskAllElementAttributes = t.mask_all_element_attributes),
            (e.maskAllText = t.mask_all_text),
            (e.disableCaptureUrlHashes = t.disable_capture_url_hashes),
            (e.getCurrentUrl = t.get_current_url),
            (e.remoteRequestsDisabled = this._instance.Yl()),
            (e.url_allowlist = null == i ? void 0 : i.url_allowlist),
            (e.url_ignorelist = null == i ? void 0 : i.url_ignorelist),
            (e.dom_event_allowlist = null == i ? void 0 : i.dom_event_allowlist),
            (e.element_allowlist = null == i ? void 0 : i.element_allowlist),
            (e.css_selector_allowlist = null == i ? void 0 : i.css_selector_allowlist),
            (e.css_selector_ignorelist = null == i ? void 0 : i.css_selector_ignorelist),
            (e.element_attribute_ignorelist = null == i ? void 0 : i.element_attribute_ignorelist),
            (e.capture_copied_text = null == i ? void 0 : i.capture_copied_text));
        }
      };
    let am = iE("[ExceptionAutocapture]"),
      ay = () => {},
      ab = (e) => {
        var t;
        if (q(e)) return null != (t = e.__posthog_layer__) ? t : e.__rrweb_layer__;
      };
    function aw(e, t, i) {
      try {
        if (!(t in e)) return ay;
        let s = { next: e[t] },
          r = i(function (...e) {
            return s.next.apply(this, e);
          });
        return (
          q(r) &&
            ((r.prototype = r.prototype || {}),
            Object.defineProperties(r, {
              __posthog_wrapped__: { enumerable: !1, value: !0 },
              __posthog_layer__: { enumerable: !1, value: s },
            })),
          (e[t] = r),
          () => {
            if (e[t] === r) return void (e[t] = s.next);
            let i = e[t],
              n = ab(i);
            for (; n;) {
              if (n.next === r) return void (n.next = s.next);
              ((i = n.next), (n = ab(i)));
            }
          }
        );
      } catch (e) {
        return ay;
      }
    }
    let ax = iE("[TracingHeaders]"),
      ak = iE("[Web Vitals]"),
      aE = ["CLS", "FCP", "INP", "LCP"],
      a$ = ["INP", "LCP"],
      aS = [
        "interactionTarget",
        "interactionType",
        "inputDelay",
        "processingDuration",
        "presentationDelay",
        "loadState",
        "target",
        "url",
        "timeToFirstByte",
        "resourceLoadDelay",
        "resourceLoadDuration",
        "elementRenderDelay",
        "largestShiftTarget",
        "largestShiftTime",
        "largestShiftValue",
        "firstByteToFCP",
      ],
      aI = "disabled",
      aP = "lazy_loading",
      aC = iE("[SessionRecording]"),
      aO = iE("[Heatmaps]");
    function aF(e) {
      return B(e) && "clientX" in e && "clientY" in e && K(e.clientX) && K(e.clientY);
    }
    let aT = iE("[Product Tours]"),
      aM = (e) => {
        var t;
        return !e.config.disable_product_tours && !!(null == (t = e.persistence) ? void 0 : t.get_property(iW));
      },
      aR = ["$set_once", "$set"],
      aA = iE("[SiteApps]"),
      aL = "Error while initializing PostHog app with config id ",
      aD = (e, t) => ((null == e ? void 0 : e.then) ? e.then(t) : t(e)),
      aN = "SDK is not enabled or survey functionality is not yet loaded",
      aj = "Disabled. Not loading surveys.";
    var aq = class {
      constructor(e, t) {
        ((this.bo = e),
          (this.Sh = t),
          (this.name = "surveys"),
          (this._surveyEventReceiver = null),
          (this._surveyManager = null),
          (this.xh = !1),
          (this.Ch = []),
          (this.$h = null),
          (this.Th = null),
          (this.xo = !1),
          (this.Ih = new Set()),
          (this.onRemoteConfig = (e) => {
            if (this.xo || this.Ir.disableSurveys) return;
            if (!e.ok) return oK.warn("Remote config unavailable. Not loading surveys.");
            let t = e.config.surveys;
            if (G(t)) return oK.warn("Flags not loaded yet. Not loading surveys.");
            ((this.Mh = J(t) ? t : t.length > 0),
              oK.info(`flags response received, isSurveysEnabled: ${this.Mh}`),
              this.loadIfEnabled());
          }));
      }
      setup(e) {
        if (!this.xo)
          return (
            (this.Eh = e),
            aD(e.kv.initialize(), () => {
              if (this.Eh !== e || this.xo) return;
              ((this.Eh = void 0), (this.mo = e));
              let t = e.onRemoteConfig(this.onRemoteConfig);
              this.xo ? t.dispose() : ((this.To = t), this.loadIfEnabled());
            })
          );
      }
      dispose() {
        var e, t, i, s;
        this.xo ||
          ((this.xo = !0),
          (this.Eh = void 0),
          (this.mo = void 0),
          null == (e = this.To) || e.dispose(),
          (this.To = void 0),
          null == (t = this._surveyEventReceiver) || t.dispose(),
          (this._surveyEventReceiver = null),
          null == (i = this._surveyManager) || null == (s = i.dispose) || s.call(i),
          (this._surveyManager = null),
          (this.Ch = []),
          (this.$h = null),
          this.Ih.forEach((e) => clearTimeout(e)),
          this.Ih.clear());
      }
      get Ir() {
        return this.bo.get();
      }
      initialize() {
        this.loadIfEnabled();
      }
      reset() {
        var e, t, i;
        null == (e = this._surveyManager) || null == (t = e.clearInMemoryInProgressSurveyState) || t.call(e);
        try {
          (null == (i = this._surveyEventReceiver) || i.reset(), localStorage.removeItem("lastSeenSurveyDate"));
          let e = [];
          for (let t = 0; t < localStorage.length; t++) {
            let i = localStorage.key(t);
            ((null == i ? void 0 : i.startsWith("seenSurvey_")) ||
              (null == i ? void 0 : i.startsWith("inProgressSurvey_"))) &&
              e.push(i);
          }
          e.forEach((e) => localStorage.removeItem(e));
        } catch (e) {}
      }
      loadIfEnabled() {
        if (this.xo || !this.mo) return;
        let e = this.Ir;
        if (this._surveyManager) return;
        if (this.xh) return void oK.info("Already initializing surveys, skipping...");
        if (e.disableSurveys) return void oK.info(aj);
        if (e.cookielessMode && this.bo.isOptedOut())
          return void oK.info("Not loading surveys in cookieless mode without consent.");
        let t = this.bo.getExtensions();
        if (!t) return void oK.error("PostHog Extensions not found.");
        if (z(this.Mh) && !e.advancedEnableSurveys) return;
        let i = this.Mh || e.advancedEnableSurveys;
        this.xh = !0;
        try {
          let e = t.generateSurveys;
          if (e) return (this.Ph(e, i), void (this.xh = !1));
          let s = t.loadExternalDependency;
          if (!s) return (this.Rh(sx), void (this.xh = !1));
          s((e) => {
            try {
              if (this.xo) return;
              let t = this.bo.getExtensions();
              !e && (null == t ? void 0 : t.generateSurveys)
                ? this.Ph(t.generateSurveys, i)
                : this.Rh("Could not load surveys script", e);
            } finally {
              this.xh = !1;
            }
          });
        } catch (e) {
          throw ((this.xh = !1), this.Rh("Error initializing surveys", e), e);
        }
      }
      Ph(e, t) {
        this.xo ||
          ((this._surveyManager = e(t)),
          (this._surveyEventReceiver = this.bo.createEventReceiver()),
          oK.info("Surveys loaded successfully"),
          this.Ah({ isLoaded: !0 }));
      }
      Rh(e, t) {
        (oK.error(e, t), this.Ah({ isLoaded: !1, error: e }));
      }
      onSurveysLoaded(e) {
        return (
          this.Ch.push(e),
          this._surveyManager && this.Ah({ isLoaded: !0 }),
          () => {
            this.Ch = this.Ch.filter((t) => t !== e);
          }
        );
      }
      getSurveys(e, t = !1) {
        var i;
        let s = null != (i = this.mo) ? i : this.Sh;
        if (!s || this.xo) return;
        if (this.Ir.disableSurveys) return (oK.info(aj), e([]));
        let r = s.kv.get(se);
        if (r && !t) return (e(r, { isLoaded: !0 }), void (this.Fh() && this.getSurveys(() => {}, !0)));
        if (this.$h)
          return void this.$h
            .then(({ surveys: t, context: i }) => {
              this.xo || e(t, i);
            })
            .catch((e) => oK.error("Error in survey callback", e));
        let n = this.Oh("/api/surveys/", {
          method: "GET",
          query: { token: s.projectToken },
          sentAt: "query",
          timeoutMs: this.Ir.requestTimeoutMs,
        }).then(
          (e) => {
            try {
              return this.Dh(s, e);
            } catch (e) {
              return (oK.error("Error processing surveys response", e), this.Dh(s, { statusCode: 0, error: e }));
            }
          },
          (e) => this.Dh(s, { statusCode: 0, error: e }),
        );
        this.$h = n;
        let o = () => {
          this.$h === n && (this.$h = null);
        };
        n.then((t) => {
          (o(), this.xo || e(t.surveys, t.context));
        }, o).catch((e) => oK.error("Error in survey callback", e));
      }
      Oh(e, t) {
        let i = this.mo;
        return i ? i.sendRequest(e, t) : new Promise((e) => e({ statusCode: 0, error: Error(aN) }));
      }
      Dh(e, t) {
        var i;
        if (this.xo) return { surveys: [], context: { isLoaded: !1, error: aN } };
        let s = t.statusCode;
        if (200 !== s || !t.json) {
          let e = `Surveys API could not be loaded, status: ${s}`;
          return (
            0 !== s ? oK.error(e) : t.error || oK.warn(e),
            (this.Th = Date.now()),
            { surveys: [], context: { isLoaded: !1, error: e } }
          );
        }
        this.Th = null;
        let r = t.json.surveys || [],
          n = r.filter((e) => {
            var t;
            return (
              !(!e.start_date || e.end_date) &&
              (oD(e) ||
                !!(null == (t = e.conditions) || null == (t = t.actions) || null == (t = t.values) ? void 0 : t.length))
            );
          });
        return (
          n.length > 0 && (null == (i = this._surveyEventReceiver) || i.register(n)),
          e.kv.set({ [se]: r, [st]: Date.now() }),
          { surveys: r, context: { isLoaded: !0 } }
        );
      }
      Fh() {
        return this.Lh() && !this.$h && !this.Nh();
      }
      Lh() {
        var e, t;
        let i = null == (e = null != (t = this.mo) ? t : this.Sh) ? void 0 : e.kv.get(st);
        return K(i) && Date.now() - i > 3e5;
      }
      Nh() {
        return K(this.Th) && 3e5 > Date.now() - this.Th;
      }
      markSurveyAsSeen(e, t) {
        var i;
        oX({ id: e, current_iteration: null != (i = null == t ? void 0 : t.iteration) ? i : null });
        try {
          localStorage.setItem("lastSeenSurveyDate", new Date().toISOString());
        } catch (e) {}
      }
      Ah(e) {
        for (let t of this.Ch)
          try {
            if (!e.isLoaded) return t([], e);
            this.getSurveys(t);
          } catch (e) {
            oK.error("Error in survey callback", e);
          }
      }
      getActiveMatchingSurveys(e, t = !1) {
        if (!G(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
        oK.warn("init was not called");
      }
      qh(e) {
        let t = null;
        return (
          this.getSurveys((i) => {
            var s;
            t = null != (s = i.find((t) => t.id === e)) ? s : null;
          }),
          t
        );
      }
      jh(e) {
        if (G(this._surveyManager)) return { eligible: !1, reason: aN };
        let t = "string" == typeof e ? this.qh(e) : e;
        return t ? this._surveyManager.checkSurveyEligibility(t) : { eligible: !1, reason: "Survey not found" };
      }
      Bh(e) {
        if (!this.bo.isCapturing())
          return { eligible: !1, reason: "PostHog is not capturing, so a survey response cannot be recorded" };
        if (G(this._surveyManager)) return { eligible: !1, reason: aN };
        let t = "string" == typeof e ? this.qh(e) : e;
        return t ? this._surveyManager.checkSurveyRenderability(t) : { eligible: !1, reason: "Survey not found" };
      }
      canRenderSurvey(e) {
        if (G(this._surveyManager)) return (oK.warn("init was not called"), { visible: !1, disabledReason: aN });
        let t = this.Bh(e);
        return { visible: t.eligible, disabledReason: t.reason };
      }
      canRenderSurveyAsync(e, t) {
        return G(this._surveyManager)
          ? (oK.warn("init was not called"), Promise.resolve({ visible: !1, disabledReason: aN }))
          : new Promise((i) => {
              this.getSurveys((t) => {
                var s;
                let r = null != (s = t.find((t) => t.id === e)) ? s : null;
                if (r) {
                  let e = this.Bh(r);
                  i({ visible: e.eligible, disabledReason: e.reason });
                } else i({ visible: !1, disabledReason: "Survey not found" });
              }, t);
            });
      }
      renderSurvey(e, t, i) {
        var s;
        if (!this.bo.isCapturing()) return;
        if (G(this._surveyManager)) return void oK.warn("init was not called");
        let r = "string" == typeof e ? this.qh(e) : e;
        if (!(null == r ? void 0 : r.id)) return void oK.warn("Survey not found");
        if (!oJ.includes(r.type)) return void oK.warn(`Surveys of type ${r.type} cannot be rendered in the app`);
        let n = null == d ? void 0 : d.querySelector(t);
        if (n) {
          if (null == (s = r.appearance) ? void 0 : s.surveyPopupDelaySeconds) {
            oK.info(`Rendering survey ${r.id} with delay of ${r.appearance.surveyPopupDelaySeconds} seconds`);
            let e = setTimeout(() => {
              var t, s;
              (this.Ih.delete(e),
                !this.xo &&
                  this.bo.isCapturing() &&
                  (oK.info(
                    `Rendering survey ${r.id} with delay of ${null == (t = r.appearance) ? void 0 : t.surveyPopupDelaySeconds} seconds`,
                  ),
                  null == (s = this._surveyManager) || s.renderSurvey(r, n, i),
                  oK.info(`Survey ${r.id} rendered`)));
            }, 1e3 * r.appearance.surveyPopupDelaySeconds);
            return void this.Ih.add(e);
          }
          this._surveyManager.renderSurvey(r, n, i);
        } else oK.warn("Survey element not found");
      }
      displaySurvey(e, t) {
        var i;
        if (!this.bo.isCapturing()) return;
        if (G(this._surveyManager)) return void oK.warn("init was not called");
        let s = this.qh(e);
        if (!s) return void oK.warn("Survey not found");
        let r = s;
        if (
          ((null == (i = s.appearance) ? void 0 : i.surveyPopupDelaySeconds) &&
            t.ignoreDelay &&
            (r = tb(tb({}, s), {}, { appearance: tb(tb({}, s.appearance), {}, { surveyPopupDelaySeconds: 0 }) })),
          t.displayType !== nF &&
            t.initialResponses &&
            oK.warn("initialResponses is only supported for popover surveys. prefill will not be applied."),
          !1 === t.ignoreConditions)
        ) {
          let e = this.jh(s);
          if (!e.eligible) return void oK.warn("Survey is not eligible to be displayed: ", e.reason);
        }
        "inline" !== t.displayType
          ? this._surveyManager.handlePopoverSurvey(r, t)
          : this.renderSurvey(r, t.selector, t.properties);
      }
      cancelPendingSurvey(e) {
        G(this._surveyManager) ? oK.warn("init was not called") : this._surveyManager.cancelSurvey(e);
      }
      handlePageUnload() {
        var e, t;
        null == (e = this._surveyManager) || null == (t = e.handlePageUnload) || t.call(e);
      }
    };
    function aB(e, t, i) {
      if (G(e)) return !1;
      switch (i) {
        case "exact":
          return e === t;
        case "contains":
          return RegExp(
            t
              .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              .replace(/_/g, ".")
              .replace(/%/g, ".*"),
            "i",
          ).test(e);
        case "regex":
          try {
            return new RegExp(t).test(e);
          } catch (e) {
            return !1;
          }
        default:
          return !1;
      }
    }
    var aH = class {
        constructor(e) {
          ((this._instance = e),
            (this.Hh = new Set()),
            (this.zh = new Set()),
            (this.Uh = new oT()),
            (this.Wh = (e, t) => this.Vh(e, t) && this.Gh(e, t) && this.Zh(e, t) && this.Qh(e, t)),
            (this.Vh = (e, t) =>
              !(null == t ? void 0 : t.event) || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event)));
        }
        init() {
          var e, t;
          z(null == (e = this._instance) ? void 0 : e._addCaptureHook) ||
            (this.Jh =
              null == (t = this._instance)
                ? void 0
                : t._addCaptureHook((e, t) => {
                    this.on(e, t);
                  }));
        }
        dispose() {
          var e;
          (null == (e = this.Jh) || e.call(this), (this.Jh = void 0), (this.Uh = new oT()));
        }
        register(e) {
          var t, i;
          if (
            !z(null == (t = this._instance) ? void 0 : t._addCaptureHook) &&
            (e.forEach((e) => {
              var t;
              (this.Hh.add(e),
                null == (t = e.steps) ||
                  t.forEach((e) => {
                    this.zh.add((null == e ? void 0 : e.event) || "");
                  }));
            }),
            null == (i = this._instance) ? void 0 : i.autocapture)
          ) {
            let e = new Set();
            (this.Hh.forEach((t) => {
              var i;
              null == (i = t.steps) ||
                i.forEach((t) => {
                  (null == t ? void 0 : t.selector) && e.add(t.selector);
                });
            }),
              this._instance.autocapture.setElementSelectors(e));
          }
        }
        replace(e) {
          (this.Hh.clear(), this.zh.clear(), this.register(e));
        }
        on(e, t) {
          null != t &&
            0 != e.length &&
            (this.zh.has(e) || this.zh.has(t.event)) &&
            this.Hh.forEach((e) => {
              this.Kh(t, e) && this.Uh.emit("actionCaptured", e.name);
            });
        }
        Xh(e) {
          this.onAction("actionCaptured", (t) => e(t));
        }
        Kh(e, t) {
          if (null == (null == t ? void 0 : t.steps)) return !1;
          for (let i of t.steps) if (this.Wh(e, i)) return !0;
          return !1;
        }
        onAction(e, t) {
          return this.Uh.on(e, t);
        }
        Gh(e, t) {
          if (null == t ? void 0 : t.url) {
            var i;
            let s = null == e || null == (i = e.properties) ? void 0 : i.$current_url;
            if (!s || "string" != typeof s || !aB(s, t.url, t.url_matching || "contains")) return !1;
          }
          return !0;
        }
        Zh(e, t) {
          return !!this.Yh(e, t) && !!this.tc(e, t) && !!this.ec(e, t);
        }
        Yh(e, t) {
          var i;
          let s;
          if (!(null == t ? void 0 : t.href)) return !0;
          let r = this.nc(e);
          if (r.length > 0) return r.some((e) => aB(e.href, t.href, t.href_matching || "exact"));
          let n = (null == e || null == (i = e.properties) ? void 0 : i.$elements_chain) || "";
          return !!n && aB((s = n.match(/(?::|")href="(.*?)"/)) ? s[1] : "", t.href, t.href_matching || "exact");
        }
        tc(e, t) {
          var i, s, r, n;
          if (!(null == t ? void 0 : t.text)) return !0;
          let o = this.nc(e);
          if (o.length > 0)
            return o.some(
              (e) =>
                aB(e.text, t.text, t.text_matching || "exact") || aB(e.$el_text, t.text, t.text_matching || "exact"),
            );
          let a = (null == e || null == (n = e.properties) ? void 0 : n.$elements_chain) || "";
          return (
            !!a &&
            ((i = (function (e) {
              let t,
                i = [],
                s = /(?::|")text="(.*?)"/g;
              for (; !G((t = s.exec(e)));) i.includes(t[1]) || i.push(t[1]);
              return i;
            })(a)),
            (s = t.text),
            (r = t.text_matching || "exact"),
            i.some((e) => aB(e, s, r)))
          );
        }
        ec(e, t) {
          var i, s;
          if (!(null == t ? void 0 : t.selector)) return !0;
          let r = null == e || null == (i = e.properties) ? void 0 : i.$element_selectors;
          if (null == r ? void 0 : r.includes(t.selector)) return !0;
          let n = (null == e || null == (s = e.properties) ? void 0 : s.$elements_chain) || "";
          if (t.selector_regex && n)
            try {
              return new RegExp(t.selector_regex).test(n);
            } catch (e) {}
          return !1;
        }
        nc(e) {
          var t;
          return null == (null == e || null == (t = e.properties) ? void 0 : t.$elements)
            ? []
            : null == e
              ? void 0
              : e.properties.$elements;
        }
        Qh(e, t) {
          return (
            !(null == t ? void 0 : t.properties) ||
            0 === t.properties.length ||
            oB(
              t.properties.reduce((e, t) => {
                let i = j(t.value) ? t.value.map(String) : null != t.value ? [String(t.value)] : [];
                return ((e[t.key] = { values: i, operator: t.operator || "exact" }), e);
              }, {}),
              null == e ? void 0 : e.properties,
            )
          );
        }
      },
      az = class {
        constructor(e) {
          var t, i;
          ((this.sc = []),
            (this._instance = e),
            (this.rc = new Map()),
            (this.oc = new Map()),
            (this.lc = new Map()),
            (this.ac =
              null == (t = this._instance) || null == (i = t.onSessionId) ? void 0 : i.call(t, (e) => this.uc(e))));
        }
        hc(e) {
          return !1;
        }
        cc() {
          return null;
        }
        dc(e) {}
        vc() {}
        fc(e, t) {
          return !!e && oB(e.propertyFilters, null == t ? void 0 : t.properties);
        }
        gc(e, t) {
          let i = new Map();
          return (
            e.forEach((e) => {
              var s;
              null == (s = e.conditions) ||
                null == (s = s[t]) ||
                null == (s = s.values) ||
                s.forEach((t) => {
                  if (null == t ? void 0 : t.name) {
                    let s = i.get(t.name) || [];
                    (s.push(e.id), i.set(t.name, s));
                  }
                });
            }),
            i
          );
        }
        mc(e, t, i) {
          let s = (i === nS ? this.rc : this.oc).get(e),
            r = [];
          return (
            this.yc((e) => {
              r = e.filter((e) => (null == s ? void 0 : s.includes(e.id)));
            }),
            r.filter((s) => {
              var r;
              let n =
                null == (r = s.conditions) || null == (r = r[i]) || null == (r = r.values)
                  ? void 0
                  : r.find((t) => t.name === e);
              return this.fc(n, t);
            })
          );
        }
        register(e) {
          this.bc(e, !1);
        }
        replace(e) {
          this.bc(e, !0);
        }
        bc(e, t) {
          var i;
          z(null == (i = this._instance) ? void 0 : i._addCaptureHook) || (this._c(e, t), this.wc(e, t));
        }
        wc(e, t) {
          var i;
          let s = e.filter((e) => {
            var t;
            return null == (t = e.conditions) || null == (t = t.actions) || null == (t = t.values) ? void 0 : t.length;
          });
          if ((t && this.lc.clear(), 0 === s.length)) return void (t && (null == (i = this.kc) || i.replace([])));
          this.kc || ((this.kc = new aH(this._instance)), this.kc.init(), this.kc.Xh((e) => this.onAction(e)));
          let r = [];
          (s.forEach((e) => {
            var t;
            null == (t = e.conditions) ||
              null == (t = t.actions) ||
              t.values.forEach((t) => {
                if ((r.push(t), t.name)) {
                  var i;
                  let s = null != (i = this.lc.get(t.name)) ? i : [];
                  (s.includes(e.id) || s.push(e.id), this.lc.set(t.name, s));
                }
              });
          }),
            t ? this.kc.replace(r) : this.kc.register(r));
        }
        Sc(e, t) {
          t.forEach((t, i) => {
            var s;
            let r = null != (s = e.get(i)) ? s : [];
            (t.forEach((e) => {
              r.includes(e) || r.push(e);
            }),
              e.set(i, r));
          });
        }
        _c(e, t) {
          var i;
          let s = e.filter((e) => {
              var t, i;
              return (
                (null == (t = e.conditions) ? void 0 : t.events) &&
                (null == (i = e.conditions) || null == (i = i.events) || null == (i = i.values) ? void 0 : i.length) > 0
              );
            }),
            r = e.filter((e) => {
              var t, i;
              return (
                (null == (t = e.conditions) ? void 0 : t.cancelEvents) &&
                (null == (i = e.conditions) || null == (i = i.cancelEvents) || null == (i = i.values)
                  ? void 0
                  : i.length) > 0
              );
            }),
            n = this.gc(e, nS),
            o = this.gc(e, nI);
          (t ? ((this.rc = n), (this.oc = o)) : (this.Sc(this.rc, n), this.Sc(this.oc, o)),
            (0 !== s.length || 0 !== r.length) &&
              (null != this.Jh ||
                (this.Jh =
                  null == (i = this._instance)
                    ? void 0
                    : i._addCaptureHook((e, t) => {
                        this.onEvent(e, t);
                      }))));
        }
        onEvent(e, t) {
          var i, s;
          let r = this.xc(),
            n =
              (null == t || null == (i = t.properties) ? void 0 : i.$survey_id) ||
              (null == t || null == (s = t.properties) ? void 0 : s.$product_tour_id);
          if (n && this.getActivatedIds().includes(n)) {
            let t = this.Cc(e, n);
            if ("consume" === t)
              return (r.info("event consumed activated item, removing it", { event: e, itemId: n }), void this.$c([n]));
            if ("persist" === t)
              return (
                r.info("shown item promoted to persisted activation", { event: e, itemId: n }),
                this.Tc(n),
                void this.Ic([n])
              );
          }
          if (this.oc.has(e)) {
            let i = this.mc(e, t, nI);
            i.length > 0 &&
              (r.info("cancel event matched, cancelling items", { event: e, itemsToCancel: i.map((e) => e.id) }),
              this.$c(i.map((e) => e.id)),
              i.forEach((e) => this.Mc(e.id)));
          }
          if (!this.rc.has(e)) return;
          r.info("event name matched", { event: e, eventPayload: t, items: this.rc.get(e) });
          let o = this.mc(e, t, nS);
          this.Ec(o.map((e) => e.id));
        }
        onAction(e) {
          this.lc.has(e) && this.Ec(this.lc.get(e) || []);
        }
        Ec(e) {
          var t, i;
          if (0 === e.length) return;
          let s = !!(null == (t = this._instance) || null == (i = t.get_session_id) ? void 0 : i.call(t)),
            r = [];
          for (let t of e) s && this.hc(t) ? this.Tc(t) && this.Pc(t) : r.push(t);
          (r.length > 0 && (this.sc = [...new Set([...this.sc, ...r])]),
            this.xc().info("updating activated items", { activatedItems: this.getActivatedIds() }));
        }
        Tc(e) {
          this.sc = this.sc.filter((t) => t !== e);
          let t = this.Rc();
          return !t.includes(e) && (this.Ac([...t, e]), this.Fc(), !0);
        }
        $c(e) {
          let t = new Set(e);
          this.sc = this.sc.filter((e) => !t.has(e));
          let i = this.Oc(),
            s = i.filter((e) => !t.has(e));
          (s.length !== i.length && (this.Ac(s), 0 === s.length && this.Dc()), this.Ic(e));
        }
        Lc() {
          var e;
          let t = this.cc();
          if (!t) return {};
          let i = null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[t];
          return i && "object" == typeof i ? i : {};
        }
        Pc(e) {
          if (!this.cc()) return;
          let t = this.Lc();
          this.dc(tb(tb({}, t), {}, { [e]: Date.now() }));
        }
        Ic(e) {
          if (!this.cc()) return;
          let t = this.Lc(),
            i = {},
            s = !1;
          for (let [r, n] of Object.entries(t)) e.includes(r) ? (s = !0) : (i[r] = n);
          s && (H(i) ? this.vc() : this.dc(i));
        }
        Nc() {
          this.cc() && this.vc();
        }
        getActivationTimestamp(e) {
          if (!this.Rc().includes(e)) return;
          let t = this.Lc()[e];
          return K(t) ? t : void 0;
        }
        Oc() {
          var e;
          let t = this.qc();
          return (null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[t]) || [];
        }
        Rc() {
          var e, t, i;
          let s = this.Oc();
          if (0 === s.length) return [];
          let r = null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[this.jc()],
            n = null == (t = this._instance) || null == (i = t.get_session_id) ? void 0 : i.call(t);
          return n && r === n ? s : [];
        }
        Fc() {
          var e, t;
          let i = null == (e = this._instance) || null == (t = e.get_session_id) ? void 0 : t.call(e);
          i && this.Bc(i);
        }
        Dc() {
          this.Hc();
        }
        uc(e) {
          var t;
          let i = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[this.jc()];
          if (i && i !== e) {
            let e = this.Oc(),
              t = this.Lc();
            (e.length > 0 && (this.Ac([]), e.filter((e) => K(t[e])).forEach((e) => this.Mc(e))), this.Dc(), this.Nc());
          }
        }
        getActivatedIds() {
          return [...new Set([...this.Rc(), ...this.sc])].filter((e) => !this.zc(e));
        }
        dispose() {
          var e, t, i;
          (null == (e = this.ac) || e.call(this),
            (this.ac = void 0),
            null == (t = this.Jh) || t.call(this),
            (this.Jh = void 0),
            null == (i = this.kc) || i.dispose(),
            (this.kc = void 0));
        }
        reset() {
          ((this.sc = []), this.Oc().length > 0 && this.Ac([]), this.Dc(), this.Nc());
        }
        getEventToItemsMap() {
          return this.rc;
        }
        Uc() {
          return this.kc;
        }
      },
      aV = class extends az {
        constructor(e) {
          super(e);
        }
        qc() {
          return si;
        }
        jc() {
          return ss;
        }
        cc() {
          return sr;
        }
        dc(e) {
          var t;
          null == (t = this._instance) ||
            null == (t = t.persistence) ||
            t.register({ $surveys_activated_timestamps: e });
        }
        vc() {
          var e;
          null == (e = this._instance) || null == (e = e.persistence) || e.unregister("$surveys_activated_timestamps");
        }
        hc(e) {
          var t;
          let i;
          this.yc((t) => {
            i = t.find((t) => t.id === e);
          });
          let s = null == i || null == (t = i.appearance) ? void 0 : t.surveyPopupDelaySeconds;
          return K(s) && s > 0;
        }
        Wc() {
          return nP;
        }
        yc(e) {
          var t;
          null == (t = this._instance) || t.getSurveys(e);
        }
        Mc(e) {
          var t;
          null == (t = this._instance) || t.cancelPendingSurvey(e);
        }
        xc() {
          return oK;
        }
        Ac(e) {
          var t;
          null == (t = this._instance) || null == (t = t.persistence) || t.register({ $surveys_activated: e });
        }
        Bc(e) {
          var t;
          null == (t = this._instance) || null == (t = t.persistence) || t.register({ $surveys_activated_session: e });
        }
        Hc() {
          var e;
          null == (e = this._instance) || null == (e = e.persistence) || e.unregister("$surveys_activated_session");
        }
        zc() {
          return !1;
        }
        Cc(e, t) {
          var i, s;
          let r;
          return (
            this.yc((e) => {
              r = e.find((e) => e.id === t);
            }),
            !r ||
            (oD((i = r)) && (null == (s = i.conditions) || null == (s = s.events) ? void 0 : s.repeatedActivation)) ||
            "always" === i.schedule
              ? e === nP
                ? "consume"
                : "ignore"
              : e === nP
                ? "persist"
                : e === nC || e === nO
                  ? "consume"
                  : "ignore"
          );
        }
        getSurveys() {
          return this.getActivatedIds();
        }
        getEventToSurveys() {
          return this.getEventToItemsMap();
        }
      },
      aU = class {
        constructor(e) {
          this._instance = e;
        }
        initialize() {}
        get(e) {
          if ("string" == typeof e) return this._instance.get_property(e);
          let t = {};
          for (let i of e) {
            let e = this._instance.get_property(i);
            z(e) || (t[i] = e);
          }
          return t;
        }
        set(e, t) {
          this._instance.register("string" == typeof e ? { [e]: t } : e);
        }
        remove(e) {
          "string" != typeof e ? e.forEach((e) => this._instance.unregister(e)) : this._instance.unregister(e);
        }
      },
      aW = class {
        constructor(e) {
          this._instance = e;
        }
        get() {
          let e = this._instance.config;
          return {
            disableSurveys: e.disable_surveys,
            cookielessMode: !!e.cookieless_mode,
            advancedEnableSurveys: e.advanced_enable_surveys,
            requestTimeoutMs: e.surveys_request_timeout_ms,
          };
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut();
        }
        isCapturing() {
          return this._instance.is_capturing();
        }
        getExtensions() {
          let e = null == w ? void 0 : w.__PosthogExtensions__;
          if (!e) return;
          let { generateSurveys: t, loadExternalDependency: i } = e;
          return {
            generateSurveys: t ? (e) => t(this._instance, e) : void 0,
            loadExternalDependency: i ? (e) => i(this._instance, "surveys", e) : void 0,
          };
        }
        createEventReceiver() {
          return new aV(this._instance);
        }
      };
    let aG = (null == u ? void 0 : u.location) ? r4(u.location.hash, "__posthog") || r4(location.hash, "state") : null,
      aK = "_postHogToolbarParams",
      aX = iE("[Toolbar]"),
      aJ = iE("[FeatureFlags]");
    var aQ = class {
      constructor(e, t = !1) {
        ((this.Vc = !1), this.update(e, t));
      }
      update(e, t) {
        var i, s, r, n, o, a, l;
        ((this.Gc = {
          bootstrap: {
            featureFlags: null != (i = null == (s = e.bootstrap) ? void 0 : s.featureFlags) ? i : void 0,
            featureFlagPayloads: null != (r = null == (n = e.bootstrap) ? void 0 : n.featureFlagPayloads) ? r : void 0,
          },
          remoteRequestsDisabled: t,
          featureFlagsDisabled: !!e.advanced_disable_feature_flags,
          onlyEvaluateSurveyFeatureFlags: !!e.advanced_only_evaluate_survey_feature_flags,
          deduplicateCallsPerSession: !!e.advanced_feature_flags_dedup_per_session,
          cacheTtlMs: e.feature_flag_cache_ttl_ms,
          refreshIntervalMs: null != (o = e.remote_config_refresh_interval_ms) ? o : 3e5,
          idleRefreshBackoff: z(e.remote_config_refresh_interval_ms),
          requestTimeoutMs: e.feature_flag_request_timeout_ms,
          compression: e.disable_compression ? void 0 : "best-available",
          evaluationContexts:
            null != (a = null != (l = e.evaluation_contexts) ? l : e.evaluation_environments) ? a : [],
          flagKeys: j(e.flag_keys) ? e.flag_keys : void 0,
        }),
          !e.evaluation_environments ||
            e.evaluation_contexts ||
            this.Vc ||
            (aJ.warn(
              "evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version.",
            ),
            (this.Vc = !0)),
          z(e.flag_keys) ||
            j(e.flag_keys) ||
            aJ.error("Invalid flag_keys found:", e.flag_keys, "Expected array of non-empty strings"));
      }
      get() {
        return this.Gc;
      }
    };
    let aY = iE("[FeatureFlags]"),
      aZ = iE("[FeatureFlags]", { debugEnabled: !0 }),
      a0 = "\" failed. Feature flags didn't load in time.",
      a1 = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      a2 = "connection_error",
      a3 = (e) => {
        let t = {};
        for (let i = 0; e.length > i; i++) t[e[i]] = !0;
        return t;
      },
      a5 = (e) => {
        let t = {};
        for (let [i, s] of sA(e || {})) s && (t[i] = s);
        return t;
      },
      a4 = (e) =>
        et(e) &&
        (("RangeError" === e.name && 0 === e.message.indexOf("Maximum call stack size exceeded")) ||
          ("InternalError" === e.name && "too much recursion" === e.message)),
      a6 = iE("[Error tracking]"),
      a8 = "webkit-masked-url:",
      a9 = [
        { value: "isolatedAPI.contexts.topHostname", exact: !1 },
        { value: "No response from target", exact: !0 },
      ],
      a7 = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", a8],
      le = ["__firefox__", "__gCrWeb"],
      lt = "Refusing to render web experiment since the viewer is a likely bot",
      li = {
        icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) > -1,
        not_icontains: (e, t) => -1 === t.toLowerCase().indexOf(e.toLowerCase()),
        regex: (e, t) => oN(t, e),
        not_regex: (e, t) => !oN(t, e),
        exact: (e, t) => t === e,
        is_not: (e, t) => t !== e,
      },
      ls = iE("[Conversations]"),
      lr = "Conversations not available yet.";
    function ln(e, t) {
      var i, s, r, n, o, a, l;
      let u = null != (i = null == e ? void 0 : e.flushIntervalMs) ? i : 3e3,
        h = null != (s = null == e ? void 0 : e.maxBufferSize) ? s : 100,
        d = (null == t ? void 0 : t.consoleCapture)
          ? void 0
          : null != (r = null == e ? void 0 : e.maxLogsPerInterval)
            ? r
            : 1e3,
        p = z(d) ? Math.max(h, 2048) : Math.max(h, d),
        f = tb(
          tb(
            {},
            (function () {
              var e, t;
              let i,
                s = "",
                r = "";
              try {
                let e = null == c ? void 0 : c.userAgent;
                e && ([s, r] = te(e));
              } catch (e) {}
              return (
                (e = s),
                (t = r),
                tb(
                  tb(
                    {},
                    (i = (function (e) {
                      if (e) return {}.hasOwnProperty.call(iu, e) ? iu[e] : e;
                    })(e))
                      ? { "os.name": i }
                      : {},
                  ),
                  t ? { "os.version": t } : {},
                )
              );
            })(),
          ),
          null == e ? void 0 : e.resourceAttributes,
        );
      return {
        serviceName:
          null != (n = null != (o = null == f ? void 0 : f["service.name"]) ? o : null == e ? void 0 : e.serviceName)
            ? n
            : null == t
              ? void 0
              : t.serviceNameDefault,
        serviceVersion:
          null != (a = null == f ? void 0 : f["service.version"]) ? a : null == e ? void 0 : e.serviceVersion,
        environment:
          null != (l = null == f ? void 0 : f["deployment.environment"]) ? l : null == e ? void 0 : e.environment,
        resourceAttributes: f,
        beforeSend: null == e ? void 0 : e.beforeSend,
        flushIntervalMs: u,
        maxBufferSize: h,
        maxQueueSize: p,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: u,
        maxLogsPerInterval: d,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0,
      };
    }
    let lo = ["debug", "log", "warn", "error", "info"],
      la = (e) => {
        for (; null == e ? void 0 : e.__rrweb_original__;) e = e.__rrweb_original__;
        return e;
      },
      ll = "console",
      lu = "__posthogHandledLogsRequestError",
      lh = (e, t) => {
        let i = e instanceof Error ? e : Error(t);
        return ((i[lu] = !0), i);
      },
      lc = (e) => !!e && "object" == typeof e && !0 === e[lu],
      ld = iE("[NetworkMetrics]"),
      lp = () => {
        var e;
        return (null == u || null == (e = u.performance) ? void 0 : e.now) ? u.performance.now() : Date.now();
      },
      lf = { "http:": 80, "https:": 443 },
      lg = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      lv = (e, t) => {
        var i;
        let s = String(t);
        return { method: String(e).toUpperCase(), url: (null == (i = r2(s)) ? void 0 : i.href) || s };
      },
      l_ = (e, t, i, s, r, n, o = !1) => {
        try {
          var a, l, u;
          let h,
            c = r();
          if (!c) return;
          let d = i || void 0,
            p = lp() - s,
            f = r2(t.url);
          if (f && "http:" !== f.protocol && "https:" !== f.protocol) return;
          let g = { url: (null == f ? void 0 : f.href) || t.url, method: t.method },
            v = q(c.name) ? c.name(g) : V(c.name) ? c.name : "http.client.request.duration";
          if (!v) return;
          let _ = o && !d ? void 0 : d ? (400 > d ? void 0 : String(d)) : (null == n ? void 0 : n.name) || "_OTHER",
            m = tb(
              tb(
                tb(
                  tb(
                    tb(
                      {},
                      ((u = g.method),
                      (h = lg.has(u) ? u : "_OTHER"),
                      tb(
                        { "http.request.method": h },
                        "_OTHER" === h && u !== h ? { "http.request.method_original": u } : {},
                      )),
                    ),
                    f
                      ? {
                          "server.address":
                            f.hostname.startsWith("[") && f.hostname.endsWith("]")
                              ? f.hostname.slice(1, -1)
                              : f.hostname,
                          "server.port": Number(f.port) || lf[f.protocol],
                          "url.scheme": f.protocol.slice(0, -1),
                          "url.template": f.pathname
                            .split("/")
                            .map((e) =>
                              /^\d+$/.test(e) || (e.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(e)) ? ":id" : e,
                            )
                            .join("/"),
                        }
                      : {},
                  ),
                  d ? { "http.response.status_code": d } : {},
                ),
                _ ? { "error.type": _ } : {},
              ),
              null == (a = c.attributes) ? void 0 : a.call(c, g, { status: d, durationMs: p }),
            );
          null == (l = e.metrics) || l.histogram(v, p, { unit: "ms", attributes: m });
        } catch (e) {
          ld.error("Failed to record network metric", e);
        }
      },
      lm = () => {},
      ly = {
        featureFlags: class {
          constructor(e) {
            ((this.name = "featureFlags"),
              (this.Zc = !1),
              (this.featureFlagEventHandlers = []),
              (this.$ = aY),
              (this.Qc = {}),
              (this.Jc = {}),
              (this.Kc = []),
              (this.Xc = !1),
              (this.Yc = !1),
              (this.td = 0),
              (this.ed = !1),
              (this.nd = !1),
              (this.sd = !1),
              (this.rd = !1),
              (this.od = 0),
              (this.ld = !1),
              (this.an = () => {
                let e = this.ad();
                ((this.od = 0), e && this.reloadFeatureFlags());
              }),
              (this.ud = () => {
                var e, t;
                let i = this.hd,
                  s = null != (e = this.dd) ? e : i;
                z(i) ||
                  z(s) ||
                  this.Ir.remoteRequestsDisabled ||
                  !d ||
                  "hidden" === d.visibilityState ||
                  Date.now() - (null != (t = this.vd) ? t : 0) < s ||
                  ((this.dd = this.ld || !this.Ir.idleRefreshBackoff ? i : Math.min(2 * s, 36e5)),
                  (this.ld = !1),
                  this.reloadFeatureFlags(),
                  this.fd());
              }),
              (this.pd = () => {
                (this.ld && this.dd === this.hd) || this.gd();
              }),
              (this.ln = () => {
                "visible" === (null == d ? void 0 : d.visibilityState) && this.gd();
              }),
              "get" in e
                ? (this.bo = e)
                : ((this._instance = e), (this.md = new aQ(e.config, e.Yl())), (this.bo = this.md)));
          }
          updateConfig(e, t) {
            var i;
            (null == (i = this.md) || i.update(e, t), this.mo && this.yd());
          }
          setup(e) {
            return (
              (this.Eh = e),
              (this.$ = e.logger.createLogger("[FeatureFlags]")),
              aD(e.kv.initialize(), () => {
                this.Eh === e && ((this.Eh = void 0), (this.mo = e), this.bd(e));
              })
            );
          }
          bd(e) {
            var t;
            if (this.mo === e)
              return (
                u && sq(u, "online", this.an),
                this.yd(),
                (this._d = e.registerDynamicEventProperties(() => (this.wd() ? this.Qc : this.Jc))),
                (this.kd =
                  null == (t = this._instance) || null == (t = t.persistence)
                    ? void 0
                    : t.onCrossTabFeatureFlagChange(() => {
                        (this.Sd(), this.xd(), this.Cd());
                      })),
                this.xd(),
                this.initialize()
              );
          }
          gd() {
            ((this.ld = !0), (this.dd = this.hd), this.ud());
          }
          yd() {
            let e = this.Ir.refreshIntervalMs,
              t = !this.Ir.remoteRequestsDisabled && d && !z(e) && e > 0 ? e : void 0;
            (this.Ir.idleRefreshBackoff || (this.dd = t),
              t !== this.hd &&
                (this.$d(),
                z(t) ||
                  ((this.hd = t),
                  (this.dd = t),
                  this.fd(),
                  (null == d ? void 0 : d.addEventListener) &&
                    (sq(d, sS, this.ln),
                    sT(a1, (e) => {
                      sq(d, e, this.pd, { capture: !0 });
                    })))));
          }
          fd() {
            z(this.hd) ||
              (z(this.Td) || clearInterval(this.Td), (this.vd = Date.now()), (this.Td = setInterval(this.ud, this.hd)));
          }
          $d() {
            var e;
            (z(this.Td) ||
              (clearInterval(this.Td),
              (this.Td = void 0),
              null == d || null == (e = d.removeEventListener) || e.call(d, "visibilitychange", this.ln),
              sT(a1, (e) => {
                var t;
                null == d || null == (t = d.removeEventListener) || t.call(d, e, this.pd, { capture: !0 });
              })),
              (this.hd = void 0),
              (this.dd = void 0),
              (this.ld = !1),
              (this.vd = void 0));
          }
          destroy() {
            this.Id();
          }
          dispose() {
            this.Id();
          }
          Id() {
            var e, t;
            (this.$d(),
              this.td++,
              (this.nd = !1),
              (this.Eh = void 0),
              this.mo &&
                (this.Md(),
                null == (e = this._d) || e.dispose(),
                (this._d = void 0),
                null == (t = this.kd) || t.call(this),
                (this.kd = void 0),
                (this.Kc = []),
                null == u || u.removeEventListener("online", this.an),
                (this.mo = void 0)));
          }
          get Ir() {
            return this.bo.get();
          }
          Ed(e) {
            var t;
            return this.Pd && e in this.Pd ? this.Pd[e] : null == (t = this.mo) ? void 0 : t.kv.get(e);
          }
          Sd() {
            return !!this.Pd && ((this.Pd = void 0), !0);
          }
          Rd() {
            var e;
            return !z(null == (e = this.mo) ? void 0 : e.kv.get("$enabled_feature_flags")) && this.Sd();
          }
          At(e) {
            this.Ad(() => {
              var t;
              return null == (t = this.mo) ? void 0 : t.kv.set(e);
            });
          }
          Fd(e, t, i) {
            var s;
            if (!(null == (s = this._instance) ? void 0 : s.persistence) || !e.$enabled_feature_flags) return;
            let r = this.Ed("$enabled_feature_flags") || {},
              n = e.$enabled_feature_flags || {},
              o = t.flags || t.featureFlags,
              a = t.flags
                ? Object.entries(t.flags)
                    .filter(([, e]) => !(null == e ? void 0 : e.failed))
                    .map(([e]) => e)
                : [],
              l = !!t.errorsWhileComputingFlags && !!t.flags,
              u = l
                ? a
                : i && !j(o)
                  ? Object.keys(o || {})
                  : Array.from(new Set([...Object.keys(r), ...Object.keys(n)])),
              h = this.Ed("$feature_flag_payloads") || {},
              c = e.$feature_flag_payloads || {},
              d = l || i ? u : Array.from(new Set([...Object.keys(h), ...Object.keys(c)])),
              p = !l && !i,
              f = !!p || u,
              g = { [iZ]: f, [iY]: f, [i2]: !!p || d };
            for (let t of (e.$feature_flag_details && (g[i1] = f), [i3, su, i5])) z(e[t]) || (g[t] = !0);
            this._instance.persistence.markCrossTabFeatureFlagChanges(g);
          }
          Lt(e) {
            this.Ad(() => {
              var t;
              return null == (t = this.mo) ? void 0 : t.kv.remove(e);
            });
          }
          Ad(e) {
            try {
              e();
            } catch (e) {
              this.$.error("Failed to update feature flag persistence", e);
            }
          }
          xd() {
            let e = {};
            for (let t of [iZ, i2, i3, i4]) {
              let i = this.Ed(t);
              z(i) || (e[t] = i);
            }
            this.Qc = e;
            let t = tb({}, e),
              i = this.Ed(iY);
            if (i) for (let [e, s] of Object.entries(i)) t[`$feature/${e}`] = s;
            this.Jc = t;
          }
          wd() {
            let e = this.Ir.cacheTtlMs;
            if (!e || 0 >= e) return !1;
            let t = this.Ed(su);
            return "number" != typeof t || Date.now() - t > e;
          }
          Od() {
            return (
              !!this.wd() &&
              (this.rd ||
                this.Yc ||
                ((this.rd = !0),
                this.$.warn("Feature flag cache is stale, triggering refresh..."),
                this.reloadFeatureFlags()),
              !0)
            );
          }
          Dd() {
            let e = this.Ir.evaluationContexts;
            return (null == e ? void 0 : e.length)
              ? e.filter((e) => {
                  let t = e && "string" == typeof e && e.trim().length > 0;
                  return (t || this.$.error("Invalid evaluation context found:", e, "Expected non-empty string"), t);
                })
              : [];
          }
          Ld() {
            let e = this.Ir.flagKeys;
            if (!z(e))
              return e.filter((e) => {
                let t = e && "string" == typeof e && e.trim().length > 0;
                return (t || this.$.error("Invalid flag key found:", e, "Expected non-empty string"), t);
              });
          }
          initialize() {
            var e, t, i, s;
            let r = this.Ir,
              n = null != (e = null == (t = r.bootstrap) ? void 0 : t.featureFlags) ? e : {};
            if (Object.keys(n).length) {
              let e = null != (i = null == (s = r.bootstrap) ? void 0 : s.featureFlagPayloads) ? i : {},
                t = Object.keys(n)
                  .filter((e) => !z(n[e]))
                  .reduce((e, t) => ((e[t] = n[t]), e), {}),
                o = Object.keys(e)
                  .filter((e) => t[e])
                  .reduce((t, i) => ((t[i] = e[i]), t), {});
              return this.Nd({ featureFlags: t, featureFlagPayloads: o }, void 0, { persist: !1 });
            }
          }
          updateFlags(e, t, i) {
            var s, r;
            let n = (null == i ? void 0 : i.merge) && null != (s = this.Ed("$enabled_feature_flags")) ? s : {},
              o = (null == i ? void 0 : i.merge) && null != (r = this.Ed("$feature_flag_payloads")) ? r : {},
              a = tb(tb({}, n), e),
              l = tb(tb({}, o), t),
              u = {};
            for (let [e, t] of Object.entries(a))
              u[e] = {
                key: e,
                enabled: t1(t),
                variant: t2(t),
                reason: void 0,
                metadata: z(null == l ? void 0 : l[e])
                  ? void 0
                  : { id: 0, version: void 0, description: void 0, payload: l[e] },
              };
            this.Nd({ flags: u });
          }
          get hasLoadedFlags() {
            return this.Xc;
          }
          getFlags() {
            return Object.keys(this.getFlagVariants());
          }
          getFlagsWithDetails() {
            let e = this.Ed(i1),
              t = this.Ed(i4),
              i = this.Ed(i6);
            if (!i && !t) return e || {};
            let s = sR({}, e || {});
            for (let e of [...new Set([...Object.keys(i || {}), ...Object.keys(t || {})])]) {
              var r, n;
              let o = s[e],
                a = null == t ? void 0 : t[e],
                l = z(a) ? null != (r = null == o ? void 0 : o.enabled) && r : !!a,
                u = z(a) ? (null == o ? void 0 : o.variant) : "string" == typeof a ? a : void 0,
                h = null == i ? void 0 : i[e],
                c = tb(
                  tb({}, o),
                  {},
                  { enabled: l, variant: l ? (null != u ? u : null == o ? void 0 : o.variant) : void 0 },
                );
              (l !== (null == o ? void 0 : o.enabled) && (c.original_enabled = null == o ? void 0 : o.enabled),
                u !== (null == o ? void 0 : o.variant) && (c.original_variant = null == o ? void 0 : o.variant),
                h &&
                  (c.metadata = tb(
                    tb({}, null == o ? void 0 : o.metadata),
                    {},
                    { payload: h, original_payload: null == o || null == (n = o.metadata) ? void 0 : n.payload },
                  )),
                (s[e] = c));
            }
            return (
              this.Zc ||
                (this.$.warn(" Overriding feature flag details!", {
                  flagDetails: e,
                  overriddenPayloads: i,
                  finalDetails: s,
                }),
                (this.Zc = !0)),
              s
            );
          }
          getAllFeatureFlags() {
            let e = this.getFlagVariants(),
              t = this.getFlagPayloads();
            return Object.keys(e).map((i) => {
              let s = e[i];
              return { key: i, enabled: t1(s), variant: t2(s), payload: t0(t[i]) };
            });
          }
          getFlagVariants() {
            let e = this.Ed(iY),
              t = this.Ed(i4);
            if (!t) return e || {};
            let i = sR({}, e || {}),
              s = Object.keys(t);
            for (let e = 0; s.length > e; e++) i[s[e]] = t[s[e]];
            return (
              this.Zc ||
                (this.$.warn(" Overriding feature flags!", { enabledFlags: e, overriddenFlags: t, finalFlags: i }),
                (this.Zc = !0)),
              i
            );
          }
          getFlagPayloads() {
            let e = this.Ed(i2),
              t = this.Ed(i6);
            if (!t) return e || {};
            let i = sR({}, e || {}),
              s = Object.keys(t);
            for (let e = 0; s.length > e; e++) i[s[e]] = t[s[e]];
            return (
              this.Zc ||
                (this.$.warn(" Overriding feature flag payloads!", {
                  flagPayloads: e,
                  overriddenPayloads: t,
                  finalPayloads: i,
                }),
                (this.Zc = !0)),
              i
            );
          }
          reloadFeatureFlags() {
            this.ed ||
              this.Ir.featureFlagsDisabled ||
              this.ad() ||
              (this.Yc && (this.nd = !0),
              this.qd ||
                (this.Kc.slice().forEach((e) => {
                  try {
                    e();
                  } catch (e) {
                    this.$.error("Error while running feature flags reloading callback", e);
                  }
                }),
                (this.qd = setTimeout(() => {
                  this.jd();
                }, 5))));
          }
          Md() {
            (clearTimeout(this.qd), (this.qd = void 0));
          }
          onReloading(e) {
            return (
              this.Kc.push(e),
              () => {
                this.Kc = this.Kc.filter((t) => t !== e);
              }
            );
          }
          ensureFlagsLoaded() {
            this.Xc || this.Yc || this.qd || this.reloadFeatureFlags();
          }
          setAnonymousDistinctId(e) {
            this.$anon_distinct_id = e;
          }
          setReloadingPaused(e) {
            this.ed = e;
          }
          resetFlagCallReported() {
            this.Lt(so);
          }
          jd(e) {
            this.Md();
            let t = this.mo;
            if (!t || this.Ir.remoteRequestsDisabled || this.ad()) return;
            if (this.Yc) return void (this.nd = !0);
            let i = {
              token: t.projectToken,
              distinct_id: t.distinctId,
              groups: t.groups,
              $anon_distinct_id: this.$anon_distinct_id,
              person_properties: tb(
                tb(tb({}, t.initialPersonProperties), this.Ed("$stored_person_properties") || {}),
                {},
                { $lib: t.library.name, $lib_version: t.library.version },
              ),
              group_properties: this.Ed(i9),
              timezone: nh(),
            };
            (z(t.deviceId) || (i.$device_id = t.deviceId),
              ((null == e ? void 0 : e.disableFlags) || this.Ir.featureFlagsDisabled) && (i.disable_flags = !0));
            let s = this.Dd();
            s.length && (i.evaluation_contexts = s);
            let r = this.Ld();
            z(r) || (i.flag_keys = r);
            let n = this.Ir.onlyEvaluateSurveyFeatureFlags,
              o = this.td;
            this.Yc = !0;
            let a = () => {
                this.nd && ((this.nd = !1), this.jd());
              },
              l = (e) => {
                var t, s;
                let r = null != (t = e.json) ? t : {},
                  l = 200 !== e.statusCode;
                if (((this.Yc = !1), o !== this.td)) return void a();
                if (
                  (this.Bd(e.statusCode),
                  l || this.nd || (this.$anon_distinct_id = void 0),
                  i.disable_flags && !this.nd)
                )
                  return;
                this.sd = !l;
                let u = [];
                (e.error
                  ? u.push(
                      e.error instanceof Error && "AbortError" === e.error.name
                        ? "timeout"
                        : e.error instanceof Error
                          ? a2
                          : "unknown_error",
                    )
                  : 200 !== e.statusCode && u.push(`api_error_${e.statusCode}`),
                  r.errorsWhileComputingFlags && u.push("errors_while_computing_flags"));
                let h = !!(null == (s = r.quotaLimited) ? void 0 : s.includes("feature_flags"));
                (h && u.push("quota_limited"),
                  this.At({ [sl]: u }),
                  h
                    ? this.$.warn(
                        "You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.",
                      )
                    : i.disable_flags || this.Nd(r, l, { partialResponse: n }),
                  a());
              },
              u = (e) => {
                ((this.Yc = !1),
                  o === this.td &&
                    (this.At({ [sl]: [a2] }), this.$.error("Feature flag request failed", e), this.Rd() && this.Cd(!0)),
                  a());
              };
            try {
              t.sendRequest("/flags/?v=2" + (n ? "&only_evaluate_survey_feature_flags=true" : ""), {
                target: "flags",
                method: "POST",
                body: i,
                compression: this.Ir.compression,
                sentAt: "body",
                timeoutMs: this.Ir.requestTimeoutMs,
              })
                .then(l)
                .catch(u);
            } catch (e) {
              u(e);
            }
          }
          ad() {
            return r6(this.od, 3);
          }
          Bd(e) {
            this.od = r8(e, this.od, 3, () =>
              this.$.warn(
                "Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.",
              ),
            );
          }
          getFeatureFlag(e, t = {}) {
            var i;
            if (t.fresh && !this.sd) return;
            if (!(this.Xc || (this.getFlags() && this.getFlags().length > 0)))
              return void this.$.warn('getFeatureFlag for key "' + e + a0);
            if (this.Od()) return;
            let s = this.getFeatureFlagResult(e, t);
            return null != (i = null == s ? void 0 : s.variant) ? i : null == s ? void 0 : s.enabled;
          }
          getFeatureFlagDetails(e) {
            return this.getFlagsWithDetails()[e];
          }
          getFeatureFlagPayload(e) {
            let t = this.getFeatureFlagResult(e, { send_event: !1 });
            return null == t ? void 0 : t.payload;
          }
          getFeatureFlagResult(e, t = {}) {
            var i, s, r, n, o, a, l, u, h, c, d, p, f, g;
            if (t.fresh && !this.sd) return;
            if (!(this.Xc || (this.getFlags() && this.getFlags().length > 0)))
              return void this.$.warn('getFeatureFlagResult for key "' + e + a0);
            if (this.Od()) return;
            let v = this.getFlagVariants(),
              _ = e in v,
              m = v[e],
              y = this.getFlagPayloads()[e],
              b = String(m),
              w = this.Ed("$feature_flag_request_id") || void 0,
              x = this.Ed("$feature_flag_evaluated_at") || void 0,
              k,
              E = this.Ed("$flag_call_reported") || {};
            if (this.Ir.deduplicateCallsPerSession) {
              let e = null == (i = this.mo) ? void 0 : i.session.sessionId,
                t = this.Ed(sa);
              e && e !== t && ((E = {}), (k = e));
            }
            if (!t.send_event && "send_event" in t) k && this.At({ [so]: E, [sa]: k });
            else if (e in E && E[e].includes(b)) k && this.At({ [so]: E, [sa]: k });
            else {
              (j(E[e]) ? E[e].push(b) : (E[e] = [b]), this.At(tb({ [so]: E }, k ? { [sa]: k } : {})));
              let t = this.getFeatureFlagDetails(e),
                i = [...(null != (s = this.Ed("$feature_flag_errors")) ? s : [])];
              z(m) && i.push("flag_missing");
              let v = {
                $feature_flag: e,
                $feature_flag_response: m,
                $feature_flag_payload: null != y ? y : null,
                $feature_flag_request_id: w,
                $feature_flag_evaluated_at: x,
                $feature_flag_bootstrapped_response:
                  null != (r = null == (n = this.Ir.bootstrap) || null == (n = n.featureFlags) ? void 0 : n[e])
                    ? r
                    : null,
                $feature_flag_bootstrapped_payload:
                  null != (o = null == (a = this.Ir.bootstrap) || null == (a = a.featureFlagPayloads) ? void 0 : a[e])
                    ? o
                    : null,
                $used_bootstrap_value: !this.sd,
              };
              (z(null == t || null == (l = t.metadata) ? void 0 : l.has_experiment) ||
                (v.$feature_flag_has_experiment = t.metadata.has_experiment),
                z(null == t || null == (u = t.metadata) ? void 0 : u.version) ||
                  (v.$feature_flag_version = t.metadata.version));
              let _ =
                null != (h = null == t || null == (c = t.reason) ? void 0 : c.description)
                  ? h
                  : null == t || null == (d = t.reason)
                    ? void 0
                    : d.code;
              (_ && (v.$feature_flag_reason = _),
                (null == t || null == (p = t.metadata) ? void 0 : p.id) && (v.$feature_flag_id = t.metadata.id),
                (z(null == t ? void 0 : t.original_variant) && z(null == t ? void 0 : t.original_enabled)) ||
                  (v.$feature_flag_original_response = z(t.original_variant) ? t.original_enabled : t.original_variant),
                (null == t || null == (f = t.metadata) ? void 0 : f.original_payload) &&
                  (v.$feature_flag_original_payload =
                    null == t || null == (g = t.metadata) ? void 0 : g.original_payload),
                i.length && (v.$feature_flag_error = i.join(",")),
                this.Hd(v));
            }
            return _ ? { key: e, enabled: !!m, variant: "string" == typeof m ? m : void 0, payload: t0(y) } : void 0;
          }
          Hd(e) {
            try {
              var t;
              null == (t = this.mo) || t.capture("$feature_flag_called", e);
            } catch (e) {
              this.$.error("Failed to capture feature flag call", e);
            }
          }
          getRemoteConfigPayload(e, t) {
            this.zd(e, t);
          }
          zd(e, t) {
            var i = this;
            return ea(function* () {
              let s,
                r = i.mo;
              if (!r) return;
              let n = {
                  distinct_id: r.distinctId,
                  token: r.projectToken,
                  person_properties: { $lib: r.library.name, $lib_version: r.library.version },
                },
                o = i.Dd();
              o.length && (n.evaluation_contexts = o);
              let a = i.Ld();
              z(a) || (n.flag_keys = a);
              try {
                var l;
                let t =
                  null ==
                  (l = (yield r.sendRequest("/flags/?v=2", {
                    target: "flags",
                    method: "POST",
                    body: n,
                    compression: i.Ir.compression,
                    sentAt: "body",
                    timeoutMs: i.Ir.requestTimeoutMs,
                  })).json)
                    ? void 0
                    : l.featureFlagPayloads;
                s = (null == t ? void 0 : t[e]) || void 0;
              } catch (e) {
                return void i.$.error("Remote config feature flag request failed", e);
              }
              try {
                t(s);
              } catch (e) {
                i.$.error("Remote config feature flag callback failed", e);
              }
            })();
          }
          isFeatureEnabled(e, t = {}) {
            if (t.fresh && !this.sd) return t.defaultValue;
            if (!(this.Xc || (this.getFlags() && this.getFlags().length > 0)))
              return (this.$.warn('isFeatureEnabled for key "' + e + a0), t.defaultValue);
            let i = this.getFeatureFlag(e, t);
            return z(i) ? t.defaultValue : !!i;
          }
          addFeatureFlagsHandler(e) {
            this.featureFlagEventHandlers.push(e);
          }
          removeFeatureFlagsHandler(e) {
            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t) => t !== e);
          }
          receivedFeatureFlags(e, t, i) {
            this.Nd(e, t, i);
          }
          Nd(e, t, i) {
            if (!this.mo) return;
            this.Xc = !0;
            let s = ((e, t = {}, i = {}, s = {}, r, n = aY) => {
              let o = ((e, t) => {
                  let i = e.flags;
                  if (i) {
                    let t = Object.fromEntries(
                        Object.keys(i).map((e) => {
                          var t;
                          return [e, null != (t = i[e].variant) ? t : i[e].enabled];
                        }),
                      ),
                      s = Object.fromEntries(
                        Object.keys(i)
                          .filter((e) => i[e].enabled)
                          .filter((e) => {
                            var t;
                            return !z(null == (t = i[e].metadata) ? void 0 : t.payload);
                          })
                          .map((e) => {
                            var t;
                            return [e, null == (t = i[e].metadata) ? void 0 : t.payload];
                          }),
                      );
                    return tb(tb({}, e), {}, { featureFlags: t, featureFlagPayloads: s });
                  }
                  return (
                    e.featureFlags &&
                      t.warn(
                        "Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version",
                      ),
                    e
                  );
                })(e, n),
                a = o.flags,
                l = o.featureFlags,
                u = o.featureFlagPayloads;
              if (!l) return;
              let h = e.requestId,
                c = e.evaluatedAt;
              if (j(l)) {
                n.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                let e = {};
                if (l) for (let t = 0; l.length > t; t++) e[l[t]] = !0;
                return { [iZ]: l, [iY]: e, [i5]: !1 };
              }
              let d = l,
                p = u,
                f = a;
              if (null == r ? void 0 : r.partialResponse) {
                let e = Object.keys(d),
                  r = p || {};
                ((d = tb(tb({}, t), d)),
                  (p = tb(tb({}, i), r)),
                  e.forEach((e) => {
                    e in r || null == p || delete p[e];
                  }),
                  (f = tb(tb({}, s), f)));
              } else if (e.errorsWhileComputingFlags)
                if (a) {
                  let e = new Set(
                    Object.keys(a).filter((e) => {
                      var t;
                      return !(null == (t = a[e]) ? void 0 : t.failed);
                    }),
                  );
                  d = tb(tb({}, t), Object.fromEntries(Object.entries(d).filter(([t]) => e.has(t))));
                  let r = Object.fromEntries(Object.entries(p || {}).filter(([t]) => e.has(t)));
                  ((p = tb(tb({}, i), r)),
                    e.forEach((e) => {
                      e in r || null == p || delete p[e];
                    }),
                    (f = tb(tb({}, s), Object.fromEntries(Object.entries(f || {}).filter(([t]) => e.has(t))))));
                } else ((d = tb(tb({}, t), d)), (p = tb(tb({}, i), p)), (f = tb(tb({}, s), f)));
              return tb(
                tb(
                  {
                    [iZ]: Object.keys(a5(d)),
                    [iY]: d || {},
                    [i2]: p || {},
                    [i1]: f || {},
                    [i5]: !0 === e.minimalFlagCalledEvents,
                  },
                  h ? { [i3]: h } : {},
                ),
                c ? { [su]: c } : {},
              );
            })(e, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), i, this.$);
            if (s)
              if (!1 === (null == i ? void 0 : i.persist)) {
                let e = !z(this.mo.kv.get(iY));
                ((this.Pd = s), e || this.At(s));
              } else (this.Sd(), this.Fd(s, e, !!(null == i ? void 0 : i.partialResponse)), this.At(s));
            else t && this.Rd();
            (t || (this.rd = !1), this.Cd(t));
          }
          override(e, t = !1) {
            (this.$.warn("override is deprecated. Please use overrideFeatureFlags instead."),
              this.overrideFeatureFlags({ flags: e, suppressWarning: t }));
          }
          overrideFeatureFlags(e) {
            this.Ud(e);
          }
          Ud(e) {
            if (this.mo) {
              if (!1 === e) return (this.Lt([i4, i6]), this.Cd(), void aZ.info("All overrides cleared"));
              if (j(e)) return (this.At({ [i4]: a3(e) }), this.Cd(), void aZ.info("Flag overrides set", { flags: e }));
              if (e && "object" == typeof e && ("flags" in e || "payloads" in e)) {
                var t;
                this.Zc = !!(null != (t = e.suppressWarning) && t);
                let i = {},
                  s = e.flags,
                  r = e.payloads;
                return (
                  s && (i[i4] = j(s) ? a3(s) : s),
                  r && (i[i6] = r),
                  Object.keys(i).length && this.At(i),
                  !1 === s && !1 === r ? this.Lt([i4, i6]) : !1 === s ? this.Lt(i4) : !1 === r && this.Lt(i6),
                  this.Cd(),
                  !1 === s ? aZ.info("Flag overrides cleared") : s && aZ.info("Flag overrides set", { flags: s }),
                  void (!1 === r
                    ? aZ.info("Payload overrides cleared")
                    : r && aZ.info("Payload overrides set", { payloads: r }))
                );
              }
              if (e && "object" == typeof e)
                return (this.At({ [i4]: e }), this.Cd(), void aZ.info("Flag overrides set", { flags: e }));
              this.$.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: e });
            } else this.$.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
          }
          onFeatureFlags(e) {
            if ((this.addFeatureFlagsHandler(e), this.Xc)) {
              let { flags: t, flagVariants: i } = this.Wd();
              try {
                e(t, i);
              } catch (e) {
                this.$.error("Error while running feature flags callback", e);
              }
            }
            return () => this.removeFeatureFlagsHandler(e);
          }
          updateEarlyAccessFeatureEnrollment(e, t, i) {
            var s, r;
            let n = (this.Ed("$early_access_features") || []).find((t) => t.flagKey === e),
              o = { [`$feature_enrollment/${e}`]: t },
              a = { $feature_flag: e, $feature_enrollment: t, $set: o };
            (n && (a.$early_access_feature_name = n.name), i && (a.$feature_enrollment_stage = i));
            let l = tb(tb({}, this.getFlagVariants()), {}, { [e]: t });
            (null == (s = this._instance) ||
              null == (s = s.persistence) ||
              s.markCrossTabFeatureFlagChanges({
                $active_feature_flags: [e],
                $enabled_feature_flags: [e],
                $stored_person_properties: Object.keys(o),
              }),
              this.At({
                [iZ]: Object.keys(a5(l)),
                [iY]: l,
                [i8]: tb(tb({}, this.Ed("$stored_person_properties") || {}), o),
              }),
              this.Cd());
            try {
              null == (r = this.mo) || r.capture("$feature_enrollment_update", a);
            } catch (e) {
              this.$.error("Failed to capture early access feature enrollment", e);
            }
          }
          getEarlyAccessFeatures(e, t = !1, i) {
            let s = this.Ed(i0);
            !s || t ? this.Vd(e, i) : e(s);
          }
          Vd(e, t) {
            var i = this;
            return ea(function* () {
              let s,
                r = i.mo;
              if (!r) return;
              let n = t ? `&${t.map((e) => `stage=${e}`).join("&")}` : "";
              try {
                let e = yield r.sendRequest(`/api/early_access_features/?token=${r.projectToken}${n}`, {
                  target: "api",
                  method: "GET",
                  sentAt: "query",
                });
                if (!e.json) return;
                ((s = e.json.earlyAccessFeatures), i.At({ [i0]: s }));
              } catch (e) {
                return void i.$.error("Early access feature request failed", e);
              }
              try {
                e(s);
              } catch (e) {
                i.$.error("Early access feature callback failed", e);
              }
            })();
          }
          Wd() {
            let e = this.getFlags(),
              t = this.getFlagVariants();
            return {
              flags: e.filter((e) => t[e]),
              flagVariants: Object.keys(t)
                .filter((e) => t[e])
                .reduce((e, i) => ((e[i] = t[i]), e), {}),
            };
          }
          Cd(e) {
            this.xd();
            let { flags: t, flagVariants: i } = this.Wd();
            this.featureFlagEventHandlers.forEach((s) => {
              try {
                s(t, i, { errorsLoading: e });
              } catch (e) {
                this.$.error("Error while running feature flags callback", e);
              }
            });
          }
          setPersonPropertiesForFlags(e, t = !0) {
            this.Gd(e, t);
          }
          Gd(e, t = !0) {
            let i = this.Ed("$stored_person_properties") || {},
              s = (null == e ? void 0 : e.$set) || ((null == e ? void 0 : e.$set_once) ? {} : e),
              r = null == e ? void 0 : e.$set_once,
              n = {};
            if (r) for (let e in r) ({}).hasOwnProperty.call(r, e) && (e in i || (n[e] = r[e]));
            (this.At({ [i8]: tb(tb(tb({}, i), n), s) }), t && this.reloadFeatureFlags());
          }
          unsetPersonPropertiesForFlags(e, t = !0) {
            let i = tb({}, this.Ed("$stored_person_properties") || {});
            (e.forEach((e) => {
              delete i[e];
            }),
              this.At({ [i8]: i }),
              t && this.reloadFeatureFlags());
          }
          resetPersonPropertiesForFlags(e = !0) {
            (this.Lt(i8), e && this.reloadFeatureFlags());
          }
          setGroupPropertiesForFlags(e, t = !0) {
            let i = this.Ed("$stored_group_properties") || {},
              s = tb({}, i);
            for (let t of Object.keys(e)) s[t] = tb(tb({}, i[t]), e[t]);
            (this.At({ [i9]: s }), t && this.reloadFeatureFlags());
          }
          resetGroupPropertiesForFlags(e) {
            if (e) {
              let t = this.Ed("$stored_group_properties") || {};
              this.At({ [i9]: tb(tb({}, t), {}, { [e]: {} }) });
            } else this.Lt(i9);
          }
          reset() {
            (this.td++,
              (this.nd = !1),
              (this.Qc = {}),
              (this.Jc = {}),
              (this.Pd = void 0),
              (this.Xc = !1),
              (this.ed = !1),
              (this.sd = !1),
              (this.$anon_distinct_id = void 0),
              this.Md(),
              (this.Zc = !1),
              (this.od = 0));
          }
        },
      },
      lb = tb(
        {
          productTours: class {
            get Ca() {
              return this._instance.persistence;
            }
            constructor(e) {
              ((this.af = null), (this.uf = null), (this._instance = e));
            }
            initialize() {
              this.loadIfEnabled();
            }
            onRemoteConfig(e) {
              if (!e.ok) return;
              let t = e.config;
              if ("productTours" in t) {
                var i, s;
                if ((this.Ca && this.Ca.register({ [iW]: !!t.productTours }), !aM(this._instance)))
                  return (
                    (!this.af && G(null == (i = this.Ca) ? void 0 : i.props.ph_product_tours)) ||
                      aT.info("product tours disabled; stopping and clearing cached tours"),
                    null == (s = this.af) || s.stop(),
                    (this.af = null),
                    void this.clearCache()
                  );
                this.loadIfEnabled();
              }
            }
            loadIfEnabled() {
              !this.af && aM(this._instance) && this.qo(() => this.hf());
            }
            qo(e) {
              var t, i, s;
              (null == (t = w.__PosthogExtensions__) ? void 0 : t.generateProductTours)
                ? e()
                : null == (i = w.__PosthogExtensions__) ||
                  null == (s = i.loadExternalDependency) ||
                  s.call(i, this._instance, "product-tours", (t) => {
                    t ? aT.error("Could not load product tours script", t) : e();
                  });
            }
            hf() {
              var e;
              !this.af &&
                (null == (e = w.__PosthogExtensions__) ? void 0 : e.generateProductTours) &&
                (this.af = w.__PosthogExtensions__.generateProductTours(this._instance, !0));
            }
            getProductTours(e, t = !1) {
              if (j(this.uf) && !t) return void e(this.uf, { isLoaded: !0 });
              let i = this.Ca;
              if (i) {
                let s = i.props[sn];
                if (j(s) && !t) return ((this.uf = s), void e(s, { isLoaded: !0 }));
              }
              this._instance._send_request({
                url: this._instance.requestRouter.endpointFor(
                  "api",
                  `/api/product_tours/?token=${this._instance.config.token}`,
                ),
                method: "GET",
                timestampMode: "query",
                callback: (t) => {
                  if (!aM(this._instance)) return void e([], { isLoaded: !0 });
                  let s = t.statusCode;
                  if (200 !== s || !t.json) {
                    let i = `Product Tours API could not be loaded, status: ${s}`;
                    return (0 === s ? t.error || aT.warn(i) : aT.error(i), void e([], { isLoaded: !1, error: i }));
                  }
                  let r = j(t.json.product_tours) ? t.json.product_tours : [];
                  ((this.uf = r), i && i.register({ [sn]: r }), e(r, { isLoaded: !0 }));
                },
              });
            }
            getActiveProductTours(e) {
              G(this.af)
                ? e([], { isLoaded: !1, error: "Product tours not loaded" })
                : this.af.getActiveProductTours(e);
            }
            showProductTour(e) {
              var t;
              null == (t = this.af) || t.showTourById(e);
            }
            previewTour(e) {
              this.af
                ? this.af.previewTour(e)
                : this.qo(() => {
                    var t;
                    (this.hf(), null == (t = this.af) || t.previewTour(e));
                  });
            }
            dismissProductTour() {
              var e;
              null == (e = this.af) || e.dismissTour("user_clicked_skip");
            }
            nextStep() {
              var e;
              null == (e = this.af) || e.nextStep();
            }
            previousStep() {
              var e;
              null == (e = this.af) || e.previousStep();
            }
            clearCache() {
              var e;
              ((this.uf = null), null == (e = this.Ca) || e.unregister("ph_product_tours"));
            }
            resetTour(e) {
              var t;
              null == (t = this.af) || t.resetTour(e);
            }
            resetAllTours() {
              var e;
              null == (e = this.af) || e.resetAllTours();
            }
            cancelPendingTour(e) {
              var t;
              null == (t = this.af) || t.cancelPendingTour(e);
            }
          },
        },
        ly,
      ),
      lw = tb(
        {
          surveys: class extends aq {
            constructor(e) {
              (super(new aW(e), {
                get projectToken() {
                  return e.config.token;
                },
                kv: new aU(e),
              }),
                (this._instance = e));
            }
            Oh(e, t) {
              let i = t.query ? oc(e, t.query) : e;
              return new Promise((e) => {
                var s;
                this._instance._send_request({
                  method: t.method,
                  url: this._instance.requestRouter.endpointFor(null != (s = t.target) ? s : "api", i),
                  data: t.body,
                  headers: t.headers,
                  timeout: t.timeoutMs,
                  fireCallbackOnDrop: !0,
                  transport: t.transport,
                  compression: t.compression,
                  timestampMode: t.sentAt,
                  callback: e,
                });
              });
            }
          },
        },
        ly,
      ),
      lx = tb(
        {
          experiments: class e {
            get Ir() {
              return this._instance.config;
            }
            constructor(t) {
              ((this._instance = t),
                (this.getWebExperimentsAndEvaluateDisplayLogic = (t = !1) => {
                  this.getWebExperiments((t) => {
                    (e.Pf("retrieved web experiments from the server"),
                      (this.Rf = new Map()),
                      t.forEach((t) => {
                        if (t.feature_flag_key) {
                          var i;
                          this.Rf &&
                            (e.Pf("setting flag key ", t.feature_flag_key, " to web experiment ", t),
                            null == (i = this.Rf) || i.set(t.feature_flag_key, t));
                          let s = this._instance.getFeatureFlag(t.feature_flag_key);
                          V(s) && t.variants[s] && this.Af(t.name, s, t.variants[s].transforms);
                        } else if (t.variants)
                          for (let i in t.variants) {
                            let s = t.variants[i];
                            e.Ff(s, this._instance) && this.Af(t.name, i, s.transforms);
                          }
                      }));
                  }, t);
                }),
                this._instance.onFeatureFlags((e) => {
                  this.onFeatureFlags(e);
                }));
            }
            initialize() {}
            onFeatureFlags(t) {
              if (this._is_bot()) e.Pf(lt);
              else if (!this.Ir.disable_web_experiments) {
                if (G(this.Rf)) return ((this.Rf = new Map()), this.loadIfEnabled(), void this.previewWebExperiment());
                (e.Pf("applying feature flags", t),
                  t.forEach((e) => {
                    var t, i;
                    if (this.Rf && (null == (t = this.Rf) ? void 0 : t.has(e))) {
                      let t = this._instance.getFeatureFlag(e),
                        s = null == (i = this.Rf) ? void 0 : i.get(e);
                      t && (null == s ? void 0 : s.variants[t]) && this.Af(s.name, t, s.variants[t].transforms);
                    }
                  }));
              }
            }
            previewWebExperiment() {
              let t = e.getWindowLocation();
              if (null == t ? void 0 : t.search) {
                let i = r3(null == t ? void 0 : t.search, "__experiment_id"),
                  s = r3(null == t ? void 0 : t.search, "__experiment_variant");
                i &&
                  s &&
                  (e.Pf(`previewing web experiments ${i} && ${s}`),
                  this.getWebExperiments(
                    (e) => {
                      this.Of(parseInt(i), s, e);
                    },
                    !1,
                    !0,
                  ));
              }
            }
            loadIfEnabled() {
              this.Ir.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
            }
            getWebExperiments(e, t, i) {
              if (this.Ir.disable_web_experiments && !i) return e([]);
              let s = this._instance.get_property("$web_experiments");
              if (s && !t) return e(s);
              this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this.Ir.token}`),
                method: "GET",
                timestampMode: "query",
                callback: (t) => e((200 === t.statusCode && t.json && t.json.experiments) || []),
              });
            }
            Of(t, i, s) {
              let r = s.filter((e) => e.id === t);
              r &&
                r.length > 0 &&
                (e.Pf(`Previewing web experiment [${r[0].name}] with variant [${i}]`),
                this.Af(r[0].name, i, r[0].variants[i].transforms));
            }
            static Ff(t, i) {
              return !G(t.conditions) && e.Df(t, i) && e.Lf(t);
            }
            static Df(t, i) {
              var s, r, n, o;
              if (G(t.conditions) || G(null == (s = t.conditions) ? void 0 : s.url)) return !0;
              let a = e.getWindowLocation();
              if (a) {
                let e = rn(i, a.href);
                return (
                  !(null == (r = t.conditions) ? void 0 : r.url) ||
                  li[null != (n = null == (o = t.conditions) ? void 0 : o.urlMatchType) ? n : "icontains"](
                    t.conditions.url,
                    e,
                  )
                );
              }
              return !1;
            }
            static getWindowLocation() {
              return null == u ? void 0 : u.location;
            }
            static Lf(e) {
              var t, i, s, r, n, o, a, l, u;
              if (G(e.conditions) || G(null == (t = e.conditions) ? void 0 : t.utm)) return !0;
              let h = ni();
              if (h.utm_source) {
                let t =
                    !(null == (i = e.conditions) || null == (i = i.utm) ? void 0 : i.utm_campaign) ||
                    (null == (s = e.conditions) || null == (s = s.utm) ? void 0 : s.utm_campaign) == h.utm_campaign,
                  c =
                    !(null == (r = e.conditions) || null == (r = r.utm) ? void 0 : r.utm_source) ||
                    (null == (n = e.conditions) || null == (n = n.utm) ? void 0 : n.utm_source) == h.utm_source,
                  d =
                    !(null == (o = e.conditions) || null == (o = o.utm) ? void 0 : o.utm_medium) ||
                    (null == (a = e.conditions) || null == (a = a.utm) ? void 0 : a.utm_medium) == h.utm_medium,
                  p =
                    !(null == (l = e.conditions) || null == (l = l.utm) ? void 0 : l.utm_term) ||
                    (null == (u = e.conditions) || null == (u = u.utm) ? void 0 : u.utm_term) == h.utm_term;
                return t && d && p && c;
              }
              return !1;
            }
            static Pf(e, ...t) {
              ik.info(`[WebExperiments] ${e}`, t);
            }
            Af(t, i, s) {
              this._is_bot()
                ? e.Pf(lt)
                : "control" !== i
                  ? s.forEach((s) => {
                      if (s.selector) {
                        var r;
                        e.Pf(`applying transform of variant ${i} for experiment ${t} `, s);
                        let n = null == (r = document) ? void 0 : r.querySelectorAll(s.selector);
                        null == n ||
                          n.forEach((e) => {
                            (s.html && (e.innerHTML = s.html), s.css && e.setAttribute("style", s.css));
                          });
                      }
                    })
                  : e.Pf("Control variants leave the page unmodified.");
            }
            _is_bot() {
              return c && this._instance ? oA(c, this.Ir.custom_blocked_useragents) : void 0;
            }
          },
        },
        ly,
      );
    ac.__defaultExtensionClasses = tb(
      {},
      tb(
        tb(
          tb(
            tb(
              tb(
                tb(
                  tb(
                    tb(
                      tb(
                        tb(
                          tb(
                            tb(tb({}, ly), {
                              sessionRecording: class {
                                get Ir() {
                                  return this._instance.config;
                                }
                                get Ca() {
                                  return this._instance.persistence;
                                }
                                get started() {
                                  var e;
                                  return !!(null == (e = this.Zd) ? void 0 : e.isStarted);
                                }
                                get status() {
                                  var e, t;
                                  return "awaiting_config" === this.Qd || "missing_config" === this.Qd
                                    ? this.Qd
                                    : null != (e = null == (t = this.Zd) ? void 0 : t.status)
                                      ? e
                                      : this.Qd;
                                }
                                constructor(e) {
                                  if (
                                    ((this._instance = e),
                                    (this._forceAllowLocalhostNetworkCapture = !1),
                                    (this.Qd = aI),
                                    (this.Jd = void 0),
                                    (this.Kd = !1),
                                    (this.Xe = (() => {
                                      var e, t;
                                      if (!(null == d ? void 0 : d.visibilityState) || "visible" === d.visibilityState)
                                        return !0;
                                      let i =
                                        null == u || null == (e = u.performance) || null == (t = e.getEntriesByType)
                                          ? void 0
                                          : t.call(e, "visibility-state");
                                      return !(null == i ? void 0 : i.length) || i.some((e) => "visible" === e.name);
                                    })()),
                                    (this.ln = () => {
                                      var e, t;
                                      "visible" === (null == d ? void 0 : d.visibilityState) &&
                                        ((this.Xe = !0),
                                        null == (e = this.Zd) ||
                                          null == (t = e.setDocumentWasEverVisible) ||
                                          t.call(e, !0));
                                    }),
                                    !this._instance.sessionManager)
                                  )
                                    throw (
                                      aC.error("started without valid sessionManager"),
                                      Error("[SessionRecording] started without valid sessionManager. This is a bug.")
                                    );
                                  if ("always" === this.Ir.cookieless_mode)
                                    throw Error('[SessionRecording] cannot be used with cookieless_mode="always"');
                                  (null == d ? void 0 : d.addEventListener) && sq(d, "visibilitychange", this.ln);
                                }
                                initialize() {
                                  this.startIfEnabledOrStop();
                                }
                                dispose({ discardBufferedEvents: e = !1 } = {}) {
                                  var t;
                                  ((this.Kd = !0),
                                    null == d ||
                                      null == (t = d.removeEventListener) ||
                                      t.call(d, "visibilitychange", this.ln),
                                    e ? this.Xd(!0) : this.stopRecording());
                                }
                                get Yd() {
                                  var e;
                                  let t = !!(null ==
                                    (e = this._instance.get_property("$session_recording_remote_config"))
                                      ? void 0
                                      : e.enabled),
                                    i = !this.Ir.disable_session_recording,
                                    s = this.Ir.disable_session_recording || this._instance.consent.isOptedOut();
                                  return u && t && i && !s;
                                }
                                startIfEnabledOrStop(e) {
                                  var t;
                                  if (this.Kd || (this.Yd && (null == (t = this.Zd) ? void 0 : t.isStarted))) return;
                                  let i = !z(Object.assign) && !z(Array.from);
                                  this.Yd && i
                                    ? (this.tv(e), aC.info("starting"))
                                    : ((this.Qd = aI), this.stopRecording());
                                }
                                tv(e) {
                                  var t, i, s, r;
                                  if (this.Yd)
                                    if (
                                      ("awaiting_config" !== this.Qd && "missing_config" !== this.Qd && (this.Qd = aP),
                                      (null == w || null == (t = w.__PosthogExtensions__) || null == (t = t.rrweb)
                                        ? void 0
                                        : t.record) &&
                                        (null == (i = w.__PosthogExtensions__) ? void 0 : i.initSessionRecording))
                                    )
                                      this.ev(e);
                                    else {
                                      let t = this._instance.sessionManager;
                                      null == (s = w.__PosthogExtensions__) ||
                                        null == (r = s.loadExternalDependency) ||
                                        r.call(s, this._instance, this.iv, (i) => {
                                          if (!this.Kd && this.Yd && this._instance.sessionManager === t)
                                            return i
                                              ? (this._instance.register_for_session({
                                                  $sdk_debug_recording_script_not_loaded: !0,
                                                }),
                                                aC.error("could not load recorder", i))
                                              : void this.ev(e);
                                          this.Qd = "disabled";
                                        });
                                    }
                                }
                                stopRecording() {
                                  var e, t;
                                  (null == (e = this.Jd) || e.call(this),
                                    (this.Jd = void 0),
                                    null == (t = this.Zd) || t.stop());
                                }
                                Xd(e = !1) {
                                  var t, i;
                                  (null == (t = this.Jd) || t.call(this),
                                    (this.Jd = void 0),
                                    null == (i = this.Zd) || i.discard({ discardProducerEvents: e }));
                                }
                                nv() {
                                  var e, t;
                                  (null == (e = this.Ca) || e.unregister("$session_is_sampled"),
                                    null == (t = this.Ca) || t.unregister("$replay_sample_rate"));
                                }
                                sv(e, t) {
                                  if (G(e)) return null;
                                  let i = K(e) ? e : parseFloat(e);
                                  return "number" != typeof i || !Number.isFinite(i) || 0 > i || i > 1
                                    ? (aC.warn(`${t} must be between 0 and 1. Ignoring invalid value:`, e), null)
                                    : i;
                                }
                                rv(e) {
                                  if (this.Ca) {
                                    var t, i;
                                    let s = this.Ca,
                                      r = () => {
                                        var t;
                                        let i = !1 === e.sessionRecording ? void 0 : e.sessionRecording,
                                          r = this.sv(
                                            null == (t = this.Ir.session_recording) ? void 0 : t.sampleRate,
                                            "session_recording.sampleRate",
                                          ),
                                          n = this.sv(null == i ? void 0 : i.sampleRate, "remote config sampleRate"),
                                          o = null != r ? r : n;
                                        G(o) && this.nv();
                                        let a = null == i ? void 0 : i.minimumDurationMilliseconds;
                                        s.register({
                                          [iX]: tb(
                                            tb({ cache_timestamp: Date.now(), enabled: !!i }, i),
                                            {},
                                            {
                                              networkPayloadCapture: tb(
                                                { capturePerformance: e.capturePerformance },
                                                null == i ? void 0 : i.networkPayloadCapture,
                                              ),
                                              canvasRecording: {
                                                enabled: null == i ? void 0 : i.recordCanvas,
                                                fps: null == i ? void 0 : i.canvasFps,
                                                quality: null == i ? void 0 : i.canvasQuality,
                                              },
                                              sampleRate: o,
                                              minimumDurationMilliseconds: z(a) ? null : a,
                                              endpoint: null == i ? void 0 : i.endpoint,
                                              triggerMatchType: null == i ? void 0 : i.triggerMatchType,
                                              masking: null == i ? void 0 : i.masking,
                                              urlTriggers: null == i ? void 0 : i.urlTriggers,
                                              version: null == i ? void 0 : i.version,
                                              triggerGroups: null == i ? void 0 : i.triggerGroups,
                                            },
                                          ),
                                        });
                                      };
                                    (r(),
                                      null == (t = this.Jd) || t.call(this),
                                      (this.Jd =
                                        null == (i = this._instance.sessionManager) ? void 0 : i.onSessionId(r)));
                                  }
                                }
                                onRemoteConfig(e) {
                                  let t = e.ok ? e.config : void 0;
                                  return t && "sessionRecording" in t
                                    ? !1 === t.sessionRecording
                                      ? (this.rv(t), void this.Xd())
                                      : (this.rv(t), void this.startIfEnabledOrStop())
                                    : ("awaiting_config" === this.Qd &&
                                        ((this.Qd = "missing_config"),
                                        this._instance.register_for_session({ [sw]: !0 }),
                                        aC.warn("config refresh failed, recording will not start until page reload")),
                                      void this.startIfEnabledOrStop());
                                }
                                log(e, t = "log") {
                                  var i;
                                  (null == (i = this.Zd) ? void 0 : i.log)
                                    ? this.Zd.log(e, t)
                                    : aC.warn("log called before recorder was ready");
                                }
                                get iv() {
                                  var e, t;
                                  let i =
                                    null == (e = this._instance) || null == (e = e.persistence)
                                      ? void 0
                                      : e.get_property(iX);
                                  return (
                                    (null == i || null == (t = i.scriptConfig) ? void 0 : t.script) || "lazy-recorder"
                                  );
                                }
                                ov() {
                                  let e,
                                    t = this._instance.get_property(iX);
                                  if (!t) return !1;
                                  try {
                                    e = "object" == typeof t ? t : JSON.parse(t);
                                  } catch (e) {
                                    return (
                                      aC.warn(
                                        "persisted remote config for session recording is invalid and will be ignored",
                                        e,
                                      ),
                                      !1
                                    );
                                  }
                                  return !G(e.cache_timestamp) && 36e5 >= Date.now() - e.cache_timestamp;
                                }
                                ev(e) {
                                  var t, i, s, r;
                                  if (!this.Kd && this.Yd && this._instance.sessionManager) {
                                    if (!(null == (t = w.__PosthogExtensions__) ? void 0 : t.initSessionRecording))
                                      return (
                                        aC.warn(
                                          "Called on script loaded before session recording is available. This can be caused by adblockers.",
                                        ),
                                        void this._instance.register_for_session({ [sb]: !0 })
                                      );
                                    if (
                                      (this.Zd ||
                                        ((this.Zd =
                                          null == (r = w.__PosthogExtensions__)
                                            ? void 0
                                            : r.initSessionRecording(this._instance, this.Xe)),
                                        (this.Zd._forceAllowLocalhostNetworkCapture =
                                          this._forceAllowLocalhostNetworkCapture)),
                                      !this.ov())
                                    ) {
                                      if ("missing_config" === this.Qd || "awaiting_config" === this.Qd) return;
                                      return (
                                        (this.Qd = "awaiting_config"),
                                        aC.info(
                                          "persisted remote config is stale, requesting fresh config before starting",
                                        ),
                                        void new nL(this._instance).load()
                                      );
                                    }
                                    ((this.Qd = aP),
                                      null == (i = (s = this.Zd).setDocumentWasEverVisible) || i.call(s, this.Xe),
                                      this.Zd.start(e));
                                  } else this.Qd = aI;
                                }
                                onRRwebEmit(e) {
                                  var t, i;
                                  null == (t = this.Zd) || null == (i = t.onRRwebEmit) || i.call(t, e);
                                }
                                overrideLinkedFlag() {
                                  var e, t;
                                  (this.Zd || null == (t = this.Ca) || t.register({ $replay_override_linked_flag: !0 }),
                                    null == (e = this.Zd) || e.overrideLinkedFlag());
                                }
                                overrideSampling() {
                                  var e, t;
                                  (this.Zd || null == (t = this.Ca) || t.register({ $replay_override_sampling: !0 }),
                                    null == (e = this.Zd) || e.overrideSampling());
                                }
                                overrideTrigger(e) {
                                  var t, i;
                                  (this.Zd ||
                                    null == (i = this.Ca) ||
                                    i.register({
                                      ["url" === e ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]:
                                        !0,
                                    }),
                                    null == (t = this.Zd) || t.overrideTrigger(e));
                                }
                                get sdkDebugProperties() {
                                  var e;
                                  return (
                                    (null == (e = this.Zd) ? void 0 : e.sdkDebugProperties) || {
                                      $recording_status: this.status,
                                    }
                                  );
                                }
                                tryAddCustomEvent(e, t) {
                                  var i;
                                  return !!(null == (i = this.Zd) ? void 0 : i.tryAddCustomEvent(e, t));
                                }
                                flushBeforeIdentityReset() {
                                  var e, t;
                                  null == (e = this.Zd) || null == (t = e.flushBeforeIdentityReset) || t.call(e);
                                }
                              },
                            }),
                            {
                              autocapture: class extends av {
                                constructor(e) {
                                  (super(new a_(e)), (this.instance = e));
                                }
                              },
                              historyAutocapture: class {
                                constructor(e) {
                                  ((this._instance = e), (this.lv = this.av()));
                                }
                                initialize() {
                                  this.startIfEnabled();
                                }
                                get isEnabled() {
                                  let e = this.uv();
                                  return !!(e.path || e.search || this.hv(e));
                                }
                                startIfEnabled() {
                                  this.isEnabled &&
                                    (ik.info("History API monitoring enabled, starting..."),
                                    this.monitorHistoryChanges());
                                }
                                startIfEnabledOrStop() {
                                  (this.stop(), (this.lv = this.av()), this.startIfEnabled());
                                }
                                stop() {
                                  (this.dv && this.dv(),
                                    (this.dv = void 0),
                                    this.vv && this.vv(),
                                    (this.vv = void 0),
                                    ik.info("History API monitoring stopped"));
                                }
                                monitorHistoryChanges() {
                                  u &&
                                    u.history &&
                                    (this.fv("pushState"), this.fv("replaceState"), this.pv(), this.hv() && this.gv());
                                }
                                fv(e) {
                                  var t;
                                  if (!u || (null == (t = u.history[e]) ? void 0 : t.__posthog_wrapped__)) return;
                                  let i = this;
                                  aw(
                                    u.history,
                                    e,
                                    (t) =>
                                      function (s, r, n) {
                                        (t.call(this, s, r, n), i.mv(e));
                                      },
                                  );
                                }
                                av() {
                                  let e = null == u ? void 0 : u.location;
                                  if (null == e ? void 0 : e.pathname)
                                    return { pathname: e.pathname, search: e.search, hash: e.hash };
                                }
                                uv() {
                                  let e = this._instance.config.capture_pageview;
                                  return "history_change" === e ? { path: !0 } : B(e) ? e : {};
                                }
                                hv(e = this.uv()) {
                                  return !!e.hash && !this._instance.config.disable_capture_url_hashes;
                                }
                                yv(e) {
                                  let t = this.uv(),
                                    i = this.lv;
                                  return !(
                                    !i ||
                                    !(
                                      (t.path && e.pathname !== i.pathname) ||
                                      (t.search && e.search !== i.search) ||
                                      (this.hv(t) && e.hash !== i.hash)
                                    )
                                  );
                                }
                                mv(e) {
                                  try {
                                    let t = this.av();
                                    if (!t) return;
                                    (this.yv(t) && this._instance.capture(sP, { navigation_type: e }), (this.lv = t));
                                  } catch (t) {
                                    ik.error(`Error capturing ${e} pageview`, t);
                                  }
                                }
                                pv() {
                                  if (this.dv) return;
                                  let e = () => {
                                    this.mv("popstate");
                                  };
                                  (sq(u, "popstate", e),
                                    (this.dv = () => {
                                      u && u.removeEventListener("popstate", e);
                                    }));
                                }
                                gv() {
                                  if (this.vv) return;
                                  let e = () => {
                                    this.mv("hashchange");
                                  };
                                  (sq(u, "hashchange", e),
                                    (this.vv = () => {
                                      u && u.removeEventListener("hashchange", e);
                                    }));
                                }
                              },
                              heatmaps: class {
                                get Ir() {
                                  return this.instance.config;
                                }
                                constructor(e) {
                                  var t;
                                  ((this.bv = !1),
                                    (this._o = !1),
                                    (this._v = null),
                                    (this.instance = e),
                                    (this.bv = !!(null == (t = this.instance.persistence) ? void 0 : t.props[iq])),
                                    (this.rageclicks = new ad(e.config.rageclick)));
                                }
                                initialize() {
                                  this.startIfEnabled();
                                }
                                get flushIntervalMilliseconds() {
                                  let e = 5e3;
                                  return (
                                    B(this.Ir.capture_heatmaps) &&
                                      this.Ir.capture_heatmaps.flush_interval_milliseconds &&
                                      (e = this.Ir.capture_heatmaps.flush_interval_milliseconds),
                                    e
                                  );
                                }
                                get isEnabled() {
                                  return G(this.Ir.capture_heatmaps)
                                    ? G(this.Ir.enable_heatmaps)
                                      ? this.bv
                                      : this.Ir.enable_heatmaps
                                    : !1 !== this.Ir.capture_heatmaps;
                                }
                                startIfEnabled() {
                                  if (this.isEnabled) this._o || (aO.info("starting..."), this.wv(), this.ln());
                                  else {
                                    var e;
                                    (clearInterval(null != (e = this._v) ? e : void 0),
                                      this.Sv(),
                                      this.getAndClearBuffer());
                                  }
                                }
                                onRemoteConfig(e) {
                                  if (!e.ok) return;
                                  let t = e.config;
                                  if (!("heatmaps" in t)) return;
                                  let i = !!t.heatmaps;
                                  (this.instance.persistence && this.instance.persistence.register({ [iq]: i }),
                                    (this.bv = i),
                                    this.startIfEnabled());
                                }
                                getAndClearBuffer() {
                                  let e = this.Rt;
                                  return ((this.Rt = void 0), e);
                                }
                                xv(e) {
                                  aF(e.originalEvent) && this.Mr(e.originalEvent, "deadclick");
                                }
                                ln() {
                                  (this._v && clearInterval(this._v),
                                    (this._v =
                                      "visible" === (null == d ? void 0 : d.visibilityState)
                                        ? setInterval(this.pa.bind(this), this.flushIntervalMilliseconds)
                                        : null));
                                }
                                wv() {
                                  u &&
                                    d &&
                                    ((this.Cv = this.pa.bind(this)),
                                    sq(u, sI, this.Cv),
                                    (this.$v = (e) => this.Mr(e || (null == u ? void 0 : u.event))),
                                    sq(d, "click", this.$v, { capture: !0 }),
                                    (this.Tv = (e) => this.Iv(e || (null == u ? void 0 : u.event))),
                                    sq(d, "mousemove", this.Tv, { capture: !0 }),
                                    (this.Mv = new rV(this.instance, rH, this.xv.bind(this))),
                                    this.Mv.startIfEnabledOrStop(),
                                    (this.Ev = this.ln.bind(this)),
                                    sq(d, sS, this.Ev),
                                    (this._o = !0));
                                }
                                Sv() {
                                  var e;
                                  u &&
                                    d &&
                                    (this.Cv && u.removeEventListener(sI, this.Cv),
                                    this.$v && d.removeEventListener("click", this.$v, { capture: !0 }),
                                    this.Tv && d.removeEventListener("mousemove", this.Tv, { capture: !0 }),
                                    this.Ev && d.removeEventListener(sS, this.Ev),
                                    clearTimeout(this.Pv),
                                    null == (e = this.Mv) || e.stop(),
                                    (this._o = !1));
                                }
                                Rv(e, t) {
                                  let i = this.instance.scrollManager.scrollY(),
                                    s = this.instance.scrollManager.scrollX(),
                                    r = this.instance.scrollManager.scrollElement(),
                                    n = (function (e, t, i) {
                                      let s = e;
                                      for (; s && ra(s) && !rl(s, "body");) {
                                        let e;
                                        if (s === i) break;
                                        try {
                                          var r, n, o;
                                          e =
                                            null ==
                                            (r =
                                              null != (n = null == (o = s.ownerDocument) ? void 0 : o.defaultView)
                                                ? n
                                                : u)
                                              ? void 0
                                              : r.getComputedStyle(s).position;
                                        } catch (e) {
                                          break;
                                        }
                                        if (T(t, e)) return !0;
                                        s = rb(s);
                                      }
                                      return !1;
                                    })(rv(e), ["fixed", "sticky"], r);
                                  return {
                                    x: e.clientX + (n ? 0 : s),
                                    y: e.clientY + (n ? 0 : i),
                                    target_fixed: n,
                                    type: t,
                                  };
                                }
                                Mr(e, t = "click") {
                                  var i;
                                  if (ro(e.target) || !aF(e)) return;
                                  let s = this.Rv(e, t);
                                  ((null == (i = this.rageclicks)
                                    ? void 0
                                    : i.isRageClick(e.clientX, e.clientY, new Date().getTime())) &&
                                    rI(rv(e), this.instance.config.rageclick) &&
                                    this.Zs(tb(tb({}, s), {}, { type: "rageclick" })),
                                    this.Zs(s));
                                }
                                Iv(e) {
                                  !ro(e.target) &&
                                    aF(e) &&
                                    (clearTimeout(this.Pv),
                                    (this.Pv = setTimeout(() => {
                                      this.Zs(this.Rv(e, "mousemove"));
                                    }, 500)));
                                }
                                Zs(e) {
                                  if (!u) return;
                                  let t = this.Ir.disable_capture_url_hashes ? tp(u.location.href) : u.location.href,
                                    i = this.Ir.custom_personal_data_properties,
                                    s = r5(t, this.Ir.mask_personal_data_properties ? [...r9, ...(i || [])] : [], ne);
                                  ((this.Rt = this.Rt || {}), this.Rt[s] || (this.Rt[s] = []), this.Rt[s].push(e));
                                }
                                pa() {
                                  this.Rt &&
                                    !H(this.Rt) &&
                                    this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
                                }
                              },
                              deadClicksAutocapture: rV,
                              webVitalsAutocapture: class {
                                constructor(e) {
                                  var t;
                                  ((this._instance = e),
                                    (this.bv = !1),
                                    (this._o = !1),
                                    (this.Rt = {
                                      navigationKey: void 0,
                                      url: void 0,
                                      metrics: [],
                                      firstMetricTimestamp: void 0,
                                    }),
                                    (this.Av = () => {
                                      (clearTimeout(this.Fv),
                                        (this.Fv = void 0),
                                        0 !== this.Rt.metrics.length &&
                                          (this._instance.capture(
                                            "$web_vitals",
                                            tb(
                                              { $current_url: this.Rt.url },
                                              this.Rt.metrics.reduce(
                                                (e, t) =>
                                                  tb(
                                                    tb({}, e),
                                                    {},
                                                    {
                                                      [`$web_vitals_${t.name}_event`]: tb({}, t),
                                                      [`$web_vitals_${t.name}_value`]: t.value,
                                                    },
                                                  ),
                                                {},
                                              ),
                                            ),
                                          ),
                                          (this.Rt = {
                                            navigationKey: void 0,
                                            url: void 0,
                                            metrics: [],
                                            firstMetricTimestamp: void 0,
                                          })));
                                    }),
                                    (this.Ov = (e) => {
                                      var t;
                                      if (
                                        ((this.Rt = this.Rt || {
                                          navigationKey: void 0,
                                          url: void 0,
                                          metrics: [],
                                          firstMetricTimestamp: void 0,
                                        }),
                                        G(null == e ? void 0 : e.name) || G(null == e ? void 0 : e.value))
                                      )
                                        return void ak.error("Invalid metric received", e);
                                      let i = "string" == typeof e.navigationURL ? e.navigationURL : void 0,
                                        s = this.Dv(i);
                                      if (z(s)) return;
                                      let r =
                                        K(e.navigationId) || "string" == typeof e.navigationId
                                          ? `navigation:${e.navigationId}`
                                          : `url:${s}`;
                                      if (this.Lv && e.value >= this.Lv)
                                        return void ak.error("Ignoring metric with value >= " + this.Lv, e);
                                      (this.Rt.navigationKey !== r &&
                                        (this.Av(), (this.Fv = setTimeout(this.Av, this.flushToCaptureTimeoutMs))),
                                        z(this.Rt.navigationKey) && ((this.Rt.navigationKey = r), (this.Rt.url = s)),
                                        (this.Rt.firstMetricTimestamp = z(this.Rt.firstMetricTimestamp)
                                          ? Date.now()
                                          : this.Rt.firstMetricTimestamp));
                                      let n =
                                          null == (t = this._instance.sessionManager)
                                            ? void 0
                                            : t.checkAndGetSessionAndWindowId(!0),
                                        o = tb(
                                          tb(tb({}, e), i ? { navigationURL: s } : {}),
                                          {},
                                          { $current_url: s, timestamp: Date.now() },
                                        );
                                      if (
                                        (delete o.entries,
                                        B(e.attribution) && this.attributionMetrics.indexOf(e.name) > -1)
                                      ) {
                                        let t = {};
                                        for (let i of aS) {
                                          let s =
                                            "url" === i && "string" == typeof e.attribution[i]
                                              ? this.Dv(e.attribution[i])
                                              : e.attribution[i];
                                          z(s) || (t[i] = s);
                                        }
                                        o.attribution = t;
                                      } else delete o.attribution;
                                      (z(n) || ((o.$session_id = n.sessionId), (o.$window_id = n.windowId)),
                                        this.Rt.metrics.push(o),
                                        this.Rt.metrics.length === this.allowedMetrics.length && this.Av());
                                    }),
                                    (this.Nv = () => {
                                      if (this._o) return;
                                      let e,
                                        t,
                                        i,
                                        s,
                                        r = !1,
                                        n = w.__PosthogExtensions__,
                                        o = null == n ? void 0 : n.postHogWebVitalsCallbacksByFlavor,
                                        a =
                                          (null == o ? void 0 : o[this.qv]) ||
                                          ("web-vitals" === this.qv && z(o)
                                            ? null == n
                                              ? void 0
                                              : n.postHogWebVitalsCallbacks
                                            : void 0);
                                      if (!z(a)) {
                                        let n = a.withoutAttribution,
                                          o = this.attributionMetrics;
                                        ((r = !z(n)),
                                          (e =
                                            o.indexOf("LCP") > -1
                                              ? a.onLCP
                                              : (null == n ? void 0 : n.onLCP) || a.onLCP),
                                          (t =
                                            o.indexOf("CLS") > -1
                                              ? a.onCLS
                                              : (null == n ? void 0 : n.onCLS) || a.onCLS),
                                          (i =
                                            o.indexOf("FCP") > -1
                                              ? a.onFCP
                                              : (null == n ? void 0 : n.onFCP) || a.onFCP),
                                          (s =
                                            o.indexOf("INP") > -1
                                              ? a.onINP
                                              : (null == n ? void 0 : n.onINP) || a.onINP));
                                      }
                                      if (!(e && t && i && s))
                                        return void ak.error("web vitals callbacks not loaded - not starting");
                                      let l = { reportSoftNavs: this.useSoftNavs },
                                        u =
                                          r && this.attributionMetrics.indexOf("INP") > -1
                                            ? tb(tb({}, l), {}, { includeProcessedEventEntries: !1 })
                                            : l;
                                      (this.allowedMetrics.indexOf("LCP") > -1 && e(this.Ov.bind(this), l),
                                        this.allowedMetrics.indexOf("CLS") > -1 && t(this.Ov.bind(this), l),
                                        this.allowedMetrics.indexOf("FCP") > -1 && i(this.Ov.bind(this), l),
                                        this.allowedMetrics.indexOf("INP") > -1 && s(this.Ov.bind(this), u),
                                        (this._o = !0));
                                    }),
                                    (this.bv = !!(null == (t = this._instance.persistence) ? void 0 : t.props[iV])),
                                    this.startIfEnabled());
                                }
                                get jv() {
                                  return this._instance.config.capture_performance;
                                }
                                get allowedMetrics() {
                                  var e, t;
                                  let i = B(this.jv)
                                    ? null == (e = this.jv)
                                      ? void 0
                                      : e.web_vitals_allowed_metrics
                                    : void 0;
                                  return G(i)
                                    ? (null == (t = this._instance.persistence)
                                        ? void 0
                                        : t.props.$web_vitals_allowed_metrics) || aE
                                    : i;
                                }
                                get flushToCaptureTimeoutMs() {
                                  return (B(this.jv) ? this.jv.web_vitals_delayed_flush_ms : void 0) || 5e3;
                                }
                                get attributionMetrics() {
                                  let e = B(this.jv) ? this.jv.web_vitals_attribution : void 0;
                                  return J(e) ? (e ? aE : []) : j(e) ? e : a$;
                                }
                                get useAttribution() {
                                  return this.attributionMetrics.length > 0;
                                }
                                get useSoftNavs() {
                                  let e = B(this.jv) ? this.jv.__preview_web_vitals_soft_navs : void 0;
                                  return null != e && e;
                                }
                                get Lv() {
                                  let e =
                                    B(this.jv) && K(this.jv.__web_vitals_max_value)
                                      ? this.jv.__web_vitals_max_value
                                      : 9e5;
                                  return e > 0 && 6e4 >= e ? 9e5 : e;
                                }
                                get isEnabled() {
                                  let e = null == p ? void 0 : p.protocol;
                                  if ("http:" !== e && "https:" !== e)
                                    return (ak.info("Web Vitals are disabled on non-http/https protocols"), !1);
                                  let t = B(this.jv) ? this.jv.web_vitals : J(this.jv) ? this.jv : void 0;
                                  return J(t) ? t : this.bv;
                                }
                                startIfEnabled() {
                                  this.isEnabled && !this._o && (ak.info("enabled, starting..."), this.qo(this.Nv));
                                }
                                onRemoteConfig(e) {
                                  if (!e.ok) return;
                                  let t = e.config;
                                  if (!("capturePerformance" in t)) return;
                                  let i = B(t.capturePerformance) && !!t.capturePerformance.web_vitals,
                                    s = B(t.capturePerformance)
                                      ? t.capturePerformance.web_vitals_allowed_metrics
                                      : void 0;
                                  (this._instance.persistence &&
                                    (this._instance.persistence.register({ [iV]: i }),
                                    this._instance.persistence.register({ [iK]: s })),
                                    (this.bv = i),
                                    this.startIfEnabled());
                                }
                                get qv() {
                                  return this.useSoftNavs
                                    ? this.useAttribution
                                      ? "web-vitals-with-attribution-soft-navs"
                                      : "web-vitals-soft-navs"
                                    : this.useAttribution
                                      ? "web-vitals-with-attribution"
                                      : "web-vitals";
                                }
                                qo(e) {
                                  var t;
                                  let i = w.__PosthogExtensions__,
                                    s = this.qv,
                                    r = null == i ? void 0 : i.postHogWebVitalsCallbacksByFlavor;
                                  (null == r ? void 0 : r[s]) ||
                                  ("web-vitals" === s && z(r) && (null == i ? void 0 : i.postHogWebVitalsCallbacks))
                                    ? e()
                                    : null == i ||
                                      null == (t = i.loadExternalDependency) ||
                                      t.call(i, this._instance, s, (t) => {
                                        t ? ak.error("failed to load script", t) : e();
                                      });
                                }
                                Dv(e) {
                                  let t = e || (null == u ? void 0 : u.location.href);
                                  if (!t) return void ak.error("Could not determine current URL");
                                  let i = this._instance.config.disable_capture_url_hashes ? tp(t) : t,
                                    s = this._instance.config.custom_personal_data_properties;
                                  return r5(
                                    i,
                                    this._instance.config.mask_personal_data_properties ? [...r9, ...(s || [])] : [],
                                    ne,
                                  );
                                }
                              },
                            },
                          ),
                          {
                            exceptionObserver: class {
                              constructor(e) {
                                var t;
                                ((this.Nv = () => {
                                  var e;
                                  if (
                                    !u ||
                                    !this.isEnabled ||
                                    !(null == (e = w.__PosthogExtensions__) ? void 0 : e.errorWrappingFunctions)
                                  )
                                    return;
                                  let t = w.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                                    i = w.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                                    s = w.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                                  try {
                                    (!this.Bv &&
                                      this.Ir.capture_unhandled_errors &&
                                      (this.Bv = t(this.captureException.bind(this))),
                                      !this.Hv &&
                                        this.Ir.capture_unhandled_rejections &&
                                        (this.Hv = i(this.captureException.bind(this))),
                                      !this.zv &&
                                        this.Ir.capture_console_errors &&
                                        (this.zv = s(this.captureException.bind(this))));
                                  } catch (e) {
                                    (am.error("failed to start", e), this.Uv());
                                  }
                                }),
                                  (this._instance = e),
                                  (this.Wv = !!(null == (t = this._instance.persistence) ? void 0 : t.props[iB])),
                                  (this.wt = new ec(
                                    tb(
                                      tb(
                                        {},
                                        (function (e = {}) {
                                          var t, i, s, r;
                                          return {
                                            refillRate:
                                              null !=
                                              (t =
                                                null != (i = e.exceptionRateLimiterRefillRate)
                                                  ? i
                                                  : e.__exceptionRateLimiterRefillRate)
                                                ? t
                                                : 1,
                                            bucketSize:
                                              null !=
                                              (s =
                                                null != (r = e.exceptionRateLimiterBucketSize)
                                                  ? r
                                                  : e.__exceptionRateLimiterBucketSize)
                                                ? s
                                                : 10,
                                          };
                                        })(this._instance.config.error_tracking),
                                      ),
                                      {},
                                      { refillInterval: 1e4, $: am },
                                    ),
                                  )),
                                  (this.Ir = this.Vv()),
                                  this.startIfEnabledOrStop());
                              }
                              Vv() {
                                let e = this._instance.config.capture_exceptions,
                                  t = {
                                    capture_unhandled_errors: !1,
                                    capture_unhandled_rejections: !1,
                                    capture_console_errors: !1,
                                  };
                                return (
                                  B(e)
                                    ? (t = tb(tb({}, t), e))
                                    : (z(e) ? this.Wv : e) &&
                                      (t = tb(
                                        tb({}, t),
                                        {},
                                        { capture_unhandled_errors: !0, capture_unhandled_rejections: !0 },
                                      )),
                                  t
                                );
                              }
                              get isEnabled() {
                                return (
                                  this.Ir.capture_console_errors ||
                                  this.Ir.capture_unhandled_errors ||
                                  this.Ir.capture_unhandled_rejections
                                );
                              }
                              startIfEnabledOrStop() {
                                this.isEnabled ? (am.info("enabled"), this.Uv(), this.qo(this.Nv)) : this.Uv();
                              }
                              qo(e) {
                                var t, i, s;
                                (null == (t = w.__PosthogExtensions__) ? void 0 : t.errorWrappingFunctions)
                                  ? e()
                                  : null == (i = w.__PosthogExtensions__) ||
                                    null == (s = i.loadExternalDependency) ||
                                    s.call(i, this._instance, "exception-autocapture", (t) => {
                                      if (t) return am.error("failed to load script", t);
                                      e();
                                    });
                              }
                              Uv() {
                                var e, t, i;
                                (null == (e = this.Bv) || e.call(this),
                                  (this.Bv = void 0),
                                  null == (t = this.Hv) || t.call(this),
                                  (this.Hv = void 0),
                                  null == (i = this.zv) || i.call(this),
                                  (this.zv = void 0));
                              }
                              onRemoteConfig(e) {
                                if (!e.ok) return;
                                let t = e.config;
                                "autocaptureExceptions" in t &&
                                  ((this.Wv = !!t.autocaptureExceptions),
                                  this._instance.persistence && this._instance.persistence.register({ [iB]: this.Wv }),
                                  (this.Ir = this.Vv()),
                                  this.startIfEnabledOrStop());
                              }
                              onConfigChange() {
                                this.Ir = this.Vv();
                              }
                              captureException(e) {
                                try {
                                  var t, i, s;
                                  let r =
                                    null !=
                                    (t =
                                      null == e || null == (i = e.$exception_list) || null == (i = i[0])
                                        ? void 0
                                        : i.type)
                                      ? t
                                      : "Exception";
                                  if (this.wt.consumeRateLimit(r))
                                    return void am.info("Skipping exception capture because of client rate limiting.", {
                                      exception: r,
                                    });
                                  null == (s = this._instance.exceptions) || s.sendExceptionEvent(e);
                                } catch (e) {}
                              }
                            },
                            exceptions: class {
                              constructor(e) {
                                var t, i;
                                ((this.Gv = []),
                                  (this.Zv = new tw(
                                    [new tD(), new tG(), new tj(), new tN(), new tU(), new tV(), new tB(), new tW()],
                                    (function (e, ...t) {
                                      return (i, s = 0) => {
                                        let r = [],
                                          n = i.split("\n"),
                                          o = Math.min(n.length, s + 1e3),
                                          a = [];
                                        for (let i = s; o > i; i++) {
                                          let s = n[i];
                                          if (s.length > 1024) continue;
                                          let o = tM.test(s) ? s.replace(tM, "$1") : s;
                                          if (!o.match(/\S*Error: /)) {
                                            for (let i of t) {
                                              let t = i(o, e);
                                              if (t) {
                                                r.push(t);
                                                let e = (function (e) {
                                                  for (let t = 1; 10 >= t; t++) {
                                                    let i = e.length - 2 * t;
                                                    if (0 > i) break;
                                                    let s = !0;
                                                    for (let r = 0; t > r; r++)
                                                      if (!tR(e[i + r], e[i + t + r])) {
                                                        s = !1;
                                                        break;
                                                      }
                                                    if (s) {
                                                      for (let s = 0; t > s; s++) e[i + s] = e[i + t + s];
                                                      return ((e.length = i + t), { start: i, length: t });
                                                    }
                                                  }
                                                })(r);
                                                if (e) {
                                                  for (let t = a.length - 1; t >= 0; t--) {
                                                    let i = a[t];
                                                    if (e.start >= i.start + i.length) break;
                                                    a.pop();
                                                  }
                                                  a.push(e);
                                                }
                                                break;
                                              }
                                            }
                                            if (
                                              (function (e, t) {
                                                let i = t[0],
                                                  s = e.length - (i ? tA(e, i) : 0);
                                                for (let i of t) s -= tL(e, i);
                                                return s;
                                              })(r, a) >= 50
                                            )
                                              break;
                                          }
                                        }
                                        let l = [...a].sort((e, t) => t.start - e.start),
                                          u = l[l.length - 1];
                                        if (u) {
                                          let e = tA(r, u);
                                          for (let t of (r.splice(u.start - e, e), l)) t.start -= e;
                                        }
                                        for (let e of l)
                                          !(function (e, t) {
                                            let i = t.start + t.length,
                                              s = tL(e, t);
                                            s && e.splice(i + s === e.length ? i : t.start, s);
                                          })(r, e);
                                        return (
                                          a.some((e) => 0 === e.start && r.length === e.length) &&
                                            (function (e) {
                                              let t = e.map(
                                                  (e) =>
                                                    `${e.function}|${e.filename}|${e.lineno}|${e.colno}|${e.module}`,
                                                ),
                                                i = 0;
                                              for (let e = 1; t.length > e; e++)
                                                (function (e, t, i) {
                                                  for (let s = 0; e.length > s; s++) {
                                                    let r = e[(t + s) % e.length],
                                                      n = e[(i + s) % e.length];
                                                    if (r !== n) return n > r;
                                                  }
                                                  return !1;
                                                })(t, e, i) && (i = e);
                                              e.push(...e.splice(0, i));
                                            })(r),
                                          (function (e) {
                                            if (!e.length) return [];
                                            let t = Array.from(e);
                                            return (
                                              t.reverse(),
                                              t
                                                .slice(0, 50)
                                                .map((e) =>
                                                  tb(
                                                    tb({}, e),
                                                    {},
                                                    {
                                                      filename: e.filename || (t[t.length - 1] || {}).filename,
                                                      function: e.function || "?",
                                                    },
                                                  ),
                                                )
                                            );
                                          })(r)
                                        );
                                      };
                                    })("web:javascript", tC, tT),
                                  )),
                                  (this._instance = e),
                                  (this.Gv =
                                    null !=
                                    (t =
                                      null == (i = this._instance.persistence)
                                        ? void 0
                                        : i.get_property("$error_tracking_suppression_rules"))
                                      ? t
                                      : []),
                                  (this.Qv = tY(this.Jv())),
                                  (this.Kv = new tZ(this.Qv)));
                              }
                              onConfigChange() {
                                ((this.Qv = tY(this.Jv())), this.Kv.setConfig(this.Qv));
                              }
                              onRemoteConfig(e) {
                                var t, i, s;
                                if (!e.ok) return;
                                let r = e.config;
                                if (!("errorTracking" in r)) return;
                                let n =
                                    null != (t = null == (i = r.errorTracking) ? void 0 : i.suppressionRules) ? t : [],
                                  o = null == (s = r.errorTracking) ? void 0 : s.captureExtensionExceptions;
                                ((this.Gv = n),
                                  this._instance.persistence &&
                                    this._instance.persistence.register({ [iH]: this.Gv, [iz]: o }));
                              }
                              get Xv() {
                                var e;
                                let t = !!this._instance.get_property(iz),
                                  i = this._instance.config.error_tracking.captureExtensionExceptions;
                                return null != (e = null != i ? i : t) && e;
                              }
                              buildProperties(e, t) {
                                return this.Zv.buildFromUnknown(e, {
                                  syntheticException: null == t ? void 0 : t.syntheticException,
                                  mechanism: { handled: null == t ? void 0 : t.handled },
                                });
                              }
                              addExceptionStep(e, t) {
                                if (this.Qv.enabled)
                                  try {
                                    if (!V(e) || 0 === e.trim().length)
                                      return void a6.warn(
                                        "Ignoring exception step because message must be a non-empty string",
                                      );
                                    let { sanitizedProperties: i, droppedKeys: s } = (function (e) {
                                      if (!e) return { sanitizedProperties: {}, droppedKeys: [] };
                                      let t = [];
                                      return {
                                        sanitizedProperties: Object.keys(e).reduce(
                                          (i, s) => (tJ.has(s) ? t.push(s) : (i[s] = e[s]), i),
                                          {},
                                        ),
                                        droppedKeys: t,
                                      };
                                    })(this.Yv(t));
                                    (s.length > 0 &&
                                      a6.warn("Ignoring reserved exception step fields", { droppedKeys: s }),
                                      this.Kv.add(tb({ [tK]: e, [tX]: new Date().toISOString() }, i)));
                                  } catch (e) {
                                    a6.error("Failed to add exception step. Ignoring breadcrumb.", e);
                                  }
                              }
                              sendExceptionEvent(e) {
                                try {
                                  let t,
                                    i = e.$exception_list;
                                  if (this.tf(i)) {
                                    if (this.ef(i))
                                      return (
                                        this.if("Exception dropped: matched a suppression rule"),
                                        void a6.info("Skipping exception capture because a suppression rule matched")
                                      );
                                    if (!this.Xv && this.nf(i))
                                      return (
                                        this.if("Exception dropped: thrown by a browser extension"),
                                        void a6.info("Skipping exception capture because it was thrown by an extension")
                                      );
                                    if (!this.Xv && this.sf(i))
                                      return (
                                        this.if("Exception dropped: thrown by an injected browser script"),
                                        void a6.info(
                                          "Skipping exception capture because it was thrown by an injected browser script",
                                        )
                                      );
                                    if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.rf(i))
                                      return (
                                        this.if("Exception dropped: thrown by the PostHog SDK"),
                                        void a6.info(
                                          "Skipping exception capture because it was thrown by the PostHog SDK",
                                        )
                                      );
                                  }
                                  let s = this.Qv.enabled && G(e.$exception_steps) ? this.lf(e) : e,
                                    r =
                                      ((t = globalThis._posthogReleaseId),
                                      "string" == typeof t && t.length > 0 ? t : void 0);
                                  r && (s.$release_id = r);
                                  try {
                                    let e = this._instance.capture("$exception", s, {
                                      _noTruncate: !0,
                                      _batchKey: "exceptionEvent",
                                      ah: !0,
                                    });
                                    return (e && this.Kv.clear(), e);
                                  } catch (e) {
                                    return (
                                      a4(e) ||
                                        a6.error("Failed to capture exception event. Dropping this exception.", e),
                                      void this.Kv.clear()
                                    );
                                  }
                                } catch (e) {
                                  return void (
                                    a4(e) || a6.error("Failed to process exception event. Ignoring this exception.", e)
                                  );
                                }
                              }
                              lf(e) {
                                try {
                                  let t = this.Kv.getAttachable();
                                  return 0 === t.length ? e : tb(tb({}, e), {}, { $exception_steps: t });
                                } catch (t) {
                                  return (
                                    a6.error(
                                      "Failed to read buffered exception steps. Capturing exception without steps.",
                                      t,
                                    ),
                                    e
                                  );
                                }
                              }
                              if(e) {
                                this.Qv.enabled && this.Kv.add({ [tK]: e, [tX]: new Date().toISOString() });
                              }
                              Yv(e) {
                                return B(e) ? tb({}, e) : {};
                              }
                              Jv() {
                                var e, t;
                                return null !=
                                  (e = null == (t = this._instance.config.error_tracking) ? void 0 : t.exception_steps)
                                  ? e
                                  : {};
                              }
                              ef(e) {
                                if (0 === e.length) return !1;
                                try {
                                  let t = e.reduce(
                                    (e, { type: t, value: i }) => (
                                      V(t) && t.length > 0 && e.$exception_types.push(t),
                                      V(i) && i.length > 0 && e.$exception_values.push(i),
                                      e
                                    ),
                                    { $exception_types: [], $exception_values: [] },
                                  );
                                  return this.Gv.some((e) => {
                                    let i = e.values.map((e) => {
                                      let i = oq[e.operator],
                                        s = t[e.key];
                                      if (!i || !s) return !1;
                                      let r = j(e.value) ? e.value : [e.value];
                                      return r.length > 0 && i(r, s);
                                    });
                                    return "OR" === e.type ? i.some(Boolean) : i.every(Boolean);
                                  });
                                } catch (e) {
                                  return (
                                    a6.warn("Failed to evaluate suppression rules. Capturing the exception.", e),
                                    !1
                                  );
                                }
                              }
                              nf(e) {
                                let t = e.flatMap((e) => {
                                    var t, i;
                                    return null != (t = null == (i = e.stacktrace) ? void 0 : i.frames) ? t : [];
                                  }),
                                  i = t.filter(({ filename: e }) => !!e && a7.some((t) => e.startsWith(t)));
                                return (
                                  0 !== i.length &&
                                  (!i.every(({ filename: e }) => !!e && e.startsWith(a8)) ||
                                    (e.some(
                                      ({ type: e, value: t }) =>
                                        "NoResponse" === e ||
                                        (V(t) && a9.some(({ value: e, exact: i }) => (i ? t === e : t.includes(e)))),
                                    ) &&
                                      !t.some(
                                        ({ in_app: e, filename: t }) => e && !(null == t ? void 0 : t.startsWith(a8)),
                                      )))
                                );
                              }
                              sf(e) {
                                return e.some(({ value: e }) => V(e) && le.some((t) => e.includes(t)));
                              }
                              rf(e) {
                                if (e.length > 0) {
                                  var t, i, s, r;
                                  let n = null != (t = null == (i = e[0].stacktrace) ? void 0 : i.frames) ? t : [],
                                    o = n[n.length - 1];
                                  return (
                                    null !=
                                      (s =
                                        null == o || null == (r = o.filename)
                                          ? void 0
                                          : r.includes("posthog.com/static")) && s
                                  );
                                }
                                return !1;
                              }
                              tf(e) {
                                return !G(e) && j(e);
                              }
                            },
                          },
                        ),
                        lb,
                      ),
                      {
                        siteApps: class {
                          constructor(e) {
                            ((this._instance = e), (this.cf = 0), (this.df = []), (this.apps = {}));
                          }
                          get isEnabled() {
                            return !!this._instance.config.opt_in_site_apps;
                          }
                          vf(e, t) {
                            if (!t) return;
                            let i = this.globalsForEvent(t);
                            (this.df.push(i), this.df.length > 1e3 && (this.df = this.df.slice(10)));
                          }
                          get siteAppLoaders() {
                            var e;
                            return null == (e = w._POSTHOG_REMOTE_CONFIG) ||
                              null == (e = e[this._instance.config.token])
                              ? void 0
                              : e.siteApps;
                          }
                          initialize() {
                            if (this.isEnabled) {
                              let e = this._instance._addCaptureHook(this.vf.bind(this));
                              this.ff = () => {
                                (e(), (this.df = []), (this.ff = void 0));
                              };
                            }
                          }
                          globalsForEvent(e) {
                            var t, i, s, r, n, o, a;
                            if (!e) throw Error("Event payload is required");
                            let l = {},
                              u = this._instance.get_property("$groups") || [];
                            for (let [e, t] of Object.entries(
                              this._instance.get_property("$stored_group_properties") || {},
                            ))
                              l[e] = { id: u[e], type: e, properties: t };
                            let { $set_once: h, $set: c } = e;
                            return {
                              event: tb(
                                tb({}, it(e, aR)),
                                {},
                                {
                                  properties: tb(
                                    tb(
                                      tb({}, e.properties),
                                      c
                                        ? {
                                            $set: tb(
                                              tb(
                                                {},
                                                null != (t = null == (i = e.properties) ? void 0 : i.$set) ? t : {},
                                              ),
                                              c,
                                            ),
                                          }
                                        : {},
                                    ),
                                    h
                                      ? {
                                          $set_once: tb(
                                            tb(
                                              {},
                                              null != (s = null == (r = e.properties) ? void 0 : r.$set_once) ? s : {},
                                            ),
                                            h,
                                          ),
                                        }
                                      : {},
                                  ),
                                  elements_chain:
                                    null != (n = null == (o = e.properties) ? void 0 : o.$elements_chain) ? n : "",
                                  distinct_id: null == (a = e.properties) ? void 0 : a.distinct_id,
                                },
                              ),
                              person: { properties: this._instance.get_property("$stored_person_properties") },
                              groups: l,
                            };
                          }
                          pf(e) {
                            var t;
                            let i = null == (t = e.tagName) ? void 0 : t.toLowerCase();
                            return "style" === i && this._instance.config.prepare_external_dependency_stylesheet
                              ? this._instance.config.prepare_external_dependency_stylesheet(e) ||
                                  (aA.error("prepare_external_dependency_stylesheet returned null"), null)
                              : "script" === i && this._instance.config.prepare_external_dependency_script
                                ? this._instance.config.prepare_external_dependency_script(e) ||
                                  (aA.error("prepare_external_dependency_script returned null"), null)
                                : e;
                          }
                          gf() {
                            var e, t, i, s, r, n, o, a;
                            if (
                              !this._instance.config.prepare_external_dependency_stylesheet &&
                              !this._instance.config.prepare_external_dependency_script
                            )
                              return () => {};
                            let l = null == d ? void 0 : d.defaultView,
                              u = null == l || null == (e = l.Node) ? void 0 : e.prototype;
                            if (!l || !u) return () => {};
                            if ((this.cf++, this.mf)) return this.yf();
                            let h = [],
                              c = this,
                              p = new WeakSet(),
                              f = (e, t, i) => {
                                if (!(null == e ? void 0 : e[t])) return;
                                let s = e[t];
                                ((e[t] = i(s)),
                                  h.push(() => {
                                    e[t] = s;
                                  }));
                              },
                              g = (e) => {
                                if (p.has(e)) return e;
                                let t = c.pf(e);
                                return (t && p.add(t), t);
                              },
                              v = (e) => e.map((e) => ("string" == typeof e ? e : g(e))).filter((e) => !W(e));
                            return (
                              f(
                                u,
                                "appendChild",
                                (e) =>
                                  function (t) {
                                    let i = g(t);
                                    return i ? e.call(this, i) : t;
                                  },
                              ),
                              f(
                                u,
                                "insertBefore",
                                (e) =>
                                  function (t, i) {
                                    let s = g(t);
                                    return s ? e.call(this, s, i) : t;
                                  },
                              ),
                              f(
                                u,
                                "replaceChild",
                                (e) =>
                                  function (t, i) {
                                    let s = g(t);
                                    return s ? e.call(this, s, i) : i;
                                  },
                              ),
                              [
                                null == (t = l.Element) ? void 0 : t.prototype,
                                null == (i = l.Document) ? void 0 : i.prototype,
                                null == (s = l.DocumentFragment) ? void 0 : s.prototype,
                              ].forEach((e) => {
                                (f(
                                  e,
                                  "append",
                                  (e) =>
                                    function (...t) {
                                      return e.apply(this, v(t));
                                    },
                                ),
                                  f(
                                    e,
                                    "prepend",
                                    (e) =>
                                      function (...t) {
                                        return e.apply(this, v(t));
                                      },
                                  ));
                              }),
                              [
                                null == (r = l.Element) ? void 0 : r.prototype,
                                null == (n = l.CharacterData) ? void 0 : n.prototype,
                                null == (o = l.DocumentType) ? void 0 : o.prototype,
                              ].forEach((e) => {
                                (f(
                                  e,
                                  "before",
                                  (e) =>
                                    function (...t) {
                                      return e.apply(this, v(t));
                                    },
                                ),
                                  f(
                                    e,
                                    "after",
                                    (e) =>
                                      function (...t) {
                                        return e.apply(this, v(t));
                                      },
                                  ),
                                  f(
                                    e,
                                    "replaceWith",
                                    (e) =>
                                      function (...t) {
                                        let i = v(t);
                                        return t.length && !i.length ? void 0 : e.apply(this, i);
                                      },
                                  ));
                              }),
                              f(
                                null == (a = l.Element) ? void 0 : a.prototype,
                                "insertAdjacentElement",
                                (e) =>
                                  function (t, i) {
                                    let s = g(i);
                                    return s ? e.call(this, t, s) : null;
                                  },
                              ),
                              (this.mf = () => {
                                (h.forEach((e) => e()), (this.mf = void 0));
                              }),
                              this.yf()
                            );
                          }
                          yf() {
                            let e = !1;
                            return () => {
                              var t;
                              e || ((e = !0), this.cf--, 0 === this.cf && (null == (t = this.mf) || t.call(this)));
                            };
                          }
                          bf(e, t = !0) {
                            let i = this.gf();
                            try {
                              let s = e(i);
                              return (t && i(), s);
                            } catch (e) {
                              throw (i(), e);
                            }
                          }
                          setupSiteApp(e) {
                            let t = this.apps[e.id],
                              i = () => {
                                var i;
                                (!t.errored &&
                                  this.df.length &&
                                  (aA.info(`Processing ${this.df.length} events for site app with id ${e.id}`),
                                  this.df.forEach((e) =>
                                    this.bf(() => {
                                      var i;
                                      return null == (i = t.processEvent) ? void 0 : i.call(t, e);
                                    }),
                                  ),
                                  (t.processedBuffer = !0)),
                                  Object.values(this.apps).every((e) => e.processedBuffer || e.errored) &&
                                    (null == (i = this.ff) || i.call(this)));
                              },
                              s = !1,
                              r = (r) => {
                                ((t.errored = !r),
                                  (t.loaded = !0),
                                  aA.info(`Site app with id ${e.id} ${r ? "loaded" : "errored"}`),
                                  s && i());
                              };
                            try {
                              let { processEvent: i } = this.bf(
                                (t) =>
                                  e.init({
                                    posthog: this._instance,
                                    callback(e) {
                                      (t(), r(e));
                                    },
                                  }),
                                !1,
                              );
                              (i && (t.processEvent = i), (s = !0));
                            } catch (t) {
                              (aA.error(aL + e.id, t), r(!1));
                            }
                            if (s && t.loaded)
                              try {
                                i();
                              } catch (i) {
                                (aA.error(
                                  `Error while processing buffered events PostHog app with config id ${e.id}`,
                                  i,
                                ),
                                  (t.errored = !0));
                              }
                          }
                          _f() {
                            let e = this.siteAppLoaders || [];
                            for (let t of e)
                              this.apps[t.id] = { id: t.id, loaded: !1, errored: !1, processedBuffer: !1 };
                            for (let t of e) this.setupSiteApp(t);
                          }
                          wf(e) {
                            if (0 === Object.keys(this.apps).length) return;
                            let t = this.globalsForEvent(e);
                            for (let i of Object.values(this.apps))
                              try {
                                this.bf(() => {
                                  var e;
                                  return null == (e = i.processEvent) ? void 0 : e.call(i, t);
                                });
                              } catch (t) {
                                aA.error(`Error while processing event ${e.event} for site app ${i.id}`, t);
                              }
                          }
                          onRemoteConfig(e) {
                            var t, i, s, r, n;
                            if (null == (t = this.siteAppLoaders) ? void 0 : t.length)
                              return this.isEnabled
                                ? (this._f(), void this._instance.on("eventCaptured", (e) => this.wf(e)))
                                : void aA.error(
                                    'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
                                  );
                            if ((null == (i = this.ff) || i.call(this), !e.ok)) return;
                            let o = e.config;
                            if (null == (s = o.siteApps) ? void 0 : s.length)
                              if (this.isEnabled)
                                for (let { id: e, url: t } of o.siteApps)
                                  ((w[`__$$ph_site_app_${e}`] = this._instance),
                                    null == (r = w.__PosthogExtensions__) ||
                                      null == (n = r.loadSiteApp) ||
                                      n.call(r, this._instance, t, (t) => {
                                        if (t) return aA.error(aL + e, t);
                                      }));
                              else
                                aA.error(
                                  'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
                                );
                          }
                        },
                      },
                    ),
                    lw,
                  ),
                  {
                    tracingHeaders: class {
                      constructor(e) {
                        ((this._instance = e),
                          (this.kf = void 0),
                          (this.Sf = void 0),
                          (this.xf = void 0),
                          (this.Nv = () => {
                            var e, t;
                            let i = this.Cf();
                            i
                              ? (z(this.kf) &&
                                  (this.kf =
                                    null == (e = w.__PosthogExtensions__) || null == (e = e.tracingHeadersPatchFns)
                                      ? void 0
                                      : e._patchXHR(
                                          i,
                                          () => this._instance.get_distinct_id(),
                                          this._instance.sessionManager,
                                        )),
                                z(this.Sf) &&
                                  (this.Sf =
                                    null == (t = w.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns)
                                      ? void 0
                                      : t._patchFetch(
                                          i,
                                          () => this._instance.get_distinct_id(),
                                          this._instance.sessionManager,
                                        )))
                              : this.Uv();
                          }));
                      }
                      initialize() {
                        this.startIfEnabledOrStop();
                      }
                      qo(e) {
                        var t, i, s;
                        (null == (t = w.__PosthogExtensions__) ? void 0 : t.tracingHeadersPatchFns)
                          ? e()
                          : null == (i = w.__PosthogExtensions__) ||
                            null == (s = i.loadExternalDependency) ||
                            s.call(i, this._instance, "tracing-headers", (t) => {
                              if (t) return ax.error("failed to load script", t);
                              e();
                            });
                      }
                      $f() {
                        var e, t;
                        return null !=
                          (e =
                            null != (t = this._instance.config.tracing_headers)
                              ? t
                              : this._instance.config.addTracingHeaders)
                          ? e
                          : this._instance.config.__add_tracing_headers;
                      }
                      Cf() {
                        let e = this.$f();
                        return j(e)
                          ? (j(this.xf) ? this.xf.splice(0, this.xf.length, ...e) : (this.xf = [...e]),
                            e.length > 0 ? this.xf : void 0)
                          : (j(this.xf) && this.xf.splice(0), (this.xf = e || void 0), this.xf);
                      }
                      Uv() {
                        var e, t;
                        (null == (e = this.kf) || e.call(this),
                          null == (t = this.Sf) || t.call(this),
                          (this.kf = void 0),
                          (this.Sf = void 0));
                      }
                      startIfEnabledOrStop() {
                        this.Cf() ? this.qo(this.Nv) : this.Uv();
                      }
                    },
                  },
                ),
                {
                  toolbar: class {
                    constructor(e) {
                      this.instance = e;
                    }
                    Tf(e) {
                      w.ph_toolbar_state = e;
                    }
                    If() {
                      var e;
                      return null != (e = w.ph_toolbar_state) ? e : 0;
                    }
                    initialize() {
                      return this.maybeLoadToolbar();
                    }
                    maybeLoadToolbar(e, t, i) {
                      var s, r;
                      if (sB(this.instance.config) || !u || !d) return !1;
                      ((e = null != (s = e) ? s : u.location), (i = null != (r = i) ? r : u.history));
                      try {
                        let s;
                        if (!t) {
                          try {
                            (u.localStorage.setItem("test", "test"), u.localStorage.removeItem("test"));
                          } catch (e) {
                            return !1;
                          }
                          t = null == u ? void 0 : u.localStorage;
                        }
                        let r = aG || r4(e.hash, "__posthog") || r4(e.hash, "state"),
                          n = r
                            ? tf(() => JSON.parse(atob(decodeURIComponent(r)))) ||
                              tf(() => JSON.parse(decodeURIComponent(r)))
                            : null;
                        return (
                          n && "ph_authorize" === n.action
                            ? (((s = n).source = "url"),
                              s &&
                                Object.keys(s).length > 0 &&
                                (n.desiredHash
                                  ? (e.hash = n.desiredHash)
                                  : i
                                    ? i.replaceState(i.state, "", e.pathname + e.search)
                                    : (e.hash = "")))
                            : (((s = JSON.parse(t.getItem(aK) || "{}")).source = "localstorage"), delete s.userIntent),
                          !(!s.token || this.instance.config.token !== s.token || (this.loadToolbar(s), 0))
                        );
                      } catch (e) {
                        return !1;
                      }
                    }
                    Mf(e) {
                      let t = w.ph_load_toolbar || w.ph_load_editor;
                      !G(t) && q(t) ? t(e, this.instance) : aX.warn("No toolbar load function found");
                    }
                    loadToolbar(e) {
                      let t = !!(null == d ? void 0 : d.getElementById("__POSTHOG_TOOLBAR__"));
                      if (!u || t) return !1;
                      let i =
                          "custom" === this.instance.requestRouter.region &&
                          this.instance.config.advanced_disable_toolbar_metrics,
                        s = tb(
                          tb({ token: this.instance.config.token }, e),
                          {},
                          { apiURL: this.instance.requestRouter.endpointFor("ui") },
                          i ? { instrument: !1 } : {},
                        );
                      if (
                        (u.localStorage.setItem(aK, JSON.stringify(tb(tb({}, s), {}, { source: void 0 }))),
                        2 === this.If())
                      )
                        this.Mf(s);
                      else if (0 === this.If()) {
                        var r, n;
                        (this.Tf(1),
                          null == (r = w.__PosthogExtensions__) ||
                            null == (n = r.loadExternalDependency) ||
                            n.call(r, this.instance, "toolbar", (e) => {
                              e ? (aX.error("[Toolbar] Failed to load", e), this.Tf(0)) : (this.Tf(2), this.Mf(s));
                            }),
                          sq(u, "turbolinks:load", () => {
                            (this.Tf(0), this.loadToolbar(s));
                          }));
                      }
                      return !0;
                    }
                    Ef(e) {
                      return this.loadToolbar(e);
                    }
                    maybeLoadEditor(e, t, i) {
                      return this.maybeLoadToolbar(e, t, i);
                    }
                  },
                },
              ),
              lx,
            ),
            {
              conversations: class {
                constructor(e) {
                  ((this._instance = e),
                    (this.Nf = void 0),
                    (this._conversationsManager = null),
                    (this.qf = !1),
                    (this.ne = null),
                    (this.jf = !1));
                }
                initialize() {
                  this.loadIfEnabled();
                }
                onRemoteConfig(e) {
                  if (this._instance.config.disable_conversations || ((this.Bf = e.ok), !e.ok)) return;
                  let t = e.config.conversations;
                  G(t) || (J(t) ? (this.Nf = t) : ((this.Nf = t.enabled), (this.ne = t)), this.loadIfEnabled());
                }
                reset() {
                  var e;
                  (null == (e = this._conversationsManager) || e.reset(),
                    (this._conversationsManager = null),
                    (this.Nf = void 0),
                    (this.ne = null),
                    (this.Bf = void 0),
                    (this.jf = !1));
                }
                loadIfEnabled() {
                  if (
                    this._conversationsManager ||
                    this.qf ||
                    this._instance.config.disable_conversations ||
                    sB(this._instance.config) ||
                    (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())
                  )
                    return;
                  let e = null == w ? void 0 : w.__PosthogExtensions__;
                  if (e && !z(this.Nf) && this.Nf)
                    if (this.ne && this.ne.token) {
                      this.qf = !0;
                      try {
                        let t = e.initConversations;
                        if (t) return (this.Hf(t), void (this.qf = !1));
                        let i = e.loadExternalDependency;
                        if (!i) return void this.zf(sx);
                        i(this._instance, "conversations", (t) => {
                          (t || !e.initConversations
                            ? this.zf("Could not load conversations script", t)
                            : this.Hf(e.initConversations),
                            (this.qf = !1));
                        });
                      } catch (e) {
                        (this.zf("Error initializing conversations", e), (this.qf = !1));
                      }
                    } else ls.error("Conversations enabled but missing token in remote config.");
                }
                Hf(e) {
                  if (this.ne)
                    try {
                      ((this._conversationsManager = e(this.ne, this._instance)),
                        (this.jf = !1),
                        ls.info("Conversations loaded successfully"));
                    } catch (e) {
                      this.zf("Error completing conversations initialization", e);
                    }
                  else ls.error("Cannot complete initialization: remote config is null");
                }
                zf(e, t) {
                  (ls.error(e, t), (this._conversationsManager = null), (this.qf = !1), (this.jf = !0));
                }
                show() {
                  this._conversationsManager
                    ? this._conversationsManager.show()
                    : ls.warn("Conversations not loaded yet.");
                }
                hide() {
                  this._conversationsManager && this._conversationsManager.hide();
                }
                isAvailable() {
                  return !0 === this.Nf && !W(this._conversationsManager);
                }
                getUnavailableReason() {
                  return this.isAvailable()
                    ? null
                    : this._instance.config.disable_conversations
                      ? "disabled_by_config"
                      : sB(this._instance.config)
                        ? "disabled_for_toolbar"
                        : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()
                          ? "consent_opted_out"
                          : !1 === this.Bf
                            ? "remote_config_failed"
                            : z(this.Nf)
                              ? this.Bf
                                ? "disabled_in_project"
                                : "remote_config_pending"
                              : this.Nf
                                ? G(this.ne) || !this.ne.token
                                  ? "missing_token"
                                  : (null == w ? void 0 : w.__PosthogExtensions__)
                                    ? this.qf
                                      ? "initializing"
                                      : this.jf
                                        ? "load_failed"
                                        : "not_loaded"
                                    : "extensions_unavailable"
                                : "disabled_in_project";
                }
                isVisible() {
                  var e, t;
                  return null != (e = null == (t = this._conversationsManager) ? void 0 : t.isVisible()) && e;
                }
                sendMessage(e, t, i) {
                  var s = this;
                  return ea(function* () {
                    return s._conversationsManager ? s._conversationsManager.sendMessage(e, t, i) : (ls.warn(lr), null);
                  })();
                }
                getMessages(e, t) {
                  var i = this;
                  return ea(function* () {
                    return i._conversationsManager ? i._conversationsManager.getMessages(e, t) : (ls.warn(lr), null);
                  })();
                }
                markAsRead(e) {
                  var t = this;
                  return ea(function* () {
                    return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (ls.warn(lr), null);
                  })();
                }
                getTickets(e) {
                  var t = this;
                  return ea(function* () {
                    return t._conversationsManager ? t._conversationsManager.getTickets(e) : (ls.warn(lr), null);
                  })();
                }
                requestRestoreLink(e) {
                  var t = this;
                  return ea(function* () {
                    return t._conversationsManager
                      ? t._conversationsManager.requestRestoreLink(e)
                      : (ls.warn(lr), null);
                  })();
                }
                restoreFromToken(e) {
                  var t = this;
                  return ea(function* () {
                    return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (ls.warn(lr), null);
                  })();
                }
                restoreFromUrlToken() {
                  var e = this;
                  return ea(function* () {
                    return e._conversationsManager
                      ? e._conversationsManager.restoreFromUrlToken()
                      : (ls.warn(lr), null);
                  })();
                }
                getCurrentTicketId() {
                  var e, t;
                  return null != (e = null == (t = this._conversationsManager) ? void 0 : t.getCurrentTicketId())
                    ? e
                    : null;
                }
                getWidgetSessionId() {
                  var e, t;
                  return null != (e = null == (t = this._conversationsManager) ? void 0 : t.getWidgetSessionId())
                    ? e
                    : null;
                }
                bh() {
                  var e;
                  null == (e = this._conversationsManager) || e.setIdentity();
                }
                _h() {
                  var e;
                  null == (e = this._conversationsManager) || e.clearIdentity();
                }
              },
            },
          ),
          {
            logs: class {
              constructor(e) {
                var t;
                ((this._instance = e),
                  (this.name = "logs"),
                  (this.Uf = !1),
                  (this.Wf = !1),
                  (this.Vf = !1),
                  (this.$ = iE("[logs]")),
                  (this.Gf = tb(
                    tb({}, this.$),
                    {},
                    {
                      error: (...e) => {
                        e.some(lc) || this.$.error(...e);
                      },
                    },
                  )),
                  (this.na = []),
                  (this.Zf = []),
                  (this.od = 0),
                  (this.xo = !1),
                  (this.Qf = []),
                  (this.Jf = []),
                  (this.Kf = !1),
                  (this.Xf = !1),
                  (this.Yf = () => {
                    var e, t;
                    this.xo ||
                      ((this.od = 0),
                      null == (e = this.tp) || e.onReconnect(),
                      null == (t = this.ep) || t.onReconnect());
                  }),
                  this._instance &&
                    (null == (t = this._instance.config.logs) ? void 0 : t.captureConsoleLogs) &&
                    (this.Uf = !0),
                  u && sq(u, "online", this.Yf));
              }
              np(e, t, i, s) {
                var r;
                let n = ln(null == (r = this._instance) || null == (r = r.config) ? void 0 : r.logs, i);
                return [
                  new i_(
                    this.sp(e, t),
                    n,
                    this.Gf,
                    () => this.rp(),
                    (e) => e(),
                    void 0,
                    s,
                  ),
                  n,
                ];
              }
              op() {
                var e, t;
                let i = null == (e = this._instance) || null == (e = e.config) ? void 0 : e.logs;
                return (
                  (this.tp && this.lp === i) ||
                    (null == (t = this.tp) || t.reset(),
                    (this.lp = i),
                    ([this.tp, this.ap] = this.np(
                      () => this.na,
                      (e) => {
                        this.na = e;
                      },
                    ))),
                  this.tp
                );
              }
              up() {
                var e, t;
                let i = null == (e = this._instance) || null == (e = e.config) ? void 0 : e.logs;
                return (
                  (this.ep && this.hp === i) ||
                    (null == (t = this.ep) || t.reset(),
                    (this.hp = i),
                    ([this.ep, this.cp] = this.np(
                      () => this.Zf,
                      (e) => {
                        this.Zf = e;
                      },
                      { serviceNameDefault: "posthog-browser-logs", consoleCapture: !0 },
                      ll,
                    ))),
                  this.ep
                );
              }
              setup(e) {
                var t;
                if (this.xo) return;
                ((this.mo = e),
                  (null == (t = this._instance) || null == (t = t.config) || null == (t = t.logs)
                    ? void 0
                    : t.captureConsoleLogs) && (this.Uf = !0),
                  (this.Uf || (this.dp() && this.vp())) && this.fp());
                let i = !1,
                  s = e.onRemoteConfig((e) => {
                    var t;
                    ((i = e.ok && !0 === (null == (t = e.config.logs) ? void 0 : t.captureConsoleLogs)),
                      this.onRemoteConfig(e));
                  });
                this.xo ? s.dispose() : ((this.To = s), i || this.loadIfEnabled());
              }
              dispose() {
                var e, t, i, s;
                this.xo ||
                  ((this.xo = !0),
                  this.pp(),
                  null == (e = this.To) || e.dispose(),
                  (this.To = void 0),
                  (this.mo = void 0),
                  (this.Vf = !1),
                  null == u || u.removeEventListener("online", this.Yf),
                  null == (t = this.gp) || t.call(this),
                  (this.gp = void 0),
                  null == (i = this.tp) || i.reset(),
                  null == (s = this.ep) || s.reset());
              }
              onRemoteConfig(e) {
                var t, i;
                if (this.xo) return;
                let s = e.ok ? (null == (t = e.config.logs) ? void 0 : t.captureConsoleLogs) : void 0;
                G(s)
                  ? this.mp()
                  : (null == (i = this._instance) ||
                      null == (i = i.persistence) ||
                      i.register({ $logs_capture_enabled_server_side: !!s }),
                    s ? ((this.Uf = !0), this.Wf || this.fp(), this.loadIfEnabled()) : this.mp());
              }
              reset() {
                var e, t, i, s;
                (this.pp(),
                  null == (e = this.tp) || e.clearQueue(),
                  (this.na = []),
                  null == (t = this.tp) || t.reset(),
                  null == (i = this.ep) || i.clearQueue(),
                  (this.Zf = []),
                  null == (s = this.ep) || s.reset(),
                  (this.od = 0));
              }
              captureLog(e) {
                this.xo || this.op().captureLog(e);
              }
              captureConsoleLog(e) {
                this.xo || this.up().captureLog(e);
              }
              captureBufferedConsoleLog(e, t, i) {
                this.xo || this.up().captureLog(e, { context: t, occurredAtMs: i });
              }
              vp() {
                var e;
                return !!(null == (e = this._instance) || null == (e = e.persistence) || null == (e = e.props)
                  ? void 0
                  : e[iG]);
              }
              dp() {
                var e, t, i;
                return (
                  !(null == (e = this._instance) || null == (t = e.Yl) ? void 0 : t.call(e)) ||
                  !!(null == (i = w._POSTHOG_REMOTE_CONFIG) || null == (i = i[this._instance.config.token])
                    ? void 0
                    : i.config)
                );
              }
              kh() {
                var e;
                (this.pp(), null == (e = this.ep) || e.clearQueue(), (this.Zf = []));
              }
              mp() {
                this.Uf || this.pp();
              }
              fp() {
                var e;
                if (this.Kf || !(null == w ? void 0 : w.console)) return;
                let t = ln(null == (e = this._instance) || null == (e = e.config) ? void 0 : e.logs).maxBufferSize,
                  i = !0;
                for (let e of (this.Jf.push(() => {
                  i = !1;
                }),
                lo)) {
                  let s;
                  try {
                    s = la(w.console[e]);
                  } catch (e) {
                    continue;
                  }
                  s &&
                    this.Jf.push(
                      aw(w.console, e, (r) => {
                        let n = (...s) => {
                          try {
                            i && this.yp(e, s, t);
                          } catch (e) {}
                          return r.apply(w.console, s);
                        };
                        return ((n.__rrweb_original__ = s), n);
                      }),
                    );
                }
                ((this.Kf = !0),
                  (this.bp = setTimeout(() => {
                    this.pp();
                  }, 3e4)));
              }
              yp(e, t, i) {
                var s;
                if (this.Kf && !this.Xf && 0 !== t.length)
                  if (null == (s = this._instance) ? void 0 : s.is_capturing()) {
                    if (i > this.Qf.length) {
                      this.Xf = !0;
                      try {
                        this.Qf.push({ level: e, args: t, occurredAtMs: Date.now(), context: this.rp() });
                      } finally {
                        this.Xf = !1;
                      }
                    }
                  } else this.pp();
              }
              pp() {
                if (((this.Qf = []), this.Kf)) {
                  for (let e of ((this.Kf = !1), this.bp && (clearTimeout(this.bp), (this.bp = void 0)), this.Jf)) e();
                  this.Jf = [];
                }
              }
              _p() {
                let e = this.Qf;
                return (this.pp(), e);
              }
              get logger() {
                return (
                  this.wp ||
                    (this.wp = {
                      trace: (e, t) => this.captureLog({ body: e, level: "trace", attributes: t }),
                      debug: (e, t) => this.captureLog({ body: e, level: "debug", attributes: t }),
                      info: (e, t) => this.captureLog({ body: e, level: "info", attributes: t }),
                      warn: (e, t) => this.captureLog({ body: e, level: "warn", attributes: t }),
                      error: (e, t) => this.captureLog({ body: e, level: "error", attributes: t }),
                      fatal: (e, t) => this.captureLog({ body: e, level: "fatal", attributes: t }),
                    }),
                  this.wp
                );
              }
              flushLogs(e) {
                e
                  ? this.kp(e)
                  : (this.tp && this.tp.flush().catch((e) => this.Sp(e)),
                    this.ep && this.ep.flush().catch((e) => this.Sp(e)));
              }
              Sp(e) {
                lc(e) || this.$.error("PostHog logs flush failed:", e);
              }
              loadIfEnabled() {
                if (this.xo || !this.Uf || this.Wf || this.Vf) return;
                let e = null == w ? void 0 : w.__PosthogExtensions__;
                if (!e) return (this.$.error("PostHog Extensions not found."), void this.pp());
                let t = e.loadExternalDependency;
                if (!t) return (this.$.error(sx), void this.pp());
                this.Vf = !0;
                try {
                  t(this._instance, "logs", (t) => {
                    if (((this.Vf = !1), this.xo || !this.Uf)) return;
                    let i = e.logs;
                    if (!t && (null == i ? void 0 : i.initializeLogs)) {
                      var s, r, n;
                      let e = this._p();
                      ((this.gp = i.initializeLogs(null != (s = this.mo) ? s : this._instance)),
                        (this.Wf = !0),
                        e.length > 0 &&
                          (null == (r = i.replayConsoleBuffer) ||
                            r.call(i, null != (n = this.mo) ? n : this._instance, e)));
                    } else (this.$.error("Could not load logs script", t), this.pp());
                  });
                } catch (e) {
                  throw ((this.Vf = !1), e);
                }
              }
              sp(e, t) {
                let i = this._instance;
                return {
                  get isDisabled() {
                    return !1;
                  },
                  get optedOut() {
                    return !i.is_capturing();
                  },
                  getPersistedProperty: (t) => (t === P.LogsQueue ? e() : void 0),
                  setPersistedProperty(e, i) {
                    e === P.LogsQueue && t(null != i ? i : []);
                  },
                  js: (e) => this.js(e),
                  getLibraryId: () => k.LIB_NAME,
                  getLibraryVersion: () => k.LIB_VERSION,
                };
              }
              js(e) {
                return new Promise((t) => {
                  if (r6(this.od, 3))
                    return void t({ kind: "fatal", error: lh(void 0, "logs endpoint is unreachable, dropping batch") });
                  let i = !1,
                    s = (e) => {
                      i || ((i = !0), clearTimeout(r), t(e));
                    },
                    r = setTimeout(() => {
                      (this.$.warn("Logs request timed out before receiving a response"),
                        s({ kind: "retry-later", error: lh(void 0, "logs request timed out") }));
                    }, 9e4);
                  this._instance._send_request({
                    method: "POST",
                    url: this.xp(),
                    data: e,
                    compression: "best-available",
                    batchKey: "logs",
                    fireCallbackOnDrop: !0,
                    callback: (e) => {
                      let t = e.statusCode;
                      if ((this.Cp(t), t >= 200 && 300 > t)) s({ kind: "ok" });
                      else if (413 === t) s({ kind: "too-large" });
                      else if (0 !== t && 408 !== t && 429 !== t && 500 > t)
                        s({ kind: "fatal", error: Error(`logs request failed with status ${t}`) });
                      else {
                        var i;
                        0 === t
                          ? (e.error || this.$.warn("Logs request failed before receiving an HTTP response"),
                            s({
                              kind: "retry-later",
                              error: lh(e.error, "logs request failed before receiving an HTTP response"),
                            }))
                          : s({
                              kind: "retry-later",
                              error: null != (i = e.error) ? i : Error(`logs request failed with status ${t}`),
                            });
                      }
                    },
                  });
                });
              }
              Cp(e) {
                (0 !== e || this._instance.__loaded) &&
                  (this.od = r8(e, this.od, 3, () =>
                    this.$.warn(
                      "Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.",
                    ),
                  ));
              }
              kp(e) {
                (this.na.length > 0 &&
                  this.$p(e, this.na, this.ap, k.LIB_NAME, (e) => {
                    this.na = e;
                  }),
                  this.Zf.length > 0 &&
                    this.$p(e, this.Zf, this.cp, ll, (e) => {
                      this.Zf = e;
                    }));
              }
              $p(e, t, i, s, r) {
                if (0 === t.length) return;
                let n = t.map((e) => e.record);
                r([]);
                let o = id(n, io(i, k.LIB_NAME, k.LIB_VERSION), s, k.LIB_VERSION);
                this._instance._send_request({
                  method: "POST",
                  url: this.xp(),
                  data: o,
                  compression: "best-available",
                  batchKey: "logs",
                  transport: e,
                });
              }
              xp() {
                return (
                  this._instance.requestRouter.endpointFor("api", "/i/v1/logs") +
                  "?token=" +
                  encodeURIComponent(this._instance.config.token)
                );
              }
              rp() {
                var e;
                let t = {};
                if (((t.distinctId = this._instance.get_distinct_id()), this._instance.sessionManager)) {
                  let {
                    sessionId: e,
                    windowId: i,
                    sessionStartTimestamp: s,
                    lastActivityTimestamp: r,
                  } = this._instance.sessionManager.checkAndGetSessionAndWindowId(!0);
                  ((t.sessionId = e),
                    (t.windowId = i),
                    G(s) || (t.sessionStartTimestamp = s),
                    G(r) || (t.lastActivityTimestamp = r));
                }
                if (
                  ((null == w || null == (e = w.location) ? void 0 : e.href) &&
                    (t.currentUrl = this._instance.config.disable_capture_url_hashes
                      ? tp(w.location.href)
                      : w.location.href),
                  this._instance.featureFlags)
                ) {
                  let e = this._instance.featureFlags.getFlags();
                  e && e.length > 0 && (t.activeFeatureFlags = e);
                }
                return t;
              }
            },
          },
        ),
        {
          metrics: class {
            constructor(e) {
              ((this._instance = e), (this.$ = iE("[metrics]")), (this.xo = !1));
            }
            initialize() {
              this.onConfigChange();
            }
            onConfigChange() {
              var e, t;
              let i, s, r, n;
              if (this.xo) return;
              let o = !!(null == (e = this._instance.config.metrics) ? void 0 : e.network);
              o && !this.Tp
                ? (this.Tp =
                    ((t = this._instance),
                    (i = !0),
                    (s = () => {
                      var e;
                      let s;
                      return i
                        ? !0 === (s = null == (e = t.config.metrics) ? void 0 : e.network)
                          ? {}
                          : s || void 0
                        : void 0;
                    }),
                    (r = q(null == u ? void 0 : u.fetch)
                      ? aw(
                          u,
                          "fetch",
                          (e) =>
                            function (...i) {
                              let r = lp(),
                                n = e.apply(this, i);
                              if (!s()) return n;
                              try {
                                var o, a, l;
                                let [e, u] = i,
                                  h = lv(
                                    null !=
                                      (o =
                                        null != (a = null == u ? void 0 : u.method) ? a : null == e ? void 0 : e.method)
                                      ? o
                                      : "GET",
                                    null != (l = null == e ? void 0 : e.url) ? l : e,
                                  );
                                return n.then(
                                  (e) => (l_(t, h, null == e ? void 0 : e.status, r, s, void 0, !0), e),
                                  (e) => {
                                    throw (l_(t, h, void 0, r, s, e), e);
                                  },
                                );
                              } catch (e) {
                                return (ld.error("Failed to observe fetch", e), n);
                              }
                            },
                        )
                      : lm),
                    (n = ((e, t) => {
                      var i;
                      let s = null == u || null == (i = u.XMLHttpRequest) ? void 0 : i.prototype;
                      if (!s) return lm;
                      let r = new WeakMap(),
                        n = aw(
                          s,
                          "open",
                          (e) =>
                            function (...t) {
                              try {
                                oo.has(this) || r.set(this, lv(t[0], t[1]));
                              } catch (e) {
                                ld.error("Failed to observe XHR open", e);
                              }
                              return e.apply(this, t);
                            },
                        ),
                        o = aw(
                          s,
                          "send",
                          (i) =>
                            function (...s) {
                              let n;
                              try {
                                let i = r.get(this);
                                if (i && t()) {
                                  let s = lp();
                                  ((n = () => {
                                    (this.removeEventListener("loadend", n), l_(e, i, this.status, s, t));
                                  }),
                                    sq(this, "loadend", n));
                                }
                              } catch (e) {
                                ld.error("Failed to observe XHR send", e);
                              }
                              try {
                                return i.apply(this, s);
                              } catch (e) {
                                throw (n && this.removeEventListener("loadend", n), e);
                              }
                            },
                        );
                      return () => {
                        (n(), o());
                      };
                    })(t, s)),
                    () => {
                      ((i = !1), r(), n());
                    }))
                : !o && this.Tp && (this.Tp(), (this.Tp = void 0));
            }
            op() {
              var e, t, i, s, r, n, o;
              let a,
                l = null == (e = this._instance) || null == (e = e.config) ? void 0 : e.metrics;
              return (
                (this.tp && this.lp === l) ||
                  (null == (t = this.tp) || t.reset(),
                  (this.lp = l),
                  (this.tp = new iw(
                    this.sp(),
                    {
                      serviceName:
                        null !=
                        (i = null == (a = null == l ? void 0 : l.resourceAttributes) ? void 0 : a["service.name"])
                          ? i
                          : null == l
                            ? void 0
                            : l.serviceName,
                      serviceVersion:
                        null != (s = null == a ? void 0 : a["service.version"])
                          ? s
                          : null == l
                            ? void 0
                            : l.serviceVersion,
                      environment:
                        null != (r = null == a ? void 0 : a["deployment.environment"])
                          ? r
                          : null == l
                            ? void 0
                            : l.environment,
                      resourceAttributes: a,
                      beforeSend: null == l ? void 0 : l.beforeSend,
                      flushIntervalMs: null != (n = null == l ? void 0 : l.flushIntervalMs) ? n : 1e4,
                      maxSeriesPerFlush: null != (o = null == l ? void 0 : l.maxSeriesPerFlush) ? o : 1e3,
                    },
                    this.$,
                  ))),
                this.tp
              );
            }
            count(e, t = 1, i) {
              this.op().count(e, t, i);
            }
            gauge(e, t, i) {
              this.op().gauge(e, t, i);
            }
            histogram(e, t, i) {
              this.op().histogram(e, t, i);
            }
            flush(e) {
              if (!this.tp) return Promise.resolve();
              if (e) {
                let t = this.tp.drainWindow();
                return (t && this.Ys(t, e), Promise.resolve());
              }
              return this.tp.flush().catch((e) => this.$.error("PostHog metrics flush failed:", e));
            }
            reset() {
              var e;
              null == (e = this.tp) || e.reset();
            }
            dispose() {
              var e, t;
              ((this.xo = !0),
                null == (e = this.Tp) || e.call(this),
                (this.Tp = void 0),
                null == (t = this.tp) || t.reset());
            }
            sp() {
              let e = this._instance,
                t = this;
              return {
                get isDisabled() {
                  return !1;
                },
                get optedOut() {
                  return !e.is_capturing();
                },
                Ys: (e) => t.Ys(e),
                getLibraryId: () => k.LIB_NAME,
                getLibraryVersion: () => k.LIB_VERSION,
              };
            }
            Ys(e, t) {
              return new Promise((i) => {
                let s = !1,
                  r = (e) => {
                    s || ((s = !0), clearTimeout(n), i(e));
                  },
                  n = setTimeout(() => r({ kind: "retry-later", error: Error("metrics request timed out") }), 9e4);
                this._instance._send_request(
                  tb(
                    tb(
                      { method: "POST", url: this.Ip(), data: e, compression: "best-available", batchKey: "metrics" },
                      t && { transport: t },
                    ),
                    {},
                    {
                      fireCallbackOnDrop: !0,
                      callback(e) {
                        let t = e.statusCode;
                        if (t >= 200 && 300 > t) r({ kind: "ok" });
                        else if (413 === t) r({ kind: "too-large" });
                        else if (0 !== t && 408 !== t && 429 !== t && 500 > t)
                          r({ kind: "fatal", error: Error(`metrics request failed with status ${t}`) });
                        else {
                          var i;
                          r({
                            kind: "retry-later",
                            error: null != (i = e.error) ? i : Error(`metrics request failed with status ${t}`),
                          });
                        }
                      },
                    },
                  ),
                );
              });
            }
            Ip() {
              return (
                this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") +
                "?token=" +
                encodeURIComponent(this._instance.config.token)
              );
            }
          },
        },
      ),
    );
    let lk =
      ((k.SDK_DIST_CHANNEL = "npm"),
      (l = o4[ao] = new ac()),
      (function () {
        function e() {
          e.done ||
            ((e.done = !0),
            (oE = !1),
            sM(o4, function (e) {
              e._dom_loaded();
            }));
        }
        (null == d ? void 0 : d.addEventListener)
          ? "complete" === d.readyState
            ? e()
            : sq(d, "DOMContentLoaded", e, { capture: !1 })
          : u && ik.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
      })(),
      l);
    e.s(["default", 0, lk]);
  },
]);
