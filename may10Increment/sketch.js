/* 
Example that draws a guy using variables and moves him
Created by Daniel Wen
May 10 2017
*/

var startX = 250;
var startY = 110;
var face = 200;
var circSize = 50;
var mouthSize = 70;
var bodyX = 250;
var bodyY = 250 ;


var circStroke = 0; //color of stroke of the circle



function setup() {
  //for some reason random variables have to be in the setup
   r = random(255); //red
   g = random(255); //green
   b = random(255); //blue
   
   createCanvas(500,500);
  
}

function draw() {
   background(r,g,b);//random background color
  stroke(circStroke); //black stroke
  strokeWeight(5); // make size of stroke 5
  fill(r+r,g+g,b+b); // different random color for body
  rect(startX - 100, startY+90, face, face);  //body
  ellipse(startX, startY, face, face); //head
  ellipse(startX,startY,circSize,circSize); // left eye
  ellipse(startX +(circSize*2), startY, circSize, circSize);//right eye
  fill(0); //make pupil black
  ellipse(startX,startY,circSize/2,circSize/2); //left pupil
  ellipse(startX +(circSize*2), startY, circSize/2, circSize/2);//right pupil
  rect(startX + 15, startY + 30, mouthSize, mouthSize, 20); // mouth
  stroke(r+r,g+g,b+b); // color for appendages the same as body
  strokeWeight(10); // enlarge stroke because i use lines for arms and legs
  line(startX- 100, startY+100, startX-150, startY+250); //left arm
  line(startX+ 100, startY+100, startX+150, startY+250); //right arm
  line(startX- 100, startY+290, startX-100, startY+400); //left leg
  line(startX+ 100, startY+290, startX+100, startY+400); // right leg
  startX = startX + random(-3,3); //makes the guy move in a random direction left or right
  startY = startY + random(-3,3); //makes the guy move in a random direction up or down

}