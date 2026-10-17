# Waypoints lesson-format validator

Requires **Node.js 20+**. The download includes the shared validation code, YAML parser, snippet catalogue and shared module definitions. It works offline after extraction; no npm install, site build, browser or full repository clone is required.

Run from any working directory, passing the actual file or source folder:

```sh
node /path/to/waypoints-validator/validate-lesson.mjs /path/to/lesson.md --json
node /path/to/waypoints-validator/validate-lesson.mjs /path/to/course-folder --json
```

For a lesson referring to files outside its own folder, include their common source folder:

```sh
node /path/to/waypoints-validator/validate-lesson.mjs /path/to/course/lesson/lesson.md --root /path/to/course --json
```

Exit codes: **0** = all supplied lessons passed; **1** = lesson-format errors; **2** = command/input/setup error. JSON output reports each lesson and its errors. A folder scan finds `lesson.md` files recursively; it does not check course/unit sequencing. Symlinked folders and files are excluded from recursive scans.

Checks include required step stages, referenced code regions and source files, playground identifiers, check configuration, clip verbs, teacher blocks, snippet unlocks and shared module references. Inline `code file#region` blocks store code; a step still needs `code:` or `try:` to display or run it. A heading such as `## Run` does not supply `stage: run`.

This is the same lesson-format validator used by Create. It does not execute lesson code or app commands, load playgrounds, record videos or assess teaching quality. Full repository publication validation includes additional course, curriculum and subject checks.

For an assistant: run this command against the final files you will deliver, fix reported errors, then rerun. Report the exact command and exit code. If Node or the validator is unavailable, say **validation not run** and ask the user to check the files in Create; do not claim a pass based on reading the rules. Preview the resulting lesson in Create before using it with learners.

Source: https://github.com/edu-matthew-pham/waypoints-tutorials
Download: https://tutorials.learningwaypoints.com/code/create/validator.zip

YAML parser copyright and ISC licence are included under `vendor/yaml/LICENSE`.
