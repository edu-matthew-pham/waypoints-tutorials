---
order: 4
node: AC9S9U01 n4
unit: control
title: Which system runs it?
summary: "Given a job for the body, you decide whether nerves or hormones should run it, and say why: how fast the message has to be, how long the effect should last and how many places it has to reach. Nerves suit fast, short jobs aimed at one place; hormones suit slower, lasting jobs that reach many cells, and only target cells with matching receptors respond."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8218
  url: http://127.0.0.1:8218/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Nerves and hormones"
  say: "Nerves are fast and targeted; hormones are slower, travel in the blood and last longer."
  clip:
    - caption: { text: "A nerve signal and a hormone, released at the same moment.", say: "A nerve signal and a hormone, released at the same moment." }
    - wait: 3280
    - click: "Send both signals"
    - wait: 1500
    - caption: { text: "The nerve impulse arrives first, at one muscle.", say: "The nerve impulse arrives first, at one muscle." }
    - wait: 2500
    - caption: { text: "The hormone travels in the blood: slower, but reaches many organs.", say: "The hormone travels in the blood: slower, but it reaches many organs." }
    - wait: 2000
hook: "A fright makes you jump in a fraction of a second. Your heart is still pounding a few minutes later. Two different systems are at work."
---
You've seen how each system carries a message, so the real skill is choosing: given a job for the body, which system should run it, and how can you tell?

## Engage: blinking and growing

```step
stage: predict
insight: "Students who think one system does everything, or that a longer-lasting effect is simply a better one, pick the wrong pair; the right choice depends on the job."
check:
  type: predict
  q: "Dust flies at your eye and you blink. Over the next few years you grow taller. Which system runs each?"
  options: ["Both are run by nerves", "Both are run by hormones", "Blinking is run by nerves and growing by hormones", "Blinking is run by hormones and growing by nerves"]
  actual: "Blinking by nerves and growing by hormones. A blink has to happen in a fraction of a second and then stop, which suits a nerve signal to the eyelid muscles. Growth needs a message that lasts for years and reaches bones all over the body, which suits a hormone carried in the blood."
```

## Explore: give each job to a system

```step
stage: run
insight: "Deciding for a mix of jobs, with 'both' allowed, makes students weigh speed, duration and reach instead of just recalling which system is 'fast'."
check:
  type: sort
  q: "Which system should run each job?"
  options: ["Nerves", "Hormones", "Both"]
  items:
    - ["Pulling your hand off a hot pan", "Nerves", "It has to happen in a fraction of a second, in one place, and stop when the danger does."]
    - ["Growing taller over several years", "Hormones", "It needs a message that lasts for years and reaches bones all over the body."]
    - ["Bringing blood sugar down in the hour after a meal", "Hormones", "There's no rush, and the message has to reach the liver and muscles, which is what insulin in the blood does."]
    - ["Blinking when dust flies at your eye", "Nerves"]
    - ["Kicking a ball", "Nerves"]
    - ["Staying alert and keeping your heart pounding for minutes after a scare", "Hormones", "Adrenaline in the blood keeps the whole body ready for as long as it lasts."]
    - ["Swerving your bike away from a car, then having shaky hands on the ride home", "Both", "The swerve is a nerve response, and the shaky hands afterwards are adrenaline."]
hint: ["For each job, ask whether it has to happen in a split second and stop, or whether it can take longer and needs to last.", "Also ask how many places the message has to reach: one muscle, or cells all over the body."]
```

## Explain: choosing and justifying

```step
stage: investigate
insight: "Predicting which system coordinates a job and justifying it by speed, duration and reach is the node; the target-cell idea explains how one message in the blood can still be specific."
tasks:
  - check:
      type: question
      q: "Every cell in the body gets the same adrenaline in the blood. Why do only some cells respond?"
      options: ["Only target cells have receptors that fit adrenaline", "Adrenaline only flows to the heart", "Other cells destroy it", "The brain tells the other cells to ignore it"]
      answer: 0
      feedback: [null, "Blood carries it everywhere.", "Cells without the receptor just don't respond.", "No nerve is involved in which cells respond."]
    hint: ["The adrenaline goes wherever the blood goes, so the difference can't be in what reaches each cell and has to be something about the cells themselves.", "Both kinds of cell get exactly the same adrenaline, so think about what a cell that responds must be able to do with it that a cell that ignores it can't."]
  - check:
      type: question
      q: "Growth over years is controlled by growth hormone, not nerves. Why is a hormone better for this job?"
      options: ["The effect needs to last a long time and reach cells all over the body", "Hormones are faster", "Nerves can't reach bones", "Growth is a reflex"]
      answer: 0
      feedback: [null, "Hormones are actually slower than nerves, and that's fine for growth.", "Nerves do reach bones, but what growth needs is an effect that lasts for years and reaches cells everywhere.", "A reflex is a quick nervous response."]
  - check:
      type: question
      q: "A sprinter reacts to the starting gun. Which system carries the message to the leg muscles, and why?"
      options: ["Nervous: the response must be very fast and go to particular muscles", "Endocrine: a hormone in the blood reaches every leg muscle at once", "Endocrine: the race lasts a long time, so the effect must last", "Both equally: every response uses both systems"]
      answer: 0
      feedback: [null, "Hormones would reach the legs, but far too slowly for a start.", "The start itself takes a split second, so it needs nerves.", "Many responses use both, but the instant start is nervous."]
  - check:
      type: question
      q: "A friend says hormones are better than nerves because their effects last longer. What's the best reply?"
      options: ["Neither is better: a long-lasting effect suits growth, but it would be no use for pulling your hand off a hot pan", "You're right, because lasting longer always means a stronger response", "You're right, because nerves only work for reflexes", "Hormones last longer, but nerves are better for every job because they're faster"]
      answer: 0
      feedback: [null, "How long an effect lasts says nothing about how strong it is.", "Nerves run much more than reflexes, such as moving your legs when you walk.", "Speed helps for a blink, but it would be the wrong tool for something that has to last for years."]
      explain: "Each system suits different jobs: nerves for fast, short jobs aimed at one place, hormones for slower, lasting jobs that reach many cells."
    hint: ["Think of one job where lasting a long time is exactly what you want, and one where it would be a disaster."]
  - check: { type: reflect, text: "I can choose between nerves and hormones for a job and explain why, using speed, how long the effect lasts and how many places it has to reach." }
```

### Target cells

### The right tool

### The sprinter

### Hormones are better?

### In your own words

In your book: make a comparison table (nerves, hormones) with rows for message, route, speed, duration and where it acts, then add two jobs for each system and a reason for each.

## Elaborate: both at once

```step
stage: modify
tier: typical
insight: "A real response often uses both systems, each for what it does best."
check:
  type: sort
  q: "A car swerves towards you on your bike. Which part of your response is nervous and which is hormonal?"
  options: ["Nervous", "Hormonal"]
  items:
    - ["You brake and steer away", "Nervous"]
    - ["Your heart is still racing five minutes later", "Hormonal"]
    - ["Your hands are shaky as you ride home", "Hormonal"]
    - ["You flinch", "Nervous"]
hint: ["For each one, ask how quickly it happens and how long it lasts after the car has gone.", "On the race board the nerve curve is over in a moment and the hormone curve keeps going for minutes, so match each part of the bike ride to one of those shapes."]
```

## Elaborate: when a receptor is faulty

```step
stage: modify
tier: wider
insight: "A hormone only works where there is a receptor to take its message in, so a faulty receptor behaves much like a missing hormone."
check:
  type: question
  q: "A person's liver cells have faulty insulin receptors, but their pancreas still releases normal insulin. What happens to their blood glucose after a meal?"
  options: ["It stays high, because the insulin reaches the liver but the liver cells can't respond to it", "It falls normally, because the insulin is still in the blood", "It falls faster, because there's insulin left over", "Nothing changes, because glucose is controlled by nerves"]
  answer: 0
  feedback: [null, "Insulin only works on cells whose receptors can take the message in, so having it in the blood isn't enough.", "Insulin that can't be used doesn't bring glucose down any faster.", "Blood glucose after a meal is a job for a hormone, not for nerves."]
  explain: "A hormone only works where there is a receptor to take its message in. With faulty receptors, a normal amount of insulin reaches the liver but the liver can't act on it, so the effect is much like having no insulin."
hint: "Ask what the insulin has to do to a liver cell to get its message across, and what happens if that can't happen."
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about blinking and growing with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- To pick a system for a job, ask how fast it has to be, how long the effect should last and how many places it has to reach.
- **Nerves** suit jobs that are fast, short and aimed at one place, like a blink or pulling your hand off a hot pan.
- **Hormones** suit jobs that can take minutes or years, need to last, or reach many places at once, like growth. Every cell gets the hormone, but only **target cells** with matching receptors respond.
- Many responses need both, like a swerve followed by a pounding heart.
