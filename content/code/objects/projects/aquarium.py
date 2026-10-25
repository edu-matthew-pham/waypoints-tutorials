from turtle import *
import random

bgcolor("lightblue")
hideturtle()

class Fish:
    def __init__(self, colour, y):
        self.turtle = Turtle()
        self.turtle.shape("circle")
        self.turtle.color(colour)
        self.turtle.penup()
        self.turtle.goto(random.randint(-200, 200), y)
        self.speed = random.randint(2, 6)

    def swim(self):
        self.turtle.forward(self.speed)
        if self.turtle.xcor() > 230 or self.turtle.xcor() < -230:
            self.turtle.left(180)

tank = []
for i in range(5):
    tank.append(Fish(random.choice(["orange", "gold", "red", "purple"]), -150 + i * 70))

def tick():
    for f in tank:
        f.swim()
    ontimer(tick, 50)

tick()
mainloop()
