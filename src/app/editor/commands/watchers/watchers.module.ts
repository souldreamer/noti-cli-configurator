import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { WatcherComponent } from './watcher/watcher.component';
import { WatchersComponent } from './watchers.component';

@NgModule({
	imports: [
		CommonModule,
	    MaterialModule
	],
	declarations: [WatchersComponent, WatcherComponent],
	exports: [MaterialModule, WatchersComponent]
})
export class WatchersModule { }
