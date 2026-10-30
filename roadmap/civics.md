# Roadmap: Civics and Citizenship

`content/civics/` (subject and course created 30 Oct 2026; lesson 1 built, not yet tried with a class). Set up 30 Oct 2026 so a Civics and Citizenship chat can start. Node content: waypoints-kit `data/civics/`, copied in `data/curriculum/civics.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `civics/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- Lesson shape is a default, not a rule: the shape above suits skill and concept waypoints with a planted answer. Before building a waypoint, check it fits; if it is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better, and a line in this file saying why is enough.
- First Nations content (`roadmap/shared.md` › First Nations content, refined, 30 Oct): teacher notes start from ACARA's own elaboration for that content and ask the teacher to build on it with local, community-approved material. In student lessons we write no explanation of First Nations history or culture ourselves; where a skill lesson needs an example, use the custodians' own words (one short factual line naming the community and source, plus a link; evidence and technology only, no ancestral remains, no images of people who have died, no culture or belief). Items about First Nations values or connection to Country are pointer pages to First Nations-led resources. The elaboration text is imported: `elaborations` on each standard in `data/curriculum/<subject>.json`, shown on its pointer page. Quote the relevant one in the lesson's teacher notes (see `content/economics/scarcity-7/needs-and-wants/teacher.yml`).
- Inquiry skills: questions, locating and organising, and creating explanations belong to the shared course (`roadmap/humanities-inquiry.md`); this subject builds only its own skills (below). The full investigation is class work.
- Examples come from Year 7 content only, so skill lessons also build what the class needs to know. Mark the subject and its courses **Preview** (pilot, not finished) and show planned lessons as "Coming later" (Project doc humanities-y7-plan › Placeholders; log the shared code change in `roadmap/shared.md`).
- Before Year 7 catch-up lessons (Year 6 HASS) go with the first course where a prerequisite link needs one (Project doc humanities-y7-plan › Before Year 7).
- Before Year 7 catch-up for this subject: "Three levels of government" (AC9HS6K07, with K06), leading into AC9HC7K01. K04 and K05 (religion, heritage, values, migrants and refugees): factual and neutral; terms and data on the site, values questions as discussion only, heritage items as pointers.
- Add `civics` to `CHECKED` in `tools/progressions.mjs` with the first lesson (say so in `shared.md`).

## Year 7 knowledge standards (start here)

| Code | Title | Waypoints | Hinges |
|---|---|---|---|
| AC9HC7K01 | Australia's system of government | 5 | 2 |
| AC9HC7K02 | Characteristics of Australia's democracy | 4 | 1 |
| AC9HC7K03 | The Australian legal system | 4 | 2 |
| AC9HC7K04 | Secular democracy and pluralist society | 4 | 1 |
| AC9HC7K05 | Values, social cohesion and democracy | 4 | 1 |

## Year 7 skills this subject builds itself

- AC9HC7S03 Analysing information and perspectives (3 nodes)
- AC9HC7S04 Methods for civic participation (3 nodes)

## Plan (proposed and approved 30 Oct 2026): course `civics/government-7`, *How Australia is governed*

AC9HC7K01 first: it is the gateway (the humanities plan's "Civics: How Australia is governed opens Freedoms and Law and justice"), K02 to K05 all list it as prior knowledge, and it has the Year 6 catch-up already planned for it. One lesson per waypoint, in the node file's order, one unit (`government`). Usually Year 7 (teacher note only). Lesson shape: copy `economics/scarcity-7/needs-and-wants` (`language: maths`, predict, try, worked example with Nib's planted slip, vary, practise, Make in the student's own book with a `reflect` tick, then typical and wider steps; teacher.yml and a class plan; no clips, no board).

**What is real and what is made up.** Civics can't be all made up the way Economics is: the Constitution and the institutions are the content. So: real institutions and stable constitutional facts only (the Constitution, Parliament's two houses, the Governor-General, the High Court, the double majority); everything else made up (people, proposals, election results, a club). No current office holders, no parties, no seat counts or other numbers that change, no live policy debates. Nothing dates and nothing leans.

| # | Lesson (waypoint) | Flags | Minimum path (untiered) | Hinge check before moving on | Width (`tier:` steps) |
|---|---|---|---|---|---|
| 1 | The Constitution: rules for the rule-makers (n1) | Hinge | A made-up club's constitution as the model (it sets up the committee and says what the committee may decide), then the real one: what it is, that it started on 1 January 1901, that it sets up Parliament, the Governor-General and the High Court and limits what Parliament can make laws about | Bug: Nib says "Parliament wrote the Constitution, so Parliament can change it whenever it votes to". Find the slip (only the people can, at a referendum). `smaller:` back to the club: can the committee rewrite the club's constitution on its own? | Typical: the Constitution's chapters as a match (Parliament, the Executive, the Judicature, the States); Wider: the double majority on a made-up referendum result table (does it pass? a majority of all voters and in at least four of six states), and a short compare: written constitution (Australia, USA) or not one document (UK) |
| 2 | We elect them, they answer to us: representative and responsible government (n2) | Hinge | Order the chain with a `parsons`: we vote → members of the House of Representatives → the side with most support forms government → its leader becomes Prime Minister, ministers come from Parliament → they answer to Parliament every sitting day. Match each role (Governor-General, Senate, House, Prime Minister, Cabinet, Opposition) to its job. One Mermaid diagram of the chain | Bug: Nib says "On election day I vote for the Prime Minister". Find the slip (you vote for a local member; the Prime Minister is whoever leads the side that has the House's support). `smaller:` "Whose name is on your House of Representatives ballot paper?" | Typical: the Prime Minister and Cabinet aren't named in the Constitution: they run on custom (convention), a question on why that still binds; Wider: how question time, a no-confidence motion and Senate committees hold ministers to account (made-up minister, made-up question) |
| 3 | Power shared, power checked (n3) | | Sort jobs into make laws / carry them out / decide disputes about them (legislative, executive, judicial); popular sovereignty and representation in one plain line each; why Australia's split is *partial* (ministers sit in Parliament, the courts stand apart). One Mermaid diagram: who sits where | Not a hinge. Bug for practice: Nib says "In Australia the three powers are kept completely apart, so ministers can't be in Parliament" | Typical: match accountability tools (elections, courts, a free press, question time) to who they hold to account; Wider: compare with the USA's fuller separation (the president is not in Congress) |
| 4 | One country, several governments: federation (n4) | | Sort responsibilities into Commonwealth or state/territory (defence, money, passports; schools, hospitals, police), with local councils shown as set up by the states, not the Constitution. Why the colonies federated, in two lines | Not a hinge. Bug: Nib says "The federal government is in charge of the states, so it can run any school it likes" | Typical: exclusive, concurrent and residual powers, and what happens when a Commonwealth and a state law clash (the Commonwealth law wins, s109) on a made-up pair of laws; Wider: one shared area (health or schools) and who pays for and who runs what |
| 5 | Borrowed from Britain and America (n5) | Integration | Sort features into Westminster or Washington (responsible government, a monarch and Governor-General; a written constitution, a Senate with equal states, federation, a High Court that can rule laws invalid), then one choice: why the founders mixed them (small colonies wanted an equal say) | Exit ticket: name two features from each and say why the mix was chosen | Typical: lessons 1 to 4 placed on one table (where each idea came from); Wider: does the hybrid still fit today? (discussion only, never marked) |

Make steps (own book, partner or teacher reads, `reflect` tick): 1 three things the Constitution does and one thing Parliament can't do alone; 2 draw the chain from a vote to the Prime Minister with arrows, checked against the diagram; 3 a three-column table of the powers with who holds each and one check on each; 4 four services from an ordinary week and which government looks after each (services only, nothing about the student's family); 5 the Westminster and Washington table plus one sentence on why.

Notes:
- **Hinges get the time.** Lessons 1 and 2 carry the `smaller:` support and the whole-class talk in the class plan. Teacher notes name the cascade from the node file's `hinge_reason` (without the Constitution as the source, institutions look arbitrary; without the accountability link, students misread who holds power).
- **Lesson 2 is the hard one.** Kit flags the executive coming from Parliament as counter-intuitive. The chain (parsons, then the diagram, then the Nib slip) is where the lesson spends its time; the role match is secondary.
- **Teacher notes quote the elaboration** that matches each lesson (K01 has four: responsible and representative government, Westminster and Washington, the democratic concepts, federation; none is about First Nations content, so no First Nations step here). Lesson 1's teacher note says the 1901 Constitution's treatment of Aboriginal and Torres Strait Islander peoples is taken up with citizenship (K02 n4), following the First Nations rule, with no student text here.
- **Sources for teacher notes and fact checks:** the Constitution's text (Federal Register of Legislation, aph.gov.au) and the Parliamentary Education Office. Every fact in student text is checked against them at build time; the referendum count and anything else that could change stays out of student text.
- **Political neutrality:** the 1975 dismissal and real referendums (including 1967 and 2023) stay out of this course's student steps. 1975 can be a teacher-note option on lesson 2; 1967 belongs to K02 n4.
- **Checks only, no board.** `sort`, `match`, `parsons`, `question` and `bug` cover all five; the two Mermaid diagrams are the only visuals.

### Before Year 7 catch-up (with this course)

`civics/before-year-7/three-levels` *Three levels of government* (AC9HS6K07 n1 and n4, with K06 n1's three institutions as one step): local, state or territory, and federal, with a sort of everyday responsibilities. Lessons 1 and 4 `assumes:` it, so they show the "Build up to this" link. Same primer shape as the science catch-ups. To check at build: the node check reads `civics.json` for a civics lesson, so a lesson naming an AC9HS6 node may need the check to read `hass.json` too (log it in `shared.md` if so).

### The rest of Year 7 Civics, shown as "Coming later"

The subject page lists the other courses so teachers see the whole year (and the Preview label, when the shared placeholder work lands):

- `civics/democracy-7` Freedoms and taking part (K02, 4 lessons, n1 hinge)
- `civics/law-7` Law and justice (K03, 4 lessons, n1 and n2 hinges)
- `civics/diversity-7` A diverse democracy (K04, 4; n3 a pointer page)
- `civics/values-7` Values and living together (K05, 4; values questions as discussion only, n3 and n4 factual)
- Civics' own skills (S03 analysing information and perspectives, S04 methods for civic participation): one skills course, or S04 folded into `democracy-7` beside K02 n3 as the humanities plan had it. Decide when K02 is planned.

### Decided (30 Oct 2026, Matthew said go on the recommendations)

1. Lesson 5 is **required** (one lesson per waypoint).
2. **Real institutions and settled constitutional facts, made-up everything else**; no current office holders, parties, changing numbers or live debates.
3. Lesson 1 opens with a **made-up club's constitution** as the model; teacher notes name where the comparison breaks down.
4. Referendums are taught by a **made-up result table** (the double majority); 1975, 1967 and 2023 stay out of student steps (1967 belongs with citizenship, K02 n4).
5. **Build order:** lesson 1 as the pilot, Matthew looks, then lessons 2 to 5 and the catch-up.

## Built (30 Oct 2026; not yet tried with a class)

- Subject `content/civics/index.md` (order 9, pathway *How Australia is governed*, the four other Year 7 courses as Coming later) and course `civics/government-7` (Usually Year 7).
- Lesson 1 `the-constitution` (AC9HC7K01 n1, hinge): predict (club spending rule), sort (what goes in a club rulebook), worked example on the real Constitution with Nib's planted slip (`parliament-changes-constitution`, with a `smaller:` back to the club), vary (3 tasks), practise (which body, Sam's idea), a Make step in the student's own book (reflect tick), one typical step (chapters match) and two wider steps (did the referendum pass, other countries' rulebooks). Teacher notes (hinge reason, where the club comparison breaks, what is left out on purpose, First Nations and the 1901 Constitution pointed to K02 n4 with no student text), class plan, sources (PEO). Validate clean; all 14 answerable checks accept their stored answers in a headless browser.
- `civics` added to the node check's `CHECKED` (`tools/progressions.mjs`, one word; logged in `shared.md`).
- Needs a whole-site publish (new subject).

## Open for lessons 2 to 5

- Both diagrams (lessons 2 and 3) are Mermaid `flowchart TD`, at most about 12 boxes.
- The Before Year 7 catch-up `civics/before-year-7/three-levels` (AC9HS6K07) may need the node check to read `hass.json` for an AC9HS6 node.
- Placeholders for planned lessons inside this course are the shared "planned units and lessons" display (humanities plan, approved 30 Oct); until that lands the course page says five are planned and shows only what is built.

## Starter prompt for the Civics and Citizenship chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/civics.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Civics and Citizenship course in `roadmap/civics.md`, commit and push, and wait for me before building.
