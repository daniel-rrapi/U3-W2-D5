import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {
  todos!: Todo[];
  task!: string;

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    const todos = this.todoSrv.recuperaTasks()
    this.todos = todos
  }

}
