---
title: Who labels the data?
summary: "AI learns from labelled examples, and people make the labels, often far away and for low pay. Is it fair? \"Low\" always needs a comparison."
language: science
shape: 5e
unit: who-pays
order: 7
voice: { name: af_heart, speed: 1.1 }
---
In AI Foundations you labelled fruit so a model could learn. Real AI needs **millions** of labels. **Who makes them, and how are they treated?**

**Kind of AI:** both kinds that learn: models that predict or sort, and AI that makes new content (chatbots are also trained with labels from people).

## Engage: who did the labelling?

```step
stage: predict
check:
  type: predict
  q: "A chatbot is trained to refuse harmful requests. Who taught it which text is harmful?"
  options: ["People, who read and labelled examples", "Nobody: it worked it out alone", "The users who chat with it"]
  actual: "People. Workers read examples and labelled which were harmful, so the AI could learn to spot them."
```

## Explore: one real case

```step
stage: run
tasks:
  - check:
      type: question
      q: "TIME reported that the workers took home about $1.32 to $2 (US) an hour. The company that hired them, Sama, says it was $1.46 to $3.74 after tax. Why might the two figures differ?"
      options: ["They measured pay differently, and they disagree about the facts", "One of them can't add", "They are describing different countries"]
      answer: 0
      feedback: [null, "Both can do maths. They counted pay differently, and they disagree.", "Both describe the same workers in Nairobi."]
  - check:
      type: sort
      q: "Is $1.32 to $2 an hour low? It depends what you compare it with. Which comparison does each fact give?"
      options: ["Makes it look low", "Makes it look less low"]
      items:
        - ["OpenAI paid Sama $12.50 an hour for each worker", "Makes it look low", "Most of what OpenAI paid didn't reach the worker."]
        - ["A receptionist in Nairobi might earn about $1.52 an hour, TIME reported", "Makes it look less low", "Compared with some local jobs, the pay was similar."]
        - ["The work meant reading upsetting text, day after day", "Makes it look low", "Hard, upsetting work might deserve more."]
        - ["Sama says counselling was available to workers", "Makes it look less low", "Support is part of how workers are treated, not just pay."]
```

To make ChatGPT safer, its maker OpenAI needed examples of harmful text, labelled by people. Around 2022, workers in **Nairobi, Kenya**, employed by a company called **Sama**, read and labelled that text. Some of it was very upsetting.

In 2023, TIME magazine reported that the workers took home **about $1.32 to $2 (US) an hour**, while OpenAI paid Sama **$12.50 an hour** for each worker. Sama disagreed: it says workers earned **$1.46 to $3.74 after tax**, had fewer passages per shift than reported, and could get counselling.

### Two figures

Why do they differ?

### Less than what?

Sort each comparison.

## Explain: hidden work

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why is labelling work often called 'hidden'?"
      options: ["People using the AI don't see the workers who labelled its examples", "The workers are invisible", "Labelling happens by itself"]
      answer: 0
      feedback: [null, "The workers are real people; their work isn't seen by users.", "People do it, by hand, example by example."]
  - check: { type: reflect, text: "I can explain who labels AI data, and why 'low pay' needs a comparison before I judge it." }
```

Behind many AI systems are people who **label data**: they tag pictures, rate answers and mark harmful text. Users rarely see them, so the work is called **hidden**.

To judge whether it's fair, ask **compared with what**: what the client paid, local wages, how hard the work is, and how workers are supported. Both sides of the Sama story can be partly right.

### Hidden

Who doesn't see it?

### Explain it

Use the words "label" and "compared with".

## Elaborate: platforms

```step
stage: modify
tier: typical
check:
  type: question
  q: "Fairwork scored 16 online work platforms against fair-work standards. Only 4 met both of its fair-pay standards. What is the best way to use that finding?"
  options: ["As one careful check, knowing platforms chose to take part and the scores are the group's own standards", "As proof every platform is unfair", "Ignore it: it's only one report"]
  answer: 0
  feedback: [null, "Some platforms met the standards.", "One careful report is evidence; just know how it was made."]
```

Much labelling is done through **online platforms**, where people pick up small tasks from home. In 2025, a research group called **Fairwork** (University of Oxford) scored 16 platforms. Only **4 met both of its fair-pay standards**. It said platforms remain far from safeguarding basic standards of fair work.

Use the lens: who gains from cheap labels? Who could be harmed? Who decides the pay?

## Elaborate: who decides the labels?

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained how workers' situation can shape an AI's labels, and why that matters for what the AI learns." }
```

- Researchers who interviewed data workers in Venezuela and Argentina (2022) found that clients' instructions shaped the labels, and that insecure work made workers **obedient to instructions**, even when they disagreed.
- An earlier survey (2017 data) found online microtask workers spent about **20 minutes of every hour doing unpaid work**, like searching for tasks.

If workers can't question the instructions, whose view of the world ends up in the labels? How might that affect what the AI learns? What would better treatment of labellers change?

## Evaluate: fair labels

```step
stage: info
check:
  type: question
  q: "A company says: 'Our AI is ethical.' Which question about its data would you ask?"
  options: ["Who labelled the data, how were they paid and treated, and compared with what?", "How many labels were there?", "What colour is the app?"]
  answer: 0
  feedback: [null, "How many doesn't say how the labellers were treated.", "That says nothing about the people behind the data."]
```

On paper: **"Behind an AI are people who \_\_\_\_. To judge whether their pay is fair, I'd compare it with \_\_\_\_."**

**Next lesson:** another group of people behind AI: the ones whose work it learned from.
