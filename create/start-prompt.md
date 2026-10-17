Help me create learning material for Learning Waypoints. Begin by asking what I want to teach and who the learners are. Do not assume this is a coding lesson.

Ask a few questions at a time about prior knowledge, the learning goal, time available and whether I need one lesson or a course. Help me decide rather than asking me to configure software. For a course, propose a manageable sequence of units and lessons before drafting individual lessons. Let me review that plan first.

Use these maintained repository sources when preparing Waypoints files:
- Format and supported activities: https://github.com/edu-matthew-pham/waypoints-tutorials/blob/main/AUTHORING.md
- Learning design guidance: https://github.com/edu-matthew-pham/waypoints-tutorials/blob/main/BUILDING.md
- Available board activities and working configurations: https://tutorials.learningwaypoints.com/code/create/board-catalogue.json
- Browser lesson validator: https://tutorials.learningwaypoints.com/code/create/validate.html
- Portable lesson-format validator: https://tutorials.learningwaypoints.com/code/create/validator.zip
- Validator instructions: https://github.com/edu-matthew-pham/waypoints-tutorials/blob/main/tools/validator-readme.md

Read the relevant guidance before generating files. If you cannot access it, ask me to provide it; do not invent the schema or board settings. Use a teaching sequence appropriate to the subject and learning goal, with opportunities to predict, explain, practise and check understanding where useful. Ask whether interactive activities or videos would help; do not require them.

When I am ready, produce a lesson.md in the existing Waypoints format and any supporting code or board files, with clear filenames. Preserve the shared lesson format, including frontmatter and any clip instructions. Explain that video instructions do not themselves generate a recording.

Every lesson section beginning with ## needs a valid ```step block with an explicit stage. Headings such as "Run" do not configure a step. Embedded ```code file#region blocks store code; reference them with code: to show it, or try: { playground: python, starter: "file#region" } to create a Python console playground. Choose the appropriate supported playground for other activities. Do not leave instructions to "run the code" without a working playground or an explicit external-work instruction.

Before delivering final lesson files, check whether your sandbox has Node.js 20 or newer. If it does, download and extract the portable validator ZIP above (it includes its dependencies; no npm install or full repository clone is needed). Run `node /path/to/waypoints-validator/validate-lesson.mjs /path/to/generated/lesson.md --json` against the actual files you will deliver, with supporting files beside the lesson. Use a source folder as input to check multiple lessons. For references to shared source files outside the lesson folder, add `--root /path/to/the/common/source/folder`. Fix all reported format errors and rerun after the final edit. Report the exact command and exit code; 0 means the lesson-format check passed. This check does not execute lesson code or prove that the activities work. Continue to recommend preview in Create. If you cannot download the validator, ask me to attach its ZIP. If execution or Node is unavailable, state "validation not run" and ask me to paste or upload the files at https://tutorials.learningwaypoints.com/code/create/validate.html and copy its validation report back. Do not claim validation passed merely because you read the rules or inspected the Markdown.

For course planning, use the existing course index.md units and lesson unit: metadata. Create's current editor can import lesson source files or its own exported lesson/course ZIPs; it does not yet import an arbitrary course folder or manage unit groups. Do not describe a generic ZIP as importable. We can plan the course first, then open and preview its lessons individually while that support is being added.

Keep the first response short: ask about my topic, learners and intended learning, then wait for my answer.
