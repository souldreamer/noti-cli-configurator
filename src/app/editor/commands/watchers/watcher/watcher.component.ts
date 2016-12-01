import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WatcherConfiguration } from '../../../../models/configuration';

@Component({
	selector: 'app-watcher',
	templateUrl: './watcher.component.html',
	styleUrls: ['./watcher.component.css']
})
export class WatcherComponent implements OnInit {
	@Input() label: string;
	@Input() watcher: WatcherConfiguration;
	@Output() update = new EventEmitter<WatcherConfiguration>();
	@Output() remove = new EventEmitter();
	
	constructor() { }
	
	ngOnInit() {
	}
	
}
