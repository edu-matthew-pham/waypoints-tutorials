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

## Next (proposed, not built)

1. Pilot with a class; fix what it finds.
2. Bring your own text: a teacher pastes a passage into a board (link and chain modes already run on unmarked text; checks become self-checks). Needs: length limit, paste cleanup, a teacher-facing way in (a page or a Create option), and the copyright note.
3. How sentences work (sentence board), then Choosing words (word choice board), per the plan.
4. Open-response mode (second pass), after the workshop format settles: model-range board, criteria self-check with the highlighter.
