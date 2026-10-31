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
A good **inquiry question** gives you something to work out. You answer it by finding evidence and thinking about it. A quick look-up can help, but it can't carry a whole inquiry on its own. Counts and measurements are useful smaller questions. You might need to collect the data yourself.

Questions that ask for a judgement can use evidence too. “Is the tuckshop good?” needs clearer criteria. Good for whom, and in what way? “How well does the menu suit students on its budget?” gives you evidence to gather. People may still weigh that evidence differently.

The cases in this lesson are made up: the Parkside School tuckshop, Riverbend Council and Mill Road, the town of Wattle Flat on the Kilby River, and a bronze mirror in the Hartley Museum.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the test: an investigable question needs evidence, and the answer is not already one fact or a view."
check:
  type: predict
  q: "Which question about the Parkside tuckshop could a class investigate for a week?"
  options: ["How does the tuckshop choose which six items to stock?", "What time does the tuckshop open each morning?", "Is the Parkside tuckshop a good tuckshop?", "Should every school in the world have a tuckshop?"]
  actual: "The question about choosing stock. It asks how and why, so you would gather evidence such as sales records and student views and weigh it. The opening time is one fact. 'Is it good?' needs criteria; 'Should schools have them?' needs a narrower setting and evidence about benefits and costs. Neither is ready as written."
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
      options: ["You answer it by gathering evidence and thinking about it", "It is clearly about the topic your class is studying", "It has a short, clear answer you can check", "Lots of people have already asked it online"]
      answer: 0
      feedback: [null, "A question can be about the topic and still be a quick look-up.", "Answer length does not decide this. A count may require data collection; a long answer may only copy a source.", "Being popular does not make it investigable."]
      explain: "If you can only answer it by finding evidence and weighing it, it is investigable."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is choosing a question about the Hartley Museum's mirror. Click the first line where Nib's thinking goes wrong."
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
      options: ["It finds a place but asks nothing about patterns or links", "It is too big to answer in a week", "It only asks for someone's opinion", "Geography classes never ask about capitals"]
      answer: 0
      feedback: [null, "It is small, not big.", "It is not opinion, and that is not the problem.", "Geography can use capitals. It does locate a place, but stops before investigating a pattern, process or relationship."]
      explain: "Locating places is geographical work. To build an inquiry, ask about a spatial pattern, process or relationship, such as how a capital is connected to other places."
  - check:
      type: question
      q: "An Economics class asks: 'Will everyone have enough in future?' What is the problem?"
      options: ["Who is everyone, what is enough, and when is the future?", "It can be answered with one quick look-up", "It asks about the past, not the present", "It is too small to fill a whole inquiry"]
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
  q: "Which questions could guide the whole Mill Road inquiry, which would help answer part of it, and which need fixing first?"
  options: ["Main inquiry question", "Supporting question", "Needs criteria first"]
  items:
    - ["How many cars use Mill Road each day?", "Supporting question", "A good data-collection question. Counts can help answer a bigger question about the effects of closing it."]
    - ["What might be the effects of closing Mill Road on students, drivers and shops?", "Main inquiry question", "Several kinds of evidence, weighed."]
    - ["Is Mill Road the nicest road in Riverbend?", "Needs criteria first", "Nicest in what way, and for whom? It needs criteria and a purpose before evidence can help."]
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
  options: ["Who can the council ask for money to fix Mill Road?", "How many councillors does Riverbend Council have?", "Is Riverbend Council a good council?", "What does the word council mean?"]
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
