!function(App, Backbone) {
  'use strict';

  App.views.Index = Backbone.View.extend({
    el: document.querySelector('.container'),
    template: App.templates.index,
    initialize: function() {
      this.render();
    },
    render: function() {
      this.el.innerHTML = this.template({ title: 'spa' });
    }
  });

}(window.App, window.Backbone);
