---
order: 8
unit: reader
title: Mixing text types
summary: "Writers mix text types on purpose. A charity letter opens with a true story so the reader cares before the reasons arrive; a novel is told as diary entries so the reader learns things day by day; a recipe starts with a memory. A hybrid works when each borrowed part does a job for the main purpose, and the story links back to the point."
language: maths
node: [AC9E6LA03 n3, AC9E8LA03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A recipe that starts with a memory: the recount makes you care about the lemonade, then the instructions tell you how to make it." }
hook: "A letter asking for donations starts: 'Last July, floodwater filled Jun's house in the night.' Is it a story, or something else?"
---
Writers often **mix** text types on purpose. The result is a **hybrid**.

- A charity letter opens with a **true story**, so the reader cares before the reasons arrive.
- A novel is told as **diary entries**, so the reader learns things day by day.
- A recipe starts with a **memory**, so the reader wants to make it.

A hybrid works when each borrowed part does a job for the **main purpose**, and the story links back to the point.

## Predict: story or something else?

```step
stage: predict
insight: "Guessing the purpose of a text that opens with a story shows students that the opening type isn't always the main type."
check:
  type: predict
  q: "A letter starts: 'Last July, floodwater filled Jun's house in the night. For three nights his family slept in the school hall.' What is the letter most likely trying to do?"
  options: ["Persuade the reader to help or act", "Tell a story for fun", "Explain how floods happen", "Report on the weather last July"]
  actual: "Persuade. It opens with a recount so the reader pictures a real family, and then it asks for something. The story is there to serve the argument."
```

## Try: label the parts of a hybrid

```step
stage: run
insight: "Labelling a story, a position, a reason and a call to act in one text shows a recount working inside an argument."
try: { playground: board, starter: "text.yml#run", height: 450 }
hint: ["Click a paragraph, then choose Story, Position, Reason or Call to act.", "Which paragraph says what the writer wants? Which tells you what to do this week?"]
smaller:
  check: { type: question, q: "'Every school in our region should keep an emergency kit.' What is this paragraph doing?", options: ["Saying what the writer wants", "Telling what happened to Jun", "Telling the reader what to do this week"], answer: 0, feedback: [null, "The story about Jun is the first paragraph.", "That is the last paragraph, the call to act."], explain: "Should gives the writer's position: what they want to happen." }
check: { type: board, text: "Label the story, the position, the reason and the call to act.", when: "n_right = 4 and n_wrong = 0", explain: "Jun's story is a recount, borrowed to make the reader care. Then come the argument's own parts: the position, a reason, and a call to act. The story links straight to the position: the hall needed a kit." }
```

Were you right about the letter? It was an argument that opened with a recount.

## Worked example: why mix?

```step
stage: investigate
insight: "Asking why a story leads an argument, catching Nib's story that never links back, and matching hybrids to the types they combine show hybrids as choices for a purpose."
tasks:
  - check:
      type: question
      q: "Why might an argument start with a short true story?"
      options: ["So the reader cares about a real person before the reasons arrive", "Because every argument must start with a story", "To fill space before the real argument", "So the writer doesn't need any reasons"]
      answer: 0
      feedback: [null, "Many arguments start with a position. A story is one choice.", "If the story were filler, it would weaken the argument.", "The story makes the reader care; the reasons still have to convince them."]
      explain: "A story makes the issue real. The reasons and the call to act then have someone to be about."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's argument, one sentence per line. Nib opens with a story. Click the first line where the reader finds out the story has nothing to do with the argument."
      answer: 3
      fault: logic
      misconception: hybrid-no-link
      explain: "Line 3: the argument is about longer lunches, but the baby bird story never connects to it. Nib needs to link it ('We missed lunch helping the bird. With a longer break...') or cut it."
  - check:
      type: match
      q: "Match each hybrid to the types it combines."
      pairs:
        - ["A novel told as diary entries", "A story built from dated recounts"]
        - ["A charity letter that opens with a true story", "An argument with a recount inside"]
        - ["A comic that shows how a volcano erupts", "An explanation told with characters and pictures"]
        - ["A recipe blog post that starts with a holiday memory", "Instructions with a recount in front"]
      explain: "Each hybrid borrows the stages of one type and puts them to work for another."
```

### Borrowing for a purpose

```worked
\text{Find the main purpose} :: What is the whole text trying to do?
\text{Find the borrowed part} :: Which part comes from another text type?
\text{Ask what job it does} :: Does it hook, make the reader care, or make the steps easier to follow?
\text{Check the link} :: Does the borrowed part connect back to the main point?
```

Now: why start an argument with a story?

### Find Nib's slip

### What does each mix?

## Vary: a story as diary entries

```step
stage: modify
insight: "Ordering diary entries by date shows how a story borrows the recount's time order, and the question asks what the diary form adds."
try: { playground: board, starter: "text.yml#vary", height: 420 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Click an entry, then press Move up or Move down.", "Use the dates at the start of each entry."]
    check: { type: board, text: "Put the diary entries in date order.", when: "in_order = 1", explain: "The dates do the job time words do in a recount: they put the events in order. Each entry is a small recount, and together they tell a story." }
  - check:
      type: question
      q: "Why might a writer tell this story as diary entries instead of an ordinary story?"
      options: ["The reader hears the narrator's feelings as they happen, and knows only what she knows each day", "Diary entries are shorter, so they are easier to write", "Diaries don't need an orientation", "Stories can't include dates"]
      answer: 0
      feedback: [null, "Easy to write isn't the reason a writer chooses a form.", "Each entry still sets the scene with a date, and the first entry orients the reader.", "Plenty of stories include dates. The diary form does more than add them."]
      explain: "The diary form puts the reader inside each day: worried on Monday, sad on Saturday, relieved at the new school. That's an effect an ordinary story told afterwards can't give in the same way."
```

### Put the entries in order

### Why a diary?

## Practise: a museum web page

```step
stage: practise
insight: "Labelling four types on one web page shows a hybrid can mix many types, each doing a job for the visitor."
try: { playground: board, starter: "text.yml#practise", height: 450 }
hint: ["Click a paragraph, then choose Report, Recount, Instructions or Persuasion.", "Ask what each paragraph does: describe the museum, retell a visit, tell you how to book, or try to convince you?"]
check: { type: board, text: "Label each paragraph of the web page with its text type.", when: "n_right = 4 and n_wrong = 0", explain: "The first paragraph describes the gaol (report). The Hillside visit is a recount. Booking is instructions. Don't miss the night tours persuades. Together they serve one purpose: getting you to visit." }
```

## Make: an argument that opens with a story

```step
stage: make
insight: "Writing a hybrid with a story that links to the position makes the mixing a deliberate choice."
try: { playground: board, starter: "text.yml#make", height: 430 }
hint: ["Choose something you'd like your school to change. Start with a short true or made-up story about one person it affects.", "Then give your position and at least one reason. Make sure the story connects to the position. Label every part."]
check: { type: board, text: "Write a story, a position and at least one reason, and label each part.", when: "has_story >= 1 and has_position = 1 and has_reason >= 1 and n_empty = 0", explain: "Your argument borrows a recount to make the reader care. Ask a partner: does the story lead straight into your position?" }
```

The board checks that each part is there and labelled. Whether your story links to your point is for you and a partner to judge.

## In your own reading

```step
stage: make
tier: typical
insight: "Spotting hybrids in real texts shows students how common they are."
check: { type: reflect, text: "I found a real text that mixes types (an advert, a web page, a picture book or a news feature) and told a partner which types it mixes and what job each part does." }
```

## Another hybrid

```step
stage: make
tier: wider
insight: "Analysing a hybrid in a new medium applies the same question to another context."
check:
  type: reasoning
  q: "A breakfast cereal ad on TV is told as a short story about a family's busy morning, and ends with the cereal's name and 'Start your day right.' Which text types does it mix, and why might the advertiser mix them?"
  placeholder: "It mixes ... and ... The advertiser might ..."
  models:
    - title: "A strong answer"
      text: "It mixes a story (a family's morning, with characters and a small problem) with persuasion (the slogan at the end). The story makes viewers recognise their own busy mornings, so when the cereal appears as the answer, the persuasion feels like help rather than a sales pitch."
    - title: "A different view that also works"
      text: "It's mostly persuasion that borrows a story's shape: a problem (no time for breakfast), a solution (the cereal) and a happy ending. Advertisers use stories because people remember stories better than lists of reasons."
  criteria: ["I named the types the ad mixes.", "I said what job the story does for the advert.", "I linked the story to the persuasive purpose."]
  explain: "A hybrid is judged by its main purpose. Here the story serves the persuasion: it makes the viewer care, then the ad offers its answer."
```
