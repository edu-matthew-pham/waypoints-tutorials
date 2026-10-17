# Review fixes: AI Foundations and Does AI Help Us Learn? (16 Oct 2026)

**Done and merged into main (PR #1, 16 Oct 2026):**
- Group 1
- the Unit 4 rename
- class plans for every Does AI Help Us Learn? lesson
- the Foundations links back to how AI works

**Courses:** `content/ai/foundations/` and `content/ai/does-ai-help-us-learn/` (DAHUL below).

**Also fixed (18 Oct 2026):** the three Unit 1 boards (`dice-generator`, `automate-generator`, `next-word`); validate now flags a second step block under one heading and a board starter that loads every region of `boards.yml`.

**Done 18 Oct 2026 (three commits on main):** Year 7 accessibility for DAHUL, Group 2 and Group 3, with the exceptions below. For the AI tools work, see `roadmap/ai-tools-handoff.md`.

- **DAHUL Year 7 rewrite (done):** all 12 lessons in plain words; the nine read-then-quiz Explores are now `stage: run` with something to do first (sorts, a match, a question to try, a table to take apart); definition checks replaced by applied ones; no course-wide lesson numbers or product names in student text; teacher-facing numbers are within-unit ("Unit 2, lesson 1"); inquiry record wording is the same everywhere; recap, reference page and unit summaries rewritten too. Lodge and Loble (UTS) added to `offloading-thinking` and the choosing-assistance primer.
- **Group 2 (done):** quizzes rewritten (about two per lesson, both courses, with per-option feedback); `model-mistakes` rebuilt on the new `fruit-learning` `mode: mistakes` (Swap label; wrong-label, missing-examples and fix-it challenges) with its own `teacher.yml`; DAHUL L1 owns "what was the goal?" (`ai-learning-choices` `set: goals`: the same task with two goals) and L2 "what kinds of evidence?" (a sort); `evidence-of-achievement`'s required check matches evidence to a stated goal; incentives only in `learning-values`; `offloading-thinking` opens with a recall question and has a sort; `word-sampler` shows the last roll and the last ten; `ai-dialogue` replies change with every setting, the planning hint is fixed, and refine mode has one flawed first reply and one best follow-up per situation; lesson-specific goals and exits in Foundations; L4 headline question; `designing-assistance` goal 1 has a check; `neural-training` chatbot sentence; `dice-generator` top-word line; garden task cut; Nakamura moved to research-design's Elaborate.
- **Found and fixed:** `ai-dialogue`, `ai-learning-choices` and `fruit-learning` never set `B.moved`, so their board checks could not tick on the lesson page (seven Foundations lessons and the DAHUL lessons does-ai-help-us-learn, performance-versus-learning and illusion-of-competence). Any click, choice or typing in the panel now counts as a move.
- **Group 3 (done):** For-teachers paragraphs, optional live-AI comparisons and Teachable Machine links moved from student text to `teacher.yml`; closing reflections varied; the small Foundations fixes (next-word duplicates, 0.00 tie now "unsure", tutor task uses a new table, unused Furze and Nakamura sources dropped from automate-generator, no product names); next-word hook no longer relies on a phone; DAHUL follows Foundations on the trail (`after: [ai/foundations]`); Units 3–4 sources (VanLehn, Sinha and Kapur, Hattie and Timperley, Black and Wiliam); primers for the three remaining Foundations units.
- **Checked 18 Oct 2026:** Swift (2026), "LLMs Unplugged: Teaching Resources for a ChatGPT World", is a practitioner paper at ACE 2026 (28th Australasian Computing Education Conference, ACM), DOI 10.1145/3786228.3786237, confirmed from the paper (arXiv 2609.13183). Lessons now cite it by its full title. Licence: llmsunplugged.org says CC BY-SA 4.0 (checked 18 Oct); the paper says CC BY-NC-SA. Follow the site, and recheck before adapting any handouts.
- **Clips that re-record on the next full publish:** the Explain clips of all 12 Foundations lessons (their widgets or folders changed) and of DAHUL `does-ai-help-us-learn` and `performance-versus-learning`.

**Year 7 accessibility for DAHUL (decided 18 Oct 2026).** Both courses are for Year 7. DAHUL currently reads at about Year 10–12 and needs, beyond Group 3's plainer words:
- shorter sentences and paragraphs in student text;
- real Explore activities (explore before anything is named): 9 of 12 lessons use `stage: investigate` for "## Explore", so the page labels it Explain, and the Explore is read-then-quiz;
- fewer definition checks ("What is X?"; about 16 across the course), replaced by checks that apply the idea;
- no course-wide lesson numbers in student text (`meaningful-learning`, `performance-versus-learning`, `research-design`), and product names kept out of student text (`interaction-versus-learning` names six).

## Before starting
- Pull first. Other chats may be editing main, so pull again before pushing.
- Editing a board widget re-records only the clips that use that widget.
- Editing `render.mjs` recording code or `stage.html` re-records everything.
- The voice for every lesson is `voice: { name: af_heart, speed: 1.1 }`.

## Course rationale (agreed)
- **The two courses have different jobs.**
  - AI Foundations: how AI works, then how to use it well. It builds the habits.
  - DAHUL: whether that use actually helps learning. It tests the habits.
- **The strategy is the same as the rest of the site.**
  - Every tutorial works self-paced.
  - The class plan (`class/<lesson>.yml`) and the deck it feeds make it better for class.
- **Still open:**
  - Foundations has no class plans.
  - DAHUL's self-paced path is mostly multiple choice (Group 2 item 1).
  - Optional: one investigation that runs through DAHUL, where students test the Foundations habits on themselves.

## Decided (done on the branch)
- Foundations Unit 4 is now "Getting good help from AI". The unit id stays `learning-effectively-with-ai`. Its lessons:
  - "Ask for the right kind of help"
  - "Check what AI tells you"
  - "Decide what to hand over"
- DAHUL keeps its title. Its Lesson 1 opens from the Foundations habits.
- **Still to do:** where DAHUL reuses Foundations boards (Lessons 1, 2 and 5), say so, and treat the board as the thing being investigated.

## Group 1: broken or wrong (DONE)
- **Hints board** (`ai-learning-choices`, `practise` mode):
  - The new question appears after an attempt or any help.
  - Students choose a confidence level, then see a model answer.
  - Help only goes up.
- **Fruit network** (`neural-fruit`):
  - It starts at Apple and trains at rate 2.
  - The Record button is named in the lesson.
- **Research claims:**
  - Kestin was a crossover study.
  - The Fernandes participants were adults.
  - Nakamura's terms are peripheral and constitutive, on a sliding scale, and the DOI is added.
  - Expertise reversal (Kalyuga 2003) is established; only its role in AI offloading is a proposal.
- **Required steps and slips:**
  - The final position step in `learning-values` is now required.
  - Explain tasks now match their headings.
  - Unit and lesson references are fixed.
  - `shape: 5e` is on every AI lesson.

## Group 2: worth doing (bigger)
1. **Quiz answers are easy to guess.** The right option is nearly always the cautious one; the wrong ones say always, never, only or definitely.
   - Rewrite about two questions per lesson, with believable wrong answers.
   - Make some right answers definite.
   - In Foundations, tie questions to what the board shows.
   - Worst:
     - Foundations `model-mistakes` Evaluate
     - DAHUL Lesson 4 and Lesson 6 Evaluate
     - DAHUL `interaction-versus-learning` Explain
     - DAHUL `learning-values` Explore
2. **Repeated lessons:**
   - Foundations `training-examples` and `model-mistakes` share a board, examples and an identical `teacher.yml`. Merge them, or rebuild `model-mistakes` around making the model fail. The widget can't edit labels yet.
   - DAHUL Lessons 1 and 2 have near-identical Evaluate tasks and exits. Lesson 1 should own "what was the goal?" and Lesson 2 "what kinds of evidence?".
   - DAHUL `evidence-of-achievement` repeats Unit 1. Make its required check about matching evidence to a stated goal.
   - Incentives are taught twice. Keep them in `learning-values` only.
   - DAHUL `offloading-thinking` re-teaches `research-design`. Open it with a recall question instead.
3. **Boards that can't show their point:**
   - `dice-generator` (`word-sampler.js`) never shows the roll.
   - In `effective-prompts` (`ai-dialogue.js`), changing format or hint-first alone changes nothing, and the planning hint asks for details the prompt already gave.
   - In `follow-up-dialogue`, the first reply has no flaw to spot.
   - DAHUL Lesson 1's `delegate` mode needs the same task with two goals.
4. **Checks that don't test the goals:**
   - Foundations goals and exits are boilerplate.
   - DAHUL Lesson 4 needs a "which part of the headline goes too far?" question.
   - DAHUL `designing-assistance` goal 1 has no check.
   - DAHUL `offloading-thinking` needs a sort task.
5. **Link "how AI learns" to chatbots:**
   - `neural-training` should say that chatbots are neural networks trained to predict the next word.
   - `dice-generator` could note picking the top word every time versus rolling.
6. **DAHUL `performance-versus-learning`:**
   - Cut the paper garden task, since the board now does the job.
   - Move its teacher note into `teacher.yml`.
7. **DAHUL Lesson 6:** move Nakamura from the Explain step to the Elaborate extension.

## Group 3: polish (optional)
- **Plainer words.** Examples: dialectical, adjudicate, calibration, validity, confounding, affordances, consequential claims, calibrated trust.
- **Teacher text in student pages.** Move "For teachers" paragraphs and disclaimers into `teacher.yml`.
- **"Learning with AI" closing step.** It is repeated in all 12 Foundations lessons; vary it or trim it.
- **Teacher-note sources for DAHUL Units 3–4:**
  - VanLehn 2011: https://doi.org/10.1080/00461520.2011.611369
  - Sinha & Kapur 2021: https://doi.org/10.3102/00346543211019105
  - Hattie & Timperley 2007: https://doi.org/10.3102/003465430298487
  - Black & Wiliam 1998
- **Unverified Foundations sources:**
  - ~~Check the ACM DOI and the conference label for Swift's "LLMs Unplugged".~~ Done 18 Oct: confirmed (ACE 2026 practitioner paper).
  - Drop unused sources in `automate-generator`.
- **Small Foundations fixes:**
  - The `next-word` frontmatter duplicates `teacher.yml`.
  - In `feature-connections`, a 0.00 tie silently becomes apple.
  - `automate-generator` reuses its Evaluate table.
  - "Thinking Mode" in the product list is an assessment tool, not an assistant.
- **DAHUL inquiry record numbering** is inconsistent.
- **Teacher-facing lesson numbers.** Primers and some `leads:` use course-wide lesson numbers ("Lesson 7"); the site numbers lessons within each unit.

## Agreed 18 Oct 2026 (discussion with Matthew): show where the lookup table breaks
- Keep the dice n-gram and the "lookup table" analogy (from ANU's LLMs Unplugged): it is right about the core idea (learn patterns, then sample the next word).
- Add one small moment at the end of Unit 1: "What does our table say comes after 'The dog sat on the…'?" There is no row, so the model is stuck. Ask how a real chatbot still answers, which Unit 2 answers: models learn which things behave alike, so they can **generalise** to inputs they have never seen. That is the core idea of machine learning (the table only memorises).
- Name the same idea where it fits in Unit 2 (training-examples, model-mistakes: unseen fruit).
- Optional link for Does AI Help Us Learn?: memorising answers is like the table (perfect on practised questions, stuck on new ones); understanding generalises.
- Not built yet.

