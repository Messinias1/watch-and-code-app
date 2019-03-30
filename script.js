var todos = ['item 1', 'item 2', 'item 3'];
// should have a function to display todos
function displayTodos() {
    console.log('My Todos:', todos);
}
displayTodos();

// should have a function to add new todos
function addTodo() {
    todos.push('new todo');
    displayTodos();
}
addTodo();
//have a function to change a todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed');
// have a function to delete a todo
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0, 1);