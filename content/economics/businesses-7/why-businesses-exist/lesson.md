---
order: 1
unit: purpose
title: Goods, services and why businesses exist
node: AC9HE7K02 n1
summary: "Businesses exist to provide goods and services, make a profit, create jobs and meet community needs. A good is a physical thing you can touch and take home; a service is work someone does for you. Many businesses exist to make a profit, but others exist to serve a community or share work among members."
language: maths
hook: "In Mia's town, a bakery sells bread, a bike workshop fixes punctures, and a community pantry sells low-cost groceries with no owner taking a profit. Are all three businesses, and why do they exist?"
---
A **business** is an organisation that provides goods or services to people.

A **good** is a physical item you can touch and take away, such as a loaf of bread or a bicycle tyre. A **service** is work someone does for you, such as fixing a flat tyre, cutting hair or teaching a music lesson. Many businesses provide both at once.

People often think businesses exist only to make a **profit** (money left over after all costs are paid). Profit is one common reason, but businesses also exist to **provide goods and services** people need, to **create employment** (jobs), and to **meet a community need**.

## Predict: why do they exist?

```step
stage: predict
insight: "Committing first surfaces the common belief that a business only counts if someone is trying to make a profit."
check:
  type: predict
  q: "Which of these is true about why businesses exist?"
  options:
    - "They can exist for several reasons, including profit, jobs and meeting community needs"
    - "Every business exists only to make a profit for its owner"
    - "Only shops that sell physical goods count as businesses"
    - "If an organisation employs paid workers, it cannot help the community"
  actual: "Businesses exist for several reasons: providing goods and services, making a profit, creating employment, and meeting community needs. Some do not aim to make a profit for an owner at all."
```

## Try: goods, services or both?

```step
stage: run
insight: "Sorting everyday examples separates physical goods from actions done for a customer."
check:
  type: sort
  q: "What is each business mainly providing: a good, a service, or both?"
  options: ["Good", "Service", "Both"]
  items:
    - ["A bakery selling loaves of bread", "Good", "A loaf of bread is a physical item you take home."]
    - ["A dog-walking business that takes pets to the park", "Service", "Walking the dog is work done for the owner, with no item sold."]
    - ["A bike workshop that fits a new tyre and tunes the brakes", "Both", "The tyre is a good, and fitting it and tuning the brakes is a service."]
    - ["A shoe shop selling school shoes", "Good", "The shoes are physical goods."]
    - ["A swimming instructor teaching a Saturday class", "Service", "Teaching is a service performed for students."]
    - ["A cafe making hot lunches and serving them at tables", "Both", "The meal is a good, and preparing and serving it at your table is a service."]
```

Notice how often a business provides both. When you visit the bike workshop, you pay for the rubber tube (a good) and the mechanic's skill and time (a service).

## Worked example: more than profit

```step
stage: investigate
insight: "Looking at three made-up businesses in Mia's town shows that profit is one reason a business exists, not the only one. Nib's profit-only rule is planted as the mistake."
tasks:
  - check:
      type: question
      q: "In Mia's town, Riverbend Pantry sells fresh food at low prices, pays two shop workers, and puts any spare money back into keeping prices down. Which two reasons explain why it exists?"
      options:
        - "To provide goods to the community and create employment"
        - "To make a large profit for a private owner"
        - "To stop people from working"
        - "To avoid providing goods or services"
      answer: 0
      feedback:
        - null
        - "No private owner takes a profit here: any spare money goes back into keeping food affordable."
        - "It pays two workers, so it creates employment."
        - "It provides groceries (goods) and shop service."
      explain: "Riverbend Pantry provides goods a community needs and employs staff, even though it does not run for an owner's profit."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining the businesses in Mia's town. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: profit-only-purpose
      explain: "Line 3: Nib says a business only exists to make a profit for its owner. Businesses also exist to provide goods and services, create jobs and meet community needs. Not-for-profits and cooperatives are still businesses when they provide goods or services."
    smaller:
      check:
        type: question
        q: "Riverbend Pantry sells groceries and pays two staff, but no owner takes a profit. Does it still provide goods and jobs?"
        options:
          - "Yes, it provides goods and jobs to the town"
          - "No, because nobody gets a profit"
          - "It only provides a service, not goods"
          - "It is a hobby, not an organisation"
        answer: 0
        explain: "Providing goods and jobs are reasons a business exists, even without an owner taking a profit."
  - check:
      type: question
      q: "Why does it matter for the rest of this course that businesses can exist for reasons beyond profit?"
      options:
        - "Because some business types, such as cooperatives and not-for-profits, are set up around those other reasons"
        - "Because no business in Australia is allowed to make a profit"
        - "Because goods can only be sold by charities"
        - "Because services never cost money"
      answer: 0
      feedback:
        - null
        - "Many businesses do aim to make a profit. The point is that profit is not the only reason."
        - "Any kind of business can sell goods."
        - "Services usually cost money to run and to buy."
      explain: "Once you see that purpose varies, the different business structures in the next lesson make sense."
```

### Three businesses in Mia's town

```worked
\text{Corner Bakery} :: Sells bread and pies (goods). Exists to provide food, earn a profit for the baker, and employ three staff.
\text{Pedal Fix Workshop} :: Repairs bikes (service) and sells parts (goods). Exists to keep riders moving and earn the mechanics a living.
\text{Riverbend Pantry} :: Sells low-cost groceries (goods). Exists to meet a community need and employ local workers, not for owner profit.
\text{So} :: Profit is one reason businesses exist, alongside providing goods and services, creating jobs, and serving a community.
```

Now: why does Riverbend Pantry exist?

### Find Nib's mistake

### Why the reason matters

## Vary: match the reason

```step
stage: modify
insight: "A single business often has more than one reason for existing, and the main reason shapes what it does."
tasks:
  - check:
      type: match
      q: "Match each reason a business exists to the example that shows it best."
      pairs:
        - ["Provide goods and services", "A hardware store stocks timber, screws and paint so residents can repair their homes"]
        - ["Make a profit", "An owner invests savings into a cafe hoping to earn more than the costs of running it"]
        - ["Provide employment", "A town bakery trains and pays four apprentices from the local high school"]
        - ["Meet a community need", "A community-owned bus service runs a Tuesday route so older residents can reach the clinic"]
  - check:
      type: question
      q: "Dev opens a mobile phone repair stall. He wants to earn a living, give his cousin a Saturday job, and stop broken phones going to landfill. How many reasons for existing does Dev's business have?"
      options:
        - "Several: earning a profit, providing a repair service, creating a job, and helping the community"
        - "Only one: making a profit"
        - "None, because repairing is not making a new good"
        - "Only one: helping the environment"
      answer: 0
      feedback:
        - null
        - "Earning a living is one reason, but the job and reducing waste are real reasons too."
        - "Repairing is a service, and service businesses are real businesses."
        - "Reducing waste is one of his reasons, alongside earning a living and employing his cousin."
      explain: "Most real businesses combine several reasons at once."
```

### Match each reason

### Dev's repair stall

## Practise: goods, services and reasons

```step
stage: practise
insight: "Applying both checks together — what it provides and why it exists — builds fluency."
tasks:
  - check:
      type: sort
      q: "Sort each statement into whether it describes what the business provides (Good or Service) or why it exists (Purpose)."
      options: ["Good", "Service", "Purpose"]
      items:
        - ["Fresh apples boxed at the orchard", "Good", "Apples are physical items."]
        - ["Delivering boxes to customers' doors", "Service", "Delivery is work done for the customer."]
        - ["Giving steady work to six local pickers", "Purpose", "Providing employment is a reason the business exists."]
        - ["Earning a return for the orchard owners", "Purpose", "Making a profit is a reason the business exists."]
  - check:
      type: question
      q: "Sam says: 'The local vet clinic doesn't make anything in a factory, so it isn't a real business.' What is the best reply?"
      options:
        - "It is a business that provides a service — checking and treating animals — and Goods are not the only thing businesses sell"
        - "Sam is right: a business must manufacture physical objects"
        - "The vet clinic is only a business on days when it sells pet food"
        - "Vets do not employ anyone"
      answer: 0
      feedback:
        - null
        - "Service businesses are a major part of the economy."
        - "Treating animals is a service, which counts every day."
        - "Vet clinics employ vets, nurses and reception staff."
      explain: "Businesses provide goods, services, or both. Treating animals is a service."
```

### What it provides and why

### Sam's rule about factories

## Make: two businesses near you

```step
stage: make
insight: "Naming one goods-providing and one service-providing business and explaining why each exists turns the terms into your own."
check:
  type: reflect
  text: "In my own book I named one business that provides a good and one that provides a service (real or made up), explained what each provides, and listed at least two reasons why businesses exist beyond making a profit. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how goods and services reach people

```step
stage: make
tier: typical
insight: "Businesses reach customers in different ways — markets, shopping centres, independent shops, online and remote stores — and each way suits different needs."
check:
  type: match
  q: "Match each way of providing goods and services to what makes it useful."
  pairs:
    - ["Saturday growers' market", "Growers sell fresh produce straight to locals once a week with low stall costs"]
    - ["Suburban shopping centre", "Many stores share one roof and car park so customers can buy lots of things in one trip"]
    - ["Online store", "Customers order from home at any hour and goods are posted or downloaded"]
    - ["Small independent store", "A single local shop offers specialist advice and knows its regular customers"]
```

## Wider: a remote community store

```step
stage: make
tier: wider
insight: "In a remote community, the local store is often the only source of fresh food and everyday essentials for hundreds of kilometres, so community health and steady supply matter alongside covering costs."
check:
  type: question
  q: "A store in a remote town 500 km from the nearest city is the only place to buy fresh fruit, medicine and fuel, and roads flood in the wet season. How does its purpose differ from one of twenty supermarkets in a big city?"
  options:
    - "Keeping essentials available and affordable for the community is vital, because residents cannot simply walk to another shop"
    - "It has no costs to pay because it is far from the city"
    - "It only sells services, never physical goods"
    - "Transport is cheaper and easier than in the city"
  answer: 0
  feedback:
    - null
    - "Freight, power and storage in remote areas are expensive, so covering costs still matters."
    - "Fruit, medicine and fuel are physical goods."
    - "Long distances and flooded roads make transport harder and costlier."
  explain: "Where a store is the community's lifeline, reliable supply of essentials and community wellbeing sit at the centre of why it exists."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
