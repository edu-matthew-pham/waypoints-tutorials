import {playground,appSettings,LESSON_PROFILES} from './playground-registry.mjs?v=8f2bb9b51c';
// Step text for the plain (primer) step names, so a primer or free-steps starter reads as any subject, not code.
const PLAIN_TEXT={
 'Think first':'Ask a question students can answer before they are taught: what do they think, and why?',
 'The idea':'State the one idea in plain words, with a short example.',
 'Worked example':'Apply the idea to one example, one step at a time, saying why at each step.',
 'Check':'A short check: can students use the idea on a new example?',
 'Apply':'Students use the idea on their own class text or topic, then compare with a model answer.',
 'Step 1':'Add your own steps. Give each a stage, or keep them as information.',
};
export function starterFiles({title='My lesson',profile='coding',playgroundId='turtle',board=null}={}){
 const p=playground(playgroundId),shape=LESSON_PROFILES[profile]||LESSON_PROFILES.coding;
 const language=['maths','science','inquiry'].includes(profile)?shape.language:p?.language||shape.language;
 const metadata={title,summary:'Predict, explore and explain one idea.',language,...(shape.shape?{shape:shape.shape}:{})};
 if(p)metadata.app=appSettings(p.id);
 const header=Object.entries(metadata).map(([k,v])=>typeof v==='object'?`${k}:\n${Object.entries(v).map(([a,b])=>`  ${a}: ${JSON.stringify(b)}`).join('\n')}`:`${k}: ${JSON.stringify(v)}`).join('\n');
 const ref=p?p.file+'#start':null;
 const steps=shape.sequence.map(([stage,label])=>{
  const activity=p&&(stage==='run'||(profile==='design'&&stage==='make')||(profile==='reading'&&label==='Read')||(['primer','none'].includes(profile)&&(label==='The idea'||label==='Step 1')));
  const config=`stage: ${stage}`+(activity?`\ntry: { starter: "${ref}", height: 420${p.id==='turtle'?'':`, playground: ${p.id}`} }`:'');
  const text=stage==='predict'?'Commit to a prediction before opening the activity. What would you expect, and why?':stage==='investigate'?'Explain what changed and why. Refer to specific observations or steps.':stage==='modify'?'Change one thing. Predict its effect and check what happens.':stage==='make'?'Apply the idea to a new example and explain how you checked it.':stage==='practise'?'Try a new example independently, then explain your reasoning.':activity?'Run the activity and compare it with your prediction.':'What did you learn? What would you check next?';
  const plain=PLAIN_TEXT[label];
  // The primer's Apply step shows the write, compare and self-check check (an unmarked reasoning check).
  const extra=profile==='primer'&&label==='Apply'?'\ncheck:\n  type: reasoning\n  q: "Use the idea on your own class text or topic. Write two or three sentences."\n  models:\n    - "A short model answer that uses the idea, for students to compare with."\n  criteria:\n    - "I used the idea, not just the topic."\n    - "I gave a reason or evidence."':'';
  return `## ${label}\n\n\`\`\`step\n${config}${extra}\n\`\`\`\n\n${plain&&!activity?plain:text}\n`;
 }).join('\n');
 const files={'lesson.md':`---\n${header}\n---\nOne idea to investigate. Replace this introduction with the topic and learning goal.\n\n${steps}`};
 if(p){const marker=p.file.endsWith('.html')?['<!-- region: start -->','<!-- endregion -->']:p.file.endsWith('.py')||p.file.endsWith('.yml')?['# region: start','# endregion']:['// region: start','// endregion'];files[p.file]=`${marker[0]}\n${board?.playground===p.id?board.example:p.sample}${marker[1]}\n`}
 return files;
}

// The one source for Create's ready-made lessons (roadmap/next-tasks-handoff.md, task 3): the start page's
// examples (EXAMPLES) and the plain "+ Add lesson" fallback (newLessonFiles) live here beside starterFiles.
const TURTLE_EXAMPLE = {
  'lesson.md': `---
title: My first turtle lesson
summary: Predict, run and change a short drawing program.
language: python
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground" 8123
  url: http://127.0.0.1:8123/index.html
---
A turtle walks across the screen, leaving a line behind.

## Predict

\`\`\`step
stage: predict
code: shape.py#square
\`\`\`

What shape will the turtle draw? Where will it finish?

## Run

\`\`\`step
stage: run
try: { starter: "shape.py#square", height: 420 }
app: true
query: { code: "@shape.py#square", speed: 8 }
clip:
  - caption: "The turtle repeats these commands four times."
  - click: Run
  - expect: { selector: "#status", contains: "Finished" }
\`\`\`

Run the program and compare it with your prediction.

## Modify

\`\`\`step
stage: modify
try: { starter: "shape.py#modify", height: 420 }
\`\`\`

Change the loop so the turtle draws a triangle.

\`\`\`teacher
design:
  idea: "A loop repeats the same commands, so four sides need four repeats and a quarter turn each time."
  misconception: "Students change the number of repeats but not the angle, then expect a triangle."
  opening: "Predict the shape from the code before running it."
  checks: "Could a student say why a triangle needs a 120 degree turn, not 90?"
  video: "The Run clip shows the expected drawing, for a student who missed the demo."
\`\`\`
`,
  'shape.py': `# region: square
from turtle import *

for i in range(4):
    forward(100)
    right(90)
# endregion

# region: modify
from turtle import *

for i in range(4):
    forward(100)
    right(90)

# Change the code so it draws a triangle.
# endregion
`,
};

// Maths: the balance setups are from Equations as a balance (content/maths/algebra/equation-balance).
const MATHS_EXAMPLE = {
  'lesson.md': `---
title: Equations as a balance
summary: Find the value that balances an equation, then check it by substitution.
language: maths
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8123
  url: http://127.0.0.1:8123/index.html
  layout: full
---
An **equation** says two sides are equal, like a balance scale. The **solution** is the value of the letter that makes it true.

## Predict: which value balances?

\`\`\`step
stage: predict
check:
  type: predict
  q: "Which value of $x$ makes $2x + 3 = 11$ true?"
  options: ["$x = 4$", "$x = 5.5$", "$x = 7$", "$x = 8$"]
  actual: "x = 4. Two lots of 4 is 8, and 8 + 3 = 11, the same as the right side."
\`\`\`

Two bags on the left each hold $x$ blocks, with 3 loose blocks beside them. The right side has 11 blocks.

## Try: find the balance

\`\`\`step
stage: run
try: { playground: board, starter: "board.yml#run", height: 470 }
check: { type: board, text: "Find the value of $x$ that balances the scale.", expect: { balanced: true } }
\`\`\`

Move $x$ and watch both sides. Stop when the scale balances.

## Worked example: check by substitution

\`\`\`step
stage: investigate
check:
  type: answer
  q: "Is $x = 5$ a solution of $3x - 2 = 13$? Work out the left side, $3x - 2$, when $x = 5$."
  answer: "13"
  feedback:
    - ["33", "It looks like 3x became 35. 3x means 3 × x, so it is 3 × 5 = 15."]
    - ["15", "That is 3 × 5. Now take away 2."]
  explain: "3 × 5 − 2 = 13, the same as the right side, so x = 5 is a solution."
\`\`\`

To check a value, put it in place of the letter and work out each side. Both sides equal means it is a solution.

## Vary: $x$ on both sides

\`\`\`step
stage: modify
try: { playground: board, starter: "board.yml#both-sides", height: 470 }
check: { type: board, text: "Balance $x + 7 = 3x + 1$.", expect: { balanced: true } }
\`\`\`

Now both sides change when $x$ changes. The solution still makes them equal.

\`\`\`teacher
design:
  idea: "A solution is the value that makes both sides of an equation equal, and you check it by substitution."
  misconception: "Reading 2x as 'two and x' (so x = 4 gives 24), not 2 × x."
  opening: "Students commit to a value before touching the balance."
  checks: "The substitution answer catches the 35 and 15 slips with feedback; the board only ticks a true balance."
  video: "none"
\`\`\`
`,
  'board.yml': `# region: run
widget: balance
left: 2x + 3
right: 11
min: 0
max: 10
start: 1
# endregion

# region: both-sides
widget: balance
left: x + 7
right: 3x + 1
min: 0
max: 10
start: 0
# endregion
`,
};

// Science: the forces setups are from Does balanced mean no forces? (content/science/physics-7/balanced).
const SCIENCE_EXAMPLE = {
  'lesson.md': `---
title: Does balanced mean no forces?
summary: Balanced forces cancel out, so the motion doesn't change. Unbalanced forces change it.
language: science
shape: 5e
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8123
  url: http://127.0.0.1:8123/index.html
  layout: full
---
A car cruises at a steady 100 km/h with its engine running. What do its forces look like?

## Engage: the cruising car

\`\`\`step
stage: predict
check:
  type: predict
  q: "A car drives at a steady 100 km/h. Compare the forward force from the engine with the backward forces (air and road friction)."
  options: ["Forward force is bigger, or the car would stop", "They are equal: the forces are balanced", "There are no forces on it while it cruises", "Backward forces are bigger"]
  actual: "They are equal. At a steady speed the forces are balanced: the net force is zero, so the motion doesn't change."
\`\`\`

## Explore: keep it moving

\`\`\`step
stage: run
try: { playground: board, starter: "board.yml#steady", height: 640 }
check: { type: board, text: "Find a push that keeps the box moving at a steady speed for at least 3 seconds.", when: "t >= 3 and f = 0 and v > 0" }
\`\`\`

The box starts moving at 3 m/s. Press **Play**, then try different pushes (**Reset** to start again). Evenly spaced dots mean a steady speed.

## Explain: balanced is not "no forces"

\`\`\`step
stage: investigate
check:
  type: question
  q: "When the box moved at a steady speed, what was true?"
  options: ["The push equalled friction: balanced, net force 0", "There were no forces on it", "The push was bigger than friction"]
  answer: 0
  feedback: [null, "Both arrows were there: push forward, friction back.", "If the push were bigger, the box would speed up: check the graph."]
  explain: "Balanced forces are equal and opposite. They both still act; they cancel out."
\`\`\`

## Elaborate: slow it down

\`\`\`step
stage: modify
try: { playground: board, starter: "board.yml#stop", height: 640 }
check: { type: board, text: "Make the box slow down and stop.", when: "t >= 1 and v = 0" }
\`\`\`

Change the push so the forces are unbalanced the other way. What does the graph do?

## Evaluate: in your own words

\`\`\`step
stage: info
\`\`\`

In your book: explain why "balanced forces" doesn't mean "no forces", using the box as your example.

\`\`\`teacher
design:
  idea: "Balanced forces cancel out, so motion stays the same: still, or a steady speed."
  misconception: "A moving object needs an unbalanced forward force to keep moving."
  opening: "Predict the cruising car's forces before trying the board."
  checks: "The board ticks only a steady speed held for 3 seconds; the question separates 'balanced' from 'no forces'."
  video: "none"
\`\`\`
`,
  'board.yml': `# region: steady
widget: forces
object: Box
mass: 2
force P: right, 2, Push, adjust 0-12
friction: 6
motion: on
speed: 3
track: 40
time: 10
# endregion

# region: stop
widget: forces
object: Box
mass: 2
force P: right, 6, Push, adjust 0-12
friction: 6
motion: on
speed: 3
track: 40
time: 10
# endregion
`,
};


// Humanities: a primer (shape: primer) drafted from Waypoints Kit node AC9HH7S03 node 1 (origin and content; a hinge,
// response mode consolidation). An untested generic flow, not reviewed curriculum: the sources are made up for practice.
const HUMANITIES_EXAMPLE = {
  'lesson.md': `---
title: Who made it, or what it shows?
summary: Ask "Who made it, and when?" separately from "What does it show?" before you interpret any source.
language: science
shape: primer
---
Historians start every source with two separate questions. **Origin**: who made it, when and where? **Content**: what does it show, say or record? Keeping them apart stops you guessing one from the other.

## Think first

\`\`\`step
stage: predict
check:
  type: predict
  q: "A photograph shows soldiers marching through a city. Who made this source?"
  options: ["The soldiers", "Whoever took the photograph", "You can't tell from the picture alone", "The city council"]
  actual: "You can't tell from the picture alone. The soldiers are its content. Its origin is whoever took the photograph, and when and where: you need a caption, a record or an archive note to find that out."
\`\`\`

All the sources in this lesson are made up for practice.

## The idea

\`\`\`step
stage: investigate
\`\`\`

- **Origin** answers *Who made it? When? Where?* (a person, a group or an organisation).
- **Content** answers *What does it show, say or record?*

Origin comes from information **about** the source (a caption, a signature, a date, an archive record). Content comes from **looking at** the source itself. Describe the content first without interpreting it: say what is there, not what it means.

## Worked example

\`\`\`step
stage: investigate
check:
  type: sort
  q: "Sort each statement about the letter into origin or content."
  options: ["Origin", "Content"]
  items:
    - ["Written by Mary Hale, a teacher", "Origin"]
    - ["Dated 3 March 1885", "Origin"]
    - ["Sent from a country town to her brother in the city", "Origin"]
    - ["Says the school has 40 children and one room", "Content"]
    - ["Asks her brother to send books", "Content"]
\`\`\`

A made-up letter, signed *Mary Hale*, dated *3 March 1885*, posted from a country town to her brother in the city. It says the school has forty children in one room and asks him to send books.

1. **Who?** Mary Hale, a teacher (her signature and what she says about her job).
2. **When?** 3 March 1885 (the date she wrote).
3. **Where?** A country town (where it was posted).
4. **What?** A forty-child, one-room school, and a request for books.

Notice that step 4 describes; it does not yet say what the letter tells us about schools then. That comes later.

## Check

\`\`\`step
stage: practise
check:
  type: question
  q: "A poster says 'Join the army today!' and shows a smiling soldier. A note on the back says it was printed by the government in 1915. What is the poster's origin?"
  options: ["A smiling soldier", "The government, in 1915", "People who joined the army", "Join the army today"]
  answer: 1
  feedback: [ "That is its content: what the poster shows.", null, "They might be its audience, not who made it.", "That is its content: what the poster says." ]
  explain: "Origin is who made it, when and where: the government, in 1915. The soldier and the slogan are its content."
\`\`\`

## Apply

\`\`\`step
stage: make
check:
  type: reasoning
  q: "Choose a source from your class topic. In one sentence give its origin (who, when, where). In a second sentence describe its content (what it shows, says or records), without interpreting it."
  models:
    - "Origin: this photograph was taken by a newspaper photographer in Melbourne in 1932. Content: it shows a long queue of people outside a building, most wearing coats and hats."
  criteria:
    - "I said who made it, when and where."
    - "I described what it shows without saying what it means."
    - "I kept origin and content in separate sentences."
\`\`\`

Your teacher may give you the source. If you can't find who made it, say what you would need to find out.

\`\`\`teacher
summary: "Students separate a source's origin (who, when, where) from its content (what it shows), the first step of source analysis."
goals:
  - "I can say who made a source, when and where."
  - "I can describe what a source shows without interpreting it."
  - "I can keep origin and content apart."
before: |
  Drafted from Waypoints Kit node AC9HH7S03 node 1 (Year 7 History, using sources: origin and content). Kit marks it a hinge: students who mix up origin and content struggle with context and purpose later. Kit is a draft under review, and this lesson is an untested example: check it before use. The sources are made up; swap in ones from your topic.
stuck:
  - see: "A student says the soldiers made the photograph."
    ask: "Who was holding the camera? How would you find out?"
    fix: "Point to where origin information lives: the caption, the back, the archive record."
design:
  idea: "Origin (who, when, where) and content (what it shows) are separate questions, asked before interpreting a source."
  misconception: "Reading the origin off the content: the people in a photograph made it."
  opening: "Predict who made a photograph of marching soldiers."
  checks: "The sort and the poster question catch origin and content mixed up; Apply has students write both for a source of their own."
  video: "none"
class:
  inquiry:
    q: "If you know who made a source, do you know whether to trust it?"
    prompts:
      - "What else would you want to know?"
    notes: "Leave it open: this leads to context and purpose, the next waypoints."
  activities:
    - at: predict
      kind: discussion
      title: "Who made it?"
      minutes: 4
      do: |
        Show a photograph with no caption. Pairs write who they think made it, then list what would tell them for sure.
      notes: "Collect the 'what would tell us' list: captions, archive notes, signatures, dates."
\`\`\`
`,
};

export const EXAMPLES = {
  coding: { label: 'Coding', blurb: 'A short Turtle drawing lesson.', files: TURTLE_EXAMPLE },
  maths: { label: 'Maths', blurb: 'Equations on a balance scale.', files: MATHS_EXAMPLE },
  science: { label: 'Science', blurb: 'Balanced forces on a moving box.', files: SCIENCE_EXAMPLE },
  humanities: { label: 'Humanities', blurb: 'A History primer: origin and content of a source.', files: HUMANITIES_EXAMPLE },
};
export const EXAMPLE = TURTLE_EXAMPLE;

// "+ Add lesson" when no starter settings are chosen yet.
export function newLessonFiles(title) {
  return { 'lesson.md': `---\ntitle: ${title}\nsummary: Write a short summary.\nlanguage: python\n---\n## Run\n\n\`\`\`step\nstage: run\ntry: { starter: "shape.py#start", height: 420 }\n\`\`\`\n\nRun the code, then change it.\n`, 'shape.py': '# region: start\nfrom turtle import *\nforward(100)\n# endregion\n' };
}
