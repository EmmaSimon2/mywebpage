
//extra canvas to allow the mouse to only draw behind the object, such as sun/moon/mountains
let extraCanvas;
let xpos = 900;
let ypos = 370;
let fr = 5;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  extraCanvas=createGraphics(windowWidth,windowHeight);
  extraCanvas.clear();
  frameRate(fr);
  noStroke();
}

function draw() {

  //background is a blue color
  background(109,181,212);

  //automatic fill of the sun
  fill(255,202,27);

  //drawing with multi colored ellipses, behind all other elements except for the background
  //only draws on the main 'page' (aka, no keys pressed)
  if (mouseIsPressed) {
    let rcolor = random(0,255)
    let gcolor = random(0,255)
    let bcolor = random(0,255)

   extraCanvas.noStroke();
   extraCanvas.fill(rcolor,gcolor,bcolor);
   extraCanvas.ellipse(mouseX, mouseY, 8, 8);
 }

 image(extraCanvas, 0, 0);

//Sun gets bigger and has 4 different colors to it when pressed on
  if (mouseIsPressed & dist(mouseX,mouseY,xpos,ypos)<100){
    fill(255,139,100);
    circle(xpos,ypos,600,600);
    fill(255,139,150);
    circle(xpos,ypos,500,500);
    fill(255,139,200);
    circle(xpos,ypos,400,400);
    fill(255,139,255);
    circle(xpos,ypos,300,300);
  }

  //Moonrise/background gets darker like night

  if (keyIsPressed & keyCode === UP_ARROW) {
    background(21,10,62);

    //ellipses used to look like shooting 'stars' floating across the screen

    for (let i = 0; i < 60; i = i +1){
      let x = random(0,width);
      let y = random(0,height);
      let size = random(2,7);
      fill(255,255,255)
      circle(x,y,size);
    }

    //lighter colored 'moon'

    fill(71,84,164);
    circle(xpos,ypos-200,170,170);

    //ellipses the same color as the background overlapped to create the crescent

    fill(21,10,62);
    circle(xpos+50,ypos-200,170,170);

  }

  //Sunsets, sky turns a different color, sun gets orange and moves down
  if (keyIsPressed & keyCode === DOWN_ARROW) {
    background(231,153,172);
    fill(255,139,6);
    circle(xpos,ypos + 150,170,170);
  }
  else {
    circle(xpos,ypos,170,170);
  }

  //mountain range

  //mountain range during sunset/dusk, mountains starting to dance

  if (keyIsPressed & keyCode === DOWN_ARROW){
    let mtntop = random (500,550);
    noStroke();
    fill(87,118,67);
    triangle(30,1000,250,500,500,1000);
    triangle(200,1000,500,mtntop,770,1000);
    triangle(400,1000,750,300,1100,1000);
    triangle(650,1000,1000,400,1300,1000);
    triangle(900,1000,1300,mtntop,1500,1000);
    triangle(1250,1000,1500,600,1750,1000);
  }

  //mountain greens

  else {
    let gcolor = random(176,255);
    fill(192,gcolor,40);
  }

  //night time dancing mountains

  if (keyIsPressed & keyCode === UP_ARROW){
    let mtntop = random(300,700);
    let rcolor = random(0,255);
    let bcolor = random(0,255);
    let gcolor = random(0,255);

    noStroke();
    fill(142,bcolor,186);
    triangle(30,1000,250,400,500,1000);
    triangle(200,1000,500,mtntop,770,1000);
    triangle(400,1000,750,200,1100,1000);
    triangle(650,1000,1000,mtntop,1300,1000);
    triangle(900,1000,1300,500,1500,1000);
    triangle(1250,1000,1500,mtntop,1750,1000);
  }

  //how the mountain range would look in the day time, this 'layer' can also
  //be drawn on with the rainbow ellipses

  else {
    noStroke();
    triangle(30,1000,250,500,500,1000);
    triangle(200,1000,500,600,770,1000);
    triangle(400,1000,750,300,1100,1000);
    triangle(650,1000,1000,400,1300,1000);
    triangle(900,1000,1300,600,1500,1000);
    triangle(1250,1000,1500,600,1750,1000);
  }



}
