---
order: 29
unit: modelling
node: AC9M8M07 n1
uses: [AC9M8M05 n2, AC9M7M06 n1]
title: Ratio and rate models
summary: "Model a practical problem: say what you need, decide whether it is a ratio (parts of the same kind, like cordial to water) or a rate (two different units, like m² per litre), set it up, solve, then interpret the answer in the situation, such as rounding up to whole tins."
language: maths
connection: electricity-plan   # data/connections/maths.yml
voice: { name: af_heart, speed: 1.1 }
hook: "Painting a room, mixing cordial for a party, filling a pool, sharing the cost of a gift: the maths is easy once you choose the right model and remember what the answer means."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8320
  url: http://127.0.0.1:8320/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: models.yml#explain-pic, caption: "Cordial 1 : 4 water: 2 L of drink is 5 equal parts of 0.4 L, so 0.4 L of cordial and 1.6 L of water." }
explainClip:
  query: { code: "@models.yml#explain", fresh: 1, id: explain }
  caption: "A ratio model"
  say: "Same kind of quantity on both sides: a ratio."
  clip:
    - caption: { text: "Cordial and water, 1 : 4: both measured in litres, so a ratio.", say: "Cordial to water, one to four. Both in litres: a ratio." }
    - wait: 1000
    - caption: { text: "More drink, same ratio: each part grows.", say: "More drink, the same ratio. Each part grows." }
    - click: Make the total bigger
    - click: Make the total bigger
    - click: Make the total bigger
    - expect: { selector: "#gsum", contains: "5 L ÷ 5" }
    - wait: 1500
---
To **model** a practical problem:

1. **Say what you need to find**, with its units.
2. **Choose the model.** Quantities of the **same kind** (litres of cordial to litres of water) make a **ratio**. Quantities with **different units** (square metres per litre, litres per minute) make a **rate**.
3. **Set it up and solve.**
4. **Interpret** the answer in the situation: paint comes in whole tins, people come in whole numbers, money is to the cent.

## Predict: paint a wall

```step
stage: predict
insight: "Committing to an amount of paint shows whether they divide the area by the coverage rate, or multiply."
check:
  type: predict
  q: "A litre of paint covers 12 m². How much paint do you need for a 30 m² wall?"
  options: ["2.5 L", "360 L", "0.4 L", "42 L"]
  actual: "2.5 L: 30 ÷ 12 = 2.5. (360 multiplies the area by the rate; that would be m² × m² per L, which makes no sense.)"
```

## Run: coverage

```step
stage: run
insight: "Moving the litres until the area reaches the wall shows the rate model, then the answer has to be interpreted for tins."
try: { playground: board, starter: "models.yml#run", height: 480 }
check: { type: board, text: "Find how many litres cover the 30 m² wall. Was your prediction right? How many 1 L tins would you buy?", when: "y = 30", explain: "2.5 L covers 30 m²; paint comes in whole tins, so buy 3." }
```

## Investigate: choosing the model

```step
stage: investigate
insight: "Same units point to a ratio, different units to a rate; the answer must suit the situation (Ana rounds tins down)."
tasks:
  - check:
      type: question
      q: "Cordial is mixed 1 part cordial to 4 parts water. Is this a ratio or a rate model?"
      options: ["A ratio: both parts are litres of liquid", "A rate: litres per litre", "Neither", "A percentage"]
      answer: 0
      feedback: [null, "Litres per litre has the same unit twice: that is a ratio.", "It compares two amounts, so it is one of them.", "It can be written as a percentage, but the model is a ratio."]
      explain: "Same kind of quantity, same units: a ratio, 1 : 4."
  - check:
      type: bug
      code: "working.txt#ana"
      text: "Ana buys paint. Click the line where her answer stops making sense."
      answer: 3
      fault: logic
      misconception: model-round-down
      explain: "Line 3: 2.4 does round to 2, but 2 tins hold only 2 L, not enough. Here she must round up: 3 tins."
  - check:
      type: number
      q: "A car uses 7 L of petrol per 100 km (made up for the task). How many litres does a 350 km trip use?"
      answer: 24.5
      tolerance: 0
      explain: "350 km is 3.5 lots of 100 km: 3.5 × 7 = 24.5 L."
```

### Ratio or rate

Here is the routine.

```worked
\text{need: litres of paint for 20 m}^2 :: Say what you are finding, with units.
\text{12 m}^2 \text{ per L: a rate} :: Different units, so a rate.
20 \div 12 \approx 1.7 \text{ L} :: m² ÷ (m² per L) = L.
\text{buy 2 one-litre tins} :: Interpret: tins are whole, and 1 would not be enough.
```

### Find the mistake

Read Ana's working. Will 2 tins be enough?

### Fuel use

## Modify: share, scale, fill

```step
stage: modify
insight: "A ratio share, a recipe scaled by a rate, choosing the model, and a fill time, each interpreted in context."
try: { playground: board, starter: "models.yml#share", height: 520 }
tasks:
  - starter: "models.yml#share"
    hint: ["The ratio is 3 : 5, so 8 parts.", "Set the total to $240."]
    check: { type: board, text: "Two friends share the cost of a $240 gift in the ratio 3 : 5. Set the board. How much does each pay?", when: "a = 3 and b = 5 and w = 240", explain: "8 parts of $30: $90 and $150." }
  - check:
      type: number
      q: "A pasta recipe uses 300 g of pasta for 4 serves. How many grams for 10 serves?"
      answer: 750
      tolerance: 0
      explain: "75 g per serve (a rate): 75 × 10 = 750 g."
  - check:
      type: question
      q: "Which is a rate model?"
      options: ["Bananas at $3.90 per kg", "A class of 12 boys to 15 girls", "Paint mixed 2 parts blue to 1 part white", "A map scale of 1 : 50 000"]
      answer: 0
      feedback: [null, "Boys and girls are both people: a ratio.", "Both parts are paint: a ratio.", "Both lengths: a ratio."]
      explain: "Dollars per kilogram: two different units."
  - check:
      type: number
      q: "A hose fills a 1200 L tank at 15 L per minute. How many minutes does it take?"
      answer: 80
      tolerance: 0
      explain: "1200 ÷ 15 = 80 minutes (1 hour 20 minutes)."
```

### Share a gift

### Scale a recipe

### Which model

### Fill a tank

## Practise: models

```step
stage: practise
insight: "Rate and ratio models with interpreting, mixed; rounding the wrong way for the situation is the planted slip; the percentage review keeps multipliers fresh."
tasks:
  - check:
      type: number
      q: "5 L of paint at 12 m² per litre covers how many square metres?"
      answer: 60
      tolerance: 0
      explain: "5 × 12 = 60 m²."
  - check:
      type: number
      q: "Cordial is mixed 1 : 4 with water. How many litres of cordial are in 3 L of drink?"
      answer: 0.6
      tolerance: 0
      feedback:
        - ["0.75", "1 : 4 is 5 parts altogether, not 4."]
      explain: "5 parts make 3 L, so one part is 0.6 L of cordial."
    smaller:
      check: { type: number, q: "A $1 : 4$ mix: how many equal parts is that altogether?", answer: 5, explain: "1 part cordial and 4 parts water make 5 parts." }
  - check:
      type: number
      q: "A bus seats 45 people. How many buses are needed for 200 people?"
      answer: 5
      tolerance: 0
      feedback:
        - ["4", "4 buses seat only 180: round up."]
      explain: "200 ÷ 45 = 4.4…, and a part bus is still a bus: 5."
  - check:
      type: number
      q: "Review: increase $50 by 10%."
      answer: 55
      tolerance: 0
      explain: "50 × 1.1 = $55."
```

### Paint

### Cordial

### Buses

### Review: percentage increase

## Make: paint a fence

```step
stage: make
insight: "A two-step model (area doubled for two coats, then the rate) with an answer to interpret."
try: { playground: board, starter: "models.yml#fence", height: 480 }
hint: ["Two coats on 42 m² is 84 m² of painting.", "84 ÷ 12 = ?"]
check: { type: board, text: "A 42 m² fence needs two coats. Paint covers 12 m² per litre. Find how many litres.", when: "y = 84", explain: "2 × 42 = 84 m², and 84 ÷ 12 = 7 L." }
```

Then say how many 4 L tins to buy, and why.

## Make: two electricity plans, on paper

```step
stage: make
insight: "Each plan is a rate model: a charge per day plus a rate per kWh, with the household's real usage. The paper task makes them build both and compare the same period."
hint: ["Work out each plan's cost for one day first.", "Then scale the difference to 90 days."]
check:
  type: reasoning
  paper: true
  q: "Plan A charges \\$1.00 a day plus \\$0.30 per kWh. Plan B charges \\$1.40 a day plus \\$0.24 per kWh. A household uses 12 kWh a day. How many dollars cheaper is the cheaper plan over a 90-day bill?"
  steps:
    - ["Plan A per day: $1.00 + 12 \\times 0.30 = 1.00 + 3.60 = 4.60$", "the daily charge plus the rate times the kWh used"]
    - ["Plan B per day: $1.40 + 12 \\times 0.24 = 1.40 + 2.88 = 4.28$", "the same calculation with Plan B's numbers"]
    - ["B is cheaper by $4.60 - 4.28 = 0.32$ dollars a day", "compare the two costs for the same day"]
    - ["Over 90 days: $0.32 \\times 90 = 28.80$ dollars", "scale the daily difference to the whole bill"]
  picks:
    - step: 1
      q: "What goes into each plan's cost for a day?"
      options:
        - "The daily charge, plus the rate per kWh times the kWh used"
        - "Only the rate per kWh, because it is the bigger part"
        - "Only the daily charge, because it is paid every day"
      answer: 0
      feedback: [null, "The daily charge is paid whatever you use, so it belongs in the cost. Plan B's rate is lower but its charge is higher.", "The kWh rate also matters: it is paid for every unit you use."]
  answer: "28.80"
  answerLabel: "Saving with the cheaper plan over 90 days ($)"
  tolerance: 0.01
  feedback:
    - ["0.32", "That is the saving for one day. The bill is 90 days."]
    - ["385.2", "That is Plan B's whole bill. The question asks how much cheaper it is than Plan A."]
  criteria:
    - "I included the daily charge and the usage cost for both plans."
    - "I compared the plans over the same period."
    - "I said which plan is cheaper for this household, and that a different usage could change that."
  explain: "A costs \\$4.60 a day and B costs \\$4.28 a day, so B is \\$0.32 a day cheaper: \\$28.80 over 90 days. The household's usage matters: at very low usage, Plan A's smaller daily charge would win."
```

Do this one in your book, not on the screen. The prices are made up for the task, but every household can compare plans like this from a real bill, which shows the daily usage. Work out each plan for one day, find the difference, scale it to 90 days, and type the saving.

**Also used in**

- **Phone and internet plans.** A monthly fee plus a price per gigabyte is the same fixed-plus-rate model.
- **Bike and car hire.** A fixed fee plus a rate per hour or per kilometre, compared for the trip you really take.
- **Paint and fuel.** Coverage per litre and litres per 100 km turn a job's size into the amount you need.
