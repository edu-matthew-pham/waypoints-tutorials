# region: polygon
from turtle import *

sides = 5
size = 80
angle = 360 / sides

for i in range(sides):
    forward(size)
    right(angle)
# endregion

# region: print
from turtle import *

sides = 5
size = 80
angle = 360 / sides
print(angle)

for i in range(sides):
    forward(size)
    right(angle)
# endregion

# region: modify
from turtle import *

sides = 5
size = 80
angle = 360 / sides

for i in range(sides):
    forward(size)
    right(angle)

# Change one number at the top to draw a hexagon, then a 12-sided shape.
# endregion

# region: make
from turtle import *

size = 5

for i in range(50):
    forward(size)
    right(90)
    # Make the line longer every time round the loop.
# endregion

# region: plan
from turtle import *

scale = 20   # pixels per metre
width = 6    # metres
depth = 4

for i in range(2):
    forward(width * scale)
    right(90)
    forward(depth * scale)
    right(90)
# endregion
