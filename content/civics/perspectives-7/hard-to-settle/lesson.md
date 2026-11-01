---
order: 3
unit: perspectives
title: Why it's hard to decide
node: AC9HC7S03 n3
assumes: [AC9HC7S03 n2]
summary: "A civic decision is hard when good values pull in different directions, people's interests compete, or the evidence isn't in yet. Counting supporters doesn't settle it on its own, because the people who lose out still lose out. A council can trial an idea, change it to meet a need, or find a middle way, and some people may still be unhappy."
language: maths
hook: "Most people in the survey support the market. So why can't the council just say yes?"
---
Wattle Creek council (made up, like everyone in these sources) now has to decide about the Saturday market. You've read the sources and worked out why views differ. This lesson asks why the decision is still hard.

A civic decision is hard to settle when:

- **Values compete**: good things pull in different directions, such as a lively street and easy access for people who need to park.
- **Interests compete**: some people gain and others lose, such as growers who get new customers and traders who lose drive-in sales.
- **Evidence is missing**: no one knows yet what will happen, such as whether sales go up or down.

A quick reminder of the sources: the **council** proposes a three-month trial; the **Gazette** wants it made permanent; the **Main Street Traders** want a loading zone and their sales checked; **Ines**, who uses a wheelchair, likes the idea but needs parking near the chemist; the **survey** found 110 of 200 residents in support; the **bus** stop moves to River Road.

## Predict: does the vote settle it?

```step
stage: predict
insight: "Asking whether majority support settles the decision brings out Nib's idea before the lesson looks at who loses out."
check:
  type: predict
  q: "110 of 200 people in the survey support the market. Is the council's decision now easy?"
  options:
    - "No, people who lose out still have needs to weigh"
    - "Yes, most people support it, so that settles it"
    - "No, the council should do what the Gazette says"
    - "Yes, because surveys always show the right answer"
  actual: "No. Support matters, but it doesn't make Ines's parking problem, the traders' deliveries or the bus stop go away. The council still has to weigh competing values and interests, and some evidence (like what happens to sales) isn't in yet."
```

## Try: what makes each part hard?

```step
stage: run
insight: "Matching each challenge to what makes it hard gives students the three ideas before the worked example."
check:
  type: match
  q: "Match each part of the decision to what makes it hard."
  pairs:
    - ["A lively street versus easy access for people who need to park", "Competing values"]
    - ["Growers could gain customers while some traders lose drive-in sales", "Competing interests"]
    - ["No one knows yet whether traders' sales go up or down", "Missing evidence"]
```

## Worked example: Ines and the market

```step
stage: investigate
insight: "Working through the access problem shows a values trade-off that counting supporters can't settle, and catches Nib's slip."
tasks:
  - check:
      type: question
      q: "Why is Ines's parking problem hard for the council, even though most people support the market?"
      options:
        - "A car-free street and nearby parking pull different ways"
        - "Ines doesn't really like the idea of a market"
        - "The survey shows that parking doesn't matter to anyone"
        - "Councils aren't allowed to think about parking"
      answer: 0
      feedback:
        - null
        - "Ines says she likes the idea. Her problem is getting to it."
        - "The survey asked about the market, not about parking. It can't show that."
        - "Parking and access are a normal part of council decisions."
      explain: "Closing the street and keeping nearby accessible parking pull in different directions. Majority support doesn't solve that; a change to the plan might."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is advising the council. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: majority-settles-it
      explain: "Line 3: majority support doesn't remove the problem. Ines still can't reach the shops, and the traders still need deliveries. The council has to weigh those too."
    smaller:
      check:
        type: question
        q: "If most people want the market, what happens to Ines's problem getting to the shops?"
        options:
          - "It's still there until the council changes something"
          - "It goes away, because most people voted yes"
          - "It's Ines's problem, not the council's"
        answer: 0
        explain: "Support for the market doesn't solve a practical problem. The council has to do something about it."
        feedback:
          - null
          - "A vote doesn't move a parking space closer."
          - "A council decides for everyone, including people who lose out."
```

```worked
\text{The challenge} :: A lively, car-free street versus nearby accessible parking.
\text{Why it's hard} :: Both are good values, and they pull in different directions.
\text{A possible response} :: Keep an accessible parking zone at one end of the market.
\text{Who might still be unhappy} :: Anyone who wanted the whole street car-free, or who still can't park nearby.
```

### Why is it hard?

### Find Nib's mistake

## Vary: which challenge does it address?

```step
stage: modify
insight: "Matching each possible council response to the challenge it addresses shows that responses can help without settling everything."
check:
  type: sort
  q: "Which challenge does each possible council response mainly address?"
  options: ["Competing values", "Competing interests", "Missing evidence"]
  items:
    - ["Keep an accessible parking zone at one end of the market", "Competing values", "It tries to keep both a lively street and access."]
    - ["Allow deliveries before 7 am, before the street closes", "Competing interests", "It reduces what the traders lose."]
    - ["Run a three-month trial and check traders' sales", "Missing evidence", "A trial finds out what actually happens."]
    - ["Let shops put stalls outside their own doors during the market", "Competing interests", "It gives traders a way to gain from the crowds, not just lose drive-in customers."]
```

## Practise: no perfect answer

```step
stage: practise
insight: "Choosing what a compromise can and can't do checks the integration idea."
tasks:
  - check:
      type: question
      q: "The council keeps an accessible parking zone and allows early deliveries. Is everyone now happy?"
      options:
        - "Probably not: some may still lose out"
        - "Yes, a compromise always makes everyone happy"
        - "Yes, because the council made the decision"
        - "No, so the council should give up on the market"
      answer: 0
      feedback:
        - null
        - "A compromise gives each side some of what it wants, rather than all of it."
        - "A council's decision isn't the same as everyone agreeing."
        - "Some people being unhappy is normal in a civic decision. It isn't a reason on its own to drop the idea."
      explain: "A compromise can reduce the problems without removing them. Some people may still lose out, which is part of why civic decisions are hard."
  - check:
      type: question
      q: "Why might a three-month trial help the council?"
      options:
        - "It gives evidence about what actually happens"
        - "It means the council never has to decide"
        - "It proves the Gazette was right all along"
        - "It stops anyone disagreeing during the trial"
      answer: 0
      feedback:
        - null
        - "A trial delays the final decision, but the council still has to make one."
        - "The trial might support the Gazette's view, or it might not. That's the point of checking."
        - "People can still disagree. The trial gives them evidence to argue about."
      explain: "A trial fills in missing evidence, such as what happens to sales and how people get there."
```

### Is everyone happy?

### Why a trial?

## Make: one challenge, one response

```step
stage: make
insight: "Explaining one challenge, why it's hard and a response with its cost shows the student can put the whole course to work."
check:
  type: reflect
  text: "In my own book I described one challenge in the Wattle Creek decision, why it is hard (values, interests or missing evidence), one way the council might respond, and who might still be unhappy. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what a trial can't tell you

```step
stage: make
tier: typical
insight: "Seeing what a trial can't settle separates questions of fact from questions of value."
check:
  type: question
  q: "The trial shows traders' sales went up. What can't that tell the council?"
  options:
    - "Whether a lively street matters more than easy parking"
    - "Whether traders' sales went up during the trial"
    - "Whether shoppers came to Main Street on Saturdays"
    - "Whether the trial ran for three months"
  answer: 0
  feedback:
    - null
    - "That's exactly what the trial measured."
    - "Sales going up suggests people came. The trial can show that."
    - "That's a fact about the trial itself."
  explain: "A trial can answer questions of fact. Which values matter most is a question people still have to weigh."
```

## Wider: should the market go ahead?

```step
stage: make
tier: wider
insight: "The decision itself is a values question, so it is a discussion with no marked answer."
check:
  type: reasoning
  q: "Should Wattle Creek go ahead with the Saturday market? Give your view, the strongest reason on the other side, and what you would change to answer that reason."
  paper: true
  models:
    - title: "One answer"
      text: "Yes, with changes. The strongest reason on the other side is access for people like Ines. I'd keep an accessible parking zone near the chemist and let the bus stop stay nearby."
    - title: "A different answer"
      text: "Not yet. The strongest reason on the other side is that most people in the survey support it. But I'd want the trial results on traders' sales first, and a plan for deliveries, before making it permanent."
  criteria:
    - "I gave my view and a reason."
    - "I stated the strongest reason on the other side fairly."
    - "I suggested a change that answers it."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
