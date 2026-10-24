---
order: 5
unit: parts
node: AC9TDI6K01 n1
title: The parts inside
summary: "Every computer, from a games console to a phone, has five kinds of parts. Input takes in what you do, the processor works out what happens, memory holds what's being used right now, storage keeps things when the power is off, and output shows the result. Memory and storage both remember, but only storage keeps things when you turn it off."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A games console, a laptop and a phone look different, but inside they have the same five kinds of parts."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8552
  url: http://127.0.0.1:8552/index.html
  readySelector: ".ptcard"
  layout: full
explainPicture: { ref: parts.yml#explain-pic, caption: "A games console as five parts: buttons (input), processor, memory (the score now), storage (saved games) and screen (output)." }
explainClip:
  query: { code: "@parts.yml#explain", fresh: 1, id: explain }
  caption: "Memory and storage"
  say: "Watch where the score is kept."
  clip:
    - click: Press A
    - click: Press A
    - caption: { text: "Each press changes the score in memory, and the screen shows it.", say: "The score is kept in memory while the console is on." }
    - wait: 1200
    - click: Save the game
    - caption: { text: "Saving copies the score into storage.", say: "Saving copies it into storage." }
    - wait: 1200
    - click: Turn off and on
    - expect: { selector: "#gsum", contains: "Storage still keeps 2" }
    - caption: { text: "Off and on: memory is empty, but storage still has the save.", say: "Turn it off and on. Memory is empty. Storage kept the save." }
    - wait: 1600
---
Every computer has the same five kinds of parts, each with its own job. This one is a games console.

## Predict: where's my saved game?

```step
stage: predict
insight: "Committing to which part keeps a saved game tests the new move: storage keeps things with the power off; memory doesn't."
check:
  type: predict
  q: "You save your game and turn the console off. Tomorrow, your saved game is still there. Which part kept it?"
  options: ["Storage", "Memory", "The screen", "The buttons"]
  actual: "Storage. It keeps things when the power is off. Memory only holds what the console is using while it's on."
```

## Try: match the jobs

```step
stage: run
insight: "Matching each part to its job settles the prediction and puts a job on every part. Students can press the buttons to test their guesses."
try: { playground: board, starter: "parts.yml#run", height: 520 }
check: { type: board, text: "Match each part to its job. Press the buttons on the console if it helps you decide.", when: "k = 5", explain: "Buttons take in what you do, the processor works out what happens, memory holds the score right now, storage keeps the save, the screen shows the result." }
```

Was your guess right?

## Worked example: one game, five parts

```step
stage: investigate
insight: "Naming the part behind each thing that happens in a game models the move. Sam treats memory and storage as one, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "You press A. Which part works out that the score should go up?"
      options: ["The processor", "The buttons", "The screen", "Storage"]
      answer: 0
      feedback: [null, "The buttons only take in the press.", "The screen only shows what it's given.", "Storage only keeps things."]
      explain: "The processor follows the game's instructions: press A, add one to the score."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam explains memory and storage. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: ram-is-storage
      explain: "Line 3: they are different parts. Memory holds what's being used right now and empties when the power goes off. Storage keeps things with the power off."
```

### Five parts, five jobs

```worked
\text{Buttons (input)} :: Take in what you do: press A.
\text{Processor} :: Works out what happens: the score goes up by one.
\text{Memory} :: Holds the score while you play. It empties when the power goes off.
\text{Storage} :: Keeps the saved game when the power is off.
\text{Screen (output)} :: Shows the result: the new score.
```

Now: which part works out what happens?

### Find the mistake

## Vary: memory or storage?

```step
stage: modify
insight: "Each task does one thing to the console and watches memory and storage: play, save and restart, then load."
try: { playground: board, starter: "parts.yml#modify", height: 520 }
tasks:
  - check: { type: board, text: "Press A three times. Which part is holding the score now?", when: "a = 1 and m = 3", explain: "Memory: it holds the score while you play." }
  - check: { type: board, text: "Save the game, then turn the console off and on. What's left?", when: "a = 3 and g >= 1", explain: "Memory is back to 0, but storage still has the saved score." }
  - check: { type: board, text: "Load the game.", when: "a = 4 and o = 1", explain: "The saved score goes from storage back into memory, and the screen shows it." }
```

### Play

### Save, then off and on

### Load

## Practise: which part?

```step
stage: practise
insight: "The same five kinds of parts on other devices, and a review of letter codes."
tasks:
  - check:
      type: question
      q: "On a laptop, which part is the keyboard?"
      options: ["Input", "Output", "Storage", "The processor"]
      answer: 0
      feedback: [null, "It takes in, it doesn't show.", "It doesn't keep anything.", "It doesn't work anything out."]
      explain: "It takes in what you type."
  - check:
      type: question
      q: "Your phone's photos are still there after it goes flat. Where are they kept?"
      options: ["Storage", "Memory", "The screen", "The camera"]
      answer: 0
      feedback: [null, "Memory empties when the power goes off.", "The screen only shows them.", "The camera is input: it takes the photo in."]
      explain: "Storage keeps things when the power is off."
  - check:
      type: question
      q: "Which of these is output?"
      options: ["A speaker", "A microphone", "A mouse", "A touch on the screen"]
      answer: 0
      feedback: [null, "A microphone takes sound in.", "A mouse takes in your movements.", "Touching takes in what you do."]
      explain: "A speaker plays the result. (A touch screen is both: it takes in touches and shows the picture.)"
```

### Keyboard

### Photos

### Output

## Make: play but can't save

```step
stage: make
insight: "Taking out the one part that stops saving but not playing reverses the move: students choose the part from its job."
try: { playground: board, starter: "parts.yml#make", height: 560 }
hint: ["Which part's only job is keeping things when the power is off?", "Take that part out, press A, then try to save."]
check: { type: board, text: "Take out one part so you can still play, but you can't save. Then try to save.", when: "z = 4 and r = 1 and a = 2 and o = 0", explain: "Without storage the game still runs (memory holds the score), but there's nowhere to keep a save." }
```

Then: look at a device at home. Can you find each of the five kinds of part?
