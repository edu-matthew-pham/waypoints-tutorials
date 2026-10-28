# ------------------------------------------------------------------
# DRAFT for pattern-detector-starters (a PR Matthew merges; not in that repo yet).
# FIND, THEN JUDGE: a ready-made model finds things in a photo, and
# YOUR Pattern Trainer model judges each one it finds.
#
# Needs, in this folder:
#   efficientdet_lite0.tflite  Google's ready-made object detector (Apache 2.0, about 7 MB).
#                              It knows 80 everyday things: see labelmap.txt (banana, apple,
#                              orange, cup, bottle, dog, cat, book...). It can't learn new ones.
#   my_model.json              YOUR model, trained in the Pattern Trainer on close-up photos of
#                              ONE thing each (one banana, one cup), like the cut-outs it will see.
#
# Where it can go wrong (test for these!):
#   - the detector misses something, so your model never sees it
#   - the detector is wrong about what it is, and your model judges it anyway
#   - a cut-out from a busy photo looks nothing like your training photos
# ------------------------------------------------------------------

import os
import gradio as gr
import mediapipe as mp
import numpy as np
from mediapipe.tasks import python as mp_tasks
from mediapipe.tasks.python import vision
from PIL import ImageDraw, ImageOps
from pattern_model import PatternModel

HERE = os.path.dirname(os.path.abspath(__file__))
model = PatternModel.load(os.path.join(HERE, "my_model.json"))
print("Classes in your model:", model.classes)

# ADAPT: which of the detector's 80 things to look for (exactly as in labelmap.txt)
LOOK_FOR = ["banana"]
# ADAPT: how sure the detector must be that it found one, and how sure YOUR model must be
FIND_CUTOFF = 0.30
JUDGE_CUTOFF = 0.60

detector = vision.ObjectDetector.create_from_options(vision.ObjectDetectorOptions(
    base_options=mp_tasks.BaseOptions(model_asset_path=os.path.join(HERE, "efficientdet_lite0.tflite")),
    category_allowlist=LOOK_FOR, score_threshold=0.2, max_results=10))


def find(photo):
    """The ready-made model: a box (left, top, right, bottom) and a score for each thing it finds."""
    result = detector.detect(mp.Image(image_format=mp.ImageFormat.SRGB, data=np.asarray(photo)))
    return [((d.bounding_box.origin_x, d.bounding_box.origin_y,
              d.bounding_box.origin_x + d.bounding_box.width, d.bounding_box.origin_y + d.bounding_box.height),
             d.categories[0].score) for d in result.detections]


def cut_out(box, photo):
    """A square around the box, so the whole thing is in the picture your model sees."""
    left, top, right, bottom = box
    side = max(right - left, bottom - top) * 1.1
    cx, cy = (left + right) / 2, (top + bottom) / 2
    return photo.crop((int(cx - side / 2), int(cy - side / 2), int(cx + side / 2), int(cy + side / 2)))


def check(photo):
    if photo is None:
        return None, "Upload or take a photo first."
    photo = ImageOps.exif_transpose(photo).convert("RGB")
    marked = photo.copy()
    draw = ImageDraw.Draw(marked)
    lines = []
    for box, found in find(photo):
        if found < FIND_CUTOFF:
            continue
        label, sure = model.top(cut_out(box, photo))     # YOUR model, on the cut-out
        # ADAPT: what to say for each class, and when not sure
        said = label if sure >= JUDGE_CUTOFF else "not sure"
        lines.append(f"{said} ({sure:.0%})")
        draw.rectangle(box, outline="red", width=4)
        draw.text((box[0] + 4, box[1] + 2), said, fill="red")
    if not lines:
        return marked, "I couldn't find any. Try a closer photo."
    return marked, f"I found {len(lines)}: " + ", ".join(lines)


gr.Interface(
    fn=check,
    inputs=gr.Image(type="pil", sources=["upload", "webcam"], label="A photo:",
                    webcam_options=gr.WebcamOptions(mirror=False)),
    outputs=[gr.Image(label="What I found"), gr.Textbox(label="What I think")],
).launch(show_error=True)
