---
layout: post
title: "A minimalist Physics Engine"
date: 2016-05-15 13:04:03 +0200
comments: true
categories: courses javascript processing p5js
---

[Daniel Shiffman](https://twitter.com/shiffman) surprised me yesterday in his course "[The Nature of Code][0]" with a most simple concept of a physics engine in two lines of JavaScript:

``` Javascript
pos.add(vel);
vel.add(acc);
```
<!-- more -->
<script src="/javascripts/p5.js"></script>
<script src="/javascripts/p5.dom.js"></script>

These two lines have the three components(vectors) that are necessary to describe movement: position, velocity and acceleration:

1. Objects have a position (pos).
2. The position gets changed (add) by velocity (vel).
3. The velocity gets changed (add) by acceleration (acc).

The add-method comes from [P5JS][1] and belongs to the [vector object][2].

Of course to use it in a sketch, there is more to write than these two lines, but they contain the core concept. For example, this code from the course creates a circle that looks like it is falling, because it accelerates downward:

``` Javascript
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
```
<center>
<button onclick="setup();" style="align:right;">Restart</button>
</center>
<div id="p5canvas"></div>
<script>
var w;
function setup() {
  	var cnv = createCanvas($("#p5canvas").width(),360);
  	w = new Walker(width/2,0);
  	cnv.parent("p5canvas");
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

</script>

[0]:https://www.kadenze.com/courses/the-nature-of-code
[1]:https://p5js.org
[2]:linktothevectorobjectsdocumentation