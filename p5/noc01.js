var w;
function setup() {
	createCanvas(640,360);
	w = new Walker(width/2,height/2);
}

function draw() {
	background(51);
	w.display();
	w.update();
  
}

function Walker(x,y) {
	this.pos = createVector(x,y);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0.1);	

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function(){
		fill(255);
		ellipse(this.pos.x,this.pos.y,48,48);
	}
}