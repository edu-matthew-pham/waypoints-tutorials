# region: copies
from turtle import *

for i in range(4):
    forward(100)
    right(90)

penup()
forward(150)
pendown()

for i in range(4):
    forward(100)
    right(90)

penup()
forward(150)
pendown()

for i in range(4):
    forward(100)
    right(90)
# endregion

# region: def
from turtle import *


def square():
    for i in range(4):
        forward(100)
        right(90)


square()
penup()
forward(150)
pendown()
square()
penup()
forward(150)
pendown()
square()
# endregion

# region: modify
from turtle import *


def square():
    for i in range(4):
        forward(100)
        right(90)


square()

# Write def triangle(): below, then call it after the square.
# endregion

# region: make
from turtle import *

# Write a function that draws a shape of your choice, then call it three times in a row.
# endregion

# region: house
from turtle import *


def wall():
    for i in range(4):
        forward(100)
        right(90)


def roof():
    left(60)
    forward(100)
    right(120)
    forward(100)
    right(120)
    forward(100)
    right(180)


wall()
roof()
# endregion
