---
layout: project
title: Feedreader Testing
skills: [HTML5, jQquery, Javascript, Jasmine]
fields: [Front-End, Optimisation]
date: 2013-01-11 00:00:00
thumbnail: nd06-2.png
project_url: //github.com/yohanneshl/frontend-nanodegree-feedreader/
images: [ nd06-2.png]
---
##Test Driven Development with Jasmine.js

This project demonstrates TDD with Jasmine Framework. The goal was to test a pre-existing feed reader application. The feed reader application uses Ajax and google feed API to retrieve feeds from various news/blog feeds. I was tasked with formulating tests to ensure the app works correctly.

Initially the app was made to fail and then fixed so that errors weren't flagged. The types of tests I Did included validating if the UI displays correctly. Eg. whether the menu is hidden on first load and does it respond as expected.

Additionally further tests were created to ensure that the data exists and is in the correct format. As Ajax calls were made to get feeds from websites these tests needed to be run asyncronously.

