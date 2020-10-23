

let img1;
//let partImage;

function preload(){

  img1 = loadImage('https://i.imgur.com/60QRCZy.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
//  image(img1,0,0,300,250);
  //partImage = get(100,100,110,100);
//  background(220,129,169);

}

function draw() {
  // put drawing code here
  background(220,129,169);
//  for(let i = 0; i < width; i = i + 110){
//    for(let j = 0; j < height; j = j + 100){
//      tint(random(0,255),random(0,255),random(0,255));
//      image(partImage,i,j);
//    }
//  }
  image(img1,0,0,400,400);

  blend(img1,100,200,110,100,800,100,110,100,DIFFERENCE);


  //image(partImage,1000,0);



}
