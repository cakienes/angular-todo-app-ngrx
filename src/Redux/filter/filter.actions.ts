import { Action } from '@ngrx/store';
import * as FilterConstants from './filter.constants';
import { FilterOptions } from './filter.enum';

export class SetFilterAction implements Action {
  readonly type = FilterConstants.SET_FILTER;

  constructor(public filter: FilterOptions) {}
}
