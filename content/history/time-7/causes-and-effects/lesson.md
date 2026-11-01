---
order: 2
unit: causes
title: Why did Qin win?
node: AC9HH7S05 n2
summary: "Explain why a big event happened by finding several causes, not just one. Long-term causes build up over many years; short-term causes come just before; a trigger is the spark that sets the event off at that moment. Then describe the event's effects, both straight away and long afterwards. The worked event is the state of Qin conquering its rivals and unifying China in 221 BCE."
language: maths
hook: "In 230 BCE there were seven rival states in China. Nine years later there was one. Why Qin?"
---
For hundreds of years, China was split into rival states that fought each other. In 221 BCE one of them, **Qin**, had conquered the rest. Its king took a new title: the **First Emperor**.

Historians rarely explain an event like this with one reason. They look for **several causes**, working over different lengths of time:

- **Long-term causes** (also called *underlying* causes) build up over many years. They make the event possible.
- **Short-term causes** happen just before the event.
- A **trigger** is the spark that sets the event off at that moment. It explains *when*, but not on its own *why*.

They also look at **effects**: what the event changed straight away (short-term), and what it changed for a long time afterwards (long-term).

## Predict: why Qin?

```step
stage: predict
insight: "Committing first shows whether students reach for one big reason, the slip this hinge is about."
check:
  type: predict
  q: "Why do you think Qin, out of seven rival states, ended up ruling them all?"
  options:
    - "Several things together: a strong army, a lot of food and a determined king"
    - "Only because King Zheng was a brilliant leader"
    - "Only because Qin was lucky in its last few battles"
    - "Only because the other six states were weak"
  actual: "Historians usually point to several causes working together: reforms over a century that made Qin's army and farms strong, grain from irrigated land, and King Zheng's campaigns at the end. No single one explains it alone."
```

## Try: long-term or short-term?

```step
stage: run
insight: "Sorting causes by when they happened turns 'long-term' and 'short-term' into something students can check against dates."
check:
  type: sort
  q: "Qin unified China in 221 BCE. Sort each cause: long-term or short-term?"
  options: ["Long-term (many years before)", "Short-term (just before)"]
  items:
    - ["Reforms that gave land and rank to soldiers and farmers, in the 300s BCE", "Long-term (many years before)", "Over a century before 221 BCE."]
    - ["The Dujiangyan waterworks irrigating the Chengdu Plain, from about 256 BCE", "Long-term (many years before)", "About 35 years of extra grain before unification."]
    - ["King Zheng's armies conquering the last six states, 230 to 221 BCE", "Short-term (just before)", "The final campaigns, in the years just before."]
```

Was your guess right? The dates decide which kind each cause is.

## Worked example: putting causes together

Historians usually explain Qin's success something like this. It is one way of putting it together; they still argue about which cause mattered most.

| | Cause | Why it mattered |
|---|---|---|
| Long-term | Reforms in the 300s BCE rewarded farming and fighting with land and rank | Qin had many farmers and soldiers with a reason to work hard |
| Long-term | Dujiangyan (about 256 BCE) watered the Chengdu Plain | More grain to feed big armies far from home |
| Short-term | King Zheng's campaigns, 230 to 221 BCE | Qin used that strength to conquer the six states one after another |

No single row explains the event. Take away the grain and the army can't be fed. Take away the campaigns and Qin is just a strong state, not an empire.

**Effects**

| | Effect |
|---|---|
| Short-term | One ruler over all the former states, with officials sent to run each commandery |
| Long-term | One written script, and standard weights, measures and coins, which later dynasties kept |

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Catching Nib's one-cause answer names the hinge slip; the second check separates causes from effects."
tasks:
  - check:
      type: bug
      code: "causes.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: single-cause-event
      explain: "Line 3: Nib turns one cause into the whole explanation. King Zheng's campaigns mattered, but they rested on a century of reforms and the grain to feed his armies."
    hint: ["Could King Zheng have won with no grain and no army?", "Look for the line that says 'only'."]
    smaller:
      check:
        type: question
        q: "A netball team wins the grand final. Which explanation is best?"
        options:
          - "Hard training all season, a strong defence and a great last quarter"
          - "Only the captain, because she shot the winning goal"
          - "Only luck, because the other team missed a shot"
          - "Only the last quarter, because that is when they won"
        answer: 0
        feedback:
          - null
          - "The captain mattered, but she was one player in a team that had trained all season."
          - "Luck may have helped, but a team does not reach a final by luck alone."
          - "The last quarter was the trigger for the win. The season's work made it possible."
        explain: "Big results usually have several causes: some build up over time, some happen right at the end."
  - check:
      type: question
      q: "Which of these is an effect of Qin unifying China, not a cause?"
      options:
        - "One written script used across the whole empire"
        - "Reforms rewarding farmers and soldiers in the 300s BCE"
        - "Grain from the irrigated Chengdu Plain"
        - "King Zheng's campaigns against the six states"
      answer: 0
      feedback:
        - null
        - "That came long before 221 BCE, so it is a cause, not an effect."
        - "The grain fed Qin's armies before unification: a cause."
        - "The campaigns came before and led to unification: a short-term cause."
      explain: "A cause comes before the event and helps explain it; an effect comes after and is changed by it."
```

### Find Nib's mistake

### Cause or effect?

## Vary: what was the trigger?

In 209 BCE, the year after the First Emperor died, a revolt began. **According to Sima Qian**, a Han court historian writing about a century later, a group of men called up for service were held up by heavy rain. They knew they would arrive late and feared being punished, so they rebelled instead. Revolts spread across the old states, and the Qin dynasty fell in 206 BCE.

```step
stage: modify
insight: "The rain story is a clear trigger; separating it from the underlying causes practises the second distinction in the checkpoint."
check:
  type: question
  q: "In Sima Qian's account, which was the trigger for the 209 BCE revolt?"
  options:
    - "Rain held up the men, so they knew they would arrive late"
    - "Years of heavy demands for labour and soldiers across the empire"
    - "People in the conquered states resenting Qin rule"
    - "The First Emperor dying the year before"
  answer: 0
  feedback:
    - null
    - "That was building up for years: an underlying cause. Ask what set the revolt off on that day."
    - "That resentment was there long before 209 BCE: an underlying cause, not the spark."
    - "That came before the revolt, but coming before doesn't make it the spark. What set off this group, that day?"
  explain: "The rain was the spark, as Sima Qian tells it. The years of hard demands and resentment explain why one small revolt spread so fast."
```

## Practise: short-term or long-term effects?

```step
stage: practise
insight: "Sorting effects by timescale checks the effects half of the checkpoint on its own."
check:
  type: sort
  q: "Sort each effect of Qin unifying China in 221 BCE."
  options: ["Short-term effect", "Long-term effect"]
  items:
    - ["The six rival kings lost their thrones", "Short-term effect", "This happened at once."]
    - ["Officials were sent to run the commanderies", "Short-term effect", "The new empire needed running straight away."]
    - ["Later dynasties kept one written script", "Long-term effect", "It lasted far beyond the Qin."]
    - ["Later dynasties kept the Qin way of running an empire", "Long-term effect", "The Han and dynasties after them kept it."]
```

## Make: causes and effects, in your book

```step
stage: make
insight: "Writing their own multi-causal explanation is the checkpoint itself."
check: { type: reflect, text: "In my own book I explained one event from the society our class is studying (or Qin unifying China), with at least two causes (one long-term, one short-term) and two effects. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Rome gets an emperor

In 27 BCE, Octavian took the name **Augustus** and became, in practice, Rome's first emperor. For decades before, powerful generals with armies loyal to them had fought each other in civil wars. In 31 BCE Octavian defeated his last rivals, Mark Antony and Cleopatra, at the battle of Actium.

```step
stage: make
tier: typical
insight: "The same long-term and short-term split works on Rome, which shows the skill travels."
check:
  type: sort
  q: "Sort each cause of Augustus becoming Rome's first emperor in 27 BCE."
  options: ["Long-term", "Short-term"]
  items:
    - ["Decades of civil wars between powerful generals", "Long-term", "A slow build-up over generations."]
    - ["Armies more loyal to their generals than to Rome", "Long-term", "This grew over many years."]
    - ["Octavian's victory at Actium in 31 BCE", "Short-term", "Four years before."]
```

## Wider: which cause mattered most?

```step
stage: make
tier: wider
insight: "Weighing causes is where historians disagree, so this step practises asking what would settle it, not picking a winner."
check:
  type: question
  q: "Two students argue. One says Qin's reforms mattered most; the other says King Zheng's campaigns did. What would help them most?"
  options:
    - "Asking what each cause did, and whether Qin could have won without it"
    - "Choosing whichever cause happened closest to 221 BCE"
    - "Choosing whichever cause the textbook lists first"
    - "Agreeing that every cause mattered exactly the same"
  answer: 0
  feedback:
    - null
    - "The latest cause is not always the most important one: that is the trigger slip."
    - "The order a book lists causes in is not an argument."
    - "Historians often argue some causes mattered more. They give reasons."
  explain: "Historians weigh causes by asking what each one did and what would have happened without it, and they back their answer with evidence."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
