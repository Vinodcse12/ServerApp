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

  // it('should call getCommonData and get response as undeined', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(FiltersComponent);
  //   const component = fixture.debugElement.componentInstance;
  //   const service = fixture.debugElement.injector.get(CommonApiService);
  //   let spy_getPosts = spyOn(service,"setMaxStorage")
  //   //component.getPostDetails();
  //   expect(spy_getPosts).toEqual(undefined);
  // }))
  
  

});
