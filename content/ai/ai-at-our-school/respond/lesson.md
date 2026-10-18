---
title: Respond, not just gatekeep
summary: "A search page now shows an AI answer above the results. Blocking isn't the only choice: teach a habit, change the task, change a setting, ask the company, or wait and review. Choose responses for Year 7 and Year 10, and check them against the charter."
language: science
shape: 5e
unit: already-here
order: 9
voice: { name: af_heart, speed: 1.1 }
---
For AI nobody chose, "allow or block?" is too small a question. **A committee picks the response that best serves its charter, for this age and this purpose, and says what would change it.**

> **A made-up search page**
> Search: *why do volcanoes erupt*
>
> **AI answer** — Volcanoes erupt when magma rises because it's lighter than the rock around it. Gas in the magma builds up pressure until it bursts out through cracks in the crust. Some volcanoes erupt gently, others explode, depending on how thick the magma is. *AI answers may contain mistakes.*
>
> **Results**
> 1. How volcanoes work: a geology agency
> 2. Volcanoes: a science museum
> 3. Video: eruptions explained

## Engage: Year 7 research

```step
stage: predict
check:
  type: predict
  q: "Westbrook's Year 7s have a research task on volcanoes. The AI answer sits above the results on every search. What's the best response?"
  options: ["Block the search page", "Do nothing", "Teach a checking habit and change the task", "It depends on what the task is for"]
  actual: "It depends on what the task is for, and the charter helps decide. If the task is practising research, the AI answer can do the thinking: teach students to go past it to the sources, and ask them to show where each fact came from. Blocking the whole search page costs much more than it saves."
```

## Explore: choose responses

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which response fits each situation best?"
      options: ["Teach a habit", "Change the task", "Change a setting", "Ask the company for a control", "Do nothing yet, review by a date"]
      items:
        - ["The AI search answer is sometimes wrong, and students copy it", "Teach a habit", "Check it against the sources below: a habit students take everywhere."]
        - ["A research task can be finished by copying the AI answer", "Change the task", "Ask for the sources used, notes in the student's words, or a question the answer doesn't cover."]
        - ["The document editor's 'Rewrite with AI' button has an admin switch", "Change a setting", "The school can switch it off for younger years, where the writing is the learning."]
        - ["The maths site's AI hint button has no switch at all", "Ask the company for a control", "Ask for a school setting, and say why."]
        - ["A new AI feature appeared last week and nobody knows how students use it yet", "Do nothing yet, review by a date", "Waiting is a choice too, if it has a date."]
        - ["A browser assistant can now open an online quiz, answer it and press Submit by itself", "Change the task", "A quiz an AI can finish alone isn't evidence of learning. Use it for practice, and gather evidence another way."]
  - check:
      type: reasoning
      q: "Choose a response to the AI search answer for Year 7, and one for Year 10. Name the charter principle each one serves."
      placeholder: "Year 7: … (principle: …) Year 10: … (principle: …)"
      models:
        - title: "A strong answer"
          text: "Year 7: teach a habit (scroll past it, read two sources, check one fact) and change research tasks to ask where each fact came from. Principle: learning first, because the research skill is the point. Year 10: let them use it as a starting point, but they must check every fact against a source and say what the AI answer got wrong or left out. Principle: age and stage."
        - title: "A different view that also works"
          text: "Year 7: ask the company for a way to hide AI answers for younger students, and teach the habit until then. Principle: age and stage. Year 10: do nothing new, but review by the end of term with teachers' reports. Principle: honest about evidence."
      criteria: ["I chose a response for each year.", "Each names a charter principle.", "The two years differ, or I said why they don't."]
      explain: "The same AI can need different responses for different ages and tasks. The charter, not the tool, decides."
```

### Choose responses

Match each situation to a response.

### Year 7 and Year 10

One response each, with its principle.

## Explain: a menu of responses

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook blocks the search page for Year 7 to stop the AI answer. What is a cost of that response?"
      options: ["Students lose a real research tool, and still meet AI answers at home, without having learned what to do", "There's no cost: blocking is always safest", "It costs the school money"]
      answer: 0
      feedback: [null, "Blocking has costs too: name them before choosing it.", "Maybe a little, but the bigger cost is to learning."]
  - check: { type: reflect, text: "I can choose a response from the menu, name the principle it serves, and name its cost." }
```

Responses a committee can choose from:

- **Teach a habit** (check the AI answer against sources).
- **A class or year-level norm** ("in research tasks, cite the source, not the AI answer").
- **Change the task or assessment** (ask for evidence of the process: notes, sources, drafts).
- **Change a setting**, where one exists.
- **Offer a school-chosen alternative.**
- **Ask the company for a control.**
- **Restrict or block**, naming the costs.
- **Do nothing yet, and review by a date.**

**Choose the response that best serves the charter for this age and purpose, and say what would change it.** Every response has a cost; name it.

**When AI can act.** Some AI can now send, submit or change things for you. Responses combine: change the task (an online quiz alone isn't evidence), a norm (AI never submits or sends for you), a setting that asks a person to confirm, and asking the company what the AI can reach.

### The cost of blocking

What does blocking cost?

### Explain it

Name four responses and when you'd use them.

## Elaborate: rewrite with AI

```step
stage: modify
tier: typical
check:
  type: question
  q: "The document editor's 'Rewrite with AI' button has an admin switch. For Year 7 English, where drafting is the learning, what fits the charter best?"
  options: ["Switch it off for Year 7, review it for older years, and tell students why", "Leave it on for everyone: it's helpful", "Block the whole editor"]
  answer: 0
  feedback: [null, "Helpful to finish the task, but it can do the drafting that is the learning.", "Students need the editor; the switch only affects one button."]
```

A setting can be the smallest response that works. But a setting only covers school accounts: the same button may be on at home. So committees often combine responses: **a setting, a habit, and a changed task.**

## Elaborate: asking the company

```step
stage: make
tier: wider
check: { type: reflect, text: "I wrote a request to a company for a school control, with the principle behind it, and named a cost of restricting instead." }
```

When there's no setting, a school can **ask**. Companies do add controls when enough schools ask, but it takes time, and nothing is promised.

Write a short request to the maker of the made-up search page: what control Westbrook wants (for example, hiding AI answers for younger students), for whom, and which charter principle it serves.

Then: if the company says no, what would Westbrook do instead? What would **restricting** cost (students who rely on the tool, workarounds, students who meet it at home with no habit to use)?

## Evaluate: response plan, part 2

```step
stage: info
check:
  type: question
  q: "Westbrook decides 'Do nothing yet' about a new AI feature. What makes that a real response, not just ignoring it?"
  options: ["A date to review it, and what the committee will look at then", "Nothing: doing nothing is always ignoring", "Writing it in capital letters"]
  answer: 0
  feedback: [null, "Waiting is a choice when it has a date and a reason.", "The date and the evidence make it a decision."]
```

On paper, add responses to your **response plan**.

| AI on the map | Response | Principle it serves | Its cost | We'd change it if… |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

**Next lesson:** keep it all under review.
