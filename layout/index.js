'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var LayoutGenerator = module.exports = function LayoutGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a name name for your Layout');
        process.exit(1);
    }
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(LayoutGenerator, yeoman.generators.NamedBase);

LayoutGenerator.prototype.files = function files() {
    this.templateName = this.args[0];
    this.template('layout.js', 'app/scripts/layouts/'+this.args[0]+'.js');
    this.write('app/scripts/templates/'+this.args[0]+'.dust', '');
};
