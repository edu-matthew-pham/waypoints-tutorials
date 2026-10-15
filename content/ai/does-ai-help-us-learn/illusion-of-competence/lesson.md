---
title: Can AI create an illusion of competence?
summary: Investigate confidence, actual performance and the difficulty of knowing what we have learned with assistance.
language: science
unit: evaluating-evidence
order: 2
voice: { name: bf_emma, speed: 1.05 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
---
Have you ever understood an explanation while reading it, then struggled to produce the explanation yourself? AI can make answers feel clear and successful. **Could this distort how well we think we understand a subject?**

## Engage: confidence is a prediction

```step
stage: predict
check:
  type: predict
  q: "You follow a convincing AI explanation and feel confident. Which conclusion is safest?"
  options: ["Confidence proves the skill was learned", "Confidence may be informative, but it needs checking against other evidence", "Feeling confident means no learning occurred"]
  actual: "Confidence is a judgement about your ability, not the ability itself. Checking it against outcomes helps calibrate that judgement."
```

**Provocation:** If a tool increases your success and your confidence at the same time, how would you notice that one had increased faster than the other?

## Explore: monitor a fresh attempt

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Complete one practice challenge and record a new attempt.", when: "t >= 1" }
```

This is a **prepared practice activity**, not a live AI system. Choose a challenge, write your own attempt and inspect a hint or worked example. Where the board offers a new question, attempt it without looking back.

Before checking the new attempt, record how confident you are that your explanation is correct: **low, medium or high**. After inspecting the response and discussing the answer, compare the confidence judgement with what you actually demonstrated.

One short activity cannot measure your enduring ability or establish that AI caused anything. But it makes **monitoring your own understanding** something you can investigate.

## Explain: distinguish confidence from calibration

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What does metacognitive calibration mean?"
      options: ["How accurately your confidence matches your actual performance", "Always being very confident", "Letting AI decide whether you understand"]
      answer: 0
  - check:
      type: question
      q: "What is an illusion of competence?"
      options: ["A mismatch where you feel more capable than available evidence justifies", "An incorrect answer that proves no learning occurred", "A necessary result of every technology"]
      answer: 0
  - check:
      type: question
      q: "What is a limitation of one practice task when assessing confidence?"
      options: ["The task may be unrepresentative and the result may not generalise", "It measures all long-term learning perfectly", "It tells us nothing whatsoever"]
      answer: 0
```

### Metacognition

**Metacognition** includes thinking about and monitoring your own understanding: what you know, what you do not know, and which strategies are working.

### Calibration

**Calibration** concerns whether your confidence fits the available evidence of your performance. You can be too confident or not confident enough. Reflection and checking can help, but are not automatically accurate.

### Self-regulated learning

When learners set goals, monitor progress and adjust strategies, they practise **self-regulated learning**. If confidence is poorly calibrated, choosing when to request help or attempt work independently may become harder.

## Elaborate: investigate evidence about AI and confidence

```step
stage: make
tier: typical
check: { type: reflect, text: "I considered the confidence research and a limitation of applying it to students." }
```

In [Fernandes and colleagues' study, published in *Computers in Human Behavior* in 2026](https://doi.org/10.1016/j.chb.2025.108779), participants using AI for logical reasoning performed better than a comparison norm but **overestimated how well they had performed**. The paper includes studies with 246 and 452 participants. The task involved reasoning problems, not a long school course, and the paper does not establish how much knowledge participants retained weeks later.

Discuss two claims:

- "Better AI-assisted performance is a real benefit even if people misjudge their abilities."
- "Overconfidence makes AI-assisted success dangerous because people may stop practising what they have not mastered."

Could both be justified? Would a tool that helps users test their understanding change the concern? What if conventional tutoring software already did so?

**Optional discussion or inquiry record:** Note one situation where confidence is useful, one in which it misleads, and one practical way to seek better evidence.

## Evaluate: what have we learned about judging learning?

```step
stage: info
check:
  type: question
  q: "What can the cited AI-and-metacognition study most directly support?"
  options: ["Everyone using AI loses the ability to learn", "In the studied reasoning tasks, participants could perform better with AI while overestimating performance", "All students should avoid every digital tutor"]
  answer: 1
```

A student says, "I checked the AI explanation and it made sense, so I no longer need to practise." What evidence would you suggest gathering, and what would it still not prove?

## Learning with AI: a challenging paradox

```step
stage: info
check: { type: reflect, text: "I can explain why deciding when to use help requires judging my understanding, and why that judgement may be imperfect." }
```

A student may need self-regulation to use AI well, yet AI might make their self-assessment less reliable. This is a **tension to investigate**, not proof that students cannot regulate their learning.

**Next inquiry:** If confidence and test scores are imperfect measures, how should we design a better study of AI and learning?
