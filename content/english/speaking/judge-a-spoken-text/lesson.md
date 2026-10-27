---
order: 7
unit: delivery
title: Judge a spoken text
summary: "A transcript is the words of a talk written down. From the words, students can name the structure and the language features and judge what they do for the listeners. Pace, pitch, volume and tone are not on the page unless someone marks them. Students label features in a made-up speech, judge delivery notes, spot a claim a transcript cannot support, and judge one feature of a short speech."
language: maths
node: [AC9E7LY02 n2]
assumes: [AC9E7LY02 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "Features of a spoken text, found in its transcript: a question to the listeners, a signpost, a repeat and a call to act." }
hook: "You can read a speech, but you cannot hear it. What can the words alone tell you, and what do they leave out?"
---
A **transcript** is a talk written down, word for word. You can use it to study how a speaker built the talk, because the words are all there.

In a transcript you can find:

- **Structure**: the opening, the points, the close and the signposts that join them.
- **Language features**: a question to the listeners, a repeat, a fact, a call to act.

What a transcript does **not** show is how the talk sounded. Pace, pitch, volume, tone and pauses are not on the page unless someone has marked them. So a careful judge says what the words show, and says what they cannot.

To **judge** a feature, name it, say what it does for the listeners and say how well it works, with a reason.

## Predict: what can a transcript tell you?

```step
stage: predict
insight: "Predicting what a transcript can and cannot show sets up the careful limit on what a reader may claim from the words alone."
check:
  type: predict
  q: "You are given the transcript of a speech with no notes on how it was delivered. Which of these can you judge from it?"
  options: ["How fast the speaker talked", "How the audience felt", "How the speech was built: its structure and language", "Whether the speaker was nervous"]
  actual: "How the speech was built. The words show structure, such as an opening, points and a close, and language features, such as a question or a repeat. Pace, feelings and nerves do not appear on the page."
```

## Try: find the features

```step
stage: run
insight: "Labelling the features in a short made-up speech builds the vocabulary for judging a spoken text from its words."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["What is this line doing for the listeners: asking, joining, repeating, informing or asking them to act?", "Which line gives something that could be checked?"]
smaller:
  check: { type: question, q: "'Next, let's look at the cost.' What is the word 'Next' doing?", options: ["Asking the listeners a question", "Telling the listeners where they are in the talk", "Giving a fact"], answer: 1, feedback: ["There is no question in it.", null, "It is not a fact. It is a word that sets up the next point."], explain: "'Next' is a signpost. It tells listeners that a new part is starting." }
check: { type: board, text: "Label each line with the feature it uses: a question to the listeners, a signpost, a repeat, a fact or a call to act.", when: "n_right = 6 and n_wrong = 0", explain: "The first line asks the listeners something. First and Second are signposts. The line that says loud three times is a repeat. The noise-meter reading is a fact. The last line asks the listeners to act." }
```

Were you right about what a transcript shows? Every feature you found is in the words. None of them tells you how the speaker sounded.

## Worked example: judging with care

```step
stage: investigate
insight: "Asking which features a transcript can show, catching the claim in Nib's notes that the words cannot support and judging a feature with its effect show how to judge from the page."
tasks:
  - check:
      type: question
      q: "Which of these can you judge from a transcript alone?"
      options: ["How loud the speaker was", "Whether the speaker paused for effect", "How the speech is structured", "What tone the speaker used"]
      answer: 2
      feedback: ["Volume is how a talk sounds. It is not on the page.", "Pauses are only there if someone marked them.", null, "Tone is in the voice, not the words, unless it is marked."]
      explain: "The words show structure: the opening, points and close. They do not show pace, volume, pitch or tone unless the transcript marks them."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here are Nib's notes on the quiet-corner speech, one note each. Click the note that a transcript cannot support."
      answer: 3
      fault: logic
      misconception: transcript-has-voice
      explain: "Note 3: 'Spoke too fast because she was nervous' is about how the speech sounded and how the speaker felt. The transcript has the words only. Nib can judge the repeat, the fact and the call to act, which are all in the words."
  - check:
      type: question
      q: "Which is the best judgement of a feature?"
      options: ["The repeat of the word loud is good.", "The speech has a repeat in it.", "The repeat of the word loud makes the noise feel as if it is everywhere, which helps listeners picture it.", "I liked it because it was short."]
      answer: 2
      feedback: ["It says the repeat is good but not why or for whom.", "It names the feature but does not judge it.", null, "Liking a speech is not a judgement of how it works."]
      explain: "A good judgement names the feature, says what it does for the listeners and says how well it works."
```

### Name, effect, reason

```worked
\text{Name the feature} :: A question, a signpost, a repeat, a fact, a call to act.
\text{Say what it does} :: What does it do for the listeners?
\text{Judge how well} :: Does it work? Why?
\text{Use the words} :: Point to the line.
\text{Say what you cannot tell} :: Voice is not on the page.
```

Now: which can a transcript show?

### Find the unsupported note

### What makes a good judgement?

## Vary: when the delivery is marked

```step
stage: modify
insight: "Labelling marked delivery notes as helping or hurting shows that voice can be judged only when it is on the page."
try: { playground: board, starter: "text.yml#vary", height: 520 }
hint: ["Does the delivery note match what the line is for?", "Would listeners catch the line, or lose it?"]
check: { type: board, text: "Label each marked line: does the delivery help the line or hurt it?", when: "n_right = 6 and n_wrong = 0", explain: "Slowing down on a number, a pause before the call to act and a louder warning help. Mumbling the warning, speeding past the main point and a joking tone for sad news hurt." }
```

## Practise: words that speak to the listeners

```step
stage: practise
insight: "Colouring the words that address the listeners shows one language feature a transcript makes easy to find."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Which words name the people in the room?", "Which words describe things, not people?"]
check: { type: board, text: "Colour every word that names the listeners or includes them.", when: "chains_ok = 1 and n_stray = 0", explain: "You, we and your name the listeners or include them. The other words describe the tap and the queue." }
```

## Make: judge a feature

```step
stage: make
insight: "Judging one feature of a short speech, and saying what the transcript cannot tell, is the open part of the skill, so it is compared with models, not marked."
check:
  type: reasoning
  q: "Here is part of a speech from a made-up student, Sam, about the wet steps. 'Has anyone slipped on the steps? I have not, but I nearly did. Wet steps are slippery. Wet steps are dangerous. Please, walk.' Choose one feature, name it, say what it does for the listeners and judge how well it works. Then say one thing the transcript cannot tell you."
  placeholder: "The feature is ... It makes the listeners ... It works well/not so well because ... The transcript cannot tell me ..."
  models:
    - title: "A strong answer"
      text: "The feature is the repeat of 'Wet steps are'. It makes listeners hear the danger twice and feel that it is serious, so it works well. It also builds towards the last line, 'Please, walk,' which is short and plain. The transcript cannot tell me how Sam said the repeat: slowly it would feel heavy, and quickly it would not."
    - title: "A different feature that also works"
      text: "The feature is the opening question. It makes listeners think of their own slip, so they are already paying attention. It works well because it is quick and anyone can answer it in their head. The transcript cannot tell me whether Sam paused for an answer, which would change how it felt."
  criteria: ["I named a feature that is in the words.", "I said what it does for the listeners and judged how well.", "I said one thing the transcript cannot tell me."]
  explain: "There are many good judgements. What they share is a feature found in the words, an effect on the listeners, a reason, and an honest limit on what a transcript can show."
```

## In your own class

```step
stage: make
tier: typical
insight: "Judging a real talk heard in class by what the words show, and saying what they leave out, builds the habit on real speaking."
check: { type: reflect, text: "I listened to a talk in class or at assembly, named one feature and what it did for me as a listener, and said how I could tell." }
```

## Wider: judging a different spoken text

```step
stage: make
tier: wider
insight: "Judging a different kind of spoken text keeps the skill and widens the examples."
check: { type: reflect, text: "I judged a different kind of spoken text, such as a school announcement or a sports commentary, and named a feature and its effect." }
```
