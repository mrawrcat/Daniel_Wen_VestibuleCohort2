/* 
moves shapes also with else
created by Daniel Wen may 12 2017
*/

var ball1X = 200;//1st ball x value
var ball1Y = 200;//1st ball y value
var ball2X = 250;//2nd ball x value
var ball2Y = 250;//2nd ball y value
var r; //red
var g; //green
var b; //blue
var circSize = 50; //size of ball
var speedX = 2; //value determining left or right
var speedY = 2; //value determining up or down
function setup() {
 createCanvas(500,500);  
 
 r = random(255); //red
 g = random(255); // green
 b = random(255); // blue
 
}

function draw() {
  background(r,g,b); //background
  stroke(r); //color of stroke
  fill(b,g,r); //color of ball 1
  ellipse(ball1X, ball1Y, circSize, circSize);//ball 1
  
  fill(g,r,b); //color of ball 2
  ellipse(ball2X, ball2Y, circSize, circSize);//ball 2
  
  
  
  ball1X = ball1X + speedX; //makes ball 1 move left or right
  ball1Y = ball1Y - speedY; //makes ball 1 more up or down
 
  
  if(ball1X > width - (circSize/2) || ball1X < 0 + (circSize/2)){ //if ball 1 is at the left or right edge of the screen
    speedX = speedX *-1; //reverse direction
    
  }
  
  if(ball1Y > height - (circSize/2) || ball1Y < 0 + (circSize/2)){//if ball 1 is at the top or bottom of screen
    speedY = speedY *-1; //reverse direction
    
  }
  
  if(speedX >= 1){ //if ball is going 
    circSize += .5;
    
  }
  else{
    if(speedX <= -1){
      circSize -= .5;
    }
  }
  
}