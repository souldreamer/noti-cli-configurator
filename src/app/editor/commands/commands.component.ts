import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../../services/commands.service';
import { CliCommandAlias } from '../../models/configuration';
import { Animations } from '../../shared/animations';

@Component({
	selector: 'app-commands',
	templateUrl: './commands.component.html',
	styleUrls: ['./commands.component.css'],
	animations: [
		Animations.AnimateHeightOnShowHide
	]
})
export class CommandsComponent implements OnInit {
	
	constructor(private commands: CommandsService) { }
	
	ngOnInit() {
	}
	
	addCommand() {
		this.commands.add({
			name: '',
			cliParameters: [],
			watchers: {}
		});
	}
	
	addAlias() {
		this.updateCurrentCommand({aliases: [...this.commands.currentCommand.aliases, {cliParameters: []}]});
	}
	
	updateCurrentCommand(commandPartial: any) {
		this.commands.setCurrent(Object.assign({}, this.commands.currentCommand, commandPartial));
	}
	updateCurrentCommandAlias(index: number, cliParameters: string[]) {
		const aliases =
			cliParameters.length === 0 ?
		    this.commands.currentCommand.aliases.filter((alias, aliasIndex) => aliasIndex !== index) :
			Object.assign([], this.commands.currentCommand.aliases, { [index]: { cliParameters } });
		
		this.updateCurrentCommand({ aliases });
	}
	
	getParametersFromString(parameterString: string): string[] {
		return parameterString.split(/\s+/).filter(piece => piece);
	}
	
	doesSectionHaveData(section: string): boolean {
		return (
			this.commands.currentCommand != null &&
			this.commands.currentCommand[section] != null &&
			this.commands.currentCommand[section].length > 0
		);
	}
	
	log(event: any) {
		console.log(event);
	}
}
