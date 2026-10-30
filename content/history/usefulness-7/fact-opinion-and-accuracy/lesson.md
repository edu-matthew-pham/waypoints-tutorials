---
order: 1
unit: accuracy
title: Fact, opinion and accuracy
node: AC9HH7S04 n1
assumes: [AC9HH7S03]
summary: "A source often mixes factual claims (things that can be checked against evidence) with opinions (judgements or views). To check a source's accuracy, historians ask where it came from, what information it gives, whether each claim is a fact or an opinion, and what other sources could support or challenge it."
language: maths
hook: "A Roman writer says: 'Some gladiators wore bronze helmets, and all gladiators were brave.' One half of that sentence can be checked in a museum case. What about the other half?"
---
In *Source origin and purpose*, you asked four questions of a source: who made it (**origin**), what it shows (**content**), what was going on (**context**), and why it was made (**purpose**).

Now you take the next step: judging **accuracy**. Accuracy means how factually reliable a source's claims are.

Most sources mix two kinds of statements:

- A **fact** (or factual claim) is something that can be checked against evidence, such as *"Some gladiators wore helmets"* or *"The Qin set one standard for weights and measures."*
- An **opinion** is a judgement, belief or feeling that cannot be proved true or false by a single check, such as *"All gladiators were brave"* or *"The First Emperor was a wise and kind ruler."*

To test a source's **accuracy**, historians ask four questions:
1. **Where does it come from?** (Who made it, and were they in a position to know?)
2. **What information is provided?**
3. **Is the information factual or an opinion?**
4. **What other sources might support or challenge it?**

## Predict: fact or opinion?

```step
stage: predict
insight: "Committing first checks whether students separate a checkable claim from a value judgement inside the same source."
check:
  type: predict
  q: "Source C, the First Emperor's mountain inscription (219 BCE), claims that he set one system of weights and measures, and that his rule is 'glorious and without equal'. How should a historian treat those two claims?"
  options:
    - "Treat the weights-and-measures claim as a factual claim that can be checked against archaeological finds, and 'glorious and without equal' as an opinion"
    - "Treat both as facts, because the stone was carved during the First Emperor's reign"
    - "Treat both as opinions, because the inscription is more than two thousand years old"
    - "Ignore the whole inscription, because any source with an opinion in it has no facts"
  actual: "One claim can be checked against excavated Qin weights and measures (factual claim); 'glorious and without equal' is praise (an opinion). A single source often contains both."
```

## Try: sort facts and opinions

```step
stage: run
insight: "Sorting statements from ancient history shows the test: can this claim be checked against evidence, or is it a value judgement?"
check:
  type: sort
  q: "Sort each statement into whether it is a factual claim (can be checked against evidence) or an opinion (a judgement or view)."
  options: ["Factual claim", "Opinion"]
  items:
    - ["Some Roman gladiators wore bronze helmets", "Factual claim", "Helmets found at Pompeii and shown on reliefs can be checked directly."]
    - ["All gladiators were brave heroes", "Opinion", "'Brave' and 'all' are judgements that cannot be proved by checking objects."]
    - ["Thousands of clay warriors were buried near the First Emperor's tomb", "Factual claim", "Archaeologists have excavated and counted the figures in the pits."]
    - ["The First Emperor was the greatest ruler in world history", "Opinion", "'Greatest' is a value judgement that depends on what a person admires."]
    - ["The Shuihudi bamboo slips list punishments for officials who lose grain", "Factual claim", "Anyone reading the excavated bamboo slips can check what rules are written on them."]
    - ["Qin laws were too harsh and unfair", "Opinion", "'Too harsh' and 'unfair' are judgements about the laws, not a checkable description of what the words say."]
```

Notice the pattern. A factual claim does not mean a source is automatically right — someone can still get a fact wrong or lie — but it is a claim that **can be checked** against other evidence. An opinion expresses a judgement or attitude.

## Worked example: checking Source C's accuracy

```step
stage: investigate
insight: "Applying the four accuracy questions to the Qin stone inscription shows how purpose and bias affect reliability, and catches Nib's 'primary means all fact' mistake."
tasks:
  - check:
      type: question
      q: "Historians want to check whether Source C is accurate when it claims the Qin introduced one standard system of weights and measures. Which other source would best support or challenge that claim?"
      options:
        - "Bronze weights and measuring vessels excavated from different parts of the Qin empire, stamped with the same official measure"
        - "Another copy of the same praise poem carved by the same court officials"
        - "Sima Qian's moral judgement that the First Emperor was a harsh ruler"
        - "A modern textbook paragraph that repeats Source C's words without citing other evidence"
      answer: 0
      feedback:
        - null
        - "A second copy from the same court officials has the same purpose and bias, so it does not independently test whether the weights were actually used."
        - "An opinion about whether the emperor was harsh does not test the factual claim about weights and measures."
        - "A secondary summary that simply repeats Source C is not independent evidence."
      explain: "Checking one source against a different kind of evidence — such as excavated bronze weights — is how historians test whether a factual claim is accurate."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is checking the accuracy of Source C, the mountain inscription. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: primary-means-all-fact
      explain: "Line 3: Nib assumes every sentence in a primary source is a fact just because the writer lived at the time. Primary sources were made by real people with purposes and biases, so they contain opinions, boasting and one-sided claims alongside facts."
    smaller:
      check:
        type: question
        q: "If a ruler pays carvers to write 'I am the wisest ruler of all time' on a stone during his reign, does being written at the time make that sentence a fact?"
        options:
          - "No, it is still an opinion made to praise the ruler"
          - "Yes, anything written at the time is a fact"
          - "It becomes a fact once the stone is two thousand years old"
          - "It is a secondary source because it is carved in stone"
        answer: 0
        explain: "When a statement was written tells you whether it is primary; whether it can be checked or is a value judgement tells you whether it is a fact or an opinion."
  - check:
      type: question
      q: "Why might Source C be less accurate when it claims that 'all people across the empire are happy and at peace'?"
      options:
        - "Its purpose was official propaganda to win support after a war of conquest, so its makers had a strong reason to leave out discontent"
        - "It is a secondary source written long after the Qin empire fell"
        - "It gives only the perspective of conquered peasant farmers and leaves out the court's view"
        - "Public stone monuments were only allowed to record neutral statistics"
      answer: 0
      feedback:
        - null
        - "Source C is a primary source from 219 BCE; its limit comes from its propagandistic purpose, not from being written later."
        - "It gives the opposite: the imperial court's official view, leaving out conquered people's perspectives."
        - "Public monuments were often commissioned to praise rulers and persuade the public, not to record neutral statistics."
      explain: "A source's purpose and bias affect its accuracy: an official monument made to celebrate a conquest is not a neutral survey of how conquered people felt."
```

### Testing Source C with the four accuracy questions

```worked
\text{1. Where does it come from?} :: Ordered by the First Emperor around 219 BCE, soon after conquering six rival kingdoms.
\text{2. What information is provided?} :: Claims he united the land, standardised laws and measures, and brought universal peace and happiness.
\text{3. Fact or opinion?} :: Standardising laws and measures is a factual claim; 'glorious rule' and 'everyone is happy' are opinions and praise.
\text{4. What other sources check it?} :: Excavated Qin bronze weights and the Shuihudi legal slips support the standardisation claim; records of rebellions and harsh punishments challenge the 'everyone was happy' claim.
```

Now: how do you test a factual claim in Source C, where does Nib go wrong, and why does purpose affect accuracy?

### Find Nib's mistake

### How purpose affects accuracy

## Vary: Sima Qian's history

```step
stage: modify
insight: "Applying the accuracy questions to a later historian's account shows that secondary or later sources also need checking for bias and corroboration."
tasks:
  - check:
      type: match
      q: "Match each accuracy question to what a historian asks about Sima Qian's *Records of the Grand Historian* (written around 100 years after the Qin fell, for the Han court)."
      pairs:
        - ["Where does it come from?", "Written by Sima Qian, a Han court historian, about a century after the Qin dynasty collapsed"]
        - ["What information is provided?", "Describes the First Emperor's building projects, laws, and reports that he buried scholars and burned books"]
        - ["Is it factual or opinion?", "Mixes factual records (dates of campaigns, laws) with moral judgements that the First Emperor was cruel and greedy"]
        - ["What other sources support or challenge it?", "Archaeological digs and Qin bamboo slips from tombs can be compared with Sima Qian's claims"]
  - check:
      type: question
      q: "Why do historians ask 'What other sources might support or challenge this source?' before accepting Sima Qian's sharpest criticisms of the First Emperor?"
      options:
        - "Sima Qian wrote under the Han dynasty, which overthrew the Qin and had a reason to make the previous dynasty look bad"
        - "Because Sima Qian never read any older records"
        - "Because written sources can never contain any accurate facts"
        - "Because historians only trust sources that agree with everything the emperor said"
      answer: 0
      feedback:
        - null
        - "Sima Qian had access to imperial archives and earlier records, which is why many of his factual details are valuable."
        - "Written sources contain many accurate facts, especially when corroborated by archaeology."
        - "The emperor's own inscriptions were biased in his favour, so historians test both sides against independent evidence."
      explain: "Because Sima Qian wrote under the dynasty that replaced the Qin, checking his claims against excavated Qin records helps separate accurate facts from Han-era spin."
```

### Four accuracy questions on Sima Qian

### Why check against other sources?

## Practise: judge the accuracy

```step
stage: practise
insight: "Practising the distinction between a source's factual claims, its opinions, and what limits its reliability."
tasks:
  - check:
      type: sort
      q: "Which factor is affecting accuracy in each example?"
      options: ["Purpose / bias", "Limited information", "Opinion stated as fact"]
      items:
        - ["A king's victory monument leaves out a battle his army lost", "Purpose / bias", "The monument was made to celebrate the king, so defeats were left out on purpose."]
        - ["A traveller writes about a whole empire after visiting only one port town for two days", "Limited information", "The writer saw only a tiny part of the country, so their knowledge is incomplete."]
        - ["A chronicler writes 'Our city's laws are the fairest in the world'", "Opinion stated as fact", "'Fairest in the world' is a value judgement, not a checkable fact."]
  - check:
      type: question
      q: "Mei reads a Qin bamboo slip (Source B) that records how many sacks of grain were stored in a county warehouse and the fine for losing them. Why is this likely to be more accurate about day-to-day rules than a mountain praise inscription?"
      options:
        - "It was a working record written for officials who actually had to count the grain and apply the fines, not a public boast"
        - "Because it is older than the mountain inscription, and older sources are always more accurate"
        - "Because government officials never have a point of view or make mistakes"
        - "Because it is a secondary source written by neutral modern historians"
      answer: 0
      feedback:
        - null
        - "Both sources come from the Qin dynasty (around 219–217 BCE); age alone does not make a source more accurate."
        - "Officials could still make mistakes or have bias, so historians still cross-check, but a working rulebook had a practical reason to state the real rules."
        - "The Shuihudi bamboo slips are a primary source buried in 217 BCE, not a modern secondary source."
      explain: "A working administrative record needed to be accurate enough for officials to use, whereas a public monument was designed to impress."
```

### What limits accuracy?

### Working record vs public boast

## Make: test a source in your book

```step
stage: make
insight: "Applying the four accuracy questions and separating fact from opinion in your own book builds the habit."
check:
  type: reflect
  text: "In my own book I chose one source (from our unit, or Source C / Sima Qian), wrote one factual claim and one opinion from it, and answered two accuracy questions: what might limit its accuracy, and what other source could support or challenge it. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: when two sources agree

```step
stage: make
tier: typical
insight: "When two independent sources with different purposes agree on a claim, historians can be much more confident it is accurate."
check:
  type: question
  q: "Sima Qian (writing a century later for the Han court) says the Qin had strict laws that punished officials for small mistakes. The Shuihudi bamboo slips (buried with a Qin official in 217 BCE) list fines for officials who miscount grain or miss deadlines. What does putting these two sources together tell a historian?"
  options:
    - "The bamboo slips corroborate Sima Qian's claim that Qin administrative rules were strict and detailed"
    - "The bamboo slips are not needed, because a famous historian's book already proves the claim on its own"
    - "A primary source from 217 BCE cannot be compared with an account written a hundred years later"
    - "Agreeing on these fines proves that every moral opinion Sima Qian wrote about the First Emperor is also a fact"
  answer: 0
  feedback:
    - null
    - "Because Sima Qian wrote a century later under a rival dynasty, checking his claim against a Qin-era working record is essential."
    - "Comparing a later written account with primary archaeological evidence from the time is how corroboration works."
    - "Corroborating one factual claim about fines does not turn Sima Qian's value judgements into facts."
  explain: "When an excavated working record from 217 BCE matches what a later historian wrote, the two sources support each other on that point."
```

## Wider: deliberate propaganda vs perspective limits

```step
stage: make
tier: wider
insight: "A source can be inaccurate in two different ways: because its maker deliberately tried to persuade, or because its maker could only see one part of society."
check:
  type: sort
  q: "Sort each case into whether the limit on accuracy comes mainly from deliberate persuasion (propaganda) or a limited viewpoint (only seeing part of society)."
  options: ["Deliberate persuasion", "Limited viewpoint"]
  items:
    - ["A ruler's inscription claims every conquered town welcomed his army with joy", "Deliberate persuasion", "The ruler is actively trying to convince readers that his conquest was popular."]
    - ["A wealthy court noble's diary describes banquets and silk robes but never mentions how peasant farmers lived", "Limited viewpoint", "The noble is writing privately about daily life at court, which is the only world they see."]
    - ["A general's report to the capital doubles the number of enemy soldiers he defeated to win a reward", "Deliberate persuasion", "The general is exaggerating on purpose to gain status."]
    - ["A tax clerk's tally records grain paid by registered households, missing families who lived in the hills off the register", "Limited viewpoint", "The clerk is recording what comes to the office, so people outside the system are invisible in the record."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
