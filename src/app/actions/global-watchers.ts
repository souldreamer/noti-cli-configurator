import { Action } from '@ngrx/store';
import { type } from '../util/type';
import { GlobalWatcherConfiguration } from '../models/configuration';

export const ActionTypes = {
	ADD: type('[Global watchers] Add'),
	SET: type('[Global watchers] Set'),
	SET_BY_INDEX: type('[Global watchers] Set by index'),
	DELETE: type('[Global watchers] Delete'),
	DELETE_BY_INDEX: type('[Global watchers] Delete by index'),
	LOAD: type('[Global watchers] Load'),
	RESET: type('[Global watchers] Reset')
}

export class AddAction implements Action {
	type = ActionTypes.ADD;
	constructor(public payload: GlobalWatcherConfiguration) {}
}

export class SetByIndexAction implements Action {
	type = ActionTypes.SET_BY_INDEX;
	constructor(public payload: {index: number, watcher: GlobalWatcherConfiguration}) {}
}

export class SetAction implements Action {
	type = ActionTypes.SET;
	constructor(public payload: {oldWatcher: GlobalWatcherConfiguration, watcher: GlobalWatcherConfiguration}) {}
}

export class DeleteByIndexAction implements Action {
	type = ActionTypes.DELETE_BY_INDEX;
	constructor(public payload: number) {}
}

export class DeleteAction implements Action {
	type = ActionTypes.DELETE;
	constructor(public payload: GlobalWatcherConfiguration) {}
}

export class LoadAction implements Action {
	type = ActionTypes.LOAD;
	constructor(public payload: GlobalWatcherConfiguration[]) {}
}

export class ResetAction implements Action {
	type = ActionTypes.RESET;
	constructor() {}
}

export type Actions =
	AddAction |
	SetAction |
	SetByIndexAction |
	DeleteAction |
	DeleteByIndexAction |
	LoadAction |
	ResetAction;
