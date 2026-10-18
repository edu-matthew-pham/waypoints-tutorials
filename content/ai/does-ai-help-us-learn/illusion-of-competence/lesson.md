---
title: Can AI make you think you know more than you do?
summary: Say how sure you are before you check, compare it with what you could actually do, and look at research on AI and confidence.
language: science
shape: 5e
unit: evaluating-evidence
order: 5
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
---
Have you ever understood an explanation while reading it, then got stuck explaining it yourself? AI can make answers feel clear and easy. **Could that change how well you think you understand something?**

## Engage: being sure is a guess

```step
stage: predict
check:
  type: predict
  q: "You read a clear AI explanation and feel sure you understand. What does feeling sure tell you?"
  options: ["That you understand it", "It's a guess about yourself that you can check", "Nothing at all"]
  actual: "Feeling sure is a guess about what you can do. It can be right or wrong, so it is worth checking against a new try."
```

If a tool makes you do better and feel surer at the same time, how would you notice if your confidence grew faster than your skill?

## Explore: how sure, how right?

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Do one challenge, then record how sure you are about the new question.", when: "t >= 1" }
```

This is a prepared practice board, not a live AI.

1. Choose a challenge. Write your own attempt. Ask for a hint or the worked example if you need it.
2. Press **Try a new question**. Answer it without looking back.
3. **Before** you see the model answer, choose how sure you are: low, medium or high.
4. Record your attempt. Compare it with the model answer. Did how sure you felt match how well you did?

One short try can't measure what you can really do. But it lets you **check your own guess** about yourself.

## Explain: how sure and how right

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Tom felt very sure about the new question but got it wrong. Kai felt unsure but got it right. Whose confidence matched how they did?"
      options: ["Neither: Tom was too sure and Kai wasn't sure enough", "Tom's, because feeling sure is good", "Kai's, because he got it right"]
      answer: 0
      feedback: [null, "Tom felt sure and was wrong, so his confidence was too high.", "Kai was right, but he felt unsure, so his confidence was too low."]
  - check:
      type: question
      q: "Zoe read an AI explanation twice and felt sure. She decided not to practise. Why might that be a mistake?"
      options: ["Reading it can feel like knowing it; only a try without help shows if she can do it", "Reading an explanation twice never helps", "AI explanations are always wrong"]
      answer: 0
      feedback: [null, "Reading twice can help. The problem is skipping the check.", "Some AI explanations are right. The problem is the feeling, not the explanation."]
  - check:
      type: question
      q: "Ravi felt sure on one board question and was right. What can he safely say?"
      options: ["His confidence matched this time; more questions would tell him more", "He will always know when he is right", "He has learned the whole topic"]
      answer: 0
      feedback: [null, "One question is a small sample.", "One question can't show the whole topic."]
```

Knowing what you know, and what you don't, is a skill. Teachers sometimes call it **metacognition**: thinking about your own thinking.

- Your confidence can be **too high** (you feel sure but are wrong) or **too low** (you feel unsure but are right).
- When it matches what you can do, you can make good choices: when to practise, when to ask for help, and when to move on.
- Feeling more able than you are is sometimes called an **illusion of competence**.

### Tom and Kai

Compare how sure each one felt with how they did.

### Zoe

Zoe felt sure after reading. What didn't she check?

### Ravi

Ravi checked once. What can one check tell him?

## Elaborate: what does the research say?

```step
stage: make
tier: typical
tasks:
  - check:
      type: question
      q: "What does the Fernandes study support most directly?"
      options: ["Adults solving logic puzzles with AI did better, but thought they had done even better than they had", "Using AI makes everyone worse at learning", "Students should never use AI tutors"]
      answer: 0
      feedback: [null, "The study was about adults solving puzzles. It didn't test learning over time.", "The study didn't test students or AI tutors."]
  - check: { type: reflect, text: "I used the study to argue a point, and named one limit of the study for students like me." }
```

In a [2026 study by Fernandes and colleagues](https://doi.org/10.1016/j.chb.2025.108779), adults used AI to solve logic puzzles. They did better than people usually do without AI. But they **thought they had done even better than they had**. The studies had 246 and 452 adults. They solved puzzles, not a school course, and the study didn't test what they remembered weeks later.

Discuss two claims:

- "Doing better with AI is a real gain, even if people misjudge themselves."
- "Misjudging yourself is risky, because you might stop practising things you haven't learned."

Could both be right? Would it help if the tool made you test yourself? Would the result be the same for Year 7 students in a school subject?

**Inquiry record (optional):** note one time feeling sure helped you, one time it misled you, and one way to check.

### What the study found

Read the study description, then check what it supports.

### Two claims

Discuss the two claims above with a partner.

## Optional: check your confidence with an AI tool

```step
stage: modify
tier: typical
prompt:
  title: "Test me, and ask how sure I am"
  text: |
    I think I understand [the topic]. Test me with one new question at a time, without hints.
    Before you tell me if I'm right, ask how sure I am: low, medium or high.
    After five questions, tell me where my confidence matched how I did, and where it didn't. Don't explain the topic unless I ask.
check: { type: reflect, text: "I compared how sure I felt with how I did, and checked any marking that surprised me." }
```

Use the prompt below on something you think you understand. Compare with the board: did how sure you felt match how you did? An AI can mark you wrong when you are right, or the other way round, so check anything that surprises you.

**No AI tool?** A partner can ask you questions from your notes.

## Evaluate: is feeling sure enough?

```step
stage: info
check:
  type: reasoning
  q: "A student says: 'I checked the AI explanation and it made sense, so I don't need to practise.' What would you suggest they do to check? What would that still not prove?"
  placeholder: "To check, they could … That still wouldn't prove …"
  models:
    - title: "A strong answer"
      text: "Close the explanation and try a new question on the same idea. Say how sure you are before you check. If you get it right, that's a good sign, but it doesn't prove you will remember it next week, so try another one later."
    - title: "A different view that also works"
      text: "Explain it to a friend in your own words, without looking. Where you get stuck shows what to practise. Even a good explanation today doesn't prove you can use the idea on a harder question."
  criteria: ["I suggested a check without the explanation in front of them.", "I said why 'it made sense' is not enough.", "I said what the check still wouldn't prove."]
  explain: "Feeling that something makes sense is a guess. A try without help checks the guess, and a later try checks whether it lasts."
```

**Next lesson:** if confidence and test scores can both mislead, how would you design a better study of AI and learning?
