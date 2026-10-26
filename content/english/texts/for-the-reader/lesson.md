---
order: 7
unit: reader
title: Built for a reader
summary: "Writers choose structure and language together for a particular reader. A beach safety poster for young children uses a question to hook them, short commands (Swim, Stay, Ask) and you; a guide for parents adds reasons and technical detail. Judging a text means asking whether its choices work for the reader it was written for."
language: maths
node: [AC9E6LY03 n1, AC9E6LY03 n2, AC9E6LY03 n3, AC9E8LA03 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "Walk, Return and ask are short commands that tell a young reader exactly what to do, and your and you speak straight to them." }
hook: "A sign says 'Bathers are advised to remain within the designated flagged area.' Would a seven-year-old follow it?"
---
Writers choose **structure** and **language** together, for a particular **reader**.

For young readers, a writer might use:

- a **question** or big heading to hook them;
- **short commands** that say exactly what to do (Swim, Stay, Ask);
- **you** and **your**, to speak straight to the reader.

For adults, the same writer might add **reasons**, **technical words** and more detail. A text works when its choices fit its reader.

## Predict: which sign?

```step
stage: predict
insight: "Choosing between two signs for a young reader shows students they already judge language by its audience."
check:
  type: predict
  q: "Which beach sign would a seven-year-old most likely follow? A: 'Swim between the red and yellow flags.' B: 'Bathers are advised to remain within the designated flagged area at all times.'"
  options: ["A", "B", "Both equally", "Neither"]
  actual: "A. It is short, it tells the reader exactly what to do, and it names the flags they can see. B says the same thing in words written for adults."
```

## Try: colour the reader's features

```step
stage: run
insight: "Colouring the commands and the words that speak to the reader shows how a text for children is built from small, deliberate choices."
try: { playground: board, starter: "text.yml#run", height: 300 }
hint: ["Chain 1: you and your, the words that speak straight to the reader. Chain 2: the commands, the words that tell the reader what to do.", "There are four you or your words and five commands. Commands often start a sentence or come straight after a comma."]
smaller:
  check: { type: question, q: "In 'Stay close to the lifeguards', which word tells the reader what to do?", options: ["Stay", "close", "lifeguards"], answer: 0, feedback: [null, "Close says where, not what to do.", "Lifeguards are who to stay near."], explain: "Stay is a command: it tells the reader exactly what to do." }
check: { type: board, text: "Colour the words that speak to the reader (Chain 1) and the commands (Chain 2).", when: "chains_ok = 2 and n_stray = 0", explain: "You and your speak straight to the reader. Swim, Stay, float, raise and Ask are commands that say exactly what to do. Together they make the poster easy for a child to follow." }
```

Were you right about the signs? Sign A works because it uses the same kind of command you just coloured.

## Worked example: does it work for the reader?

```step
stage: investigate
insight: "Matching features to effects, catching Nib's adult sentence in a children's poster, and asking why parents get more show the choices are made for a reader."
tasks:
  - check:
      type: match
      q: "Match each feature to what it does for a young reader."
      pairs:
        - ["Short sentences", "Easy to read quickly"]
        - ["Commands such as Swim and Stay", "Say exactly what to do"]
        - ["You and your", "Speak straight to the reader"]
        - ["A big heading", "Catch the eye from a distance"]
      explain: "Each feature is chosen for what it does for the reader, not because posters always have it."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's beach poster for Year 2, one line each. Click the line that doesn't suit its reader."
      answer: 3
      fault: logic
      misconception: wrong-audience
      explain: "Line 3 is written for adults: long, technical (concentrated, seaward, surf zone) and with no instruction. A Year 2 reader needs something like 'If the water pulls you out, don't fight it.'"
  - check:
      type: question
      q: "A beach safety guide for parents adds a paragraph on how to spot a rip current, with a diagram. Why include it for parents but not on the Year 2 poster?"
      options: ["Parents can use the detail to keep children away from rips; a young child needs one simple rule", "Parents enjoy longer texts", "Diagrams are too hard to draw for children", "Year 2 students don't go to the beach"]
      answer: 0
      feedback: [null, "Length isn't the goal. Detail is added because this reader can use it.", "Plenty of children's texts have diagrams. The question is what this reader needs.", "They do go. That's why they get a poster."]
      explain: "The structure grows or shrinks for the reader. Parents can act on the detail; a young child needs a rule they can remember in the water."
```

### Choices for a reader

```worked
\text{Picture the reader} :: Who are they? How old? What do they already know?
\text{Choose the structure} :: A hook, then steps? Or reasons and detail?
\text{Choose the language} :: Short commands and you, or technical words and full explanations?
\text{Judge it} :: Would this reader understand it and act on it?
```

Now match each feature to what it does.

### Find Nib's slip

### Why more for parents?

## Vary: the stages of a poster

```step
stage: modify
insight: "Labelling a safety poster's stages shows structure, not only words, is chosen for the reader: a hook, steps to follow, then a reminder."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["Click a sentence, then choose Hook, Step or Reminder.", "The question at the top pulls the reader in. The last line repeats the main idea."]
check: { type: board, text: "Label the hook, the steps and the reminder.", when: "n_right = 5 and n_wrong = 0", explain: "The question hooks the reader, the three commands are the steps to follow, and the reminder repeats why the flags matter. A poster read in seconds needs exactly this shape." }
```

## Practise: who is it for?

```step
stage: practise
insight: "Sorting sun safety paragraphs by reader makes students read the features as clues to the audience."
try: { playground: board, starter: "text.yml#practise", height: 430 }
hint: ["Click a paragraph, then choose Young children or Adults.", "Look for short commands and exclamation marks, or reasons, numbers and technical words such as UV and SPF."]
check: { type: board, text: "Label each paragraph by the reader it was written for.", when: "n_right = 4 and n_wrong = 0", explain: "The hat and shade paragraphs use short commands, you and exclamation marks for children. The sunscreen and UV paragraphs give numbers, reasons and technical words for adults." }
```

## Make: rewrite for a younger reader

```step
stage: make
insight: "Rewriting an adult text for a child makes students choose structure and language for a reader, which they then judge."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own. Rewrite the sun safety text for a Year 2 student.", "Use at least three short sentences. Try commands (Wear, Put on, Play) and you or your."]
check: { type: board, text: "Rewrite the text for a Year 2 reader in at least three sentences.", when: "is_written = 1 and n_sentences >= 3", explain: "Read your version to a partner as if they were seven. Would they understand every word? Would they know what to do?" }
```

The board checks that you rewrote it. Use this checklist with a partner: short sentences, commands, you or your, and no word a seven-year-old wouldn't know.

## In your own writing

```step
stage: make
tier: typical
insight: "Naming the reader before writing makes the choices deliberate."
check: { type: reflect, text: "Before my next piece of writing, I wrote one line about who will read it, and chose at least one structure and one language feature for that reader." }
```

## Another reader, another form

```step
stage: make
tier: wider
insight: "Moving the same message into a spoken form for a new audience applies the same choices in a new context."
check:
  type: reasoning
  q: "The school wants the beach safety message read out as a 30-second announcement before the Year 5 and 6 beach excursion. What would you change from the Year 2 poster, and why?"
  placeholder: "I would change ... because the listeners ..."
  models:
    - title: "A strong answer"
      text: "Listeners can't look back at a sign, so I'd say the most important rule first and repeat it at the end. I'd keep the commands short, but explain one reason, because Year 5 and 6 students can handle why: 'Swim between the flags, because that's where the lifeguards are watching.'"
    - title: "A different view that also works"
      text: "I'd start with a question to get their attention, like the poster's hook, then give three rules with First, Next and Finally, so they can count them as they listen. I'd drop the picture words, because there's nothing to look at."
  criteria: ["I changed something because it is spoken, not read.", "I changed something because the listeners are older.", "I gave a reason for each change."]
  explain: "A new form and a new audience mean new choices: a listener can't reread, and older students can take a reason with each rule."
```
