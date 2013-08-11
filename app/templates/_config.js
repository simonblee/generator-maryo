requirejs.config({
    baseUrl: '../',
    deps: ['main'],
    paths: {
        backbone: 'bower_components/backbone/backbone',
        dust: 'bower_components/dustjs-linkedin/lib/dust',
        dustHelpers: 'bower_components/dustjs-linkedin-helpers/lib/dust-helpers',
        dustMarionette: 'bower_components/marionette-dust/src/backbone.marionette.dust',
        jquery: 'bower_components/jquery/jquery.js',
        marionette: 'bower_components/marionette/lib/core/amd/backbone.marionette.js',
        underscore: 'bower_components/lodash/lodash',
        backboneWreqr : 'bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        backboneEventbinder : 'bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        backboneBabysitter : 'bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        templates: ['dust'],
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }<% if (templateFormat === 'dust') { %>,
        dust: {
            exports: 'dust'
        },
        dustHelpers: ['dust'],
        templates: ['dust', 'dustMarionette']<% } %>
    }
});
