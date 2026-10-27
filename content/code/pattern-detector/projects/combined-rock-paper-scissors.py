# EXAMPLE (teachers): a combined app. A trained model reads your hand;
# rules play the game. Built from image_pattern_trainer.py, with a model
# (my_rps_model.json) trained in the Pattern Trainer on 60 pictures per class
# from the Rock Paper Scissors dataset (CC BY 4.0, Laurence Moroney; the hands
# are computer-generated). Yours will look different.
#
# Who it is for: anyone who wants a quick game against the computer.
# What it does: you show a throw to the camera, the computer picks one, and the
# rules say who won the round. First to 2 wins. A throw it can't read well
# enough is not played: you show it again.
#
# Pipeline:
#   photo -> MODEL (Rock/Paper/Scissors + how sure) -> RULES (cut-off, who wins, score) -> result
#   MODEL: telling a hand shape apart in a photo is too messy for rules.
#   RULES: who beats whom, keeping score and when the game ends are exact.
#
# Cut-off, chosen from the testing record (see the teacher notes): from 0.70 to
# 0.85 it catches the same 5 of the 10 wrong answers; 0.70 asks you to show it
# again least often (12 of 80 right answers). Asking again costs little in a
# game; losing a round you won does not. 5 wrong answers were 0.85 or more sure.

import os
import random
import gradio as gr
from pattern_model import PatternModel

MODEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "my_rps_model.json")
model = PatternModel.load(MODEL_FILE)

CUTOFF = 0.70          # under this, the throw is not played
DEFAULT_TARGET = 2     # rounds to win the game

BEATS = {"Rock": "Scissors", "Paper": "Rock", "Scissors": "Paper"}   # each beats the one it names
NEW_GAME = {"you": 0, "computer": 0}


def round_winner(you, computer):
    """RULES: who wins one round."""
    if you == computer:
        return "draw"
    if BEATS[you] == computer:
        return "you"
    return "computer"


def play(score, label, confidence, computer, target):
    """RULES: one throw. Returns the new score and what to say. An unsure throw is not played."""
    if label is None or confidence < CUTOFF:
        return score, "Show it again", f"I'm not sure that was {label} ({confidence:.0%}), so that throw doesn't count."
    score = dict(score)
    winner = round_winner(label, computer)
    if winner != "draw":
        score[winner] += 1
    said = f"I read your throw as {label} ({confidence:.0%}). I threw {computer}."
    if score["you"] >= target:
        return dict(NEW_GAME), "You win the game!", said + f" Final score {score['you']}-{score['computer']}. New game."
    if score["computer"] >= target:
        return dict(NEW_GAME), "I win the game!", said + f" Final score {score['you']}-{score['computer']}. New game."
    headline = {"you": "You win the round", "computer": "I win the round", "draw": "Draw"}[winner]
    return score, headline, said + f" You {score['you']}, me {score['computer']}."


def throw(image, score, target):
    if image is None:
        return "Show a throw first.", "", score
    label, confidence = model.top(image)          # the MODEL part
    computer = random.choice(list(BEATS))
    score, headline, detail = play(score, label, confidence, computer, int(target))   # the RULES part
    return headline, detail, score


# The rules tested on their own, with made-up readings and no camera.
# Each throw is (my label, how sure, the computer's throw).
def run(throws, target=DEFAULT_TARGET):
    score, said = dict(NEW_GAME), None
    for label, confidence, computer in throws:
        score, said, _ = play(score, label, confidence, computer, target)
    return score, said

assert run([("Rock", 0.95, "Scissors")]) == ({"you": 1, "computer": 0}, "You win the round")
assert run([("Rock", 0.95, "Paper")]) == ({"you": 0, "computer": 1}, "I win the round")
assert run([("Rock", 0.95, "Rock")]) == (NEW_GAME, "Draw")
assert run([("Paper", 0.65, "Rock")]) == (NEW_GAME, "Show it again")              # unsure: not played
assert run([("Paper", 0.70, "Rock")]) == ({"you": 1, "computer": 0}, "You win the round")   # on the cut-off
assert run([("Rock", 0.9, "Scissors")] * 2) == (NEW_GAME, "You win the game!")    # first to 2, then a new game
assert run([("Rock", 0.9, "Scissors")] * 2, target=3) == ({"you": 2, "computer": 0}, "You win the round")

gr.Interface(
    fn=throw,
    inputs=[
        gr.Image(type="pil", sources=["webcam", "upload"], label="Show your throw:",
                 image_mode="RGBA", webcam_options=gr.WebcamOptions(mirror=False)),
        gr.State(dict(NEW_GAME)),
        gr.Slider(1, 5, value=DEFAULT_TARGET, step=1, label="Rounds to win the game:"),
    ],
    outputs=[gr.Textbox(label="Result"), gr.Textbox(label="What happened"), gr.State()],
    title="Rock paper scissors",
    description="Show rock, paper or scissors. First to win the rounds wins the game.",
    flagging_mode="never",
).launch(show_error=True)
