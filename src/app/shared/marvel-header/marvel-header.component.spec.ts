/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarvelHeaderComponent } from './marvel-header.component';
import { MarvelHeaderModule } from './marvel-header.module';

describe('MarvelHeaderComponent', () => {
  let component: MarvelHeaderComponent;
  let fixture: ComponentFixture<MarvelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MarvelHeaderModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
