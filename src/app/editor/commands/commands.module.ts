import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsSelectorComponent } from './commands-selector/commands-selector.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { CommandsComponent } from './commands.component';
import { Ng2SelectModule } from 'ng2-material-select';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AliasesModule } from './aliases/aliases.module';
import { WatchersModule } from './watchers/watchers.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		Ng2SelectModule,
	    AliasesModule,
	    WatchersModule
	],
	declarations: [CommandsComponent, CommandsSelectorComponent, GeneralInformationComponent],
	exports: [MaterialModule, CommandsComponent]
})
export class CommandsModule { }
