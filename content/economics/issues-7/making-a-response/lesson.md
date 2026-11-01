---
order: 5
unit: response
title: Developing a response
node: AC9HE7S04 n2
summary: "A response to an economic issue chooses one alternative over another and says why, using the costs and benefits. Listing them isn't enough: you weigh them, because some matter more than others. Two people can weigh the same list and choose differently; the reasoning is what makes it a response."
language: maths
hook: "Mia needs a phone plan. Plan A has more data; Plan B is cheaper each month but locks her in for two years. Which should she choose, and how would she decide?"
---
Riverbend is a made-up town, and these are made-up phone plans.

A **response** to an economic issue is a choice, with reasons. It chooses one **alternative** (option) over another, using the costs and benefits.

A response has five parts:

1. **The issue:** what needs deciding.
2. **The alternatives:** the options.
3. **The costs and benefits** of each, financial and non-financial.
4. **The choice.**
5. **Because:** which costs and benefits matter most, and why.

Listing costs and benefits isn't a response on its own. You **weigh** them: one big cost can matter more than three small benefits.

## Predict: how to decide?

```step
stage: predict
insight: "Committing first shows whether students think counting the list decides it."
check:
  type: predict
  q: "Plan A has three benefits on Mia's list; Plan B has one. What should decide her choice?"
  options:
    - "How much each cost and benefit matters to her, not just how many there are"
    - "Whichever plan has the longer list of benefits"
    - "Whichever plan is cheapest each month, no matter what"
    - "Whatever her friends have chosen"
  actual: "Mia should weigh how much each cost and benefit matters to her. One big point (like being locked in for two years) can outweigh several small ones."
```

## Try: work out the totals

```step
stage: run
insight: "Working out the 12-month cost with formulas turns two monthly prices into something easy to compare."
try: { playground: board, starter: "plans.yml#run", height: 300 }
check:
  type: board
  text: "Write a formula in B5 and in C5 for each plan's cost over 12 months."
  when: "f_B5 = 1 and c_B5 = 420 and f_C5 = 1 and c_C5 = 300"
  explain: "=B2*12 gives $420 for Plan A and =C2*12 gives $300 for Plan B. Plan B costs $120 less over a year, but its contract runs for 24 months."
```

Plan B is cheaper over a year. But it has a third of the data, and Mia would be locked in for two years. That's why the numbers are only part of the answer.

## Worked example: weighing, not counting

```step
stage: investigate
insight: "Nib counts the list instead of weighing it. The five-part response chain fixes that."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is helping Mia choose. Click the first line where Nib's thinking goes wrong."
      answer: 4
      fault: logic
      misconception: list-not-reason
      explain: "Line 4: counting the list isn't weighing it. If Mia doesn't use much data and wants to save, Plan B's lower cost might matter more than Plan A's three smaller benefits. A response says which points matter most, and why."
    smaller:
      check:
        type: question
        q: "Could one big benefit matter more than three small ones?"
        options: ["Yes, it depends on how much each matters", "No, three always beats one", "Only if the big one is about money", "No, you just count the points"]
        answer: 0
        feedback:
          - null
          - "Three small points don't always beat one big one. It depends how much each matters."
          - "Non-financial benefits can matter most too."
          - "Counting the points isn't weighing them. Ask which matters most."
        explain: "That's why a response weighs the points instead of counting them."
  - check:
      type: question
      q: "Which of these is a response, not just a list?"
      options:
        - "I choose Plan B: saving $120 matters more than data I won't use"
        - "Plan A has more data each month, and Plan B is cheaper"
        - "Plan A costs $420 a year and Plan B costs $300 a year"
        - "Both plans have good and bad points, so either will do"
      answer: 0
      feedback:
        - null
        - "That lists differences but doesn't choose."
        - "Those are the totals, with no choice or reason."
        - "True, but it doesn't choose or say why. 'Either will do' isn't a weighing."
      explain: "A response makes a choice and says which costs and benefits matter most, and why."
  - check:
      type: question
      q: "Ari picks Plan A and Mia picks Plan B, using the same list. Can both be good responses?"
      options:
        - "Yes, if each weighs the points for their own needs"
        - "No, only one of the two plans can be the right one"
        - "No, the cheaper plan is always the right answer"
        - "Only if they both end up choosing the same plan"
      answer: 0
      feedback:
        - null
        - "People weigh things differently. Someone who uses lots of data may rightly choose Plan A."
        - "Cheapest isn't always best: being locked in, or running out of data, are costs too."
        - "Two different choices can both be well reasoned."
      explain: "A response is judged by its reasoning, not by matching one right answer."
```

### Find Nib's mistake

```worked
\text{The issue} :: Mia needs a phone plan.
\text{The alternatives} :: Plan A ($35 a month, 30 GB, 12 months) or Plan B ($25 a month, 10 GB, 24 months).
\text{Costs and benefits} :: A: more data, short contract, costs $120 more a year. B: cheaper, less data, locked in for two years.
\text{The choice} :: Plan B, for Mia.
\text{Because} :: She uses little data, and saving $120 a year matters more to her than being free to switch.
```

Now: where does Nib go wrong?

### Response or list?

### Two different choices

## Vary: change a price

```step
stage: modify
insight: "Changing one price and seeing whether the choice changes shows that a response depends on the costs and benefits, not a fixed answer."
try: { playground: board, starter: "plans.yml#modify", height: 300 }
tasks:
  - check:
      type: board
      text: "Plan A has a special offer. Change its monthly cost in B2 to 28 and see the new 12-month cost."
      when: "c_B2 = 28 and c_B5 = 336"
      explain: "Plan A now costs $336 over a year, only $36 more than Plan B, with three times the data."
  - check:
      type: question
      q: "With Plan A at $28 a month, would it be reasonable for Mia to change her choice?"
      options:
        - "Yes: the gap is smaller, so Plan A's extras may now be worth it"
        - "No: once you choose, you can never change your mind"
        - "No: Plan B is always better, because it's still cheaper"
        - "Yes: because Plan A now has more items on its list"
      answer: 0
      feedback:
        - null
        - "A response can change when the costs and benefits change."
        - "Plan B is still cheaper, but by much less. Whether that's worth it is a weighing."
        - "The list didn't get longer; the weights changed."
      explain: "When a cost changes, the weighing changes, and a different choice can become reasonable."
```

### The special offer

### Change the choice?

## Practise: parts of a response

```step
stage: practise
insight: "Spotting the parts of a response makes students able to check their own."
tasks:
  - check:
      type: question
      q: "Dev writes: 'I choose Plan A.' What is missing?"
      options:
        - "The because: which points mattered most, and why"
        - "Nothing: he made a choice, and that's the response"
        - "A longer list of Plan A's benefits"
        - "What each plan costs over the whole year"
      answer: 0
      feedback:
        - null
        - "A choice without reasons isn't a full response."
        - "The list matters less than the reasons for the choice."
        - "Totals help, but a response still needs the because: why that plan."
      explain: "A response needs the reason, linked to the costs and benefits."
  - check:
      type: question
      q: "Which reason uses a non-financial cost?"
      options:
        - "Plan B locks me in for two years, so I'm stuck if my needs change"
        - "Plan B costs $25 a month, paid on the first of each month"
        - "Plan A costs $420 a year, which is more than Plan B"
        - "Plan B saves me $120 a year compared with Plan A"
      answer: 0
      feedback:
        - null
        - "That's a financial cost."
        - "That's a financial cost."
        - "That's a financial benefit."
      explain: "Being locked in isn't money, but it is something given up: the freedom to switch."
```

### Dev's response

### A non-financial reason

## Make: your response

```step
stage: make
insight: "Writing a full response, with a choice and the reasons that weigh the costs and benefits, is what this standard asks for."
try: { playground: board, starter: "plans.yml#make", height: 300 }
check:
  type: reasoning
  q: "Choose a plan for someone (Mia, yourself, or a made-up person who uses lots of data). Write a response with all five parts: the issue, the alternatives, the costs and benefits, your choice, and because. You can change the plans on the sheet to test your thinking."
  paper: true
  models:
    - title: "A response choosing Plan B"
      text: "The issue is which plan Mia should get. The alternatives are Plan A and Plan B. Plan A has more data and a shorter contract but costs $420 a year; Plan B costs $300 a year but has less data and a two-year contract. I choose Plan B, because Mia mostly uses wi-fi at home, so 10 GB is enough, and saving $120 a year matters more to her than being able to switch."
    - title: "A response choosing Plan A"
      text: "The issue is which plan suits Kai, who streams music on the bus every day. Plan B is cheaper, but 10 GB wouldn't last him the month, and he'd be stuck with it for two years. I choose Plan A, because running out of data and being locked in would cost him more than the extra $120 a year."
  criteria: ["I named the issue and the alternatives.", "I listed costs and benefits, financial and non-financial.", "I made a choice.", "My because says which points mattered most, and why."]
```

There is more than one good response. Compare yours with the models, then talk it over with a partner.

## Typical: costs now, benefits later

```step
stage: make
tier: typical
insight: "Some responses weigh a cost now against a benefit that comes later, which links back to using resources sustainably."
check:
  type: question
  q: "Riverbend Bakery is thinking about switching to recyclable packaging. It costs a little more now, but less waste goes to landfill over the years and some customers prefer it. Which is the best way to frame the decision?"
  options:
    - "Weigh the cost now against benefits that build up over time"
    - "Only count this month's costs, because the future can't be known"
    - "Only count the benefits, because recycling is always right"
    - "Pick whichever packaging has more items on its list"
  answer: 0
  feedback:
    - null
    - "Later benefits are uncertain, but leaving them out entirely skews the decision."
    - "The costs count too. A response weighs both."
    - "Counting isn't weighing."
  explain: "A good response weighs costs now against benefits later, and says which matter most and why."
```

## Wider: a community response

```step
stage: make
tier: wider
insight: "A community decision has costs and benefits for many people, so reasonable responses differ more."
check:
  type: reasoning
  q: "Riverbend Council could turn part of a park into shops and a car park. Write a response: your choice and the because, with at least one cost and one benefit for different groups of people."
  paper: true
  models:
    - title: "One response"
      text: "I'd keep the park. The shops would bring jobs and more choice, but the park is the only free open space nearby for families and older people, and once it's built on, it's gone for good."
    - title: "Another response"
      text: "I'd build the shops on the smaller part of the park. The town is losing main-street shops, so new jobs matter, and keeping most of the park protects the space families use."
  criteria: ["I made a choice and gave a because.", "I named a cost and a benefit.", "I said who gains and who gives something up."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
