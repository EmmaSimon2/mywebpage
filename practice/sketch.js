
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(173,167,182);




}

function draw() {
  // put drawing code here
  background(0)
   translate(0, height / 2)
   const density = 0.05
   for (let x = 0; x < width; x++) {
       for (let y = 0; y < height; y++) {
           const z = animLoop.noise2D(x * density, y * density) * 0.5 + 0.5
           set(x, y, color(z, 1, 1))
       }
   }
   updatePixels()

}
