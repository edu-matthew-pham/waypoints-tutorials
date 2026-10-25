---
order: 5
unit: you
title: Screens and me
summary: "Screens can be fun, useful and a way to stay close to people, and they share a day with sleep, moving, friends and quiet time. Noticing how you feel during and after is more useful than counting minutes. Some app features are designed to keep you going, and small habits you choose yourself can help you stop when you want to. There is no right number, and nobody else needs to know yours."
language: science
shape: 5e
hook: "Noah sits down to watch one video before dinner. When his dad calls him, it's dark outside. Where did the time go?"
---
Noah and Priya are made up. Nobody will ask how long you spend on screens, and you do not need to say.

## Engage: where does the time go?

```step
stage: predict
insight: "Committing to a guess: losing track of time is common, and it is partly how some apps are designed."
check:
  type: predict
  q: "Noah meant to watch one video and watched for an hour. Why might that happen?"
  options: ["The next video starts by itself and the feed never ends, so there is no natural place to stop", "Noah has no self-control", "Videos are always longer than they look"]
  actual: "Often it's the design: autoplay and endless feeds take away the natural places to stop. That happens to adults too. It isn't a sign that something is wrong with Noah."
```

## Explore: how does it feel?

```step
stage: run
insight: "Sorting by how a screen time feels, not how long it lasts, gives students a way to notice without judging."
check:
  type: sort
  q: "Priya notices how she feels after different screen times. Which ones sound like they left her feeling good, and which left her feeling worse?"
  options: ["Left her feeling good", "Left her feeling worse"]
  items:
    - ["A video call with her cousin overseas", "Left her feeling good", "Staying close to people is one of the best things screens do."]
    - ["Learning a song on a tutorial video, then playing it", "Left her feeling good", "Making or learning something often feels good after."]
    - ["Scrolling in bed until late and waking up tired", "Left her feeling worse", "Screens just before sleep often push sleep later."]
    - ["Checking a group chat over and over during dinner", "Left her feeling worse", "She missed the conversation at the table, and felt on edge."]
    - ["A building game with a friend after homework", "Left her feeling good", "Fun with a friend, at a time she chose."]
    - ["Comparing herself with photos of other people for an hour", "Left her feeling worse", "Photos online show the best moments, often edited."]
```

Was your guess right? The same screen can leave you feeling good or worse. **How it feels during and after** tells you more than the number of minutes.

## Explain: notice, then choose

```step
stage: investigate
insight: "Naming two ideas: some features are designed to keep you, and habits you choose can help you stop."
tasks:
  - check:
      type: sort
      q: "Does each app feature mostly keep you going, or help you stop?"
      options: ["Keeps you going", "Helps you stop"]
      items:
        - ["The next video starts by itself", "Keeps you going", "No natural place to stop."]
        - ["The feed never ends", "Keeps you going", "There is always one more."]
        - ["'You're all caught up'", "Helps you stop", "A natural place to stop."]
        - ["A reminder when you reach a time you chose", "Helps you stop", "It's your own limit, set by you."]
        - ["Streaks: lose it if you miss a day", "Keeps you going", "It pulls you back every day."]
  - check:
      type: question
      q: "Which of these is a habit Noah could choose for himself?"
      options: ["Decide one or two videos before he starts, then do something else", "Never watch videos again", "Watch until his dad takes the device", "Feel bad about it"]
      answer: 0
      feedback: [null, "Videos can be fun and useful. A habit works better than a ban he made up for himself.", "That leaves the choice to someone else.", "Feeling bad doesn't change the habit. A small plan does."]
      explain: "A small plan made before he starts gives him a place to stop."
```

Two ideas help:

1. **Notice.** How do I feel during and after? Tired, on edge, left out, or happy, calm, connected?
2. **Choose a habit that fits you.** Decide before you start. Charge the device outside the bedroom at night. Turn off autoplay or notifications you don't need. Swap one scroll for a call, a game with a friend, or going outside.

There is no right number of minutes, and screens are not bad. If screens ever start to feel like they're taking over, or you feel worried or low, talk to a trusted adult. You can also call Kids Helpline on 1800 55 1800, which is free for young people.

### Keeps you, or helps you stop?

### A habit Noah can choose

## Elaborate: switch features off

```step
stage: modify
tier: typical
insight: "Years 7 and 8: a made-up model shows how much difference a few features make to one session."
try: { playground: board, starter: "boards.yml#design", height: 560 }
hint: ["Which features are switched on? Which ones add the most minutes?", "Turn off the feed that never ends and the video that starts by itself first."]
check: { type: board, text: "Sam planned 15 minutes. Change the features so his session fits, with at least one feature that helps him stop switched on.", when: "u = 1 and h >= 1", explain: "Turning off autoplay and infinite scroll does most of the work; 'all caught up' and a time reminder help him stop. The minutes are a made-up model, not a measurement." }
```

The minutes on this board come from a made-up model, to show the idea. AI in your life › [Designed to keep you](../../../ai/ai-in-your-life/designed-to-keep-you/) goes further.

## Evaluate: a private plan

```step
stage: info
check: { type: reflect, text: "I thought about one screen habit I might try. I don't need to write it down or tell anyone." }
```

**A private plan** (just for you): is there one small habit you'd like to try this week? You can change your mind, and nobody will check.
