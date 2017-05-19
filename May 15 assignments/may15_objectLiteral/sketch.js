/*
using object literal notation
by Daniel Wen
May 15 2017
*/

var circle = {x:250, y:250, diam:50, r:255, g:123, b:25} //an object variable circle that has a couple of variables
function setup() {
  createCanvas(500,500);//make a 500x500 canvas
}

function draw() {
  background(34,123,218);//make a background with this color
  noStroke();//circle has no stroke
  fill(circle.r,circle.g,circle.b); //fill of circle takes values from the circle object variable
  ellipse(circle.x,circle.y,circle.diam,circle.diam);//ellipse takes values from the circle object variable to make a circle
}