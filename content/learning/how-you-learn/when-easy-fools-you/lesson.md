---
order: 4
unit: feels
title: When easy fools you
summary: "Rereading notes feels like learning because the words look familiar, but familiar isn't the same as knowing. Testing yourself without the notes feels harder, shows what you can really do, and usually helps it stick, because pulling something out of your memory is itself practice. The same trap comes with any help that makes a task feel easy, including AI."
language: science
shape: primer
hook: "Ana reads her notes three times. Ben reads them once, covers them and writes what he remembers. Who feels more ready straight afterwards? Who remembers more a week later? They're not the same answer."
---
Everyone here is made up. Nobody needs to say how they study, but you can think about it.

## Think first

```step
stage: predict
insight: "Separating how ready you feel from how much you remember. Most students expect the two to match."
check:
  type: predict
  q: "Ana reads her notes three times and highlights the key words. Ben reads them once, covers them, writes what he remembers, then checks. Which is most likely?"
  options: ["Ana feels more ready, and Ben remembers more a week later", "Ana feels more ready, and remembers more", "Ben feels more ready, and remembers more", "They feel the same and remember the same: they spent the same time"]
  actual: "Usually Ana feels more ready straight afterwards, because the page looks familiar. Ben's way feels harder, and he's just found the bits he forgot. But a week later, Ben usually remembers more. How ready you feel and how much you've learned can point in different directions."
```

Lock in an answer. The rest of the workshop is about why feeling and learning can come apart.

## The idea

```step
stage: investigate
insight: "Naming the trap (familiar feels like known), the planted slip (trusting the feeling), then why the better checks work, so they aren't just rules."
tasks:
  - insight: "Sorting study habits by what research suggests, not by how they feel."
    check:
      type: sort
      q: "For each way of studying: does it mostly feel like learning, or does it feel harder and usually stick?"
      options: ["Feels like learning, often isn't much on its own", "Feels harder, usually sticks"]
      items:
        - ["Reading your notes again", "Feels like learning, often isn't much on its own", "Familiar words feel like knowing."]
        - ["Covering your notes and writing what you remember", "Feels harder, usually sticks"]
        - ["Highlighting the key words", "Feels like learning, often isn't much on its own", "Choosing words feels active, but it isn't remembering them."]
        - ["Explaining it out loud, to someone or to yourself", "Feels harder, usually sticks"]
        - ["A few practice questions each day, spread over a week", "Feels harder, usually sticks"]
        - ["Watching the same video again", "Feels like learning, often isn't much on its own", "Watching is easier than doing."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib revises for a quiz on the planets. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: easy-means-learned
      explain: "Line 3: the page looks familiar, so Nib decides it's learned. Familiar isn't the same as knowing. Covering the page and trying to name the planets would have shown the gap."
  - insight: "Why each check works. A strategy without its why is easy to drop."
    check:
      type: match
      q: "Why does each one usually work better than rereading? Match them."
      pairs:
        - ["Covering your notes and writing what you remember", "Pulling it out of your memory is practice for the test, and it shows the gaps"]
        - ["A few questions each day over a week", "Remembering again after you've started to forget makes it last longer"]
        - ["Explaining it out loud", "You have to link the ideas together, and you find the bits you can't explain"]
```

When something looks familiar, your brain says "I know this". That feeling is real, but it can fool you. **Recognising** something on the page is easier than **producing** it without the page, and a test asks you to produce it.

That's also why the harder ways usually work:

- **Testing yourself** is practice at exactly what the test asks: getting it out of your head. And it gives you honest news about the gaps.
- **Spreading it out** means you remember again after starting to forget, which makes it last longer.
- **Explaining** makes you link ideas together, and the bits you can't explain are the bits to go back to.

So **don't trust the feeling: check it.** If it feels hard, that's often the learning happening.

These aren't rules. Rereading is fine for a first look, and highlighting can help you find things again. On their own, though, they **feel** like more learning than they **are**.

### Feels good, or works?

### Nib's slip

### Why the checks work

## Check

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Tom says, \"I read my notes twice and they all made sense, so I'm ready for the test.\" What's the best reply?"
      options: ["Try a few questions without your notes first.", "Read them once more, slowly, to make it stick.", "You're ready: if it made sense, you know it.", "Highlight the hard bits so they stand out."]
      answer: 0
      feedback: [null, "More reading builds more familiarity, not a check.", "That's the feeling of knowing again. Making sense when you read it isn't the same as knowing it.", "Highlighting still doesn't check what he can do."]
      explain: "Making sense when you read it isn't the same as knowing it. A few questions without the notes are a quick, honest check."
  - check:
      type: question
      q: "Lina covered her notes and could only write half of what was on the page. What does that tell her?"
      options: ["Which half to go back to, and that the check is working", "That self-testing doesn't suit her", "That she should go back to rereading", "That she's bad at this subject"]
      answer: 0
      feedback: [null, "Finding gaps is the point of the check, not a sign it failed.", "Rereading would hide the same gaps.", "Half after one go is normal. It's the next thing to work on, not a verdict."]
      explain: "Bad news from a check is useful news. Now she knows exactly what to practise."
```

### Tom's plan

### Lina's half

## Vary

```step
stage: modify
tier: typical
insight: "Years 7 and 8: the same trap when an AI explains something, and the same fix."
check:
  type: question
  q: "Kim asks an AI chatbot to explain photosynthesis. She reads the explanation and feels she gets it. What would show whether she really does?"
  options: ["Close the chat and explain it in her own words", "Ask the AI to explain it again more simply", "Copy the explanation into her own notes", "Ask the AI whether she understands it now"]
  answer: 0
  feedback: [null, "A clearer explanation can make it feel even easier, without showing what Kim can do on her own.", "Copying is the same familiar feeling.", "The AI can't see what Kim can do without it."]
  explain: "Explaining it without the help, then comparing with the explanation, is the check. If she gets stuck, she's found exactly what to go back to."
```

Any help that makes a task feel easy can fool you the same way: a worked solution you read, a friend's answer, or an AI that explains it. Use it, then check what you can do **without** it. Does AI Help Us Learn? has a whole lesson on this: [The illusion of competence](../../../ai/does-ai-help-us-learn/illusion-of-competence/).

## Try

```step
stage: run
insight: "Trying the check on real content from another subject, so it isn't just about Nib and the planets."
check:
  type: reflect
  text: "I tried a check without my notes on something from another subject, and I know which bit to go back to."
```

Pick something you learned in another subject this week: a science idea, some new words in another language, a maths method, a date in history.

1. Without looking, write down or say three things you remember about it.
2. Now check against your book or notes.
3. Which bit had you forgotten, or got slightly wrong?

This is just for you. If it felt harder than rereading, that's the point.
