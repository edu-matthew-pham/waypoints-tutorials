---
title: Will AI take jobs?
summary: "AI changes the tasks inside a job before it removes whole jobs. \"Exposed to AI\" is not the same as \"lost to AI\". The evidence so far, and what's still argued about."
language: science
shape: 5e
unit: what-next
order: 9
voice: { name: af_heart, speed: 1.1 }
---
You've probably heard that AI will take people's jobs. **What does the evidence say so far?** Start by looking inside a job.

**Kind of AI:** mostly AI that makes new content (writing, summarising, answering), plus models that predict or sort.

## Engage: a job is many tasks

```step
stage: predict
check:
  type: predict
  q: "A report says a job is 'exposed to AI'. What does that most likely mean?"
  options: ["AI could do or help with some of its tasks", "The job will disappear", "The workers use computers"]
  actual: "Exposed means some tasks could be done or helped by AI. It doesn't tell you whether the job will disappear: often AI helps with some tasks while people do the rest."
```

## Explore: split a job

```step
stage: run
check:
  type: sort
  q: "A made-up school office worker does all of these. For each task, what's most likely right now?"
  options: ["AI could do much of it", "AI could help a person", "Needs a person"]
  items:
    - ["Write a first draft of the school newsletter", "AI could help a person", "AI can draft; a person checks it's right and sounds like the school."]
    - ["Sort incoming emails into folders", "AI could do much of it", "Sorting is a prediction task AI does well, with a person checking odd ones."]
    - ["Look after a student who feels sick", "Needs a person", "Care, judgement and being there in person."]
    - ["Answer a worried parent on the phone", "Needs a person", "Trust and judgement matter most here."]
    - ["Make a timetable for parent–teacher interviews", "AI could help a person", "Software can suggest one; a person handles the special cases."]
    - ["Type up notes from a meeting recording", "AI could do much of it", "Transcribing is a task AI already does, with checking."]
```

A job is made of many **tasks**. AI can do some tasks, help with others, and can't do others yet. When a report says a job is **exposed**, it usually means **some tasks** are.

### Split the job

Sort each task.

## Explain: exposed is not lost

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Jobs and Skills Australia (2025) found 'no current evidence of widespread displacement in Australia'. What does that mean?"
      options: ["So far, AI hasn't replaced large numbers of workers here", "AI will never change jobs", "Everyone has lost their job to AI"]
      answer: 0
      feedback: [null, "It's about now, not forever. Jobs are changing.", "That's the opposite of what it found."]
  - check:
      type: question
      q: "The International Labour Organization says generative AI is more likely to augment jobs than automate them. What does 'augment' mean?"
      options: ["Help people do their job, changing some tasks", "Replace the whole job", "Make the job harder"]
      answer: 0
      feedback: [null, "That's automate.", "Augment means add to: helping, not replacing."]
  - check: { type: reflect, text: "I can explain the difference between a job being exposed to AI and a job being lost to AI." }
```

- **Augment:** AI **helps** people do their job. Some tasks change.
- **Automate:** AI **does** the task, so fewer people may be needed for it.

So far, studies find **far more augmenting than automating**. In Australia, Jobs and Skills Australia (2025) found **no current evidence of widespread displacement**. Jobs are **changing**, task by task.

### Displacement

What did it find, and when?

### Augment

What does the word mean?

### Explain it

Use "exposed" and "lost".

## Elaborate: who gains most?

```step
stage: modify
tier: typical
check:
  type: question
  q: "In a call centre, an AI helper raised workers' productivity by 14% on average, and by much more for new workers. Who gained most, and why might that be?"
  options: ["New workers: the AI shared tips that experienced workers already knew", "Experienced workers: they knew how to use it", "Nobody: productivity didn't change"]
  answer: 0
  feedback: [null, "Experienced workers gained least: they already knew most of what it suggested.", "It rose by 14% on average."]
```

A study of a real call centre (published 2025) found that an AI helper raised productivity **by 14% on average**, and **most for new workers**. Use the lens: who gains? Who might lose if a company then hired fewer people? Who decides?

## Elaborate: the junior-jobs question

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared two studies that seem to disagree about young workers, and explained what each one can and can't show." }
```

- **Stanford researchers** (revised 2026): in the US, workers **aged 22 to 25** in the jobs most exposed to AI were **about 19% below** where their employment would be expected. The authors say this **describes** a pattern; it doesn't prove AI caused it.
- **Yale Budget Lab** (2025): the US labour market **has not experienced a discernible disruption** since ChatGPT arrived.

Can both be true? (One looks at a small group, the other at the whole economy.) Why might new workers both **gain most** from AI and be **hired less**? What would you want to measure next?

## Evaluate: your future job

```step
stage: info
check:
  type: question
  q: "A friend says: 'There's no point learning to write, AI will do it.' What's the best reply?"
  options: ["AI changes tasks, but people still need to check, decide and do what AI can't, and you need the skill to judge its work", "True: stop learning to write", "AI can't write anything"]
  answer: 0
  feedback: [null, "To check AI's writing, you need to be able to write.", "AI can write drafts. The question is who checks and decides."]
```

On paper, pick a job you might want. Split it into **five tasks**. Mark each: **AI could do**, **AI could help**, or **needs a person**. Which skills will you still need?

**Next lesson:** how people make rules about AI.
