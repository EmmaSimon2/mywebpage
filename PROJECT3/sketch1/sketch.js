let inc = 0.1;
let scl = 30;
let cols;
let rows;
let fr;
//3rd 'dimension'
let zoffset = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //columns and rows for the lines
  cols = floor(width/scl);
  rows = floor(height/scl);
  offset = 0.0;
  fr = createP('');


}

function draw() {

  background(232,255,96);

  let yoffset = 0;

  for(let i = 0; i < rows; i++){
    let xoffset = 0;
    for(let j = 0; j < cols; j++){

      //for the vector
      let angle = noise(xoffset, yoffset, zoffset) * TWO_PI;
      //creating vectors from the angle
      let v = p5.Vector.fromAngle(angle);

      xoffset += inc;

      //different stroke color and weights when refreshed
      let r = 255 * noise(offset+15);
      let g = 255 * noise(offset+10);
      let b = 255 * noise(offset+20);
      let w = noise(xoffset, yoffset) * 8;
      stroke(r,g,b);
      strokeWeight(w);

      push();
      //placement across screen
        translate(j * scl, i * scl);
        //rotating the vector
        rotate(v.heading());
        line(0,0,scl,0);
      pop();
    }

    yoffset += inc;
    zoffset += 0.001;



  }

  fr.html(floor(frameRate(10)));

}
