define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.CompositeView.extend({

        template: '<%= templateName %>',

        // MARYO GENERATED: Override if necessary
        itemViewContainer: "tbody",

        // MARYO GENERATED: Override if necessary
        itemView: Backbone.Marionette.ItemView.extend({
            tagName: 'tr',
            template: '<%= templateName %>Item',
        }),

        events: {},

        initialize: function () {}

    });
});
