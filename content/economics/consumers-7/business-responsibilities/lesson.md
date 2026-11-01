---
order: 3
unit: rights
title: What businesses must do
node: AC9HE7K05 n3
summary: "A business's responsibilities don't end at the sale. It must meet the safety standards the law sets (mandatory standards), and may choose to meet others (voluntary standards). It must give honest information and not mislead customers. If a product turns out to be unsafe, it must recall it: tell people about the danger and what to do, and stop selling it."
language: maths
hook: "Brightbasket Supermarkets sold hundreds of baby rattles last month. Now tests show a small part can come loose. Whose problem is that?"
---
Riverbend is a made-up town, and so are its people and shops. The rules in this lesson are real Australian rules.

Businesses have responsibilities to the people who buy from them:

- **Mandatory standards:** safety rules set by law that some products must meet. For example, toys for children up to three years old must not have small parts that can come off, because young children can choke on them.
- **Voluntary standards:** standards a business can choose to meet, even though the law doesn't require them.
- **Honest information:** a business must not mislead customers about what a product is or does.
- **Product safety recalls:** if a product turns out to be unsafe, the business must act. A **recall** tells people about the danger and what to do, and the product must not be sold any more. Recalls usually offer a repair, a replacement or a refund.

## Predict: whose problem?

```step
stage: predict
insight: "Committing first brings out the idea that once something is sold, it's the buyer's problem."
check:
  type: predict
  q: "Brightbasket finds out the rattles it already sold can break and be a choking risk. What should happen?"
  options:
    - "Brightbasket and the maker recall it: warn parents and stop selling it"
    - "Nothing: the rattles are sold, so it's the parents' problem now"
    - "Parents should work it out themselves if they notice"
    - "Only the government can do anything about it"
  actual: "The business recalls the rattle. It warns people about the danger, tells them what to do, and stops selling it. Its responsibility for safety didn't end at the sale."
```

## Try: sort the responsibilities

```step
stage: run
insight: "Sorting examples into the four kinds of responsibility gives each term a picture."
check:
  type: sort
  q: "Sort each example into the kind of responsibility it shows."
  options: ["Mandatory standard", "Voluntary standard", "Honest information", "Recall"]
  items:
    - ["A toy for toddlers is tested to make sure no small parts can come off", "Mandatory standard", "The law requires this for toys for children up to three."]
    - ["Riverbend Cafe chooses cups that meet a standard for breaking down in compost, though no law requires it", "Voluntary standard", "The cafe chooses this; the law doesn't make it."]
    - ["A shop doesn't say a jacket is waterproof when it isn't", "Honest information", "Businesses must not mislead customers."]
    - ["A maker tells everyone who bought a heater to stop using it because it can overheat", "Recall", "Warning people about a danger in a sold product is a recall."]
    - ["Brightbasket takes a rattle off its shelves and offers refunds after a fault is found", "Recall", "Stopping sales and offering a remedy is part of a recall."]
```

## Worked example: the rattle recall

```step
stage: investigate
insight: "Nib's planted mistake is that safety stops being the business's job once a product is sold."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is thinking about the rattle. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: safety-ends-at-sale
      explain: "Line 3: a business's responsibility for safety doesn't end at the sale. When a sold product turns out to be unsafe, the business must recall it. So the recall isn't just kindness (line 4)."
    smaller:
      check:
        type: question
        q: "If a baby could choke on a sold rattle, should parents be warned?"
        options: ["Yes, and the business must act", "No, it's already sold", "Only if a parent complains", "Only if the rattle was expensive"]
        answer: 0
        explain: "A danger in a sold product is still the business's responsibility. That's what a recall is for."
  - check:
      type: question
      q: "Which of these is part of what a recall asks a business to do?"
      options:
        - "Warn people about the danger, tell them what to do, and stop selling it"
        - "Keep selling the rattles until they run out"
        - "Wait to see whether anyone gets hurt first"
        - "Change the price and keep selling it"
      answer: 0
      feedback:
        - null
        - "Selling a recalled product is against the law."
        - "A recall is about stopping harm before it happens."
        - "A cheaper unsafe product is still unsafe."
      explain: "A recall warns people, tells them what to do, and takes the product off sale. Recalls usually offer a repair, a replacement or a refund."
  - check:
      type: question
      q: "The rattle broke a rule the law sets for toys for young children. What kind of standard is that?"
      options:
        - "A mandatory standard, because the law requires it"
        - "A voluntary standard, because the maker chose it"
        - "Not a standard, just a good idea"
        - "A warranty, because it's a promise about the toy"
      answer: 0
      feedback:
        - null
        - "The maker doesn't get to choose. For toys for children up to three, the law requires it."
        - "It's a law, not just advice. Fines can apply."
        - "A warranty is an extra promise to the buyer. This is a safety rule set by law."
      explain: "A standard the law requires is mandatory. Breaking it can bring fines, and the product may have to be recalled."
```

### Find Nib's mistake

```worked
\text{Sold} :: Brightbasket sold hundreds of rattles last month.
\text{Found} :: A small part can come loose: a choking risk for babies.
\text{Rule} :: Toys for children up to three must not have small parts that come off (mandatory).
\text{Recall} :: Warn parents, tell them what to do, stop selling, usually offer a refund.
\text{So} :: The business's responsibility for safety goes on after the sale.
```

Now: where does Nib go wrong?

### What a recall asks for

### Which kind of standard?

## Vary: mandatory or voluntary?

```step
stage: modify
insight: "Telling mandatory from voluntary standards, and seeing why a business might choose more, sharpens the terms."
tasks:
  - check:
      type: question
      q: "Dev says: 'A voluntary standard is one that every business must follow by law.' What is the best reply?"
      options:
        - "That's a mandatory standard. A voluntary one is a business's choice"
        - "Dev is right: all standards are the law"
        - "Voluntary standards are just for big companies"
        - "Voluntary standards are about prices, not safety"
      answer: 0
      feedback:
        - null
        - "Some standards are the law (mandatory). Others a business can choose (voluntary)."
        - "A business of any size can choose to meet a voluntary standard."
        - "Voluntary standards can be about safety, quality, or the environment."
      explain: "Mandatory means the law requires it. Voluntary means the business chooses it."
  - check:
      type: question
      q: "Why might Riverbend Cafe choose to meet a voluntary standard when it doesn't have to?"
      options:
        - "Its customers care about it, and it fits what the cafe values"
        - "Because a voluntary standard is secretly the law"
        - "So it never has to follow any mandatory standards"
        - "Because voluntary standards always save money"
      answer: 0
      feedback:
        - null
        - "Voluntary really means voluntary. The cafe could choose not to."
        - "Meeting a voluntary standard doesn't excuse a business from the mandatory ones."
        - "Voluntary standards often cost more. The cafe chooses them for other reasons."
      explain: "Businesses choose voluntary standards to win customers' trust or because of their values, like the entrepreneurs' values in the last course."
```

### Dev's view

### Why choose more?

## Practise: name the responsibility

```step
stage: practise
insight: "Quick cases help students spot which responsibility is in play."
tasks:
  - check:
      type: question
      q: "A shop's ad says a phone case is 'unbreakable', but it cracks easily. Which responsibility did the shop fail?"
      options: ["Giving honest information", "Meeting a voluntary standard", "Running a recall", "Setting a fair price"]
      answer: 0
      feedback:
        - null
        - "The problem is what the ad claimed."
        - "Nothing has been recalled. The problem is the claim."
        - "The price isn't the issue. The claim is."
      explain: "Saying something that isn't true about a product misleads customers."
  - check:
      type: question
      q: "Who is a product safety recall mainly meant to protect?"
      options: ["The people who bought or use the product", "The business's profits", "The government", "Other shops that sell it"]
      answer: 0
      feedback:
        - null
        - "Recalls often cost a business money. They are about people's safety."
        - "The government oversees recalls, but the people using the product are who it protects."
        - "Other shops must stop selling it too, but the point is the people using it."
      explain: "A recall protects the people who bought or use an unsafe product."
```

### The 'unbreakable' case

### Who a recall protects

## Make: one business's responsibilities

```step
stage: make
insight: "Explaining one business's responsibilities in your own words turns the four terms into your own."
check:
  type: reflect
  text: "In my own book I chose a made-up Riverbend business and explained two of its responsibilities (a mandatory standard, a voluntary standard, honest information or a recall) and why each matters to its customers. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: half a recall

```step
stage: make
tier: typical
insight: "A recall has more than one part. Spotting what is missing shows why each part matters."
check:
  type: question
  q: "A made-up toy shop finds its toy cars have sharp edges. It takes them off the shelves, but doesn't tell anyone who already bought one. What is missing?"
  options:
    - "Warning the people who already bought one, and telling them what to do"
    - "Nothing: taking them off the shelves is the whole recall"
    - "Lowering the price of the toy cars"
    - "Waiting until someone gets hurt before saying anything"
  answer: 0
  feedback:
    - null
    - "The cars already sold are still in children's hands. Those families need to know."
    - "A cheaper unsafe toy is still unsafe."
    - "A recall is about stopping harm before it happens."
  explain: "Stopping sales protects new buyers. Warning past buyers, and telling them what to do, protects the children who already have the toy."
```

## Wider: a financial business

```step
stage: make
tier: wider
insight: "Businesses that sell financial services, like banks, have responsibilities too: mostly about honest, clear information."
check:
  type: question
  q: "Ana's bank offers a savings account. Which of these is the bank's responsibility?"
  options:
    - "Telling Ana clearly and honestly what fees and interest the account has"
    - "Choosing how Ana spends her money"
    - "Making sure Ana never takes money out"
    - "Telling Ana which shops to use"
  answer: 0
  feedback:
    - null
    - "How Ana spends her money is her choice."
    - "It's Ana's money. She can take it out under the account's terms."
    - "That's not the bank's job."
  explain: "Like any business, a bank must give honest, clear information about what it sells, including fees and interest."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
