# Roadmap: Geography

`content/geography/` (not created yet). Set up 30 Oct 2026 so a Geography chat can start. Node content: waypoints-kit `data/geography/`, copied in `data/curriculum/geography.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `geography/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- First Nations wider items: a teacher note that starts from ACARA's own elaboration for that content (the curriculum's sanctioned starting point) and asks the teacher to build on it with local, community-approved material. No student text written by us. The elaboration text is in Progressions' `<subject>_y7_width_tiers.json` (importing it is proposed: `roadmap/shared.md` › Proposed: import ACARA elaborations); until it is imported, read it there or link the standard on the ACARA site.
- Inquiry skills: questions, locating and organising, and creating explanations belong to the shared course (`roadmap/humanities-inquiry.md`); this subject builds only its own skills (below). The full investigation is class work.
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

## Proposed

Nothing yet. First step: pick the first standard, write the course plan here (a table like `roadmap/economics.md`), then build lesson 1 as a pilot.

## Starter prompt for the Geography chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, and `roadmap/geography.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Geography course in `roadmap/geography.md`, commit and push, and wait for me before building.
