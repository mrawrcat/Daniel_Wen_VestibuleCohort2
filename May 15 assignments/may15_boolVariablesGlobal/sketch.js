/*
boolean variables global
by Daniel Wen
May 15 2017
*/

var on = false; //a boolean variable on set at first to false;
function setup() {
  createCanvas(500,500);//creates a 500x500 canvas
}

function draw() {
  
  
  if(on) //if on is true
  {
    background(0,255,0);//change the background to green
  }
  else //otherwise or if on isnt true
  {
    background(0);//change background to black
  }
  
  stroke(225); //stroke is white
  strokeWeight(4); //stroke size is 4
  noFill(); //rect does not have a fill
  
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){//if mouse cursor is inside the rect
    fill(225,0,200); //fill the rectangle with a shade of red and blue
  }
  
  rectMode(CENTER); //makes the rectmode center instead of starting edge
  rect(300,200,100,100); //draws a rect
}

function mousePressed(){ //when the mouse is clicked
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){//if mouse cursor is inside the rect
    on = !on; //switch the on boolean to the opposite of its current value
  }
}