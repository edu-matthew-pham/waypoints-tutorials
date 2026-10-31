---
order: 3
unit: participation
title: Ways to take part in democracy
node: AC9HC7K02 n3
assumes: [AC9HC7K02 n1]
summary: "Citizens take part in Australia's democracy through elections and Parliament (voting, standing for election, petitions, inquiry submissions) and through community action (volunteering, community groups, social enterprise, campaigns and peaceful protest). Different methods suit different goals."
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
    - "Write to the council and collect signatures from library users"
    - "Write to their federal member of Parliament"
    - "Wait for the next council election and vote for change"
    - "Start an online campaign and wait for the council to notice"
  actual: "Bike racks at a library are a council decision, so writing to the council (with signatures to show support) reaches the people who decide. A federal MP does not run the library, and waiting for an election or hoping to be noticed is slow. Match the method to who makes the decision."
```

## Try: match each way of participating to what it involves

```step
stage: run
insight: "Matching each participation method to how it works gives students a full repertoire beyond voting."
check:
  type: match
  q: "Match each way of participating in Australia's democracy to what it involves."
  pairs:
    - ["Voting and standing for election", "Choosing representatives, or putting yourself forward as a candidate"]
    - ["Contributing to a committee of inquiry", "Sending evidence to MPs or senators who are looking into a law or issue"]
    - ["Organising a petition", "Collecting signatures to ask a parliament or council to act"]
    - ["Peaceful protest or social media campaign", "Showing in public or online how many people care"]
    - ["Community organisations and volunteering", "Working together on a local need, such as a food bank"]
```

Notice that some methods **ask decision-makers to change a law or budget** (petitions, committee submissions, contacting an MP), while others **solve a community problem directly** (volunteering, community groups, social enterprise) or **build public attention** (campaigns, peaceful rallies).

## Worked example: matching the method to the goal

```step
stage: investigate
insight: "Comparing how different participation methods work for different goals shows why effectiveness depends on the problem you are trying to solve, and catches Nib's voting-only mistake."
tasks:
  - check:
      type: question
      q: "In a made-up example, a Senate committee is looking into a proposed law on safety at public swimming pools and asks the public for submissions. Why could a youth swimming club's submission be worth sending?"
      options:
        - "The senators read the evidence and can recommend changes before the vote"
        - "Once the committee receives it, the club's ideas become part of the law"
        - "It is worth sending, but only adults and experts are allowed to send one"
        - "It only helps if the club also gets thousands of people to sign it"
      answer: 0
      feedback:
        - null
        - "A submission gives the committee evidence and ideas. The committee recommends; Parliament still debates and votes."
        - "Committees invite submissions from anyone, including young people and community groups."
        - "A submission is judged on its evidence and ideas, not on how many people sign it. That is closer to a petition."
      explain: "When a committee is looking at a bill in detail, a clear submission puts evidence straight in front of the lawmakers before they vote."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is advising residents of the made-up town of Wattle Creek who want better flood warning signs before the next wet season. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: voting-is-only-participation
      explain: "Line 3: Nib thinks voting at an election is the only way citizens can participate in a democracy. Between elections, citizens can petition councils or parliaments, meet their local representative, contribute to inquiries, volunteer, and campaign."
    smaller:
      check:
        type: question
        q: "Does a citizen have to wait for the next election day to raise a local safety problem with their representatives?"
        options:
          - "No, they can contact their member or council at any time"
          - "Yes, because representatives only listen during an election campaign"
          - "Yes, because a new problem needs a new vote to fix it"
        answer: 0
        explain: "Representatives, petitions, inquiries and community groups work all year round, between elections."
        feedback:
          - null
          - "Members of Parliament and councillors take letters, emails and meetings all year round."
          - "Councils and parliaments can act on a problem at any time, without waiting for an election."
  - check:
      type: question
      q: "An online campaign can quickly show that many people care. Why is it often weaker for fixing the detail of a law?"
      options:
        - "Short posts rarely explain the evidence or exact changes a law needs"
        - "MPs do not pay attention to anything posted online"
        - "Online campaigns are not a real way of taking part in democracy"
        - "If enough people share it, Parliament has to vote on it"
      answer: 0
      feedback:
        - null
        - "MPs and their staff do follow online debate. The weakness is detail, not attention."
        - "Online campaigns are a real way to take part. They are just better at awareness than at detail."
        - "No number of shares forces Parliament to vote. Only members of Parliament bring bills to a vote."
      explain: "Each method has strengths and limits: online campaigns spread awareness fast, while submissions and local projects work on detailed solutions."
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
  q: "Does each example work mainly through elections and Parliament, or through community action?"
  options: ["Parliamentary or electoral process", "Community or public action"]
  items:
    - ["Voting in a federal election", "Parliamentary or electoral process", "Voting is the formal way of choosing representatives."]
    - ["Starting an e-petition on the Parliament website", "Parliamentary or electoral process", "A petition that meets the rules is presented in Parliament."]
    - ["Giving evidence to a parliamentary committee", "Parliamentary or electoral process", "Committees are part of Parliament and look closely at laws and issues."]
    - ["Volunteering every Tuesday at a meals kitchen", "Community or public action", "Volunteering helps the community directly, outside Parliament."]
    - ["Holding a peaceful rally to save a town pool", "Community or public action", "Rallies build public attention from outside Parliament."]
```

## Practise: compare effectiveness for a goal

```step
stage: practise
insight: "Weighing which method (or combination of methods) best fits a specific civic goal."
tasks:
  - check:
      type: question
      q: "In a made-up town, residents want (1) help clearing storm branches from older neighbours' yards now, and (2) better state funding for storm drains next year. What is the best plan?"
      options:
        - "Volunteer for the clean-up now, and petition or meet the state MP about drains"
        - "Petition the state MP about both, since the government should clear the yards"
        - "Volunteer for both, since a strong local effort will fix the drains too"
        - "Start an online campaign about both and wait for a response"
      answer: 0
      feedback:
        - null
        - "Neighbours can clear yards today. Waiting for the government would leave older residents stuck."
        - "Volunteers can clear branches, but new drains need state money, so state decision-makers have to be asked."
        - "A campaign can build attention, but it does not clear any branches today or put a clear request to the people who decide."
      explain: "Volunteering meets the need straight away, while a petition or meeting with the MP reaches the people who decide on funding."
  - check:
      type: question
      q: "Can people under 18 participate in Australia's democracy before they are old enough to vote?"
      options:
        - "Yes: they can write to MPs, sign petitions, volunteer and join campaigns"
        - "Only by volunteering, because writing to MPs is for voters"
        - "Yes: they can vote in council and state elections from 16"
        - "No: taking part in democracy starts when you can vote at 18"
      answer: 0
      feedback:
        - null
        - "MPs represent everyone in their electorate, including young people, and anyone can write to them."
        - "The voting age is 18 for council, state and federal elections."
        - "Voting starts at 18, but almost every other way of taking part is open to you now."
      explain: "Voting starts at 18, but almost every other way of taking part in democracy is open to young people now."
```

### Combining two methods

### Participating before turning 18

## Make: three ways to take part

```step
stage: make
insight: "Selecting three ways to participate and matching each to a realistic civic goal in your own book."
check:
  type: reflect
  text: "In my own book I named at least three different ways citizens can participate in Australia's democracy, explained what each involves, and explained which one would be most effective for a specific community problem I chose. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how a parliamentary petition works

```step
stage: make
tier: typical
insight: "A petition that meets the House's rules is put on Parliament's record and can be sent to a minister for a reply."
check:
  type: question
  q: "What happens to a petition that meets the rules of the House of Representatives?"
  options:
    - "It is presented to the House and recorded, and may be sent to a minister"
    - "Parliament has to debate it and vote on what it asks for"
    - "The minister has to do what it asks if enough people sign"
    - "It goes to the Prime Minister, who decides whether to read it"
  answer: 0
  feedback:
    - null
    - "Presenting a petition puts it on the record, but Parliament does not have to vote on what it asks."
    - "A minister may be asked to reply, but does not have to do what the petition asks."
    - "Petitions go through a House committee, not the Prime Minister personally."
  explain: "A petition does not make a law by itself. It puts the request on Parliament's official record, and when the Petitions Committee sends it to a minister, the minister is expected to reply."
```

## Wider: weighing the trade-offs of different methods

```step
stage: make
tier: wider
insight: "Comparing methods across speed, effort, and direct power to change a rule."
check:
  type: reasoning
  q: "Compare two ways of taking part on the same issue (for example, a peaceful street protest and a written submission to a parliamentary committee). Explain what each is good at and why a group might use both."
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
