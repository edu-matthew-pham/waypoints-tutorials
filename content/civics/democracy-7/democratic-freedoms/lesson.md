---
order: 1
unit: freedoms
title: The five democratic freedoms
node: AC9HC7K02 n1
assumes: [AC9HC7K01]
summary: "Australia's democracy relies on five key freedoms: freedom of speech, association, assembly, religion and movement. Together they let people share ideas, join groups, meet peacefully, follow their beliefs and move around the country so citizens can take an active part in democratic life, not just vote once every few years."
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
    - "They let people hear different arguments, organise with others, and raise issues with representatives before and between elections"
    - "They replace elections so citizens never need to vote"
    - "They only apply to members of Parliament, not to ordinary citizens"
    - "They mean nobody ever disagrees about anything"
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
    - ["Freedom of speech", "Write a letter to a local newspaper or speak up at a town meeting to question a council plan"]
    - ["Freedom of association", "Start or join a local river-care group, a sports club, a union or a political party"]
    - ["Freedom of assembly", "Gather peacefully in a park with banners to call for a safer school crossing"]
    - ["Freedom of religion", "Attend a temple, church, mosque or synagogue — or follow no religion at all"]
    - ["Freedom of movement", "Move from one state to another for work or study, or travel to Canberra to meet an MP"]
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
        - "Freedom of association (forming the group), freedom of assembly (the peaceful park rally), and freedom of speech (speaking out to reporters)"
        - "Only freedom of speech, because forming a group and holding a rally are just forms of speaking"
        - "Freedom of assembly (forming the ongoing group) and freedom of association (gathering in the park on Saturday)"
        - "Freedom of movement (forming the group) and freedom of religion (holding the rally)"
      answer: 0
      feedback:
        - null
        - "Speaking to reporters is freedom of speech, but forming an ongoing group is freedom of association and gathering in the park is freedom of assembly."
        - "That swaps association and assembly: association is forming or joining the ongoing group, while assembly is gathering in the park."
        - "Forming a community group is freedom of association and holding a peaceful rally is freedom of assembly."
      explain: "Active participation usually combines several freedoms at once: joining together (association), meeting in public (assembly), and making the case (speech)."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how democracy works in Australia. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: freedoms-separate-from-democracy
      explain: "Line 3: Nib thinks democracy only happens at the ballot box on election day. Without the five freedoms to debate ideas, form groups and gather peacefully between elections, voters could not make an informed choice or hold governments to account."
    smaller:
      check:
        type: question
        q: "If citizens were banned from discussing government decisions or forming political groups, could they still hold the government to account between elections?"
        options:
          - "No, because they could not share information or organise to ask for change"
          - "Yes, because voting once every three years is the only way citizens ever hold governments to account"
          - "Yes, because only members of Parliament need freedom of speech between elections"
          - "Yes, because the High Court can replace the government whenever it wants"
        answer: 0
        explain: "Democratic freedoms are what let citizens question decisions and organise peacefully between elections."
  - check:
      type: question
      q: "What is the difference between freedom of association and freedom of assembly?"
      options:
        - "Association is joining or forming an ongoing group; assembly is gathering together peacefully in a place"
        - "Association is gathering in a public park for a rally; assembly is joining an ongoing club or union"
        - "Association only applies to political parties in Parliament; assembly applies to any group outside Parliament"
        - "There is no difference: both mean meeting in the same place at the same time"
      answer: 0
      feedback:
        - null
        - "That swaps the two terms: association is belonging to an ongoing group, while assembly is physically gathering together."
        - "Freedom of association covers all lawful groups (clubs, unions, charities and parties), not only parties in Parliament."
        - "You can associate with a group even when members are at home in different towns; assembly is when people gather together."
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
    - ["A family opens a community kitchen as part of their faith's tradition of service, while their neighbour practises no religion", "Religion", "Practising a faith — or none — is freedom of religion."]
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
        - "People of different faiths and of no faith can live, worship and take part in public life as equal citizens without the government forcing one belief on everyone"
        - "It means the federal government chooses one official national religion that everyone must respect"
        - "It protects people who belong to a religion, but does not protect people who hold no religious belief"
        - "It means religious beliefs place a citizen above ordinary laws passed by Parliament"
      answer: 0
      feedback:
        - null
        - "Section 116 of the Australian Constitution stops the Commonwealth from establishing any official national religion."
        - "Freedom of religion includes the freedom to follow a religion or to hold no religion at all."
        - "Everyone still has to obey Australia's laws; freedom of religion operates within the bounds of law."
      explain: "Freedom of religion ensures people are not excluded from civic life because of their faith or lack of faith."
  - check:
      type: question
      q: "Why does Australia's Constitution require that trade and movement between the states be free, and how does freedom of movement help democracy?"
      options:
        - "People can travel across Australia to work, live, meet others, or attend national events and inquiries without state border passports"
        - "It only protects goods and freight trucks crossing state borders, not ordinary citizens travelling"
        - "It only applies to international travel with a passport, not moving between Australian states"
        - "It means state governments must get federal permission before building local roads"
      answer: 0
      feedback:
        - null
        - "Freedom of movement and intercourse between the states applies to people travelling across Australia as well as trade."
        - "Freedom of movement includes moving and living freely within Australia as well as leaving and returning to the country."
        - "States manage their own roads; constitutional freedom of movement is about citizens' right to move freely across state borders."
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
  text: "In my own book I listed the five democratic freedoms (speech, association, assembly, religion, movement), explained in one sentence what each one means, and gave a concrete example of how one of them helps citizens take part in Australia's democracy. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how are freedoms protected in Australia?

```step
stage: make
tier: typical
insight: "Unlike some countries that list all freedoms in a single constitutional bill of rights, Australia protects democratic freedoms through a mix of the Constitution, laws passed by Parliament, and the common law."
check:
  type: question
  q: "Where do protections for democratic freedoms in Australia come from?"
  options:
    - "A combination of the Constitution (such as s 116 on religion and the implied freedom of political communication), laws passed by parliaments, and court decisions (common law)"
    - "Every one of the five freedoms is written out in full in a single Bill of Rights chapter of the Australian Constitution"
    - "They are protected only by statutes passed by Parliament, with nothing in the Constitution or common law"
    - "They are protected only by judges' common-law decisions, because Parliament cannot pass laws about rights"
  answer: 0
  feedback:
    - null
    - "Unlike some countries, Australia does not have a single Bill of Rights chapter in its Constitution; only specific protections (like s 116 and implied political communication) are in the Constitution."
    - "Statutes play a major role, but constitutional provisions and the common law also protect democratic freedoms."
    - "Parliaments pass many statutes that protect rights and set legal boundaries alongside the common law."
  explain: "In Australia, democratic freedoms are protected by a mix of constitutional rules (including the High Court's decisions on political communication), Acts of Parliament, and common-law principles."
```

## Wider: comparing with a Bill of Rights

```step
stage: make
tier: wider
insight: "Comparing Australia's approach with countries that have a single constitutional Bill of Rights shows two different ways democracies protect freedoms."
check:
  type: question
  q: "The United States lists freedoms such as speech, assembly and religion in the First Amendment to its Constitution. Australia does not have a single national constitutional Bill of Rights (though the Constitution protects some items, such as s 116 on religion). What is one consequence of this difference?"
  options:
    - "In Australia, many everyday protections and boundaries on freedoms are set and updated through ordinary Acts of Parliament and court decisions rather than a single constitutional list"
    - "Australians are not allowed to speak about politics or join clubs"
    - "The Australian High Court never hears cases about the Constitution"
    - "In the United States, freedoms have no legal limits of any kind"
  answer: 0
  feedback:
    - null
    - "Australians exercise freedom of speech, association and assembly every day, and the High Court has recognised an implied constitutional freedom of political communication."
    - "Interpreting the Constitution is one of the High Court's core jobs."
    - "Even in countries with a constitutional Bill of Rights, courts recognise legal limits such as defamation or public safety."
  explain: "Both systems protect democratic freedoms, but Australia relies more heavily on parliamentary statutes, common law and specific constitutional provisions."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
