---
order: 2
unit: warmup
title: Said or reported
summary: "Direct speech quotes the speaker's exact words inside quotation marks. Indirect speech reports what was said, with no quotation marks, and usually moves the tense back (am becomes was) and changes the pronouns (I becomes she). A writer chooses between them: direct speech lets the reader hear the speaker, indirect speech sums things up."
language: maths
node: [AC9E4LA07 n1, AC9E4LA07 n2, AC9E4LA07 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Same message, two ways. The first quotes the lifeguard's exact words. The second reports them: no quotation marks, and is becomes was." }
hook: "'I am starving,' said Ravi. Ravi said he was starving. Which one lets you hear Ravi?"
---
There are two ways to tell the reader what someone said.

- **Direct speech** gives the exact words, inside quotation marks, with a saying verb and the speaker: *'The soup is hot,' said Dad.*
- **Indirect speech** reports what was said, with no quotation marks: *Dad said the soup was hot.* The tense usually moves back (*is* becomes *was*) and the pronouns change (*I* becomes *he*, *we* becomes *they*).

## Predict: which one reports?

```step
stage: predict
insight: "Spotting the version with no quotation marks and a changed tense shows students that reporting changes the words as well as the punctuation."
check:
  type: predict
  q: "Zoe said, 'I am tired.' Which version reports her words without quoting them?"
  options: ["Zoe said she was tired.", "Zoe said, 'I am tired.'", "'She was tired,' said Zoe.", "Zoe said, 'she was tired.'"]
  actual: "'Ava said she was tired.' There are no quotation marks, I became she, and am became was. The other versions keep quotation marks."
```

## Try: direct or indirect?

```step
stage: run
insight: "Labelling six sentences as direct or indirect shows that the quotation marks and the changed words are the two clues."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Click a sentence, then choose Direct speech or Indirect speech.", "Look for quotation marks first. If there are none, look at what the verb and the pronouns are doing."]
smaller:
  check: { type: question, q: "Which sentence gives the speaker's exact words?", options: ["'I'm hungry,' said Jo.", "Jo said she was hungry.", "Jo told us that she was hungry."], answer: 0, feedback: [null, "This reports what Jo said in the writer's own words.", "Told us that is a sign of reporting, not quoting."], explain: "Quotation marks around Jo's own words make it direct speech." }
check: { type: board, text: "Label each sentence as direct speech or indirect speech.", when: "n_right = 6 and n_wrong = 0", explain: "'We are lost,' said Mia, Ben asked, 'Where is the bridge?' and 'Stay on the track,' the ranger told us all quote exact words. The other three report what was said, with no quotation marks and changed words." }
```

Were you right about Ava? 'Ava said she was tired' reported her words, and 'I am' became 'she was'.

## Worked example: what changes?

```step
stage: investigate
insight: "Sorting the features of each kind, catching a report that forgot to shift, and choosing which to use for a purpose shows that each form is a choice."
tasks:
  - check:
      type: sort
      q: "Sort each feature by the kind of speech it belongs to."
      options: ["Direct speech", "Indirect speech"]
      items:
        - ["The speaker's exact words", "Direct speech", "Direct speech keeps the words as they were said."]
        - ["Quotation marks around the speech", "Direct speech", "Quotation marks show where the speaker's own words start and stop."]
        - ["No quotation marks", "Indirect speech", "Indirect speech reports the words, so nothing is quoted."]
        - ["'I' changes to 'she' or 'he'", "Indirect speech", "The writer reports it from outside, so the pronouns change."]
        - ["The tense usually moves back, as in 'am' to 'was'", "Indirect speech", "The report is made after the words were said, so the verb moves back in time."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's recount, one sentence per line. One line tries to report what someone said but keeps the speaker's own words. Click it."
      answer: 3
      fault: logic
      misconception: speech-not-shifted
      explain: "Line 3: 'Max told his mum that I am hungry.' still has the speaker's I and am. Reported, it becomes 'Max told his mum that he was hungry.'"
  - check:
      type: question
      q: "A news report must sum up what four people said at a long meeting in two lines. Which kind of speech fits better?"
      options: ["Indirect speech, which sums up what each person said", "Direct speech, which quotes every person's exact words", "Direct speech, which needs no saying verb", "Neither, because speech can't be summed up"]
      answer: 0
      feedback: [null, "Quoting four people would take far more than two lines.", "Direct speech still needs the speaker named, and it is the longer choice here.", "Reporting is exactly how writers sum up what was said."]
      explain: "Indirect speech is the writer's summary, so it is quick. Direct speech is for moments when the reader should hear the exact words."
```

### Two ways to tell what was said

```worked
\text{Look for quotation marks} :: Marks around the exact words mean direct speech.
\text{Check the words inside} :: In a report, the pronouns and the tense have moved.
\text{Ask what the writer wants} :: To let the reader hear the speaker, or to sum up what was said?
```

Now sort the features.

### Find the report that did not change

### Which suits the job?

## Vary: report what she said

```step
stage: modify
insight: "Building the reported version from pieces shows that the speaker's words are rewritten, not just unquoted."
try: { playground: board, starter: "text.yml#vary", height: 420 }
hint: ["Who is speaking, and who is the report about?", "The report is made after the words were said."]
check: { type: board, text: "Build the sentence that reports what Ava said.", when: "in_order = 1", explain: "Ava said she was hungry. I became she, and am became was. The two decoys keep the speaker's own words." }
```

## Practise: punctuate what was said

```step
stage: practise
insight: "Choosing the mark that goes before the closing quotation mark shows that direct speech has its own punctuation rules."
try: { playground: board, starter: "text.yml#practise", height: 400 }
hint: ["Is each quoted part a question or a statement?", "Read each one aloud and listen to where the speaker's voice stops or goes up."]
check: { type: board, text: "Choose the punctuation for each box.", when: "n_right = 3 and n_wrong = 0", explain: "A question mark closes a question, a comma closes a statement when the saying part follows, and a comma comes before the opening quotation mark when the saying part comes first." }
```

## Make: a newsletter item

```step
stage: make
insight: "Writing a newsletter item that quotes one person and reports another puts both kinds of speech to work for a reader."
try: { playground: board, starter: "text.yml#make", height: 360 }
hint: ["Choose a school event: a sports day, a concert or a visit. Write what happened.", "Quote one person's exact words in quotation marks, and report what a second person said without quoting them."]
check: { type: board, text: "Write at least three sentences of a newsletter item. Include quotation marks around one person's exact words.", when: "n_sentences >= 3 and n_quotes >= 1", explain: "Your item uses direct speech to let the reader hear one person. Ask a partner to find the sentence where you reported speech instead, and check the tense and pronouns changed." }
```

The board counts sentences and opening quotation marks. Whether your reported speech has changed its tense and pronouns is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for each kind of speech puts the move to use outside the board."
check: { type: reflect, text: "I checked a piece of my own writing: every quotation has its marks and punctuation, and every reported sentence has no marks and has changed its tense and pronouns." }
```
