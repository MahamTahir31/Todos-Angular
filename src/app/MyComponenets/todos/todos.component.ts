import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  standalone: false, // have to make it false explicitly
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})  
export class TodosComponent {
  // localItem: String = '';
  todos: any[] = [];
  // localStorage: any;
  // constructor(){
  //   this.localStorage.getItem("todos");
  //   if(this.localItem == null){
  //     this.todos = [];
  //   }
  //   else{
  //     this.todos = JSON.parse(this.localItem);
  //   }
  // }
  
  title: string = ''; // Holds the title of the new todo
  desc: string = ''; // Holds the description of the new todo


  constructor() {
    try {
      // Load todos from localStorage
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    } catch (error) {
      console.error('Error parsing todos from localStorage:', error);
      // Fallback to an empty todos array if parsing fails
      this.todos = [];
    }
  }

  onSubmit() {
    // Ensure title and description are provided
    if (!this.title || !this.desc) {
      alert('Please fill out both the title and description.');
      return;
    }

    // Create a new todo object
    const newTodo = {
      sno: this.todos.length + 1,
      title: this.title,
      desc: this.desc,
    };

    // Add the new todo to the list
    this.todos.push(newTodo);

     // Update localStorage
     try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }

    // Clear the input fields
    this.title = '';
    this.desc = '';
  }

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);

    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }

    // Update localStorage
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.error('Error updating todos in localStorage:', error);
    }
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);

    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.error('Error updating todos in localStorage:', error);
    }
    
  }
}
