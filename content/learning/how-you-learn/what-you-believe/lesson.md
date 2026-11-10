---
order: 1
unit: believe
title: What do you believe about learning?
summary: "Everyone has beliefs about learning, like 'smart people find it easy' or 'if it looks familiar, I know it'. Beliefs like these steer what you do: whether you keep going, check your work or give up. Some of them are often wrong. Noticing your beliefs, and changing what you do because of them, is part of being your own learning coach."
language: science
shape: primer
hook: "If you're smart, learning should feel easy. Agree or disagree?"
---
There are no right answers in the first step. Everyone else in this workshop is made up.

## Think first

```step
stage: predict
insight: "Getting students' own beliefs about learning out in the open before anything is named. No answer is marked; the reasons are what matter."
check:
  type: reflect
  text: "I've decided whether I agree, disagree or I'm not sure for each statement, and I have a reason for at least one."
```

For each statement, decide: **agree**, **disagree** or **not sure**. Have a reason ready for at least one of them.

1. If you're smart, learning should feel easy.
2. If you have to work hard at something, you're probably not good at it.
3. If something looks familiar, you know it.
4. Some people are just maths people, and some aren't.
5. If you get it quickly, you've learned it.
6. Mistakes mean you're doing it wrong.

You'll come back to these at the end, privately.

## The idea

```step
stage: investigate
insight: "Beliefs aren't just opinions: they steer what a learner does next. Then a planted slip: slow means not good at it."
tasks:
  - insight: "Linking a belief to what it makes someone do."
    check:
      type: match
      q: "Each made-up learner has a belief about learning. Match it to what it might make them do."
      pairs:
        - ["Zara believes smart people find it easy.", "When a question gets hard, she decides she's not smart and stops."]
        - ["Omar believes that if it looks familiar, he knows it.", "He rereads his notes instead of testing himself."]
        - ["Lucy believes she's 'not a maths person'.", "She guesses instead of checking, because what's the point?"]
        - ["Theo believes mistakes mean you're doing it wrong.", "He hides his working so nobody sees his mistakes."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is doing a maths question. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: fast-means-smart
      explain: "Line 3: taking longer than a friend doesn't mean Nib is bad at maths. It means this question takes Nib more steps right now. Working through it is how Nib gets faster."
```

Everyone has beliefs about learning, and they **steer what you do**: whether you keep going, check your work, try another way or give up. Zara stops. Omar rereads. Lucy guesses. Theo hides his working.

Some common beliefs are often wrong:

- **Fast means smart.** How quickly you get something says little about how well you'll learn it. Lots of things feel slow at first.
- **Hard work means you're not good at it.** Effort is often how learning happens. Things that felt hard last year probably feel easier now.
- **Familiar means known.** Recognising something on the page is easier than doing it without the page. (Workshop 4 is all about this one.)
- **Mistakes mean you're doing it wrong.** Mistakes usually show you where to work next.

None of this means anyone can learn anything instantly, or that effort alone is enough. You usually get better at things with practice **and** good strategies, and some things take a long time.

This course is about **self-regulated learning**, which here means **being your own learning coach**: noticing what's going on in your learning (your thinking, how you feel, why you're doing it, what you're doing) and changing what you do when it isn't working. Noticing a belief that's steering you the wrong way is one of the coach's jobs. The next workshop is all about the coach.

### Beliefs steer what you do

### Nib's slip

## Check

```step
stage: practise
tasks:
  - insight: "Sorting statements about learning by what research usually finds. These ones have clearer answers than the opening statements."
    check:
      type: sort
      q: "Sort each statement: is it usually true, or often misleading?"
      options: ["Usually true", "Often misleading"]
      items:
        - ["You can get better at most things with practice and good strategies.", "Usually true"]
        - ["How fast you get something shows how smart you are.", "Often misleading"]
        - ["If it feels hard, you're learning nothing.", "Often misleading", "Hard work is often where the learning happens."]
        - ["Checking without your notes shows what you really know.", "Usually true"]
        - ["A mistake often shows you where to work next.", "Usually true"]
        - ["Some people just can't learn maths.", "Often misleading", "People differ, but most people can get better at maths with practice and help."]
  - check:
      type: question
      q: "Ella has been on a science question for ten minutes. She thinks, \"This is taking ages, so I must be bad at science.\" What would her learning coach say?"
      options: ["\"Taking a while doesn't mean I'm bad at it. Which part is slowing me down?\"", "\"Yep, science isn't for me. I'll skip to the next one.\"", "\"Everyone else is faster, so I should just copy them.\"", "\"If I was any good at this, it would be easy by now.\""]
      answer: 0
      feedback: [null, "That's the belief talking, not the coach.", "Comparing and copying skips the learning.", "That's the 'smart means easy' belief again."]
      explain: "The coach notices the belief and turns it into a question about what to do next."
```

### Usually true?

### Ella's coach

## Apply

```step
stage: make
insight: "Students turn the idea on themselves, privately. Share only what you're comfortable with."
check:
  type: reflect
  text: "I've looked back at the six statements and thought about whether my answers have changed."
```

Look back at the six statements from the start. Just for yourself:

- Did you agree with any of the ones that are often misleading? Has your answer changed?
- Think of a subject where learning feels slow or hard for you. Next time it does, what could your coach say instead of "I'm bad at this"?

You don't need to share any of this. If you want to, share one reason with your partner.
