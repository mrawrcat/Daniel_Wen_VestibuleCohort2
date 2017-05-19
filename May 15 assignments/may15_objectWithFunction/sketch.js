/*
create a code that defines a object with at least one function
by Daniel Wen
May 15 2017
*/
var stick = {x1: 50,	y1: 0,	x2: 150,	y2: 90,	speed: 2,
	display: function() { //display function makes a line 
		stroke(random(255), random(255), random(255)); //stroke is a random color
		strokeWeight(12); //stroke size is 12
		line(this.x1, this.y1, this.x2, this.y2); //makes the line
		                                         
	},
	
	move: function() {//another function named move inside the object
	                  //moves the line down and to the right
	                  //y2 does not move to the right so the line stretches
		this.x1 = this.x1 + this.speed;// moves x1 to the right
		this.x2 = this.x2 - this.speed;// moves x2 to the left
		this.y1 = this.y1 + this.speed;//moves y1 down
		this.y2 = this.y2 + this.speed;//moves y2 down
		
	
	}
}

function setup() {
  createCanvas(1000,1000);
  	background(0);//makes the background black
}

function draw() {
  stick.move();//uses the move function of stick
	stick.display();//uses the display function of stick
}