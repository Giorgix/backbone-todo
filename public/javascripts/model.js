
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

  var TodosCollection = Backbone.Collection.extend({
    model: Todo
  });
  
  var todo1 = new Todo({title: 'Go to jamaica.'});
  var todo2 = new Todo({title: 'Go to hawaii.', id: 5});
  var todo3 = new Todo({title: 'Go to china.'});

  var todos = new TodosCollection([todo1, todo2]);
  console.log("collection size: " + todos.length);  
  
  todos.add(todo3);  
  console.log("collection size: " + todos.length);  

  todos.remove(todo3);
  console.log("collection size: " + todos.length);  

  var todo4 = todos.get(5);
  console.log(todo4 === todo2);
