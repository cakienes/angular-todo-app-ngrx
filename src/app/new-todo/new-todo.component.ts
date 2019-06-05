import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../Redux/app.reducer';
import * as TodoActions from '../../redux/todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  textField: FormControl;
  store: Store<AppState>;

  constructor(_store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
    this.store = _store;
  }

  ngOnInit() {}

  saveTodo() {
    if (this.textField.valid) {
      const text: string = this.textField.value;
      const action = new TodoActions.AddTodoAction(text.trim());
      this.store.dispatch(action);
      this.textField.setValue('', { emitEvent: false });
    }
  }
}
