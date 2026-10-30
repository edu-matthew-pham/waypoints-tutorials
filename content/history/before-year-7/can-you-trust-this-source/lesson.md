---
title: "Can you trust this source?"
summary: "Before you rely on a source, look at two things: where it comes from (who made it, and when) and what it actually says (facts, or someone's opinion). A source from a person who was not there, or one that is only opinion, needs more care. This is the habit Year 7 History builds on when it asks about origin, content and purpose."
language: maths
shape: primer
unit: sources
order: 1
node: AC9HS6S04 n1
hook: "A web page says the school pond is the best place to see frogs. Do you believe it? What would you want to know first?"
---
When you read something to find out about a topic, it helps to ask two questions before you trust it.

**Where does it come from?** Who made it, and when?

**What does it say?** Are they facts you could check, or is it someone's opinion?

## Think first

```step
stage: predict
insight: "Students often trust a source because it looks official. The question makes them name what they would check."
check:
  type: predict
  q: "A page about the school pond says 'The pond is the best place to see frogs.' It has no name and no date. What would you want to know first?"
  options: ["Who wrote it, and when", "How many words it has", "What colour the page is", "If it has a picture"]
  actual: "Who wrote it, and when. Without that, you cannot tell if they know the pond, or if it is out of date."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Sorting statements into fact and opinion shows that 'best' is a view, while a count or a date can be checked."
check:
  type: sort
  q: "Is each statement from the pond page a fact you could check, or an opinion?"
  options: ["Fact", "Opinion"]
  items:
    - ["The pond is 6 metres wide", "Fact", "You could measure it."]
    - ["It is the best place to see frogs", "Opinion", "'Best' is what someone thinks."]
    - ["Frogs were seen there in March last year", "Fact", "Someone could check records or ask the people who saw them."]
    - ["Everyone loves the pond", "Opinion", "It is a feeling, and it says 'everyone'."]
```

Was your guess right? Facts can be checked. Opinions say what someone thinks.

## The idea

```step
stage: investigate
insight: "Where it comes from and what it says are two separate checks. Using both is what lets you decide how much to rely on a source."
tasks:
  - check:
      type: question
      q: "Two pages say how many frogs live in the pond. One is by the science teacher, with the date she counted them. The other has no name or date. Which do you trust more?"
      options: ["The teacher's page: you know who made it and when", "The other one, because it is shorter", "They are the same", "Neither, because pages can be wrong"]
      answer: 0
      feedback: [null, "Short or long does not tell you whether it is reliable.", "One tells you where it comes from and the other does not.", "Any source can be wrong, but one that tells you where it comes from is easier to check."]
      explain: "A source that tells you who made it and when is easier to check."
  - check:
      type: question
      q: "A page says 'This is the best pond in the world.' What is it?"
      options: ["An opinion: someone's view, not a fact you can check", "A fact, because it is on a page", "A fact, because it says 'world'", "Nothing: it has no meaning"]
      answer: 0
      feedback: [null, "Being on a page does not make something a fact.", "Saying 'world' only makes it a bigger opinion.", "It means something. It is someone's view."]
      explain: "'Best' is a view. You cannot check it like a measurement."
```

Look for two things in every source: where it comes from, and whether it is saying facts or opinions.

### Where from

### Fact or opinion

## Check

```step
stage: practise
insight: "Using both checks on a new page."
tasks:
  - check:
      type: question
      q: "A page about school lunches is written by the canteen manager, who makes the lunches. It says 'Our lunches are the tastiest in town.' What should you think?"
      options: ["It is an opinion from someone who made them, so check it against other views", "It is a fact because the manager knows", "It is false because the manager made it", "It is the best source because it is by an expert"]
      answer: 0
      feedback: [null, "The manager knows the lunches, but 'tastiest' is still a view.", "Opinions from someone involved are not always false. They need other views beside them.", "Being involved does not make it the best source."]
      explain: "It is useful for what the canteen thinks, but 'tastiest' is an opinion, so look for other views too."
  - check:
      type: sort
      q: "Is each statement about school lunches a fact or an opinion?"
      options: ["Fact", "Opinion"]
      items:
        - ["Lunch costs $4", "Fact", "You can check a price."]
        - ["The pasta is delicious", "Opinion", "'Delicious' is what someone thinks."]
        - ["There are three hot choices each day", "Fact", "You can count them."]
        - ["Nobody likes the salad", "Opinion", "It is a view, and 'nobody' is hard to check."]
```

### The canteen page

### Fact or opinion

## Apply

```step
stage: make
insight: "Using the two checks on a real page from the student's own topic."
check: { type: reflect, text: "I picked a page or book from a topic we are learning. I wrote where it comes from (who made it, and when), and one fact and one opinion from it." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

```teacher
summary: "Students ask two questions before trusting a source: where does it come from, and is it fact or opinion? They drop the idea that anything on a page can be trusted."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 4 min · Check 4 min · Apply 2 min"
goals:
  - "I can ask who made a source and when."
  - "I can tell a fact I could check from an opinion."
  - "I can say what I would check before relying on a source."
before: |
  The one idea: look at where it comes from and what it says before you rely on it. The common mistake is to trust a source because it looks official or is on a page. The Think first question meets it.

  Everything is made up (the school pond, the canteen page). It leads into Year 7 History: Source origin and purpose, where the same ideas get the names origin and content.
running:
  - "Think first: ask for votes before the answer, then ask what each missing detail would let them check."
  - "Try: stop at 'Everyone loves the pond'. Words like 'everyone' and 'nobody' usually signal an opinion."
stuck:
  - see: "A student says anything on a page is a fact."
    ask: "Could you check it? How?"
    fix: "Go back to 'best'. You can measure a pond. You cannot measure best."
leads: |
  Next: Year 7 History › Source origin and purpose, where origin and content get their names.
exit:
  q: "Name two things you should look at before you rely on a source."
  a: "Where it comes from (who made it, and when) and what it says (facts you could check, or an opinion)."
explain: |
  Before you rely on a source, ask where it comes from and what it says. Facts can be checked. Opinions say what someone thinks.
```
