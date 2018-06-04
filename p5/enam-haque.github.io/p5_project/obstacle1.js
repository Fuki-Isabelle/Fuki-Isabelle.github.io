function Obstacle1(){
    this.pos = createVector(500, height);
    this.vel = createVector(-1, 0);
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
        rect(this.pos.x, this.pos.y-50, 50, 50);
    }

}

