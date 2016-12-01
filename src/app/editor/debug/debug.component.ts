import { Component, OnInit, Input } from '@angular/core';

interface Variable {
	label: string;
	value: any;
}

@Component({
	selector: 'app-debug',
	templateUrl: './debug.component.html',
	styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
	@Input() variables: Variable[] = [];
	
	constructor() { }
	
	ngOnInit() {
	}
}
