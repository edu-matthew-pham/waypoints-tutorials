---
order: 3
unit: asking
title: Right-sized, and what would answer it
node: [AC9HH7S01 n3, AC9HG7S01 n3, AC9HC7S01 n3]
summary: "A main inquiry question needs scope suited to the time and sources: it names a case, and you can say what evidence would answer it and where you would get it. This lesson also starts from a news story, because many civic and economic investigations begin that way."
language: science
shape: primer
hook: "Nib has a week to investigate something about Riverbend Council and picks 'How has every democracy changed throughout history?' Will Nib finish by Friday?"
assumes: [AC9HS6S01 n3]
---
Last lesson, you built questions from big ideas. Now you check the **size**. Size depends on the available time and evidence. A broad question may need narrowing; a single fact or measurement may be useful as a supporting question without carrying the whole inquiry. The right size names a case, and you can say what evidence would answer it and where you would get it.

The cases are the made-up ones again: the Parkside tuckshop, Riverbend Council and Mill Road, the Kilby River and Wattle Flat, and the Hartley Museum's bronze mirror.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the test: the right size names a case and can be answered with evidence a class can find."
check:
  type: predict
  q: "Which question about Mill Road is the right size for a week?"
  options: ["What might closing Mill Road change for students, drivers and shops?", "How has every democracy changed throughout history?", "How many cars use Mill Road at 8:30 on Monday?", "Is the council good?"]
  actual: "The question about effects on students, drivers and shops. It names the case and you could gather evidence (a survey, traffic counts, council papers) and weigh it. 'How has every democracy changed throughout history?' covers too many places and periods. One traffic count is a useful supporting measurement, but does not by itself explain the effects. 'Is the council good?' needs criteria and a clearer focus."
```

## Try: size it for this inquiry

```step
stage: run
insight: "Sorting across four cases shows the same sizes in every subject: the middle one names the case and asks something."
check:
  type: sort
  q: "For this practice inquiry, you have a week and a small source pack. Which question can guide the whole inquiry? Too small means useful supporting work, but limited on its own."
  options: ["Too big", "Too small", "Right size"]
  items:
    - ["How have all economies changed throughout history?", "Too big", "Too many places and periods for this source pack."]
    - ["What price is a pie at the Parkside tuckshop?", "Too small", "One price is a look-up."]
    - ["How does the Parkside tuckshop decide what to stock, and what do students miss out on?", "Right size", "It names the case and needs sales records and student views."]
    - ["What happened in ancient history?", "Too big", "Thousands of years, no case named."]
    - ["What is the height of the Kilby River today?", "Too small", "One reading is a look-up."]
    - ["How did the dry year change water use in Wattle Flat?", "Right size", "A case, a change, and records and accounts to find."]
    - ["What were bronze mirrors used for in Han times, according to the evidence we have?", "Right size", "A case, and it asks what the evidence shows."]
```

Was your guess right? A right-sized question is not the one that sounds most important. It is the one you can answer.

## The idea: what would answer it?

```step
stage: investigate
insight: "Naming the evidence a question needs, and catching Nib choosing the biggest question, turns 'right size' into a test."
tasks:
  - check:
      type: question
      q: "How can you tell a question is the right size?"
      options: ["It names a case, and you can say what evidence would answer it and where you would get it", "It is about something important", "It has a one-word answer", "Everyone agrees it is a good question"]
      answer: 0
      feedback: [null, "Important questions can still be too big.", "A one-word answer usually means a look-up.", "People can agree on a question that is too big."]
      explain: "If you can name the case and the evidence, you can plan the investigation."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is choosing a question for the week. Click the line where Nib's thinking goes wrong."
      answer: 2
      fault: logic
      misconception: bigger-question-better
      explain: "Line 2: Nib thinks bigger questions are better because they are more important. But a class cannot gather enough evidence to answer one that big in a week. A better question names the case: for example, who decides whether Mill Road closes?"
    hint:
      - "What places and periods would Nib have to cover?"
      - "Which single decision could Nib investigate with available records?"
    smaller:
      check: { type: question, q: "Could a class finish investigating 'How has every democracy changed throughout history?' in a week?", options: ["No, it is far too big", "Yes", "Yes, with the internet", "Yes, if they work hard"], answer: 0, explain: "There are too many places and periods for the available time. Choose a specific decision and sources you can access." }
  - check:
      type: match
      q: "What would answer each question, and where could you get it?"
      pairs:
        - ["How does the Parkside tuckshop decide what to stock?", "The stock list, sales records and a talk with the manager"]
        - ["Who decides whether Mill Road closes, and why?", "Council rules and meeting records"]
        - ["Why did the Kilby River run low last summer?", "River height records, rainfall figures and a map of the dam"]
        - ["What does the bronze mirror show about life in Han times?", "The mirror, its museum label and what is known about where it was found"]
```

### The right size

### Find Nib's mistake

### Evidence for each

## Vary: start from the news

```step
stage: modify
insight: "A news story is a common way into an investigation. The move is to find the bigger idea in the story and ask about that."
tasks:
  - check:
      type: question
      q: "A made-up news story says: 'Riverbend Council votes to close Mill Road outside Parkside School from next term.' Which question links the story to a bigger idea about how government works?"
      options: ["Which level of government can close a road, and what rules does it have to follow?", "When did the council vote?", "Which councillor spoke first?", "Do councils always close roads?"]
      answer: 0
      feedback: [null, "That is a supporting date, not a question about the wider civic process.", "That asks for one detail rather than investigating the rules governing this decision.", "That is closed and too wide."]
      explain: "It starts from the story, asks about the bigger idea (who decides, by what rules) and names the case."
  - check:
      type: question
      q: "A made-up story says: 'Parkside tuckshop replaces pies with wraps because it has limited oven space.' Which question investigates opportunity cost?"
      options: ["What was the next best option given up when the tuckshop chose wraps?", "Why do people like pies?", "When did pies stop?", "What colour is the tuckshop sign?"]
      answer: 0
      feedback: [null, "That is a different topic.", "That is a look-up.", "That is a detail about the shop, not about an economic choice."]
      explain: "It asks for the next best alternative given up, rather than treating every cost or benefit as opportunity cost."
```

### Civics, from a news story

### Economics, from a news story

## Check: before you move on

```step
stage: practise
insight: "A last check on size and evidence across a new case before moving on."
check:
  type: question
  q: "Which is the best one-line plan for the question 'Why did the Kilby River run low last summer?'"
  options: ["Look at river height records and rainfall figures for last summer, and a map of what draws water from the river", "Read everything about rivers", "Ask one student what they think", "Look up the river's length"]
  answer: 0
  feedback: [null, "That is far too big. A plan names what to gather.", "One view is not enough evidence.", "That does not answer the question."]
  explain: "These records could test possible causes. Include a comparison period and check other influences before concluding why it ran low."
```

A plan should say how the evidence helps, not just name a source. For the made-up river case:

| Evidence needed | Where and how to collect it | How it helps |
|---|---|---|
| Rainfall for the dry summer and a comparison summer | Download monthly records from the water authority | Check whether less rain could help explain lower river levels |
| River levels for the same months | Download readings for the same measuring station | Check when levels fell and compare them with rainfall |

These records could support an explanation; they would not rule out water extraction or dam operations. Plan fieldwork with your teacher; you do not need to visit a river for this task.

## In each subject

Every subject sizes a question the same way. What each one asks you to plan is a little different:

| | Plan to name | Starts well from |
|---|---|---|
| **Economics** | the data and views you would need (prices, sales, choices) | a news story about a choice or a price |
| **Civics** | the rules, records and views you would need | a news story about a decision or a law |
| **Geography** | the evidence and **how you would collect it** (fieldwork or secondary sources, and the tool you would use) | a map, a place or a change |
| **History** | the kinds of evidence you would need (what was made, what was written) | an object or a source |

Next: Where to look, and how to search.

```step
stage: info
check: { type: reflect, text: "I can say what makes a question the right size and what evidence would answer one of mine." }
```

## Make: your own plan

```step
stage: make
insight: "Writing a one-row plan for one of your questions makes sizing and evidence your own."
check: { type: reflect, text: "In my own book I made a short plan for one of my questions: the question, evidence needed, where and how I would get it, and how it would help answer the question. I explained why it fits the time and sources available. For Geography I included two evidence types and a collection method for each. A partner checked the plan and I revised it." }
```

Write it in your own book or document. Name your question, then use the worked plan’s headings. For Civics, also choose a current news item with your teacher and explain how your question connects it to a wider civic concept. The invented news checks rehearse that move; they are not current events.

## Typical: a second case

```step
stage: make
tier: typical
insight: "The same sizing on another subject's case."
check:
  type: sort
  q: "For the same one-week inquiry, how does each Wattle Flat question fit?"
  options: ["Too big", "Too small", "Right size"]
  items:
    - ["How has water use changed in every town since ancient times?", "Too big", "Too many places and periods for this inquiry."]
    - ["How many taps are there in Wattle Flat?", "Too small", "A count."]
    - ["How did people in Wattle Flat change how they use water during the dry year?", "Right size", "A case, a change and accounts to find."]
```

## Wider: shrink and stretch

```step
stage: make
tier: wider
insight: "Moving the size of one question up and down shows what each size changes."
check: { type: reflect, text: "I took one question and made a bigger version and a smaller one. I said what evidence each would need and which was the right size for a week." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
