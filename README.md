# Example data for Pattern Detector briefs B and C

Made by the manual workflow `.github/workflows/fetch-example-data.yml` on `main`: a small, seeded subset
(`selection.json`) of two public datasets, downloaded from their official homes (`sha256.txt`). Not served by
the site. Used to train the brief B and C example models in the Pattern Trainer.

- `rps/`: **Rock Paper Scissors** by Laurence Moroney, CC BY 4.0
  (https://laurencemoroney.com/datasets.html; files from download.tensorflow.org/data/rps.zip and
  rps-test-set.zip). Computer-generated hands. `train/`: 60 per class from the training set. `test/`: 30 per
  class from the separate test set.
- `speech/`: **Speech Commands v0.02** by Pete Warden (Google), CC BY 4.0
  (https://arxiv.org/abs/1804.03209; file from download.tensorflow.org/data/speech_commands_v0.02.tar.gz).
  `train/`: 50 clips each of go, stop, up and down from the training speakers (one clip per speaker), and
  50 one-second slices of five background-noise recordings. `test/`: 25 clips per word from the official
  testing speakers, 25 clips of six other words (`other-words/`), and 25 slices of a sixth noise recording.
