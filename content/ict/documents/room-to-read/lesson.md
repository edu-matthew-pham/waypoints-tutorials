---
order: 4
unit: look
title: Room to read
summary: "Layout is for the reader. Space between parts, wide enough margins and text that starts at the same place on every line make a page easy to follow. Squeezing everything in to save paper, or centring paragraphs to look neat, makes the page harder to read."
language: maths
hook: "A report is a page and a bit long. A student squeezes it onto one page. Her teacher says it is now harder to read. How can less paper be worse?"
---
Once the parts are right, the **layout** is how they sit on the page. Three things matter most for a reader:

- **Space between parts**, so each part is easy to find.
- **Margins**, the empty edge of the page, so lines are not too long to follow.
- **Alignment**: paragraphs that start at the same left edge are easy to read, while centred paragraphs start somewhere new on every line.

## Predict: what helps the reader?

```step
stage: predict
insight: "Committing to a layout tests the move: space is for the reader, not wasted paper."
check:
  type: predict
  q: "A page is crowded: tight space between parts, narrow margins and centred paragraphs. You open the space between parts, widen the margins and align the paragraphs to the left. Is the page easier to read?"
  options: ["Yes, even though it now takes more room", "No, it is longer so it is worse", "No change", "Only if the font gets smaller"]
  actual: "Yes. The page takes more room, but each part is easier to find and each line is easier to follow."
```

## Try: open up the page

```step
stage: run
insight: "Changing the layout and looking at the page settles the prediction: more space and a left edge help the eye."
try: { playground: board, starter: "page.yml#run", height: 620 }
hint: ["Use the buttons above the page: Space between parts, Margins and Body text.", "Choose Open space, Normal margins and Left."]
check: { type: board, text: "Open up the space between parts, use normal margins and align the body text to the left.", when: "spacing_n = 3 and margin_n >= 2 and align_n = 1", explain: "Open space between parts, margins that are not narrow and a left edge make each part and each line easier to find." }
```

Was your guess right? The page is longer now, and easier to read. White space is not wasted: it tells the reader where one thing ends and the next begins.

## Worked example: why more room

```step
stage: investigate
insight: "Opening up the layout models the method. Jay squeezes the page to save paper, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Why is a paragraph that starts at the same left edge on every line easier to read than a centred one?"
      options: ["The eye knows where each new line starts", "It uses less paper", "It looks fancier", "It is shorter"]
      answer: 0
      feedback: [null, "The amount of paper does not change what the reader sees.", "Centred text can look neat, but it is harder to follow.", "The words are the same."]
      explain: "With a left edge the eye jumps straight back to the same place. With centred lines it has to hunt for the start of each one."
  - check:
      type: bug
      code: "working.txt#jay"
      text: "Jay's teacher says the report is hard to read. Click the line where Jay first goes wrong."
      answer: 2
      fault: logic
      misconception: cram-the-page
      explain: "Line 2: Jay narrowed the margins and tightened the space to save paper. That made the page crowded. White space is part of the layout, not wasted paper."
  - check:
      type: sort
      q: "Does each choice help a reader, or make the page harder to read?"
      options: ["Helps", "Harder to read"]
      items:
        - ["Space between a heading and the part above it", "Helps", "It shows where one part ends."]
        - ["Lines of text that run edge to edge of a wide page", "Harder to read", "Long lines make it hard to find the start of the next one."]
        - ["Body text that starts at the same left edge", "Helps", "The eye finds the next line quickly."]
        - ["No gap between paragraphs", "Harder to read", "The parts run into each other."]
```

### Opening up the page

```worked
\text{Space between parts} :: Open it, so each part is easy to find and the page can be scanned.
\text{Margins} :: Keep them wide enough that lines are not too long to follow.
\text{Alignment} :: Align body text to the left, so each line starts at the same edge.
\text{The look is for the reader} :: Fewer pages is not the goal. Use more room if the reader needs it.
```

Now: why does a left edge help?

### Find the mistake

### Helps or harder?

## Vary: pick the layout

```step
stage: modify
insight: "Each task changes the content: a title, a long paragraph and a plan to shrink the page."
tasks:
  - check:
      type: question
      q: "A title at the top of a poster should be centred. Why is this one of the few times centring is fine?"
      options: ["It is one short line, so there is no left edge to follow", "Titles must always be centred", "It uses less space", "The reader reads titles last"]
      answer: 0
      feedback: [null, "Titles can be left-aligned too. Centring is a choice for short lines.", "It makes no difference to space.", "Titles are read first."]
      explain: "Centring is fine for a few short words. For a paragraph of lines, it gets harder."
  - check:
      type: question
      q: "Your report is 3 pages and the limit is 2. What is the best first thing to try?"
      options: ["Cut the words that are not needed", "Make the margins very narrow", "Make the text very small", "Remove all the space between parts"]
      answer: 0
      feedback: [null, "Narrow margins make the lines long and the page crowded.", "Small text is harder to read.", "That makes every part run into the next."]
      explain: "Cut words first. Squeezing the layout makes the page harder to read."
  - check:
      type: question
      q: "Which page is easiest to read?"
      options: ["Normal margins, open space between parts and left-aligned text", "Narrow margins, tight space and centred text", "No margins and no space", "Wide margins, but all the text centred"]
      answer: 0
      feedback: [null, "Narrow margins and centred paragraphs both make it harder.", "Without space, nothing stands apart.", "Centred paragraphs are hard to follow, whatever the margin."]
      explain: "Room between parts, margins that are not narrow and a left edge give the reader the best page."
```

### A title

### Too long

### The best page

## Practise: make it easier to read

```step
stage: practise
insight: "Opening a crowded page, then choosing margins for a page with long lines."
try: { playground: board, starter: "page.yml#practise", height: 620 }
tasks:
  - starter: "page.yml#practise"
    hint: ["The page is crowded. Look at the buttons above it.", "Open the space between parts, and align the body text to the left."]
    check: { type: board, text: "Open the space between parts to Open and align the body text to the left.", when: "spacing_n = 3 and align_n = 1", explain: "With open space and a left edge, each part is easy to find and each line is easy to follow." }
  - starter: "page.yml#practise-wide"
    hint: ["The lines of text run almost edge to edge.", "Margins make the lines shorter. Try Wide."]
    check: { type: board, text: "The lines are too long to follow. Use the margins to shorten them.", when: "margin_n = 3", explain: "Wide margins make the lines shorter, so the eye can follow them and find the start of the next one." }
```

### Open it up

### Shorten the lines

## Make: your own layout

```step
stage: make
insight: "Setting a layout for a report of their own has students use the move on their own words."
try: { playground: board, starter: "page.yml#make", height: 620 }
hint: ["Try each setting and look at the page. Which one would you like to read?", "Keep the space between parts at Normal or Open and align the body text to the left."]
check: { type: board, text: "Set up the page the way you would like to read it: space between parts at Normal or Open, margins not narrow and body text aligned left.", when: "spacing_n >= 2 and margin_n >= 2 and align_n = 1 and n_h1 >= 1", explain: "Room between the parts, margins that are not narrow and a left edge are what most readers need." }
```

Show a partner. Is there anything they find hard to read?

## In your own app

```step
stage: make
tier: typical
insight: "Changing spacing and margins in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my word processor I changed the space between paragraphs, the page margins and the alignment of a paragraph, and chose the settings that were easiest to read." }
```

Margins are under Layout (Word) or File › Page setup (Docs). Space between paragraphs and line spacing are in the paragraph settings, and alignment is a button in the toolbar. The defaults are usually a good starting point.
