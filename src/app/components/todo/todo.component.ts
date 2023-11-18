import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoList: string[] = [];
  task: string;

  constructor() {
    this.task = "";
    this.todoList.push('Review your schedule for the day.');
    this.todoList.push('Check and respond to emails during dedicated times.');
    this.todoList.push('Stretch or practice yoga for flexibility.');
    this.todoList.push('Plan for the next day by organizing tasks and priorities.');
  }

  addShoppingItem() {
    this.todoList.push(this.task);
    this.task = "";
  }

}
