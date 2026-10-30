# Roadmap: History

`content/history/` (subject, course `history/sources-7` and a Before Year 7 course built 30 Oct 2026; not yet tried with a class). Node content: waypoints-kit `data/history/`, copied in `data/curriculum/history.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `history/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- Contestable ideas are taught as models or views, not as settled truth, even where ACARA words them as fact (AGENTS.md). Interpretations and causes are "historians argue...", with the evidence, not facts.
- Lesson shape is a default, not a rule: the shape above suits skill and concept waypoints with a planted answer. Before building a waypoint, check it fits; if it is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better, and a line in this file saying why is enough.
- First Nations content (`roadmap/shared.md` › First Nations content, refined, 30 Oct): teacher notes start from ACARA's own elaboration for that content and ask the teacher to build on it with local, community-approved material. In student lessons we write no explanation of First Nations history or culture ourselves; where a skill lesson needs an example, use the custodians' own words (one short factual line naming the community and source, plus a link; evidence and technology only, no ancestral remains, no images of people who have died, no culture or belief). Items about First Nations values or connection to Country are pointer pages to First Nations-led resources. The elaboration text is imported: `elaborations` on each standard in `data/curriculum/<subject>.json`, shown on its pointer page. Quote the relevant one in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`).
- Inquiry skills: questions, locating and organising, and creating explanations belong to the shared course (`roadmap/humanities-inquiry.md`); this subject builds only its own skills (below). The full investigation is class work.
- Examples come from Year 7 content only, so skill lessons also build what the class needs to know. Mark the subject and its courses **Preview** (pilot, not finished) and show planned lessons as "Coming later" (Project doc humanities-y7-plan › Placeholders; log the shared code change in `roadmap/shared.md`).
- Before Year 7 catch-up lessons (Year 6 HASS) go with the first course where a prerequisite link needs one (Project doc humanities-y7-plan › Before Year 7).
- K09–K13 are the ancient-world lenses (shaped by the land, power and people, beliefs and practices, contact and conflict, a significant individual). Each lesson has one fully worked example, **ancient China in the Qin and Han period** (what CGGS teaches), plus swap-in topic cards for Egypt, Greece, Rome and India (a few key facts, a short timeline, two or three sources). Version 9 needs only one ancient society, so the intro and teacher page say China is a model and point to the cards. Modern links stay factual (inventions, Confucian ideas), not claims about China today.
- K01 (Out of Africa) is a normal course. K02–K07 (deep time Australia) are **one pointer page** to First Nations-led resources (follow school protocols and local community guidance), not authored courses, until someone has been consulted. Safe examples in skill lessons follow the First Nations rule above (for example Budj Bim, Gunditjmara, for dating and evidence).
- "How we know" (K08 and the source skills S03–S04) is the gateway: build it first. Its catch-up is "Can you trust this source?" (AC9HS6S04).
- A teacher page per year, "Using these with your depth study", and a Years 7–10 lenses overview (teacher reference) come later.
- Add `history` to `CHECKED` in `tools/progressions.mjs` with the first lesson (say so in `shared.md`).

## Year 7 knowledge standards (start here)

| Code | Title | Waypoints | Hinges |
|---|---|---|---|
| AC9HH7K01 | Early human migration | 3 | 2 |
| AC9HH7K02 | Arrival on the Australian continent | 3 | 1 |
| AC9HH7K03 | Continuity over deep time | 3 | 1 |
| AC9HH7K04 | Environmental response over time | 3 | 1 |
| AC9HH7K05 | Early technological achievements | 3 | 1 |
| AC9HH7K06 | Social organisation and cultural practice | 3 | 1 |
| AC9HH7K07 | Cultural preservation and heritage | 3 | 1 |
| AC9HH7K08 | Historical and archaeological evidence | 4 | 2 |
| AC9HH7K09 | Environment and ancient development | 3 | 2 |
| AC9HH7K10 | Roles and groups in ancient society | 3 | 1 |
| AC9HH7K11 | Beliefs, values and practices | 3 | 1 |
| AC9HH7K12 | Contacts, conflicts and change | 3 | 1 |
| AC9HH7K13 | Significant individual in ancient society | 3 | 2 |

## Year 7 skills this subject builds itself

- AC9HH7S03 Identify source origin and purpose (3 nodes)
- AC9HH7S04 Describe source usefulness (3 nodes)
- AC9HH7S05 Describe cause and continuity (3 nodes)
- AC9HH7S06 Identify past perspectives (3 nodes)
- AC9HH7S07 Explain historical interpretations (3 nodes)

## Plan (proposed and approved 30 Oct 2026): course `history/sources-7`, *Source origin and purpose* (tagline *Who made it, and why?*)

**Why this standard first.** "How we know" (K08, S03, S04) is the gateway. Of the three, **AC9HH7S03 Identify source origin and purpose** goes first: S04's prior is S03, and K08's priors are K01 and K07 (K07 is on the deep-time pointer page, so K08 is better after students can already question a source). S03's prior is AC9HS6S04, which is the catch-up named above. Suggested order for the gateway: S03 → S04 → K08, each its own course in a "How we know" pathway.

The table below is the plan as proposed; "Built" says what was made. The built lessons add the optional warm-up (S02 n1) as lesson 1 and are numbered 2 to 4. Usually Year 7 (teacher note only). Lesson shape: `needs-and-wants` (`language: maths`, predict, sort, worked example with Nib's planted mistake, vary, practise, Make in the student's own book with a `reflect` tick, then typical and wider steps; class plan; no clips, no board). Sources are shown as **source cards** in the lesson text (a short heading, what it is, and either a plain summary we write or a short public-domain translation; a CC-licensed photo with credit where it helps). No new widget.

Worked example throughout: **Qin and Han China**. Main sources (all real, all Year 7 content):
- the Terracotta Army (artefact; Qin workshops, about 210 BCE; made to guard the First Emperor after death)
- a Qin stone inscription praising the First Emperor (public monument; written to be seen)
- Sima Qian's *Records of the Grand Historian* (a Han court historian, about 100 years after the Qin fell, writing about the Qin)
- Qin bamboo slips of laws from an official's tomb (administrative record)
- one made-up secondary source (a museum label or textbook paragraph we write), so students meet secondary sources under the same questions

| # | Lesson (waypoint) | Flags | Minimum path (untiered) | Hinge check before moving on | Width (`tier:` steps) |
|---|---|---|---|---|---|
| 1 | Who made it, when, and what does it show? (S03 n1: origin and content) | Hinge | Sort facts about the Terracotta Army into origin (who, when, where) or content (what it shows); answer Who? When? What? for a second source | Bug task: Nib says "the Terracotta Army was made by soldiers, because it shows soldiers" (origin read off content). `smaller:` lead-in: "Who made the figures: the people they show, or the workers who shaped them?" | Typical: the same questions on a Han bamboo slip and on a topic-card source (a Roman coin, an Egyptian tomb painting); Wider: a source whose origin is hard to pin down (artefacts with no record of where they were found) |
| 2 | Why was it made, and what was going on? (S03 n2: context and purpose) | Hinge | Match each source to its purpose (ceremonial, propaganda, record-keeping, remembering); name the context of the Qin inscription in one specific sentence (a new emperor who had just united rival states) | Bug task: Nib writes "Context: ancient China. Purpose: it shows the emperor" (context as setting, purpose as content). `smaller:` lead-in: pick the more specific context from two | Typical: how purpose shapes what is left out (what an inscription praising the emperor would never mention); Wider: Sima Qian writing for a Han emperor about the dynasty the Han replaced |
| 3 | What can this source tell us? (S03 n3: putting it together) | Integration | Order the four questions (origin, content, context, purpose) for one source in a parsons-style sort, then choose the best conclusion to an inquiry question ("What did the First Emperor want people to think of him?") | Exit ticket: the four questions on a new source, then one sentence on what it can and cannot tell us | Typical: the same routine on the made-up secondary source; Wider: two sources on one question that disagree, and what each one's purpose explains |

Notes:
- **Hinges get the time.** Lessons 1 and 2 carry `smaller:` and the class plan's whole-class discussion. Teacher notes name the cascade from the node file's `hinge_reason` (origin and content kept apart, then context and purpose, before lesson 3 can join them).
- **Lesson 3 hands on.** Its "What can it not tell us?" sentence is the seed of S04 (accuracy and usefulness), which is the next course; the teacher note says so as a mention, not a gate.
- **Misconceptions to add:** `origin-from-content`, `context-is-setting`, `purpose-is-content`.
- **Make steps:** in the student's own book, the four questions on a source from the class's own unit (or a supplied one if the class has not started a topic), checked by a partner, `reflect` tick.
- **First Nations:** S03's third elaboration names the Kimberley Bradshaw paintings. Not used as a student example (it is about culture and its origin is contested). Teacher notes quote the elaboration and point to custodian-led material (the paintings are known to their custodians as Gwion Gwion), per the rule above.
- **Modern links stay factual:** the Terracotta Army as a World Heritage site; no claims about China today.
- **Copyright:** source text is either our own plain summary, labelled as one, or a public-domain translation; secondary sources are written by us.

Goes with it (same push, once approved):
- **Before Year 7 catch-up** "Can you trust this source?" (AC9HS6S04 n1, publication details and content), primer shape, linked from lesson 1 by `assumes:`.
- Subject `content/history/index.md` marked **Preview**, with a "How we know" pathway: this course built, S04 and K08 as "Coming later", and the course's planned units shown greyed (the planned-units display in the humanities plan; shared change, logged in `shared.md` when built).
- `history` added to `CHECKED` in `tools/progressions.mjs`.

Decided (30 Oct 2026, Matthew said "defaults"):
1. **Primary or secondary (S02 n1):** an optional warm-up lesson in this course (option b), tagged AC9HH7S02 n1. The rest of S02 (finding and organising sources) stays with the shared inquiry course (`content/hass/inquiry-7/`).
2. **Order of the gateway:** S03 → S04 → K08.
3. **Pictures:** text source cards only for now. Each source is a plain-words card in the lesson text, so a CC-licensed photo with credit can be added later without changing a lesson's shape.
4. **Course title:** plain title "Source origin and purpose", with "Who made it, and why?" as the tagline.

## Built (30 Oct 2026; not yet tried with a class)

- Subject `content/history/index.md` (History, order 8.3, pathways **How we know** and **Before Year 7**), marked "Preview (a pilot, not finished)". How we know lists the built course and two planned ones as "Coming later": Source usefulness (AC9HH7S04) and Evidence of the ancient past (AC9HH7K08).
- Course `history/sources-7` *Source origin and purpose* (Usually Year 7), four lessons in four units, no clips, no board, `language: maths`, class plans in `class/`:
  1. `primary-or-secondary` (optional warm-up, AC9HH7S02 n1, hinge): sort sources by the time of the event, not their age. Nib's slip: "over 2000 years old, so it must be primary."
  2. `origin-and-content` (AC9HH7S03 n1, hinge): origin (who, when, where) and content (what it shows or says). Nib reads the maker off the content. Sources A to D (clay warrior, Qin bamboo slips, stone inscription, a made-up 2019 museum label); typical tier adds a Roman coin.
  3. `context-and-purpose` (AC9HH7S03 n2, hinge): context is what was going on, not the setting; purpose is why, not what it shows. Nib writes "Ancient China" as the context.
  4. `what-can-it-tell-us` (AC9HH7S03 n3, integration): order the four questions, then say what a source can and cannot tell us about a question. It seeds the next course.
- Course `history/before-year-7`, lesson `can-you-trust-this-source` (AC9HS6S04 n1), linked from lesson 2 by `assumes:`.
- Every lesson has `smaller:` on its hinge bug task, a Make step written in the student's own book with a `reflect` tick, one typical and one wider step, and teacher notes (the Kimberley Bradshaw paintings are named only in the teacher notes, from ACARA's elaboration, never as a student example).
- Four misconceptions added (`old-means-primary`, `origin-from-content`, `context-is-setting`, `purpose-is-content`). `history` added to `CHECKED` and the catch-up link extended to History (`roadmap/shared.md` › Changed by the History chat).
- Tested: `npm run validate`, `check-nodes`, `check-concepts`; every History page loaded at 1280 and 390 px with no errors; every question, bug, match and reflect answered with its stored answer in a headless browser (the sort and ordering checks are checked by validate only). Needs a whole-site publish (new subject and a shared tool change).
- Source facts to check before a class: the clay warriors (found 1974, tomb of Qin Shi Huang), the Shuihudi bamboo slips (a Qin official's tomb, 217 BCE, found 1975), Sima Qian (Han court historian, about a century after the Qin fell) and the Qin stone inscriptions (the original stones are mostly lost; the card gives a plain summary). Nothing is quoted from a published translation.
- Known issue, not from this course: the ordering (parsons) step makes the page scroll sideways on a phone when its lines are long (Economics `putting-together` does it too); History's lines are short enough not to.

## Next

- Course 2 is now built as `history/usefulness-7`, *Source usefulness* (AC9HH7S04); see the completion notes below.
- Course 3 is built as `history/evidence-7`, *How we know* (AC9HH7K08); see the completion notes below. The "How we know" gateway (`sources-7` → `usefulness-7` → `evidence-7`) is now complete.
- Next: the ancient-world lenses (K09 to K13) with swap-in topic cards, and K01 (Out of Africa). K02 to K07 stay one pointer page.
- A First Nations educator should review before these courses go beyond CGGS (`roadmap/shared.md` › Decided: humanities).

## Starter prompt for the History chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries and › Changed by the History chat, and `roadmap/history.md` (Built and Next). Look at `content/history/sources-7/` end to end as the History model. Then propose the next History course (source usefulness, AC9HH7S04) in `roadmap/history.md`, commit and push, and wait for me before building.

## Built: How we know (30 Oct 2026; Preview, not yet tried with a class)

- `history/evidence-7`, AC9HH7K08, one lesson per waypoint in node order: `reading-the-layers` (n1, hinge), `dna-and-dating` (n2), `reading-ancient-writing` (n3, hinge), `keeping-the-evidence` (n4, integration). DNA comparison and biological relationships are in the untiered minimum path. Dating estimates, sample context and uncertainty are taught alongside them.
- Normal skill-lesson shape: Predict, Try, Worked example, Vary, Practise, Make in the student's own book. Smaller-step support and escalating hints accompany each planted misconception, including both hinges. Typical and wider steps add breadth on the same waypoint. No pace labels, board, write box or clips.
- Shape decision: n4 uses checkable object/context and protection-role distinctions in the normal shape; its policy recommendation is open discussion and book work. The site does not mark a preferred development policy.
- Excavations, ancient individuals, lab reports, inscriptions, road proposals and councils are explicitly made up. The layer diagram is schematic. The real Qin conservation case is sourced to UNESCO; the optional Rosetta Stone example to the British Museum. Methods are checked against the French Ministry of Culture, Smithsonian and NHGRI sources listed in teacher notes. No claim is made that the invented DNA reports concern Qin people.
- K01 and K07 prerequisites link to existing curriculum pointer pages. K07 is not covered by authored explanations; teacher notes direct teachers to ACARA elaborations and local, community-approved material. No First Nations historical or cultural explanation has been authored.
- Teacher notes and class plans for all four lessons, plus a conceptual reference, recap, short course presentation and layer SVG (embedded in the lesson so it needs no asset-copy change). Subject/pathway and History teacher pages now link the course and retain Preview. Four misconception records added as single lines in `misconceptions.json`; no build tools or workflows changed.
- Browser testing found a shared completion card linking to a nonexistent playground. `site/progress.js` now chooses an available course resource or lesson; details and regression checks are in `roadmap/shared.md`.
- Continuation note: the previous unpublished checkout was unavailable after session cleanup, so this version was rebuilt from the current repository and K08 nodes; earlier reported test results were not reused.
- Tested: `npm ci`, `npm run validate`, `npm run build` with `WP_NO_MAKECODE=1`, `npm run check-nodes`, and `check-decks` for the course. Browser checks at 1280 and 390 px: 34 page visits, 80 check instances (including smaller and optional steps), 96 wrong-answer trials; no page errors, broken History links or sideways scrolling. Required completion excludes optional width and smaller checks; progress persists after reload. Shared progress regression: 18 fresh, partial and complete states across this course, Source origin and purpose and Python Foundations. All four course presentation slides fit. Existing warnings elsewhere in maths/science and clip placeholders remain outside this work.
- Not tested with a class; no local clips rendered, and no publish run. Needs a whole-site publish for subject and teacher-page discovery and the shared progress script; Matthew publishes manually. These lessons have no clips to record.

## Built: Source usefulness (30 Oct 2026; Preview, not yet tried with a class)

- `history/usefulness-7`, *Source usefulness* (tagline *Can you trust it, and what is it good for?*), AC9HH7S04, three lessons in node order across two units (`accuracy`, `usefulness`), continuing the Qin and Han China source cards from `history/sources-7`:
  1. `fact-opinion-and-accuracy` (AC9HH7S04 n1, hinge): distinguish checkable fact statements from value judgements and opinions (`sort` + `question`), and check accuracy by comparing claims against archaeological evidence (`match`). Nib's planted slip (`primary-means-all-fact`, with `smaller:` lead-in): treating a Qin stone inscription's praise as pure fact because it was carved during the Qin dynasty.
  2. `accurate-versus-useful` (AC9HH7S04 n2, hinge): judge usefulness relative to a specific inquiry question (`sort` + `match`), showing that one source can be useful for one question and not another, and that an exaggerated source is still useful for studying official image and propaganda. Nib's planted slip (`biased-means-useless`, with `smaller:` lead-in): throwing the Qin inscription away as "useless for history" because its boasts are biased.
  3. `weighing-a-source` (AC9HH7S04 n3, integration): order the four-step evaluation routine (`parsons` in `chain.txt`: check statements → check accuracy → check the inquiry question → weigh accuracy and usefulness together with a reason) and apply it to Qin bamboo law slips, Sima Qian, and a made-up 2021 museum poster. Nib's planted slip (`separate-labels-without-reason`, with `smaller:` lead-in): writing "Accurate: no. Useful: yes." without explaining what the source is useful for or why.
- Shape check: all three waypoints teach source-evaluation distinctions and routines with clear planted misconceptions, so the `sources-7` / `needs-and-wants` shape fits all three. Every lesson has `smaller:` support, escalating hints, a Make step in the student's own book with a `reflect` tick, one typical and one wider step, `teacher.yml` quoting ACARA's elaborations for AC9HH7S04 (including the Kimberley Bradshaw / Gwion Gwion elaboration with custodian-led guidance), and a class plan in `class/`. No student-facing explanations of First Nations history or culture written by us.
- `content/history/index.md` and `content/history-teachers.md` updated so the **How we know** pathway links `sources-7` → `usefulness-7` → `evidence-7`. Three single-line misconception entries added to `misconceptions.json` (`primary-means-all-fact`, `biased-means-useless`, `separate-labels-without-reason`).
- Step 4 self-check pass (30 Oct 2026): added `learning:` (one verb-first sentence) to all three `teacher.yml` files while keeping `summary:` as description only; replaced all implausible distractors across `fact-opinion-and-accuracy`, `accurate-versus-useful` and `weighing-a-source` with real student errors (confusing long-lived belief with fact, dismissing biased primary sources as useless for every question, treating secondary sources as automatically neutral or primary sources as automatically more accurate, and writing separate accuracy/usefulness labels without connecting to the inquiry question) and matching feedback; shortened `weighing-a-source/chain.txt` lines so mobile `390px` width has zero horizontal scroll (`390/390`).

## Plan (awaiting Matthew's "go" before building): next History courses (`history/land-7` AC9HH7K09 and `history/migration-7` AC9HH7K01)

Per `roadmap/checklist.md` › "Plan first, then build", here are the per-waypoint plans for the first ancient-world lens (`AC9HH7K09`, direct successor to `AC9HH7K08`) and Out of Africa (`AC9HH7K01`):

### Option A — Course `history/land-7`, *Shaped by the land* (AC9HH7K09)

- **Standard & descriptor wording:** `AC9HH7K09` (*Environment and ancient development*) — "how the physical environment and geographical features influenced the development of the ancient society" (`prior: [AC9HH7K08]`). Worked example: Qin and Han China (Yellow and Yangtze river basins, loess plains, steppes, mountains and seas), with swap-in topic cards for Egypt, Greece, Rome and India.
- **First Nations element:** none in AC9HH7K09's elaborations; teacher notes state that no First Nations explanation is written by us and point to the deep-time pointer page for K02–K07.

1. **Waypoint 1 (`AC9HH7K09 n1`, hinge): *Physical geography of the ancient society's location* (`landforms-and-waterways`)**
   - **Node checkpoint:** "Students can describe the key geographical features of the region where the ancient society developed — including major landforms, waterways, climate, and resources — and explain why this location was viable for settlement."
   - **One insight:** River valleys and plains provided the water and arable soil needed for dense settlement, while surrounding mountains, deserts and seas acted as natural barriers that shaped where people could live and travel.
   - **Planted misconception (`geography-is-just-backdrop`):** treating physical geography as passive scenery ("people could have built the same cities anywhere; the Yellow River and mountains just happened to be nearby") rather than identifying what specific features provided (water, loess soil, defence, transport). Includes `smaller:` lead-in on why early farming villages clustered along the Yellow River basin rather than the dry Gobi steppe.
   - **Real vs made-up cases:** Real geography of China (Yellow River / Huang He, Yangtze River / Chang Jiang, North China Plain, Loess Plateau, Gobi Desert, Himalayas) checked against curriculum elaborations and museum/atlas references; a **made-up student map note** in the worked example (explicitly labelled `"In a made-up student map note"` in the question stem and Nib intro).
   - **Distractor ideas (real student errors):**
     - Confusing a defensive barrier (mountains/desert) with an agricultural water source.
     - Assuming all parts of ancient China had the same warm, wet climate (confusing the cooler, drier Yellow River millet/wheat north with the warm, wet Yangtze rice south).
     - Treating rivers only as drinking water and overlooking fertile flood silt (loess) and boat transport.
   - **Shape and why:** Default `sources-7` / `needs-and-wants` worked-example shape (`predict`, `sort`/`match`, `investigate` with `bug` + `smaller:`, `modify`, `practise`, `make` in student book with `reflect`, plus `typical` and `wider` swap-in cards on the Nile and Tiber/Po). Fits because the waypoint teaches specific geographical features and their settlement functions with a clear planted misconception.

2. **Waypoint 2 (`AC9HH7K09 n2`, hinge): *Environment and agriculture — the foundation of ancient society* (`surplus-and-specialisation`)**
   - **Node checkpoint:** "Students can explain how the physical environment supported the development of agriculture in the ancient society, and describe how agricultural surpluses enabled population growth, specialisation, and the development of complex social structures."
   - **One insight:** Fertile soil and river water allowed farmers to grow a **surplus** (more food than their own families needed), and that surplus is what made specialised jobs (craftworkers, officials, soldiers, scholars) and cities possible.
   - **Planted misconception (`specialisation-without-surplus`):** assuming specialist craftworkers, scribes, officials and armies came first and then decided to start farming, or thinking surplus only meant "extra food to throw away" rather than the food supply that fed non-farmers (and paid state grain taxes). Includes `smaller:` lead-in on how a bronze-maker eats if they spend all day at a furnace instead of growing grain.
   - **Real vs made-up cases:** Real Yellow River loess farming (millet/wheat), Yangtze wet-rice farming, and Qin/Han irrigation works (such as the Dujiangyan irrigation system, checked against UNESCO World Heritage records); a **made-up village grain-ledger** for a fictional Qin village ("Reed Hollow, a made-up Qin village", labelled made up in the heading and prompt).
   - **Distractor ideas (real student errors):**
     - Reversing the causal chain (claiming cities and emperors had to exist before farmers could produce a food surplus).
     - Thinking "agricultural surplus" means every farmer became rich, rather than understanding that surplus grain fed specialists and was collected as tax/granary stores.
     - Treating fertile soil as automatic and trouble-free (ignoring flood and drought risks along the Yellow River that required dykes and canals).
   - **Shape and why:** Default worked-example shape with a `parsons` causal chain (`fertile river plains + water management → reliable crop yields → food surplus beyond farm families → non-farming specialists and state granaries`). Fits because `n2`'s hinge reason explicitly requires establishing this causal chain before `K10`'s social hierarchy.

3. **Waypoint 3 (`AC9HH7K09 n3`, integration): *Environment and settlement, trade, and cultural development* (`opportunities-and-constraints`)**
   - **Node checkpoint:** "Students can explain how the physical environment shaped the ancient society's settlement patterns, trade networks, and cultural development — including how geographical features created opportunities and constraints that defined what the society became."
   - **One insight:** The same geographical feature can create both an **opportunity** and a **constraint** (for example, the Yellow River's silt fed millions, but its floods forced constant dyke-building; western mountains and deserts protected the heartland, but constrained overland trade to narrow Silk Road corridors), and human choices mattered alongside geography.
   - **Planted misconception (`environment-only-helps-or-determines`):** treating geography either as purely helpful ("rivers only ever helped ancient China") or as total environmental determinism ("geography decided everything and human engineering or choices made no difference"). Includes `smaller:` lead-in on why the Yellow River was called both "the cradle of Chinese civilisation" and "China's Sorrow".
   - **Real vs made-up cases:** Real Qin/Han geographical opportunities and constraints (Yellow River floods vs silt, Hexi Corridor trade route, Grand Canal / Lingqu Canal connections) plus swap-in cards for Greece (mountains/sea), Egypt (Nile cataracts) and Rome (Tiber/Po); a **made-up historian's draft paragraph** (labelled `"In a made-up draft paragraph"`).
   - **Distractor ideas (real student errors):**
     - Listing only advantages of a landform and ignoring the constraint it imposed on trade, farming or travel.
     - Claiming natural barriers completely stopped all contact and trade with other societies.
     - Explaining a human engineering response (such as canals or terraced hills) as a natural landform rather than a human modification of the environment.
   - **Shape and why:** Default worked-example shape (`sort` opportunities vs constraints, `investigate` with `bug` + `smaller:`, `reasoning` check on paper weighing both environment and human response, `make` in student book). Fits because students integrate `n1` and `n2` into a balanced causal explanation without turning geography into determinism.

---

### Option B — Course `history/migration-7`, *Early human migration* (AC9HH7K01)

- **Standard & descriptor wording:** `AC9HH7K01` (*Early human migration*) — "theories and historical interpretations about early human evolution and migration, such as the theory that people moved out of Africa and the causes of migration to other parts of the world, including Australia" (`prior: [AC9HS6K01, AC9HS6K03]`).
- **First Nations element:** `AC9HH7K01`'s third elaboration mentions oral history alongside excavation, stratigraphy and radiocarbon dating, and `n1`/`n3` wider items mention First Nations oral traditions and migration to Australia. Following `roadmap/shared.md` › First Nations content: student lessons write **no** explanation of First Nations oral traditions or cultural accounts ourselves; teacher notes in all three lessons quote ACARA's elaborations for `AC9HH7K01` and ask teachers to use local, community-approved First Nations-led resources (and cross-reference the K02–K07 deep-time pointer page).

1. **Waypoint 1 (`AC9HH7K01 n1`): *Theories of human evolution* (`theories-of-human-origins`)**
   - **Node checkpoint:** "Students can identify competing theories about early human evolution, including the Out of Africa Theory and the Modern Theory of Evolution, and describe what each theory proposes about human origins."
   - **One insight:** In history and science, a **theory** is not a random guess — it is an evidence-based explanation that can be refined when new fossils, stone tools or DNA evidence are discovered (such as the predominant Out of Africa theory that anatomically modern *Homo sapiens* evolved in Africa and migrated outward).
   - **Planted misconception (`theory-means-mere-guess`):** treating the word "theory" in "Out of Africa Theory" as its casual everyday meaning ("just someone's hunch with no evidence, so any guess is equally valid") or thinking scientists never revise a theory when new dated sites are found. Includes `smaller:` lead-in separating everyday "I have a theory about where I left my keys" from an evidence-backed scientific/historical theory.
   - **Real vs made-up cases:** Settled scientific summaries of the Out of Africa model and multiregional/interbreeding refinements checked against Smithsonian Human Origins and NHGRI; a **made-up classroom debate transcript** between two fictional students ("In a made-up classroom discussion, Liam and Mei...").
   - **Distractor ideas (real student errors):**
     - Equating a historical/scientific "theory" with an untested guess or personal opinion.
     - Confusing the Out of Africa theory (anatomically modern humans evolving in Africa before dispersing) with the claim that no hominins of any kind ever lived outside Africa before *Homo sapiens*.
     - Thinking that if scientists refine a timeline when an older fossil is dated, the whole theory was "wrong and useless".
   - **Shape and why:** Default worked-example shape (`predict`, `sort` everyday guess vs evidence-based theory, `investigate` with `bug` + `smaller:`, `modify`, `practise`, `make` in student book). Fits because the conceptual hurdle is the meaning of "theory" and distinguishing the main models of human origins.

2. **Waypoint 2 (`AC9HH7K01 n2`, hinge): *Environmental causes of migration* (`environmental-triggers`)**
   - **Node checkpoint:** "Students can describe how environmental changes — including climate change and desertification — triggered the movement of early humans out of Africa and into other parts of the world."
   - **One insight:** Early human migration over tens of thousands of years was driven by **environmental changes** — shifting rainfall, desertification, ice-age sea-level changes that opened and closed land bridges and green corridors, and the movement of fresh water and game — not by modern-style holiday or one-day travel decisions.
   - **Planted misconception (`migration-as-modern-trip`):** imagining early human dispersal out of Africa as a single group packing up to walk to a known distant continent on a map, rather than gradual generational movement pushed and pulled by climate shifts, drying lakes/expanding deserts, and changing coastlines over thousands of years. Includes `smaller:` lead-in on what happens to a foraging band's range when rainfall shifts over several generations.
   - **Real vs made-up cases:** Real deep-time environmental mechanisms (Sahara/Arabian green corridors vs desertification, glacial sea-level drops exposing Sunda and narrowing sea crossings to Sahul) checked against Smithsonian Human Origins and NMA; a **made-up schematic valley-climate scenario** ("Three Valleys, a made-up schematic model of shifting rainfall over 500 years") labelled made up in the text and prompt.
   - **Distractor ideas (real student errors):**
     - Treating deep-time migration as a planned single-lifetime expedition toward a named destination on a modern map.
     - Thinking ice ages meant the entire planet was covered in ice sheets, rather than understanding that water locked in northern ice caps lowered global sea levels and exposed coastal plains/land bridges.
     - Confusing push factors (expanding desert, drying waterholes) with pull factors (fresh coastal resources, green corridors).
   - **Shape and why:** Default worked-example shape (`predict`, `match` environmental change → effect on movement, `investigate` with `bug` + `smaller:`, `sort` push/pull/barrier factors, `practise`, `make` in student book). Fits because `n2`'s hinge reason requires connecting environmental change to migration as a causal mechanism.

3. **Waypoint 3 (`AC9HH7K01 n3`, hinge): *Evidence types and interpretations* (`evidence-and-interpretations`)**
   - **Node checkpoint:** "Students can identify different types of evidence used by historians and archaeologists — including excavation and stratigraphy, oral history, and radiocarbon dating — and describe how each type informs interpretations about early human migration."
   - **One insight:** Because no written documents exist from deep time, historians and scientists build interpretations by combining **converging lines of evidence** (stratigraphy, radiometric dating such as radiocarbon and luminescence, fossil/tool finds, ancient DNA, and oral traditions), where each evidence type answers a different part of the puzzle and leaves room for revision as new evidence appears.
   - **Planted misconception (`single-find-proves-all`):** treating one artefact or one date in isolation as complete, final "100% proof" of an entire migration story (conflating a piece of evidence with final proof), or dismissing an interpretation because it uses multiple partial clues. Includes `smaller:` lead-in on what a stone tool found on the surface without layer or dating evidence can and cannot tell us by itself.
   - **Real vs made-up cases:** Real evidence methods (stratigraphy, radiocarbon dating and its ~50,000-year limit vs luminescence dating for older layers, ancient DNA) checked against `history/evidence-7` sources (Smithsonian, NHGRI); a **made-up cave-site report** ("Shelter 4 at Limestone Ridge, a made-up excavation summary", explicitly labelled made up).
   - **Distractor ideas (real student errors):**
     - Using radiocarbon dating on stone tools directly (radiocarbon dates organic material like charcoal, bone or shell in the same layer, not quartz or flint rock itself) or assuming radiocarbon works on million-year-old rocks.
     - Thinking a single stone tool proves the exact language, route and beliefs of the people who made it.
     - Claiming that because an interpretation may be updated when new layers are excavated, archaeological evidence is "just a guess".
   - **Shape and why:** Default worked-example shape (`predict`, `match` evidence type → what it reveals, `investigate` with `bug` + `smaller:`, `modify`, `practise`, `make` in student book). Fits because `n3` is a hinge that distinguishes evidence from final proof and shows how multiple lines of evidence work together.
