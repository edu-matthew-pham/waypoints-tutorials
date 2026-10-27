---
order: 1
unit: start
title: Train a model, then use it in Python
summary: Train a tiny picture model in the Pattern Trainer, download it as my_model.json, see it answer on the board, then load the same file in a Python starter and see a prediction there.
language: python
recipes: [import-module, dotted-call, none, attribute]
hook: "Phones sort your photos into people, pets and food without anyone writing a rule for what a dog looks like. Someone trained a model on examples, then put it inside an app. That second part is what you'll do in these projects."
---
In these projects your app uses a model **you** train. The training happens in the **Pattern Trainer**, a web page; the model then goes into a Python app on your computer as one file, `my_model.json`. This lesson does that once, with something small, so you know the whole path before you start a project.

## Predict

```step
stage: predict
insight: "Students expect a model to say it doesn't know. Committing first makes the confident wrong answer on the board stick."
check:
  type: predict
  q: "You train a model on 10 photos of your pencil case and 10 of your water bottle. Then you show it a banana. What will it say?"
  options: ["Pencil case or water bottle, maybe very sure", "I don't know", "Banana", "Nothing: it waits for a photo it knows"]
  actual: "Pencil case or water bottle, and often very sure. A model always picks one of the classes it was trained on; it has no idea of 'something else' unless you give it a class for that."
```

## Train and try

```step
stage: run
insight: "Seeing a model they trained a minute ago answer on photos it has never seen makes 'a model learns from examples' concrete, and sets up the confident wrong answer."
try: { playground: board, starter: "boards.yml#open", height: 760 }
check: { type: board, text: "Open your model file, add at least 4 photos it has never seen, and see what it says.", when: "n_classes >= 2 and n_photos >= 4" }
```

1. Open the [Pattern Trainer](https://tools.learningwaypoints.com/trainer/) in a new tab and choose **Pictures**. Name the first class after something on your desk, then **+ Add a class** for a second thing.
2. Hold each thing up to the camera and **Hold to record** about 10 photos per class, moving it a little. Click **Train model**.
3. Click **Download my_model.json**. On the board, click **Open your model file** and choose it.
4. Add a few photos the model **hasn't** seen: each thing somewhere else, and one thing that is neither. Which does it get right? How sure is it about the one that is neither?

The photos stay on your computer: the trainer and the board work inside the browser, and the model file holds only your class names and numbers.

## Investigate

```step
stage: investigate
code: classify.py#classify
insight: "The starter is short because pattern_model.py hides the hard part. What students change is a threshold and a message, which is where the app's judgement lives."
tasks:
  - check:
      type: question
      q: "What is in my_model.json?"
      options: ["Your class names and a lot of numbers", "Your photos, shrunk", "A link to your model online", "Python code"]
      answer: 0
      explain: "The trainer turned each photo into numbers, trained on those, and saved only the class names and the trained numbers. No photo can be rebuilt from them."
  - check:
      type: question
      q: "model.top(image) gives back (\"Pencil case\", 0.62). What does the app say?"
      options: ["Might be Pencil case, but I'm not confident (0.62).", "Pencil case (0.62 confidence)", "Upload or take a photo first.", "It crashes: 0.62 is not a whole number"]
      answer: 0
      explain: "0.62 is less than 0.8, so the if branch runs and the app says it isn't sure."
  - check:
      type: question
      q: "Where do the class names in the app come from?"
      options: ["From my_model.json, so you never type them", "From the names of your photo files", "From the classify function", "You type them into the starter"]
      answer: 0
      explain: "PatternModel.load reads them from the file, in the same order as the trainer. Rename a class in the trainer, download again, and the app follows."
```

This is the part of the starter `image_pattern_trainer.py` that answers. `pattern_model.py` does the hard part, exactly as the trainer did: centre square, picture to numbers, then your trained numbers.

### Inside the model file

Open your `my_model.json` in a text editor (Notepad or TextEdit) and scroll through it.

### What the app says

`model.top(image)` gives back two things: the most likely class and how sure the model is, from 0 to 1. Follow them through the `if`.

### Where the class names come from

The starter never types Cat, Coffee or your own class names.

## Run it in Python

```step
stage: make
insight: "The same file giving the same answer in Python shows the model is just data an app can carry."
check: { type: reflect, text: "I ran image_pattern_trainer.py with my own my_model.json, gave it a photo, and got an answer from my model." }
```

1. [Set up the starters](https://github.com/edu-matthew-pham/pattern-detector-starters#set-up-once) on your computer, if your teacher hasn't already.
2. Put **your** `my_model.json` in the starters folder, replacing the sample (Cat vs Coffee).
3. Run `python image_pattern_trainer.py` and open the address it prints (usually `http://127.0.0.1:7860`).
4. Give it one of the photos you tried on the board. It should give the same class and nearly the same confidence.

Then change the `# ADAPT:` lines: a message that would help someone, and a threshold that suits your test photos. That is where Brief B starts.
