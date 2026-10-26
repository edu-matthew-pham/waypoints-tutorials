---
order: 2
unit: warmup
optional: true
title: Words that join ideas
summary: "Joining words (connectives) such as however, so, also and then tell the reader how the next idea connects to the last one: it adds, it turns against, it follows as a result, or it comes next in time. They are not interchangeable: swap however for so and the meaning changes."
language: maths
node: [AC9E4LA04 n2, AC9E4LA04 n3]
hook: "'It rained all morning. So the match went ahead.' Something is wrong, but every word is spelled right. What is it?"
---
Two sentences side by side don't say how they connect. A **joining word** (a connective) tells the reader: the next idea **adds** to the last one, **turns against** it, **follows from** it, or **comes next** in time.

## Predict: swap the joining word

```step
stage: predict
insight: "Committing to what changes when however becomes so shows that joining words carry meaning, not just flow."
check:
  type: predict
  q: "'It rained all morning. However, the match went ahead.' Change However to So. What happens to the meaning?"
  options: ["It now says the match went ahead because of the rain, which sounds odd", "Nothing: both just join the sentences", "It becomes more formal", "It now says the rain stopped"]
  actual: "So says the second idea happened because of the first: the rain caused the match to go ahead. However says it happened in spite of the rain. Same words, different meaning."
```

## Try: choose the joining words

```step
stage: run
insight: "Choosing each joining word from three that mean different things makes students decide how each pair of ideas connects."
try: { playground: board, starter: "text.yml#run", height: 300 }
hint: ["Read the sentence before each gap and the sentence after it. Does the second add, turn against, follow as a result, or come next?", "The forecast going against the plan is a turn. Moving to the hall happened because of the forecast."]
smaller:
  check: { type: question, q: "We planned a picnic. ___, the forecast said storms. Does the second idea add to the plan, or go against it?", options: ["Goes against it", "Adds to it"], answer: 0, feedback: [null, "Storms are bad news for a picnic."], explain: "Storms go against the plan, so the joining word needs to turn: However." }
check: { type: board, text: "Choose a joining word for each gap so the story makes sense.", when: "n_gaps_right = 4", explain: "However turns against the plan, As a result shows why they moved, and First and Then put the steps in order." }
```

Were you right about so? Each gap here worked the same way: the joining word says how the ideas connect.

## Worked example: how do they connect?

```step
stage: investigate
insight: "Modelling the question 'how does the second idea connect to the first?' gives the method. Nib's slip is choosing a word because it sounds grown-up."
tasks:
  - check:
      type: sort
      q: "Sort each joining word by the job it does."
      options: ["Adds", "Turns against", "Shows a result", "Shows time order"]
      items:
        - ["also", "Adds", "Also puts another idea beside the last one."]
        - ["in addition", "Adds", "In addition adds one more point."]
        - ["however", "Turns against", "However shows the next idea goes against what you expected."]
        - ["but", "Turns against", "But turns against the first idea."]
        - ["so", "Shows a result", "So shows the next idea happened because of the last."]
        - ["as a result", "Shows a result", "As a result names a consequence."]
        - ["then", "Shows time order", "Then says what happened next."]
        - ["finally", "Shows time order", "Finally marks the last step."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib joined two sentences: 'Our team trained every afternoon. ___ we won the final.' Click the line where Nib first goes wrong."
      answer: 2
      fault: logic
      misconception: connective-sounds-clever
      explain: "Line 2: Nib chose however because it sounds grown-up, without asking how the ideas connect. Winning followed from training, so the right job is a result: so, or as a result."
  - check:
      type: question
      q: "'The plants were left in a dark cupboard for a week. ___, their leaves turned yellow.' Which joining word fits?"
      options: ["As a result", "However", "In addition", "First"]
      answer: 0
      feedback: [null, "However would mean yellow leaves are a surprise. After a week in the dark, they aren't.", "In addition adds a new point. This is a consequence.", "First starts a list of steps. Nothing is being listed."]
      explain: "The leaves turned yellow because the plants had no light, so the second idea is a result."
```

### Choosing a joining word

```worked
\text{Read both ideas} :: Read the sentence before the gap and the sentence after it.
\text{Ask how they connect} :: Does the second add, turn against, follow as a result, or come next in time?
\text{Pick a word for that job} :: Adds: also, in addition. Turns: however, but. Result: so, as a result. Time: first, then, finally.
\text{Read it aloud} :: Say both sentences with the word in. If it sounds wrong, check the job again.
```

Now sort some joining words by their job.

### Find Nib's slip

### Pick the word

## Vary: same ideas, different joins

```step
stage: modify
insight: "Changing only the joining word between the same two facts shows that the writer, not the facts, decides how ideas are connected."
try: { playground: board, starter: "text.yml#vary", height: 260 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Both gaps join the same two facts. The last sentence of each paragraph tells you what the writer wants to say.", "In the first, two events on one night are a problem. In the second, they are a bonus."]
    check: { type: board, text: "Choose the joining word that makes each pair say what its last sentence says.", when: "n_gaps_right = 2", explain: "However shows the concert is a problem for the art show. Also adds the concert as a bonus. The facts are the same: the joining word changes the meaning." }
  - check:
      type: question
      q: "Why can't you swap however for therefore?"
      options: ["However turns against the first idea, and therefore says the next one follows from it", "Therefore is only for maths", "They mean the same, so you can", "However must start a paragraph"]
      answer: 0
      feedback: [null, "Therefore is used in all kinds of writing, not just maths.", "They do different jobs: one turns, one shows a result.", "However can go almost anywhere a joining word fits."]
      explain: "However and therefore do opposite jobs: one turns against the first idea, the other says the next idea follows from it."
```

### Same facts

### However or therefore?

## Practise: steps in order

```step
stage: practise
insight: "A recount needs time order and a reason, so students mix time words with a result word."
try: { playground: board, starter: "text.yml#practise", height: 320 }
hint: ["Most gaps here put steps in order. One gap explains why something happened.", "First, Next, After that and Finally put steps in order. As a result explains why. Each word fits best in only one place."]
check: { type: board, text: "Choose a joining word for each of the five gaps.", when: "n_gaps_right = 5", explain: "First, Next, After that and Finally take the reader through the steps in order, and As a result says why the eggs float." }
```

## Make: your own joins

```step
stage: make
insight: "Writing their own short recount with three different joining words moves the choice from picking to producing."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own and write four or five sentences about something you made or did, step by step.", "Use at least three different joining words, and at least one that is not about time: however, so, also, as a result."]
check: { type: board, text: "Write at least four sentences that use at least three different joining words.", when: "is_written = 1 and n_sentences >= 4 and n_connectives >= 3", explain: "Your joining words tell the reader how each idea connects. Read it aloud: does each one do the job you meant?" }
```

The board only counts your joining words. Whether each one does the right job is for you (and a partner) to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking class writing for joining words that do the wrong job applies the move where it counts."
check: { type: reflect, text: "In a piece of my own writing, I circled each joining word and checked its job (adds, turns, result or time). I changed at least one that did the wrong job, or added one where two ideas sat side by side with no join." }
```
