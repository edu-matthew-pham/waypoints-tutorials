# Roadmap: Civics and Citizenship

`content/civics/` (subject and course created 30 Oct 2026; all five government lessons built, not yet tried with a class). Set up 30 Oct 2026 so a Civics and Citizenship chat can start. Node content: waypoints-kit `data/civics/`, copied in `data/curriculum/civics.json`.

## Rules (decided 30 Oct 2026, Matthew; `roadmap/shared.md` › Decided: humanities)

- Pace-agnostic (`roadmap/shared.md` › Decided: tutorials are pace-agnostic): same waypoints in the node file's order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, no pace labels.
- One course per standard, folder `civics/<short-name>-7`, one lesson per waypoint. Copy the pattern of `content/economics/scarcity-7/needs-and-wants/` (ICT lesson shape, `language: maths`, `node:` on every lesson, made-up places and people, Make steps written in the student's own book with a `reflect` tick).
- Contestable ideas are taught as models or views, not as settled truth, even where ACARA words them as fact (AGENTS.md). How a system works or should work is described, with the views people hold, not endorsed.
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

## Remaining after lessons 2 to 5

- Both planned diagrams are built as Mermaid `flowchart TD`: the vote-to-government chain in lesson 2 and overlapping executive/legislative functions with independent courts in lesson 3.
- The Before Year 7 catch-up `civics/before-year-7/three-levels` (AC9HS6K07) may need the node check to read `hass.json` for an AC9HS6 node.
- This course now has all five lessons. Planned courses elsewhere in the subject remain Coming later; the subject remains Preview.

## Built: lessons 2 to 5 (30 Oct 2026; not yet tried with a class)

- `representative-and-responsible` (n2, hinge): five-line ordering task and vote-to-government diagram; six role matches; Nib's direct-election slip with a smaller ballot question; accountability between elections; ministers from either house; Make in the student's own book. Conventions are typical width; Question Time, no-confidence and Senate estimates are wider width. House **majority support**, not merely the largest grouping, is the test. Teacher notes explain outside support and s64's three-month exception.
- `power-shared-and-checked` (n3): popular sovereignty, representation, accountability, sorting the three powers, a partial-separation diagram and planted slip, a book table, accountability-tool matches and a US comparison. Ministers sit in Parliament; courts decide independently. Reasons and appeals are distinguished from political instructions.
- `federation` (n4): national and state/territory services; Nib's federal-boss slip; councils' legal foundation; an explicit ACT note; the different constitutional position of territories. Optional width covers exclusive/concurrent/residual powers, a made-up s109 conflict (valid laws assumed; only inconsistency displaced) and public-hospital funding versus operation. No live policy or funding figures.
- `westminster-and-washington` (n5, required integration): influence sorts, the smaller-colony compromise, Nib's Britain-only slip, a book table and spoken exit requiring two features from each tradition and a reason for the mix. Optional width maps lessons 1–4 and offers an unmarked structural discussion. Equal **state** representation is not presented as equal state/territory representation.
- Shape check against the updated AGENTS rule: retain the pilot's Predict/Try/Worked example/Vary/Practise/Make shape because these waypoints teach settled institutional relationships with defensible planted answers. The optional discussion in lesson 5 is unmarked; no discussion viewpoint is treated as a planted wrong answer.
- Every lesson has teacher notes quoting the relevant ACARA elaboration, a class plan and dated primary sources. All writing stays outside the page with a reflect tick. Real institutions and settled facts only; fictional claims and law pairs are identified. No current office holders, named parties, changing seat counts or real referendum results. No student explanations of First Nations history or culture.
- The index describes the complete five-lesson Preview. Four single-line misconception entries added, with a shared roadmap note. No shared tools or workflows changed. Before Year 7 catch-up remains outside this batch.
- Local validation, node checks, build, browser interaction and deck-fit checks cover this batch. Chromium checks all 46 controls (including smaller/optional/reflection checks), rejects 36 wrong-answer attempts, verifies persistence on reload and course/guide/deck/worksheet links. Desktop and 390px mobile pages checked; ordering lines shortened to prevent mobile overflow. Both diagrams rendered and screenshots inspected. No clips rendered. Classroom use and live published pages remain untested.
- Ready for Publish changed lessons for these four slugs (course page included); if Civics has not yet been published as a subject, use a whole-site publish for subject/pathway/navigation. No new video clips to record. Publishing remains Matthew's manual step.

## Built: `civics/democracy-7`, *Freedoms and taking part* (30 Oct 2026; Preview, not yet tried with a class)

- Course `civics/democracy-7`, *Freedoms and taking part* (tagline *What we are free to do, where the limits sit, and how citizens take part*), standard AC9HC7K02, four lessons in node order across two units (`freedoms`, `participation`):
  1. `democratic-freedoms` (AC9HC7K02 n1, hinge): freedom of speech, association, assembly, religion and movement (`sort` + `match`), and why each supports democratic choices before and between elections. Nib's planted slip (`freedoms-separate-from-democracy`, with `smaller:` lead-in): claiming democracy only requires open polling booths on election day, not speech, assembly or association between elections.
  2. `limits-on-freedoms` (AC9HC7K02 n2): why democratic freedoms are bounded by law to protect others' rights, safety and public order (road-safety permits for marches, defamation, incitement to violence, anti-discrimination rules). Nib's planted slip (`freedoms-are-unlimited`, with `smaller:` lead-in): claiming freedom of speech and assembly let anyone block an ambulance lane or publish false accusations without legal limits.
  3. `ways-to-take-part` (AC9HC7K02 n3): participating inside the formal political process (voting, standing for election, contacting an MP) and outside it in civil society (petitions, peaceful assembly, community groups, public submissions). Nib's planted slip (`voting-is-only-participation`, with `smaller:` lead-in): telling Year 7 students they cannot take part in democracy until they turn 18.
  4. `formal-and-active-citizenship` (AC9HC7K02 n4): legal status (birth or grant/naturalisation, rights and legal duties such as obeying laws, compulsory voting and jury service) versus active citizenship in practice, plus settled historical legal facts on the 1902 exclusion from the federal roll, the 1962 *Commonwealth Electoral Act* right to enrol and vote, the 1967 referendum amending s 51(xxvi) and repealing s 127, and 1984 compulsory enrolment. Nib's planted slip (`formal-equals-active-citizenship`, with `smaller:` lead-in): claiming that holding an Australian passport automatically makes someone an active citizen.
- Shape check: all four waypoints teach core civic distinctions and constitutional/legal relationships with defensible planted answers, so the `government-7` worked-example shape fits all four; open judgement questions in wider steps use `reasoning` on paper without marking a political view right or wrong.
- First Nations rule compliance: student text in lesson 4 states only settled legal and constitutional facts (1902 Act, 1962 Act, 1967 referendum sections, 1984 Act)Checked against the Federal Register of Legislation, NMA, AEC and AIATSIS; teacher notes quote ACARA's elaborations for AC9HC7K02 and direct teachers to First Nations-led resources (AIATSIS, AEC milestones, own-words petitions and speeches) and local community-approved material.
- `content/civics/index.md` and `content/civics-teachers.md` updated to link `civics/democracy-7` after `government-7` and add `tagline:` to the remaining "Coming later" courses. Four single-line misconception entries added to `misconceptions.json` (`freedoms-separate-from-democracy`, `freedoms-are-unlimited`, `voting-is-only-participation`, `formal-equals-active-citizenship`).
- Step 4 self-check pass (30 Oct 2026): added `learning:` (one verb-first sentence) to all four `teacher.yml` files while keeping `summary:` as description only; ensured every made-up town and person (`Wattle Creek`, `Orla`, `Dev`) is explicitly labelled made up in student text; replaced all weak or implausible distractors across all four lessons with real student errors (swapping association and assembly, assuming Australia has a single constitutional Bill of Rights chapter, treating policy criticism as defamation, confusing the 1962 *Commonwealth Electoral Act* voting reform with the 1967 constitutional referendum, and assuming committee submissions automatically become law) and matching feedback.

## Plan (awaiting Matthew's "go" before building): course `civics/law-7`, *Law and justice* (AC9HC7K03)

Per `roadmap/checklist.md` › "Plan first, then build", here is the per-waypoint plan for `civics/law-7` (*Law and justice*, tagline *Courts, fair trials and the rule of law*):

- **Standard & descriptor wording:** `AC9HC7K03` (*The Australian legal system*) — "the key principles and features of the Australian legal system, including the Australian Constitution, the rule of law and the court system" (`prior: [AC9HC7K01, AC9HS6K06]`).
- **What is real and what is made up:** Real institutions, historical documents and settled legal principles (Magna Carta 1215, British common law and precedent, statute law vs common law, Chapter III of the Constitution and judicial independence, rule of law, presumption of innocence, burden and standard of proof, state/territory and federal court hierarchies, juries, legal aid). All cases, disputes, litigants and towns (`Wattle Creek`, `Lin v Wattle Creek Hardware`, `R v Baxter`) are **explicitly labelled made up** in the prompt and text.
- **First Nations element:** `AC9HC7K03 n2` wider item notes exploring how Aboriginal and Torres Strait Islander peoples have experienced the Australian legal system. Following `roadmap/shared.md` › First Nations content: no student-facing explanations of First Nations history or culture written by us; teacher notes in all four lessons quote ACARA's elaborations for `AC9HC7K03` and direct teachers to community-approved, First Nations-led legal education resources where teachers choose to explore customary law or historical experiences of the legal system.

1. **Waypoint 1 (`AC9HC7K03 n1`, hinge): *Origins of Australia's legal system* (`origins-and-common-law`)**
   - **Node checkpoint:** "Students can explain the origins of Australia's legal system, including British common law, the Magna Carta, and the establishment of an independent judiciary."
   - **One insight:** Australia's legal system inherited two big ideas from Britain — the **Magna Carta (1215)** principle that **no person, not even the ruler or government, is above the law**, and **common law** (judge-made law built through **precedent**, where lower courts follow the legal reasoning of higher courts alongside statutes passed by Parliament), applied by an **independent judiciary**.
   - **Planted misconception (`parliament-writes-every-rule-and-directs-judges`):** thinking "common law" just means "ordinary statutes that apply to everyone" (or that judges make up whatever they feel like in each case without following precedent), or thinking the Prime Minister can tell a judge how to decide a case. Includes `smaller:` lead-in on whether a lower court can ignore a High Court ruling on the same legal question.
   - **Made-up case and where it is labelled:** A **made-up ladder-safety dispute** (`"In a made-up case in Wattle Creek, a customer sues a ladder maker..."`) showing how a magistrate applies both an Act of Parliament and a higher court's precedent; Nib's worked-example text is labelled `"Nib is explaining how law works in the made-up Wattle Creek case"`.
   - **Distractor ideas (real student errors):**
     - Defining "common law" as "laws passed by the House of Commons or Parliament" rather than court decisions developed through precedent.
     - Thinking the Magna Carta (1215) was the first Australian Constitution written in 1901.
     - Believing that when a statute passed by Parliament and an older judge-made common-law rule clash (and the statute is constitutional), the judge can ignore the statute.
   - **Shape and why:** Default `government-7` worked-example shape (`predict`, `match` Magna Carta / statute law / common law & precedent / independent judiciary, `investigate` with `bug` + `smaller:`, `sort` statute vs common-law precedent vs unconstitutional executive interference, `practise`, `make` in student book with `reflect`, plus `typical` on precedent in the court hierarchy and `wider` on how Australian common law developed independently from UK courts). Fits because `n1` is a hinge teaching settled legal concepts with a clear planted misconception.

2. **Waypoint 2 (`AC9HC7K03 n2`, hinge): *Rule of law and principles of justice* (`rule-of-law-and-justice`)**
   - **Node checkpoint:** "Students can explain the rule of law and the principles of justice, fairness, equality, presumption of innocence, burden of proof, and the right to a fair trial."
   - **One insight:** Under the **rule of law**, the law is public, known in advance, and applies equally to ordinary citizens, police and government ministers alike; in a criminal case, fairness is protected by the **presumption of innocence** and the **burden of proof** (the prosecution must prove guilt beyond reasonable doubt — the accused does not have to prove their innocence).
   - **Planted misconception (`accused-must-prove-innocence`):** assuming that if the police charge someone with a crime, the accused person must prove they are innocent in court ("otherwise why would they be arrested?"). Includes `smaller:` lead-in on who brings a criminal charge to court and who carries the burden of proving it.
   - **Made-up case and where it is labelled:** A **made-up criminal charge** in Wattle Creek (`"In a made-up courtroom scenario, Sam is charged with shoplifting a watch in Wattle Creek..."`, explicitly labelled made up in the question and Nib prompt).
   - **Distractor ideas (real student errors):**
     - Confusing the **presumption of innocence** with "nobody can ever be charged or arrested by police".
     - Putting the **burden of proof** on the defendant to prove they have an alibi, rather than on the prosecution to prove guilt.
     - Confusing "rule of law" with "rule by law / harsh punishments" (thinking rule of law just means having strict police rules, even if government officials are exempt from them).
   - **Shape and why:** Default worked-example shape (`predict`, `match` rule of law / presumption of innocence / burden of proof / equality before the law / right to legal representation, `investigate` with `bug` + `smaller:`, `sort`, `practise`, `make` in student book). Fits because `n2` is the conceptual hinge of the course with a classic, high-frequency student misconception on burden of proof.

3. **Waypoint 3 (`AC9HC7K03 n3`): *Court hierarchy and fair trial* (`courts-and-fair-trials`)**
   - **Node checkpoint:** "Students can describe Australia's court hierarchy (federal and state/territory) and explain the elements of a fair trial, including the roles of witnesses, jurors, legal representation, and due process."
   - **One insight:** Australia organises courts into a **hierarchy** (from Magistrates/Local Courts, to District/County Courts, to State/Territory Supreme Courts, and the Federal Court up to the **High Court of Australia**) so cases are heard at a level matching their seriousness and so losing parties can **appeal** to a higher court; inside the courtroom, a **fair trial** relies on an impartial judge, a citizen **jury** (in serious criminal trials) deciding the facts, witnesses giving evidence, and legal representation.
   - **Planted misconception (`jury-decides-law-and-sentence`):** thinking the jury in an Australian criminal trial decides what the law means and picks the prison sentence (or conversely, that the judge tells the jury whether to vote guilty), rather than separating the **judge's role** (running a fair trial, explaining the law, and sentencing if convicted) from the **jury's role** (randomly selected citizens deciding whether the prosecution proved the facts beyond reasonable doubt). Includes `smaller:` lead-in on who decides the verdict vs who applies the law and sentence in a jury trial.
   - **Made-up case and where it is labelled:** A **made-up appeal path and courtroom scenario** (`"In a made-up state case in Wattle Creek..."`, explicitly labelled made up) plus one Mermaid `flowchart TD` showing the state/territory and federal court hierarchy leading up to the High Court.
   - **Distractor ideas (real student errors):**
     - Thinking every minor speeding fine or small dispute goes straight to the High Court of Australia, or that a Magistrate's Court hears constitutional challenges.
     - Confusing an **appeal** (asking a higher court to review an error of law or decision) with simply asking the Prime Minister to overturn a verdict.
     - Mixing up the roles of judge, jury, witnesses, prosecution and defence lawyer in a criminal trial.
   - **Shape and why:** Default worked-example shape with a `parsons` appeal/hierarchy order and a Mermaid diagram of the court hierarchy. Fits because court levels and courtroom roles are structured institutional knowledge.

4. **Waypoint 4 (`AC9HC7K03 n4`, integration): *Legal system and democratic principles* (`access-to-justice-and-democracy`)**
   - **Node checkpoint:** "Students can explain the connections between a fair and just legal system and democratic principles, and understand how access to justice is supported in Australia."
   - **One insight:** Equal rights on paper only work as a real democracy when ordinary people have **access to justice** in practice (through **legal aid**, community legal centres, interpreters and fair procedures) and when independent courts can check that governments obey the law and the Constitution.
   - **Planted misconception (`equal-laws-guarantee-equal-access`):** assuming that because the law is written the same way for everyone, everyone automatically has equal access to justice in court even if one side cannot afford a lawyer or understand complex legal rules. Includes `smaller:` lead-in on what happens in a complex trial if one side has a team of lawyers and the other cannot afford any legal advice.
   - **Made-up case and where it is labelled:** Two **made-up residents seeking legal help** (`"In a made-up example, Tarn is a young apprentice in Wattle Creek who cannot afford a private lawyer..."`, explicitly labelled made up).
   - **Distractor ideas (real student errors):**
     - Thinking **Legal Aid** gives free lawyers to anyone regardless of income or type of dispute (rather than means- and merit-tested help for people who cannot afford representation).
     - Believing that courts support democracy by always ruling in favour of whatever the elected government wants.
     - Thinking access to justice only matters in criminal trials and never in civil disputes (like tenancy, work or consumer rights).
   - **Shape and why:** Default worked-example shape (`predict`, `match`, `investigate` with `bug` + `smaller:`, `sort`, `reasoning` check on paper connecting the legal system and access to justice to democratic principles, `make` in student book). Fits because it integrates `n1`–`n3` with democratic principles from `K01` and `K02`.

---

## Starter prompt for the Civics and Citizenship chat

> Read CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, the Project doc humanities-y7-plan (background; where it differs, this roadmap and shared.md win), and `roadmap/civics.md`. Look at `content/economics/scarcity-7/needs-and-wants/` end to end as the model lesson. Then propose the first Year 7 Civics and Citizenship course in `roadmap/civics.md`, commit and push, and wait for me before building.
