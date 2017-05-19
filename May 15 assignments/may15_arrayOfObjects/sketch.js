/*
an array of objects.
by Daniel Wen
May 15 2017
*/

var stars = []; // declares an empty array
var moon; //an object moon that is declared in the setup


function setup() {
  createCanvas(600, 400);//creates a 600x400 canvas

  for (var i = 0; i < 400; i++) { //loops 400 times to create 400 stars in the array
    stars[i] = { // stores all the positions of i from the for loop in the array
      x1: random(0, width), // place x position randomly between 0 and width
      y1: random(0, height), // place y position randomly between 0 and width
      display: function() {//a function named display in a for loop for each of the stars in the array
        stroke(random(225));//stroke of stars is white
        point(this.x1, this.y1); // creates a star using the point keyword
      }
    }
  }
  moon = {x: 100, y: 350, diam: 100, xspeed: .5, yspeed: .5}//for some reason the moon object is declared in setup

  cloud = {x: 50, y: 150, diam: 75, col: 255}//an object cloud declared in setup as well
}


function draw() {
  background(0, 14, 35);//makes the background blackish
  for (var i = 0; i < stars.length; i++) { //iterate through the lenght of stars array
    stars[i].display(); // display each star using the display function in the stars array
  }
  noStroke();//moon has no stroke
  fill(225, 225, 134);//makes the moon kind of yellow
  ellipse(moon.x, moon.y, moon.diam, moon.diam);//makes a circle with values from the object moon

  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) {//if moon is in the canvas
    moon.x = moon.x + moon.xspeed;//move moon to the right
    moon.y = moon.y - moon.yspeed;//move moon up
  }

// make a cloud constructor function to replace verbose code
// can use a for loop to make cloud instead of writing so many ellipses
  noStroke();//cloud does not have a stroke
  fill(cloud.col);//color of cloud is the value of col in the cloud object(white)
  
  //all these ellipses make up part of the cloud
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  noStroke(); //is this even needed?
  fill(cloud.col);//i dont think this is needed either
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);//this is also the same as the first one so redundant
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);//also redundant code
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);//also redundant code
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);//also redundant code

}