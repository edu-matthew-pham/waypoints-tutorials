---
order: 7
unit: slides
title: Readable from the back
summary: "A slide is read from the back of a room, not from a desk. So the text has to be large, and the text and background have to be different enough in lightness. Pale text on a pale background looks soft on your own screen, and cannot be read from the back. Keep the text big, the contrast strong and the words few enough to fit."
language: maths
hook: "A slide looks lovely on your screen: pale grey words on white. Then you present it in the hall. What does the back row see?"
---
You make a slide at a desk, close to the screen. Your audience sees it across a room. Two things decide whether they can read it:

- **Size.** Text on a slide should be large, about 24 points or more. Too small and it cannot be read from the back.
- **Contrast.** The text and the background must be very different in lightness. Black on white is strong. Pale grey on white, or yellow on white, is weak.

Also, text that is large takes more room, so there have to be fewer words. If the words run off the slide, cut words, not size.

The board shows a number for contrast. A ratio of **4.5 to 1 or more** is the usual standard for readable text.

## Predict: can the back row read it?

```step
stage: predict
insight: "Committing to a judgement tests the move: lightness must differ, not just colour."
check:
  type: predict
  q: "A slide has yellow text on a white background. On your own screen it looks bright and cheerful. Can the back row read it?"
  options: ["Not easily: both are light", "Yes, yellow stands out", "Yes, if it is bold", "Only on a projector"]
  actual: "Not easily. Yellow and white are both very light, so there is hardly any difference to see. Contrast is about lightness, not colour."
```

## Try: fix the contrast

```step
stage: run
insight: "Changing the colours and watching the contrast number settles the prediction: the lightness gap is what matters."
try: { playground: board, starter: "slide.yml#run", height: 700 }
hint: ["Use the Background and Text colour lists above the slide.", "Try a dark background with white text, or a light background with black text."]
check: { type: board, text: "Pick a background and text colour that are strong enough to read from the back (a contrast of at least 4.5).", when: "contrast_ok = 1", explain: "The two colours are far apart in lightness, so the slide can be read from the back of a room." }
```

Was your guess right? The colours that look nice side by side are not always the ones that read well. Lightness is what counts.

## Worked example: size and contrast

```step
stage: investigate
insight: "Checking size and contrast models the method. Priya picks pale grey text because it looks soft, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Which pair is easiest to read from the back of a room?"
      options: ["Black text on white", "Pale grey text on white", "Yellow text on white", "Light blue text on grey"]
      answer: 0
      feedback: [null, "Both are light, so there is little difference.", "Yellow and white are both very light.", "Both are mid to light, so the gap is small."]
      explain: "Black on white has the biggest gap in lightness, so it is the easiest to read."
  - check:
      type: bug
      code: "working.txt#priya"
      text: "Priya's audience could not read her slide. Click the line where Priya first goes wrong."
      answer: 2
      fault: logic
      misconception: low-contrast
      explain: "Line 2: Priya chose pale grey on white because it looks soft on her screen. From the back of the room there is hardly any difference to see. She should test it from a distance."
  - check:
      type: question
      q: "Your words run off the bottom of the slide. What is the best fix?"
      options: ["Cut words", "Make the text smaller", "Make the margins zero", "Make the slide taller"]
      answer: 0
      feedback: [null, "Smaller text is harder to read from the back.", "The text would touch the edge and still be too much.", "Slides have a fixed shape."]
      explain: "Cut words. Smaller text means the back row cannot read it."
```

### Checking a slide

```worked
\text{Size} :: Make the text large, 24 points or more, so it can be read from the back.
\text{Contrast} :: Choose colours far apart in lightness, such as white on dark blue or black on white.
\text{Fit} :: If the words do not fit at that size, cut words.
\text{Test it} :: Stand back from the screen. If you cannot read it, neither can the back row.
```

Now: which pair is easiest to read?

### Find the mistake

### Too many words

## Vary: size and colour

```step
stage: modify
insight: "Each task changes the problem: a size that is too small, a colour pair that is weak and a slide that does not fit."
tasks:
  - check:
      type: question
      q: "Body text on a slide is 12 points. Is it big enough?"
      options: ["No: too small for the back of a room", "Yes, it is the same as a document", "Yes, if it is bold", "Yes, if it is black"]
      answer: 0
      feedback: [null, "A document is read close up. A slide is read from across a room.", "Bold helps a little, but 12 points is still small.", "Black helps, but the size is still too small."]
      explain: "Slide text should be about 24 points or more."
  - check:
      type: question
      q: "Which pair has the weakest contrast?"
      options: ["Pale grey on white", "White on dark grey", "Black on yellow", "White on navy"]
      answer: 0
      feedback: [null, "There is a big gap in lightness.", "Black is dark and yellow is light, so there is a big gap.", "White is light and navy is dark."]
      explain: "Pale grey and white are both light, so the gap is small."
  - check:
      type: question
      q: "The slide has seven bullets at 28 points and runs off the bottom. What should you do?"
      options: ["Cut the bullets to the most important few", "Change to 12 points", "Squeeze the margins", "Use a pale colour"]
      answer: 0
      feedback: [null, "It would fit, but nobody could read it.", "Margins do not solve having too many words.", "A pale colour does not help."]
      explain: "Keep the text large and cut the words. If there are many ideas, make more slides."
```

### Too small

### Weak pair

### Too much

## Practise: make it readable

```step
stage: practise
insight: "Setting text sizes for the back of the room, then cutting words from a slide that does not fit."
try: { playground: board, starter: "slide.yml#practise", height: 700 }
tasks:
  - starter: "slide.yml#practise"
    hint: ["Use the Styles panel above the slide. Choose Title and click Bigger until it says 40 pt or more.", "Then choose Text and click Bigger until it says 28 pt. Keep everything on the slide."]
    check: { type: board, text: "Make the Title at least 40 pt and the Text at least 28 pt, and keep it all on the slide.", when: "size_title >= 40 and size_body >= 28 and n_overflow = 0", explain: "The title and text are big enough to read from the back, and everything still fits. If it did not, you would cut words." }
  - starter: "slide.yml#practise-over"
    hint: ["The slide runs off the bottom. A red edge shows when text does not fit.", "Click a bullet and press Delete. Keep the idea and lose the less important bullets."]
    check: { type: board, text: "The slide runs off the bottom. Cut bullets until it fits, keeping the text at 24 pt or more.", when: "n_overflow = 0 and font_min >= 24", explain: "Everything fits at a size the back row can read, because you cut words instead of shrinking the text." }
```

### Make it big

### Cut to fit

## Make: your own readable slide

```step
stage: make
insight: "Choosing colours, sizes and words for a slide has students use the move on their own idea."
try: { playground: board, starter: "slide.yml#make", height: 700 }
hint: ["Pick colours from the lists so the contrast number is fine.", "Make the Text 28 pt, and delete a bullet if the slide runs off."]
check: { type: board, text: "Make a slide the back row can read: strong contrast, text at least 24 pt and everything on the slide.", when: "contrast_ok = 1 and font_min >= 24 and n_overflow = 0", explain: "Strong contrast, large text and everything on the slide. That is a slide for the back of the room." }
```

Step back from the screen. Can you read it from there?

## In your own app

```step
stage: make
tier: typical
insight: "Checking size and contrast in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my slide app I set the text to at least 24 points, chose a background and text colour with strong contrast, and stood back from the screen to check I could read it." }
```

Most slide apps have an Accessibility checker (in PowerPoint, Review › Check Accessibility) that flags weak contrast. It helps, but it does not replace standing back and looking.
