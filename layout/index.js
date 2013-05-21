'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var LayoutGenerator = module.exports = function LayoutGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the layout subgenerator with the argument ' + this.name + '.');
};

util.inherits(LayoutGenerator, yeoman.generators.NamedBase);

LayoutGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
