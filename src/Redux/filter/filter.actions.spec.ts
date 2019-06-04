import * as FilterActions from './filter.actions';
import * as FilterConstants from './filter.constants';

describe('Redux: FilterActions', () => {
  describe('Test for SetFilterAction', () => {
    it('should return an action with type an filter', () => {
      const action = new FilterActions.SetFilterAction('new filter');
      expect(action.type).toEqual(FilterConstants.SET_FILTER);
      expect(action.filter).toEqual('new filter');
    });
  });
});
