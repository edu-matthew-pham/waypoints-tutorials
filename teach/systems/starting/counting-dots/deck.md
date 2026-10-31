---
marp: true
theme: default
html: true
---

# Counting dots

Starting out · Numbers and switches

<!-- Speaker note: Students add the dots on face-up cards to read a number, build numbers by taking the biggest card that fits, then store the letters A (65) and H (72) as switches, joining switches to letter codes (AC9TDI6K04 node 2). About 40 minutes (Predict and Try 6 min · Worked example 10 min · Vary 9 min · Practise and Make 15 min). -->

---

## Today

- I can read a number from dot cards by adding the face-up cards.
- I can make a number by choosing the cards.
- I can store a letter as switches using its code.

<!-- Speaker note: Before class: Do the boards yourself first; real CS Unplugged cards first work well. The one idea: each card has double the dots of the one on its right, and a number is the dots on the face-up cards added together. This is binary place value without the words; Year 7 names it. Simplification: the "biggest card that fits" method works for every number; nothing here needs columns or powers. Year 7–8 catch-up: a student who can make 72 on seven cards can go straight to Bits and binary numbers. Teacher: Worked example: say 'biggest card that fits, then what's left' every time. Teacher: Vary: ask why A needs seven cards and not four. -->

---

## Why it matters

> The letter A is stored as 65, and 65 is stored with switches. How do on and off make 65?

<!-- Speaker note: Each card has dots on it. From the right, the cards have 1, 2, 4 and 8 dots: each card has double the one on its right. The number is the dots on the cards that are face up, added together. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Real dot cards <span style="font-size:.6em;color:#64748b">(5 min)</span>

Five students hold the dot cards (16, 8, 4, 2, 1) facing the class. Turn cards over to show 5, then 10, then 31.

<!-- Speaker note: Print CS Unplugged's binary cards. Students holding cards keep them for the Investigate activity. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Four cards have 8, 4, 2 and 1 dots. The 4 card and the 1 card are face up. How many dots can you see?**

- 2
- 4
- 5
- 41

<!-- Speaker note: What happens: 5. Add the face-up cards: 4 + 1 = 5. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 41 read the cards as digits; ask how many dots they can see. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## How many dots? <span style="font-size:.6em;color:#64748b">(2 min)</span>

Cards 8, 4, 2, 1. The 4 and the 1 are face up. Show your answer on a whiteboard.

<!-- Speaker note: Ask a student who wrote 41 to explain: they read the cards as digits. Add the dots you can see. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fstarting%2Fcounting-dots%2Fstep-2&code=widget%3A+bits%0Abits%3A+4%0An%3A+0%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/starting/counting-dots/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 5. Add the face-up cards: 4 + 1 = 5.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## 10 on four cards

Now: which cards show 9?

$$10$$

1) $8$ — The biggest card that fits in 10. Turn it up: 2 left.
2) $4$ — Too big for 2: leave it down.
3) $2$ — Fits exactly: turn it up. Nothing left.
4) $1010$ — The 8 and the 2 are up, the 4 and the 1 are down.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 10 and say "The number to make." Line 1: write 8 and say "The biggest card that fits in 10. Turn it up: 2 left." Line 2: write 4 and say "Too big for 2: leave it down." Line 3: write 2 and say "Fits exactly: turn it up. Nothing left." Line 4: write 1010 and say "The 8 and the 2 are up, the 4 and the 1 are down." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## 10 on four cards

**Which cards show 9?**

- The 9 card
- The 8, 2 and 1
- The 4, 4 and 1
- The 8 and the 1

* Answer: The 8 and the 1

<!-- Speaker note: Take the biggest card that fits: 8. Then 1 more: the 1 card. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam reads the pattern 1000. Click the line where it first goes wrong.**

```
 1  The cards have 8, 4, 2 and 1 dots, from left to right.
 2  Only the left-hand card is face up.
 3  Sam counts it as 1 dot, because it's the first card.
 4  So the pattern 1000 shows 1.
```

* Answer: line 3

<!-- Speaker note: Line 3: the left-hand card is the 8 card. 1000 shows 8 dots, not 1. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## All four up

**All four cards are face up. How many dots?**

* Answer: 15

<!-- Speaker note: 8 + 4 + 2 + 1 = 15: the most four cards can show. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Biggest card that fits <span style="font-size:.6em;color:#64748b">(4 min)</span>

Call a number (9, 12, 13). The card holders decide, from the left, 'does my card fit in what's left?' and turn up or stay down.

<!-- Speaker note: Say the method aloud each time. It's the worked example done with people. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Thirteen

**Which cards show 13?**

- 8, 4 and 1
- 8 and 5
- 4, 4, 4 and 1
- 13 alone

* Answer: 8, 4 and 1

<!-- Speaker note: Biggest that fits is 8, leaving 5; 4 fits, leaving 1; then the 1 card. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: other numbers



- **10:** 
- **12:** 
- **The letter A:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/counting-dots/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes the number, then the cards: 10, the biggest four cards can make, then the letter A with seven cards. For students who need more support: A card strip: 64 32 16 8 4 2 1, and 'biggest card that fits, then what's left'. For early finishers: What's the biggest number seven cards can show? How did you work it out? The hard part, on purpose: Counting cards instead of dots, or reading the left card as 1. Have them point to each card and say its dots before adding. When students get stuck: A student reads the left-hand card as 1 (Sam's mistake). Ask: How many dots are on the left-hand card? Fix: It's the 8 card: count from the right, 1, 2, 4, 8. / A student turns up the 4 card twice for 9. Ask: How many 4 cards are there? Fix: One of each: 8 + 1. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Total

**The 8, the 2 and the 1 card are face up. How many dots?**

* Answer: 11

<!-- Speaker note: 8 + 2 + 1 = 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Next card

**The cards go 1, 2, 4, 8. How many dots does the next card have?**

* Answer: 16

<!-- Speaker note: Double 8: 16. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: B

**Review: A is 65. What number is the letter B?**

* Answer: 66

<!-- Speaker note: One more than A: 66, which is 64 + 2 on the cards. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: store a letter

Then: store the first letter of your name. Which cards did you use?

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/counting-dots/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Storing H with the number hidden reverses the move: students start from the code and choose the cards. Hints, in order: H is 72. Which is the biggest card that fits in 72? / 64 fits. What's left? / 72 is 64 + 8. -->

<!-- Speaker note: Teacher: have partners check each other by counting dots. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Your initial <span style="font-size:.6em;color:#64748b">(3 min)</span>

Look up the first letter of your name on the code chart. Which of the seven cards (64 to 1) make it?

<!-- Speaker note: A is 64 + 1; Z (90) is 64 + 16 + 8 + 2. Links back to Letters are numbers. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Which cards show 13? Write it as 1s and 0s on four cards.**

* 8, 4 and 1: 1101.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: The parts inside (a new unit). Year 7–8: Bits and binary numbers, then How many patterns? -->
