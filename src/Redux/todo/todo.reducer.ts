import * as TodoActions from './todo.actions';
import * as TodoConstants from './todo.constants';
import { Todo } from './todo.model';

const initialState: Todo[] = [];

export function TodosReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
  switch (action.type) {
    case TodoConstants.ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    }
    case TodoConstants.POPULATE_TODOS: {
      return action.todos;
    }
    case TodoConstants.TOGGLE_TODO: {
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    }
    case TodoConstants.DELETE_TODO: {
      return state.filter(todo => action.id !== todo.id);
    }
    case TodoConstants.UPDATE_TODO: {
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            text: action.text,
          };
        } else {
          return todo;
        }
      });
    }
    case TodoConstants.CLEAR_COMPLETED_TODO: {
      return state.filter(todo => !todo.completed);
    }
    case TodoConstants.COMPLETE_ALL_TODO: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => {
        return {
          ...todo,
          completed: !areAllMarked,
        };
      });
    }
    default: {
      return state;
    }
  }
}
