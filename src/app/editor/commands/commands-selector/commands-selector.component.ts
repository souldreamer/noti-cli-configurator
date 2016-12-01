import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CliCommand } from '../../../models/configuration';

@Component({
	selector: 'app-commands-selector',
	templateUrl: './commands-selector.component.html',
	styleUrls: ['./commands-selector.component.css']
//	changeDetection: ChangeDetectionStrategy.OnPush
//  -> cannot set OnPush because ngModel doesn't play well with OnPush
//      (see https://github.com/angular/angular/issues/10816)
})
export class CommandsSelectorComponent implements OnInit {
	@Input() currentCommand: CliCommand | null = null;
	@Input() commands: CliCommand[] = [];
	@Input() displayBy: string = 'name';
	@Output() change = new EventEmitter<CliCommand>();
	@Output() deleteCurrent = new EventEmitter();
	
	constructor() { }
	
	ngOnInit() {
	}
}
