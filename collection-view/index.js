'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionViewGenerator = module.exports = function CollectionViewGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the collectionView subgenerator with the argument ' + this.name + '.');
};

util.inherits(CollectionViewGenerator, yeoman.generators.NamedBase);

CollectionViewGenerator.prototype.askFor = function askFor() {
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

CollectionViewGenerator.prototype.files = function files() {
    var name = this.viewName || 'collectionView' + new Date().getTime();
    this.itemTemplateName = name;
    this.template('collection-view.js', 'app/scripts/views/'+name+'.js');
    this.write('app/scripts/templates/'+name+'.dust', '');
};
