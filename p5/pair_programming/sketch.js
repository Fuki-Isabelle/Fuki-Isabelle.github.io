let bubbles = [];
var song;
var counter = 0;
var timeleft = 50;

function preload(){
    song = loadSound("bubblepop.mp3");
}

function setup() {
  createCanvas(600, 400);
  var timer = select('#timer');
  timer.html(timeleft - counter);


  function timeIt() {
      if ((timeleft - counter) && (timeleft > 0)) {
      counter++;
      timer.html(timeleft - counter);
      }
      let mytimer = (timeleft - counter);
      if (mytimer == 0){
          noLoop();
      }
  }
  setInterval(timeIt, 1000);

  for (let i = 0; i < 100; i++){
    bubbles[i] = new Bubble();
   }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++)
    {
         bubbles[i].show();
         bubbles[i].move();
     }
 }


function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked();
    }
}


