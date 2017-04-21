var snake;

function setup() {
	createCanvas(400, 600);
  snake = new Snake();
  frameRate(5);
}

function draw() {
	background(0);
  snake.render();
  snake.update();

}

function keyPressed() {
	
	if(keyCode == RIGHT_ARROW){
    snake.move(snake.scale, 0);
	}else if(keyCode == LEFT_ARROW){
		snake.move(-snake.scale, 0);   
	}else if (keyCode == UP_ARROW){
		snake.move(0, -snake.scale);    
	}else if(keyCode == DOWN_ARROW){
    snake.move(0, snake.scale);    
  }
}
