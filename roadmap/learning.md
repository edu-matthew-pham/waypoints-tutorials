# Roadmap: Learning skills (self-regulated learning)

`content/learning/`: self-regulation across subjects (proposal and research: `roadmap/shared.md` › Proposed: self-regulation strategies as an optional toolkit). Teacher page `content/learning-teachers.md`.

## Built (27 Oct 2026; Matthew said go; not yet tried with a class)

- **Subject** Learning skills (order 7.5, `trail: units`), pathway How you learn.
- **Course** `learning/how-you-learn` *How you learn best* (Years 6–8, optional, discussion-led, four `shape: 5e` workshops, `language: science`, no clips, no boards): 1 What's going on in your head? (trap puzzles, before/during/after), 2 Who's steering? (self-directed vs self-regulated vs everyday self-regulation; class debate), 3 When easy fools you (illusions of competence; links to Does AI Help Us Learn? › The illusion of competence), 4 Your strategies (match the kind of stuck to a strategy, then plan one strategy on a real task from another subject: the transfer step). Nib makes one slip per lesson (bug checks; four new misconception ids). Each lesson has `teacher.yml` and a class plan; `teacher.md` for the course. Nothing personal asked; private thinks.
- **Strategy cards** (`cards.yml`, the ICT card format): seven general cards grouped Before / During / After (what is it asking?, make a plan, predict first, check your confidence, explain it to yourself, when you're stuck, look back), each with a note for maths, science, English and Code; four Code cards (say what it should do, test a small piece, read the error, trace it). On `learning/how-you-learn/reference/` and in search.
- **Shared changes** (small): `tools/ict-cards.mjs` reads optional top-level `groups`, `lede`, `search` and `more` from cards.yml (`loadCardsFile`); `build-site.mjs` builds cards for `learning/*` as well as `ict/*` and gives card search entries their own subject; `validate.mjs` checks both; search hint and teacher-page entry; Teachers menu link.
- **Needs a whole-site publish** (new subject, shared tools, Teachers menu).

## Next (agreed in principle, not built)

1. Strategy cards for maths, science and English in each subject's own words (placeholder course on the pathway).
2. Optional deck inserts in Prepare: Teach it (NEMO-T, 3–4 slides), Show it (think-aloud), Nudge it (one open prompt). One per deck by default, roughly a third of a course's lessons, fading.
3. A "try a strategy first" link at the stuck moment in lessons (before hints), worded as an open question.

## Open

- Pilot with a class; follow up the workshop-4 "did it help?".
- Whether Code lesson guides should point at the Code cards.
