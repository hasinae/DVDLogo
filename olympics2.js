// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

/* 
  global createCanvas, background 
*/

let x, y, xVelocity, yVelocity;

function setup(){
  createCanvas(400, 200);
  angleMode(DEGREES);
  x = 50 
  y = 50
  x1 = 105
  y1 = 50
  x2 = 160
  y2 = 50
  x3 = 75
  y3 = 75
  x4 = 138
  y4 = 75
  logoWidth = 50
  logoHeight = 50 
  xVelocity = 1
  yVelocity = 1
}

function draw() {
  // Code here runs continuously
  background('white');
 
  // removes background of circle
  noFill()
  strokeWeight(4);
  
  // blue ring
  stroke(0, 0, 255);
  ellipse(x, y, 50, 50);
  x += xVelocity //moves blue ring
  y += yVelocity
  
  // black ring
  stroke(0, 0, 110);
  ellipse(x1, y1, 50, 50);
  x1 += xVelocity
  y1 += yVelocity
  
  // red ring 
  stroke(255, 49, 74);
  ellipse(x2, y2, 50, 50);
  x2 += xVelocity
  y2 += yVelocity
  
  // yellow ring
  stroke(255, 170, 55);
  ellipse(x3, y3, 50, 50);
  x3 += xVelocity
  y3 += yVelocity
  
  // green ring
  stroke(10, 162, 85);
  ellipse(x4, y4, 50, 50);
  x4 += xVelocity
  y4 += yVelocity
  
  if (x > width - logoWidth) {
    xVelocity *= -1 
  }
  
  if (x < 0) {
    xVelocity *= -1
  }
  
  if (y > height - logoHeight) {
    yVelocity *= -1
  }
  
  if (y < 0) {
    yVelocity *= -1
  
  }
  
}
