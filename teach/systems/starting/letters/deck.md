---
marp: true
theme: default
html: true
---

# Letters are numbers

Starting out · Numbers and switches

<!-- Speaker note: Students type words and read the numbers a computer stores for them, find that capitals go up in order from A = 65, that small letters, spaces and digits have codes too, then spell a word by setting its codes (AC9TDI6K03 node 1). About 35 minutes (Predict and Try 6 min · Worked example 8 min · Vary 8 min · Practise and Make 13 min). -->

---

## Today

- I can say how a word is stored as numbers.
- I can find the number for a letter by counting on from A.
- I can turn a list of numbers back into a word.

<!-- Speaker note: Before class: Do the Try board yourself: type your name, then a space and a digit. The one idea: every character has a number (its code), and a word is a list of codes in order. The codes are ASCII, which Unicode keeps for the first 128 characters; nothing here needs those names. Year 7–8 catch-up: if students can find D's code (68) and read 72, 73 back as HI, go straight to Everything is numbers and Text as numbers. Unplugged: a class code chart on the board; students write a secret message in codes for a partner. Teacher: Try: whose name makes the longest list? Why? Teacher: Worked example: before the T line, ask how far T is from A. Teacher: Vary: ask why a space needs a number at all. -->

---

## Why it matters

> A computer can only store numbers. So how does your phone keep a text message?

<!-- Speaker note: Everything inside a computer is a number, even the words you type. So every letter needs a number of its own. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Would it be better if A were stored as 1, B as 2, and so on? What would go wrong?**

- Where would small letters go? Spaces? Full stops?
- Why might the codes start at 65 instead?

<!-- Speaker note: Alphabet places run out fast: small letters, digits, spaces and punctuation all need numbers too, so the code table puts them all in one list (spaces at 32, digits from 48, capitals from 65, small letters from 97). Come back to it after the Vary step, when they've typed a space and a 7. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## A class code chart <span style="font-size:.6em;color:#64748b">(4 min)</span>

Copy the chart: A 65, B 66, C 67 … Z 90. Write your first name as numbers. Swap with a partner and decode theirs.

<!-- Speaker note: Keep the charts for the Make step. Early finishers can add a 97 for small a. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A computer stores capital A as 65, B as 66 and C as 67. What number does it store for D?**

- 68
- 4
- 69
- D can't be a number

<!-- Speaker note: What happens: 68. The codes go up by one, in alphabet order, starting from A = 65. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 4 used the alphabet place; ask what A's number is. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Hold up your answer <span style="font-size:.6em;color:#64748b">(2 min)</span>

A is 65, B is 66, C is 67. What number is D? Show it on your fingers or a whiteboard.

<!-- Speaker note: Ask a student who said 4 to explain their thinking before the board settles it. Their answer is Sam's mistake later. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fstarting%2Fletters%2Fstep-2&code=widget%3A+decode%0Anumbers%3A+72%2C+73%0Aas%3A+text%0Aswitch%3A+off%0Atype%3A+on%0Atable%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/starting/letters/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Now type your own name. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 68. The codes go up by one, in alphabet order, starting from A = 65.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## CAT

Now: is small a the same as A?

$$\text{C A T}$$

1) $\text{C} \to 67$ — A is 65, B is 66, so C is 67.
2) $\text{A} \to 65$ — A is where the capitals start.
3) $\text{T} \to 84$ — T is 19 letters after A: 65 + 19 = 84.
4) $67,\ 65,\ 84$ — That list of numbers is what the computer stores for CAT.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write C A T and say "The word, one letter at a time." Line 1: write C 67 and say "A is 65, B is 66, so C is 67." Line 2: write A 65 and say "A is where the capitals start." Line 3: write T 84 and say "T is 19 letters after A: 65 + 19 = 84." Line 4: write 67,65,84 and say "That list of numbers is what the computer stores for CAT." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## CAT

**Small a and capital A: are they stored as the same number?**

- Small letters aren't stored
- Yes: both are 65
- Small a is 65 + 1 = 66
- No: small a has its own code, 97

* Answer: No: small a has its own code, 97

<!-- Speaker note: Capitals start at 65 and small letters start at 97. The computer treats them as different characters. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam works out how C is stored. Click the line where it first goes wrong.**

```
 1  Sam wants to know how the computer stores the letter C.
 2  C is the 3rd letter of the alphabet.
 3  So the computer stores C as 3.
 4  And A is stored as 1.
```

* Answer: line 3

<!-- Speaker note: Line 3: C's code isn't its place in the alphabet. The codes start at A = 65, so C is 67. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Human code table <span style="font-size:.6em;color:#64748b">(4 min)</span>

Five volunteers each hold a code: 72, 69, 76, 76, 79. The class reads them as letters, left to right.

<!-- Speaker note: HELLO. Then swap two volunteers: the numbers are the same, the word changes. Order matters. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read it back

**A message arrives as 67, 65, 66. What does it say?**

- CAB
- ABC
- CBA
- 3 1 2

* Answer: CAB

<!-- Speaker note: 67 is C, 65 is A, 66 is B, in that order. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: other characters



- **A space:** 
- **Small letters:** 
- **The digit 7:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/letters/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task types something new: a space, small letters, then a digit, which is a character with its own code too. For students who need more support: A strip: A 65, B 66, C 67 … up to Z 90; a 97, b 98 …; space 32. For early finishers: Find the code for ? and for !. Are they near the letters or somewhere else? The hard part, on purpose: Using the alphabet place (C = 3) instead of the code. Have them type C on the board and read it aloud. When students get stuck: A student says C is stored as 3 (Sam's mistake). Ask: Type C on the board. What number comes up? Fix: The codes start at A = 65, so C is 67. / A student thinks small and capital letters share a number. Ask: Type a, then A. Are the numbers the same? Fix: Small letters start at 97. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## E

**A is 65. What number is E?**

* Answer: 69

<!-- Speaker note: A, B, C, D, E: count on four from 65. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read it back

**Your friend's phone receives 72, 73. What does it show?**

- GH
- HI
- hi
- 72 73

* Answer: HI

<!-- Speaker note: 72 is H and 73 is I. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count them

**How many numbers does the computer store for the message GO HOME?**

* Answer: 7

<!-- Speaker note: Six letters and one space: seven characters, seven numbers. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: spell a word

Then: write your name as codes, and swap with a friend. Can they read it?

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/letters/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Setting the numbers for a word reverses the move: students start from the letters and work out the codes. Hints, in order: Count on from A = 65. / D is the 4th letter, so it's 3 more than 65. / O is 14 after A, and G is 6 after A. -->

<!-- Speaker note: Teacher: let students check by reading their numbers back as letters. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What numbers does the computer store for BAD?**

* 66, 65, 68.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Text or number? (what the computer can do with each). Year 7–8: Everything is numbers, then Text as numbers. -->
