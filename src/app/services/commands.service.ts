import { Injectable, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/let';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as commands from '../actions/commands';

import { CliCommand } from '../models/configuration';

@Injectable()
export class CommandsService implements OnDestroy {
	currentCommand$: Observable<CliCommand>;
	commands$: Observable<CliCommand[]>;
	
	currentCommand: CliCommand;
	commands: CliCommand[];
	
	subscriptions: Subscription[] = [];
	
	constructor(private store: Store<fromRoot.State>) {
		this.currentCommand$ = this.store.let(fromRoot.getCurrentCommand);
		this.commands$ = this.store.let(fromRoot.getCommands);
		this.subscriptions.push(
			this.currentCommand$.subscribe(command => this.currentCommand = command),
			this.commands$.subscribe(commands => this.commands = commands)
		);
	}
	
	selectCurrent(command: CliCommand) {
		this.store.dispatch(new commands.SelectCurrentAction(command));
	}
	set(oldCommand: CliCommand | number, command: CliCommand) {
		if (typeof oldCommand === 'number') {
			this.store.dispatch(new commands.SetByIndexAction({index: oldCommand, command}));
		} else {
			this.store.dispatch(new commands.SetAction({oldCommand, command}));
		}
	}
	setCurrent(command: CliCommand) {
		this.store.dispatch(new commands.SetCurrentAction(command));
	}
	add(command: CliCommand) {
		this.store.dispatch(new commands.AddAction(command));
	}
	delete(command: CliCommand | number) {
		if (typeof command === 'number') {
			this.store.dispatch(new commands.DeleteByIndexAction(command));
		} else {
			this.store.dispatch(new commands.DeleteAction(command));
		}
	}
	deleteCurrent() {
		this.store.dispatch(new commands.DeleteCurrentAction());
	}
	load(newCommands: CliCommand[]) {
		this.store.dispatch(new commands.LoadCommandsAction(newCommands));
	}
	reset() {
		this.store.dispatch(new commands.ResetCommandsAction());
	}
	
	ngOnDestroy() {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
