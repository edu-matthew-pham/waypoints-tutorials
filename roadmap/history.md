# Roadmap: History

`content/history/` (subject, course `history/sources-7` and a Before Year 7 course built 30 Oct 2026; not yet tried with a class). Node content: waypoints-kit `data/history/`, copied in `data/curriculum/history.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

Shared rules (First Nations T1, made-up cases T2, writing T5, contestable or simplified ideas T8, pace-agnostic T9, lesson shape T11, and the rest) are in `roadmap/rules.md`, with their reasons; they are not copied here (1 Nov 2026). Subject rules:

- One course per standard, folder `history/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up cases and writing as in rules T2 and T5; this shape is the default, not a rule (T11)).
- Contestable or simplified ideas (rules T8), in this subject: Interpretations and causes are "historians argue...", with the evidence, not facts.
- First Nations content: rules T1 (firm). Quote the relevant ACARA elaboration in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`); items about First Nations values or connection to Country are pointer pages.
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

## Plan (30 Oct 2026; `land-7` built 1 Nov, see below; `migration-7` still waiting): next History courses (`history/land-7` AC9HH7K09 and `history/migration-7` AC9HH7K01)

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

## Review fixes (1 Nov 2026)

Editorial and accuracy pass on all three built courses after review. Validated (`npm run validate`, no History errors); not built or browser-checked in this pass, not committed.

- **Purposes stated as inference.** No Qin text says why the clay army or the mountain inscriptions were made. Student text in `sources-7/context-and-purpose`, `what-can-it-tell-us` (and the matching class plans) and `usefulness-7/fact-opinion-and-accuracy` now says "probably" or "historians think" where purposes appear; a short intro paragraph in context-and-purpose says why. Teacher notes say to accept other reasoned purposes.
- **Origin vs findspot, and the date.** `origin-and-content`: Source A is now "made during the First Emperor's reign" (production ran for years; some bronze weapons from the pits carry dates in the 240s–230s BCE, per Li, Bevan et al. in *Antiquity*), not "around 210 BCE". Sort items now class *where it was made* as origin; a new note separates findspot (pits near the tomb, the Shuihudi tomb) from origin; Source B's worked text and sort item match ("written before 217 BCE, in Qin territory"). Same date fix in `usefulness-7/weighing-a-source`.
- **Primary/secondary flip.** The "question decides" paragraph now uses the 2019 museum label (secondary for the Qin, primary for how museums explained the warriors in 2019) instead of a diary that never flips.
- **Accurate vs useful.** Worked table no longer says "high accuracy on what the court message was". Typical step rewritten: names on weapons and craftsmen's stamps on figures, as "historians report", with "historians think" for why; the unverifiable "pottery tallies" and "replaceable workforce" claims removed. Labourers' named grave tiles are mentioned in teacher notes only, because reports differ on detail.
- **Fact/opinion.** Source B question now describes a rule (fine for a short grain store), matching its statutes card. Hook's Roman writer labelled made up; "glorious and without equal" no longer in quotation marks.
- **Ordering tasks removed.** Parsons needs one exact order, and the order of the four questions (and of the accuracy checks) is a choice. `what-can-it-tell-us` and `weighing-a-source` Try steps are now `match` checks; both `chain.txt` files deleted. The plan's "parsons-style sort" for S03 n3 and the S04 n3 parsons are superseded by this.
- **Made up labelled.** Weighing-a-source Typical (walls inscription, workers' cemetery) and Source D (museum label) are labelled made up.
- **evidence-7.** All four lessons rewritten in plain Year 7 wording (template lines such as "Surface the initial rule…" and "Look at what the evidence actually records" replaced with lesson-specific text and feedback); Vary text now comes before its question (coin, moved charcoal, disputed word, roles); the student link to `/teach/` pointer pages removed from reading-the-layers (still in teacher notes).
- `learning:` added to every sources-7 and evidence-7 `teacher.yml`. Make-step ticks now say "gave feedback", not "agreed". Distractors rewritten across sources-7 and usefulness-7 as real slips of similar length (old means primary, content as origin, setting as context, biased means useless, primary means fact), each with feedback naming the slip.

Not verified, left as is: the Rosetta Stone wording (reworded to "versions of the same decree", British Museum not rechecked this pass); the Sima Qian "used older records" claim (now said as "historians think"). Not changed: the Before Year 7 lesson, class plans beyond the purpose wording, and the K08 SVG.

## Boards and clips (proposed, 1 Nov 2026; not decided)
- **Source annotation:** reuse the English `cohesion` board's parts mode on a source card, with students marking origin, purpose and claims. No new widget needed; try it in `sources-7` or `usefulness-7` first.
- **Timeline or layers board:** dating and stratigraphy in `evidence-7` (deeper is usually older; a coin dates a layer). A short clip of layers building up suits Explain it to me.
- Per-course choice, not a rule (`roadmap/shared.md` › Decided: humanities).

## Boards in built lessons (1 Nov 2026, Matthew agreed; for the History chat)
- **Ready to add (reuse, no new code):**
  - `usefulness-7/fact-opinion-and-accuracy`: mark each phrase of the Qin inscription as fact or opinion on the English `cohesion` board's chain mode, coloured by kind (as English `persuade` does). Planted answers only.
  - `sources-7/origin-and-content` and `sources-7/context-and-purpose`: click the parts of a source card that tell you origin, purpose or content on `cohesion` parts mode.
- **Needs a new light board:** `evidence-7/reading-the-layers`, a dig through layers (deeper is usually older; a dated coin dates its layer). A short clip suits Explain it to me.
- Add each as one step; keep the existing checks. Plan, then Matthew's go.

## Plan: the two ready-to-add boards (1 Nov 2026; awaiting Matthew's "go")

Both reuse the English `cohesion` board as it is: no widget, tool or shared-file change. Each is **one new step**; every existing check stays. The three setups below were tried against the widget's core (`cohesionCore`, as `check-cohesion` runs it): each builds, its check does not hold at the start, and it passes when solved. Board checks only look at planted answers on text we wrote, so nothing marks a student's own words.

### 1. `usefulness-7/fact-opinion-and-accuracy`: fact or opinion inside one source

- **Where:** a new step right after *Try: sort facts and opinions*, before the Worked example. Title *Try: one source, two kinds of statement*; `stage: run`. The sort uses single statements from different sources; this step shows both kinds in one source, which is what the Predict says ("a single source often contains both") and what Nib gets wrong two steps later.
- **Board:** `mode: chain`, `colours: 2`, Source C in our own plain words (the card text says so: "our own summary, not a translation", as the Predict already does). Each factual claim is marked as a whole clause, so no stray words sit inside a claim; each opinion is the judging word, as English *Fact or feeling?* does.
  ```
  p: [[He defeated six rival kingdoms#a]] and [[joined them into one empire#a]]. [[He set one system of weights and measures#a]]. His rule is [[glorious#b]] and [[without equal#b]].
  ```
- **Check:** "Colour the claims that can be checked one colour and the opinions another." `when: "chains_ok = 2 and n_stray = 0"`. Explain: the three claims can be checked against other evidence (excavated weights, other records); glorious and without equal are praise. Checkable does not mean true: that is the accuracy question, next.
- **Left out on purpose:** "everyone is happy and at peace" (the worked example calls it an opinion, but a sharp student could fairly call it a false factual claim; a board item needs one defensible answer, so it stays in the worked example and the purpose question, where it is discussed, not marked).
- **Colours are unlabelled** (chain mode has no legend), so the check text names the two kinds, as English *Words that push a feeling* does.

### 2. `sources-7/origin-and-content`: find origin and content on the card

- **Where:** a new step right after the Try step's findspot note (*where it was found is not always where it was made*), before the Worked example. Title *Try: label the card*; `stage: run`. The findspot note from the 1 Nov review fixes has no check yet; this step gives it one, and moves from sorting facts we pulled out to finding them on the card itself.
- **Board:** `mode: parts`, `layout: blocks`, Source A's card split into sentences, three labels:
  ```
  roles: origin content found
  role origin: Origin (who, when, where made)
  role content: Content (what it shows)
  role found: Where it was found
  s content: It is dressed as a soldier, with armour and a belt.
  s origin: It was made by craftsmen in Qin workshops.
  s found: It was found in pits near the First Emperor's tomb, in what is now Shaanxi province, China.
  s content: Each figure has a different face.
  s origin: It was made during the First Emperor's reign, before he died in 210 BCE.
  ```
  The sentences are mixed so the labels don't come in runs. The card's size-and-clay sentence is left off the board (it would be an unchecked `s any:` line, and "what do I call this?" is a distraction here).
- **Check:** "Label each sentence: origin, content, or where it was found." `when: "n_right = 5"`. Explain names the findspot: the pits are where the figures were found, not where they were made.

### 3. `sources-7/context-and-purpose`: find context on the card, and notice purpose is not there

- **Where:** a new step after the Worked example (so it does not answer the worked example's context question), before Vary. Title *Try: what the card tells you*, its own step (`stage: run`) placed after the Worked example.
- **Board:** `mode: parts`, `layout: blocks`, Source C's card with its context, four labels offered:
  ```
  roles: origin content context purpose
  s origin: It was set up on a mountain by order of the First Emperor, around 219 BCE.
  s content: It says the emperor brought peace and order.
  s content: It says everyone now lives under one set of laws, weights and measures.
  s context: A few years earlier, the Qin had defeated six rival kingdoms and joined them into one empire.
  s context: Many people in the new empire had been enemies of the Qin.
  ```
- **Why Purpose is a label with no sentence:** after the 1 Nov fixes, purposes are inferences ("probably", "historians think"); no sentence on the card states one. A student who labels "It says the emperor brought peace" as Purpose makes the lesson's planted slip (`purpose-is-content`) and the board says no. Check: "Label each sentence: origin, content, context or purpose." `when: "n_right = 5 and n_wrong = 0"`. Explain: no sentence says why it was made; the card tells you what it says and what was going on, and purpose is worked out from those. **Alternative if Matthew prefers no trap label:** offer three labels only and ask the purpose as a follow-up question.

### Goes with it

- `text.yml` in each lesson folder (regions `run`); one line in each `teacher.yml` (what the board is for; chain colours are unlabelled; the board only checks planted answers). Class plans unchanged: the deck gets the live board slide automatically (`boardUrl` in `teach.mjs` covers any `playground: board` step).
- Tests: `npm run validate`, `npm run check-cohesion history`, `npm run build` (`WP_NO_MAKECODE=1`), each new step answered in a headless browser at 1280 and 390 px, `check-decks` for the three lessons.
- Publish route: lesson folders only, no widget change, so **Publish changed lessons** (no clips in History, nothing records).
- Follow-on in `roadmap/shared.md` › Next for the Humanities pilot page and deck: once built, the fact-or-opinion board is the first humanities board, so the pilot page and slide 6 can link it. Not in this batch unless Matthew says so.
- Not in this batch: `evidence-7/reading-the-layers` (needs a new light board; separate plan).

## Re-check (1 Nov 2026): `land-7` and `migration-7` plan against the 1 Nov rules and fixes

The plan above (written 30 Oct, still waiting for "go") was checked against `rules-proposal.md` (T1 First Nations, T2 made-up names, T8 contestable or simplified), the economics naming convention (1 Nov), `shared.md` › Decided: humanities (boards per course, 1 Nov), this file's Review fixes (1 Nov), and the K09 and K01 node data. The changes below supersede the plan where they differ; the rest stands.

### Both courses

1. **Label made-up material once per lesson, not in every stem** (1 Nov convention: the place or document carries the label). The plan labels "made-up" in headings, prompts and Nib's intro; drop the repeats.
2. **Made-up places in ancient settings:** don't coin English-sounding names for Qin villages ("Reed Hollow"). Use a plain description ("a made-up Qin farming village") or a neutral label (Village A). Modern made-up settings (a classroom, a dig report) keep plain names; label once.
3. **Reasons and purposes as inference** (Review fixes): where a lesson says why people did something (settled a valley, built a canal, left Africa), say "historians think" or "probably" where no source says so.
4. **No ordering tasks for chains of causes** (Review fixes removed parsons where order is a choice; Economics swapped its chain for a match on 1 Nov). Any causal chain is a `match` or `sort`, introduced as one way historians explain it.
5. **Distractors are real slips of similar length** with feedback naming the slip; not disagreements with a model (T8).
6. **Boards and clips: a decision per course** (1 Nov). Proposed: `land-7` no board by default, with one schematic map of the Qin and Han heartland as an annotated still (SVG in the lesson, labelled schematic, like `evidence-7/layers.svg`); optional reuse of the `cohesion` chain board in n3 to colour opportunities and constraints in the made-up draft paragraph (planted answers only). `migration-7` no board; a sea-level and coastline board is a later idea (new code), parked.
7. **Teacher layer:** `learning:` in every `teacher.yml`, Make ticks say "gave feedback", and every factual claim is listed with its source in teacher notes (name the source, not "museum/atlas references").
8. **Topic cards are not designed yet** (rule: K09–K13 lessons carry swap-in cards for Egypt, Greece, Rome and India). Proposed for this course: cards as short blocks in a course `reference.md` (a few key facts, a short timeline, two or three sources each), linked from the typical step. India is missing from the plan's typical and wider steps; add it (ACARA's K09 elaborations name the Himalayas and rivers for India, but the Hinduism, Buddhism and Jainism environment elaboration is beliefs, which is K11, so leave it out here).

### `land-7` (AC9HH7K09)

9. **Grand Canal is out:** it is Sui dynasty (about 600 CE), not Qin or Han. Use the Lingqu Canal (Qin, 214 BCE), the Zhengguo Canal (state of Qin, 246 BCE) and Dujiangyan (built by the state of Qin before unification, about 256 BCE; UNESCO lists it with Mount Qingcheng). Check each date before building.
10. **Loess wording:** loess is wind-laid soil on the plateau; the river carries its silt. The plan's "fertile flood silt (loess)" runs the two together.
11. **Millet first, wheat later** in the north: say millet (with wheat spreading later), not "millet/wheat" as if together from the start. Check before building.
12. **"Cradle of Chinese civilisation" is a traditional label, not settled** (archaeology finds several early centres, including on the Yangtze). If n3's `smaller:` uses it, present it as a nickname some people use, beside "China's Sorrow" (T8).
13. **n2's surplus chain is a model** (T8): "historians often explain it this way". The planted slip stays the reversal for China (farming came thousands of years before the first states, which is chronology students can check), plus "surplus means farmers got rich". Drop the version that says specialists "decided to start farming", which reads as a straw man.
14. **Himalayas:** ACARA's elaboration uses them for contact (n3), so move them from n1's barrier list to n3; n1 uses the Tibetan Plateau, Gobi and the seas.

### `migration-7` (AC9HH7K01)

15. **Arrival in Australia stays out of student text** (T1, firm; K02 is the pointer page). The plan's n2 uses sea crossings to Sahul as a worked mechanism; that is the arrival story. Use Africa to Arabia and Asia corridors in student text; Australia gets one line pointing to the deep-time pointer page, and Sunda and Sahul go in teacher notes. No arrival date in student text (it is contested and it is K02's).
16. **Oral history in n3:** the type is named and explained generally; no First Nations oral tradition is used as a student example (T1). If an example is needed, use a non-First Nations, Year 7-relevant one or none.
17. **n2's cause is a leading explanation, not a settled one** (T8): ACARA's elaboration says climate change and desertification "triggered" the movement. Keep the descriptor's terms, and say scientists think changing climate opened and closed routes; name that other factors (population, food sources along coasts) are also argued. The hinge check stays on the mechanism (rain shifts over generations → ranges move), not on climate being the only cause.
18. **n3 overlaps `evidence-7`** (stratigraphy, dating, DNA are already taught there). n3 should focus on what is new for K01: several kinds of evidence together build an interpretation, which can change; mention `evidence-7` as a link (lessons don't assume another course), and keep method detail short.
19. **"Modern Theory of Evolution"** is ACARA's term; keep it, explain it plainly once, and add a teacher note that some families hold religious views on human origins, so the lesson teaches what the evidence-based theory says without asking students to state a belief.

### Questions for Matthew

- Build both courses, or `land-7` first (the lens order in Next) and `migration-7` after?
- Topic cards in a course `reference.md` (item 8): OK as the format?

## Built (1 Nov 2026, Matthew said go): the three cohesion-board steps

- As planned above, with one change: each board is a **Practise** step, not a Try step. A second Run step after a Predict shows the "No prediction locked in" compare box as soon as the board loads (`lesson-view.mjs` gives every Run step after a Predict one), which is noise here; Practise avoids it without a shared change. Titles: *Practise: one source, two kinds of statement*, *Practise: label the card*, *Practise: what the card tells you*; positions as planned.
- `text.yml` (region `run`) in each lesson folder; one `running:` line in each `teacher.yml`. Purpose label kept as the planted trap in context-and-purpose.
- Tested: `validate`, `check-cohesion history` (3 boards start, fail at the start, pass solved), whole build, each board answered in Chromium at 1280 and 390 px (a wrong label or stray colour says "Keep going", the right answers tick, no page errors, no sideways scroll), `check-decks` for both courses (the board slide embeds; all slides fit). Not yet tried with a class.
- Publish: lesson folders only, so Publish changed lessons (nothing to record).

## Built (1 Nov 2026, Matthew said go): `history/land-7`, *Shaped by the land* (AC9HH7K09; Preview, not yet tried with a class)

Built from the 30 Oct plan with every change in the 1 Nov re-check (items 1–14) applied. Matthew agreed the order: boards first, then `land-7`, then `migration-7` (not started).

- Course `content/history/land-7/` (tagline *Why there, and what did the land make possible?*, Usually Year 7, `after: [evidence-7]`, `recap: true`), three lessons in node order, one unit each:
  1. `landforms-and-waterways` (n1, hinge): what each feature gave people or how it got in their way; Wei River valley as the Qin heartland; north/south climate and crops. Nib's slip `geography-is-backdrop` with `smaller:`. Typical: the Nile; wider: Greek mountains and city-states.
  2. `surplus-and-specialisation` (n2, hinge): the surplus chain introduced as "one way historians explain it"; a made-up village grain record (number check: 200 sacks); the chain as a `match`, not an ordering task; Dujiangyan (state of Qin, about 256 BCE). Nib's slip `states-before-farming` (emperors before farming; ruled out by chronology: millet about 7,800 years ago, Qin 221 BCE) with `smaller:`. Typical: Tiber and Po (ACARA's elaboration); wider: what happens when harvests fail.
  3. `opportunities-and-constraints` (n3, integration): one feature on both sides; natural feature vs human change (Lingqu Canal, 214 BCE); barriers shape contact rather than stop it (Hexi Corridor, Zhang Qian, Silk Roads). Nib's slip `geography-decides-everything` with `smaller:`. Typical: Greece's sea and mountains; wider: the Himalayas (ACARA's elaboration).
- **Board decision:** none. Lesson 1 has a schematic map as an annotated still (`heartland.svg`, embedded in the lesson as `evidence-7` does; labelled schematic, not to scale). A cohesion-board step for n3 stays a later option (noted in its teacher notes). No clips.
- **Topic cards** in the course `reference.md`: China, Egypt, Greece, Rome and India, each with land, made possible, made hard, what people did, a short timeline and sources to look for. Typical and wider steps point to them. Short summaries "to check against your class text"; the Indus card avoids the disputed "granary" label.
- Made-up material labelled once per lesson (the village and its record; Nib's notes). No coined names for ancient places.
- Facts checked 1 Nov (sources in each `teacher.yml`): Dujiangyan (UNESCO 1001: about 256 BCE, flood control and irrigation of the Chengdu Plain, still in use); Lingqu (UNESCO tentative list 5814: 214 BCE, Xiang and Li rivers, grain transport, used in the conquest of the south); Silk Roads Chang'an–Tianshan corridor (UNESCO 1442: from the 2nd century BCE, Zhang Qian); Yellow River loess silt, floods, "China's Sorrow" (Britannica); millet in the middle Yellow River about 7,800 years ago (Zhang et al. 2012, PLoS ONE). Grand Canal left out (Sui). Reference-card dates are standard textbook dates, not each rechecked: check against the class text.
- First Nations: K09's elaborations have none; teacher notes say so and point to the deep-time pointer page. Nothing written by us.
- `content/history/index.md`: new pathway **The ancient world** (this course built; K10–K13 and K01 as Coming later); How we know's about text updated. `content/history-teachers.md` lists the course. Three single-line entries in `misconceptions.json`.
- Tested: `validate` (no History warnings), `check-nodes`, `effort`, build, all 34 checks per page answered with their stored answers in Chromium at 1280 and 390 px (every task pill, smaller step, typical and wider step; 38 wrong answers tried, feedback shown), course, Reference, subject, pathway, teacher and guide pages load with no errors or sideways scroll, `check-decks` for the course.
- Map redrawn 1 Nov for phones: a narrower sketch (420 × 470) with bigger labels, readable at 390 px.
- **Publish:** needs a whole-site publish (subject page pathway, History teacher page). Not run: Matthew's call (W1).

## Built (1 Nov 2026, Matthew said go): `history/migration-7`, *Early human migration* (AC9HH7K01; Preview, not yet tried with a class)

Built from the 30 Oct plan with the 1 Nov re-check applied (items 1–7 and 15–19).

- Course `content/history/migration-7/` (tagline *How do we know where the first people came from?*, Usually Year 7, `recap: true`, no `after:`: K01's prior is Year 6, and lessons only mention How we know), in The ancient world pathway. Three lessons in node order:
  1. `theories-of-human-origins` (n1): theory as an evidence-based explanation; the theory of evolution (ACARA's "Modern Theory of Evolution", explained plainly), Out of Africa, the older multiregional idea, interbreeding with Neanderthals; Misliya jawbone (177,000–194,000 years) as a theory refined, not thrown out; Homo erectus as an earlier traveller. Nib's slip `theory-means-guess` with `smaller:`. Teacher note on religious views: teach what the theories say, never ask for beliefs.
  2. `environmental-triggers` (n2, hinge): rainfall shifts, desertification, sea level about 125 m lower at the Last Glacial Maximum; movement over many generations; a made-up valley model (labelled once); Al Wusta (Arabia, before 85,000 years ago, humid phase). Climate framed as the leading explanation, other causes named (T8). Nib's slip `migration-as-planned-trip` with `smaller:`. Push, pull and barrier sort.
  3. `evidence-and-interpretations` (n3, hinge): evidence table (layers, radiocarbon to about 50,000 years and only once-living material, luminescence, fossils and tools, DNA, oral history named generally); a made-up rock-shelter dig with two dated layers (two times of use, not continuous use). Nib's slip `single-find-proves-all` with `smaller:`. Mentions How we know without assuming it.
- First Nations (T1, firm): no arrival story, date or oral history in student text. Sahul and Sunda are in teacher notes only; lesson 2 ends with one line that the class will use resources made with First Nations communities for arrival on the continent. Every `teacher.yml` points to the K02 pointer page and asks for a First Nations educator's review before use beyond CGGS.
- No board, no clips. A sea-level and coastline board stays a parked idea.
- `content/history/index.md` (migration-7 now built in The ancient world), `content/history-teachers.md`, three single-line entries in `misconceptions.json`.
- Facts checked 1 Nov (sources in each `teacher.yml`): Smithsonian Human Origins (Homo sapiens about 300,000 years, Africa; dating methods); Tel Aviv University (Misliya, 2018); Groucutt et al. 2018 (Al Wusta); Britannica (Last Glacial Maximum, about 125 m).
- Tested: `validate`, `check-nodes`, `effort`, build, all checks answered with stored answers in Chromium at 1280 and 390 px (66 answered, 36 wrong answers tried, feedback shown), course, recap, subject, pathway, teacher and guide pages load with no errors or sideways scroll, `check-decks` for the course.
- **Publish:** whole-site (subject and teacher pages). Ask Matthew (W1).

## Plan (1 Nov 2026; built the same day, see below): a dig board for `evidence-7/reading-the-layers`

The one History board from "Boards in built lessons" that needs new code. The science `layers` widget is the Earth's interior, so it cannot be adapted. Light on purpose, in the pattern of the other humanities boards (`tradeoff`, `catchment`, `house`): buttons and clicks, no dragging; a "made-up site" label; `wpt-` class names; never colour alone; keyboard as well as mouse; values set only after the student acts, so no check holds at the start.

**Why a board here:** reading layers is spatial, and the lesson's turning point (a later pit cuts down through older layers, so a deep find is not old) is easier to see by doing it than from the still picture. The still (`layers.svg`) and every existing check stay.

**Widget `dig`** (new `playground-board/widgets/dig.js`, about 200 lines; one `<script>` line in `playground-board/index.html`; an AUTHORING entry; a line in `roadmap/shared.md`). A cross-section of a made-up site, layers listed top first, each with its finds as small labelled cards (word plus a simple icon).

```
widget: dig
mode: order            # order | pit | date
site: A made-up dig    # label shown on the board
layer C: new floor, cooking pots       # top first
layer B: charcoal, burnt roof wood
layer A: earlier floor, pottery
dig: on                # layers start covered; "Dig down one layer" uncovers the top one, then the next
pit: C-A, coin         # pit mode: a pit from the top of C down into A, with a find in its fill
find: B, coin, 220 BCE # date mode: a find with a year, in layer B
```

Three modes, one idea each:

1. **`order`: which formed first?** The student digs down (each click uncovers the next layer, so the youngest is reached first), then numbers the layers from the one that formed first. Values: `n_dug`, `n_set`, `in_order` (1 when the order is right), `n_wrong`. Check: `when: "in_order = 1"`.
2. **`pit`: what is out of place?** The pit is drawn as a cut through the layers, its fill a different texture. The student clicks a find and chooses "older than the layer around it", "about the same" or "younger than the layer around it". The planted answer: the coin in the pit fill is younger than the deep layer it sits in. Values: `found` (1 when the pit find is marked younger), `n_stray` (other finds marked out of place). Check: `when: "found = 1 and n_stray = 0"`.
3. **`date`: what does a dated find tell you?** One find has a year (a coin made in 220 BCE in layer B). For each layer the student chooses "formed in that year or later" or "can't tell from the coin". Right answers: the coin's layer and every layer above it formed that year or later; layers below cannot be dated by the coin (a coin can be old when it is dropped, so it gives the earliest possible date for its layer, not the date of layers under it). Values: `n_right`, `n_wrong`. Check: `when: "n_right = 3 and n_wrong = 0"`. This is the easy-to-get-wrong part, so the explain says it plainly.

**Where (one step or task each; existing checks kept):**
- `order`: a new step right after *Try: order or date?*, titled *Practise: dig it yourself*, `stage: practise` (a second Run step after a Predict shows the compare box as soon as a board loads, as found with the source boards). Same made-up site as the still (A, B, C), so the board and the picture agree.
- `pit`: the Vary step (*a pit cuts through*) gets the board as its first task; the existing question stays as the second task. Same site with the pit added.
- `date`: a new `tier: typical` step, *Typical: a coin in the layers*, after the existing Typical (weapons). Typical, not minimum: the node's minimum is order and depth, while using a dated find to fix a date is the typical width ("establish chronology"). A new misconception id, `find-dates-layers-below` (a dated find is taken to date the layers under it too), planted as the obvious wrong choice and named in the explain.

**Clip (Explain it to me): optional, decide with the build.** Matthew's 1 Nov note suggested one: layers building up one at a time, then a pit cut through them. It would be History's first clip (needs a port range and a `say:` script in the default Heart voice, captions first). The lesson works without it.

**Teacher layer:** a `running:` line for each new step, one `stuck:` entry for the date step ("A student says the layer under the coin is from 220 BCE too" → "Could the coin have been old when it was dropped?"), `timing:` adds about 5 minutes, class plan unchanged (decks get the live board slide automatically).

**Tests when built:** a `check-dig` script (each mode builds, its check fails at the start and passes when solved, as `check-cohesion` does), `validate`, the board answered in Chromium at 1280 and 390 px (keyboard too), `check-decks` for the course.

**Publish:** whole-site (new widget). Ask Matthew.

**Decision waiting:** build now, or after the humanities pilot's board question (pilot page question 4: "where would your students learn more by doing something on screen?") has some answers. If pilot teachers point elsewhere, that board comes first and this one waits.

## Built (1 Nov 2026, Matthew said go, with the Explain clip): the dig board in `evidence-7/reading-the-layers`

Built from the plan above. Matthew decided not to wait for pilot data (easy to adapt later) and to include the Explain clip so pilot teachers can see a History clip.

- **Widget `dig`** (`playground-board/widgets/dig.js`): modes `order`, `pit`, `date` and `build` as planned. One change: the pit value is `n_found`, not `found` (board checks read single letters or names with an underscore). Earth-tone layers with dark text in both colour schemes; every layer and find named in words; keyboard focus kept when the board redraws.
- **Lesson** (`dig.yml`, regions `dig`, `pit`, `date`, `explain`):
  - *Practise: dig it yourself* after the Try sort (order mode, `dig: on`, the same A/B/C site as the picture): `when: "in_order = 1"`.
  - Vary is now a board task (pit mode: mark the coin in the pit younger, `when: "n_found = 1 and n_stray = 0"`) followed by the existing question.
  - *Typical: a coin in the layers* after the weapons step (date mode, a second made-up dig, coin made in 220 BCE in layer B): `when: "n_right = 3 and n_wrong = 0"`. New misconception `find-dates-layers-below`.
  - **Explain clip** (build mode): layers A, B, C laid down in turn, then a pit dug down into A; seven short captions, voice Heart (`voice:` in the frontmatter), clip port 8720. About 29 seconds with the local test voice; the real voice is usually a little quicker. History's first clip.
- Teacher notes: what the board checks, that its model is undisturbed layers unless a pit is shown, two `running:` lines, one `stuck:` entry for the coin step.
- Tested: `validate`, `check-lesson-boards history` (6 boards, all checks read reported values and do not hold at the start), `node experiments/dig-smoke.mjs` (28 checks), every check on the lesson page answered in Chromium at 1280 and 390 px (26 answered, 16 wrong answers tried; board checks do not tick on a wrong answer), the clip recorded locally with the test voice and checked frame by frame (then removed), dark mode, `check-decks` for How we know.
- **Publish:** whole-site (new widget, History's first clip). Ask Matthew.

## Plan (1 Nov 2026; awaiting Matthew's "go"): the deep-time pointer and `history/people-7` (AC9HH7K10)

Matthew said continue after the state of play (Year 7 History: 5 of about 12 courses built). Next two items, as suggested: the deep-time pointer the teacher page already promises, then the next lens.

### 1. Deep time Australia (AC9HH7K02 to K07): a pointer, not a course

**Rule:** T1 (firm). We write no student explanation of First Nations history or culture; deep time stays with First Nations-led resources until someone has been consulted. So this is a signpost, not lessons.

**How (reuses an existing mechanism, no code):** Civics already shows a teacher-led idea as a "Taught in class" row (`civics/diversity-7`: a `planned:` item with `label:` and a `teach:` link that appears in the teacher guide only). Here:

- A small course `content/history/deep-time-7/index.md`, *Deep time Australia* (tagline *Taught in class, with First Nations-led resources*), Usually Year 7, no lessons, one unit with six `planned:` rows, one per standard (K02 Arrival on the Australian continent, K03 Continuity over deep time, K04 Environmental response over time, K05 Early technological achievements, K06 Social organisation and cultural practice, K07 Cultural preservation and heritage), each `label: "Taught in class"` and `teach:` its curriculum pointer page (`teach/curriculum/history/AC9HH7K0n/`, which already shows ACARA's elaborations).
- The course summary says, in plain words: these standards are taught by your teacher with local, community-approved material and First Nations-led resources; this site does not explain them itself. No resource is described in student text.
- A short `teacher.md` (or the course's teacher guide intro): start from ACARA's elaborations on each pointer page; ask the school's First Nations contact or RAP group first; national starting points to check with them (named only after checking each at build time, for example AIATSIS and Reconciliation Australia's Narragunnawali for schools); follow local protocols (deceased persons, sacred sites, ancestral remains); a First Nations educator reviews before use beyond CGGS.
- Placed in **The ancient world** pathway between Early human migration and Shaped by the land (K01 → K02–K07 → K08), and the History teacher page's "will be a single page" line becomes a link.
- **Check at build:** that a course with no lessons and only labelled rows builds and shows on the pathway (Civics has only done it inside a course with lessons). If not, the fallback is a plain teacher page plus a pathway card, with no shared code changed.

### 2. Course `history/people-7`, *People and power* (AC9HH7K10)

**Descriptor:** "the organisation and roles of key groups in ancient society such as the nobility, bureaucracy, women and slaves, and how they influenced and changed society". Prior: AC9HH7K09 (`land-7`'s surplus lesson is the bridge). Three waypoints: n1 hinge, n2, n3. Worked example Qin and Han China; swap-in cards in the course `reference.md` (Egypt, Athens and Sparta, Rome, India), extending the `land-7` card format.

**Sensitive ground, decided in the plan:** slavery (state and private slaves, convict labour) is described factually, without graphic detail. India's card describes the four varnas as ancient texts set them out, labelled as a text's ideal order that historians compare with evidence of how people actually lived, with a teacher note that caste is a live issue today and the card makes no present-day claims (T8). The "four occupations" ranking in China gets the same treatment: a Confucian ideal order, not a description of who was richest.

**n1 `hierarchy-and-power` (hinge): Who ran the society, and how?**
- **Checkpoint (node):** describe the social hierarchy, the roles of the nobility and bureaucracy, and explain how these groups exercised power and shaped the society's organisation.
- **One insight:** power ran through jobs: officials counted people and land, collected grain tax, ran courts and organised labour and armies. Knowing who was at the top is not enough; how they used that power is the point. (The Qin replaced most hereditary lords with appointed officials running commanderies and counties; the Han kept the officials and, for a time, brought back kings in some regions.)
- **Planted slip (`power-without-how`):** Nib explains the hierarchy only as a ladder of who was richest or most important, with no mechanism ("the emperor was at the top, so he just made everything happen"). `smaller:` lead-in: "The emperor wants grain from a village 1,000 km away. Who actually collects it?"
- **Cases:** real: commanderies and counties, the Qin bamboo-slip rules for officials (links `sources-7`), Han officials chosen partly for Confucian learning. Made-up: one county official's day (labelled once).
- **Distractors (real slips):** hierarchy means wealth only; the emperor did everything himself; nobles and officials are the same thing (Qin officials were appointed and could be dismissed).
- **Shape:** default worked-example shape. Sort roles by group; match mechanism → what it controlled; bug + `smaller:`; Make in the book. No board.

**n2 `womens-roles` : What did women do, and how do we know?**
- **Checkpoint:** describe women's roles, identify sources of evidence about women's lives, and explain how women influenced the society despite constraints.
- **One insight:** most surviving writing was by elite men, so evidence about women is thin and tilted; historians piece it together from the few women's own writings, laws, tomb objects and records of powerful women, and say what they cannot know.
- **Planted slip (`little-evidence-no-influence`):** Nib says few sources mention women, so women had no influence. A second, smaller slip in Vary: one elite woman's book shows how all women lived.
- **Cases (to verify at build):** Ban Zhao (Han scholar who helped complete the *Book of Han* and wrote *Lessons for Women*; an elite source that argued women should be modest and obedient, which is itself evidence about expectations, not about every woman's life); Empress Lü (ruled as regent in the early Han); farm and textile work shown in tomb finds. No made-up case needed.
- **Distractors:** no sources means no influence; one rich woman's life stands for all women; a source that tells women how to behave describes how they actually behaved.
- **Shape:** default; links back to `usefulness-7` (who made it and why).

**n3 `groups-and-change` : Slaves, labourers and change over time**
- **Checkpoint:** describe the role of slaves and other marginalised groups, explain how they contributed to and influenced the society, and describe how relationships between groups changed over time.
- **One insight:** the groups at the bottom did much of the work the society rested on (farming, building, mining, the emperor's tomb), so the society depended on them; and the order was not fixed: it changed when rulers changed the rules or when groups pushed back.
- **Planted slip (`bottom-groups-passive`):** Nib says slaves and labourers did not matter to history because they had no power and nothing changed.
- **Cases (to verify):** convict and conscript labour on Qin building works; state and private slaves in the Han; the rebellion of conscripted labourers that began the fall of the Qin (Chen Sheng and Wu Guang, 209 BCE, as Sima Qian tells it: a source with a viewpoint, so "Sima Qian reports"); Han limits on merchants (later merchants grew rich anyway: change over time).
- **Distractors:** the bottom groups were passive; the hierarchy never changed; slavery in China was the same as in Rome (compare via cards, carefully).
- **Shape:** default; the "change over time" part is a short match (before → after). Integration-flavoured but not marked as one (n3 is not an integration node in Kit).

**Cards (`reference.md`):** Egypt (Pharaoh, viziers, nomarchs, scribes, priests, farmers, slaves; scribes' view of their role), Athens and Sparta (citizens, women, slaves; Spartiates, perioikoi, helots), Rome (patricians, plebeians, women of different classes, slaves and freedmen), India (varnas as ancient texts describe them, labelled as above). Each: groups, how power worked, what evidence survives, one source to look for.

**Goes with it:** pathway row in The ancient world becomes built; History teacher page; three misconception ids; teacher notes quoting the relevant K10 elaborations; class plans. No board, no clips (a "who controls what" board could come later).

**Publish:** whole-site (pathway and teacher page). Both items can share one run with the dig board batch if built before it runs.

**Questions for Matthew:** none blocking. Defaults if no answer: build both, pointer first; India card wording as above.
