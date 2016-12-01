/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommandsSelectorComponent } from './commands-selector.component';

describe('CommandsSelectorComponent', () => {
	let component: CommandsSelectorComponent;
	let fixture: ComponentFixture<CommandsSelectorComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [ CommandsSelectorComponent ]
			})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(CommandsSelectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
