import { addTodo, clearCompletedTodos } from "../src/modules/paint-ui.js";

const storageName = "todos-todo-list-webpack-veronica365-2023";
describe("clearCompletedTodos method", () => {
  beforeAll(() => {
    document.body.innerHTML =
      '<section class="todos"><div class="todo-wrapper"></div><div class="todo-button link"><span>Clear To Do list project</span></div></section>';
  });

  test("should be able to clear all todos from the local storage when none is created", () => {
    expect(JSON.parse(localStorage.getItem(storageName))).toBe(null);
    clearCompletedTodos();
    expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(0);
  });

  test("should be able to clear only completed items", () => {
    addTodo("This is the first todo");
    expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(1);
    clearCompletedTodos();
    expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(1);

    const newData = JSON.stringify([
      {
        description: "This is the first todo",
        selected: false,
        completed: true,
        index: 1,
      },
    ]);
    localStorage.setItem(storageName, newData);
    expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(1);
    expect(document.querySelectorAll("article").length).toBe(1);
    clearCompletedTodos();
    expect(JSON.parse(localStorage.getItem(storageName)).length).toBe(0);
    expect(document.querySelectorAll("article").length).toBe(0);
  });
});
