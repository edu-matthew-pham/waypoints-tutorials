# EXAMPLE (teachers): a combined app. A trained model recognises the pose;
# rules decide what to do about it, using what happened over the last few checks.
# Built on the sample pose model (my_pose_model.json: Upright vs Leaning).
#
# Who it is for: a student working at a desk for a long time.
# What it does: a single leaning photo is not worth nagging about, but
# several leaning checks in a row means it is time for a break.
#
# Pipeline:
#   photo -> MODEL (label + how sure) -> RULES (streak, cut-off, break) -> advice
#   MODEL: telling Upright from Leaning in a photo is too messy for rules.
#   RULES: counting checks in a row and choosing when to speak is exact.

import os
import gradio as gr
from pattern_model import PatternModel

MODEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "my_pose_model.json")
model = PatternModel.load(MODEL_FILE)

CUTOFF = 0.90          # under this, the model's answer is not used
DEFAULT_LIMIT = 3      # leaning checks in a row before we suggest a break

ADVICE = {
    "Upright": "Nice. Keep your feet flat and your screen at eye level.",
    "Leaning": "Sit back, drop your shoulders, and bring the screen up to eye level.",
}


def next_streak(streak, label, score):
    """RULES: leaning checks in a row. An unsure or empty check changes nothing."""
    if label is None or score < CUTOFF:
        return streak
    if label == "Leaning":
        return streak + 1
    return 0


def reply(streak, label, score, limit):
    """RULES: what to say, from the model's answer and the streak."""
    if label is None:
        return "I can't see you", "Step back so your head and shoulders are in view."
    if score < CUTOFF:
        return "Not sure", f"My best guess is {label} ({score:.0%}), so I am not counting that one."
    if streak >= limit:
        return "Leaning for a while", f"That is {streak} checks in a row. Stand up and stretch for a minute."
    return label, ADVICE[label]


def check(image, streak, limit):
    if image is None:
        return "Take a photo first.", "", streak
    label, score = model.top(image)           # the MODEL part
    streak = next_streak(streak, label, score)  # the RULES part
    headline, advice = reply(streak, label, score, int(limit))
    return headline, advice, streak


# The rules tested on their own, with made-up answers and no camera.
# Each reading is (label, score). The streak should end where I expect.
def run(readings, limit=DEFAULT_LIMIT):
    streak, said = 0, None
    for label, score in readings:
        streak = next_streak(streak, label, score)
        said = reply(streak, label, score, limit)[0]
    return streak, said

assert run([("Leaning", 0.97)] * 3) == (3, "Leaning for a while")
assert run([("Leaning", 0.97)] * 2 + [("Upright", 0.97)]) == (0, "Upright")  # upright resets it
assert run([("Leaning", 0.97)] * 2 + [("Leaning", 0.70)]) == (2, "Not sure")  # unsure changes nothing
assert run([("Leaning", 0.97)] * 2 + [(None, 0.0)]) == (2, "I can't see you")
assert run([("Leaning", 0.97)] * 2, limit=2) == (2, "Leaning for a while")     # the user's setting

gr.Interface(
    fn=check,
    inputs=[
        gr.Image(type="pil", sources=["webcam", "upload"], label="Sit how you normally sit:",
                 image_mode="RGBA", webcam_options=gr.WebcamOptions(mirror=False)),
        gr.State(0),
        gr.Slider(2, 6, value=DEFAULT_LIMIT, step=1, label="Leaning checks in a row before a break:"),
    ],
    outputs=[gr.Textbox(label="Your posture"), gr.Textbox(label="What to do"), gr.State()],
    title="Posture break reminder",
    description="Check in every few minutes. One leaning photo is fine; several in a row means a break.",
    flagging_mode="never",
).launch(show_error=True)
