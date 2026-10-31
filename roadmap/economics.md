# Roadmap: Economics and Business

`content/economics/` (subject and courses `economics/scarcity-7` and `economics/businesses-7` built 30 Oct 2026; Preview, not yet tried with a class). Started 30 Oct 2026 with Year 7, standards AC9HE7K01 (Opportunity cost and scarcity) and AC9HE7K02 (Types of businesses). Node content comes from waypoints-kit `data/economics/` (copy in `data/curriculum/economics.json`).

Rules this subject follows: `roadmap/rules.md` (the shared rules with their reasons, 1 Nov 2026) and `roadmap/shared.md` › Decided: humanities.

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
- Contestable ideas are taught as models or views, not as settled truth, even where ACARA words them as fact (AGENTS.md). Task: reword `economics/scarcity-7` (needs-and-wants, scarcity, putting-together, class plan, `chain.txt`, `enough-stuff-ends-wanting`) so "wants are unlimited" becomes "economists start from the idea that wants have no limit"; Mia's check asks what pattern the story shows, Nib's slip is about what the model says (a supply problem vs wanting), and a teacher note names the assumption and who disagrees. Do it before the next Economics course. **Done 1 Nov 2026** (review chat): student text in needs-and-wants, scarcity, putting-together, `chain.txt`, the misconception text and the index now say "economists start from the idea that wants have no limit" or "keep growing"; the teacher note names the assumption and who disagrees (sufficiency and degrowth views). Same day: needs-and-wants Nib line 3 made true (answer now line 4); scarcity bug answer moved to line 3 (the planted slip); every bug task says "Click the first line"; the needs-and-wants leads note no longer opens with our own First Nations generalisation.
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

## Plan (revised 1 Nov 2026 against the 1 Nov rules; built the same day, see Built below): course `economics/entrepreneurs-7`, *Entrepreneurs and business success* (AC9HE7K03)

Tagline: *Spotting opportunities, making decisions and building a business*. Three lessons in node order, one unit each is too thin, so two units: `skills` (n1) and `success` (n2, n3). No board, no clips (30 Oct decision for case lessons still holds). Shape: the `scarcity-7` / `businesses-7` worked-example shape, with the changes below.

- **Standard:** AC9HE7K03 (*Entrepreneurial characteristics*): "characteristics of entrepreneurs and how these influence the success of a business" (`prior: [AC9HE7K02]`). Student text uses ACARA's terms: entrepreneur, recognising opportunities, establishing a shared vision, making decisions, values, stakeholders, complying with the law and regulations, initiative, innovation.
- **Made-up place and names (Naming made-up cases, 1 Nov):** every case is in Riverbend, said once per lesson ("Riverbend is a made-up town"). Businesses are named for the owner or town plus what they do. No brand-style names. Replaces the earlier draft's SunCrate, ReSpark Tech, Pedal Cargo and QuickDrop Couriers.
- **Real entrepreneurs:** the node's criteria ask for "a concrete example from a real entrepreneur". Our checks use made-up Riverbend cases (planted answers, nothing dates). The real example is the student's: the Make step asks them to pick a local business or entrepreneur the class has looked at, in their own book, judged by a partner or the teacher. We write no facts about real people. The class set of entrepreneur profiles (the node's repertoire-building mode) is class work, in the teacher notes.
- **First Nations:** teacher notes in all three lessons quote ACARA's AC9HE7K03 elaboration word for word (it names the Gumatj Aboriginal Corporation, Dean Foley and Tahnee Edwards) and ask the teacher to use the entrepreneurs' or corporation's own published words and local, community-approved material. No student-facing text about them, and no generalisation of our own opening the note (the 1 Nov needs-and-wants fix).
- **Models, not settled truth (AGENTS.md):** "entrepreneurial characteristics explain success" is one way of explaining business success, and researchers disagree about how much personal traits matter compared with luck, timing, money to start with and who you know. Student text says "one way to explain..." where it meets this (lesson 3, and once in lesson 1). Teacher notes name what the model leaves out (luck, access to money, survivorship: we hear about the businesses that lasted) and offer a discussion prompt. Definitions of "entrepreneur" also vary (some count anyone who starts a business, some only innovators); the lessons use ACARA's list of skills and say so in the notes. Ethical choices are not claimed to pay off: they sometimes cost a business money, and the lesson says values shape decisions, not that good values guarantee success.
- **Distractors (Review fixes, 1 Nov):** each is a real student error, similar in length to the answer, with feedback that names the slip. Partner ticks say "gave feedback", not "agreed". No fixed-order chain presented as the only order (the earlier draft's lesson 3 parsons is replaced, below).
- **Misconceptions:** three single lines added to `misconceptions.json`: `idea-is-the-only-skill`, `stakeholder-is-shareholder`, `result-as-reason`. (The earlier draft's ids each mixed two ideas.)

1. **`knowledge-and-skills`: Entrepreneurial knowledge and skills (AC9HE7K03 n1, width)**
   - **Checkpoint:** students can identify the knowledge and skills entrepreneurs use, including recognising opportunities, establishing a shared vision and making decisions about how the business is run.
   - **One insight:** a good idea is only the start. Entrepreneurs also get the people involved pulling the same way (a shared vision) and keep making decisions about how the business runs.
   - **Case:** Maya's Farm Boxes in Riverbend. Maya notices that farm boxes delivered in summer arrive wilted (recognising an opportunity), gets three growers and two drivers to agree on "picked this morning, delivered by lunch" (shared vision), and decides routes, prices and reusable crates (decisions about how the business is run).
   - **Planted slip (`idea-is-the-only-skill`):** Nib says Maya's only entrepreneurial skill was the idea; choosing routes and talking the growers round are "just chores". Bug check on Nib's working, with a `smaller:` lead-in: "If Maya had the idea but no grower agreed to supply her, would the business run?"
   - **Distractors:** a shared vision is the logo and colours (not what the people involved agree to aim for); recognising an opportunity is copying the shop next door (not spotting a need no one is meeting); only founders of huge companies are entrepreneurs (local sole traders and cooperative founders count).
   - **Steps:** predict, match (skill to Maya's action), worked example with the bug and `smaller:`, vary (a sort of three other Riverbend actions into the three skills), practise, Make in the student's book (a real local business the class has looked at: name two skills with an example of each; reflect tick). Typical: compare a sole trader with someone starting something inside a large company (made up). Wider: how a made-up Riverbend seller spotted an online opportunity (the node's digital wider item).

2. **`values-and-decisions`: Values and entrepreneurial decision-making (AC9HE7K03 n2, hinge)**
   - **Checkpoint:** students can analyse how values influence entrepreneurial decisions about taking an opportunity, negotiating with stakeholders, and complying with the law and regulations. (The node file lists the three areas as if they were values; the lesson keeps ACARA's elaboration wording: values influence decisions *in* these three areas.)
   - **One insight:** skills are how an entrepreneur acts; values (what they care about, such as fairness, safety or the environment) shape which opportunities they take, how they deal with stakeholders, and how seriously they take the rules. A value can cost the business something, and the decision is still shaped by it.
   - **Case:** Leo's Laptop Repairs in Riverbend: (1) chooses to refurbish old laptops for students rather than sell cheap new gadgets (opportunity), (2) agrees payment terms with a local parts supplier that the supplier can live with (stakeholders), (3) gives refunds on faulty refurbished laptops as consumer law requires, and wipes old owners' data before resale (compliance). Fact to check at build: that Australian consumer guarantees cover second-hand goods sold by a business (ACCC page); if it cannot be checked, the step says "the rules" without naming the law.
   - **Hinge check before moving on (`stakeholder-is-shareholder`):** Nib says the supplier and the students who buy laptops are not stakeholders because they own no shares. Bug check with `smaller:` ("Is the parts supplier affected when Leo decides how fast to pay?"). The class plan spends its whole-class time here.
   - **Distractors:** following the law is optional advice (it is a requirement, and breaking it can close a business); values are only personal opinions with no effect on decisions; a decision that costs money today must be a bad decision.
   - **Shape and why:** worked-example shape for the planted parts (stakeholder vs shareholder, which area a decision belongs to). Weighing values is partly a matter of view, so the Make step is an unmarked `reasoning` check with `paper: true` and two model answers ("A strong answer", "A different view that also works") on one of Leo's decisions: what value shaped it and what it cost or gained. If a later review finds the lesson is mostly discussion, `shape: 5e` is the fallback; noted here so it is not a surprise.
   - Typical: a made-up Riverbend food business deciding whether to keep a supplier that pays its workers fairly but costs more (the node's typical item). Wider: a compliance case where a made-up business cut a corner, and what followed for it and its customers.

3. **`characteristics-and-success`: Characteristics and business success (AC9HE7K03 n3, integration)**
   - **Checkpoint:** students can combine entrepreneurial knowledge, skills and attitudes with observations of businesses to explain factors that contribute to success, such as seeing and taking an opportunity, initiative and innovation.
   - **One insight:** one way to explain why a business succeeds is to look at what the people running it did: saw an opportunity, took the first step (initiative), found a better way (innovation) and kept stakeholders on side. Luck, timing and money to start with matter too, so a good explanation names the actions and does not claim they guarantee success.
   - **Case:** two made-up Riverbend delivery businesses: Riverbend Cargo Bikes (changed its hours and routes when the new bike lanes opened) and Dan's Deliveries (kept the same van routes when customers' needs changed). Labelled as one comparison, not a rule that one approach always wins.
   - **Planted slip (`result-as-reason`):** Nib explains that Riverbend Cargo Bikes succeeded "because it made lots of money and grew". Bug check: that describes the result, not what caused it. `smaller:` lead-in: "Which of these says what the business *did*: 'It grew fast' or 'It changed its routes when the bike lanes opened'?"
   - **Replaces the earlier draft's parsons chain** (Review fixes, 1 Nov: a fixed-order chain is "one way to explain", not the order): a `match` of initiative, innovation and recognising an opportunity to evidence from the case, and a `sort` of statements into "explains why it succeeded" and "only describes the result".
   - **Distractors:** initiative and innovation are the same thing (starting something vs finding a better way); one clever idea guarantees success (the earlier draft's misconception, kept as a distractor, with feedback that does not claim luck plays no part); success means making the most money, even for a business whose aim is a community service.
   - Make: a `reasoning` check (`paper: true`, unmarked, two model answers): explain one factor in the success of a business the class has looked at, using at least two of the lesson's terms. Typical: a made-up Riverbend not-for-profit and how its success is measured. Wider: the node's First Nations item stays in teacher notes as above.

**Self-check at build (checklist step 4):** answer indexes, distractor feedback, `summary:` as a description, `learning:` in each `teacher.yml`, class plans, "Riverbend is a made-up town" once per lesson, no living people or brands in student text, `npm run validate`, build and a headless click-through. Then `content/economics/index.md` and `economics-teachers.md` move the course from "Coming later" to built (Preview). Lesson-only publish route, except the subject page (full publish).

**What changed from the 30 Oct draft:** brand-style names replaced with Riverbend owner-plus-trade names; "made up" said once per lesson, not in every prompt; success framed as one model with luck and money named; no claim that ethical choices pay off; the fixed-order parsons chain replaced with a match and a sort; one idea per misconception id (n3's planted slip is now the circular explanation); a legal claim marked to check against a source; the real-entrepreneur criterion met by the student's own Make step, not by facts we write.

## Built: `economics/entrepreneurs-7`, *Entrepreneurs and business success* (1 Nov 2026, Matthew said go; Preview, not yet tried with a class)

- Course `economics/entrepreneurs-7` (units `skills`, `success`), after `businesses-7`. Lessons: `knowledge-and-skills` (n1, Maya's Farm Boxes, bug answer line 5), `values-and-decisions` (n2 hinge, Leo's Laptop Repairs, stakeholder bug answer line 3 with `smaller:`), `characteristics-and-success` (n3, Riverbend Cargo Bikes and Dan's Deliveries, circular-reasoning bug answer line 3). Teacher notes and class plans for all three. Misconceptions `idea-is-the-only-skill`, `stakeholder-is-shareholder`, `result-as-reason`. Subject page lists the course as built; `economics-teachers.md` updated; the subject summary's "corner bakery" is now "a town bakery".
- Departures from the plan: lesson 1 lists `assumes: [AC9HE7K02]` (the node check doesn't read Economics' pathway `after:`, which is a shared tool, so the prior standard is named in the lesson, as Civics does); lesson 2's compliance examples are registering a business name (business.gov.au: an offence to trade under an unregistered name unless it is your own, checked 1 Nov) and keeping tax records, not consumer guarantees (the ACCC pages don't state that guarantees cover second-hand goods sold by a business, so that claim was dropped); the lesson 3 typical step is a match of four Riverbend businesses to signs of success (it reuses Valley Growers' Shed from `businesses-7` rather than a new co-op name).
- Editorial pass on all three lessons: option lengths evened in lesson 3, the online-seller wider distractor replaced with a real slip (pricing), and legal wording narrowed to what was checked.
- Tested: validate, `check-nodes`, build, `check-decks` (course), and a headless run at 1100 px and 375 px: pages load with no errors, 13 checks per lesson, each Nib bug check stays unticked on line 1 and ticks on its answer line, no horizontal scroll, the course and subject pages list the course. Not clicked through: every question, sort and match option by hand.
- Publish: whole-site (new course on the subject page, teacher page). Shares a run with the trade-off board's full publish.

## Plan (1 Nov 2026, awaiting Matthew's "go"): course `economics/work-7`, *Work, income and identity* (AC9HE7K04)

Tagline: *Why people work, and how they earn a living.* Three lessons in node order, in two units: `kinds` (n1) and `income` (n2, n3). After `scarcity-7` (the subject page already says so). No board, no clips (30 Oct decision for case lessons). Shape: the `scarcity-7` / `entrepreneurs-7` worked-example shape, with the changes noted per lesson.

- **Standard:** AC9HE7K04, "the reasons individuals work, the types of work they are involved in, and how they may derive an income" (prior AC9HS6K08, Year 6, so taught in class; no `assumes:` needed). Student text uses ACARA's terms: full-time, part-time, casual, at home, paid, unpaid, unrecognised, volunteer; wage, salary, business ownership, shareholder (dividends), rental income, social security; identity, self-esteem, material and non-material living standards.
- **Made-up place and names:** Riverbend residents, said once per lesson ("Riverbend is a made-up town"), reusing its businesses (Riverbend Pantry, Rosa's Car Yard, Riverbend Bakery, Leo's Laptop Repairs) so the town builds up across courses. Gig work is "a delivery app" with no brand.
- **Privacy and care (rules T4, firm):** students are never asked about their family's jobs, income or payments, in checks, Make steps or class plans. Make steps use made-up Riverbend people or work students can see in public (the school canteen, a volunteer fire brigade, a sports club). Teacher notes say why: some students' families are unemployed, on social security, caring full-time or in insecure work, and none of that is a judgement. Social security is described plainly as a government payment for people who need support (age, disability, caring, looking for work), never as a lesser kind of income.
- **Models, not settled truth (T8):** "work contributes to identity, self-esteem and happiness" is ACARA's framing and true for many people, not for everyone: some work is unsafe, dull or stressful, and people without paid work are not worth less. Lesson 3 says "for many people" where it meets this, and the teacher notes say what the idea leaves out. Whether unpaid domestic work should count in national measures is a real debate (wider, teacher-led), not a settled fact. Definitions stay plain: a wage is paid by the hour (or week), a salary is a set yearly amount paid in regular instalments; part-time means regular hours fewer than full-time; casual means no guaranteed hours. Any figure about casual loading or minimum pay is left out (it changes); if one is needed, it is checked and dated.
- **First Nations (T1, firm):** teacher notes in all three lessons quote ACARA's third elaboration word for word ("describing examples of how continuity of cultural practices and management of Country/Place contributes to and sustains First Nations communities; for example, regional tourism ventures, coaching and mentoring initiatives, and fostering entrepreneurial and start-up cultures in regional and remote communities") and ask for local, community-approved material and First Nations-led sources. Country/Place management as work is a Country item, so it stays a teacher note; no student text.
- **Misconceptions:** three single lines: `work-means-paid-job`, `income-only-from-a-job`, `work-only-for-money`.

1. **`types-of-work`: Types of work (AC9HE7K04 n1, hinge)**
   - **Checkpoint:** students can identify and describe different types of work (full-time, part-time, casual, at home, paid, unpaid, volunteer) and explain that not all work is formally recognised or paid.
   - **One insight:** work is effort that produces something useful for someone, whether or not it is paid. Paid work comes in different arrangements (full-time, part-time, casual, at home); unpaid work (volunteering, caring, housework) is still work, and some of it is unrecognised: not counted or paid, though communities rely on it.
   - **Case:** a Saturday in Riverbend: Rosa (full-time at her car yard), Sam (casual shifts at Riverbend Bakery when they call him), Mai (part-time, three set days at the pantry), Jo (works from home designing websites), Ana (cares full-time for her father, unpaid), the under-12 netball coach (volunteer).
   - **Hinge check (`work-means-paid-job`):** Nib says only Rosa, Sam, Mai and Jo are working, because nobody pays Ana or the coach. Bug check, with `smaller:` ("If Ana stopped caring for her father, would someone else have to do it, maybe for pay?"). Class plan spends its whole-class time here.
   - **Distractors:** casual means the same as part-time (part-time has regular set hours; casual has none guaranteed); working from home isn't real work; volunteers are people who couldn't find a paid job.
   - **Steps:** predict, sort (the six Riverbend people into paid arrangements and unpaid), worked example with the bug and `smaller:`, vary (match casual / part-time / full-time / at home to their descriptions), practise, Make in the student's book: four kinds of work they can see in the community (not their family's), one example each, and why one unpaid kind matters (reflect tick). Typical: unrecognised work, a match of examples to "paid", "unpaid but recognised" (volunteer fire brigade), "unrecognised" (housework). Wider: a `reasoning` check, unmarked, with two model answers: should unpaid housework and caring be counted when a country measures its economy? (both views modelled; the node's wider item).

2. **`earning-an-income`: How people earn an income (AC9HE7K04 n2)**
   - **Checkpoint:** students can identify and explain the different ways people derive an income: wages, salaries, business ownership, dividends, rental income and social security.
   - **One insight:** income is money that comes in regularly, and it comes from different economic roles: working for someone (wage or salary), owning a business (profit), owning shares (dividends), letting property (rent), or a government payment for people who need support (social security). Many people have more than one.
   - **Case:** Riverbend income map: Sam (hourly wage), the school principal (salary), Leo (profit from Leo's Laptop Repairs, which goes up and down), Mrs Ng (rents out a flat), Theo (dividends from shares), Ana (a carer payment from the government).
   - **Planted slip (`income-only-from-a-job`):** Nib says Mrs Ng and Theo have no income because they don't go to work. Bug check.
   - **Distractors (real errors):** a wage and a salary are the same thing; a business owner's income is all the money customers pay (it's what is left after costs); a shareholder earns dividends for working at the company; social security is a wage from the government.
   - **Steps:** predict, match (person to income source), worked example (bug, a revenue-vs-profit question on Leo), vary (sort descriptions into wage / salary / profit / dividend / rent / social security), practise, Make: a `reasoning` check (`paper: true`, model answer, marked only by self-check) explaining the difference between two income sources using a made-up Riverbend person. Typical: one person, several sources (Leo earns profit and a part-time wage teaching a TAFE class). Wider: gig work through a delivery app, paid per delivery: wage, salary, or neither, and what that means for security (the node's wider item; the answer is "paid per job, so neither", with the security point in the feedback).

3. **`why-people-work`: Why people work (AC9HE7K04 n3)**
   - **Checkpoint:** students can explain the reasons individuals work beyond earning income, including identity, self-esteem, community contribution, and material and non-material living standards.
   - **One insight:** income is one reason people work. For many people, work also gives a sense of who they are (identity), pride in doing something well (self-esteem), a role in the community, and things money can't buy (non-material living standards: friendships, purpose, health). Material living standards are the goods and services income can buy.
   - **Case:** three Riverbend people: Mai (part-time at the pantry, could earn more elsewhere but likes knowing the families), the netball coach (volunteer, unpaid), Rosa (runs her own yard, works long hours, proud it's hers).
   - **Planted slip (`work-only-for-money`):** Nib says people only work for money, so the coach is wasting her time. Bug check.
   - **Distractors:** material and non-material swapped (friendships as material); self-esteem means earning a high income; everyone who works enjoys it (the teacher note's "not for everyone").
   - **Shape and why:** worked-example shape for the planted parts (material vs non-material is a definition with one answer). Weighing reasons is partly a matter of view, so the Make step is an unmarked `reasoning` check (`paper: true`, two model answers) on one made-up person: two reasons beyond income, using the terms. If a review finds it mostly discussion, `shape: 5e` is the fallback.
   - Typical: Mai's choice, lower pay for work she values: a trade-off between material and non-material living standards (links back to opportunity cost). Wider: how the reasons people work might change over a working life (made-up Riverbend people at 18, 40 and 70), not asking students about their own family.

**Self-check at build:** as for entrepreneurs-7 (checklist step 4), plus: no step asks about a student's family, and social security is described without judgement.

**Publish:** a whole-site publish (the subject page moves the course from Coming later to built).

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

## Review fixes (1 Nov 2026)

- Business structures: ACARA's six kept as "ways businesses are organised"; the lesson now says the main Australian legal structures are sole trader, partnership, company and trust (franchise an arrangement, not-for-profit a purpose, cooperative member-owned). "Sole trader" and "company" named beside ACARA's terms. Rosa's `smaller:` answer now says she runs it as a sole trader, not a company (one owner alone doesn't prove it). Franchisor/franchisee definition reworded.
- Brand-like names replaced: Corner Bakery → Made-Up Bakery, Burger Barn → Made-Up Burgers, GreenBean Cafe → Made-Up Cafe (labelled made up).
- Distractors rewritten as real student errors of similar length, feedback naming the slip (business-structures predict; how-businesses-provide predict, cooperative, online and social-enterprise checks; why-businesses-exist reason, Dev, Sam and remote-store checks).
- Remote store Wider step labelled made up, purpose hedged with "might".
- How businesses provide: the five-link chain is "one way to explain a business"; the Try parsons (fixed order) is now a match on Riverbend Pantry; `chain.txt` removed.
- Needs and wants Typical: arithmetic step replaced by a needs/wants sort for made-up Wren Creek. Putting it together: second model answer keeps the clinic choice.
- Partner ticks now "gave feedback", not "agreed".

## Naming made-up cases (1 Nov 2026, Matthew agreed)
- The place carries the "made up" label, not each name: a lesson says once that its town or businesses are made up. Use one standing made-up town (Riverbend; Wattle Creek and Parkside are already in Civics and inquiry), with businesses named for the owner or the town plus what they do (Rosa's Car Yard, Riverbend Bakery). National chains need a coined name, checked with a web search before use (Brightbasket Supermarkets, Stackstone Burgers). No catchy two-word brand-style names (Burger Barn) and no "Made-Up" in names. Avoid names drawn from First Nations culture (for example bunyip).
- Applied 1 Nov: "Made-Up Bakery / Cafe / Grocers Corp / Burgers" in `businesses-7` renamed to Riverbend Bakery, Riverbend Cafe, Brightbasket Supermarkets and Stackstone Burgers.

## Boards and clips (1 Nov 2026)
- Already decided 30 Oct (above): `sheet` for budgeting (`consumers-7` lesson 4) and `graph`/`sheet` for the data skills (AC9HE7S03). No clips planned; a clip would only follow a board where the idea is change over time (for example a budget as spending changes).
- Per-course choice, not a rule (`roadmap/shared.md` › Decided: humanities).

## Proposed (1 Nov 2026, Matthew agreed in principle): a light trade-off board for opportunity cost
- **What:** a made-up tuckshop with one oven and a fixed number of baking hours. Students move hours between two products (pies and muffins) and the board shows what each choice makes and what it gives up. Planted checks only, for example "Move to 4 hours of pies: what did that cost?" (answer: the muffins given up, not the money). No graph at Year 7; Years 9–10 could add the production possibilities curve to the same board later.
- **Why:** it makes scarcity and opportunity cost something students act on and see change, which a read-only case can't. Light on purpose: two sliders and a result, so it builds fast and fits a phone.
- **Where:** one step in `scarcity-7/opportunity-cost` (and optionally `putting-together`). This is a narrow exception to the 30 Oct "no board for concept and case lessons" decision, which still holds for the case lessons. A short captioned clip of the trade-off moving suits Explain it to me.
- **Next:** the Economics chat plans it (widget name, starter, checks) and Matthew says go. Could be the first humanities board, a pattern for others (`roadmap/shared.md` › Decided: humanities, per-course choice).

## Plan (1 Nov 2026; built the same day, see Built below): the trade-off board in `scarcity-7/opportunity-cost`

Builds the Proposed item above. Light on purpose: one new widget, one new step, two checks, an optional clip.

**Widget `tradeoff`** (new file `playground-board/widgets/tradeoff.js`, about 120 lines in the pattern of `money.js`; one `<script>` line in `playground-board/index.html`, which re-records no other clip; an AUTHORING entry under the board widgets; a line in `roadmap/shared.md` as a shared-file change).

- **What students see:** a row of hour blocks (the oven's morning), each labelled with what it bakes (word and a small icon, never colour alone). Two buttons, "Move an hour to pies" and "Move an hour to muffins" (also arrow keys; clicking a block swaps it), and a Start again button. Under it, two counts with simple bars (40 pies, 40 muffins) and one line comparing with the start: "Since the start: 10 more pies, 20 fewer muffins." One control, not two sliders: the hours are fixed, so moving one product's hours moves the other's. That is the idea the board exists to show, and two sliders that must add up would hide it.
- **Setup (one line each, like every board):**
  ```
  widget: tradeoff
  resource: oven hours      # what is scarce
  total: 6                  # how many there are
  first: pies, 10           # name, how many one hour makes
  second: muffins, 20
  start: 3                  # hours on the first product at the start
  compare: on               # the "since the start" line (off for a predict-first use)
  ```
- **Named values for `when:` checks:** `h` (hours on the first), `a` and `b` (how many of each), `da` and `db` (change since the start). Never ticks on the starting position, like every board check.
- **Not now:** a graph. The setup leaves room for `graph: on` (the production possibilities line) when Years 9–10 need it.
- **Phones:** the blocks wrap to two rows under about 360 px; the buttons stay full width.

**Starter** (`content/economics/scarcity-7/opportunity-cost/oven.yml`, regions `try` and `explain`): the numbers above. The tuckshop is at Riverbend, said once in the step ("Riverbend is a made-up town"). Start 3 hours each: 30 pies, 60 muffins. Each hour moved to pies: 10 more pies, 20 fewer muffins. Whole numbers only, so nothing needs a calculator.

**Where:** a new step straight after Predict, before the match: `## Try: one oven, two choices` (`stage: run`, `try: { playground: board, starter: "oven.yml#try", height: 300 }`). It comes first because acting on the oven gives the definition something to hang on before the ranking cases. The existing match step stays as it is. (Other option, if you prefer one Try step: fold the board into the match step as its first two tasks; three checks in one step is the class-plan limit, so it fits, but the board would sit beside an unrelated match.) Not added to `putting-together`: keep it to one lesson until a class has used it.

**Planted checks (two tasks, two checks):**
1. Board: "The tuckshop wants more pies for the footy day. Give pies 4 of the 6 oven hours." `when: "h = 4"`. Explain: "Four hours of pies bake 40 pies. That leaves two hours for muffins, so 40 muffins, not 60."
2. Question: "The tuckshop moved one oven hour from muffins to pies. What was the opportunity cost of the 10 extra pies?"
   - The 20 muffins the oven could have baked in that hour (answer)
   - The $15 the tuckshop paid for the extra pastry (feedback: that is a price it paid; the cost here is what the oven hour could have made instead) — `opportunity-cost-is-price`
   - Nothing, because the school already owns the oven (feedback: the oven is free to use, but each hour can bake only one thing, so using it for pies uses up muffin time)
   - The 40 muffins it still bakes in the other two hours (feedback: those are what it kept; the cost is what it gave up)
   - `smaller:` lead-in: "In one oven hour, can the tuckshop bake pies and muffins at the same time?"
   - The third distractor matches the "time is free" stuck note already in `teacher.yml`. No new misconception id: it fits `opportunity-cost-is-price`'s second half poorly, so I'd tag only the price distractor. Say if you want a `used-resource-is-free` line added.

**Honest about the model (AGENTS.md):** one phrase in the step, "In this made-up oven, every hour bakes the same amount." Teacher notes say what it leaves out: a real oven's hours are not all equal (warming up, mixed batches), the tuckshop might not sell 60 pies, and with only two products the next best option is obvious, so the ranking idea still comes from the cases.

**Teacher layer:** `running:` line for the new step ("Put the board up. Move one hour at a time and ask: what did we get, what did we give up?"); one more `stuck:` entry ("A student says the cost is the pastry" → "Could that oven hour have done anything else?"); `timing:` adds 4 minutes to Predict and Try; class plan `class/opportunity-cost.yml` gets the board slide (the `{{embed}}` board slide decks already use for maths and science; `npm run check-decks` after); `explain` gains one sentence about the oven.

**Clip (Explain it to me): in (Matthew, 1 Nov 2026).** Default for this lesson, not a rule for humanities. Reason: it serves students who open Explain it to me before touching the board, Economics pilot teachers (play it to the class or leave it to students), and the self-paced teacher course later, where no one drives the board. Scope: not for the ten-minute Humanities pilot talk, which demos the live board with a screenshot fallback (shared.md › Feasibility refinement, 30 Oct). It fits because the idea is a change you watch (shared.md › Decided: humanities: a clip follows a board when the idea is a sequence of change). About 15 seconds on `oven.yml#explain`, captions first, muted by default, `say:` lines for the default Heart voice:
1. "One oven, six hours. Each hour bakes 10 pies or 20 muffins." (board at 3 and 3)
2. Click "Move an hour to pies". "One more hour on pies: 10 more pies."
3. "That hour can't bake muffins as well: 20 fewer muffins. Those muffins are the opportunity cost."
Plus an `explainPicture` of the board at 4 and 2 for anyone without video. The clip records on the next full publish (this lesson only).

**Testing at build:** a small Node check of the widget's sums (every split from 0 to 6, `da`/`db` signs), validate, build, then Chromium: the step loads, the board check ticks at `h = 4` and not at the start, keyboard and buttons both work, phone width (375 px) has no horizontal scroll, `check-decks` for the class plan.

**Publish:** full publish (new widget and board page). The only clip recorded is this lesson's Explain clip.

**After it's built:** link it from `content/humanities-pilot.md` and slide 6 of the teachers' getting-started deck (shared.md › Next for the Humanities pilot page), in the same push if you agree; otherwise that waits for the pilot-page chat.

## Built (1 Nov 2026): the trade-off board (Preview, not yet tried with a class)

**Decisions (Matthew, 1 Nov 2026, "defaults are ok"; defaults for this lesson, not rules for humanities):** the board is its own step, before the match (so students act before they rank); a misconception line `used-resource-is-free` added (the "the oven's ours, so it's free" error, also in the stuck notes for time); the humanities pilot page and slide 6 of the getting-started deck link the board and ask the agreed board question. The Explain clip is in (decided earlier the same day, above).

- Widget `playground-board/widgets/tradeoff.js` (AUTHORING › `widget: tradeoff`), one `<script>` line in `playground-board/index.html`. Classes are `wpt-to…` (ad-blocker rule).
- Lesson: new step "Try: one oven, two choices" (board check `h = 4`, then the opportunity-cost question with `smaller:`), starter `oven.yml` (`try`, `explain`, `explain-pic`), `explainPicture`, `explainClip` on port 8700 (Economics clip ports start at 8700; Engineering has 8600–8639), `voice:` Heart. Teacher notes: time 44 min, the model's simplifications, a running line, a stuck entry, one line in `explain`. Class plan: a whole-class "One oven, two choices" activity at `run`.
- Departures from the plan: the change values are `u` and `v`, not `da` and `db` (board conditions read multi-letter names as products); the step is 400 px tall, not 300 (the bars were cut off on phones); `used-resource-is-free` is a documented misconception but not tagged on the question, because only planted error items (bug tasks) carry `misconception:` tags; arrow keys were not added (every control is a button, so Tab and Enter work).
- Tested: validate, build, and a headless Chromium run at 1100 px and 375 px (starts at 30 pies and 60 muffins, the check does not tick at the start and ticks at 4 hours, block clicks, move buttons and Enter all work, no horizontal scroll). `check-decks` on the class plan and the getting-started deck. Not tested: the clip with the real voice (records on the full publish).
- Publish: full publish (new widget, pilot page). The only clip recorded is this lesson's Explain clip. The getting-started deck change also needs the same publish.

## Boards in built lessons (1 Nov 2026)
- `scarcity-7/opportunity-cost`: the trade-off board (Proposed above) is the only one. The case lessons stay as they are.
