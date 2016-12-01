/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AliasesComponent } from './aliases.component';

describe('AliasesComponent', () => {
	let component: AliasesComponent;
	let fixture: ComponentFixture<AliasesComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [ AliasesComponent ]
			})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(AliasesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
