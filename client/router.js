/* jshint unused: false */

var App = App || {};
var Backbone = Backbone || {};

!function(App) {

  'use strict';

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index'
    , 'test': 'test'
    }

    //
    // Initialize and render the index view.
    //
  , index: function() {
      var index = new App.views.Index();
    }

    //
    // TODO: Add more views to the router.
    //
  , test: function() { }
  });

  var router = new App.Router();
  Backbone.history.start();

}(App);
