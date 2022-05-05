import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelContainerComponent } from './marvel-container.component';

describe('MarvelContainerComponent', () => {
  let component: MarvelContainerComponent;
  let fixture: ComponentFixture<MarvelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
