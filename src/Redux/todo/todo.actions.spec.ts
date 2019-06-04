import * as TodoActions from './todo.actions';
import * as TodoConstants from './todo.constants';

describe('Redux: TodoActions', () => {
  describe('Test for AddTodoAction', () => {
    it('should return an action with random id', () => {
      const action = new TodoActions.AddTodoAction('new todo');
      expect(action.type).toEqual(TodoConstants.ADD_TODO);
      expect(action.id).toBeGreaterThan(0);
    });
  });

  describe('Test for PopulateTodosAction', () => {
    it('should return an action with todos', () => {
      const action = new TodoActions.PopulateTodosAction([]);
      expect(action.type).toEqual(TodoConstants.POPULATE_TODOS);
      expect(action.todos).toEqual([]);
    });
  });

  describe('Test for DeleteTodoAction', () => {
    it('should return an action with an id', () => {
      const action = new TodoActions.DeleteTodoAction(1);
      expect(action.type).toEqual(TodoConstants.DELETE_TODO);
      expect(action.id).toEqual(1);
    });
  });

  describe('Test for ToggleAction', () => {
    it('should return an action with an id', () => {
      const action = new TodoActions.ToggleAction(1);
      expect(action.type).toEqual(TodoConstants.TOGGLE_TODO);
      expect(action.id).toEqual(1);
    });
  });

  describe('Test for UpdateAction', () => {
    it('should return an action with an id and text', () => {
      const action = new TodoActions.UpdateAction(1, 'new text');
      expect(action.type).toEqual(TodoConstants.UPDATE_TODO);
      expect(action.id).toEqual(1);
      expect(action.text).toEqual('new text');
    });
  });

  describe('Test for ClearCompletedAction', () => {
    it('should return an action the right type', () => {
      const action = new TodoActions.ClearCompletedAction();
      expect(action.type).toEqual(TodoConstants.CLEAR_COMPLETED_TODO);
    });
  });

  describe('Test for CompletedAllAction', () => {
    it('should return an action the right type', () => {
      const action = new TodoActions.CompletedAllAction();
      expect(action.type).toEqual(TodoConstants.COMPLETE_ALL_TODO);
    });
  });
});
