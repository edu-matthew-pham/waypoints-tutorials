---
order: 1
unit: perspectives
title: Whose view is it?
node: AC9HC7S03 n1
summary: "Every source about a civic issue comes from someone with a view. To read it well, ask who made it, what they want to happen, and what they put in or leave out. Official sources, like a council notice or a survey, have a view too."
language: maths
hook: "The council, the newspaper and the shop owners are all talking about the same street. Can any of them be completely neutral?"
---
Wattle Creek council is deciding whether to close Main Street to cars on Saturday mornings for a market. Wattle Creek, its council and everyone in these sources are made up.

When you read a source about an issue like this, ask three questions:

1. **Who made it?** A council, a newspaper, a group, a person?
2. **What do they want to happen?**
3. **What did they put in, and what did they leave out?**

The answers tell you the source's **perspective**: the view it comes from.

Here are the sources for this lesson.

> **Council notice (Wattle Creek Council).** From March, Main Street will close to cars from 7 am to 1 pm on Saturdays for a three-month trial market. The market will bring the town together and support local growers. Have your say by 28 February.

> **Editorial (*Wattle Creek Gazette*).** A Saturday market is exactly what Main Street needs. Markets in other towns draw crowds, and our street is half empty by ten o'clock. A lively street on a Saturday is what holds a town together. The council should make the trial permanent.

> **Post (Main Street Traders).** Some of our members welcome the crowds. Others rely on customers who drive in for a quick stop, and on deliveries before noon. We ask the council to keep a loading zone open and to check our sales after the trial.

> **Bus notice (Wattle Creek Buses).** During the trial, Route 2 will not stop on Main Street on Saturday mornings. The nearest stop will be on River Road.

## Predict: is any of them neutral?

```step
stage: predict
insight: "Asking which source is neutral brings out the belief that official sources have no view, before the lesson shows that every source does."
check:
  type: predict
  q: "Which of the four sources has no perspective at all?"
  options:
    - "None of them: each comes from someone with a view"
    - "The council notice, because it comes from the government"
    - "The bus notice, because it only gives the facts"
    - "The editorial, because newspapers report the news"
  actual: "None of them. The council notice says what the council hopes the market will do. The bus notice is mostly facts, but it's written for the bus company and leaves out who will find the new stop harder to reach. The editorial openly argues for the market. Every source comes from somewhere."
```

## Try: who made it, and what do they want?

```step
stage: run
insight: "Matching each source to what its maker wants is the first move in reading a perspective."
check:
  type: match
  q: "Match each source to what its maker wants to happen."
  pairs:
    - ["Council notice", "Run the trial and hear people's views"]
    - ["Gazette editorial", "Make the market permanent"]
    - ["Main Street Traders' post", "Keep a loading zone and check sales"]
    - ["Bus notice", "Tell passengers where the bus will stop"]
```

## Worked example: reading the council notice

```step
stage: investigate
insight: "Taking apart the most official-looking source shows that it has a view too, and catches Nib's belief that government sources are just facts."
tasks:
  - check:
      type: question
      q: "The council notice says the market 'will bring the town together'. What is that?"
      options:
        - "What the council hopes, not something it can know yet"
        - "A fact, because the council wrote it in a notice"
        - "A fact, because markets always bring towns together"
        - "A mistake, because councils aren't allowed to have hopes"
      answer: 0
      feedback:
        - null
        - "Being in an official notice doesn't make something a fact. The market hasn't happened yet."
        - "That's a claim about every market. No one can check it for this town until the trial runs."
        - "Councils can have aims. It's fine, as long as you read it as an aim."
      explain: "The trial hasn't happened, so the council can't know yet. It is the council's hope, which tells you its perspective."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is reading the council notice. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: official-source-is-neutral
      explain: "Line 3: a council notice is official, but it still comes from the council's point of view. It includes the council's hopes and leaves out who might lose out."
    smaller:
      check:
        type: question
        q: "The notice says the market will 'bring the town together'. Can anyone check that yet?"
        options:
          - "No, the trial hasn't happened yet"
          - "Yes, because the council is in charge"
          - "Yes, because it's printed in a notice"
        answer: 0
        explain: "If it can't be checked yet, it's a hope, not a fact. That's part of the council's view."
        feedback:
          - null
          - "Being in charge doesn't make a hope come true."
          - "Printing something doesn't make it a fact."
```

```worked
\text{Who made it?} :: Wattle Creek Council.
\text{What do they want?} :: To run the trial and hear people's views.
\text{What's in?} :: Times, dates, and the council's hope that the market will bring the town together.
\text{What's left out?} :: Who might find Main Street harder to reach on a Saturday.
```

### A fact or a hope?

### Find Nib's mistake

## Vary: what's in and what's left out?

```step
stage: modify
insight: "Sorting what the traders put in and left out shows how a group's aims shape what it says."
check:
  type: sort
  q: "The Main Street Traders' post. Is each of these in it, or left out?"
  options: ["In the post", "Left out of the post"]
  items:
    - ["That some traders welcome the crowds", "In the post", "The post says some members welcome the crowds."]
    - ["That deliveries come before noon", "In the post", "The post mentions deliveries before noon."]
    - ["How many traders are for or against", "Left out of the post", "The post says 'some' and 'others', but never how many."]
    - ["What people who don't own a shop think", "Left out of the post", "The traders speak for their members, not for shoppers or residents."]
    - ["That the traders want sales checked after the trial", "In the post", "They ask the council to check sales."]
```

## Practise: whose view is missing?

```step
stage: practise
insight: "Asking whose view is missing turns reading a perspective into looking for the gaps."
tasks:
  - check:
      type: question
      q: "The Gazette editorial says Main Street is 'half empty by ten o'clock'. Whose view is missing from the editorial?"
      options:
        - "People who need to drive in or park nearby"
        - "People who think the street is too quiet"
        - "People who like going to markets in other towns"
        - "Shops that would gain from more people walking past"
      answer: 0
      feedback:
        - null
        - "That view is in the editorial. It's the editorial's main point."
        - "The editorial mentions other towns' markets, so that view is in it."
        - "The editorial already speaks for them: its whole point is more people on the street."
      explain: "The editorial argues for the market and leaves out people who might lose out, such as those who drive in or need to park nearby."
  - check:
      type: question
      q: "The bus notice is mostly plain facts. What perspective does it still have?"
      options:
        - "It doesn't say who will find the new stop hard to reach"
        - "None, because a timetable change is only facts"
        - "It's quietly arguing against the market"
        - "It's the council's view, because buses are public"
      answer: 0
      feedback:
        - null
        - "Even a list of facts is chosen by someone. Ask what the bus company didn't include."
        - "It doesn't argue for or against. Its view shows in what it leaves out."
        - "The notice comes from Wattle Creek Buses, not the council."
      explain: "Facts can still come from a perspective. The bus company tells passengers where to go, but not who will find River Road harder to reach."
```

### Whose view is missing?

### A source that looks neutral

## Make: one source, three questions

```step
stage: make
insight: "Answering the three questions about one source shows the student can read a perspective on their own."
check:
  type: reflect
  text: "In my own book I chose one of the four sources and wrote who made it, what they want to happen, and one thing it leaves out. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: an accurate source can still lean

```step
stage: make
tier: typical
insight: "Seeing that a source can be accurate and still one-sided separates checking facts from reading perspective."
check:
  type: question
  q: "Every fact in the Gazette editorial might be true, and it still leans one way. How?"
  options:
    - "It picks facts that support the market and leaves others out"
    - "It can't lean if every fact in it is true"
    - "It leans only if the newspaper made up a fact"
    - "It leans because newspapers are never allowed to argue"
  answer: 0
  feedback:
    - null
    - "Choosing which true facts to include is one of the main ways a source shows its view."
    - "A source can lean without saying anything false. Look at what it chose."
    - "Editorials are meant to argue. That's why you read them for their view."
  explain: "A source shows its view through which facts it chooses, not only through what it says."
```

## Wider: whose view is this course missing?

```step
stage: make
tier: wider
insight: "Turning the question on the lesson itself shows the skill works on any set of sources, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "These four sources don't include everyone. Name one person or group in a town like Wattle Creek whose view is missing, and say what they might want."
  paper: true
  models:
    - title: "One answer"
      text: "The growers who would sell at the market. They might want the trial to run so they can reach more customers."
    - title: "A different answer"
      text: "People who live on Main Street. They might worry about noise early on Saturday mornings, or they might be glad to have a market at the door."
  criteria:
    - "I named someone whose view is missing."
    - "I said what they might want and why."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare ideas.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
