---
layout: post
title: "Blogging about Processing"
date: 2014-06-13 14:56:31 +0200
comments: true
categories: processing creative coding
---

UPDATE: I removed the processing.js from the head, because it meant unneccessary page load on the blog and because [P5.js](https://p5js.org). It also works, if you put it in the article, like I did here, after the "more"-break, so that it only loads when someone is actually viewing the post that contains the Processing example.

Some notes about Processing

<!-- more -->
<script src="/javascripts/processing.min.js"></script>
### Creative Coding MOOC

Since last week there is a course about creative coding on [Futurelearn](https://www.futurelearn.com "a mooc provider"), held by John McCormack from the Monash University. It started great and was already very successful in motivating the participants to combine art and programming. The language of choice is [Processing](http://processing.org/), a Java-based language, that provides easy access to the kind of functions that are usually needed to make art on the computer.

#### Showing Processing on the web

Since art wants to be seen, there is of course a need to have a way of showing the code and its running examples to others. Processing already comes with some ways to do that. You can for example build an android app from your code or a standalone Java-Program. But the way to go, to show something to an audience today qould of course be the web.

#### Openprocessing and sketchpad

Two websites are explicitely dedicated to the cause of showcasing Processing-sketches: [Openprocessing](http://www.openprocessing.org/) and [Sketchpad](http://sketchpad.cc/). Both provide not only the possibility to share your existing sketches and show them online, but also to create new ones online.

#### Processing.js

Both these sites use [Processing.js](http://processingjs.org/), a port of the Processing language to Javascript. With Processing.js, it is possible to run sketches in any browser that supports modern web technologies (Javascript, Canvas). So theoretically it is possible, to show sketches on any webpage, not only on the sites that are built to do that. For example on your own website or blog. The pragmatic way to achieve that, would be to embed sketches from Openprocessing or Sketchpad in that site, but why not go the fully self sufficient route?

#### simple HTML-page

There is not much to know, to use Processing on a simple html-page. All the steps are explained on the [Quick Start Article](http://processingjs.org/articles/p5QuickStart.html) from Processing.js.
In short: You just put the Prcessing.js file in place, where you store your other Javascripts, load them in the head of your webpage and ten you can add a Canvas element, that loads your sketch.

#### Octopress

But what, if your website is done the hacker way, if it is an [octopress](http://octopress.org/) blog on github?

Basically it's the same as using Processing.js on any other html-page.
#### Where to put the Processing.js?

Octopress has a folder named "javascripts" and that would be where to put the Processing.js file. Of course, you will want to put it in the source/javascripts folder, so that it will not vanish when you rebuild the blog.

#### Where is the head of my template?

Since the Javascript is usually placed in the head-section of a webpage, you need to put the reference to Processing.js into the head.html file that is located in the source/_includes folder in the same place, where you find the other Javascript references. It will look somewhat like this:

    <script src="{{ root_url }}/javascripts/processing.min.js"></script>

#### Making your sketches a comfortable home

To have some order in my files, I decided to make a folder with the name "processing" for all the sketches, that I might want to share with the world. Of course also in the "source" folder. Now I can put any sketch that I want to include in a blogpost in this folder and load it into a canvas-element, just like this:

    <center>
    <canvas data-processing-sources="/processing/tutorial.pde"></canvas>
    </center>

This is the a sketch from the ["getting started" tutorial](http://processing.org/tutorials/gettingstarted/) on the processing site and on this blog it looks like this:

<center>
<canvas data-processing-sources="/processing/tutorial.pde"></canvas>
</center>
