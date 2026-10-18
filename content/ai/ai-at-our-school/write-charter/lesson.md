---
title: Write the charter
summary: "Critique a made-up school's draft charter, then write your committee's own: five to seven principles, each with how you'd check it, dated and ready to share for comment."
language: science
shape: 5e
unit: charter
order: 3
voice: { name: af_heart, speed: 1.1 }
---
A **charter** is one page: the principles every AI decision is tested against. It's short enough to use in a meeting, and it says who wrote it, when, and when it will be looked at again.

## Engage: the long charter

```step
stage: predict
check:
  type: predict
  q: "One school's AI charter has 22 principles over four pages. Will teachers use it when they decide about a new tool?"
  options: ["Yes: more principles cover more cases", "Probably not: it's too long to use in the moment", "Only if the AI reads it for them"]
  actual: "Probably not. A charter is used when someone is deciding, often in a few minutes. Five to seven principles people remember beat twenty-two nobody reads. Short doesn't mean vague: each still needs a way to check it."
```

## Explore: critique, then write

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Westbrook's first draft charter. What would you do with each line?"
      options: ["Keep it", "Too vague to check", "A rule about one tool", "Clashes with another principle"]
      items:
        - ["'Learning first: AI must help students learn, not just finish tasks. Check: a short task without AI shows the skill.'", "Keep it", "It decides cases and says how to check."]
        - ["'Embrace innovation.'", "Too vague to check", "It can't say no to anything."]
        - ["'Only StudyPal may be used for homework.'", "A rule about one tool", "That's a decision, not a principle. It will be out of date the day a new tool arrives."]
        - ["'A person decides anything that matters about a student. Check: ask who makes the final call.'", "Keep it", "Clear, and checkable."]
        - ["'Students must never use AI for anything.'", "Clashes with another principle", "It makes 'Learning first' pointless, and ignores AI that arrives on its own."]
        - ["'Be fair.'", "Too vague to check", "Fair how? Say what you'd check, for example that every student has the same access."]
  - check:
      type: reasoning
      q: "Write your committee's charter: five to seven principles, each with how you'd check it. (Use your notes from lessons 1 and 2.)"
      placeholder: "1. … Check: … 2. … Check: …"
      models:
        - title: "A strong answer (Westbrook, second draft)"
          text: "1. Learning first: AI helps the learning a task is for. Check: a short task without AI. 2. Age and stage: support changes from Year 7 to 10. Check: each year's rules are written down. 3. A person decides anything that matters about a student. Check: who makes the final call? 4. Our data stays ours. Check: privacy page and settings, before use. 5. Fair for everyone. Check: free at school, works on school devices. 6. Honest about evidence; decisions are dated and reviewed each year. 7. Not using AI is a real option."
        - title: "A different view that also works"
          text: "Five principles, shorter: 1. Students do the thinking a task is for. 2. People decide, AI suggests. 3. We know where our work goes. 4. Everyone gets the same access. 5. We check whether it's working, every term. Each with one line on how to check it."
      criteria: ["Five to seven principles.", "Each one could say no to something.", "Each has a way to check it."]
      explain: "A charter is a tool for deciding. Short, checkable principles are the ones a busy committee will actually use."
```

### Critique Westbrook's draft

What would you do with each line?

### Write your charter

Five to seven principles, each with a check.

## Explain: a charter people can use

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why should a charter say who wrote it, the date, and when it will be reviewed?"
      options: ["AI changes fast, so readers need to know how current it is and when it will be checked", "So the committee gets credit", "Charters must have dates by law"]
      answer: 0
      feedback: [null, "Credit isn't the point: readers need to know if it's still current.", "Not by law: because things change."]
  - check: { type: reflect, text: "I can explain what makes a charter usable: short, checkable, dated and reviewed." }
```

A usable charter:

1. has **five to seven** principles, short enough to remember;
2. gives each a way to **check** it;
3. contains **principles, not decisions** about particular tools;
4. says **who wrote it, the date, and when it will be reviewed**;
5. is **shared for comment** with the people it affects before it's final.

### Dates and reviews

Why date a charter?

### Explain it

Name the five features of a usable charter.

## Elaborate: ask the people it affects

```step
stage: modify
tier: typical
check:
  type: question
  q: "Westbrook's committee shares its charter for comment. Whose comments would it most miss if it only asked teachers?"
  options: ["Students and families, who live with the decisions", "Nobody: teachers know best", "The AI companies"]
  answer: 0
  feedback: [null, "Teachers know a lot, but students and families see things they don't.", "Companies may have a view, but the charter is about the school's values."]
```

Before a charter is final, show it to the people it affects. Ask each group one question: **"Which principle would you change, and why?"**

Who should see your charter? Write two groups and the one question you'd ask each.

## Elaborate: when principles clash

```step
stage: make
tier: wider
check: { type: reflect, text: "I wrote how our committee would decide when two of our principles pull in different directions." }
```

Principles can clash. An AI feature that reads text aloud helps **fair for everyone** (students who find reading hard can take part) but may send student work to a company, which tests **our data stays ours**.

Some committees **order** their principles (learning first, then safety, then the rest). Others **weigh each case** and write down why. Which would you choose? What are the risks of each?

## Evaluate: the charter

```step
stage: info
check:
  type: question
  q: "A new AI tool arrives that nobody on the committee has seen before. How does the charter help?"
  options: ["The committee tests the new tool against the same principles", "It doesn't: the charter only covers tools it names", "The committee has to write a new charter"]
  answer: 0
  feedback: [null, "A charter of principles works for new tools: that's why it names none.", "Not if it's written as principles; review it on its date, not for every tool."]
```

On paper, write the final **charter** and keep it: Units 2 and 3 test decisions against it.

| Our AI charter | |
|---|---|
| Written by: | Date: |
| Our school is for… | |
| Principle | How we'd check it |
| 1. | |
| 2. | |
| 3. | |
| 4. | |
| 5. | |
| (6., 7.) | |
| Shared for comment with: | |
| Next review: | |

**Next unit:** someone proposes a tool. Should the school use it?
