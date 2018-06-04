function Obstacle3(x){
    this.pos = createVector(x, height);
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
        fill(234,189,204);
        stroke(255);
        rect(this.pos.x, this.pos.y-40, 40, 40);
    }
    this.collide3 = function(){
    if(this.pos.x < quad.pos.x + 40 && this.pos.x + 40 > quad.pos.x &&
       ((this.pos.y + 40 > quad.pos.y && quad.pos.y + 40 > this.pos.y) || quad.pos.y == this.pos.y))
        {
           noLoop();
        }
    }
}

