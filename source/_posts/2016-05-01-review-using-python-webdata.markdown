---
layout: post
title: "Review: Using Python to Access Web Data"
date: 2016-05-01 13:15:05 +0200
comments: true
categories: python, courses
published: false
---
In the [last review][advresp] I mentioned [Doctor Chuck][drchuck](more formally called Dr. Charles R. Severance) from the [University of Michigan][umich], now I have also worked through a course made by him on Coursera, called "[Using Pyton to Access Web Data][webpy]", that aims to teach how to use different kinds of data from the web with Python.

<!--more -->

Usually this course is not advised to be taken as a stand alone course, instead it is one part of the [Programming for Everybody (Getting started with Python)][everybody] specialization and not the first one. I thought, I could skip the previous courses, because I already knew some Python and the content of these courses did not seem that new to me; from my experiences with this course, I would assume, that I was right.

While my experiences with other similar languages are limited (I know a little Ruby and basically no Perl), Python seems to be a good language, to work with data from different sources. This course goes through the differing methods, with which data can be presentend on the web and how to use these with Python, covering common webpages, xml and JSON, with some explanations on REST-APIs and other useful knowlegde to understand the context (just like the course on [Responsive Design][advresp]).

The content of this course is mostly the same as in chapters 11, 12 and 13 of the book [Python for Informatics: Exploring Information][pythonbook].

## So what did I learn?


### Regular Expressions in Python
``` python 
import re
```

regex in python

### What are sockets and how to use them in Python?

``` python
import socket
```

 working with sockets

### Working with data from web adresses and parsing xml

``` python
import urllib
import xml.etree.ElementTree as ET
```



[advresp]:/blog/2016/04/10/review-advanced-styling-with-responsive-design/
[webpy]: https://www.coursera.org/learn/python-network-data
[drchuck]:http://www.dr-chuck.com/
[umich]:https://www.umich.edu/
[everybody]:https://www.coursera.org/learn/python/
[pythonbook]:http://www.pythonlearn.com/html-270/
