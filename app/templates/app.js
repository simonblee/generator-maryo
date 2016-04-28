define([
    "underscore",
    "backbone",
    "marionette"
],

function (_, Backbone) {

    var App = new Backbone.Marionette.Application();
    // Fired just before the Application starts and before the initializers are executed
    App.on("before:start", function (options) {
        this.root = '/';
    });

    // Return the instantiated app (there should only be one)
    return App;

});
