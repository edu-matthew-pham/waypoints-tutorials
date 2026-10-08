# region: returns
from turtle import *

scale = 20


def metres(m):
    return m * scale


forward(metres(5))
right(90)
forward(metres(3))
# endregion

# region: print
from turtle import *

scale = 20


def metres(m):
    return m * scale


print(metres(5))
forward(metres(5))
right(90)
forward(metres(3))
# endregion

# region: modify
from turtle import *

scale = 20


def metres(m):
    return m * scale


def room(width, depth):
    for i in range(2):
        forward(metres(width))
        right(90)
        forward(metres(depth))
        right(90)


room(5, 4)

# Write def area(width, depth) that returns width * depth, then print the area of this room.
# endregion

# region: make
from turtle import *

# Draw a street of five houses.
# endregion

# region: street
from turtle import *


def house(size):
    for i in range(4):
        forward(size)
        right(90)
    left(60)
    forward(size)
    right(120)
    forward(size)
    right(120)
    forward(size)
    right(180)


def move(distance):
    penup()
    forward(distance)
    pendown()


for i in range(5):
    house(30 + i * 10)
    move(80)
# endregion

# region: bug
from turtle import *

scale = 20


def metres(m):
    print(m * scale)


forward(metres(5))
# endregion
