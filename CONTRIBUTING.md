# Contributing a lesson

1. Open **/create/** on the site. Write or paste your lesson, add code files, and check the preview.
   Follow [AUTHORING.md](AUTHORING.md) for the format (PRIMM steps: Predict, Run, Investigate, Modify, Make).
2. Add `author: Your Name` to the lesson's frontmatter if you want credit.
3. Click **Request publishing** and submit the form with your lesson link.
4. A maintainer reviews it, adds it under `content/`, and the build records the clips and publishes it.

Maintainers: download the zip from the shared link, check it, copy the folder to `content/<subject>/<collection>/`,
run `npm run validate`, and commit to `main`.
