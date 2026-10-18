---
title: Which kind of AI is it?
summary: "A short recap of the four kinds of AI from AI Foundations, using this course's cases, so you know where to look when something goes wrong."
language: science
shape: 5e
unit: who-is-affected
order: 1
voice: { name: af_heart, speed: 1.1 }
---
This course looks at real cases where AI affected people. Before asking **who** it affected, ask **what kind** of system it was. Each kind goes wrong in its own way. (You met the four kinds in [AI Foundations › What kind of AI is it?](../../foundations/kinds-of-ai/).)

## Engage: "AI decided"

```step
stage: predict
check:
  type: predict
  q: "A headline says: 'AI decided students' exam grades.' What would you want to know first?"
  options: ["What kind of system it was, and who set it up", "Which company made the computer", "Nothing: AI decided, so that's the answer"]
  actual: "The kind of system tells you how it worked and where it could go wrong. In the real case, the 'AI' was a formula that people designed."
```

## Explore: sort this course's cases

```step
stage: run
check:
  type: sort
  q: "Which kind is each system? You'll meet each one later in the course."
  options: ["Rules written by people", "Learns to predict or sort", "Makes new content", "Takes actions"]
  items:
    - ["A formula that changed students' exam grades, using how their school did in past years", "Rules written by people", "People designed the formula. It didn't learn from examples."]
    - ["A hiring tool trained on the résumés of people a company hired in the past", "Learns to predict or sort", "It learned from past examples, then sorted new ones."]
    - ["An AI that checks breast-screening scans for signs of cancer", "Learns to predict or sort", "It learned from many labelled scans."]
    - ["A chatbot on an airline's website that answers customers' questions", "Makes new content", "It writes new answers each time."]
    - ["An app that makes pictures in an artist's style", "Makes new content", "It learned from many pictures, then makes new ones."]
    - ["An assistant that books and pays for a trip for you", "Takes actions", "It doesn't just answer. It acts."]
```

The four kinds, in plain words:

1. **Rules written by people:** it follows instructions a person wrote. News stories often still call it "AI" or "an algorithm".
2. **Learns to predict or sort:** it learns from labelled examples, then predicts or sorts new cases.
3. **Makes new content:** it learns from huge amounts of text, pictures or sound, then makes new ones (generative AI).
4. **Takes actions:** it plans steps and does things for you, like buying or sending (an AI agent).

Ask: did a person write the rule, did it learn from examples to sort, does it make something new, or does it do something?

## Explain: where would you look?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "The exam-grade formula gave unfair grades. Where would you look first?"
      options: ["At the formula people designed, and the rule it applied to everyone", "At the examples it learned from", "At the pictures it made"]
      answer: 0
      feedback: [null, "It didn't learn from examples. People designed it.", "It didn't make pictures. It changed grades."]
  - check:
      type: question
      q: "The hiring tool keeps choosing people like those hired before. Where would you look first?"
      options: ["At the past examples it learned from", "At a rule a person typed in", "At the actions it took"]
      answer: 0
      feedback: [null, "Nobody typed in that rule. It learned the pattern from past hires.", "It sorted résumés. It didn't act."]
```

Each kind usually goes wrong in its own way:

- **Rules:** the rule is wrong or unfair, and it is used on everyone at once.
- **Predict or sort:** it learned from wrong or missing examples.
- **Makes new content:** it makes something convincing that isn't true, or copies too closely from what it learned.
- **Takes actions:** it acts on a mistake before anyone checks.

### The exam formula

Which kind was it?

### The hiring tool

Which kind was it?

## Elaborate: not all "AI" is AI

```step
stage: modify
tier: typical
check:
  type: question
  q: "Australia's Robodebt scheme sent people wrong debt notices worked out by a computer. A Royal Commission called it 'a crude and cruel mechanism, neither fair nor legal'. It didn't learn from examples. Which kind was it?"
  options: ["Rules written by people", "Learns to predict or sort", "Makes new content"]
  answer: 0
  feedback: [null, "Nothing was learned. People wrote the rule it used to work out debts.", "It didn't make new content. It applied a calculation to everyone."]
```

Some of the worst "automated decisions" used no AI at all. The question "who decides?" still matters: a computer applied the rule, but people chose it.

## Elaborate: four meanings of one headline

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained how the same headline could mean four different kinds of system, and what I'd ask about each." }
```

A headline says **"AI turned down your loan."** Write what it might mean for each of the four kinds, and the first question you'd ask about each one. Which kind would worry you most, and why?

## Evaluate: kind first

```step
stage: info
check: { type: reflect, text: "Before I judge a system, I can ask which kind it is." }
```

On paper: **"This course will ask who gains, who loses, who decides, and what's the catch. The first question I'll ask is \_\_\_\_."**

**Next lesson:** the lens itself, on a system that helps people.
