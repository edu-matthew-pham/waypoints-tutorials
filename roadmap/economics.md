# Roadmap: Economics and Business

`content/economics/` (subject and course created 30 Oct 2026; lesson 1 built). Started 30 Oct 2026 with Year 7, standard AC9HE7K01 (Opportunity cost and scarcity). Node content comes from waypoints-kit `data/economics/y7_economics_AC9HE7K01.json` (copy in `data/curriculum/economics.json`).

Rules this subject follows: `roadmap/shared.md` › Decided (30 Oct 2026): tutorials are pace-agnostic. In short: same waypoints in the same order, untiered path = minimum width, `tier:` steps are optional width on the same waypoint, a check before leaving each hinge, pace is the teacher's call.

## Proposed (30 Oct 2026; nothing built): course `economics/scarcity-7`, *Scarcity and opportunity cost*

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

## Built (30 Oct 2026; not yet tried with a class)

- Subject `content/economics/index.md` (Economics and Business, order 8, pathway Scarcity and choice) and course `economics/scarcity-7` (Usually Year 7).
- Lesson 1 `needs-and-wants` (AC9HE7K01 n1, hinge): predict, sort, worked example with Nib's planted mistake (`enough-stuff-ends-wanting`, with a `smaller:` lead-in), vary, practise, a Make step written in the student's own book (reflect tick), then one typical and two wider steps. Teacher notes, class plan. Misconceptions `enough-stuff-ends-wanting` and `needs-wants-blur` added.
- Lessons 2 to 4 (30 Oct): `scarcity` (n2, hinge: shortage vs scarcity bug check with `smaller:`, land/labour/capital sort, what/how/for whom sort), `opportunity-cost` (n3: match, next-best-option bug check with `smaller:`, time/money/land), `putting-together` (n4: parsons chain, council $2m questions, cost/benefit sorts, reasoning on paper). Each has typical and wider steps, teacher notes and a class plan; units `scarcity` and `choice` added to the course page; misconceptions `shortage-vs-scarcity` and `opportunity-cost-is-price` added. Validate, build and a headless load of all three pass. Still to do: fresh-eyes review and a trial with a class.
- `economics` added to the node check's `CHECKED` (`tools/progressions.mjs`, a one-word shared change).
- One course per standard and the First Nations teacher note: confirmed by Matthew 30 Oct (`roadmap/shared.md` › Decided: humanities).
- Lesson shape is a default, not a rule: the shape above suits skill and concept waypoints with a planted answer. Before building a waypoint, check it fits; if it is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better, and a line in this file saying why is enough.
- Needs a whole-site publish (new subject).

## Needs deciding

3. A board or not: the existing `sort`, `match`, `question` and `bug` checks cover all four lessons; a small "budget" or "choices" board could come later if lesson 3 needs one.
4. Subject page and order on the home page; a curriculum map (`map: true`) once more than one standard is built.

## Next

All four lessons of `economics/scarcity-7` (AC9HE7K01) are built, so the Next list now is:

1. A fresh-eyes review and a trial with a class (nothing here has been tried yet).
2. AC9HE7K02 to K05 (the rest of the Year 7 knowledge standards): one course per standard, one lesson per waypoint, in the node file's order, same shape as `scarcity-7`.
3. Economics' own skill, AC9HE7S04 (develop a response to an economic issue). S01, S02 and S05 go to the shared inquiry course (`roadmap/humanities-inquiry.md`).
4. Keep `content/economics-teachers.md` in step with what is built.

## Starter prompt for the Economics chat

> Read AGENTS.md, CLAUDE.md, ROADMAP.md, `roadmap/shared.md` › Decided (30 Oct 2026) entries, and `roadmap/economics.md`. Plan and build the next Economics course (K02, in the node file's order) in the same shape as `economics/scarcity-7`, validate, test in a headless browser, commit and push.
