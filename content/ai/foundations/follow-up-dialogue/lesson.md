---
title: How do you work with an AI response?
summary: Practise asking follow-up questions, correcting assumptions and redirecting unhelpful AI assistance.
language: science
unit: communicating-with-ai
order: 2
voice: { name: bf_emma, speed: 1.05 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "A conversation can change direction"
  say: "Your first request does not have to be perfect."
  clip:
    - caption: { text: "Read the initial answer critically." }
    - wait: 900
    - caption: { text: "Follow up with a question, correction or different request." }
    - wait: 900
    - caption: { text: "Check whether the response now serves your goal." }
    - wait: 900
---
Last lesson, you practised communicating your goal in an initial request. But **AI interactions can be conversations**: you can clarify, question and redirect a response.

## Engage: what would you say next?

```step
stage: predict
check:
  type: predict
  q: "An AI assistant explains a topic using words you do not understand. What could you do?"
  options: ["Accept it because it sounds detailed", "Ask for a simpler explanation with an example", "Assume the whole topic is impossible to learn"]
  actual: "Ask for a simpler explanation and test whether the example helps you understand."
```

## Explore: redirect the conversation

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: board, text: "Compare at least two different follow-up strategies.", when: "t >= 2" }
```

Choose one of the situations in the board. Read the **initial request and prepared response**. Choose a follow-up:

- Provide important context that was missing.
- Ask for a hint instead of the answer.
- Ask for a simpler explanation.
- Question an assumption the assistant seems to have made.

Each option shows a **scripted example reply**, not a real AI response. Try at least two strategies and decide which is most helpful for the specific purpose. The first response is not always useless, and a follow-up is not automatically an improvement.

## Explain: why follow up?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is a useful follow-up when AI assumes you have equipment you do not have?"
      options: ["Tell it your actual resources and ask for an alternative", "Repeat the same request with no changes", "Pretend you have the equipment"]
      answer: 0
  - check:
      type: question
      q: "Can asking AI to check its own answer replace independent verification?"
      options: ["Yes, AI can always validate itself", "No, important claims still need external evidence", "Yes, when the answer sounds confident"]
      answer: 1
  - check: { type: reflect, text: "I can select a follow-up that addresses a specific problem with an AI response." }
```

### Diagnose the response

Was the first answer too vague, based on a mistaken assumption, too complex, or simply a different kind of help from what you wanted?

### Select a follow-up

What could you ask next? Explain **why** that follow-up addresses the problem.

### Check the result

How would you decide whether the revised response is actually more useful or reliable?

## Elaborate: design a short conversation

```step
stage: make
tier: typical
check: { type: reflect, text: "I drafted an initial prompt, a realistic unsatisfactory response and a purposeful follow-up." }
```

In your book, write a three-part example:

1. A short request for assistance with an everyday task.
2. A possible AI response that misses your goal in a specific way.
3. Your **follow-up**, designed to address that problem.

Ask a partner whether your follow-up addresses the actual problem. Revise it once.

**Optional authentic comparison:** With a school-approved assistant, try your request and a follow-up. Record what it actually does, rather than assuming it will follow your instruction. Do not share sensitive data.

**Wider investigation:** Compare asking for an explanation, a hint and a challenge question. Which helps someone who wants to finish a task, and which helps someone who wants to learn to do it independently?

## Evaluate: transfer

```step
stage: info
check:
  type: question
  q: "AI gives a complete solution when you wanted to practise independently. What is a useful next step?"
  options: ["Copy it and move on", "Ask for a new question and one hint at a time", "Assume every complete answer is harmful"]
  answer: 1
```

Without the board, write a follow-up to an AI response that made an unsupported assumption. Explain what you would check independently.

## Learning with AI: you can redirect assistance

```step
stage: info
check: { type: reflect, text: "I can explain how a follow-up can preserve my role as the learner." }
```

You do not have to accept the first form of assistance. Ask for a question, an example, a hint or a different approach when it suits your goal. **But prompting an AI to be more confident, or to check itself, does not prove it is correct.**

Next, we will explore how to learn effectively with AI while keeping responsibility for our own understanding.
