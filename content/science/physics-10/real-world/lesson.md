---
order: 8
node: AC9S10U05 n8
woven: [AC9S9H02]
unit: newton
title: Newton's laws in the real world
summary: "Newton's laws explain why safety features and techniques work. Seat belts and head restraints deal with inertia (first law); airbags and crumple zones lengthen the stopping time to cut the force (F = ma); rockets push gases back and are pushed forward (third law); and a dog ball-thrower extends the thrower's arm so the force acts for longer and over a greater distance, so the ball leaves faster."
language: science
voice: { name: af_heart, speed: 1.1 }
hook: "A crash test dummy hits an airbag and the force on it is far smaller than hitting the dashboard. Same crash, same dummy. What does a bag of air change?"
---
You've got all three of Newton's laws, and now you'll use them to explain things people have designed. There's no simulation this time.

## Engage: the airbag

```step
stage: predict
insight: "Students say an airbag 'cushions' the blow. The law-based explanation is that it spreads the stopping over a longer time, which cuts the acceleration and so the force."
check:
  type: predict
  q: "A crash dummy goes from 15 m/s to a stop either against a hard dashboard in 0.02 s or against an airbag in 0.2 s. Compared with the dashboard, the force from the airbag is:"
  options: ["About ten times smaller, because the acceleration is ten times smaller", "The same, because the speed change is the same", "About ten times bigger", "Zero: the airbag absorbs it all"]
  actual: "About ten times smaller. The change in speed is the same, but taking ten times as long makes the acceleration ten times smaller, and F = ma."
```

## Explain: design with the laws

```step
stage: investigate
insight: "Applying more than one law to a design feature, explaining a First Nations technology and evaluating a safety feature with numbers are the node's three success criteria."
tasks:
  - check:
      type: match
      q: "Match each feature to the law that explains it."
      pairs:
        - ["Seat belt keeps you in your seat when the car stops", "First law: your body keeps moving unless a force acts"]
        - ["Airbag spreads the stop over more time", "Second law: a smaller acceleration means a smaller force"]
        - ["Rocket gases go down, rocket goes up", "Third law: action and reaction forces"]
        - ["A heavier ball is harder to accelerate", "Second law: more mass, less acceleration"]
  - check:
      type: question
      q: "A dog ball-thrower is a long, light arm with a cup that holds the ball. Why does it make the ball go faster than throwing by hand?"
      options: ["The force acts on the ball for longer", "It makes the ball heavier", "It removes air resistance"]
      answer: 0
      feedback: [null, "A heavier ball would accelerate less.", "Air resistance is still there."]
      explain: "It makes the arm effectively longer, so the force acts over a longer time and distance. A longer push means more time to accelerate the ball, so it leaves at a higher speed. The same idea explains why a longer bow draw, a golf club swing or a spearthrower launches faster."
    hint: ["Think about what the thrower's arm does differently with the ball-thrower, from the start of the throw to the moment the ball leaves.", "It's the same ball either way, so look for what changes about the push."]
  - check:
      type: number
      q: "A 1000 kg car going 20 m/s is stopped by crumple zones in 0.5 s. What is its acceleration (m/s², size only)?"
      answer: 40
      explain: "a = 20 ÷ 0.5 = 40 m/s²."
  - check:
      type: number
      q: "What average force is needed to stop it (N, size only)?"
      answer: 40000
      explain: "F = ma = 1000 × 40 = 40 000 N."
  - check:
      type: question
      q: "A better crumple zone stops the same car in 1.0 s instead of 0.5 s. What happens to the force on the people inside?"
      options: ["It halves", "It doubles", "It stays the same"]
      answer: 0
      feedback: [null, "A longer stop reduces the force.", "The time changes, so the acceleration and force do."]
      explain: "Twice the stopping time gives half the acceleration and so half the force: 20 000 N. Injuries are likely to be less serious."
    hint: ["What stays the same between the two crashes, and what changes?", "Work through it the same way as the 0.5 s crash, the acceleration first and then the force."]
  - check: { type: reflect, text: "I can use Newton's laws to explain a design or technique, and evaluate a safety feature with a calculation." }
```

### Which law

### The ball-thrower

### Crumple zone

### Crumple zone force

### A better crumple zone

### In your own words

In your book: choose a real design (helmet, seat belt, rocket, kicking technique or a ball-thrower). Say which of Newton's laws it uses and explain in two sentences how.

## Elaborate: sport

```step
stage: modify
tier: typical
insight: "Sport techniques apply the laws to the human body and show how the follow-through lengthens the time of the force."
check:
  type: question
  q: "A footballer follows through when kicking a ball. In terms of force and time, why does the ball go further?"
  options: ["The foot stays in contact and pushes for longer, so the ball gains more speed", "The follow-through keeps pushing the ball after it has left the foot", "A follow-through reduces air resistance"]
  answer: 0
  feedback: [null, "Once the ball leaves the foot, nothing pushes it forward: the follow-through matters only while they are touching.", "Air resistance is the same."]
  explain: "A longer contact time means the force acts for longer, which gives the ball a higher launch speed."
```

## Elaborate: braking by itself

```step
stage: modify
tier: wider
insight: "A driverless braking system needs the laws and numbers, not just sensors."
check:
  type: question
  q: "An automatic emergency braking system detects an obstacle 25 m ahead of a 1500 kg car at 20 m/s. What does it need to work out?"
  options: ["Whether it can stop in less than 25 m", "What the obstacle is made of", "Whether the car is under the speed limit"]
  answer: 0
  feedback: [null, "What the obstacle is doesn't change how far the car needs to stop.", "Being under the limit doesn't mean it can stop in 25 m: that depends on its speed, mass and braking force."]
  explain: "It must compare the stopping distance, from the car's speed, mass and best possible braking force, with the distance to the obstacle, quickly enough to act."
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my prediction about the airbag with the calculation." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **First law** (inertia): seat belts and head restraints stop passengers carrying on moving when the car stops.
- **Second law**: airbags and crumple zones lengthen the stopping time, so the acceleration and the **force** are smaller. A ball-thrower extends the push, so the ball gets a higher launch speed.
- **Third law**: a rocket pushes gas back and the gas pushes the rocket forward.
- Numbers show how much a design helps: twice the stopping time halves the force.
