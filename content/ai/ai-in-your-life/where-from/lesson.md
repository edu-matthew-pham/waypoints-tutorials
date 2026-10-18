---
title: Where did it come from?
summary: "Instead of hunting for glitches, check the source: who posted it first, whether others confirm it, and whether it carries a record of where it came from. Even then, a record isn't proof of truth."
language: science
shape: 5e
unit: is-it-real
order: 8
voice: { name: af_heart, speed: 1.1 }
---
Last lesson: looking harder doesn't work. This lesson: **look somewhere else.** Check **where it came from**.

**Kind of AI:** makes new content (and the checks work for any picture, AI-made or not).

## Engage: the shark photo

```step
stage: predict
check:
  type: predict
  q: "A photo of a shark in your school's pool appears in the class group chat. It looks real. What would tell you most?"
  options: ["Who took it and where it was first posted", "Zooming in on the shark's fins", "How many people have shared it"]
  actual: "Where it came from tells you most. Zooming in is the glitch hunt that doesn't work well, and lots of shares only shows it's popular."
```

## Explore: trace it

```step
stage: run
tasks:
  - check:
      type: sort
      q: "The shark photo (made up). Which steps help you check it?"
      options: ["Helps check it", "Doesn't really help"]
      items:
        - ["Ask the person who shared it where they got it", "Helps check it", "Follow it back towards the first post."]
        - ["Check the school's own website or notices", "Helps check it", "A shark in the pool would be official news."]
        - ["Count how many people shared it", "Doesn't really help", "Fakes can be shared more than real photos."]
        - ["Search for the photo to see where else it appears, and when", "Helps check it", "It might be an old photo, or from somewhere else entirely."]
        - ["Zoom in to look for weird pixels", "Doesn't really help", "Last lesson: people spot fakes at about chance."]
        - ["See if anyone who was actually at school saw it", "Helps check it", "Another source that doesn't depend on the photo."]
  - check:
      type: question
      q: "The person who shared it says: 'I got it from a page called FunnyFish.' What's the next best step?"
      options: ["Look at FunnyFish: who runs it, and what else it posts", "Believe it: they told you the source", "Share it with a warning"]
      answer: 0
      feedback: [null, "A source is only as good as who's behind it.", "Sharing spreads it, even with a warning."]
```

Checking where something came from means **following it back**:

1. **Who shared it**, and where did they get it?
2. **Where was it first posted**, and when?
3. **Do other sources** that don't depend on it say the same?
4. **Does the expected source** (the school, the news, the person shown) confirm it?

### Trace it

Which steps help?

### The source

What do you check about a source?

## Explain: check outside the picture

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why does checking the source work better than checking the picture?"
      options: ["A fake can look perfect, but it's harder to fake where it came from and what other sources say", "Sources are always honest", "Pictures can't be faked"]
      answer: 0
      feedback: [null, "Sources can lie too, so you check more than one.", "AI can make convincing pictures."]
  - check: { type: reflect, text: "I can check where a picture or video came from, instead of hunting for glitches." }
```

A fake can look perfect. It's much harder to fake **where it came from**: the first post, the person who took it, and other sources that agree. That's why fact-checkers **leave the picture** and check **around it**.

Until you've checked, **don't share it**.

### Why it works

Why check around the picture?

### Explain it

Name two checks.

## Elaborate: a label of where it came from

```step
stage: modify
tier: typical
check:
  type: question
  q: "Content Credentials can be attached to a picture to record which camera or app made it and how it was edited. What's their biggest weakness?"
  options: ["They're optional and can be removed, so a picture without them isn't proof of anything", "They make pictures blurry", "Only AI can read them"]
  answer: 0
  feedback: [null, "They don't change the picture.", "People and apps can show them."]
```

**Content Credentials** (from a group called C2PA) are a record attached to a picture or video: what made it, and how it was changed. Some cameras and AI apps add them. But they're **optional**, and they can be **stripped off**, for example when a picture is screenshotted or re-uploaded.

So a credential can help, and a missing one proves nothing. Which of your four checks still work when there's no credential?

## Elaborate: a record isn't truth

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained why knowing where content came from doesn't prove it's true, with an example." }
```

The C2PA's own explainer says **provenance information alone cannot tell you whether** content is true. A real, unedited photo, with a perfect record, can still be **misleading**: an old photo shared as new, or a real photo with a false caption.

Write an example of a **real photo with a perfect record** that still misleads. What check would catch it?

## Evaluate: your routine

```step
stage: info
check:
  type: question
  q: "A video shows your favourite singer saying something shocking. It looks real, and it has no Content Credentials. What can you conclude so far?"
  options: ["Nothing yet: check where it came from and whether trusted sources report it", "It's fake: it has no credentials", "It's real: it looks real"]
  answer: 0
  feedback: [null, "Credentials are optional, so a missing one proves nothing.", "Looking real isn't evidence."]
```

On paper, write your **four-step routine** for checking a picture or video before you share it.

**Next unit:** fakes that hurt.
