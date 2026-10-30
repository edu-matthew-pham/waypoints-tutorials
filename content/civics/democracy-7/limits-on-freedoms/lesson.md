---
order: 2
unit: freedoms
title: Within the bounds of law
node: AC9HC7K02 n2
assumes: [AC9HC7K02 n1]
summary: "Democratic freedoms in Australia are real, but they are not unlimited: they operate within the 'bounds of law'. Laws set limits — such as defamation laws, rules against inciting violence, and public safety rules for marches — so that one person's freedom does not destroy the rights, safety or reputation of others."
language: maths
hook: "You have freedom of speech in Australia. Does that mean you can publish a made-up lie accusing your neighbour of a crime, or shout 'Fire!' in a packed cinema when there is no fire?"
---
In Lesson 1 you met the five democratic freedoms: speech, association, assembly, religion and movement.

Are those freedoms absolute — meaning you can do anything at all in their name? No. In a democracy, freedoms operate **within the bounds of law**.

That phrase means the law sets clear, public boundaries where one person's exercise of a freedom would seriously harm:
- **other people's rights and reputation** (for example, **defamation** laws stop someone publishing false statements that ruin an innocent person's reputation);
- **public safety and public order** (for example, assemblies must be peaceful and cannot block emergency ambulances or use violence);
- **the safety of the community** (for example, laws against criminal organisations or inciting violence).

## Predict: why set boundaries on a freedom?

```step
stage: predict
insight: "Committing first shows why a freedom needs legal boundaries when two people's rights collide."
check:
  type: predict
  q: "Why does Australian law put limits on democratic freedoms, such as defamation law on speech or peaceful-conduct rules on assembly?"
  options:
    - "To balance competing rights and protect other people's safety, rights and reputation so everyone can share public life safely"
    - "Because freedoms in Australia apply only when a citizen agrees with the government"
    - "To stop citizens from criticising elected representatives between elections"
    - "Because ordinary laws passed by Parliament always cancel constitutional freedoms completely"
  actual: "Legal boundaries exist so one person's freedom is not used to harm another person's safety, rights or reputation."
```

## Try: match each freedom to a legal limit and its reason

```step
stage: run
insight: "Matching a legal limit on each freedom to its purpose shows that legitimate limits protect other people, rather than silencing fair debate."
check:
  type: match
  q: "Match each freedom to an example of a legal limit in Australia and why that limit exists."
  pairs:
    - ["Freedom of speech", "Defamation law: you cannot publish false claims that destroy someone's reputation without a lawful defence"]
    - ["Freedom of assembly", "Public order and safety laws: a protest must stay peaceful and cannot block emergency services or trespass on private homes"]
    - ["Freedom of association", "Criminal association laws: people cannot form or join a violent criminal or terrorist organisation"]
    - ["Freedom of movement", "Road, court and border laws: you need a licence to drive, and a court can restrict movement on bail or quarantine to protect safety"]
    - ["Freedom of religion", "General criminal and safety laws: religious belief cannot be used as an excuse to break laws that protect people from harm"]
```

Notice what all five limits have in common: they do **not** ban the freedom itself. You can still criticise the government, join unions and clubs, march peacefully, practise your faith and travel across Australia. The boundary sits where an action harms others.

## Worked example: criticising a policy vs defaming a person

```step
stage: investigate
insight: "Comparing fair political speech with defamation and unsafe assembly shows where the legal line sits, and catches Nib's 'no limits ever' slip."
tasks:
  - check:
      type: question
      q: "In the made-up town of Wattle Creek, Jordan writes a newspaper letter saying: 'The council's new parking fees are too high and will hurt local shops.' Meanwhile, Alex posts a made-up story online claiming that a named local shopkeeper steals from customers. How does Australian law treat these two uses of speech?"
      options:
        - "Jordan's letter is protected political and public comment, while Alex's false personal accusation can be limited by defamation law to protect the shopkeeper's reputation"
        - "Both are banned by defamation law, because criticising a council policy and accusing a shopkeeper both hurt someone's reputation"
        - "Both are completely protected by freedom of speech, because freedom of speech has no legal limits"
        - "Jordan's letter is banned because it criticises an elected council, while Alex's post is allowed because it is about a private business"
      answer: 0
      feedback:
        - null
        - "Expressing an honest opinion about a council policy is protected political comment, not defamation."
        - "Freedom of speech operates within the bounds of law; publishing false factual claims that ruin a person's reputation is limited by defamation law."
        - "That has it backwards: criticising government and council policies is protected, while false personal accusations against an individual can be defamatory."
      explain: "Criticising a public policy is protected democratic speech; publishing false claims that damage an individual's reputation crosses into defamation."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how freedom of speech and assembly work in the made-up town of Wattle Creek. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: freedoms-are-unlimited
      explain: "Line 3: Nib thinks democratic freedoms have no legal limits at all. In Australia, freedoms operate within the bounds of law so that one group's assembly does not block emergency hospital care and one person's speech does not defame a neighbour."
    smaller:
      check:
        type: question
        q: "If a protest group wants to march in town, why can the law require them to keep the hospital's ambulance driveway clear?"
        options:
          - "To protect patients' lives and safety while still letting the group hold its rally in a safe public place"
          - "To stop people from expressing political views near public buildings"
          - "Because freedom of assembly only applies indoors on private property"
          - "Because freedom of movement always cancels freedom of assembly"
        answer: 0
        explain: "Keeping the ambulance driveway clear protects life and safety while leaving room for peaceful assembly nearby."
  - check:
      type: question
      q: "What makes a legal limit on a freedom reasonable in a democracy, rather than an excuse to silence people?"
      options:
        - "It is set by a known law, applies equally to everyone, and goes only as far as needed to protect others' rights or public safety — leaving peaceful political disagreement free"
        - "It only applies to people who vote against the government"
        - "It is made up on the spot by a minister without a law passed by Parliament"
        - "It bans all public meetings forever"
      answer: 0
      feedback:
        - null
        - "In a democracy under the rule of law, laws must apply equally, never target political opponents."
        - "Limits must be grounded in laws passed by Parliament or established legal rules, and can be tested in independent courts."
        - "Banning all public meetings would abolish freedom of assembly rather than bound it."
      explain: "A legitimate limit is written in law, applies equally, and protects safety or rights without shutting down peaceful democratic debate."
```

### Inside and outside the bounds of law

```worked
\text{Protected freedom} :: Holding a peaceful rally in the town square to oppose a new tax -> Freedom of assembly and speech.
\text{Legal boundary} :: Blocking the hospital ambulance bay or throwing stones -> Limited by public safety and criminal law.
\text{Why the boundary exists} :: To protect other people's safety and rights while keeping peaceful protest open.
```

Now: how does the law separate policy criticism from defamation, where did Nib go wrong, and what makes a limit legitimate?

### Find Nib's mistake

### What makes a limit fair?

## Vary: inside the bounds or across the line?

```step
stage: modify
insight: "Sorting concrete cases into protected exercise of a freedom versus crossing a legal boundary."
check:
  type: sort
  q: "Sort each made-up action into whether it is a protected use of a democratic freedom, or crosses a legal boundary designed to protect others."
  options: ["Protected democratic freedom", "Crosses a legal boundary"]
  items:
    - ["A student group organises a peaceful Saturday march on a pre-arranged route to ask for cleaner rivers", "Protected democratic freedom", "Peaceful public assembly that allows safe traffic management is protected."]
    - ["A speaker at a rally urges the crowd to smash the windows of shops along the street", "Crosses a legal boundary", "Inciting violence and property damage is unlawful and harms others."]
    - ["A citizen writes to their local MP arguing that a government bill is unfair", "Protected democratic freedom", "Questioning and criticising proposed laws is core political speech."]
    - ["A blogger knowingly invents a false story that a local teacher stole school money", "Crosses a legal boundary", "Publishing false claims that damage a person's reputation is limited by defamation law."]
```

## Practise: explain the balance

```step
stage: practise
insight: "Explaining both the freedom and the reason for its legal boundary in a new scenario."
tasks:
  - check:
      type: question
      q: "Sam says: 'If the law can stop me from publishing false rumours about someone, then we don't really have freedom of speech at all.' What is the best reply?"
      options:
        - "We do have freedom of speech to express opinions and debate public issues; defamation law sets a boundary where false statements would unjustly harm another person's reputation"
        - "Sam is right: if speech has any legal boundary at all, it is no longer a democratic freedom"
        - "Freedom of speech only applies to spoken words, never to anything written or posted online"
        - "Defamation law bans all criticism of government policies as well as false personal rumours"
      answer: 0
      feedback:
        - null
        - "Every democracy balances freedoms with legal boundaries so one person's freedom does not destroy another person's rights."
        - "Freedom of speech (or expression) covers writing, publishing and online posts as well as spoken words."
        - "Defamation law targets false statements that harm a person's reputation; criticising government policies remains protected political speech."
      explain: "A bounded freedom is still a real freedom: you can argue, criticise and debate, while others are protected from false reputational harm."
  - check:
      type: question
      q: "Which institution in Australia decides disputes if a citizen argues that a law has gone too far and breached the Constitution's limits?"
      options:
        - "The High Court (and the courts)"
        - "The Prime Minister and Cabinet, because the executive decides whether its own laws are constitutional"
        - "The Senate alone, without the courts"
        - "The opposition party leader alone"
      answer: 0
      feedback:
        - null
        - "Under the separation of powers, the executive cannot be the judge of its own constitutional limits."
        - "The Senate votes on bills in Parliament, but only independent courts can rule on whether an Act breaches the Constitution."
        - "The Opposition debates laws in Parliament, but independent courts decide legal and constitutional disputes."
      explain: "Independent courts — with the High Court at the top for constitutional questions — interpret the law and check whether government action stays within legal bounds."
```

### Sam's claim about speech

### Who checks the boundaries?

## Make: one freedom and its boundary

```step
stage: make
insight: "Explaining one freedom, one legal limit on it, and why that limit exists puts the whole balance in your own words."
check:
  type: reflect
  text: "In my own book I chose one of the five democratic freedoms, gave an example of how citizens use it, described one legal limit on that freedom in Australia, and explained why that limit exists. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how a peaceful assembly works with the law

```step
stage: make
tier: typical
insight: "In Australia, notifying police ahead of a public march is used to close roads safely and protect both marchers and bystanders, not to judge whether the marchers' opinion is popular."
check:
  type: question
  q: "When a community group notifies police ahead of a large street march so traffic can be redirected safely, what is the purpose of that legal process?"
  options:
    - "To keep both the marchers and other road users safe while allowing the peaceful assembly to go ahead"
    - "To let police check whether they agree with the group's political opinions"
    - "To require every participant to prove they voted in the last federal election"
    - "To ban marches on any weekend or public street"
  answer: 0
  feedback:
    - null
    - "Public assembly rules are about safety and traffic order, not whether authorities agree with the message."
    - "Peaceful assembly is open to everyone in the community, including young people and non-voters."
    - "Notification procedures exist to manage public streets safely so weekend marches can take place."
  explain: "Safety and traffic arrangements help freedom of assembly and freedom of movement work side by side."
```

## Wider: when the High Court tests a limit on political speech

```step
stage: make
tier: wider
insight: "Because Australia has representative and responsible government in the Constitution, the High Court has ruled that Parliament cannot pass laws that choke off free political communication."
check:
  type: question
  q: "The High Court has found that because sections 7 and 24 of the Constitution say Parliament must be 'directly chosen by the people', there is an implied freedom of political communication. What does that mean if a law tries to ban citizens from discussing government policies?"
  options:
    - "The High Court can rule the law invalid if it burdens political communication without a legitimate, proportionate reason"
    - "Parliament can ban all political discussion whenever it wants"
    - "The High Court rewrites the Constitution without a referendum"
    - "Voters are no longer allowed to talk about elections"
  answer: 0
  feedback:
    - null
    - "The implied freedom limits Parliament from shutting down political debate."
    - "The High Court interprets what the Constitution's words require; only voters at a referendum can change the text."
    - "It protects voters' ability to discuss elections and government affairs."
  explain: "For voters to make a genuine choice at elections, they must be free to communicate about political and government matters."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
