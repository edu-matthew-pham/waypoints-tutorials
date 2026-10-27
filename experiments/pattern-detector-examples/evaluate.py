import json, os, sys, collections
from pattern_model import PatternModel
from PIL import Image
model = PatternModel.load(sys.argv[1]); root = sys.argv[2]
rows = collections.defaultdict(lambda: [0, 0]); conf = collections.defaultdict(collections.Counter); probs = collections.defaultdict(list)
for cls in sorted(os.listdir(root)):
    for f in sorted(os.listdir(f"{root}/{cls}")):
        path = f"{root}/{cls}/{f}"
        x = path if model.input_type == "audio" else Image.open(path)
        label, p = model.top(x)
        rows[cls][1] += 1; conf[cls][label] += 1; probs[cls].append(p)
        if label.lower().replace(" noise", "") == cls.replace("-", " "): rows[cls][0] += 1
for cls in rows:
    c, n = rows[cls]; ps = sorted(probs[cls])
    print(f"{cls:12s} {c:3d}/{n}  answers {dict(conf[cls])}  median conf {ps[len(ps)//2]:.2f}")
