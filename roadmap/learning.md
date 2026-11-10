# Roadmap: Learning skills (self-regulated learning)

`content/learning/`: self-regulation across subjects (proposal and research: `roadmap/shared.md` › Proposed: self-regulation strategies as an optional toolkit). Teacher page `content/learning-teachers.md`.

## Rebuilt (10 Nov 2026; Matthew said go; still not tried with a class)

Plan, decisions and terms: Project doc `claude/learning-skills-audit.md` (handoff `claude/handoff-learning-skills-rebuild.md`). Barr's public terms are the spine; other sources fill gaps only, cited under their own names.

- **Why.** The audit found the course strong on the plan, check, look back cycle but treating self-directed learning as a skill beside self-regulated learning; beliefs only incidental; motivation, goals and grades absent; strategies taught without why or cost; and all four `shape: 5e` workshops opening with the same predict question (two of them maths trap puzzles, which framed self-regulation as maths and being caught out).
- **Five workshops, `shape: primer`, each using only the stages it needs** (Matthew, 10 Nov: no template-as-checklist): 1 What do you believe about learning? (`what-you-believe`, new: belief statements, made-up learners, names self-regulated learning as being your own learning coach), 2 Your learning coach (`your-learning-coach`, replaces Who's steering?: who chose the task vs who coaches, the coach's three jobs, feelings, think-aloud as the coach's voice), 3 Why do you do it? (`why-you-do-it`, new: pushed vs owned reasons, the goals grid shown in full with emphasis on getting better, looking good and not looking bad, marks as the scoreboard, beat your own best, what you'll do vs what you'll get; opens on a made-up learner, Ava, with own reasons only in Apply), 4 When easy fools you (mostly kept; adds why the checks work), 5 Knowing it vs using it (`knowing-vs-using`, replaces Your strategies: try-first task, NEMO-T on What is it asking?, having it vs using it, the dip, if-then plan for the transfer task). The "did it help?" follow-up is in the last class plan and the course teacher page, not a sixth lesson.
- **Approach: loosely explicit teaching.** The course teacher page says primer is the site's own shape, consistent with explicit teaching, not a named research model.
- **Nib's slips:** new ids `fast-means-smart`, `set-task-no-coaching`, `good-mark-means-learned`, `didnt-help-first-time`; `easy-means-learned` kept; `fast-means-right`, `chose-it-so-regulated` and `one-strategy-for-everything` retired with their lessons.
- **Personal reflection invited** (decision 2): students apply each idea to themselves and share only what they're comfortable with; discussion on made-up learners; nothing collected or marked. Recorded as `roadmap/rules.md` T4a (T4 stays firm).
- **Grades named openly;** teacher pages recommend any assessment of self-regulated learning stays formative.
- **Strategy cards:** every card has `why`, `cost` and `coach` lines (shown on the Reference page as "Why it works", "What it costs", "Ask yourself", and searchable); validate checks they're text. A deck's Teach it insert shows the card's why on the Name and Explain slide and its cost in the speaker note. Card ids unchanged, so the stuck link and the three Python Foundations inserts still resolve.
- **Renamed lessons forward:** `RENAMED_LESSONS` in `tools/moved.mjs` (noticing-your-thinking → what-you-believe, who-is-steering → your-learning-coach, your-strategies → knowing-vs-using).
- **Course pages:** new tagline "Be your own learning coach: plan it, check it, look back." (Matthew, 10 Nov), course and subject summaries, `teacher.md` (five workshops, personal reflection, grades, research with Barr as the spine), `content/learning-teachers.md` (definition, NEMO-T with why, the dip, marks and formative assessment, SEE, research).
- **Needs a whole-site publish** (card display in `tools/ict-cards.mjs`, deck slide in `tools/teach.mjs`, forwarding pages, subject page).

### Still to check

- Barr's book: the self-directed vs self-regulated section, and whether the five lenses are his SRL Knowledge Framework (assumed, from Matthew's conversation with him; adjust wording if it differs). Also the umbrella line in workshop 5's teacher notes, carried over from the first build.

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

- Pilot with a class; follow up the workshop-5 "did it help?".
- Whether Code lesson guides should point at the Code cards.
