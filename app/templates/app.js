define([
    "underscore",
    "backbone",
    "marionette"
],

function (_, Backbone) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
    });

    // Add as many of these as you like
    App.addInitializer(function () {

    });

    // Return the instantiated app (there should only be one)
    return App;

});
