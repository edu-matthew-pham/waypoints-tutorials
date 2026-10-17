---
title: How do you communicate with AI?
summary: Compare vague and purposeful prompts, then decide what information helps an AI assistant respond usefully.
language: science
shape: 5e
unit: communicating-with-ai
order: 1
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Describe what you need"
  say: "Clear context can help an AI assistant respond more usefully."
  clip:
    - caption: { text: "State what you want to achieve." }
    - wait: 900
    - caption: { text: "Include relevant context and request a useful type of help." }
    - wait: 900
    - caption: { text: "A clear prompt helps, but does not guarantee a correct response." }
    - wait: 900
---
Last unit, you learned that AI models make predictions from learned patterns. Now we will learn to **communicate our purpose** when asking AI for assistance.

A *prompt* is the instruction or question we give an AI assistant. There is no magic formula for a perfect prompt: it needs to communicate what matters for the task.

## Engage: what is missing?

```step
stage: predict
check:
  type: predict
  q: "A learner writes, 'Help me with fractions.' What information might an assistant need to give useful help?"
  options: ["What the learner is trying to understand", "The learner's password", "Nothing: the request can only have one meaning"]
  actual: "The learner's goal and starting point could help; private information is not needed."
```

## Explore: make a request more useful

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 620 }
check: { type: board, text: "Compare at least two prepared responses after changing the request.", when: "t >= 2 and c >= 1" }
```

The board is a **scripted response laboratory**, not a real AI assistant. Its example replies illustrate how a request *might* influence a response; they do not predict any particular chatbot's behaviour.

Choose a situation in **maths, science or school planning**. Begin with the vague request and inspect the prepared answer. Then try changing one feature at a time:

- **Purpose and context:** What are you trying to do? What do you already know or have available?
- **Response form:** Would steps, a question or a different presentation help?
- **Type of assistance:** Do you need an explanation, or would a hint be more useful?

Every setting changes the prepared reply, even without context. Compare the replies. Which change made the response better *for the learner's goal*? A longer prompt is not automatically a better one.

## Explain: why context matters

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "On the board, choose Investigating plant growth and tick the context box. Which detail changed the plan most?"
      options: ["Having only two seedlings and seven days", "Asking for short steps", "Saying 'please'"]
      answer: 0
      feedback: [null, "Steps change how the plan looks, not what is in it.", "Being polite is fine, but it doesn't tell the assistant anything about your task."]
  - check:
      type: question
      q: "Your prompt is clear and has all the context. The reply says 1/2 + 1/4 = 2/6. What went wrong?"
      options: ["Nothing in the prompt: AI can still be wrong, so check the answer", "The prompt needed to be longer", "The prompt should have asked for numbered steps"]
      answer: 0
      feedback: [null, "A longer prompt can't stop every mistake. 2/6 is wrong: the answer is 3/4.", "Steps change the layout, not whether the maths is right."]
  - check: { type: reflect, text: "I can explain why a goal, relevant context and type of help can improve a request." }
```

### Relevant context

Which missing information might change an assistant's response?

### What makes a prompt useful?

Distinguish useful context from unnecessary detail. You should not need to share sensitive information to get help.

### Explain the limits

Why can a good prompt still produce an inaccurate or unsuitable response?

## Elaborate: write your own prompt

```step
stage: make
tier: typical
check: { type: reflect, text: "I wrote a prompt with a clear goal, appropriate context and a useful form of assistance." }
```

Choose a new everyday learning goal. Write **two versions** in your book: an initial vague request and a more purposeful one. Annotate what you changed and **why**. The goal is clarity, not maximum length.

Swap your two prompts with a partner. Could they tell what you wanted from each one?

**Wider investigation:** Sometimes a short request is enough. Identify a task where extra details make little difference, and a task where missing context would change the answer considerably.

## Evaluate: transfer

```step
stage: info
check:
  type: question
  q: "What matters most when improving a prompt?"
  options: ["Making it as long as possible", "Communicating the task and what help would be useful", "Using a special phrase that forces correct answers"]
  answer: 1
```

Independently revise this request: **“Help me study.”** Include the subject or skill, the learner's starting point and an appropriate kind of assistance. Explain your choices.

## Learning with AI: decide what help you want

```step
stage: info
check: { type: reflect, text: "Before asking for help, I can decide whether I want a hint or an answer, and say why." }
```

When you are practising something new, the most immediately complete answer might not be the most helpful response. Before prompting, decide what you want to **learn**, not just what you want AI to produce.

**Remember:** An effective prompt communicates purpose and context. It cannot guarantee accuracy, and it need not be long or reveal private information.
