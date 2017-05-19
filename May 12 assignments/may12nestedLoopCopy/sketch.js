/*  
nested loop that draws rectangles to the canvas. 
by Daniel Wen
May 12 2017
*/


function setup() {
	createCanvas(600, 400); //makes a canvas 600 by 400
	background(0, 64, 135);//makes a background once
	
}

function draw() {
	strokeWeight(4); //stroke size is 4
	stroke(255); //white stroke color

	for (var i = 0; i <= width; i += 60) { //starting i at 0 and increasing by 60 until its greater than width
		  for (var j = 0; j <= height; j += 60) { // starting j at 0 and increasing by 60 until its greater than height
			fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			rect(i, j, 35, 35); // draw a rect substituting it's x and y position with i and j
		}
		  
	}
	
	
}