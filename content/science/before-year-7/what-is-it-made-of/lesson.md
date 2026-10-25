---
title: What is it made of?
summary: "Materials have properties you can test, such as hard, flexible, waterproof or magnetic. Two materials that look the same can still be told apart by testing their properties."
language: science
shape: primer
unit: matter
order: 7
node: AC9S4U04 n1
hook: "Salt and sand both look like little grains. What could you do to tell them apart?"
---
Everything around you is made of **materials**, like metal, glass, wood or plastic. Scientists describe a material by its **properties**: how it behaves when you test it.

## Think first

```step
stage: predict
insight: "Students rely on looking. A test of a property (dissolving, magnetism) tells materials apart when looks can't."
check:
  type: predict
  q: "A bag of salt and a bag of sand have been mixed up. Both are small grains. How could you tell which is which?"
  options: ["Stir a spoonful of each into water and see which disappears", "Look at them: salt is always white", "Taste them", "You can't tell without a microscope"]
  actual: "Stir a spoonful of each into water. The salt dissolves and seems to disappear, but the sand sinks to the bottom. Tasting is never a safe way to test a material in a science lesson, and colour alone can be misleading."
```

Lock in a guess before you read on.

## The idea

```step
stage: investigate
insight: "Property words, a test for each, then using a test when looks fail."
tasks:
  - insight: "A property is something you can test."
    check:
      type: match
      q: "Match each property to a simple test."
      pairs: [["Hard", "Try to scratch it with a coin"], ["Flexible", "Try to bend it"], ["Waterproof", "Drop water on it and see if it soaks in"], ["Magnetic", "Hold a magnet near it"]]
      explain: "Each property can be tested, so you can find out about a material instead of guessing."
  - insight: "Looks can mislead: two shiny grey bars need a test."
    check:
      type: question
      q: "Two shiny grey metal bars look the same. One is iron, and one is aluminium. Which test could tell them apart?"
      options: ["Hold a magnet near each one", "Look at them closely in the light", "Ask which one is shinier", "Hold them next to each other"]
      answer: 0
      feedback: [null, "They look the same, so looking won't help. A test might.", "If they look the same, shine won't tell them apart. A magnet test might.", "Holding them side by side still only lets you look."]
      explain: "Iron is attracted to a magnet and aluminium isn't. A test of a property can tell two materials apart when they look the same."
  - insight: "A property belongs to the material, not the object."
    check:
      type: question
      q: "Which one is a property of a material?"
      options: ["Flexible", "A garden hose", "A bucket", "A drinking straw"]
      answer: 0
      feedback: [null, "A garden hose is an object. Its material has properties such as flexible and waterproof.", "A bucket is an object. Its material has properties.", "A straw is an object. Its material has properties."]
      explain: "Flexible describes how a material behaves. A hose, bucket and straw are objects made from materials."
```

A **property** is something you can find out about a material by testing it, like **hard**, **flexible**, **waterproof** or **magnetic**. Two materials can look the same but have different properties, so testing is more reliable than looking.

### Properties and tests

### Two grey bars

### Property or object

## Check

```step
stage: practise
insight: "Choosing a test for a new example."
tasks:
  - check:
      type: question
      q: "You need to know if a cloth is waterproof. What should you do?"
      options: ["Drop some water on it and see if it soaks in", "Feel how soft it is", "Look at its colour", "Smell it"]
      answer: 0
      feedback: [null, "Soft or not doesn't tell you whether water gets through.", "Colour doesn't tell you whether water gets through.", "Smell doesn't tell you whether water gets through."]
      explain: "To test if a cloth is waterproof, check whether water soaks through it."
  - check:
      type: question
      q: "Two clear cups look the same. One is glass and one is plastic. Which test is a good place to start?"
      options: ["Tap each gently and listen, and check which bends", "Look at which is clearer", "Weigh each in your hand while guessing", "Ask which one looks more expensive"]
      answer: 0
      feedback: [null, "If they look the same, looking won't help.", "A guess in your hand isn't a test you could repeat.", "Price is not a property of the material."]
      explain: "Glass and plastic sound different and bend differently. A test you can repeat tells them apart."
```

### A waterproof cloth

### Two cups

## Apply

```step
stage: make
insight: "Planning their own test shows they have moved from looking to testing."
check:
  type: reasoning
  q: "Pick two materials from around you that look alike, such as two kinds of paper or two metal spoons. Write a test that could tell them apart."
  placeholder: "My two materials are … I would test … and I would expect …"
  models:
    - title: "Two kinds of paper"
      text: "A tissue and a paper towel look alike. I would drop a little water on each. If one soaks it up faster, that tells me they are different."
    - title: "Two spoons"
      text: "A steel spoon and an aluminium spoon look alike. I would hold a magnet near each. The steel spoon is attracted and the aluminium one isn't."
  criteria:
    - "My test checks a property, not just how they look."
    - "I said what I would expect to see."
```

```teacher
summary: "Students name properties of materials, pair each with a test, and use a test to tell apart materials that look alike."
time: 17
timing: "Think first 3 min · The idea 6 min · Check 4 min · Apply 4 min"
goals:
  - "I can name some properties of materials."
  - "I can say a test for a property."
  - "I can use a test to tell two materials apart."
before: |
  The one idea: you tell materials apart by testing their properties, not only by looking. The common mistake is that things that look the same are the same material. The salt and sand question and the grey bars meet it.

  Safety: never ask students to taste or smell unknown materials. The Think first question lists tasting as a wrong option on purpose.

  This lesson leads into the Year 7 lessons *Pure substance or mixture?* and *How do you separate a mixture?*, where properties such as dissolving and particle size are used to separate things.

  Not yet tried with a class.
running:
  - "Think first: if you have salt, sand and water, do the test as a demonstration."
  - "The idea: bring in two objects that look alike, such as two grey spoons, and a magnet."
  - "Apply: look for tests that only look at colour or shape and ask what would happen if the two looked the same."
struggle: "Students often name a use ('it holds water') rather than a property. Ask 'What could you do to test that?'"
stuck:
  - see: "A student describes how it looks, not a property."
    ask: "What could you do to it to find out?"
    fix: "Think of an action: bend it, scratch it, drop water on it, hold a magnet near it."
  - see: "A student gives an object as a property."
    ask: "Could you test the whole bucket, or the stuff it is made of?"
    fix: "Properties belong to the material."
exit:
  q: "Name a property of metal and say how you could test it."
  a: "Hard: try to scratch it. Magnetic (for iron): hold a magnet near it."
leads: |
  Leads into Year 7 Chemistry: *Pure substance or mixture?* and *How do you separate a mixture?*.
```
