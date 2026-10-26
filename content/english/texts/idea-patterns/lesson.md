---
order: 5
unit: ideas
title: Patterns for ideas
summary: "Inside a text, ideas are organised in patterns: cause and effect, compare and contrast, problem and solution, or claim and support. Signal words show the pattern (as a result, unlike, one way to fix this, for example), and the writer chooses the pattern that fits what the text is for."
language: maths
node: [AC9E7LY04 n1, AC9E7LY04 n2, AC9E8LY04 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "As a result, so and because are signal words. Each one links an effect to its cause, so the paragraph uses a cause and effect pattern." }
hook: "'Both' and 'unlike' appear in the first two sentences of a paragraph. What is the paragraph going to do?"
---
Inside a text, ideas are organised in **patterns**. Four common ones:

- **Cause and effect:** what happened and why. Signals: because, so, as a result.
- **Compare and contrast:** how two things are alike and different. Signals: both, also, unlike, whereas, but.
- **Problem and solution:** a problem, then a way to fix it. Signals: the problem is, one way to fix this.
- **Claim and support:** a point, then evidence for it. Signals: for example, this shows.

## Predict: what will it do?

```step
stage: predict
insight: "Predicting from signal words in a first sentence shows students they already read patterns."
check:
  type: predict
  q: "A paragraph starts: 'Cats and dogs both make good pets, but they need very different care.' What will it most likely do next?"
  options: ["Say how cats and dogs are alike and how they differ", "Explain why people get pets", "Tell a story about a cat", "Argue that dogs are better"]
  actual: "Say how they are alike and how they differ. Both and but signal a compare and contrast pattern."
```

## Try: name the pattern

```step
stage: run
insight: "Labelling four paragraphs on one topic by pattern shows the pattern is about how ideas connect, not what they're about."
try: { playground: board, starter: "text.yml#run", height: 470 }
hint: ["Click a paragraph, then choose its pattern.", "Look for the signal words: As a result, Unlike, One way to fix this, For example."]
smaller:
  check: { type: question, q: "'Unlike the old canteen, though, the new one has a salad bar.' What is this sentence doing?", options: ["Showing how two things differ", "Giving a cause", "Offering a solution"], answer: 0, feedback: [null, "Nothing here makes something else happen.", "There's no problem being fixed here."], explain: "Unlike sets two things side by side to show a difference: compare and contrast." }
check: { type: board, text: "Label each paragraph with its pattern.", when: "n_right = 4 and n_wrong = 0", explain: "As a result links a change to its effect. Both and unlike compare two canteens. One way to fix this answers a problem. For example backs up a claim." }
```

Were you right about cats and dogs? Both and but did the same job as both and unlike in the canteen paragraph.

## Worked example: signals and choices

```step
stage: investigate
insight: "Matching signals to patterns gives the toolkit; Nib's paragraph announces a comparison and never makes it; choosing a pattern for a purpose shows the choice serves the text."
tasks:
  - check:
      type: match
      q: "Match each set of signal words to its pattern."
      pairs:
        - ["because, so, as a result", "Cause and effect"]
        - ["both, unlike, whereas", "Compare and contrast"]
        - ["the problem is, one way to fix this", "Problem and solution"]
        - ["for example, this shows", "Claim and support"]
      explain: "Signal words tell the reader how the next idea connects to the last, so they show which pattern the writer is using."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph, one sentence per line. The first line promises to compare possums and sugar gliders. Click the first line where Nib should compare but talks about only one animal."
      answer: 2
      fault: logic
      misconception: pattern-half
      explain: "Line 2: Nib describes possums and never mentions gliders again. A compare and contrast paragraph needs both sides: 'Possums are about the size of a cat, whereas sugar gliders could sit in your hand.'"
  - check:
      type: question
      q: "A science report needs to show why a creek floods after heavy storms. Which pattern fits best?"
      options: ["Cause and effect", "Compare and contrast", "Claim and support", "Problem and solution"]
      answer: 0
      feedback: [null, "There's nothing to compare: the job is to show why something happens.", "It's not arguing a point; it's showing how one thing leads to another.", "Floods are a problem, but the report's job here is to explain why they happen, not how to fix them."]
      explain: "The purpose is to show why, so the writer needs causes and their effects. A different purpose, such as proposing a fix, would call for problem and solution."
```

### Signals to patterns

```worked
\text{Ask how the ideas connect} :: Does one cause another? Are two things set side by side? Is a problem fixed? Is a point backed up?
\text{Look for signal words} :: As a result, unlike, one way to fix this, for example.
\text{Check it is carried out} :: A comparison needs both sides; a cause needs its effect.
\text{Choose for the purpose} :: Pick the pattern that does what the text is for.
```

Now match the signals.

### Find Nib's slip

### Choose a pattern

## Vary: alike and different

```step
stage: modify
insight: "Colouring the alike signals and the different signals separately shows how a compare and contrast paragraph carries both sides."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["Chain 1: words that show the two animals are alike. Chain 2: words that show they are different.", "There are two alike words and three different words."]
check: { type: board, text: "Colour the alike signals (Chain 1) and the different signals (Chain 2).", when: "chains_ok = 2 and n_stray = 0", explain: "Both and also show what the cod and platypus share. Whereas, but and unlike show how they differ. A good comparison uses both kinds." }
```

## Practise: problem and solution

```step
stage: practise
insight: "Labelling a problem and solution paragraph sentence by sentence shows the pattern has phases: the problem (sometimes over two sentences), the solution and the result."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Click a sentence, then choose Problem, Solution or Result.", "Two sentences describe the problem. Which sentence is the fix, and which says what changed?"]
check: { type: board, text: "Label each sentence as part of the problem, the solution or the result.", when: "n_right = 4 and n_wrong = 0", explain: "The first two sentences set out the problem (crowded roads, children between cars). The walking bus is the solution, and the last sentence gives the result." }
```

## Make: your own pattern

```step
stage: make
insight: "Writing a paragraph in one chosen pattern, with its signal words, makes the pattern a writing tool."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Choose a pattern first. Cause and effect: something that happened and why. Compare and contrast: two things. Problem and solution: a problem you know.", "Use at least two signal or joining words, such as because, so, as a result, but or also."]
check: { type: board, text: "Write a paragraph of at least three sentences in one pattern, using at least two signal or joining words.", when: "is_written = 1 and n_sentences >= 3 and n_connectives >= 2", explain: "Your paragraph has a pattern the reader can follow. Ask a partner to name your pattern without being told." }
```

The board counts your sentences and joining words. Whether your pattern is clear and carried through is for your partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Naming the pattern of a paragraph in their own writing checks it is carried out."
check: { type: reflect, text: "I named the pattern of one paragraph in my own writing and checked it is carried out: a comparison covers both sides, a cause has its effect, a problem has a solution." }
```
