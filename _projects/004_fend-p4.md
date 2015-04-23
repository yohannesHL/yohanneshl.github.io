---
layout: project
title: Mobile Website Performance Optimisation
skills: [Chrome Developer Tools, JavaScript, Node.js, Grunt.js]
fields: [Front-End, Performance, Optimisation]
date: 2015-01-21 00:00:00
thumbnail: nd04-2.png
project_url: https://yohanneshl.github.io/frontend-nanodegree-mobile-portfolio/production/
images: [ nd04-1.png, nd04-2.png, nd04-3.png]
---
##Mobile and Desktop Website Performance Optimization - using chrome developer tools, ngrok, pagespeed index, node.js and grunt.js .


Here I demonstrate how to perform mobile website optimization of the critical rendering path and frame rate to minimize page loading time and improve speed of website. Chrome developer tools is used to analyse performance measures and ngrok+pagespeed index is used to measure performance via pagespeed index API. I have used grunt to automate most of the optimization tasks.

Issuing the command ```grunt production``` fires up the optimization process. This automated repetitive tasks suchas minimizing html/css/js, optimizing images, inlining css/js/images, linting, start up server and measure psi etc.