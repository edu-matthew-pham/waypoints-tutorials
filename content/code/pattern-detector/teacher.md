These projects are written to be adopted or adapted. Nothing here belongs to one school's programme, task sheet or marking scheme: use the parts you want and change the rest.

**What a pattern detector is.** An app that takes an input (text someone types, answers to a few questions, a photo, a pose, a sound), sorts it into groups, and responds in a way that helps a real person. There are two ways to build the sorting part: **rules you write** (project A) or **a model you train from examples** (project B). Project C lets a trained model feed your rules. Students meet the trade-off first-hand: rules are easy to explain and fix but cannot cover every case; a trained model copes with messy inputs but can be sure and wrong, and cannot say why.

**Where it sits, and the first lesson.** After Apps with Gradio, beside Machine learning with Gradio (either first): this is the easier way into machine learning, because the Pattern Trainer does the training and the starters hide the numbers, so students need only Gradio apps, functions, `if`/`elif` and dictionaries. Machine learning with Gradio shows how a model works inside. The one lesson, **Train a model, then use it in Python** (about 40 minutes): a tiny two-class model trained in the Pattern Trainer, tested on the site's board, then the same `my_model.json` run in the Python starter. Install the starters before it (below). Brief A can come before or after it; B and C build on it.

**How the apps run.** The apps are Python with Gradio and run on the student's own laptop, starting from the [Pattern Detector starters](https://github.com/edu-matthew-pham/pattern-detector-starters). Setup is once per laptop (a virtual environment and `pip install -r requirements.txt`; about 0.5 GB). Try it on a school laptop before the lesson: project A's starters need only Gradio (and numpy for the colour and sound starters), so they are the quickest to test. No camera or microphone is needed for A; the photo and sound starters also accept uploaded files.

**Adapting a project.** Each project's guide below lists what to change. The pattern is the same for all of them:

- *The problem and the user.* Students choose their own; if you want a shared context (a class, a club, a subject), say so in the brief you give them.
- *The starters.* Keep the four on offer, offer fewer to narrow the choice, or add your own starter in the same style (a header comment, `# ADAPT:` lines, a short `IDEAS` list).
- *The checklist.* The "Check your app" list is the success criteria. Reword it, add a line for your own priorities, or drop one.
- *The marking points.* Each guide gives points to look for against each checklist line. Replace them with your own criteria; nothing on this site is a mark scheme.
- *The help.* Hints are always on offer and anything a student opens appears on their Show your teacher card as "Help used". "Show one way" is part of the example solution, so if you would rather no student sees any of it, note that the guide shows the example in full and leave it on and read the Help used list when you mark, or turn it off (see below).
- *The hand-in.* Set your own. Students can show the badge card on screen, and "Download my code" saves what they pasted into the page.

**Using the badge.** Badges and ticks live in the student's browser. Ask students to press **Show your teacher** and show you the card (milestones ticked, help used, their own words on the hardest part). It is a self-assessed record, not a marked result.
