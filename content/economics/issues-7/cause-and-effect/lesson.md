---
order: 3
unit: data
title: Cause and effect in data
node: AC9HE7S03 n3
summary: "When two things change together in data, one may cause the other, but the pattern alone doesn't prove it. To explain a cause-and-effect relationship, say which is the cause, which is the effect, and the economic 'because' that links them: for example, more income leaves more after spending on needs, so saving can rise. Something else might also be causing both."
language: maths
hook: "In Riverbend, households that earn more also tend to save more. Does earning more cause the saving, or does saving cause the earning?"
---
Riverbend is a made-up town, and this is made-up data.

When two things change together, there may be a **cause-and-effect relationship**: a change in one (the **cause**) leads to a change in the other (the **effect**).

But two things going together doesn't prove one causes the other. To explain a cause-and-effect relationship, give all three parts:

- **The cause:** what changes first.
- **The effect:** what changes because of it.
- **The because:** the economic reason that links them.

For example: "When a household's income rises, its saving can rise, **because** there is more left over after paying for needs."

This isn't only for economics: in science, in the news and in persuasive writing, two things going together doesn't prove one causes the other.

## Predict: which way round?

```step
stage: predict
insight: "Committing first shows whether students can say which way a relationship runs, and whether they think a pattern proves it."
check:
  type: predict
  q: "In Riverbend, households that earn more tend to save more. Which explanation makes the most economic sense?"
  options:
    - "Earning more leaves more money after needs, so they can save more"
    - "Saving more makes people earn more"
    - "The pattern proves exactly how much anyone will save"
    - "It's a coincidence, so there's nothing to explain"
  actual: "Income is the likely cause and saving the effect: more income leaves more after needs, so saving can rise. The pattern supports this but doesn't prove it on its own, and it doesn't tell you what any one household will do."
```

## Try: read the pattern

```step
stage: run
insight: "Placing a new household on the graph makes students use the pattern, not just look at it."
try: { playground: board, starter: "households.yml#run", height: 420 }
tasks:
  - check:
      type: board
      text: "A new Riverbend household earns $1400 a week. Drag P up to where its saving would most likely be, if it follows the pattern."
      when: "y(P) >= 190 and y(P) <= 240"
      explain: "Households earning $1300 a week save about $180, and those earning $1500 save about $240, so somewhere around $200 to $220 fits the pattern."
  - check:
      type: question
      q: "What pattern does the graph show?"
      options:
        - "As weekly income goes up, weekly saving tends to go up too"
        - "As income goes up, saving goes down"
        - "Every household saves exactly the same amount"
        - "There is no pattern at all"
      answer: 0
      feedback:
        - null
        - "Look from left to right: the dots climb."
        - "The dots are at different heights, so saving varies."
        - "The dots form a clear upward band."
      explain: "The dots rise from left to right: more income, more saving, in general."
```

### Place the new household

### Read the pattern

## Worked example: cause, effect and because

```step
stage: investigate
insight: "Nib reverses cause and effect and says the pattern proves it. Building the cause-effect-because chain fixes both."
try: { playground: board, starter: "households.yml#look", height: 380 }
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining the graph. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: pattern-proves-cause
      explain: "Line 3: two things going up together doesn't prove a cause, and Nib has it backwards. The economic reasoning says more income makes saving possible, not the other way round. So line 4 doesn't follow."
    smaller:
      check:
        type: question
        q: "Which usually comes first for a household: getting more income, or having more to save?"
        options: ["Getting more income", "Having more to save", "They always happen at the same moment", "Neither, saving is random"]
        answer: 0
        explain: "You need the income before there's anything left over to save."
  - check:
      type: question
      q: "Which sentence explains the relationship with a cause, an effect and a because?"
      options:
        - "Higher income can lead to more saving, because more is left over after paying for needs"
        - "Income and saving both go up in the graph"
        - "Saving goes up, so income goes up, because the dots go up"
        - "Some households save more than others"
      answer: 0
      feedback:
        - null
        - "That describes the pattern, but doesn't say which causes which or why."
        - "That's backwards, and 'the dots go up' isn't an economic reason."
        - "True, but it doesn't link income and saving."
      explain: "Cause (income), effect (saving), and an economic because (more left after needs)."
  - check:
      type: question
      q: "Why can't the graph alone prove that income causes saving?"
      options:
        - "Two things going together doesn't prove one causes the other; something else could be involved"
        - "Because graphs are always wrong"
        - "Because there are only twelve households, so the data is useless"
        - "Because saving and income have nothing to do with each other"
      answer: 0
      feedback:
        - null
        - "Graphs can show patterns well. They just can't prove a cause on their own."
        - "Twelve is small, but the main point is that a pattern doesn't prove a cause."
        - "They do seem linked. The question is whether the graph proves why."
      explain: "The pattern supports an explanation. The economic because makes it convincing, but other things could also play a part."
```

### Find Nib's mistake

```worked
\text{Pattern} :: Households with more income tend to save more.
\text{Cause} :: Income rises.
\text{Effect} :: Saving can rise.
\text{Because} :: More is left over after paying for needs.
\text{Careful} :: The pattern supports this but doesn't prove it on its own.
```

Now: where does Nib go wrong?

### Cause, effect and because

### Why it isn't proof

## Vary: cause and effect elsewhere

```step
stage: modify
insight: "New examples check that students can name cause, effect and because outside the income graph."
tasks:
  - check:
      type: question
      q: "When Riverbend Bakery raised the price of its pies, it sold fewer of them. Which is the cause and which is the effect?"
      options:
        - "Cause: the price rise. Effect: fewer pies sold"
        - "Cause: fewer pies sold. Effect: the price rise"
        - "They have nothing to do with each other"
        - "Both are causes"
      answer: 0
      feedback:
        - null
        - "The price changed first, and sales changed after."
        - "A higher price is a common reason people buy less."
        - "One changed first and the other followed."
      explain: "The price rose first; fewer pies sold after. The because: some customers chose something cheaper."
  - check:
      type: question
      q: "On hot days, Riverbend Pool sells more entries and the cafe next door sells more ice creams. Does the pool cause the ice cream sales?"
      options:
        - "Probably not: the hot weather is likely causing both"
        - "Yes: more swimmers always means more ice cream"
        - "Yes: the graph would prove it"
        - "No: the two have nothing to do with the weather"
      answer: 0
      feedback:
        - null
        - "Swimmers may buy ice creams, but the hot weather explains both going up together."
        - "A pattern alone can't prove a cause."
        - "The weather is the likely link between them."
      explain: "When something else causes both, they go up together without one causing the other."
```

### The pie price

### Hot days

## Practise: name the parts

```step
stage: practise
insight: "Quick cases build the habit of naming cause, effect and because."
tasks:
  - check:
      type: question
      q: "After Riverbend's bus started running every two hours, fewer people shopped at the shopping centre. What is a reasonable because?"
      options:
        - "It became harder to get there without a car"
        - "People stopped liking the shopping centre"
        - "The bus made the shops more expensive"
        - "Fewer shoppers caused the bus to change"
      answer: 0
      feedback:
        - null
        - "That might be true, but nothing in the information points to it."
        - "The bus timetable doesn't change shop prices."
        - "That's backwards: the bus change came first."
      explain: "Fewer buses made the trip harder, so some people shopped elsewhere."
  - check:
      type: question
      q: "Sam says: 'The two lines go up together, so one definitely causes the other.' What is the best reply?"
      options:
        - "They might be linked, but going up together doesn't prove a cause"
        - "Sam is right: going up together always means a cause"
        - "Sam is right, but only for money"
        - "Lines can never show a link"
      answer: 0
      feedback:
        - null
        - "Hot weather raises pool entries and ice cream sales together, without one causing the other."
        - "The rule is the same for money, weather, science or anything else."
        - "Graphs can show a link. They can't prove the cause on their own."
      explain: "A pattern is evidence for a cause, not proof. Look for the because, and for anything else that could cause both."
```

### The bus

### Sam's rule

## Make: your own cause and effect

```step
stage: make
insight: "Writing a full cause-effect-because sentence for a new case is the skill this standard asks for."
check:
  type: reflect
  text: "In my own book I wrote a cause-effect-because sentence for this made-up case: when Riverbend Cafe started opening at 6 am, its morning sales went up. I also wrote one other thing that could have caused the rise. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: something else in the picture

```step
stage: make
tier: typical
insight: "A third thing can sit behind a pattern and explain part of it."
check:
  type: question
  q: "Some of the Riverbend households that earn and save the most have two adults working. What does that add to the picture?"
  options:
    - "Having two earners could explain both the higher income and the higher saving"
    - "Nothing: the number of earners can't matter"
    - "It proves that saving causes income"
    - "It means the graph is useless"
  answer: 0
  feedback:
    - null
    - "Two earners can raise income, which can raise saving."
    - "That's backwards, and nothing here proves it."
    - "The graph is still useful. It just isn't the whole story."
  explain: "A third thing (the number of earners) can help explain a pattern. Good explanations look for it."
```

## Wider: a pattern that isn't a cause

```step
stage: make
tier: wider
insight: "Making up your own example of two things that go together without one causing the other shows you really understand the difference."
check:
  type: reflect
  text: "I made up my own example of two things that tend to go up together without one causing the other (like pool entries and ice cream sales), and wrote what really causes both."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
