---
order: 1
unit: purpose
title: Goods, services and why businesses exist
node: AC9HE7K02 n1
summary: "Businesses exist to provide goods and services, make a profit, create jobs and meet community needs. A good is a physical thing you can touch and take home; a service is work someone does for you. Many businesses exist to make a profit, but others exist to serve a community or share work among members."
language: maths
hook: "In Mia's town, a bakery sells bread, a bike workshop fixes punctures, and a community pantry sells low-cost groceries with no owner taking a profit. Are all three businesses, and why do they exist?"
---
A **business** is an organisation that provides goods or services to people. (All businesses and people in this course — such as Mia, Riverbend Bakery, Pedal Fix Workshop and Riverbend Pantry — are made up.)

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
        - "To give away free charity parcels using only unpaid volunteers"
        - "To earn dividends for private shareholders"
      answer: 0
      feedback:
        - null
        - "No private owner takes a profit here: any spare money goes back into keeping food affordable."
        - "Riverbend Pantry sells low-cost groceries and pays two staff wages, rather than giving away free parcels with only unpaid volunteers."
        - "It has no shareholders taking dividends: any surplus is put back into lower food prices."
      explain: "Riverbend Pantry provides goods a community needs and employs staff, even though it does not run for an owner's profit."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining the businesses in Mia's town. Click the first line where Nib's thinking goes wrong."
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
          - "It only provides goods, because not-for-profits cannot pay wages"
        answer: 0
        feedback:
          - null
          - "Profit is one reason a business exists, not the only one. The pantry still sells groceries and pays staff."
          - "Groceries are goods. The pantry provides goods and jobs."
          - "Not-for-profits can pay wages. Its two staff are paid."
        explain: "Providing goods and jobs are reasons a business exists, even without an owner taking a profit."
  - check:
      type: question
      q: "Why does it matter for the rest of this course that businesses can exist for reasons beyond profit?"
      options:
        - "Some business types, like cooperatives and not-for-profits, are set up around those reasons"
        - "Businesses that don't aim for profit can't pay wages, so they need volunteers"
        - "It shows that most business owners don't really care about making a profit"
        - "Only businesses that don't make a profit can provide services to the community"
      answer: 0
      feedback:
        - null
        - "Not-for-profits and cooperatives can and do pay wages. Riverbend Pantry pays two workers."
        - "Profit is still a big reason for many businesses. The point is that it isn't the only one."
        - "For-profit businesses provide services to communities too, such as a vet or a mechanic."
      explain: "Once you see that purpose varies, the different business structures in the next lesson make sense."
```

### Three businesses in Mia's town

```worked
\text{Riverbend Bakery} :: Sells bread and pies (goods). Exists to provide food, earn a profit for the baker, and employ three staff.
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
        - "Several: a profit, a repair service, a job for his cousin and less landfill"
        - "One: making a profit, because the other reasons are just side effects"
        - "Two: a profit and a service, because helping the planet isn't a business reason"
        - "One: helping the environment, because that's the reason he cares most about"
      answer: 0
      feedback:
        - null
        - "Earning a living is one reason, but Dev also chose to give his cousin a job and cut waste. Those count."
        - "Meeting a community or environmental need is one of the reasons businesses exist."
        - "Caring most about one reason doesn't cancel the others. He also wants to earn a living and employ his cousin."
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
        - "It sells a service, checking and treating animals, and services count as much as goods"
        - "Sam is right, because a business has to make or sell something you can touch"
        - "It counts as a business only because it also sells pet food and medicine"
        - "It isn't a business; it's a health service, like a hospital run by the government"
      answer: 0
      feedback:
        - null
        - "Businesses provide goods, services or both. Service businesses are a big part of the economy."
        - "Treating animals is a service. It would be a business even if it sold no goods at all."
        - "Most vet clinics are privately owned businesses that charge for their services."
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
  text: "In my own book I named one business that provides a good and one that provides a service (real or made up), explained what each provides, and listed at least two reasons why businesses exist beyond making a profit. A partner read it and gave feedback."
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

## Wider: a remote town's store (made up)

```step
stage: make
tier: wider
insight: "Where a store is the only one for a long way, steady supply and community health might matter alongside covering costs."
check:
  type: question
  q: "Imagine a made-up store in a remote town 500 km from the nearest city. It is the only place to buy fresh fruit, medicine and fuel, and roads can flood in the wet season. How might its purpose differ from one of twenty supermarkets in a big city?"
  options:
    - "Keeping essentials in stock all year might matter more, as there is no other shop nearby"
    - "Its purpose is the same as any supermarket, because every shop just sells groceries"
    - "It might as well close in the wet season, since fewer trucks can reach it then"
    - "Profit can't matter to it at all, so it has to be run as a charity"
  answer: 0
  feedback:
    - null
    - "Where a shop is matters. With no other shop for 500 km, what the town needs from it is different."
    - "People still need food, medicine and fuel in the wet season. A store like this might stock up before the roads flood."
    - "A remote store still has to cover its costs, and some aim to make a profit. Profit can sit alongside community need."
  explain: "A store like this might put reliable supply of essentials near the centre of why it exists, alongside covering its costs."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
