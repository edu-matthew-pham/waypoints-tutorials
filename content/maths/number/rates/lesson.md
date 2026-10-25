---
order: 27
unit: rates
node: AC9M8M05 n1
uses: [AC9M7N08 n1]
title: Rates
summary: "A rate compares two quantities with different units: 60 km per hour, $4 per kg, 80 beats per minute. The unit rate is how much for 1 of the second quantity: divide the first by the second. A ratio compares quantities in the same units. Speeds convert with 1 km/h = 1000 m ÷ 3600 s."
language: maths
connection: unit-pricing   # data/connections/maths.yml
voice: { name: af_heart, speed: 1.1 }
hook: "Speed limits, the price of petrol, your heart rate and how fast your phone downloads: all rates. Each one says 'this much per one of that'."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8318
  url: http://127.0.0.1:8318/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: rate.yml#explain-pic, caption: "At 60 km per hour, 2.5 hours matches 150 km: each hour adds another 60 km." }
explainClip:
  query: { code: "@rate.yml#explain", fresh: 1, id: explain }
  caption: "Per one hour"
  say: "A rate says how much for one."
  clip:
    - caption: { text: "60 km per hour: 1 hour matches 60 km.", say: "Sixty kilometres per hour. One hour matches sixty kilometres." }
    - wait: 900
    - caption: { text: "Each extra hour adds another 60 km.", say: "Each extra hour adds another sixty." }
    - click: Make the time bigger
    - click: Make the time bigger
    - click: Make the time bigger
    - expect: { selector: "#gsum", contains: "150 km" }
    - wait: 1500
---
A **rate** compares two quantities measured in **different units**: 60 km per hour (km/h), $4.50 per kilogram ($/kg), 80 beats per minute. A **ratio** compares quantities in the **same** units: 2 cups of flour to 3 cups of milk, 2 : 3.

The **unit rate** is the amount for **one** of the second quantity. Divide the first by the second, and keep the units:

$$120 \text{ km in } 2.5 \text{ h} \;\Rightarrow\; 120 \div 2.5 = 48 \text{ km per h}$$

Rates convert like units. For speed: 1 km = 1000 m and 1 h = 3600 s, so $54 \text{ km/h} = 54 \times 1000 \div 3600 = 15 \text{ m/s}$ (divide by 3.6).

## Predict: a car's speed

```step
stage: predict
insight: "Committing to a speed from a distance and a time shows whether they divide distance by time, and keep the units."
check:
  type: predict
  q: "A car travels 150 km in 2 hours at a steady speed. How far does it go in 1 hour?"
  options: ["75 km", "300 km", "152 km", "2/150 km"]
  actual: "75 km: 150 ÷ 2 = 75. The car's speed is 75 km per hour."
```

<figure class="situation" role="img" aria-label="Two number lines, one above the other. The top line is distance in kilometres, with 0 at the left and 150 at the right end, and a question mark in the middle. The bottom line is time in hours, with 0 at the left, 1 in the middle and 2 at the right end. Matching marks are joined by dashed lines."><svg viewBox="0 0 400 160" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M40 50 H340 M40 115 H340" stroke-width="1.5"/><path d="M40 42 V58 M190 42 V58 M340 42 V58 M40 107 V123 M190 107 V123 M340 107 V123" stroke-width="1.5"/><path d="M40 58 V107 M190 58 V107 M340 58 V107" stroke-dasharray="4 4" stroke="#0F6E56"/><text x="40" y="34" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="190" y="34" text-anchor="middle" fill="currentColor" stroke="none">?</text><text x="340" y="34" text-anchor="middle" fill="currentColor" stroke="none">150</text><text x="40" y="144" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="190" y="144" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="340" y="144" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="385" y="54" text-anchor="end" fill="currentColor" stroke="none" font-size="12">km</text><text x="385" y="119" text-anchor="end" fill="currentColor" stroke="none" font-size="12">hours</text></svg></figure>

## Run: set the rate

```step
stage: run
insight: "Matching a rate to a distance and time on the double number line shows the unit rate as 'one hour's worth'."
try: { playground: board, starter: "rate.yml#run", height: 520 }
check: { type: board, text: "Set the rate and the time so that 2 hours matches 150 km. Was your prediction right?", when: "r = 75 and x = 2", explain: "75 km per hour × 2 h = 150 km." }
```

The top line is the distance, the bottom line the time. The dashed line marks 1 hour.

## Investigate: rate or ratio

```step
stage: investigate
insight: "Rates have two different units, ratios one; the unit rate divides in the right order (Mia divides the wrong way); speeds convert by × 1000 ÷ 3600."
tasks:
  - check:
      type: sort
      q: "Rate or ratio?"
      options: ["Rate", "Ratio"]
      items:
        - ["60 km per hour", "Rate"]
        - ["$3.50 per kg", "Rate"]
        - ["2 : 3 cordial to water", "Ratio"]
        - ["80 beats per minute", "Rate"]
        - ["3 boys to 4 girls", "Ratio"]
        - ["7 L per 100 km", "Rate"]
      explain: "A rate has two different units; a ratio compares the same kind of thing."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia works out the price of apples per kilogram. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: rate-inverted
      explain: "Line 2: dollars per kilogram is dollars ÷ kilograms: 12 ÷ 3 = $4 per kg. 3 ÷ 12 = 0.25 kg per dollar, a different rate."
  - check:
      type: number
      q: "Convert 90 km/h to metres per second."
      answer: 25
      tolerance: 0
      feedback:
        - ["324", "That multiplies by 3.6. Metres per second is the smaller number: divide by 3.6."]
      explain: "90 × 1000 = 90 000 m in 3600 s: 90 000 ÷ 3600 = 25 m/s."
```

### Rate or ratio

Here is the routine.

```worked
\text{distance} \div \text{time} :: Divide what you want "per" by the "one" quantity.
150 \div 2.5 = 60 :: 150 km in 2.5 h.
60 \text{ km/h} :: Keep both units in the answer.
60 \div 3.6 \approx 16.7 \text{ m/s} :: To convert km/h to m/s, × 1000 ÷ 3600, which is ÷ 3.6.
```

### Find the mistake

Read Mia's working. Dollars per kilogram: which number goes first?

### Convert a speed

## Modify: convert and compare

```step
stage: modify
insight: "Converting speeds and prices and comparing two rates with the same unit shows unit rates make comparisons fair."
try: { playground: board, starter: "rate.yml#free", height: 520 }
tasks:
  - starter: "rate.yml#free"
    hint: ["The board shows m/s in its notes.", "25 m/s × 3.6 = 90 km/h."]
    check: { type: board, text: "Set the rate r (in km/h) so the speed is 25 m/s.", when: "m = 25", explain: "25 m/s = 25 × 3.6 = 90 km/h." }
  - check:
      type: number
      q: "Cheese costs $0.80 per 100 g. What is that in dollars per kilogram?"
      answer: 8
      tolerance: 0
      explain: "1 kg = 1000 g = 10 × 100 g: $0.80 × 10 = $8 per kg."
  - check:
      type: question
      q: "Rice: 600 g for $4.80, or 1 kg for $7.50. Which is the better buy?"
      options: ["The 1 kg bag: $7.50 per kg, against $8.00 per kg", "The 600 g bag: it costs less", "They are the same", "You cannot tell without more information"]
      answer: 0
      feedback: [null, "It costs less, but you get less: compare per kg.", "$4.80 ÷ 0.6 = $8.00 per kg.", "Unit rates make it fair."]
      explain: "4.80 ÷ 0.6 = $8.00 per kg, so 1 kg for $7.50 is cheaper per kilogram."
  - check:
      type: question
      q: "Your heart beats 18 times in 15 seconds. What is that in beats per minute?"
      options: ["72", "18", "33", "270"]
      answer: 0
      feedback: [null, "That is per 15 seconds.", "That adds the numbers.", "That multiplies 18 by 15."]
      explain: "A minute is 4 lots of 15 seconds: 18 × 4 = 72 beats per minute."
```

### m/s to km/h

### Price per kilogram

### Best buy

### Heart rate

## Practise: rates

```step
stage: practise
insight: "Unit rates, conversions and rate or ratio, mixed; dividing the wrong way is the planted slip; the simplest-ratio review keeps ratios separate from rates."
tasks:
  - check:
      type: number
      q: "A train travels 240 km in 3 hours. What is its speed in km per hour?"
      answer: 80
      tolerance: 0
      explain: "240 ÷ 3 = 80 km/h."
  - check:
      type: number
      q: "Convert 36 km/h to metres per second."
      answer: 10
      tolerance: 0
      explain: "36 ÷ 3.6 = 10 m/s."
  - check:
      type: number
      q: "A 2 kg bag of flour costs $3.40. What is the price in dollars per kilogram?"
      answer: 1.7
      tolerance: 0
      feedback:
        - ["0.59", "That is kilograms per dollar. Dollars per kilogram: 3.40 ÷ 2."]
      explain: "3.40 ÷ 2 = $1.70 per kg."
    smaller:
      check: { type: question, q: "'Per kilogram' means for each 1 kg. Which division gives that?", options: ["Dollars ÷ kilograms", "Kilograms ÷ dollars"], answer: 0, feedback: [null, "That gives kilograms for each dollar. The thing that comes after 'per' is the one you divide by."], explain: "The amount after 'per' goes second: dollars ÷ kilograms." }
  - check:
      type: question
      q: "Review: what is the ratio 12 : 18 in simplest form?"
      options: ["2 : 3", "3 : 2", "6 : 9", "12 : 18 is already simplest"]
      answer: 0
      feedback: [null, "The order matters: 12 first.", "6 : 9 can be simplified further.", "Both divide by 6."]
      explain: "Divide both by 6: 2 : 3."
```

### Speed

### Convert

### Price per kg

### Review: ratios

## Make: a long drive

```step
stage: make
insight: "Choosing the rate and the time to match a distance makes students use the unit rate both ways."
try: { playground: board, starter: "rate.yml#free", height: 520 }
hint: ["280 ÷ 3.5 = ?", "The time is 3 and a half hours."]
check: { type: board, text: "A drive covers 280 km in 3.5 hours at a steady speed. Set the rate and the time to match.", when: "r = 80 and x = 3.5", explain: "280 ÷ 3.5 = 80 km/h." }
```

Then give the speed in metres per second, to 1 decimal place.

## Make: the better buy, on paper

```step
stage: make
insight: "A fair comparison needs the same 'per'. The paper task makes them find a unit price for each pack and pick the right division."
hint: ["Turn both packs into dollars per 100 g.", "Divide dollars by the number of 100 g lots."]
check:
  type: reasoning
  paper: true
  q: "Two packs of the same cereal: 500 g for \\$4.80, or 750 g for \\$6.60. What is the price per 100 g of the better value pack, in dollars?"
  steps:
    - ["500 g is five lots of 100 g: $4.80 \\div 5 = 0.96$ dollars per 100 g", "dollars divided by the number of 100 g lots"]
    - ["750 g is 7.5 lots of 100 g: $6.60 \\div 7.5 = 0.88$ dollars per 100 g", "the same division for the bigger pack"]
    - ["$0.88 < 0.96$, so the 750 g pack is cheaper per 100 g", "the lower unit price is the better value"]
    - ["Check: $0.88 \\times 7.5 = 6.60$", "multiplying back gets the pack price"]
  picks:
    - step: 3
      q: "Why compare the unit prices and not the pack prices?"
      options:
        - "The packs hold different amounts, so only the price per 100 g compares them fairly"
        - "The cheaper pack price is always the better value"
        - "The bigger pack is always the better value"
      answer: 0
      feedback: [null, "The \\$4.80 pack costs less but you get less cereal. Put both on the same 'per'.", "Not always: it depends on the prices. Work out the unit prices."]
  answer: "0.88"
  answerLabel: "Price per 100 g of the better pack ($)"
  tolerance: 0.005
  feedback:
    - ["0.96", "That is the smaller pack's price per 100 g. Which pack is cheaper per 100 g?"]
    - ["6.6", "That is the bigger pack's price, not the price per 100 g. Divide by 7.5."]
    - ["1.14", "That is 7.5 ÷ 6.60 turned upside down. Dollars go first: 6.60 ÷ 7.5."]
  criteria:
    - "I put both packs on the same 'per' before comparing."
    - "I divided dollars by the number of 100 g lots, not the other way round."
    - "I said which pack is better value, and checked by multiplying back."
  explain: "500 g pack: \\$4.80 ÷ 5 = \\$0.96 per 100 g. 750 g pack: \\$6.60 ÷ 7.5 = \\$0.88 per 100 g. The 750 g pack is better value, if you will finish it before it goes stale."
```

Do this one in your book, not on the screen. The prices are made up for the task, but supermarket shelf labels show the same unit price. Find a price per 100 g for each pack, compare, and type the lower price.

**Also used in**

- **Shelf labels.** The 'per 100 g' or 'per kg' price printed under each product is a unit rate worked out for you.
- **Petrol.** Litres per 100 km tells you which car costs less to run, because every car is compared on the same distance.
- **Heart rate.** Beats counted in 15 seconds become beats per minute by scaling to one minute.
