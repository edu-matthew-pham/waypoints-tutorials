---
marp: true
theme: default
html: true
---

# Train a model, then use it in Python

Pattern Detector projects · Start here

<!-- Speaker note: Students train a two-class picture model in the Pattern Trainer, test it on the board on photos it hasn't seen, read the starter's classify function, and run the same my_model.json in the Python starter on their own computer. About 40 minutes (Predict 3 min · Train and try 12 min · Investigate 10 min · Run it in Python 15 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can train a picture model and download it as my_model.json.
- I can test a model on photos it has never seen and say how sure it is.
- I can load my model in a Python app and change what it says.

<!-- Speaker note: Before class: **The idea:** a model is trained on examples in one place (the Pattern Trainer, a web page) and used in another (a Python app), and what travels between them is one small file of class names and numbers. This lesson does that path once, with two things from the student's desk, before any project. **Before class:** the starters need installing once per computer (Python 3, then `pip install -r requirements.txt`, about 0.5 GB, no TensorFlow; [setup](https://github.com/edu-matthew-pham/pattern-detector-starters#set-up-once)). Do it before the lesson, or the last step becomes an install lesson. On a student laptop on the school network, check tools.learningwaypoints.com/trainer/ loads (about 35 MB the first time, for the trainer and again for the board) and the camera is allowed. Without a camera, students use **Upload photos** with photos they have. **Privacy:** training happens in the browser and photos never leave the computer (the trainer's Privacy page shows how to check). The board keeps students' test photos in this browser only. `my_model.json` holds class names and numbers, no photos. Train on things, not people. **Where this sits:** the first step of Pattern Detector projects, after Apps with Gradio. It needs Gradio apps, `if`/`else` and f-strings; the trainer does the training and `pattern_model.py` hides numpy. Machine learning with Gradio shows how a model works inside; either can come first. Teacher: Train and try: 10 minutes. Ask: what did it say about the thing that was neither, and how sure was it? -->

---

## Why it matters

> Phones sort your photos into people, pets and food without anyone writing a rule for what a dog looks like. Someone trained a model on examples, then put it inside an app. That second part is what you'll do in these projects.

<!-- Speaker note: In these projects your app uses a model **you** train. The training happens in the **Pattern Trainer**, a web page; the model then goes into a Python app on your computer as one file, `my_model.json`. This lesson does that once, with something small, so you know the whole path before you start a project. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You train a model on 10 photos of your pencil case and 10 of your water bottle. Then you show it a banana. What will it say?**

- I don't know
- Banana
- Nothing: it waits for a photo it knows
- Pencil case or water bottle, maybe very sure

<!-- Speaker note: What happens: Pencil case or water bottle, and often very sure. A model always picks one of the classes it was trained on; it has no idea of 'something else' unless you give it a class for that. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Most say 'I don't know'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fpattern-detector%2Ftrain-a-model%2Fstep-2&code=widget%3A+classifier%0Atestset%3A+own%0Awebcam%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/pattern-detector/train-a-model/?full=step-2#step-2)

<!-- Speaker note: 1. Open the [Pattern Trainer](https://tools.learningwaypoints.com/trainer/) in a new tab and choose **Pictures**. Name the first class after something on your desk, then **+ Add a class** for a second thing. 2. Hold each thing up to the camera and **Hold to record** about 10 photos per class, moving it a little. Click **Train model**. 3. Click **Download my_model.json**. On the board, click **Open your model file** and choose it. 4. Add a few photos the model **hasn't** seen: each thing somewhere else, and one thing that is neither. Which does it get right? How sure is it about the one that is neither? The photos stay on your computer: the trainer and the board work inside the browser, and the model file holds only your class names and numbers. -->

<!-- Speaker note: Teacher: pair students whose install worked with those whose didn't. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Pencil case or water bottle, and often very sure. A model always picks one of the classes it was trained on; it has no idea of 'something else' unless you give it a class for that.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

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

<!-- Speaker note: This is the part of the starter `image_pattern_trainer.py` that answers. `pattern_model.py` does the hard part, exactly as the trainer did: centre square, picture to numbers, then your trained numbers. What this step is for: The starter is short because pattern_model.py hides the hard part. What students change is a threshold and a message, which is where the app's judgement lives. -->

<!-- Speaker note: Teacher: everyone opens my_model.json in a text editor. Point out there is no photo in it. -->

<style scoped>pre, marp-pre { font-size: 0.73em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Inside the model file

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

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

</div>
<div>

**What is in my_model.json?**

- Python code
- Your photos, shrunk
- A link to your model online
- Your class names and a lot of numbers

* Answer: Your class names and a lot of numbers

</div>
</div>

<!-- Speaker note: The trainer turned each photo into numbers, trained on those, and saved only the class names and the trained numbers. No photo can be rebuilt from them. -->

<style scoped>section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What the app says

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

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

</div>
<div>

**model.top(image) gives back ("Pencil case", 0.62). What does the app say?**

- Might be Pencil case, but I'm not confident (0.62).
- It crashes: 0.62 is not a whole number
- Upload or take a photo first.
- Pencil case (0.62 confidence)

* Answer: Might be Pencil case, but I'm not confident (0.62).

</div>
</div>

<!-- Speaker note: 0.62 is less than 0.8, so the if branch runs and the app says it isn't sure. -->

<style scoped>section { font-size: 22px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where the class names come from

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

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

</div>
<div>

**Where do the class names in the app come from?**

- You type them into the starter
- From my_model.json, so you never type them
- From the classify function
- From the names of your photo files

* Answer: From my_model.json, so you never type them

</div>
</div>

<!-- Speaker note: PatternModel.load reads them from the file, in the same order as the trainer. Rename a class in the trainer, download again, and the app follows. -->

<style scoped>section { font-size: 23px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Run it in Python

1. [Set up the starters](https://github.com/edu-matthew-pham/pattern-detector-starters#set-up-once) on your computer, if your teacher hasn't already.
2. Put **your** `my_model.json` in the starters folder, replacing the sample (Cat vs Coffee).
3. Run `python image_pattern_trainer.py` and open the address it prints (usually `http://127.0.0.1:7860`).
4. Give it one of the photos you tried on the board. It should give the same class and nearly the same confidence.

Then change the `# ADAPT:` lines: a message that would help someone, and a threshold that suits your test photos. That is where Brief B starts.

<!-- Speaker note: What this step is for: The same file giving the same answer in Python shows the model is just data an app can carry. For students who need more support: Train in pairs on one laptop; skip the Python step and do it at the start of Brief B. For early finishers: Add a third class, Neither, with photos of other things. Does the thing that was neither now get the right answer? The hard part, on purpose: Moving the downloaded file into the starters folder in place of the sample. Ask students to say out loud which folder the app reads from before they run it. When students get stuck: The board says the file is not a model file, or is a project file. Ask: Did you click Download my_model.json (not Save project)? Fix: Download the model and open my_model.json. / The board or the trainer says the picture model didn't load. Ask: Can this computer open tools.learningwaypoints.com? Fix: Ask for the site to be allowed on the school network, then reload. / The Python app still says Cat or Coffee. Ask: Which my_model.json is in the starters folder? Fix: Replace the sample with your download (same name, my_model.json), then run the app again. / ModuleNotFoundError: No module named 'mediapipe' (or gradio). Ask: Is the starters' .venv switched on in this terminal? Fix: Activate .venv (see the setup), or run pip install -r requirements.txt. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 22px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is inside my_model.json, and why can the same file work in the trainer, on the board and in Python?**

* Class names and the trained numbers. Each side turns a picture into numbers the same way, then runs the same trained numbers on them.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Brief B (a model you train) builds an app around this model; Brief A (rules you write) can come first. Real world: photo apps, recycling sorters and parcel scanners are a trained model inside an app. -->
