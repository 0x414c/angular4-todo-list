import { Component } from '@angular/core';
import { Location } from '@angular/common';
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
export class AddComponent {
  private todoText: string;
  private todoDueDateTime: Date;

  constructor(
    private todosService: TodosService,
    private location: Location,
    private router: Router,
  ) { }

  goToTodos(): void {
    this.router.navigate(['/todos']);
  }

  onSubmit(form: any, event: Event) {
    this.addTodo();
  }

  addTodo(): void {
    let todo = new Todo(false, this.todoText, moment(this.todoDueDateTime).toDate());
    console.log(todo);

    this.todosService
      .create(todo)
      .then(() => this.goToTodos());
  }
}
