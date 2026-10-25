# MakeCode micro:bit editor, static build (build-time use only)

An unmodified `pxt staticpkg` build of microsoft/pxt-microbit, so the Waypoints build can draw MakeCode
block and simulator pictures without reaching makecode.com. Not a hosted editor: do not serve it as a site,
and never copy it to gh-pages. Students keep using makecode.com.

- pxt-microbit: v9.1.1 (59408da)
- pxt-core: 13.0.1
- built: 2026-10-25 by the workflow "MakeCode static editor (test)" in edu-matthew-pham/waypoints-tutorials
- licences: LICENSE.txt and THIRD-PARTY-NOTICES.txt (MIT, plus Apache 2.0 parts). MICROSOFT and MAKECODE are trademarks of Microsoft.
- micro:bit only: Arcade's simulator (microsoft/pxt-arcade-sim) is private, so Arcade cannot be built this way.

Use (from a clone of this branch at `<dir>`), from the Waypoints repo:

```
node <dir>/serve.mjs <dir>/editor &      # port 8300; maps /--docs to docs.html, as MakeCode's own server does
MAKECODE_RENDER=http://localhost:8300 MAKECODE_EDITOR=http://localhost:8300/index.html WP_ONLY=makecode node tools/render-pictures.mjs
```
