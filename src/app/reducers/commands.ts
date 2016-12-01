import { CliCommand } from '../models/configuration';
import * as commands from '../actions/commands';
import { Observable } from 'rxjs';
import '@ngrx/core/add/operator/select';
import { getQuoted, getItemAtNormalizedIndex } from '../util';

export interface State {
	currentCommand: CliCommand | null;
	commands: CliCommand[];
}

const initialState: State = {
	currentCommand: null,
	commands: require('../mocks/commands.json')
};

export function reducer(state = initialState, action: commands.Actions): State {
	switch (action.type) {
	case commands.ActionTypes.SELECT_CURRENT:
		return {
			currentCommand: action.payload,
			commands: state.commands
		};
	case commands.ActionTypes.SET_BY_INDEX:
		return reducer(state, new commands.SetAction({oldCommand: getItemAtNormalizedIndex(state.commands, action.payload.index), command: action.payload.command}));
	case commands.ActionTypes.SET_CURRENT:
		return reducer(state, new commands.SetAction({oldCommand: state.currentCommand, command: action.payload}));
	case commands.ActionTypes.SET:
		if (
			state.commands
				.filter(command => command === action.payload.oldCommand)
				.every(command => command === action.payload.command) &&
			action.payload.command === state.currentCommand
		) return state;
		
		return {
			currentCommand: action.payload.command,
			commands: state.commands.map(
				command => command === action.payload.oldCommand ? action.payload.command : command
			)
		};
	case commands.ActionTypes.ADD:
		const addedCommand = Object.assign({}, action.payload);
		return {
			currentCommand: addedCommand,
			commands: [...state.commands, addedCommand]
		};
	case commands.ActionTypes.DELETE:
		if (confirm(`Are you sure you want to delete the ${getQuoted(action.payload.name)}command?`) === false) return state;
		return {
			currentCommand: state.commands.length > 1 ? state.commands[0] : null,
			commands: state.commands.filter(command => command !== action.payload)
		};
	case commands.ActionTypes.DELETE_BY_INDEX:
		return reducer(state, new commands.DeleteAction(getItemAtNormalizedIndex(state.commands, action.payload)));
	case commands.ActionTypes.DELETE_CURRENT:
		return reducer(state, new commands.DeleteAction(state.currentCommand));
	case commands.ActionTypes.LOAD_COMMANDS:
		return {
			currentCommand: null,
			commands: Object.assign([], action.payload)
		};
	case commands.ActionTypes.RESET_COMMANDS:
		return initialState;
	default:
		return state;
	}
}

export function getCurrentCommand(state$: Observable<State>) {
	return state$.select(state => state.currentCommand);
}

export function getCommands(state$: Observable<State>) {
	return state$.select(state => state.commands);
}
