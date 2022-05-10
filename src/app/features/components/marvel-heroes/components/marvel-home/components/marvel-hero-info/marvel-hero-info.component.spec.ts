import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroInfoComponent } from './marvel-hero-info.component';

describe('MarvelHeroInfoComponent', () => {
  let component: MarvelHeroInfoComponent;
  let fixture: ComponentFixture<MarvelHeroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelHeroInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHeroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
