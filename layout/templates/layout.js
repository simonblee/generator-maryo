define([
    "underscore",
    "backbone"
],

function (_, Backbone) {

    return Backbone.Marionette.Layout.extend({

        template: "appSkeleton",

        regions: {},

        initialize: function (options) {}

    });
});
