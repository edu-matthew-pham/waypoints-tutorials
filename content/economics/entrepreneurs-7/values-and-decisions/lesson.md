---
order: 2
unit: success
title: Values and the decisions entrepreneurs make
node: AC9HE7K03 n2
summary: "Values are what a person thinks matters, such as fairness, safety, honesty or looking after the environment. They shape an entrepreneur's decisions about which opportunities to take, how to deal with stakeholders, and how they comply with laws and regulations. A value can cost a business time or money, and it still shapes the decision. Stakeholders are everyone affected by a business, not only owners."
language: maths
hook: "Leo could sell cheap new gadgets, or fix up old laptops for students who can't afford new ones. Fixing laptops earns him less on each sale. Why might he choose it anyway?"
---
Riverbend is a made-up town, and so are its businesses and people.

Skills are *how* an entrepreneur gets things done. **Values** are what they think matters: fairness, safety, honesty, looking after the environment, helping the community. Values shape decisions in three areas:

- **Taking an opportunity:** which chances to go after, and which to leave.
- **Negotiating with stakeholders:** how to deal with the people affected. **Stakeholders** are everyone affected by a business's decisions: workers, customers, suppliers, neighbours and owners.
- **Complying with the law and regulations:** following the rules every business must follow, and how seriously to take them.

## Predict: why choose the harder option?

```step
stage: predict
insight: "Committing first brings out the idea that business decisions are only about earning the most."
check:
  type: predict
  q: "Leo earns less on each refurbished laptop than he would on new gadgets. Why might he still choose to refurbish laptops?"
  options:
    - "Because of what he values, such as less waste and helping students"
    - "Because a business always picks the option that earns the most"
    - "Because refurbishing always earns more money in the end"
    - "Because values only matter in charities, not businesses"
  actual: "Leo's values (less waste, helping students who can't afford a new laptop) shape which opportunity he takes. Choosing it may cost him some money. It may also bring loyal customers. Either way, the value shaped the decision."
```

## Try: three kinds of decision

```step
stage: run
insight: "Sorting Leo's decisions into the three areas shows where values come in."
check:
  type: sort
  q: "Sort each of Leo's decisions into the area it belongs to."
  options: ["Taking an opportunity", "Negotiating with stakeholders", "Complying with the law and regulations"]
  items:
    - ["Refurbishing old laptops for students instead of selling cheap new gadgets", "Taking an opportunity", "He is choosing which chance to go after."]
    - ["Agreeing to pay his parts supplier within a week, so she isn't left waiting for her money", "Negotiating with stakeholders", "The supplier is affected by how and when he pays."]
    - ["Registering 'Leo's Laptop Repairs' as a business name before he opens", "Complying with the law and regulations", "A business that trades under a name other than the owner's own name must register it."]
    - ["Agreeing a lower price with the school for fixing ten laptops at once", "Negotiating with stakeholders", "The school is a customer and a stakeholder; they settle on terms that suit both."]
    - ["Keeping records of what he earns so he can pay the right tax", "Complying with the law and regulations", "Keeping records for tax is a legal requirement for businesses."]
```

## Worked example: who counts as a stakeholder?

```step
stage: investigate
insight: "This is the hinge: values connect to decisions through stakeholders. Nib's planted mistake confuses stakeholders with shareholders."
tasks:
  - check:
      type: question
      q: "Leo buys parts from Sunita's Parts Supply. Is Sunita a stakeholder in Leo's business?"
      options:
        - "Yes, because Leo's decisions about paying and ordering affect her business"
        - "No, because she doesn't own any part of Leo's business"
        - "No, because stakeholders are only the customers"
        - "Only if Leo makes a profit that year"
      answer: 0
      feedback:
        - null
        - "Owning part of a business makes you a shareholder or owner. A stakeholder is anyone affected by its decisions."
        - "Customers are stakeholders, but so are suppliers, workers and neighbours."
        - "Sunita is affected by Leo's decisions whether he makes a profit or not."
      explain: "A stakeholder is anyone affected by a business's decisions. Sunita is affected by how and when Leo pays her."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out who Leo needs to think about. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: stakeholder-is-shareholder
      explain: "Line 3: that is what a shareholder is. A stakeholder is anyone affected by the business's decisions: Sunita, Leo's customers, his neighbours and Leo himself. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "If Leo pays Sunita two months late, is Sunita affected?"
        options: ["Yes, she has to wait for her money", "No, because she isn't an owner", "Only if she complains", "No, it's Leo's business, not hers"]
        answer: 0
        feedback:
          - null
          - "You don't have to own part of a business to be affected by it. That's what a stakeholder is."
          - "She is affected whether or not she complains."
          - "It's Leo's business, but his decisions still reach her."
        explain: "She is affected, so she is a stakeholder, even though she owns no part of Leo's business."
  - check:
      type: question
      q: "Leo wipes every laptop's old files before he sells it, which takes him about an hour each. He does it because he values people's privacy. What does this show?"
      options:
        - "A value can cost a business time or money and still shape the decision"
        - "Values are bad for business, because they waste time"
        - "Leo is only doing it because a law forces him to"
        - "Values are personal opinions and don't change what a business does"
      answer: 0
      feedback:
        - null
        - "It does cost time. It may also build trust with customers. Either way, the value shaped what he does."
        - "The lesson says he does it because he values privacy. That's a value, whatever the law says."
        - "This value changes what Leo does every day: an hour of work per laptop."
      explain: "Values show up in decisions, even when they cost something. Whether they pay off is a separate question."
```

### Leo's Laptop Repairs

```worked
\text{Value} :: Less waste, and fair access for students.
\text{Taking an opportunity} :: Refurbish old laptops instead of selling cheap new gadgets.
\text{Value} :: Fairness to suppliers.
\text{Negotiating with stakeholders} :: Agrees to pay Sunita within a week.
\text{Value} :: Honesty.
\text{Complying with the law} :: Registers his business name and keeps records for tax, and does it properly.
\text{So} :: Each value can be traced to a decision. Some cost him; some may help.
```

Now: is Sunita a stakeholder?

### Find Nib's mistake

### Values that cost something

## Vary: values in other Riverbend businesses

```step
stage: modify
insight: "Seeing the same link between values and decisions in other businesses checks that it is not just about Leo."
tasks:
  - check:
      type: match
      q: "Match each value to the decision it shaped."
      pairs:
        - ["Caring about the environment", "Riverbend Cafe stops using single-use cups, even though reusable ones cost more"]
        - ["Fairness to workers", "Rosa's Car Yard pays staff extra for weekend shifts, more than she has to"]
        - ["Food safety", "Riverbend Bakery throws out anything left over after two days, though it could still sell it cheaply"]
        - ["Helping the community", "Riverbend Pantry opens late on Thursdays for families who work long hours"]
  - check:
      type: question
      q: "Dev says: 'Following the law is just good advice. A business can skip the rules if it saves money.' What is the best reply?"
      options:
        - "Laws and regulations must be followed; breaking them can bring fines or close a business"
        - "Dev is right, because the law only applies to big companies"
        - "Dev is right if the business is careful not to get caught"
        - "Only food businesses have rules they must follow"
      answer: 0
      feedback:
        - null
        - "The law applies to every business, from a market stall to a national company."
        - "Not getting caught doesn't make it legal, and customers who find out may stop trusting the business."
        - "Every business has rules to follow, such as keeping records for tax."
      explain: "Complying with the law and regulations is a requirement, not advice. How seriously an entrepreneur takes it is shaped by their values."
```

### Four values, four decisions

### Dev's view of the law

## Practise: trace a value

```step
stage: practise
insight: "Tracing a value to a decision and an outcome is the move the next lesson builds on."
tasks:
  - check:
      type: question
      q: "Riverbend Bakery buys flour from a local mill that costs more than a big supplier, because the baker values supporting local farms. What is one likely result?"
      options:
        - "Her costs go up a little, and the mill keeps a steady customer"
        - "Nothing changes, because values don't affect a business's costs"
        - "The bakery must close, because any extra cost makes a business fail"
        - "The mill becomes a shareholder in the bakery"
      answer: 0
      feedback:
        - null
        - "Paying more for flour does change her costs. That is the trade-off her value brings."
        - "A small extra cost is a trade-off, not a certain failure."
        - "The mill is a stakeholder (a supplier), not an owner."
      explain: "A value led to a decision with a cost and a benefit: higher flour costs, and a steady local supplier."
  - check:
      type: question
      q: "Which list contains only stakeholders in Leo's Laptop Repairs?"
      options:
        - "Leo, his customers, Sunita the supplier and his neighbours"
        - "Only Leo, because he owns the business"
        - "Only people who own shares in Leo's business"
        - "Only his customers, because they pay the money"
      answer: 0
      feedback:
        - null
        - "Leo is one stakeholder, but others are affected by his decisions too."
        - "Leo's business has no shareholders, but it still has stakeholders."
        - "Customers are stakeholders, but so are suppliers and neighbours."
      explain: "Stakeholders are everyone affected by the business's decisions."
```

### The bakery's flour

### Leo's stakeholders

## Make: one decision, one value

```step
stage: make
insight: "Explaining one decision in your own words, with the value behind it and what it cost or gained, is the reasoning the standard asks for."
check:
  type: reasoning
  q: "Choose one of Leo's decisions. Explain which value shaped it, which area it belongs to (taking an opportunity, negotiating with stakeholders, or complying with the law), and what it might cost or gain the business."
  paper: true
  models:
    - title: "A strong answer"
      text: "Leo pays Sunita within a week because he values fairness. That is negotiating with a stakeholder. It means he has less spare cash some weeks, but Sunita is more likely to keep his parts in stock and give him a good price."
    - title: "A different view that also works"
      text: "Leo chose refurbished laptops because he values less waste and helping students. That is taking an opportunity. He earns less on each sale, so it might cost him money, but students who can't afford a new laptop may keep coming back."
  criteria: ["I named the value.", "I said which of the three areas the decision belongs to.", "I said what it might cost or gain the business."]
```

There is more than one good answer. Compare yours with the models, then talk it over with a partner.

## Typical: a supplier that costs more

```step
stage: make
tier: typical
insight: "A harder choice where a value costs money shows how values and profit can pull in different directions."
check:
  type: question
  q: "Riverbend Cafe can buy coffee beans from a supplier that pays its farm workers fairly, or from a cheaper one that doesn't say how its workers are paid. The owner picks the fairer one. Which value is shaping this decision?"
  options:
    - "Fairness to the people who grow the coffee"
    - "Making the biggest possible profit this year"
    - "Complying with a law that tells cafes which supplier to use"
    - "Getting the shareholders to agree"
  answer: 0
  feedback:
    - null
    - "The cheaper supplier would give a bigger profit. She chose against that."
    - "No law tells a cafe which supplier to choose. This is her choice."
    - "The cafe is owned by one person, so no shareholders are involved."
  explain: "Fairness to workers further along the supply chain shaped which stakeholder she chose to deal with, at a cost to her profit."
```

## Wider: cutting a corner

```step
stage: make
tier: wider
insight: "Following what happens when a business doesn't comply shows why compliance affects stakeholders, not only the owner."
check:
  type: question
  q: "A made-up Riverbend takeaway stops checking that its fridge stays cold enough, to save time. A customer gets sick and the council inspects. Which stakeholders are affected?"
  options:
    - "The customer, the owner, the staff and everyone who eats there"
    - "Only the owner, because it's her business"
    - "Only the council inspector"
    - "No one, because the checks are just paperwork"
  answer: 0
  feedback:
    - null
    - "The owner is affected, but so are the people who got sick and the staff whose jobs depend on the business."
    - "The inspector checks the rules but isn't the one harmed."
    - "The checks are how the business makes sure its food stays safe to eat."
  explain: "Food-safety rules protect customers. When a business cuts that corner, customers, staff and the owner are all affected."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
