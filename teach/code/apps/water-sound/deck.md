---
marp: true
theme: default
html: true
---

# Goal reached: sound and video

App Builder apps · Keep track

<!-- Speaker note: Students add a cheer to the water tracker: a Sound object and Play Cheer in an event about the goal. Because that event has no trigger, it runs every tick, so Play restarts the sound 60 times a second and they hear clicks or nothing. Trigger once while true fixes it: once each time the goal becomes reached. Then a Video object with NASA's The Water Cycle, and Reset stops the cheer. About 40 minutes (Try 4 min · Build 1 10 min · Why 5 min · Build 2 6 min · Check 6 min · Build 3 5 min · Make it yours 4 min). -->

---

## Today

- I can add a sound and play it from an event.
- I can explain why an event with no trigger runs every tick while its condition is true.
- I can use Trigger once while true to make something happen once at the right moment.
- I can add a video from a link and say where it came from.

<!-- Speaker note: Before class: This lesson starts from the finished water tracker (Level 2) and comes straight after it. Students need sound: headphones help in a busy room. Browsers play sound only after the user has clicked something, which every student will have done by the time they reach 8 glasses. The broken version is deliberate. An event with a condition but no trigger (Variable Glasses = Goal) is checked every tick, about 60 times a second, and its actions run every tick while it's true. Play starts the sound from the beginning, so it never gets past the start. (Measured in a browser: about 60 Play calls in the second after reaching 8; with Trigger once, one.) The Goal reached! message has the same every-tick behaviour, but setting the same text again changes nothing, so nobody notices. Trigger once while true runs once each time the conditions above it become true, then waits until they're false again. Keep it last in the event. It's the same idea as Construct's Trigger once. The video is NASA/Goddard Space Flight Center's "The Water Cycle" (public domain, https://svs.gsfc.nasa.gov/10501), linked from NASA's site, so it needs the internet when it plays; nothing is uploaded. If NASA's site is blocked at school, any Wikimedia Commons video file page works the same way (App Builder turns the page link into the video). Teacher: After Build 1, everyone reaches 8 and listens. Ask: what did you expect, what did you hear? Teacher: Why: link back to the water tracker's Every tick. Which events run every tick? Teacher: Build 2: before running, predict what happens after Reset. -->

---

## Why it matters

> Apps cheer you on: a chime when a timer ends, a sound when you finish a level. The hard part isn't the sound, it's making it play once, at the right moment.

<!-- Speaker note: The water tracker from the last lesson says *Goal reached!* when you get to 8 glasses. Today it also **cheers**, and it shows a short video about where water comes from. - A **Sound** object holds a sound and has its own play button. **Play Cheer** plays it from the start. - A **Video** object plays a video from a link, in the browser's own player. - Turn your sound on, or use headphones. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Your phone plays a sound when a timer ends. Why doesn't it keep playing the sound for as long as the timer says 0:00?**

- Is the timer at 0:00 for one moment, or for a while?

<!-- Speaker note: The app reacts to the moment it reaches 0:00, not to every moment it stays there. Today's tracker needs the same: cheer when the goal is reached, not while it is. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

Add glasses until you reach 8. The cheer plays **once**. Click **Reset** and do it again: it cheers again.

The video under it is NASA's *The Water Cycle*, one water molecule's journey from the ocean and back. Press play on it whenever you like.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-2#step-2)

<!-- Speaker note: 1. **+ Add object**, **Sound**. Rename it *Cheer*, put it under the bar (x 229, y 330, width 342) and choose the sound **Win jingle**. Click its ▶ to hear it. 2. On the **Events** tab, click **+ Add event**: **Variables**, **Variable** Glasses **=** `Goal`, with the action **Cheer**, **Play Cheer**. 3. Run it, add glasses until you reach 8, and **listen**. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why does it sound like that?

**At 8 glasses you hear clicks, or nothing, not a cheer. Why?**

- Its event runs every tick, so Play keeps restarting it
- The sound waits until the app is stopped
- The Win jingle is too short to hear
- Play only works in a button's event

* Answer: Its event runs every tick, so Play keeps restarting it

<!-- Speaker note: Variable Glasses = Goal isn't a trigger like 'is clicked'. It's checked every tick, and while it's true its actions run every tick. Play starts the sound from the beginning, so it never gets past the start. What this step is for: Connecting what you hear to when the event runs shows that a condition with no trigger is checked every tick, so its actions run every tick while it's true. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## What did you hear? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Everyone reaches 8 glasses with Build 1 and listens. Collect what people heard: clicks, a buzz, nothing.

<!-- Speaker note: The event runs every tick, so Play starts the sound again 60 times a second. A condition with no trigger is checked every tick: the same reason the display in the water tracker stays up to date. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-4#step-4)

<!-- Speaker note: 1. In the event that plays Cheer, click **+ Condition**: **System**, **Trigger once while true**. Keep it last in the event. 2. Run it and reach 8: one cheer. 3. Click **Reset**, then reach 8 again. Does it cheer again? *Once while true* means once each time the condition **becomes** true. Reset makes Glasses = Goal false, so the next time you reach 8 it's a new moment. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## More clicks at 8

**You reach 8, hear the cheer, then click Add a glass three more times (the cap keeps it at 8). How many more cheers?**

- None: Glasses = Goal stayed true the whole time
- None: Trigger once only works once ever
- Three: one for each click
- One: the next click starts it again

* Answer: None: Glasses = Goal stayed true the whole time

<!-- Speaker note: Glasses stays at 8, so Glasses = Goal stays true and Trigger once waits. Only after it's false (Reset) can it cheer again. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's cheer

**Nib's app cheers on every glass, not just at the goal. Click the line where Nib goes wrong.**

```
 1  AddButton is clicked, and Glasses < Goal: Add 1 to variable Glasses.
 2  In the same event: Play Cheer, so it cheers when the goal is reached.
 3  Glasses = Goal: Set Message text to "Goal reached!"
 4  Nib adds 3 glasses and hears 3 cheers.
```

* Answer: line 2

<!-- Speaker note: Line 2: Play Cheer is in the Add button's event, so it runs on every click that adds a glass. It belongs in an event about the goal (Glasses = Goal, once while true), or in a sub-event that checks Glasses = Goal after adding. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-6#step-6](https://tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-6#step-6)

<!-- Speaker note: 1. **+ Add object**, **Video**. Rename it *WaterVideo* and put it under the cheer: x 229, y 392, width 342, height 192. 2. In **Properties**, paste this into **Video link**: `https://svs.gsfc.nasa.gov/vis/a010000/a010500/a010501/water_cycle_appletv_1280x720.webmhd.webm` 3. Run it and press play on the video. The video is *The Water Cycle* by NASA/Goddard Space Flight Center: public domain, so anyone may use it, but it's polite to say where it came from. App Builder shows its source under the player. Wikimedia Commons has many more videos you can link the same way. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: Reset stops the cheer

If someone clicks Reset while the cheer is playing, stop it: in **ResetButton is clicked**, add **Cheer**, **Stop Cheer**.

More ideas: a **Pop** sound on every glass (that one *should* play every click), your own sound with **+ Upload sound**, or hide the cheer's player: untick **Show a player** in Cheer's properties. It still plays from events and takes no space; its credit shows under the app.

[Open this step](https://tutorials.learningwaypoints.com/code/apps/water-sound/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Stop is the other half of Play: an action on the sound from any event, here the Reset button's. For students who need more support: Do Build 1 together, then let everyone hear the clicks before explaining why. For early finishers: Add a Pop sound on every glass (it should play every click, so it goes in the Add button's event) and a Stop Pop when the goal is reached. Which events should each sound be in, and why? The hard part, on purpose: Hearing nothing at 8 looks like a broken sound, not a timing problem. Ask students to click the Sound object's ▶ in Design first: if that plays, the sound is fine and the question is when Play runs. When students get stuck: No sound at all, even after Build 2. Ask: Does the ▶ on the Sound object play? Is the computer muted? Fix: Check the volume, and that Play is on Cheer (the Sound object), not another object. / It still clicks after adding Trigger once. Ask: Which event did you add it to? Fix: Add it to the event that plays Cheer, as its last condition. / It cheers on every glass. Ask: Which event is Play Cheer in? Fix: Move it out of the Add button's event into its own Glasses = Goal event with Trigger once. / The video doesn't play. Ask: Is the link pasted in full, ending in .webm? Is NASA's site blocked here? Fix: Paste the whole link; if the site is blocked, use a Wikimedia Commons video page instead. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A quiz app checks every tick whether Score = 10 and shows a pop-up. The pop-up keeps flashing. What's happening, and what's the fix?**

* The Score = 10 event runs every tick while it's true, so the pop-up is shown again and again. Add Trigger once while true so it shows once when Score reaches 10.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: a values journal with three screens. Trigger once comes back whenever an every-tick condition should act only once. -->
