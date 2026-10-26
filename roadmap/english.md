# English (`content/english/`)

Plan: Project doc `claude/english-pathway-plan.md` (26 Oct 2026; Matthew confirmed the proposed answers: cohesion first, its own subject, Years 6–8 with the Years 4–5 ideas as an optional warm-up unit, bring-your-own-text later but designed for).

## Built (27 Oct 2026, not yet tried with a class)

- **Subject** `content/english/index.md`: "English", order 2.5 (after Science), `map: true` (curriculum map from `data/curriculum/english.json`), `trail: units`. Pathways: How writing works (Language strand; built course plus "Coming later" How sentences work, Choosing words, Writing like a subject expert) and How texts work (all "Coming later": How texts are built, Images and layout, Literary ideas). English is in the node check's `CHECKED` (`tools/progressions.mjs`) and in search's standards (`STANDARD_SUBJECTS`, `SEARCH_HINTS`). Teacher guide `content/english-teachers.md`, linked from Teachers.
- **Course** `english/cohesion`, Holding writing together (Years 6–8, nine lessons, five units):
  - Warm-up (optional, Years 4–5 ideas): 1 What does it point back to? (AC9E4LA04 n1), 2 Words that join ideas (AC9E4LA04 n2–n3), 3 Where a sentence starts (AC9E5LA04 n1–n3).
  - Words that hold it together: 4 Say it again, on purpose (AC9E6LA04 n1), 5 Word chains (AC9E6LA04 n2–n3).
  - Guiding the reader: 6 Tell the reader what's coming (AC9E7LA04 n1), 7 Open and close (AC9E7LA04 n2).
  - Inside a paragraph: 8 Inside a paragraph (AC9E8LA04 n1–n2).
  - Challenge: 9 Repair the report (pointing words, joining words, order, explanation).
  - Lesson shape as ICT (Predict, Try, Worked example, Vary, Practise, Make, then a `tier: typical` step in the student's own class writing). Every lesson has teacher notes, a class plan and a `smaller:` step on its Try. No clips, so no ports.
- **Board** `widget: cohesion` (`playground-board/widgets/cohesion.js`; AUTHORING › `widget: cohesion`): link mode (trace pointing words with arrows, Not clear and fix, mark your own), chain mode (colour word chains), parts mode (label and order sentences or paragraphs), gaps in any mode, and `tools: write` (rewrite the text and mark it yourself). Text is data: the same board takes unmarked text.
- **Checks**: `npm run check-cohesion` (Node: every board builds; no board check holds at the start; each passes once solved, Make steps against a `-solution` region with `as: student`). `tools/check-lesson-boards.mjs` now walks English as well as maths.
- **Rules kept**: no LLM marking anywhere; every text written for the lesson (Canberra, platypus and rip-current facts checked against general reference sources); Nib is the novice whose slips students find (roadmap/shared.md › Nib), used here as a character in the text only.
- Misconceptions added: `nearest-noun`, `connective-sounds-clever`, `start-with-new`, `never-repeat`, `general-before-specific`, `detail-off-topic`, `new-idea-in-conclusion`, `quote-speaks-for-itself`.

- **Review pass (27 Oct)**: a separate fresh-eyes review of every lesson; fixed: a not-really-ambiguous "It" in the challenge (now two genuinely unclear Its whose right fix the text decides: `?~*a/b`), an unplanted "a small robot" and hints that led students to colour pointing words in word chains, a hook that put the general word first, two arguable sentence-start answers, sea otters in a Tasmanian kelp forest (now rock lobsters), "eruption" in the volcano chain, antonyms described two ways, the challenge's "every move" claim, a joining-word example whose logic was off, a model conclusion that added a new point, the platypus egg count, a weak model explanation, a pointing word that failed its own swap test, and "we" planted but not taught.

- **Show the answer and Explain-it-to-me pictures (27 Oct, build handoff item 1)**: `answer: on` on the cohesion board (solved, read-only; AUTHORING › `widget: cohesion`), drawn by `render-pictures` (the board section photographs `.co-paper` for cohesion setups). Every built lesson has an `explain-pic` region with its own short text and an `explainPicture` caption that matches its Explain-it-to-me text. Parts-mode labels now stay on the line with their sentence's first word (all parts boards). `check-cohesion` also builds every picture. A fresh-eyes review (27 Oct) found a joining-words picture that matched its Try answers, a caption with its own unclear "it", a "whole idea" picture that read as one word, haloed labels, a shaky reason-first example and pictures copying the Try label order; all fixed. Repair the report's picture shows the flag-and-fix move the challenge asks for; kept, since the picture teaches the four checks. Decks and worksheets do not carry Explain-it-to-me pictures for any subject yet (a shared `teach.mjs` change; not done).

## Master plan (27 Oct 2026, draft for Matthew's review)

`roadmap/english-master-plan.md` (also Project doc `claude/english-master-plan.md`) covers every Kit English node: 20 threads ("How English skills grow"), each node's modes (tutorial, own writing, open answer, workshop, speech shape, class only, early literacy programme), 17 drop-in courses, unit-type lists, boards, Explain-it-to-me pictures, build waves A to M and parked AI ideas. Node data: `data/curriculum/english-triage.yml`, made by `experiments/english-triage/` (README there). Years 6–8: 167 of 168 nodes in a planned course. A fresh-eyes review's fixes are folded in.

Build handoff: Project doc `claude/handoff-english-build.md` (one chat at a time, in order; hands off when it gets too big).

## Next (proposed, not built)

1. Pilot with a class; fix what it finds.
2. Bring your own text: a teacher pastes a passage into a board (link and chain modes already run on unmarked text; checks become self-checks). Needs: length limit, paste cleanup, a teacher-facing way in (a page or a Create option), and the copyright note.
3. How sentences work (sentence board), then Choosing words (word choice board), per the plan.
4. Speaking standards (agreed with Matthew 27 Oct): no speaking mode that listens or judges delivery. The site supports the planning and the reflecting; rehearsing and presenting happen in class. Lesson flow: purpose and audience, plan (opening, two or three points, close; reuses Open and close), write a script (`reasoning` check, unmarked, with a model and self-check), cut it to key-word cue cards (a `cue` mode on the cohesion board; delivery from full script, highlighted script, cue cards or memory, the teacher's choice), rehearse with a partner or optionally PowerPoint's Speaker Coach where the school has Microsoft 365, present in class, then a self-check and peer feedback checklist. A shared speech lesson shape in Create first, then an English course, Speaking to an audience, that other subjects link back to (roadmap/shared.md › speech lesson shape).
5. Open-response mode (second pass), after the workshop format settles: model-range board, criteria self-check with the highlighter.
