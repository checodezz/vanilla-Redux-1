import { createStore } from "redux";
import todoReducer from "./todosReducer";

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
  upateTodoList();
});

const todoInput = document.querySelector("#todoInput");
const addTodos = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () => {
  const todoValue = todoInput.value;
  if (todoValue) {
    store.dispatch({ type: "ADD_TODO", payload: todoValue });
  }
};

window.removeTodoHandler = (index) => {
  store.dispatch({ type: "REMOVE_TODO", payload: index });
};

addTodos.addEventListener("click", addTodoHandler);

const upateTodoList = () => {
  const state = store.getState();
  console.log(state);
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo}<button onClick="removeTodoHandler(${index})">Remove</button> </li>`;
    })
    .join("");
};

upateTodoList();
