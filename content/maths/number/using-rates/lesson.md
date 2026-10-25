---
order: 28
unit: rates
node: AC9M8M05 n2
uses: [AC9M8M05 n1]
title: Using rates
summary: "Use a rate to find a total (rate × amount), or the amount (total ÷ rate). For speed: distance = speed × time and time = distance ÷ speed. Show the units at every step, and check the answer makes sense."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How much will it cost to fill the car? How long is the drive to the coast? How many dollars for your holiday money? Each answer comes from one rate, used the right way round."
connection: drip-rate
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8319
  url: http://127.0.0.1:8319/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: rate.yml#explain-pic, caption: "At 70 km/h, 3 hours covers 210 km; 210 km ÷ 70 km/h gives back the 3 hours." }
explainClip:
  query: { code: "@rate.yml#explain", fresh: 1, id: explain }
  caption: "Both ways along the line"
  say: "Multiply to find the distance. Divide to find the time."
  clip:
    - caption: { text: "At 70 km/h: 1 hour matches 70 km.", say: "Seventy kilometres per hour." }
    - wait: 800
    - caption: { text: "3 hours: 70 × 3 = 210 km. And 210 ÷ 70 = 3 hours.", say: "Three hours is two hundred and ten kilometres. Divide to go back." }
    - click: Make the time bigger
    - click: Make the time bigger
    - click: Make the time bigger
    - click: Make the time bigger
    - expect: { selector: "#gsum", contains: "210 km" }
    - wait: 1500
---
A rate links two quantities, so you can go either way:

- **total = rate × amount**: 30 L of petrol at $1.80 per L costs $30 × 1.80$ = \$54.00;
- **amount = total ÷ rate**: \$54.00 at $1.80 per L buys $54 \div 1.80 = 30$ L.

For speed, **distance = speed × time** and **time = distance ÷ speed**. Write the units at each step: they tell you whether to multiply or divide (km ÷ km/h = h). Then check: is the answer about the right size? The petrol prices and the exchange rate in this lesson are made up for the task.

## Predict: fill the tank

```step
stage: predict
insight: "Committing to a cost from a price per litre shows whether they multiply the rate by the amount."
check:
  type: predict
  q: "Petrol costs $2.05 per litre. How much do 40 litres cost?"
  options: ["$82", "$19.51", "$42.05", "$8.20"]
  actual: "$82: 40 × $2.05 = $82. (40 ÷ 2.05 = 19.51 would be how many litres $40 buys.)"
```

<figure class="situation" role="img" aria-label="A price table for petrol. One litre costs 2 dollars 5 cents. For 40 litres the cost is a question mark."><svg viewBox="0 0 400 160" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="20" width="280" height="120" rx="4" fill="none"/><path d="M60 60 H340 M60 100 H340 M200 20 V140"/><text x="130" y="46" text-anchor="middle" fill="currentColor" stroke="none">Litres</text><text x="270" y="46" text-anchor="middle" fill="currentColor" stroke="none">Cost</text><text x="130" y="86" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="270" y="86" text-anchor="middle" fill="currentColor" stroke="none">$2.05</text><text x="130" y="126" text-anchor="middle" fill="currentColor" stroke="none">40</text><text x="270" y="126" text-anchor="middle" fill="currentColor" stroke="none">?</text></svg></figure>

## Run: the petrol bowser

```step
stage: run
insight: "Moving the litres along the double number line shows the cost growing by the rate for every litre."
try: { playground: board, starter: "rate.yml#run", height: 480 }
check: { type: board, text: "Set 40 litres. Was your prediction right?", when: "x = 40", explain: "40 × $2.05 = $82." }
```

## Investigate: multiply or divide

```step
stage: investigate
insight: "Units decide multiply or divide (Leo multiplies to find a time); currency conversion is a rate too."
tasks:
  - check:
      type: number
      q: "How long does it take to drive 270 km at 90 km/h, in hours?"
      answer: 3
      tolerance: 0
      feedback:
        - ["24300", "Time = distance ÷ speed."]
      explain: "270 ÷ 90 = 3 hours."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo works out a journey time. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: rate-multiply-divide
      explain: "Line 2: time = distance ÷ speed. 150 ÷ 60 = 2.5 hours. Units check: km ÷ km per h = h."
  - check:
      type: number
      q: "Say the exchange rate is 1 Australian dollar = 0.65 US dollars. How many US dollars do you get for 200 Australian dollars?"
      answer: 130
      tolerance: 0
      explain: "200 × 0.65 = 130 US dollars."
```

### Time

Here is the routine.

```worked
\text{time} = \text{distance} \div \text{speed} :: Choose by the units: km ÷ km/h = h.
200 \div 80 = 2.5 :: Divide: 200 km at 80 km/h.
2.5 \text{ h} = 2 \text{ h } 30 \text{ min} :: Interpret: half an hour is 30 minutes.
80 \times 2.5 = 200 :: Check by going back.
```

### Find the mistake

Read Leo's working. Do the units come out as hours?

### Exchange rates

## Modify: race, shower, money back

```step
stage: modify
insight: "Comparing two rates over time, working backwards from a total, and converting money both ways."
try: { playground: board, starter: "rate.yml#race", height: 560 }
tasks:
  - starter: "rate.yml#race"
    hint: ["Car B gains 15 km every hour.", "45 ÷ 15 = ?"]
    check: { type: board, text: "Two cars leave together at 60 km/h and 75 km/h. When is Car B 45 km ahead?", when: "x = 3", explain: "B gains 75 − 60 = 15 km each hour: 45 ÷ 15 = 3 hours." }
  - check:
      type: number
      q: "With the same example rate (1 Australian dollar = 0.65 US dollars), how many Australian dollars are 52 US dollars worth?"
      answer: 80
      tolerance: 0
      feedback:
        - ["33.8", "Going back the other way: divide by 0.65."]
      explain: "52 ÷ 0.65 = 80 Australian dollars."
  - starter: "rate.yml#shower"
    check: { type: board, text: "A shower uses 9 L per minute. How long is a shower that uses 72 L?", when: "y = 72", explain: "72 ÷ 9 = 8 minutes." }
  - check:
      type: number
      q: "A tap drips 0.5 L every hour. How many litres does it waste in a week?"
      answer: 84
      tolerance: 0
      explain: "A week is 24 × 7 = 168 hours: 168 × 0.5 = 84 L."
```

### Catch up

### Money back

### A shower

### A dripping tap

## Practise: using rates

```step
stage: practise
insight: "Totals, distances, times and a conversion, mixed; multiplying when the units say divide is the planted slip; the speed conversion review keeps units fresh."
tasks:
  - check:
      type: number
      q: "Grapes cost $4.20 per kg. How much do 3.5 kg cost, in dollars?"
      answer: 14.7
      tolerance: 0
      explain: "3.5 × 4.20 = $14.70."
  - check:
      type: number
      q: "A bus averages 85 km/h for 2.5 hours. How far does it go, in km?"
      answer: 212.5
      tolerance: 0
      explain: "85 × 2.5 = 212.5 km."
  - check:
      type: number
      q: "A cyclist rides 45 km at 15 km/h. How many hours does it take?"
      answer: 3
      tolerance: 0
      feedback:
        - ["675", "Time = distance ÷ speed."]
      explain: "45 ÷ 15 = 3 hours."
  - check:
      type: number
      q: "Review: convert 72 km/h to metres per second."
      answer: 20
      tolerance: 0
      explain: "72 ÷ 3.6 = 20 m/s."
  - check:
      type: number
      q: "A part-time job pays $18.50 per hour. How much is 6.5 hours of work, in dollars?"
      answer: 120.25
      tolerance: 0
      explain: "18.50 × 6.5 = $120.25."
  - check:
      type: number
      q: "A cricket team needs 120 runs off the last 15 overs. What run rate (runs per over) does it need?"
      answer: 8
      tolerance: 0
      feedback:
        - ["1800", "A rate per over divides: runs ÷ overs."]
      explain: "120 ÷ 15 = 8 runs per over."
```

### Cost

### Distance

### Time

### Review: m/s

### Pay

### Run rate

## Make: plan a drive

```step
stage: make
insight: "Choosing a speed and time for a fixed distance uses distance = speed × time in both directions."
try: { playground: board, starter: "rate.yml#trip", height: 520 }
hint: ["360 ÷ 4.5 = ?", "The time is 4 and a half hours."]
check: { type: board, text: "A 360 km drive must take 4.5 hours. Set the speed and time.", when: "y = 360 and x = 4.5", explain: "360 ÷ 4.5 = 80 km/h." }
```

Then say whether your speed is a sensible average for a country drive with a stop, and what the model leaves out.

## Make: a drip rate, on paper

```step
stage: make
insight: "Two rates chained: mL per hour, then drops per hour, then drops per minute. The units say what to multiply and what to divide."
hint: ["Divide the volume by the hours first.", "Then use the drop factor, then change hours to minutes."]
check:
  type: reasoning
  paper: true
  q: "A drip must give 600 mL over 4 hours through a set that makes 20 drops from every mL. How many drops a minute is that?"
  steps:
    - ["$600 \\div 4 = 150$ mL each hour", "volume divided by time is a rate in mL per hour"]
    - ["$150 \\times 20 = 3000$ drops each hour", "mL per hour times drops per mL: the mL cancel, leaving drops per hour"]
    - ["$3000 \\div 60 = 50$ drops each minute", "an hour is 60 minutes, so divide to get a rate per minute"]
    - ["Check: $50 \\times 240 = 12\\,000$ drops, and $600 \\times 20 = 12\\,000$", "the minutes in 4 hours times the rate matches the total drops"]
  picks:
    - step: 2
      q: "Why multiply 150 by 20?"
      options:
        - "Each mL makes 20 drops, so mL per hour times drops per mL gives drops per hour"
        - "Divide by 20, because a drop is smaller than a mL"
        - "Multiply by 60 first, to change hours to minutes"
      answer: 0
      feedback: [null, "A drop is smaller, so there are more drops than mL. Multiply.", "Changing to minutes is the last step, and it divides."]
  answer: "50"
  answerLabel: "Drops a minute"
  tolerance: 0
  feedback:
    - ["3000", "That is drops an hour. The question asks per minute: divide by 60."]
    - ["150", "That is mL an hour. Turn mL into drops with the 20 drops per mL."]
  criteria:
    - "I wrote the units at every step."
    - "I chained the rates: mL an hour, drops an hour, drops a minute."
    - "I checked the total number of drops."
  explain: "600 ÷ 4 = 150 mL an hour, × 20 = 3000 drops an hour, ÷ 60 = 50 drops a minute."
```

Do this one in your book, not on the screen. The volume and the time are made up for the task, not for real care. Write the units at every step: they tell you whether to multiply or divide. Then type the answer.

**Also used in**

- **Shopping.** Two packs of cereal, 500 g for \$4.80 or 750 g for \$6.60 (made-up prices): the price per 100 g, 96 c or 88 c, shows which is better value.
- **Health.** A nurse checks a drip by chaining rates by hand, as here.
- **Travel.** Fuel, speed and exchange rates are all one rate used the right way round.
