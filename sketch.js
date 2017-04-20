var ship;
var asteriods = [];
var NUMBER_OF_ASTEROIDS = 8;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	for (var i = 0; i < NUMBER_OF_ASTEROIDS; i++) {
		asteriods.push(new Asteroid());	
	}
	
}

function draw() {
	background(0);

	for (var i = 0; i < asteriods.length; i++) {
  		if(ship.hits(asteriods[i])){
  			console.log("ship crashed");
  			//code for crash ..end game
  		}
  		asteriods[i].render();
  		asteriods[i].update();
  		asteriods[i].edges();
  	}

  	ship.render();
  	ship.turn();
  	ship.update();
  	ship.edges();


  	

}

function keyPressed() {

	if(keyCode == RIGHT_ARROW){
		ship.setRotation(0.1);

	} else if(keyCode == LEFT_ARROW){
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW){
		ship.thrusting(true);
	}
}

function keyReleased(){
	ship.setRotation(0);
	ship.thrusting(false);
}