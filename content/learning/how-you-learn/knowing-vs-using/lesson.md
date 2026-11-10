---
order: 5
unit: use
title: Knowing it vs using it
summary: "Knowing a strategy isn't the same as using it when it matters. A strategy you understand (what it is, how to do it, when it fits and why it works) is easier to reach for. A new strategy often feels slower before it helps, so give it a few goes. Then make an if-then plan to use one on a real task this week."
language: science
shape: primer
hook: "Here's a task from a science class. Before anyone tells you a strategy, what does it actually ask you to hand in?"
---
Try the first step before reading anything else. Everyone in this workshop is made up, and your own task at the end is just for you.

## Try

```step
stage: run
insight: "Students meet the problem before the strategy is named. Many will answer only the first part of the task."
check:
  type: question
  q: "A made-up science task: \"Using your results, explain whether the type of surface affects how far the toy car rolls. Include one way you could make the test fairer.\" What does it ask you to hand in?"
  options: ["Whether the surface matters, and one way to make it fairer", "Whether the surface matters, using the results", "A table of the results, with a graph of them", "A description of what the car did on each surface"]
  answer: 0
  feedback: [null, "That's the first part. Read to the end: there's a second thing to include.", "The results are what you use, not what you hand in.", "Describing isn't explaining, and there's a second part too."]
  explain: "Two things: an explanation using the results, and one way to make the test fairer. The second part is easy to miss on a first read."
```

Did you get both parts first time? Plenty of people don't, and then lose marks for something they could easily have done. The rest of this workshop is about one strategy that catches it, and about what it takes to actually use a strategy.

## The idea

```step
stage: investigate
insight: "Naming one strategy with its what, how, when and why, modelled in the coach's voice. Then: matching strategies to kinds of stuck, and the planted slip that a strategy that doesn't help first time doesn't work."
tasks:
  - insight: "When each strategy fits: different kinds of stuck need different moves."
    check:
      type: match
      q: "Match each made-up learner's problem to the strategy that fits best."
      pairs:
        - ["Sam isn't sure what the task wants him to hand in.", "What is it asking?"]
        - ["Ava understands the question but doesn't know where to start.", "Make a plan, or try a smaller version"]
        - ["Raj got an answer of 400 kg for the mass of an apple.", "Does it make sense?"]
        - ["Zoe has read the chapter and thinks she knows it, but isn't sure.", "Test yourself without the notes"]
        - ["Eli got a test back and keeps losing marks the same way.", "Look back: what would I change?"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is trying a new way to revise. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: didnt-help-first-time
      explain: "Line 3: one go isn't a fair test. A new strategy often feels slower and shows up gaps at first, and that's the dip. Rereading felt better, but it left the same gaps."
```

**The strategy: What is it asking?**

- **What:** before you start, say in one line what you have to find, make or hand in.
- **How:** read the whole task once; say it in one line; underline the words that tell you how ("explain", "include", "compare"); then ask, "If I did exactly that, would I be finished?"
- **When:** at the start of any task, especially one that looks like something you've done before.
- **Why it works:** saying it in your own words shows whether you've understood the task **before** you spend time on it.

**Here's the coach's voice using it** on the toy car task: *"OK, what is it asking? Explain whether the surface affects how far it rolls, using my results. Is that it? No, keep reading: 'include one way to make it fairer'. So two things. I'll write them at the top so I don't forget the second one."*

**Knowing it vs using it.** Most people who lose marks for missing part of a task already know they should read it carefully. **Having** a strategy and **using** it when it matters are different. What helps you use it:

- **Know the why.** A strategy without a reason is easy to drop.
- **Know the when.** Each kind of stuck needs a different move, as in the match above. The [strategy cards](../reference/) say when each one fits.
- **Expect the dip.** A new strategy usually feels slower or clumsier at first, and it might show you bad news, like gaps. Give it a few goes before you decide.
- **Make a plan for the moment.** "When I start a task, I'll write what it's asking in one line." That's an **if-then plan**: "When ___, I'll ___."

Seven strategies cover most tasks, in any subject:

| When | Strategy | Ask yourself |
|---|---|---|
| Before | **What is it asking?** | What do I have to find, make or hand in? |
| Before | **Make a plan** | What's my first step? |
| During | **Predict first** | What do I expect, roughly? |
| During | **Check your confidence** | How sure am I, and how could I check? |
| During | **Explain it to yourself** | Can I say why each step works? |
| During | **When you're stuck** | What kind of stuck is this? |
| After | **Look back** | What would I change next time? |

Each one has a card with steps, why it works, what it costs, and what it looks like in different subjects: [Strategy cards](../reference/). Code, maths, science and English have their own cards there too.

### Which strategy fits?

### Nib's slip

## Check

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Mo can explain 'Predict first' perfectly, but he never uses it in maths. What would help Mo most?"
      options: ["A plan for the moment he'll use it", "Being taught it again from the start", "Learning a different strategy instead", "Nothing: knowing it is enough"]
      answer: 0
      feedback: [null, "Mo already knows it. He needs a reminder at the right moment, not the whole lesson again.", "A new strategy would have the same problem: knowing isn't using.", "Knowing it hasn't been enough so far."]
      explain: "Mo has the strategy. What's missing is using it. An if-then plan ('When I start a maths question, I'll guess roughly first') or a prompt at the right moment helps more than reteaching."
  - check:
      type: question
      q: "Ivy finishes a coding task and it works, but she isn't sure why one line is needed. Which strategy fits best?"
      options: ["Explain it to yourself", "Make a plan", "What is it asking?", "Nothing: it works"]
      answer: 0
      feedback: [null, "The task's done. She needs to understand a line, not plan.", "She knows what the task asked.", "It works, but if she can't explain the line, she can't use it again."]
      explain: "Explaining each line, out loud or in a comment, shows what she understands and what she doesn't yet."
  - check:
      type: question
      q: "Kit tried 'What is it asking?' on his English homework. It took two extra minutes and he didn't notice anything new. What should Kit do?"
      options: ["Try it on a few more tasks before deciding", "Drop it: it didn't help", "Use it only on tasks he finds easy", "Do it more quickly so it costs less"]
      answer: 0
      feedback: [null, "One go is too soon to tell, and it may have helped by confirming he had it right.", "Easy tasks are where it matters least.", "Rushing it skips the bit that works: actually checking."]
      explain: "That's the dip. Some tasks won't need it, and on others it'll catch something. A few goes tells you more than one."
```

### Mo's strategy

### Ivy's line

### Kit's two minutes

## Apply

```step
stage: make
insight: "The transfer step: one strategy, on a real task in another subject, with an if-then plan for the moment it'll be used."
check:
  type: reasoning
  q: "Choose a real task you have this week in another subject, and one strategy that fits it. Write an if-then plan: \"When ___, I'll ___.\""
  placeholder: "My task is … When … , I'll …"
  models:
    - title: "Science write-up"
      text: "My task is my science report. When I open the task sheet, I'll write what it's asking in one line at the top, including every part."
    - title: "Maths homework"
      text: "My task is five fractions questions. When I start each question, I'll estimate the answer first, then check my answer is close."
  criteria:
    - "It names a real moment (when I open the task, when I get stuck, when I finish)."
    - "It names one strategy that fits that moment."
    - "I could actually do it this week."
```

Choose a task you have this week in another subject: a maths homework set, a science write-up, an English paragraph, a coding task, revising for a test. If you have nothing on, pick one from the list:

- **Maths:** five questions from your current topic. Use *Predict first*: estimate each answer before working it out.
- **Science:** the method of your last experiment. Use *What is it asking?*: write in one line what the experiment was meant to find out.
- **English:** a paragraph you wrote recently. Use *Look back*: reread it as a reader, and change one sentence.
- **Any subject:** tomorrow's revision. Use *Explain it to yourself*: explain the idea out loud without your notes.

This stays in your browser. Remember the dip: if it feels slow the first time, give it another go. Your teacher will ask "did it help?" in a week or two, and you only need to say as much as you want to.
