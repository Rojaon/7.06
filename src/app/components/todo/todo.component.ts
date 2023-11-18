import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  newTodo: string = '';
  todos: Task[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push( new Task(this.newTodo,false,false) );
      this.newTodo = '';
    }
  }

  completeTodo(todo: Task) {
    todo.completed = !todo.completed;
  }

  postponeTodo(todo: Task) {
    todo.postponed = !todo.postponed;
  }

  deleteTodo(todo: Task) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  cleanCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  restorePostponed() {
    this.todos.forEach((todo) => (todo.postponed = false));
  }

  filteredTodos(): Task[] {
    return this.todos.filter((todo) => !todo.postponed);
  }

}
