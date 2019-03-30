var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    // displayTodos should show .todoText
    // displayTodos should tell you if .todos is empty
    // displayTodos should show .completed
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        }
        else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    // todoList.addTodo should add objects
    addTodo: function(todoText) {
        this.todos.push({ todoText: todoText, completed: false });
        this.displayTodos();
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // todoList.toggleCompleted should flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    // created new toggleAll method
    // .toggleAll if everything is true, make everything false
    
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            // otherwise make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};
