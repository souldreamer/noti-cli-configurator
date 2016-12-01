import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { ConfigurationService } from './services/configuration.service';
import { GlobalWatchersService } from './services/global-watchers.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { CommandsService } from './services/commands.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		EditorModule,
		StoreModule.provideStore(reducer),
		StoreDevtoolsModule.instrumentOnlyWithExtension()
	],
	exports: [MaterialModule],
	providers: [ConfigurationService, GlobalWatchersService, CommandsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
