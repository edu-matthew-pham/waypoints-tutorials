---
title: Is performing well the same as learning?
summary: Compare assisted and independent attempts, examine what each demonstrates and question whether tests capture every kind of learning.
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
In Lesson 1, we questioned whether an impressive product shows learning. But perhaps a student *can* produce a better result because of help and learn something in the process.

**Provocation:** "If I get the correct answer with AI, that means I've learned it." What evidence would support or challenge that claim?

## Engage: what does success tell us?

```step
stage: predict
check:
  type: predict
  q: "A student solves a maths problem using step-by-step help, then submits the correct answer. What does this establish?"
  options: ["They can definitely solve future problems independently", "They succeeded with the available help; we need more evidence about their learning", "The help prevented all learning"]
  actual: "The answer shows assisted success. We have not yet tested what the student now understands or can do in another situation."
```

Think back to your own experiences. Have you ever followed a worked example and felt confident, but found a new problem more difficult? Have you ever learned something *from* a worked example? Both experiences are possible.

## Explore: compare help and a fresh attempt

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Explore the prepared practice activity and inspect its feedback.", when: "t >= 1" }
```

Use the prepared practice board as an **example of scaffolded assistance**, not as an experiment proving AI improves learning. Notice when it provides hints, when you still do the thinking and what you can check for yourself.

Then try this short two-round investigation on paper or in discussion. An AI account is not required.

**Round A — supported:** A school garden has planted 12 seedlings. One third are herbs. A worked example shows that one third of 12 is 12 ÷ 3 = 4. Explain why dividing by 3 makes sense.

**Round B — new task:** Without looking back, 15 seedlings are planted and two fifths are herbs. How many herbs are there? Write *how you know*, not just the number.

Compare the two rounds: Which required you to follow an example? Which required you to apply an idea? What would one correct or incorrect answer allow you to conclude?

**Teacher note for the activity:** It is a classroom illustration, not a controlled study. Varying the numbers and adding a new step also varies task difficulty. A student who struggles may still have learned something; a correct response does not prove durable understanding.

## Explain: performance, transfer and limitations

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What does an accurate supported answer most directly show?"
      options: ["Successful performance under those conditions", "Guaranteed long-term understanding", "The absence of learning"]
      answer: 0
  - check:
      type: question
      q: "Why is a related new problem useful after a worked example?"
      options: ["It offers additional evidence about whether the learner can apply the idea", "It proves that all learning is independent", "It removes every difference between the two tasks"]
      answer: 0
  - check: { type: reflect, text: "I can explain why an assisted answer, a fresh attempt and a delayed attempt offer different evidence about learning." }
```

### Assisted performance

**Performance** describes what a learner achieves under particular conditions. Tools, hints, peers and teachers can all change those conditions.

### Transfer

**Transfer** means applying something learned to another situation. Trying a related but unfamiliar problem can provide evidence of transfer, although one response is never a complete measurement.

### Retention

**Retention** concerns what remains available over time. A delayed attempt adds information that an immediate practice result cannot provide.

A new problem, a delayed check and a student's explanation can be useful evidence, but they do not settle every question about meaningful learning. Learning can also involve curiosity, collaboration, creativity, productive tool use and judgement.

## Elaborate: challenge the proposed measurement

```step
stage: make
tier: typical
check: { type: reflect, text: "I proposed evidence of learning and identified at least one limitation of my own proposal." }
```

Discuss the proposition:

**"If a student cannot repeat a task unaided, the assistance did not help them learn."**

First, make the strongest reasonable case **for** it. Then make the strongest case **against** it. Consider a student learning to calculate fractions and a student using a game engine to prototype an idea.

Design a better way to investigate one student's learning. What would you observe immediately, later, and in a different context? Which important outcomes might still escape your measurement?

**Optional inquiry record:** Revisit your Lesson 1 position. Add an example of assisted success that might conceal limited learning, *and* an example where assistance could support understanding. You need not choose a final verdict.

## Evaluate: what would count as evidence?

```step
stage: info
check:
  type: question
  q: "Which is the most defensible conclusion?"
  options: ["Only delayed unaided tests can ever show learning", "Finished work and independent transfer provide different, incomplete kinds of evidence", "If a student uses help, all evidence of learning becomes invalid"]
  answer: 1
```

Respond to this claim: "My AI tutor helped me complete five hard problems, so I definitely understand the topic now." Identify **one warranted conclusion**, **one unwarranted leap** and **one additional way to investigate**.

## Learning with AI: notice what the evidence cannot say

```step
stage: info
check: { type: reflect, text: "I can distinguish help that improves my current result from evidence that I have developed a capability." }
```

You can learn from assistance without doing every step alone. You can also complete work without developing the capability that the work appears to demonstrate. The question is what evidence supports your conclusion—not whether asking for help is inherently good or bad.

**Next inquiry:** Even if we measure independent capability carefully, is that the only kind of learning worth valuing?
