  function Bubble(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.col = color(random(255), random(255), random(255));


  this.show = function() {
    fill(this.col);
    ellipse(this.x, this.y, 30, 30)

  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 15){
      this.x = this.x + 1000000;
      song.play();
    }

  }

  this.move = function() {
    if(this.x/2 - this.x > width)
    {
      this.x = -this.x;
    }
    else {
      this.x += random(-2,2);
    }
    if (this.y/2 - this.y > height)
    {
      this.y = -this.y;
    }
    else {
      this.y += random(-2,2);
    }
  }
}
