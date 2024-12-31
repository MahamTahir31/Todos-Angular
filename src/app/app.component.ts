import { Component } from '@angular/core';
import { TodosComponent } from './MyComponenets/todos/todos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TodosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppComponent {
  title = 'first-angular-todos';
  constructor() {
    // Example dynamic title update
    // setTimeout(() => {
    //   this.title = "on todos app";
    // }, 2000);
  }
}
