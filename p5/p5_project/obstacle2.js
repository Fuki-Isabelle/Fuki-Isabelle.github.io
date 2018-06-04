function Obstacle2(x){
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
        fill(13,27,56);
        stroke(255);
        rect(this.pos.x, this.pos.y-50, 90, 90);
    }
    this.collide2 = function(){
    if(this.pos.x < quad.pos.x + 50 && this.pos.x + 50 > quad.pos.x &&
       ((this.pos.y + 50 > quad.pos.y && quad.pos.y + 50 > this.pos.y) || quad.pos.y == this.pos.y))
        {
            noLoop();
        }
    }
}