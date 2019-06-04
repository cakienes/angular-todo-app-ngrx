import { Action } from '@ngrx/store';
import * as FilterConstants from './filter.constants';

export class SetFilterAction implements Action {
  readonly type = FilterConstants.SET_FILTER;

  constructor(public filter: string) {}
}
