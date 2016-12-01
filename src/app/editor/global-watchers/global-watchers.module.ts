import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatcherComponent } from './watcher/watcher.component';
import { GlobalWatchersComponent } from './global-watchers.component';
import { MaterialModule } from '@angular/material';
import { Ng2SelectModule } from 'ng2-material-select';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
	    MaterialModule,
	    Ng2SelectModule
	],
	declarations: [GlobalWatchersComponent, WatcherComponent],
	exports: [MaterialModule, GlobalWatchersComponent]
})
export class GlobalWatchersModule { }
