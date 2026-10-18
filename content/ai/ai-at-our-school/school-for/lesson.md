---
title: What is school for?
summary: "Before judging any AI, decide what school is for and which thinking stays with students. Sort tasks for a made-up school, and see why the answer can change from Year 7 to Year 10."
language: science
shape: 5e
unit: charter
order: 1
voice: { name: af_heart, speed: 1.1 }
---
You're on a school **AI committee**. People will ask you: should we use this tool? Should we block that one? Before you can answer, you need to know **what school is for, and which thinking students must still do themselves.**

In this course you practise on a made-up school, **Westbrook School**. Then your class or committee asks the same questions about your own school.

> **Westbrook School's aims**
> 1. Every student becomes a confident, **independent thinker**.
> 2. **Everyone belongs** and is treated fairly.
> 3. We **care** for each other and the world.
>
> **Westbrook's AI policy (2025):** Students must not use AI for schoolwork unless their teacher says they can. Staff may use approved AI tools. This policy will be reviewed when needed.

## Engage: one report, three aims

```step
stage: predict
check:
  type: predict
  q: "A Year 7 student at Westbrook asks an AI app to write their whole science report, and hands it in. Which of the school's aims does that work against most?"
  options: ["Aim 1: independent thinkers", "Aim 2: everyone belongs and is treated fairly", "Aim 3: care for each other and the world", "None of them"]
  actual: "Mostly aim 1: the report was meant to make the student do the thinking, and they skipped it. There's a fairness question too (aim 2) if some students have the app and others don't. The aims, not the AI, tell you what the problem is."
```

## Explore: sort the tasks

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Sort these Year 7 tasks at Westbrook. Where does AI fit?"
      options: ["AI can help", "Keep the thinking", "Depends on the goal"]
      items:
        - ["Checking the spelling in a finished poster", "AI can help", "The learning goal isn't spelling, so a spellchecker frees time for the science."]
        - ["Planning your own experiment to test which paper towel soaks up most", "Keep the thinking", "Planning a fair test is the skill the task is for."]
        - ["Writing a paragraph that explains your results", "Keep the thinking", "Explaining in your own words is how you find out what you understand."]
        - ["Turning a teacher's notes into practice quiz questions", "AI can help", "Practising recall helps you learn, and the questions aren't the goal."]
        - ["Translating a word in a science text into your first language", "Depends on the goal", "Helpful in science; in a language class, translating it yourself may be the whole point."]
        - ["Getting a hint when you're stuck on a maths problem", "Depends on the goal", "A hint can keep you going; the full worked answer can take the thinking away."]
  - check:
      type: reasoning
      q: "Choose one 'depends on the goal' task. Say when AI would help a Year 7 student learn, and when it would get in the way."
      placeholder: "Task: … Helps when: … Gets in the way when: …"
      models:
        - title: "A strong answer"
          text: "Task: a hint in maths. Helps when: I've tried, I'm stuck on one step, and the hint tells me what to look at. Gets in the way when: it shows the whole answer, so I copy it and can't do the next one alone."
        - title: "A different view that also works"
          text: "Task: translating a word. Helps when: I'm learning about cells and one word blocks me. Gets in the way when: it's a French class and the point is to learn that word myself."
      criteria: ["I named the task.", "I said when AI helps, linked to what the task is for.", "I said when it gets in the way."]
      explain: "Whether AI helps depends on what the task is for. Start with the learning goal, not the tool."
```

### Sort the tasks

Use Westbrook's aims. Ask: what is this task for?

### Help or get in the way?

Pick one task from the "depends" group.

## Explain: start with what school is for

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook lets Year 10s use AI to summarise long articles, but not Year 7s. Why might that be fair?"
      options: ["Year 10s have practised summarising themselves, so the AI saves time instead of skipping the learning", "Year 10s are better at using apps", "Year 7s would break the AI"]
      answer: 0
      feedback: [null, "It's not about app skills: it's about whether the summarising skill is already learned.", "AI can't be broken this way. Think about what each year still needs to learn."]
  - check: { type: reflect, text: "I can explain why the same task can be 'keep the thinking' for one year and 'AI can help' for another." }
```

A school AI committee starts with two questions:

1. **What is school for?** The learning and school life we want, for example independent thinking, belonging, care.
2. **What thinking stays with students?** The parts of a task that *are* the learning: planning, explaining, practising a skill not yet learned.

Then the same task can be sorted differently for different students. Support that helps a beginner can get in the way once the skill is learned. **Age and stage matter.**

### Year 7 or Year 10?

Why might the answer change?

### Explain it

Say why the goal decides where AI fits.

## Elaborate: what does the policy say?

```step
stage: modify
tier: typical
check:
  type: question
  q: "Read Westbrook's AI policy again (top of the page). What's missing if you want to know when AI should be used?"
  options: ["It never says what the AI should help with, or what thinking students must keep", "It's too long", "It names too many tools"]
  answer: 0
  feedback: [null, "It's very short. The problem is what it leaves out.", "It names no tools at all."]
```

Westbrook's policy says *who* decides (the teacher), but not *how* they decide. Two teachers could make opposite choices for the same task, and both would follow the policy.

What would help a teacher decide? Write one sentence the policy could add.

## Elaborate: help that turns into a crutch

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained why one rule for every year level may not fit, using the idea that support should change as students learn." }
```

Researchers have found that support which helps beginners (worked examples, step-by-step help) can **get in the way** for students who already know the skill. They call it the **expertise reversal effect**. AI support is a kind of help, so the same may apply.

What does that mean for a school rule that is the same for Year 7 and Year 12? Should support be **switched down** as students get better? Who would decide when?

## Evaluate: charter, part 1

```step
stage: info
check:
  type: question
  q: "A committee member says: 'Let's decide which AI apps to allow first, then work out our values.' What's the problem?"
  options: ["Without knowing what school is for, there's nothing to judge the apps against", "There's no problem: apps come first", "Values are only for teachers"]
  answer: 0
  feedback: [null, "Then every decision is a guess, and the next app starts the argument again.", "Students' values matter too: it's their learning."]
```

On paper, start your committee's **charter**. You'll finish it in lesson 3.

| Charter, part 1 | |
|---|---|
| Our school is for… | |
| Thinking students must keep: | |
| Tasks where AI can help: | |
| Where it depends on age or goal: | |

**Next lesson:** turn these into principles you can test a decision against.
