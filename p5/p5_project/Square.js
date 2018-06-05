function Quad(){
    this.pos = createVector(50, height);
    this.vel = createVector(random(5.2,5.5), 0);
    this.acc = createVector(random(1,1.1), 0);

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
    this.edges = function(){
        if (this.pos.y > height){
            this.vel.y *= 0;
            this.pos.y = height;
        }
    }

}

