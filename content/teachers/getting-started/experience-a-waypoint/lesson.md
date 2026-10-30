---
title: Experience a waypoint
summary: "Try a real Geography check and distinguish feedback, support and optional width."
order: 2
unit: start
language: science
shape: primer
hook: "A wrong answer can tell you which idea needs attention, if you look at the reasoning."
---
Our shared example is [Renewable, non-renewable or continuous?](https://tutorials.learningwaypoints.com/geography/water-7/resource-types/), the first waypoint in **Water as a resource**, AC9HG7K01. Keep this guide open and open the example in another tab.

## Think first: what did the answer reveal?

```step
stage: predict
insight: "A wrong classification can point to an underlying rule a student is using."
check:
  type: predict
  q: "In this invented classroom situation, a student groups sunlight and timber as renewable because both are there tomorrow. What would you investigate first?"
  options: ["The student's rule for grouping resources", "How quickly the student finished", "Whether the student can spell renewable"]
  actual: "Investigate the grouping rule. The answer suggests the student may be treating renewable and continuous as the same idea; ask for their reasoning before deciding."
```

## Try: the real lesson

```step
stage: info
insight: "The live example connects a prediction to reasoning, feedback and a smaller step."
check:
  type: reflect
  text: "I tried the prediction, one wrong answer and its feedback, then Build up to it and the original Nib task in the real lesson."
```

In the [live resource-types lesson](https://tutorials.learningwaypoints.com/geography/water-7/resource-types/):

1. Choose a prediction and press **Lock in my prediction**. Read the explanation under **Try** and compare it with your choice.
2. In **Worked example: two ways of coming back**, choose **Fish are a continuous resource** for the fishing question, then **Check answer**. Read the feedback before correcting it.
3. Open **2 · Find Nib's mistake**. Nib treats renewable and continuous as the same because both “come back”. This is the planted misconception `continuous-is-renewable`.
4. Open **Build up to it**. Answer which people can use up, then return to Nib's original explanation and identify the faulty line. The small question supports the original task; it does not replace it.
5. Set **Width** to **Minimum**, then **Typical** to try **Typical: more resources**. These extra cases use the same classification idea. **Wider** adds discussion, not a faster track.

Your tick here is a self-check. This page does not monitor what you did in another tab.

## The idea: what feedback adds

```step
stage: investigate
insight: "Answer-specific feedback names a possible misconception rather than merely giving a score."
check:
  type: question
  q: "Why is the fishing question's feedback useful after choosing continuous?"
  options:
    - "It contrasts a resource people can deplete with one their use cannot exhaust."
    - "A wrong score proves exactly why the student chose that answer."
    - "It sends the student to a different permanent track."
    - "It means the teacher no longer needs to ask about reasoning."
  answer: 0
  feedback:
    - null
    - "A score records correctness. You still need evidence about the student's reasoning."
    - "Support builds back to the same task; it does not assign a track."
    - "The feedback offers a possible explanation. A teacher can ask the student to explain or apply it."
  explain: "The feedback addresses the distinction the wrong choice missed. It is a useful clue to discuss, not a diagnosis of the student."
hint:
  - "Compare what the feedback explains with what a bare wrong label tells you."
```

## Check: support, minimum or width?

```step
stage: practise
insight: "Support returns to the core task; width adds contexts at the same conceptual level."
check:
  type: match
  q: "Match what you saw to its purpose."
  pairs:
    - ["Build up to it", "A smaller question, then back to the original task"]
    - ["The untiered lesson path", "Minimum understanding to secure"]
    - ["Typical: more resources", "Optional contexts for the same idea"]
  explain: "Pace remains the teacher's decision. Optional width is neither an ability group nor a race."
```

## Apply: ask one follow-up

```step
stage: make
insight: "A teacher checks whether the learner can now use the distinction."
check:
  type: reflect
  text: "I wrote or discussed one follow-up question that would show whether a student now distinguishes renewable from continuous."
```

For example, ask for a fresh example and its reason. You or a colleague judges the explanation; the site does not mark extended reasoning.

```teacher
summary: "Teachers try the actual resource-types interactions and interpret what feedback and support can tell them."
time: 7
timing: "Think first 1 min · Live lesson 3 min · Feedback and width 2 min · Apply 1 min"
goals:
  - "I can distinguish feedback, support and optional width."
before: "Open the published Geography lesson in a second tab. The same lesson is used in the six-slide talk. It is a preview, not classroom validated. No clip is needed."
running:
  - "Choose a realistic wrong fishing answer, read its specific feedback, then correct it."
  - "Open Nib's task and Build up to it; return to the original line check."
  - "Switch Minimum to Typical and point to the extra resource sort."
struggle: "Avoid treating a selected option as a diagnosis. Ask what further evidence would confirm the student's reasoning."
stuck:
  - { see: "The smaller question seems to finish the main task.", ask: "What explanation still needs checking?", fix: "Return to Nib's original line check." }
  - { see: "Wider is treated as a fast group.", ask: "Has the concept changed?", fix: "Compare contexts on the same idea; pace remains the teacher's choice." }
support: "Use just the fishing question, its feedback and Nib's smaller check before discussing width."
stretch: "Compare the follow-up question with a bare correctness score: what extra evidence would it give?"
exit: { q: "What should happen after a smaller step?", a: "Return to the original conceptual task." }
class:
  activities:
    - { at: end, kind: discussion, title: What would you ask next?, minutes: 1, do: "Choose a follow-up question after a student corrects their resource classification.", notes: "Listen for reasoning, not just a new correct label." }
```
