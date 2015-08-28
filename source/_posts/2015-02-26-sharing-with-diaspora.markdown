---
layout: post
title: "Sharing with Diaspora"
date: 2015-02-26 21:28:11 +0100
comments: true
categories: socialnetworks
---

In the last weeks, I had some reasons to think about privacy issues and social networks. I stopped using Facebook and began using [Diaspora*][0] and [GNU/Social][1] more than before. So when I found a [sharing service][2] earlier today, to share webpages into the Diaspora * [Federation][3], I used it as an excuse to get rid of the Twitter button and the Disqus comments and put in the Code to share to Diaspora * .

If you want to do the same, you will find the part of Octopress, that covers the sharing codes in "source/_includes/post/sharing.html". Just put in the code from the sharing site and you are good to go:

``` html Diaspora sharing link, without JavaScript
<a href="http://sharetodiaspora.github.io/?title=Your title here&url=http://www.example.com/some/path" target="_blank">
<img src="http://sharetodiaspora.github.io/favicon.png" style="border: 0px solid;" />
</a>
```

I only changed it a little, of course filling in the template code for the post-title and post-url:

{% include_code Diaspora sharing link with Octopress Tags diaspora.html %}

[0]: https://diasporafoundation.org/
[1]: https://www.gnu.org/software/social/
[2]: https://sharetodiaspora.github.io/about/
[3]: http://the-federation.info/
