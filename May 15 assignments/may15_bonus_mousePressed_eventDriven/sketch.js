/*
bonus: modify mousepressed event driven to include boolean variable 
that toggles circle's color when mouse is inside of circle
the part of the code that detects if the mouse is inside the circle is taken from p5 examples: interactivity 1
by Daniel Wen
May 15 2017
*/


var bgCol = 255; //background color
var bgSwitch = 0; //background color when button is pressed
var r = 255; //variable r, g, b are for highlighting the circle
var g = 0; 
var b = 255;
var on = false; //boolean variable on
var button = {x:250, y:250, diam:200, RorB:255, g:0}//an object button which is the circle
function setup() {
  createCanvas(500,500); //make a canvas 500x500
  
}

function draw() {
  
  if(on) //if on is true
  {
    background(bgSwitch);//background is black
    fill(g,g,button.RorB);//button is blue
  }
  else //otherwise or if on isnt true
  {
    background(bgCol);//background is white
    fill(button.RorB,g,g);//button is red
  }
  
  noStroke(); //the circle has no stroke
  
   var d = dist(mouseX, mouseY, button.x, button.y)//calculates the distance of the mouse from the center of the circle
   if(d<button.diam/2){//if mouse is inside the circle
                       //this is calculated by comparing the mouse position to the center of circle
     fill(r,g,b); //button is highlighted cyan
   }
  
  ellipse(button.x, button.y, button.diam, button.diam);//draws the circle in the middle of canvas
}

function mousePressed(){ //when the mouse is pressed
   var d = dist(mouseX, mouseY, button.x, button.y)//calculates distance of mouse from center of circle
   if(d<button.diam/2){//if mouse is inside circle and button is pressed
     on = !on; //switches the current bool to an opposite one
   }
  }
  
