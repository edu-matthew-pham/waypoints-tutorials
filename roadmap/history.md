# Roadmap: History

`content/history/` (subject, course `history/sources-7` and a Before Year 7 course built 30 Oct 2026; not yet tried with a class). Node content: waypoints-kit `data/history/`, copied in `data/curriculum/history.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

Shared rules (First Nations T1, made-up cases T2, writing T5, contestable or simplified ideas T8, pace-agnostic T9, lesson shape T11, and the rest) are in `roadmap/rules.md`, with their reasons; they are not copied here (1 Nov 2026). Subject rules:

- One course per standard, folder `history/<short-name>-7`, one lesson per waypoint. (4 Nov 2026: check rules T11 and T23 first; this subject's own way of inquiry may need a different shape than Economics') Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up cases and writing as in rules T2 and T5; this shape is the default, not a rule (T11)).
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

## Built (1 Nov 2026, Matthew said go): deep-time pointer and `history/people-7` (AC9HH7K10; Preview, not yet tried with a class)

**Deep time Australia (K02–K07), changed from the plan:** a course with no lessons cannot sit on a pathway (the build refuses it), so instead of its own course it is the last unit of **Early human migration** (`history/migration-7`): six "Taught in class" rows, each with a teacher-guide-only link to its curriculum pointer page. This also reads naturally after K01 ("including Australia"). The course's `teacher.md` holds the guidance (start from ACARA's elaborations, ask the school's First Nations contact or RAP group first, follow protocols, national starting points checked 1 Nov: the AIATSIS guide to evaluating and selecting education resources, and Narragunnawali from Reconciliation Australia). The History teacher page links it. One shared change so the unit header says "Taught in class", not "Coming later" (`roadmap/shared.md`).

**`history/people-7`, *People and power*** (tagline *Who did what, and who was in charge?*, `after: [land-7]`, `recap: true`), three lessons as planned:
1. `hierarchy-and-power` (n1, hinge): layers of Qin and Han society; nobles (by family) vs officials (appointed, dismissible); how power worked (registers, grain tax, laws, called-up labour); 36 commanderies and counties; a made-up county official's day (labelled once). Nib's slip `power-without-how` with `smaller:`.
2. `womens-roles` (n2): who did the writing; Ban Zhao (helped finish the Book of Han, taught at court, *Lessons for Women* read as expectations, not every woman's life); Empress Lü (regent 195–180 BCE, from Sima Qian, who disapproved; violence left to the teacher's judgement); tomb figures. Nib's slip `little-evidence-no-influence` with `smaller:`; Vary is the opposite slip (one elite woman for all).
3. `groups-and-change` (n3): farmers, conscripted labourers, convicts, slaves (a small share in the Han), merchants (the four-occupations ranking as an ideal order, T8); changes: the 209 BCE revolt "according to Sima Qian" (the death-for-lateness detail left out, since Qin legal texts suggest lighter penalties), Emperor Wu's taxes on merchants and the salt and iron monopolies (119 BCE), Wang Mang's abolition of slavery (17 CE) reversed after 23 CE. Nib's slip `bottom-groups-passive` with `smaller:`.
- Swap-in cards in `reference.md`: China, Egypt, Athens and Sparta, Rome, India (varnas as the texts' ideal order, compared by historians with how people lived; no present-day claims).
- Teacher notes quote the K10 elaborations; class plans; three single-line misconceptions; History index (pathway row built, about text) and History teacher page updated.
- Sources: fact checks this time leaned on encyclopedia pages (Wikipedia for Ban Zhao, Empress Lü, the Dazexiang uprising, Wang Mang, the salt and iron debate, Qin commanderies; a world-history textbook page for 119 BCE). Good enough for a preview; worth swapping for a scholarly or museum source before wider use.
- Tested: `validate`, `effort`, build, every check on all three lessons answered in Chromium at 1280 and 390 px (70 answered, 36 wrong answers tried, feedback shown), course, Reference, Early human migration, pathway, teacher and guide pages load with no errors or sideways scroll, `check-decks` for both courses. `check-nodes` has 2 warnings, both in Civics (`democracy-7/ways-to-take-part`), not History.
- **Publish:** whole-site (pathway, teacher page, shared build change). Can share the run with the dig board batch.

## Plan (1 Nov 2026; built the same day, see below): the last three lenses, built by agents, reviewed here

Matthew agreed (1 Nov): this chat plans K11–K13 once; three agents build them in parallel (each in its own worktree, one course each); this chat reviews each against the rules and the checklist, merges and pushes. The History skills courses (S05–S07) go to a new chat (handoff: Project doc `claude/handoff-history-skills.md`).

**Shared for all three (the `land-7` / `people-7` pattern):** Qin and Han China worked example; swap-in cards for Egypt, Greece, Rome and India in the course `reference.md`; one lesson per waypoint in node order; default worked-example shape (predict, try, worked example with Nib's slip as a bug task with `smaller:`, vary, practise, Make in the student's own book with a `reflect` tick, typical and wider steps); teacher notes quote the standard's elaborations, give sources with dates checked, and say what is simplified; class plans; made-up material labelled once per lesson; reasons and purposes as "historians think" where no source says so; contested ideas labelled where students meet them (T8); no First Nations content written (T1; these standards' elaborations have none); no pace labels; no boards or clips. Agents add their misconception ids and History index rows; this chat resolves the merges.

### `history/beliefs-7`, *Beliefs and practices* (AC9HH7K11; prior K10)

Tagline *What mattered to them, and how can we tell?* Beliefs are described as what people held ("many people in Han China believed…"), never as true or false; no step asks for a student's own beliefs. No images of human remains (the preserved body at Mawangdui is teacher-note only).

1. **`beliefs-and-practices` (n1, hinge).** Insight: beliefs worked as a system that produced practices: duty to ancestors (offerings, family rites), Heaven and the Mandate of Heaven (rulers rule while Heaven approves; disasters and defeat could be read as losing it), an afterlife much like this life (tombs furnished with goods), Confucian teaching on family duty. Planted slip `beliefs-as-odd-customs`: Nib treats a practice as a random custom with no reason behind it ("they put model houses in tombs because they liked decorating"). Distractors: practices without beliefs; one belief for every person; modern labels read back.
2. **`death-and-funerary-customs` (n2, focus area: death and funerary customs).** The node asks for one focus area; this one has the strongest evidence (Han tombs such as Mawangdui, 2nd century BCE; tomb models of houses, granaries and farms; the Terracotta Army). Using evidence: what a tomb's contents show people believed and valued. Typical and wider cover the other focus areas briefly: everyday life (farming calendar, Confucius on family) and warfare (the Mandate of Heaven used to justify war, ACARA's elaboration). Planted slip `tomb-shows-everyone`: a rich person's tomb taken as how everyone was buried.
3. **`beliefs-as-a-window` (n3).** Insight: beliefs and practices show what a society valued and how it organised itself (family hierarchy, rulers' legitimacy), and what set it apart (compare Egypt's mummification card). Planted slip `beliefs-tell-nothing`: "they were just superstitious, so their beliefs tell us nothing about the society".

### `history/contact-7`, *Contact and conflict* (AC9HH7K12; prior K11)

Tagline *What changed when societies met?*

1. **`causes-of-contact` (n1, hinge).** Insight: contacts and conflicts had several causes at once (power, land, security, trade, resources). Cases: the Qin wars of unification; the Han and the Xiongnu (security on the northern frontier, horses, trade); Han expansion west after Zhang Qian's mission (horses from Ferghana, allies against the Xiongnu). Planted slip `single-cause-conflict`. Overlap with S05's multi-causal waypoint is fine (the skills chat may link here).
2. **`effects-of-contact` (n2).** Effects in the node's three kinds: conquest (Han commanderies along the Hexi Corridor), trade (silk west; horses, grapes and other goods east), peace agreements (marriage alliances and gifts to the Xiongnu, the *heqin* agreements, from about 198 BCE). Planted slip `effects-on-one-side-only`: only the winner changed.
3. **`contact-and-change` (n3).** Insight: contact drove change across the ancient world: Roman demand for silk reached through middlemen (ACARA's "indirect contact" between Rome and the Han); Buddhism reaching China along trade routes in the later Han. Planted slip `societies-developed-alone`. Florus's story of envoys to Augustus is labelled as one Roman writer's claim that historians treat carefully (teacher note).

### `history/individual-7`, *A significant individual* (AC9HH7K13; prior K12)

Tagline *How much difference can one person make?* Worked individual: **Qin Shi Huang**, the First Emperor (named in ACARA's elaboration, and already met across the History courses). Swap-in cards: Hatshepsut or Ramesses II, Pericles or Socrates, Augustus or Julius Caesar, Ashoka or Chandragupta Maurya; Confucius as an alternative China card.

1. **`who-and-why` (n1, hinge).** Context and criteria for significance (changed many people's lives, effects lasted, remembered and argued about). Planted slip `famous-means-significant`.
2. **`achievements-and-how` (n2, hinge).** Achievements with the mechanism of change: one script, weights, measures and coins; roads and walls; laws applied through officials in every commandery (links `people-7`). Contested claims labelled: the burning of books and killing of scholars is "according to Sima Qian", whom later historians treat with care. Planted slip `did-it-alone`: Nib says he united China single-handed.
3. **`legacy-and-significance` (n3).** Legacy within and beyond his lifetime: the dynasty fell about fifteen years after unification, but the Han kept his officials, script and measures; how contemporaries and later writers saw him (a hero to some, a tyrant to Han writers). Planted slip `significant-means-good`: significant is mistaken for admirable.

**Review here before merging (each course):** every fact checked against a named source, preferably museum, UNESCO or scholarly over encyclopedia pages; checklist step 4 self-check; editorial pass; `validate`, `check-nodes`, build, every check answered in Chromium at 1280 and 390 px, `check-decks`.

**Publish:** whole-site (pathway rows, teacher page). One run when all three are merged.

## Built (1 Nov 2026, Matthew said go): `history/beliefs-7`, `history/contact-7`, `history/individual-7` (AC9HH7K11 to K13; Preview, not yet tried with a class)

Three agents built one course each in their own worktree, as planned; this chat reviewed, merged and fixed the shared files. Each course has three lessons in node order, the Qin and Han worked example, swap-in cards for Egypt, Greece, Rome and India in `reference.md`, class plans, teacher notes with sources and what is simplified, and its own misconception ids. All three sit after `people-7` on The ancient world pathway and do not need each other.

- Merge fixes: two stale "Coming later" rows removed from the pathway; the pathway `about:` and the History teacher page now say every lens is built (nine Year 7 courses), and "What is planned" names only the skills courses. One option-length warning in `people-7/womens-roles` step 8 was fixed on the way.
- Tests: `validate` clean for History; `check-nodes` only the two known Civics warnings; build; `check-lesson-boards`; every check in the nine lessons answered in Chromium at 1280 and 390 px with a wrong answer tried first (216 answered, 106 wrong tried, 0 problems); course, reference, pathway, teacher and guide pages at 390 px with no sideways scroll; `check-decks` for all three.
- **Facts resting only on encyclopedia pages (replace with museum, UNESCO or scholarly sources before a class uses them):** Contact: the *heqin* start date (about 198 BCE), the Hexi commanderies (121 BCE onward), the order of the Qin conquests, the treaty terms, An Shigao. Beliefs: the Zhou origin of the Mandate of Heaven, the Rigveda summary. Individual: Jia Yi, and the scholarly doubts about the scholars story (Nylan, Kern). Also People and power (K10), mostly encyclopedia pages.
- Publish: whole-site (pathway rows, teacher page), waiting for Matthew's ok. The same run also carries the map fix, `migration-7` with the deep-time unit, the dig board and its clip, and `people-7`.

## Review (1 Nov 2026, Matthew said ok): fresh-eyes review of all Year 7 History, and fixes

Two reviewers who had not seen the build read every History course: one for teaching and rules, one for facts and sources. Three agents fixed the lessons (sources and usefulness; the four lenses; skills, evidence, migration and land), and this chat fixed the shared pages, then merged and tested.

- **No Preview labels** (shared decision, 1 Nov): gone from History, every course, teacher notes and the teacher page. Status: none of it has been tried with a class.
- **Shared pages:** first pathway renamed *Sources and evidence* (id `how-we-know` kept), so "How we know" names only the course; migration-7's unit is now *Evidence for the first people*. Course order matches what lessons assume: Beliefs → Contact → Individual, and Past perspectives after Source origin and purpose. Courses only claim swap-ins they have. History teacher page: twelve courses and a catch-up; the lesson shape described as usual, not fixed.
- **Consistency across courses:** one Source C wording everywhere (a summary in our words, not a quoted translation); "factual claim" in Source usefulness, "fact" in Historical interpretations, with a linking line; the book-burning story never settled ("Sima Qian reports…", Nylan 2001 and Kern 2010 in teacher notes); one Han start convention (206 BCE counted, 202 BCE won) and a 207/206 BCE note for the Qin's end; "Han writers say" for Xiongnu motives; Contact's causes lesson now centres on the Han, the Xiongnu and Zhang Qian, so it no longer repeats Time, cause and change's Qin case.
- **Facts corrected:** Wang Mang's ban (9 CE, cancelled 12 CE; it was on selling slaves and land); 136 BCE Confucian posts and 124 BCE academy, not "the official basis of government"; Hexi commanderies from about 111 BCE; An Shigao working at Luoyang from about 148 CE; Book of the Dead papyri from about 1550 BCE; Chandragupta's empire at its largest under Ashoka; the 209 BCE rebels as frontier conscripts; terracotta war chariots were wooden. Wikipedia-only sources replaced where a better one could be opened; books that could not be checked online are named as "not checked online" in teacher notes.
- **Questions:** every right answer that gave itself away by length fixed (`check-options -- history`: 0 of 221; predicts and class plans checked by hand); the hedged-right / "Only…"-wrong pattern broken; strawman options replaced with real slips; hints start from the idea, not the bug line; made-up names labelled; two answers that contradicted their own lesson fixed (Zhang Qian, Source B fines) and one class-plan check that marked a single reason right.
- **Source usefulness** rewritten in plain Year 7 sentences; bias, propaganda and inquiry question named once; maths `worked` blocks turned into plain lists; its Wider step is now a same-level case (Caesar on Gaul) instead of previewing interpretations.
- **Left open:** the made-up rock shelter in migration-7 is placed "somewhere in western Asia", not Australia. `data/option-length-baseline.json` still lists the old History entries (not updated here, since it also holds other subjects' in-progress lists). `evidence-7/layers.svg` is unused.
- **Publish:** lesson changes can go by publish-lessons, but the shared pages (subject index, teacher page, course order) need the whole-site publish already waiting for Matthew's ok.

## Plan (1 Nov 2026; awaiting Matthew's "go"): the History skills courses (AC9HH7S05, S06, S07)

From Project doc `claude/handoff-history-skills.md`. Three courses, one per standard, one lesson per waypoint in node order (nine lessons). Built in a separate chat from the K11–K13 lenses; shared files touched by single lines only.

**Shared for all three.** Default worked-example shape (Predict, Try, Worked example with Nib's slip as a bug task plus `smaller:`, Vary, Practise, Make in the student's own book or a small browser-only box, `reflect` tick "a partner read it and gave feedback", then typical and wider steps). Qin and Han China as the worked example; swap-ins from Egypt, Greece, Rome and India in typical and wider steps only (no new reference cards: these are skill courses). Sources are paraphrased in our words ("a retelling, not a translation"), never quoted from a published translation; ACARA's own wording may be quoted. Made-up material labelled once per lesson; no coined English-sounding ancient place names. Purposes and reasons as "historians think" where no source says so. No ordering task where the order is a choice (chronology has one answer, so S05 n1 may use one; see below). Teacher layer as usual (`learning:`, `struggle:`, stuck list, exit ticket, sources with the date checked, ACARA elaborations quoted). Facts checked against museum, UNESCO or scholarly sources where reachable; encyclopedia pages only as a last resort and marked so.

**First Nations (T1, firm).** No student example in any of the three. BP is defined with non-Australian deep-time examples already in our courses (millet in the Yellow River valley, the Misliya jawbone); a teacher note says BP is the convention used for deep time in Australia and points to the K02–K07 rows in Early human migration. S06 n3's wider elaboration (First Nations historians recovering narratives) and S07's ("a First Nations leader") go in teacher notes only, pointing to community-approved material.

### Course `history/time-7`, *Time, cause and change* (AC9HH7S05)

Descriptor: "describe causes and effects, and explain continuities and changes". Tagline *When did it happen, why, and what stayed the same?* Prior AC9HS6S03 and S05 (no catch-up lesson exists; teacher note only).

**n1 `dates-and-timelines` (hinge): How do BCE and CE work?**
- Checkpoint: use BC/AD, BCE/CE and BP correctly, sequence events and sources, explain why order matters for cause and change.
- Insight: BCE years count *down* towards year 1, so a bigger BCE number is *earlier*; CE counts up; there is no year 0 (1 BCE is followed by 1 CE). BC/AD and BCE/CE use the same numbers, so "converting" is renaming, not arithmetic. BP counts back from 1950 and is used for times long before writing. "History" in ACARA's sense starts with named people and written records; that split is a convention, labelled (T8), with a teacher note that oral histories also carry the past.
- Planted slip `bce-bigger-is-later`: Nib puts 500 BCE after 100 BCE (the hinge reason's own example). `smaller:` "You are counting down to a rocket launch: is 10 or 3 closer to lift-off?"
- Checks: sort events BCE/CE; one ordering task of five dated events (allowed: chronology has a single right order; lines kept short for phones); number checks for spans (221 → 206 BCE = 15 years; Vary: 50 BCE to 50 CE = 99 years, the no-year-0 trap); match BC↔BCE, AD↔CE.
- Distractors (real slips): BCE subtracted like CE (span 500 BCE to 100 BCE as 600); BC and BCE as different numbering; BP as "before Christ in years".
- Typical: gaps in timelines and why they occur (materials that rot, records destroyed, nobody digging there yet, nobody wrote it down); history vs prehistory. Wider: why BCE/CE was adopted; Chinese dynastic and reign-year dating (the Shuihudi slips date by the Qin king's year; mention only, checked at build).
- Events (dates checked at build): Confucius dies 479 BCE, Qin unifies 221 BCE, Lingqu Canal 214 BCE, Qin falls 206 BCE, salt and iron monopolies 119 BCE, Wang Mang 9 CE; swap-ins Great Pyramid (about 2560 BCE), Augustus (27 BCE), Ashoka (3rd century BCE).
- **Board (question below):** the maths `numberline` widget already draws fixed and dragged points with captions, but labels show −500, not 500 BCE, and it has a 0. Proposed: one small modular option, `years: on` (labels "500 BCE" and "100 CE", no year 0, readouts in years), and one Practise step dragging events onto a timeline. Re-records up to 8 maths lessons whose clips use `numberline` (counted at build). Fallback: no board, checks above only.

**n2 `causes-and-effects` (hinge): Why did Qin win?**
- Checkpoint: identify several causes, distinguish long-term/underlying from short-term/triggering, describe effects.
- Insight: big events have several causes working together over different timescales; a trigger sets off an event but does not explain it alone.
- Worked event: the Qin unification (221 BCE), "as historians usually explain it": long-term (reforms that tied rank to service in war, from the 4th century BCE; grain from Sichuan after Dujiangyan; the Zhengguo Canal), short-term (King Zheng's campaigns 230–221 BCE, rival states weakened). Effects short-term (one ruler, commanderies) and long-term (one script, weights and measures that lasted). Trigger vs underlying shown on the 209 BCE revolt "according to Sima Qian" (a delay by rain as the trigger; heavy labour demands underneath), without the death penalty detail (people-7's decision). Contact causes: a mention link to `contact-7/causes-of-contact`, not repeated.
- Planted slip `single-cause-event`: "Qin won because King Zheng was a brilliant leader." `smaller:` "A team wins the final. Name two reasons besides the captain."
- Checks: sort causes long-term/short-term (dates given, so one answer); match cause → effect; question on trigger vs underlying.
- Distractors: earlier means cause ("it happened before, so it caused it"); the most recent event is the whole cause; effects stop when the event ends.
- Typical: causes of one swap-in event (the building of the Great Pyramid's workforce, or Augustus becoming emperor). Wider: weighing which cause mattered most (leads naturally to interpretations; no S07 content previewed).

**n3 `continuity-and-change`: Qin to Han, what changed and what stayed?**
- Checkpoint: explain continuities and changes, using chronological evidence; continuity and change coexist.
- Insight: when the dynasty changed, much stayed: officials, commanderies, the script and measures, farming life; what changed: the ruling family, some harsh laws eased, kings briefly restored in some regions.
- Sources sequenced (elaboration): Qin legal slips from Shuihudi (before 217 BCE) and Han legal slips from Zhangjiashan (about 186 BCE), retold in our words, showing many Han statutes followed Qin ones. Check against a scholarly source at build; if unreachable, drop to "historians report".
- Planted slip `new-dynasty-new-everything`: Nib says the Han replaced everything the Qin built.
- Checks: sort features into continued/changed; match dated source → what it shows; question on "both at once".
- Distractors: continuity means nothing happened; change is always progress; one change means the whole period changed.
- Typical: Egypt's Old to Middle Kingdom, or Rome Republic to Empire (Augustus kept the Senate). Wider: same development as continuity or change depending on timescale.

### Course `history/perspectives-7`, *Past perspectives* (AC9HH7S06)

Descriptor: "identify perspectives, attitudes and values of the past in sources". Tagline *Whose view is this, and whose is missing?* Prior AC9HS6S04: `assumes:` the existing Before Year 7 lesson `can-you-trust-this-source`.

**n1 `whose-view` (hinge): What a source says, and whose eyes it sees through.**
- Insight: every source shows events through its maker's position; the scaffold "who made it → their position → what they would notice and value → the perspective" separates perspective from content.
- Worked source: Sima Qian's description of the Xiongnu (a Han court historian describing northern herding neighbours who left no writing of their own), retold in our words. Second source: the Qin stone inscription (met in sources-7), now read for whose voice it is.
- Planted slip `perspective-is-content`: Nib writes the perspective as a summary of what happened ("the perspective is that the Xiongnu moved with their herds").
- Distractors: perspective means lying; a source from the time has no perspective; the perspective is ours today.
- **Board (optional, reuse):** cohesion chain mode on the retold Xiongnu text, colouring phrases "what it reports" vs "the writer's view" (planted answers, as in `usefulness-7`). As a Practise step.
- Typical: Greek writers on "barbarians", or an Egyptian victory relief. Wider: the same battle from two sides; positionality.

**n2 `values-behind-the-source`: Reading the world behind the source.**
- Insight: a source shows the attitudes and values of its society through what it says, what images it uses and what it takes for granted.
- Worked source: ACARA's Confucius line (Analects 17.25), quoted in ACARA's wording and introduced as a perspective to analyse; teacher note that translations and readings differ, that judging it is fine *after* describing what it shows, and how to handle a class reaction. Second: the Mawangdui silk banner (2nd century BCE, Hunan Museum), described in words with a link: attitudes to death, rank and the afterlife. No picture of remains (beliefs-7's rule). Mention link to `people-7/womens-roles`; Ban Zhao is not re-taught.
- Planted slip `judge-only-by-today`: Nib says "that's sexist" and stops, so learns nothing about the society. Feedback keeps the judgement and adds the question historians ask.
- Distractors: one source's value was held by everyone; a value only counts if stated outright; past values are the same as ours.
- Typical: a coin or seal as a symbol of power (Roman or Han). Wider: presentism, empathy and critique.

**n3 `missing-voices`: Who is missing, and what can still be found?**
- Insight: most surviving writing came from officials and the elite, so farmers, slaves and convicts, conquered peoples and neighbours without writing are thin in the record; the gap is itself evidence of who held power, and objects, admin records and reading against the grain still reveal something.
- Cases (checked at build): Qin local records from Liye (registers and labour lists, found 2002) showing how the state counted and used people; peoples of the south conquered by Qin (link `land-7`'s Lingqu Canal); Xiongnu burials with Han silk. Women are named as one missing group with a link to `womens-roles`, not repeated.
- Planted slip `no-writing-no-history`: Nib says the Xiongnu left no writing, so nothing can be known about them.
- Distractors: what Han writers said is how the Xiongnu saw themselves; archaeology fills every gap; missing means unimportant.
- Typical: Egyptian workers' villages (Deir el-Medina) or Athenian slaves. Wider: techniques for recovering absent views; teacher note on First Nations historians (T1).

### Course `history/interpretations-7`, *Historical interpretations* (AC9HH7S07)

Descriptor: "explain historical interpretations about significant events, individuals and groups". Tagline *Why do historians tell it differently?* `after: [perspectives-7]` (its prior). Worked case for all three lessons: the fall of the Qin, about 15 years after unification. **Never one interpretation as the answer; marked checks only where there is one defensible answer** (which is a fact, which is an interpretation, what evidence each uses, which reason a difference comes from).

**n1 `fact-or-interpretation` (hinge).**
- Insight: a fact is something the evidence directly shows (the First Emperor died in 210 BCE; the dynasty ended in 206 BCE); an interpretation is an argument built from evidence about why or what it means (Qin fell because its rule was too harsh). Interpretations are reasoned, not just opinions.
- Planted slip `interpretation-as-fact`: Nib copies Han writers' explanation into the "facts" column.
- Checks: sort statements fact/interpretation (chosen so each has one defensible answer; teacher note on borderline cases); question on evidence vs opinion.
- Distractors: an interpretation is just an opinion with no evidence; anything in an old book is a fact; dates are interpretations.

**n2 `why-they-differ`.**
- Interpretations (each "historians argue…", checked at build, named sources in teacher notes): (a) Han writers (Jia Yi's essay on the faults of Qin, Sima Qian): harsh laws and no benevolence; written for the dynasty that replaced Qin; (b) some modern historians, using excavated Qin legal and administrative texts: the laws were detailed and often less brutal than Han writers say, and they point to the strain of huge labour projects, the succession crisis after 210 BCE, and old states' elites rising again. If a named modern historian can't be checked, say "some historians today" with the source.
- Insight: interpretations differ because of different evidence, different questions and different values; several can stand at once.
- Planted slip `differ-means-one-lying`: Nib says one side must be lying.
- Checks: match interpretation → evidence it uses; match each difference → evidence, question or values.
- Distractors: they just had different opinions; the older account must be right because it is closer in time; the newer one must be right because it is newer.
- Typical: interpretations of Rome's fall in the West (economy, politics, invasion: ACARA's elaboration). Wider: how a debate is resolved, or not.

**n3 `argue-why`: Make your own argument.**
- Insight: an argument about interpretations names them, gives the evidence and reasoning behind each, and explains *why* they differ (the factors from n2), not just that they do.
- Planted slip `different-opinions-explains`: Nib's argument ends "because people have different opinions" (the node's own failing criterion).
- Checks: question on which plan meets the brief; match evidence to the factor it supports; bug on Nib's argument. The argument itself is written in the student's book, read by a partner or the teacher; nothing marked.
- Typical: argue about Qin Shi Huang's reputation (mention link `individual-7` once built). Wider: argue which interpretation is better supported while giving the other its due.

### Goes with it
- **Pathway (question below):** a new pathway **Thinking historically** on the History page, listing `time-7`, `perspectives-7`, `interpretations-7` (the last `after: [perspectives-7]`), fit line "Use beside your depth study, after How we know." Reason: How we know stays a short source-and-evidence gateway, and these three are used across the lenses. Alternative: append them to How we know.
- Single lines: nine misconception ids in `misconceptions.json`, one bullet per course in `content/history-teachers.md`, pathway rows in `content/history/index.md`.
- Class plans for every lesson; course `index.md` with Preview; no clips.
- Tests as in the handoff: `npm ci`, `validate`, `check-nodes`, `WP_NO_MAKECODE=1` build, every check answered in Chromium at 1280 and 390 px (task pills and `smaller:` folds opened), `check-decks -- history/<course>`, `check-lesson-boards -- history` if a board is added.
- **Publish:** whole-site (pathway and teacher page; also the widget if `years:` is added). Ask Matthew first.

### Questions for Matthew (answered 1 Nov 2026: "go", so the defaults)
1. **Timeline board:** the small `years: on` option on the `numberline` widget for S05 n1. *Decided:* yes (reuse and extend an existing board over a new widget, as Matthew prefers; scope: History timelines, any course may use it).
2. **Pathway:** a new **Thinking historically** pathway. *Decided:* yes (How we know stays a short source-and-evidence gateway; these skills sit beside every lens).
3. **Order:** S05, S06, S07, one push each after a self-check. *Decided:* yes.

## Built (1 Nov 2026, Matthew said go): `history/time-7`, *Time, cause and change* (AC9HH7S05; Preview, not yet tried with a class)

Course `content/history/time-7/` (tagline *When did it happen, why, and what stayed the same?*, Usually Year 7, `recap: true`, no `after:`), first course of the new **Thinking historically** pathway (Past perspectives and Historical interpretations shown as Coming later). Three lessons in node order:
1. `dates-and-timelines` (n1, hinge): BCE counts down, CE up, no year 0; BC/AD same numbers; BP as years before 1950 (no First Nations example; teacher note points to Deep time Australia). Nib's slip `bce-bigger-is-later` with a countdown `smaller:`. Spans 221 → 206 BCE (15) and 50 BCE → 50 CE (99). **Timeline board** (Practise): four events dragged to their years on `numberline` with `years: on`. Typical: gaps in timelines (sort) and ACARA's "history" definition labelled as a convention; wider: reign-year dating.
2. `causes-and-effects` (n2, hinge): Qin unification "as historians usually explain it": reforms in the 300s BCE, Dujiangyan, the 230–221 BCE campaigns; effects short- and long-term; trigger vs underlying on the 209 BCE revolt "according to Sima Qian" (penalty detail in teacher notes only). Nib's slip `single-cause-event`. Typical: Augustus (27 BCE, Actium 31 BCE); wider: weighing causes.
3. `continuity-and-change` (n3): Qin to Han, sorted continued/changed; three dated sources in order (Shuihudi before 217 BCE, Zhangjiashan about 186 BCE, Emperor Wu's academy 124 BCE). Nib's slip `new-dynasty-new-everything`. Typical: Rome after 27 BCE (Senate and consuls continue); wider: timescale decides continuity or change (Confucian ideas).

**Departures from the plan:** the five-event ordering task became the timeline board (ordering by placement, so no parsons and no sideways scroll); the Zhengguo Canal was dropped (its date could not be checked against a museum or UNESCO source); the contact-7 link is a teacher-note mention only, since that lesson is not built yet.

**Shared:** `numberline` `years: on` (`roadmap/shared.md` › Changed by the History skills chat), AUTHORING note, three misconception lines, History index pathway, one bullet in `content/history-teachers.md`.

**Facts checked 1 Nov** (sources in each `teacher.yml`): Confucius 551–479 BCE (Stanford Encyclopedia of Philosophy); Qin 221–206 BCE, standardisation, commanderies, harsh reputation (The Met); Han 206 BCE–220 CE, Chang'an, Emperor Wu and Confucianism, borders kept (The Met); BP = years before AD 1950 (*Radiocarbon*); Shang Yang's ranks of merit (SEP, Chinese Legalism); Zhangjiashan texts buried about 186 BCE, Han "adopted and adapted" Qin precedents (Barbieri-Low, UCSB); Emperor Wu's academy 124 BCE (Strayer, a textbook); Liu Bang and Wang Mang (Britannica, an encyclopedia; marked as such). Augustus and Actium dates are standard and not rechecked.

**Tested:** `validate` (no History errors; the only length warning in these lessons fixed), `check-nodes` (only the 2 known Civics warnings), build, `check-lesson-boards -- history/time-7` and `-- maths` (the widget change), `check-decks -- history/time-7` (all slides fit), and every check answered in Chromium at 1280 and 390 px with `?width=wider` and every `smaller:` fold open: 62 answered, 48 wrong answers tried with feedback shown, all required checks ticked, the timeline board solved with the keyboard Move row; course, recap and teacher guide pages load with no errors or sideways scroll. Editorial pass on all three lessons. Not tried with a class.

**Publish:** whole-site (new pathway, teacher page, and the widget). Ask Matthew (W1).

## Built (1 Nov 2026, Matthew said go): `history/perspectives-7`, *Past perspectives* (AC9HH7S06; Preview, not yet tried with a class)

Course `content/history/perspectives-7/` (tagline *Whose view is this, and whose is missing?*, Usually Year 7, `recap: true`, no `after:`: its prior is Year 6 AC9HS6S04, linked by `assumes:` to the Before Year 7 lesson), second course in **Thinking historically**. Three lessons in node order:
1. `whose-view` (n1, hinge): content vs perspective; the four questions (who made it, their position, what they would notice and value, so what perspective); Sima Qian on the Xiongnu retold in our words; Vary on the Qin stone inscription. Nib's slip `perspective-is-content` with a football-fan `smaller:`. **Board:** cohesion chain mode on the retold text, "what it reports" vs "the writer's view" (planted answers only), as a Practise step. Typical: Greek *barbaroi*; wider: Kadesh, two sides of one battle.
2. `values-behind-the-source` (n2): words, pictures and what a source takes for granted. ACARA's Confucius saying, in ACARA's wording, introduced as a perspective to analyse (T8, T20), with a teacher note on translations and class reactions; the Mawangdui silk painting described in words with a link to the Hunan Museum (no remains). Nib's slip `judge-only-by-today` (judging is fine; stopping there is the slip). Vary: one source for everyone. Typical: emperor's head on Roman coins; wider: describe, then judge.
3. `missing-voices` (n3): who wrote, and who is thin in the record (farmers, labourers and convicts, conquered peoples, the Xiongnu; women linked to `people-7/womens-roles`, not repeated); three kinds of thin evidence: the Liye records, Noin-Ula burials, Sima Qian read carefully; the gap as evidence of power. Nib's slip `no-writing-no-history`. Typical: the Deir el-Medina register of absences (British Museum); wider: the gap as evidence. First Nations historians (Kit's wider width) in teacher notes only.

**Facts checked 1 Nov** (sources in each `teacher.yml`): Mawangdui painting (Hunan Museum); Liye records (*Early China*, Cambridge; the 2002 date from an encyclopedia, marked); Noin-Ula (Silk Road Seattle, University of Washington, on the Hermitage collection); Deir el-Medina register (British Museum object on Google Arts & Culture); Kadesh (World History Encyclopedia, marked as an encyclopedia); Confucius dates (SEP). Sima Qian's Xiongnu chapter is paraphrased by theme, not quoted.

**Shared:** three misconception lines, the pathway row (built), one bullet in `content/history-teachers.md`.

**Tested:** `validate` (no warnings in these lessons), build, `check-cohesion -- history` (4 boards: fail at start, pass solved), `check-lesson-boards -- history/perspectives-7`, `check-decks -- history/perspectives-7`, and every check answered in Chromium at 1280 and 390 px with wider steps and `smaller:` folds open (with time-7 again: 120 answered, 94 wrong answers tried, all required checks ticked except the colouring board, which `check-cohesion` covers); course, recap and guide pages load with no errors or sideways scroll. Editorial pass on all three lessons. Not tried with a class.

**Publish:** whole-site (pathway, teacher page). Ask Matthew (W1).

## Built (1 Nov 2026, Matthew said go): `history/interpretations-7`, *Historical interpretations* (AC9HH7S07; Preview, not yet tried with a class)

Course `content/history/interpretations-7/` (tagline *Why do historians tell it differently?*, Usually Year 7, `after: [perspectives-7]`, `recap: true`), third course in **Thinking historically**; all three are now built. One worked case throughout: why the Qin dynasty fell. **No interpretation is given as the answer**; checks only ask things with one defensible answer (fact or interpretation, who says what, which kind of reason, which part of an argument does which job).
1. `fact-or-interpretation` (n1, hinge): a fact is what the evidence directly shows; an interpretation is an argument from evidence (not just an opinion); "because", "mainly", "turning point" as signs. The Han writers' interpretation (Jia Yi, Sima Qian) laid out as facts used and argument made. Nib's slip `interpretation-as-fact` with a match-score `smaller:`. Typical: Hatshepsut's broken statues, the older "revenge" interpretation and the 2025 re-reading (Antiquity); wider: what makes an interpretation strong.
2. `why-they-differ` (n2): three interpretations side by side: A Han writers (harsh rule), B "some historians today" with excavated Qin law texts (a composite, flagged as such in teacher notes), C Gideon Shelach's 2014 question, collapse or transformation (the question reported, not a conclusion). The difference explained by evidence, questions and values. Nib's slip `differ-means-one-lying`. Vary: closer in time doesn't settle it. Typical: the Western Roman Empire, 476 CE, with ACARA's three causes; wider: how debates move.
3. `argue-why` (n3): four parts (claim, interpretations with evidence, reasons, conclusion), one model argument labelled as one example of the shape; Nib's argument ending "different opinions" (`different-opinions-explains`, the node's own failing criterion). The argument is written in the student's book and read by a partner or the teacher; nothing on the page marks it. Typical: Hatshepsut again; wider: arguing which interpretation is better supported while giving the other its due.

**Departure from the plan:** the plan's n3 typical (Qin Shi Huang's reputation) became Hatshepsut, because `individual-7/legacy-and-significance` (built in parallel) already covers how the First Emperor was judged; its teacher notes point to that lesson. The node check reads course order only for code, maths, science, systems and engineering, so lesson 1 lists `assumes: [AC9HH7S06]` (as the lens courses do) beside the course `after:`.

**Facts checked 1 Nov** (sources in each `teacher.yml`): Qin dates (The Met); the succession crisis, rebellions, the last ruler's surrender, the systematic Qin law code applied with some care, and the suggestion that Han historians exaggerated Qin cruelty (University of Oregon, Early China course notes); *Birth of an Empire: The State of Qin Revisited* (UC, eScholarship) and Shelach's 2014 chapter title (Hebrew University record); Jia Yi's essay (encyclopedia summary, marked); Hatshepsut re-reading (Antiquity news, 2025, Jun Yi Wong). **To strengthen before wider use:** interpretation B rests on course notes and a book's abstract; a teacher with access to *Birth of an Empire* or Barbieri-Low and Yates should check it.

**Shared:** three misconception lines, the pathway row (built, about text updated), one bullet in `content/history-teachers.md`.

**Tested (all three skills courses together):** `validate` (no warnings in these lessons), `check-nodes` (only the 2 known Civics warnings), build, `check-lesson-boards -- history` (8 boards), `check-cohesion -- history`, `check-decks` for each course, every check answered in Chromium at 1280 and 390 px with wider steps and `smaller:` folds open (180 answered, 142 wrong answers tried with feedback, all required checks ticked; the colouring board via `check-cohesion`), and the History subject page, the Thinking historically pathway page, the History teacher page and the guides load with no errors or sideways scroll. Editorial pass on all nine lessons. Not tried with a class.

**Publish:** one whole-site run covers all three courses (new pathway, teacher page, `numberline` widget). Ask Matthew (W1).

## Review (4 Nov 2026, Matthew): historical inquiry was missed

Matthew asked why History got a PRIMM-like predict-first shape by default. Findings:
- **The shape was copied, not chosen.** Economics' `needs-and-wants` pattern was written into the History, Civics and Geography plans by the 30 Oct humanities chat; nobody asked what History's equivalent of 5E is. Science's 5E builds inquiry into every lesson; History's lessons tell the conclusion, then check it.
- **Topics without skills.** Skills got their own courses (S02–S07) and topic courses tag only their K-node, so no topic lesson practises a historical skill.
- **Skills without sources.** The plan allowed short public-domain translations on source cards; every build used our own summaries, so students practise sourcing on a description of a source.
- **Humanities treated as one block** (now T11).

Rule added: T23 Core skills first. Research behind a History shape (cited from memory, re-check before quoting): Reisman 2012 (Reading Like a Historian: background, central question, sourcing and corroboration of a few documents, claim, discussion); Wineburg 1991 (novices don't source); the knowledge-rich counterweight (Counsell; Ofsted 2021 history review): background comes before sources.

**Trial (agreed 4 Nov):** the existing Year 7 lessons stay as they are. Alternative versions in a source-led shape (question, background, two or three real extracts, judge what each can and can't show, claim from evidence; checks still planted-answer) for `sources-7/what-can-it-tell-us` and `people-7/womens-roles`, linked only from each original's teacher notes (an optional field shown in the lesson's For teachers box and the teacher guide, not in decks: `before` and `leads` reach the slides). Not on maps or course lists. First job: find usable extracts (First Emperor's inscriptions via Sima Qian, Ban Zhao's Lessons for Women, Han tomb figures as openly licensed photos). After the trial: decide whether all History topic lessons get a skill line and real extracts, whichever shape wins. A harder second round: `contact-7/causes-of-contact` (causation).

## Proposed (4 Nov 2026, Matthew agreed the direction): a source collection

No free, open, ACARA-aligned source bank exists for the ancient world (aligned packs are commercial; state libraries offer research guides, not sources; Fordham's Internet History Sourcebooks allow linking and class printing but not copying into another site). A curriculum-first collection is a niche Waypoints can fill, started small like Code and grown as lessons need it.

- **One file per source,** `data/sources/<id>.yml`: `title`, `made`, `by`, `type`, `about` (our words: what it is), `extract` (the source's own words or an image, a few lines only), `translation` (public-domain translation, or "translated for this lesson from the original", checked against a named scholarly translation without copying it), `licence`, `credit`, `full` (link to where the whole source lives), `checked` (date), `curriculum` (descriptor and Kit node), `teacher` (anything sensitive, contested or simplified).
- **Used by id** in lessons as a source card (extract, credit line, "Read more of this source"), so one checked entry serves every lesson.
- **Later:** a `/sources/` teacher page browsable by descriptor, node and society, once there are enough entries. Other humanities can use the same format (Geography data and maps, Civics documents).
- **Validate** checks every entry has a licence, credit and check date.
- **Images:** Met Open Access (public domain) and Wikimedia Commons with licence. **Texts:** standard English translations of Ban Zhao (Swann 1932, still sold by University of Michigan Press) and the Qin inscriptions (Kern 2000) are treated as under copyright, so short extracts are our own labelled translations from the public-domain Chinese, flagged for checking by someone who reads classical Chinese before use beyond the trial.
- **First entries:** only the trial's (the First Emperor's inscription; two short Ban Zhao extracts; a Sima Qian line on Empress Lü; two or three Met Han tomb figures). Plan the entries, then stop for Matthew's go before building.
- **Draft entries (4 Nov 2026):** Project doc `claude/history-source-entries-draft.md` (five entries). Originals checked against ctext.org: Langya inscription, Sima Qian on Empress Lü. **Ban Zhao originals checked 5 Nov** against ctext.org (後漢書 › 列女傳, paragraphs 15 and 12; Matthew pasted them): both match; "broken tile" corrected to "tiles"; the "good work" line (spinning, weaving, food for guests) added as a second extract. **Still to do before building `womens-roles`:** have all our translations checked by someone who reads classical Chinese; find one public-domain Han tomb figure of everyday women's work.

## Plan (4 Nov 2026; awaiting Matthew's "go"): source-led trial, step 1

Handoff: Project doc `claude/handoff-history-source-led-trial.md`. Sources: Project doc `claude/history-source-entries-draft.md` (entries 1 and 4, originals checked against ctext.org). The existing Year 7 History lessons do not change.

### 1. Source collection (minimal)

- **Files:** `data/sources/qin-langya-inscription.yml` and `data/sources/sima-qian-empress-lu.yml`, copied from the draft entries in the format above (› Proposed: a source collection), plus `original:` (the Chinese) so a checker can compare. Only these two; the Ban Zhao and tomb-figure entries wait for `people-7/womens-roles`.
- **Source card in a lesson:** a fenced block in `lesson.md`, ```` ```source qin-langya-inscription ```` with an optional `lines:` (which part of `extract` to show, so one entry can give two short extracts). The card shows a short label (Source 1, 2…), title and date, the extract, the credit line, a "Translated for this lesson" note when the entry says so, and **Read more of this source** (the entry's `full` link, new tab). `about` shows as one line above the extract; `teacher` goes only to the teacher notes and guide. Cards also print in the worksheet and show on the deck (the extract and credit, not the teacher note).
- **Validate:** every `data/sources/*.yml` has `licence`, `credit` and `checked`; every card id in a lesson exists. A `checked` that says "not yet" is a warning, not an error, so a draft can be tried locally but is visible.
- **Not yet:** no `/sources/` page, no search entries for sources.

### 2. The alternative lesson: *What can this source tell us?* (source-led)

Same node (AC9HH7S03 n3), same goals and exit ticket as the original, so the two can be compared fairly. Proposed slug `history/sources-7/what-can-it-tell-us-sources` (inside the course folder so it keeps the course crumb, cheat sheet and progress store; hidden by the unlisted flag, part 3).

**Question first.** "The First Emperor said his new empire was at peace. How can we find out what his rule was really like, and what can one source tell us about that?"

**Background (does not give the answer), about 6 lines.** Qin conquers the last rival kingdoms in 221 BCE; the First Emperor tours his empire; the stone at Langya was set up in 219 BCE and is lost, so we know it from Sima Qian's copy about 100 years later, under the Han, the family that replaced the Qin. Says what an inscription is for in general (to be read by many, to last), not what this one's purpose was. Context, not just instructions (T22): one line on why historians bother with a source that praises its maker.

**Sources (two entries, three short extracts):**
- Source 1: Langya, the praise lines (laws set straight; farming first; families safe, no bandits; no need for weapons).
- Source 2: Langya, the "one standard" line (tools, measures and writing made the same). Same stone, but a claim other evidence (Qin weights, coins, script) backs up, so students see one source can be strong on one claim and weak on another.
- Source 3 (contrast): Sima Qian on Empress Lü (the land at peace, few punishments, food plentiful). A Han historian praising a ruler's peace, but in a chapter that also tells of her cruelty to rivals (said in the background, not quoted).

**Steps (shape: question, background, read, judge, claim; stage names kept so the site's machinery still works, but the order and jobs follow History, T11):**
1. **The question** (info + one predict-style vote, kept short): "Can the stone tell us whether people really lived in peace?" Locked, compared at the end. Nib's slip ("it was carved in stone, so it must be true") sits here as the wrong thinking students can correct later.
2. **Read Source 1.** The four questions as a match against the card itself (origin from the credit and date, content from the extract, context from the background, purpose not stated, so "probably", as in the original). Purpose is the one students must infer, said plainly.
3. **What can it show, and what can't it?** A `sort` of claims into "Source 1 is good evidence for this" / "weak evidence for this" (how he wanted to be seen; that laws were written down; that there were no bandits; what farmers thought of the new laws). Feedback names the reason (purpose, who made it).
4. **Read Source 2: same stone, different claim.** A `question`: why is "one standard for measures and writing" better supported than "no bandits"? (Other evidence agrees; it is a policy, not a boast.) This is the step the original can't do, because it needs the words.
5. **Read Source 3 against Sources 1 and 2.** A `match` or `question`: which source supports which claim; and what it means that a Han historian also describes a ruler's reign as peaceful (both kinds of source can praise; ask who wrote it and when).
6. **Claim from evidence (the point of the lesson).** A `question` choosing the best claim for the opening question, each option a real student-style claim of similar length (T8b): the best one names what the sources show, cites a source, and names a limit. Then the original's sentence frame ("It can tell us ..., but it cannot tell us ...") for the student's own book, `reflect` tick (T5). Back to the locked vote: what changed?
7. **Typical / wider:** typical keeps the original's museum-label question (a modern source). Wider: what one more source would help answer the opening question, and why (a planted choice: Qin law slips, a farmer's letter if one existed, a later Han history), showing corroboration without free writing.

Every check is planted-answer (sort, match, question, reflect); nothing marks writing (T3, T5). About three checks per step at most (T18). Time about the same as the original (40 min); if it runs long, step 7 is the give.

**Teacher notes** (`teacher.yml`): what changed from the original and why (question first, real extracts, claim as the outcome); `teacher` lines from both entries; **the translations are drafts made for this lesson and not yet checked by someone who reads classical Chinese** (with the scholarly translations to check against); the Han-copy point as a discussion prompt; a line asking the teacher which shape they'd use. No `trial:` field on this one (it points back with a plain link to the original instead).

### 3. Unlisted

The site has one unlisted kind of page, the how-to (`tools/howto.mjs`: noindex, not on trail maps, search or course progress). How-tos are not lessons (no steps or checks), so the trial reuses the idea, not the code: a lesson frontmatter flag `unlisted: true` that
- adds `<meta name="robots" content="noindex">` (the same tag how-tos and draft pointer pages use, through the page `head` option in `lesson-view.mjs`);
- drops the lesson from every list built from `loadLessons()`: course page rows and counts, unit counts, Continue card, trail and trailhead progress, look-back and recap cards, search index, curriculum map dots and pointer pages (`node:`), Code coverage, Create's lesson list and My path search, the course teacher guide's lesson list and cheat sheets.
- still builds its own page, its teacher guide (`/teach/.../`), deck and worksheet, so a teacher who follows the link gets the full kit.

Best done as one filter where the lesson list is built (`build-site.mjs`, and the same in `search-index`, `build-create`, `pointer-pages`, `curriculum-map`, `coverage`), plus a validate check that an unlisted lesson is linked from some lesson's `trial:` (so it is never orphaned). I'll list every place it touches in the build commit.

### 4. Link from the original's teacher notes only

- New optional `teacher.yml` field `trial:` with `href` (lesson slug) and optional `text`. Default text: "Trial: the same lesson in a source-led shape. Which would you use, and why?"
- Shown in the lesson's **For teachers** box (`lesson-view.mjs`) and in the teacher guide (`lessonGuideBody` in `teach.mjs`), as a short line with the link. **Not** in decks or worksheets (`before` and `leads` reach the slides, so it's a separate field the deck code doesn't read). Validate checks the slug exists.
- The only change to the original lesson is this one line in its `teacher.yml`; its student page, checks and deck stay the same.

### Testing and publishing

`validate`, `check-nodes`, build, `check-decks` for the course; in Chromium at 1280 and 390 px: every check of the new lesson answered (right and wrong), source cards and "Read more" links, the `trial:` line in the original's For teachers box and guide but not its deck; the course page, trail, search, look-back and curriculum map unchanged (no new lesson shows, counts the same). Then a whole-site publish, which I'll ask about (W1).

### Questions for Matthew (answered 4 Nov 2026: the defaults)

1. **Place:** inside `sources-7` as `what-can-it-tell-us-sources`, hidden by `unlisted: true`.
2. **Sources:** three extracts from the two checked entries; the Qin law slips can come later if teachers want a third.
3. **Chinese original:** on the card, folded under the translation.
4. **Opening vote:** kept as a plain predict on the lesson's question, locked and compared in step 6. Matthew: predict is not bad in History; what he disliked was predict-first being the default without asking what historical inquiry needs. Here it earns its place (it makes the change in thinking visible), so it stays named as a predict, not reframed to look like something else.
