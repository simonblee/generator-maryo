'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
    if (args.length !== 1) {
        console.log('You must provide a view name for your Router');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(RouterGenerator, maryoNamedBase);

RouterGenerator.prototype.files = function files() {
    this.templateName = this.args[0];
    this.template('router.js', 'app/scripts/routers/'+this.args[0]+'.js');
};
