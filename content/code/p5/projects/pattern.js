function setup() {
  createCanvas(400, 300);
  background(255, 245, 230);
  noStroke();
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      flower(65 + col * 90, 60 + row * 90, random(20, 36));
    }
  }
}

function flower(x, y, size) {
  fill(random(200, 255), random(80, 160), random(120, 200));
  for (let i = 0; i < 6; i++) {
    let angle = i * 60;
    circle(x + cos(radians(angle)) * size, y + sin(radians(angle)) * size, size);
  }
  fill(255, 220, 60);
  circle(x, y, size);
}
