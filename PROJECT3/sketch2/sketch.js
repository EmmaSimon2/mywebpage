
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let x11;
let y11;
let x22;
let y22;
let x33;
let y33;
let x44;
let y44;

let x111;
let y111;
let x222;
let y222;
let x333;
let y333;
let x444;
let y444;

let offset;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(55);

  offset = 0.0;
  noFill();

}

function draw() {

  //colors with noise
  let r = 255 * noise(offset+15);
  let g = 255 * noise(offset+10);
  let b = 255 * noise(offset+20);

  stroke(r,g,b);


  //bezier 1 at top left screen
  push();
  x1 = noise(offset)*1200;
  y1 = noise(offset+50)*600;

  x2 = noise(offset+10)*1200;
  y2 = noise(offset+60)*600;

  x3 = noise(offset+20)*1200;
  y3 = noise(offset+70)*600;

  x4 = noise(offset+30)*1200;
  y4 = noise(offset+80)*600;

  bezier(x1,y1,x2,y2,x3,y3,x4,y4);
  pop();

  //bezier 2 at mid right screen

  push();
  x11 = noise(offset+15)*2200;
  y11 = noise(offset+75)*900;

  x22 = noise(offset+30)*2200;
  y22 = noise(offset+90)*900;

  x33 = noise(offset+45)*2200;
  y33 = noise(offset+105)*900;

  x44 = noise(offset+60)*2200;
  y44 = noise(offset+120)*900;

  bezier(x11,y11,x22,y22,x33,y33,x44,y44);
  pop();

  //bezier 3 at bottom left screen
  push();
  x111 = noise(offset)*1000;
  y111 = noise(offset+25)*1200;

  x222 = noise(offset+5)*1000;
  y222 = noise(offset+30)*1200;

  x333 = noise(offset+10)*1000;
  y333 = noise(offset+45)*1200;

  x444 = noise(offset+15)*1000;
  y444 = noise(offset+60)*1200;

  bezier(x111,y111,x222,y222,x333,y333,x444,y444);
  pop();

  offset += 0.01;
}
