//array for the circles on screen
let c = [];
//let circle = [];
//amount of noise
let noiseMul = 0.01;
let channel;
let noiseoffset;


function setup() {
	createCanvas(windowWidth, windowHeight);

  //background changing color
  let r = random(0,255);
  let b = random(0,255);
  let g = random(0,255);
	background(r,g,b);

  //colors in HSB insted of RGB for optimum color
	colorMode(HSB,100);

  //changes the channels
	channel = random(30,50);
	noiseoffset = createVector(1,10);
	let span = 10;
	let i = 0;
	for(let x = -10 ; x < width+10; x += span)
	{
		for(let y = -10; y < height+10; y += span)
		{
			c[i] = createVector(x,y);
			i++;
		}
	}

  frameRate(50);

}

function draw()
{

  //line color changing with each frame count
	noStroke();
	fill(frameCount%100,100,100);
	for(let i = 0; i < c.length; i ++)
	{
		let noiseValue = noise((c[i].x + noiseoffset.x)*noiseMul, (c[i].y + noiseoffset.y)*noiseMul);
		let r = map(noiseValue,0,1,0,PI*channel);
		c[i].add(createVector(cos(r),sin(r)));
    //size of ellipses that form lines
		ellipse(c[i].x,c[i].y,1.5,1.5);

	}

//  ellipse(windowWidth/2,windowHeight/2,100,100);
//after 150 frames, sketch resets to black backround, with each refresh less of
//the lines continue drawing and what was once a continuous calming sketch initDots
//something that looks like its falling apart
  if (frameCount % 200 == 0) {
    let r = random(0,255);
    let b = random(0,255);
    let g = random(0,255);
  background(r,g,b);
  }
}
