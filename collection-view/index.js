'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionViewGenerator = module.exports = function CollectionViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the collectionView subgenerator with the argument ' + this.name + '.');
};

util.inherits(CollectionViewGenerator, yeoman.generators.NamedBase);

CollectionViewGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
