import * as uuid from 'uuid';

export class Todo {
  public done: boolean;
  public text: string;
  public dueDateTime: Date;
  public id: string;

  constructor(done: boolean, text: string, dueDateTime: Date) {
    this.done = done;
    this.text = text;
    this.dueDateTime = dueDateTime;
    this.id = uuid.v4();
  }
}
