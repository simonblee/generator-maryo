# Generator Maryo
[![Build Status](https://secure.travis-ci.org/simonblee/generator-marionette.png?branch=master)](https://travis-ci.org/simonblee/generator-marionette)

## The Name
A combination of Marionette and Yeoman (yo) to give Maryo, pronounced like Mario.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-maryo`
- Run: `yo maryo` or `yo`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## Usage
In all generators, files will only be created if they don't already exist. The generator can be run
interactively from the command line or by specifying a json file with a list of all your Marionette
objects (config file to be completed).

The generator will give you the following libs:
* Backbone
* Marionette
* Require
* Dust
* Underscore (lodash)
* Grunt
* Jasmine or Mocha
* LESS or SASS (optional)

The following files
* index.html
* config.js (require config)
* main.js (application start)
* app.js (Marionette application object)
* html5 boilerplate styles

The following directory structure:
app
    images
    styles
    scripts
        collections
        helpers
        layouts
        models
        regions
        routers
        templates
        views

## Subgenerators
Run as `yo maryo:subgenerator`

### Item View
`yo maryo:item-view itemViewName`
* ItemView
* ItemView template

### Collection View
`yo maryo:collection-view collectionViewName itemViewName`
* CollectionView
* ItemView
* ItemView template

### Composite View
`yo maryo:composite-view compositeViewName itemViewName`
* CompositeView
* CompositeView template
* ItemView
* ItemView template

### Region
`yo maryo:region regionName`

### Models, Collections, Routers
TODO: Call backbone yeoman generator from within this generator.
