
/*
Example using tabs to organize objects
objects are in a seperate tab
index.html has these two scripts:
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>

by Daniel Wen
May 15 2017
*/
function setup() {
	createCanvas(500, 500); //make a 500x500 canvas
}


function draw() {
	background(34, 123, 218);//background is a shade of blue
	noStroke();//circle and rectangle has no stroke
	fill(circle.r, circle.g, circle.b);//fill of ellipse takes values from circle
	ellipse(circle.x, circle.y, circle.diam, circle.diam);//draw a circle based on values from the object circle
	fill(rectangle.r, rectangle.g, rectangle.b);//fill of rect takes values from rectangle
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);//draw a rect based on values from object rectangle
}