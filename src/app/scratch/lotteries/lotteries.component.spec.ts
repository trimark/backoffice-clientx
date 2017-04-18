/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LotteriesComponent } from './lotteries.component';

describe('LotteriesComponent', () => {
  let component: LotteriesComponent;
  let fixture: ComponentFixture<LotteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
