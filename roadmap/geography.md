# Roadmap: Geography

`content/geography/`. First course `geography/water-7` decided and all five AC9HG7K01 lessons built 30 Oct 2026 (below); still a preview, not yet tried with a class. Node content: waypoints-kit `data/geography/`, copied in `data/curriculum/geography.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

Shared rules (First Nations T1, made-up cases T2, writing T5, contestable or simplified ideas T8, pace-agnostic T9, lesson shape T11, and the rest) are in `roadmap/rules.md`, with their reasons; they are not copied here (1 Nov 2026). Subject rules:

- One course per standard, folder `geography/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up cases and writing as in rules T2 and T5; this shape is the default, not a rule (T11)).
- Contestable or simplified ideas (rules T8), in this subject: Causes, forecasts and "best" uses of resources carry their source and the other view.
- First Nations content: rules T1 (firm). Quote the relevant ACARA elaboration in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`); items about First Nations values or connection to Country are pointer pages.
- Inquiry skills: questions, locating and organising, and creating explanations belong to the shared course (`roadmap/humanities-inquiry.md`); this subject builds only its own skills (below). The full investigation is class work.
- Examples come from Year 7 content only, so skill lessons also build what the class needs to know. Mark the subject and its courses **Preview** (pilot, not finished) and show planned lessons as "Coming later" (Project doc humanities-y7-plan › Placeholders; log the shared code change in `roadmap/shared.md`).
- Before Year 7 catch-up lessons (Year 6 HASS) go with the first course where a prerequisite link needs one (Project doc humanities-y7-plan › Before Year 7).
- Kit gap: Geography's Year 7 knowledge standards (K01, K03–K08) have no prior-knowledge links in Kit; fix that in waypoints-kit (likely Years 5–6 HASS on environments, the Asia region and maps) before deciding on a catch-up lesson. K03 node 2 and K07 node 3 (First Nations values and connection to Country) are pointer pages.
- Add `geography` to `CHECKED` in `tools/progressions.mjs` with the first lesson (say so in `shared.md`).

## Year 7 knowledge standards (start here)

| Code | Title | Waypoints | Hinges |
|---|---|---|---|
| AC9HG7K01 | Water as an environmental resource | 5 | 2 |
| AC9HG7K02 | Water distribution and sustainability | 5 | 2 |
| AC9HG7K03 | Values of water | 5 | 2 |
| AC9HG7K04 | Hydrological and atmospheric hazards | 5 | 2 |
| AC9HG7K05 | Liveability decisions | 5 | 2 |
| AC9HG7K06 | Services, facilities and liveability | 4 | 1 |
| AC9HG7K07 | Cultural connectedness to place | 4 | 2 |
| AC9HG7K08 | Strategies for liveability | 4 | 1 |

## Year 7 skills this subject builds itself

- AC9HG7S03 Interpret and analyse geographical data (4 nodes)
- AC9HG7S04 Draw geographical conclusions (3 nodes)
- AC9HG7S05 Identify strategies for geographical action (4 nodes)

## Decided (Matthew, 30 Oct 2026)

All five recommendations accepted, with one rule on real places:
1. **K01 only** for `geography/water-7`; K02 (Water in Australia, with the Australia water map lesson) is the next course.
2. **Real places, but light.** Real spine (Snowy Mountains, Murrumbidgee, Murray) plus the Ord River and Great Artesian Basin as contrasts. **If a place needs a lot of fact-checking, go lighter on it:** use a real place only for a settled fact with a named source (a river is a river; a quoted line from CSIRO or the managing body), otherwise use a made-up case or a hypothetical. Lesson 1 followed this: Murrumbidgee as "a river" in one sort item, and one wider card paraphrasing CSIRO. Each real-place card carries its source and a `checked:` date in `teacher.yml`.
3. **Kit prior links** for K01 (AC9HS4K06 and AC9HS5K08): **done 30 Oct** in waypoints-kit (`c6fbf22`; the standard's prior-knowledge text now names both codes) and re-imported here, so `data/curriculum/geography.json` lists them as K01's prior. The shared Before Year 7 HASS course covers inquiry skills only (HS6S01, S02), not these resource ideas, so K01 gets a "Build up to this" fold inside lesson 1 rather than a catch-up lesson; add a Geography catch-up to the shared course only if a trial shows students missing the ideas. Still missing in Kit: prior links for K03 to K08 (not guessed; list for Matthew to approve).
4. **No board.** One map picture later if a lesson needs it (not needed for lesson 1).
5. **Go up now, without waiting for the Preview label.** The subject and course pages say "preview" in their summaries.

## Built (30 Oct 2026; not yet tried with a class)

- Subject `content/geography/index.md` (Geography, order 10; pathways Water and places and Place and liveability; later courses show as Coming later) and course `geography/water-7` (Usually Year 7).
- Lesson 1 `resource-types` (AC9HG7K01 n1, hinge): predict, sort into renewable, continuous and non-renewable, worked example with Nib's planted slip (`continuous-is-renewable`, with a `smaller:` lead-in), vary (water in three forms, a town and a river, the reason for continuous), practise, a Make step in the student's own book (reflect tick), then one typical and two wider steps (Great Artesian Basin card quoting CSIRO; can a resource change group). Teacher notes, class plan, one source (checked 30 Oct).
- Classification rule used: does it come back by itself, and can our use make it run out? Teacher notes say water is labelled differently in different sources and ask for the reason, not only the label. Middle cases (water that refills over centuries) are left to the wider step.
- `geography` added to the node check's `CHECKED`; one misconception added.
- Checked: validate clean for the lesson, `check-nodes` passes, built, and in a headless browser every sort, question and the bug check answered correctly with no page errors. Not yet clicked through as a student for tone, and not reviewed by a fresh pair of eyes.
- Needs a whole-site publish (new subject).

## Original proposal (30 Oct 2026, revised the same day for real places)

### Course `geography/water-7`, *Water as a resource*

Standard AC9HG7K01 (Water as an environmental resource), the gateway in the Project plan (Water as a resource opens Valuing and managing water). One lesson per waypoint, in the node file's order. Usually Year 7 (teacher note only). Same lesson shape as `economics/scarcity-7/needs-and-wants`: `language: maths`, `node:` on every lesson, predict, try, worked example with Nib's planted slip, vary, practise, a Make step written in the student's own book with a `reflect` tick, then `tier:` extras. Sort, match, question and bug checks; no clips; no new board.

**One real river system runs through lessons 1 to 5 (revised 30 Oct after Matthew asked for more real places):** the Snowy Mountains, the Murrumbidgee past Canberra and the Murray to its mouth. A second real case, the Ord River in the Kimberley, gives lessons a contrast, and the Great Artesian Basin gives groundwater. Real places carry the facts; made-up material is kept only where it is a hypothetical ("imagine a farm upstream clears a slope"), a Nib slip, or a sort of everyday resources. Each place appears as a short card (3 or 4 stable facts, a map pin and a link to the managing body or a public source), no figures that date. The Make steps turn to the student's own local river, dam or water supply. Facts are to be checked against sources while building (card list in the notes below).

| # | Lesson (waypoint) | Flags | Minimum path (untiered) | Hinge check before moving on | Width (`tier:` steps) |
|---|---|---|---|---|---|
| 1 | Renewable, non-renewable or continuous? (n1) | Hinge | Sort resources into the three kinds with a reason (two of each), then classify water in three forms around the Snowy Mountains and Murrumbidgee (snowmelt, river water, rain) | Bug task: Nib says "sunlight and timber are both renewable, so they're the same kind". Find the slip: continuous never runs out whatever we do; renewable comes back only if we don't use it faster than it regrows. `smaller:` a two-item version (sun vs a forest) | Typical: a wider mix (timber, fish, wind, coal, solar); Wider: is Great Artesian Basin water renewable if it took thousands of years to get there? (the node's "fossil water" edge case, same level) |
| 2 | Water on the move: how it joins places (n2) | Hinge | Name the forms (soil moisture, groundwater, surface water, salt water, ice, vapour); trace snowmelt from the Snowy Mountains down the Murrumbidgee to the Murray and say what it carries from place to place | Question: "Imagine a farm upstream on the Murrumbidgee clears a hillside. Why might a town downstream care?" Distractors treat water as only "flowing downhill" (the node's misconception); the right answer names what is carried (soil, nutrients, pollution) | Typical: the same idea underground and in the air (Great Artesian Basin groundwater surfacing at springs far from where rain fell, rain that began over the sea); Wider: upstream and downstream at two scales (a school drain and the whole Murray-Darling) |
| 3 | Good for some, bad for others: effects of moving water (n3) | – | Sort effects of one real change (the Snowy Mountains Scheme moving water west through tunnels) into environmental, economic and social; say one that helps one group and harms another | Match: effect → kind, with "the dam is big" (a fact, not an effect) as a distractor | Typical: the same three kinds for the Ord River irrigation area; Wider: compare the two cases for who gains and who gives up |
| 4 | How moving water changes the land (n4) | – | Put the process chain in order (water gets energy from slope → loosens soil or rock → carries it → drops it where it slows) and use it to explain one real landform (a Snowy Mountains valley; the Murray's floodplain further down) | Bug task: Nib explains a valley as "the river found a low place to run in". Find the slip: describes the outcome, not the process (the node's misconception) | Typical: name two landforms and where along the river each forms; Wider: what clearing or paving does to runoff and erosion |
| 5 | Putting it together: classify, connect, change (n5) | Integration | Order the three ideas for one real case (the Murray's mouth and Lower Lakes), then explain it in the student's own book using at least two of the three (the node's minimum) | Exit ticket: name the water form and its kind, one connection, one change, for a place not yet met (the Ord River or the student's local catchment) | Typical: all three ideas, with the links between them said out loud; Wider: judge a proposed fix (a pipeline from one catchment to a dry town) by what it changes about each |

Notes:
- **Hinges get the time.** Lessons 1 and 2 carry `smaller:` support and the class plan's whole-class talk (lesson 1's continuous/renewable line; lesson 2's "water carries things" idea). Teacher notes name the cascade from each `hinge_reason`.
- **Width stays at the same level.** I left out node wider items that are new content rather than more contexts: other classification frameworks (natural capital, ecosystem services), ENSO and the Indian Ocean Dipole, and the Great Artesian Basin as a groundwater study (that belongs to K02 n1, distribution). The Great Artesian Basin appears here only as a groundwater example in lessons 1 and 2; its distribution across Australia is K02's. Other wider items can go in K02's course or teacher notes.
- **Pictures.** Mermaid only for boxes and arrows: lesson 2's water pathway and lesson 4's process chain. The catchment itself (hills, farms, coast) is spatial, so it is one simple hand-drawn SVG reused in every lesson, not Mermaid.
- **Real-place cards.** Planned: Snowy Mountains Scheme, Murrumbidgee (Canberra's water comes from its catchment), Murray mouth and Lower Lakes, Great Artesian Basin, Ord River. Each card: 3 or 4 stable facts, one map, one link to the managing body or a public source, no dated figures. All facts are checked against those sources when the lesson is built; contested questions (the Murray-Darling Basin Plan, water allocations) are left to K02 or later and kept out of student steps.
- **First Nations.** The node file's wider items name the Mutitjulu Waterhole. Not in student steps; lesson 3's teacher notes quote ACARA's elaboration for AC9HG7K01 (the Mutitjulu example is in it) and ask the teacher to build on it with local, community-approved material. No custodians'-words example is needed: no skill step here relies on one.
- **Skills.** Lesson 2 touches AC9HG7S03 n2 (explaining patterns) but is not tagged to it; Geography's own skills (S03 data, S04 conclusions, S05 action) become a later course once a K course has given them content to work on.

### Needs deciding (answered above; kept for the record)

1. **One course per standard vs the Project plan's unit.** The Project plan's "Water as a resource" unit mixed K01 and K02 (four lessons, including Reading Australia's water map and Why water runs short). The roadmap's one-course-per-standard rule wins, so this course is K01 only (five lessons) and K02 becomes the next course (`geography/water-australia-7`, five lessons, including the map lesson). OK?
2. **Which real places?** Revised to your steer: a real spine (Snowy Mountains, Murrumbidgee, Murray) plus the Ord River and Great Artesian Basin as contrasts, instead of the made-up Kerrin. Canberra is the natural local anchor, but the course is meant for any school, so I'd frame it as "one real river system" with a prompt to swap in the teacher's own catchment. OK, or would you rather a different spine (for example the Murray-Darling as a whole)? Trade-off: real places are more authentic and need fact-checking; contested water politics are kept out of student steps.
3. **Before Year 7 and the Kit gap.** K01 still has no prior links in Kit. The obvious ones are AC9HS4K06 (sustainable use of renewable and non-renewable resources, which lesson 1 builds on directly) and AC9HS5K08 (types of resources). Proposal: add those two in waypoints-kit and re-import before lesson 1; then decide whether a catch-up ("Resources that come back and resources that don't", AC9HS4K06) is needed, or a "Build up to this" fold inside lesson 1 is enough. I'd lean towards the fold.
4. **A board or not.** The checks above need nothing new. A small catchment board (click where to put a dam or clear land, see what reaches the town downstream) would suit lessons 2 to 4 but is new machinery, so I'd leave it until the pilot shows the static picture isn't enough.
5. **Subject page.** `content/geography/index.md` as its own subject like Economics (order 9), one pathway "Water" with this course as foundations and K02 as "Coming later". The Preview label and planned-lesson display aren't built yet (Project plan › Placeholders); this course would wait for them or go up without them, as Economics has.

Next: trial the five K01 lessons with a class and review the lesson 1 prerequisite fold if needed. K02 remains the next planned course; it is not built in this batch.

## Starter prompt for the Geography chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/geography.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Geography course in `roadmap/geography.md`, commit and push, and wait for me before building.


## Lessons 2–5 built (30 Oct 2026)

- Completed the K01 sequence in node order: `water-connects-places` (n2, hinge), `effects-of-water-movement` (n3), `water-changes-land` (n4), `classify-connect-change` (n5). Each follows `resource-types`, with teacher notes, a class plan, a worked explanation, Nib’s planted slip, a smaller check, a book-based Make and optional width. No board or clips.
- Checked the shape against each waypoint under the updated AGENTS rule: n2 traces connections, n3 distinguishes effect types and causal claims, n4 explains processes, n5 joins concepts in explanations. The worked-example shape fits these specific reasoning moves. Judgements and viewpoints stay in discussion/optional width rather than pretending to have one marked answer.
- Minimum width: n2 distinguishes three forms and traces one pathway carrying material; n3 explains one effect type with a specific Australian example and recognises beneficial/adverse consequences; n4 explains one physical change; n5 joins at least two concepts, with all three optional. The second hinge’s farm-to-town question and gutter lead-in protect the move beyond “water flows downhill”.
- Real-place cards stay light: Parks ACT establishes the Murrumbidgee-to-Murray route; NSW Government establishes Snowy Scheme irrigation/electricity uses and river flow/channel consequences; SA Department for Environment and Water establishes the Lake Alexandrina–Murray Mouth connection and sand build-up under low outflow. Sources were checked 30 Oct and linked in student cards and teacher notes. No current volumes or particular community viewpoints asserted. The Snowy River channel replaces an unsourced formation story about a particular mountain valley.
- Kerrin’s schematic catchment, Rill Bay, Wattle Creek, farm/town comparisons, groundwater spill and pipeline are explicitly made up. Optional Ord/GAB comparisons were replaced with invented cases under the settled-fact rule; lesson 1’s existing GAB card is unchanged. The schematic is inline SVG with larger labels for mobile. The process-order check uses a question rather than long draggable text, avoiding narrow-screen overflow without changing shared tools.
- Added four single-line misconceptions. Updated the course summary and Geography teacher guide to say all five are built, still a preview and not yet classroom-tried. Lesson 3 teacher notes quote the imported ACARA elaboration naming Mutitjulu and direct teachers to local, community-approved material; no student explanation of First Nations history/culture added.
- Verified: `npm ci`, `npm run validate`, `npm run check-nodes`, `WP_NO_MAKECODE=1 npm run build`, and `npm run check-decks -- geography/water-7` passed. Headless Chromium answered all 48 new checks (including smaller steps and optional width), checked 32 deliberate wrong answers, prediction locking, saved progress, optional-step hiding, four mobile layouts, the course/subject/Geography teacher pages and four lesson guides. No browser page or HTTP errors. Screenshots reviewed. The two Geography HTML warnings are the intentional inline SVG figures; unrelated existing warnings and nine existing Code clip placeholders remain. Not yet tried with a class or checked on the live site.
- Publish: quick whole-site or full publish includes the plain Geography teacher guide as well as the new lessons/course. No clips to record; no workflows or publishing branches touched.


## Stage 1 plan (30 Oct 2026, reviewed in ChatGPT; awaiting build go): `geography/water-australia-7`, *Water in Australia* (AC9HG7K02)

**Status: built 1 Nov 2026** (Matthew said go; see Built: `water-australia-7` below for what departs from this plan). This follows `roadmap/checklist.md` › Plan first, then build. The imported standard has **five nodes, with hinges at n1 and n2** (not four). Prior: AC9HG7K01, `geography/water-7`. Descriptor: “the location and distribution of water resources in Australia, their implications, and strategies to manage the sustainability of water”. Endpoint: explain Australian water distribution, its implications for people and water-sustainability strategies.

**Course progression:** Where is water? → Why is supply variable or access limited? → Who is affected? → Which strategies address the cause? → Explain and justify an integrated response. Untiered route = minimum learning; `tier:` steps provide optional width, never faster pacing. The previous course covers water types, movement, connectivity and landscape change; do not reteach those as new content.

### Waypoints and lesson plans

**1. `water-on-the-map` — Where is Australia's water? (K02 n1, hinge)**
- **Checkpoint:** Represent at least two types of Australian water resources (surface water and groundwater) using map conventions, then describe an uneven distribution pattern. The task must make students *represent* locations, not just view a map.
- **One insight:** Where water resources are located is not necessarily where people can readily access reliable, usable water. Map a resource first; qualify access separately.
- **Misconception ID:** `water-present-means-accessible`. Nib sees the Great Artesian Basin and assumes everyone living above it has plentiful accessible water. `smaller:` find a labelled river and a groundwater region separately before describing the pattern.
- **Case:** Accurate Australian outline map with sourced river-system and groundwater-region locations; *made-up* map-note interpretations by Nib and imaginary towns Drybank/Riverbend clearly labelled “made up” whenever introduced.
- **Distractors:** groundwater is one freely accessible underground river everywhere; a mapped river guarantees year-round drinking supply; reciting symbols without describing spatial distribution.
- **Shape:** Worked map-reading example + guided representation and spatial-pattern check; suited to the cartographic hinge. **Width:** another resource type or comparison to population/access; seasonal distribution only with verified data.
- **Resources:** Static Australian map (clear legend, labels and cartographic conventions) plus a student-completed location/legend task; no new board. Verify geography against official mapping before drawing.

**2. `why-water-runs-short` — Why does water run short? (K02 n2, hinge)**
- **Checkpoint:** Distinguish physical scarcity from economically constrained access, and explain at least two variability factors (e.g. climate, seasonality, evaporation, location or topography). Differentiate competing use/demand from physical supply.
- **One insight:** Lack of reliably usable water can arise from limited physical supply, inadequate infrastructure/access, or competing demands. The diagnosis affects which response will work.
- **Misconception ID:** `scarcity-always-means-no-rain`. Nib assumes inadequate access always proves low rainfall. `smaller:` separate “Is water physically there?” from “Can people reliably obtain usable water?”
- **Case:** Two explicitly *made-up* settlements: one under prolonged dry conditions; the other with a potential water source but limited treatment/distribution infrastructure.
- **Distractors:** rainfall alone guarantees safe access; infrastructure failure is the same as environmental shortage; drought is the only source of seasonal/temporal variability.
- **Shape:** Worked causal comparison, classification and a hinge bug check. **Width:** combined supply-demand drivers, climate variability or changes in demand with evidence; do not imply any Australian community has the hypothetical circumstances.

**3. `water-and-people` — Who has access to water? (K02 n3)**
- **Checkpoint:** Explain at least one lived implication for a rural/remote place (e.g. reliability, health, costs or livelihoods), then compare it to an urban settlement. Where the node criteria ask for two implications, support that in the worked/practice path.
- **One insight:** Distribution, reliability, infrastructure and competing uses affect settlements differently; settlement type alone does not determine access.
- **Misconception ID:** `same-resource-same-access`. Nib thinks two settlements in one catchment must have the same supply and consequences. `smaller:` source → limitation → consequence.
- **Case:** Explicitly *made-up* regional town with treatment infrastructure versus remote settlement relying on stored rainfall and a bore, using only hypothetical data.
- **Distractors:** river proximity fully determines access; urban supply can never be restricted; every rural or remote settlement has the same water experience.
- **Shape:** Paired case comparison with explain-the-consequence check; not a generic assertion about real remote or First Nations communities. **Width:** compare reliability, affordability, maintenance and competing uses; separate evidence from generalisations.

**4. `managing-water` — Making water last (K02 n4)**
- **Checkpoint:** Explain how at least one strategy targets a diagnosed sustainability problem and identify why shared/competing uses or variable supply complicate management.
- **One insight:** Desalination, recycling, stormwater capture, inter-regional transfers and demand reduction work through different mechanisms, with contextual trade-offs.
- **Misconception ID:** `one-water-solution-fits-all`. Nib recommends desalination everywhere without examining geography, cost or demand. `smaller:` match one explicit cause to a directly relevant response.
- **Case:** Explicitly *made-up* coastal town and inland farming district, with clearly defined constraints. Optional real Perth desalination example only after source verification.
- **Distractors:** recycling creates unlimited water; supply expansion is always superior to reducing demand; maintenance/energy/environmental costs can be ignored.
- **Shape:** Guided inquiry: objective checks of mechanism and cause-strategy fit, then a book-based, teacher/partner-reviewed justification where more than one response can be defensible. **Width:** compare criteria (effectiveness, financial cost, environmental impact, equity), explain conditions that alter the choice. Do not automatically mark a contested “best” choice.

**5. `water-decisions` — Choosing a water strategy (K02 n5, integration)**
- **Checkpoint:** Explain the distribution of water in one Australian context, at least one implication for people, and how a strategy responds; use geographical terms `distribution`, `variability`, `scarcity`, `sustainability` accurately.
- **One insight:** A defensible water-management proposal begins with spatial and causal evidence, considers who is affected and explains how its strategy addresses the diagnosed problem.
- **Misconception ID:** `strategy-without-diagnosis`. Nib proposes a transfer before checking the shortage cause or downstream effects. `smaller:` where/source → problem/implication → matching response.
- **Case:** Clearly *made-up* inland Australian town with variable rainfall, growing demand and ageing storage; provide a coherent fictional evidence pack (small map, table, stated community needs and strategy cards).
- **Distractors:** increasing supply automatically meets everyone's needs; transfers have no consequences for a supplying area; a strategy guarantees sustainability regardless of future change.
- **Shape:** `primer`/inquiry-style integration with an evidence interpretation check, Nib's flawed reasoning and a `reflect` book/document explanation. Writing is never machine-marked. **Width:** contrast two plausible strategies against explicit criteria, acknowledging reasonable disagreement.

### Whole-course authoring and verification requirements

- **Checks:** per-option feedback explains the specific error, not just “incorrect”; hinge n1 and n2 each have a meaningful `smaller:` step. Preserve curricular words; do not replace “physical/economic scarcity” or “distribution” with ungrounded aliases. `learning:` in each `teacher.yml` is a verb-first learning intention; `summary:` stays descriptive.
- **Real and made-up:** Real-place facts (Great Artesian Basin, Murray–Darling, Perth desalination where used) need named authoritative sources and `checked:` dates in teacher notes. Verify exact water-quality/access claims, rainfall, river flows and policy effects rather than extrapolating from geography alone. Hypothetical towns, disputes, needs and data are *explicitly labelled made up* in student-facing text, including assessments.
- **First Nations:** Quote the ACARA elaboration where relevant in teacher notes and offer approved First Nations-led sources chosen by teachers. Do not write student-facing explanations of First Nations history, culture or specific remote communities or invent their experiences; use the established pointer-page rule where necessary.
- **Connections:** Link K01's classification/connection lessons as “What you should already know” where relevant, and the shared Humanities inquiry questions/finding/sharing skills as optional “Build up to this” help at the point of need. Full inquiry remains class work.
- **Teaching assets:** One legible, accurately sourced distribution map with student map task; simple causal diagrams, imaginary case cards and existing `question`, `match`, `sort`, `bug` / `reflect` checks. No board, recorded clip, custom print layout or shared-tool change planned. Prepare Print supplies worksheets.
- **Self-check before any implementation push:** confirm five `node:` tags in order, maps meet n1 representation criteria, two hinges and `smaller:` checks work, n3's lived implications are explained, n4/n5 allow multiple evidence-based recommendations, teacher notes and class plans exist, no automatic judging of open writing, cases/sources are honest, and width is optional. Run `npm ci`, `npm run validate`, `npm run check-nodes`, `WP_NO_MAKECODE=1 npm run build`, `npm run check-decks -- geography/water-australia-7` and Chromium checks of lesson/course/teacher pages and mobile layouts; update this roadmap with results.
- **Publishing:** Plan-only commit needs no publish. A future completed new course plus subject/teacher page changes will need a manual quick whole-site or full publish; never touch workflows or publishing branches.

## Review fixes (1 Nov 2026)

- Resource types: the water vapour sort item now says "using this lesson's rule", and its why notes that some books group all water as renewable.
- GAB card: "for much of inland Australia". The CSIROpedia page (a podcast transcript) has the interviewer say "the only reliable source of freshwater for inland Australia"; "much of" is the safer, commonly used wording. Not checked against a separate CSIRO report.
- Summaries of lessons 2–5 rewritten as plain descriptions; `learning:` added to all five teacher.yml files.
- Taglines added to the seven planned courses in `geography/index.md`.
- Resource types partner tick now "gave feedback".

## Boards and clips (proposed, 1 Nov 2026; not decided)
- **Catchment board:** place a dam or clear land and see what reaches the town downstream (water, soil, sediment). Fits `water-7` lessons 2–4 and the Valuing and managing water courses. A short captioned clip of water and soil moving downstream would suit the hook or Explain it to me.
- **Map-reading board:** scale, legend, direction and distribution on one made-up or properly sourced map; a still map remains the default until a lesson needs interaction.
- Per-course choice, not a rule (`roadmap/shared.md` › Decided: humanities).

## Boards in built lessons (1 Nov 2026, Matthew agreed; for the Geography chat)
- **Needs a new light board:** the catchment board (above) in `water-7/water-connects-places`, `effects-of-water-movement` and `water-changes-land`: change land use or add a dam upstream and see what reaches the town.
- `resource-types` and `classify-connect-change` stay as they are (their sort checks already are the interaction). Plan, then Matthew's go.

## Stage 1 re-check: `water-australia-7` against the 1 Nov rules and fixes (1 Nov 2026; plan still waiting for go)

Checked the Stage 1 plan above against `roadmap/rules.md`, `shared.md` › Decided: humanities (boards per course, 1 Nov), the 1 Nov review fixes and the imported K02 node data. The plan holds; these amendments apply when it is built (the plan text above is left as reviewed, so read it with this list):

1. **Boards and clips (per-course choice, 1 Nov).** "No board" now needs a reason, not a rule: none of the five waypoints asks students to change a system and watch it respond, except possibly n4 (a dam or transfer upstream). Keep Stage 1 board-free and clip-free. Once the catchment board (below) is built, n4 may reuse it as an optional `tier: typical` step (put a dam or a transfer upstream, see who downstream gets less); not planned until Matthew says so. The map-reading board stays proposed only.
2. **n1 "represent", without a custom worksheet (T5, T16).** The node's first criterion is that students *produce* a map with conventions. Students draw and label on a blank outline in their book or on the lesson's Prepare Print worksheet (`worksheet.md`), then a `reflect` tick ("a partner gave feedback"). On-page checks only read the static map: match symbols to the legend, question on the distribution pattern, the Nib bug. No fill-in layout on the page.
3. **Real map, kept light (T2, T12; 30 Oct "if a place needs a lot of fact-checking, go lighter").** An accurate map of every river system and aquifer is heavy checking. Draw the Australian outline with only two sourced regions: the Murray–Darling Basin and the Great Artesian Basin extents, from one named public source (Geoscience Australia or the Bureau of Meteorology; confirm the licence and credit line at build), `checked:` date in `teacher.yml`. Anything else on the map is left off, not guessed.
4. **GAB wording (1 Nov fix).** Reuse lesson 1's checked wording: important for "much of inland Australia", never "the only reliable source". Nib's n1 slip is about access (being above an aquifer is not having a bore), not a new claim about the basin.
5. **Made-up names (T2).** Check Drybank and Riverbend against the Australian gazetteer at build; "Riverbend" reads like a real suburb or homestead name, so swap it for a clearly invented one if there is any doubt. Label each made-up place as made up where it first appears in each lesson and in assessments.
6. **n5 needs a specific Australian context.** The node's first criterion asks for "a specific Australian water context". A wholly made-up town can't carry Australia's distribution. Amend: the town is made up, but sits in a real region from lesson 1's map, and its distribution facts are only the sourced ones from that map; its rainfall, demand, storage and community needs are labelled made up. The node's wider Murray–Darling case (Basin Plan, water trading) stays out of student steps (contested, dated); a teacher note may point to it.
7. **Scarcity categories as a way of sorting (T8).** Physical, economic and use-based causes are ACARA's categories, not a law: introduce them as "one way geographers sort the causes of a shortage" and say real places often mix them. Distractors stay genuine errors (every shortage is low rain; a river nearby means safe water), never disagreements with the categories. n2's minimum must include the use-based cause (elaboration 3: "the ways water is used"); the plan's "competing use/demand" covers it, keep the term.
8. **First Nations (T1).** K02's six elaborations name no First Nations example, so there is nothing to quote for First Nations content; n3's teacher notes quote elaboration 2 (limited access for people in rural and remote places). The node file's n3 wider item (a remote Indigenous community dependent on bore water) is not used in student steps or written up by us; n3 notes ask the teacher to use local, community-approved material if the class goes there.
9. **1 Nov review fixes carried forward.** `summary:` lines short, plain and descriptive (the review found water-7 summaries 2–5 dense); `learning:` in every `teacher.yml`; Make and partner ticks say "a partner gave feedback", not "read it and agreed"; an editorial pass before handover (`checklist.md`).
10. **Perth desalination (optional, n4).** Only the settled fact that Perth draws part of its supply from desalination, from Water Corporation, with no figures; otherwise leave it out.
11. **Misconceptions and publishing.** Five new single-line ids in `misconceptions.json` (`water-present-means-accessible`, `scarcity-always-means-no-rain`, `same-resource-same-access`, `one-water-solution-fits-all`, `strategy-without-diagnosis`). A new course changes the subject page, so it is a whole-site publish: ask Matthew first (W1).

## Plan: a light catchment board for `water-7` lessons 2–4 (1 Nov 2026; waiting for go)

Follows "Boards in built lessons" above. Light on purpose, like Economics' trade-off board: two land choices, a dam switch and a storm button, with a result panel. Phone-friendly, buttons only (no dragging).

### The board (`widget: catchment`, new file `playground-board/widgets/catchment.js`)

- **Picture:** the same made-up Kerrin catchment as the lessons' inline SVG (rain on the high slope, farm, river, town, lake), so the still and the board match. Labelled "Kerrin is made up. A simple model: it shows which way things change, not real amounts."
- **Controls:** High slope cover (forest, grass, bare soil); Farm (grazed grass, ploughed and bare); Dam above the town (off, on); **Send a storm**; Reset. A setup line can hide any control (`controls: farm storm` for a one-choice lead-in).
- **What a storm shows:** water and soil move down the river (a short animation, skipped with reduced motion), then a panel in words, never numbers: water reaching the town and the lake (a little, some, a lot); soil lost from the slope and farm (none to a lot); where soil settled (in the dam, at the town, at the lake entrance). Bare ground gives more runoff and much more soil; forest the least. A dam stores water (steadier supply for the town), traps most soil behind it, and sends less water and soil on to the lake.
- **Values for checks** (0 to 3 levels, set only after a storm, so the start never ticks): `storms`, `dam` (0 or 1), `town_water`, `town_soil`, `lake_water`, `lake_soil`, `eroded`, `dam_soil`, `covers_tried` (different slope covers stormed).
- **Honest model (T8):** the board says it is a simple made-up model; teacher notes list what it leaves out (rain amount and intensity, soil type, groundwater, dam releases and flushing, years of change).

### Where it goes (one step per lesson; existing checks stay)

| Lesson | Step | Task | Check |
|---|---|---|---|
| 2 `water-connects-places` (hinge) | New untiered step after Try: "Send a storm" | Make the farm bare and send a storm; see soil reach a town that had no rain | board `when: "storms >= 1 and town_soil >= 2"`; question: why did soil reach the town? (distractor: only rain over the town can affect it, existing `water-is-only-transport` slip) |
| 3 `effects-of-water-movement` | New untiered step before Practise: "Add a dam" | Turn the dam on and send a storm; compare the town and the lake | board `when: "dam = 1 and storms >= 1"`; sort what changed into environmental, economic, social (town supply steadier vs less water to the lake's wetland), reusing `water-benefits-everyone`; one new id if needed: `dam-creates-water` ("a dam makes more water") |
| 4 `water-changes-land` | New untiered step after Try: "Watch the soil" | Bare slope, storm; find where soil was eroded, carried and deposited | board `when: "eroded >= 2 and lake_soil >= 1"`; match erosion, transport, deposition to places on the board |
| 4, Wider (already `tier: wider`) | Becomes a board step | Same storm on forest and bare slope | board `when: "covers_tried >= 2"`; the reflect step stays |

- Board lead-ins (`smaller:`) only on lesson 2 (the hinge): farm only, one storm (`controls: farm storm`).
- Class plans: the board step is whole-class predict, then pairs; at most three checks per site step (T18).
- `explainPicture` for lessons 2–4: a board still after a storm. The inline SVG figures stay for reading.

### Optional clip

One short captioned clip for lesson 2's Explain it to me (about 20 s, four lines: bare farm, storm, soil reaches the town, the dam traps it). Fits the 1 Nov rule: a clip follows a board, and this idea is a sequence of change. Only clips on the `catchment` widget would record (none exist yet). If yes: pick an unused clip-server port range at build (grep the roadmaps; Geography has none yet) and use the full publish so it records. Without the clip, a quick whole-site publish is enough.

### Shared files and tests

- Shared: one `<script src="widgets/catchment.js">` line in `playground-board/index.html`, an AUTHORING › `widget: catchment` entry, one or two misconception lines; noted in `shared.md`. `core.js` untouched.
- Tests: a Node check of the rule table (bare beats grass beats forest for soil; dam lowers town and lake soil; nothing set before a storm), `npm run validate`, `check-nodes`, build, `npm run check-lesson-boards` for the three lessons, `check-decks -- geography/water-7`, and Chromium at 390 px and desktop answering each new check and one wrong path.
- Publish: whole-site (a new widget), so ask first (W1).

### For Matthew

1. Board steps on the minimum path in lessons 2–4 (recommended: the interaction is the point, and lesson 2 is a hinge), or as `tier: typical` extras?
2. The clip: lesson 2 only, or none for now?
3. Keep the farm to two choices (lighter), or add "crops with fertiliser" so lesson 2's fertiliser example shows on the board?

### Decided (Matthew, 1 Nov 2026): catchment board choices (default, revisit after the pilot)

1. **Board steps on the minimum path** in lessons 2, 3 and 4 (lesson 4's Wider stays `tier: wider`). Reason: the board is where students change something and see the consequence downstream; optional steps are skipped by the students who most need them, and lesson 2 is a hinge. Revisit if the pilot shows it slows classes or the board misbehaves.
2. **No clip for now; flagged to revisit** once a class has used the widget and it has settled. Reason: a clip forces a full publish, needs a port range and re-records on every widget tweak; a board still (`explainPicture`) covers most of the ground meanwhile.
3. **Farm keeps two choices** (grazed, ploughed bare); no fertiliser. Reason: a third material adds reading on a phone and a dissolved-load rule that is easy to get wrong; lesson 2's text questions already carry the dissolved idea. Add it only if the trial shows students think water carries only mud.

**Alongside the Economics trade-off board** (`roadmap/economics.md` › Plan, 1 Nov; not necessarily the first humanities board, so this one follows its pattern rather than setting it): same light shape (buttons, no dragging; a "made-up model" label; `wpt-` class names; values set only after the student acts). Both add a `<script>` line to `playground-board/index.html`: whichever builds second pulls first and keeps both lines. Both need a whole-site publish, so they can share one run (ask Matthew first). The Humanities pilot page and deck link "the first humanities board" (`shared.md` › Next for the Humanities pilot page): whichever lands first.

## Built (1 Nov 2026): the catchment board in `water-7` lessons 2–4 (not yet tried with a class)

- **Widget** `playground-board/widgets/catchment.js` (`widget: catchment`; AUTHORING › `widget: catchment`): the made-up Kerrin catchment with buttons for the high slope (forest, grass, bare soil), the farm (grazed grass, ploughed bare) and a dam above the town, then **Send a storm**. Soil specks run down the river (skipped with reduced motion and in pictures), the river browns and widens, gullies and deposits appear, and a list says in words what reached the town and the lake and where soil settled. Labelled on the board as made up and simple. The model is a small rule table (`model()` in the widget): bare loses most soil, forest least; a dam traps most soil, evens out the town's supply and sends less water and soil to the lake. `node experiments/catchment-check.mjs` tests it across all 12 combinations.
- **Values** need an underscore (`n_storms`, `dam_on`, `soil_lost`, `town_steady`, …): board checks read a plain run of letters as letters multiplied together, so `storms` failed the lesson-board check. All are 0 until a storm is sent with the current choices; changing a choice clears them.
- **Lessons** (each a new untiered step, as decided): lesson 2 *Try it on the board: send a storm* (board check `n_storms >= 1 and town_soil >= 2`, a `smaller:` board lead-in with the farm already bare, then a why question); lesson 3 *Try it on the board: add a dam* (board check, a sort into environmental, economic, social and description, and Nib's "the dam made more water" question with new misconception `dam-creates-water`); lesson 4 *Try it on the board: follow the soil* (board check, then match erosion, transport, deposition to what the board showed). Lesson 4's Wider step now has a board (`covers_tried >= 2`) before its reflect tick. Each lesson has an `explainPicture` of the board after a storm, a class-plan activity at the board step, and two `running:` lines in `teacher.yml` (what to ask; what the model leaves out).
- **No clip** (decided; revisit after a class has used it). Existing steps and checks unchanged; the inline Kerrin SVGs stay.
- **Checked:** `npm run validate`, `check-nodes`, build, `check-lesson-boards geography` (4 boards, 5 checks read real values and none holds at the start), `check-decks -- geography/water-7`, and Chromium at 390 px and 1280 px: every new board check stays unticked at the start and after the wrong move, ticks after the intended one, the dam lowers the lake's water, no sideways scroll, no page errors. Board picture drawn in light and dark. Screens read on phone; not clicked through as a full lesson for tone, and not reviewed by fresh eyes.
- **Publish:** full publish (a new widget, and three new board pictures to draw; no clips to record). Ask Matthew first (W1). The Economics trade-off board (already on main) needs the same full publish, so one run covers both.

## Built (1 Nov 2026): `geography/water-australia-7`, Water in Australia (AC9HG7K02; not yet tried with a class)

- **Course** `content/geography/water-australia-7/` (order 2, `after: [water-7]`), linked from the subject page in place of its Coming later card. Five lessons in node order: `water-on-the-map` (n1, hinge), `why-water-runs-short` (n2, hinge), `water-and-people` (n3), `managing-water` (n4, `shape: primer`), `water-decisions` (n5, `shape: primer`). Each has teacher notes with `learning:`, a class plan, Nib's slip with a `smaller:` lead-in, a book-based Make step ticked "a partner gave feedback", and optional typical and wider steps. Five misconceptions added (`water-present-means-accessible`, `scarcity-always-means-no-rain`, `same-resource-same-access`, `one-water-solution-fits-all`, `strategy-without-diagnosis`). Lesson 1 `assumes: [AC9HG7K01]`.
- **Map** (inline SVG, lessons 1 and 5, plus a blank outline in lesson 1): drawn by `experiments/water-australia-map/make-map.mjs` from Natural Earth (public domain: coastline, state borders, some major rivers) with capital cities, north arrow and scale bar. **Basin outlines (added 1 Nov, after Matthew downloaded the files):** the Murray–Darling Basin as defined in the Water Act 2007 (MDBA data library, CC BY 4.0 per its data.gov.au listing; its area matches the Bureau of Meteorology's) and Geoscience Australia's revised Great Artesian Basin Jurassic–Cretaceous boundary (GABWRA, CC BY 3.0 AU; converted from Albers to longitude and latitude with proj4; the separate Laura Basin in the same file is left out). Both are simplified and credited on the map. The source files are not committed; the script's header says where each comes from. Natural Earth's own basin regions were not used: they are label areas, not extents.
- **Real facts, each sourced in teacher notes (checked 1 Nov):** the Great Artesian Basin lies under parts of Qld, NSW, SA and NT and is Australia's largest groundwater basin (Geoscience Australia); the Murray–Darling Basin covers parts of Qld, NSW, Vic and SA and all of the ACT (Bureau of Meteorology, National Water Account); in the north almost all rain falls from about November to April, and the driest areas are inland (Bureau of Meteorology chapter in ABS Year Book Australia 2005); Perth gets part of its water from desalination plants (Water Corporation). No figures that date.
- **Made-up names:** Riverbend was swapped (it is a real Queensland suburb). The cast is Drybank, Corrowin (n2), Pennerby, Fennow (n3, n5), Mellick Bay and the Drybank farms (n4); web searches found no Australian places with these names (not exhaustive). Each is labelled made up where it appears. n5's Pennerby sits in the real Murray–Darling Basin, as amendment 6 asked.
- **Amendments carried:** scarcity causes framed as one way of sorting (T8); the n3 wider item about a remote Indigenous community is not used, and teacher notes say why (T1); options rebalanced so the right answer is not the longest (the 1 Nov review's length giveaway).
- **Checked:** `npm run validate`, `check-nodes`, build, `check-decks -- geography/water-australia-7` (all slides fit, after shrinking the blank outline on the Make slide), and Chromium at 390 px and 1280 px answering all 58 checks per width (116 in all, smaller and optional steps included): every check ticks with the right answer, every question and bug task rejects a wrong one first, no sideways scroll, no page errors. Course, subject and teacher-guide pages load. Editorial pass done on all five lessons. Not clicked through as a full lesson for tone, and not reviewed by fresh eyes.
- **Publish:** whole-site (new course and a subject-page change). No clips or board pictures, so a quick whole-site publish is enough. Ask Matthew first (W1).
