---
title: Pushes and pulls
summary: "A force is a push or a pull that one thing gives to another. It has a direction and a size, and an arrow can show both. A force isn't something an object carries inside it."
language: science
shape: primer
unit: forces-earth
order: 9
node: [AC9S4U03 n1, AC9S4U03 n5]
assumes: [AC9S4U03 n4]   # earlier node, taught in class
hook: "When you kick a ball, where does the force come from: your foot, or the ball?"
---
Every push and pull is a **force**. To use the word well, you need to know two things: what is giving the force, and what is getting it.

## Think first

```step
stage: predict
insight: "Students often think a force is something an object has or carries. A force needs two things: one gives it and one gets it."
check:
  type: predict
  q: "A girl kicks a football. Where does the force on the ball come from?"
  options: ["From her foot, which pushes on the ball", "From the ball, which has force inside it", "From the air around the ball", "From the speed of the ball"]
  actual: "From her foot, which pushes on the ball. A force is a push or pull that one thing gives to another. It isn't something that lives inside the ball."
```

Lock in a guess before you read on.

## Try: push and pull

```step
stage: run
insight: "Changing the size of the arrows shows that a force has a direction and a size."
try: { playground: board, starter: "boards.yml#wagon", height: 460 }
check: { type: board, text: "Make the child's push bigger than the dog's pull.", when: "P > Q" }
hint: ["Drag the Push slider to the right, or lower the Pull.", "The arrows show each force. A longer arrow is a bigger force."]
```

A child pushes a wagon one way and a dog pulls it the other way. Each arrow is a force: it shows which way it acts, and a longer arrow means a bigger force.

## The idea

```step
stage: investigate
insight: "Name what gives and what gets a force, then read an arrow's direction and size."
tasks:
  - insight: "A force needs two things."
    check:
      type: question
      q: "A magnet picks up a paperclip. What gives the force, and what gets it?"
      options: ["The magnet gives it, and the paperclip gets it", "The paperclip gives it to the magnet", "Neither, because they never touched", "The air gives it to the paperclip"]
      answer: 0
      feedback: [null, "It works both ways, but the magnet is the one pulling the paperclip towards it.", "A magnet can pull without touching. That is still a force.", "The air isn't doing the pulling. The magnet is."]
      explain: "The magnet pulls on the paperclip. A force doesn't need touching: magnets and gravity pull from a distance."
  - insight: "Push or pull."
    check:
      type: sort
      q: "Is it a push or a pull?"
      options: ["Push", "Pull"]
      items:
        - ["Kicking a ball", "Push"]
        - ["A dog tugging a rope", "Pull"]
        - ["Opening a door by its handle towards you", "Pull"]
        - ["Wind blowing a sail", "Push"]
        - ["A magnet drawing a nail towards it", "Pull"]
        - ["Pressing a button", "Push"]
  - insight: "An arrow shows direction and size."
    check:
      type: question
      q: "On a force diagram, one arrow is twice as long as another. What does that mean?"
      options: ["The longer one is a bigger force", "The longer one is a slower force", "The longer one is further away", "The longer one is a pull"]
      answer: 0
      feedback: [null, "Speed isn't shown by the length. The length shows how big the force is.", "The length doesn't show distance. It shows the size of the force.", "Pushes and pulls can both be long or short. The length shows size."]
      explain: "A longer arrow means a bigger force. The arrow points the way the force acts."
```

A **force** is a **push** or a **pull** that one thing gives to another. It acts in a **direction** and has a **size**. An arrow can show both: it points the way the force acts, and a longer arrow is a bigger force. A force needs two things, one giving it and one getting it.

### Two things

### Push or pull

### Reading arrows

## Check

```step
stage: practise
insight: "Reading a new example."
tasks:
  - check:
      type: question
      q: "A rope in a tug of war has a long arrow pointing left and a short arrow pointing right. What does this show?"
      options: ["A bigger pull to the left than to the right", "A bigger pull to the right than to the left", "Both pulls are the same", "Nobody is pulling"]
      answer: 0
      feedback: [null, "The longer arrow points left, so the bigger force is to the left.", "Different lengths mean different sizes, so they aren't the same.", "Arrows only appear where there is a force."]
      explain: "The longer arrow is the bigger force, and it points left."
  - check:
      type: question
      q: "A child pushes a friend on a swing. What gives the force and what gets it?"
      options: ["The child gives it, and the swing and friend get it", "The swing gives it to the child", "The friend gives it to the swing", "Nobody gives it, because it swings by itself"]
      answer: 0
      feedback: [null, "The child is doing the pushing, so the child gives the force.", "The friend is sitting on the swing, so the swing and friend are the ones being pushed.", "A swing needs a push to start. Something has to give the force."]
      explain: "The child pushes, so the child gives the force. The swing and the friend on it get it."
```

### Tug of war

### A swing

## Apply

```step
stage: make
insight: "Describing a force from everyday life, naming what gives it and what gets it."
check:
  type: reasoning
  q: "Pick something you did today that needed a push or a pull, such as opening a door or kicking a ball. Say what gave the force, what got it, and which way it went."
  placeholder: "I … My hand gave a push to … It went …"
  models:
    - title: "Opening a door"
      text: "My hand pulled the door handle. My hand gave the force and the door got it. It pulled towards me."
    - title: "A trolley"
      text: "My arms pushed the shopping trolley. My arms gave the force, and the trolley got it. The push went forwards."
  criteria:
    - "I said what gave the force and what got it."
    - "I said which way it went, or whether it was a push or a pull."
```

```teacher
summary: "Students describe a force as a push or pull one thing gives another, with a direction and size shown by an arrow, and drop the idea that a force is something an object carries."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what a force is."
  - "I can say what gives a force and what gets it."
  - "I can read the direction and size from an arrow."
before: |
  The one idea: a force is a push or pull that one thing gives to another. The common mistake is that an object has force inside it, as in 'the ball has force', 'it ran out of force'. The kick question meets it.

  The board is the force diagram used in the Year 7 lessons *How big, which way?* and *Does balanced mean no forces?*. Here there are only two forces, with no weight or friction, to keep to pushes and pulls.

  The Year 4 node covers friction, gravity and magnets too. They are Year 7 ideas in *How big, which way?* and *Would you weigh less on the Moon?*.

  Not yet tried with a class.
running:
  - "Think first: ask students to push a book across the desk and name what gave the force."
  - "Try: ask students what they would change to make the wagon move left."
  - "Apply: look for 'the force is in the ball' and ask where it came from."
struggle: "Students say 'the ball has force' about moving things. Ask what pushed it."
stuck:
  - see: "A student says a moving ball has force in it."
    ask: "What gave the ball its push in the first place?"
    fix: "The foot, or the thrower's hand, pushed it. The force came from outside."
  - see: "A student says a magnet doesn't give a force because it doesn't touch."
    ask: "Does the paperclip move?"
    fix: "Yes. A magnet pulls from a distance."
exit:
  q: "A dog pulls a sled. What gives the force, what gets it, and is it a push or a pull?"
  a: "The dog gives it, the sled gets it, and it is a pull."
leads: |
  Leads into Year 7 Physics: *How big, which way?* and *Does balanced mean no forces?*.
```
