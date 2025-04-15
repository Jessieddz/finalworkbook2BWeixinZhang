// Be affected by the code on the Canvas and modify it.
var spin = 0;
var letterSize = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
 
  background(220, 51);

  fill(0); 
  push();
  translate(width/2, height/2);
  rotate(spin);
  textSize(letterSize);
  text('Slide', 0, -letterSize * 0.3);

  
  spin += map(mouseX, 0, width, -10, 10);
  letterSize = map(mouseY, 0, height, 8, 72);
  circle(0, 0, letterSize / 2);
  noFill();
  stroke((frameCount * 5) % 360, 80, 80);
  circle(0, 0, letterSize * 10);
  
  pop();
}
