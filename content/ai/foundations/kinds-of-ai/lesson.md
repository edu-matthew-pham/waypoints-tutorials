---
title: What kind of AI is it?
summary: Sort everyday systems into four kinds (rules written by people, models that predict, models that make new content, and agents that act), then match each kind to the way it usually goes wrong.
language: science
shape: 5e
unit: how-ai-learns
order: 5
voice: { name: af_heart, speed: 1.1 }
---
People call many different things "AI". Some follow rules that people wrote. Some learned from examples, like your fruit sorter. Some make new text or pictures, like your dice generator. Some take actions for you. **Knowing which kind you are looking at tells you how it might go wrong.**

## Engage: is it all the same thing?

```step
stage: predict
check:
  type: predict
  q: "An advert says a school's bell app, a spam filter and a chatbot all 'use AI'. Do they all work the same way?"
  options: ["Yes: AI is AI", "No: they could work in quite different ways", "Only the chatbot is really AI"]
  actual: "They can work very differently. The bell app may just follow a rule someone typed in, the spam filter learned from examples, and the chatbot makes new text."
```

## Explore: sort the systems

```step
stage: run
check:
  type: sort
  q: "Which kind is each system?"
  options: ["Rules written by people", "Learns to predict or sort", "Makes new content", "Takes actions"]
  items:
    - ["Your fruit sorter from this unit", "Learns to predict or sort", "It learned from labelled examples, then sorts new fruit."]
    - ["Your dice text generator", "Makes new content", "It makes new sentences from patterns in its examples. Real chatbots do this on a much bigger scale."]
    - ["A bell app that rings at 8:50 because someone typed in that time", "Rules written by people", "Nobody trained it. It does exactly what people told it."]
    - ["A spam filter trained on emails people marked as spam", "Learns to predict or sort", "It learned from labelled examples, like your sorter."]
    - ["An app that draws a picture from a sentence you type", "Makes new content", "It makes a new picture from patterns in many pictures it learned from."]
    - ["An assistant that books a bus ticket, pays for it and emails you the receipt", "Takes actions", "It doesn't just answer. It does things in the world for you."]
    - ["A library system: 'if a book is 7 days late, send a reminder'", "Rules written by people", "A person wrote that rule. The computer follows it every time."]
    - ["A video app that picks your next video from what you watched", "Learns to predict or sort", "It predicts what you will watch, from patterns in what people watched before."]
```

The four kinds:

1. **Rules written by people.** The computer follows instructions a person wrote. It doesn't learn. News stories often still call this "AI" or "an algorithm".
2. **Learns to predict or sort.** It learns patterns from labelled examples, then predicts or sorts new cases. Your fruit sorter and neural network were this kind.
3. **Makes new content.** It learns from huge amounts of text, pictures or sound, then makes something new. Your dice generator was a tiny version. Chatbots and image makers are this kind. It is often called **generative AI**.
4. **Takes actions.** It is usually a content-making AI that can also use tools: it plans steps and does things, like buying, sending or deleting. It is often called an **AI agent**.

Ask: did a person write the rule, did it learn from examples to sort, does it make something new, or does it do something for you?

## Explain: how does each kind go wrong?

```step
stage: investigate
tasks:
  - check:
      type: sort
      q: "Which way of going wrong fits each problem?"
      options: ["The rule is wrong, and it is used on everyone", "It learned from wrong or missing examples", "It made something convincing that isn't true", "It acted before anyone checked"]
      items:
        - ["The library system sends 'Your book is late!' to students who were away sick, every single time", "The rule is wrong, and it is used on everyone", "The rule never thought about being away sick, so it treats everyone the same."]
        - ["A spam filter keeps hiding emails from a new sports club, because it never saw emails like them", "It learned from wrong or missing examples", "Like your sorter with no yellow, round apples."]
        - ["A chatbot writes a book list for your project. Two of the books don't exist", "It made something convincing that isn't true", "It made likely-sounding titles, like your dice generator made likely-sounding sentences."]
        - ["An assistant pays for the wrong bus ticket before you can look at it", "It acted before anyone checked", "Answering wrongly is one thing. Paying wrongly is harder to undo."]
  - check:
      type: question
      q: "A rule-following system and a system that learned from examples both give the wrong answer. Where would you look first to fix each?"
      options: ["Rules: the rule people wrote. Learned: its examples and labels", "Both: the computer's speed", "Both: nothing can be fixed"]
      answer: 0
      feedback: [null, "A faster computer gives the same wrong answer, faster.", "Both can be fixed, but in different places."]
  - check: { type: reflect, text: "I can name the four kinds of AI and one way each kind goes wrong." }
```

Each kind usually goes wrong in its own way:

- **Rules:** the rule is wrong or unfair, and it is used on everyone at once.
- **Predict or sort:** it learned from wrong or missing examples (your sorter's two mistakes).
- **Makes new content:** it makes something likely-sounding that isn't true, or copies too closely from what it learned.
- **Takes actions:** it acts on a mistake before a person can check, and some actions can't be undone.

### Match the problems

Read each problem. Which kind of system is it, and so how did it go wrong?

### Where to look

When something goes wrong, the kind tells you where to look.

### Explain it

Name the four kinds, and one way each goes wrong.

## Elaborate: one app, several kinds

```step
stage: modify
tier: typical
check:
  type: sort
  q: "A made-up homework app does all of these. Which kind is each part?"
  options: ["Rules written by people", "Learns to predict or sort", "Makes new content", "Takes actions"]
  items:
    - ["It writes an explanation when you ask a question", "Makes new content"]
    - ["It suggests which topic to practise next, from what students like you got wrong", "Learns to predict or sort"]
    - ["It hands in your work to your teacher when you press Submit", "Rules written by people", "A person wrote 'when Submit is pressed, send the file'. Nothing was learned."]
    - ["It can find a due date in your calendar and hand in your work on its own", "Takes actions"]
```

Real apps often mix several kinds. A single "AI" label can hide all four.

Look at the last two parts. Pressing **Submit** follows a rule. Handing in work **on its own** is an action the AI chooses. Which one needs a person to check first?

## Elaborate: what does the headline mean?

```step
stage: make
tier: wider
check: { type: reflect, text: "I rewrote a headline so it says which kind of system it was, and explained why that changes the questions to ask." }
```

A headline says: **"AI decided who got the job."**

That could mean a rule people wrote ("only people with a licence"), a model that learned from past hiring, a chatbot that wrote a summary of each person, or an agent that sent the rejection emails. For each meaning, what is the first question you would ask?

Rewrite the headline so it says which kind it was.

## Evaluate: which kind, so which question?

```step
stage: info
check:
  type: question
  q: "A news story says: 'An algorithm lowered students' marks.' What should you find out first?"
  options: ["What kind of system it was: a rule people wrote, or a model that learned from examples", "How fast the computer was", "Whether the algorithm had a name"]
  answer: 0
  feedback: [null, "Speed doesn't tell you why the marks changed.", "A name doesn't tell you how it works or where it went wrong."]
```

On paper, write: **"\_\_\_\_ is the kind of AI that \_\_\_\_. It can go wrong when \_\_\_\_."** Do it for one kind you used in this course.

**Where this leads:** whenever you meet a new system, ask which kind it is before you ask whether to trust it.
