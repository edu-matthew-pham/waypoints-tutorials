---
order: 13
unit: challenge
optional: true
title: "Optional: Control panel"
summary: Turn the game into an app with a panel of buttons made from lists.
language: python
modules: [ui]
hook: "Every app is a panel of controls over some state. Build the panel from data, and adding a control is one more item in a list."
teachers: |
  **Optional, UI direction:** for students who finished the challenge and like making tools and apps. It leads to Gradio (where `gr.Button` and `gr.Radio` replace hand-drawn buttons) and to web pages (the DOM).

  **The big idea:** buttons are data. Three lists (names, positions, values) and two loops (one draws, one checks clicks) replace a pile of copied `if` statements. This is the same move as Lists, now inside a user interface.

  **Why New game waits 1.1 seconds:** setting `playing` to False lets any timer that is still waiting finish and stop, so two hop loops never run at once.

  **Creative option:** students design their own control row (a colour theme with `bgcolor`, a path chooser that swaps the lists).

  **Watch for:** lists of different lengths (an index error when the loop runs off the shorter list); two rows at the same y; a click that matches a game button and the turtle at once.
---
Your game has one button. Real apps have panels: rows of controls that change what the program does. Here the buttons come from **lists**, so a loop draws them and a loop finds which one was clicked.

## Predict

```step
stage: predict
code: panel.py#panel
check:
  type: predict
  q: "You click at x = 0 on the row of buttons. Which button is pressed?"
  options: ["New game", "Pause", "Go", "None of them"]
  actual: "Pause: its button starts at bxs[1] = -60 and is 120 wide, so it covers x from -60 to 60."
```

`names` and `bxs` hold one button each at the same index. `draw_scene` loops over them to draw, and `clicked` loops over them to check.

## Run

```step
stage: run
code: panel.py#panel
try: { starter: "panel.py#panel", height: 500 }
check: { type: reflect, text: "I used New game, Pause and Go, and I can say which list each button's name and position come from." }
```

Press **New game**, play, pause, then go again.

## Investigate

```step
stage: investigate
code: panel.py#panel
insight: "Controls stored as data are drawn and checked by loops, so the panel grows by adding to lists, not by copying code."
tasks:
  - check:
      type: trace
      text: "A click at x = 100, y = -170. Follow the loop in clicked."
      table: |
        | i | bxs[i] | inside? |
        | 0 | -190 | no |
        | 1 | [-60] | [no] |
        | 2 | [70] | [yes] |
      explain: "Only the third button covers x = 100 (it runs from 70 to 190), so press(\"Go\") runs."
  - check:
      type: question
      q: "You add a fourth name to names but forget to add a position to bxs. What happens?"
      options: ["The button appears at x = 0", "An error: the loop asks for bxs[3], which does not exist", "Nothing changes", "Python adds a position for you"]
      answer: 1
      explain: "The loops go up to len(names), so they ask for a fourth position. Parallel lists must stay the same length."
```

### Follow a click

Which button does the loop find?

### Keep the lists in step

What if the lists disagree?

## Modify: difficulty row

```step
stage: modify
try: { starter: "panel.py#difficulty", height: 520 }
hint:
  - "Three new lists: levels = [\"Easy\", \"Medium\", \"Hard\"], lxs = [-190, -60, 70], delays = [1300, 1000, 700]."
  - "Copy the drawing loop in draw_scene, but use levels, lxs and y = -140."
  - "Copy the checking loop in clicked: when a level is clicked, delay = delays[i] (and add delay to the global line)."
check:
  type: code
  text: "A second row of buttons from lists, which sets the difficulty."
  rules: { contains: ["delays[i]", "for i in range(len(levels))"] }
```

Add a second row: **Easy**, **Medium** and **Hard**. Each one sets how fast the turtle hops. Three more lists, two more loops.

## Make: your own controls

```step
stage: make
try: { starter: "panel.py#solution", height: 520 }
hint:
  - "A theme row: names like \"Day\" and \"Night\" with a list of colours, and bgcolor(colours[i]) when one is clicked."
  - "A path chooser: two pairs of lists, and a button that swaps which pair xs and ys use."
check: { type: reflect, text: "I added a row of my own controls, built from lists." }
```

Add a row of controls you design. **Where this leads:** in Gradio, you list the controls (`gr.Button`, `gr.Radio`) and Gradio draws them and checks the clicks for you. On a web page, HTML draws the buttons and JavaScript listens for clicks. You have just built what both of them do.
