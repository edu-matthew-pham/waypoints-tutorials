---
title: Can you change it back?
summary: "Some changes can be undone, such as dissolving and melting, and no new stuff is made. Others can't, such as cooking and burning, and they make new stuff. If you can't see something any more, it isn't always gone."
language: science
shape: primer
unit: matter
order: 8
node: AC9S6U04 n1
hook: "Stir sugar into tea and it disappears. Where did it go, and could you get it back?"
---
Things change all the time. Ice melts, toast burns, sugar vanishes in tea. In some changes you can get the stuff back. In others you can't. This lesson is about how to tell which.

## Think first

```step
stage: predict
insight: "Students think dissolved sugar has gone or been destroyed. It is still there, spread through the water, and can be recovered."
check:
  type: predict
  q: "You stir a spoon of sugar into a cup of water and it seems to disappear. What has happened to it?"
  options: ["It is still there, spread through the water in tiny pieces", "It has been destroyed", "It has turned into water", "It has floated away as a gas"]
  actual: "It is still there, spread through the water in tiny pieces too small to see. If you let the water dry up, the sugar is left behind."
```

Lock in a guess before you read on.

## Try: watch it dissolve

```step
stage: run
insight: "Seeing the particles of the salt mix in with the water makes 'still there' visible."
try: { playground: science, starter: "boards.yml#dissolve", height: 480 }
check: { type: board, text: "Add salt to the water and watch where its particles go.", expect: { done: true } }
```

Add salt to the water. Look closely at where its particles end up.

## The idea

```step
stage: investigate
insight: "The test for a reversible change is whether a new stuff is made. Dissolving and melting aren't; burning and cooking are."
tasks:
  - insight: "Dissolving can be undone, because the stuff is still there."
    check:
      type: question
      q: "Salt is dissolved in water. How could you get the salt back?"
      options: ["Let the water dry up, and the salt is left behind", "You can't, because it has gone", "Add more water", "Freeze it and the salt turns into ice"]
      answer: 0
      feedback: [null, "The salt hasn't gone. It is spread through the water.", "More water makes it more spread out, but it doesn't bring the salt back.", "Freezing salty water makes ice, but the salt is still there."]
      explain: "When the water dries up, the salt is left. Dissolving didn't make anything new."
  - insight: "Burning makes new stuff and can't be undone."
    check:
      type: question
      q: "You toast a slice of bread. Can you change it back to plain bread?"
      options: ["No, because toasting makes new stuff", "Yes, if you let it cool down", "Yes, if you wet it", "Yes, because all changes can be undone"]
      answer: 0
      feedback: [null, "Cooling it doesn't undo it. The toast is a new stuff, not just warm bread.", "Wetting it doesn't undo it. The toast is a new stuff.", "Not all changes can be undone. Some make new stuff."]
      explain: "Toasting makes new stuff with different properties. You can't turn it back into bread."
  - insight: "The test: is something new made?"
    check:
      type: sort
      q: "Can you change it back?"
      options: ["Can change back", "Can't change back"]
      items:
        - ["Melting an ice block", "Can change back"]
        - ["Burning a piece of wood", "Can't change back", "Burning makes ash and smoke, which are new stuff."]
        - ["Dissolving sugar in tea", "Can change back"]
        - ["Baking a cake", "Can't change back"]
        - ["Freezing water", "Can change back"]
        - ["Iron rusting", "Can't change back"]
```

In a change you can undo, **no new stuff is made**. Dissolving, melting and freezing are like this. In a change you can't undo, **new stuff is made**: burning, cooking and rusting. A dissolved solid hasn't gone. It is still there, spread through the liquid.

### Getting the salt back

### Toast

### Sort the changes

## Check

```step
stage: practise
insight: "Applying the test to new examples."
tasks:
  - check:
      type: question
      q: "Which of these shows that a change made new stuff?"
      options: ["A gas is given off and a crust is left that can't change back", "The stuff changes shape", "The stuff gets cold", "The stuff moves to another place"]
      answer: 0
      feedback: [null, "Changing shape, like squashing clay, doesn't make anything new.", "Getting colder or hotter isn't enough on its own, because ice and water both can.", "Moving doesn't make anything new."]
      explain: "Signs of new stuff are a gas given off, a new colour, a new smell or something that can't be changed back."
  - check:
      type: question
      q: "Tea with sugar stirred in is left in the sun and the water dries up. What is left?"
      options: ["Sugar", "Nothing", "More water", "A new kind of sugar"]
      answer: 0
      feedback: [null, "The sugar didn't disappear. It was dissolved.", "The water dried up, so there is less water, not more.", "It is the same sugar. Dissolving doesn't make a new kind."]
      explain: "Sugar is still there when the water dries up."
```

### New stuff

### Tea

## Apply

```step
stage: make
insight: "Choosing an example they know and using the 'new stuff' test."
check:
  type: reasoning
  q: "Think of a change you've seen in the kitchen. Say whether you could change it back, and how you can tell."
  placeholder: "The change is … I could / couldn't change it back because …"
  models:
    - title: "Boiling an egg"
      text: "I couldn't change a boiled egg back, because cooking made new stuff. A hard egg is not the same as a raw one."
    - title: "Making jelly"
      text: "I can change jelly back. If I heat it, it melts into a liquid again. No new stuff was made."
  criteria:
    - "I said whether it can be changed back."
    - "I said what tells me: new stuff or not."
```

```teacher
summary: "Students see that dissolving and melting make no new stuff and can be undone, while burning and cooking make new stuff, and that a dissolved solid isn't gone."
time: 18
timing: "Think first 3 min · Try 3 min · The idea 6 min · Check 3 min · Apply 3 min"
goals:
  - "I can say what a change you can undo looks like."
  - "I can say what happens to a solid that dissolves."
  - "I can say how to tell if a change made new stuff."
before: |
  The one idea: if no new stuff is made, the change can be undone. The common mistake is that when something dissolves it has gone. The sugar question and the board meet it. Burning and cooking are introduced as the contrast.

  The board is the one used in the Year 7 lesson *Pure substance or mixture?*. The next lesson, *How do you separate a mixture?*, uses the same idea to get a dissolved salt back.

  The test of 'is something new made?' is deliberately plain. It becomes 'chemical change' in Year 8.

  Not yet tried with a class.
running:
  - "Think first: if you have sugar and a clear cup, stir it in and ask where it is."
  - "Try: ask students to point to where the salt is after it has dissolved."
  - "Apply: ask which examples were hardest to sort, and why."
struggle: "Students may say dissolving is 'melting'. Say 'in dissolving the solid spreads through a liquid. In melting a solid turns into a liquid'."
stuck:
  - see: "A student says the sugar has gone."
    ask: "How could you check whether it is still there?"
    fix: "Taste isn't safe. Let the water dry up, and sugar is left."
  - see: "A student says burning can be undone by cooling."
    ask: "Could you turn ash back into wood?"
    fix: "No. A new stuff was made."
exit:
  q: "Give one change that can be undone and one that can't, and say how you can tell."
  a: "Melting ice can be undone because no new stuff is made. Burning wood can't be undone because ash and smoke are new stuff."
leads: |
  Leads into Year 7 Chemistry: *How do you separate a mixture?*, and in Year 8 chemical change.
```
