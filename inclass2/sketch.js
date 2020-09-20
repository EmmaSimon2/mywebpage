
let xpos=500;
let ypos=0;
let xballspeed=5;
let yballspeed=10;
let circlecolor=15;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  background(217,183,65);
  fill(0,circlecolor,0);
  circle(xpos,ypos,125);

  if(mouseIsPressed & dist(mouseX, mouseY, xpos, ypos)<125){
    ypos = random(0,windowHeight);
  }

  if(mouseIsPressed & dist(mouseX, mouseY, xpos, ypos)<125){
    xpos = random(windowWidth,0);
  }

  xpos = xpos + xballspeed;
  ypos = ypos + yballspeed;

  //check x position
  //check when ball crosses right side of canvas
  if(xpos > width){
  xballspeed = -xballspeed;
  }
  //check when ball crosses left side of canvas
  if(xpos < 0){
  xballspeed = -xballspeed;
  }

  //check for ypos

  //check when ball crosses bottom of canvas
  if(ypos>height){
  yballspeed = -yballspeed;

  }
  //check when ball crosses top of canvas
  if(ypos < 0){
  yballspeed = -yballspeed;
  }

}
