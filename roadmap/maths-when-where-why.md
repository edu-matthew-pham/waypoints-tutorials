# Maths: when, where and why (strategy)

Proposed 22 Oct 2026 and piloted the same day; decisions below are from 22–23 Oct. Extends the maths lesson structure (Predict, Try, Worked example, Vary, Practise, Make; Project doc `maths-structure`); it does not replace the lesson sequence or its design rules. Also kept as the Project doc `claude/maths-when-where-why-strategy.md`; pilot status is the Project doc `claude/maths-connections-pilot-status.md`. Short running notes are in `roadmap/maths.md`.

## Decided (22–23 Oct 2026, after the pilot)

**The library has two layers, keyed by node (not standard).** It lives in `data/connections/maths.yml`; its header documents the fields.

1. **A purpose for every node.** Which of five reasons are true, one sentence each, only the true ones. No node is blank.
   - **world**: used in the world (a real question needs exactly this move)
   - **step**: a step on the way (the move sits inside a real task, like rearranging to get the mark you need)
   - **hood**: under the hood (it explains why something works, or what a tool does; you learn what's under the bonnet without becoming a mechanic)
   - **next**: builds what comes next
   - **assessed**: what tests reward on this move
2. **Entries (real situations) only where an honest one exists.** Some nodes have none, and that's the honest answer: forcing one produces the fake "farmer with 24 m of fence" story. Those lessons still have a why from the purpose block.

**One rule for fit:** an entry belongs to a node when its question needs exactly that node's move, in that node's direction, and nothing more. Pythagoras shows why: the shortcut across the grass needs the hypotenuse (n1), the ladder needs a shorter side (n2), the 3-4-5 corner check runs the theorem backwards (n3). All three are "Pythagoras"; only one fits each lesson. So the library is written node-first: start from each node's move and ask what real question needs exactly it.

**One rule for lessons:** the opening never says what Predict asks. Everything else (whether an entry goes in the opening, Make or only "Also used in") is the author's call.

**Pictures (23 Oct).** A situation usually needs a picture, because that is what a person does with a real problem: sketch it. Each library entry says which kind it wants (`picture:`):
- **spatial** (a ladder, a lawn, a room, a jug): a hand-drawn SVG in the lesson text. Works in light and dark mode and carries a description for screen readers; the cost is that decks and Create do not carry it (see Known issues).
- **structure** (a decision key, a flow, "which plan is cheaper"): a Mermaid `diagram:` (`roadmap/diagrams-plan.md`), which the build draws and decks, worksheets and Create all carry. First choice wherever the situation is boxes and arrows.
- **data** (marks, prices, temperatures): a chart or a board picture.
- **none**: words are enough.

Rules for every picture: it shows the question, not the answer (a "?" where the unknown is), and a Predict question whose numbers differ from the opening's gets its own sketch (Finding a side: the opening's 4.1 m ladder and Predict's 5 m ladder are two drawings). The opening is a quick commit ("guess now"), not a measurement; the real-world check in the entry is a class option in the teacher notes.

**Voice (23 Oct): write student-facing text the way you'd say it to a student at their desk.**
1. Read it aloud. If you wouldn't say it that way, rewrite it.
2. Vary sentence length; join ideas with *and*, *so* and *but* instead of stacking short statements ("You know X. You need Y.").
3. No labels or stage directions in the prose ("The question.", "Left out:", "Guess now:", "this lesson's move"). Just ask.
4. Talk about the situation in its own words (the ladder, the wall), and name the maths term once.
5. Contractions are fine. Keep brackets to one at most per paragraph.
6. The hook and the intro sit together on the page, so the hook is a one-line teaser and the intro tells the story; they never repeat each other.

**Status:** every Year 7 node is done, all six strands (82 nodes, 60 entries). Eleven nodes honestly have no entry: A03 n1, M01 n1, M03 n1, M04 n1, M05 n1, N02 n2, N03 n1–n2, N04 n1, SP02 n1, SP02 n3. Year 8 holds only the pilot nodes. Pilot lessons live: Finding a side (AC9M8M06 n2) and Changing the subject (AC9M8A01 n3). Pythagoras' theorem (n1) opens with the shortcut across the grass (hook only); its Make and close still need the retrofit, and the 3-4-5 corner check belongs to Right or not? (n3).

**Next:** Matthew reviews the pilot; if yes, the Year 7 retrofit. Then the Years 8–10 library, node by node (the Measurement and Algebra drafts fold in there).

**Known issues (shared tools, not changed by the maths chat):** `answer` checks with `form: subject x` show the first feedback message for every wrong equation; the deck's "Why it matters" speaker note shows an intro SVG as raw markup, and Create's preview drops inline SVG; the automatic publish (pushing main to `publish-lessons`) found no changed lessons on 22 Oct, so name the lessons when publishing.

## The problem

Maths teaching and textbooks spend most of their time on *how* to do a method. The *when* (recognising a situation needs it), *where* (what it's used in) and *why* (what it's for) get far less. ACARA keeps these as proficiencies and modelling standards, but gives them no strand of their own, and the Numeracy capability formally shares them out to other subjects. In practice they get done nowhere in particular.

Textbooks can't fix this: they're references organised by procedure, read in any order, and their "real-world" contexts are usually stories wrapped around a drill (pseudocontext). A tutorial is read in order, so it can open with a situation. Science lessons already do this, since the phenomenon is the content. Maths lessons usually don't.

## The proposal

### 1. A library of real-world connections, as source data

Entries keyed to ACARA nodes, written once, used by lessons, trail stops, Prepare slides and (later) Kit nodes. The first drafts were the Project docs `maths-real-world-connections` (Measurement 7–10) and `maths-real-world-connections-algebra` (Algebra 7–10); Year 7 is now in `data/connections/maths.yml`, and every node also gets a purpose block (Decided, above).

Each entry records:

| Field | Meaning |
|---|---|
| Situation | A real setting where someone needs this maths to answer a real question |
| What the maths does | The job the concept does there |
| Hidden or given | Real complexity removed or supplied so the student does only the target maths. Stated in the lesson, never silent |
| Check | How a student can test the answer against reality |
| Kind | world, step (enabler), hood (structural) or downstream (below) |
| Application step | 1–5 (below) |
| Picture | spatial, structure, data or none (Decided, above) |
| Figures | every number a lesson states as fact, with a source link |

**Entry kinds:**

- **World**: a real situation needs this maths to answer a real question. Most entries.
- **Step (enabler)**: the maths is a step inside a real task (rearranging a formula to get the number you need).
- **Hood (structural)**: the maths explains why something works (expansion explains why 47 × 53 = 2500 − 9).
- **Downstream**: a real specialist use where this skill is one small step; the bigger analysis is shown but the student doesn't do it (trig inside an omniwheel robot's drive; factorising inside "when does the ball land?"). Shows what the skill is a small part of, without previewing later content.

**Quality tests for an entry**

1. A real person would ask the question without a maths lesson prompting it.
2. The target maths is necessary to answer it.
3. What's hidden is stated honestly, and the hidden part is never the target maths.
4. The answer can be checked against something real.
5. Domain spread: most entries come from outside STEM and digital technologies. Don't overfit to robotics.
6. Avoid body weight, diet and gambling contexts (BMI is the common textbook one to leave out).

### 2. An application progression, alongside the conceptual one

Waypoints breaks a standard into conceptual steps. The library adds a second progression: how much of the when/where/why the student does.

1. **See it**: the method shown working in a real situation.
2. **Use it**: student applies the method; setup given, hidden parts stated.
3. **Spot it**: student chooses which maths a situation needs.
4. **Set it up**: student decides what to measure, ignore and assume.
5. **Judge it**: student evaluates the model's limits, or opens the black box.

The steps describe how much the student does, not the context. One context can carry several steps across years (rainwater tank: Y8 compute the litres; Y9 choose what to measure; Y10 judge what the model ignores). So fewer contexts are needed, and the steps are a width lever: same maths, harder application, no new content.

ACARA's own modelling standards climb the same way (Y7 formulate and interpret → Y8 review appropriateness → Y9 evaluate → Y10 evaluate, modify and report assumptions). This is a design hypothesis, not established research; test it with the maths reviewers.

### 3. How it goes into lessons

Built into lessons, not a separate "applications" section (which gets skipped, as in textbooks) and not a companion "why" video beside Explain it (optional why gets dropped first).

- **Open with the situation**, briefly, before Predict, with its picture. The pattern is a small why, then how, then a bigger why: a short situation first, method promptly, application after.
- **Predict to Practise stay as they are**, so Predict still tests only the new move.
- **Make returns to the situation.** Make gets a real job instead of "write your own question". Stretch: a second entry for the same node, or a step up (spot it, set it up).
- **"Also used in"**: 2–3 other entries from the library, one line each, at the close.
- Steps 3–5 live in review and mixed-practice lessons, width units, and the four modelling standards per strand (whole modelling lessons on contexts already met).
- Keep the lesson's situation replaceable by another entry for the same node, so teachers can swap in a local one.

Separate surfaces reading the same data: a "where is this used?" view per trail stop; Prepare slides pulling an entry as a hook; later, a field on Kit nodes.

**Cost by format.** Most entries are text plus a picture or real data (3-Act style). Build simulation boards only for a few anchor contexts that serve many nodes (rainwater tank, ramp, moving object). Video only where motion or scale matters.

**Science link.** Share principles first (situation first, then method), not lessons. Maths lessons can borrow science-style boards as openers with no dependency on a science lesson. Make the link visible with one line each way ("you saw this in the motion board"); that line, not the shared board, is what carries any transfer. Treat a shared board for both subjects as a pilot, not the plan.

### 4. "When" for manipulation skills

Downstream entries give why and where, not when. For factorising, expanding and rearranging, "when" is choosing the form that answers the question: factorised form shows where a graph hits zero, expanded form the starting value, completed square the turning point. That's a real decision students can practise at step 3 without a story.

After a downstream glimpse, a short prompt ("where could you see this mattering for you?") has better evidence than the glimpse alone (utility-value studies).

## Findings

- Measurement 7–10 draft: 46 entries, all 23 standards, wide domain spread. Format holds easily.
- Algebra 7–10 draft: about 35 contexts. Formulas, graphs, functions and the modelling standards have plenty of genuine contexts and reach steps 4–5. Four standards resist world contexts: Y8 A01 (linear expressions), Y9 A01 (exponent laws), Y9 A02 (binomial products, factorising), Y10 A01 (expand, factorise, simplify). People rarely do these by hand outside specialist paths; tools do them. They get step, hood and downstream entries, not forced world ones.
- Those four line up with the "everyone versus specialist" question. The library doubles as evidence for where that line sits. Put it to maths teachers as a question, not a conclusion.
- Algebra leans financial; watch that it doesn't read as "algebra is about money".
- Figures need a source link before a lesson uses them. Sourced so far: ladder 1:4 (WorkSafe ACT, SafeWork NSW), ramp 1:14 (Queensland Health, from AS 1428.1), median house prices (Westpac), chance of rain (FarmPoint, from the Bureau), GST 10% (ATO), the Rhind papyrus (MacTutor). Still to source when used: 85 dB(A), Naismith's rule, 3° glide path, caffeine half-life, food-safety times, stopping distances.
- Year 7 node pass (22 Oct, all strands): the eleven nodes with no honest entry are "see why it works" or naming moves. Their purpose is under the hood and builds next. Domains lean consumer (17) and building (13); digital 2, no robotics. Pictures: 33 spatial, 22 data, 8 structure (Mermaid), 5 none.
- Year 7 openings (23 Oct): ten of 69 hooks stated the answer their Predict question asks for; now rewritten as questions. Ten more only hint (listed in `roadmap/maths.md`). The check is cheap and worth running on every new lesson.

## Background: what the progressions graph showed

Analysis of the maths progressions data (lineage plus prior-knowledge links, 240 standards):

- The trunk is early number. Of the 25 standards with the most downstream dependants, 80% are number and nearly all sit in Foundation–Year 3; each leads to 80–100 later standards across four strands.
- Reach narrows sharply after that (mean downstream reach: F 67, Y1 43, Y6 18, Y7 11, Y8 5).
- 65% of standards are cited directly by only one later standard; only 26 by three or more.
- Per endpoint, a pathway needs a lot less than the full sequence: Y10 statistics depends on 12% of Y4–8 standards, probability 9%, algebra 47%, measurement 41%; all Y10 together, 91%. "Fewer things" has to mean choosing a pathway, not cutting content nothing needs.
- Limits: the graph shows how the curriculum is written, not which prerequisites actually matter; it stops at Year 10; hinge flags (38% of nodes) are too common to rank on; several missing links (integers, ratio modelling) look like data gaps.

## Open decisions

- Whether step, hood and downstream entries appear in the student "where is this used?" view, or only for teachers.
- Whether the situation should run through the middle of a lesson too (a question for the review; not built).
- Matthew's review of the pilot decides the Year 7 retrofit; the other maths teachers are a second check.
