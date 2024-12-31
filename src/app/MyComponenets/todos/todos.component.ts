import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: false, // have to make it false explicitly
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: any[] = [
    {
      sno: 1,
      title: "Learn Angular",
      desc: "Need to learn Angular framework"
    },
    {
      sno: 2,
      title: "Learn TypeScript",
      desc: "Need to learn TypeScript programming"
    },
    {
      sno: 3,
      title: "Build Project",
      desc: "Build a project using Angular"
    }
  ];
}
