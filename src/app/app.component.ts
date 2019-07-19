import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  _state:string = "out";
  user:string = "";

  random:string = "hey!";

  homeClass(){
    return (this._state == "out")? {hidden: false}:{hidden: true}
  }

  todoClass(){
    return (this._state == "in")? {hidden: false}:{hidden: true}
  }

  set state(val:string){
    this._state = val;
  }

  receiveStatus($event){
    this._state = $event.status;
    this.user = $event.user;
  }
}
