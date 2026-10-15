---
title: Does AI help us learn?
summary: Explore contrasting examples, question what counts as learning, and begin an inquiry that may not have one final answer.
language: science
unit: what-is-learning
order: 1
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "One tool, different purposes"
  say: "Before judging AI, ask what the learner wants to achieve and what the result shows."
  clip:
    - caption: { text: "A finished product can be valuable without proving that a new skill was learned." }
    - wait: 1100
    - caption: { text: "Learning goals, available tools and evidence all affect our judgement." }
    - wait: 1100
    - caption: { text: "The question stays open. Our reasons can become more precise." }
    - wait: 1100
---
# Does AI help us learn?

AI can explain a difficult idea, generate a game, correct a draft or finish a task in seconds. Does that mean it helps someone *learn*? **This course investigates the question rather than giving you a predetermined answer.**

Throughout the course, you can maintain an **optional inquiry record** in a notebook, document or teacher-chosen workspace. This helps you revisit your claims, evidence and open questions. If you do not keep a separate record, use the lesson reflections and discussion prompts. You do not have to change your mind to show deeper thinking.

## Engage: make a claim worth examining

```step
stage: predict
check:
  type: predict
  q: "A student uses AI to produce a playable game in ten minutes. What can we reasonably conclude?"
  options: ["They learned how to program a game", "They produced a playable game; what they learned is not yet clear", "They definitely learned nothing"]
  actual: "We know they obtained a playable game. That alone does not establish what they learned, but it does not prove they learned nothing either."
```

**Provocation:** Two students submit equally impressive games. One writes code in a beginner-friendly game engine; the other directs an AI assistant to generate the game. Have they learned the same things? Does it matter if their goal was to learn programming, investigate a game mechanic or simply build something fun?

**Optional inquiry record — Entry 1:** Answer *Does AI help us learn?* in two or three sentences. Add **one reason**, **one uncertainty** and your confidence (low, medium or high). Keep your first answer: you'll revisit it.

## Explore: the goal changes the judgement

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Compare at least two situations and inspect the prepared feedback.", when: "t >= 2" }
```

The activity presents prepared scenarios, **not live AI responses**. Compare at least two. For each, ask: What is the person's goal? What does successful work demonstrate? What would we still need to know about what they learned?

As you discuss the feedback, you may challenge it. A scenario's suggested choice is a starting point for reasoning, not an answer you must accept.

## Explain: useful distinctions, not a verdict

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which observation most directly shows that a student completed a task?"
      options: ["They submitted a working game", "They can explain an unfamiliar game mechanic", "They can independently design a different game"]
      answer: 0
  - check:
      type: question
      q: "Why might a successful AI-assisted product be insufficient evidence of independent capability?"
      options: ["Using a tool always prevents learning", "We cannot tell which decisions or skills the student personally exercised", "Finished products have no value"]
      answer: 1
  - check: { type: reflect, text: "I can distinguish a successful product, developing understanding and independent capability without assuming only one matters." }
```

### Performance

**Performance** is what someone achieves on a particular task. Assistance and tools can improve performance. That improvement may be valuable, but it does not tell us everything about learning.

### Learning

**Learning** can involve changes in knowledge, understanding, skills, judgement or participation. People disagree about which changes matter most and how to assess them. A test, explanation, observation or product may offer evidence, but none automatically captures every dimension.

### Purpose

Imagine the game creator wanted to test whether a new level was enjoyable rather than learn JavaScript. The same AI assistance might be judged differently. Also ask whether a conventional game engine could already serve the goal. **The relevant question is not simply AI versus no help.**

## Elaborate: a dialogue that develops the question

```step
stage: make
tier: typical
check: { type: reflect, text: "I considered another perspective and recorded a stronger reason, challenge or question." }
```

Discuss the two claims below. Do not vote for the winner immediately. First offer the strongest reasonable interpretation of each, then ask what evidence would help adjudicate the disagreement.

- **Claim A:** "AI helps people learn because it lets them accomplish tasks they could not complete alone."
- **Claim B:** "Accomplishing a task with AI does not tell us whether someone learned how to do it."

Try these questions: Can both claims be true? Are they using *learn* in the same way? Is productivity itself a worthwhile educational outcome? How would your answer change if the task were learning fractions rather than prototyping a game?

**Optional inquiry record — Entry 2:** In your reflections, discussion or inquiry record, add a counterargument to your first position. You may retain your position, qualify it or revise it; explain why. Identify one unanswered question to carry into the next lesson.

## Evaluate: what can we conclude so far?

```step
stage: info
check:
  type: question
  q: "Which conclusion is best justified by the examples in this lesson?"
  options: ["AI always improves learning if the final work is good", "AI never supports meaningful learning", "Different goals require different evidence before we can judge what was learned"]
  answer: 2
```

Imagine a student says: "AI helped me finish my science explanation, so I now understand the science." Suggest **one way to investigate that claim** without assuming it is either true or false. Explain what your approach would reveal—and what it might still miss.

## Learning with AI: reflect on the tool, not just the result

```step
stage: info
check: { type: reflect, text: "I have expressed what I currently think, why I think it and what might change my mind." }
```

You do **not** need an AI account for this lesson. If you use a school-approved assistant outside the prepared activity, do not treat a fluent explanation or polished product as proof of your own learning. Equally, do not assume that using AI means no learning occurred.

**Next inquiry:** If a student performs better with help, what would count as evidence that they actually learned?
