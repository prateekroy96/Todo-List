
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {

  status: string = "out";
  user: string = "";
  @Output() statusEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  Enter(name: string) {

    if (name != "") {
      this.user = name;
      this.status = "in";
      this.sendStatus();
    }
    else
      alert("Enter valid username!");
  }

  sendStatus() {
    this.statusEvent.emit({ status: this.status, user: this.user });
  }
}
