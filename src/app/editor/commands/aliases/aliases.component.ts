import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getParameters, doesSectionHaveData, getDisplayString } from '../../../util/command';
import { CliCommand, CliCommandAlias } from '../../../models/configuration';
import { isEqual } from 'lodash';

@Component({
	selector: 'app-aliases',
	templateUrl: './aliases.component.html',
	styleUrls: ['./aliases.component.css']
})
export class AliasesComponent implements OnInit {
	@Input() command: CliCommand;
	@Output() update = new EventEmitter<any>();
	
	getParameters = getParameters;
	doesSectionHaveData() {
		return doesSectionHaveData(this.command, 'aliases');
	}
	
	constructor() { }
	
	ngOnInit() {
	}
	
	addCommandAlias() {
		this.update.emit({aliases: [...(this.command.aliases || []), {cliParameters: []}]});
	}
	updateCommandAlias(alias: CliCommandAlias, parameters: string) {
		const cliParameters = this.getParameters(parameters);
		const index = this.command.aliases.indexOf(alias);
		
		if (isEqual(this.command.aliases[index].cliParameters, cliParameters)) return;
		
		const aliases =
			cliParameters.length === 0 ?
			this.command.aliases.filter(currentAlias => currentAlias !== alias) :
			Object.assign([], this.command.aliases, { [index]: { cliParameters } });
		
		this.update.emit({ aliases });
	}
	
	trackCommandAliases(index: number, alias: CliCommandAlias) {
		return index;
	}
}
