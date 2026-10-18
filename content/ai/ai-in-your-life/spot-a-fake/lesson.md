---
title: Can you spot a fake?
summary: "People sort AI-made pictures, video and voices from real ones at about chance, and feel surer than they are. Tips for spotting glitches go out of date. So what can you do instead?"
language: science
shape: 5e
unit: is-it-real
order: 7
voice: { name: af_heart, speed: 1.1 }
---
AI can now make pictures, videos and voices of people who never said or did those things. You might think you'd spot one. **What does the evidence say?**

**Kind of AI:** makes new content (pictures, video, voices).

## Engage: predict your score

```step
stage: predict
check:
  type: predict
  q: "You see 10 photos of faces. Half are real people and half are made by AI. How many do you think you'd sort correctly?"
  kind: number
  actual: "In a 2022 study, people sorting real and AI-made faces got 48.2% right on average: about 5 out of 10, the same as guessing."
```

## Explore: what the studies found

```step
stage: run
tasks:
  - check:
      type: question
      q: "People sorting real and AI-made faces got 48.2% right. If you guessed every time by flipping a coin, about what would you get?"
      options: ["About 50%", "About 10%", "About 90%"]
      answer: 0
      feedback: [null, "With two choices, guessing gets about half right.", "Guessing between two choices gets about half right."]
  - check:
      type: question
      q: "A review of 56 studies found people's overall detection was not clearly better than chance. Training and feedback raised it to about 65%. What does that mean?"
      options: ["Training helps a bit, but people still get about 1 in 3 wrong", "Training makes people perfect", "Training makes no difference at all"]
      answer: 0
      feedback: [null, "65% is better than chance, but far from reliable.", "It helped, a little."]
```

Two big findings:

- **Faces (2022):** people sorting real and AI-made faces averaged **48.2%**: about chance. AI-made faces were even rated slightly **more trustworthy**.
- **56 studies (2024):** across pictures, videos and voices, people's detection was **not clearly better than chance**. Training, feedback or AI help raised it to **about 65%**: better, but still often wrong.

### Faces

What would guessing get?

### 56 studies

How much did training help?

## Explain: why spotting doesn't work

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Early deepfake videos didn't blink properly, so people said 'check the blinking'. What happened next?"
      options: ["The next deepfakes learned to blink, so the tip stopped working", "Deepfakes still can't blink", "Blinking became the best test"]
      answer: 0
      feedback: [null, "A researcher reported that newer deepfakes had already adapted.", "The tip went out of date."]
  - check: { type: reflect, text: "I can explain why looking for glitches isn't a reliable way to spot AI-made media." }
```

**Glitch tips go stale.** When people find a flaw (weird hands, no blinking), the makers fix it. A researcher who found the blinking flaw in 2018 wrote a year later that the latest deepfakes had already adapted.

So looking harder isn't the answer. **Next lesson:** check **where it came from** instead.

### The blinking tip

What happened to it?

### Explain it

Why don't glitch tips last?

## Elaborate: why trust yourself less?

```step
stage: modify
tier: typical
check:
  type: question
  q: "A study found that people overrate their ability to spot deepfakes, and that being warned or being paid didn't help them. What's the lesson?"
  options: ["Feeling sure isn't evidence: check the source instead of trusting your eyes", "Only experts can spot fakes", "Deepfakes are harmless"]
  answer: 0
  feedback: [null, "The study didn't find experts were reliable either.", "The study was about spotting, not harm."]
```

In a 2021 study, people **overrated** how well they could spot deepfakes. **Neither raising awareness nor paying them** improved how well they did. What does that say about the advice "just look carefully"?

## Elaborate: fakes and bias

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained how a fake-face effect found only for White faces links to bias in AI's training data." }
```

A 2023 study found that **AI-made White faces were judged to be human more often than real White faces** (the researchers called it "AI hyperrealism"). The effect was found for **White faces only**.

Why might AI make some groups' faces more convincing than others? (Think back to AI Foundations: what's in the examples it learned from?) Who could be harmed by that?

## Evaluate: what would you do?

```step
stage: info
check:
  type: question
  q: "A friend sends a shocking video of a famous person. It looks completely real. What's the best next step?"
  options: ["Don't share it yet: check where it came from first", "Zoom in for glitches; if there are none, it's real", "Share it: it looks real"]
  answer: 0
  feedback: [null, "No glitches doesn't mean real: people spot fakes at about chance.", "Looking real isn't evidence."]
```

On paper: **"Spotting fakes by looking doesn't work well because \_\_\_\_. Instead, I'll \_\_\_\_."**

**Next lesson:** where did it come from?
