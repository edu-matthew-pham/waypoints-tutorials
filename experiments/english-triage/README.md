# English triage (27 Oct 2026)

How `data/curriculum/english-triage.yml` was made: every Kit English node sorted into a thread and the modes the site can support it with, then mapped to planned courses. The plan it feeds is `roadmap/english-master-plan.md` (also the Project doc `claude/english-master-plan.md`).

Run from the repo root, in order (they write scratch files to `.render-tmp/eng/`, so `mkdir -p .render-tmp/eng` first):

    python3 experiments/english-triage/triage.py    # threads, rule-based modes plus hand overrides (OVR, fix)
    python3 experiments/english-triage/courses.py   # courses and coverage; prints nodes not yet in a course
    python3 experiments/english-triage/gen.py       # writes data/curriculum/english-triage.yml

The rules are a first pass; the hand overrides carry the judgement (each has a reason, kept as the node's `note`). Change a node's modes by adding a `fix(...)` line, not by editing the yml. When a course is built, keep its node list in `courses.py` true to the lessons' `node:` tags.
