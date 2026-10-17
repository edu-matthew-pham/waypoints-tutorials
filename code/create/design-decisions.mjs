// The design decisions Create keeps with the teacher (roadmap/shared.md, agreed 18 Oct 2026). The AI asks; it offers
// options with reasons only when the teacher wants them, so specialists are not slowed down and non-specialists get
// guidance while still deciding. The answers are kept in the lesson's teacher block as design:, and Create's review
// shows them beside the lesson. start-prompt.md carries the same wording (experiments/authoring-test.mjs checks it).
export const DESIGN = [
  { key: 'idea', label: 'The one idea', ask: 'What is the one idea students should leave with?', check: 'Does every step serve this one idea?' },
  { key: 'misconception', label: 'The misconception', ask: 'Which wrong idea or common mistake should the lesson tackle?', check: 'Does a step bring this mistake into the open and deal with it?' },
  { key: 'opening', label: 'The opening move', ask: 'How should the lesson open (for example a prediction, a puzzle, a question, a demo)?', check: 'Do students try or predict before being told?' },
  { key: 'checks', label: 'What the checks should catch', ask: 'What should the checks show that a student understands (not just remembers)?', check: 'Could a student pass the checks by guessing or by recall alone?' },
  { key: 'video', label: 'What any video is for', ask: 'Would a video help? If so, what will it do for your students (for example a hook, a demo to watch before class, the expected result, catching up after an absence)?', check: 'Does each video do what you wanted it for?' },
];

export const DECISIONS_TEXT = `MY DESIGN DECISIONS (keep these with me, not with you)
Before drafting, ask me about these one or two at a time. Ask first; if I say I'm not sure, offer two or three options, each with a one-line reason, and let me choose or write my own. If I say "suggest and I'll adjust", propose one with a reason. Don't decide these for me silently.
${DESIGN.map((d, i) => `${i + 1}. ${d.ask}`).join('\n')}
Then draft the lesson to my choices. List my choices at the top of your reply, and record them in the lesson's teacher block as:
design:
  idea: "<my answer>"
  misconception: "<my answer>"
  opening: "<my answer>"
  checks: "<my answer>"
  video: "<my answer, or none>"
`;
