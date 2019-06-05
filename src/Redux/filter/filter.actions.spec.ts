import * as FilterActions from './filter.actions';
import * as FilterConstants from './filter.constants';
import { FilterOptions } from './filter.enum';

describe('Redux: FilterActions', () => {
  describe('Test for SetFilterAction', () => {
    it('should return an action with type an filter', () => {
      const action = new FilterActions.SetFilterAction(FilterOptions.SHOW_ALL);
      expect(action.type).toEqual(FilterConstants.SET_FILTER);
      expect(action.filter).toEqual(FilterOptions.SHOW_ALL);
    });
  });
});
