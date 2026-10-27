---
order: 6
unit: ideas
title: What comes first
summary: "Where a writer puts an idea changes how much it matters to the reader. News reports put the main point first, then details, then background, so a reader in a hurry still gets the news. The same order can also hide things: what comes last, or isn't there at all, gets less attention. Good readers ask what a structure puts first and what it leaves out."
language: maths
node: [AC9E8LY04 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The main point comes first, a detail follows, and the background comes last, so a reader who stops early still gets the news." }
hook: "Most people read only the first line or two of a news story. If you wrote the story, what would you put there?"
---
Where a writer puts an idea changes how much it **matters** to the reader. What comes first gets the spotlight.

A **news report** is built for readers in a hurry:

- **Main point** first: what happened, or what is changing.
- **Details** next: when, where, how many.
- **Background** last: how it came about.

The order can also hide things. What comes last, or is left out, gets less attention.

## Predict: what sticks?

```step
stage: predict
insight: "Predicting that readers remember what comes first sets up the idea that order shapes meaning."
check:
  type: predict
  q: "Two news reports use the same facts about a new school bus. One starts with the 15 minutes it saves. The other starts with the $40,000 a year it costs. Which fact will most readers of each report remember?"
  options: ["Whichever fact comes first", "Whichever fact comes last", "The number with the dollar sign", "Both facts equally"]
  actual: "Whichever comes first. Readers give the opening the most attention, and many stop reading soon after. The writer's choice of what goes first shapes what readers take away."
```

## Try: put the main point first

```step
stage: run
insight: "Reordering a news report so the main point leads and the background trails makes the reader-in-a-hurry structure physical."
try: { playground: board, starter: "text.yml#run", height: 340 }
hint: ["Click a sentence, then press Move up or Move down.", "Which sentence would you keep if you could keep only one? Put it first. Which sentence explains how it all started? Put it last."]
smaller:
  check: { type: question, q: "If a reader reads only one sentence of the bus report, which one should it be?", options: ["The new bus route starts next term and will cut the trip by 15 minutes.", "About 60 students are expected to use it each day.", "The idea came from last year's student survey."], answer: 0, feedback: [null, "Useful, but it only makes sense once you know there is a new bus.", "That's how it started: interesting, but not the news."], explain: "The new route and the time it saves is the news. Everything else adds to it." }
check: { type: board, text: "Put the main point first and the background last.", when: "first_ok = 1 and last_ok = 1", explain: "The new route and the time saved is the news, so it goes first. The times and numbers are details. The survey is background: how it came about, so it goes last." }
```

Were you right about what sticks? The writer of the bus report chose to lead with the time saved, not the cost.

## Worked example: what the order does

```step
stage: investigate
insight: "Asking why news leads with the main point, catching Nib's buried point and asking what a structure leaves out show order as a choice with effects."
tasks:
  - check:
      type: question
      q: "Why do news reports usually put the main point first?"
      options: ["Many readers stop early, so they still get the news", "The main point is always the shortest sentence", "Background is boring, so it goes last", "It is a rule that every text must follow"]
      answer: 0
      feedback: [null, "Length doesn't decide the order.", "Background can be interesting. It goes last because readers need it least.", "Stories often save their biggest moment for the end. News doesn't."]
      explain: "News is built for readers who may stop at any point. Putting the main point first means even a quick reader leaves with it."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's report on the school fete, one sentence per line. Click the line a reader in a hurry needs first, but Nib left to the end."
      answer: 4
      fault: logic
      misconception: main-point-buried
      explain: "Line 4: the $8,000 raised is the news, but a reader who stops after two lines never reaches it. Nib should open with it, then the stalls and the lemon slice as details."
  - check:
      type: question
      q: "A canteen newsletter lists three good things about the new menu: more salads, less sugar and shorter queues. It doesn't mention that prices went up. What does this structure do?"
      options: ["It shows one side, so readers may miss the price rise", "It gives a fair and balanced report of the new menu", "It retells the canteen's year as a recount", "Nothing, because every fact in it is true"]
      answer: 0
      feedback: [null, "Balanced would include the price rise too.", "There's no orientation or events in time order.", "True facts can still leave readers with half the picture."]
      explain: "What a structure leaves out shapes meaning as much as what it puts first. A careful reader asks: what isn't here?"
```

### The order is a choice

```worked
\text{Find what comes first} :: That is what the writer wants you to notice most.
\text{Find what comes last} :: That gets the least attention, and quick readers may miss it.
\text{Ask what is left out} :: What would someone on the other side want you to know?
\text{Ask who it suits} :: Who gains from this order?
```

Now: why does news lead with the main point?

### Find Nib's slip

### What's left out?

## Vary: label the parts of a news item

```step
stage: modify
insight: "Labelling a news item that is already in news order shows the three parts and why each sits where it does."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["Click a sentence, then choose Main point, Detail or Background.", "Background says how it came about. Details add facts about the news."]
check: { type: board, text: "Label the main point, the details and the background.", when: "n_right = 4 and n_wrong = 0", explain: "The reopening is the main point. The new surface and who can use it are details. The cracked slide in March is background: why the playground closed in the first place." }
```

## Practise: label it and order it

```step
stage: practise
insight: "Labelling and then reordering the same news item combines both moves: know what each part does, then put it where a reader needs it."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Label each sentence first: what's the main point, what are the details, what's background?", "Then move the main point to the top and the background to the bottom."]
check: { type: board, text: "Label each sentence, then put the main point first and the background last.", when: "n_right = 4 and n_wrong = 0 and first_ok = 1 and last_ok = 1", explain: "Cancelled sport is the news, so it leads. Sport in the hall and the cancelled cricket match are details. The heat rules are background: why it happens." }
```

## Make: same facts, two orders

```step
stage: make
insight: "Judging which order suits which reader, and what each order hides, is the open part of the skill, so it is compared with model answers, not marked."
check:
  type: reasoning
  q: "Version A of the bus report starts with the 15 minutes saved. Version B starts with the $40,000 a year it costs. Which version would you send to families, and which to the school council deciding whether to pay for it? What does each version push into the background?"
  placeholder: "I would send Version ... to families because ... Version ... pushes ... into the background."
  models:
    - title: "A strong answer"
      text: "I'd send Version A to families, because they care most about how long their children spend on the bus. I'd send Version B to the council, because they have to decide whether $40,000 is worth paying. Version A pushes the cost into the background, so families might not realise the school is paying for it. Version B pushes the time saved into the background, so the council might forget the benefit."
    - title: "A different view that also works"
      text: "I'd send both groups a version that starts with the time saved and the cost together, in the first sentence, because each group should weigh both. Putting either fact first makes the reader see it as the most important, and leaving the other until later makes it seem smaller."
  criteria: ["I chose a version for each reader and said why.", "I said what each version pushes into the background.", "I explained how the order changes what a reader takes away."]
  explain: "There isn't one right answer. The skill is noticing that order is a choice: whatever comes first shapes what the reader thinks matters, and whatever comes later can be missed."
```

## In your own reading

```step
stage: make
tier: typical
insight: "Asking what a real text puts first and leaves out builds a critical reading habit."
check: { type: reflect, text: "I read a real news story or school newsletter and asked: what comes first, what comes last, and what might be left out? I told a partner what I found." }
```
