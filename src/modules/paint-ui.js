import { returnHead, returnTodoForm, generateTodos } from "./components";

export const appendHTML = () => {
  const element = document.createElement("div");
  element.innerHTML = `${returnHead()}${returnTodoForm()}`;
  return element;
};

export const initialize = () => {
  document.querySelector(".todos").prepend(appendHTML());
  document.querySelector(".todo-wrapper").innerHTML = generateTodos();
};
