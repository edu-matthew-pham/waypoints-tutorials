import random

replies = ["Yes, definitely.", "Ask again later.", "Not a chance.", "It looks good.", "Hard to say."]

print("The fortune teller is ready. Type quit to leave.")
while True:
    question = input("Ask a question: ")
    if question == "quit":
        break
    print(random.choice(replies))
print("Goodbye!")
