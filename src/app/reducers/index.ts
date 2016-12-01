import { Observable } from 'rxjs';
import '@ngrx/core/add/operator/select';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromGlobalWatchers from './global-watchers';
import * as fromCommands from './commands';

export interface State {
	globalWatchers: fromGlobalWatchers.State;
	commands: fromCommands.State;
};

const reducers = {
	globalWatchers: fromGlobalWatchers.reducer,
	commands: fromCommands.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}

export function getGlobalWatchersState(state$: Observable<State>) {
	return state$.select(state => state.globalWatchers);
}

export const getGlobalWatchers = compose(fromGlobalWatchers.getGlobalWatchers, getGlobalWatchersState);

export function getCommandsState(state$: Observable<State>) {
	return state$.select(state => state.commands);
}

export const getCurrentCommand = compose(fromCommands.getCurrentCommand, getCommandsState);
export const getCommands = compose(fromCommands.getCommands, getCommandsState);
