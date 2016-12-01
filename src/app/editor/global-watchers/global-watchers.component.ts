import { Component, OnInit } from '@angular/core';
import { GlobalWatchersService } from '../../services/global-watchers.service';

@Component({
	selector: 'app-global-watchers',
	templateUrl: './global-watchers.component.html',
	styleUrls: ['./global-watchers.component.css']
})
export class GlobalWatchersComponent implements OnInit {
	
	constructor(public globalWatchers: GlobalWatchersService) { }
	
	ngOnInit() {
	}
	
	addNew() {
		this.globalWatchers.add({
			name: 'dummy',
			type: 'regex'
		});
	}
}
