import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableComponent } from './variable/variable.component';
import { DebugComponent } from './debug.component';
import { MaterialModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
	    MaterialModule
	],
	declarations: [DebugComponent, VariableComponent],
	exports: [MaterialModule, DebugComponent]
})
export class DebugModule { }
