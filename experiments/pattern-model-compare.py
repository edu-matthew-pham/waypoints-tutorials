# Compare the browser's Pattern Trainer predictions (experiments/pattern-model-test.mjs) with the starters'
# pattern_model.py (mediapipe 1.1.1, pillow, numpy). Usage: python experiments/pattern-model-compare.py [starters folder]
import base64, io, json, os, sys
STARTERS = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("WP_STARTERS", "/home/claude/edu-matthew-pham/pattern-detector-starters")
sys.path.insert(0, STARTERS)
from PIL import Image
from pattern_model import PatternModel, _embed_image
b = json.load(open(".render-tmp/pt-out/browser.json"))
m = PatternModel.load(STARTERS + "/my_model.json")
worst = 0.0
print("Reader on the original photos (browser vs Python):")
for f, r in b["reader"].items():
    img = Image.open(f"{STARTERS}/test-files/{f}")
    py = m.predict(img)
    emb = _embed_image(img, "mobilenet_v2_embedder.tflite")[:8]
    d = max(abs(py[c] - r["probs"][c]) for c in m.classes)
    de = max(abs(a - c) for a, c in zip(emb, r["emb"]))
    worst = max(worst, d)
    print(f"  {f}: python {py}  browser {r['probs']}  max diff {d:.2e}; first 8 embedding numbers max diff {de:.2e}")
print("Widget on the own-photo board (each photo as the widget stored it, a 224 px JPEG):")
for p, w in zip(b["ownPhotos"], b["widget"]):
    img = Image.open(io.BytesIO(base64.b64decode(p["src"].split(",", 1)[1])))
    label, conf = m.top(img)
    d = abs(conf - w["p"]); worst = max(worst, d)
    print(f"  {p['label']}: python {label} {conf:.6f}  widget {w['label']} {w['p']:.6f}  diff {d:.2e}")
print(f"Worst difference: {worst:.2e}", "PASS" if worst < 1e-4 else "FAIL")
sys.exit(0 if worst < 1e-4 else 1)
