# region: hit
from turtle import *

speed(0)
hideturtle()
bx = -60
by = -25
bw = 120
bh = 50

penup()
goto(bx, by)
pendown()
for i in range(2):
    forward(bw)
    left(90)
    forward(bh)
    left(90)
penup()
goto(bx + 10, by + 15)
write("Press me")


def clicked(x, y):
    if x > bx and x < bx + bw and y > by and y < by + bh:
        print("button pressed")
    else:
        print("missed")


onscreenclick(clicked)
listen()
mainloop()
# endregion

# region: counter
from turtle import *

speed(0)
hideturtle()
bx = -60
by = -25
bw = 120
bh = 50
count = 0


def draw_scene():
    clear()
    penup()
    goto(bx, by)
    pendown()
    for i in range(2):
        forward(bw)
        left(90)
        forward(bh)
        left(90)
    penup()
    goto(bx + 10, by + 15)
    write("Click me")
    goto(-20, 70)
    write(count, False, "left", ("Arial", 24, "normal"))


def clicked(x, y):
    global count
    if x > bx and x < bx + bw and y > by and y < by + bh:
        count = count + 1
        draw_scene()


draw_scene()
onscreenclick(clicked)
listen()
mainloop()
# endregion

# region: make
from turtle import *

speed(0)
hideturtle()
count = 0

# Make a counter with two buttons, "+1" on the left and "-1" on the right.
# Draw both buttons, and show the number above them.
# Each click must check which button (if any) it landed inside.
# endregion

# region: panel
from turtle import *

speed(0)
hideturtle()
names = ["white", "yellow", "lightblue", "pink"]
bw = 100
bh = 40
by = -20


def draw_button(bx, label):
    penup()
    goto(bx, by)
    pendown()
    for i in range(2):
        forward(bw)
        left(90)
        forward(bh)
        left(90)
    penup()
    goto(bx + 10, by + 12)
    write(label)


def clicked(x, y):
    for i in range(len(names)):
        bx = -220 + i * 110
        if x > bx and x < bx + bw and y > by and y < by + bh:
            bgcolor(names[i])


for i in range(len(names)):
    draw_button(-220 + i * 110, names[i])

onscreenclick(clicked)
listen()
mainloop()
# endregion

# region: toolkit
from turtle import *
from ui import draw_button, inside

speed(0)
hideturtle()
count = 0
draw_button(-60, -25, 120, 50, "Add one")


def clicked(x, y):
    global count
    if inside(x, y, -60, -25, 120, 50):
        count = count + 1
        print(count)


onscreenclick(clicked)
listen()
mainloop()
# endregion

# region: bug
bx = -60
by = -25
bw = 120
bh = 50

def clicked(x, y):
    if x > bx and x < bx + bw and y > by and y > by + bh:
        print("button pressed")
# endregion
