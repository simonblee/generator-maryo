'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ItemViewGenerator = module.exports = function ItemViewGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a view name for your ItemView');
        process.exit(1);
    } else {
        yeoman.generators.NamedBase.apply(this, arguments);
    }
};

util.inherits(ItemViewGenerator, yeoman.generators.NamedBase);

ItemViewGenerator.prototype.files = function files() {
    this.templateName = this.args[0];
    this.template('item-view.js', 'app/scripts/views/'+this.args[0]+'.js');
    this.write('app/scripts/templates/'+this.args[0]+'.dust', '');
};
