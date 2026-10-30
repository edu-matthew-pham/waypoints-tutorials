---
order: 1
unit: inquiry
title: Questions that guide an inquiry
node: [AC9HS6S01 n1, AC9HS6S01 n2]
summary: "An investigation needs more than one question. A big question sets the goal, and smaller questions break it into parts you can find out: what, where, when, who, why and what should we do."
language: science
shape: primer
hook: "Your class wants to find out about the school garden. Is one question enough?"
---
A big question like "How does our school garden help us?" is hard to answer in one go. **Smaller questions** break it into parts, such as *What grows there? Who looks after it? Why was it started?* Together they guide your inquiry.

The garden here is made up.

## Think first

```step
stage: predict
insight: "Committing shows that one question rarely covers an investigation."
check:
  type: predict
  q: "To find out how the school garden helps the school, how many questions will you need?"
  options: ["Several smaller ones", "Just one", "None, just look", "One per student"]
  actual: "Several smaller ones. A big question is answered by finding out several smaller things."
```

## Try: sort the questions

```step
stage: run
insight: "Sorting shows the big question and the smaller ones that help answer it."
check:
  type: sort
  q: "Big question: How does the school garden help the school? Which are smaller questions that help answer it?"
  options: ["Helps answer it", "Does not help"]
  items:
    - ["What vegetables grow in the garden?", "Helps answer it", "It tells what the garden gives."]
    - ["Who looks after the garden?", "Helps answer it", "It tells who gets help from it."]
    - ["What is the capital of France?", "Does not help", "Nothing to do with the garden."]
    - ["What do the vegetables get used for?", "Helps answer it", "It shows how the school uses them."]
```

## The idea: one big question, several small ones

```step
stage: investigate
insight: "Seeing Nib stop at one question explains why smaller questions are needed."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the line where Nib's plan goes wrong."
      answer: 3
      fault: logic
      misconception: one-question-enough
      explain: "Line 3: one question is not enough. Nib needs smaller questions about what grows, who helps and why it was started."
    smaller:
      check: { type: question, q: "Which is better for Nib: one question, or several smaller ones?", options: ["Several smaller ones", "One question"], answer: 0, explain: "Smaller questions cover the parts." }
  - check:
      type: question
      q: "Which small question asks WHY?"
      options: ["Why was the garden started?", "What grows in it?", "Where is it?", "Who looks after it?"]
      answer: 0
      explain: "Why asks for a reason."
```

### Find Nib's mistake

### Which one asks why

## Check: before you move on

```step
stage: practise
insight: "One more sort on a new case."
check:
  type: sort
  q: "Big question: How do people in Riverbend get around? Which small question starts with the word that fits?"
  options: ["Who", "Where", "What"]
  items:
    - ["___ do most people use buses?", "Who", "Asks about people."]
    - ["___ are the bus stops?", "Where", "Asks about places."]
    - ["___ kinds of transport are there?", "What", "Asks about things."]
```

## Evaluate

```step
stage: info
check: { type: reflect, text: "I can break a big question into smaller questions that guide an inquiry." }
```

## Make: your own

```step
stage: make
insight: "Writing your own small questions makes the idea your own."
check: { type: reflect, text: "In my own book I wrote a big question about something at school and three smaller questions that help answer it. A partner read it." }
```
