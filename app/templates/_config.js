requirejs.config({
    deps: ['main'],
    paths: {
        backbone: '../bower_components/backbone/backbone',<% if (templateFormat === 'dust') { %>
        dust: '../bower_components/dustjs-linkedin/lib/dust',
        dustHelpers: '../bower_components/dustjs-linkedin-helpers/lib/dust-helpers',
        dustMarionette: '../bower_components/marionette-dust/src/backbone.marionette.dust',<% } %>
        jquery: '../bower_components/jquery/dist/jquery',
        marionette: '../bower_components/marionette/lib/core/backbone.marionette',
        underscore: '../bower_components/lodash/lodash',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        templates: 'templates/compiled',
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
