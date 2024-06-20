import { createStore } from "redux";
import todoReducer from "./todosReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(todoReducer);

store.subscribe(() => {
  upateTodoList();
});

const todoInput = document.querySelector("#todoInput");
const addTodos = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () => {
  const todoValue = todoInput.value;
  if (todoValue) {
    store.dispatch(addTodo(todoValue));
  }
};

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

addTodos.addEventListener("click", addTodoHandler);

const upateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo}<button onClick="removeTodoHandler(${index})">Remove</button> </li>`;
    })
    .join("");
};

upateTodoList();
