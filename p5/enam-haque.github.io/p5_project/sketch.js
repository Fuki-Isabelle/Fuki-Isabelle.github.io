let quad;
let obstacle1;
let obstacle2;
let obstacle3;
let obstacle4;
let obstacle5;

function setup() {
  createCanvas(600, 400);
  quad = new Quad();
  obstacle1 = new Obstacle1();
  obstacle2 = new Obstacle2();
  obstacle3 = new Obstacle3();
  obstacle4 = new Obstacle4();
  obstacle5 = new Obstacle5();
}

function keyPressed(){
  if (key == ' ' && quad.pos.y >= 380){
    var jump = createVector(0, -5);
    quad.applyForce(jump)
  }

}

let x = 0;

function draw() {
    background(55);
    translate(-quad.pos.x+50, 0);

    var gravity = createVector(0, .1);
    quad.applyForce(gravity);

    quad.update();
    quad.edges();
    quad.display();
    obstacle1.update();
    obstacle1.display();
    obstacle2.update();
    obstacle2.display();
    obstacle3.update();
    obstacle3.display();
    obstacle4.update();
    obstacle4.display();
    obstacle5.update();
    obstacle5.display();


}



