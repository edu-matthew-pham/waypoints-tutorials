---
order: 2
unit: structures
title: Ways a business can be set up
node: AC9HE7K02 n2
summary: "Businesses can be set up in different ways depending on who owns them, who decides, and where any surplus goes. The main types in Year 7 are a sole proprietorship (sole trader), a partnership, a cooperative, a corporation, a franchise and a not-for-profit organisation. Each structure suits a different purpose."
language: maths
hook: "In Mia's town, one baker owns the corner bakery alone, two vets own the animal clinic together, and twenty apple growers own the packing shed together. Why didn't they all set up the same way?"
---
Last lesson showed that businesses exist for different reasons. They also have different **business structures**: the legal and practical way a business is owned and run.

Six structures come up across Australia:

- **Sole proprietorship (sole trader):** owned and run by one person, who makes the decisions and keeps any profit (and carries the losses).
- **Partnership:** owned by two or more people who share the skills, decisions, profits and responsibilities.
- **Cooperative:** owned and run by its members (such as growers, workers or local shoppers) to meet their shared needs; members each get a say.
- **Corporation (company):** a separate legal body owned by **shareholders**, often used by larger businesses such as a national supermarket chain.
- **Franchise:** an independent business owner (**franchisee**) pays to use an established brand's name, products and system (**franchisor**).
- **Not-for-profit organisation:** exists for a community, charitable or social purpose; any surplus left after costs goes back into that purpose, not to private owners.

## Predict: what decides the type?

```step
stage: predict
insight: "Committing first checks whether students confuse a business's ownership structure with how many workers are on shift."
check:
  type: predict
  q: "Mia's aunt owns the Corner Bakery by herself and employs four bakers. What makes her business a sole proprietorship?"
  options:
    - "It has one owner who controls the business, even though she employs staff"
    - "A sole proprietorship is not allowed to employ anyone else"
    - "Any shop that sells bread is automatically a sole proprietorship"
    - "It is a corporation because five people work in the building"
  actual: "One person owns it. A sole proprietor can employ staff; the structure is about who owns and controls the business, not how many people work there."
```

## Try: match the structure to its feature

```step
stage: run
insight: "Matching each business type to its defining feature gives students a clear test for all six structures."
check:
  type: match
  q: "Match each business structure to the feature that sets it apart."
  pairs:
    - ["Sole proprietorship", "Owned and controlled by one person"]
    - ["Partnership", "Two or more people share ownership, skills and decisions"]
    - ["Cooperative", "Owned by its members for their shared benefit, with each member having a vote"]
    - ["Corporation", "Owned by shareholders as a separate legal company, often operating at a large scale"]
    - ["Franchise", "A local owner pays to run a branch using a larger brand's name, recipes and system"]
    - ["Not-for-profit", "Any surplus after paying wages and costs is put back into its community purpose"]
```

Notice the three questions that separate them: **Who owns it? Who decides? What happens to any money left over?**

## Worked example: matching town businesses

```step
stage: investigate
insight: "Applying the ownership test to concrete local businesses prevents students from guessing structure from shop size. Nib's size mistake is planted."
tasks:
  - check:
      type: question
      q: "Two qualified vets, Priya and Tom, pool their savings to open a clinic together and share all decisions and profits. What type of business is their clinic?"
      options:
        - "A partnership"
        - "A sole proprietorship"
        - "A not-for-profit organisation"
        - "A franchise"
      answer: 0
      feedback:
        - null
        - "A sole proprietorship has only one owner; here two people share ownership."
        - "Priya and Tom share the profits as owners, so it is a for-profit partnership."
        - "They created their own independent clinic rather than buying the rights to a chain's brand."
      explain: "Two or more people sharing ownership, decisions and profits is a partnership."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is classifying two businesses in Mia's town. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: size-is-structure
      explain: "Line 3: Nib judges the structure by counting workers in the room instead of asking who owns the business. The car yard has one owner (sole proprietor) who employs staff; the growers' shed is owned by twenty member farms (a cooperative)."
    smaller:
      check:
        type: question
        q: "Rosa owns a car yard by herself and pays six salespeople. How many owners does the car yard have?"
        options:
          - "One owner (Rosa), so it is a sole proprietorship"
          - "Seven owners, because seven people work there"
          - "Zero owners"
          - "Twenty owners"
        answer: 0
        explain: "Employees are paid wages for their work, but Rosa is the single owner."
  - check:
      type: question
      q: "Twenty dairy farmers in a valley each put in money to own a milk-chilling shed together so every member farm can store its milk and each member gets one vote. Which structure is this?"
      options:
        - "A cooperative"
        - "A sole proprietorship"
        - "A franchise"
        - "A government department"
      answer: 0
      feedback:
        - null
        - "Twenty farmers own it together, not one person."
        - "They are not paying a brand owner to copy a chain store; they formed a member-owned shed."
        - "It is owned by the member farmers, not the government."
      explain: "A business owned and run by its members to serve their shared need, with one vote per member, is a cooperative."
```

### How ownership works in town

```worked
\text{Rosa's Car Yard} :: One owner (Rosa) who employs six staff -> Sole proprietorship.
\text{Priya & Tom Vets} :: Two owners sharing skills, costs and profits -> Partnership.
\text{Valley Growers' Shed} :: Owned by 20 member farms for shared packing -> Cooperative.
\text{FreshMart Supermarkets} :: Owned by thousands of shareholders across Australia -> Corporation.
```

Now: how do you tell a partnership from a sole proprietorship or a cooperative?

### Find Nib's mistake

### The valley farmers' shed

## Vary: which structure fits?

```step
stage: modify
insight: "Testing all six structures against new local cases shows how each structure works in practice."
tasks:
  - check:
      type: sort
      q: "Sort each local example into its business structure."
      options: ["Sole proprietorship", "Partnership", "Corporation", "Not-for-profit"]
      items:
        - ["Leo runs a mobile dog-wash van that he owns by himself", "Sole proprietorship", "One person owns and controls the business."]
        - ["Three solicitors co-own a town law firm and split the profits", "Partnership", "Three partners share ownership and decisions."]
        - ["A national grocery company with shares traded on the stock exchange", "Corporation", "It is a company owned by shareholders."]
        - ["Riverbend Pantry sells low-cost groceries and puts all surplus back into food parcels", "Not-for-profit", "Surplus goes back into its community mission rather than to owners."]
  - check:
      type: question
      q: "Amir wants to open a burger shop. Instead of inventing his own menu and logo, he pays a fee to 'Burger Barn' to use its well-known name, recipes and supplier network in his town. What has Amir opened?"
      options:
        - "A franchise"
        - "A cooperative"
        - "A not-for-profit organisation"
        - "A government service"
      answer: 0
      feedback:
        - null
        - "A cooperative is owned jointly by members with equal votes, not licensed from a brand."
        - "Amir and Burger Barn both operate to make a profit."
        - "It is a private business using a licensed brand."
      explain: "Paying a franchisor to operate a branch under an established brand and system is a franchise."
```

### Sort the four businesses

### Amir's burger shop

## Practise: compare two structures

```step
stage: practise
insight: "Comparing two structures side by side highlights what each one gains and gives up."
tasks:
  - check:
      type: question
      q: "Why might a plumber choose to join a partnership with an electrician rather than stay a sole proprietor?"
      options:
        - "They can combine two sets of skills, share the cost of tools, and cover for each other"
        - "Because a sole proprietor is never allowed to charge customers"
        - "Because partners never have to agree on any decisions"
        - "Because a partnership automatically becomes a charity"
      answer: 0
      feedback:
        - null
        - "Sole proprietors charge customers and can earn a profit."
        - "Partners do have to consult and agree — that is one of the trade-offs of a partnership."
        - "Partnerships usually operate for profit."
      explain: "A partnership brings extra skills and shared costs, in exchange for sharing decisions and profits."
  - check:
      type: question
      q: "What is the key difference between a corporation and a not-for-profit organisation when money is left over after paying all bills and wages?"
      options:
        - "A corporation can pay profits to shareholders, while a not-for-profit must reinvest its surplus into its community purpose"
        - "A corporation must give all its money away, while a not-for-profit pays shareholders"
        - "Neither is allowed to employ paid staff"
        - "Only a corporation can sell goods"
      answer: 0
      feedback:
        - null
        - "That has the two the wrong way round."
        - "Both corporations and not-for-profits can employ paid staff."
        - "Both can sell goods and services."
      explain: "The difference is what happens to the surplus: shareholder return versus community mission."
```

### Why form a partnership?

### Where the surplus goes

## Make: three business types in your book

```step
stage: make
insight: "Writing your own table of three structures, their distinguishing features and an example of each locks in the categories."
check:
  type: reflect
  text: "In my own book I drew a three-column table for at least three business structures, wrote the key feature that sets each one apart, and gave a realistic example for each. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: inside a franchise

```step
stage: make
tier: typical
insight: "A franchise gives a local owner a head start with a known brand, but limits what they can change."
check:
  type: sort
  q: "In Amir's Burger Barn franchise, sort each item into an advantage for Amir (the franchisee) or a limit he must accept."
  options: ["Advantage for franchisee", "Limit on franchisee"]
  items:
    - ["Customers already know and trust the Burger Barn name on opening day", "Advantage for franchisee", "Known branding brings customers in faster."]
    - ["Training and recipes are supplied by the head office", "Advantage for franchisee", "He does not have to invent the system from scratch."]
    - ["Amir cannot change the menu to sell pizza without head-office approval", "Limit on franchisee", "The franchisor controls the menu so every branch matches."]
    - ["Amir must pay an ongoing share of his sales to the franchisor", "Limit on franchisee", "Franchise fees reduce the share of revenue he keeps."]
```

## Wider: cooperative vs corporation

```step
stage: make
tier: wider
insight: "Comparing a member-owned cooperative with a shareholder-owned corporation shows how ownership changes decision-making."
check:
  type: reasoning
  q: "Compare the Valley Growers' Cooperative (owned by 20 local farms) with FreshMart Corporation (owned by distant shareholders). Explain how who owns each business changes how decisions are made and who benefits."
  paper: true
  models:
    - title: "A strong answer"
      text: "In the cooperative, the 20 member farms both use the shed and own it, with one vote each, so they choose fees and opening hours that help local growers stay afloat. In the corporation, shareholders invest to earn a financial return and votes depend on how many shares you hold, so managers focus on company profit across all stores."
    - title: "A different answer that also works"
      text: "The cooperative exists to serve its members, so any surplus is used to lower packing costs for the 20 farms. FreshMart is owned by shareholders who may never visit the town, so its decisions aim to grow sales and pay dividends to shareholders."
  criteria:
    - "I named who owns the cooperative and who owns the corporation."
    - "I explained how votes or decisions work differently in the two structures."
    - "I connected ownership to who benefits from the surplus."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
