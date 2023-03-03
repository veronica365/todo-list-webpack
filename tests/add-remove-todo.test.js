import { addTodo, removeTodo } from '../src/modules/paint-ui.js';

const storageName = 'todos-todo-list-webpack-veronica365-2023';
describe('Add and delete methods', () => {
  beforeAll(() => {
    document.body.innerHTML = '<section class="todos"><div class="todo-wrapper"></div>';
  });

  describe('checks for the add method', () => {
    test('should be able to add a todo to the local storage', () => {
      addTodo('This is the first todo');
      expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(1);
    });

    test('should be able to add a todo to the dom', () => {
      addTodo('This is the second todo');
      const todos = document.querySelectorAll('article');
      expect(todos.length).toBe(2);
    });
  });

  describe('checks for the delete method', () => {
    test('should be able to remove a todo to the local storage', () => {
      addTodo('This is the third todo');
      expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(3);

      removeTodo('3');
      expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(2);
    });

    test('should be able to remove a todo to the dom', () => {
      let todos = document.querySelectorAll('article');
      expect(todos.length).toBe(2);

      removeTodo('2');
      todos = document.querySelectorAll('article');
      expect(todos.length).toBe(1);
    });

    test('should be able to remove the right todo to the dom', () => {
      addTodo('This is the second todo');
      const secondTodo = JSON.parse(localStorage.getItem(storageName))[1];
      expect(secondTodo.index).toBe(2);
      expect(secondTodo.description).toBe('This is the second todo');
      expect(secondTodo.completed).toBe(false);

      let todos = document.querySelectorAll('article');
      expect(todos.length).toBe(2);

      removeTodo('2');
      todos = document.querySelectorAll('article');
      expect(todos.length).toBe(1);

      const firstTodo = JSON.parse(localStorage.getItem(storageName))[0];
      expect(firstTodo.index).toBe(1);
      expect(firstTodo.description).toBe('This is the first todo');
      expect(firstTodo.completed).toBe(false);
    });
  });
});
