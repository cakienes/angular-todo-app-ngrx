import * as FilterActions from './filter.actions';
import { FilterOptions } from './filter.enum';
import { FilterReducer } from './filter.reducer';

describe('Redux: FilterReducer', () => {
  it('should return "new filter" as new state', () => {
    const action = new FilterActions.SetFilterAction(FilterOptions.SHOW_ALL);
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual(FilterOptions.SHOW_ALL);
  });

  it('should return the same state with null action', () => {
    const action = null;
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual('old state');
  });

  it('should return the same state with unknown action', () => {
    const action: any = new FilterActions.SetFilterAction(FilterOptions.SHOW_ALL);
    action.type = 'what';
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual('old state');
  });
});
