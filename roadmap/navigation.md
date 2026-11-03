# Subject pages: one consistent pass (plan, 1 Nov 2026)

Raised by Matthew from the maths chat after the maths split (Project doc `claude/handoff-navigation-review.md`). **Built 1 Nov 2026 (Matthew said go); needs a whole-site publish.** See Built, at the end.

Touches shared builders (`tools/build-site.mjs`, `site/trail.js`, a little of `tools/trail.mjs`), so this file is linked from ROADMAP.md and `roadmap/shared.md`. Checked `git log` on those files on 1 Nov: the last changes are History's unit label (185b317), HASS catch-up links (a907c7f) and Civics planned items (506cf89); none touch the List for teachers or the stage words, so no clash.

## What each subject page shows now

Every subject has: title and summary, search box (with "Or browse:" where there is a map or ideas page), then **Trails | List for teachers**. Trails = a Continue card and one card per pathway. List for teachers = a "New to Learning Waypoints? Getting Started · 10-minute presentation · Humanities pilot" line, then each pathway as a heading with its courses as rows (title, years, lessons), with "Then" before `stage: extensions` courses.

| Subject | Extra on the page | List rows today | Problems |
|---|---|---|---|
| Maths | Map link, map card, Look back (Years 7–10) | "Year 8 Probability · Year 8 · 5 lessons" under **Probability** | Strand and year said twice; no hint of contents; "Then" before Year 9; Before Year 7 row says "Year 7" |
| Science | Same as maths | "Year 8 Chemistry · Year 8 · 10 lessons" | Same as maths |
| English | **"What are you teaching?" purpose cards** before the toggle, "Not sure where to start?" line; map link | "Holding writing together · Usually Years 6–8 · 6 lessons" | Students land on teacher purpose cards first; "Then" before an unbuilt course; year on every row though all are 6–8; map card says "Years 7–10" but English's map data is F–10 |
| History | Preview wording in summary | "Shaped by the land · Usually Year 7 · 3 lessons" | "Usually Year 7" on all 13 rows; still says Preview (see below); Before Year 7 row says "Year 7" |
| Geography, Civics, Economics, Humanities skills | Map link (Economics only) | Every row "Usually Year 7" | Year repeated on every row; Geography lists 8 "coming later" rows |
| Code | "How coding ideas build · Review sheet", "Create a lesson" | "Python Foundations with Turtle · Usually Years 6–8 · 11 lessons", "Then" | Fine: years and "Then" both mean something here. No contents line |
| How computers work | Map link and card | "Data representation · Year 8 · 9 lessons", "Then" | Mostly fine; one-course pathways repeat their heading ("Start here › Starting out") |
| Engineering | — | "Mechanisms · 5 lessons" | Most rows have no years, a few do; "Capstone projects · 0 lessons"; "Design your own board" is only a "Then" with nothing before it |
| ICT skills | — | "Working with data › Working with data · Usually Years 6–8" | Every pathway is one course with the same name: heading repeated as the only row |
| Learning with AI | — | "AI Foundations › AI Foundations · 13 lessons" | Same repeat; two rows have no years, the rest "Years 7–10" |
| Learning skills | — | One course | Fine |

Found across all of them:
- **"Extensions" is worse than "Then" for maths and science.** The same `stage:` makes each pathway page head Years 9–10 as **Extensions** (list view) and the trail card say "Extension · after Year 8 Algebra". That reads as optional or advanced, against "years are suggestions, width not acceleration" (rules T9, T10).
- **The "New to Learning Waypoints?" line** sits on every subject's list and every pathway page, so Maths and Code show a "Humanities pilot" link.
- **Preview still shows** on Geography (History and Humanities skills dropped it later on 1 Nov) (the home page tag from `preview: true`, and "Preview (a pilot, not finished)" in summaries), though Matthew decided on 1 Nov that students shouldn't see it (Economics and Civics already dropped it, 1 Nov). Belongs to the subject chats; flagged here because it is page-level.
- **Order of blocks drifts:** English puts purpose cards above the toggle; Code alone has a tools line at the foot; only maths and science have look-backs (fine, they are year-based).

## Proposed common rules (defaults, with reasons)

1. **Say a shared thing once.** A row shows only what tells it apart from its neighbours. *Why:* teachers scan a one-screen index; repeats push the useful part off the line.
   - A course titled "Year N X" under the heading X shows as **Year N**.
   - A pathway with one course of the same name shows no repeated title: its row is the contents line plus lessons, linking to the course.
   - If every course on a subject page has the same years (History, Geography, Civics, Economics, Humanities skills: all Year 7 today), say it once above the list ("Year 7 for now; later years to come") and drop it from rows.
   - Course pages, search results and trail cards keep full titles (someone arriving by link needs them).
2. **A contents line under every row**, small and muted. *Why:* "11 lessons" doesn't tell a teacher it covers brackets, inequalities and lines.
   - Default: the course's unit titles joined with " · " when it has three or more units (warm-up and challenge units left out); otherwise its `tagline:` (every course already has one).
   - Optional `contents:` on a course entry in the subject's `index.md` overrides both, for courses where neither reads well (History taglines are student questions, so History probably uses unit titles, which work).
3. **Years only where they tell courses apart.** *Why:* years are suggestions, and a year on every row reads like a gate.
   - Year-by-year subjects (maths, science): the year *is* the row label.
   - Mixed subjects (Code, How computers work, Engineering, Learning with AI): keep years per row, and fill the gaps so every row has one or none consistently.
   - Before Year 7 rows show no year (today they wrongly say "Year 7").
   - When History (or any subject) adds Year 8, its list groups by year inside each pathway: a small **Year 7** / **Year 8** label, rows under it (mock below).
4. **"Then" and the stage words only where they mean "foundations first".** *Why:* in maths and science, Year 9 isn't an extension of Year 8, just the next year.
   - Maths and science drop `stage:` from their course entries (their `after:` lines already set the trail order). With no extensions in a pathway, the builders show no "Then", no Foundations/Extensions headings on the pathway page and no stage word on trail cards.
   - Code, How computers work, Engineering and Learning with AI keep it. An extensions group with nothing before it (Engineering's board pathway) shows no "Then".
   - Planned Year 10A maths courses, when built, sit in their strand as a "Year 10A · Optional" row, not under "Then".
5. **Teacher start line: shorter and relevant.** "New to Learning Waypoints? Getting Started · 10-minute presentation" once at the top of the list view, not on every pathway page; the Humanities pilot link only on the five humanities subjects.
6. **Same order on every subject page:** title and summary → search (Or browse: map, ideas) → Trails | List for teachers → under both: map card, look-backs, teacher tools. Subject extras go inside the list view, so students land on trails everywhere. For English that means the purpose cards move into List for teachers (question 2).

## What pages would look like after

**Maths, List for teachers** (three of seven groups):

```
New to Learning Waypoints? Getting Started · 10-minute presentation

Number ›
  Year 7                                              21 lessons
    Integers · Squares · Place value and estimating · Fractions and decimals · Ratios · Modelling
  Year 8                                              10 lessons
    Recurring decimals · Irrational numbers · Index laws · Integers · Fractions and decimals · Modelling
  Year 9                                               4 lessons
    The real numbers, scientific notation and simple interest      (tagline: one unit)
  Year 10                                              3 lessons
    Approximation and error                                        (tagline)

Probability ›
  Year 7                                               3 lessons
    Sample spaces, probability and experiments.
  Year 8                                               5 lessons
    Complements, Venn diagrams, two-way tables and trees.
  Year 9                                               9 lessons
    Two-step chance, with and without replacement, and simulations.
  Year 10                                              4 lessons
    Conditional chance: given, independent or not.

Before Year 7 ›
  Catch-up lessons                                    12 lessons
    Parts of a whole · Number tools · Unknowns
```
No "Then". The Algebra pathway page heads its cards by year, not Foundations and Extensions. Science is the same shape.

**History, List for teachers** (today, all Year 7):

```
New to Learning Waypoints? Getting Started · 10-minute presentation · Humanities pilot
All courses here are usually Year 7. Later years to come.

How we know ›
  Source origin and purpose                            3 lessons
    Which kind of source? · Who made it · Why was it made? · Putting it together
  Source usefulness                                    3 lessons
    Fact · Accurate versus useful · Weighing a source as evidence
  How we know                                          4 lessons
    What can the evidence tell us?
The ancient world ›
  Shaped by the land                                   3 lessons
    Where it grew · From farming to cities · Help and limits
  …
```
After Year 8 arrives:
```
The ancient world ›
  Year 7
    Shaped by the land                                 3 lessons
    …
  Year 8
    (Year 8 courses)
```

**English:** students land on Trails like every other subject; teachers press List for teachers and see "What are you teaching?" cards first, then the list:

```
What are you teaching?   [Analytical] [Imaginative] [Persuasive] [Informative] [Reflective] [Critical]
Not sure where to start? Holding writing together, How texts are built, Building sentences, Judging and persuading.
All built courses are usually Years 6–8.

How writing works ›
  Holding writing together                             6 lessons
    Words that hold it together · Guiding the reader · Inside a paragraph
  Building sentences                                  11 lessons
    Detail inside a sentence · Shaping sentences
  …
  Writing like a subject expert                     coming later
```
("Then" before the unbuilt course goes: nothing built sits before it in a foundations sense.) The map card's "Years 7–10" wording is corrected to what English's map shows.

**ICT, Learning with AI** (one course per pathway): heading, then one row "Cells, formulas and charts: let the sheet do the sums. · Usually Years 6–8 · 9 lessons", no repeated title.

## What stays per subject

English's purpose cards and start suggestion; Code's "How coding ideas build", Review sheet and Create link; curriculum maps where there is data; look-backs for maths and science; Before Year 7 pathways; each pathway's `about:`; one stop per unit on trails. Trail maps and trailhead cards are unchanged apart from dropping the stage word for maths and science. Course and lesson addresses don't change.

## Cost

- **Builders:** `tools/build-site.mjs` (list rows, contents line, shared-years line, teacher start line, stage headings on pathway pages, English purposes inside the list view, map card wording), `site/trail.js` (no stage word when a pathway has no extensions), possibly `tools/trail.mjs` (the Foundations column label). Small, one push.
- **Data:** drop `stage:` lines in `content/maths/index.md` and `content/science/index.md`; Engineering's 0-lesson capstone row and missing years (with the Engineering chat's say).
- **Publish:** whole-site (or quick) publish, because subject and pathway pages change; ask Matthew first (rule W1). Navigation publish isn't enough.
- **Clips and pictures:** nothing re-recorded or redrawn: no lesson folder, `render.mjs`, `stage.html` or playground changes.
- **Testing:** build, validate, headless check of all 14 subject pages and their pathway pages at 1280 and 390 px, light and dark, with and without stored progress.

## Questions for Matthew

1. Contents line: unit titles (3+ units) else tagline, with an optional `contents:` override. OK, or always the tagline?
2. English: move the purpose cards into List for teachers so students land on trails, or keep them first?
3. Code and others: keep the word "Then", or "After the foundations"?
4. Preview on History, Geography, Civics and Humanities skills: fix in this pass, or leave to their chats?
5. The pilot line: Humanities pilot link only on humanities subjects, and the start line off pathway pages?

## Decisions (1 Nov 2026, Matthew)

1. **Contents line = unit names, always**, even for a one-unit course ("Chance" is descriptive enough). *Why:* unit names say what the course covers and match the course page; taglines were written for students. The course's tagline shows on hover (a tooltip on the row), not as the line. Touch screens don't hover, so the tagline is extra, never needed. No `contents:` override for now.
2. **English works like every other subject:** students land on Trails; the "What are you teaching?" cards and the start suggestion move to the top of List for teachers. *Why:* English was the odd one out; the view choice is remembered per browser, so a teacher who picks List lands there next time.
3. **"Then" becomes "After the foundations"** where it stays (Code, How computers work, Engineering, Learning with AI). Maths and science lose it, as planned.
4. **Preview labels stay with the subject chats.** Checked 1 Nov: Civics (3357762), Humanities skills (45a2858) and History (698ee38) have dropped them; Geography dropped them too (5feec6b), so no subject carries `preview: true` now. This pass changes no subject's Preview wording; the Geography chat picks it up from its own roadmap and shared.md.
5. **Tidy the teacher start line:** once per subject page in the list view, not on pathway pages; the Humanities pilot link only on History, Geography, Civics, Economics and Humanities skills.

## Built (1 Nov 2026, Matthew said go)

- `tools/build-site.mjs`: List for teachers rows (labels, unit names, tagline tooltip, shared-years line, no years on Before Year 7 rows, "After the foundations" only when a pathway has both stages), English purpose cards and start suggestion moved into the list view, start line once per subject page (pilot link on humanities subjects only) and off pathway pages, Foundations/Extensions headings on pathway pages only when a pathway has both.
- `tools/trail.mjs`, `site/trail.js`: no Foundations/Extensions zone labels or card words when a pathway has no extensions; the card then reads "After Year 8 Algebra".
- `content/maths/index.md`, `content/science/index.md`: `stage:` removed (their `after:` lines already set the order).
- A course whose unit name repeats its title (Geography's Water as a resource) shows no second line.
- Correction to the plan: the English map card's "Years 7–10" is right. The maps show Years 7–10 and the earlier descriptors those name, so nothing changed there.
- Tested: validate, build, `check-purposes`; headless Chromium on all 14 subject pages at 1280 and 390 px, light and dark, both views (no page errors, no sideways scroll, English cards only in the list view); maths, science and Code pathway pages (stage words gone for maths and science, kept for Code). Screenshots of Maths, English and History looked right.
- Left to subject chats: Geography's Preview label; Engineering's "Capstone projects · 0 lessons" row and rows with no years; AI Foundations and Does AI Help Us Learn? have no years.
- Publish: whole-site (or quick) publish, since subject and pathway pages change. No clips or pictures change.

## Next: link audit after the Humanities pilot (3 Nov 2026, proposed)
Matthew: the teacher side has "lots of links everywhere"; usable and fine for the Term 4 Humanities pilot, but worth an audit once the pilot is running.
- **Watch first:** which routes pilot teachers actually use to find things again (Teachers menu, subject "New to Learning Waypoints?" line, Humanities pilot page, course Reference chip, companion page, quick reference). Ask in the pilot conversations rather than guess.
- **Then trim:** one obvious route to each teacher page (deck, speaker notes, quick reference, pilot page, Getting Started), others removed or demoted; the pilot page stays the single link shared after the talk.
- **Keep in mind:** the printed quick reference points to the main site's Curriculum, Plan and Lessons pages, so those are the stable front doors; tutorials-site links can change underneath them.
- Related, suite-wide: waypoints-framework roadmap E6 (feedback route).
