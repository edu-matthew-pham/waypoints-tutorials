---
title: How does a feed choose?
summary: "Be the algorithm: a feed ranks posts by predicting what will keep you watching, from signals like watch time, likes and shares. What it counts decides what rises."
language: science
shape: 5e
unit: built-to-keep-you
order: 2
voice: { name: af_heart, speed: 1.1 }
---
Every time you open a video app, a model chooses what comes first. It doesn't know what's good for you. It **predicts** what you'll watch, from **signals**. Today you are the algorithm.

**Kind of AI:** learns to predict or sort (a recommender).

## Engage: what does the feed want?

```step
stage: predict
check:
  type: predict
  q: "A video app wants you to keep watching. Which post will it most likely put first?"
  options: ["The one people watch longest and argue about most", "The one you said you wanted", "The newest one"]
  actual: "Usually the one it predicts you'll watch longest and react to. Australia's eSafety Commissioner says platforms overwhelmingly prioritise engagement when they sort content."
```

## Explore: be the algorithm

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 720 }
tasks:
  - check: { type: board, text: "Press 'The app's goal: keep Sam watching'. Which posts rise to the top?", when: "p = 1" }
    hint: "Press the first button under the sliders, then read the top three posts."
  - check: { type: board, text: "Now be fair to Sam: get two posts from people he follows into the top 3, with no posts he asked for less of.", when: "f >= 2 and d = 0" }
    hint: ["Which sliders are about Sam's choices?", "Turn up 'From people Sam follows' and 'What Sam says he wants', and turn down watch time and shares."]
```

The feed gives each post a **score**. Each signal (watch time, likes, shares, who posted it, what Sam asked for) gets a number, and you choose **how much each one counts**. The highest score goes first.

### The app's goal

Set it like an app that wants Sam to keep watching. What rises?

### Sam's goal

Make it fair to what Sam asked for.

## Explain: what it counts decides what rises

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "With the app's goal, two posts Sam asked for less of rose into the top 3. Why?"
      options: ["People watch and argue about them a lot, and the app counted that most", "Sam secretly wanted them", "The app made a mistake"]
      answer: 0
      feedback: [null, "Sam asked for less of them. The app counted something else.", "It did exactly what its goal asked: keep Sam watching."]
  - check:
      type: question
      q: "So who decides what Sam sees first?"
      options: ["Whoever chooses what the feed counts: the app's makers", "Sam, completely", "Nobody: it's random"]
      answer: 0
      feedback: [null, "Sam's choices are only some of the signals, and only if the app counts them.", "It's a calculation, not chance."]
  - check: { type: reflect, text: "I can explain how a feed ranks posts from signals, and why what it counts decides what I see." }
```

A feed is a model that **predicts** what you'll engage with. What it **counts** decides what rises. If it counts watch time and arguments most, posts that make people angry can rise, even if you asked for less of them.

Real apps use **thousands of signals**, learned from what millions of people do. The idea is the same.

### The arguments

Why did they rise?

### Who decides?

Who chose what counts?

### Explain it

Say it in your own words.

## Elaborate: what you can change

```step
stage: modify
tier: typical
check:
  type: sort
  q: "Which of these is a signal you can send the feed, and which is the app's choice?"
  options: ["A signal you send", "The app's choice"]
  items:
    - ["Pressing 'Not interested' on a post", "A signal you send"]
    - ["How much 'Not interested' counts compared with watch time", "The app's choice"]
    - ["Following a friend's account", "A signal you send"]
    - ["Whether the feed shows friends first or popular posts first", "The app's choice"]
    - ["Watching a video to the end", "A signal you send", "Even watching is a signal, whether you liked it or not."]
```

You send signals all the time, even by **how long you look**. But the app chooses **how much each signal counts**. Which signals could you send on purpose to shape your feed?

## Elaborate: what amplifies

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained how ranking for engagement can amplify content people don't prefer, using the study's finding." }
```

Researchers studied Twitter's feed (2023). Ranking by engagement **amplified emotionally charged, out-group hostile content** (posts angry at "the other side") that users said they **didn't prefer**.

Why might a feed show more of what people don't want? Who gains from it, and who loses? If you designed a feed, what would you count instead, and what would you lose?

## Evaluate: your feed

```step
stage: info
check:
  type: question
  q: "A friend says: 'My feed shows me what I like.' What's a more accurate way to say it?"
  options: ["It shows what it predicts I'll watch and react to, which isn't always what I like", "It shows exactly what I like", "It's random"]
  answer: 0
  feedback: [null, "Sam's feed showed arguments he asked to see less of.", "It's a calculation from signals."]
```

On paper: **"A feed chooses what I see by \_\_\_\_. It counts \_\_\_\_ most, because the app wants \_\_\_\_."**

**Next lesson:** features designed to keep you there.
