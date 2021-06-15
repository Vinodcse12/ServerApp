import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { CommonApiService } from '../services/common-api.service';
import * as Rx from 'rxjs';
import { of } from 'rxjs';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;
  let options = {
    showTicksValues: true,
    floor: 0,
    ceil: 10,
    stepsArray: [
      { value: 0, legend: "0" }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('should render ngx-slider', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    fixture.detectChanges();
    const ngxSlider = fixture.debugElement.query(By.css('ngx-slider'));
    expect(ngxSlider).toBeTruthy();
  });

  it('should render app-multi-select-dropdown', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    fixture.detectChanges();
    const multiSelectDropdownComponent = fixture.debugElement.query(By.css('app-multi-select-dropdown'));
    expect(multiSelectDropdownComponent).toBeTruthy();
  });

  it('should call getCommonData and get response as undeined', fakeAsync(() => {
    const fixture = TestBed.createComponent(FiltersComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    let spy_getPosts = spyOn(service, "getCommonData").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    expect(component.getCommonData).toEqual(undefined);
  }))

  it('should select value', fakeAsync(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBeTruthy();
      expect(text).toBe('Choose ...');
    });
  }));

  it('should render funtion getRangeValue with pointerType 1 ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let e = {
      pointerType: 1,
      value: 1,
      hignhValue: 2
    }
    fixture.detectChanges();
    component.getRangeValue(e);
  });

  it('should render funtion getRangeValue with pointerType 0 ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let e = {
      pointerType: 0,
      value: 1,
      hignhValue: 2
    }
    fixture.detectChanges();
    component.getRangeValue(e);
  });

  it('should render funtion shareCheckedList and pass item ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let item = [{}]
    fixture.detectChanges();
    component.shareCheckedList(item);
  });

  it('should render funtion shareIndividualCheckedList  ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let item = [{}]
    fixture.detectChanges();
    component.shareIndividualCheckedList(item);
  });

  it('called changeLocation function on onchange location', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let e = {
      target: {
        value: 'AmsterdamAMS-01'
      }
    }
    fixture.detectChanges();
    component.changeLocation(e);
  });

  it('called onCheckboxChange function on checked ram', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let e = {
      target: {
        checked: true,
        value: 2
      }
    }
    fixture.detectChanges();
    component.onCheckboxChange(e);
  });

  it('called getCommonData end point successfully', () => {
    const response: any[] = [
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
    let fixture = TestBed.createComponent(FiltersComponent);
    let component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(CommonApiService);
    spyOn(service, 'getCommonData').and.returnValue(of(response));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.ramList = response[0].ramList;
      component.hddList = response[0].hddList;
      component.locations = response[0].locations;
      expect(component.ramList).toEqual(response[0].ramList);
      expect(component.hddList).toEqual(response[0].hddList);
      expect(component.locations).toEqual(response[0].locations);
    });
  });

});
