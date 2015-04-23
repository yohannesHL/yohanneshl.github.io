---
layout: project
title: HDF REST Server
skills: [Python, Flask, Pandas]
fields: [Back-End]
date: 2015-01-20 00:00:00
thumbnail:
project_url: https://github.com/yohannesHL/HDFserver
images: []
---


HDF REST server is a simple RESTful server for HDF5 data stores.

##What is a HDF5 data store?

HDF5 is a data model, library, and file format for storing and managing data. HDF5 is suitable for handling large datasets.

HDF5 file sizes are much smaller than other comparable data files. And it is superior to mySQL in terms of read/write speed. learn more [here](http://www.pytables.org/moin)

##Description:

The current implementation provides a RESTful interface to view contents of HDF5 data stores. Providing you the ability to query your data store in a similar way you would in MySQL. Like so: `http://localhost/q/HDFfile/table/LIMIT/chunkNum`.

JSON data is returned which you can use in any application you like. This is specially useful if you want to setup a distributed system where by the HDF Server can act as the data provider and connected applications can query or update the data.

