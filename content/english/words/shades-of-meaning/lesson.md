---
order: 2
unit: warmup
title: Shades of meaning
summary: "Synonyms are words with similar meanings, and antonyms are opposites. Synonyms are not always interchangeable: they sit at different strengths and carry different feelings. An exact or specialist word can say more than a general one."
language: maths
node: [AC9E4LA11 n1, AC9E4LA11 n2, AC9E4LA11 n3, AC9E5LA08 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "Whispered, said and shouted are all ways of speaking. They sit at different places on the scale from quiet to loud." }
hook: "'Ate' and 'gobbled' both mean eating. Would you say your dinner was gobbled at a polite dinner party?"
---
**Synonyms** are words with a similar meaning. **Antonyms** are words with opposite meanings.

Synonyms are rarely identical. *Ate*, *nibbled* and *gobbled* all mean eating, but each pictures a different way of eating. The shade of meaning is part of what the writer says.

An **exact word** or a **specialist word** can say more than a general one. *Bird* is general; *kookaburra* is exact.

## Predict: which word fits?

```step
stage: predict
insight: "Predicting which synonym makes the walker sound tired shows that synonyms carry different shades of meaning."
check:
  type: predict
  q: "After a long day at school, Max ___ home. Which word makes him sound most tired?"
  options: ["trudged", "strolled", "walked", "wandered"]
  actual: "Trudged. All four words describe moving along on foot, but trudged suggests heavy, slow steps. Strolled and wandered sound relaxed, and walked is plain."
```

## Try: place each word on the scale

```step
stage: run
insight: "Placing six words for cold on a scale shows that synonyms sit at different strengths."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Which words describe a little cold? Which describe very cold?", "Picture the weather each word makes you think of."]
smaller:
  check: { type: question, q: "'Freezing' and 'cool' both describe cold. Which describes more cold?", options: ["Freezing", "Cool", "They describe the same amount"], answer: 0, feedback: [null, "Cool is mild, a comfortable kind of cold.", "Both are about cold, but they sit at different strengths."], explain: "Freezing is a much stronger word than cool. They are synonyms, but not interchangeable." }
check: { type: board, text: "Place each word for cold on the scale: mild, medium or extreme.", when: "n_right = 6 and n_wrong = 0", explain: "Cool and slightly cold are mild. Chilly and nippy are mild to medium, icy is medium to extreme, and freezing is extreme." }
```

Was *trudged* the one that sounded tired? Words with similar meanings still have different shades.

## Worked example: similar or opposite, and how strong?

```step
stage: investigate
insight: "Sorting pairs, catching a word with the wrong shade and seeing what an exact word adds shows that word choice carries meaning."
tasks:
  - check:
      type: sort
      q: "Is each pair of words synonyms or antonyms?"
      options: ["Synonyms (similar meaning)", "Antonyms (opposite meaning)"]
      items:
        - ["happy / glad", "Synonyms (similar meaning)", "Both describe a good feeling."]
        - ["happy / miserable", "Antonyms (opposite meaning)", "One is a good feeling and the other a bad one."]
        - ["begin / start", "Synonyms (similar meaning)", "Both mean to get something going."]
        - ["begin / finish", "Antonyms (opposite meaning)", "One means the first moment and the other the last."]
        - ["brave / cowardly", "Antonyms (opposite meaning)", "One faces danger and the other runs from it."]
        - ["huge / enormous", "Synonyms (similar meaning)", "Both mean very big."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's lake diary, one sentence per line. One line uses a word whose shade does not fit. Click it."
      answer: 3
      fault: logic
      misconception: synonyms-interchangeable
      explain: "Line 3 has 'shrieked softly'. Shrieked means a loud, sharp cry, so it cannot be soft. Nib swapped in a synonym for 'said' without checking its shade."
  - check:
      type: question
      q: "A science note says: 'The reptile basked on a warm rock.' What does 'reptile' tell the reader that 'animal' does not?"
      options: ["It names a particular group of animals", "It means the animal is dangerous", "It is just a harder word for the same thing"]
      answer: 0
      feedback: [null, "Many reptiles are harmless. The word names a group, not a danger.", "A general word and a specialist word are not the same. The specialist word is more exact."]
      explain: "Reptile narrows the animal to a particular group, so the reader knows more. Specialist words add precision."
```

### Synonym or antonym?

```worked
\text{Compare the two words} :: Same direction of meaning, or opposite?
\text{If similar} :: Check the strength and the feeling. Are they interchangeable?
\text{If opposite} :: The pair makes a contrast that sharpens meaning.
```

### Spot the word with the wrong shade

### What does the exact word add?

## Vary: choose the word that matches

```step
stage: modify
insight: "Choosing the weather word that matches what happened shows that strength is part of a word's meaning."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["How strong was the weather in each sentence?", "Which word matches that strength?"]
check: { type: board, text: "Choose the word that matches what happened.", when: "n_right = 2 and n_wrong = 0", explain: "A light drizzle is damp, not stormy. Wind that knocks down fences is stormy, not breezy." }
```

## Practise: how scared?

```step
stage: practise
insight: "Placing six words for fear on a scale applies the idea of strength to a new set of synonyms."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Which words describe a small worry?", "Which words describe being afraid for your safety?"]
check: { type: board, text: "Place each word for fear on the scale: mild, medium or strong.", when: "n_right = 6 and n_wrong = 0", explain: "Nervous and uneasy are mild. Scared is mild to medium, and frightened is medium to strong. Terrified and petrified are strong." }
```

## Make: describe a stormy day

In your own document, write a description of a stormy day, at least four sentences and about 40 words. Picture it at a beach. Choose exact words for what you see, hear and feel, and swap any plain word such as *big* or *bad* for a stronger, more exact one.

Here is one example: "The storm **roared** over the bay, and the waves **crashed** against the jetty. A **fierce** wind **whipped** the sand into our faces."

Then swap with a partner. Point to three exact words and say what each adds that a plainer word would not.

```step
stage: make
insight: "Describing a stormy day with exact words puts shades of meaning to use in a real piece of writing."
hint: ["Picture the storm at a beach. What do you see, hear and feel?", "Where could you swap a plain word like 'big' or 'bad' for an exact one?"]
check: { type: reflect, text: "I wrote a description of a stormy day with exact words, and a partner and I found three words that each add something a plainer word would not." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Using a new word in real writing shows whether the student knows its meaning."
check: { type: reflect, text: "I used a new word accurately in my own writing and could explain what it means and where I found it." }
```

## Wider: opposites that make a choice

```step
stage: make
tier: wider
insight: "Looking at antonyms in a persuasive poster applies the idea of contrast at the same level in a new text type."
check:
  type: reasoning
  q: "A poster says: 'Safe streets or dangerous streets? You decide.' How do the antonyms 'safe' and 'dangerous' set up the choice, and what do they leave out?"
  placeholder: "The two words make ... They leave out ..."
  models:
    - title: "A strong answer"
      text: "The two opposites make the choice look simple: one good, one bad. They leave out all the in-between, like streets that are mostly safe but have one problem."
    - title: "A different view that also works"
      text: "Safe and dangerous are strong opposites, so the reader feels pushed towards one side. The poster does not say how safe, or for whom, or what would change it."
  criteria: ["I said how the antonyms set up two sides.", "I said what the pair leaves out.", "I linked the opposites to the poster's purpose."]
  explain: "Antonyms set up a clear contrast, which is persuasive. They can also hide the shades in between."
```
