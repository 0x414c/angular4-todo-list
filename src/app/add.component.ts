import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'add',

  templateUrl: './add.component.html',

  styleUrls: [
    './add.component.css',
  ],

  providers: [ TodosService ],
})
export class AddComponent implements OnInit {
  private todoText: string;
  private todoDueDateTime: Date;

  constructor(
    private _todosService: TodosService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._todosService.fetchTodos();
  }

  private goToTodos(): void {
    this._router.navigate(['/todos']);
  }

  onSubmitAddForm(): void {
    this.addTodo();
  }

  addTodo(): void {
    let todo = new Todo(false, this.todoText, moment(this.todoDueDateTime).toDate());

    this._todosService.createTodo(todo);
    this.goToTodos();
  }
}
