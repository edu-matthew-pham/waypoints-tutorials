---
order: 2
unit: warmup
title: Opening phrases and shared owners
summary: "A long phrase at the start of a sentence, such as After the long walk through the bush, is followed by a comma so the reader knows where the main part begins. The same phrase at the end needs no comma. For owners, the apostrophe goes on the last name when two people share one thing (Mia and Ravi's story) and on each name when they each have their own (Mia's and Ravi's stories)."
language: maths
node: [AC9E5LA09 n1, AC9E5LA09 n2, AC9E5LA09 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "The comma comes after the whole opening phrase, just before the main part of the sentence starts." }
hook: "'Beside the pond near the shed a heron stood.' Where does the reader need a pause?"
---
A **phrase** is a group of words with no verb of its own. When a long phrase **opens** a sentence, a comma follows it:

- *Across the paddock behind the school, a mob of kangaroos grazed.*

Put the same phrase at the end and the comma goes:

- *A mob of kangaroos grazed across the paddock behind the school.*

(Very short openers, such as *At dawn*, are often left without a comma. This lesson uses longer phrases, where the comma helps.)

Shared owners:

- **One thing shared:** the apostrophe goes on the last name. *Mia and Ravi's story* is one story they wrote together.
- **One each:** each name has its own. *Mia's and Ravi's stories* are a story each.

## Predict: where does the comma go?

```step
stage: predict
insight: "Predicting where the comma goes shows students that the break comes after the whole opening phrase, not after its first words."
check:
  type: predict
  q: "'After the storm on Tuesday night the creek rose.' Where does the comma go?"
  options: ["After night", "After storm", "After Tuesday", "After creek"]
  actual: "After night. 'After the storm on Tuesday night' is the whole opening phrase, and the main part, 'the creek rose', starts after it."
```

## Try: comma or no comma

```step
stage: run
insight: "Choosing a comma or none for the same kind of phrase at the start and at the end shows the comma belongs to the opening position."
try: { playground: board, starter: "text.yml#run", height: 380 }
hint: ["Find the opening phrase. Where does the main part of the sentence start?", "Look at where the phrase sits in the sentence: the start, or the end?"]
smaller:
  check: { type: question, q: "'In the middle of the night, a storm woke us.' Which words are the opening phrase?", options: ["In the middle of the night", "a storm woke us", "storm woke"], answer: 0, feedback: [null, "That is the main part of the sentence, with its own verb.", "That is only two words from the main part."], explain: "The opening phrase is 'In the middle of the night'. The comma comes right after it." }
check: { type: board, text: "Choose a comma or no comma for each box.", when: "n_right = 3 and n_wrong = 0", explain: "A long phrase at the start is followed by a comma. The same kind of phrase at the end of the sentence needs none." }
```

Were you right about the creek? The comma goes after the whole opening phrase.

## Worked example: where the comma goes, and who owns what

```step
stage: investigate
insight: "Sorting sentences by whether they need a comma, catching a missing one and matching owner phrases to their meaning shows each mark has a reason."
tasks:
  - check:
      type: sort
      q: "Does each sentence need a comma?"
      options: ["Comma after the opening phrase", "No comma needed"]
      items:
        - ["Behind the library near the car park Max found a bike.", "Comma after the opening phrase", "The phrase opens the sentence, so a comma follows it."]
        - ["Max found a bike behind the library near the car park.", "No comma needed", "The phrase is at the end, so no comma is needed."]
        - ["Across the wide river on a rope bridge the group walked.", "Comma after the opening phrase", "The phrase opens the sentence, so a comma follows it."]
        - ["The group walked across the wide river on a rope bridge.", "No comma needed", "The phrase is at the end, so no comma is needed."]
        - ["In the cupboard under the stairs Ravi hid the torch.", "Comma after the opening phrase", "The phrase opens the sentence, so a comma follows it."]
        - ["Ravi hid the torch in the cupboard under the stairs.", "No comma needed", "The phrase is at the end, so no comma is needed."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's camp diary, one sentence per line. One line has an opening phrase with no comma after it. Click it."
      answer: 2
      fault: logic
      misconception: opening-phrase-comma
      explain: "Line 2 opens with 'On the long bus ride to the camp', so a comma should follow it. Line 4 already has its comma."
  - check:
      type: match
      q: "Match each phrase to what it means."
      pairs:
        - ["the teacher's room", "a room for one teacher"]
        - ["the teachers' room", "a room for more than one teacher"]
        - ["Ben and Ava's boat", "one boat they share"]
        - ["Ben's and Ava's boats", "a boat each"]
      explain: "The apostrophe goes after the owner. For a shared thing it goes on the last name; for things they each own, each name gets one."
```

### Where the comma goes

```worked
\text{Find the opening phrase} :: Which words come before the main part of the sentence?
\text{Check its length} :: A long opening phrase needs a comma after it.
\text{Check its position} :: The same phrase at the end needs no comma.
```

### Spot the missing comma

### Who owns it?

## Vary: shared or separate

```step
stage: modify
insight: "Choosing the owner form for a shared thing and for separate things shows where the apostrophe goes in each case."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["How many robots are there, and how many owners?", "If each owner has their own, each name needs its own apostrophe."]
check: { type: board, text: "Choose the owner words for each gap.", when: "n_gaps_right = 2", explain: "Mia and Ravi share one robot, so the apostrophe goes on the last name. Zoe and Kai have a kite each, so each name has its own." }
```

## Practise: commas in a recount

```step
stage: practise
insight: "Choosing comma or no comma across several sentences makes students check the position of each phrase."
try: { playground: board, starter: "text.yml#practise", height: 420 }
hint: ["Find each long phrase. Is it at the start or the end of its sentence?", "Read each sentence aloud and listen for where the main part begins."]
check: { type: board, text: "Choose a comma or no comma for each box.", when: "n_right = 5 and n_wrong = 0", explain: "A comma follows each long opening phrase. The same phrases at the end of their sentences need none." }
```

## Make: a newsletter item

In your own document, write a short newsletter item about a class excursion or a school event. Write at least four sentences. Start at least two of them with a long opening phrase and put a comma after it. Include at least one apostrophe, for something that belongs to a person or a group.

Here is one example: "On Thursday morning our class visited the botanic gardens. Beside the lily pond near the entrance**,** we sketched the water plants. Mia and Ravi**'s** drawing of the frog won the class prize. After a long day in the sun**,** everyone slept on the bus ride home."

Then swap with a partner. Point to each opening phrase and check a comma follows it. Say what each apostrophe shows.

```step
stage: make
insight: "Writing a short newsletter item with long opening phrases and an owner puts both marks to work in a real text type."
hint: ["Write about a class excursion or a school event.", "Start at least two sentences with a long phrase, and include something that belongs to a person or a group."]
check: { type: reflect, text: "I wrote a newsletter item of at least four sentences with a comma after each long opening phrase and at least one apostrophe, and a partner and I checked each comma and said what each apostrophe shows." }
```
