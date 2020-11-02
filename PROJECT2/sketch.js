
let treasurelist;
let space;
let sand;

function preload(){
  space = loadImage('https://i.imgur.com/MykNRQQ.png');
  treasurelist = loadImage('https://i.imgur.com/8us9Avz.png');
  sand = loadImage('https://i.imgur.com/OxnUusn.jpg')


}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(152,150,173);




}

function draw() {


  image(sand,0,0,width,height);
//press spacebar and list pops up

    if(keyIsPressed & keyCode === 32){
      image(treasurelist,605,160,600,600);

    }

    else{
      image(space,515,800,800,80);

    }

    return false; // prevent default
    //image asks user to hit spcebar to see key
    image(space,515,800,800,80);


}
