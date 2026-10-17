---
sources:
  - { title: "Lodge and Loble (2026), Artificial intelligence, cognitive offloading and implications for education", url: "https://doi.org/10.71741/4pyxmbnjaq.31302475", checked: 2026-10-15 }
  - { title: "Furze (2026), Resistance as a Framework for Combating Cognitive Offload", url: "https://leonfurze.com/2026/03/22/resistance-as-a-framework-for-combating-cognitive-offload/", checked: 2026-10-15 }
  - { title: "Nakamura (2026), Augmentation or Erosion?", url: "https://doi.org/10.1007/s10648-026-10224-6", checked: 2026-10-15 }
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
      q: "Who should still decide whether the examples and model suit the question?"
      options: ["The learner or researcher", "The random number generator"]
      answer: 0
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

Which response best preserves the thinking you are practising? Could Response C be helpful at a different stage of learning? Explain your choice before asking an AI.

Try directing the assistance with this instruction, or inspect it as a prepared example if AI access is unavailable:

> I am learning to interpret a six-sided-die lookup table. Do not give me the answer immediately. Ask one question at a time, let me try, and give a small hint only if I am stuck.

If you have access to a **school-approved AI assistant**, test the instruction on a *new* lookup table (for example, four faces for yes and two for no). Observe what the AI actually does. If it reveals the answer too soon, **redirect it**: “Please let me work out the next step before explaining.” The instruction is a request, not a guarantee of good tutoring.

```step
stage: investigate
check:
  type: question
  q: "You ask AI for hints, but it immediately gives the complete answer. What is the most useful next step if your goal is to learn?"
  options: ["Assume the answer means you have learned it", "Ask it to give one hint at a time, then try independently", "Always stop using tools"]
  answer: 1
```

**Independent check:** Without AI, explain how to find the chance of an outcome from a new lookup table. Then reflect: what did you delegate, what thinking did you retain, and did the assistant follow your instructions?

**For teachers:** Use the three prepared responses to model how *apparently helpful* AI can still over-assist. Response B is generally preferable for an initial independent attempt, but scaffolding should adapt to student needs. School-approved Copilot, MagicSchool, Thinking Mode or other assistants can be used where available; no particular provider, study mode or student account is required. Avoid entering personal student information. This authentic AI interaction is distinct from automating the toy sampling model above.

**Important limitation:** this is a fixed, transparent sampling model. Modern LLMs do not generate text by simply rolling a die over a six-entry table; they use much more complex learned patterns and context.
