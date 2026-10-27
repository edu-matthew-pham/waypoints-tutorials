---
order: 6
unit: core
title: Words that show who you are
summary: "The way we speak and write shows the groups we belong to, such as clubs, teams and communities, and using a group's words also helps us become part of it. All the ways people speak are valid for the groups and places that use them, and none shows a person's character."
language: maths
node: [AC9E7LA01 n1, AC9E7LA01 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Words from a sailing club, a chess club and a drama club. Each group has words that signal that you belong." }
hook: "A surfer, a farmer and a nurse each have words the others would not follow. What do a group's words say about the people who use them?"
---
We speak and write differently in different groups. A sailing club, a chess club and a drama club each have their own words. These are the special words only that group uses.

Our words do two things:

- They **show** which groups we belong to.
- They **help make** that belonging, because using a group's words is part of joining it.

People speak in many ways, and every way works for the family, group or place that uses it. How a person speaks tells you nothing about whether they are clever, kind or rude.

## Predict: what does it mean?

```step
stage: predict
insight: "Predicting what a saying means inside a theatre group previews that groups have their own meanings."
check:
  type: predict
  q: "A drama club member says to a friend before a show, 'Break a leg!' What does it mean?"
  options: ["It wishes the friend good luck", "It hopes the friend gets hurt", "It warns the friend about the stage"]
  actual: "It wishes the friend good luck. Inside theatre groups, this saying is a friendly good-luck wish, even though the words alone sound unkind."
```

## Try: whose words are these?

```step
stage: run
insight: "Labelling six sentences by the club that would say them shows how groups have their own words."
try: { playground: board, starter: "text.yml#run", height: 500 }
hint: ["Which words belong to boats, to board games or to the stage?", "Which word gave each one away?"]
smaller:
  check: { type: question, q: "Which club would most likely say 'check the offside line before the kick'?", options: ["A football club", "A chess club", "A sailing club"], answer: 0, feedback: [null, "Chess talk is about pieces and moves.", "Sailing talk is about boats, wind and water."], explain: "Offside and kick are football words, so a football club would say it." }
check: { type: board, text: "Label each sentence by the club that would say it.", when: "n_right = 6", explain: "Halyard, dinghy, tack and buoy belong to the sailing club. Gambit, knight and castled belong to the chess club. Mark, cue and understudy belong to the drama club." }
```

Did 'Break a leg' mean good luck? Only people inside the group may know.

## Worked example: what do the words signal?

```step
stage: investigate
insight: "Matching features to what they signal, telling showing from making belonging and spotting a judgement from speech shows what language says about groups."
tasks:
  - check:
      type: match
      q: "Match each way of speaking to what it can signal."
      pairs:
        - ["Words only the group uses", "That you are part of that group"]
        - ["A local way of speaking", "Which place you may be from"]
        - ["Switching to formal words", "That you are in a formal setting"]
        - ["Calling someone by a nickname", "That you know each other well"]
      explain: "Each feature signals something about the speaker's group or situation. None signals how good or bad a person is."
  - check:
      type: question
      q: "Zoe joins the chess club and starts saying 'gambit' and 'castle'. What is happening?"
      options: ["Her words show her new group, and using them helps her join it", "Her words only show who she already was before joining", "She is using the wrong words for her old friends"]
      answer: 0
      feedback: [null, "Using the group's words also helps Zoe become a part of the group.", "Nothing says the words are wrong. They fit the group she is in."]
      explain: "Language shows a group and also helps make belonging."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's thinking about Jo, one step at a time. One step judges a person from how he speaks. Click it."
      answer: 3
      fault: logic
      misconception: language-judged
      explain: "Step 3 says Jo 'must be rude' from short sentences alone. People speak in many valid ways, and how someone speaks tells you nothing about their character."
```

### Match the feature to the signal

### Showing and making

### Spot the judgement

## Vary: club words for a newcomer

```step
stage: modify
insight: "Choosing wording a newcomer understands shows how jargon can leave some people out."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who is listening?", "Do they know the group's words yet?"]
check: { type: board, text: "Choose the wording a newcomer can follow.", when: "n_right = 2 and n_wrong = 0", explain: "A newcomer does not yet know the club's words, so plain wording helps them follow." }
```

## Practise: spot the sailing words

```step
stage: practise
insight: "Colouring the sailing words in a short note applies the idea of jargon to a new text."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Which words would you only know if you sailed?", "Which words would you hear in any school?"]
check: { type: board, text: "Colour every sailing word in the note.", when: "chains_ok = 1 and n_stray = 0", explain: "Halyard, rigging, reef and mainsail are sailing words. Lunch and school are everyday words." }
```

## Make: a character speaks

```step
stage: make
insight: "Writing a short scene with a character shows how word choice builds a character's group and place."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Which group does your character belong to?", "Which words would they use that others would not?"]
check: { type: board, text: "Write at least four sentences with a character speaking at least twice, in quotation marks.", when: "n_sentences >= 4 and n_quotes >= 2", explain: "You wrote a short scene. Ask a partner which group your character belongs to, and which words told them." }
```

The board counts sentences and quotation marks. Whether the words suit the character is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Noticing the words of a group you belong to puts the idea to use outside the board."
check: { type: reflect, text: "I noticed a word or saying used by a school group or a club, and thought about what it shows." }
```

## Wider: one character, different places

```step
stage: make
tier: wider
insight: "Showing one character in two places applies the idea of groups to a longer piece of writing at the same level."
check:
  type: reasoning
  q: "Write two lines of speech for the same made-up character, one with the sailing club and one at lunch with friends. Say what changes."
  placeholder: "At the club, ... At home, ..."
  models:
    - title: "A strong answer"
      text: "At the club: 'Check the halyard before we launch.' At lunch: 'Can you pass the salt?' The club line has sailing words and the home line has everyday words. Both are the same person."
    - title: "A different view that also works"
      text: "At the club she uses short, exact instructions. At lunch she is relaxed and jokes. The words change with the group, but she stays the same person."
  criteria: ["I wrote two lines.", "I said what changes.", "I did not say one version is better."]
  explain: "People move between groups and change their words, which is a skill, not a fault."
```
