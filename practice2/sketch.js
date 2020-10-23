

let cherryList;

function preload(){

  cherryList = loadImage('https://i.imgur.com/1e9hT8J.png');


}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here

  background(205,129,169);
  image(cherryList,0,0);


}
