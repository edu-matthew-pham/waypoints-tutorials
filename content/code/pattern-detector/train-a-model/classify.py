# The part of the starters' image_pattern_trainer.py that answers (display only: it needs the starters to run).

# region: classify
from pattern_model import PatternModel

model = PatternModel.load("my_model.json")
print("Classes in this model:", model.classes)


def classify(image):
    if image is None:
        return "Upload or take a photo first."
    label, score = model.top(image)
    if score < 0.8:
        return f"Might be {label}, but I'm not confident ({score:.2f})."
    else:
        return f"{label} ({score:.2f} confidence)"
# endregion
