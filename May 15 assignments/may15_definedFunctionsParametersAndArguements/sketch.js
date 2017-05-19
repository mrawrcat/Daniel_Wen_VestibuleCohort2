/*
uses a function with parameters and arguements
by Daniel Wen
May 15 2017
*/

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(0);
	moon(445, 200, 150); // draw a moon using the function

	star(370, 25); //draw a star at the location
	star(50, 175);
	star(115, 35);
	star(25, 44);
	star(100, 17);
	star(215, 235);
	star(418, 293);
	star(525, 370);
	star(175, 350);
	star(235, 115);
	star(444, 325);
	star(317, 200);
	star(535, 315);
	star(293, 218);
}


function moon(xloc, yloc, diam) {//the function moon taking the variables xlocation, ylocation, and diameter
	noStroke();//moon has no stroke
	fill(255, 255, 153);//moon is yellow
	ellipse(xloc, yloc, diam); // parameters are passed into ellipse. 
}

function star(xloc, yloc) {//the function star taking the variables xlocation and ylocation
	fill(255);//star is white
	noStroke();
	ellipse(xloc, yloc, 5);//a circle using the parameters but the size is hard set to 5
}