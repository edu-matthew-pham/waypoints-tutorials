# Roadmap: Engineering

An elective STEM layer beside Code, Maths, Science and Digital systems: `content/engineering/`. Not core Digital Technologies (Code and Digital systems carry that): what a school with kits, a makerspace or a STEM elective adds. Lessons apply Maths, Science and Code rather than re-teach them, and name their curriculum hooks (D&T Engineering principles and systems first) without aiming for descriptor coverage. Plans and reasons: Project docs `engineering-plan.md` and `physical-computing-plan.md` (12 Oct 2026).

Principles: borrow first and build only where a lesson needs a check (benchmark SparkFun, Raspberry Pi Foundation, Teach Computing, TeachEngineering; adapt only openly licensed material once the site licence is decided; link the rest); one home per idea (gates and vector vs raster stay in Digital systems); two lesson shapes, the maths shape for concepts and a design-project shape (brief, criteria and constraints, build, test, evaluate); build there, check here for outside tools (Tinkercad, Onshape, Blender), as the classifier does for Teachable Machine.

## Done (12 Oct 2026): subject and the winch

- Subject `content/engineering/index.md` ("Engineering", trail by units). Pathways: Mechanisms (built: Mechanisms; planned: Levers and pulleys), Physical computing (planned: Circuits with the micro:bit, Arduino, Power and motors), CAD and fabrication (planned), Design your own board (planned). 3D and animation was planned here; parked 12 Oct (see Parked).
- Course `engineering/mechanisms`, unit Gears: 1. Gear up the winch (from Project doc `engineering-sample-lesson.md`). Primer `primers/gears.md`. Misconceptions `bigger-gear-faster`, `gear-ratio-upside-down`, `gear-one-effect`. No `node:` (Engineering is not in the node check; there are no D&T progression pages).
- Board widget `gears` (AUTHORING › board): gears from a kit, Turn once, Lift (stalls), hidden numbers for the Try, `brief: edit` lists the pairs that pass (the Make: a brief with exactly one passing pair).
- Lessons use `language: maths` (board, answer and number checks, worked examples, maths stage names), as Digital systems does.
- Every board check tested in a headless browser; the explain clip records (silent here).
- Clip-server ports: Engineering lessons use 8500–8539.

## Done (12 Oct 2026): Circuits with the micro:bit

- Course `engineering/circuits` (Physical computing pathway, foundations), units Lighting an LED and Reading inputs: 1. A complete loop, 2. Why the resistor (Ohm's law with the LED's 2 V), 3. A button is an input (pull-down, floating pin; Make is a Parsons of the reacting program), 4. Sensors that vary (analog read 0–1023; Make is a night-light threshold). Primers `outputs.md`, `inputs.md`. Misconceptions `one-wire-enough`, `resistor-before-led`, `floating-pin-reads-zero`, `reading-is-volts`.
- Decision: the Predict is settled on our own `circuit` board (so every step has a check), and each lesson has a `tier: typical` "Build it in Tinkercad" step (reflect check), rather than checking Tinkercad work directly. Tinkercad numbers will differ a little from the board's model; the lessons say so.
- Board widget `circuit` (`mode: led | button | sensor`; AUTHORING › board). All board checks tested in a headless browser; the four explain clips record (silent here).
- Ports 8501–8504.
- Not checked against Tinkercad itself (needs a person and an account): the reflect steps' instructions and the overcurrent warning.

## Done (12 Oct 2026): Arduino

- Course `engineering/arduino` (Physical computing, after Circuits), units A new board and Writing C++: 1. Same circuit, new board (pins by number; the dim pull-up glow), 2. Reading the C++ (setup once, loop for ever, delay timing; Make a lighthouse), 3. Values and decisions (int, analogRead, if; the missing `;` and `=` in an if; Make a band with &&), 4. Talking to the computer (Serial print/println, the `"words" + n` trap, map to a percentage), 5. Outputs that vary (PWM as on-off, ÷ 4, non-PWM pins, the 8-bit wrap; Make turns the mapping round). Misconceptions `code-any-pin`, `setup-repeats`, `cpp-assign-in-if`, `cpp-plus-joins-text`, `pwm-lower-voltage`, `analog-range-mismatch`.
- Decision: a lesson board runs the sketches (`arduino` widget: a C++ subset on a model Uno with simulated time) so every Try, Vary and Make step has a check. Tinkercad stays the `tier: typical` second tool (blocks to C++, its serial monitor and oscilloscope). The plan's blocks stage (lesson 5 in blocks) became Tinkercad's Blocks + Text view inside lesson 1.
- Every board check tested in a headless browser with the expected solution; five explain clips record (silent here). Ports 8505–8508 and 8510.

## Done (12 Oct 2026): Real hardware (Arduino unit 3)

- Lessons 6–8 of `engineering/arduino`, unit Real hardware: 6. From simulator to breadboard (new `breadboard` widget: strips, the gap, rails; a real-breadboard upload step), 7. A small system (a plant-water alarm brief; the `arduino` widget's new **Run the tests** with `test:` cases; boundary testing, a steady state, a three-band fridge alarm), 8. The same project on a Pico (optional; no board: match C++ to MicroPython, convert 0–1023 to 0–65535 and ms to seconds, a Parsons, Wokwi or Thonny as a `tier: typical` step). Misconceptions `breadboard-rows`, `tests-skip-boundary`, `pico-same-numbers`.
- Hardware and upload steps are `tier: typical` reflect checks (Uno serial isn't read: `B.serial` filters for the micro:bit's USB id).
- All board checks tested headless; two new clips record. Ports 8511–8512.

## Done (12 Oct 2026): Power and motors

- Course `engineering/power` (Physical computing, extensions, after Arduino; Years 9–10), units Driving a motor and Batteries: 1. Why a motor can't run from a pin (transistor, flyback diode), 2. Motor drivers (H-bridge truth table, ENA as PWM, brake vs coast), 3. Two supplies, one ground (shared 0 V; a motor on the Uno's 5V resets it), 4. Choosing a battery (run time = capacity ÷ current, 80% margin, voltage and weight criteria; the Make leads to a LiPo), 5. LiPo safety (teacher-led, no board: sort, voltages, routine Parsons, a teacher sign-off reflect). Primers `drive.md`, `battery.md`. Misconceptions `code-runs-motor`, `one-signal-speed-direction`, `separate-supplies-no-ground`, `mah-is-strength`.
- New `motor` widget (`mode: pin | hbridge | ground | battery`). Battery figures are typical, not exact (teacher notes say so). Every board check tested headless; four clips record. Ports 8513–8516.
- Physical computing is now complete as planned (circuits, Arduino blocks to C++, real hardware, power). Still open: the plan's two-motor drive-base Make as a teacher project; Uno USB ids in `B.serial`.

## Done (12 Oct 2026): Capstone projects

- Course `engineering/projects` (Physical computing, extensions, after Arduino), all lessons optional, three units: Years 8–9 (Smart plant monitor, Parking assistant, Reaction game), Years 9–10 (Two-motor drive base, Automated sorter, Lift), Stretch (Off the breadboard, Design a PCB). Students pick one per band.
- Each is a design-cycle lesson (`shape: design`, new: Inquire, Develop, Create, Test, Evaluate on the existing stages): a brief sorted into criteria and constraints, a Develop step that prototypes the logic on a board where it can (arduino `test:` cases, the motor battery chooser, the gears board) plus a planned test table, reflect evidence for Create and Test, and an evidence question plus a written evaluation. Teacher notes map the steps to MYP Design A–D.
- The drive base, sorter and lift link Power and motors, Mechanisms, the classifier (Code) and CAD; the stretch unit stands in for the Design your own board pathway until it has its own course.
- Shared change: `lesson-core.mjs` reads `shape:`; `lesson-view.mjs` has `STAGE_INFO_DESIGN` (logged in roadmap/shared.md). Deck slides still title the Inquire step "Predict" (teach.mjs unchanged).

## Done (12 Oct 2026): CAD and fabrication

- Course `engineering/cad` (Design and print, foundations): 1. Design to a dimension (two walls; part + gap + wall; a Tinkercad case), 2. Parts that fit (printers shrink holes and grow pegs; sliding and press fits; a tolerance test card), 3. Design for the printer (supports over 45°, weak across layers; the slicer's layer preview), 4. Slicer trade-offs (layers double the time; walls beat infill). Course `engineering/parametric` (extensions, after cad): 1. Parametric design (driving vs driven dimensions; Onshape variables), 2. Laser cutting and kerf (optional; slot = drawn + kerf; a test comb). Primers `size.md`, `print.md`. Misconceptions `wall-one-side`, `same-size-fits`, `print-strength-equal`, `more-infill-better`, `edit-means-redraw`, `cut-on-the-line`.
- New `fab` widget (six modes; stated models, calibrate fits to the school's printer and cutter). Every board check tested headless; six clips record. Ports 8522–8527.

## Done (12 Oct 2026): Gear trains and Mechanisms practice

- `engineering/mechanisms/trains` (lesson 2, unit gears): an idler changes direction, not ratio (Predict, then the board with a choosable idler); a compound train multiplies its stage ratios (worked example 8 → 24 = 8 → 40 is strong enough but too slow; faded 16 → 40 = 8 → 24 passes; Kai adds the ratios); Vary chooses four gears for 1500 g in 40 s and the fastest train for 2500 g; Practise with a clock; Make a brief only a compound train can meet. New `train` widget (`geartrain.js`), misconceptions `compound-ratios-add` and `idler-changes-ratio`, primer updated.
- Practice page for Mechanisms (`practice/winch.yml`, `practice/trains.yml`): ratio, speed, strength, lift time, swapped gears; compound ratio, idler, compound speed, least ratio for a load.

## Done (12 Oct 2026): Levers and pulleys

- Mechanisms unit 2 (`levers`): `engineering/mechanisms/levers` (slide a pivot until 200 N lifts a 600 N rock; turning effects from the pivot; hand travel; class 2 wheelbarrow and class 3 forearm; sort the classes; Make a lever with two competing criteria, advantage 4.5 to 5) and `pulleys` (one fixed pulley changes direction only; add ropes; pull = load ÷ supporting ropes, rope = height × ropes, work in = work out; Mia counts the pulled rope; Make a brief that needs exactly 4 ropes; a match tying gears, levers and pulleys together). New `lever` widget (`mode: lever | pulley`), misconceptions `lever-distance-from-end` and `pulley-count-pull-rope`, primer `levers.md`, practice files for both. The Engineering index's planned "Levers and pulleys" course became "Linkages and cams" (planned).

## Done (12 Oct 2026): Linkages and cams

- Course `engineering/linkages` (Mechanisms pathway, extensions, after Mechanisms; unit motion): Cranks and sliders (stroke = 2 × radius whatever the rod; pump flow; Noah uses the radius; size a crank for a garden pump), Cams and followers (eccentric lift = 2 × offset; pear, snail, heart; displacement graphs; choose a cam for toys; a heart cam for a fish), Four-bar linkages (a longer crank jams; Grashof's rule, shortest + longest ≤ the other two; Ava adds the wrong pair; a wiper swinging ≥ 100°; a swing in a range). New `motion` widget (`mode: crank | cam | linkage`), misconceptions `stroke-equals-radius` and `grashof-wrong-pair`, primer, practice page.

## Done (12 Oct 2026): Your own board

- Course `engineering/pcb` (Design your own board pathway, extensions; unit From breadboard to board): Place the parts (nets, ratsnest, a placement order, a 100 mm and a 70 mm small-board brief), Route the traces (shorts refused, one layer with a detour, two layers with GND underneath; 119 mm against 94 mm of copper), Design rules and ordering (width for current, a trace too wide to squeeze between pins, setup plus per-board cost). New `pcb` widget (`mode: layout | route | rules`), primer, practice page. The Capstone projects' Off the breadboard and Design a PCB follow it with real tools.

## Done (12 Oct 2026): Structures

- Pathway Structures (Engineering index) with course `engineering/structures`, units Frames and trusses and Beams: Pull or push (a roof truss; tension and compression; bottom pull = load × span ÷ (4 × height); a height that meets 600 N and $125), Triangles hold their shape (a square collapses; one diagonal; members = 2 × joints − 3; Zoe adds 3; towers of two and three storeys), Design a bridge (a pinned deck folds; a big triangle buckles; buckling = 8000 ÷ L²; any bridge that holds, then $300 or less failing at 1400 N or more: a Pratt or Howe truss, $293, 1414 N), Beams and shapes (support shares; depth cubed; flat, edge, I-beam, tube; a shelf only the I-beam meets). New `truss` widget (`mode: truss | beam`, stiffness-method solver), misconception `truss-count-add`, primers, practice page. Note for teachers: the counting rule is necessary, not sufficient (two diagonals in one panel and none in another still collapses; the board shows it).

## Done (12 Oct 2026): links to Science

- Eleven theory concepts for Science ideas (`THEORY` in `tools/concepts-core.mjs`): physics lessons `introduces:` them (Year 7 arrows, balanced, weight; Year 8 kinds and transform; Year 9 conservation, efficiency, electric current; Year 10 third law, free body), Engineering lessons `assumes:` them (winch, levers, pulleys, crank, all four Structures lessons, circuits loop and resistor, power pin limit, H-bridge and batteries, PCB rules, the lift project). `turning-effect` is introduced by Engineering › Levers and assumed by Beams. Both pages show "Builds on" and "Put to work in". The concept lint now reads Engineering's pathways for course order (`prerequisites()`), and Structures is `after: [mechanisms]`.
- Not done: a `node:` tag for Levers on the science map was not added (Engineering lessons don't carry nodes).

## Done (12 Oct 2026): Real machines lose energy

- `engineering/mechanisms/losses` (Mechanisms unit Real machines; `assumes: [efficiency, energy-conservation, energy-transfer]`, so Science › Year 9 Efficiency and Conservation link to it): the winch's compound train lifts 2700 g, not 3000 g, at 95% per mesh; pulleys at 90% per wheel need 5 ropes instead of 3, and 9 and 10 ropes give the same pull; efficiencies multiply; work in = work out ÷ efficiency, the rest is heat and sound; a 900 N brief needs 6 ropes, not 3; the Gear trains brief redone (ratio 8.33 or 9 within 45 s). `efficiency:` option on the `train` and `lever` (pulley) widgets (default 100, so every earlier lesson is unchanged); pulleys now allow up to 10 ropes. Port 8600: Engineering's 8500–8539 are used up, so it continues at 8600–8639.

## Approved and built (25 Oct 2026, review chat): engineering thinking in Arduino and the capstones

Built in three pushes: (1) Arduino Makes with a brief and edge tests, plus hints (fed7675); (2) all eight capstones: Develop compares two given ideas (checked question) then an unmarked `reasoning` box for the student's own two ideas; Test reads another team's results (checked question) before the student's own run, then a `reasoning` box for one fixed failure; (3) Bridge Make gains a deck criterion (A-B, B-C, C-D, D-E present, via `f_ab > 0 …`) that trades against cost: the cheapest safe bridge without the deck is about $253, with it $293. Not yet tried with a class; the bridge check and seven of the capstones are validated and built but not clicked through in a browser. The original proposal follows.

From the six-subject review. Mechanisms and Structures already do design thinking well (Winch: criteria to a design, a "no pair passes" Vary ending in the trade-off for the client, a Make that reverses the job; Bridge: test to failure, then trade $300 against 1400 N). Arduino and the capstones are where it thins out. Nothing below is built.

**1. Arduino Makes: a person, a reason and a boundary test, not a spec.** Five of the six Arduino Makes are exercises ("The LED is wired to pin 7. Write the sketch…"; "Change it so the LED is on only while the knob reads between 300 and 700"). Small system (the fridge door alarm: a three-state brief with a test table) is the model. Give each Make one line of who wants it and why, one criterion with a number, and check it the way Small system does (tests at both edges), so the Make asks "does it do the job?" rather than "did you type it?". Same moves, same boards, no new widgets:
- *Pins:* the bike shed's light on pin 7, on all the time (keep: it's the first sketch).
- *Setup and loop:* the lighthouse (keep; already a timing worked backwards).
- *Decisions:* a hallway night light that's off in daylight, on when it's dim, and not flickering at the edge; tests either side of the cut-off, as the middle band already sweeps (`h >= 2`).
- *Serial:* the PE teacher wants the knob as a percentage on the screen; tests at 0, the middle and 1023.
- *PWM:* a dimmer that's brightest at the bottom of the knob for a bedside lamp; tests at three positions.
- **Hints:** the third hint in Pins, Setup and loop, Serial and PWM is the whole solution line (`analogWrite(9, 255 - level / 4);`). AUTHORING allows "at most a partial example". Replace each with a `smaller:` lead-in (a question or number on the one idea: "When level / 4 is 0, what brightness do you want?") and keep two hints. 14 Engineering lessons have no hints at all; the same pass adds them on board tasks.

**2. Capstones: check the judgements, keep self-report only for the physical build.** Each of the eight projects has six reflect ticks and three or four checked items. Create on real kit can only be self-report, and that's fine. Develop and Test can be checked better:
- *Develop: a range of ideas (MYP B).* The teacher notes map Develop to MYP Design B, which expects more than one design idea, but every Develop goes straight to one plan. Add one checked comparison before the plan: two given concepts for the same brief (sorter: a flap on a servo, or two chutes and a light gate), scored against the brief's criteria (a `sort` or `question` check), then a `reasoning` check (unmarked, with a model answer and self-check, built 18 Oct for any subject) for the student's own two ideas and why they chose one. The plan reflect stays.
- *Test: read a results table before your own.* Before "I ran my 20-item test set", a checked step on another team's table (sorter: 17 of 20 in the right bin, flap 0.4 s, against 90% and 0.5 s): which criteria are met, and what to test next (`question` or `number`). Then the student's own run stays a reflect, followed by a `reasoning` box for their table and the one failure they fixed, so the evaluation has something written to point back to.
- *Evaluate* already has a checked question; no change.

**3. Smaller things found:** the Bridge Make comes down to one cheapest cost (a Pratt or Howe truss at $293), so it's optimisation more than design; a second criterion that trades against cost (deck height, or members a student can cut from one sheet) would leave more than one good design to argue for. Arduino's Tinkercad steps are reflect-only by necessity; fine.

**Order if approved:** (1) Arduino Makes and hints, one push (lesson.md and board.yml; their clips re-record only where a board region changes); (2) the capstone Develop and Test steps, starting with sorter as the pattern, then the other seven; (3) the Bridge criterion.

## Next

0. (25 Oct, review chat) `smaller:` lead-ins added to 27 lessons: arduino 3, cad 4, circuits 4, linkages 3, mechanisms 5, power 4 (not lipo: its stuck entry is about charging at home, a handling rule), structures 4. One question or number each (beams has two), at the step the `stuck:` list names; `lesson.md` only, so no clips re-record. Still without one (14): parametric 2, pcb 3, lipo, the 8 capstones (open-ended briefs; Develop and Test checks added instead). Not tried with a class.

1. Practise with code: the sample lesson's Python loop over every gear pair. A maths lesson has no Python playground; either a short linked Python task (console bridge) or leave it to the Code pathway.
2. (Done 12 Oct: efficiency per mesh and pulley friction in `mechanisms/losses`; Structures is its own pathway.)
3. Optional: let `B.serial` accept an Uno's USB ids; surface-mount parts and 45° routing on the `pcb` board if a class wants them. (Done 12 Oct: compound gear trains; `shape: design` decks and worksheets say Inquire, not Predict.)
4. (Done 12 Oct: `prerequisites()` reads `engineering` too.)

## Proposed (25 Oct 2026, review chat; not approved): OpenSCAD, code as CAD

A niche but useful bridge between Code and Engineering: a part is described in text, so variables, loops and modules do real work, and the Parametric design course's idea (change a number, the part changes) becomes the whole method. Nothing in the repo mentions it yet.

- **Where it sits.** An optional extension after the console bridge (Code) and Parametric design (Engineering). It reuses variables, `for` loops and functions from the Python courses, in a different syntax. Typical fit Years 9+; teacher note only, not a year gate. The wider 3D and animation idea stays parked for a Digital Media / Design subject.
- **Possible lessons (4 to 5, one move each).** Shapes and moving them (`cube`, `cylinder`, `translate`); variables and a labelled part (a box with a lid that fits: reuse the clearance numbers from Design and print › fit); `for` loops (a row of pegs, a gear-like ring); `module` and parameters (a box generator, one for each size); then a challenge that pairs with Capstone projects (a case for the plant monitor or the sorter). Checks are the usual kinds: questions, numbers, traces and `reasoning` boxes about a result; the part is judged by its dimensions, not by eye.
- **Runtime options (decide before building).**
  1. *Link out* to a hosted browser OpenSCAD and have students paste results back. Cheapest, but depends on school network access and has no code checks.
  2. *Vendor a WebAssembly build* of OpenSCAD in a new `playground-openscad/`, loaded as local files like the other web libraries (no CDN). Gives live preview and code checks (`contains`, plus reading the output's size from the exported mesh). Largest cost: a new playground, size on disk, and the licence to read first (OpenSCAD is GPL; confirm what vendoring a build into the static site requires before any work).
  3. *A model, not the real tool.* Teach the ideas on the existing `fab` widget with a few OpenSCAD-style lines it understands. No new dependency, but students would not use the real syntax.
  Recommended: start with (3) for a single pilot lesson to see whether the idea works with a class, and decide on (2) after.
- **Open questions.** Does the school network allow WASM and large downloads on student logins? Is 3D printing available to print what students make, or does the output stay on screen? Does a code-as-CAD course belong under Engineering or under Code's extensions? (Suggested: Engineering, with a link from Code's pathway page.)
- **Not done / not checked.** No tool has been tested here. Any claim about a browser build's size, speed or licence needs checking at its source before it goes in a lesson.

## Parked

- 3D and animation (12 Oct): taken out of Engineering, which is about physical things designed to a brief. Parked for a later Digital Media / Design subject (with video, audio and UX if they come). Keep the computational framing when it returns: keyframes as data, tweening and easing as maths, frames per second, meshes as lists of points, Blender driven by its Python API, Autodesk as a nod. Builds on Digital systems › Shapes as numbers and Code › p5.js.

## Open questions

- Subject name: Engineering, Make or STEM.
- Pathway order: Mechanisms first (no kits), CAD, or Physical computing.
- Kits, printers, slicer and laser cutter at the school; Onshape or Fusion; Raspberry Pis.
- LiPos at all, or AA and NiMH only.
- Site content licence (decides whether CC BY-SA kit guides can be adapted).
