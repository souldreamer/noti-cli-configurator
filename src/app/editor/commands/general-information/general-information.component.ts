import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getParameters, getDisplayString } from '../../../util/command';
import { CliCommand } from '../../../models/configuration';

@Component({
	selector: 'app-general-information',
	templateUrl: './general-information.component.html',
	styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
	@Input() command: CliCommand;
	@Output() update = new EventEmitter<any>();
	
	getParameters = getParameters;
	getDisplayString = getDisplayString;
	
	constructor() { }
	
	ngOnInit() {
	}
}
