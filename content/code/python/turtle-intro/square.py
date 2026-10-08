# region: square
from turtle import *

forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
# endregion

# region: loop
from turtle import *

for i in range(4):
    forward(100)
    right(90)
# endregion

# region: modify
from turtle import *

for i in range(4):
    forward(100)
    right(90)

# Change the code so it draws a triangle.
# endregion

# region: make
from turtle import *

# Draw your own shape here.
# endregion

# region: triangle
from turtle import *

for i in range(3):
    forward(100)
    right(120)
# endregion

# region: use
from turtle import *

for tile in range(5):
    for side in range(4):
        forward(40)
        right(90)
    penup()
    forward(40)
    pendown()
# endregion

# region: compare
# Without a loop
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)

# With a loop
for i in range(4):
    forward(100)
    right(90)
# endregion
