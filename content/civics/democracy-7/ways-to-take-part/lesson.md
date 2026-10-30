---
order: 3
unit: participation
title: Ways to take part in democracy
node: AC9HC7K02 n3
assumes: [AC9HC7K02 n1]
summary: "Citizens participate in Australia's democracy in many ways — both through formal parliamentary and electoral processes (voting, standing for parliament, petitions, submissions to committees of inquiry) and through community and public action (volunteering, community organisations, social enterprise, campaigns and peaceful protest). Different methods suit different civic goals."
language: maths
hook: "An election happens only once every few years. If a town problem needs fixing this month, what can citizens actually do?"
---
Because Australia has the five democratic freedoms you met in Lesson 1, democratic participation is not limited to election day.

Citizens can take part in two broad, connected ways:

- **Through electoral and parliamentary channels:** **voting** in elections and referendums, **standing for parliament** (or council), signing or presenting a **petition** to Parliament, contacting a local member of parliament (MP), or writing a submission to a **parliamentary committee of inquiry**.
- **Through community and public action:** joining **community organisations**, **volunteering** (such as bushcare, surf lifesaving or a food pantry), running a **social enterprise**, running **social media or public awareness campaigns**, or joining a **peaceful protest**.

## Predict: one way or many?

```step
stage: predict
insight: "Committing first checks whether students see participation as a toolkit where different tools fit different goals."
check:
  type: predict
  q: "In a made-up town, a group of Year 7 students and parents want the local council to add bike racks outside the town library. Which approach makes the most sense?"
  options:
    - "Use a method that fits the goal, such as a local petition and a letter or presentation to the council"
    - "Wait until they turn 18 and stand for the federal Senate"
    - "Do nothing, because citizens cannot raise local issues between elections"
    - "Ask the federal Parliament to hold a national referendum to change the Constitution"
  actual: "Different civic goals call for different methods. A local facility request fits a local petition and council meeting; changing how a federal bill works fits a parliamentary committee submission."
```

## Try: match each way of participating to what it involves

```step
stage: run
insight: "Matching each participation method to how it works gives students a full repertoire beyond voting."
check:
  type: match
  q: "Match each way of participating in Australia's democracy to what it involves."
  pairs:
    - ["Voting and standing for parliament", "Choosing representatives on election day, or putting yourself forward as a candidate to represent your electorate"]
    - ["Contributing to a committee of inquiry", "Sending written evidence or speaking to a group of MPs or senators who are investigating a proposed law or issue"]
    - ["Organising a petition", "Collecting signatures from citizens to formally ask a parliament or council to take action on an issue"]
    - ["Peaceful protest or social media campaign", "Gathering in public or sharing messages online to raise public awareness and show how many people care"]
    - ["Community organisations and volunteering", "Working together directly on a local need — such as a volunteer fire brigade, youth club or food bank"]
```

Notice that some methods **ask decision-makers to change a law or budget** (petitions, committee submissions, contacting an MP), while others **solve a community problem directly** (volunteering, community groups, social enterprise) or **build public attention** (campaigns, peaceful rallies).

## Worked example: matching the method to the goal

```step
stage: investigate
insight: "Comparing how different participation methods work for different goals shows why effectiveness depends on the problem you are trying to solve, and catches Nib's voting-only mistake."
tasks:
  - check:
      type: question
      q: "A Senate committee is holding an inquiry into a proposed law on teen online safety and has asked the public for submissions. Why is writing a submission to the committee an effective way for a youth organisation to participate here?"
      options:
        - "The senators examining the bill read the evidence and can recommend changes to the law before Parliament votes on it"
        - "A committee submission automatically becomes a binding law as soon as the committee receives it"
        - "Committee submissions are only open to members of Parliament, not to citizens or community groups"
        - "Committees only investigate past elections, never proposed bills"
      answer: 0
      feedback:
        - null
        - "A submission gives the committee evidence and recommendations; Parliament still has to debate and vote on the bill."
        - "Parliamentary committees invite submissions from ordinary citizens, young people, experts and community organisations."
        - "Inquiring into proposed bills before Parliament votes on them is one of the main jobs of Senate and House committees."
      explain: "When Parliament is actively inquiring into the details of a bill, a well-argued committee submission puts evidence straight in front of the lawmakers."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is advising residents of the made-up town of Wattle Creek who want better flood warning signs before the next wet season. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: voting-is-only-participation
      explain: "Line 3: Nib thinks voting at an election is the only way citizens can participate in a democracy. Between elections, citizens can petition councils or parliaments, meet their local representative, contribute to inquiries, volunteer, and campaign."
    smaller:
      check:
        type: question
        q: "Does a citizen have to wait for the next election day to raise a local safety problem with their representatives?"
        options:
          - "No, they can contact their local member or council, organise a petition, or work with a community group at any time"
          - "Yes, because citizens are only allowed to contact representatives during an election campaign"
          - "Yes, because petitions can only be handed in on election day"
          - "Yes, unless the citizen is already a member of Parliament"
        answer: 0
        explain: "Representatives, petitions, inquiries and community groups operate all year round between elections."
  - check:
      type: question
      q: "Why might a social media campaign by itself be strong for raising quick awareness of an issue, but weaker than a committee submission or community project for actually fixing the detail of a law?"
      options:
        - "Online posts can reach thousands of people quickly, but a short post rarely explains the detailed evidence or practical changes a law needs"
        - "A social media post automatically forces Parliament to vote on a bill within 7 days"
        - "Members of Parliament are banned by law from reading anything posted online"
        - "Only a formal parliamentary petition is allowed to mention a community issue"
      answer: 0
      feedback:
        - null
        - "Online posts build public awareness, but they do not trigger automatic parliamentary votes."
        - "MPs and their staff regularly follow public debate online, though detailed lawmaking relies on fuller evidence like submissions."
        - "Citizens can discuss community issues across social media, meetings, letters and petitions."
      explain: "Each method has strengths and limits: online campaigns spread awareness fast, while submissions and local projects dig into detailed solutions."
```

### Choosing the right tool for the goal

```worked
\text{Goal: fix creek rubbish this Saturday} :: Join a local bushcare working bee -> Volunteering & community organisation.
\text{Goal: show Parliament 5,000 locals care} :: Collect signatures on an official e-petition -> Petitioning Parliament.
\text{Goal: improve the wording of a new bill} :: Send evidence and recommendations to the inquiry -> Committee of inquiry submission.
\text{Goal: choose who represents the electorate} :: Cast a ballot on election day (or stand as a candidate) -> Voting & elections.
```

Now: why is a committee submission effective when a bill is being examined, where does Nib go wrong, and how do different methods compare?

### Find Nib's mistake

### Comparing two methods

## Vary: formal and informal participation

```step
stage: modify
insight: "Sorting participation methods by how they work shows how formal parliamentary channels and community action complement each other."
check:
  type: sort
  q: "Sort each example into whether it participates mainly through a formal parliamentary/electoral process or through direct community/public action."
  options: ["Parliamentary or electoral process", "Community or public action"]
  items:
    - ["Voting in a House of Representatives and Senate election", "Parliamentary or electoral process", "Voting is the formal electoral mechanism for choosing representatives."]
    - ["Submitting a formal e-petition through the Parliament website", "Parliamentary or electoral process", "A parliamentary petition is presented inside the House or Senate and can receive a ministerial response."]
    - ["Presenting evidence to a parliamentary committee of inquiry", "Parliamentary or electoral process", "Committees are formal parliamentary bodies examining laws and government administration."]
    - ["Volunteering every Tuesday at a neighbourhood meals kitchen", "Community or public action", "Volunteering directly supports the community outside parliament."]
    - ["Holding a peaceful Saturday rally and awareness campaign to save a town pool", "Community or public action", "Rallies and campaigns build public awareness and pressure from outside parliament."]
```

## Practise: compare effectiveness for a goal

```step
stage: practise
insight: "Weighing which method (or combination of methods) best fits a specific civic goal."
tasks:
  - check:
      type: question
      q: "Residents in a made-up regional town want two things: (1) immediate help clearing fallen branches from elderly neighbours' yards after a storm, and (2) better state funding for storm drains next year. Why does combining two forms of participation work better than using only one?"
      options:
        - "Volunteering through a community group solves the immediate yard cleanup today, while a petition and meeting with the state MP targets next year's state budget"
        - "Because a state petition is the only legal way neighbours are allowed to help clear fallen branches"
        - "Because volunteering in a neighbour's yard automatically changes the state budget"
        - "Because parliamentary petitions can only be signed by people who have never volunteered"
      answer: 0
      feedback:
        - null
        - "Neighbours and local volunteers can help clear yards straight away; a petition is for asking Parliament or government to act."
        - "Volunteering helps neighbours straight away, but changing state infrastructure funding requires engaging state decision-makers."
        - "Anyone can combine community volunteering with formal petitions and contacting their MP."
      explain: "Hands-on volunteering meets the immediate community need, while formal representation and petitions address the government funding decision."
  - check:
      type: question
      q: "Can people under 18 participate in Australia's democracy before they are old enough to vote?"
      options:
        - "Yes: they can sign or start petitions, write to MPs, contribute to inquiries, volunteer, join community groups and take part in peaceful campaigns"
        - "No: nobody under 18 is allowed to sign a parliamentary e-petition or write to an MP"
        - "No: only enrolled voters aged 18 and over are allowed to join a community campaign or attend a public meeting"
        - "Only by voting in state and local council elections, since the voting age is 18 only for federal elections"
      answer: 0
      feedback:
        - null
        - "Any resident or citizen, including school students under 18, can sign parliamentary petitions, write to their MP, or make a submission to an inquiry."
        - "Freedom of speech, association and assembly apply to young people too, not only enrolled voters."
        - "The voting age is 18 for state and local elections as well as federal elections, so under-18s participate through non-voting channels."
      explain: "While formal voting starts at 18, almost every other form of democratic participation is open to young people right now."
```

### Combining two methods

### Participating before turning 18

## Make: three ways to take part

```step
stage: make
insight: "Selecting three ways to participate and matching each to a realistic civic goal in your own book."
check:
  type: reflect
  text: "In my own book I named at least three different ways citizens can participate in Australia's democracy, explained what each involves, and explained which one would be most effective for a specific community problem I chose. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how a parliamentary petition works

```step
stage: make
tier: typical
insight: "An official parliamentary petition follows clear rules so citizens' requests are formally recorded in Parliament and can be sent to the relevant minister."
check:
  type: question
  q: "What happens when citizens submit an official petition that meets the rules of the House of Representatives?"
  options:
    - "It is checked by the Petitions Committee, presented to the House and recorded in Hansard, and the relevant minister is expected to respond within 90 days"
    - "It automatically becomes a new law the moment 100 people sign it"
    - "It is thrown away without being recorded"
    - "It changes the Australian Constitution without a referendum"
  answer: 0
  feedback:
    - null
    - "A petition asks the House to take action; only a bill passed by Parliament becomes a law."
    - "Valid petitions are formally presented and recorded in the parliamentary record."
    - "Only a referendum can change the Constitution."
  explain: "A petition does not pass a law by itself, but it puts citizens' request on the official record of Parliament and prompts a formal ministerial reply."
```

## Wider: weighing the trade-offs of different methods

```step
stage: make
tier: wider
insight: "Comparing methods across speed, effort, and direct power to change a rule."
check:
  type: reasoning
  q: "Compare two ways of participating on the same issue (for example, organising a peaceful street protest versus making a written submission to a parliamentary committee of inquiry). Explain what each method is good at and why a community group might use both."
  paper: true
  models:
    - title: "A strong answer"
      text: "A peaceful street protest is effective for showing large numbers of people care and getting media attention quickly, which puts public pressure on politicians. A written submission to a parliamentary committee is slower and less visible, but it puts detailed facts and practical solutions directly in front of the MPs reviewing the law. Using both gets public attention and gives lawmakers a workable plan."
    - title: "A different answer that also works"
      text: "A protest uses freedom of assembly to raise awareness across the town so people notice the problem. A committee submission uses evidence to answer senators' questions line by line. A protest alone might not explain how to rewrite the law, and a submission alone might be ignored if nobody knows the issue matters, so the two methods work well together."
  criteria:
    - "I named two distinct ways of participating in democracy."
    - "I explained a strength and a limitation of each method for achieving a goal."
    - "I explained how or why the two methods can work together."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
