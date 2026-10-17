---
sources:
  - { title: "Lodge and Loble (2026), Artificial intelligence, cognitive offloading and implications for education", url: "https://doi.org/10.71741/4pyxmbnjaq.31302475", checked: 2026-10-15 }
title: Let the computer take over
summary: Compare manual and automated sampling, and decide which work can be delegated without losing understanding.
language: science
shape: 5e
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Repetition is not understanding"
  say: "Automating the same sampling."
  clip:
    - caption: { text: "The computer repeats the same six-face selection many times.", say: "The computer repeats the same six-face selection many times." }
    - wait: 1200
    - caption: { text: "A large sample lets us compare observed and expected proportions.", say: "A large sample lets us compare observed and expected proportions." }
    - wait: 1200
    - caption: { text: "We still judge the model, its outputs and what we need to learn.", say: "We still judge the model, its outputs and what we need to learn." }
    - wait: 1200
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
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

## Explore: run it many times

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 590 }
check: { type: board, text: "Run at least 100 automated samples.", when: "a >= 100" }
```

Work with a partner:
1. Make five selections manually using the dice table from the previous lesson.
2. On the interactive board, choose **Run 100** to automate the **same** lookup table. Optionally repeat with 1,000 draws. A spreadsheet or short program is an alternative.
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
      q: "You press Run 1000 and see mat 51%, chair 33%, roof 16%. Which job did the computer NOT do?"
      options: ["Decide whether six made-up endings are a good model of real sentences", "Roll the die 1000 times", "Count each word"]
      answer: 0
      feedback: [null, "It did roll 1000 times: that is the job you handed over.", "It did count: that is part of the job you handed over."]
  - check: { type: reflect, text: "I can name what was automated and what judgement remains with me." }
```

### Identify the automated work

Name the repeated task the computer now performs.

### Identify the human judgement

Who still decides whether the model and examples suit the question?

### Reflect on what remains yours

Explain what has been delegated and what still requires understanding.

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

## Learning with AI: direct the help you receive

Imagine you are learning to use the dice lookup table. You ask an AI assistant to **act as your tutor**. It replies:

- **Response A:** “The answer is 2/6. Copy that into your worksheet.”
- **Response B:** “How many die faces lead to the word? How many faces are there altogether?”
- **Response C:** “Divide the number of matching faces by six. There are two matching faces, so the answer is 2/6.”

Which response leaves the thinking you are practising to you? Could Response C be helpful at a different stage of learning? These are prepared examples, not a live AI.

If a tutor gives you the whole answer when you wanted to practise, you can say so: *“Please let me work out the next step before you explain.”* Asking doesn't guarantee it will listen, so notice what it actually does.

```step
stage: investigate
check:
  type: question
  q: "You asked an AI tutor for hints, but it gave you the complete answer straight away. Your goal is to learn the method. What is the best next step?"
  options: ["Ask it for one hint at a time, then try the next step yourself", "Copy the answer: you can learn it from reading later", "Ask it a harder question instead"]
  answer: 0
  feedback: [null, "Reading an answer can feel like learning, but you haven't practised the method.", "A harder question doesn't help you learn this method."]
```

**Independent check:** without AI, use this new table: **1 = sun, 2–3 = rain, 4–6 = cloud**. What is the chance of rain? Explain how you worked it out. Then reflect: what did you hand over today, and what thinking did you keep?

**Important limitation:** this is a fixed, transparent sampling model. Modern LLMs do not generate text by simply rolling a die over a six-entry table; they use much more complex learned patterns and context.
