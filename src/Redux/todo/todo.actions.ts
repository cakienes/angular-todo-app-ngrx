import { Action } from '@ngrx/store';
import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  POPULATE_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
} from './todo.constants';
import { Todo } from './todo.model';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: number;

  constructor(public text: string) {
    this.id = Math.random();
  }
}

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor(public todos: Todo[]) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class UpdateAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(public id: number, public text: string) {}
}

export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export class CompletedAllAction implements Action {
  readonly type = COMPLETE_ALL_TODO;
}

export type TodoActionType =
  | AddTodoAction
  | PopulateTodosAction
  | ToggleAction
  | DeleteTodoAction
  | UpdateAction
  | ClearCompletedAction
  | CompletedAllAction;
