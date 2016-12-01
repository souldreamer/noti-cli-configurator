import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatcherInputComponent } from './watcher-input/watcher-input.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { JsonFailsafePipe } from './json-failsafe.pipe';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule
	],
	declarations: [WatcherInputComponent, JsonFailsafePipe],
	exports: [MaterialModule, WatcherInputComponent]
})
export class SharedModule { }
