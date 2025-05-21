import { Task } from './Task';

export class TaskManager {
  constructor() {
    this.tasks = [];
    this.idCounter = 1;
  }

  addTask(title, description, dueDate) {
    const task = new Task(this.idCounter++, title, description, dueDate);
    this.tasks.push(task);
    return task;
  }

  editTask(id, updatedTask) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.isComplete = !task.isComplete;
  }

  getTasks(filter = 'all') {
    switch (filter) {
      case 'complete':
        return this.tasks.filter(task => task.isComplete);
      case 'incomplete':
        return this.tasks.filter(task => !task.isComplete);
      default:
        return this.tasks;
    }
  }
}
