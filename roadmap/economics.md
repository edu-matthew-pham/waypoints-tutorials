# Roadmap: Economics and Business

`content/economics/` (subject and courses `economics/scarcity-7` and `economics/businesses-7` built 30 Oct 2026; Preview, not yet tried with a class). Started 30 Oct 2026 with Year 7, standards AC9HE7K01 (Opportunity cost and scarcity) and AC9HE7K02 (Types of businesses). Node content comes from waypoints-kit `data/economics/` (copy in `data/curriculum/economics.json`).

Rules this subject follows: `roadmap/shared.md` › Decided (30 Oct 2026): tutorials are pace-agnostic, and `roadmap/shared.md` › Decided: humanities. In short: same waypoints in the same order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check (with `smaller:`) before leaving each hinge, pace is the teacher's call.

## Proposed (30 Oct 2026; built below): course `economics/scarcity-7`, *Scarcity and opportunity cost*

One lesson per waypoint, in the node file's order. Usually Year 7 (teacher note only). Lesson shape: ICT's (`language: maths`, sort, match, question and bug checks, a class plan, no clips) unless a board earns its place. All scenarios are made up (a school tuckshop, a community garden, a council budget), so nothing dates.

| # | Lesson (waypoint) | Flags | Minimum path (untiered) | Hinge check before moving on | Width (`tier:` steps) |
|---|---|---|---|---|---|
| 1 | Needs, wants and why wants never run out (n1) | Hinge, width | Sort personal needs and wants with a reason; explain why wants are unlimited with one example | Bug task: Nib says "if we made enough stuff, everyone would have everything they want". Find the flaw (wants grow as they are met) | Typical: household and community wants; Wider: how advertising grows wants; whether internet access is now a need |
| 2 | Scarcity: not enough for everything (n2) | Hinge | Define scarcity vs a temporary shortage; apply one allocation question (what, how, for whom) to the tuckshop | Question: "The tuckshop ran out of pies today. Is that scarcity?" Wrong answers show shortage = scarcity | Typical: all three allocation questions on the community garden (land, labour, capital); Wider: physically abundant but economically scarce |
| 3 | Opportunity cost: the next-best thing you give up (n3) | Width | Define in own words; name the alternative forgone in one time or money choice | Match: choice → its opportunity cost, with "the price paid" and "everything I didn't buy" as distractors | Typical: community and business choices; Wider: a council spending roads vs a clinic; time and environment as resources |
| 4 | Putting it together: from wants to opportunity cost (n4) | Integration | Order the chain (unlimited wants → scarcity → allocation → opportunity cost) in a parsons-style sort, then explain one scenario with a sustainability point | Exit ticket: explain the chain for a new scenario using the five terms | Typical: judge whether an allocation meets needs into the future; Wider: a shared resource such as groundwater |

Notes:
- **Hinges get the time.** Lessons 1 and 2 carry the `smaller:` support and the class plan's discussion (whole class on the bug and shortage questions). Teacher notes name the cascade from the node file's `hinge_reason`.
- **Lesson 3's width is the point.** Many decision contexts are what separate opportunity cost from "the price" (node file: repertoire building), so its typical tier is worth recommending in the teacher notes, not just offering.
- **First Nations wider items** (n1, n2, n3, n4 each list one): not written by us. Teacher notes quote ACARA's elaboration for AC9HE7K01 (now imported) and ask the teacher to build on it with local, community-approved material (decided 30 Oct).
- **Make steps** are written in the student's own book or document and judged by a partner or the teacher (English's no-write-boxes rule), with a `reflect` tick.

## Built: `economics/scarcity-7` (30 Oct 2026; not yet tried with a class)

- Subject `content/economics/index.md` (Economics and Business, order 9, pathway Scarcity, businesses and work) and course `economics/scarcity-7` (Usually Year 7).
- Lesson 1 `needs-and-wants` (AC9HE7K01 n1, hinge): predict, sort, worked example with Nib's planted mistake (`enough-stuff-ends-wanting`, with a `smaller:` lead-in), vary, practise, a Make step written in the student's own book (reflect tick), then one typical and two wider steps. Teacher notes, class plan. Misconceptions `enough-stuff-ends-wanting` and `needs-wants-blur` added.
- Lessons 2 to 4 (30 Oct): `scarcity` (n2, hinge: shortage vs scarcity bug check with `smaller:`, land/labour/capital sort, what/how/for whom sort), `opportunity-cost` (n3: match, next-best-option bug check with `smaller:`, time/money/land), `putting-together` (n4: parsons chain, council $2m questions, cost/benefit sorts, reasoning on paper). Each has typical and wider steps, teacher notes and a class plan; units `scarcity` and `choice` added to the course page; misconceptions `shortage-vs-scarcity` and `opportunity-cost-is-price` added. Validate, build and a headless load of all three pass. Still to do: fresh-eyes review and a trial with a class.
- `economics` added to the node check's `CHECKED` (`tools/progressions.mjs`, a one-word shared change).
- One course per standard and the First Nations teacher note: confirmed by Matthew 30 Oct (`roadmap/shared.md` › Decided: humanities).
- Contestable ideas are taught as models or views, not as settled truth, even where ACARA words them as fact (AGENTS.md). Task: reword `economics/scarcity-7` (needs-and-wants, scarcity, putting-together, class plan, `chain.txt`, `enough-stuff-ends-wanting`) so "wants are unlimited" becomes "economists start from the idea that wants have no limit"; Mia's check asks what pattern the story shows, Nib's slip is about what the model says (a supply problem vs wanting), and a teacher note names the assumption and who disagrees. Do it before the next Economics course.
- Lesson shape is a default, not a rule: the shape above suits skill and concept waypoints with a planted answer. Before building a waypoint, check it fits; if it is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better, and a line in this file saying why is enough.

## Built: `economics/businesses-7`, *Types of businesses* (30 Oct 2026; Preview, not yet tried with a class)

Standard AC9HE7K02 (the reasons businesses exist and how different types of businesses provide goods and services), three lessons in node order in two units (`purpose`, `structures`):

| # | Lesson (waypoint) | Flags | Minimum path (untiered) | Hinge / Bug check | Width (`tier:` steps) |
|---|---|---|---|---|---|
| 1 | `why-businesses-exist` — Goods, services and why businesses exist (AC9HE7K02 n1) | Hinge | Sort goods, services and both; identify at least two reasons businesses exist beyond profit (providing goods and services, creating employment, meeting community needs) | Bug (`profit-only-purpose`): Nib says every business exists only to make a profit for its owner, so a community food pantry isn't a business. `smaller:` lead-in on whether Riverbend Pantry still provides goods and jobs | Typical: how goods and services reach people (Saturday market, shopping centre, online store, independent shop); Wider: how a remote community store's purpose and supply constraints differ from a city supermarket |
| 2 | `business-structures` — Ways a business can be set up (AC9HE7K02 n2) | Width | Match and distinguish sole proprietorship, partnership, cooperative, corporation, franchise and not-for-profit by ownership, decisions and surplus; match local businesses to each | Bug (`size-is-structure`): Nib guesses business structure by counting workers in the building instead of asking who owns it. `smaller:` lead-in on Rosa's solo-owned car yard with six employees | Typical: franchise advantages and limits for the franchisee; Wider: paper `reasoning` comparison of a member-owned cooperative and a shareholder-owned corporation |
| 3 | `how-businesses-provide` — Matching the structure to the job (AC9HE7K02 n3) | Integration | Order the chain (`parsons`: purpose → structure → resources → goods/services → channel); explain how two different business types provide goods or services (`reasoning` check + book Make step) | Bug (`one-best-structure`): Nib advises a solo piano teacher and a community food pantry to set up as corporations because corporations are largest. `smaller:` lead-in on the solo piano teacher | Typical: how selling online changes how a small sole proprietor reaches customers; Wider: a not-for-profit social enterprise cafe that sells commercially to fund youth training |

Notes:
- **Shape check:** all three waypoints teach settled economic distinctions and causal links (goods vs services, non-profit purposes, ownership structures, and how structure shapes provision), so the `scarcity-7` worked-example shape fits all three.
- **Scenarios:** all businesses and people (Corner Bakery, Pedal Fix Workshop, Riverbend Pantry, Rosa's Car Yard, Priya & Tom Vets, Valley Growers' Shed, Made-Up Grocers Corp, Burger Barn, GreenBean Cafe) are made up, so nothing dates and no real brand is promoted.
- **First Nations:** teacher notes in all three lessons quote ACARA's elaborations for AC9HE7K02 (investigating a business owned by First Nations Australians, exploring the types of goods and services offered and why this business was started) and ask the teacher to build on them with local, community-approved material or a business's own published words; no student-facing explanation written by us.
- **Subject and teacher pages:** `content/economics/index.md` now carries `preview: true`, links `economics/businesses-7` after `scarcity-7`, and shows the remaining Year 7 courses (`Entrepreneurs and business success`, `Work, income and identity`, `Consumer rights and responsibilities`, `Responding to an economic issue`) as "Coming later". `content/economics-teachers.md` updated to match. Three single-line misconceptions added (`profit-only-purpose`, `size-is-structure`, `one-best-structure`).
- **Step 4 self-check pass (30 Oct 2026):** added `learning:` (one verb-first sentence) to all `teacher.yml` files across `scarcity-7` and `businesses-7` while keeping `summary:` as description only; added explicit "made-up" labels in student body text for all fictional businesses in `businesses-7` (`Corner Bakery`, `Pedal Fix Workshop`, `Riverbend Pantry`, `Rosa's Car Yard`, `Priya & Tom Vets`, `Valley Growers' Shed`, `Made-Up Grocers Corp`, `Burger Barn`, `GreenBean Cafe`); replaced the tax-collection distractor in `why-businesses-exist/lesson.md` with a plausible student error confusing a business with an all-volunteer charity giving away free parcels.

## Plan (awaiting Matthew's "go" before building): course `economics/entrepreneurs-7`, *Entrepreneurs and business success* (AC9HE7K03)

Per `roadmap/checklist.md` › "Plan first, then build", here is the per-waypoint plan for `economics/entrepreneurs-7` (*Entrepreneurs and business success*, tagline *Spotting opportunities, making decisions and building a business*):

- **Standard & descriptor wording:** `AC9HE7K03` (*Entrepreneurial characteristics*) — "characteristics of entrepreneurs and how these influence the success of a business" (`prior: [AC9HE7K02]`).
- **First Nations element:** `AC9HE7K03`'s second elaboration names First Nations Australian entrepreneurs and community-run enterprises (such as the Gumatj Aboriginal Corporation, Dean Foley, and Tahnee Edwards). Following `roadmap/shared.md` › First Nations content: we write **no** student-facing explanation of First Nations history, culture or enterprises ourselves; teacher notes in all three lessons quote ACARA's elaboration verbatim and ask teachers to use local, community-approved material or the entrepreneurs'/corporations' own published words.

1. **Waypoint 1 (`AC9HE7K03 n1`): *Entrepreneurial knowledge and skills* (`knowledge-and-skills`)**
   - **Node checkpoint:** "Students can identify the knowledge and skills entrepreneurs use, including opportunity recognition, decision-making and establishing a shared vision."
   - **One insight:** An **entrepreneur** does more than just work in a job or own a building — they **recognise an unmet opportunity**, **establish a shared vision** so staff and partners pull in the same direction, and **make operational decisions** under uncertainty to turn that idea into a working business.
   - **Planted misconception (`manager-or-inventor-equals-entrepreneur`):** confusing routine day-to-day shift management (or inventing a gadget in a shed without ever offering a good or service to customers) with entrepreneurial knowledge and skills (opportunity recognition, shared vision, and operational decision-making). Includes `smaller:` lead-in on whether following an existing checklist with no changes is the same as spotting a new market opportunity.
   - **Made-up case and where it is labelled:** Three **made-up local entrepreneurs** (`"In our made-up town of Riverbend: Maya starts 'SunCrate'..."`, explicitly labelled made up in the intro and question prompts) showing opportunity recognition (spotting that farm boxes spoil in summer heat), shared vision (getting local growers and drivers behind a 24-hour cool-chain promise), and operational decision-making (choosing routes, pricing and reusable crates).
   - **Distractor ideas (real student errors):**
     - Confusing **opportunity recognition** (spotting an unmet customer need or gap in the market) with simply copying the nearest shop's exact product at a higher cost.
     - Thinking **establishing a shared vision** just means designing a colourful logo, rather than aligning workers, suppliers and partners around what the business is trying to achieve.
     - Assuming only giant tech-company founders are entrepreneurs, rather than local sole proprietors, cooperative founders or social-enterprise builders who spot opportunities and organise resources.
   - **Shape and why:** Default `scarcity-7` / `businesses-7` worked-example shape (`predict`, `match` skill → concrete business action, `investigate` with `bug` + `smaller:`, `sort`, `practise`, `make` in student book with `reflect`, plus `typical` comparing a local founder with a corporate entrepreneur and `wider` on digital opportunity recognition). Fits because `n1` builds a clear three-part skill repertoire with a planted misconception.

2. **Waypoint 2 (`AC9HE7K03 n2`, hinge): *Values and entrepreneurial decision-making* (`values-and-decisions`)**
   - **Node checkpoint:** "Students can analyse how values — including identifying opportunities, stakeholder negotiation, and compliance — influence entrepreneurial decision-making."
   - **One insight:** Skills tell an entrepreneur *how* to run a business, but **values** (what the entrepreneur and community care about — fairness, sustainability, safety, honesty) shape *which* opportunities they pursue, *how* they negotiate with **stakeholders** (workers, suppliers, customers, locals), and *how* they comply with laws and regulations.
   - **Planted misconception (`values-never-affect-business-decisions`):** assuming business decisions are 100% automatic maths about the lowest cost today, so values, stakeholder trust and legal compliance play no role in whether a business succeeds or fails over time. Includes `smaller:` lead-in on what happens to a food business next month if it cuts corners on food-safety laws to save $200 today.
   - **Made-up case and where it is labelled:** A **made-up repair-and-refurbish enterprise** (`"In a made-up case, Leo runs 'ReSpark Tech' in Riverbend..."`, explicitly labelled made up in the body text, worked example and Nib prompt), tracing three decisions: (1) opportunity choice (refurbishing laptops for students rather than selling disposable gadgets), (2) stakeholder negotiation (agreeing fair payment terms with local parts suppliers), and (3) compliance (paying for certified electrical safety testing and privacy data-wiping).
   - **Distractor ideas (real student errors):**
     - Confusing a **stakeholder** (anyone affected by the business's decisions: workers, customers, suppliers, local residents) with a **shareholder** (someone who owns shares in a corporation).
     - Thinking **compliance with laws and regulations** is optional advice rather than a binding legal baseline that also protects customer trust.
     - Assuming that choosing an ethical or sustainable option always causes a business to fail, ignoring how reputation and repeat customers work.
   - **Shape and why:** Default worked-example shape (`predict`, `sort` opportunity choice / stakeholder negotiation / legal compliance, `investigate` with `bug` + `smaller:`, `modify`, `practise`, `make` in student book). Fits because `n2` is the course hinge connecting values to concrete business decisions and outcomes.

3. **Waypoint 3 (`AC9HE7K03 n3`, integration): *Characteristics and business success* (`characteristics-and-success`)**
   - **Node checkpoint:** "Students can combine entrepreneurial knowledge, skills and attitudes with observations of businesses to explain the factors that contribute to success, including opportunity recognition, initiative and innovation."
   - **One insight:** Business success rarely comes from luck alone — it comes from combining **opportunity recognition** (seeing the gap), **initiative** (taking the first step to act before being told), **innovation** (improving a product, service or process), and **values-driven decisions** that keep stakeholders on side.
   - **Planted misconception (`one-lucky-idea-guarantees-success`):** thinking a single clever idea or invention guarantees business success automatically, without initiative, operational follow-through, innovation when conditions change, or stakeholder trust. Includes `smaller:` lead-in comparing two made-up bakeries that had the same sourdough idea, where only one adapted its hours and delivery when commuter habits changed.
   - **Made-up case and where it is labelled:** Two **made-up businesses** compared side by side (`"Compare two made-up Riverbend businesses: 'Pedal Cargo' and 'QuickDrop Couriers'..."`, explicitly labelled made up), showing how opportunity recognition + initiative + process innovation + reliable compliance led to success in one and stagnation in the other.
   - **Distractor ideas (real student errors):**
     - Confusing **innovation** (creating a new or improved way of doing something that adds value) with **initiative** (taking independent action to start or solve a problem).
     - Explaining business success by saying "it succeeded because it made a lot of money" (circular reasoning: describing the result instead of the entrepreneurial characteristics that caused it).
     - Measuring success only by short-term cash profit even when the business's stated goal is a community service or long-term durability.
   - **Shape and why:** Default worked-example shape with a `parsons` chain (`spot unmet need → take initiative to launch → innovate operations → negotiate fairly & comply with rules → sustainable business success`), `bug` + `smaller:`, `reasoning` check on paper, and `make` step in the student's own book. Fits because `n3` integrates `n1` and `n2` into a complete causal explanation.

## Decided: interactive boards (30 Oct 2026, Matthew)

- **Concept and case lessons (`scarcity-7`, `businesses-7`, `entrepreneurs-7`, `work-7`, and `consumers-7` lessons 1–3):** keep the no-board layout (`sort`, `match`, `parsons`, `question`, `reasoning` and `bug` checks). Scenarios and case cards need reading room.
- **Budgeting (`consumers-7` lesson 4, AC9HE7K05 n4):** use `widget: sheet` so students edit a live budget table with `SUM` formulas and see surplus/deficit update.
- **Economic data skills (AC9HE7S03):** use `widget: graph` and `widget: sheet` for reading and plotting tables, bar charts and line graphs.

## Needs deciding

4. Subject curriculum map (`map: true`) once more of Year 7 is built.

## Next

1. A fresh-eyes review and a trial with a class (nothing here has been tried yet).
2. `economics/entrepreneurs-7` (AC9HE7K03: Entrepreneurial characteristics, 3 nodes, n2 hinge), `economics/work-7` (AC9HE7K04: Work, income and identity, 3 nodes, n1 hinge), and `economics/consumers-7` (AC9HE7K05: Consumer and financial rights and responsibilities, 4 nodes, n1 hinge).
3. Economics' own skills: AC9HE7S03 (interpret information and data, 3 nodes) and AC9HE7S04 (develop a response to an economic issue, 2 nodes), plus the Year 6 catch-up *Spending choices* (AC9HS6K08) in `hass/before-year-7`.
4. Keep `content/economics-teachers.md` in step with what is built.

## Starter prompt for the Economics chat

> Read AGENTS.md, CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, and `roadmap/economics.md`. Plan and build the next Economics course (K03, in the node file's order) in the same shape as `economics/scarcity-7` and `economics/businesses-7`, validate, test in a headless browser, commit and push.
