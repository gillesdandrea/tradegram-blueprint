# TradeGram — Blueprint

A [Slidev](https://sli.dev) deck showcasing **TradeGram**: an automated system that follows
Telegram signal providers and executes their trades across multiple MetaTrader 5 accounts —
with two AIs on rails inside the trading loop and an operations surface where every job is an
AI skill, made self-improving by deterministic replay.

**Live:** https://gillesdandrea.github.io/tradegram-blueprint/

## Develop

```bash
npm install
npm run dev        # opens http://localhost:3030
```

## Build & publish

```bash
npm run build      # static site into dist/ (base: /tradegram-blueprint/)
npm run deploy     # build + push dist/ to the gh-pages branch (GitHub Pages)
```

The deck is served from the `gh-pages` branch via GitHub Pages. `deploy` also writes a
`.nojekyll` file and a `404.html` (copy of `index.html`) so deep links to individual slides
resolve after a refresh.
