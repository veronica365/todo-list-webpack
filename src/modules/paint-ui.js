import Todos from './todos.js';
import {
  returnHead,
  returnTodoForm,
  generateTodos,
  returnTodo,
} from './components.js';

const displayTodos = () => {
  document.querySelector('.todo-wrapper').innerHTML = generateTodos();
};

export const appendHTML = () => {
  const element = document.createElement('div');
  element.innerHTML = `${returnHead()}${returnTodoForm()}`;
  return element;
};

const getTodoInput = () => document.querySelector('form input');

export const addTodo = (description) => {
  const html = document.querySelector('.todo-wrapper');
  const newTodo = {
    description,
    selected: false,
    completed: false,
    index: Todos.listData().length + 1,
  };
  Todos.addData(newTodo);
  html.innerHTML += returnTodo(newTodo);
};

export const removeTodo = (event) => {
  const article = event.parentElement.parentElement.parentElement;
  article.remove();
  Todos.removeData(event.getAttribute('data-id'));
  displayTodos();
};

export const updateTodo = (item) => {
  const id = parseInt(item.target.getAttribute('data-id'), 10);
  Todos.updateData(id, item.target.textContent.trim());

  // Move cursor to the end of the field and remove
  // all html such as paragraphs added by editableContent
  // on press enter
  if (item.code !== 'Enter') return;
  item.target.innerText = item.target.textContent;
  const todoText = window.getSelection();
  todoText.selectAllChildren(item.target);
  todoText.collapseToEnd();
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
};

export const onFocusInTodo = () => {
  const todos = document.querySelectorAll('.todo-title');
  todos.forEach((item) => {
    item.addEventListener('blur', updateTodo);
    item.addEventListener('input', updateTodo);
    item.addEventListener('keyup', updateTodo);
    item.addEventListener('paste', updateTodo);
  });
};

export const inputChange = () => {
  const input = getTodoInput();
  const submit = document.querySelector('form button');
  let hasText = '';
  ['click', 'focus', 'change'].forEach((event) => {
    input.addEventListener(event, () => {
      hasText = input.value.trim();
      submit.setAttribute('disabled', true);
      if (!hasText) return;
      submit.removeAttribute('disabled');
    });
  });
};

export const createTodo = (event) => {
  event.preventDefault();
  const input = getTodoInput();
  const description = input.value.trim();
  if (!description) return;
  addTodo(description);
  getTodoInput().value = '';
};

export const initialize = () => {
  document.querySelector('.todos').prepend(appendHTML());
  document.querySelector('form').addEventListener('submit', createTodo);
  inputChange();
  displayTodos();
  onFocusInTodo();
};

window.removeTodo = removeTodo;
