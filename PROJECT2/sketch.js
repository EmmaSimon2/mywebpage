
let treasurelist;
let space;
let sand;

let vase;
let rings;
let lamp;
let gems;


function preload(){
  space = loadImage('https://i.imgur.com/MykNRQQ.png');
  treasurelist = loadImage('https://i.imgur.com/8us9Avz.png');
  sand = loadImage('https://i.imgur.com/OxnUusn.jpg');

  vase = loadImage('https://i.imgur.com/o0WJSMA.png');
  rings = loadImage('https://i.imgur.com/D45LqsI.png');
  lamp = loadImage('https://i.imgur.com/TXuBY6H.png');
  gems = loadImage('https://i.imgur.com/6psuZCL.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(152,150,173);
  frameRate(.5);


}

function draw() {
  
  //sand background
  image(sand,0,0,width,height + 200);

//mini versions of the images pop up at different sizes when ? is pressed as hints
  if(keyIsPressed & keyCode === 191){

    let size = random(7,25);

    image(rings,950,150,size,size);
    image(vase,1200,300,size,size);
    image(lamp,200,800,size,size);
    image(gems,400,500,size,size);
  }

//press spacebar and list pops up

    if(keyIsPressed & keyCode === 32){
      image(treasurelist,605,160,600,600);
    }

    else{
      image(space,515,800,800,80);
    }

    return false; // prevent default

    //image asks user to hit spcebar to see key at bottom of screen
    image(space,515,800,800,80);


}
