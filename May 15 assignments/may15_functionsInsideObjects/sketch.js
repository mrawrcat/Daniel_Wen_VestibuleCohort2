/*
functions inside objects
by Daniel Wen
May 15 2017
*/

var float1 = {x1: 50,	y1: 0,	x2: 150,	y2: 90,	speed: 2, //the comma is needed to include the next variable/function
	display: function() { //the display name-value (aka key-value) pair includes a function as its value. 
		stroke(random(255), random(255), random(255)); //stroke is a random color
		strokeWeight(12); //stroke size is 12
		line(this.x1, this.y1, this.x2, this.y2); //the "this" keyword refers to the local variable in the object
		                                          //makes a line using the this keyword and corresponding values in the object
	},//a comma is needed after this function for the next function
	
	move: function() {//another function named move inside the object
	                  //moves the line down and to the right
	                  //y2 does not move to the right so the line stretches
		this.x1 = this.x1 + this.speed;// moves x1 to the right
		this.y1 = this.y1 + this.speed;//moves y1 down
		this.y2 = this.y2 + this.speed;//moves y2 down
	}
}

var float2 = {x1: 400,	y1: 200,	x2: 500,	y2: 300,	speed: 2, //again the comma is needed for the next variable/function
	display: function() {//another function named display that is local to float2
		stroke(random(255), random(255), random(255));//stroke is a random color
		strokeWeight(2);//stroke size is 2
		line(this.x1, this.y1, this.x2, this.y2);//makes a line using the corresponding values
	},//comma is needed to include another variable/function
	move: function() {//another function named move that is local to float 2
		this.x1 = this.x1 + this.speed;//moves the x1 of float2 to the right
		this.y1 = this.y1 + this.speed;//moves y1 down
		this.y2 = this.y2 + this.speed;//moves y2 down
	}
}

function setup() {
	createCanvas(1000, 1000); //create a 1000x1000 canvas
}

function draw() {
	background(0);//makes the background black
	float1.move();//uses the move function of float1
	float1.display();//uses the display function of float1
	float2.move();//uses the move function of float2
	float2.display();//usees the display function of float2
}