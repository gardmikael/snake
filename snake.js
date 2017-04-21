function Snake(){
	this.pos = createVector();
	this.speed = createVector();
	this.scale = 20;

	this.pos.x = width/2;
	this.pos.y = height/2;


	this.render = function(){
		rect(this.pos.x, this.pos.y, this.scale, this.scale);
	}

	this.update = function(){
		this.pos.x = this.pos.x + this.speed.x;
		this.pos.y = this.pos.y + this.speed.y;
	}

	this.move = function(x,y){
		this.speed.x = x;
		this.speed.y = y;
	}
}