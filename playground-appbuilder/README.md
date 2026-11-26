# App Builder (vendored)

The event-sheet app builder from [edu-matthew-pham/waypoints-tools](https://github.com/edu-matthew-pham/waypoints-tools/tree/main/app-builder)
(also live at https://tools.learningwaypoints.com/app-builder/), copied here so lessons serve it from this site's own origin:
the lesson page and App Builder can then talk (project reports for code checks), its saved work sits in this site's storage,
and clips can be recorded with no network.

- `index.html`: App Builder built into one file (`npm install && npm run build` in app-builder: esbuild bundles `src/` into `index.html`).
- `sheet-text.mjs`: `src/core/sheet-text.js` bundled for Node (`npx esbuild src/core/sheet-text.js --bundle --format=esm`),
  used by `tools/check-appbuilder.mjs` to turn a solution project into the same plain text the page checks read.
- `sounds/`: the Sound object's built-in sounds (App Builder's own, CC0) and `extra.json`, copied from `app-builder/sounds/`.
- `auth.html` and `privacy.html` (from 1.6): where Microsoft sends a student back after signing in to save to OneDrive, and the privacy page. Saving to a drive from this copy only works once this site's address is registered: Microsoft (SPA redirect URI `https://tutorials.learningwaypoints.com/_playground-appbuilder/auth.html`) and Google (JavaScript origin `https://tutorials.learningwaypoints.com`); until then a drive sign-in fails and saving to the computer still works.
- Built from commit **d1b0ced**, App Builder 1.7.0 (27 Nov 2026, tag `app-builder-v1.7.0`): v1 (tag `app-builder-v1`: tables, Sound and Video, All screens, Functions, the Map, Drawing, Photo, Recorder, `.zip` Save/Open, Recent apps, Share by link), 1.6.0 (tag `app-builder-v1.6.0`: Choose a photo `photo-choose`, the Sound "Show a player" tick `prop:player`, guided tutorials `?lesson=`, Continue on another device, OneDrive and Google Drive saving, Save ▾ / Open ▾), plus 1.6.1–1.6.3 (guided-tutorial fixes, arrow-key drop-downs, a failed drive sign-in explains itself) and 1.7.0 (Choose a sound on the Recorder). Projects saved in any version keep opening in later ones. Take a newer version only when it matters to a lesson, since every re-vendor re-records every App Builder clip. To update: build both files from a newer tagged commit, copy them, `auth.html`, `privacy.html` and `sounds/` here, change the commit above and in the first line of `sheet-text.mjs`, then `npm run check-appbuilder` and record the clips again.

Licence: PolyForm Noncommercial 1.0.0 (free for education; commercial use by permission), Matthew Pham.

How the playground talks to the page (App Builder's `src/embed.js`): the try box opens
`_playground-appbuilder/index.html?id=<lesson>/<step>&code=<starter project JSON>`; App Builder keeps that step's work under its
id, loads the starter only when there is none, and posts `{ wp: 'run', kind: 'appbuilder', id, status: 'done', quiet, code }`
after each change, where `code` is the project as plain text, one line per event:

    variable Minutes = 0
    screen Tracker
    object SaveButton (button) text "Save"
    event: when SaveButton is clicked | do: Add int(TextInput.text) to variable Minutes; Set TotalText text to "..." & Minutes
    event: when BedBox is clicked > when BedBox text = "⬜" | do: Set BedBox text to "✅"

Stable `data-ab` labels on its controls (`add-event`, `add-condition`, `group:object:SaveButton`, `entry:onClicked`,
`param:value`, `done`, `tab:run` ...) are what clips click (`click: { selector: "[data-ab='add-event']" }`).
