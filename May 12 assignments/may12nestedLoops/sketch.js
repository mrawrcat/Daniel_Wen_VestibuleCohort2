/*
nested loops
Code By Daniel Wen may 12 2017
*/
var rectSize = 50; //what i want the size of the rectangle to be
function setup() {
  createCanvas(500,500);//the canvas
  background(30,30,30);// the background
  r = random(255);// red
  g = random(255);//green
  b = random(255);//blue
  
  //rectMode(CENTER);
}

function draw() {
   // background(30,30,30);

  strokeWeight(5); //make the stroke size 5
  stroke(r,b,g); //random color for the stroke that isnt the bg
  //translate(width/2, height/2);
  //rotate(radians(frameCount));
  for(var i = 0; i <= width; i+= rectSize+10){//if i is less or equal than the width, increase by size of rectangle plus 10
    for(var j = 0; j <= height; j+= rectSize+10){//if j is less or equal than the height, increase by size of rectangle plus 10
      fill(mouseX, r, mouseY); // color of the rectangle depends on where the mouse is
      //translate(width/2, height/2);
      //rotate(radians(frameCount));

      ellipse(i,j,rectSize,rectSize);//the rectangle being made depending on where i and j is as long as it isnt the end of the screen
      
    }
  }
}