

let cherryList = [];
let hoodieList = [];

let xposListCherry = [];
let yposListCherry = [];
let yspeedListCherry = [];

let xposListHoodie = [];
let yposListHoodie = [];
let yspeedListHoodie = [];

let numofobjects = 30;

function preload(){

  for (let i = 0; i < numofobjects; i = i + 1){
    cherryList[i] = loadImage('https://i.imgur.com/1e9hT8J.png');
    hoodieList[i] = loadImage('https://i.imgur.com/xSA2j6u.png');


  }




}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < numofobjects/2; i = i + 1){

    xposListCherry[i] = random(0,windowWidth);
    yposListCherry[i] = 0;
    yspeedListCherry[i] = random(1,20);

    xposListHoodie[i] = random(0,windowWidth);
    yposListHoodie[i] = 0;
    yspeedListHoodie[i] = random(1,20);
  }



}

function draw() {
  // put drawing code here

  background(205,129,169);
 for (let i = 0; i < numofobjects; i = i + 1){

    image(cherryList[i],xposListCherry[i],yposListCherry[i],300,250);
    yposListCherry[i] = yposListCherry[i] + yspeedListCherry[i];


    image(hoodieList[i],xposListHoodie[i],yposListHoodie[i],200,150);
    yposListHoodie[i] = yposListHoodie[i] + yspeedListHoodie[i];


    if (yposListCherry[i] > height){
      yposListCherry[i]=0;
    }

    if (yposListHoodie[i] > height){
      yposListHoodie[i]=0;
    }

 }



}
