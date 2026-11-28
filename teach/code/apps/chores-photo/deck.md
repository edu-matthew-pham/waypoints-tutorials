---
marp: true
theme: default
html: true
---

# Show it's done: photos

App Builder apps · Pictures from the user

<!-- Speaker note: Students give the chores checklist a photo per chore. A Photo object (camera allowed, or Choose a photo), a variable ForChore set when a chore's tick box is switched on, and one event, A photo is taken with Camera, whose sub-events check ForChore and show the photo beside the right chore. Nib's photo event skips the check, so every photo lands beside the bed. About 45 minutes (Try 5 min · Build 1 6 min · Build 2 8 min · Build 3 12 min · Check 6 min · Make it yours 6 min). -->

---

## Today

- I can add a Photo and use the picture it takes or the one the user chooses.
- I can use a variable to remember something between two events.
- I can check that variable in sub-events, so one event does the right thing for each case.

<!-- Speaker note: Before class: This lesson starts from the finished chores checklist (tick boxes and the dark mode button), with room made beside each chore for a hidden picture (BedPic, FeedPic, HomeworkPic). It's Level 3 (Photo); each step opens App Builder at Level 3. It follows Draw how you showed it, which met a picture the user makes, and the values journal, where a variable carried a choice between screens. Camera: off unless Allow camera is ticked in the Photo's properties, and the browser asks too. Some school devices block cameras; Choose a photo (the button on every Photo) works everywhere, with no permission, and runs the same event. Photos stay in this browser (nothing is uploaded) and are shrunk to at most 1280 px. Photos of things, not people: say so before the Try step. Students shouldn't photograph each other. The second check question shows a gap on purpose: unticking doesn't clear ForChore, so a photo still goes to the last chore ticked. Make it yours hides the photo on untick; resetting ForChore to "" is in the ideas. Teacher: Before Try: photos of objects only. Choose a photo works if cameras are blocked. Teacher: Build 2: ask what the photo event will know when it runs. Write ForChore on the board. Teacher: Build 3: checkpoint: two chores, two photos, each beside its own chore. -->

---

## Why it matters

> Apps ask for proof all the time: a photo of the parcel at the door, the receipt, the finished job. The app has to know which job each photo belongs to.

<!-- Speaker note: The chores checklist from earlier has a tick box for each chore. Today each chore also gets a **photo** to show it's done: the made bed, the dog's bowl, the finished homework. - A **Photo** object takes a photo with the camera, or lets the user **Choose a photo** from the computer. - When a photo is taken (or chosen), the event **A photo is taken with Camera** runs, and `Camera.picture` is the photo. - The app has to know **which chore** the photo is for. A variable remembers the chore you ticked last. Photos of things, not people. They stay in this browser: nothing is sent anywhere. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A delivery driver takes a photo of each parcel at the door. How does the app know which parcel each photo belongs to?**

- What happens just before the photo is taken?

<!-- Speaker note: The driver taps the parcel first; the app writes that down, then joins it to the photo. Today's chores app does the same with a variable. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

1. Tick **Make my bed**.
2. Click **🖼 Choose a photo** and pick any photo on your computer, or tap the camera to start it and press the round button.
3. The photo appears beside *Make my bed*. Now tick another chore and add another photo.

No camera, or your school blocks it? **Choose a photo** works everywhere.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-2#step-2)

<!-- Speaker note: 1. **+ Add object**, **Photo**. Rename it *Camera* and put it under the 🌙 Dark button (x 229, y 372). 2. In its **Properties**, tick **Allow camera in this app**. The browser will ask too. 3. Run it: tap the Photo to start the camera, or click **Choose a photo**. We've made room beside each chore for its photo: *BedPic*, *FeedPic* and *HomeworkPic*. They're hidden until they have a photo. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-3#step-3)

<!-- Speaker note: 1. Add a variable *ForChore*. Leave it empty. 2. Add an event: **BedJob**, **BedJob is switched**. It runs when the tick box is ticked *or* unticked. 3. From its **⋯** menu, **Add a sub-event**: **BedJob**, **BedJob is on** (it's just been ticked), with the action **Set variable** ForChore to `"Bed"`. 4. Do the same for FeedJob (`"Feed"`) and HomeworkJob (`"Homework"`). 5. Run it and tick a chore. Watch *ForChore* on the left. Why only when ticking, not unticking? A photo shows a chore is *done*. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-4#step-4)

<!-- Speaker note: 1. Add an event: **Camera**, **A photo is taken with Camera**. 2. From its **⋯** menu, **Add a sub-event**: **Variables**, **Variable** ForChore **=** `"Bed"`, with two actions: - **BedPic**, **Set BedPic picture to the one in** `Camera.picture` - **BedPic**, **Show BedPic** 3. Add two more sub-events under the photo event, the same way, for `"Feed"` (FeedPic) and `"Homework"` (HomeworkPic). 4. Run it: tick a chore, add a photo, then another chore and another photo. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Tick, untick, photo

**You tick Do my homework, then untick it, then choose a photo. Where does the photo go?**

- Nowhere: nothing is ticked
- Beside Do my homework
- Beside every chore
- Beside Make my bed

* Answer: Beside Do my homework

<!-- Speaker note: Unticking doesn't change ForChore, so it still says "Homework" and the photo goes there. (Make it yours fixes that.) -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's photos

**Every photo Nib adds appears beside Make my bed, whichever chore was ticked. Click the line where Nib goes wrong.**

```
 1  BedJob is switched, and BedJob is on: Set variable ForChore to "Bed" (the same for Feed and Homework).
 2  A photo is taken with Camera: this event runs for every photo.
 3  In it: Set BedPic picture to the one in Camera.picture, then Show BedPic.
 4  Nib ticks Feed the dog and chooses a photo.
```

* Answer: line 3

<!-- Speaker note: Line 3: Nib's photo event sets BedPic every time, without checking ForChore. The sub-events with ForChore = "Bed", "Feed" and "Homework" are what send each photo to its own chore. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Tick, untick, photo <span style="font-size:.6em;color:#64748b">(4 min)</span>

Predict where the photo goes after ticking Homework, unticking it, then adding a photo. Then try it, watching ForChore on the left.

<!-- Speaker note: Beside Homework: unticking doesn't change ForChore. A variable keeps its value until something sets it again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: untick hides the photo

When a chore is unticked, its photo should go too. Select each *is on* sub-event, choose **⋯**, **Add an Else below** (it runs when the chore is unticked), and give it **Hide BedPic** (or FeedPic, HomeworkPic). A new photo shows it again.

More ideas: a **Take a photo** button of your own (untick *Show a take-photo button* on the Photo, then **Take a photo with Camera** in your button's event, with what comes next in that same event), or set ForChore back to `""` when unticking, so a photo with nothing ticked goes nowhere.

[Open this step](https://tutorials.learningwaypoints.com/code/apps/chores-photo/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Hiding the photo in the untick branch keeps what the app shows true to what's done. For students who need more support: Do Build 3's first sub-event together; pairs copy it for Feed and Homework. For early finishers: Keep the photos in a table instead (chore, photo), so the app could show a history: that's how Data apps' A journal with drawings works. The hard part, on purpose: The tick and the photo are two different moments, and students expect the photo event to just know which chore it's for. Ask: when the photo arrives, what does the app know? Only what something wrote down earlier: ForChore. When students get stuck: The camera says it's off for this app. Ask: Is Allow camera ticked in the Photo's properties? Is the camera blocked on this computer? Fix: Tick it, or use Choose a photo, which works either way. / Nothing appears after a photo. Ask: Did you tick a chore first? What does ForChore say on the left? Fix: Tick a chore first (ForChore is set when ticking), and check each sub-event has Show as well as Set picture. / Every photo goes beside the bed. Ask: Does each Set picture action sit inside a sub-event that checks ForChore? Fix: Put each one in its own sub-event: ForChore = "Bed", "Feed" or "Homework". -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A parcel app takes a photo for whichever parcel was tapped last. What does the app need to remember, and where does it check it?**

* A variable with the tapped parcel (set when it's tapped), checked in the photo event's sub-events so the photo goes with the right parcel.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Creature stats. A variable that remembers which one (ForChore here, ClickedItem later) comes back whenever an app handles several things with one event. -->
