---
marp: true
theme: default
html: true
---

# Build a text generator with dice

AI Foundations · How AI generates text

<!-- Speaker note: Map six equally likely die faces to endings and distinguish probabilities from observed rolls. About 25 minutes. -->

---

## Today

**We are learning to** turn word frequencies into dice outcomes, then sample words without always picking the most common one.

- I can turn word counts into a dice table (mat = 3 faces, chair = 2, roof = 1).
- I can explain why ten rolls don't have to match 3 : 2 : 1.
- I can explain why a generator that rolls can give different answers to the same start, and why a likely sentence isn't a true one.

<!-- Speaker note: Before class: Use the board as a transparent fixed-context model, not a miniature modern LLM. No AI account is required. The Explain it to me clip is an optional scaffold after prediction. The board shows each roll ("Rolled 4 → chair") and the last ten, so students can match its die to their own table. Model the difference between what a text generator produces and what evidence supports. The dice model illustrates sampling, not how a modern assistant checks facts. Students need not calculate formal probabilities to make this distinction. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**If three faces on a die mean 'mat', two mean 'chair' and one means 'roof', what happens when you roll?**

- You always get roof
- You could get any of the three words
- You always get mat

<!-- Speaker note: What happens: Any of the three words can occur. Mat is most likely, but no outcome is guaranteed. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: have students predict ten rolls before sampling. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Any of the three words can occur. Mat is most likely, but no outcome is guaranteed.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/ai/foundations/dice-generator/?full=step-2#step-2](https://tutorials.learningwaypoints.com/ai/foundations/dice-generator/?full=step-2#step-2)

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: compare results with a partner; short runs differ. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fdice-generator%2Fstep-3&code=widget%3A+word-sampler%0Amode%3A+manual%0Aending%3A+mat%0Aending%3A+mat%0Aending%3A+mat%0Aending%3A+chair%0Aending%3A+chair%0Aending%3A+roof%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/dice-generator/?full=step-3#step-3)

<!-- Speaker note: Use the interactive board to roll a virtual die and record your outcomes. You can also use a physical die and compare the results. Copy this table into your book: | Die result | Next word | |---|---| | 1, 2, 3 | mat | | 4, 5 | chair | | 6 | roof | Roll a die **ten times**, recording each result and the chosen word. Use the board's virtual die if you do not have a physical die: it shows each roll, such as **Rolled 4 → chair**, and your last ten rolls. Keep the lookup table unchanged. Compare with a partner. Did you get identical results? Does a short run always match the expected 3:2:1 ratio? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the dice table

**What is the chance of getting 'chair' on one roll?**

- 1/6
- 2/6
- 3/6
- 5/6

* Answer: 2/6

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: the optional line on always picking the top word links sampling to chatbots giving different answers. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Explain an unexpected sample

**You and a friend each roll the board's die 10 times. Your friend gets roof 3 times. You get roof 0 times. What is true?**

- Both results can happen with the same die and table
- Your friend's die must be unfair
- Roof's chance went down for you

* Answer: Both results can happen with the same die and table

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Elaborate: change the model

**A new collection has 2 mat, 3 chair and 1 roof. Which assignment matches it?**

- 1–3 mat; 4–5 chair; 6 roof
- 1 mat; 2–3 chair; 4–6 roof
- 1–2 mat; 3–5 chair; 6 roof

* Answer: 1–2 mat; 3–5 chair; 6 roof

<!-- Speaker note:  -->

---

## Evaluate: explain an unexpected outcome

Write one sentence distinguishing **probability** from **what actually happened** in your rolls.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Learning with AI: plausible is not the same as correct

**The generator writes 'The cat sat on the roof.' What would tell you whether a real cat sat on a roof?**

- The sentence sounding natural
- Someone who saw it, or a photo
- Rolling again and getting roof

* Answer: Someone who saw it, or a photo

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Can roof appear twice in a row without the model changing?**

* Yes. Each roll can select the roof face; two such rolls do not alter the mapping.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Unit 1, lesson 3 lets the computer repeat the same rolls thousands of times. -->
