# EXAMPLE (teachers): a posture reminder built on the sample pose model
# (my_pose_model.json: Upright vs Leaning). Yours will look different.
#
# Who it is for: a student working at a desk.
# What it does: looks at a webcam photo, says if they are sitting upright
# or leaning, and only nags when it is sure enough to be worth it.
#
# Plan (written before training):
#   User:     a student at a desk.
#   Job:      remind them when they lean towards the screen.
#   Classes:  Upright, Leaning   (nobody in the picture is handled in the app)
#
# Cut-off, chosen from the testing record (see the teacher notes): the
# correct photos scored 0.93 or more and the shaky ones (mirrored, tiny)
# scored 0.53 to 0.59, so anything from 0.6 to 0.9 separates them. 0.90 keeps
# a margin. Some wrong answers are still 0.99 sure, which no cut-off can catch.

import os
import gradio as gr
from pattern_model import PatternModel

MODEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "my_pose_model.json")
model = PatternModel.load(MODEL_FILE)

DEFAULT_CUTOFF = 0.90

# What to say for each class (the names come from the model file)
ADVICE = {
    "Upright": "Nice. Keep your feet flat and your screen at eye level.",
    "Leaning": "Sit back, drop your shoulders, and bring the screen up to eye level.",
}


def reply(label, score, cutoff):
    """Turn the model's answer into words for the user."""
    if label is None:
        return "I can't see you", "Step back so your head and shoulders are in view."
    if score < cutoff:
        return "Not sure", f"My best guess is {label} ({score:.0%}), but that is under your cut-off. Try again."
    return label, ADVICE[label]


def check(image, cutoff):
    if image is None:
        return "Take a photo first.", ""
    label, score = model.top(image)
    headline, advice = reply(label, score, cutoff)
    return headline, advice


# Made-up answers, to test the wording and the cut-off without a camera
TESTS = [
    (None, 0.0, "I can't see you"),
    ("Upright", 0.95, "Upright"),
    ("Leaning", 0.89, "Not sure"),     # just under the cut-off
    ("Leaning", 0.90, "Leaning"),      # exactly on it
]
for label, score, expected in TESTS:
    got = reply(label, score, DEFAULT_CUTOFF)[0]
    assert got == expected, (label, score, got)

gr.Interface(
    fn=check,
    inputs=[
        gr.Image(type="pil", sources=["webcam", "upload"], label="Sit how you normally sit:",
                 image_mode="RGBA", webcam_options=gr.WebcamOptions(mirror=False)),
        gr.Slider(0.5, 0.95, value=DEFAULT_CUTOFF, step=0.05, label="How sure should I be before I say so?"),
    ],
    outputs=[gr.Textbox(label="Your posture"), gr.Textbox(label="What to do")],
    title="Posture reminder",
    description="A photo of you at your desk, and a gentle reminder if you are leaning.",
    flagging_mode="never",
).launch(server_port=7864, show_error=True)

# Testing record (the sample model, cut-off 0.90; the full table is in the teacher notes):
# I tried                      I expected   It said    How sure
# upright, mirrored            Upright      Not sure   0.53
# upright, shrunk to 60 px     Upright      Not sure   0.59
# leaning, mirrored            Leaning      Upright    0.9997
