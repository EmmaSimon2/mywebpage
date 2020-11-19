
let inc = 0.1;
let scl = 30;
let cols;
let rows;
let offset;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(152,150,173);
  //columns and rows where the lines exist
  cols = floor(windowWidth/scl);
  rows = floor(windowHeight/scl);
  offset = 0.0;

}

function draw() {
  let yoffset = 0;

  for(let i = 0; i < rows; i++){
    let xoffset = 0;
    for(let j = 0; j < cols; j++){
    //length varying up to 50
      let r = noise(xoffset, yoffset) * 50;

      //creating a vector instead of pixels to be edited, 2 circumference
      let v = p5.Vector.fromAngle(random(TWO_PI));

      xoffset += inc;

      //colors of stroke change when refreshed
      let rcol = 255 * noise(offset+15);
      let gcol = 255 * noise(offset+10);
      let bcol = 255 * noise(offset+20);

      stroke(rcol,gcol,bcol);

      push();
      // translating the lines across the screen
        translate(j * scl, i * scl);
        rotate(v.heading());
        line(0,0,r,0);
      pop();
    }
    yoffset += inc;
  }

  //at 150 frame counts window refreshes and starts over
  if (frameCount % 250 == 0) {
	background(152,150,173);
  }

}
