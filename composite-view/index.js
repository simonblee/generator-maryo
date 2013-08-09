'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CompositeViewGenerator = module.exports = function CompositeViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the compositeView subgenerator with the argument ' + this.name + '.');
};

util.inherits(CompositeViewGenerator, yeoman.generators.NamedBase);

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
    this.templateName = name;
    this.template('composite-view.js', 'app/scripts/views/'+name+'.js');
    this.write('app/scripts/templates/'+name+'.dust', '');
    this.write('app/scripts/templates/'+name+'Item.dust', '');
};
