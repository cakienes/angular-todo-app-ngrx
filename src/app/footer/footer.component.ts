import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../Redux/app.reducer';
import * as TodoActions from '../../redux/todo/todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  countTodos: number;
  currentFilter: string;
  showFooter: boolean;
  store: Store<AppState>;

  constructor(_store: Store<AppState>) {
    this.store = _store;
    this.readFilterState();
    this.readTodosState();
  }

  ngOnInit() {}

  clearCompleted() {
    const action = new TodoActions.ClearCompletedAction();
    this.store.dispatch(action);
  }

  completedAll() {
    const action = new TodoActions.CompletedAllAction();
    this.store.dispatch(action);
  }

  private readTodosState() {
    this.store.select('todos').subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
      this.showFooter = todos.length > 0;
    });
  }

  private readFilterState() {
    this.store.select('filter').subscribe(fitler => {
      this.currentFilter = fitler;
    });
  }
}
