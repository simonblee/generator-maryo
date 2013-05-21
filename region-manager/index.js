'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RegionManagerGenerator = module.exports = function RegionManagerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the regionManager subgenerator with the argument ' + this.name + '.');
};

util.inherits(RegionManagerGenerator, yeoman.generators.NamedBase);

RegionManagerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
