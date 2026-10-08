# region: use
from turtle import *
from shapes import square, triangle

square(80)
triangle(80)
# endregion

# region: move
from turtle import *


def wall(size):
    for i in range(4):
        forward(size)
        right(90)


def roof(size):
    left(60)
    forward(size)
    right(120)
    forward(size)
    right(120)
    forward(size)
    right(180)


def house(size):
    wall(size)
    roof(size)


house(60)
# endregion

# region: make
from turtle import *

# Create a module of your own with several functions, then import it here and use it.
# endregion

# region: street
from turtle import *
from shapes import square, triangle

for i in range(4):
    square(60)
    triangle(60)
    penup()
    forward(80)
    pendown()
# endregion
