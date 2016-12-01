import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CliCommand, WatcherConfiguration } from '../../../models/configuration';
import { doesSectionHaveData } from '../../../util/command';

@Component({
	selector: 'app-watchers',
	templateUrl: './watchers.component.html',
	styleUrls: ['./watchers.component.css']
})
export class WatchersComponent implements OnInit {
	@Input() type: string;
	@Input() command: CliCommand;
	@Output() update = new EventEmitter<any>();
	
	doesSectionHaveData() {
		return doesSectionHaveData(this.command, `watchers.${this.type}`);
	}
	
	constructor() { }
	
	ngOnInit() {
	}
	
	get watchers(): (string | WatcherConfiguration)[] {
		return this.command.watchers[this.type];
	}
	
	addWatcher() {
		
	}
	updateWatcher(watcher: WatcherConfiguration, newWatcher: WatcherConfiguration) {
		
	}
}
