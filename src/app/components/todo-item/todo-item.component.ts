import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed // DYNAMIC CLASS BINDING
    };
    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo): void {
    console.log('delete', todo);
  }

}
