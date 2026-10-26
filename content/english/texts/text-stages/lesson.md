---
order: 1
unit: warmup
optional: true
title: Every text has a plan
summary: "A text is built in stages, and each stage does a job. A recount retells something that happened: an orientation says who, where and when, the events come in time order, and an ending says how it finished or what the writer thought. The stages stay the same whether the recount is an email, a speech or a story told aloud."
language: maths
node: [AC9E4LA03 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "The orientation says who, where and when. The events follow in time order, and the ending says how it felt." }
hook: "A friend starts telling you about their weekend with 'Then we went home.' What's missing?"
---
A text is built in **stages**, and each stage does a job for the reader. A **recount** retells something that happened, in three stages:

- **Orientation:** who, where and when.
- **Events:** what happened, in time order.
- **Ending:** how it finished, or what the writer thought of it.

## Predict: what comes next?

```step
stage: predict
insight: "Predicting what follows an orientation shows students they already expect a recount's stages."
check:
  type: predict
  q: "Leo's story starts: 'Last holidays, my cousins and I went camping at the beach.' What will most likely come next?"
  options: ["What happened, in time order", "Reasons why camping is good for you", "Steps for putting up a tent", "You can't tell from one sentence"]
  actual: "What happened, in time order. The first sentence told you who, where and when, so you expect the events next. That first sentence is the orientation of a recount."
```

## Try: label the stages

```step
stage: run
insight: "Labelling each sentence with its stage shows the recount's plan: set the scene, tell the events in order, then finish."
try: { playground: board, starter: "text.yml#run", height: 330 }
hint: ["Click a sentence, then choose Orientation, Event or Ending.", "Which sentence says who, where and when? Which one says how it all felt?"]
smaller:
  check: { type: question, q: "Which sentence tells you who went, where and when?", options: ["Last Friday, Class 5B caught a bus to the science museum in the city.", "First, we watched a show about lightning.", "It was the best excursion of the year, and everyone wants to go back."], answer: 0, feedback: [null, "This tells you something that happened, but not who or where.", "This says what the writer thought at the end."], explain: "Last Friday (when), Class 5B (who) and the science museum (where): that sentence is the orientation." }
check: { type: board, text: "Label each sentence as the orientation, an event or the ending.", when: "n_right = 5 and n_wrong = 0", explain: "The first sentence sets the scene, the next three are the events in time order (First, Next, After lunch), and the last says what the class thought of the day." }
```

Were you right about Leo's story? His first sentence was an orientation, just like Last Friday, Class 5B caught a bus.

## Worked example: find the stages

```step
stage: investigate
insight: "Asking what job each part does gives a method for any text. Nib's slip is leaving out the orientation, and the email task separates a text's form from its stages."
tasks:
  - check:
      type: question
      q: "What is the orientation's job?"
      options: ["To tell the reader who, where and when", "To say how it all ended", "To list everything that happened", "To give the writer's opinion of the day"]
      answer: 0
      feedback: [null, "That is the ending's job.", "That is the events' job.", "An opinion usually comes in the ending."]
      explain: "The orientation sets the scene, so the reader can picture the events that follow."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's recount, one sentence per line. Click the line where the reader needed an orientation but didn't get one."
      answer: 1
      fault: logic
      misconception: stage-missing
      explain: "Line 1: Nib starts with Then, in the middle of the day. The reader doesn't know who went, where the lake is or when it happened. Nib needs an orientation first, such as 'On Saturday, my class went to the lake for a picnic.'"
  - check:
      type: sort
      q: "Is each one a form (what the text looks like) or a stage (a part with a job)?"
      options: ["Form", "Stage"]
      items:
        - ["an email", "Form", "An email is a way of sending a text. A recount can be written as one."]
        - ["a speech", "Form", "A recount can be spoken aloud as a speech."]
        - ["a poster", "Form", "A poster is a shape a text can take."]
        - ["the orientation", "Stage", "The orientation does a job: it sets the scene."]
        - ["the events", "Stage", "The events do a job: they tell what happened."]
        - ["the ending", "Stage", "The ending does a job: it finishes the recount."]
      explain: "The form is what a text looks like or how it is delivered. The stages are the parts inside it, each with a job. A recount keeps its stages whether it's an email, a speech or a story told at dinner."
```

### Finding the stages

```worked
\text{Ask what the text is for} :: A recount retells something that happened.
\text{Find the orientation} :: Who was there, where and when. It sets the scene.
\text{Find the events} :: What happened, in time order. Time words (First, Next, After lunch) mark them.
\text{Find the ending} :: How it finished, or what the writer thought of it.
```

Now: what is the orientation's job?

### Find Nib's slip

### Form or stage?

## Vary: order and form

```step
stage: modify
insight: "Putting events back in time order, then finding the stages inside an email, shows the stages hold whatever the form."
try: { playground: board, starter: "text.yml#vary-order", height: 330 }
tasks:
  - starter: "text.yml#vary-order"
    hint: ["Click a sentence, then press Move up or Move down.", "The orientation goes first. Then use the time words: In the morning, Before lunch, In the afternoon."]
    check: { type: board, text: "Put the recount in order: orientation, the events in time order, then the ending.", when: "in_order = 1", explain: "The orientation sets the scene, the time words put the events in order, and the ending finishes the story of the day." }
  - starter: "text.yml#vary-email"
    hint: ["Hi Grandma and Love, Mia are part of the email's form. Leave them without a label.", "Label the other four sentences with their stages."]
    check: { type: board, text: "Mia's recount is an email. Label the four sentences that are stages of the recount.", when: "n_right = 4 and n_wrong = 0", explain: "The greeting and sign-off belong to the email form. Inside them, Mia's recount has an orientation, two events and an ending, the same stages as any recount." }
```

### Put it in order

### A recount as an email

## Practise: a longer recount

```step
stage: practise
insight: "A recount over two paragraphs shows the stages can stretch: the events fill more than one paragraph, but the orientation and ending still frame them."
try: { playground: board, starter: "text.yml#practise", height: 380 }
hint: ["There is one orientation and one ending. Everything in between is an event.", "The second paragraph is still events until the last sentence."]
check: { type: board, text: "Label every sentence as the orientation, an event or the ending.", when: "n_right = 6 and n_wrong = 0", explain: "The orientation is the first sentence, the four middle sentences are events in time order across both paragraphs, and the last sentence is the ending: what the writer learned." }
```

## Make: your own recount

```step
stage: make
insight: "Writing and labelling their own recount makes the three stages a plan they can use."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Click the first sentence and type your orientation: who, where and when.", "Add at least two events in time order, then an ending. Label every sentence."]
check: { type: board, text: "Write a recount with an orientation, at least two events and an ending, and label each sentence.", when: "has_orientation = 1 and has_event >= 2 and has_ending = 1 and n_empty = 0", explain: "Your recount has all three stages. Ask a partner to read only your orientation: can they tell who, where and when?" }
```

The board checks that each stage is there and labelled. Whether your recount is clear and in order is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking the stages of their own recount (a journal entry, a class report) makes the plan stick."
check: { type: reflect, text: "I took a recount I wrote in class and checked it has an orientation (who, where and when), events in time order and an ending. I added any stage that was missing." }
```
