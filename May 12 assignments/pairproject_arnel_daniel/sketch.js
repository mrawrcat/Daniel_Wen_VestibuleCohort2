
/*
pair project 
created by arnel as driver and daniel as typer
may 12 2017
*/
var rectSize = 50; //size of boxes
var speed = 50; //direction of x
var speed2 = 50;//direction of y
var x = 200; //x of ball start
var y = 100; //y of ball start
function setup() {
 createCanvas(500,500); //canvas
 background('white'); //makes background white
}

function draw() {
  strokeWeight(1); //border size 1
  stroke(0);       //border color black
  
  for(var i = 0; i <= width; i+= 100){//if i is less or equal than the width, increase  100
    for(var j = 0; j <= height; j+= 100){//if j is less or equal than the height, increase by 100
      fill(mouseX, 0, mouseY); // color of the rectangle depends on where the mouse is
      
      rect(i,j,rectSize,rectSize);//the rectangle being made depending on where i and j is as long as it isnt the end of the screen
      
    }
  }
  fill(random(255),random(255),random(255)); //sets the fill of the circle to random
  ellipse(x, y, rectSize*2, rectSize*2); //draw a big circle
  x = x+ speed; //makes the circle move left and right
  y = y+speed2; //makes the circle move up or down
  if(x > width || x < 0){//if circle touches edge of canvas 
    speed = speed *-1; //change direction
  }
  if(y > height || y <0){//if circle touches edge of canvas
    speed2 = speed2 *-1;//change direction
  }
  
}