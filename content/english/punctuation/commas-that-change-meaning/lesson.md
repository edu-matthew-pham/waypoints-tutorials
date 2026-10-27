---
order: 3
unit: core
title: Commas that change meaning
summary: "A comma does a job in the structure of a sentence: it separates the items in a list, it ends a dependent clause that opens a sentence, and it sets off the words that introduce speech. It is not a place to take a breath. A comma in the wrong place, or a missing one, can change what a sentence says."
language: maths
node: [AC9E6LA09 n1, AC9E6LA09 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The comma ends the opening clause, 'When the bell rang'. The main clause starts after it." }
hook: "'Let's eat Grandma.' One comma decides whether it is dinner or a disaster."
---
A comma has a few clear jobs:

- **In a list:** it stands in for *and* between items. *We saw emus, kangaroos and wombats.*
- **After an opening clause:** a clause that cannot stand alone and starts the sentence is followed by a comma. *If it rains, the picnic moves inside.*
- **With speech:** a comma comes between the words that introduce speech and the speech itself. *Ben said, 'Follow me.'*

A comma is **not** a breath mark. You cannot put one wherever you would pause when reading aloud. A comma between the subject and its verb (*The bus, was late.*) splits a sentence in a place where it should stay whole.

## Predict: where does the comma go?

```step
stage: predict
insight: "Predicting where the comma goes shows that it follows a whole opening clause, not a single word."
check:
  type: predict
  q: "'When the bell rang the class lined up.' Where does the comma go?"
  options: ["After rang", "After bell", "After class", "After lined"]
  actual: "After rang. 'When the bell rang' cannot stand alone, so it is a dependent clause. The comma comes after it, just before the main clause 'the class lined up'."
```

## Try: what is each comma for?

```step
stage: run
insight: "Labelling the job of each comma shows that a comma has a reason, and that the same mark does different jobs."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Look at the words just before and after the comma. What is the comma separating?", "Does the sentence start with a clause that cannot stand alone? Does it have a list, or someone speaking?"]
smaller:
  check: { type: question, q: "'We packed torches, maps and rope.' What does the comma do?", options: ["It separates the items in a list", "It marks where to breathe", "It ends an opening clause"], answer: 0, feedback: [null, "A comma is not for breathing. It does a job in the sentence.", "There is no opening clause here: the sentence starts with the main clause."], explain: "The comma takes the place of 'and' between torches and maps." }
check: { type: board, text: "Label what the comma in each sentence does: list, opening clause or speech.", when: "n_right = 6 and n_wrong = 0", explain: "Torches and maps are separated, so that comma is in a list. 'When the bell rang' and 'Because the creek was high' cannot stand alone, so a comma follows each. 'Ben said,' and 'Ava asked,' introduce speech." }
```

Was the comma after *rang*? It ends the opening clause.

## Worked example: does the comma belong?

```step
stage: investigate
insight: "Sorting commas by whether they belong, spotting a comma that splits a sentence, and stating the rule for where a comma goes shows that commas follow structure and not breathing."
tasks:
  - check:
      type: sort
      q: "Does the comma in each sentence belong?"
      options: ["The comma belongs", "The comma does not belong"]
      items:
        - ["When the rain stopped, we climbed out of the tent.", "The comma belongs", "An opening clause is followed by a comma."]
        - ["We knew, that the creek was high.", "The comma does not belong", "The words 'that the creek was high' complete what we knew, so they stay joined to it."]
        - ["Ben said, 'Follow me.'", "The comma belongs", "A comma comes between the words that introduce speech and the speech."]
        - ["We climbed the steep, hill.", "The comma does not belong", "Steep describes hill, so nothing separates them."]
        - ["Mia packed a torch, a map and a rope.", "The comma belongs", "It stands in for 'and' between the first two items."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's excursion diary, one sentence per line. One line has a comma that splits a sentence in the wrong place. Click it."
      answer: 3
      fault: logic
      misconception: comma-as-pause
      explain: "Line 3 has a comma between the subject, 'Our guide', and its verb, 'pointed'. A subject and its verb stay together. Nib put the comma where the voice pauses."
  - check:
      type: question
      q: "Which is the best rule for where a comma goes?"
      options: ["Wherever you would pause to breathe when you read the sentence aloud", "Where the structure calls for one: between list items, after an opening clause, and with speech", "After every fourth or fifth word, so that no sentence gets too long"]
      answer: 1
      feedback: [null, null, "Length does not decide it. The same sentence needs the same commas whether it is long or short."]
      explain: "Commas follow the structure of the sentence. Pausing to breathe is not a reason, because people pause in different places."
```

### Does the comma belong?

```worked
\text{Find the structure} :: Is it a list, an opening clause, or speech?
\text{If it is one of those} :: A comma belongs there.
\text{If it is not} :: A comma splits the sentence for no reason.
```

### Spot the stray comma

### What is a comma for?

## Vary: add a comma or leave it out

```step
stage: modify
insight: "Choosing a comma or none in several structures shows each one needs a different decision."
try: { playground: board, starter: "text.yml#vary", height: 380 }
hint: ["Name the structure in each sentence first: list, opening clause, speech, or none.", "Is the gap between a subject and its verb?"]
check: { type: board, text: "Choose a comma or no comma for each box.", when: "n_right = 4 and n_wrong = 0", explain: "The list needs a comma, the opening clause needs one, and so does the speech. The subject 'The tired hikers' stays joined to its verb, so no comma." }
```

## Practise: commas in a recount

```step
stage: practise
insight: "Choosing commas across a mix of structures turns the rule into a habit."
try: { playground: board, starter: "text.yml#practise", height: 420 }
hint: ["What is the structure in each sentence?", "Which gaps sit between a subject and its verb?"]
check: { type: board, text: "Choose a comma or no comma for each box.", when: "n_right = 5 and n_wrong = 0", explain: "Commas go after the list item, after each opening clause, and before the speech. 'The creek rose' stays whole." }
```

## Make: a recount of an excursion

```step
stage: make
insight: "Writing a short recount with a list, an opening clause and speech puts all three comma jobs to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Write about an excursion or an event at school.", "Include something you packed or saw as a list, a sentence that starts with a clause like 'When we arrived', and something someone said."]
check: { type: board, text: "Write at least four sentences with at least three commas and some speech.", when: "n_sentences >= 4 and n_commas >= 3 and n_quotes >= 1", explain: "Your recount has commas and speech. Ask a partner to find each comma and say which job it does: list, opening clause or speech." }
```

The board counts commas and speech. Whether each comma does a job is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking each comma in real writing against the three jobs puts the rule to use outside the board."
check: { type: reflect, text: "I checked each comma in a piece of my own writing and could name its job." }
```

## Wider: commas in a science method

```step
stage: make
tier: wider
insight: "Punctuating a method applies the same comma jobs at the same level in a new text type."
check:
  type: reasoning
  q: "A science method reads: 'When the water boils turn off the heat and add salt sugar and food dye.' Add the commas, and say what each comma does."
  placeholder: "When the water boils, ... This comma ..."
  models:
    - title: "A strong answer"
      text: "When the water boils, turn off the heat and add salt, sugar and food dye. The first comma ends the opening clause 'When the water boils'. The second comma separates salt from sugar in the list."
    - title: "A different view that also works"
      text: "When the water boils, turn off the heat and add salt, sugar and food dye. One comma follows the clause that starts the sentence, so the reader knows the instruction begins at 'turn'. The other stands in for 'and' between salt and sugar."
  criteria: ["I put a comma after the opening clause.", "I put a comma between the first two items in the list.", "I named the job of each comma."]
  explain: "A method is full of opening clauses and lists. The same two jobs for commas apply."
```
