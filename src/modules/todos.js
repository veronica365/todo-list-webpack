export default class Todos {
  static todo = "todos-todo-list-webpack";

  static setTodo(todos) {
    const newTodos = JSON.stringify(todos);
    localStorage.setItem(this.todo, newTodos);
  }

  static addData(todo) {
    const todos = this.listData();
    todos.push(todo);
    this.setTodo(todos);
  }

  static listData() {
    let todos = JSON.parse(localStorage.getItem(this.todo));
    return todos || [];
  }

  static removeData(id) {
    let todos = this.listData();
    todos = todos.filter((todo) => String(todo.index) !== id);
    todos = todos.map((item, counter) => ({ ...item, index: counter + 1 }));
    this.setTodo(todos);
  }

  static updateData(counter, newDescription) {
    let todos = this.listData();
    todos = todos.map((item) => {
      if (item.index === counter) {
        item.description = newDescription;
      }
      return item;
    });
    this.setTodo(todos);
  }
}
