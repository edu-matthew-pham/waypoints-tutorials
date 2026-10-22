# Diagrams in lessons: Mermaid guidance and pilot plan

Proposed 19 Oct 2026; Matthew said go the same day. **Push 1 built (19 Oct):** the fields, rendering, decks, worksheets, guide, Create preview and validation, with pilots 4 (console-while) and 11 (biology-9/pathways). **Push 2 built (22 Oct):** the other 13 pilots (all 15 now have diagrams, 20 in all). Prepare fixes done 19 Oct. Next: Matthew reviews the pilots live, then decide on a wider rollout. Mermaid is the first of the visual and quality tools in `shared.md` › Proposed: visual and quality tools. Also kept as the Project doc `claude/diagrams-plan.md`.

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

## Built in push 1 (19 Oct 2026)

- **Pilot 4, `code/console/console-while`:**
  - `explainDiagram`: the while loop, with the check marked new.
  - A class-plan question with a misconception drawing (the check placed after the body, so quit would show).
- **Pilot 11, `science/biology-9/pathways`:**
  - `explainDiagram`: the general pathway.
  - The Explain step's reflex arc, with `blank: true` for the worksheet and the drawing pin kept as the clue.
- **Changed from the plan:**
  - Worksheets use the drawn SVG, not a Mermaid block, because Prepare Print draws no Mermaid.
  - An explain diagram goes on the deck before the first Explain step, unless a step already has its own explaining diagram.
  - Check options as diagrams are not built yet (pilot 14 needs them).
- **Format:** AUTHORING.md › Diagrams (Mermaid). It also covers the stricter rule: Mermaid only for boxes and arrows.

## Built in push 2 (22 Oct 2026)

All diagrams are inline in `lesson.md` (```code diagrams.mmd#name blocks), so no clip re-records.

- **Code:**
  - turtle-decisions: Predict stimulus, the if/else loop as a flowchart.
  - turtle-returns: explain, the call and return as a sequence.
  - turtle-read: the "Find the parts" task, one pass of the garden loop.
  - console-menu: the Make spec, the shape of every menu app.
  - objects-classes: explain, one class making three star objects.
  - flask-routes: "Where this leads", a visit to /about as a sequence.
- **Secret messages:**
  - challenge-response: explain, the challenge and answer.
  - key-sharing: explain, the key exchange with the real numbers.
- **Digital systems:** cyber/threats, the club app's data-flow diagram on the Explain step, `blank: true`. Its defences are hidden on the worksheet copy.
- **Science:**
  - biology-9/feedback: the negative feedback loop on the Explain step, plus a misconception drawing (no switch-off) on the "Switching off" task.
  - decay-chains: the U-238 chain on the Explain step, `blank: true`, with U-238 kept as the clue.
  - earth-9: a "look back" carbon cycle that grows across carbon-stores (the four stores), carbon-life (adds photosynthesis, respiration and decomposition) and fossil-fuels (adds millions of years and burning).
- **AI:** training-examples, explain, how the fruit sorter predicts and when to check it.

**Changed from the plan:**
- **key-sharing:** an explain diagram, not a class slide built up one message per slide. It reaches the site and the recap too, and the deck still gets it as a slide.
- **threats:** the diagram sits on the Explain step, not the primer. Primers don't take diagrams yet.
- **feedback:** the misconception drawing sits on a task, not the teacher panel. The teacher panel doesn't take diagrams.
- **decay-chains:** a labelled chain with a blank copy, not diagrams as check options. Option diagrams are not built; build them only if a lesson needs one.

**Tool change:** sequence diagrams no longer repeat their participant boxes at the bottom. This applies on the site (`mirrorActors: false`) and in decks (an init line Prepare reads).

**Checked:**
- `validate` passes, with 20 diagrams within the size limits.
- Every affected course's decks fit.
- Every pilot page loads its diagrams at phone width with no errors.
- The worksheet blank copies are right.

## Prepare (done 19 Oct 2026, waypoints-prepare 13a4f54)

- **Alt text:** Mermaid images take it from `accTitle`/`accDescr`, which these decks write, instead of "Mermaid diagram".
- **Simple drawings:** a ```svg block holding one `<svg>` is drawn as an image, with its `<title>` as the alt text. The tutorials' decks don't emit these yet. They are the "simple drawn figures" step in `shared.md`.
- **Slide prompt (`generate_slides.md`):** Draw it split in two.
  - Mermaid only for boxes joined by arrows.
  - Schematic ```svg drawings for simple shapes (a path, a pivot, a force arrow).
  - Things that are seen are photos.
  - Emoji are allowed only as signposts. The help page says the same.
- **Tests:** unit tests added (`mermaid.test.ts`, one in `render.test.ts`). All 724 pass.

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
