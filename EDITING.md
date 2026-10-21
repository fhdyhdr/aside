# Editing this clone

Everything below is plain files - no build step needed to change copy, colours or
images.

## Where to edit

- **Text** - `index.html`. Keep the surrounding tags; a small inline script
  re-applies the text you wrote after the site's own scripts finish, so it sticks.
- **Styles** - `css/` (global, header, hero, sections, footer - loaded in order).
- **Images / video / fonts** - `assets/images`, `assets/videos`, `assets/fonts`,
  `assets/icons`. Either overwrite a file (keep its name) or edit the `src` in
  `index.html`.

- **Runtime-only UI strings** (e.g. a video player's "Sound" / "Close" labels)
  are not in the HTML - they live in the archived site code under `js/`. Search the
  exact wording there and edit it in place.
- **Text baked into a picture** (a headline that is part of a .jpg/.png) can only be
  changed by replacing that image file.

## Changing an image

Every image is served **from this folder**, not from the internet - overwrite the
file (keep its name and format) and reload, and the new picture shows up. If a
picture is drawn into a `<canvas>` by the site's own runtime, the file name is
still in the archive: the runtime resolves it through this folder, so replacing
that file is what changes the picture.

## Finding the text you want to change

Search for a **short fragment** instead of a whole sentence: headings are often split
across several elements (`We craft delicious fats` + `Without depleting Earth's
resources.` are two separate nodes), so the full sentence never matches.

Watch out for typographic characters - the site may use `’` (curly) where you type
`'` (straight), or `&` where the source has `&amp;`. If a search finds nothing,
try a distinctive single word.

> **Edit the file named next to each string, not every file.** Some copy appears in
> more than one place - a section component *and* the archived runtime under `js/`.
> Only the files listed below are yours to edit; the runtime copies must stay as they
> are, otherwise the site can no longer render itself.

## Text on this page (search index)

Every editable string found in this export, with the file to edit:

- `index.html` - © 2026 Aside Computer Inc.
- `index.html` - 3m 46s
- `index.html` - 70.0%
- `index.html` - 84.0%
- `index.html` - 92.8%
- `index.html` - 97.7%
- `index.html` - 99.0%
- `index.html` - A record of every access
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - About
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Agent tabs
- `index.html` - AI agents stop at login screen and ask you to log in every time.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - an hour ago
- `index.html` - Anything you do in a browser,
- `index.html`, `serve.mjs`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Aside
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Aside Browser | Notion
- `index.html` - Aside can do for you.
- `index.html` - Aside can work with files directly on your computer.
- `index.html` - Aside handles comments, replies, and follow-ups for you.
- `index.html` - Aside is a browser rebuilt for people and agents.
- `index.html` - Aside isolates filesystem and network access to help keep your data protected.
- `index.html` - Aside lets agents sign in through autofill, without ever exposing your credentials to the AI.
- `index.html` - Aside ranked #1 on three browser agent benchmarks: Online-Mind2Web, BU-Bench-V1, and Odysseys, surpassing OpenAI, Anthropic, and Browser Use.
- `index.html` - Aside runs on your device, keeps data protected, and gates sensitive actions for your review.
- `index.html` - Aside signs in and works across your email, dashboards, and internal tools.
- `index.html` - Aside Vault
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Ask
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Ask AI a task, @ for context
- `index.html` - Backed by Y Combinator
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Blog
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Bookmarks
- `index.html` - Bring your own subscription
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Browser agent
- `index.html` - browser agent.
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Browser Use
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - BU Bench v1
- `index.html` - but it’s a browser.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Capturing a screenshot
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Careers
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Changelog
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - ChatGPT Atlas
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Chats
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Check about page
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Claude Opus 4.8
- `index.html` - Communications
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Community
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Company
- `index.html` - Crafted for both human and agent.
- `index.html` - Credentials are autofilled into websites, not exposed to the agent.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Daily briefing
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Developers
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Discord (6)
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Docs
- `index.html` - Docs and Spreadsheets
- `index.html`, `_next/static/immutable/chunks/2t_0m_jz6nqf5.js`, `_next/static/immutable/chunks/1bxi61xq2iehj.js` - Download
- `index.html` - Encrypted by your password
- `index.html` - enough to use real data.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Every 9am
- `index.html` - Every credential use is logged, so you know exactly what the agent touched.
- `index.html` - Everything is secured in Secure Enclave and post-quantum encryption.
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js`, `_next/static/immutable/chunks/1y5kdha1ww38x.js` - Features
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Figma
- `index.html`, `_next/static/immutable/chunks/1bxi61xq2iehj.js` - Find the candidate I opened yesterday and prep interview notes
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Finding website design example
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - GitHub
- `index.html` - Give the agent access only to what each task needs. See what it used, when, and why.
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - GPT-5.4
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - GPT-6 Astra
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Guard
- `index.html` - Hardware-backed E2E encryption
- `index.html`, `_next/static/immutable/chunks/10ltuxzm-zcxe.js`, `_next/static/immutable/chunks/12-okju08d3qo.js` - High
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Hiring Teams
- `index.html` - Human approval at the edge
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js`, `_next/static/immutable/chunks/1y5kdha1ww38x.js` - Instagram
- `index.html` - Introducing Aside
- `index.html` - It works across your logged-in websites and handles complex work other agents can’t: messages, payments, internal tools, and everything in between.
- `index.html`, `_next/static/immutable/chunks/3h7v7rhw93cx-.js` - Learn more
- `index.html`, `_next/static/immutable/chunks/2t_0m_jz6nqf5.js`, `_next/static/immutable/chunks/1bxi61xq2iehj.js` - Local
- `index.html` - Local by default
- `index.html`, `_next/static/immutable/chunks/1bxi61xq2iehj.js`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Memory
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - New Chat
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - New Tab
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Notion
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Odyssey
- `index.html`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Online-Mind2Web
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js`, `_next/static/immutable/chunks/2-w-g1enq2j5p.js` - Operations
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Password Manager
- `index.html` - Password that
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Pricing
- `index.html` - Privacy and control
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Privacy Policy
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Recent tasks
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Researchers
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js`, `_next/static/immutable/chunks/3i6f6odma37gf.js` - Resources
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Sales
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - San Francisco Largest Park
- `index.html` - Sandbox with guardrails
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Saving in artifacts folder
- `index.html` - Scoped access and audit log
- `index.html`, `serve.mjs`, `_next/static/immutable/chunks/0egsv31-gdc46.js` - Search
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Search Google or type a URL
- `index.html` - Secrets stay invisible to AI
- `index.html` - Sensitive actions like payments, posts, and messages always wait for your confirmation.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Show all
- `index.html` - Signing in
- `index.html` - SOTA
- `index.html` - Start using today.
- `_next/static/immutable/chunks/0b6izlgii83fg.js` - Summary: You got 112 followers, 85 comments and 212 likes. Yesterday's trending topics: Charles Leclerc retires fr...
- `index.html`, `_next/static/immutable/chunks/09_sb8pvs8ex0.js`, `_next/static/immutable/chunks/10ltuxzm-zcxe.js` - Tab
- `index.html`, `_next/static/immutable/chunks/10ltuxzm-zcxe.js`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Tabs
- `index.html` - Tasks, memory, and data stay on your device. Nothing is shared with LLM providers.
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Terms of Service
- `index.html` - that knows what you’re working on.
- `index.html`, `serve.mjs`, `_next/static/immutable/chunks/2xzymtj4q3ntz.js` - The
- `index.html` - The first password manager built for agents.
- `_next/static/immutable/chunks/0b6izlgii83fg.js` - The largest park in San Francisco is Golden Gate Park, spanning 1,017 acres of public green space. It is about 20% larger...
- `index.html` - The most intelligent AI assistant,
- `index.html` - They never complete a task. They say “I can’t do this” every time. They stop every time the work gets real, and they still lack the basics: speed and usability.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js`, `_next/static/immutable/chunks/1y5kdha1ww38x.js` - to switch
- `index.html` - Today’s AI browsers are broken.
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Trust Center
- `index.html` - Unlimited capability
- `index.html`, `_next/static/immutable/chunks/3aopf8jphejw-.js` - Use cases
- `index.html` - Use your ChatGPT or Claude subscriptions, or bring your own API key.
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Working for
- `index.html`, `_next/static/immutable/chunks/0b6izlgii83fg.js` - Y Combinator
- `index.html` - Your data is full encrypted in local and protected by Secure Enclave.

## Reusing parts of this clone elsewhere

See `README.md` - it has a step-by-step section for lifting a single section into a
hand-written project.

Source: aside.com
