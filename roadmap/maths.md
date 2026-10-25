# Roadmap: Maths

The maths chat's file. Lessons live in `content/maths/`. Design notes and status so far are in the project docs (`maths-structure`, `maths-boards-plan`, `maths-expressions-status`, `maths-graphs-7a04-status`, `board-embed-contract`); record new decisions here.

## Pilot: when, where and why (22 Oct 2026, a trial for maths teachers, not a rule)

Full strategy: [`roadmap/maths-when-where-why.md`](maths-when-where-why.md) (also the Project doc `maths-when-where-why-strategy`). Two lessons at opposite ends: **Finding a side** (AC9M8M06 n2, a *world* entry: will a ladder set up by the 1-in-4 safety rule reach the gutter?) and **Changing the subject** (AC9M8A01 n3, an *enabler* entry: what do I need on the last test to average 70?). Each opens with the real question (hook, plus a hand-drawn SVG in the intro); Make comes back to it; "Also used in" closes it (text under Make's last task). Predict to Practise are unchanged, so Predict still tests only the new move; whether the situation should run through the middle too is a question for the teachers, not built. Library: `data/connections/maths.yml` (pilot entries only; fields, kinds and application steps in its header; every figure has a source); lessons name their entry with `connection:` (documentation only). Figures sourced: ladder 1:4 (WorkSafe ACT, SafeWork NSW), ramp 1:14 up to 9 m (Queensland Health, from AS 1428.1). Tested headlessly: both figures in light and dark, every Make check with its planted slips and right answers.

**Library shape (agreed 22 Oct):** two layers. Every node gets a `purpose` block (which reasons are true, one sentence each: `world`, `step` a step on the way, `hood` under the hood, `next` builds what comes next, `assessed`); no node is blank. Entries (real situations) hang off nodes only where an honest one exists. Fit rule: an entry belongs to a node when its question needs exactly that node's move, in that node's direction (the shortcut across the grass is Pythagoras n1, the ladder n2, the 3-4-5 corner n3). Lesson rule: the opening never says what Predict asks. **Every Year 7 node is done** (82 nodes across all six strands, 60 entries). Eleven nodes honestly have no entry, all "see why it works" or naming moves: A03 n1, M01 n1, M03 n1, M04 n1, M05 n1, N02 n2, N03 n1–n2, N04 n1, SP02 n1, SP02 n3. Domains lean consumer (17) and building (13); digital 2, no robotics. Noted, not built: Pythagoras (n1) should open with the shortcut across the grass, not the 3-4-5 corner, whose hook also gives away its Predict answer (5 m); the corner check belongs to Right or not? (n3).

**Done (23 Oct): hooks that gave away Predict, and unsourced figures (Year 7, plus Pythagoras).** Checked the hook against the Predict question in all 69 Year 7 lessons. Ten stated the answer or the rule Predict tests and were rewritten as questions: powers, prime factors, quadrilaterals, many trials, predict and test, triangle angles, kinds of data, choosing a strategy, comparing integers, variables. Pythagoras (Year 8) now opens with the shortcut across the grass, not the 3-4-5 corner (which gave away its 5 m). Sources added in the lesson text: GST 10% (ATO) in Percentages; the Rhind papyrus, about 1650 BC (MacTutor), in Discovering π, replacing an unsourced "four thousand years". Lesson.md only, so no clips re-record. Left for Matthew to judge (the hook hints at the answer without stating it): sample space, which measure, comparing data, reflections, parallel lines, backtracking, brackets, views, multiplying fractions, modelling.

**Pictures for openings (23 Oct):** each library entry now says what kind of visual its situation wants (`picture:`): spatial (hand-drawn SVG, as the ladder and the lawn), structure (a Mermaid `diagram:`, which the build draws and decks, worksheets and Create all carry: decision keys, flows, comparisons; 8 Year 7 entries), data (a chart or board picture: marks, prices, temperatures; 22) or none (5). Mermaid is the first choice wherever the situation is boxes and arrows, because it goes everywhere hand SVG does not. Rule for every picture: it shows the question, never the answer (a "?" where the unknown is). Finding a side also gained a sketch at Predict (its 5 m ladder is a different ladder from the opening's 4.1 m one) and a "guess now" line in the opening, so the opening reads as a quick commit, not a measurement.

**Third pilot, a Mermaid opening (23 Oct):** Algorithms for classifying shapes (AC9M7SP04 n1–n2) opens with a key for five common Australian birds, drawn as a Mermaid flowchart. Diagrams attach to steps, not the intro, so the opening is a short first step ("The question: a bird key", `stage: info`, `role: stimulus`): one extra step pill, the trade-off to judge. Make comes back to the key and tests it with a common myna, which the last "no" misnames a superb fairy-wren; then the fix ("not in this key"). This replaces the old Make, which repeated the quadrilateral run. The deck carries the key as a Mermaid slide and the worksheet as a drawn diagram. Bird colours sourced from the Australian Museum. Tested headlessly: diagram in light and dark, both Make checks with right and wrong answers, the link to the science key lesson.

**Fixes from Matthew's review (23 Oct):** the `pythag` board's labels overlapped in small squares (side 1: "b = 1 m" on top of the area "1"). The widget now measures both labels on screen after drawing; if they overlap, it moves the length label just outside the square when it is too wide for the square, otherwise the area, and widens the view if a moved label would fall off. Squares with room are unchanged. Needs a whole-site publish (quick or full) to go live, and re-records the clips on the `pythag` board (Pythagoras' theorem, Finding a side, Right or not?). Pilot intros rewritten in plain student language (no "this lesson's move", "Left out", "The question."), shorter, with "Make a guess" / "Guess now"; the bird-key step is now "A bird key".

**Voice rule (23 Oct, Matthew):** student-facing text is written the way you'd say it to a student at their desk; the six points are in `roadmap/maths-when-where-why.md` › Decided. Applied to the three pilot intros, their hooks (now one-line teasers that don't repeat the intro) and the Finding a side sketch and Make lines. Older Year 7 intros can be read against it later.

**Accessibility rules and support on demand (25 Oct, Matthew):** eight rules for making maths lessons accessible (picture before symbols, numbers before letters, every symbol points at something, fluency after meaning, show the question never the answer, say it as you'd say it, read once then fold, one move one picture one situation) and a suite-wide "support when it's needed, invisible when it isn't" principle with a `smaller:` field on steps (renamed from `support:` on 25 Oct after review: that name is the teacher's line in `teacher.yml`). Proposed in `roadmap/shared.md` for the other chats; first use is Changing the subject's Predict, which currently asks students to choose between four symbolic forms before they have done the move.

**Changing the subject rebuilt around a bar model (25 Oct), the first use of the accessibility rules:** Predict asks for the width with numbers (20 m of fence, 6 m long) on the first row of a bar model with "?" widths; Run settles it on the board (units now m); Investigate opens with the full bar model, one row per line of the formula, then the old four-formula question, now "which formula records what you did with the fence?" (feedback per wrong form); Make draws the marks as a bar model (not to scale, so the "?" doesn't give the answer away). The `support:` lead-in waits for the shared mechanism.

**Picture behind the rule: Years 7–8 Algebra and Number (25 Oct pass, rule 1 of the accessibility rules).** Checked each lesson's Try board and its Predict.
- *Picture there, and it comes first or with meaning:* every Number lesson (number line, fraction bars, area model, factor tree, place value, ratio, index-laws board); equation as a balance; backtracking (function machine); solving harder equations and inequalities (graphs); all of Linear relations (graphs, patterns); substituting, variables and finding an unknown (the formula board draws the rectangle); changing the subject (bar model, rebuilt 25 Oct).
- *Picture there, but Predict asks for a symbolic form before it:* **expanding** and **factorising** (area tiles in Try; Predict picks between expressions first), and mildly the balance method (symbolic Predict, but the balance was met the lesson before) and rules from situations (context given, then a choice of rules). Fix: put the tiles on the Predict as the stimulus (role-style: "here is 3(x + 2) as tiles: what expression is it?").
- *No picture behind the rule:* **when brackets are needed** (T = 2(n + 3)), **words into expressions** (n − 5) and **an expression for any case** (12n + 50): the formula board shows sliders and a value, no shape. These are the three expression lessons (AC9M7A02 n1–n3), where students first meet letters standing for numbers. Natural pictures: a bar model (n + 3, doubled: two bars of n and 3), a number line for "5 less than n", and repeated groups for 12n + 50.

**Pictures on the five symbolic Predicts (25 Oct):** expanding (three rows of x + 2 as tiles), factorising (6 x-tiles and 9 ones, loose, with the prompt "can you share all the tiles into equal rows?"), when brackets are needed (n stickers and 3 more under a brace "the lot", then "doubles the lot: ?"), words into expressions (a bar n and a bar 5 shorter marked ?), an expression for any case (the $50 bus block then a $12 block per student). Each shows the question with a "?" and comes before the symbolic options, so the options now name a picture. Lesson.md only; no clips re-record. The `smaller:` lead-ins for these wait for the shared push (`roadmap/shared.md` › Proposed 25 Oct, amended).

**Pythagoras' theorem finished (25 Oct):** opens with the worn shortcut across a lawn (footpaths 24 m and 10 m, a drawing with "?"), Make comes back to it (shortcut 26 m, saves 8 m; the old "hypotenuse of 10" board task is the stretch), "Also used in" points forward to the ladder (next lesson) and the 3-4-5 corner (two on). The Pythagoras unit now runs shortcut → ladder → corner check, one entry per node. Fourth lesson with the full pattern.

**Voice pass over the Year 7 intros (25 Oct):** read all 69 against the voice rule, in step with the science chat's pass (`roadmap/science.md`). Definitions-first intros are fine. The one pattern that failed was the stage direction "In this lesson you… / In the last lesson you…" (21 lessons, 22 sentences, including one written this morning); each is now the question the sentence was announcing ("Change the triangle's shape and the angles change, but what happens to their total?"). Lesson.md only.

**Next (agreed with Matthew):** tidy the library before growing it: move the Measurement and Algebra drafts into `maths.yml` with the same fields (add kind and step tags to Measurement, source every figure, flag weak entries). Other strands, and more lessons, wait for teacher feedback on the pilot.

**Found, for roadmap/shared.md (shared tools, not changed here):**
- `answer` checks with `form:` match feedback with `F.check(fb, v, '')`, and with no form the checker calls any two equations equivalent (even `x = (y-7)/2` and `x = y/2 - 7`). So every wrong rearrangement gets the *first* feedback message, in this lesson's Investigate and Modify checks as well as the new Make. Right answers are unaffected. Fix in `lesson-view.mjs` (compare with the check's form, or compare the sides as expressions).
- `teach.mjs` puts the lesson intro into the "Why it matters" slide's speaker note as one line, so an SVG in the intro shows as raw markup in the notes. Fix: strip `<figure>`/`<svg>` in `note()`. The slide itself (the hook) is fine. Lesson images in general need a home: the build copies no lesson-folder images, and Create's safe Markdown drops `<svg>`.

## Audit: Years 7–8 against the Year 9 standard (25 Oct 2026; done: minor refinement and full version pushed, see the notes at the end)

**Status (26 Oct 2026):** the audit's fixes are built and on `main` for all seven courses (Predict pictures, openings, `smaller:`, paper Makes, `struggle:`, connections), picture-checked 26 Oct, not yet published or tried with a class. Only the leftovers in "Still to do (the full version)" below remain. The text under this heading is the original proposal.

121 lessons tagged to a Year 7 or 8 node, in seven courses (Algebra 14, Angles 21, Data 20, Linear relations 12, Measurement 18, Number 30, Real numbers 6). The standard is "What applies from the pilots" in the Year 9 plan above. Script: `.render-tmp/audit.mjs` (lesson text, teacher.yml, the curriculum's hinge flags, `data/connections/maths.yml`); the openings and figures were read by hand.

**Summary.** Only the four pilot lessons (Changing the subject, Finding a side, Pythagoras, Algorithms for classifying shapes) are near the standard. Every other lesson is built the older way: a definition or rule in the intro, then Predict, then the board. So the gaps are wide, not deep: most lessons miss most items, and each fix is small.

| Item | Missing | Notes |
|---|---|---|
| Picture before symbols on Predict | 114 of 121 | 4 can't be answered without one (A); 15 ask in letters first (B) |
| Opening doesn't give away Predict | 67 give it away (46 state the answer or the rule, 21 the method) | Year 7 was checked on 23 Oct for stated answers only; definition-first intros were let through |
| `smaller:` on the hinge | 49 hinge lessons | 38 are computing hinges (do); 11 are judgement hinges (leave, as decided 25 Oct) |
| Paper reasoning in Make | 119 | only Pythagoras and Finding a side have it |
| Real figures sourced or labelled | 13 lessons | no Year 7–8 lesson says "made up" anywhere |
| `struggle:` in teacher.yml | 45 | algebra 13, angles 6, data 8, linear relations 11, number 7 |
| A library connection | 117 untagged; 102 of them have an entry for their node | 15 nodes honestly have none |

**A. Predict refers to a diagram it doesn't show** (fix first; students can't answer): angle-reasoning (b and h), parallel-angles (c and e), parallel-lines (a and e), unknown-angles (a, b, C, x).

**B. Predict asks in letters before any picture:** algebra balance-method, equation-balance, finding-unknowns, inequalities, solving-equations, substituting, variables; linear-relations gradient, intercept, lines-and-regions, plotting-a-rule, rules-from-situations, solve-graphs, tables-from-rules, vary-formulas. Fix as on 25 Oct: a hand SVG of the situation (a balance, a rectangle with ?, a taxi meter, two lines) with "?" where the answer is.

**C. Predict describes a shape in words** (a sketch is the obvious stimulus): all of measurement except Finding a side; angles classifying-triangles, congruent-triangles, nets, polygons, polygon-angles, quadrilaterals, quadrilateral-problems, quadrilateral-proofs, reflections, rotations, translations, similar-shapes, triangle-angles, views, 3d-coordinates, congruence-algorithms, classifying-algorithms; number fractions and ratio lessons (bars), adding-integers, comparing-integers, fractions-on-the-line (number line); data spinners, dice and Venn (sample-space, complementary-events, grids-and-trees, two-way-tables, and-or-not, stem-and-leaf).

**D. Numbers-only Predicts where a picture adds little** (leave unless a teacher asks): estimating, rounding, hcf-lcm, powers, expanded-notation, choosing-a-strategy, index-laws, using-index-laws, recurring-decimals, which-decimals-stop, irrational-numbers, checking-models, money-models, time-zones, percentages, percentage-change, modelling, rates, using-rates, rate-models, ratio-models, and the data judgement lessons (bias, collecting-data, sampling-*, sample-*, investigations, kinds-of-data, which-measure, measures-of-centre, comparing-data, many-trials, predict-and-test, simulations).

**Openings that give away Predict** (the intro or hook states the answer, or the exact rule or method the Predict tests). Fix: keep the hook as a question, move the definition or rule paragraph to the step after Predict (Run or Investigate), where it explains what the board just showed. No content is lost.
- *States the answer or the rule:* algebra balance-method, expanding, substituting (the 2l trap); angles congruence-algorithms, quadrilateral-proofs, quadrilaterals, reflections, rotations, similar-shapes; data kinds-of-data, many-trials, predict-and-test (60 × 1/6 is in the intro), which-measure; linear-relations intercept, vary-formulas (the table shows 24); measurement area-problems, circle-area, circle-problems, irregular-shapes, parts-of-a-circle, right-or-not, triangles, volume-and-capacity (the hook says it); number between-squares (√43 worked in the intro), checking-models, equivalent-ratios, estimating (38 × 52 worked in the intro), expanded-notation, fractions-decimals-percentages, money-models, multiplying-integers (hook), percentage-change, percentages (the same jacket), powers, ratios, rational-operations, rounding, sharing-in-a-ratio (the intro is the Predict), squares-and-roots, using-rates; real-numbers all six.
- *States the method:* algebra backtracking, factorising, finding-unknowns; angles parallel-angles, parallel-lines, quadrilateral-problems; data complementary-events, measures-of-centre, stem-and-leaf; linear-relations rules-from-situations; measurement circumference, composite-shapes, discovering-pi, parallelograms, prism-problems, prisms, volume-layers; number adding-fractions, choosing-a-strategy, equivalent-fractions, multiplying-fractions.
- Also the "This lesson finds…" stage direction in inequalities, sampling-variation and simulations (voice rule).

**`smaller:` on hinge lessons.** Do (a half-move with numbers, or "which one is the hypotenuse?" kind of lead-in, on the Practise or Modify task where the hinge bites): angles 3d-coordinates, parallel-angles, parallel-lines, similar-shapes, translations, triangle-angles, views; data complementary-events, grids-and-trees, measures-of-centre, predict-and-test, sample-space, simulations, stem-and-leaf, two-way-tables; linear-relations lines-and-regions, rules-from-situations, solve-graphs, tables-from-rules, vary-formulas; measurement composite-shapes, parallelograms, parts-of-a-circle, time-zones, triangles, volume-and-capacity, volume-layers; number comparing-integers, equivalent-ratios, expanded-notation, hcf-lcm, multiplying-fractions, powers, prime-factors, rate-models, rates, squares-and-roots; real-numbers recurring-decimals. Leave (a smaller step would give the judgement away; same call as 25 Oct and as Year 9's statistics): classifying-algorithms, congruence-algorithms, congruent-triangles, quadrilateral-proofs, quadrilaterals, bias, collecting-data, sample-investigations, sampling-methods, sampling-variation, irrational-numbers.

**Paper reasoning in Make.** Add one `paper: true` reasoning task to each Make, set in the lesson's own situation (the opening's, or the library entry's), after the existing Make tasks; keep what's there. Judgement lessons get one with `picks` (choose the reason at the key step) rather than a number. Each needs a `running:` line in teacher.yml (AUTHORING › reasoning). The two algorithm lessons:
- *Algorithms for classifying shapes (the known item):* the quadrilateral re-run was already replaced on 23 Oct by testing the bird key with a myna. What's still missing is the drawing. Proposal: a paper task "Draw your fixed key as a flowchart, then run a female superb fairy-wren (mostly brown) through it. Where does it end?", marked by a pick (the "not in this key" box), with the model flowchart as the model solution (a Mermaid diagram).
- *Algorithms for congruence:* its Make is one reflect ("write your own algorithm"). Same shape: draw the flowchart on paper, trace a given SSA pair through it, pick where it ends ("not enough to tell").

**Real figures to source or label** (student-visible link in the lesson text, as Finding a side does; teacher.yml `sources:` too):
- Source: collecting-data (census every five years: ABS; TV ratings in a few thousand homes: OzTAM), money-models (2026–27 brackets and the Medicare levy: ATO; teacher.yml has links, the lesson text has none), percentage-change (GST 10%: ATO, as Percentages has), using-index-laws (Sun 1.5 × 10⁸ km: NASA, as Year 9 does), time-zones (offsets: teacher.yml has three links; add one in the text), comparing-integers (Thredbo −9 °C and Canberra −3 °C read as fact: source a BOM record or say "on a cold morning").
- Label "made up for the task": using-rates (petrol $2.05/L), rates and rate-models (petrol, 7 L per 100 km), checking-models (taxi $4.20 + $2.10/km), comparing-plans (plan prices), volume-and-capacity ("a cubic metre of water is a tonne" is a fact near enough: say "about a tonne"), many-trials and sampling-variation (the polls).
- Everything else uses numbers that plainly belong to the task (a 6 by 4 rectangle) and needs nothing.

**Connections.** 102 untagged lessons have a library entry for their node. Proposal, lighter than the pilots: add `connection:`, use the entry's situation for the new paper Make task, and add "Also used in" (two or three lines from the entry and its neighbours). Rewrite the opening around the entry only where the opening is being fixed anyway and the current hook is a list of examples rather than a question ("Speed limits, petrol, heart rate…": rates, rate-models, rules-from-situations, comparing-plans, composite-shapes, prism-problems, tables-from-rules, gradient, describing-relationships, growing-patterns, rational-operations, using-rates). Nodes with no entry stay without one: equation-balance, classifying-triangles, parallel-lines, polygons, quadrilateral-proofs, triangle-angles, circle-area, parallelograms, parts-of-a-circle, triangles, equivalent-fractions, expanded-notation, prime-factors, irrational-numbers, which-decimals-stop.

**`struggle:`** (`npm run effort`): algebra backtracking, balance-method, brackets, equation-balance, expanding, factorising, finding-unknowns, general-rules, inequalities, solving-equations, substituting, variables, words-to-expressions; angles angle-reasoning, parallel-angles, parallel-lines, polygon-angles, triangle-angles, unknown-angles; data comparing-data, kinds-of-data, many-trials, measures-of-centre, predict-and-test, sample-space, stem-and-leaf, which-measure; linear-relations comparing-plans, describing-relationships, gradient, growing-patterns, intercept, lines-and-regions, plotting-a-rule, reading-graphs, rules-from-situations, solve-graphs, tables-from-rules; number adding-integers, comparing-integers, equivalent-fractions, fractions-decimals-percentages, fractions-on-the-line, multiplying-integers, rational-operations.

**Cost to publish.** `lesson.md` edits re-record nothing. `teacher.yml` edits (`struggle:`, `running:` for the paper Make, `sources:`) re-record that lesson's clips: if every Make gets a paper task, that is about 115 lessons on the next publish. Nothing here touches boards or tools, so publish-lessons is enough.

**Proposed order** (one push per course, validate, build, headless walk of each changed lesson): Angles first (A has its four lessons; also the algorithm Makes), then Algebra and Linear relations (B), Measurement, Number, Real numbers, Data. Within each lesson: opening, Predict picture, `smaller:`, paper Make with the connection and "Also used in", figures, `struggle:` and `running:`.

**Minor refinement done (25 Oct 2026), five course groups, 5 pushes, lesson text only:**
- *Data and chance:* `smaller:` on 8 lessons; 7 openings no longer hand over Predict; collecting-data sourced (ABS census, OzTAM panel, ABS Monthly Population Survey); many-trials and sampling-variation say "made up". Open: sample-space's intro states its Predict answer.
- *Algebra and Linear relations:* `smaller:` on lines-and-regions, rules-from-situations, solve-graphs, tables-from-rules, vary-formulas; 9 openings fixed; comparing-plans and rules-from-situations say "made up". Open: reading-graphs says "examples"; rules-from-situations' Predict names the fee and rate in the question.
- *Measurement:* `smaller:` on 7 lessons; 15 openings fixed (rule moved to after Run); time-zones sourced (timeanddate), volume-and-capacity (BIPM 1901), area-problems labelled. (time-zones is now pinned to 4–24 Oct 2026, because London's clocks went back on 25 Oct.)
- *Number and Real numbers:* `smaller:` on 11 lessons; about 27 openings fixed (mostly by changing the intro's example numbers); ATO (tax rates, GST) and NASA links added; using-rates, checking-models and comparing-integers labelled made up. Open: rates and rate-models still owe a "made up" label (7 L per 100 km); the Thredbo and Canberra labels on the `line.yml` board; method still in the intro of irrationals-on-the-line and which-decimals-stop.
- *Angles:* diagrams on the Predicts of angle-reasoning, parallel-angles, parallel-lines and unknown-angles (they referred to a figure they didn't show); `smaller:` on 7 lessons; paper flowchart Makes in classifying-algorithms (draw the fixed bird key, run a female fairy-wren) and congruence-algorithms (draw the algorithm, run the SSA pair); 6 openings fixed. Those two lessons' `teacher.yml` changed (`running:`), so they re-record. congruence-algorithms' Make key changed (`step-6` to `step-6#t2`), so saved ticks on it reset.
- *Leftovers actioned (25 Oct, evening):* time-zones pinned to 4–24 October 2026 (London's clocks go back 25 Oct; Los Angeles 1 Nov; the lesson says to check again outside those dates); sample-space and which-decimals-stop have the rule after Run; reading-graphs and rate-models say "made up for the task". Not changed: the Thredbo and Canberra names on the comparing-integers board (the hook labels the temperatures made up; editing `line.yml` would re-record that lesson), irrationals-on-the-line (its intro works √30, not the Predict's √40), and rates (its 7 L per 100 km is only an item in a rate-or-ratio sort).
- *Full version, Data and chance (25 Oct 2026, done, pushed; walked headless, 0 page errors):* all 20 lessons have a `## Make: on paper` step (a separate final step so existing check keys and saved ticks are unchanged; each lesson now has two Make pills), `connection:`, "Also used in", a `running:` line and `struggle:` where missing; 10 Predict pictures (Venn, spinners, dice, dot plots, stem row); judgement lessons (bias, collecting-data, investigations, kinds-of-data, many-trials, sample-investigations, sampling-methods, sampling-variation, which-measure) have a picks-only paper task and no Predict picture. `teacher.yml` changed in all 20, so they re-record on the next publish. Next: Number and Real numbers, Measurement, then Algebra and Linear relations; one full publish at the end.
- *Full version, Number and Real numbers (25 Oct 2026, done, pushed; validate clean, 0 page errors headless):* 36 lessons with a `## Make: … on paper` final step (own step, so saved ticks keep their keys), `running:`, "Also used in" and `connection:` (not on the four with no library entry: equivalent-fractions, expanded-notation, prime-factors, irrational-numbers, which-decimals-stop), `struggle:` where missing, Predict pictures on about 15. The equivalent-fractions paper Make asks for the bottom number (3), because the reasoning check does not mark a fraction's form. `teacher.yml` changed in all 36, so they re-record on the next publish. Next: Measurement, then Algebra and Linear relations.
- *Full version, Measurement (25 Oct 2026, done, pushed; validate clean, 0 page errors headless):* the 16 Year 7–8 lessons (finding-a-side and Pythagoras already had it) have a Predict figure, a `## Make: … on paper` final step, `running:`, "Also used in" and `connection:` where a library entry fits (none for circle-area, parallelograms, parts-of-a-circle, triangles). time-zones' paper task is set on 17 Oct 2026 and says it holds only 4–24 Oct. `teacher.yml` changed in all 16, so they re-record on the next publish. Next: Algebra and Linear relations.
- *Full version, Algebra, Linear relations and Angles (25 Oct 2026, done, pushed; validate clean, 0 page errors headless):* 14 + 12 + 21 lessons now have a `## Make: … on paper` final step (separate step, so saved ticks keep their keys), `running:`, "Also used in" and `connection:` where a library entry exists, `struggle:` where missing, and Predict pictures on letters-first or shape-in-words Predicts (groups B and C). Judgement lessons (comparing-plans, quadrilaterals, views, classifying-triangles, parallel-lines, polygons, quadrilateral-proofs) have picks-only paper tasks. The whole Year 7–8 full version is therefore done; `teacher.yml` changed in about 120 lessons, so the next full publish re-records their clips once. Remaining: connections for lessons with no library entry (15 nodes), and a visual check of the new SVGs on a real screen.
- *Open, shared:* reasoning checks have no slot for a model diagram, so the model flowcharts are step lists; the validate warning "figure outside backticks" fires on correct `<figure>` markup (about 30 existing lessons plus the four new ones).
- *Still to do (the full version):* letters-first and shape-in-words Predict pictures (groups B and C), the paper Make in about 115 lessons, `struggle:` in 45 teacher.yml files, connections and "Also used in".

### Picture check (26 Oct 2026)

Checked all 194 inline `situation` figures added in the last two days (181 lessons in data, number, real-numbers, measurement, algebra, linear-relations and angles) at 390 and 1200 px, light and dark (dark follows the system setting; there is no switch). Dark mode reads fine everywhere. Fixed in `lesson.md` only, no check or answer touched: 41 lessons.
- Text cut off at the edge of the picture in 18 lessons (completing-the-square, scale-factors-area-volume, similar-shapes, write-the-algorithm, distance-two-points, gradient, intercept, recognise-quadratic, vary-formulas, break-it-into-solids, surface-area-composite, finding-a-side, name-the-sides, right-or-not, scientific-notation, powers-of-terms, special-products, variables): picture widened to fit, same scale. Plan boxes in setting-up-equations widened (text ran over the edge).
- Labels crossed by lines or crowded (rotations, translations, quadrilateral-proofs, given, scatterplots, two-way-tables, lines-and-regions, plotting-a-rule, quadratic-three-ways, solve-the-rate-model, time-zones, scale-factors, using-a-plan, exact-or-approximate, volume-composite, volume-prisms-cylinders, non-monic-factorising, the cone-roof label in break-it-into-solids and surface-area-composite): moved.
- A doubled "? ?" at the end of a label (8 lessons) cut to one.
- No picture gives its Predict answer away. Still slightly tight: "moment" beside the arrow in time-zones; the 51 label at the left edge in squares-and-roots lessons.
- Needs your approval: none. Not done: the four lessons with a figure inside a hidden tab (break-it-into-solids, surface-area-composite, volume-composite, reading-log-scales) were checked with the tab forced open. Publish with Publish changed lessons.
## Done: prerequisite checks (decided and built 11 Oct 2026)

The code-style scan does not carry over: maths and science have no code to scan, and their tutorials sit beside class teaching. Checked against the repo: no lesson has a `node:` field (the node is named only in `teacher.yml` summaries, such as Plates "AC9S8U03, node 2"), and the repo holds no progression data (`prior_knowledge` lives in waypoints-kit and no build step reads it). 55 science and 19 maths lessons.

- **Maths:** dependencies are prior skills in a chain, so the ACARA node graph fits. Each lesson gets a `node:` field (today the node is only named in the teacher notes), and the waypoints-kit `prior_knowledge` is exported into the repo (it is not in the repo or read by the build today). The check warns when a lesson's prerequisite node is neither taught in an earlier lesson nor marked `assumes:` (taught in class). In the lesson itself, the prerequisite is checked with a short retrieval question at the start or in Practise, not taken for granted.
- **Maths:** prerequisites form a skills chain, so the node graph fits; in the lesson, a prerequisite is checked with a short retrieval question at the start or in Practise, not assumed.

The shared part (progression data in the repo, the `node:` field and the node check in validate) is in `shared.md` › Shared: progression data and node check.

**Built (11 Oct).** Data: `data/progressions/maths/` holds 13 descriptor pages pasted from the progressions site (the kit repo was unreachable): Year 7 A01–A06, N04, N07, M05 and Year 8 A01–A04. Every maths lesson has `node:`; `npm run validate` warns on gaps (`tools/progressions.mjs`, `npm run nodes`, `npm run check-nodes`; shared.md has the details). Rules agreed: Prior Knowledge and the node before are prerequisites, Related standards are not (many point forward); earlier-year prerequisites count as taught in class; gaps the data misses are tagged `uses:` after reading the lesson.

Read-through findings: Linear relations computes with negatives from Tables from rules on (`uses: [AC9M7N07 …]` on seven lessons, now met by Number Foundations); Tables from rules got a quick check (−4 + 3) before negative inputs. Year 8 lessons `assumes:` the parts of AC9M8A02 that are class work (inequalities, x on both sides). Words into expressions assumes 0 − 1 = −1 (one feedback line). Validate is clean.

## Done: number line board and Number Foundations (11 Oct 2026)

Board widget `numberline` (AUTHORING › 11): fixed, dragged and slider-following points, a live comparison sentence, jumps for + and − with the adding direction drawn faintly when subtracting, `context:` for temperatures; numbers thin out on a narrow screen. Course `maths/number` (pathway id `number-foundations`), unit Integers: 1. Comparing integers (7N07 n1), 2. Adding and subtracting integers (7N07 n2). Teacher notes, primer, voiced explain clips (flite timing 24 s and 28 s), pictures; misconceptions `negative-magnitude`, `subtract-negative`. Every check passes headless.

## Done: geometry board and Angles and shapes (11 Oct 2026)

Board widget `geometry` (AUTHORING › 11): a triangle or polygon on a dot grid, draggable corners, live interior angles rounded so they add to the exact total, Tear off the corners (triangle), Split into triangles from A (convex polygons), presets, More/Fewer sides. Built as its own widget on JSXGraph rather than a preset of `graph` (no axes, square grid, its own values). Course `maths/angles` (pathway id `angles-shapes`), unit Angle sums: 1. Angles in a triangle (7M05 n1), 2. Angles in a polygon (7M05 n2), on the Relationship template (predict, explore, explain why, vary, practise, make). Teacher notes, primer, voiced clips (21 s and 22 s), pictures; misconceptions `angle-sum-size`, `polygon-centre-angles`. Every check passes headless.

## Done: keyboard moves, reference cards, fractions on the line (11 Oct 2026)

- **Keyboard:** the number line and geometry boards have a **Move** row (pick a point, then arrow buttons or keys), so dragged points work without a pointer and clips can press `Move P left`.
- **Reference cards:** maths cards now come from `snippets/maths.json` plus one `snippets/maths-<name>.json` per course (shared.md has the tool change). Number Foundations (9 cards) and Angles and shapes (5 cards) have Reference pages and filled cheat sheets.
- **AC9M7N04 n3:** new unit Fractions and decimals in Number Foundations, lesson 3 *Fractions and decimals on the line* (positive and negative fractions, decimals and mixed numerals; quarters, tenths, a line without zero in the middle; misconception `negative-decimal-direction`). Node 2 (conversions) is assumed taught in class and retrieved with a quick check. The number line board gained `fractions: 4` (readouts as mixed numerals with the decimal).
- The Algebra pathway text no longer says Linear relations is being built.

## Form checks: options compared (prototype run 11 Oct 2026; Numbas chosen)

The plan named two ways to check that an answer is in a required form (expanded, factorised, simplified, a formula's subject): Numbas's JME with pattern matching, or math.js plus our own rules. A third came out of the prototype: the same rules on the parse tree WPM already builds. All three were run on 35 answers to 11 Year 8–10 tasks (expand and simplify, factorise including negatives and a quadratic, collect like terms, index laws, change the subject), then 12 harder ones.

| | Numbas JME | math.js + our rules | Our rules on WPM's tree |
|---|---|---|---|
| 35 main answers | 35/35 (after making `=` order matter) | 35/35 (after reading x(…) as a product) | 35/35 |
| 12 harder answers | 9/12: missed 6(x + 3/2), 2x(x + 2), (x + 3)² | 12/12 (after allowing (x + 3)²) | 12/12 |
| Added download | about 430 KB minified (120 KB gzipped) plus an English locale | about 320 KB (90 KB gzipped), parser only | about 3 KB (1 KB gzipped) |
| Feedback | "like terms or powers not collected" (could be split per rule set) | names the slip: brackets left, like terms not collected, powers not combined, numbers not multiplied, common factor left in a bracket | same as math.js |
| Notes | patterns are compact but subtle (commutative `=`); reads vt as one name | reads x(…) as a function call unless fixed | same parser as the equivalence check; reads vt as v × t |

**Numbas follow-up checks (11 Oct):** Matthew leans to Numbas for answer checks (equivalence and form), WPM staying for board conditions. Three checks, all passed:
1. Letters as students mean them: `scope.expandJuxtapositions` turns `2xy` into 2 × x × y, `vt` into v × t and `x(3)` into x × 3, keeps `sin`, `ln`, `pi`, `e`, and `jme.compare` then finds `xy + yx` equivalent to `2xy`. WPM and Numbas would read answers the same way.
2. Node, for validate: the JME runtime runs in a plain `vm` context (no browser, no jsdom), ready in about 0.3 s; the form checks give the same results as in Chromium.
3. Size: JME runtime plus an English-only locale, minified, about 474 KB (133 KB gzipped); loaded only on lessons with form checks. Some modules (calculus, scheduling) could be trimmed later.
With the three pattern misses fixed (fractions inside a bracket, `x(...)` as a product, a squared bracket), Numbas scores 47/47, like the other two.

Earlier recommendation (before the follow-up checks): our rules on WPM's tree (about 90 lines). Decision now between that and Numbas; either sits behind the `form` slot the boards plan reserved. Prototypes and cases are in the session scratchpad, not the repo. Next, once agreed: `answer` checks take `form: expanded | factorised | simplified | subject x`, then the line-by-line working check, then Year 8 expanding (AC9M8A01 n1) with an algebra tiles board.

## Done: form checks on Numbas, working check, tiles, Expanding brackets (11 Oct 2026)

- **Decision:** Numbas (vendored v11.0, English only, about 133 KB gzipped) marks `answer` checks with `form:` and the new `working` check, and is loaded only on lessons that use them; plain answer checks and board conditions stay on WPM. The follow-up checks (letter splitting, Node, size) all passed. Validate marks every form answer, feedback answer and working example in Node with the same build. `npm run check-forms`: 71 case-file answers, 15 workings, 717 generated answers. Add a case to `data/forms-cases.json` whenever a real answer is marked wrongly.
- **Lenient by design:** an equivalent answer the checker cannot judge passes with a note; a wrong form is told its slip (brackets left, like terms, powers, numbers, not a product, whole numbers, common factor left).
- **Board `tiles`:** algebra tiles for k(ax + b), negatives in red, extra terms to collect.
- **AC9M8A01 n1:** unit Brackets in Algebra Foundations, lesson *Expanding brackets* (tiles, form-checked answers, two working checks, misconception `partial-distribution`, three Reference cards).

## Done: Multiplying and dividing integers (11 Oct 2026)

AC9M8N04 page added; lesson 3 of Number Foundations' Integers unit, *Multiplying and dividing integers* (node 1): the pattern a × (−2), the number line's new `product: a × b` (a negative number of jumps goes the opposite way), division by the same rule, powers of −1; misconception `sign-rules-addition`; two cards. Fractions on the line moves to order 4. Comparing two plans and Solving with graphs now list it in `uses:`; Expanding brackets lists it in `assumes:` with a quick check (−2 × (−5)) before its negative-outside task, since Algebra does not come after Number Foundations; Tables from rules notes that its rule machine shows 2(−2).

## Done: Factorising (11 Oct 2026)

AC9M8A01 n2: lesson 11 of Algebra Foundations' Brackets unit, *Factorising*. The tiles board gains a factorise mode (`s` x-tiles and `t` ones, a `k` rows slider; values `f` rows work, `h` fully factorised, `g` the HCF): tiles that do not share stay in a heap. Form-checked answers (`form: factorised`, numbers and a letter taken out, three terms), a working check that allows taking out a factor in steps, misconception `hcf-not-highest` (Ava's 2(6x − 4)), one Reference card.

## Done: Changing the subject (11 Oct 2026)

AC9M8A01 n3: lesson 12, *Changing the subject*, completing AC9M8A01 in the Brackets unit. The formula board works P = 2l + 2w forwards so students check a rearranged formula by substitution (Run, Modify, and Make with T = 4n + 6). `form: subject x` answers (one step, minus sign, undoing a divide, a fraction, a negative subject), two working checks, misconception `divide-one-term` (Jo's y ÷ 4 = x − 3), one Reference card. The Brackets primer and unit summary now cover all three lessons. Found: the subject check is case-sensitive while Numbas compares letters case-insensitively, so a subject written in the other case (c for C) is told to rewrite; lessons use lower-case subjects for now.

## Done: Linear relations cards (11 Oct 2026)

`snippets/maths-linear.json`: 11 cards in three groups (Rules and tables, Lines, Solving and modelling), five with board pictures (growing pattern, ordered pair, gradient, parallel lines, solve with a graph). The course now has a Reference page and cheat sheets.

## Done: keyboard moves on the graph board (11 Oct 2026)

Every graph board with dragged points gets the Move row (a point picker, arrow buttons and arrow keys, steps of the snap); `drag y` and `drag x` points get only their own directions. Board clips re-record on the next publish anyway (the board playground changed).

## Done: Parallel lines (11 Oct 2026)

AC9M7M04 n1 and n2: a new first unit in Angles and shapes, Parallel lines, with *Angles at parallel lines* (naming corresponding, alternate and co-interior pairs; misconception `vertically-opposite-pair`) and *Finding angles with parallel lines* (the rules and reasons; misconception `co-interior-equal`). New board widget `parallel` (turn the transversal, tilt a line so it is not parallel, pick two angles; the board names the pair unless `names: off`). Angles in a triangle and Angles in a polygon move to orders 3 and 4. Six Reference cards (three with pictures) and a primer.

## Done: reasoning check and unknown angles (11 Oct 2026)

Matthew's steer: students own their working; the platform supports it but is not strict about it (unlike Mathspace). New `reasoning` check: free working never marked, then the answer and a reason chosen at the key step are marked, then the student's working beside a model, with a self-check. Lessons: *Reasoning with angles* (AC9M7M04 n3, Parallel lines lesson 3; misconception `assume-equal-angles`) and *Unknown angles in shapes* (AC9M7M05 n3, last in Angle sums; `wrong-angle-sum`, exterior angle = the two opposite angles). Geometry board: `angles: given …` and `exterior: C`; parallel board: several given angles. Triangle and polygon lessons move to orders 4 and 5. `subject x` answers accept either case.

## Done: equivalent fractions and conversions (11 Oct 2026)

AC9M7N04 n1 and n2 in Number Foundations' Fractions unit: *Equivalent fractions* (misconception `fraction-add-same`) and *Fractions, decimals and percentages* (`decimal-percent-place`), before *Fractions and decimals on the line* (now order 6, its `assumes` dropped). New board widget `bars` (fraction bars and a hundred grid). Answer forms `simplest` and `decimal`; a typed % or ° is ignored. Six cards and the Fractions primer updated.

## Done: Solving harder equations (11 Oct 2026)

AC9M8A02 n2: new unit Equations and inequalities in Algebra Foundations, lesson 13 *Solving harder equations* (x on both sides, brackets, negatives, a fraction, no solution; working checks; the graph shows the solution where the two sides meet; misconception `inverse-sign`; two cards). It lists AC9M8A02 n1 in `assumes:` (graphing lines is Linear relations; the board draws them).

## Done: lines, regions and inequalities (11 Oct 2026)

AC9M8A02 n1: *Lines and regions* (Linear relations, Lines unit, order 8; Solving with graphs, Rules from situations and Comparing two plans move to 9 to 11; misconception `boundary-solid`). AC9M8A02 n3: *Inequalities* (Algebra, Equations and inequalities unit, lesson 14; reversing for a negative, number-line rays, graphical check; `inequality-reverse`). Board: graph `plot: x = a` and `shade:`; numberline `ray:`. Four cards.

## Done: Calculating with negative fractions and decimals (11 Oct 2026)

AC9M8N04 n2: Number Foundations' Fractions unit, lesson 7 (sign first, then size; efficient order and the distributive split, with two reasoning-check strategy tasks). Two cards. Number unit and course summaries updated.

## Done: review fixes and the teachers' page (11 Oct 2026)

An independent read of all 19 lessons found no wrong mathematics; fixed one bug-task line (Max, line 4), one feedback message, unclear working and wording, and added the terms numerator, denominator, reflex, convex, concave, "sum of the two interior opposite angles" and "inequality sign". The parallel board now reports the picked pair (`u`, `v`), so checks can ask for a specific pair. New page *For maths teachers* (`content/maths-teachers.md`, linked from the home page): what is here, how a lesson runs, the teacher guides, a ten-minute tour, and the feedback form. The site is for maths teachers to try when it suits them.

## Done: Data and chance, Year 7 (11 Oct 2026)

New course *Data and chance* (`content/maths/data/`, after Number Foundations): Data unit (Counting and measuring 7ST01 n1, Mean, median, mode and range n2, Which measure? n3, Stem-and-leaf plots 7ST02 n1, Comparing data sets n2 and n3) and Chance unit (Sample spaces and probability 7P01 n1 and n2, Predict and test 7P01 n3 and 7P02 n1, Many trials 7P02 n2). 7ST03 (statistical investigations) is a class task in the Data primer. New board widgets `data` and `chance`; progression pages written from the kit by `tools/kit-page.mjs`; misconceptions discrete-decimal, median-unsorted, mean-always-best, stem-skip-empty, compare-single-value, equally-likely-outcomes, expect-exact, gamblers-fallacy; 11 cards and two primers.

## Done: Number gaps, squares, powers and fractions operations (11 Oct 2026)

Number Foundations gains a unit *Squares, powers and primes* between Integers and Fractions (orders 4 to 8): Squares and square roots (7N01 n1, n2), Between the squares (n3, n4), Powers (7N02 n1), Prime factors (n2), HCF and LCM (n3). It sits before Fractions because simplifying and common denominators use the HCF and LCM. The fractions unit gains Adding and subtracting fractions (7N06 n1), Multiplying and dividing fractions (n2), Percentages of amounts (n3) and Choosing a strategy (n4), before Calculating with negative fractions and decimals (now 16); the existing fractions lessons are renumbered 9 to 11 (slugs unchanged, so progress is kept). New board widgets `square`, `factortree` (with `grown: on` for pictures), `fracadd`, `fracarea` and `percent`; misconceptions square-double, power-times, tree-stops-early, lcm-product, fraction-add-across, multiply-makes-bigger, decrease-multiplier; 13 cards; a Powers primer; the Fractions primer covers the operations. Reasoning checks are used for the bus problem (LCM), bounding a root, and the strategy lesson; the HCF and LCM Make step is a reasoning check (two numbers from their HCF and LCM).

## Done: Area, volume and circles, Year 7 (11 Oct 2026)

New course *Area, volume and circles* (`content/maths/measurement/`, the pathway's `area-volume` course, after Angles and shapes, Number and Algebra): Area unit (Area of parallelograms 7M01 n1, Area of triangles n1, Area problems n2), Volume unit (Volume in layers 7M02 n1, Prisms and capacity n2), Circles unit (Parts of a circle 7M03 n1, Discovering π n2, Circumference n3). New board widgets `area` (cut and move, turned copy, height outside), `prism` (isometric layers) and `circle` (roll it out, C ÷ d table); misconceptions slant-height, triangle-no-half, area-units, volume-visible-cubes, radius-diameter, pi-exact; 11 cards; three primers. Reasoning checks: the house wall (composite area), the biggest circle in a box, and d = C ÷ π. Every lesson has a `struggle:` note, and so do the nine Number lessons from the morning batch.

## Done: Classifying shapes and Pythagoras (11 Oct 2026)

Angles and shapes gains a unit *Classifying shapes* (lessons 7 to 9): Classifying triangles (7SP02 n1), The quadrilateral family (n2), Polygons (n3), on the geometry board with `classify: on` (ticks, parallel arrows, right-angle marks, live names; a trapezium has at least one pair of parallel sides, as in the Australian Curriculum glossary, so parallelograms are trapezia too). The measurement course becomes *Area, volume, circles and Pythagoras* with a unit *Pythagoras* (lessons 9 to 11): Pythagoras' theorem (8M06 n1), Finding a side (n2), Right, acute or obtuse? (n3), on the new `pythag` board (squares on the sides, an angle slider). Misconceptions acute-one-angle, square-not-rectangle, regular-sides-only, pyth-no-squares, pyth-add-for-leg, c-not-longest; 7 cards; two primers; struggle notes.

## Done: Number, the rest of Year 7 (11 Oct 2026)

Number Foundations gains three units and eight lessons (17 to 24): Place value and estimating (Place value and powers of 10, 7N03 n1 and n2; Rounding decimals, 7N05 n1 and n2; Estimating to check, 7N05 n3), Ratios (What is a ratio?, 7N08 n1; Equivalent and simplest ratios, n2; Sharing in a ratio, n3) and Modelling (Modelling with money, 7N09 n1 to n3; Modelling with ratios, 7M06 n1 and n2). New boards `placevalue`, `rounding` (round, estimate) and `ratio` (tape, share); primers `placevalue.md`, `ratio.md`, `modelling.md`; 15 reference cards; nine misconceptions (power-off-by-one, round-truncate, round-double, est-zero-slip, est-no-compare, ratio-part-whole, ratio-add-not-multiply, share-by-term, percent-wrong-base, model-no-units). An independent reviewer found and we fixed wrong feedback messages, a clip that showed 2000 not 4000, a self-contradictory option and several uncovered node criteria. Lessons 17 to 24 sit after the fractions unit so no existing lesson was renumbered. Modelling with money comes before Modelling with ratios because M06 assumes N09.

## Done: Space and investigations, the rest of Year 7 (11 Oct 2026)

Angles and shapes gains three units and six lessons (10 to 15): Solids (Nets, 7SP01 n1; Views of a solid, n2 and n3), Transformations (Translations, 7SP03 n1; Reflections, n2; Rotations, n3) and Algorithms (Algorithms for classifying shapes, 7SP04 n1 and n2, on the `key` board). Linear relations gains *Changing one thing at a time* (12, 7A06 n1 and n2, on the `formula` board) and Data and chance gains *Statistical investigations* (9, 7ST03 n1 and n2, on the `data` board); a full investigation is still a class task, which the teacher notes and the Make step set up. New boards `transform`, `net` and `views` (see roadmap/shared.md). New misconceptions: net-count-only, view-adds-up, translate-sign, reflect-axis-swap, rotate-swap-only, algo-general-first, vary-two-at-once, sample-generalise. The Year 7 descriptors left over from the earlier pushes (7SP01, 7SP03, 7SP04, 7A06, 7ST03) are now taught.

## Done: Practice for every maths lesson: multiple choice and diagrams (12 Oct 2026)
- The 11 lessons left out now have practice: Angles at parallel lines (name the marked pair, or click a pair on the board), the two algorithm lessons and Proving quadrilateral properties (choices), Reading a graph and Describing a relationship (graphs drawn from the numbers), Bias, Collecting data, Investigations, Investigating with samples and Checking a model (scenario banks). Finding angles with parallel lines gained a diagram question.
- Review fixes: SSA triangles that could not exist, fuel values off the grid, a temperature peak always at 15 h, "Similar (AA)" also true for congruent triangles (now "Similar, not congruent"), right answers that stood out by length or were the only same-crossing pair, banks with the same answer every time (now varied, including "Yes" cases for sample size), focus after a wrong choice.
- Not done: turning off Pick on parallel-lines diagrams (students can move the marked pair); geometry diagrams for triangle and polygon angles (the template would need the widget's rounded angles).

## Pilot Algebra with a class (agreed 12 Oct 2026; not run: on 25 Oct Matthew said to build Year 9 ahead of a class pilot, so this is still open and can happen on the published lessons)
- One lesson, then its practice (the lesson's "Practise this skill" card), for one or two lessons. Expanding then Factorising suit it: the form messages get used.
- Watch for: where students stall on the lesson page; which practice messages they hit (format slips, "Use the letter n", Show the answer); whether 3 in a row feels right; whether mixed practice helps or confuses.
- Bring back: the questions or messages that confused them, and anything they typed that was right but marked wrong. Fix those, then decide Year 9's first strand.

## Year 9 (12 Oct 2026 plan; all five batches built 25 Oct 2026, on `main`, not yet published or tried with a class; status notes under each batch, the original plan text follows)
23 descriptors, 70 nodes (`data/curriculum/maths.json`). About 45 lessons, built in five batches, each a push with a review, practice sets and the usual checks. Year 9 units go into the existing courses where the Year 8 work leads (progress is per lesson, so nothing moves); two new courses where nothing fits.

**Before batch 1, from the pilot:** change the lesson shape or practice where students stalled; keep what worked. Questions to settle: is one lesson then its practice the right rhythm; do students use Show the answer or skip; is 3 in a row right.

1. **Algebra core** (Algebra Foundations, new unit "Year 9: binomials"; Irrational numbers and index laws, new unit "Year 9"). Follows the pilot's lessons directly.
   - A02 n1–n4: expanding binomials, the (x + a)(x + b) pattern, factorising monic quadratics, expand and factorise as inverses. Board: extend `tiles` to two brackets (x², x and unit tiles in an area). Practice: `form: expanded | factorised` already does this.
   - A01 n1–n3: negative exponents, all the laws with numbers, then with letters. Board: `indexlaws` (add negative exponents as division).
   - M02 n1–n3: scientific notation, calculating, contexts (science sizes). No new widget.
   - N01 n1–n4: subsets of the reals, exact and approximate, the line and inequalities, problems. Board: `numberline` (add nested sets).
2. **Coordinate geometry and functions** (Linear relations, new unit "Year 9: lines and curves"; possibly a new course "Quadratics").
   - A03 n1–n5: gradient from two points, parallel and perpendicular, distance (Pythagoras on the grid), midpoint, contexts. Board: `graph` (points, segments; add a run/rise triangle between two points).
   - A06 n1–n3: parameters in linear and quadratic families. Board: `graph` with sliders (already plots y = a(x − h)² + k).
   - A04 n1–n4: spotting quadratics in tables, graphing and key features, solving by factorising, connecting the three. Board: `graph`; practice gains roots as two answers (a small engine change: "x = 2 or x = −5").
   - A05 n1–n3: modelling change (linear or quadratic), solve, judge the model. Shares the model-checking shape of Number's Checking a model.
3. **Trigonometry and space** (Area, volume, circles and Pythagoras, new unit "Year 9: trigonometry"; Angles and shapes for enlargement).
   - SP01 n1–n3: naming sides from an angle, ratios constant by similarity, sin, cos, tan. New widget `trig`: a right triangle with an angle slider and a scale slider, the three ratios live (the similarity argument made visible).
   - M03 n1–n4: unknown sides, unknown angles, similarity in triangles, multi-step problems. Board: `trig`, `similar`.
   - SP02 n1–n2: enlargement keeps angles and shape; length × k, area × k², volume × k³. Board: `similar` (add area and volume readouts).
   - M01 n1–n3: surface area from nets (prisms and cylinders), volume of prisms and cylinders, problems. Board: `net` (add cylinder), `prism`.
   - M04 n1–n3: every measurement is an estimate, absolute and relative error, percentage error. Board: `numberline` as a ruler with an error interval.
   - M05 n1–n3: proportion and rate models. Pairs with A05 (one shape for modelling lessons).
4. **Chance and statistics** (Data and chance, new units "Year 9: chance" and "Year 9: statistics").
   - P01 n1–n3: listing two- and three-step outcomes, with and without replacement, probabilities on trees. Board: `events` (add without replacement and three stages).
   - P02 n1–n3: relative frequency, and / inclusive or / exclusive or, estimating from data. Board: `venn`, `events`.
   - P03 n1–n3: design, run and evaluate a simulation. Board: `events` trials, `sample`.
   - ST01–ST05 (12 nodes): reading survey reports and claims, how sampling and displays push a view, comparing distributions (back-to-back stem-and-leaf, side-by-side dot plots, histograms), choosing displays, an investigation. Board: `data` (add histograms and grouping), `sample`. Practice: mostly scenario banks (`cases` + `choices`), which exist now.
5. **Geometric algorithms** (SP03 n1–n3; Angles and shapes, unit "algorithms"): write, test and refine an algorithm for a geometric process. Board: `key` for decision steps, plus a link to the code courses (a Python turtle version as a Wider step).

**New widgets:** `trig` only. Extensions: `tiles` (binomials), `indexlaws` (negative), `graph` (rise/run between points), `similar` (area and volume), `net` (cylinder), `events` (without replacement, three stages), `data` (histogram), `numberline` (sets, error interval).
**Engine:** practice answers with two roots ("x = 2 or x = −5"); everything else exists.
**Teacher layer:** primers per new unit; curriculum map picks up Year 9 nodes automatically from `node:` tags.
**Order rationale:** batch 1 extends the piloted Algebra lessons, so the pilot's lessons apply first; trig (batch 3) is the biggest new idea and gets the one new widget; statistics last because its practice is judgement banks, the newest engine part.

## Year 9 plan, updated (25 Oct 2026)
The 12 Oct plan above stands: same five batches, same courses and units. Three things change.

**1. Board gap check (widget headers read 25 Oct).** No new boards except `trig`; everything else is a mode or setting on a board that exists, built when its lesson needs it.

| Need | Board today | Change |
|---|---|---|
| (x + a)(x + b) as an area (9A02 n1–n4) | `tiles`: one bracket k(ax + b), or factorising into rows | mode `binomial`: two brackets, x², x and unit tiles; factorise by arranging into a rectangle |
| negative and zero powers (9A01 n1) | `indexlaws`: product, quotient, power, zero (positive only) | mode `negative`: the quotient board continued below zero (aᵐ ÷ aⁿ with n > m, the leftover factors under a line) |
| gradient, distance, midpoint between two points (9A03) | `graph`: points, segments, `step` on a plot only | `rise: A, B` (the run/rise triangle between two points) and readouts of length and midpoint on a `segment` |
| quadratics, parameters (9A04, A06) | `graph`: any plot, sliders, `cross` | none (turning point and x-intercept markers if a lesson asks) |
| trig ratios (9SP01, M03) | `pythag` has an angle slider, no ratios | new `trig`: right triangle, angle and scale sliders, opposite/adjacent/hypotenuse named from the chosen angle, the three ratios live |
| area and volume under enlargement (9SP02 n2) | `similar`: lengths only | area and volume readouts (k² and k³) |
| cylinder net and volume (9M01) | `net`: cube, triangular prism; `prism`: rectangle or triangle base | `net` mode cylinder (unrolled rectangle); `prism` base circle |
| without replacement, three stages (9P01) | `events`: two equally likely events | `replace: off` and a third event |
| and / or, relative frequency (9P02) | `venn`, `events` trials | none |
| skew, histograms, back-to-back (9ST03) | `data`: dot plot, stem-and-leaf, two sets | `view: histogram` (with bin width) and back-to-back stem |
| error intervals (9M04), sets of numbers (9N01) | `numberline`: rays for inequalities | `interval: a, b` (closed band); nested-sets picture is a hand SVG, not a board |
| sampling (9ST02) | `sample` | none |
| geometric algorithms (9SP03) | `key` | none (plus a turtle link as a Wider step) |

Year 10 needs, for later: `graph` scatter (dots, not a line) and log axis; `data` boxplot; `events` with unequal branch probabilities (conditional trees); a `network` maths board (nodes, edges, degrees; the systems `network` widget is about packets, not graphs); `space3d` box diagonal for 3D right triangles.

**2. Openings come from the library.** Each lesson's opening, Make and "Also used in" are picked from `data/connections/maths.yml` by its node, at the steps the node lists; nodes whose purpose is hood or step get no forced world opening (an Explain it or a "why it works" picture instead). Batch 1 picks:
- 9A02 n1 expanding binomials: the garden bed extended by x each way (`garden-extend`), and 47 × 53 in your head (`mental-shortcut`) as the hook.
- 9A02 n2 the pattern: `mental-shortcut` (hood). n3 factorising: step only, its use shown downstream ("when does the ball land", 9A04). n4 both forms: `ball-arc`.
- 9A01 n1 negative powers: hair and red blood cells (`metric-small`). n2–n3: step only.
- 9M02 scientific notation: how far away is the Sun (`sunlight-time`, Smithsonian), micrograms on a medicine label (`microgram-dose`).
- 9N01 real numbers: n2 exact or rounded (`square-patch`); n3 tolerances (`part-tolerance`); n4 circle areas (`pizza-value`); n1 hood only.

**3. What applies from the pilots.** Voice and "Writing the move" rules (maths-when-where-why.md); picture before symbols on every Predict (a hand SVG of the situation, never the answer); the opening never says what Predict asks; `smaller:` on the Practise task where the node's hinge bites, from the start; sources for every figure.

**Batch 1 built (25 Oct 2026), not yet published, not yet tried with a class.** Matthew said to build ahead of a class pilot. 14 lessons, same shape as the pilots (picture-first Predict, a board Run where one helps, Investigate with a planted error, worked example then a paper try-one, Modify with an edge case, Practise with a review, Make back to the opening, Also used in), `smaller:` on the hinge Practise or Modify task, `paper: true` reasoning in Make:
- Algebra, unit binomials: Two brackets, The pattern, Factorising quadratics, Expand or factorise? (9A02 n1–n4).
- Real numbers, unit powers9: Negative powers, All the index laws, Index laws with letters (9A01 n1–n3).
- Measurement, unit sci9: Scientific notation, Calculating in scientific notation, Real measurements (9M02 n1–n3).
- Real numbers, unit reals9: Number families, Exact or rounded?, Ranges on the line, Formulas with π and roots (9N01 n1–n4); these four have no playground, only checks (one numberline board in Ranges).
- Board changes (shared, need a full publish before these lessons work live): `tiles` `mode: binomial` (with `target:`), `indexlaws` `mode: negative`, `placevalue` `mode: scientific`. The `graph` board is reused unchanged in Expand or factorise?. No new widget.
- Sourced figures: SI prefixes (BIPM), speed of light (NIST), Earth–Sun distance (NASA), light time (Smithsonian), hair width and red blood cell size (Wikipedia, Micrometre). Other sizes (garden, bowl, bolt hole, pizzas, patch) are labelled made up.
- Not done: the numberline `nested sets` mode in the earlier plan was not needed (a sort check does it). Nothing in batch 1 has been checked by a teacher.
- Do not publish these lessons with publish-lessons alone: the three board modes are outside content/ and need Matthew's full publish first.

**Year 9 batch 2 built (25 Oct 2026), not yet published, not yet tried with a class.** 13 lessons in `content/maths/linear-relations/`, same shape as batch 1 (picture-first Predict, board Run, Investigate with a planted error, worked example then paper try-one, Modify with an edge case, Practise with a review, Make back to the opening, Also used in), `smaller:` on hinge tasks, `paper: true` reasoning in Make. Each has a practice page, teacher.yml and misconceptions entries:
- Coordinate geometry (unit `lines9`): gradient-two-points, parallel-perpendicular, distance-two-points, midpoint, coordinate-problem.
- Quadratic relationships (unit `quad9`): recognise-quadratic, graph-quadratic, solve-by-factorising, quadratic-three-ways, linear-or-quadratic, solve-the-model (A05 n2 and n3 together).
- Changing the rule (unit `vary9`): vary-line (y = ax + b), vary-curve (y = a(x − h)² + k). A06 n3 is not built.
- Board change (outside content/): the `graph` widget gained `rise: A, B` (dashed run and rise triangle; scope letters h across, v up, m gradient, d length, p and q midpoint). Full publish needed, together with batch 1's board modes (`tiles` binomial, `indexlaws` negative, `placevalue` scientific).
- Sourced figures: ramps at most 1 in 14 for up to 9 m (AS 1428.1, via the Queensland Health slides); stopping distances 19, 27, 37 and 56 m at 30 to 60 km/h (Transport for NSW speeding page, checked 25 Oct 2026). The solve-the-model quadratic and the ball and phone-plan rules are labelled made up for the task.
- Do not publish batch 2 with publish-lessons alone (the `rise:` directive is a board change).

**Year 9 batch 3 built (25 Oct 2026), not yet published, not yet tried with a class.** 18 lessons, same shape as batches 1 and 2, each with a practice page, teacher.yml and misconceptions entries:
- Trigonometry (Measurement, unit `trig9`, orders 21 to 27): name-the-sides, same-angle-same-ratio, sine-cosine-tangent (9SP01 n1 to n3), find-a-side-trig, find-an-angle, similar-triangles-scale, ramp-to-a-door (9M03 n1 to n4). Boards on the new `trig` widget in the first six (the last two have none).
- Enlargement (Angles and shapes, unit `enlarge9`, orders 25 and 26): enlargement-keeps, scale-factors-area-volume (9SP02 n1, n2). No board: SVG pictures and checks.
- Surface area and volume (Measurement, unit `solids9`, orders 28 to 30): surface-area-from-nets, volume-prisms-cylinders, area-volume-problems (9M01 n1 to n3). No board; the `net` cylinder and `prism` circle modes in the plan were not needed.
- Measurement error (unit `error9`, orders 31 to 33): every-measurement-estimate, absolute-relative-error, percentage-error (9M04 n1 to n3). No board (numberline `interval:` not needed).
- Proportion and rate models (unit `models9`, orders 34 to 36): proportion-rate-model, solve-the-rate-model, judge-the-model (9M05 n1 to n3), one Naismith's rule thread.
- Board change (outside content/): new widget `playground-board/widgets/trig.js` (registered in the board's `index.html`): a right triangle with a marked angle `t` and hypotenuse `h`, sides named from the angle, live sin, cos and tan, `show:` to pick rows (or `none`), `switch: on` to look from the other angle. Full publish needed, with batch 1 and 2's board changes.
- Sourced figures: the 1 in 14 ramp limit for up to 9 m (Queensland Health slides on AS 1428.1), 1 mm of rain on 1 m² is about a litre (Bureau of Meteorology climate data FAQ), Naismith's rule 5 km/h plus 1 hour per 600 m (bushwalk.com navigation FAQ). All checked 25 Oct 2026. Tree, flagpole, can, tank, bolt hole, swimmer times, screen sizes and the group's 4 km/h pace are labelled made up for the task.
- Not built from the plan: no `similar` area and volume readouts, no `net` cylinder, no numberline interval (lessons use pictures and checks instead).
- Do not publish batch 3 with publish-lessons alone (the `trig` widget is a board change).

**Year 9 batch 4 built (25 Oct 2026), not yet published, not yet tried with a class.** 21 lessons in the Data and chance course (`content/maths/data/`, orders 21 to 41), same shape as batches 1 to 3, each with a practice page, teacher.yml and misconceptions entries. New units `chance9` and `stats9` in the course's `index.md`.
- Chance (unit `chance9`, orders 21 to 29): compound-outcomes, with-and-without-replacement, probabilities-add-to-one (9P01 n1 to n3); relative-frequency-estimates, and-inclusive-or-exclusive-or, estimating-compound-from-data (9P02 n1 to n3); design-a-simulation, run-the-simulation, describe-and-evaluate-results (9P03 n1 to n3). Boards: `events` for 21 to 23 and 28, `venn` for 25; the rest are tables and checks.
- Statistics (unit `stats9`, orders 30 to 41): how-was-the-data-obtained, mean-or-median-claims (9ST01 n1, n2); two-methods-two-answers, displays-that-persuade (9ST02 n1, n2); describe-shape, compare-on-the-same-scale, centre-spread-shape-outliers (9ST03 n1 to n3); match-display-to-data, justify-a-display (9ST04 n1, n2); plan-an-investigation, collect-and-analyse, report-the-findings (9ST05 n1 to n3, the recycling audit thread). Boards: `data` for 31, 34, 35, 36 and 40 (second data set for comparing); the rest are pictures and checks.
- Board change (outside content/): `events` gets `replace: off` (a draw with nothing put back: the second list must equal the first, no diagonal in the grid, fewer branches in the tree). Full publish needed, with the earlier board changes. No histogram or back-to-back widget was built (dot plots with `second:` and checks were enough).
- Sources: no real figures are used except the Westpac explainer linked in mean-or-median-claims for why median house prices are reported; bus, battery, poll, canteen, clinic and recycling numbers are all labelled made up for the task.
- Do not publish batch 4 with publish-lessons alone (the `events` change is a board change).



## Year 10: built (25–26 Oct 2026; plan below, status in the notes under each batch)

**Status: all five batches are built and pushed to `main`, not yet published or tried with a class.** About 59 lessons plus 3 project briefs and an ethics quick check; the 69 nodes are all built or assigned to class. Board changes (`trig`, `space3d`, `formula`, `venn`, `events`, `data`, `graph`, `tiles`, `netgraph`) and the `lesson-view.mjs` phone fix need the full publish. The text below is the original plan; the "built" notes after each batch are current.
21 descriptors, 69 nodes, 23 of them hinges (`data/curriculum/maths.json`). About 59 lessons in five batches, same lesson shape as Year 9 batch 1 (picture-first Predict, a board Run where one helps, Investigate with a planted error, worked example then a `paper: true` try-one, Modify with an edge case, Practise with a review task, Make back to the opening, Also used in). Openings and Makes come from `data/connections/maths.yml`, which already covers every Year 10 node.

**Decided (25 Oct, Matthew):** Year 10 batch 1 is built now; Year 10 batch 2 waits until Year 9's batches are finished. Networks (batch 5): use both. Mermaid diagrams carry the network pictures in all three lessons (decks and worksheets too); the `netgraph` board is used only for "Every street once" (10SP02 n2), where trying routes is how students find the odd-degree rule. If the board slips, that lesson ships as a Mermaid version (count the degrees, answer a question check). `netgraph` needs the full publish.

**Year 10 batch 1: built (25 Oct 2026, validated, built, every page and board loaded in headless Chromium with no page errors, practice and forms checks pass; not yet tried with a class).** 12 lessons: Real numbers (powers-of-terms, exact-or-approximate, chop-or-round, rounding-over-and-over), new course Quadratics and exponentials at `content/maths/functions/` (same-ratio, exponential-graphs, graph-to-equation, same-base), Measurement (how-big-is-a-step, reading-log-scales), Algebra (special-products, non-monic-factorising). Only the last two need a board change (`tiles` coefficients, see shared.md): full publish. The rest can go through publish-lessons. Sources still to approve: NSW Food Authority 2-hour/4-hour rule (same-ratio, same-base); check the noise-dose and quake-magnitude figures in their teacher.yml.

**Order (as planned; all Year 9 and Year 10 batches are now built, so this is history).** Only batch 1 builds on what exists (Year 9 batch 1: index laws, binomials, real numbers, scientific notation). Every other Year 10 batch needs a Year 9 batch that isn't built yet, so the plan interleaves by strand: Year 9 batch 2, then Year 10 batch 2, and so on.

| Year 10 batch | Needs first |
|---|---|
| 1 Powers, exponentials and approximation (12) | Year 9 batch 1 (built) |
| 2 Equations, two variables and models (13) | Year 9 batch 2 (gradient, quadratics, parameters) |
| 3 Trigonometry, solids, error and proof (14) | Year 9 batch 3 (`trig`, cylinders, error intervals, enlargement) |
| 4 Conditional probability and statistics (15) | Year 9 batch 4 (without replacement, histograms) |
| 5 Networks and spatial algorithms (5) | Year 9 batch 5 (geometric algorithms) |

**Year 10 nodes by course** (H = hinge; `class` = left to class, no lesson).
- **Real numbers** (unit "Year 10: powers and approximation"): 10A01 n1 H exponent laws with letters, n2 negative exponents (one lesson for both: Year 9 taught each half); 10N01 n1 exact or approximate, n2 H truncating or rounding, n3 approximating over and over.
- **Algebra** (unit "Year 10: quadratics by hand"; inequalities join the existing solving unit): 10A01 n3 H special products, n4 non-monic factorising and completing the square (two lessons), n5 solving algebraically; 10A02 n1 linear inequalities.
- **Linear relations** (unit "Year 10: two variables"): 10A02 n2 regions, n3 H simultaneous equations (two lessons: substitution, elimination), n4 setting up in context.
- **New course "Quadratics and exponentials"** (`functions/`): 10A03 n1 H constant ratio, n2 H exponential graphs, n3 equation and graph, n4 exponential equations; 10A04 n1 H which model, n2 writing the model, n3 judging the model; 10A05 n1 H conjecture with a graphing tool, n2 intersections, n3 circles as relations, n4 generalising (class). Proposal: Year 9's quadratics (9A04, 9A06, batch 2) move here too, instead of the "possibly a new course" in the 12 Oct plan. Linear relations stays linear.
- **Measurement** (Area, volume, circles and Pythagoras): units "Year 10: composite solids" (10M01 n1 H decomposing, n2 H surface area, n3 volume, n4 modelling = Make of n3), "Year 10: log scales" beside sci9 (10M02 n1 H the log idea, n2 + n3 reading and comparing, one lesson), the Year 9 trig unit continued (10M03 n1 H elevation and depression, n2 bearings, n3 3D into 2D), "Year 10: error" (10M04 n1 sources, n2 H one error's effect, n3 errors that build up), "Year 10: scale" (10M05 n1 H scale factors, n2 scaled plans, n3 modelling = class and the Make of n2).
- **Angles and shapes**: unit congruence continued as "Year 10: proof" (10SP01 n1 H demonstration or proof, n2 H writing a proof, n3 using theorems); new unit "Networks" (10SP02 n1–n3); algorithms unit continued (10SP03 n1 H defining the problem, n2 designing, n3 testing = class project and the Make of n2).
- **Data and chance**: chance unit continued (10P01 n1 H the language, n2 H tables, Venns and trees, n3 independent or not; 10P02 n1 + n2 simulate and compare, one lesson; n3 = class); samples unit continued (10ST01 n1 misleading graphs, n2 samples in reports, n3 ethics = class); statistics unit continued (10ST02 n1 H five-number summary, n2 H boxplots, n3 comparing; 10ST03 n1 scatterplots, n2 describing association, n3 association or cause; 10ST04 n1 + n2 H row and column percentages, one lesson (Year 8 built two-way tables), n3 careful claims); 10ST05 n1 H posing the question (lesson), n2–n3 the investigation itself (class, like Year 8's Investigations).

**Left to class (8 nodes):** 10A05 n4, 10M01 n4 and 10M05 n3 (modelling; each is the Make of the lesson before), 10SP03 n3, 10P02 n3, 10ST01 n3 (ethics is a discussion), 10ST05 n2–n3 (a real investigation). Each gets a teacher-guide line, not a lesson.

**Board gap check (widget headers read 25 Oct).** One possible new board (a maths network), the rest small modes. Text, a hand SVG or real data does most of Year 10.

| Need | Board today | Change |
|---|---|---|
| special products, non-monic (10A01 n3–n4) | `tiles` `mode: binomial` (x + p)(x + q) | coefficients on x, (2x + 1)(x + 3); difference of squares already works (q = −p) |
| completing the square (10A01 n4) | `tiles` | `mode: square`: x² and the x-tiles split round it, the missing corner shown |
| exponent laws, negatives (10A01 n1–n2) | `indexlaws` all modes | none |
| inequalities, regions, simultaneous (10A02) | `numberline` `ray`, `graph` `shade` and `cross` | none |
| exponentials (10A03) | `graph` plots `^`, sliders, table, dashed lines | none; the asymptote is a dashed `y = 0` plot. A ratio column on `table` only if a lesson asks |
| which model, writing it (10A04) | `graph` `series` (real data) and plots | none |
| conjectures, intersections (10A05 n1–n2) | `graph` sliders, `cross` | none |
| circle as a relation (10A05 n3) | `graph` plots only y = … | `circle: h, k, r` (or two half-plots as a stopgap) |
| composite solids (10M01) | `prism` (circle base from Year 9), `net` cylinder (Year 9) | none: hand SVG of the solid, the `formula` board for the volume. No 3D composite widget |
| log scales (10M02) | none | a data picture (magnitudes, decibels); `numberline` `scale: log` only if the Run needs one |
| elevation, bearings (10M03 n1–n2) | `trig` (Year 9, not built) | `trig` `view: elevation` (horizontal and eye level) and `view: bearing` (north line, 3-figure bearing) |
| 3D into 2D (10M03 n3) | `space3d` box | `diagonal: on` (face diagonal, then space diagonal), the Year 9 note |
| measurement error (10M04) | `formula`, `numberline` `interval` (Year 9) | `formula` `accuracy:`: each slider ± half its unit, result shown as a lowest–highest range |
| scale (10M05) | `similar` with area/volume readouts (Year 9) | none; floor plans are hand SVGs |
| proof (10SP01) | `geometry`, `parallel`, `congruence` | none; dragging is the demonstration, the `paper: true` reasoning is the proof |
| networks (10SP02) | none (`network` is the systems one: packets) | new `netgraph`: nodes and edges, degrees live, click a path and see if it uses every edge once. Fallback: Mermaid diagrams with number and question checks, no board |
| conditional probability (10P01) | `venn` (counts and table), `events` | `venn` `given: a` (the whole shrinks to A); `events` unequal branch weights on trees |
| simulating it (10P02) | `events` trials, `chance` bag | `events` trials with the weighted first event (same change) |
| boxplots (10ST02) | `data` dots, stem, two sets | `view: box` (five-number summary marked, two sets one above the other) |
| scatterplots (10ST03) | `graph` `series` joins points | `series …, dots` (no line); a draggable line A, B already works for a line by eye |
| two-way percentages (10ST04) | `venn` table | none: a Markdown table and number checks |
| misleading reports (10ST01) | none | none: drawn charts, real headlines |

**New board:** `netgraph` only, and only if Matthew wants the interactive Run (question 2 below). **Modes:** `tiles` (coefficients, square), `graph` (circle, dots), `trig` (elevation, bearing; after Year 9 builds `trig`), `space3d` (diagonal), `formula` (accuracy), `venn` (given), `events` (weights), `data` (box). **Shared tool:** `tools/math-expr.mjs` has no `pi`, so composite volumes either use a number for π or need `pi` added there (check roadmap/shared.md and `git log` first; Formulas with π may already show the way). Every lesson on a changed board needs Matthew's full publish first, not publish-lessons alone.

**Batches** (lesson, node, opening → Make; `smaller:` on the hinge Practise or Modify task unless marked; † = figure needs a source link before it's stated).

1. **Powers, exponentials and approximation (12; Real numbers, Quadratics and exponentials, Measurement).** Starts straight after Year 9 batch 1. One board change (`tiles` coefficients, for Non-monic factorising); the other 11 lessons need none and could go out with publish-lessons.
   - All the laws, with letters (10A01 n1–n2, H): `scale-up-monster` (a model scaled by 3 has 27 times the volume) → simplify its scale-up formula. `smaller:` one law at a time with numbers.
   - Exact or rounded, again (10N01 n1): `square-patch` (hood) → keep √ exact through a two-step calculation.
   - Chop or round? (10N01 n2, H): `cents-chop` (a shop chops instead of rounding) → total the error over a day's sales. Prices and sales labelled made up. `smaller:` one price chopped and rounded.
   - Rounding over and over (10N01 n3): `compound-savings` with the rate rounded each year → compare with exact. † a current bank rate (or label it made up).
   - Same ratio each time (10A03 n1, H): `food-left-out` (why 4 hours, not double 2?) → doubling table. Source in the library (NSW Food Authority); † any bacteria doubling time stated as fact (or "a doubling time to try", made up). `smaller:` one ratio from two rows.
   - Exponential graphs (10A03 n2, H): `cooling-tea` (will it get colder than the room?) → sketch from the class's own readings (no source needed). `smaller:` where does it cross the y-axis.
   - From graph to equation (10A03 n3): `cooling-tea` (step) → read a and b off the class graph.
   - Same base both sides (10A03 n4): `food-left-out` (step) → when does it pass 1000 times.
   - How big is a step? (10M02 n1, H): `quake-magnitude` (Geoscience Australia, sourced) → magnitude 5 against 7. `smaller:` one step of the scale.
   - Reading log scales (10M02 n2–n3): `noise-dose` (SafeWork SA, sourced) → how long at 100 dB; Also used in: `kilo-mega-giga`.
   - Special products (10A01 n3, H): `mental-shortcut` (hood, 49² and 51 × 49 in your head) → its own shortcut; tiles. `smaller:` the four pieces with numbers.
   - Non-monic factorising (10A01 n4): step only, use shown downstream (`frame-border`, next batch) → factorise the frame's area expression. Tiles with coefficients (the one board change if built in this batch; otherwise move it to batch 2).
2. **Equations, two variables and models (13; Algebra, Linear relations, Quadratics and exponentials).** After Year 9 batch 2.
   - Completing the square (10A01 n4): `ball-arc` (highest point) → its turning point. Tiles `mode: square`.
   - Solving algebraically (10A01 n5): `frame-border` (border width for 1000 cm²) → solve and check the frame. Made-up sizes, labelled.
   - Inequalities (10A02 n1): `ride-budget` → how many rides. Made-up prices, labelled.
   - Regions (10A02 n2): `party-region` → which pizza and drink combos fit $120.
   - Substitution, Elimination (10A02 n3, H; two lessons): `plans-cross` and `gym-or-casual` → when two plans cost the same. `smaller:` one variable already known. † gym prices if real (or made up).
   - Setting it up (10A02 n4): `electricity-plan` (from a real bill: the student's own numbers, no source) → explain the answer in a sentence.
   - Which model? (10A04 n1, H): `car-value` (same dollars or same share each year?) → test both on the data. † advertised prices for one model (a dated listing, or labelled made up). `smaller:` differences, then ratios, on three rows.
   - Writing the model (10A04 n2): `compound-savings` → how long to double. † the rate.
   - Judging the model (10A04 n3): `car-value` or `food-left-out` → what it ignores; `paper: true` reasoning.
   - Make a conjecture (10A05 n1, H): `ball-arc` (hood) → what a does to every parabola. No `smaller:` yet (judgement hinge, see Smaller steps).
   - Where they meet (10A05 n2): `plans-cross` → read the crossing on the graph.
   - Circles as relations (10A05 n3): `centre-pivot` (the irrigation circle) → its equation from a measured arm. Graph `circle:`.
3. **Trigonometry, solids, error and proof (14; Measurement, Angles and shapes).** After Year 9 batch 3.
   - Looking up, looking down (10M03 n1, H): `lifeguard-tower` → how far out; Also used in: `tree-height`. Made up, labelled. `smaller:` which side is opposite the angle.
   - Bearings (10M03 n2): `orienteering-leg` → north and east of the control; Also used in: `crow-flies`.
   - The triangle inside (10M03 n3): `box-diagonal` (umbrella in a suitcase) → does it fit; `space3d` diagonal. Sizes labelled made up.
   - Break it into solids, Surface area, Volume (10M01 n1 H, n2 H, n3): `grain-silo` (cylinder with a cone) throughout → how much grain, and paint for the outside; Also used in: `rainwater-tank` (BOM, sourced). † silo sizes from a real brochure (or labelled made up). `smaller:` n1 which solids, added or taken away; n2 is this face on the outside?
   - Where errors come from (10M04 n1): `part-tolerance` (Year 9) → name the source.
   - One measurement's error (10M04 n2, H): `carpet-error` → the most carpet you might need. `smaller:` the longest the 4.0 m side could be.
   - Errors that build up (10M04 n3): `carpet-error` (multi-room) → the error on the total.
   - Scale factors (10M05 n1, H): `floor-plan` → the plan's scale. `smaller:` one wall, plan to real. † a real estate floor plan (draw a made-up one).
   - Using a plan (10M05 n2): `floor-plan` → will the couch fit; Make is the 10M05 n3 modelling task.
   - Some cases or every case? (10SP01 n1, H): no entry (hood): opens on a pattern that holds for small cases and breaks (a demonstration fooled). No `smaller:` (judgement).
   - Writing a proof (10SP01 n2, H): no entry (hood) → prove a quadrilateral property; `paper: true`. `smaller:` the first statement and its reason.
   - Using theorems (10SP01 n3): `set-out-3-4-5` → check the corner; Also used in: `parallelogram-linkage`.
4. **Conditional probability and statistics (15; Data and chance).** After Year 9 batch 4.
   - "Given" (10P01 n1, H): `chance-of-rain` (FarmPoint, sourced) → what's known in each sentence. `smaller:` the smaller group the "given" picks.
   - Tables, Venns and trees (10P01 n2, H): `rare-test` (made-up rates, labelled) → if the test says yes, how likely is it? `venn` `given:`, weighted tree. `smaller:` out of 1000 people, how many test positive.
   - Independent or not? (10P01 n3): `survey-two-way` → does one change the other; Also used in: `bus-lateness`.
   - Simulate it (10P02 n1–n2): `rare-test` simulated → compare with the table; Also used in: `penalty-shootout` (class n3).
   - Misleading graphs (10ST01 n1): `cut-axis` (Year 9) → redraw it honestly.
   - Who did they ask? (10ST01 n2): `screen-time-claim`, `fan-poll` → does the sample fit the claim. † any real report used (or a made-up one, labelled).
   - Five numbers (10ST02 n1, H): `median-house-price` (Westpac, sourced) → the five numbers of a suburb's sales (made up, labelled). `smaller:` the median of the lower half.
   - Boxplots, Comparing with boxplots (10ST02 n2 H, n3): `bus-lateness` (class or transport-app data) → which route is more reliable. `smaller:` where the box starts and ends.
   - Scatterplots, Describing association (10ST03 n1–n2): `arm-span` (the class measures itself, no source) → is arm span your height.
   - Linked, but not the cause (10ST03 n3): `ice-cream-drowning` → what else rises in summer. † monthly figures if shown (else described, as the library has it).
   - Row or column percentages (10ST04 n1–n2, H): `survey-two-way` (the class's own survey) → which percentage answers the question. `smaller:` one row's percentage.
   - A careful claim (10ST04 n3): `survey-two-way`, `ice-cream-drowning` → "may be linked" against "causes".
   - A good question (10ST05 n1, H): `sleep-reaction` → pose and sharpen the question; the investigation (n2–n3) is class work. No `smaller:` (judgement).
5. **Networks and spatial algorithms (5; Angles and shapes).** After Year 9 batch 5.
   - Nodes and edges (10SP02 n1): `train-map` → what the map keeps and drops. Draw a made-up network: a real system map is copyright.
   - Every street once (10SP02 n2): `street-sweeper` → can it, and from where (degrees). Made-up suburb.
   - Euler's rule (10SP02 n3): `soccer-ball` (hood) → check F + V = E + 2 on it. † 12 pentagons and 20 hexagons.
   - Pin the problem down, Write the algorithm (10SP03 n1 H, n2): `sprinkler-cover` (fewest sprinklers for the oval) → test on two ovals; n3 is the class project. † oval size and sprinkler radius (or labelled made up). No `smaller:` on n1 (judgement).

**Year 10 batch 5, networks part built (25 Oct 2026).** Nodes and edges, Every street once, Euler's rule (10SP02 n1–n3; Angles and shapes, unit `networks`). Mermaid pictures in all three; the new `netgraph` board (a shared widget, full publish needed) only in Every street once. Tested: pages load with no errors; a full route on the sweeper board reports "Every street once". Soccer ball and C60 counts sourced 25 Oct (Wikipedia truncated icosahedron, RSC; in the lesson and data/connections/maths.yml). Not built: Pin the problem down and Write the algorithm (10SP03 n1–n2); they build on Year 9's geometric algorithms (9SP03), which another chat is doing.

**Year 10 batch 2, started early (25 Oct 2026): 11 of 13 built** (validated, built, pages and boards loaded in headless Chromium with no page errors; not tried with a class). Algebra (unit `solve10`): Completing the square, Solving by reshaping, Solving inequalities (10A01 n4 second half, n5; 10A02 n1). Linear relations (unit `twovars10`): Regions from a budget, Solving by substitution, Solving by elimination, Setting up equations (10A02 n2–n4). Functions (unit `models10`): Which model?, Writing the model, Where they meet, Circles as relations (10A04 n1–n2, 10A05 n2–n3). Board changes (full publish): `tiles` `mode: square`, `graph` `circle:` (roadmap/shared.md). Waiting on Year 9: Judging the model (10A04 n3, after 9A05 n2–n3) and Make a conjecture (10A05 n1, after 9A06). Sources: all figures made up and labelled; the MoneySmart calculator link in Writing the model is unchecked.

**Hinges and `smaller:`.** 23 hinge nodes. 19 get a `smaller:` as listed (half the move with numbers, or the one question students stick on). Four are judgement hinges and wait for what teachers see, as for Years 7–8: 10A05 n1, 10SP01 n1, 10SP03 n1, 10ST05 n1. 10P01 n1 is borderline; its lead-in only names the smaller group, so it stays.

**Sources still needed** (none stated yet; add the link or label the number made up when the lesson is built): bank savings rate, used-car prices, bacteria doubling time, gym prices if real, grain silo sizes, a floor plan, a real report for samples, ice-cream and drowning figures if shown, soccer ball panels, oval size. Already sourced in the library: food 2-hour/4-hour, earthquake energy, noise exposure, chance of rain, median house prices, rainwater per mm.

**What applies from Year 9 batch 1:** voice and Writing the move rules, picture before symbols on every Predict (the question with a "?", never the answer), the opening never says what Predict asks, `smaller:` from the start, sources for every figure, and the hook-against-Predict check on every new lesson.

## Done: Practise this skill card (12 Oct 2026)
- Every lesson with a practice file ends with a "Practise this skill" card (after Now you can, before Next lesson) opening `<course>/practice/?skill=<lesson>`. Show the answer also appears after a second try that only missed the form.

## Done: Data practice, so every maths course has a Practice page (12 Oct 2026)
- `content/maths/data/practice/`: 16 of 20 lessons (left out: Bias, Collecting data, Investigations and Investigating with samples, which are about judgement). Data lists are shown unsorted, in orders that never put the median in the middle or first; classify questions are counts.
- Review fixes: unsorted outlier and pocket-money lists, realistic sleep and school sizes, "not A" and "at least one six" (taught but missing), stem-and-leaf with even counts and a mode, which-measure questions that need working. Core: a probability typed as a percentage (25% for 1/4) is accepted (or asked for in the named form), "5 out of 12", "P(A) = 5/12", "0,4", and "Close: give it exactly" for a rounded fraction.
- All seven courses: 110 skills. Next: try the pages with a class; Year 9 when Matthew chooses.

## Done: Angles practice (12 Oct 2026)
- `content/maths/angles/practice/`: 17 of 21 lessons, geometry described in words (no diagrams on the page). Left out: the two algorithm lessons, Angles at parallel lines (naming pairs) and Proving quadrilateral properties (proofs). Transformations and 3D coordinates are answered as points.
- Review fixes: a triangular pyramid's net (4 triangles, not 3), chains whose answer flips between a and 180 − a so it can't be guessed from the wording, scrambled congruence statements (△ABC ≡ △QRP), feedback slips that are possible, and the lessons' own words. Core: point answers, "A′(3, −2)", "x = 3, y = −2", º for °, and ×4 for a scale factor.

## Done: Measurement practice (12 Oct 2026)
- `content/maths/measurement/practice/`: all 18 lessons. π questions accept the π button and 3.14 where the question allows either; where it names 3.14 or 22/7, the other value gets "use … as the question says". Right, acute or obtuse is asked as a count or as a² + b² − c². Time zones use October offsets (as the lesson does) and real flight lengths per route.
- Review fixes: a² + b² − c² questions where c wasn't the longest side (or no triangle), rounded feedback answers, ring area and semicircle perimeter (taught but missing), safe ladder angles, sizes per object, wider ranges. Core: "50.3 cm2", "2 pm" (asks for 24-hour time), "16π" (asks for a number) and "14:00" for an hour.

## Done: Irrational numbers and index laws practice (12 Oct 2026)
- `content/maths/real-numbers/practice/`: all 6 lessons. Classify questions (rational or irrational, terminate or recur) are asked as counts, so the page's one text box can mark them.
- Review fixes: the irrational count no longer lands on 2 nine times in ten (half the roots are perfect squares; the fourth item rotates through a fraction, 0.25, π, 0.333… and 22/7), a different-bases question (the lesson's planted slip), a tenths bracket in place of a "type 1 or 2" question, and feedback when a student types the power (2⁷) instead of the index. Core: every superscript digit typed or copied (2⁷) is read as a power.

## Done: Linear relations practice (12 Oct 2026)
- `content/maths/linear-relations/practice/`: 10 of 12 lessons (Reading a graph and Describing a relationship need a graph; the page is text only). Line equations are answered as `x = 3` (`form: subject x`), so a vertical/horizontal mix-up is marked wrong.
- Review fixes: "1x", "0x" and "+ 0" text, the meeting point given as in the lesson, positive constants in growing patterns (as taught), a ≥ region question with points on the line, m as a fraction, wider ranges. Core: "100 cm²" accepted, "(0, 4)" asks for just the number, "3n + 2 = s" accepted.

## Done: Algebra practice (12 Oct 2026)
- `content/maths/algebra/practice/`: 14 files, one per lesson, 3 to 5 templates each, kept to what each lesson teaches (no negatives or powers in the Year 7 lessons). Expanding and factorising answers must be expanded or fully factorised; rearranging answers must be `x = …`; inequalities are answered as `x > 3` (or `>=`).
- Independent review: no wrong answers; fixed zero terms ("+ 0"), "1x", "− −5", "whole numbers" for negative ranges (now integers), questions beyond the lesson, and marking slips (typed x², capital letters, either side of a subject answer, unreadable input no longer resets the streak).

## Done: Practice page, Number Foundations first (12 Oct 2026)

`maths/number/practice/`: endless questions from 29 template files (2 to 5 templates per lesson), one skill, a unit or the whole course mixed, 3 in a row to mark a skill practised, print 10 with answers. Independent review fixed wording that broke for some numbers, made marking accept units, $, commas and mixed numbers, and added skills the lessons teach (tax across two brackets, rounding up to whole tins, estimating roots to 1 dp, perimeter from area, fraction ÷ whole number, three-way shares, decrease by a multiplier). Next: the other six maths courses, one at a time with a review each.

## Done: recap pages and coach prompts for maths (12 Oct 2026)

`recap: true` and `coach: true` on all seven maths courses: each course has a Recap page (each lesson's exit question to try first, then the answer, explanation, picture and clip), and every card has a "Still stuck? Copy a coach prompt" box, shown only when the teacher shares the recap link with `?coach=1` (all 121 lessons get a prompt from their progression node and `stuck:` list). Five exit questions that relied on the lesson were rewritten to stand alone (money-models' tax brackets; parallel-lines, parallel-angles, angle-reasoning and unknown-angles, which named diagram labels). Test a prompt in the school's AI tool (Copilot) before sharing the `?coach=1` link.

## Done: Year 8 Statistics (12 Oct 2026)

Data and chance gains a unit *Samples* (15 to 20): Census, sample, experiment or observation (8ST01 n1), Bias in collecting data (n2), Ways to choose a sample (8ST02 n1), Describing a sample (n2), How samples vary (8ST03 n1 and n2) and Investigating with samples (8ST04 n1 and n2), on the new `sample` board: a fixed school of 200 where sleep and sport change with year level, so convenience samples (the Year 7 rows) are biased and random, systematic and stratified samples scatter around the truth. New misconceptions census-always, big-sample-no-bias, random-haphazard, sample-is-population, sample-differ-wrong; five cards; a Samples primer. The real investigation is a class task planned in the last Make step. This completes Year 8: every 8th descriptor now has lessons.

## Done: Year 8 Chance (12 Oct 2026)

Data and chance gains five Year 8 lessons in the Chance unit (10 to 14): Complementary events (8P01 n1 and n2), Venn diagrams and two-way tables (8P02 n1), Grids and tree diagrams (n1), And, or and not (n2), and Simulating compound events (8P03 n1 and n2), on the new `events` board (sample spaces as rows, grids or trees, a complement button and simulated trials) and the new `venn` board (Venn diagram and two-way table side by side, with boxes to fill from one to the other). Every outcome is equally likely (multiplying along branches is Year 10). New misconceptions complement-exclusive, venn-double-count, pairs-order, or-double-count, sim-too-few; five cards; a Year 8 section in the chance primer. The simulation teacher notes cover spreadsheets and checking AI-written simulations.

## Done: Year 8 Space (12 Oct 2026)

Angles and shapes gains a unit *Congruence and similarity* (16 Congruent triangles, 8SP01 n1, on the new `congruence` board; 17 Similar shapes, n2 and n3, on the new `similar` board; 18 Proving quadrilateral properties, 8SP02 n1, and 19 Problems with quadrilaterals, n2, on the geometry board with the new `diagonals: on`), 20 Algorithms for congruence (8SP04 n1 and n2, on the key board, with a gap students find and fix) in Algorithms, and 21 Coordinates in 3D (8SP03 n1 and n2, on the new `space3d` board) in Solids. New misconceptions ssa-is-test, similar-add, proof-by-picture, opp-angles-supplementary, coord3d-order; six cards; a congruence primer and Year 8 sections in the solids and algorithms primers. Proofs are written as a plan with reasons (Parsons and the teacher notes), not two-column.

## Done: Year 8 Rates (12 Oct 2026)

Number Foundations gains a unit *Rates* (27 Rates, 8M05 n1; 28 Using rates, n2) and two more Modelling lessons (29 Ratio and rate models, 8M07 n1; 30 Checking a model, n2), on the new `rate` board (a double number line, with a second rate to compare and a fixed starting amount for refined models) and the ratio board. Fixed along the way: `feedback` on `number` checks now shows (it was silently ignored, 34 pairs across maths). New misconceptions rate-inverted, rate-multiply-divide, model-round-down, model-blame-maths; three cards; a rates primer and a Year 8 section in the modelling primer.

## Done: Year 8 Number (12 Oct 2026)

A new extension course, *Irrational numbers and index laws* (`content/maths/real-numbers/`, replacing the pathway placeholder), with three units: Recurring decimals (Recurring decimals, 8N03 n1; Which decimals stop?, n2), Irrational numbers (Irrational numbers, 8N01 n1; Irrational numbers on the line, n2) and Index laws (Index laws, 8N02 n1; Using the index laws, n2). Number Foundations gains Percentage change (25, 8N05 n1) and Money models (26, 8N05 n2: pay, and income tax in brackets with the 2026–27 resident rates, simplified; the teacher notes say to check the ATO). New boards `longdiv`, `zoomline`, `indexlaws` and `money`. New misconceptions recurring-is-irrational, terminate-no-simplify, root-always-irrational, root-as-half, index-multiply-base, index-different-bases, tax-whole-income; reused percent-wrong-base. Cards in `snippets/maths-real.json` and two in Number; three primers and a Year 8 section in the modelling primer.

## Done: Year 8 Measurement (11 Oct 2026)

Area, volume, circles and Pythagoras gains seven Year 8 lessons (12 to 18): Composite shapes (8M01 n1) and Irregular shapes (n2) in Area, on the new `composite` board; Volume and capacity (8M02 n1) and Prism problems (n2) in Volume, on the prism board (now with litres for metres); Area of a circle (8M03 n1) and Circle problems (n2) in Circles, on the new `circlearea` board; and Time zones (8M04 n1 and n2) in a new unit, on the new `timezone` board (offsets for early October, named in the teacher notes). New misconceptions composite-wrong-height, estimate-part-full, cube-conversion, prism-lwh-always, circle-area-circumference, circle-forget-root, tz-wrong-direction; seven cards; a time primer and Year 8 sections in the area, volume and circles primers. Year 8 order agreed with Matthew: Measurement, Number (8N03, N01, N02, N05), Rates (8M05, M07), Space (8SP02, SP01, SP04, SP03), Chance (8P01 to P03), Statistics (8ST01 to ST04).

## Still to do

- **Publish and listen:** the new clips (Number Foundations 30, Area, volume, circles and Pythagoras 18, Irrational numbers and index laws 6, Angles 21, Algebra 5, Linear relations 2, Data and chance 20) record with the real voice on the next manual publish.
- **Teacher feedback:** maths teachers try the site when it suits them (the For maths teachers page and the feedback form); act on what comes back.
- **Watch in class:** whether students write real working in the reasoning box or skip to the marked parts; whether the self-check ticks are honest.
- **Next (agreed order, checked against the curriculum map's builds-on links):** The agreed order is done (Number gaps; Area, volume and circles; Classifying shapes; Pythagoras). Next: Matthew chooses. The Year 7 gaps listed before are filled. Year 8 is mostly untaught beyond algebra, 8N04 and Pythagoras; Year 8 is done in the agreed order (Measurement, Number, Rates, Space, Chance, Statistics). Next: Matthew chooses (Year 9 is the natural next step). The Make step of the algorithms lesson repeats the quadrilateral run; a better Make would be a drawn flowchart (no board for that yet). Pages come from the kit with `tools/kit-page.mjs`. 
- **Form-check coverage:** simplest and decimal are built; ratio and inequalities are not; add them when a lesson needs one.
- 25 Oct: connections library covers every node from Year 7 to Year 10 (280 nodes, 145 entries; `data/connections/maths.yml`). Year 9–10 lessons can now be planned from it.

## Smaller steps (`smaller:`, 25 Oct 2026)
- Done: Changing the subject's Predict ("Take off the two 6 m lengths first. How many metres of fence are left for the two widths?", number 8). Its old closing line asked the same thing, so it went.
- Done (25 Oct, Matthew agreed): the first batch of 17 below, each on one Practise task where the hinge bites (half the move with numbers, or "which side is the hypotenuse?"). Tested in Chromium: closed by default, wrong and right answers, kept out of progress.
- `npm run effort` flags 120 maths lessons (70 on hinge nodes, 50 with only a `stuck:` list). Too many to do blind. First batch: the hinge lessons where the sticking point is half a move with numbers, so a smaller step has an obvious shape.
  - Algebra: brackets, expanding, factorising, words-to-expressions (the picture Predicts already planned), substituting, backtracking, balance-method, solving-equations.
  - Number: adding-integers, multiplying-integers, equivalent-fractions, adding-fractions, percentage-change.
  - Linear relations and measurement: gradient, pythagoras, finding-a-side, circle-area.
  - Left for now: judgement and reasoning hinges (bias, sampling, algorithms, proofs, congruence): a smaller step there risks giving the judgement away; wait for what teachers see students stick on. The 50 stuck-list-only lessons: only where a `stuck.ask` is a thinking step.

**Year 10 batch 3 built (25 Oct 2026): 14 of 14 lessons** (validated, built, pages loaded in headless Chromium; not tried with a class). Measurement: `trig10` Looking up, looking down; Bearings; The triangle inside (10M03 n1–n3); `composite10` Break it into solids; Surface area of composite objects; Volume of composite objects (10M01 n1–n4); `error10` Where errors come from; One error, one result; Errors that build up (10M04 n1–n3); `scale10` Scale factors; Using a plan (10M05 n1–n2). Angles: `proof10` Some cases or every case; Writing a proof; Using theorems (10SP01 n1–n3). Board changes (full publish): `trig` elevation and bearing views, `space3d` `diagonal`, `formula` `accuracy` (roadmap/shared.md). The cone's volume and curved area are given as facts in Break it into solids, with the picture-first reason. Sources: all figures made up and labelled except the BOM rain rule. Still open: Judging the model, Make a conjecture; batch 4 waits for Year 9 batch 4.

**Year 10 batch 2 complete (25 Oct 2026): 13 of 13.** Judging the model (10A04 n3, `functions/judging-the-model`) and Make a conjecture (10A05 n1, `functions/make-a-conjecture`, uses the `graph` board's `cross:`) added to unit `models10`; existing boards only. Not yet browser-checked beyond page load: the `cross` marker when a ≤ 0 in Make a conjecture.

Year 9 batch 5 built (25 Oct 2026): geometric algorithms (AC9M9SP03 n1–n3), three lessons in the angles course, unit `algorithms9`, orders 30–32: `triangle-test-algorithm` (steps, computation vs decision, the triangle check), `test-with-awkward-cases` (typical, boundary and odd inputs; the S >= L fault), `refine-an-algorithm` (small fix, retest, right/acute/obtuse extension). Text and paper reasoning only, no board changes, so publish-lessons is enough. Lengths are made up; no sourced figures. Lessons 30 and 31 link to `field-guide-key` (an Also-used-in bullet with the Australian Museum sources); 32 has no entry in the library for n3.

**Year 10 batch 4 built (25 Oct 2026): 15 of 15 lessons** (validated, built, pages and boards loaded in headless Chromium; not tried with a class). Data and chance, `content/maths/data/`: `conditional10` Given; Tables, Venns and trees; Independent or not?; Simulate it (10P01 n1–n3, 10P02 n1–n2); `claims10` Misleading graphs; Who did they ask? (10ST01 n1–n2); `boxplots10` Five numbers; Boxplots; Comparing with boxplots (10ST02); `scatter10` Scatterplots; Describing association; Linked, but not the cause (10ST03); `twoway10` Row or column percentages; A careful claim; A good question (10ST04, 10ST05 n1). Orders 42–45 and 50–60. Board changes (full publish): `venn` `given:`, `events` `weights:`, `data` `view: box`, `graph` `dots` (roadmap/shared.md). All figures made up and labelled except the library's sourced openings. Left to class: 10P01/P02 n3 project, 10ST01 n3 ethics, 10ST05 n2–n3 investigation. Batch 5 algorithm lessons (10SP03 n1–n2) still wait for Year 9 algorithms.

**Year 10 batch 5 complete (25 Oct 2026): algorithms.** Pin the problem down and Write the algorithm (10SP03 n1–n2, `angles/pin-the-problem-down` and `write-the-algorithm`, unit `algorithms10`, orders 33–34; `sprinkler-cover`, made-up ovals and reach). No board changes, so both can go through publish-lessons; the two Mermaid diagrams are drawn by `render-pictures` in CI. n3 (testing and refining on a curved oval) is the class project. **All 69 Year 10 nodes are now built or assigned to class**: batches 1–5 done (about 59 lessons plus the extras), nothing left to wait on from Year 9.

**Class-taught Year 10 nodes covered (25 Oct 2026).** Project briefs (the Digital systems pattern, `briefs.yml`, no tool changes): `angles/briefs.yml` sprinkler-test (10SP03 n3); `data/briefs.yml` simulation-decision (10P02 n3) and sleep-and-reaction (10ST05 n2–n3, consent notes for the teacher). Optional quick check `data/ethics-check` (10ST01 n3, unit `claims10`). Briefs only appear on the course page chip and the teacher guide. The conditional-chance node left to class is 10P02 n3 (not P01 n3).

**Board-check pass (26 Oct 2026, Year 10).** New `npm run check-lesson-boards` (see shared.md) run over all 505 maths boards. Year 10 fixes: `judging-the-model`, `where-they-meet`, `writing-the-model` (slider started on the value the check asked for; moved the start), `independent-or-not` steps 2 and 4 (check was true with nothing chosen; now needs `n > 0`). Not fixed, belong to other chats: `measurement/find-an-angle` (board cannot start: t range 5–85), `find-a-side-trig`, `gradient-two-points`, plus checks reading values the board never reports in `finding-unknowns`, `and-or-not`, `investigations`, `vary-formulas`; the rest are listed in shared.md and need a look (some may be `~smaller` false positives). Still untested for Year 10: explain clips (CI), briefs print layout, Mermaid and hand-drawn SVGs in light/dark.
