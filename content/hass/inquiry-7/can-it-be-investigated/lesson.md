---
order: 1
unit: asking
title: Can this be investigated?
node: [AC9HE7S01 n1, AC9HC7S01 n1, AC9HG7S01 n1, AC9HH7S01 n1]
summary: "Choose a focused inquiry question that available evidence can help answer. Distinguish a whole inquiry from useful supporting facts and measurements, and refine broad questions or judgements that need criteria."
language: science
shape: primer
hook: "The school tuckshop has room for six items. Which of these questions would give a class something to investigate for a week?"
assumes: [AC9HS6S01 n1]
---
A useful **inquiry question** is focused enough to investigate with available evidence and gives you something to work out. A quick look-up can help, but usually cannot carry the whole inquiry. Counts and measurements are investigable supporting questions: you may need to collect new data to answer them.

Judgements can use evidence too. “Is the tuckshop good?” needs clearer criteria: good for whom, and in what way? “How well does the menu meet students’ needs within its budget?” gives you evidence to gather and a judgement to explain. People may still weigh that evidence differently.

The cases in this lesson are made up: the Parkside School tuckshop, Riverbend Council and Mill Road, the town of Wattle Flat on the Kilby River, and a bronze mirror in the Hartley Museum.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the test: an investigable question needs evidence, and the answer is not already one fact or a view."
check:
  type: predict
  q: "Which question about the Parkside tuckshop could a class investigate for a week?"
  options: ["How does the tuckshop decide which six items to stock, and what do students miss out on?", "What is the tuckshop's phone number?", "Is the tuckshop good?", "Should schools have tuckshops?"]
  actual: "The question about choosing stock. It asks how and why, so you would gather evidence such as sales records and student views and weigh it. The phone number is one fact. 'Is it good?' needs criteria; 'Should schools have them?' needs a narrower setting and evidence about benefits and costs. Neither is ready as written."
```

## Try: sort the questions

```step
stage: run
insight: "Sorting questions from all four cases shows the same four kinds turning up in every subject."
check:
  type: sort
  q: "What kind of question is each one?"
  options: ["Investigable", "Just look it up", "Too big", "Preference without criteria"]
  items:
    - ["How does the Parkside tuckshop choose which six items to stock?", "Investigable", "You would gather evidence and weigh it."]
    - ["What time does the tuckshop open?", "Just look it up", "One fact answers it."]
    - ["How has every democracy changed throughout history?", "Too big", "Too many places and periods for this class inquiry. Narrow the scope."]
    - ["Why did Riverbend Council want to close Mill Road, and who gets a say?", "Investigable", "It asks why and who, and records and views would answer it."]
    - ["Is the Kilby River pretty?", "Preference without criteria", "As written it asks for personal taste. A question about how residents value the river could use interviews and stated criteria."]
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
      feedback: [null, "A question can be about the topic and still be a quick look-up.", "Answer length does not decide this. A count may require data collection; a long answer may only copy a source.", "Being popular does not make it investigable."]
      explain: "If you can only answer it by finding evidence and weighing it, it is investigable."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is choosing a question about the Hartley Museum's mirror. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: recall-is-inquiry
      explain: "Line 3: Nib thinks a question is great because it is about history and has a clear answer. This particular question asks for one established date; it does not yet ask why, how things changed or how we know. That date could support a larger inquiry."
    hint:
      - "What would you need to find out beyond one date?"
      - "Could that date support a question about why something happened?"
    smaller:
      check: { type: question, q: "Nib's question can be answered with one date. What kind of question is it?", options: ["Just look it up", "Investigable", "Too big", "Preference without criteria"], answer: 0, explain: "One date answers it, so it is a look-up." }
  - check:
      type: question
      q: "Which question needs clearer criteria and scope before it can guide an inquiry?"
      options: ["Which is the best river in the country?", "Why did the Kilby River run low last summer?", "How does the council decide when to close a road?", "What did people in Han times use bronze mirrors for?"]
      answer: 0
      feedback: [null, "Records and accounts could answer this.", "Council documents and people's accounts could answer this.", "Sources could answer this."]
      explain: "'Best' for what purpose, and for whom? Criteria such as water quality or access would turn this into a question evidence could help answer."
```

### The best reason

### Find Nib's mistake

### Not investigable

## Vary: another way to be not quite right

```step
stage: modify
insight: "Each subject tends to slip in a different way, but the test is the same."
tasks:
  - check:
      type: question
      q: "A Geography class asks: 'What is the capital of France?' Why is it too limited as the main inquiry question?"
      options: ["It locates a place but does not yet investigate a spatial pattern, process or relationship", "It is too big", "It is only opinion", "Geography never asks about capitals"]
      answer: 0
      feedback: [null, "It is small, not big.", "It is not opinion, and that is not the problem.", "Geography can use capitals. It does locate a place, but stops before investigating a pattern, process or relationship."]
      explain: "Locating places is geographical work. To build an inquiry, ask about a spatial pattern, process or relationship, such as how a capital is connected to other places."
  - check:
      type: question
      q: "An Economics class asks: 'Will everyone have enough in future?' What is the problem?"
      options: ["It leaves everyone, enough and future undefined, so the scope and evidence are unclear", "It is a look-up", "It is about the past", "It is too small"]
      answer: 0
      feedback: [null, "It is nowhere near a look-up.", "It looks ahead, not back, and that is not the main problem.", "It is far too wide, not too small."]
      explain: "Forecasts can use evidence, but need a defined group, resource, period and stated assumptions. A manageable version asks how Parkside could meet lunch demand next term with its current budget."
```

### Geography's slip

### Economics' slip

## Check: before you move on

```step
stage: practise
insight: "A last check on the test across a new case before moving on."
check:
  type: sort
  q: "Which questions could guide the whole Mill Road inquiry, and which need developing or serve as supporting questions?"
  options: ["Main inquiry question", "Supporting question or needs refining"]
  items:
    - ["How many cars use Mill Road each day?", "Supporting question or needs refining", "A valid data-collection question. Counts can support an inquiry about the effects of closure."]
    - ["What might be the effects of closing Mill Road on students, drivers and shops?", "Main inquiry question", "Several kinds of evidence, weighed."]
    - ["Is Mill Road the nicest road in Riverbend?", "Supporting question or needs refining", "Nicest needs criteria and a purpose before evidence can help."]
    - ["Who decides whether Mill Road closes, and why?", "Main inquiry question", "Documents and rules would answer it."]
```

If you got any of those wrong, go back to the sorting step and ask: what evidence would I collect, and does this guide the whole inquiry or help answer part of it?

## In each subject

Every subject wants an investigable question. What each one watches for is a little different:

| | The question usually goes wrong by being | A good one asks |
|---|---|---|
| **Economics** | closed, too broad, or unclear ("Will everyone have enough?") | how people or businesses choose, and what is given up |
| **Civics** | too broad ("What is democracy?") | who decides, how, and with what rules |
| **Geography** | missing a spatial process or relationship to investigate | where, why there, and what changes |
| **History** | plain recall ("When did X happen?") | why it happened, how it changed, how we know |

Next: Build a question from a big idea.

```step
stage: info
check: { type: reflect, text: "I can name two features of a useful inquiry question: a focused subject question and evidence I could obtain." }
```

## Make: your own

```step
stage: make
insight: "Writing one investigable question and one that is not, from your own subject, makes the test your own."
check: { type: reflect, text: "In my own book I wrote one useful main inquiry question and one that needs developing for my class topic, explained the difference using focus and available evidence, and revised them after a partner’s comments." }
```

Write in your own book or document. For Geography, turn a general question such as “Is water important?” into one about a place, spatial pattern or relationship. Explain what geographical focus you added and what evidence would help. For History, explain how your question asks about cause, change, significance or perspective. Your partner or teacher reads it.

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
  feedback: [null, "That is a count you look up.", "That needs clearer criteria for good.", "That is a definition. It is too small to investigate."]
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
