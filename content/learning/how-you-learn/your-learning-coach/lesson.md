---
order: 2
unit: coach
title: Your learning coach
summary: "Sometimes you choose the task, and sometimes someone else does. Either way, you're your own learning coach: you plan before you start, check how it's going while you work, and look back when you finish. The coach also notices feelings, like getting fed up, and helps you keep going. Thinking out loud is the coach's voice."
language: science
shape: primer
hook: "Jun chose to learn guitar by herself. Mei's teacher set her a maths worksheet. Which one is coaching her own learning?"
---
Everyone in this workshop is made up. Some questions have more than one good answer, so talk them through.

## Think first

```step
stage: predict
insight: "Students often think that choosing your own task is what makes you a good learner. Jun and Mei pull choosing and coaching apart."
check:
  type: predict
  q: "Jun chose to learn guitar by herself. Every day she plays the same easy song, and she never checks whether she's getting better. Mei's teacher set her a maths worksheet. Mei marks her first three answers before doing the rest. Who is doing more to coach her own learning?"
  options: ["Jun, because she chose it herself", "Mei, because she checks how it's going", "Neither: one of them didn't choose her task", "About the same"]
  actual: "Mei. Jun chose her task, which is great, but she isn't checking or changing anything. Mei didn't choose hers, and she's still coaching herself through it. Who chose the task and how you coach yourself through it are two different things."
```

Lock in an answer before you go on. There's a good argument for more than one.

## The idea

```step
stage: investigate
insight: "Two questions, then the coach's three jobs. The planted slip is that a task someone else chose leaves nothing for you to coach."
tasks:
  - insight: "Sorting on two questions at once: who chose the task, and is the learner coaching it?"
    check:
      type: sort
      q: "For each made-up learner: who chose the task, and are they coaching themselves through it (planning, checking, changing what they do)?"
      options: ["Chose it, coaches it", "Chose it, doesn't coach it", "Someone else chose it, coaches it", "Someone else chose it, doesn't coach it"]
      items:
        - ["Kai picked his own history project on old trains and keeps a list of questions he still can't answer.", "Chose it, coaches it", "His task, and he keeps track of what's missing."]
        - ["Jun picked guitar herself and plays the same easy song every day.", "Chose it, doesn't coach it", "Her task, but nothing is checked or changed."]
        - ["Mei was set a maths worksheet and marks her first three answers before doing the rest.", "Someone else chose it, coaches it", "Not her choice of task, but she's coaching herself through it."]
        - ["Leo was set the same worksheet and races to the end without looking back.", "Someone else chose it, doesn't coach it", "Finished, but not coached."]
        - ["Ana decided to code a game and tests each part before adding the next.", "Chose it, coaches it", "Her task, with checking built in."]
        - ["Tom was told to revise for a test and rereads his notes, feeling fine.", "Someone else chose it, doesn't coach it", "Rereading feels fine, but nothing checks what he can do without the notes."]
  - insight: "The coach's three jobs: plan before, check during, look back after. Noticing a feeling is part of the job too."
    check:
      type: sort
      q: "Here are things a learner might say to themselves. When would the coach usually say each one?"
      options: ["Before: plan", "During: check", "After: look back"]
      items:
        - ["\"What is this actually asking me to do?\"", "Before: plan"]
        - ["\"What's my first step?\"", "Before: plan"]
        - ["\"Does this answer make sense?\"", "During: check"]
        - ["\"I'm getting fed up. Short break, then one part at a time.\"", "During: check", "Noticing a feeling and doing something about it is part of checking how it's going."]
        - ["\"What worked, and what would I do differently next time?\"", "After: look back"]
        - ["\"I lost marks the same way twice. What's going on there?\"", "After: look back"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib's teacher has set a worksheet. Click the line where Nib's thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: set-task-no-coaching
      explain: "Line 2: the teacher chose the task, but Nib is still the one doing it. Nobody else can check Nib's answers while Nib is working, so that's Nib's job. Marking the first few answers would have caught the slip early."
```

Two different questions are hiding in here:

- **Who chose the task?** Sometimes you do: a project topic, a video to watch, a song to learn. Sometimes someone else does: a worksheet, an essay, a test. At school, it's often someone else.
- **Who coaches you through it?** Always you.

**Sometimes you choose the task, sometimes someone else does. Either way, you're your own learning coach.**

A coach has three jobs:

- **Before:** plan. What is it asking? What's my first step?
- **During:** check. Is this working? Does my answer make sense? How am I feeling about it?
- **After:** look back. What worked? What would I change next time?

Feelings are part of the coach's job. Getting fed up or worried is often the moment people stop checking and start guessing. A good coach notices that and does something about it: a short break, a smaller step, asking for help.

**Thinking out loud is the coach's voice.** Here's Mei on her worksheet: *"OK, question 4. It's asking for the area, not the perimeter. My answer's 2,000 square metres for a classroom floor… that's far too big for one room. Let me check my working."* When you're stuck, try asking: **"If I were coaching myself right now, what would I say?"**

### Who chose, who coaches?

### The coach's three jobs

### Nib's slip

## Check

```step
stage: practise
insight: "Applying the two questions to new cases, and picking out the coach's voice."
tasks:
  - check:
      type: question
      q: "Ben's teacher sets an essay. Ben makes a plan, checks it against the task halfway through, and rewrites his second paragraph. What's going on?"
      options: ["Someone else chose the task, and Ben is coaching himself through it", "Ben chose the task, and he's coaching it", "Nobody is coaching: the teacher set it", "Ben isn't coaching: he's just doing what he was told"]
      answer: 0
      feedback: [null, "The teacher set the essay, so Ben didn't choose it.", "The teacher chose the task, but Ben's planning, checking and changing are his own coaching.", "Doing what you were told and coaching yourself can happen together. Planning, checking and rewriting are the coaching."]
      explain: "Ben didn't choose the essay, and he's still his own learning coach: plan, check, change."
  - check:
      type: question
      q: "Sam is halfway through a science question and has gone quiet. Which of these sounds most like Sam's learning coach?"
      options: ["\"What kind of stuck is this? Maybe I don't get the question.\"", "\"I'm just no good at science, so there's no point.\"", "\"Just write anything down so it's finished.\"", "\"Everyone else has finished, so I must be slow.\""]
      answer: 0
      feedback: [null, "That's a feeling talking, not a coach. A coach would ask what's going wrong.", "That gets it finished, but nothing is checked.", "That's comparing, not coaching. A coach looks at what Sam can do next."]
      explain: "A coach names what's happening and picks a next step. The other three are feelings, shortcuts or comparisons."
```

### Ben's essay

### Sam's coach

## Vary

```step
stage: modify
insight: "Writing the coach's voice for someone else first, before applying it to yourself."
tasks:
  - check:
      type: reasoning
      q: "Go back to Jun, who chose guitar and plays the same easy song every day. Write two or three things her learning coach might say to her."
      placeholder: "Jun's coach might say …"
      models:
        - title: "One way"
          text: "\"You chose this, so what do you want to be able to play by the end of the month? Pick one harder song and practise just the tricky bit. Record yourself on Friday and listen back: is it better than Monday?\""
        - title: "Another way"
          text: "\"Playing what you already know feels good, but it doesn't make you better. What's one thing you can't do yet? Try it for five minutes a day and keep count.\""
      criteria:
        - "It sounds like Jun talking to herself, not like a teacher telling her off."
        - "It includes a plan, a check, or both."
  - tier: typical
    insight: "Years 7 and 8: a long project she chose, with frustration in it. The coach deals with the feeling first."
    check:
      type: question
      q: "Priya chose to build a model bridge for a term-long project. Three weeks in, it keeps collapsing and she's fed up. What would her learning coach say first?"
      options: ["\"Take a break, then test one part at a time.\"", "\"Start a new project you like more.\"", "\"Keep building the same design, but faster.\"", "\"You're just not good at building things.\""]
      answer: 0
      feedback: [null, "Changing project is sometimes right, but she hasn't found out what's failing yet.", "Faster won't fix a design that fails.", "That's the frustration talking, not the coach. Being stuck is part of a project."]
      explain: "Calm down first, then check one part at a time. Priya chose the project, and she still has to coach herself through it."
```

### Jun's coach

### Priya's bridge

## Apply

```step
stage: make
insight: "Turning the coach on yourself, privately. Share only what you're comfortable with."
check:
  type: reflect
  text: "I've thought of a task I have this week and what my learning coach would say before I start it."
```

Think of a task you have this week, one you chose or one someone set. What would your coach say **before** you start it? Keep it in your head, or write it somewhere just for you. You don't need to share it, but you can if you want to.
