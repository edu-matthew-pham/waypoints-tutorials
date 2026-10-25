from turtle import *
import random

speed(0)
penup()
goto(180, 120)
pendown()
right(90)
forward(240)          # the finish line
hideturtle()

colours = ["red", "blue", "green", "orange"]
racers = []
for i in range(4):
    t = Turtle()
    t.shape("turtle")
    t.color(colours[i])
    t.penup()
    t.goto(-200, 90 - i * 60)
    t.pendown()
    t.pensize(4)
    racers.append(t)

winner = None
while winner == None:
    for r in racers:
        r.forward(random.randint(5, 20))
        if r.xcor() > 180 and winner == None:
            winner = r

sign = Turtle()
sign.hideturtle()
sign.penup()
sign.goto(150, winner.ycor() + 18)
sign.write("Winner!", False, "left", ("Arial", 14, "bold"))
