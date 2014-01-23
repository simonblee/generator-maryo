'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a name for your Controller');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(ControllerGenerator, maryoNamedBase);

ControllerGenerator.prototype.files = function files() {
    this.template('controller.js', 'app/scripts/controllers/'+this.args[0]+'.js');
};
