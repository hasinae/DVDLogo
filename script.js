// Name any p5.js functions we use in `global` so Glitch can recognize them.

/* global
 *    background, createCanvas, image, loadImage, width, height
 */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

let dvdImage, x, xVelocity, y, yVelocity, logoWidth, logoHeight;

// this code runs once
function setup(){
  createCanvas(400, 200);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50
  y = 50
  xVelocity = 1
  yVelocity = 1
  logoWidth = 100
  logoHeight = 75
}

// this code runs on repeat
function draw(){
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, x, y, logoWidth, logoHeight);
  
  // Move the logo
  x += xVelocity //means the same as x = x + xVelocity
  y += yVelocity 
  
  // Update the velocity if we need to "bounce" off the walls
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