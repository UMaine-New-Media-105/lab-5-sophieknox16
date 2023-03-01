# lab-5-sophieknox16
lab-5-sophieknox16 created by GitHub Classroom
## Excersie 1
I started off this sketch by createing a sprite of a frog, simple, that I can make bounce off the borders of the 400,400 canvas. 
To make this sprite I used circles and an arc for the mouth
```Javascript
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
```
Next I created global variables for x, speedX, directionX, and y, so I could use them inside the draw function.
Then I set thesse variables equal to different values in my setup function so I could use them in draw to create if statements that will make the sprite move. 
I made the direction values random so the sprite will move differently every time the sketch is played
```Javascript
  x = width / 2;
  speedX = 2;
  directionX = random(2);
  y = height / 2;
  speedY = 2;
  directionY = random(3);
 ```
 I created equations in the draw function to allow my if statements to work. 
```Javascript
  x += speedX * directionX;
  y += speedY * directionY;
```
I then lastly created my if statements to have the speed change to negative or positive numbers when the spritre hits the edges of the canvas
 ```Javascript
 if (x + 65 >= width || x < -20) {
    // check if hits the right edge
    directionX *= -1;
  }
  if (y + 65 >= height || y < -20) {
    // check if hits the bottom edge
    directionY *= -1;
  }
```
Link to sketch: https://editor.p5js.org/Sophiek/sketches/nyTLU-Qaa 

## Exercise 2
