define([
    'marionette'
],

function (Marionette) {

    return Marionette.CollectionView.extend({

        itemView: <%= itemViewName %>,

        events: {},

        initialize: function () {}

    });
});
