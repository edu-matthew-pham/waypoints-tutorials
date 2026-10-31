---
marp: true
theme: default
html: true
---

# Pipes

The command line · Using a shell

<!-- Speaker note: Students join commands with pipes (grep, wc, sort, uniq, head), see that the operating system connects one program's output to the next one's input (so neither needs to know about the other), save output with >, and finish the treasure hunt by finding an exact line and counting with a pipe (AC9TDI10K01 node 1). About 45 minutes (Predict and Try 6 min · Worked example 12 min · Vary 12 min · Practise and Make 15 min). -->

---

## Today

- I can join commands with a pipe.
- I can count, sort and remove repeats.
- I can save a command's output into a file.

<!-- Speaker note: Before class: Try the boards yourself; the Make finishes the treasure hunt (office/codes.txt; the answer is 2468, the only line with GOLD in capitals). The one idea: a pipe sends one command's output into the next, so small tools combine. This is how people answer questions about huge logs on servers. Teacher: Worked example: run each stage on its own, then join them. Teacher: Vary: ask what head -n 2 would show without sort. -->

---

## Why it matters

> No command counts how many different pets are in a list. Three tiny commands joined together do.

<!-- Speaker note: Each command does one small job. A **pipe**, the | character, joins them: the output of the command on the left becomes the input of the command on the right. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**No command counts how many different pets are in a list. How could small commands do it together?**

- What if one command's output became the next command's input?
- In what order would you put them?

<!-- Speaker note: Let students order sort, uniq and wc before the board. Revisit at the end. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**grep cat pets.txt prints cat, catfish and cat. What does grep cat pets.txt | wc -l print?**

- An error
- 6
- 3
- cat catfish cat

<!-- Speaker note: What happens: 3. The three lines go into wc -l instead of the screen, and wc -l counts them. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who said 6 hold Sam's misconception. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Pass it on <span style="font-size:.6em;color:#64748b">(5 min)</span>

Three students stand in a row as sort, uniq and wc. A list on a card goes in at one end: sort puts it in order, uniq drops neighbouring repeats, wc counts the lines.

<!-- Speaker note: Sort groups repeats, uniq drops them, wc counts: the order matters. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fshell%2Fpipes%2Fstep-2&code=widget%3A+shell%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/shell/pipes/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? Then meet head. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 3. The three lines go into wc -l instead of the screen, and wc -l counts them.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## sort pets.txt | uniq | wc -l

Now count the lines after uniq.

$$\text{sort pets.txt}$$

1) $\text{| uniq}$ — Neighbouring repeats go: cat, catfish, dog, hamster, parrot.
2) $\text{| wc -l}$ — Counts the lines it receives: 5.
3) $\text{one line, three jobs}$ — Each command is tiny; the pipe joins them into something new.
4) $\text{who joins them?}$ — The operating system. sort, uniq and wc never know about each other: each reads lines in and writes lines out, and the OS connects them.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sort pets.txt and say "cat, cat, catfish, dog, hamster, parrot: same lines, in order." Line 1: write | uniq and say "Neighbouring repeats go: cat, catfish, dog, hamster, parrot." Line 2: write | wc -l and say "Counts the lines it receives: 5." Line 3: write one line, three jobs and say "Each command is tiny; the pipe joins them into something new." Line 4: write who joins them? and say "The operating system. sort, uniq and wc never know about each other: each reads lines in and writes lines out, and the OS connects them." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## sort pets.txt | uniq | wc -l

**pets.txt is cat, dog, catfish, parrot, cat, hamster. How many lines does sort pets.txt | uniq print?**

* Answer: 5

<!-- Speaker note: sort puts the two cats next to each other; uniq keeps one. cat, catfish, dog, hamster, parrot: 5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam explains a pipe. Click the line where it first goes wrong.**

```
 1  Sam types grep cat pets.txt | wc -l.
 2  grep finds the lines with cat in them: cat, catfish, cat.
 3  wc -l counts the lines in pets.txt, which has 6 lines.
 4  So the answer is 6.
```

* Answer: line 3

<!-- Speaker note: Line 3: after the |, wc -l reads grep's output (three lines), not pets.txt. The answer is 3. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Who joins them?

**wc -l can count the lines of a file, lines you type, or grep's output. How does wc know which one it's getting?**

- It doesn't need to: the operating system hands it lines, and it counts them
- There are three different wc programs
- grep sends wc a message saying where the lines came from
- It reads pets.txt to check

* Answer: It doesn't need to: the operating system hands it lines, and it counts them

<!-- Speaker note: Each program reads its input and writes its output. The operating system decides where those go: the screen, a file, or the next program. That's why tiny programs combine. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How many lines?

**pets.txt is cat, dog, cat, bird. How many lines does sort pets.txt | uniq | wc -l print?**

* Answer: 3

<!-- Speaker note: After sort the two cats are together; uniq keeps one: bird, cat, dog. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: different pipes



- **Different pets:** 
- **First two:** 
- **Save it:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/shell/pipes/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one stage of the pipe: count different pets, keep only the first two in order, then save a result into a file with >. For students who need more support: A pipe diagram: file → grep → wc → screen, with the data written on each arrow. For early finishers: Which pet name is the longest? (No single command does it; think about what you'd need.) The hard part, on purpose: Students try to do everything with one command. Ask them to say each stage aloud: "find the lines, then count them". When students get stuck: A student thinks wc reads the file (Sam's mistake). Ask: Run just the part before the |. What does wc receive? Fix: Each command after a pipe reads the previous output. / uniq leaves repeats. Ask: Are the repeats next to each other? Fix: sort first. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Swap the order <span style="font-size:.6em;color:#64748b">(3 min)</span>

Run it again with uniq before sort. What goes wrong?

<!-- Speaker note: Repeats aren't neighbours, so uniq misses them. This is why sort comes first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count visits

**A server log has a line for every visit. Which pipe counts the visits from Australia (lines with AU)?**

- cat log.txt | sort
- grep log.txt | AU
- grep AU log.txt | wc -l
- wc -l log.txt | grep AU

* Answer: grep AU log.txt | wc -l

<!-- Speaker note: Find the lines first, then count them. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## First name

**What does sort names.txt | head -n 1 print?**

- The name that comes first alphabetically
- The number of names
- Every name
- The first name in the file

* Answer: The name that comes first alphabetically

<!-- Speaker note: sort orders the names; head keeps the first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: rm

**Review: what does rm -r projects do?**

- Deletes the projects folder and everything in it, for good
- Moves it to the recycle bin
- Renames it
- Lists it

* Answer: Deletes the projects folder and everything in it, for good

<!-- Speaker note: -r means the folder and everything inside it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the treasure hunt, part 2



- **The GOLD line:** 
- **The code:** 
- **Count with a pipe:** Then: think of a question about a long list (your playlist, a class list) that a pipe could answer in one line.

[Open this step](https://tutorials.learningwaypoints.com/systems/shell/pipes/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Finishing the hunt with grep and a pipe puts the course together: find the exact line, read the code, then count with a pipe. Hints, in order: grep prints the lines that contain a word: grep WORD file. / Capitals matter to grep. / For the count: grep silver codes.txt, then add | wc -l. -->

<!-- Speaker note: Teacher: ask why grep -i GOLD gives two lines. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Write one line that counts how many lines of pets.txt contain the letter o.**

* grep o pets.txt | wc -l (or grep -c o pets.txt).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Who can read what (permissions). -->
