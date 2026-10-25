---
order: 1
unit: find
title: A place for everything
summary: "A folder holds files and sits inside another folder, so every file has an address called a path, such as Science/Beans/results-2026-10-12.txt. A name should say what the file is and still sort well: a clear word first, the date as year-month-day, and no final-final-2. The ending (.txt, .docx, .png) says what kind of file it is."
language: maths
hook: "Two students save the same bean results. One finds them in ten seconds and the other in ten minutes. What did the first one do?"
---
A **folder** holds files and other folders. A **path** is the address of a file: the folders you go through, in order, then the file. Here the path is `Science/Beans/results-2026-10-12.txt`:

```text
Documents
  Science
    Beans
      results-2026-10-12.txt
  Maths
    homework-2026-10-14.docx
```

A good **name** says what the file is, and it still makes sense in a long list. The ending after the dot, such as `.txt` or `.docx`, says what kind of file it is.

## Predict: which folder?

```step
stage: predict
insight: "Committing to an answer tests the move: a path is read from the outside in."
check:
  type: predict
  q: "A file has the path Science/Beans/results-2026-10-12.txt. Which folder is it directly inside?"
  options: ["Beans", "Science", "Documents", "results-2026-10-12.txt"]
  actual: "Beans. The path goes from the outside in: Science contains Beans, and Beans contains the file."
```

## Try: put the files where they belong

```step
stage: run
insight: "Sorting files into folders settles the prediction: every file has one place, and the folder says what it is for."
check:
  type: sort
  q: "Which folder should each file go in?"
  options: ["Science", "Maths", "Art"]
  items:
    - ["bean-growth-2026-10-12.xlsx", "Science", "Bean growth is a science investigation."]
    - ["fractions-homework-2026-10-14.docx", "Maths", "Fractions are maths."]
    - ["self-portrait-draft-1.png", "Art", "A self-portrait is art."]
    - ["lab-report-plan.docx", "Science", "A lab report is science."]
    - ["graph-practice.xlsx", "Maths", "Graph practice is maths."]
```

Was your guess right? The folder is the part of the address that says what the file is for. If you know the folder, you know where to look.

## Worked example: names that work

```step
stage: investigate
insight: "Choosing a name models the method. Ana saves over her good file, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Which name is best for a file with the bean results from 12 October 2026?"
      options: ["bean-results-2026-10-12.txt", "results.txt", "12-10-26 NEW results FINAL.txt", "bean results (2).txt"]
      answer: 0
      feedback: [null, "Too short: there may be many results files, and it will not say which.", "The date is not in year-month-day order, and NEW FINAL will not stay true.", "(2) says nothing about what is in it."]
      explain: "It says what it is (bean results) and has the date as year-month-day, so a sorted list puts the files in date order."
  - check:
      type: bug
      code: "working.txt#ana"
      text: "Ana cannot find her bean results. Click the line where Ana first goes wrong."
      answer: 3
      fault: logic
      misconception: final-final-name
      explain: "Line 3: Ana named the file results-final-final-2 instead of saying what is in it. Words like final stop being true when she saves another one, and nobody can tell which is newest."
  - check:
      type: question
      q: "Why write the date as 2026-10-12 and not 12-10-26?"
      options: ["A list sorted by name puts the files in date order", "It looks nicer", "Computers cannot read the other way", "It is shorter"]
      answer: 0
      feedback: [null, "It may look fine, but that is not the reason.", "Computers can read both. The point is sorting.", "It is not shorter."]
      explain: "Year first, then month, then day, so sorting by name also sorts by date."
```

### A name that says what it is

```worked
\text{What is it?} :: Start with the thing: bean-results, fractions-homework.
\text{Which one?} :: Add the date as year-month-day, so a list sorts into order.
\text{No spaces or odd signs} :: Use hyphens. Spaces and signs such as # or / can cause trouble.
\text{Keep the ending} :: .txt, .docx, .png say what kind of file it is. Do not change it by typing.
```

Now: which name says what the file is?

### Find the mistake

### Why year first

## Vary: good name or poor name?

```step
stage: modify
insight: "Each task changes what is being named: good names, an unclear name and a path."
tasks:
  - check:
      type: sort
      q: "Is each name good or poor?"
      options: ["Good name", "Poor name"]
      items:
        - ["fractions-homework-2026-10-14.docx", "Good name", "It says what it is and has the date."]
        - ["Document1.docx", "Poor name", "It says nothing about what is in it."]
        - ["bean-results-2026-10-12.txt", "Good name", "What it is, then the date."]
        - ["final-final-2.docx", "Poor name", "Final stops being true, and 2 of what?"]
        - ["scan0042.png", "Poor name", "A number from a device, not a description."]
        - ["lab-report-draft-2026-10-20.docx", "Good name", "What it is, which version, and when."]
  - check:
      type: question
      q: "A file has the path Maths/Algebra/quiz-2026-10-18.docx. What folders do you open, in order, to find it?"
      options: ["Maths, then Algebra", "Algebra, then Maths", "quiz, then Maths", "Only Maths"]
      answer: 0
      feedback: [null, "A path goes from the outside in. The first folder is the outer one.", "quiz-2026-10-18.docx is the file, not a folder.", "The file is one folder further in."]
      explain: "A path goes from the outside in: open Maths, then Algebra, and the file is inside."
  - check:
      type: question
      q: "You rename photo.png to photo.docx by typing the new ending. What happens?"
      options: ["It is still a picture, and it will probably not open", "It becomes a document", "Nothing, the ending does not matter", "The picture gets smaller"]
      answer: 0
      feedback: [null, "Renaming does not change what is inside the file.", "The ending tells the computer which app opens it.", "Size is not changed by a name."]
      explain: "The ending says which app to open the file with. Changing the ending does not change what is inside."
```

### Sort them

### Read the path

### Changing the ending

## Practise: where would you look?

```step
stage: practise
insight: "Reading paths and naming new files, so the habit is repeated on new examples."
tasks:
  - check:
      type: match
      q: "Match each path to the folder the file is directly inside."
      pairs:
        - ["Science/Beans/results-2026-10-12.txt", "Beans"]
        - ["Maths/Fractions/homework-2026-10-14.docx", "Fractions"]
        - ["Art/Portraits/self-portrait-draft-2026-10-02.png", "Portraits"]
  - check:
      type: question
      q: "You take a photo of your volcano model on 3 November 2026 for Science. Which is the best name?"
      options: ["volcano-model-2026-11-03.png", "IMG_4021.png", "photo.png", "science-volcano-final.png"]
      answer: 0
      feedback: [null, "A number from the camera says nothing about the picture.", "Every photo would be called photo.", "Final will not stay true, and there is no date."]
      explain: "What it is, then the date as year-month-day."
```

### Match the path

### Name the photo

## Make: plan your own folders

```step
stage: make
insight: "Planning a folder for a real set of work has students use the move on their own subjects."
check:
  type: question
  q: "You have Science, Maths and Art work this term. Which plan is easiest to search?"
  options: ["A folder for each subject, with a folder inside for each topic", "One folder with every file in it", "A new folder for every day", "Everything on the desktop"]
  answer: 0
  feedback: [null, "A long list is hard to look through, and names must carry everything.", "Dates are in the name already. Days mix every subject together.", "The desktop fills up and is not backed up like your folders."]
  explain: "One folder for each subject, with topic folders inside, so the path says what and where."
```

## In your school's storage

```step
stage: make
tier: typical
insight: "Making the folders in the school's own storage shows the idea is the same everywhere."
check: { type: reflect, text: "In the storage my school uses, I made a folder for a subject with a topic folder inside it, saved a file in the topic folder with a name that says what it is and the date as year-month-day, and read its path." }
```

Use only the storage your school has approved. File Explorer, Finder, Google Drive and OneDrive all have New folder and Rename. The path is usually shown at the top of the window, or in the file's details.
