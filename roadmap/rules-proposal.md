# Rules proposal: each rule with its reason, scope, source and weight (1 Nov 2026)

**Status: proposal, waiting for Matthew's "go".** Nothing in `AGENTS.md` or `CLAUDE.md` has changed yet. Step 1 of Project doc `claude/handoff-rules-audit.md`; the read-only lesson audit (step 2) comes after.

Why (`roadmap/shared.md` › Proposed: rules carry their reason): rules get shortened each time they are copied, lose their reason and scope, and agents then over-apply the short version.

**Weights.** **Firm**: don't depart without asking Matthew. **Default**: use judgement; if you depart, say why in your roadmap file. Firm, per Matthew (30 Oct): First Nations content, no real brands or people, no AI marking, safeguarding. Everything else is default unless a roadmap records Matthew deciding otherwise. Rows marked **?** need Matthew's call (questions at the end).

**Proposed shape after "go":**
- `AGENTS.md`: the short version (rule, one-line reason, scope, weight). Draft in §2.
- `roadmap/rules.md` (new; this file renamed and trimmed): the register below, the one place for longer reasoning and history. Subject roadmaps point to it instead of copying rules out.
- `CLAUDE.md`: small fixes where its wording has drifted from the decision. Draft in §3.

## 1. Register

Source = where Matthew's decision is recorded. "None found" = the rule exists but I found no record of Matthew deciding it.

### Teaching rules (all subjects unless scoped)

| # | Rule | Reason | Scope | Decided (source) | Weight |
|---|---|---|---|---|---|
| T1 | **First Nations content:** we write no student explanation of First Nations history or culture; where a skill lesson needs an example, the custodians' own words (one short sourced line plus a link; evidence and technology only; no remains, no images of people who have died, no belief). Teacher notes start from ACARA's elaborations and ask for local, community-approved material. Values and Country items are pointer pages. A First Nations educator reviews before use beyond CGGS. | We are not the right authors; protocols and consultation come first. | Every subject (decided in humanities; Economics "and the others follow"). | Matthew 30 Oct (`shared.md` › Decided: humanities, First Nations refined) | **Firm** |
| T2 | **No real brands or people in made-up cases;** made-up names, places and businesses are labelled and read as made up. | A real brand is promoted or misrepresented; made-up cases don't date. | Every subject's scenarios. | Matthew 30 Oct (firm list); `checklist.md` | **Firm**, scope **?** (Q2: real historical people and real places as content) |
| T3 | **No AI marking** of student work, and nothing listens to or judges a voice. | The site gives formative feedback on activities, not judgement of a student's own work; responsible AI use. | Every subject. | Matthew 26 Oct (English plan), 27 Oct (speaking), 30 Oct (firm list) | **Firm** |
| T4 | **Student writing is never sent anywhere,** and nothing personal is asked or collected; progress stays in the browser. | Privacy; no accounts, no tracking. | Every subject. | Matthew 27 Oct (site intent; Learning skills), 12 Oct (progress) | **Firm?** (Q3: treat as safeguarding) |
| T5 | **Don't mark or pass/fail free writing** (no word counts as a check). Writing is fine and often useful: in the student's book or document, or a small browser-only box; a partner or teacher reads it (`reflect` tick). Don't build a lesson around write boxes, don't avoid writing either. | The site is a learning-activity guide, not a marker; Matthew never meant "no writing". | Every subject. | Matthew 27 Oct (English, counted boxes removed), narrowed 30 Oct (`a784b9c`) | Default |
| T6 | **Safeguarding notes** on wellbeing topics: wellbeing review note and disclosure note in teacher notes, no laws or age rules stated (point to eSafety), wellbeing team reads first. | Child protection; legal detail dates and varies by state. | ICT Staying safe and well; AI in your life (chatbot, attention, fakes). | ICT and AI plans approved by Matthew 26 Oct and 18 Oct (`ict.md`, `learning-with-ai.md`) | **Firm** |
| T7 | **Defensive security only:** no attack or exploit practice; real-lab work needs the teacher's sign-off on an isolated network. Hardware safety (LiPo) is teacher-led sign-off. | Safety and legality. | How computers work (Cyber, Security lab, CTFs); Engineering Power and motors. | Systems and Engineering plans (`systems.md`, `engineering.md`); Matthew's own decision not found | **Firm?** (Q3) |
| T8 | **Contestable or simplified ideas are labelled where students meet them** ("in economics…", "one view is…", "this model leaves out…"); keep the descriptor's terms; settled facts stay plain; a short phrase is enough, not a disclaimer on every line. Distractors are real errors, not disagreements with an assumption. | Honesty: ACARA tells us what to teach, not how sure to sound ("wants are unlimited" was taught as fact). | Every subject; science models included. | Matthew 30 Oct (`fab91a8`, widened `a362055`) | Default (judgement) |
| T9 | **Pace-agnostic:** same waypoints in Kit order; untiered path = minimum; `tier:` steps are optional width on the same waypoint, never a faster track; no Consolidating/Steady/Advancing labels; a check (with `smaller:`) before leaving a hinge. A teacher note may say where a slower or faster class could spend extra time. | A tutorial never knows the class; pace is the teacher's call (matches Kit). | Every subject: lessons, guides, class plans. | Matthew 30 Oct (`shared.md` › Decided: pace-agnostic) | Default |
| T10 | **Width is not year grouping,** and years are suggestions ("usually Years X to Y"), never gates. | Wider means more contexts at the same level; schools decide adoption. | Every subject, AI included. | Matthew 27 Oct (`shared.md` › Decided: year grouping) | Default |
| T11 | **Lesson shape is a default.** The ICT shape (Predict, Try, Worked example, Vary, Practise, Make) suits skill and concept waypoints with a planted answer; a discussion or weighing-views waypoint may suit `shape: 5e` or `primer`. In Code, PRIMM stages are step jobs, not a required order: read or trace before writing, start from given code. | One shape over-applied gives padded, checklist lessons. | Every subject (AGENTS currently says humanities only). | Matthew 30 Oct (`25cbb99`); Code: Project doc `claude/lesson-shape.md` (12 Oct) | Default |
| T12 | **Facts about people, places, studies and dates are checked against a source;** unverified ones are marked. Claims about studies keep their limits (who, what); figures are dated. | Accuracy; teachers will trust it. | Every subject. | AI evidence audit 18 Oct; `checklist.md` › Claims. Matthew's decision not found | Default |
| T13 | **AI in lessons:** scripted response labs are the core; real AI only through optional prompt cards with a no-AI alternative and "only if your teacher says you can"; coach prompts on recap pages only in general lessons. | Beneficial, not harmful, cognitive offloading; tool age limits. | AI courses (cards); every other subject (recap only). | Matthew 18 Oct (`learning-with-ai.md`) | Default |
| T14 | **Plan first, then build:** a per-waypoint plan in the roadmap, push, stop for "go". | Most fix rounds were things a plan would catch. | New courses and waypoints. | Matthew 30 Oct (`35946d2`) | Default |
| T15 | **No QR codes or phone steps.** | No phones in class. | Every subject. | Matthew (CLAUDE.md, Teacher layer); scope **?** (Q5: a CGGS fact, site is for any school) | Default |
| T16 | **Printable sheets come from Prepare Print;** no custom blank-line or fill-in layouts on pages. | One print route; custom layouts drift and break. | Every subject. | None found (`28bbc08`, agent commit; humanities inquiry chat) | Default, source **?** (Q6) |
| T17 | **Effort:** new lessons get `struggle:`, goals a student would recognise, escalating hints (up to three, none giving the answer). | Students expect coding to be easy; name the hard part. | Every subject (written for Code, 11 Oct). | None found beyond AUTHORING › Effort | Default, source **?** (Q6) |
| T18 | **Class plans:** at most about three checks per site step. | Deck pacing. | Every class plan. | 12 Oct (CLAUDE.md); Matthew's decision not found | Default |
| T19 | **No rigid pedagogy rules;** clips only where useful (hook, expected result, why). | Meta-rule: Matthew's stance. | Every subject. | Matthew (CLAUDE.md › How we work) | Default (and the frame for all of these) |

### Working rules (the repo)

| # | Rule | Reason | Scope | Decided (source) | Weight |
|---|---|---|---|---|---|
| W1 | **Don't publish unless Matthew asks;** never add push or schedule triggers; never push to `gh-pages`, `publish-*` or `makecode-editor` unasked. | Publishing is manual by choice (after the Oct suspension); one run ships every chat's work. | All chats. | Matthew 10–13 Oct (CLAUDE.md › Publishing) | **?** (Q1: three versions disagree) |
| W2 | Pull before starting and before every push; never force-push; notes in your own roadmap file; shared files: check `git log`, small change, note it in `shared.md`. | Parallel chats; cloud sessions lose unpushed work. | All chats. | Matthew 11 Oct (ROADMAP split), 19 Oct | **Firm?** (Q4) |
| W3 | Test before pushing (validate, build, headless check); don't re-render clips locally. | No CI on push; the publish run records the real voice. | All chats. | 11–19 Oct (CLAUDE.md) | Default |
| W4 | Don't reformat whole data files; add single lines. | Merge conflicts between parallel chats. | Shared data files. | None found | Default, source **?** (Q6) |
| W5 | Quote YAML values with colons; site-specific `wpt-` class names. | YAML parsing; ad blockers hide generic names (25 Oct). | All page code. | Technical (CLAUDE.md › Gotchas) | Default |
| W6 | When Matthew decides something, write its reason and scope beside it in the same commit. | This proposal's point. | All chats. | Matthew 30 Oct (`shared.md` › Proposed: rules carry their reason) | Default (added to `checklist.md` now) |

### Humanities rules lists (`civics.md`, `history.md`, `geography.md`, `humanities-inquiry.md`, `economics.md`)

Shared rows copy T1, T5, T8, T9, T11 nearly word for word. Subject-only rules stay where they are (all Matthew, 30 Oct, default): one course per standard and one lesson per waypoint; inquiry skills in the shared course; examples from Year 7 content; Preview label and "Coming later"; Before Year 7 catch-ups; History's China worked example and the deep-time pointer page; Geography's Kit gap. Proposed: each list opens with one line, "Shared rules: `roadmap/rules.md` (T1, T5, T8, T9, T11)", and keeps only its subject rows.

## 2. Proposed `AGENTS.md` › Rules that matter most

```markdown
## Rules that matter most

Each rule is **firm** (don't depart without asking Matthew) or a **default** (use judgement; if you depart, say why in your roadmap file). Matthew's stance is defaults with reasons, not blanket rules. Reasons, scope and history: `roadmap/rules.md`.

Firm
- **First Nations content** (every subject): we write no student explanation of First Nations history or culture. Where a skill lesson needs an example, use the custodians' own words: one short sourced line and a link. Teacher notes start from ACARA's elaborations. *Why:* we are not the right authors. Details: `roadmap/rules.md` T1.
- **No real brands or people** in made-up cases; made-up names are labelled and read as made up. *Why:* nothing promoted or misrepresented.
- **No AI marking** of student work, and nothing listens to or judges a voice. *Why:* feedback, not judgement.
- **Safeguarding:** student writing is never sent anywhere and nothing personal is asked; wellbeing topics carry review and disclosure notes; security is defensive only. *Why:* child safety and privacy.
- **Don't publish unless Matthew asks**, and never add workflow triggers. *Why:* publishing is manual by choice and ships every chat's work. **Pull before starting and before every push; never force-push.** *Why:* other chats work in parallel.

Defaults
- **Don't mark free writing,** but use writing where it helps (own book or document, or a small browser-only box, read by a partner or teacher). *Why:* the site is an activity guide, not a marker; "no writing" was never the rule.
- **Label contestable or simplified ideas where students meet them** ("in economics…", "this model leaves out…"); settled facts stay plain; a short phrase is enough. *Why:* ACARA says what to teach, not how sure to sound.
- **Pace-agnostic:** no pace labels; the untiered path is the minimum; `tier:` steps are optional width, never a faster track; check before leaving a hinge. A teacher note may say where a slower or faster class could spend extra time. *Why:* a tutorial never knows the class.
- **Lesson shape is a default.** Pick the shape that fits the waypoint and say why if you leave the usual one (ICT shape for planted-answer skills; inquiry for discussion; in Code, PRIMM stages are jobs, not an order). *Why:* one shape copied everywhere pads lessons.
- **Check facts about people, places, studies and dates against a source;** prefer made-up cases; mark anything unverified.
- **Plan, then build:** plan each waypoint in your roadmap file and stop for "go" (`roadmap/checklist.md`).
- **Test before you push** (`npm ci`, `validate`, `build`, a headless check of changed pages); don't re-render clips locally.
- Add single lines to data files rather than reformatting them; quote YAML values with colons; give new page parts `wpt-` class names.
- **When Matthew decides something, write its reason and scope beside it** in the same commit.
```

## 3. Proposed `CLAUDE.md` edits

```diff
@@ How we work
-- Do not add rigid pedagogy rules. Clips only where useful (hook, expected result without code, explaining why).
+- Do not add rigid pedagogy rules: rules are defaults with a reason, and only a few are firm (`roadmap/rules.md`). Clips only where useful (hook, expected result without code, explaining why).
@@ Teaching decisions
-- PRIMM (code lessons only; maths uses Predict, Try, Worked example, Vary, Practise, Make, and science uses 5E on the same stages): Predict (lock in, compare after Run), Run, Investigate, Modify, Make. Investigate tools must follow the lesson insight. Several tasks per step show as sub-pills only when more than one.
+- PRIMM (code lessons only; maths uses Predict, Try, Worked example, Vary, Practise, Make, and science uses 5E on the same stages): the stages are step jobs, not a required order (Project doc lesson-shape, 12 Oct): read or trace before writing, start from given code, then use the stages the move needs. Predict locks in and is compared after Run. Investigate tools must follow the lesson insight. Several tasks per step show as sub-pills only when more than one.
@@ Teaching decisions
-- Pace-agnostic (30 Oct 2026, every subject): lessons never assume a class pace (no Consolidating/Steady/Advancing, no assumed Steady). Untiered path = minimum width; `tier:` steps are optional width on the same waypoint, never a faster track; hinge waypoints get a check before moving on. Pace is the teacher's call in class (roadmap/shared.md › Decided).
+- Pace-agnostic (30 Oct 2026, every subject, default; roadmap/rules.md T9): lessons never assume a class pace (no Consolidating/Steady/Advancing, no assumed Steady). Untiered path = minimum width; `tier:` steps are optional width on the same waypoint, never a faster track; hinge waypoints get a check before moving on. A teacher note may say where a slower or faster class could spend extra time. Pace is the teacher's call in class.
@@ Publishing
-  Pushes to main still run nothing; Matthew is happy for Claude to publish finished batches this way.
+  Pushes to main still run nothing. Publish only when Matthew asks (roadmap/rules.md W1).
```
(The last line depends on Q1. The write-box line under English, 30 Oct, is already narrowed correctly and stays.)

## 4. Flags: rules copied wider or shorter than decided, or with no source

1. **First Nations, shortened in `AGENTS.md`.** It drops the custodians'-own-words option, the pointer pages and the review before use beyond CGGS, so an agent could remove a sanctioned example (Budj Bim). Meanwhile the full paragraph is pasted into three roadmaps. Fix: one home (T1), short line plus pointer elsewhere.
2. **Write boxes.** Decided for English (27 Oct: counted boxes removed), spread to "no write boxes" everywhere, narrowed 30 Oct. The humanities lists still copy "Make steps written in the student's own book with a `reflect` tick" as a pattern, without the browser-box option. Fix: point to T5.
3. **Contestable or simplified.** The humanities copies say "taught as models or views" and drop "simplified", "settled facts stay plain" and "a short phrase is enough", so they invite both under-labelling of models and over-hedging of facts. CLAUDE.md › Science still says simplifications go in teacher notes only, which is narrower than the 30 Oct rule (step 2 will count where it matters).
4. **Pace-agnostic.** `AGENTS.md` drops the hinge check and the allowed teacher note on slower or faster classes; an agent could strip legitimate notes. Project doc `create-generic-proposal` still suggests defaults "from Kit's pace profile" (Consolidating → explicit first); not a rules list, noted only.
5. **Lesson shape.** `AGENTS.md` frames the default as humanities copying Economics; the ICT shape is also used by English and ICT, and Code has its own (CLAUDE.md lists PRIMM as an order, which the 12 Oct lesson-shape decision replaced).
6. **Publishing, three versions:** `AGENTS.md` "Never publish"; `CLAUDE.md` "Matthew is happy for Claude to publish finished batches" (publish-lessons, 13 Oct); `checklist.md` "Do not publish unless Matthew asks".
7. **No real people** (firm) sits beside History's significant-individual lens, real historical sources, real places (China, Budj Bim) and checked real facts in English. Needs a scope line.
8. **No QR codes** is a CGGS fact applied to a site for any school.
9. **No source decision found:** Prepare Print only (T16, an agent commit of 30 Oct), effort fields (T17), three checks per step (T18), data-file reformatting (W4), and the editorial pass in `checklist.md` (31 Oct, `5e81a98`).

## 5. Questions for Matthew

1. **Publishing (W1):** which is right: never publish, publish finished batches via publish-lessons, or only when you ask? And firm?
2. **Real people (T2):** firm for made-up scenarios only, with real historical people, real places and checked real facts allowed as content with a source?
3. **Safeguarding scope (T4, T7):** count "writing never sent, nothing personal asked, progress in the browser" and "defensive security only, LiPo sign-off" as safeguarding, so firm?
4. **Repo safety (W2):** firm (never force-push, pull first), even though it isn't on your firm list?
5. **QR codes (T15):** keep as a default for every school, or a CGGS note?
6. **Rules with no source (T16, T17, T18, W4, editorial pass):** keep as defaults, change, or drop?
7. **Shape of the fix:** OK to add `roadmap/rules.md` as the register, cut `AGENTS.md` to §2, and have subject roadmaps point to it rather than copy?
