import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const nav = fixture.debugElement.query(By.css('nav'));
    expect(nav).toBeTruthy();    
  });

  it('should render a', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const a = fixture.debugElement.query(By.css('a'));
    expect(a).toBeTruthy();    
  });
});
