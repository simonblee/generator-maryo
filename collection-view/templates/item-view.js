define([
    'marionette'
],

function (Marionette) {

    return Marionette.ItemView.extend({

        template: '<%= itemTemplateName %>',

        events: {},

        initialize: function () {}

    });
});
