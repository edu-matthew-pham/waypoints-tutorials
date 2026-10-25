---
title: Built to survive
summary: "A feature is a part of an animal's body that you can see, such as feathers, a beak or webbed feet. Each feature does a job that helps the animal survive. What the animal does is its behaviour, which is a different thing."
language: science
shape: primer
unit: living
order: 2
node: AC9S5U01 n1
hook: "A penguin has feathers but can't fly. A bat can fly but has no feathers. So which one is a feature?"
---
Look at any animal and you can spot parts of its body that do a job. This lesson is about telling a **feature** (a part you can see) from a **behaviour** (something the animal does).

## Think first

```step
stage: predict
insight: "Students mix up parts and actions. The kookaburra question has one body part among three actions."
check:
  type: predict
  q: "Which of these is a feature of a kookaburra's body?"
  options: ["A strong, hooked beak", "It laughs in the morning", "It swoops down on lizards", "It sits still on a branch and waits"]
  actual: "The strong, hooked beak. A feature is a part of the body. Laughing, swooping and waiting are things the kookaburra does, which are its behaviour."
```

Lock in a guess before you read on.

## The idea

```step
stage: investigate
insight: "Feature to job, then parts versus actions, then why a key asks about parts: features can be seen on any specimen at any time."
tasks:
  - insight: "A feature has a job that helps survival."
    check:
      type: match
      q: "Match each feature to its job."
      pairs: [["Thick fur", "Keeps the animal warm"], ["Webbed feet", "Push through water to swim"], ["Sharp claws", "Grip and catch food"], ["Spines on a cactus", "Stop animals eating it"]]
      explain: "Each feature suits the way that animal lives, which is why it helps it survive."
  - insight: "Parts versus actions: a behaviour is something done, a feature is something the animal has."
    check:
      type: sort
      q: "Is it a feature (a body part) or a behaviour (something it does)?"
      options: ["Feature", "Behaviour"]
      items:
        - ["Feathers", "Feature"]
        - ["Flying", "Behaviour", "Flying is something a bird does. A penguin has feathers but doesn't fly."]
        - ["Webbed feet", "Feature"]
        - ["Hiding in a burrow by day", "Behaviour"]
        - ["A long, thin beak", "Feature"]
        - ["Flying north each winter", "Behaviour"]
  - insight: "A scientist's key asks about features because anyone can look and see them."
    check:
      type: question
      q: "A key asks 'Does it have feathers?' instead of 'Does it fly?' Why is that the better question?"
      options: ["You can see feathers by looking, but flying isn't always seen", "Feathers matter more to a bird than flying", "Flying is a harder word to spell", "Every bird has both of them"]
      answer: 0
      feedback: [null, "Both matter to the animal. The point is which one you can check by looking.", "The spelling isn't the reason. Think about what you can check by looking at the animal.", "Not all birds fly: penguins and emus don't, so the flying question would send them the wrong way."]
      explain: "Features can be seen on any animal at any time. Behaviour has to be watched, and it can be misleading."
```

A feature is a part of the body. Each one has a job: fur keeps an animal warm, webbed feet help it swim and sharp claws help it grip. What an animal does, like flying, hiding or migrating, is its behaviour.

### Features and their jobs

### Feature or behaviour

### Why keys use features

## Check

```step
stage: practise
insight: "Naming the job a feature does is the Year 5 move: from a part to why it helps."
tasks:
  - check:
      type: question
      q: "A fish has gills and a smooth, narrow body. Which sentence names a feature and its job?"
      options: ["Its smooth, narrow body helps it slip through the water", "It swims away from sharks", "It lives in the sea", "It lays eggs"]
      answer: 0
      feedback: [null, "Swimming away is something it does, so that is behaviour.", "That's where it lives, which doesn't say what part of its body helps.", "Laying eggs is something it does."]
      explain: "A feature is a part of the body, and the answer says what job it does."
  - check:
      type: question
      q: "A koala has thick fur and strong claws. Which is a behaviour?"
      options: ["Sleeping most of the day", "Thick fur", "Strong claws", "A grey coat"]
      answer: 0
      feedback: [null, "Fur is part of its body, so it is a feature.", "Claws are part of its body, so they are a feature.", "A coat is its fur, which is a feature."]
      explain: "Sleeping is something the koala does, so it is behaviour. Fur and claws are parts of its body."
```

### A fish

### A koala

## Apply

```step
stage: make
insight: "Choosing their own animal makes the feature and job pair stick and shows whether students can name a part rather than an action."
check:
  type: reasoning
  q: "Pick an animal you know. Name one feature of its body and say what job it does to help it survive."
  placeholder: "My animal is … Its feature is … It helps because …"
  models:
    - title: "A frog"
      text: "A frog's long back legs push it through the water and make long jumps away from danger."
    - title: "A magpie"
      text: "A magpie's sharp beak can pick up insects and seeds from the ground."
  criteria:
    - "My feature is a part of the body, not something the animal does."
    - "I said what job it does."
```

Write your answer, then compare it with the examples.

```teacher
summary: "Students tell a feature (a body part) from a behaviour (an action) and say what job a feature does, so a key can later ask about parts you can see."
time: 17
timing: "Think first 3 min · The idea 7 min · Check 4 min · Apply 3 min"
goals:
  - "I can name a feature of an animal and say what job it does."
  - "I can tell a feature from a behaviour."
  - "I can say why a key asks about features you can see."
before: |
  The one idea: a feature is a part of the body with a job; behaviour is what the animal does. The common mistake is mixing the two (a bird 'has flying'). The sorting task and the key question meet it directly.

  Year 5 describes this as structural features and behaviours; this lesson keeps only the first, because Year 7 keys use features. Behaviour is Year 5 node 2 and is not taught here.

  Not yet tried with a class.
running:
  - "Think first: ask students to say what the other three options are. They are things the kookaburra does."
  - "The idea: run the sort as a quick whole-class vote before anyone locks in."
  - "Apply: if students pick an action, ask 'Can you point to it on the animal?'"
struggle: "Students describe actions when asked for a feature ('a cheetah is fast'). Ask them to point to the part of the body."
stuck:
  - see: "A student says 'flying' is a feature of a bird."
    ask: "Can you point to flying on a bird that is sitting still?"
    fix: "Point to the wings and feathers. Those are the features that let it fly."
  - see: "A student names a feature but not its job."
    ask: "How does that part help it stay alive?"
    fix: "Use the sentence 'It helps because …'."
exit:
  q: "Is 'swims fast' a feature or a behaviour? Give a feature that helps a fish swim fast."
  a: "Swimming fast is behaviour. A feature that helps is a smooth, narrow body or strong fins."
leads: |
  Leads into Year 7 Biology: *Plant, animal or something else?* and *Who is it? Using a key*, where students group living things and identify them by features they can see.
```
