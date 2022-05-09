import { MarvelHomeModule } from './marvel-home.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarvelHomeComponent } from './marvel-home.component';

describe('MarvelHomeComponent', () => {
  let component: MarvelHomeComponent;
  let fixture: ComponentFixture<MarvelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MarvelHomeModule, HttpClientTestingModule, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
