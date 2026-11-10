---
order: 3
unit: why
title: Why do you do it?
summary: "People do schoolwork for lots of reasons at once: some push you from outside, some are your own. Goals differ too: getting better, looking good, or not looking bad. Marks are the scoreboard: worth knowing, but not the same as getting better, and aiming only at the scoreboard can steer you toward easy tasks and shortcuts. Your learning coach asks why this matters to you, and sets goals about what you'll do."
language: science
shape: primer
hook: "Ava did her maths homework last night. Why? Probably more than one reason."
---
Everyone in this workshop is made up. You'll think about your own reasons at the end, privately.

## Think first

```step
stage: predict
insight: "Starting with a made-up learner's reasons, not the student's own. Most students expect one reason; the reveal is a mix."
check:
  type: predict
  q: "Ava did her maths homework last night. What was her reason most likely to be?"
  options: ["She had to: it was due", "She wanted a good mark", "She wants to get better at fractions", "Several of these at once"]
  actual: "Here's what Ava said: \"It's due tomorrow, and I don't want to get in trouble. I want to do well on the test. And honestly, fractions keep tripping me up, so I want to get them.\" That's three reasons at once, which is normal. Most people have a mix."
```

## The idea

```step
stage: investigate
insight: "Two ideas that go together but aren't the same: why you do it (reasons) and what you're aiming for (goals). Then the planted slip: a good mark means you've learned it."
tasks:
  - insight: "Reasons range from pushed (outside you) to owned (yours). A reason that started outside you can still be one you own."
    check:
      type: sort
      q: "Sort these made-up learners' reasons for doing their homework. Is each one mostly pushing them from outside, or one they own?"
      options: ["Pushed: from outside", "Owned: it matters to them"]
      items:
        - ["\"I'll get a detention if I don't.\"", "Pushed: from outside"]
        - ["\"My parents will check.\"", "Pushed: from outside"]
        - ["\"I'd feel bad if everyone else did it and I didn't.\"", "Pushed: from outside", "This one comes from inside your head, but it's still a push: guilt or worry, not wanting it."]
        - ["\"I want to understand how volcanoes work. It's interesting.\"", "Owned: it matters to them"]
        - ["\"I need fractions for science next year, and I want to be ready.\"", "Owned: it matters to them", "It's for something else, but it's a reason this learner agrees with and owns."]
        - ["\"I want to get better at writing, so I can write my own stories.\"", "Owned: it matters to them"]
  - insight: "The goals grid: what you're aiming for. Emphasis on getting better, looking good and not looking bad."
    check:
      type: sort
      q: "Now sort what each learner is aiming for."
      options: ["Getting better", "Not slipping back", "Looking good", "Not looking bad"]
      items:
        - ["\"I want to be able to do the hard questions by the end of term.\"", "Getting better"]
        - ["\"I want to beat my score from last time.\"", "Getting better", "Comparing with your own past self is about getting better."]
        - ["\"I want the top mark in the class.\"", "Looking good"]
        - ["\"I want people to see I'm good at this.\"", "Looking good"]
        - ["\"I just don't want to be the worst.\"", "Not looking bad"]
        - ["\"I won't put my hand up in case I'm wrong.\"", "Not looking bad"]
        - ["\"I don't want to forget what I learned last term.\"", "Not slipping back"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib has a fractions quiz next week. Click the line where Nib's thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: good-mark-means-learned
      explain: "Line 2: practising only the easy questions gets Nib a good practice score but doesn't make Nib any better at the hard ones. Nib was steering toward the scoreboard, not toward getting better."
```

**Why you do it.** Some reasons **push** you from outside: a deadline, a detention, someone checking. Some you **own**: it's interesting, or it matters for something you care about. Most people have a mix, and pushed reasons aren't bad: deadlines get things done. But reasons you own usually help you keep going when it gets hard.

**What you're aiming for.** Goals fit into a grid:

| | Aiming **for** something | Aiming to **avoid** something |
|---|---|---|
| **Compared with yourself or the task** | Getting better | Not slipping back |
| **Compared with other people** | Looking good | Not looking bad |

You can have more than one at once, and getting better and doing well often go together fine. The one to watch is **not looking bad**: it can make you avoid hard questions, skip putting your hand up, or give up so it doesn't look like you tried. The coach notices worry like that and points back at getting better.

**Marks are the scoreboard.** They're worth knowing: they tell you something about how it went. But the scoreboard isn't the same as getting better. If you steer only toward the scoreboard, you might pick easy tasks, take shortcuts, reread instead of testing yourself, or fall apart after a bad mark. There's a difference between doing the moves **for the teacher** and doing them **for yourself**.

**Two moves your coach can use:**

- **Beat your own best.** Compare with your past self, not with other people: "more right than last week".
- **What you'll do, not just what you'll get.** "Get an A" is what you'll get. "Test myself on five questions each night" is what you'll do, and you're in charge of that.

And one question: **"Why does this matter to me right now?"** Sometimes the honest answer is "it's due". That's fine. See if you can find one reason of your own as well.

### Pushed or owned?

### What are they aiming for?

### Nib's slip

## Check

```step
stage: practise
tasks:
  - check:
      type: sort
      q: "Is each goal about what you'll do, or what you'll get?"
      options: ["What you'll do", "What you'll get"]
      items:
        - ["Get an A on the test", "What you'll get"]
        - ["Test myself on five questions each night", "What you'll do"]
        - ["Come in the top three", "What you'll get"]
        - ["Read my draft aloud and fix one sentence", "What you'll do"]
        - ["Ask about the bit I don't get on Tuesday", "What you'll do"]
  - check:
      type: question
      q: "Raj gets a C on a science test after working hard. Which thought sounds most like his learning coach?"
      options: ["\"Which questions did I lose marks on, and what can I practise?\"", "\"Everyone did better than me, so I should give up on science.\"", "\"Next time I'll only do the questions I know I'll get right.\"", "\"Marks don't matter, so I won't look at the test.\""]
      answer: 0
      feedback: [null, "That's a not-looking-bad thought. It stops the learning.", "That's steering to the scoreboard: a better mark, but no better at science.", "The mark is worth knowing. It shows Raj where to work next."]
      explain: "The coach reads the scoreboard for information, then points at getting better."
```

### Do or get?

### Raj's test

## Apply

```step
stage: make
insight: "Students place their own reasons and goals privately. Share only what you're comfortable with."
check:
  type: reflect
  text: "I've thought about my own reasons and goals for one subject."
```

Pick one subject. Just for yourself:

- What are your reasons for doing the work? Which ones push you, and which do you own?
- Which box of the grid are you mostly aiming for? Is that helping you?

You don't need to write this down or share it. If something surprised you, you can tell your partner, but you don't have to.

## Try

```step
stage: run
insight: "Turning a what-you'll-get goal into a what-you'll-do goal for a real task this week."
check:
  type: reasoning
  q: "Pick a real task from another subject this week. Write one goal about what you'll do (not what you'll get), and one reason it matters to you."
  placeholder: "This week in … I will … It matters to me because …"
  models:
    - title: "Maths"
      text: "This week in maths I'll do three practice questions each night without looking at the examples first. It matters because I keep forgetting the method in tests."
    - title: "English"
      text: "For my persuasive piece, I'll read my draft aloud on Wednesday and fix the two weakest sentences. It matters because I want people to actually agree with me."
  criteria:
    - "My goal is something I'll do, and I'm in charge of whether it happens."
    - "I gave a reason that's mine, even if there's also a deadline."
```

This stays in your browser. Nobody sees it unless you show them.
