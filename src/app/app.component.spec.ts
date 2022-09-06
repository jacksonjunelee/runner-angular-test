import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MatFormFieldModule, MatAutocompleteModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as pageTitle 'by Sony Pictures Entertainment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('by Sony Pictures Entertainment');
  });

  it(`should have as title 'the at-home Runner typeahead exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('the at-home Runner typeahead exercise');
  });

  it('should filter the searchterm from the titles', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const searchTerm = 'whe';
    expect(app.filter(searchTerm).length).toBeGreaterThan(1);
  });

  it('should return empty array is searchTerm is less than 3 characters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const searchTerm = '68';
    expect(app.filter(searchTerm).length).toEqual(0);
  });

  it('should display the full_name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const title = {
      id: '684417',
      name: 'WHEEL OF FORTUNE - DIG MER - IMAGES',
      level_1_title: 'WHEEL OF FORTUNE DIGITAL MERCHANDISE',
      full_name:
        'WHEEL OF FORTUNE DIGITAL MERCHANDISE // WHEEL OF FORTUNE - DIG MER - IMAGES',
      external_id: 839174,
      season_number: '3',
      episode_number: null,
      title_level: null,
    };
    expect(app.displayFn(title)).toEqual(title.full_name);
  });
});
