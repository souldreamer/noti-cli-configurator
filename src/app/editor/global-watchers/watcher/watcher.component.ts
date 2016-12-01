import {
	Component, OnInit, Input, Output, EventEmitter, HostBinding, OnChanges, SimpleChanges, NgZone
} from '@angular/core';
import { GlobalWatcherConfiguration } from '../../../models/configuration';
import { Animations } from '../../../shared/animations';
import { objectToArray } from '../../../util/index';

@Component({
	selector: 'app-watcher',
	templateUrl: './watcher.component.html',
	styleUrls: ['./watcher.component.css'],
	animations: [
		Animations.AnimateHeightOnShowHide,
		Animations.AnimateHeightOnShowHideStrict,
		Animations.AnimateHeightOnEnterLeaveStrict,
	    Animations.AnimateSizeOnShowHide,
	    Animations.AnimateRotation,
	    Animations.FlyInOutOnShowHide
	]
})
export class WatcherComponent implements OnInit, OnChanges {
	@Input() label: string = 'Watcher';
	@Input() watcher: GlobalWatcherConfiguration;
	@Output() remove = new EventEmitter();
	
	@Input() open: boolean = false;
	@Output() openChange = new EventEmitter<boolean>();
	
	@HostBinding('@flyInOutOnShowHide') get flyInOut() { return 'show'; }
	
	canAnimateChildren: boolean = false;
	
	parameters: {name: string, value: string}[] = [];
	variables: {name: string, value: string}[] = [];
	
	constructor() { }
	
	ngOnInit() {
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes['watcher'] != null) {
			const watcherValue = changes['watcher'].currentValue as GlobalWatcherConfiguration;
			if (watcherValue == null) return;
			
			this.variables = objectToArray(watcherValue.parameters && watcherValue.parameters.variables);
			this.parameters = objectToArray(watcherValue.parameters).filter(({name, value}) => name !== 'variables');
		}
	}
	
	toggleEditing() {
		if (this.open === true) this.canAnimateChildren = false;
		setTimeout(() => {
			this.open = !this.open;
			this.openChange.emit(this.open);
		}, 100);
	}
	
	toggleShowChildren() {
		setTimeout(() => {
			this.canAnimateChildren = this.open;
		}, 0);
	}
	
	logAnimation(event) {
		console.log(event);
	}
	
	addParameter() {
		this.parameters = [...this.parameters, {name: '', value: ''}];
	}
	
	addVariable() {
		this.variables = [...this.variables, {name: '', value: ''}];
	}
}
