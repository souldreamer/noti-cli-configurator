import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-variable',
	templateUrl: './variable.component.html',
	styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {
	@Input() label: string;
	@Input() value: any;
	
	constructor() { }
	
	ngOnInit() {
	}
}
