---
layout: project
title: Fullstack vue news
skills: [HTML5, CSS3, Loopback, MongoDB, Nuxt, VueJS, Vuex, Vuetify, Auth0, Heroku, Docker]
fields: [Fullstack]
date: 2017-12-20 00:00:00
thumbnail: 1.png
project_url: https://github.com/yohanneshl/fullstack-nuxt-news
live_url: http://ec2-54-174-41-163.compute-1.amazonaws.com

images: [1.png, 2.png, 3.png]
excerpt_separator: <!--more-->
---

A Node.js/Vue.js Full Stack application which retrieves and displays news feeds from various sources.
Used MongoDB and loopback to store feed sources and scraped news.
Vue with Vuetify material components for the UI.
Vuex for client side application state management.



<!--more-->
Components:

* Docker compose - for setting up development environment and deploys
* Express/Loopback - Backend rest api connected to mongodb
* Request/CheerioJs - Dom parsing for headline scraper service
* Nuxt - for server rendered pages (initial render)
* Vue - for frontend SPA

Features:

* Configure/Add News sources
* List latest headlines
* Article opens on new tab

> Using Nuxt framework to server render vue pages.





