const addItem = (todos, input, render) => {
  const newItemText = input.value.trim();

  if (newItemText === '') {
    return;
  }

  const isEditing = input.classList.contains('plus-on-edit');

  if (isEditing) {
    const todoIndex = input.dataset.editIndex;
    if (newItemText === '') {
      todos.splice(todoIndex, 1);
      for (let i = todoIndex; i < todos.length; i++) {
        todos[i].index = i;
      }
    } else {
      todos[todoIndex].description = newItemText;
    }
    input.classList.remove('plus-on-edit');
    input.dataset.editIndex = '';
  } else {
    const newTodo = { description: newItemText };
    todos.push(newTodo);
  }

  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = '';
  render();
};

const clearCompleted = (todos) => {
  const updatedTodos = todos.filter((todo) => !todo.completed);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  return updatedTodos;
};

export { addItem, clearCompleted };
