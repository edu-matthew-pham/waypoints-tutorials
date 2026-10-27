# Pattern Detector example models (briefs B and C)

How the two example apps' models were made (28 Oct 2026), so they can be checked or remade. The apps are
`content/code/pattern-detector/projects/trained-home-sounds.py` (B) and `combined-rock-paper-scissors.py` (C);
put a model file beside them and the starters' `pattern_model.py` to run one.

| File | What it is |
|---|---|
| `my_home_sounds_model.json` | B's model: Nothing urgent, Baby crying, Dog barking, Fire crackling (Sounds mode; the second, retrained model) |
| `my_rps_model.json` | C's model: Rock, Paper, Scissors (Pictures mode) |
| `train.mjs` | Trains a model in the real Pattern Trainer, headless, as a student would: name classes, Upload, Train model, Download |
| `make-esc-split.py` | B's data from ESC-10 (CC BY 3.0, Karol Piczak; github.com/karolpiczak/ESC-50) |
| `evaluate.py`, `detail.py` | Score a model on a test folder with the starters' `pattern_model.py` (mediapipe 1.1.1) |
| `harness.py` | Loads an example app without starting Gradio, to run its functions on real files |
| `results-*.tsv` | Every test file, what the model said and how sure (B: first model and retrained) |
| `speech-commands-did-not-work.json` | A model on four spoken words (Speech Commands v0.02): about chance on new speakers; see below |

**Data.** C: Rock Paper Scissors (Laurence Moroney, CC BY 4.0; computer-generated hands), 60 per class from the
training set to train, 30 per class from the separate test set to test. It and Speech Commands come from the manual
workflow **Fetch example data** (`.github/workflows/fetch-example-data.yml`), which downloads the official files
and commits a seeded subset to the `example-data` branch (this sandbox cannot reach those hosts). B: ESC-10 from
GitHub with `make-esc-split.py` (folds 1-4 train, fold 5 test).

**Training** (trainer at waypoints-tools as of 28 Oct 2026, served locally; default settings):

```
node train.mjs image my_rps_model.json Rock=<data>/rps/train/rock Paper=<data>/rps/train/paper Scissors=<data>/rps/train/scissors
node train.mjs audio my_home_sounds_model.json "Nothing urgent=<esc>/train-v2/Nothing urgent" "Baby crying=<esc>/train-v2/Baby crying" "Dog barking=<esc>/train-v2/Dog barking" "Fire crackling=<esc>/train-v2/Fire crackling"
python detail.py my_home_sounds_model.json <esc>/test > results-home-sounds.tsv
```

**Results** (held-out data; full tables in the briefs' teacher notes): rock paper scissors 80 of 90 (paper 20 of 30,
10 called Rock, some at 0.97); home sounds 45 of 48 on its own classes, with confident wrong answers on sounds it
never heard (first model: chainsaws as Fire crackling; after adding chainsaws and sneezes, roosters as Dog barking).

**Why not spoken words.** Sounds mode keeps only YAMNet's scores for 521 kinds of sound, so go, stop, up and down
all score as speech: the model scored 2 to 17 of 25 per word on new speakers (about chance overall), and the trainer's
own check said 23 of 50. Steer voice-command projects away from Sounds mode.
