# Maths course split: mapping (plan, step 1)

Made by `tools/maths-split.mjs` (removed after the move) on 2026-10-31 from each lesson's first `node:` (data in `data/maths-split.json`). Done 1 Nov 2026: every lesson below has moved, and its old address forwards. Decisions and open questions are in `roadmap/maths.md` › Course split.

## New courses

| Course | Lessons | Units (from old course › unit) |
|---|---|---|
| `maths/number-7` | 21 | Integers (number › integers); Squares, powers and primes (number › powers); Fractions and decimals (number › fractions); Place value and estimating (number › placevalue); Ratios (number › ratio); Modelling (number › modelling) |
| `maths/algebra-7` | 15 | Expressions (algebra › expressions); Rules, tables and graphs (linear-relations › rules); Equations (algebra › equations) |
| `maths/measurement-7` | 15 | Area (measurement › area); Parallel lines (angles › parallel); Volume (measurement › volume); Angle sums (angles › angle-sums); Circles (measurement › circles); Modelling (number › modelling) |
| `maths/space-7` | 9 | Classifying shapes (angles › shapes); Solids (angles › solids); Transformations (angles › transform); Algorithms (angles › algorithms) |
| `maths/statistics-7` | 6 | Data (data › statistics) |
| `maths/probability-7` | 3 | Chance (data › chance) |
| `maths/number-8` | 10 | Recurring decimals (real-numbers › decimals); Integers (number › integers); Irrational numbers (real-numbers › irrational); Index laws (real-numbers › indices); Fractions and decimals (number › fractions); Modelling (number › modelling) |
| `maths/algebra-8` | 11 | Lines and their rules (linear-relations › lines); Solving and modelling with lines (linear-relations › using); Brackets (algebra › brackets); Equations and inequalities (algebra › solving) |
| `maths/measurement-8` | 14 | Pythagoras (measurement › pythagoras); Area (measurement › area); Volume (measurement › volume); Circles (measurement › circles); Time zones (measurement › time); Rates (number › rates); Modelling (number › modelling) |
| `maths/space-8` | 6 | Congruence and similarity (angles › congruence); Algorithms (angles › algorithms); Solids (angles › solids) |
| `maths/statistics-8` | 6 | Samples (data › samples) |
| `maths/probability-8` | 5 | Chance (data › chance) |
| `maths/number-9` | 4 | The real numbers (real-numbers › reals9) |
| `maths/algebra-9` | 20 | Negative powers and scientific notation (real-numbers › powers9); Coordinate geometry (linear-relations › lines9); Two brackets (algebra › binomials); Quadratic relationships (linear-relations › quad9); Changing the rule (linear-relations › vary9) |
| `maths/measurement-9` | 16 | Scientific notation (measurement › sci9); Trigonometry (measurement › trig9); Surface area and volume (measurement › solids9); Measurement error (measurement › error9); Proportion and rate models (measurement › models9) |
| `maths/space-9` | 8 | Trigonometry (measurement › trig9); Enlargement (angles › enlarge9); Year 9: geometric algorithms (angles › algorithms9) |
| `maths/statistics-9` | 12 | Year 9: statistics (data › stats9) |
| `maths/probability-9` | 9 | Year 9: chance (data › chance9) |
| `maths/number-10` | 3 | Year 10: approximation (real-numbers › approx10) |
| `maths/algebra-10` | 20 | Exponentials (functions › exponentials); Year 10: models and relations (functions › models10); Year 10: powers of terms (real-numbers › powers10); Special products and factorising (algebra › products10); Year 10: solving (algebra › solve10); Year 10: two variables (linear-relations › twovars10) |
| `maths/measurement-10` | 13 | Log scales (measurement › logs10); Trigonometry in practice (measurement › trig10); Composite solids (measurement › composite10); Measurement error (measurement › error10); Scale (measurement › scale10) |
| `maths/space-10` | 8 | Networks (angles › networks); Year 10: proof (angles › proof10); Year 10: algorithms (angles › algorithms10) |
| `maths/statistics-10` | 12 | Year 10: claims in reports (data › claims10); Year 10: boxplots (data › boxplots10); Year 10: association (data › scatter10); Year 10: two-way tables and claims (data › twoway10) |
| `maths/probability-10` | 4 | Year 10: conditional chance (data › conditional10) |

Total placed: 250 of 250.

No folder name clashes inside any new course.

## Old units split across new courses

- number › fractions → `maths/number-7`, `maths/number-8`
- number › integers → `maths/number-7`, `maths/number-8`
- number › modelling → `maths/measurement-8`, `maths/number-7`, `maths/number-8`, `maths/measurement-7`
- measurement › area → `maths/measurement-7`, `maths/measurement-8`
- measurement › circles → `maths/measurement-8`, `maths/measurement-7`
- measurement › trig9 → `maths/measurement-9`, `maths/space-9`
- measurement › volume → `maths/measurement-8`, `maths/measurement-7`
- angles › solids → `maths/space-8`, `maths/space-7`
- angles › algorithms → `maths/space-7`, `maths/space-8`
- data › chance → `maths/probability-8`, `maths/probability-7`

## Flagged by the script (for the mixed-lesson review)

A flag is only a reason to look. The short list Matthew decides on is in `roadmap/maths.md`.

| Lesson | Goes to | Main node | Why flagged |
|---|---|---|---|
| `maths/angles/3d-coordinates` | `maths/space-8/3d-coordinates` | AC9M8SP03 n1 | rest of its unit (angles › solids) goes to space-7 |
| `maths/angles/congruence-algorithms` | `maths/space-8/congruence-algorithms` | AC9M8SP04 n1 | rest of its unit (angles › algorithms) goes to space-7 |
| `maths/data/many-trials` | `maths/probability-7/many-trials` | AC9M7P02 n2 | rest of its unit (data › chance) goes to probability-8 |
| `maths/data/predict-and-test` | `maths/probability-7/predict-and-test` | AC9M7P01 n3 | rest of its unit (data › chance) goes to probability-8 |
| `maths/data/sample-space` | `maths/probability-7/sample-space` | AC9M7P01 n1 | rest of its unit (data › chance) goes to probability-8 |
| `maths/measurement/circle-area` | `maths/measurement-8/circle-area` | AC9M8M03 n1 | rest of its unit (measurement › circles) goes to measurement-7 |
| `maths/measurement/circle-problems` | `maths/measurement-8/circle-problems` | AC9M8M03 n2 | rest of its unit (measurement › circles) goes to measurement-7 |
| `maths/measurement/composite-shapes` | `maths/measurement-8/composite-shapes` | AC9M8M01 n1 | rest of its unit (measurement › area) goes to measurement-7 |
| `maths/measurement/irregular-shapes` | `maths/measurement-8/irregular-shapes` | AC9M8M01 n2 | rest of its unit (measurement › area) goes to measurement-7 |
| `maths/measurement/name-the-sides` | `maths/space-9/name-the-sides` | AC9M9SP01 n1 | rest of its unit (measurement › trig9) goes to measurement-9 |
| `maths/measurement/prisms` | `maths/measurement-7/prisms` | AC9M7M02 n2 | rest of its unit (measurement › volume) goes to measurement-8 |
| `maths/measurement/same-angle-same-ratio` | `maths/space-9/same-angle-same-ratio` | AC9M9SP01 n2 | rest of its unit (measurement › trig9) goes to measurement-9 |
| `maths/measurement/sine-cosine-tangent` | `maths/space-9/sine-cosine-tangent` | AC9M9SP01 n3 | rest of its unit (measurement › trig9) goes to measurement-9 |
| `maths/measurement/volume-layers` | `maths/measurement-7/volume-layers` | AC9M7M02 n1 | rest of its unit (measurement › volume) goes to measurement-8 |
| `maths/number/modelling` | `maths/number-7/modelling` | AC9M7N09 n1 | rest of its unit (number › modelling) goes to measurement-8 |
| `maths/number/money-models` | `maths/number-8/money-models` | AC9M8N05 n2 | rest of its unit (number › modelling) goes to measurement-8 |
| `maths/number/multiplying-integers` | `maths/number-8/multiplying-integers` | AC9M8N04 n1 | rest of its unit (number › integers) goes to number-7 |
| `maths/number/percentage-change` | `maths/number-8/percentage-change` | AC9M8N05 n1 | rest of its unit (number › modelling) goes to measurement-8 |
| `maths/number/ratio-models` | `maths/measurement-7/ratio-models` | AC9M7M06 n1 | rest of its unit (number › modelling) goes to measurement-8 |
| `maths/number/rational-operations` | `maths/number-8/rational-operations` | AC9M8N04 n2 | rest of its unit (number › fractions) goes to number-7 |

## Every lesson

| Old | New course | Unit | Main node | Other tags |
|---|---|---|---|---|
| `maths/algebra/backtracking` | `maths/algebra-7` | equations | AC9M7A03 n2 |  |
| `maths/algebra/balance-method` | `maths/algebra-7` | equations | AC9M7A03 n3 |  |
| `maths/algebra/binomial-pattern` | `maths/algebra-9` | binomials | AC9M9A02 n2 |  |
| `maths/algebra/brackets` | `maths/algebra-7` | expressions | AC9M7A02 n2 |  |
| `maths/algebra/completing-the-square` | `maths/algebra-10` | solve10 | AC9M10A01 n4 |  |
| `maths/algebra/equation-balance` | `maths/algebra-7` | equations | AC9M7A03 n1 |  |
| `maths/algebra/expand-or-factorise` | `maths/algebra-9` | binomials | AC9M9A02 n4 |  |
| `maths/algebra/expanding` | `maths/algebra-8` | brackets | AC9M8A01 n1 |  |
| `maths/algebra/expanding-binomials` | `maths/algebra-9` | binomials | AC9M9A02 n1 |  |
| `maths/algebra/factorising` | `maths/algebra-8` | brackets | AC9M8A01 n2 |  |
| `maths/algebra/factorising-quadratics` | `maths/algebra-9` | binomials | AC9M9A02 n3 |  |
| `maths/algebra/finding-unknowns` | `maths/algebra-7` | expressions | AC9M7A01 n3 |  |
| `maths/algebra/general-rules` | `maths/algebra-7` | expressions | AC9M7A02 n3 |  |
| `maths/algebra/inequalities` | `maths/algebra-8` | solving | AC9M8A02 n3 |  |
| `maths/algebra/non-monic-factorising` | `maths/algebra-10` | products10 | AC9M10A01 n4 |  |
| `maths/algebra/rearranging` | `maths/algebra-8` | brackets | AC9M8A01 n3 |  |
| `maths/algebra/solve-by-reshaping` | `maths/algebra-10` | solve10 | AC9M10A01 n5 |  |
| `maths/algebra/solving-equations` | `maths/algebra-8` | solving | AC9M8A02 n2 |  |
| `maths/algebra/solving-inequalities` | `maths/algebra-10` | solve10 | AC9M10A02 n1 |  |
| `maths/algebra/special-products` | `maths/algebra-10` | products10 | AC9M10A01 n3 |  |
| `maths/algebra/substituting` | `maths/algebra-7` | expressions | AC9M7A01 n2 |  |
| `maths/algebra/variables` | `maths/algebra-7` | expressions | AC9M7A01 n1 |  |
| `maths/algebra/words-to-expressions` | `maths/algebra-7` | expressions | AC9M7A02 n1 |  |
| `maths/angles/3d-coordinates` | `maths/space-8` | solids | AC9M8SP03 n1 | AC9M8SP03 n2 |
| `maths/angles/angle-reasoning` | `maths/measurement-7` | parallel | AC9M7M04 n3 |  |
| `maths/angles/classifying-algorithms` | `maths/space-7` | algorithms | AC9M7SP04 n1 | AC9M7SP04 n2 |
| `maths/angles/classifying-triangles` | `maths/space-7` | shapes | AC9M7SP02 n1 |  |
| `maths/angles/congruence-algorithms` | `maths/space-8` | algorithms | AC9M8SP04 n1 | AC9M8SP04 n2 |
| `maths/angles/congruent-triangles` | `maths/space-8` | congruence | AC9M8SP01 n1 |  |
| `maths/angles/enlargement-keeps` | `maths/space-9` | enlarge9 | AC9M9SP02 n1 |  |
| `maths/angles/eulers-rule` | `maths/space-10` | networks | AC9M10SP02 n3 |  |
| `maths/angles/every-street-once` | `maths/space-10` | networks | AC9M10SP02 n2 |  |
| `maths/angles/nets` | `maths/space-7` | solids | AC9M7SP01 n1 |  |
| `maths/angles/nodes-and-edges` | `maths/space-10` | networks | AC9M10SP02 n1 |  |
| `maths/angles/parallel-angles` | `maths/measurement-7` | parallel | AC9M7M04 n2 |  |
| `maths/angles/parallel-lines` | `maths/measurement-7` | parallel | AC9M7M04 n1 |  |
| `maths/angles/pin-the-problem-down` | `maths/space-10` | algorithms10 | AC9M10SP03 n1 |  |
| `maths/angles/polygon-angles` | `maths/measurement-7` | angle-sums | AC9M7M05 n2 |  |
| `maths/angles/polygons` | `maths/space-7` | shapes | AC9M7SP02 n3 |  |
| `maths/angles/quadrilateral-problems` | `maths/space-8` | congruence | AC9M8SP02 n2 |  |
| `maths/angles/quadrilateral-proofs` | `maths/space-8` | congruence | AC9M8SP02 n1 |  |
| `maths/angles/quadrilaterals` | `maths/space-7` | shapes | AC9M7SP02 n2 |  |
| `maths/angles/refine-an-algorithm` | `maths/space-9` | algorithms9 | AC9M9SP03 n3 |  |
| `maths/angles/reflections` | `maths/space-7` | transform | AC9M7SP03 n2 |  |
| `maths/angles/rotations` | `maths/space-7` | transform | AC9M7SP03 n3 |  |
| `maths/angles/scale-factors-area-volume` | `maths/space-9` | enlarge9 | AC9M9SP02 n2 |  |
| `maths/angles/similar-shapes` | `maths/space-8` | congruence | AC9M8SP01 n2 | AC9M8SP01 n3 |
| `maths/angles/some-or-every-case` | `maths/space-10` | proof10 | AC9M10SP01 n1 |  |
| `maths/angles/test-with-awkward-cases` | `maths/space-9` | algorithms9 | AC9M9SP03 n2 |  |
| `maths/angles/translations` | `maths/space-7` | transform | AC9M7SP03 n1 |  |
| `maths/angles/triangle-angles` | `maths/measurement-7` | angle-sums | AC9M7M05 n1 |  |
| `maths/angles/triangle-test-algorithm` | `maths/space-9` | algorithms9 | AC9M9SP03 n1 |  |
| `maths/angles/unknown-angles` | `maths/measurement-7` | angle-sums | AC9M7M05 n3 |  |
| `maths/angles/using-theorems` | `maths/space-10` | proof10 | AC9M10SP01 n3 |  |
| `maths/angles/views` | `maths/space-7` | solids | AC9M7SP01 n2 | AC9M7SP01 n3 |
| `maths/angles/write-the-algorithm` | `maths/space-10` | algorithms10 | AC9M10SP03 n2 |  |
| `maths/angles/writing-a-proof` | `maths/space-10` | proof10 | AC9M10SP01 n2 |  |
| `maths/data/a-careful-claim` | `maths/statistics-10` | twoway10 | AC9M10ST04 n3 |  |
| `maths/data/a-good-question` | `maths/statistics-10` | twoway10 | AC9M10ST05 n1 |  |
| `maths/data/and-inclusive-or-exclusive-or` | `maths/probability-9` | chance9 | AC9M9P02 n2 |  |
| `maths/data/and-or-not` | `maths/probability-8` | chance | AC9M8P02 n2 |  |
| `maths/data/bias` | `maths/statistics-8` | samples | AC9M8ST01 n2 |  |
| `maths/data/boxplots` | `maths/statistics-10` | boxplots10 | AC9M10ST02 n2 |  |
| `maths/data/centre-spread-shape-outliers` | `maths/statistics-9` | stats9 | AC9M9ST03 n3 |  |
| `maths/data/collect-and-analyse` | `maths/statistics-9` | stats9 | AC9M9ST05 n2 |  |
| `maths/data/collecting-data` | `maths/statistics-8` | samples | AC9M8ST01 n1 |  |
| `maths/data/compare-on-the-same-scale` | `maths/statistics-9` | stats9 | AC9M9ST03 n2 |  |
| `maths/data/comparing-data` | `maths/statistics-7` | statistics | AC9M7ST02 n2 | AC9M7ST02 n3 |
| `maths/data/comparing-with-boxplots` | `maths/statistics-10` | boxplots10 | AC9M10ST02 n3 |  |
| `maths/data/complementary-events` | `maths/probability-8` | chance | AC9M8P01 n1 | AC9M8P01 n2 |
| `maths/data/compound-outcomes` | `maths/probability-9` | chance9 | AC9M9P01 n1 |  |
| `maths/data/describe-and-evaluate-results` | `maths/probability-9` | chance9 | AC9M9P03 n3 |  |
| `maths/data/describe-shape` | `maths/statistics-9` | stats9 | AC9M9ST03 n1 |  |
| `maths/data/describing-association` | `maths/statistics-10` | scatter10 | AC9M10ST03 n2 |  |
| `maths/data/design-a-simulation` | `maths/probability-9` | chance9 | AC9M9P03 n1 |  |
| `maths/data/displays-that-persuade` | `maths/statistics-9` | stats9 | AC9M9ST02 n2 |  |
| `maths/data/estimating-compound-from-data` | `maths/probability-9` | chance9 | AC9M9P02 n3 |  |
| `maths/data/ethics-check` | `maths/statistics-10` | claims10 | AC9M10ST01 n3 |  |
| `maths/data/five-numbers` | `maths/statistics-10` | boxplots10 | AC9M10ST02 n1 |  |
| `maths/data/given` | `maths/probability-10` | conditional10 | AC9M10P01 n1 |  |
| `maths/data/grids-and-trees` | `maths/probability-8` | chance | AC9M8P02 n1 |  |
| `maths/data/how-was-the-data-obtained` | `maths/statistics-9` | stats9 | AC9M9ST01 n1 |  |
| `maths/data/independent-or-not` | `maths/probability-10` | conditional10 | AC9M10P01 n3 |  |
| `maths/data/investigations` | `maths/statistics-7` | statistics | AC9M7ST03 n1 | AC9M7ST03 n2 |
| `maths/data/justify-a-display` | `maths/statistics-9` | stats9 | AC9M9ST04 n2 |  |
| `maths/data/kinds-of-data` | `maths/statistics-7` | statistics | AC9M7ST01 n1 |  |
| `maths/data/linked-not-the-cause` | `maths/statistics-10` | scatter10 | AC9M10ST03 n3 |  |
| `maths/data/many-trials` | `maths/probability-7` | chance | AC9M7P02 n2 |  |
| `maths/data/match-display-to-data` | `maths/statistics-9` | stats9 | AC9M9ST04 n1 |  |
| `maths/data/mean-or-median-claims` | `maths/statistics-9` | stats9 | AC9M9ST01 n2 |  |
| `maths/data/measures-of-centre` | `maths/statistics-7` | statistics | AC9M7ST01 n2 |  |
| `maths/data/misleading-graphs` | `maths/statistics-10` | claims10 | AC9M10ST01 n1 |  |
| `maths/data/plan-an-investigation` | `maths/statistics-9` | stats9 | AC9M9ST05 n1 |  |
| `maths/data/predict-and-test` | `maths/probability-7` | chance | AC9M7P01 n3 | AC9M7P02 n1 |
| `maths/data/probabilities-add-to-one` | `maths/probability-9` | chance9 | AC9M9P01 n3 |  |
| `maths/data/relative-frequency-estimates` | `maths/probability-9` | chance9 | AC9M9P02 n1 |  |
| `maths/data/report-the-findings` | `maths/statistics-9` | stats9 | AC9M9ST05 n3 |  |
| `maths/data/row-or-column-percentages` | `maths/statistics-10` | twoway10 | AC9M10ST04 n1 | AC9M10ST04 n2 |
| `maths/data/run-the-simulation` | `maths/probability-9` | chance9 | AC9M9P03 n2 |  |
| `maths/data/sample-distributions` | `maths/statistics-8` | samples | AC9M8ST02 n2 |  |
| `maths/data/sample-investigations` | `maths/statistics-8` | samples | AC9M8ST04 n1 | AC9M8ST04 n2 |
| `maths/data/sample-space` | `maths/probability-7` | chance | AC9M7P01 n1 | AC9M7P01 n2 |
| `maths/data/sampling-methods` | `maths/statistics-8` | samples | AC9M8ST02 n1 |  |
| `maths/data/sampling-variation` | `maths/statistics-8` | samples | AC9M8ST03 n1 | AC9M8ST03 n2 |
| `maths/data/scatterplots` | `maths/statistics-10` | scatter10 | AC9M10ST03 n1 |  |
| `maths/data/simulate-it` | `maths/probability-10` | conditional10 | AC9M10P02 n1 | AC9M10P02 n2 |
| `maths/data/simulations` | `maths/probability-8` | chance | AC9M8P03 n1 | AC9M8P03 n2 |
| `maths/data/stem-and-leaf` | `maths/statistics-7` | statistics | AC9M7ST02 n1 |  |
| `maths/data/tables-venns-trees` | `maths/probability-10` | conditional10 | AC9M10P01 n2 |  |
| `maths/data/two-methods-two-answers` | `maths/statistics-9` | stats9 | AC9M9ST02 n1 |  |
| `maths/data/two-way-tables` | `maths/probability-8` | chance | AC9M8P02 n1 |  |
| `maths/data/which-measure` | `maths/statistics-7` | statistics | AC9M7ST01 n3 |  |
| `maths/data/who-did-they-ask` | `maths/statistics-10` | claims10 | AC9M10ST01 n2 |  |
| `maths/data/with-and-without-replacement` | `maths/probability-9` | chance9 | AC9M9P01 n2 |  |
| `maths/functions/circles-as-relations` | `maths/algebra-10` | models10 | AC9M10A05 n3 |  |
| `maths/functions/exponential-graphs` | `maths/algebra-10` | exponentials | AC9M10A03 n2 |  |
| `maths/functions/graph-to-equation` | `maths/algebra-10` | exponentials | AC9M10A03 n3 |  |
| `maths/functions/judging-the-model` | `maths/algebra-10` | models10 | AC9M10A04 n3 |  |
| `maths/functions/make-a-conjecture` | `maths/algebra-10` | models10 | AC9M10A05 n1 |  |
| `maths/functions/same-base` | `maths/algebra-10` | exponentials | AC9M10A03 n4 |  |
| `maths/functions/same-ratio` | `maths/algebra-10` | exponentials | AC9M10A03 n1 |  |
| `maths/functions/where-they-meet` | `maths/algebra-10` | models10 | AC9M10A05 n2 |  |
| `maths/functions/which-model` | `maths/algebra-10` | models10 | AC9M10A04 n1 |  |
| `maths/functions/writing-the-model` | `maths/algebra-10` | models10 | AC9M10A04 n2 |  |
| `maths/linear-relations/budget-regions` | `maths/algebra-10` | twovars10 | AC9M10A02 n2 |  |
| `maths/linear-relations/comparing-plans` | `maths/algebra-8` | using | AC9M8A03 n2 |  |
| `maths/linear-relations/coordinate-problem` | `maths/algebra-9` | lines9 | AC9M9A03 n5 |  |
| `maths/linear-relations/describing-relationships` | `maths/algebra-7` | rules | AC9M7A04 n2 |  |
| `maths/linear-relations/distance-two-points` | `maths/algebra-9` | lines9 | AC9M9A03 n3 |  |
| `maths/linear-relations/gradient` | `maths/algebra-8` | lines | AC9M8A04 n1 |  |
| `maths/linear-relations/gradient-two-points` | `maths/algebra-9` | lines9 | AC9M9A03 n1 |  |
| `maths/linear-relations/graph-quadratic` | `maths/algebra-9` | quad9 | AC9M9A04 n2 |  |
| `maths/linear-relations/growing-patterns` | `maths/algebra-7` | rules | AC9M7A05 n1 |  |
| `maths/linear-relations/intercept` | `maths/algebra-8` | lines | AC9M8A04 n2 |  |
| `maths/linear-relations/linear-or-quadratic` | `maths/algebra-9` | quad9 | AC9M9A05 n1 |  |
| `maths/linear-relations/lines-and-regions` | `maths/algebra-8` | lines | AC9M8A02 n1 |  |
| `maths/linear-relations/midpoint` | `maths/algebra-9` | lines9 | AC9M9A03 n4 |  |
| `maths/linear-relations/parallel-perpendicular` | `maths/algebra-9` | lines9 | AC9M9A03 n2 |  |
| `maths/linear-relations/plotting-a-rule` | `maths/algebra-7` | rules | AC9M7A05 n3 |  |
| `maths/linear-relations/quadratic-three-ways` | `maths/algebra-9` | quad9 | AC9M9A04 n4 |  |
| `maths/linear-relations/reading-graphs` | `maths/algebra-7` | rules | AC9M7A04 n1 |  |
| `maths/linear-relations/recognise-quadratic` | `maths/algebra-9` | quad9 | AC9M9A04 n1 |  |
| `maths/linear-relations/rules-from-situations` | `maths/algebra-8` | using | AC9M8A03 n1 |  |
| `maths/linear-relations/setting-up-equations` | `maths/algebra-10` | twovars10 | AC9M10A02 n4 |  |
| `maths/linear-relations/solve-by-elimination` | `maths/algebra-10` | twovars10 | AC9M10A02 n3 |  |
| `maths/linear-relations/solve-by-factorising` | `maths/algebra-9` | quad9 | AC9M9A04 n3 |  |
| `maths/linear-relations/solve-by-substitution` | `maths/algebra-10` | twovars10 | AC9M10A02 n3 |  |
| `maths/linear-relations/solve-graphs` | `maths/algebra-8` | using | AC9M8A02 n2 |  |
| `maths/linear-relations/solve-the-model` | `maths/algebra-9` | quad9 | AC9M9A05 n2 | AC9M9A05 n3 |
| `maths/linear-relations/tables-from-rules` | `maths/algebra-7` | rules | AC9M7A05 n2 |  |
| `maths/linear-relations/vary-curve` | `maths/algebra-9` | vary9 | AC9M9A06 n2 |  |
| `maths/linear-relations/vary-formulas` | `maths/algebra-7` | rules | AC9M7A06 n1 | AC9M7A06 n2 |
| `maths/linear-relations/vary-line` | `maths/algebra-9` | vary9 | AC9M9A06 n1 |  |
| `maths/measurement/absolute-relative-error` | `maths/measurement-9` | error9 | AC9M9M04 n2 |  |
| `maths/measurement/area-problems` | `maths/measurement-7` | area | AC9M7M01 n2 |  |
| `maths/measurement/area-volume-problems` | `maths/measurement-9` | solids9 | AC9M9M01 n3 |  |
| `maths/measurement/bearings` | `maths/measurement-10` | trig10 | AC9M10M03 n2 |  |
| `maths/measurement/break-it-into-solids` | `maths/measurement-10` | composite10 | AC9M10M01 n1 |  |
| `maths/measurement/calculating-scientific` | `maths/measurement-9` | sci9 | AC9M9M02 n2 |  |
| `maths/measurement/circle-area` | `maths/measurement-8` | circles | AC9M8M03 n1 |  |
| `maths/measurement/circle-problems` | `maths/measurement-8` | circles | AC9M8M03 n2 |  |
| `maths/measurement/circumference` | `maths/measurement-7` | circles | AC9M7M03 n3 |  |
| `maths/measurement/composite-shapes` | `maths/measurement-8` | area | AC9M8M01 n1 |  |
| `maths/measurement/discovering-pi` | `maths/measurement-7` | circles | AC9M7M03 n2 |  |
| `maths/measurement/errors-that-build-up` | `maths/measurement-10` | error10 | AC9M10M04 n3 |  |
| `maths/measurement/every-measurement-estimate` | `maths/measurement-9` | error9 | AC9M9M04 n1 |  |
| `maths/measurement/find-a-side-trig` | `maths/measurement-9` | trig9 | AC9M9M03 n1 |  |
| `maths/measurement/find-an-angle` | `maths/measurement-9` | trig9 | AC9M9M03 n2 |  |
| `maths/measurement/finding-a-side` | `maths/measurement-8` | pythagoras | AC9M8M06 n2 |  |
| `maths/measurement/how-big-is-a-step` | `maths/measurement-10` | logs10 | AC9M10M02 n1 |  |
| `maths/measurement/irregular-shapes` | `maths/measurement-8` | area | AC9M8M01 n2 |  |
| `maths/measurement/judge-the-model` | `maths/measurement-9` | models9 | AC9M9M05 n3 |  |
| `maths/measurement/looking-up-looking-down` | `maths/measurement-10` | trig10 | AC9M10M03 n1 |  |
| `maths/measurement/name-the-sides` | `maths/space-9` | trig9 | AC9M9SP01 n1 |  |
| `maths/measurement/one-error-one-result` | `maths/measurement-10` | error10 | AC9M10M04 n2 |  |
| `maths/measurement/parallelograms` | `maths/measurement-7` | area | AC9M7M01 n1 |  |
| `maths/measurement/parts-of-a-circle` | `maths/measurement-7` | circles | AC9M7M03 n1 |  |
| `maths/measurement/percentage-error` | `maths/measurement-9` | error9 | AC9M9M04 n3 |  |
| `maths/measurement/prism-problems` | `maths/measurement-8` | volume | AC9M8M02 n2 |  |
| `maths/measurement/prisms` | `maths/measurement-7` | volume | AC9M7M02 n2 |  |
| `maths/measurement/proportion-rate-model` | `maths/measurement-9` | models9 | AC9M9M05 n1 |  |
| `maths/measurement/pythagoras` | `maths/measurement-8` | pythagoras | AC9M8M06 n1 |  |
| `maths/measurement/ramp-to-a-door` | `maths/measurement-9` | trig9 | AC9M9M03 n4 |  |
| `maths/measurement/reading-log-scales` | `maths/measurement-10` | logs10 | AC9M10M02 n2 | AC9M10M02 n3 |
| `maths/measurement/real-measurements` | `maths/measurement-9` | sci9 | AC9M9M02 n3 |  |
| `maths/measurement/right-or-not` | `maths/measurement-8` | pythagoras | AC9M8M06 n3 |  |
| `maths/measurement/same-angle-same-ratio` | `maths/space-9` | trig9 | AC9M9SP01 n2 |  |
| `maths/measurement/scale-factors` | `maths/measurement-10` | scale10 | AC9M10M05 n1 |  |
| `maths/measurement/scientific-notation` | `maths/measurement-9` | sci9 | AC9M9M02 n1 |  |
| `maths/measurement/similar-triangles-scale` | `maths/measurement-9` | trig9 | AC9M9M03 n3 |  |
| `maths/measurement/sine-cosine-tangent` | `maths/space-9` | trig9 | AC9M9SP01 n3 |  |
| `maths/measurement/solve-the-rate-model` | `maths/measurement-9` | models9 | AC9M9M05 n2 |  |
| `maths/measurement/surface-area-composite` | `maths/measurement-10` | composite10 | AC9M10M01 n2 |  |
| `maths/measurement/surface-area-from-nets` | `maths/measurement-9` | solids9 | AC9M9M01 n1 |  |
| `maths/measurement/time-zones` | `maths/measurement-8` | time | AC9M8M04 n1 | AC9M8M04 n2 |
| `maths/measurement/triangle-inside` | `maths/measurement-10` | trig10 | AC9M10M03 n3 |  |
| `maths/measurement/triangles` | `maths/measurement-7` | area | AC9M7M01 n1 |  |
| `maths/measurement/using-a-plan` | `maths/measurement-10` | scale10 | AC9M10M05 n2 |  |
| `maths/measurement/volume-and-capacity` | `maths/measurement-8` | volume | AC9M8M02 n1 |  |
| `maths/measurement/volume-composite` | `maths/measurement-10` | composite10 | AC9M10M01 n3 | AC9M10M01 n4 |
| `maths/measurement/volume-layers` | `maths/measurement-7` | volume | AC9M7M02 n1 |  |
| `maths/measurement/volume-prisms-cylinders` | `maths/measurement-9` | solids9 | AC9M9M01 n2 |  |
| `maths/measurement/where-errors-come-from` | `maths/measurement-10` | error10 | AC9M10M04 n1 |  |
| `maths/number/adding-fractions` | `maths/number-7` | fractions | AC9M7N06 n1 |  |
| `maths/number/adding-integers` | `maths/number-7` | integers | AC9M7N07 n2 |  |
| `maths/number/between-squares` | `maths/number-7` | powers | AC9M7N01 n3 | AC9M7N01 n4 |
| `maths/number/checking-models` | `maths/measurement-8` | modelling | AC9M8M07 n2 |  |
| `maths/number/choosing-a-strategy` | `maths/number-7` | fractions | AC9M7N06 n4 |  |
| `maths/number/comparing-integers` | `maths/number-7` | integers | AC9M7N07 n1 |  |
| `maths/number/equivalent-fractions` | `maths/number-7` | fractions | AC9M7N04 n1 |  |
| `maths/number/equivalent-ratios` | `maths/number-7` | ratio | AC9M7N08 n2 |  |
| `maths/number/estimating` | `maths/number-7` | placevalue | AC9M7N05 n3 |  |
| `maths/number/expanded-notation` | `maths/number-7` | placevalue | AC9M7N03 n1 | AC9M7N03 n2 |
| `maths/number/fractions-decimals-percentages` | `maths/number-7` | fractions | AC9M7N04 n2 |  |
| `maths/number/fractions-on-the-line` | `maths/number-7` | fractions | AC9M7N04 n3 |  |
| `maths/number/hcf-lcm` | `maths/number-7` | powers | AC9M7N02 n3 |  |
| `maths/number/modelling` | `maths/number-7` | modelling | AC9M7N09 n1 | AC9M7N09 n2, AC9M7N09 n3 |
| `maths/number/money-models` | `maths/number-8` | modelling | AC9M8N05 n2 |  |
| `maths/number/multiplying-fractions` | `maths/number-7` | fractions | AC9M7N06 n2 |  |
| `maths/number/multiplying-integers` | `maths/number-8` | integers | AC9M8N04 n1 |  |
| `maths/number/percentage-change` | `maths/number-8` | modelling | AC9M8N05 n1 |  |
| `maths/number/percentages` | `maths/number-7` | fractions | AC9M7N06 n3 |  |
| `maths/number/powers` | `maths/number-7` | powers | AC9M7N02 n1 |  |
| `maths/number/prime-factors` | `maths/number-7` | powers | AC9M7N02 n2 |  |
| `maths/number/rate-models` | `maths/measurement-8` | modelling | AC9M8M07 n1 |  |
| `maths/number/rates` | `maths/measurement-8` | rates | AC9M8M05 n1 |  |
| `maths/number/ratio-models` | `maths/measurement-7` | modelling | AC9M7M06 n1 | AC9M7M06 n2 |
| `maths/number/rational-operations` | `maths/number-8` | fractions | AC9M8N04 n2 |  |
| `maths/number/ratios` | `maths/number-7` | ratio | AC9M7N08 n1 |  |
| `maths/number/rounding` | `maths/number-7` | placevalue | AC9M7N05 n1 | AC9M7N05 n2 |
| `maths/number/sharing-in-a-ratio` | `maths/number-7` | ratio | AC9M7N08 n3 |  |
| `maths/number/squares-and-roots` | `maths/number-7` | powers | AC9M7N01 n1 | AC9M7N01 n2 |
| `maths/number/using-rates` | `maths/measurement-8` | rates | AC9M8M05 n2 |  |
| `maths/real-numbers/all-index-laws` | `maths/algebra-9` | powers9 | AC9M9A01 n2 |  |
| `maths/real-numbers/chop-or-round` | `maths/number-10` | approx10 | AC9M10N01 n2 |  |
| `maths/real-numbers/exact-or-approximate` | `maths/number-10` | approx10 | AC9M10N01 n1 |  |
| `maths/real-numbers/exact-or-rounded` | `maths/number-9` | reals9 | AC9M9N01 n2 |  |
| `maths/real-numbers/formulas-with-pi` | `maths/number-9` | reals9 | AC9M9N01 n4 |  |
| `maths/real-numbers/index-laws` | `maths/number-8` | indices | AC9M8N02 n1 |  |
| `maths/real-numbers/index-laws-letters` | `maths/algebra-9` | powers9 | AC9M9A01 n3 |  |
| `maths/real-numbers/irrational-numbers` | `maths/number-8` | irrational | AC9M8N01 n1 |  |
| `maths/real-numbers/irrationals-on-the-line` | `maths/number-8` | irrational | AC9M8N01 n2 |  |
| `maths/real-numbers/negative-powers` | `maths/algebra-9` | powers9 | AC9M9A01 n1 |  |
| `maths/real-numbers/number-families` | `maths/number-9` | reals9 | AC9M9N01 n1 |  |
| `maths/real-numbers/number-line-ranges` | `maths/number-9` | reals9 | AC9M9N01 n3 |  |
| `maths/real-numbers/powers-of-terms` | `maths/algebra-10` | powers10 | AC9M10A01 n1 | AC9M10A01 n2 |
| `maths/real-numbers/recurring-decimals` | `maths/number-8` | decimals | AC9M8N03 n1 |  |
| `maths/real-numbers/rounding-over-and-over` | `maths/number-10` | approx10 | AC9M10N01 n3 |  |
| `maths/real-numbers/using-index-laws` | `maths/number-8` | indices | AC9M8N02 n2 |  |
| `maths/real-numbers/which-decimals-stop` | `maths/number-8` | decimals | AC9M8N03 n2 |  |
