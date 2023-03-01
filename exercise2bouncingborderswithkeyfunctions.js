//Sophie Knox
//Lab 5 Exercise 1 and 2
//This sketch will create a sprite that bounces off of the edges of the canvas, randomly with each run of the sketch.
//Now when the up and down arrow are clicked the sprite will move in that direction.
let x;
let speedX;
let directionX;
let y;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  x = width / 2;
  speedX = 2;
  directionX = random(2);
  y = height / 2;
  speedY = 2;
  directionY = random(3);
}

function draw() {
  background("lightblue");

  x += speedX * directionX;
  y += speedY * directionY;
  drawFrog(x, y);

  if (x + 65 >= width || x < -20) {
    // check if hits the right edge
    directionX *= -1;
  }
  if (y + 65 >= height || y < -20) {
    // check if hits the bottom edge
    directionY *= -1;
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    directionY = -1;
  }
  if (keyCode === DOWN_ARROW) {
    directionY = 1;
  }
}
function drawFrog(x, y, size) {
  translate(x, y);
  scale(size);
  noStroke();
  fill("green");
  ellipse(50, 50, 50); //head
  fill("lightgreen");
  ellipse(35, 30, 31); //left eye
  ellipse(65, 30, 31); //right eye
  push();
  fill("black");
  stroke("white");
  strokeWeight(5);
  ellipse(35, 30, 15); //left pupil
  ellipse(65, 30, 15); //right pupil
  pop();
  push();
  fill("red");
  arc(50, 50, 20, 30, 0, 180); //frogs smile
  pop();
}
