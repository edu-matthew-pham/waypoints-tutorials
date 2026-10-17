---
title: How do we know when we need help?
summary: Answer a seasons question, sort feedback by what it lets you do next, and use feedback to choose your next step.
language: science
shape: 5e
unit: learning-and-society
order: 1
voice: { name: af_heart, speed: 1.1 }
---
Unit 3 asked how help should work. But after you get help, you still have to decide **what to do with it**. Feedback can be useful without making you learn anything by itself.

## Engage: "that makes sense now"

```step
stage: predict
check:
  type: predict
  q: "A student reads an AI correction and says, 'That makes sense now.' What should they do next?"
  options: ["Move on: it makes sense", "Explain the idea again without looking at the correction", "Ask for a longer correction"]
  actual: "Trying to explain or use the idea without looking gives new evidence. Feeling that it makes sense doesn't show you can do it."
```

When an explanation sounds clear, how can you tell if you understand it well enough to move on?

## Explore: try it, then sort the feedback

```step
stage: run
tasks:
  - check:
      type: question
      q: "Why is it winter in Australia when it is summer in Europe?"
      options: ["Earth is tilted, so each half leans towards the Sun at different times of the year", "Australia is further from the Sun at that time of year", "Europe is nearer the equator, so it gets more sun"]
      answer: 0
      feedback: [null, "Australia and Europe are about the same distance from the Sun at any time. If distance caused seasons, they would have summer together.", "Australia is nearer the equator than Europe is."]
  - check:
      type: sort
      q: "A student wrote: 'Summer happens because Earth is closer to the Sun.' Does this feedback give them a next step?"
      options: ["Gives a next step", "Only says right or wrong"]
      items:
        - ["Incorrect.", "Only says right or wrong"]
        - ["7/10", "Only says right or wrong"]
        - ["Good try!", "Only says right or wrong"]
        - ["If distance caused summer, why would Australia and Europe have opposite seasons?", "Gives a next step", "It gives the student a question to think about."]
        - ["Here is a diagram of Earth's tilt. Use it to explain the seasons in your own words.", "Gives a next step"]
```

Lots of people think summer happens because Earth is closer to the Sun. It's a common idea, and it's wrong.

### Your answer

Answer before you read any feedback. Say how sure you are.

### Sort the feedback

A student wrote the common wrong idea. Which feedback tells them what to do next?

## Explain: use feedback, then try again

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Nina gets the feedback 'Try thinking about Earth's tilt.' What makes this feedback useful to her?"
      options: ["She writes a new explanation using the tilt, without copying", "She reads it and moves on", "She asks for the full answer instead"]
      answer: 0
      feedback: [null, "Reading it isn't enough. Using it is what helps.", "That skips the thinking the hint was leaving for her."]
  - check:
      type: question
      q: "An AI tells Nina her new explanation is wrong, but she thinks it's right. What should she do?"
      options: ["Check with a diagram, a textbook or her teacher before changing it", "Change it: the AI knows best", "Ignore it: feedback isn't useful"]
      answer: 0
      feedback: [null, "AI feedback can be wrong, even when it sounds sure.", "Feedback is worth checking, not ignoring."]
  - check:
      type: question
      q: "Nina's new explanation is right. What can she say now?"
      options: ["She can explain it today; a check in a week would show if it sticks", "She'll never get seasons wrong again", "She didn't need the feedback after all"]
      answer: 0
      feedback: [null, "One good try is a good sign, not a guarantee.", "The feedback helped her get there."]
```

Feedback is most useful in a loop:

**try → get feedback → do something with it → try again**

- **A try is evidence.** What you write shows what you understand now. One try doesn't show everything.
- **Choose a next step.** Practise more, look at a diagram, check a source, try a harder question, or ask a person. Picking a good next step for yourself is called **self-regulation**.
- **Check the feedback.** Feedback from AI is evidence too, and it can be wrong. Check it before you act on it.

Feedback that helps you improve, not just tells you a mark, is called **formative** feedback.

### Using a hint

Nina has a hint. What makes it useful?

### When AI disagrees

Nina thinks the AI is wrong.

### After the new try

Nina's new try is right.

## Elaborate: choose the next step

```step
stage: make
tier: typical
check: { type: reflect, text: "I chose a next step from my feedback and said what would make me change my plan." }
```

A learner gets three messages: **"Incorrect"**, **"Try thinking about Earth's tilt"**, and **"Here is a diagram with an explanation."** Which is most helpful right now? Would you change your answer if the learner already knows about the tilt, but mixes it up with distance?

Now think about feedback you got recently on something you are learning. Write:

- what you think you understand,
- what evidence you have,
- what you will try next,
- what result would make you change your plan.

## Optional: get feedback from an AI tool

```step
stage: modify
tier: typical
prompt:
  title: "Feedback with a next step"
  text: |
    Here is a question I'm learning, and my answer: [the question] [my answer].
    Don't give me the right answer. Give me feedback that tells me one next step I could try, then wait for my new try.
check: { type: reflect, text: "I used the feedback for a next step, and checked whether the feedback itself was right." }
```

Use the prompt below on a question you are learning. Compare with the feedback you sorted: did the reply give you a next step, or only say right or wrong? Use it, try again, and check it: AI feedback can be wrong.

**No AI tool?** Swap answers with a partner and write next-step feedback for each other.

## Evaluate: when is feedback doing its job?

```step
stage: info
check:
  type: question
  q: "When is feedback most clearly helping someone learn?"
  options: ["When the learner uses it for a next step, and can check whether that step worked", "When it gives the right answer to copy", "When it comes with a high mark"]
  answer: 0
  feedback: [null, "Copying the answer doesn't show what the learner can do.", "A mark alone doesn't say what to do next."]
```

**Next lesson:** feedback helps you improve. What changes when work is used to judge what you've achieved?
