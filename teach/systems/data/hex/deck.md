---
marp: true
theme: default
html: true
---

# Hex: binary in fours

Data representation · Binary numbers

<!-- Speaker note: Students group binary cards in fours to read and write hex, see that one hex digit is exactly four bits and a byte is two hex digits, read web colours, and meet hex as a public rule (AC9TDI8K04 node 1, binary representation of integers, written short). Optional; Encoding is not encryption (Capture the flag) decodes hex and is the natural place to point students who skipped it. About 35 minutes (Predict and Try 6 min · Worked example 10 min · Vary 8 min · Practise and Make 11 min). -->

---

## Today

- I can turn four bits into one hex digit, and back.
- I can write a byte as two hex digits.
- I can read a web colour like

<!-- Speaker note: Before class: Do the boards yourself first. Students need Bits and binary numbers and How many patterns? (four bits make 16 patterns). The one idea: four bits make exactly 16 patterns, so one hex digit stands for four bits, and two hex digits for a byte. Hex is binary written short, not a new kind of number. Added 25 Oct 2026 to answer the roadmap's open question (hex in the colour lesson, or Years 9–10?): an optional lesson after How many patterns, with one line in Colour and images. It is optional because the descriptor doesn't name hex. Encoding is not encryption (Capture the flag) uses hex but doesn't list it in `assumes:`, since an optional lesson can't satisfy that check. Teacher: Try: ask how many hex digits a byte needs, and why never three. Teacher: Worked example: ask what the left digit counts. -->

---

## Why it matters

> Web colours look like #FF8800 and error codes like 0x1F. Why do programmers write numbers with letters in them?

<!-- Speaker note: Binary needs a lot of digits: 255 is 11111111. Programmers write it shorter, in a way that still shows the bits. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A web colour is written #FF8800. Why would anyone choose letters to write numbers?**

- What does a long row of 0s and 1s feel like to read?
- How could you shorten it without losing anything?

<!-- Speaker note: Optional lesson. The answer is groups of four bits, one hex digit each. Keep it short. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**In the web colour #FF8800, each pair of characters is one number from 0 to 255. What number is FF?**

- 1515
- 255
- It isn't a number: F is a letter
- 30

<!-- Speaker note: What happens: 255. Each F is four bits all on (1111, which is 15), so FF is eight bits all on: 11111111, 255. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 1515 read each F as 15 and joined them; ask how many cards each F stands for. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Bits in fours <span style="font-size:.6em;color:#64748b">(4 min)</span>

Write 10100011 on the board. Put a gap in the middle: 1010 0011. Work out each group as a number from 0 to 15.

<!-- Speaker note: 1010 is 10, 0011 is 3. Then show that 10 is written A, so the byte is A3. Hex is only a tidier way to write the same bits. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fdata%2Fhex%2Fstep-2&code=widget%3A+bits%0Abits%3A+8%0An%3A+0%0Ahex%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/data/hex/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? Now flip the left-hand group down. What's left? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 255. Each F is four bits all on (1111, which is 15), so FF is eight bits all on: 11111111, 255.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## A byte, two digits

Now read hex B.

$$0\text{–}9,\ A\text{–}F$$

1) $0000 \text{ to } 1111$ — Four bits make 16 patterns, 0 to 15: exactly one hex digit.
2) $1010\ 0011 \to A\ 3$ — Split a byte into two groups of four and write each as one digit: A3.
3) $A3 = 10 \times 16 + 3 = 163$ — The left digit counts sixteens, the right digit ones.
4) $\text{why bother?}$ — Two hex digits always make one byte, so hex is binary made short, and you can still see the bits.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 0–9,A–F and say "Sixteen digits: A is 10, B 11, C 12, D 13, E 14, F 15." Line 1: write 0000 to 1111 and say "Four bits make 16 patterns, 0 to 15: exactly one hex digit." Line 2: write 10100011 A3 and say "Split a byte into two groups of four and write each as one digit: A3." Line 3: write A3 = 10 × 16 + 3 = 163 and say "The left digit counts sixteens, the right digit ones." Line 4: write why bother? and say "Two hex digits always make one byte, so hex is binary made short, and you can still see the bits." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A byte, two digits

**Hex digits go 0 to 9, then A, B, C, D, E, F for 10 to 15. What number is hex B?**

* Answer: 11

<!-- Speaker note: A is 10, so B is 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam reads a hex number. Click the line where it first goes wrong.**

```
 1  Sam reads the hex number 1F.
 2  1 is 1, and F is 15.
 3  Put them side by side: 1F is 115.
 4  So 1F needs three decimal digits.
```

* Answer: line 3

<!-- Speaker note: Line 3: in hex, the left digit counts sixteens, not tens. 1F is 1 × 16 + 15 = 31, which is 0001 1111 in binary. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Byte to hex

**Write the byte 0011 1100 in hex.**

- 60
- 312
- C3
- 3C

* Answer: 3C

<!-- Speaker note: 0011 is 3 and 1100 is 12, written C: 3C. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One hex digit

**How many bits does one hex digit stand for?**

* Answer: 4

<!-- Speaker note: Four bits make 16 patterns, 0 to 15, which is exactly the 16 hex digits 0 to 9 then A to F. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: make the hex



- **0F:** 
- **80:** 
- **A3:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/data/hex/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task gives a hex number and students set the bits: one group at a time, then both. For students who need more support: A card: 0–9 as usual, A 10, B 11, C 12, D 13, E 14, F 15. One hex digit = four bits; two = a byte. For early finishers: Memory addresses are often written in hex, like 0x7FFF. How many bits does each hex digit stand for, so how many bits is that address? The hard part, on purpose: Joining the two digits like decimal (1F as 115). Every time, ask what the left digit counts: sixteens. When students get stuck: A student reads 1F as 115 (Sam's mistake). Ask: What does the left digit count? Fix: Sixteens: 1 × 16 + 15 = 31. / A student thinks B is 2. Ask: Which hex digit comes after 9? Fix: A is 10, so B is 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A web colour

**In #FF8800, red is FF, green is 88 and blue is 00. What number is the green, 88?**

* Answer: 136

<!-- Speaker note: 8 × 16 + 8 = 136. So #FF8800 is red 255, green 136, blue 0: orange. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hidden?

**A message in a file reads 6869. It's hex. Is it hidden from someone who copies the file?**

- No: hex is a public rule, so anyone can turn it back (68 is h, 69 is i)
- Yes: without a key nobody can read it
- Only from people who don't know binary
- Yes, unless it's longer

* Answer: No: hex is a public rule, so anyone can turn it back (68 is h, 69 is i)

<!-- Speaker note: Hex is an encoding, not encryption. The Capture the flag course starts here. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: binary

**Review: what number is the binary 1011?**

* Answer: 11

<!-- Speaker note: 8 + 2 + 1 = 11, which is B in hex. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the badge colour

Then: write your favourite colour as three numbers from 0 to 255, then as hex.

[Open this step](https://tutorials.learningwaypoints.com/systems/data/hex/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Going from a decimal number to hex reverses the process: students find the sixteens and the ones, then set the bits. Hints, in order: How many whole sixteens fit in 200? That's the left digit. / Twelve sixteens is 192. What's left over is the right digit. / 12 is C. Set the left group to 1100 and the right group to the leftover. -->

<!-- Speaker note: Teacher: let students work out 200 on paper first, then check with the cards. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Write 1010 1111 in hex, and say what number it is.**

* AF: A is 10, F is 15, so 10 × 16 + 15 = 175.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Why binary: logic gates. Links: Colour and images (RGB values), Capture the flag › Encoding is not encryption (hex as a public rule). -->
