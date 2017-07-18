import { Component } from '@angular/core';
import { Location } from '@angular/common';

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
  ) { }

  goBack(): void {
    this.location.back();
  }

  validate(): boolean {
    return this.todoText && this.todoText.length > 0;
  }

  onSubmit(form: any, event: Event) {
    event.preventDefault();
    this.addTodo();
  }

  addTodo(): void {
    let todo = new Todo(false, this.todoText, moment(this.todoDueDateTime).toDate());
    console.log(todo);

    this.todosService
      .create(todo)
      .then(() => this.goBack());
  }
}
