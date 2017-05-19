/* 
May 9 assignment: color in the shapes
attempting to draw a cat with color
Created by Daniel Wen 
May 9 2017
*/
 
function setup() {
  createCanvas(500,500); //creates a 500x500 canvas
  r = random(255);//random value for red
  g = random(255);//random value for green
  b = random(255);//random value for blue

}
 
function draw() {
  
  
  
  background(0);//makes a black background
  stroke(255,255,255); //makes a white outline
  strokeWeight(2); //thickness of the outline is 2
  fill(r,g,b);//makes the cat a random color
  triangle(181, 120, 180, 60, 230, 80);//left ear
  triangle(320, 120, 325, 60, 270, 80);//right ear
  ellipse(250,150,150,150);// the face on top of the ears
  strokeWeight(5);//thickness of outline is 5
  strokeCap(ROUND); //makes a rounded stroke mainly for the eyes
  line(200,140,220,150); //left eye
  line(300,140,280,150); // right eye
  fill(255);//change fill to make the nose white
  triangle(240, 170, 250, 180, 260, 170);//nose
  strokeWeight(2);//thickness of outline is 2
  fill(r,g,b);//makes the cat a random color again
  quad(200,225,300,225,350,400,150,400);//body
  strokeWeight(3);// thickness of outlineis 3
  fill(255,0,0); // makes the bowtie red
  quad(225,220,270,240,270,220,225,240,225,220);//bowtie
  fill(r,g,b);//makes the cat a random color again
  ellipse(200,400,75,75);//left paw
  ellipse(300,400,75,75);//right paw
  
}