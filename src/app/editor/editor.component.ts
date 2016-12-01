import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
//import { CommandsComponent } from './commands/commands.component';
import { ConfigurationService } from '../services/configuration.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
//	private dialogRef: MdDialogRef<CommandsComponent>;
	openDialog() {
//		this.dialogRef = this.dialog.open(CommandsComponent, {disableClose: true});
	}
	
	constructor(private dialog: MdDialog, private config: ConfigurationService) {
		this.config.commands$.subscribe(commands => {
			this.commands = commands;
			this.selectedCommand = this.commands[0];
		});
		this.config.globalWatchers$.subscribe(watchers => {
			this.globalWatchers = watchers;
		})
	}
	
	ngOnInit() {
	}
	
	log(thing) {
		console.log(thing);
	}
	
	getParametersFromString(str: string): string[] {
		return str.split(/\s+/).filter(piece => piece);
	}
	
	addAlias(): void {
		if (!this.selectedCommand) return;
		this.selectedCommand.aliases = this.selectedCommand.aliases || [];
		this.selectedCommand.aliases.push({index: this.selectedCommand.aliases.length, parameters: []});
	}
	setAlias(alias: any, parameters: string[]): void {
		if (parameters.length === 0) {
			this.selectedCommand.aliases = this.selectedCommand.aliases.filter(a => a.index !== alias.index);
			this.selectedCommand.aliases.forEach(scAlias => {
				if (scAlias.index > alias.index) scAlias.index--;
			});
		} else {
			alias.parameters = parameters;
		}
	}
	
	addCommand(): void {
		this.selectedCommand = {index: this.commands.length, name: '', parameters: []};
		this.commands.push(this.selectedCommand);
	}
	removeCommand(command): void {
		if (!window.confirm('Do you want to delete the command?')) return;
		
		this.commands = this.commands.filter(cmd => cmd.index !== command.index);
		this.commands.forEach(cmd => {
			if (cmd.index > command.index) cmd.index--;
		});
		if (this.selectedCommand === command) this.selectedCommand = this.commands[0];
	}
	
	doesSectionHaveData(section: string): boolean {
		return this.selectedCommand && this.selectedCommand[section] && this.selectedCommand[section].length > 0;
	}
	
	selectedCommand: any = {};
	commands: any[] = [];
	globalWatchers: any[] = [];
}
