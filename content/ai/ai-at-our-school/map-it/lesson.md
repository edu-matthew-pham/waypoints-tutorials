---
title: Map it
summary: "Most AI reaches students without a committee choosing it. Map the made-up school's AI by how it arrived: we chose it, it arrived as a new feature, or students bring it. Then plan how to map your own school without surveying anyone's private use."
language: science
shape: 5e
unit: already-here
order: 8
voice: { name: af_heart, speed: 1.1 }
---
Unit 2 was about a tool someone **proposed**. But most AI reaches students another way: a new button in an app the school already uses, an AI answer at the top of a search page, an app from home. **Before a committee can respond, it needs a map: what AI is already here, and how it arrived.**

> **Westbrook's tools this term (made up)**
> - A **reading app** the school chose last year, with AI voices that read text aloud.
> - A **maths practice site** the school pays for. This term it added an "AI hint" button, switched on for everyone.
> - The **search page** students use for research now shows an AI-written answer above the results.
> - The **document editor** everyone uses gained a "Rewrite with AI" button in an update.
> - **Translation apps** some students use at home.
> - **AI chat apps** some students use at home.

## Engage: who chose it?

```step
stage: predict
check:
  type: predict
  q: "Of the six AI tools on Westbrook's list, how many did the school choose?"
  options: ["All six", "About half", "One"]
  actual: "One: the reading app. Three arrived inside tools the school already uses, switched on in an update, and two come from home. A committee that only judges proposed tools misses most of the AI students meet."
```

## Explore: map Westbrook

```step
stage: run
tasks:
  - check:
      type: sort
      q: "How did each tool reach Westbrook's students?"
      options: ["We chose it", "It arrived (a feature in a tool we use)", "Students bring it"]
      items:
        - ["The reading app's AI voices", "We chose it", "The school picked the app, AI voices included."]
        - ["The maths site's new 'AI hint' button", "It arrived (a feature in a tool we use)", "The school chose the site, but not the AI button: it came in an update."]
        - ["The AI answer at the top of the search page", "It arrived (a feature in a tool we use)", "Nobody at school switched it on."]
        - ["'Rewrite with AI' in the document editor", "It arrived (a feature in a tool we use)", "It appeared in an update to a tool everyone already uses."]
        - ["Translation apps at home", "Students bring it", "The school didn't choose it, and may not know who uses it."]
        - ["AI chat apps at home", "Students bring it", "Used outside school, often on homework."]
  - check:
      type: reasoning
      q: "Westbrook wants to map AI at school without asking students what they do in private. How could the committee find out what's on the map?"
      placeholder: "We'd find out by: 1. … 2. … 3. …"
      models:
        - title: "A strong answer"
          text: "1. Ask teachers which AI features have turned up in the tools their classes use. 2. Ask the IT team for update notes from the tools the school pays for. 3. A class discussion about which tools have AI in them in general, with no names and no 'who uses what'."
        - title: "A different view that also works"
          text: "1. Each committee member checks one school tool's settings and update notes. 2. A suggestion box where anyone can report 'I found AI in…'. 3. Check what the search page shows on a school laptop."
      criteria: ["I found at least two ways.", "None of them asks individual students about their private use.", "At least one would catch features that arrive in updates."]
      explain: "Map tools and tasks, not people. A committee doesn't need to know who uses what at home to know what's out there."
```

### Map Westbrook

Sort the six tools by how they arrived.

### Map without prying

How could the committee find out?

## Explain: three ways in

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why does it matter how an AI tool arrived?"
      options: ["Each route needs a different kind of response: a tool we chose can be dropped; a feature that arrived may only have a setting; a home app can't be switched off at all", "It doesn't: AI is AI", "Only tools the school chose are real AI"]
      answer: 0
      feedback: [null, "The kind of AI matters too, but so does what the school can actually do about it.", "Features and home apps are often the same kind of AI."]
  - check: { type: reflect, text: "I can sort AI by how it arrived and explain why that changes what a school can do." }
```

AI reaches students three ways:

1. **We chose it.** The school picked the tool. It can review it, change it, or drop it (Unit 2).
2. **It arrived.** A feature switched on in an update to a tool the school already uses. The school may have a setting, or may have to ask the company for one.
3. **Students bring it.** Apps from home. The school can't switch them off; it can teach habits and change tasks.

A committee's **map** lists each item, how it arrived, what kind of AI it is, what it touches (research, writing, maths…), and whether it can **act**: send, submit, change or buy something for you. Features that can act go to the top of the list. **Map tools and tasks, not people.**

### Why it matters

What can the school do for each route?

### Explain it

Name the three ways in.

## Elaborate: who notices an update?

```step
stage: modify
tier: typical
check:
  type: question
  q: "The maths site added its 'AI hint' button in a July update. Westbrook's teachers noticed in September. How could the committee notice sooner next time?"
  options: ["Someone reads the update notes of the school's main tools each term", "Ban all updates", "Wait for students to complain"]
  answer: 0
  feedback: [null, "Updates also fix security problems: blocking them causes other harm.", "Some students won't notice, and some will just use it."]
```

New features often arrive in updates, switched on, with a note on the company's website. A committee can share the job: each member watches **one** tool's update notes, and brings anything new to the next meeting.

## Elaborate: what kind of AI?

```step
stage: make
tier: wider
check: { type: reflect, text: "I added the kind of AI to each item on the map, and explained how it changes what could go wrong." }
```

For each item on Westbrook's map, name the kind of AI (from [What kind of AI is it?](../../foundations/kinds-of-ai/)): **rules written by people**, **learns to predict or sort**, **makes new content**, or **takes actions**.

The search answer and "Rewrite with AI" **make new content**: they can be wrong in ways that look right. An AI that **takes actions** (books, sends, submits, buys) needs a person to confirm first, and more tools are adding features that act. How would the kind change your response?

## Evaluate: response plan, part 1

```step
stage: info
check:
  type: question
  q: "A committee member wants to survey every student about which AI apps they use at home, with names. What's the better approach?"
  options: ["Map tools and tasks, not people: ask about tools in general, with no names", "Survey everyone: more data is better", "Ignore home apps completely"]
  answer: 0
  feedback: [null, "More data about named students is a privacy cost, and the committee doesn't need it to respond.", "Home apps still affect homework; map them without names."]
```

On paper, start the **response plan** with the map.

| AI on the map | How it arrived | Kind of AI | What it touches | Can it act? |
|---|---|---|---|---|
| | we chose / arrived / students bring | | | send / submit / change / no |
| | | | | |
| | | | | |

**Next lesson:** choose a response for each item.
