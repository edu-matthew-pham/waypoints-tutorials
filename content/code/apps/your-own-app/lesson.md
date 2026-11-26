---
order: 12
unit: challenge
title: "Challenge: your own app"
summary: "Plan, build and test a prototype of an app for a real person. Choose a problem, sketch the screens and how they connect, decide which variables and events it needs, build it in milestones, then watch someone use it and improve one thing."
language: maths
hook: "Real apps start as a sketch and a rough prototype that someone tries. The first version is never the last."
---
This time you choose the app. It should help a real person you can ask: a friend, someone in your family, a club, or your class.

Good prototypes are **small**. Pick one job the app does well. You have everything you need from the last five lessons: screens and buttons, variables, events, sub-events and Else, Every tick, arrays and lists, and copies of one object with their own values.

Some ideas, if you need one:

- a score keeper for a game you play
- a packing list for a camp
- a quiz for a younger student
- a mood or energy check-in that only you see
- a pet care tracker: fed, walked, watered

## Plan: what will it need?

```step
stage: investigate
insight: "Matching needs to the tools from the course is the planning move, and checks that each earlier idea is understood by what it's for, not just how to build it."
check:
  type: sort
  q: "Your app might need each of these. Which tool from the course does each one need?"
  options: ["A variable in the sidebar", "Object variables", "A list and a List object", "A sub-event and Else"]
  items:
    - ["Remember a score while you move between screens", "A variable in the sidebar", "One value the whole app shares, kept when the screen changes."]
    - ["Four pets, each with its own name and last fed time", "Object variables", "One Pet image, four copies, each with its own values."]
    - ["Keep every answer the user types, and show them all", "A list and a List object", "Add each answer to the end of a list; a List object shows it."]
    - ["A button that turns a sound on and off", "A sub-event and Else", "One click event, two branches: only one runs."]
```

## Milestone 1: plan on paper

```step
stage: make
insight: "Sketching screens and flow before building is the design step the prototype will be tested against."
check: { type: reflect, text: "I have a plan: who the app is for and what it helps them do, a sketch of each screen, arrows for every button that moves between them, and a list of the variables and events it needs." }
```

On paper or in a document:

1. **Who and why:** one sentence: *This app helps (person) to (do something).*
2. **Screens:** draw each screen as a box with its text, buttons and boxes.
3. **Flow:** draw an arrow for every button that goes to another screen.
4. **What it remembers:** list the variables (whole app or object variables) and any lists.
5. **Events:** for each button, write *when … do …*.

Keep it to two or three screens. Show your plan to the person it's for, and ask: is this what you'd want?

## Milestone 2: one screen works

```step
stage: make
insight: "Getting one screen fully working first keeps the build testable at each stage, instead of debugging everything at the end."
check: { type: reflect, text: "My first screen works: its buttons do what my plan says, and the screen shows what it remembers." }
```

Build in [App Builder](https://tools.learningwaypoints.com/app-builder/) (it opens and keeps your project in this browser; **Save** keeps a copy as a file, or in your OneDrive or Google Drive if your school allows it, to hand in or carry to another computer; **Share** gives a link you can send your teacher). Build the first screen and its events. Try it after every event you add, not just at the end.

## Milestone 3: everything connected

```step
stage: make
insight: "Connecting the screens tests the plan's flow and the variables that carry between screens."
check: { type: reflect, text: "Every screen in my plan is built, and every arrow in my flow works." }
```

Add the other screens and the buttons that move between them. Check each screen's events are on that screen (the Events tab's heading names it). Count your events: a good prototype usually needs far fewer than 50.

## Milestone 4: test with a real user

```step
stage: make
insight: "Watching a user without helping is the evidence that drives the next change, not the builder's own opinion."
check: { type: reflect, text: "The person my app is for used it while I watched without helping. I wrote down where they paused, what they clicked by mistake, and what they said." }
```

Give the person one task, such as *add two pets and feed one*. Don't explain or point. Write down:

- where they paused or looked confused
- what they clicked that didn't do what they expected
- what they said they liked, and what they'd change

## Milestone 5: improve one thing

```step
stage: make
insight: "One change based on the test closes the design loop: plan, build, test, improve."
check: { type: reflect, text: "I changed one thing because of what I saw in the test, and I can explain what I saw, what I changed, and how I'd check it worked." }
```

Choose the most important problem from your test and fix it. Then write three lines: what you saw, what you changed, and how you'd check it worked with the next user.
