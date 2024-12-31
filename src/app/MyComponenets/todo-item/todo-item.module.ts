import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TodoItemComponent  } from './todo-item.component';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [NgFor],
  exports: [TodoItemComponent ]
})
export class TodoItemModule { }
