---
marp: true
theme: default
html: true
---

# Two lists that must agree

Data apps · Lists that must agree

<!-- Speaker note: Students build a playlist kept in two parallel lists, Titles and Artists, where a song's title and artist sit at the same place in each. Add puts a value on the end of both lists; clicking a title removes ClickedIndex from both. The Check shows what happens when only one list changes: every later song gets the wrong artist. This is the problem the next lesson's table solves. About 50 minutes (Try 5 min · Build 1–2 15 min · Check 10 min · Make it yours 15 min). -->

---

## Today

- I can keep two lists in step by changing both in the same event.
- I can explain why a title and its artist must be at the same place in each list.
- I can predict what goes wrong when only one list changes.

<!-- Speaker note: Before class: This lesson uses only what App Builder apps taught (lists, List objects, ClickedIndex), at Level 3. Its point is the problem, not the solution: keep the lesson short and let the third list in Make it yours feel clumsy. Songs and artists are made up. Students can use their own made-up songs; keep real song lyrics out. Lists count from 1 in App Builder (ClickedIndex, item(list, 1)). Python counts from 0; that's for later. Teacher: Before Build 2 (whole class, on the deck): if we remove Arc from Titles only, who sang Cove? Vote, then try it. Teacher: Check: draw the two lists as columns on the board, cross out one item in one column, and draw the arrows that are now wrong. -->

---

## Why it matters

> A music app knows who sang every song. Underneath, something has to keep each title and its artist together.

<!-- Speaker note: Today's playlist keeps its songs in **two lists**: one for titles and one for artists. A song's title and its artist sit at the **same place** in each list: item 1 of *Titles* goes with item 1 of *Artists*, item 2 with item 2, and so on. The place number is the only thing linking them. ![A playlist app: boxes for a title and an artist, an Add song button, and two lists side by side: Blue Sky, Arc, Cove and Kai, Mo, Lu.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A contacts app shows names and phone numbers. If names and numbers were kept in two separate lists, what could go wrong?**

- What links a name to its number?
- What happens if one list changes and the other doesn't?

<!-- Speaker note: Only their place in each list links them. Keep this question open: the next lesson answers it with a table. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then click a title to remove that song. On the left, beside *Titles* and *Artists*, you can see how many items each list has now.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/two-lists/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/two-lists/?full=step-2#step-2)

<!-- Speaker note: The lists *Titles* and *Artists* are made for you (left side, under Lists), and each List object on the screen shows one of them. 1. On the **Events** tab, add an event: **AddButton is clicked**. 2. Add the action **Lists**, **Add … to the end of list**: value `TitleInput.text`, list *Titles*. 3. Add a second action to the same event: `ArtistInput.text` to the end of *Artists*. 4. Run it and add a song. Is the new title level with its artist? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/two-lists/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/two-lists/?full=step-3#step-3)

<!-- Speaker note: 1. Add an event: **TitleList**, **An item in TitleList is clicked**. Inside it, **ClickedIndex** is the place of the title that was clicked: 1 for the first, 2 for the second. 2. Add the action **Lists**, **Remove item … from list**: index `ClickedIndex`, list *Titles*. 3. Add the same action for *Artists*. 4. Run it and remove the middle song. Check every title still sits next to its own artist. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happens to Cove?

**Titles is Blue Sky, Arc, Cove. Artists is Kai, Mo, Lu. An event removes item 2 from Titles only. Who does the app now say sang Cove?**

- Mo
- Kai
- Nobody: the app shows an error
- Lu

* Answer: Mo

<!-- Speaker note: Cove moves up to place 2 in Titles, but Artists didn't change, so place 2 there is still Mo. Every song after the removed one now has the wrong artist. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**After Nib removes a song, the artists are wrong for every song below it. Click the line where Nib first goes wrong.**

```
 1  Nib's event: when an item in TitleList is clicked.
 2  Its action: Remove item ClickedIndex from list Titles.
 3  Nib runs the app and clicks Arc to remove it.
 4  Now the app says Cove was sung by Mo.
```

* Answer: line 2

<!-- Speaker note: Line 2: Nib only removes the item from Titles. Artists keeps the old item, so every artist below it is now one place out. Both lists must lose the same place. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Two columns on the board <span style="font-size:.6em;color:#64748b">(5 min)</span>

Write Titles and Artists as two columns. Cross out Arc in Titles only, close the gap, and draw an arrow from each title to the artist beside it now.

<!-- Speaker note: Every arrow below the removed song points to the wrong artist. Each list is fine on its own: the mistake is in how they line up. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: a third list



- **Add a Lengths list:** This screen now has a *Minutes* box and a third List object, *LengthList*. 1. Add a list called *Lengths* (left side, under Lists), and set *LengthList* to show
- **What about sorting?:** Imagine a button that sorts *Titles* from A to Z. Write one sentence: what would happen to the artists and lengths? Keep it for the next lesson, which keeps eac

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/two-lists/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Adding a third list makes the cost of keeping parallel lists in step visible: every change now has to touch three places. For students who need more support: Build 1 together as a class; pairs do Build 2. For early finishers: Add a Sort A to Z button. With only the list actions, how close can you get, and what goes wrong? (A table, next lesson, sorts whole rows.) The hard part, on purpose: The bug is invisible until the second list is looked at: each list is fine on its own. Have students read the two lists side by side, row by row, after every removal. When students get stuck: Nothing is added. Ask: Which event runs when Add song is clicked, and does it name both lists? Fix: Check the event's condition is AddButton is clicked, with two Add to the end of list actions. / Clicking a title does nothing. Ask: Which List's items does the event listen to? Fix: Use An item in TitleList is clicked, and Remove item ClickedIndex (not 1) from each list. / The lists are different lengths. Ask: Is there an event that changes only one list? Fix: Every add and every remove must change both lists. Press Start again to get the starting lists back. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Two lists: Names (Ana, Ben, Cy) and Scores (7, 4, 9). Ben is removed from Names only. What score does the app now show for Cy?**

* 4: Cy moved up to place 2 in Names, and place 2 in Scores is still Ben's 4.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: One table instead, where each song is one row and can't be split up. -->
