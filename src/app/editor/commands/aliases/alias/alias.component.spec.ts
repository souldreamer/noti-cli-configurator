/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AliasComponent } from './alias.component';

describe('AliasComponent', () => {
	let component: AliasComponent;
	let fixture: ComponentFixture<AliasComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [ AliasComponent ]
			})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(AliasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
