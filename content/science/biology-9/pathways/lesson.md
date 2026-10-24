---
order: 2
node: AC9S9U01 n2
unit: control
title: Who decides?
summary: "The central nervous system (brain and spinal cord) is the command centre: sensory neurons carry impulses in from receptors, motor neurons carry them out to effectors. Reflexes are automatic: most go through the spinal cord, and reflexes in the head, like blinking, go through the brain stem, without you deciding."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8219
  url: http://127.0.0.1:8219/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Who decides?"
  say: "The central nervous system, the brain and spinal cord, decides the response."
  clip:
    - caption: { text: "Stimulus, receptor, command centre, effector, response.", say: "Stimulus, receptor, command centre, effector, response." }
    - wait: 1630
    - click: "Stepping on a drawing pin"
    - expect: { selector: "body", contains: "Spinal cord" }
    - caption: { text: "A reflex goes through the spinal cord: automatic and fast.", say: "A reflex goes through the spinal cord: automatic and fast." }
    - wait: 2950
    - click: "A ball thrown towards you"
    - expect: { selector: "body", contains: "Brain" }
    - caption: { text: "Catching a ball: the brain decides.", say: "Catching a ball: the brain decides." }
    - caption: { text: "Brain and spinal cord together are the central nervous system.", say: "Brain and spinal cord together are the central nervous system." }
explainDiagram:
  ref: diagrams.mmd#pathway
  alt: "Every response follows one pathway: a stimulus is detected by a receptor, a sensory neuron carries the impulse to the central nervous system (brain or spinal cord), a motor neuron carries it to an effector (a muscle or gland), and the effector makes the response."
  caption: "Every response follows the same pathway"
hook: "Step on a pin and your foot is off the floor before you've said 'ouch'. Your brain wasn't the one who decided."
---
Every response follows the same pathway, and here you'll build it yourself and find out which part of the nervous system makes the call.

## Engage: who moves your foot?

```step
stage: predict
insight: "Students who believe the brain makes every decision will choose it for the pin; the reflex arc goes through the spinal cord."
check:
  type: predict
  q: "You step on a drawing pin and lift your foot instantly. Which part decided to lift it?"
  options: ["The brain", "The spinal cord", "The foot itself", "The leg muscles"]
  actual: "The spinal cord. It's a reflex: the impulse goes from the receptor to the spinal cord and straight back out to the leg muscles. The brain finds out a moment later, which is when you feel the pain."
```

## Explore: build the pathway

```step
stage: run
insight: "Choosing each part, with feedback on the first wrong one, forces students to decide what detects, what decides and what acts."
try: { playground: board, starter: "boards.yml#build", height: 560 }
check: { type: board, text: "Build three pathways correctly, including the drawing pin.", when: "c >= 3" }
hint: ["For the drawing pin, think about whether you feel the pain before or after your foot has already moved, because that tells you who made the call.", "When the signal stops, the message under the boxes tells you which part doesn't fit, so change just that one and send it again."]
```

Pick a stimulus, then choose its receptor, command centre and effector, and send the signal.

## Explain: the nervous system

```step
stage: investigate
insight: "Mapping sensory neuron, CNS and motor neuron onto the pathway connects the boxes to the body."
diagram:
  ref: diagrams.mmd#reflex
  alt: "The reflex arc for a drawing pin. The pin is detected by a pain receptor in the skin. A sensory neuron carries the impulse to the spinal cord, and a motor neuron carries it straight back out to the leg muscle, which lifts the foot. A moment later, an impulse reaches the brain and you feel the pain."
  caption: "The reflex arc: the spinal cord decides, the brain finds out later"
  role: explain
  blank: true
tasks:
  - check:
      type: match
      q: "Match each part of the nervous system to its place in the pathway."
      pairs:
        - ["Sensory neuron", "Carries impulses from a receptor to the CNS"]
        - ["Brain and spinal cord (CNS)", "The command centre"]
        - ["Motor neuron", "Carries impulses from the CNS to an effector"]
        - ["Receptor", "Turns a stimulus into an impulse"]
  - check:
      type: question
      q: "Why is a reflex faster than catching a ball?"
      options: ["The impulse goes through the spinal cord only, with no time spent deciding in the brain", "Pain impulses travel faster than light impulses", "Leg muscles are faster than arm muscles", "Reflexes use hormones"]
      answer: 0
      feedback: [null, "The kind of stimulus isn't the reason: the reflex is faster because its route is shorter and skips the brain.", "The muscles aren't the difference.", "Reflexes use nerves only."]
  - check:
      type: question
      q: "In the chips pathway, the effector is a gland, not a muscle. What does an effector have to be?"
      options: ["A muscle or a gland: something that carries out the response", "Always a muscle", "A receptor", "A nerve"]
      answer: 0
      feedback: [null, "Glands are effectors too: they release saliva, sweat or hormones.", "Receptors notice the change, and effectors are the ones that do something about it.", "Nerves carry the message; effectors act on it."]
    hint: ["Think about what an effector's job is in the pathway, and then ask whether the salivary glands are doing that job when your mouth waters.", "On the board, compare what the leg muscles do for the drawing pin with what the salivary glands do for the chips."]
  - check: { type: reflect, text: "I can describe a reflex arc and explain why it's faster than a response that needs the brain." }
```

### Neurons

### Reflexes

### Effectors

### In your own words

In your book: draw the reflex arc for the drawing pin, labelling the receptor, sensory neuron, spinal cord, motor neuron and effector.

## Elaborate: reflex or not?

```step
stage: modify
tier: typical
insight: "Sorting reflexes from decided responses uses the 'do you have to decide?' test: blinking and pupils narrowing are reflexes through the brain stem, the knee jerk through the spinal cord."
check:
  type: sort
  q: "Reflex (automatic, no decision) or a decided response?"
  options: ["Reflex", "Decided response"]
  items:
    - ["Blinking when something flies at your eye", "Reflex"]
    - ["Answering a question in class", "Decided response"]
    - ["Pupils narrowing in bright light", "Reflex"]
    - ["Choosing a snack", "Decided response"]
    - ["Knee jerking when tapped below the kneecap", "Reflex"]
    - ["Catching a ball", "Decided response", "Practice makes it fast, but the brain still judges where the ball will go."]
hint: ["For each one, ask whether you'd have to think about it or choose, or whether it would happen the same way every time without you deciding.", "Something being quick doesn't make it a reflex, so think about the drawing pin and the ball you built on the board and what made them different."]
```

## Elaborate: damage to the pathway

```step
stage: modify
tier: wider
insight: "Predicting the effect of a break at one point shows the pathway is a chain."
check:
  type: question
  q: "A person's spinal cord is damaged in their upper back. A doctor taps below their knee. What would you expect?"
  options: ["The knee-jerk may still work if the reflex arc below the damage is intact, but the person may not feel the tap", "The knee can't jerk, but they feel the tap", "Nothing changes", "Both work normally"]
  answer: 0
  feedback: [null, "Feeling needs impulses to reach the brain, past the damage.", "Damage to the spinal cord changes something.", "The route to the brain is broken."]
  explain: "Doctors use reflex tests to find where along the spinal cord damage is."
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about who moves my foot with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- The **central nervous system** (brain and spinal cord) is the command centre.
- **Sensory neurons** carry impulses from receptors to the CNS; **motor neurons** carry them to effectors (**muscles or glands**).
- A **reflex** is automatic and fast: the impulse goes through the spinal cord without waiting for the brain.

```code diagrams.mmd#pathway
flowchart TD
  S([Stimulus]) --> R[Receptor]
  R -- sensory neuron --> C{{"CNS: brain or spinal cord"}}
  C -- motor neuron --> E[Effector: muscle or gland]
  E --> F([Response])
  class C new
```

```code diagrams.mmd#reflex
flowchart TD
  S([Drawing pin]) --> R[Pain receptor in the skin]
  R -- sensory neuron --> C{{Spinal cord}}
  C -- motor neuron --> E[Leg muscle]
  E --> F([Foot lifts])
  C -. a moment later .-> B[Brain: you feel pain]
  class C new
  class S keep
```
