---
title: What thinking should we keep?
summary: Sort the jobs in a task into "keep" and "hand over", change the goal, and see how the answer changes for beginners and experts.
language: science
shape: 5e
unit: choosing-assistance
order: 1
voice: { name: af_heart, speed: 1.1 }
---
Unit 2 looked at what studies can and can't show. Now a practical question: **if AI can do some of the thinking for you, which thinking should you keep?**

## Engage: remember the maths study

```step
stage: predict
check:
  type: predict
  q: "In the high school maths study, students who practised with a plain AI chatbot did worse later without it. Why might that be?"
  options: ["The chatbot did thinking they needed to practise", "The chatbot gave them wrong answers", "The later test was harder for that group"]
  actual: "The study didn't test why. One likely reason is that the chatbot did thinking the students needed to practise. That is today's question: which thinking should you keep?"
```

Does saving effort always cost you learning? Or can it free up time for something that matters more?

## Explore: keep it or hand it over?

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Your goal: learn to write a persuasive argument. Keep each job, or hand it over and check it?"
      options: ["Keep it: it's the skill I'm learning", "Could hand it over, then check"]
      items:
        - ["Choosing what you will argue", "Keep it: it's the skill I'm learning"]
        - ["Deciding which reasons are most convincing", "Keep it: it's the skill I'm learning"]
        - ["Answering an objection to your argument", "Keep it: it's the skill I'm learning"]
        - ["Checking the spelling", "Could hand it over, then check", "Spelling matters, but it isn't the skill of arguing."]
        - ["Making the handout look neat", "Could hand it over, then check"]
        - ["Getting a list of objections people might raise", "Could hand it over, then check", "You still have to judge which ones are good, and answer them yourself."]
  - check:
      type: sort
      q: "Same paragraph, new goal: practise your spelling. Keep each job, or hand it over and check it?"
      options: ["Keep it: it's the skill I'm learning", "Could hand it over, then check"]
      items:
        - ["Checking the spelling", "Keep it: it's the skill I'm learning", "Now spelling is the skill, so a tool that fixes it for you skips the practice."]
        - ["Finding the words you often spell wrong in your draft", "Keep it: it's the skill I'm learning"]
        - ["Making the handout look neat", "Could hand it over, then check"]
        - ["Getting a list of objections people might raise", "Could hand it over, then check", "Not today's skill. If you use them, you still judge them yourself."]
```

You are writing a short persuasive paragraph: *Our school should have more outdoor lessons.* There are many jobs in this task. Some of them are the skill you are learning. Some are not.

### Sort the jobs

Sort each job for the goal "learn to write a persuasive argument".

### Change the goal

Same task, new goal. Which job is now the skill?

## Explain: it depends on the goal and the learner

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Lina is new to adding fractions. She studies a full worked example, then explains each step and tries a new one. Was getting the full solution bad for her?"
      options: ["Not necessarily: beginners often learn well from a worked example if they then explain it and try one", "Yes: a full solution always skips the learning", "No: worked examples are the best help for everyone"]
      answer: 0
      feedback: [null, "Lina still explained it and tried a new one herself.", "Experts often gain less from worked examples than beginners do."]
  - check:
      type: question
      q: "Omar is a strong writer. He asks AI for objections to his argument and pastes one in. It mentions a study that doesn't exist. What went wrong?"
      options: ["He handed over the checking, which still mattered", "Strong writers should never use AI", "Nothing: experts don't need to check"]
      answer: 0
      feedback: [null, "Getting ideas from AI can be fine. Skipping the check was the problem.", "Even experts need to check sources."]
  - check:
      type: question
      q: "In a lesson on reading graphs, Priya uses a calculator for the averages. Has she handed over the skill?"
      options: ["No: reading what the graph means is the skill; the sums are on the edge", "Yes: any tool use skips the skill", "Yes, unless she checks every sum by hand"]
      answer: 0
      feedback: [null, "The lesson's skill is reading graphs, not arithmetic.", "Checking the answers make sense is good, but redoing every sum isn't the skill here."]
```

Using a tool to do part of your thinking is called **cognitive offloading**. Notes, calculators, friends and AI can all take some thinking off you.

- **It depends on the goal.** Thinking that *is* the skill you're learning is worth keeping. Jobs on the edge of the skill can often be handed over and checked. The same job can be the skill for one goal and on the edge for another, as spelling was.
- **It depends on the learner.** Beginners often learn well from a full worked example, as long as they then explain it and try one. People who already know a lot gain less from worked examples. This was known long before AI.
- **Experts slip too.** Knowing a lot doesn't stop you missing an AI mistake. Someone can be an expert writer and a beginner at statistics.

Some researchers suggest that goal, experience and checking decide whether handing thinking to AI helps or harms. That is an idea to test, not a proven rule.

### Lina

Lina is a beginner.

### Omar

Omar is an expert writer.

### Priya

What is the skill in Priya's lesson?

## Elaborate: test a rule

```step
stage: make
tier: typical
check: { type: reflect, text: "I tested a rule about handing over thinking, and improved it with an 'it depends on…' condition." }
```

Test this rule: **"Keep the important thinking and hand over the rest."**

Try it on two cases:

- A beginner learns from a complete worked example. Was getting the full solution harmful?
- An expert pastes an AI objection that cites a source that doesn't exist. Did being an expert protect them?

Now try a new task: a student making a game asks AI for the code that stops the player walking through walls. Is that the skill if their goal is learning to program? What if their goal is finding out which game rules players enjoy? (You don't need to know any coding.)

Write a better rule that starts "Hand it over when…, but keep it when…". Then find a case where your rule still fails.

## Evaluate: what would show it helped?

```step
stage: info
tasks:
  - check:
      type: question
      q: "A student handed some jobs to AI while learning to write arguments. What best shows whether that helped them learn?"
      options: ["Whether they can now write a strong argument on a new topic themselves", "How fast they finished", "How many messages they sent to the AI"]
      answer: 0
      feedback: [null, "Fast work can mean the AI did the thinking.", "Lots of messages could mean anything."]
  - check:
      type: reasoning
      q: "You are learning to write persuasive arguments. Your paragraph is due tomorrow and you are tired. An AI offers to write a first draft for you to 'improve'. What do you do, and why?"
      placeholder: "I would … because …"
      models:
        - title: "A strong answer"
          text: "I would say no to the full draft, because choosing my argument and my reasons is the skill I'm learning. I could write a quick rough version myself, then ask for one hint or a list of objections, and check them. If I'm really out of time, I'd tell my teacher rather than hand in the AI's thinking."
        - title: "A different view that also works"
          text: "I might read an AI draft as an example, the way a beginner uses a worked example. Then I'd close it and write my own, with a different reason. That only helps if I really write my own and can explain it without the draft."
      criteria: ["I named which thinking is the skill I'm learning.", "I said what I would keep, and what, if anything, I would hand over.", "I said how my work would still show my own thinking."]
      explain: "Keep the thinking that is the skill. Help on the edges can be fine, as long as the work still shows what you can do."
```

### What would show it helped?

Think about what the student can do afterwards.

### Your choice

A real dilemma. More than one answer can be good.

**Next lesson:** if some help is a good idea, why assume AI is the best way to give it?
