
function setup() {
  // put setup code here
  createCanvas(500,500);
  background(217,183,65);
}

function draw() {
  // put drawing code here
  noStroke(0);
  fill(144,183,192);
  rect(150,200,200,200);
  fill(144,183,192);
  rect(125,350,250,70);

  fill(45);
  triangle(125,200,250,100,375,200);
  fill(144,183,192);
  triangle(125,300,250,225,375,300);

}
