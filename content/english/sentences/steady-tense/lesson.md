---
order: 9
unit: shapes
title: Keep the tense steady
summary: "The tense of a verb tells the reader when something happens: past (walked), present (walk) or future (will walk). A recount or story picks a tense and keeps it. A slip into another tense makes the reader wonder whether time has moved. A writer moves tense on purpose, with a time word, and not by accident."
language: maths
node: [AC9E7LA06 n1, AC9E7LA06 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "One slip, 'watch', in a past-tense recount. The reader wonders if time has jumped." }
hook: "'Yesterday we walked to the beach, and then we swim.' What went wrong, and why does it matter?"
---
The tense of a verb tells the reader when.

- **Past:** *walked*, *swam*, *were*
- **Present:** *walk*, *swim*, *is*
- **Future:** *will walk*, *will swim*, *will be*

A diary, recount or story keeps one tense. Changing tense without a reason makes the reader stop and wonder when it happened.

## Predict: spot the slip

```step
stage: predict
insight: "Predicting the slip before learning the names shows students already hear a tense that does not fit."
check:
  type: predict
  q: "'Yesterday we walked to the beach, and then we swim in the creek.' Which word does not fit?"
  options: ["swim", "walked", "Yesterday", "creek"]
  actual: "swim. The sentence is about yesterday, so the verb should be past: swam."
```

## Try: name the tense

```step
stage: run
insight: "Labelling the tense of whole sentences shows students the three forms and the time clues that go with them."
try: { playground: board, starter: "text.yml#run", height: 480 }
hint: ["Look at the verb, and at any time word like yesterday, now or tomorrow.", "Will plus a verb is future. A verb that tells what already happened is past."]
smaller:
  check: { type: question, q: "'We will visit the museum next week.' Which tense is the verb?", options: ["Future", "Past", "Present"], answer: 0, feedback: [null, "Past tense tells what already happened.", "Present tense tells what happens now or often."], explain: "Will visit looks ahead, so it is future." }
check: { type: board, text: "Label each sentence: past, present or future.", when: "n_right = 6", explain: "Past tells what happened, present what is true now or happens often, and future what will happen." }
```

Were you right about the beach? The slip was swim: it should be swam.

## Worked example: why the tense must stay steady

```step
stage: investigate
insight: "Sorting verbs by tense, finding a slip in a diary and saying what it does to the reader shows why a text keeps one tense."
tasks:
  - check:
      type: sort
      q: "Sort each verb form by its tense."
      options: ["Past", "Present", "Future"]
      items:
        - ["jumped", "Past", "It tells what already happened."]
        - ["swims", "Present", "It tells what happens now or often."]
        - ["will run", "Future", "Will plus a verb looks ahead."]
        - ["grew", "Past", "Grew is the past of grow."]
        - ["arrives", "Present", "It tells what happens now or often."]
        - ["will arrive", "Future", "Will plus a verb looks ahead."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's diary entry about last Saturday, one sentence per line. One line slips into a different tense. Click it."
      answer: 3
      fault: logic
      misconception: tense-slip
      explain: "Line 3 says 'we walk' in a diary about last Saturday. It should be 'we walked' to match the other lines."
  - check:
      type: question
      q: "Why does an accidental change of tense confuse a reader?"
      options: ["They cannot tell if the time has jumped", "Present tense is always wrong", "It makes the sentence too long", "It breaks a spelling rule"]
      answer: 0
      feedback: [null, "Present tense is right in other texts, such as instructions.", "Length is not the problem.", "Tense is grammar, not spelling."]
      explain: "A change of tense signals a change of time. If the writer did not mean it, the reader stops to work out when things happen."
```

### Keep the tense steady

```worked
\text{Decide when it happens} :: Past for a recount, present for facts or instructions, future for plans.
\text{Read the verbs} :: Does each one match the time you chose?
\text{Change tense only on purpose} :: Use a time word like Tomorrow, so the reader knows.
```

### Which tense?

### Find the slip

## Vary: choose the matching tense

```step
stage: modify
insight: "Choosing each verb form to match a recount shows how the context decides the tense."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["Read the sentence before each gap and ask when it is about.", "Pick the form that matches the verbs around it."]
check: { type: board, text: "Choose the verb form that keeps the tense steady.", when: "n_gaps_right = 3", explain: "The recount is in the past, so each gap needs a past form: packed, set and reached." }
```

## Practise: catch the slips

```step
stage: practise
insight: "Colouring the verbs that break the tense trains the eye to notice a slip while reading."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Work out the tense of the whole recount, then check each verb against it.", "Click only the verbs that do not match it."]
check: { type: board, text: "Colour the two verbs that slip out of the past tense.", when: "chains_ok = 1 and n_stray = 0", explain: "The recount is in the past. The verbs 'carry' and 'sit' do not match, so they are the slips." }
```

## Make: a diary entry

In your own document, write a diary entry about a real day last week, or one you make up. Write at least five sentences (at least 50 words), in the order things happened. Use the past tense.

Here is one example: "Last Saturday I **woke** up early because the sun **was** already shining. I **ate** breakfast and **packed** my bag. My cousin **arrived** at nine, and we **rode** our bikes to the park."

When you finish, read only the verbs. Then swap with a partner. Underline every verb in each other's entry. Are they all in the past tense?

```step
stage: make
insight: "Writing a diary entry about a real day in one tense puts steady tense to work in a real text type."
hint: ["Write about a day last week, in the order it happened. Use the past tense.", "When you finish, read only the verbs and check each matches."]
check: { type: reflect, text: "I wrote a diary entry of at least five sentences in the past tense, and a partner and I underlined every verb and checked that each one matches." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Reading the verbs in a real piece of writing puts the check to use outside the board."
check: { type: reflect, text: "I underlined the verbs in a piece of my own writing and fixed at least one that slipped into a different tense." }
```
