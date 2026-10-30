# Roadmap: Geography

`content/geography/` (not created yet). Set up 30 Oct 2026 so a Geography chat can start; first course `geography/water-7` decided and lesson 1 built 30 Oct (below); lessons 2 to 5 not built. Node content: waypoints-kit `data/geography/`, copied in `data/curriculum/geography.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `geography/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- Lesson shape is a default, not a rule: the shape above suits skill and concept waypoints with a planted answer. Before building a waypoint, check it fits; if it is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better, and a line in this file saying why is enough.
- First Nations content (`roadmap/shared.md` › First Nations content, refined, 30 Oct): teacher notes start from ACARA's own elaboration for that content and ask the teacher to build on it with local, community-approved material. In student lessons we write no explanation of First Nations history or culture ourselves; where a skill lesson needs an example, use the custodians' own words (one short factual line naming the community and source, plus a link; evidence and technology only, no ancestral remains, no images of people who have died, no culture or belief). Items about First Nations values or connection to Country are pointer pages to First Nations-led resources. The elaboration text is imported: `elaborations` on each standard in `data/curriculum/<subject>.json`, shown on its pointer page. Quote the relevant one in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`).
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

Next: lessons 2 to 5 and the lesson 1 fold (same shape; lesson 2 is the second hinge and the first to need a map picture).

## Starter prompt for the Geography chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/geography.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Geography course in `roadmap/geography.md`, commit and push, and wait for me before building.
