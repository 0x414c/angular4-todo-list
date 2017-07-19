import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

import { Todo } from './todo';

@Injectable()
export class TodosService {
  private static LOCALSTORAGE_KEY = 'todos';
  private todos: Todo[] = null;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  private fetchTodos(): void {
    this.todos = this.localStorageService.get<Todo[]>(TodosService.LOCALSTORAGE_KEY) || [];
  }

  private flushTodos(): void {
    this.localStorageService.set(TodosService.LOCALSTORAGE_KEY, this.todos);
  }

  getTodos(): Promise<Todo[]> {
    if (!this.todos) {
      this.fetchTodos();
    }

    return Promise.resolve(this.todos);
  }

  setTodos(todos: Todo[]): Promise<void> {
    this.todos = todos;
    this.flushTodos();

    return Promise.resolve();
  }

  create(todo: Todo): Promise<void> {
    if (!this.todos) {
      this.fetchTodos();
    }

    this.todos.push(todo);
    this.flushTodos();

    return Promise.resolve();
  }
}
