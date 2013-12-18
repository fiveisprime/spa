!function(App, Backbone) {

  'use strict';

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'test': 'test'
    },

    //
    // Initialize and render the index view.
    //
    index: function() {
      new App.views.Index();
    },

    //
    // TODO: Add more views to the router.
    //
    test: function() { }
  });

}(window.App, window.Backbone);
