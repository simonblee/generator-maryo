'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RegionGenerator = module.exports = function RegionGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a name name for your Region');
        process.exit(1);
    }
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(RegionGenerator, yeoman.generators.NamedBase);

RegionGenerator.prototype.files = function files() {
    this.copy('region.js', 'app/scripts/regions/'+this.args[0]+'.js');
};
