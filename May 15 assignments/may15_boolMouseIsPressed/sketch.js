/*
Boolean mouse is pressed
by Daniel Wen
May 15 2017
*/
rectSize = 100; //size of the rect is intended to be 100x100

function setup() {
  createCanvas(500,500); //creates a 500x500 canvas
  r = random(255); //random value of red
  g = random(255); //green
  b = random(255); //blue
}

function draw() {
  background(0); //background is black
  stroke(255); //stroke is white
  strokeWeight(4); //stroke size 4
  noFill(); //rect has no fill at first
  
  
  if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){ //if the mouse cursor is inside these boundaries
    if(mouseIsPressed){ //if mouse is being held down
      background(r,g,b); //change background color to a random color
      
    }
    fill(255,0,200); //if the mouse cursor is inside the boundaries give the rect a fill
  }
  rect(300,200,rectSize,rectSize);//draw the rect
}