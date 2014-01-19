require.config({
  paths: {
    jquery: 'vendor/jquery',
    backbone: 'vendor/backbone',
    underscore: 'vendor/underscore',
    handlebars: 'vendor/handlebars',
    templates: 'templates'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    templates: {
      deps: ['handlebars']
    }
  }
});

require([
  'jquery',
  'backbone',
  'lib/router'
],
function($, Backbone, Router) {

  'use strict';

  new Router();
  Backbone.history.start();

});
