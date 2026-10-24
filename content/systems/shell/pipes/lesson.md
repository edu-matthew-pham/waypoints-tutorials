---
order: 4
unit: shell
node: AC9TDI10K01 n1
title: Pipes
summary: "A pipe (|) sends one command's output into the next command instead of the screen, so small commands combine: grep finds lines, wc -l counts them, sort puts them in order, uniq drops repeats, head keeps the first few, and > saves the result."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "No command counts how many different pets are in a list. Three tiny commands joined together do."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8491
  url: http://127.0.0.1:8491/index.html
  readySelector: ".shin"
  layout: full
explainPicture: { ref: shell.yml#explain-pic, caption: "grep cat pets.txt | wc -l: grep's three lines go into wc -l, which counts them." }
explainClip:
  query: { code: "@shell.yml#explain", fresh: 1, id: explain }
  caption: "Joining commands with a pipe"
  say: "One command's output becomes the next one's input."
  clip:
    - type: { into: Command, text: grep cat pets.txt }
    - press: Enter
    - caption: { text: "grep prints three lines.", say: "grep prints three lines." }
    - wait: 900
    - type: { into: Command, text: grep cat pets.txt | wc -l }
    - press: Enter
    - expect: { selector: "#gsum", contains: "Commands run: 2" }
    - caption: { text: "With | wc -l, those three lines go into wc instead of the screen: it prints 3.", say: "With a pipe, the lines go into w c, which counts them." }
    - wait: 1500
---
Each command does one small job. A **pipe**, the | character, joins them: the output of the command on the left becomes the input of the command on the right.

## Predict: what comes out?

```step
stage: predict
insight: "Committing to the output of a two-command pipe tests the new move: the second command reads the first one's output."
check:
  type: predict
  q: "grep cat pets.txt prints cat, catfish and cat. What does grep cat pets.txt | wc -l print?"
  options: ["3", "6", "cat catfish cat", "An error"]
  actual: "3. The three lines go into wc -l instead of the screen, and wc -l counts them."
```

## Try: count with a pipe

```step
stage: run
insight: "Running the pipe settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
tasks:
  - check: { type: board, text: "Run grep cat pets.txt, then the same with | wc -l on the end.", when: "u = 1 and o = 3", explain: "3: wc counted grep's lines, not the file's." }
  - check: { type: board, text: "One more small command: head keeps the first few lines. Run head -n 2 pets.txt.", when: "u = 0 and l = 2 and e = 0", explain: "cat and dog: the first two lines of the file, in the order they're stored. head -n 3 would keep three." }
```

Was your prediction right? Then meet head.

### Count with a pipe

### Keep the first lines

## Worked example: a three-part pipe

```step
stage: investigate
insight: "Following data through sort, uniq and wc models the new move one stage at a time. Sam thinks wc still reads the file, the misconception planted after the method. The last question is the node's idea (10K01 n1): the operating system joins the programs, so neither needs to know where its input comes from."
tasks:
  - check:
      type: answer
      q: "pets.txt is cat, dog, catfish, parrot, cat, hamster. How many lines does sort pets.txt | uniq print?"
      answer: "5"
      feedback:
        - ["6", "uniq drops a line that repeats the one just before it; after sort, the two cats are together."]
        - ["4", "Only cat appears twice."]
      explain: "sort puts the two cats next to each other; uniq keeps one. cat, catfish, dog, hamster, parrot: 5."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam explains a pipe. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: pipe-reads-files
      explain: "Line 3: after the |, wc -l reads grep's output (three lines), not pets.txt. The answer is 3."
  - check:
      type: question
      q: "wc -l can count the lines of a file, lines you type, or grep's output. How does wc know which one it's getting?"
      options: ["It doesn't need to: the operating system hands it lines, and it counts them", "grep sends wc a message saying where the lines came from", "There are three different wc programs", "It reads pets.txt to check"]
      answer: 0
      feedback: [null, "grep just writes lines out. It doesn't know wc exists.", "It's one small program.", "After a pipe, wc never opens the file."]
      explain: "Each program reads its input and writes its output. The operating system decides where those go: the screen, a file, or the next program. That's why tiny programs combine."
```

### sort pets.txt | uniq | wc -l

```worked
\text{sort pets.txt} :: cat, cat, catfish, dog, hamster, parrot: same lines, in order.
\text{| uniq} :: Neighbouring repeats go: cat, catfish, dog, hamster, parrot.
\text{| wc -l} :: Counts the lines it receives: 5.
\text{one line, three jobs} :: Each command is tiny; the pipe joins them into something new.
\text{who joins them?} :: The operating system. sort, uniq and wc never know about each other: each reads lines in and writes lines out, and the OS connects them.
```

Now count the lines after uniq.

### Find the mistake

### Who joins them?

## Vary: different pipes

```step
stage: modify
insight: "Each task changes one stage of the pipe: count different pets, keep only the first two in order, then save a result into a file with >."
try: { playground: board, starter: "shell.yml#modify", height: 520 }
tasks:
  - check: { type: board, text: "How many different pets are there? Use sort, uniq and wc -l in one line.", when: "u = 1 and o = 5", explain: "sort pets.txt | uniq | wc -l prints 5." }
  - smaller:
      check: { type: question, q: "pets.txt is cat, dog, catfish, parrot, cat, hamster. Once it's sorted, which two lines come first?", options: ["cat, cat", "cat, dog", "cat, catfish", "dog, cat"], answer: 0, feedback: [null, "Sort first: dog moves down.", "Both cats come before catfish.", "Sorted, it starts at the letter c."], explain: "Sorted: cat, cat, catfish, dog, hamster, parrot. head -n 2 keeps those first two." }
    check: { type: board, text: "Print just the first two pets in alphabetical order.", when: "u = 1 and l = 2 and e = 0", explain: "sort pets.txt | head -n 2: cat, cat." }
  - check: { type: board, text: "Save the lines with cat in them into a new file called cats.txt.", when: "x = 1 and p = 1", explain: "grep cat pets.txt > cats.txt: the output goes into the file instead of the screen." }
```

### Different pets

### First two

### Save it

## Practise: build the pipe

```step
stage: practise
insight: "Choosing pipes for new questions is the same move in mixed forms, plus a review of changing files."
tasks:
  - check:
      type: question
      q: "A server log has a line for every visit. Which pipe counts the visits from Australia (lines with AU)?"
      options: ["grep AU log.txt | wc -l", "wc -l log.txt | grep AU", "cat log.txt | sort", "grep log.txt | AU"]
      answer: 0
      feedback: [null, "wc would count every line first; then there is no AU left to find.", "That only sorts.", "The word to find comes first: grep AU file."]
      explain: "Find the lines first, then count them."
  - check:
      type: question
      q: "What does sort names.txt | head -n 1 print?"
      options: ["The name that comes first alphabetically", "The first name in the file", "The number of names", "Every name"]
      answer: 0
      feedback: [null, "sort reorders them first.", "head prints lines, not a count.", "head -n 1 keeps one."]
      explain: "sort orders the names; head keeps the first."
  - check:
      type: question
      q: "Review: what does rm -r projects do?"
      options: ["Deletes the projects folder and everything in it, for good", "Moves it to the recycle bin", "Renames it", "Lists it"]
      answer: 0
      feedback: [null, "There's no bin in a shell.", "That's mv.", "That's ls."]
      explain: "-r means the folder and everything inside it."
```

### Count visits

### First name

### Review: rm

## Make: the treasure hunt, part 2

```step
stage: make
insight: "Finishing the hunt with grep and a pipe puts the course together: find the exact line, read the code, then count with a pipe."
try: { playground: board, starter: "shell.yml#make", height: 560 }
hint: ["grep prints the lines that contain a word: grep WORD file.", "Capitals matter to grep.", "For the count: grep silver codes.txt, then add | wc -l."]
tasks:
  - check: { type: board, text: "You're in the office. The clue said: the right code is the only line with the word GOLD in it. Print just that line.", when: "g = 1 and l = 1 and e = 0", explain: "grep GOLD codes.txt. (grep -i GOLD would also catch \"gold 5530\": capitals matter here.)" }
  - check:
      type: answer
      q: "What is the code?"
      answer: "2468"
      feedback:
        - ["5530", "That line says gold, in small letters. The clue said GOLD."]
      explain: "GOLD 2468: you found it. Hunt complete."
  - check: { type: board, text: "One more: how many silver codes are there? Use a pipe.", when: "u = 1 and o = 2", explain: "grep silver codes.txt | wc -l prints 2." }
```

### The GOLD line

### The code

### Count with a pipe

Then: think of a question about a long list (your playlist, a class list) that a pipe could answer in one line.
