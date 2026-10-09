---
order: 1
unit: structure
title: Tags and nesting
summary: Label text with tags, put tags inside tags, and see what the browser does with a mistake.
language: html
hook: "Every website you have visited, from your school page to a shop, starts as text with tags like these."
---
Every web page is text with **tags** in it. A tag like `<h1>` tells the browser what the text *is*, and the browser decides how it looks.

## Predict

```step
stage: predict
code: page.html#sports
insight: "Students expect the page to copy the code's line breaks; committing to a number first makes the surprise stick."
check:
  type: predict
  q: "How many lines of normal text (not counting the heading) will the page show?"
  kind: number
  actual: "2 lines. The browser joins the three lines of the first paragraph into one."
```

Read the code. Each `<p>` starts a paragraph and `</p>` ends it. How many lines of normal text will the page show?

## Run

```step
stage: run
code: page.html#sports
try: { playground: html, starter: "page.html#sports", height: 360 }
insight: "Tags, not line breaks, shape the page: a new paragraph needs its own <p>."
check: { type: reflect, text: "I can explain why the line breaks in my code did not show on the page." }
unlocks: [h1-heading, p-paragraph, strong-bold]
```

Compare the page with your prediction. Then put the cursor after `Bring a hat` and press Enter a few times: the page does not change. Now give `Bring a hat and water.` its own `<p>` and `</p>`, and watch it move to a new line.

## Investigate

```step
stage: investigate
code: page.html#parts
insight: "Tags open and close around their content, and a tag inside another tag closes first, like boxes inside boxes."
unlocks: [h2-subheading, em-emphasis]
tasks:
  - check:
      type: match
      q: "Match each part of the page with its job."
      pairs:
        - ["<h1>Sports day</h1>", "the main heading of the page"]
        - ["<h2>What to bring</h2>", "a heading for one section"]
        - ["<p> … </p>", "a paragraph"]
        - ["<strong>Friday</strong>", "an important word"]
        - ["<em>lots</em>", "a word said with emphasis"]
      explain: "Each tag says what its text is. The browser chooses the look: big and bold for headings, bold for strong, italic for em."
  - check:
      type: question
      q: "In <p>Sports day is on <strong>Friday</strong>.</p>, which closing tag comes first?"
      options: ["</p>", "</strong>", "They close at the same time", "The order does not matter"]
      answer: 1
      explain: "<strong> opens inside the paragraph, so it closes first. Tags nest like boxes: the inner box closes before the outer one."
  - check:
      type: bug
      code: page.html#overlap
      answer: 3
      fault: syntax
      misconception: tag-overlap
      text: "This page looks right in the browser, but one line breaks the nesting rule. Click it."
      explain: "On line 3, <em> opens inside <strong>, so </em> must come before </strong>: <strong><em>9 am</em></strong>. The browser quietly repairs it, which is why the page looks fine. Do not rely on that: other tools may read it differently."
  - check:
      type: question
      q: "This code forgets one closing tag. What does the browser do?"
      options: ["It shows an error message and stops", "It shows the page, but the second paragraph is bold too", "It shows a blank page", "It shows the page exactly as intended"]
      answer: 1
      fault: syntax
      misconception: html-error-message
      explain: "Browsers never stop on a mistake: they show their best guess. The <strong> is never closed, so the bold carries on into the next paragraph. That is why you check the page after every change."
```

`<h2>` is a smaller heading for a section, and `<em>` marks a word you would say with emphasis.

### Match the parts

What does each tag in this page do?

### Which closes first?

Look at the `<p>` line with `<strong>` inside it.

### Spot the broken nesting

This page shows correctly, but it breaks a rule.

### A missing tag

```html
<p>Races start at <strong>9 am.</p>
<p>Bring a hat.</p>
```

## Modify

```step
stage: modify
insight: "Changing a working page one small step at a time, and checking the page after each change."
try: { playground: html, starter: "page.html#modify", height: 360 }
tasks:
  - hint: "Change only the words between the tags. Leave the tags as they are."
    check: { type: reflect, text: "I changed the event and the day, and the page still looks right." }
  - hint:
      - "A section heading uses <h2>, just like <h1> but smaller."
      - "Put each <h2> on its own line, just above the paragraph it describes."
    check: { type: code, text: "Add an <h2> heading for each section.", rules: { tags: [h2] } }
  - hint: "Put <em> before the word and </em> after it, inside the paragraph's <p> and </p>."
    check: { type: code, text: "Mark one word with <em>.", rules: { tags: [em] } }
```

### Change the event

Make this a notice for a different event on a different day.

### Add two sections

Add an `<h2>` heading above each paragraph: `When` above the first, `What to bring` above the second.

### Emphasise a word

Give one word in the last paragraph emphasis with `<em>`.

## Make

```step
stage: make
try: { playground: html, starter: "page.html#make", height: 400 }
hint:
  - "Start with the <h1> title, then add one section at a time: an <h2>, then its <p>."
  - "Check the page after each tag you add. If everything turns bold, look for a missing </strong>."
check:
  type: code
  text: "Write a notice with a title, sections, paragraphs and one important word."
  rules: { tags: [h1, h2, p, strong] }
unlocks: [comment]
```

Write a notice for an event at your school (a concert, a fair, a match): an `<h1>` title, two sections with `<h2>` headings, a paragraph in each, and one important word in `<strong>`.

The grey line in the editor is a **comment**: `<!--` and `-->` wrap a note that the browser ignores. Delete it or keep it.

## Tidy up a newsletter article

```step
stage: modify
try: { playground: html, starter: "page.html#newsletter", height: 440 }
insight: "A real page is the same tags inside a standard wrapper; only what is in <body> shows on the page."
```

This is a whole page, as a website would store it. The first few lines are the same on every page: `<!DOCTYPE html>`, `<html>`, `<head>` (information about the page, such as the title on the browser tab) and `<body>`. Copy them as they are for now; only what is inside `<body>` shows on the page.

The article came out as one long paragraph. Split it into paragraphs, add an `<h2>` heading for the book fair, and make the most important words `<strong>`.
