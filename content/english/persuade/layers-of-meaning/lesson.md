---
order: 8
unit: core
title: "Layers of meaning"
summary: "Irony says the opposite of what is meant, hyperbole exaggerates and understatement plays down. Each adds a layer beyond the literal words. Sarcasm is irony used to mock someone. Naming the device and its effect shows how a writer shapes meaning."
language: maths
node: [AC9E8LA02 n1, AC9E8LA02 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Three devices. Each one says one thing and means another." }
hook: "'Super speedy,' said Dad, watching the snail cross the path. Does he mean it?"
---
Some writing says one thing and means another. Three devices do this:

- **Irony**: saying the opposite of what is meant, so the reader sees the gap. *'Super speedy,' said Dad, watching the snail cross the path.*
- **Hyperbole**: exaggerating. *The soup was hot enough to melt the sun.*
- **Understatement**: playing down. *'Not my best day,' said the pilot, as the plane lost a wing.*

Each adds a layer beyond the literal words. **Sarcasm** is a sharp kind of irony used to mock someone. Irony does not have to mock anyone, and it can be a situation that turns out the opposite of what you expect.

## Predict: does she mean it?

```step
stage: predict
insight: "Predicting what a character means previews the gap between what is said and what is meant."
check:
  type: predict
  q: "A character stands next to a flat tyre and says, 'Oh, great.' What does she mean?"
  options: ["The opposite: she is annoyed", "Exactly what she says: she is pleased", "Nothing: she is talking to the tyre"]
  actual: "The opposite. She says 'great' but means it is not. The gap between the words and the meaning is irony."
```

## Try: name the device

```step
stage: run
insight: "Labelling six lines by their device shows how each one says one thing and means another."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Is it making a thing bigger, smaller, or the opposite?", "What would the plain version say?"]
smaller:
  check: { type: question, q: "'I could eat a horse.' Which device exaggerates?", options: ["Irony", "Hyperbole", "Understatement"], answer: 1, feedback: ["Irony says the opposite.", null, "Understatement plays things down."], explain: "Nobody can eat a horse. Exaggerating is hyperbole." }
check: { type: board, text: "Label each line: exaggerates, plays down, or says the opposite.", when: "n_right = 6", explain: "A million times and the end of the universe exaggerate. A bit damp and a small hiccup play down. What lovely weather and I just love getting soaked say the opposite of what is meant." }
```

Which was harder to separate, irony or understatement? Ask what the plain version would say.

## Worked example: what does each do?

```step
stage: investigate
insight: "Matching devices to their effects, separating irony from sarcasm and finding a flipped effect shows how devices layer meaning."
tasks:
  - check:
      type: match
      q: "Match each device to what it does."
      pairs:
        - ["Hyperbole (exaggeration)", "Makes a small thing feel huge"]
        - ["Understatement (playing down)", "Makes a big thing sound small"]
        - ["Irony (the opposite of what is said or expected)", "Shows the reverse of the surface meaning"]
        - ["Sarcasm", "Irony used to mock someone"]
      explain: "Each device works by a gap between the words and the real size or meaning."
  - check:
      type: sort
      q: "Is each line irony only (an outcome opposite to what you expect), or sarcasm (saying the opposite to mock someone)?"
      options: ["Irony only", "Sarcasm"]
      items:
        - ["'Great job,' said Sam, as Kim dropped the tray.", "Sarcasm", "It mocks Kim."]
        - ["A fire station burned down on the day of its safety talk.", "Irony only", "The outcome is the opposite of what you expect. Nobody is mocked."]
        - ["A pest-control shop was overrun with mice.", "Irony only", "The outcome is the opposite of what you expect. Nobody is mocked."]
        - ["'Nice haircut,' he sneered.", "Sarcasm", "It mocks a person."]
        - ["'Thanks a lot,' she said to the boy who pushed in.", "Sarcasm", "It mocks the boy."]
        - ["A lifeguard needed rescuing from the pool.", "Irony only", "The outcome is the opposite of what you expect. Nobody is mocked."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's explanation of a line, one point per line. One point gets the effect wrong. Click it."
      answer: 3
      fault: logic
      misconception: device-effect-flipped
      explain: "Line 3 says understatement makes the problem sound huge. It does the opposite: it plays the problem down, which is why the calm captain is funny."
```

### Which device, and what layer?

```worked
\text{Say the plain version} :: What would the line say without a device?
\text{Compare} :: Bigger, smaller or opposite?
\text{Name the layer} :: The gap is the extra meaning: humour, tension or a pointed view.
```

### Irony or sarcasm?

### Spot the flipped effect

## Vary: finish the device

```step
stage: modify
insight: "Choosing words to finish a line in the right device shows how the gap is made."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Is the device playing down or exaggerating?", "What would the plain version be?"]
check: { type: board, text: "Choose the words that finish each device: understatement first, then exaggeration.", when: "n_gaps_right = 2", explain: "A slight breeze plays down a toppled tent. Higher than the sky exaggerates the pile." }
```

## Practise: label the device

```step
stage: practise
insight: "Labelling six new lines applies the three devices to fresh examples."
try: { playground: board, starter: "text.yml#practise", height: 520 }
hint: ["What is the line doing to the size of the thing?", "Is the speaker saying the opposite?"]
check: { type: board, text: "Label each line: exaggerates, plays down, or says the opposite.", when: "n_right = 6", explain: "A tonne and I'd die for exaggerate. A trifle warm and a minor wobble play down. Perfect timing and How exciting say the opposite of what is meant." }
```

## Make: a scene with devices

```step
stage: make
insight: "Writing a short scene with understatement and exaggeration in speech puts devices to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["What happens in your scene?", "Which line plays it down, and which blows it up?"]
check: { type: board, text: "Write a short scene of at least four sentences, with two spoken lines in quotation marks: one that plays something down and one that exaggerates.", when: "n_sentences >= 4 and n_quotes >= 2", explain: "You wrote a scene. Ask a partner to name the device in each spoken line and what it adds." }
```

The board counts sentences and quotation marks. It cannot tell which device you used, so ask a partner to name them.

## In your own writing

```step
stage: make
tier: typical
insight: "Spotting a device in a real text puts the idea to use outside the board."
check: { type: reflect, text: "I found a real example of irony, exaggeration or understatement and said what extra meaning it adds." }
```

## Wider: a funny headline

```step
stage: make
tier: wider
insight: "Writing a one-line headline with a device applies layered meaning to funny writing at the same level."
check:
  type: reasoning
  q: "Write a one-line headline for a made-up school news story that uses exaggeration. Say what is being made fun of and which word does it."
  placeholder: "Headline ... It makes fun of ..."
  models:
    - title: "A strong answer"
      text: "'Whole school wins Olympic gold for longest queue.' It makes fun of the long canteen queue. 'Olympic gold' exaggerates."
    - title: "A different view that also works"
      text: "'Principal announces the biggest storm in history: a light shower.' It makes fun of overreacting to a small shower."
  criteria: ["I wrote a headline.", "I said what it makes fun of.", "I named the word that does the exaggerating."]
  explain: "Funny writing can use devices to make a point while entertaining."
```
