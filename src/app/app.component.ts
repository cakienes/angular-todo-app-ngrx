import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.reducer';
import * as TodoActions from '../redux/todo/todo.actions';
import { Todo } from '../redux/todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TodoAppNGRX';

  constructor(private store: Store<AppState>) {
    this.populateTodos();
    this.updateTodos();
  }

  private populateTodos() {
    const todos: Todo[] = JSON.parse(localStorage.getItem('todo-app-ngrx') || '[]');
    this.store.dispatch(new TodoActions.PopulateTodosAction(todos));
  }

  private updateTodos() {
    this.store.select('todos').subscribe(todos => {
      localStorage.setItem('todo-app-ngrx', JSON.stringify(todos));
    });
  }
}
