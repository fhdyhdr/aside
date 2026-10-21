const API_PROXY_PREFIX = "/_clone/api/";
const API_PROXY_HOST_RE = /(?:^|\.)(?:sanity\.io)$/i;
async function serveApiProxy(request, response) {
  const u = new URL(request.url, "http://localhost");
  if (!u.pathname.startsWith(API_PROXY_PREFIX)) return false;
  const rest = u.pathname.slice(API_PROXY_PREFIX.length);
  const slash = rest.indexOf("/");
  const host = slash === -1 ? rest : rest.slice(0, slash);
  const path = slash === -1 ? "/" : rest.slice(slash);
  if (!host || !/^[a-z0-9.-]+$/i.test(host) || !API_PROXY_HOST_RE.test(host)) return false;
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  try {
    const upstream = await fetch("https://" + host + path + u.search, {
      method: request.method,
      headers: {
        "content-type": request.headers["content-type"] || "application/json",
        accept: request.headers["accept"] || "*/*",
        "user-agent": request.headers["user-agent"] || "site-clone",
      },
      body: request.method === "GET" || request.method === "HEAD" ? undefined : Buffer.concat(chunks),
    });
    const body = Buffer.from(await upstream.arrayBuffer());
    response.writeHead(upstream.status, {
      "content-type": upstream.headers.get("content-type") || "application/octet-stream",
      "content-length": body.length,
      "cache-control": "no-store",
    });
    response.end(body);
  } catch (error) {
    response.writeHead(502, { "content-type": "text/plain" });
    response.end("Upstream API unreachable");
  }
  return true;
}

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};
// Media and everything under assets/ never changes during development, so
// browsers serve them from cache on refresh (no lag). The HTML that holds the
// content plus CSS/JS are always revalidated so edits show up immediately.
const IMMUTABLE_RE = /\.(png|jpe?g|gif|webp|avif|ico|mp4|webm|mp3|m4a|ogg|wav|woff2?|ttf|otf|svg)$|^assets\//;

const IMAGE_MAP = {"https://aside.com/_next/static/immutable/media/797e433ab948586e-s.p.1v5bejj26fx9h.woff2":"assets/fonts/1265a4fa-797e433ab948586e-s.p.1v5bejj26fx9h.woff2","https://aside.com/_next/static/immutable/media/AsideDisplay_Variable-s.p.1sv22ercfkh3x.woff2":"assets/fonts/431209dd-AsideDisplay_Variable-s.p.1sv22ercfkh3x.woff2","https://aside.com/_next/static/immutable/media/caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2":"assets/fonts/ad76cdde-caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2","https://aside.com/favicon.ico?favicon.0lpsp_yt1579-.ico":"assets/icons/265f568c-favicon.ico","https://aside.com/favicon.ico":"assets/icons/265f568c-favicon.ico","https://aside.com/_next/static/immutable/media/icon-google.0me3_e-g89-ei.png":"assets/images/e3952877-icon-google.0me3_e-g89-ei.png","https://aside.com/_next/static/immutable/media/icon-slack.2tnril4x7v74t.png":"assets/images/a32888be-icon-slack.2tnril4x7v74t.png","https://aside.com/_next/static/immutable/media/icon-ycombinator.3g_mp0zdg4us-.png":"assets/images/17b4fa94-icon-ycombinator.3g_mp0zdg4us-.png","https://aside.com/_next/static/immutable/media/task-website-design.3xvdo7pmp6g4z.png":"assets/images/099276e0-task-website-design.3xvdo7pmp6g4z.png","https://aside.com/_next/static/immutable/media/task-park.0eqyq6gfd0zm4.png":"assets/images/86c950f1-task-park.0eqyq6gfd0zm4.png","https://aside.com/_next/static/immutable/media/task-briefing.00ed4ci_knaoh.png":"assets/images/45abbc6d-task-briefing.00ed4ci_knaoh.png","https://aside.com/_next/static/immutable/media/page-curl-top.1t35kmrgmqhj0.png":"assets/images/0f935beb-page-curl-top.1t35kmrgmqhj0.png","https://aside.com/_next/static/immutable/media/1.128t-vhmdbwp7.png":"assets/images/38810c31-1.128t-vhmdbwp7.png","https://aside.com/_next/static/immutable/media/2.0sjx52o1m2j5u.png":"assets/images/ae4e1158-2.0sjx52o1m2j5u.png","https://aside.com/_next/static/immutable/media/1.1d6n3khmb26p_.webp":"assets/images/34ead902-1.1d6n3khmb26p_.webp","https://aside.com/_next/static/immutable/media/2.23cqtpb5x3dng.webp":"assets/images/67ca229f-2.23cqtpb5x3dng.webp","https://aside.com/_next/static/immutable/media/3.2t8whzu_s0tv6.webp":"assets/images/d12c8125-3.2t8whzu_s0tv6.webp","https://aside.com/_next/static/immutable/media/banner.1c099t9pt7-1c.webp":"assets/images/755ad248-banner.1c099t9pt7-1c.webp","https://aside.com/_next/static/immutable/media/1.3-b62prl6in98.png":"assets/images/fbaa022c-1.3-b62prl6in98.png","https://aside.com/_next/static/immutable/media/2.3ukhkerkzdgq8.png":"assets/images/25f05034-2.3ukhkerkzdgq8.png","https://aside.com/_next/static/immutable/media/3.3tb2mnvz7y2i6.png":"assets/images/e13bd64b-3.3tb2mnvz7y2i6.png","https://aside.com/_next/static/immutable/media/fef07dbb0973bf53-s.00az9qtie3ho1.woff2":"assets/fonts/867e6dea-fef07dbb0973bf53-s.00az9qtie3ho1.woff2","https://aside.com/_next/static/immutable/media/8a480f0b521d4e75-s.3j-a226dh71aj.woff2":"assets/fonts/4a64e593-8a480f0b521d4e75-s.3j-a226dh71aj.woff2","https://aside.com/_next/static/immutable/media/53b9e256198e5412-s.2gwoz23eiro2t.woff2":"assets/fonts/1b452d52-53b9e256198e5412-s.2gwoz23eiro2t.woff2","https://aside.com/_next/static/immutable/media/7178b3e590c64307-s.0i3h3th1vs4m7.woff2":"assets/fonts/871ade00-7178b3e590c64307-s.0i3h3th1vs4m7.woff2","https://aside.com/_next/static/immutable/media/5ce348bf30bf5439-s.27spqqad3wyeo.woff2":"assets/fonts/1590d13a-5ce348bf30bf5439-s.27spqqad3wyeo.woff2","https://aside.com/_next/static/immutable/media/4fa387ec64143e14-s.3f4zuumv8svu0.woff2":"assets/fonts/d4f6abb1-4fa387ec64143e14-s.3f4zuumv8svu0.woff2","https://aside.com/_next/static/immutable/media/6306c77e7c8268e4-s.34r5yzckw0h2s.woff2":"assets/fonts/e1568112-6306c77e7c8268e4-s.34r5yzckw0h2s.woff2","https://aside.com/_next/static/immutable/media/7d817b4c03b0c5f1-s.2jyz_zw3a8jit.woff2":"assets/fonts/b1f00012-7d817b4c03b0c5f1-s.2jyz_zw3a8jit.woff2","https://aside.com/_next/static/immutable/media/bbc41e54d2fcbd21-s.30bdpjkrtcces.woff2":"assets/fonts/87d0f140-bbc41e54d2fcbd21-s.30bdpjkrtcces.woff2","https://connect.facebook.net/en_US/fbevents.js":"js/20e1ef35-fbevents.js","https://static.ads-twitter.com/uwt.js":"js/91a5a802-uwt.js","https://aside.com/_next/static/immutable/media/sample-profile.3kbfbkbz9b977.png":"assets/images/f69843de-sample-profile.3kbfbkbz9b977.png","https://aside.com/_next/static/immutable/media/task-view-amazon.2x755srssjvo7.png":"assets/images/25e78862-task-view-amazon.2x755srssjvo7.png","https://aside.com/_next/static/immutable/media/task-view-chase-screenshot-2.1w_va_ioz2l0g.png":"assets/images/d154bcda-task-view-chase-screenshot-2.1w_va_ioz2l0g.png","https://aside.com/_next/static/immutable/media/task-view-tab-preview.049dbx6i4oitp.png":"assets/images/2b8f545a-task-view-chase-screenshot.049dbx6i4oitp.png","https://aside.com/_next/static/immutable/media/task-view-chase.3lqkry5dwyv4c.png":"assets/images/bea95a6e-task-view-chase.3lqkry5dwyv4c.png","https://aside.com/_next/static/immutable/media/task-view-netflix.420h3-1n00_th.png":"assets/images/b8e80ef3-task-view-netflix.420h3-1n00_th.png","https://aside.com/_next/static/immutable/media/icons.07sng_y96t659.webp":"assets/images/57676195-icons.07sng_y96t659.webp","https://aside.com/hero-illustration/captures/02-netflix.png":"assets/images/3127b4a7-02-netflix.png","https://aside.com/hero-illustration/captures/03-linkedin-subscription-management.png":"assets/images/2ffc32da-03-linkedin-subscription-management.png","https://aside.com/hero-illustration/captures/06-amazon-prime-management-gp.png":"assets/images/b2bda7e6-06-amazon-prime-management-gp.png","https://aside.com/hero-illustration/captures/04-amazon-home.png":"assets/images/c7bb4fe3-04-amazon-home.png","https://vercel.live/_next-live/feedback/feedback.js":"js/629964bd-feedback.js","https://vercel.live/geist.woff2":"assets/fonts/95386f8f-geist.woff2","https://vercel.live/geist_mono.woff2":"assets/fonts/e74f9fbe-geist_mono.woff2","https://aside.com/_next/static/immutable/chunks/2xzymtj4q3ntz.js":"js/a8dc9ed8-2xzymtj4q3ntz.js","https://aside.com/_next/static/immutable/chunks/0egsv31-gdc46.js":"js/c535c4fb-0egsv31-gdc46.js","https://aside.com/_next/static/immutable/chunks/turbopack-3dsnakb8qt7_0.js":"js/65661449-turbopack-3dsnakb8qt7_0.js","https://aside.com/_next/static/immutable/chunks/0rvesoqpx0hs5.js":"js/d4deac19-0rvesoqpx0hs5.js","https://aside.com/_next/static/immutable/chunks/09_sb8pvs8ex0.js":"js/558b3e0c-09_sb8pvs8ex0.js","https://aside.com/_next/static/immutable/chunks/1f8t4ig3ibqyy.js":"js/d949fd8e-1f8t4ig3ibqyy.js","https://aside.com/_next/static/immutable/chunks/10ltuxzm-zcxe.js":"js/1009ab42-10ltuxzm-zcxe.js","https://aside.com/_next/static/immutable/chunks/12-okju08d3qo.js":"js/7d779207-12-okju08d3qo.js","https://aside.com/_next/static/immutable/chunks/2t_0m_jz6nqf5.js":"js/991918f7-2t_0m_jz6nqf5.js","https://aside.com/_next/static/immutable/chunks/1bxi61xq2iehj.js":"js/2cec96b7-1bxi61xq2iehj.js","https://aside.com/_next/static/immutable/chunks/3aopf8jphejw-.js":"js/4fa62463-3aopf8jphejw-.js","https://aside.com/_next/static/immutable/chunks/0b6izlgii83fg.js":"js/55bb6ba0-0b6izlgii83fg.js","https://aside.com/_next/static/immutable/chunks/1y5kdha1ww38x.js":"js/72701061-1y5kdha1ww38x.js","https://aside.com/opengraph-image.png?opengraph-image.38fgmx8v1trhk.png":"opengraph-image.png","https://aside.com/opengraph-image.png":"opengraph-image.png","https://aside.com/_next/static/immutable/chunks/3h7v7rhw93cx-.js":"js/31d2552c-3h7v7rhw93cx-.js","https://aside.com/icon.png":"icon.png","https://aside.com/_next/static/immutable/chunks/3j52grh0a-k37.js":"js/7e98cf29-3j52grh0a-k37.js","https://aside.com/_next/static/immutable/chunks/3i6f6odma37gf.js":"js/aec49332-3i6f6odma37gf.js","https://aside.com/_next/static/immutable/chunks/0c0hxoamwjsbw.js":"js/1b3dd0fe-0c0hxoamwjsbw.js","https://aside.com/_next/static/immutable/chunks/0ru0u1tk1wzhc.js":"js/9ccaa3a4-0ru0u1tk1wzhc.js","https://aside.com/_next/static/immutable/media/background.2tnr0c16bt-fz.webp":"assets/images/a1c94a9a-background.2tnr0c16bt-fz.webp","https://aside.com/_next/static/immutable/chunks/0j58141kqensc.js":"js/604587c1-0j58141kqensc.js","https://aside.com/_next/static/immutable/chunks/2-w-g1enq2j5p.js":"js/d8c03f97-2-w-g1enq2j5p.js","https://aside.com/_next/static/immutable/chunks/1ronxw27xm3wx.js":"js/f467ac22-1ronxw27xm3wx.js","https://aside.com/assets/usecases.riv":"assets/data/ff17d65a-usecases.riv","https://aside.com/images/bg-banner.png":"images/bg-banner.png","https://vercel.live/images/slack-icon.png":"images/slack-icon.png","https://aside.com/_next/static/immutable/chunks/17h1bvs2_--1b.css":"css/d86f41b4-17h1bvs2_--1b.css","https://aside.com/_next/static/immutable/chunks/2ku6iq-isrq9f.css":"css/8221a557-2ku6iq-isrq9f.css","https://vercel.live/_next-live/feedback/instrument.05dcde00e0ff04efa9ad.js?dpl=dpl_4oe2CcCAVPpE8a4kLBuzXie8pxsa?dpl=dpl_4oe2CcCAVPpE8a4kLBuzXie8pxsa":"js/172d1a63-instrument.05dcde00e0ff04efa9ad.js","https://vercel.live/_next-live/feedback/instrument.05dcde00e0ff04efa9ad.js":"js/172d1a63-instrument.05dcde00e0ff04efa9ad.js"};
// The site maps images.prismic.io onto its own /_media/prismic/<path> proxy at
// runtime, and loads those through new Image() (a texture/preload the DOM shim
// cannot see), so the host must answer that path from the archive too.
// /_clone/api/<host>/<path> is the clone's own same-origin proxy: the archived
// runtime asks for CDN media through it, and the archive already holds those
// bytes. Resolving it here (instead of forwarding) is what makes the clone
// self-contained AND makes replacing an archived image actually change the page.
function nextImageTarget(pathname, search) {
  if (pathname === "/_next/image") {
    const encoded = new URLSearchParams(search).get("url");
    if (!encoded) return null;
    try { return decodeURIComponent(encoded); } catch { return null; }
  }
  if (pathname.startsWith("/_media/prismic/"))
    return "https://images.prismic.io" + pathname.slice("/_media/prismic".length);
  if (pathname.startsWith("/_clone/api/")) {
    const rest = pathname.slice("/_clone/api/".length);
    const slash = rest.indexOf("/");
    if (slash === -1) return null;
    return "https://" + rest.slice(0, slash) + rest.slice(slash);
  }
  return null;
}
async function serveNextImage(request, response) {
  const u = new URL(request.url, "http://localhost");
  const inner = nextImageTarget(u.pathname, u.search);
  if (!inner) return false;
  const hit = IMAGE_MAP[inner] ?? IMAGE_MAP[inner.split("?")[0]];
  if (!hit) return false;
  try {
    const file = join(root, hit);
    const info = await stat(file);
    if (!info.isFile()) return false;
    const type = types[extname(file).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, { "content-type": type, "content-length": info.size, "cache-control": "public, max-age=31536000, immutable" });
    response.end(await readFile(file));
    return true;
  } catch { return false; }
}

createServer(async (request, response) => {
  if (await serveNextImage(request, response)) return;
  if (await serveApiProxy(request, response)) return;
  const name = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const rel = normalize(name === "/" ? "/index.html" : name).replace(/\\\\/g, "/").replace(/^\/+/, "");
  const notFound = () => {
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Not found");
  };
  if (!rel || rel.includes("..") || /^[A-Za-z]:\//.test(rel)) return notFound();
  const file = join(root, rel);
  try {
    const info = await stat(file);
    if (!info.isFile()) return notFound();
    const type = types[extname(file).toLowerCase()] || "application/octet-stream";
    const cacheControl = IMMUTABLE_RE.test(rel)
      ? "public, max-age=31536000, immutable"
      : "no-cache";
    const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range || "");
    if (!range) {
      const body = await readFile(file);
      response.writeHead(200, {
        "content-type": type,
        "cache-control": cacheControl,
        "accept-ranges": "bytes",
        "content-length": info.size,
      });
      response.end(body);
      return;
    }
    const start = range[1] === "" ? 0 : Number(range[1]);
    const end = range[2] === "" ? info.size - 1 : Math.min(Number(range[2]), info.size - 1);
    if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= info.size) {
      response.writeHead(416, {
        "content-type": "text/plain",
        "content-range": `bytes */${info.size}`,
      });
      response.end("Range not satisfiable");
      return;
    }
    const body = (await readFile(file)).subarray(start, end + 1);
    response.writeHead(206, {
      "content-type": type,
      "cache-control": cacheControl,
      "accept-ranges": "bytes",
      "content-range": `bytes ${start}-${end}/${info.size}`,
      "content-length": body.length,
    });
    response.end(body);
  } catch {
    if (!extname(rel)) {
      try {
        const bodyIndex = await readFile(join(root, "index.html"));
        response.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" });
        response.end(bodyIndex);
        return;
      } catch (ignoredIndex) {}
    }
    notFound();
  }
}).listen(port, () => console.log(`Clone running on http://localhost:${port}`));
