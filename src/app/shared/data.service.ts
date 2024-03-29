import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  todos: Todo[] = [
    new Todo('This is a test todo', false),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aliquid suscipit dolores in dignissimos sint, ipsum sapiente unde autem illo!',
      true
    ),
  ];

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
