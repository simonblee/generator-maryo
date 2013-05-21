'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ItemViewGenerator = module.exports = function ItemViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the itemView subgenerator with the argument ' + this.name + '.');
};

util.inherits(ItemViewGenerator, yeoman.generators.NamedBase);

ItemViewGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
