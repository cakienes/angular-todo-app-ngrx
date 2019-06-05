import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../Redux/app.reducer';
import * as TodoActions from '../../redux/todo/todo.actions';
import { Todo } from '../../Redux/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('textInput', { static: false }) textInput: ElementRef;
  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  store: Store<AppState>;

  constructor(_store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.store = _store;
    this.checkField.valueChanges.subscribe((state: AppState) => {
      const action = new TodoActions.ToggleAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  ngOnInit() {
    this.textField.setValue(this.todo.text);
    this.checkField.setValue(this.todo.completed, { emitEvent: false });
  }

  updateText() {
    if (this.textField.valid && this.editing) {
      const id = this.todo.id;
      const newText: string = this.textField.value;
      const action = new TodoActions.UpdateAction(id, newText.trim());
      this.store.dispatch(action);
      this.editing = false;
    }
  }

  activeEditMode() {
    this.editing = true;
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }

  deleteTodo() {
    const id = this.todo.id;
    const action = new TodoActions.DeleteTodoAction(id);
    this.store.dispatch(action);
  }
}
