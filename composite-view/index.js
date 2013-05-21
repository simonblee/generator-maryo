'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CompositeViewGenerator = module.exports = function CompositeViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the compositeView subgenerator with the argument ' + this.name + '.');
};

util.inherits(CompositeViewGenerator, yeoman.generators.NamedBase);

CompositeViewGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
