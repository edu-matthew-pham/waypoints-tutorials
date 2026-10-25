---
order: 7
unit: mislead
title: Pictures out of place
summary: "A real picture can still mislead. A new caption can say it shows something it doesn't, an old picture can be passed off as today's, and cropping can hide what was around it. A picture is a source too: ask where it first appeared, who took it, when, and what was outside the frame."
language: science
shape: 5e
hook: "A post shows a crowd and says hundreds queued for the new skate park. The picture is real. Can the post still be wrong?"
---
A picture feels like proof: you can see it. But a picture only shows what was in front of the camera at one moment. The **caption** says what it is, and anyone can write a caption.

Three ways a real picture can mislead:

- **The caption**: words that say it shows something it doesn't.
- **The date**: an old picture passed off as new.
- **The crop**: cutting off the edges hides what was around it. A picture of four people, cropped close, can look like the front of a big crowd.

A picture is a **source**, so ask the same questions as for a page: where did it **first** appear, who took it, and when?

The pictures in this lesson are simple drawings made for practice, and the posts are made up. None shows a real person.

## Engage: can a real picture be wrong?

```step
stage: predict
insight: "Committing to an answer tests the move: the picture can be real and the post still wrong."
check:
  type: predict
  q: "A post shows a real picture of a crowd and says hundreds queued for the new skate park. Could the post be wrong?"
  options: ["Yes: the caption, the date or the crop could be wrong", "No: the picture is real", "Only if the picture was edited", "Only if the people are actors"]
  actual: "Yes. The picture can be real and the caption wrong. On the board, the crowd picture is from a school fair in 2019, and it shows four people, not hundreds."
```

## Explore: what the pictures really are

```step
stage: run
insight: "Reading each caption against where the picture came from settles the prediction: each post took a real picture out of place."
try: { playground: board, starter: "page.yml#run", height: 760 }
check:
  type: sort
  q: "Read the board. How does each post mislead?"
  options: ["The caption and date are wrong", "The caption claims something the picture can't show", "The picture isn't of the place at all"]
  items:
    - ["The skate park crowd", "The caption and date are wrong", "It is a school fair from 2019, not the skate park in 2026."]
    - ["The one-day bean", "The caption claims something the picture can't show", "A picture can't show how long a plant took to grow. The real one took four weeks."]
    - ["The heatwave sun", "The picture isn't of the place at all", "It is a drawing from a book, with no place or date."]
```

Was your guess right? Each picture was real. The post around it was not.

## Explain: trace it back

```step
stage: investigate
insight: "Ordering the questions for a picture, then a mistake planted after it, explains the move."
tasks:
  - check:
      type: question
      q: "What is the best first question to ask about a surprising picture?"
      options: ["Where did it first appear, and when?", "Is it in colour?", "How many people have shared it?", "Is it a big picture?"]
      answer: 0
      feedback: [null, "Colour says nothing about where it came from.", "Lots of shares mean lots of people saw it, not that the caption is true.", "Size says nothing about where it came from."]
      explain: "Where it first appeared and when tells you what it really shows. A reverse image search can help find that on a real device."
  - check:
      type: bug
      code: "working.txt#noor"
      text: "Noor shares a post that turns out to be wrong. Click the line where Noor first goes wrong."
      answer: 2
      fault: logic
      misconception: picture-is-proof
      explain: "Line 2: Noor decided the post was true because the picture looked real. A real picture can carry a wrong caption, an old date or a crop. She needed to ask where it first appeared."
```

### The first question

### Find Noor's mistake

## Elaborate: the crop

```step
stage: modify
insight: "The crop changes the task: what is outside the frame can change what a picture means."
check:
  type: question
  q: "A wide photo shows one person waving a flag at an empty sports ground. A post crops it close to the person and the flag and writes Riverbend fans pack the ground! What did the crop hide?"
  options: ["That the ground was empty", "The person's face", "The colour of the flag", "Nothing important"]
  answer: 0
  feedback: [null, "The person is still in the cropped picture.", "The flag is still in it.", "The empty seats were the most important part."]
  explain: "Cutting off the empty seats changed the story from one fan to a packed ground. Ask what was outside the frame."
```

## Practise: write where it came from

```step
stage: practise
insight: "Writing a picture's source line on a new draft repeats the habit: who took it, where it first appeared, when."
try: { playground: board, starter: "page.yml#trace", height: 640 }
hint: ["Click the picture. A box for the credit line appears above the page.", "Write three things with commas between them, such as: Sam Ortiz, riverbend-garden-club.example, 4 May 2026"]
check: { type: board, text: "The Gazette's picture has no source. Click the picture and write who took it, where it first appeared and when, with commas between them.", when: "n_credit = 1", explain: "A picture with who, where and when lets a reader check it, just like a page." }
```

Here is a made-up card for the picture:

| | |
|---|---|
| **Taken by** | Sam Ortiz |
| **First posted at** | riverbend-garden-club.example |
| **When** | 4 May 2026 |

## Elaborate: before you share

```step
stage: make
tier: typical
insight: "Deciding what to do with a surprising picture has students use the move where it matters: before sharing."
check:
  type: reasoning
  q: "A friend sends a picture of a giant hailstone with the caption Riverbend this morning! What do you do before you share it, and why?"
  models:
    - title: "A strong answer"
      text: "I would not share it yet. I would ask my friend where it came from, and look for a news or weather page from today that says there was hail in Riverbend. A real hailstone photo could be from another place or another year."
    - title: "A different view that also works"
      text: "I would just not share it. It is not important enough to check, and if it is wrong I would be spreading something untrue."
  criteria: ["I said what I would do before sharing.", "I said how I would find where it came from, or why I would not share it.", "I said what could be wrong even if the picture is real."]
  explain: "A real picture can still be out of place. Check where it first appeared, or don't share it."
```

## Evaluate: a picture is a source

```step
stage: info
check: { type: reflect, text: "I can explain how a real picture can mislead through its caption, its date or its crop, and ask where it first appeared." }
```

Making fake pictures with AI is in [AI in your life › Can you spot a fake?](../../../ai/ai-in-your-life/spot-a-fake/). This lesson is about real pictures in the wrong place, which are even more common.
