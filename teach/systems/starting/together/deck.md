---
marp: true
theme: default
html: true
---

# Working together

Starting out · The parts inside

<!-- Speaker note: Students follow one button press through the parts in order, take parts out to see which jobs stop, and plan the whole chain to get a saved score back after turning the console off and on (AC9TDI6K01 node 2). About 40 minutes (Predict and Try 6 min · Worked example 10 min · Vary 9 min · Practise and Make 15 min). -->

---

## Today

- I can describe the order the parts take turns when I press a button.
- I can say which part a job needs.
- I can work out which part is missing from what goes wrong.

<!-- Speaker note: Before class: Do the boards yourself first: press A, then take out each part in turn. The one idea: the parts take turns, and each job needs particular parts. Every job needs the processor; playing needs memory; saving and loading need storage; seeing needs the screen. Simplifications: the same as The parts inside. Real processors fetch from memory far more often than shown. Year 7–8 catch-up: Inside a computer › Find the bottleneck builds on "a job uses several parts in turn". Teacher: Worked example: act it out with five students passing a card. Teacher: Vary: before each Press A, ask what will happen. -->

---

## Why it matters

> You press a button and the score goes up. In that moment, four parts take turns.

<!-- Speaker note: No part works alone. Each job passes from part to part, and the board lights up the order. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**If the screen breaks in the middle of a game, is the game still going?**

- Where is the score kept while you play?
- What job does the screen actually do?

<!-- Speaker note: Yes: the processor and memory carry on; the screen only shows the result. Students who say the game stops are picturing the screen as the computer. The Try board settles it. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You take the screen out of the console and press A. What happens to the score?**

- The game stops
- The buttons stop working
- It goes back to 0
- It still goes up in memory, but you can't see it

<!-- Speaker note: What happens: It still goes up. The buttons, processor and memory all still work; there's just nothing to show the score on. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 'the game stops' think the screen is the computer; keep the Try for them. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## The parts take turns <span style="font-size:.6em;color:#64748b">(5 min)</span>

Bring back the five volunteers. Press A three times, passing the card each time. Then the Screen sits down. Press A again: what changes?

<!-- Speaker note: Memory's score still goes up; nobody can see it. Then try sitting down Memory instead: the processor has nowhere to keep the score. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fstarting%2Ftogether%2Fstep-2&code=widget%3A+parts%0Aremove%3A+on%0Aactions%3A+press%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/starting/together/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Put the screen back and press A: watch the steps light up. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It still goes up. The buttons, processor and memory all still work; there's just nothing to show the score on.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Press A

Now: in what order do the parts take turns?

$$\text{1. Buttons}$$

1) $\text{2. Processor}$ — Works out what the press means: add one to the score.
2) $\text{3. Memory}$ — The score changes here, from 0 to 1.
3) $\text{4. Processor}$ — Fetches the new score to show.
4) $\text{5. Screen}$ — Shows Score 1.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 1. Buttons and say "Take in the press." Line 1: write 2. Processor and say "Works out what the press means: add one to the score." Line 2: write 3. Memory and say "The score changes here, from 0 to 1." Line 3: write 4. Processor and say "Fetches the new score to show." Line 4: write 5. Screen and say "Shows Score 1." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Press A

**You press A. In what order do the parts take turns?**

- Buttons, screen
- Processor, buttons, storage
- Screen, processor, buttons
- Buttons, processor, memory, processor, screen

* Answer: Buttons, processor, memory, processor, screen

<!-- Speaker note: In from the buttons, worked out by the processor, kept in memory, then out to the screen. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's screen breaks. Click the line where the reasoning first goes wrong.**

```
 1  The screen on Sam's console breaks.
 2  The screen is where the game actually happens.
 3  So the console stops working.
 4  So the score is lost.
```

* Answer: line 2

<!-- Speaker note: Line 2: the game happens in the processor and memory. The screen only shows it, so the score is safe in memory. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Every job

**Which part does every job need: playing, saving and loading?**

- The screen
- The processor
- Storage
- The buttons

* Answer: The processor

<!-- Speaker note: The processor follows every instruction, so nothing happens without it. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Say the path <span style="font-size:.6em;color:#64748b">(3 min)</span>

With a partner, say the order the parts take turns for one press of A. Then for Save.

<!-- Speaker note: Press: buttons, processor, memory, processor, screen. Save: memory, processor, storage. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What's missing?

**You can play and see the score, but Save doesn't work. Which part is missing?**

- Storage
- Memory
- The screen
- The buttons

* Answer: Storage

<!-- Speaker note: Saving needs storage; playing doesn't. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: take out a part



- **No memory:** 
- **No buttons:** 
- **No storage:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/together/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task takes out a different part and presses A, so students see which jobs need which part. For students who need more support: The five boxes in a row with arrows: Buttons → Processor → Memory → Processor → Screen. For early finishers: Some consoles save by themselves every few minutes. Which parts does an autosave use? The hard part, on purpose: Thinking the screen is the computer. Take the screen out early and keep coming back to the score in memory. When students get stuck: A student says the game stops without a screen (Sam's mistake). Ask: Take the screen out and press A. What does memory say? Fix: The score still goes up; the screen only shows it. / A student thinks saving happens by itself. Ask: Turn off and on without saving. What does storage hold? Fix: Nothing saved: saving is a job the processor does when asked. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Can't save

**A console's game runs and the score goes up, but you can't save. Which part is missing?**

- Memory
- The processor
- Storage
- The screen

* Answer: Storage

<!-- Speaker note: Saving needs storage. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nothing happens

**You press buttons and nothing at all happens, not even a sound. Which part might be missing?**

- The processor or the buttons
- Memory only
- Storage
- The screen only

* Answer: The processor or the buttons

<!-- Speaker note: If nothing hears the press, or nothing works it out, nothing happens. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: off and on

**Review: what is in memory just after you turn the console off and on?**

- Nothing: memory is empty
- Everything from before
- The saved game
- The screen

* Answer: Nothing: memory is empty

<!-- Speaker note: Memory empties; storage keeps. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: get it back

Then: explain to a partner what each part did in your plan.

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/together/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Planning the whole chain to get a score back after turning off reverses the move: students choose which parts to use, in order. Hints, in order: Every part needs to be in for this. / Which part keeps the score when you turn off? / Press A three times, save, turn off and on, then load. -->

<!-- Speaker note: Teacher: ask what each step of their plan used. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**The game runs and you can save, but the screen stays blank. Which part is missing? Is the score lost?**

* The screen (output); no, it's in memory.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Joining computers (a new unit). Year 7–8: Inside a computer › Find the bottleneck. -->
