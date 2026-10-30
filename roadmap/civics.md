# Roadmap: Civics and Citizenship

`content/civics/` (not created yet). Set up 30 Oct 2026 so a Civics and Citizenship chat can start. Node content: waypoints-kit `data/civics/`, copied in `data/curriculum/civics.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `civics/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- First Nations wider items: a teacher note that starts from ACARA's own elaboration for that content (the curriculum's sanctioned starting point) and asks the teacher to build on it with local, community-approved material. No student text written by us. The elaboration text is imported: `elaborations` on each standard in `data/curriculum/<subject>.json`, shown on its pointer page. Quote the relevant one in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`).
- Inquiry skills: questions, locating and organising, and creating explanations belong to the shared course (`roadmap/humanities-inquiry.md`); this subject builds only its own skills (below). The full investigation is class work.
- Add `civics` to `CHECKED` in `tools/progressions.mjs` with the first lesson (say so in `shared.md`).

## Year 7 knowledge standards (start here)

| Code | Title | Waypoints | Hinges |
|---|---|---|---|
| AC9HC7K01 | Australia's system of government | 5 | 2 |
| AC9HC7K02 | Characteristics of Australia's democracy | 4 | 1 |
| AC9HC7K03 | The Australian legal system | 4 | 2 |
| AC9HC7K04 | Secular democracy and pluralist society | 4 | 1 |
| AC9HC7K05 | Values, social cohesion and democracy | 4 | 1 |

## Year 7 skills this subject builds itself

- AC9HC7S03 Analysing information and perspectives (3 nodes)
- AC9HC7S04 Methods for civic participation (3 nodes)

## Proposed

Nothing yet. First step: pick the first standard, write the course plan here (a table like `roadmap/economics.md`), then build lesson 1 as a pilot.

## Starter prompt for the Civics and Citizenship chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, and `roadmap/civics.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Civics and Citizenship course in `roadmap/civics.md`, commit and push, and wait for me before building.
