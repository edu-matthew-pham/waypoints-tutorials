---
order: 4
unit: words
title: Say it again, on purpose
summary: "Repeating a key word on purpose, or swapping in a word that means the same (or the opposite), keeps the reader on the same thing from sentence to sentence. Repetition is a tool, not a mistake: it is clearer than it when it could point to two things."
language: maths
node: [AC9E6LA04 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "Heatwave is repeated, and hot spell means the same, so the text stays on the heat. Cool change and cooler start an opposite chain that answers the heat chain." }
hook: "You were told not to repeat words. So why does a good report say volcano five times?"
---
You may have been told not to repeat words. But writers repeat **key words** on purpose: each repeat tells the reader "still the same thing". A word that means the same (a **synonym**) does the same job with a little variety. Together, the repeats make a **chain** that runs through the text. A word that means the **opposite** (an **antonym**) starts a second chain that runs against the first, which ties them together.

## Predict: which is easier to follow?

```step
stage: predict
insight: "Committing to which version is clearer challenges the rule 'never repeat a word' before the lesson explains why."
check:
  type: predict
  q: "Version A: 'The kelp forest is home to many animals. Sea urchins eat it. Rock lobsters eat them, which protects it.' Version B: 'The kelp forest is home to many animals. Sea urchins eat the kelp. Rock lobsters eat the urchins, which protects the forest.' Which is easier to follow?"
  options: ["Version B, which repeats the key words", "Version A, which avoids repeating", "Both are just as easy", "Neither makes sense"]
  actual: "Version B. In A, it and them could point to several things. B repeats kelp, urchins and forest, so the reader always knows which one is meant."
```

## Try: colour the chains

```step
stage: run
insight: "Colouring the repeats of each key word makes the threads holding the paragraph together visible."
try: { playground: board, starter: "text.yml#run", height: 330 }
hint: ["Pick Chain 1 and click every word for the volcano. Then pick Chain 2 and click every word for the ash.", "Volcanic ash belongs to the ash chain, even though it also says volcanic."]
smaller:
  check: { type: question, q: "Which word in the paragraph is the same thing as volcanoes?", options: ["volcano", "ash", "planes", "lava"], answer: 0, feedback: [null, "Ash comes out of a volcano. It gets its own chain.", "Planes are affected, but they aren't the volcano.", "Lava comes out of a volcano, like ash."], explain: "Volcano is the same key word repeated, so it goes in the volcano chain." }
check: { type: board, text: "Colour two chains: every word for the volcano in one colour, every word for the ash in another.", when: "chains_ok = 2 and n_stray = 0", explain: "Two chains run through the paragraph: volcanoes, volcano and volcano, and ash, ash and volcanic ash. Each repeat tells the reader the text is still on that thing." }
```

Were you right about the kelp? The repeats you coloured here did the same job as kelp, urchins and forest.

## Worked example: find the chains

```step
stage: investigate
insight: "Modelling how to find a text's key words and their repeats gives the method. Nib's slip is a pronoun where repeating the key word would have been clearer."
tasks:
  - check:
      type: question
      q: "In 'The drought lasted three years. During the dry spell, farmers sold their sheep.', what is dry spell doing?"
      options: ["It means the same as drought, so it continues the chain", "It starts a new topic", "It is a mistake: the writer should not change the word", "It points forward to the sheep"]
      answer: 0
      feedback: [null, "Dry spell is the same thing as the drought, not something new.", "Swapping in a word with the same meaning is a good move: same chain, a little variety.", "Dry spell is about the drought, which came before."]
      explain: "Dry spell is a synonym for drought, so the chain continues with a little variety."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph, one sentence per line. Click the first line where a reader can't tell what Nib means, because Nib should have repeated a key word."
      answer: 3
      fault: logic
      misconception: never-repeat
      explain: "Line 3: 'They eat it' could mean the urchins eat the kelp, or the rock lobsters eat the urchins. Repeating the key words ('The urchins eat the kelp') makes it clear."
  - check:
      type: question
      q: "When is repeating a key word better than using it or they?"
      options: ["When it or they could point to more than one thing", "Never: always use it or they", "Always: never use it or they", "Only in the first sentence"]
      answer: 0
      feedback: [null, "It and they are great when only one thing fits. When two fit, repeat the word.", "Repeating in every sentence gets heavy. Use it where the reader can't go wrong.", "Repeats can go anywhere the reader needs them."]
      explain: "Use a pointing word when only one thing fits. Repeat the key word when two things could fit."
```

### Finding a chain

```worked
\text{Find the key word} :: What is the text about? That word, such as volcano, is the start of a chain.
\text{Follow the repeats} :: Find each place it is repeated, swapped for a word that means the same, or set against its opposite.
\text{Check each gap} :: Where the chain goes quiet, can the reader still tell what the text is about?
\text{Repeat where needed} :: If it or they could point to two things, repeat the key word instead.
```

Now see how a word with the same meaning carries a chain.

### Find Nib's slip

### Repeat or point?

## Vary: same and opposite

```step
stage: modify
insight: "Changing what counts as a chain (synonyms and opposites, not just exact repeats) widens the move."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["Chain 1 is the dry words: drought, dry spell, dry. Chain 2 is the wet words, which are the opposite.", "Rain, rainfall and floods all belong to the wet chain."]
check: { type: board, text: "Colour the dry words in one chain and the wet words in another.", when: "chains_ok = 2 and n_stray = 0", explain: "Dry words and wet words run as two chains. Because they are opposites, the wet chain keeps answering the dry one, and that ties the paragraph together." }
```

## Practise: three chains

```step
stage: practise
insight: "A paragraph with three chains of mixed repeats and synonyms makes the move independent."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["The paragraph is about a bushfire, the people who fight it, and the trees. Use one chain for each.", "Firefighters and crews are the same people. Gums and eucalypts are the same trees."]
check: { type: board, text: "Colour three chains: the fire, the firefighters and the trees.", when: "chains_ok = 3 and n_stray = 0", explain: "Fire, blaze and flames; firefighters, crews and volunteers; gum trees, eucalypts and trees. Three chains, each with repeats and words that mean the same." }
```

## Make: your own chain

```step
stage: make
insight: "Writing a paragraph with a deliberate chain and then colouring it is the production half of the node."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own and write four sentences about one thing, such as a sport, an animal or a place.", "Repeat its name at least once and use a word that means the same at least once. Then colour the chain."]
check: { type: board, text: "Write at least four sentences about one thing, then colour a chain of at least three words for it.", when: "is_written = 1 and max_chain >= 3", explain: "Your chain shows the reader your paragraph stays on one thing. Is any it or they unclear? Repeat the word there." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Rereading a piece of class writing for its chains shows whether the key words hold it together."
check: { type: reflect, text: "In a piece of my own writing, I highlighted the key word and its repeats and synonyms. Where an it or they could mean two things, I repeated the key word instead." }
```
