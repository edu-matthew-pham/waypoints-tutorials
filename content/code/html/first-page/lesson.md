---
title: Your first web page
summary: Predict, run and change a short page, then style it with CSS.
language: html
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-html" 8124
  url: http://127.0.0.1:8124/index.html
  ready: HTML code
  layout: full
pacing:
  keyDelayMs: 25
---
Every web page is text with **tags** in it. A tag like `<h1>` tells the browser what the text is, and the browser decides how to show it.

## Predict

```step
stage: predict
code: page.html#animal
reveal: true
app: true
query: { code: "" }
clip:
  - caption: The browser reads the tags and builds the page.
  - type:
      into: HTML code
      text: "@page.html#animal"
  - expect: { selector: "#preview-text", contains: "They love to play." }
```

Read the code. What will the page show? Which word will look different, and why?

## Run

```step
stage: run
code: page.html#animal
try: { playground: html, starter: "page.html#animal", height: 360 }
check: { type: reflect, text: "I can say which tag made the heading and which made the bold word." }
unlocks: [h1-heading, p-paragraph, strong-bold]
```

Compare the page with your prediction.

## Investigate

```step
stage: investigate
code: page.html#list
app: true
query: { code: "" }
clip:
  - caption: Headings, a list and a link, all built from tags.
  - type:
      into: HTML code
      text: "@page.html#list"
  - expect: { selector: "#preview-text", contains: "Read more on Wikipedia." }
try: { playground: html, starter: "page.html#list", height: 380 }
check:
  type: question
  q: "In <a href=\"https://example.com\">Visit</a>, where does the web address go?"
  options: ["Between the tags, where it says Visit", "In the href part of the opening tag", "In a separate <h1> tag", "It is added by the browser"]
  answer: 1
  explain: "Right: href holds the address, and the words between the tags are what people click."
unlocks: [ul-list, a-link, h2-subheading]
```

- Which tag made the bigger heading? What is the difference between `<h1>` and `<h2>`?
- Each `<li>` sits inside `<ul>`. What do you think `ul` stands for?
- The link text says "Wikipedia". Where does the web address go?

## Modify

```step
stage: modify
try: { playground: html, starter: "page.html#modify", height: 360 }
```

Change the heading, then add a second paragraph. Change one thing at a time and check the page.

## Style it with CSS

```step
stage: modify
code: page.html#style
try: { playground: html, starter: "page.html#style", height: 380 }
check: { type: reflect, text: "I can explain what the h1 { color: darkgreen; } rule does." }
unlocks: [style-block, rule, color, background-color]
```

The `<style>` block holds **CSS**: `selector { property: value; }`. Change `darkgreen` to another colour, then add a rule that makes the paragraph text bigger with `font-size: 20px;`.

## Make

```step
stage: make
try: { playground: html, starter: "page.html#make", height: 400 }
```

Build a page about you: a heading, a paragraph, a list and a link. Then style it.
