---
title: Heating, cooling and changing state
summary: "Adding heat can melt a solid into a liquid, and taking heat away can freeze it again. It is the same stuff each time, so the change can be undone. Heat moves from the warmer thing to the cooler thing."
language: science
shape: primer
unit: matter
order: 5
node: [AC9S3U04 n2, AC9S3U04 n3, AC9S3U03 n2]
assumes: [AC9S3U04 n1, AC9S3U03 n1]   # earlier node, taught in class
hook: "You can melt ice and freeze the water again. Is it still the same stuff?"
---
Ice, water and steam look very different. This lesson is about what heating and cooling do to them, and what stays the same.

## Think first

```step
stage: predict
insight: "Students often think melting makes something new. Freezing the water again shows that it is the same stuff."
check:
  type: predict
  q: "An ice cube melts into water. You put the water back in the freezer. What do you get?"
  options: ["Ice again, because it was the same stuff all along", "Something new that is not ice", "A kind of water that can't freeze", "Nothing, because it is gone"]
  actual: "Ice again. Melting is a change you can undo: it is the same stuff, only in a different state."
```

Lock in a guess before you read on.

## Try: from ice to steam

```step
stage: run
insight: "Watching the same particles as ice, water and steam makes the 'same stuff' idea visible before the lesson says it."
try: { playground: science, starter: "boards.yml#heat", height: 520 }
check: { type: board, text: "Heat the water from ice to steam.", expect: { done: true } }
```

Drag the temperature up and watch what the water does. Then bring it back down.

## The idea

```step
stage: investigate
insight: "Heat in melts, heat out freezes, it is the same stuff, and heat moves from warm to cool."
tasks:
  - insight: "Adding heat makes a solid melt, and taking heat away makes a liquid freeze."
    check:
      type: question
      q: "What do you do to melt a solid?"
      options: ["Add heat", "Take heat away", "Put it in the shade", "Squash it"]
      answer: 0
      feedback: [null, "Taking heat away makes a liquid freeze.", "Shade only changes things if it makes the solid cooler, and melting needs heat.", "Squashing doesn't melt most things. Melting needs heat."]
      explain: "A solid melts when it gets enough heat. Taking heat away makes a liquid freeze."
  - insight: "A change of state is reversible and the substance stays the same."
    check:
      type: question
      q: "A chocolate bar melts in the sun. You put it in the fridge and it goes hard again. What does this show?"
      options: ["It was the same chocolate all along", "It has turned into something new", "The fridge made new chocolate", "It is a different kind of chocolate"]
      answer: 0
      feedback: [null, "If it were something new, cooling it wouldn't bring the chocolate back.", "The fridge only took heat away. It doesn't make anything.", "It is the same chocolate, in a different state."]
      explain: "Melting and freezing are changes of state. The stuff stays the same, so you can undo the change."
  - insight: "Heat moves from the warmer thing to the cooler thing, so an ice cube melts in a warm hand."
    check:
      type: question
      q: "You hold an ice cube in your warm hand and it melts. Which way does the heat move?"
      options: ["From your hand to the ice", "From the ice to your hand", "It doesn't move", "Both ways equally"]
      answer: 0
      feedback: [null, "Your hand is warmer than the ice. Heat moves from the warmer thing to the cooler thing.", "Heat has to move for the ice to melt, and it goes from warm to cool.", "Heat moves from the warmer thing to the cooler thing, not equally both ways."]
      explain: "Heat moves from your warm hand into the cooler ice, which is why the ice melts and your hand feels cold."
```

When you **add heat** to a solid, it can **melt** into a liquid. When you **take heat away** from a liquid, it can **freeze**. It is the **same stuff** in a different state, so you can change it back. Heat always moves from the **warmer** thing to the **cooler** thing.

### Making it melt

### Chocolate in the fridge

### Ice in your hand

## Check

```step
stage: practise
insight: "A new example checks the 'same stuff' idea and the direction of heat."
tasks:
  - check:
      type: question
      q: "Water in a puddle freezes on a cold night and melts in the morning sun. What is true?"
      options: ["It is the same water each time", "The ice is a new substance", "The morning sun makes new water", "Frozen water can't melt again"]
      answer: 0
      feedback: [null, "Ice is water in its solid state, so it isn't a new stuff.", "The sun adds heat, which melts the ice. It doesn't make new water.", "Ice melts when it gets enough heat."]
      explain: "Freezing and melting are changes of state. It is the same water in a different state."
  - check:
      type: question
      q: "A hot cup of tea stands on a table. What happens to its heat?"
      options: ["It moves into the cooler air and the table", "It moves from the air into the tea", "It stays in the tea forever", "It disappears"]
      answer: 0
      feedback: [null, "The air is cooler than the tea, so heat moves out of the tea.", "Heat moves from the tea to cooler things around it, so the tea cools down.", "Heat doesn't vanish. It moves to the cooler things around the tea."]
      explain: "Heat moves from the warmer tea into the cooler air and table, so the tea cools."
```

### Puddle

### Hot tea

## Apply

```step
stage: make
insight: "Explaining it in their own words for a familiar example."
check:
  type: reasoning
  q: "Think of something that melts or freezes at home, like butter, an ice block or a frozen drink. Say what makes it change, and whether it is still the same stuff."
  placeholder: "My example is … It melts or freezes when … It is still the same stuff because …"
  models:
    - title: "Butter"
      text: "Butter melts in a hot pan because it gets heat. If it cools, it goes solid again. It is still butter, just in a different state."
    - title: "An ice block"
      text: "An ice block melts in the sun because the heat moves from the warm air into it. If I put the water back in the freezer it freezes again."
  criteria:
    - "I said what made it change (heat added or taken away)."
    - "I said it is still the same stuff."
```

```teacher
summary: "Students see that heating melts and cooling freezes, that it is the same stuff each time, and that heat moves from warmer to cooler."
time: 18
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 3 min"
goals:
  - "I can say what makes a solid melt and a liquid freeze."
  - "I can say why melting and freezing can be undone."
  - "I can say which way heat moves."
before: |
  The one idea: heating and cooling change the state of the same stuff, so the change can be undone. The common mistake is that melting makes something new, so it can't be changed back. The freezer question and the chocolate bar meet it. Heat moving from warm to cool is a short addition because the Year 7 heating curve asks 'where does the heat go?'.

  The board is the one used in the Year 7 lesson *Where does the heat go?*. Keep to the temperature slider here: the energy at the changes of state is Year 7. At exactly 0 °C and 100 °C real water can be partly one state and partly the other.

  Not yet tried with a class.
running:
  - "Think first: take a show of hands, then ask for an example of something they've seen melt and set again."
  - "Try: ask what they see when the temperature goes up, then when it comes down."
  - "Apply: ask for examples that are not water."
struggle: "Students may say the cold 'goes into' the hand. Say 'the heat leaves the hand', and ask which is warmer."
stuck:
  - see: "A student says the water is a new substance after the ice melts."
    ask: "What happens if you freeze it again?"
    fix: "It becomes ice again, so it was the same stuff."
  - see: "A student says the cold moves into the warm thing."
    ask: "Which is warmer, your hand or the ice?"
    fix: "Heat moves from the warm thing to the cool thing."
exit:
  q: "How can you tell that melted ice is the same stuff as the ice?"
  a: "You can freeze it again and get ice back."
leads: |
  Leads into Year 7 Chemistry: *Where does the heat go?*, where students follow the heat through melting and boiling on a graph.
```
