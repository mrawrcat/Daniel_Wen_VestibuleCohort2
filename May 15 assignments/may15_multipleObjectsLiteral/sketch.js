/* 
multiple shapes using object literal notation
by Daniel Wen
May 15 2017
*/


var circle = {x: 200, y: 200, diam: 50, r: 255, g: 123, b: 25} //object circle with relevant values

var rectangle = {x: 100, y: 100, diam: 75, r: 15, g: 33, b: 225}//object rectangle with relevant values


function setup() {
	createCanvas(500, 500);//make a 500x500 canvas
}


function draw() {
	background(34, 123, 218); //makes background color
	noStroke();//circle and rectangle has no stroke
	fill(circle.r, circle.g, circle.b);//fill of next drawn item has circle's color values
	ellipse(circle.x, circle.y, circle.diam, circle.diam);//draw a ellipse with values from object circle
	fill(rectangle.r, rectangle.g, rectangle.b);//fill of next drawn item has rectangle's color values
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);//draw a rect with values from object rectangle
}