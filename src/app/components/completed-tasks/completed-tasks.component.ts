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
  loaded: boolean = false
  task!: string;
  

  constructor(private todoSrv: TodoService) { }

  cerca(ciao: any):boolean {
    return ciao.completed === false
  }
  cerca2(ciao: any):boolean {
    return ciao.completed === true
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true
      const todos = this.todoSrv.recuperaTasks()
      this.todos = todos
    }, 2000);
  }

}
