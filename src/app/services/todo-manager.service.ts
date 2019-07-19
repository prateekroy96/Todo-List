import { Todo } from './../models/todo-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {

  todoList: Todo[] = [
    {
      id: 1,
      title: "Dummy Task",
      status: false,
      date: new Date("2020-01-01")
    }
  ]

  constructor() { }

  reset(){
    this.todoList = [
      {
        id: 1,
        title: "Dummy Task",
        status: false,
        date: new Date("2020-01-01")
      }
    ]
  }

  getTodo() {
    return this.todoList;
  }

  addTodo(item: Todo) {
    this.todoList.push(item);

  }

  sortTodo() {
    for (let i of this.todoList)
      i.id = this.todoList.indexOf(i) + 1;
  }

  deleteTodo(id: number) {
    this.todoList.splice(id - 1, 1);
    this.sortTodo();
  }

  toggleTodo(id: number) {
    this.todoList[id - 1].status = !this.todoList[id - 1].status;
  }

  upTodo(id: number) {
    if (id != 1) {
      let temp: Todo = this.todoList[id - 2];
      this.todoList[id - 2] = this.todoList[id - 1];
      this.todoList[id - 1] = temp;
      this.sortTodo();
    }
  }

  downTodo(id: number) {
    if (id < this.todoList.length) {
      let temp: Todo = this.todoList[id];
      this.todoList[id] = this.todoList[id - 1];
      this.todoList[id - 1] = temp;
      this.sortTodo();
    }
  }

  len() {
    return this.todoList.length;
  }
}
