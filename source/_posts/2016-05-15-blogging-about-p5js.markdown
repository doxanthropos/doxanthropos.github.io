---
layout: post
title: "Blogging about P5JS"
date: 2016-05-15 15:47:56 +0200
comments: true
categories: p5js javascript processing
---

This is kind of a new version of my old [post about Processing][0] and will cover the things I learned while writing my [last post][1] to make a [P5JS][2]-sketch work on this blog.

<!-- more -->
[P5][2] is somewhat different from the common [Processing][3], because it is a complete rewrite of the language into Javascript. This makes it easier to use on the web and also more flexible to include into a webpage in places where traditional Processing even with Processing.js would not work.

Consider this code that I used to run the sketch in my last post:
``` Javascript
<script src="/javascripts/p5.js"></script>
<script src="/javascripts/p5.dom.js"></script>
<center>
<button onclick="setup();">Restart</button>
</center>
<div id="p5canvas"></div>
<script>
var w;
function setup() {
	var cnv = createCanvas($("#p5canvas").width(),360);
	cnv.parent("p5canvas");
	w = new Walker(width/2,0);
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
```
The first two lines are kind of obvious. They load the necessary p5-libraries into the page.

Line 4 is useful for many sketches that include movement, to start it again at the beginning. The button calls the function "setup" to restart the whole sketch.

The really cool part is line 6 with lines 10 and 11: they create the canvas for the processing sketch in a normal div that is adressed by its id (#p5canvas). This is done with the [p5.dom][4] library that is really good documented (this is where I learned how to do this).

I used jQuery to pass the width of the div to the setup function, so that it would fit into the blog regardless of the size of the window.

One cool consequence of this is that P5 can be inserted into any html element on your website that you can identify via JavaScript/jQuery.

I really like this.


[0]:/blog/2014/06/13/blogging-about-processing/
[1]:/blog/2016/05/15/a-minimalist-physics-engine/
[2]:https://p5js.org/
[3]:https://processing.org/
[4]:http://p5js.org/reference/#/libraries/p5.dom