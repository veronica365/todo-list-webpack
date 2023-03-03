import { addTodo } from '../src/modules/paint-ui.js';
import { updateStorageTodo, completeTodo } from '../src/modules/interactive.js';

const storageName = 'todos-todo-list-webpack-veronica365-2023';
describe('Update and complete methods', () => {
  beforeAll(() => {
    document.body.innerHTML = '<section class="todos"><div class="todo-wrapper"></div><div class="todo-button link"><span>Clear To Do list project</span></div></section>';
  });

  describe('updateStorageTodo method', () => {
    test('should be able to edit a todo text', () => {
      addTodo('This is the first todo');

      const firstTodo = JSON.parse(localStorage.getItem(storageName))[0];
      expect(firstTodo.index).toBe(1);
      expect(firstTodo.description).toBe('This is the first todo');
      expect(firstTodo.completed).toBe(false);

      updateStorageTodo(1, 'This is the first todo updated');
      expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(1);

      // Check the todo data from storage
      const updated = JSON.parse(localStorage.getItem(storageName))[0];
      expect(updated.index).toBe(1);
      expect(updated.description).toBe('This is the first todo updated');
      expect(updated.completed).toBe(false);
    });

    test('should be able to mark a todo as', () => {
      addTodo('This is the second todo');
      completeTodo(2, false);

      // Check the todo data from storage
      const updated = JSON.parse(localStorage.getItem(storageName))[1];
      expect(updated.index).toBe(2);
      expect(updated.description).toBe('This is the second todo');
      expect(updated.completed).toBe(true);
    });
    test('should be able to mark a todo as using the dom', () => {
      const completed = document
        .querySelectorAll('article')[0]
        .querySelector('.todo-check input');
      completed.click();
      const hasAttr = completed.hasAttribute('checked');
      expect(hasAttr).toBe(true);

      // Check the todo data from storage
      const updated = JSON.parse(localStorage.getItem(storageName))[0];
      expect(updated.index).toBe(1);
      expect(updated.description).toBe('This is the first todo updated');
      expect(updated.completed).toBe(true);
    });
  });
});
