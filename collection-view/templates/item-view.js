define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.ItemView.extend({

        template: '<%= itemTemplateName %>',

        events: {},

        initialize: function () {}

    });
});
