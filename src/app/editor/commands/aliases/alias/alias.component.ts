import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CliCommandAlias } from '../../../../models/configuration';
import { getDisplayString } from '../../../../util/command';
import { Animations } from '../../../../shared/animations';

@Component({
	selector: 'app-alias',
	templateUrl: './alias.component.html',
	styleUrls: ['./alias.component.css'],
	animations: [
		Animations.FlyInOutOnShowHide
	]
})
export class AliasComponent implements OnInit {
	@Input() label: string;
	@Input() alias: CliCommandAlias;
	@Output() update = new EventEmitter<string>();
	
	@HostBinding('@flyInOutOnShowHide') get flyInOut() { return 'show'; }
	
	getDisplayString = getDisplayString;
	
	constructor() { }
	
	ngOnInit() {
	}
}
