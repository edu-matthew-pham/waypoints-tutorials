# Teacher prompt: guided coding project

## Prompt to copy

You are writing a Learning Waypoints guided project for Years 7–10. Use the site's AUTHORING.md lesson format, especially inline `code file#region` blocks, step checks and the Create page. Produce **one complete lesson.md**, not separate code files.

Inputs:
- **Project idea:** [describe it]
- **Course completed:** [course name or path]
- **Length:** [minutes or lessons]

Before the lesson, give **one feasibility line**: "Needs: …". Check the actual course content, not just its title. If required skills are missing, suggest a smaller project using known skills or name the lessons to complete first. Do not quietly teach missing skills inside an extension. Choose the correct playground (for example, console input needs the turtle playground's console mode, not turtle drawing).

Write milestones as successive `##` steps, each with a valid ```step``` YAML block and `stage: modify` or `stage: make`. Core first, extensions last. Start with a runnable, incomplete starter; supply **building blocks** (short descriptions or links to skills students already learned), and up to three increasingly specific `hint:` entries: (1) a nudge, (2) the skill to use, (3) the earlier lesson to revisit. Never give the new line of code in a hint. Fade support over the core; the **last core step is an open Make**, with success criteria and a `type: code` check, but no hints or solution visible to students. Use valid rules from AUTHORING.md (for example `uses`, `loops`, `contains`), understanding that code checks are structural, not proof of correct behaviour. Starters must not already satisfy their checks.

Optional `tier: typical` or `tier: wider` steps give only a goal and observable criteria, combining skills the course has already taught. No new content and no complete student-facing solution. Include inline `code lesson.py#...` blocks for every referenced starter. Place teacher-only full model code in `sol-*` regions, and name these under `solutions:` in the final ```teacher``` block. Teacher notes must include `summary`, `time`, `goals` (each starts "I can"), `running`, `stuck` (see/ask/fix), `struggle`, `exit`, `solutions`, and a useful `class:` activity. Keep words plain and direct.

Output only the feasibility line followed by a fenced Markdown `lesson.md` document. Check before responding: every region reference exists; each solution meets its check; each teacher solution key names a real step (`step-N`, or `step-N#tM` for a task); any `at:` points to a step that exists; all step stages, tiers and check rules are valid. Do not mistake `contains` for an execution test.

## Using the result

1. Replace the three input fields, run the prompt, and read its **Needs** line first.
2. Copy only the generated `lesson.md` (not the feasibility line) into the site's **Create** page. Check each milestone, starter and teacher-only solution in the preview.
3. Test the Make solution against the rules and actually run it. Export or save the lesson, then run `npm run validate` in the repository before publishing.

## Worked example: Hangman after Console

**Inputs:** Hangman; `content/code/console/`; 60 minutes.

**Needs:** Strings, `input()`, `while`, conditions and loops, taught by the Console course. This is a small, fixed-word Hangman; choosing random words and drawing a figure are not required.

The following is an example of the **one lesson.md** to paste into Create:

~~~markdown
---
title: Build a word guessing game
summary: Build a small Hangman game with guesses, a loop and a win message.
language: python
assumes: [input, while, if, variable, variable-update, compare]
---

Make a word guessing game. The computer keeps a secret word. The player guesses letters until they find it. Start with a fixed word; no drawing is needed.

## Keep asking

```step
stage: modify
try: { starter: "lesson.py#start", height: 420 }
hint:
  - "How will the game know when to stop asking?"
  - "Use a while loop and update a variable after each guess."
  - "Revisit Console: Repeat until."
check: { type: code, text: "Keep asking for guesses in a loop.", rules: { loops: 1, uses: [input] } }
```

Building blocks: `input()` asks a question; `while` repeats while a condition is true. Make the starter ask again after a wrong guess. Test by typing a wrong letter and then a correct one.

## Show progress

```step
stage: modify
try: { starter: "lesson.py#progress", height: 420 }
hint:
  - "Keep the guesses so you can show which letters have been found."
  - "Use a string to store guesses, and a loop and if to check each letter."
  - "Revisit Console: choices and repeating."
check: { type: code, text: "Use a loop and a choice to show progress.", rules: { loops: 1, contains: ["if ", "print("] } }
```

Building blocks: a string can store letters already guessed. Show a dash for each missing letter. Try a correct and an incorrect guess.

## Finish your game

```step
stage: make
try: { starter: "lesson.py#finish", height: 420 }
check: { type: code, text: "Ask for letters, repeat, test guesses and finish.", rules: { loops: 1, uses: [input], contains: ["if ", "print("] } }
```

Make a working game. It must ask for letters, show the found letters and missing letters, keep asking while letters are missing, and say when the word is complete. Test a wrong guess, a repeated guess and a winning sequence. Work out the final code yourself.

## Make it yours

```step
stage: make
tier: typical
try: { starter: "lesson.py#finish", height: 420 }
check: { type: reflect, text: "I tested a game with a different secret word." }
```

Choose another secret word. The game must still show the right number of dashes and finish when all letters are found.

```teacher
summary: Students build a fixed-word guessing game using familiar console skills.
time: 60
goals:
  - I can build a repeating guessing game.
  - I can check guesses and show progress.
running:
  - "Keep asking: check the stopping condition with students."
  - "Show progress: ask what the computer must remember."
  - "Finish: let students test each other's games without giving code."
struggle: The hard part is keeping track of found letters. Ask students to trace one guess before changing code.
stuck:
  - { see: "The game never stops.", ask: "What changes when a letter is found?", fix: "Update the stored guesses and recheck the condition." }
  - { see: "The dashes never change.", ask: "Which letters have been guessed so far?", fix: "Build the display from the stored guesses." }
exit: { q: "Why does this game need a loop?", a: "It must keep asking until the word is found." }
solutions:
  step-1: lesson.py#sol-ask
  step-2: lesson.py#sol-progress
  step-3: lesson.py#sol-finish
class:
  activities:
    - "Pairs test each other's games with a wrong guess, a repeated guess and a winning sequence."
```

```code lesson.py#start
word = "cat"
guess = input("Guess a letter: ")
# Keep asking until the player types c.
```

```code lesson.py#progress
word = "cat"
guesses = ""
guess = input("Guess a letter: ")
guesses += guess
# Show found letters and dashes, then ask again.
```

```code lesson.py#finish
word = "cat"
guesses = ""
# Make the game here.
```

```code lesson.py#sol-ask
word = "cat"
guess = input("Guess a letter: ")
while guess != "c":
    guess = input("Try again: ")
print("You found c!")
```

```code lesson.py#sol-progress
word = "cat"
guesses = ""
while True:
    guess = input("Guess a letter: ")
    guesses += guess
    shown = ""
    for letter in word:
        if letter in guesses:
            shown += letter
        else:
            shown += "-"
    print(shown)
    if shown == word:
        break
```

```code lesson.py#sol-finish
word = "cat"
guesses = ""
shown = "---"
while shown != word:
    guess = input("Guess a letter: ")
    if guess not in guesses:
        guesses += guess
    shown = ""
    for letter in word:
        if letter in guesses:
            shown += letter
        else:
            shown += "-"
    print(shown)
print("You found the word!")
```
~~~

**Example check:** Every starter and solution reference is defined. Teacher solution keys match steps 1–3. The final solution uses `input`, loops, `if` and `print`, so it meets the Make rules. There are no `at:` references.
