---
title: Is doing well the same as learning?
summary: Try a question with help, then a new one without, and compare what each attempt shows about learning.
language: science
shape: 5e
unit: what-is-learning
order: 2
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Help now, capability later?"
  say: "Assistance can improve performance, but learning needs other evidence."
  clip:
    - caption: { text: "A correct answer with help shows assisted performance." }
    - wait: 1050
    - caption: { text: "A related attempt without that help supplies different evidence." }
    - wait: 1050
    - caption: { text: "Neither observation alone tells the whole story of learning." }
    - wait: 1050
---
Last lesson we asked whether a finished product shows learning. But sometimes help does more than finish the job. You might do better *because* of help, and learn something along the way.

"If I get the right answer with AI, I've learned it." What would show this is true? What would show it is not?

## Engage: what does a right answer show?

```step
stage: predict
check:
  type: predict
  q: "A student follows step-by-step help and gets a maths question right. What does this show?"
  options: ["They can now do questions like it on their own", "They got it right with help; we don't know yet what they can do alone", "The help stopped them learning anything"]
  actual: "It shows they got it right with help. We have not tested yet what they can do on a new question, or next week."
```

Have you ever followed a worked example, felt sure, then found a new question hard? Have you ever learned something *from* a worked example? Both happen.

## Explore: with help, then without

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Do one question with any help you want, then record an attempt at the new question.", when: "t >= 1" }
```

This is a prepared practice board, not a live AI.

1. Pick a challenge. Write your attempt. Ask for a hint or the worked example if you want one.
2. Press **Try a new question**. Answer it **without looking back**.
3. Say how sure you are, then record your attempt and read the model answer.

Now compare. Which part did you do with help? Which part did you do alone? What does each one tell you?

## Explain: three kinds of evidence

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Mia gets 1/2 + 1/4 right while looking at the worked example. The next day she gets 1/3 + 1/6 wrong without it. What does this show most clearly?"
      options: ["She could follow the example, but can't yet do a new one alone", "She learned nothing from the example", "The second question was unfair, so ignore it"]
      answer: 0
      feedback: [null, "She may have learned part of it. The second try shows what is still missing.", "It was a little different, but that is what makes it a useful test."]
  - check:
      type: question
      q: "Leo got the new question right today. Which extra check would tell you most about whether he will still remember the method?"
      options: ["A similar question in two weeks, without help", "Asking him how sure he feels today", "Giving him the same question again straight away"]
      answer: 0
      feedback: [null, "How sure he feels is a guess. It is not a test.", "He might just remember that answer. A later question tests the method."]
  - check: { type: reflect, text: "I can explain what a right answer with help, a new question and a later question each show." }
```

There are three different things you can check.

- **With help:** how well you do with hints, worked examples, friends, teachers or AI. Help changes what you can do in the moment.
- **On something new:** a new question that is a bit different shows whether you can **use** the idea. This is called **transfer**. Memorising answers is like a lookup table: perfect on questions you have practised, stuck on new ones. Understanding lets you handle new ones.
- **Later:** trying again a week or two later shows whether you **remember** it. This is called **retention**.

### Mia's two tries

Mia's first try had help. Her second try was new, and alone.

### Leo's check

Leo did well today. What would tell you about next week?

### In your own words

These checks help, but they don't cover everything. Learning can also mean getting curious, working well with others, being creative, or choosing tools well.

## Elaborate: is this test fair?

```step
stage: make
tier: typical
check: { type: reflect, text: "I suggested a way to check learning and found one thing it would miss." }
```

Discuss this claim:

**"If you can't do it again without help, the help didn't teach you anything."**

Give the best reason **for** it. Then give the best reason **against** it. Think about two students: one learning to add fractions, and one using a game maker to try out an idea.

Then plan a better check for one student. What would you look at today, next week, and in a new situation? What would your check still miss?

**Inquiry record (optional):** look at your first answer from lesson 1. Add one example where help hid a gap, and one where help led to real understanding.

## Evaluate: what kinds of evidence?

```step
stage: info
tasks:
  - check:
      type: sort
      q: "What does each piece of evidence mainly show?"
      options: ["What you can do with help", "Whether you can use it on something new", "Whether you still know it later"]
      items:
        - ["You get the answer right while looking at the worked example", "What you can do with help"]
        - ["You solve a different fractions question without help", "Whether you can use it on something new"]
        - ["You answer a fractions question in a quiz three weeks later", "Whether you still know it later"]
        - ["An AI tutor walks you through five hard problems and you get them all right", "What you can do with help"]
        - ["You explain the method to a friend using your own example", "Whether you can use it on something new", "Making up your own example means using the idea in a new way."]
  - check:
      type: reasoning
      q: "Someone says: 'My AI tutor helped me finish five hard problems, so I definitely understand the topic.' Write one thing that is true, one thing that goes too far, and one way to check."
      placeholder: "True: … Goes too far: … To check: …"
      models:
        - title: "A strong answer"
          text: "True: they finished five hard problems with the tutor, so they can do them with help. Goes too far: 'definitely understand', because we haven't seen them do one alone. To check: try a new problem without the tutor, and another one in a week."
        - title: "A different view that also works"
          text: "True: working through five problems with good hints may have taught them a lot. Goes too far: the word 'definitely'. To check: explain one problem to a friend in their own words, then make up a similar one and solve it."
      criteria: ["I said what the five problems do show.", "I named the part of the claim that goes too far.", "I gave a check without the tutor: a new question, or a later one."]
      explain: "Doing well with help is real, but it is not the same as doing it alone, or later."
```

### Sort the evidence

What does each piece of evidence mainly show?

### Five hard problems

Someone is sure they understand. How much of their claim is fair?

**Next lesson:** if we can measure what someone can do alone, is that the only kind of learning that matters?
