import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../Redux/app.reducer';
import * as FilterActions from '../../redux/filter/filter.actions';
import { FilterOptions } from '../../redux/filter/filter.enum';
import * as TodoActions from '../../redux/todo/todo.actions';
import { Todo } from '../../Redux/todo/todo.model';
import { getStateCompleted, getVisibleTodos } from '../../redux/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  checkField: FormControl;

  store: Store<AppState>;
  route: ActivatedRoute;

  constructor(_store: Store<AppState>, _route: ActivatedRoute) {
    this.store = _store;
    this.route = _route;
  }

  ngOnInit() {
    this.checkField = new FormControl();
    this.readParams();
    this.readStateCompleted();
    this.readTodosState();
  }

  toggleAll() {
    this.store.dispatch(new TodoActions.CompletedAllAction());
  }

  private setFilter(filter: string) {
    switch (filter) {
      case 'active': {
        this.store.dispatch(new FilterActions.SetFilterAction(FilterOptions.SHOW_ACTIVE));
        break;
      }
      case 'completed': {
        this.store.dispatch(new FilterActions.SetFilterAction(FilterOptions.SHOW_COMPLETED));
        break;
      }
      default: {
        this.store.dispatch(new FilterActions.SetFilterAction(FilterOptions.SHOW_ALL));
        break;
      }
    }
  }

  private readTodosState() {
    this.store.select(getVisibleTodos).subscribe(todos => {
      this.todos = todos;
    });
  }

  private readStateCompleted() {
    this.store.select(getStateCompleted).subscribe(status => {
      this.checkField.setValue(status);
    });
  }

  private readParams() {
    this.route.params.subscribe(params => {
      this.setFilter(params.filter);
    });
  }
}
