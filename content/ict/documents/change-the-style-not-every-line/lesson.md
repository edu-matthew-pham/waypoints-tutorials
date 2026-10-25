---
order: 2
unit: structure
title: Change the style, not every line
summary: "A style is a look defined once and used by every part that has it. Change the style and every part follows, including parts you add later. Making each part look right by hand is slow, easy to get wrong, and stays on top of the style, so a later change to the style does not reach it."
language: maths
hook: "A student makes six headings bigger, one click at a time. Next week she adds a seventh part. Will its heading match the others?"
---
In the last lesson a heading got its **style**. A style is also where the look lives: its size, its font, whether it is bold. Every part with that style looks the same, because they all read the same definition.

Here is a report with three Heading 1 parts. The **Styles** panel above the page lets you change a style, and the **Bold** and **Bigger** buttons on a selected part change that one part by hand.

## Predict: what changes?

```step
stage: predict
insight: "Committing to what changes tests the move: a style is defined once and every part with it follows."
check:
  type: predict
  q: "You open the Styles panel, choose Heading 1 and make it serif (a font with small feet on the letters). The report has three Heading 1 parts. What changes on the page?"
  options: ["All three headings change", "Only the heading you last clicked", "Only the first heading", "Nothing until you save"]
  actual: "All three change. A style is one definition used by every part that has it, so you change it once."
```

## Try: change one style

```step
stage: run
insight: "Changing Heading 1 once and seeing every Heading 1 follow settles the prediction."
try: { playground: board, starter: "page.yml#run", height: 560 }
hint: ["In the Styles panel, the list is set to Heading 1. Click Bigger.", "Keep clicking Bigger until it says 22 pt."]
check: { type: board, text: "Make the Heading 1 style 22 pt. Do all three headings change?", when: "size_h1 = 22 and n_direct = 0", explain: "You changed the style once and all three Heading 1 parts followed. Nothing was changed on any single heading." }
```

Was your guess right? You did one thing and three parts changed. Add a fourth Heading 1 part and it would match too.

## Worked example: change it once

```step
stage: investigate
insight: "Changing the style once models the method. Sam changes each heading by hand, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Why change the style instead of each heading?"
      options: ["One change reaches every part with that style", "It makes the headings bold", "It saves the document", "It checks the spelling"]
      answer: 0
      feedback: [null, "Bold is one of the things a style can set, but it is not the reason.", "Saving is separate from styles.", "Spelling is checked whatever the style."]
      explain: "A style is one definition, so one change reaches every part that uses it, now and later."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's seventh heading does not match the other six. Click the line where Sam first goes wrong."
      answer: 2
      fault: logic
      misconception: restyle-by-hand
      explain: "Line 2: Sam changed each heading by hand. The style itself did not change, so the seventh heading, which uses the style, still has the old look."
  - check:
      type: question
      q: "Sam makes one heading bold by hand, then you remove bold from the Heading 1 style. What happens to Sam's heading?"
      options: ["It stays bold", "It stops being bold", "It turns into body text", "It disappears from the headings panel"]
      answer: 0
      feedback: [null, "A change made by hand sits on top of the style, so the style cannot take it off.", "Its style is still Heading 1. Only the bold was added by hand.", "Its style has not changed, so it is still listed."]
      explain: "Formatting by hand stays on top of the style. That is why mixing the two goes wrong."
```

### Change a style once

```worked
\text{Open the style} :: Pick Heading 1 in the styles panel, not one heading on the page.
\text{Change the look} :: Make it bigger, change the font or turn bold on or off.
\text{Every part follows} :: All the Heading 1 parts change together, and any you add later start with the new look.
\text{By hand only for one} :: Use Bold on a selected part only for a single exception, such as one word that needs to stand out.
```

Now: why change the style?

### Find the mistake

### What stays on top?

## Vary: how many changes?

```step
stage: modify
insight: "Each task changes the size of the job: counting changes, the by-hand exception, and choosing which tool fits."
tasks:
  - check:
      type: number
      q: "A report has 8 Heading 1 parts. You want them all bigger. How many changes do you make if you change the style?"
      answer: 1
      explain: "One: the Heading 1 style. All 8 follow."
  - check:
      type: question
      q: "You want one word in a paragraph in bold for emphasis. What is the right tool?"
      options: ["Bold on that word, by hand", "Change the Body text style to bold", "Change the style of the whole paragraph", "Make the word a heading"]
      answer: 0
      feedback: [null, "That would make every paragraph bold.", "That would change the whole paragraph, not one word.", "A heading names a part, not one word."]
      explain: "One word is a one-off, so by hand is fine. A style is for things that should match everywhere."
  - check:
      type: question
      q: "All the headings in your report should be the same blue. Which is the best way?"
      options: ["Change the colour of the Heading 1 style", "Select each heading and colour it", "Colour only the first one", "Retype each heading in blue"]
      answer: 0
      feedback: [null, "It works once, and then every new heading needs the same work.", "The others would not match.", "Retyping does not change the style."]
      explain: "Set the colour in the style, so every heading matches and so will the next one."
```

### Count the changes

### One word

### The same blue

## Practise: tidy a report's look

```step
stage: practise
insight: "Setting two styles so the sizes step down, then taking out a by-hand change that does not match."
try: { playground: board, starter: "page.yml#practise", height: 560 }
tasks:
  - starter: "page.yml#practise"
    hint: ["Use the Styles panel. The list says Heading 1: click Bigger until it says 22 pt.", "Choose Heading 2 in the list and click Bigger twice to reach 16 pt."]
    check: { type: board, text: "Make Heading 1 22 pt and Heading 2 16 pt using the Styles panel.", when: "size_h1 = 22 and size_h2 = 16 and n_direct = 0", explain: "Heading 1 is 22 pt and Heading 2 is 16 pt, with Body text smaller below. A reader can see the levels." }
  - starter: "page.yml#practise-odd"
    hint: ["One heading is bigger than the others because it was changed by hand. Click it.", "Click Smaller until it matches. The Bigger and Smaller buttons change only the selected heading."]
    check: { type: board, text: "One heading was made bigger by hand. Bring it back so all the headings match.", when: "n_direct = 0", explain: "The by-hand change is gone, so every Heading 1 looks like its style. Next time, change the style instead." }
```

### Two styles

### The odd one

## Make: your own look

```step
stage: make
insight: "Setting a look for a whole report with styles has students use the move on a report of their own."
try: { playground: board, starter: "page.yml#make", height: 560 }
hint: ["In the Styles panel choose Heading 1 and press the font button until it says serif.", "Choose Body text and click Bigger until it says 12 pt."]
check: { type: board, text: "Give the report a look with styles only: Heading 1 in a serif font and Body text at 12 pt.", when: "font_h1 = 2 and size_body = 12 and n_direct = 0", explain: "You set the whole look with two style changes and no changes by hand. Add another heading and it will match." }
```

Add a heading with **Add below**. Does it match the others?

## In your own app

```step
stage: make
tier: typical
insight: "Changing a style in Word or Docs shows the idea is the same in every app."
check: { type: reflect, text: "In my word processor I changed the Heading 1 style once (in Word, right-click Heading 1 and choose Modify; in Docs, change a heading and choose Update Heading 1 to match) and saw every Heading 1 in my document change." }
```

In Word and Docs you change a style by changing one example and telling the app to **update the style** to match. In Pages it is the paragraph styles panel. Either way, the aim is to change it once, not at every heading.
