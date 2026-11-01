---
order: 2
unit: causes
title: Why did people move?
node: AC9HH7K01 n2
summary: "Describe how changes in the environment, such as shifts in rainfall, spreading deserts and changing sea levels, are thought to have moved early humans out of Africa and into other parts of the world. The movement happened over many generations, as groups followed water and food, not as a planned journey."
language: maths
hook: "Picture people leaving Africa. Did you imagine a group packing up and walking off towards a new continent? Scientists think it happened very differently."
---
Our species spread out of Africa over tens of thousands of years, starting well over 100,000 years ago. No one at the time knew there were other continents to reach. So why did people end up all over the world?

Most scientists think **changes in the environment** played a big part:

- **Rainfall shifted.** For long stretches, the Sahara and Arabia were much wetter than today, with grassland, lakes and rivers. Then they dried out again into desert (**desertification**).
- **Food and water moved with the rain.** Groups of hunter-gatherers followed the animals and plants they lived on. When a wet corridor opened, people could spread along it. When it dried, they moved on or were cut off.
- **Sea levels rose and fell.** In the coldest times of the ice ages, so much water was locked up in ice sheets that the sea was far lower than today (about 125 metres lower at the coldest point, about 20,000 years ago). Coasts stretched further out, and some sea crossings became shorter.

It happened **over many generations**. Each group might only shift its range a little in a lifetime, but over thousands of years those small shifts added up to a journey across continents. Scientists still argue about how much was pushed by climate and how much by other things, such as growing numbers of people or rich food along coasts.

Here is a made-up model of one valley over 500 years, to show how it could work (the valley and the numbers are made up):

| Years from now | Rain | The lake | Animals to hunt | Where the group spends most of the year |
|---|---|---|---|---|
| 0 | Plenty | Full | Many | Around the lake |
| 200 | Less | Shrinking | Moving north | Further north, following the herds |
| 500 | Very little | Dry | Gone from the valley | In the next valley to the north |

## Predict: how did people leave Africa?

```step
stage: predict
insight: "Committing first surfaces the 'planned journey' picture before the lesson replaces it."
check:
  type: predict
  q: "How do scientists think our species spread out of Africa?"
  options:
    - "Bit by bit over many generations, following water and food as climate changed"
    - "One group set off on a planned journey to find a new continent"
    - "Everyone left Africa at once, in one big move to a new land"
    - "People left because they had heard about better land on other continents"
  actual: "Bit by bit, over many generations. Nobody knew where the journey would lead; groups followed food and water as the climate changed around them."
```

## Try: what did each change do?

```step
stage: run
insight: "Matching each environmental change to its effect builds the causal link the hinge checks."
check:
  type: match
  q: "Match each change in the environment to how it is thought to have affected where people could live and move."
  pairs:
    - ["A dry region becomes wetter, with grass and lakes", "A corridor opens that people and animals can spread along"]
    - ["A wet region dries into desert", "People move on to find water, or are cut off"]
    - ["Ice sheets grow and the sea level falls", "Coasts stretch out, and some sea crossings get shorter"]
    - ["Herds move to follow the grass", "Hunters shift their range to follow the herds"]
```

Was your guess right? Each change moved the water and food, and people followed.

## Worked example: the valley that dried up

```step
stage: investigate
insight: "Reading the made-up valley model, then catching Nib's 'they planned a trip', ties migration to slow environmental change."
tasks:
  - check:
      type: question
      q: "In the made-up valley model, why did the group end up in the next valley?"
      options:
        - "The rain lessened, the lake dried and the animals moved, so they followed"
        - "The group decided one day to walk to a better valley they had heard about"
        - "The group was forced out by another group, and the climate had nothing to do with it"
        - "The lake flooded over many years and pushed them north"
      answer: 0
      feedback:
        - null
        - "Nothing in the model says they planned it. They moved a little at a time, following the herds."
        - "That can happen, but this model shows the rain, the lake and the animals changing."
        - "The model shows the lake drying out, not flooding."
      explain: "Less rain changed the lake and the animals, and the group followed. That is the chain."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how people left Africa. Click the first line where Nib's thinking goes wrong."
      answer: 2
      fault: logic
      misconception: migration-as-planned-trip
      explain: "Line 2: Nib pictures a planned trip to a place they knew about. Nobody at the time knew about other continents. Groups shifted their range a little at a time, over many generations, as water and food moved."
    smaller:
      check:
        type: question
        q: "Rain slowly gets less over 300 years, and the animals a group hunts move north. What is the group most likely to do?"
        options:
          - "Shift north a little at a time, following the animals"
          - "Stay where they are and wait for the rain to come back"
          - "Plan a long trip to another continent"
          - "Stop hunting and start farming straight away"
        answer: 0
        feedback:
          - null
          - "Without food and water nearby, staying put is hard to survive for long."
          - "They could not know other continents existed. They followed what they could see."
          - "Farming came much later in human history."
        explain: "Groups followed their food and water, a little at a time."
  - check:
      type: question
      q: "Which of these is a pull (something drawing people to a place) rather than a push (something driving them away)?"
      options:
        - "New grassland and a lake in a corridor that just turned green"
        - "The home valley's lake drying up over many years"
        - "The animals they hunt leaving the area for good"
        - "A desert spreading slowly towards their camp"
      answer: 0
      feedback:
        - null
        - "A drying lake drives people away. That is a push."
        - "Losing the animals they hunt drives people away. That is a push."
        - "A spreading desert drives people out. That is a push."
      explain: "Pushes drive people away from where they are; pulls draw them to somewhere new. Environmental change can do both."
```

### Read the model

### Find Nib's mistake

### Push or pull?

## Vary: a green Arabia

In 2018, scientists reported a fossil finger bone of our species found at Al Wusta, in what is now desert in Saudi Arabia. It is about 85,000 years old or more. The same layers held signs of a lake and grassland, from a time when the region was much wetter than it is today (Groucutt and others, *Nature Ecology & Evolution*).

```step
stage: modify
insight: "A real find shows the link between a wetter climate and people spreading into land that is desert now."
check:
  type: question
  q: "What does the Al Wusta find suggest about why people could live there?"
  options:
    - "It was wetter then, with a lake and grassland, so people could live there"
    - "People have always been able to live in the desert there without water"
    - "The finger bone proves people planned a long trip to reach Arabia"
    - "It shows the climate there has never really changed at all"
  answer: 0
  feedback:
    - null
    - "The find came with signs of a lake and grassland. The place was not desert then."
    - "One bone cannot show plans. It shows people were there when it was wet."
    - "It shows the opposite: that place was once much wetter."
  explain: "Scientists think wet periods opened routes like this one and dry periods closed them."
```

## Practise: push, pull or barrier?

```step
stage: practise
check:
  type: sort
  q: "Sort each environmental change by what it did to people's movement."
  options: ["Push away", "Pull towards", "Barrier"]
  items:
    - ["Desert spreading into a group's home range", "Push away", "It drives people out to find water."]
    - ["A new lake and grassland to the north", "Pull towards", "It offers water and food."]
    - ["A wide, dry desert with no water stops", "Barrier", "It is very hard to cross."]
    - ["Herds leaving the area as the grass dies", "Push away", "The food is going."]
    - ["A coastline rich in shellfish, newly exposed as the sea falls", "Pull towards", "New food along the coast."]
    - ["Deep sea with no land in sight", "Barrier", "Very hard to cross without boats."]
insight: "Sorting push, pull and barrier checks that students can explain movement as a response to the environment."
```

## Make: explain the cause in your book

```step
stage: make
insight: "Writing the chain from an environmental change to movement in their own words makes the cause theirs."
check: { type: reflect, text: "In my own book I chose one environmental change (rain, a spreading desert, or the sea level) and explained how it could have moved people over many generations. I said 'scientists think' where it is an explanation, not a fact. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: ice ages and the sea

```step
stage: make
tier: typical
insight: "Getting the ice-age picture right (ice locked up water, so seas fell) avoids a common slip."
check:
  type: question
  q: "During the coldest part of the last ice age, about 20,000 years ago, what was the world like?"
  options:
    - "Ice sheets held so much water that the sea was lower and coasts larger"
    - "The whole planet was covered in ice, so nobody could travel"
    - "The sea was much higher, so many coasts were under water"
    - "Nothing changed, because the ice age only affected the poles"
  answer: 0
  feedback:
    - null
    - "Much of the world was not under ice. People lived and travelled in many places."
    - "Water locked in ice sheets made the sea lower, not higher."
    - "The lower sea changed coasts all over the world, far from the poles."
  explain: "Ice sheets held a lot of the world's water, so the sea was about 125 metres lower and coastlines moved."
```

## Wider: climate or people?

```step
stage: make
tier: wider
insight: "Weighing climate against other causes keeps environmental change as a leading explanation, not the only one."
check:
  type: question
  q: "A historian writes: 'Climate change was the only reason people left Africa.' What is the best response?"
  options:
    - "Climate is a leading explanation, but other causes are argued too"
    - "That is right: nothing else could make people move so far"
    - "Climate had nothing to do with it; people just liked exploring"
    - "We cannot say anything about why people moved, so it is a guess"
  answer: 0
  feedback:
    - null
    - "That turns one cause into the only one. The evidence for climate is strong, but other causes are argued too."
    - "That throws out a cause with strong evidence. Finds like Al Wusta link people to wetter periods, so climate mattered."
    - "That gives up too soon. We can say a lot from the evidence, just not with complete certainty."
  explain: "Historians weigh several causes. Environmental change is a strong part of the explanation, not the whole of it: scientists also point to things like growing numbers of people and food along coasts."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.

How people first reached the Australian continent is a separate part of the curriculum. Your teacher will use resources made with First Nations communities for it.
