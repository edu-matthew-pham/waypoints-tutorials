---
order: 5
unit: core
title: "Spot the bias"
summary: "Bias is language that favours one side. A text can be biased through its word choices alone. The same facts can be worded to favour different people. Noticing the choices lets a reader weigh a text fairly."
language: maths
node: [AC9E6LA02 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "The same match, worded three ways. Each wording leans differently." }
hook: "'The coach strolled in.' 'The coach slunk in.' Same person, same door. Which writer likes the coach?"
---
**Bias** means language that favours one side. A text can be biased even when every fact in it is true, because the **word choices** decide who looks good.

A text can talk about several groups, so look at the words used for each one.

To weigh a text, ask: which words favour whom? A fair report picks plain words for every side.

## Predict: which side?

```step
stage: predict
insight: "Predicting which side a wording favours previews that word choice can lean without false facts."
check:
  type: predict
  q: "A report says: 'The principal bravely announced the new timetable.' Which side does the word 'bravely' favour?"
  options: ["Neither, because it is only a fact", "The principal", "The students"]
  actual: "The principal. 'Bravely' praises the announcement. A fair report would say only that the principal announced it."
```

## Try: label the lean

```step
stage: run
insight: "Labelling six sentences by the side they favour shows how word choices lean."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Which word takes a side?", "Is there a plain version of the same fact?"]
smaller:
  check: { type: question, q: "'The council cunningly passed the ban.' Which word leans?", options: ["passed", "cunningly", "ban"], answer: 1, feedback: ["Passed reports what happened.", null, "Ban names the rule."], explain: "Cunningly suggests a sly trick, which leans against the council." }
check: { type: board, text: "Label each sentence: favours the ban, against the ban, or neutral.", when: "n_right = 6", explain: "Wisely, finally and calm favour the ban. Heavy-handed, lifeline and forced to surrender are against it. The two plain sentences are neutral." }
```

Which sentence was hardest to place? Look for the word that decides it.

## Worked example: whose side is the word on?

```step
stage: investigate
insight: "Sorting phrases by side, finding a biased line in a report that names both sides and seeing bias in true facts shows how bias works."
tasks:
  - check:
      type: sort
      q: "Which side does each phrase favour?"
      options: ["Favours the council", "Favours the students"]
      items:
        - ["The sensible rule protects learning.", "Favours the council", "Sensible praises the council's rule."]
        - ["The council showed leadership.", "Favours the council", "Leadership praises the council."]
        - ["The harsh rule punishes everyone.", "Favours the students", "Harsh and punishes criticise the rule."]
        - ["A fair decision at last.", "Favours the council", "Fair and at last praise the decision."]
        - ["The council ignored student voices.", "Favours the students", "Ignored criticises the council."]
        - ["A heavy-handed decision.", "Favours the students", "Heavy-handed criticises the decision."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib says this report is balanced because it names both sides. One sentence still takes a side. Click it."
      answer: 3
      fault: logic
      misconception: both-sides-balanced
      explain: "Line 3 names parents on both sides, but 'reasonable' praises one group and 'complained noisily' criticises the other. Naming both sides is not enough."
  - check:
      type: question
      q: "Two reports give the same number, 40 people. One says 'a mere 40' and one says 'a passionate 40'. What does this show?"
      options: ["Numbers cannot be biased", "The same fact can be worded to favour different sides", "One report has the wrong number"]
      answer: 1
      feedback: ["The words around the number carry the lean.", null, "Both give 40."]
      explain: "Mere makes 40 sound small. Passionate makes 40 sound strong. The fact is the same."
```

### Whose side is the word on?

```worked
\text{Find the word that judges} :: Praise or blame, not just a fact.
\text{Ask: who benefits?} :: Which side looks better because of it?
\text{Try a plain version} :: Could the same fact be said without a judging word?
```

### Spot the line that takes a side

### Same fact, different lean

## Vary: make it fair

```step
stage: modify
insight: "Choosing plain wording for each side shows how a fair report is written."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Which word judges?", "Which word only reports?"]
check: { type: board, text: "Choose the plain wording for a fair report.", when: "n_gaps_right = 2", explain: "Decided and some parents only report. Rammed through, sneaked in, angry mob and pesky take a side." }
```

## Practise: colour who the word favours

```step
stage: practise
insight: "Colouring words that favour each side applies bias to a whole paragraph."
try: { playground: board, starter: "text.yml#practise", height: 380 }
hint: ["Which words praise the council?", "Which words speak for the students?"]
check: { type: board, text: "Colour the words that favour the council one colour and the words that favour the students another.", when: "chains_ok = 2 and n_stray = 0", explain: "Thoughtful and sensible favour the council. Harsh and powerless favour the students. The paragraph leans both ways, one sentence at a time." }
```

## Make: a fair report

In your own document, write at least four sentences reporting a disagreement about the school canteen. Name both sides, use plain words that take no side, and use no exclamation marks.

Here is one example: "Some students want the canteen to open earlier. They say many arrive hungry. The canteen manager says there is not enough staff before nine. The school council will discuss both views next week."

Then swap with a partner. Circle any word that takes a side. Does each side get a fair say?

```step
stage: make
insight: "Writing a fair report that names both sides puts the idea to use."
hint: ["What did each side want?", "Which plain words describe it?"]
check: { type: reflect, text: "I wrote a fair report of at least four sentences that names both sides, and a partner and I checked that no word takes a side." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Looking for bias in a real text puts the idea to use outside the board."
check: { type: reflect, text: "I read a real report and asked which words favour one side." }
```

## Wider: two reports of one event

```step
stage: make
tier: wider
insight: "Comparing two reports of one event applies bias to another source at the same level."
check:
  type: reasoning
  q: "Imagine two school newsletters report the same sports result. Give one word each might choose to favour its own team, and say what it does."
  placeholder: "Newsletter A might write ... Newsletter B ..."
  models:
    - title: "A strong answer"
      text: "A might say 'a convincing win' and B 'a narrow loss'. Convincing praises the winner, and narrow softens the loss."
    - title: "A different view that also works"
      text: "A might say 'dominated', B might say 'were unlucky'. Each choice makes its own team look better."
  criteria: ["I gave a word for each.", "I said what each word does.", "I did not say one is true and one is false."]
  explain: "Both can be true while leaning toward their own team."
```
