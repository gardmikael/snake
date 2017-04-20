function Ship() {
	this.pos = createVector(width/2, height/2);
	this.r = 40;
	this.angle = PI / 2;
	this.rotation = 0;
	this.vel = createVector(0,0);
	this.isThrusting = false;


	this.thrusting = function(b){
		this.isThrusting = b;
	}
	this.render = function (){
		translate(this.pos.x, this.pos.y);
		fill(0);
		stroke(255);
		rotate(this.angle + PI / 2);
		triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
	}

	this.update = function() {
		if(this.isThrusting){
			this.thrust();
		}
		this.pos.add(this.vel);
	}

	this.setRotation = function(a){
		this.rotation = a;
	}

	this.turn = function (){
		this.angle += this.rotation;
	}
	this.thrust = function (){
		var force = p5.Vector.fromAngle(this.angle);
		force.mult(0.1);
		this.vel.add(force);
	}

	this.edges = function(){
		if(this.pos.x > width + this.r){
			this.pos.x = -this.r;
		}else if(this.pos.x < 0 - this.r){
			this.pos.x = width + this.r;
		}else if(this.pos.y > height + this.r){
			this.pos.y = -this.r;
		}else if(this.pos.y < 0 - this.r){
			this.pos.y = height + this.r;
		}
	}

}