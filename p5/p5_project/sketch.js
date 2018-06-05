let quad;
let obstacle1 = [];
let obstacle1dist = 1500;


function setup() {
  createCanvas(600, 400);
  quad = new Quad();
   for (let i = 0; i < 200; i++){
    obstacle1[i] = new Obstacle1(obstacle1dist)
    obstacle1dist += random(1900,2000);
   }
}

function keyPressed(){
  if (key == ' ' && quad.pos.y >= 380){
    var jump = createVector(0, -4.8);
    quad.applyForce(jump)
  }

}

let x = 0;

function draw() {
    background(55);
    translate(-quad.pos.x+50, 0);

    var gravity = createVector(0, .132);
    quad.applyForce(gravity);
    quad.update();
    quad.edges();
    quad.display();
    for (let i = 0; i < obstacle1.length; i++)
        {
             obstacle1[i].update();
             obstacle1[i].display();
             if (obstacle1[i].collide1(quad)){
                setup();
                loop();
                }
         }
}




