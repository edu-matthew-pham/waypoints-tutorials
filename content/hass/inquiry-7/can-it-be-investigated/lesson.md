---
order: 1
unit: asking
title: Can this be investigated?
node: [AC9HE7S01 n1, AC9HC7S01 n1, AC9HG7S01 n1, AC9HH7S01 n1]
summary: "An investigable question is one a class could answer by finding evidence and weighing it. Some questions only need a quick look-up, some are too big, and some are only opinion. Each subject has its own way of being not quite right: History's are often plain recall, Geography's are not about places, Civics' are too broad, Economics' are closed or unanswerable."
language: science
shape: primer
hook: "The school tuckshop has room for six items. Which of these questions would give a class something to investigate for a week?"
assumes: [AC9HS6S01 n1]
---
A question is **investigable** when finding the answer means gathering evidence and thinking about it. Looking up one fact is not an investigation, and neither is an opinion that nobody can check.

The cases in this lesson are made up: the Parkside School tuckshop, Riverbend Council and Mill Road, the town of Wattle Flat on the Kilby River, and a bronze mirror in the Hartley Museum.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the test: an investigable question needs evidence, and the answer is not already one fact or a view."
check:
  type: predict
  q: "Which question about the Parkside tuckshop could a class investigate for a week?"
  options: ["How does the tuckshop decide which six items to stock, and what do students miss out on?", "What is the tuckshop's phone number?", "Is the tuckshop good?", "Should schools have tuckshops?"]
  actual: "The first. It asks how and why, so you would gather evidence such as sales records and student views and weigh it. The phone number is one fact. 'Is it good?' and 'Should schools have them?' are mostly opinions, and they are too wide to settle with the evidence a class can collect."
```

## Try: sort the questions

```step
stage: run
insight: "Sorting questions from all four cases shows the same four kinds turning up in every subject."
check:
  type: sort
  q: "What kind of question is each one?"
  options: ["Investigable", "Just look it up", "Too big", "Only opinion"]
  items:
    - ["How does the Parkside tuckshop choose which six items to stock?", "Investigable", "You would gather evidence and weigh it."]
    - ["What time does the tuckshop open?", "Just look it up", "One fact answers it."]
    - ["What is democracy?", "Too big", "Whole books are written on it. A class could not settle it with the evidence it can gather."]
    - ["Why did Riverbend Council want to close Mill Road, and who gets a say?", "Investigable", "It asks why and who, and records and views would answer it."]
    - ["Is the Kilby River pretty?", "Only opinion", "People will say yes or no, and there is no evidence that settles it."]
    - ["Why did the Kilby River run low last summer, and who in Wattle Flat felt it most?", "Investigable", "It asks why and who, and records and local accounts would answer it."]
    - ["When did the Han dynasty start?", "Just look it up", "One date answers it."]
    - ["What can the Hartley Museum's bronze mirror tell us about life in Han times, and what can't it?", "Investigable", "You would look closely at the mirror and weigh what it shows and what it leaves out."]
```

Was your guess right? Notice that the tuckshop, the road, the river and the mirror all came out the same way. The four kinds belong to no one subject.

## The idea: what makes it investigable

```step
stage: investigate
insight: "Naming the test, and then catching Nib treating a look-up as an investigation, makes the test usable."
tasks:
  - check:
      type: question
      q: "Which of these is the best reason a question is investigable?"
      options: ["Answering it means gathering evidence and thinking about it", "It is about the topic", "It has a short answer", "Lots of people have asked it"]
      answer: 0
      feedback: [null, "A question can be about the topic and still be a quick look-up.", "A short answer usually means a look-up. Investigations take longer.", "Being popular does not make it investigable."]
      explain: "If you can only answer it by finding evidence and weighing it, it is investigable."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is choosing a question about the Hartley Museum's mirror. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: recall-is-inquiry
      explain: "Line 3: Nib thinks a question is great because it is about history and has a clear answer. A clear single answer means it is a look-up. Nib's own next line gives it away: it takes one minute."
    smaller:
      check: { type: question, q: "Nib's question can be answered with one date. What kind of question is it?", options: ["Just look it up", "Investigable", "Too big", "Only opinion"], answer: 0, explain: "One date answers it, so it is a look-up." }
  - check:
      type: question
      q: "Which of these questions is not investigable?"
      options: ["Which is the best river in the country?", "Why did the Kilby River run low last summer?", "How does the council decide when to close a road?", "What did people in Han times use bronze mirrors for?"]
      answer: 0
      feedback: [null, "Records and accounts could answer this.", "Council documents and people's accounts could answer this.", "Sources could answer this."]
      explain: "'Best' is only opinion, and no evidence settles it."
```

### Find Nib's mistake

### The best reason

### Not investigable

## Vary: another way to be not quite right

```step
stage: modify
insight: "Each subject tends to slip in a different way, but the test is the same."
tasks:
  - check:
      type: question
      q: "A Geography class asks: 'What is the capital of France?' Why is it a poor question for Geography?"
      options: ["It is one fact, and it is not about how or why a place is the way it is", "It is too big", "It is only opinion", "Geography never asks about capitals"]
      answer: 0
      feedback: [null, "It is small, not big.", "It is not opinion, and that is not the problem.", "Geography can use capitals. The problem is the question has a one-fact answer and does not ask about a place or a pattern."]
      explain: "A question for Geography asks about a place, where things are and why. This one is a look-up."
  - check:
      type: question
      q: "An Economics class asks: 'Will everyone have enough in future?' What is the problem?"
      options: ["Nobody can answer it with evidence, so it cannot be investigated", "It is a look-up", "It is about the past", "It is too small"]
      answer: 0
      feedback: [null, "It is nowhere near a look-up.", "It looks ahead, not back, and that is not the main problem.", "It is far too wide, not too small."]
      explain: "Nobody can know. A better version asks about something with evidence, such as how the tuckshop shares what it has now."
```

### Geography's slip

### Economics' slip

## Check: before you move on

```step
stage: practise
insight: "A last check on the test across a new case before moving on."
check:
  type: sort
  q: "Sort each question about Mill Road."
  options: ["Investigable", "Not investigable"]
  items:
    - ["How many cars use Mill Road each day?", "Not investigable", "It is a count you would look up or measure. It does not need weighing."]
    - ["What might be the effects of closing Mill Road on students, drivers and shops?", "Investigable", "Several kinds of evidence, weighed."]
    - ["Is Mill Road the nicest road in Riverbend?", "Not investigable", "Opinion only."]
    - ["Who decides whether Mill Road closes, and why?", "Investigable", "Documents and rules would answer it."]
```

If you got any of those wrong, go back to the sorting step and ask: could I answer this without finding evidence and thinking about it?

## In each subject

Every subject wants an investigable question. What each one watches for is a little different:

| | The question usually goes wrong by being | A good one asks |
|---|---|---|
| **Economics** | closed, or unanswerable ("Will everyone have enough?") | how people or businesses choose, and what is given up |
| **Civics** | too broad ("What is democracy?") | who decides, how, and with what rules |
| **Geography** | not about a place or a pattern (a one-fact look-up) | where, why there, and what changes |
| **History** | plain recall ("When did X happen?") | why it happened, how it changed, how we know |

Next: Build a question from a big idea.

```step
stage: info
check: { type: reflect, text: "I can say how a question usually goes wrong in my subject, and what a good one asks." }
```

## Make: your own

```step
stage: make
insight: "Writing one investigable question and one that is not, from your own subject, makes the test your own."
check: { type: reflect, text: "In my own book I wrote one investigable question and one that is not, for a topic my class is studying, and said why. A partner read them and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a second case

```step
stage: make
tier: typical
insight: "The same test on a case from another subject."
check:
  type: question
  q: "Which is investigable for a Civics class studying Riverbend Council?"
  options: ["Who can the council ask for money to repair Mill Road, and why?", "How many councillors are there?", "Is the council good?", "What is a council?"]
  answer: 0
  feedback: [null, "That is a count you look up.", "That is opinion only.", "That is a definition. It is too small to investigate."]
  explain: "It asks who and why, and documents and rules would answer it."
```

## Wider: the same issue, two subjects

```step
stage: make
tier: wider
insight: "One situation can give different investigable questions depending on the subject."
check: { type: reflect, text: "I chose one issue (for example, the Kilby River running low) and wrote one investigable question a Geography class might ask and one an Economics class might ask. I said how they differ." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
