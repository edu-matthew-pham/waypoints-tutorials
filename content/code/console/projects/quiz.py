questions = [
    ["What is the capital of Australia? ", "canberra"],
    ["How many legs does a spider have? ", "8"],
    ["What colour do you get from blue and yellow? ", "green"],
]

score = 0
for item in questions:
    answer = input(item[0]).lower()
    if answer == item[1]:
        print("Correct!")
        score = score + 1
    else:
        print("Not quite. It was " + item[1] + ".")

print("You scored " + str(score) + " out of " + str(len(questions)) + ".")
