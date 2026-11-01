---
order: 3
unit: income
title: Why people work
node: AC9HE7K04 n3
summary: "Earning an income is one reason people work. For many people, work also adds to their identity (who they are), their self-esteem, their part in the community and their living standards: material ones (the goods and services income buys) and non-material ones (friendships, purpose, health). Work doesn't do all of this for everyone, and people without paid work are not worth less."
language: maths
hook: "Mai could earn more at a bigger shop, but she stays at Riverbend Pantry. The netball coach isn't paid at all. Why would anyone do that?"
---
Riverbend is a made-up town, and so are its people.

**Earning an income** is one reason people work. For many people, work gives them other things too:

- **Identity:** part of how they see themselves ("I'm a nurse", "I'm the coach").
- **Self-esteem:** feeling good about doing something well.
- **A part in the community:** helping others and belonging to something.
- **Living standards**, which come in two kinds. **Material** living standards are the goods and services money can buy, such as food, housing and a phone. **Non-material** living standards are things money can't buy directly, such as friendships, health, safety, free time and a sense of purpose.

Work doesn't give all of this to everyone. Some jobs are tiring, unsafe or dull, and some people can't work or can't find work. That doesn't make anyone worth less.

## Predict: why stay?

```step
stage: predict
insight: "Committing first brings out the idea that money is the only reason people work."
check:
  type: predict
  q: "Mai could earn more at a bigger shop, but she stays at Riverbend Pantry. What is the most likely reason?"
  options:
    - "She gets something besides money, like knowing the families"
    - "She hasn't noticed she could earn more somewhere else"
    - "People always pick the best-paid job, so she must be wrong"
    - "Part-time work isn't real work, so the pay doesn't matter"
  actual: "Mai likes knowing the families and feels part of the community. Those are reasons to work beyond income. She is trading some money for them."
```

## Try: three people, many reasons

```step
stage: run
insight: "Matching each reason to evidence from three people shows how many reasons there are."
check:
  type: match
  q: "Match each reason for working to the evidence from a Riverbend person."
  pairs:
    - ["Earning an income", "Rosa pays her mortgage and bills from what her car yard earns"]
    - ["Identity", "Rosa says, 'This yard is mine. It's who I am.'"]
    - ["Self-esteem", "The coach is proud when her team finally learns to pass under pressure"]
    - ["A part in the community", "Mai knows most of the families who shop at the pantry by name"]
    - ["Non-material living standards", "The coach's closest friends are the other parents at the club"]
```

## Worked example: only for money?

```step
stage: investigate
insight: "Nib's planted mistake is that people only work for money. Material and non-material living standards give students the words for what else work provides."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining why people in Riverbend work. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: work-only-for-money
      explain: "Line 3: income is one reason, not the only one. Mai stays for the community, and the coach volunteers for pride, friendships and the team. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "The coach isn't paid. What does she get from coaching?"
        options: ["Pride, friends and a part in the club", "Nothing, because she isn't paid", "Just a way to fill her free time", "Only tiredness and lost weekends"]
        answer: 0
        feedback:
          - null
          - "She isn't paid, but she still gets something from it."
          - "It does more than fill time: pride, friends, belonging."
          - "It can be tiring, but she gets other things too."
        explain: "She gets things money can't buy. That is why people volunteer."
  - check:
      type: question
      q: "Which of these is a non-material living standard?"
      options:
        - "Having good friends at work"
        - "Being able to afford a new phone"
        - "Paying the rent on time"
        - "Buying groceries for the week"
      answer: 0
      feedback:
        - null
        - "A phone is a good that money buys, so it's material."
        - "Rent pays for housing, which money buys, so it's material."
        - "Groceries are goods money buys, so they're material."
      explain: "Friendships can't be bought. They are part of non-material living standards."
  - check:
      type: question
      q: "Rosa says, 'This yard is mine. It's who I am.' Which reason for working is she describing?"
      options:
        - "Identity: the work is part of how she sees herself"
        - "Self-esteem, because she earns a high income"
        - "Material living standards, because the yard is a building"
        - "Earning an income, because she owns a business"
      answer: 0
      feedback:
        - null
        - "Self-esteem is feeling good about doing something well. It doesn't depend on income, and she's talking about who she is."
        - "She's talking about who she is, not about owning a building."
        - "She does earn an income, but here she's talking about who she is."
      explain: "When work is part of how someone sees themselves, it adds to their identity."
```

### Find Nib's mistake

```worked
\text{Mai} :: Earns a wage. Stays for the community and the families she knows.
\text{The coach} :: Earns nothing. Gets pride, friendships and a part in the club.
\text{Rosa} :: Earns a profit. The yard is also part of who she is.
\text{So} :: Income is one reason. Identity, self-esteem, community and non-material living standards are others.
```

Now: where does Nib go wrong?

### Material or non-material?

### Rosa's yard

## Vary: material or non-material?

```step
stage: modify
insight: "Sorting new examples makes the material and non-material distinction usable."
tasks:
  - check:
      type: sort
      q: "Sort each thing work can bring into material or non-material living standards."
      options: ["Material", "Non-material"]
      items:
        - ["Money to pay for a family holiday", "Material", "A holiday is a service money buys."]
        - ["Feeling that your work is useful", "Non-material", "A sense of purpose can't be bought."]
        - ["A better car", "Material", "A car is a good money buys."]
        - ["Friends you made at work", "Non-material", "Friendships can't be bought."]
        - ["Learning new skills you're proud of", "Non-material", "Pride and growth come from the work, not from spending."]
  - check:
      type: question
      q: "Dev says: 'Everyone who works enjoys their job.' What is the best reply?"
      options:
        - "Work brings many people more than money, but not everyone enjoys it"
        - "Dev is right: if you didn't enjoy a job, you wouldn't do it"
        - "Nobody enjoys work, so everyone only does it for the money"
        - "Only people who volunteer really enjoy their work"
      answer: 0
      feedback:
        - null
        - "Many people have to work to pay for food and housing, whether they enjoy it or not."
        - "Mai and the coach show that people do get things from work besides money."
        - "Plenty of paid workers enjoy their work too, like Rosa."
      explain: "Work can add to identity and wellbeing, but it doesn't for everyone."
```

### Sort the living standards

### Dev's view

## Practise: name the reason

```step
stage: practise
insight: "Quick cases help students spot each reason by its evidence."
tasks:
  - check:
      type: question
      q: "Leo says he loves seeing a student's face when a laptop he fixed starts up. Which reason for working is that?"
      options:
        - "Self-esteem: he feels good about doing a job well"
        - "Material living standards: what his pay can buy"
        - "Earning an income: the customer pays for the fix"
        - "Identity: owning a business is who he is"
      answer: 0
      feedback:
        - null
        - "That feeling can't be bought, so it isn't material."
        - "He's not talking about money here."
        - "Owning a business might be part of his identity, but here he's talking about doing a job well."
      explain: "Feeling good about doing something well is self-esteem."
  - check:
      type: question
      q: "A volunteer firefighter isn't paid, but trains every week. Which is the strongest reason?"
      options:
        - "To help keep the community safe, and be part of the brigade"
        - "To earn an income"
        - "To raise their material living standards"
        - "Because volunteers can't find paid work"
      answer: 0
      feedback:
        - null
        - "Volunteers aren't paid, so it isn't income."
        - "Volunteering doesn't buy them goods or services."
        - "Many volunteers have paid jobs too."
      explain: "Helping the community and belonging to a group are reasons to work beyond income."
```

### Leo's laptops

### The volunteer firefighter

## Make: why does this person work?

```step
stage: make
insight: "Explaining two reasons beyond income for one person, with the terms, is what the standard asks for."
check:
  type: reasoning
  q: "Choose a Riverbend person (Mai, the coach, Rosa or Leo). Explain two reasons they work beyond earning an income. Use at least two of these terms: identity, self-esteem, community, material, non-material."
  paper: true
  models:
    - title: "A strong answer"
      text: "The coach isn't paid, so income isn't her reason. She gets self-esteem from seeing her team improve, and her friendships at the club add to her non-material living standards."
    - title: "A different answer that also works"
      text: "Rosa earns an income from her yard, but she also says it's who she is, so it adds to her identity. She knows her customers and staff well, which gives her a part in the community."
  criteria: ["I gave two reasons beyond income.", "I used at least two of the terms correctly.", "I backed each reason with something the person said or did."]
```

There is more than one good answer. Compare yours with the models, then talk it over with a partner.

## Typical: Mai's trade-off

```step
stage: make
tier: typical
insight: "Mai's choice links reasons for working back to opportunity cost: she gives up some material living standards for non-material ones."
check:
  type: question
  q: "Mai could earn $100 more a week at a bigger shop, but she stays at the pantry because she values knowing the families. What is the opportunity cost of her choice?"
  options:
    - "The job at the bigger shop, with its extra $100 a week"
    - "Nothing, because she is happy with her choice"
    - "The families she helps at the pantry each week"
    - "Her whole wage from working at the pantry"
  answer: 0
  feedback:
    - null
    - "Being happy with a choice doesn't mean nothing was given up."
    - "She keeps the families. They are what she chose."
    - "She still earns her pantry wage. What she gives up is the extra she could have had."
  explain: "Her next best choice was the job at the bigger shop, with the extra $100 a week and whatever else came with it. Mai trades some material living standards for non-material ones (community and purpose)."
```

## Wider: reasons across a working life

```step
stage: make
tier: wider
insight: "The reasons people work can change as their lives change, which shows the reasons are a mix, not a fixed list."
check:
  type: match
  q: "Three made-up Riverbend people at different stages of life. Match each to the reason that seems strongest for them right now."
  pairs:
    - ["Sam, 18, saving for his first car", "Earning an income"]
    - ["Rosa, 45, who built her car yard over twenty years", "Identity"]
    - ["Mr Ng, 72, retired, who volunteers at the library", "A part in the community"]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
