# region: variable
from turtle import *

size = 100

for i in range(4):
    forward(size)
    right(90)
# endregion

# region: function
from turtle import *


def square(size):
    for i in range(4):
        forward(size)
        right(90)


square(100)
# endregion

# region: write
from turtle import *


def square(size):
    for i in range(4):
        forward(size)
        right(90)


# Write def triangle(size) below, then call it.
# endregion

# region: module
from turtle import *

# Click + module, then move your shape functions into it.
# endregion

# region: use
from turtle import *


def flower(petals):
    for i in range(petals):
        circle(40, 60)
        left(120)
        circle(40, 60)
        left(360 / petals - 120)


flower(6)
# endregion
