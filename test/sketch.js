
function setup() {
  // put setup code here
  createCanvas(500,500);
  background(217,183,65);
}

function draw() {
  // put drawing code here
  // house, blue
  noStroke(0);
  fill(144,183,192);
  rect(150,200,200,200);
  fill(144,183,192);
  rect(125,350,250,70);
  //house poles, yellow
  fill(217,153,65);
  rect(125,300,10,70);
  fill(217,153,65);
  rect(365,300,10,70);
  fill(217,153,65);
  rect(285,300,10,70);
  fill(217,153,65);
  rect(210,300,10,70);
  //railing, yellow
  fill(217,153,65);
  rect(125,350,90,20);
  fill(217,153,65);
  rect(285,350,90,20);


  //roof
  fill(216,80,65);
  rect(125,300,250,5);
  //staircase, rosybrown
  fill(150,113,65);
  rect(217,375,70,70);
  //door, red
  fill(216,80,65);
  rect(235,312,30,50);

  fill(45);
  triangle(125,200,175,100,375,200);
  fill(45);
  triangle(125,200,325,100,375,200);
  fill(45);
  rect(175,100,150,100);

  fill(144,183,192);
  triangle(125,300,250,225,375,300);

  stroke(217,153,65);
  ellipse(250,250,15,30);

}
