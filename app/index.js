'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var exec = require('child_process').exec;
var chalk = require('chalk');

var MaryoGenerator = module.exports = function MaryoGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
}

util.inherits(MaryoGenerator, yeoman.generators.Base);

MaryoGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // Generate from a config file or prompt the user.
    if (this.options['config']) {
        var path = this.options['config'];
        if (path.substr(0,1) === '~') {
            path = process.env.HOME + path.substr(1);
        }

        fs.readFile(path, function (err, data) {
            var config = JSON.parse(data);

            this.styleFormat = config.styleFormat;
            this.templateFormat = config.templateFormat;
            this.testFramework = config.testFramework;
            this.includeBootstrap = config.includeBootstrap;

            cb();
        }.bind(this));
    } else {
        var styleFormat = ['css', 'sass', 'less'],
            templateFormat = ['_', 'dust'],
            testFramework = ['none', 'jasmine', 'mocha'],
            prompts = [{
                name: 'styleFormat',
                message: 'Which style format would you like to use ('+styleFormat.join("/")+')?',
                choices: styleFormat
            },
            {
                name: 'templateFormat',
                message: 'Which template library would you like to use ('+templateFormat.join("/")+')?',
                choices: templateFormat
            },
            {
                name: 'testFramework',
                message: 'Which test framework would you like to use ('+testFramework.join("/")+')?',
                choices: testFramework
            },
            {
                name: 'includeBootstrap',
                message: 'Would you like to include Bootstrap (y)?',
                type: 'confirm'
            }];

        // Be polite
        console.log(
            '\n     _-----_' +
            '\n    |       |' +
            '\n    |' + chalk.red('--(o)--') + '|   .--------------------------.' +
            '\n   `---------´  |    ' + chalk.yellow.bold('Welcome to Yeoman') + ',    |' +
            '\n    ' + chalk.yellow('(') + ' _' + chalk.yellow('´U`') + '_ ' + chalk.yellow(')') + '   |   ' + chalk.yellow.bold('ladies and gentlemen!') + '  |' +
            '\n    /___A___\\   \'__________________________\'' +
            '\n     ' + chalk.yellow('|  ~  |') +
            '\n   __' + chalk.yellow('\'.___.\'') + '__' +
            '\n ´   ' + chalk.red('`  |') + '° ' + chalk.red('´ Y') + ' `\n' +
            'Let\'s dance with Marionette.\n\n'
        );

        // Prompt the user and handle the user responses
        this.prompt(prompts, function (props, err) {
            this.styleFormat = props.styleFormat || styleFormat[0];
            this.templateFormat = props.templateFormat || templateFormat[0];
            this.testFramework = props.testFramework || testFramework[0];
            this.includeBootstrap = props.includeBootstrap;

            cb();
        }.bind(this));
    }
}

MaryoGenerator.prototype.app = function app () {
    var self = this;

    // TODO: Set up user input to configure server. Template
    // has access to this object.
    this.connect = {
        options: {
            port: 8888
        }
    };

    // Create the application directory structure
    this.mkdir('app');
    this.mkdir('app/scripts');
    this.mkdir('app/scripts/collections');
    this.mkdir('app/scripts/controllers');
    this.mkdir('app/scripts/models');
    this.mkdir('app/scripts/views');
    this.mkdir('app/scripts/routers');
    this.mkdir('app/scripts/templates');
    this.mkdir('app/scripts/layouts');
    this.mkdir('app/scripts/regions');
    this.mkdir('app/scripts/test');
    this.mkdir('app/styles');
    this.mkdir('app/images');

    // Copy files
    this.copy('app.js', 'app/scripts/app.js');
    this.copy('main.js', 'app/scripts/main.js');
    this.copy('index.html', 'app/index.html');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');

    // TODO: Add in a base test file and test runner

    // Template files dependent on options
    this.template('_config.js', 'app/scripts/config.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.template('_maryo.json', 'maryo.json');
}

MaryoGenerator.prototype.h5bp = function h5bp () {
    var ext = this.styleFormat,
        cb = this.async();

    this.remote('h5bp', 'html5-boilerplate', function (err, remote) {
        remote.copy('./dist/css/normalize.css', 'app/styles/normalize.css');
        remote.copy('./dist/css/main.css', 'app/styles/main.css');
        cb();
    }.bind(this));
}
