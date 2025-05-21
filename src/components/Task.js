export class Task {
  constructor(id, title, description, dueDate, isComplete = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }
}
