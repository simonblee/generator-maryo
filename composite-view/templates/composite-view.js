define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.CompositeView.extend({

        template: '<%= templateName %>',

        // OVERRIDE if not using a table with tbody as the item view container
        itemViewContainer: "tbody",

        itemView: <%= itemViewName %>,

        events: {},

        initialize: function () {}

    });
});
