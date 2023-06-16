import { todos, renderTodoList, todoList } from "./todos.js";
import { addItem } from "./ui-actions.js";

const newItemInput = document.getElementById("new-item-input");
const addItemButton = document.getElementById("add-item-button");

const initializeUI = () => {
  renderTodoList();

  addItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItem(todos, newItemInput, renderTodoList);
  });

  todoList.addEventListener("change", (event) => {
    const checkbox = event.target;
    const taskDescription = checkbox.nextSibling;

    const todo = todos.find(
      (todo) => todo.text === taskDescription.textContent
    );

    if (todo) {
      todo.completed = checkbox.checked;
      renderTodoList();
    }
  });
};

export { initializeUI };
