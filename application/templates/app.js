define([
    "underscore",
    "backbone"
],

function (_, Backbone, templates) {

    var App = new Backbone.Marionette.Application();

    App.addInitializer(function () {
        this.root = '/';
    });

    // Return the instantiated app (there should only be one)
    return App;

});
