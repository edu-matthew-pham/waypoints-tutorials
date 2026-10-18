# Plan: *Make a lesson* (a course for teachers on making tutorials) (18 Oct 2026)

**Approved 18 Oct 2026 (Matthew accepted every recommendation below). Not built yet; handoff: Project doc `claude/handoff-teacher-course.md`.** The candidate in `roadmap/shared.md` (18 Oct). Its "wait" was for Create to settle; Create's design decisions, Primer shape, pointer pages and node pre-fill are now built (shared.md › Generic Create, parts 1 and 2), so the content is stable enough to plan. The AI courses do not change it (the AI committee plan decided not to depend on it).

## What it is
A short, self-paced course for teachers, in the site's own lesson format, on making a tutorial with Create and getting it published. It doubles as the way to **recruit specialist reviewers**, the bottleneck for History and the other Kit subjects (Project doc create-generic-proposal › Open questions).

- **Do first, then the why.** Lesson 1 makes a real primer in about 15 minutes from a pointer page; later lessons each take one of Create's design decisions and improve that primer. Teachers leave with a lesson of their own, not notes.
- **Create stays the playground.** Create cannot run inside a lesson step (it needs its own page and storage), so each "Make" step opens Create in a new tab and the lesson checks the thinking, not the file: `reasoning` checks (write, compare with a model, tick criteria) for each decision, `sort` and `question` checks on example lessons.
- **Its own examples are the teaching material.** The four Create examples (Coding, Maths, Science, Humanities) and a deliberately weak lesson (one per decision: two ideas, no misconception, tell-first opening, guessable checks) are what teachers judge. No copyrighted texts.
- **No AI required.** Create's prompts are copyable; using an AI tool is optional and covered as one route in lesson 1, consistent with "no AI inside the site".

## Lessons (one move each; about 20–30 minutes; teachers' time is short)
1. **Make your first primer.** A History or maths pointer page → Make a primer for this → change the intro and one check → preview as a student. Route B: copy the lesson prompt into the school's AI tool and paste the result back. *Check:* reflect (it previews) and a question on what the preview does that a worksheet can't.
2. **One idea.** A topic is not an idea; narrow it to one move. *Checks:* sort candidate ideas (one idea / a topic / two ideas); reasoning: write the one idea for your primer.
3. **The misconception and the opening move.** Bring the wrong idea into the open before teaching it; commit-first predict; Kit's hinge reasons as a source. *Checks:* pick the opening question that would surface a given misconception; reasoning: write yours.
4. **Checks that test understanding.** Guessable or recall-only checks vs ones that show understanding; when to use a reasoning check for written claims; width from response modes (typical and wider steps). *Checks:* sort example checks (guessable / recall / understanding); fix one in your primer.
5. **What a video is for** (optional). Hook, expected result, explaining why; captions first; record in the browser. *Check:* question on which of four steps earns a video.
6. **Share it and get it reviewed.** Student link, edit link for a colleague, download, the publishing request form; the review checklist (one move, checks match success criteria, no copyrighted text). Close with "become a reviewer for your subject". *Check:* run the checklist on a partner's or an example lesson.

## Teacher layer
`teacher.yml` notes are written for a **PD facilitator** (a head of department running it in a staff meeting): timings for a 50-minute session covering lessons 1–2, pairs critiquing each other's primers, and what to bring (a topic they teach next week).

## Decisions (approved 18 Oct: the recommended option each time)
1. **Where it lives.** Recommended: a course at `content/teachers/make-a-lesson/` with a **Teachers** menu (this course, *For maths teachers*, *Choosing AI tools*), off every student trail. Alternative: link it only from Create's start page and `/teach/`, with no menu. A menu is visible to students; the existing teacher pages already are.
2. **Lesson 1's pointer page.** Recommended: History (AC9HH7S03 n1, the existing Humanities example's node) so it shows the Kit route; maths is the alternative for maths teachers.
3. **Include the optional video lesson (5)?** Recommended: yes, optional.
4. **Title:** *Make a lesson* (working). Alternatives: *Making tutorials*, *Create your own lesson*.
5. **Link from Create.** Recommended: one line on Create's start page ("New to this? Make a lesson, a short course") and from each design decision's options-with-reasons text, once built.

## Before building
- Write the weak example lesson once (all four faults, one per decision), so lessons 2–4 share it.
- Check what a `content/teachers/` folder does to the navbar and progress (a new subject menu; courses keyed by slug), and that no student trail picks it up.
- Pilot lesson 1 with one non-specialist teacher before writing the rest (`strategy/learning-design.md`).
