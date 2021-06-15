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
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.minParam = 1000;
    component.minParam = 22222;
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

  it('should call getPostDetails and get response as empty array', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;    
    const service = fixture.debugElement.injector.get(CommonApiService);
    
    component.minParam = 1000;
    component.minParam = 22222;
    component.getServers(1,1,[1,2], ['SAS'], ['SS']);
    fixture.whenStable()
      .then(() => {
        service.storageMin.subscribe((res: any) => {
          component.minParam = res;
        })
      });
    expect(component.minParam).toEqual(22222);
    
    //component.ge();
    //tick(100);
    //expect(component.postDetails).toEqual([]);
  })

  it("should call getUsers and return list of users",() => {
    // Arrange
    const response: any[] = [];
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;    
    const service = fixture.debugElement.injector.get(ServerApiService);
    spyOn(service, 'getServersData').and.returnValue(of(response));   

    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(component.serverList).toEqual(response);
    });
  });
  
 
});
