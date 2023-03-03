import Todos from './todos.js';
import { returnHead, returnTodoForm, generateTodos } from './components.js';
import { onFocusInTodo, selectTodo } from './interactive.js';
/**
 * Display new todos list and adjust the event listeners
 */
export function displayTodos() {
  document.querySelector('.todo-wrapper').innerHTML = generateTodos();
  onFocusInTodo();
  selectTodo();
}

/**
 * Create and insert default header and todo form
 * @returns document Element
 */
const appendHTML = () => {
  const element = document.createElement('div');
  element.innerHTML = `${returnHead()}${returnTodoForm()}`;
  return element;
};

/**
 * Return the form input element
 */
const getTodoInput = () => document.querySelector('form input');

/**
 * Add a new todo and update list
 */
const addTodo = (description) => {
  const newTodo = {
    description,
    selected: false,
    completed: false,
    index: Todos.listData().length + 1,
  };
  Todos.addData(newTodo);
  displayTodos();
};

/**
 * Remove a todo list and display the new list
 */
const removeTodo = (event) => {
  const article = event.parentElement.parentElement.parentElement;
  article.remove();
  Todos.removeData(event.getAttribute('data-id'));
  displayTodos();
};

/**
 * Remove all the completed todos when onlicking the button
 */
const clearCompletedTodos = () => {
  const clear = document.querySelector('.todo-button');
  clear.addEventListener('click', () => {
    Todos.removeData('', true);
    displayTodos();
  });
};

/**
 * disable the submit buttom if there is no submit text
 */
const inputChange = () => {
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

/**
 * Create a new todo and clear input field value
 */
const createTodo = (event) => {
  event.preventDefault();
  const input = getTodoInput();
  const description = input.value.trim();
  if (!description) return;
  addTodo(description);
  getTodoInput().value = '';
};

/**
 * Display initial todos list and add form event listeners
 */
const initialize = () => {
  document.querySelector('.todos').prepend(appendHTML());
  document.querySelector('form').addEventListener('submit', createTodo);
  inputChange();
  displayTodos();
  clearCompletedTodos();
};
export default initialize;

window.removeTodo = removeTodo;
