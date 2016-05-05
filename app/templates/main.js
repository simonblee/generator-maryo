require([
    "jquery",
    "backbone",
    "app",
    "marionette"<% if (templateFormat === 'dust') { %>,
    "templates",
    "dustHelpers"<% } %>
],

function ($, Backbone, App) {
    // Fires after the Application has started and after the initializers have been executed
    App.on("start", function(options){
        if (Backbone.history){
            // Trigger the initial route and enable HTML5 History API support
            Backbone.history.start({ pushState: true, root: App.root });
        }
    });
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    App.start();

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass])", function (e) {
        // Get the absolute anchor href.
        var href = {
                prop: $(this).prop("href"),
                attr: $(this).attr("href")
            },
            root = location.protocol + "//" + location.host + App.root;

        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href.prop && href.prop.slice(0, root.length) === root) {
            e.preventDefault();
            Backbone.history.navigate(href.attr, true);
        }
    });

    $(document).on("click", "a[data-bypass]", function (e) {
        e.preventDefault();
    });

});
