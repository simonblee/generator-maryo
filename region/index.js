'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RegionGenerator = module.exports = function RegionGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the region subgenerator with the argument ' + this.name + '.');
};

util.inherits(RegionGenerator, yeoman.generators.NamedBase);

RegionGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
