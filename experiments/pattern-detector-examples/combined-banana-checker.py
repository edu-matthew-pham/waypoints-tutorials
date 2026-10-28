# EXAMPLE (teachers): two models in a row. A ready-made model finds the bananas;
# your own model judges each one. Built from image_pattern_trainer.py.
# To run it: put pattern_model.py (from the starters), my_banana_model.json (this folder) and
# efficientdet_lite0.tflite (example-data branch, fruit/detector/) beside it, then run it like a starter.
#
#   MediaPipe's Object Detector (efficientdet_lite0.tflite, Apache 2.0) was trained by Google on
#   the COCO photos and knows 80 everyday things, banana among them. It answers: where is each banana?
#   my_banana_model.json was trained in the Pattern Trainer on 60 photos per stage from BananaID
#   (CC BY 4.0: single bananas on a plain background). It answers: how ripe is this one?
#
# Who it is for: whoever does the shopping or the lunches.
# What it does: finds every banana in a photo of the fruit bowl, says how ripe each one is, and
# what to do with them. Bananas it can't judge well enough are counted as "not sure", not guessed.
#
# Pipeline:
#   photo -> DETECTOR (boxes + how sure it is that each is a banana)
#         -> cut out each box -> MY MODEL (ripeness + how sure)
#         -> RULES (two cut-offs, count, advice) -> marked photo and a summary
#   DETECTOR: finding bananas anywhere in a messy photo needs thousands of boxed photos; Google did that.
#   MY MODEL: ripeness is the part that is ours; the detector was never taught it.
#   RULES: counting, choosing what to say, and refusing to judge a shaky one are exact.
#
# Where it fails is the point (see the teacher notes): the detector misses bananas, so my model never
# sees them; and a cut-out from a kitchen photo looks nothing like the plain-background training photos.

import os
import gradio as gr
import mediapipe as mp
import numpy as np
from mediapipe.tasks import python as mp_tasks
from mediapipe.tasks.python import vision
from PIL import Image, ImageDraw, ImageOps
from pattern_model import PatternModel

HERE = os.path.dirname(os.path.abspath(__file__))
ripeness = PatternModel.load(os.path.join(HERE, "my_banana_model.json"))
detector = vision.ObjectDetector.create_from_options(vision.ObjectDetectorOptions(
    base_options=mp_tasks.BaseOptions(model_asset_path=os.path.join(HERE, "efficientdet_lite0.tflite")),
    category_allowlist=["banana"], score_threshold=0.2, max_results=10))

FIND_CUTOFF = 0.30     # how sure the detector must be that it is a banana at all
JUDGE_CUTOFF = 0.60    # how sure my model must be about the ripeness

ADVICE = {
    "Unripe": "Not ready yet: leave it a few days.",
    "Half ripe": "Nearly ready: tomorrow or the day after.",
    "Ripe": "Ready to eat now.",
    "Overripe": "Eat today, or use it in banana bread.",
}
COLOURS = {"Unripe": "#2e7d32", "Half ripe": "#9e9d24", "Ripe": "#f9a825", "Overripe": "#6d4c41", "Not sure": "#757575"}


def find_bananas(photo):
    """DETECTOR: boxes (left, top, right, bottom) and how sure it is that each one is a banana."""
    pixels = mp.Image(image_format=mp.ImageFormat.SRGB, data=np.asarray(photo))
    found = []
    for d in detector.detect(pixels).detections:
        b = d.bounding_box
        found.append(((b.origin_x, b.origin_y, b.origin_x + b.width, b.origin_y + b.height), d.categories[0].score))
    return found


def square_around(box, photo):
    """A square cut-out around the box, so the whole banana is in it (the model looks at the centre square)."""
    left, top, right, bottom = box
    side = max(right - left, bottom - top) * 1.1
    cx, cy = (left + right) / 2, (top + bottom) / 2
    return photo.crop((int(cx - side / 2), int(cy - side / 2), int(cx + side / 2), int(cy + side / 2)))


def judge(found_score, label, sure):
    """RULES: what one banana counts as, from both models' confidences."""
    if found_score < FIND_CUTOFF:
        return None                     # probably not a banana: leave it out
    if sure < JUDGE_CUTOFF:
        return "Not sure"
    return label


def summary(stages):
    """RULES: one line per stage found, most urgent first."""
    if not stages:
        return "I couldn't find any bananas. Try a closer photo, with the bananas in view."
    lines = [f"I found {len(stages)} banana{'s' if len(stages) > 1 else ''}."]
    for stage in ("Overripe", "Ripe", "Half ripe", "Unripe", "Not sure"):
        n = stages.count(stage)
        if n:
            lines.append(f"{n} {stage.lower()}: " + (ADVICE[stage] if stage in ADVICE else "have a look yourself."))
    return "\n".join(lines)


def check(photo):
    if photo is None:
        return None, "Take or upload a photo first."
    photo = ImageOps.exif_transpose(photo).convert("RGB")
    marked, stages = photo.copy(), []
    draw = ImageDraw.Draw(marked)
    for box, found_score in find_bananas(photo):                      # model 1
        label, sure = ripeness.top(square_around(box, photo))           # model 2, on the cut-out
        stage = judge(found_score, label, sure)                         # rules
        if stage is None:
            continue
        stages.append(stage)
        draw.rectangle(box, outline=COLOURS[stage], width=max(3, photo.width // 150))
        draw.text((box[0] + 4, box[1] + 2), f"{stage} ({sure:.0%})", fill=COLOURS[stage])
    return marked, summary(stages)


# The rules tested on their own, with made-up confidences (no photo needed)
assert judge(0.25, "Ripe", 0.95) is None                   # the detector was not sure it was a banana
assert judge(0.80, "Ripe", 0.55) == "Not sure"             # my model was not sure how ripe
assert judge(0.80, "Ripe", 0.60) == "Ripe"                 # exactly on the cut-off
assert summary([]).startswith("I couldn't find")
assert summary(["Ripe", "Overripe", "Ripe"]).splitlines()[1].startswith("1 overripe")

gr.Interface(
    fn=check,
    inputs=gr.Image(type="pil", sources=["upload", "webcam"], label="A photo of your fruit bowl:",
                    webcam_options=gr.WebcamOptions(mirror=False)),
    outputs=[gr.Image(label="What I found"), gr.Textbox(label="What to do", lines=5)],
    title="Banana checker",
    description="Finds the bananas in a photo, then says how ripe each one is.",
    flagging_mode="never",
).launch(show_error=True)
