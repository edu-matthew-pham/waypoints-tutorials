---
order: 8
unit: delivery
title: Rehearse and change one thing
summary: "A rehearsal only helps if the listener says what they heard and the speaker changes something. Students tell specific feedback from vague feedback, turn vague comments into specific ones, choose the one change to make first and say how they will know it worked. The rehearsal with a partner happens in class, with a short checklist."
language: maths
node: [AC9E4LY07 n2, AC9E8LY07 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Feedback that names what the listener heard can be acted on. Feedback that names a feeling cannot." }
hook: "You say your talk to a partner. They say, 'That was good.' What do you change?"
---
**Rehearsing** is saying the talk aloud, to someone, before the real one. It finds what you cannot see yourself: a part that is too quiet, a word you trip on, a spot where you read from the cards.

Feedback helps when it is **specific**: it says what the listener heard or saw, and where.

- Specific: 'You sped up on the numbers and I lost them.'
- Vague: 'It was good.' 'Speak up.' 'Do it better.'

Then the speaker changes **one thing** and says it again. One change is enough to find out whether it worked. Three at once and you cannot tell which one helped.

### A checklist for the listener

When you listen to a partner, use these questions. Tick what you saw and heard, then write one thing to keep and one thing to change.

- I could hear every word, including the last sentence.
- The speaker looked up from the cards for most of the talk.
- The speaker slowed down or paused on the most important part.
- The speaker's tone matched the words.
- One thing to keep: …
- One thing to change: …

## Predict: what can they change?

```step
stage: predict
insight: "Predicting what a speaker can do with a vague comment brings out that feedback has to name something to act on."
check:
  type: predict
  q: "After a rehearsal, Nib's partner says, 'That was good.' What can Nib change because of that comment?"
  options: ["The pace, because the comment was about speed", "The volume, because good means loud", "Nothing in particular, because the comment does not say what was good or what wasn't", "Everything, to be safe"]
  actual: "Nothing in particular. 'That was good' is kind, but it does not say what was good or what could be better. Nib cannot act on it, and cannot tell what to keep either."
```

## Try: specific or vague?

```step
stage: run
insight: "Labelling feedback comments as specific or vague gives students a test they can use on feedback they give and receive."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Does the comment say what the listener heard or saw, and where?", "Could the speaker do something different because of it?"]
smaller:
  check: { type: question, q: "Which comment is specific?", options: ["It was fine.", "You looked at the cards for the whole second point.", "Do it better."], answer: 1, feedback: ["It says nothing about what was fine.", null, "It does not say what to change or where."], explain: "The second comment names where and what the listener saw. The speaker can look up more in that point." }
check: { type: board, text: "Label each comment: is the feedback specific or vague?", when: "n_right = 8 and n_wrong = 0", explain: "Comments that say what the listener heard or saw, and where, are specific: the last sentence was too quiet, the speaker sped up on the numbers, the voice rose at the end of the facts, the cards were read for the whole second point. 'That was good', 'Speak up', 'It was boring' and 'Be more confident' leave the speaker with nothing to act on." }
```

Were you right about what Nib could change? A comment that names what was heard or seen gives the speaker something to work with.

## Worked example: feedback you can use

```step
stage: investigate
insight: "Asking what makes feedback useful, finding the vague comment in Nib's log and judging why to change one thing show rehearsal as a loop of listening and changing."
tasks:
  - check:
      type: question
      q: "What makes feedback useful to a speaker?"
      options: ["It is kind", "It is long", "It says what the listener heard or saw, and where", "It is about the speaker, not the talk"]
      answer: 2
      feedback: ["Kind is good, but a kind comment can still leave the speaker with nothing to change.", "Length does not help. A short specific comment can do more than a long vague one.", null, "Feedback about the talk can be acted on. Feedback about the speaker as a person cannot."]
      explain: "Useful feedback names what the listener heard or saw and where. The speaker can then change it."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's rehearsal log, one entry each. Click the feedback that Nib cannot act on."
      answer: 2
      fault: logic
      misconception: feedback-vague
      explain: "Entry 2: 'It was good' does not say what was good or what to change. Nib could not tell what to keep or what to fix. The other entries name what the partner heard or saw."
  - check:
      type: question
      q: "Why change only one thing between rehearsals?"
      options: ["Changing more takes too long", "So you can tell whether that change helped", "Because a speaker can only do one thing at a time", "Because the partner will forget the rest"]
      answer: 1
      feedback: ["Time is not the main reason. The reason is what you learn.", null, "Speakers change many things in a talk. The point here is to learn from one change.", "A partner can remember several comments. The reason is for the speaker."]
      explain: "With one change, you can compare the two rehearsals and see whether it helped. With three, you cannot tell which one did."
```

### Listen, then change

```worked
\text{Say it} :: Rehearse the talk aloud to a partner.
\text{Listen for specifics} :: What did they hear or see, and where?
\text{Choose one change} :: The one that will help the listeners most.
\text{Say it again} :: Make the change.
\text{Check it} :: Did it help? How can you tell?
```

Now: what makes feedback useful?

### Find the comment Nib cannot use

### Why one change?

## Vary: make it specific

```step
stage: modify
insight: "Choosing the specific rewording of a vague comment shows what the more useful version says."
try: { playground: board, starter: "text.yml#vary", height: 420 }
hint: ["Which wording says what the listener heard, and where?", "Which wording would still leave the speaker asking 'what do I change'?"]
check: { type: board, text: "Choose the more useful comment for each vague one.", when: "n_gaps_right = 3", explain: "'You slowed down on the number, and I remembered it' says what and where. 'The last two sentences were too quiet for me to hear at the back' names the problem and the place. 'You sped up in the second point and I lost the numbers' says what happened and what it cost." }
```

## Practise: a second set

```step
stage: practise
insight: "Labelling a second set of comments with no help from the first builds the habit of testing feedback for what it names."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Does it say where?", "Does it say what the listener heard or saw?"]
check: { type: board, text: "Label each comment: is the feedback specific or vague?", when: "n_right = 6 and n_wrong = 0", explain: "Pausing before 'one more helper', losing the listener when the cards were read and a quiet warning are specific. 'Nice', 'It was okay' and 'Try harder' are vague." }
```

## Make: choose the one change

```step
stage: make
insight: "Choosing one change from a list of specific comments and saying how to tell it worked is the open part of the skill, so it is compared with models, not marked."
check:
  type: reasoning
  q: "Nib's partner gave four comments after a rehearsal. 1: 'I couldn't hear the last sentence.' 2: 'You looked at your cards for the whole of point two.' 3: 'The facts were clear.' 4: 'You said um a few times.' Choose the one change Nib should make first. Say what Nib will do differently and how Nib will know it worked."
  placeholder: "Nib should change ... first, because ... Nib will ... Nib will know it worked if ..."
  models:
    - title: "A strong answer"
      text: "Nib should fix comment 1 first, because the last sentence is the call to act, and if listeners can't hear it, the talk fails. Nib will take a breath before it and say it louder and slower. Nib will know it worked if the partner can repeat the sentence after the next rehearsal."
    - title: "A different choice that also works"
      text: "Nib should fix comment 2 first, because reading the cards stops Nib talking to the listeners for a whole point. Nib will learn point two so that only the key words are needed, then look up at the end of each sentence. Nib will know it worked if the partner says Nib looked up more in point two."
  criteria: ["I chose one change.", "I said why that change matters most to the listeners.", "I said how Nib will know it worked."]
  explain: "Either choice is fine. What matters is that the change is one thing, has a reason linked to the listeners, and has a way to tell whether it worked."
```

## Rehearse with a partner

```step
stage: make
insight: "The rehearsal itself happens in class. The site's step is the record that the student rehearsed, got specific feedback and changed one thing."
check: { type: reflect, text: "I rehearsed my talk with a partner in class, used the checklist, got one specific piece of feedback, changed one thing and said it again. I can say whether the change did what I meant." }
```

The site cannot listen to your rehearsal or your partner. This step is yours to tick once you have done it in class, with a partner who used the checklist.

## In your own class

```step
stage: make
tier: typical
insight: "Giving specific feedback to a partner, not just receiving it, builds the habit in both directions."
check: { type: reflect, text: "I gave a partner one specific piece of feedback that named what I heard or saw, and where." }
```

## Wider: feedback in other places

```step
stage: make
tier: wider
insight: "Noticing specific and vague feedback in other settings keeps the skill and widens the examples."
check: { type: reflect, text: "I noticed specific and vague feedback in another setting, such as a sport or music lesson, and rewrote one vague comment to be specific." }
```
