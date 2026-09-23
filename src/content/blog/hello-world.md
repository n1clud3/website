---
title: "Hello, world!"
description: "The first article on my blog."
pubDate: 2026-09-23T17:59
author: "n1clude"
heroImage: "/favicon-192x192.png"
---

# Hello, world!

I have finally set this up! I'm excited to start writing.

I've been thinking of what the first post should be about. I decided to write about the development of this website.

## First attempt

I've been noticing that my friends and university acquaintances had their own little websites. Mostly a simple link page, but some also had little blogs. I was inspired by them. And so I desired of creating my own website.

In 2025, I bought the domain, **niclude.xyz**. Nice one if you ask me. And cheap too. Then came the time to actually develop the site. The first attempt was, uhh, boring. I couldn't decide on which framework I want to build my site on, so I chose plain HTML + CSS that time. I made the index.html, sketched some design. It was like, full monospace. With orangey hues.

I added some minimal content, namely "about me", contacts and services the domain was hosting back then. Threw the code on GitHub Pages and called it a day.

## A drastic overhaul

After a short 1 month pause, I have returned to my website development. I've grown to hate the old design by that time, so I wanted to redo it. Made a new design in Figma. I was inspired by the old minimalistic box arts and applied that design to my page. A contrast background for a header, the website name in Sans font. Then, a fine background photo from Tatran mountains at Štrbske pleso and an array of informational "cards" arranged vertically.

![The second design](/blog/hello-world-attempt-2-design.png)

This new design also used orange color (lmao). *By the way*, I will publish that background photo later on my gallery. When I implement it of course.

Then I implemented it, pushed to GitHub and quickly forgot about its existence.

## This revision

I then abandoned the website state for an even longer period. 3-4 months. Well, technically a shorter period -- the last commit was 2 months ago. But that was about removing some info, so I wouldn't count that as "updating the website".

And now here's the new website. New design, new technologies. How did it come to exist this time?

### The design

I took the *"you are connected to a terminal"* design approach from my first attempt, and I revised it drastically. Reading the text in monospace will strain your eyes, so I opted in the nice serif document design instead. And you can also see the little *prompts* you *"were typing out"* to read the contents. The "enhanced" `cat` command is scanning for the document type, and parses it into a *pretty document* for a proper reading experience. At least that's the idea behind this layout.

I refused to apply rounded corners to anything on this website. Rounded corners are for modern apple slop designs. Hard corners are for chads :-^)

All links have strong constrast hightlight on hover.

### The tech

Previously all the attempts were written in pure HTML and CSS. This time I was exploring the alternative options to this caveman approach. Talked with ChatGPT for a bit. It suggested various options, among which was *[Astro](https://astro.build)*. I've checked out what is it capable of. I heard many good things about it. So that was my choice. I liked it.

And I currently like it! It allows templates, components and stuff like that while achieving static site performance. The same features I'd previously only find in frontend frameworks like React or Vue. I had not done a full-blown research and comparison though, and Astro may not be a perfect choice for my scope. But it works, and works good for now.

I can also write my own **blog** now with Astro's Markdown rendering! Mind you, I could make a blog at a *first attempt* period of the website, copy-pasting the HTML template for blog and slowly going insane from that. Thank you, me, for choosing Astro.

### The hosting

The website code is hosted on a GitHub repo, open for everyone. The website itself is built and hosted on *[Render](https://render.com)*. I chose Render due to hearing good things about it in the past. I was daring to deploy something on it. And it is functioning nice, I guess. I don't have a lot of CI/CD experience, so I can't comment more on that.

## Closing words

All in all, I'm happy with current website. For now.

Thank you for reading the post. I appreciate it. See you for more.
