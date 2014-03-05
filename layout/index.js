'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var LayoutGenerator = module.exports = function LayoutGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a name name for your Layout');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(LayoutGenerator, maryoNamedBase);

LayoutGenerator.prototype.files = function files() {
    this.templateName = this.args[0];
    this.template('layout.js', 'app/scripts/layouts/'+this.args[0]+'.js');
    this.write('app/scripts/templates/'+this.args[0]+'.'+this.getTemplateFormat(), '');
};
