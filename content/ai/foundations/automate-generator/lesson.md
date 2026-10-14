---
sources:
  - { title: "Lodge and Loble (2026), Artificial intelligence, cognitive offloading and implications for education", url: "https://doi.org/10.71741/4pyxmbnjaq.31302475", checked: 2026-10-15 }
  - { title: "Furze (2026), Resistance as a Framework for Combating Cognitive Offload", url: "https://leonfurze.com/2026/03/22/resistance-as-a-framework-for-combating-cognitive-offload/", checked: 2026-10-15 }
  - { title: "Nakamura (2026), Augmentation or Erosion?", url: "https://doi.org/10.1007/s10648-026-10224-6", checked: 2026-10-15 }
title: Let the computer take over
summary: Compare manual and automated sampling, and decide which work can be delegated without losing understanding.
language: science
unit: text-generation
order: 3
---
You already know how to choose an ending with a lookup table and a die. A computer can repeat the same procedure much faster. Does that mean you understand more, less, or just do less repetitive work?

## Engage: what would you automate?

```step
stage: predict
check:
  type: predict
  q: "You want to sample 1,000 endings. What should the computer do?"
  options: ["Repeat the dice-and-table procedure", "Decide whether every sentence is true", "Replace the need to understand the lookup table"]
  actual: "The computer can repeat the dice-and-table procedure. Repetition alone does not establish truth or replace understanding."
```

## Explore: manual versus automatic

```step
stage: run
check:
  type: question
  q: "The program picks a random integer from 1 to 6 and uses the same table as your die. What changed?"
  options: ["The assigned probabilities", "Who performs the repeated sampling", "The meaning of the words"]
  answer: 1
```

Work with a partner:
1. Make five selections manually using the dice table from the previous lesson.
2. Use a spreadsheet, calculator or a short teacher-provided program to generate 100 integers from 1 to 6 and apply the **same** lookup table.
3. Tally mat, chair and roof. Compare the proportions with the intended 3/6, 2/6 and 1/6. Explain why the proportions may differ.

If no digital tool is available, combine the results of several groups to approximate a larger sample.

## Explain: what was offloaded?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which task has the computer taken over?"
      options: ["Generating random outcomes and applying the lookup repeatedly", "Deciding whether the model represents real language well", "Judging whether an output is appropriate"]
      answer: 0
  - check:
      type: question
      q: "Who should still decide whether the examples and model suit the question?"
      options: ["The learner or researcher", "The random number generator"]
      answer: 0
  - check: { type: reflect, text: "I can name what was automated and what judgement remains with me." }
```

**Cognitive offloading** means using a tool to take over some mental work. Here the computer takes over repeated execution and counting. In other tasks, AI might also generate explanations or recommendations, shifting some processing and potentially judgement.

Offloading is not automatically helpful or harmful. If the goal is to **learn how sampling works**, doing it manually first can reveal the mechanism. If the goal is to **compare thousands of samples**, automation makes a different investigation possible.

## Elaborate: learning mode or performance mode?

```step
stage: modify
check:
  type: question
  q: "A student has never seen the lookup table but copies 1,000 generated words into an assignment. Which learning check is most useful?"
  options: ["Ask them to explain and perform a few selections without the computer", "Assume the large output proves understanding", "Ask them to generate 10,000 more words"]
  answer: 0
```

Discuss two goals: **learning mode** (build a capability you can demonstrate yourself) and **performance mode** (complete a task efficiently). The same tool may be appropriate in both, but what you need to do independently can differ.

## Evaluate: transfer

```step
stage: info
check:
  type: question
  q: "A new die table has four faces for 'yes' and two for 'no'. Without running a program, what is the probability of 'no'?"
  options: ["1/6", "2/6", "4/6", "6/6"]
  answer: 1
```

In your own words, answer both questions:
- What did the computer do for you?
- What would you still need to understand to check whether it did the right thing?

**Important limitation:** this is a fixed, transparent sampling model. Modern LLMs do not generate text by simply rolling a die over a six-entry table; they use much more complex learned patterns and context.
