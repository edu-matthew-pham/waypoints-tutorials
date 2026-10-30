---
order: 1
unit: first
optional: true
title: Primary or secondary? It is about when, not how old
node: AC9HH7S02 n1
summary: "A primary source comes from the time of the event you are investigating. A secondary source was made later, by someone looking back. The test is the time of the event, not how old the source is: a very old book written long after an event is still secondary, and something made last week can be primary for an event last week. Getting this right matters because every later question about a source depends on knowing which kind it is."
language: maths
hook: "Sima Qian's history of China is over two thousand years old. Is it a primary source about the Qin? It feels like it should be. Let's check."
---
Historians sort sources into two kinds, and the sorting depends on the question they are asking.

A **primary source** comes from the time of the event you are investigating. It was made then, by people who were there or had to deal with it. A **secondary source** was made later, by someone looking back at the event.

The test is not how old the source is. The test is: **was it made at the time of the event?**

## Predict: which is primary?

```step
stage: predict
insight: "Committing to an answer shows whether students sort by age or by time of the event."
check:
  type: predict
  q: "You are investigating how the First Emperor of Qin ruled, around 220 BCE. A history book written about 100 years later describes his rule. Is it primary or secondary?"
  options: ["Secondary: it was written long after, by someone looking back", "Primary: it is over 2000 years old", "Primary: it is a book of facts", "It cannot be either"]
  actual: "Secondary. It was written about a hundred years after the events. Being very old does not make a source primary."
```

## Try: sort these sources

```step
stage: run
insight: "Sorting with the question 'was it made at the time?' makes the test usable, and the old-but-late source is the trap."
check:
  type: sort
  q: "You are investigating the First Emperor's rule (about 221 to 210 BCE). Is each source primary or secondary?"
  options: ["Primary", "Secondary"]
  items:
    - ["A law written on bamboo slips and buried with a Qin official in 217 BCE", "Primary", "It was made at the time, by someone living under those laws."]
    - ["One of the clay warriors made for the emperor's tomb", "Primary", "It was made during his reign, for him."]
    - ["A history of the Qin written about 100 years later by a Han court historian", "Secondary", "He was looking back on events he did not see."]
    - ["A museum label written in 2019 about the clay warriors", "Secondary", "It was written long after, by someone explaining them."]
    - ["A history of China printed 300 years ago", "Secondary", "It is old, but it was still written long after the Qin."]
```

Was your guess right? Notice the book printed 300 years ago. It is old, but old is not the test. It was still made long after the event, so it is secondary.

## Worked example: how old it is does not decide

```step
stage: investigate
insight: "Nib sorts by age. Watching the same reasoning fail on a source from a different event shows that the test is the time of the event."
tasks:
  - check:
      type: question
      q: "A student keeps a diary on the day of the school fair last term. She is investigating that fair. Is the diary primary or secondary?"
      options: ["Primary: it was written on the day of the event", "Secondary: it is only a diary", "Secondary: it is not very old", "Neither: it is too recent to be a source"]
      answer: 0
      feedback: [null, "A diary can be a primary source. What matters is that it was written at the time.", "How old a source is does not decide it. The time of the event does.", "Recent sources can be sources too. For a recent event, a recent source can be primary."]
      explain: "Primary. It was made on the day of the event by someone there. A recent source can be primary when the event is recent."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is sorting a source for the First Emperor's rule. Click the line where Nib's thinking goes wrong."
      answer: 4
      fault: logic
      misconception: old-means-primary
      explain: "Line 4: Nib thinks a source is primary because it is old. Sima Qian wrote about a hundred years after the Qin. Old is not the test. It was made long after the events, so it is secondary."
    smaller:
      check: { type: question, q: "Sima Qian wrote his history about 100 years after the Qin rulers. Was he alive when the First Emperor ruled?", options: ["No, so he was looking back", "Yes, he saw it happen", "It does not matter", "Nobody knows"], answer: 0, explain: "He was not there. He wrote about events that happened before he was born." }
  - check:
      type: question
      q: "Which question best tells you whether a source is primary or secondary?"
      options: ["Was it made at the time of the event I am investigating?", "Is it old?", "Is it in a museum?", "Is it true?"]
      answer: 0
      feedback: [null, "Old is a trap. A very old source can still be secondary.", "Where a source is kept does not decide what kind it is.", "True and primary are different things. A primary source can be wrong, and a secondary source can be right."]
      explain: "Primary or secondary depends on when it was made compared with the event. It does not depend on age, where it is kept or whether it is right."
```

### Same test, new source

Two things are true about the school fair diary. It was written on the day, so it is primary for the fair. If you asked a different question, such as "how did people write diaries in our school in the past?", the same diary could answer that question too. The question you ask decides which kind of source it is.

### Find Nib's mistake

### The one question to ask

## Vary: more sources

```step
stage: modify
insight: "Changing the event changes the answer, so the same source can be primary for one question and secondary for another."
tasks:
  - check:
      type: sort
      q: "You are investigating the school fair last term. Is each source primary or secondary?"
      options: ["Primary", "Secondary"]
      items:
        - ["A photo taken at the fair on the day", "Primary", "It was made at the time."]
        - ["A poster put up before the fair, advertising it", "Primary", "It was made at the time of the event, by the people running it."]
        - ["A newsletter article written the next term about the fair", "Secondary", "It was written after the fair, by someone looking back."]
        - ["A book about school fairs in general", "Secondary", "It was written later, and not about this fair."]
  - check:
      type: question
      q: "A 2019 museum label says the clay warriors were made for the First Emperor's tomb. You are investigating the museum's 2019 exhibition. Is the label primary or secondary?"
      options: ["Primary: it was made at the time of the exhibition", "Secondary: it is about the Qin", "Secondary: it is a label", "Primary: it is modern"]
      answer: 0
      feedback: [null, "Careful. What matters is which event you are investigating, not what the label talks about.", "Being a label does not decide it. The time of the event does.", "Modern is not the test. It is primary because of when it was made compared with the exhibition."]
      explain: "For the 2019 exhibition, the label is primary. For the Qin emperor's rule, the same label is secondary. The event you investigate decides."
```

### Sorting by event

### Same label, different question

## Practise: sort and explain

```step
stage: practise
insight: "Repeating the test on new sources so asking 'when was it made?' becomes the first move."
tasks:
  - check:
      type: sort
      q: "You are investigating how Qin officials kept law and order. Is each source primary or secondary?"
      options: ["Primary", "Secondary"]
      items:
        - ["Qin laws on bamboo slips found in an official's tomb", "Primary", "Made at the time, by and for officials."]
        - ["A textbook chapter on the Qin", "Secondary", "Written long after, to teach students."]
        - ["A Qin official's note about a case he judged", "Primary", "Made at the time by someone doing the job."]
        - ["A film about the First Emperor", "Secondary", "Made long after, by people retelling the story."]
  - check:
      type: question
      q: "Ravi says: 'This book is 400 years old, so it must be a primary source about the Qin.' What is the best reply?"
      options: ["It is old, but it was written long after the Qin, so it is secondary", "You are right, it is old enough", "Books are never primary", "It depends how many pages it has"]
      answer: 0
      feedback: [null, "Check when the Qin were. A book 400 years old is still far later.", "Books can be primary, such as a diary written at the time. The time it was written decides.", "Length has nothing to do with it."]
      explain: "Old is not the test. The Qin ruled over 2000 years ago, so a 400-year-old book is still a later retelling."
```

### Sort the Qin sources

### Ravi's book

## Make: your own examples

```step
stage: make
insight: "Choosing sources about an event from your own life is how the test becomes yours."
check: { type: reflect, text: "In my own book I chose an event from my own life or school. I wrote one primary source and one secondary source for it, and a reason for each. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a tricky copy

```step
stage: make
tier: typical
insight: "A copy or translation of a primary source is an edge case: the content comes from the time, but the copy was made later."
check:
  type: question
  q: "A museum prints a photograph of one of the Qin bamboo slips. Which is the best way to think about it?"
  options: ["The slip is primary. The photo is a copy of it, so use it carefully and check the slip", "The photo is secondary, and so is the slip", "The photo is primary because it is a photo", "Photos are never sources"]
  answer: 0
  feedback: [null, "The slip itself was made at the time. The copy does not change that.", "A photo is not primary just because it is a photo. It is a copy of something that is.", "Photos can be sources. A copy of a source still carries what it shows."]
  explain: "The slip is the primary source. The photo shows it, so it is useful, but it was made later. Historians say which one they used."
```

## Wider: the same object both ways

```step
stage: make
tier: wider
insight: "One object can be primary for one question and secondary for another."
check: { type: reflect, text: "I found a source that is primary for one question and secondary for another, and explained why with a partner." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
