/*global describe:true, beforeEach:true, it:true */
'use strict';
var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


// XXX With current API, (prior v2), that's a complete mess to setup generators
// if they differ from the standard lib/generators layout.
//
// Even for workarounds, the API is awful and doesn't let you do anything.
//
// With the new API, it will be much easier to manually register one or a set
// of generators, and manage multiple environments.
//
// Something like:
//
//    generators()
//      .register(require('../all'), 'backbone:all')
//      .register(require('../app'), 'backbone:app')
//      .register(require('../view'), 'backbone:view')
//      .register(require('../router'), 'backbone:router')
//      .register(require('../model'), 'backbone:model')
//      .register(require('../collection'), 'backbone:collection')
//
// Or for the lazy guy:
//
//    generators()
//      .lookup('*:*', path.join(__dirname, '..'))
//

describe('Backbone generator test', function () {

    beforeEach(function (done) {
        // Clean and create temp test directory for the app
        helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
            if (err) return done(err);

            // Set up the application
            this.marionette = {};
            this.marionette.app = helpers.createGenerator('marionette:app', [
                '../../app',
                [helpers.createDummyGenerator(), 'mocha:app']
            ]);
            this.marionette.app.options['skip-install'] = true;

            helpers.mockPrompt(this.marionette.app, {
                'styleFormat': 'less',
                'templateFormat': 'dust',
                'testFramework': 'jasmine',
                'includeRequireJS': 'Y',
                'includeBootstrap': 'N'
            });

            done();
        }.bind(this));
    });

    // it('every generator can be required without throwing', function () {
    //     // not testing the actual run of generators yet
    //     this.all = require('../all');
    //     this.app = require('../app');
    //     this.collection = require('../collection');
    //     this.model = require('../model');
    //     this.router = require('../router');
    //     this.view = require('../view');
    // });

    it('creates expected files', function (done) {
        var expected = [
            ['bower.json', /"name": "temp"/],
            ['package.json', /"name": "temp"/],
            'Gruntfile.js',
            '.gitignore',
            '.gitattributes',
            '.bowerrc',
            '.jshintrc',
            '.editorconfig',
            'app/index.html',
            'app/scripts/config.js',
        ];

        this.marionette.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
