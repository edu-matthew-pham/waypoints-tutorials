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

## Needs deciding

3. A board or not: the existing `sort`, `match`, `parsons`, `question`, `reasoning` and `bug` checks cover `scarcity-7` and `businesses-7`.
4. Subject curriculum map (`map: true`) once more of Year 7 is built.

## Next

1. A fresh-eyes review and a trial with a class (nothing here has been tried yet).
2. `economics/entrepreneurs-7` (AC9HE7K03: Entrepreneurial characteristics, 3 nodes, n2 hinge), `economics/work-7` (AC9HE7K04: Work, income and identity, 3 nodes, n1 hinge), and `economics/consumers-7` (AC9HE7K05: Consumer and financial rights and responsibilities, 4 nodes, n1 hinge).
3. Economics' own skills: AC9HE7S03 (interpret information and data, 3 nodes) and AC9HE7S04 (develop a response to an economic issue, 2 nodes), plus the Year 6 catch-up *Spending choices* (AC9HS6K08) in `hass/before-year-7`.
4. Keep `content/economics-teachers.md` in step with what is built.

## Starter prompt for the Economics chat

> Read AGENTS.md, CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, and `roadmap/economics.md`. Plan and build the next Economics course (K03, in the node file's order) in the same shape as `economics/scarcity-7` and `economics/businesses-7`, validate, test in a headless browser, commit and push.
