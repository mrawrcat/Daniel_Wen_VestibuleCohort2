/*
defining functions
by Daniel Wen
May 15 2017
*/

var blip = {x: 0, y: 100, xspeed: 4}

var blip2 = {x: 0, y: 200, xspeed: 4}// the y position is the same as blip3 so that they intersect.

var blip3 = {x: 600, y: 200, xspeed: 4}

var blip4 = {x: 600, y: 300, xspeed: 4}


function setup() {
	createCanvas(500, 500); //makes a 500x500 canvas
	background(0); //black background
}

function draw() {
	move(); // call the defined move() function.
	display(); // call the defined display() function.
}

 
function move() {// move function()
	blip.x = blip.x + blip.xspeed; //makes blip move to the right
	blip2.x = blip2.x + blip2.xspeed;//makes blip 2 move to the right
	blip3.x = blip3.x - blip3.xspeed; //makes blip 3 to the left.
	blip4.x = blip4.x - blip4.xspeed; //makes blip 4 move to the left
}

function display() {// display function()
	strokeWeight(2);
	stroke(255, 0, 255);
	// an array and for loop could be used so point does not have to be called repeatedly.
	point(blip.x, blip.y);
	point(blip2.x, blip2.y);
	point(blip3.x, blip3.y);
	point(blip4.x, blip4.y);
}