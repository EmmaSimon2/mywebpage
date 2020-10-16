
let xposlist = [100,200,300,400,500,600,700];
let yposlist = [100,200,300,400,500,600,700];

let xspeedlist = [1,10,20,25,20,10,15];
let yspeedlist = [1,20,10,20,10,20,10];

let mouseclickedlist = [1,1,1,1,1,1,1];

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here

  background(62, 76, 64);

  for (let i = 0; i < xposlist.length; i = i + 1){

    checkstage = checkstage + mouseclickedlist[i];

    if(mouseclickedlist[i] === 1){
      circle(xposlist[i],yposlist[i],100);
    }


    xposlist[i] = xposlist[i] + xspeedlist[i];
    yposlist[i] = yposlist[i] + yspeedlist[i];

    if(yposlist[i]>height){
      yspeedlist[i] = -yspeedlist[i];
      }

    if(yposlist[i] < 0){
      yspeedlist[i] = -yspeedlist[i];
    }

    if(xposlist[i]>width){
      xspeedlist[i] = -xspeedlist[i];
      }

    if(xposlist[i] < 0){
      xspeedlist[i] = -xspeedlist[i];
    }

    if(mouseIsPressed & dist(mouseX, mouseY, xposlist[i], yposlist[i])<50){
      mouseclickedlist[i] = 0;
    }
  }

  let checkstage = 0;
  for (let j = 0; j < xposlist.length; j = j + 1){
    checkstage = checkstage + mouseclickedlist[j];
  }

  if(checkstage === 0){
    for (let q = 0; q < xposlist.length; q = q + 1){

    }
  }
  console.log(checkstage);



}
