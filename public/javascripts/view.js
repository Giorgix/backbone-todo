var TodoView = Backbone.View.extend ({
  tagName: 'ul',
  className: 'container',
  id: 'todos',

  // if the element already exists in the page
  // you can set it as a CSS selector like:
  // (el: '#footer')

  // Cache the template function for a single item.
  todoTpl: _.template( "An example template" ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function(options) {
    // In Backbone 1.1.0, if you want to access passed options
    // in your view, you will need to save them as follows:
    this.options = options || {};
  },

  render: function() {
    this.$el.html(this.todoTpl(this.model.attr));
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {
    // executed when todo label is double clicked
  },

  close: function() {
    // executed que todo loses focus
  },

  updateOnEnter: function(e) {
    // executed on each keypress when in todo edit mode,
    // but we'll wait for enter to get in action
  }
});

var todoView = new TodoView();

// log reference to a DOM element that corresponds to the view instance
console.log(todoView.el);
