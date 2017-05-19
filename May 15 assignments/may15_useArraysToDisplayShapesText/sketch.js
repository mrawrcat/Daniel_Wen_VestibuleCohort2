/*
create a code that uses an array to display shapes or text
*/

var bloop =[];
var words = ["What", "is", "it", "good","for", "absolutely", "nothing"];

function setup() {
  createCanvas(600, 800);//makes a 600x800 canvas
	background(0, 14, 35);//blueish background"
	
	  for (var i = 0; i < height; i++) { //loops 800 times to create 800 bloops in the array
    bloop[i] = { // stores all the positions of i from the for loop in the array
      x1: random(0, width), // place x position randomly between 0 and width
      y1: random(0, height), // place y position randomly between 0 and width
      display: function() {//a function named display in a for loop for each of the bloops in the array
        stroke(random(225));//stroke is white
        point(this.x1, this.y1); // creates a bloop using the point keyword
      }
    }
  }
	
		
}

function draw() {
  //this draws the bloops first
  for (var i = 0; i < bloop.length; i++) { //iterate through the length of bloop array
    bloop[i].display(); // display each bloop using the display function in the bloop array
  }
  //this draws the words in front of the bloops
  for (i = 0; i < 7; i++) { //for loop iterating 7 times
		
		stroke(255);//stroke of text is white
		fill(255);//fill of text is white
		textSize(38); //size of text is 38
		text(words[i], i +50, i * 100 + 50); // print/draw each phrase/string for i(8) times spacing each lower and more to the right
	}
}