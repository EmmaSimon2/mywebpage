//color palette for the gradients and shapes
let palette = ["#1EB78E", "#6F64AD", "#D47043", "#B0B538", "#2B3518", "#B1B59B", "#22232B"];
let rs;
let xpos= 500;
let ypos=300;
let xballspeed=5;
let yballspeed=10;
let xballspeed2=1;
let yballspeed2=3;


function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
	rs = random(10000);
}

function draw() {
  //background(200);

  //creates smooth variations of color and waves changing
  randomSeed(rs);


  //pushing the gradient to only be applicable
  push();
  //# of waves & defining color variables
  for (let y = -height/10; y < height; y += height / 15) {
    let c1 = random(palette);
    let c2 = random(palette);
    let c3 = random(palette);

    let gradient = drawingContext.createLinearGradient(20, 10, width, 50);

    //creates 3 places where different colors gradient into each other + colors
    gradient.addColorStop(0.0, c1);
    gradient.addColorStop(random(0.3,0.7), c2);
    gradient.addColorStop(1.0, c3);

    //fill is gradient instead of a normal color
    drawingContext.fillStyle = gradient;
    noStroke();

    //the actual shapes
    beginShape();
    for (let x = -600; x <= width+200; x+=10) {
      let y2 = y + map(noise(rs+y, x / 400, frameCount / 300), 0, 1, -height / 3, height / 3);
      vertex(x, y2);
    }

    //
    vertex(width+500, height);
    vertex(0-600, height);
    endShape();
  }
  pop();

//box and circle
  noStroke();
  fill(random(palette));
  rect(500,300, 700, 350);
  fill(random(palette));
  circle(xpos+15,ypos+15,30);

  xpos += xballspeed;
  ypos += yballspeed;
  //check when ball crosses right side of canvas
  if(xpos > 1170){
  xballspeed = -xballspeed;
  }
  //check when ball crosses left side of canvas
  if(xpos < 500){
  xballspeed = -xballspeed;
  }

  //check for ypos

  //check when ball crosses bottom of canvas
  if(ypos>620){
  yballspeed = -yballspeed;

  }
  //check when ball crosses top of canvas
  if(ypos < 300){
  yballspeed = -yballspeed;
  }



}
