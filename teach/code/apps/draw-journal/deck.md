---
marp: true
theme: default
html: true
---

# Draw how you showed it

App Builder apps · Pictures from the user

<!-- Speaker note: Students add drawing to the values journal: a Drawing object on Describe (cleared when the screen starts), Drawing.picture kept in a variable when Add is clicked, and an Image on the Journal screen that shows it with Set picture to the one in. They find out that action order matters (Nib clears the page before keeping it) and that one variable keeps only the latest drawing, which sets up tables in Data apps. About 45 minutes (Try 5 min · Build 1 10 min · Build 2 8 min · Build 3 10 min · Check 7 min · Make it yours 5 min). -->

---

## Today

- I can add a Drawing and clear it when a screen starts.
- I can keep what the user drew in a variable with Drawing.picture.
- I can show a picture the app made in an Image.
- I can explain why one variable keeps only the latest drawing.

<!-- Speaker note: Before class: This lesson starts from the finished values journal with room made for a drawing (Add moved down on Describe, the list shorter on Journal). Students who missed the journal lesson can still do it: the first step has them use the finished app. A drawing is made while the app runs. Drawing.picture turns it into a picture the app keeps in the browser (on this device, nothing is sent) and names it, such as media:7f3a09c2. Variables, lists and tables hold that name. Drawings, not photos, so there are no faces. If a student clicks Add without drawing anything, the Journal says "There is no picture yet". That's honest: there's nothing to show. An If (LastDrawing is not "") is a fine extra for a quick student. The second check question is the set-up for Data apps › A journal with drawings, where a table keeps a drawing with every entry. Handing in: drawings are made while the app runs, so a Share link carries the app but not the student's entries. To hand in entries with their drawings, students use Save and include what the app kept (a .zip). Teacher: Try it: ask students to watch LastDrawing on the left as they click Add. What does media:… mean? Teacher: Build 3: checkpoint: does the drawing show on the Journal? If it says there's no picture, did they draw before Add? Teacher: Check: take a vote on the two-entries question before anyone tries it. -->

---

## Why it matters

> Some things are easier to draw than to say. Apps let you draw, take photos and record sounds; each makes a picture or sound the app can keep and show somewhere else.

<!-- Speaker note: The values journal from the last lesson keeps what you wrote. Today it also keeps a drawing of what you did. 1. **Describe:** a space to draw in, under the typing box. 2. **Journal:** the drawing you just made, under the list. A drawing is something the app *makes* while it runs, like a photo or a recording. The app keeps it as a picture, and a variable can hold it, just as a variable holds a number or some text. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**When you take a photo or draw something in an app, where does it go? How does another screen get to show it?**

- Is the picture inside the button, the screen, or somewhere else?

<!-- Speaker note: The app keeps the picture and gives it a name. A variable can hold the name, so any screen can show it, just as Chosen carries the value. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

Pick a value, type what you did, then draw it in the box with the mouse (or your finger). Click **Add to my journal**. The drawing shows on the Journal screen.

Watch **LastDrawing** under the variables on the left. When you click Add, it changes from `""` to something like `media:7f3a09c2`: that's the app's name for the picture it kept.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-2#step-2)

<!-- Speaker note: 1. Open the **Describe** screen. We've moved *Add to my journal* down to make room. 2. Click **+ Add object**, then **Drawing**. It's called *Drawing1*: rename it *Drawing* (double-click its name in the sidebar, or its **⋯** menu, **Rename**). 3. In **Properties**, place it under the typing box: x 229, y 184, width 342, height 280 (or drag it there). 4. On the **Events** tab, add an action to **On start of screen**: **Drawing**, **Clear Drawing**. 5. Run it from Choose and draw something. Go back to Choose and pick again: the page is clean. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-3#step-3)

<!-- Speaker note: 1. In the sidebar, under the variables, add a variable called *LastDrawing*. Leave its starting value empty. 2. On the Describe screen, add an action to **AddButton is clicked**: **Variables**, **Set variable** LastDrawing to `Drawing.picture` 3. Run it, draw, and click Add. Watch LastDrawing change on the left. `Drawing.picture` is the drawing as a picture. The app keeps it and gives it a name such as `media:7f3a09c2`, so the variable holds that name, not all the dots of the drawing. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-4#step-4)

<!-- Speaker note: 1. Open the **Journal** screen. We've made the list shorter to make room. 2. **+ Add object**, **Image**. Rename it *LastImage*, and place it under the list: x 335, y 335, width 130, height 130. 3. On the **Events** tab, add an action to **On start of screen**: **LastImage**, **Set LastImage picture to the one in**, value `LastDrawing` 4. Run it from Choose: pick, type, draw, Add. Your drawing is on the Journal. There are two "set picture" actions. *Set picture to* picks one of the app's pictures while you design it. *Set picture to the one in* works it out while the app runs, from a variable or `Drawing.picture`. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's slip

**Nib's Journal shows the error "There is no picture yet", even though Nib drew something. Click the line where Nib first goes wrong.**

```
 1  AddButton is clicked: Add the entry to the end of list Journal.
 2  Then Clear Drawing, so the next entry starts with a clean page.
 3  Then Set variable LastDrawing to Drawing.picture.
 4  Then Go to screen Journal, which shows the picture in LastDrawing.
```

* Answer: line 2

<!-- Speaker note: Line 2: Clear Drawing runs before Drawing.picture is read, so the page is empty when Add keeps it. Actions run in order, top to bottom: keep the picture first (or clear it when the screen starts, as in Build 1). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two entries

**You add a Kindness entry with a heart drawing, then a Courage entry with a star. What does the Journal screen show?**

- Only the Courage entry, with the star
- Both entries in the list, and only the star drawing
- Both entries in the list, and the heart drawing
- Both entries in the list, and both drawings

* Answer: Both entries in the list, and only the star drawing

<!-- Speaker note: The list keeps every entry, but LastDrawing is one variable: the star replaces the heart. Keeping a drawing with every entry needs somewhere that holds many, such as a table (the Data apps course does this next). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Heart, then star <span style="font-size:.6em;color:#64748b">(5 min)</span>

Vote: after a heart entry and then a star entry, what does the Journal show? Then try it.

<!-- Speaker note: Both entries in the list, only the star drawing. One variable holds one drawing. A table can keep one with every entry: that's Data apps. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: Clear and Undo



- **A Clear button:** Add a Button *ClearButton* (text *Clear*) under the drawing, moving Add down a little, and an event: **ClearButton is clicked** → **Clear Drawing**.
- **An Undo button:** Add *UndoButton* (text *Undo*) beside it: **UndoButton is clicked** → **Undo the last line on Drawing**. Want more? **Set pen colour** on Describe's start, with

[Open this step](https://tutorials.learningwaypoints.com/code/apps/draw-journal/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Clear and Undo are ordinary button events with Drawing actions, so a user can fix a drawing without starting the entry again. For students who need more support: Do Build 1 together on the board; pairs do Builds 2 and 3. For early finishers: Set the pen colour by value on Describe's start: an If on Chosen, with a colour for each value (Set pen colour of Drawing to "red"). The hard part, on purpose: The two picture actions look alike. Set picture to picks a picture while you design; Set picture to the one in works one out while the app runs. If students pick the first, the list of choices has no drawing in it: that's the clue. When students get stuck: The Journal says 'There is no picture yet'. Ask: Did you draw before you clicked Add? Which runs first in your Add event: Clear or Set variable? Fix: Draw first; and keep the picture before clearing (or clear only on start of screen). / The Image shows a star, not the drawing. Ask: Which picture action did you use? Fix: Use Set LastImage picture to the one in, with LastDrawing. / The drawing from last time is still there on Describe. Ask: What happens when the Describe screen starts? Fix: Add Clear Drawing to On start of screen. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Your app keeps a photo when a Take photo button is clicked, then clears the photo for next time. Which should come first, and why?**

* Keep the photo first (set the variable to Photo.picture), then clear. Actions run top to bottom; clearing first would keep an empty picture.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Show it's done: photos, the same idea with a Photo, a picture per chore. In Data apps, A journal with drawings keeps a drawing with every entry, in a table. -->
