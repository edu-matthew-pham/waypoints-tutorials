---
order: 2
unit: warmup
optional: true
title: Features that fit the job
summary: "Each kind of text has features that fit its purpose. Imaginative texts have characters, a setting and a problem; informative texts have facts and technical words; persuasive texts have opinions, reasons, strong words and a call to act. Among informative texts, a report says what something is like and an explanation says how or why something happens."
language: maths
node: [AC9E4LA03 n2, AC9E4LA03 n3, AC9E4LA03 n4, AC9E4LY03 n1, AC9E4LY03 n2, AC9E4LY03 n3, AC9E5LY03 n1, AC9E5LY03 n2, AC9E5LY03 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "One topic, three purposes: a fact about thunder informs, should persuades, and a character in a scene tells a story." }
hook: "'Thunder shook the windows.' Is that the start of a story, a science report or an advert? How can you tell from one sentence?"
---
Texts are written for different **purposes**, and each kind has **features** that fit its job.

- **Imaginative** texts entertain: characters, a setting, a problem, describing words and dialogue.
- **Informative** texts inform: facts, technical words and a calm tone. A **report** says what something is like; an **explanation** says how or why something happens.
- **Persuasive** texts try to change your mind: an opinion, reasons, strong words such as **must** and **best**, and a call to act.

## Predict: one sentence

```step
stage: predict
insight: "Guessing the kind of text from one sentence shows students they already read features as clues."
check:
  type: predict
  q: "'Every student should bring a water bottle on hot days.' What kind of text is this sentence most likely from?"
  options: ["Persuasive", "Imaginative", "Informative", "You can't tell from one sentence"]
  actual: "Persuasive. Should gives the writer's opinion about what students ought to do. That one word is a persuasive feature."
```

## Try: three purposes, one tree

```step
stage: run
insight: "Three paragraphs on the same topic make the purpose, not the topic, decide the kind of text."
try: { playground: board, starter: "text.yml#run", height: 420 }
hint: ["Click a paragraph, then choose Imaginative, Informative or Persuasive.", "All three are about the gum tree. Ask what each one is trying to do: tell a story, give facts, or change your mind?"]
smaller:
  check: { type: question, q: "'The council must not cut down our old gum tree.' What is this sentence trying to do?", options: ["Change the reader's mind", "Give a fact about gum trees", "Tell a story about the tree"], answer: 0, feedback: [null, "Must not is an opinion about what the council should do.", "There's no character or event here."], explain: "Must not gives the writer's opinion, so it is trying to persuade." }
check: { type: board, text: "Label each paragraph as imaginative, informative or persuasive.", when: "n_right = 3 and n_wrong = 0", explain: "Ava and the rusty tin are a character and a mystery: imaginative. The eucalypt facts inform. Must not, the reasons and Write to the council today persuade." }
```

Were you right about the water bottle sentence? Should did the same job as must not in the gum tree paragraph.

## Worked example: features as clues

```step
stage: investigate
insight: "Sorting features by purpose gives a checklist; the report and explanation sort splits informative texts; Nib's slip is an opinion inside a report."
tasks:
  - check:
      type: sort
      q: "Which kind of text does each feature belong to?"
      options: ["Imaginative", "Informative", "Persuasive"]
      items:
        - ["characters and a problem to solve", "Imaginative", "Stories need someone to follow and something to happen."]
        - ["dialogue: what characters say", "Imaginative", "Dialogue brings characters to life."]
        - ["technical words, such as eucalypt", "Informative", "Technical words name things exactly."]
        - ["headings and facts", "Informative", "Headings help a reader find the facts they want."]
        - ["the writer's opinion, with reasons", "Persuasive", "An argument needs a position and reasons for it."]
        - ["a call to act: Write to the council today", "Persuasive", "Persuasive texts often end by telling the reader what to do."]
      explain: "Each feature helps a text do its job: stories need characters, information needs facts, and persuasion needs an opinion the reader can be won over to."
  - check:
      type: sort
      q: "Is each sentence from a report (what something is like) or an explanation (how or why something happens)?"
      options: ["Report", "Explanation"]
      items:
        - ["Volcanoes are openings in the Earth's crust where melted rock comes out.", "Report", "It says what a volcano is."]
        - ["Some volcanoes are tall cones, and others are wide and low.", "Report", "It describes what volcanoes are like."]
        - ["When gas builds up underground, it pushes melted rock upwards.", "Explanation", "It tells how something happens: when, then."]
        - ["As a result, the volcano erupts.", "Explanation", "As a result links a cause to what it causes."]
      explain: "A report describes and classifies: what something is and what it is like. An explanation follows a process or a cause: how or why something happens."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's information report, one sentence per line. Click the line that doesn't fit an informative text."
      answer: 3
      fault: logic
      misconception: feature-wrong-type
      explain: "Line 3: 'I think koalas are the cutest' is an opinion. A report gives facts, so the reader can trust it. Opinions belong in persuasive texts or reviews."
```

### What fits which?

```worked
\text{Ask what the text is for} :: To entertain, to inform, or to persuade?
\text{Look for features} :: Characters and dialogue, facts and technical words, or opinions and reasons?
\text{Check they fit} :: Every feature should help the text do its job.
\text{Report or explanation?} :: What something is like, or how and why it happens?
```

Now sort the features.

### Report or explanation?

### Find Nib's slip

## Vary: persuasive words and a new form

```step
stage: modify
insight: "Colouring persuasive words, then meeting a character and a poster, shows features can be small words, characters or whole layouts."
try: { playground: board, starter: "text.yml#vary", height: 300 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Click Chain 1, then click each word that shows the writer's strong opinion.", "There are four: one in each sentence. Look for words such as must and best."]
    check: { type: board, text: "Colour the four words that show the writer's strong opinion.", when: "chains_ok = 1 and n_stray = 0", explain: "Must, best, terrible and should all push the reader towards the writer's view. A report would leave them out." }
  - check:
      type: question
      q: "A water-saving poster shows a cartoon frog called Drip sitting on a tap and saying 'Turn me off!' Why does the poster use a character?"
      options: ["A friendly character makes the message stick", "Frogs are what the water-saving poster is about", "Every poster has to have a character on it", "To tell a story with a beginning, middle and end"]
      answer: 0
      feedback: [null, "The poster is about saving water. Drip is there to deliver the message.", "Many posters have no character at all.", "One line from Drip isn't a story. Drip just carries the message."]
      explain: "Persuasive texts often borrow a character so the message feels friendly and sticks. The character delivers the message rather than starring in a story."
  - check:
      type: question
      q: "The gum tree paragraph is turned into a poster for the school gate. What changes?"
      options: ["The form changes; the persuasive features stay", "It becomes an informative text about gum trees", "It no longer needs any reasons, only a picture", "Nothing changes at all, not even the layout"]
      answer: 0
      feedback: [null, "A poster can still persuade. The purpose hasn't changed.", "A persuasive poster still needs reasons, even if they are short.", "The layout, size and pictures change. That is the form."]
      explain: "A poster is a form. The persuasive features go with the purpose, so they stay, even if the words get shorter and pictures are added."
```

### Colour the persuasive words

### A character with a message

### Same purpose, new form

## Practise: report or explanation

```step
stage: practise
insight: "Telling reports from explanations on two topics makes 'what is it like?' versus 'how or why?' a reliable test."
try: { playground: board, starter: "text.yml#practise", height: 440 }
hint: ["Ask of each paragraph: does it describe what something is like, or how or why something happens?", "Words such as so, when and because often mark an explanation."]
check: { type: board, text: "Label each paragraph as a report or an explanation.", when: "n_right = 4 and n_wrong = 0", explain: "The first and third describe what penguins and bats are like: reports. The second and fourth say how penguins swim fast and how bats find insects: explanations." }
```

## Make: three purposes

```step
stage: make
insight: "Writing the same topic three ways makes students choose features on purpose."
try: { playground: board, starter: "text.yml#make", height: 420 }
hint: ["Pick one topic: an animal, a place or the weather. Click each box and write one sentence.", "Make one imaginative (a character), one informative (a fact) and one persuasive (an opinion). Then label each."]
check: { type: board, text: "Write three sentences on one topic, one of each kind, and label them.", when: "has_story = 1 and has_info = 1 and has_persuade = 1 and n_empty = 0", explain: "The topic is the same, but each sentence does a different job. Ask a partner to label yours without looking at your labels." }
```

The board checks that you wrote and labelled all three. Your partner checks whether each one has the right features.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of their writing for features that don't fit its purpose builds the habit."
check: { type: reflect, text: "I took an information text I wrote and checked that every sentence fits: facts, not opinions or story moments. I moved or cut anything that didn't fit." }
```
