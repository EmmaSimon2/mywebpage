

let cherryList = [];
let hoodieList = [];

let xposList = [];
let yposList = [];


let yspeedList = [];

function preload(){

  for (let i = 0; i < 50; i = i + 1){
    cherryList[i] = loadImage('https://i.imgur.com/1e9hT8J.png');
    hoodieList[i] = loadImage('https://i.imgur.com/xSA2j6u.png');

    xposList[i] = random(0,windowWidth);
    yposList[i] = 0;

    yspeedList[i] = random(1,20);

  }

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here

  background(205,129,169);
  for (let i = 0; i < 50; i = i + 1){

    image(cherryList[i],xposList[i],yposList[i],300,250);
    image(hoodieList[i],xposList[i],yposList[i],200,150);


    yposList[i] = yposList[i] + yspeedList[i];
  }

}
