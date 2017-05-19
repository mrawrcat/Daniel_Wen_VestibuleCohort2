/*
mousepressed event driven programming
by Daniel Wen
May 15 2017
*/

var diam = 200; //diameter of circle
var bgCol = 255; //background color
var bgSwitch = 0; //background color when button is pressed

function setup() {
  createCanvas(500,500); //make a canvas 500x500
  background(bgCol); //set the background to bgCol (white)
  noStroke(); //the circle has no stroke
  fill(255,0,0);//fill of circle is red
  ellipse(width/2, height/2, diam, diam);//draws the circle in the middle of canvas
}

function draw() {
  
}

function mousePressed(){ //when the mouse is pressed
  background(bgSwitch); //draw another background and sets the color to bgSwitch (black)
  noStroke(); //circle has no stroke
  fill(0,0,255);//fill of circle is blue
  ellipse(width/2, height/2, diam, diam);//draws another circle on top of the red circle
}