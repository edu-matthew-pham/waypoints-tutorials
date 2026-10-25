---
order: 21
unit: chance9
node: AC9M9P01 n1
uses: ["AC9M8P02 n1", "AC9M7P01 n1"]
connection: meal-deal
title: "Listing every outcome of two choices"
summary: "A meal deal is a main and a drink. Listing the deals in an order (every main with every drink) shows that two-step outcomes multiply, and stops you missing one."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The canteen meal deal is a main and a drink. How many different deals can you order?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8378
  url: http://127.0.0.1:8378/index.html
  readySelector: "#board"
  layout: full
---
A canteen meal deal is one main and one drink. Today the mains are burger, wrap, salad and soup, and the drinks are water, juice and milk (a made-up menu). Have a guess how many different deals there are, and we'll come back to the canteen at the end.

<figure class="situation" role="img" aria-label="A menu with four mains and three drinks, joined by lines"><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><text x="20" y="30" fill="currentColor" stroke="none">Mains</text><text x="20" y="60" fill="currentColor" stroke="none">burger · wrap · salad · soup</text><text x="20" y="100" fill="currentColor" stroke="none">Drinks</text><text x="20" y="125" fill="currentColor" stroke="none">water · juice · milk</text></svg></figure>

## Predict: how many deals

```step
stage: "predict"
insight: "Guessing the number of meal deals shows whether students add the menus (7) or pair them (12)."
check: {"type": "predict", "q": "4 mains and 3 drinks. How many different meal deals (one main and one drink)?", "options": ["7", "12", "24"], "actual": "12. Each of the 4 mains goes with each of the 3 drinks: 4 × 3 = 12."}
```

## Run: deals with juice

```step
stage: "run"
insight: "Choosing the juice deals in the grid and the tree shows each main has one juice deal, so 4 of the 12."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Choose every deal that has juice. Then press Show as a tree. How many deals did you choose?", "when": "r = 1", "explain": "Burger, wrap, salad and soup each go with juice: 4 of the 12 deals."}
```

## Investigate: count and list

```step
stage: "investigate"
insight: "Pairs multiply because every first choice goes with every second; listing one first choice at a time is the way not to miss any."
tasks:
  - {"check": {"type": "number", "q": "A pizza has 5 toppings to choose from and 4 sauces. How many top-and-sauce pairs?", "answer": 20, "tolerance": 0, "explain": "5 × 4 = 20 pairs.", "feedback": [["9", "Each topping goes with every sauce: multiply."]]}, "smaller": {"check": {"type": "number", "q": "A burger can go with each of the 3 drinks. How many deals have a burger?", "answer": 3, "tolerance": 0, "explain": "3: burger and water, burger and juice, burger and milk."}}}
  - {"check": {"type": "bug", "code": "working.txt#sam", "text": "Sam counts the deals for 4 mains and 3 drinks. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "pairs-add", "explain": "Line 2: each main goes with each drink, so the deals are 4 × 3 = 12, not 4 + 3."}}
  - {"check": {"type": "question", "q": "What is the safest way to list every meal deal?", "options": ["Take one main at a time and pair it with each drink", "Write deals as they come to mind", "List the drinks only", "Count the mains, then count the drinks and add"], "answer": 0, "feedback": [null, "Deals written at random can repeat or be missed.", "Each deal also has a main.", "Adding gives 7, but every main pairs with every drink."], "explain": "Go main by main: burger with water, juice, milk; then wrap with water, juice, milk; and so on. Each main gets a row, so none is missed or repeated."}}
```

### Count the pairs

```worked
\text{4 mains, 3 drinks} :: Two choices, one after the other.
\text{burger} \to \text{water, juice, milk} :: Take one main and pair it with every drink.
4 \times 3 = 12 :: Every main has 3 deals, so multiply.
```

### Find the mistake

Read Sam's working. Is a deal a main, a drink, or both?

### List without missing any

## Modify: change the menu

```step
stage: "modify"
insight: "Taking some deals out, or adding a third choice, still counts by the same listing."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#nosaladmilk", "check": {"type": "board", "text": "Choose every deal that has no salad and no milk.", "when": "r = 1", "explain": "3 mains (burger, wrap, soup) with 2 drinks (water, juice): 6 deals."}}
  - {"starter": "b.yml#soup", "check": {"type": "board", "text": "Choose every deal that has soup.", "when": "r = 1", "explain": "Soup goes with water, juice and milk: 3 deals."}}
  - {"hint": ["Each of the 12 deals now has a dessert choice too.", "12 × 2."], "check": {"type": "number", "q": "The canteen adds a dessert of fruit or yoghurt to every deal. How many main, drink and dessert combinations are there?", "answer": 24, "tolerance": 0, "explain": "12 × 2 = 24. Each extra choice multiplies."}}
```

### No salad, no milk

### Soup deals

### Add a dessert

## Practise: pairs and triples

```step
stage: "practise"
insight: "Counting choices by multiplying, with a pair of choices and then a dearer one."
tasks:
  - {"check": {"type": "number", "q": "A bike can be red, blue or green, with 4 different tyre types. How many bike-and-tyre combinations?", "answer": 12, "tolerance": 0, "explain": "3 × 4 = 12."}}
  - {"check": {"type": "number", "q": "A PIN has 2 digits, each from 0 to 9. How many different PINs are there?", "answer": 100, "tolerance": 0, "explain": "10 × 10 = 100."}}
  - {"check": {"type": "number", "q": "Review: what is $\\tfrac{3}{4}$ of 20?", "answer": 15, "tolerance": 0, "explain": "20 ÷ 4 = 5, then 5 × 3 = 15."}}
```

### Bikes

### Two-digit PINs

### Review

## Make: back to the canteen

```step
stage: "make"
insight: "Returning to the opening: take one choice away and recount, working on paper."
check: {"type": "reasoning", "paper": true, "q": "The wrap has run out. The canteen still has 3 mains and 3 drinks. How many meal deals can you order now? (The menu is made up for the task.)", "steps": [["Mains left: $4 - 1 = 3$", "one main is gone"], ["$3 \\times 3 = 9$", "pair each main with each drink"]], "answer": "9", "answerLabel": "Meal deals", "tolerance": 0, "feedback": [["12", "That is the number with the wrap. Take the wrap out first."], ["6", "3 + 3 adds the menus. Pair each main with each drink."]], "criteria": ["I took one main away first.", "I paired every main with every drink.", "I checked by listing a row for each main."], "explain": "3 mains × 3 drinks = 9 deals, 3 fewer than before (the wrap's row)."}
```

Check by listing: a row of 3 for each main. Which row did you cross out?

**Also used in**

- **Passwords and PINs.** A 4-digit PIN is four choices of 10 digits in a row: 10 × 10 × 10 × 10 = 10 000 PINs.
- **Computing.** Testing every setting of a program means listing every combination, then asking if you can test fewer.
- **Next lesson.** Draws where something is not put back, so the choices change.
