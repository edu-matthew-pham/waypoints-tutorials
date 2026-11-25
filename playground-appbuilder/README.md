# App Builder (vendored)

The event-sheet app builder from [edu-matthew-pham/waypoints-tools](https://github.com/edu-matthew-pham/waypoints-tools/tree/main/app-builder)
(also live at https://tools.learningwaypoints.com/app-builder/), copied here so lessons serve it from this site's own origin:
the lesson page and App Builder can then talk (project reports for code checks), its saved work sits in this site's storage,
and clips can be recorded with no network.

- `index.html`: App Builder built into one file (`npm install && npm run build` in app-builder: esbuild bundles `src/` into `index.html`).
- `sheet-text.mjs`: `src/core/sheet-text.js` bundled for Node (`npx esbuild src/core/sheet-text.js --bundle --format=esm`),
  used by `tools/check-appbuilder.mjs` to turn a solution project into the same plain text the page checks read.
- `sounds/`: the Sound object's built-in sounds (App Builder's own, CC0) and `extra.json`, copied from `app-builder/sounds/`.
- Built from commit **365dde9** (25 Nov 2026: tables, the Table object, remember between visits; paste rows, the highlighted row, linked tables and the nested view; Sound and Video objects). To update: build both files from a newer commit, copy them and `sounds/` here, change the
  commit above and in the first line of `sheet-text.mjs`, then `npm run check-appbuilder` and record any clips again.

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
