---
order: 6
unit: delivery
title: Visuals that help
summary: "A slide, a chart or a picture should show something the words cannot, not repeat them. Students sort slide ideas into those that add something, repeat the speaker or distract, choose the visual that suits a point, find the slide in Nib's plan that repeats the talk, and plan two visuals for a talk of their own."
language: maths
node: [AC9E5LY07 n4]
explainPicture: { ref: text.yml#explain-pic, caption: "A slide that adds something shows what the words cannot. One that repeats the words gives listeners nothing new." }
hook: "You have a slide up and you are talking. Where do your listeners look, and what do they take in?"
---
A **visual** is anything the listeners see while you speak: a slide, a chart, a drawing, a photo, an object. A good visual does one of three jobs.

- It **adds** something the words cannot: a shape, a number pattern, a picture of the thing.
- It **repeats** the words on the screen. This usually hurts: listeners read ahead and stop listening.
- It **distracts**: it moves, flashes or has nothing to do with the point, so listeners watch it instead of you.

The speaker is the main show. The visual is there to help the speaker, not to speak for them.

## Predict: what do listeners do?

```step
stage: predict
insight: "Predicting what listeners do with a slide full of the speaker's words brings out that people read faster than they listen."
check:
  type: predict
  q: "Nib puts every sentence of the talk on a slide and reads them out. What will most of the listeners do?"
  options: ["Listen closely, because they hear and read the same words twice", "Read ahead on their own and stop listening to Nib", "Look at Nib the whole time", "Remember more than if there were no slide"]
  actual: "Read ahead on their own and stop listening. People read faster than a speaker talks, so they finish early and turn off. A slide that repeats the words gives them no reason to listen."
```

## Try: adds, repeats or distracts

```step
stage: run
insight: "Labelling slide ideas by their job builds the three-way distinction before students plan their own visuals."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Does this slide show something the speaker's words cannot?", "Would listeners look at it instead of the speaker, and for no good reason?"]
smaller:
  check: { type: question, q: "A slide shows a graph of how many students ride to school each year. Does it add, repeat or distract?", options: ["Repeat", "Add", "Distract"], answer: 1, feedback: ["It does not copy words. It shows numbers as a shape.", null, "It is about the topic, so it helps the point."], explain: "A graph shows a pattern in the numbers that words would take a long time to say. It adds something." }
check: { type: board, text: "Label each slide idea: does it add something, repeat the speaker's words or distract?", when: "n_right = 8 and n_wrong = 0", explain: "A photo, a chart, a map and a drawing add something the speaker cannot say. A slide that copies the words repeats them. A spinning cartoon and a busy fireworks picture distract." }
```

Were you right about what listeners do? A slide that repeats the speaker is hard to listen to.

## Worked example: a visual with a job

```step
stage: investigate
insight: "Asking what a visual should do, finding the slide in Nib's plan that repeats the talk and judging how much writing belongs on a slide show visuals as choices with a job."
tasks:
  - check:
      type: question
      q: "What is the best job for a visual in a talk?"
      options: ["Holding the whole script so the speaker does not forget it", "Showing something the words cannot, such as a shape, a pattern or a picture", "Filling the screen so there is no empty space", "Making the talk last longer"]
      answer: 1
      feedback: ["That is a cue card's job, and the speaker's cards are not for the audience.", null, "Empty space helps listeners look at what matters.", "A visual does not add time. It adds understanding."]
      explain: "A visual earns its place by showing what words cannot. Otherwise the listener is better off watching the speaker."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's slide plan for a talk about the bike rack, one slide per line. Click the slide that repeats the talk."
      answer: 2
      fault: logic
      misconception: slides-repeat-speech
      explain: "Slide 2: Nib will say those same sentences. Listeners will read them first and stop listening. A bar chart or a photo would show what the words cannot."
  - check:
      type: question
      q: "How much writing should a slide have?"
      options: ["As much as fits, so listeners can read the talk", "A few words at most, such as a title or a label", "None at all, ever", "Whatever the speaker says next, word for word"]
      answer: 1
      feedback: ["More writing means listeners read instead of listen.", null, "A few words, such as a title or a label for a chart, can help listeners follow.", "That is repeating the talk. It usually hurts."]
      explain: "A few words, such as a title or a label, can orient listeners. Anything more, and they read instead of listen."
```

### A visual with a job

```worked
\text{Name the point} :: What do listeners need to understand?
\text{Ask what words cannot do} :: Show a shape, a pattern, a picture, a layout.
\text{Choose the visual} :: A chart, a map, a photo, a drawing.
\text{Keep the writing short} :: A title or a label, not the script.
\text{Say what is on it} :: Point to it, then explain what it shows.
```

Now: what job should a visual have?

### Find the slide that repeats

### How much writing?

## Vary: the visual that fits the point

```step
stage: modify
insight: "Choosing the visual for each point shows that the best visual depends on what the words cannot do."
try: { playground: board, starter: "text.yml#vary", height: 400 }
hint: ["What would words take a long time to say, but a picture could show at a glance?", "Which choice would just copy the speaker?"]
check: { type: board, text: "Choose the visual that adds the most to each point.", when: "n_gaps_right = 3", explain: "A line graph shows a trend at a glance. A labelled drawing shows layers. Two ovals drawn to the same scale show a size comparison in one look. The other choices repeat the words or add nothing." }
```

## Practise: label a second plan

```step
stage: practise
insight: "Labelling a second plan with no help from the first builds the habit of asking what a visual adds."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["What does the visual show that the speaker's words cannot?", "Which visuals pull the eyes away from the speaker for no good reason?"]
check: { type: board, text: "Label each slide idea: adds something, repeats the words or distracts.", when: "n_right = 6 and n_wrong = 0", explain: "The photo and the graph add. The slides that copy the speaker's sentences or repeat the title repeat. The flashing banner and the joke picture distract." }
```

## Make: plan two visuals

```step
stage: make
insight: "Planning two visuals and saying what each adds is the open part of the skill, so it is compared with models, not marked."
check:
  type: reasoning
  q: "You are giving a talk to Year 5 about looking after the school garden. Plan two visuals. For each one, say what it shows, what you will say while it is up, and what it adds that your words could not."
  placeholder: "Visual 1: ... It shows ... While it is up I will say ... It adds ..."
  models:
    - title: "A strong answer"
      text: "Visual 1: a photo of the garden beds in spring and in winter, side by side. While it is up I will say 'This is what a month of watering looks like.' It adds the difference, which words would take a long time to describe. Visual 2: a simple drawing of a watering roster, with the days and names. While it is up I will say 'Here is who waters when.' It adds the layout, which listeners can see at a glance."
    - title: "A different approach that also works"
      text: "Visual 1: a labelled diagram of a seed growing into a plant, with a few words on it. I will say 'Here is what happens under the soil.' It adds the hidden parts, which nobody can see without a picture. Visual 2: a real bean seedling that I hold up. I will say 'This one is two weeks old.' It adds the real size and feel, which a slide could not."
  criteria: ["I planned two visuals.", "I said what each shows and what I will say while it is up.", "I said what each adds that my words could not."]
  explain: "There are many good visuals. What they share is a clear job: each shows something the words cannot."
```

## In your own class

```step
stage: make
tier: typical
insight: "Checking a real set of slides for ones that repeat the speaker moves the habit into students' own work."
check: { type: reflect, text: "I looked at slides for a talk I have to give and cut or changed one that repeated what I would say." }
```

## Wider: a visual that is not on a screen

```step
stage: make
tier: wider
insight: "Choosing an object, a gesture or a drawing on the board widens the idea beyond slides."
check: { type: reflect, text: "I planned a visual that is not a slide, such as an object or a drawing on the board, and said what it adds." }
```
