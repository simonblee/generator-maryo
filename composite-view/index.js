'use strict';
var util = require('util');
var maryoNamedBase = require('../lib/maryo-named-base');

var CompositeViewGenerator = module.exports = function CompositeViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  maryoNamedBase.apply(this, arguments);

  console.log('You called the compositeView subgenerator with the argument ' + this.name + '.');
};

util.inherits(CompositeViewGenerator, maryoNamedBase);

CompositeViewGenerator.prototype.askFor = function askFor() {
    var cb = this.async(),
        prompts = [{
            name: 'viewName',
            message: 'Please enter a name for your view:'
        }];

    // Prompt the user and handle the user responses
    this.prompt(prompts, function (err, props) {
        this.viewName = props.viewName;
        cb();
    }.bind(this));
};

CompositeViewGenerator.prototype.files = function files() {
    var name = this.viewName || 'collectionView' + new Date().getTime();

    this.viewName = name;
    this.templateName = name;
    this.itemViewName = name+'Item';
    this.itemTemplateName = name+'Item';

    this.template('composite-view.js', 'app/scripts/views/'+this.viewName+'.js');
    this.template('item-view.js', 'app/scripts/views/'+this.itemViewName+'.js');
    this.write('app/scripts/templates/'+this.templateName+'.'+this.getTemplateFormat(), '');
    this.write('app/scripts/templates/'+this.itemTemplateName+'.'+this.getTemplateFormat(), '');
};

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
