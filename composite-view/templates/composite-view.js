define([
    'marionette',
    'views/<%= itemViewName %>'
],

function (Marionette, <%= itemViewName %>) {

    return Marionette.CompositeView.extend({

        template: '<%= templateName %>',

        // OVERRIDE if not using a table with tbody as the item view container
        childViewContainer: "tbody",

        childView: <%= itemViewName %>,

        events: {},

        initialize: function () {}

    });
});
