import { HeroesResponse } from './../models/heroes.model';
import { HeroesService } from './heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';


describe('HeroesService', () => {
  let service: HeroesService;
  const heroesResponseStub: HeroesResponse = {
    data: {
      results: []
    }
  };


  beforeEach( async (() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    }).compileComponents().then(() => {
      service = TestBed.get(HeroesService);
    });
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addHeroes ', () => {
    spyOn(service.$heroesData,'next').and.callThrough();
    service.addHeroes(heroesResponseStub);
    expect(service.$heroesData.next).toHaveBeenCalled();
  });

  it('should call getHeroes ', () => {
    spyOn(service['heroesRepository'],'getHeroes').and.callThrough();
    service.getHeroes();
    expect(service['heroesRepository'].getHeroes).toHaveBeenCalled();
  });

  it('should call searchHeroes ', () => {
    spyOn(service['heroesRepository'],'searchHeroes').and.callThrough();
    service.searchHeroes('hero');
    expect(service['heroesRepository'].searchHeroes).toHaveBeenCalled();
  });

});
