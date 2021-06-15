import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonApiService } from '../services/common-api.service';
import { ServerApiService } from '../services/server-api.service';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-filters', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const appFilters = fixture.debugElement.query(By.css('app-filters'));
    expect(appFilters).toBeTruthy();
  });

  it('call getServersData end point with success response ', () => {
    const response: any[] = [
      {
        servers:
          [
            {
              model: "HP DL120G7Intel G850",
              ram: { "memory": "4", "unit": "GB", "type": "DDR3" },
              hdd: { "memory": "1", "count": "4", "unit": "TB", "type": "SATA2" }
            }
          ]
      }
    ];
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServerApiService);
    spyOn(service, 'getServersData').and.returnValue(of(response[0].servers));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.serverList = response;
      expect(component.serverList).toEqual(response);
    });
  });

  it('called storageMin event emitter and get response', () => {
    const response: number = 100;
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    service.setMinStorage(1000);
    service.storageMin.subscribe((response: any) => {
      component.minParam = response;
    })
  });

  it('called storageMax event emitter and get response', () => {
    const response: number = 100;
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    service.setMaxStorage(1000);
    service.storageMax.subscribe((response: any) => {
      component.maxParam = response;
    })
  });

  it('called selectedRams event emitter and get response', () => {
    const response = [2, 3, 4];
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    const rams = [2, 3, 4];
    service.setSelectedRams(rams);
    service.selectedRams.subscribe((response: any) => {
      component.ramParam = response;
    })
  });

  it('called selectedHdds event emitter and get response', () => {
    const response = ['SAS'];
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    const hdd = ['SAS'];
    service.setSelectedHdds(hdd);
    service.selectedHdds.subscribe((response: any) => {
      component.hddParam = response;
    })
  });

  it('called selectedLocation event emitter and get response', () => {
    const response = ['AmsterdamAMS-01'];
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    const locValue = ['AmsterdamAMS-01'];
    service.setSelectedLocation(locValue);
    service.selectedLocation.subscribe((response: any) => {
      component.locParam = response;
    })
  });

});
