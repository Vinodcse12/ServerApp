import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { CommonApiService } from './services/common-api.service';
import { ServerApiService } from './services/server-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule ,
        ReactiveFormsModule
        
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MultiSelectDropdownComponent,
        FiltersComponent,
      ],
      providers: [CommonApiService, ServerApiService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'serverApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('serverApp');
  });

  it('should render app-header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const appHeader = fixture.debugElement.query(By.css('app-header'));
    expect(appHeader).toBeTruthy();    
  });

  it('should render app-home', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const appHome = fixture.debugElement.query(By.css('app-home'));
    expect(appHome).toBeTruthy();    
  });
});
