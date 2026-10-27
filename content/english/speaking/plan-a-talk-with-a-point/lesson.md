---
order: 1
unit: warmup
title: Plan a talk that has a point
shape: speech
summary: "A talk works when the speaker knows who is listening and what they should know, think or do afterwards. A plan has an opening, two or three points, a detail for each point, and a close. Students label the parts of a plan, put a shuffled plan in order, spot a plan that slips, and plan a short talk of their own."
language: maths
node: [AC9E4LY07 n1, AC9E5LY07 n1, AC9E6LY07 n1, AC9E7LY07 n1]
assumes: [AC9E4LY07 n2, AC9E4LY07 n3, AC9E5LY07 n2, AC9E5LY07 n3, AC9E5LY07 n4, AC9E6LY07 n2, AC9E6LY07 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "A plan for a talk: the opening says what it is about, each point has a detail, and the close says what to do." }
hook: "You have two minutes and a room full of people. What do you decide before you write a single word?"
---
A talk is heard once, at the speed the speaker chooses. Listeners cannot go back and read it again, so a talk needs a plan that is easy to follow.

Two choices come before the plan:

- **Purpose**: what you want the listeners to know, think or do afterwards.
- **Audience**: who is listening, and what they already know.

Then comes the plan itself:

- **Opening**: tells listeners what the talk is about and why they should listen.
- **Points**: the two or three main ideas, in an order that makes sense.
- **Details**: a fact or example that backs up each point.
- **Close**: says the main idea again and what listeners should do.

## Purpose and audience: which talk sticks?

```step
stage: predict
insight: "Predicting which of two plans a listener will remember brings out that a talk with one clear aim is easier to follow than a heap of facts."
check:
  type: predict
  q: "Nib has two minutes to talk to Year 5 about the school library. Plan A lists everything Nib knows about the library. Plan B starts with one sentence: 'Year 5 should leave wanting to join the book club.' Which talk will Year 5 remember better?"
  options: ["Plan A, because it gives them more facts", "Plan B, because every part of it has a job", "Neither, because it depends on Nib's voice", "Both the same, because the topic is the same"]
  actual: "Plan B. When every point works towards one aim, listeners can tell what matters. A heap of facts leaves them with no way to tell which one to keep."
```

## Try: label the plan

```step
stage: run
insight: "Labelling the lines of a finished plan makes the four jobs of a plan concrete before students plan their own."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Click a line, then choose its job.", "Which line tells listeners what to do afterwards? Which lines back up a point with a fact or an example?"]
smaller:
  check: { type: question, q: "What is a detail in a plan for?", options: ["It gives a fact or example that backs up a point", "It tells listeners what the whole talk is about", "It says what listeners should do next"], answer: 0, feedback: [null, "That is the job of the opening.", "That is the job of the close."], explain: "A point is an idea. A detail is the fact or example that makes the idea believable." }
check: { type: board, text: "Label every line of the plan as the opening, a point, a detail or the close.", when: "n_right = 8 and n_wrong = 0", explain: "The first line draws listeners in and says what the talk is about. Each point has the detail that follows it. The last line says the main idea again and tells listeners what to do." }
```

Were you right about what sticks? Nib's book club plan gives every line a job, so a listener always knows where they are.

## Worked example: what a plan is for

```step
stage: investigate
insight: "Asking why an aim has to be sharper than a topic, finding the slip in Nib's close and judging how many points fit in two minutes show what a plan protects a speaker from."
tasks:
  - check:
      type: question
      q: "Nib wrote the aim 'Tell Year 5 about the library.' Why is that not enough to plan from?"
      options: ["It is too short to be a sentence", "It says nothing about what listeners should know, think or do afterwards", "Year 5 already know all about the library", "Aims should always name three points"]
      answer: 1
      feedback: ["Length is not the problem. A short aim can be a good one.", null, "That could be true, but the aim does not say so. The problem is in the aim itself.", "An aim comes before the points. It does not count them."]
      explain: "A topic says what the talk is about. An aim says what the listeners will do or think because of it. Without an aim, Nib cannot tell which facts belong."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's plan for a talk about the new beanbags, one line each. Click the line that does not belong in a close."
      answer: 7
      fault: logic
      misconception: close-new-idea
      explain: "Line 7: a close says the main idea again and what to do. The new printer is a fresh idea, and listeners have no time left to take it in. It belongs in a point, or nowhere."
  - check:
      type: question
      q: "A two-minute talk has eight main points, each with a detail. What is the likely problem?"
      options: ["Eight is an unlucky number of points", "The talk needs more details for each point", "Listeners will not hold that many, and each point gets only a few seconds", "The opening should come last"]
      answer: 2
      feedback: ["There is nothing special about eight. The trouble is time and memory.", "More details would make a long list even harder to follow.", null, "The opening comes first so listeners know where they are going."]
      explain: "People hold only a few ideas from a talk they hear once. Two or three points, each with a detail, is what two minutes can carry."
  - check:
      type: question
      q: "Nib wants Year 5 to learn how to fold a paper plane. Which way of presenting suits the listeners and the purpose?"
      options: ["A talk alone, because talks are quicker", "A talk with Nib folding a plane in front of them as each step is said", "A poster only, because Year 5 can read", "A list of steps read out without stopping"]
      answer: 1
      feedback: ["Folding is hard to follow from words alone, and speed is not the goal.", null, "A poster could work for reading, but the purpose here is to show how, and a speaker can do that live.", "Listeners cannot hold a list of steps, and they cannot see what is being folded."]
      explain: "The purpose is to show how, so the best choice shows it. A talk with a live demonstration lets listeners see each step as they hear it. Choosing how to present is part of planning."
```

### Aim first

```worked
\text{Decide the purpose} :: What should listeners know, think or do afterwards?
\text{Decide the audience} :: Who are they, and what do they already know?
\text{Choose two or three points} :: Keep only the ideas that serve the purpose.
\text{Back each point} :: Add a fact or example for each one.
\text{Open and close} :: Say where you are going, then say where you have been.
```

Now: why is a topic not enough?

### Find Nib's slip

### How many points?

### Which way to present?

## Vary: put the plan in order

```step
stage: investigate
insight: "Rebuilding a shuffled plan shows that the opening promises an order, and the points then keep it."
try: { playground: board, starter: "text.yml#vary", height: 520 }
hint: ["Click a line, then press Move up or Move down.", "Which line says what the talk is about? Which line do listeners need to hear last? Where does each detail sit?"]
check: { type: board, text: "Put the plan in order: the opening first, each point followed by its detail, and the close last.", when: "in_order = 1", explain: "The opening says the talk is about three easy ways to save water. Each way comes with its example straight after it, and the close says the main idea again and what to do." }
```

## Make: plan a talk of your own

```step
stage: investigate
insight: "Writing a short plan with three points and labelling it puts the aim, the audience and the four jobs of a plan to work together."
try: { playground: board, starter: "text.yml#make", height: 520 }
hint: ["Who is listening, and what should they do afterwards?", "Which fact or example makes each point believable?"]
check: { type: board, text: "Write a line for each part of the plan: an opening, three points that each have a detail, and a close. Label each one. Every line needs words in it.", when: "n_empty = 0 and n_right = 8", explain: "Every line has words and a label. Read just your opening and close to a partner: do they sound like the same talk?" }
```

The board checks that every line has words and a label. It cannot tell whether your plan suits Year 5, so ask a partner: could they say what you want them to do?

## In your own class

```step
stage: investigate
tier: typical
insight: "Writing the aim for a real task and checking each point against it moves the habit to work students will give."
check: { type: reflect, text: "I wrote the aim of a talk I have to give in a class, then crossed out any point that did not serve it." }
```

## Wider: the same plan for a different audience

```step
stage: investigate
tier: wider
insight: "Replanning for another audience keeps the same skill and shows how the audience changes the choices."
check: { type: reflect, text: "I changed my plan for a different audience, such as parents, and explained which point or detail I changed and why." }
```
