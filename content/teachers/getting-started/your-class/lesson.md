---
title: Make it work for your class
summary: "Find a course's teaching resources again and choose one activity or checkpoint for an existing unit."
order: 3
unit: start
language: science
shape: primer
hook: "One well-chosen check can fit inside the unit you already teach."
---
You can use a tutorial for a class discussion, a quick check or some extra practice. Choose where it fits the unit you already teach. You still choose the sources, listen to students’ explanations and decide what to teach next.

## Think first: a useful checkpoint

```step
stage: predict
insight: "Choose a check that helps you find out what students understand."
check:
  type: predict
  q: "Imagine your class has discussed water resources, but you are unsure whether students can explain the difference between renewable and continuous. What would you try next?"
  options: ["One check followed by a discussion of reasons", "Restart the entire unit in Tutorials", "Assign wider work as a speed group"]
  actual: "Try one check, then ask students to explain their choices. You can use their answers to decide what needs more attention."
```

## Check: choose how to use it

```step
stage: practise
insight: "You can use the same lesson in different ways, depending on what your class needs."
check:
  type: match
  q: "These classroom situations are made up. How could you use a tutorial in each one?"
  pairs:
    - ["You want to hear the class’s different ideas before teaching the topic", "Project a prediction, then discuss reasons together"]
    - ["After a discussion, you want to check whether one difference is clear", "Use one relevant check and ask why"]
    - ["One student needs help with an earlier idea while the class uses it", "Offer a catch-up or smaller step, then return to the main task"]
  explain: "You can use just the part that helps, then continue with your unit or class investigation."
```

## Try: find it again

```step
stage: info
insight: "You can find the teaching resources again from your subject page."
check:
  type: reflect
  text: "I began at a subject's List for teachers, opened a course and its Teacher guide, and located its slides and worksheet in Prepare."
```

Try this route from [Geography](https://tutorials.learningwaypoints.com/geography/):

1. Select **List for teachers** and open **Water as a resource**.
2. Open the course's **Teacher guide**, then **Renewable, non-renewable or continuous?**.
3. Under **Classroom resources**, use **Open in Prepare** beside Slides and **Open in Print** beside Worksheet. Look at a slide and switch between the student and Teacher editions in Print.

You can also start from the [Teachers hub](https://tutorials.learningwaypoints.com/teachers/): open **Getting Started**, or **Humanities pilot**, then the [water course Teacher guide](https://tutorials.learningwaypoints.com/teach/geography/water-7/) and [resource-types lesson guide](https://tutorials.learningwaypoints.com/teach/geography/water-7/resource-types/).

[Open the example Slides](https://prepare.learningwaypoints.com/?src=https%3A%2F%2Ftutorials.learningwaypoints.com%2Fteach%2Fgeography%2Fwater-7%2Fresource-types%2Fdeck.md) · [Open the example Print worksheet](https://prepare.learningwaypoints.com/print?src=https%3A%2F%2Ftutorials.learningwaypoints.com%2Fteach%2Fgeography%2Fwater-7%2Fresource-types%2Fworksheet.md). If loading is slow, download the Markdown from the guide and use **Import**, or use **Copy address for Prepare** and **Load URL**.

## The idea: keep the teacher decisions

```step
stage: investigate
insight: "A tutorial answer can help you decide what to ask or teach next."
check:
  type: question
  q: "How could you use the classification check in a class investigation?"
  options:
    - "Use a classification check, discuss the reasons, then continue the class investigation."
    - "Replace the whole inquiry because the site marks extended reasoning."
    - "Give optional width only to the quickest finishers as their permanent track."
    - "Treat a correct click as enough evidence for every curriculum expectation."
  answer: 0
  feedback:
    - null
    - "The site checks selected answers. You still read and discuss students’ longer explanations and guide the investigation."
    - "Choose extra examples for the students who would benefit from them. The width setting does not decide their pace or group."
    - "A correct answer helps, but ask students to explain or use the idea in another example to find out more."
  explain: "Use the check to start a discussion about the choices students made, then continue the investigation."
```

## Optional: present or adapt

```step
stage: info
insight: "You can present resources to the class or make your own version."
```

**Present to your class.**

With a class session connected, Prepare offers **Class → Follow me** or **Up to here** for students using the student link on their own screens. See [Prepare’s current session and follow-along instructions](https://prepare.learningwaypoints.com/help#p-live). This is optional; a normal deck share link lets colleagues explore independently and includes the deck’s notes and answers.

**Adapt if useful.**

**Available now:** **Make your own version** at the end of the [example tutorial](https://tutorials.learningwaypoints.com/geography/water-7/resource-types/) opens an editable copy in Create. Review and change it manually, then preview and validate it.

**Planned:** an AI-assisted route where you describe the changes you want, then check the result in Create. This is not available yet; you can try the current lessons without it.

## Apply: choose one thing to try

```step
stage: make
insight: "A small pilot fits a specific concept and moment in an existing unit."
check:
  type: reflect
  text: "I chose one part of Learning Waypoints to try, decided where it fits my unit and noted what I hope to learn from using it."
```

Choose one part to try in a unit you already teach. You might look at how a topic builds on earlier learning, try a teaching resource or use a tutorial check. Note when you would use it and what you hope to learn. Write in your own notes or discuss with a colleague. No student information is needed. For subject starting points and the three reflection prompts, open the [Humanities pilot companion](https://tutorials.learningwaypoints.com/humanities-pilot/).

```teacher
summary: "Teachers choose a classroom use, retrieve resources from List for teachers, and plan a small trial."
time: 6
timing: "Think first 1 min · Teaching moves 1 min · Find it again 2 min · Apply 2 min"
goals:
  - "I can find teaching resources and choose one check for my unit."
before: "For a facilitator: use Geography as the common route, then let colleagues find their own subject. Do not collect student information or require course completion."
running:
  - "Begin at Geography and select List for teachers, rather than using a saved guide link."
  - "Open Water as a resource, its Teacher guide and the first lesson's Classroom resources."
  - "Ask what teachers want to try and what it might help them find out."
struggle: "If teachers are unsure what to choose, ask which idea their students find difficult and when it comes up in the unit."
stuck:
  - { see: "A teacher lands on the Teachers hub.", ask: "Which subject or onboarding link is visible?", fix: "Use Humanities pilot for the subject route or Getting Started for the guide's direct links." }
  - { see: "Prepare cannot load the file.", ask: "Can the Markdown file be opened directly from the guide?", fix: "Download it and Import, or paste its copied address into Load URL." }
support: "Keep the shared Geography example and name one class discussion that could follow it."
stretch: "Use a subject inquiry skeleton to place the check within a longer investigation."
exit: { q: "What does the teacher still decide?", a: "What to teach, how to respond to students’ answers and how to continue the discussion or investigation." }
class:
  activities:
    - { at: end, kind: discussion, title: One thing to try, minutes: 1, do: "Name one activity or checkpoint and when it fits your existing unit.", notes: "Teachers keep their own notes. A pilot is optional and may use one check only." }
```
