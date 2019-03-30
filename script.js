// Should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];

// have a way to display todos
console.log('My Todos:', todos);

// have a way to add new todos
todos.push('new item');

//have a way to change a todo
todos[0] = 'changed!';

// have a way to delete a todo
todos.splice(0, 1);