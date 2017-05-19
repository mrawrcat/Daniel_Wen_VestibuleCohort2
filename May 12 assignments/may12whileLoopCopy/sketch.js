/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
created by Daniel Wen 
May 12 2017  
*/


function setup() {
	createCanvas(600, 400); //creates a 600 by 400 canvas
}

function draw() {
	background(14, 56, 105); //color of background

	var y = 0; //variable for while loop y
	while (y <= height) { //while the variable y is less or equal to height
		stroke(0); //stroke is black
		fill(255); //fill is white
		rect(200, y, 50, 50); //makes a column of rectangles
		y = y + 50; //moves the position to make the rectangle
	}

	for (y = 0; y <= height; y += 50) {//starting y at 0 and increasing by 50 until its greater than height
		stroke(255);//stroke is white
		fill(0);//fill is black
		rect(300, y, 50, 50);//draw a column of rectangles
	}
}