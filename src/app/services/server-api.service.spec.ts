import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ServerApiService } from './server-api.service';

describe('ServerApiService', () => {
  let service: ServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve data from the API via GET', () => {
    const dummyPosts = [
      {
        
          servers:
            [
              {
                model:"HP DL120G7Intel G850",
                ram:{"memory":"4","unit":"GB","type":"DDR3"},
                hdd:{"memory":"1","count":"4","unit":"TB","type":"SATA2"}
              }
            ]
      }
       
    ]
    service.getServersData(250,44000,'2,4,6,34','SAS,SATA2','AmsterdamAMS-01').subscribe(res => {
      expect(res).toBeTruthy();
      expect(res).toEqual(dummyPosts);
    });
  });
});
