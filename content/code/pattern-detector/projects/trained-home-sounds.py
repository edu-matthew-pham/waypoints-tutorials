# EXAMPLE (teachers): a home sound alert, built from audio_pattern_trainer.py.
# Its model (my_home_sounds_model.json) was trained in the Pattern Trainer's
# Sounds mode on clips from ESC-10 (CC BY 3.0, Karol Piczak). Yours will look different.
#
# Who it is for: someone who is hard of hearing, at home.
# What it does: listens to a short recording and says whether it heard a baby
# crying, a dog barking or a fire crackling, and what to do about it. Anything
# it is not sure about is passed on as "not sure", never dropped.
#
# Plan (written before training):
#   User:     someone hard of hearing, at home.
#   Job:      tell them about sounds they would want to know about.
#   Classes:  Baby crying, Dog barking, Fire crackling, Nothing urgent
#             (rain, waves, a clock: sounds that need no action)
#
# Cut-off, chosen from the testing record (see the teacher notes): the four
# shaky wrong answers scored 0.61 to 0.79, and all but one right answer scored
# 0.87 or more, so 0.85 catches the shaky ones for the cost of one right answer
# (0.76). Some wrong answers are still 0.95 or more sure, which no cut-off catches.

import os
import gradio as gr
from pattern_model import PatternModel

MODEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "my_home_sounds_model.json")
model = PatternModel.load(MODEL_FILE)

DEFAULT_CUTOFF = 0.85

# What to say for each class (the names come from the model file)
ADVICE = {
    "Baby crying": "The baby is crying. Go and check on them.",
    "Dog barking": "The dog is barking. Someone may be at the door.",
    "Fire crackling": "Something is crackling like a fire. Check the kitchen and the heaters now.",
    "Nothing urgent": "Nothing to worry about.",
}


def reply(label, score, cutoff):
    """Turn the model's answer into words for the user."""
    if label is None:
        return "Nothing heard", "That recording was empty. Try again."
    if score < cutoff:
        # Not sure is passed on, not dropped: a missed alert costs more than a false one.
        return "Not sure", f"I heard something, maybe {label} ({score:.0%}). Have a look to be safe."
    return label, ADVICE[label]


def listen(sound, cutoff):
    if sound is None:
        return "Record or upload a sound first.", ""
    label, score = model.top(sound)
    headline, advice = reply(label, score, cutoff)
    return headline, advice


# Made-up answers, to test the wording and the cut-off without a microphone
TESTS = [
    (None, 0.0, "Nothing heard"),
    ("Baby crying", 0.99, "Baby crying"),
    ("Dog barking", 0.84, "Not sure"),      # just under the cut-off
    ("Dog barking", 0.85, "Dog barking"),   # exactly on it
    ("Nothing urgent", 0.97, "Nothing urgent"),
]
for label, score, expected in TESTS:
    got = reply(label, score, DEFAULT_CUTOFF)[0]
    assert got == expected, (label, score, got)

gr.Interface(
    fn=listen,
    inputs=[
        gr.Audio(sources=["microphone", "upload"], type="numpy", label="Record a few seconds, or upload a sound:"),
        gr.Slider(0.5, 0.95, value=DEFAULT_CUTOFF, step=0.05, label="How sure should I be before I say what it is?"),
    ],
    outputs=[gr.Textbox(label="What I heard"), gr.Textbox(label="What to do")],
    title="Home sound alert",
    description="For someone who is hard of hearing: sounds at home you would want to know about.",
    flagging_mode="never",
).launch(show_error=True)

# Testing record (cut-off 0.85; the full table is in the teacher notes):
# I tried                      I expected       It said          How sure
# a sneeze                     Nothing urgent   Baby crying      0.61   (now "Not sure")
# a rooster                    Nothing urgent   Dog barking      0.998  (fooled, and sure)
# a chainsaw, first model      Nothing urgent   Fire crackling   1.00   (fixed by adding chainsaws)
