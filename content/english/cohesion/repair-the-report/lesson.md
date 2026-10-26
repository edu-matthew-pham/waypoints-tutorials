---
order: 9
unit: challenge
title: "Challenge: repair the report"
summary: "Nib's group audited the school's rubbish and wrote a report, but it is hard to follow. Students repair it with four moves from the course: fix unclear pointing words, choose joining words that do the right job, put the paragraphs in the order the overview promises, and add the explanation a paragraph is missing."
language: maths
node: [AC9E7LA04 n2, AC9E8LA04 n2, AC9E6LA04 n3]
hook: "A report has all the right facts, but readers keep getting lost. Can you fix it without changing a single fact?"
---
Nib's class weighed the rubbish in the school's bins for a week. Their facts are right, but the report is hard to follow. You will repair it in four parts, with four moves from this course: pointing words, joining words, the overview's order, and explaining evidence.

## Predict: what's the problem?

```step
stage: predict
insight: "Naming what makes the report hard to follow before fixing it makes students choose the right move for each problem."
check:
  type: predict
  q: "A reader says: 'I kept asking what it meant, some ideas didn't connect, the paragraphs jumped around, and some facts just sat there.' Which moves will fix that?"
  options: ["Clear pointing words, joining words, an order that follows the overview, and explanations", "Longer sentences", "More facts", "A better title"]
  actual: "Clear pointing words fix 'what does it mean', joining words connect the ideas, following the overview fixes the jumping, and explanations stop facts just sitting there. That is the plan for this challenge."
```

## Part 1: fix the pointing words

```step
stage: practise
insight: "Mixing clear and unclear pointing words makes students judge each one, not just trace it."
try: { playground: board, starter: "text.yml#links", height: 340 }
hint: ["Trace each dotted word. If it could point to two things, press Not clear.", "After Not clear, choose a fix. Only one fix keeps the facts right: the last sentence says where the food scraps came from."]
smaller:
  check: { type: question, q: "'Our class sorted the rubbish from the canteen bin and the classroom bin. It was mostly food scraps.' Could It be the canteen rubbish? Could it be the classroom rubbish?", options: ["Both could fit, so it isn't clear", "Only the canteen rubbish fits", "Only the classroom rubbish fits"], answer: 0, feedback: [null, "Swap in the classroom rubbish. Does the sentence still work?", "Swap in the canteen rubbish. Does the sentence still work?"], explain: "Both kinds of rubbish fit, so a reader can't tell. That makes It a pointing word to mark Not clear and fix." }
check: { type: board, text: "Trace the clear pointing words. Mark the two unclear ones as Not clear and fix them so the facts stay right.", when: "n_right = 4 and n_wrong = 0 and n_fixed = 2", explain: "We and they (the scraps) are clear. Each It could be the canteen rubbish or the classroom rubbish. The last sentence says the food scraps came from the canteen, so the first It is the canteen rubbish and the paper is the classroom rubbish." }
```

## Part 2: joining words

```step
stage: practise
insight: "Choosing joining words in the report's own context applies the warm-up move inside a real text."
try: { playground: board, starter: "text.yml#joins", height: 300 }
hint: ["For each gap, ask how the second idea connects: adds, turns against, result or time?", "Having no paper recycling goes against what you'd expect, so it is a turn."]
check: { type: board, text: "Choose a joining word for each gap.", when: "n_gaps_right = 3", explain: "However turns against the hope that paper is recycled, As a result says what happens because of it, and Also adds the bottles: another thing, not the last step." }
```

## Part 3: put the report in order

```step
stage: practise
insight: "Labelling and reordering the whole report applies the overview's map to a text that has lost it."
try: { playground: board, starter: "text.yml#order", height: 450 }
hint: ["Label each paragraph first, then use Move up and Move down.", "The overview says food scraps first, then paper and bottles."]
check: { type: board, text: "Label each paragraph and put the report in the order its overview promises.", when: "n_right = 4 and in_order = 1", explain: "Overview, food scraps, paper and bottles, then a conclusion that pulls them together. The reader now knows where they are at every point." }
```

## Part 4: explain the recommendation

```step
stage: practise
insight: "Adding the missing explanation to the report's key claim finishes the repair with the hardest move."
try: { playground: board, starter: "text.yml#explain", height: 320 }
hint: ["Click the example sentence, then press Add a sentence after and type your explanation.", "Say how 23 kilograms of food shows a compost bin would make the biggest difference. Then label it."]
check: { type: board, text: "Add an explanation that says how the evidence supports the claim, and label it.", when: "has_explain = 1 and n_empty = 0", explain: "The claim, the evidence and your explanation now work together: the reader sees why the compost bin comes first." }
```

The board checks that your explanation is there. Read the claim and your explanation together: do they connect?

## Make: repair your own

```step
stage: make
tier: typical
insight: "Running the same four checks on their own longer writing is the course's transfer step."
check: { type: reflect, text: "I took a report or essay of my own and checked four things: every pointing word is clear, each joining word does the right job, the paragraphs follow the introduction's order, and each piece of evidence is explained. I fixed at least one of each that needed it." }
```
