function Obstacle5(){
    this.pos = createVector(2900, height);
    this.vel = createVector(-3.5, 0);
    this.acc = createVector(0, 0);

    this.applyForce = function(force){
        this.acc.add(force);
    }
    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }
    this.display = function(){
        fill(160);
        stroke(255);
        triangle(this.pos.x, 100, 320, 100, 310, 80);
    }
}

