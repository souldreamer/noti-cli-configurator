import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { AliasComponent } from './alias/alias.component';
import { AliasesComponent } from './aliases.component';

@NgModule({
	imports: [
		CommonModule,
	    MaterialModule
	],
	declarations: [AliasesComponent, AliasComponent],
	exports: [MaterialModule, AliasesComponent]
})
export class AliasesModule { }
