let quad;
let obstacle1 = [];
let obstacle1dist = 500;
let obstacle2 = [];
let obstacle2dist = 1200;
let obstacle3 = [];
let obstacle3dist = 2100;
let obstacle4 = [];
let obstacle4dist = 2700;


function setup() {
  createCanvas(600, 400);
  quad = new Quad();
   for (let i = 0; i < 8; i++){
    obstacle1[i] = new Obstacle1(obstacle1dist)
    obstacle1dist += 1800;
   }
  for (let i = 0; i < 5; i++){
    obstacle2[i] = new Obstacle2(obstacle2dist)
    obstacle2dist += 1400;
   }
  for (let i = 0; i < 8; i++){
    obstacle3[i] = new Obstacle3(obstacle3dist)
    obstacle3dist += 2000;
   }
   for (let i = 0; i < 7; i++){
    obstacle4[i] = new Obstacle4(obstacle4dist)
    obstacle4dist += 2600;
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
    for (let i = 0; i < obstacle2.length; i++)
        {
             obstacle2[i].update();
             obstacle2[i].display();
             if (obstacle2[i].collide2(quad)){
                setup();
                loop();
                }
         }
    for (let i = 0; i < obstacle3.length; i++)
        {
             obstacle3[i].update();
             obstacle3[i].display();
             if (obstacle3[i].collide3(quad)){
                setup();
                loop();
                }
         }
    for (let i = 0; i < obstacle4.length; i++)
        {
             obstacle4[i].update();
             obstacle4[i].display();
             if (obstacle4[i].collide4(quad)){
                console.log("obstacle4.collide4");
                }
         }
}




