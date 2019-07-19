import { Todo } from './../../models/todo-model';
import { TodoManagerService } from './../../services/todo-manager.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})


export class TodoPageComponent implements OnInit {

  status: string = "in";
  todoList: Todo[] = [];
  itemId:number = this.todoService.len()+1;
  todoListHeight: number = 0.9*window.innerHeight-160;
  @Output() statusEvent = new EventEmitter<object>();
  @Input() user: string;

  constructor(private todoService: TodoManagerService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodo();
  }

  addTodo(title: string,date: string) {

    if (title == "")
    return alert("Invalid task title")
    else if (isNaN((new Date(date)).getTime()))
    return alert("Invalid date")
    let todoItem:Todo;
    todoItem = {
      id: this.itemId,
      title: title,
      status: false,
      date: new Date(date)
    }
    this.todoService.addTodo(todoItem);
    this.itemId = this.todoService.len()+1;

  }

  Exit() {
    this.user = "";
    this.status = "out";
    this.sendStatus();
    this.todoService.reset();
    this.todoList = this.todoService.getTodo();
  }

  sendStatus() {
    this.statusEvent.emit({ status: this.status, user: this.user });
  }

  deleteTodo($event: number){
    this.todoService.deleteTodo($event);
    this.todoList = this.todoService.getTodo();
    this.itemId = this.todoService.len()+1;
  }

  toggleTodo($event: number){
    this.todoService.toggleTodo($event);
    this.todoList = this.todoService.getTodo();
  }

  upTodo($event: number){
    this.todoService.upTodo($event);
    this.todoList = this.todoService.getTodo();
  }

  downTodo($event: number){
    this.todoService.downTodo($event);
    this.todoList = this.todoService.getTodo();
  }

}
