---
order: 1
unit: notice
title: What's going on in your head?
summary: "Two short puzzles with a trap in them. The first answer that pops into your head is often wrong, and the people who get them right usually aren't smarter: they plan, check as they go, and look back. Those three moves are what self-regulated learning means, and you can use them in any subject."
language: science
shape: 5e
hook: "A drink bottle and its cap cost $11 together. The bottle costs $10 more than the cap. How much is the cap? Most people answer in two seconds, and most people are wrong."
---
Every puzzle and person here is made up. Getting a puzzle wrong is the point: it shows what your head does when it's in a hurry.

## Engage: your first answer

```step
stage: predict
insight: "Committing to a fast answer, so the check afterwards means something. Most people say $1."
check:
  type: predict
  q: "A drink bottle and its cap cost $11 together. The bottle costs $10 more than the cap. How much is the cap? Go with your first answer."
  options: ["$1", "50 cents", "$1.50", "$10"]
  actual: "50 cents. If the cap were $1, the bottle would be $11 and the pair would cost $12. With a 50-cent cap, the bottle is $10.50 and the pair is $11."
```

## Explore: try another, slowly

```step
stage: run
insight: "A second trap, after the first has made students suspicious: do they now check before they answer?"
tasks:
  - check:
      type: question
      q: "5 printers take 5 minutes to print 5 posters. How long would 10 printers take to print 10 posters?"
      options: ["5 minutes", "10 minutes", "2 and a half minutes", "20 minutes"]
      answer: 0
      feedback: [null, "Check it: each printer makes one poster in 5 minutes. With 10 printers, each still makes one poster.", "That would be true for 5 posters with 10 printers, not 10 posters.", "Doubling both the printers and the posters doesn't double the time."]
      explain: "Each printer makes one poster in 5 minutes. Ten printers make ten posters in the same 5 minutes."
  - check:
      type: sort
      q: "Two made-up students tried the bottle puzzle. Which thoughts helped them get it right?"
      options: ["Helped", "Didn't help"]
      items:
        - ["\"That's too easy. What's the catch?\"", "Helped", "Noticing that a question feels too easy is a reason to slow down."]
        - ["\"$1. Done. Next!\"", "Didn't help", "Speed felt good, but nothing checked the answer."]
        - ["\"Let me test it: $1 cap, $11 bottle, that's $12. Too much.\"", "Helped", "Putting the answer back into the question caught the mistake."]
        - ["\"I'm bad at maths, so I'll just guess.\"", "Didn't help", "It skips the thinking. The puzzle needs care, not a maths brain."]
        - ["\"What exactly is it asking? The cap, not the bottle.\"", "Helped", "Reading the question carefully before starting."]
        - ["\"Everyone else said $1, so it must be right.\"", "Didn't help", "Other people's fast answers can be wrong too."]
```

Was your first answer to the bottle puzzle $1? Most people's is. The people who get it right usually aren't smarter. **They do a few small things before, during and after.**

### Ten printers

### What helped

## Explain: before, during and after

```step
stage: investigate
insight: "Naming the cycle after students have met it. The planted mistake is trusting an answer because it came quickly."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib tries a puzzle. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: fast-means-right
      explain: "Line 3: Nib decides the answer must be right because it came quickly. A quick check would catch it: with a 20-cent rubber, the pencil is $1.20 and the pair is $1.40. The rubber is 10 cents."
  - check:
      type: sort
      q: "Sort what careful solvers do into before, during and after the task."
      options: ["Before", "During", "After"]
      items:
        - ["Read what the question is really asking", "Before"]
        - ["Decide how to start", "Before"]
        - ["Notice when something seems too easy or too strange", "During"]
        - ["Test an answer by putting it back into the question", "During"]
        - ["Ask: did that work? What would I do differently?", "After"]
        - ["Notice which kind of question tricked you, for next time", "After"]
```

Careful learners do three small things:

1. **Before:** work out what the task is really asking, and make a plan, even a tiny one.
2. **During:** keep checking. Does this make sense? Is it working? If not, change what you're doing.
3. **After:** look back. Did it work? What would you do differently next time?

That's **self-regulated learning**: steering your own learning, rather than just letting it happen. It isn't about being clever. Everyone's first thought is sometimes wrong. The difference is whether you check it.

These moves work in every subject: a maths question, a science report, a paragraph in English, a program that won't run.

### Nib's slip

### Before, during, after

## Elaborate: not just puzzles

```step
stage: modify
tier: typical
insight: "Years 7 and 8: the same three moves on a longer, everyday school task."
check:
  type: match
  q: "Jun has a science report due Friday. Match each thing she does to when she does it."
  pairs:
    - ["She reads the task sheet and highlights what the report must include.", "Before"]
    - ["Halfway through, she notices she's written lots about the method but nothing about the results yet.", "During"]
    - ["After it's marked, she notes that her conclusion didn't use her data, for next time.", "After"]
```

## Evaluate: spot the moves

```step
stage: info
tasks:
  - check:
      type: question
      q: "Which of these is a 'during' move?"
      options: ["Stopping to ask 'does this make sense so far?'", "Reading the task before starting", "Looking back after it's marked", "Finishing as fast as you can"]
      answer: 0
      feedback: [null, "That's a 'before' move.", "That's an 'after' move.", "Fast isn't a move. It can even skip the checks."]
      explain: "Checking as you go is the 'during' move."
  - check: { type: reflect, text: "I can name one thing to do before, during and after a task." }
```

### Which move?

### Look back

**A private think** (just for you): which of the three moves do you usually skip?
