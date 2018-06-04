function Obstacle4(){
    this.pos = createVector(2800, height);
    this.vel = createVector(-3, 0);
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
        fill(255);
        stroke(255);
        rect(this.pos.x, this.pos.y-60, 85, 85);
    }
}

