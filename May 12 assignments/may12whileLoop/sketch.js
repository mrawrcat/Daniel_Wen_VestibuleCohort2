/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Daniel Wen May 12 2017. 
*/

var rectSize = 50;

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(30,30,30);// background
  var x = 0; // x coordinate of the rect
  var y = 0; // y coordinate of the rect
  while(y <= height){ //if y is less or equal to height
    strokeWeight(10); // strokeweight is 10
    stroke(110); //color is 110
    fill(200); //color is 200
    ellipse(200,y,rectSize,rectSize); //draws circles
    y = y+50; //moves where the circle is drawn the next loop
  }
  while(x < width){
    strokeWeight(10); // size of line is 10
    stroke(110); //color is 110
    fill(200); //color is 200
    ellipse(x,200,rectSize,rectSize); //draws circles
    x = x+50; //moves where the circle is drawn the next loop
  }
  for(var y = 0; y<=height; y+=rectSize){ //a loop to draw a horizontal line of boxes
    stroke(150); //color is 150
    strokeWeight(10);//size of line is 10
    fill(100); //color is 100
    rect(300,y,rectSize,rectSize);//draws the rectangle
  }
  
  
  
  
}