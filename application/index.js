'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ApplicationGenerator = module.exports = function ApplicationGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the application subgenerator with the argument ' + this.name + '.');
};

util.inherits(ApplicationGenerator, yeoman.generators.NamedBase);

ApplicationGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
