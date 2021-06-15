import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonApiService } from './common-api.service';

describe('CommonApiService', () => {
  let service: CommonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve data from the API via GET', () => {
    const dummyPosts = [
      {
        ramList: [
          { "id": 1, "label": "2GB", "value": 2 }
        ],
        hddList: [
          { "name": "SAS", "checked": false }
        ],
        locations: [
          { "id": 1, "value": "AmsterdamAMS-01" }
        ]
      }
    ]
    service.getCommonData().subscribe(res => {
      expect(res).toBeTruthy();
      expect(res).toEqual(dummyPosts);
    });
  });

  it('set Max value to subject ', () => {
    const maxVal = 1000;
    service.setMaxStorage(maxVal); 
  });

  it('set Min value to subject ', () => {
    const minVal = 1000;
    service.setMinStorage(minVal); 
  });

  it('set ram value ', () => {
    const rams = [2,3,4];
    service.setSelectedRams(rams); 
  });

  it('set Hdd value ', () => {
    const locValue = ['AmsterdamAMS-01'];
    service.setSelectedHdds(locValue); 
  });

  it('set location ', () => {
    let locValue  = ['Choose ...'];
    locValue = [''];
    service.setSelectedLocation(locValue); 
  });

});
