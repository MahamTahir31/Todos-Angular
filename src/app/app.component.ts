import { Component } from '@angular/core';
import { TodosModule } from './MyComponenets/todos/todos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosModule],
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
