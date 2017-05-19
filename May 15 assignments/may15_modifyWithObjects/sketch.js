/*
modify an existing code with objects
by Daniel Wen
May 15 2017
*/
//an object ball with two functions
var ball = {x: 100, y: 100, diam: 50, xspeed: 5, yspeed: 5, 
  display: function(){//display function makes a ball with no stroke and random colors
    noStroke();
    fill(random(255), random(255), random(255))
    ellipse(this.x,this.y,this.diam,this.diam);
  },
  move: function(){//move function moves the ball and bounces it if it reaches the edge of the canvas
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    
    if(this.x > width - this.diam/2 || this.x < 0 + this.diam/2){
      this.xspeed = this.xspeed * -1;
    }
    if(this.y > height - this.diam/2 || this.y < 0 + this.diam/2){
      this.yspeed = this.yspeed * -1;
    }
  }
}

function setup() {
  createCanvas(600,500);//600x500 canvas
  background(0); //black background is drawn once
}

function draw() {
  ball.display();//calls the function display to display the ball
  ball.move();//calls the function move to move the ball
}