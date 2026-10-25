---
order: 5
unit: slides
title: One idea per slide
summary: "A slide is not a page. People read a slide in a few seconds while they listen to you, so it holds one idea, a short title that says it, and few words. A paragraph copied onto a slide makes the audience read instead of listen. If you have three ideas, make three slides."
language: maths
hook: "A student copies a paragraph from her report onto a slide and reads it out. Half the class stops listening. What should she have done?"
---
A document is read by someone with time. A slide is shown to a group who are also trying to listen to you. So a slide has a different job:

- **One idea.** If you have three ideas, make three slides.
- **A title that says the idea.** "Beans grew tallest in the sun" tells more than "Results".
- **Few words.** A few words to help people remember, not a paragraph for them to read.

## Predict: how many slides?

```step
stage: predict
insight: "Committing to a number tests the move: one slide per idea."
check:
  type: predict
  q: "A slide has a title and six bullets. Two bullets are about light, two are about water and two are about soil. How many slides is that best as?"
  options: ["Three", "One", "Six", "Two"]
  actual: "Three. Each pair of bullets is one idea, so each idea gets a slide and its own title."
```

## Try: split a slide

```step
stage: run
insight: "Starting a new slide at each idea and watching the slides appear settles the prediction."
try: { playground: board, starter: "slide.yml#run", height: 620 }
hint: ["Click the first bullet about water. A row of controls appears.", "Press Start a new slide here. Do the same at the first bullet about soil."]
check: { type: board, text: "Split the slide so each idea (light, water, soil) has its own slide.", when: "n_slides = 3 and max_bullets <= 2", explain: "Each slide holds one idea. The audience can take in two bullets at a glance." }
```

Was your guess right? The words did not change. Splitting them across slides is what makes each idea easy to take in.

## Worked example: split by idea

```step
stage: investigate
insight: "Splitting by idea and giving each slide a title models the method. Lena puts a paragraph on one slide, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Why does a slide hold one idea?"
      options: ["The audience takes in one idea at a glance while listening", "Slides can only be a few words long", "It makes the file smaller", "The software only allows one"]
      answer: 0
      feedback: [null, "Slides can hold lots of words, but people cannot read lots of words while listening.", "The number of ideas does not change the size of the file.", "Software allows as many as you like."]
      explain: "People read a slide in a few seconds while listening. One idea is what they can take in."
  - check:
      type: bug
      code: "working.txt#lena"
      text: "Half of Lena's audience stopped listening. Click the line where Lena first goes wrong."
      answer: 2
      fault: logic
      misconception: slide-is-a-page
      explain: "Line 2: Lena copied a paragraph onto the slide. The audience reads it while she talks, so they cannot do both. A slide holds a few words for one idea."
  - check:
      type: question
      q: "Which is the better title for a slide with the heights of three beans?"
      options: ["Beans grew tallest in the sun", "Results", "Bean heights table", "Slide 3"]
      answer: 0
      feedback: [null, "Too general. It does not say what the audience should take away.", "That says what is on the slide, not what it means.", "That says nothing about the idea."]
      explain: "A title that says the idea tells the audience what to take away before you start speaking."
```

### Splitting a slide

```worked
\text{List the ideas} :: Light, water and soil are three different ideas.
\text{One slide for each} :: Start a new slide where a new idea starts.
\text{A title that says it} :: Each slide gets a short title that says its idea.
\text{Few words} :: Keep a few words for each bullet. You say the rest.
```

Now: why one idea per slide?

### Find the mistake

### A good title

## Vary: how many ideas?

```step
stage: modify
insight: "Each task changes the content: counting ideas, judging a slide's words and choosing what stays."
tasks:
  - check:
      type: number
      q: "A talk has four main points about the beans: light, water, soil and temperature. How many slides does it need for the points (not counting a title or a summary)?"
      answer: 4
      explain: "One for each point, so 4."
  - check:
      type: question
      q: "Which bullet is best for a slide?"
      options: ["Beans in the sun grew 13 cm", "The beans that we planted in the sunny window grew to an average height of 13 cm over four days compared with 4.6 cm in the dark", "Results are in the table", "Sun"]
      answer: 0
      feedback: [null, "Too long. The audience will read it instead of listening.", "That says nothing the audience can remember.", "Too short to mean anything on its own."]
      explain: "Few words, but enough to carry the idea: Beans in the sun grew 13 cm."
  - check:
      type: question
      q: "You have a detail that only a few people will want. Where does it go?"
      options: ["In what you say, or a handout", "On the slide in small print", "On the slide in capitals", "Nowhere"]
      answer: 0
      feedback: [null, "Small print cannot be read from the back, and it clutters the slide.", "Capitals are harder to read, and still cluttered.", "It may matter. It just does not need to be on the slide."]
      explain: "Say the detail, or put it in a handout. The slide carries the idea."
```

### Count the points

### Pick the bullet

### Where does the detail go?

## Practise: tidy a crowded slide

```step
stage: practise
insight: "Splitting a crowded slide by idea, then cutting a bullet that is too long."
try: { playground: board, starter: "slide.yml#practise", height: 700 }
tasks:
  - starter: "slide.yml#practise"
    hint: ["The slide has two ideas: light and water. Start a new slide where the water bullets begin.", "Then add a title for the new slide with Add below: Title, and write what it says."]
    check: { type: board, text: "Split the slide into two, one for light and one for water, and give each slide a title.", when: "n_slides = 2 and n_untitled = 0 and max_bullets <= 3 and n_empty = 0", explain: "Each slide has one idea and a title. The audience can take in three bullets at a glance." }
  - starter: "slide.yml#practise-long"
    hint: ["The bullet is a whole sentence. Click it and shorten it in the box.", "Keep the idea and cut the rest. You can say the detail aloud."]
    check: { type: board, text: "The bullet is far too long. Shorten it so there are at most 12 words on the slide.", when: "max_words <= 12 and n_empty = 0", explain: "Short enough to take in at a glance, with the idea still there." }
```

### Two ideas

### Shorten it

## Make: your own slide

```step
stage: make
insight: "Writing a slide with one idea has students use the move on their own topic."
try: { playground: board, starter: "slide.yml#make", height: 620 }
hint: ["Click the title line and type the idea in a short sentence.", "Click a bullet and type one short fact. Delete a bullet you do not need, because an empty one does not count."]
check: { type: board, text: "Write one slide about one idea: a title that says it and at most three short bullets (no more than 20 words altogether).", when: "n_slides = 1 and n_untitled = 0 and max_bullets <= 3 and max_words <= 20 and n_empty = 0", explain: "One idea, a title that says it and a few words. Everything else you say aloud." }
```

Show a partner for five seconds. Can they say your idea?

## In your own app

```step
stage: make
tier: typical
insight: "Splitting a crowded slide in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my slide app (PowerPoint, Google Slides or similar) I took a slide with too much on it, split it into slides with one idea each, and gave each a title that says its idea." }
```

Every slide app has a New slide button and a title box on each slide. The titles are also what the app lists in its slide sorter and outline, so a good title helps you move around your own deck.
