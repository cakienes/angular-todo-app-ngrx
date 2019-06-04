import * as FilterActions from './filter.actions';
import * as FilterConstants from './filter.constants';
import { FilterOptions } from './filter.enum';

export function FilterReducer(state: string = FilterOptions.SHOW_ALL, action: FilterActions.SetFilterAction) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case FilterConstants.SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
}
