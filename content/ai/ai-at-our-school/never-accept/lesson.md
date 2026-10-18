---
title: What would we never accept?
summary: "Turn values into principles a decision can be checked against. Draft principles for the made-up school, test each one on quick cases, and (wider) compare them with Australia's national framework."
language: science
shape: 5e
unit: charter
order: 2
voice: { name: af_heart, speed: 1.1 }
---
Values like "be responsible" sound good, but they don't help anyone decide. **A principle says what matters clearly enough that you can check a decision against it.**

Westbrook's committee has its aims (lesson 1). Now it needs principles: what it wants from AI, and what it would never accept.

## Engage: does it help you decide?

```step
stage: predict
check:
  type: predict
  q: "Westbrook's committee writes one principle: 'Use AI responsibly.' A teacher asks: may an AI app give Year 7 essays their final grade? Does the principle help the teacher decide?"
  options: ["Yes, clearly", "No: it doesn't say what 'responsibly' means", "It depends who you ask"]
  actual: "Not really. Everyone agrees with 'responsibly', and everyone can read it their own way. A principle like 'A person decides anything that matters about a student' answers the question: the AI can suggest a grade, a teacher decides it."
```

## Explore: draft and test

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which of these could a committee check a decision against?"
      options: ["Checkable principle", "Too vague to check"]
      items:
        - ["'Be responsible with AI.'", "Too vague to check", "Everyone agrees, and everyone means something different."]
        - ["'A person decides anything that matters about a student.'", "Checkable principle", "You can ask of any tool: who makes the final call?"]
        - ["'AI should be good for learning.'", "Too vague to check", "Good how? Checked when? Compared with what?"]
        - ["'Every student gets the same access; nobody gains from a paid app at home.'", "Checkable principle", "You can check who can use it, and at what cost."]
        - ["'We know where student work goes, and whether it's used to train the AI.'", "Checkable principle", "You can read the privacy page and the settings."]
        - ["'Embrace the future.'", "Too vague to check", "It doesn't rule anything out."]
  - check:
      type: reasoning
      q: "Write one principle for Westbrook, built on one of its aims. Then test it on the two cases below: does it say yes, no, or 'yes, if…'?"
      placeholder: "Principle: … Case A: … Case B: …"
      models:
        - title: "A strong answer"
          text: "Principle (aim 1, independent thinkers): AI may give hints, but students do the thinking a task is for. Case A: no, a full worked answer does the thinking. Case B: yes, reading aloud doesn't do the thinking; it helps the student get to it."
        - title: "A different view that also works"
          text: "Principle (aim 2, everyone belongs): every student must be able to use a tool the same way, at school, for free. Case A: yes, if every student can use it, though aim 1 may still say no. Case B: yes, it helps some students take part fairly."
      criteria: ["My principle links to one of Westbrook's aims.", "I could check a decision against it.", "I tested it on both cases."]
      explain: "A principle earns its place when it actually decides cases. If it says yes to everything, rewrite it."
```

**Case A:** an AI app shows Year 7s the full worked answer to every maths homework question.
**Case B:** an AI feature reads a text aloud for students who find reading hard.

### Checkable or vague?

Ask: could I check a decision against it?

### Draft and test

Write one, then try it on Case A and Case B.

## Explain: what makes a principle

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which principle would help Westbrook decide about a tool nobody has invented yet?"
      options: ["'Students do the thinking a task is for; AI may help with the rest.'", "'Only use StudyPal for homework.'", "'Don't use AI on Tuesdays.'"]
      answer: 0
      feedback: [null, "That's a rule about one tool. A principle still works when the tool changes.", "That's a rule, and it doesn't say why."]
  - check: { type: reflect, text: "I can tell a principle that decides cases from a value that doesn't." }
```

A good principle:

1. comes from **what school is for** (lesson 1);
2. is clear enough to **decide a case**, so it can say no;
3. has a way to **check it's working** ("how we'd check it"): for the school as a whole, not a way to check up on each student;
4. still works for **tools nobody has invented yet**.

Principles committees often reach (to test, not to copy):

- **Learning first:** a tool must help the learning we care about, not just finish the task.
- **Age and stage:** what suits Year 10 may not suit Year 7.
- **A person decides:** AI can suggest; people decide anything that matters about a student, and anything that can't be undone.
- **Our data stays ours:** we know where student work goes, whether it's kept or trained on, and what starts switched on.
- **Fair for everyone:** every student gets the same access.
- **Honest about evidence:** claims are checked, and decisions are dated and reviewed.
- **Not using AI is a real option.**

### A tool not invented yet

Which principle still works?

### Explain it

Name the four parts of a good principle.

## Elaborate: a harder case

```step
stage: modify
tier: typical
check:
  type: question
  q: "An AI tool reads students' messages on the school's learning platform and flags anyone who might be upset, so staff can check in. Which principle does it test most?"
  options: ["A person decides: who reads the flag, and who decides what happens next?", "Learning first", "Not using AI is a real option"]
  answer: 0
  feedback: [null, "Learning matters, but this tool makes a judgement about a student. Who decides?", "It's always an option. But first ask who decides about a flagged student."]
```

Some tools test more than one principle. This one also tests **our data stays ours** (students' messages are read) and **honest about evidence** (how often are the flags wrong?).

When two principles pull different ways (helping students who are upset, and keeping messages private), the committee has to **weigh them and say why**.

## Elaborate: Australia's framework

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared our draft principles with the national framework and found one we'd missed or one we'd say differently." }
```

The **Australian Framework for Generative AI in Schools** (2023) sets out six principles:

1. Teaching and learning
2. Human and social wellbeing
3. Transparency
4. Fairness
5. Accountability
6. Privacy, security and safety

Match your draft principles to these six. Which of the framework's principles have you **not** covered? Is one of yours missing from the framework? Then look for how your own school's AI policy uses these (your teacher may have a copy).

## Evaluate: charter, part 2

```step
stage: info
check:
  type: question
  q: "Westbrook's committee has a principle that says yes to every tool anyone suggests. What should it do?"
  options: ["Rewrite it so it can say no to something", "Keep it: it's very friendly", "Delete all the other principles"]
  answer: 0
  feedback: [null, "A principle that never says no can't help anyone decide.", "The others may be doing the real work."]
```

On paper, add to your **charter**: three principles, each with how you'd check it.

| Principle | Comes from (aim) | How we'd check it |
|---|---|---|
| 1. | | |
| 2. | | |
| 3. | | |

**Next lesson:** write the whole charter.
