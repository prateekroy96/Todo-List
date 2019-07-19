import { Todo } from './../../models/todo-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() toggleEvent = new EventEmitter<number>();
  @Output() upEvent = new EventEmitter<number>();
  @Output() downEvent = new EventEmitter<number>();

  currentTime: Date = new Date(Date.now());
  correctedDate: string = "";
  duration: string = "";
  done: string;
  color: string;
  constructor() { }

  ngOnInit() {

    let arr: string[] = (this.item.date + "").split(" ")

    this.correctedDate = arr[0] + ", " + arr[1] + "-" + arr[2] + "-" + arr[3];

    this.done = (this.item.status) ? "fa fa-check" : "fa fa-circle-o";
    this.color = (this.item.status) ? "btn btn-dark" : "btn btn-light";

    let t: number = this.item.date.getTime() - this.currentTime.getTime();

    if (t >= 0) {
      if (t > 86400000) {
        let day: number = Math.round(t / 86400000);
        this.duration = day + ((day == 1) ? " Day" : " Days");
      }
      else {
        let day: number = Math.round(t / 3600000);
        this.duration = day + ((day == 1) ? " Hour" : " Hours");
      }

    }
    else
      this.duration = "Overdue!";
  }

  line() {
    return {lineThrough: this.item.status}
  }



  toggle() {
    this.toggleEvent.emit(this.item.id);
    this.done = (this.item.status) ? "fa fa-check" : "fa fa-circle-o";
    this.color = (this.item.status) ? "btn btn-dark" : "btn btn-light";

  }

  delete() {
    this.deleteEvent.emit(this.item.id)
  }

  up() {
    this.upEvent.emit(this.item.id)
  }

  down() {
    this.downEvent.emit(this.item.id)
  }

}
