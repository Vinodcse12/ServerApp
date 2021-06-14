import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MultiSelectDropdownComponent } from './multi-select-dropdown.component';

describe('MultiSelectDropdownComponent', () => {
  let component: MultiSelectDropdownComponent;
  let fixture: ComponentFixture<MultiSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button', () => {
    const fixture = TestBed.createComponent(MultiSelectDropdownComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();    
  });
});
