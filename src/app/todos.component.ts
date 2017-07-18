import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { TodosService } from './todos.service';
import { Todo } from './todo';

@Component({
  selector: 'todos',

  templateUrl: './todos.component.html',

  styleUrls: [
    './todos.component.css',
  ],

  providers: [ TodosService ],
})
export class TodosComponent implements OnInit {
  private todos: Todo[];
  private searchQuery: string;

  constructor(
    private router: Router,
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos()
      .then(todos => this.todos = todos);
  }

  remaining(): number {
    return this.todos.reduce((acc, it) => {
      return acc + Number(!it.done);
    }, 0);
  }

  done(): void {
    this.todos = this.todos.filter(todo => {
      return !todo.done;
    });
  }

  shouldNotify(todo: Todo): boolean {
    const DAYS_BEFORE_NOTIFICATION = 3;

    if (todo.dueDateTime) {
      let now = moment();

      return Math.abs(now.diff(todo.dueDateTime, 'days', true)) < DAYS_BEFORE_NOTIFICATION;
    } else {
      return false;
    }
  }
}
