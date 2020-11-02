

let img;

function preload(){

  img = loadImage('https://i.imgur.com/oBrveC1.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(220,129,169);
}

function draw() {
  // put drawing code here
  img.loadPixels();

  for(let x = 0; x < img.width; x = x + 1){
    for(let y = 0; y < img.height; y = y + 1){
      let i = (x + y * img.width ) * 4;

      let pixr = img.pixels[i+0];
      let pixg = img.pixels[i+1];
      let pixb = img.pixels[i+2];
      let pixa = img.pixels[i+3];

      if(pixr > 125){
        img.pixels[i+0] = 0;
      }
    }
  }

  img.updatePixels();
  image(img,100,100);


}
