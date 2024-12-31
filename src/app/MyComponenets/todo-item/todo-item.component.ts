import { Component,  Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: false, // have to make it false explicitly
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo = new Todo;
  

}
