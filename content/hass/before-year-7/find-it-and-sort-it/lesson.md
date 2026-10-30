---
order: 2
unit: inquiry
title: Find it and sort it
node: [AC9HS6S02 n1, AC9HS6S02 n2]
summary: "Different questions need different ways to find out: ask someone, look at records, read a text, or search online. When you search, use a few key words from your question, and check the end of the address to see what kind of site it is."
language: science
shape: primer
hook: "You want to know when the school garden was started. Search, ask, or look something up?"
---
Pick **how** to find out to suit the question. You can ask a person, look at records, read a book, or search online. When you search, use **key words** and look at the address: `.gov` for a government, `.edu` for a school, `.com` for a business.

The pages here are made up and end in `.example`.

## Think first

```step
stage: predict
insight: "Committing shows that the method should suit the question."
check:
  type: predict
  q: "When was the school garden started? What is the best first move?"
  options: ["Ask the teacher who looks after it, or check school records", "Search 'garden'", "Guess", "Ask a stranger online"]
  actual: "Ask the teacher or check school records. They would know. A search for 'garden' finds gardens everywhere."
```

## Try: match the method

```step
stage: run
insight: "Matching shows how the question points to the method."
check:
  type: match
  q: "Which method suits each question?"
  pairs:
    - ["When was our garden started?", "Ask someone or check school records"]
    - ["What is the population of Australia?", "Search for a government statistics page"]
    - ["What do Year 6 students think of the garden?", "Survey the class"]
```

## The idea: key words and the address

```step
stage: investigate
insight: "Seeing Nib's search fail explains why key words and the address matter."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the line where Nib's thinking goes wrong."
      answer: 4
      fault: logic
      misconception: first-result-is-the-place
      explain: "Line 4: the first result is not always right. Nib should use key words, and check who made the page."
    smaller:
      check: { type: question, q: "Is the first search result always the best?", options: ["No", "Yes"], answer: 0, explain: "Check who made it." }
  - check:
      type: question
      q: "Which are the best key words for 'When was the school garden started?'"
      options: ["school garden started", "when was the school garden started please tell me", "garden", "the"]
      answer: 0
      explain: "Pick the important words and leave out the rest."
  - check:
      type: question
      q: "An address ends in .gov.example. Who most likely made the page?"
      options: ["A government", "A shop", "A school", "A friend"]
      answer: 0
      explain: "gov is short for government."
```

### Find Nib's mistake

### Key words

### Reading an address

## Check: before you move on

```step
stage: practise
insight: "A last sort on new addresses."
check:
  type: sort
  q: "Who probably made each made-up page?"
  options: ["A government", "A business", "A school"]
  items:
    - ["riverbend.gov.example", "A government", "gov"]
    - ["riverbend-shoes.com.example", "A business", "com"]
    - ["riverbend-primary.edu.example", "A school", "edu"]
```

## Evaluate

```step
stage: info
check: { type: reflect, text: "I can choose a way to find out, use key words, and read what an address tells me." }
```

## Make: your own

```step
stage: make
insight: "Planning for your own question makes it your own."
check: { type: reflect, text: "In my own book I wrote a question, how I would find out, and the key words I would search. A partner read it." }
```
