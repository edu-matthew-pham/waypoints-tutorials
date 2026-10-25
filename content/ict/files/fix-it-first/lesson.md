---
order: 4
unit: fix
title: Fix it first
summary: "When something goes wrong, a short routine fixes most problems and keeps work safe: stop and read the message, save what you can, change one thing and test, restart, and then ask for help by saying what you saw and what you tried. Changing many things at once hides what worked, and clicking on past a warning can lose work. Some problems are not yours to fix, such as a locked school setting, and asking is the right move."
language: maths
hook: "The printer says 'Paper jam'. One student presses every button and the job is printed three times. Another reads the message. Who fixes it?"
---
Most problems have a small cause. A routine helps you find it without making things worse:

1. **Stop and read.** What does the message say? Say it out loud, or write it down.
2. **Save what you can.** If your work is open, save it somewhere safe before you try anything.
3. **Change one thing, then test.** If you change three things and it works, you do not know which one fixed it.
4. **Restart.** Closing the app, or the device, fixes many problems.
5. **Ask, with details.** Say what you saw, and what you tried, so the helper does not start from the beginning.

Some problems are not yours to fix: a locked school setting, a broken device, or anything that asks for a password that is not yours. Asking is the right move there.

## Predict: what should she do first?

```step
stage: predict
insight: "Committing to an answer tests the move: read the message before you try anything."
check:
  type: predict
  q: "A window pops up on your screen with a message you have not seen before. Your work is open behind it. What is the best first step?"
  options: ["Read the message", "Click OK quickly to get rid of it", "Restart the computer", "Close everything"]
  actual: "Read the message. It often says what is wrong and what to do. Clicking OK without reading can lose work, and restarting first may lose what is not saved."
```

## Try: put the routine in order

```step
stage: run
insight: "Choosing the next step in a story settles the prediction: each step makes the next one safer."
check:
  type: sort
  q: "Is each one a good first move or one to avoid?"
  options: ["Good first move", "Avoid"]
  items:
    - ["Read the message and say it aloud", "Good first move", "The message often says what is wrong."]
    - ["Click every button to see what happens", "Avoid", "You might make it worse and not know which click did it."]
    - ["Save your work somewhere safe", "Good first move", "Then trying things cannot lose it."]
    - ["Change three settings at once", "Avoid", "If it works you do not know which fixed it."]
    - ["Close the app and open it again", "Good first move", "It fixes many small problems."]
    - ["Ignore the warning and keep working", "Avoid", "A warning is often about losing work."]
```

Was your guess right? The good moves are small and safe: read, save, change one thing, restart.

## Worked example: the missing sound

```step
stage: investigate
insight: "Following the routine models the method. Sam changes everything at once, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Your video has no sound. What is the best first thing to try?"
      options: ["Check one thing, such as whether the volume or mute is on, then test", "Change every sound setting", "Reinstall the app", "Delete the video"]
      answer: 0
      feedback: [null, "Then you cannot tell which one mattered, and you may break something else.", "That is a big step. Start with something small.", "The video is probably fine."]
      explain: "Start with the simplest possible cause, change one thing, and test."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's sound is fixed, but he cannot say how, and it breaks again. Click the line where Sam first goes wrong."
      answer: 3
      fault: logic
      misconception: change-everything
      explain: "Line 3: Sam changed the volume, the output device and the app settings all at once. The sound came back, but he does not know which change fixed it, so when it breaks again he starts from nothing."
  - check:
      type: question
      q: "Which help request is most useful?"
      options: ["The video has no sound. The volume is up, headphones are unplugged, and a restart did not help", "It's broken", "Nothing works", "Fix my computer"]
      answer: 0
      feedback: [null, "Broken how? What did you see?", "That could be anything.", "The helper has to start from the beginning."]
      explain: "It says what you saw and what you tried, so the helper can go on from there."
```

### The routine

```worked
\text{Read} :: What does the message say? What changed just before?
\text{Save} :: Keep your work somewhere safe before trying anything.
\text{One change} :: Try one thing, then test. Undo it if it did not help.
\text{Restart} :: Close the app, then the device.
\text{Ask} :: Say what you saw and what you tried. Name the app.
```

Now: what is the best first thing to try?

### Find the mistake

### Asking well

## Vary: whose problem is it?

```step
stage: modify
insight: "Each task changes the problem: one that is yours to fix, one that is not, and a warning."
tasks:
  - check:
      type: sort
      q: "Is it yours to fix, or do you ask?"
      options: ["Try the routine", "Ask a teacher or helper"]
      items:
        - ["The app froze", "Try the routine", "Wait, save if you can, close the app and open it again."]
        - ["A message says an administrator must allow it", "Ask a teacher or helper", "It is a school setting. It is not yours to change."]
        - ["The wi-fi icon shows no connection", "Try the routine", "Check it is on, and try again."]
        - ["A page asks for a password that is not yours", "Ask a teacher or helper", "Do not use someone else's password."]
        - ["A message says your work will be lost if you continue", "Try the routine", "Stop, read, and save in another place first."]
  - check:
      type: question
      q: "A message says 'Your changes will be lost'. What do you do?"
      options: ["Stop, and save in another place if you can", "Click OK", "Click Cancel without reading", "Restart"]
      answer: 0
      feedback: [null, "That might lose your work.", "Cancel might not be safe either. Read it first.", "A restart would lose it."]
      explain: "Stop and read. Save in another place if you can, then decide."
  - check:
      type: question
      q: "You tried the routine and it still does not work. What now?"
      options: ["Ask, and say what you tried", "Keep clicking", "Give up for the year", "Try someone else's login"]
      answer: 0
      feedback: [null, "More guessing makes it harder for the helper.", "Asking is quick.", "Never use a login that is not yours."]
      explain: "Asking is part of the routine. What you tried helps the helper."
```

### Sort them

### A warning

### Still stuck

## Practise: what next?

```step
stage: practise
insight: "Choosing the next step in new problems, so the habit is repeated."
tasks:
  - check:
      type: match
      q: "Match each problem to the best first step."
      pairs:
        - ["A file will not open", "Read the message, then check the file ending"]
        - ["The screen is frozen", "Wait a moment, then close the app and open it again"]
        - ["A page will not load", "Check you are connected, then try again"]
  - check:
      type: question
      q: "In the routine, when do you save your work?"
      options: ["Before you try fixes", "After it is fixed", "Never", "Only at the end of term"]
      answer: 0
      feedback: [null, "It might be lost by then.", "Saving protects you.", "That is too late."]
      explain: "Before you try fixes, so trying things cannot lose it."
```

### Match the step

### When to save

## Make: write a help message

```step
stage: make
insight: "Writing a help message has students use the routine on a problem of their own."
check:
  type: question
  q: "Your slides will not open. You read the message ('file is corrupt'), you tried another computer, and it did not help. Which message do you send?"
  options: ["My slides file says it is corrupt on two computers. Can you check it or an earlier version?", "My slides are broken.", "Fix it.", "Nothing works!!!"]
  answer: 0
  feedback: [null, "Broken how, and what did you try?", "A helper needs details.", "That does not say what happened."]
  explain: "It names the file, the message, what you tried and what you want."
```

## In your school's system

```step
stage: make
tier: typical
insight: "Finding out how to ask for help in the school's own system shows the routine is for real."
check: { type: reflect, text: "I found out how I ask for IT help at my school, and I wrote a help message with what I saw and what I tried for a practice problem." }
```

Ask your teacher how problems are reported at your school. Use a practice problem, such as a file that will not open. Never share a password in a message.
