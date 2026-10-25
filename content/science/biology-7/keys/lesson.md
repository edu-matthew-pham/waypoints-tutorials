---
order: 3
node: AC9S7U01 n3
assumes: [AC9S5U01 n1]
woven: [AC9S7I06]
unit: classification
title: Who is it? Using a key
summary: A dichotomous key identifies an organism by a series of yes-or-no questions about features you can observe. Following each choice carefully leads to the right name; one wrong choice leads to the wrong one.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8208
  url: http://127.0.0.1:8208/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Using a dichotomous key"
  say: "A key asks two-way questions about features you can see, one at a time."
  clip:
    - caption: { text: "Read the specimen, then answer each question about it.", say: "Answer each question about the specimen in front of you, one at a time." }
    - caption: { text: "Does it have a backbone? Yes.", say: "Does it have a backbone? Yes." }
    - click: "Yes"
    - caption: { text: "Does it have feathers? No: it has fur.", say: "Does it have feathers? No, it has fur." }
    - click: "No"
    - expect: { selector: "body", contains: "Wombat" }
    - caption: { text: "Each answer leads to the next question, until you reach a name.", say: "Each answer leads on to a name; one wrong answer gives the wrong name." }
    - wait: 800
hook: "A field guide doesn't show you every animal in Australia and ask you to find the match. It asks you a question about the one in front of you, then another, then another."
---
Last time you sorted living things into kingdoms, and now you'll learn a tool for naming one, a careful choice at a time.

## Engage: how does a key work?

```step
stage: predict
insight: "Students who think a key is a list of names to match will choose that option; working through it one feature at a time is the logic the node needs."
check:
  type: predict
  q: "You have a dichotomous key and an animal you don't know. How do you think you use the key?"
  options: ["Guess the name, then check it in the key", "Answer two-way questions about the animal's features, one at a time, until the key names it", "Look for the picture that matches", "Count its legs and look up the number"]
  actual: "Answer two-way questions about features you can observe, one at a time. Each answer sends you to the next question, until you reach a name."
```

## Explore: identify the specimens

```step
stage: run
insight: "Using a real key, with feedback on wrong turns, makes the binary decision logic concrete."
try: { playground: board, starter: "boards.yml#animals", height: 600 }
check: { type: board, text: "Use the key to identify at least 5 specimens.", when: "n >= 5" }
hint: ["Choose a specimen and answer each question about that specimen's description, not about the animal you think it is.", "If the key names the wrong animal, the board tells you which step to look at again, and 'The whole key' under the board lays out every question if you want to see where each answer leads."]
```

Choose a specimen and read its description carefully. Answer each question about **that** specimen. The name appears only when you get it right.

## Explain: how keys work

```step
stage: investigate
insight: "Naming the feature at each decision and explaining wrong turns is the understanding students need to build keys in node 4."
tasks:
  - check:
      type: question
      q: "Why is it called a dichotomous key?"
      options: ["Each step splits into exactly two choices", "It uses two kinds of feature", "It identifies two organisms"]
      answer: 0
      feedback: [null, "It can use lots of different features, one at each step, so that isn't why it has the name.", "It can identify as many organisms as it has endings, so the name isn't about a pair of them."]
      explain: "Dichotomous means dividing into two, which is what every step of the key does."
  - check:
      type: question
      q: "A student identified the crocodile as a green tree frog. Where did they most likely go wrong?"
      options: ["At \"Does it have dry, scaly skin?\": they answered no", "At \"Does it have a backbone?\"", "The key is wrong"]
      answer: 0
      feedback: [null, "A crocodile has a backbone just like a frog, so both of them take the same branch there and the slip must come later.", "The key does lead to the crocodile when every answer matches its description, so the fault is more likely in how someone used it."]
      explain: "One wrong answer sends you down the wrong branch, and no later answer can bring you back."
    hint: ["Follow the key for the crocodile and then for the frog, and see which question is the first one where their answers differ.", "Open 'The whole key' under the board and trace each path with your finger, because the wrong turn is on the stretch where the two paths part."]
  - check:
      type: question
      q: "Which is a good question for a key?"
      options: ["Does it have six legs?", "Is it scary?", "Is it big?", "Is it a kangaroo?"]
      answer: 0
      feedback: [null, "People disagree about what's scary, so a key needs questions about features everyone can check.", "Big compared with what? Two people could answer differently, so it needs a clear yes or no.", "Asking for the name skips the whole point of the key, which is to lead you to one."]
      explain: "A good question asks about a feature you can observe, and it has a clear yes or no answer."
    hint: ["Picture two people looking at the same animal, and think about which of these they could still disagree on.", "Try each question on a real animal, like a kookaburra or a spider, and see which ones you could answer without anyone arguing."]
  - check: { type: reflect, text: "I can explain, step by step, how I used the key to identify one specimen, naming the feature at each step." }
```

### Two ways

### Wrong turns

### Good questions

### In your own words

In your book: write the path you took to identify the platypus, naming the feature you checked at each step.

## Mix it up

```step
stage: practise
insight: "A key is a classification tool for a purpose, and the purpose it serves is identification."
check:
  type: question
  q: "Looking back at why we classify: what job is a dichotomous key for?"
  options: ["Identifying an organism you do not know", "Deciding which organism is better", "Showing exactly how organisms are related", "Giving a new organism its name"]
  answer: 0
  feedback: [null, "Groups describe features and relationships, not how good an organism is, so a key can't decide that.", "A key sorts by features that are easy to check, one step at a time, so it doesn't show ancestry.", "Scientists choose the name, and a key only leads you to a name that already exists."]
  explain: "A key identifies an organism by asking about features you can observe, and different classifications suit different purposes."
```

## Elaborate: a different key

```step
stage: modify
tier: typical
insight: "Two keys for the same animals reach the same names by different questions, showing that the features, not the order, carry the identification."
try: { playground: board, starter: "boards.yml#second", height: 600 }
tasks:
  - check: { type: board, text: "Identify 3 specimens with this second key.", when: "n >= 3" }
    hint: "This key starts with legs and not a backbone, so read each question fresh and don't follow the path you used before."
  - check:
      type: question
      q: "The two keys ask different questions in a different order, but give the same names. Why?"
      options: ["Each animal has the same features whichever order you check them in", "One of the keys must be wrong", "Keys always ask the same questions"]
      answer: 0
      feedback: [null, "Both keys lead every specimen to its correct name, so neither one is wrong.", "They don't, actually, because this one starts with legs and not a backbone."]
      explain: "A key is one way of checking features, and different keys can sort the same organisms in a different order."
```

### Second key

### Same names

## Elaborate: a broken key

```step
stage: modify
tier: wider
insight: "Spotting a flaw in a key (a question that doesn't split cleanly) prepares students to build keys of their own."
check:
  type: question
  q: "A key's first question is \"Is it brown?\" The specimens include a brown kangaroo, a grey kangaroo and a brown spider. What is wrong with this question?"
  options: ["Colour varies within a species and isn't reliable: the two kangaroos go different ways", "Nothing: colour is observable", "It should ask about size instead"]
  answer: 0
  feedback: [null, "You can certainly see colour, but think about whether every animal of the same kind looks the same.", "Size wouldn't help, because it's even harder to give a clear yes or no."]
  explain: "Good keys use features that don't vary within a kind of organism, such as legs, body covering and backbone."
hint: ["Picture a brown kangaroo and a grey kangaroo, and think about which way each would go on that first question.", "Ask whether the two kangaroos would end up in the same place, and what that would mean for the key."]
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first idea about how a key works with how I used one." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- A **dichotomous key** identifies an organism with a series of **two-way choices** about **observable features**.
- Answer each question about the specimen in front of you; each answer leads to the next step, until you reach a name.
- One wrong answer leads to the wrong name: check each feature carefully.
- Good questions have a clear yes or no and use features that don't vary within a kind (legs, covering, backbone), not colour or size.
