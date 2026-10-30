# Roadmap: History

`content/history/` (not created yet). Set up 30 Oct 2026 so a History chat can start. Node content: waypoints-kit `data/history/`, copied in `data/curriculum/history.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `history/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
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

## Proposed (30 Oct 2026; nothing built): course `history/sources-7`, *Who made it, and why?*

**Why this standard first.** "How we know" (K08, S03, S04) is the gateway. Of the three, **AC9HH7S03 Identify source origin and purpose** goes first: S04's prior is S03, and K08's priors are K01 and K07 (K07 is on the deep-time pointer page, so K08 is better after students can already question a source). S03's prior is AC9HS6S04, which is the catch-up named above. Suggested order for the gateway: S03 → S04 → K08, each its own course in a "How we know" pathway.

Usually Year 7 (teacher note only). Lesson shape: `needs-and-wants` (`language: maths`, predict, sort, worked example with Nib's planted mistake, vary, practise, Make in the student's own book with a `reflect` tick, then typical and wider steps; class plan; no clips, no board). Sources are shown as **source cards** in the lesson text (a short heading, what it is, and either a plain summary we write or a short public-domain translation; a CC-licensed photo with credit where it helps). No new widget.

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

Your calls:
1. **Primary or secondary (S02 n1).** This list of History's own skills starts at S03, so S02 sits with the shared inquiry course. But S02 n1 (primary means from the time of the event, not old) is a hinge that S03 and S04 lean on, and it is History's meaning of the words. Options: (a) leave it to the inquiry course and link it as "Build up to this" from lesson 1; (b) an optional warm-up lesson in this course, tagged S02 n1 (like English's warm-up unit); (c) a small `history/finding-sources-7` course built first. I lean (b).
2. **Order of the gateway:** S03 → S04 → K08 as above, or K08 first (the humanities plan's "Dating the past" sat inside the How we know unit).
3. **Pictures:** text source cards only, or add a CC-licensed photo (Terracotta Army, a bamboo slip) with credit.
4. **Course title:** "Who made it, and why?" or plainer, such as "Questioning a source".

## Starter prompt for the History chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/history.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 History course in `roadmap/history.md`, commit and push, and wait for me before building.
