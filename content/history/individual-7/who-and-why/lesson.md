---
order: 1
unit: who
title: Who was he, and why does he matter?
node: AC9HH7K13 n1
assumes: [AC9HH7K12]
summary: "Identify Qin Shi Huang, the First Emperor of China: when he lived, the position he held and the world of rival kingdoms he grew up in. Then use three tests to explain why historians call a person significant: they changed many people's lives, the effects lasted, and people still remember and argue about them. Being famous is not the same as being significant."
language: maths
hook: "Millions of people have seen photos of the clay army made for his tomb. Is that why he matters to historians, or is there a better reason?"
---
You have met the **First Emperor** many times in these courses: his clay army, his stone inscriptions, his officials and commanderies. This lesson asks who he was, and why historians think he matters.

| Question | Answer |
|---|---|
| Who? | Ying Zheng, later called **Qin Shi Huang**, which means "First Emperor of Qin" |
| When? | Born about 259 BCE, died 210 BCE |
| Where? | The state of Qin, in the Wei River valley in the north-west of what is now China |
| What position? | King of Qin from 246 BCE, when he was about 13; Emperor from 221 BCE until he died |

**The world he grew up in.** For about 250 years before him, the land we now call China was split into rival kingdoms that fought each other. Historians call this the **Warring States** period. Qin was one of these kingdoms, and over many years it had made its army and government strong. Between 230 and 221 BCE, Qin's armies defeated the last six rival kingdoms. Ying Zheng then took a new title, never used before: *huangdi*, emperor.

**What makes a person significant?** Historians use the word **significant** for a person, event or change that matters to history. Many people are famous, but that is not the test. Historians ask questions like these:

1. **Many lives:** did they change the lives of many people, at the time?
2. **Lasting effects:** did those changes last after they died?
3. **Remembered and argued about:** do people still remember them, and disagree about them?

These three tests are one way historians judge significance (there are others, and historians argue about which matter most). A person can be famous for something that changed very little, and a person most of us have never heard of can be very significant.

## Predict: why does he matter?

```step
stage: predict
insight: "Committing first shows whether students treat fame as the reason a person matters."
check:
  type: predict
  q: "Which is the best reason a historian would call the First Emperor significant?"
  options:
    - "He joined the rival kingdoms into one empire, and that changed the lives of millions of people for a long time"
    - "His clay army is one of the most famous sights in the world today"
    - "He was the richest and most powerful person of his time"
    - "He appears in films, games and books"
  actual: "Joining the kingdoms and changing millions of lives for a long time. Fame, wealth and films show he is well known, not that he changed things."
```

## Try: who, or why?

```step
stage: run
insight: "Sorting facts about the person from reasons for significance separates identifying him from explaining why he matters."
check:
  type: sort
  q: "Is each statement a fact about who he was, or a reason he is significant?"
  options: ["Who he was", "Why he is significant"]
  items:
    - ["He became King of Qin in 246 BCE", "Who he was", "That is his position and a date."]
    - ["He was born about 259 BCE", "Who he was", "That is when he lived."]
    - ["The empire he made covered the lands of seven former kingdoms", "Why he is significant", "That changed many people's lives."]
    - ["Later rulers of China kept his way of running an empire", "Why he is significant", "That is a lasting effect."]
    - ["He took the new title huangdi, emperor", "Who he was", "That is his position."]
    - ["Writers have argued about him for over 2,000 years", "Why he is significant", "Remembered and argued about."]
```

Was your guess right? Knowing who he was comes first. Significance is about what changed because of him.

## Worked example: the three tests

```step
stage: investigate
insight: "Matching each test to evidence, then fixing Nib's 'famous, so significant', shows significance is about change, not fame."
tasks:
  - check:
      type: match
      q: "Match each test of significance to the evidence about the First Emperor that fits it."
      pairs:
        - ["Changed many lives", "People in seven former kingdoms now lived under one ruler and one set of laws"]
        - ["Effects lasted", "Later dynasties kept his officials, commanderies and written script"]
        - ["Remembered and argued about", "Some writers praised him and others called him cruel, for 2,000 years"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining why the First Emperor is significant. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: famous-means-significant
      explain: "Line 3: Nib says he is significant because he is famous. Fame tells you he is well known today, not what changed because of him. A historian asks whose lives he changed, and whether those changes lasted."
    smaller:
      check:
        type: question
        q: "Imagine a made-up singer who is very famous for one summer, then nothing changes because of her. Is she significant to history?"
        options:
          - "Probably not: being famous did not change many lives or last"
          - "Yes: anyone famous is significant"
          - "Yes: if millions knew her name, she changed history"
          - "No: only rulers can ever be significant"
        answer: 0
        feedback:
          - null
          - "That is Nib's slip. Fame shows people knew her, not that anything changed."
          - "Knowing a name is not the same as having your life changed by someone."
          - "Thinkers, builders and ordinary people can be significant too. The test is what changed."
        explain: "Significance is about change that touched many people and lasted, not how well known someone is."
  - check:
      type: question
      q: "Why does the lesson describe the Warring States before the First Emperor's achievements?"
      options:
        - "His actions make sense only against his world: rival kingdoms that had fought for centuries"
        - "Because he was born long before the Warring States period began"
        - "Because the Warring States were the names of his own family members"
        - "There is no real reason; it is just extra information to read"
      answer: 0
      feedback:
        - null
        - "He was born near the end of that period, about 259 BCE, and ended it in 221 BCE."
        - "The Warring States were the rival kingdoms, not a family."
        - "Context is what makes his achievements make sense. Joining kingdoms only matters if they were split."
      explain: "Context is the world a person lived in. It shows what was possible and what they changed."
```

### Three tests

### Find Nib's mistake

### Why the context?

## Vary: who else counts?

```step
stage: modify
insight: "Applying the tests to a less famous person shows significance and fame can come apart."
check:
  type: question
  q: "Li Si was the First Emperor's chief minister. Far fewer people know his name. Historians think he helped plan the single script and the system of commanderies. Could he be significant?"
  options:
    - "Yes: if his plans changed many lives and lasted, he is significant even though few know his name"
    - "No: if most people have not heard of him, he cannot be significant"
    - "No: only the emperor can be significant, because he had the title"
    - "Yes: everyone who worked at court was equally significant"
  answer: 0
  feedback:
    - null
    - "That is Nib's slip turned round. Being unknown today does not mean nothing changed because of him."
    - "A title is a position, not a test. Advisers and officials can change things too."
    - "The tests still apply. Some officials changed much more than others."
  explain: "The tests ask what changed, not how famous someone is or what title they held."
```

## Practise: who, when and why

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which is the best short description of who the First Emperor was?"
      options:
        - "Ying Zheng, King of Qin from 246 BCE, who united the rival kingdoms and ruled as emperor from 221 to 210 BCE"
        - "The man who built the Great Wall that tourists visit today, all on his own, in about 1500 CE"
        - "A Han emperor who wrote the first history of China in about 100 BCE"
        - "An army general who defeated Qin and took its land in about 300 BCE"
      answer: 0
      feedback:
        - null
        - "Most of the wall tourists visit was built much later, under the Ming. His walls were earlier, and he did not build them himself."
        - "That sounds like Sima Qian, a Han court historian who wrote about the First Emperor later."
        - "He was the ruler of Qin, and Qin defeated the others."
      explain: "Name, position, dates and what he did: that identifies him."
  - check:
      type: sort
      q: "Which test of significance does each piece of evidence fit?"
      options: ["Changed many lives", "Effects lasted", "Remembered and argued about"]
      items:
        - ["Farmers across the empire paid tax to one government", "Changed many lives", "Millions were affected at the time."]
        - ["The Han dynasty kept his commanderies and script", "Effects lasted", "They carried on after he died."]
        - ["Han writers called him a cruel ruler", "Remembered and argued about", "A later judgement of him."]
        - ["People across China kept writing one shared script for centuries", "Effects lasted", "A change that outlived him."]
insight: "Practising the identity facts and the three tests on their own."
```

### Who was he?

### Which test?

## Make: who, and why, in your book

```step
stage: make
insight: "Writing who a person was and testing their significance makes the routine their own."
check: { type: reflect, text: "In my own book I wrote who a significant person was (the First Emperor, or the person our class is studying): their name, when they lived and their position, a sentence on the world they lived in, and one reason they are significant using one of the three tests, with evidence. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Hatshepsut

```step
stage: make
tier: typical
insight: "The same who-when-position-why routine works for an individual in another society."
check:
  type: question
  q: "Hatshepsut ruled Egypt as pharaoh, about 1479 to 1458 BCE, first as regent for the young Thutmose III and then as king herself. Which is the best reason to call her significant? (See the Egypt card on the Reference page.)"
  options:
    - "A woman who ruled Egypt for about 20 years, she sent a trading expedition to Punt and built a great temple"
    - "She is significant because her statues are famous in museums around the world today"
    - "She is significant only because she was rich and lived in a palace"
    - "She is not significant, because later kings removed her name from monuments"
  answer: 0
  feedback:
    - null
    - "That is fame today. Ask what changed because of her."
    - "Wealth is not a test. Many rich people changed little."
    - "Removing her name shows people at the time argued about her rule, which is part of why she is remembered."
  explain: "Her position, how long she ruled and what she did are the evidence for significance."
```

## Wider: how do we know about Socrates?

```step
stage: make
tier: wider
insight: "Asking where our information about a person comes from shows that significance rests on sources."
check:
  type: question
  q: "Socrates, a thinker in Athens (about 469 to 399 BCE), wrote nothing himself. We know him from his student Plato, from Xenophon, and from a comic play by Aristophanes that mocked him. What should a historian keep in mind? (See the Greece card.)"
  options:
    - "Each writer had their own view of him, so we compare them, and we cannot be sure exactly what he thought"
    - "Plato was his student, so everything Plato wrote is exactly what Socrates said"
    - "A comic play is a joke, so it tells us nothing at all"
    - "If he wrote nothing, he cannot be significant"
  answer: 0
  feedback:
    - null
    - "Plato admired him and may have put his own ideas into Socrates' mouth. Scholars argue about this."
    - "A comedy shows how some Athenians saw him at the time. That is evidence too."
    - "His ideas changed how people thought, through his students. Writing is not the test."
  explain: "A person's reputation comes to us through other people's writing, each with its own view."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
