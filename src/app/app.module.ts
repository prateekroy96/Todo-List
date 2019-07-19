import { TodoManagerService } from './services/todo-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoPageComponent,
    TodoItemComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
