define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.ItemView.extend({

        template: '<%= templateName %>',

        events: {},

        initialize: function () {}

    });
});
