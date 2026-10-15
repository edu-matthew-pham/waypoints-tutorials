---
title: Can a neural network learn?
summary: Train a tiny neural network, see its connections change, and test whether it has learned from examples.
language: science
unit: how-ai-learns
order: 4
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Training changes a network"
  say: "A network learns from labelled examples."
  clip:
    - caption: { text: "Examples supply clues and the correct training labels." }
    - wait: 1200
    - caption: { text: "Training changes connections inside the network." }
    - wait: 1200
    - caption: { text: "Testing uses the learned connections; it does not train them." }
    - wait: 1200
---
Last lesson, **you** adjusted how strongly colour and shape affected a decision. Could a computer learn how to adjust its connections using examples instead?

In this lesson you will train a **real, tiny neural network** with two inputs, two hidden neurons and one output. It is intentionally limited to four fruit descriptions, not photographs. You do **not** need to understand the calculations.

## Engage: what changes during training?

```step
stage: predict
check:
  type: predict
  q: "If you train a neural network with labelled examples, what is changing?"
  options: ["The fruit itself", "Connections inside the model that affect its future predictions", "The computer's fixed program instructions"]
  actual: "Training changes the network's numerical connections, not the fruit or the underlying calculation rules."
```

## Explore: choose, train, test

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 670 }
check: { type: board, text: "Train the network, then record at least one prediction.", when: "r >= 1 and t >= 1" }
```

1. **Before training**, choose a fruit's colour and shape, and note the network's prediction.
2. Press **Train one example** a few times. Watch the connections. Then use **Train 300 examples** to allow enough repeated practice to see clearer changes.
3. **Test the same fruit again.** Did its output change? Try all four combinations: green/round, green/long, yellow/round and yellow/long.

The network really adjusts its internal numbers during training. The connecting lines give you a glimpse of those changes, but you do not need to decode every line.

**Important:** During **testing**, the network uses its existing learned connections. Testing a fruit does **not** change the weights. Training does.

## Explain: what has the network learned?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which action changes the neural network's learned connections?"
      options: ["Selecting a new fruit to test", "Training with labelled examples", "Reading its output"]
      answer: 1
  - check:
      type: question
      q: "A network gets its training examples right. Does that guarantee it will classify unfamiliar fruit correctly?"
      options: ["Yes, training accuracy guarantees every future answer", "No, the examples may not cover unfamiliar cases", "Yes, because neural networks do not make mistakes"]
      answer: 1
  - check: { type: reflect, text: "I can explain the difference between training and testing without using the mathematics." }
```

### What changes?

Identify which part of the model changes when it learns from examples.

### What stays the same?

Explain why choosing a fruit to **test** does not itself teach the network.

### Explain in your own words

Explain why a network can improve on its training examples and still struggle with something new.

A programmer designs the network's structure and how training works. **Training adjusts its internal connections**. Its prediction can change even though nobody rewrites a rule such as “yellow means banana.”

## Elaborate: can you teach it the wrong lesson?

```step
stage: modify
tier: typical
try: { playground: board, starter: "boards.yml#explore", height: 670 }
check: { type: reflect, text: "I changed the training examples, reset and retrained the network, then tested its predictions." }
```

First choose **Only yellow bananas**, press **Reset network**, and train. Test a green, round fruit. What has the network not had the chance to learn?

Then select **Use all examples**, **Reset network**, train again and compare. You can also investigate the incorrect-label checkbox. Keep the **same test fruit** when comparing runs.

**Wider investigation:** Choose **Show internal numbers**. These values are connection weights (multipliers), **not percentages** or separate rules. Some may be negative, and none has to correspond to a human-readable feature. Can the same output change when several connections change together?

**Optional authentic comparison:** If permitted by your school, train an image model in [Teachable Machine](https://teachablemachine.withgoogle.com/), then test photos not used for training. The Waypoints network uses two hand-chosen clues; an image model processes much richer information. Neither guarantees correct predictions.

## Evaluate: explain the difference

```step
stage: info
check:
  type: question
  q: "What is the strongest evidence that this network has learned from training?"
  options: ["Its internal connections and later predictions can change", "It has a diagram with circles and lines", "It always gives the correct answer"]
  answer: 0
```

Without using the board, complete these statements:

- **Training** changes …
- **Testing** uses …
- One reason a trained network could still be wrong is …

## Learning with AI: outputs do not reveal everything

```step
stage: info
check: { type: reflect, text: "I can explain how to check AI outputs without assuming they are always correct." }
```

Modern AI systems can be useful even when we cannot easily explain their learned internal patterns. We might inspect individual numbers without understanding what they collectively represent.

Imagine an AI assistant makes a confident claim in a subject you are learning. What would you **verify independently**? What work should you practise yourself before asking AI for help?

**Takeaway:** A neural network is an algorithmic system whose behaviour changes as training adjusts its parameters. Its predictions come from those learned parameters rather than from a complete list of programmer-written classification rules.
