---
order: 5
unit: finding
title: Keep what answers your question
node: [AC9HE7S02 n2, AC9HC7S02 n3]
summary: "A source has far more in it than you need. Keep only what helps answer your question, say why in a few words, and set the rest aside. Interesting is not the same as relevant."
language: science
shape: primer
hook: "You find a page full of facts about school canteens. Some are fascinating. How many of them go in your notes?"
---
A good source gives you a lot. Your question decides what to keep. For each piece, ask: **does this help answer my question?** If yes, keep it and write why. If not, set it aside, even if it is interesting.

All sources here are invented. Addresses end in `.example`; use the supplied cards for practice, then teacher-approved sources for your class topic. Relevance and reliability are different: something can answer your question yet still need checking.

## Think first

```step
stage: predict
insight: "Committing to a count shows how much we want to keep; the answer shows that relevance cuts it down."
check:
  type: predict
  q: "Question: How many students buy from the Parkside tuckshop each day? A record lists Monday’s buyer count, Tuesday’s buyer count, the opening year, the most popular item and the number of volunteers. How many directly help?"
  options: ["All five, they are all about the tuckshop", "Two", "None", "Whichever is most surprising"]
  actual: "Two: the daily buyer counts. Only facts that help answer the question about the daily number belong in your notes. The rest may be true and interesting but do not answer it."
```

## Try: keep or set aside

```step
stage: run
insight: "Sorting facts against one question shows that relevance depends on the question, not on how interesting a fact is."
check:
  type: sort
  q: "Question: How many students buy from the Parkside tuckshop each day? Sort each fact from tuckshop-records.example."
  options: ["Keep (helps answer it)", "Set aside"]
  items:
    - ["On Monday 212 students bought something.", "Keep (helps answer it)", "It is a daily count."]
    - ["Tuesday sales were 198 students.", "Keep (helps answer it)", "Another daily count."]
    - ["The tuckshop opened in 1987.", "Set aside", "True, but it does not tell you how many buy each day."]
    - ["Pies are the most popular item.", "Set aside", "Interesting, but about what, not how many students."]
    - ["The tuckshop has three volunteers each day.", "Set aside", "About staff, not students buying."]
```

Was your guess right? Two facts were worth keeping. The rest are for a different question. Two days are not enough to describe a typical week: keep the dates and look for the missing days.

## The idea: relevant, not just interesting

```step
stage: investigate
insight: "Writing why you kept a fact, and seeing Nib keep everything, shows that relevance is a decision you can explain."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: interesting-is-relevant
      explain: "Line 3: interesting is not the same as relevant. A history of canteens does not tell Nib how many students buy each day. Keep only what answers the question."
    hint:
      - "Read the exact question before judging the note."
      - "Does the note answer how many students, or a different question?"
    smaller:
      check: { type: question, q: "Does a history of school canteens tell you how many students buy lunch each day?", options: ["No", "Yes"], answer: 0, explain: "It is about canteens in the past, not the daily number." }
  - check:
      type: question
      q: "You keep 'On Monday 212 students bought something.' Which reason is best?"
      options: ["It is a daily count of students, which is what my question asks", "It is a number", "It was near the top of the page", "It looks official"]
      answer: 0
      feedback: [null, "Many numbers are not relevant.", "Position does not make it relevant.", "Looking official does not make it relevant."]
      explain: "A good reason points back to the question."
```

### Find Nib's mistake

### A reason that points back

## Vary: a different question

```step
stage: modify
insight: "The same page gives different keeps for a different question."
tasks:
  - check:
      type: question
      q: "New question: What do students buy most at the Parkside tuckshop? Which fact from tuckshop-records.example do you now keep?"
      options: ["Pies are the most popular item.", "On Monday 212 students bought something.", "The tuckshop opened in 1987.", "There are three volunteers each day."]
      answer: 0
      feedback: [null, "That counts students, not items.", "Not about what is bought.", "Not about what is bought."]
      explain: "The same page, a different question, a different fact to keep."
  - check:
      type: question
      q: "Mill Road question: Who decides whether Mill Road closes? A council page has these. Which do you keep?"
      options: ["The council's roads committee decides closures.", "Mill Road is 1.2 km long.", "The road was built in 1950.", "Trees line the road."]
      answer: 0
      feedback: [null, "Not about who decides.", "Not about who decides.", "Not about who decides."]
      explain: "Only the first answers who decides."
```

### Same page, new question

### Who decides

## Check: before you move on

```step
stage: practise
insight: "A last sort on a new case before moving on."
check:
  type: sort
  q: "Question: How might closing Mill Road affect shops? Sort each note from riverbend-news.example."
  options: ["Keep (helps answer it)", "Set aside"]
  items:
    - ["Shop owner: 'Most of my customers drive down Mill Road.'", "Keep (helps answer it)", "Relevant evidence about one owner’s concern, not a measured effect of closure."]
    - ["Council counts show 4,000 cars a day use Mill Road.", "Keep (helps answer it)", "Shows vehicle flow, not customers or unique people. Relevant background, but shop impacts need more evidence."]
    - ["The mayor opened a playground last week.", "Set aside", "Not about Mill Road or shops."]
    - ["Mill Road was named after the old flour mill.", "Set aside", "Interesting history, not about shops."]
```

## In each subject

| | What "relevant" depends on |
|---|---|
| **Economics** | the economic question: costs, choices, who gains or loses (hinge) |
| **Civics** | the civic question: who decides, what rules, whose views |
| **Geography** | the place and the question; reliability is also checked (see Geography's course) |
| **History** | the historical question; checking a source's maker and time is History's own lesson |

```step
stage: info
check: { type: reflect, text: "I can keep only what answers my question and say why." }
```

## Make: your own

```step
stage: make
insight: "Selecting from a real source for your own question makes the move your own."
check: { type: reflect, text: "In my own book I kept two relevant pieces from a source for my question, gave a reason for each and identified information to set aside. I kept the source reference and distinguished a reported view from a measured finding. For Civics I selected from two different sources. A partner checked my reasons." }
```

Write it in your own book or document. Your partner or teacher reads it. Record the title, maker, date and address or catalogue ID beside each note so you can reference it when explaining what you found.

## Typical: one more

```step
stage: make
tier: typical
insight: "One more case on the same move."
check:
  type: question
  q: "Question: How much does a school lunch cost? A page says 'A pie costs $4', 'The pie shop was founded in 1990' and 'Pies come in three flavours'. Which do you keep?"
  options: ["A pie costs $4", "The pie shop was founded in 1990", "Pies come in three flavours", "All three"]
  answer: 0
  feedback: [null, "Not about cost.", "Not about cost.", "Only one is about cost."]
  explain: "Only the price answers the question."
```

## Wider: set aside, with a note

```step
stage: make
tier: wider
insight: "Noting what you set aside lets you come back if your question changes."
check: { type: reflect, text: "I kept a short 'set aside' list with a few words about what each might be good for later, and said when I might use one." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
