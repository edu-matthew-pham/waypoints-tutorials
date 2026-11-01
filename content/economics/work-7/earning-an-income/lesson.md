---
order: 2
unit: income
title: How people earn an income
node: AC9HE7K04 n2
summary: "Income is money a person receives, usually regularly. People get it in different ways: a wage or salary for working for someone, profit from owning a business, dividends from owning shares, rent from letting property, or a government payment for people who need support (social security). Many people have more than one source."
language: maths
hook: "Mrs Ng doesn't go out to work, but money comes in every week. Where could it come from?"
---
Riverbend is a made-up town, and so are its people.

**Income** is money a person receives, usually regularly. People earn or receive it in different ways:

- A **wage**: paid for each hour (or week) you work for someone.
- A **salary**: a set amount for the year, paid in regular instalments, however the hours fall.
- **Profit** from owning a business: what is left after the business pays its costs.
- **Dividends**: a share of a company's profit, paid to people who own **shares** in it.
- **Rent**: money for letting someone use a house, flat or other property you own.
- **Social security**: a government payment for people who need support, such as people who are older, caring for someone, living with a disability or looking for work.

## Predict: where does it come from?

```step
stage: predict
insight: "Committing first brings out the idea that income only comes from going to work."
check:
  type: predict
  q: "Mrs Ng doesn't go out to work, but money comes in every week. Which of these could explain it?"
  options:
    - "She rents out a flat she owns, so tenants pay her rent"
    - "Nothing: you can only have an income if you go to work"
    - "She must be working secretly"
    - "Money that comes in without a job isn't income"
  actual: "Mrs Ng rents out the flat above her garage. Rent is income, even though she doesn't go out to a job."
```

## Try: the Riverbend income map

```step
stage: run
insight: "Matching six people to their source of income shows how many ways there are."
check:
  type: match
  q: "Match each Riverbend person to the way they get their income."
  pairs:
    - ["Sam, paid for each hour he works at the bakery", "Wage"]
    - ["The school principal, paid the same amount every fortnight all year", "Salary"]
    - ["Leo, who keeps what is left after Leo's Laptop Repairs pays its costs", "Business profit"]
    - ["Theo, who owns shares in a company", "Dividends"]
    - ["Mrs Ng, whose tenants pay her each week for the flat", "Rent"]
    - ["Ana, who receives a government payment because she cares for her father", "Social security"]
```

## Worked example: Nib's income rule

```step
stage: investigate
insight: "Nib's planted mistake is that income only comes from going to work. Leo's month also separates profit from all the money customers pay."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out who in Riverbend has an income. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: income-only-from-a-job
      explain: "Line 3: income can come from owning things (rent, dividends, a business) or from a government payment, not only from going to work. So Mrs Ng and Theo do have an income."
    smaller:
      check:
        type: question
        q: "Every week Mrs Ng's tenants pay her for the flat. Is that money coming in to her?"
        options: ["Yes, so it is income", "No, because she didn't go to work", "Only if she spends it", "No, it belongs to the tenants"]
        answer: 0
        feedback:
          - null
          - "Income doesn't have to come from going to work."
          - "Income is what comes in, whether she spends it or not."
          - "The tenants pay it to Mrs Ng, so it's hers."
        explain: "Money she receives regularly is income, wherever it comes from."
  - check:
      type: question
      q: "Customers paid Leo's Laptop Repairs $5000 this month. Parts, rent and power cost $3000. How much did Leo earn from his business this month?"
      options:
        - "$2000, the profit left after costs"
        - "$5000, all the money customers paid"
        - "$8000, the money in and the costs added"
        - "$3000, what the business spent"
      answer: 0
      feedback:
        - null
        - "That's what came in, but $3000 had to go out to pay costs. Leo keeps what is left."
        - "Costs are taken away, not added."
        - "That's what the business spent, not what Leo earned."
      explain: "A business owner's income is the profit: $5000 − $3000 = $2000. It goes up and down each month."
  - check:
      type: question
      q: "Theo owns shares in a company. Why is he paid dividends?"
      options:
        - "He owns part of the company, so he shares its profit"
        - "He works at the company, so it pays him for his work"
        - "The government pays people who own shares"
        - "He lent the company money, so it pays him back"
      answer: 0
      feedback:
        - null
        - "Shareholders don't have to work there. They are paid because they own part of it."
        - "Dividends come from the company's profit, not the government."
        - "A loan is paid back with interest. A dividend is a share of profit paid to owners."
      explain: "Dividends are a share of profit paid to the company's owners, the shareholders."
```

### Find Nib's mistake

```worked
\text{Working for someone} :: Sam (wage), the principal (salary).
\text{Owning something} :: Leo (business profit), Theo (dividends), Mrs Ng (rent).
\text{Government support} :: Ana (social security, as a carer).
\text{So} :: Income comes from different economic roles. Going to work is one of them.
```

Now: where does Nib go wrong?

### Leo's month

### Theo's dividends

## Vary: sort the income

```step
stage: modify
insight: "Sorting new descriptions checks each term can be used, and that wage and salary are told apart."
tasks:
  - check:
      type: sort
      q: "Sort each description into the type of income."
      options: ["Wage", "Salary", "Business profit", "Dividends", "Rent", "Social security"]
      items:
        - ["$28 for every hour worked at the supermarket", "Wage", "Paid by the hour."]
        - ["$78 000 a year, paid every fortnight", "Salary", "A set yearly amount in regular instalments."]
        - ["What a hairdresser keeps after paying for her salon and products", "Business profit", "Money left after the business's costs."]
        - ["A payment from a company to the people who own its shares", "Dividends", "A share of profit paid to owners."]
        - ["Money a student pays each week to board in someone's spare room", "Rent", "Payment for using someone's property."]
        - ["A government payment while someone looks for work", "Social security", "Government support for people who need it."]
  - check:
      type: question
      q: "Mia says: 'A wage and a salary are the same thing.' What is the best reply?"
      options:
        - "A wage depends on the hours you work; a salary is a set yearly amount"
        - "Mia is right: both are just pay"
        - "A wage is for adults and a salary is for teenagers"
        - "A salary is income from a business you own"
      answer: 0
      feedback:
        - null
        - "Both are pay for working for someone, but they are worked out differently."
        - "Age doesn't decide it. How the pay is worked out does."
        - "Income from your own business is profit, not a salary."
      explain: "A wage changes with the hours worked. A salary is a set amount for the year."
```

### Six sources

### Wage or salary?

## Practise: what kind of income?

```step
stage: practise
insight: "Quick cases with a common slip each build fluency."
tasks:
  - check:
      type: question
      q: "Rosa owns Rosa's Car Yard. How does she get her income from it?"
      options:
        - "From the profit left after the yard pays its costs"
        - "From all the money customers pay for cars"
        - "From a wage the government pays business owners"
        - "From dividends, because she works there"
      answer: 0
      feedback:
        - null
        - "Some of that money pays for the cars, staff and rent. She keeps what is left."
        - "The government doesn't pay business owners a wage."
        - "Dividends go to shareholders. Rosa owns the business on her own, so her income is the profit."
      explain: "A business owner's income is the profit after costs."
  - check:
      type: question
      q: "Which person has more than one source of income?"
      options:
        - "Leo: business profit, plus a wage for an evening class"
        - "Sam, who works lots of shifts at the bakery"
        - "The principal, who is paid a salary monthly"
        - "Theo, who gets dividends twice a year"
      answer: 0
      feedback:
        - null
        - "Many shifts still come from one source: his wage."
        - "Being paid every month is still one source: a salary."
        - "Two payments a year still come from one source: dividends."
      explain: "Leo has two: profit from his business and a wage from teaching."
```

### Rosa's income

### More than one source

## Make: two kinds of income

```step
stage: make
insight: "Explaining the difference between two sources in your own words is what the standard asks for."
check:
  type: reasoning
  q: "Choose two Riverbend people with different kinds of income. Explain where each one's income comes from and one difference between them (for example, how sure or steady it is, or whether they have to work for it)."
  paper: true
  models:
    - title: "A model answer"
      text: "Sam earns a wage for each hour he works at the bakery, so if he works fewer shifts, he earns less. Leo earns profit from his business, which is what is left after costs. It can be more or less than a wage, and some months there might be none."
  criteria: ["I named the type of income for each person.", "I said where each one comes from.", "I explained one difference between them."]
```

Write it in your book first, then compare with the model and talk it over with a partner.

## Typical: one person, several sources

```step
stage: make
tier: typical
insight: "Seeing one person with several sources shows that the categories describe roles, not people."
check:
  type: question
  q: "Mrs Ng rents out her flat, owns some shares and works two days a week at the library. How many kinds of income does she have, and what are they?"
  options:
    - "Three: rent, dividends and a wage"
    - "One: her wage, because rent and shares aren't income"
    - "Two: rent and dividends, because part-time work doesn't count"
    - "One: rent, because that's the biggest"
  answer: 0
  feedback:
    - null
    - "Rent and dividends are both income, even without going to work."
    - "Part-time work is paid work, so her library pay is income too."
    - "Every source counts, not just the biggest."
  explain: "Each role brings its own kind of income: owning a flat (rent), owning shares (dividends), working (a wage)."
```

## Wider: paid per delivery

```step
stage: make
tier: wider
insight: "Gig work paid per job is neither a wage nor a salary, which changes how steady the income is."
check:
  type: question
  q: "Kai delivers food in Riverbend through a delivery app. He is paid for each delivery, and some nights there are few orders. What kind of income is this, and what does it mean for him?"
  options:
    - "Neither: he works for himself through the app, so it changes nightly"
    - "A salary, because the app pays him regularly every week"
    - "A wage, because he is paid for each hour he is out"
    - "Social security, because the government sets a minimum for it"
  answer: 0
  feedback:
    - null
    - "A salary is a set yearly amount. Kai's pay depends on how many deliveries he does."
    - "A wage is paid to an employee. Delivery riders like Kai usually aren't employees: they work for themselves through the app."
    - "The government sets a minimum, but the app pays Kai for his work. Social security is a payment from the government."
  explain: "Delivery riders are usually treated as contractors who work for themselves, so their income is closer to running a small business than to a wage, and it is less steady. That is one reason people weigh up gig work carefully."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
