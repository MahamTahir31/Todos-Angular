import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [NgFor],
  exports: [TodosComponent]
})
export class TodosModule { }
