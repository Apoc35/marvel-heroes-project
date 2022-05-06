import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelFooterComponent } from './marvel-footer.component';

describe('MarvelFooterComponent', () => {
  let component: MarvelFooterComponent;
  let fixture: ComponentFixture<MarvelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
