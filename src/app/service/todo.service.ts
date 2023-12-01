import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []
  constructor() { }

  todoLocali!: Todo[];

  recuperaTasks() {
    return this.todos
  }

  creaTasks(task: string, index: number) {
    this.todos.push({id: index, title: task, completed: false})
    console.log(this.todos)
  }

  updateTask(data: Partial<Todo>, id: number) {
    this.todos = this.todos.map(task => task.id == id ? {...task, ...data} : task);
    return this.todos.find(task => task.id == id) as Todo
  }
}
