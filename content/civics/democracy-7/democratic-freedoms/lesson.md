---
order: 1
unit: freedoms
title: The five democratic freedoms
node: AC9HC7K02 n1
assumes: [AC9HC7K01]
summary: "Five democratic freedoms (speech, association, assembly, religion and movement) let people share ideas, join groups, meet peacefully, follow their beliefs and move around, so they can take part in democracy between elections, not only vote."
language: maths
hook: "Imagine holding an election where nobody is allowed to criticise the government, join a group, or hold a public meeting beforehand. Would that vote still be a real democracy?"
---
In *How Australia is governed*, you saw how voters elect members of Parliament and how ministers answer to Parliament.

For elections and accountability to mean anything, citizens need to be able to share ideas, organise, and question decision-makers between elections too. Five **democratic freedoms** make that possible:

- **Freedom of speech:** being able to express opinions, discuss public issues, and question or criticise governments without fear.
- **Freedom of association:** being able to form or join groups, such as community clubs, unions, charities or political parties.
- **Freedom of assembly:** being able to gather peacefully in public places for meetings, rallies or marches.
- **Freedom of religion:** being able to follow a religion, worship together, or hold no religion at all.
- **Freedom of movement:** being able to travel freely within Australia, live where you choose, and leave and return to the country.

## Predict: why do freedoms matter for voting?

```step
stage: predict
insight: "Committing first shows that voting only works as a democratic choice when citizens are free to speak, meet and organise."
check:
  type: predict
  q: "Why are freedoms like speech, association and assembly needed for a democracy to work?"
  options:
    - "Voters can hear different ideas and organise before they choose"
    - "They matter for private life, but voting is what makes a democracy"
    - "They mostly protect members of Parliament when they debate"
    - "They are needed only during an election campaign"
  actual: "Without the freedom to speak, join groups and gather peacefully, voters could not hear competing ideas or hold representatives to account between elections."
```

## Try: match each freedom to what it lets people do

```step
stage: run
insight: "Matching each of the five freedoms to a concrete action separates the five terms clearly."
check:
  type: match
  q: "Match each democratic freedom to what it allows people to do."
  pairs:
    - ["Freedom of speech", "Write to the local paper to question a council plan"]
    - ["Freedom of association", "Join a river-care group, a union or a political party"]
    - ["Freedom of assembly", "Gather peacefully in a park to ask for a safer crossing"]
    - ["Freedom of religion", "Go to a place of worship, or follow no religion at all"]
    - ["Freedom of movement", "Move to another state for work, or travel to meet an MP"]
```

Notice how **association** and **assembly** work together but are not the same thing:
- **Association** is belonging to a group or organisation (even when you are sitting at home).
- **Assembly** is physically gathering together in one place (such as a peaceful rally or public meeting).

## Worked example: how freedoms support participation

```step
stage: investigate
insight: "Tracing how residents use several freedoms together to fix a local problem shows the five freedoms as a connected set, and catches Nib's election-day-only mistake."
tasks:
  - check:
      type: question
      q: "In the made-up town of Wattle Creek, residents want the state government to build a pedestrian bridge over a busy road near the high school. They form the 'Wattle Creek Safe Crossing Group', hold a Saturday rally in the park, and speak to local reporters. Which three freedoms are they using?"
      options:
        - "Association (the group), assembly (the rally) and speech (talking to reporters)"
        - "Assembly (the group), association (the rally) and speech (talking to reporters)"
        - "Only speech, because forming a group and rallying are kinds of speaking"
        - "Association (the group), speech (the rally) and movement (meeting reporters)"
      answer: 0
      feedback:
        - null
        - "That swaps association and assembly. Association is forming or joining the group; assembly is gathering in the park."
        - "Speaking to reporters is speech. But forming a group is association, and gathering in the park is assembly."
        - "Gathering together in the park is assembly. Movement is about travelling and where you live."
      explain: "Active participation usually combines several freedoms at once: joining together (association), meeting in public (assembly), and making the case (speech)."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how democracy works in Australia. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: freedoms-separate-from-democracy
      explain: "Line 3: Nib thinks democracy only happens at the ballot box on election day. Without the five freedoms to debate ideas, form groups and gather peacefully between elections, voters could not make an informed choice or hold governments to account."
    smaller:
      check:
        type: question
        q: "If citizens were banned from discussing government decisions or forming political groups, could they still hold the government to account between elections?"
        options:
          - "No, they could not share information or organise to ask for change"
          - "Yes, because voting at the next election is enough"
          - "Yes, because members of Parliament can still speak for them"
        answer: 0
        explain: "Democratic freedoms are what let citizens question decisions and organise peacefully between elections."
        feedback:
          - null
          - "Voting matters, but without free discussion voters would choose without hearing other views, and nobody could question decisions until then."
          - "MPs speak in Parliament, but citizens need to be free to tell them what they think."
  - check:
      type: question
      q: "What is the difference between freedom of association and freedom of assembly?"
      options:
        - "Association is belonging to a group; assembly is gathering in one place"
        - "Association is gathering in one place; assembly is belonging to a group"
        - "Association is for political parties; assembly is for other groups"
        - "There is no difference: both mean meeting up with other people"
      answer: 0
      feedback:
        - null
        - "That swaps the two terms: association is belonging to an ongoing group, while assembly is physically gathering together."
        - "Association covers any lawful group: clubs, unions, charities and parties."
        - "You belong to a group even when members are at home in different towns. Assembly is when people gather together."
      explain: "You use freedom of association when you join a club or union; you use freedom of assembly when people gather at a peaceful meeting or march."
```

### The Wattle Creek bridge campaign

```worked
\text{Join a group} :: Residents form the Wattle Creek Safe Crossing Group -> Freedom of association.
\text{Meet in public} :: 200 people gather peacefully in the park on Saturday -> Freedom of assembly.
\text{Argue the case} :: Spokespeople explain the danger on local radio -> Freedom of speech.
\text{Travel to Parliament} :: Two members travel to the state capital to hand in their report -> Freedom of movement.
```

Now: which freedoms did the residents use, where did Nib go wrong, and how do you tell association from assembly?

### Find Nib's mistake

### Association vs assembly

## Vary: which freedom is at work?

```step
stage: modify
insight: "Sorting everyday civic examples across all five freedoms builds confidence with the whole set."
check:
  type: sort
  q: "Which democratic freedom is mainly shown in each made-up example?"
  options: ["Speech", "Association", "Assembly", "Religion", "Movement"]
  items:
    - ["Priya publishes a blog post arguing that bus fares for students should be lower", "Speech", "Expressing a political or community view in public is freedom of speech."]
    - ["Forty neighbours become paid-up members of the Valley Bushcare Society", "Association", "Joining a formal community organisation is freedom of association."]
    - ["Townspeople hold a quiet candlelight vigil outside the town hall", "Assembly", "Gathering peacefully in a public space is freedom of assembly."]
    - ["A family runs a free kitchen as part of their faith; their neighbour follows no religion", "Religion", "Practising a faith, or none, is freedom of religion."]
    - ["Leo moves from Adelaide to Brisbane to take up an apprenticeship", "Movement", "Moving freely between states is freedom of movement."]
```

## Practise: explain how a freedom supports participation

```step
stage: practise
insight: "Connecting a named freedom to how it helps citizens participate in a democracy."
tasks:
  - check:
      type: question
      q: "How does freedom of religion support a peaceful, inclusive democracy?"
      options:
        - "People of any faith, or none, can take part in public life as equals"
        - "It lets the government choose one religion for everyone to respect"
        - "It protects people who follow a religion, but not people who follow none"
        - "It lets people skip laws that clash with their beliefs"
      answer: 0
      feedback:
        - null
        - "The Constitution stops the Commonwealth from setting up an official national religion."
        - "Freedom of religion also covers the freedom to follow no religion."
        - "Everyone still has to obey the law. Lesson 2 looks at these limits."
      explain: "Freedom of religion ensures people are not excluded from civic life because of their faith or lack of faith."
  - check:
      type: question
      q: "How does freedom of movement help democracy in Australia?"
      options:
        - "People can travel to meet others, work or speak to their MP anywhere"
        - "It only protects trucks carrying goods across state borders"
        - "It only covers travel overseas with a passport"
        - "It only matters for people who move house"
      answer: 0
      feedback:
        - null
        - "Freedom of movement covers people travelling between states, not only goods."
        - "It also covers moving and living freely inside Australia."
        - "It covers short trips too, such as travelling to a meeting or to Canberra."
      explain: "Being one country means people can move freely between states and travel to take part in national life."
```

### Freedom of religion

### Freedom of movement

## Make: the five freedoms in your book

```step
stage: make
insight: "Naming all five freedoms in your own words with one participation example locks in the set before Lesson 2 looks at their legal limits."
check:
  type: reflect
  text: "In my own book I listed the five democratic freedoms (speech, association, assembly, religion, movement), explained in one sentence what each one means, and gave a concrete example of how one of them helps citizens take part in Australia's democracy. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how are freedoms protected in Australia?

```step
stage: make
tier: typical
insight: "Australia protects democratic freedoms through a mix of the Constitution, laws made by parliaments and decisions made by courts, not one list."
check:
  type: question
  q: "Where do protections for democratic freedoms in Australia come from?"
  options:
    - "A mix of the Constitution, laws made by parliaments, and court decisions"
    - "A list of all five freedoms written out in the Constitution"
    - "Only laws made by parliaments, with nothing in the Constitution"
    - "Only court decisions, because parliaments cannot make laws about rights"
  answer: 0
  feedback:
    - null
    - "Some countries have a list like this, called a bill of rights. Australia's Constitution protects only a few things, such as religion."
    - "Laws made by parliaments do a lot, but the Constitution and court decisions also protect some freedoms."
    - "Parliaments make many laws that protect rights, alongside court decisions."
  explain: "Australia's freedoms are protected by a few rules in the Constitution (the High Court has also found that it limits laws that stop people discussing politics), by laws made by parliaments, and by court decisions."
```

## Wider: comparing with a Bill of Rights

```step
stage: make
tier: wider
insight: "Comparing Australia's approach with countries that have a single constitutional Bill of Rights shows two different ways democracies protect freedoms."
check:
  type: question
  q: "The United States lists speech, assembly and religion in its Constitution. Australia's Constitution has no list like that, called a bill of rights. What is one result?"
  options:
    - "In Australia, many protections are set and changed by ordinary laws"
    - "Australians have no protection when they talk about politics"
    - "Australian courts cannot decide cases about freedoms"
    - "In the United States, listed freedoms have no legal limits"
  answer: 0
  feedback:
    - null
    - "The High Court has found that the Constitution limits laws that stop political discussion, and ordinary laws protect other freedoms."
    - "Australian courts decide cases about freedoms, including under the Constitution."
    - "US courts also set limits, for example for safety or defamation."
  explain: "Both countries protect democratic freedoms. Australia relies more on laws made by parliaments and on court decisions."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
