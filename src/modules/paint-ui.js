import todos from "./todos";
import {
  returnHead,
  returnTodoForm,
  generateTodos,
  returnTodo,
} from "./components";

export const appendHTML = () => {
  const element = document.createElement("div");
  element.innerHTML = `${returnHead()}${returnTodoForm()}`;
  return element;
};

const getTodoInput = () => {
  return document.querySelector("form input");
};

export const createNewTodo = (description) => {
  let html = document.querySelector(".todo-wrapper");
  const newTodo = {
    description,
    selected: false,
    completed: false,
    index: new Date().getTime(),
  };
  todos.push(newTodo);
  html.innerHTML += returnTodo(newTodo);
};

export const addTodo = () => {
  const input = getTodoInput();
  const submit = document.querySelector("form button");
  let hasText = "";
  ["click", "focus", "change"].forEach((event) => {
    input.addEventListener(event, () => {
      hasText = input.value.trim();
      submit.setAttribute("disabled", true);
      if (!hasText) return;
      submit.removeAttribute("disabled");
    });
  });
};

export const removeTodo = (event) => {
  const article = event.parentElement.parentElement.parentElement;
  article.remove();
};

export const submitTodo = (event) => {
  event.preventDefault();
  const input = getTodoInput();
  const description = input.value.trim();
  if (!description) return;
  createNewTodo(description);
  getTodoInput().value = "";
};

export const initialize = () => {
  document.querySelector(".todos").prepend(appendHTML());
  document.querySelector(".todo-wrapper").innerHTML = generateTodos();
  document.querySelector("form").addEventListener("submit", submitTodo);
  addTodo();
};

window.removeTodo = removeTodo;
