# Roadmap: Learning skills (self-regulated learning)

`content/learning/`: self-regulation across subjects (proposal and research: `roadmap/shared.md` › Proposed: self-regulation strategies as an optional toolkit). Teacher page `content/learning-teachers.md`.

## Built (27 Oct 2026; Matthew said go; not yet tried with a class)

- **Subject** Learning skills (order 7.5, `trail: units`), pathway How you learn.
- **Course** `learning/how-you-learn` *How you learn best* (Years 6–8, optional, discussion-led, four `shape: 5e` workshops, `language: science`, no clips, no boards): 1 What's going on in your head? (trap puzzles, before/during/after), 2 Who's steering? (self-directed vs self-regulated vs everyday self-regulation; class debate), 3 When easy fools you (illusions of competence; links to Does AI Help Us Learn? › The illusion of competence), 4 Your strategies (match the kind of stuck to a strategy, then plan one strategy on a real task from another subject: the transfer step). Nib makes one slip per lesson (bug checks; four new misconception ids). Each lesson has `teacher.yml` and a class plan; `teacher.md` for the course. Nothing personal asked; private thinks.
- **Strategy cards** (`cards.yml`, the ICT card format): seven general cards grouped Before / During / After (what is it asking?, make a plan, predict first, check your confidence, explain it to yourself, when you're stuck, look back), each with a note for maths, science, English and Code; four Code cards (say what it should do, test a small piece, read the error, trace it). On `learning/how-you-learn/reference/` and in search.
- **Shared changes** (small): `tools/ict-cards.mjs` reads optional top-level `groups`, `lede`, `search` and `more` from cards.yml (`loadCardsFile`); `build-site.mjs` builds cards for `learning/*` as well as `ict/*` and gives card search entries their own subject; `validate.mjs` checks both; search hint and teacher-page entry; Teachers menu link.
- **Needs a whole-site publish** (new subject, shared tools, Teachers menu).

## Built (27 Oct 2026, later): subject cards

- Four cards each for maths, science and English (groups `maths`, `science`, `english` in `cards.yml`, notes by topic or text purpose), beside the Code cards; 23 cards in all. The placeholder course on the pathway is gone. Teacher page updated.

## Built (27 Oct 2026, later): deck inserts and the stuck link

- **Deck inserts.** A class plan may carry one `self-regulation:` mapping (`card`, `mode: teach | show | nudge`, `at`, optional `say`, `task`, `ask`, `notes`). The deck builder draws the slides from the strategy card (`strategySlides` in `tools/teach.mjs`): teach = four NEMO-T slides (name and explain, watch me use it, now you try it, where else); show = one think-aloud slide, `say` required and put in the speaker note; nudge = one open question ("What might help you here?"). It only accepts ids from `learning/how-you-learn/cards.yml` (validate checks). Named `self-regulation:` so it is not mistaken for a general teaching-strategy slot. The guide's "In class" lists it. No effect on lesson pages or clips.
- **Pilot, Python Foundations (3 of 11 lessons):** Repeat with a loop teaches Read the error; A value that grows shows Trace it; Challenge: a tile nudges Test a small piece.
- **Stuck link.** The first hint panel on every lesson page opens with "Before a hint: what kind of stuck is this? Try a strategy first", linking to the When you're stuck card (`siteRoot` needed, so not in Create's preview). Whole-site publish.
- **Code guide pointers.** Every Code course's teacher guide has a "Strategies for getting unstuck" paragraph linking the four Code cards and the course (`strategyGuide`, `tools/build-site.mjs`); a lesson guide links the card in its "In class" item only where the class plan has a `self-regulation:` line.
- Not tested: `npm run check-decks` needs the network (jsdelivr), which this sandbox lacks; run it where it can.

## Next

1. Pilot with a class, then decide whether to add inserts to other courses.

## Parked (27 Oct 2026)

- A course teacher-guide list of which lessons carry a `self-regulation:` insert and which card, derived from the class plans (no new field), plus search entries so "think-aloud" or "read the error" find those lessons. Wait until more than the three pilot lessons have inserts.
- No general `teaching:` field for other strategies (PRIMM, 5E, worked examples, retrieval): `shape:`, stages and the class plan's `kind` already carry them, and nothing would check a tag the way the card-id check does here.

## Open

- Pilot with a class; follow up the workshop-4 "did it help?".
- Whether Code lesson guides should point at the Code cards.
