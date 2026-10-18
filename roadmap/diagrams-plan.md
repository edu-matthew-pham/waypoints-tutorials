# Diagrams in lessons: Mermaid guidance and pilot plan

Proposed 19 Oct 2026 (Matthew asked for it; not approved to build yet). Mermaid is the first of the visual and quality tools in `shared.md` › Proposed: visual and quality tools. Also kept as the Project doc `claude/diagrams-plan.md`.

## Where things stand

- **No Mermaid in the tutorials.** None in the 598 lessons, the 68 `class/*.yml` files, `presentation.md`, primers, or `tools/teach.mjs`.
- **Prepare already renders Mermaid** (`waypoints-prepare`, `src/lib/utils/mermaid.ts`, mermaid 11). Before Marp renders a deck, each ` ```mermaid ` block is drawn to an SVG `<img>`. A block that doesn't parse stays as code so the teacher can fix it. Prepare's own slide rules (`src/routes/generate_slides.md` › Mermaid diagrams) are:
  - one diagram per slide, with a heading and little else
  - `flowchart LR` by default
  - at most 3 vertical levels
  - not mixed with split images or grids
  - structure, not decoration

  Gaps: every diagram gets `alt="Mermaid diagram"`, and the theme is fixed to `default`.
- **Pictures exist, but only of things a board or playground can draw.** 393 of 598 lessons have an `explainPicture` in the Explain it to me panel. Decks only use it for MakeCode, where it is drawn as blocks.
- **The 205 lessons without one cluster where the idea is a relationship, not a quantity or a shape:**
  - Python foundations and functions (all 23)
  - Console (11)
  - Objects (5)
  - micro:bit security (10)
  - Flask, data, ML and deeper (24)
  - every AI course (about 57)
  - Biology 9: signals, pathways, nerves and hormones, feedback
  - the Earth 9 carbon lessons
  - decay chains
  - kingdoms and keys
  - engineering projects
- `stage: info` steps are mostly closing steps ("Where this leads", "Evaluate: look back"), not explanations. That's why the guidance below covers every lesson part.

## When to use which visual

| The idea is… | Use | Why |
|---|---|---|
| Quantity, space, cause and effect the student should change | a **board** | Manipulating it is the learning |
| What a program makes | a **picture** (`picture:` / `explainPicture`) or a clip | Shows the real output |
| A relationship between named things: order, branching, containment, flow, who talks to whom, states | **Mermaid** | Cheap, text-authored, diffable, and teachers can edit it in Prepare |
| Atmosphere or decoration | nothing | Never decorative |

**Mermaid kinds allowed:**
- `flowchart`: control flow, processes, pipelines, cycles
- `sequenceDiagram`: messages between parties (requests, radio, handshakes)
- `stateDiagram-v2`: modes and states
- `classDiagram`: Objects course only, sparingly

Avoid pie, xy, gantt and quadrant charts: data belongs on a board or chart.

## Guidance by lesson part

1. **Hook / intro.** Rarely. At most a "where we're going" overview in a unit's first lesson. In 5E lessons, never before Explore: a diagram names things.
2. **Predict / Engage.** A diagram can be the **stimulus** ("Follow this flowchart with 7. What prints?"), never the answer. Mark it `role: stimulus`; review checks that it doesn't give away `actual`.
3. **Run / Explore.** No. Students meet the real thing first.
4. **Explain it to me panel.** This is the **main home**: an `explainDiagram` beside or instead of `explainPicture`, for lessons with no board to snapshot. One diagram, the lesson's move only.
5. **Investigate / worked example.** Tracing in both directions (code to boxes, arrow to line). It can also hold a **misconception diagram**: a wrong arrow to find, planted after the explain, the same as a planted bug.
6. **Checks.** A diagram in the stem, or diagrams as options ("Which flowchart matches this program?"). Light checks only.
7. **Modify / Make.**
   - **Given a diagram:** change the code to match (Modify), or build what it describes (Make spec).
   - **Planning your own:** students sketch on paper or in their notes (messy is fine). Students writing Mermaid is out of scope except where a text notation is itself the point (Year 9+, optional).
8. **Closing info steps.**
   - "Where this leads": architecture or sequence diagrams (browser → route → template → response).
   - "Look back": a diagram that grows across a unit.
9. **Class plan / decks.**
   - "What's wrong with this diagram?" inquiry slides.
   - Whole-class build: one slide per added part, since Marp fragments don't step through a diagram.
   - Model it: the teacher draws it live, then the slide reveals the diagram to compare.
10. **For teachers / teacher guide.** The misconception as two diagrams: the student's model next to the correct one. No lesson-flow diagrams.
11. **Worksheets and cheat sheets.** A **blank-label version** on the worksheet for students to fill in. One summary diagram per unit cheat sheet where the unit has a structural idea.
12. **Primers and recaps.** One diagram per primer that explains a structure (the threat-model primer already describes a data-flow diagram in words). Recap cards reuse `explainDiagram`.

## House style

- At most about 12 nodes and 3 levels, matching Prepare's rule. Labels of five words or fewer, plain language, Australian spelling.
- Author flowcharts `TD` (fits a phone). The deck generator rewrites `TD`/`TB` to `LR` for slides, which follows Prepare's landscape rule.
- Colour carries meaning only, matching the boards: orange = new or changed this lesson, red = the misconception.
- Every diagram has `alt` text. Mermaid's `accTitle` / `accDescr` are written from it.
- Dark mode on the site comes from the site's CSS variables, not Mermaid's default theme.

## Authoring and build

- **Where diagrams live:** `diagrams.mmd` in the lesson folder, with `%% #region name` blocks, referenced as `diagrams.mmd#name`.
- **Fields** (same shape as pictures):
  - `diagram: { ref, alt, caption?, role? }` on steps, tasks and checks
  - `explainDiagram:` in frontmatter
  - `diagram:` on `class/*.yml` items
  - check options may be refs: `options: ["@diagrams.mmd#a", …]`
- **Site, worksheet, recap:** pre-render to SVG in `render-pictures`, which already runs a headless browser. No Mermaid script at runtime, so pages stay light and work offline. The worksheet's blank-label version is the same SVG with its text hidden.
- **Decks:** emit a ` ```mermaid ` fence (with `accTitle`/`accDescr`), not a picture. Prepare draws it, and the teacher can edit the diagram in the deck. This is the main gain over a PNG.
- **Small Prepare change:** use `accTitle`/`accDescr` for the `<img>` alt instead of "Mermaid diagram".
- **Create:** vendor Mermaid in `vendor/` so the Create preview renders diagrams in the browser. Add a "Diagram" option with the decision table above as its guidance.
- **Validation:**
  - `npm run validate`: the ref exists, it parses, `alt` is present, and it stays within the limits.
  - `check-decks`: diagram slides fit.
- **Clips:** the clip hash ignores diagrams unless the clip shows one.

## Pilot (15)

| # | Lesson | Part | Diagram |
|---|---|---|---|
| 1 | code/python-foundations/turtle-decisions | Predict stimulus | if/else flowchart: "follow it with this value" |
| 2 | code/python-functions/turtle-returns | Explain panel | call → return sequence |
| 3 | code/python-functions/turtle-read | Investigate | match lines to boxes |
| 4 | code/console/console-while | Explain + misconception | loop flowchart; a wrong exit arrow to find |
| 5 | code/console/console-menu | Make spec | menu loop flowchart to build from |
| 6 | code/objects/objects-classes | Explain panel | one Star class, three star instances |
| 7 | code/flask/flask-routes | Where this leads | browser → route → template → response |
| 8 | code/microbit-security/challenge-response | Explain panel | sequence: lock and key fob exchange |
| 9 | code/microbit-security/key-sharing | Class slide (build) | sequence revealed one message per slide |
| 10 | systems/cyber/threats | Primer + worksheet | data-flow diagram, blank-label version |
| 11 | science/biology-9/pathways | Explain + worksheet | stimulus → receptor → CNS → effector → response |
| 12 | science/biology-9/feedback | Teacher panel | negative feedback loop vs the "one-way" misconception |
| 13 | science/earth-9/carbon-stores (→ carbon-life, fossil-fuels) | Look back, growing | carbon cycle gaining a store per lesson |
| 14 | science/chemistry-9-10/decay-chains | Check options | "which chain is right?" |
| 15 | ai/foundations/training-examples | Explain panel | examples → training → model → prediction, with where it breaks on unseen input |

**Order:**
1. Build the fields, rendering, deck fence and validation with pilots 4 and 11 (one Code, one Science).
2. Do the rest of the pilot.
3. Try with a class before any wider rollout.

**Out of scope:** students authoring Mermaid, and a Mermaid board.

## Open questions

- Should Python foundations stay diagram-light, since the turtle drawing is already the picture? Pilots #1 and #3 test this.
- Should growing "look back" diagrams (#13) live at unit level?
