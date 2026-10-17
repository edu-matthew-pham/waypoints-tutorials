# Course plan: *AI in your life* and *Who Does AI Affect?* (18 Oct 2026)

**Approved by Matthew, 18 Oct 2026.**

From `roadmap/ai-society-design-handoff.md`. **Design only, for Matthew to approve. No lesson files until he does.** Claims are cited by number from `roadmap/ai-society-research-brief.md`; anything marked **to add** is in the brief's text but not its claims tables, so it stays out of student text until checked and added.

## Decisions asked for (recommendations)
1. **Titles:** *Who Does AI Affect?* is the society course; the personal course is *AI in your life*.
2. **Hidden labour: a core lesson** (Who Does AI Affect? › Who pays?). Students labelled fruit themselves in Foundations, so "who labels at scale?" is a short step from what they know, and no existing resource covers it. Justified by P10 and Ethical Understanding.
3. **Generated media: designed around provenance.** One lesson shows detection is near chance (6, 7, 8); the next teaches where-did-it-come-from. No real-vs-AI image quiz (we would be making or hosting fakes, and the tips go stale: 11).
4. **Energy and water:** teacher notes carry "Last checked 18 Oct 2026; re-check each January and after AEMO's ESOO (August)". Student text gives dated ranges, never one number.
5. **Consent screen: made up, modelled on real ones.** The Cyber safety club app gets an AI helper with its own consent screen. Teacher notes may link a real company's data-controls page with the date it was checked.
6. **"Be the algorithm": our own** cards and widget (idea credited to Actua and Day of AI in teacher notes).
7. **"Which kind is it?"** is a short first lesson in each course (about 15 minutes, its own cases), and every later lesson names its kind in one line. Both depend on the Foundations refinement that names the kinds; build that first.

## Shape (both courses)
- `content/ai/ai-in-your-life/` and `content/ai/who-does-ai-affect/`, `language: science`, `shape: 5e`, both `after: [ai/foundations]` on the AI pathway, each linking to the other and to Does AI Help Us Learn?. Fit line: "Years 7–10: core ideas at Year 7, wider steps for older students."
- One move per lesson. Minimum path: one concrete case in plain Year 7 words. `tier: typical` adds a second real case; `tier: wider` applies the same move to harder contexts (contested evidence, law, policy). Nothing new in wider steps.
- Checks: predict, question with per-option feedback, sort, reflect, unmarked reasoning. At most about three per step.
- Every lesson: `teacher.yml` (sources, "last checked" date, re-check date where needed) and `class/<lesson>.yml` (an `inquiry`, a `kind: discussion` activity). Every activity works on paper with talk; every lesson works solo and self-paced. No phones.
- Ideas from Day of AI and others are credited in teacher notes, with their lessons linked as optional extras. No copied text or materials.

---

## Course 1: *AI in your life* (10 lessons, 4 units)

| # | Lesson (move) | Core case (minimum) | Typical | Wider | Claims | Kind | Hook |
|---|---|---|---|---|---|---|---|
| **Unit 1: Built to keep you** |
| 1 | **Which kind of AI is it?** Sort everyday AI into rules, predictive, generative, agents | Cards: spam filter, video feed, chatbot, voice clone, face unlock, a school timetable rule | Same app, two kinds (a chatbot that also books things) | Why the kind matters: each goes wrong differently | brief Part 4 table | all | ACARA AI connection "Types of AI" |
| 2 | **How does a feed choose?** A feed predicts what will keep you watching, from signals | Be the algorithm: rank 8 post cards for a made-up user from watch time, likes, shares, follows | Watch time counts even when you didn't like it: the app's goal vs yours | Engagement ranking amplified hostile content users didn't prefer | 47; 48 (wider) | predictive | P10; AI4K12 5-A-i |
| 3 | **Designed to keep you** Some features serve the app's goal, not yours, and many aren't AI | Sort features (autoplay, infinite scroll, streaks, notifications, "you're all caught up") into helps you / keeps you; which are AI? | Is "addiction" the right word? Evidence is mixed and small | Rules: under-16 minimum age and its early results; EU preliminary finding on TikTok | 47; 49, 50, 51 (typical); 52, 53 (wider) | predictive + design | P10; Digital Literacy (wellbeing) |
| 4 | **Is a chatbot a friend?** ⚑ Companion chatbots are designed to feel human and keep you talking | Made-up chatbot lines: what a friend does that a chatbot can't (has its own life, can say no, knows you over time) | Age limits: most companion apps are 17+ with no age checks; 8% of Australian 10–17s had used one | Design for engagement vs wellbeing; what rules exist (**to add**: eSafety codes from 9 Mar 2026, California SB 243) | 75, 76; 77 (wider, US, broad definition) | generative | Digital Literacy (wellbeing); weak P10 |
| **Unit 2: What you give away** |
| 5 | **Where does your chat go?** What you type into an AI app can train it, be read, and be kept | The club app's new AI helper: follow one question from typing to storage to training | Default on or off? Changing a policy quietly isn't enough (OAIC) | Children's Online Privacy Code draft: only what's strictly necessary | 3; 5 (wider) | generative | P14 (link to Cyber › footprint), P10 |
| 6 | **Read the screen** Find the real choice on a consent screen before you agree | Made-up consent screen: find what "Agree" covers, the setting, and the one line that matters | Most people don't read (1 in 5 Australians; 74% skipped in a study) | Cookie banners rarely met the rules; check it against the APPs (link to Cyber › privacy) | 1, 2; 4 (wider) | generative | P14 (8 and 10), P10 |
| **Unit 3: Is it real?** |
| 7 | **Can you spot a fake?** People spot AI-made media at about chance, and feel surer than they are | Predict your own score, lock it in, then see what 56 studies found | Tips go stale: early fakes didn't blink, then they did | People overrate themselves; AI faces judged more human than real ones (White faces only, a bias link) | 6, 7; 11 (typical); 8, 9 (wider) | generative | P12 (weak), P10; AI4K12 5-B-ii |
| 8 | **Where did it come from?** Check the source, not the glitches | A made-up viral photo of a school event: trace it back (first poster, other sources, the original) | Content Credentials: a label of where it came from, which can be stripped | Provenance doesn't prove truth | 10 | generative | P12, P10 |
| **Unit 4: Fakes that hurt** |
| 9 | **When a fake is about someone you know** ⚑ A fake can hurt a real person even when people know it's fake; what a bystander does | Made-up, non-sexual case: an edited picture making a classmate look silly in a group chat. Don't share, support, tell, report | Who is responsible: maker, sharer, app? | The law and platforms' duties (**to add**: eSafety pages, blocked to the research tool; check by hand) | 12 (teacher notes only) | generative | Digital Literacy; P12 |
| 10 | **Is that really Mum?** A few seconds of voice can make a clone, so check by calling back | A made-up call from "Mum" asking for money: what to do (hang up, call back on a number you already have) | A deepfake video call cost one company about US$25m | Link to Cyber › Spot the phish: a scam is phishing by voice | 57; 58 (typical); **to add**: Scamwatch "hang up and call back" | generative | P10; 8P13 link |

⚑ **Wellbeing review:** lessons 4 and 9 are published but flagged in their teacher notes and here for review with the school's wellbeing lead. Teacher-led by default, never ask students about their own use, support pathways named in teacher notes, lawsuits and individual tragedies in teacher notes only (names and status). Lesson 3 also touches wellbeing (keep it non-personal: a made-up student, not "how much do you scroll?").

Optional last lesson (decide): **Advise a younger student**, a one-page guide using two habits from the course (Make).

---

## Course 2: *Who Does AI Affect?* (11 lessons, 4 units)

The lens, used in every lesson: **who gains, who loses, who decides, and what's the catch?** Benefits are woven in, not a unit.

| # | Lesson (move) | Core case (minimum) | Typical | Wider | Claims | Kind | Hook |
|---|---|---|---|---|---|---|---|
| **Unit 1: Who is affected?** |
| 1 | **Which kind of AI is it?** (short) | Cards from this course: exam grades, résumé screening, breast screening, an agent buying things, image generator | Rules vs AI: Robodebt was automation without AI | Why "AI" in a headline can mean four things | Part 4 table; 20 (typical) | all | AI connection "Types of AI" |
| 2 | **Who is affected, and how?** Fill the lens for one system: gains, losses, who decides, the catch | AI breast screening in Sweden: radiologists' reading cut by 44%; catch: one country, one system | Skin-cancer AI should complement specialists | AI weather forecasts beat physics models on many measures; but BoM doesn't use generative AI | 67; 70 (typical); 68, 69 (wider) | predictive | P10, 10P04 (stakeholders); AI4K12 5-A-i |
| **Unit 2: Who decides?** |
| 3 | **When a formula marks you** One rule applied to everyone can be unfair to some groups; people need a way to appeal | Ofqual 2020: a model adjusted A-level grades, trusted teachers more for small classes; about 39% lowered; reversed with an apology | Services Australia: a promotion round with AI-assisted tests and no panel; 11 overturned on review | Robodebt: a "crude and cruel" rule (automation, not AI) | 13, 14, 15; 16 (typical); 20 (wider) | rules / statistical | P10; AI4K12 5-A-i |
| 4 | **Learned from the past** A model trained on past decisions copies their bias | Amazon's experimental tool penalised "women's" (hook; anonymous sources, never relied on alone). Links to Foundations › Why does AI make mistakes? | Résumé screening by language models favoured White-associated names (a simulation) | The wrong target: a health algorithm used cost as a stand-in for illness | 17; 19 (typical); 18 (wider) | predictive | P10; AI4K12 5-A-i (9–12) |
| 5 | **When AI acts** When AI takes actions, someone is responsible, and a person confirms anything that can't be undone | Air Canada: the airline is responsible for its chatbot's wrong answer. Then a made-up agent booking a bus trip: sort its steps into "just do it" / "ask me first" | Australian guidance: keep human control, decide who is accountable | Headline vs original: "rogue AI" results came from lab simulations | 59; 61 (typical); 60 (wider); real incidents **to add** (Replit, Operator) | agents | P10; AI4K12 5-A-ii (accountability); UNESCO human agency (40) |
| **Unit 3: Who pays the cost?** |
| 6 | **Energy and water** One prompt uses little; billions add up, totals are rising, and the numbers are dated ranges | Estimate: a short prompt is roughly 0.1–0.5 Wh (2025–26 estimates); scale to a class, a school, a country. Images cost far more | Water: 0.26 mL to about 50 mL depending on what's counted | Small globally, large locally: data centres 1.5% of world electricity, forecast to double; NEM data centres to 34 TWh by 2035–36; Sydney water projection; growth vs air conditioning and EVs | 23, 24, 25, 27; 28, 29 (typical); 21, 22, 31, 32, 33 (wider); 26 (teacher notes: why old figures were higher) | generative (totals: all kinds) | P10; Sustainability priority; AI connection (38) |
| 7 | **Who labels the data?** People label data, often far away, for low pay; "low" needs a comparison | You labelled fruit in Foundations. At scale: Kenyan workers labelling for ChatGPT's safety filter, take-home about $1.32–$2 an hour; Sama's rebuttal; "less than what?" (content described in general terms only) | Most cloudwork platforms fall short of fair-work standards | Clients' instructions shape labels; unpaid time (2017 data) | 34; 35 (typical); 36, 37 (wider) | generative + predictive | P10; Ethical Understanding |
| 8 | **Whose work trained it?** AI learned from people's work; whether that's fair, and who gets paid, is being decided now | A made-up student artist finds an app copying her style. Settled for Year 7: Australia has no AI training exception; copyright needs a human author | Music creators fear for their income; a US$1.5bn book settlement | Fair use, the cases still open (**to add**: Getty, NYT) | 71, 72; 73, 74 (typical) | generative | P10; Digital Literacy (ownership) |
| **Unit 4: What happens next?** |
| 9 | **Will AI take jobs?** AI changes tasks before it removes jobs; exposed is not the same as lost | Split a job (a vet nurse, a teacher) into tasks: which could AI help with, do, or not touch? | Australia: far more augmentation than automation, no widespread displacement; call-centre novices gained most | Junior jobs: young US workers in exposed jobs below trend vs no economy-wide disruption (contested) | 62, 63; 64 (typical); 65, 66 (wider) | generative | P10; AI4K12 5-C |
| 10 | **Making rules** A rule balances the people it affects, and a rule existing isn't the same as it working | Our class: write one AI rule using the lens; compare with the national schools framework | Australia's government AI policy (mandatory from 15 Jun 2026) | EU AI Act: hiring AI is high-risk, duties delayed to Dec 2027 (confirm on EUR-Lex); NYC hiring audits rarely posted (**to add**) | 41; 42 (typical); 43 (wider) | all | 10P10; AI4K12 5-B-ii (regulation); UNESCO citizenship |
| 11 | **Your own case** (challenge) Apply the lens to a case you choose | Pick a case card (or one from the news, checked with the teacher) and fill the lens: kind, gains, losses, who decides, catch, one rule | Add evidence: one source, dated | Argue the other side; what evidence would change your mind? | (student's own) | any | P10 (Evaluate), 10P04 |

Lesson 11 is the course's `challenge` unit lesson. The committee extension ("Should we use this AI tool?") stays separate and later.

---

## Boards, widgets and checks

| Need | Lessons | Build |
|---|---|---|
| Kinds sort | Life 1, Affect 1 | Sort check only (cards on paper) |
| **`feed` widget** (new): `mode: rank` (be the algorithm: rank posts for a made-up user, see what rises; values for board checks), `mode: design` (switch sticky features on and off, see a made-up session) | Life 2, 3 | New. Paper version: printed post cards and signal cards |
| **Consent screen**: `cyber` widget `mode: consent` (the club app's AI helper: trace a chat, find the setting, read the screen) | Life 5, 6 | Extend the Cyber widget, so the made-up app links both courses |
| Agent confirm points: `ai-dialogue` `mode: agent` (scripted, not a real AI: a plan of steps, choose where it asks first) | Affect 5 | Extend existing widget; a sort check works without it |
| Energy and water estimates | Affect 6 | Number checks with ranges; maybe the `bars` widget for scale (check fit). No new widget |
| Provenance trail, voice-clone call, deepfake case, labelling, copyright, jobs | Life 7–10, Affect 7–9 | Question, sort and reasoning checks, plus static made-up pictures in media. No new widgets |
| Lens table | Affect 2–11 | Printable worksheet and a sort check; a reusable `impact` widget only if checks feel thin after the first unit |

New to build: one widget (`feed`) and two modes (`cyber` consent, `ai-dialogue` agent). Free outside tools: none required; any optional one gets its terms and data collection checked first.

## Cyber safety additions (a separate change)
1. **Kinds of weakness:** a supply-chain incident card: a malicious AI model file runs code when opened (54); "opening an untrusted model is like running an untrusted program". `cyber` `weakness` mode, typical or wider.
2. **Spot the phish:** a voice-clone call as phishing by voice (57, 58), short, linking to *AI in your life* › Is that really Mum? (`inbox` mode: one call item).
3. **Threat models:** a wider step on prompt injection: an AI assistant reading untrusted email can be told what to do, so limit what it can do (55).
4. Teacher note: AI lets attackers work at larger scale; no named Australian incident (56).

## Re-check dates (teacher notes and this file)
| Claim(s) | Re-check |
|---|---|
| 5 Children's Online Privacy Code | After 10 Dec 2026 (registration) |
| 21–33 energy and water | Each January; AEMO after each ESOO (August) |
| 52 under-16 minimum age | Next eSafety evaluation; statutory review about Dec 2027 |
| 53 EU TikTok; US states v Meta | Each term until decided |
| 43 EU AI Act / Digital Omnibus | Confirm on EUR-Lex before writing; again before 2 Dec 2027 |
| 41, 42 schools framework, government AI policy | Each January (annual reviews) |
| 71–73 copyright | Each term (Australian licensing model, open cases) |
| 75–77 companions | Each term (eSafety codes, app age rules) |
| 62–66 jobs | Each January |
| 59–61 agents | Each term (fast-moving) |
| Consent screen real-world link | Date it on use; re-check each term |

## Before writing lessons
- ~~Foundations names the kinds of AI side by side~~ Done 18 Oct 2026: `ai/foundations/kinds-of-ai` (Unit 2, lesson 5). Both openers link to it and use its four plain names.
- Add the **to add** claims to the brief's tables after checking them: Scamwatch call-back advice; eSafety deepfake law and reporting; eSafety companion codes; California SB 243; NYC Local Law 144 audit figures; agent incidents (Replit, Operator); Getty and NYT cases.
- Send lessons 4 and 9 (and 3) to the wellbeing lead as soon as they are drafted.
- Suggested build order: *Who Does AI Affect?* Units 1–2 (no new widgets), then the `feed` widget and *AI in your life* Unit 1, then the rest; Cyber additions with the `cyber` consent mode.
