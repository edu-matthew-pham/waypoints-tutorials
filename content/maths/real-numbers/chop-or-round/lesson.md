---
order: 16
unit: approx10
node: AC9M10N01 n2
uses: [AC9M10N01 n1]
assumes: [AC9M7N04 n1]
connection: cents-chop
title: Chop or round?
summary: "Chopping digits off always goes down, so the errors pile up on one side. Rounding goes up and down, so the errors mostly cancel. Over thousands of sales that's the difference between losing $20 a day and losing almost nothing."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A till drops the extra digits off every price instead of rounding them. Would anyone notice?"
---
A shop runs a 15% off sale. Take 15% off a price and the answer often has more digits than a till can show, like $3.3490, so the till has to cut it to the cent. This till just chops off the extra digits. The prices and the number of sales here are all made up.

## Predict: four sale prices

```step
stage: predict
insight: "Committing to the till's total shows who thinks chopping makes no real difference, and who sees that every chop goes the same way."
check:
  type: predict
  q: "Four sale prices come to $14.6030 exactly. The till chops each one to the cent before adding them. What total does the till show?"
  options:
    - "$14.58"
    - "$14.60"
    - "$14.61"
    - "$14.63"
  actual: "$14.58. Chopping $2.0145, $3.9015, $3.3490 and $5.3380 gives $2.01, $3.90, $3.34 and $5.33, which add to $14.58, over 2 cents less than the exact total."
```

<figure class="situation" role="img" aria-label="A till slip with four lines. The exact sale prices are 2 dollars 0145, 3 dollars 9015, 3 dollars 3490 and 5 dollars 3380. The cents the till prints for each are question marks. The total line says exact total 14 dollars 6030 and till total with a question mark."><svg viewBox="0 0 340 230" width="340" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="15"><rect x="40" y="10" width="260" height="210" rx="6" fill="#1D9E75" fill-opacity="0.12" stroke="#0F6E56"/><text x="60" y="44" fill="currentColor" stroke="none">$2.0145  →  $ ?</text><text x="60" y="76" fill="currentColor" stroke="none">$3.9015  →  $ ?</text><text x="60" y="108" fill="currentColor" stroke="none">$3.3490  →  $ ?</text><text x="60" y="140" fill="currentColor" stroke="none">$5.3380  →  $ ?</text><path d="M60 156 L280 156" stroke="currentColor"/><text x="60" y="180" fill="currentColor" stroke="none">exact total  $14.6030</text><text x="60" y="206" fill="currentColor" stroke="none">till total  $ ?</text></svg></figure>

The till only prints whole cents, so each price loses its last two digits somehow. Does that matter?

## Run: work it out

```step
stage: run
insight: "Chopping the four prices and rounding them give two different totals, and the chopped one is further below the exact total."
tasks:
  - check: { type: number, q: "Chop each price to the cent ($2.01, $3.90, $3.34, $5.33). What do they add to? Was your prediction right?", answer: 14.58, tolerance: 0.001, explain: "2.01 + 3.90 + 3.34 + 5.33 = 14.58." }
  - check: { type: number, q: "Now round each price to the nearest cent instead ($2.01, $3.90, $3.35, $5.34). What do they add to?", answer: 14.6, tolerance: 0.001, explain: "2.01 + 3.90 + 3.35 + 5.34 = 14.60, much closer to the exact 14.6030." }
```

### Chopping

### Rounding

Only two of the four prices changed, but they changed the total by 2 cents.

## Investigate: which way do the errors go?

```step
stage: investigate
insight: "Chopping always cuts the price down, so every error has the same sign and they add up. Rounding sometimes goes up and sometimes down. Rosa says she's rounding but she's chopping."
tasks:
  - check:
      type: number
      q: "Round $5.3380 to the nearest cent."
      answer: 5.34
      tolerance: 0.001
      explain: "The digit after the cent is 8, which is 5 or more, so the 3 goes up to 4: $5.34. Chopping would give $5.33."
  - check:
      type: bug
      code: "working.txt#rosa"
      text: "Rosa rounds $1.5555 to the nearest cent. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: round-truncate
      explain: "Line 3: dropping the left over digits is chopping, not rounding. The next digit is 5, so round up: $1.56."
  - check:
      type: question
      q: "A till handles thousands of prices with digits all over the place. Which method keeps drifting in the same direction?"
      options: ["Chopping, because it always goes down", "Rounding, because it always goes up", "Both drift the same amount", "Neither: they both come out even"]
      answer: 0
      feedback: [null, "Rounding goes up when the next digit is 5 or more and down when it isn't.", "Rounding's errors go both ways and mostly cancel.", "Chopping's errors all point the same way, so they add up."]
      explain: "Every chop removes something, so the errors all add. Rounding's errors point up or down about equally, so they mostly cancel."
```

### Round it properly

Here's one price chopped and rounded, and how far each one is from the exact price.

```worked
\$3.3490 :: A sale price with extra digits.
\text{chop} \to \$3.34 :: Cut after the cent. $0.0090 below the exact price.
\text{round} \to \$3.35 :: The next digit is 9, so go up. $0.0010 above.
\$1.5555 :: Another price.
\text{chop} \to \$1.55 :: $0.0055 below.
\text{round} \to \$1.56 :: The next digit is 5, so go up. $0.0045 above.
```

Now try one on paper: round $5.3380 to the nearest cent, and see how far from the exact price it is. Then type the rounded price.

### Find the mistake

Read Rosa's working. Did she look at the next digit?

### Which way does it drift?

## Modify: change the prices

```step
stage: modify
insight: "Changing the price shows when chopping and rounding agree (next digit under 5), and that chopping always goes down, even when that helps the customer."
tasks:
  - hint: ["Look at the digit straight after the cent: 2.", "Is it 5 or more?"]
    check: { type: number, q: "Round $6.0520 to the cent, and chop it to the cent. What is the difference between the two answers?", answer: 0, tolerance: 0.0001, explain: "The next digit is 2, so rounding doesn't go up. Both give $6.05, so the difference is 0." }
  - hint: ["A 10% surcharge on $4.59 is $5.049.", "Chop means cut after the cent."]
    check: { type: number, q: "A shop adds a 10% surcharge, and a $4.59 item comes to $5.049. What does a chopping till print?", answer: 5.04, tolerance: 0.001, explain: "Chop $5.049 to $5.04. Rounding would give $5.05." }
  - hint: ["Compare $5.04 with the exact $5.049.", "Who pays less than they should?"]
    check: { type: question, q: "Edge case: in the surcharge sale, chopping makes the price lower than the exact one. Who does that help?", options: ["The customer, who pays a bit less", "The shop, who gets a bit more", "Nobody", "Both, equally"], answer: 0, feedback: [null, "The shop gets 5.04, which is less than the exact 5.049.", "Someone pays less than they should.", "Chopping only goes one way."], explain: "Chopping always goes down. On a discount the customer pays less than exact, on a surcharge too: in both cases the price is lower, so the shop is the one who loses." }
```

### When they agree

### A surcharge

### Who benefits?

## Practise: chop and round

```step
stage: practise
insight: "Chopping and rounding the same price, and adding up what a day of chopping costs; the review keeps exact and approximate straight."
tasks:
  - check:
      type: number
      q: "Chop $4.6410 to the cent."
      answer: 4.64
      tolerance: 0.001
      explain: "Cut after the cent: $4.64."
    smaller:
      check: { type: "number", q: "Just the digits you are cutting off. Which digit comes straight after the cent in $4.6410?", answer: 1, explain: "$4.64 then 1 then 0: the digit after the cent is 1." }
  - check:
      type: number
      q: "Round $1.5555 to the nearest cent."
      answer: 1.56
      tolerance: 0.001
      explain: "The next digit is 5, so round up: $1.56."
  - check:
      type: number
      q: "If the digits past the cent are spread evenly, chopping loses about half a cent a sale. A till chops 4000 sales in a day. About how many dollars is that?"
      answer: 20
      tolerance: 0.01
      explain: "4000 × 0.5 cents = 2000 cents = $20."
  - check:
      type: question
      q: "Review: which of these is exact?"
      options: ["$\\sqrt{64}$", "$\\sqrt{65}$", "$3.14$ for $\\pi$"]
      answer: 0
      feedback: [null, "65 isn't a perfect square, so √65 never stops.", "3.14 is π cut short."]
      explain: "√64 = 8 exactly."
```

### Chop it

### Round it

### A day's chopping

### Review

Exact or approximate, from the last lesson.

## Make: back to the till

```step
stage: make
insight: "Coming back to the till: chopping loses about half a cent a sale, always on the same side, so a week adds up. Rounding loses about nothing."
tasks:
  - hint: ["4000 sales × half a cent.", "Then times 6 days."]
    check:
      type: reasoning
      paper: true
      q: "A till chops 4000 sales a day, losing about half a cent on each. How many dollars short is it after a 6 day trading week? Then say about how far off a rounding till would be."
      steps:
        - ["$4000 \\times 0.5$ cents $= 2000$ cents $= \\$20$ a day", "half a cent, 4000 times"]
        - ["$6 \\times \\$20 = \\$120$", "six days"]
        - ["Rounding: about $0", "its errors go up and down, so they mostly cancel"]
      answer: "120"
      answerLabel: "Chopping till, short after the week ($)"
      tolerance: 0.5
      feedback:
        - ["20", "That's one day. The question asks for 6 days."]
        - ["12000", "Half a cent is 0.5 cents, not 50: 4000 × 0.5 = 2000 cents."]
      criteria:
        - "I turned the half cent into dollars before multiplying by days."
        - "My answer is for 6 days, not 1."
        - "I said rounding's errors cancel."
      explain: "$20 a day for 6 days is $120. A rounding till is out by a few cents at most, because the errors go up and down."
  - check:
      type: question
      q: "A student says: 'Rounding is always right, so it's the only fair way.' What's wrong with that?"
      options: ["Each rounded price is still a little off, but the errors go both ways and cancel", "Nothing: rounding is never off", "Rounding is only fair for discounts", "Chopping is fairer for surcharges"]
      answer: 0
      feedback: [null, "A rounded price of $3.35 for $3.3490 is off by 0.1 cent.", "Rounding doesn't depend on what the price was for.", "Chopping always goes down, whatever the price is for."]
      explain: "Every rounded price is a little off. The point is that the errors point both ways, so the total stays close."
```

### The week

Back to the till. Work this out on paper first, then type your answer.

### Is rounding always right?

All the prices and sale numbers in this lesson are made up. The half a cent is the average chop when the digits past the cent are spread evenly; our four prices lost a bit less than that.

**Also used in**

- **Money.** Interest, wages and tax are worked out to the cent, so someone has to decide whether to chop or round.
- **Next lesson.** What happens when you round again and again, a little at each step.
