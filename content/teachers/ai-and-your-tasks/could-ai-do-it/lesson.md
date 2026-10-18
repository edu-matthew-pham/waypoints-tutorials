---
title: Could AI do it now?
summary: "Test your task against what AI can do now, not what it couldn't do last year: fluent writing, maths it checks by running code, sources, images, and AI that acts. Find the parts AI could finish alone. About 25 minutes; trying it in an AI tool is optional."
hook: "\"AI can't do maths\" was true of some tools in 2023. A task designed on it stopped working when they started checking their own answers."
language: science
shape: primer
unit: tasks
order: 2
---
Last lesson you named the thinking your task is for and sorted its parts. Now test each part: **could AI do it, now, without the student?** Have your sort from lesson 1 beside you.

## Think first

```step
stage: predict
insight: "Most teachers underestimate what current AI does with maths, because their picture of it is a year or two old."
check:
  type: predict
  q: "The Year 8 problem set: ten percentage problems, show your working. Could a current general AI tool do it, working and all, without mistakes?"
  options: ["No: AI makes arithmetic slips", "A few of them", "Most of them", "All of them, with the working shown"]
  actual: "Very likely all of them. Many current tools write and run a small program to check their own arithmetic, and show working in whatever style they're asked for. Slips still happen, but \"AI is bad at maths\" is no longer something to design a task on."
```

## The idea

```step
stage: investigate
insight: "Design on what AI can do now and might do next year, not on its current weaknesses, which keep disappearing."
```

What general AI tools can do now (October 2026; it changes fast):

- **Write** fluent, well-organised prose on any topic, in any voice, including "like a Year 9 student" or "like this sample of my writing".
- **Do maths and check it**, often by writing and running code, and show the working.
- **Find sources and link them.** Some links and quotes may not exist, but many will.
- **Read images:** photos, diagrams, graphs, cartoons, handwriting.
- **Act:** some AI can now open a web page, fill in a form or a quiz, and press Submit.

**The test: "What if AI could do this next year?"** A task that relies on something AI can't do *yet* (it can't read the cartoon, it gets the maths wrong, it can't use the school's quiz) stops working without anyone noticing. Design on what you can see instead: work done in front of you, a student explaining their own thinking, decisions made from their own data.

Then put the two sorts together. A part that's **keep the thinking** (lesson 1) *and* that **AI could finish alone** is where the task is at risk. Those parts are what lesson 3 redesigns. Parts AI could finish but that aren't the thinking need nothing.

## Worked example

```step
stage: investigate
insight: "A redesign that relies on a current weakness of AI fails the next-year test; one that relies on what the teacher can see passes it."
check:
  type: question
  q: "The history source task (a 1916 cartoon) was set as homework because \"AI can't analyse a picture\". It can now. Which change passes the next-year test?"
  options:
    - "Students annotate the cartoon in class, then explain their judgement of its usefulness to a partner, who asks one question"
    - "Use a blurrier scan of the cartoon so AI can't read it"
    - "Choose a more obscure cartoon AI won't have seen"
    - "Ask for 2,000 words instead of 800, so it takes longer to fake"
  answer: 0
  feedback:
    - null
    - "That's designing on what AI can't do yet, and it makes the task worse for students too."
    - "AI doesn't need to have seen a source to describe and analyse it."
    - "Length costs a student hours and costs AI seconds."
  explain: "Annotating in class and explaining it aloud show the thinking (origin, purpose, usefulness) whatever AI can do next year."
```

The source task, tested part by part:

| Part | Thinking? | AI alone now? | So |
|---|---|---|---|
| Who made it, when and why | Keep the thinking | Yes | At risk: redesign (lesson 3) |
| What it shows | Keep the thinking | Yes | At risk |
| How useful for the question | Keep the thinking | Yes | At risk |
| Background on the debate | Depends on the goal | Yes | Fine if research isn't the goal |

All three thinking parts are at risk as homework. That doesn't mean ban AI: it means some of the thinking has to happen where you can see it.

## Check

```step
stage: practise
insight: "Sorting parts by whether AI could finish them alone shows how few parts of a take-home task are safe on their own."
check:
  type: sort
  q: "As take-home work, could current AI finish each part alone, or does it need the student?"
  options: ["AI could finish it alone", "Needs the student"]
  items:
    - ["Essay: an 800-word persuasive essay on a later school start", "AI could finish it alone", "Fluent and structured, in whatever voice is asked for."]
    - ["Essay: answering, in class, a classmate's objection to your argument", "Needs the student", "It happens in front of you, live."]
    - ["Maths: ten percentage problems with working shown", "AI could finish it alone", "Many tools check their arithmetic by running code."]
    - ["Science: a conclusion explaining the results", "AI could finish it alone", "Given a table of results (or made-up ones), AI writes a plausible conclusion."]
    - ["Science: recording your own measurements during the practical", "Needs the student", "Done in class, where you can see it."]
    - ["Design: an evaluation of how well the prototype met the user's needs", "AI could finish it alone", "It can write as if it had tested a prototype."]
    - ["Design: showing your prototype to the younger student and noting what they did with it", "Needs the student", "A real test with a real user, seen or recorded."]
    - ["Any task: an online quiz, done at home", "AI could finish it alone", "Some AI can now open, fill in and submit a quiz."]
```

## Try: test your task in an approved tool

```step
stage: run
tier: typical
insight: "Seeing a tool do the task in a minute is more persuasive than any list; the paper version gets most of the same effect."
check: { type: reflect, text: "I tested my task (in a school-approved tool, or on paper with a partner) and noted which parts AI could finish alone." }
```

Optional. **Only in a tool your school has approved for staff**, signed in with your staff account, and with **no student work, names or details**: just your task instructions.

1. Paste your task instructions as a student would, and ask for the finished work.
2. Ask again with "like a Year 8 student" (or your year level).
3. Note which parts it finished, and how well.

**On paper instead:** swap tasks with a partner. Each of you plays the AI: write down what a tool would hand back for each part of the other's task, using the list in *The idea*.

## Apply

```step
stage: make
insight: "Combining the two sorts finds the parts to redesign: the thinking that AI could finish alone."
check:
  type: reasoning
  q: "Which parts of your task are both 'keep the thinking' (lesson 1) and something AI could finish alone? Those are the ones to redesign."
  placeholder: "At risk: … Fine as they are: … What surprised me: …"
  models:
    - title: "Maths (the example problem set)"
      text: "At risk: choosing and carrying out a method (AI does all ten with working). Fine as they are: checking arithmetic (not the thinking). Surprised me: I'd assumed working shown meant the student had done it."
    - title: "Design (the example folio)"
      text: "At risk: the evaluation and the research on the user's needs. Fine as they are: the prototype itself and the test with a real user, which happen in class. Surprised me: AI can write an evaluation of a prototype it never saw."
  criteria:
    - "I've named the parts at risk, using my lesson 1 sort."
    - "I've judged each on what AI can do now, not last year."
    - "I haven't 'fixed' anything by relying on something AI can't do yet."
```

Keep this with your lesson 1 sort. Lesson 3 redesigns the parts at risk.

```teacher
summary: "Teachers test a task against what AI can do now (prose, maths checked by code, sources, images, acting), apply the next-year test, and find the parts of their own task that are both the thinking and something AI could finish alone."
time: 25
timing: "Think first 3 min · The idea and worked example 7 min · Check 4 min · Try (optional) 5 min · Apply 6 min"
goals:
  - "I can say what current AI tools can do with a task in my subject."
  - "I can apply the next-year test to a task design."
  - "I can find the parts of my task that are the thinking and that AI could finish alone."
before: |
  **For a facilitator.** The second half of the lesson 1 and 2 meeting (lesson 1's notes have the 50-minute plan). The capability list is dated: re-check it against vendors' own pages before you run the session (sources below), and replace the examples if they've moved on.

  **Try (optional).** Run it only if your school has a staff-approved tool. Demonstrating it once from the front, with one teacher's (willing) task, often does more than everyone trying it. No student work, names or data go in, ever. If you'd rather the course never touch an AI tool, skip it: the paper version (pairs play the AI for each other's tasks) gets most of the effect, and every check works without it.

  Expect two reactions: alarm ("it can do everything") and dismissal ("mine would spot it"). The answer to both is the same: design on what you can see, not on catching people. That's lesson 3.

  Real products (checked 19 Oct 2026; course text names none): ChatGPT's data analysis writes and runs Python to answer questions about data; agent mode in OpenAI's Atlas browser can take actions in the browser for the user. The earlier "ChatGPT agent" help page now says that feature is no longer available, a good example of how fast this moves.
running:
  - "Think first: lock in, then reveal. Most choose 'a few' or 'most'. Ask who last tried a maths task in an AI tool, and when."
  - "The idea: read the list and ask which surprised people. Then the next-year test, with an example from the room."
  - "Worked example: the blurry-scan and obscure-cartoon options are what teachers really do; discuss why they fail."
  - "Check: individual. The quiz item is the one people miss."
  - "Try: a demo from the front, or pairs swapping tasks on paper."
  - "Apply: individual; in the meeting, start it and finish later."
struggle: "Teachers look for the part of their task AI can't do yet and rest the design on it. Ask the next-year question; don't argue about whether today's tools can or can't."
stuck:
  - see: "A teacher says AI couldn't do their task because it's too specific to the class."
    ask: "If a student pasted in the notes and the instructions, what would come back?"
    fix: "Try it on paper with the capability list, or as a demo. Class-specific context is easy to paste."
  - see: "A teacher concludes the whole task should be banned from home."
    ask: "Which parts are the thinking? Which aren't?"
    fix: "Only the parts that are the thinking and that AI could finish alone need redesigning; the rest can stay at home."
  - see: "Someone wants to name the tools that can do this."
    ask: "Will that list be true next term?"
    fix: "Keep names in the dated note; the design shouldn't depend on them."
stretch: "Run the next-year test on the most common assessment in your faculty, not just your own task."
support: "Do the Check together as a group, then use the closest example task from the reference page as a model for their own."
leads: "Lesson 3 (Make the thinking visible) redesigns the at-risk parts with process evidence rather than detection."
exit:
  q: "Why design on what you can see rather than on what AI can't do?"
  a: "Because what AI can't do keeps changing (it now checks its maths and reads images), and a design that relies on a weakness stops working without anyone noticing."
sources:
  - { title: "OpenAI Academy: data analysis (ChatGPT writes and runs the Python code)", url: "https://academy.openai.com/public/resources/data-analysis", checked: 2026-10-19 }
  - { title: "OpenAI Help: agent mode in Atlas", url: "https://help.openai.com/en/articles/12628199", checked: 2026-10-19 }
  - { title: "OpenAI Help: ChatGPT agent (now says it is no longer available)", url: "https://help.openai.com/articles/11752874", checked: 2026-10-19 }
```
