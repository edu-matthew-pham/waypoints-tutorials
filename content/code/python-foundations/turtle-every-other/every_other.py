# region: pattern
from turtle import *

pensize(6)
for i in range(8):
    if i % 2 == 0:
        pencolor("red")
    else:
        pencolor("blue")
    forward(30)
    right(45)
# endregion

# region: modify
from turtle import *

pensize(6)
for i in range(8):
    if i % 2 == 0:
        pencolor("red")
    else:
        pencolor("blue")
    forward(30)
    right(45)

# Make every third side green. Use elif.
# endregion

# region: review
from turtle import *

size = 30
for i in range(6):
    forward(size + (i % 2) * 20)
    right(60)
# endregion

# region: sol-third
from turtle import *

pensize(6)
for i in range(8):
    if i % 3 == 0:
        pencolor("green")
    elif i % 2 == 0:
        pencolor("red")
    else:
        pencolor("blue")
    forward(30)
    right(45)
# endregion

# region: third
from turtle import *

pensize(6)
for i in range(8):
    if i % 3 == 0:
        pencolor("green")
    elif i % 2 == 0:
        pencolor("red")
    else:
        pencolor("blue")
    forward(30)
    right(45)
# endregion

# region: crossing
from turtle import *

speed(0)
bgcolor("dimgray")
penup()
goto(-200, -60)
pendown()
for i in range(8):
    if i % 2 == 0:
        fillcolor("white")
    else:
        fillcolor("dimgray")
    pencolor("dimgray")
    begin_fill()
    for side in range(2):
        forward(50)
        left(90)
        forward(120)
        left(90)
    end_fill()
    forward(50)
# endregion
