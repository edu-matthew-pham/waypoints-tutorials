---
title: "Train a model, then use it in Python"
subtitle: "Pattern Detector projects · Start here · Lesson 1"
---

# Train a model, then use it in Python

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Phones sort your photos into people, pets and food without anyone writing a rule for what a dog looks like. Someone trained a model on examples, then put it inside an app. That second part is what you'll do in these projects.


:::teacher-note

**In one sentence:** Students train a two-class picture model in the Pattern Trainer, test it on the board on photos it hasn't seen, read the starter's classify function, and run the same my_model.json in the Python starter on their own computer.

**Students should be able to say:** I can train a picture model and download it as my_model.json. I can test a model on photos it has never seen and say how sure it is. I can load my model in a Python app and change what it says.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You train a model on 10 photos of your pencil case and 10 of your water bottle. Then you show it a banana. What will it say?**

☐ I don't know

☐ Banana

☐ Nothing: it waits for a photo it knows

☐ Pencil case or water bottle, maybe very sure

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Pencil case or water bottle, and often very sure. A model always picks one of the classes it was trained on; it has no idea of 'something else' unless you give it a class for that.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate

This is the part of the starter `image_pattern_trainer.py` that answers. `pattern_model.py` does the hard part, exactly as the trainer did: centre square, picture to numbers, then your trained numbers.

```python
from pattern_model import PatternModel

model = PatternModel.load("my_model.json")
print("Classes in this model:", model.classes)


def classify(image):
    if image is None:
        return "Upload or take a photo first."
    label, score = model.top(image)
    if score < 0.8:
        return f"Might be {label}, but I'm not confident ({score:.2f})."
    else:
        return f"{label} ({score:.2f} confidence)"
```

:::keep-together

### Inside the model file

**What is in my_model.json?**

☐ Python code

☐ Your photos, shrunk

☐ A link to your model online

☐ Your class names and a lot of numbers

:::


:::teacher-note

**Answer:** Your class names and a lot of numbers

The trainer turned each photo into numbers, trained on those, and saved only the class names and the trained numbers. No photo can be rebuilt from them.

:::


:::keep-together

### What the app says

**model.top(image) gives back ("Pencil case", 0.62). What does the app say?**

☐ Might be Pencil case, but I'm not confident (0.62).

☐ It crashes: 0.62 is not a whole number

☐ Upload or take a photo first.

☐ Pencil case (0.62 confidence)

:::


:::teacher-note

**Answer:** Might be Pencil case, but I'm not confident (0.62).

0.62 is less than 0.8, so the if branch runs and the app says it isn't sure.

:::


:::keep-together

### Where the class names come from

**Where do the class names in the app come from?**

☐ You type them into the starter

☐ From my_model.json, so you never type them

☐ From the classify function

☐ From the names of your photo files

:::


:::teacher-note

**Answer:** From my_model.json, so you never type them

PatternModel.load reads them from the file, in the same order as the trainer. Rename a class in the trainer, download again, and the app follows.

:::


## Make: Run it in Python

1. [Set up the starters](https://github.com/edu-matthew-pham/pattern-detector-starters#set-up-once) on your computer, if your teacher hasn't already.
2. Put **your** `my_model.json` in the starters folder, replacing the sample (Cat vs Coffee).
3. Run `python image_pattern_trainer.py` and open the address it prints (usually `http://127.0.0.1:7860`).
4. Give it one of the photos you tried on the board. It should give the same class and nearly the same confidence.

Then change the `# ADAPT:` lines: a message that would help someone, and a threshold that suits your test photos. That is where Brief B starts.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What is inside my_model.json, and why can the same file work in the trainer, on the board and in Python?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Class names and the trained numbers. Each side turns a picture into numbers the same way, then runs the same trained numbers on them.

:::

