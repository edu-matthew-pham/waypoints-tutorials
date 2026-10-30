---
order: 3
unit: structures
title: Matching the structure to the job
node: AC9HE7K02 n3
summary: "A business's purpose and structure shape what goods or services it provides and how they reach people. A sole proprietor at a weekend market, a growers' cooperative, a national supermarket corporation and a community not-for-profit each provide goods and services differently because of how they are owned and funded."
language: maths
hook: "Fresh apples can reach Mia's family from a Saturday market stall, a national supermarket chain, an online box delivery, or a remote community store. Why don't all those businesses use the same structure?"
---
You have met the **reasons businesses exist** (lesson 1) and the **structures** they use (lesson 2). This lesson joins them together: how a business's purpose and structure shape **what** it provides and **how** those goods and services reach customers.

Businesses reach people through different channels: **local markets**, **small independent stores**, **shopping centres**, **online stores**, and **remote community stores**. The structure behind the business shapes how much money it can raise, who makes decisions, and which channel fits best. (All business names in this lesson, including Made-Up Grocers Corp and GreenBean Cafe, are made up.)

## Predict: why not one structure for everyone?

```step
stage: predict
insight: "Committing first tests whether students think one structure (such as a big corporation) fits every kind of provision."
check:
  type: predict
  q: "Why don't all businesses set up as large corporations?"
  options:
    - "Different structures suit different purposes, scales and ways of reaching customers"
    - "Only food businesses are allowed to be corporations"
    - "Sole proprietors always make more money than corporations"
    - "Corporations are not allowed to sell services"
  actual: "Different structures fit different jobs. A solo bike repairer needs fast, personal decisions (sole proprietor), twenty orchards sharing a coolroom need equal member votes (cooperative), and a national grocery chain needs huge capital from shareholders (corporation)."
```

## Try: order the chain

```step
stage: run
insight: "Putting the links in order shows how purpose leads to structure, and structure shapes how goods and services reach people."
check:
  type: parsons
  code: "chain.txt#order"
  text: "Put the chain in order, from why the business starts to how goods or services reach people."
```

Each step shapes the next. Change the purpose at the start and a different structure and channel make sense.

## Worked example: two ways to provide food

```step
stage: investigate
insight: "Comparing two structures side by side shows how ownership and purpose change what is provided and how it reaches consumers. Nib's 'one best structure' mistake is planted."
tasks:
  - check:
      type: question
      q: "How does Made-Up Grocers Corp's structure (a corporation owned by thousands of shareholders) help it run supermarkets in shopping centres across every state?"
      options:
        - "Shareholder investment lets it fund warehouses, trucks and large stores across the country"
        - "Having one solo owner lets it make fast decisions without consulting anyone"
        - "Being a not-for-profit means all its surplus must go into free community parcels"
        - "Being a growers' cooperative means only member farmers are allowed to shop there"
      answer: 0
      feedback:
        - null
        - "A corporation is owned by many shareholders, not one solo owner."
        - "Made-Up Grocers Corp is a for-profit corporation that can pay dividends to shareholders, not a not-for-profit."
        - "It is a shareholder-owned corporation selling to the public, not a farmers' cooperative."
      explain: "A corporation can raise large amounts of capital from shareholders, which funds the warehouses and store network needed for national distribution."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is advising a solo piano teacher and a town food pantry on their business structure. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: one-best-structure
      explain: "Line 3: Nib thinks a corporation is always the best structure for every business. A solo piano teacher needs simple, personal control (sole proprietorship), and a community food pantry exists to reinvest surplus into affordable food rather than pay shareholders (not-for-profit)."
    smaller:
      check:
        type: question
        q: "Lin teaches piano from her living room on Tuesdays and Thursdays. Does she need thousands of shareholders to provide her lessons?"
        options:
          - "No, a sole proprietorship fits because she owns her piano and runs the lessons herself"
          - "Yes, every service business must set up as a corporation with shareholders"
          - "She should form a twenty-member cooperative to teach two afternoons a week"
          - "She must pay a franchise fee to a national chain before she can teach"
        answer: 0
        explain: "A small, personal service needs low setup costs and direct control, which suits a sole proprietorship."
  - check:
      type: question
      q: "Why does a cooperative structure suit twenty small orchards that want to supply fresh fruit to city grocers?"
      options:
        - "Pooling their harvest in a member-owned packing shed lets small growers fill big orders they could not supply alone"
        - "It hands ownership of all twenty orchards to a single sole proprietor"
        - "It lets outside shareholders outvote the farmers on how the shed is run"
        - "It requires the orchards to stop selling fruit at local markets"
      answer: 0
      feedback:
        - null
        - "Each grower keeps their own farm and co-owns the shared shed as a member."
        - "In a cooperative, the member farmers own the shed and each member gets a vote."
        - "Sharing a shed and trucks helps them reach wider markets alongside local ones."
      explain: "The cooperative structure lets small independent producers share expensive equipment and reach customers they could not reach alone."
```

### Structure shapes provision

```worked
\text{Solo Bike Mechanic} :: Purpose: earn a living fixing local bikes -> Structure: Sole proprietorship -> Provision: personal repair service from an independent workshop.
\text{Valley Growers} :: Purpose: help 20 small farms reach buyers -> Structure: Cooperative -> Provision: shared coolroom and weekly market & grocer deliveries.
\text{Made-Up Grocers Corp} :: Purpose: national grocery sales and shareholder profit -> Structure: Corporation -> Provision: hundreds of supermarkets in shopping centres and online.
```

Now: why do different business structures provide goods and services in different ways?

### Find Nib's mistake

### Why the growers teamed up

## Vary: channels and structures

```step
stage: modify
insight: "Matching business structures to how they reach consumers connects ownership to everyday shopping."
tasks:
  - check:
      type: match
      q: "Match each business to how its structure shapes the way it provides goods or services."
      pairs:
        - ["Sole proprietor jeweller at a weekend market", "One maker designs, makes and sells rings directly to customers at a low-cost stall"]
        - ["Suburban dental partnership", "Three dentists share expensive X-ray rooms and take turns covering evening appointments"]
        - ["National electronics franchise in a shopping centre", "A local owner runs the store while the national brand supplies stock, advertising and online click-and-collect"]
        - ["Remote community store run as a community not-for-profit", "Surplus from grocery sales is used to subsidise freight on fresh fruit and vegetables"]
  - check:
      type: sort
      q: "Which economic term belongs to each part of the explanation?"
      options: ["Business structure", "Good or service", "Way of reaching customers"]
      items:
        - ["Partnership, cooperative, corporation or sole proprietor", "Business structure", "These name how the business is owned and set up."]
        - ["Fresh bread (good) or a haircut (service)", "Good or service", "These name what is provided to the customer."]
        - ["Local market, shopping centre, online store or independent shop", "Way of reaching customers", "These are the channels through which goods and services reach people."]
```

### Structure to customer

### Using the right terms

## Practise: explain two businesses

```step
stage: practise
insight: "Writing a complete explanation that links structure, purpose and provision is the endpoint of this standard."
check:
  type: reasoning
  q: "Choose two different business types (for example, a sole proprietor and a corporation, or a cooperative and a not-for-profit). Explain how each one provides goods or services differently, connecting its structure and purpose to how its goods or services reach customers."
  paper: true
  models:
    - title: "Sole proprietor vs corporation"
      text: "A sole proprietor bike repairer owns the workshop alone to earn a living and provide a local service, so customers bring their bikes straight to the independent shop for personal repairs. A supermarket corporation is owned by shareholders to make a profit at scale, so it uses shared capital to buy goods in bulk and sell them through shopping centres and online delivery."
    - title: "Cooperative vs not-for-profit"
      text: "A growers' cooperative is owned by member farms so they can share a packing shed and supply fresh fruit (goods) to local markets and grocers together. A community pantry is a not-for-profit that exists to meet a community need, so it reinvests any surplus to keep groceries affordable at its local store."
  criteria:
    - "I named two different business structures accurately."
    - "I said whether each provides goods, services, or both."
    - "I explained how each structure and purpose shapes how those goods or services reach people."
```

## Make: your own comparison

```step
stage: make
insight: "Connecting purpose, structure and provision for two businesses in your own words brings the whole course together."
check:
  type: reflect
  text: "In my own book I compared two different types of businesses, using the terms sole proprietor, partnership, cooperative, corporation, franchise or not-for-profit, and explained how each structure shapes the goods or services it provides and how they reach consumers. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: when businesses go online

```step
stage: make
tier: typical
insight: "Online distribution lets both small independent businesses and large corporations reach customers without a shopfront in every town."
check:
  type: question
  q: "How has selling online changed the way a sole proprietor making specialist guitar pedals in a country town can provide goods?"
  options:
    - "They can sell goods to musicians across the country from one workshop, without paying rent in city shopping centres"
    - "They must become a corporation before they are allowed to sell to customers in other states"
    - "Online selling only works for digital services, never for physical goods that need posting"
    - "They must open a franchise branch in every capital city before launching a website"
  answer: 0
  feedback:
    - null
    - "Sole proprietors, partnerships and cooperatives can all sell interstate through an online store."
    - "Physical goods are ordered online and delivered by post or courier."
    - "An online store lets a single workshop take orders nationwide without opening city branches."
  explain: "Digital channels let a small structure reach a wide market that once required a chain of physical shops."
```

## Wider: a social enterprise cafe

```step
stage: make
tier: wider
insight: "A social enterprise trades commercially — selling goods or services — in order to fund and achieve a community mission."
check:
  type: question
  q: "GreenBean Cafe sells coffee and toasties to office workers at normal cafe prices. It is set up as a not-for-profit social enterprise: every trainee barista is a young person learning job skills, and all surplus pays for their training. How do its purpose and structure work together?"
  options:
    - "Selling goods and services commercially funds the training mission, and the not-for-profit structure keeps every dollar of surplus inside that mission"
    - "Because it sells coffee at normal commercial prices, it must pay dividends to private shareholders"
    - "Because it has a community mission, it can only rely on donations and cannot sell goods or services"
    - "Because trainees work there, it counts as a partnership owned equally by every customer"
  answer: 0
  feedback:
    - null
    - "A not-for-profit has no private shareholders taking dividends; surplus stays in the mission."
    - "A social enterprise earns its income by selling goods (coffee, toasties) and hospitality service."
    - "Customers buy coffee; the organisation is a not-for-profit, not a customer partnership."
  explain: "A social enterprise combines commercial provision of goods and services with a structure that locks surplus into its community goal."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
