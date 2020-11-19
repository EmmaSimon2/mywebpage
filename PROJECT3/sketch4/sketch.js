let t;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(300);
  t = 0;
}

function draw() {
  // fading background gives the illusion of tracers
  background(0, 15);

  //balls bouncing up and down at different rates
  let x = 200;
  let y = height * noise(t+10);

  let x2 = 400;
  let y2 = height * noise(t+15) ;

  let x3 = 600;
  let y3 = height * noise(t+100);

  let x4 = 800;
  let y4 = height * noise(t+65);

  let x5 = 1000;
  let y5 = height * noise(t+40);

  let x6 = 1200;
  let y6 = height * noise(t+10);

  let x7 = 1400;
  let y7 = height * noise(t+35);

  let x8 = 1600;
  let y8 = height * noise(t+15);

//each ball is continuosly changing colors
  let r = 255 * noise(t+10);
  let g = 255 * noise(t+15);
  let b = 255 * noise(t+20);

//  noStroke();
  push();
  fill(r, 100, b);
  ellipse(x, y, 50, 50);
  t = t + 0.01;
  pop();

  push();
  fill(100, g, b);
  ellipse(x2, y2, 150, 150);
//  t = t + 0.1;
  pop();

  push();
  fill(r, g, b);
  ellipse(x3, y3, 250, 250);
  pop();

  push();
  fill(r, 200, b);
  ellipse(x4, y4, 200, 200);
  pop();

  push();
  fill(r, g, 200);
  ellipse(x5, y5, 150, 150);
  pop();

  push();
  fill(255, g, b);
  ellipse(x6, y6, 100, 100);
  pop();

  push();
  fill(r, g, b);
  ellipse(x7, y7, 50, 50);
  pop();

  push();
  fill(r, g, 100);
  ellipse(x8, y8, 20, 20);
  pop();


//sporadic but not too fast
 t = t + 0.02;
}
