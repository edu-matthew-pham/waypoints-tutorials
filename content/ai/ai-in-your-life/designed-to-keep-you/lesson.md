---
title: Designed to keep you
summary: "Some app features serve the app's goal (more time), not yours, and many of them aren't AI at all. Spot them, and know what the evidence about 'addiction' does and doesn't say."
language: science
shape: 5e
unit: built-to-keep-you
order: 3
voice: { name: af_heart, speed: 1.1 }
---
Last lesson the feed chose **what** you see. This lesson is about **how long** you stay. Apps are designed, and some features are designed to keep you there. **Which ones, and how can you tell?**

**Kind of AI:** the feed is predict or sort. Many "sticky" features are **not AI at all**: they're design choices people made.

## Engage: who planned it?

```step
stage: predict
check:
  type: predict
  q: "Sam plans 15 minutes on a video app after school and stays for 40. Whose plan won?"
  options: ["The app's design", "Sam's plan", "Nobody's: it just happened"]
  actual: "Usually the app's design. Features like autoplay and endless scrolling remove the natural places to stop. That's a choice the app's makers made."
```

## Explore: switch features

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 640 }
tasks:
  - check: { type: board, text: "Change the features so Sam's session fits his 15-minute plan.", when: "u = 1" }
    hint: ["Which features are switched on? Which ones add the most minutes?", "Turn off infinite scroll and autoplay first."]
  - check: { type: board, text: "Now keep Sam within his plan with at least one feature that helps him stop switched on.", when: "u = 1 and h >= 1" }
    hint: "Two features help Sam stop: 'You're all caught up' and the time-limit reminder."
```

The board is a made-up model: its minutes show the idea, not real measurements.

### Fit the plan

Which features add the most time?

### Help him stop

Which features are on Sam's side?

## Explain: helps you, or keeps you?

```step
stage: investigate
tasks:
  - check:
      type: sort
      q: "Does each feature mostly help you, or mostly keep you there? Is it AI?"
      options: ["Keeps you, and isn't AI", "Keeps you, and is AI", "Helps you stop"]
      items:
        - ["Autoplay: the next video starts by itself", "Keeps you, and isn't AI", "It's a design choice: no prediction needed."]
        - ["Infinite scroll: the feed never ends", "Keeps you, and isn't AI"]
        - ["The feed choosing the video you're most likely to watch next", "Keeps you, and is AI", "That's the prediction from last lesson."]
        - ["Streaks: lose your streak if you miss a day", "Keeps you, and isn't AI"]
        - ["'You're all caught up'", "Helps you stop"]
        - ["A reminder when you reach the time limit you set", "Helps you stop"]
  - check: { type: reflect, text: "I can name features designed to keep me on an app, and say which ones are AI." }
```

Some features **keep you** (autoplay, endless scroll, streaks, notifications). Others **help you stop** (an end to the feed, time reminders). Most sticky features **aren't AI**: people designed them. The AI part is usually the feed choosing the next thing you're most likely to watch.

Australia's eSafety Commissioner says features like infinite scroll and autoplay can encourage people to use apps more than they mean to.

### Sort the features

Which side is each one on?

### Explain it

Say it in your own words.

## Elaborate: is "addiction" the right word?

```step
stage: modify
tier: typical
check:
  type: question
  q: "People say apps are 'addictive'. What does the evidence say so far?"
  options: ["Studies find links between heavy use and young people's health, but they're small, and they don't prove apps cause the harm", "It's proved that apps cause harm to everyone", "There's no link at all"]
  answer: 0
  feedback: [null, "A big US review didn't find that social media causes changes in health across the whole population.", "Studies do find consistent small links, stronger in early teens."]
```

- A big US review (National Academies, 2024) **did not find** that social media **causes** health changes across the whole population.
- A 2026 review of 153 studies (by Australian researchers) found digital media use is **consistently, but weakly, linked** to risks to young people's health, more in early teens. It can't show cause.
- "Social media addiction" is **not a formal medical diagnosis** (2026). People argue about the word.

So: the design is real, the links are real but small, and **cause** is still argued about. Why do people disagree when the evidence is uncertain?

## Elaborate: rules about design

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained two different ways governments are dealing with sticky apps, and what each one can and can't do." }
```

- **Australia** set a minimum age of 16 for many social media accounts from 10 December 2025. Three months in, the share of under-16s holding an account had fallen from about 52% to about 42%. eSafety says it's too early to judge, and that platforms not acting was the main reason children still held accounts.
- **The European Commission** (Feb 2026) found, as a first step, that TikTok's design **may lead to compulsive behaviour** and break EU rules. No final decision yet.

One approach limits **who** can use an app; the other targets **how the app is designed**. Which do you think works better, for whom, and why? What would you want to measure?

## Evaluate: your design

```step
stage: info
check:
  type: question
  q: "A new homework app has a streak: 'Practise every day or lose your streak!' Who does that help most?"
  options: ["It depends: it could help a student practise, or keep them using the app when they'd rather stop", "Always the student", "Always the app"]
  answer: 0
  feedback: [null, "A streak can push you to keep going when you don't need to.", "Streaks can help people build habits too."]
```

On paper: design one feature for an app that **helps people stop**. Who gains from it, and what might the app lose?

**Next lesson:** chatbots that feel like friends.
