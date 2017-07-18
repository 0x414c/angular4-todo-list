export class Todo {
  public done: boolean;
  public text: string;
  public dueDateTime: Date;

  constructor(done: boolean, text: string, dueDateTime: Date) {
    this.done = done;
    this.text = text;
    this.dueDateTime = dueDateTime;
  }
}
