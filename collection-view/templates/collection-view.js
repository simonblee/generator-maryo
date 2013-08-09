define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.CollectionView.extend({

        // MARYO GENERATED: Override if necessary
        itemView: Backbone.Marionette.ItemView.extend({
            template: '<%= itemTemplateName %>',
        }),

        events: {},

        initialize: function () {}

    });
});
