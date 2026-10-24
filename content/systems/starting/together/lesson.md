---
order: 6
unit: parts
node: AC9TDI6K01 n2
title: Working together
summary: "The parts take turns. Press A: the buttons pass the press to the processor, the processor adds one to the score in memory, then sends it to the screen. Every job needs the processor, and most need memory. Take a part out and only the jobs that need it stop."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You press a button and the score goes up. In that moment, four parts take turns."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8553
  url: http://127.0.0.1:8553/index.html
  readySelector: ".ptcard"
  layout: full
explainPicture: { ref: together.yml#explain-pic, caption: "The five parts of a games console. A press goes buttons, processor, memory, processor, screen." }
explainClip:
  query: { code: "@together.yml#run", fresh: 1, id: explain }
  caption: "Taking turns"
  say: "Follow one press through the parts."
  clip:
    - click: Press A
    - caption: { text: "Buttons, processor, memory, processor, screen: the steps light up in order.", say: "The processor changes the score in memory, and the screen shows it." }
    - wait: 1400
    - click: Take out the screen
    - click: Press A
    - expect: { selector: "#gsum", contains: "nobody can see it" }
    - caption: { text: "No screen: the score still goes up in memory. Nobody can see it.", say: "With no screen, the score still goes up. You just can't see it." }
    - wait: 1600
---
No part works alone. Each job passes from part to part, and the board lights up the order.

## Predict: no screen

```step
stage: predict
insight: "Committing to what happens without a screen tests the new move: the other parts still do their jobs; only showing the result stops."
check:
  type: predict
  q: "You take the screen out of the console and press A. What happens to the score?"
  options: ["It still goes up in memory, but you can't see it", "The game stops", "It goes back to 0", "The buttons stop working"]
  actual: "It still goes up. The buttons, processor and memory all still work; there's just nothing to show the score on."
```

## Try: take the screen out

```step
stage: run
insight: "Pressing A with the screen out settles the prediction: memory's score rises, the screen part is blank."
try: { playground: board, starter: "together.yml#run", height: 520 }
check: { type: board, text: "Take out the screen and press A twice. Does the score in memory still go up?", when: "z = 5 and m >= 2", explain: "Yes: memory holds 2. The screen's job is only to show it." }
```

Was your guess right? Put the screen back and press A: watch the steps light up.

## Worked example: one press, step by step

```step
stage: investigate
insight: "Following one press through the parts in order models the move. Sam thinks the screen does the work, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "You press A. In what order do the parts take turns?"
      options: ["Buttons, processor, memory, processor, screen", "Screen, processor, buttons", "Buttons, screen", "Processor, buttons, storage"]
      answer: 0
      feedback: [null, "The screen comes last: it shows the result.", "The processor has to work out the new score first.", "Playing doesn't use storage."]
      explain: "In from the buttons, worked out by the processor, kept in memory, then out to the screen."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's screen breaks. Click the line where the reasoning first goes wrong."
      answer: 2
      fault: logic
      misconception: screen-does-work
      explain: "Line 2: the game happens in the processor and memory. The screen only shows it, so the score is safe in memory."
  - check:
      type: question
      q: "Which part does every job need: playing, saving and loading?"
      options: ["The processor", "The screen", "Storage", "The buttons"]
      answer: 0
      feedback: [null, "Saving doesn't need the screen.", "Playing doesn't need storage.", "Saving and loading don't use the buttons."]
      explain: "The processor follows every instruction, so nothing happens without it."
```

### Press A

```worked
\text{1. Buttons} :: Take in the press.
\text{2. Processor} :: Works out what the press means: add one to the score.
\text{3. Memory} :: The score changes here, from 0 to 1.
\text{4. Processor} :: Fetches the new score to show.
\text{5. Screen} :: Shows Score 1.
```

Now: in what order do the parts take turns?

### Find the mistake

### Every job

## Vary: take out a part

```step
stage: modify
insight: "Each task takes out a different part and presses A, so students see which jobs need which part."
try: { playground: board, starter: "together.yml#modify", height: 560 }
tasks:
  - check: { type: board, text: "Put every part back, take out memory, then press A. What happens?", when: "z = 3 and r = 1 and a = 1 and o = 0", explain: "Nothing can run: the processor has nowhere to keep the score while it works." }
  - check: { type: board, text: "Put memory back, take out the buttons, and press A.", when: "z = 1 and r = 1 and a = 1 and o = 0", explain: "The console never hears the press, so nothing happens." }
  - check: { type: board, text: "Put the buttons back, take out storage, and press A. Then try Save.", when: "z = 4 and r = 1 and a = 2 and o = 0", explain: "Playing works without storage. Saving doesn't." }
```

### No memory

### No buttons

### No storage

## Practise: which part stopped?

```step
stage: practise
insight: "Working backwards from what went wrong to the part that's missing, and a review of memory and storage."
tasks:
  - check:
      type: question
      q: "A console's game runs and the score goes up, but you can't save. Which part is missing?"
      options: ["Storage", "Memory", "The processor", "The screen"]
      answer: 0
      feedback: [null, "Without memory the game wouldn't run.", "Without the processor nothing would happen.", "You can still see the score."]
      explain: "Saving needs storage."
  - check:
      type: question
      q: "You press buttons and nothing at all happens, not even a sound. Which part might be missing?"
      options: ["The processor or the buttons", "Storage", "The screen only", "Memory only"]
      answer: 0
      feedback: [null, "Playing doesn't need storage.", "With no screen you'd still hear the game.", "Possible, but the buttons and processor could be too."]
      explain: "If nothing hears the press, or nothing works it out, nothing happens."
  - check:
      type: question
      q: "Review: what is in memory just after you turn the console off and on?"
      options: ["Nothing: memory is empty", "The saved game", "Everything from before", "The screen"]
      answer: 0
      feedback: [null, "That's in storage.", "Memory empties when the power goes off.", "The screen is a part, not something kept."]
      explain: "Memory empties; storage keeps."
```

### Can't save

### Nothing happens

### Review: off and on

## Make: get it back

```step
stage: make
insight: "Planning the whole chain to get a score back after turning off reverses the move: students choose which parts to use, in order."
try: { playground: board, starter: "together.yml#make", height: 560 }
hint: ["Every part needs to be in for this.", "Which part keeps the score when you turn off?", "Press A three times, save, turn off and on, then load."]
check: { type: board, text: "With every part in, get the console to show a score of 3 after it has been turned off and on.", when: "r = 0 and g = 3 and a = 4 and s = 3", explain: "Press three times (memory), save (storage), off and on (memory empties), load (storage → memory → screen)." }
```

Then: explain to a partner what each part did in your plan.
