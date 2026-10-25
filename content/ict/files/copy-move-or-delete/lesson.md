---
order: 2
unit: change
title: Copy, move or delete
summary: "Copy makes a second file and leaves the first where it is. Move takes the file out of one folder and puts it in another, so there is still one. Delete sends a file to a bin where you can usually get it back until the bin is emptied, and a file on a USB stick or a shared drive may have no bin at all. A shortcut points to a file and is not a copy. Before you act, say which one you are doing."
language: maths
hook: "A student drags her homework from the Documents folder onto a USB stick, hands it in, and then cannot find the file at home. What did she do?"
---
Four things look alike and are not:

- **Copy**: a second file. The first stays where it is. Now there are two.
- **Move**: the file goes from one folder to another. There is still one.
- **Delete**: the file goes to the **bin** (or trash). It is gone from its folder and can usually be put back until the bin is emptied.
- **Shortcut**: a small file that points to another file. If the original goes, the shortcut stops working.

Dragging a file does different things depending on where you drop it. On the same drive it usually **moves** it. To a different drive or a USB stick it usually **copies** it. The safe habit is to say which one you mean, then check that the file is where you expect, in both places.

## Predict: where is the file?

```step
stage: predict
insight: "Committing to an answer tests the move: moving leaves one file, copying leaves two."
check:
  type: predict
  q: "You move homework.docx from the Documents folder to the Maths folder. How many copies of homework.docx are there?"
  options: ["One, in Maths", "Two, one in each folder", "One, in Documents", "None"]
  actual: "One, in Maths. A move takes the file out of Documents and puts it in Maths. A copy would leave two."
```

## Try: copy or move?

```step
stage: run
insight: "Sorting actions into copy and move settles the prediction: what is left in the first folder tells you which it was."
check:
  type: sort
  q: "After each action, what is left in the first folder?"
  options: ["The file is still there (copy)", "The file is gone (move)"]
  items:
    - ["You press Copy, then Paste in another folder", "The file is still there (copy)", "Copy leaves the original."]
    - ["You press Cut, then Paste in another folder", "The file is gone (move)", "Cut and paste is a move."]
    - ["You drag a file to another folder on the same drive", "The file is gone (move)", "On the same drive, drag usually moves."]
    - ["You drag a file onto a USB stick", "The file is still there (copy)", "To another drive, drag usually copies."]
    - ["You use Save a copy", "The file is still there (copy)", "A copy is a second file."]
```

Was your guess right? Look at what is left behind. If the first folder is empty, it was a move.

## Worked example: the missing homework

```step
stage: investigate
insight: "Choosing the action models the method. Dev deletes the only copy, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "You want your homework in two places, the Maths folder and a USB stick. Which action?"
      options: ["Copy it to the USB stick", "Move it to the USB stick", "Delete it from Maths", "Make a shortcut to it on the USB stick"]
      answer: 0
      feedback: [null, "Then it would be only on the USB stick, and Maths would be empty.", "That would leave it nowhere.", "A shortcut points to the file in Maths, so on another computer it points to nothing."]
      explain: "Copy leaves the file in Maths and puts a second one on the USB stick."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev cannot find his poster at home. Click the line where Dev first goes wrong."
      answer: 3
      fault: logic
      misconception: copy-is-move
      explain: "Line 3: Dev dragged the poster to the USB stick and did not check where it was now. He thought the drag copied it, but he did not look, and the file was moved from the school drive."
  - check:
      type: question
      q: "What should Dev have done after dragging?"
      options: ["Looked in both places to see where the file is", "Nothing, drag always copies", "Emptied the bin", "Renamed the file"]
      answer: 0
      feedback: [null, "Drag sometimes moves and sometimes copies, so look.", "The bin has nothing to do with it.", "A new name would not show where the file is."]
      explain: "Look in both places. That one check tells you whether it was a copy or a move."
```

### Say which one you are doing

```worked
\text{Decide} :: Copy (two files), move (one file, new place) or delete (to the bin).
\text{Do it} :: Use the menu or keys you know: Copy, Cut, Paste. Dragging can do either.
\text{Look} :: Open both folders. Is the file where you expect, and gone or still there where you expect?
\text{Only then} :: Delete the old one, if you meant to.
```

Now: which action leaves two files?

### Find the mistake

### What to check

## Vary: what happens to it?

```step
stage: modify
insight: "Each task changes the action: delete, shortcut and a different place."
tasks:
  - check:
      type: sort
      q: "Can you usually get the file back?"
      options: ["Yes, from the bin", "Maybe not"]
      items:
        - ["Deleted from your laptop, bin not emptied", "Yes, from the bin", "It is in the bin until you empty it."]
        - ["Deleted from a USB stick", "Maybe not", "Many USB sticks have no bin."]
        - ["Deleted from your laptop, then the bin emptied", "Maybe not", "Emptying the bin removes it."]
        - ["Deleted from a shared drive with the teacher's permission", "Maybe not", "Shared drives have their own rules. Ask before relying on a bin."]
  - check:
      type: question
      q: "You make a shortcut to your poster on the desktop, then move the poster to another folder. What happens to the shortcut?"
      options: ["It stops working", "It follows the poster", "It becomes a copy", "It deletes the poster"]
      answer: 0
      feedback: [null, "A shortcut points to a place, not to the file itself.", "A shortcut is only a pointer. There is nothing to copy.", "Shortcuts never delete."]
      explain: "A shortcut points to where the file was. If it moves, the shortcut cannot find it."
  - check:
      type: question
      q: "You are not sure whether a file is still needed. What is the safest thing?"
      options: ["Move it to a folder called Old and keep it", "Delete it", "Empty the bin", "Rename it final"]
      answer: 0
      feedback: [null, "You cannot be sure of getting it back.", "Emptying the bin removes it for good.", "Renaming does not make it safer."]
      explain: "Move it somewhere you can find it. Deleting is for files you are sure about."
```

### Sort them

### Shortcuts

### Not sure

## Practise: copy, move or delete?

```step
stage: practise
insight: "Choosing the action for new jobs, so the habit is repeated."
tasks:
  - check:
      type: match
      q: "Match each job to the action that does it."
      pairs:
        - ["Put a second copy of your project on a USB stick", "Copy"]
        - ["Put a file in the right folder", "Move"]
        - ["Get rid of a blurry photo you are sure about", "Delete"]
  - check:
      type: question
      q: "Your friend drags a folder to the bin by mistake. What do you do first?"
      options: ["Open the bin and put it back", "Empty the bin", "Make a new folder", "Wait to see if it comes back"]
      answer: 0
      feedback: [null, "That would remove it for good.", "That does not bring back the old one.", "It will not come back by itself."]
      explain: "Open the bin and use Put back or Restore, before the bin is emptied."
```

### Match the job

### Back from the bin

## Make: a plan for the poster

```step
stage: make
insight: "Planning the action for a real job has students use the move on their own work."
check:
  type: question
  q: "You finish a poster on a school computer and want to work on it at home. What is the best plan?"
  options: ["Copy it to approved storage, then check it is there before you leave", "Move it onto a USB stick and delete the rest", "Email nothing and hope", "Leave it on the desktop"]
  answer: 0
  feedback: [null, "Then the only copy is on the stick, and sticks get lost.", "Hoping is not a plan.", "You cannot reach it from home."]
  explain: "Copy to approved storage and check it is there. Then there are two."
```

## In your school's storage

```step
stage: make
tier: typical
insight: "Copying, moving and restoring in the school's own storage shows the idea is the same everywhere."
check: { type: reflect, text: "In the storage my school uses, I copied a file to another folder, moved a copy of it to a third folder, checked each folder to see what was left, and put a deleted practice file back from the bin if it has one." }
```

Practise on files you made for this, not on real work. Say which action you are using each time, and look in both folders after. If your storage has no bin, say so out loud, because then a delete may be final.
