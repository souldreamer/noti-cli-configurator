import { Action } from '@ngrx/store';
import { type } from '../util/type';
import { CliCommand } from '../models/configuration';

export const ActionTypes = {
	SELECT_CURRENT: type('[Commands] Select current command'),
	SET: type('[Commands] Set command'),
	SET_BY_INDEX: type('[Commands] Set command by index'),
	SET_CURRENT: type('[Commands] Set current command'),
	ADD: type('[Commands] Add command'),
	DELETE: type('[Commands] Delete command'),
	DELETE_BY_INDEX: type('[Commands] Delete command by index'),
	DELETE_CURRENT: type('[Commands] Delete current command'),
	LOAD_COMMANDS: type('[Commands] Load'),
	RESET_COMMANDS: type('[Commands] Reset')
};

export class SelectCurrentAction implements Action {
	type = ActionTypes.SELECT_CURRENT;
	constructor(public payload: CliCommand) {}
}

export class SetAction implements Action {
	type = ActionTypes.SET;
	constructor(public payload: {oldCommand: CliCommand, command: CliCommand}) {}
}

export class SetByIndexAction implements Action {
	type = ActionTypes.SET_BY_INDEX;
	constructor(public payload: {index: number, command: CliCommand}) {}
}

export class SetCurrentAction implements Action {
	type = ActionTypes.SET_CURRENT;
	constructor(public payload: CliCommand) {}
}

export class AddAction implements Action {
	type = ActionTypes.ADD;
	constructor(public payload: CliCommand) {}
}

export class DeleteAction implements Action {
	type = ActionTypes.DELETE;
	constructor(public payload: CliCommand) {}
}

export class DeleteByIndexAction implements Action {
	type = ActionTypes.DELETE_BY_INDEX;
	constructor(public payload: number) {}
}

export class DeleteCurrentAction implements Action {
	type = ActionTypes.DELETE_CURRENT;
	constructor() {}
}

export class LoadCommandsAction implements Action {
	type = ActionTypes.LOAD_COMMANDS;
	constructor(public payload: CliCommand[]) {}
}

export class ResetCommandsAction implements Action {
	type = ActionTypes.RESET_COMMANDS;
	constructor() {}
}

export type Actions =
	SelectCurrentAction |
	SetAction |
	SetByIndexAction |
	SetCurrentAction |
	AddAction |
	DeleteAction |
	DeleteByIndexAction |
	DeleteCurrentAction |
	LoadCommandsAction |
	ResetCommandsAction;
