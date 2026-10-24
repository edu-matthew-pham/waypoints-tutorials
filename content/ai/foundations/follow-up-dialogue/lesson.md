---
title: How do you work with an AI response?
summary: "When an AI's first reply misses, work out what's wrong with it and ask the follow-up that fixes it."
language: science
shape: 5e
unit: communicating-with-ai
order: 10
voice: { name: af_heart, speed: 1.1 }
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
Your first message to an AI doesn't have to be perfect, and its first reply often isn't either. You can keep talking: tell it what you actually have, ask it to say it more simply, or ask why it said something. The trick is spotting what's wrong with the reply before you decide what to say next.

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
check: { type: board, text: "Try at least two follow-ups, and find the one that fixes a first reply.", when: "t >= 2 and b >= 1" }
```

Pick a situation on the board and read what you wanted, what you asked and what came back. Each first reply has one thing wrong with it. Work out what it is, then choose the follow-up that fixes it:

- Give more context.
- Ask for a hint instead of the answer.
- Ask for a simpler explanation.
- Question an assumption.

The replies are written in advance, not a real AI. The board tells you whether your follow-up fixed the problem, so try more than one: asking again doesn't always make it better.

## Explain: why follow up?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "The AI's plan for your science project needs a microscope, and you haven't got one. What do you say next?"
      options: ["Tell it what you do have and ask for another way", "Ask the same thing again", "Go along with it and hope you can borrow one"]
      answer: 0
      feedback: [null, "It'll make the same guess about your equipment. Tell it what you've actually got.", "The plan still won't work at home. Tell it what you've got so it can plan around that."]
  - check:
      type: question
      q: "On the board, the study tips said 'find your learning style'. Which follow-up showed that claim was shaky?"
      options: ["Question an assumption", "Give more context", "Ask for a simpler explanation"]
      answer: 0
      feedback: [null, "More context kept the shaky claim.", "Simpler words kept the shaky claim."]
  - check:
      type: question
      q: "You asked for a simpler explanation and got one. How do you know it actually helped?"
      options: ["Explain it back in your own words, or try a question on it", "It's shorter, so it must be better", "The AI says it's clearer now"]
      answer: 0
      feedback: [null, "Shorter can still be wrong, or still lose you. Test yourself on it.", "The AI can't tell whether you've understood. Only you can, by trying."]
```

### What's wrong with the reply?

Before you ask anything, say what the problem is. Was the reply too vague, built on a wrong guess about you, too hard to follow, or just the wrong kind of help?

### What do you ask next?

Pick the follow-up that fixes that problem, and be ready to say why it fixes it and the others don't.

### Did it help?

A new reply isn't automatically a better one, so how would you check?

## Elaborate: design a short conversation

```step
stage: make
tier: typical
check: { type: reflect, text: "I wrote a request, a reply that misses, and a follow-up, and my partner agreed it fixes the real problem." }
```

In your book, write a three-part example:

1. A short request for help with something everyday.
2. A reply an AI might give that misses what you wanted in one particular way.
3. Your follow-up, aimed at exactly that problem.

Swap with a partner. Do they think your follow-up fixes the real problem? Change it once if not.

**Going further:** an explanation, a hint or a question to try yourself: which helps someone who just wants the task done, and which helps someone who wants to be able to do it on their own next time?

## Evaluate: transfer

```step
stage: info
check:
  type: question
  q: "You wanted to practise on your own, but the AI just gave you the whole solution. What's a good next step?"
  options: ["Copy it and move on", "Ask for a new question and one hint at a time", "Decide AI answers are always bad for you"]
  answer: 1
  feedback: ["You'd have the answer but not the practice you wanted.", null, "The full answer wasn't wrong, just the wrong kind of help for practising. Ask for the kind you need."]
```

Now without the board: think of a reply where an AI guessed something about you that wasn't true. Write the follow-up you'd send, and say what you'd still check for yourself afterwards.

## Learning with AI: you can redirect assistance

```step
stage: info
check: { type: reflect, text: "I said what was wrong with a reply before I chose what to ask next." }
```

You don't have to take the first kind of help you're given. Ask for a question, an example, a hint or a different way in, whatever suits what you're trying to do. **But telling an AI to sound surer, or to check its own work, doesn't make it right.**

Next you'll look at how to learn with AI while making sure the understanding ends up in your head, not just on the screen.
