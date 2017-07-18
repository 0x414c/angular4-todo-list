import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()
export class TodosService {
  private todos: Todo[];

  constructor(private localStorageService: LocalStorageService) {
    this.todos = TODOS; // TEMP
  }

  getTodos(): Promise<Todo[]> {
    return Promise.resolve(this.todos);
  }

  setTodos(todos: Todo[]): Promise<void> {
    this.todos = todos;

    return Promise.resolve();
  }

  create(todo: Todo): Promise<void> {
    this.todos.push(todo);

    return Promise.resolve();
  }
}
