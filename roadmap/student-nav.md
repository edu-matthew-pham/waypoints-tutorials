# Student navigation and search: audit and plan (19 Nov 2026)

Raised by Matthew on 19 Nov 2026 (Project doc `claude/handoff-student-nav-audit.md`). **Step 1 only: audit and plan. Nothing built. Waiting for Matthew's go.**

Touches shared builders and site scripts (`tools/build-site.mjs`, `tools/lesson-view.mjs`, `tools/search-view.mjs`, `tools/search-index.mjs`, `site/search.js`, `site/progress.js`, `site/trail.js`), so it is linked from ROADMAP.md and `roadmap/shared.md`. Checked `git log` on those files on 19 Nov: the last changes are the year recaps rename (dc06b0d, 059a262) and the prior-knowledge tools (d027472). Nothing else is in progress on them, so no clash.

## Decisions (20 Nov 2026, Matthew; still waiting for go)

- **Teacher view (new, replaces the separate fixes for Q1, Q2, Q6, Q8 and Q9's default):** one switch, remembered per browser (localStorage `wp-view`, nothing sent), off by default; `?teacher=1` turns it on (for guide links and decks). A tiny script in the page head sets it before drawing, so pages don't flash. It tidies the page and keeps nothing secret: teacher material stays in the page and any student can flip it.
  - Off (student view): the course teacher box is one closed "For teachers ▸" line; Make your own version and Add to my path sit inside the closed For teachers section, which comes after Now you can and Next lesson; science step pills show step titles only; subject pages show one student line; search starts on For students.
  - On (teacher view): the box is open, the footer buttons show, the 5E words show on pills, the teacher paragraph shows, search starts on Everything, the tier names show beside the extra-examples choice.
  - Subject pages: the Trails / List for teachers toggle becomes this switch ("Student view · Teacher view"), so teacher view opens subject pages on the List. One setting everywhere (proposed 20 Nov; Matthew leaning yes).
- **Q3:** Playground and Reference stay in the navbar and leave the course page chip row; Recap, Practice and Projects chips stay and wrap on phones.
- **Q4:** don't police going ahead: trails and "Back to the trail" stay as they are; a student may try Year 8 if they choose. The year's recap is added as an extra link on the last lesson of a year, beside the trail link.
- **Q5:** the Width bar becomes a plain choice for students, "Extra examples: Fewer · Usual · More" (Usual by default, or what a teacher's `?width=` link sets); teacher view adds the tier names. Width stays a teacher planning idea.
- **Q7:** ledes that give the answer before Predict are noted for the subject chats, not fixed here.
- **Q9:** search Show is two-way: For students / Everything.
- **Q10:** one batch (page fixes, teacher view and search), one whole-site publish; the bigger ideas (fading later years on trails, ticks on year recaps) wait.
- The "just do" list in Part 2 A and Part 3's quick wins go ahead as proposed.

## How it was walked

Built the site from main (dc06b0d, `WP_NO_MAKECODE=1`), served `dist/`, and walked it in headless Chromium at 1280 and 390 px, light and dark, first with empty progress and then after finishing one lesson per course (every check key set in `wp-progress`). Routes, as a student who arrived by a link:

| Subject | Course | Lesson | Also |
|---|---|---|---|
| Maths | Year 7 Number | Comparing integers | course recap, Year 7 recap, Number trail, curriculum map |
| Science | Year 7 Chemistry | What is everything made of? | course recap, Year 7 recap |
| Code | Python Foundations with Turtle | Drawing with a turtle | course recap, Python trail, Reference |
| English | Holding writing together | Say it again, on purpose (the Continue card skips the optional warm-up) | course recap, both subject views |
| History | Source origin and purpose | Who made it, and what does it show? | course recap |
| ICT | Working with data | A formula keeps up | course recap |

Plus the home page, Teachers, About, the phone menu, "? Explain", the "what kind of stuck" link, two old addresses (`maths/look-back/year-8/`, `science/chemistry/`) and a missing address. Then 46 search queries run through the real `site/search.js` code against the built index.

Screenshots are in `.render-tmp/nav/` (gitignored, so they stay in this session's sandbox; the ones that matter are described in words below). No page errors on any route. Old addresses forward correctly. No sideways scroll anywhere except one (finding 4).

## Part 1: findings

Severity: **blocks** (a student can't go on or can't read it), **confuses** (the next move or the page's purpose isn't obvious), **polish**.

| # | Page or route | What's unclear | Severity |
|---|---|---|---|
| 1 | Lesson footer, dark mode | "Make your own version" and "Add to my path" are dark blue text on the dark page (browser default link colour, not the theme). Hard to read. Screenshot `x-mine-dark.png`. | blocks |
| 2 | Lesson footer | Those two buttons are teacher features shown to every student, between "Next lesson" and the end of the page. A student who presses "Make your own version" lands in Create. | confuses |
| 3 | Lesson footer | "Source: content/code/python-foundations/turtle-intro/lesson.md" is a repo path: noise to a student. | polish |
| 4 | Course page, 390 px | The chip row (Playground, Reference, Recap, Projects) runs off the right edge on Code courses; "Projects" is cut off. Screenshot `code-course-390.png`. | confuses |
| 5 | Course page, every subject | The teacher strip (Usually, Lessons, Do first, Teacher guide, Copy link for students, and on Code "Standards, in general: … (8P06) … What this means") sits above the Start card. On a phone it fills most of the first screen and Start is below the fold. Students arrive here by link. | confuses |
| 6 | Course page | The course summary is often written to teachers: "Students trace what words such as it…" (English), "Four lessons for AC9HH7S03…" (History), "Concept tutorials for introducing or revising each idea" (Science). The tagline (written for students) is not on the course page. | confuses |
| 7 | Course page | Playground and Reference appear twice: in the navbar and as chips under the title. "My progress" in the navbar is highlighted on the course page, but it *is* the course page, so it looks like a separate place. | polish |
| 8 | Course page | The coloured segments under each lesson have no key (each colour is a step job). Fine for teachers, meaningless to a student; "n of m done" already says it. | polish |
| 9 | Course page, Code | Footer "Snippets unlocked: 0 of 57 · Next unlock: ask and reply · My tools: 0 · My modules: 0". "Snippets" and "modules" are words a Year 7 won't have met on day one. | polish |
| 10 | Course page, History | One-lesson units repeat the lesson's title as the unit title, with "0 of 1 done". | polish |
| 11 | Course page | "Do first: No earlier course needed" and "Before Year 7 · see them" are useful to teachers; to a student "see them" is a vague link. | polish |
| 12 | Lesson page | Science step pills say "Engage: …", "Explore: …", "Elaborate: …" and the fold says "How this lesson works: Engage, Explore, Explain, Practise, Elaborate, Evaluate". These are teacher words (5E). Maths and History use "Worked example", "Vary", "Practise", which read fine. | confuses |
| 13 | Lesson page | The **Width** bar ("More contexts, same idea. Showing typical. Minimum · Typical · Wider") is shown to students on most non-Code lessons. "Width" and "Minimum" mean nothing to a student; "Minimum" could read as "the least I can get away with". | confuses |
| 14 | Lesson page | Course bar at 1280: when the previous lesson has a long title, the current lesson's title is squeezed to "2 …" (History: "‹ 1. Primary or secondary? It is about when, not how old · 2 … · 3. Why was it made…"). Screenshot `history-L-1280d.png`. | polish |
| 15 | Lesson page | Some ledes are long (History: five sentences, then the intro repeats the same idea). Some give the insight before the Predict step: Maths "Comparing integers" lede says "the number further left is less" above a step asking which is greater. The Explain button waits for the Predict; the lede doesn't. Content, so for the subject chats (question 7). | confuses |
| 16 | Finishing a lesson | Nothing says "You've finished this lesson". Done shows only as pill counts and on the course page. The end order is: last step, **For teachers** fold, "Now you can", Practise card, Next lesson, the teacher footer. The For teachers fold sits between the student's last step and their wrap-up. | confuses |
| 17 | Finishing the last lesson of a year's course | The next card says "You reached the end · Back to <pathway>", which opens the trail map, where the next stop is the next year's course (Year 8 Number after Year 7 Number). That is the trail working as drawn, but it is the one place a student is pointed a year forward. | question 4 |
| 18 | Trail map (maths, science) | Year 8, 9 and 10 courses are drawn as the next stops on the student's trail from day one. The trailhead text says "start with whichever your class is working on", but the map itself reads as a sequence to walk. | question 4 |
| 19 | Phone menu, lesson page | With Menu ▾ open, the sticky course bar ("1 of 21 · Comparing integers ▾ ›") stays on top of the menu's bottom rows. Screenshot `x-menu-390.png`. | polish |
| 20 | Phone menu | The menu opens on 14 subject names, then the full Teachers menu (four groups, about 20 links). A student looking for Reference or My progress has to scroll past all of it; on a lesson page those two sit above the menu, which is right, but Teachers dominates. | polish |
| 21 | Subject page | Summaries are written to teachers ("start with whichever your class is working on", "use them where they help in your own units", "how long to spend … is the teacher's call"). A student who presses "← Maths" from a course reads a teacher brief, then the search box, then trails. | confuses |
| 22 | Subject page, History and the other humanities | The search hint is the general one ("Try fractions, Python, micro:bit, Year 8"): `SEARCH_HINTS` has no History, Geography, Civics, Economics or Humanities skills entry. | polish |
| 23 | Subject page after visiting another subject | "← Back to Drawing with a turtle › Meet the commands" shows on the English page in the same tab. Correct by design (per tab), but odd when it points to another subject. | polish |
| 24 | Recap pages | Work well: "For after the lessons", "Getting ready for Year 7? Start with the Before Year 7 recap", no forward links. The year recaps are long (Maths Year 7: about 11,500 px, 60+ cards) with no contents or jump links, and the cards don't show which lessons the student has done. | polish |
| 25 | 404 page | "Page not found … Go to the tutorials home page and search for the lesson." Works, but has no search box of its own and no navbar. | polish |
| 26 | Words | Labels a Year 7 may stumble on, seen on the walk: **Width, Minimum, Typical, Wider** (13), **Engage/Explore/Elaborate/Evaluate** (12), **Snippets, modules** (9), **Reference** (a chip and navbar item that means "code cards" on Code and "strategy cards" on Learning skills), **Practice** chip vs **Practise this skill** card (same page, two spellings for one thing, correctly noun/verb but it looks like a typo), **Recap** (fine now), **pathway** (only in "All Maths pathways" chips on trail pages), standards codes (course summaries, Code strip, search results). "Optional" reads fine. "Waypoint" did not appear in student view. | polish |

What worked well and should stay: the Continue card on course and subject pages (picks the right next lesson, including skipping an optional warm-up); "What you should already know" with one short line each; "Build up to it" folds; the "what kind of stuck" link (lands on the right strategy card with "← Back to <lesson>"); "Now you can" and the Next lesson card; old-address forwarding; recap page wording.

## Part 2: proposed fixes

Cost notes: **builder** = a shared builder or site script; **publish** = which publish it needs (rule W1: ask first for whole-site); **clips** = whether any clip re-records. `lesson-view.mjs` and `build-site.mjs` are not in any clip's hash, so none of these re-record clips or redraw pictures.

### A. Quick wording and styling fixes

| Fix | Findings | Where | Cost |
|---|---|---|---|
| Theme the footer buttons (`.wpt-mine-btn` uses `var(--accent)` and the page ink), so they read in dark mode | 1 | `lesson-view.mjs` | builder; whole-site publish (every lesson page) |
| Drop the "Source: content/…" footer line from published pages (keep it in Create's preview, where authors use it) | 3 | `lesson-view.mjs` | builder; whole-site |
| Course page shows the student `tagline:` as its lede, with the teacher summary moved into the teacher strip (question 1) | 6 | `build-site.mjs` | builder; whole-site |
| Plain words on the Code course footer: "Code cards unlocked: 0 of 57 · Next: ask and reply"; "My tools" and "My modules" only once one exists | 9 | `site/progress.js` | builder; whole-site |
| A one-lesson unit whose title matches its lesson shows no unit heading or "0 of 1 done" (the same rule the List for teachers already uses) | 10 | `site/progress.js` / `build-site.mjs` | builder; whole-site |
| "Before Year 7 · see them" → "Need a catch-up first? Before Year 7 lessons" | 11 | `build-site.mjs` | builder; whole-site |
| Search hints for History, Geography, Civics, Economics and Humanities skills | 22 | `search-view.mjs` | builder; whole-site |
| Before Year 7 courses carry their real years in search ("Years 4–6", not "Year 7") | search | `search-index.mjs` | builder; whole-site |
| "Practice" chip → "Practise" (one spelling for the one thing a student sees) | 26 | `build-site.mjs` | builder; whole-site |

### B. Layout and link changes

| Change | Findings | Where | Cost |
|---|---|---|---|
| **Course page for a student first:** title, tagline, chips, then the Start/Continue card. The teacher strip folds to one line under the units, or a closed "For teachers" row above the units ("Usually Years 6–8 · 11 lessons · Teacher guide · Copy link for students ▸"), opening to Do first, standards and the teacher summary. Teachers keep one click to everything. | 5, 6, 11 | `build-site.mjs`, small CSS | builder; whole-site |
| **Chips wrap** on phones (flex-wrap), and drop Playground and Reference from the chip row on pages where the navbar already has them, or the reverse (question 3) | 4, 7 | `build-site.mjs` | builder; whole-site |
| **Lesson end, student first:** last step → a short "Lesson done" line when every required check is done (from `wp-progress`, no new storage) → Now you can → Practise → Next lesson → For teachers fold → teacher footer (Make your own version, Add to my path) inside or just under the For teachers fold (question 2) | 2, 16 | `lesson-view.mjs` | builder; whole-site |
| **Width bar for students:** keep the control, rename it in plain words, e.g. "Extra practice in new places: None · Some · Lots" with "Some" as the default, and say once "Your teacher may tell you which" (question 5). The `tier:` names and `?width=` stay as they are for teachers. | 13 | `lesson-view.mjs` | builder; whole-site |
| **5E words on step pills (science):** show the step's own title, with the stage word as a small tag only in the teacher fold and decks (question 6). | 12 | `lesson-view.mjs` (stage prefix display) | builder; whole-site; content untouched |
| **Course bar:** the current lesson's title always wins space; previous and next titles truncate first | 14 | `lesson-view.mjs` CSS | builder; whole-site, or navigation publish if only the bar CSS changes (it isn't between the nav markers, so whole-site) |
| **Phone menu:** the course bar hides while the menu is open; Teachers folds to one closed group in the phone menu | 19, 20 | `NAV_CSS`/`NAV_JS` in `lesson-view.mjs` | builder; publish-navigation |
| **Subject pages:** one plain line for students above the search ("Find your lesson, or pick a trail below") and the teacher summary in List for teachers (question 8) | 21 | `build-site.mjs`, each subject's `index.md` stays | builder; whole-site |
| **404 page:** add the navbar and a search box | 25 | `build-site.mjs` | builder; whole-site |
| **Year recaps:** a short contents row (one link per course) at the top, and a tick on cards whose lesson is done | 24 | `build-site.mjs`, `site/progress.js` | builder; whole-site |

### C. Bigger ideas (for discussion, not this batch unless Matthew says)

- **Trails that don't run ahead (17, 18):** for year-based subjects (maths, science, humanities), the student trail shows the current year's course in full and later years as small, unnumbered "Later years" stops, or not at all until reached; the course's last lesson says "You've finished Year 7 Number. Next: the Year 7 recap" instead of "Back to the trail". Teachers keep the full map. Touches `tools/trail.mjs`, `site/trail.js`, `lesson-view.mjs`. Whole-site.
- **A student "where am I" strip:** on course pages, one line "You've done 3 of 21 · last opened Comparing integers" in place of the empty-looking segments. Small, but overlaps the Continue card, so maybe not needed.
- **Year recaps with ticks and a "shaky" mark** kept in the browser, so a student can come back to the cards they flagged. Needs a new localStorage key; check against rules T4.

## Part 3: search

### What the queries showed (46 queries, top results through the real search code)

| Query | First results | Problem |
|---|---|---|
| fractions | four Year 4–5 **standards**, then Year 7 and 8 units | Standards (including primary years) outrank lessons for a student |
| year 8 science | the four Year 8 courses | Good |
| python loops | Commands, loops and values (unit), the course, Repeat with a loop | Good |
| how do I make a sprite | one result, Move with the controller | Every word must match, so a question finds almost nothing |
| sprite | Many sprites, Sprites and movement, Sprites on the screen | Good |
| photosynthesis | Year 9 Earth and space course | No lesson on it (a content gap, not search) |
| persuasive / persuasive essay | Judging and persuading, then standards / one strategy card | A natural phrase loses the course |
| fracions, pythgoras | nothing | No tolerance for a typo |
| AC9M8N01, AC9S7U05 | the course, the standard, the lessons | Good for teachers |
| year 7 history | **Before Year 7 History** first, labelled "Year 7" | Wrong year label (Before Year 7 courses say "Year 7") |
| microbit (no colon) | Arcade and AI robots courses first | "microbit" only matches keywords; "micro:bit" works |
| make a game | Arcade units, then "What makes a sex cell special?" (Year 9 Biology) | Prefix match: "game" starts "gamete" |
| times tables | Algebra and HTML "Tables" lessons | Noise (no times-tables lesson) |
| excel | ten ICT cards, no course | The Working with data course doesn't mention Excel in its index entry |
| revision, recap, year 8 recap | nothing, or two unrelated AI lessons | **Recap pages are not in the index** |
| stuck | When you're stuck card | Good |
| topic sentence | the course, a Year 4 standard, then **"One idea · Teachers › Make a lesson"** | Teacher-course lessons appear for students |
| volcano | nothing | The cohesion lesson's text is about volcanoes but lesson bodies aren't indexed (by design, to keep the index small) |
| loops, cells, forces, energy, apostrophes, binary, pythagoras, food webs, robot, python, html, algebra | sensible, but standards often in the top 3 | Standards ahead of lessons |

Numbers: 2,354 entries (1,011 lessons, 699 standards of which 417 are Foundation to Year 6, 404 units, 142 courses, 61 cards, 27 teacher pages, 5 how-tos, 5 refreshers). The index is now **1.25 MB, 243 KB gzipped**, about double the handoff's figure (650 KB, 125 KB), mostly from the F–10 standards and new subjects. Filters need no new fields: every entry already has `ty` (kind), `sp` (subject) and `y` (years).

### Filters: proposal

Three controls above the results, shown only once something is typed (so the empty page stays clean):

1. **Subject** as a dropdown ("All subjects", then the 14 names). On a subject page it starts on that subject, and switching to "All subjects" is one click (today it is fixed per page). A dropdown, not checkboxes, because 14 checkboxes is clutter.
2. **Year** as a row of small toggle buttons: **Any · Before 7 · 7 · 8 · 9 · 10**, one at a time. A result matches when its years include the one picked ("Usually Years 6–8" matches 7). Results with no year (cards, teacher pages, some Engineering courses) show under Any only. Typing "year 8" still works and moves the toggle to 8.
3. **Show** as a simple two-way choice rather than five kinds: **For students** (lessons, courses, units, recaps, refreshers, cards, how-tos) or **Everything** (adds curriculum standards and teacher pages and the teacher courses). "For students / For teachers" was considered, but teachers want lessons too, so "Everything" is the honest label. Five kind checkboxes were considered and dropped as too fiddly for students; the result line already says what each result is ("Lesson", "Course", "Standard").

Why these and not more: subject and year are how teachers said they look (25 Oct decision); "For students" fixes the biggest noise found (standards and teacher pages ahead of lessons) with one switch.

**Defaults per page**

| Page | Subject | Year | Show |
|---|---|---|---|
| Home | All | Any | For students |
| Subject page | That subject | Any | For students |
| Teachers page | All | Any | Everything |
| Curriculum map, pointer pages (if a box is added later) | That subject | Any | Everything |

**URL:** filters live in the address so a teacher can share a filtered search: `/maths/?q=fractions&year=8`, `/?q=persuasive&subject=english&show=all`. Only non-default values are written (`history.replaceState`, no page reload, nothing sent). Opening such a link fills the box and runs the search. A `?q=` link also gives the 404 page a way to search for the missing address's last word.

**Mock, 1280 px** (Maths subject page, after typing):

```
Find a lesson
┌──────────────────────────────────────────────────────────────┐
│ fractions                                                    │
└──────────────────────────────────────────────────────────────┘
 Subject [ Maths ▾ ]   Year  ( Any ) ( Before 7 ) [ 7 ] ( 8 ) ( 9 ) ( 10 )   Show ( For students ▾ )
┌──────────────────────────────────────────────────────────────┐
│ Year 7 Number                                         Course │
│   Fractions and decimals · 7 lessons                         │
│   ├ Equivalent fractions                              Lesson │
│   ├ Adding fractions                                  Lesson │
│   └ + 3 more in this course                                  │
│ Fractions (quick refresher)                        Refresher │
│ Year 7 Number: recap › Equivalent fractions            Recap │
└──────────────────────────────────────────────────────────────┘
 7 results for Year 7. Showing all years: 19.
```

**Mock, 390 px** (filters fold into one line; the toggles wrap):

```
Find a lesson
┌──────────────────────────────┐
│ fractions                    │
└──────────────────────────────┘
 Maths ▾ · Year 7 ▾ · Students ▾
┌──────────────────────────────┐
│ Year 7 Number         Course │
│  Equivalent fractions Lesson │
│  Adding fractions     Lesson │
│  + 3 more                    │
│ Fractions       Refresher    │
└──────────────────────────────┘
```

On phones each of the three is a native `<select>` (no custom widget, works with the keyboard and screen readers).

### Other search fixes (quick wins, same batch)

- **Index the recap pages** (course and year recaps, as kind "Recap"), so "recap", "revision" (as a keyword) and "year 8 recap" find them.
- **Lessons ahead of standards** in "For students": standards hidden there; in "Everything", a standard with lessons still ranks below its own lessons.
- **Whole-word beats prefix:** a typed word that matches a whole word scores more than one that only starts a word, so "game" prefers "game" to "gamete".
- **Question words are optional:** drop a short list of question words (how, do, I, a, an, the, to, what, is) before matching, so "how do I make a sprite" searches "make sprite".
- **One typo:** only when nothing is found, try each word against the index's words at one letter's difference (words of 5+ letters) and say "Showing results for *fractions*". Kept small: the word list is built once from the loaded index.
- **Group by course:** up to three lessons under their course, then "+ n more in this course" (mock above). Keeps 12 results from being 12 lessons of one course.
- **Empty results** suggest: the same words with filters cleared ("Nothing for Year 9. 4 results in other years"), then the current hint.
- **Keywords** for the obvious app names on course entries (Excel, Google Sheets on Working with data; microbit on micro:bit courses).
- **Keyboard:** already good (arrows, Escape, Enter opens the first); the filters are plain form controls, so Tab reaches them.
- **Size:** `site/search.js` grows by an estimated 2–3 KB. The index grows by about 140 recap entries (small). Optional trim: the `k` (keywords) field repeats the title and summary; dropping the repeats could save about a fifth. Not needed for this batch.
- **Class names** stay `wp-search`/`wp-results` for the existing parts; new parts get `wpt-sf-…` (avoids ad-blocker generic rules); run `check-blockers`.

Cost: `site/search.js`, `tools/search-view.mjs`, `tools/search-index.mjs`; whole-site publish (search-index.json, every page with a search box). No clips.

## Part 4: questions for Matthew

1. **Course page teacher strip:** fold it into a closed "For teachers" row above the units (one line visible: years, lessons, Teacher guide, Copy link), or move it below the lesson list? Either way the Start card comes first.
2. **Lesson footer:** move "Make your own version" and "Add to my path" inside the For teachers fold (teachers open it anyway), or keep them visible after Next lesson, styled quieter and labelled "For teachers"?
3. **Playground and Reference** are both in the navbar and the chip row on course pages: keep the chips (closer to the content) and drop them from the navbar on course pages, or the reverse?
4. **Trails and later years (findings 17, 18):** the student trail draws Year 8–10 courses as the next stops, and the last lesson of a year sends students "Back to the trail". Is that pointing forward a year? Options: (a) leave it (teachers decide; years are suggestions); (b) the last lesson of a year points to that year's recap, trail unchanged; (c) also show later years on the student trail as faded "Later years" stops. I'd suggest (b) now, (c) later if you want it.
5. **Width bar wording for students:** "Extra practice in new places: None · Some · Lots"? Or hide the control from students entirely and let the teacher set it by link (`?width=`), showing only "Your teacher has chosen extra practice" when set?
6. **5E words on science step pills:** show only the step's own title to students (stage words stay in decks and teacher notes)? Same question for "Worked example", "Vary", "Practise" in maths and humanities, which I think read fine as they are.
7. **Ledes that state the answer before Predict** (finding 15): flag to the subject chats, or leave? It's content, not navigation.
8. **Subject page summaries:** add one student line above the search and move the teacher text into List for teachers, or keep the summary as is for both?
9. **Search "Show":** two-way "For students / Everything" as proposed, or the fuller set of kind checkboxes from the handoff?
10. **Scope of the build batch:** A and B and the search work in one batch (one whole-site publish), with C left for later? Or the search first on its own?
