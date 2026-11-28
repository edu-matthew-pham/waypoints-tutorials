---
marp: true
theme: default
html: true
---

# Record your practice

App Builder apps · Pictures from the user

<!-- Speaker note: Students add a recorder to the practice tracker: a Recorder (microphone allowed), a hidden Sound that gets the recording in Mic finishes a recording and is then shown, and a line with the recording's length. Nib sets the Sound from Mic.sound when the screen starts, before anything is recorded, so it never plays. Make it yours plays the recording as soon as it's ready. About 40 minutes (Try 5 min · Build 1 5 min · Build 2 10 min · Build 3 6 min · Check 7 min · Make it yours 4 min). -->

---

## Today

- I can add a Recorder and use the recording it makes.
- I can use something the user makes in the event that runs when it's ready.
- I can play a recording back with a Sound and show how long it was.

<!-- Speaker note: Before class: This lesson starts from the finished practice tracker (Level 3 for the Recorder) and completes the Pictures from the user unit: a drawing, a photo, now a recording. Each is used in the event that runs when it's ready. Microphone: off unless Allow microphone is ticked in the Recorder's properties, and the browser asks too. Some school devices block microphones; 🎵 Choose on the recorder picks a sound file instead (MP3, M4A, WAV and similar, about 5 MB at most, with Allow microphone off too) and runs the same event, so every student can finish. Recordings stay in this browser (nothing is uploaded), up to 20 seconds each. Record instruments, humming or clapping, not other people. Headphones help, and so does spreading out: a room of microphones picks up everyone. Playback starts hidden because a new Sound always has a built-in tune until something replaces it; the recording event shows it. Trimming only changes which part plays; the whole recording is kept, so the handles can be dragged back out. Playback got Mic.sound when recording finished, so it plays the recording as it was then. Teacher: Before Try: agree what to record (instruments, humming, clapping) and that headphones go on. Teacher: Build 2: ask when Mic.sound has a value. Answer before building the event. Teacher: Check: vote on Nib's line before revealing. -->

---

## Why it matters

> Musicians record themselves because you hear things on a recording you miss while playing. Voice notes, language apps and podcasts all start with the same three parts: record, keep, play back.

<!-- Speaker note: The practice tracker from the first lesson adds up your minutes. Today it also **records** a short clip of your practice, so you can hear how it went. - A **Recorder** object records up to 20 seconds with the microphone (● to record, ■ to stop), or lets the user **🎵 Choose** a sound file instead. - When the user stops (or chooses a file), the event **Mic finishes a recording** runs, and `Mic.sound` is the recording. - A **Sound** object can play it back: **Set Playback sound to the one named** `Mic.sound`. Record your instrument, humming or clapping, not other people. Recordings stay in this browser: nothing is sent anywhere. Headphones help in a busy room. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Why do musicians and speakers record themselves when they practise?**

- What do you hear on a recording that you miss while playing or talking?

<!-- Speaker note: A recording lets you listen from the outside. Today the practice tracker gets one: record, keep, play back. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

1. Click **●** and allow the microphone when the browser asks. Play, hum or clap for a few seconds, then click **■**.
2. A player appears with your recording, and the app says how long it was. Press **▶**.
3. Drag the two handles under the recorder to trim the start and end, then play it again.

No microphone, or it's blocked here? Click **🎵 Choose** on the recorder and pick a sound file from your computer: the app treats it just like a recording.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-2#step-2)

<!-- Speaker note: 1. **+ Add object**, **Recorder**. Rename it *Mic* and put it under the total (x 229, y 230, width 342). 2. In its **Properties**, tick **Allow microphone in this app**. 3. Run it, click **●**, record a few seconds, then **■** (or **🎵 Choose** a sound file). The recorder can play it back itself, but nothing else in the app knows about it yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-3#step-3)

<!-- Speaker note: 1. **+ Add object**, **Sound**. Rename it *Playback*, put it under the recorder (x 229, y 350, width 342) and untick **Visible at start**. A new Sound starts with a built-in tune, so it stays hidden until there's a recording. 2. Add an event: **Mic**, **Mic finishes a recording**, with two actions: - **Playback**, **Set Playback sound to the one named** `Mic.sound` - **Playback**, **Show Playback** 3. Run it, record, stop, and press ▶ on Playback. There are two "set sound" actions. *Set sound to* picks one of the app's sounds while you design. *Set sound to the one named* works it out while the app runs, from a recording or a name, just like the two picture actions in *Draw how you showed it*. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-4#step-4)

<!-- Speaker note: 1. Add a **Text** called *LengthText* under Playback (x 229, y 412, width 342), with no text. 2. In **Mic finishes a recording**, add **Set LengthText text to** `"Recorded " & round(Mic.length) & " seconds"` 3. Run it and record twice, once short and once long. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's playback

**Nib's Playback never plays the recording, even after recording. Click the line where Nib first goes wrong.**

```
 1  Nib adds a Recorder, Mic, and a Sound, Playback, and allows the microphone.
 2  On start of screen: Set Playback sound to the one named Mic.sound, and Show Playback.
 3  Nib runs the app, clicks ● and records 5 seconds, then clicks ■.
 4  Nib presses ▶ on Playback. Nothing plays.
```

* Answer: line 2

<!-- Speaker note: Line 2: On start of screen runs once, when the app starts, before anything has been recorded. Mic.sound is empty then, and nothing sets Playback again. Use the recording in Mic finishes a recording, when it exists. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Trimming

**You record 10 seconds, then drag the handles to keep only seconds 2 to 5. What changes?**

- Mic.length changes to 3
- Nothing until a Set action runs
- It cuts the recording to 3 seconds
- Only which part of it plays

* Answer: Only which part of it plays

<!-- Speaker note: Trimming only changes which part plays; the whole recording is kept, so you can drag the handles back out and hear it all again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## When does it exist? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Show Nib's events. Ask: when the screen starts, what is in Mic.sound? When does that change?

<!-- Speaker note: Nothing, until the user stops recording. That's why the recording is used in Mic finishes a recording. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: play it straight away

Play the recording back automatically: add **Playback**, **Play Playback** at the end of **Mic finishes a recording**.

More ideas: add the recording's length to the minutes practised, or a message when a recording is under 3 seconds ("Try a longer one").

[Open this step](https://tutorials.learningwaypoints.com/code/apps/practice-record/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Adding Play to the same event makes the app react the moment the recording is ready, with no extra click. For students who need more support: Do Build 2 together; it's the one with the idea in it. For early finishers: Keep every recording: a list Recordings, Add Mic.sound to it when a recording finishes, and a List object that shows them (each shows as 🔊 Recording). Data apps does this properly with a table and a sound field. The hard part, on purpose: Students expect to set up Playback once, at the start. The recording doesn't exist until the user stops, so ask: at the moment this action runs, has anything been recorded yet? When students get stuck: The recorder says the microphone is off for this app. Ask: Is Allow microphone ticked in Mic's properties? Did the browser ask, and was it allowed? Fix: Tick it, then allow the microphone when the browser asks. If it's blocked on this computer, use 🎵 Choose to pick a sound file instead. / Playback plays a tune, not the recording. Ask: Which set-sound action did you use? Fix: Use Set Playback sound to the one named, with Mic.sound. / Playback never appears. Ask: Is there a Show Playback in the recording event? Fix: Add Show Playback after setting its sound. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A language app records you saying a word, then plays it back next to the teacher's version. Where does it set up your recording to play, and why there?**

* In the event that runs when recording finishes, because the recording doesn't exist before then.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Creature stats. Using something in the event that runs when it's ready comes back with every kind of user input. -->
