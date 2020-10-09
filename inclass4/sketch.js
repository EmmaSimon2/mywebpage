
let xposlist = [100,200,300,400,500,600,700];
let yposlist = [100,200,300,400,500,600,700];
let xspeedlist = [15,10,20,25,20,10,15];
let yspeedlist = [10,20,10,20,10,20,10];



function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here

  background(62,76,64);

  for (let i = 0; i < xposlist.length; i = i + 1){


    circle(xposlist[i],yposlist[i],80);

    xposlist[i] = xposlist[i] + xspeedlist[i];
    yposlist[i] = yposlist[i] + yspeedlist[i];

    //check when ball crosses bottom of canvas
    if(yposlist[i]>height){
      yspeedlist[i] = -yspeedlist[i];
      }

    //check when ball crosses top of canvas
    if(yposlist[i] < 0){
      yspeedlist[i] = -yspeedlist[i];
    }

    //check when ball crosses bottom of canvas
    if(xposlist[i]>width){
      xspeedlist[i] = -xspeedlist[i];
      }

    //check when ball crosses top of canvas
    if(xposlist[i] < 0){
      xspeedlist[i] = -xspeedlist[i];
    }

    if(mouseIsPressed & dist(mouseX, mouseY, xposlist[i], yposlist[i])<80){

    }

  }



}
