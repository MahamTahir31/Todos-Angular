import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosModule } from './MyComponenets/todos/todos.module';
import {TodoItemModule} from './MyComponenets/todo-item/todo-item.module'
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosModule, TodoItemModule, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'first-angular-todos';
  constructor() {
    // Example dynamic title update
    setTimeout(() => {
      this.title = "on todos app";
    }, 2000);
  }
}
