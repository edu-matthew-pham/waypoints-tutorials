---
order: 2
unit: sources
title: Who made it, and why?
summary: "Every page was made by someone, for a reason. Before you use a page, find three things: who made it (the About page, the address, a name), why (to inform, to sell, to persuade or to entertain) and when (the date). A page that wants to sell or persuade can still be useful, but you read it knowing what it wants."
language: science
shape: 5e
hook: "Two pages both say beans grow best in full sun. One is from a garden club, the other from a shop selling grow lamps. Does it matter who said it?"
---
Every page was made by someone, for a reason. Before you use a page, find three things:

- **Who** made it: the address, a name on the page, or its About page.
- **Why** they made it: to **inform** (tell you facts), to **sell** (get you to buy), to **persuade** (change what you think or do) or to **entertain** (make you laugh or enjoy it). Many pages do more than one.
- **When**: the date it was written or last updated.

A page that sells or persuades can still be right. You read it knowing what it wants from you.

## Engage: does it matter who?

```step
stage: predict
insight: "Committing to a view tests the move: the same words mean something different from a maker who wants something."
check:
  type: predict
  q: "Two pages both say beans grow best in full sun. One is from a garden club. The other is from a shop selling grow lamps. Which would you trust more on this?"
  options: ["The garden club: the shop wants to sell lamps", "The shop: it sells garden things, so it knows", "They are the same: the words are the same", "I would need to know more about both"]
  actual: "There is no single right answer. Many people trust the garden club more because the shop has something to sell, and that is a fair reason. 'I would need to know more' is a strong answer too: who is in the club, and when was each page written? The words are the same, but the makers want different things."
```

## Explore: sort the pages by purpose

```step
stage: run
insight: "Sorting six made-up pages by purpose settles the prediction: the maker and the reason are clues on the page."
check:
  type: sort
  q: "What is the main purpose of each page?"
  options: ["To inform", "To sell", "To persuade", "To entertain"]
  items:
    - ["riverbend-council.example: Bin collection days for each street, updated 2 October.", "To inform", "It tells you facts you need, and asks nothing of you."]
    - ["growfast.example: GrowFast lamps make beans grow twice as fast! Order now, free delivery.", "To sell", "Order now and a price: it wants you to buy."]
    - ["save-the-creek.example: Sign our petition to stop cars parking by Riverbend creek.", "To persuade", "It wants you to agree and to sign."]
    - ["funnyfarm.example: Ten bean jokes that will make you groan.", "To entertain", "Jokes are for fun."]
    - ["riverbend-library.example: How to borrow an e-book, step by step.", "To inform", "Steps that help you do something, with nothing to buy."]
    - ["kestrel-helmets.example: The Kestrel helmet, now $49. Add to cart.", "To sell", "A price and Add to cart: it wants you to buy."]
```

Was your guess right? The address, the words used (order now, sign, we earn money) and the About page are the clues. Some pages do two things at once. A review site that earns money when you buy what it reviews both informs and sells: your class will argue about that one.

## Explain: who, why, when

```step
stage: investigate
insight: "Naming who, why and when, then a mistake planted after it, explains the move."
tasks:
  - check:
      type: question
      q: "Where is the best place to find out who made a page?"
      options: ["Its About page, the address and any name on it", "The colours and pictures", "How many adverts it has", "How long the page is"]
      answer: 0
      feedback: [null, "Anyone can make a page look good. Looks say nothing about who.", "Adverts tell you how it earns money, not who made it.", "Length says nothing about who wrote it."]
      explain: "The About page, the address and names on the page say who made it. If you cannot find out, that is a clue too."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia's teacher asks why she trusted her page. Click the line where Mia first goes wrong."
      answer: 3
      fault: logic
      misconception: pages-just-inform
      explain: "Line 3: Mia used the page without asking who made it or why. It was a shop selling plant food, so it had a reason to say plants need plant food. It might still be right, but she should have known what it wanted."
```

### Where to look

### Find Mia's mistake

## Elaborate: when does the date matter?

```step
stage: modify
insight: "Each task changes the question, so students decide when the date matters and when it does not."
tasks:
  - check:
      type: sort
      q: "Does the date matter for each question?"
      options: ["The date matters a lot", "The date matters less"]
      items:
        - ["When is the next school holiday?", "The date matters a lot", "Holidays change every year."]
        - ["How many legs does a spider have?", "The date matters less", "That fact does not change. A careful old page can still be right."]
        - ["What is the price of a bus ticket?", "The date matters a lot", "Prices change."]
        - ["Who won the Riverbend junior netball league?", "The date matters a lot", "A different team may win each season."]
        - ["How do you write a fraction as a decimal?", "The date matters less", "The method does not change."]
  - check:
      type: question
      q: "You cannot find any name, About page or date on a page. What does that tell you?"
      options: ["You cannot check who made it or when, so trust it less and look for another page", "It must be true: it has nothing to hide", "It is from the government", "Nothing at all"]
      answer: 0
      feedback: [null, "No name means no one to check, not nothing to hide.", "Nothing on the page says so.", "Missing details are a clue: you cannot check who or when."]
      explain: "A page with no maker and no date is hard to check. It might be fine, but find a page you can check."
```

### Does the date matter?

### No name, no date

## Practise: read a page

```step
stage: practise
insight: "Reading one new page for who, why and when repeats the habit."
check:
  type: match
  q: "Read the page below. Match each question to its answer."
  pairs:
    - ["Who made it?", "The Riverbend Bike Shop"]
    - ["Why?", "To sell helmets, and to inform about safety"]
    - ["When?", "March 2024"]
```

> riverbend-bikes.example · Safety tips · March 2024
>
> **Why every rider needs a helmet**
>
> A helmet should sit level on your head and fit snugly. Replace it after a crash. Our new Kestrel helmets are 20% off this month!
>
> *About us: The Riverbend Bike Shop has sold bikes in Riverbend since 1998.*

## Elaborate: a page with two purposes

```step
stage: make
tier: wider
insight: "A page with two purposes adds a context: deciding what to use from it and what to check."
check:
  type: reasoning
  q: "The bike shop's page gives helmet safety tips and sells helmets. Which parts would you use for a school safety poster, and which would you check somewhere else? Why?"
  models:
    - title: "A strong answer"
      text: "I would use the fit tips, because how a helmet should sit is general advice and I could check it against a road safety page. I would leave out the sale and the brand, because the shop wants to sell its own helmets."
    - title: "A different view that also works"
      text: "I would check every tip on a page that sells nothing, such as a council or health page, and only use the ones that agree. The shop might be right, but it has a reason to make helmets sound important."
  criteria: ["I said which parts I would use.", "I said which parts I would check, and where.", "My reason mentions who made it or why."]
  explain: "A page can inform and sell at once. Use what you can check, and know what the maker wants."
```

## Evaluate: three questions

```step
stage: info
check: { type: reflect, text: "Before I use a page, I can find who made it, why, and when." }
```

Think of a page you used for schoolwork. Could you say who made it, why and when? If not, how would you find out?
