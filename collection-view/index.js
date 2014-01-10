'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');
var exec = require('child_process').exec;

var CollectionViewGenerator = module.exports = function CollectionViewGenerator(args, options, config) {
    if (args.length !== 2) {
        console.log('You must provide a view name for your CollectionView and ItemView');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(CollectionViewGenerator, maryoNamedBase);

CollectionViewGenerator.prototype.files = function files() {
    this.itemViewName = this.args[1];
    this.template('collection-view.js', 'app/scripts/views/'+this.args[0]+'.js');
    var itemViewGenerator = this.env.create('maryo:item-view', {arguments: [this.args[1]]});
    itemViewGenerator.run();
};
