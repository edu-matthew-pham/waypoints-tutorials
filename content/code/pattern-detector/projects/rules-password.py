# Rules in plain English (written first, before any code):
#   1. Nothing typed                    -> ask for a password.
#   2. On the list of common passwords  -> Weak, whatever its length.
#   3. Shorter than the minimum length  -> Weak, say how many more characters.
#   4. Long enough, letters and numbers -> Strong.
#   5. Long enough, only one kind       -> OK, suggest mixing.
#   6. None of these fit                -> say so, don't guess.

import gradio as gr

# The numbers the rules use, together at the top
MIN_LENGTH = 8
STRICT_LENGTH = 12
COMMON = {
    "password": "the most guessed password in the world",
    "123456": "a counting sequence",
    "qwerty": "the first letters on a keyboard",
    "letmein": "a phrase everyone tries",
}


def check(password, strict):
    password = (password or "").strip()
    min_length = STRICT_LENGTH if strict else MIN_LENGTH
    if not password:
        return "Type a password first.", ""
    if password.lower() in COMMON:
        return "Weak", f"That is {COMMON[password.lower()]}. Guessers try these first."
    if len(password) < min_length:
        return "Weak", f"{len(password)} characters. Aim for at least {min_length} ({min_length - len(password)} more)."
    has_letter = any(ch.isalpha() for ch in password)
    has_digit = any(ch.isdigit() for ch in password)
    if has_letter and has_digit:
        return "Strong", "Long enough, with letters and numbers."
    elif has_letter or has_digit:
        return "OK", "Long enough, but only one kind of character. Mix in letters and numbers."
    else:
        return "Not sure", "None of my rules fits a password with no letters or numbers, so I won't guess."


# Testing record: what I typed, strict mode, the first word I expect
TESTS = [
    ("", False, "Type"),
    ("PASSWORD", False, "Weak"),    # capitals, same rule
    ("abc1234", False, "Weak"),     # 7 characters: one under the boundary
    ("abc12345", False, "Strong"),  # exactly 8: on the boundary
    ("abcdefgh", False, "OK"),
    ("!!!!!!!!", False, "Not"),
    ("abc12345", True, "Weak"),     # strict mode moves the boundary to 12
]
for given, strict, expected in TESTS:
    result = check(given, strict)[0]
    print("ok  " if result.startswith(expected) else "FAIL", repr(given), "->", result)

gr.Interface(
    fn=check,
    inputs=[gr.Textbox(label="Password to check"), gr.Checkbox(label="Strict mode (12 or more characters)")],
    outputs=[gr.Textbox(label="Rating"), gr.Textbox(label="Why")],
).launch(show_error=True)
