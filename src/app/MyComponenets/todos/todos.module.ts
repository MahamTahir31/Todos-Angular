import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [TodosComponent],
  imports: [NgFor, FormsModule, CommonModule],
  exports: [TodosComponent]
})
export class TodosModule { }
