'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MarionetteGenerator = module.exports = function MarionetteGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MarionetteGenerator, yeoman.generators.NamedBase);

MarionetteGenerator.prototype.askFor = function askFor() {
    var cb = this.async(),
        styleFormat = ['css', 'sass', 'less'],
        templateFormat = ['none', 'dust', 'handlebars', '_'],
        testFramework = ['none', 'jasmine', 'mocha'],
        prompts = [{
            name: 'styleFormat',
            message: 'Which style format would you like to use?',
            default: styleFormat.join('/')
        },
        {
            name: 'templateFormat',
            message: 'Which template library would you like to use?',
            default: templateFormat.join('/')
        },
        {
            name: 'testFramework',
            message: 'Which test framework would you like to use?',
            default: testFramework.join('/')
        },
        {
            name: 'includeRequireJS',
            message: 'Would you like to include RequireJS (for AMD support)?',
            default: 'Y/n'
        },
        {
            name: 'includeBootstrap',
            message: 'Would you like to include Twitter Bootstrap?',
            default: 'Y/n'
        }];

    // Be polite
    console.log(
        '\n     _-----_' +
        '\n    |       |' +
        '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
        '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
        '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
        '\n    /___A___\\   \'__________________________\'' +
        '\n     |  ~  |'.yellow +
        '\n   __' + '\'.___.\''.yellow + '__' +
        '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n\n' +
        'Let\'s dance with Marionette.\n\n'
    );

    // Prompt the user and handle the user responses
    this.prompt(prompts, function (err, props) {
        console.log(props);
        if (err) return this.emit('error', err);

        // Set defaults incase of invalid entry
        this.styleFormat = styleFormat[0]; //css
        this.templateFormat = templateFormat[0]; //none
        this.testFramework = testFramework[0]; //none

        // Grab the user's selections
        if (styleFormat.indexOf(props.styleFormat) !== -1) {
            this.styleFormat = props.styleFormat;
        }
        if (templateFormat.indexOf(props.templateFormat) !== -1) {
            this.templateFormat = props.templateFormat;
        }
        if (testFramework.indexOf(props.testFramework) !== -1) {
            this.testFramework = props.testFramework;
        }
        this.includeRequireJS = (/y/i).test(props.includeRequireJS);
        this.includeBootstrap = (/y/i).test(props.includeBootstrap);

        cb();
    }.bind(this));
};

MarionetteGenerator.prototype.app = function app() {
    var self = this;

    // Create the application directory structure
    this.mkdir('app');
    this.mkdir('app/scripts/templates');
    this.mkdir('app/styles');
    this.mkdir('app/images');

    // Copy standard files
    this.copy('config.js', 'app/config.js');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');

    // Template files dependent on options
    this.template('_index.html', 'app/index.html');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_Gruntfile.js', 'Gruntfile.js');
};
