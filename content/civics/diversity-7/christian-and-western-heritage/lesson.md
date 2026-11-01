---
order: 2
unit: diversity
title: Christian and Western heritage
node: AC9HC7K04 n2
assumes: [AC9HC7K04 n1]
summary: "Some features of Australia's political and legal systems come from its Christian and Western (British) heritage: Parliament's daily prayers, Christmas and Easter public holidays, the oath or affirmation, the common law, Parliament on the Westminster model and trial by jury. A tradition is not an official religion. People weigh this heritage's influence differently, and different communities, including First Nations communities, have experienced it differently."
language: maths
hook: "Federal Parliament starts each sitting day with a prayer. Does that make Australia's government religious?"
---
When the British colonies became Australia, they brought ideas and traditions with them. Some came from **Christian heritage**, the Christian religion that most of the colonists followed. Others came from **Western heritage**, the wider British and European traditions of government and law.

Some of that heritage is still part of Australia's political and legal systems. A tradition that comes from a religion is different from an official religion, though. Australia's government is secular, as you saw in the last lesson.

People weigh this heritage differently. Some see it as a main foundation of Australia's laws and values; others put more weight on the other origins you'll meet in this course. This heritage has also been experienced differently by different communities, including First Nations communities. Your teacher may take this up with local material.

In this lesson, the class and its table are made up. The traditions are real.

## Predict: a prayer and a secular government?

```step
stage: predict
insight: "Asking about Parliament's prayers brings out the idea that a religious tradition means an official religion, before the lesson separates the two."
check:
  type: predict
  q: "The Senate and the House of Representatives each start their sitting day with a prayer. Does that mean Australia has an official religion?"
  options:
    - "No, it's a tradition, and no one has to take part"
    - "Yes, a prayer in Parliament makes the religion official"
    - "Yes, but only on the days that Parliament sits"
    - "No, because the prayers stopped many years ago"
  actual: "No. The prayers are a tradition in each chamber's own rules, and members don't have to be there or take part. The Commonwealth still can't set up a religion or make anyone practise one (section 116). The prayers do still happen."
```

## Try: where did it come from?

```step
stage: run
insight: "Sorting real features by where they came from shows the two strands of heritage before the worked example."
check:
  type: sort
  q: "Did each feature of Australian public life come mainly from Christian heritage, or from Western (British) traditions of government and law?"
  options: ["Christian heritage", "Western (British) traditions"]
  items:
    - ["Parliament's prayers at the start of each sitting day", "Christian heritage", "The prayers come from Christian tradition."]
    - ["Christmas Day and Easter as public holidays", "Christian heritage", "Both are Christian festivals that became public holidays."]
    - ["Common law, built up from judges' decisions", "Western (British) traditions", "Common law came from England, as you saw in Law and justice."]
    - ["A Parliament on the British (Westminster) model", "Western (British) traditions", "Responsible government came from Britain's Parliament."]
    - ["Trial by jury in serious criminal cases", "Western (British) traditions", "Juries came to Australia with English law."]
```

## Worked example: a tradition, not a rule

```step
stage: investigate
insight: "Looking at the oath or affirmation shows heritage shaping a tradition while the law still treats every belief the same, and catches Nib's mix-up."
tasks:
  - check:
      type: question
      q: "New members of federal Parliament can take an oath (a promise that names God) or an affirmation (the same promise without naming God). Why does the Constitution offer both?"
      options:
        - "So members of any belief, or none, can make the same promise"
        - "So only Christian members can name God when they make the promise"
        - "Because the oath is for senators and the affirmation is for the House"
        - "Because the affirmation is a weaker promise for less important members"
      answer: 0
      feedback:
        - null
        - "Members of any religion can take the oath. The affirmation is there for anyone who prefers not to name God."
        - "Both houses use both. Each member chooses."
        - "It is the same promise, just without naming God. It counts exactly the same."
      explain: "The oath comes from Christian tradition. The affirmation lets every member make the same promise, whatever they believe."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is looking at the made-up class's table. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: heritage-means-official-religion
      explain: "Line 3: a tradition that comes from a religion is not an official religion. Section 116 stops the Commonwealth setting one up, and no one has to take part in the prayers."
    smaller:
      check:
        type: question
        q: "Does a tradition, like a prayer at the start of the day, make a law that people must follow a religion?"
        options:
          - "No, a tradition isn't a law"
          - "Yes, it becomes a law for everyone"
          - "Yes, but only for members of Parliament"
        answer: 0
        explain: "A tradition is a practice, not a law. People of any belief, or none, are free to take part or not."
        feedback:
          - null
          - "Laws are passed by Parliament as bills. A tradition is a practice, not a law."
          - "Members don't have to take part in the prayers either."
```

```worked
\text{Prayers} :: A tradition from Christian heritage; no one has to take part.
\text{Oath or affirmation} :: Both are allowed, so every member can make the same promise.
\text{Section 116} :: The Commonwealth still can't set up a religion or force anyone to practise one.
```

### Oath or affirmation?

### Find Nib's mistake

## Practise: heritage and the law today

```step
stage: practise
insight: "Telling heritage apart from a requirement checks the lesson's one idea in new made-up cases."
tasks:
  - check:
      type: question
      q: "Christmas Day is a public holiday everywhere in Australia. What does that show?"
      options:
        - "A Christian festival became a holiday everyone gets"
        - "Everyone in Australia has to celebrate Christmas"
        - "Only Christians are allowed the day off work"
        - "The government chose Christianity as the official religion"
      answer: 0
      feedback:
        - null
        - "A public holiday is a day off, not a rule about how to spend it or what to believe."
        - "Public holidays apply to everyone, whatever they believe."
        - "A public holiday doesn't set up a religion. Section 116 stops that."
      explain: "The holiday comes from Christian heritage, but it is a day off for everyone, and no one has to celebrate it."
  - check:
      type: question
      q: "Which of these comes from Western (British) traditions of law, not from a religion?"
      options:
        - "Courts following earlier decisions (precedent)"
        - "Parliament's prayers at the start of the day"
        - "Christmas Day as a public holiday"
        - "The words of the oath that name God"
      answer: 0
      feedback:
        - null
        - "The prayers come from Christian tradition."
        - "Christmas is a Christian festival."
        - "The oath's words come from Christian tradition."
      explain: "Precedent and the common law came from English law, which is part of Western heritage."
```

### A public holiday

### Which tradition?

## Make: where did it come from?

```step
stage: make
insight: "A two-column table of examples and their origins shows the student can use the idea, not just recall it."
check:
  type: reflect
  text: "In my own book I made a table of three features of Australian public life, said whether each came from Christian heritage or Western (British) traditions, and explained why a tradition isn't an official religion. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: why offer an affirmation?

```step
stage: make
tier: typical
insight: "The affirmation shows how a system with Christian heritage makes room for people of any belief."
check:
  type: question
  q: "What does the choice of oath or affirmation show about Australia's democracy?"
  options:
    - "It keeps a tradition while treating every belief the same"
    - "It shows the oath is no longer used by anyone"
    - "It means members must say which religion they follow"
    - "It means Parliament has to have a member of every religion"
  answer: 0
  feedback:
    - null
    - "Many members still choose the oath. Both are in use."
    - "Members choose a form of words. They don't have to name a religion."
    - "Members are elected by voters, whatever their beliefs. There's no religious quota."
  explain: "The oath keeps a tradition from Christian heritage; the affirmation means no one has to name God to serve."
```

## Wider: how much should heritage shape public life?

```step
stage: make
tier: wider
insight: "How much heritage should shape public life is a values question, so it is a discussion with no marked answer."
check:
  type: reasoning
  q: "Pick one tradition from this lesson. Give one reason some people want to keep it, and one reason some people want to change it."
  paper: true
  models:
    - title: "One answer"
      text: "Parliament's prayers: some people want to keep them because they are a long tradition that many members value. Others would like a moment of reflection instead, so that members of every belief feel included."
    - title: "A different answer"
      text: "Christmas and Easter holidays: some people want to keep them because they are part of Australia's history and many families celebrate them. Others suggest people could choose some of their own holidays, so other festivals are recognised too."
  criteria:
    - "I gave a reason on each side."
    - "I described what people think, without saying who is right."
    - "I know people of good faith disagree about this."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
