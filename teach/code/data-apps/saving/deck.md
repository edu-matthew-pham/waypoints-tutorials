---
marp: true
theme: default
html: true
---

# Saving between visits

Data apps · Saving between visits

<!-- Speaker note: Students make the playlist remember its songs between visits with App Builder's Remember toggle (💾) on the Songs table, test return visits with Restart and first visits with Forget saved data, and greet the user differently on each with count(Songs) in an On start of screen event with Else. The Check separates what the browser keeps from the project file and from other computers. About 45 minutes (Try 5 min · Build 1–2 20 min · Check 8 min · Make it yours 12 min). -->

---

## Today

- I can make an app remember a table or variable between visits, and test it.
- I can make an app behave differently on a first visit and a return visit.
- I can explain where remembered data is kept, and what that means on a shared computer.

<!-- Speaker note: Before class: Remember between visits keeps values in the browser's local storage, under this lesson step's own key: on this computer, for this browser user. Nothing is sent anywhere, and nothing goes into the project file (Save keeps the starting rows). On shared computers, the next person in the same browser sees what was remembered. Keep data made up, and talk about it: it's a real design question for any app. Teacher: Before Build 1 (whole class): which apps remember things between visits? Where do you think they keep it? Teacher: Build 2: test both visits before moving on: Restart with songs, then Forget saved data. Teacher: Check: the Kai question is worth a minute's discussion: who else could see a saved journal? -->

---

## Why it matters

> Close a notes app and open it tomorrow: your notes are still there. An app that forgets everything when it closes isn't much use for keeping a list.

<!-- Speaker note: So far, every time the app starts, the table goes back to the rows you typed in the sidebar. Today the playlist will **remember** what was added, so a song added today is still there tomorrow. - **Remember between visits** keeps a variable, list or table in **this browser**: on this computer, for this user, until it's forgotten. - The project file you **Save** still holds the *starting* rows. What the app remembers is kept separately, in the browser. - An app has a **first visit** (nothing saved yet) and **return visits** (something saved). A good app handles both. ![The playlist app with a line saying "Welcome back. Songs saved: 3" above the table of songs.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Which apps on your device remember things between visits? Where do you think they keep them?**

- Would they still be there on another device?
- Who else could see them on a shared computer?

<!-- Speaker note: Some apps keep things in the browser or on the device, some online. App Builder's Remember keeps them in this browser only. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then press **↻ Restart**: the app starts again, and your song is still there. Now press **Forget saved data**: it's like opening the app for the first time.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/saving/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/saving/?full=step-2#step-2)

<!-- Speaker note: 1. On the left, under **Tables**, find *Songs* and click its **💾** button. It lights up: Songs is now remembered. 2. Open the **Run** tab. Add two songs. 3. Press **↻ Restart**. Are your songs still there? 4. Press **Forget saved data**. The table goes back to its one starting song. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/saving/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/saving/?full=step-3#step-3)

<!-- Speaker note: 1. Add an event: **Screen**, **On start of screen**. Leave it with no actions. 2. Give it a sub-event with the condition **Compare** `count(Songs)` **=** `0`, and the action **Set WelcomeText text to** `"Add your first song"`. 3. Add an **Else** below the sub-event (its ⋯ menu), with **Set WelcomeText text to** `"Welcome back. Songs saved: " & count(Songs)`. 4. Test both visits: Restart with songs saved, then remove every song and Restart again. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Another computer

**Kai's playlist remembers Songs. Kai adds five songs at home, then opens the same app on a school computer. What does the table show?**

- Only the five songs
- Only the starting rows
- Nothing at all
- All five songs

* Answer: Only the starting rows

<!-- Speaker note: Remember between visits keeps the songs in the browser the app ran in, on that computer. Another computer has nothing saved, so the app starts from its starting rows. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What does Save keep?

**Kai presses Save at the top and hands in the project file. Which songs are in it?**

- The starting rows typed in the sidebar
- The songs added while the app ran
- None: tables aren't saved
- Both

* Answer: The starting rows typed in the sidebar

<!-- Speaker note: The project file holds how the app is built, including the rows it starts with. What a user adds while it runs is kept by the browser, separately. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## A shared computer <span style="font-size:.6em;color:#64748b">(5 min)</span>

Kai's playlist remembers songs on a library computer. Who sees them next? What should the app tell its user?

<!-- Speaker note: Keep it practical: a note on the screen, a Clear button, not storing anything private. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: remember the last song



- **The last song added:** There's a variable *LastAdded*. 1. Click its **💾** so it's remembered too. 2. In the AddButton event, add **Set variable LastAdded to** `TitleInput.text`. 3. A
- **On a shared computer:** Anyone who uses this browser next will see what the app remembered. Write down one thing a user should know about that, and where in your app you'd tell them.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/saving/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Remembering a plain variable too shows Remember works on any value, and the welcome line puts it to use on a return visit. For students who need more support: Demonstrate a return visit and a first visit on the projector before students build. For early finishers: Remember how many times the app has been opened: a remembered variable that goes up by 1 on start of screen. The hard part, on purpose: Testing: students expect to close the page. Restart (a return visit) and Forget saved data (a first visit) test both without waiting. When students get stuck: Songs are gone after Restart. Ask: Is the 💾 on Songs lit? Fix: Click it so it's lit, add songs again, then Restart. / The welcome message never changes. Ask: Is the condition on a sub-event of On start of screen, with the Else below it? Fix: On start of screen has no actions; its sub-event compares count(Songs) = 0, and the Else sits right under that sub-event. / Forget saved data isn't there. Ask: Is anything remembered yet? Fix: It shows once a variable, list or table has its 💾 lit; switch tabs and come back to Run. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Your app remembers a table of scores. A friend opens it on their own laptop. What will they see, and why?**

* Only the starting rows: remembered data is kept in the browser where it was added, not in the project or online.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Search, filter and sort. -->
