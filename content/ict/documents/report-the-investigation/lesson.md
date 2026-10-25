---
order: 9
unit: report
title: Report the investigation
summary: "A challenge that uses the whole course. A class grew beans in the dark, in shade and in the sun, and has the results. Turn them into a one-page report with real headings, a numbered method and a table, give it a look with styles, then turn the story into three slides that can be read from the back, with a picture that helps and a credit."
language: maths
hook: "The class has the bean results from the Working with data course, and a teacher who wants a one-page report and a three-slide talk by Friday. What do you do first?"
---
A class asked: **does light change how tall bean plants grow?** They grew beans in the dark, in shade and in the sun, and measured them after four days. On average the beans grew **4.6 cm in the dark, 9.6 cm in the shade and 13 cm in the sun**.

Your job is to report on it twice, for two audiences: a **report** for someone who will read it at a desk, and **three slides** for a talk. Use what the course taught: styles, lists and tables, room to read, one idea per slide, pictures that help, size and contrast, and credits.

## Predict: what does the report need?

```step
stage: predict
insight: "Planning the parts of a report comes before building it."
check:
  type: predict
  q: "A one-page report on this investigation needs parts a reader can jump to. Which set of Heading 1 parts fits best?"
  options: ["Aim, Method, Results, Conclusion", "Beans, Pots, Soil, Ruler", "Page 1, Page 2, Page 3", "Introduction, Introduction, Introduction"]
  actual: "Aim, Method, Results, Conclusion. Each names a job the report does, so a reader can jump straight to the part they want."
```

## Structure: the report's parts

```step
stage: practise
insight: "Giving real styles to a report's parts, steps and table uses headings, lists and tables together."
try: { playground: board, starter: "page.yml#structure", height: 700 }
hint: ["Give the title the Title style, and Aim, Method, Results and Conclusion the Heading 1 style.", "The method steps happen in order, so make them a numbered list. Then press First row is a header for the table."]
check: { type: board, text: "Structure the report: a Title, Aim, Method, Results and Conclusion as Heading 1, the three method steps as a numbered list and a header row on the table.", when: "n_title = 1 and n_h1 = 4 and n_number = 3 and table_header = 1 and n_fake = 0 and n_skips = 0", explain: "The report has real headings a reader can jump to, steps with an order that show it, and a table whose first row names the columns." }
```

You did not change what the report says. You changed what each part is, so the app and the reader can use it.

## Look: styles and room to read

```step
stage: practise
insight: "Setting the look through styles and the layout for the reader uses the second and fourth lessons."
try: { playground: board, starter: "page.yml#look", height: 700 }
hint: ["In the Styles panel, make Heading 1 22 pt and Heading 2 16 pt (Title is already bigger).", "Then open the space between parts, use normal margins and align the body text left."]
check: { type: board, text: "Give the report a look with styles only: Heading 1 at 22 pt, Body text at 12 pt and no by-hand changes. Then open the space between parts, use normal margins and align the body text left.", when: "size_h1 = 22 and size_body = 12 and n_direct = 0 and spacing_n = 3 and margin_n = 2 and align_n = 1", explain: "The look is in the styles, so it matches everywhere, and the layout gives the reader room." }
```

## Slides: three ideas, three slides

```step
stage: practise
insight: "Splitting the story into slides by idea, with titles and few words, uses the fifth lesson."
try: { playground: board, starter: "page.yml#slides", height: 760 }
hint: ["There are three ideas: what we did, what we found, what it means. Start a new slide at the start of each.", "Press Add below: Title to add a title for the new slides, and write what each slide says. Then shorten any long bullet."]
check: { type: board, text: "Make three slides, one for each idea, each with a title and at most three short bullets (no more than 25 words on a slide).", when: "n_slides = 3 and n_untitled = 0 and max_bullets <= 3 and max_words <= 25 and n_empty = 0", explain: "Each slide has one idea, a title that says it and a few words. Everything else you say aloud." }
```

## Show: picture, credit and contrast

```step
stage: practise
insight: "Adding a picture with alt text and a credit, and choosing colours, uses the sixth to eighth lessons together."
try: { playground: board, starter: "page.yml#show", height: 760 }
hint: ["Click the picture and write alt text that says what it shows. Then write its credit from the card below.", "Choose colours so the contrast is strong, and make sure the text is at least 24 pt and fits."]
check: { type: board, text: "Write alt text and a credit for the picture (card below), make it larger, and choose colours that are strong enough to read from the back, with all text at least 24 pt and on the slide.", when: "n_alt = 1 and n_credit = 1 and n_big = 1 and contrast_ok = 1 and font_min >= 24 and n_overflow = 0", explain: "The picture shows the idea, has alt text and a credit, and the slide can be read from the back of the room." }
```

Card for the picture: maker Anika Rao, found at garden-club.example, licence CC BY 4.0 (pretend, for practice).

## Judge: is it a good report?

```step
stage: make
insight: "Choosing what a report should say, and no more than the data shows, is the last step of the report."
check:
  type: question
  q: "Which sentence should the Conclusion part of the report say?"
  options: ["On average, the beans grown in the sun were taller (about 13 cm) than those in the dark (about 5 cm), for these plants.", "Sunlight makes every bean in the world grow taller.", "Light is the only thing that affects how tall beans grow.", "The beans did not grow in the dark."]
  answer: 0
  feedback: [null, "The data covers only these beans, so it cannot say what every bean does.", "The test changed only light, so it cannot say nothing else matters.", "The dark beans grew to about 5 cm, so they did grow."]
  explain: "The best sentence says what the averages show, for these plants, with numbers, and no more than the data supports."
```

## In your own apps

```step
stage: make
tier: typical
insight: "Making the report and talk in the real apps uses every move of the course in the real tools."
check: { type: reflect, text: "In my own apps I made a one-page report and a three-slide talk about an investigation (the beans, or my own class's results): real headings and styles, a numbered list and a table with a header row, one idea and a title on each slide, a picture with alt text, and a credit for anything I did not make." }
```

Use your own class's results if you have them, or the bean results. Check the headings panel, step back from the slides, and read the credit line out loud: does it say who, where and the licence?
