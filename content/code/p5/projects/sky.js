let stars = [];

function setup() {
  createCanvas(400, 300);
  noStroke();
  for (let i = 0; i < 60; i++) {
    stars.push({ x: random(width), y: random(height * 0.7), size: random(1, 4) });
  }
}

function draw() {
  background(15, 20, 50);
  fill(255, 245, 200);
  for (let s of stars) {
    circle(s.x, s.y, s.size + 1 + sin(frameCount * 0.05 + s.x));
  }
  fill(255, 250, 220);
  circle(330, 60, 40);
  fill(15, 20, 50);
  circle(342, 54, 36);
  fill(20, 40, 30);
  rect(0, 250, width, 50);
}
