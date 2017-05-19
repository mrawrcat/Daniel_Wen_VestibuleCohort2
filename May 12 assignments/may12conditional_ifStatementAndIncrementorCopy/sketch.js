/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if statement) in the draw() loop.
by Daniel Wen
may 12 2017
*/

var circX = 200; //circle x position
var circY = 200; //circle y position
var circStroke = 125; //circle stroke color
var circR = 55; //value of red
var circG = 135; //value of green
var circB = 225; //value of blue
var circSize = 75;//size of circle
var recX = 100; //rect x position
var recY = 300;//rect y position
var recStroke = 35;//rect stroke color
var recCol = 0;//fill of rect
var recSize = 75;//size of rect
var canvBGR = 125;//color of bg red
var canvBGG = 55;//color of bg green
var canvBGB = 255; //color of bg blue
var speed = 2;//directional changer



function setup() {  
	createCanvas(400, 400); //400x400 canvas
}


function draw() {
	background(canvBGR, canvBGG, canvBGB); //color of background is value of canvBG R G and B
	stroke(circStroke); //color of stroke is value of circStroke
	fill(circR, circG, circB);  //fill of circle is a random color
	stroke(circStroke);  //extra code that doesnt change anything
	ellipse(circX, circY, circSize, circSize); //draw a circle 
	ellipse(circX + 50, circY - 75, circSize, circSize); //draw a circle that is above and to the right of the first circle
	fill(circR, circG, circB, 135); //fill of rect is now less transparent
	
	circX = circX + speed; // makes the circle move
					    
    stroke(recStroke); //stroke of rect is value of recStroke
    fill(recCol);//fill of rect is now black
    rect(recX, recY, recSize, recSize);//draw a rect
    
    recY = recY - speed; // moves the rect up
    
    if(circX > width || circX < 0) { //if x value of circle reaches edge of canvas 
    								 
    	speed = speed *-1;		//reverse direction
    							
    } 					
}