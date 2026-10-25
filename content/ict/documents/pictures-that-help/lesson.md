---
order: 6
unit: slides
title: Pictures that help
summary: "Use a picture when it shows something words cannot, such as how big, what shape or how the numbers compare, and make it big enough to see. Give every picture alt text, a short description of what it shows, so someone who cannot see it still gets the idea. A picture added only because it looks nice takes up room and says nothing."
language: maths
hook: "A slide about beans in the sun has a photo of a crowd of people on it, because it looked good. What does the audience learn from it?"
---
A picture can do something words cannot: show how big a thing is, what it looks like or how numbers compare. A good picture does that job. A picture added to fill space does not.

Three questions to ask about a picture:

- **Does it show the idea?** If the slide would be as clear without it, it is decoration.
- **Is it big enough to see?** Small pictures are hard to make out from the back.
- **Can someone who cannot see it still get the idea?** That is what **alt text** is for. It is a short description attached to the picture, and a screen reader reads it aloud.

## Predict: what does a screen reader say?

```step
stage: predict
insight: "Committing to what a screen reader says tests the move: with no alt text, the picture is silent."
check:
  type: predict
  q: "A slide has a picture of a bar chart showing that beans in the sun grew tallest. It has no alt text. A student using a screen reader reaches it. What do they hear?"
  options: ["Nothing useful about the chart", "The heights of the bars", "That the sun beans grew tallest", "The words in the chart"]
  actual: "Nothing useful. A screen reader cannot read a picture, so without alt text the idea in the chart is lost for that student."
```

## Try: add alt text

```step
stage: run
insight: "Writing alt text and making the picture larger settles the prediction: the description carries the idea."
try: { playground: board, starter: "slide.yml#run", height: 700 }
hint: ["Click the picture on the slide. A box for Alt text appears above the page.", "Describe what it shows, such as: A bar chart showing beans in the sun grew tallest. Then press Make larger."]
check: { type: board, text: "Write alt text for the chart, saying what it shows, and make it larger.", when: "n_alt = 1 and n_big = 1", explain: "The alt text carries the idea for someone who cannot see the chart, and the larger picture is easier to read for everyone else." }
```

Was your guess right? The alt text is not shown on the slide. It sits behind the picture. A screen reader reads it, and it appears if the picture does not load.

## Worked example: does it help?

```step
stage: investigate
insight: "Asking whether a picture shows the idea models the method. Kai adds a picture because it looks good, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Which alt text is best for a bar chart that shows beans in the sun grew 13 cm and beans in the dark grew 4 cm?"
      options: ["A bar chart: beans in the sun grew 13 cm, beans in the dark 4 cm", "Image of chart", "chart.png", "A chart"]
      answer: 0
      feedback: [null, "It names the kind of thing but says nothing about what it shows.", "A file name tells a listener nothing.", "Too little: what does the chart show?"]
      explain: "Good alt text gives the idea: what kind of picture it is and what it shows."
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai's slide about beans in the sun has a picture that teaches the audience nothing. Click the line where Kai first goes wrong."
      answer: 2
      fault: logic
      misconception: decoration-picture
      explain: "Line 2: Kai added the picture because it looked good, not because it showed anything about the beans. A picture should show the idea, not fill space."
  - check:
      type: question
      q: "A picture is tiny in the corner of the slide. What is the problem?"
      options: ["The audience cannot make it out from the back", "It uses too much memory", "It is too colourful", "It breaks the slide"]
      answer: 0
      feedback: [null, "Size on the slide does not change what the audience can see in the way that matters.", "Colour is not the problem here.", "It will show, but not usefully."]
      explain: "If the audience cannot make it out, it is not helping. Make it large enough to see from the back."
```

### Does it show the idea?

```worked
\text{Ask what it shows} :: A bar chart shows how the heights compare. A crowd of people shows nothing about beans.
\text{Make it big enough} :: Use the whole width if you need to, so the back row can see it.
\text{Alt text} :: Write what it shows, in a short sentence, for someone who cannot see it.
\text{If it only fills space} :: Take it out. A slide with words alone is better than a slide with a distraction.
```

Now: what makes alt text good?

### Find the mistake

### Too small

## Vary: judge the picture

```step
stage: modify
insight: "Each task changes the picture: a good alt text, a picture that only decorates and a picture too small to help."
tasks:
  - check:
      type: question
      q: "A slide says beans in the dark are pale. Which picture helps most?"
      options: ["A pale bean seedling next to a green one", "A logo of the school", "A picture of the sun", "A photo of a crowd"]
      answer: 0
      feedback: [null, "It does not show anything about the beans.", "It is about the sun, not the pale beans.", "It is about people, not beans."]
      explain: "A picture should show the idea: pale beans compared with green beans."
  - check:
      type: sort
      q: "Does each picture help the slide, or only decorate it?"
      options: ["Helps", "Only decorates"]
      items:
        - ["A bar chart of the bean heights, on the slide about the results", "Helps", "It shows how the heights compare."]
        - ["A clip-art star beside the title", "Only decorates", "It shows nothing about the idea."]
        - ["A drawing of a seedling with its parts labelled, on a slide about parts of a plant", "Helps", "It shows what the words describe."]
        - ["A photo of a beach on a slide about bean growth", "Only decorates", "It has nothing to do with the idea."]
  - check:
      type: question
      q: "Which alt text is better for a picture of three bean pots in different places?"
      options: ["Three pots of beans: one in the dark, one in shade, one in the sun", "Beans", "Picture", "IMG_2041"]
      answer: 0
      feedback: [null, "One word does not say what the picture shows.", "It does not describe anything.", "A file name tells a listener nothing."]
      explain: "It says what is in the picture and how it relates to the idea."
```

### Which picture?

### Help or decorate?

### Which alt text?

## Practise: pictures that help

```step
stage: practise
insight: "Writing alt text for two pictures, then taking out the picture that does not help."
try: { playground: board, starter: "slide.yml#practise", height: 700 }
tasks:
  - starter: "slide.yml#practise"
    hint: ["Click each picture in turn. The Alt text box is above the page.", "Say what each shows in a few words, such as: A pot with a bean seedling growing."]
    check: { type: board, text: "Write alt text for both pictures.", when: "n_alt = 2", explain: "Both pictures now say what they show. Alt text is a short, plain description, not a file name or just the word picture." }
  - starter: "slide.yml#practise-extra"
    hint: ["The slide is about beans in the sun. Which picture shows beans or the sun?", "Click the crowd picture, then press Delete."]
    check: { type: board, text: "The slide is about beans in the sun. Take out the picture that does not help.", when: "n_images = 1 and st_3 = 9", explain: "The sun picture helps and the crowd of people does not, so it is gone. The slide is clearer." }
```

### Describe them

### Take one out

## Make: your own picture slide

```step
stage: make
insight: "Adding a picture, writing its alt text and making it large has students use the move on a slide of their own."
try: { playground: board, starter: "slide.yml#make", height: 700 }
hint: ["Press Add below: Picture to add a picture to the slide.", "Click the picture, write alt text and press Make larger."]
check: { type: board, text: "Add a picture that shows your idea, write alt text for it and make it large.", when: "n_images >= 1 and n_alt >= 1 and n_big >= 1", explain: "The picture is large, and its alt text says what it shows. Both help the audience." }
```

Ask a partner: does the picture show the idea?

## In your own app

```step
stage: make
tier: typical
insight: "Adding alt text in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my slide app I added a picture and wrote alt text for it (in PowerPoint right-click the picture and choose View Alt Text; in Google Slides right-click and choose Alt text), then made it big enough to see from the back." }
```

Alt text is under a right-click in PowerPoint and Slides. Apps may try to write it for you. Read it, and fix it so it says what the picture shows for your idea.
