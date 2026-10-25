---
order: 3
unit: keep
title: Versions and backup
summary: "Saving over a file replaces the old one, so a mistake you save cannot be undone unless there is an earlier version. Version history, or a copy with a new date in its name, keeps earlier versions. A backup is a second copy somewhere else, so losing one place does not lose the work. A synced cloud folder copies your mistakes and deletions as well, so it is not a backup by itself. Use only the storage your school has approved."
language: maths
hook: "A student spends a week on a report, then saves a bad edit over the top and closes it. Is the good version gone?"
---
Two different things keep your work safe:

- A **version** is an earlier state of the same file. Saving over a file replaces it, unless the app or the folder keeps earlier versions. **Version history** lists them so you can go back. Without it, you can save a copy with a new date in its name before a big change.
- A **backup** is a second copy in a **different place**, so if one place fails, is lost or is deleted, the work is still somewhere. Two copies in the same folder are not a backup.

A **synced** folder keeps a copy on your device and a copy online, and changes in one appear in the other. That includes a deletion or a mistake. Sync is not a backup on its own.

## Predict: is the old one still there?

```step
stage: predict
insight: "Committing to an answer tests the move: Save replaces the file, and only a version keeps the old one."
check:
  type: predict
  q: "You open report.docx, delete two paragraphs, press Save and close it. The app keeps no earlier versions. Can you get the paragraphs back?"
  options: ["No, Save replaced the file", "Yes, press Undo after reopening", "Yes, they are in the bin", "Yes, the computer keeps every change"]
  actual: "No. Save replaced the file with the new one. Undo works while the file is open, but once it is saved and closed, the old version is gone unless a version was kept."
```

## Try: version or backup?

```step
stage: run
insight: "Sorting situations into version and backup settles the prediction: a version is an earlier state, a backup is another place."
check:
  type: sort
  q: "Which does each one give you?"
  options: ["A version", "A backup"]
  items:
    - ["report-2026-10-12.docx and report-2026-10-19.docx in the same folder", "A version", "Two states of the same file."]
    - ["A copy of the report on a different device", "A backup", "A second place."]
    - ["Version history in your school's storage", "A version", "Earlier states of the same file."]
    - ["A copy on the school drive and a copy in approved cloud storage", "A backup", "Two different places."]
    - ["report-copy.docx saved in the same folder", "A version", "Same place, so it protects against a bad edit but not a lost folder."]
```

Was your guess right? A version protects against a bad **edit**. A backup protects against a lost **place**. You need both.

## Worked example: the lost week

```step
stage: investigate
insight: "Choosing the protection models the method. Lin keeps one copy, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Your laptop falls and breaks. Which would have protected your work?"
      options: ["A backup in a different place", "A version in the same folder", "A shortcut", "A new file name"]
      answer: 0
      feedback: [null, "Versions in the same place are lost with the laptop.", "A shortcut points to a file on the same laptop.", "A name does not protect anything."]
      explain: "A backup in a different place, so the laptop breaking does not take the work."
  - check:
      type: bug
      code: "working.txt#lin"
      text: "Lin lost her whole project. Click the line where Lin first goes wrong."
      answer: 3
      fault: logic
      misconception: only-one-copy
      explain: "Line 3: Lin kept her only copy on the laptop, and had no second place. When the laptop failed, there was nothing else. A backup in another approved place would have saved the week."
  - check:
      type: question
      q: "A friend says her cloud folder is her backup. She deletes a file from her laptop by mistake. What happens in the cloud folder?"
      options: ["The deletion usually syncs, and the file goes from the cloud copy too", "The cloud keeps it for ever", "Nothing, the cloud is separate", "The file comes back on its own"]
      answer: 0
      feedback: [null, "Some services keep deleted files for a while, but you cannot count on it.", "A synced folder is not separate: it mirrors changes.", "It does not come back by itself."]
      explain: "Sync copies deletions and mistakes as well. Find out whether your service keeps old versions or deleted files, and for how long."
```

### Two ways to be safe

```worked
\text{Before a big change} :: Save a copy with the date in its name, or check that version history is on.
\text{After the work} :: Save a copy in a second place that is approved by the school.
\text{Check} :: Open the second copy. Does it open, and is it the one you expect?
\text{Often} :: Little and often. The newest work is the work you lose.
```

Now: what protects against a broken laptop?

### Find the mistake

### Sync

## Vary: what would it save?

```step
stage: modify
insight: "Each task changes the danger: a bad edit, a lost device and a delete."
tasks:
  - check:
      type: sort
      q: "What does it protect you from?"
      options: ["A bad edit", "A lost or broken device"]
      items:
        - ["Version history", "A bad edit", "It lets you go back to an earlier state."]
        - ["A copy in approved cloud storage", "A lost or broken device", "It is in a different place."]
        - ["Saving a dated copy before a big change", "A bad edit", "It keeps the earlier state."]
        - ["A second copy on another device", "A lost or broken device", "A different place."]
  - check:
      type: question
      q: "How many places should something you cannot redo be in?"
      options: ["At least two, in different places", "One, kept safe", "As many as one folder holds", "None, trust the cloud"]
      answer: 0
      feedback: [null, "One place can fail.", "The same place can still be lost.", "No single place can be trusted."]
      explain: "At least two places, so that losing one does not lose the work."
  - check:
      type: question
      q: "When is the best time to make a backup?"
      options: ["Before something goes wrong, and often", "After the laptop breaks", "At the end of the year", "Only when asked"]
      answer: 0
      feedback: [null, "Then it is too late.", "A year is a long time to lose.", "Waiting for someone to ask loses work."]
      explain: "Before, and often. The newest work is the work you would lose."
```

### Sort them

### How many

### When

## Practise: a plan

```step
stage: practise
insight: "Choosing protection for new jobs, so the habit is repeated."
tasks:
  - check:
      type: match
      q: "Match each risk to the best protection."
      pairs:
        - ["You might save a bad edit", "Version history or a dated copy"]
        - ["Your laptop might be lost", "A copy in another approved place"]
        - ["You might delete the wrong file", "Check the bin, and keep a backup"]
  - check:
      type: question
      q: "Which is a backup?"
      options: ["The report on the laptop and a copy in school-approved storage", "Two copies in the same folder", "A shortcut on the desktop", "The same file saved twice"]
      answer: 0
      feedback: [null, "Same folder, same place.", "A shortcut points to the same file.", "Saving twice in the same place is still one place."]
      explain: "A backup is a copy in a different place."
```

### Match the risk

### Which is a backup

## Make: your backup plan

```step
stage: make
insight: "Planning protection for real work has students use the move on their own project."
check:
  type: question
  q: "You are doing a big project over four weeks. Which plan protects it best?"
  options: ["Save a dated version each week, and keep a copy in approved storage", "Keep it on the laptop and be careful", "Save it once at the end", "Email it to a friend now and then"]
  answer: 0
  feedback: [null, "Careful is not a plan, and the laptop is one place.", "Four weeks is too long to risk.", "Emailing to a friend is not approved storage, and it is irregular."]
  explain: "Versions protect against a bad edit, a copy elsewhere protects against a lost place, and weekly means you lose at most a week."
```

## In your school's storage

```step
stage: make
tier: typical
insight: "Finding version history and making a second copy in the school's own storage shows the idea is the same everywhere."
check: { type: reflect, text: "In the storage my school uses, I found out whether it keeps earlier versions of a file and how to get one back, saved a dated copy of a practice file, and made a second copy in another approved place." }
```

Use a practice file. Many services show version history in a file's menu or its details. If yours does not, a dated copy is the manual way. Use only storage the school has approved, and do not sign up to a service of your own for school work.
