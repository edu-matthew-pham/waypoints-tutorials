let balls = [];

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < 6; i++) {
    balls.push({
      x: random(40, 360), y: random(40, 260),
      dx: random(-3, 3), dy: random(2, 5),
      colour: color(random(80, 255), random(80, 255), random(80, 255)),
    });
  }
}

function draw() {
  background(30);
  for (let b of balls) {
    b.x = b.x + b.dx;
    b.y = b.y + b.dy;
    if (b.x < 15 || b.x > width - 15) {
      b.dx = -b.dx;
    }
    if (b.y < 15 || b.y > height - 15) {
      b.dy = -b.dy;
    }
    fill(b.colour);
    circle(b.x, b.y, 30);
  }
}
