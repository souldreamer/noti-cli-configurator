import {
	Component, OnInit, Input, Output, EventEmitter, ViewChild
} from '@angular/core';
import { MdInput } from '@angular/material';

@Component({
	selector: 'app-watcher-input',
	templateUrl: './watcher-input.component.html',
	styleUrls: ['./watcher-input.component.css']
})
export class WatcherInputComponent implements OnInit {
	@Input() name: string = 'base';
	@Input() value: string = 'base';
	@Input() allowDelete: boolean = true;
	@Output() change = new EventEmitter<{name: string, value: string}>();
	@Output() delete = new EventEmitter();
	@ViewChild('nameInput') nameInput: MdInput;
	@ViewChild('valueInput') valueInput: MdInput;
	
	constructor() { }
	
	ngOnInit() {
	}
	
	valueChange() {
		const nameInputValue = this.nameInput.value;
		const valueInputValue = this.valueInput.value;
		
		if (this.name === nameInputValue && this.value === valueInputValue) return;
		
		this.change.emit({name: nameInputValue, value: valueInputValue});
	}
}
