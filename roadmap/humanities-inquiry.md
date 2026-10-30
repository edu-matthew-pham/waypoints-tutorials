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

## Decided (30 Oct 2026, Matthew said yes to all six calls)

1. Home: its own small subject `content/hass/`, "Humanities skills" (Preview).
2. Scope: ask, find and share only; data, perspectives and responses stay in the subjects.
3. Civics' news-to-question node (HC7S01 n3) is a step in shared lesson 3 for everyone.
4. One made-up running case per subject (tuckshop, council road, river town, Han museum object), re-stated in one line in each lesson.
5. Skeletons extend Project briefs (`kind: skeleton`, `stages:`). Type-your-topic-before-printing is later, after the pilot.
6. Build now: Asking and Finding (6 lessons) and the four skeletons; Sharing shows as Coming later.
7. **Amended (30 Oct, Matthew, after the Before Year 7 chat):** the Year 6 catch-ups are not in this course. One course, *Before Year 7: HASS*, now owned by the shared-inquiry chat (Matthew, 30 Oct), holds them (units: Inquiry skills = Questions that guide an inquiry, Find it and sort it, Can you trust this source?; Economics = Spending choices; Civics = Three levels of government). Built 30 Oct: the shell `content/hass/before-year-7/` and its first two lessons (Questions that guide an inquiry, Find it and sort it). Can you trust this source? comes with History's intro unit, Spending choices with Economics, Three levels of government with Civics. Lessons 1 and 4 here can name the first two as "Do first".

## Proposed (30 Oct 2026)

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

**Units and lessons (9 lessons).** Gateway order: Asking before Finding; Sharing is free order. Every lesson lists all its nodes in `node:`.

| Unit | Lesson | Nodes | Notes |
|---|---|---|---|
| **Asking questions** (gateway) | 1 Can this be investigated? | HE7S01 n1, HC7S01 n1, HG7S01 n1, HH7S01 n1 | Four hinges: check before moving on, with `smaller:`. Sort investigable / recall / too broad / opinion only, then "which subject would ask this?" (covers what makes a question geographical or historical) |
| | 2 Build a question from a big idea | HE7S01 n2, HC7S01 n2, HG7S01 n2, HH7S01 n2 | Concept bank per subject; pick the better of two questions (hinge check for Geog and History); write two in your book |
| | 3 Right-sized, and what would answer it | HH7S01 n3, HG7S01 n3, HC7S01 n3 | Too big / too small / right; match question to evidence needed; one-row plan. Civics' news-to-question as a step everyone does |
| **Finding information** (gateway, after Asking) | 4 Where to look, and how to search | HC7S02 n1, HC7S02 n2, HE7S02 n1, HG7S02 n2, HH7S02 n2 | Two hinges. Match source type to what it gives; better search words. "Build up to this": ICT search-like-you-mean-it. History's primary/secondary and Geography's fieldwork named in the subject table only |
| | 5 Keep what answers your question | HE7S02 n2, HC7S02 n3, HG7S02 n2 | Hinge (Econ). Nib keeps the interesting but irrelevant card |
| | 6 Organise what you found | HE7S02 n3, HC7S02 n3 | Group notes under sub-questions; choose table, graph or timeline. Maps hand to Geography |
| **Sharing what you found** | 7 Use the subject's words | HE7S05 n1, HC7S05 n1, HG7S06 n1, HH7S08 n1 | Three hinges. Nib uses a term for show |
| | 8 Explain with evidence | HE7S05 n2, HC7S05 n2, HG7S06 n2, HH7S08 n2 | Two hinges. Claim, evidence, explain; mention English's "Inside a paragraph" as a link only |
| | 9 Make an argument | HC7S05 n3, HH7S08 n3 | Position, two pieces of evidence, the subject's words; plan here, write in Docs |

Covers 29 of the 36 nodes. **Stays in the subjects (7):** HG7S02 n1, n3, n4; HG7S06 n3, n4; HH7S02 n1, n3 (History's "Primary or secondary?"). The plan doc put HH7S02 n3 here; it moves to History because it sorts by source type. Build now: Asking questions and Finding information, 6 lessons; Sharing shows as Coming later. The Year 6 catch-ups (AC9HS6S01, S02) are in Before Year 7: HASS, not here (decision 7).

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
6. **Build now:** Asking and Finding (6 lessons; the warm-ups moved to Before Year 7: HASS) and the four skeletons. Status 30 Oct: the six lessons and the two Before Year 7 catch-ups are built; skeletons still to do.

## Starter prompt for the inquiry chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/humanities-inquiry.md`. Open the four subjects' Year 7 skills nodes in `data/curriculum/` and map where they overlap and where they differ. Propose the shared course and the inquiry skeleton format in `roadmap/humanities-inquiry.md`, commit and push, and wait for me before building.

## Built (30 Oct 2026): Sharing what you found

Matthew requested the Sharing unit after the first six lessons; this supersedes decision 6's earlier hold on Sharing.

- Added lessons 7–9: `use-the-subjects-words`, `explain-with-evidence`, `make-an-argument`, with the planned cross-subject node lists. Kept the planned `shape: primer`: these teach communication through comparison, evidence reasoning and writing, rather than a running simulation. Sharing remains free order and pace-agnostic.
- Each has invented source cards, a model, checks with feedback and smaller support, writing in the student's own document, optional width, an In each subject table, teacher notes and a class plan. No clips, boards or writing boxes. Planning and writing are separate argument steps so the generated slides fit.
- Required writing preserves the different floors: audience and two economic terms; three civic terms; three geographical terms plus a concept; historical description with two terms and named evidence; two connected findings for Geography and History explanations; two distinct supported civic points and a historical counter-consideration. Historical source analysis and interpretations (S03/S07) are assumed taught in class, not replaced here. Real History work requires verified sources and a historical knowledge check.
- The Han label belongs to the invented museum case, not a verified attribution or finding about ancient society. All figures, councils, places and source cards are explicitly invented. No First Nations explanation is authored.
- Updated the course overview, Humanities teacher guide and the previous lesson's teacher handoff. One single-line misconception added: `repeated-position-is-evidence`.
- Checks: `npm ci`, `npm run validate`, `WP_NO_MAKECODE=1 npm run build`, `npm run check-nodes`; no new-lesson warnings. Headless Chromium checks wrong/right answers, matching, predictions, Nib's bug, smaller support, reflect ticks, authored links, desktop/390 px layouts, guides, course, teacher overview and all four subjects' curriculum pointer links. All three generated decks are checked with `check-decks`. Existing unrelated validation/font warnings remain.
- A pre-existing shared hint link to `learning/how-you-learn/cards/#when-youre-stuck` does not resolve in the local build; this batch checks its authored links and leaves that shared route to the tools chat. No shared tools or workflows changed.
- Not tried with classes; judgement of the student's writing remains with a partner or teacher. No clips rendered or requiring recording. Needs a whole-site or quick publish for the overview and curriculum pointers; pushing main publishes nothing. Skeletons remain a separate task.

## Stage 1 Plan (30 Oct 2026, awaiting Matthew's "go"): Four inquiry skeletons (`kind: skeleton`) and "Coming later" planned lessons in a built course

No code or skeleton content has been written yet. Below is the complete plan for Stage 2.

### 1. Exact `content/hass/inquiry-7/skeletons.yml` format (with worked example for Economics and Business)

`tools/briefs.mjs` (`loadBriefs`) will read either `briefs.yml` or `skeletons.yml` in a course folder. When a file is named `skeletons.yml` (or a brief sets `kind: skeleton`), each brief is treated as an inquiry skeleton:
- Top-level keys on each skeleton entry in `content/hass/inquiry-7/skeletons.yml`:
  - `id`: `'economics' | 'civics' | 'geography' | 'history'` (becomes `/hass/inquiry-7/briefs/<id>/`)
  - `kind`: `'skeleton'`
  - `subject`: display name of the subject (`"Economics and Business"`, `"Civics and Citizenship"`, `"Geography"`, `"History"`)
  - `title`: student-facing sheet title
  - `goal`: Markdown introduction (1–2 short paragraphs explaining how to use the sheet alongside the teacher's class topic; all writing is in the student's own book or document)
  - `handin`: 1 to 4 deliverables the student hands in at the end of the class inquiry
  - `stages`: 4 to 6 ordered stages (replacing `milestones:` and top-level `nodes:`). Each stage has:
    - `id`: short stage slug (`ask`, `find`, `analyse`, `respond`, `explain`, etc.)
    - `title`: numbered stage heading (`"1. Ask an investigable question"`)
    - `you_will`: one sentence stating what the student does in their own book/document in this stage
    - `nodes`: array of `"AC9... nN"` strings for that subject and stage (their `criteria` from `data/curriculum/<subject>.json` render automatically as tick-boxes under **"Good looks like"**)
    - `lessons`: array of lesson links for **"Need help? Try…"**. Each item is either:
      - a built lesson path string: short slug within `hass/inquiry-7` (e.g. `"can-it-be-investigated"`) or full `<subject>/<course>/<lesson>` path for another subject's built skill lesson (e.g. `"history/sources-7/origin-and-content"`, `"civics/democracy-7/ways-to-take-part"`), OR
      - a planned lesson object: `{ title: "Read economic data for trends and cause and effect", soon: true }` (rendered as greyed `Coming later` text, not a broken link).
    - `teacher`: Markdown teacher note for this stage (whether the stage is supported by site tutorials or run as class/field/source work, what material to provide).
  - `teacher`: top-level Markdown teacher notes (when in a Year 7 unit the skeleton fits, how to adapt it, and the First Nations teacher note where a class topic touches First Nations content).

#### Worked example (`economics` entry in `content/hass/inquiry-7/skeletons.yml`)

```yaml
briefs:
  - id: economics
    kind: skeleton
    subject: "Economics and Business"
    title: "Year 7 Economics and Business inquiry"
    goal: |
      Use this outline to plan and carry out a class investigation into an **economic or business issue** chosen with your teacher (for example, how a local business, school service or council allocates limited resources).

      Write your question, notes, data tables and final explanation in **your own book or document**, not on this page. Print this sheet or keep it open to tick off each stage as you go.
    handin:
      - "Your key inquiry question and a short note on what evidence will answer it."
      - "Your selected notes and data from at least two sources, organised in a table or chart."
      - "A cost-benefit table comparing at least two options for responding to the issue."
      - "A written description and explanation that uses economics and business terms and references your sources."
    stages:
      - id: ask
        title: "1. Ask an investigable question"
        you_will: "Write a focused question about your class's economic or business issue that uses an economics concept (such as scarcity, opportunity cost, market or business purpose) and can be answered with evidence."
        nodes: ["AC9HE7S01 n1", "AC9HE7S01 n2"]
        lessons:
          - "can-it-be-investigated"
          - "build-from-a-big-idea"
          - "right-sized"
        teacher: "Supported on the site by the three Asking questions lessons. Help students narrow broad 'Should...' questions to a specific local decision or business case with accessible data."
      - id: find
        title: "2. Find and organise information"
        you_will: "Locate at least two relevant sources or datasets, keep only the facts and figures that answer your question, and organise them into a clear table or graph."
        nodes: ["AC9HE7S02 n1", "AC9HE7S02 n2", "AC9HE7S02 n3"]
        lessons:
          - "where-to-look"
          - "keep-what-answers"
          - "organise-it"
        teacher: "Supported on the site by the three Finding information lessons (and ICT's Working with data if students use a spreadsheet). Supply a small starter pack of 2 to 3 local sources or datasets so class time goes into selecting and organising rather than open-ended web searching."
      - id: interpret
        title: "3. Make sense of the data"
        you_will: "Read your table or graph to spot a pattern, trend or cause-and-effect relationship, and point to the exact figures that show it."
        nodes: ["AC9HE7S03 n1", "AC9HE7S03 n2", "AC9HE7S03 n3"]
        lessons:
          - { title: "Economics skills: Read economic data for trends and cause and effect", soon: true }
        teacher: "Class work (Economics data skills course is planned). Give students one multi-variable table or chart related to your topic and model the difference between describing a number and inferring an economic trend or cause-and-effect link."
      - id: respond
        title: "4. Weigh costs and benefits to choose a response"
        you_will: "Propose a response to the issue, list both financial and non-financial costs and benefits of your option and an alternative, and explain why your choice comes out ahead."
        nodes: ["AC9HE7S04 n1", "AC9HE7S04 n2"]
        lessons:
          - "economics/scarcity-7/putting-together"
          - { title: "Economics skills: Costs, benefits and choosing a response", soon: true }
        teacher: "Class work, building on Lesson 4 of Scarcity and opportunity cost (`putting-together`). Check that students include at least one non-financial cost or benefit (such as time, fairness or environmental impact) alongside dollar figures, and name the opportunity cost of their chosen option."
      - id: explain
        title: "5. Explain what you found"
        you_will: "Write a clear opening for your audience and an explanation that uses economics and business terms accurately and references your data and sources."
        nodes: ["AC9HE7S05 n1", "AC9HE7S05 n2"]
        lessons:
          - "use-the-subjects-words"
          - "explain-with-evidence"
        teacher: "Supported on the site by Sharing what you found (Lessons 7 and 8; Lesson 9 is optional if students are writing a persuasive recommendation). Students write in their own book or document and use the 'Good looks like' criteria below for self- and peer-checking."
    teacher: |
      **When to use this skeleton:** In the second half of a Year 7 Economics and Business unit (after *Scarcity and opportunity cost* or *Types of businesses*), over 2 to 4 lessons of class inquiry time.

      **What is on the site vs class work:** Stages 1, 2 and 5 are supported directly by the shared *Investigate like a humanities expert* lessons (`hass/inquiry-7`). Stages 3 and 4 are class-led using your local case and data (with cost-benefit reasoning introduced in `economics/scarcity-7/putting-together`).

      **First Nations note:** Where your class inquiry investigates First Nations Australian businesses, exchange networks or sustainable resource management, start from ACARA's elaborations for `AC9HE7K01`–`AC9HE7K03` (see the Economics teacher notes) and use local, community-approved material or a First Nations business's own published words.
```

---

### 2. What the student page and the teacher guide each show per stage

#### Student list page (`/hass/inquiry-7/briefs/`)
- When a course's brief set is all `kind: skeleton`, the course chip reads **Inquiry skeletons** (instead of `Project briefs`), and `/hass/inquiry-7/briefs/` is titled **`Investigate like a humanities expert: inquiry skeletons`**, with a lede explaining that each printable sheet maps out a full Year 7 investigation in that subject and links to the short skill lessons at each stage.
- Four cards (`Economics and Business`, `Civics and Citizenship`, `Geography`, `History`), each showing `b.title`, `<small>${esc(b.subject)} · ${b.stages.length} stages</small>`, and the first sentence of `b.goal`.

#### Student skeleton page (`/hass/inquiry-7/briefs/<id>/`, rendered by `briefPageBody` in `tools/briefs-view.mjs`)
1. **Header:** Breadcrumb `← Investigate like a humanities expert: inquiry skeletons`, `Print` button (`.bfprint`), `<h1>${esc(b.title)}</h1>`, and subtitle `<p class="pjafter">Inquiry skeleton · ${esc(b.subject)}</p>`.
2. **Goal:** `<div class="pjgoal">${md(b.goal)}</div>`.
3. **My inquiry box (`.pjbox.bfbox.plain.wpt-skel-topic`):** Printable blank lines for paper/book use (no `<input>` or `<textarea>` write boxes on the page):
   - **Topic set by my teacher:** `__________________________________________________`
   - **My key inquiry question:** `__________________________________________________`
4. **One `<section class="pjbox bfbox wpt-skel-stage">` per stage in `b.stages`:**
   - `<h2>${esc(stage.title)}</h2>`
   - `<p class="wpt-skel-do"><b>You will:</b> ${esc(stage.you_will)}</p>`
   - **Good looks like** (`stage.nodes` resolved via cross-subject `briefNodes`): each node's `<p class="bfnode">${esc(n.label)}</p>` followed by its `criteria` as a printable tick-box list (`<ul><li>...</li></ul>`).
   - **Need help? Try…** (`stage.lessons`): a compact list `.wpt-skel-try` at the bottom of the stage card:
     - Built lessons link to the lesson (`<a href="...">${esc(label)}</a>`, prefixed with `<Subject> › <Course>: ` when outside `hass/inquiry-7`).
     - Planned lessons show `<span class="wpt-skel-soon">${esc(item.title)} <em>(Coming later)</em></span>`.
5. **Hand in box (`.pjbox.bfbox.plain`):** `<h2>Hand in</h2>` with `b.handin` as a bullet list.

#### Teacher guide (`/teach/hass/inquiry-7/#briefs`, rendered in `tools/build-site.mjs`)
- Heading `<h2>Inquiry skeletons</h2>` with a link to `/hass/inquiry-7/briefs/`.
- One `<details class="primer">` per skeleton containing:
  - `b.goal` and the **Hand in** list.
  - **Stages breakdown:** for each stage, its title, `you_will`, the exact curriculum nodes and criteria it evidences (`AC9... node n: criteria`), the linked lessons (built links and `Coming later` items), and the stage's `stage.teacher` note.
  - Top-level `b.teacher` notes (when to run it, what sources to supply, First Nations guidance).

---

### 3. All four skeletons: stages, nodes and linked lessons ("Need help? Try…")

| Skeleton (`id`) | Stage | Nodes (`data/curriculum/<subject>.json`) | "Need help? Try…" (`stage.lessons`) |
|---|---|---|---|
| **Economics and Business** (`economics`) | 1. Ask an investigable question | `AC9HE7S01 n1`, `AC9HE7S01 n2` | `can-it-be-investigated`, `build-from-a-big-idea`, `right-sized` |
| | 2. Find and organise information | `AC9HE7S02 n1`, `AC9HE7S02 n2`, `AC9HE7S02 n3` | `where-to-look`, `keep-what-answers`, `organise-it` |
| | 3. Make sense of the data | `AC9HE7S03 n1`, `AC9HE7S03 n2`, `AC9HE7S03 n3` | *Economics skills: Read economic data for trends and cause and effect (Coming later)* |
| | 4. Weigh costs and benefits to choose a response | `AC9HE7S04 n1`, `AC9HE7S04 n2` | `economics/scarcity-7/putting-together`, *Economics skills: Costs, benefits and choosing a response (Coming later)* |
| | 5. Explain what you found | `AC9HE7S05 n1`, `AC9HE7S05 n2` | `use-the-subjects-words`, `explain-with-evidence` |
| **Civics and Citizenship** (`civics`) | 1. Ask a focused civic question | `AC9HC7S01 n1`, `AC9HC7S01 n2`, `AC9HC7S01 n3` | `can-it-be-investigated`, `build-from-a-big-idea`, `right-sized` |
| | 2. Find and group civic information | `AC9HC7S02 n1`, `AC9HC7S02 n2`, `AC9HC7S02 n3` | `where-to-look`, `keep-what-answers`, `organise-it` |
| | 3. Compare perspectives on the issue | `AC9HC7S03 n1`, `AC9HC7S03 n2`, `AC9HC7S03 n3` | *Civics skills: Analysing perspectives and challenges in civic sources (Coming later)* |
| | 4. Choose a way to take part | `AC9HC7S04 n1`, `AC9HC7S04 n2`, `AC9HC7S04 n3` | `civics/democracy-7/ways-to-take-part`, `civics/democracy-7/formal-and-active-citizenship`, *Civics skills: Choosing a participation strategy (Coming later)* |
| | 5. Explain and argue your position | `AC9HC7S05 n1`, `AC9HC7S05 n2`, `AC9HC7S05 n3` | `use-the-subjects-words`, `explain-with-evidence`, `make-an-argument` |
| **Geography** (`geography`) | 1. Ask and plan a geographical inquiry | `AC9HG7S01 n1`, `AC9HG7S01 n2`, `AC9HG7S01 n3` | `can-it-be-investigated`, `build-from-a-big-idea`, `right-sized` |
| | 2. Collect and represent data (fieldwork and secondary) | `AC9HG7S02 n1`, `AC9HG7S02 n2`, `AC9HG7S02 n3`, `AC9HG7S02 n4` | `where-to-look`, `keep-what-answers`, `organise-it`, *Geography skills: Fieldwork and maps (Coming later)* |
| | 3. Analyse patterns, trends and relationships | `AC9HG7S03 n1`, `AC9HG7S03 n2`, `AC9HG7S03 n3`, `AC9HG7S03 n4` | *Geography skills: Interpreting geographical data and patterns (Coming later)* |
| | 4. Draw geographical conclusions | `AC9HG7S04 n1`, `AC9HG7S04 n2`, `AC9HG7S04 n3` | `geography/water-7/classify-connect-change`, *Geography skills: Drawing conclusions about impacts (Coming later)* |
| | 5. Propose strategies for action | `AC9HG7S05 n1`, `AC9HG7S05 n2`, `AC9HG7S05 n3`, `AC9HG7S05 n4` | *Geography skills: Strategies for action and weighing values (Coming later)* |
| | 6. Communicate your geographical explanation | `AC9HG7S06 n1`, `AC9HG7S06 n2`, `AC9HG7S06 n3`, `AC9HG7S06 n4` | `use-the-subjects-words`, `explain-with-evidence`, *Geography skills: Communicating with maps and representations (Coming later)* |
| **History** (`history`) | 1. Ask historical questions | `AC9HH7S01 n1`, `AC9HH7S01 n2`, `AC9HH7S01 n3` | `can-it-be-investigated`, `build-from-a-big-idea`, `right-sized` |
| | 2. Locate and sort primary and secondary sources | `AC9HH7S02 n1`, `AC9HH7S02 n2`, `AC9HH7S02 n3` | `history/sources-7/primary-or-secondary`, `where-to-look`, `organise-it` |
| | 3. Question the sources (origin, purpose, usefulness and perspectives) | `AC9HH7S03 n1`, `AC9HH7S03 n2`, `AC9HH7S03 n3`, `AC9HH7S04 n1`, `AC9HH7S04 n2`, `AC9HH7S04 n3`, `AC9HH7S06 n1`, `AC9HH7S06 n2`, `AC9HH7S06 n3` | `history/sources-7/origin-and-content`, `history/sources-7/context-and-purpose`, `history/sources-7/what-can-it-tell-us`, `history/usefulness-7/fact-opinion-and-accuracy`, `history/usefulness-7/accurate-versus-useful`, `history/usefulness-7/weighing-a-source`, *History skills: Past perspectives in sources (Coming later)* |
| | 4. Weigh causes, continuity and interpretations | `AC9HH7S05 n1`, `AC9HH7S05 n2`, `AC9HH7S05 n3`, `AC9HH7S07 n1`, `AC9HH7S07 n2`, `AC9HH7S07 n3` | `history/evidence-7/reading-the-layers`, `history/evidence-7/dna-and-dating`, *History skills: Causes, continuity and historical interpretations (Coming later)* |
| | 5. Build a historical argument | `AC9HH7S08 n1`, `AC9HH7S08 n2`, `AC9HH7S08 n3` | `use-the-subjects-words`, `explain-with-evidence`, `make-an-argument` |

*(Note on History Stage 3 & 4 node density: listing all 9 nodes in Stage 3 and 6 nodes in Stage 4 would print 27+ criteria bullets on one student page. See Section 7 below for a recommendation to list the integration/summary node of each standard on the student sheet — e.g. `AC9HH7S03 n3`, `AC9HH7S04 n3`, `AC9HH7S06 n1`/`n3` — or group criteria cleanly so the printable sheet fits on 2 pages.)*

---

### 4. How cross-subject node and lesson lookup works

1. **Subject-from-code resolution in `tools/briefs.mjs`:**
   - Add a helper `subjectOfCode(code)` in `tools/briefs.mjs` that maps ACARA code prefixes to their curriculum file name:
     - `AC9HE` → `economics`, `AC9HC` → `civics`, `AC9HG` → `geography`, `AC9HH` → `history`, `AC9HS` → `hass`, `AC9TDI` → `systems`, `AC9TDE` → `engineering`, `AC9M` → `maths`, `AC9S` → `science`, `AC9E` → `english`.
   - Update `briefNodes(briefOrStage, cur)`:
     - `cur` may be a single curriculum object `{ descriptors }` (keeping 100% backwards compatibility with existing callers), a `Map`/dictionary of `{ [subject]: curriculum }`, or a lookup function `(subjectOrCode) => curriculum`.
     - When `cur` is a function (or when `briefNodes` uses a passed `loadCurriculum` function), each node ref `"AC9HE7S01 n1"` looks up `cur(subjectOfCode(m[1]))` so a single `skeletons.yml` in `content/hass/inquiry-7/` resolves Economics, Civics, Geography and History nodes seamlessly.
     - When `briefOrStage` has `stages:` (a `kind: skeleton` brief passed as a whole), `briefNodes(brief, cur)` collects the resolved nodes across all stages.
2. **Validation in `tools/briefs.mjs` (`checkBriefs`) and `tools/validate.mjs`:**
   - Regular briefs (`!b.kind`): unchanged (`after:` required in same course, `handin` 1–4, `milestones` 2–4, `nodes` non-empty).
   - Skeleton briefs (`b.kind === 'skeleton'`):
     - `subject`, `title`, `goal` required; `handin` 1–4; `after:` optional (if present, checked).
     - `stages:` required, length 4 to 6 (instead of `milestones:` and top-level `nodes:`).
     - Each stage requires `id`, `title`, `you_will`, `nodes` (non-empty array of valid curriculum nodes verified via cross-subject `briefNodes`), and `lessons` (non-empty array where each string entry must resolve to a built lesson in the same course or across the repo via `allLessons`, and each `{ title, soon: true }` object must have a non-empty `title`).

---

### 5. "Coming later" display for planned lessons in a built course

Currently, `tools/build-site.mjs` (line 790) filters out any unit in a course's `index.md` that has 0 built lessons (`.filter((g) => g.lessons.length)`), and there is no way for a partially built course (such as `content/hass/before-year-7/`, which has built `inquiry` lessons and planned `economics` and `civics` catch-up lessons) to show planned lessons or planned units as **Coming later**.

1. **Authoring in `content/<course>/index.md`:**
   - A unit in `units:` may include `planned: [{ title, summary }]` (or shorthand strings `planned: ["Spending choices"]`), or a course may have a unit in `units:` whose lessons are all in `planned:`.
   - Example in `content/hass/before-year-7/index.md`:
     ```yaml
     units:
       - id: inquiry
         title: Inquiry skills
         summary: "Questions that guide an inquiry, and finding and sorting information."
       - id: economics
         title: Economics and Business
         summary: "What influences spending choices, and strategies for informed choices."
         planned:
           - { title: "Spending choices", summary: "Influences on consumer choices and strategies for informed decisions (AC9HS6K08)." }
       - id: civics
         title: Civics and Citizenship
         summary: "Australia's three levels of government and what each level does."
         planned:
           - { title: "Three levels of government", summary: "The roles and responsibilities of federal, state and territory, and local governments (AC9HS6K06, AC9HS6K07)." }
     ```
2. **Rendering in `tools/build-site.mjs` & `site/progress.js`:**
   - Keep any unit in `groups` that has `g.lessons.length > 0 || (g.planned && g.planned.length > 0)`.
   - After rendering built lessons (`g.lessons.map(row)`), render each planned lesson as a non-interactive placeholder row:
     `<div class="crow wpt-crow-soon"><div class="csum-row"><span class="cnum">·</span><span class="ctitle">${esc(p.title)}</span><span class="cstat">Coming later</span></div>${p.summary ? `<p class="csum">${esc(p.summary)}</p>` : ''}</div>`
   - Because `.wpt-crow-soon` is a `<div>` without `data-keys`, `site/progress.js` (`document.querySelectorAll('.crow[data-keys]')`) ignores planned rows automatically — they never block course completion or skew progress bars.
   - In the teacher strip (`cfacts`), if a course has planned lessons (`plannedCount > 0`), the `Lessons` fact shows `${core}${opt ? ` (and ${opt} optional)` : ''}, ${plannedCount} coming later`.
   - In the course teacher guide (`/teach/<course>/`), planned units/lessons show a short muted line (`Coming later: <titles>`) so teachers see the full planned shape there too.
3. **Validation in `tools/validate.mjs`:**
   - Check that any `planned:` entry on a unit in `content/<course>/index.md` is a non-empty string or an object with a non-empty `title`.

---

### 6. Which files change in Stage 2 (and which are shared)

- **Course & subject content files (Humanities inquiry & links):**
  - `content/hass/inquiry-7/skeletons.yml` *(new — the four skeletons)*
  - `content/hass/before-year-7/index.md` *(adds the planned `economics` and `civics` catch-up units/lessons to demonstrate and test the "Coming later" display in a built course)*
  - `content/humanities-teachers.md`, `content/economics-teachers.md`, `content/civics-teachers.md`, `content/geography-teachers.md`, `content/history-teachers.md` *(update the line saying inquiry outlines are planned to link directly to `/hass/inquiry-7/briefs/` and `/hass/inquiry-7/briefs/<subject>/`)*
- **Shared tool & doc files (flagged for your review):**
  - `tools/briefs.mjs` *(shared: load `skeletons.yml` as well as `briefs.yml`; cross-subject `subjectOfCode` + `briefNodes`; `checkBriefs` support for `kind: skeleton` and `stages:`)*
  - `tools/briefs-view.mjs` *(shared: `briefListBody` and `briefPageBody` rendering for `kind: skeleton` — My inquiry blank lines, per-stage `you_will`, `Good looks like` criteria, and `Need help? Try…` lesson links, plus `.wpt-skel-*` CSS)*
  - `tools/build-site.mjs` *(shared: pass `loadCurriculum` into `writeBriefs` and `briefsGuide` so cross-subject nodes and cross-course lesson links resolve; label the course chip `Inquiry skeletons` when `set.kind === 'skeleton'`; render `planned:` lessons in a built course as `.wpt-crow-soon` "Coming later" rows)*
  - `tools/validate.mjs` *(shared: pass `loadCurriculum` and all `lessons` into `checkBriefs`; validate `planned:` entries on course units)*
  - `AUTHORING.md` *(shared doc: document `kind: skeleton` with `stages:` under Project briefs, and `planned:` on course units)*
  - `roadmap/shared.md` *(shared log: record the `briefs.mjs`/`briefs-view.mjs`/`build-site.mjs`/`validate.mjs` changes)*
  - *Note on `tools/search-index.mjs` and `content/teachers/index.md`:* neither needs code changes unless you want individual skeleton sheets added to the search index (`content/humanities-teachers.md` is already in `search-index.mjs` and `content/teachers/index.md`).

---

### 7. How we will test it in Stage 2

1. `npm run validate` and `npm run check-nodes` (verifying all 4 skeletons, all cross-subject `AC9...` node refs, all built lesson links, and the unit `planned:` entries).
2. `WP_NO_MAKECODE=1 npm run build`.
3. Headless Chromium check (at `1280px` and `390px` viewports, serving `dist/`):
   - `/hass/inquiry-7/` (course chip `Inquiry skeletons`), `/hass/inquiry-7/briefs/` (list of 4 skeletons), and `/hass/inquiry-7/briefs/economics/`, `/civics/`, `/geography/`, `/history/` (checking every stage heading, "You will", "Good looks like" node criteria, "Need help? Try…" links and "Coming later" tags, zero `<input>`/`<textarea>` write boxes, zero console/page errors, zero horizontal overflow).
   - `/teach/hass/inquiry-7/` (checking the teacher guide's `Inquiry skeletons` section and per-stage notes).
   - `/hass/before-year-7/` (checking the new "Coming later" planned lesson rows in a built course, and verifying `progress.js` completion is unaffected).
4. Step 4 self-check from `roadmap/checklist.md`.

---

### 8. Anything in the decisions that should change?

Two small recommendations for your call:
1. **Curating `stage.nodes` in History Stage 3 & Stage 4 (and Geography Stage 2–6) so the printable student sheet fits on 2 pages:**
   - Every Year 7 History skill standard has 3 waypoints (`n1`, `n2`, `n3`), and each waypoint has 2–3 criteria sentences. If History Stage 3 lists all 9 nodes (`S03 n1–n3`, `S04 n1–n3`, `S06 n1–n3`), `briefPageBody` will print **9 subheadings and 27 tick-box sentences** inside a single stage box.
   - **Recommendation:** In each stage, list the **culminating/integration node** (or the 2–3 key nodes) whose criteria sum up the finished stage product (for example, in History Stage 3: `AC9HH7S03 n3` *Integrating OCCP*, `AC9HH7S04 n3` *Integrating accuracy and usefulness*, and `AC9HH7S06 n2` *Attitudes and values of the past* — 3 nodes, 9 tick-boxes total instead of 27), while still linking all the step-by-step lessons under `Need help? Try…`. That keeps every subject's printable skeleton to 2–3 criteria groups per stage and fits cleanly on a double-sided A4 sheet.
2. **Keep the URL at `/hass/inquiry-7/briefs/<id>/` with "Inquiry skeletons" labels:**
   - Using the existing `/briefs/<id>/` path pattern while changing the visible chip and headings to **Inquiry skeletons** (when `kind: skeleton`) avoids duplicating route/nav handling in `build-site.mjs` and gives clean URLs (`/hass/inquiry-7/briefs/economics/`, `/civics/`, `/geography/`, `/history/`).

## Built (30 Oct 2026): Four inquiry skeletons (`kind: skeleton`) and "Coming later" planned-lessons display

Built after Matthew reviewed the Stage 1 plan above and gave his go with four conditions:
1. **Economics Stage 4 wording:** `economics/scarcity-7/putting-together` is linked with `(applies opportunity cost to a decision)` rather than claiming it introduces cost-benefit reasoning; cost-benefit remains the `Coming later` item (`Economics skills: Costs, benefits and choosing a response`), and the stage teacher note reminds teachers that weighing costs and benefits across groups involves a value judgement.
2. **Full `nodes` in the teacher guide + `student_nodes` cap on the student sheet:** History Stages 3 and 4 (9 and 6 nodes) and Geography Stages 2, 3, 5, and 6 (4 nodes each) list every node in `nodes` (all rendered in `/teach/hass/inquiry-7/#briefs`, marked `printed on student sheet` vs `teacher guide`) and set `student_nodes` to the 3 culminating nodes so every stage on the student sheet has at most 9 tick-boxes (4–7 in Economics, 6 in Civics, 6 in Geography, 9 in History).
3. **URL and labels:** Kept at `/hass/inquiry-7/briefs/<id>/` (`economics`, `civics`, `geography`, `history`) with **Inquiry skeletons** on the course chip, list page, student sheets, and teacher guide.
4. **No blank-lines box on the page; Prepare Print worksheet in the teacher guide:** Dropped the custom "My inquiry" blank-lines box from `tools/briefs-view.mjs` (students write their topic and question in their own book or document, stated in one line in `goal:`). Instead, `tools/build-site.mjs` generates `/teach/hass/inquiry-7/skeleton-<id>.md` using Prepare Print syntax (`{{field-24}}`, `{{lines-2}}`, `☐` criteria, `:::teacher-note`) and links `Open in Print · Markdown · Copy address for Prepare` at the top of each skeleton in `/teach/hass/inquiry-7/#briefs`.
5. **"Coming later" planned lessons in a built course:** Added `planned:` support on course units in `tools/build-site.mjs` and `tools/validate.mjs`, and added the planned Economics (*Spending choices*) and Civics (*Three levels of government*) Year 6 catch-up units to `content/hass/before-year-7/index.md`. Planned rows render with `.wpt-crow-soon` (`Coming later` badge, no `data-keys`, so `site/progress.js` completion is unaffected) and `, 2 coming later` in the teacher strip.
6. **Verification:** `npm run validate`, `npm run check-nodes`, `WP_NO_MAKECODE=1 npm run build`, `npm run check-decks`, and headless Chromium checks at `1280px` and `390px` across all 14 affected student, skeleton, and teacher guide pages (0 console/page errors, 0 horizontal overflow, 0 write boxes or blank-line boxes, all cross-course lesson links resolving). Needs a whole-site or quick publish.

## Sharpened for the Humanities pilot (31 Oct 2026)

Reviewed all nine lessons, teacher notes, class plans and four inquiry skeletons against the twelve source standards in `data/curriculum/{economics,civics,geography,history}.json`, including the individual nodes' minimum width, criteria and hinge reasons. Read the approved onboarding/pilot plan in `shared.md`; no onboarding, subject-course, platform or shared-roadmap edits.

- Preserved the ask → find → share progression, primer shape, existing cases and interactions, node tags and lesson URLs. Primer still suits these short reasoning moves. Added dip-in guidance: use the current subject's task, with other cases available as optional width. Sharing no longer requires producing four subjects' responses (or both arguments) to use one skill. Every chosen subject retains its own floor; width is another context or audience, not an ability group. Human feedback and revision belong on the main path.
- Corrected inquiry distinctions: measurements can be investigated and supply supporting evidence; judgements need criteria and evidence rather than dismissal as opinion; forecasting needs defined scope and assumptions. Replaced ambiguous broad-definition distractors with explicitly excessive scope. Concepts are lenses applied to topics. The concepts hinge check now distinguishes geographical interconnection/change and historical cause/significance instead of only spotting question marks. Geography's own-question task asks for the spatial dimension; History uses different concept frames.
- Made evidence collection concrete: a worked two-evidence plan connects sources, collection methods and purpose; Civics applies the news move to an approved current item (invented news is rehearsal). Searching now requires locating and recording two sources with a targeted strategy, including primary/secondary for History and two secondary sources for Geography. Added specialist-report practice, search-tool qualifications and source provenance. No visiting invented `.example` sites.
- Relevance prediction now supplies the facts being judged. Counts of transactions, students, vehicles and customers are not treated as interchangeable; reported concerns are not measured impacts. Notes retain source references and incomplete evidence is acknowledged. Civics gets a worked table grouping shared themes across two sources and a matching check with smaller support. Economics' digital organisation requirement moved onto its untiered task. Tables and graphs are choices serving different purposes, not mutually exclusive right answers.
- Added two-stage hints at five existing sticking points, retained all existing smaller checks and added a theme-grouping lead-in. Repaired reversed task headings and positional prediction feedback that conflicted with shuffled options. Updated teacher guidance and four class plans; supplied the missing five-day practice dataset. Geography explanation records now have comparable periods and explicit ML units. The equipment example explicitly has only two options so the oven is the next best alternative.
- Aligned skeleton wording with its existing tagged nodes: Economics uses a digital format, Geography collects both primary and secondary evidence and plans two evidence types/methods, History and Geography ask two focused questions, and historical secondary sources are interpretations rather than simply anything made later. No skeleton structure or criteria changed.
- All practice records remain explicitly invented; they establish no facts about a real council, river or Han society. No new real-world example or First Nations student explanation. Teacher-approved, verified sources and historical knowledge checks are still needed in real inquiries; the First Nations teacher/pointer guidance remains in place.

**Pilot follow-up (open):** Does practice with the invented museum object transfer to students explaining a real historical topic from verified class sources? Observe the writing, not only the selection checks or completion ticks, before treating this as evidence of independent historical understanding. No curriculum expansion is proposed in this pass.

Verification and delivery results are recorded below before the implementation commit.

**Verified:** `npm ci`; `npm run validate`; `WP_NO_MAKECODE=1 npm run build`; `npm run check-nodes`; `npm run check-decks -- hass/inquiry-7` (all nine decks fit). Chromium exercised all nine lessons: 48 choices (including every wrong option and specific feedback), 7 bug checks, 8 sorts, 7 matches, 9 prediction locks, 29 reflection ticks, 14 smaller checks and 16 hint disclosures. Progress survives reload. Checked the course and ten guide pages, authored internal lesson links, desktop/390px layouts and screenshots; no page errors. Four skeleton pages and generated Print worksheet text were checked separately. Existing unrelated Maths markup/font warnings, Science voice-length warnings and Code clip placeholders remain. No clips rendered; this course still has zero clips.

**Limits / publish:** Not tried with staff or classes. Human marking, actual student searches, local fieldwork, historical knowledge and transfer to verified class sources cannot be established by browser tests. Generated worksheets were inspected as Markdown, not in the external Prepare Print app. Existing text-only prediction locks use a generic shared “board” message; changing that shared UI is outside this content pass. Ready for a manual whole-site quick publish (or full publish) including the course/skeleton and teacher-guide outputs; no publish was run. Delivery status follows below.

**Final review:** Rebased over concurrent teacher quick-reference commit `6881a8d1` without conflicts; its onboarding files were preserved. A narrow-screen check found an existing 20px overflow on the History skeleton: the unchanged source criterion contains the unbroken text `causation/change/significance/perspective`. Lesson and guide layouts pass; this skeleton needs a shared wrapping fix in a separate tools pass. Left its curriculum wording and shared renderer intact. The skeleton text and generated Print content otherwise pass. The generic prediction message and this source-criterion wrapping are recorded limitations, not new content features.

The course renderer uses frontmatter summaries rather than an `index.md` body, so the dip-in/current-subject guidance is in the visible summary. Verified against the generated course page.

**Delivery:** Local implementation commit completed and rebased over main. `git pull --rebase origin main` succeeded before the push; `git push origin HEAD:main` failed because this environment has no GitHub credentials (`could not read Username`). No remote branch was changed or published. A `git format-patch` deliverable accompanies this pass and can be applied with `git am humanities-inquiry-pilot-review.patch` on an up-to-date main checkout.

**Delivery update (31 Oct 2026):** Matthew authorised using the connected GitHub API after the shell credential failure. Deliver the same verified content in one commit based on freshly checked main, with a non-forced, expected-head-guarded fast-forward ref update. Publishing remains manual. The earlier patch remains a fallback and must not be applied again if this connector delivery succeeds.
