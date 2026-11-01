---
order: 1
unit: skills
title: What entrepreneurs know and do
node: AC9HE7K03 n1
assumes: [AC9HE7K02]
summary: "Entrepreneurs bring knowledge and skills to a business: recognising opportunities, establishing a shared vision, and making decisions about how the business is run. A good idea is only the start; getting people to pull the same way and deciding how things run are skills too. Entrepreneurs run small local businesses as well as big companies."
language: maths
hook: "Maya noticed that the farm boxes delivered around Riverbend arrived wilted on hot days. Lots of people noticed. Why did Maya end up with a business and they didn't?"
---
An **entrepreneur** is someone who starts or runs a business, spotting a chance and acting on it. (People use the word in slightly different ways. Here we use the skills the Australian Curriculum names.)

Riverbend is a made-up town, and so are its businesses and people.

Entrepreneurs bring **knowledge** (what they know about their customers, products and town) and **skills**. Three skills matter most here:

- **Recognising an opportunity:** seeing a need that nobody is meeting well yet.
- **Establishing a shared vision:** getting the people involved (workers, suppliers, partners) to agree on what the business is aiming for.
- **Making decisions about how the business is run:** prices, places, times, tools, and what to change when something isn't working.

## Predict: more than an idea

```step
stage: predict
insight: "Committing first brings out the common idea that a good idea is all an entrepreneur needs."
check:
  type: predict
  q: "Maya has a good idea: boxes of vegetables that arrive fresh, even on hot days. What else does she need to turn it into a business?"
  options:
    - "People who agree to her plan, and lots of decisions about how it runs"
    - "Nothing much: a good enough idea will run itself"
    - "A big company to hire her and pay for everything"
    - "An invention that no one has ever made before"
  actual: "An idea is only the start. Maya needs growers and drivers who agree to her plan, and she has to decide prices, routes and what to pack the food in. Those are entrepreneurial skills too."
```

## Try: Maya's Farm Boxes

```step
stage: run
insight: "Matching each part of Maya's story to a skill shows that the idea is one skill among several."
check:
  type: match
  q: "Match each thing Maya did to the knowledge or skill it shows."
  pairs:
    - ["Recognising an opportunity", "She noticed farm boxes arrived wilted on hot days and no one was fixing it"]
    - ["Establishing a shared vision", "She got three growers and two drivers to agree: picked this morning, delivered by lunch"]
    - ["Making decisions about how it runs", "She chose the delivery routes, set the prices and switched to reusable cool crates"]
    - ["Knowledge", "She knew which vegetables wilt fastest and how cold they need to stay"]
```

Only one of the four is the idea. The rest is what made the idea work.

## Worked example: Nib and the idea

```step
stage: investigate
insight: "Nib counts only the idea as an entrepreneurial skill. The planted mistake is treating the vision and the decisions as chores."
tasks:
  - check:
      type: question
      q: "Maya spent a week talking with growers until they all agreed on 'picked this morning, delivered by lunch'. Which skill was she using?"
      options:
        - "Establishing a shared vision, so everyone works towards the same aim"
        - "Designing a logo, so the boxes look good on the doorstep"
        - "Recognising an opportunity, because she spotted the wilting problem"
        - "Making a profit, because the growers will now sell her more"
      answer: 0
      feedback:
        - null
        - "A logo is how the business looks. A shared vision is what the people involved agree to aim for."
        - "She had already spotted the problem. Here she is getting other people to agree on the aim."
        - "Profit may come later. Right now she is getting people to agree on what they are trying to do."
      explain: "A shared vision is an aim the people involved agree on, so they pull the same way."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining what made Maya an entrepreneur. Click the first line where Nib's thinking goes wrong."
      answer: 5
      fault: logic
      misconception: idea-is-the-only-skill
      explain: "Line 5: getting the growers on board is establishing a shared vision, and choosing routes and prices is making decisions about how the business runs. Both are entrepreneurial skills, not chores. Line 6 follows from the same mistake."
    smaller:
      check:
        type: question
        q: "If Maya had the idea but no grower agreed to supply her, would the business run?"
        options: ["No, she needs people to agree to her plan", "Yes, a good enough idea runs itself", "Yes, if she does the deliveries herself", "Only if she sets up a website first"]
        answer: 0
        feedback:
          - null
          - "An idea alone delivers nothing. Someone has to grow the food and drive it."
          - "She'd still have nothing to deliver without growers."
          - "A website helps people order, but there's still nothing to sell without growers."
        explain: "Without growers there is nothing to deliver. Getting people behind the plan is a skill of its own."
  - check:
      type: question
      q: "Why does it matter that the vision and the decisions count as skills, not just the idea?"
      options:
        - "Many people have good ideas; the skills to make them work are what start a business"
        - "It doesn't matter, because only the person with the idea is the entrepreneur"
        - "Because the growers are the real entrepreneurs, not Maya"
        - "Because ideas are worth nothing in business at all"
      answer: 0
      feedback:
        - null
        - "Lots of people noticed the wilting boxes. Maya is the one who got people on board and made the decisions."
        - "The growers agreed to her plan. Maya is the one who recognised the opportunity and organised it."
        - "The idea matters. It is just not the only thing that does."
      explain: "Spotting the opportunity started it. The vision and the decisions are what turned it into a working business."
```

### Maya's Farm Boxes

```worked
\text{Knowledge} :: Maya knew which vegetables wilt fastest and how cold they need to stay.
\text{Recognising an opportunity} :: Boxes arrived wilted on hot days, and no one was fixing it.
\text{Shared vision} :: Growers and drivers agreed: picked this morning, delivered by lunch.
\text{Decisions about running it} :: Routes, prices, and reusable cool crates instead of cardboard.
\text{So} :: The idea started it; the vision and the decisions made it work.
```

Now: which skill was Maya using with the growers?

### Find Nib's mistake

### Why the skills matter

## Vary: sort the skills

```step
stage: modify
insight: "Sorting new Riverbend examples into the three skills checks that each skill can be spotted in a different business."
tasks:
  - check:
      type: sort
      q: "Sort each thing a Riverbend business owner did into the skill it shows."
      options: ["Recognising an opportunity", "Establishing a shared vision", "Making decisions about how it runs"]
      items:
        - ["Rosa sees that new families in town have nowhere nearby to buy a cheap second car", "Recognising an opportunity", "She spots a need that no one is meeting well."]
        - ["The bakery owner tells her four staff that every loaf will be out of the oven by 7 am, and they plan the mornings together", "Establishing a shared vision", "The staff agree on an aim and work towards it together."]
        - ["The pantry moves its opening hours to after school when most families shop", "Making decisions about how it runs", "Choosing the hours is a decision about how the business runs."]
        - ["A dog walker notices that people in the new flats work long days and have no one to walk their dogs", "Recognising an opportunity", "She sees a need in her town before anyone else serves it."]
        - ["A cafe owner decides to stop selling lunch and open earlier for breakfast instead", "Making decisions about how it runs", "Changing what to sell and when is a running decision."]
  - check:
      type: question
      q: "Which of these people is most clearly using entrepreneurial skills?"
      options:
        - "Priya starts a weekend bike-repair stall after noticing her street has no bike shop"
        - "A shop assistant who follows the same opening checklist every day, exactly as written"
        - "Someone who buys shares in a big company and waits for the price to rise"
        - "A customer who buys the same coffee at the same cafe every morning"
      answer: 0
      feedback:
        - null
        - "Following a checklist well is useful, but nothing new is spotted, planned or decided."
        - "Owning shares is investing. It doesn't involve starting or running anything."
        - "Buying is what customers do. The cafe owner is the one using entrepreneurial skills."
      explain: "Priya recognised a need and acted on it, which is what entrepreneurs do."
```

### Three skills, five examples

### Who is acting like an entrepreneur?

## Practise: spot the opportunity

```step
stage: practise
insight: "A second look at recognising an opportunity separates spotting an unmet need from copying what is already there."
tasks:
  - check:
      type: question
      q: "Which of these is recognising an opportunity?"
      options:
        - "Noticing that the town's only swimming pool has no lessons for adults, and starting them"
        - "Opening a third pizza shop on a street that already has two, with the same menu"
        - "Choosing a bright colour for the shop's sign"
        - "Asking the bank for a loan before deciding what to sell"
      answer: 0
      feedback:
        - null
        - "It doesn't fill a gap no one is meeting: two shops already sell the same menu there."
        - "A sign is a small running decision. It doesn't spot a need."
        - "A loan might help later, but no need has been spotted yet."
      explain: "An opportunity is a need that no one is meeting well yet. Adult swimming lessons fill a gap."
  - check:
      type: question
      q: "Sam says: 'Only people who start giant tech companies are entrepreneurs.' What is the best reply?"
      options:
        - "Small local business owners and community groups that start something use the same skills"
        - "Sam is right, because only big companies need a shared vision"
        - "Only people who invent something new can be entrepreneurs"
        - "Entrepreneurs have to have employees, so sole traders don't count"
      answer: 0
      feedback:
        - null
        - "Maya's Farm Boxes needed a shared vision with just five people."
        - "Maya didn't invent anything. She spotted a need and organised a fix."
        - "A sole trader who spots an opportunity and runs a business is using the same skills."
      explain: "Entrepreneurs run businesses of every size, from a market stall to a national company."
```

### Spot the gap

### Sam's rule about tech companies

## Make: a business your class has looked at

```step
stage: make
insight: "Finding the skills in a real business the class has looked at turns the terms into your own."
check:
  type: reflect
  text: "In my own book I chose a real local business or entrepreneur our class has looked at, named two of the skills (recognising an opportunity, establishing a shared vision, making decisions about how it runs) and gave an example of each from their story. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use what your class found out, or the business's own words about how it started. Your partner or teacher reads it.

## Typical: inside a big company

```step
stage: make
tier: typical
insight: "Someone inside a large company can use the same skills as a local founder, which shows the skills don't depend on size."
check:
  type: question
  q: "Lena works for a large supermarket company. She notices customers keep asking for refills of cleaning products. She gets her store team on board, plans a trial refill station and decides which products to stock. Is she using entrepreneurial skills?"
  options:
    - "Yes: she recognised an opportunity, got the team behind it and made running decisions"
    - "No: only someone who owns the business can use entrepreneurial skills"
    - "No: it's a big company, so a manager must have told her what to do"
    - "Only the first one, because the rest is just her ordinary job"
  answer: 0
  feedback:
    - null
    - "Owning the business isn't what the skills are about. Lena is using all three."
    - "The story says she noticed it and planned it herself."
    - "Getting the team on board and deciding the stock are skills too, not just ordinary work."
  explain: "The same three skills show up whether you start a market stall or try something new inside a big company."
```

## Wider: an opportunity online

```step
stage: make
tier: wider
insight: "Recognising an opportunity online is the same skill in a different place; the decisions about running it change."
check:
  type: question
  q: "Ari, in Riverbend, sells plant cuttings at the Saturday market. He notices people from other towns asking if he can post them. He starts selling online. Which running decision is new because he is online?"
  options:
    - "How to pack cuttings so they survive the post"
    - "Whether people want plant cuttings at all"
    - "What price to charge for each cutting"
    - "What day the market is on"
  answer: 0
  feedback:
    - null
    - "He already knows people want them. That's why he spotted the opportunity."
    - "He already sets prices at the market. Packing for the post is the decision that is new."
    - "The market day doesn't change when he sells online."
  explain: "The opportunity came from noticing buyers further away. Selling online brings new running decisions, such as packing and posting."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
