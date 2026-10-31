---
order: 1
unit: law
title: Where our law comes from
node: AC9HC7K03 n1
assumes: [AC9HC7K01]
summary: "Australia's law comes from two places: Acts that Parliament passes, and common law, which judges build up from past decisions that later courts follow (precedent). Both came from Britain. Judges must be independent, so no one can tell them how to decide. The idea that no one is above the law goes back to how people came to read Magna Carta."
language: maths
hook: "A ladder breaks and someone is hurt. No law says exactly what should happen in a case like this one. Who decides, and what do they go on?"
---
Australia's legal system came from Britain. It has two main sources of law:

- **Acts of Parliament**: laws that Parliament debates and passes.
- **Common law**: law that judges have built up over hundreds of years from their decisions in real cases.

When a higher court decides a legal question, lower courts follow that decision in later cases like it. A past decision that later courts follow is called a **precedent**.

In this lesson, the town of Wattle Creek, its people and its businesses are made up. The courts and the ideas are real.

## Predict: who fills the gap?

```step
stage: predict
insight: "Committing to an answer first surfaces the belief that all law is written by Parliament, before the lesson shows judges building law case by case."
check:
  type: predict
  q: "A case reaches a court, and no Act of Parliament covers its exact situation. What does the judge go on?"
  options:
    - "Decisions that higher courts made in earlier cases like it"
    - "Whatever the judge personally feels is fair that day"
    - "The case waits until Parliament passes a new law for it"
    - "The judge asks the government what it would like"
  actual: "The judge looks to earlier decisions in cases like it, especially decisions of higher courts. That body of past decisions is the common law. Judges don't just decide by feel, cases don't wait for Parliament, and the government can't tell a judge what to decide."
```

## Try: match the idea to what it means

```step
stage: run
insight: "Matching the four building blocks gives students the words they need before the worked example puts them together."
check:
  type: match
  q: "Match each part of Australia's legal system to what it means."
  pairs:
    - ["Act of Parliament", "A law that Parliament debates and passes"]
    - ["Common law", "Law built up by judges from decisions in past cases"]
    - ["Precedent", "A past decision that later courts follow in cases like it"]
    - ["Independent judges", "Judges who decide by the law, without orders from the government"]
    - ["Magna Carta", "A 1215 English charter, later read as meaning no one is above the law"]
```

**Magna Carta** was an agreement forced on King John of England in 1215. At the time it protected mainly barons and other "free men", not everyone. Over the centuries people came to read it as meaning that even the ruler must obey the law. That idea, that no one is above the law, is part of what Australia inherited.

## Worked example: Lin's ladder

```step
stage: investigate
insight: "Following one made-up case shows a court using both an Act and a precedent, and catches Nib's belief that judges never make law."
tasks:
  - check:
      type: question
      q: "Lin buys a ladder at Wattle Creek Hardware and it breaks on its first use. Lin takes the shop to the local court. What will the magistrate use to decide the case?"
      options:
        - "Any Act on product safety, plus higher courts' earlier decisions"
        - "Only the Act, because judges must ignore earlier decisions"
        - "Only earlier decisions, because Acts don't apply in court"
        - "Whatever the shop and Lin agree is fair on the day"
      answer: 0
      feedback:
        - null
        - "Judges do use Acts, but they also follow what higher courts decided in cases like this one."
        - "Acts of Parliament do apply in court. The judge uses the Act and the earlier decisions together."
        - "They can settle out of court, but if the case goes ahead the magistrate decides by the law."
      explain: "The magistrate applies any Act that covers the case and follows what higher courts decided in similar cases. Law from Parliament and law from the courts work together."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how Lin's case will be decided. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: only-parliament-makes-law
      explain: "Line 3: judges don't only read out Parliament's laws. Through their decisions in cases, higher courts build up common law, and lower courts must follow it."
    smaller:
      check:
        type: question
        q: "Last year a higher court decided a question about faulty products. A lower court now has a case just like it. Does the lower court have to follow that decision?"
        options:
          - "Yes, a lower court follows a higher court's decision"
          - "No, each judge starts fresh in every case"
          - "Only if Parliament has also passed a law about it"
        answer: 0
        explain: "That is precedent. The higher court's decision guides every lower court in later cases like it."
        feedback:
          - null
          - "Judges don't start from nothing. Following earlier decisions makes the law the same for everyone."
          - "Precedent works even where no Act covers the case. That's how common law fills the gaps."
```

```worked
\text{Lin's ladder breaks} :: Lin takes Wattle Creek Hardware to the local court.
\text{An Act of Parliament} :: The magistrate checks whether a product safety Act covers the case.
\text{Common law} :: The magistrate follows what higher courts decided in earlier cases like it.
\text{Independent judge} :: No minister or Prime Minister can tell the magistrate what to decide.
```

### What will the magistrate use?

### Find Nib's mistake

## Vary: where does each rule come from?

```step
stage: modify
insight: "Sorting rules by where they come from separates law made by Parliament from law built by courts, and rules out orders from the government."
check:
  type: sort
  q: "Where does each one come from? One of them is not allowed at all."
  options: ["Made by Parliament", "Built up by the courts", "Not allowed in Australia"]
  items:
    - ["A road rules Act that sets the speed limit near schools", "Made by Parliament", "Parliament debated and passed it, so it is an Act."]
    - ["A rule that shops must take care their goods are safe, built up from many past cases", "Built up by the courts", "Rules built from judges' decisions over many cases are common law."]
    - ["A lower court following a High Court decision in a similar case", "Built up by the courts", "That is precedent: lower courts follow higher courts."]
    - ["A minister phoning a judge to say how to decide a case", "Not allowed in Australia", "Judges are independent. No minister can tell them how to decide a case."]
    - ["A new law on bike helmets, voted on by both houses", "Made by Parliament", "A bill that both houses pass becomes an Act."]
```

## Practise: two sources, one system

```step
stage: practise
insight: "Explaining where the system came from and why judges stand apart checks the idea beyond Lin's case."
tasks:
  - check:
      type: question
      q: "What does it mean to say Australia's law came from Britain?"
      options:
        - "Our courts use common law and precedent, which began in England"
        - "Britain still passes the laws that Australians have to obey"
        - "Australian courts must check every decision with a British court"
        - "The Constitution is a copy of a law written in Britain in 1215"
      answer: 0
      feedback:
        - null
        - "Australia's own parliaments make its laws. What came from Britain was the way the system works."
        - "Australian courts don't send their decisions to Britain. The High Court has the final say."
        - "Magna Carta is from 1215 and the Constitution from 1901. Australia took ideas from Britain, not a copy."
      explain: "The common law, precedent and the idea of independent judges all came to Australia from England with the British colonies."
  - check:
      type: question
      q: "Why does it matter that judges are independent of the government?"
      options:
        - "So the government has to obey the law like everyone else"
        - "So judges can make any new law they like in each case"
        - "So the government can pick which cases go to court"
        - "So judges never have to follow earlier decisions"
      answer: 0
      feedback:
        - null
        - "Judges are bound by Acts and precedent. Independence means no one can order them, not that they can do anything."
        - "Independence works the other way: the government can't control what happens in court."
        - "Independent judges still follow precedent. Independence is about not taking orders from the government."
      explain: "If the government could tell judges what to decide, it could put itself above the law. Independent judges can rule against the government when it breaks the law."
```

### Where did it come from?

### Why independent judges?

## Make: two sources of law

```step
stage: make
insight: "Explaining both sources and why judges must be independent pulls the lesson together in the student's own words."
check:
  type: reflect
  text: "In my own book I explained the two sources of Australia's law with one example of each, and one reason judges must be independent. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use a made-up example for each source, like Lin's ladder. Your partner or teacher reads it.

## Typical: following the court above

```step
stage: make
tier: typical
insight: "Ordering the courts shows why precedent flows down: lower courts follow higher ones."
check:
  type: parsons
  code: "working.txt#up"
  text: "Put these courts in order from the one whose decisions every Australian court follows, down to a local court. This is a list of ideas, not computer code."
  explain: "The High Court is at the top, then a state's Supreme Court, then (in most states) a middle court, then the local court. Each court follows the decisions of the courts above it."
```

In most states there is a middle level of court, called the District Court or the County Court. Tasmania, the ACT and the Northern Territory don't have one.

## Wider: the last word

```step
stage: make
tier: wider
insight: "The end of appeals to London shows Australian common law becoming its own."
check:
  type: question
  q: "Until 1986, some cases from Australia's state courts could still be appealed to a court in London. What changed after that?"
  options:
    - "No case can go to London; the High Court has the final say"
    - "Australian courts must still follow every new decision made in Britain"
    - "Australia stopped using common law and now has only Acts of Parliament"
    - "Each state's Supreme Court now has the final say for that state"
  answer: 0
  feedback:
    - null
    - "Australian courts may look at British decisions for ideas, but they don't have to follow them."
    - "Common law is still a big part of Australian law. What changed is who has the last word."
    - "A Supreme Court's decision can still be appealed to the High Court, if the High Court agrees to hear it."
  explain: "Since the Australia Acts of 1986, no Australian case can be appealed to London. The High Court is the final court of appeal, so Australian common law can grow in its own way."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
