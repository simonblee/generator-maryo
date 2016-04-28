define([
    'marionette',
    'views/<%= itemViewName %>'
],

function (Marionette, <%= itemViewName %>) {

    return Marionette.CollectionView.extend({

        childView: <%= itemViewName %>,

        events: {},

        initialize: function () {}

    });
});
