import { generateTodos } from './components.js';
import Todos from './todos.js';

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
export const onFocusInTodo = () => {
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
export const selectTodo = () => {
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
