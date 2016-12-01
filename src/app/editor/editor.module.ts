import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugModule } from './debug/debug.module';
import { CommandsModule } from './commands/commands.module';
import { GlobalWatchersModule } from './global-watchers/global-watchers.module';
import { EditorComponent } from './editor.component';
import { MaterialModule } from '@angular/material';
import { Ng2SelectModule } from 'ng2-material-select';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CommandsModule,
		GlobalWatchersModule,
	    DebugModule,
	    MaterialModule,
	    Ng2SelectModule
	],
	declarations: [EditorComponent],
	exports: [MaterialModule, EditorComponent],
	entryComponents: []
})
export class EditorModule { }
