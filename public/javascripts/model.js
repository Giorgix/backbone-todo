
var Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attr) {
    if(attr.title === undefined) {
        return "Remember to set a title for your todo.";
      }
  },
  
  initialize: function() {
    this.on("change:title", function() {
      console.log('Name changed');
    });

    this.on("invalid", function(model, error) {
      console.log(error);
    });
  },

  setTitle: function(newTitle) {
    this.set({
      title: newTitle
    });
  }

  });

  var todo1 = new Todo();

  console.log(todo1.get('title'));
  console.log(todo1.get('completed'));

        
  // Set map of attributes
  todo1.set({
    title: 'Set through Model.set().',
    completed: true
  });
  console.log(todo1.get('title'));
  console.log(todo1.get('completed'));

  todo1.setTitle('GO fuck yourself');
  console.log(todo1.get('title'));
  
  var todo2 = new Todo();
  todo2.set('completed', true, {validate: true});

  console.log(todo2.toJSON());
