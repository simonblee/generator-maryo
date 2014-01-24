# Generator Maryo
[![Build Status](https://secure.travis-ci.org/simonblee/generator-marionette.png?branch=master)](https://travis-ci.org/simonblee/generator-marionette)

## Overview
Scaffold tool for Backbone, Marionette and Dust javascript projects. 

## The Name
A combination of Marionette and Yeoman (yo) to give Maryo, pronounced like Mario.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-maryo`
- Run: `yo maryo` or `yo`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## TODO
* Underscore precompilation with grunt (same as dust)
* Models, Collections, Routers - Call backbone yeoman generator from within this generator
* Customisable directory structure

## Usage
In all generators, files will only be created if they don't already exist. The generator can be run
interactively from the command line or by specifying a json file with a list of all your Marionette
objects (config file to be completed).

The generator will give you the following libraries:

* [Backbone](http://backbonejs.org/)
* [Marionette](http://marionettejs.com/)
* [Require](http://requirejs.org/)
* [Dust](http://linkedin.github.io/dustjs/) (LinkedIn's fork)
* [Underscore](http://underscorejs.org/) ([lodash](http://lodash.com/))
* [Grunt](http://gruntjs.com/)
* [Jasmine](http://pivotal.github.io/jasmine/) or [Mocha](http://visionmedia.github.io/mocha/)
* [LESS](http://www.lesscss.org/) or [SASS](http://sass-lang.com/) (both optional)

Libraries are delivered using [Bower](http://bower.io/). If you need different versions, simply change
them in `bower.json` and then run `bower update`.

The following files:

* index.html
* config.js (require config)
* main.js (application start)
* app.js (Marionette application object)
* html5 boilerplate styles

The following directory structure:

app  
____images  
____styles  
____scripts  
________collections  
________helpers  
________layouts  
________models  
________regions  
________routers  
________templates  
________views  

## Subgenerators
Run as `yo maryo:subgenerator`. To generate backbone objects, use the yeoman backbone generator
[here](https://github.com/yeoman/generator-backbone).

### Controller
`yo maryo:controller controllerName`

You get a Controller object

### Item View
`yo maryo:item-view itemViewName`

What you get:
* ItemView
* ItemView template

### Collection View
`yo maryo:collection-view collectionViewName itemViewName`

What you get:
* CollectionView
* ItemView
* ItemView template

### Composite View
`yo maryo:composite-view compositeViewName itemViewName`

What you get:
* CompositeView
* CompositeView template
* ItemView
* ItemView template

### Layout
`yo maryo:layout layoutName`

What you get:
* Layout
* Layout template

### Region
`yo maryo:region regionName`

You get a region object.

### Router
`yo maryo:router routerName`

You get an AppRouter object
