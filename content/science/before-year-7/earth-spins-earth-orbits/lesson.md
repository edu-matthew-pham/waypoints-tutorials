---
title: Earth spins, Earth orbits
summary: "The Earth spins once a day, which gives us day and night. It also travels once round the sun in a year. Day and night come from the spin, not from going round the sun."
language: science
shape: primer
unit: forces-earth
order: 10
node: [AC9S6U02 n1, AC9S6U02 n2]
hook: "It is day in Sydney when it is night in London. What is going on?"
---
The Earth does two things at once: it **spins** and it **goes round the sun**. They take different amounts of time and they cause different things. Mixing them up is the most common mistake in this topic.

## Think first

```step
stage: predict
insight: "The common mistake is that day and night happen because the Earth goes round the sun. It is the spin."
check:
  type: predict
  q: "What gives us day and night?"
  options: ["The Earth spinning on its axis once a day", "The Earth going round the sun once a day", "The sun moving round the Earth", "The moon blocking the sun at night"]
  actual: "The Earth spinning on its axis once a day. The side facing the sun has day, and the side facing away has night. Going round the sun takes a whole year."
```

Lock in a guess before you read on.

## Try: a day and a year

```step
stage: run
insight: "Playing a day and then a year shows the two movements and how long each takes."
try: { playground: board, starter: "boards.yml#earth", height: 640 }
check: { type: board, text: "Play a day, then play a year.", when: "r >= 1 and o >= 1" }
hint: ["Use the Play a day button, then the Play a year button.", "Watch the Earth as it spins in the day, and where it is on its path in the year."]
```

Press **Play a day** and watch the Earth spin. Then press **Play a year** and watch where the Earth goes.

## The idea

```step
stage: investigate
insight: "Spin: a day. Orbit: a year. Day and night come from the spin."
tasks:
  - insight: "Spin or orbit, and how long each takes."
    check:
      type: match
      q: "Match each movement to how long it takes."
      pairs: [["The Earth spins once on its axis", "About one day"], ["The Earth goes once round the sun", "About one year"], ["The moon goes once round the Earth", "About one month"]]
      explain: "The spin takes a day, the trip round the sun takes a year, and the moon goes round the Earth in about a month."
  - insight: "The spin gives day and night."
    check:
      type: question
      q: "It is midday in Canberra. What is it like on the other side of the Earth?"
      options: ["Night, because that side faces away from the sun", "Day, because the sun lights the whole Earth", "Dusk everywhere", "Nobody can tell"]
      answer: 0
      feedback: [null, "The sun can only light the side of the Earth that faces it, so the far side is dark.", "Dusk happens only at the edge between day and night, not everywhere at once.", "You can tell. Half the Earth faces the sun and half faces away."]
      explain: "The sun lights half the Earth at a time. The other half is in the dark, which is night."
  - insight: "A year is the orbit."
    check:
      type: question
      q: "How long does it take the Earth to go once round the sun?"
      options: ["About one year", "About one day", "About one month", "About one week"]
      answer: 0
      feedback: [null, "One day is how long it takes the Earth to spin once.", "One month is about how long the moon takes to go round the Earth.", "A week is a made-up period, not a movement of the Earth."]
      explain: "One trip round the sun is one year."
```

The Earth **spins** (rotates) on its axis once a day. That is what gives us **day and night**. The Earth also goes round the sun, which is its **orbit**, once a year. Gravity from the sun keeps it on this path.

### Spin and orbit

### The other side of the Earth

### A year

## Check

```step
stage: practise
insight: "Using the idea on new examples."
tasks:
  - check:
      type: question
      q: "Someone says: 'We have night because the Earth goes round the sun.' What would you say?"
      options: ["It's the spin that gives night. Going round the sun takes a year", "That's right", "The sun goes round the Earth", "Night happens because clouds block the sun"]
      answer: 0
      feedback: [null, "The Earth does go round the sun, but that takes a year. Night happens every day.", "The Earth goes round the sun. The sun doesn't go round the Earth.", "Night happens even on a clear day. It's the spin that does it."]
      explain: "The spin gives day and night. Going round the sun takes a year."
  - check:
      type: sort
      q: "Does it come from the spin (a day) or the orbit (a year)?"
      options: ["The spin", "The orbit"]
      items:
        - ["Day and night", "The spin"]
        - ["A whole year going by", "The orbit"]
        - ["The sun seeming to rise in the east", "The spin", "The Earth turns, so the sun seems to move across the sky."]
        - ["The same seasons coming back every year", "The orbit"]
```

### A claim about night

### Spin or orbit

## Apply

```step
stage: make
insight: "Explaining it to someone else."
check:
  type: reasoning
  q: "A younger student asks: 'Why is it dark at night?' Explain it in two or three sentences, using the word spin."
  placeholder: "It is dark at night because …"
  models:
    - title: "A short answer"
      text: "The Earth spins once a day. The side facing the sun has day, and the side facing away from the sun has night. As the Earth spins, each place goes from day to night and back again."
  criteria:
    - "I used the word spin (or rotate)."
    - "I said only half the Earth faces the sun at one time."
```

```teacher
summary: "Students separate the Earth's daily spin (day and night) from its yearly orbit round the sun, and drop the idea that going round the sun gives day and night."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say how long the Earth takes to spin and to orbit the sun."
  - "I can say what gives day and night."
  - "I can say what the Earth's orbit gives us."
before: |
  The one idea: the spin makes day and night, and the orbit makes a year. The common mistake is that day and night come from going round the sun. The Think first question and the claim in Check meet it.

  The board is the one used in the Year 7 lesson *Spinning and orbiting*. Here we use only Play a day and Play a year. Tilt and seasons (Year 6 node 3) are in the Year 7 lessons *Spinning and orbiting* and *Why is summer hot?*.

  The model isn't to scale. Say so before students ask why the sun looks close.

  Not yet tried with a class.
running:
  - "Think first: ask students to show with a ball and a torch how night happens."
  - "Try: pause on Play a day. Ask where Canberra is now."
  - "Apply: look for answers that mention the orbit, and ask how long that takes."
struggle: "Students may believe the sun moves round the Earth. Use a torch and a ball (or a student) to show the Earth turning."
stuck:
  - see: "A student says night happens because the Earth goes round the sun."
    ask: "How long does that trip take?"
    fix: "A year. Night happens every day, so it has to be something that takes a day: the spin."
  - see: "A student says the sun goes down."
    ask: "What if it is the Earth that turns?"
    fix: "The Earth turns away from the sun, so the sun seems to go down."
exit:
  q: "What gives us a day, and what gives us a year?"
  a: "The Earth's spin gives a day. The Earth's trip round the sun gives a year."
leads: |
  Leads into Year 7 Earth and space: *Spinning and orbiting*, where students add the tilt of the axis and see the seasons.
```
