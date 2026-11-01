---
order: 5
unit: civics
title: Three levels of government
node: [AC9HS6K07 n1, AC9HS6K07 n4, AC9HS6K06 n1]
summary: "Australia has three levels of government, each looking after different things. Local councils look after things like rubbish, parks and local roads. State and territory governments look after things like schools, hospitals and police. The federal (Australian) government looks after things that affect the whole country, like money, defence and immigration. In the ACT, the ACT Government does both the state and the local jobs."
language: science
shape: primer
assumes: [AC9HS6K07 n3, AC9HS6K01]
hook: "A pothole on your street, a new school and the money in your pocket. Is one government in charge of all three?"
---
Australia has **three levels of government**. Each one looks after different things, and each has its own elected representatives.

- **Local councils** look after things in your local area: rubbish and recycling, parks and sports fields, local roads, libraries and pet control.
- **State and territory governments** look after things across a state or territory: schools, hospitals, police and public transport.
- **The federal government** (the Australian Government) looks after things that affect the whole country: money, defence, immigration, and post and the internet.

Each level has people you elect, and each can make laws for its own jobs. A council makes local laws, such as rules for dogs in parks. A state parliament makes laws for the state, such as road rules. The federal Parliament makes laws for the whole country.

Three kinds of institution run through the system. **Parliaments** make laws. **Courts** decide what the law means when people disagree. And the **King**, represented by the Governor-General (and a Governor in each state), signs laws passed by Parliament.

**If you live in Canberra:** the ACT has no local councils. The ACT Government does both the state jobs and the local jobs.

Wattle Creek, where these examples happen, is a made-up town.

## Think first

```step
stage: predict
insight: "Committing first shows whether students think one government runs everything."
check:
  type: predict
  q: "A pothole appears on a street in Wattle Creek. Which level of government usually fixes it?"
  options: ["The local council", "The federal government", "The state government", "The Prime Minister"]
  actual: "The local council. Local roads are a council job. Highways and main roads are usually looked after by the state."
```

## Try: who looks after it?

```step
stage: run
insight: "Sorting everyday services into the three levels shows that each level has its own jobs."
check:
  type: sort
  q: "Which level of government looks after each one?"
  options: ["Local council", "State or territory", "Federal"]
  items:
    - ["Emptying the bins", "Local council", "Rubbish and recycling are council jobs."]
    - ["Running the town's park", "Local council", "Parks and sports fields are council jobs."]
    - ["Running public hospitals", "State or territory", "Hospitals are a state or territory job."]
    - ["Running public schools", "State or territory", "Public schools are run by the state or territory."]
    - ["Making Australia's money", "Federal", "Money is a federal job, the same for the whole country."]
    - ["Defending the country", "Federal", "Defence is a federal job."]
```

## The idea: each level has its own jobs

```step
stage: investigate
insight: "Seeing Nib blame the Prime Minister for a pothole shows why it matters to know which level does what."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: one-government-does-everything
      explain: "Line 3: the Prime Minister leads the federal government, which doesn't fix local streets. The local council does."
    smaller:
      check: { type: question, q: "Who empties the bins in Wattle Creek?", options: ["The local council", "The federal government", "The state government"], answer: 0, explain: "Bins are a local council job." }
  - check:
      type: question
      q: "Why does Australia have three levels of government?"
      options: ["So local, state and national matters each have someone looking after them", "So there are three Prime Ministers", "So people can vote only once every three years", "Because one level makes all the laws for the others"]
      answer: 0
      explain: "Some things matter mostly to a town, some to a state, and some to the whole country."
```

### Find Nib's mistake

### Why three levels?

## Vary: who does what?

```step
stage: modify
insight: "Matching the three institutions to their jobs gives the Year 7 course its starting words."
check:
  type: match
  q: "Match each part of the system to its job."
  pairs:
    - ["A parliament", "Makes laws"]
    - ["A court", "Decides what the law means when people disagree"]
    - ["The Governor-General", "Represents the King and signs laws passed by Parliament"]
    - ["A local council", "Makes local laws, such as rules for dogs in parks"]
```

## Check: before you move on

```step
stage: practise
insight: "One more sort on a new day in the made-up town."
check:
  type: sort
  q: "A day in Wattle Creek. Which level looks after each one?"
  options: ["Local council", "State or territory", "Federal"]
  items:
    - ["The library where you borrow a book", "Local council", "Local libraries are usually run by councils."]
    - ["The police officer at the school crossing", "State or territory", "Police are a state or territory job."]
    - ["Deciding who can move to Australia", "Federal", "Immigration is a federal job."]
```

## Evaluate

```step
stage: info
check: { type: reflect, text: "I can name the three levels of government and give an example of what each one looks after." }
```

## Make: your own

```step
stage: make
insight: "Naming a service from each level in their own area makes the idea the student's own."
check: { type: reflect, text: "In my own book I wrote one thing each level of government looks after where I live (or, in Canberra, which ones the ACT Government does). A partner read it." }
```
