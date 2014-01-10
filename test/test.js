/*global describe:true, beforeEach:true, it:true */
'use strict';
var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');
var promptOptions = {
    styleFormat: 'less',
    templateFormat: 'dust',
    testFramework: 'jasmine',
    includeRequireJS: 'Y',
    includeBootstrap: 'N'
}

describe('Marionette generator test', function () {

    beforeEach(function (done) {
        this.env
        // Clean and create temp test directory for the app
        helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
            if (err) return done(err);

            // Set up the application
            this.marionette = {};
            this.marionette.app = helpers.createGenerator('maryo:app', [
                '../../app',
                [helpers.createDummyGenerator(), 'mocha:app']
            ]);
            this.marionette.app.options['skip-install'] = true;

            helpers.mockPrompt(this.marionette.app, promptOptions);

            done();
        }.bind(this));
    });

    it('every generator can be required without throwing', function () {
        this.app = require('../app');
        this.compositeView = require('../composite-view');
        this.collectionView = require('../collection-view');
        this.itemView = require('../item-view');
        this.view = require('../view');
        this.layout = require('../layout');
        this.region = require('../region');
        this.regionManager = require('../region-manager');
    });

    it('creates expected files', function (done) {
        var expected = [
            ['bower.json', /"name": "temp"/],
            ['package.json', /"name": "temp"/],
            'Gruntfile.js',
            'maryo.json',
            '.gitignore',
            '.gitattributes',
            '.bowerrc',
            '.jshintrc',
            '.editorconfig',
            'app/index.html',
            'app/scripts/config.js',
            'app/scripts/templates',
            'app/styles',
            'app/images'
        ];

        this.marionette.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('item-view subgenerator creates files correctly', function (done) {
        var itemViewName = 'myItemViewName';

        // Set up the view generator
        prepareSubgenerator.call(this, 'item-view', [itemViewName]);

        // Test for created files
        var expected = [
            'app/scripts/templates/'+itemViewName+'.'+promptOptions.templateFormat,
            'app/scripts/views/'+itemViewName+'.js',
        ];

        verifySubgeneratorFiles(this.marionette, expected, done);
    });

    it('collection-view subgenerator creates files correctly', function (done) {
        var collectionViewName = 'myCollectionViewName',
            itemViewName = 'myItemViewName';

        // Set up the view generator
        prepareSubgenerator.call(this, 'collection-view', [collectionViewName, itemViewName]);

        // Test for created files
        var expected = [
            'app/scripts/templates/'+itemViewName+'.'+promptOptions.templateFormat,
            'app/scripts/views/'+itemViewName+'.js',
            'app/scripts/views/'+collectionViewName+'.js',
        ];

        verifySubgeneratorFiles(this.marionette, expected, done);
    });

    it('composite-view subgenerator creates files correctly', function (done) {
        var compositeViewName = 'myCompositeViewName',
            itemViewName = 'myItemViewName';

        // Set up the view generator
        prepareSubgenerator.call(this, 'composite-view', [compositeViewName, itemViewName]);

        // Test for created files
        var expected = [
            'app/scripts/templates/'+itemViewName+'.'+promptOptions.templateFormat,
            'app/scripts/templates/'+compositeViewName+'.'+promptOptions.templateFormat,
            'app/scripts/views/'+itemViewName+'.js',
            'app/scripts/views/'+compositeViewName+'.js',
        ];

        verifySubgeneratorFiles(this.marionette, expected, done);
    });

    it('layout subgenerator creates files correctly', function (done) {
        var layoutName = 'myCompositeViewName';

        // Set up the view generator
        prepareSubgenerator.call(this, 'layout', [layoutName]);

        // Test for created files
        var expected = [
            'app/scripts/templates/'+layoutName+'.'+promptOptions.templateFormat,
            'app/scripts/layouts/'+layoutName+'.js'
        ];

        verifySubgeneratorFiles(this.marionette, expected, done);
    });

    it('region subgenerator creates files correctly', function (done) {
        var regionName = 'myRegion';

        // Set up the view generator
        prepareSubgenerator.call(this, 'region', [regionName]);

        // Test for created files
        var expected = [
            'app/scripts/regions/'+regionName+'.js'
        ];

        verifySubgeneratorFiles(this.marionette, expected, done);
    });

    function prepareSubgenerator (subgeneratorName, args) {
        this.marionette.subgenerator = helpers.createGenerator(
            'maryo:'+subgeneratorName,
            [
                '../../'+subgeneratorName,
                [helpers.createDummyGenerator(), 'mocha:'+subgeneratorName]
            ],
            args
        );
        this.marionette.subgenerator.options['skip-install'] = true;
        this.marionette.subgenerator.env.register('../../item-view');
    }

    it.skip('has dust renderer when app uses dust templates', function () {});
    it.skip('has handlebars renderer when app uses handlebars templates', function () {});

    function verifySubgeneratorFiles (generator, files, done) {
        generator.app.run({}, function () {
            generator.subgenerator.run({}, function () {
                helpers.assertFiles(files);
                done();
            });
        });
    }
});
