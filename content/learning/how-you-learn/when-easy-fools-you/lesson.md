---
order: 3
unit: feels
title: When easy fools you
summary: "Rereading notes feels like learning because the words look familiar, but familiar isn't the same as knowing. Testing yourself without the notes feels harder and shows what you can really do, so it's a better check and usually helps it stick. The same trap comes with any help that makes a task feel easy, including AI."
language: science
shape: 5e
hook: "Ana and Ben study the same page for 20 minutes. Ana reads it three times and highlights the key words. Ben reads it once, covers it, writes what he remembers, then checks. Who feels more ready? Who remembers more a week later?"
---
Everyone here is made up. Nobody needs to say how they study.

## Engage: who's more ready?

```step
stage: predict
insight: "Committing to a guess: the study that feels better right away often does worse later."
check:
  type: predict
  q: "Ana rereads and highlights. Ben covers the page, writes what he remembers and checks. A week later, who usually remembers more?"
  options: ["Ana: she went over it three times", "Ben: he tested himself", "About the same: they spent the same time"]
  actual: "Usually Ben. Right after studying, Ana often feels more confident, because the page looks familiar. Ben's way feels harder, but trying to remember is what makes it stick, and it shows him what he's missed."
```

## Explore: feels good, or works?

```step
stage: run
insight: "Sorting study habits by what research suggests, not by how they feel."
check:
  type: sort
  q: "For each way of studying: does it mostly feel like learning, or is it a good check that usually sticks?"
  options: ["Feels like learning, often isn't much on its own", "Feels harder, usually sticks"]
  items:
    - ["Reading your notes again", "Feels like learning, often isn't much on its own", "Familiar words feel like knowing."]
    - ["Covering your notes and writing what you remember", "Feels harder, usually sticks", "Trying to remember is itself practice, and you see the gaps."]
    - ["Highlighting the key words", "Feels like learning, often isn't much on its own", "Choosing words feels active, but it isn't remembering them."]
    - ["Explaining it out loud to someone, or to yourself", "Feels harder, usually sticks", "You find the bits you can't explain yet."]
    - ["Doing a few practice questions each day, spread over a week", "Feels harder, usually sticks", "Spreading it out means you remember again each time."]
    - ["Watching the same video again", "Feels like learning, often isn't much on its own", "Watching it is easier than doing it."]
```

These aren't rules. Rereading is fine for a first look, and highlighting can help you find things. But on their own, they **feel** like learning more than they **are** learning.

## Explain: the feeling of knowing

```step
stage: investigate
insight: "Naming the trap: familiar feels like known. The planted mistake is trusting the feeling instead of a check."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib revises for a quiz on the planets. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: easy-means-learned
      explain: "Line 3: the page looks familiar, so Nib decides it's learned. Familiar isn't the same as knowing. Covering the page and trying to name the planets would have shown the gap."
  - check:
      type: question
      q: "What's the quickest way for Nib to find out what it really knows?"
      options: ["Cover the notes and write the planets in order, then check", "Read the notes once more", "Ask a friend if they think Nib knows it", "Rate how confident it feels"]
      answer: 0
      feedback: [null, "That's more of the same familiar feeling.", "A friend can't see inside Nib's head.", "A feeling is what fooled Nib in the first place."]
      explain: "A check without the notes shows what Nib can do on its own, not what looks familiar."
```

When something looks familiar, your brain says "I know this". That feeling is real, but it can fool you. Recognising something on the page is easier than producing it without the page, and a test asks you to produce it.

So **don't trust the feeling: check it.** Cover the notes, try a question, explain it out loud. If it's hard, good: that's the learning happening, and now you know where the gaps are.

Any help that makes a task feel easy can do the same: a worked solution you read, a friend's answer, or an AI that explains it for you. They can be useful, as long as you then check what you can do **without** them. Does AI Help Us Learn? has a whole lesson on this: [The illusion of competence](../../../ai/does-ai-help-us-learn/illusion-of-competence/).

### Nib's slip

### A better check

## Elaborate: when the help is AI

```step
stage: modify
tier: typical
insight: "Years 7 and 8: the same trap when an AI explains something, and the same fix."
check:
  type: question
  q: "Kim asks an AI chatbot to explain photosynthesis. She reads the explanation and feels she gets it. What would show whether she really does?"
  options: ["Closing the chat and explaining photosynthesis in her own words, then comparing", "Asking the AI to explain it again more simply", "Copying the explanation into her notes", "Asking the AI if she understands it"]
  answer: 0
  feedback: [null, "A clearer explanation can make it feel even easier, without showing what Kim can do on her own.", "Copying is the same familiar feeling.", "The AI can't see what Kim can do without it."]
  explain: "Explaining it without the help is the check. If she gets stuck, she's found exactly what to go back to."
```

## Evaluate: check, don't trust

```step
stage: info
tasks:
  - check:
      type: question
      q: "Tom says, 'I read my notes twice and they all made sense, so I'm ready for the test.' What's the best reply?"
      options: ["Making sense when you read it isn't the same as knowing it. Try a few questions without your notes.", "Read them a third time to be safe.", "You're ready: they made sense.", "Highlight the hard bits."]
      answer: 0
      feedback: [null, "More reading builds more familiarity, not a check.", "That's the feeling of knowing again.", "Highlighting still doesn't check what he can do."]
      explain: "A few questions without the notes are a quick, honest check."
  - check: { type: reflect, text: "I can explain why studying that feels easy can fool me, and how to check instead." }
```

### Tom's plan

### Look back

**A private think** (just for you): which way of studying do you use most? Is it one that feels good, or one that checks?
