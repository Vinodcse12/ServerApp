import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonApiService } from './common-api.service';

describe('CommonApiService', () => {
  let service: CommonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CommonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

});
