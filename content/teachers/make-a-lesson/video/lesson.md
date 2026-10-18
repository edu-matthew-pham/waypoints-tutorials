---
title: What a video is for
summary: "A video has to earn its place. Decide whether your primer needs one, what job it does, and record it in the browser with captions first."
hook: "A video of you reading the text aloud adds time, not learning. A ten-second clip of something moving can do what a page of text can't."
language: science
shape: primer
unit: share
order: 5
optional: true
---
This lesson is optional: most primers need no video. You'll decide whether yours does, and if it does, record it in Create. Recording works in Chrome or Edge on a computer.

## Think first

```step
stage: predict
insight: "Teachers often assume more video is better; the site's lessons use clips only where they do a job text can't."
check:
  type: predict
  q: "How many of the steps in a primer should usually have a video?"
  options: ["Every step", "Most steps", "One, if any", "None ever"]
  actual: "One, if any. Lessons on this site add a clip only where it does a job text can't: a hook, showing the expected result, or explaining something that moves. Most primers need none."
```

## The idea

```step
stage: investigate
insight: "Each video has one job, named before it's made."
```

A video earns its place when it does one of these jobs:

- **Hook:** a few seconds that make students want to know why (a surprising result, a real case).
- **Expected result:** what success looks like, without showing how to get there (never the answer to a check).
- **Explaining why:** something that moves or changes over time, which a still picture can't show (a shadow shortening as the Sun climbs; an orbit).
- **Catching up:** a short walk-through for a student who was away.

What doesn't earn a place: reading the page aloud, or showing the answer to a question students should think about first.

**Captions first.** Headphones aren't guaranteed in class, so every video must make sense with the sound off. In Create, the captions you show while recording are saved with the video. Speaking is optional.

**Short.** Under a minute is best; Create stops recording at 5 minutes.

## Check

```step
stage: practise
insight: "Judging which step earns a video applies the jobs to real cases."
tasks:
  - check:
      type: question
      q: "Which of these steps in a seasons primer earns a video?"
      options:
        - "The Earth going round the Sun over a year, with the noon Sun climbing higher in summer and lower in winter"
        - "The Think first question: \"In early January, what season is it in London?\""
        - "The idea, read aloud by the teacher"
        - "The Apply step, where students write about their own city"
      answer: 0
      feedback:
        - null
        - "A video here would give away the answer before students commit."
        - "Students can read it faster than you can say it, and with the sound off it's the same text again."
        - "Students' own writing is the point; a video would only tell them what to write."
      explain: "Something that moves over a year is hard to show in text or a still picture. That's the job of explaining why."
  - check:
      type: question
      q: "Why do videos on this site put captions first?"
      options:
        - "Headphones aren't guaranteed in class, so a video must work with the sound off"
        - "Captions make the video shorter"
        - "Students aren't allowed to listen to videos"
        - "Captions replace the lesson text"
      answer: 0
      feedback:
        - null
        - "Captions don't change the length."
        - "They may listen when they can; the video just can't depend on it."
        - "The lesson text stays: captions only carry what the video shows."
      explain: "A video that only works with sound fails in a room without headphones."
```

### Which step?

Pick the step that earns a video.

### Captions first

Why?

## Apply

```step
stage: make
insight: "Naming the job first stops a video being made because it can be."
tasks:
  - check:
      type: reasoning
      q: "Does your primer need a video? If so, which step and what job; if not, why not?"
      models:
        - title: "Yes"
          text: "Yes, one: in The idea, a 20-second clip of the board turning through a year, with captions naming December and June, to explain why the noon Sun is higher in summer. Something moving that text can't show."
        - title: "No"
          text: "No. My primer on a source's origin and content is about reading a source; a still picture of the source does everything a video would. A video would only read the text aloud."
      criteria:
        - "I named one step, or said why none."
        - "I named the job (hook, expected result, explaining why, catching up)."
        - "It works with the sound off."
  - check: { type: reflect, text: "I recorded the video in Create, or decided my primer doesn't need one." }
```

### Decide

Write your decision here, then put it in Create: **Your design decisions** › **What any video is for** ("none" is a good answer).

### Record it (if you need one)

In Chrome or Edge, in Create:

1. Click in the step that needs the video and press **Clip instructions**. Create asks what the video is for: give the job.
2. Edit the clip's `caption:` lines: these are what students read.
3. Under **Videos for this lesson**, choose the step and press **Record video**. Choose **This Tab** when the browser asks, show what you planned, then stop and press **Use this video in the lesson**.

Already have a video online? Click in the step and press **Video link** instead.

```teacher
summary: "Teachers decide whether their primer needs a video, name its job, and record it in Create with captions first. Optional."
time: 20
timing: "Think first 2 min · The idea 5 min · Check 3 min · Apply (decide 3 min, record 7 min)"
goals:
  - "I can say which job a video does: hook, expected result, explaining why or catching up."
  - "I can decide whether my lesson needs a video at all."
  - "I can record a short captioned video in Create."
before: |
  **For a facilitator.** Optional: skip it in a short programme, or set it for teachers who want videos. Recording needs Chrome or Edge on a computer (not Safari or an iPad). A microphone is optional; captions carry the video.

  Primers without a playground (most History and English ones) have no Clip instructions to record from, because there's nothing moving to capture. That's usually the right answer: they don't need a video. A science primer on a board, or a video already online (Video link), can still have one.
running:
  - "Think first: lock in. Most guess 'most steps'; the answer is one, if any."
  - "The idea: name the four jobs and the two non-jobs."
  - "Apply: everyone decides; only those whose primer needs one record. Others help a partner record."
struggle: "Teachers want a video because it feels engaging. Ask which job it does; if none, the answer is no video, and that's a good decision."
stuck:
  - see: "Record video is greyed out or the browser can't record."
    ask: "Which browser and device?"
    fix: "Chrome or Edge on a computer. Safari and iPads can't record tabs."
  - see: "Clip instructions says to add code or a starter first."
    ask: "Does this step have a playground or board?"
    fix: "Text-only steps have nothing moving to record: use Video link for a video already online, or decide the step doesn't need one."
stretch: "Record a 'catching up' video for a student who was away: under a minute, sound off, does it still make sense?"
support: "Do the decision part only, and record later with a colleague."
leads: "Lesson 6 (Share it and get it reviewed) checks the whole primer against a review checklist, shares it, and asks for it to be published."
exit:
  q: "When does a video earn its place in a lesson?"
  a: "When it does a job text can't: a hook, the expected result, explaining something that moves, or catching up. Never reading the text aloud or giving away an answer."
```
