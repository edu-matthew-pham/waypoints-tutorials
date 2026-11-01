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

Businesses reach people through different channels: **local markets**, **small independent stores**, **shopping centres**, **online stores**, and **remote community stores**. The structure behind the business shapes how much money it can raise, who makes decisions, and which channel fits best. (All business names in this lesson, including Brightbasket Supermarkets and Riverbend Cafe, are made up.)

## Predict: why not one structure for everyone?

```step
stage: predict
insight: "Committing first tests whether students think one structure (such as a big corporation) fits every kind of provision."
check:
  type: predict
  q: "Why don't all businesses set up as large corporations?"
  options:
    - "Different structures suit different purposes, sizes and ways of reaching customers"
    - "A corporation needs thousands of shareholders, which a small business can't find"
    - "Only businesses that sell goods can be corporations, not service businesses"
    - "Most businesses would like to be corporations but are not allowed to be one"
  actual: "Different structures fit different jobs. (A company can have just one shareholder, and it can sell goods or services, so size and type of product are not what stops anyone.) A solo bike repairer needs fast, personal decisions (sole proprietor), twenty orchards sharing a coolroom need equal member votes (cooperative), and a national grocery chain needs huge capital from shareholders (corporation)."
```

## Try: the links in the chain

One way to explain a business is a chain of five links: **why it exists** (purpose), **how ownership is set up** (structure), **how staff and tools are organised**, **what goods or services it provides**, and **how they reach customers**.

```step
stage: run
insight: "Each link in the chain is a different question about the same business; purpose and structure shape the rest."
check:
  type: match
  q: "Riverbend Pantry (made up) sells low-cost groceries. Match each link in the chain to what it says about the pantry."
  pairs:
    - ["Purpose", "To keep fresh food affordable for local families"]
    - ["Structure", "A not-for-profit, so any surplus goes back into lower prices"]
    - ["Staff and tools", "Two paid workers, a coolroom and a donated delivery van"]
    - ["Goods or services", "Fruit, bread, milk and other groceries"]
    - ["How they reach customers", "A small shopfront on the main street, open six days a week"]
  explain: "Each link answers a different question. The pantry's purpose helps explain why a not-for-profit structure fits, and that shapes the rest."
```

This chain is one way to explain a business, starting from its purpose. Real businesses don't always go in this order: some pick a channel first (an online shop, say) and then choose a structure to suit it. What matters is the links: change the purpose and a different structure and channel can make sense.

## Worked example: two ways to provide food

```step
stage: investigate
insight: "Comparing two structures side by side shows how ownership and purpose change what is provided and how it reaches consumers. Nib's 'one best structure' mistake is planted."
tasks:
  - check:
      type: question
      q: "How does Brightbasket Supermarkets' structure (a corporation owned by thousands of shareholders) help it run supermarkets in shopping centres across every state?"
      options:
        - "Shareholder investment lets it fund warehouses, trucks and large stores across the country"
        - "Having one solo owner lets it make fast decisions without consulting anyone"
        - "Being a not-for-profit means all its surplus must go into free community parcels"
        - "Being a growers' cooperative means only member farmers are allowed to shop there"
      answer: 0
      feedback:
        - null
        - "A corporation is owned by many shareholders, not one solo owner."
        - "Brightbasket Supermarkets is a for-profit corporation that can pay dividends to shareholders, not a not-for-profit."
        - "It is a shareholder-owned corporation selling to the public, not a farmers' cooperative."
      explain: "A corporation can raise large amounts of capital from shareholders, which funds the warehouses and store network needed for national distribution."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is advising a solo piano teacher and a town food pantry on their business structure. Click the first line where Nib's thinking goes wrong."
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
        feedback:
          - null
          - "Many service businesses are run by one person. Shareholders are for companies that need to raise lots of money."
          - "A cooperative needs many members. Lin works alone, so she doesn't need one."
          - "Lin isn't part of a chain. She can run her own lessons without a franchise."
        explain: "A small, personal service needs low setup costs and direct control, which suits a sole proprietorship."
  - check:
      type: question
      q: "Why does a cooperative structure suit twenty small orchards that want to supply fresh fruit to city grocers?"
      options:
        - "Pooling their fruit in a shared shed lets small growers fill orders none could fill alone"
        - "Each orchard gets a vote, so the shed is sure to make more profit than a company"
        - "A cooperative has no costs, because the members do all the work for free"
        - "Joining means each grower hands their own orchard over to the cooperative"
      answer: 0
      feedback:
        - null
        - "Votes decide how the shed is run, but they don't guarantee a profit. The point is what the members can do together."
        - "The shed still has costs (power for the coolroom, trucks, wages). The members share those costs."
        - "Each grower keeps their own farm. What they co-own is the shared shed."
      explain: "The cooperative structure lets small independent producers share expensive equipment and reach customers they could not reach alone."
```

### Structure shapes provision

```worked
\text{Solo Bike Mechanic} :: Purpose: earn a living fixing local bikes -> Structure: Sole proprietorship -> Provision: personal repair service from an independent workshop.
\text{Valley Growers} :: Purpose: help 20 small farms reach buyers -> Structure: Cooperative -> Provision: shared coolroom and weekly market & grocer deliveries.
\text{Brightbasket Supermarkets} :: Purpose: national grocery sales and shareholder profit -> Structure: Corporation -> Provision: hundreds of supermarkets in shopping centres and online.
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
  text: "In my own book I compared two different types of businesses, using the terms sole proprietor, partnership, cooperative, corporation, franchise or not-for-profit, and explained how each structure shapes the goods or services it provides and how they reach consumers. A partner read it and gave feedback."
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
    - "They can sell to musicians across the country from one workshop, without renting a city shop"
    - "They must register as a company before they can sell to customers in other states"
    - "Online selling suits digital goods, so pedals would still need a shop in each city"
    - "They can sell online, but a sole trader may only post goods within their own state"
  answer: 0
  feedback:
    - null
    - "Sole traders, partnerships and cooperatives can all sell interstate through an online store."
    - "Physical goods are ordered online and sent by post or courier. No city shop is needed."
    - "There is no rule like that. A sole trader can post goods anywhere in Australia."
  explain: "Digital channels let a small structure reach a wide market that once required a chain of physical shops."
```

## Wider: a social enterprise cafe

```step
stage: make
tier: wider
insight: "A social enterprise trades commercially — selling goods or services — in order to fund and achieve a community mission."
check:
  type: question
  q: "Riverbend Cafe (a made-up business) sells coffee and toasties to office workers at normal cafe prices. It is set up as a not-for-profit social enterprise: every trainee barista is a young person learning job skills, and all surplus pays for their training. How do its purpose and structure work together?"
  options:
    - "Its sales pay for the training, and the not-for-profit structure keeps the surplus in that mission"
    - "Because it charges normal cafe prices, it is really a for-profit business, not a not-for-profit"
    - "Because it has a community mission, it should rely on donations instead of selling coffee"
    - "Because it makes a surplus, it must be breaking the rules for a not-for-profit"
  answer: 0
  feedback:
    - null
    - "Prices don't decide it. What decides it is where the surplus goes: here, into training, not to owners."
    - "A social enterprise earns its money by selling things. Selling coffee is how it pays for the training."
    - "A not-for-profit can make a surplus. The rule is that the surplus goes back into its purpose."
  explain: "A social enterprise combines commercial provision of goods and services with a structure that locks surplus into its community goal."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
