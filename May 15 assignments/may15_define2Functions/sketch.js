/*
create a code project that defines and uses at least two functions
by Daniel Wen
May 15 2017
*/
var r,g,b; //variables for red green blue
var ballSize = 50;//size of ball

function setup() {
  createCanvas(600,500);//600x500 canvas
  
  r = random(255);//random color for red
  g = random(255);//random color for green
  b = random(255);//random color for blue
}

function draw() {
  background(255);//white background
  ball(mouseX,mouseY, ballSize);//ball is where your cursor is
  
  star(width/2,height/2); //star is in the middle of the canvas
  
}

function ball(xloc, yloc, diam){//the function ball taking the variables xloc, yloc, and diam
  noStroke(); //ball does not have a stroke
  fill(r,g,b);//random fill color
  ellipse(xloc, yloc, diam);//a cricle using parameters of ball
}

function star(xloc, yloc) {//the function star taking the variables xloc and yloc
	fill(0);//star is black
	noStroke();
	ellipse(xloc, yloc, 100);//a circle using the parameters but the size is hard set to 100
}