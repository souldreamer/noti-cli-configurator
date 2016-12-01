/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatcherInputComponent } from './watcher-input.component';

describe('WatcherInputComponent', () => {
  let component: WatcherInputComponent;
  let fixture: ComponentFixture<WatcherInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatcherInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
