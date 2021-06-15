import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { CommonApiService } from '../services/common-api.service';
import * as Rx from 'rxjs';

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
      declarations: [ FiltersComponent ],
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
    let spy_getPosts = spyOn(service,"getCommonData").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    //component.getPostDetails();
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
      pointerType : 1,
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
      pointerType : 0,
      value: 1,
      hignhValue: 2
    }
    fixture.detectChanges();
    component.getRangeValue(e);
  });

  it('should render funtion shareCheckedList  ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let item = [{}]
    fixture.detectChanges();
    component.shareCheckedList(item);
  });

  it('should render funtion shareCheckedList  ', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    let item = [{}]
    fixture.detectChanges();
    component.shareIndividualCheckedList(item);
  });

  // it('should render funtion changeLocation  ', () => {
  //   const fixture = TestBed.createComponent(FiltersComponent);
  //   component = fixture.componentInstance;    
  //   fixture.detectChanges();
  //   component.changeLocation('USA');
  // });
  

});
