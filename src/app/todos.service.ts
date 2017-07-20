import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LocalStorageService } from 'angular-2-local-storage';

import { Todo } from './todo';

@Injectable()
export class TodosService {
  private readonly _localStorageKey = 'todos';
  private _todos: BehaviorSubject<Todo[]>;
  private _data: { todos: Todo[] };

  constructor(
    private _localStorageService: LocalStorageService,
  ) {
    this._data = { todos: [] };
    this._todos = new BehaviorSubject<Todo[]>([]);
  }

  fetchTodos(): void {
    this._data.todos = (this._localStorageService.get<Todo[]>(this._localStorageKey) || []);
    this._todos.next(this._data.todos);
  }

  private _flushTodos(): void {
    this._localStorageService.set(this._localStorageKey, this._data.todos);
  }

  private _finalizeDataChanges(): void {
    this._flushTodos();
    this._todos.next(this._data.todos);
  }

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  setTodos(todos: Todo[]) {
    this._data.todos = todos;
    this._finalizeDataChanges();
  }

  createTodo(todo: Todo) {
    this._data.todos.push(todo);
    this._finalizeDataChanges();
  }

  setTodoDone(id: string, done: boolean): void {
    console.log(id, done);

    this._data.todos = this._data.todos.map(todo => {
      if (todo.id === id) {
        todo.done = done;
      }

      return todo;
    });
    this._finalizeDataChanges();
  }

  removeAllTodosIfDone(): void {
    this._data.todos = this._data.todos.filter(todo => {
      return !todo.done;
    });
    this._finalizeDataChanges();
  }
}
