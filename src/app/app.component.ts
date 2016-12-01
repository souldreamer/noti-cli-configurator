import { Component } from '@angular/core';
import { GlobalWatchersService } from './services/global-watchers.service';
import { CommandsService } from './services/commands.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
		private globalWatchers: GlobalWatchersService,
	    private commands: CommandsService
	) {}
	
	reset() {
		this.globalWatchers.reset();
		this.commands.reset();
	}
}
