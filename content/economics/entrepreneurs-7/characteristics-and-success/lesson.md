---
order: 3
unit: success
title: Explaining why a business succeeds
node: AC9HE7K03 n3
summary: "One way to explain why a business succeeds is to look at what the people running it did: recognised an opportunity, showed initiative, found a better way (innovation), and kept stakeholders on side. Luck, timing and money to start with matter too, so a good explanation names the actions and evidence, and does not claim they guarantee success. Saying a business succeeded because it made money describes the result, not the cause."
language: maths
hook: "Two Riverbend delivery businesses started in the same year. Five years later, one is busy and growing and the other has shrunk to one van. How would you explain the difference?"
---
Riverbend is a made-up town, and so are its businesses and people.

Two more characteristics come into this lesson:

- **Initiative:** acting on your own to start something or fix a problem, without waiting to be told.
- **Innovation:** finding a new or better way of doing something that adds value.

This lesson looks at **one way to explain** why a business succeeds: by what the people running it did. It is a useful way, not the whole story. Luck, timing, and how much money someone had to start with matter too, and the businesses we hear about are mostly the ones that lasted.

## Predict: why did one grow?

```step
stage: predict
insight: "Committing first brings out explanations that describe the result instead of explaining it."
check:
  type: predict
  q: "Riverbend Cargo Bikes is growing and Dan's Deliveries has shrunk. Which is the best way to start explaining why?"
  options:
    - "Look at what each business did: what they noticed, tried and changed"
    - "Cargo Bikes grew because it made more money"
    - "Cargo Bikes had a better idea at the start, so it was always going to win"
    - "It was all luck, so there is nothing to explain"
  actual: "Looking at what each business did gives an explanation you can check against evidence. 'It made more money' describes the result. One good idea doesn't guarantee anything. Luck plays a part, but it isn't all of it."
```

## Try: what Riverbend Cargo Bikes did

```step
stage: run
insight: "Matching each characteristic to evidence from the story turns a list of terms into an explanation."
check:
  type: match
  q: "Match each characteristic to the evidence for it in Riverbend Cargo Bikes' story."
  pairs:
    - ["Recognising an opportunity", "When the new bike lanes opened, the owners saw that cafes and the pharmacy needed fast short-trip deliveries"]
    - ["Initiative", "Before anyone asked, they tried a lunchtime run for three cafes for a month"]
    - ["Innovation", "They fitted bikes with cool boxes so they could carry medicine and fresh food"]
    - ["Keeping stakeholders on side", "They agreed set delivery times with each shop and kept to them"]
```

## Worked example: explaining or describing?

```step
stage: investigate
insight: "Nib explains success with the result instead of the causes. The planted mistake is circular reasoning."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining why Riverbend Cargo Bikes succeeded. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: result-as-reason
      explain: "Line 3: making money and growing is the success itself, so it can't explain the success. An explanation names what the business did, such as the lunchtime trial and the cool boxes."
    smaller:
      check:
        type: question
        q: "Which of these says what the business did?"
        options: ["It changed its routes when the bike lanes opened", "It grew fast", "It made lots of money", "It became popular"]
        answer: 0
        explain: "Changing its routes is an action. The others describe what happened afterwards."
  - check:
      type: sort
      q: "Sort each statement about Riverbend Cargo Bikes: does it explain why it succeeded, or only describe the result?"
      options: ["Explains why", "Only describes the result"]
      items:
        - ["It ran a month-long lunchtime trial before anyone asked", "Explains why", "This is an action, so it can be a cause."]
        - ["It now has eight bikes and twelve riders", "Only describes the result", "This is what success looks like, not what caused it."]
        - ["It added cool boxes so it could carry medicine", "Explains why", "This is an innovation the business made."]
        - ["Lots of people like it", "Only describes the result", "Being liked is part of the success, not the reason for it."]
        - ["It kept to the delivery times it agreed with each shop", "Explains why", "Keeping promises to stakeholders is an action that helped."]
  - check:
      type: question
      q: "Dan's Deliveries kept the same van routes when the bike lanes opened and traffic slowed. Which explanation is the strongest?"
      options:
        - "He didn't change his routes when needs changed, and slower traffic hurt vans"
        - "His business shrank because it made less money each year"
        - "He was unlucky, so nothing he did made any difference"
        - "He wasn't a real entrepreneur, since real ones always succeed"
      answer: 0
      feedback:
        - null
        - "Making less money is what happened. It doesn't say why."
        - "The slower traffic was bad luck, but the story also says what Dan did and didn't change."
        - "Plenty of entrepreneurs' businesses struggle or close. Starting a business is a risk."
      explain: "The strongest explanation names what Dan did (or didn't do) and also names the circumstance that made things harder."
```

### Two delivery businesses

```worked
\text{Same start} :: Both began the same year, each with a little money saved.
\text{What changed} :: New bike lanes opened and car traffic in town slowed.
\text{Riverbend Cargo Bikes} :: Saw the chance, tried a lunchtime trial, added cool boxes, kept to agreed times.
\text{Dan's Deliveries} :: Kept the same van routes and didn't try anything new.
\text{So} :: One way to explain the difference: what each did when things changed, plus the change that helped bikes and hurt vans.
```

Now: what is wrong with Nib's explanation?

### Explaining or describing?

### Dan's Deliveries

## Vary: initiative, innovation and one good idea

```step
stage: modify
insight: "Telling initiative from innovation, and setting aside 'one idea guarantees success', sharpens the explanation."
tasks:
  - check:
      type: question
      q: "Riverbend Bakery's owner starts baking a gluten-free loaf after three customers ask for one. A month later she finds a way to bake it without a separate oven. Which part is innovation?"
      options:
        - "Finding a way to bake it without a separate oven"
        - "Starting to bake it after customers asked"
        - "Both are innovation, because both are new"
        - "Neither, because a loaf of bread isn't new"
      answer: 0
      feedback:
        - null
        - "Acting on the customers' request is initiative. The new method is the innovation."
        - "Starting to bake it is acting (initiative). Finding a better method is innovation."
        - "The loaf is not new, but the way of baking it is. Innovation can be a better way, not only a new product."
      explain: "Initiative is acting without being told. Innovation is a new or better way of doing something."
  - check:
      type: question
      q: "Mia says: 'If you have one really clever idea, your business is sure to succeed.' What is the best reply?"
      options:
        - "An idea helps, but what you do with it, timing and luck matter too"
        - "Mia is right: a clever enough idea is all that matters"
        - "Ideas don't matter at all; only hard work makes a business succeed"
        - "Mia is right, as long as nobody else copies the idea"
      answer: 0
      feedback:
        - null
        - "Cargo Bikes and Dan's Deliveries both had workable ideas at the start. What they did next was different."
        - "Ideas do matter. Maya's Farm Boxes started with one. They just aren't enough on their own."
        - "Even an idea nobody copies needs initiative, decisions and stakeholders to work."
      explain: "A clever idea is a start, not a guarantee. What people do with it, and their circumstances, matter too."
```

### The gluten-free loaf

### Mia's clever idea

## Practise: what counts as success?

```step
stage: practise
insight: "Success depends on what a business is trying to do, which links back to why businesses exist."
tasks:
  - check:
      type: question
      q: "Riverbend Pantry is a not-for-profit that keeps groceries affordable. Which is the best sign it is succeeding?"
      options:
        - "More families can buy fresh food at low prices, and it covers its costs"
        - "It made the biggest profit of any shop in town"
        - "Its owners became rich"
        - "It closed early so the staff could go home"
      answer: 0
      feedback:
        - null
        - "The pantry isn't trying to make a big profit. Success depends on what a business is for."
        - "A not-for-profit has no owners taking a profit."
        - "Closing early doesn't help the families it exists to serve."
      explain: "Success is measured against what the business is trying to do. For the pantry, that is affordable food for families."
  - check:
      type: question
      q: "Which explanation of a business's success uses evidence?"
      options:
        - "The bakery got busier after it started opening at 6 am for tradespeople, so spotting that need helped"
        - "The bakery is successful because it's a really successful bakery"
        - "The bakery succeeded because its owner is a natural entrepreneur"
        - "The bakery succeeded because bakeries in busy towns always do well"
      answer: 0
      feedback:
        - null
        - "This repeats the result. It doesn't say what caused it."
        - "'Natural entrepreneur' is a label, not evidence. What did she do?"
        - "Plenty of bakeries close. What did this one do differently?"
      explain: "A good explanation links a characteristic (recognising an opportunity) to evidence (opening at 6 am) and an outcome (busier)."
```

### Success for a not-for-profit

### Explanation with evidence

## Make: explain a business your class has looked at

```step
stage: make
insight: "Building your own explanation for a real business, with evidence and at least two terms, is what this standard asks for."
check:
  type: reasoning
  q: "Choose a business your class has looked at. Explain one or two factors that helped it succeed. Use at least two of these terms: opportunity, initiative, innovation, stakeholder, values. Back each one with evidence from its story, and name one thing outside its control that may also have played a part."
  paper: true
  models:
    - title: "A strong answer"
      text: "Riverbend Cargo Bikes saw an opportunity when the bike lanes opened and showed initiative by running a lunchtime trial before anyone asked. Its cool boxes were an innovation that let it carry medicine. It was also lucky that the lanes opened just as it started."
    - title: "A different answer that also works"
      text: "The bakery kept its stakeholders on side by sticking to its promise of bread by 7 am, so cafes kept ordering. Its values (buying local flour) cost more, but brought a steady supplier. A new housing estate nearby also brought more customers, which it didn't control."
  criteria: ["I used at least two of the terms correctly.", "I backed each one with evidence from the story.", "I named something outside the business's control.", "I explained causes, not just the result."]
```

Write it in your book first, then compare with the models and talk it over with a partner. There is more than one good answer.

## Typical: measuring a different kind of success

```step
stage: make
tier: typical
insight: "Comparing how two kinds of business measure success shows that the explanation depends on the aim."
check:
  type: match
  q: "Match each Riverbend business to the most fitting sign of success."
  pairs:
    - ["Riverbend Pantry (not-for-profit)", "More families buying fresh food they can afford"]
    - ["Rosa's Car Yard (one owner)", "Enough profit to pay her staff and keep the yard running"]
    - ["Valley Growers' Shed (a cooperative owned by its member farms)", "Member farms selling more of their crop at a fair price"]
    - ["Riverbend Cargo Bikes (two owners)", "Steady orders from shops, and more riders hired each year"]
```

## Wider: a business that closed

```step
stage: make
tier: wider
insight: "Explaining a business that closed, without blaming only the owner, tests the explanation against luck and timing."
check:
  type: question
  q: "A Riverbend juice bar opened in a busy street, offered new flavours each week and kept good relations with its fruit supplier. It closed after a year when road works blocked the street for eight months. Which explanation is the strongest?"
  options:
    - "It did several things well, but the road works cut off its customers for too long"
    - "It closed because the owner didn't have the right characteristics"
    - "It closed because it ran out of money"
    - "Its new flavours were a mistake, because new things always fail"
  answer: 0
  feedback:
    - null
    - "The story shows initiative, innovation and good supplier relations. Something else happened."
    - "Running out of money is what happened when it closed. What caused it?"
    - "New flavours are an innovation. The story gives a bigger reason for closing."
  explain: "Characteristics help explain success, but they aren't everything. Here a circumstance outside the business's control mattered most."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
