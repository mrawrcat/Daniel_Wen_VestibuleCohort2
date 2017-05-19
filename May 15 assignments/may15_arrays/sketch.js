/*
demonstrates color array
by Daniel Wen
May 15 2017
*/
//an array called playlist containing several phrases(strings)
var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];


function setup() {
	createCanvas(1200, 800);//makes a 1200x800 canvas
	background(255, 0, 0);//red background

	for (i = 0; i < 8; i++) { //for loop iterating 8 times
		// console.log(playlist[i]); // log the list to the console as a check if needed.
		stroke(255);//stroke of text is white
		fill(255);//fill of text is white
		textSize(38); //size of text is 38
		text(playlist[i], i * 100 + 50, i * 100 + 50); // print/draw each phrase/string for i(8) times spacing each lower and more to the right
	}
}

// nothing needs to be drawn here.
function draw() {

}
