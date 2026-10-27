import os, sys
from pattern_model import PatternModel
from PIL import Image
model = PatternModel.load(sys.argv[1]); root = sys.argv[2]
for cls in sorted(os.listdir(root)):
    for f in sorted(os.listdir(f"{root}/{cls}")):
        path = f"{root}/{cls}/{f}"
        x = path if model.input_type == "audio" else Image.open(path)
        p = model.predict(x); label = max(p, key=p.get)
        print(f"{cls}\t{f}\t{label}\t{p[label]:.4f}")
