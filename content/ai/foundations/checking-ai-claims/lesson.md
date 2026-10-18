---
title: Check what AI tells you
summary: Compare confident claims with independent evidence and distinguish supported, contradicted and insufficiently evidenced statements.
language: science
shape: 5e
unit: learning-effectively-with-ai
order: 12
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Evidence before confidence"
  say: "A convincing answer is not the same as a verified answer."
  clip:
    - caption: { text: "Read the claim without assuming it is accurate." }
    - wait: 1000
    - caption: { text: "Compare it with a separate, inspectable record." }
    - wait: 1000
    - caption: { text: "Decide what the evidence supports and what remains uncertain." }
    - wait: 1000
---
Earlier you saw that AI writes by predicting words that are likely to come next, based on its training examples. Likely is not the same as true, so a fluent answer can still be wrong. A useful AI response may still include mistakes, overgeneralisations or unsupported claims. **Fluent language and confidence are not evidence.** In this lesson, you will investigate what a supplied record actually supports. Real verification often requires checking reliable, independent sources.

## Engage: does it sound right?

```step
stage: predict
check:
  type: predict
  q: "An AI response claims that every seedling given more light grew taller. What evidence would you need?"
  options: ["A confident tone", "Measurements for the groups being compared", "A longer AI explanation"]
  actual: "You need relevant measurements. Even then, a limited dataset may not justify a claim about every possible seedling."
```

## Explore: test claims against records

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Check at least two claims against the supplied measurements.", when: "t >= 2" }
```

The board shows **invented classroom measurements** of seedlings and several AI-style claims about them. The data are separate from the claims, so you can independently compare the words with the numbers. Choose each claim, decide whether the evidence **supports**, **contradicts**, or **cannot establish** it, and explain why. Some claims are carefully limited; others go beyond what was measured. Do not treat the invented observations as real scientific findings.

## Explain: what does the evidence establish?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Claim 1 says every eight-hour seedling grew more than every four-hour seedling. Which measurement shows it is wrong?"
      options: ["A four-hour seedling grew 5 cm, more than two of the eight-hour seedlings", "The eight-hour average was higher", "One eight-hour seedling grew 6 cm"]
      answer: 0
      feedback: [null, "A higher average fits the claim. Look for a seedling that breaks the word 'every'.", "That seedling fits the claim. Look for one that breaks it."]
  - check:
      type: question
      q: "A dataset records plant height but not plant health. Can it confirm that one group is healthier?"
      options: ["Yes, height always equals health", "No, health needs relevant evidence beyond these heights", "Yes, if AI says so"]
      answer: 1
  - check: { type: reflect, text: "I can distinguish claims supported by evidence from claims that need more checking." }
```

### Identify the claim

Which words in the statement require evidence, such as *all*, *always*, or *average*?

### Examine evidence

What observations actually support or challenge the claim?

### Decide the limit

What might remain unknown even if the recorded observations agree with a narrower claim?

## Elaborate: investigate a new claim

```step
stage: make
tier: typical
check: { type: reflect, text: "I completed and explained an independent application of this lesson." }
```

Create a short table of fictional observations (for example, time spent practising and quiz results). Write one claim that the table supports and one that it does **not** justify. Swap with a partner, who must explain what the evidence can and cannot establish. For claims about the real world, use appropriate trustworthy sources rather than invented data.

## Evaluate: decide independently

```step
stage: info
check:
  type: reasoning
  q: "You are making a poster for class. An AI gives you a fact for it, with a date and a name. It sounds very sure, and there is no source. The poster is due tomorrow. What do you do, and why?"
  placeholder: "For example: I would check it by … because …"
  models:
    - title: "A strong answer"
      text: "I would look for the fact in one source I trust, such as our textbook or a library website. If I can't find it there in time, I would leave it out, or write that I couldn't check it. Sounding sure is not evidence, and asking the same AI again is not checking."
    - title: "A different view that also works"
      text: "It's only one fact on a poster, so I would ask my teacher or swap it for a fact from our class notes, which I know I can trust. That is quicker than checking a claim from nowhere, and I still don't use anything I can't check."
  criteria: ["I said what I would check it against.", "I said why sounding sure is not enough.", "I said what I would do if I couldn't check it in time."]
  explain: "Confidence is not evidence. For a claim that matters, check it against a source you trust, or don't rely on it."
```

Without using the board, explain why *supported by these observations* is different from *always true*. Identify one way to verify a claim independently.

## Learning with AI: independent checking matters

```step
stage: info
check: { type: reflect, text: "I can explain why asking the same AI to confirm itself isn't checking." }
```

An AI can help you identify questions to investigate, but **asking the same model to confirm itself is not independent verification**. For claims that matter, look at the original evidence or a source you trust. Even apparently credible citations may be missing, irrelevant or misrepresented.

## Optional: try it with an AI tool

```step
stage: info
tier: typical
prompt:
  title: "Help me check a claim"
  text: |
    Help me check this claim: [the claim]. I found it here: [where it came from].
    Don't tell me whether it is true. Ask me questions, one at a time, that help me work out what evidence would show it, and where I could check it myself.
check: { type: reflect, text: "I compared the AI's reply with the board, and named an independent check for my claim." }
```

Pick a claim you have read or heard, from an AI, a website or a friend, and use the prompt below. Compare the reply with the board: did it help you find a check of your own, or just tell you what to believe? Asking the same AI whether it was right is not checking.

**No AI tool?** Do the same with a partner: one asks the questions, the other answers.
