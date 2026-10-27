---
order: 4
unit: core
title: "Words that push a feeling"
summary: "Some words report and some words push a feeling. Emotive words, such as marvellous or ghastly, praise or criticise, and they try to move the reader toward a view. A writer's word choice positions the reader for or against the topic."
language: maths
node: [AC9E6LA02 n1, AC9E6LA02 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A park and a car park. One pair of words praises and the other criticises." }
hook: "'The road carries 2,000 cars a day.' 'The road chokes the town with endless traffic.' Which one wants you to feel something?"
---
Some sentences **report**: *The new road will carry 2,000 cars a day.* Some sentences **push a feeling**: *The new road will choke the town with endless traffic.*

Words that push a feeling are called **emotive words**. Some praise (*marvellous*, *charming*) and some criticise (*ghastly*, *grim*). A writer picks them to move the reader toward a view, so the words **position** the reader for or against the topic.

Emotive words are not always wrong. A review or a speech can use them on purpose. The skill is to notice them and ask what they are doing.

## Predict: which one pushes a feeling?

```step
stage: predict
insight: "Predicting which sentence pushes a feeling previews how word choice positions a reader."
check:
  type: predict
  q: "Which sentence tries to make the reader feel worried?"
  options: ["The river rose by 2 metres.", "The river savagely swallowed the street.", "The river is near the street."]
  actual: "'The river savagely swallowed the street.' Savagely and swallowed make the river sound like a hungry animal. The other two only report."
```

## Try: colour the pushing words

```step
stage: run
insight: "Colouring praising words one colour and criticising words another shows how one text can push in two directions."
try: { playground: board, starter: "text.yml#run", height: 360 }
hint: ["Which words praise? Which criticise?", "Which words are only describing?"]
smaller:
  check: { type: question, q: "Which word pushes a feeling more: 'big' or 'monstrous'?", options: ["big", "monstrous", "They push equally"], answer: 1, feedback: ["Big only describes size.", null, "Monstrous adds fear. Big does not."], explain: "Monstrous makes the reader feel fear. Big only describes size." }
check: { type: board, text: "Colour the praising words one colour and the criticising words another.", when: "chains_ok = 2 and n_stray = 0", explain: "Magnificent and exciting praise the centre. Hideous and monster criticise it. The text pushes in two directions, one for each side." }
```

What does each colour want you to think about the centre?

## Worked example: praise, criticise or neither?

```step
stage: investigate
insight: "Sorting words by direction, finding an emotive word in a news report and seeing how words position a reader shows how word choice moves a reader."
tasks:
  - check:
      type: sort
      q: "Does each word praise, criticise, or only describe?"
      options: ["Praises", "Criticises", "Only describes"]
      items:
        - ["large", "Only describes", "It names a size."]
        - ["magnificent", "Praises", "It admires the thing."]
        - ["shabby", "Criticises", "It dislikes the thing."]
        - ["wooden", "Only describes", "It names a material."]
        - ["delightful", "Praises", "It admires the thing."]
        - ["dreadful", "Criticises", "It dislikes the thing."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's news report on a council meeting, one sentence per line. A news report should only report. One sentence pushes a feeling. Click it."
      answer: 3
      fault: logic
      misconception: emotive-in-news
      explain: "Line 3 says 'Furious residents stormed out'. Furious and stormed push a feeling. A report would say that residents left the hall."
  - check:
      type: question
      q: "A review says the room was 'cramped and filthy'. How does that wording position the reader?"
      options: ["It does not position the reader, because it lists facts", "Against the room, so the reader feels disgusted", "In favour of the room, with warm words"]
      answer: 1
      feedback: ["Cramped and filthy judge the room. They are not counts.", null, "Cramped and filthy are not warm words."]
      explain: "Cramped and filthy are emotive. They steer the reader to dislike the room."
```

### Pushing or reporting?

```worked
\text{Read the word} :: Does it only describe, or does it praise or criticise?
\text{Ask: what feeling?} :: Admiration, disgust, fear, anger?
\text{Ask: who is it steering?} :: The word positions the reader for or against.
```

### Spot the pushing word in the report

### How does the wording position the reader?

## Vary: choose the pushing word

```step
stage: modify
insight: "Choosing the word that praises or criticises shows how single words change what a reader feels."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Which word shows admiration?", "Which word shows dislike?"]
check: { type: board, text: "Choose the word that fits what each sentence needs to do: praise the library, then criticise the pie.", when: "n_gaps_right = 2", explain: "Splendid praises the library. Greasy criticises the pie." }
```

## Practise: colour the pushing words

```step
stage: practise
insight: "Colouring praise for one bike and criticism for the others applies the idea to an advertisement."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Which words praise the Ripple?", "Which words criticise the other bikes?"]
check: { type: board, text: "Colour the words that praise the Ripple one colour and the words that criticise other bikes another.", when: "chains_ok = 2 and n_stray = 0", explain: "Sleek and effortless praise the Ripple. Clunky and ugly criticise the other bikes. The advertisement pushes the reader toward one bike." }
```

## Make: one place, two feelings

```step
stage: make
insight: "Writing about one place twice, once to praise and once to criticise, puts emotive words to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Which words would make a reader like the canteen?", "Which would make a reader dislike it?"]
check: { type: board, text: "Write at least four sentences about the canteen: two that praise it, then two that criticise it, with no more than one exclamation mark.", when: "n_sentences >= 4 and n_exclaims <= 1", explain: "You wrote two views of one place. Ask a partner to circle the words that push each feeling." }
```

The board counts sentences and exclamation marks. It cannot find your emotive words, so ask a partner to circle them.

## In your own writing

```step
stage: make
tier: typical
insight: "Spotting emotive words in a real text puts the idea to use outside the board."
check: { type: reflect, text: "I read a real advertisement or review and found two emotive words and what each one pushes." }
```

## Wider: one product, two audiences

```step
stage: make
tier: wider
insight: "Describing one product for two audiences applies emotive words to purpose and audience at the same level."
check:
  type: reasoning
  q: "Write one sentence selling the same school jumper to parents and one to students. Say what each emphasises and which word does it."
  placeholder: "To parents ... To students ..."
  models:
    - title: "A strong answer"
      text: "To parents: 'This hard-wearing jumper keeps its shape year after year.' (hard-wearing pushes value.) To students: 'This soft jumper is comfy all day.' (soft and comfy push feeling.)"
    - title: "A different view that also works"
      text: "To parents: 'A reliable, warm jumper at a fair price.' To students: 'The coolest jumper in the yard.' The words match what each audience cares about."
  criteria: ["I wrote two sentences.", "I said what each emphasises.", "I named a word that does the pushing."]
  explain: "The same thing is described with different emotive words for different audiences."
```
