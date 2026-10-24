---
order: 6
unit: loops
moveId: repeat-until
reviews: [if-else, check-first]
introduces: [while]
assumes: [input, text-join, variable, if, else, compare, and-or]
title: Repeat until
summary: Keep running lines with while for as long as a condition is true, so a program can keep asking until it gets what it needs.
language: python
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground" 8123
  url: http://127.0.0.1:8123/index.html
  ready: Python code
  layout: full
explainDiagram:
  ref: diagrams.mmd#while
  alt: "A flowchart. Ask for a word once. Then the check: is the word different from quit? If True, show You typed and the word, ask again, and go back to the check. If False, leave the loop and print Bye."
  caption: "while checks before every pass, including the first"
hook: "A PIN pad lets you try again, a game keeps going until you win, and a form keeps asking until the answer is valid. All of them repeat until something changes."
voice: true
explainClip:
  query: { code: "", speed: 8, console: 1 }
  caption: "while repeats for as long as the condition is true"
  say: "A while loop repeats for as long as its condition stays true."
  pacing: { keyDelayMs: 22 }
  clip:
    - type: { into: "Python code", text: "word = input(\"Type quit to stop: \")\n", append: true }
    - caption:
        text: "while asks the question before every pass. True: run the lines. False: skip them."
        say: "While asks before every pass. True runs the lines. False skips them."
    - type: { into: "Python code", text: "while word != \"quit\":\n    print(\"You typed \" + word)\n    word = input(\"Type quit to stop: \")\nprint(\"Bye\")\n", append: true }
    - click: "Run"
    - type: { selector: ".con-in", text: "hi" }
    - press: Enter
    - type: { selector: ".con-in", text: "quit" }
    - press: Enter
    - expect: { selector: "#output", contains: "Bye" }
    - wait: 800
---
So far every program ran from the top to the bottom once. A `for` loop repeats a set number of times. A **`while`** loop repeats for as long as a condition stays true, so a program can keep asking until it gets what it needs.

## Predict

```step
stage: predict
code: lesson.py#quit
check:
  type: predict
  q: "You type hi, then yo, then quit. What does the program show?"
  options:
    - "You typed hi, then You typed yo, then Bye"
    - "You typed hi, then You typed yo, then You typed quit, then Bye"
    - "Bye only"
    - "It asks once and stops"
  fault: logic
  misconception: condition-checked-late
  actual: "You typed hi, then You typed yo, then Bye. The condition is checked before every pass, so once quit is typed the loop body is skipped and quit is never shown."
```

`while` is new, and it works like `if` that keeps going. Read the code and decide what is shown.

## Run

```step
stage: run
code: lesson.py#quit
try: { starter: "lesson.py#quit", height: 420 }
```

Run it and type a few words, then `quit`.

| Line | What it does | Why |
|---|---|---|
| `word = input(...)` | Asks the first time | The loop needs a value to test before it starts |
| `while word != "quit":` | Asks: is `word` different from quit? True: run the indented lines, then ask again | The question is asked before every pass |
| `    word = input(...)` | Asks again, at the end of every pass | This is what can make the condition false |
| `print("Bye")` | Runs once, after the loop | Not indented, so not part of the loop |

## Investigate

```step
stage: investigate
code: lesson.py#quit
insight: "Something inside the loop must be able to make the condition false, or the loop never ends."
tasks:
  - check:
      type: trace
      text: "Fill in the condition and what the program shows after each word is typed."
      table: |
        | typed | word != "quit" | shows |
        | hi | True | You typed hi |
        | yo | [True] | [You typed yo] |
        | quit | [False] | [Bye] |
      explain: "The condition is tested after every answer. While it is True the body runs again. When quit is typed it is False, so the body is skipped and the program carries on to Bye."
  - check:
      type: question
      q: "The very first word typed is quit. How many times does the indented part of the loop run?"
      options: ["0 times", "1 time", "Until quit is typed again", "It stops with an error"]
      answer: 0
      feedback: [null, "The condition is checked before the first pass, so it can run 0 times.", "quit is already typed, so the condition is False at once.", "A condition that is False from the start is fine: the loop is skipped."]
      explain: "while checks first. If the condition is False straight away, the body never runs."
  - check:
      type: bug
      code: lesson.py#bug
      text: "Type hi and the program shows You typed hi again and again and never stops. Click the line that is in the wrong place."
      answer: 4
      fault: logic
      misconception: loop-never-changes
      explain: "The line that asks again is not indented, so it is outside the loop. Nothing inside the loop changes word, so the condition stays True for ever. Indent it so it runs on every pass."
```

### Follow the loop

Each answer decides whether the loop goes round again.

### Zero times

A loop can run no times at all.

### Spot the bug

A loop that never ends.

## Modify

```step
stage: modify
insight: "The condition can join tests with and, and the loop ends when any of them stops being true."
try: { starter: "lesson.py#modify", height: 420 }
hint:
  - "The loop keeps going while the word is not quit AND the word is not exit."
  - "Write while word != \"quit\" and word != \"exit\":"
check: { type: code, text: "Make the loop stop when the person types quit or exit.", rules: { contains: ["and", "exit"] } }
```

Change the program so typing either `quit` or `exit` stops it.

## Mix it up

```step
stage: investigate
code: lesson.py#review
insight: "A loop can keep asking until a check passes: it uses the check from last lesson as its condition."
check:
  type: number
  q: "The person types two, one, then 7. How many times does Digits only appear?"
  answer: 2
  explain: "two and one both fail the check, so the loop body runs twice. 7 passes, so the loop ends."
```

Here `while` and last lesson's check work together: it keeps asking until the answer is good.

## Make

```step
stage: make
try: { starter: "lesson.py#make", height: 420 }
hint:
  - "Ask for the password once before the loop, then ask again inside it."
  - "The condition is: the attempt is not the secret."
check: { type: code, text: "Keep asking for the password until it is right, then print a welcome.", rules: { loops: 1, contains: ["input("] } }
unlocks: [while-loop]
```

Write a password door. Choose a secret word. The program asks for the password, says `Wrong, try again` for every wrong guess, and prints `Welcome in!` when it is right.

```teacher
summary: "Students meet while, a loop that keeps going for as long as a condition is true, and use it to keep asking until the answer is right."
time: 35
timing: "Predict and Run 9 min · Investigate 10 min · Modify 4 min · Mix it up 3 min · Make 9 min"
goals:
  - I can use while to repeat lines until a condition is false.
  - I can say what makes a loop stop.
  - I can write a loop that keeps asking until the answer is right.
running:
  - "Predict: take a vote. The wrong options are two real beliefs: that quit is shown too, and that the loop runs once. Ask what the program checks before showing anything."
  - "Run: run it with a few words then quit. Ask: when is the condition checked?"
  - "Investigate: the zero-times question is the idea students miss. The bug is a very common slip: the update dedented."
  - "Make: students choose their own secret. Early finishers add a count of the tries (next lesson)."
stuck:
  - see: The loop never ends.
    ask: Which line inside the loop can change the thing the condition tests?
    fix: The input line must be inside the loop (indented), so the test sees a new answer each pass.
  - see: The loop body never runs.
    ask: Is the condition False at the start?
    fix: Check the first answer against the condition. A loop only starts when the condition is True.
stretch: Allow the door to give a hint after every wrong guess.
support: Give the loop with the condition missing and ask for the line that sets it.
leads: "Next lesson: the loop keeps a running total, adding to a number on every pass."
exit:
  q: "A while loop's condition is already False the first time it is checked. How many times does the body run?"
  a: "Zero times. while checks before every pass, including the first."
explain: |
  `while condition:` checks the condition. If it is true, the indented lines run, and then it checks again. If it is false, the lines are skipped and the program carries on after the loop.

  Something inside the loop must be able to change the condition, usually by asking again with `input`. If nothing changes, the loop never ends.
solutions:
  step-4: lesson.py#sol-exit
  step-6: lesson.py#sol-door
struggle: "Seeing that the check happens before every pass. Ask students to say what it asks after the second answer."
class:
  activities:
    - at: investigate
      title: Be the loop
      minutes: 4
      do: |
        One student reads the lines, another is the computer. After every answer the computer asks aloud: is the word different from quit?
      notes: "Hearing the condition asked every time makes the check before each pass concrete."
  questions:
    - at: investigate
      title: What's wrong with this drawing?
      type: question
      q: "Someone drew the loop like this. Which part is wrong?"
      options:
        - "The check comes after You typed, so quit would be shown too"
        - "Ask again should come before You typed"
        - "Print Bye should be inside the loop"
        - "Nothing: this is how while works"
      answer: 0
      explain: "while checks before every pass. In this drawing the word is shown first and checked after, so typing quit would show You typed quit before the loop ends."
      diagram:
        ref: diagrams.mmd#late
        alt: "A flowchart someone drew. Ask for a word. Show You typed and the word. Then check: is the word different from quit? If True, ask again and go back to showing the word. If False, print Bye."
        caption: "One student's drawing of the loop"
        role: misconception
```

```code lesson.py#quit
word = input("Type quit to stop: ")
while word != "quit":
    print("You typed " + word)
    word = input("Type quit to stop: ")
print("Bye")
```

```code lesson.py#bug
word = input("Type quit to stop: ")
while word != "quit":
    print("You typed " + word)
word = input("Type quit to stop: ")
print("Bye")
```

```code lesson.py#modify
word = input("Type quit to stop: ")
while word != "quit":
    print("You typed " + word)
    word = input("Type quit to stop: ")
print("Bye")
```

```code lesson.py#review
text = input("Pick a number from 1 to 9: ")
while text.isdigit() == False:
    text = input("Digits only. Try again: ")
print("You picked " + text)
```

```code lesson.py#make
# Password door: keep asking until the password is right.

```

```code lesson.py#sol-exit
word = input("Type quit or exit to stop: ")
while word != "quit" and word != "exit":
    print("You typed " + word)
    word = input("Type quit or exit to stop: ")
print("Bye")
```

```code lesson.py#sol-door
secret = "open sesame"
attempt = input("Password: ")
while attempt != secret:
    print("Wrong, try again.")
    attempt = input("Password: ")
print("Welcome in!")
```

```code diagrams.mmd#while
flowchart TD
  A[Ask for a word] --> B{"Is word != quit?"}
  B -- True --> C[Show You typed word]
  C --> D[Ask again]
  D --> B
  B -- False --> E[Print Bye]
  class B new
```

```code diagrams.mmd#late
flowchart TD
  A[Ask for a word] --> C[Show You typed word]
  C --> B{"Is word != quit?"}
  B -- True --> D[Ask again]
  D --> C
  B -- False --> E[Print Bye]
```
