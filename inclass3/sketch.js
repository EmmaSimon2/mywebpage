
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(173,167,182);

}

function draw() {
  // put drawing code here

  for (let counter=0; counter < windowWidth; counter = counter + 30){
    for (let j=0; j < windowHeight; j = j + 30){
      let rcolor = random (0,255);
      let bcolor = random (0,255);
      let gcolor = random (0,255);

      fill(rcolor,bcolor,255);
      triangle(counter+15,j+30,counter+30,j,counter+30,j+30);

      if (counter == j){
        fill(255,bcolor,gcolor);
        triangle(counter, j,counter +30,j, counter+15,j+30);
      }

      else{
        fill(rcolor,255,gcolor);
        triangle(counter, j,counter +30,j, counter+15,j+30);
      }


    }
    }



}
