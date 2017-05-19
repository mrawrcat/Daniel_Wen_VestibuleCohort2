/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if else control structures) in the draw() loop.
by Daniel Wen
May 12 2017
*/

var circX = 200; //circle x position
var circY = 200; //circle y position 
var circStroke = 125; //circle stroke color
var circR = 255; //value of red
var circG = 0;   //value of green
var circB = 0;   //value of blue
var circSize = 75; //size of circle
var recX = 100; //rect x position
var recY = 300; //rect y position
var recStroke = 35; //rect stroke color
var recCol = 0; //fill of rect
var recSize = 75; //size of rect
var canvBG = 225; //color of bg
var speed = 2; //directional changer
var alph = 125; //value of alpha or the opacity.



function setup() {
	createCanvas(400, 400); //400x400 canvas
}


function draw() {
	background(canvBG); //color of background is value of canvBG
	stroke(circStroke); //color of stroke is value of circStroke
	fill(circR, circG, circB, alph); //fill of circle is a random color
	stroke(circStroke); //extra code that doesnt change anything
	ellipse(circX, circY, circSize, circSize);//draw a circle 
	ellipse(circX + 50, circY - 75, circSize, circSize);//draw a circle that is above and to the right of the first circle
	fill(circR, circG, circB, 135);//fill of rect is now less transparent
	stroke(recStroke); //stroke of rect is value of recStroke
	//fill(recCol); //fill of rect is now black
	rect(recX, recY, recSize, recSize);//draw a rect

	circX = circX + speed; //moves the circle
	recY = recY - speed; //moves the rectangle

	if (circX < width) {//if x value of circle is less than the width of the canvas

		circSize += 0.5; // circle size will increase by 0.5 through each loop.

	} else {

		if (circX > width) { //if x value of circle is more than the width of the canvas
			speed = speed * -1; // reverse direction
			circSize *= -1; // circle size will decrease by number multiplied by -1 through each loop.

		}

	}

}