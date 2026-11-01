---
order: 1
unit: accuracy
title: Fact, opinion and accuracy
node: AC9HH7S04 n1
assumes: [AC9HH7S03]
summary: "A source often mixes factual claims (things that could be checked against evidence) with opinions (judgements or views). To check a source's accuracy, historians ask where it came from, what information it gives, whether each claim is factual or an opinion, and what other sources could support or challenge it."
language: maths
hook: "Imagine a made-up Roman writer who says: 'Some gladiators wore bronze helmets, and all gladiators were brave.' One half of that sentence can be checked in a museum case. What about the other half?"
---
In *Source origin and purpose*, you asked four questions of a source: who made it (**origin**), what it shows (**content**), what was going on (**context**), and why it was made (**purpose**).

Now you take the next step: judging **accuracy**. Accuracy means how far you can trust what a source claims.

Most sources mix two kinds of statements:

- A **factual claim** is something that could be checked against evidence, such as *"Some gladiators wore helmets"* or *"The Qin set one standard for weights and measures."* A factual claim can still be wrong. What makes it factual is that you could check it.
- An **opinion** is a judgement, belief or feeling. No single check can prove it true or false. For example: *"All gladiators were brave"* or *"The First Emperor was a wise and kind ruler."*

To test a source's **accuracy**, historians ask four questions:
1. **Where does it come from?** (Who made it, and were they in a position to know?)
2. **What information is provided?**
3. **Is the information factual or an opinion?**
4. **What other sources might support or challenge it?**

## Predict: fact or opinion?

```step
stage: predict
insight: "Committing first checks whether students separate a checkable claim from a judgement inside the same source."
check:
  type: predict
  q: "Source C, the First Emperor's mountain inscription (around 219 BCE), says he set one system of weights and measures. It also praises him as a ruler without equal. How should a historian treat those two statements?"
  options:
    - "The weights and measures can be checked against finds; the praise is an opinion"
    - "Both are facts, because the stone was carved during the First Emperor's reign"
    - "Both are opinions, because the inscription was made to praise the emperor"
    - "The praise is a fact too, because the emperor really did unite the kingdoms"
  actual: "The weights-and-measures statement is a factual claim: it can be checked against Qin weights and measures that have been dug up. 'A ruler without equal' is praise, which is an opinion. One source often holds both. (Our card is a summary in plain words, not a translation.)"
```

## Try: sort facts and opinions

```step
stage: run
insight: "Sorting statements from ancient history shows the test: could this claim be checked against evidence, or is it a judgement?"
check:
  type: sort
  q: "Is each statement a factual claim (could be checked against evidence) or an opinion (a judgement or view)?"
  options: ["Factual claim", "Opinion"]
  items:
    - ["Some Roman gladiators wore bronze helmets", "Factual claim", "Helmets found at Pompeii, and carvings of gladiators, let you check this."]
    - ["All gladiators were brave heroes", "Opinion", "'Brave' and 'all' are judgements. No object can prove them."]
    - ["Thousands of clay warriors were buried near the First Emperor's tomb", "Factual claim", "Archaeologists have dug up and counted the figures in the pits."]
    - ["The First Emperor was the best ruler China ever had", "Opinion", "'Best' is a judgement. It depends on what a person admires."]
    - ["The Shuihudi bamboo slips list punishments for officials who lose grain", "Factual claim", "Anyone who reads the slips can check what rules are written on them."]
    - ["Qin laws were too harsh and unfair", "Opinion", "'Too harsh' and 'unfair' judge the laws. They do not describe what the words say."]
```

Notice the pattern. A factual claim is not always right: someone can get a fact wrong, or lie. But it is a claim you **can check** against other evidence. An opinion shows a judgement or a feeling.

## Practise: one source, two kinds of statement

Here is Source C again, in our own plain words (not a translation). One source can hold both kinds of statement.

```step
stage: practise
insight: "Colouring the checkable claims and the opinion inside one source shows that a single source mixes both, which is what Nib misses next."
try: { playground: board, starter: "text.yml#run", height: 300 }
hint: ["For each part, ask: could someone check this against an object or another record?", "Colour by whether a claim could be checked, not by whether you believe it. A checkable claim can still be false."]
check: { type: board, text: "Colour the claims that could be checked one colour and the opinion another.", when: "chains_ok = 2 and n_stray = 0", explain: "Defeating six kingdoms, joining them into one empire, setting one set of laws, weights and measures, and everyone living in peace could all be checked against other evidence. 'A ruler without equal' is praise: an opinion. Checking is the next step, and it shows that 'everyone now lives in peace' is almost certainly false." }
```

## Worked example: checking Source C's accuracy

```step
stage: investigate
insight: "Applying the four accuracy questions to the Qin stone inscription shows how purpose and bias affect accuracy, and catches Nib's 'primary means all fact' mistake."
tasks:
  - check:
      type: question
      q: "Historians want to check Source C's claim that the Qin brought in one standard system of weights and measures. Which other source would best support or challenge that claim?"
      options:
        - "Bronze weights from different parts of the empire, stamped with the same measure"
        - "Another of the emperor's mountain inscriptions, which makes the same claim"
        - "Sima Qian's history, which says the First Emperor was a harsh ruler"
        - "A modern textbook that repeats Source C's claim without saying where it got it"
      answer: 0
      feedback:
        - null
        - "A second inscription from the same court has the same purpose. It does not test whether the weights were really used."
        - "An opinion about whether the emperor was harsh does not test a claim about weights and measures."
        - "A book that just repeats Source C is not a separate check. It is the same claim again."
      explain: "Checking a source against a different kind of evidence, such as bronze weights that have been dug up, is how historians test a factual claim."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is checking the accuracy of Source C, the mountain inscription. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: primary-means-all-fact
      explain: "Line 3: Nib thinks every sentence in a primary source is a fact because the writer lived at the time. Primary sources were made by real people with purposes. They hold opinions, boasts and one-sided claims as well as factual claims."
    smaller:
      check:
        type: question
        q: "A ruler pays carvers to write 'I am the wisest ruler of all time' on a stone during his reign. Does being written at the time make that sentence a fact?"
        options:
          - "No, it is still an opinion that praises the ruler"
          - "Yes, anything written at the time is a fact"
          - "Yes, if he really was a successful ruler"
          - "No, because rulers never say anything true about themselves"
        answer: 0
        feedback:
          - null
          - "That is Nib's slip. Being written at the time makes it primary, not a fact."
          - "Even for a successful ruler, 'the wisest of all time' is a judgement. You cannot check it."
          - "Rulers can state factual claims too, such as the laws they made. This sentence is an opinion because it is a judgement."
        explain: "When a statement was written tells you whether it is primary. Whether it could be checked tells you whether it is a factual claim or an opinion."
  - check:
      type: question
      q: "Why might Source C be inaccurate when it claims that everyone now lives in peace?"
      options:
        - "It was probably made to win support after a conquest, so it would leave out unrest"
        - "It is a secondary source, written long after the Qin empire fell"
        - "It gives only the view of conquered farmers, not the court's view"
        - "Its carvers could not have known how people felt across the empire"
      answer: 0
      feedback:
        - null
        - "Source C is a primary source from about 219 BCE. Its problem is its purpose, not when it was written."
        - "It is the other way round. It gives the emperor's official view and leaves out conquered people."
        - "That is a fair limit, but it misses the bigger reason: the stone was made to praise him, so bad news would be left out even if it was known."
      explain: "'Everyone now lives in peace' is a factual claim: you could check it. It is almost certainly false. Big revolts broke out soon after the emperor died, and the stone was made to persuade, so unrest was left out."
```

### Testing Source C with the four accuracy questions

1. **Where does it come from?** It was set up on the First Emperor's orders around 219 BCE, a few years after the Qin conquered six rival kingdoms.
2. **What information is provided?** It praises him as a ruler without equal. It says he brought peace and order, that everyone now lives in peace, and that everyone lives under one set of laws, weights and measures.
3. **Factual or opinion?** One set of laws, weights and measures is a factual claim. "Everyone now lives in peace" is a factual claim too, because you could check it. "A ruler without equal" is an opinion.
4. **What other sources might support or challenge it?** This needs a different kind of evidence from the stone itself. Choose one below for the claim about measures.

### Find Nib's mistake

Nib is a made-up student for this lesson. Nib's notes are below.

### How purpose affects accuracy

A source can lean towards one side, for example because its maker wants you to think well of someone. This is called **bias**. A message made to persuade people, often by a ruler or a government, is called **propaganda**. Source C was made on the emperor's orders to praise him, so it is propaganda, and its bias shapes what it says.

## Vary: Sima Qian's history

```step
stage: modify
insight: "Applying the accuracy questions to a later historian's account shows that later sources also need checking for bias and against other evidence."
tasks:
  - check:
      type: match
      q: "Match each accuracy question to what a historian asks about Sima Qian's history of China (written about 100 years after the Qin fell, for the Han court)."
      pairs:
        - ["Where does it come from?", "Written by Sima Qian, a Han court historian, about 100 years after the Qin fell"]
        - ["What information is provided?", "Describes the First Emperor's building projects and laws, and reports an order to burn some books"]
        - ["Is it factual or opinion?", "Mixes factual claims (campaigns, laws) with judgements that the First Emperor was cruel and greedy"]
        - ["What other sources support or challenge it?", "Qin bamboo slips and other finds from tombs can be compared with his claims"]
  - check:
      type: question
      q: "Why do historians look for other sources before they accept Sima Qian's sharpest criticisms of the First Emperor?"
      options:
        - "He wrote for the Han, who replaced the Qin and had reason to make them look bad"
        - "He wrote about 100 years later, so everything he says is probably wrong"
        - "A later source can only be used if a primary source says the same thing"
        - "His book is a primary source, and primary sources are often biased"
      answer: 0
      feedback:
        - null
        - "A time gap is a reason to check, not to throw it all out. Historians think he used older records."
        - "Later sources can be used on their own, with care. Checking is about how far to trust a claim."
        - "He wrote about 100 years later, so his book is secondary for the Qin."
      explain: "Sima Qian wrote for the dynasty that replaced the Qin. Checking his claims against Qin records dug up from tombs helps separate what is accurate from what the Han wanted people to think."
```

### Four accuracy questions on Sima Qian

Sima Qian reports that in 213 BCE the emperor ordered some books to be burned. Many historians accept there was an order against some books, but they argue about how much was lost. They test the details against other evidence.

### Why check against other sources?

## Practise: judge the accuracy

```step
stage: practise
insight: "Practising the difference between a source's factual claims, its opinions, and what limits its accuracy."
tasks:
  - check:
      type: sort
      q: "What is affecting accuracy in each example?"
      options: ["Purpose / bias", "Limited information", "Opinion stated as fact"]
      items:
        - ["A king's victory monument leaves out a battle his army lost", "Purpose / bias", "The monument was made to celebrate the king, so defeats were left out on purpose."]
        - ["A traveller writes about a whole empire after visiting only one port town for two days", "Limited information", "The writer saw only a tiny part of the country, so what they know is incomplete."]
        - ["A farmer's private diary says 'The new canal is the most beautiful thing ever made'", "Opinion stated as fact", "'Most beautiful thing ever made' is a judgement written as if it were a fact. The diary is private, so it is not trying to persuade anyone."]
  - check:
      type: question
      q: "Mei reads a rule on a Qin bamboo slip (Source B). It sets the fine for an official whose grain store comes up short. Why is this likely to be more accurate about everyday rules than a mountain inscription that praises the emperor?"
      options:
        - "It was a working rule officials had to use, not a public boast"
        - "It is older than the mountain inscription, and older means more accurate"
        - "Officials wrote it, and officials had no reason to get things wrong"
        - "It was buried in a tomb, so no one could change it later"
      answer: 0
      feedback:
        - null
        - "Both come from the same few years of Qin rule. Age alone does not make a source more accurate."
        - "Officials could still make mistakes, so historians still check. But a working rulebook had a practical reason to state the real rules."
        - "Being buried kept it safe from later changes, but that does not make what it says accurate in the first place."
      explain: "Officials used these rules every day, so they had to state the real rules. A public monument was made to impress."
```

### What limits accuracy?

### Working rule or public boast?

Mei is made up for this lesson.

## Make: test a source in your book

```step
stage: make
insight: "Applying the four accuracy questions and separating factual claims from opinions in your own book builds the habit."
check:
  type: reflect
  text: "In my own book I chose one source (from our unit, or Source C or Sima Qian), wrote one factual claim and one opinion from it, and answered two accuracy questions: what might limit its accuracy, and what other source could support or challenge it. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: when two sources agree

```step
stage: make
tier: typical
insight: "When two separate sources with different purposes agree on a claim, historians can be more confident it is accurate."
check:
  type: question
  q: "Sima Qian (writing about 100 years later for the Han court) says the Qin had strict laws that punished officials for small mistakes. The Shuihudi bamboo slips (buried with a Qin official in 217 BCE) list fines for officials who miscount grain or miss deadlines. What does putting these two sources together tell a historian?"
  options:
    - "The slips back up his claim that Qin rules for officials were strict and detailed"
    - "The slips are not needed, because a famous historian already says it"
    - "They cannot be compared, because one is primary and one is secondary"
    - "They agree on fines, so his view that the emperor was cruel is a fact too"
  answer: 0
  feedback:
    - null
    - "Sima Qian wrote 100 years later for a rival dynasty, so checking his claim against a record from the time really matters."
    - "Comparing a later account with evidence from the time is exactly how historians check a claim."
    - "Backing up one factual claim about fines does not turn his judgements about the emperor into facts."
  explain: "A record from 217 BCE matches what a later historian wrote, so the two support each other on this point. The slips show that the written rules were strict. They do not show how harshly the rules were applied."
```

## Wider: persuading on purpose, or seeing only part

```step
stage: make
tier: wider
insight: "A source can be inaccurate in two different ways: its maker set out to persuade, or its maker could see only one part of society."
check:
  type: sort
  q: "Does the limit on accuracy come mainly from persuading on purpose (propaganda) or from a limited viewpoint (seeing only part of society)?"
  options: ["Persuading on purpose", "Limited viewpoint"]
  items:
    - ["A ruler's inscription claims every conquered town welcomed his army with joy", "Persuading on purpose", "The ruler is trying to make readers believe his conquest was popular."]
    - ["A rich noble's diary describes banquets and silk robes but never mentions how farmers lived", "Limited viewpoint", "The noble writes privately about life at court, which is the only world they see."]
    - ["A general's report to the capital doubles the number of enemy soldiers he defeated, to win a reward", "Persuading on purpose", "The general exaggerates on purpose to gain a reward."]
    - ["A tax clerk's tally records grain paid by registered households, missing families in the hills who were not on the list", "Limited viewpoint", "The clerk records what comes to the office, so people outside the system do not appear."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
