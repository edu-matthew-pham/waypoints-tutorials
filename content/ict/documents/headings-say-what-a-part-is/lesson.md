---
order: 1
unit: structure
title: Headings say what a part is
summary: "A heading is not big bold text. It is a style that tells the app, and every reader, that this line names a part of the document. Apps use it to build the headings panel and the contents list, and a screen reader uses it to jump from part to part. Text that only looks like a heading is just bold text, so none of that works."
language: maths
hook: "Two lines in a report look exactly like headings. A reader opens the headings panel to jump to the Method. It is empty. What went wrong?"
---
A document is made of **parts**: a title, headings, paragraphs, lists. Each part can have a **style**, which is a name the app understands, such as *Heading 1* or *Body text*. The style tells the app what the part **is**. The look (big, bold) comes from the style.

Here is the start of a Year 7 science report. *Aim* and *Method* are big and bold. The headings panel on the left lists the headings in the document.

## Predict: what is in the headings panel?

```step
stage: predict
insight: "Committing to what the panel lists tests the move: the panel reads styles, not looks."
check:
  type: predict
  q: "In this report, Aim and Method were made bigger and bold by hand. Their style is still Body text. What will the headings panel list?"
  options: ["Aim and Method", "Nothing", "Only the title", "Aim, Method and the first sentence"]
  actual: "Nothing. The panel lists parts that have a heading style. Aim and Method only look like headings, so the app treats them as body text."
```

## Try: give them a heading style

```step
stage: run
insight: "Choosing the style and watching the panel fill settles the prediction: the style, not the look, makes a heading."
try: { playground: board, starter: "page.yml#run", height: 520 }
hint: ["Click the word Aim on the page. A row of controls appears above the page.", "Open the Style list and choose Heading 1. Do the same for Method."]
check: { type: board, text: "Give Aim and Method the Heading 1 style. Do they appear in the headings panel now?", when: "n_h1 = 2 and n_outline = 2 and n_fake = 0", explain: "Aim and Method are Heading 1, so the headings panel lists them. They already looked like headings, but only the style told the app what they are." }
```

Was your guess right? The two parts looked the same before and after. The only change was what the app knows about them.

## Worked example: choose the style

```step
stage: investigate
insight: "Choosing Heading 1 from the style list models the method. Mia makes the text bold by hand instead, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "What does a heading style tell the app that big bold text does not?"
      options: ["This line names a part of the document", "This line is important", "This line should be printed", "This line is the first one"]
      answer: 0
      feedback: [null, "Bold can show importance to a reader, but the app cannot tell why a line is bold.", "Every line prints, whatever its style.", "A heading can be anywhere in the document."]
      explain: "A heading style says this line names a part. The headings panel, the contents list and screen readers use that."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia's contents list is missing the Method. Click the line where Mia first goes wrong."
      answer: 2
      fault: logic
      misconception: fake-heading
      explain: "Line 2: Mia made the word bold and bigger by hand. That changes how it looks, but its style is still Body text, so the contents list cannot find it."
  - check:
      type: question
      q: "Why do apps and screen readers use headings?"
      options: ["To jump straight to a part without reading everything", "To make the file smaller", "To check the spelling", "To make the pages the same length"]
      answer: 0
      feedback: [null, "File size is not affected by styles.", "Spelling is checked in every part, whatever its style.", "Styles do not change the length of pages."]
      explain: "A reader, or a screen reader, can list the headings and jump to the part they want."
```

### Choosing Heading 1

```worked
\text{Select the line} :: Click the words you want to turn into a heading.
\text{Open the styles} :: In the styles list, choose Heading 1 instead of pressing Bold.
\text{Look at the panel} :: The headings panel lists the part, and a contents list can use it.
\text{A part inside it} :: A smaller part under Method, such as Equipment, gets Heading 2, so it sits under Method.
```

Now: what does a heading style tell the app?

### Find the mistake

### Why headings?

## Vary: pick the level

```step
stage: modify
insight: "Each task changes what is being labelled: a part inside a part, counting what the panel shows, and the words of a heading."
tasks:
  - check:
      type: question
      q: "Under the heading Method you add a part called Equipment. Which style does Equipment get?"
      options: ["Heading 2", "Heading 1", "Title", "Body text"]
      answer: 0
      feedback: [null, "Heading 1 is for the main parts, such as Method. Equipment sits inside Method.", "A document has one title, at the top.", "Body text is for paragraphs, not for names of parts."]
      explain: "A part inside a part gets the next level down: Heading 2 sits under Heading 1 in the headings panel."
  - check:
      type: number
      q: "A report has a Title, three Heading 1 parts and two Heading 2 parts. The headings panel lists headings, not the title. How many lines are in the panel?"
      answer: 5
      explain: "Three Heading 1 and two Heading 2 make 5. The title is not listed."
  - check:
      type: question
      q: "Which is the best Heading 1 for the part that says what you found out?"
      options: ["Results", "Read this next", "Here is some stuff about what happened to the beans", "RESULTS!!!"]
      answer: 0
      feedback: [null, "A heading names the part, so a reader knows what is there before reading.", "Too long: a heading is a short name for the part.", "Capitals and marks make it harder to read. The style already makes it stand out."]
      explain: "A short plain name, such as Results, tells the reader what the part holds."
```

### A part inside a part

### Count the panel

### Name the part

## Practise: fix a whole report

```step
stage: practise
insight: "Turning four fake headings into real ones on a page, then a question about the title."
try: { playground: board, starter: "page.yml#practise", height: 520 }
tasks:
  - starter: "page.yml#practise"
    hint: ["Four lines look like headings but are Body text. Click each one and change its style.", "Aim, Method and Results are Heading 1. Equipment sits inside Method, so it is Heading 2."]
    check: { type: board, text: "Give Aim, Method and Results the Heading 1 style, and Equipment Heading 2.", when: "st_2 = 2 and st_4 = 2 and st_7 = 2 and st_5 = 3 and n_h1 = 3 and n_h2 = 1 and n_skips = 0", explain: "Aim, Method and Results are Heading 1, and Equipment is Heading 2 inside Method. The headings panel now lists all four in order." }
  - check:
      type: question
      q: "The title at the top of the report is Bean growth report. Which style fits it best?"
      options: ["Title", "Heading 1", "Body text", "Heading 2"]
      answer: 0
      feedback: [null, "Heading 1 is for the main parts. The title names the whole document.", "Body text is for paragraphs.", "Heading 2 sits inside a Heading 1 part."]
      explain: "The whole document has one title. The main parts under it use Heading 1."
```

### Fix the headings

### The title

## Make: your own report

```step
stage: make
insight: "Building a small report with real headings has students use the move on their own words."
try: { playground: board, starter: "page.yml#make", height: 520 }
hint: ["Click a line, then type your own words in the box. Change Part one and Part two into names of parts, such as Aim and Results.", "Give each name the Heading 1 style, and give the title the Title style."]
check: { type: board, text: "Write your own title and two parts. Give the title the Title style and each part name the Heading 1 style, with a sentence under each.", when: "n_title = 1 and n_h1 >= 2 and n_outline >= 2 and n_empty = 0 and n_skips = 0", explain: "The title has the Title style and each part name is Heading 1, so the headings panel lists your parts. Change a name and the panel changes with it." }
```

Rename one of your headings. Does the panel follow?

## In your own app

```step
stage: make
tier: typical
insight: "Doing the same in Word or Docs shows the idea is the same in every app, and gets students used to the real tool."
check: { type: reflect, text: "In the word processor my school uses (Word, Google Docs or similar), I typed a title and two parts, and gave them the Title and Heading 1 styles from the styles list instead of making them bold. Then I opened the headings panel (the outline, or navigation pane) and saw my parts listed." }
```

Word, Google Docs and Pages all have a styles list near the top with Title, Heading 1 and Heading 2. Look for the headings panel under View, as the Navigation pane or Document outline. If it is empty, the lines are probably still Body text.
