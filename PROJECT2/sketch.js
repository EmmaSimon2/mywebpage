
let treasurelist;
let space;
let sand;

let vase;
let rings;
let lamp;
let gems;

let xposring = 950;
let yposring = 150;
let yspeedring = 5;

let x = 0;

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
//  background(152,150,173);
  frameRate(7);


}

function draw() {

  //sand background
  image(sand,0,0,width,height);
//  angleMode(DEGREES);
  //imageMode(CENTER);


//mini versions of the images pop up at different sizes when ? is pressed as hints
  if(keyIsPressed & keyCode === 191){

    let size = random(7,25);

    image(rings,950,150,size,size);
    image(vase,1200,300,size,size);
    image(lamp,700,700,size,size);
    image(gems,300,500,size,size);
  }

  //if mouse hovers over this spot, the falling rings appear
  if(dist(mouseX,mouseY,985,135)<100){
    for (let i = 0; i < 1; i = i + 1){
    image(rings,xposring,yposring,70,70);
    yposring = yposring + yspeedring;
      if(yposring > 300){
        yposring = 100;
      }
    }
  }

//if mouse hovers over, you see blue tinted vase
  if(dist(mouseX,mouseY,1250,650)<100){
    let bcolor = random (0,255);

    push();

    tint(0,100,bcolor);
    image(vase,1200,600,100,100);
    pop();
  }

  //if mouse hovers over, you see a spinning genie lamp
  if(dist(mouseX,mouseY,700,700)<100){

    push();
    imageMode(CENTER);

    translate(700,700);
    rotate(x);
    image(lamp,0,0,150,150);
    x = x + 1;
    pop();
  }

//if mouse is hovered over, you see color changing gems
  if(dist(mouseX,mouseY,350,550)<100){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);

    push();

    tint(rcolor,gcolor,bcolor);
    image(gems,300,500,100,100);
    pop();

  }

  //random other items to mess with people
  if(dist(mouseX,mouseY,600,500)<50){
    image(gems,575,475,50,50);
  }

  if(dist(mouseX,mouseY,1000,700)<75){
    image(gems,967,667,75,75);
  }

  if(dist(mouseX,mouseY,1300,100)<75){
    image(vase,1267,67,75,75);
  }

  if(dist(mouseX,mouseY,400,850)<100){
    image(vase,350,800,100,100);
  }

  if(dist(mouseX,mouseY,1600,600)<100){
    image(lamp,1550,550,100,100);
  }

  if(dist(mouseX,mouseY,100,100)<75){
    image(rings,50,50,75,75);
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

    console.log(mouseX,mouseY);


}
