---
title: Where does AI belong?
summary: "AI changes how a school's existing rules apply: integrity, behaviour, privacy, inclusion, device use, staff conduct. Sort situations into the policy that should own each one, then write a short AI statement: the principles, a map of where each rule lives, and who holds the map."
language: science
shape: 5e
unit: charter
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Your charter says **what matters**. Rules say **what happens**. But a school already has rules about most of what AI touches: cheating, bullying, privacy, devices, support for students with disability, how staff behave. AI doesn't replace those rules; **it changes how they apply.**

So a committee doesn't need one giant AI rulebook. It needs:

1. a **short AI statement**: the principles, a **map** of where each AI rule lives, who holds the map, and when it's reviewed;
2. a few **AI lines inside each existing policy**, looked after by whoever owns that policy.

## Engage: a fake image

```step
stage: predict
check:
  type: predict
  q: "A Westbrook student uses an AI app to make a fake, embarrassing image of a classmate and shares it. Which rules should deal with it?"
  options: ["A new AI policy", "The school's wellbeing and behaviour rules, which already cover harming others", "Nobody's: it happened on a phone"]
  actual: "The behaviour and wellbeing rules. Harming someone is already covered; AI is the tool, not the offence. If a separate AI policy said something different, staff wouldn't know which one to follow."
```

## Explore: map Westbrook's rules

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which of Westbrook's existing policies should own each AI situation?"
      options: ["Academic integrity and assessment", "Wellbeing and behaviour", "Privacy and data", "Inclusion and learning support", "Devices and ICT use", "Staff code of conduct"]
      items:
        - ["A Year 10 student hands in an AI-written essay for an assessed task", "Academic integrity and assessment", "It's about honest work in assessment, whatever tool was used."]
        - ["A student makes a fake image of a classmate", "Wellbeing and behaviour", "Harming someone, with AI as the tool."]
        - ["A teacher pastes student reports into an AI tool the school hasn't checked", "Privacy and data", "Student information is going somewhere new."]
        - ["Families are asked before under-13s use a school AI tool", "Privacy and data", "Consent and what families are told."]
        - ["A student with an agreed adjustment uses dictation and read-aloud", "Inclusion and learning support", "An AI rule must never quietly remove an agreed adjustment."]
        - ["An AI assistant on a school laptop can submit work and send emails by itself", "Devices and ICT use", "What school accounts and devices may do: a person sends or submits."]
        - ["A teacher uses AI to draft report comments", "Staff code of conduct", "Staff are responsible for what goes out in their name."]
  - check:
      type: reasoning
      q: "Write Westbrook's short AI statement: three or four lines of principles (from your charter), then where three AI rules live, who holds the map, and when it's reviewed."
      placeholder: "Principles: … Where the rules live: … Who holds the map: … Reviewed: …"
      models:
        - title: "A strong answer"
          text: "Principles: students do the thinking a task is for; a person decides anything that matters about a student; we know where student work goes; everyone gets the same access. Where the rules live: assessed work, in Academic integrity; harm to others, in Wellbeing and behaviour; student data in AI tools, in Privacy. Who holds the map: the AI committee, with the deputy principal. Reviewed: each Term 4, and early if AI can suddenly do something new."
        - title: "A different view that also works"
          text: "Principles: learning first; age and stage; people decide; our data stays ours. The map: a table of six policies, each with its AI line and its owner. Held by: the head of digital learning. Reviewed: every term this year, then yearly."
      criteria: ["The statement has principles, not detailed rules.", "It says where at least three rules live.", "It names who holds the map and when it's reviewed."]
      explain: "A short statement that points to the right policies avoids two rulebooks that disagree."
```

### Map Westbrook's rules

Sort each situation into the policy that should own it.

### Westbrook's AI statement

Principles, the map, who holds it, when it's reviewed.

## Explain: a statement and a map

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook's AI statement grows to twelve pages, with its own rules on cheating, bullying and privacy. What's the problem?"
      options: ["It repeats rules other policies own, so the two will soon disagree and nobody will know which wins", "Nothing: longer is safer", "It's too short"]
      answer: 0
      feedback: [null, "Two documents saying different things about the same case is less safe, not more.", "It's the opposite problem."]
  - check:
      type: question
      q: "What should 'check' mean for these rules?"
      options: ["Check the rules are working for the school, for example learning holds up on tasks done without AI", "Check up on each student to catch AI use", "Check that everyone has read them"]
      answer: 0
      feedback: [null, "A school mostly can't catch individual AI use: home use is invisible and AI detectors are often wrong. Check whether the rules work.", "Reading them is a start, but doesn't show they're working."]
  - check: { type: reflect, text: "I can explain why AI rules belong in existing policies, held together by a short statement and a map." }
```

- **AI changes how existing rules apply.** Cheating, harming others, privacy, support for students with disability, device use and staff conduct already have policies and owners.
- **The AI statement stays thin:** the principles, the **map** of where each AI rule lives, **who holds the map**, and **when it's reviewed**. Here's the test: if an existing policy owns the situation, the rule goes there, and the statement only points to it.
- **Someone must hold the map.** Without a map, AI lines scattered across six policies drift apart, and nobody notices when AI changes and they all need updating.
- **Rules from outside the school sit above it.** An exam board's rules on AI can't be loosened by the school.
- **Build on what you value, not on what AI can't do yet.** AI's limits keep changing.
- **Most AI use can't be policed.** Rules work mainly through task design, honesty about AI use, and understanding why the thinking matters. "Check" means checking the rules work, not checking up on each student.

### Twelve pages?

What goes wrong?

### Check what?

What should the rules check?

### Explain it

Why a statement and a map, not one big policy?

## Elaborate: rules from outside

```step
stage: modify
tier: typical
check:
  type: question
  q: "Westbrook's Year 10s complete a task marked by an outside exam body, which has its own rules on AI. Westbrook's statement allows more AI than those rules. Which applies?"
  options: ["The exam body's rules: the school can't loosen them, so its map should point to them", "Westbrook's, because it's their school", "Whichever the student prefers"]
  answer: 0
  feedback: [null, "Not for work the outside body marks. Its rules sit above the school's.", "Students follow the stricter rules that apply to the task."]
```

Exam boards and programmes (for example, senior secondary boards and international programmes) publish their own rules on AI in assessed work. A school's map shows them as **rules it can't change**, and its own integrity policy lines up with them.

## Elaborate: our school's map

```step
stage: make
tier: wider
check: { type: reflect, text: "I mapped which of our school's policies mention AI, who owns each, and where an AI rule is missing or repeated." }
```

Your teacher may give you a list of the school's policies (dated). For each one:

- Does it mention AI? Should it?
- Who owns it, and when is it reviewed?
- Does any rule appear in two places, saying different things?
- Which outside rules (an exam board, a programme) sit above it?

## Evaluate: the statement and the map

```step
stage: info
check:
  type: question
  q: "Westbrook's statement says: 'Harm to others using AI: see Wellbeing and behaviour.' Why point rather than write the rule out?"
  options: ["The behaviour policy's owner keeps one version up to date, so the two can't disagree", "Pointing is lazier", "So nobody has to read it"]
  answer: 0
  feedback: [null, "It's about keeping one version, not saving effort.", "People still read the rule: in the place it belongs."]
```

On paper, write your **AI statement** and start the **map**. You'll refine both in lesson 11.

| AI statement | |
|---|---|
| Principles (from the charter): | |
| Held by: | Reviewed: |

| Situation | Policy that owns it | Owner | Has an AI line? |
|---|---|---|---|
| Assessed work | | | yes / no / needed |
| Harm to others | | | |
| Student data in AI tools | | | |
| Agreed adjustments | | | |
| School accounts and devices | | | |
| Staff use | | | |
| Outside rules (exam bodies) | | | can't change |

**Next unit:** someone proposes a tool. Should the school use it?
