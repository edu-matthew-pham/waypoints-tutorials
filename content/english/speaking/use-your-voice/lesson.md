---
order: 5
unit: delivery
title: Use your voice on purpose
summary: "A speaker has four voice settings: pace, volume, pitch and tone. Used on purpose, they show listeners what matters and how to feel about it; left on one setting, they hide it. Students choose the word to stress, name voice features in delivery notes, find a delivery plan that hides the most important line, match delivery to what the words say, and plan their own delivery. Saying it aloud happens in class."
language: maths
node: [AC9E5LY07 n3, AC9E6LY07 n2, AC9E7LY07 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The question tells listeners what they already know, so the new information gets the stress." }
hook: "Two speakers say the very same words. One sounds sure, the other sounds like she is guessing. What changed, if the words did not?"
---
Your voice has four settings you can change while you talk:

- **Pace**: how fast or slow you go, including where you pause.
- **Volume**: how loud or soft you are.
- **Pitch**: how high or low your voice sounds, and whether it rises or falls.
- **Tone**: the feeling in your voice, such as warm, serious or excited.

Each setting is a signal. Slowing down and getting louder says 'this matters'. A steady, warm tone says 'you can trust me'. A voice stuck on one setting says nothing in particular, so listeners decide for themselves what matters, and they often decide wrongly.

You also choose where to put the **stress**, the weight on one word in a sentence. Stress changes what listeners understand.

## Predict: does the stress change the meaning?

```step
stage: predict
insight: "Predicting what a stressed word does to a sentence shows that the same words can carry different meanings in the voice."
check:
  type: predict
  q: "Nib says, 'I didn't say Sam took the cap,' and puts the heavy stress on the word I. What will listeners take from it?"
  options: ["Sam did not take the cap", "Nib said nothing at all", "Nib did not say it, but someone else may have", "The stress changes nothing, because the words are the same"]
  actual: "Nib did not say it, but someone else may have. Stress on 'I' points to the speaker as the one who did not say it, which leaves room for someone else. Move the stress to 'Sam' and the meaning changes again."
```

## Try: where does the stress go?

```step
stage: run
insight: "Choosing the stressed word in answer to a question shows students that stress goes on the new information."
try: { playground: board, starter: "text.yml#run", height: 380 }
hint: ["What does the question already tell the listener?", "Which word in the answer is the new information?"]
smaller:
  check: { type: question, q: "Someone asks, 'Is the talk on Monday or Tuesday?' Which word carries the weight in 'It is on Tuesday'?", options: ["It", "Tuesday", "on"], answer: 1, feedback: ["The listener already knows what 'it' is.", null, "The listener already knows the talk is 'on' a day."], explain: "The question already told the listener it was one of two days. Tuesday is the new information, so Tuesday gets the stress." }
check: { type: board, text: "Colour the one word in each answer that should carry the stress.", when: "chains_ok = 1 and n_stray = 0", explain: "Each answer gets its stress on the word that answers the question: Maya, Friday and walking. The words the listener already knows stay light." }
```

Were you right about the stress? You cannot hear a stressed word on the page, so the board only holds your choice. Say each answer aloud, and listen for the weight.

## Worked example: voice as a signal

```step
stage: investigate
insight: "Asking what slowing down does, catching the delivery plan that hides the warning and judging a tone that does not match the words show voice as a set of choices with effects."
tasks:
  - check:
      type: question
      q: "A speaker slows down and gets a little louder just before the most important sentence. What does this do for listeners?"
      options: ["Nothing, because only the words matter", "It makes the talk longer", "It signals that this part matters and gives them time to take it in", "It shows the speaker has forgotten the words"]
      answer: 2
      feedback: ["The voice carries meaning of its own, and that is why speakers change it.", "A few seconds does not make the difference. What matters is what the change signals.", null, "A planned slowing sounds steady. Forgetting sounds hesitant and uneven."]
      explain: "Slowing down and a little extra volume tell listeners to pay attention, and they give the ear time to catch the words."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here are Nib's delivery notes for a talk about the wet steps, one line each. Click the note that hides the most important line."
      answer: 3
      fault: logic
      misconception: voice-one-setting
      explain: "Line 3: the warning is the line listeners most need to catch, and Nib plans to say it fast and quietly so it takes less time. It should be slower and clearer than the rest."
  - check:
      type: question
      q: "A speaker says, 'We lost the final,' in a bright, bouncy tone. What might listeners think?"
      options: ["The speaker is sad", "The words and the tone do not agree, so they may think the speaker is joking or does not mean it", "The speaker is being formal", "Nothing, because the words are the same as a sad version"]
      answer: 1
      feedback: ["A bright tone sounds happy, not sad.", null, "Formality is about word choice and manner, not this mismatch.", "The tone changes how the words come across, even if the words stay the same."]
      explain: "Listeners read the tone as well as the words. If they disagree, listeners trust the tone, so the speaker should match them."
```

### Four settings

```worked
\text{Pace} :: Slow down for what matters. Speed up for what is quick or exciting.
\text{Volume} :: Louder for emphasis. Softer for a secret or a serious moment.
\text{Pitch} :: Rising for a question. Falling to sound sure and finished.
\text{Tone} :: Warm, serious or excited. Match it to the words.
\text{Stress} :: The weight on the new information in a sentence.
```

Now: what does slowing down do for listeners?

### Find the note that hides the warning

### Words and tone

## Vary: name the voice setting

```step
stage: modify
insight: "Naming the voice setting in each delivery note gives students the words to plan and talk about their own delivery."
try: { playground: board, starter: "text.yml#vary", height: 560 }
hint: ["Is the note about how fast, how loud, how high or how it feels?", "Which setting does each note change?"]
check: { type: board, text: "Label each delivery note with the voice setting it changes: pace, volume, pitch or tone.", when: "n_right = 8 and n_wrong = 0", explain: "Slowing down and speeding up are pace. Saying something louder or very softly is volume. A rising voice and a higher voice are pitch. A warm, kind or serious voice is tone." }
```

## Practise: match the delivery to the words

```step
stage: practise
insight: "Choosing the delivery that fits the words shows that voice and meaning have to agree."
try: { playground: board, starter: "text.yml#practise", height: 440 }
hint: ["What do the words say? How should the listener feel?", "Which delivery would make them feel it?"]
check: { type: board, text: "Choose the delivery that fits the words in each line.", when: "n_gaps_right = 3", explain: "Proud news gets a proud, steady tone. A serious warning gets a slow, clear voice. A surprise gets a rising, higher pitch. The other choices would work against the words." }
```

## Make: plan your delivery

```step
stage: make
insight: "Planning the delivery of three lines and saying what each choice is for is the open part of the skill, so it is compared with models, not marked."
check:
  type: reasoning
  q: "Here are three lines from a talk about a school fundraiser: 'We raised four thousand dollars.' 'But we need one more helper for the stall.' 'Please put your name on the sheet.' Plan how you would say each one. For each, name the voice setting you will change and say what you want the listeners to feel or do."
  placeholder: "For the first line I will ... because I want the listeners to ..."
  models:
    - title: "A strong answer"
      text: "First line: I will use a proud, steady tone and put the stress on 'four thousand', because I want listeners to feel the group did something great. Second line: I will slow down on 'one more helper' and drop my pitch a little, because I want them to notice the gap. Third line: I will say it a bit louder and clearly, with a short pause before 'name', because I want them to act."
    - title: "A different plan that also works"
      text: "First line: I will say it with a smile in my voice, and speed up a little because it is good news. Second line: I will pause before 'one more', then say it quietly, so listeners lean in. Third line: I will keep a warm tone and stress 'your', so each person feels it is for them."
  criteria: ["I planned all three lines.", "I named a voice setting (pace, volume, pitch, tone or stress) for each.", "I said what each choice is meant to make the listeners feel or do."]
  explain: "There is no one right plan. What matters is that each choice has a reason that links it to the listeners."
```

You plan the delivery here. You say it aloud in class, with a partner, and ask: did they notice the choices you made?

## In your own class

```step
stage: make
tier: typical
insight: "Trying the planned delivery aloud, once, with a partner turns the plan into a spoken choice."
check: { type: reflect, text: "I said one line aloud in two different ways and asked a partner what each way made them think." }
```

## Wider: voice in a different setting

```step
stage: make
tier: wider
insight: "Describing the voice choices of a speaker in a different setting keeps the skill and widens the examples."
check: { type: reflect, text: "I listened to a person speaking, such as a sports commentator or a newsreader, and named one voice choice and what it did for me as a listener." }
```
