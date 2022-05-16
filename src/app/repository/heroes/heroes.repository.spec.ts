import { HttpClient } from '@angular/common/http';
import { HeroesRepository } from './heroes.repository';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
describe('HeroesRepository', () => {

  let service: HeroesRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(HeroesRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getHeroes', () => {
    const httpClientStub: HttpClient = TestBed.get(HttpClient);
    spyOn(httpClientStub, 'get').and.callThrough();
    service.getHeroes();
    expect(httpClientStub.get).toHaveBeenCalled();
  });

  it('should call searchHeroes', () => {
    const httpClientStub: HttpClient = TestBed.get(HttpClient);
    spyOn(httpClientStub, 'get').and.callThrough();
    service.searchHeroes('name');
    expect(httpClientStub.get).toHaveBeenCalled();
  });

});
