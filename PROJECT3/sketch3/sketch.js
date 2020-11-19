
let circleSize;
let angle;
let t;
let maxdia;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(250);
  maxdia = 260;
  t = 0.0;

}

function draw() {
        let r = 255 * noise(t+15);
        let g = 255 * noise(t+10);
        let b = 255 * noise(t+20);

        //defining diameter and how large the circle will breathe to
        let diam = 150 + sin(t) * maxdia;
        push();

        //circles giving the illusion of breathing and then creating geometric patterns
        noStroke();
        fill(r, g, b);
        ellipse(100,100,diam, diam);
        ellipse(420,100,diam, diam);
        ellipse(740,100,diam, diam);
        ellipse(1060,100,diam, diam);
        ellipse(1380,100,diam, diam);
        ellipse(1700,100,diam, diam);

        ellipse(100,350,diam, diam);
        ellipse(420,350,diam, diam);
        ellipse(740,350,diam, diam);
        ellipse(1060,350,diam, diam);
        ellipse(1380,350,diam, diam);
        ellipse(1700,350,diam, diam);

        ellipse(100,600,diam, diam);
        ellipse(420,600,diam, diam);
        ellipse(740,600,diam, diam);
        ellipse(1060,600,diam, diam);
        ellipse(1380,600,diam, diam);
        ellipse(1700,600,diam, diam);

        ellipse(100,850,diam, diam);
        ellipse(420,850,diam, diam);
        ellipse(740,850,diam, diam);
        ellipse(1060,850,diam, diam);
        ellipse(1380,850,diam, diam);
        ellipse(1700,850,diam, diam);

        pop();
        t += .1;


}
