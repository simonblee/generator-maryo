'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var ItemViewGenerator = module.exports = function ItemViewGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a view name for your ItemView');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(ItemViewGenerator, maryoNamedBase);

ItemViewGenerator.prototype.files = function files() {
    this.templateName = this.args[0];
    this.template('item-view.js', 'app/scripts/views/'+this.args[0]+'.js');
    this.write('app/scripts/templates/'+this.args[0]+'.'+this.getTemplateFormat(), '');
};
