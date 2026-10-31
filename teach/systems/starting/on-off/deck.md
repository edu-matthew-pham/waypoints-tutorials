---
marp: true
theme: default
html: true
---

# On or off

Starting out · Numbers and switches

<!-- Speaker note: Students flip dot cards as switches, write on as 1 and off as 0, list the patterns two and three switches make, and see that each switch doubles the patterns (AC9TDI6K04 node 1). About 35 minutes (Predict and Try 6 min · Worked example 10 min · Vary 7 min · Practise and Make 12 min). -->

---

## Today

- I can say what 1 and 0 mean for a switch.
- I can find all the patterns some switches make.
- I can say what happens to the patterns when I add a switch.

<!-- Speaker note: Before class: Do the boards yourself first. The cards are CS Unplugged's binary cards; doing it with real cards first works well. Here the dots don't count yet: this lesson is only on and off. The one idea: on/off switches are written 1 and 0, and each switch doubles the number of patterns. No powers or place value needed; listing and doubling is enough. Year 7–8 catch-up: How many patterns? (8K04 n2) does this with 2ⁿ; this lesson is the idea before the notation. Teacher: Try: have pairs say each pattern aloud as they flip. Teacher: Worked example: build the 8 patterns on the board from the 4. -->

---

## Why it matters

> Inside a computer there are billions of tiny switches, and each one can only be on or off. How can that store a number, or a letter?

<!-- Speaker note: A switch is either on or off: nothing in between. On is written **1** and off is written **0**. Each card on the board is one switch: face up is on, face down is off. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A light switch can only be on or off. Could a computer built only from switches store the number 7? How?**

- What if there were two switches? Three?
- How would you know which pattern meant 7?

<!-- Speaker note: Yes, with several switches and an agreed meaning for each pattern. This lesson finds the patterns; the next one gives them their numbers. Leave the 'which pattern is 7' question open until Counting dots. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**One switch can be on or off: that's 2 patterns. How many different patterns can two switches make?**

- 1
- 2
- 3
- 4

<!-- Speaker note: What happens: 4: off off, off on, on off and on on. All off is a pattern too. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 3 missed all off; ask what 0 would look like. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Two students, two switches <span style="font-size:.6em;color:#64748b">(4 min)</span>

Two volunteers stand at the front. Each holds a hand up (on) or down (off). The class calls out every different pattern. How many are there?

<!-- Speaker note: Four, including both hands down. If the class says three, ask what both down looks like: that's Sam's mistake. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fstarting%2Fon-off%2Fstep-2&code=widget%3A+bits%0Abits%3A+2%0An%3A+0%0Anumber%3A+off%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/starting/on-off/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 4: off off, off on, on off and on on. All off is a pattern too.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Three switches

Now: what does face up mean?

$$00,\ 01,\ 10,\ 11$$

1) $000,\ 001,\ 010,\ 011$ — A third switch, off, in front of each one.
2) $100,\ 101,\ 110,\ 111$ — The third switch on, in front of each one.
3) $4 + 4 = 8$ — Three switches: 8 patterns. Each switch you add doubles them.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 00,01,10,11 and say "Two switches: 4 patterns." Line 1: write 000,001,010,011 and say "A third switch, off, in front of each one." Line 2: write 100,101,110,111 and say "The third switch on, in front of each one." Line 3: write 4 + 4 = 8 and say "Three switches: 8 patterns. Each switch you add doubles them." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Three switches

**A card is face up. What does the computer write for it?**

- On
- 0
- Up
- 1

* Answer: 1

<!-- Speaker note: On (face up) is 1. Off (face down) is 0. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam counts the patterns for two switches. Click the line where it first goes wrong.**

```
 1  Sam has two switches.
 2  They can be on, on or on, off or off, on.
 3  Off, off is nothing, so it doesn't count.
 4  So two switches make 3 patterns.
```

* Answer: line 3

<!-- Speaker note: Line 3: off, off is a pattern too. The computer uses it (it means 0), so two switches make 4 patterns. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Three switches

**How many patterns can three switches make?**

* Answer: 8

<!-- Speaker note: Take the 4 patterns for two switches. The new switch can be off or on for each one: 4 + 4 = 8. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Add a third switch <span style="font-size:.6em;color:#64748b">(4 min)</span>

A third volunteer joins. For each pattern of the first two, the third can be up or down. List them all.

<!-- Speaker note: Eight. Draw the 4 patterns twice on the board, once with the new switch off and once on: doubling, not adding. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Four switches

**Three switches make 8 patterns. How many do four switches make?**

* Answer: 16

<!-- Speaker note: Each switch doubles the patterns: 8 doubled is 16. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: add switches



- **Three cards:** 
- **On, off, on:** 
- **Four switches:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/on-off/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task adds a switch or sets one pattern, so doubling is seen, not told. For students who need more support: A card: up = on = 1, down = off = 0. 1 switch: 2, 2: 4, 3: 8, 4: 16. For early finishers: How many switches would you need to give every student in your school their own pattern? The hard part, on purpose: Leaving out all off (two switches make 3). Ask every time: is all face down a pattern too? When students get stuck: A student counts 3 patterns for two switches (Sam's mistake). Ask: What do the cards show when they're both face down? Fix: All off is a pattern too: 4. / A student adds instead of doubling (3 switches: 6). Ask: For each of the 4 patterns, how many ways can the new switch go? Fix: Two each: 8. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the pattern

**Four cards are face up, down, down, up. How does the computer write that?**

- 0110
- up down down up
- 2
- 1001

* Answer: 1001

<!-- Speaker note: Up is 1, down is 0: 1001. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Five switches

**How many patterns can five switches make?**

* Answer: 32

<!-- Speaker note: 2, 4, 8, 16, 32: double once for each switch. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why on and off

**Why are a computer's switches only on or off, not ten different settings?**

- On and off are easy to tell apart, even when the signal is weak
- Ten settings would be too slow to type
- Switches are cheaper than numbers
- Computers can't count past 2

* Answer: On and off are easy to tell apart, even when the signal is weak

<!-- Speaker note: On or off is hard to get wrong. Lots of switches together make any number. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a secret signal

Then: with your partner, make up a code where each pattern of three cards means something (8 messages). What would you choose?

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/on-off/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Setting a pattern from its 1s and 0s reverses the move: students turn the written pattern into switches. Hints, in order: 1 means face up and 0 means face down. / Read the signal left to right, one card at a time. -->

<!-- Speaker note: Teacher: let partners invent a three-card code. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Write face down, face up, face up as 1s and 0s. How many patterns can those three switches make?**

* 011; 8.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Counting dots (patterns become numbers). Year 7–8: Bits and binary numbers, How many patterns? -->
