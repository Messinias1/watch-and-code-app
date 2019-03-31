var todoList = {
    todos: [],
    // version 9, REMOVED THE ENTIRE DISPLAY TODOS METHOD
    // todoList.addTodo should add objects
    addTodo: function(todoText) {
        this.todos.push({ todoText: todoText, completed: false });
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    // todoList.toggleCompleted should flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        };
    }
};

//first refactoring


var handlers = {
    // version 9, removed the display todos button function
    // addTodo button function
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    // changeTodo button function
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    // delete todo button function
    // version 10, modified below method
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    // toggle completed button function
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};
// version 9, created this object for display on the page out of the DOM
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            // version 9, accessing the todoLi text content and setting it to todoText property
            // version 10, give list items individual id's
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            // version 10, appending new child to the list item
            todoLi.appendChild('this.createDeleteButton');
            todosUl.appendChild('todoLi');
        }
    },
    // version 10, created function for delete button
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    // version 10, created event listener function
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            console.log(event.target.parentNode.id);

            var elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
