---
title: Learned from the past
summary: "A model trained on past decisions copies their patterns, including unfair ones. A hiring tool that learned from past hires shows how."
language: science
shape: 5e
unit: who-decides
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Last lesson, people designed the rule. This time, nobody wrote the rule: a model **learned** it from past decisions. **What if the past decisions were unfair?**

**Kind of AI:** learns to predict or sort. You trained one in [AI Foundations › Why does AI make mistakes?](../../foundations/model-mistakes/).

## Engage: copy the past

```step
stage: predict
check:
  type: predict
  q: "A made-up company trains a model on 10 years of its past hires. Almost all of them went to the same two schools. What will the model probably learn?"
  options: ["People from those two schools are good hires", "Every school is equally good", "Nothing: it only reads skills"]
  actual: "It learns the pattern in its examples. If past hires mostly came from two schools, it may score people from those schools higher, even if the school has nothing to do with doing the job well."
```

## Explore: a real hiring tool

```step
stage: run
tasks:
  - check:
      type: question
      q: "Amazon's experimental tool learned from résumés of past applicants, mostly men. It marked down résumés with the word 'women's', as in 'women's chess club captain'. Why?"
      options: ["The word was rare in the past hires it learned from, so it learned to score it lower", "Someone typed in a rule against it", "The word was spelled wrongly"]
      answer: 0
      feedback: [null, "Nobody typed in that rule. The model learned it from the examples.", "Spelling had nothing to do with it."]
  - check:
      type: sort
      q: "Would this help a hiring model treat people fairly?"
      options: ["Helps", "Does not help"]
      items:
        - ["Test how it scores people from different groups before using it", "Helps", "Testing each group shows who it fails."]
        - ["Train it on more of the same past hires", "Does not help", "More of the same examples teach the same pattern."]
        - ["Have a person check its choices, and be able to overrule it", "Helps", "A person can catch a pattern the model shouldn't use."]
        - ["Hide the word 'women's', but leave everything else the same", "Does not help", "Other clues can still point to the same group, like the name of a girls' school."]
        - ["Ask what the model is predicting: who was hired before, or who will do the job well?", "Helps", "A model that copies past hiring copies past choices."]
```

In 2018, Reuters reported that **Amazon** had built an experimental tool to rate job applicants' résumés. It learned from **résumés the company had received over ten years**, mostly from men. It **marked down résumés that included the word "women's"**. Amazon stopped using the tool.

(The report relied on people who weren't named. Recruiters reportedly never relied on the tool alone.)

### Why did it happen?

Think about your fruit sorter and its examples.

### What would help?

Sort each idea.

## Explain: past decisions as examples

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "The hiring tool's program had no bug. Where did the unfair pattern come from?"
      options: ["From the past hiring decisions it learned from", "From a rule a programmer wrote", "From the computer's speed"]
      answer: 0
      feedback: [null, "No programmer wrote it. The model found it in the examples.", "Speed doesn't change what it learned."]
  - check: { type: reflect, text: "I can explain how a model that learns from past decisions can copy unfair patterns, and name one check that helps." }
```

A model learns whatever pattern is in its examples. When the examples are **past decisions made by people**, it learns their patterns too, **fair or not**. This is **bias**: the model works worse for a group, because of its examples.

It can be hard to see, because nobody wrote the unfair rule down. That's why it matters to **test each group** and to have a **person who can overrule** it.

### No bug

Where did it come from?

### Explain it

Say it in your own words.

## Elaborate: names on a résumé

```step
stage: modify
tier: typical
check:
  type: question
  q: "Researchers gave AI language models identical résumés with different names. In 85% of tests, the models favoured White-associated names. What does 'identical résumés' show?"
  options: ["Only the name changed, so the name caused the difference", "The résumés were different", "The models were picking the best skills"]
  answer: 0
  feedback: [null, "The researchers kept everything the same except the name.", "Every résumé had the same skills, so skills can't explain it."]
```

In a 2024 study, researchers asked AI language models to rank **identical résumés** that had different names. The models favoured **White-associated names in 85% of cases**.

It was a **test**, not real hiring. Why is a test like this useful before a company uses a tool? Who should run it?

## Elaborate: the wrong target

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained how predicting the wrong thing (cost instead of illness) can harm a group, and suggested a better target." }
```

A US health algorithm chose patients for extra care. It predicted **how much a patient's care would cost**, as a stand-in for how sick they were. Researchers found that at the same score, **Black patients were considerably sicker** than White patients, because less had been spent on their care in the past.

The model predicted its target correctly. **The target was wrong.** What should it have predicted instead? Who would have caught this, and when? Use the lens.

## Evaluate: what would you check?

```step
stage: info
check:
  type: question
  q: "A school wants an AI that predicts which students will do well in a program, trained on past students who were chosen. What should the school check first?"
  options: ["Whether past choices were fair to every group, and how the AI scores each group", "Whether the AI is fast", "Whether the AI has a friendly name"]
  answer: 0
  feedback: [null, "Speed says nothing about fairness.", "A name says nothing about what it learned."]
```

On paper: **"A model that learns from past decisions can be unfair because \_\_\_\_. Before using one, I'd check \_\_\_\_."**

**Next lesson:** AI that doesn't just decide, but **acts**.
