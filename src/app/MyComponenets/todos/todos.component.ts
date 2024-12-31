import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: '.todos.component.html',
  styleUrls: ['./todos.component.css'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TodosComponent {}
