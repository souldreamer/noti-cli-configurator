import { GlobalWatcherConfiguration } from '../models/configuration';
import * as globalWatchers from '../actions/global-watchers';
import { Observable } from 'rxjs';
import '@ngrx/core/add/operator/select';
import { getQuoted, getItemAtNormalizedIndex } from '../util';

export interface State {
	globalWatchers: GlobalWatcherConfiguration[];
}

const initialState: State = {
	globalWatchers: require('../mocks/global-watchers.json')
};

export function reducer(state = initialState, action: globalWatchers.Actions): State {
	switch (action.type) {
	case globalWatchers.ActionTypes.ADD:
		return {
			globalWatchers: [...state.globalWatchers, action.payload]
		};
	case globalWatchers.ActionTypes.DELETE:
		if (confirm(`Are you sure you want to delete the ${getQuoted(action.payload.name)}watcher?`) === false) return state;
		return {
			globalWatchers: state.globalWatchers.filter(watcher => watcher !== action.payload)
		};
	case globalWatchers.ActionTypes.DELETE_BY_INDEX:
		return reducer(state, new globalWatchers.DeleteAction(getItemAtNormalizedIndex(state.globalWatchers, action.payload)));
	case globalWatchers.ActionTypes.SET:
		if (state.globalWatchers
				.filter(watcher => watcher === action.payload.oldWatcher)
				.every(watcher => watcher === action.payload.watcher)
		) return state;
		
		return {
			globalWatchers: state.globalWatchers.map(
				watcher => watcher === action.payload.oldWatcher ? action.payload.watcher : watcher
			)
		};
	case globalWatchers.ActionTypes.SET_BY_INDEX:
		return reducer(state, new globalWatchers.SetAction({oldWatcher: getItemAtNormalizedIndex(state.globalWatchers, action.payload.index), watcher: action.payload.watcher}));
	case globalWatchers.ActionTypes.LOAD:
		return {
			globalWatchers: Object.assign([], action.payload)
		};
	case globalWatchers.ActionTypes.RESET:
		return initialState;
	default:
		return state;
	}
}

export function getGlobalWatchers(state$: Observable<State>) {
	return state$.select(state => state.globalWatchers);
}
