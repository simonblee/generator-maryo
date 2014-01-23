'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var CompositeViewGenerator = module.exports = function CompositeViewGenerator(args, options, config) {
    if (args.length !== 2) {
        console.log('You must provide a view name for your CollectionView and ItemView');
        process.exit(1);
    } else {
        maryoNamedBase.apply(this, arguments);
    }
};

util.inherits(CompositeViewGenerator, maryoNamedBase);

CompositeViewGenerator.prototype.files = function files() {
    var name, itemViewGenerator;

    name = this.templateName = this.args[0];
    this.itemViewName = this.itemTemplateName = this.args[1];

    this.template('composite-view.js', 'app/scripts/views/'+name+'.js');
    this.write('app/scripts/templates/'+name+'.'+this.getTemplateFormat(), '');

    itemViewGenerator = this.env.create('maryo:item-view', {arguments: [this.args[1]]});
    itemViewGenerator.run();
};
