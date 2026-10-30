# Roadmap: Humanities inquiry (shared skills course)

One course shared by Economics and Business, Civics and Citizenship, Geography and History for the inquiry skills that are near-identical across them (decided 30 Oct 2026, Matthew). Where it lives (its own small subject, or under one of the four) is the first thing for its chat to propose.

## Rules

- Same rules as the subjects, including First Nations content (`roadmap/shared.md` › First Nations content, refined: teacher notes from ACARA's elaborations; in student lessons only the custodians' own words, linked) and pace-agnostic.
- Examples come from Year 7 content only, so skill lessons also build what the class needs to know. Mark the subject and its courses **Preview** (pilot, not finished) and show planned lessons as "Coming later" (Project doc humanities-y7-plan › Placeholders; log the shared code change in `roadmap/shared.md`).
- Before Year 7 catch-up lessons (Year 6 HASS) go with the first course where a prerequisite link needs one (Project doc humanities-y7-plan › Before Year 7).
- Framing: dip in, not done first. Lessons are short, linked from the subject lessons that use each skill ("Build up to this"); each has an "In each subject" note on what differs (History asks why and how we know, Geography where and why there, Economics choices and trade-offs, Civics who decides). Catch-ups: "Questions that guide an inquiry" (AC9HS6S01) and "Find it and sort it" (AC9HS6S02).
- Each lesson names every node it covers as a list (`node: [AC9HE7S01 n1, AC9HC7S01 n1, ...]`), so all four curriculum maps and searches find it. Where one subject's node asks for more than the others, that extra goes in that subject's own lesson, not here.
- Practise on made-up material from all four subjects in turn (a tuckshop, a council, a river catchment, a museum object), so every subject sees itself.
- The full inquiry (a real question, real sources, a finished response) is class work: a printable inquiry skeleton per subject, with the teacher's topic, linking these lessons at the point of need, as English does for Literature.

## Year 7 standards it covers

| Subject | Code | Title |
|---|---|---|
| Economics and Business | AC9HE7S01 | Develop inquiry questions |
| Economics and Business | AC9HE7S02 | Locate and organise information |
| Economics and Business | AC9HE7S05 | Create descriptions and explanations |
| Civics and Citizenship | AC9HC7S01 | Developing inquiry questions |
| Civics and Citizenship | AC9HC7S02 | Locating and organising information |
| Civics and Citizenship | AC9HC7S05 | Creating civic descriptions, explanations and arguments |
| Geography | AC9HG7S01 | Develop geographical inquiry questions |
| Geography | AC9HG7S02 | Collect, organise and represent geographical data |
| Geography | AC9HG7S06 | Create geographical descriptions and explanations |
| History | AC9HH7S01 | Develop historical questions |
| History | AC9HH7S02 | Locate primary and secondary sources |
| History | AC9HH7S08 | Create historical arguments |

## Proposed (30 Oct 2026; nothing built, waiting for Matthew)

Source: the twelve standards above in `data/curriculum/{economics,civics,geography,history}.json` (36 nodes) and their Year 6 priors in `hass.json`. Where this differs from the Project doc humanities-y7-plan, it follows `shared.md` › Decided: humanities (the shared core is ask, find, share; making sense and concluding stay with the subjects).

### 1. Where the four subjects overlap and differ

**Asking questions (S01, all four; n1 is a hinge in every subject).**

| Move | Econ | Civics | Geog | History | Same or different |
|---|---|---|---|---|---|
| Can this be investigated? | S01 n1 H | S01 n1 H | S01 n1 H | S01 n1 H | **Same move.** Each subject names a different "bad" question: Econ closed or unanswerable, Civics too broad, History recall, Geography not geographical. |
| Build it from the subject's big ideas | S01 n2 | S01 n2 | S01 n2 H | S01 n2 H | **Same move, different concept lists:** Econ scarcity, opportunity cost, market, income; Civics power, rights, democracy, law; Geog place, space, environment, interconnection, sustainability, scale, change; History cause, continuity and change, perspective, significance. |
| Right size, and what evidence would answer it | — | S01 n2 (part) | S01 n3 (plan, collection method) | S01 n3 | **Same core.** Geography adds a collection method and planning tools; Economics has no planning node. |
| Start from the news | ("contemporary" in the descriptor) | S01 n3 | — | — | Civics only as a node; Economics leans on it. |

**Finding information (S02, all four; the subjects split more here).**

| Move | Econ | Civics | Geog | History | Same or different |
|---|---|---|---|---|---|
| Kinds of source and what each is good for | — | S02 n1 H | (S02 n1: fieldwork) | (S02 n1 H: primary or secondary) | **Different.** Civics' types (government site, news, report, statistics) are general; History's primary/secondary and Geography's fieldwork are disciplinary and stay in those subjects. |
| Search on purpose | S02 n1 H | S02 n2 | S02 n2 (locate) | S02 n2 (repositories) | **Same move.** Overlaps ICT `ict/information` › search-like-you-mean-it. |
| Keep what answers the question | S02 n2 H | S02 n3 (select) | S02 n2 (relevance, reliability) | — | **Same move.** Geography adds reliability (light here). |
| Organise it | S02 n3 (table or graph) | S02 n3 (group similar ideas) | (S02 n3 H, n4: geospatial) | (S02 n3: sort by source type) | **Shared core:** group by sub-question, pick a table or graph. Maps and History's source categories stay in their subjects. |

**Sharing what you found (Econ S05, Civics S05, Geog S06, History S08).**

| Move | Econ | Civics | Geog | History | Same or different |
|---|---|---|---|---|---|
| Use the subject's words properly | S05 n1 H (opening for an audience) | S05 n1 H | S06 n1 | S08 n1 H (description with evidence) | **Same move.** |
| Explain with evidence | S05 n2 (data in a format) | S05 n2 | S06 n2 H | S08 n2 H (why or how question) | **Same move** (claim, evidence, explain). |
| Argue a position | — | S05 n3 | — | S08 n3 | **Two subjects only.** Economics' response and Geography's response are close cousins (their S04/S05 skills). |
| Show it with a map or graph | (S05 n2) | — | S06 n3, n4 | — | **Geography's own** (S06 n3, n4 integration). |

**Other overlaps, outside the decided core** (the plan doc had the first and third in this course; `shared.md` keeps them with the subjects):

- Reading data for trends and cause and effect: Econ S03 n2–n3 and Geog S03 n2–n3.
- Perspectives in a source: Civics S03 n1–n2 and History S06 n1 (and S03 n2 purpose).
- Choosing a response and its costs and impacts: Econ S04, Geog S05, Civics S04 n3.

My view: keep them in the subjects. The words match but the work differs more than in the core (a price trend is not a spatial pattern; a civic perspective is not a past one). Each subject lesson can mention its cousin. Revisit after the pilot if teachers ask.

### 2. The course

**Home: a small subject of its own,** `content/hass/`, shown as **Humanities skills** (Preview), course `hass/inquiry-7` *Investigate like a humanities expert* (title to taste), usually Year 7. Reasons: it belongs equally to four subjects, so putting it under one makes three feel like guests; the folder name matches the Year 6 HASS data the catch-ups use; later years add `hass/inquiry-8` and so on (year-level courses, as History). Alternative: under History, which teachers might expect, but Economics would then link into History for its skills.

**Shape:** ICT's lesson shape with `shape: primer` (Think first, The idea, Check, Apply, Vary), `language: science`, no board, no clips. Checks are `sort`, `match`, `question` and `bug` (Nib's slip) on made-up material. Writing (questions, a plan, a paragraph) is done in the student's own book or document with a `reflect` tick and a model to compare against, per English's no-write-boxes rule. Each lesson ends with an **In each subject** table (four rows: what this move looks like in that subject, and that subject's own next lesson, "Coming later" until built).

**Four running cases** from Year 7 units, one per subject, all made up, each moving forward a little in every lesson, so a student sees one inquiry grow while still dipping into any single lesson (each lesson re-states the case in one line):

- Economics: the school tuckshop can't stock everything (Scarcity and choice).
- Civics: a council wants to close a road outside the school (levels of government).
- Geography: a town on a river catchment in a dry year (Water as a resource).
- History: a Han dynasty object in a museum case (How we know; the China worked example).

Width (never acceleration): typical = the same move on a second case or the class's own topic; wider = the same issue asked as two subjects' questions and compared.

**Units and lessons (9 lessons + 2 optional warm-ups).** Gateway order: Asking before Finding; Sharing is free order. Every lesson lists all its nodes in `node:`.

| Unit | Lesson | Nodes | Notes |
|---|---|---|---|
| Warm-up (optional, Year 6) | Questions that guide an inquiry | AC9HS6S01 | Catch-up, as English cohesion's warm-up unit |
| | Find it and sort it | AC9HS6S02 | Catch-up |
| **Asking questions** (gateway) | 1 Can this be investigated? | HE7S01 n1, HC7S01 n1, HG7S01 n1, HH7S01 n1 | Four hinges: check before moving on, with `smaller:`. Sort investigable / recall / too broad / opinion only, then "which subject would ask this?" (covers what makes a question geographical or historical) |
| | 2 Build a question from a big idea | HE7S01 n2, HC7S01 n2, HG7S01 n2, HH7S01 n2 | Concept bank per subject; pick the better of two questions (hinge check for Geog and History); write two in your book |
| | 3 Right-sized, and what would answer it | HH7S01 n3, HG7S01 n3, HC7S01 n3 | Too big / too small / right; match question to evidence needed; one-row plan. Civics' news-to-question as a step everyone does |
| **Finding information** (gateway, after Asking) | 4 Where to look, and how to search | HC7S02 n1, HC7S02 n2, HE7S02 n1, HG7S02 n2, HH7S02 n2 | Two hinges. Match source type to what it gives; better search words. "Build up to this": ICT search-like-you-mean-it. History's primary/secondary and Geography's fieldwork named in the subject table only |
| | 5 Keep what answers your question | HE7S02 n2, HC7S02 n3, HG7S02 n2 | Hinge (Econ). Nib keeps the interesting but irrelevant card |
| | 6 Organise what you found | HE7S02 n3, HC7S02 n3 | Group notes under sub-questions; choose table, graph or timeline. Maps hand to Geography |
| **Sharing what you found** | 7 Use the subject's words | HE7S05 n1, HC7S05 n1, HG7S06 n1, HH7S08 n1 | Three hinges. Nib uses a term for show |
| | 8 Explain with evidence | HE7S05 n2, HC7S05 n2, HG7S06 n2, HH7S08 n2 | Two hinges. Claim, evidence, explain; mention English's "Inside a paragraph" as a link only |
| | 9 Make an argument | HC7S05 n3, HH7S08 n3 | Position, two pieces of evidence, the subject's words; plan here, write in Docs |

Covers 29 of the 36 nodes. **Stays in the subjects (7):** HG7S02 n1, n3, n4; HG7S06 n3, n4; HH7S02 n1, n3 (History's "Primary or secondary?"). The plan doc put HH7S02 n3 here; it moves to History because it sorts by source type. Build now (intro units, per the plan): Asking questions and Finding information plus both warm-ups, so 8 lessons; Sharing shows as Coming later.

**Shared code it needs:** `hass` added to `CHECKED`; a check that a lesson's `node:` list may name several subjects and that each subject's curriculum map and search pick the lesson up (they read codes, so it should work; confirm at build). Logged in `shared.md` when done.

### 3. Inquiry skeleton format

One printable skeleton per subject for the full investigation, done in class on the teacher's topic. Proposed as a small extension of **Project briefs** (`briefs.yml`, AUTHORING › Project briefs), which already print a task sheet, pull each node's own success criteria from the data and are validated:

- File: `content/hass/inquiry-7/skeletons.yml` (all four together, one chip on the course page, linked from each subject's page and teacher guide).
- A brief with `kind: skeleton` takes `stages:` (4 to 6) in place of `milestones:`. Each stage has `title`, `you_will` (one line), `nodes` (that subject's nodes for the stage; their criteria print as "Good looks like" ticks) and `lessons` (shared lessons and the subject's own; planned ones print as "Coming later").
- Student layer: the topic and question lines (blank to fill), then per stage "You will", "Good looks like" ticks and "Need help? Try…" lesson names. Teacher layer (guide only): when in a unit it fits, which stages are on the site and which are class, sources to supply, the First Nations note where the topic needs one.
- Optional: on the page, the teacher can type the topic and key question before printing (kept in the link's `#` part, like My path; nothing stored or sent).

Stages per subject (each follows its own skills standards, so differences are visible):

- **Economics:** Ask (S01) → Find (S02) → Make sense of it (S03) → Respond, weighing costs and benefits (S04) → Explain it (S05).
- **Civics:** Ask (S01) → Find (S02) → Compare perspectives (S03) → Choose a way to take part (S04) → Argue it (S05).
- **Geography:** Ask and plan (S01) → Collect: fieldwork and secondary (S02) → Analyse (S03) → Conclude (S04) → Act (S05) → Show and explain (S06).
- **History:** Ask (S01) → Locate sources (S02) → Question the sources (S03, S04, S06) → Causes, change and interpretations (S05, S07) → Argue it (S08).

### 4. Calls for Matthew

1. **Home:** its own small subject `content/hass/` "Humanities skills" (recommended), or under History?
2. **Scope:** ask, find, share only (as decided), with data, perspectives and responses kept in the subjects (recommended); or add those as a fourth unit, as the plan doc had?
3. **Civics' news node (HC7S01 n3)** inside shared lesson 3 for everyone (recommended), or Civics' own lesson?
4. **Running cases:** one made-up case per subject threaded through every lesson (recommended), or fresh material per lesson?
5. **Skeleton:** extend Project briefs with `kind: skeleton` and `stages:` (recommended), or a plain teacher page per subject? And the optional type-your-topic-before-printing field: yes or later?
6. **Build now:** warm-ups plus Asking and Finding (8 lessons) and the four skeletons, or skeletons later?

## Starter prompt for the inquiry chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/humanities-inquiry.md`. Open the four subjects' Year 7 skills nodes in `data/curriculum/` and map where they overlap and where they differ. Propose the shared course and the inquiry skeleton format in `roadmap/humanities-inquiry.md`, commit and push, and wait for me before building.
