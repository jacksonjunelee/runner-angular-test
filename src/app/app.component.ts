import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { titles } from './data/titles';
import { startWith, map } from 'rxjs/operators';
interface Title {
  id: string;
  name: string;
  level_1_title: string | null;
  full_name: string;
  external_id: number;
  season_number: string | null;
  episode_number: string | null;
  title_level: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'by Sony Pictures Entertainment';
  title = 'the at-home Runner typeahead exercise';
  requirements = [
    `We have supplied sample json in the data directory to return title suggestions for a typeahead input component you'll create.`,
    'Please build a client that returns the sample json, as you would any client interacting with a json API.',
    'When the user types 3 or more characters into the input, it should show an Angular Material typeahead/autocomplete dropdown.',
    `When the user makes a selection from the dropdown, a new element below the input should show the selection's full name. Feel free to be creative with your styles.`,
    'The selected titles should be removable.',
    'This mimics a form element in our application where users assign title metadata to assets, so if you would like to build something that replicates a form submission, feel free to come up with your own solution to how it "saves" the data.',
  ];

  searchTitle: FormControl<string | null> = new FormControl<string | null>(
    null
  );
  options: Title[] = titles;
  filteredTitleOptions: any = [];
  selectedTitles: Title[] = [];
  savedTitles: Array<Title[]> = [];

  ngOnInit() {
    this.filteredTitleOptions = this.searchTitle.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val as string))
    );
  }

  filter(searchTerm: string): Title[] {
    if (searchTerm.length >= 3) {
      return this.options.filter(
        (option) =>
          option.full_name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
      );
    }
    return [];
  }

  displayFn(title?: Title): string {
    return title?.full_name!;
  }

  onSelected(title: Title): void {
    this.selectedTitles.push(title);
  }

  onDeleteClick(title: Title): void {
    this.selectedTitles = this.selectedTitles.filter(
      (option) => option.id !== title.id
    );
  }

  onClickSubmit(): void {
    this.savedTitles.push(this.selectedTitles);
    this.selectedTitles = [];
  }
}
