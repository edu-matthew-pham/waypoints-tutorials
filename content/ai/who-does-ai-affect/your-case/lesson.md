---
title: Your own case
summary: "Choose a case and judge it with everything from the course: which kind of AI it is, who gains, who loses, who decides, what's the catch, and one rule you'd make."
language: science
shape: 5e
unit: your-case
order: 11
voice: { name: af_heart, speed: 1.1 }
---
Now it's your turn. Choose a case, then judge it with the course's questions. There's no single right verdict: **a good judgement shows its reasons.**

## Engage: choose a case

```step
stage: predict
check:
  type: predict
  q: "Before you start: which question do you think will be hardest for your case?"
  options: ["Which kind of AI is it?", "Who gains and who loses?", "Who decides?", "What's the catch?"]
  actual: "Often 'who decides?' and 'what's the catch?' take the most digging. Come back to this prediction at the end."
```

Pick one case (made-up cases are fine; so is a real one from the news, checked with your teacher):

- **Marking:** a school uses AI to mark students' short written answers.
- **Traffic:** a city uses cameras with AI to count cars and change traffic lights.
- **Refunds:** a shop lets an AI chatbot give customers refunds on its own.
- **Study notes:** an app makes study notes from photos of your textbook.
- **Library:** a library uses AI to suggest books to each student.
- **A case from this course** (exam grades, hiring, breast screening, energy, labelling, art, jobs), looked at from a new angle.

## Explore: kind and lens

```step
stage: run
tasks:
  - check:
      type: question
      q: "Which kind of AI is in the 'Refunds' case?"
      options: ["Takes actions: it gives refunds on its own", "Rules written by people", "Learns to predict or sort only"]
      answer: 0
      feedback: [null, "If it only followed a fixed rule, it wouldn't need a chatbot. It acts for the shop.", "It does more than sort: it acts, giving money back."]
  - check:
      type: reasoning
      q: "For your case, write the kind of AI, then the four lens questions: who gains, who loses or could be harmed, who decides, and what's the catch."
      placeholder: "Kind: … Gains: … Loses: … Decides: … Catch: …"
      models:
        - title: "A strong answer (Marking)"
          text: "Kind: makes new content or sorts answers (it reads and scores them). Gains: teachers get time back; students get faster feedback. Loses: students whose good answers are worded unusually, if it marks them down. Decides: the school, maybe the teacher. Catch: was it tested on answers like ours, and can a teacher check and change a mark?"
        - title: "A different view that also works (Traffic)"
          text: "Kind: predicts (it counts cars from camera pictures). Gains: drivers and buses with shorter waits. Loses: people who don't want cameras watching streets. Decides: the city council. Catch: what else do the cameras record, and who can see it?"
      criteria: ["I named the kind of AI and why.", "I gave at least one gain and one loss, and who decides.", "My catch is something we don't know yet or need to check."]
      explain: "The lens works on any system. The catch is usually where the real questions are."
```

### Which kind?

Practise on the Refunds case.

### Your lens

Fill in all four for your case.

## Explain: what the course taught you to ask

```step
stage: investigate
check:
  type: sort
  q: "Which lesson's question fits each worry about a case?"
  options: ["Who decides? (one rule for everyone, appeals)", "Learned from the past (bias)", "When AI acts (confirm first)", "Who pays the cost? (energy, labour, creators)"]
  items:
    - ["The AI marks every student with the same rule, and there's no way to ask a teacher", "Who decides? (one rule for everyone, appeals)"]
    - ["The library AI was trained on what past students borrowed, mostly from one group", "Learned from the past (bias)"]
    - ["The refund chatbot sends money before anyone checks", "When AI acts (confirm first)"]
    - ["Nobody knows who labelled the photos the study-notes app learned from", "Who pays the cost? (energy, labour, creators)"]
```

Each worry points back to one of the course's questions. Add the one that fits your case to your lens.

## Elaborate: add evidence

```step
stage: modify
tier: typical
check: { type: reflect, text: "I added one source, with its date and who made it, and said what it does and doesn't show for my case." }
```

Find **one** source about your case or one like it (your teacher can give you one). Write down **who made it, when, and what it measured**. What does it show? What doesn't it show?

## Elaborate: the other side

```step
stage: make
tier: wider
check:
  type: reasoning
  q: "Write your verdict on your case. Then give the strongest argument against it, and say what evidence would change your mind."
  placeholder: "My verdict: … The strongest argument against: … I'd change my mind if: …"
  models:
    - title: "A strong answer (Refunds)"
      text: "My verdict: the shop shouldn't let the chatbot refund on its own above $20. Against: customers get money back faster, and small refunds are low risk. I'd change my mind if the shop showed the chatbot's refunds were checked and almost never wrong."
  criteria: ["My verdict is clear.", "The argument against is one a sensible person could make.", "I named evidence that would really change my mind."]
  explain: "Naming what would change your mind shows your verdict rests on evidence, not just on feeling."
```

## Evaluate: your rule

```step
stage: info
check: { type: reflect, text: "I made one rule for my case, said who checks it, and shared my lens with someone else." }
```

Finish with **one rule** for your case, and who checks it's working (lesson 10). Share your lens with a partner: did they find a gain, a loss or a catch you missed?

Look back at your prediction: which question was hardest?

**Course complete.** Every new AI system you meet, ask: which kind is it, who gains, who loses, who decides, and what's the catch?
