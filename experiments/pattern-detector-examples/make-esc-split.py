# The home-sounds example's data: ESC-10 (the CC BY 3.0 part of ESC-50, Karol Piczak), from GitHub.
#   git clone --depth 1 --filter=blob:none --sparse https://github.com/karolpiczak/ESC-50 esc50   (tested at 33c8ce9)
#   cd esc50 && git sparse-checkout set --no-cone meta /LICENSE $(awk -F, '$5=="True"{print "/audio/"$1}' meta/esc50.csv)
#   python make-esc-split.py esc50 out
# Folds 1-4 train, fold 5 test. Nothing urgent = 11 each of rain, sea waves and clock tick (seed 1). The second
# model adds 11 each of chainsaw and sneezing (seed 2) to Nothing urgent (train-v2). Chainsaw, helicopter, rooster
# and sneezing from fold 5 are the test's "Other sounds (not trained)".
import csv, os, random, shutil, sys
src, OUT = sys.argv[1], sys.argv[2]
rows = [r for r in csv.DictReader(open(f"{src}/meta/esc50.csv")) if r["esc10"] == "True"]
classes = {"crying_baby": "Baby crying", "dog": "Dog barking", "crackling_fire": "Fire crackling"}
quiet, unseen = ["rain", "sea_waves", "clock_tick"], ["chainsaw", "helicopter", "rooster", "sneezing"]
def put(split, cls, r):
    os.makedirs(f"{OUT}/{split}/{cls}", exist_ok=True)
    shutil.copy(f"{src}/audio/{r['filename']}", f"{OUT}/{split}/{cls}/{r['category']}-{r['filename']}")
for r in rows:
    split = "test" if r["fold"] == "5" else "train"
    if r["category"] in classes: put(split, classes[r["category"]], r)
    elif r["category"] in unseen and split == "test": put("test", "Other sounds (not trained)", r)
rng = random.Random(1)
for c in quiet:
    for r in rng.sample([r for r in rows if r["category"] == c and r["fold"] != "5"], 11): put("train", "Nothing urgent", r)
    for r in [r for r in rows if r["category"] == c and r["fold"] == "5"]: put("test", "Nothing urgent", r)
shutil.copytree(f"{OUT}/train", f"{OUT}/train-v2")
rng = random.Random(2)
for c in ("chainsaw", "sneezing"):
    for r in rng.sample([r for r in rows if r["category"] == c and r["fold"] != "5"], 11):
        shutil.copy(f"{src}/audio/{r['filename']}", f"{OUT}/train-v2/Nothing urgent/{c}-{r['filename']}")
