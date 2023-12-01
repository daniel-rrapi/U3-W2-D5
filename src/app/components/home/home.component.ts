import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos!: Todo[];
  task!: string;
  index: number = 0;
  loaded: boolean = false

  constructor(private todoSrv: TodoService ) {}

  cerca(ciao: any):boolean {
    return ciao.completed === true
  }
  cerca2(ciao: any):boolean {
    return ciao.completed === false
  }
  ngOnInit(): void {
    setTimeout(() =>{
      this.loaded = true
      const todos =  this.todoSrv.recuperaTasks();
      this.todos = todos
    }, 2000)
  }
  addNewTask(task: string) {
    setTimeout(() => {
      this.todoSrv.creaTasks(this.task, this.index);
      this.ngOnInit()
      this.index += 1
      this.task = ''
    }, 2000);
  
  }
  taskDone(id: number, i: number) {
    setTimeout(() => {
      this.todoSrv.updateTask({completed: true}, id);
      this.todos.splice(i, 1)
    }, 2000)
  }


}
