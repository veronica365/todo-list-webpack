import Todos from './todos.js';
import { returnHead, returnTodoForm, generateTodos } from './components.js';

/**
 *
 * @param {Event} item event from the targeted todo
 * @returns
 */
const updateTodo = (item) => {
  const id = parseInt(item.target.getAttribute('data-id'), 10);
  Todos.updateData(id, { description: item.target.textContent.trim() });

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

/**
 * Add eventlisters on the targeted todo
 */
const onFocusInTodo = () => {
  const todos = document.querySelectorAll('.todo-title');
  todos.forEach((item) => {
    item.addEventListener('blur', updateTodo);
    item.addEventListener('input', updateTodo);
    item.addEventListener('keyup', updateTodo);
    item.addEventListener('paste', updateTodo);
  });
};

/**
 * Add event listeners when the user completes a todo
 */
const selectTodo = () => {
  const todos = document.querySelectorAll('.todo-check input');
  todos.forEach((item) => {
    item.addEventListener('change', () => {
      const id = parseInt(item.getAttribute('data-id'), 10);
      const checked = item.hasAttribute('checked');

      // User can see toggle before todos update in storage
      item.toggleAttribute('checked');
      Todos.updateData(id, { completed: !checked, selected: !checked });
      document.querySelector('.todo-wrapper').innerHTML = generateTodos();
      onFocusInTodo();
      selectTodo();
    });
  });
};

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
