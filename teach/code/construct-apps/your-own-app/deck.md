---
marp: true
theme: default
html: true
---

# Challenge: your own app

Construct apps · Final challenge: your own app

<!-- Speaker note: The course challenge: students plan, build and test a small app prototype for a real person, in five milestones (plan on paper, one screen works, everything connected, test with a user, improve one thing). A sort at the start matches needs to the course's tools. No new Construct ideas. About 180 minutes (About three lessons: plan and first screen (lesson 1), connect and count events (lesson 2), test with a user and improve (lesson 3).). -->

---

## Today

- I can plan an app's screens, flow, variables and events before I build it.
- I can build a prototype with more than one screen that works as planned.
- I can test my prototype with a real person and improve it from what I saw.

<!-- Speaker note: Before class: The user is a real person the student can ask: a classmate, family member, club or younger student. A classmate is fine when nobody else is available; the point is that someone else uses it without help. Apps that collect personal details are out: keep any personal content (moods, check-ins) on the student's own device, made up for testing, or not stored at all. Nothing is shared or collected. These steps use only what the earlier lessons taught. Students who want something new (sound, saving between sessions, timers) can use Construct's own manual; treat it as a stretch, not a requirement. Suggested checkpoints: see each plan before building; see Milestone 2 working before anyone adds screens; collect the three-line write-up from Milestone 5. Teacher: Milestone 1: approve each plan in one or two minutes; cut anything over three screens. Teacher: Milestone 2: 'Preview after every event' is the rule. Ask to see the last preview. Teacher: Milestone 4: testers come from another table and haven't seen the app built. Teacher: Milestone 5: ask what they saw first, then what they changed. -->

---

## Why it matters

> Real apps start as a sketch and a rough prototype that someone tries. The first version is never the last.

<!-- Speaker note: This time you choose the app. It should help a real person you can ask: a friend, someone in your family, a club, or your class. Good prototypes are **small**. Pick one job the app does well. You have everything you need from the last five lessons: screens and buttons, variables, events, sub-events and Else, Every tick, arrays and lists, and copies of one object with their own values. Some ideas, if you need one: - a score keeper for a game you play - a packing list for a camp - a quiz for a younger student - a mood or energy check-in that only you see - a pet care tracker: fed, walked, watered -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Why do app makers show people a rough prototype instead of waiting until the app is finished?**

- What could a user tell you from a prototype?
- What would it cost to find that out after the app was finished?

<!-- Speaker note: A prototype is cheap to change. Watching someone use it shows problems the builder can't see, because the builder already knows how it works. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Plan: what will it need?

**Your app might need each of these. Which tool from the course does each one need?**

Groups: A global variable · Instance variables · An array and a list · A sub-event and Else

Remember a score while you move between screens · Four pets, each with its own name and last fed time · Keep every answer the user types, and show them all · A button that turns a sound on and off

* Answer: Remember a score while you move between screens → A global variable; Four pets, each with its own name and last fed time → Instance variables; Keep every answer the user types, and show them all → An array and a list; A button that turns a sound on and off → A sub-event and Else

<!-- Speaker note: What this step is for: Matching needs to the tools from the course is the planning move, and checks that each earlier idea is understood by what it's for, not just how to build it. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 1: plan on paper

On paper or in a document:

1. **Who and why:** one sentence: *This app helps (person) to (do something).*
2. **Screens:** draw each screen as a box with its text, buttons and boxes.
3. **Flow:** draw an arrow for every button that goes to another screen.
4. **What it remembers:** list the variables (global or instance) and any arrays.
5. **Events:** for each button, write *when … do …*.

Keep it to two or three screens. Show your plan to the person it's for, and ask: is this what you'd want?

<!-- Speaker note: What this step is for: Sketching screens and flow before building is the design step the prototype will be tested against. For students who need more support: Offer a starter plan: a score keeper with a Players screen and a Scores screen, one global variable per player, and a Reset button. For early finishers: Test with a second user after the change, and compare what each did. The hard part, on purpose: Scope. Students pick an app that's too big (a full social network). Hold them to one job, two or three screens, and the 50-event limit; the plan in Milestone 1 is where to say no. When students get stuck: A student can't choose an idea. Ask: Who do you know who keeps track of something, or forgets something? Fix: Pick one of the listed ideas and change it for that person. / The app has grown past three screens. Ask: Which screen would the user miss most if it were gone? Fix: Keep that one and the start screen; the rest go on a 'later' list. / Nothing works after building a lot at once. Ask: When did you last preview? Fix: Disable events (right-click, Toggle disabled) until it works again, then turn them back on one at a time. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Silent testing <span style="font-size:.6em;color:#64748b">(15 min)</span>

Pairs swap laptops with another pair. Each tester gets one task written on a sticky note from the builder. Builders watch in silence and write down every pause and wrong click. Swap back and share one surprise each.

<!-- Speaker note: No pointing, no explaining. The notes are the evidence for Milestone 5. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 2: one screen works

Build the first screen and its events. Preview after every event you add, not just at the end.

<!-- Speaker note: What this step is for: Getting one screen fully working first keeps the build testable at each stage, instead of debugging everything at the end. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 3: everything connected

Add the other screens and the buttons that move between them. Check each layout uses the right event sheet. Count your events: the free edition allows 50, and a good prototype usually needs far fewer.

<!-- Speaker note: What this step is for: Connecting the screens tests the plan's flow and the variables that carry between screens. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 4: test with a real user

Give the person one task, such as *add two pets and feed one*. Don't explain or point. Write down:

- where they paused or looked confused
- what they clicked that didn't do what they expected
- what they said they liked, and what they'd change

<!-- Speaker note: What this step is for: Watching a user without helping is the evidence that drives the next change, not the builder's own opinion. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 5: improve one thing

Choose the most important problem from your test and fix it. Then write three lines: what you saw, what you changed, and how you'd check it worked with the next user.

<!-- Speaker note: What this step is for: One change based on the test closes the design loop: plan, build, test, improve. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What did your user do that you didn't expect, and what did you change because of it?**

* Any specific answer tied to what they watched, not a general opinion.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Students can go on to the games course (behaviours, collisions, spawning) or, with paid seats, Events to JavaScript. -->
