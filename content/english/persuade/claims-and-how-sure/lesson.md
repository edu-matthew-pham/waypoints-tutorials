---
order: 2
unit: warmup
title: "Claims and how sure"
summary: "A bare assertion is a claim with nothing behind it. A writer can back a claim with evidence or a source, and can soften it with small words such as may, often, some and it seems. Softening is honest about how sure the writer is, and it changes how a reader trusts the writer."
language: maths
node: [AC9E5LA02 n1, AC9E5LA02 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Words that say how sure the writer is. A reader can tell a guess from a promise." }
hook: "'The park will close.' 'The park might close.' Same park. What changed about how sure the writer is?"
---
A **bare assertion** is a claim with nothing behind it: *Everybody knows homework is pointless.* It sounds sure, but a reader has no reason to believe it.

A writer can **back up** a claim with evidence, such as a count, or with a named source. A writer can also **temper** a claim, which means soften it so it fits what the writer really knows. Four small moves do this:

- A **can-or-will word**: *may*, *might*, *could*, *will*.
- A **how-often word**: *sometimes*, *often*, *always*.
- A **how-many word**: *some*, *most*, *all*.
- A **distancing phrase**: *it seems that*, *research suggests*.

A tempered claim is honest about its limits, so readers often trust the writer more.

## Predict: which claim would you trust?

```step
stage: predict
insight: "Predicting which claim a careful reader trusts previews that backing and softening make a claim more believable."
check:
  type: predict
  q: "Which claim would a careful reader trust most?"
  options: ["Late-night phones always ruin sleep.", "Late-night phones can cut into sleep, a sleep clinic reports.", "Everyone knows that late-night phones ruin sleep."]
  actual: "The second. It softens the claim with 'can' and names where it comes from. The other two sound sure but give no reason to believe them."
```

## Try: place each on the scale

```step
stage: run
insight: "Placing six sentences on a possible-to-certain scale shows that small words change how sure a claim sounds."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Which words leave room for the claim to be wrong?", "Which words leave no room?"]
smaller:
  check: { type: question, q: "Which sounds more sure: 'The match might finish early' or 'The match will finish early'?", options: ["might", "will", "They sound equally sure"], answer: 1, feedback: ["Might leaves room for doubt.", null, "Might and will say different things about how sure the writer is."], explain: "Will leaves no room for doubt, so it sounds more sure than might." }
check: { type: board, text: "Place each sentence: possible, probably or certain.", when: "n_right = 6 and n_wrong = 0", explain: "Might and could leave the closing as a possibility. Will probably and is likely to say it is more likely than not. Will and is certain to leave no doubt." }
```

Did a small word change how sure the sentence sounded? That is tempering.

## Worked example: bare or backed?

```step
stage: investigate
insight: "Sorting claims into bare and backed, finding a bare assertion in a paragraph and saying why a writer softens a claim shows how a claim earns trust."
tasks:
  - check:
      type: sort
      q: "Is each claim bare, or backed or tempered?"
      options: ["Bare assertion", "Backed or tempered"]
      items:
        - ["Everyone knows school starts too early.", "Bare assertion", "It gives no reason."]
        - ["A survey of 60 students found most feel tired before 9 am.", "Backed or tempered", "It gives a count."]
        - ["Cats are better than dogs.", "Bare assertion", "It gives no reason."]
        - ["Many students may find early starts hard, the school nurse says.", "Backed or tempered", "It softens the claim and names a source."]
        - ["Video games are bad for you.", "Bare assertion", "It gives no reason."]
        - ["Some video games can help with planning, a trial in one class suggested.", "Backed or tempered", "It softens the claim and points to a trial."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here are Nib's reasons for a school vegetable garden, one per line. One line is a bare assertion. Click it."
      answer: 3
      fault: logic
      misconception: bare-assertion
      explain: "Line 3 says 'Everybody knows' and gives nothing to check. The other lines give a count, a survey or a reason a canteen could act on."
  - check:
      type: question
      q: "A writer changes 'Homework ruins sleep' to 'Homework may cut into sleep for some students'. Why?"
      options: ["The claim now admits its limits, which makes the writer easier to trust", "The claim now sounds more certain, so readers will not question it", "The writer has hidden their view so nobody can disagree"]
      answer: 0
      feedback: [null, "The new words make the claim less certain, not more.", "The view is still there. It now says how far it goes."]
      explain: "May and some show the claim has limits. A reader sees an honest writer and is more likely to trust the claim."
```

### Bare or backed?

```worked
\text{Read the claim} :: Does it give a count, a source or a reason?
\text{Look for small words} :: May, often, some and it seems show how far the claim goes.
\text{Ask about trust} :: Would a careful reader believe it, and why?
```

### Spot the bare assertion

### Why soften a claim?

## Vary: fit the words to the evidence

```step
stage: modify
insight: "Choosing a can-or-will word that fits the evidence shows how much a claim should say."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["How much evidence is there?", "Which word says no more than the evidence does?"]
check: { type: board, text: "Choose the word that fits what the evidence shows.", when: "n_right = 2 and n_wrong = 0", explain: "Six of thirty is a small group, so 'might' fits. The radar is not clear yet, so 'might' also fits the rain." }
```

## Practise: find the softening words

```step
stage: practise
insight: "Colouring the softening words in a short paragraph applies the four moves to a new text."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Which words leave room for the claim to be wrong?", "Which words say how many or how often?"]
check: { type: board, text: "Colour every softening word.", when: "chains_ok = 1 and n_stray = 0", explain: "May, some, often and seems all soften the claims. The rest of the paragraph is plain." }
```

## Make: a claim that earns trust

```step
stage: make
insight: "Writing a claim, softening it and backing it up puts tempering to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["What do you really know about school lunches?", "Which word shows how sure you are?"]
check: { type: board, text: "Write at least three sentences about school lunches: a claim softened with a word such as may, might, could or probably, and one thing that backs it up.", when: "n_sentences >= 3 and n_modals >= 1", explain: "You wrote a softened claim. Ask a partner to point to the word that shows how sure you are, and to the sentence that backs it up." }
```

The board counts sentences and the words may, might, could, probably and a few others. It cannot tell whether your evidence is good, so ask a partner or your teacher.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real claim for backing puts the idea to use outside the board."
check: { type: reflect, text: "I read a real claim in an advertisement or post, and asked what backs it up." }
```

## Wider: bare claims in posts

```step
stage: make
tier: wider
insight: "Looking at why people accept bare claims applies the idea to another setting at the same level."
check:
  type: reasoning
  q: "Posts and advertisements often make bare claims. Give one reason people accept them, and one question you could ask before you do."
  placeholder: "People accept them because ... I could ask ..."
  models:
    - title: "A strong answer"
      text: "People accept them because they sound sure and the claim fits what they already believe. I could ask, 'What is this claim based on?'"
    - title: "A different view that also works"
      text: "People accept them because many others share them. I could ask who first made the claim and what they know."
  criteria: ["I gave one reason.", "I wrote a question I could ask.", "I did not blame the people who accept the claims."]
  explain: "A claim feels more believable when it fits what we already think, so a question about its backing helps."
```
