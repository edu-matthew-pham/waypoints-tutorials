---
order: 3
unit: prepare
title: From script to cue cards
summary: "A script is for writing the talk. A cue card is for saying it. Students pick the few words that bring each part back to mind, keep a card to a few words, and keep the key words to a small part of the script. They find the card that is really a script, cut three scripts down on the cue board, and print cards for a talk of their own."
language: maths
node: [AC9E6LY07 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "Three parts of a script and one cue card for each, holding only the key words." }
hook: "If you read your talk word for word, you look at the page. If you say it, you look at the people. What would you put on a card to say it?"
---
Once the script is written, you do not read it out. You say it, and a **cue card** reminds you what comes next.

A good cue card:

- holds only the **key words**: the few words that bring the whole part back to mind,
- is short enough to take in at a glance, so you can look up and keep speaking,
- has one card for each part of the talk (the opening, each point and the close).

The talk is no shorter. The words are still yours. The card is just the cue.

## Predict: how few words?

```step
stage: predict
insight: "Predicting how much of a script a speaker needs on a card sets up the idea that a cue is a reminder, not a copy."
check:
  type: predict
  q: "Nib has a 90-word script for a one-minute talk, in four parts. How many words does Nib really need on the cue cards to say it all?"
  options: ["All 90, in case Nib forgets a word", "None, because Nib wrote the script", "About half, so Nib can follow it closely", "About 15 to 20, a few for each part"]
  actual: "About 15 to 20. A speaker who has written and practised a script remembers it from a few key words. More words on the card pull the eyes down to the page."
```

## Try: cut the script to cards

```step
stage: run
insight: "Picking key words from a short script on the cue board shows that each card needs only the words that bring its part back to mind."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Click the words you would need to say each part. Click one again to take it off.", "If you only had these words in front of you, could you say the whole part?"]
smaller:
  check: { type: question, q: "Which is better on a cue card for the opening of a talk about a new school garden?", options: ["Good morning, everyone. Today I would like to talk about our new school garden.", "Today I would", "school garden"], answer: 2, feedback: ["That is the whole sentence. The speaker would read it, not say it.", "Those words would not bring the topic back to mind.", null], explain: "The words that carry the idea are school garden. The rest, the speaker can say without a cue." }
check: { type: board, text: "Pick key words so that every section has a card, and no card holds more than 6 words.", when: "n_cards = n_sections and n_over = 0", explain: "You gave each part of the talk a short card. Cover the script and look only at your cards: could you say each part?" }
```

Were you right about how few words you need? The board only counts: whether the words you picked are the right ones is for you to test by speaking.

## Worked example: what a card is for

```step
stage: investigate
insight: "Asking what a card is for, finding Nib's card that is really a script and choosing what to put on a card for a fact that has to be right show what a cue is and is not."
tasks:
  - check:
      type: question
      q: "What is a cue card for?"
      options: ["Holding the whole script so the speaker can read it", "Reminding the speaker what comes next, so they can look up and speak", "Showing the audience the main points", "Proving the speaker wrote the talk"]
      answer: 1
      feedback: ["A card full of script pulls the eyes down. The speaker reads and does not talk to the listeners.", null, "That is a slide's job. A card is for the speaker.", "A card has nothing to do with proof. It is a tool for saying the talk."]
      explain: "A cue card gives the speaker the next idea, so their eyes and voice can stay with the listeners."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here are Nib's four cue cards, one per line. Click the card that is really a script."
      answer: 3
      fault: logic
      misconception: cards-are-script
      explain: "Card 3 is the script with almost nothing cut. Nib will read it, not say it. It needs only the key words, such as: Second, nobody checks, months."
  - check:
      type: question
      q: "Nib's talk says 17 drink bottles were handed in last term. What should go on the card for that part?"
      options: ["Nothing, because Nib will remember", "The whole sentence about the bottles", "17 bottles, since Nib needs to get that exactly right", "The word 'bottles'"]
      answer: 2
      feedback: ["Numbers and names are the things speakers forget when they are nervous.", "That is the script again. Only the fact that must be right needs to be there.", null, "That cues the topic but not the number, which is what a nervous speaker forgets."]
      explain: "Put on the card what is easy to forget and has to be exact: a number, a name, a hard word. The rest comes back from the key words."
```

### What goes on a card

```worked
\text{Cut the script into its parts} :: Opening, each point, close.
\text{Find the key words} :: The few words that bring the part back.
\text{Keep the exact facts} :: Numbers, names and hard words.
\text{Keep a card short} :: A glance, not a read.
\text{Test it} :: Cover the script. Can you say each part?
```

Now: what is a cue card for?

### Find the card that is a script

### What has to be on the card?

## Vary: a card for each part

```step
stage: modify
insight: "Cutting a different script with a lower limit on words per card shows that a card can be shorter than students first expect."
try: { playground: board, starter: "text.yml#vary", height: 540 }
hint: ["Which words would you need to start each part?", "Which words are the ones you could not afford to forget?"]
check: { type: board, text: "Pick key words so that every section has a card, and no card holds more than 5 words.", when: "n_cards = n_sections and n_over = 0", explain: "Each card is short enough to take in at a glance. If you could say the whole part from it, the card is doing its job." }
```

## Practise: keep to a small part of the script

```step
stage: practise
insight: "Adding the quarter rule makes students choose among key words, not tick every word that seems useful."
try: { playground: board, starter: "text.yml#practise", height: 600 }
hint: ["Which of your key words could you leave out and still remember the part?", "Which one word could stand for a whole sentence?"]
check: { type: board, text: "Pick key words so that every section has a card, no card holds more than 8 words, and the key words are no more than a quarter of the script.", when: "n_cards = n_sections and n_over = 0 and key_pct <= 25", explain: "The board counts a card in every section, none over 8 words, and key words at or below a quarter of the script. Cover the script and say each part from the cards to see whether your key words are enough." }
```

The board counts how many words you picked and how long each card is. It cannot tell if they are the right words. Cover your script and say a part from the card to find out.

## Make: cards for a talk of your own

```step
stage: make
insight: "Cutting a script for a talk students will really give, then printing cards, moves the skill to their own work."
try: { playground: board, starter: "text.yml#make", height: 620 }
hint: ["Which words bring each part back?", "Which number or name must be right?"]
check: { type: board, text: "Pick key words so that every section has a card, no card holds more than 8 words, and the key words are no more than a quarter of the script.", when: "n_cards = n_sections and n_over = 0 and key_pct <= 25", explain: "The board counts a card in every section, none over 8 words, and key words at or below a quarter of the script. Press Print cue cards, cut them out and say the talk to a partner using only the cards." }
```

The board has a script to practise on. To use a script of your own, press **Use my own script**, paste it with one paragraph for each part, then press **Done writing**. **Print cue cards** makes the cards (two across a page), and **Print highlighted script** prints the whole script with your key words marked.

## In your own class

```step
stage: make
tier: typical
insight: "Saying a real talk from the cards, once, in class, is the test of the cards."
check: { type: reflect, text: "I said part of a talk from my cards, with the script covered, and changed one card that did not work." }
```

## Wider: another way to prompt yourself

```step
stage: make
tier: wider
insight: "Comparing cards with a highlighted script or a memory plan shows that cue cards are one of several ways to deliver a talk."
check: { type: reflect, text: "I tried my talk from a highlighted script instead of cards, and said which way helped me look up more, and why." }
```
