# Shared refresher blocks

One file per idea, written once and used by any lesson that needs it (roadmap/shared.md › Prior-knowledge tools; AUTHORING › Refreshers). Text from `claude/shared-refreshers-draft.md` (Project doc, 10 Nov 2026).

A lesson pulls a block into a step or task with `refresher: rate` or `refresher: { block: percentage, part: share, example: "Here, …" }`. It shows as a closed "Build up to it" fold above the hints; the block's check is never counted. The same file makes the short page at `/refresh/<id>/`, so the fold and the page can't drift apart.

Fields: `title`, `from` (the subject the idea comes from: the fold opens "From maths:"), `summary` (one line, for the index and search), `keywords`, `covers` (curriculum codes or nodes the block stands in for; a cross-subject link to one of these lands on the short page), `fold` (one or two sentences, Markdown), optional `parts` (`id: { text, check? }`, when one idea is used two ways and a lesson shows only the line it needs), `check` (one easy question or number check), `page` (the short page's Markdown, or `false` for a one-liner with no page), `lessons` (the full lessons, lightest first).

Keep each block's words matched to the maths lesson it links to, so a student who follows the link meets the same language.
