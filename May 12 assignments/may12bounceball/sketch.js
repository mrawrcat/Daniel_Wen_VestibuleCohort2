/* 
moves shapes
created by Daniel Wen may 12 2017
*/

var ball1X = 200;// x of ball 1
var ball1Y = 200;// y of ball 1
var ball2X = 250;//
var ball2Y = 250;

var circSize = 50; //size of the ball
var speedX = 2; //direction of ball 1's left and right
var speedY = 2; //direction of ball 1's up and down
function setup() {
 createCanvas(500,500);  
 r = random(255);//red 
 g = random(255);//green
 b = random(255);//blue
 
}

function draw() {
  background(r,g,b);//random background color
  stroke(r);//random color of stroke
  fill(b,g,r);//different random color of ball 1
  ellipse(ball1X, ball1Y, circSize, circSize);//ball 1
  
  fill(g,r,b); //random color of ball2
  ellipse(ball2X, ball2Y, circSize, circSize);//ball 2
  
  
  
  ball1X = ball1X + speedX; //makes ball 1 move left or right
  ball1Y = ball1Y - speedY; //makes ball 1 move up or down
 
  
  if(ball1X > width - (circSize/2) || ball1X < 0 + (circSize/2)){
    speedX = speedX *-1;
    
  }
  
  if(ball1Y > height - (circSize/2) || ball1Y < 0 + (circSize/2)){
    speedY = speedY *-1;
    
  }
  
}