/* jshint undef: false, unused: false */

define([
  'jquery',
  'backbone',
  'underscore',
  'lib/collections',
  'templates'
],
function($, Backbone, _, Collections) {

  'use strict';

  var Index = Backbone.View.extend({
    el: '.container',
    template: Backbone.templates.index,
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template({ title: 'spa' }));
    }
  });

  return {
    Index: Index
  };

});